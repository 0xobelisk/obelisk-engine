System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-input-assembler.js", ["../base/input-assembler.js", "./webgl-commands.js", "./webgl-define.js"], function (_export, _context) {
  "use strict";

  var InputAssembler, WebGLCmdFuncCreateInputAssember, WebGLCmdFuncDestroyInputAssembler, WebGLDeviceManager, WebGLInputAssembler;
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
    setters: [function (_baseInputAssemblerJs) {
      InputAssembler = _baseInputAssemblerJs.InputAssembler;
    }, function (_webglCommandsJs) {
      WebGLCmdFuncCreateInputAssember = _webglCommandsJs.WebGLCmdFuncCreateInputAssember;
      WebGLCmdFuncDestroyInputAssembler = _webglCommandsJs.WebGLCmdFuncDestroyInputAssembler;
    }, function (_webglDefineJs) {
      WebGLDeviceManager = _webglDefineJs.WebGLDeviceManager;
    }],
    execute: function () {
      _export("WebGLInputAssembler", WebGLInputAssembler = /*#__PURE__*/function (_InputAssembler) {
        _inheritsLoose(WebGLInputAssembler, _InputAssembler);
        function WebGLInputAssembler() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _InputAssembler.call.apply(_InputAssembler, [this].concat(args)) || this;
          _this._gpuInputAssembler = null;
          return _this;
        }
        var _proto = WebGLInputAssembler.prototype;
        _proto.initialize = function initialize(info) {
          if (info.vertexBuffers.length === 0) {
            console.error('InputAssemblerInfo.vertexBuffers is null.');
            return;
          }
          this._attributes = info.attributes;
          this._attributesHash = this.computeAttributesHash();
          this._vertexBuffers = info.vertexBuffers;
          if (info.indexBuffer) {
            this._indexBuffer = info.indexBuffer;
            this._drawInfo.indexCount = this._indexBuffer.size / this._indexBuffer.stride;
            this._drawInfo.firstIndex = 0;
          } else {
            var vertBuff = this._vertexBuffers[0];
            this._drawInfo.vertexCount = vertBuff.size / vertBuff.stride;
            this._drawInfo.firstVertex = 0;
            this._drawInfo.vertexOffset = 0;
          }
          this._drawInfo.instanceCount = 0;
          this._drawInfo.firstInstance = 0;
          this._indirectBuffer = info.indirectBuffer || null;
          var gpuVertexBuffers = new Array(info.vertexBuffers.length);
          for (var i = 0; i < info.vertexBuffers.length; ++i) {
            var vb = info.vertexBuffers[i];
            if (vb.gpuBuffer) {
              gpuVertexBuffers[i] = vb.gpuBuffer;
            }
          }
          var gpuIndexBuffer = null;
          var glIndexType = 0;
          if (info.indexBuffer) {
            gpuIndexBuffer = info.indexBuffer.gpuBuffer;
            if (gpuIndexBuffer) {
              switch (gpuIndexBuffer.stride) {
                case 1:
                  glIndexType = 0x1401;
                  break;
                // WebGLRenderingContext.UNSIGNED_BYTE
                case 2:
                  glIndexType = 0x1403;
                  break;
                // WebGLRenderingContext.UNSIGNED_SHORT
                case 4:
                  glIndexType = 0x1405;
                  break;
                // WebGLRenderingContext.UNSIGNED_INT
                default:
                  {
                    console.error('Error index buffer stride.');
                  }
              }
            }
          }
          var gpuIndirectBuffer = null;
          if (info.indirectBuffer) {
            gpuIndirectBuffer = info.indirectBuffer.gpuBuffer;
          }
          this._gpuInputAssembler = {
            attributes: info.attributes,
            gpuVertexBuffers: gpuVertexBuffers,
            gpuIndexBuffer: gpuIndexBuffer,
            gpuIndirectBuffer: gpuIndirectBuffer,
            glAttribs: [],
            glIndexType: glIndexType,
            glVAOs: new Map()
          };
          WebGLCmdFuncCreateInputAssember(WebGLDeviceManager.instance, this._gpuInputAssembler);
        };
        _proto.destroy = function destroy() {
          var device = WebGLDeviceManager.instance;
          if (this._gpuInputAssembler && device.extensions.useVAO) {
            WebGLCmdFuncDestroyInputAssembler(device, this._gpuInputAssembler);
          }
          this._gpuInputAssembler = null;
        };
        _createClass(WebGLInputAssembler, [{
          key: "gpuInputAssembler",
          get: function get() {
            return this._gpuInputAssembler;
          }
        }]);
        return WebGLInputAssembler;
      }(InputAssembler));
    }
  };
});