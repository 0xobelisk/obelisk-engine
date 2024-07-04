System.register("q-bundled:///fs/cocos/asset/assets/scene-asset.js", ["../../core/data/decorators/index.js", "../../scene-graph/scene.js", "./asset.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, Scene, Asset, cclegacy, _dec, _class, _class2, _initializer, SceneAsset;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_sceneGraphSceneJs) {
      Scene = _sceneGraphSceneJs.Scene;
    }, function (_assetJs) {
      Asset = _assetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en Class for scene loading.
       * @zh 场景资源类。
       *
       */
      _export("SceneAsset", SceneAsset = (_dec = ccclass('cc.SceneAsset'), _dec(_class = (_class2 = class SceneAsset extends Asset {
        constructor(...args) {
          super(...args);
          /**
           * @en The scene node
           * @zh 场景节点。
           */
          this.scene = _initializer && _initializer();
        }
        initDefault(uuid) {
          super.initDefault(uuid);
          this.scene = new Scene('New Scene');
        }
        validate() {
          return !!this.scene;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "scene", [editable, serializable], function () {
        return null;
      })), _class2)) || _class));
      cclegacy.SceneAsset = SceneAsset;
    }
  };
});