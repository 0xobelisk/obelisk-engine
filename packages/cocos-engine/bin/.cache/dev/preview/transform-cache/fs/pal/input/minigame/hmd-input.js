System.register("q-bundled:///fs/pal/input/minigame/hmd-input.js", ["../../../cocos/core/event/event-target.js", "../input-source.js", "../../../cocos/core/math/index.js"], function (_export, _context) {
  "use strict";

  var EventTarget, InputSourcePosition, InputSourceOrientation, Vec3, Quat, HMDInputDevice;
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
      InputSourcePosition = _inputSourceJs.InputSourcePosition;
      InputSourceOrientation = _inputSourceJs.InputSourceOrientation;
    }, function (_cocosCoreMathIndexJs) {
      Vec3 = _cocosCoreMathIndexJs.Vec3;
      Quat = _cocosCoreMathIndexJs.Quat;
    }],
    execute: function () {
      _export("HMDInputDevice", HMDInputDevice = /*#__PURE__*/function () {
        function HMDInputDevice() {
          this._eventTarget = new EventTarget();
          this._viewLeftPosition = void 0;
          this._viewLeftOrientation = void 0;
          this._viewRightPosition = void 0;
          this._viewRightOrientation = void 0;
          this._headMiddlePosition = void 0;
          this._headMiddleOrientation = void 0;
          this._initInputSource();
        }

        /**
         * @engineInternal
         */
        var _proto = HMDInputDevice.prototype;
        _proto._on = function _on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        };
        _proto._initInputSource = function _initInputSource() {
          this._viewLeftPosition = new InputSourcePosition();
          this._viewLeftPosition.getValue = function () {
            return Vec3.ZERO;
          };
          this._viewLeftOrientation = new InputSourceOrientation();
          this._viewLeftOrientation.getValue = function () {
            return Quat.IDENTITY;
          };
          this._viewRightPosition = new InputSourcePosition();
          this._viewRightPosition.getValue = function () {
            return Vec3.ZERO;
          };
          this._viewRightOrientation = new InputSourceOrientation();
          this._viewRightOrientation.getValue = function () {
            return Quat.IDENTITY;
          };
          this._headMiddlePosition = new InputSourcePosition();
          this._headMiddlePosition.getValue = function () {
            return Vec3.ZERO;
          };
          this._headMiddleOrientation = new InputSourceOrientation();
          this._headMiddleOrientation.getValue = function () {
            return Quat.IDENTITY;
          };
        };
        _createClass(HMDInputDevice, [{
          key: "viewLeftPosition",
          get: function get() {
            return this._viewLeftPosition;
          }
        }, {
          key: "viewLeftOrientation",
          get: function get() {
            return this._viewLeftOrientation;
          }
        }, {
          key: "viewRightPosition",
          get: function get() {
            return this._viewRightPosition;
          }
        }, {
          key: "viewRightOrientation",
          get: function get() {
            return this._viewRightOrientation;
          }
        }, {
          key: "headMiddlePosition",
          get: function get() {
            return this._headMiddlePosition;
          }
        }, {
          key: "headMiddleOrientation",
          get: function get() {
            return this._headMiddleOrientation;
          }
        }]);
        return HMDInputDevice;
      }());
    }
  };
});