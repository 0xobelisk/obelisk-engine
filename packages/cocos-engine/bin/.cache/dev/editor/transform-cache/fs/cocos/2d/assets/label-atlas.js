System.register("q-bundled:///fs/cocos/2d/assets/label-atlas.js", ["../../core/data/decorators/index.js", "./bitmap-font.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, BitmapFont, cclegacy, _dec, _class, LabelAtlas;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_bitmapFontJs) {
      BitmapFont = _bitmapFontJs.BitmapFont;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en Class for LabelAtlas handling.
       * @zh 艺术数字字体资源类。
       *
       */
      _export("LabelAtlas", LabelAtlas = (_dec = ccclass('cc.LabelAtlas'), _dec(_class = class LabelAtlas extends BitmapFont {}) || _class));
      cclegacy.LabelAtlas = LabelAtlas;
    }
  };
});