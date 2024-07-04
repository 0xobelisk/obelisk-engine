System.register("q-bundled:///fs/pal/minigame/taobao.js", ["../screen-adapter/enum-type/index.js", "../utils.js", "../system-info/enum-type/index.js", "../integrity-check.js"], function (_export, _context) {
  "use strict";

  var Orientation, cloneObject, createInnerAudioContextPolyfill, versionCompare, Language, checkPalIntegrity, withImpl, languageMap, minigame, systemInfo, landscapeOrientation, polyfilledCreateInnerAudio, _accelerometerCb, locCanvas, originalGetContext, hasAdapter;
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
  // #endregion SystemInfo

  function detectLandscapeSupport() {
    var locSysInfo = minigame.getSystemInfoSync();
    if (typeof locSysInfo.deviceOrientation === 'string' && locSysInfo.deviceOrientation.startsWith('landscape')) {
      if (versionCompare(locSysInfo.version, '10.15.10') < 0) {
        console.warn('The current Taobao client version does not support Landscape, the minimum requirement is 10.15.10');
      }
    }
  }
  function adapterGL(gl) {
    if (hasAdapter) {
      return;
    }
    hasAdapter = true;
    if (!my.isIDE) {
      // TODO: Premultiplication is already used on Taobao, do not use premultiplication on the phone.
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);

      // TODO: adapter gl.getUniformLocation
      // Android return value: undefined.   iOS return value: {ID: -1}.
      if (my.getSystemInfoSync().platform.toLocaleLowerCase() === 'ios') {
        var originalGetUniformLocation = gl.getUniformLocation.bind(gl);
        gl.getUniformLocation = function (program, name) {
          var glLoc = originalGetUniformLocation(program, name);
          if (glLoc && glLoc.ID === -1) {
            return undefined;
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return originalGetUniformLocation(program, name);
        };
      }
    }
  }
  return {
    setters: [function (_screenAdapterEnumTypeIndexJs) {
      Orientation = _screenAdapterEnumTypeIndexJs.Orientation;
    }, function (_utilsJs) {
      cloneObject = _utilsJs.cloneObject;
      createInnerAudioContextPolyfill = _utilsJs.createInnerAudioContextPolyfill;
      versionCompare = _utilsJs.versionCompare;
    }, function (_systemInfoEnumTypeIndexJs) {
      Language = _systemInfoEnumTypeIndexJs.Language;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      //taobao IDE language   ("Chinese")
      //taobao phone language (Andrond: "cn", iPad: 'zh_CN')
      languageMap = {
        Chinese: Language.CHINESE,
        cn: Language.CHINESE,
        zh_CN: Language.CHINESE
      };
      _export("minigame", minigame = {});
      cloneObject(minigame, my);

      // #region SystemInfo
      systemInfo = minigame.getSystemInfoSync();
      systemInfo.language = languageMap[systemInfo.language] || systemInfo.language;
      minigame.getSystemInfoSync = function () {
        return systemInfo;
      };
      minigame.isDevTool = my.isIDE;
      Object.defineProperty(minigame, 'isLandscape', {
        get: function get() {
          var locSystemInfo = minigame.getSystemInfoSync();
          if (typeof locSystemInfo.deviceOrientation === 'string') {
            return locSystemInfo.deviceOrientation.startsWith('landscape');
          } else {
            return locSystemInfo.screenWidth > locSystemInfo.screenHeight;
          }
        }
      });
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
      detectLandscapeSupport();

      // #region Audio
      polyfilledCreateInnerAudio = createInnerAudioContextPolyfill(my, {
        onPlay: true,
        // Fix: onPlay won't execute.
        onPause: true,
        // NOTE: calling pause() twice onPause won't execute twice.
        onStop: false,
        onSeek: false
      }, true);
      minigame.createInnerAudioContext = function () {
        // NOTE: `onCanPlay` is not standard minigame interface,
        // so here we mark audio as type of any
        var audio = polyfilledCreateInnerAudio();
        audio.onCanplay = audio.onCanPlay.bind(audio);
        delete audio.onCanPlay;
        return audio;
      };
      // #region Audio

      // #region Font
      minigame.loadFont = function (url) {
        // my.loadFont crash when url is not in user data path
        return 'Arial';
      };
      // #endregion Font

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
            x = -res.y * orientationFactor;
            y = res.x * orientationFactor;
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
          console.error('minigame.onAccelerometerChange() should be invoked before minigame.startAccelerometer() on taobao platform');
        }
      };
      minigame.stopAccelerometer = function (res) {
        // my.stopAccelerometer() is not implemented.
        minigame.offAccelerometerChange();
      };
      // #endregion Accelerometer

      // #region SafeArea
      // It should be a value that is not multiplied by dpr
      minigame.getSafeArea = function () {
        var systemInfo = minigame.getSystemInfoSync();
        if (typeof systemInfo.safeArea !== 'undefined') {
          return systemInfo.safeArea;
        }
        console.warn('getSafeArea is not supported on this platform');
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

      // global variable on Taobao platform.
      // TODO: A filpY operation will be performed after ReadPixels on Taobao.
      if (!my.isIDE) {
        locCanvas = $global.screencanvas;
        if (locCanvas) {
          originalGetContext = locCanvas.getContext.bind(locCanvas);
          locCanvas.getContext = function (name, param) {
            if (typeof name === 'string' && typeof param === 'object' && name.startsWith('webgl')) {
              Object.assign(param, {
                enable_flip_y_after_read_pixels: false
              });
              var gl = originalGetContext(name, param);
              adapterGL(gl);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return gl;
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return originalGetContext(name, param);
          };
        }
      }
      hasAdapter = false;
      checkPalIntegrity(withImpl());
    }
  };
});