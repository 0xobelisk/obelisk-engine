System.register("q-bundled:///fs/cocos/xr/event/xr-event-handle.js", ["../../core/math/index.js", "../../input/types/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, Event, DeviceType, XrUIPressEventType, XrKeyboardEventType, XrUIPressEvent;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            https://www.cocos.com
                                                                                                                                                                                                           
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
  _export({
    DeviceType: void 0,
    XrUIPressEventType: void 0,
    XrKeyboardEventType: void 0
  });
  return {
    setters: [function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_inputTypesIndexJs) {
      Event = _inputTypesIndexJs.Event;
    }],
    execute: function () {
      (function (DeviceType) {
        DeviceType[DeviceType["Other"] = 0] = "Other";
        DeviceType[DeviceType["Left"] = 1] = "Left";
        DeviceType[DeviceType["Right"] = 2] = "Right";
      })(DeviceType || _export("DeviceType", DeviceType = {}));
      (function (XrUIPressEventType) {
        XrUIPressEventType["XRUI_HOVER_ENTERED"] = "xrui-hover-entered";
        XrUIPressEventType["XRUI_HOVER_EXITED"] = "xrui-hover-exited";
        XrUIPressEventType["XRUI_HOVER_STAY"] = "xrui-hover-stay";
        XrUIPressEventType["XRUI_CLICK"] = "xrui-click";
        XrUIPressEventType["XRUI_UNCLICK"] = "xrui-unclick";
      })(XrUIPressEventType || _export("XrUIPressEventType", XrUIPressEventType = {}));
      (function (XrKeyboardEventType) {
        XrKeyboardEventType["XR_CAPS_LOCK"] = "xr-caps-lock";
        XrKeyboardEventType["XR_KEYBOARD_INIT"] = "xr-keyboard-init";
        XrKeyboardEventType["XR_KEYBOARD_INPUT"] = "xr-keyboard-input";
        XrKeyboardEventType["TO_LATIN"] = "to-latin";
        XrKeyboardEventType["TO_SYMBOL"] = "to-symbol";
        XrKeyboardEventType["TO_MATH_SYMBOL"] = "to-math-symbol";
      })(XrKeyboardEventType || _export("XrKeyboardEventType", XrKeyboardEventType = {}));
      /**
       * @en Xr 3DUI event.
       *
       * @zh xr的3DUI事件。
       */
      _export("XrUIPressEvent", XrUIPressEvent = /*#__PURE__*/function (_Event) {
        _inheritsLoose(XrUIPressEvent, _Event);
        function XrUIPressEvent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Event.call.apply(_Event, [this].concat(args)) || this;
          /**
           * @en Event trigger
           * @zh 事件触发者（左右手柄等）
           */
          _this.deviceType = DeviceType.Other;
          /**
           * @en Collision detection point
           * @zh 碰撞检测点
           */
          _this.hitPoint = new Vec3();
          return _this;
        }
        return XrUIPressEvent;
      }(Event));
    }
  };
});