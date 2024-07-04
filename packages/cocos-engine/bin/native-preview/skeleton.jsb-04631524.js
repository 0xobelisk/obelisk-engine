System.register(['./index-ce98320e.js', './node-event-18d96a1b.js', './decorators-b63b63a2.js'], (function (exports) {
    'use strict';
    var legacyCC, CCString, Mat4, Asset, patch_cc_Skeleton;
    return {
        setters: [function (module) {
            legacyCC = module.l;
            CCString = module.aw;
            Mat4 = module.s;
        }, function (module) {
            Asset = module.A;
        }, function (module) {
            patch_cc_Skeleton = module.O;
        }],
        execute: (function () {

            const Skeleton = exports('S', jsb.Skeleton);
            legacyCC.Skeleton = Skeleton;
            const skeletonProto = Skeleton.prototype;
            Object.defineProperty(skeletonProto, 'bindposes', {
              enumerable: true,
              configurable: true,
              get() {
                return this._bindposes;
              },
              set(v) {
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
              (_cclegacy$director$ro = legacyCC.director.root) === null || _cclegacy$director$ro === void 0 ? void 0 : (_cclegacy$director$ro2 = _cclegacy$director$ro.dataPoolManager) === null || _cclegacy$director$ro2 === void 0 ? void 0 : _cclegacy$director$ro2.releaseSkeleton(this);
              return Asset.prototype.destroy.call(this);
            };
            const oldSkeletonProtoOnLoaded = skeletonProto.onLoaded;
            skeletonProto.onLoaded = function () {
              this._setBindposes(this._bindposes);
              oldSkeletonProtoOnLoaded.call(this);
            };
            patch_cc_Skeleton({
              Skeleton,
              CCString,
              Mat4
            });

        })
    };
}));
