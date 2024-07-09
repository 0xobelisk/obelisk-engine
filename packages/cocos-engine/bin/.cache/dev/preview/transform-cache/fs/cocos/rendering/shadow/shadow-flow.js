System.register("q-bundled:///fs/cocos/rendering/shadow/shadow-flow.js", ["../../core/data/decorators/index.js", "../define.js", "../render-flow.js", "../enum.js", "./shadow-stage.js", "../../gfx/index.js", "../pipeline-serialization.js", "../../render-scene/scene/shadows.js", "../../render-scene/scene/light.js"], function (_export, _context) {
  "use strict";

  var ccclass, PIPELINE_FLOW_SHADOW, supportsR32FloatTexture, UBOCamera, UBOCSM, UBOGlobal, UBOShadow, RenderFlow, ForwardFlowPriority, ShadowStage, LoadOp, StoreOp, Format, TextureType, TextureUsageBit, ColorAttachment, DepthStencilAttachment, RenderPassInfo, TextureInfo, FramebufferInfo, API, RenderFlowTag, PCFType, ShadowType, LightType, _dec, _class, _class2, _validLights, ShadowFlow;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_defineJs) {
      PIPELINE_FLOW_SHADOW = _defineJs.PIPELINE_FLOW_SHADOW;
      supportsR32FloatTexture = _defineJs.supportsR32FloatTexture;
      UBOCamera = _defineJs.UBOCamera;
      UBOCSM = _defineJs.UBOCSM;
      UBOGlobal = _defineJs.UBOGlobal;
      UBOShadow = _defineJs.UBOShadow;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_enumJs) {
      ForwardFlowPriority = _enumJs.ForwardFlowPriority;
    }, function (_shadowStageJs) {
      ShadowStage = _shadowStageJs.ShadowStage;
    }, function (_gfxIndexJs) {
      LoadOp = _gfxIndexJs.LoadOp;
      StoreOp = _gfxIndexJs.StoreOp;
      Format = _gfxIndexJs.Format;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      ColorAttachment = _gfxIndexJs.ColorAttachment;
      DepthStencilAttachment = _gfxIndexJs.DepthStencilAttachment;
      RenderPassInfo = _gfxIndexJs.RenderPassInfo;
      TextureInfo = _gfxIndexJs.TextureInfo;
      FramebufferInfo = _gfxIndexJs.FramebufferInfo;
      API = _gfxIndexJs.API;
    }, function (_pipelineSerializationJs) {
      RenderFlowTag = _pipelineSerializationJs.RenderFlowTag;
    }, function (_renderSceneSceneShadowsJs) {
      PCFType = _renderSceneSceneShadowsJs.PCFType;
      ShadowType = _renderSceneSceneShadowsJs.ShadowType;
    }, function (_renderSceneSceneLightJs) {
      LightType = _renderSceneSceneLightJs.LightType;
    }],
    execute: function () {
      _validLights = [];
      /**
       * @en Shadow map render flow
       * @zh 阴影贴图绘制流程
       */
      _export("ShadowFlow", ShadowFlow = (_dec = ccclass('ShadowFlow'), _dec(_class = (_class2 = /*#__PURE__*/function (_RenderFlow) {
        _inheritsLoose(ShadowFlow, _RenderFlow);
        function ShadowFlow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _RenderFlow.call.apply(_RenderFlow, [this].concat(args)) || this;
          _this._shadowRenderPass = null;
          return _this;
        }
        var _proto = ShadowFlow.prototype;
        _proto.initialize = function initialize(info) {
          _RenderFlow.prototype.initialize.call(this, info);
          if (this._stages.length === 0) {
            // add shadowMap-stages
            var shadowMapStage = new ShadowStage();
            shadowMapStage.initialize(ShadowStage.initInfo);
            this._stages.push(shadowMapStage);
          }
          return true;
        };
        _proto.activate = function activate(pipeline) {
          _RenderFlow.prototype.activate.call(this, pipeline);

          // 0: SHADOWMAP_FLOAT, 1: SHADOWMAP_RGBE.
          var isRGBE = supportsR32FloatTexture(pipeline.device) ? 0 : 1;
          pipeline.macros.CC_SHADOWMAP_FORMAT = isRGBE;

          // 0: SHADOWMAP_LINER_DEPTH_OFF, 1: SHADOWMAP_LINER_DEPTH_ON.
          var isLinear = pipeline.device.gfxAPI === API.WEBGL ? 1 : 0;
          pipeline.macros.CC_SHADOWMAP_USE_LINEAR_DEPTH = isLinear;

          // 0: UNIFORM_VECTORS_LESS_EQUAL_64, 1: UNIFORM_VECTORS_GREATER_EQUAL_125.
          pipeline.pipelineSceneData.csmSupported = pipeline.device.capabilities.maxFragmentUniformVectors >= (UBOGlobal.COUNT + UBOCamera.COUNT + UBOShadow.COUNT + UBOCSM.COUNT) / 4;
          pipeline.macros.CC_SUPPORT_CASCADED_SHADOW_MAP = pipeline.pipelineSceneData.csmSupported;

          // 0: CC_SHADOW_NONE, 1: CC_SHADOW_PLANAR, 2: CC_SHADOW_MAP
          pipeline.macros.CC_SHADOW_TYPE = 0;

          // 0: PCFType.HARD, 1: PCFType.SOFT, 2: PCFType.SOFT_2X, 3: PCFType.SOFT_4X
          pipeline.macros.CC_DIR_SHADOW_PCF_TYPE = PCFType.HARD;

          // 0: CC_DIR_LIGHT_SHADOW_NONE, 1: CC_DIR_LIGHT_SHADOW_UNIFORM, 2: CC_DIR_LIGHT_SHADOW_CASCADED, 3: CC_DIR_LIGHT_SHADOW_VARIANCE
          pipeline.macros.CC_DIR_LIGHT_SHADOW_TYPE = 0;

          // 0: CC_CASCADED_LAYERS_TRANSITION_OFF, 1: CC_CASCADED_LAYERS_TRANSITION_ON
          pipeline.macros.CC_CASCADED_LAYERS_TRANSITION = 0;
          pipeline.onGlobalPipelineStateChanged();
        };
        _proto.render = function render(camera) {
          var pipeline = this._pipeline;
          var shadowInfo = pipeline.pipelineSceneData.shadows;
          var csmLayers = pipeline.pipelineSceneData.csmLayers;
          var shadowFrameBufferMap = pipeline.pipelineSceneData.shadowFrameBufferMap;
          var castShadowObjects = csmLayers.castShadowObjects;
          var validPunctualLights = this._pipeline.pipelineSceneData.validPunctualLights;
          if (!shadowInfo.enabled || shadowInfo.type !== ShadowType.ShadowMap) {
            return;
          }
          var n = 0;
          var m = 0;
          for (; n < shadowInfo.maxReceived && m < validPunctualLights.length;) {
            var light = validPunctualLights[m];
            if (light.type === LightType.SPOT) {
              var spotLight = light;
              if (spotLight.shadowEnabled) {
                _validLights.push(light);
                n++;
              }
            }
            m++;
          }
          if (castShadowObjects.length === 0) {
            this.clearShadowMap(_validLights, camera);
            return;
          }
          if (shadowInfo.shadowMapDirty) {
            this.resizeShadowMap();
          }
          var _ref = camera.scene,
            mainLight = _ref.mainLight;
          if (mainLight && mainLight.shadowEnabled) {
            var globalDS = pipeline.descriptorSet;
            if (!shadowFrameBufferMap.has(mainLight)) {
              this._initShadowFrameBuffer(pipeline, mainLight, camera.window.swapchain);
            }
            var shadowFrameBuffer = shadowFrameBufferMap.get(mainLight);
            if (mainLight.shadowFixedArea) {
              this._renderStage(camera, mainLight, shadowFrameBuffer, globalDS);
            } else {
              var csmLevel = pipeline.pipelineSceneData.csmSupported ? mainLight.csmLevel : 1;
              for (var i = 0; i < csmLevel; i++) {
                this._renderStage(camera, mainLight, shadowFrameBuffer, globalDS, i);
              }
            }
          }
          for (var l = 0; l < _validLights.length; l++) {
            var _light = _validLights[l];
            var ds = pipeline.globalDSManager.getOrCreateDescriptorSet(_light);
            if (!shadowFrameBufferMap.has(_light)) {
              this._initShadowFrameBuffer(pipeline, _light, camera.window.swapchain);
            }
            var _shadowFrameBuffer = shadowFrameBufferMap.get(_light);
            this._renderStage(camera, _light, _shadowFrameBuffer, ds);
          }
          _validLights.length = 0;
        };
        _proto.destroy = function destroy() {
          _RenderFlow.prototype.destroy.call(this);
          if (this._pipeline) {
            var shadowFrameBufferMap = this._pipeline.pipelineSceneData.shadowFrameBufferMap;
            var shadowFrameBuffers = Array.from(shadowFrameBufferMap.values());
            for (var i = 0; i < shadowFrameBuffers.length; i++) {
              var frameBuffer = shadowFrameBuffers[i];
              if (!frameBuffer) {
                continue;
              }
              var renderTargets = frameBuffer.colorTextures;
              for (var j = 0; j < renderTargets.length; j++) {
                var renderTarget = renderTargets[j];
                if (renderTarget) {
                  renderTarget.destroy();
                }
              }
              renderTargets.length = 0;
              var depth = frameBuffer.depthStencilTexture;
              if (depth) {
                depth.destroy();
              }
              frameBuffer.destroy();
            }
            shadowFrameBufferMap.clear();
          }
          if (this._shadowRenderPass) {
            this._shadowRenderPass.destroy();
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._initShadowFrameBuffer = function _initShadowFrameBuffer(pipeline, light, swapchain) {
          var device = pipeline.device;
          var shadows = pipeline.pipelineSceneData.shadows;
          var shadowMapSize = shadows.size;
          var shadowFrameBufferMap = pipeline.pipelineSceneData.shadowFrameBufferMap;
          var format = supportsR32FloatTexture(device) ? Format.R32F : Format.RGBA8;
          if (!this._shadowRenderPass) {
            var colorAttachment = new ColorAttachment();
            colorAttachment.format = format;
            colorAttachment.loadOp = LoadOp.CLEAR; // should clear color attachment
            colorAttachment.storeOp = StoreOp.STORE;
            colorAttachment.sampleCount = 1;
            var depthStencilAttachment = new DepthStencilAttachment();
            depthStencilAttachment.format = Format.DEPTH_STENCIL;
            depthStencilAttachment.depthLoadOp = LoadOp.CLEAR;
            depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;
            depthStencilAttachment.stencilLoadOp = LoadOp.CLEAR;
            depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
            depthStencilAttachment.sampleCount = 1;
            var renderPassInfo = new RenderPassInfo([colorAttachment], depthStencilAttachment);
            this._shadowRenderPass = device.createRenderPass(renderPassInfo);
          }
          var shadowRenderTargets = [];
          shadowRenderTargets.push(device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, format, shadowMapSize.x, shadowMapSize.y)));
          var depth = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.DEPTH_STENCIL_ATTACHMENT, Format.DEPTH_STENCIL, shadowMapSize.x, shadowMapSize.y));
          var shadowFrameBuffer = device.createFramebuffer(new FramebufferInfo(this._shadowRenderPass, shadowRenderTargets, depth));

          // Cache frameBuffer
          shadowFrameBufferMap.set(light, shadowFrameBuffer);
        };
        _proto._renderStage = function _renderStage(camera, light, shadowFrameBuffer, globalDS, level) {
          if (level === void 0) {
            level = 0;
          }
          for (var i = 0; i < this._stages.length; i++) {
            var shadowStage = this._stages[i];
            shadowStage.setUsage(globalDS, light, shadowFrameBuffer, level);
            shadowStage.render(camera);
          }
        };
        _proto.clearShadowMap = function clearShadowMap(validLights, camera) {
          var pipeline = this._pipeline;
          var scene = pipeline.pipelineSceneData;
          var _ref2 = camera.scene,
            mainLight = _ref2.mainLight;
          if (mainLight) {
            var globalDS = this._pipeline.descriptorSet;
            if (!scene.shadowFrameBufferMap.has(mainLight)) {
              this._initShadowFrameBuffer(this._pipeline, mainLight, camera.window.swapchain);
            }
            var shadowFrameBuffer = scene.shadowFrameBufferMap.get(mainLight);
            for (var i = 0; i < this._stages.length; i++) {
              var shadowStage = this._stages[i];
              shadowStage.setUsage(globalDS, mainLight, shadowFrameBuffer);
              shadowStage.clearFramebuffer(camera);
            }
          }
          for (var l = 0; l < validLights.length; l++) {
            var light = validLights[l];
            var ds = pipeline.globalDSManager.getOrCreateDescriptorSet(light);
            if (!scene.shadowFrameBufferMap.has(light)) {
              this._initShadowFrameBuffer(this._pipeline, light, camera.window.swapchain);
            }
            var _shadowFrameBuffer2 = scene.shadowFrameBufferMap.get(light);
            for (var _i = 0; _i < this._stages.length; _i++) {
              var _shadowStage = this._stages[_i];
              _shadowStage.setUsage(ds, light, _shadowFrameBuffer2);
              _shadowStage.clearFramebuffer(camera);
            }
          }
        };
        _proto.resizeShadowMap = function resizeShadowMap() {
          var shadows = this._pipeline.pipelineSceneData.shadows;
          var shadowMapSize = shadows.size;
          var pipeline = this._pipeline;
          var device = pipeline.device;
          var shadowFrameBufferMap = pipeline.pipelineSceneData.shadowFrameBufferMap;
          var format = supportsR32FloatTexture(device) ? Format.R32F : Format.RGBA8;
          for (var _iterator = _createForOfIteratorHelperLoose(shadowFrameBufferMap.keys()), _step; !(_step = _iterator()).done;) {
            var key = _step.value;
            var frameBuffer = shadowFrameBufferMap.get(key);
            if (!frameBuffer) {
              continue;
            }
            var renderTargets = [];
            renderTargets.push(pipeline.device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, format, shadowMapSize.x, shadowMapSize.y)));
            var depth = frameBuffer.depthStencilTexture;
            if (depth) {
              depth.resize(shadowMapSize.x, shadowMapSize.y);
            }
            var shadowRenderPass = frameBuffer.renderPass;
            frameBuffer.destroy();
            var newFrameBuffer = device.createFramebuffer(new FramebufferInfo(shadowRenderPass, renderTargets, depth));
            shadowFrameBufferMap.set(key, newFrameBuffer);
          }
          shadows.shadowMapDirty = false;
        };
        return ShadowFlow;
      }(RenderFlow), _class2.initInfo = {
        name: PIPELINE_FLOW_SHADOW,
        priority: ForwardFlowPriority.SHADOW,
        tag: RenderFlowTag.SCENE,
        stages: []
      }, _class2)) || _class));
    }
  };
});