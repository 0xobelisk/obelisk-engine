System.register(['./index-ce98320e.js', './scene-asset.jsb-0d4c6201.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './decorators-b63b63a2.js', './node-event-18d96a1b.js'], (function (exports) {
    'use strict';
    var ccenum, type, applyDecoratedInitializer, legacyCC, ccclass, CCString, serializable, settings, Settings, Pool, warnID, macro, log, assert, fastRemoveAt, fastRemove, EDITOR, NATIVE, replaceProperty, removeProperty, getError, EventTarget, Scheduler, isValid, assertID, CCObject, error, errorID, System, scalableContainerManager, RenderTexture, SceneAsset, assetManager, AssetManager, downloader, releaseManager, parseLoadResArgs, factory, resources, dependUtil, parser, setDefaultProgressCallback, ComponentScheduler, NodeActivator, Scene, Node, input, deviceManager, patch_RenderQueueDesc, patch_RenderStage, patch_ReflectionProbeStage, patch_GbufferStage, patch_LightingStage, patch_BloomStage, patch_PostProcessStage, patch_ForwardStage, patch_ShadowStage, patch_RenderFlow, patch_MainFlow, patch_ForwardFlow, patch_ShadowFlow, patch_ReflectionProbeFlow, patch_cc_RenderPipeline, patch_ForwardPipeline, patch_DeferredPipeline, pipeline, fetchPipeline, transform, changeExtname, BuiltinBundleName, extname, assets, Cache, Asset, getUuidFromURL, bundles, dirname, basename;
    return {
        setters: [function (module) {
            ccenum = module.ab;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            legacyCC = module.l;
            ccclass = module.by;
            CCString = module.aw;
            serializable = module.bf;
            settings = module.a_;
            Settings = module.aZ;
            Pool = module.P;
            warnID = module.d;
            macro = module.aM;
            log = module.a;
            assert = module.b;
            fastRemoveAt = module.bz;
            fastRemove = module.bA;
            EDITOR = module.bB;
            NATIVE = module.bC;
            replaceProperty = module.ag;
            removeProperty = module.ah;
            getError = module.aI;
            EventTarget = module.aD;
            Scheduler = module.aO;
            isValid = module.bm;
            assertID = module.g;
            CCObject = module.as;
            error = module.e;
            errorID = module.f;
            System = module.a$;
            scalableContainerManager = module.bD;
        }, function (module) {
            RenderTexture = module.R;
            SceneAsset = module.S;
        }, function (module) {
            assetManager = module.aq;
            AssetManager = module.ar;
            downloader = module.aD;
            releaseManager = module.aE;
            parseLoadResArgs = module.aF;
            factory = module.aG;
            resources = module.as;
            dependUtil = module.aH;
            parser = module.aI;
            setDefaultProgressCallback = module.aJ;
            ComponentScheduler = module.aK;
            NodeActivator = module.W;
            Scene = module.U;
            Node = module.Q;
            input = module.az;
        }, function (module) {
            deviceManager = module.d;
        }, function (module) {
            patch_RenderQueueDesc = module.p;
            patch_RenderStage = module.a;
            patch_ReflectionProbeStage = module.b;
            patch_GbufferStage = module.c;
            patch_LightingStage = module.d;
            patch_BloomStage = module.e;
            patch_PostProcessStage = module.f;
            patch_ForwardStage = module.g;
            patch_ShadowStage = module.h;
            patch_RenderFlow = module.i;
            patch_MainFlow = module.j;
            patch_ForwardFlow = module.k;
            patch_ShadowFlow = module.l;
            patch_ReflectionProbeFlow = module.m;
            patch_cc_RenderPipeline = module.n;
            patch_ForwardPipeline = module.o;
            patch_DeferredPipeline = module.q;
        }, function (module) {
            pipeline = module.h;
            fetchPipeline = module.i;
            transform = module.t;
            changeExtname = module.c;
            BuiltinBundleName = module.B;
            extname = module.e;
            assets = module.k;
            Cache = module.l;
            Asset = module.A;
            getUuidFromURL = module.n;
            bundles = module.o;
            dirname = module.d;
            basename = module.b;
        }],
        execute: (function () {

            let PipelineEventType; exports('l', PipelineEventType);
            (function (PipelineEventType) {
              PipelineEventType["RENDER_FRAME_BEGIN"] = "render-frame-begin";
              PipelineEventType["RENDER_FRAME_END"] = "render-frame-end";
              PipelineEventType["RENDER_CAMERA_BEGIN"] = "render-camera-begin";
              PipelineEventType["RENDER_CAMERA_END"] = "render-camera-end";
              PipelineEventType["ATTACHMENT_SCALE_CAHNGED"] = "attachment-scale-changed";
            })(PipelineEventType || (exports('l', PipelineEventType = {})));

            var _dec, _dec2, _class, _initializer, _initializer2, _initializer3, _dec3, _dec4, _class3, _class4, _initializer4, _initializer5;
            const RenderPipeline = exports('a', nr.RenderPipeline);
            const RenderFlow = exports('b', nr.RenderFlow);
            const RenderStage = exports('c', nr.RenderStage);
            const InstancedBuffer = exports('I', nr.InstancedBuffer);
            const PipelineStateManager = exports('P', nr.PipelineStateManager);
            const ForwardPipeline = exports('F', nr.ForwardPipeline);
            const ForwardFlow = exports('d', nr.ForwardFlow);
            const ShadowFlow = exports('S', nr.ShadowFlow);
            const ForwardStage = exports('e', nr.ForwardStage);
            const ShadowStage = exports('f', nr.ShadowStage);
            const DeferredPipeline = exports('D', nr.DeferredPipeline);
            const MainFlow = exports('M', nr.MainFlow);
            const LightingStage = exports('L', nr.LightingStage);
            const PostProcessStage = exports('g', nr.PostProcessStage);
            const GbufferStage = exports('G', nr.GbufferStage);
            const BloomStage = exports('B', nr.BloomStage);
            const ReflectionProbeFlow = exports('h', nr.ReflectionProbeFlow);
            const ReflectionProbeStage = exports('i', nr.ReflectionProbeStage);
            let getOrCreatePipelineState = nr.PipelineStateManager.getOrCreatePipelineState;
            nr.PipelineStateManager.getOrCreatePipelineState = function (device, pass, shader, renderPass, ia) {
              return getOrCreatePipelineState(pass, shader, renderPass, ia);
            };
            const forwardPipelineProto = ForwardPipeline.prototype;
            forwardPipelineProto._ctor = function () {
              this._tag = 0;
              this._flows = [];
            };
            forwardPipelineProto.init = function () {
              for (let i = 0; i < this._flows.length; i++) {
                this._flows[i].init(this);
              }
              const info = {
                tag: this._tag,
                flows: this._flows
              };
              this.initialize(info);
            };
            const oldForwardOnLoaded = forwardPipelineProto.onLoaded;
            forwardPipelineProto.onLoaded = function () {
              if (oldForwardOnLoaded) oldForwardOnLoaded.call(this);
              for (let i = 0; i < this._flows.length; i++) {
                this._flows[i].init(this);
              }
              const info = {
                tag: this._tag,
                flows: this._flows
              };
              this.initialize(info);
            };
            const forwardFlowProto = ForwardFlow.prototype;
            forwardFlowProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this._stages = [];
            };
            forwardFlowProto.init = function (pipeline) {
              for (let i = 0; i < this._stages.length; i++) {
                this._stages[i].init(pipeline);
              }
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                stages: this._stages
              };
              this.initialize(info);
            };
            const shadowFlowProto = ShadowFlow.prototype;
            shadowFlowProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this._stages = [];
            };
            shadowFlowProto.init = function (pipeline) {
              for (let i = 0; i < this._stages.length; i++) {
                this._stages[i].init(pipeline);
              }
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                stages: this._stages
              };
              this.initialize(info);
            };
            const reflectionProbeFlowProto = ReflectionProbeFlow.prototype;
            reflectionProbeFlowProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this._stages = [];
            };
            reflectionProbeFlowProto.init = function (pipeline) {
              for (let i = 0; i < this._stages.length; i++) {
                this._stages[i].init(pipeline);
              }
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                stages: this._stages
              };
              this.initialize(info);
            };
            const forwardStageProto = ForwardStage.prototype;
            forwardStageProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this.renderQueues = [];
            };
            forwardStageProto.init = function (pipeline) {
              const queues = [];
              for (let i = 0; i < this.renderQueues.length; i++) {
                queues.push(this.renderQueues[i].init());
              }
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                renderQueues: queues
              };
              this.initialize(info);
            };
            const shadowStageProto = ShadowStage.prototype;
            shadowStageProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
            };
            const reflectionProbeStage = ReflectionProbeStage.prototype;
            reflectionProbeStage._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this.renderQueues = [];
            };
            reflectionProbeStage.init = function (pipeline) {
              const queues = [];
              for (let i = 0; i < this.renderQueues.length; i++) {
                queues.push(this.renderQueues[i].init());
              }
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                renderQueues: queues
              };
              this.initialize(info);
            };
            let RenderQueueSortMode; exports('j', RenderQueueSortMode);
            (function (RenderQueueSortMode) {
              RenderQueueSortMode[RenderQueueSortMode["FRONT_TO_BACK"] = 0] = "FRONT_TO_BACK";
              RenderQueueSortMode[RenderQueueSortMode["BACK_TO_FRONT"] = 1] = "BACK_TO_FRONT";
            })(RenderQueueSortMode || (exports('j', RenderQueueSortMode = {})));
            ccenum(RenderQueueSortMode);
            shadowStageProto.init = function (pipeline) {
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                renderQueues: []
              };
              this.initialize(info);
            };
            let RenderQueueDesc = exports('k', (_dec = type(RenderQueueSortMode), _dec2 = type([CCString]), (_class = class RenderQueueDesc {
              constructor() {
                this.isTransparent = _initializer && _initializer();
                this.sortMode = _initializer2 && _initializer2();
                this.stages = _initializer3 && _initializer3();
                this.stages = [];
              }
              init() {
                return new nr.RenderQueueDesc(this.isTransparent, this.sortMode, this.stages);
              }
            }, (_initializer = applyDecoratedInitializer(_class.prototype, "isTransparent", [serializable], function () {
              return false;
            }), _initializer2 = applyDecoratedInitializer(_class.prototype, "sortMode", [_dec], function () {
              return RenderQueueSortMode.FRONT_TO_BACK;
            }), _initializer3 = applyDecoratedInitializer(_class.prototype, "stages", [_dec2], function () {
              return [];
            })), _class)));
            const deferredPipelineProto = DeferredPipeline.prototype;
            deferredPipelineProto._ctor = function () {
              this._tag = 0;
              this._flows = [];
              this.renderTextures = [];
              this.materials = [];
            };
            const oldDeferredOnLoaded = deferredPipelineProto.onLoaded;
            deferredPipelineProto.onLoaded = function () {
              if (oldDeferredOnLoaded) oldDeferredOnLoaded.call(this);
              for (let i = 0; i < this._flows.length; i++) {
                this._flows[i].init(this);
              }
              let info = {
                tag: this._tag,
                flows: this._flows
              };
              this.initialize(info);
            };
            const mainFlowProto = MainFlow.prototype;
            mainFlowProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this._stages = [];
            };
            mainFlowProto.init = function (pipeline) {
              for (let i = 0; i < this._stages.length; i++) {
                this._stages[i].init(pipeline);
              }
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                stages: this._stages
              };
              this.initialize(info);
            };
            const gbufferStageProto = GbufferStage.prototype;
            gbufferStageProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this.renderQueues = [];
            };
            gbufferStageProto.init = function (pipeline) {
              const queues = [];
              for (let i = 0; i < this.renderQueues.length; i++) {
                queues.push(this.renderQueues[i].init());
              }
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                renderQueues: queues
              };
              this.initialize(info);
            };
            const lightingStageProto = LightingStage.prototype;
            lightingStageProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this.renderQueues = [];
              this._deferredMaterial = null;
            };
            lightingStageProto.init = function (pipeline) {
              const queues = [];
              for (let i = 0; i < this.renderQueues.length; i++) {
                queues.push(this.renderQueues[i].init());
              }
              pipeline.pipelineSceneData.deferredLightingMaterial = this._deferredMaterial;
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                renderQueues: queues
              };
              this.initialize(info);
            };
            const bloomStageProto = BloomStage.prototype;
            bloomStageProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this.renderQueues = [];
              this._bloomMaterial = null;
            };
            bloomStageProto.init = function (pipeline) {
              const queues = [];
              for (let i = 0; i < this.renderQueues.length; i++) {
                queues.push(this.renderQueues[i].init());
              }
              pipeline.pipelineSceneData.bloomMaterial = this._bloomMaterial;
              const info = {
                name: this._name,
                priority: this._priority,
                tag: this._tag,
                renderQueues: queues
              };
              this.initialize(info);
            };
            const postProcessStageProto = PostProcessStage.prototype;
            postProcessStageProto._ctor = function () {
              this._name = 0;
              this._priority = 0;
              this._tag = 0;
              this.renderQueues = [];
              this._postProcessMaterial = null;
            };
            postProcessStageProto.init = function (pipeline) {
              const queues = [];
              for (let i = 0; i < this.renderQueues.length; i++) {
                queues.push(this.renderQueues[i].init());
              }
              pipeline.pipelineSceneData.postProcessMaterial = this._postProcessMaterial;
              const info = {
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
            let RenderTextureConfig = (_dec3 = ccclass('RenderTextureConfig'), _dec4 = type(RenderTexture), _dec3(_class3 = (_class4 = class RenderTextureConfig {
              constructor() {
                this.name = _initializer4 && _initializer4();
                this.texture = _initializer5 && _initializer5();
              }
            }, (_initializer4 = applyDecoratedInitializer(_class4.prototype, "name", [serializable], function () {
              return '';
            }), _initializer5 = applyDecoratedInitializer(_class4.prototype, "texture", [_dec4], function () {
              return null;
            })), _class4)) || _class3);
            function proxyArrayAttributeImpl(proto, attr) {
              const proxyTarget = `_${attr}_target`;
              let arrayProxy = (self, targetArrayAttr) => {
                return new Proxy(self[targetArrayAttr], {
                  get(targetArray, prop, receiver) {
                    return Reflect.get(targetArray, prop, receiver);
                  },
                  set(targetArray, prop, receiver) {
                    const ret = Reflect.set(targetArray, prop, receiver);
                    self[targetArrayAttr] = targetArray;
                    return ret;
                  }
                });
              };
              Object.defineProperty(proto, attr, {
                configurable: true,
                enumerable: true,
                get: function () {
                  this[proxyTarget] || (this[proxyTarget] = []);
                  return arrayProxy(this, proxyTarget);
                },
                set: function (v) {
                  this[proxyTarget] = v;
                }
              });
            }
            let proxyArrayAttribute = proxyArrayAttributeImpl;
            {
              proxyArrayAttribute(RenderFlow.prototype, '_stages');
              proxyArrayAttribute(RenderPipeline.prototype, '_flows');
            }
            const Material = jsb.Material;
            patch_RenderQueueDesc({
              RenderQueueDesc,
              RenderQueueSortMode,
              CCString
            });
            patch_RenderStage({
              RenderStage
            });
            patch_ReflectionProbeStage({
              ReflectionProbeStage
            });
            patch_GbufferStage({
              GbufferStage,
              RenderQueueDesc
            });
            patch_LightingStage({
              LightingStage,
              RenderQueueDesc,
              Material
            });
            patch_BloomStage({
              BloomStage,
              Material
            });
            patch_PostProcessStage({
              PostProcessStage,
              Material,
              RenderQueueDesc
            });
            patch_ForwardStage({
              ForwardStage,
              RenderQueueDesc
            });
            patch_ShadowStage({
              ShadowStage
            });
            patch_RenderFlow({
              RenderFlow,
              RenderStage
            });
            patch_MainFlow({
              MainFlow
            });
            patch_ForwardFlow({
              ForwardFlow
            });
            patch_ShadowFlow({
              ShadowFlow
            });
            patch_ReflectionProbeFlow({
              ReflectionProbeFlow
            });
            patch_cc_RenderPipeline({
              RenderPipeline,
              RenderFlow
            });
            patch_ForwardPipeline({
              ForwardPipeline,
              RenderTextureConfig
            });
            patch_DeferredPipeline({
              DeferredPipeline,
              RenderTextureConfig
            });

            const Root = exports('R', jsb.Root);
            var LightType;
            (function (LightType) {
              LightType[LightType["DIRECTIONAL"] = 0] = "DIRECTIONAL";
              LightType[LightType["SPHERE"] = 1] = "SPHERE";
              LightType[LightType["SPOT"] = 2] = "SPOT";
              LightType[LightType["POINT"] = 3] = "POINT";
              LightType[LightType["RANGED_DIRECTIONAL"] = 4] = "RANGED_DIRECTIONAL";
              LightType[LightType["UNKNOWN"] = 5] = "UNKNOWN";
            })(LightType || (LightType = {}));
            const rootProto = Root.prototype;
            rootProto._createBatcher2D = function () {
              if (!this._batcher && legacyCC.internal.Batcher2D) {
                this._batcher = new legacyCC.internal.Batcher2D(this);
                if (!this._batcher.initialize()) {
                  this._batcher = null;
                  this.destroy();
                  return;
                }
                this._batcher._nativeObj = this.getBatcher2D();
              }
            };
            Object.defineProperty(rootProto, 'batcher2D', {
              configurable: true,
              enumerable: true,
              get() {
                return this._batcher;
              }
            });
            Object.defineProperty(rootProto, 'dataPoolManager', {
              configurable: true,
              enumerable: true,
              get() {
                return this._dataPoolMgr;
              }
            });
            Object.defineProperty(rootProto, 'pipelineEvent', {
              configurable: true,
              enumerable: true,
              get() {
                return this._pipelineEvent;
              }
            });
            class DummyPipelineEvent {
              on(type, callback, target, once) {}
              once(type, callback, target) {}
              off(type, callback, target) {}
              emit(type, arg0, arg1, arg2, arg3, arg4) {}
              targetOff(typeOrTarget) {}
              removeAll(typeOrTarget) {}
              hasEventListener(type, callback, target) {
                return false;
              }
            }
            rootProto._ctor = function (device) {
              this._device = device;
              this._dataPoolMgr = legacyCC.internal.DataPoolManager && new legacyCC.internal.DataPoolManager(device);
              this._modelPools = new Map();
              this._lightPools = new Map();
              this._batcher = null;
              this._pipelineEvent = new DummyPipelineEvent();
              this._registerListeners();
            };
            rootProto.initialize = function (info) {
              var _this$_dataPoolMgr;
              this._initialize(deviceManager.swapchain);
              const customJointTextureLayouts = settings.querySettings(Settings.Category.ANIMATION, 'customJointTextureLayouts') || [];
              (_this$_dataPoolMgr = this._dataPoolMgr) === null || _this$_dataPoolMgr === void 0 ? void 0 : _this$_dataPoolMgr.jointTexturePool.registerCustomTextureLayouts(customJointTextureLayouts);
            };
            rootProto.createModel = function (ModelCtor) {
              let p = this._modelPools.get(ModelCtor);
              if (!p) {
                this._modelPools.set(ModelCtor, new Pool(() => new ModelCtor(), 10, obj => obj.destroy()));
                p = this._modelPools.get(ModelCtor);
              }
              const model = p.alloc();
              model.initialize();
              return model;
            };
            rootProto.destroyModel = function (m) {
              const p = this._modelPools.get(m.constructor);
              if (p) {
                p.free(m);
                if (m.scene) {
                  m.scene.removeModel(m);
                }
              } else {
                warnID(1300, m.constructor.name);
              }
              m.destroy();
            };
            rootProto.createLight = function (LightCtor) {
              let l = this._lightPools.get(LightCtor);
              if (!l) {
                this._lightPools.set(LightCtor, new Pool(() => new LightCtor(), 4, obj => obj.destroy()));
                l = this._lightPools.get(LightCtor);
              }
              const light = l.alloc();
              light.initialize();
              return light;
            };
            rootProto.destroyLight = function (l) {
              if (l.scene) {
                switch (l.type) {
                  case LightType.DIRECTIONAL:
                    l.scene.removeDirectionalLight(l);
                    break;
                  case LightType.SPHERE:
                    l.scene.removeSphereLight(l);
                    break;
                  case LightType.SPOT:
                    l.scene.removeSpotLight(l);
                    break;
                  case LightType.POINT:
                    l.scene.removePointLight(l);
                    break;
                  case LightType.RANGED_DIRECTIONAL:
                    l.scene.removeRangedDirLight(l);
                    break;
                }
              }
              l.destroy();
            };
            rootProto.recycleLight = function (l) {
              const p = this._lightPools.get(l.constructor);
              if (p) {
                p.free(l);
                if (l.scene) {
                  switch (l.type) {
                    case LightType.DIRECTIONAL:
                      l.scene.removeDirectionalLight(l);
                      break;
                    case LightType.SPHERE:
                      l.scene.removeSphereLight(l);
                      break;
                    case LightType.SPOT:
                      l.scene.removeSpotLight(l);
                      break;
                    case LightType.POINT:
                      l.scene.removePointLight(l);
                      break;
                    case LightType.RANGED_DIRECTIONAL:
                      l.scene.removeRangedDirLight(l);
                      break;
                  }
                }
              }
            };
            rootProto._onDirectorBeforeCommit = function () {
              legacyCC.director.emit(legacyCC.Director.EVENT_BEFORE_COMMIT);
            };
            rootProto._onDirectorBeforeRender = function () {
              legacyCC.director.emit(legacyCC.Director.EVENT_BEFORE_RENDER);
            };
            rootProto._onDirectorAfterRender = function () {
              legacyCC.director.emit(legacyCC.Director.EVENT_AFTER_RENDER);
            };
            rootProto._onDirectorPipelineChanged = function () {
              const scene = legacyCC.director.getScene();
              if (scene) {
                scene._activate();
              }
            };
            const oldOnGlobalPipelineStateChanged = rootProto.onGlobalPipelineStateChanged;
            rootProto.onGlobalPipelineStateChanged = function () {
              oldOnGlobalPipelineStateChanged.call(this);
              const builder = legacyCC.rendering.getCustomPipeline(macro.CUSTOM_PIPELINE_NAME);
              if (builder) {
                if (typeof builder.onGlobalPipelineStateChanged === 'function') {
                  builder.onGlobalPipelineStateChanged();
                }
              }
            };
            const oldFrameMove = rootProto.frameMove;
            rootProto.frameMove = function (deltaTime) {
              oldFrameMove.call(this, deltaTime, legacyCC.director.getTotalFrames());
            };
            const oldSetPipeline = rootProto.setRenderPipeline;
            rootProto.setRenderPipeline = function (pipeline) {
              let ppl;
              if (macro.CUSTOM_PIPELINE_NAME !== '' && legacyCC.rendering && this.usesCustomPipeline) {
                legacyCC.rendering.createCustomPipeline();
                ppl = oldSetPipeline.call(this, null);
                log('Using custom pipeline');
              } else {
                if (!pipeline) {
                  pipeline = new ForwardPipeline();
                  pipeline.init();
                }
                ppl = oldSetPipeline.call(this, pipeline);
              }
              this._createBatcher2D();
              return ppl;
            };
            rootProto.addBatch = function (batch) {
              console.error('The Draw Batch class is implemented differently in the native platform and does not support this interface.');
            };
            rootProto.removeBatch = function (batch) {
              console.error('The Draw Batch class is implemented differently in the native platform and does not support this interface.');
            };
            rootProto.removeBatches = function () {
              console.error('The Draw Batch class is implemented differently in the native platform and does not support this interface.');
            };

            class UIRendererManager {
              constructor() {
                this._allRenderers = [];
                this._dirtyRenderers = [];
                this._dirtyVersion = 0;
              }
              addRenderer(uiRenderer) {
                if (uiRenderer._internalId === -1) {
                  uiRenderer._internalId = this._allRenderers.length;
                  this._allRenderers.push(uiRenderer);
                }
              }
              removeRenderer(uiRenderer) {
                if (uiRenderer._internalId !== -1) {
                  {
                    assert(this._allRenderers[uiRenderer._internalId] === uiRenderer);
                  }
                  const id = uiRenderer._internalId;
                  this._allRenderers[this._allRenderers.length - 1]._internalId = id;
                  fastRemoveAt(this._allRenderers, id);
                  uiRenderer._internalId = -1;
                  if (uiRenderer._dirtyVersion === this._dirtyVersion) {
                    fastRemove(this._dirtyRenderers, uiRenderer);
                    uiRenderer._dirtyVersion = -1;
                  }
                }
              }
              markDirtyRenderer(uiRenderer) {
                if (uiRenderer._dirtyVersion !== this._dirtyVersion && uiRenderer._internalId !== -1) {
                  this._dirtyRenderers.push(uiRenderer);
                  uiRenderer._dirtyVersion = this._dirtyVersion;
                }
              }
              updateAllDirtyRenderers() {
                const length = this._dirtyRenderers.length;
                const dirtyRenderers = this._dirtyRenderers;
                for (let i = 0; i < length; i++) {
                  {
                    assert(dirtyRenderers[i]._internalId !== -1);
                  }
                  dirtyRenderers[i].updateRenderer();
                }
                this._dirtyRenderers.length = 0;
                this._dirtyVersion++;
              }
            }
            const uiRendererManager = exports('p', new UIRendererManager());

            {
              const cache = {};
              const resolveMap = {};
              const replaceExtension = (task, done) => {
                task.output = task.input;
                (async () => {
                  for (let i = 0; i < task.input.length; i++) {
                    const item = task.input[i];
                    if (!item.uuid || item.isNative) {
                      continue;
                    }
                    try {
                      const extension = await queryExtension(item.overrideUuid || item.uuid);
                      if (extension) {
                        item.ext = extension;
                        item.url = item.url.replace('.json', extension);
                      }
                    } catch (err) {
                      continue;
                    }
                  }
                })().then(() => {
                  done(null, null);
                }).catch(reason => {
                  done(reason, null);
                });
              };
              const fetchText = url => new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onload = () => {
                  if (xhr.status !== 200) {
                    reject();
                    return;
                  }
                  resolve(xhr.response);
                };
                xhr.send(null);
              });
              const queryExtension = async uuid => {
                if (uuid in cache) {
                  if (cache[uuid] !== null) {
                    return cache[uuid];
                  }
                  return new Promise(resolve => {
                    resolveMap[uuid] = resolveMap[uuid] || [];
                    resolveMap[uuid].push(resolve);
                  });
                }
                cache[uuid] = null;
                try {
                  let text = '';
                  if (EDITOR) ; else {
                    let previewServer = '';
                    if (NATIVE) {
                      previewServer = settings.querySettings(Settings.Category.PATH, 'previewServer') || '';
                      assert(Boolean(previewServer));
                    }
                    text = await fetchText(`${previewServer}/query-extname/${uuid}`);
                  }
                  cache[uuid] = text;
                  if (resolveMap[uuid]) {
                    resolveMap[uuid].forEach(func => func(text));
                    resolveMap[uuid] = [];
                  }
                  return text;
                } catch (error) {
                  console.error(error);
                  cache[uuid] = '';
                  return '';
                }
              };
              pipeline.insert(replaceExtension, 1);
              fetchPipeline.insert(replaceExtension, 1);
            }

            const ImageFmts = ['.png', '.jpg', '.bmp', '.jpeg', '.gif', '.ico', '.tiff', '.webp', '.image', '.pvr', '.pkm', '.astc'];
            const AudioFmts = ['.mp3', '.ogg', '.wav', '.m4a'];
            function GetTrue() {
              return true;
            }
            const md5Pipe = {
              transformURL(url) {
                const uuid = getUuidFromURL(url);
                if (!uuid) {
                  return url;
                }
                const bundle = bundles.find(b => !!b.getAssetInfo(uuid));
                if (!bundle) {
                  return url;
                }
                let hashValue = '';
                const info = bundle.getAssetInfo(uuid);
                if (url.startsWith(bundle.base + bundle.config.nativeBase)) {
                  hashValue = info.nativeVer || '';
                } else {
                  hashValue = info.ver || '';
                }
                if (!hashValue || url.indexOf(hashValue) !== -1) {
                  return url;
                }
                let hashPatchInFolder = false;
                if (extname(url) === '.ttf') {
                  hashPatchInFolder = true;
                }
                if (hashPatchInFolder) {
                  const dirname$1 = dirname(url);
                  const basename$1 = basename(url);
                  url = `${dirname$1}.${hashValue}/${basename$1}`;
                } else {
                  url = url.replace(/.*[/\\][0-9a-fA-F]{2}[/\\]([0-9a-fA-F-@]{8,})/, (match, uuid) => `${match}.${hashValue}`);
                }
                return url;
              }
            };
            class CCLoader {
              constructor() {
                this._autoReleaseSetting = Object.create(null);
                this._parseLoadResArgs = parseLoadResArgs;
              }
              set onProgress(val) {
                setDefaultProgressCallback(val);
              }
              get _cache() {
                if (assets instanceof Cache) {
                  return assets.map;
                } else {
                  const map = {};
                  assets.forEach((val, key) => {
                    map[key] = val;
                  });
                  return map;
                }
              }
              load(res, progressCallback, completeCallback) {
                if (completeCallback === undefined) {
                  if (progressCallback !== undefined) {
                    completeCallback = progressCallback;
                    progressCallback = null;
                  }
                }
                const requests = Array.isArray(res) ? res : [res];
                for (let i = 0; i < requests.length; i++) {
                  const item = requests[i];
                  if (typeof item === 'string') {
                    requests[i] = {
                      url: item,
                      __isNative__: true
                    };
                  } else {
                    if (item.type) {
                      item.ext = `.${item.type}`;
                      item.type = undefined;
                    }
                    if (item.url) {
                      item.__isNative__ = true;
                    }
                  }
                }
                const images = [];
                const audios = [];
                assetManager.loadAny(requests, null, (finish, total, item) => {
                  if (item.content) {
                    if (ImageFmts.includes(item.ext)) {
                      images.push(item.content);
                    } else if (AudioFmts.includes(item.ext)) {
                      audios.push(item.content);
                    }
                  }
                  if (progressCallback) {
                    progressCallback(finish, total, item);
                  }
                }, (err, native) => {
                  let out = null;
                  if (!err) {
                    native = Array.isArray(native) ? native : [native];
                    for (let i = 0; i < native.length; i++) {
                      const item = native[i];
                      if (!(item instanceof Asset)) {
                        let asset = item;
                        const url = requests[i].url;
                        if (images.includes(asset)) {
                          factory.create(url, item, '.png', {}, (err, image) => {
                            asset = native[i] = image;
                          });
                        } else if (audios.includes(asset)) {
                          factory.create(url, item, '.mp3', {}, (err, audio) => {
                            asset = native[i] = audio;
                          });
                        }
                        assets.add(url, asset);
                      }
                    }
                    if (native.length > 1) {
                      const map = Object.create(null);
                      native.forEach(asset => {
                        map[asset._uuid] = asset;
                      });
                      out = {
                        isCompleted: GetTrue,
                        _map: map
                      };
                    } else {
                      out = native[0];
                    }
                  }
                  if (completeCallback) {
                    completeCallback(err, out);
                  }
                });
              }
              getXMLHttpRequest() {
                return new XMLHttpRequest();
              }
              getItem(id) {
                return assetManager.assets.has(id) ? {
                  content: assetManager.assets.get(id)
                } : null;
              }
              loadRes(url, type, progressCallback, completeCallback) {
                const {
                  type: _type,
                  onProgress,
                  onComplete
                } = this._parseLoadResArgs(type, progressCallback, completeCallback);
                const extname$1 = extname(url);
                if (extname$1 && !resources.getInfoWithPath(url, _type)) {
                  url = url.slice(0, -extname$1.length);
                }
                resources.load(url, _type, onProgress, onComplete);
              }
              loadResArray(urls, type, progressCallback, completeCallback) {
                const {
                  type: _type,
                  onProgress,
                  onComplete
                } = this._parseLoadResArgs(type, progressCallback, completeCallback);
                urls.forEach((url, i) => {
                  const extname$1 = extname(url);
                  if (extname$1 && !resources.getInfoWithPath(url, _type)) {
                    urls[i] = url.slice(0, -extname$1.length);
                  }
                });
                resources.load(urls, _type, onProgress, onComplete);
              }
              loadResDir(url, type, progressCallback, completeCallback) {
                const {
                  type: _type,
                  onProgress,
                  onComplete
                } = this._parseLoadResArgs(type, progressCallback, completeCallback);
                resources.loadDir(url, _type, onProgress, (err, out) => {
                  let urls = [];
                  if (!err) {
                    const infos = resources.getDirWithPath(url, _type);
                    urls = infos.map(info => info.path);
                  }
                  if (onComplete) {
                    onComplete(err, out, urls);
                  }
                });
              }
              getRes(url, type) {
                return assets.has(url) ? assets.get(url) : resources.get(url, type);
              }
              getResCount() {
                return assets.count;
              }
              getDependsRecursively(owner) {
                if (!owner) {
                  return [];
                }
                const uuid = typeof owner === 'string' ? owner : owner._uuid;
                return dependUtil.getDepsRecursively(uuid).concat([uuid]);
              }
              get md5Pipe() {
                return md5Pipe;
              }
              get downloader() {
                return downloader;
              }
              get loader() {
                return assetManager.parser;
              }
              addDownloadHandlers(extMap) {
                const handler = Object.create(null);
                for (const type in extMap) {
                  const func = extMap[type];
                  handler[`.${type}`] = (url, options, onComplete) => {
                    func({
                      url
                    }, onComplete);
                  };
                }
                downloader.register(handler);
              }
              addLoadHandlers(extMap) {
                const handler = Object.create(null);
                for (const type in extMap) {
                  const func = extMap[type];
                  handler[`.${type}`] = (file, options, onComplete) => {
                    func({
                      content: file
                    }, onComplete);
                  };
                }
                parser.register(handler);
              }
              release(asset) {
                if (Array.isArray(asset)) {
                  for (let i = 0; i < asset.length; i++) {
                    let key = asset[i];
                    if (typeof key === 'string') {
                      key = assets.get(key);
                    }
                    assetManager.releaseAsset(key);
                  }
                } else if (asset) {
                  if (typeof asset === 'string') {
                    asset = assets.get(asset);
                  }
                  assetManager.releaseAsset(asset);
                }
              }
              releaseAsset(asset) {
                assetManager.releaseAsset(asset);
              }
              releaseRes(res, type) {
                resources.release(res, type);
              }
              releaseAll() {
                assetManager.releaseAll();
                assets.clear();
              }
              removeItem(id) {
                return !!assets.remove(id);
              }
              setAutoRelease(asset, autoRelease) {
                if (typeof asset === 'object') {
                  asset = asset._uuid;
                }
                this._autoReleaseSetting[asset] = !!autoRelease;
              }
              setAutoReleaseRecursively(asset, autoRelease) {
                if (typeof asset === 'object') {
                  asset = asset._uuid;
                }
                autoRelease = !!autoRelease;
                this._autoReleaseSetting[asset] = autoRelease;
                const depends = dependUtil.getDepsRecursively(asset);
                for (let i = 0; i < depends.length; i++) {
                  this._autoReleaseSetting[depends[i]] = autoRelease;
                }
              }
              isAutoRelease(asset) {
                if (typeof asset === 'object') {
                  asset = asset._uuid;
                }
                return !!this._autoReleaseSetting[asset];
              }
            } exports('C', CCLoader);
            const loader = exports('o', new CCLoader());
            const AssetLibrary = exports('A', {
              init(options) {
                options.importBase = options.libraryPath;
                options.nativeBase = options.libraryPath;
                assetManager.init(options);
                if (options.rawAssets) {
                  resources.init({
                    base: '',
                    deps: [],
                    scenes: {},
                    redirect: [],
                    debug: true,
                    packs: {},
                    types: [],
                    versions: {
                      import: [],
                      native: []
                    },
                    name: BuiltinBundleName.RESOURCES,
                    importBase: options.importBase,
                    nativeBase: options.nativeBase,
                    paths: options.rawAssets.assets,
                    uuids: Object.keys(options.rawAssets.assets),
                    extensionMap: {}
                  });
                }
              },
              loadAsset(uuid, callback, options) {
                assetManager.loadAny(uuid, callback);
              }
            });
            const url = exports('u', {});
            replaceProperty(url, 'url', [{
              name: 'normalize',
              target: assetManager.utils,
              targetName: 'assetManager.utils',
              newName: 'normalize'
            }, {
              name: 'raw',
              targetName: 'Asset.prototype',
              newName: 'nativeUrl',
              customFunction: url => {
                if (url.startsWith('resources/')) {
                  return transform({
                    path: changeExtname(url.substr(10)),
                    bundle: BuiltinBundleName.RESOURCES,
                    __isNative__: true,
                    ext: extname(url)
                  });
                }
                return '';
              }
            }]);
            removeProperty(AssetLibrary, 'AssetLibrary', [{
              name: 'getLibUrlNoExt',
              suggest: 'AssetLibrary.getLibUrlNoExt was removed, if you want to transform url, please use assetManager.utils.getUrlWithUuid instead'
            }, {
              name: 'queryAssetInfo',
              suggest: 'AssetLibrary.queryAssetInfo was removed'
            }]);
            removeProperty(loader, 'loader', [{
              name: 'releaseResDir',
              suggest: 'loader.releaseResDir was removed, please use assetManager.releaseAsset instead'
            }, {
              name: 'flowInDeps',
              suggest: 'loader.flowInDeps was removed'
            }, {
              name: 'assetLoader',
              suggest: 'loader.assetLoader was removed, assetLoader and md5Pipe were merged into assetManager.transformPipeline'
            }]);
            replaceProperty(legacyCC, 'cc', [{
              name: 'loader',
              newName: 'assetManager',
              logTimes: 1,
              customGetter: () => loader
            }, {
              name: 'AssetLibrary',
              newName: 'assetManager',
              logTimes: 1,
              customGetter: () => AssetLibrary
            }, {
              name: 'Pipeline',
              target: AssetManager,
              targetName: 'AssetManager',
              newName: 'Pipeline',
              logTimes: 1
            }, {
              name: 'url',
              targetName: 'assetManager',
              newName: 'utils',
              logTimes: 1,
              customGetter: () => url
            }]);
            removeProperty(legacyCC, 'cc', [{
              name: 'LoadingItems',
              suggest: getError(1400, 'LoadingItems', 'AssetManager.Task')
            }]);
            replaceProperty(macro, 'macro', [{
              name: 'DOWNLOAD_MAX_CONCURRENT',
              target: downloader,
              targetName: 'assetManager.downloader',
              newName: 'maxConcurrency'
            }]);
            const _autoRelease = releaseManager._autoRelease;
            releaseManager._autoRelease = function (oldScene, newScene, persistNodes) {
              _autoRelease.call(releaseManager, oldScene, newScene, persistNodes);
              const releaseSettings = loader._autoReleaseSetting;
              const keys = Object.keys(releaseSettings);
              for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (releaseSettings[key] === true) {
                  const asset = assets.get(key);
                  if (asset) {
                    releaseManager.tryRelease(asset);
                  }
                }
              }
            };

            class Director extends EventTarget {
              constructor() {
                super();
                this._compScheduler = void 0;
                this._nodeActivator = void 0;
                this._invalid = void 0;
                this._paused = void 0;
                this._root = void 0;
                this._loadingScene = void 0;
                this._scene = void 0;
                this._totalFrames = void 0;
                this._scheduler = void 0;
                this._systems = void 0;
                this._persistRootNodes = {};
                this._invalid = false;
                this._paused = false;
                this._root = null;
                this._loadingScene = '';
                this._scene = null;
                this._totalFrames = 0;
                this._scheduler = new Scheduler();
                this._compScheduler = new ComponentScheduler();
                this._nodeActivator = new NodeActivator();
                this._systems = [];
              }
              calculateDeltaTime(now) {}
              end() {
                this.once(Director.EVENT_END_FRAME, () => {
                  this.purgeDirector();
                });
              }
              pause() {
                if (this._paused) {
                  return;
                }
                this._paused = true;
              }
              purgeDirector() {
                this._scheduler.unscheduleAll();
                this._compScheduler.unscheduleAll();
                this._nodeActivator.reset();
                {
                  if (isValid(this._scene)) {
                    this._scene.destroy();
                  }
                  this._scene = null;
                }
                this.stopAnimation();
                assetManager.releaseAll();
              }
              reset() {
                var _this$getScene;
                this.purgeDirector();
                for (const id in this._persistRootNodes) {
                  this.removePersistRootNode(this._persistRootNodes[id]);
                }
                (_this$getScene = this.getScene()) === null || _this$getScene === void 0 ? void 0 : _this$getScene.destroy();
                this.emit(Director.EVENT_RESET);
                this.startAnimation();
              }
              runSceneImmediate(scene, onBeforeLoadScene, onLaunched) {
                if (scene instanceof SceneAsset) scene = scene.scene;
                assertID(scene instanceof Scene, 1216);
                scene._load();
                const persistNodeList = Object.keys(this._persistRootNodes).map(x => this._persistRootNodes[x]);
                for (let i = 0; i < persistNodeList.length; i++) {
                  const node = persistNodeList[i];
                  node.emit(Node.EventType.SCENE_CHANGED_FOR_PERSISTS, scene.renderScene);
                  const existNode = scene.uuid === node._originalSceneId && scene.getChildByUuid(node.uuid);
                  if (existNode) {
                    const index = existNode.getSiblingIndex();
                    node.hideFlags &= ~CCObject.Flags.DontSave;
                    node.hideFlags |= CCObject.Flags.DontSave & existNode.hideFlags;
                    existNode._destroyImmediate();
                    scene.insertChild(node, index);
                  } else {
                    node.hideFlags |= CCObject.Flags.DontSave;
                    node.parent = scene;
                  }
                }
                const oldScene = this._scene;
                if (isValid(oldScene)) {
                  oldScene.destroy();
                }
                {
                  releaseManager._autoRelease(oldScene, scene, this._persistRootNodes);
                }
                this._scene = null;
                CCObject._deferredDestroy();
                if (onBeforeLoadScene) {
                  onBeforeLoadScene();
                }
                this.emit(Director.EVENT_BEFORE_SCENE_LAUNCH, scene);
                this._scene = scene;
                scene._activate();
                if (this._root) {
                  this._root.resetCumulativeTime();
                }
                this.startAnimation();
                if (onLaunched) {
                  onLaunched(null, scene);
                }
                this.emit(Director.EVENT_AFTER_SCENE_LAUNCH, scene);
              }
              runScene(scene, onBeforeLoadScene, onLaunched) {
                if (scene instanceof SceneAsset) scene = scene.scene;
                assertID(Boolean(scene), 1205);
                assertID(scene instanceof Scene, 1216);
                this.once(Director.EVENT_END_FRAME, () => {
                  this.runSceneImmediate(scene, onBeforeLoadScene, onLaunched);
                });
              }
              loadScene(sceneName, onLaunched, onUnloaded) {
                if (this._loadingScene) {
                  warnID(1208, sceneName, this._loadingScene);
                  return false;
                }
                const bundle = assetManager.bundles.find(bundle => !!bundle.getSceneInfo(sceneName));
                if (bundle) {
                  this.emit(Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
                  this._loadingScene = sceneName;
                  console.time(`LoadScene ${sceneName}`);
                  bundle.loadScene(sceneName, (err, scene) => {
                    console.timeEnd(`LoadScene ${sceneName}`);
                    this._loadingScene = '';
                    if (err) {
                      error(err);
                      if (onLaunched) {
                        onLaunched(err);
                      }
                    } else {
                      this.runSceneImmediate(scene, onUnloaded, onLaunched);
                    }
                  });
                  return true;
                } else {
                  errorID(1209, sceneName);
                  return false;
                }
              }
              preloadScene(sceneName, onProgress, onLoaded) {
                const bundle = assetManager.bundles.find(bundle => !!bundle.getSceneInfo(sceneName));
                if (bundle) {
                  bundle.preloadScene(sceneName, null, onProgress, onLoaded);
                } else {
                  const err = `Can not preload the scene "${sceneName}" because it is not in the build settings.`;
                  if (onLoaded) {
                    onLoaded(new Error(err));
                  }
                  error(`preloadScene: ${err}`);
                }
              }
              resume() {
                if (!this._paused) {
                  return;
                }
                this._paused = false;
              }
              get root() {
                return this._root;
              }
              getScene() {
                return this._scene;
              }
              getDeltaTime() {
                return legacyCC.game.deltaTime;
              }
              getTotalTime() {
                return legacyCC.game.totalTime;
              }
              getCurrentTime() {
                return legacyCC.game.frameStartTime;
              }
              getTotalFrames() {
                return this._totalFrames;
              }
              isPaused() {
                return this._paused;
              }
              getScheduler() {
                return this._scheduler;
              }
              setScheduler(scheduler) {
                if (this._scheduler !== scheduler) {
                  this.unregisterSystem(this._scheduler);
                  this._scheduler = scheduler;
                  this.registerSystem(Scheduler.ID, scheduler, 200);
                }
              }
              registerSystem(name, sys, priority) {
                sys.id = name;
                sys.priority = priority;
                this._systems.push(sys);
                this._systems.sort(System.sortByPriority);
              }
              unregisterSystem(sys) {
                fastRemove(this._systems, sys);
                this._systems.sort(System.sortByPriority);
              }
              getSystem(name) {
                return this._systems.find(sys => sys.id === name);
              }
              getAnimationManager() {
                return this.getSystem(legacyCC.AnimationManager.ID);
              }
              startAnimation() {
                this._invalid = false;
              }
              stopAnimation() {
                this._invalid = true;
              }
              mainLoop(now) {
                let dt;
                {
                  dt = legacyCC.game._calculateDT(now);
                }
                this.tick(dt);
              }
              tick(dt) {
                if (!this._invalid) {
                  this.emit(Director.EVENT_BEGIN_FRAME);
                  {
                    input._frameDispatchEvents();
                  }
                  if (!this._paused) {
                    this.emit(Director.EVENT_BEFORE_UPDATE);
                    this._compScheduler.startPhase();
                    this._compScheduler.updatePhase(dt);
                    for (let i = 0; i < this._systems.length; ++i) {
                      this._systems[i].update(dt);
                    }
                    this._compScheduler.lateUpdatePhase(dt);
                    this.emit(Director.EVENT_AFTER_UPDATE);
                    CCObject._deferredDestroy();
                    for (let i = 0; i < this._systems.length; ++i) {
                      this._systems[i].postUpdate(dt);
                    }
                  }
                  this.emit(Director.EVENT_BEFORE_DRAW);
                  uiRendererManager.updateAllDirtyRenderers();
                  this._root.frameMove(dt);
                  this.emit(Director.EVENT_AFTER_DRAW);
                  Node.resetHasChangedFlags();
                  Node.clearNodeArray();
                  scalableContainerManager.update(dt);
                  this.emit(Director.EVENT_END_FRAME);
                  this._totalFrames++;
                }
              }
              buildRenderPipeline() {
                if (this._root) {
                  this._root.customPipeline.beginSetup();
                  const builder = legacyCC.rendering.getCustomPipeline(macro.CUSTOM_PIPELINE_NAME);
                  builder.setup(this._root.cameraList, this._root.customPipeline);
                  this._root.customPipeline.endSetup();
                }
              }
              setupRenderPipelineBuilder() {
                if (macro.CUSTOM_PIPELINE_NAME !== '' && legacyCC.rendering && this._root && this._root.usesCustomPipeline) {
                  this.on(Director.EVENT_BEFORE_RENDER, this.buildRenderPipeline, this);
                }
              }
              init() {
                this._totalFrames = 0;
                this._paused = false;
                this.registerSystem(Scheduler.ID, this._scheduler, 200);
                this._root = new Root(deviceManager.gfxDevice);
                const rootInfo = {};
                this._root.initialize(rootInfo);
                this.setupRenderPipelineBuilder();
                for (let i = 0; i < this._systems.length; i++) {
                  this._systems[i].init();
                }
                this.emit(Director.EVENT_INIT);
              }
              addPersistRootNode(node) {
                if (!Node.isNode(node) || !node.uuid) {
                  warnID(3800);
                  return;
                }
                const id = node.uuid;
                if (!this._persistRootNodes[id]) {
                  const scene = this._scene;
                  if (isValid(scene)) {
                    if (!node.parent) {
                      node.parent = scene;
                      node._originalSceneId = scene.uuid;
                    } else if (!(node.parent instanceof Scene)) {
                      warnID(3801);
                      return;
                    } else if (node.parent !== scene) {
                      warnID(3802);
                      return;
                    } else {
                      node._originalSceneId = scene.uuid;
                    }
                  }
                  this._persistRootNodes[id] = node;
                  node._persistNode = true;
                  releaseManager._addPersistNodeRef(node);
                }
              }
              removePersistRootNode(node) {
                const id = node.uuid || '';
                if (node === this._persistRootNodes[id]) {
                  delete this._persistRootNodes[id];
                  node._persistNode = false;
                  node._originalSceneId = '';
                  releaseManager._removePersistNodeRef(node);
                }
              }
              isPersistRootNode(node) {
                return !!node._persistNode;
              }
            } exports('m', Director);
            Director.EVENT_INIT = 'director_init';
            Director.EVENT_RESET = 'director_reset';
            Director.EVENT_BEFORE_SCENE_LOADING = 'director_before_scene_loading';
            Director.EVENT_BEFORE_SCENE_LAUNCH = 'director_before_scene_launch';
            Director.EVENT_AFTER_SCENE_LAUNCH = 'director_after_scene_launch';
            Director.EVENT_BEFORE_UPDATE = 'director_before_update';
            Director.EVENT_AFTER_UPDATE = 'director_after_update';
            Director.EVENT_BEFORE_DRAW = 'director_before_draw';
            Director.EVENT_AFTER_DRAW = 'director_after_draw';
            Director.EVENT_BEFORE_COMMIT = 'director_before_commit';
            Director.EVENT_BEFORE_RENDER = 'director_before_render';
            Director.EVENT_AFTER_RENDER = 'director_after_render';
            Director.EVENT_BEFORE_PHYSICS = 'director_before_physics';
            Director.EVENT_AFTER_PHYSICS = 'director_after_physics';
            Director.EVENT_BEGIN_FRAME = 'director_begin_frame';
            Director.EVENT_END_FRAME = 'director_end_frame';
            Director.instance = void 0;
            legacyCC.Director = Director;
            const director = exports('n', Director.instance = legacyCC.director = new Director());

        })
    };
}));
