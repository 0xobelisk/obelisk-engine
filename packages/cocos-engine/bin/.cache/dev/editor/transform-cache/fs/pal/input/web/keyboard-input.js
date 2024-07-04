System.register("q-bundled:///fs/pal/input/web/keyboard-input.js", ["../../../cocos/input/types/index.js", "../../../cocos/core/event/index.js", "../../../cocos/input/types/event-enum.js", "../keycodes.js"], function (_export, _context) {
  "use strict";

  var KeyCode, EventKeyboard, EventTarget, InputEventType, code2KeyCode, KeyboardInputSource;
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
    setters: [function (_cocosInputTypesIndexJs) {
      KeyCode = _cocosInputTypesIndexJs.KeyCode;
      EventKeyboard = _cocosInputTypesIndexJs.EventKeyboard;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_keycodesJs) {
      code2KeyCode = _keycodesJs.code2KeyCode;
    }],
    execute: function () {
      _export("KeyboardInputSource", KeyboardInputSource = class KeyboardInputSource {
        constructor() {
          this._eventTarget = new EventTarget();
          this._registerEvent();
        }
        dispatchKeyboardDownEvent(nativeKeyboardEvent) {
          this._handleKeyboardDown(nativeKeyboardEvent);
        }
        dispatchKeyboardUpEvent(nativeKeyboardEvent) {
          this._handleKeyboardUp(nativeKeyboardEvent);
        }
        on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        }
        _registerEvent() {
          const canvas = document.getElementById('GameCanvas');
          canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('keydown', this._handleKeyboardDown.bind(this));
          canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('keyup', this._handleKeyboardUp.bind(this));
        }
        _getInputEvent(event, eventType) {
          const keyCode = getKeyCode(event.code);
          const eventKeyboard = new EventKeyboard(keyCode, eventType);
          return eventKeyboard;
        }
        _handleKeyboardDown(event) {
          event.stopPropagation();
          event.preventDefault();
          if (!event.repeat) {
            const keyDownInputEvent = this._getInputEvent(event, InputEventType.KEY_DOWN);
            this._eventTarget.emit(InputEventType.KEY_DOWN, keyDownInputEvent);
          } else {
            const keyPressingInputEvent = this._getInputEvent(event, InputEventType.KEY_PRESSING);
            this._eventTarget.emit(InputEventType.KEY_PRESSING, keyPressingInputEvent);
          }
        }
        _handleKeyboardUp(event) {
          const inputEvent = this._getInputEvent(event, InputEventType.KEY_UP);
          event.stopPropagation();
          event.preventDefault();
          this._eventTarget.emit(InputEventType.KEY_UP, inputEvent);
        }
      });
    }
  };
});