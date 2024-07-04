System.register("q-bundled:///fs/cocos/rendering/shadow/shadow-stage.js", ["../../core/data/decorators/index.js", "../../gfx/index.js", "../render-stage.js", "../enum.js", "../render-shadow-map-batched-queue.js", "../define.js", "../../render-scene/scene/light.js", "../../render-scene/scene/shadows.js"], function (_export, _context) {
  "use strict";

  var ccclass, Color, Rect, RenderStage, ForwardStagePriority, RenderShadowMapBatchedQueue, SetIndex, LightType, CSMLevel, _dec, _class, _class2, colors, ShadowStage;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("ShadowStage", ShadowStage = (_dec = ccclass('ShadowStage'), _dec(_class = (_class2 = /*#__PURE__*/function (_RenderStage) {
        _inheritsLoose(ShadowStage, _RenderStage);
        function ShadowStage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _RenderStage.call.apply(_RenderStage, [this].concat(args)) || this;
          _this._additiveShadowQueue = void 0;
          _this._shadowFrameBuffer = null;
          _this._renderArea = new Rect();
          _this._light = null;
          _this._globalDS = null;
          _this._level = 0;
          _this._isShadowMapCleared = false;
          return _this;
        }
        var _proto = ShadowStage.prototype;
        /**
         * @en Sets the render shadow map info
         * @zh 设置阴影渲染信息
         * @param light
         * @param shadowFrameBuffer
         * @param level 层级
         */
        _proto.setUsage = function setUsage(globalDS, light, shadowFrameBuffer, level) {
          if (level === void 0) {
            level = 0;
          }
          this._globalDS = globalDS;
          this._light = light;
          this._shadowFrameBuffer = shadowFrameBuffer;
          this._level = level;
        };
        _proto.destroy = function destroy() {
          var _this$_additiveShadow;
          this._shadowFrameBuffer = null;
          this._globalDS = null;
          this._light = null;
          (_this$_additiveShadow = this._additiveShadowQueue) === null || _this$_additiveShadow === void 0 ? void 0 : _this$_additiveShadow.clear();
        };
        _proto.clearFramebuffer = function clearFramebuffer(camera) {
          if (!this._light || !this._shadowFrameBuffer || this._isShadowMapCleared) {
            return;
          }
          colors[0].w = camera.clearColor.w;
          var pipeline = this._pipeline;
          var pipelineSceneData = pipeline.pipelineSceneData;
          var shadingScale = pipelineSceneData.shadingScale;
          var shadowInfo = pipelineSceneData.shadows;
          var vp = camera.viewport;
          var shadowMapSize = shadowInfo.size;
          this._renderArea.x = vp.x * shadowMapSize.x;
          this._renderArea.y = vp.y * shadowMapSize.y;
          this._renderArea.width = vp.width * shadowMapSize.x * shadingScale;
          this._renderArea.height = vp.height * shadowMapSize.y * shadingScale;
          var cmdBuff = pipeline.commandBuffers[0];
          var renderPass = this._shadowFrameBuffer.renderPass;
          cmdBuff.beginRenderPass(renderPass, this._shadowFrameBuffer, this._renderArea, colors, camera.clearDepth, camera.clearStencil);
          cmdBuff.endRenderPass();
          this._isShadowMapCleared = true;
        };
        _proto.render = function render(camera) {
          var pipeline = this._pipeline;
          var pipelineSceneData = pipeline.pipelineSceneData;
          var shadowInfo = pipelineSceneData.shadows;
          var descriptorSet = this._globalDS;
          var cmdBuff = pipeline.commandBuffers[0];
          var level = this._level;
          var device = pipeline.device;
          if (!this._light || !this._shadowFrameBuffer) {
            return;
          }
          this._pipeline.pipelineUBO.updateShadowUBOLight(descriptorSet, this._light, level);
          this._additiveShadowQueue.gatherLightPasses(camera, this._light, cmdBuff, level);
          var shadowMapSize = shadowInfo.size;
          switch (this._light.type) {
            case LightType.DIRECTIONAL:
              {
                var mainLight = this._light;
                if (mainLight.shadowFixedArea || mainLight.csmLevel === CSMLevel.LEVEL_1 || !pipelineSceneData.csmSupported) {
                  this._renderArea.x = 0;
                  this._renderArea.y = 0;
                  this._renderArea.width = shadowMapSize.x;
                  this._renderArea.height = shadowMapSize.y;
                } else {
                  var screenSpaceSignY = device.capabilities.screenSpaceSignY;
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
          var renderPass = this._shadowFrameBuffer.renderPass;
          cmdBuff.beginRenderPass(renderPass, this._shadowFrameBuffer, this._renderArea, colors, camera.clearDepth, camera.clearStencil);
          cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, descriptorSet);
          this._additiveShadowQueue.recordCommandBuffer(device, renderPass, cmdBuff);
          cmdBuff.endRenderPass();
          this._isShadowMapCleared = false;
        };
        _proto.activate = function activate(pipeline, flow) {
          _RenderStage.prototype.activate.call(this, pipeline, flow);
          this._additiveShadowQueue = new RenderShadowMapBatchedQueue(pipeline);
          this._isShadowMapCleared = false;
        };
        return ShadowStage;
      }(RenderStage), _class2.initInfo = {
        name: 'ShadowStage',
        priority: ForwardStagePriority.FORWARD,
        tag: 0
      }, _class2)) || _class));
    }
  };
});