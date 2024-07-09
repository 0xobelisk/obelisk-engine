System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-buffer.js", ["../base/buffer.js", "../base/define.js", "./webgl2-commands.js", "./webgl2-define.js", "./webgl2-gpu-objects.js"], function (_export, _context) {
  "use strict";

  var Buffer, BufferUsageBit, WebGL2CmdFuncCreateBuffer, WebGL2CmdFuncDestroyBuffer, WebGL2CmdFuncResizeBuffer, WebGL2CmdFuncUpdateBuffer, WebGL2DeviceManager, WebGL2IndirectDrawInfos, WebGL2Buffer;
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
    setters: [function (_baseBufferJs) {
      Buffer = _baseBufferJs.Buffer;
    }, function (_baseDefineJs) {
      BufferUsageBit = _baseDefineJs.BufferUsageBit;
    }, function (_webgl2CommandsJs) {
      WebGL2CmdFuncCreateBuffer = _webgl2CommandsJs.WebGL2CmdFuncCreateBuffer;
      WebGL2CmdFuncDestroyBuffer = _webgl2CommandsJs.WebGL2CmdFuncDestroyBuffer;
      WebGL2CmdFuncResizeBuffer = _webgl2CommandsJs.WebGL2CmdFuncResizeBuffer;
      WebGL2CmdFuncUpdateBuffer = _webgl2CommandsJs.WebGL2CmdFuncUpdateBuffer;
    }, function (_webgl2DefineJs) {
      WebGL2DeviceManager = _webgl2DefineJs.WebGL2DeviceManager;
    }, function (_webgl2GpuObjectsJs) {
      WebGL2IndirectDrawInfos = _webgl2GpuObjectsJs.WebGL2IndirectDrawInfos;
    }],
    execute: function () {
      _export("WebGL2Buffer", WebGL2Buffer = /*#__PURE__*/function (_Buffer) {
        _inheritsLoose(WebGL2Buffer, _Buffer);
        function WebGL2Buffer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Buffer.call.apply(_Buffer, [this].concat(args)) || this;
          _this._gpuBuffer = null;
          return _this;
        }
        var _proto = WebGL2Buffer.prototype;
        _proto.initialize = function initialize(info) {
          if ('buffer' in info) {
            // buffer view
            this._isBufferView = true;
            var buffer = info.buffer;
            this._usage = buffer.usage;
            this._memUsage = buffer.memUsage;
            this._size = this._stride = info.range;
            this._count = 1;
            this._flags = buffer.flags;
            this._gpuBuffer = {
              usage: this._usage,
              memUsage: this._memUsage,
              size: this._size,
              stride: this._stride,
              buffer: null,
              indirects: buffer.gpuBuffer.indirects,
              glTarget: buffer.gpuBuffer.glTarget,
              glBuffer: buffer.gpuBuffer.glBuffer,
              glOffset: info.offset
            };
          } else {
            // native buffer
            this._usage = info.usage;
            this._memUsage = info.memUsage;
            this._size = info.size;
            this._stride = Math.max(info.stride || this._size, 1);
            this._count = this._size / this._stride;
            this._flags = info.flags;
            this._gpuBuffer = {
              usage: this._usage,
              memUsage: this._memUsage,
              size: this._size,
              stride: this._stride,
              buffer: null,
              indirects: new WebGL2IndirectDrawInfos(),
              glTarget: 0,
              glBuffer: null,
              glOffset: 0
            };
            WebGL2CmdFuncCreateBuffer(WebGL2DeviceManager.instance, this._gpuBuffer);
            WebGL2DeviceManager.instance.memoryStatus.bufferSize += this._size;
          }
        };
        _proto.destroy = function destroy() {
          if (this._gpuBuffer) {
            if (!this._isBufferView) {
              WebGL2CmdFuncDestroyBuffer(WebGL2DeviceManager.instance, this._gpuBuffer);
              WebGL2DeviceManager.instance.memoryStatus.bufferSize -= this._size;
            }
            this._gpuBuffer = null;
          }
        };
        _proto.resize = function resize(size) {
          if (this._isBufferView) {
            console.warn('cannot resize buffer views!');
            return;
          }
          var oldSize = this._size;
          if (oldSize === size) {
            return;
          }
          this._size = size;
          this._count = this._size / this._stride;
          if (this._gpuBuffer) {
            this._gpuBuffer.size = size;
            if (size > 0) {
              WebGL2CmdFuncResizeBuffer(WebGL2DeviceManager.instance, this._gpuBuffer);
              WebGL2DeviceManager.instance.memoryStatus.bufferSize -= oldSize;
              WebGL2DeviceManager.instance.memoryStatus.bufferSize += size;
            }
          }
        };
        _proto.update = function update(buffer, size) {
          if (this._isBufferView) {
            console.warn('cannot update through buffer views!');
            return;
          }
          var buffSize;
          if (size !== undefined) {
            buffSize = size;
          } else if (this._usage & BufferUsageBit.INDIRECT) {
            buffSize = 0;
          } else {
            buffSize = buffer.byteLength;
          }
          WebGL2CmdFuncUpdateBuffer(WebGL2DeviceManager.instance, this._gpuBuffer, buffer, 0, buffSize);
        };
        _createClass(WebGL2Buffer, [{
          key: "gpuBuffer",
          get: function get() {
            return this._gpuBuffer;
          }
        }]);
        return WebGL2Buffer;
      }(Buffer));
    }
  };
});