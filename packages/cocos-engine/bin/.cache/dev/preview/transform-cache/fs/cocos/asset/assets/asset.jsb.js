System.register("q-bundled:///fs/cocos/asset/assets/asset.jsb.js", ["../../core/index.js", "../asset-manager/helper.js", "../../native-binding/decorators.js"], function (_export, _context) {
  "use strict";

  var cclegacy, js, path, jsbUtils, CallbacksInvoker, applyMixins, getUrlWithUuid, patch_cc_Asset, assetProto, Asset;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      js = _coreIndexJs.js;
      path = _coreIndexJs.path;
      jsbUtils = _coreIndexJs.jsbUtils;
      CallbacksInvoker = _coreIndexJs.CallbacksInvoker;
      applyMixins = _coreIndexJs.applyMixins;
    }, function (_assetManagerHelperJs) {
      getUrlWithUuid = _assetManagerHelperJs.getUrlWithUuid;
    }, function (_nativeBindingDecoratorsJs) {
      patch_cc_Asset = _nativeBindingDecoratorsJs.patch_cc_Asset;
    }],
    execute: function () {
      /**
       * @param error - null or the error info
       * @param node - the created node or null
       */
      applyMixins(jsb.Asset, [CallbacksInvoker, jsbUtils.ExtraEventMethods]);
      assetProto = jsb.Asset.prototype;
      assetProto._ctor = function () {
        this.loaded = true; // deprecated in v3.3
        this._ref = 0;
        this.__nativeRefs = {};
        this.__jsb_ref_id = undefined;
        this._iN$t = null;
        this.__editorExtras__ = {
          editorOnly: true
        };
        this._callbackTable = js.createMap(true);
        this._file = null;
        // for deserialization
        // _initializerDefineProperty(_this, "_native", _descriptor$1, _assertThisInitialized(_this));
      };

      Object.defineProperty(assetProto, '_nativeAsset', {
        get: function get() {
          return this._file;
        },
        set: function set(obj) {
          this._file = obj;
        }
      });
      Object.defineProperty(assetProto, 'nativeUrl', {
        get: function get() {
          if (!this._nativeUrl) {
            if (!this._native) return '';
            var name = this._native;
            if (name.charCodeAt(0) === 47) {
              // '/'
              // remove library tag
              // not imported in library, just created on-the-fly
              return name.slice(1);
            }
            if (name.charCodeAt(0) === 46) {
              // '.'
              // imported in dir where json exist
              this._nativeUrl = getUrlWithUuid(this._uuid, {
                nativeExt: name,
                isNative: true
              });
            } else {
              // imported in an independent dir
              this._nativeUrl = getUrlWithUuid(this._uuid, {
                __nativeName__: name,
                nativeExt: path.extname(name),
                isNative: true
              });
            }
          }
          return this._nativeUrl;
        }
      });
      Object.defineProperty(assetProto, 'refCount', {
        configurable: true,
        enumerable: true,
        get: function get() {
          return this._ref;
        }
      });
      assetProto.addRef = function () {
        this._ref++;
        this.addAssetRef();
        return this;
      };
      assetProto.decRef = function (autoRelease) {
        if (autoRelease === void 0) {
          autoRelease = true;
        }
        this.decAssetRef();
        if (this._ref > 0) {
          this._ref--;
        }
        if (autoRelease) {
          cclegacy.assetManager._releaseManager.tryRelease(this);
        }
        return this;
      };
      assetProto.toString = function () {
        return this.nativeUrl;
      };
      assetProto.createNode = null;
      _export("Asset", Asset = jsb.Asset);
      cclegacy.Asset = jsb.Asset;

      // handle meta data, it is generated automatically
      patch_cc_Asset({
        Asset: Asset
      });
    }
  };
});