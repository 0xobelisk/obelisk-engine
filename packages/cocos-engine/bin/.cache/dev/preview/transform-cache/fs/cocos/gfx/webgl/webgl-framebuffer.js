System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-framebuffer.js", ["../base/framebuffer.js", "./webgl-commands.js", "./webgl-define.js"], function (_export, _context) {
  "use strict";

  var Framebuffer, WebGLCmdFuncCreateFramebuffer, WebGLCmdFuncDestroyFramebuffer, WebGLDeviceManager, WebGLFramebuffer;
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
    setters: [function (_baseFramebufferJs) {
      Framebuffer = _baseFramebufferJs.Framebuffer;
    }, function (_webglCommandsJs) {
      WebGLCmdFuncCreateFramebuffer = _webglCommandsJs.WebGLCmdFuncCreateFramebuffer;
      WebGLCmdFuncDestroyFramebuffer = _webglCommandsJs.WebGLCmdFuncDestroyFramebuffer;
    }, function (_webglDefineJs) {
      WebGLDeviceManager = _webglDefineJs.WebGLDeviceManager;
    }],
    execute: function () {
      _export("WebGLFramebuffer", WebGLFramebuffer = /*#__PURE__*/function (_Framebuffer) {
        _inheritsLoose(WebGLFramebuffer, _Framebuffer);
        function WebGLFramebuffer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Framebuffer.call.apply(_Framebuffer, [this].concat(args)) || this;
          _this._gpuFramebuffer = null;
          return _this;
        }
        var _proto = WebGLFramebuffer.prototype;
        _proto.initialize = function initialize(info) {
          this._renderPass = info.renderPass;
          this._colorTextures = info.colorTextures || [];
          this._depthStencilTexture = info.depthStencilTexture || null;
          var lodLevel = 0;
          var gpuColorTextures = [];
          for (var i = 0; i < info.colorTextures.length; ++i) {
            var colorTexture = info.colorTextures[i];
            if (colorTexture) {
              gpuColorTextures.push(colorTexture.gpuTexture);
              lodLevel = colorTexture.lodLevel;
            }
          }
          var gpuDepthStencilTexture = null;
          if (info.depthStencilTexture) {
            gpuDepthStencilTexture = info.depthStencilTexture.gpuTexture;
            lodLevel = info.depthStencilTexture.lodLevel;
          }
          var width = Number.MAX_SAFE_INTEGER;
          var height = Number.MAX_SAFE_INTEGER;
          this._gpuFramebuffer = {
            gpuRenderPass: info.renderPass.gpuRenderPass,
            gpuColorTextures: gpuColorTextures,
            gpuDepthStencilTexture: gpuDepthStencilTexture,
            glFramebuffer: null,
            isOffscreen: true,
            get width() {
              if (this.gpuColorTextures.length > 0) {
                return this.gpuColorTextures[0].width;
              } else if (this.gpuDepthStencilTexture) {
                return this.gpuDepthStencilTexture.width;
              }
              return width;
            },
            set width(val) {
              width = val;
            },
            get height() {
              if (this.gpuColorTextures.length > 0) {
                return this.gpuColorTextures[0].height;
              } else if (this.gpuDepthStencilTexture) {
                return this.gpuDepthStencilTexture.height;
              }
              return height;
            },
            set height(val) {
              height = val;
            },
            lodLevel: lodLevel
          };
          WebGLCmdFuncCreateFramebuffer(WebGLDeviceManager.instance, this._gpuFramebuffer);
          this._width = this._gpuFramebuffer.width;
          this._height = this._gpuFramebuffer.height;
        };
        _proto.destroy = function destroy() {
          if (this._gpuFramebuffer) {
            WebGLCmdFuncDestroyFramebuffer(WebGLDeviceManager.instance, this._gpuFramebuffer);
            this._gpuFramebuffer = null;
          }
        };
        _createClass(WebGLFramebuffer, [{
          key: "gpuFramebuffer",
          get: function get() {
            return this._gpuFramebuffer;
          }
        }]);
        return WebGLFramebuffer;
      }(Framebuffer));
    }
  };
});