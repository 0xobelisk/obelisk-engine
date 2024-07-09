System.register("q-bundled:///fs/cocos/rendering/deferred/bloom-stage.js", ["../../core/data/decorators/index.js", "../define.js", "../../asset/assets/material.js", "../../gfx/index.js", "../pipeline-state-manager.js", "../render-stage.js", "../enum.js", "../render-pipeline.js", "./deferred-pipeline-scene-data.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, serializable, type, SetIndex, Material, BufferInfo, BufferUsageBit, ClearFlagBit, Color, MemoryUsageBit, Rect, PipelineStateManager, RenderStage, CommonStagePriority, MAX_BLOOM_FILTER_PASS_NUM, BLOOM_COMBINEPASS_INDEX, BLOOM_DOWNSAMPLEPASS_INDEX, BLOOM_PREFILTERPASS_INDEX, BLOOM_UPSAMPLEPASS_INDEX, _class, _dec, _dec2, _dec3, _class2, _class3, _initializer, _class4, colors, UBOBloom, BloomStage;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_defineJs) {
      SetIndex = _defineJs.SetIndex;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_gfxIndexJs) {
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Color = _gfxIndexJs.Color;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      Rect = _gfxIndexJs.Rect;
    }, function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_renderStageJs) {
      RenderStage = _renderStageJs.RenderStage;
    }, function (_enumJs) {
      CommonStagePriority = _enumJs.CommonStagePriority;
    }, function (_renderPipelineJs) {
      MAX_BLOOM_FILTER_PASS_NUM = _renderPipelineJs.MAX_BLOOM_FILTER_PASS_NUM;
    }, function (_deferredPipelineSceneDataJs) {
      BLOOM_COMBINEPASS_INDEX = _deferredPipelineSceneDataJs.BLOOM_COMBINEPASS_INDEX;
      BLOOM_DOWNSAMPLEPASS_INDEX = _deferredPipelineSceneDataJs.BLOOM_DOWNSAMPLEPASS_INDEX;
      BLOOM_PREFILTERPASS_INDEX = _deferredPipelineSceneDataJs.BLOOM_PREFILTERPASS_INDEX;
      BLOOM_UPSAMPLEPASS_INDEX = _deferredPipelineSceneDataJs.BLOOM_UPSAMPLEPASS_INDEX;
    }],
    execute: function () {
      colors = [new Color(0, 0, 0, 1)];
      /**
       * @en The uniform buffer object for bloom
       * @zh Bloom UBO。
       */
      UBOBloom = function UBOBloom() {};
      /**
       * @en The bloom post-process stage
       * @zh Bloom 后处理阶段。
       */
      _class = UBOBloom;
      UBOBloom.TEXTURE_SIZE_OFFSET = 0;
      UBOBloom.COUNT = _class.TEXTURE_SIZE_OFFSET + 4;
      UBOBloom.SIZE = _class.COUNT * 4;
      _export("BloomStage", BloomStage = (_dec = ccclass('BloomStage'), _dec2 = type(Material), _dec3 = displayOrder(3), _dec(_class2 = (_class3 = (_class4 = /*#__PURE__*/function (_RenderStage) {
        _inheritsLoose(BloomStage, _RenderStage);
        function BloomStage() {
          var _this;
          _this = _RenderStage.call(this) || this;
          _this.threshold = 1.0;
          _this.intensity = 0.8;
          _this.iterations = 2;
          _this._bloomMaterial = _initializer && _initializer();
          _this._renderArea = new Rect();
          _this._bloomUBO = [];
          return _this;
        }
        var _proto = BloomStage.prototype;
        _proto.initialize = function initialize(info) {
          _RenderStage.prototype.initialize.call(this, info);
          return true;
        };
        _proto.activate = function activate(pipeline, flow) {
          _RenderStage.prototype.activate.call(this, pipeline, flow);
          if (this._bloomMaterial) {
            pipeline.pipelineSceneData.bloomMaterial = this._bloomMaterial;
          }
        };
        _proto.destroy = function destroy() {};
        _proto.render = function render(camera) {
          var _camera$window;
          var pipeline = this._pipeline;
          pipeline.generateBloomRenderData();
          if (!((_camera$window = camera.window) !== null && _camera$window !== void 0 && _camera$window.swapchain) && !pipeline.macros.CC_PIPELINE_TYPE) {
            return;
          }
          if (!pipeline.bloomEnabled || pipeline.pipelineSceneData.renderObjects.length === 0) return;
          if (this._bloomUBO.length === 0) {
            var passNumber = MAX_BLOOM_FILTER_PASS_NUM * 2 + 2;
            for (var i = 0; i < passNumber; ++i) {
              this._bloomUBO[i] = pipeline.device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOBloom.SIZE, UBOBloom.SIZE));
            }
          }
          if (camera.clearFlag & ClearFlagBit.COLOR) {
            colors[0].x = camera.clearColor.x;
            colors[0].y = camera.clearColor.y;
            colors[0].z = camera.clearColor.z;
          }
          colors[0].w = camera.clearColor.w;
          this._prefilterPass(camera, pipeline);
          this._downsamplePass(camera, pipeline);
          this._upsamplePass(camera, pipeline);
          this._combinePass(camera, pipeline);
        };
        _proto._prefilterPass = function _prefilterPass(camera, pipeline) {
          pipeline.generateRenderArea(camera, this._renderArea);
          this._renderArea.width >>= 1;
          this._renderArea.height >>= 1;
          var cmdBuff = pipeline.commandBuffers[0];
          var sceneData = pipeline.pipelineSceneData;
          var builtinBloomProcess = sceneData.bloomMaterial;
          var pass = builtinBloomProcess.passes[BLOOM_PREFILTERPASS_INDEX];
          var renderData = pipeline.getPipelineRenderData();
          var bloomData = renderData.bloom;
          var textureSize = new Float32Array(UBOBloom.COUNT);
          textureSize[UBOBloom.TEXTURE_SIZE_OFFSET + 2] = this.threshold;
          cmdBuff.updateBuffer(this._bloomUBO[0], textureSize);
          cmdBuff.beginRenderPass(bloomData.renderPass, bloomData.prefilterFramebuffer, this._renderArea, colors, 0, 0);
          cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, pipeline.descriptorSet);
          pass.descriptorSet.bindBuffer(0, this._bloomUBO[0]);
          pass.descriptorSet.bindTexture(1, renderData.outputRenderTargets[0]);
          pass.descriptorSet.bindSampler(1, bloomData.sampler);
          pass.descriptorSet.update();
          cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
          var inputAssembler = camera.window.swapchain ? pipeline.quadIAOffscreen : pipeline.quadIAOnscreen;
          var pso = null;
          var shader = pass.getShaderVariant();
          if (pass != null && shader != null && inputAssembler != null) {
            pso = PipelineStateManager.getOrCreatePipelineState(pipeline.device, pass, shader, bloomData.renderPass, inputAssembler);
          }
          if (pso != null) {
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindInputAssembler(inputAssembler);
            cmdBuff.draw(inputAssembler);
          }
          cmdBuff.endRenderPass();
        };
        _proto._downsamplePass = function _downsamplePass(camera, pipeline) {
          pipeline.generateRenderArea(camera, this._renderArea);
          this._renderArea.width >>= 1;
          this._renderArea.height >>= 1;
          var cmdBuff = pipeline.commandBuffers[0];
          var sceneData = pipeline.pipelineSceneData;
          var builtinBloomProcess = sceneData.bloomMaterial;
          var bloomData = pipeline.getPipelineRenderData().bloom;
          var textureSize = new Float32Array(UBOBloom.COUNT);
          for (var i = 0; i < this.iterations; ++i) {
            textureSize[UBOBloom.TEXTURE_SIZE_OFFSET + 0] = this._renderArea.width;
            textureSize[UBOBloom.TEXTURE_SIZE_OFFSET + 1] = this._renderArea.height;
            cmdBuff.updateBuffer(this._bloomUBO[i + 1], textureSize);
            this._renderArea.width >>= 1;
            this._renderArea.height >>= 1;
            cmdBuff.beginRenderPass(bloomData.renderPass, bloomData.downsampleFramebuffers[i], this._renderArea, colors, 0, 0);
            var pass = builtinBloomProcess.passes[BLOOM_DOWNSAMPLEPASS_INDEX + i];
            var shader = pass.getShaderVariant();
            pass.descriptorSet.bindBuffer(0, this._bloomUBO[i + 1]);
            if (i === 0) {
              pass.descriptorSet.bindTexture(1, bloomData.prefiterTex);
            } else {
              pass.descriptorSet.bindTexture(1, bloomData.downsampleTexs[i - 1]);
            }
            pass.descriptorSet.bindSampler(1, bloomData.sampler);
            pass.descriptorSet.update();
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
            var inputAssembler = camera.window.swapchain ? pipeline.quadIAOffscreen : pipeline.quadIAOnscreen;
            var pso = null;
            if (pass != null && shader != null && inputAssembler != null) {
              pso = PipelineStateManager.getOrCreatePipelineState(pipeline.device, pass, shader, bloomData.renderPass, inputAssembler);
            }
            if (pso != null) {
              cmdBuff.bindPipelineState(pso);
              cmdBuff.bindInputAssembler(inputAssembler);
              cmdBuff.draw(inputAssembler);
            }
            cmdBuff.endRenderPass();
          }
        };
        _proto._upsamplePass = function _upsamplePass(camera, pipeline) {
          var bloomData = pipeline.getPipelineRenderData().bloom;
          pipeline.generateRenderArea(camera, this._renderArea);
          this._renderArea.width >>= this.iterations + 1;
          this._renderArea.height >>= this.iterations + 1;
          var cmdBuff = pipeline.commandBuffers[0];
          var sceneData = pipeline.pipelineSceneData;
          var builtinBloomProcess = sceneData.bloomMaterial;
          var textureSize = new Float32Array(UBOBloom.COUNT);
          for (var i = 0; i < this.iterations; ++i) {
            var index = i + MAX_BLOOM_FILTER_PASS_NUM + 1;
            textureSize[UBOBloom.TEXTURE_SIZE_OFFSET + 0] = this._renderArea.width;
            textureSize[UBOBloom.TEXTURE_SIZE_OFFSET + 1] = this._renderArea.height;
            cmdBuff.updateBuffer(this._bloomUBO[index], textureSize);
            this._renderArea.width <<= 1;
            this._renderArea.height <<= 1;
            cmdBuff.beginRenderPass(bloomData.renderPass, bloomData.upsampleFramebuffers[this.iterations - 1 - i], this._renderArea, colors, 0, 0);
            var pass = builtinBloomProcess.passes[BLOOM_UPSAMPLEPASS_INDEX + i];
            var shader = pass.getShaderVariant();
            pass.descriptorSet.bindBuffer(0, this._bloomUBO[index]);
            if (i === 0) {
              pass.descriptorSet.bindTexture(1, bloomData.downsampleTexs[this.iterations - 1]);
            } else {
              pass.descriptorSet.bindTexture(1, bloomData.upsampleTexs[this.iterations - i]);
            }
            pass.descriptorSet.bindSampler(1, bloomData.sampler);
            pass.descriptorSet.update();
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
            var inputAssembler = camera.window.swapchain ? pipeline.quadIAOffscreen : pipeline.quadIAOnscreen;
            var pso = null;
            if (pass != null && shader != null && inputAssembler != null) {
              pso = PipelineStateManager.getOrCreatePipelineState(pipeline.device, pass, shader, bloomData.renderPass, inputAssembler);
            }
            if (pso != null) {
              cmdBuff.bindPipelineState(pso);
              cmdBuff.bindInputAssembler(inputAssembler);
              cmdBuff.draw(inputAssembler);
            }
            cmdBuff.endRenderPass();
          }
        };
        _proto._combinePass = function _combinePass(camera, pipeline) {
          pipeline.generateRenderArea(camera, this._renderArea);
          var cmdBuff = pipeline.commandBuffers[0];
          var sceneData = pipeline.pipelineSceneData;
          var builtinBloomProcess = sceneData.bloomMaterial;
          var deferredData = pipeline.getPipelineRenderData();
          var bloomData = deferredData.bloom;
          var uboIndex = MAX_BLOOM_FILTER_PASS_NUM * 2 + 1;
          var textureSize = new Float32Array(UBOBloom.COUNT);
          textureSize[UBOBloom.TEXTURE_SIZE_OFFSET + 3] = this.intensity;
          cmdBuff.updateBuffer(this._bloomUBO[uboIndex], textureSize);
          cmdBuff.beginRenderPass(bloomData.renderPass, bloomData.combineFramebuffer, this._renderArea, colors, 0, 0);
          cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, pipeline.descriptorSet);
          var pass = builtinBloomProcess.passes[BLOOM_COMBINEPASS_INDEX];
          pass.descriptorSet.bindBuffer(0, this._bloomUBO[uboIndex]);
          pass.descriptorSet.bindTexture(1, deferredData.outputRenderTargets[0]);
          pass.descriptorSet.bindTexture(2, bloomData.upsampleTexs[0]);
          pass.descriptorSet.bindSampler(1, bloomData.sampler);
          pass.descriptorSet.bindSampler(2, bloomData.sampler);
          pass.descriptorSet.update();
          cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
          var inputAssembler = camera.window.swapchain ? pipeline.quadIAOffscreen : pipeline.quadIAOnscreen;
          var pso = null;
          var shader = pass.getShaderVariant();
          if (pass != null && shader != null && inputAssembler != null) {
            pso = PipelineStateManager.getOrCreatePipelineState(pipeline.device, pass, shader, bloomData.renderPass, inputAssembler);
          }
          if (pso != null) {
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindInputAssembler(inputAssembler);
            cmdBuff.draw(inputAssembler);
          }
          cmdBuff.endRenderPass();
        };
        return BloomStage;
      }(RenderStage), _class4.initInfo = {
        name: 'BloomStage',
        priority: CommonStagePriority.BLOOM,
        tag: 0
      }, _class4), (_initializer = _applyDecoratedInitializer(_class3.prototype, "_bloomMaterial", [_dec2, serializable, _dec3], function () {
        return null;
      })), _class3)) || _class2));
    }
  };
});