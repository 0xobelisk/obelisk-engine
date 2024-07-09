System.register("q-bundled:///fs/cocos/input/types/touch.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec2, cclegacy, _vec2, Touch;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
      Vec2 = _coreIndexJs.Vec2;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      _vec2 = new Vec2();
      /**
       * @en The touch point class
       * @zh 封装了触点相关的信息。
       */
      _export("Touch", Touch = /*#__PURE__*/function () {
        /**
         * @param x - x position of the touch point
         * @param y - y position of the touch point
         * @param id - The id of the touch point
         */
        function Touch(x, y, id) {
          if (id === void 0) {
            id = 0;
          }
          this._point = new Vec2();
          this._prevPoint = new Vec2();
          this._lastModified = 0;
          this._id = 0;
          this._startPoint = new Vec2();
          this._startPointCaptured = false;
          this.setTouchInfo(id, x, y);
        }

        /**
         * @en Returns the current touch location in OpenGL coordinates.、
         * @zh 获取当前触点位置。
         * @param out - Pass the out object to avoid object creation, very good practice
         */
        var _proto = Touch.prototype;
        _proto.getLocation = function getLocation(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._point.x, this._point.y);
          return out;
        }

        /**
         * @en Returns X axis location value.
         * @zh 获取当前触点 X 轴位置。
         */;
        _proto.getLocationX = function getLocationX() {
          return this._point.x;
        }

        /**
         * @en Returns Y axis location value.
         * @zh 获取当前触点 Y 轴位置。
         */;
        _proto.getLocationY = function getLocationY() {
          return this._point.y;
        }

        /**
         * @en Returns the current touch location in UI coordinates.、
         * @zh 获取当前触点在 UI 坐标系中的位置。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getUILocation = function getUILocation(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._point.x, this._point.y);
          cclegacy.view._convertToUISpace(out);
          return out;
        }

        /**
         * @en Returns X axis location value in UI coordinates.
         * @zh 获取当前触点在 UI 坐标系中 X 轴位置。
         */;
        _proto.getUILocationX = function getUILocationX() {
          var viewport = cclegacy.view.getViewportRect();
          return (this._point.x - viewport.x) / cclegacy.view.getScaleX();
        }

        /**
         * @en Returns Y axis location value in UI coordinates.
         * @zh 获取当前触点在 UI 坐标系中 Y 轴位置。
         */;
        _proto.getUILocationY = function getUILocationY() {
          var viewport = cclegacy.view.getViewportRect();
          return (this._point.y - viewport.y) / cclegacy.view.getScaleY();
        }

        /**
         * @en Returns the previous touch location.
         * @zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getPreviousLocation = function getPreviousLocation(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._prevPoint.x, this._prevPoint.y);
          return out;
        }

        /**
         * @en Returns the previous touch location in UI coordinates.
         * @zh 获取触点在上一次事件时在 UI 坐标系中的位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getUIPreviousLocation = function getUIPreviousLocation(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._prevPoint.x, this._prevPoint.y);
          cclegacy.view._convertToUISpace(out);
          return out;
        }

        /**
         * @en Returns the start touch location.
         * @zh 获取触点落下时的位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getStartLocation = function getStartLocation(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._startPoint.x, this._startPoint.y);
          return out;
        }

        /**
         * @en Returns the start touch location in UI coordinates.
         * @zh 获取触点落下时在 UI 坐标系中的位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getUIStartLocation = function getUIStartLocation(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._startPoint.x, this._startPoint.y);
          cclegacy.view._convertToUISpace(out);
          return out;
        }

        /**
         * @en Returns the delta distance from the previous touche to the current one.
         * @zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getDelta = function getDelta(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._point);
          out.subtract(this._prevPoint);
          return out;
        }

        /**
         * @en Returns the delta distance from the previous touche to the current one in UI coordinates.
         * @zh 获取触点距离上一次事件移动在 UI 坐标系中的距离对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getUIDelta = function getUIDelta(out) {
          if (!out) {
            out = new Vec2();
          }
          _vec2.set(this._point);
          _vec2.subtract(this._prevPoint);
          out.set(cclegacy.view.getScaleX(), cclegacy.view.getScaleY());
          Vec2.divide(out, _vec2, out);
          return out;
        }

        /**
         * @en Returns the current touch location in screen coordinates.
         * @zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getLocationInView = function getLocationInView(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._point.x, cclegacy.view._designResolutionSize.height - this._point.y);
          return out;
        }

        /**
         * @en Returns the previous touch location in screen coordinates.
         * @zh 获取触点在上一次事件时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getPreviousLocationInView = function getPreviousLocationInView(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._prevPoint.x, cclegacy.view._designResolutionSize.height - this._prevPoint.y);
          return out;
        }

        /**
         * @en Returns the start touch location in screen coordinates.
         * @zh 获取触点落下时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getStartLocationInView = function getStartLocationInView(out) {
          if (!out) {
            out = new Vec2();
          }
          out.set(this._startPoint.x, cclegacy.view._designResolutionSize.height - this._startPoint.y);
          return out;
        }

        /**
         * @en Returns the id of the touch point.
         * @zh 触点的标识 ID，可以用来在多点触摸中跟踪触点。
         */;
        _proto.getID = function getID() {
          return this._id;
        }

        /**
         * @en Resets touch point information.
         * @zh 重置触点相关的信息。
         * @param id - The id of the touch point
         * @param x - x position of the touch point
         * @param y - y position of the touch point
         */;
        _proto.setTouchInfo = function setTouchInfo(id, x, y) {
          if (id === void 0) {
            id = 0;
          }
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          this._prevPoint = this._point;
          this._point = new Vec2(x || 0, y || 0);
          this._id = id;
          if (!this._startPointCaptured) {
            this._startPoint = new Vec2(this._point);
            // cc.view._convertToUISpace(this._startPoint);
            this._startPointCaptured = true;
          }
        }

        /**
         * @en Sets touch point location.
         * @zh 设置触点位置。
         * @param point - The location
         */;
        _proto.setPoint = function setPoint(x, y) {
          if (typeof x === 'object') {
            this._point.x = x.x;
            this._point.y = x.y;
          } else {
            this._point.x = x || 0;
            this._point.y = y || 0;
          }
          this._lastModified = cclegacy.game.frameStartTime;
        }

        /**
         * @en Sets the location previously registered for the current touch.
         * @zh 设置触点在前一次触发时收集的位置。
         * @param point - The location
         */;
        _proto.setPrevPoint = function setPrevPoint(x, y) {
          if (typeof x === 'object') {
            this._prevPoint = new Vec2(x.x, x.y);
          } else {
            this._prevPoint = new Vec2(x || 0, y || 0);
          }
          this._lastModified = cclegacy.game.frameStartTime;
        }

        /**
         * @zh Touch 对象的原始数据不应该被修改。如果你需要这么做，最好克隆一个新的对象。
         * @en The original Touch object shouldn't be modified. If you need to, it's better to clone a new one.
         */;
        _proto.clone = function clone() {
          var touchID = this.getID();
          this.getStartLocation(_vec2);
          var clonedTouch = new Touch(_vec2.x, _vec2.y, touchID);
          this.getLocation(_vec2);
          clonedTouch.setPoint(_vec2.x, _vec2.y);
          this.getPreviousLocation(_vec2);
          clonedTouch.setPrevPoint(_vec2);
          return clonedTouch;
        };
        _createClass(Touch, [{
          key: "lastModified",
          get: function get() {
            return this._lastModified;
          }
        }]);
        return Touch;
      }());
      cclegacy.Touch = Touch;
    }
  };
});