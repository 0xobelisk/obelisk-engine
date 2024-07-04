System.register("q-bundled:///fs/cocos/2d/renderer/buffer-accessor.js", ["./vertex-format.js"], function (_export, _context) {
  "use strict";

  var getAttributeStride, BufferAccessor;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_vertexFormatJs) {
      getAttributeStride = _vertexFormatJs.getAttributeStride;
    }],
    execute: function () {
      _export("BufferAccessor", BufferAccessor = /*#__PURE__*/function () {
        function BufferAccessor(device, attributes) {
          this._device = null;
          this._attributes = null;
          this._vertexFormatBytes = void 0;
          this._floatsPerVertex = void 0;
          this._buffers = [];
          this._device = device;
          this._attributes = attributes;
          this._floatsPerVertex = getAttributeStride(attributes) >> 2;
          this._vertexFormatBytes = this._floatsPerVertex * Float32Array.BYTES_PER_ELEMENT;
        }
        var _proto = BufferAccessor.prototype;
        _proto.initialize = function initialize() {};
        _proto.reset = function reset() {};
        _proto.request = function request(vertexCount, indexCount) {
          if (vertexCount === void 0) {
            vertexCount = 4;
          }
          if (indexCount === void 0) {
            indexCount = 6;
          }
        };
        _proto.appendBuffers = function appendBuffers(vertices, indices) {};
        _proto.uploadBuffers = function uploadBuffers() {};
        _proto.destroy = function destroy() {
          this._attributes.length = 0;
        };
        _createClass(BufferAccessor, [{
          key: "attributes",
          get: function get() {
            return this._attributes;
          }
        }, {
          key: "vertexFormatBytes",
          get: function get() {
            return this._vertexFormatBytes;
          }
        }, {
          key: "floatsPerVertex",
          get: function get() {
            return this._floatsPerVertex;
          }
        }]);
        return BufferAccessor;
      }());
    }
  };
});