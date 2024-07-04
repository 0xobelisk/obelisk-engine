System.register("q-bundled:///fs/pal/minigame/baidu.js", ["../integrity-check.js", "../screen-adapter/enum-type/index.js", "../utils.js"], function (_export, _context) {
  "use strict";

  var checkPalIntegrity, withImpl, Orientation, cloneObject, createInnerAudioContextPolyfill, minigame, systemInfo, landscapeOrientation, _customAccelerometerCb, _innerAccelerometerCb;
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
      cloneObject(minigame, swan);

      // #region SystemInfo
      systemInfo = minigame.getSystemInfoSync();
      minigame.isDevTool = systemInfo.platform === 'devtools';
      minigame.isLandscape = systemInfo.screenWidth > systemInfo.screenHeight;
      // init landscapeOrientation as LANDSCAPE_RIGHT
      landscapeOrientation = Orientation.LANDSCAPE_RIGHT;
      swan.onDeviceOrientationChange(function (res) {
        if (res.value === 'landscape') {
          landscapeOrientation = Orientation.LANDSCAPE_RIGHT;
        } else if (res.value === 'landscapeReverse') {
          landscapeOrientation = Orientation.LANDSCAPE_LEFT;
        }
      });
      Object.defineProperty(minigame, 'orientation', {
        get: function get() {
          return minigame.isLandscape ? landscapeOrientation : Orientation.PORTRAIT;
        }
      });
      // #endregion SystemInfo

      // #region Accelerometer

      minigame.onAccelerometerChange = function (cb) {
        // swan.offAccelerometerChange() is not supported.
        // so we can only register AccelerometerChange callback, but can't unregister.
        if (!_innerAccelerometerCb) {
          _innerAccelerometerCb = function _innerAccelerometerCb(res) {
            var _customAccelerometerC;
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
            (_customAccelerometerC = _customAccelerometerCb) === null || _customAccelerometerC === void 0 ? void 0 : _customAccelerometerC(resClone);
          };
          swan.onAccelerometerChange(_innerAccelerometerCb);
          // onAccelerometerChange would start accelerometer, need to stop it mannually
          swan.stopAccelerometer({});
        }
        _customAccelerometerCb = cb;
      };
      minigame.offAccelerometerChange = function (cb) {
        // swan.offAccelerometerChange() is not supported.
        _customAccelerometerCb = undefined;
      };
      // #endregion Accelerometer

      minigame.createInnerAudioContext = createInnerAudioContextPolyfill(swan, {
        onPlay: true,
        onPause: true,
        onStop: true,
        onSeek: false
      });

      // #region SafeArea
      minigame.getSafeArea = function () {
        console.warn('getSafeArea is not supported on this platform');
        var systemInfo = minigame.getSystemInfoSync();
        return {
          top: 0,
          left: 0,
          bottom: systemInfo.screenHeight,
          right: systemInfo.screenWidth,
          width: systemInfo.screenWidth,
          height: systemInfo.screenHeight
        };
      };
      // #endregion SafeArea

      checkPalIntegrity(withImpl());
    }
  };
});