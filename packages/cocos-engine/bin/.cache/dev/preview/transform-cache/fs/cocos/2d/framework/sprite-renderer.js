System.register("q-bundled:///fs/cocos/2d/framework/sprite-renderer.js", ["../../core/data/decorators/index.js", "../../asset/asset-manager/index.js", "../../core/index.js", "../../rendering/define.js", "../../render-scene/scene/index.js", "../../scene-graph/node-enum.js", "../assets/sprite-frame.js", "../../misc/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, executeInEditMode, executionOrder, help, menu, serializable, type, visible, builtinResMgr, Color, Vec2, cclegacy, ModelLocalBindings, Model, TransformBit, SpriteFrame, ModelRenderer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, SpriteMode, SpriteRenderer;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Vec2 = _coreIndexJs.Vec2;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderingDefineJs) {
      ModelLocalBindings = _renderingDefineJs.ModelLocalBindings;
    }, function (_renderSceneSceneIndexJs) {
      Model = _renderSceneSceneIndexJs.Model;
    }, function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }, function (_assetsSpriteFrameJs) {
      SpriteFrame = _assetsSpriteFrameJs.SpriteFrame;
    }, function (_miscIndexJs) {
      ModelRenderer = _miscIndexJs.ModelRenderer;
    }],
    execute: function () {
      (function (SpriteMode) {
        SpriteMode[SpriteMode["SIMPLE"] = 0] = "SIMPLE";
        SpriteMode[SpriteMode["SLICED"] = 1] = "SLICED";
        SpriteMode[SpriteMode["TILED"] = 2] = "TILED";
      })(SpriteMode || (SpriteMode = {}));
      /**
       * @en 2D rendering component that provides the ability to render sprite in 3D space.
       * @zh 2D 渲染基础组件，提供精灵渲染在 3D 空间中的能力。
       */
      _export("SpriteRenderer", SpriteRenderer = (_dec = ccclass('cc.SpriteRenderer'), _dec2 = help('i18n:cc.SpriteRenderer'), _dec3 = executionOrder(100), _dec4 = menu('2D/SpriteRenderer'), _dec5 = type(SpriteFrame), _dec6 = visible(false), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_ModelRenderer) {
        _inheritsLoose(SpriteRenderer, _ModelRenderer);
        function SpriteRenderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ModelRenderer.call.apply(_ModelRenderer, [this].concat(args)) || this;
          _this._spriteFrame = _initializer && _initializer();
          _this._mode = _initializer2 && _initializer2();
          _this._color = _initializer3 && _initializer3();
          _this._flipX = _initializer4 && _initializer4();
          _this._flipY = _initializer5 && _initializer5();
          _this._size = _initializer6 && _initializer6();
          // todo for sliced & tiled
          _this._model = null;
          return _this;
        }
        var _proto = SpriteRenderer.prototype;
        _proto.onLoad = function onLoad() {
          if (this._spriteFrame) {
            if (!this._spriteFrame.mesh) {
              this._spriteFrame.ensureMeshData();
            }
            this._spriteFrame.mesh.initialize();
          }
          this._updateModels();
        };
        _proto.onRestore = function onRestore() {
          this._updateModels();
          if (this.enabledInHierarchy) {
            this._attachToScene();
          }
        };
        _proto.onEnable = function onEnable() {
          _ModelRenderer.prototype.onEnable.call(this);
          if (!this._model) {
            this._updateModels();
          }
          this._attachToScene();
        };
        _proto.onDisable = function onDisable() {
          if (this._model) {
            this._detachFromScene();
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._model) {
            cclegacy.director.root.destroyModel(this._model);
            this._model = null;
            this._models.length = 0;
          }
        };
        _proto._updateModels = function _updateModels() {
          if (!this._spriteFrame) {
            return;
          }
          var model = this._model;
          if (model) {
            model.destroy();
            model.initialize();
            model.node = model.transform = this.node;
          } else {
            this._createModel();
          }
          if (this._model) {
            var mesh = this._spriteFrame.mesh;
            this._model.createBoundingShape(mesh.struct.minPosition, mesh.struct.maxPosition);
            this._updateModelParams();
            this._onUpdateLocalDescriptorSet();
          }
        };
        _proto._createModel = function _createModel() {
          var model = this._model = cclegacy.director.root.createModel(Model);
          model.visFlags = this.visibility;
          model.node = model.transform = this.node;
          this._models.length = 0;
          this._models.push(this._model);
        };
        _proto._updateModelParams = function _updateModelParams() {
          if (!this._spriteFrame || !this._model) {
            return;
          }
          this._spriteFrame.ensureMeshData();
          var mesh = this._spriteFrame.mesh;
          this.node.hasChangedFlags |= TransformBit.POSITION; // Same as model, Maybe a hack
          this._model.transform.hasChangedFlags |= TransformBit.POSITION;
          var renderingMesh = mesh ? mesh.renderingSubMeshes : null;
          if (renderingMesh) {
            var meshCount = renderingMesh.length;
            for (var i = 0; i < meshCount; ++i) {
              var material = this.getRenderMaterial(i);
              if (material && !material.isValid) {
                material = null;
              }
              var subMeshData = renderingMesh[i];
              if (subMeshData) {
                this._model.initSubModel(i, subMeshData, material || this._getBuiltinMaterial());
              }
            }
          }
          this._model.enabled = true;
        };
        _proto._getBuiltinMaterial = function _getBuiltinMaterial() {
          // classic ugly pink indicating missing material
          return builtinResMgr.get('missing-material');
        };
        _proto._onMaterialModified = function _onMaterialModified(idx, material) {
          _ModelRenderer.prototype._onMaterialModified.call(this, idx, material);
          if (!this._spriteFrame || !this._model || !this._model.inited) {
            return;
          }
          this._onRebuildPSO(idx, material || this._getBuiltinMaterial());
        }

        /**
         * @engineInternal
         */;
        _proto._onRebuildPSO = function _onRebuildPSO(idx, material) {
          if (!this._model || !this._model.inited) {
            return;
          }
          this._model.setSubModelMaterial(idx, material);
          this._onUpdateLocalDescriptorSet();
        };
        _proto._onUpdateLocalDescriptorSet = function _onUpdateLocalDescriptorSet() {
          if (!this._spriteFrame || !this._model || !this._model.inited) {
            return;
          }
          var texture = this._spriteFrame.getGFXTexture();
          var sampler = this._spriteFrame.getGFXSampler();
          // We need a api like updateLocalDescriptors(texture,sampler,binding) from model
          var subModels = this._model.subModels;
          var binding = ModelLocalBindings.SAMPLER_SPRITE;
          for (var i = 0; i < subModels.length; i++) {
            var descriptorSet = subModels[i].descriptorSet;
            descriptorSet.bindTexture(binding, texture);
            descriptorSet.bindSampler(binding, sampler);
            descriptorSet.update();
          }
        };
        _proto._attachToScene = function _attachToScene() {
          if (!this.node.scene || !this._model) {
            return;
          }
          var renderScene = this._getRenderScene();
          if (this._model.scene !== null) {
            this._detachFromScene();
          }
          renderScene.addModel(this._model);
        }

        /**
         * @engineInternal
         */;
        _proto._detachFromScene = function _detachFromScene() {
          if (this._model && this._model.scene) {
            this._model.scene.removeModel(this._model);
          }
        };
        _createClass(SpriteRenderer, [{
          key: "spriteFrame",
          get:
          /**
          * @en The spriteFrame that the component should render.
          * @zh 该组件应渲染的 spriteFrame。
          */
          function get() {
            return this._spriteFrame;
          },
          set: function set(value) {
            if (this._spriteFrame === value) {
              return;
            }
            var lastSprite = this._spriteFrame;
            this._spriteFrame = value;
            if (this._spriteFrame) {
              this._spriteFrame.ensureMeshData(); // Make sure the mesh is available, you should call it before using the mesh
              var mesh = this._spriteFrame.mesh;
              mesh.initialize();
            }
            this._updateModels();
            if (this.enabledInHierarchy) {
              this._attachToScene();
            }
            // TODO Update on Editor
          }

          /**
           * @en Rendering model of the component.
           * @zh 该组件的渲染模型。
           */
        }, {
          key: "model",
          get: function get() {
            return this._model;
          }
        }]);
        return SpriteRenderer;
      }(ModelRenderer), (_applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_spriteFrame", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_mode", [serializable], function () {
        return SpriteMode.SIMPLE;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_color", [serializable], function () {
        return Color.WHITE.clone();
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_flipX", [serializable], function () {
        return false;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_flipY", [serializable], function () {
        return false;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_size", [_dec6, serializable], function () {
        return new Vec2();
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});