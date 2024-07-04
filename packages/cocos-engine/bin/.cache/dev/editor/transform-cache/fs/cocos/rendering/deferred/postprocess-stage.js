System.register("q-bundled:///fs/cocos/rendering/deferred/postprocess-stage.js", ["../../core/data/decorators/index.js", "../define.js", "../../gfx/index.js", "../render-stage.js", "../enum.js", "../../asset/assets/material.js", "../pipeline-state-manager.js", "../pipeline-serialization.js", "../pipeline-funcs.js", "../ui-phase.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, type, serializable, SetIndex, UBOLocal, Color, Rect, ClearFlagBit, DescriptorSetInfo, BufferInfo, BufferUsageBit, MemoryUsageBit, RenderStage, CommonStagePriority, Material, PipelineStateManager, RenderQueueDesc, renderProfiler, UIPhase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, _class3, colors, PostProcessStage;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      SetIndex = _defineJs.SetIndex;
      UBOLocal = _defineJs.UBOLocal;
    }, function (_gfxIndexJs) {
      Color = _gfxIndexJs.Color;
      Rect = _gfxIndexJs.Rect;
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
    }, function (_renderStageJs) {
      RenderStage = _renderStageJs.RenderStage;
    }, function (_enumJs) {
      CommonStagePriority = _enumJs.CommonStagePriority;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_pipelineSerializationJs) {
      RenderQueueDesc = _pipelineSerializationJs.RenderQueueDesc;
    }, function (_pipelineFuncsJs) {
      renderProfiler = _pipelineFuncsJs.renderProfiler;
    }, function (_uiPhaseJs) {
      UIPhase = _uiPhaseJs.UIPhase;
    }],
    execute: function () {
      colors = [new Color(0, 0, 0, 1)];
      /**
        * @en The postprocess render stage
        * @zh 后处理渲染阶段。
        */
      _export("PostProcessStage", PostProcessStage = (_dec = ccclass('PostProcessStage'), _dec2 = type(Material), _dec3 = displayOrder(3), _dec4 = type([RenderQueueDesc]), _dec5 = displayOrder(2), _dec(_class = (_class2 = (_class3 = class PostProcessStage extends RenderStage {
        constructor() {
          super();
          this._postProcessMaterial = _initializer && _initializer();
          this.renderQueues = _initializer2 && _initializer2();
          this._renderArea = new Rect();
          this._stageDesc = void 0;
          this._localUBO = void 0;
          this._uiPhase = new UIPhase();
        }
        initialize(info) {
          super.initialize(info);
          return true;
        }
        activate(pipeline, flow) {
          super.activate(pipeline, flow);
          if (this._postProcessMaterial) {
            pipeline.pipelineSceneData.postprocessMaterial = this._postProcessMaterial;
          }
          this._uiPhase.activate(pipeline);
        }
        destroy() {}
        render(camera) {
          const pipeline = this._pipeline;
          const device = pipeline.device;
          const sceneData = pipeline.pipelineSceneData;
          const cmdBuff = pipeline.commandBuffers[0];
          pipeline.pipelineUBO.updateCameraUBO(camera);
          const vp = camera.viewport;
          this._renderArea.x = vp.x * camera.window.width;
          this._renderArea.y = vp.y * camera.window.height;
          this._renderArea.width = vp.width * camera.window.width;
          this._renderArea.height = vp.height * camera.window.height;
          const renderData = pipeline.getPipelineRenderData();
          const framebuffer = camera.window.framebuffer;
          const renderPass = pipeline.getRenderPass(camera.clearFlag, framebuffer);
          if (camera.clearFlag & ClearFlagBit.COLOR) {
            colors[0].x = camera.clearColor.x;
            colors[0].y = camera.clearColor.y;
            colors[0].z = camera.clearColor.z;
          }
          colors[0].w = camera.clearColor.w;
          cmdBuff.beginRenderPass(renderPass, framebuffer, this._renderArea, colors, camera.clearDepth, camera.clearStencil);
          cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, pipeline.descriptorSet);
          // Postprocess
          const builtinPostProcess = sceneData.postprocessMaterial;
          const pass = builtinPostProcess.passes[0];
          const shader = pass.getShaderVariant();
          if (pipeline.bloomEnabled) {
            pass.descriptorSet.bindTexture(0, renderData.bloom.combineTex);
          } else {
            pass.descriptorSet.bindTexture(0, renderData.outputRenderTargets[0]);
          }
          pass.descriptorSet.bindSampler(0, renderData.sampler);
          pass.descriptorSet.update();
          const inputAssembler = camera.window.swapchain ? pipeline.quadIAOnscreen : pipeline.quadIAOffscreen;
          let pso = null;
          if (pass != null && shader != null && inputAssembler != null) {
            pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, inputAssembler);
          }
          const renderObjects = pipeline.pipelineSceneData.renderObjects;
          if (pso != null && renderObjects.length > 0) {
            if (!this._stageDesc) {
              this._stageDesc = device.createDescriptorSet(new DescriptorSetInfo(pass.localSetLayout));
              this._localUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, UBOLocal.SIZE, UBOLocal.SIZE));
              this._stageDesc.bindBuffer(UBOLocal.BINDING, this._localUBO);
            }
            this._stageDesc.update();
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
            cmdBuff.bindDescriptorSet(SetIndex.LOCAL, this._stageDesc);
            cmdBuff.bindInputAssembler(inputAssembler);
            cmdBuff.draw(inputAssembler);
          }
          this._uiPhase.render(camera, renderPass);
          renderProfiler(device, renderPass, cmdBuff, pipeline.profiler, camera);
          cmdBuff.endRenderPass();
        }
      }, _class3.initInfo = {
        name: 'PostProcessStage',
        priority: CommonStagePriority.POST_PROCESS,
        tag: 0
      }, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_postProcessMaterial", [_dec2, serializable, _dec3], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "renderQueues", [_dec4, serializable, _dec5], function () {
        return [];
      })), _class2)) || _class));
    }
  };
});