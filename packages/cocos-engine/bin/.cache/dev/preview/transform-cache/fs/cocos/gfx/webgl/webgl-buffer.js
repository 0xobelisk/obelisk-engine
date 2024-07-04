System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-buffer.js", ["../base/define.js", "../base/buffer.js", "./webgl-commands.js", "./webgl-gpu-objects.js", "./webgl-define.js"], function (_export, _context) {
  "use strict";

  var BufferUsageBit, Buffer, WebGLCmdFuncCreateBuffer, WebGLCmdFuncDestroyBuffer, WebGLCmdFuncResizeBuffer, WebGLCmdFuncUpdateBuffer, WebGLIndirectDrawInfos, WebGLDeviceManager, WebGLBuffer;
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
      BufferUsageBit = _baseDefineJs.BufferUsageBit;
    }, function (_baseBufferJs) {
      Buffer = _baseBufferJs.Buffer;
    }, function (_webglCommandsJs) {
      WebGLCmdFuncCreateBuffer = _webglCommandsJs.WebGLCmdFuncCreateBuffer;
      WebGLCmdFuncDestroyBuffer = _webglCommandsJs.WebGLCmdFuncDestroyBuffer;
      WebGLCmdFuncResizeBuffer = _webglCommandsJs.WebGLCmdFuncResizeBuffer;
      WebGLCmdFuncUpdateBuffer = _webglCommandsJs.WebGLCmdFuncUpdateBuffer;
    }, function (_webglGpuObjectsJs) {
      WebGLIndirectDrawInfos = _webglGpuObjectsJs.WebGLIndirectDrawInfos;
    }, function (_webglDefineJs) {
      WebGLDeviceManager = _webglDefineJs.WebGLDeviceManager;
    }],
    execute: function () {
      _export("WebGLBuffer", WebGLBuffer = /*#__PURE__*/function (_Buffer) {
        _inheritsLoose(WebGLBuffer, _Buffer);
        function WebGLBuffer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Buffer.call.apply(_Buffer, [this].concat(args)) || this;
          _this._gpuBuffer = null;
          _this._gpuBufferView = null;
          _this._uniformBuffer = null;
          return _this;
        }
        var _proto = WebGLBuffer.prototype;
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
            this._gpuBufferView = {
              gpuBuffer: buffer.gpuBuffer,
              offset: info.offset,
              range: info.range
            };
          } else {
            // native buffer
            this._usage = info.usage;
            this._memUsage = info.memUsage;
            this._size = info.size;
            this._stride = Math.max(info.stride || this._size, 1);
            this._count = this._size / this._stride;
            this._flags = info.flags;
            if (this._usage & BufferUsageBit.UNIFORM && this._size > 0) {
              this._uniformBuffer = new Uint8Array(this._size);
            }
            this._gpuBuffer = {
              usage: this._usage,
              memUsage: this._memUsage,
              size: this._size,
              stride: this._stride,
              buffer: null,
              vf32: null,
              indirects: new WebGLIndirectDrawInfos(),
              glTarget: 0,
              glBuffer: null
            };
            if (this._usage & BufferUsageBit.UNIFORM) {
              this._gpuBuffer.buffer = this._uniformBuffer;
            }
            WebGLCmdFuncCreateBuffer(WebGLDeviceManager.instance, this._gpuBuffer);
            WebGLDeviceManager.instance.memoryStatus.bufferSize += this._size;
          }
        };
        _proto.destroy = function destroy() {
          if (this._gpuBuffer) {
            WebGLCmdFuncDestroyBuffer(WebGLDeviceManager.instance, this._gpuBuffer);
            WebGLDeviceManager.instance.memoryStatus.bufferSize -= this._size;
            this._gpuBuffer = null;
          }
          if (this._gpuBufferView) {
            this._gpuBufferView = null;
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
          if (this._uniformBuffer) {
            this._uniformBuffer = new Uint8Array(size);
          }
          if (this._gpuBuffer) {
            if (this._uniformBuffer) {
              this._gpuBuffer.buffer = this._uniformBuffer;
            }
            this._gpuBuffer.size = size;
            if (size > 0) {
              WebGLCmdFuncResizeBuffer(WebGLDeviceManager.instance, this._gpuBuffer);
              WebGLDeviceManager.instance.memoryStatus.bufferSize -= oldSize;
              WebGLDeviceManager.instance.memoryStatus.bufferSize += size;
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
          WebGLCmdFuncUpdateBuffer(WebGLDeviceManager.instance, this._gpuBuffer, buffer, 0, buffSize);
        };
        _createClass(WebGLBuffer, [{
          key: "gpuBuffer",
          get: function get() {
            return this._gpuBuffer;
          }
        }, {
          key: "gpuBufferView",
          get: function get() {
            return this._gpuBufferView;
          }
        }]);
        return WebGLBuffer;
      }(Buffer));
    }
  };
});