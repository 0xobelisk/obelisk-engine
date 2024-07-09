System.register("q-bundled:///fs/cocos/3d/assets/mesh.jsb.js", ["../../core/index.js", "../../native-binding/decorators.js"], function (_export, _context) {
  "use strict";

  var cclegacy, Vec3, patch_cc_Mesh, Mesh, IStructProto, meshAssetProto, originOnLoaded;
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
      Vec3 = _coreIndexJs.Vec3;
    }, function (_nativeBindingDecoratorsJs) {
      patch_cc_Mesh = _nativeBindingDecoratorsJs.patch_cc_Mesh;
    }],
    execute: function () {
      _export("Mesh", Mesh = jsb.Mesh);
      IStructProto = jsb.Mesh.IStruct.prototype;
      Object.defineProperty(IStructProto, 'minPosition', {
        configurable: true,
        enumerable: true,
        get() {
          const r = this.getMinPosition();
          if (r) {
            if (!this._minPositionCache) {
              this._minPositionCache = new Vec3(r.x, r.y, r.z);
            } else {
              this._minPositionCache.set(r.x, r.y, r.z);
            }
          } else {
            this._minPositionCache = undefined;
          }
          return this._minPositionCache;
        },
        set(v) {
          this.setMinPosition(v);
        }
      });
      Object.defineProperty(IStructProto, 'maxPosition', {
        configurable: true,
        enumerable: true,
        get() {
          const r = this.getMaxPosition();
          if (r) {
            if (!this._maxPositionCache) {
              this._maxPositionCache = new Vec3(r.x, r.y, r.z);
            } else {
              this._maxPositionCache.set(r.x, r.y, r.z);
            }
          } else {
            this._maxPositionCache = undefined;
          }
          return this._maxPositionCache;
        },
        set(v) {
          this.setMaxPosition(v);
        }
      });
      meshAssetProto = jsb.Mesh.prototype;
      meshAssetProto.createNode = null;
      originOnLoaded = meshAssetProto.onLoaded;
      meshAssetProto._ctor = function () {
        jsb.Asset.prototype._ctor.apply(this, arguments);
        this._struct = {
          vertexBundles: [],
          primitives: []
        };
        this._minPosition = undefined;
        this._maxPosition = undefined;
      };
      Object.defineProperty(meshAssetProto, 'struct', {
        configurable: true,
        enumerable: true,
        get() {
          return this.getStruct();
        }
      });
      Object.defineProperty(meshAssetProto, 'minPosition', {
        configurable: true,
        enumerable: true,
        get() {
          const r = this.getMinPosition();
          if (r) {
            if (!this._minPosition) {
              this._minPosition = new Vec3(r.x, r.y, r.z);
            } else {
              this._minPosition.set(r.x, r.y, r.z);
            }
          } else {
            this._minPosition = undefined;
          }
          return this._minPosition;
        }
      });
      Object.defineProperty(meshAssetProto, 'maxPosition', {
        configurable: true,
        enumerable: true,
        get() {
          const r = this.getMaxPosition();
          if (r) {
            if (!this._maxPosition) {
              this._maxPosition = new Vec3(r.x, r.y, r.z);
            } else {
              this._maxPosition.set(r.x, r.y, r.z);
            }
          } else {
            this._maxPosition = undefined;
          }
          return this._maxPosition;
        }
      });
      meshAssetProto.onLoaded = function () {
        // might be undefined or null
        const meshStruct = this._struct;
        if (meshStruct) {
          // Synchronize to native if the struct contains valid values.
          if (meshStruct.vertexBundles.length !== 0 || meshStruct.primitives.length !== 0) {
            this.setStruct(this._struct);
          }
        }
        // Set to null to release memory in JS
        this._struct = null;
        originOnLoaded.apply(this);
      };
      cclegacy.Mesh = jsb.Mesh;

      // handle meta data, it is generated automatically
      patch_cc_Mesh({
        Mesh
      });
    }
  };
});