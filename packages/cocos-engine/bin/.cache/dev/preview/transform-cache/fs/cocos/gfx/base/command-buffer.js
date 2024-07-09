System.register("q-bundled:///fs/cocos/gfx/base/command-buffer.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var GFXObject, ObjectType, CommandBufferType, CommandBuffer;
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
      GFXObject = _defineJs.GFXObject;
      ObjectType = _defineJs.ObjectType;
      CommandBufferType = _defineJs.CommandBufferType;
    }],
    execute: function () {
      /**
       * @en GFX command buffer.
       * @zh GFX 命令缓冲。
       */
      _export("CommandBuffer", CommandBuffer = /*#__PURE__*/function (_GFXObject) {
        _inheritsLoose(CommandBuffer, _GFXObject);
        function CommandBuffer() {
          var _this;
          _this = _GFXObject.call(this, ObjectType.COMMAND_BUFFER) || this;
          _this._queue = null;
          _this._type = CommandBufferType.PRIMARY;
          _this._numDrawCalls = 0;
          _this._numInstances = 0;
          _this._numTris = 0;
          return _this;
        }
        _createClass(CommandBuffer, [{
          key: "type",
          get:
          /**
           * @en Type of the command buffer.
           * @zh 命令缓冲类型。
           */
          function get() {
            return this._type;
          }

          /**
           * @en Type of the command buffer.
           * @zh 命令缓冲类型。
           */
        }, {
          key: "queue",
          get: function get() {
            return this._queue;
          }

          /**
           * @en Number of draw calls currently recorded.
           * @zh 绘制调用次数。
           */
        }, {
          key: "numDrawCalls",
          get: function get() {
            return this._numDrawCalls;
          }

          /**
           * @en Number of instances currently recorded.
           * @zh 绘制 Instance 数量。
           */
        }, {
          key: "numInstances",
          get: function get() {
            return this._numInstances;
          }

          /**
           * @en Number of triangles currently recorded.
           * @zh 绘制三角形数量。
           */
        }, {
          key: "numTris",
          get: function get() {
            return this._numTris;
          }
        }]);
        return CommandBuffer;
      }(GFXObject));
    }
  };
});