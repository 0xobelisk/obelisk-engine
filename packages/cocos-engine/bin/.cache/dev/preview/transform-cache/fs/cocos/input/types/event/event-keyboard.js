System.register("q-bundled:///fs/cocos/input/types/event/event-keyboard.js", ["./event.js", "../event-enum.js"], function (_export, _context) {
  "use strict";

  var Event, SystemEventType, EventKeyboard;
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
    }, function (_eventEnumJs) {
      SystemEventType = _eventEnumJs.SystemEventType;
    }],
    execute: function () {
      /**
       * @en
       * The keyboard event.
       * @zh
       * 键盘事件。
       */
      _export("EventKeyboard", EventKeyboard = /*#__PURE__*/function (_Event) {
        _inheritsLoose(EventKeyboard, _Event);
        function EventKeyboard(keyCode, eventType, bubbles) {
          var _this;
          if (typeof eventType === 'boolean') {
            var _isPressed = eventType;
            eventType = _isPressed ? SystemEventType.KEY_DOWN : SystemEventType.KEY_UP;
          }
          _this = _Event.call(this, eventType, bubbles) || this;
          /**
           * @en The unique ID of window which triggered the event.
           * @zh 触发键盘事件的窗口 ID
           */
          _this.windowId = void 0;
          /**
           * @en The KeyCode enum value of current keyboard event.
           * @zh 当前键盘事件的 KeyCode 枚举值
           */
          _this.keyCode = void 0;
          /**
           * @en Raw DOM KeyboardEvent.
           * @zh 原始 DOM KeyboardEvent 事件对象
           *
           * @deprecated since v3.3, can't access rawEvent anymore
           */
          _this.rawEvent = void 0;
          _this._isPressed = void 0;
          _this._isPressed = eventType !== SystemEventType.KEY_UP;
          if (typeof keyCode === 'number') {
            _this.keyCode = keyCode;
          } else {
            _this.keyCode = keyCode.keyCode;
            _this.rawEvent = keyCode;
          }
          _this.windowId = 0;
          return _this;
        }
        _createClass(EventKeyboard, [{
          key: "isPressed",
          get:
          /**
           * @en Indicates whether the current key is being pressed
           * @zh 表示当前按键是否正在被按下
           */
          function get() {
            return this._isPressed;
          }

          /**
           * @param keyCode - The key code of the current key or the DOM KeyboardEvent
           * @param isPressed - Indicates whether the current key is being pressed, this is the DEPRECATED parameter.
           * @param bubbles - Indicates whether the event bubbles up through the hierarchy or not.
           */
        }]);
        return EventKeyboard;
      }(Event)); // TODO: this is an injected property, should be deprecated
      // issue: https://github.com/cocos/cocos-engine/issues/14643
      Event.EventKeyboard = EventKeyboard;
    }
  };
});