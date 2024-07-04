System.register("q-bundled:///fs/cocos/rendering/forward/forward-pipeline.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../render-pipeline.js", "./forward-flow.js", "../pipeline-serialization.js", "../shadow/shadow-flow.js", "../define.js", "../../asset/asset-manager/builtin-res-mgr.js", "../../core/platform/debug.js", "../pipeline-scene-data.js", "../reflection-probe/reflection-probe-flow.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, type, serializable, EDITOR, RenderPipeline, ForwardFlow, RenderTextureConfig, ShadowFlow, UBOGlobal, UBOShadow, UBOCamera, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, builtinResMgr, errorID, PipelineSceneData, ReflectionProbeFlow, _dec, _dec2, _dec3, _class, _class2, _initializer, PIPELINE_TYPE, ForwardPipeline;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function createDefaultPipeline() {
    const rppl = new ForwardPipeline();
    rppl.initialize({
      flows: []
    });
    return rppl;
  }

  /**
   * @en The forward render pipeline
   * @zh 前向渲染管线。
   */
  _export("createDefaultPipeline", createDefaultPipeline);
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_renderPipelineJs) {
      RenderPipeline = _renderPipelineJs.RenderPipeline;
    }, function (_forwardFlowJs) {
      ForwardFlow = _forwardFlowJs.ForwardFlow;
    }, function (_pipelineSerializationJs) {
      RenderTextureConfig = _pipelineSerializationJs.RenderTextureConfig;
    }, function (_shadowShadowFlowJs) {
      ShadowFlow = _shadowShadowFlowJs.ShadowFlow;
    }, function (_defineJs) {
      UBOGlobal = _defineJs.UBOGlobal;
      UBOShadow = _defineJs.UBOShadow;
      UBOCamera = _defineJs.UBOCamera;
      UNIFORM_SHADOWMAP_BINDING = _defineJs.UNIFORM_SHADOWMAP_BINDING;
      UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING = _defineJs.UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING;
    }, function (_assetAssetManagerBuiltinResMgrJs) {
      builtinResMgr = _assetAssetManagerBuiltinResMgrJs.builtinResMgr;
    }, function (_corePlatformDebugJs) {
      errorID = _corePlatformDebugJs.errorID;
    }, function (_pipelineSceneDataJs) {
      PipelineSceneData = _pipelineSceneDataJs.PipelineSceneData;
    }, function (_reflectionProbeReflectionProbeFlowJs) {
      ReflectionProbeFlow = _reflectionProbeReflectionProbeFlowJs.ReflectionProbeFlow;
    }],
    execute: function () {
      PIPELINE_TYPE = 0;
      _export("ForwardPipeline", ForwardPipeline = (_dec = ccclass('ForwardPipeline'), _dec2 = type([RenderTextureConfig]), _dec3 = displayOrder(2), _dec(_class = (_class2 = class ForwardPipeline extends RenderPipeline {
        constructor(...args) {
          super(...args);
          this.renderTextures = _initializer && _initializer();
          this._postRenderPass = null;
        }
        get postRenderPass() {
          return this._postRenderPass;
        }
        initialize(info) {
          super.initialize(info);
          if (this._flows.length === 0) {
            const shadowFlow = new ShadowFlow();
            shadowFlow.initialize(ShadowFlow.initInfo);
            this._flows.push(shadowFlow);
            const reflectionFlow = new ReflectionProbeFlow();
            reflectionFlow.initialize(ReflectionProbeFlow.initInfo);
            this._flows.push(reflectionFlow);
            const forwardFlow = new ForwardFlow();
            forwardFlow.initialize(ForwardFlow.initInfo);
            this._flows.push(forwardFlow);
          }
          return true;
        }
        activate(swapchain) {
          if (EDITOR) {
            console.info('Forward render pipeline initialized.');
          }
          this._macros = {
            CC_PIPELINE_TYPE: PIPELINE_TYPE
          };
          this._pipelineSceneData = new PipelineSceneData();
          if (!super.activate(swapchain)) {
            return false;
          }
          if (!this._activeRenderer(swapchain)) {
            errorID(2402);
            return false;
          }
          return true;
        }
        _ensureEnoughSize(cameras) {
          let newWidth = this._width;
          let newHeight = this._height;
          for (let i = 0; i < cameras.length; ++i) {
            const window = cameras[i].window;
            newWidth = Math.max(window.width, newWidth);
            newHeight = Math.max(window.height, newHeight);
          }
          if (newWidth !== this._width || newHeight !== this._height) {
            this._width = newWidth;
            this._height = newHeight;
          }
        }
        destroy() {
          this._destroyUBOs();
          this._destroyQuadInputAssembler();
          const rpIter = this._renderPasses.values();
          let rpRes = rpIter.next();
          while (!rpRes.done) {
            rpRes.value.destroy();
            rpRes = rpIter.next();
          }
          this._commandBuffers.length = 0;
          return super.destroy();
        }
        _activeRenderer(swapchain) {
          const device = this.device;
          this._commandBuffers.push(device.commandBuffer);
          const shadowMapSampler = this.globalDSManager.pointSampler;
          this._descriptorSet.bindSampler(UNIFORM_SHADOWMAP_BINDING, shadowMapSampler);
          this._descriptorSet.bindTexture(UNIFORM_SHADOWMAP_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
          this._descriptorSet.bindSampler(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, shadowMapSampler);
          this._descriptorSet.bindTexture(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
          this._descriptorSet.update();
          return true;
        }
        _destroyUBOs() {
          if (this._descriptorSet) {
            this._descriptorSet.getBuffer(UBOGlobal.BINDING).destroy();
            this._descriptorSet.getBuffer(UBOShadow.BINDING).destroy();
            this._descriptorSet.getBuffer(UBOCamera.BINDING).destroy();
            this._descriptorSet.getTexture(UNIFORM_SHADOWMAP_BINDING).destroy();
            this._descriptorSet.getTexture(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING).destroy();
          }
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "renderTextures", [_dec2, serializable, _dec3], function () {
        return [];
      })), _class2)) || _class));
    }
  };
});