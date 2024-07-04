System.register("q-bundled:///fs/pal/system-info/minigame/system-info.js", ["../../../../virtual/internal%253Aconstants.js", "pal/minigame", "../../../cocos/core/event/index.js", "../../integrity-check.js", "../enum-type/index.js"], function (_export, _context) {
  "use strict";

  var ALIPAY, BAIDU, BYTEDANCE, COCOSPLAY, HUAWEI, LINKSURE, OPPO, QTT, VIVO, WECHAT, XIAOMI, DEBUG, TEST, TAOBAO, TAOBAO_MINIGAME, WECHAT_MINI_PROGRAM, minigame, EventTarget, checkPalIntegrity, withImpl, BrowserType, NetworkType, OS, Platform, Feature, SystemInfo, currentPlatform, isVersionGreaterOrEqualTo, systemInfo;
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
      ALIPAY = _virtualInternal253AconstantsJs.ALIPAY;
      BAIDU = _virtualInternal253AconstantsJs.BAIDU;
      BYTEDANCE = _virtualInternal253AconstantsJs.BYTEDANCE;
      COCOSPLAY = _virtualInternal253AconstantsJs.COCOSPLAY;
      HUAWEI = _virtualInternal253AconstantsJs.HUAWEI;
      LINKSURE = _virtualInternal253AconstantsJs.LINKSURE;
      OPPO = _virtualInternal253AconstantsJs.OPPO;
      QTT = _virtualInternal253AconstantsJs.QTT;
      VIVO = _virtualInternal253AconstantsJs.VIVO;
      WECHAT = _virtualInternal253AconstantsJs.WECHAT;
      XIAOMI = _virtualInternal253AconstantsJs.XIAOMI;
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      TEST = _virtualInternal253AconstantsJs.TEST;
      TAOBAO = _virtualInternal253AconstantsJs.TAOBAO;
      TAOBAO_MINIGAME = _virtualInternal253AconstantsJs.TAOBAO_MINIGAME;
      WECHAT_MINI_PROGRAM = _virtualInternal253AconstantsJs.WECHAT_MINI_PROGRAM;
    }, function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }, function (_enumTypeIndexJs) {
      BrowserType = _enumTypeIndexJs.BrowserType;
      NetworkType = _enumTypeIndexJs.NetworkType;
      OS = _enumTypeIndexJs.OS;
      Platform = _enumTypeIndexJs.Platform;
      Feature = _enumTypeIndexJs.Feature;
    }],
    execute: function () {
      if (WECHAT) {
        currentPlatform = Platform.WECHAT_GAME;
      } else if (WECHAT_MINI_PROGRAM) {
        currentPlatform = Platform.WECHAT_MINI_PROGRAM;
      } else if (BAIDU) {
        currentPlatform = Platform.BAIDU_MINI_GAME;
      } else if (XIAOMI) {
        currentPlatform = Platform.XIAOMI_QUICK_GAME;
      } else if (ALIPAY) {
        currentPlatform = Platform.ALIPAY_MINI_GAME;
      } else if (TAOBAO) {
        currentPlatform = Platform.TAOBAO_CREATIVE_APP;
      } else if (TAOBAO_MINIGAME) {
        currentPlatform = Platform.TAOBAO_MINI_GAME;
      } else if (BYTEDANCE) {
        currentPlatform = Platform.BYTEDANCE_MINI_GAME;
      } else if (OPPO) {
        currentPlatform = Platform.OPPO_MINI_GAME;
      } else if (VIVO) {
        currentPlatform = Platform.VIVO_MINI_GAME;
      } else if (HUAWEI) {
        currentPlatform = Platform.HUAWEI_QUICK_GAME;
      } else if (COCOSPLAY) {
        currentPlatform = Platform.COCOSPLAY;
      } else if (LINKSURE) {
        currentPlatform = Platform.LINKSURE_MINI_GAME;
      } else if (QTT) {
        currentPlatform = Platform.QTT_MINI_GAME;
      }
      if (BYTEDANCE) {
        isVersionGreaterOrEqualTo = function isVersionGreaterOrEqualTo(versionA, versionB) {
          if (!versionA || !versionB) {
            return false;
          }
          // Split the version number string into an array of integers
          function parseVersion(version) {
            return version.split('.').map(part => parseInt(part, 10));
          }

          // Parse the version number strings into arrays
          const versionArrayA = parseVersion(versionA);
          const versionArrayB = parseVersion(versionB);
          if (versionArrayA.length !== versionArrayB.length) {
            return false;
          }

          // Compare versions level by level
          for (let i = 0; i < versionArrayA.length; i++) {
            if (versionArrayA[i] > versionArrayB[i]) {
              // versionA > versionB
              return true;
            } else if (versionArrayA[i] < versionArrayB[i]) {
              // versionA < versionB
              return false;
            }
          }

          // versionA === versionB
          return true;
        };
      }
      SystemInfo = class SystemInfo extends EventTarget {
        constructor() {
          super();
          this.networkType = void 0;
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
          const minigameSysInfo = minigame.getSystemInfoSync();
          this.networkType = NetworkType.LAN; // TODO
          this.isNative = false;
          this.isBrowser = false;

          // init isLittleEndian
          this.isLittleEndian = (() => {
            const buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] === 256;
          })();

          // init languageCode and language
          this.nativeLanguage = minigameSysInfo.language;
          this.language = minigameSysInfo.language.substr(0, 2);

          // init os, osVersion and osMainVersion
          const minigamePlatform = minigameSysInfo.platform.toLocaleLowerCase();
          if (minigamePlatform === 'android') {
            this.os = OS.ANDROID;
          } else if (minigamePlatform === 'ios') {
            this.os = OS.IOS;
          } else if (minigamePlatform === 'windows') {
            this.os = OS.WINDOWS;
          } else {
            this.os = OS.UNKNOWN;
          }
          let minigameSystem = minigameSysInfo.system.toLowerCase();
          // Adaptation to Android P
          if (minigameSystem === 'android p') {
            minigameSystem = 'android p 9.0';
          }
          const version = /[\d.]+/.exec(minigameSystem);
          this.osVersion = version ? version[0] : minigameSystem;
          this.osMainVersion = parseInt(this.osVersion);

          // init isMobile and platform
          this.platform = currentPlatform;
          this.isMobile = this.os !== OS.WINDOWS;

          // init browserType and browserVersion
          this.browserType = BrowserType.UNKNOWN;
          this.browserVersion = '';
          this.isXR = false;
          const isPCWechat = WECHAT && this.os === OS.WINDOWS && !minigame.isDevTool;
          const supportWasm = (() => {
            if (WECHAT) {
              return true;
            }
            if (BYTEDANCE) {
              let minSDKVersionSupportWasm = '';
              if (this.os === OS.ANDROID) {
                minSDKVersionSupportWasm = '3.9.0';
              } else if (this.os === OS.IOS) {
                minSDKVersionSupportWasm = '3.8.0';
              }
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error TTWebAssembly is defined if bytedance client supports wasm.
              if (isVersionGreaterOrEqualTo(minigameSysInfo.SDKVersion, minSDKVersionSupportWasm) && typeof TTWebAssembly === 'object') {
                return true;
              }
            }
            return false;
          })();
          this._featureMap = {
            [Feature.WEBP]: false,
            // Initialize in Promise,
            [Feature.IMAGE_BITMAP]: false,
            [Feature.WEB_VIEW]: false,
            [Feature.VIDEO_PLAYER]: WECHAT || WECHAT_MINI_PROGRAM || OPPO,
            [Feature.SAFE_AREA]: WECHAT || WECHAT_MINI_PROGRAM || BYTEDANCE,
            [Feature.HPE]: false,
            [Feature.INPUT_TOUCH]: !isPCWechat,
            [Feature.EVENT_KEYBOARD]: isPCWechat,
            [Feature.EVENT_MOUSE]: isPCWechat,
            [Feature.EVENT_TOUCH]: true,
            [Feature.EVENT_ACCELEROMETER]: !isPCWechat,
            [Feature.EVENT_GAMEPAD]: false,
            [Feature.EVENT_HANDLE]: this.isXR,
            [Feature.EVENT_HMD]: this.isXR,
            [Feature.EVENT_HANDHELD]: false,
            [Feature.WASM]: supportWasm
          };
          this._initPromise = [];
          this._initPromise.push(this._supportsWebpPromise());
          this._registerEvent();
        }
        _supportsWebpPromise() {
          if (!TEST) {
            return this._supportsWebp().then(isSupport => {
              this._setFeature(Feature.WEBP, isSupport);
            });
          }
          return Promise.resolve();
        }
        _supportsWebp() {
          return new Promise((resolve, reject) => {
            if (WECHAT_MINI_PROGRAM) {
              resolve(true);
              return;
            }
            // HACK: webp base64 doesn't support on Wechat Android, which reports some internal error log.
            if (WECHAT && this.os === OS.ANDROID) {
              resolve(false);
              return;
            }
            try {
              const img = document.createElement('img');
              const timer = setTimeout(() => {
                resolve(false);
              }, 500);
              img.onload = function onload() {
                clearTimeout(timer);
                const result = img.width > 0 && img.height > 0;
                resolve(result);
              };
              img.onerror = function onerror(err) {
                clearTimeout(timer);
                if (DEBUG) {
                  console.warn('Create Webp image failed, message: '.concat(err.toString()));
                }
                resolve(false);
              };
              img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
            } catch (error) {
              resolve(false);
            }
          });
        }
        _registerEvent() {
          minigame.onHide(() => {
            this.emit('hide');
          });
          minigame.onShow(() => {
            this.emit('show');
          });
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
          return minigame.getBatteryInfoSync().level / 100;
        }
        triggerGC() {
          var _minigame$triggerGC;
          (_minigame$triggerGC = minigame.triggerGC) === null || _minigame$triggerGC === void 0 ? void 0 : _minigame$triggerGC.call(minigame);
        }
        openURL(url) {
          if (DEBUG) {
            console.warn('openURL is not supported');
          }
        }
        now() {
          if (Date.now) {
            return Date.now();
          }
          return +new Date();
        }
        restartJSVM() {
          if (DEBUG) {
            console.warn('restartJSVM is not supported.');
          }
        }
        exit() {
          var _minigame$exitMiniPro;
          (_minigame$exitMiniPro = minigame.exitMiniProgram) === null || _minigame$exitMiniPro === void 0 ? void 0 : _minigame$exitMiniPro.call(minigame);
        }
        close() {
          // TODO(qgh):The minigame platform does not have an exit interface,
          // so there is no need to send a close message to the engine to release resources.
          // this.emit('close');
          this.exit();
        }
      };
      _export("systemInfo", systemInfo = new SystemInfo());
      checkPalIntegrity(withImpl());
    }
  };
});