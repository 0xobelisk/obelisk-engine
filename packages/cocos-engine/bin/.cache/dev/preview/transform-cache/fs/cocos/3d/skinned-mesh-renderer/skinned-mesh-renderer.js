System.register("q-bundled:///fs/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.js", ["../../core/data/decorators/index.js", "../assets/skeleton.js", "../../scene-graph/node.js", "../framework/mesh-renderer.js", "../../core/index.js", "../models/skinning-model.js", "../models/baked-skinning-model.js"], function (_export, _context) {
  "use strict";

  var ccclass, executeInEditMode, executionOrder, help, menu, type, Skeleton, Node, MeshRenderer, cclegacy, assertIsTrue, SkinningModel, BakedSkinningModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _initializer, _initializer2, SkinnedMeshRenderer;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_assetsSkeletonJs) {
      Skeleton = _assetsSkeletonJs.Skeleton;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_frameworkMeshRendererJs) {
      MeshRenderer = _frameworkMeshRendererJs.MeshRenderer;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_modelsSkinningModelJs) {
      SkinningModel = _modelsSkinningModelJs.SkinningModel;
    }, function (_modelsBakedSkinningModelJs) {
      BakedSkinningModel = _modelsBakedSkinningModelJs.BakedSkinningModel;
    }],
    execute: function () {
      /**
       * @en The skinned mesh renderer component.
       * @zh 蒙皮网格渲染器组件。
       */
      _export("SkinnedMeshRenderer", SkinnedMeshRenderer = (_dec = ccclass('cc.SkinnedMeshRenderer'), _dec2 = help('i18n:cc.SkinnedMeshRenderer'), _dec3 = executionOrder(100), _dec4 = menu('Mesh/SkinnedMeshRenderer'), _dec5 = type(Skeleton), _dec6 = type(Node), _dec7 = type(Skeleton), _dec8 = type(Node), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_MeshRenderer) {
        _inheritsLoose(SkinnedMeshRenderer, _MeshRenderer);
        function SkinnedMeshRenderer() {
          var _this;
          _this = _MeshRenderer.call(this) || this;
          _this._skeleton = _initializer && _initializer();
          _this._skinningRoot = _initializer2 && _initializer2();
          _this._clip = null;
          /**
           * Set associated animation.
           * @internal This method only friends to skeletal animation component.
           */
          _this.associatedAnimation = null;
          _this._modelType = BakedSkinningModel;
          return _this;
        }
        var _proto = SkinnedMeshRenderer.prototype;
        _proto.onLoad = function onLoad() {
          _MeshRenderer.prototype.onLoad.call(this);
          this._tryBindAnimation();
        };
        _proto.onDestroy = function onDestroy() {
          if (this.associatedAnimation) {
            this.associatedAnimation.notifySkinnedMeshRemoved(this);
            assertIsTrue(this.associatedAnimation === null);
          }
          _MeshRenderer.prototype.onDestroy.call(this);
        };
        _proto.uploadAnimation = function uploadAnimation(clip) {
          this._clip = clip;
          if (this.model && this.model.uploadAnimation) {
            this.model.uploadAnimation(clip);
          }
        }

        /**
         * Set if bake mode should be used.
         * @internal This method only friends to skeletal animation component.
         */;
        _proto.setUseBakedAnimation = function setUseBakedAnimation(val, force) {
          if (val === void 0) {
            val = true;
          }
          if (force === void 0) {
            force = false;
          }
          var modelType = val ? BakedSkinningModel : SkinningModel;
          if (!force && this._modelType === modelType) {
            return;
          }
          this._modelType = modelType;
          if (this._model) {
            cclegacy.director.root.destroyModel(this._model);
            this._model = null;
            this._models.length = 0;
            this._updateModels();
            this._updateCastShadow();
            this._updateReceiveShadow();
            this._updateUseLightProbe();
            if (this.enabledInHierarchy) {
              this._attachToScene();
            }
          }
        };
        _proto.setSharedMaterial = function setSharedMaterial(material, index) {
          _MeshRenderer.prototype.setSharedMaterial.call(this, material, index);
          if (this._modelType === SkinningModel) {
            this.getMaterialInstance(index);
          }
        };
        _proto._updateModelParams = function _updateModelParams() {
          this._update(); // should bind skeleton before super create pso
          _MeshRenderer.prototype._updateModelParams.call(this);
        };
        _proto._tryBindAnimation = function _tryBindAnimation() {
          var skinningRoot = this._skinningRoot;
          if (!skinningRoot) {
            return;
          }
          var skinningRootIsParent = false;
          for (var current = this.node; current; current = current.parent) {
            if (current === skinningRoot) {
              skinningRootIsParent = true;
              break;
            }
          }
          if (!skinningRootIsParent) {
            return;
          }
          var animation = skinningRoot.getComponent('cc.SkeletalAnimation');
          if (animation && animation.enabledInHierarchy) {
            animation.notifySkinnedMeshAdded(this);
          } else {
            this.setUseBakedAnimation(false);
          }
        };
        _proto._update = function _update() {
          if (this.model) {
            this.model.bindSkeleton(this._skeleton, this._skinningRoot, this._mesh);
            if (this.model.uploadAnimation) {
              this.model.uploadAnimation(this._clip);
            }
          }
        };
        _createClass(SkinnedMeshRenderer, [{
          key: "skeleton",
          get:
          /**
           * @en The skeleton asset.
           * @zh 骨骼资源。
           */
          function get() {
            return this._skeleton;
          },
          set: function set(val) {
            if (val === this._skeleton) {
              return;
            }
            this._skeleton = val;
            this._update();
          }

          /**
           * @en The skinning root. (The node where the controlling Animation is located)
           * @zh 骨骼根节点的引用，对应控制此模型的动画组件所在节点。
           */
        }, {
          key: "skinningRoot",
          get: function get() {
            return this._skinningRoot;
          },
          set: function set(value) {
            if (value === this._skinningRoot) {
              return;
            }
            this._skinningRoot = value;
            this._tryBindAnimation();
            this._update();
          }
        }, {
          key: "model",
          get: function get() {
            return this._model;
          }
        }]);
        return SkinnedMeshRenderer;
      }(MeshRenderer), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_skeleton", [_dec5], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_skinningRoot", [_dec6], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "skeleton", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "skeleton"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "skinningRoot", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "skinningRoot"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});