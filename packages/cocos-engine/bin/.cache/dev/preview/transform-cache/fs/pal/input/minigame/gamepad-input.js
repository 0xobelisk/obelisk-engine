System.register("q-bundled:///fs/pal/input/minigame/gamepad-input.js", ["../../../cocos/core/event/event-target.js", "../input-source.js", "../../../cocos/core/index.js"], function (_export, _context) {
  "use strict";

  var EventTarget, InputSourceButton, InputSourceDpad, InputSourceOrientation, InputSourcePosition, InputSourceStick, Quat, Vec3, GamepadInputDevice;
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
    setters: [function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_inputSourceJs) {
      InputSourceButton = _inputSourceJs.InputSourceButton;
      InputSourceDpad = _inputSourceJs.InputSourceDpad;
      InputSourceOrientation = _inputSourceJs.InputSourceOrientation;
      InputSourcePosition = _inputSourceJs.InputSourcePosition;
      InputSourceStick = _inputSourceJs.InputSourceStick;
    }, function (_cocosCoreIndexJs) {
      Quat = _cocosCoreIndexJs.Quat;
      Vec3 = _cocosCoreIndexJs.Vec3;
    }],
    execute: function () {
      _export("GamepadInputDevice", GamepadInputDevice = /*#__PURE__*/function () {
        function GamepadInputDevice(deviceId) {
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
          this._deviceId = deviceId;
          this._initInputSource();
        }

        /**
         * @engineInternal
         */
        GamepadInputDevice._init = function _init() {
          // not supported
        }

        /**
         * @engineInternal
         */;
        GamepadInputDevice._on = function _on(eventType, cb, target) {
          GamepadInputDevice._eventTarget.on(eventType, cb, target);
        };
        var _proto = GamepadInputDevice.prototype;
        _proto._initInputSource = function _initInputSource() {
          this._buttonNorth = new InputSourceButton();
          this._buttonNorth.getValue = function () {
            return 0;
          };
          this._buttonEast = new InputSourceButton();
          this._buttonEast.getValue = function () {
            return 0;
          };
          this._buttonWest = new InputSourceButton();
          this._buttonWest.getValue = function () {
            return 0;
          };
          this._buttonSouth = new InputSourceButton();
          this._buttonSouth.getValue = function () {
            return 0;
          };
          this._buttonL1 = new InputSourceButton();
          this._buttonL1.getValue = function () {
            return 0;
          };
          this._buttonL2 = new InputSourceButton();
          this._buttonL2.getValue = function () {
            return 0;
          };
          this._buttonL3 = new InputSourceButton();
          this._buttonL3.getValue = function () {
            return 0;
          };
          this._buttonR1 = new InputSourceButton();
          this._buttonR1.getValue = function () {
            return 0;
          };
          this._buttonR2 = new InputSourceButton();
          this._buttonR2.getValue = function () {
            return 0;
          };
          this._buttonR3 = new InputSourceButton();
          this._buttonR3.getValue = function () {
            return 0;
          };

          // this._buttonTouchPad = new InputSourceButton();
          // this._buttonTouchPad.getValue = () => 0;
          // this._buttonHome = new InputSourceButton();
          // this._buttonHome.getValue = () => 0;

          this._buttonShare = new InputSourceButton();
          this._buttonShare.getValue = function () {
            return 0;
          };
          this._buttonOptions = new InputSourceButton();
          this._buttonOptions.getValue = function () {
            return 0;
          };
          var dpadUp = new InputSourceButton();
          dpadUp.getValue = function () {
            return 0;
          };
          var dpadDown = new InputSourceButton();
          dpadDown.getValue = function () {
            return 0;
          };
          var dpadLeft = new InputSourceButton();
          dpadLeft.getValue = function () {
            return 0;
          };
          var dpadRight = new InputSourceButton();
          dpadRight.getValue = function () {
            return 0;
          };
          this._dpad = new InputSourceDpad({
            up: dpadUp,
            down: dpadDown,
            left: dpadLeft,
            right: dpadRight
          });
          var leftStickUp = new InputSourceButton();
          leftStickUp.getValue = function () {
            return 0;
          };
          var leftStickDown = new InputSourceButton();
          leftStickDown.getValue = function () {
            return 0;
          };
          var leftStickLeft = new InputSourceButton();
          leftStickLeft.getValue = function () {
            return 0;
          };
          var leftStickRight = new InputSourceButton();
          leftStickRight.getValue = function () {
            return 0;
          };
          this._leftStick = new InputSourceStick({
            up: leftStickUp,
            down: leftStickDown,
            left: leftStickLeft,
            right: leftStickRight
          });
          var rightStickUp = new InputSourceButton();
          rightStickUp.getValue = function () {
            return 0;
          };
          var rightStickDown = new InputSourceButton();
          rightStickDown.getValue = function () {
            return 0;
          };
          var rightStickLeft = new InputSourceButton();
          rightStickLeft.getValue = function () {
            return 0;
          };
          var rightStickRight = new InputSourceButton();
          rightStickRight.getValue = function () {
            return 0;
          };
          this._rightStick = new InputSourceStick({
            up: rightStickUp,
            down: rightStickDown,
            left: rightStickLeft,
            right: rightStickRight
          });
          this._buttonStart = new InputSourceButton();
          this._buttonStart.getValue = function () {
            return 0;
          };
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