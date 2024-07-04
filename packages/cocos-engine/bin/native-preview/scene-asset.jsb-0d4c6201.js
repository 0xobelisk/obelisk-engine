System.register(['./index-ce98320e.js', './builtin-res-mgr.jsb-c9e8e53a.js', './node-event-18d96a1b.js', './decorators-b63b63a2.js'], (function (exports) {
    'use strict';
    var legacyCC, Filter, PixelFormat, WrapMode, patch_cc_RenderTexture, patch_cc_SceneAsset;
    return {
        setters: [function (module) {
            legacyCC = module.l;
        }, function (module) {
            Filter = module.aR;
            PixelFormat = module.aS;
            WrapMode = module.aT;
        }, function () {}, function (module) {
            patch_cc_RenderTexture = module.L;
            patch_cc_SceneAsset = module.M;
        }],
        execute: (function () {

            const renderTextureProto = jsb.RenderTexture.prototype;
            const textureBaseProto = jsb.TextureBase.prototype;
            renderTextureProto.createNode = null;
            const RenderTexture = exports('R', jsb.RenderTexture);
            RenderTexture.Filter = Filter;
            RenderTexture.PixelFormat = PixelFormat;
            RenderTexture.WrapMode = WrapMode;
            renderTextureProto._serialize = function (ctxForExporting) {
              return {};
            };
            renderTextureProto._deserialize = function (serializedData, handle) {
              const data = serializedData;
              this._width = data.w;
              this._height = data.h;
              this._name = data.n;
              textureBaseProto._deserialize.call(this, data.base, handle);
            };
            const oldReadPixels = renderTextureProto.readPixels;
            renderTextureProto.readPixels = function readPixels(x, y, width, height, buffer) {
              x = x || 0;
              y = y || 0;
              width = width || this.width;
              height = height || this.height;
              let tmpBuffer = oldReadPixels.call(this, x, y, width, height);
              if (tmpBuffer.length == 0) {
                return null;
              }
              buffer = tmpBuffer;
              return buffer;
            };
            legacyCC.RenderTexture = jsb.RenderTexture;
            patch_cc_RenderTexture({
              RenderTexture
            });

            const SceneAsset = exports('S', jsb.SceneAsset);
            legacyCC.SceneAsset = SceneAsset;
            const sceneAssetProto = SceneAsset.prototype;
            Object.defineProperty(sceneAssetProto, 'scene', {
              enumerable: true,
              configurable: true,
              get() {
                if (!this._scene) {
                  this._scene = this.getScene();
                }
                return this._scene;
              },
              set(v) {
                this._scene = v;
                this.setScene(v);
              }
            });
            sceneAssetProto._ctor = function () {
              jsb.Asset.prototype._ctor.apply(this, arguments);
              this._scene = null;
            };
            patch_cc_SceneAsset({
              SceneAsset
            });

        })
    };
}));
