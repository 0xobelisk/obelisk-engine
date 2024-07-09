System.register("q-bundled:///fs/cocos/2d/framework/ui-renderer.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/decorators/index.js", "../../core/index.js", "../../asset/asset-manager/index.js", "../../asset/assets/index.js", "../../gfx/index.js", "../renderer/render-data.js", "./ui-transform.js", "../renderer/stencil-manager.js", "../../scene-graph/node-event.js", "../../misc/renderer.js", "../renderer/render-entity.js", "./ui-renderer-manager.js", "../renderer/render-draw-info.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var DEBUG, EDITOR, JSB, ccclass, executeInEditMode, requireComponent, type, displayOrder, serializable, override, visible, displayName, disallowAnimation, Color, assert, ccenum, cclegacy, builtinResMgr, Material, BlendFactor, BlendOp, ColorMask, RenderData, UITransform, Stage, NodeEventType, Renderer, RenderEntity, RenderEntityType, uiRendererManager, RenderDrawInfoType, director, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _class3, InstanceMaterialType, UIRenderer;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  _export("InstanceMaterialType", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      type = _coreDataDecoratorsIndexJs.type;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      override = _coreDataDecoratorsIndexJs.override;
      visible = _coreDataDecoratorsIndexJs.visible;
      displayName = _coreDataDecoratorsIndexJs.displayName;
      disallowAnimation = _coreDataDecoratorsIndexJs.disallowAnimation;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      assert = _coreIndexJs.assert;
      ccenum = _coreIndexJs.ccenum;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
    }, function (_gfxIndexJs) {
      BlendFactor = _gfxIndexJs.BlendFactor;
      BlendOp = _gfxIndexJs.BlendOp;
      ColorMask = _gfxIndexJs.ColorMask;
    }, function (_rendererRenderDataJs) {
      RenderData = _rendererRenderDataJs.RenderData;
    }, function (_uiTransformJs) {
      UITransform = _uiTransformJs.UITransform;
    }, function (_rendererStencilManagerJs) {
      Stage = _rendererStencilManagerJs.Stage;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }, function (_miscRendererJs) {
      Renderer = _miscRendererJs.Renderer;
    }, function (_rendererRenderEntityJs) {
      RenderEntity = _rendererRenderEntityJs.RenderEntity;
      RenderEntityType = _rendererRenderEntityJs.RenderEntityType;
    }, function (_uiRendererManagerJs) {
      uiRendererManager = _uiRendererManagerJs.uiRendererManager;
    }, function (_rendererRenderDrawInfoJs) {
      RenderDrawInfoType = _rendererRenderDrawInfoJs.RenderDrawInfoType;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      // hack
      ccenum(BlendFactor);
      ccenum(BlendOp);
      ccenum(ColorMask);

      /**
       * @en
       * The shader property type of the material after instantiation.
       *
       * @zh
       * 实例后的材质的着色器属性类型。
       */
      (function (InstanceMaterialType) {
        InstanceMaterialType[InstanceMaterialType["ADD_COLOR"] = 0] = "ADD_COLOR";
        InstanceMaterialType[InstanceMaterialType["ADD_COLOR_AND_TEXTURE"] = 1] = "ADD_COLOR_AND_TEXTURE";
        InstanceMaterialType[InstanceMaterialType["GRAYSCALE"] = 2] = "GRAYSCALE";
        InstanceMaterialType[InstanceMaterialType["USE_ALPHA_SEPARATED"] = 3] = "USE_ALPHA_SEPARATED";
        InstanceMaterialType[InstanceMaterialType["USE_ALPHA_SEPARATED_AND_GRAY"] = 4] = "USE_ALPHA_SEPARATED_AND_GRAY";
      })(InstanceMaterialType || _export("InstanceMaterialType", InstanceMaterialType = {}));
      /**
       * @en Base class for UI components which supports rendering features.
       * This component will setup NodeUIProperties.uiComp in its owner [[Node]]
       *
       * @zh 所有支持渲染的 UI 组件的基类。
       * 这个组件会设置 [[Node]] 上的 NodeUIProperties.uiComp。
       */
      _export("UIRenderer", UIRenderer = (_dec = ccclass('cc.UIRenderer'), _dec2 = requireComponent(UITransform), _dec3 = visible(false), _dec4 = type(Material), _dec5 = displayOrder(0), _dec6 = displayName('CustomMaterial'), _dec7 = displayOrder(1), _dec8 = type(Material), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = (_class3 = class UIRenderer extends Renderer {
        constructor() {
          super();
          this._renderData = null;
          this._materials = _initializer && _initializer();
          this._customMaterial = _initializer2 && _initializer2();
          this._srcBlendFactor = _initializer3 && _initializer3();
          this._dstBlendFactor = _initializer4 && _initializer4();
          this._color = _initializer5 && _initializer5();
          this._stencilStage = Stage.DISABLED;
          this._assembler = null;
          this._postAssembler = null;
          // RenderEntity
          //protected renderData: RenderData | null = null;
          this._renderDataFlag = true;
          this._renderFlag = true;
          this._renderEntity = void 0;
          this._instanceMaterialType = -1;
          this._srcBlendFactorCache = BlendFactor.SRC_ALPHA;
          this._dstBlendFactorCache = BlendFactor.ONE_MINUS_SRC_ALPHA;
          /**
           * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          this._dirtyVersion = -1;
          /**
           * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          this._internalId = -1;
          /**
           * @engineInternal
           */
          this._flagChangedVersion = -1;
          /**
           * @en Marks for calculating opacity per vertex
           * @zh 标记组件是否逐顶点计算透明度
           */
          this._useVertexOpacity = false;
          this._lastParent = null;
          this._renderEntity = this.createRenderEntity();
        }
        get sharedMaterials() {
          // if we don't create an array copy, the editor will modify the original array directly.
          return EDITOR && this._materials.slice() || this._materials;
        }
        set sharedMaterials(val) {
          for (let i = 0; i < val.length; i++) {
            if (val[i] !== this._materials[i]) {
              this.setSharedMaterial(val[i], i);
            }
          }
          if (val.length < this._materials.length) {
            for (let i = val.length; i < this._materials.length; i++) {
              this.setSharedMaterial(null, i);
            }
            this._materials.splice(val.length);
          }
        }

        /**
         * @en The customMaterial
         * @zh 用户自定材质
         */
        get customMaterial() {
          return this._customMaterial;
        }
        set customMaterial(val) {
          this._customMaterial = val;
          this.updateMaterial();
        }

        /**
         * @en Main color for rendering, it normally multiplies with texture color.
         * @zh 渲染颜色，一般情况下会和贴图颜色相乘。
         */
        get color() {
          return this._color;
        }
        set color(value) {
          if (this._color.equals(value)) {
            return;
          }
          this._color.set(value);
          this._updateColor();
          if (EDITOR) {
            const clone = this._color.clone();
            this.node.emit(NodeEventType.COLOR_CHANGED, clone);
          }
        }
        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        get renderData() {
          return this._renderData;
        }
        /**
         * As can not set setter internal individually, so add setRenderData();
         * @engineInternal
         */
        setRenderData(renderData) {
          this._renderData = renderData;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        get useVertexOpacity() {
          return this._useVertexOpacity;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         * @en The component stencil stage (please do not any modification directly on this object)
         * @zh 组件模板缓冲状态 (注意：请不要直接修改它的值)
         */
        get stencilStage() {
          return this._stencilStage;
        }
        set stencilStage(val) {
          this._stencilStage = val;
          this._renderEntity.setStencilStage(val);
        }
        /**
         * @engineInternal
         * @internal
         */
        get srcBlendFactor() {
          return this._srcBlendFactor;
        }
        set srcBlendFactor(srcBlendFactor) {
          this._srcBlendFactor = srcBlendFactor;
        }
        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        get batcher() {
          return director.root.batcher2D;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        get renderEntity() {
          if (DEBUG) {
            assert(Boolean(this._renderEntity), 'this._renderEntity should not be invalid');
          }
          return this._renderEntity;
        }
        onLoad() {
          this._renderEntity.setNode(this.node);
        }
        __preload() {
          this.node._uiProps.uiComp = this;
          if (this._flushAssembler) {
            this._flushAssembler();
          }
        }
        onEnable() {
          this.node.on(NodeEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
          this.node.on(NodeEventType.SIZE_CHANGED, this._nodeStateChange, this);
          this.node.on(NodeEventType.PARENT_CHANGED, this._colorDirty, this);
          this.updateMaterial();
          this._colorDirty();
          uiRendererManager.addRenderer(this);
          this.markForUpdateRenderData();
        }

        // For Redo, Undo
        onRestore() {
          this.updateMaterial();
          // restore render data
          this.markForUpdateRenderData();
        }
        onDisable() {
          this.node.off(NodeEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
          this.node.off(NodeEventType.SIZE_CHANGED, this._nodeStateChange, this);
          this.node.off(NodeEventType.PARENT_CHANGED, this._colorDirty, this);
          uiRendererManager.removeRenderer(this);
          this._renderFlag = false;
          this._renderEntity.enabled = false;
        }
        onDestroy() {
          this._renderEntity.setNode(null);
          if (this.node._uiProps.uiComp === this) {
            this.node._uiProps.uiComp = null;
          }
          this.destroyRenderData();
          if (this._materialInstances) {
            for (let i = 0; i < this._materialInstances.length; i++) {
              const instance = this._materialInstances[i];
              if (instance) {
                instance.destroy();
              }
            }
          }
        }

        /**
         * @en Marks the render data of the current component as modified so that the render data is recalculated.
         * @zh 标记当前组件的渲染数据为已修改状态，这样渲染数据才会重新计算。
         * @param enable Marked necessary to update or not
         */
        markForUpdateRenderData(enable = true) {
          if (enable) {
            const renderData = this._renderData;
            if (renderData) {
              renderData.vertDirty = true;
            }
            uiRendererManager.markDirtyRenderer(this);
          }
        }

        /**
         * @en Request new render data object.
         * @zh 请求新的渲染数据对象。
         * @return @en The new render data. @zh 新的渲染数据。
         */
        requestRenderData(drawInfoType = RenderDrawInfoType.COMP) {
          const data = RenderData.add();
          data.initRenderDrawInfo(this, drawInfoType);
          this._renderData = data;
          return data;
        }

        /**
         * @en Destroy current render data.
         * @zh 销毁当前渲染数据。
         */
        destroyRenderData() {
          if (!this._renderData) {
            return;
          }
          this._renderData.removeRenderDrawInfo(this);
          RenderData.remove(this._renderData);
          this._renderData = null;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        updateRenderer() {
          if (this._assembler) {
            this._assembler.updateRenderData(this);
          }
          this._renderFlag = this._canRender();
          this._renderEntity.enabled = this._renderFlag;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        fillBuffers(render) {
          if (this._renderFlag) {
            this._render(render);
          }
        }

        /**
         * @en Post render data submission procedure, it's executed after assembler updated for all children.
         * It may assemble some extra render data to the geometry buffers, or it may only change some render states.
         * Don't call it unless you know what you are doing.
         * @zh 后置渲染数据组装程序，它会在所有子节点的渲染数据组装完成后被调用。
         * 它可能会组装额外的渲染数据到顶点数据缓冲区，也可能只是重置一些渲染状态。
         * 注意：不要手动调用该函数，除非你理解整个流程。
         */
        postUpdateAssembler(render) {
          if (this._postAssembler && this._renderFlag) {
            this._postRender(render);
          }
        }
        _render(render) {
          // Implemented by subclasses
        }
        _postRender(render) {
          // Implemented by subclasses
        }
        _canRender() {
          if (DEBUG) {
            assert(this.isValid, 'this component should not be invalid!');
          }
          return this.getSharedMaterial(0) !== null && this._enabled && this._color.a > 0;
        }
        _postCanRender() {
          // Implemented by subclasses
        }

        /**
         * @engineInternal
         */
        updateMaterial() {
          if (this._customMaterial) {
            if (this.getSharedMaterial(0) !== this._customMaterial) {
              this.setSharedMaterial(this._customMaterial, 0);
            }
            return;
          }
          const mat = this._updateBuiltinMaterial();
          this.setSharedMaterial(mat, 0);
          if (this.stencilStage === Stage.ENTER_LEVEL || this.stencilStage === Stage.ENTER_LEVEL_INVERTED) {
            this.getMaterialInstance(0).recompileShaders({
              USE_ALPHA_TEST: true
            });
          }
          this._updateBlendFunc();
        }
        _updateColor() {
          this.node._uiProps.colorDirty = true;
          this.setEntityColorDirty(true);
          this.setEntityColor(this._color);
          this.setEntityOpacity(this.node._uiProps.localOpacity);
          if (this._assembler) {
            this._assembler.updateColor(this);
            // Need update rendFlag when opacity changes from 0 to !0 or 0 to !0
            const renderFlag = this._renderFlag;
            this._renderFlag = this._canRender();
            this.setEntityEnabled(this._renderFlag);
            if (renderFlag !== this._renderFlag) {
              const renderData = this.renderData;
              if (renderData) {
                renderData.vertDirty = true;
              }
            }
          }
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        // for common
        static setEntityColorDirtyRecursively(node, dirty) {
          const render = node._uiProps.uiComp;
          if (render && render.color) {
            // exclude UIMeshRenderer which has not color
            render._renderEntity.colorDirty = dirty;
          }
          for (let i = 0; i < node.children.length; i++) {
            UIRenderer.setEntityColorDirtyRecursively(node.children[i], dirty);
          }
        }
        setEntityColorDirty(dirty) {
          if (JSB) {
            UIRenderer.setEntityColorDirtyRecursively(this.node, dirty);
          }
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        setEntityColor(color) {
          if (JSB) {
            this._renderEntity.color = color;
          }
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        setEntityOpacity(opacity) {
          if (JSB) {
            this._renderEntity.localOpacity = opacity;
          }
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        setEntityEnabled(enabled) {
          if (JSB) {
            this._renderEntity.enabled = enabled;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _updateBlendFunc() {
          // todo: Not only Pass[0].target[0]
          let target = this.getRenderMaterial(0).passes[0].blendState.targets[0];
          this._dstBlendFactorCache = target.blendDst;
          this._srcBlendFactorCache = target.blendSrc;
          if (this._dstBlendFactorCache !== this._dstBlendFactor || this._srcBlendFactorCache !== this._srcBlendFactor) {
            target = this.getMaterialInstance(0).passes[0].blendState.targets[0];
            target.blend = true;
            target.blendDstAlpha = BlendFactor.ONE_MINUS_SRC_ALPHA;
            target.blendDst = this._dstBlendFactor;
            target.blendSrc = this._srcBlendFactor;
            const targetPass = this.getMaterialInstance(0).passes[0];
            targetPass.blendState.setTarget(0, target);
            targetPass._updatePassHash();
            this._dstBlendFactorCache = this._dstBlendFactor;
            this._srcBlendFactorCache = this._srcBlendFactor;
          }
        }

        // pos, rot, scale changed
        _nodeStateChange(transformType) {
          if (this._renderData) {
            this.markForUpdateRenderData();
          }
          for (let i = 0; i < this.node.children.length; ++i) {
            const child = this.node.children[i];
            const renderComp = child.getComponent(UIRenderer);
            if (renderComp) {
              renderComp.markForUpdateRenderData();
            }
          }
        }
        _colorDirty() {
          this.node._uiProps.colorDirty = true;
          this.setEntityColorDirty(true);
        }
        _onMaterialModified(idx, material) {
          if (this._renderData) {
            this.markForUpdateRenderData();
            this._renderData.passDirty = true;
          }
          super._onMaterialModified(idx, material);
        }
        _updateBuiltinMaterial() {
          let mat;
          switch (this._instanceMaterialType) {
            case InstanceMaterialType.ADD_COLOR:
              mat = builtinResMgr.get(`ui-base-material`);
              break;
            case InstanceMaterialType.GRAYSCALE:
              mat = builtinResMgr.get(`ui-sprite-gray-material`);
              break;
            case InstanceMaterialType.USE_ALPHA_SEPARATED:
              mat = builtinResMgr.get(`ui-sprite-alpha-sep-material`);
              break;
            case InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY:
              mat = builtinResMgr.get(`ui-sprite-gray-alpha-sep-material`);
              break;
            default:
              mat = builtinResMgr.get(`ui-sprite-material`);
              break;
          }
          return mat;
        }
        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        setNodeDirty() {
          if (this._renderData) {
            this._renderData.nodeDirty = true;
          }
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        setTextureDirty() {
          if (this._renderData) {
            this._renderData.textureDirty = true;
          }
        }

        // RenderEntity
        // it should be overwritten by inherited classes
        createRenderEntity() {
          return new RenderEntity(RenderEntityType.STATIC);
        }
      }, _class3.BlendState = BlendFactor, _class3.Assembler = null, _class3.PostAssembler = null, _class3), (_applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [override, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "customMaterial", [_dec4, _dec5, _dec6, disallowAnimation], Object.getOwnPropertyDescriptor(_class2.prototype, "customMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "color", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_materials", [override], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_customMaterial", [_dec8], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_srcBlendFactor", [serializable], function () {
        return BlendFactor.SRC_ALPHA;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_dstBlendFactor", [serializable], function () {
        return BlendFactor.ONE_MINUS_SRC_ALPHA;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_color", [serializable], function () {
        return Color.WHITE.clone();
      })), _class2)) || _class) || _class) || _class));
      cclegacy.internal.UIRenderer = UIRenderer;
    }
  };
});