System.register("q-bundled:///fs/pal/input/minigame/handle-input.js", ["../../../cocos/core/event/index.js", "../input-source.js", "../../../cocos/core/math/index.js"], function (_export, _context) {
  "use strict";

  var EventTarget, InputSourceButton, InputSourceStick, InputSourcePosition, InputSourceOrientation, InputSourceTouch, Vec3, Quat, HandleInputDevice;
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
    setters: [function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
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
      _export("HandleInputDevice", HandleInputDevice = /*#__PURE__*/function () {
        function HandleInputDevice() {
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
          this._initInputSource();
        }

        /**
         * @engineInternal
         */
        var _proto = HandleInputDevice.prototype;
        _proto._on = function _on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        };
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
          this._buttonTriggerLeft = new InputSourceButton();
          this._buttonTriggerLeft.getValue = function () {
            return 0;
          };
          this._buttonTriggerRight = new InputSourceButton();
          this._buttonTriggerRight.getValue = function () {
            return 0;
          };
          this._triggerLeft = new InputSourceButton();
          this._triggerLeft.getValue = function () {
            return 0;
          };
          this._triggerRight = new InputSourceButton();
          this._triggerRight.getValue = function () {
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
          this._buttonLeftStick = new InputSourceButton();
          this._buttonLeftStick.getValue = function () {
            return 0;
          };
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
          this._buttonRightStick = new InputSourceButton();
          this._buttonRightStick.getValue = function () {
            return 0;
          };
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
          this._buttonOptions = new InputSourceButton();
          this._buttonOptions.getValue = function () {
            return 0;
          };
          this._buttonStart = new InputSourceButton();
          this._buttonStart.getValue = function () {
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
          this._touchButtonA = new InputSourceTouch();
          this._touchButtonA.getValue = function () {
            return 0;
          };
          this._touchButtonB = new InputSourceTouch();
          this._touchButtonB.getValue = function () {
            return 0;
          };
          this._touchButtonX = new InputSourceTouch();
          this._touchButtonX.getValue = function () {
            return 0;
          };
          this._touchButtonY = new InputSourceTouch();
          this._touchButtonY.getValue = function () {
            return 0;
          };
          this._touchButtonTriggerLeft = new InputSourceTouch();
          this._touchButtonTriggerLeft.getValue = function () {
            return 0;
          };
          this._touchButtonTriggerRight = new InputSourceTouch();
          this._touchButtonTriggerRight.getValue = function () {
            return 0;
          };
          this._touchButtonThumbStickLeft = new InputSourceTouch();
          this._touchButtonThumbStickLeft.getValue = function () {
            return 0;
          };
          this._touchButtonThumbStickRight = new InputSourceTouch();
          this._touchButtonThumbStickRight.getValue = function () {
            return 0;
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