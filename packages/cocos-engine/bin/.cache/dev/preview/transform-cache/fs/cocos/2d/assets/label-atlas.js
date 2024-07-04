System.register("q-bundled:///fs/cocos/2d/assets/label-atlas.js", ["../../core/data/decorators/index.js", "./bitmap-font.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, BitmapFont, cclegacy, _dec, _class, LabelAtlas;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("LabelAtlas", LabelAtlas = (_dec = ccclass('cc.LabelAtlas'), _dec(_class = /*#__PURE__*/function (_BitmapFont) {
        _inheritsLoose(LabelAtlas, _BitmapFont);
        function LabelAtlas() {
          return _BitmapFont.apply(this, arguments) || this;
        }
        return LabelAtlas;
      }(BitmapFont)) || _class));
      cclegacy.LabelAtlas = LabelAtlas;
    }
  };
});