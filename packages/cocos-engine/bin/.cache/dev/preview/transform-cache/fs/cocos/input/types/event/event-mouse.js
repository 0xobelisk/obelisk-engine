System.register("q-bundled:///fs/cocos/input/types/event/event-mouse.js", ["./event.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var Event, Vec2, cclegacy, EventMouse;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    setters: [function (_eventJs) {
      Event = _eventJs.Event;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en The mouse event
       * @zh 鼠标事件类型
       */
      _export("EventMouse", EventMouse = /*#__PURE__*/function (_Event) {
        _inheritsLoose(EventMouse, _Event);
        /**
         * @param eventType - The type of the event
         * @param bubbles - Indicate whether the event bubbles up through the hierarchy or not.
         */
        function EventMouse(eventType, bubbles, prevLoc, windowId) {
          var _this;
          _this = _Event.call(this, eventType, bubbles) || this;
          /**
           * @en Mouse movement on x axis of the UI coordinate system.
           * @zh 鼠标在 UI 坐标系下 X 轴上的移动距离
           */
          _this.movementX = 0;
          /**
           * @en Mouse movement on y axis of the UI coordinate system.
           * @zh 鼠标在 UI 坐标系下 Y 轴上的移动距离
           */
          _this.movementY = 0;
          /**
           * @en The unique ID of SystemWindow, which triggerd the event
           * @zh 触发此事件的系统窗口 ID
           */
          _this.windowId = 0;
          /**
           * @en Set whether to prevent events from being swallowed by nodes, which is false by default.
           * If set to true, the event is allowed to be dispatched to nodes at the bottom layer.
           * NOTE: Setting to true will reduce the efficiency of event dispatching.
           *
           * @zh 设置是否阻止事件被节点吞噬, 默认为 false 。
           * 如果设置为 true，则事件允许派发给渲染在下一层级的节点。
           * 注意：设置为 true 会降低事件派发的效率。
           *
           * @experimental May be optimized in the future.
           */
          _this.preventSwallow = false;
          _this._eventType = void 0;
          _this._button = EventMouse.BUTTON_MISSING;
          _this._x = 0;
          _this._y = 0;
          _this._prevX = 0;
          _this._prevY = 0;
          _this._scrollX = 0;
          _this._scrollY = 0;
          _this._eventType = eventType;
          if (prevLoc) {
            _this._prevX = prevLoc.x;
            _this._prevY = prevLoc.y;
          }
          _this.windowId = windowId !== null && windowId !== void 0 ? windowId : _this.windowId;
          return _this;
        }

        /**
         * @en Sets scroll data of the mouse.
         * @zh 设置鼠标滚轮的滚动数据。
         * @param scrollX - The scroll value on x axis
         * @param scrollY - The scroll value on y axis
         */
        var _proto = EventMouse.prototype;
        _proto.setScrollData = function setScrollData(scrollX, scrollY) {
          this._scrollX = scrollX;
          this._scrollY = scrollY;
        }

        /**
         * @en Returns the scroll value on x axis.
         * @zh 获取鼠标滚动的 X 轴距离，只有滚动时才有效。
         */;
        _proto.getScrollX = function getScrollX() {
          return this._scrollX;
        }

        /**
         * @en Returns the scroll value on y axis.
         * @zh 获取滚轮滚动的 Y 轴距离，只有滚动时才有效。
         */;
        _proto.getScrollY = function getScrollY() {
          return this._scrollY;
        }

        /**
         * @en Sets cursor location.
         * @zh 设置当前鼠标位置。
         * @param x - The location on x axis
         * @param y - The location on y axis
         */;
        _proto.setLocation = function setLocation(x, y) {
          this._x = x;
          this._y = y;
        }

        /**
         * @en Returns cursor location.
         * @zh 获取鼠标相对于左下角位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getLocation = function getLocation(out) {
          if (!out) {
            out = new Vec2();
          }
          Vec2.set(out, this._x, this._y);
          return out;
        }

        /**
         * @en Returns the current cursor location in game view coordinates.
         * @zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getLocationInView = function getLocationInView(out) {
          if (!out) {
            out = new Vec2();
          }
          Vec2.set(out, this._x, cclegacy.view._designResolutionSize.height - this._y);
          return out;
        }

        /**
         * @en Returns the current cursor location in ui coordinates.
         * @zh 获取当前事件在 UI 窗口内的坐标位置，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getUILocation = function getUILocation(out) {
          if (!out) {
            out = new Vec2();
          }
          Vec2.set(out, this._x, this._y);
          cclegacy.view._convertToUISpace(out);
          return out;
        }

        /**
         * @en Returns the previous touch location.
         * @zh 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getPreviousLocation = function getPreviousLocation(out) {
          if (!out) {
            out = new Vec2();
          }
          Vec2.set(out, this._prevX, this._prevY);
          return out;
        }

        /**
         * @en Returns the previous touch location.
         * @zh 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getUIPreviousLocation = function getUIPreviousLocation(out) {
          if (!out) {
            out = new Vec2();
          }
          Vec2.set(out, this._prevX, this._prevY);
          cclegacy.view._convertToUISpace(out);
          return out;
        }

        /**
         * @en Returns the delta distance from the previous location to current location.
         * @zh 获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getDelta = function getDelta(out) {
          if (!out) {
            out = new Vec2();
          }
          Vec2.set(out, this._x - this._prevX, this._y - this._prevY);
          return out;
        }

        /**
         * @en Returns the X axis delta distance from the previous location to current location.
         * @zh 获取鼠标距离上一次事件移动的 X 轴距离。
         */;
        _proto.getDeltaX = function getDeltaX() {
          return this._x - this._prevX;
        }

        /**
         * @en Returns the Y axis delta distance from the previous location to current location.
         * @zh 获取鼠标距离上一次事件移动的 Y 轴距离。
         */;
        _proto.getDeltaY = function getDeltaY() {
          return this._y - this._prevY;
        }

        /**
         * @en Returns the delta distance from the previous location to current location in the UI coordinates.
         * @zh 获取鼠标距离上一次事件移动在 UI 坐标系下的距离对象，对象包含 x 和 y 属性。
         * @param out - Pass the out object to avoid object creation, very good practice
         */;
        _proto.getUIDelta = function getUIDelta(out) {
          if (!out) {
            out = new Vec2();
          }
          Vec2.set(out, (this._x - this._prevX) / cclegacy.view.getScaleX(), (this._y - this._prevY) / cclegacy.view.getScaleY());
          return out;
        }

        /**
         * @en Returns the X axis delta distance from the previous location to current location in the UI coordinates.
         * @zh 获取鼠标距离上一次事件移动在 UI 坐标系下的 X 轴距离。
         */;
        _proto.getUIDeltaX = function getUIDeltaX() {
          return (this._x - this._prevX) / cclegacy.view.getScaleX();
        }

        /**
         * @en Returns the Y axis delta distance from the previous location to current location in the UI coordinates.
         * @zh 获取鼠标距离上一次事件移动在 UI 坐标系下的 Y 轴距离。
         */;
        _proto.getUIDeltaY = function getUIDeltaY() {
          return (this._y - this._prevY) / cclegacy.view.getScaleY();
        }

        /**
         * @en Sets mouse button code.
         * @zh 设置鼠标按键。
         * @param button - The button code
         */;
        _proto.setButton = function setButton(button) {
          this._button = button;
        }

        /**
         * @en Returns mouse button code.
         * @zh 获取鼠标按键。
         */;
        _proto.getButton = function getButton() {
          return this._button;
        }

        /**
         * @en Returns location data on X axis.
         * @zh 获取鼠标当前 X 轴位置。
         */;
        _proto.getLocationX = function getLocationX() {
          return this._x;
        }

        /**
         * @en Returns location data on Y axis.
         * @zh 获取鼠标当前 Y 轴位置。
         */;
        _proto.getLocationY = function getLocationY() {
          return this._y;
        }

        /**
         * @en Returns location data on X axis.
         * @zh 获取鼠标当前 X 轴位置。
         */;
        _proto.getUILocationX = function getUILocationX() {
          var viewport = cclegacy.view.getViewportRect();
          return (this._x - viewport.x) / cclegacy.view.getScaleX();
        }

        /**
         * @en Returns location data on Y axis.
         * @zh 获取鼠标当前 Y 轴位置。
         */;
        _proto.getUILocationY = function getUILocationY() {
          var viewport = cclegacy.view.getViewportRect();
          return (this._y - viewport.y) / cclegacy.view.getScaleY();
        };
        _createClass(EventMouse, [{
          key: "eventType",
          get:
          /**
           * @en The type of the event
           * @zh 鼠标事件类型
           *
           * @deprecated since v3.3, please use EventMouse.prototype.type instead.
           */
          function get() {
            return this._eventType;
          }
        }]);
        return EventMouse;
      }(Event)); // TODO: this is an injected property, should be deprecated
      // issue: https://github.com/cocos/cocos-engine/issues/14643
      /**
       * @en The default tag when no button is pressed
       * @zh 按键默认的缺省状态
       */
      EventMouse.BUTTON_MISSING = -1;
      /**
       * @en The tag of mouse's left button.
       * @zh 鼠标左键的标签。
       */
      EventMouse.BUTTON_LEFT = 0;
      /**
       * @en The tag of mouse's right button  (The right button number is 2 on browser).
       * @zh 鼠标右键的标签。
       */
      EventMouse.BUTTON_RIGHT = 2;
      /**
       * @en The tag of mouse's middle button.
       * @zh 鼠标中键的标签。
       */
      EventMouse.BUTTON_MIDDLE = 1;
      /**
       * @en The tag of mouse's button 4.
       * @zh 鼠标按键 4 的标签。
       */
      EventMouse.BUTTON_4 = 3;
      /**
       * @en The tag of mouse's button 5.
       * @zh 鼠标按键 5 的标签。
       */
      EventMouse.BUTTON_5 = 4;
      /**
       * @en The tag of mouse's button 6.
       * @zh 鼠标按键 6 的标签。
       */
      EventMouse.BUTTON_6 = 5;
      /**
       * @en The tag of mouse's button 7.
       * @zh 鼠标按键 7 的标签。
       */
      EventMouse.BUTTON_7 = 6;
      /**
       * @en The tag of mouse's button 8.
       * @zh 鼠标按键 8 的标签。
       */
      EventMouse.BUTTON_8 = 7;
      Event.EventMouse = EventMouse;
    }
  };
});