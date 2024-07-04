System.register("q-bundled:///fs/cocos/scene-graph/scene.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../core/data/object.js", "../core/platform/debug.js", "./node.js", "../core/global-exports.js", "./scene-globals.js", "./prefab/utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, EDITOR, TEST, CCObject, assert, getError, Node, legacyCC, SceneGlobals, applyTargetOverrides, expandNestedPrefabInstanceNode, _dec, _class, _class2, _initializer, _initializer2, Scene;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreDataObjectJs) {
      CCObject = _coreDataObjectJs.CCObject;
    }, function (_corePlatformDebugJs) {
      assert = _corePlatformDebugJs.assert;
      getError = _corePlatformDebugJs.getError;
    }, function (_nodeJs) {
      Node = _nodeJs.Node;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_sceneGlobalsJs) {
      SceneGlobals = _sceneGlobalsJs.SceneGlobals;
    }, function (_prefabUtilsJs) {
      applyTargetOverrides = _prefabUtilsJs.applyTargetOverrides;
      expandNestedPrefabInstanceNode = _prefabUtilsJs.expandNestedPrefabInstanceNode;
    }],
    execute: function () {
      /**
       * @en
       * Scene is a subclass of [[Node]], composed by nodes, representing the root of a runnable environment in the game.
       * It's managed by [[Director]] and user can switch from a scene to another using [[Director.loadScene]]
       * @zh
       * Scene 是 [[Node]] 的子类，由节点所构成，代表着游戏中可运行的某一个整体环境。
       * 它由 [[Director]] 管理，用户可以使用 [[Director.loadScene]] 来切换场景
       */
      _export("Scene", Scene = (_dec = ccclass('cc.Scene'), _dec(_class = (_class2 = class Scene extends Node {
        /**
         * @en The renderer scene, normally user don't need to use it
         * @zh 渲染层场景，一般情况下用户不需要关心它
         */
        get renderScene() {
          return this._renderScene;
        }
        get globals() {
          return this._globals;
        }

        /**
         * @en Indicates whether all (directly or indirectly) static referenced assets of this scene are releasable by default after scene unloading.
         * @zh 指示该场景中直接或间接静态引用到的所有资源是否默认在场景切换后自动释放。
         */

        _updateScene() {
          this._scene = this;
        }
        constructor(name) {
          super(name);
          this.autoReleaseAssets = _initializer && _initializer();
          /**
           * @en Per-scene level rendering info
           * @zh 场景级别的渲染信息
           *
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._globals = _initializer2 && _initializer2();
          this.dependAssets = null;
          // cache all depend assets for auto release
          this._renderScene = null;
          this._inited = void 0;
          this._prefabSyncedInLiveReload = false;
          this._activeInHierarchy = false;
          if (legacyCC.director && legacyCC.director.root) {
            this._renderScene = legacyCC.director.root.createScene({});
          }
          this._inited = legacyCC.game ? !legacyCC.game._isCloning : true;
        }

        /**
         * @en Destroy the current scene and all its nodes, this action won't destroy related assets
         * @zh 销毁当前场景中的所有节点，这个操作不会销毁资源
         */
        destroy() {
          const success = CCObject.prototype.destroy.call(this);
          if (success) {
            const children = this._children;
            for (let i = 0; i < children.length; ++i) {
              children[i].active = false;
            }
          }
          if (this._renderScene) legacyCC.director.root.destroyScene(this._renderScene);
          this._active = false;
          this._activeInHierarchy = false;
          return success;
        }

        /**
         * @en Only for compatibility purpose, user should not add any component to the scene
         * @zh 仅为兼容性保留，用户不应该在场景上直接添加任何组件
         */

        /**
         * @en Only for compatibility purpose, user should not add any component to the scene
         * @zh 仅为兼容性保留，用户不应该在场景上直接添加任何组件
         */
        addComponent() {
          throw new Error(getError(3822));
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _onHierarchyChanged() {}

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _onPostActivated(active) {}

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _onBatchCreated(dontSyncChildPrefab) {
          const len = this._children.length;
          for (let i = 0; i < len; ++i) {
            this._children[i]._siblingIndex = i;
            this._children[i]._onBatchCreated(dontSyncChildPrefab);
          }
        }

        /**
         * @en
         * Refer to [[Node.updateWorldTransform]]
         * @zh
         * 参考 [[Node.updateWorldTransform]]
         */
        updateWorldTransform() {}

        // life-cycle call backs

        _instantiate() {}

        /**
         * @engineInternal
         */
        _load() {
          if (!this._inited) {
            if (TEST) {
              assert(!this._activeInHierarchy, 'Should deactivate ActionManager by default');
            }
            expandNestedPrefabInstanceNode(this);
            applyTargetOverrides(this);
            this._onBatchCreated(EDITOR && this._prefabSyncedInLiveReload);
            this._inited = true;
          }
          // static method can't use this as parameter type
          this.walk(Node._setScene);
        }

        /**
         * @engineInternal
         */
        _activate(active = true) {
          if (EDITOR) {
            // register all nodes to editor
            // TODO: `_registerIfAttached` is injected property
            // issue: https://github.com/cocos/cocos-engine/issues/14643
            this._registerIfAttached(active);
          }
          legacyCC.director._nodeActivator.activateNode(this, active);
          // The test environment does not currently support the renderer
          if (!TEST) {
            this._globals.activate(this);
          }
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "globals", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "globals"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "autoReleaseAssets", [serializable, editable], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_globals", [serializable], function () {
        return new SceneGlobals();
      })), _class2)) || _class));
      legacyCC.Scene = Scene;
    }
  };
});