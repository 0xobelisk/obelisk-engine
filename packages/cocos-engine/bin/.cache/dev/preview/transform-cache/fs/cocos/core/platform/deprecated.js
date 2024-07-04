System.register("q-bundled:///fs/cocos/core/platform/deprecated.js", ["../utils/index.js", "./sys.js", "../global-exports.js", "./screen.js"], function (_export, _context) {
  "use strict";

  var markAsWarning, removeProperty, replaceProperty, sys, legacyCC, screen;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_utilsIndexJs) {
      markAsWarning = _utilsIndexJs.markAsWarning;
      removeProperty = _utilsIndexJs.removeProperty;
      replaceProperty = _utilsIndexJs.replaceProperty;
    }, function (_sysJs) {
      sys = _sysJs.sys;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_screenJs) {
      screen = _screenJs.screen;
    }],
    execute: function () {
      markAsWarning(legacyCC, 'cc', [{
        name: 'winSize',
        suggest: 'please use view.getVisibleSize() instead.'
      }]);
      // #endregion deprecation on view
      // deprecate capabilities field
      markAsWarning(sys, 'sys', [{
        name: 'capabilities',
        suggest: 'please use sys.hasFeature() method instead.'
      }]);

      // deprecate languageCode field
      replaceProperty(sys, 'sys', ['UNKNOWN', 'ENGLISH', 'CHINESE', 'FRENCH', 'ITALIAN', 'GERMAN', 'SPANISH', 'DUTCH', 'RUSSIAN', 'KOREAN', 'JAPANESE', 'HUNGARIAN', 'PORTUGUESE', 'ARABIC', 'NORWEGIAN', 'POLISH', 'TURKISH', 'UKRAINIAN', 'ROMANIAN', 'BULGARIAN'].map(function (item) {
        return {
          name: "LANGUAGE_" + item,
          newName: item,
          target: sys.Language,
          targetName: 'sys.Language'
        };
      }));

      // deprecate os field
      replaceProperty(sys, 'sys', ['UNKNOWN', 'IOS', 'ANDROID', 'WINDOWS', 'LINUX', 'OSX'].map(function (item) {
        return {
          name: "OS_" + item,
          newName: item,
          target: sys.OS,
          targetName: 'sys.OS'
        };
      }));

      // deprecate browserType field
      replaceProperty(sys, 'sys', ['UNKNOWN', 'WECHAT', 'ANDROID', 'IE', 'EDGE', 'QQ', 'MOBILE_QQ', 'UC', 'UCBS', 'BAIDU_APP', 'BAIDU', 'MAXTHON', 'OPERA', 'OUPENG', 'MIUI', 'FIREFOX', 'SAFARI', 'CHROME', 'LIEBAO', 'QZONE', 'SOUGOU', 'HUAWEI'].map(function (item) {
        return {
          name: "BROWSER_TYPE_" + item,
          newName: item,
          target: sys.BrowserType,
          targetName: 'sys.BrowserType'
        };
      }));
      replaceProperty(sys, 'sys', [{
        name: 'BROWSER_TYPE_360',
        newName: 'BROWSER_360',
        target: sys.BrowserType,
        targetName: 'sys.BrowserType'
      }]);

      // deprecate platform field
      replaceProperty(sys, 'sys', ['UNKNOWN', 'EDITOR_PAGE', 'EDITOR_CORE', 'MOBILE_BROWSER', 'DESKTOP_BROWSER', 'WIN32', 'MACOS', 'IOS', 'ANDROID', 'OHOS', 'WECHAT_GAME', 'BAIDU_MINI_GAME', 'XIAOMI_QUICK_GAME', 'ALIPAY_MINI_GAME', 'BYTEDANCE_MINI_GAME', 'OPPO_MINI_GAME', 'VIVO_MINI_GAME', 'HUAWEI_QUICK_GAME', 'COCOSPLAY', 'LINKSURE_MINI_GAME', 'QTT_MINI_GAME'].map(function (item) {
        return {
          name: item,
          target: sys.Platform,
          targetName: 'sys.Platform'
        };
      }));

      // remove platform field
      replaceProperty(sys, 'sys', [{
        name: 'IPHONE',
        newName: 'IOS',
        target: sys.Platform,
        targetName: 'sys.Platform'
      }, {
        name: 'IPAD',
        newName: 'IOS',
        target: sys.Platform,
        targetName: 'sys.Platform'
      }]);
      removeProperty(sys, 'sys', ['LINUX', 'BLACKBERRY', 'NACL', 'EMSCRIPTEN', 'TIZEN', 'WINRT', 'WP8', 'QQ_PLAY', 'FB_PLAYABLE_ADS'].map(function (item) {
        return {
          name: item
        };
      }));
      replaceProperty(sys, 'sys', [{
        name: 'windowPixelResolution',
        target: screen,
        targetName: 'screen',
        newName: 'windowSize'
      }]);

      // deprecate screen API
      markAsWarning(screen, 'screen', [{
        name: 'autoFullScreen',
        suggest: 'please use screen.requestFullScreen() instead.'
      }, {
        name: 'disableAutoFullScreen'
      }]);
    }
  };
});