System.register("q-bundled:///fs/pal/input/native/handle-input.js", ["../../../cocos/input/types/event-enum.js", "../../../cocos/core/event/event-target.js", "../../../cocos/input/types/index.js", "../input-source.js", "../../../cocos/core/math/index.js"], function (_export, _context) {
  "use strict";

  var InputEventType, EventTarget, EventHandle, InputSourceButton, InputSourceStick, InputSourcePosition, InputSourceOrientation, InputSourceTouch, Vec3, Quat, Button, Pose, StickKeyCode, StickAxisCode, StickTouchCode, _nativeButtonMap, HandleInputDevice;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
  return {
    setters: [function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
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
      (function (Pose) {
        Pose[Pose["HAND_LEFT"] = 0] = "HAND_LEFT";
        Pose[Pose["HAND_RIGHT"] = 1] = "HAND_RIGHT";
        Pose[Pose["AIM_LEFT"] = 2] = "AIM_LEFT";
        Pose[Pose["AIM_RIGHT"] = 3] = "AIM_RIGHT";
      })(Pose || (Pose = {}));
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
      _export("HandleInputDevice", HandleInputDevice = /*#__PURE__*/function () {
        function HandleInputDevice() {
          var _this$_nativeButtonSt, _this$_nativeTouchSta, _this$_nativePoseStat;
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
          this._nativeButtonState = (_this$_nativeButtonSt = {}, _this$_nativeButtonSt[Button.BUTTON_SOUTH] = 0, _this$_nativeButtonSt[Button.BUTTON_EAST] = 0, _this$_nativeButtonSt[Button.BUTTON_WEST] = 0, _this$_nativeButtonSt[Button.BUTTON_NORTH] = 0, _this$_nativeButtonSt[Button.BUTTON_TRIGGER_LEFT] = 0, _this$_nativeButtonSt[Button.BUTTON_TRIGGER_RIGHT] = 0, _this$_nativeButtonSt[Button.TRIGGER_LEFT] = 0, _this$_nativeButtonSt[Button.TRIGGER_RIGHT] = 0, _this$_nativeButtonSt[Button.GRIP_LEFT] = 0, _this$_nativeButtonSt[Button.GRIP_RIGHT] = 0, _this$_nativeButtonSt[Button.LEFT_STICK_UP] = 0, _this$_nativeButtonSt[Button.LEFT_STICK_DOWN] = 0, _this$_nativeButtonSt[Button.LEFT_STICK_LEFT] = 0, _this$_nativeButtonSt[Button.LEFT_STICK_RIGHT] = 0, _this$_nativeButtonSt[Button.RIGHT_STICK_UP] = 0, _this$_nativeButtonSt[Button.RIGHT_STICK_DOWN] = 0, _this$_nativeButtonSt[Button.RIGHT_STICK_LEFT] = 0, _this$_nativeButtonSt[Button.RIGHT_STICK_RIGHT] = 0, _this$_nativeButtonSt[Button.BUTTON_LEFT_STICK] = 0, _this$_nativeButtonSt[Button.BUTTON_RIGHT_STICK] = 0, _this$_nativeButtonSt[Button.ROKID_MENU] = 0, _this$_nativeButtonSt[Button.ROKID_START] = 0, _this$_nativeButtonSt);
          this._nativeTouchState = (_this$_nativeTouchSta = {}, _this$_nativeTouchSta[StickTouchCode.UNDEFINE] = 0, _this$_nativeTouchSta[StickTouchCode.A] = 0, _this$_nativeTouchSta[StickTouchCode.B] = 0, _this$_nativeTouchSta[StickTouchCode.X] = 0, _this$_nativeTouchSta[StickTouchCode.Y] = 0, _this$_nativeTouchSta[StickTouchCode.LEFT_TRIGGER] = 0, _this$_nativeTouchSta[StickTouchCode.RIGHT_TRIGGER] = 0, _this$_nativeTouchSta[StickTouchCode.LEFT_THUMBSTICK] = 0, _this$_nativeTouchSta[StickTouchCode.RIGHT_THUMBSTICK] = 0, _this$_nativeTouchSta);
          this._nativePoseState = (_this$_nativePoseStat = {}, _this$_nativePoseStat[Pose.HAND_LEFT] = {
            position: Vec3.ZERO,
            orientation: Quat.IDENTITY
          }, _this$_nativePoseStat[Pose.HAND_RIGHT] = {
            position: Vec3.ZERO,
            orientation: Quat.IDENTITY
          }, _this$_nativePoseStat[Pose.AIM_LEFT] = {
            position: Vec3.ZERO,
            orientation: Quat.IDENTITY
          }, _this$_nativePoseStat[Pose.AIM_RIGHT] = {
            position: Vec3.ZERO,
            orientation: Quat.IDENTITY
          }, _this$_nativePoseStat);
          this._initInputSource();
          this._registerEvent();
        }
        var _proto = HandleInputDevice.prototype;
        _proto._registerEvent = function _registerEvent() {
          var _this = this;
          jsb.onHandleInput = function (infoList) {
            for (var i = 0; i < infoList.length; ++i) {
              var info = infoList[i];
              _this._updateNativeButtonState(info);
              _this._eventTarget.emit(InputEventType.HANDLE_INPUT, new EventHandle(InputEventType.HANDLE_INPUT, _this));
            }
          };
          jsb.onHandlePoseInput = function (infoList) {
            for (var i = 0; i < infoList.length; ++i) {
              var info = infoList[i];
              _this._updateNativePoseState(info);
            }
            _this._eventTarget.emit(InputEventType.HANDLE_POSE_INPUT, new EventHandle(InputEventType.HANDLE_POSE_INPUT, _this));
          };
        }

        /**
         * @engineInternal
         */;
        _proto._on = function _on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        };
        _proto._axisToButtons = function _axisToButtons(axisValue) {
          var value = Math.abs(axisValue);
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
        };
        _proto._updateNativeButtonState = function _updateNativeButtonState(info) {
          var buttonInfoList = info.buttonInfoList,
            axisInfoList = info.axisInfoList,
            touchInfoList = info.touchInfoList;
          for (var i = 0; i < buttonInfoList.length; ++i) {
            var buttonInfo = buttonInfoList[i];
            var button = _nativeButtonMap[buttonInfo.code];
            this._nativeButtonState[button] = buttonInfo.isPressed ? 1 : 0;
          }
          for (var _i = 0; _i < axisInfoList.length; ++_i) {
            var axisInfo = axisInfoList[_i];
            var code = axisInfo.code,
              value = axisInfo.value;
            var negativeButton = void 0;
            var positiveButton = void 0;
            var axisValue = void 0;
            switch (code) {
              case StickAxisCode.LEFT_STICK_X:
                negativeButton = Button.LEFT_STICK_LEFT;
                positiveButton = Button.LEFT_STICK_RIGHT;
                axisValue = this._axisToButtons(value);
                break;
              case StickAxisCode.LEFT_STICK_Y:
                negativeButton = Button.LEFT_STICK_DOWN;
                positiveButton = Button.LEFT_STICK_UP;
                axisValue = this._axisToButtons(value);
                break;
              case StickAxisCode.RIGHT_STICK_X:
                negativeButton = Button.RIGHT_STICK_LEFT;
                positiveButton = Button.RIGHT_STICK_RIGHT;
                axisValue = this._axisToButtons(value);
                break;
              case StickAxisCode.RIGHT_STICK_Y:
                negativeButton = Button.RIGHT_STICK_DOWN;
                positiveButton = Button.RIGHT_STICK_UP;
                axisValue = this._axisToButtons(value);
                break;
              case StickAxisCode.L2:
                this._nativeButtonState[Button.TRIGGER_LEFT] = value;
                break;
              case StickAxisCode.R2:
                this._nativeButtonState[Button.TRIGGER_RIGHT] = value;
                break;
              case StickAxisCode.LEFT_GRIP:
                this._nativeButtonState[Button.GRIP_LEFT] = value;
                break;
              case StickAxisCode.RIGHT_GRIP:
                this._nativeButtonState[Button.GRIP_RIGHT] = value;
                break;
              default:
                break;
            }
            if (negativeButton && positiveButton && axisValue) {
              this._nativeButtonState[negativeButton] = axisValue.negative;
              this._nativeButtonState[positiveButton] = axisValue.positive;
            }
          }
          if (touchInfoList) {
            for (var _i2 = 0; _i2 < touchInfoList.length; ++_i2) {
              var touchInfo = touchInfoList[_i2];
              var _code = touchInfo.code,
                _value = touchInfo.value;
              switch (_code) {
                case StickTouchCode.A:
                case StickTouchCode.B:
                case StickTouchCode.X:
                case StickTouchCode.Y:
                case StickTouchCode.LEFT_TRIGGER:
                case StickTouchCode.RIGHT_TRIGGER:
                case StickTouchCode.LEFT_THUMBSTICK:
                case StickTouchCode.RIGHT_THUMBSTICK:
                  this._nativeTouchState[_code] = _value;
                  break;
                default:
                  break;
              }
            }
          }
        };
        _proto._updateNativePoseState = function _updateNativePoseState(info) {
          switch (info.code) {
            case 1:
              this._nativePoseState[Pose.HAND_LEFT] = {
                position: new Vec3(info.x, info.y, info.z),
                orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
              };
              break;
            case 2:
              this._nativePoseState[Pose.AIM_LEFT] = {
                position: new Vec3(info.x, info.y, info.z),
                orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
              };
              break;
            case 4:
              this._nativePoseState[Pose.HAND_RIGHT] = {
                position: new Vec3(info.x, info.y, info.z),
                orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
              };
              break;
            case 5:
              this._nativePoseState[Pose.AIM_RIGHT] = {
                position: new Vec3(info.x, info.y, info.z),
                orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
              };
              break;
            default:
              break;
          }
        };
        _proto._initInputSource = function _initInputSource() {
          var _this2 = this;
          this._buttonNorth = new InputSourceButton();
          this._buttonNorth.getValue = function () {
            return _this2._nativeButtonState[Button.BUTTON_NORTH];
          };
          this._buttonEast = new InputSourceButton();
          this._buttonEast.getValue = function () {
            return _this2._nativeButtonState[Button.BUTTON_EAST];
          };
          this._buttonWest = new InputSourceButton();
          this._buttonWest.getValue = function () {
            return _this2._nativeButtonState[Button.BUTTON_WEST];
          };
          this._buttonSouth = new InputSourceButton();
          this._buttonSouth.getValue = function () {
            return _this2._nativeButtonState[Button.BUTTON_SOUTH];
          };
          this._buttonTriggerLeft = new InputSourceButton();
          this._buttonTriggerLeft.getValue = function () {
            return _this2._nativeButtonState[Button.BUTTON_TRIGGER_LEFT];
          };
          this._buttonTriggerRight = new InputSourceButton();
          this._buttonTriggerRight.getValue = function () {
            return _this2._nativeButtonState[Button.BUTTON_TRIGGER_RIGHT];
          };
          this._triggerLeft = new InputSourceButton();
          this._triggerLeft.getValue = function () {
            return _this2._nativeButtonState[Button.TRIGGER_LEFT];
          };
          this._triggerRight = new InputSourceButton();
          this._triggerRight.getValue = function () {
            return _this2._nativeButtonState[Button.TRIGGER_RIGHT];
          };
          this._gripLeft = new InputSourceButton();
          this._gripLeft.getValue = function () {
            return _this2._nativeButtonState[Button.GRIP_LEFT];
          };
          this._gripRight = new InputSourceButton();
          this._gripRight.getValue = function () {
            return _this2._nativeButtonState[Button.GRIP_RIGHT];
          };
          this._buttonLeftStick = new InputSourceButton();
          this._buttonLeftStick.getValue = function () {
            return _this2._nativeButtonState[Button.BUTTON_LEFT_STICK];
          };
          var leftStickUp = new InputSourceButton();
          leftStickUp.getValue = function () {
            return _this2._nativeButtonState[Button.LEFT_STICK_UP];
          };
          var leftStickDown = new InputSourceButton();
          leftStickDown.getValue = function () {
            return _this2._nativeButtonState[Button.LEFT_STICK_DOWN];
          };
          var leftStickLeft = new InputSourceButton();
          leftStickLeft.getValue = function () {
            return _this2._nativeButtonState[Button.LEFT_STICK_LEFT];
          };
          var leftStickRight = new InputSourceButton();
          leftStickRight.getValue = function () {
            return _this2._nativeButtonState[Button.LEFT_STICK_RIGHT];
          };
          this._leftStick = new InputSourceStick({
            up: leftStickUp,
            down: leftStickDown,
            left: leftStickLeft,
            right: leftStickRight
          });
          this._buttonRightStick = new InputSourceButton();
          this._buttonRightStick.getValue = function () {
            return _this2._nativeButtonState[Button.BUTTON_RIGHT_STICK];
          };
          var rightStickUp = new InputSourceButton();
          rightStickUp.getValue = function () {
            return _this2._nativeButtonState[Button.RIGHT_STICK_UP];
          };
          var rightStickDown = new InputSourceButton();
          rightStickDown.getValue = function () {
            return _this2._nativeButtonState[Button.RIGHT_STICK_DOWN];
          };
          var rightStickLeft = new InputSourceButton();
          rightStickLeft.getValue = function () {
            return _this2._nativeButtonState[Button.RIGHT_STICK_LEFT];
          };
          var rightStickRight = new InputSourceButton();
          rightStickRight.getValue = function () {
            return _this2._nativeButtonState[Button.RIGHT_STICK_RIGHT];
          };
          this._rightStick = new InputSourceStick({
            up: rightStickUp,
            down: rightStickDown,
            left: rightStickLeft,
            right: rightStickRight
          });
          this._buttonOptions = new InputSourceButton();
          this._buttonOptions.getValue = function () {
            return _this2._nativeButtonState[Button.ROKID_MENU];
          };
          this._buttonStart = new InputSourceButton();
          this._buttonStart.getValue = function () {
            return _this2._nativeButtonState[Button.ROKID_START];
          };
          this._handLeftPosition = new InputSourcePosition();
          this._handLeftPosition.getValue = function () {
            return _this2._nativePoseState[Pose.HAND_LEFT].position;
          };
          this._handLeftOrientation = new InputSourceOrientation();
          this._handLeftOrientation.getValue = function () {
            return _this2._nativePoseState[Pose.HAND_LEFT].orientation;
          };
          this._handRightPosition = new InputSourcePosition();
          this._handRightPosition.getValue = function () {
            return _this2._nativePoseState[Pose.HAND_RIGHT].position;
          };
          this._handRightOrientation = new InputSourceOrientation();
          this._handRightOrientation.getValue = function () {
            return _this2._nativePoseState[Pose.HAND_RIGHT].orientation;
          };
          this._aimLeftPosition = new InputSourcePosition();
          this._aimLeftPosition.getValue = function () {
            return _this2._nativePoseState[Pose.AIM_LEFT].position;
          };
          this._aimLeftOrientation = new InputSourceOrientation();
          this._aimLeftOrientation.getValue = function () {
            return _this2._nativePoseState[Pose.AIM_LEFT].orientation;
          };
          this._aimRightPosition = new InputSourcePosition();
          this._aimRightPosition.getValue = function () {
            return _this2._nativePoseState[Pose.AIM_RIGHT].position;
          };
          this._aimRightOrientation = new InputSourceOrientation();
          this._aimRightOrientation.getValue = function () {
            return _this2._nativePoseState[Pose.AIM_RIGHT].orientation;
          };
          this._touchButtonA = new InputSourceTouch();
          this._touchButtonA.getValue = function () {
            return _this2._nativeTouchState[StickTouchCode.A];
          };
          this._touchButtonB = new InputSourceTouch();
          this._touchButtonB.getValue = function () {
            return _this2._nativeTouchState[StickTouchCode.B];
          };
          this._touchButtonX = new InputSourceTouch();
          this._touchButtonX.getValue = function () {
            return _this2._nativeTouchState[StickTouchCode.X];
          };
          this._touchButtonY = new InputSourceTouch();
          this._touchButtonY.getValue = function () {
            return _this2._nativeTouchState[StickTouchCode.Y];
          };
          this._touchButtonTriggerLeft = new InputSourceTouch();
          this._touchButtonTriggerLeft.getValue = function () {
            return _this2._nativeTouchState[StickTouchCode.LEFT_TRIGGER];
          };
          this._touchButtonTriggerRight = new InputSourceTouch();
          this._touchButtonTriggerRight.getValue = function () {
            return _this2._nativeTouchState[StickTouchCode.RIGHT_TRIGGER];
          };
          this._touchButtonThumbStickLeft = new InputSourceTouch();
          this._touchButtonThumbStickLeft.getValue = function () {
            return _this2._nativeTouchState[StickTouchCode.LEFT_THUMBSTICK];
          };
          this._touchButtonThumbStickRight = new InputSourceTouch();
          this._touchButtonThumbStickRight.getValue = function () {
            return _this2._nativeTouchState[StickTouchCode.RIGHT_THUMBSTICK];
          };
        };
        _createClass(HandleInputDevice, [{
          key: "buttonNorth",
          get: function get() {
            return this._buttonNorth;
          }
        }, {
          key: "buttonEast",
          get: function get() {
            return this._buttonEast;
          }
        }, {
          key: "buttonWest",
          get: function get() {
            return this._buttonWest;
          }
        }, {
          key: "buttonSouth",
          get: function get() {
            return this._buttonSouth;
          }
        }, {
          key: "buttonTriggerLeft",
          get: function get() {
            return this._buttonTriggerLeft;
          }
        }, {
          key: "buttonTriggerRight",
          get: function get() {
            return this._buttonTriggerRight;
          }
        }, {
          key: "triggerLeft",
          get: function get() {
            return this._triggerLeft;
          }
        }, {
          key: "triggerRight",
          get: function get() {
            return this._triggerRight;
          }
        }, {
          key: "gripLeft",
          get: function get() {
            return this._gripLeft;
          }
        }, {
          key: "gripRight",
          get: function get() {
            return this._gripRight;
          }
        }, {
          key: "leftStick",
          get: function get() {
            return this._leftStick;
          }
        }, {
          key: "rightStick",
          get: function get() {
            return this._rightStick;
          }
        }, {
          key: "buttonLeftStick",
          get: function get() {
            return this._buttonLeftStick;
          }
        }, {
          key: "buttonRightStick",
          get: function get() {
            return this._buttonRightStick;
          }
        }, {
          key: "buttonOptions",
          get: function get() {
            return this._buttonOptions;
          }
        }, {
          key: "buttonStart",
          get: function get() {
            return this._buttonStart;
          }
        }, {
          key: "handLeftPosition",
          get: function get() {
            return this._handLeftPosition;
          }
        }, {
          key: "handLeftOrientation",
          get: function get() {
            return this._handLeftOrientation;
          }
        }, {
          key: "handRightPosition",
          get: function get() {
            return this._handRightPosition;
          }
        }, {
          key: "handRightOrientation",
          get: function get() {
            return this._handRightOrientation;
          }
        }, {
          key: "aimLeftPosition",
          get: function get() {
            return this._aimLeftPosition;
          }
        }, {
          key: "aimLeftOrientation",
          get: function get() {
            return this._aimLeftOrientation;
          }
        }, {
          key: "aimRightPosition",
          get: function get() {
            return this._aimRightPosition;
          }
        }, {
          key: "aimRightOrientation",
          get: function get() {
            return this._aimRightOrientation;
          }
        }, {
          key: "touchButtonA",
          get: function get() {
            return this._touchButtonA;
          }
        }, {
          key: "touchButtonB",
          get: function get() {
            return this._touchButtonB;
          }
        }, {
          key: "touchButtonX",
          get: function get() {
            return this._touchButtonX;
          }
        }, {
          key: "touchButtonY",
          get: function get() {
            return this._touchButtonY;
          }
        }, {
          key: "touchButtonTriggerLeft",
          get: function get() {
            return this._touchButtonTriggerLeft;
          }
        }, {
          key: "touchButtonTriggerRight",
          get: function get() {
            return this._touchButtonTriggerRight;
          }
        }, {
          key: "touchButtonThumbStickLeft",
          get: function get() {
            return this._touchButtonThumbStickLeft;
          }
        }, {
          key: "touchButtonThumbStickRight",
          get: function get() {
            return this._touchButtonThumbStickRight;
          }
        }]);
        return HandleInputDevice;
      }());
    }
  };
});