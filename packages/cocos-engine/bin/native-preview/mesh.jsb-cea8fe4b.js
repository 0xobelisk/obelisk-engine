System.register(['./index-ce98320e.js', './decorators-b63b63a2.js'], (function (exports) {
    'use strict';
    var Vec3, legacyCC, patch_cc_Mesh;
    return {
        setters: [function (module) {
            Vec3 = module.n;
            legacyCC = module.l;
        }, function (module) {
            patch_cc_Mesh = module.N;
        }],
        execute: (function () {

            const Mesh = exports('M', jsb.Mesh);
            const IStructProto = jsb.Mesh.IStruct.prototype;
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
            const meshAssetProto = jsb.Mesh.prototype;
            meshAssetProto.createNode = null;
            const originOnLoaded = meshAssetProto.onLoaded;
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
              const meshStruct = this._struct;
              if (meshStruct) {
                if (meshStruct.vertexBundles.length !== 0 || meshStruct.primitives.length !== 0) {
                  this.setStruct(this._struct);
                }
              }
              this._struct = null;
              originOnLoaded.apply(this);
            };
            legacyCC.Mesh = jsb.Mesh;
            patch_cc_Mesh({
              Mesh
            });

        })
    };
}));
