System.register("q-bundled:///fs/pal/input/minigame/accelerometer-input.js", ["pal/minigame", "../../../cocos/input/types/index.js", "../../../cocos/core/event/index.js", "../../../cocos/input/types/event-enum.js"], function (_export, _context) {
  "use strict";

  var minigame, Acceleration, EventAcceleration, EventTarget, InputEventType, AccelerometerInputSource;
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
    setters: [function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_cocosInputTypesIndexJs) {
      Acceleration = _cocosInputTypesIndexJs.Acceleration;
      EventAcceleration = _cocosInputTypesIndexJs.EventAcceleration;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }],
    execute: function () {
      _export("AccelerometerInputSource", AccelerometerInputSource = /*#__PURE__*/function () {
        function AccelerometerInputSource() {
          this._isStarted = false;
          this._accelMode = 'normal';
          this._eventTarget = new EventTarget();
          this._didAccelerateFunc = void 0;
          this._didAccelerateFunc = this._didAccelerate.bind(this);
        }
        var _proto = AccelerometerInputSource.prototype;
        _proto._registerEvent = function _registerEvent() {
          minigame.onAccelerometerChange(this._didAccelerateFunc);
        };
        _proto._unregisterEvent = function _unregisterEvent() {
          minigame.offAccelerometerChange(this._didAccelerateFunc);
        };
        _proto._didAccelerate = function _didAccelerate(event) {
          var timestamp = performance.now();
          var acceleration = new Acceleration(event.x, event.y, event.z, timestamp);
          var eventAcceleration = new EventAcceleration(acceleration);
          this._eventTarget.emit(InputEventType.DEVICEMOTION, eventAcceleration);
        };
        _proto.start = function start() {
          var _this = this;
          this._registerEvent();
          minigame.startAccelerometer({
            interval: this._accelMode,
            success: function success() {
              _this._isStarted = true;
            }
          });
        };
        _proto.stop = function stop() {
          var _this2 = this;
          minigame.stopAccelerometer({
            success: function success() {
              _this2._isStarted = false;
            },
            fail: function fail() {
              console.error('failed to stop accelerometer');
            }
          });
          this._unregisterEvent();
        };
        _proto.setInterval = function setInterval(intervalInMileseconds) {
          // reference: https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.startAccelerometer.html
          if (intervalInMileseconds >= 200) {
            this._accelMode = 'normal';
          } else if (intervalInMileseconds >= 60) {
            this._accelMode = 'ui';
          } else {
            this._accelMode = 'game';
          }
          if (this._isStarted) {
            // restart accelerometer
            this.stop();
            this.start();
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