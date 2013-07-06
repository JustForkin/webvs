/**
 * Copyright (c) 2013 Azeem Arshad
 * See the file license.txt for copying permission.
 */

/**
 * Special component that copies texture to target.
 * Also blends in additional texture if provided
 * @constructor
 */
function Copy(blendMode) {
    var fragmentSrc = [
        "uniform sampler2D u_copySource;",
        "void main() {",
        "   setFragColor(texture2D(u_copySource, v_position));",
        "}"
    ].join("\n");
    this.outputBlendMode = blendMode || blendModes.REPLACE;
    Copy.super.constructor.call(this, fragmentSrc);
}
extend(Copy, QuadBoxComponent, {
    componentName: "Copy",

    setCopy: function(copySource) {
        this.copySource = copySource;
    },

    init: function() {
        var gl = this.gl;
        this.texToBeCopiedLocation = gl.getUniformLocation(this.program, "u_copySource");
        Copy.super.init.apply(this, arguments);
    },
    update: function(srcTexture) {
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, this.copySource);
        gl.uniform1i(this.texToBeCopiedLocation, 1);
        Copy.super.update.call(this, srcTexture);
    }
});

/**
 * EffectList component. Effectlist
 * is the core component that doesnt lot of the rendering
 * work
 * @param options
 * @constructor
 */
function EffectList(options) {
    checkRequiredOptions(options, ["components"]);
    options = _.defaults(options, {
        output: "REPLACE",
        input: "IGNORE",
        clearFrame: false,
    });

    this._constructComponent(options.components);
    this.output = blendModes[options.output];
    this.input = options.input=="IGNORE"?-1:blendModes[options.input];
    this.clearFrame = options.clearFrame;
    this.first = true;

    EffectList.super.constructor.call(this);
}
extend(EffectList, Component, {
    componentName: "EffectList",

    swapFrame: true,

    _constructComponent: function(optList) {
        var components = [];
        var that = this;
        // construct components from JSON
        _.each(optList, function(componentOptions, i) {
            if(typeof componentOptions.enabled === "boolean" && !componentOptions.enabled) {
                return;
            }
            var type = componentOptions.type;
            var cloneCount = typeof componentOptions.clone === "undefined"?1:componentOptions.clone;
            _.times(cloneCount, function(cloneId) {
                var component = new Webvs[type](componentOptions);
                component.id = i;
                component.cloneId = cloneId;
                component.parent = that;
                components.push(component);
            });
        });
        this.components = components;
    },

    initComponent: function(gl, resolution, analyser, registerBank, bootTime) {
        EffectList.super.initComponent.apply(this, arguments);
        this._initFrameBuffer();

        var components = this.components;
        var outCopyComponent = new Copy(this.output);
        var copyComponent = new Copy();

        // initialize all the components
        var initPromises = [];
        for(var i = 0;i < components.length;i++) {
            var res = components[i].initComponent.apply(components[i], arguments);
            if(res) {
                initPromises.push(res);
            }
        }
        outCopyComponent.initComponent.apply(outCopyComponent, arguments);
        copyComponent.initComponent.apply(copyComponent, arguments);

        // TODO: find better solution, hack since effectlist
        // itself has swapFrame if output blending is gl blendmode
        // then the target texture of parent should have the precious texture
        if(outCopyComponent._glBlendMode) {
            this.copyOnSwap = true;
        }

        if(this.input !== -1) {
            var inCopyComponent = new Copy(this.input);
            inCopyComponent.initComponent.apply(inCopyComponent, arguments);
            this.inCopyComponent = inCopyComponent;
        }

        this.copyComponent = copyComponent;
        this.outCopyComponent = outCopyComponent;
        return D.all(initPromises);
    },

    _updateSubComponent: function(component) {
        if(component.swapFrame) {
            var oldTexture = this._getCurrentTextrue();
            this._swapFBAttachment();
            if(component.copyOnSwap) {
                this.copyComponent.setCopy(oldTexture);
                this._updateSubComponent(this.copyComponent);
            }
            component.updateComponent(oldTexture);
        } else {
            component.updateComponent();
        }
    },

    updateComponent: function(inputTexture) {
        EffectList.super.updateComponent.call(this, inputTexture);
        var gl = this.gl;

        // save the current framebuffer
        var targetFrameBuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);

        // switch to internal framebuffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
        gl.viewport(0, 0, this.resolution.width, this.resolution.height);
        this._setFBAttachment();

        if(this.clearFrame || this.first) {
            gl.clearColor(0,0,0,1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            this.first = false;
        }

        // blend in input texture onto internal texture
        if(this.input !== -1) {
            this.inCopyComponent.setCopy(inputTexture);
            this._updateSubComponent(this.inCopyComponent);
        }

        // render all the components
        var components = this.components;
        for(var i = 0;i < components.length;i++) {
            this._updateSubComponent(components[i]);
        }

        // switch to old framebuffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, targetFrameBuffer);
        gl.viewport(0, 0, this.resolution.width, this.resolution.height);

        // blend current texture to the output framebuffer using the copyComponent
        this.outCopyComponent.setCopy(this._getCurrentTextrue());
        this.outCopyComponent.updateComponent(inputTexture);
    },

    destroyComponent: function() {
        EffectList.super.destroyComponent.call(this);
        var gl = this.gl;
        var i;

        // destory all the sub-components
        for(i = 0;i < this.components.length;i++) {
            this.components[i].destroyComponent();
        }
        this.copyComponent.destroyComponent();

        // delete the framebuffer
        for(i = 0;i < 2;i++) {
            gl.deleteRenderbuffer(this.frameAttachments[i].renderbuffer);
            gl.deleteTexture(this.frameAttachments[i].texture);
        }
        gl.deleteFramebuffer(this.framebuffer);
    },

    _initFrameBuffer: function() {
        var gl = this.gl;

        var framebuffer = gl.createFramebuffer();
        var attachments = [];
        for(var i = 0;i < 2;i++) {
            var texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.resolution.width, this.resolution.height,
                0, gl.RGBA, gl.UNSIGNED_BYTE, null);

            var renderbuffer = gl.createRenderbuffer();
            gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.resolution.width, this.resolution.height);

            attachments[i] = {
                texture: texture,
                renderbuffer: renderbuffer
            };
        }

        this.framebuffer = framebuffer;
        this.frameAttachments = attachments;
        this.currAttachment = 0;
    },

    _setFBAttachment: function() {
        var attachment = this.frameAttachments[this.currAttachment];
        var gl = this.gl;
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, attachment.texture, 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, attachment.renderbuffer);
    },

    _getCurrentTextrue: function() {
        return this.frameAttachments[this.currAttachment].texture;
    },

    _swapFBAttachment: function() {
        this.currAttachment = (this.currAttachment + 1) % 2;
        this._setFBAttachment();
    },
});

window.Webvs.EffectList = EffectList;