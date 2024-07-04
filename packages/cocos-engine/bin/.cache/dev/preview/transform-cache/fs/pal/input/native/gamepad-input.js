System.register("q-bundled:///fs/pal/input/native/gamepad-input.js", ["pal/system-info", "../../../cocos/input/types/event-enum.js", "../../system-info/enum-type/index.js", "../../../cocos/core/event/event-target.js", "../../../cocos/input/types/index.js", "../input-source.js", "../../../cocos/core/index.js"], function (_export, _context) {
  "use strict";

  var systemInfo, InputEventType, Feature, EventTarget, EventGamepad, InputSourceButton, InputSourceDpad, InputSourceOrientation, InputSourcePosition, InputSourceStick, Quat, Vec3, js, Button, _nativeButtonMap, GamepadInputDevice;
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
                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable brace-style */
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_systemInfoEnumTypeIndexJs) {
      Feature = _systemInfoEnumTypeIndexJs.Feature;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_cocosInputTypesIndexJs) {
      EventGamepad = _cocosInputTypesIndexJs.EventGamepad;
    }, function (_inputSourceJs) {
      InputSourceButton = _inputSourceJs.InputSourceButton;
      InputSourceDpad = _inputSourceJs.InputSourceDpad;
      InputSourceOrientation = _inputSourceJs.InputSourceOrientation;
      InputSourcePosition = _inputSourceJs.InputSourcePosition;
      InputSourceStick = _inputSourceJs.InputSourceStick;
    }, function (_cocosCoreIndexJs) {
      Quat = _cocosCoreIndexJs.Quat;
      Vec3 = _cocosCoreIndexJs.Vec3;
      js = _cocosCoreIndexJs.js;
    }],
    execute: function () {
      (function (Button) {
        Button[Button["BUTTON_SOUTH"] = 0] = "BUTTON_SOUTH";
        Button[Button["BUTTON_EAST"] = 1] = "BUTTON_EAST";
        Button[Button["BUTTON_WEST"] = 2] = "BUTTON_WEST";
        Button[Button["BUTTON_NORTH"] = 3] = "BUTTON_NORTH";
        Button[Button["NS_MINUS"] = 4] = "NS_MINUS";
        Button[Button["NS_PLUS"] = 5] = "NS_PLUS";
        Button[Button["BUTTON_L1"] = 6] = "BUTTON_L1";
        Button[Button["BUTTON_L2"] = 7] = "BUTTON_L2";
        Button[Button["BUTTON_L3"] = 8] = "BUTTON_L3";
        Button[Button["BUTTON_R1"] = 9] = "BUTTON_R1";
        Button[Button["BUTTON_R2"] = 10] = "BUTTON_R2";
        Button[Button["BUTTON_R3"] = 11] = "BUTTON_R3";
        Button[Button["DPAD_UP"] = 12] = "DPAD_UP";
        Button[Button["DPAD_DOWN"] = 13] = "DPAD_DOWN";
        Button[Button["DPAD_LEFT"] = 14] = "DPAD_LEFT";
        Button[Button["DPAD_RIGHT"] = 15] = "DPAD_RIGHT";
        Button[Button["LEFT_STICK_UP"] = 16] = "LEFT_STICK_UP";
        Button[Button["LEFT_STICK_DOWN"] = 17] = "LEFT_STICK_DOWN";
        Button[Button["LEFT_STICK_LEFT"] = 18] = "LEFT_STICK_LEFT";
        Button[Button["LEFT_STICK_RIGHT"] = 19] = "LEFT_STICK_RIGHT";
        Button[Button["RIGHT_STICK_UP"] = 20] = "RIGHT_STICK_UP";
        Button[Button["RIGHT_STICK_DOWN"] = 21] = "RIGHT_STICK_DOWN";
        Button[Button["RIGHT_STICK_LEFT"] = 22] = "RIGHT_STICK_LEFT";
        Button[Button["RIGHT_STICK_RIGHT"] = 23] = "RIGHT_STICK_RIGHT";
        Button[Button["ROKID_MENU"] = 24] = "ROKID_MENU";
        Button[Button["ROKID_START"] = 25] = "ROKID_START";
      })(Button || (Button = {}));
      _nativeButtonMap = {
        1: Button.BUTTON_EAST,
        2: Button.BUTTON_SOUTH,
        3: Button.BUTTON_NORTH,
        4: Button.BUTTON_WEST,
        5: Button.BUTTON_L1,
        6: Button.BUTTON_R1,
        7: Button.NS_MINUS,
        8: Button.NS_PLUS,
        9: Button.BUTTON_L3,
        10: Button.BUTTON_R3,
        11: Button.ROKID_MENU,
        12: Button.ROKID_START
      };
      _export("GamepadInputDevice", GamepadInputDevice = /*#__PURE__*/function () {
        function GamepadInputDevice(deviceId) {
          var _this$_nativeButtonSt;
          this._buttonNorth = void 0;
          this._buttonEast = void 0;
          this._buttonWest = void 0;
          this._buttonSouth = void 0;
          this._buttonL1 = void 0;
          this._buttonL2 = void 0;
          this._buttonL3 = void 0;
          this._buttonR1 = void 0;
          this._buttonR2 = void 0;
          this._buttonR3 = void 0;
          // private buttonTouchPad!: InputSourceButton;
          // private buttonHome!: InputSourceButton;
          this._buttonShare = void 0;
          this._buttonOptions = void 0;
          this._dpad = void 0;
          this._leftStick = void 0;
          this._rightStick = void 0;
          this._buttonStart = void 0;
          this._gripLeft = void 0;
          this._gripRight = void 0;
          this._handLeftPosition = void 0;
          this._handLeftOrientation = void 0;
          this._handRightPosition = void 0;
          this._handRightOrientation = void 0;
          this._aimLeftPosition = void 0;
          this._aimLeftOrientation = void 0;
          this._aimRightPosition = void 0;
          this._aimRightOrientation = void 0;
          this._deviceId = -1;
          this._connected = false;
          this._nativeButtonState = (_this$_nativeButtonSt = {}, _this$_nativeButtonSt[Button.BUTTON_SOUTH] = 0, _this$_nativeButtonSt[Button.BUTTON_EAST] = 0, _this$_nativeButtonSt[Button.BUTTON_WEST] = 0, _this$_nativeButtonSt[Button.BUTTON_NORTH] = 0, _this$_nativeButtonSt[Button.NS_MINUS] = 0, _this$_nativeButtonSt[Button.NS_PLUS] = 0, _this$_nativeButtonSt[Button.BUTTON_L1] = 0, _this$_nativeButtonSt[Button.BUTTON_L2] = 0, _this$_nativeButtonSt[Button.BUTTON_L3] = 0, _this$_nativeButtonSt[Button.BUTTON_R1] = 0, _this$_nativeButtonSt[Button.BUTTON_R2] = 0, _this$_nativeButtonSt[Button.BUTTON_R3] = 0, _this$_nativeButtonSt[Button.DPAD_UP] = 0, _this$_nativeButtonSt[Button.DPAD_DOWN] = 0, _this$_nativeButtonSt[Button.DPAD_LEFT] = 0, _this$_nativeButtonSt[Button.DPAD_RIGHT] = 0, _this$_nativeButtonSt[Button.LEFT_STICK_UP] = 0, _this$_nativeButtonSt[Button.LEFT_STICK_DOWN] = 0, _this$_nativeButtonSt[Button.LEFT_STICK_LEFT] = 0, _this$_nativeButtonSt[Button.LEFT_STICK_RIGHT] = 0, _this$_nativeButtonSt[Button.RIGHT_STICK_UP] = 0, _this$_nativeButtonSt[Button.RIGHT_STICK_DOWN] = 0, _this$_nativeButtonSt[Button.RIGHT_STICK_LEFT] = 0, _this$_nativeButtonSt[Button.RIGHT_STICK_RIGHT] = 0, _this$_nativeButtonSt[Button.ROKID_MENU] = 0, _this$_nativeButtonSt[Button.ROKID_START] = 0, _this$_nativeButtonSt);
          this._deviceId = deviceId;
          this._initInputSource();
        }

        /**
         * @engineInternal
         */
        GamepadInputDevice._init = function _init() {
          if (!systemInfo.hasFeature(Feature.EVENT_GAMEPAD)) {
            return;
          }
          GamepadInputDevice._registerEvent();
        }

        /**
         * @engineInternal
         */;
        GamepadInputDevice._on = function _on(eventType, cb, target) {
          GamepadInputDevice._eventTarget.on(eventType, cb, target);
        };
        GamepadInputDevice._removeInputDevice = function _removeInputDevice(id) {
          var removeIndex = GamepadInputDevice.all.findIndex(function (device) {
            return device.deviceId === id;
          });
          if (removeIndex === -1) {
            return;
          }
          js.array.fastRemoveAt(GamepadInputDevice.all, removeIndex);
        };
        GamepadInputDevice._getInputDevice = function _getInputDevice(id) {
          return GamepadInputDevice.all.find(function (device) {
            return device.deviceId === id;
          });
        };
        GamepadInputDevice._createInputDevice = function _createInputDevice(id, connected) {
          var device = new GamepadInputDevice(id);
          device._connected = connected;
          GamepadInputDevice.all.push(device);
          return device;
        };
        GamepadInputDevice._getOrCreateInputDevice = function _getOrCreateInputDevice(id, connected) {
          var device = GamepadInputDevice._getInputDevice(id);
          if (!device) {
            device = GamepadInputDevice._createInputDevice(id, connected);
          }
          device._connected = connected;
          return device;
        };
        GamepadInputDevice._registerEvent = function _registerEvent() {
          jsb.onControllerInput = function (infoList) {
            for (var i = 0; i < infoList.length; ++i) {
              var info = infoList[i];
              var device = GamepadInputDevice._getOrCreateInputDevice(info.id, true);
              device._updateNativeButtonState(info);
              GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_INPUT, new EventGamepad(InputEventType.GAMEPAD_INPUT, device));
            }
          };
          jsb.onControllerChange = function (controllerIds) {
            // check connecting
            for (var i = 0; i < controllerIds.length; ++i) {
              var id = controllerIds[i];
              var device = GamepadInputDevice._getInputDevice(id);
              if (!device) {
                device = GamepadInputDevice._createInputDevice(id, true);
                GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, device));
              }
            }
            // check disconnecting
            var allDevices = GamepadInputDevice.all;
            for (var _i = 0; _i < allDevices.length; ++_i) {
              var _device = allDevices[_i];
              if (!controllerIds.includes(_device.deviceId)) {
                GamepadInputDevice._removeInputDevice(_device.deviceId);
                _device._connected = false;
                GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, _device));
              }
            }
          };
        };
        var _proto = GamepadInputDevice.prototype;
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
            axisInfoList = info.axisInfoList;
          for (var i = 0; i < buttonInfoList.length; ++i) {
            var buttonInfo = buttonInfoList[i];
            var button = _nativeButtonMap[buttonInfo.code];
            this._nativeButtonState[button] = buttonInfo.isPressed ? 1 : 0;
          }
          for (var _i2 = 0; _i2 < axisInfoList.length; ++_i2) {
            var axisInfo = axisInfoList[_i2];
            var code = axisInfo.code,
              value = axisInfo.value;
            var negativeButton = void 0;
            var positiveButton = void 0;
            var axisValue = void 0;
            switch (code) {
              case 1:
                negativeButton = Button.DPAD_LEFT;
                positiveButton = Button.DPAD_RIGHT;
                axisValue = this._axisToButtons(value);
                break;
              case 2:
                negativeButton = Button.DPAD_DOWN;
                positiveButton = Button.DPAD_UP;
                axisValue = this._axisToButtons(value);
                break;
              case 3:
                negativeButton = Button.LEFT_STICK_LEFT;
                positiveButton = Button.LEFT_STICK_RIGHT;
                axisValue = this._axisToButtons(value);
                break;
              case 4:
                negativeButton = Button.LEFT_STICK_DOWN;
                positiveButton = Button.LEFT_STICK_UP;
                axisValue = this._axisToButtons(value);
                break;
              case 5:
                negativeButton = Button.RIGHT_STICK_LEFT;
                positiveButton = Button.RIGHT_STICK_RIGHT;
                axisValue = this._axisToButtons(value);
                break;
              case 6:
                negativeButton = Button.RIGHT_STICK_DOWN;
                positiveButton = Button.RIGHT_STICK_UP;
                axisValue = this._axisToButtons(value);
                break;
              default:
                if (code === 7) {
                  this._nativeButtonState[Button.BUTTON_L2] = value;
                } else if (code === 8) {
                  this._nativeButtonState[Button.BUTTON_R2] = value;
                }
                break;
            }
            if (negativeButton && positiveButton && axisValue) {
              this._nativeButtonState[negativeButton] = axisValue.negative;
              this._nativeButtonState[positiveButton] = axisValue.positive;
            }
          }
        };
        _proto._initInputSource = function _initInputSource() {
          var _this = this;
          this._buttonNorth = new InputSourceButton();
          this._buttonNorth.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_NORTH];
          };
          this._buttonEast = new InputSourceButton();
          this._buttonEast.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_EAST];
          };
          this._buttonWest = new InputSourceButton();
          this._buttonWest.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_WEST];
          };
          this._buttonSouth = new InputSourceButton();
          this._buttonSouth.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_SOUTH];
          };
          this._buttonL1 = new InputSourceButton();
          this._buttonL1.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_L1];
          };
          this._buttonL2 = new InputSourceButton();
          this._buttonL2.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_L2];
          };
          this._buttonL3 = new InputSourceButton();
          this._buttonL3.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_L3];
          };
          this._buttonR1 = new InputSourceButton();
          this._buttonR1.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_R1];
          };
          this._buttonR2 = new InputSourceButton();
          this._buttonR2.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_R2];
          };
          this._buttonR3 = new InputSourceButton();
          this._buttonR3.getValue = function () {
            return _this._nativeButtonState[Button.BUTTON_R3];
          };

          // this._buttonTouchPad = new InputSourceButton();
          // this._buttonTouchPad.getValue = () => 0;  // TODO: NX unavailable
          // this._buttonHome = new InputSourceButton();
          // this._buttonHome.getValue = () => 0;  // TODO: NX unavailable

          this._buttonShare = new InputSourceButton();
          this._buttonShare.getValue = function () {
            return _this._nativeButtonState[Button.NS_MINUS];
          }; // TODO: NX only for now
          this._buttonOptions = new InputSourceButton();
          this._buttonOptions.getValue = function () {
            return _this._nativeButtonState[Button.NS_PLUS] || _this._nativeButtonState[Button.ROKID_MENU];
          };
          var dpadUp = new InputSourceButton();
          dpadUp.getValue = function () {
            return _this._nativeButtonState[Button.DPAD_UP];
          };
          var dpadDown = new InputSourceButton();
          dpadDown.getValue = function () {
            return _this._nativeButtonState[Button.DPAD_DOWN];
          };
          var dpadLeft = new InputSourceButton();
          dpadLeft.getValue = function () {
            return _this._nativeButtonState[Button.DPAD_LEFT];
          };
          var dpadRight = new InputSourceButton();
          dpadRight.getValue = function () {
            return _this._nativeButtonState[Button.DPAD_RIGHT];
          };
          this._dpad = new InputSourceDpad({
            up: dpadUp,
            down: dpadDown,
            left: dpadLeft,
            right: dpadRight
          });
          var leftStickUp = new InputSourceButton();
          leftStickUp.getValue = function () {
            return _this._nativeButtonState[Button.LEFT_STICK_UP];
          };
          var leftStickDown = new InputSourceButton();
          leftStickDown.getValue = function () {
            return _this._nativeButtonState[Button.LEFT_STICK_DOWN];
          };
          var leftStickLeft = new InputSourceButton();
          leftStickLeft.getValue = function () {
            return _this._nativeButtonState[Button.LEFT_STICK_LEFT];
          };
          var leftStickRight = new InputSourceButton();
          leftStickRight.getValue = function () {
            return _this._nativeButtonState[Button.LEFT_STICK_RIGHT];
          };
          this._leftStick = new InputSourceStick({
            up: leftStickUp,
            down: leftStickDown,
            left: leftStickLeft,
            right: leftStickRight
          });
          var rightStickUp = new InputSourceButton();
          rightStickUp.getValue = function () {
            return _this._nativeButtonState[Button.RIGHT_STICK_UP];
          };
          var rightStickDown = new InputSourceButton();
          rightStickDown.getValue = function () {
            return _this._nativeButtonState[Button.RIGHT_STICK_DOWN];
          };
          var rightStickLeft = new InputSourceButton();
          rightStickLeft.getValue = function () {
            return _this._nativeButtonState[Button.RIGHT_STICK_LEFT];
          };
          var rightStickRight = new InputSourceButton();
          rightStickRight.getValue = function () {
            return _this._nativeButtonState[Button.RIGHT_STICK_RIGHT];
          };
          this._rightStick = new InputSourceStick({
            up: rightStickUp,
            down: rightStickDown,
            left: rightStickLeft,
            right: rightStickRight
          });
          this._buttonStart = new InputSourceButton();
          this._buttonStart.getValue = function () {
            return _this._nativeButtonState[Button.ROKID_START];
          }; // TODO: Rokid only for now

          this._gripLeft = new InputSourceButton();
          this._gripLeft.getValue = function () {
            return 0;
          };
          this._gripRight = new InputSourceButton();
          this._gripRight.getValue = function () {
            return 0;
          };
          this._handLeftPosition = new InputSourcePosition();
          this._handLeftPosition.getValue = function () {
            return Vec3.ZERO;
          };
          this._handLeftOrientation = new InputSourceOrientation();
          this._handLeftOrientation.getValue = function () {
            return Quat.IDENTITY;
          };
          this._handRightPosition = new InputSourcePosition();
          this._handRightPosition.getValue = function () {
            return Vec3.ZERO;
          };
          this._handRightOrientation = new InputSourceOrientation();
          this._handRightOrientation.getValue = function () {
            return Quat.IDENTITY;
          };
          this._aimLeftPosition = new InputSourcePosition();
          this._aimLeftPosition.getValue = function () {
            return Vec3.ZERO;
          };
          this._aimLeftOrientation = new InputSourceOrientation();
          this._aimLeftOrientation.getValue = function () {
            return Quat.IDENTITY;
          };
          this._aimRightPosition = new InputSourcePosition();
          this._aimRightPosition.getValue = function () {
            return Vec3.ZERO;
          };
          this._aimRightOrientation = new InputSourceOrientation();
          this._aimRightOrientation.getValue = function () {
            return Quat.IDENTITY;
          };
        };
        _createClass(GamepadInputDevice, [{
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
          key: "buttonL1",
          get: function get() {
            return this._buttonL1;
          }
        }, {
          key: "buttonL2",
          get: function get() {
            return this._buttonL2;
          }
        }, {
          key: "buttonL3",
          get: function get() {
            return this._buttonL3;
          }
        }, {
          key: "buttonR1",
          get: function get() {
            return this._buttonR1;
          }
        }, {
          key: "buttonR2",
          get: function get() {
            return this._buttonR2;
          }
        }, {
          key: "buttonR3",
          get: function get() {
            return this._buttonR3;
          }
          // public get buttonTouchPad () { return this._buttonTouchPad; }
          // public get buttonHome () { return this._buttonHome; }
        }, {
          key: "buttonShare",
          get: function get() {
            return this._buttonShare;
          }
        }, {
          key: "buttonOptions",
          get: function get() {
            return this._buttonOptions;
          }
        }, {
          key: "dpad",
          get: function get() {
            return this._dpad;
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
          key: "buttonStart",
          get: function get() {
            return this._buttonStart;
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
          key: "deviceId",
          get: function get() {
            return this._deviceId;
          }
        }, {
          key: "connected",
          get: function get() {
            return this._connected;
          }
        }]);
        return GamepadInputDevice;
      }());
      GamepadInputDevice.all = [];
      GamepadInputDevice.xr = null;
      GamepadInputDevice._eventTarget = new EventTarget();
    }
  };
});