System.register("q-bundled:///fs/cocos/gfx/empty/empty-texture.js", ["../base/define.js", "../base/texture.js"], function (_export, _context) {
  "use strict";

  var FormatSurfaceSize, IsPowerOf2, Texture, EmptyTexture;
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
    setters: [function (_baseDefineJs) {
      FormatSurfaceSize = _baseDefineJs.FormatSurfaceSize;
      IsPowerOf2 = _baseDefineJs.IsPowerOf2;
    }, function (_baseTextureJs) {
      Texture = _baseTextureJs.Texture;
    }],
    execute: function () {
      _export("EmptyTexture", EmptyTexture = /*#__PURE__*/function (_Texture) {
        _inheritsLoose(EmptyTexture, _Texture);
        function EmptyTexture() {
          return _Texture.apply(this, arguments) || this;
        }
        var _proto = EmptyTexture.prototype;
        _proto.initialize = function initialize(info, isSwapchainTexture) {
          var texInfo = info;
          if ('texture' in info) {
            texInfo = info.texture.info;
            this._isTextureView = true;
            this._viewInfo.copy(info);
          } else {
            this._viewInfo.texture = this;
            this._viewInfo.type = info.type;
            this._viewInfo.format = info.format;
            this._viewInfo.baseLevel = 0;
            this._viewInfo.levelCount = 1;
            this._viewInfo.baseLayer = 0;
            this._viewInfo.layerCount = 1;
          }
          this._info.copy(texInfo);
          this._isPowerOf2 = IsPowerOf2(this._info.width) && IsPowerOf2(this._info.height);
          this._size = FormatSurfaceSize(this._info.format, this.width, this.height, this.depth, this._info.levelCount) * this._info.layerCount;
        };
        _proto.destroy = function destroy() {};
        _proto.getGLTextureHandle = function getGLTextureHandle() {
          return 0;
        };
        _proto.resize = function resize(width, height) {
          this._info.width = width;
          this._info.height = height;
        }
        /**
         * @engineInternal
         */;
        _proto.initAsSwapchainTexture = function initAsSwapchainTexture(info) {};
        return EmptyTexture;
      }(Texture));
    }
  };
});