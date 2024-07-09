System.register("q-bundled:///fs/cocos/asset/assets/text-asset.js", ["../../core/data/decorators/index.js", "./asset.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, Asset, cclegacy, _dec, _class, _class2, _initializer, TextAsset;
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
       * @en The asset for text file.
       * @zh 文本资源。
       */
      _export("TextAsset", TextAsset = (_dec = ccclass('cc.TextAsset'), _dec(_class = (_class2 = class TextAsset extends Asset {
        constructor(...args) {
          super(...args);
          /**
           * @en The text content.
           * @zh 此资源包含的文本。
           */
          this.text = _initializer && _initializer();
        }
        toString() {
          return this.text;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "text", [serializable, editable], function () {
        return '';
      })), _class2)) || _class));
      cclegacy.TextAsset = TextAsset;
    }
  };
});