System.register("q-bundled:///fs/cocos/gfx/base/texture.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var GFXObject, ObjectType, TextureInfo, TextureViewInfo, Texture;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            https://www.cocos.com/
                                                                                                                                                                                                           
                                                                                                                                                                                                            Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                            of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                            in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                            use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                            of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                            subject to the following conditions:
                                                                                                                                                                                                           
                                                                                                                                                                                                            The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                            all copies or substantial portions of the Software.
                                                                                                                                                                                                           
                                                                                                                                                                                                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                            THE SOFTWARE.
                                                                                                                                                                                                           */
  return {
    setters: [function (_defineJs) {
      GFXObject = _defineJs.GFXObject;
      ObjectType = _defineJs.ObjectType;
      TextureInfo = _defineJs.TextureInfo;
      TextureViewInfo = _defineJs.TextureViewInfo;
    }],
    execute: function () {
      /**
       * @en GFX texture.
       * @zh GFX 纹理。
       */
      _export("Texture", Texture = /*#__PURE__*/function (_GFXObject) {
        _inheritsLoose(Texture, _GFXObject);
        function Texture() {
          var _this;
          _this = _GFXObject.call(this, ObjectType.TEXTURE) || this;
          _this._info = new TextureInfo();
          _this._viewInfo = new TextureViewInfo();
          _this._isPowerOf2 = false;
          _this._isTextureView = false;
          _this._size = 0;
          return _this;
        }
        Texture.getLevelCount = function getLevelCount(width, height) {
          return Math.floor(Math.log2(Math.max(width, height)));
        };
        _createClass(Texture, [{
          key: "type",
          get:
          /**
           * @en Get texture type.
           * @zh 纹理类型。
           */
          function get() {
            return this._info.type;
          }

          /**
           * @en Get texture usage.
           * @zh 纹理使用方式。
           */
        }, {
          key: "usage",
          get: function get() {
            return this._info.usage;
          }

          /**
           * @en Get texture format.
           * @zh 纹理格式。
           */
        }, {
          key: "format",
          get: function get() {
            return this._info.format;
          }

          /**
           * @en Get texture width.
           * @zh 纹理宽度。
           */
        }, {
          key: "width",
          get: function get() {
            return this._info.width;
          }

          /**
           * @en Get texture height.
           * @zh 纹理高度。
           */
        }, {
          key: "height",
          get: function get() {
            return this._info.height;
          }

          /**
           * @en Get texture depth.
           * @zh 纹理深度。
           */
        }, {
          key: "depth",
          get: function get() {
            return this._info.depth;
          }

          /**
           * @en Get texture array layer.
           * @zh 纹理数组层数。
           */
        }, {
          key: "layerCount",
          get: function get() {
            return this._info.layerCount;
          }

          /**
           * @en Get texture mip level.
           * @zh 纹理 mip 层级数。
           */
        }, {
          key: "levelCount",
          get: function get() {
            return this._info.levelCount;
          }

          /**
           * @en Get texture samples.
           * @zh 纹理采样数。
           */
        }, {
          key: "samples",
          get: function get() {
            return this._info.samples;
          }

          /**
           * @en Get texture flags.
           * @zh 纹理标识位。
           */
        }, {
          key: "flags",
          get: function get() {
            return this._info.flags;
          }

          /**
           * @en Get texture size.
           * @zh 纹理大小。
           */
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }

          /**
           * @en Get texture info.
           * @zh 纹理信息。
           */
        }, {
          key: "info",
          get: function get() {
            return this._info;
          }

          /**
           * @en Get view info.
           * @zh 纹理视图信息。
           */
        }, {
          key: "viewInfo",
          get: function get() {
            return this._viewInfo;
          }

          /**
           * @en Get texture type.
           * @zh 是否为纹理视图。
           */
        }, {
          key: "isTextureView",
          get: function get() {
            return this._isTextureView;
          }
        }]);
        return Texture;
      }(GFXObject));
    }
  };
});