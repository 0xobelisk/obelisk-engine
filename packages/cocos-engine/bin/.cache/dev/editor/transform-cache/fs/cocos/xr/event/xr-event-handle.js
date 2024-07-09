System.register("q-bundled:///fs/cocos/xr/event/xr-event-handle.js", ["../../core/math/index.js", "../../input/types/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, Event, XrUIPressEvent, DeviceType, XrUIPressEventType, XrKeyboardEventType;
  _export({
    XrUIPressEvent: void 0,
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
      _export("XrUIPressEvent", XrUIPressEvent = class XrUIPressEvent extends Event {
        constructor(...args) {
          super(...args);
          /**
           * @en Event trigger
           * @zh 事件触发者（左右手柄等）
           */
          this.deviceType = DeviceType.Other;
          /**
           * @en Collision detection point
           * @zh 碰撞检测点
           */
          this.hitPoint = new Vec3();
        }
      });
    }
  };
});