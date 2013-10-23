/**
 * Copyright (c) 2013 Azeem Arshad
 * See the file license.txt for copying permission.
 */

(function(Webvs) {


Webvs.Resources = {
    images: {
        "circle_edgeonly_19x19": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhFBMVEUAAAADAwMvLy9dXV1tbW0CAgJaWlrR0dH8/Pz+/v79/f1bW1sKCgqlpaXT09Nubm4xMTEeHh7S0tKCgoIGBgaBgYEuLi5sbGxeXl4cHBwbGxtvb29fX19ra2swMDDU1NQFBQV/f3+np6eoqKgLCwvQ0NBqamoEBAQyMjJhYWFxcXH///8GRExTAAAAAWJLR0QrJLnkCAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAK1JREFUGNN1kMkSgyAQRBViGMc1SpCYBYl7/v8Do2gocpBDF/Wqa3qmPe/w+YSeKPEdEpwZhBgCi4IfihNMs/ySZwUm8e5KoOTmx0tINmeEpZ1yxciMTwtuGS/SNUhA5cRVQBaVSBwmUC6a4c1hNd6NT/z5HosSeDrsCa81V7HGooYpcyBFbZlGut3xBr1t2Gho9x66FvtB1GLose1sU1KZXpR02xqn+TNP43HBX4kJCUk5wyykAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwOS0wNC0yOVQwMTo0OTozMCswNTowMPYYqoAAAAAASUVORK5CYII=",
        "circle_edgeonly_29x29": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA3lBMVEUAAAANDQ0/Pz9xcXGRkZGbm5tycnIfHx+IiIjg4OD7+/v+/v7///8EBARoaGjn5+f8/Pzl5eXHx8e7u7sICAiXl5f6+vrx8fGVlZU4ODgKCgoBAQEJCQm+vr4oKCi9vb39/f2YmJikpKQLCwujo6NpaWmJiYknJyeKiorh4eE3Nzc2NjZAQEDk5ORzc3OSkpLGxsacnJy6urq5ubmdnZ3FxcWTk5M1NTWUlJTw8PDo6Oi8vLwgICCioqJqamqZmZmamprj4+PExMS4uLiLi4sODg5BQUF0dHSenp4PDw8GiJKZAAAAAWJLR0QMgbNRYwAAAAlwSFlzAAALEgAACxIB0t1+/AAAATRJREFUKM+tkltXgkAUhUczL+xBQGNAwEuRKVlpNxC8oGZa//8PRRoIjqsnz9M561tnZu+zNiFnqVz+onBZKOZzJ1ipXBEACgiVcumIiVUJVFZq9ZoiU0hVMQ2vVAZNbxgmMY2GroGpVmpTldFsJWOrjc71YbvKcGOnnrJvwbqJIAlNOyPDbkOKpd1Ba5Fs9TT0/3xWqM4Z1Kmz950X5HuODmThYdcUoRgctR7xtGuGGJkcNUcY7ppn+nLisq/07Z/dd7jxvxZHk38jzQOOerHmnEPHHB3HfkkfWu/4Vn58K1IKMMk6NuoIpvHQZZilsTEDmyeTGHYwOTzem6ATptJhhQy+61m/2fBcH2yR8SjOgyhXy9XHahnlKphnchXVdO3I+0w66ynh63Ozdb/c7eabnKV+AJulHNGcTEkjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwOS0wNC0yOVQwMTo0OTozMCswNTowMPYYqoAAAAAASUVORK5CYII=",
        "circle_fade_13x13": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA9lBMVEUAAAADAwMGBgYICAgCAgIKCgoVFRUeHh4hISEdHR0JCQkODg4jIyM4ODhISEhNTU1HR0c3NzcNDQ0LCwskJCRGRkZoaGh/f3+Hh4d+fn5lZWVEREQXFxc6OjppaWmSkpKtra22trarq6uPj49mZmYHBwcgICBLS0uCgoKurq7Kysrd3d3JycmsrKxRUVGMjIy4uLjf39/+/v63t7eIiIhMTEyDg4Ovr6/MzMzLy8uAgIBJSUkEBAQYGBg8PDxsbGyVlZWwsLC5ubmTk5M5OTkWFhYMDAwmJiZKSkqEhIRqamoQEBA9PT1SUlI7OzsPDw8BAQH///+Cg4ycAAAAAWJLR0RRlGl8KgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAKRJREFUCNcljukWgVAAhO9tvRKVEhGyhISEspWsZef9n0bL/Jo5c+bMB0AsiOEYBJkIkqJRjmKINOTZQpHjBVRKoiiV5UpVqdURGW/URrOltTvdnkBBoPcHQ2NkjidKkcYAI02tmT03F0sO4UBHjrta2xttu4s7z98Hh+PJOMuXa/wZRrfgbrkPnhUTkGf04t7OR/qm9zD0kYRUkcjQfh7O6F7i/uybEULrc6ImAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwMy0xMC0wN1QwMzoxNzoxMiswNjowMNF3hcgAAAAASUVORK5CYII=",
        "circle_heavyblur_19x19": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABVlBMVEUAAAACAgIHBwcNDQ0RERETExMBAQEICAgVFRUiIiItLS01NTU3NzcgICA0NDRGRkZVVVVeXl5hYWEjIyM9PT1XV1dubm6BgYGMjIyQkJAfHx9dXV19fX2YmJirq6u2tra6uroDAwMUFBQzMzNWVlafn5+7u7vPz8/b29vf398hISFFRUVtbW2Xl5fY2Njr6+v09PT39/cMDAwsLCxTU1OAgICpqanOzs7q6ur4+Pj8/Pz+/v6qqqoQEBBcXFyKioq0tLTa2tr9/f3///+1tbWLi4sSEhJfX1+NjY24uLje3t729vYyMjKJiYnZ2dnz8/MLCwsrKytSUlJ+fn6oqKjNzc3p6ekGBgZDQ0Nra2uVlZXV1dXy8vL19fUxMTFUVFR5eXmcnJzMzMzc3NwdHR06OjpaWlqUlJSnp6eysrJqamp8fHyIiIgwMDBCQkJRUVEqKioPDw8hvXKsAAAAAWJLR0RDZ9ANYgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAU5JREFUGNM9kFVbwmAARr9tMEpKUhghoyRHCQyHhMTI0SnlSMn/f6OI+l6+z7k5B4DrIBjhcDkIDIG/oTy+QCi6EwkFfB56uyBELJHK5PdymVQiRn5QFFEoVWqN9kGrUauUCuRK8nRKPWYwmswmowHTK3U8AB4tuBWz2R3OJ6fDbsOsuAUCsMvt8Zp9fiJA+H12r8ftgkEwFI48R2NxMkHGY9GXSDgUBBSefE2liUwimyCJ9FsuiVMgLyoU6VI5k81mE+USXSyI8oCqJKupWp28cvVaqpqsUIBpNFvtTjdAZshAt9NuNRsM6In7gyE96o7fx90RPRz0xT0AcSfT2Zxe+D58C3o+m0643yIwu1zN1putabtZz1ZLFr76Bl3L8O5zn9tju/DSxdxSMezheFrpV6fjgWV+Y6FwXnee4JOzLg+j/1WhHnOhLkzv1vkLuBJAlyODjrgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMjNUMTg6MDk6NDErMDY6MDDn3a6/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDA5LTA0LTI5VDAxOjQ5OjMwKzA1OjAw9hiqgAAAAABJRU5ErkJggg==",
        "circle_heavyblur_21x21": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEUAAAADAwMICAgNDQ0QEBASEhIBAQELCwsWFhYhISEqKiovLy8yMjIFBQUiIiJBQUFNTU1UVFRXV1cUFBQoKCg+Pj5TU1NlZWV0dHR9fX2AgIBmZmYRERFCQkJdXV13d3eNjY2cnJylpaWoqKgKCgqampqvr6/AwMDKysrNzc0VFRUxMTF2dnaZmZm2trbOzs7e3t7o6Ojr6+sHBwcfHx9AQECMjIzl5eXy8vL4+Pj6+voMDAxMTExzc3Obm5u/v7/d3d39/f3+/v4PDw8uLi58fHykpKTIyMjn5+f///8wMDBVVVV+fn6mpqbLy8vp6en5+fktLS1SUlJ7e3ujo6PHx8fm5ub39/dKSkpxcXG9vb3c3Nzx8fEGBgY/Pz9jY2OKioqtra3j4+NQUFCWlpazs7Pb29sCAgIJCQkgICA8PDxaWlp6enqsrKy8vLzGxsbJyckmJiaJiYmhoaEEBAQ7OztiYmJwcHB5eXlJSUkTExMeHh4sLCwdHR0ODg7+hS0uAAAAAWJLR0RJhwXkfAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAZhJREFUGNNFkfs3wnAYxr9jkynXXSqyXLZpGMXShWhbRWFCmUvlslgql1Xk/rdbEc+Pn/Oezznv8wDQDtTVDSNwdxfUA/4CWXrRPqvN2of2WqAO7EcGbINDwyPDQ4O2AaT/F2I4QdodzlGnY4wkcKyNIRc+TrknJqempyYn3NQ47mpJaJSgnAw74+E8MyzjpAiUNk9n58h5fmHR61vyebkFfp6cm4XAsuC3r7BcIBgKh4IBjl2x+4VlsIqvRdY3osGwKInhYHRjPbKGW4AcI+OJza2QmEwmxdDWZiJOxmQAp7Z3dpW9tGRSKb2n7O5sp2Ag7x8cZrJHqiglJVE9ymYOD/ZlYMGPT5jTs1zbmzs7ZU6OTW9eKJxfXCpXOTWt5q6Uy4vzgpAHEJbSHMVrz03AF7hRrosOLYXpAJRuy5Vq8e7+4fHh/q5YrZRvS+bHOmwUKpEaX0/U+Vqk4jdgvVVPAzGetOfmS/yl+aw9GUjjp8qGLFiJV43UXgmrIDc6teult3fjI/ZhfL6V9P+JgJ6nv+QvOv+7zzdrwFa1yCl9GAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0xMC0yM1QxODowOTo0MSswNjowMOfdrr8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMDktMDQtMjlUMDE6NDk6MzArMDU6MDD2GKqAAAAAAElFTkSuQmCC",
        "circle_heavyblur_29x29": "data:image/png;base64,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",
        "circle_sharp_09x09": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUAAAACAgJhYWG+vr7b29tiYmKoqKj+/v7///9jY2PBwcHf39/CwsJlZWUDAwOsrKxmZmbDw8Pg4ODJk53hAAAAAWJLR0QIht6VegAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAElJREFUCNdVzUsSwCAIA1CtVakfUO9/WINlY1YvM0xw7op/whuiP0yZiHLSEpUoH1zoT4GrucLN3OBu9x1mOTvCOspjrjn4froBkegClm06guAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMjNUMTg6MDk6NDErMDY6MDDn3a6/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDAzLTA2LTI5VDE5OjA5OjMyKzA2OjAw50C8rwAAAABJRU5ErkJggg==",
        "circle_sharp_19x19": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAe1BMVEUAAAAFBQVBQUGGhoaurq68vLyvr68GBgYBAQFNTU3Ozs78/Pz+/v7///+Kior6+vr9/f2Li4vR0dFCQkJDQ0OIiIiJiYmzs7PBwcG0tLRERETT09NRUVH7+/uQkJCRkZFTU1PU1NRUVFQHBwdHR0eMjIy1tbXDw8NISEjxdmZoAAAAAWJLR0QN9rRh9QAAAAlwSFlzAAALEgAACxIB0t1+/AAAAJ5JREFUGNN9ke0SgiAUBUUrQbhA9qGpWGZa7/+EgZoCNu7PnTPALEGwAQqj3f4QhbHlMEkoAwBGE4LnIRfwQ3A0LbmEBXkc10SAjSBGxim4pObKE/UsPWt7YZ5lV20z8Mm0zVc2/7u9actX53JtC+lZWZj3lp4th0SVcqSqxg6106GeqqF6Wav7nBg/Gjn0lc0TW93bV9e/++7Tbn3YF1ESEZb9e6HrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwOS0wNC0yOVQwMTo0OTozMCswNTowMPYYqoAAAAAASUVORK5CYII=",
        "circle_slightblur_13x13": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAASFBMVEUAAAABAQEODg4jIyMtLS0EBARsbGyZmZmoqKiKiorT09Py8vL4+Pj7+/v+/v7///8kJCRtbW3U1NSLi4uampqpqakPDw8uLi7NF0qwAAAAAWJLR0QPGLoA2QAAAAlwSFlzAAALEgAACxIB0t1+/AAAAGhJREFUCNdljkcOwCAMBCmmF9NC/v/TGJBySHwbjXbXjH2PCwlS8AMKtLFGg9oGnA8xeAfLCu1Txpy8FkTShIyIORhJBDbiumiBqLyurFxtO9d2jkNv1Nn67qS9Oq5Rzx7ZWe4y+e/HB1hhBEsscYLrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwMy0xMC0wNlQyMTozODowMCswNTowMB7KOaoAAAAASUVORK5CYII=",
        "circle_slightblur_21x21": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAvVBMVEUAAAACAgIDAwMEBAQQEBAgICAsLCwwMDABAQEODg5MTExnZ2d5eXl+fn4TExM9PT1tbW2Xl5e0tLTFxcXKysqvr6/W1tbs7Oz19fX4+Pjg4OD39/f9/f3+/v6YmJj///8RERFoaGi1tbV6enrGxsb29vYxMTGAgIDLy8t/f38tLS0hISG2trbt7e1NTU2ZmZnX19dubm6xsbHh4eGwsLAPDw8+Pj57e3sUFBRvb2/MzMxpaWmBgYEiIiIyMjK3SG45AAAAAWJLR0QfBQ0QvQAAAAlwSFlzAAALEgAACxIB0t1+/AAAAPNJREFUGNN9ketygjAQhZVLCpgKagEjRAKC2nAVC2itvv9jOcRI0Rk9P7/ZOXv27GDwXkNh+IxESQYfQJbEHlNUoI3gJxxpQFU6ONaNyXT2NZtODH18p6oOTcueo7ltmVBXuScwzIXjYoxdZ2Ea4OYtaUvLwV4r7FhLjTAq+4Hteje5duDLLCdYhRHmFEchBG1uYb3Zoo6i7fdaaGfp4+yKshtjP0k73zTwY7aNZHnBLTAq8ozwvLtyj1hetP/ZUd5FVTdlkUYoSouyqat7D4f6mCfhb5jkx/rwX09Fs1Pz15wyWim9LkVyphcak36/r37xpCumwx2LqyXT8gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0xMC0yM1QxODowOTo0MSswNjowMOfdrr8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMDMtMTAtMDZUMjA6NDA6MjIrMDU6MDAsCqMMAAAAAElFTkSuQmCC",
        "hexagon-h_blur_123x123": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7AgMAAAApqRfsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEUAAACIiIjMzMz///+lqQOCAAAAAWJLR0QDEQxM8gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAXJJREFUSMft17FVwzAURuHgwhSMQKERvEI2ygh4BK1BltAKjECREVxAIQSH4MTvSfpvKhpQe8/J8efY0vNu979+Y90dzXr2/b6Y9eH7g+1l73pwfXb94PqL68n1k7t8l8ub7YPv75JXAT3PA0PVLfBQdQtMVTfAiueAQ92z5DngY90NMDR6lDwLTI2+ATZ4Bji0epY8A2zxtsCp2aPkbYGp2U+StwEO7Z4lbwNs867AqdNX4FOnv0peKYvkXYBjr2fJuwB7vBU4dXuUvBWYun2RvB/g2O9Z8r6Ae8k7AyfRo+SdgUn0RfK+gaPqubUzWmBQvXCn36frIx/dH7y/k+jxhv+Xng96vuj5pOcb348+MN70ftL7TfsD7S+0P+H+1gOu+yPtr7Q/0/5O5wOdL3g+tYHX843ORzpf6Xym853mA5wvguTxfEPzEc1XNJ/RfIfzYQ2cTaf5lOZbmo9pvqb5HOd7D5xdp+8L+j6h75u/uj4BxUT7mSYYfpEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMjNUMTg6MDk6NDErMDY6MDDn3a6/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDExLTA0LTExVDAwOjM0OjU4KzA1OjAwAHKiyQAAAABJRU5ErkJggg==",
        "square_edgeonly_24x24": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEX///8AAABVwtN+AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABJJREFUCNdjYEAC8v9/UAUjAQD7uCWNIgeQwQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0xMC0yM1QxODowOTo0MSswNjowMOfdrr8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMDMtMTAtMDZUMjE6NTc6NDYrMDU6MDDg7pOkAAAAAElFTkSuQmCC",
        "square_edgeonly_28x28": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcAQMAAABIw03XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEX///8AAABVwtN+AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABNJREFUCNdjYEAF8v//N9CPQAUArWA5f2D2DX0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMjNUMTg6MDk6NDErMDY6MDDn3a6/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDAzLTEwLTA2VDIxOjU4OjQ0KzA1OjAwhnrZAAAAAABJRU5ErkJggg==",
        "square_edgeonly_30x30": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAQMAAAAB/jzhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEX///8AAABVwtN+AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABRJREFUCNdjYEAF8v//PxgIAhUAAOmGR7lQ6SOhAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwMy0xMC0wNlQyMTo1OToxOCswNTowMOb41i4AAAAASUVORK5CYII=",
        "square_sharp_20x20": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABJJREFUCNdjYIAC+/9/qIqhAABLlCyJ9A7ihwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0xMC0yM1QxODowOTo0MSswNjowMOfdrr8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMDMtMDYtMjlUMTk6Mzg6MDQrMDU6MDBuiiynAAAAAElFTkSuQmCC",
        "square_sharp_32x32": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAQMAAAC2MCouAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABVJREFUCNdjYMAB+P////9hCJM4AACQJX+BjmWyDAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0xMC0yM1QxODowOTo0MSswNjowMOfdrr8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMDktMTAtMDhUMDE6NTM6NTYrMDU6MDBzUO7GAAAAAElFTkSuQmCC",
        "square_sharp_48x48": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4AQMAAACSSKldAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABZJREFUGNNjYCAA+P+DwIdReoBoAgAAldYe8LB8aUoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMjNUMTg6MDk6NDErMDY6MDDn3a6/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDA5LTEwLTA4VDAxOjUzOjI4KzA1OjAwKaqcggAAAABJRU5ErkJggg==",
        "square_sharp_60x60": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABEAQMAAAAC3QHxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAALEgAACxIB0t1+/AAAABdJREFUKM9jYCAS8P+HgFHWKIuaLCIBAH8IpfBELmrmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwOS0xMC0wOFQwMTo1NDozMiswNTowMKOs2CsAAAAASUVORK5CYII=",
        "square_sharp_64x64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABdJREFUKM9jYKAV+A8Fo8xR5lBk0gYAAMbE/hBbX3sVAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwOS0xMC0wOFQwMjoxODowMCswNjowML8mns0AAAAASUVORK5CYII=",
        "square_sharp_72x72": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUAQMAAAAmpYKCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABpJREFUKM9jYKASYP4PBX9G2aPsUTa12VQCABpBhZc9Qe3KAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwOS0xMC0wOFQwMjowMjoxNiswNjowMMbw5GAAAAAASUVORK5CYII=",
        "square_sharp_96x96": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwAQMAAAD8LmYIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAB1JREFUOMtjYBgo8B8JjHJHuaPcUe4od/BwBwYAAB86e71LirdOAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTIzVDE4OjA5OjQxKzA2OjAw592uvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwOS0xMC0wOFQwMjoxODo0NiswNjowMFi8pQ0AAAAASUVORK5CYII=",
        "square_sharp_250x250": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAEKAQMAAADQBYmKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAALEgAACxIB0t1+/AAAADlJREFUaN7tykENAAAIBCD7p7KZFrgZwMGbKrK5taIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoivKpkCyUd+T92W3T7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0xMC0yM1QxODowOTo0MSswNjowMOfdrr8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTEtMDEtMDVUMTg6NTk6NTQrMDU6MDBwiLErAAAAAElFTkSuQmCC",
    }
};

})(Webvs);
