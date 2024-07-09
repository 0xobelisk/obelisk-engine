System.register("q-bundled:///fs/cocos/asset/assets/scripts.js", ["../../core/data/decorators/index.js", "./asset.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, Asset, cclegacy, _dec, _class, _dec2, _class2, _dec3, _class3, Script, JavaScript, TypeScript;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_assetJs) {
      Asset = _assetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en The script asset base class
       * @zh 脚本资源基类。
       */
      _export("Script", Script = (_dec = ccclass('cc.Script'), _dec(_class = class Script extends Asset {}) || _class));
      cclegacy._Script = Script;

      /**
       * @en JavaScript asset.
       * @zh JavaScript 脚本资源。
       */
      _export("JavaScript", JavaScript = (_dec2 = ccclass('cc.JavaScript'), _dec2(_class2 = class JavaScript extends Script {}) || _class2));
      cclegacy._JavaScript = JavaScript;

      /**
       * @en TypeScript asset
       * @zh TypeScript 脚本资源。
       */
      _export("TypeScript", TypeScript = (_dec3 = ccclass('cc.TypeScript'), _dec3(_class3 = class TypeScript extends Script {}) || _class3));
      cclegacy._TypeScript = TypeScript;
    }
  };
});