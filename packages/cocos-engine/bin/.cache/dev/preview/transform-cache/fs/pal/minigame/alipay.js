System.register("q-bundled:///fs/pal/minigame/alipay.js", ["../integrity-check.js", "../screen-adapter/enum-type/index.js", "../utils.js"], function (_export, _context) {
  "use strict";

  var checkPalIntegrity, withImpl, Orientation, cloneObject, createInnerAudioContextPolyfill, minigame, systemInfo, landscapeOrientation, polyfilledCreateInnerAudio, _accelerometerCb;
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
    setters: [function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }, function (_screenAdapterEnumTypeIndexJs) {
      Orientation = _screenAdapterEnumTypeIndexJs.Orientation;
    }, function (_utilsJs) {
      cloneObject = _utilsJs.cloneObject;
      createInnerAudioContextPolyfill = _utilsJs.createInnerAudioContextPolyfill;
    }],
    execute: function () {
      _export("minigame", minigame = {});
      cloneObject(minigame, my);

      // #region SystemInfo
      systemInfo = minigame.getSystemInfoSync();
      minigame.isDevTool = window.navigator && /AlipayIDE/.test(window.navigator.userAgent);
      minigame.isLandscape = systemInfo.screenWidth > systemInfo.screenHeight;
      // init landscapeOrientation as LANDSCAPE_RIGHT
      landscapeOrientation = Orientation.LANDSCAPE_RIGHT; // NOTE: onDeviceOrientationChange is not supported on this platform
      // my.onDeviceOrientationChange((res) => {
      //     if (res.value === 'landscape') {
      //         landscapeOrientation = Orientation.LANDSCAPE_RIGHT;
      //     } else if (res.value === 'landscapeReverse') {
      //         landscapeOrientation = Orientation.LANDSCAPE_LEFT;
      //     }
      // });
      Object.defineProperty(minigame, 'orientation', {
        get: function get() {
          return minigame.isLandscape ? landscapeOrientation : Orientation.PORTRAIT;
        }
      });
      // #endregion SystemInfo

      // #region TouchEvent
      // my.onTouchStart register touch event listner on body
      // need to register on canvas
      minigame.onTouchStart = function (cb) {
        window.canvas.addEventListener('touchstart', function (res) {
          cb && cb(res);
        });
      };
      minigame.onTouchMove = function (cb) {
        window.canvas.addEventListener('touchmove', function (res) {
          cb && cb(res);
        });
      };
      minigame.onTouchEnd = function (cb) {
        window.canvas.addEventListener('touchend', function (res) {
          cb && cb(res);
        });
      };
      minigame.onTouchCancel = function (cb) {
        window.canvas.addEventListener('touchcancel', function (res) {
          cb && cb(res);
        });
      };
      // #endregion TouchEvent

      // #region Audio
      polyfilledCreateInnerAudio = createInnerAudioContextPolyfill(my, {
        onPlay: true,
        // Fix: onPlay can not be executed at Alipay(Override onPlay method).
        onPause: true,
        // Fix: calling pause twice, onPause won't execute twice.(Override onPause method)
        onStop: false,
        onSeek: false
      }, true); // eslint-disable-next-line func-names
      minigame.createInnerAudioContext = function () {
        // NOTE: `onCanPlay` and `offCanPlay` is not standard minigame interface,
        // so here we mark audio as type of any
        var audio = polyfilledCreateInnerAudio();
        audio.onCanplay = audio.onCanPlay.bind(audio);
        audio.offCanplay = audio.offCanPlay.bind(audio);
        delete audio.onCanPlay;
        delete audio.offCanPlay;
        return audio;
      };

      // #region Accelerometer

      minigame.onAccelerometerChange = function (cb) {
        minigame.offAccelerometerChange();
        // onAccelerometerChange would start accelerometer
        // so we won't call this method here
        _accelerometerCb = function _accelerometerCb(res) {
          var x = res.x;
          var y = res.y;
          if (minigame.isLandscape) {
            var orientationFactor = landscapeOrientation === Orientation.LANDSCAPE_RIGHT ? 1 : -1;
            var tmp = x;
            x = -y * orientationFactor;
            y = tmp * orientationFactor;
          }
          var resClone = {
            x: x,
            y: y,
            z: res.z
          };
          cb(resClone);
        };
      };
      minigame.offAccelerometerChange = function (cb) {
        if (_accelerometerCb) {
          my.offAccelerometerChange(_accelerometerCb);
          _accelerometerCb = undefined;
        }
      };
      minigame.startAccelerometer = function (res) {
        if (_accelerometerCb) {
          my.onAccelerometerChange(_accelerometerCb);
        } else {
          // my.startAccelerometer() is not implemented.
          console.error('minigame.onAccelerometerChange() should be invoked before minigame.startAccelerometer() on alipay platform');
        }
      };
      minigame.stopAccelerometer = function (res) {
        // my.stopAccelerometer() is not implemented.
        minigame.offAccelerometerChange();
      };
      // #endregion Accelerometer

      // #region SafeArea
      minigame.getSafeArea = function () {
        console.warn('getSafeArea is not supported on this platform');
        var systemInfo = minigame.getSystemInfoSync();
        return {
          top: 0,
          left: 0,
          bottom: systemInfo.windowHeight,
          right: systemInfo.windowWidth,
          width: systemInfo.windowWidth,
          height: systemInfo.windowHeight
        };
      };
      // #endregion SafeArea

      checkPalIntegrity(withImpl());
    }
  };
});