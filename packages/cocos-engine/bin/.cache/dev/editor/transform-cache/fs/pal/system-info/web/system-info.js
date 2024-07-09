System.register("q-bundled:///fs/pal/system-info/web/system-info.js", ["../../../../virtual/internal%253Aconstants.js", "../../../cocos/core/event/index.js", "../../integrity-check.js", "../enum-type/index.js"], function (_export, _context) {
  "use strict";

  var DEBUG, EDITOR, PREVIEW, TEST, EventTarget, checkPalIntegrity, withImpl, BrowserType, NetworkType, OS, Platform, Language, Feature, SystemInfo, systemInfo;
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
      SystemInfo = class SystemInfo extends EventTarget {
        constructor() {
          var _getBattery, _ref;
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
          this._battery = void 0;
          this._featureMap = void 0;
          this._initPromise = void 0;
          const nav = window.navigator;
          const ua = nav.userAgent.toLowerCase();
          // NOTE: getBattery is not totally supported on Web standard
          (_getBattery = (_ref = nav).getBattery) === null || _getBattery === void 0 ? void 0 : _getBattery.call(_ref).then(battery => {
            this._battery = battery;
          });
          this.networkType = NetworkType.LAN; // TODO
          this.isNative = false;
          this.isBrowser = true;

          // init isMobile and platform
          if (EDITOR) {
            this.isMobile = false;
            this.platform = Platform.EDITOR_PAGE; // TODO
          } else {
            this.isMobile = /mobile|android|iphone|ipad/.test(ua);
            this.platform = this.isMobile ? Platform.MOBILE_BROWSER : Platform.DESKTOP_BROWSER;
          }

          // init isLittleEndian
          this.isLittleEndian = (() => {
            const buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] === 256;
          })();

          // init languageCode and language
          let currLanguage = nav.language;
          this.nativeLanguage = currLanguage.toLowerCase();
          currLanguage = currLanguage || nav.browserLanguage;
          currLanguage = currLanguage ? currLanguage.split('-')[0] : Language.ENGLISH;
          this.language = currLanguage;

          // init os, osVersion and osMainVersion
          let isAndroid = false;
          let iOS = false;
          let osVersion = '';
          let osMajorVersion = 0;
          let uaResult = /android\s*(\d+(?:\.\d+)*)/i.exec(ua) || /android\s*(\d+(?:\.\d+)*)/i.exec(nav.platform);
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
          let osName = OS.UNKNOWN;
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
          this.os = osName;
          this.osVersion = osVersion;
          this.osMainVersion = osMajorVersion;

          // TODO: use dack-type to determine the browserType
          // init browserType and browserVersion
          this.browserType = BrowserType.UNKNOWN;
          const typeReg0 = /wechat|weixin|micromessenger/i;
          const typeReg1 = /mqqbrowser|micromessenger|qqbrowser|sogou|qzone|liebao|maxthon|ucbs|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|miuibrowser/i;
          const typeReg2 = /qq|qqbrowser|ucbrowser|ubrowser|edge|HuaweiBrowser/i;
          const typeReg3 = /chrome|safari|firefox|trident|opera|opr\/|oupeng/i;
          const browserTypes = typeReg0.exec(ua) || typeReg1.exec(ua) || typeReg2.exec(ua) || typeReg3.exec(ua);
          let browserType = browserTypes ? browserTypes[0].toLowerCase() : OS.UNKNOWN;
          if (browserType === 'safari' && isAndroid) {
            browserType = BrowserType.ANDROID;
          } else if (browserType === 'qq' && /android.*applewebkit/i.test(ua)) {
            browserType = BrowserType.ANDROID;
          }
          const typeMap = {
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
          this.browserType = typeMap[browserType] || browserType;

          // init browserVersion
          this.browserVersion = '';
          const versionReg1 = /(mqqbrowser|micromessenger|qqbrowser|sogou|qzone|liebao|maxthon|uc|ucbs|360 aphone|360|baiduboxapp|baidu|maxthon|mxbrowser|miui(?:.hybrid)?)(mobile)?(browser)?\/?([\d.]+)/i;
          const versionReg2 = /(qq|chrome|safari|firefox|trident|opera|opr\/|oupeng)(mobile)?(browser)?\/?([\d.]+)/i;
          let tmp = versionReg1.exec(ua);
          if (!tmp) {
            tmp = versionReg2.exec(ua);
          }
          this.browserVersion = tmp ? tmp[4] : '';
          this.isXR = false;

          // init capability
          const _tmpCanvas1 = document.createElement('canvas');
          const supportCanvas = TEST ? false : !!_tmpCanvas1.getContext('2d');
          let supportWebGL = false;
          if (TEST) {
            supportWebGL = false;
          } else if (window.WebGLRenderingContext) {
            supportWebGL = true;
          }
          let supportWebp;
          try {
            supportWebp = TEST ? false : _tmpCanvas1.toDataURL('image/webp').startsWith('data:image/webp');
          } catch (e) {
            supportWebp = false;
          }
          if (this.os === OS.IOS) {
            var _exec;
            // if we're on iOS all major browsers will identify as BrowserType.SAFARI but Chrome and Firefox DO NOT have the
            // version in the browser identifier, using "applewebkit" solves this issue for all browsers on iOS
            const result = (_exec = / applewebkit\/(\d+)/.exec(ua)) === null || _exec === void 0 ? void 0 : _exec[1];
            if (typeof result === 'string') {
              if (Number.parseInt(result) >= 604) {
                // safari 14+ support webp, but canvas.toDataURL is not supported by default
                supportWebp = true;
              }
            }
          } else if (this.browserType === BrowserType.SAFARI) {
            var _exec2;
            //non-ios safari (desktop)
            const result = (_exec2 = / version\/(\d+)/.exec(ua)) === null || _exec2 === void 0 ? void 0 : _exec2[1];
            if (typeof result === 'string') {
              if (Number.parseInt(result) >= 14) {
                // safari 14+ support webp, but canvas.toDataURL is not supported by default
                supportWebp = true;
              }
            }
          }
          const supportTouch = document.documentElement.ontouchstart !== undefined || document.ontouchstart !== undefined || EDITOR;
          const supportMouse = document.documentElement.onmouseup !== undefined || EDITOR;
          // NOTE: xr is not totally supported on web
          const supportXR = typeof navigator.xr !== 'undefined';
          // refer https://stackoverflow.com/questions/47879864/how-can-i-check-if-a-browser-supports-webassembly
          const supportWasm = (() => {
            // NOTE: safari on iOS 15.4 and MacOS 15.4 has some wasm memory issue, can not use wasm for bullet
            const isSafari_15_4 = (this.os === OS.IOS || this.os === OS.OSX) && /(OS 15_4)|(Version\/15.4)/.test(window.navigator.userAgent);
            if (isSafari_15_4) {
              return false;
            }
            try {
              if (typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function') {
                const module = new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]));
                if (module instanceof WebAssembly.Module) {
                  return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
                }
              }
            } catch (e) {
              return false;
            }
            return false;
          })();
          this._featureMap = {
            [Feature.WEBP]: supportWebp,
            [Feature.IMAGE_BITMAP]: false,
            // Initialize in Promise
            [Feature.WEB_VIEW]: true,
            [Feature.VIDEO_PLAYER]: true,
            [Feature.SAFE_AREA]: false,
            [Feature.HPE]: false,
            [Feature.INPUT_TOUCH]: supportTouch,
            [Feature.EVENT_KEYBOARD]: document.documentElement.onkeyup !== undefined || EDITOR,
            [Feature.EVENT_MOUSE]: supportMouse,
            [Feature.EVENT_TOUCH]: supportTouch || supportMouse,
            [Feature.EVENT_ACCELEROMETER]: window.DeviceMotionEvent !== undefined || window.DeviceOrientationEvent !== undefined,
            // NOTE: webkitGetGamepads is not standard web interface
            [Feature.EVENT_GAMEPAD]: navigator.getGamepads !== undefined || navigator.webkitGetGamepads !== undefined || supportXR,
            [Feature.EVENT_HANDLE]: EDITOR || PREVIEW,
            [Feature.EVENT_HMD]: supportXR,
            [Feature.EVENT_HANDHELD]: supportXR,
            [Feature.WASM]: supportWasm
          };
          this._initPromise = [];
          this._initPromise.push(this._supportsImageBitmapPromise());
          this._registerEvent();
        }
        _supportsImageBitmapPromise() {
          if (!TEST && typeof createImageBitmap !== 'undefined' && typeof Blob !== 'undefined') {
            const canvas = document.createElement('canvas');
            canvas.width = canvas.height = 2;
            const promise = createImageBitmap(canvas, {});
            if (promise instanceof Promise) {
              return promise.then(imageBitmap => {
                this._setFeature(Feature.IMAGE_BITMAP, true);
                imageBitmap === null || imageBitmap === void 0 ? void 0 : imageBitmap.close();
              });
            } else if (DEBUG) {
              console.warn('The return value of createImageBitmap is not Promise.');
            }
          }
          return Promise.resolve();
        }
        _registerEvent() {
          let hiddenPropName;
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
          let hidden = false;
          const onHidden = () => {
            if (!hidden) {
              hidden = true;
              this.emit('hide');
            }
          };
          // In order to adapt the most of platforms the onshow API.
          const onShown = (arg0, arg1, arg2, arg3, arg4) => {
            if (hidden) {
              hidden = false;
              this.emit('show', arg0, arg1, arg2, arg3, arg4);
            }
          };
          if (hiddenPropName) {
            const changeList = ['visibilitychange', 'mozvisibilitychange', 'msvisibilitychange', 'webkitvisibilitychange', 'qbrowserVisibilityChange'];
            for (let i = 0; i < changeList.length; i++) {
              document.addEventListener(changeList[i], event => {
                let visible = document[hiddenPropName];
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
          if (this._battery) {
            return this._battery.level;
          } else {
            if (DEBUG) {
              console.warn('getBatteryLevel is not supported');
            }
            return 1;
          }
        }
        triggerGC() {
          if (DEBUG) {
            console.warn('triggerGC is not supported.');
          }
        }
        openURL(url) {
          window.open(url);
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
          window.close();
        }
        close() {
          this.emit('close');
        }
      };
      _export("systemInfo", systemInfo = new SystemInfo());
      checkPalIntegrity(withImpl());
    }
  };
});