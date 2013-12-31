/**
 * Copyright (c) 2013 Azeem Arshad
 * See the file license.txt for copying permission.
 */

CanvasTestWithFM("Picture test", 3, {async: true}, function(canvas, gl, fm, copier, resume) {
    var main = new DummyMain(canvas, copier);
    var parent = new DummyParent(fm);
    main.rsrcMan.registerUri("test_image_1.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAIAAADZ8fBYAAAAA3NCSVQICAjb4U/gAAACv0lEQVRIidWWMXOiQBTHl5MCFkmbdEuHRdLImNglHwf5JEZLZQgpTT5EZjRWzliRxi/AxnEgnYwJycCye8XLeGfO00h19xoY3s5v//v27f5B6P8KaXda1/V6vV6v1w3DwBinaUopDYLg6elptVqVmZAQ0m63wzDM85xzzjkXQsBLnudhGLbbbULIAURZlm3bjqIIWIyxxWIxnU6Hw+F0Ol0sFowxmCOKItu2ZVneD1UUxfO8LMs450mSuK7bbDYxxpIkIYQkScIYN5tN13WTJOGcZ1nmeZ6qqnuUep7HGOOcj8fjWq22Y3CtVnt8fOScF0Vxc3OzS7Vt26D0/v5e07S9i9M07e7uDlS3Wq3tgwghUNPxePwd6BoNqqMo2r6N19fXUNPdy/8zTNOEWnc6na85XdfDMBRCuK57EBTCdV0hBKVU1/WNxOXlZZ7njLGLi4sS3PPzc8ZYnudXV1fw5Qc8LMuqVCovLy+z2awEdzabxXFcqVQsy9rgGoaBEKKUvr+/l+B+fHw8Pz8jhNZb98mFzn99fRVClOAKIVarlSRJ60b65KZpKoSoVqtwrg4NSZKq1aoQIk3TDW4YhrAKRVFKcBVFgQoA5xc3CIKiKI6Pj8/OzkpwT09PT05OiqIIgmAjoes6pVQI0e/3S3D7/f72/kUIdTodOG+maR4ENU1zuVxuP28IIUJIHMec89FohDH+JhRjPBwOOedxHEOzbolWqwX32WAw+A4aYzwYDOA+cxznr+NkWfZ9vygKUL27IKZpjkYjuH9939/jGqqq+r4PqpfLZa/XazQaqqr+7heNRqPX60FNsyy7vb3d4xdr1Y7jQK3B3+bz+WQyeXh4mEwm8/l87W9xHDuO8y1/W4dhGN1ul1IKtvTFjyml3W73rxu19//h6OjIsizLsgghmqa9vb2t/x+SJDlA5r8ePwEtX9iShlMEzwAAAABJRU5ErkJggg==");

    var testValues = [
        {x: -0.7, y: -0.7, src: "test_image_1.png"},
        {x: 0, y: 0, src: "avsres_texer_square_edgeonly_30x30.bmp"},
        {x: -1, y: 0.5, src: "avsres_texer_circle_edgeonly_19x19.bmp"}
    ];
    var expectedImages = [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFm0lEQVR4Xu2aSyi2WxSAl8vAfUgoDIgiA3IfCDFjKOVScr9LGBIzIvdLbglJZsxEMnAvBhiQCQoxczcg56x9zvfnP53T+v/v29Z59a63jKzvXft7nm/ttfe7XzsA+PjzTy6DELATIQYx8fcwRIixfIAIESEGI2Cw4UiFiBCDETDYcKRCRIjBCBhsOFIhIsRgBAw2HKkQEWIwAgYbjlSICDEYAYMNRypEhBiMgMGGw1Ih7u7uEBERof4CAgLAxcUFnp+f4fz8HPb29mB/fx8eHh4Mhub/Gc6XCvH394eysjLIysoCX19fcHBwUN/Szs4OPj7+Oqh8f3+Hy8tLmJubg6GhISXJzNeXCHF0dITCwkJobm4GLy8vJQDB39zcwMXFBTw+PoKbmxv4+fmp/6MoFIT/b2lpgbGxMXh7ezOlF+1CnJycoKurCwoKCgDF4FQ0MzMD09PTcHBwAC8vLwo+SnJ2dobw8HDIzc2FnJwcwKkNRYyPj0NdXZ2KNdulVQgK6Ovrg6KiIrC3t4e1tTUoLy+H4+NjkmtISAgMDAxAUlKSEjY6OgqVlZWmqxStQkpLS6G3t1dVxuzsLJSUlMDT0xMpwxLg6uoKw8PDkJ2drUTU1NSovmKmS5sQbODb29uqJ2BlpKen/5aMz1IWFxdVpWBPiY2NNVWj1yakra0NGhoaVM+IiYn5pWnqv375wcHBsLu7q3pKR0cHNDY2mqZItAhBcIeHh4BVMjg4CBUVFTYDxH6C/QdXZWFhYabZp2gRkpiYCCsrK2rllJCQADs7OzYLiY6Ohs3NTdXgU1NT1TRohkuLEFyi4tRyfX0NQUFBahdu64VL4tPTU/Dx8VFTYWdnp623/Baf1yIEV1a4RMWmjhVi2YXbQgCrbWNjQzX1/v5+qK6utuV23+azWoTgzho3gsvLy5CWlqbtyy8tLan7TUxMqPub4dIi5KsqZH19HeLi4tSGsaqqygw+9Lzb+7mHBAYGannkIT3Eht/f51VWfHy82kPYekVFRcHW1passqwBifuQo6Mj9fQWpxds8LZe2MhxPyP7ECtJtre3Q319vdrA4R7i5OTEyjsB4E4d9zIeHh6yU7eWIu7SEaKnpyesrq5CRkaGVfsRPE1cWFiAlJQUuL29Vcves7Mza4f17T6nZZVl+dZ4OtjT06Oe9uIZCD79/Z1NIsrAp714NoJPe2tra9WjGDNdWoWgCOwheFqIGzusFOwDvzJ94TSFn01OTlaNHPc2+FmznRxqFYK/ZFyudnd3Q35+vqqU+/t7dVo4NTWlGv/r6+tPJ4ahoaGQl5enTg2xZ6CAyclJdRYiJ4aa5gYUUVxcDE1NTaqnWM7U8VkXvsRgOVPHvuPt7f3jTB17RmtrK4yMjJiuMizotVfIZ6f4yg9OO5mZmeqtEzzWxeufb51cXV3B/Py8mrLM1MD/7ff/pUIsCXEqioyMVH9YFXhUi0e7n9/Luru701Sf3/s2LEK+NyLe0YsQXt5kNhFCIuINECG8vMlsIoRExBsgQnh5k9lECImIN0CE8PIms4kQEhFvgAjh5U1mEyEkIt4AEcLLm8wmQkhEvAEihJc3mU2EkIh4A0QIL28ymwghEfEGiBBe3mQ2EUIi4g0QIby8yWwihETEGyBCeHmT2UQIiYg3QITw8iaziRASEW+ACOHlTWYTISQi3gARwsubzCZCSES8ASKElzeZTYSQiHgDRAgvbzKbCCER8QaIEF7eZDYRQiLiDRAhvLzJbCKERMQbIEJ4eZPZRAiJiDdAhPDyJrOJEBIRb4AI4eVNZhMhJCLeABHCy5vMJkJIRLwBIoSXN5lNhJCIeANECC9vMpsIIRHxBogQXt5kNhFCIuINECG8vMlsIoRExBsgQnh5k9lECImIN0CE8PIms4kQEhFvgAjh5U1m+wPzMywfiXASHQAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABz0lEQVR4Xu3cQWrDUBAEUen+h1YSyCJkOfwhhfIMXk67qVJ7ZXxf1/V8vr0iBG5CIia+axDS8nERQkiMQKyOhRASIxCrYyGExAjE6lgIITECsToWQkiMQKyOhRASIxCrYyGExAjE6lgIITECsToWQkiMQKyOhRASIxCrYyGExAjE6lgIITECsToWQkiMQKyOhRASIxCrYyGExAjE6lgIITECsToWQkiMQKyOhRASIxCrYyGExAjE6lgIITECsToWQkiMQKyOhRASIxCrYyGExAjE6lgIITsEnudv/hjvvr+e6XOv1yyEkHMPxZEkQo5gPBfyU8jpr5HfLTc/65VfWYSce9DHSZtPrYUMtBAygLZ5Qsgm3UE2IQNomyeEbNIdZBMygLZ5Qsgm3UE2IQNomyeEbNIdZBMygLZ5Qsgm3UE2IQNomyeEbNIdZBMygLZ5Qsgm3UE2IQNomyeEbNIdZBMygLZ5Qsgm3UE2IQNomyeEbNIdZBMygLZ54odym3QH2YQMoG2eELJJ9x9nv+anpG9xSEjMJCGExAjE6lgIITECsToWQkiMQKyOhRASIxCrYyGExAjE6lgIITECsToWQkiMQKyOhRASIxCrYyExIR9iOQYQV1UlTgAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAD6klEQVR4Xu2ZOUskURhFb7sFdiIYGpgKLu0W6s8QBVHc2kRRMVAQF9zBRAVNFHFDVNp/oaH7hrGYCiYauLXzPcaGHnWqBiu4M3MLBBtelddz6vZ7ryoEIP7jRwcJgZCEkJj4GUNCuHxAQiSEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQySEjABZHDVEQsgIkMVRQ/4WIampqSgoKEBRURGysrJwd3eH09NTnJ+f4+Xlhezf+HfifGhISkoKampq0Nvbi/z8fNjneDyOUCiE19dXXFxcYGpqCpubm+6zjmAJJAnJzMzE4uKiE3J5eel+393dxe3tLbKzs1FZWYmWlhYnamtrC9FoFA8PD8Em+s+vlhBiTVhfX0d1dTUmJiYwNjaGx8fHD3gyMjLQ39+Pvr4+bG9vo66uTk0J8CZKCKmtrcXa2hrGx8cxODjo+SeGh4edmPr6emxsbHiO1wB/BJwQm8CPj4/dXFFeXv5pM369nDVlf3/fzS3FxcWa6P3x9hzlhNhK6vDwEF1dXZibm/M86X1Ae3s7ZmZmUFZWhpOTE9/naeDXBJwQ+9pZXl5GaWnpH4E1kUdHR2hsbHRfdzq+T8AJ6ejowPT0NHJzc3Fzc+P7qjk5Obi+vkZ3dzdmZ2d9n6eBPhtSUlLiNn9+j/eGNDU1YXV11e9pGvcbAq4hkUgEBwcH6OzsxPz8vG9gbW1trhm2ELBFgY7vE0issmxStkciBvfp6cnzyunp6W6VZSs0E6rHKZ7IfA1I7ENsg7eysoKRkRHYHsPrGBoacvuVhoYGt6HUEQyBpJ26bfCqqqowOjqKycnJT/cj1gzbpQ8MDGBnZwe2oVQ7gpFhV0l6lhUOh7G0tOSknJ2dYWFhAXt7e4lnWRUVFWhtbUVhYSFisRiam5txf38fXBpdKVmI8bA5we76np4e5OXlfXjae3V15Z72WpvUjODvoC9fUKWlpbl3ITZhv78PsYnflsXPz8/BJ9EVHQG9MSS7ESREQsgIkMVRQySEjABZHDVEQsgIkMV5AwDlYBBc1uFzAAAAAElFTkSuQmCC"
    ];

    var pictures;
    main.rsrcMan.onReady = function() {
        _.each(pictures, function(picture, index) {
            fm.setRenderTarget();

            // clear
            gl.clearColor(0,0,0,1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            picture.draw();
            
            fm.restoreRenderTarget();
            copier.run(null, null, fm.getCurrentTexture());

            imageFuzzyOk("Picture " + index, gl, canvas, expectedImages[index]);
            picture.destroy();
        });
        resume();
    };

    pictures = _.map(testValues, function(opts) {
        return new Webvs.Picture(gl, main, parent, opts);
    });


});
