System.register("q-bundled:///fs/pal/input/web/accelerometer-input.js", ["pal/system-info", "pal/screen-adapter", "../../../cocos/core/event/event-target.js", "../../system-info/enum-type/index.js", "../../../cocos/input/types/index.js", "../../../cocos/input/types/event-enum.js", "../../../cocos/core/platform/debug.js"], function (_export, _context) {
  "use strict";

  var systemInfo, screenAdapter, EventTarget, BrowserType, OS, EventAcceleration, Acceleration, InputEventType, warn, AccelerometerInputSource;
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
  _export("AccelerometerInputSource", void 0);
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_systemInfoEnumTypeIndexJs) {
      BrowserType = _systemInfoEnumTypeIndexJs.BrowserType;
      OS = _systemInfoEnumTypeIndexJs.OS;
    }, function (_cocosInputTypesIndexJs) {
      EventAcceleration = _cocosInputTypesIndexJs.EventAcceleration;
      Acceleration = _cocosInputTypesIndexJs.Acceleration;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_cocosCorePlatformDebugJs) {
      warn = _cocosCorePlatformDebugJs.warn;
    }],
    execute: function () {
      _export("AccelerometerInputSource", AccelerometerInputSource = class AccelerometerInputSource {
        constructor() {
          this._intervalInMileSeconds = 200;
          this._accelTimer = 0;
          this._eventTarget = new EventTarget();
          this._deviceEventName = void 0;
          this._globalEventClass = void 0;
          this._didAccelerateFunc = void 0;
          // init event name
          this._globalEventClass = window.DeviceMotionEvent || window.DeviceOrientationEvent;
          // TODO fix DeviceMotionEvent bug on QQ Browser version 4.1 and below.
          if (systemInfo.browserType === BrowserType.MOBILE_QQ) {
            this._globalEventClass = window.DeviceOrientationEvent;
          }
          this._deviceEventName = this._globalEventClass === window.DeviceMotionEvent ? 'devicemotion' : 'deviceorientation';
          this._didAccelerateFunc = this._didAccelerate.bind(this);
        }
        _registerEvent() {
          this._accelTimer = performance.now();
          window.addEventListener(this._deviceEventName, this._didAccelerateFunc, false);
        }
        _unregisterEvent() {
          this._accelTimer = 0;
          window.removeEventListener(this._deviceEventName, this._didAccelerateFunc, false);
        }
        _didAccelerate(event) {
          const now = performance.now();
          if (now - this._accelTimer < this._intervalInMileSeconds) {
            return;
          }
          this._accelTimer = now;
          let x = 0;
          let y = 0;
          let z = 0;
          if (this._globalEventClass === window.DeviceMotionEvent) {
            const deviceMotionEvent = event;
            const eventAcceleration = deviceMotionEvent.accelerationIncludingGravity;
            x = ((eventAcceleration === null || eventAcceleration === void 0 ? void 0 : eventAcceleration.x) || 0) * 0.1;
            y = ((eventAcceleration === null || eventAcceleration === void 0 ? void 0 : eventAcceleration.y) || 0) * 0.1;
            z = ((eventAcceleration === null || eventAcceleration === void 0 ? void 0 : eventAcceleration.z) || 0) * 0.1;
          } else {
            const deviceOrientationEvent = event;
            x = (deviceOrientationEvent.gamma || 0) / 90 * 0.981;
            y = -((deviceOrientationEvent.beta || 0) / 90) * 0.981;
            z = (deviceOrientationEvent.alpha || 0) / 90 * 0.981;
          }
          if (screenAdapter.isFrameRotated) {
            const tmp = x;
            x = -y;
            y = tmp;
          }

          // TODO: window.orientation is deprecated: https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation
          // try to use experimental screen.orientation: https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
          const PORTRAIT = 0;
          const LANDSCAPE_LEFT = -90;
          const PORTRAIT_UPSIDE_DOWN = 180;
          const LANDSCAPE_RIGHT = 90;
          const tmpX = x;
          if (window.orientation === LANDSCAPE_RIGHT) {
            x = -y;
            y = tmpX;
          } else if (window.orientation === LANDSCAPE_LEFT) {
            x = y;
            y = -tmpX;
          } else if (window.orientation === PORTRAIT_UPSIDE_DOWN) {
            x = -x;
            y = -y;
          }

          // fix android acc values are opposite
          if (systemInfo.os === OS.ANDROID && systemInfo.browserType !== BrowserType.MOBILE_QQ) {
            x = -x;
            y = -y;
          }
          const timestamp = performance.now();
          const acceleration = new Acceleration(x, y, z, timestamp);
          const eventAcceleration = new EventAcceleration(acceleration);
          this._eventTarget.emit(InputEventType.DEVICEMOTION, eventAcceleration);
        }
        start() {
          // for iOS 13+, safari
          // NOTE: since TS 4.4, `requestPermission` is not defined in class DeviceMotionEvent in `lib.dom.d.ts`, this should be a breaking change in TS.
          // Accessing the `requestPermission` would emit a type error, so we assert `DeviceMotionEvent` as any type to skip the TS type checking.
          if (window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission().then(response => {
              if (response === 'granted') {
                this._registerEvent();
              }
            }).catch(e => {
              warn(e);
            });
          } else {
            this._registerEvent();
          }
        }
        stop() {
          this._unregisterEvent();
        }
        setInterval(intervalInMileSeconds) {
          this._intervalInMileSeconds = intervalInMileSeconds;
        }
        on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        }
      });
    }
  };
});