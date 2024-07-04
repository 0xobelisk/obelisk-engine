System.register("q-bundled:///fs/pal/input/web/handle-input.js", ["../../../cocos/input/types/event-enum.js", "../../../cocos/core/event/index.js", "../../../cocos/input/types/index.js", "../input-source.js", "../../../cocos/core/math/index.js"], function (_export, _context) {
  "use strict";

  var InputEventType, EventTarget, EventHandle, InputSourceButton, InputSourceStick, InputSourcePosition, InputSourceOrientation, InputSourceTouch, Vec3, Quat, HandleInputDevice, Button, KeyEventType, StickKeyCode, StickAxisCode, StickTouchCode, _nativeButtonMap;
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
  _export({
    HandleInputDevice: void 0,
    KeyEventType: void 0
  });
  return {
    setters: [function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosInputTypesIndexJs) {
      EventHandle = _cocosInputTypesIndexJs.EventHandle;
    }, function (_inputSourceJs) {
      InputSourceButton = _inputSourceJs.InputSourceButton;
      InputSourceStick = _inputSourceJs.InputSourceStick;
      InputSourcePosition = _inputSourceJs.InputSourcePosition;
      InputSourceOrientation = _inputSourceJs.InputSourceOrientation;
      InputSourceTouch = _inputSourceJs.InputSourceTouch;
    }, function (_cocosCoreMathIndexJs) {
      Vec3 = _cocosCoreMathIndexJs.Vec3;
      Quat = _cocosCoreMathIndexJs.Quat;
    }],
    execute: function () {
      (function (Button) {
        Button[Button["BUTTON_EAST"] = 0] = "BUTTON_EAST";
        Button[Button["BUTTON_SOUTH"] = 1] = "BUTTON_SOUTH";
        Button[Button["BUTTON_WEST"] = 2] = "BUTTON_WEST";
        Button[Button["BUTTON_NORTH"] = 3] = "BUTTON_NORTH";
        Button[Button["BUTTON_TRIGGER_LEFT"] = 4] = "BUTTON_TRIGGER_LEFT";
        Button[Button["BUTTON_TRIGGER_RIGHT"] = 5] = "BUTTON_TRIGGER_RIGHT";
        Button[Button["TRIGGER_LEFT"] = 6] = "TRIGGER_LEFT";
        Button[Button["TRIGGER_RIGHT"] = 7] = "TRIGGER_RIGHT";
        Button[Button["GRIP_LEFT"] = 8] = "GRIP_LEFT";
        Button[Button["GRIP_RIGHT"] = 9] = "GRIP_RIGHT";
        Button[Button["BUTTON_LEFT_STICK"] = 10] = "BUTTON_LEFT_STICK";
        Button[Button["LEFT_STICK_UP"] = 11] = "LEFT_STICK_UP";
        Button[Button["LEFT_STICK_DOWN"] = 12] = "LEFT_STICK_DOWN";
        Button[Button["LEFT_STICK_LEFT"] = 13] = "LEFT_STICK_LEFT";
        Button[Button["LEFT_STICK_RIGHT"] = 14] = "LEFT_STICK_RIGHT";
        Button[Button["BUTTON_RIGHT_STICK"] = 15] = "BUTTON_RIGHT_STICK";
        Button[Button["RIGHT_STICK_UP"] = 16] = "RIGHT_STICK_UP";
        Button[Button["RIGHT_STICK_DOWN"] = 17] = "RIGHT_STICK_DOWN";
        Button[Button["RIGHT_STICK_LEFT"] = 18] = "RIGHT_STICK_LEFT";
        Button[Button["RIGHT_STICK_RIGHT"] = 19] = "RIGHT_STICK_RIGHT";
        Button[Button["ROKID_MENU"] = 20] = "ROKID_MENU";
        Button[Button["ROKID_START"] = 21] = "ROKID_START";
      })(Button || (Button = {}));
      (function (KeyEventType) {
        KeyEventType[KeyEventType["KET_CLICK"] = 0] = "KET_CLICK";
        KeyEventType[KeyEventType["KET_STICK"] = 1] = "KET_STICK";
        KeyEventType[KeyEventType["KET_GRAB"] = 2] = "KET_GRAB";
        KeyEventType[KeyEventType["KET_TOUCH"] = 3] = "KET_TOUCH";
      })(KeyEventType || _export("KeyEventType", KeyEventType = {}));
      (function (StickKeyCode) {
        StickKeyCode[StickKeyCode["UNDEFINE"] = 0] = "UNDEFINE";
        StickKeyCode[StickKeyCode["A"] = 1] = "A";
        StickKeyCode[StickKeyCode["B"] = 2] = "B";
        StickKeyCode[StickKeyCode["X"] = 3] = "X";
        StickKeyCode[StickKeyCode["Y"] = 4] = "Y";
        StickKeyCode[StickKeyCode["L1"] = 5] = "L1";
        StickKeyCode[StickKeyCode["R1"] = 6] = "R1";
        StickKeyCode[StickKeyCode["MINUS"] = 7] = "MINUS";
        StickKeyCode[StickKeyCode["PLUS"] = 8] = "PLUS";
        StickKeyCode[StickKeyCode["L3"] = 9] = "L3";
        StickKeyCode[StickKeyCode["R3"] = 10] = "R3";
        StickKeyCode[StickKeyCode["MENU"] = 11] = "MENU";
        StickKeyCode[StickKeyCode["START"] = 12] = "START";
        StickKeyCode[StickKeyCode["TRIGGER_LEFT"] = 13] = "TRIGGER_LEFT";
        StickKeyCode[StickKeyCode["TRIGGER_RIGHT"] = 14] = "TRIGGER_RIGHT";
      })(StickKeyCode || (StickKeyCode = {}));
      (function (StickAxisCode) {
        StickAxisCode[StickAxisCode["UNDEFINE"] = 0] = "UNDEFINE";
        StickAxisCode[StickAxisCode["X"] = 1] = "X";
        StickAxisCode[StickAxisCode["Y"] = 2] = "Y";
        StickAxisCode[StickAxisCode["LEFT_STICK_X"] = 3] = "LEFT_STICK_X";
        StickAxisCode[StickAxisCode["LEFT_STICK_Y"] = 4] = "LEFT_STICK_Y";
        StickAxisCode[StickAxisCode["RIGHT_STICK_X"] = 5] = "RIGHT_STICK_X";
        StickAxisCode[StickAxisCode["RIGHT_STICK_Y"] = 6] = "RIGHT_STICK_Y";
        StickAxisCode[StickAxisCode["L2"] = 7] = "L2";
        StickAxisCode[StickAxisCode["R2"] = 8] = "R2";
        StickAxisCode[StickAxisCode["LEFT_GRIP"] = 9] = "LEFT_GRIP";
        StickAxisCode[StickAxisCode["RIGHT_GRIP"] = 10] = "RIGHT_GRIP";
      })(StickAxisCode || (StickAxisCode = {}));
      (function (StickTouchCode) {
        StickTouchCode[StickTouchCode["UNDEFINE"] = 0] = "UNDEFINE";
        StickTouchCode[StickTouchCode["A"] = 1] = "A";
        StickTouchCode[StickTouchCode["B"] = 2] = "B";
        StickTouchCode[StickTouchCode["X"] = 3] = "X";
        StickTouchCode[StickTouchCode["Y"] = 4] = "Y";
        StickTouchCode[StickTouchCode["LEFT_TRIGGER"] = 5] = "LEFT_TRIGGER";
        StickTouchCode[StickTouchCode["RIGHT_TRIGGER"] = 6] = "RIGHT_TRIGGER";
        StickTouchCode[StickTouchCode["LEFT_THUMBSTICK"] = 7] = "LEFT_THUMBSTICK";
        StickTouchCode[StickTouchCode["RIGHT_THUMBSTICK"] = 8] = "RIGHT_THUMBSTICK";
      })(StickTouchCode || (StickTouchCode = {}));
      _nativeButtonMap = {
        1: Button.BUTTON_EAST,
        2: Button.BUTTON_SOUTH,
        3: Button.BUTTON_NORTH,
        4: Button.BUTTON_WEST,
        9: Button.BUTTON_LEFT_STICK,
        10: Button.BUTTON_RIGHT_STICK,
        11: Button.ROKID_MENU,
        12: Button.ROKID_START,
        13: Button.BUTTON_TRIGGER_LEFT,
        14: Button.BUTTON_TRIGGER_RIGHT
      };
      _export("HandleInputDevice", HandleInputDevice = class HandleInputDevice {
        get buttonNorth() {
          return this._buttonNorth;
        }
        get buttonEast() {
          return this._buttonEast;
        }
        get buttonWest() {
          return this._buttonWest;
        }
        get buttonSouth() {
          return this._buttonSouth;
        }
        get buttonTriggerLeft() {
          return this._buttonTriggerLeft;
        }
        get buttonTriggerRight() {
          return this._buttonTriggerRight;
        }
        get triggerLeft() {
          return this._triggerLeft;
        }
        get triggerRight() {
          return this._triggerRight;
        }
        get gripLeft() {
          return this._gripLeft;
        }
        get gripRight() {
          return this._gripRight;
        }
        get leftStick() {
          return this._leftStick;
        }
        get rightStick() {
          return this._rightStick;
        }
        get buttonLeftStick() {
          return this._buttonLeftStick;
        }
        get buttonRightStick() {
          return this._buttonRightStick;
        }
        get buttonOptions() {
          return this._buttonOptions;
        }
        get buttonStart() {
          return this._buttonStart;
        }
        get handLeftPosition() {
          return this._handLeftPosition;
        }
        get handLeftOrientation() {
          return this._handLeftOrientation;
        }
        get handRightPosition() {
          return this._handRightPosition;
        }
        get handRightOrientation() {
          return this._handRightOrientation;
        }
        get aimLeftPosition() {
          return this._aimLeftPosition;
        }
        get aimLeftOrientation() {
          return this._aimLeftOrientation;
        }
        get aimRightPosition() {
          return this._aimRightPosition;
        }
        get aimRightOrientation() {
          return this._aimRightOrientation;
        }
        get touchButtonA() {
          return this._touchButtonA;
        }
        get touchButtonB() {
          return this._touchButtonB;
        }
        get touchButtonX() {
          return this._touchButtonX;
        }
        get touchButtonY() {
          return this._touchButtonY;
        }
        get touchButtonTriggerLeft() {
          return this._touchButtonTriggerLeft;
        }
        get touchButtonTriggerRight() {
          return this._touchButtonTriggerRight;
        }
        get touchButtonThumbStickLeft() {
          return this._touchButtonThumbStickLeft;
        }
        get touchButtonThumbStickRight() {
          return this._touchButtonThumbStickRight;
        }
        constructor() {
          this._eventTarget = new EventTarget();
          this._buttonNorth = void 0;
          this._buttonEast = void 0;
          this._buttonWest = void 0;
          this._buttonSouth = void 0;
          this._buttonTriggerLeft = void 0;
          this._buttonTriggerRight = void 0;
          this._triggerLeft = void 0;
          this._triggerRight = void 0;
          this._gripLeft = void 0;
          this._gripRight = void 0;
          this._leftStick = void 0;
          this._rightStick = void 0;
          this._buttonLeftStick = void 0;
          this._buttonRightStick = void 0;
          this._buttonOptions = void 0;
          this._buttonStart = void 0;
          this._handLeftPosition = void 0;
          this._handLeftOrientation = void 0;
          this._handRightPosition = void 0;
          this._handRightOrientation = void 0;
          this._aimLeftPosition = void 0;
          this._aimLeftOrientation = void 0;
          this._aimRightPosition = void 0;
          this._aimRightOrientation = void 0;
          this._touchButtonA = void 0;
          this._touchButtonB = void 0;
          this._touchButtonX = void 0;
          this._touchButtonY = void 0;
          this._touchButtonTriggerLeft = void 0;
          this._touchButtonTriggerRight = void 0;
          this._touchButtonThumbStickLeft = void 0;
          this._touchButtonThumbStickRight = void 0;
          this._nativeButtonState = {
            [Button.BUTTON_SOUTH]: 0,
            [Button.BUTTON_EAST]: 0,
            [Button.BUTTON_WEST]: 0,
            [Button.BUTTON_NORTH]: 0,
            [Button.BUTTON_TRIGGER_LEFT]: 0,
            [Button.BUTTON_TRIGGER_RIGHT]: 0,
            [Button.TRIGGER_LEFT]: 0,
            [Button.TRIGGER_RIGHT]: 0,
            [Button.GRIP_LEFT]: 0,
            [Button.GRIP_RIGHT]: 0,
            [Button.LEFT_STICK_UP]: 0,
            [Button.LEFT_STICK_DOWN]: 0,
            [Button.LEFT_STICK_LEFT]: 0,
            [Button.LEFT_STICK_RIGHT]: 0,
            [Button.RIGHT_STICK_UP]: 0,
            [Button.RIGHT_STICK_DOWN]: 0,
            [Button.RIGHT_STICK_LEFT]: 0,
            [Button.RIGHT_STICK_RIGHT]: 0,
            [Button.BUTTON_LEFT_STICK]: 0,
            [Button.BUTTON_RIGHT_STICK]: 0,
            [Button.ROKID_MENU]: 0,
            [Button.ROKID_START]: 0
          };
          this._nativeTouchState = {
            [StickTouchCode.UNDEFINE]: 0,
            [StickTouchCode.A]: 0,
            [StickTouchCode.B]: 0,
            [StickTouchCode.X]: 0,
            [StickTouchCode.Y]: 0,
            [StickTouchCode.LEFT_TRIGGER]: 0,
            [StickTouchCode.RIGHT_TRIGGER]: 0,
            [StickTouchCode.LEFT_THUMBSTICK]: 0,
            [StickTouchCode.RIGHT_THUMBSTICK]: 0
          };
          this._initInputSource();
          window.addEventListener('xr-remote-input', evt => {
            const remoteInputEvent = evt;
            const keyEventType = remoteInputEvent.detail.keyEventType;
            const stickAxisCode = remoteInputEvent.detail.stickAxisCode;
            const stickAxisValue = remoteInputEvent.detail.stickAxisValue;
            const stickKeyCode = remoteInputEvent.detail.stickKeyCode;
            const isButtonPressed = remoteInputEvent.detail.isButtonPressed;
            const touchCode = remoteInputEvent.detail.touchCode;
            const touchValue = remoteInputEvent.detail.touchValue;
            if (keyEventType === KeyEventType.KET_CLICK) {
              const button = _nativeButtonMap[stickKeyCode];
              this._nativeButtonState[button] = isButtonPressed ? 1 : 0;
            } else if (keyEventType === KeyEventType.KET_STICK || keyEventType === KeyEventType.KET_GRAB) {
              //
              let negativeButton;
              let positiveButton;
              let axisValue;
              switch (stickAxisCode) {
                case StickAxisCode.LEFT_STICK_X:
                  negativeButton = Button.LEFT_STICK_LEFT;
                  positiveButton = Button.LEFT_STICK_RIGHT;
                  axisValue = this._axisToButtons(stickAxisValue);
                  break;
                case StickAxisCode.LEFT_STICK_Y:
                  negativeButton = Button.LEFT_STICK_DOWN;
                  positiveButton = Button.LEFT_STICK_UP;
                  axisValue = this._axisToButtons(stickAxisValue);
                  break;
                case StickAxisCode.RIGHT_STICK_X:
                  negativeButton = Button.RIGHT_STICK_LEFT;
                  positiveButton = Button.RIGHT_STICK_RIGHT;
                  axisValue = this._axisToButtons(stickAxisValue);
                  break;
                case StickAxisCode.RIGHT_STICK_Y:
                  negativeButton = Button.RIGHT_STICK_DOWN;
                  positiveButton = Button.RIGHT_STICK_UP;
                  axisValue = this._axisToButtons(stickAxisValue);
                  break;
                case StickAxisCode.L2:
                  this._nativeButtonState[Button.TRIGGER_LEFT] = stickAxisValue;
                  break;
                case StickAxisCode.R2:
                  this._nativeButtonState[Button.TRIGGER_RIGHT] = stickAxisValue;
                  break;
                case StickAxisCode.LEFT_GRIP:
                  this._nativeButtonState[Button.GRIP_LEFT] = stickAxisValue;
                  break;
                case StickAxisCode.RIGHT_GRIP:
                  this._nativeButtonState[Button.GRIP_RIGHT] = stickAxisValue;
                  break;
                default:
                  break;
              }
              if (negativeButton && positiveButton && axisValue) {
                this._nativeButtonState[negativeButton] = axisValue.negative;
                this._nativeButtonState[positiveButton] = axisValue.positive;
              }
            } else if (keyEventType === KeyEventType.KET_TOUCH) {
              switch (touchCode) {
                case StickTouchCode.A:
                case StickTouchCode.B:
                case StickTouchCode.X:
                case StickTouchCode.Y:
                case StickTouchCode.LEFT_TRIGGER:
                case StickTouchCode.RIGHT_TRIGGER:
                case StickTouchCode.LEFT_THUMBSTICK:
                case StickTouchCode.RIGHT_THUMBSTICK:
                  this._nativeTouchState[touchCode] = touchValue;
                  break;
                default:
                  break;
              }
            }
            this._eventTarget.emit(InputEventType.HANDLE_INPUT, new EventHandle(InputEventType.HANDLE_INPUT, this));
          });
        }
        _axisToButtons(axisValue) {
          const value = Math.abs(axisValue);
          if (axisValue > 0) {
            return {
              negative: 0,
              positive: value
            };
          } else if (axisValue < 0) {
            return {
              negative: value,
              positive: 0
            };
          } else {
            return {
              negative: 0,
              positive: 0
            };
          }
        }

        /**
         * @engineInternal
         */
        _on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        }
        _initInputSource() {
          this._buttonNorth = new InputSourceButton();
          this._buttonNorth.getValue = () => this._nativeButtonState[Button.BUTTON_NORTH];
          this._buttonEast = new InputSourceButton();
          this._buttonEast.getValue = () => this._nativeButtonState[Button.BUTTON_EAST];
          this._buttonWest = new InputSourceButton();
          this._buttonWest.getValue = () => this._nativeButtonState[Button.BUTTON_WEST];
          this._buttonSouth = new InputSourceButton();
          this._buttonSouth.getValue = () => this._nativeButtonState[Button.BUTTON_SOUTH];
          this._buttonTriggerLeft = new InputSourceButton();
          this._buttonTriggerLeft.getValue = () => this._nativeButtonState[Button.BUTTON_TRIGGER_LEFT];
          this._buttonTriggerRight = new InputSourceButton();
          this._buttonTriggerRight.getValue = () => this._nativeButtonState[Button.BUTTON_TRIGGER_RIGHT];
          this._triggerLeft = new InputSourceButton();
          this._triggerLeft.getValue = () => this._nativeButtonState[Button.TRIGGER_LEFT];
          this._triggerRight = new InputSourceButton();
          this._triggerRight.getValue = () => this._nativeButtonState[Button.TRIGGER_RIGHT];
          this._gripLeft = new InputSourceButton();
          this._gripLeft.getValue = () => this._nativeButtonState[Button.GRIP_LEFT];
          this._gripRight = new InputSourceButton();
          this._gripRight.getValue = () => this._nativeButtonState[Button.GRIP_RIGHT];
          this._buttonLeftStick = new InputSourceButton();
          this._buttonLeftStick.getValue = () => this._nativeButtonState[Button.BUTTON_LEFT_STICK];
          const leftStickUp = new InputSourceButton();
          leftStickUp.getValue = () => this._nativeButtonState[Button.LEFT_STICK_UP];
          const leftStickDown = new InputSourceButton();
          leftStickDown.getValue = () => this._nativeButtonState[Button.LEFT_STICK_DOWN];
          const leftStickLeft = new InputSourceButton();
          leftStickLeft.getValue = () => this._nativeButtonState[Button.LEFT_STICK_LEFT];
          const leftStickRight = new InputSourceButton();
          leftStickRight.getValue = () => this._nativeButtonState[Button.LEFT_STICK_RIGHT];
          this._leftStick = new InputSourceStick({
            up: leftStickUp,
            down: leftStickDown,
            left: leftStickLeft,
            right: leftStickRight
          });
          this._buttonRightStick = new InputSourceButton();
          this._buttonRightStick.getValue = () => this._nativeButtonState[Button.BUTTON_RIGHT_STICK];
          const rightStickUp = new InputSourceButton();
          rightStickUp.getValue = () => this._nativeButtonState[Button.RIGHT_STICK_UP];
          const rightStickDown = new InputSourceButton();
          rightStickDown.getValue = () => this._nativeButtonState[Button.RIGHT_STICK_DOWN];
          const rightStickLeft = new InputSourceButton();
          rightStickLeft.getValue = () => this._nativeButtonState[Button.RIGHT_STICK_LEFT];
          const rightStickRight = new InputSourceButton();
          rightStickRight.getValue = () => this._nativeButtonState[Button.RIGHT_STICK_RIGHT];
          this._rightStick = new InputSourceStick({
            up: rightStickUp,
            down: rightStickDown,
            left: rightStickLeft,
            right: rightStickRight
          });
          this._buttonOptions = new InputSourceButton();
          this._buttonOptions.getValue = () => this._nativeButtonState[Button.ROKID_MENU];
          this._buttonStart = new InputSourceButton();
          this._buttonStart.getValue = () => this._nativeButtonState[Button.ROKID_START];
          this._handLeftPosition = new InputSourcePosition();
          this._handLeftPosition.getValue = () => Vec3.ZERO;
          this._handLeftOrientation = new InputSourceOrientation();
          this._handLeftOrientation.getValue = () => Quat.IDENTITY;
          this._handRightPosition = new InputSourcePosition();
          this._handRightPosition.getValue = () => Vec3.ZERO;
          this._handRightOrientation = new InputSourceOrientation();
          this._handRightOrientation.getValue = () => Quat.IDENTITY;
          this._aimLeftPosition = new InputSourcePosition();
          this._aimLeftPosition.getValue = () => Vec3.ZERO;
          this._aimLeftOrientation = new InputSourceOrientation();
          this._aimLeftOrientation.getValue = () => Quat.IDENTITY;
          this._aimRightPosition = new InputSourcePosition();
          this._aimRightPosition.getValue = () => Vec3.ZERO;
          this._aimRightOrientation = new InputSourceOrientation();
          this._aimRightOrientation.getValue = () => Quat.IDENTITY;
          this._touchButtonA = new InputSourceTouch();
          this._touchButtonA.getValue = () => this._nativeTouchState[StickTouchCode.A];
          this._touchButtonB = new InputSourceTouch();
          this._touchButtonB.getValue = () => this._nativeTouchState[StickTouchCode.B];
          this._touchButtonX = new InputSourceTouch();
          this._touchButtonX.getValue = () => this._nativeTouchState[StickTouchCode.X];
          this._touchButtonY = new InputSourceTouch();
          this._touchButtonY.getValue = () => this._nativeTouchState[StickTouchCode.Y];
          this._touchButtonTriggerLeft = new InputSourceTouch();
          this._touchButtonTriggerLeft.getValue = () => this._nativeTouchState[StickTouchCode.LEFT_TRIGGER];
          this._touchButtonTriggerRight = new InputSourceTouch();
          this._touchButtonTriggerRight.getValue = () => this._nativeTouchState[StickTouchCode.RIGHT_TRIGGER];
          this._touchButtonThumbStickLeft = new InputSourceTouch();
          this._touchButtonThumbStickLeft.getValue = () => this._nativeTouchState[StickTouchCode.LEFT_THUMBSTICK];
          this._touchButtonThumbStickRight = new InputSourceTouch();
          this._touchButtonThumbStickRight.getValue = () => this._nativeTouchState[StickTouchCode.RIGHT_THUMBSTICK];
        }
      });
    }
  };
});