System.register("q-bundled:///fs/pal/input/native/keyboard-input.js", ["../../../cocos/input/types/index.js", "../../../cocos/core/event/index.js", "../../../cocos/input/types/event-enum.js", "../keycodes.js"], function (_export, _context) {
  "use strict";

  var KeyCode, EventKeyboard, EventTarget, InputEventType, code2KeyCode, nativeKeyCode2KeyCode, KeyboardInputSource;
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
  function getKeyCode(event) {
    if (event.code) {
      if (event.code in code2KeyCode) {
        return code2KeyCode[event.code];
      } else {
        console.error("Can not find keyCode for code: " + event.code);
      }
    }
    return nativeKeyCode2KeyCode[event.keyCode] || event.keyCode;
  }
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
      nativeKeyCode2KeyCode = {
        12: KeyCode.NUM_LOCK,
        10048: KeyCode.NUM_0,
        10049: KeyCode.NUM_1,
        10050: KeyCode.NUM_2,
        10051: KeyCode.NUM_3,
        10052: KeyCode.NUM_4,
        10053: KeyCode.NUM_5,
        10054: KeyCode.NUM_6,
        10055: KeyCode.NUM_7,
        10056: KeyCode.NUM_8,
        10057: KeyCode.NUM_9,
        20013: KeyCode.NUM_ENTER,
        20016: KeyCode.SHIFT_RIGHT,
        20017: KeyCode.CTRL_RIGHT,
        20018: KeyCode.ALT_RIGHT
      };
      _export("KeyboardInputSource", KeyboardInputSource = /*#__PURE__*/function () {
        function KeyboardInputSource() {
          var _this = this;
          this._eventTarget = new EventTarget();
          // On native platform, KeyboardEvent.repeat is always false, so we need a map to manage the key state.
          this._keyStateMap = {};
          this._handleKeyboardDown = void 0;
          this._handleKeyboardUp = void 0;
          this._handleKeyboardDown = function (event) {
            var keyCode = getKeyCode(event);
            if (!_this._keyStateMap[keyCode]) {
              var eventKeyDown = _this._getInputEvent(event, InputEventType.KEY_DOWN);
              _this._eventTarget.emit(InputEventType.KEY_DOWN, eventKeyDown);
            } else {
              var eventKeyPressing = _this._getInputEvent(event, InputEventType.KEY_PRESSING);
              _this._eventTarget.emit(InputEventType.KEY_PRESSING, eventKeyPressing);
            }
            _this._keyStateMap[keyCode] = true;
          };
          this._handleKeyboardUp = function (event) {
            var keyCode = getKeyCode(event);
            var eventKeyUp = _this._getInputEvent(event, InputEventType.KEY_UP);
            _this._keyStateMap[keyCode] = false;
            _this._eventTarget.emit(InputEventType.KEY_UP, eventKeyUp);
          };
          this._registerEvent();
        }
        var _proto = KeyboardInputSource.prototype;
        _proto.dispatchKeyboardDownEvent = function dispatchKeyboardDownEvent(nativeKeyboardEvent) {
          this._handleKeyboardDown(nativeKeyboardEvent);
        };
        _proto.dispatchKeyboardUpEvent = function dispatchKeyboardUpEvent(nativeKeyboardEvent) {
          this._handleKeyboardUp(nativeKeyboardEvent);
        };
        _proto._registerEvent = function _registerEvent() {
          jsb.onKeyDown = this._handleKeyboardDown;
          jsb.onKeyUp = this._handleKeyboardUp;
        };
        _proto._getInputEvent = function _getInputEvent(event, eventType) {
          var keyCode = getKeyCode(event);
          var eventKeyboard = new EventKeyboard(keyCode, eventType);
          eventKeyboard.windowId = event.windowId;
          return eventKeyboard;
        };
        _proto.on = function on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        };
        return KeyboardInputSource;
      }());
    }
  };
});