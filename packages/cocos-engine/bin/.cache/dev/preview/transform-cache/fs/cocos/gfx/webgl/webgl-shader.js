System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-shader.js", ["../base/shader.js", "./webgl-commands.js", "./webgl-define.js"], function (_export, _context) {
  "use strict";

  var Shader, WebGLCmdFuncCreateShader, WebGLCmdFuncDestroyShader, WebGLDeviceManager, WebGLShader;
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
    setters: [function (_baseShaderJs) {
      Shader = _baseShaderJs.Shader;
    }, function (_webglCommandsJs) {
      WebGLCmdFuncCreateShader = _webglCommandsJs.WebGLCmdFuncCreateShader;
      WebGLCmdFuncDestroyShader = _webglCommandsJs.WebGLCmdFuncDestroyShader;
    }, function (_webglDefineJs) {
      WebGLDeviceManager = _webglDefineJs.WebGLDeviceManager;
    }],
    execute: function () {
      _export("WebGLShader", WebGLShader = /*#__PURE__*/function (_Shader) {
        _inheritsLoose(WebGLShader, _Shader);
        function WebGLShader() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Shader.call.apply(_Shader, [this].concat(args)) || this;
          _this._gpuShader = null;
          return _this;
        }
        var _proto = WebGLShader.prototype;
        _proto.initialize = function initialize(info) {
          this._name = info.name;
          this._stages = info.stages;
          this._attributes = info.attributes;
          this._blocks = info.blocks;
          this._samplers = info.samplers;
          this._gpuShader = {
            name: info.name,
            blocks: info.blocks.slice(),
            samplerTextures: info.samplerTextures.slice(),
            subpassInputs: info.subpassInputs.slice(),
            gpuStages: new Array(info.stages.length),
            glProgram: null,
            glInputs: [],
            glUniforms: [],
            glBlocks: [],
            glSamplerTextures: []
          };
          for (var i = 0; i < info.stages.length; ++i) {
            var stage = info.stages[i];
            this._gpuShader.gpuStages[i] = {
              type: stage.stage,
              source: stage.source,
              glShader: null
            };
          }
        };
        _proto.destroy = function destroy() {
          if (this._gpuShader) {
            WebGLCmdFuncDestroyShader(WebGLDeviceManager.instance, this._gpuShader);
            this._gpuShader = null;
          }
        };
        _createClass(WebGLShader, [{
          key: "gpuShader",
          get: function get() {
            if (this._gpuShader.glProgram === null) {
              WebGLCmdFuncCreateShader(WebGLDeviceManager.instance, this._gpuShader);
            }
            return this._gpuShader;
          }
        }]);
        return WebGLShader;
      }(Shader));
    }
  };
});