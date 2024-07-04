System.register("q-bundled:///fs/cocos/2d/assets/font.js", ["../../core/data/decorators/index.js", "../../asset/assets/index.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, Asset, cclegacy, _dec, _class, Font;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_assetAssetsIndexJs) {
      Asset = _assetAssetsIndexJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en Class for Font handling.
       * @zh 字体资源类。
       */
      _export("Font", Font = (_dec = ccclass('cc.Font'), _dec(_class = class Font extends Asset {}) || _class));
      cclegacy.Font = Font;
    }
  };
});