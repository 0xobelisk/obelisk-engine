System.register("q-bundled:///fs/pal/input/minigame/keyboard-input.js", ["pal/minigame", "pal/system-info", "../../../cocos/input/types/index.js", "../../../cocos/core/event/index.js", "../../../cocos/input/types/event-enum.js", "../../system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var minigame, systemInfo, KeyCode, EventKeyboard, EventTarget, InputEventType, Feature, KeyboardInputSource, code2KeyCode;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function getKeyCode(code) {
    return code2KeyCode[code] || KeyCode.NONE;
  }
  _export("KeyboardInputSource", void 0);
  return {
    setters: [function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_cocosInputTypesIndexJs) {
      KeyCode = _cocosInputTypesIndexJs.KeyCode;
      EventKeyboard = _cocosInputTypesIndexJs.EventKeyboard;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_systemInfoEnumTypeIndexJs) {
      Feature = _systemInfoEnumTypeIndexJs.Feature;
    }],
    execute: function () {
      code2KeyCode = {
        Backspace: KeyCode.BACKSPACE,
        Tab: KeyCode.TAB,
        Enter: KeyCode.ENTER,
        ShiftLeft: KeyCode.SHIFT_LEFT,
        ControlLeft: KeyCode.CTRL_LEFT,
        AltLeft: KeyCode.ALT_LEFT,
        ShiftRight: KeyCode.SHIFT_RIGHT,
        ControlRight: KeyCode.CTRL_RIGHT,
        AltRight: KeyCode.ALT_RIGHT,
        Pause: KeyCode.PAUSE,
        CapsLock: KeyCode.CAPS_LOCK,
        Escape: KeyCode.ESCAPE,
        Space: KeyCode.SPACE,
        PageUp: KeyCode.PAGE_UP,
        PageDown: KeyCode.PAGE_DOWN,
        End: KeyCode.END,
        Home: KeyCode.HOME,
        ArrowLeft: KeyCode.ARROW_LEFT,
        ArrowUp: KeyCode.ARROW_UP,
        ArrowRight: KeyCode.ARROW_RIGHT,
        ArrowDown: KeyCode.ARROW_DOWN,
        Insert: KeyCode.INSERT,
        Delete: KeyCode.DELETE,
        Digit0: KeyCode.DIGIT_0,
        Digit1: KeyCode.DIGIT_1,
        Digit2: KeyCode.DIGIT_2,
        Digit3: KeyCode.DIGIT_3,
        Digit4: KeyCode.DIGIT_4,
        Digit5: KeyCode.DIGIT_5,
        Digit6: KeyCode.DIGIT_6,
        Digit7: KeyCode.DIGIT_7,
        Digit8: KeyCode.DIGIT_8,
        Digit9: KeyCode.DIGIT_9,
        KeyA: KeyCode.KEY_A,
        KeyB: KeyCode.KEY_B,
        KeyC: KeyCode.KEY_C,
        KeyD: KeyCode.KEY_D,
        KeyE: KeyCode.KEY_E,
        KeyF: KeyCode.KEY_F,
        KeyG: KeyCode.KEY_G,
        KeyH: KeyCode.KEY_H,
        KeyI: KeyCode.KEY_I,
        KeyJ: KeyCode.KEY_J,
        KeyK: KeyCode.KEY_K,
        KeyL: KeyCode.KEY_L,
        KeyM: KeyCode.KEY_M,
        KeyN: KeyCode.KEY_N,
        KeyO: KeyCode.KEY_O,
        KeyP: KeyCode.KEY_P,
        KeyQ: KeyCode.KEY_Q,
        KeyR: KeyCode.KEY_R,
        KeyS: KeyCode.KEY_S,
        KeyT: KeyCode.KEY_T,
        KeyU: KeyCode.KEY_U,
        KeyV: KeyCode.KEY_V,
        KeyW: KeyCode.KEY_W,
        KeyX: KeyCode.KEY_X,
        KeyY: KeyCode.KEY_Y,
        KeyZ: KeyCode.KEY_Z,
        Numpad0: KeyCode.NUM_0,
        Numpad1: KeyCode.NUM_1,
        Numpad2: KeyCode.NUM_2,
        Numpad3: KeyCode.NUM_3,
        Numpad4: KeyCode.NUM_4,
        Numpad5: KeyCode.NUM_5,
        Numpad6: KeyCode.NUM_6,
        Numpad7: KeyCode.NUM_7,
        Numpad8: KeyCode.NUM_8,
        Numpad9: KeyCode.NUM_9,
        NumpadMultiply: KeyCode.NUM_MULTIPLY,
        NumpadAdd: KeyCode.NUM_PLUS,
        NumpadSubtract: KeyCode.NUM_SUBTRACT,
        NumpadDecimal: KeyCode.NUM_DECIMAL,
        NumpadDivide: KeyCode.NUM_DIVIDE,
        NumpadEnter: KeyCode.NUM_ENTER,
        F1: KeyCode.F1,
        F2: KeyCode.F2,
        F3: KeyCode.F3,
        F4: KeyCode.F4,
        F5: KeyCode.F5,
        F6: KeyCode.F6,
        F7: KeyCode.F7,
        F8: KeyCode.F8,
        F9: KeyCode.F9,
        F10: KeyCode.F10,
        F11: KeyCode.F11,
        F12: KeyCode.F12,
        NumLock: KeyCode.NUM_LOCK,
        ScrollLock: KeyCode.SCROLL_LOCK,
        Semicolon: KeyCode.SEMICOLON,
        Equal: KeyCode.EQUAL,
        Comma: KeyCode.COMMA,
        Minus: KeyCode.DASH,
        Period: KeyCode.PERIOD,
        Slash: KeyCode.SLASH,
        Backquote: KeyCode.BACK_QUOTE,
        BracketLeft: KeyCode.BRACKET_LEFT,
        Backslash: KeyCode.BACKSLASH,
        BracketRight: KeyCode.BRACKET_RIGHT,
        Quote: KeyCode.QUOTE
      };
      _export("KeyboardInputSource", KeyboardInputSource = class KeyboardInputSource {
        constructor() {
          this._eventTarget = new EventTarget();
          // KeyboardEvent.repeat is not supported on Wechat PC platform.
          this._keyStateMap = {};
          if (systemInfo.hasFeature(Feature.EVENT_KEYBOARD)) {
            this._registerEvent();
          }
        }
        _registerEvent() {
          var _minigame$wx, _minigame$wx$onKeyDow, _minigame$wx2, _minigame$wx2$onKeyUp;
          (_minigame$wx = minigame.wx) === null || _minigame$wx === void 0 ? void 0 : (_minigame$wx$onKeyDow = _minigame$wx.onKeyDown) === null || _minigame$wx$onKeyDow === void 0 ? void 0 : _minigame$wx$onKeyDow.call(_minigame$wx, res => {
            const keyCode = getKeyCode(res.code);
            if (!this._keyStateMap[keyCode]) {
              const eventKeyDown = this._getInputEvent(res, InputEventType.KEY_DOWN);
              this._eventTarget.emit(InputEventType.KEY_DOWN, eventKeyDown);
            } else {
              const eventKeyPressing = this._getInputEvent(res, InputEventType.KEY_PRESSING);
              this._eventTarget.emit(InputEventType.KEY_PRESSING, eventKeyPressing);
            }
            this._keyStateMap[keyCode] = true;
          });
          (_minigame$wx2 = minigame.wx) === null || _minigame$wx2 === void 0 ? void 0 : (_minigame$wx2$onKeyUp = _minigame$wx2.onKeyUp) === null || _minigame$wx2$onKeyUp === void 0 ? void 0 : _minigame$wx2$onKeyUp.call(_minigame$wx2, res => {
            const keyCode = getKeyCode(res.code);
            const eventKeyUp = this._getInputEvent(res, InputEventType.KEY_UP);
            this._keyStateMap[keyCode] = false;
            this._eventTarget.emit(InputEventType.KEY_UP, eventKeyUp);
          });
        }
        _getInputEvent(event, eventType) {
          const keyCode = getKeyCode(event.code);
          const eventKeyboard = new EventKeyboard(keyCode, eventType);
          return eventKeyboard;
        }
        on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        }
      });
    }
  };
});