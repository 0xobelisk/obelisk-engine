System.register("q-bundled:///fs/cocos/misc/prefab-link.js", ["../core/index.js", "../scene-graph/component.js", "../scene-graph/prefab/index.js"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Prefab, _dec, _dec2, _dec3, _class, _class2, _initializer, ccclass, serializable, type, visible, PrefabLink;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_sceneGraphPrefabIndexJs) {
      Prefab = _sceneGraphPrefabIndexJs.Prefab;
    }],
    execute: function () {
      ({
        ccclass,
        serializable,
        type,
        visible
      } = _decorator);
      /**
       * @en
       * Since the new Prefab system is not yet complete, the prefab that has a large difference with prefab asset cannot be automatically migrated.
       * This component is used to save the relationship between the node with the referenced prefab asset in the old Prefab system.
       * When the new Prefab system is complete, it will be automatically migrated to the new Prefab system.
       *
       * @zh
       * PrefabLink
       * 由于新的 Prefab 系统还不完善，所以旧的 Prefab 系统中和 Prefab 资源差异过大的 Prefab 无法实现自动迁移。
       * 此组件用于保存在旧 Prefab 系统中这个节点关联的 Prefab 资源，等新的 Prefab 系统完善，会自动迁移到新的 Prefab 系统上。
       */
      _export("PrefabLink", PrefabLink = (_dec = ccclass('cc.PrefabLink'), _dec2 = type(Prefab), _dec3 = visible(true), _dec(_class = (_class2 = class PrefabLink extends Component {
        constructor(...args) {
          super(...args);
          this.prefab = _initializer && _initializer();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "prefab", [_dec2, serializable, _dec3], function () {
        return null;
      })), _class2)) || _class));
    }
  };
});