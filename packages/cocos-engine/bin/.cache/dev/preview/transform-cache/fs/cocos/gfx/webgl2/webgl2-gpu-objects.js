System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-gpu-objects.js", ["../../core/index.js", "./webgl2-define.js"], function (_export, _context) {
  "use strict";

  var nextPow2, WebGL2DeviceManager, WebGL2IndirectDrawInfos, IWebGL2BlitManager;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    setters: [function (_coreIndexJs) {
      nextPow2 = _coreIndexJs.nextPow2;
    }, function (_webgl2DefineJs) {
      WebGL2DeviceManager = _webgl2DefineJs.WebGL2DeviceManager;
    }],
    execute: function () {
      _export("WebGL2IndirectDrawInfos", WebGL2IndirectDrawInfos = /*#__PURE__*/function () {
        function WebGL2IndirectDrawInfos() {
          this.counts = void 0;
          this.offsets = void 0;
          this.instances = void 0;
          this.drawCount = 0;
          this.drawByIndex = false;
          this.instancedDraw = false;
          // staging buffer
          this.byteOffsets = void 0;
          this._capacity = 4;
          this.counts = new Int32Array(this._capacity);
          this.offsets = new Int32Array(this._capacity);
          this.instances = new Int32Array(this._capacity);
          this.byteOffsets = new Int32Array(this._capacity);
        }
        var _proto = WebGL2IndirectDrawInfos.prototype;
        _proto.clearDraws = function clearDraws() {
          this.drawCount = 0;
          this.drawByIndex = false;
          this.instancedDraw = false;
        };
        _proto.setDrawInfo = function setDrawInfo(idx, info) {
          this._ensureCapacity(idx);
          this.drawByIndex = info.indexCount > 0;
          this.instancedDraw = !!info.instanceCount;
          this.drawCount = Math.max(idx + 1, this.drawCount);
          if (this.drawByIndex) {
            this.counts[idx] = info.indexCount;
            this.offsets[idx] = info.firstIndex;
          } else {
            this.counts[idx] = info.vertexCount;
            this.offsets[idx] = info.firstVertex;
          }
          this.instances[idx] = Math.max(1, info.instanceCount);
        };
        _proto._ensureCapacity = function _ensureCapacity(target) {
          if (this._capacity > target) return;
          this._capacity = nextPow2(target);
          var counts = new Int32Array(this._capacity);
          var offsets = new Int32Array(this._capacity);
          var instances = new Int32Array(this._capacity);
          this.byteOffsets = new Int32Array(this._capacity);
          counts.set(this.counts);
          offsets.set(this.offsets);
          instances.set(this.instances);
          this.counts = counts;
          this.offsets = offsets;
          this.instances = instances;
        };
        return WebGL2IndirectDrawInfos;
      }());
      _export("IWebGL2BlitManager", IWebGL2BlitManager = /*#__PURE__*/function () {
        function IWebGL2BlitManager() {
          this._srcFramebuffer = void 0;
          this._dstFramebuffer = void 0;
          var gl = WebGL2DeviceManager.instance.gl;
          this._srcFramebuffer = gl.createFramebuffer();
          this._dstFramebuffer = gl.createFramebuffer();
        }
        var _proto2 = IWebGL2BlitManager.prototype;
        _proto2.destroy = function destroy() {
          var gl = WebGL2DeviceManager.instance.gl;
          gl.deleteFramebuffer(this._srcFramebuffer);
          gl.deleteFramebuffer(this._dstFramebuffer);
        };
        _createClass(IWebGL2BlitManager, [{
          key: "srcFramebuffer",
          get: function get() {
            return this._srcFramebuffer;
          }
        }, {
          key: "dstFramebuffer",
          get: function get() {
            return this._dstFramebuffer;
          }
        }]);
        return IWebGL2BlitManager;
      }());
    }
  };
});