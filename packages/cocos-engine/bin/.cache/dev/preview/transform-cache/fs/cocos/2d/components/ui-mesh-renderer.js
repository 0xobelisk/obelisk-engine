System.register("q-bundled:///fs/cocos/2d/components/ui-mesh-renderer.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../rendering/define.js", "../renderer/stencil-manager.js", "../../scene-graph/component.js", "../renderer/native-2d.js", "../framework/ui-renderer-manager.js", "../renderer/render-entity.js", "../renderer/render-data.js", "../../core/index.js", "../renderer/render-draw-info.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, executeInEditMode, DEBUG, JSB, RenderPriority, Stage, Component, NativeUIModelProxy, uiRendererManager, RenderEntity, RenderEntityType, MeshRenderData, assert, cclegacy, warn, RenderDrawInfoType, _dec, _dec2, _dec3, _dec4, _class, UIMeshRenderer;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
    }, function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_renderingDefineJs) {
      RenderPriority = _renderingDefineJs.RenderPriority;
    }, function (_rendererStencilManagerJs) {
      Stage = _rendererStencilManagerJs.Stage;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_rendererNative2dJs) {
      NativeUIModelProxy = _rendererNative2dJs.NativeUIModelProxy;
    }, function (_frameworkUiRendererManagerJs) {
      uiRendererManager = _frameworkUiRendererManagerJs.uiRendererManager;
    }, function (_rendererRenderEntityJs) {
      RenderEntity = _rendererRenderEntityJs.RenderEntity;
      RenderEntityType = _rendererRenderEntityJs.RenderEntityType;
    }, function (_rendererRenderDataJs) {
      MeshRenderData = _rendererRenderDataJs.MeshRenderData;
    }, function (_coreIndexJs) {
      assert = _coreIndexJs.assert;
      cclegacy = _coreIndexJs.cclegacy;
      warn = _coreIndexJs.warn;
    }, function (_rendererRenderDrawInfoJs) {
      RenderDrawInfoType = _rendererRenderDrawInfoJs.RenderDrawInfoType;
    }],
    execute: function () {
      /**
       * @en
       * The component of model.
       * When you place particles or models in the UI, you must add this component to render.
       * The component must be placed on a node with the [[MeshRenderer]] or the [[ParticleSystem]].
       *
       * @zh
       * UI 模型基础组件。
       * 当你在 UI 中放置模型或者粒子的时候，必须添加该组件才能渲染。该组件必须放置在带有 [[MeshRenderer]] 或者 [[ParticleSystem]] 组件的节点上。
       * @deprecated This component is not recommended to be used, please use Render Texture instead.
       * See [UIMeshRenderer Reference](https://docs.cocos.com/creator/manual/en/ui-system/components/editor/ui-model.html)
       */
      _export("UIMeshRenderer", UIMeshRenderer = (_dec = ccclass('cc.UIMeshRenderer'), _dec2 = help('i18n:cc.UIMeshRenderer'), _dec3 = executionOrder(110), _dec4 = menu('UI/UIMeshRenderer'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = executeInEditMode(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMeshRenderer, _Component);
        function UIMeshRenderer() {
          var _this;
          _this = _Component.call(this) || this;
          _this._modelComponent = null;
          _this._dirtyVersion = -1;
          _this._internalId = -1;
          /**
           * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          _this.stencilStage = Stage.DISABLED;
          _this._renderData = null;
          _this._renderEntity = new RenderEntity(RenderEntityType.DYNAMIC);
          if (JSB) {
            _this._UIModelNativeProxy = new NativeUIModelProxy();
          }
          return _this;
        }

        /**
         * @en Get the model component on this node
         * @zh 获取同节点的 model 组件
         */
        var _proto = UIMeshRenderer.prototype;
        _proto.__preload = function __preload() {
          this.node._uiProps.uiComp = this;
        };
        _proto.onEnable = function onEnable() {
          uiRendererManager.addRenderer(this);
          this.markForUpdateRenderData();
        };
        _proto.onDisable = function onDisable() {
          uiRendererManager.removeRenderer(this);
          this.renderEntity.enabled = this._canRender();
        };
        _proto.onLoad = function onLoad() {
          if (!this.node._uiProps.uiTransformComp) {
            this.node.addComponent('cc.UITransform');
          }
          this._modelComponent = this.getComponent('cc.ModelRenderer');
          if (!this._modelComponent) {
            warn("node '" + (this.node && this.node.name) + "' doesn't have any renderable component");
            return;
          }
          if (JSB) {
            this._UIModelNativeProxy.attachNode(this.node);
          }
          this.renderEntity.setNode(this.node);
        };
        _proto.onDestroy = function onDestroy() {
          this.renderEntity.setNode(null);
          if (this.node._uiProps.uiComp === this) {
            this.node._uiProps.uiComp = null;
          }
          this._modelComponent = this.getComponent('cc.ModelRenderer');
          if (!this._modelComponent) {
            return;
          }
          this._modelComponent._sceneGetter = null;
        }

        /**
         * @en Render data submission procedure, it update and assemble the render data to 2D data buffers before all children submission process.
         * Usually called each frame when the ui flow assemble all render data to geometry buffers.
         * Don't call it unless you know what you are doing.
         * @zh 渲染数据组装程序，这个方法会在所有子节点数据组装之前更新并组装当前组件的渲染数据到 UI 的顶点数据缓冲区中。
         * 一般在 UI 渲染流程中调用，用于组装所有的渲染数据到顶点数据缓冲区。
         * 注意：不要手动调用该函数，除非你理解整个流程。
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._render = function _render(render) {
          if (this._modelComponent) {
            var models = this._modelComponent._collectModels();
            this._modelComponent._detachFromScene();
            for (var i = 0; i < models.length; i++) {
              if (models[i].enabled) {
                render.commitModel(this, models[i], this._modelComponent.material);
              }
            }
            return true;
          }
          return false;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.fillBuffers = function fillBuffers(render) {
          if (this.enabled) {
            this._render(render);
          }
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        // Native updateAssembler
        ;
        _proto.updateRenderer = function updateRenderer() {
          if (JSB) {
            this.renderEntity.enabled = this._canRender();
            if (this._modelComponent) {
              var models = this._modelComponent._collectModels();
              this._modelComponent._detachFromScene(); // JSB
              // clear models
              this._UIModelNativeProxy.clearModels();
              this._renderEntity.clearDynamicRenderDrawInfos();
              for (var i = 0; i < models.length; i++) {
                if (models[i].enabled) {
                  this._uploadRenderData(i);
                  this._UIModelNativeProxy.updateModels(models[i]);
                }
              }
              this._UIModelNativeProxy.attachDrawInfo();
            }
          }
        };
        _proto._uploadRenderData = function _uploadRenderData(index) {
          if (JSB) {
            var renderData = MeshRenderData.add();
            // TODO: here we weirdly use UIMeshRenderer as UIRenderer
            // please fix the type @holycanvas
            // issue: https://github.com/cocos/cocos-engine/issues/14637
            renderData.initRenderDrawInfo(this, RenderDrawInfoType.MODEL);
            // TODO: MeshRenderData and RenderData are both sub class of BaseRenderData, here we weirdly use MeshRenderData as RenderData
            // please fix the type @holycanvas
            // issue: https://github.com/cocos/cocos-engine/issues/14637
            this._renderData = renderData;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            this._renderData.material = this._modelComponent.getMaterialInstance(index);
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
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ;
        _proto.postUpdateAssembler = function postUpdateAssembler(render) {
          // No behavior for this component
        };
        _proto.update = function update() {
          if (JSB) {
            if (this._modelComponent) {
              this.markForUpdateRenderData();
            }
          }
          this._fitUIRenderQueue();
        };
        _proto._fitUIRenderQueue = function _fitUIRenderQueue() {
          if (!this._modelComponent) {
            return;
          }
          var matNum = this._modelComponent.sharedMaterials.length;
          for (var i = 0; i < matNum; i++) {
            var material = this._modelComponent.getMaterialInstance(i);
            if (material == null) {
              continue;
            }
            var passes = material.passes;
            var passNum = passes.length;
            for (var j = 0; j < passNum; j++) {
              var pass = passes[j];
              pass.setPriority(RenderPriority.MAX - 11);
              // Because the deferred pipeline cannot perform lighting processing on the uimodel,
              // it may even cause the uimodel to crash in the metal backend,
              // so force rendering uimodel in forward pipeline
              material.recompileShaders({
                CC_FORCE_FORWARD_SHADING: true
              }, j);
            }
          }
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        // interface
        ;
        _proto.markForUpdateRenderData = function markForUpdateRenderData(enable) {
          if (enable === void 0) {
            enable = true;
          }
          uiRendererManager.markDirtyRenderer(this);
        };
        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        _proto.setNodeDirty = function setNodeDirty() {
          // No behavior for this component
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ;
        _proto.setTextureDirty = function setTextureDirty() {
          // No behavior for this component
        };
        _proto._canRender = function _canRender() {
          return this.enabled && this._modelComponent !== null;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _createClass(UIMeshRenderer, [{
          key: "modelComponent",
          get: function get() {
            return this._modelComponent;
          }
        }, {
          key: "renderEntity",
          get: function get() {
            if (DEBUG) {
              assert(Boolean(this._renderEntity), 'this._renderEntity should not be invalid');
            }
            return this._renderEntity;
          }
        }, {
          key: "renderData",
          get:
          /**
           * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._renderData;
          }
        }]);
        return UIMeshRenderer;
      }(Component)) || _class) || _class) || _class) || _class) || _class));
      cclegacy.UIMeshRenderer = UIMeshRenderer;
    }
  };
});