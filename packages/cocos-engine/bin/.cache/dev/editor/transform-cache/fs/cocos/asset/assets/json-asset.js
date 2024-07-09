System.register("q-bundled:///fs/cocos/asset/assets/json-asset.js", ["../../core/data/decorators/index.js", "./asset.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, Asset, cclegacy, _dec, _class, _class2, _initializer, JsonAsset;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_assetJs) {
      Asset = _assetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en Json asset, it will automatically parse the json to a JS object.
       * @zh Json 资源。
       * Json 资源加载后将直接解析为对象。如果你希望获得 JSON 的原始文本，你需要使用文本资源（使用文件名后缀“.txt”）。
       */
      _export("default", JsonAsset = (_dec = ccclass('cc.JsonAsset'), _dec(_class = (_class2 = class JsonAsset extends Asset {
        constructor(...args) {
          super(...args);
          /**
           * @en The parsed JS object
           * @zh 解析后的对象。
           */
          this.json = _initializer && _initializer();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "json", [serializable, editable], function () {
        return null;
      })), _class2)) || _class));
      cclegacy.JsonAsset = JsonAsset;
    }
  };
});