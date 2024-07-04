System.register("q-bundled:///fs/cocos/particle-2d/particle-asset.js", ["../asset/assets/asset.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var Asset, cclegacy, _decorator, _dec, _class, _class2, _initializer, ccclass, serializable, editable, ParticleAsset;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      _decorator = _coreIndexJs._decorator;
    }],
    execute: function () {
      ({
        ccclass,
        serializable,
        editable
      } = _decorator);
      /**
       * @en Class for 2D particle asset handling.
       * @zh 2D 粒子资产
       * @class ParticleAsset
       * @extends Asset
       */
      _export("ParticleAsset", ParticleAsset = (_dec = ccclass('cc.ParticleAsset'), _dec(_class = (_class2 = class ParticleAsset extends Asset {
        constructor(...args) {
          super(...args);
          this.spriteFrame = _initializer && _initializer();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "spriteFrame", [serializable, editable], function () {
        return null;
      })), _class2)) || _class));
      cclegacy.ParticleAsset = ParticleAsset;
    }
  };
});