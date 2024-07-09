System.register("q-bundled:///fs/pal/system-info/web/system-info.js", ["../../../../virtual/internal%253Aconstants.js", "../../../cocos/core/event/index.js", "../../integrity-check.js", "../enum-type/index.js"], function (_export, _context) {
  "use strict";

  var DEBUG, EDITOR, PREVIEW, TEST, EventTarget, checkPalIntegrity, withImpl, BrowserType, NetworkType, OS, Platform, Language, Feature, SystemInfo, systemInfo;
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
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      PREVIEW = _virtualInternal253AconstantsJs.PREVIEW;
      TEST = _virtualInternal253AconstantsJs.TEST;
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
      Language = _enumTypeIndexJs.Language;
      Feature = _enumTypeIndexJs.Feature;
    }],
    execute: function () {
      SystemInfo = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(SystemInfo, _EventTarget);
        function SystemInfo() {
          var _getBattery, _ref, _this$_featureMap;
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
          _this._battery = void 0;
          _this._featureMap = void 0;
          _this._initPromise = void 0;
          var nav = window.navigator;
          var ua = nav.userAgent.toLowerCase();
          // NOTE: getBattery is not totally supported on Web standard
          (_getBattery = (_ref = nav).getBattery) === null || _getBattery === void 0 ? void 0 : _getBattery.call(_ref).then(function (battery) {
            _this._battery = battery;
          });
          _this.networkType = NetworkType.LAN; // TODO
          _this.isNative = false;
          _this.isBrowser = true;

          // init isMobile and platform
          if (EDITOR) {
            _this.isMobile = false;
            _this.platform = Platform.EDITOR_PAGE; // TODO
          } else {
            _this.isMobile = /mobile|android|iphone|ipad/.test(ua);
            _this.platform = _this.isMobile ? Platform.MOBILE_BROWSER : Platform.DESKTOP_BROWSER;
          }

          // init isLittleEndian
          _this.isLittleEndian = function () {
            var buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] === 256;
          }();

          // init languageCode and language
          var currLanguage = nav.language;
          _this.nativeLanguage = currLanguage.toLowerCase();
          currLanguage = currLanguage || nav.browserLanguage;
          currLanguage = currLanguage ? currLanguage.split('-')[0] : Language.ENGLISH;
          _this.language = currLanguage;

          // init os, osVersion and osMainVersion
          var isAndroid = false;
          var iOS = false;
          var osVersion = '';
          var osMajorVersion = 0;
          var uaResult = /android\s*(\d+(?:\.\d+)*)/i.exec(ua) || /android\s*(\d+(?:\.\d+)*)/i.exec(nav.platform);
          if (uaResult) {
            isAndroid = true;
            osVersion = uaResult[1] || '';
            osMajorVersion = parseInt(osVersion) || 0;
          }
          uaResult = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(ua);
          if (uaResult) {
            iOS = true;
            osVersion = uaResult[2] || '';
            osMajorVersion = parseInt(osVersion) || 0;
            // refer to https://github.com/cocos-creator/engine/pull/5542 , thanks for contribition from @krapnikkk
            // ipad OS 13 safari identifies itself as "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko)"
            // so use maxTouchPoints to check whether it's desktop safari or not.
            // reference: https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct
            // FIXME: should remove it when touch-enabled mac are available
            // TODO: due to compatibility issues, it is still determined to be ios, and a new operating system type ipados may be added later？
          } else if (/(iPhone|iPad|iPod)/.exec(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints && nav.maxTouchPoints > 1) {
            iOS = true;
            osVersion = '';
            osMajorVersion = 0;
          }
          var osName = OS.UNKNOWN;
          if (nav.appVersion.indexOf('Win') !== -1) {
            osName = OS.WINDOWS;
          } else if (iOS) {
            osName = OS.IOS;
          } else if (nav.appVersion.indexOf('Mac') !== -1) {
            osName = OS.OSX;
          } else if (nav.appVersion.indexOf('X11') !== -1 && nav.appVersion.indexOf('Linux') === -1) {
            osName = OS.LINUX;
          } else if (isAndroid) {
            osName = OS.ANDROID;
          } else if (nav.appVersion.indexOf('Linux') !== -1 || ua.indexOf('ubuntu') !== -1) {
            osName = OS.LINUX;
          }
          _this.os = osName;
          _this.osVersion = osVersion;
          _this.osMainVersion = osMajorVersion;

          // TODO: use dack-type to determine the browserType
          // init browserType and browserVersion
          _this.browserType = BrowserType.UNKNOWN;
          var typeReg0 = /wechat|weixin|micromessenger/i;
          var typeReg1 = /mqqbrowser|micromessenger|qqbrowser|sogou|qzone|liebao|maxthon|ucbs|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|miuibrowser/i;
          var typeReg2 = /qq|qqbrowser|ucbrowser|ubrowser|edge|HuaweiBrowser/i;
          var typeReg3 = /chrome|safari|firefox|trident|opera|opr\/|oupeng/i;
          var browserTypes = typeReg0.exec(ua) || typeReg1.exec(ua) || typeReg2.exec(ua) || typeReg3.exec(ua);
          var browserType = browserTypes ? browserTypes[0].toLowerCase() : OS.UNKNOWN;
          if (browserType === 'safari' && isAndroid) {
            browserType = BrowserType.ANDROID;
          } else if (browserType === 'qq' && /android.*applewebkit/i.test(ua)) {
            browserType = BrowserType.ANDROID;
          }
          var typeMap = {
            micromessenger: BrowserType.WECHAT,
            wechat: BrowserType.WECHAT,
            weixin: BrowserType.WECHAT,
            trident: BrowserType.IE,
            edge: BrowserType.EDGE,
            '360 aphone': BrowserType.BROWSER_360,
            mxbrowser: BrowserType.MAXTHON,
            'opr/': BrowserType.OPERA,
            ubrowser: BrowserType.UC,
            huaweibrowser: BrowserType.HUAWEI
          };
          _this.browserType = typeMap[browserType] || browserType;

          // init browserVersion
          _this.browserVersion = '';
          var versionReg1 = /(mqqbrowser|micromessenger|qqbrowser|sogou|qzone|liebao|maxthon|uc|ucbs|360 aphone|360|baiduboxapp|baidu|maxthon|mxbrowser|miui(?:.hybrid)?)(mobile)?(browser)?\/?([\d.]+)/i;
          var versionReg2 = /(qq|chrome|safari|firefox|trident|opera|opr\/|oupeng)(mobile)?(browser)?\/?([\d.]+)/i;
          var tmp = versionReg1.exec(ua);
          if (!tmp) {
            tmp = versionReg2.exec(ua);
          }
          _this.browserVersion = tmp ? tmp[4] : '';
          _this.isXR = false;

          // init capability
          var _tmpCanvas1 = document.createElement('canvas');
          var supportCanvas = TEST ? false : !!_tmpCanvas1.getContext('2d');
          var supportWebGL = false;
          if (TEST) {
            supportWebGL = false;
          } else if (window.WebGLRenderingContext) {
            supportWebGL = true;
          }
          var supportWebp;
          try {
            supportWebp = TEST ? false : _tmpCanvas1.toDataURL('image/webp').startsWith('data:image/webp');
          } catch (e) {
            supportWebp = false;
          }
          if (_this.os === OS.IOS) {
            var _exec;
            // if we're on iOS all major browsers will identify as BrowserType.SAFARI but Chrome and Firefox DO NOT have the
            // version in the browser identifier, using "applewebkit" solves this issue for all browsers on iOS
            var result = (_exec = / applewebkit\/(\d+)/.exec(ua)) === null || _exec === void 0 ? void 0 : _exec[1];
            if (typeof result === 'string') {
              if (Number.parseInt(result) >= 604) {
                // safari 14+ support webp, but canvas.toDataURL is not supported by default
                supportWebp = true;
              }
            }
          } else if (_this.browserType === BrowserType.SAFARI) {
            var _exec2;
            //non-ios safari (desktop)
            var _result = (_exec2 = / version\/(\d+)/.exec(ua)) === null || _exec2 === void 0 ? void 0 : _exec2[1];
            if (typeof _result === 'string') {
              if (Number.parseInt(_result) >= 14) {
                // safari 14+ support webp, but canvas.toDataURL is not supported by default
                supportWebp = true;
              }
            }
          }
          var supportTouch = document.documentElement.ontouchstart !== undefined || document.ontouchstart !== undefined || EDITOR;
          var supportMouse = document.documentElement.onmouseup !== undefined || EDITOR;
          // NOTE: xr is not totally supported on web
          var supportXR = typeof navigator.xr !== 'undefined';
          // refer https://stackoverflow.com/questions/47879864/how-can-i-check-if-a-browser-supports-webassembly
          var supportWasm = function () {
            // NOTE: safari on iOS 15.4 and MacOS 15.4 has some wasm memory issue, can not use wasm for bullet
            var isSafari_15_4 = (_this.os === OS.IOS || _this.os === OS.OSX) && /(OS 15_4)|(Version\/15.4)/.test(window.navigator.userAgent);
            if (isSafari_15_4) {
              return false;
            }
            try {
              if (typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function') {
                var module = new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]));
                if (module instanceof WebAssembly.Module) {
                  return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
                }
              }
            } catch (e) {
              return false;
            }
            return false;
          }();
          _this._featureMap = (_this$_featureMap = {}, _this$_featureMap[Feature.WEBP] = supportWebp, _this$_featureMap[Feature.IMAGE_BITMAP] = false, _this$_featureMap[Feature.WEB_VIEW] = true, _this$_featureMap[Feature.VIDEO_PLAYER] = true, _this$_featureMap[Feature.SAFE_AREA] = false, _this$_featureMap[Feature.HPE] = false, _this$_featureMap[Feature.INPUT_TOUCH] = supportTouch, _this$_featureMap[Feature.EVENT_KEYBOARD] = document.documentElement.onkeyup !== undefined || EDITOR, _this$_featureMap[Feature.EVENT_MOUSE] = supportMouse, _this$_featureMap[Feature.EVENT_TOUCH] = supportTouch || supportMouse, _this$_featureMap[Feature.EVENT_ACCELEROMETER] = window.DeviceMotionEvent !== undefined || window.DeviceOrientationEvent !== undefined, _this$_featureMap[Feature.EVENT_GAMEPAD] = navigator.getGamepads !== undefined || navigator.webkitGetGamepads !== undefined || supportXR, _this$_featureMap[Feature.EVENT_HANDLE] = EDITOR || PREVIEW, _this$_featureMap[Feature.EVENT_HMD] = supportXR, _this$_featureMap[Feature.EVENT_HANDHELD] = supportXR, _this$_featureMap[Feature.WASM] = supportWasm, _this$_featureMap);
          _this._initPromise = [];
          _this._initPromise.push(_this._supportsImageBitmapPromise());
          _this._registerEvent();
          return _this;
        }
        var _proto = SystemInfo.prototype;
        _proto._supportsImageBitmapPromise = function _supportsImageBitmapPromise() {
          var _this2 = this;
          if (!TEST && typeof createImageBitmap !== 'undefined' && typeof Blob !== 'undefined') {
            var canvas = document.createElement('canvas');
            canvas.width = canvas.height = 2;
            var promise = createImageBitmap(canvas, {});
            if (promise instanceof Promise) {
              return promise.then(function (imageBitmap) {
                _this2._setFeature(Feature.IMAGE_BITMAP, true);
                imageBitmap === null || imageBitmap === void 0 ? void 0 : imageBitmap.close();
              });
            } else if (DEBUG) {
              console.warn('The return value of createImageBitmap is not Promise.');
            }
          }
          return Promise.resolve();
        };
        _proto._registerEvent = function _registerEvent() {
          var _this3 = this;
          var hiddenPropName;
          if (typeof document.hidden !== 'undefined') {
            hiddenPropName = 'hidden';
          } else if (typeof document.mozHidden !== 'undefined') {
            hiddenPropName = 'mozHidden';
          } else if (typeof document.msHidden !== 'undefined') {
            hiddenPropName = 'msHidden';
          } else if (typeof document.webkitHidden !== 'undefined') {
            hiddenPropName = 'webkitHidden';
          } else {
            hiddenPropName = 'hidden';
          }
          var hidden = false;
          var onHidden = function onHidden() {
            if (!hidden) {
              hidden = true;
              _this3.emit('hide');
            }
          };
          // In order to adapt the most of platforms the onshow API.
          var onShown = function onShown(arg0, arg1, arg2, arg3, arg4) {
            if (hidden) {
              hidden = false;
              _this3.emit('show', arg0, arg1, arg2, arg3, arg4);
            }
          };
          if (hiddenPropName) {
            var changeList = ['visibilitychange', 'mozvisibilitychange', 'msvisibilitychange', 'webkitvisibilitychange', 'qbrowserVisibilityChange'];
            for (var i = 0; i < changeList.length; i++) {
              document.addEventListener(changeList[i], function (event) {
                var visible = document[hiddenPropName];
                // NOTE: QQ App need hidden property
                visible = visible || event.hidden;
                if (visible) {
                  onHidden();
                } else {
                  onShown();
                }
              });
            }
          } else {
            window.addEventListener('blur', onHidden);
            window.addEventListener('focus', onShown);
          }
          if (window.navigator.userAgent.indexOf('MicroMessenger') > -1) {
            window.onfocus = onShown;
          }
          if ('onpageshow' in window && 'onpagehide' in window) {
            window.addEventListener('pagehide', onHidden);
            window.addEventListener('pageshow', onShown);
            // Taobao UIWebKit
            document.addEventListener('pagehide', onHidden);
            document.addEventListener('pageshow', onShown);
          }
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
          if (this._battery) {
            return this._battery.level;
          } else {
            if (DEBUG) {
              console.warn('getBatteryLevel is not supported');
            }
            return 1;
          }
        };
        _proto.triggerGC = function triggerGC() {
          if (DEBUG) {
            console.warn('triggerGC is not supported.');
          }
        };
        _proto.openURL = function openURL(url) {
          window.open(url);
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
          window.close();
        };
        _proto.close = function close() {
          this.emit('close');
        };
        return SystemInfo;
      }(EventTarget);
      _export("systemInfo", systemInfo = new SystemInfo());
      checkPalIntegrity(withImpl());
    }
  };
});