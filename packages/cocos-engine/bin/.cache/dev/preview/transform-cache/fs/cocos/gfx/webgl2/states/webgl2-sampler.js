System.register("q-bundled:///fs/cocos/gfx/webgl2/states/webgl2-sampler.js", ["../../base/states/sampler.js", "../webgl2-commands.js", "../webgl2-define.js"], function (_export, _context) {
  "use strict";

  var Sampler, WebGL2CmdFuncDestroySampler, WebGL2CmdFuncPrepareSamplerInfo, WebGL2DeviceManager, WebGL2Sampler;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    setters: [function (_baseStatesSamplerJs) {
      Sampler = _baseStatesSamplerJs.Sampler;
    }, function (_webgl2CommandsJs) {
      WebGL2CmdFuncDestroySampler = _webgl2CommandsJs.WebGL2CmdFuncDestroySampler;
      WebGL2CmdFuncPrepareSamplerInfo = _webgl2CommandsJs.WebGL2CmdFuncPrepareSamplerInfo;
    }, function (_webgl2DefineJs) {
      WebGL2DeviceManager = _webgl2DefineJs.WebGL2DeviceManager;
    }],
    execute: function () {
      _export("WebGL2Sampler", WebGL2Sampler = /*#__PURE__*/function (_Sampler) {
        _inheritsLoose(WebGL2Sampler, _Sampler);
        function WebGL2Sampler(info, hash) {
          var _this;
          _this = _Sampler.call(this, info, hash) || this;
          _this._gpuSampler = null;
          _this._gpuSampler = {
            glSamplers: new Map(),
            minFilter: _this._info.minFilter,
            magFilter: _this._info.magFilter,
            mipFilter: _this._info.mipFilter,
            addressU: _this._info.addressU,
            addressV: _this._info.addressV,
            addressW: _this._info.addressW,
            glMinFilter: 0,
            glMagFilter: 0,
            glWrapS: 0,
            glWrapT: 0,
            glWrapR: 0,
            getGLSampler: function getGLSampler(device, minLod, maxLod) {
              var gl = device.gl;
              var samplerHash = minLod << 16 | maxLod;
              if (!this.glSamplers.has(samplerHash)) {
                var glSampler = gl.createSampler();
                if (glSampler) {
                  this.glSamplers.set(samplerHash, glSampler);
                  gl.samplerParameteri(glSampler, gl.TEXTURE_MIN_FILTER, this.glMinFilter);
                  gl.samplerParameteri(glSampler, gl.TEXTURE_MAG_FILTER, this.glMagFilter);
                  gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_S, this.glWrapS);
                  gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_T, this.glWrapT);
                  gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_R, this.glWrapR);
                  gl.samplerParameterf(glSampler, gl.TEXTURE_MIN_LOD, minLod);
                  gl.samplerParameterf(glSampler, gl.TEXTURE_MAX_LOD, maxLod);
                }
              }
              var sampler = this.glSamplers.get(samplerHash);
              return sampler;
            }
          };
          WebGL2CmdFuncPrepareSamplerInfo(WebGL2DeviceManager.instance, _this._gpuSampler);
          return _this;
        }
        var _proto = WebGL2Sampler.prototype;
        _proto.destroy = function destroy() {
          if (this._gpuSampler) {
            WebGL2CmdFuncDestroySampler(WebGL2DeviceManager.instance, this._gpuSampler);
            this._gpuSampler = null;
          }
        };
        _createClass(WebGL2Sampler, [{
          key: "gpuSampler",
          get: function get() {
            return this._gpuSampler;
          }
        }]);
        return WebGL2Sampler;
      }(Sampler));
    }
  };
});