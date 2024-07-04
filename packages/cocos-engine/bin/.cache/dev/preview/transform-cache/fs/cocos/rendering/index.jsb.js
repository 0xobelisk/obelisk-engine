System.register("q-bundled:///fs/cocos/rendering/index.jsb.js", ["../../../virtual/internal%253Aconstants.js", "../core/index.js", "./define.js", "../core/data/class-decorator.js", "../core/global-exports.js", "../native-binding/decorators.js", "../asset/assets/render-texture.js", "./pass-phase.js", "./pipeline-event.js"], function (_export, _context) {
  "use strict";

  var OPEN_HARMONY, ccenum, CCString, pipeline, ccclass, serializable, editable, type, legacyCC, decors, RenderTexture, _dec, _dec2, _class, _initializer, _initializer2, _initializer3, _dec3, _dec4, _class3, _class4, _initializer4, _initializer5, RenderPipeline, RenderFlow, RenderStage, InstancedBuffer, PipelineStateManager, ForwardPipeline, ForwardFlow, ShadowFlow, ForwardStage, ShadowStage, DeferredPipeline, MainFlow, LightingStage, PostProcessStage, GbufferStage, BloomStage, ReflectionProbeFlow, ReflectionProbeStage, getOrCreatePipelineState, forwardPipelineProto, oldForwardOnLoaded, forwardFlowProto, shadowFlowProto, reflectionProbeFlowProto, forwardStageProto, shadowStageProto, reflectionProbeStage, RenderQueueSortMode, RenderQueueDesc, deferredPipelineProto, oldDeferredOnLoaded, mainFlowProto, gbufferStageProto, lightingStageProto, bloomStageProto, postProcessStageProto, RenderTextureConfig, proxyArrayAttribute, Material;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function proxyArrayAttributeImpl(proto, attr) {
    var proxyTarget = "_" + attr + "_target";
    var arrayProxy = function arrayProxy(self, targetArrayAttr) {
      return new Proxy(self[targetArrayAttr], {
        get: function get(targetArray, prop, receiver) {
          return Reflect.get(targetArray, prop, receiver);
        },
        set: function set(targetArray, prop, receiver) {
          var ret = Reflect.set(targetArray, prop, receiver);
          self[targetArrayAttr] = targetArray;
          return ret;
        }
      });
    };
    Object.defineProperty(proto, attr, {
      configurable: true,
      enumerable: true,
      get: function get() {
        this[proxyTarget] || (this[proxyTarget] = []);
        return arrayProxy(this, proxyTarget);
      },
      set: function set(v) {
        this[proxyTarget] = v;
      }
    });
  }
  _export("RenderQueueSortMode", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      OPEN_HARMONY = _virtualInternal253AconstantsJs.OPEN_HARMONY;
    }, function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
      CCString = _coreIndexJs.CCString;
    }, function (_defineJs) {
      pipeline = _defineJs;
    }, function (_coreDataClassDecoratorJs) {
      ccclass = _coreDataClassDecoratorJs.ccclass;
      serializable = _coreDataClassDecoratorJs.serializable;
      editable = _coreDataClassDecoratorJs.editable;
      type = _coreDataClassDecoratorJs.type;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_nativeBindingDecoratorsJs) {
      decors = _nativeBindingDecoratorsJs;
    }, function (_assetAssetsRenderTextureJs) {
      RenderTexture = _assetAssetsRenderTextureJs.RenderTexture;
    }, function (_passPhaseJs) {
      var _exportObj = {};
      for (var _key in _passPhaseJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _passPhaseJs[_key];
      }
      _export(_exportObj);
    }, function (_pipelineEventJs) {
      _export("PipelineEventType", _pipelineEventJs.PipelineEventType);
    }],
    execute: function () {
      _export("pipeline", pipeline);
      _export("RenderPipeline", RenderPipeline = nr.RenderPipeline);
      _export("RenderFlow", RenderFlow = nr.RenderFlow);
      _export("RenderStage", RenderStage = nr.RenderStage);
      _export("InstancedBuffer", InstancedBuffer = nr.InstancedBuffer);
      _export("PipelineStateManager", PipelineStateManager = nr.PipelineStateManager);
      _export("ForwardPipeline", ForwardPipeline = nr.ForwardPipeline);
      _export("ForwardFlow", ForwardFlow = nr.ForwardFlow);
      _export("ShadowFlow", ShadowFlow = nr.ShadowFlow);
      _export("ForwardStage", ForwardStage = nr.ForwardStage);
      _export("ShadowStage", ShadowStage = nr.ShadowStage);
      _export("DeferredPipeline", DeferredPipeline = nr.DeferredPipeline);
      _export("MainFlow", MainFlow = nr.MainFlow);
      _export("LightingStage", LightingStage = nr.LightingStage);
      _export("PostProcessStage", PostProcessStage = nr.PostProcessStage);
      _export("GbufferStage", GbufferStage = nr.GbufferStage);
      _export("BloomStage", BloomStage = nr.BloomStage);
      _export("ReflectionProbeFlow", ReflectionProbeFlow = nr.ReflectionProbeFlow);
      _export("ReflectionProbeStage", ReflectionProbeStage = nr.ReflectionProbeStage);
      getOrCreatePipelineState = nr.PipelineStateManager.getOrCreatePipelineState;
      nr.PipelineStateManager.getOrCreatePipelineState = function (device, pass, shader, renderPass, ia) {
        return getOrCreatePipelineState(pass, shader, renderPass, ia); //cjh TODO: remove hacking. c++ API doesn't access device argument.
      };

      // ForwardPipeline
      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      forwardPipelineProto = ForwardPipeline.prototype;
      forwardPipelineProto._ctor = function () {
        this._tag = 0;
        this._flows = [];
      };
      forwardPipelineProto.init = function () {
        for (var i = 0; i < this._flows.length; i++) {
          this._flows[i].init(this);
        }
        var info = {
          tag: this._tag,
          flows: this._flows
        };
        this.initialize(info);
      };
      oldForwardOnLoaded = forwardPipelineProto.onLoaded; // hook to invoke init after deserialization
      forwardPipelineProto.onLoaded = function () {
        if (oldForwardOnLoaded) oldForwardOnLoaded.call(this);
        for (var i = 0; i < this._flows.length; i++) {
          this._flows[i].init(this);
        }
        var info = {
          tag: this._tag,
          flows: this._flows
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      forwardFlowProto = ForwardFlow.prototype;
      forwardFlowProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this._stages = [];
      };
      forwardFlowProto.init = function (pipeline) {
        for (var i = 0; i < this._stages.length; i++) {
          this._stages[i].init(pipeline);
        }
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          stages: this._stages
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      shadowFlowProto = ShadowFlow.prototype;
      shadowFlowProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this._stages = [];
      };
      shadowFlowProto.init = function (pipeline) {
        for (var i = 0; i < this._stages.length; i++) {
          this._stages[i].init(pipeline);
        }
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          stages: this._stages
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      reflectionProbeFlowProto = ReflectionProbeFlow.prototype;
      reflectionProbeFlowProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this._stages = [];
      };
      reflectionProbeFlowProto.init = function (pipeline) {
        for (var i = 0; i < this._stages.length; i++) {
          this._stages[i].init(pipeline);
        }
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          stages: this._stages
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      forwardStageProto = ForwardStage.prototype;
      forwardStageProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this.renderQueues = [];
      };
      forwardStageProto.init = function (pipeline) {
        var queues = [];
        for (var i = 0; i < this.renderQueues.length; i++) {
          // @ts-ignore
          queues.push(this.renderQueues[i].init());
        }
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          renderQueues: queues
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      shadowStageProto = ShadowStage.prototype;
      shadowStageProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      reflectionProbeStage = ReflectionProbeStage.prototype;
      reflectionProbeStage._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this.renderQueues = [];
      };
      reflectionProbeStage.init = function (pipeline) {
        var queues = [];
        for (var i = 0; i < this.renderQueues.length; i++) {
          // @ts-ignore
          queues.push(this.renderQueues[i].init());
        }
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          renderQueues: queues
        };
        this.initialize(info);
      };
      (function (RenderQueueSortMode) {
        RenderQueueSortMode[RenderQueueSortMode["FRONT_TO_BACK"] = 0] = "FRONT_TO_BACK";
        RenderQueueSortMode[RenderQueueSortMode["BACK_TO_FRONT"] = 1] = "BACK_TO_FRONT";
      })(RenderQueueSortMode || _export("RenderQueueSortMode", RenderQueueSortMode = {}));
      ccenum(RenderQueueSortMode);
      shadowStageProto.init = function (pipeline) {
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          renderQueues: []
        };
        this.initialize(info);
      };
      _export("RenderQueueDesc", RenderQueueDesc = (_dec = type(RenderQueueSortMode), _dec2 = type([CCString]), (_class = /*#__PURE__*/function () {
        function RenderQueueDesc() {
          /**
          * @en Whether the render queue is a transparent queue
          * @zh 当前队列是否是半透明队列
          */
          this.isTransparent = _initializer && _initializer();
          /**
           * @en The sort mode of the render queue
           * @zh 渲染队列的排序模式
           */
          this.sortMode = _initializer2 && _initializer2();
          /**
          * @en The stages using this queue
          * @zh 使用当前渲染队列的阶段列表
          */
          this.stages = _initializer3 && _initializer3();
          this.stages = [];
        }
        var _proto = RenderQueueDesc.prototype;
        _proto.init = function init() {
          return new nr.RenderQueueDesc(this.isTransparent, this.sortMode, this.stages);
        };
        return RenderQueueDesc;
      }(), (_initializer = _applyDecoratedInitializer(_class.prototype, "isTransparent", [serializable, editable], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class.prototype, "sortMode", [_dec], function () {
        return RenderQueueSortMode.FRONT_TO_BACK;
      }), _initializer3 = _applyDecoratedInitializer(_class.prototype, "stages", [_dec2], function () {
        return [];
      })), _class))); // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      deferredPipelineProto = DeferredPipeline.prototype;
      deferredPipelineProto._ctor = function () {
        this._tag = 0;
        this._flows = [];
        this.renderTextures = [];
        this.materials = [];
      };
      oldDeferredOnLoaded = deferredPipelineProto.onLoaded; // hook to invoke init after deserialization
      deferredPipelineProto.onLoaded = function () {
        if (oldDeferredOnLoaded) oldDeferredOnLoaded.call(this);
        for (var i = 0; i < this._flows.length; i++) {
          this._flows[i].init(this);
        }
        var info = {
          tag: this._tag,
          flows: this._flows
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      mainFlowProto = MainFlow.prototype;
      mainFlowProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this._stages = [];
      };
      mainFlowProto.init = function (pipeline) {
        for (var i = 0; i < this._stages.length; i++) {
          this._stages[i].init(pipeline);
        }
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          stages: this._stages
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      gbufferStageProto = GbufferStage.prototype;
      gbufferStageProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this.renderQueues = [];
      };
      gbufferStageProto.init = function (pipeline) {
        var queues = [];
        for (var i = 0; i < this.renderQueues.length; i++) {
          // @ts-ignore
          queues.push(this.renderQueues[i].init());
        }
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          renderQueues: queues
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      lightingStageProto = LightingStage.prototype;
      lightingStageProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this.renderQueues = [];
        this._deferredMaterial = null;
      };
      lightingStageProto.init = function (pipeline) {
        var queues = [];
        for (var i = 0; i < this.renderQueues.length; i++) {
          // @ts-ignore
          queues.push(this.renderQueues[i].init());
        }
        pipeline.pipelineSceneData.deferredLightingMaterial = this._deferredMaterial;
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          renderQueues: queues
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      bloomStageProto = BloomStage.prototype;
      bloomStageProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this.renderQueues = [];
        this._bloomMaterial = null;
      };
      bloomStageProto.init = function (pipeline) {
        var queues = [];
        for (var i = 0; i < this.renderQueues.length; i++) {
          // @ts-ignore
          queues.push(this.renderQueues[i].init());
        }
        pipeline.pipelineSceneData.bloomMaterial = this._bloomMaterial;
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          renderQueues: queues
        };
        this.initialize(info);
      };

      // TODO: we mark it as type of any, because here we have many dynamic injected property @dumganhar
      postProcessStageProto = PostProcessStage.prototype;
      postProcessStageProto._ctor = function () {
        this._name = 0;
        this._priority = 0;
        this._tag = 0;
        this.renderQueues = [];
        this._postProcessMaterial = null;
      };
      postProcessStageProto.init = function (pipeline) {
        var queues = [];
        for (var i = 0; i < this.renderQueues.length; i++) {
          // @ts-ignore
          queues.push(this.renderQueues[i].init());
        }
        pipeline.pipelineSceneData.postProcessMaterial = this._postProcessMaterial;
        var info = {
          name: this._name,
          priority: this._priority,
          tag: this._tag,
          renderQueues: queues
        };
        this.initialize(info);
      };
      legacyCC.RenderFlow = RenderFlow;
      legacyCC.RenderStage = RenderStage;
      legacyCC.RenderPipeline = RenderPipeline;
      RenderTextureConfig = (_dec3 = ccclass('RenderTextureConfig'), _dec4 = type(RenderTexture), _dec3(_class3 = (_class4 = function RenderTextureConfig() {
        this.name = _initializer4 && _initializer4();
        this.texture = _initializer5 && _initializer5();
      }, (_initializer4 = _applyDecoratedInitializer(_class4.prototype, "name", [serializable, editable], function () {
        return '';
      }), _initializer5 = _applyDecoratedInitializer(_class4.prototype, "texture", [_dec4], function () {
        return null;
      })), _class4)) || _class3);
      proxyArrayAttribute = proxyArrayAttributeImpl;
      if (!OPEN_HARMONY) {
        // WORKAROUND: the proxy array getLength crashed on OH platform
        proxyArrayAttribute(RenderFlow.prototype, '_stages');
        proxyArrayAttribute(RenderPipeline.prototype, '_flows');
      }

      //-------------------- register types -------------------- 
      Material = jsb.Material;
      decors.patch_RenderQueueDesc({
        RenderQueueDesc: RenderQueueDesc,
        RenderQueueSortMode: RenderQueueSortMode,
        CCString: CCString
      });
      decors.patch_RenderStage({
        RenderStage: RenderStage
      });
      decors.patch_ReflectionProbeStage({
        ReflectionProbeStage: ReflectionProbeStage
      });
      decors.patch_GbufferStage({
        GbufferStage: GbufferStage,
        RenderQueueDesc: RenderQueueDesc
      });
      decors.patch_LightingStage({
        LightingStage: LightingStage,
        RenderQueueDesc: RenderQueueDesc,
        Material: Material
      });
      decors.patch_BloomStage({
        BloomStage: BloomStage,
        Material: Material
      });
      decors.patch_PostProcessStage({
        PostProcessStage: PostProcessStage,
        Material: Material,
        RenderQueueDesc: RenderQueueDesc
      });
      decors.patch_ForwardStage({
        ForwardStage: ForwardStage,
        RenderQueueDesc: RenderQueueDesc
      });
      decors.patch_ShadowStage({
        ShadowStage: ShadowStage
      });
      decors.patch_RenderFlow({
        RenderFlow: RenderFlow,
        RenderStage: RenderStage
      });
      decors.patch_MainFlow({
        MainFlow: MainFlow
      });
      decors.patch_ForwardFlow({
        ForwardFlow: ForwardFlow
      });
      decors.patch_ShadowFlow({
        ShadowFlow: ShadowFlow
      });
      decors.patch_ReflectionProbeFlow({
        ReflectionProbeFlow: ReflectionProbeFlow
      });
      decors.patch_cc_RenderPipeline({
        RenderPipeline: RenderPipeline,
        RenderFlow: RenderFlow
      });
      decors.patch_ForwardPipeline({
        ForwardPipeline: ForwardPipeline,
        RenderTextureConfig: RenderTextureConfig
      });
      decors.patch_DeferredPipeline({
        DeferredPipeline: DeferredPipeline,
        RenderTextureConfig: RenderTextureConfig
      });
    }
  };
});