System.register("q-bundled:///fs/cocos/gfx/base/buffer.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var BufferFlagBit, BufferUsageBit, MemoryUsageBit, GFXObject, ObjectType, Buffer;
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
    setters: [function (_defineJs) {
      BufferFlagBit = _defineJs.BufferFlagBit;
      BufferUsageBit = _defineJs.BufferUsageBit;
      MemoryUsageBit = _defineJs.MemoryUsageBit;
      GFXObject = _defineJs.GFXObject;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      /**
       * @en GFX buffer.
       * @zh GFX 缓冲。
       */
      _export("Buffer", Buffer = /*#__PURE__*/function (_GFXObject) {
        _inheritsLoose(Buffer, _GFXObject);
        function Buffer() {
          var _this;
          _this = _GFXObject.call(this, ObjectType.BUFFER) || this;
          _this._usage = BufferUsageBit.NONE;
          _this._memUsage = MemoryUsageBit.NONE;
          _this._size = 0;
          _this._stride = 1;
          _this._count = 0;
          _this._flags = BufferFlagBit.NONE;
          _this._isBufferView = false;
          return _this;
        }
        _createClass(Buffer, [{
          key: "usage",
          get:
          /**
           * @en Usage type of the buffer.
           * @zh 缓冲使用方式。
           */
          function get() {
            return this._usage;
          }

          /**
           * @en Memory usage of the buffer.
           * @zh 缓冲的内存使用方式。
           */
        }, {
          key: "memUsage",
          get: function get() {
            return this._memUsage;
          }

          /**
           * @en Size of the buffer.
           * @zh 缓冲大小。
           */
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }

          /**
           * @en Stride of the buffer.
           * @zh 缓冲步长。
           */
        }, {
          key: "stride",
          get: function get() {
            return this._stride;
          }

          /**
           * @en Count of the buffer wrt. stride.
           * @zh 缓冲条目数量。
           */
        }, {
          key: "count",
          get: function get() {
            return this._count;
          }
        }, {
          key: "flags",
          get: function get() {
            return this._flags;
          }
        }]);
        return Buffer;
      }(GFXObject));
    }
  };
});