System.register("q-bundled:///fs/pal/minigame/bytedance.js", ["../integrity-check.js", "../screen-adapter/enum-type/index.js", "../utils.js"], function (_export, _context) {
  "use strict";

  var checkPalIntegrity, withImpl, Orientation, cloneObject, createInnerAudioContextPolyfill, _tt$getAudioContext, _minigame$onWindowRes, minigame, systemInfo, landscapeOrientation, _accelerometerCb;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      cloneObject(minigame, tt);

      // #region platform related
      minigame.tt = {};
      minigame.tt.getAudioContext = (_tt$getAudioContext = tt.getAudioContext) === null || _tt$getAudioContext === void 0 ? void 0 : _tt$getAudioContext.bind(tt);
      // #endregion platform related

      // #region SystemInfo
      systemInfo = minigame.getSystemInfoSync();
      minigame.getSystemInfoSync = () => systemInfo;
      (_minigame$onWindowRes = minigame.onWindowResize) === null || _minigame$onWindowRes === void 0 ? void 0 : _minigame$onWindowRes.call(minigame, () => {
        systemInfo = minigame.getSystemInfoSync();
      });
      minigame.isDevTool = systemInfo.platform === 'devtools';
      minigame.isLandscape = systemInfo.screenWidth > systemInfo.screenHeight;
      // init landscapeOrientation as LANDSCAPE_RIGHT
      landscapeOrientation = Orientation.LANDSCAPE_RIGHT;
      tt.onDeviceOrientationChange(res => {
        if (res.value === 'landscape') {
          landscapeOrientation = Orientation.LANDSCAPE_RIGHT;
        } else if (res.value === 'landscapeReverse') {
          landscapeOrientation = Orientation.LANDSCAPE_LEFT;
        }
      });
      Object.defineProperty(minigame, 'orientation', {
        get() {
          return minigame.isLandscape ? landscapeOrientation : Orientation.PORTRAIT;
        }
      });
      // #endregion SystemInfo

      // #region Accelerometer

      minigame.onAccelerometerChange = function (cb) {
        minigame.offAccelerometerChange();
        // onAccelerometerChange would start accelerometer
        // so we won't call this method here
        _accelerometerCb = res => {
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
          cb(resClone);
        };
      };
      minigame.offAccelerometerChange = function (cb) {
        if (_accelerometerCb) {
          tt.offAccelerometerChange(_accelerometerCb);
          _accelerometerCb = undefined;
        }
      };
      minigame.startAccelerometer = function (res) {
        if (_accelerometerCb) {
          tt.onAccelerometerChange(_accelerometerCb);
        }
        tt.startAccelerometer(res);
      };
      // #endregion Accelerometer

      minigame.createInnerAudioContext = createInnerAudioContextPolyfill(tt, {
        onPlay: true,
        onPause: true,
        onStop: true,
        onSeek: true
      });

      // #region SafeArea
      // FIX_ME: wrong safe area when orientation is landscape left
      minigame.getSafeArea = function () {
        const locSystemInfo = tt.getSystemInfoSync();
        let {
          top,
          left,
          right
        } = locSystemInfo.safeArea;
        const {
          bottom,
          width,
          height
        } = locSystemInfo.safeArea;
        // HACK: on iOS device, the orientation should mannually rotate
        if (locSystemInfo.platform === 'ios' && !minigame.isDevTool && minigame.isLandscape) {
          const tmpTop = top;
          const tmpLeft = left;
          const tmpBottom = bottom;
          const tmpRight = right;
          const tmpWidth = width;
          const tmpHeight = height;
          top = tmpLeft;
          left = tmpTop;
          right = tmpRight - tmpTop;
        }
        return {
          top,
          left,
          bottom,
          right,
          width,
          height
        };
      };
      // #endregion SafeArea

      checkPalIntegrity(withImpl());
    }
  };
});