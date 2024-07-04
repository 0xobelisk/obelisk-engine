System.register("q-bundled:///fs/cocos/rendering/shadow/shadow-stage.js", ["../../core/data/decorators/index.js", "../../gfx/index.js", "../render-stage.js", "../enum.js", "../render-shadow-map-batched-queue.js", "../define.js", "../../render-scene/scene/light.js", "../../render-scene/scene/shadows.js"], function (_export, _context) {
  "use strict";

  var ccclass, Color, Rect, RenderStage, ForwardStagePriority, RenderShadowMapBatchedQueue, SetIndex, LightType, CSMLevel, _dec, _class, _class2, colors, ShadowStage;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_gfxIndexJs) {
      Color = _gfxIndexJs.Color;
      Rect = _gfxIndexJs.Rect;
    }, function (_renderStageJs) {
      RenderStage = _renderStageJs.RenderStage;
    }, function (_enumJs) {
      ForwardStagePriority = _enumJs.ForwardStagePriority;
    }, function (_renderShadowMapBatchedQueueJs) {
      RenderShadowMapBatchedQueue = _renderShadowMapBatchedQueueJs.RenderShadowMapBatchedQueue;
    }, function (_defineJs) {
      SetIndex = _defineJs.SetIndex;
    }, function (_renderSceneSceneLightJs) {
      LightType = _renderSceneSceneLightJs.LightType;
    }, function (_renderSceneSceneShadowsJs) {
      CSMLevel = _renderSceneSceneShadowsJs.CSMLevel;
    }],
    execute: function () {
      colors = [new Color(1, 1, 1, 1)];
      /**
       * @en Shadow map render stage
       * @zh 阴影渲染阶段。
       */
      _export("ShadowStage", ShadowStage = (_dec = ccclass('ShadowStage'), _dec(_class = (_class2 = class ShadowStage extends RenderStage {
        constructor(...args) {
          super(...args);
          this._additiveShadowQueue = void 0;
          this._shadowFrameBuffer = null;
          this._renderArea = new Rect();
          this._light = null;
          this._globalDS = null;
          this._level = 0;
          this._isShadowMapCleared = false;
        }
        /**
         * @en Sets the render shadow map info
         * @zh 设置阴影渲染信息
         * @param light
         * @param shadowFrameBuffer
         * @param level 层级
         */
        setUsage(globalDS, light, shadowFrameBuffer, level = 0) {
          this._globalDS = globalDS;
          this._light = light;
          this._shadowFrameBuffer = shadowFrameBuffer;
          this._level = level;
        }
        destroy() {
          var _this$_additiveShadow;
          this._shadowFrameBuffer = null;
          this._globalDS = null;
          this._light = null;
          (_this$_additiveShadow = this._additiveShadowQueue) === null || _this$_additiveShadow === void 0 ? void 0 : _this$_additiveShadow.clear();
        }
        clearFramebuffer(camera) {
          if (!this._light || !this._shadowFrameBuffer || this._isShadowMapCleared) {
            return;
          }
          colors[0].w = camera.clearColor.w;
          const pipeline = this._pipeline;
          const pipelineSceneData = pipeline.pipelineSceneData;
          const shadingScale = pipelineSceneData.shadingScale;
          const shadowInfo = pipelineSceneData.shadows;
          const vp = camera.viewport;
          const shadowMapSize = shadowInfo.size;
          this._renderArea.x = vp.x * shadowMapSize.x;
          this._renderArea.y = vp.y * shadowMapSize.y;
          this._renderArea.width = vp.width * shadowMapSize.x * shadingScale;
          this._renderArea.height = vp.height * shadowMapSize.y * shadingScale;
          const cmdBuff = pipeline.commandBuffers[0];
          const renderPass = this._shadowFrameBuffer.renderPass;
          cmdBuff.beginRenderPass(renderPass, this._shadowFrameBuffer, this._renderArea, colors, camera.clearDepth, camera.clearStencil);
          cmdBuff.endRenderPass();
          this._isShadowMapCleared = true;
        }
        render(camera) {
          const pipeline = this._pipeline;
          const pipelineSceneData = pipeline.pipelineSceneData;
          const shadowInfo = pipelineSceneData.shadows;
          const descriptorSet = this._globalDS;
          const cmdBuff = pipeline.commandBuffers[0];
          const level = this._level;
          const device = pipeline.device;
          if (!this._light || !this._shadowFrameBuffer) {
            return;
          }
          this._pipeline.pipelineUBO.updateShadowUBOLight(descriptorSet, this._light, level);
          this._additiveShadowQueue.gatherLightPasses(camera, this._light, cmdBuff, level);
          const shadowMapSize = shadowInfo.size;
          switch (this._light.type) {
            case LightType.DIRECTIONAL:
              {
                const mainLight = this._light;
                if (mainLight.shadowFixedArea || mainLight.csmLevel === CSMLevel.LEVEL_1 || !pipelineSceneData.csmSupported) {
                  this._renderArea.x = 0;
                  this._renderArea.y = 0;
                  this._renderArea.width = shadowMapSize.x;
                  this._renderArea.height = shadowMapSize.y;
                } else {
                  const screenSpaceSignY = device.capabilities.screenSpaceSignY;
                  this._renderArea.x = level % 2 * 0.5 * shadowMapSize.x;
                  if (screenSpaceSignY > 0.0) {
                    this._renderArea.y = (1 - Math.floor(level / 2)) * 0.5 * shadowMapSize.y;
                  } else {
                    this._renderArea.y = Math.floor(level / 2) * 0.5 * shadowMapSize.y;
                  }
                  this._renderArea.width = 0.5 * shadowMapSize.x;
                  this._renderArea.height = 0.5 * shadowMapSize.y;
                }
                break;
              }
            case LightType.SPOT:
              {
                this._renderArea.x = 0;
                this._renderArea.y = 0;
                this._renderArea.width = shadowMapSize.x;
                this._renderArea.height = shadowMapSize.y;
                break;
              }
            default:
          }
          const renderPass = this._shadowFrameBuffer.renderPass;
          cmdBuff.beginRenderPass(renderPass, this._shadowFrameBuffer, this._renderArea, colors, camera.clearDepth, camera.clearStencil);
          cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, descriptorSet);
          this._additiveShadowQueue.recordCommandBuffer(device, renderPass, cmdBuff);
          cmdBuff.endRenderPass();
          this._isShadowMapCleared = false;
        }
        activate(pipeline, flow) {
          super.activate(pipeline, flow);
          this._additiveShadowQueue = new RenderShadowMapBatchedQueue(pipeline);
          this._isShadowMapCleared = false;
        }
      }, _class2.initInfo = {
        name: 'ShadowStage',
        priority: ForwardStagePriority.FORWARD,
        tag: 0
      }, _class2)) || _class));
    }
  };
});