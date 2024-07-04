System.register("q-bundled:///fs/pal/system-info/native/system-info.js", ["../../../../virtual/internal%253Aconstants.js", "../../../cocos/core/event/index.js", "../../integrity-check.js", "../enum-type/index.js"], function (_export, _context) {
  "use strict";

  var OPEN_HARMONY, EventTarget, checkPalIntegrity, withImpl, BrowserType, NetworkType, Platform, Language, Feature, SystemInfo, networkTypeMap, platformMap, systemInfo;
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
      OPEN_HARMONY = _virtualInternal253AconstantsJs.OPEN_HARMONY;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }, function (_enumTypeIndexJs) {
      BrowserType = _enumTypeIndexJs.BrowserType;
      NetworkType = _enumTypeIndexJs.NetworkType;
      Platform = _enumTypeIndexJs.Platform;
      Language = _enumTypeIndexJs.Language;
      Feature = _enumTypeIndexJs.Feature;
    }],
    execute: function () {
      // NOTE: these methods are implemented on native.
      networkTypeMap = {
        0: NetworkType.NONE,
        1: NetworkType.LAN,
        2: NetworkType.WWAN
      };
      platformMap = {
        0: Platform.WIN32,
        // 1 is Linux platform in native engine
        2: Platform.MACOS,
        3: Platform.ANDROID,
        // 4 is IPHONE
        4: Platform.IOS,
        // 5 is IPAD
        5: Platform.IOS,
        6: Platform.OHOS,
        7: Platform.OPENHARMONY
      };
      SystemInfo = class SystemInfo extends EventTarget {
        // TODO: need to wrap the function __isObjectValid()

        get networkType() {
          return networkTypeMap[jsb.device.getNetworkType()];
        }
        constructor() {
          super();
          this.isNative = void 0;
          this.isBrowser = void 0;
          this.isMobile = void 0;
          this.isLittleEndian = void 0;
          this.platform = void 0;
          this.language = void 0;
          this.nativeLanguage = void 0;
          this.os = void 0;
          this.osVersion = void 0;
          this.osMainVersion = void 0;
          this.browserType = void 0;
          this.browserVersion = void 0;
          this.isXR = void 0;
          this._featureMap = void 0;
          this._initPromise = void 0;
          this.isNative = true;
          this.isBrowser = false;
          this.platform = platformMap[__getPlatform()];
          // eslint-disable-next-line max-len
          this.isMobile = this.platform === Platform.ANDROID || this.platform === Platform.IOS || this.platform === Platform.OHOS || this.platform === Platform.OPENHARMONY;

          // init isLittleEndian
          this.isLittleEndian = (() => {
            const buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] === 256;
          })();

          // init languageCode and language
          const currLanguage = __getCurrentLanguageCode();
          this.nativeLanguage = currLanguage ? currLanguage.toLowerCase() : Language.UNKNOWN;
          this.language = __getCurrentLanguage();
          this.os = __getOS();
          this.osVersion = __getOSVersion();
          this.osMainVersion = parseInt(this.osVersion);

          // init browserType and browserVersion
          this.browserType = BrowserType.UNKNOWN;
          this.browserVersion = '';
          this.isXR = typeof xr !== 'undefined' && typeof xr.XrEntry !== 'undefined';
          const isHPE = typeof __supportHPE === 'function' ? __supportHPE() : false;
          this._featureMap = {
            [Feature.WEBP]: true,
            [Feature.IMAGE_BITMAP]: false,
            [Feature.WEB_VIEW]: this.isMobile,
            [Feature.VIDEO_PLAYER]: this.isMobile,
            [Feature.SAFE_AREA]: this.isMobile,
            [Feature.HPE]: isHPE,
            [Feature.INPUT_TOUCH]: this.isMobile,
            [Feature.EVENT_KEYBOARD]: true,
            [Feature.EVENT_MOUSE]: isHPE || !this.isMobile,
            [Feature.EVENT_TOUCH]: true,
            [Feature.EVENT_ACCELEROMETER]: this.isMobile,
            [Feature.EVENT_GAMEPAD]: true,
            [Feature.EVENT_HANDLE]: this.isXR,
            [Feature.EVENT_HMD]: this.isXR,
            [Feature.EVENT_HANDHELD]: typeof xr !== 'undefined' && typeof xr.ARModule !== 'undefined',
            [Feature.WASM]: !OPEN_HARMONY
          };
          this._initPromise = [];
          this._registerEvent();
        }
        _registerEvent() {
          jsb.onPause = () => {
            this.emit('hide');
          };
          jsb.onResume = () => {
            this.emit('show');
          };
          jsb.onClose = () => {
            this.emit('close');
          };
        }
        _setFeature(feature, value) {
          return this._featureMap[feature] = value;
        }
        init() {
          return Promise.all(this._initPromise);
        }
        hasFeature(feature) {
          return this._featureMap[feature];
        }
        getBatteryLevel() {
          return jsb.device.getBatteryLevel();
        }
        triggerGC() {
          jsb.garbageCollect();
        }
        openURL(url) {
          jsb.openURL(url);
        }
        now() {
          if (Date.now) {
            return Date.now();
          }
          return +new Date();
        }
        restartJSVM() {
          __restartVM();
        }
        close() {
          __close();
        }
        exit() {
          __exit();
        }
      };
      _export("systemInfo", systemInfo = new SystemInfo());
      checkPalIntegrity(withImpl());
    }
  };
});