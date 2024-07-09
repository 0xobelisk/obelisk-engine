System.register("q-bundled:///fs/cocos/rendering/custom/binary-archive.js", [], function (_export, _context) {
  "use strict";

  var BinaryOutputArchive, BinaryInputArchive;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("BinaryOutputArchive", BinaryOutputArchive = /*#__PURE__*/function () {
        function BinaryOutputArchive() {
          this.capacity = 0;
          this.size = 0;
          this.buffer = void 0;
          this.dataView = void 0;
          this.capacity = 4096;
          this.buffer = new Uint8Array(this.capacity);
          this.dataView = new DataView(this.buffer.buffer);
        }
        var _proto = BinaryOutputArchive.prototype;
        _proto.writeBool = function writeBool(value) {
          var newSize = this.size + 1;
          if (newSize > this.capacity) {
            this.reserve(newSize);
          }
          this.dataView.setUint8(this.size, value ? 1 : 0);
          this.size = newSize;
        };
        _proto.writeNumber = function writeNumber(value) {
          var newSize = this.size + 8;
          if (newSize > this.capacity) {
            this.reserve(newSize);
          }
          this.dataView.setFloat64(this.size, value, true);
          this.size = newSize;
        };
        _proto.writeString = function writeString(value) {
          this.writeNumber(value.length);
          var newSize = this.size + value.length;
          if (newSize > this.capacity) {
            this.reserve(newSize);
          }
          for (var i = 0; i < value.length; i++) {
            this.dataView.setUint8(this.size + i, value.charCodeAt(i));
          }
          this.size = newSize;
        };
        _proto.reserve = function reserve(requiredSize) {
          var newCapacity = Math.max(requiredSize, this.capacity * 2);
          var prevBuffer = this.buffer;
          this.buffer = new Uint8Array(newCapacity);
          this.buffer.set(prevBuffer);
          this.dataView = new DataView(this.buffer.buffer);
          this.capacity = newCapacity;
        };
        _createClass(BinaryOutputArchive, [{
          key: "data",
          get: function get() {
            return this.buffer.buffer.slice(0, this.size);
          }
        }]);
        return BinaryOutputArchive;
      }());
      _export("BinaryInputArchive", BinaryInputArchive = /*#__PURE__*/function () {
        function BinaryInputArchive(data) {
          this.offset = 0;
          this.dataView = void 0;
          this.dataView = new DataView(data);
        }
        var _proto2 = BinaryInputArchive.prototype;
        _proto2.readBool = function readBool() {
          return this.dataView.getUint8(this.offset++) !== 0;
        };
        _proto2.readNumber = function readNumber() {
          var value = this.dataView.getFloat64(this.offset, true);
          this.offset += 8;
          return value;
        };
        _proto2.readString = function readString() {
          var length = this.readNumber();
          // we only support ascii string now, so we can use String.fromCharCode
          // see https://stackoverflow.com/questions/67057689/typscript-type-uint8array-is-missing-the-following-properties-from-type-numb
          // answer on stackoverflow might be wrong.
          // [[wrong]] const str =  String.fromCharCode.apply(null, [...new Uint8Array(this.dataView.buffer, this.offset, length)]);
          var str = String.fromCharCode.apply(null, Array.from(new Uint8Array(this.dataView.buffer, this.offset, length)));
          this.offset += length;
          return str;
        };
        return BinaryInputArchive;
      }());
    }
  };
});