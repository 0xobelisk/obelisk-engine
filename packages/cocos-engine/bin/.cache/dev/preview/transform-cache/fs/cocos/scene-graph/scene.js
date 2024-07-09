System.register("q-bundled:///fs/cocos/scene-graph/scene.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../core/data/object.js", "../core/platform/debug.js", "./node.js", "../core/global-exports.js", "./scene-globals.js", "./prefab/utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, EDITOR, TEST, CCObject, assert, getError, Node, legacyCC, SceneGlobals, applyTargetOverrides, expandNestedPrefabInstanceNode, _dec, _class, _class2, _initializer, _initializer2, Scene;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("Scene", Scene = (_dec = ccclass('cc.Scene'), _dec(_class = (_class2 = /*#__PURE__*/function (_Node) {
        _inheritsLoose(Scene, _Node);
        var _proto = Scene.prototype;
        _proto._updateScene = function _updateScene() {
          this._scene = this;
        };
        function Scene(name) {
          var _this;
          _this = _Node.call(this, name) || this;
          /**
           * @en Indicates whether all (directly or indirectly) static referenced assets of this scene are releasable by default after scene unloading.
           * @zh 指示该场景中直接或间接静态引用到的所有资源是否默认在场景切换后自动释放。
           */
          _this.autoReleaseAssets = _initializer && _initializer();
          /**
           * @en Per-scene level rendering info
           * @zh 场景级别的渲染信息
           *
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._globals = _initializer2 && _initializer2();
          _this.dependAssets = null;
          // cache all depend assets for auto release
          _this._renderScene = null;
          _this._inited = void 0;
          _this._prefabSyncedInLiveReload = false;
          _this._activeInHierarchy = false;
          if (legacyCC.director && legacyCC.director.root) {
            _this._renderScene = legacyCC.director.root.createScene({});
          }
          _this._inited = legacyCC.game ? !legacyCC.game._isCloning : true;
          return _this;
        }

        /**
         * @en Destroy the current scene and all its nodes, this action won't destroy related assets
         * @zh 销毁当前场景中的所有节点，这个操作不会销毁资源
         */
        _proto.destroy = function destroy() {
          var success = CCObject.prototype.destroy.call(this);
          if (success) {
            var children = this._children;
            for (var i = 0; i < children.length; ++i) {
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
         */;
        /**
         * @en Only for compatibility purpose, user should not add any component to the scene
         * @zh 仅为兼容性保留，用户不应该在场景上直接添加任何组件
         */
        _proto.addComponent = function addComponent() {
          throw new Error(getError(3822));
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._onHierarchyChanged = function _onHierarchyChanged() {}

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._onPostActivated = function _onPostActivated(active) {}

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._onBatchCreated = function _onBatchCreated(dontSyncChildPrefab) {
          var len = this._children.length;
          for (var i = 0; i < len; ++i) {
            this._children[i]._siblingIndex = i;
            this._children[i]._onBatchCreated(dontSyncChildPrefab);
          }
        }

        /**
         * @en
         * Refer to [[Node.updateWorldTransform]]
         * @zh
         * 参考 [[Node.updateWorldTransform]]
         */;
        _proto.updateWorldTransform = function updateWorldTransform() {}

        // life-cycle call backs
        ;
        _proto._instantiate = function _instantiate() {}

        /**
         * @engineInternal
         */;
        _proto._load = function _load() {
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
         */;
        _proto._activate = function _activate(active) {
          if (active === void 0) {
            active = true;
          }
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
        };
        _createClass(Scene, [{
          key: "renderScene",
          get:
          /**
           * @en The renderer scene, normally user don't need to use it
           * @zh 渲染层场景，一般情况下用户不需要关心它
           */
          function get() {
            return this._renderScene;
          }
        }, {
          key: "globals",
          get: function get() {
            return this._globals;
          }
        }]);
        return Scene;
      }(Node), (_applyDecoratedDescriptor(_class2.prototype, "globals", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "globals"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "autoReleaseAssets", [serializable, editable], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_globals", [serializable], function () {
        return new SceneGlobals();
      })), _class2)) || _class));
      legacyCC.Scene = Scene;
    }
  };
});