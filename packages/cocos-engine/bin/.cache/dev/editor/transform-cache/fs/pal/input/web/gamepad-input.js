System.register("q-bundled:///fs/pal/input/web/gamepad-input.js", ["pal/system-info", "../../../cocos/input/types/event-enum.js", "../../../cocos/core/event/event-target.js", "../../../predefine.js", "../../system-info/enum-type/index.js", "../input-source.js", "../../../cocos/core/index.js", "../../../cocos/input/types/index.js"], function (_export, _context) {
  "use strict";

  var systemInfo, InputEventType, EventTarget, legacyCC, Feature, InputSourceButton, InputSourceDpad, InputSourceOrientation, InputSourcePosition, InputSourceStick, Quat, Vec3, js, EventGamepad, GamepadInputDevice, BUTTON_SOUTH, BUTTON_EAST, BUTTON_WEST, BUTTON_NORTH, BUTTON_L1, BUTTON_R1, BUTTON_L2, BUTTON_R2, BUTTON_SHARE, BUTTON_OPTIONS, BUTTON_L3, BUTTON_R3, BUTTON_DPAD_UP, BUTTON_DPAD_DOWN, BUTTON_DPAD_LEFT, BUTTON_DPAD_RIGHT, BUTTON_HOME, BUTTON_TOUCH_PAD, AXIS_LEFT_STICK_X, AXIS_LEFT_STICK_Y, AXIS_RIGHT_STICK_X, AXIS_RIGHT_STICK_Y, XR_TRIGGER, XR_GRIP, XR_TOUCHPAD, XR_STICK, XR_BUTTON_1, XR_BUTTON_2, XR_AXIS_TOUCHPAD_X, XR_AXIS_TOUCHPAD_Y, XR_AXIS_STICK_X, XR_AXIS_STICK_Y, EPSILON, XRLeftHandedness, XRRightHandedness, devicesTmp, Pose;
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
  _export("GamepadInputDevice", void 0);
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_predefineJs) {
      legacyCC = _predefineJs.default;
    }, function (_systemInfoEnumTypeIndexJs) {
      Feature = _systemInfoEnumTypeIndexJs.Feature;
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
    }, function (_cocosInputTypesIndexJs) {
      EventGamepad = _cocosInputTypesIndexJs.EventGamepad;
    }],
    execute: function () {
      //#region button index alias
      BUTTON_SOUTH = 0;
      BUTTON_EAST = 1;
      BUTTON_WEST = 2;
      BUTTON_NORTH = 3;
      BUTTON_L1 = 4;
      BUTTON_R1 = 5;
      BUTTON_L2 = 6;
      BUTTON_R2 = 7;
      BUTTON_SHARE = 8;
      BUTTON_OPTIONS = 9;
      BUTTON_L3 = 10;
      BUTTON_R3 = 11;
      BUTTON_DPAD_UP = 12;
      BUTTON_DPAD_DOWN = 13;
      BUTTON_DPAD_LEFT = 14;
      BUTTON_DPAD_RIGHT = 15;
      BUTTON_HOME = 16;
      BUTTON_TOUCH_PAD = 17;
      AXIS_LEFT_STICK_X = 0;
      AXIS_LEFT_STICK_Y = 1;
      AXIS_RIGHT_STICK_X = 2;
      AXIS_RIGHT_STICK_Y = 3;
      XR_TRIGGER = 0;
      XR_GRIP = 1;
      XR_TOUCHPAD = 2;
      XR_STICK = 3;
      XR_BUTTON_1 = 4;
      XR_BUTTON_2 = 5;
      XR_AXIS_TOUCHPAD_X = 0;
      XR_AXIS_TOUCHPAD_Y = 1;
      XR_AXIS_STICK_X = 2;
      XR_AXIS_STICK_Y = 3; //#endregion  button index alias
      EPSILON = 0.01;
      XRLeftHandedness = 'left';
      XRRightHandedness = 'right';
      devicesTmp = [];
      (function (Pose) {
        Pose[Pose["HAND_LEFT"] = 1] = "HAND_LEFT";
        Pose[Pose["HAND_RIGHT"] = 4] = "HAND_RIGHT";
        Pose[Pose["AIM_LEFT"] = 2] = "AIM_LEFT";
        Pose[Pose["AIM_RIGHT"] = 5] = "AIM_RIGHT";
      })(Pose || (Pose = {}));
      _export("GamepadInputDevice", GamepadInputDevice = class GamepadInputDevice {
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
        get buttonL1() {
          return this._buttonL1;
        }
        get buttonL2() {
          return this._buttonL2;
        }
        get buttonL3() {
          return this._buttonL3;
        }
        get buttonR1() {
          return this._buttonR1;
        }
        get buttonR2() {
          return this._buttonR2;
        }
        get buttonR3() {
          return this._buttonR3;
        }
        // public get buttonTouchPad () { return this._buttonTouchPad; }
        // public get buttonHome () { return this._buttonHome; }
        get buttonShare() {
          return this._buttonShare;
        }
        get buttonOptions() {
          return this._buttonOptions;
        }
        get dpad() {
          return this._dpad;
        }
        get leftStick() {
          return this._leftStick;
        }
        get rightStick() {
          return this._rightStick;
        }
        get buttonStart() {
          return this._buttonStart;
        }
        get gripLeft() {
          return this._gripLeft;
        }
        get gripRight() {
          return this._gripRight;
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
        get deviceId() {
          return this._deviceId;
        }
        get connected() {
          return this._connected;
        }
        constructor(deviceId) {
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
          this._webPoseState = {
            [Pose.HAND_LEFT]: {
              position: Vec3.ZERO,
              orientation: Quat.IDENTITY
            },
            [Pose.HAND_RIGHT]: {
              position: Vec3.ZERO,
              orientation: Quat.IDENTITY
            },
            [Pose.AIM_LEFT]: {
              position: Vec3.ZERO,
              orientation: Quat.IDENTITY
            },
            [Pose.AIM_RIGHT]: {
              position: Vec3.ZERO,
              orientation: Quat.IDENTITY
            }
          };
          this._deviceId = deviceId;
          this._initInputSource();
        }

        /**
         * @engineInternal
         */
        static _init() {
          if (!systemInfo.hasFeature(Feature.EVENT_GAMEPAD)) {
            return;
          }
          GamepadInputDevice._registerEvent();
        }

        /**
         * @engineInternal
         */
        static _on(eventType, cb, target) {
          GamepadInputDevice._eventTarget.on(eventType, cb, target);
        }
        static _removeInputDevice(id) {
          const removeIndex = GamepadInputDevice.all.findIndex(device => device.deviceId === id);
          if (removeIndex === -1) {
            return;
          }
          js.array.fastRemoveAt(GamepadInputDevice.all, removeIndex);
        }
        static _getOrCreateInputDevice(id, connected) {
          let device = GamepadInputDevice.all.find(device => device.deviceId === id);
          if (!device) {
            device = new GamepadInputDevice(id);
            GamepadInputDevice.all.push(device);
          }
          device._connected = connected;
          return device;
        }
        static _ensureDirectorDefined(callback) {
          GamepadInputDevice._intervalId = setInterval(() => {
            if (legacyCC.director && legacyCC.Director) {
              clearInterval(GamepadInputDevice._intervalId);
              GamepadInputDevice._intervalId = -1;
              callback();
            }
          }, 50);
        }
        static _updateGamepadCnt() {
          let cnt = 0;
          for (let i = 0, l = GamepadInputDevice._cachedWebGamepads.length; i < l; i++) {
            if (GamepadInputDevice._cachedWebGamepads[i]) cnt++;
          }
          GamepadInputDevice._totalGamepadCnt = cnt;
        }
        static _registerEvent() {
          GamepadInputDevice._ensureDirectorDefined(() => {
            GamepadInputDevice._cachedWebGamepads = GamepadInputDevice._getWebGamePads();
            GamepadInputDevice._updateGamepadCnt();
            legacyCC.director.on(legacyCC.Director.EVENT_BEGIN_FRAME, GamepadInputDevice._scanGamepads);
          });
          window.addEventListener('gamepadconnected', e => {
            GamepadInputDevice._cachedWebGamepads[e.gamepad.index] = e.gamepad;
            GamepadInputDevice._updateGamepadCnt();
            const device = GamepadInputDevice._getOrCreateInputDevice(e.gamepad.index, true);
            GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, device));
          });
          window.addEventListener('gamepaddisconnected', e => {
            GamepadInputDevice._cachedWebGamepads[e.gamepad.index] = null;
            GamepadInputDevice._updateGamepadCnt();
            const device = GamepadInputDevice._getOrCreateInputDevice(e.gamepad.index, false);
            GamepadInputDevice._removeInputDevice(e.gamepad.index);
            GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, device));
          });
        }
        static _scanWebGamepads(devices) {
          const allDisconnected = GamepadInputDevice._totalGamepadCnt === 0;
          if (allDisconnected) return;
          const webGamepads = GamepadInputDevice._getWebGamePads();
          if (!webGamepads) {
            return;
          }
          for (let i = 0; i < webGamepads.length; ++i) {
            const webGamepad = webGamepads[i];
            if (!webGamepad) {
              continue;
            }
            const cachedWebGamepad = GamepadInputDevice._cachedWebGamepads[webGamepad.index];
            // TODO: what if cachedWebGamepad is null
            if (cachedWebGamepad) {
              let device;
              const cachedButtons = cachedWebGamepad.buttons;
              for (let j = 0; j < cachedButtons.length; ++j) {
                const cachedButton = cachedButtons[j];
                const button = webGamepad.buttons[j];
                if (Math.abs(cachedButton.value - button.value) > EPSILON) {
                  device = GamepadInputDevice._getOrCreateInputDevice(webGamepad.index, true);
                  break;
                }
              }
              if (device) {
                devices.push(device);
                continue;
              }
              const cachedAxes = cachedWebGamepad.axes;
              for (let j = 0; j < cachedAxes.length; ++j) {
                const cachedAxisValue = cachedAxes[j];
                const axisValue = webGamepad.axes[j];
                if (Math.abs(cachedAxisValue - axisValue) > EPSILON) {
                  device = GamepadInputDevice._getOrCreateInputDevice(webGamepad.index, true);
                  break;
                }
              }
              if (device) {
                devices.push(device);
                continue;
              }
            }
          }
          // update cache
          GamepadInputDevice._cachedWebGamepads = webGamepads;
        }
        static _scanGamepads() {
          devicesTmp.length = 0;
          GamepadInputDevice._scanWebGamepads(devicesTmp);
          GamepadInputDevice._scanWebXRGamepads(devicesTmp);
          // emit event
          for (let i = 0; i < devicesTmp.length; ++i) {
            const device = devicesTmp[i];
            GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_INPUT, new EventGamepad(InputEventType.GAMEPAD_INPUT, device));
          }
          GamepadInputDevice._scanWebXRGamepadsPose();
        }
        static _scanWebXRGamepads(devices) {
          var _GamepadInputDevice$_, _GamepadInputDevice$_2;
          const webxrGamepadMap = GamepadInputDevice._getWebXRGamepadMap();
          if (!webxrGamepadMap) {
            // update cache
            GamepadInputDevice._cachedWebXRGamepadMap = null;
            if (GamepadInputDevice.xr && GamepadInputDevice.xr._connected) {
              GamepadInputDevice.xr._connected = false;
              GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, GamepadInputDevice.xr));
              devices.push(GamepadInputDevice.xr);
            }
            return;
          }
          if (!GamepadInputDevice.xr) {
            // webxr gamepads index is -1 https://www.w3.org/TR/webxr-gamepads-module-1/#navigator-differences
            GamepadInputDevice.xr = new GamepadInputDevice(-1);
          }
          const left = webxrGamepadMap.get(XRLeftHandedness);
          const right = webxrGamepadMap.get(XRRightHandedness);
          if (!left && !right) {
            if (GamepadInputDevice.xr._connected) {
              GamepadInputDevice.xr._connected = false;
              GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, GamepadInputDevice.xr));
            }
          } else if (!GamepadInputDevice.xr._connected) {
            GamepadInputDevice.xr._connected = true;
            GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, GamepadInputDevice.xr));
          }
          if (GamepadInputDevice.checkGamepadChanged(left, (_GamepadInputDevice$_ = GamepadInputDevice._cachedWebXRGamepadMap) === null || _GamepadInputDevice$_ === void 0 ? void 0 : _GamepadInputDevice$_.get(XRLeftHandedness))) {
            devices.push(GamepadInputDevice.xr);
          } else if (GamepadInputDevice.checkGamepadChanged(right, (_GamepadInputDevice$_2 = GamepadInputDevice._cachedWebXRGamepadMap) === null || _GamepadInputDevice$_2 === void 0 ? void 0 : _GamepadInputDevice$_2.get(XRRightHandedness))) {
            devices.push(GamepadInputDevice.xr);
          }

          // update cache
          if (!GamepadInputDevice._cachedWebXRGamepadMap) {
            GamepadInputDevice._cachedWebXRGamepadMap = new Map();
          }
          GamepadInputDevice._cachedWebXRGamepadMap.set(XRLeftHandedness, GamepadInputDevice._copyCacheGamepadValue(left));
          GamepadInputDevice._cachedWebXRGamepadMap.set(XRRightHandedness, GamepadInputDevice._copyCacheGamepadValue(right));
        }
        static checkGamepadChanged(currGamepad, cachedGamepad) {
          if (!currGamepad && !cachedGamepad) {
            return false;
          } else if (!currGamepad || !cachedGamepad) {
            return true;
          }
          const cachedButtons = cachedGamepad.buttons;
          for (let j = 0; j < cachedButtons.length; ++j) {
            const cachedButton = cachedButtons[j];
            const button = currGamepad.buttons[j];
            if (button.value !== 0 || cachedButton !== 0) {
              return true;
            }
          }
          const cachedAxes = cachedGamepad.axes;
          for (let j = 0; j < cachedAxes.length; ++j) {
            const cachedAxisValue = cachedAxes[j];
            const axisValue = currGamepad.axes[j];
            if (axisValue !== 0 || cachedAxisValue !== 0) {
              return true;
            }
          }
          return false;
        }
        static _copyCacheGamepadValue(gamepad) {
          if (!gamepad) {
            return undefined;
          }
          const cacheGamepad = {
            buttons: new Array(gamepad.buttons.length),
            axes: new Array(gamepad.axes.length)
          };
          for (let j = 0; j < gamepad.buttons.length; ++j) {
            cacheGamepad.buttons[j] = gamepad.buttons[j].value;
          }
          for (let j = 0; j < gamepad.axes.length; ++j) {
            cacheGamepad.axes[j] = gamepad.axes[j];
          }
          return cacheGamepad;
        }
        static _scanWebXRGamepadsPose() {
          var _globalThis$__globalX;
          const infoList = (_globalThis$__globalX = globalThis.__globalXR) === null || _globalThis$__globalX === void 0 ? void 0 : _globalThis$__globalX.webxrHandlePoseInfos;
          if (!infoList || !GamepadInputDevice.xr) {
            return;
          }
          for (let i = 0; i < infoList.length; ++i) {
            const info = infoList[i];
            GamepadInputDevice.xr._updateWebPoseState(info);
          }
          GamepadInputDevice._eventTarget.emit(InputEventType.HANDLE_POSE_INPUT, new EventGamepad(InputEventType.HANDLE_POSE_INPUT, GamepadInputDevice.xr));
        }
        static _getWebXRGamepadMap() {
          var _globalThis$__globalX2;
          return (_globalThis$__globalX2 = globalThis.__globalXR) === null || _globalThis$__globalX2 === void 0 ? void 0 : _globalThis$__globalX2.webxrGamepadMap;
        }
        static _getWebGamePads() {
          if (typeof navigator.getGamepads === 'function') {
            return navigator.getGamepads();
          } else if (typeof navigator.webkitGetGamepads === 'function') {
            // NOTE: 'webkitGetGamepads' is not a standard web interface
            return navigator.webkitGetGamepads();
          }
          return [];
        }
        static _getWebGamepad(deviceId) {
          const webGamepads = GamepadInputDevice._getWebGamePads();
          for (let i = 0; i < webGamepads.length; ++i) {
            const webGamepad = webGamepads[i];
            if (webGamepad && webGamepad.index === deviceId) {
              return webGamepad;
            }
          }
          return undefined;
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
        _updateWebPoseState(info) {
          if (info.code !== Pose.HAND_LEFT && info.code !== Pose.AIM_LEFT && info.code !== Pose.HAND_RIGHT && info.code !== Pose.AIM_RIGHT) {
            return;
          }
          this._webPoseState[info.code] = {
            position: new Vec3(info.position.x, info.position.y, info.position.z),
            orientation: new Quat(info.orientation.x, info.orientation.y, info.orientation.z, info.orientation.w)
          };
        }
        _initInputSource() {
          this._buttonNorth = new InputSourceButton();
          this._buttonNorth.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_3;
              const webxrGamepad = (_GamepadInputDevice$_3 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_3 === void 0 ? void 0 : _GamepadInputDevice$_3.get(XRLeftHandedness);
              if (webxrGamepad && webxrGamepad.buttons.length > XR_BUTTON_2) {
                return webxrGamepad.buttons[XR_BUTTON_2].value;
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_NORTH].value;
            }
            return 0;
          };
          this._buttonEast = new InputSourceButton();
          this._buttonEast.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_4;
              const webxrGamepad = (_GamepadInputDevice$_4 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_4 === void 0 ? void 0 : _GamepadInputDevice$_4.get(XRRightHandedness);
              if (webxrGamepad && webxrGamepad.buttons.length > XR_BUTTON_2) {
                return webxrGamepad.buttons[XR_BUTTON_2].value;
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_EAST].value;
            }
            return 0;
          };
          this._buttonWest = new InputSourceButton();
          this._buttonWest.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_5;
              const webxrGamepad = (_GamepadInputDevice$_5 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_5 === void 0 ? void 0 : _GamepadInputDevice$_5.get(XRLeftHandedness);
              if (webxrGamepad && webxrGamepad.buttons.length > XR_BUTTON_1) {
                return webxrGamepad.buttons[XR_BUTTON_1].value;
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_WEST].value;
            }
            return 0;
          };
          this._buttonSouth = new InputSourceButton();
          this._buttonSouth.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_6;
              const webxrGamepad = (_GamepadInputDevice$_6 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_6 === void 0 ? void 0 : _GamepadInputDevice$_6.get(XRRightHandedness);
              if (webxrGamepad && webxrGamepad.buttons.length > XR_BUTTON_1) {
                return webxrGamepad.buttons[XR_BUTTON_1].value;
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_SOUTH].value;
            }
            return 0;
          };
          this._buttonL1 = new InputSourceButton();
          this._buttonL1.getValue = () => {
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_L1].value;
            }
            return 0;
          };
          this._buttonL2 = new InputSourceButton();
          this._buttonL2.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_7;
              const webxrGamepad = (_GamepadInputDevice$_7 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_7 === void 0 ? void 0 : _GamepadInputDevice$_7.get(XRLeftHandedness);
              if (webxrGamepad && webxrGamepad.buttons.length > XR_TRIGGER) {
                return webxrGamepad.buttons[XR_TRIGGER].value;
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_L2].value;
            }
            return 0;
          };
          this._buttonL3 = new InputSourceButton();
          this._buttonL3.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_8;
              const webxrGamepad = (_GamepadInputDevice$_8 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_8 === void 0 ? void 0 : _GamepadInputDevice$_8.get(XRLeftHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.buttons.length > XR_STICK && webxrGamepad.buttons[XR_STICK].value !== 0) {
                  return webxrGamepad.buttons[XR_STICK].value;
                } else if (webxrGamepad.buttons.length > XR_TOUCHPAD && webxrGamepad.buttons[XR_TOUCHPAD].value !== 0) {
                  return webxrGamepad.buttons[XR_TOUCHPAD].value;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_L3].value;
            }
            return 0;
          };
          this._buttonR1 = new InputSourceButton();
          this._buttonR1.getValue = () => {
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_R1].value;
            }
            return 0;
          };
          this._buttonR2 = new InputSourceButton();
          this._buttonR2.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_9;
              const webxrGamepad = (_GamepadInputDevice$_9 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_9 === void 0 ? void 0 : _GamepadInputDevice$_9.get(XRRightHandedness);
              if (webxrGamepad && webxrGamepad.buttons.length > XR_TRIGGER) {
                return webxrGamepad.buttons[XR_TRIGGER].value;
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_R2].value;
            }
            return 0;
          };
          this._buttonR3 = new InputSourceButton();
          this._buttonR3.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_10;
              const webxrGamepad = (_GamepadInputDevice$_10 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_10 === void 0 ? void 0 : _GamepadInputDevice$_10.get(XRRightHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.buttons.length > XR_STICK && webxrGamepad.buttons[XR_STICK].value !== 0) {
                  return webxrGamepad.buttons[XR_STICK].value;
                } else if (webxrGamepad.buttons.length > XR_TOUCHPAD && webxrGamepad.buttons[XR_TOUCHPAD].value !== 0) {
                  return webxrGamepad.buttons[XR_TOUCHPAD].value;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_R3].value;
            }
            return 0;
          };

          // this._buttonTouchPad = new InputSourceButton();
          // this._buttonTouchPad.getValue = () => {
          //     const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
          //     if (webGamepad) { return webGamepad.buttons[BUTTON_TOUCH_PAD].value; }
          //     return 0;
          // };
          // this._buttonHome = new InputSourceButton();
          // this._buttonHome.getValue = () => {
          //     const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
          //     if (webGamepad) { return webGamepad.buttons[BUTTON_HOME].value; }
          //     return 0;
          // };
          this._buttonShare = new InputSourceButton();
          this._buttonShare.getValue = () => {
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_SHARE].value;
            }
            return 0;
          };
          this._buttonOptions = new InputSourceButton();
          this._buttonOptions.getValue = () => {
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_OPTIONS].value;
            }
            return 0;
          };
          const dpadUp = new InputSourceButton();
          dpadUp.getValue = () => {
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_DPAD_UP].value;
            }
            return 0;
          };
          const dpadDown = new InputSourceButton();
          dpadDown.getValue = () => {
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_DPAD_DOWN].value;
            }
            return 0;
          };
          const dpadLeft = new InputSourceButton();
          dpadLeft.getValue = () => {
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_DPAD_LEFT].value;
            }
            return 0;
          };
          const dpadRight = new InputSourceButton();
          dpadRight.getValue = () => {
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return webGamepad.buttons[BUTTON_DPAD_RIGHT].value;
            }
            return 0;
          };
          this._dpad = new InputSourceDpad({
            up: dpadUp,
            down: dpadDown,
            left: dpadLeft,
            right: dpadRight
          });
          const leftStickUp = new InputSourceButton();
          leftStickUp.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_11;
              const webxrGamepad = (_GamepadInputDevice$_11 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_11 === void 0 ? void 0 : _GamepadInputDevice$_11.get(XRLeftHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.axes.length > XR_AXIS_STICK_Y && webxrGamepad.axes[XR_AXIS_STICK_Y] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_STICK_Y]).negative;
                } else if (webxrGamepad.axes.length > XR_AXIS_TOUCHPAD_Y && webxrGamepad.axes[XR_AXIS_TOUCHPAD_Y] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_TOUCHPAD_Y]).negative;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return this._axisToButtons(webGamepad.axes[AXIS_LEFT_STICK_Y]).negative;
            }
            return 0;
          };
          const leftStickDown = new InputSourceButton();
          leftStickDown.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_12;
              const webxrGamepad = (_GamepadInputDevice$_12 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_12 === void 0 ? void 0 : _GamepadInputDevice$_12.get(XRLeftHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.axes.length > XR_AXIS_STICK_Y && webxrGamepad.axes[XR_AXIS_STICK_Y] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_STICK_Y]).positive;
                } else if (webxrGamepad.axes.length > XR_AXIS_TOUCHPAD_Y && webxrGamepad.axes[XR_AXIS_TOUCHPAD_Y] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_TOUCHPAD_Y]).positive;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return this._axisToButtons(webGamepad.axes[AXIS_LEFT_STICK_Y]).positive;
            }
            return 0;
          };
          const leftStickLeft = new InputSourceButton();
          leftStickLeft.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_13;
              const webxrGamepad = (_GamepadInputDevice$_13 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_13 === void 0 ? void 0 : _GamepadInputDevice$_13.get(XRLeftHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.axes.length > XR_AXIS_STICK_X && webxrGamepad.axes[XR_AXIS_STICK_X] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_STICK_X]).negative;
                } else if (webxrGamepad.axes.length > XR_AXIS_TOUCHPAD_X && webxrGamepad.axes[XR_AXIS_TOUCHPAD_X] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_TOUCHPAD_X]).negative;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return this._axisToButtons(webGamepad.axes[AXIS_LEFT_STICK_X]).negative;
            }
            return 0;
          };
          const leftStickRight = new InputSourceButton();
          leftStickRight.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_14;
              const webxrGamepad = (_GamepadInputDevice$_14 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_14 === void 0 ? void 0 : _GamepadInputDevice$_14.get(XRLeftHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.axes.length > XR_AXIS_STICK_X && webxrGamepad.axes[XR_AXIS_STICK_X] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_STICK_X]).positive;
                } else if (webxrGamepad.axes.length > XR_AXIS_TOUCHPAD_X && webxrGamepad.axes[XR_AXIS_TOUCHPAD_X] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_TOUCHPAD_X]).positive;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return this._axisToButtons(webGamepad.axes[AXIS_LEFT_STICK_X]).positive;
            }
            return 0;
          };
          this._leftStick = new InputSourceStick({
            up: leftStickUp,
            down: leftStickDown,
            left: leftStickLeft,
            right: leftStickRight
          });
          const rightStickUp = new InputSourceButton();
          rightStickUp.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_15;
              const webxrGamepad = (_GamepadInputDevice$_15 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_15 === void 0 ? void 0 : _GamepadInputDevice$_15.get(XRRightHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.axes.length > XR_AXIS_STICK_Y && webxrGamepad.axes[XR_AXIS_STICK_Y] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_STICK_Y]).negative;
                } else if (webxrGamepad.axes.length > XR_AXIS_TOUCHPAD_Y && webxrGamepad.axes[XR_AXIS_TOUCHPAD_Y] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_TOUCHPAD_Y]).negative;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return this._axisToButtons(webGamepad.axes[AXIS_RIGHT_STICK_Y]).negative;
            }
            return 0;
          };
          const rightStickDown = new InputSourceButton();
          rightStickDown.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_16;
              const webxrGamepad = (_GamepadInputDevice$_16 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_16 === void 0 ? void 0 : _GamepadInputDevice$_16.get(XRRightHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.axes.length > XR_AXIS_STICK_Y && webxrGamepad.axes[XR_AXIS_STICK_Y] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_STICK_Y]).positive;
                } else if (webxrGamepad.axes.length > XR_AXIS_TOUCHPAD_Y && webxrGamepad.axes[XR_AXIS_TOUCHPAD_Y] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_TOUCHPAD_Y]).positive;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return this._axisToButtons(webGamepad.axes[AXIS_RIGHT_STICK_Y]).positive;
            }
            return 0;
          };
          const rightStickLeft = new InputSourceButton();
          rightStickLeft.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_17;
              const webxrGamepad = (_GamepadInputDevice$_17 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_17 === void 0 ? void 0 : _GamepadInputDevice$_17.get(XRRightHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.axes.length > XR_AXIS_STICK_X && webxrGamepad.axes[XR_AXIS_STICK_X] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_STICK_X]).negative;
                } else if (webxrGamepad.axes.length > XR_AXIS_TOUCHPAD_X && webxrGamepad.axes[XR_AXIS_TOUCHPAD_X] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_TOUCHPAD_X]).negative;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return this._axisToButtons(webGamepad.axes[AXIS_RIGHT_STICK_X]).negative;
            }
            return 0;
          };
          const rightStickRight = new InputSourceButton();
          rightStickRight.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_18;
              const webxrGamepad = (_GamepadInputDevice$_18 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_18 === void 0 ? void 0 : _GamepadInputDevice$_18.get(XRRightHandedness);
              if (webxrGamepad) {
                if (webxrGamepad.axes.length > XR_AXIS_STICK_X && webxrGamepad.axes[XR_AXIS_STICK_X] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_STICK_X]).positive;
                } else if (webxrGamepad.axes.length > XR_AXIS_TOUCHPAD_X && webxrGamepad.axes[XR_AXIS_TOUCHPAD_X] !== 0) {
                  return this._axisToButtons(webxrGamepad.axes[XR_AXIS_TOUCHPAD_X]).positive;
                }
              }
              return 0;
            }
            const webGamepad = GamepadInputDevice._getWebGamepad(this.deviceId);
            if (webGamepad) {
              return this._axisToButtons(webGamepad.axes[AXIS_RIGHT_STICK_X]).positive;
            }
            return 0;
          };
          this._rightStick = new InputSourceStick({
            up: rightStickUp,
            down: rightStickDown,
            left: rightStickLeft,
            right: rightStickRight
          });
          this._buttonStart = new InputSourceButton();
          this._buttonStart.getValue = () => 0;
          this._gripLeft = new InputSourceButton();
          this._gripLeft.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_19;
              const webxrGamepad = (_GamepadInputDevice$_19 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_19 === void 0 ? void 0 : _GamepadInputDevice$_19.get(XRLeftHandedness);
              if (webxrGamepad && webxrGamepad.buttons.length > XR_GRIP) {
                return webxrGamepad.buttons[XR_GRIP].value;
              }
            }
            return 0;
          };
          this._gripRight = new InputSourceButton();
          this._gripRight.getValue = () => {
            if (this.deviceId === -1) {
              var _GamepadInputDevice$_20;
              const webxrGamepad = (_GamepadInputDevice$_20 = GamepadInputDevice._getWebXRGamepadMap()) === null || _GamepadInputDevice$_20 === void 0 ? void 0 : _GamepadInputDevice$_20.get(XRRightHandedness);
              if (webxrGamepad && webxrGamepad.buttons.length > XR_GRIP) {
                return webxrGamepad.buttons[XR_GRIP].value;
              }
            }
            return 0;
          };
          this._handLeftPosition = new InputSourcePosition();
          this._handLeftPosition.getValue = () => this._webPoseState[Pose.HAND_LEFT].position;
          this._handLeftOrientation = new InputSourceOrientation();
          this._handLeftOrientation.getValue = () => this._webPoseState[Pose.HAND_LEFT].orientation;
          this._handRightPosition = new InputSourcePosition();
          this._handRightPosition.getValue = () => this._webPoseState[Pose.HAND_RIGHT].position;
          this._handRightOrientation = new InputSourceOrientation();
          this._handRightOrientation.getValue = () => this._webPoseState[Pose.HAND_RIGHT].orientation;
          this._aimLeftPosition = new InputSourcePosition();
          this._aimLeftPosition.getValue = () => this._webPoseState[Pose.AIM_LEFT].position;
          this._aimLeftOrientation = new InputSourceOrientation();
          this._aimLeftOrientation.getValue = () => this._webPoseState[Pose.AIM_LEFT].orientation;
          this._aimRightPosition = new InputSourcePosition();
          this._aimRightPosition.getValue = () => this._webPoseState[Pose.AIM_RIGHT].position;
          this._aimRightOrientation = new InputSourceOrientation();
          this._aimRightOrientation.getValue = () => this._webPoseState[Pose.AIM_RIGHT].orientation;
        }
      });
      GamepadInputDevice.all = [];
      GamepadInputDevice.xr = null;
      GamepadInputDevice._eventTarget = new EventTarget();
      GamepadInputDevice._cachedWebGamepads = [];
      GamepadInputDevice._cachedWebXRGamepadMap = null;
      GamepadInputDevice._intervalId = -1;
      GamepadInputDevice._totalGamepadCnt = 0;
    }
  };
});