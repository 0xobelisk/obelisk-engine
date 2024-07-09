System.register("q-bundled:///fs/cocos/2d/assets/font.js", ["../../core/data/decorators/index.js", "../../asset/assets/index.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, Asset, cclegacy, _dec, _class, Font;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("Font", Font = (_dec = ccclass('cc.Font'), _dec(_class = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(Font, _Asset);
        function Font() {
          return _Asset.apply(this, arguments) || this;
        }
        return Font;
      }(Asset)) || _class));
      cclegacy.Font = Font;
    }
  };
});