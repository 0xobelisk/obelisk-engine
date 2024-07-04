System.register("q-bundled:///fs/pal/system-info/native/system-info.js", ["../../../../virtual/internal%253Aconstants.js", "../../../cocos/core/event/index.js", "../../integrity-check.js", "../enum-type/index.js"], function (_export, _context) {
  "use strict";

  var OPEN_HARMONY, EventTarget, checkPalIntegrity, withImpl, BrowserType, NetworkType, Platform, Language, Feature, networkTypeMap, platformMap, SystemInfo, systemInfo;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
      SystemInfo = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(SystemInfo, _EventTarget);
        function SystemInfo() {
          var _this$_featureMap;
          var _this;
          _this = _EventTarget.call(this) || this;
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
          _this.isNative = true;
          _this.isBrowser = false;
          _this.platform = platformMap[__getPlatform()];
          // eslint-disable-next-line max-len
          _this.isMobile = _this.platform === Platform.ANDROID || _this.platform === Platform.IOS || _this.platform === Platform.OHOS || _this.platform === Platform.OPENHARMONY;

          // init isLittleEndian
          _this.isLittleEndian = function () {
            var buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] === 256;
          }();

          // init languageCode and language
          var currLanguage = __getCurrentLanguageCode();
          _this.nativeLanguage = currLanguage ? currLanguage.toLowerCase() : Language.UNKNOWN;
          _this.language = __getCurrentLanguage();
          _this.os = __getOS();
          _this.osVersion = __getOSVersion();
          _this.osMainVersion = parseInt(_this.osVersion);

          // init browserType and browserVersion
          _this.browserType = BrowserType.UNKNOWN;
          _this.browserVersion = '';
          _this.isXR = typeof xr !== 'undefined' && typeof xr.XrEntry !== 'undefined';
          var isHPE = typeof __supportHPE === 'function' ? __supportHPE() : false;
          _this._featureMap = (_this$_featureMap = {}, _this$_featureMap[Feature.WEBP] = true, _this$_featureMap[Feature.IMAGE_BITMAP] = false, _this$_featureMap[Feature.WEB_VIEW] = _this.isMobile, _this$_featureMap[Feature.VIDEO_PLAYER] = _this.isMobile, _this$_featureMap[Feature.SAFE_AREA] = _this.isMobile, _this$_featureMap[Feature.HPE] = isHPE, _this$_featureMap[Feature.INPUT_TOUCH] = _this.isMobile, _this$_featureMap[Feature.EVENT_KEYBOARD] = true, _this$_featureMap[Feature.EVENT_MOUSE] = isHPE || !_this.isMobile, _this$_featureMap[Feature.EVENT_TOUCH] = true, _this$_featureMap[Feature.EVENT_ACCELEROMETER] = _this.isMobile, _this$_featureMap[Feature.EVENT_GAMEPAD] = true, _this$_featureMap[Feature.EVENT_HANDLE] = _this.isXR, _this$_featureMap[Feature.EVENT_HMD] = _this.isXR, _this$_featureMap[Feature.EVENT_HANDHELD] = typeof xr !== 'undefined' && typeof xr.ARModule !== 'undefined', _this$_featureMap[Feature.WASM] = !OPEN_HARMONY, _this$_featureMap);
          _this._initPromise = [];
          _this._registerEvent();
          return _this;
        }
        var _proto = SystemInfo.prototype;
        _proto._registerEvent = function _registerEvent() {
          var _this2 = this;
          jsb.onPause = function () {
            _this2.emit('hide');
          };
          jsb.onResume = function () {
            _this2.emit('show');
          };
          jsb.onClose = function () {
            _this2.emit('close');
          };
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
          return jsb.device.getBatteryLevel();
        };
        _proto.triggerGC = function triggerGC() {
          jsb.garbageCollect();
        };
        _proto.openURL = function openURL(url) {
          jsb.openURL(url);
        };
        _proto.now = function now() {
          if (Date.now) {
            return Date.now();
          }
          return +new Date();
        };
        _proto.restartJSVM = function restartJSVM() {
          __restartVM();
        };
        _proto.close = function close() {
          __close();
        };
        _proto.exit = function exit() {
          __exit();
        };
        _createClass(SystemInfo, [{
          key: "networkType",
          get:
          // TODO: need to wrap the function __isObjectValid()

          function get() {
            return networkTypeMap[jsb.device.getNetworkType()];
          }
        }]);
        return SystemInfo;
      }(EventTarget);
      _export("systemInfo", systemInfo = new SystemInfo());
      checkPalIntegrity(withImpl());
    }
  };
});