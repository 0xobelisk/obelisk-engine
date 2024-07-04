System.register("q-bundled:///fs/cocos/rendering/forward/forward-pipeline.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../render-pipeline.js", "./forward-flow.js", "../pipeline-serialization.js", "../shadow/shadow-flow.js", "../define.js", "../../asset/asset-manager/builtin-res-mgr.js", "../../core/platform/debug.js", "../pipeline-scene-data.js", "../reflection-probe/reflection-probe-flow.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, type, serializable, EDITOR, RenderPipeline, ForwardFlow, RenderTextureConfig, ShadowFlow, UBOGlobal, UBOShadow, UBOCamera, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, builtinResMgr, errorID, PipelineSceneData, ReflectionProbeFlow, _dec, _dec2, _dec3, _class, _class2, _initializer, PIPELINE_TYPE, ForwardPipeline;
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
  function createDefaultPipeline() {
    var rppl = new ForwardPipeline();
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
      _export("ForwardPipeline", ForwardPipeline = (_dec = ccclass('ForwardPipeline'), _dec2 = type([RenderTextureConfig]), _dec3 = displayOrder(2), _dec(_class = (_class2 = /*#__PURE__*/function (_RenderPipeline) {
        _inheritsLoose(ForwardPipeline, _RenderPipeline);
        function ForwardPipeline() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _RenderPipeline.call.apply(_RenderPipeline, [this].concat(args)) || this;
          _this.renderTextures = _initializer && _initializer();
          _this._postRenderPass = null;
          return _this;
        }
        var _proto = ForwardPipeline.prototype;
        _proto.initialize = function initialize(info) {
          _RenderPipeline.prototype.initialize.call(this, info);
          if (this._flows.length === 0) {
            var shadowFlow = new ShadowFlow();
            shadowFlow.initialize(ShadowFlow.initInfo);
            this._flows.push(shadowFlow);
            var reflectionFlow = new ReflectionProbeFlow();
            reflectionFlow.initialize(ReflectionProbeFlow.initInfo);
            this._flows.push(reflectionFlow);
            var forwardFlow = new ForwardFlow();
            forwardFlow.initialize(ForwardFlow.initInfo);
            this._flows.push(forwardFlow);
          }
          return true;
        };
        _proto.activate = function activate(swapchain) {
          if (EDITOR) {
            console.info('Forward render pipeline initialized.');
          }
          this._macros = {
            CC_PIPELINE_TYPE: PIPELINE_TYPE
          };
          this._pipelineSceneData = new PipelineSceneData();
          if (!_RenderPipeline.prototype.activate.call(this, swapchain)) {
            return false;
          }
          if (!this._activeRenderer(swapchain)) {
            errorID(2402);
            return false;
          }
          return true;
        };
        _proto._ensureEnoughSize = function _ensureEnoughSize(cameras) {
          var newWidth = this._width;
          var newHeight = this._height;
          for (var i = 0; i < cameras.length; ++i) {
            var window = cameras[i].window;
            newWidth = Math.max(window.width, newWidth);
            newHeight = Math.max(window.height, newHeight);
          }
          if (newWidth !== this._width || newHeight !== this._height) {
            this._width = newWidth;
            this._height = newHeight;
          }
        };
        _proto.destroy = function destroy() {
          this._destroyUBOs();
          this._destroyQuadInputAssembler();
          var rpIter = this._renderPasses.values();
          var rpRes = rpIter.next();
          while (!rpRes.done) {
            rpRes.value.destroy();
            rpRes = rpIter.next();
          }
          this._commandBuffers.length = 0;
          return _RenderPipeline.prototype.destroy.call(this);
        };
        _proto._activeRenderer = function _activeRenderer(swapchain) {
          var device = this.device;
          this._commandBuffers.push(device.commandBuffer);
          var shadowMapSampler = this.globalDSManager.pointSampler;
          this._descriptorSet.bindSampler(UNIFORM_SHADOWMAP_BINDING, shadowMapSampler);
          this._descriptorSet.bindTexture(UNIFORM_SHADOWMAP_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
          this._descriptorSet.bindSampler(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, shadowMapSampler);
          this._descriptorSet.bindTexture(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
          this._descriptorSet.update();
          return true;
        };
        _proto._destroyUBOs = function _destroyUBOs() {
          if (this._descriptorSet) {
            this._descriptorSet.getBuffer(UBOGlobal.BINDING).destroy();
            this._descriptorSet.getBuffer(UBOShadow.BINDING).destroy();
            this._descriptorSet.getBuffer(UBOCamera.BINDING).destroy();
            this._descriptorSet.getTexture(UNIFORM_SHADOWMAP_BINDING).destroy();
            this._descriptorSet.getTexture(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING).destroy();
          }
        };
        _createClass(ForwardPipeline, [{
          key: "postRenderPass",
          get: function get() {
            return this._postRenderPass;
          }
        }]);
        return ForwardPipeline;
      }(RenderPipeline), (_initializer = _applyDecoratedInitializer(_class2.prototype, "renderTextures", [_dec2, serializable, _dec3], function () {
        return [];
      })), _class2)) || _class));
    }
  };
});