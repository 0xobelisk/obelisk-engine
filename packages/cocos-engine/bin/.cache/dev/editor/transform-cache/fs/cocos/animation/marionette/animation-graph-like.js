System.register("q-bundled:///fs/cocos/animation/marionette/animation-graph-like.js", ["../../core/data/decorators/index.js", "../../asset/assets/asset.js", "../define.js"], function (_export, _context) {
  "use strict";

  var ccclass, Asset, CLASS_NAME_PREFIX_ANIM, _dec, _class, AnimationGraphLike;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      /**
       * @zh `AnimationGraph` 和 `AnimationGraphVariant` 的内部共同基类，
       * 仅用于特殊目的，不应另作它用，也不应导出为公开接口。
       * @en The common base class of `AnimationGraph` and `AnimationGraphVariant`
       * which exists for special purpose and should not be used otherwise and should not be exported.
       *
       * @internal This class serves as the editor switch of
       * animation graph asset and animation graph variant asset,
       * especially as the `graph` property on animation controller component.
       */
      _export("AnimationGraphLike", AnimationGraphLike = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}AnimationGraphLike`), _dec(_class = class AnimationGraphLike extends Asset {}) || _class));
    }
  };
});