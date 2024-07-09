System.register("q-bundled:///fs/pal/input/native/accelerometer-input.js", ["pal/system-info", "pal/screen-adapter", "../../../cocos/core/event/index.js", "../../system-info/enum-type/index.js", "../../screen-adapter/enum-type/index.js", "../../../cocos/input/types/index.js", "../../../cocos/input/types/event-enum.js"], function (_export, _context) {
  "use strict";

  var systemInfo, screenAdapter, EventTarget, OS, Orientation, Acceleration, EventAcceleration, InputEventType, AccelerometerInputSource;
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
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_systemInfoEnumTypeIndexJs) {
      OS = _systemInfoEnumTypeIndexJs.OS;
    }, function (_screenAdapterEnumTypeIndexJs) {
      Orientation = _screenAdapterEnumTypeIndexJs.Orientation;
    }, function (_cocosInputTypesIndexJs) {
      Acceleration = _cocosInputTypesIndexJs.Acceleration;
      EventAcceleration = _cocosInputTypesIndexJs.EventAcceleration;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }],
    execute: function () {
      _export("AccelerometerInputSource", AccelerometerInputSource = /*#__PURE__*/function () {
        function AccelerometerInputSource() {
          this._intervalInSeconds = 0.2;
          this._intervalId = void 0;
          this._isEnabled = false;
          this._eventTarget = new EventTarget();
          this._didAccelerateFunc = void 0;
          this._didAccelerateFunc = this._didAccelerate.bind(this);
        }
        var _proto = AccelerometerInputSource.prototype;
        _proto._didAccelerate = function _didAccelerate() {
          var deviceMotionValue = jsb.device.getDeviceMotionValue();
          var x = deviceMotionValue[3] * 0.1;
          var y = deviceMotionValue[4] * 0.1;
          var z = deviceMotionValue[5] * 0.1;
          var orientation = screenAdapter.orientation;
          var tmpX = x;
          if (orientation === Orientation.LANDSCAPE_RIGHT) {
            x = -y;
            y = tmpX;
          } else if (orientation === Orientation.LANDSCAPE_LEFT) {
            x = y;
            y = -tmpX;
          } else if (orientation === Orientation.PORTRAIT_UPSIDE_DOWN) {
            x = -x;
            y = -y;
          }

          // fix android acc values are opposite
          if (systemInfo.os === OS.ANDROID || systemInfo.os === OS.OHOS || systemInfo.os === OS.OPENHARMONY) {
            x = -x;
            y = -y;
          }
          var timestamp = performance.now();
          var acceleration = new Acceleration(x, y, z, timestamp);
          var eventAcceleration = new EventAcceleration(acceleration);
          this._eventTarget.emit(InputEventType.DEVICEMOTION, eventAcceleration);
        };
        _proto.start = function start() {
          if (this._intervalId) {
            clearInterval(this._intervalId);
          }
          this._intervalId = setInterval(this._didAccelerateFunc, this._intervalInSeconds * 1000);
          jsb.device.setAccelerometerInterval(this._intervalInSeconds);
          jsb.device.setAccelerometerEnabled(true);
          this._isEnabled = true;
        };
        _proto.stop = function stop() {
          if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = undefined;
          }
          jsb.device.setAccelerometerEnabled(false);
          this._isEnabled = false;
        };
        _proto.setInterval = function setInterval(intervalInMileseconds) {
          this._intervalInSeconds = intervalInMileseconds / 1000;
          jsb.device.setAccelerometerInterval(this._intervalInSeconds);
          if (this._isEnabled) {
            // restart accelerometer
            jsb.device.setAccelerometerEnabled(false);
            jsb.device.setAccelerometerEnabled(true);
          }
        };
        _proto.on = function on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        };
        return AccelerometerInputSource;
      }());
    }
  };
});