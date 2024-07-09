System.register("q-bundled:///fs/cocos/core/system.js", ["./value-types/enum.js"], function (_export, _context) {
  "use strict";

  var Enum, System;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2019-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_valueTypesEnumJs) {
      Enum = _valueTypesEnumJs.Enum;
    }],
    execute: function () {
      /**
       * @en Base class for all functional system managed by [[Director]].
       * @zh 功能系统的基类，由 [[Director]] 管理。
       */
      _export("System", System = /*#__PURE__*/function () {
        function System() {
          this._id = '';
          this._priority = 0;
          this._executeInEditMode = false;
        }
        /**
         * @en Sorting between different systems.
         * @zh 不同系统间排序。
         * @param a System a
         * @param b System b
         */
        System.sortByPriority = function sortByPriority(a, b) {
          if (a._priority < b._priority) {
            return 1;
          } else if (a._priority > b.priority) {
            return -1;
          } else {
            return 0;
          }
        }

        /**
         * @en Init the system, will be invoked by [[Director]] when registered, should be implemented if needed.
         * @zh 系统初始化函数，会在注册时被 [[Director]] 调用，如果需要的话应该由子类实现
         */;
        var _proto = System.prototype;
        _proto.init = function init() {}
        /**
         * @en Update function of the system, it will be invoked between all components update phase and late update phase.
         * @zh 系统的帧更新函数，它会在所有组件的 update 和 lateUpdate 之间被调用
         * @param dt Delta time after the last frame
         */;
        _proto.update = function update(dt) {}
        /**
         * @en Post update function of the system, it will be invoked after all components late update phase and before the rendering process.
         * @zh 系统的帧后处理函数，它会在所有组件的 lateUpdate 之后以及渲染之前被调用
         * @param dt Delta time after the last frame
         */;
        _proto.postUpdate = function postUpdate(dt) {};
        _proto.destroy = function destroy() {};
        _createClass(System, [{
          key: "priority",
          get: function get() {
            return this._priority;
          },
          set: function set(value) {
            this._priority = value;
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(id) {
            this._id = id;
          }
        }]);
        return System;
      }());
      System.Priority = Enum({
        LOW: 0,
        MEDIUM: 100,
        HIGH: 200,
        SCHEDULER: 1 << 31 >>> 0
      });
    }
  };
});