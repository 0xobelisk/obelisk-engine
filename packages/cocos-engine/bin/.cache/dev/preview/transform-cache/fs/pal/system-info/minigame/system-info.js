System.register("q-bundled:///fs/pal/system-info/minigame/system-info.js", ["../../../../virtual/internal%253Aconstants.js", "pal/minigame", "../../../cocos/core/event/index.js", "../../integrity-check.js", "../enum-type/index.js"], function (_export, _context) {
  "use strict";

  var ALIPAY, BAIDU, BYTEDANCE, COCOSPLAY, HUAWEI, LINKSURE, OPPO, QTT, VIVO, WECHAT, XIAOMI, DEBUG, TEST, TAOBAO, TAOBAO_MINIGAME, WECHAT_MINI_PROGRAM, minigame, EventTarget, checkPalIntegrity, withImpl, BrowserType, NetworkType, OS, Platform, Feature, currentPlatform, isVersionGreaterOrEqualTo, SystemInfo, systemInfo;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
            return version.split('.').map(function (part) {
              return parseInt(part, 10);
            });
          }

          // Parse the version number strings into arrays
          var versionArrayA = parseVersion(versionA);
          var versionArrayB = parseVersion(versionB);
          if (versionArrayA.length !== versionArrayB.length) {
            return false;
          }

          // Compare versions level by level
          for (var i = 0; i < versionArrayA.length; i++) {
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
      SystemInfo = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(SystemInfo, _EventTarget);
        function SystemInfo() {
          var _this$_featureMap;
          var _this;
          _this = _EventTarget.call(this) || this;
          _this.networkType = void 0;
          _this.isNative = void 0;
          _this.isBrowser = void 0;
          _this.isMobile = void 0;
          _this.isLittleEndian = void 0;
          _this.platform = void 0;
          _this.language = void 0;
          _this.nativeLanguage = void 0;
          _this.os = void 0;
          _this.osVersion = void 0;
          _this.osMainVersion = void 0;
          _this.browserType = void 0;
          _this.browserVersion = void 0;
          _this.isXR = void 0;
          _this._featureMap = void 0;
          _this._initPromise = void 0;
          var minigameSysInfo = minigame.getSystemInfoSync();
          _this.networkType = NetworkType.LAN; // TODO
          _this.isNative = false;
          _this.isBrowser = false;

          // init isLittleEndian
          _this.isLittleEndian = function () {
            var buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] === 256;
          }();

          // init languageCode and language
          _this.nativeLanguage = minigameSysInfo.language;
          _this.language = minigameSysInfo.language.substr(0, 2);

          // init os, osVersion and osMainVersion
          var minigamePlatform = minigameSysInfo.platform.toLocaleLowerCase();
          if (minigamePlatform === 'android') {
            _this.os = OS.ANDROID;
          } else if (minigamePlatform === 'ios') {
            _this.os = OS.IOS;
          } else if (minigamePlatform === 'windows') {
            _this.os = OS.WINDOWS;
          } else {
            _this.os = OS.UNKNOWN;
          }
          var minigameSystem = minigameSysInfo.system.toLowerCase();
          // Adaptation to Android P
          if (minigameSystem === 'android p') {
            minigameSystem = 'android p 9.0';
          }
          var version = /[\d.]+/.exec(minigameSystem);
          _this.osVersion = version ? version[0] : minigameSystem;
          _this.osMainVersion = parseInt(_this.osVersion);

          // init isMobile and platform
          _this.platform = currentPlatform;
          _this.isMobile = _this.os !== OS.WINDOWS;

          // init browserType and browserVersion
          _this.browserType = BrowserType.UNKNOWN;
          _this.browserVersion = '';
          _this.isXR = false;
          var isPCWechat = WECHAT && _this.os === OS.WINDOWS && !minigame.isDevTool;
          var supportWasm = function () {
            if (WECHAT) {
              return true;
            }
            if (BYTEDANCE) {
              var minSDKVersionSupportWasm = '';
              if (_this.os === OS.ANDROID) {
                minSDKVersionSupportWasm = '3.9.0';
              } else if (_this.os === OS.IOS) {
                minSDKVersionSupportWasm = '3.8.0';
              }
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error TTWebAssembly is defined if bytedance client supports wasm.
              if (isVersionGreaterOrEqualTo(minigameSysInfo.SDKVersion, minSDKVersionSupportWasm) && typeof TTWebAssembly === 'object') {
                return true;
              }
            }
            return false;
          }();
          _this._featureMap = (_this$_featureMap = {}, _this$_featureMap[Feature.WEBP] = false, _this$_featureMap[Feature.IMAGE_BITMAP] = false, _this$_featureMap[Feature.WEB_VIEW] = false, _this$_featureMap[Feature.VIDEO_PLAYER] = WECHAT || WECHAT_MINI_PROGRAM || OPPO, _this$_featureMap[Feature.SAFE_AREA] = WECHAT || WECHAT_MINI_PROGRAM || BYTEDANCE, _this$_featureMap[Feature.HPE] = false, _this$_featureMap[Feature.INPUT_TOUCH] = !isPCWechat, _this$_featureMap[Feature.EVENT_KEYBOARD] = isPCWechat, _this$_featureMap[Feature.EVENT_MOUSE] = isPCWechat, _this$_featureMap[Feature.EVENT_TOUCH] = true, _this$_featureMap[Feature.EVENT_ACCELEROMETER] = !isPCWechat, _this$_featureMap[Feature.EVENT_GAMEPAD] = false, _this$_featureMap[Feature.EVENT_HANDLE] = _this.isXR, _this$_featureMap[Feature.EVENT_HMD] = _this.isXR, _this$_featureMap[Feature.EVENT_HANDHELD] = false, _this$_featureMap[Feature.WASM] = supportWasm, _this$_featureMap);
          _this._initPromise = [];
          _this._initPromise.push(_this._supportsWebpPromise());
          _this._registerEvent();
          return _this;
        }
        var _proto = SystemInfo.prototype;
        _proto._supportsWebpPromise = function _supportsWebpPromise() {
          var _this2 = this;
          if (!TEST) {
            return this._supportsWebp().then(function (isSupport) {
              _this2._setFeature(Feature.WEBP, isSupport);
            });
          }
          return Promise.resolve();
        };
        _proto._supportsWebp = function _supportsWebp() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            if (WECHAT_MINI_PROGRAM) {
              resolve(true);
              return;
            }
            // HACK: webp base64 doesn't support on Wechat Android, which reports some internal error log.
            if (WECHAT && _this3.os === OS.ANDROID) {
              resolve(false);
              return;
            }
            try {
              var img = document.createElement('img');
              var timer = setTimeout(function () {
                resolve(false);
              }, 500);
              img.onload = function onload() {
                clearTimeout(timer);
                var result = img.width > 0 && img.height > 0;
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
        };
        _proto._registerEvent = function _registerEvent() {
          var _this4 = this;
          minigame.onHide(function () {
            _this4.emit('hide');
          });
          minigame.onShow(function () {
            _this4.emit('show');
          });
        };
        _proto._setFeature = function _setFeature(feature, value) {
          return this._featureMap[feature] = value;
        };
        _proto.init = function init() {
          return Promise.all(this._initPromise);
        };
        _proto.hasFeature = function hasFeature(feature) {
          return this._featureMap[feature];
        };
        _proto.getBatteryLevel = function getBatteryLevel() {
          return minigame.getBatteryInfoSync().level / 100;
        };
        _proto.triggerGC = function triggerGC() {
          var _minigame$triggerGC;
          (_minigame$triggerGC = minigame.triggerGC) === null || _minigame$triggerGC === void 0 ? void 0 : _minigame$triggerGC.call(minigame);
        };
        _proto.openURL = function openURL(url) {
          if (DEBUG) {
            console.warn('openURL is not supported');
          }
        };
        _proto.now = function now() {
          if (Date.now) {
            return Date.now();
          }
          return +new Date();
        };
        _proto.restartJSVM = function restartJSVM() {
          if (DEBUG) {
            console.warn('restartJSVM is not supported.');
          }
        };
        _proto.exit = function exit() {
          var _minigame$exitMiniPro;
          (_minigame$exitMiniPro = minigame.exitMiniProgram) === null || _minigame$exitMiniPro === void 0 ? void 0 : _minigame$exitMiniPro.call(minigame);
        };
        _proto.close = function close() {
          // TODO(qgh):The minigame platform does not have an exit interface,
          // so there is no need to send a close message to the engine to release resources.
          // this.emit('close');
          this.exit();
        };
        return SystemInfo;
      }(EventTarget);
      _export("systemInfo", systemInfo = new SystemInfo());
      checkPalIntegrity(withImpl());
    }
  };
});