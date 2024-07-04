System.register("q-bundled:///fs/cocos/web-view/web-view-impl.js", ["../core/global-exports.js", "./web-view-enums.js", "../2d/framework/index.js", "../game/director.js"], function (_export, _context) {
  "use strict";

  var legacyCC, EventType, UITransform, director, WebViewImpl;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_webViewEnumsJs) {
      EventType = _webViewEnumsJs.EventType;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
    }],
    execute: function () {
      _export("WebViewImpl", WebViewImpl = /*#__PURE__*/function () {
        function WebViewImpl(component) {
          this._componentEventList = new Map();
          this._state = EventType.NONE;
          this._wrapper = void 0;
          // Fix iframe display problem in ios.
          this._webview = null;
          this._loaded = false;
          this._forceUpdate = false;
          this._component = null;
          this._uiTrans = null;
          this._node = null;
          this._w = 0;
          this._h = 0;
          this._m00 = 0;
          this._m01 = 0;
          this._m04 = 0;
          this._m05 = 0;
          this._m12 = 0;
          this._m13 = 0;
          this._component = component;
          this._node = component.node;
          this._uiTrans = component.node.getComponent(UITransform);
          this.reset();
          this.createWebView();
        }
        var _proto = WebViewImpl.prototype;
        _proto.reset = function reset() {
          this._wrapper = null;
          this._webview = null;
          this._loaded = false;
          this._w = 0;
          this._h = 0;
          this._m00 = 0;
          this._m01 = 0;
          this._m04 = 0;
          this._m05 = 0;
          this._m12 = 0;
          this._m13 = 0;
          this._state = EventType.NONE;
          this._forceUpdate = false;
        };
        _proto.dispatchEvent = function dispatchEvent(key) {
          var callback = this._componentEventList.get(key);
          if (callback) {
            this._state = key;
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            callback.call(this, args);
          }
        };
        _proto.destroy = function destroy() {
          this.removeWebView();
          this._wrapper = null;
          this._webview = null;
          this._loaded = false;
          this._component = null;
          this._uiTrans = null;
          this._forceUpdate = false;
          this._componentEventList.clear();
        };
        _createClass(WebViewImpl, [{
          key: "loaded",
          get: function get() {
            return this._loaded;
          }
        }, {
          key: "componentEventList",
          get: function get() {
            return this._componentEventList;
          }
        }, {
          key: "webview",
          get: function get() {
            return this._webview;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "UICamera",
          get: function get() {
            return director.root.batcher2D.getFirstRenderCamera(this._node);
          }
        }]);
        return WebViewImpl;
      }());
      legacyCC.internal.WebViewImpl = WebViewImpl;
    }
  };
});