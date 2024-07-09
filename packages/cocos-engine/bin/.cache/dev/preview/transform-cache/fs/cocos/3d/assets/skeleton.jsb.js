System.register("q-bundled:///fs/cocos/3d/assets/skeleton.jsb.js", ["../../core/index.js", "../../asset/assets/asset.js", "../../native-binding/decorators.js"], function (_export, _context) {
  "use strict";

  var CCString, cclegacy, Mat4, Asset, patch_cc_Skeleton, Skeleton, skeletonProto, oldSkeletonProtoOnLoaded;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
      CCString = _coreIndexJs.CCString;
      cclegacy = _coreIndexJs.cclegacy;
      Mat4 = _coreIndexJs.Mat4;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_nativeBindingDecoratorsJs) {
      patch_cc_Skeleton = _nativeBindingDecoratorsJs.patch_cc_Skeleton;
    }],
    execute: function () {
      _export("Skeleton", Skeleton = jsb.Skeleton);
      cclegacy.Skeleton = Skeleton;
      skeletonProto = Skeleton.prototype;
      Object.defineProperty(skeletonProto, 'bindposes', {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this._bindposes;
        },
        set: function set(v) {
          this._bindposes = v;
          this._setBindposes(v);
        }
      });
      skeletonProto._ctor = function () {
        jsb.Asset.prototype._ctor.apply(this, arguments);
        this._bindposes = [];
      };
      skeletonProto.destroy = function () {
        var _cclegacy$director$ro, _cclegacy$director$ro2;
        (_cclegacy$director$ro = cclegacy.director.root) === null || _cclegacy$director$ro === void 0 ? void 0 : (_cclegacy$director$ro2 = _cclegacy$director$ro.dataPoolManager) === null || _cclegacy$director$ro2 === void 0 ? void 0 : _cclegacy$director$ro2.releaseSkeleton(this);
        return Asset.prototype.destroy.call(this);
      };
      oldSkeletonProtoOnLoaded = skeletonProto.onLoaded;
      skeletonProto.onLoaded = function () {
        this._setBindposes(this._bindposes);
        oldSkeletonProtoOnLoaded.call(this);
      };

      // handle meta data, it is generated automatically
      patch_cc_Skeleton({
        Skeleton: Skeleton,
        CCString: CCString,
        Mat4: Mat4
      });
    }
  };
});