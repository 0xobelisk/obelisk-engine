System.register("q-bundled:///fs/cocos/gfx/base/framebuffer.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var GFXObject, ObjectType, Framebuffer;
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
    }],
    execute: function () {
      /**
       * @en GFX frame buffer.
       * @zh GFX 帧缓冲。
       */
      _export("Framebuffer", Framebuffer = /*#__PURE__*/function (_GFXObject) {
        _inheritsLoose(Framebuffer, _GFXObject);
        function Framebuffer() {
          var _this;
          _this = _GFXObject.call(this, ObjectType.FRAMEBUFFER) || this;
          _this._renderPass = null;
          _this._colorTextures = [];
          _this._depthStencilTexture = null;
          _this._width = 0;
          _this._height = 0;
          return _this;
        }
        _createClass(Framebuffer, [{
          key: "renderPass",
          get:
          /**
           * @en Get current render pass.
           * @zh GFX 渲染过程。
           */
          function get() {
            return this._renderPass;
          }

          /**
           * @en Get current color views.
           * @zh 颜色纹理视图数组。
           */
        }, {
          key: "colorTextures",
          get: function get() {
            return this._colorTextures;
          }

          /**
           * @en Get current depth stencil views.
           * @zh 深度模板纹理视图。
           */
        }, {
          key: "depthStencilTexture",
          get: function get() {
            return this._depthStencilTexture;
          }
        }, {
          key: "width",
          get: function get() {
            if (this.colorTextures.length > 0) {
              return this.colorTextures[0].width;
            } else if (this.depthStencilTexture) {
              return this.depthStencilTexture.width;
            }
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            if (this.colorTextures.length > 0) {
              return this.colorTextures[0].height;
            } else if (this.depthStencilTexture) {
              return this.depthStencilTexture.height;
            }
            return this._height;
          }
        }]);
        return Framebuffer;
      }(GFXObject));
    }
  };
});