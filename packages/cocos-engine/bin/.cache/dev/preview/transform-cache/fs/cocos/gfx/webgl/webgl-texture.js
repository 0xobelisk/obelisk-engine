System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-texture.js", ["../base/define.js", "../base/texture.js", "./webgl-commands.js", "./webgl-define.js"], function (_export, _context) {
  "use strict";

  var FormatSurfaceSize, TextureInfo, IsPowerOf2, TextureUsageBit, FormatInfos, Texture, WebGLCmdFuncCreateTexture, WebGLCmdFuncDestroyTexture, WebGLCmdFuncResizeTexture, WebGLDeviceManager, WebGLTexture;
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
    setters: [function (_baseDefineJs) {
      FormatSurfaceSize = _baseDefineJs.FormatSurfaceSize;
      TextureInfo = _baseDefineJs.TextureInfo;
      IsPowerOf2 = _baseDefineJs.IsPowerOf2;
      TextureUsageBit = _baseDefineJs.TextureUsageBit;
      FormatInfos = _baseDefineJs.FormatInfos;
    }, function (_baseTextureJs) {
      Texture = _baseTextureJs.Texture;
    }, function (_webglCommandsJs) {
      WebGLCmdFuncCreateTexture = _webglCommandsJs.WebGLCmdFuncCreateTexture;
      WebGLCmdFuncDestroyTexture = _webglCommandsJs.WebGLCmdFuncDestroyTexture;
      WebGLCmdFuncResizeTexture = _webglCommandsJs.WebGLCmdFuncResizeTexture;
    }, function (_webglDefineJs) {
      WebGLDeviceManager = _webglDefineJs.WebGLDeviceManager;
    }],
    execute: function () {
      _export("WebGLTexture", WebGLTexture = /*#__PURE__*/function (_Texture) {
        _inheritsLoose(WebGLTexture, _Texture);
        function WebGLTexture() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Texture.call.apply(_Texture, [this].concat(args)) || this;
          _this._gpuTexture = null;
          _this._lodLevel = 0;
          return _this;
        }
        var _proto = WebGLTexture.prototype;
        _proto.initialize = function initialize(info, isSwapchainTexture) {
          var texInfo = info;
          var viewInfo = info;
          if ('texture' in info) {
            texInfo = viewInfo.texture.info;
            this._isTextureView = true;
          }
          this._info.copy(texInfo);
          this._isPowerOf2 = IsPowerOf2(this._info.width) && IsPowerOf2(this._info.height);
          this._size = FormatSurfaceSize(this._info.format, this.width, this.height, this.depth, this._info.levelCount) * this._info.layerCount;
          if (!this._isTextureView) {
            this._gpuTexture = {
              type: texInfo.type,
              format: texInfo.format,
              usage: texInfo.usage,
              width: texInfo.width,
              height: texInfo.height,
              depth: texInfo.depth,
              size: this._size,
              arrayLayer: texInfo.layerCount,
              mipLevel: texInfo.levelCount,
              samples: texInfo.samples,
              flags: texInfo.flags,
              isPowerOf2: this._isPowerOf2,
              glTarget: 0,
              glInternalFmt: 0,
              glFormat: 0,
              glType: 0,
              glUsage: 0,
              glTexture: null,
              glRenderbuffer: null,
              glWrapS: 0,
              glWrapT: 0,
              glMinFilter: 0,
              glMagFilter: 0,
              isSwapchainTexture: isSwapchainTexture || false
            };
            if (!this._gpuTexture.isSwapchainTexture) {
              WebGLCmdFuncCreateTexture(WebGLDeviceManager.instance, this._gpuTexture);
              WebGLDeviceManager.instance.memoryStatus.textureSize += this._size;
            }
            this._viewInfo.texture = this;
            this._viewInfo.type = info.type;
            this._viewInfo.format = info.format;
            this._viewInfo.baseLevel = 0;
            this._viewInfo.levelCount = info.levelCount;
            this._viewInfo.baseLayer = 0;
            this._viewInfo.layerCount = info.layerCount;
          } else {
            this._viewInfo.copy(viewInfo);
            this._lodLevel = viewInfo.baseLevel;
            this._gpuTexture = viewInfo.texture._gpuTexture;
          }
        };
        _proto.destroy = function destroy() {
          if (!this._isTextureView && this._gpuTexture) {
            WebGLCmdFuncDestroyTexture(WebGLDeviceManager.instance, this._gpuTexture);
            WebGLDeviceManager.instance.memoryStatus.textureSize -= this._size;
            this._gpuTexture = null;
          }
        };
        _proto.getGLTextureHandle = function getGLTextureHandle() {
          var gpuTexture = this._gpuTexture;
          if (!gpuTexture) {
            return 0;
          }
          if (gpuTexture.glTexture) {
            return gpuTexture.glTexture;
          } else if (gpuTexture.glRenderbuffer) {
            return gpuTexture.glRenderbuffer;
          }
          return 0;
        };
        _proto.resize = function resize(width, height) {
          if (this._info.width === width && this._info.height === height) {
            return;
          }
          if (this._info.levelCount === WebGLTexture.getLevelCount(this._info.width, this._info.height)) {
            this._info.levelCount = WebGLTexture.getLevelCount(width, height);
          } else if (this._info.levelCount > 1) {
            this._info.levelCount = Math.min(this._info.levelCount, WebGLTexture.getLevelCount(width, height));
          }
          var oldSize = this._size;
          this._info.width = width;
          this._info.height = height;
          this._size = FormatSurfaceSize(this._info.format, this.width, this.height, this.depth, this._info.levelCount) * this._info.layerCount;
          if (!this._isTextureView && this._gpuTexture) {
            this._gpuTexture.width = width;
            this._gpuTexture.height = height;
            this._gpuTexture.size = this._size;
            if (!this._gpuTexture.isSwapchainTexture) {
              WebGLCmdFuncResizeTexture(WebGLDeviceManager.instance, this._gpuTexture);
              WebGLDeviceManager.instance.memoryStatus.textureSize -= oldSize;
              WebGLDeviceManager.instance.memoryStatus.textureSize += this._size;
            }
          }
        }

        // ======================= Swapchain Specific ======================= //

        /**
         * @engineInternal
         */;
        _proto.initAsSwapchainTexture = function initAsSwapchainTexture(info) {
          var texInfo = new TextureInfo();
          texInfo.format = info.format;
          texInfo.usage = FormatInfos[info.format].hasDepth ? TextureUsageBit.DEPTH_STENCIL_ATTACHMENT : TextureUsageBit.COLOR_ATTACHMENT;
          texInfo.width = info.width;
          texInfo.height = info.height;
          this.initialize(texInfo, true);
        };
        _createClass(WebGLTexture, [{
          key: "gpuTexture",
          get: function get() {
            return this._gpuTexture;
          }
        }, {
          key: "lodLevel",
          get: function get() {
            return this._lodLevel;
          }
        }]);
        return WebGLTexture;
      }(Texture));
    }
  };
});