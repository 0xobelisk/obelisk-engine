System.register("q-bundled:///fs/pal/minigame/runtime.js", ["../../../virtual/internal%253Aconstants.js", "../integrity-check.js", "../screen-adapter/enum-type/index.js", "../utils.js"], function (_export, _context) {
  "use strict";

  var COCOSPLAY, LINKSURE, VIVO, checkPalIntegrity, withImpl, Orientation, cloneObject, createInnerAudioContextPolyfill, minigame, systemInfo, landscapeOrientation, _minigame$onWindowRes, cachedSystemInfo, _customAccelerometerCb, _innerAccelerometerCb, _needHandleAccelerometerCb;
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
    setters: [function (_virtualInternal253AconstantsJs) {
      COCOSPLAY = _virtualInternal253AconstantsJs.COCOSPLAY;
      LINKSURE = _virtualInternal253AconstantsJs.LINKSURE;
      VIVO = _virtualInternal253AconstantsJs.VIVO;
    }, function (_integrityCheckJs) {
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
      cloneObject(minigame, ral);
      minigame.ral = ral;

      // #region SystemInfo
      systemInfo = minigame.getSystemInfoSync();
      minigame.isDevTool = systemInfo.platform === 'devtools';

      // NOTE: size and orientation info is wrong at the init phase, need to define as a getter
      Object.defineProperty(minigame, 'isLandscape', {
        get() {
          if (VIVO) {
            return systemInfo.screenWidth > systemInfo.screenHeight;
          } else {
            const locSysInfo = minigame.getSystemInfoSync();
            return locSysInfo.screenWidth > locSysInfo.screenHeight;
          }
        }
      });
      // init landscapeOrientation as LANDSCAPE_RIGHT
      landscapeOrientation = Orientation.LANDSCAPE_RIGHT; // NOTE: onDeviceOrientationChange is not supported on this platform
      // ral.onDeviceOrientationChange((res) => {
      //     if (res.value === 'landscape') {
      //         landscapeOrientation = Orientation.LANDSCAPE_RIGHT;
      //     } else if (res.value === 'landscapeReverse') {
      //         landscapeOrientation = Orientation.LANDSCAPE_LEFT;
      //     }
      // });
      Object.defineProperty(minigame, 'orientation', {
        get() {
          return minigame.isLandscape ? landscapeOrientation : Orientation.PORTRAIT;
        }
      });
      if (LINKSURE || COCOSPLAY) {
        // TODO: update system info when view resized, currently the resize callback is not supported.
        cachedSystemInfo = ral.getSystemInfoSync();
        (_minigame$onWindowRes = minigame.onWindowResize) === null || _minigame$onWindowRes === void 0 ? void 0 : _minigame$onWindowRes.call(minigame, () => {
          // update cached system info
          cachedSystemInfo = ral.getSystemInfoSync();
        });
        minigame.getSystemInfoSync = function () {
          return cachedSystemInfo;
        };
      }
      // #endregion SystemInfo

      // #region Accelerometer
      _needHandleAccelerometerCb = false;
      minigame.onAccelerometerChange = function (cb) {
        if (!_innerAccelerometerCb) {
          _innerAccelerometerCb = res => {
            var _customAccelerometerC;
            if (!_needHandleAccelerometerCb) {
              return;
            }
            let x = res.x;
            let y = res.y;
            if (minigame.isLandscape) {
              const orientationFactor = landscapeOrientation === Orientation.LANDSCAPE_RIGHT ? 1 : -1;
              const tmp = x;
              x = -y * orientationFactor;
              y = tmp * orientationFactor;
            }
            const resClone = {
              x,
              y,
              z: res.z
            };
            (_customAccelerometerC = _customAccelerometerCb) === null || _customAccelerometerC === void 0 ? void 0 : _customAccelerometerC(resClone);
          };
          ral.onAccelerometerChange(_innerAccelerometerCb);
        }
        _needHandleAccelerometerCb = true;
        _customAccelerometerCb = cb;
      };
      minigame.offAccelerometerChange = function (cb) {
        _needHandleAccelerometerCb = false;
        _customAccelerometerCb = undefined;
      };
      // #endregion Accelerometer

      // NOTE: Audio playing crash on COCOSPLAY, need to play audio asynchronously.
      if (COCOSPLAY) {
        minigame.createInnerAudioContext = createInnerAudioContextPolyfill(ral, {
          onPlay: true,
          // polyfill for vivo
          onPause: true,
          onStop: true,
          onSeek: true
        }, true);
      } else {
        minigame.createInnerAudioContext = createInnerAudioContextPolyfill(ral, {
          onPlay: true,
          // polyfill for vivo
          onPause: true,
          onStop: true,
          onSeek: true
        });
      }

      // #region SafeArea
      minigame.getSafeArea = function () {
        const locSystemInfo = ral.getSystemInfoSync();
        if (locSystemInfo.safeArea) {
          return locSystemInfo.safeArea;
        } else {
          console.warn('getSafeArea is not supported on this platform');
          const systemInfo = minigame.getSystemInfoSync();
          return {
            top: 0,
            left: 0,
            bottom: systemInfo.screenHeight,
            right: systemInfo.screenWidth,
            width: systemInfo.screenWidth,
            height: systemInfo.screenHeight
          };
        }
      };
      // #endregion SafeArea

      checkPalIntegrity(withImpl());
    }
  };
});