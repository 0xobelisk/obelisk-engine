System.register(['./index-ce98320e.js', './touch-af62e326.js'], (function (exports) {
    'use strict';
    var Vec3, Event;
    return {
        setters: [function (module) {
            Vec3 = module.n;
        }, function (module) {
            Event = module.E;
        }],
        execute: (function () {

            let DeviceType; exports('D', DeviceType);
            (function (DeviceType) {
              DeviceType[DeviceType["Other"] = 0] = "Other";
              DeviceType[DeviceType["Left"] = 1] = "Left";
              DeviceType[DeviceType["Right"] = 2] = "Right";
            })(DeviceType || (exports('D', DeviceType = {})));
            let XrUIPressEventType; exports('X', XrUIPressEventType);
            (function (XrUIPressEventType) {
              XrUIPressEventType["XRUI_HOVER_ENTERED"] = "xrui-hover-entered";
              XrUIPressEventType["XRUI_HOVER_EXITED"] = "xrui-hover-exited";
              XrUIPressEventType["XRUI_HOVER_STAY"] = "xrui-hover-stay";
              XrUIPressEventType["XRUI_CLICK"] = "xrui-click";
              XrUIPressEventType["XRUI_UNCLICK"] = "xrui-unclick";
            })(XrUIPressEventType || (exports('X', XrUIPressEventType = {})));
            let XrKeyboardEventType; exports('a', XrKeyboardEventType);
            (function (XrKeyboardEventType) {
              XrKeyboardEventType["XR_CAPS_LOCK"] = "xr-caps-lock";
              XrKeyboardEventType["XR_KEYBOARD_INIT"] = "xr-keyboard-init";
              XrKeyboardEventType["XR_KEYBOARD_INPUT"] = "xr-keyboard-input";
              XrKeyboardEventType["TO_LATIN"] = "to-latin";
              XrKeyboardEventType["TO_SYMBOL"] = "to-symbol";
              XrKeyboardEventType["TO_MATH_SYMBOL"] = "to-math-symbol";
            })(XrKeyboardEventType || (exports('a', XrKeyboardEventType = {})));
            class XrUIPressEvent extends Event {
              constructor(...args) {
                super(...args);
                this.deviceType = DeviceType.Other;
                this.hitPoint = new Vec3();
              }
            } exports('b', XrUIPressEvent);

        })
    };
}));
