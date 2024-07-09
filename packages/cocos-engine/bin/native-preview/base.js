System.register(['./index-ce98320e.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './device-90bc7390.js', './deprecated-80961f27.js', './texture-buffer-pool-005a6472.js', './renderer-3bf7a012.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './director-dc238483.js', './builtin-pipelines-60825716.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './deprecated-f8df8d32.js', './instantiate-a87ac743.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './touch-af62e326.js', './impl-9c038f77.js', './cached-array-9b18d763.js', './murmurhash2_gc-2108d723.js', './move-2b84a753.js', './decorators-b63b63a2.js'], (function (exports) {
    'use strict';
    var Pool, legacyCC, log, warn, error, assert, _throw, logID, warnID, errorID, assertID, debug, join, extname, mainFileName, basename, dirname, changeExtname, changeBasename, _normalize, stripSep, getSeperator, ModelType, Model, SubModel, CameraFOVAxis, CameraProjection, CameraAperture, CameraISO, CameraShutter, CameraType, TrackingType, CameraUsage, SKYBOX_FLAG, Camera, ProbeClearFlag, ProbeType, ReflectionProbe, LODData, LODGroup, Ambient, ColorTemperatureToRGB, LightType, nt2lm, Light, DirectionalLight, SpotLight, SphereLight, PointLight, RangedDirectionalLight, FogType, FOG_TYPE_NONE, FogInfo, Fog, ShadowSize, ShadowType, PCFType, CSMLevel, CSMOptimizationMode, EnvironmentLightingType, ToneMappingType, ShadowsInfo, Shadows, Skybox, PostSettings, PipelineState, LegacyRenderMode, RenderType, DeviceManager, deviceManager, DescriptorSet, Buffer, CommandBuffer, Device, Swapchain, Framebuffer, InputAssembler, DescriptorSetLayout, PipelineLayout, Queue, RenderPass, Shader, Texture, Sampler, GeneralBarrier, TextureBarrier, PipelineStateInfo, ObjectType, Status, API, SurfaceTransform, Feature, Format, FormatType, Type, BufferUsageBit, BufferFlagBit, MemoryAccessBit, MemoryUsageBit, TextureType, TextureUsageBit, TextureFlagBit, FormatFeatureBit, SampleCount, VsyncMode, Filter, Address, ComparisonFunc, StencilOp, BlendFactor, BlendOp, ColorMask, ShaderStageFlagBit, LoadOp, StoreOp, AccessFlagBit, ResolveMode, PipelineBindPoint, PrimitiveMode, PolygonMode, ShadeModel, CullMode, DynamicStateFlagBit, StencilFace, DescriptorType, QueueType, QueryType, CommandBufferType, ClearFlagBit, BarrierType, PassType, Size, DeviceCaps, DeviceOptions, Offset, Rect, Extent, TextureSubresLayers, TextureSubresRange, TextureCopy, TextureBlit, BufferTextureCopy, Viewport, Color, BindingMappingInfo, SwapchainInfo, DeviceInfo, BufferInfo, BufferViewInfo, DrawInfo, DispatchInfo, IndirectBuffer, TextureInfo, TextureViewInfo, SamplerInfo, Uniform, UniformBlock, UniformSamplerTexture, UniformSampler, UniformTexture, UniformStorageImage, UniformStorageBuffer, UniformInputAttachment, ShaderStage, Attribute, ShaderInfo, InputAssemblerInfo, ColorAttachment, DepthStencilAttachment, SubpassInfo, SubpassDependency, RenderPassInfo, GeneralBarrierInfo, TextureBarrierInfo, BufferBarrierInfo, FramebufferInfo, DescriptorSetLayoutBinding, DescriptorSetLayoutInfo, DescriptorSetInfo, PipelineLayoutInfo, InputState, CommandBufferInfo, QueueInfo, QueryPoolInfo, FormatInfo, MemoryStatus, DynamicStencilStates, DynamicStates, GFXObject, AttributeName, FormatInfos, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, DESCRIPTOR_DYNAMIC_TYPE, DRAW_INFO_SIZE, IsPowerOf2, FormatSize, FormatSurfaceSize, GetTypeSize, getTypedArrayConstructor, formatAlignment, alignTo, Pass, overrideMacros, BatchingSchemes, programLib, getDeviceShaderVersion, RenderQueue, PassStage, genHandle, getTypeFromHandle, getBindingFromHandle, getCountFromHandle, getOffsetFromHandle, customizeType, type2reader, type2writer, type2validator, getDefaultFromType, getStringFromType, PoolType, NULL_HANDLE, Render2dView, Render2dPool, NodeView, NodePool$1, PassView, PassPool, AABBView, AABBPool, RenderScene, CameraVisFlags, VisibilityFlags, nearestPOT, TextureBufferPool, MaterialInstance, BlendState, BlendTarget, RasterizerState, DepthStencilState, RecyclePool, CachedArray;
    return {
        setters: [function (module) {
            Pool = module.P;
            legacyCC = module.l;
            log = module.a;
            warn = module.w;
            error = module.e;
            assert = module.b;
            _throw = module._;
            logID = module.c;
            warnID = module.d;
            errorID = module.f;
            assertID = module.g;
            debug = module.h;
            exports({ AffineTransform: module.A, AlphaKey: module.aX, BITMASK_TAG: module.bk, BitMask: module.a9, CCBoolean: module.av, CCClass: module.aq, CCFloat: module.au, CCInteger: module.at, CCObject: module.as, CCString: module.aw, CallbacksInvoker: module.bo, Color: module.C, ColorKey: module.aW, CompactValueTypeArray: module.ax, DebugMode: module.aJ, ENUM_TAG: module.bj, EPSILON: module.E, EasingMethod: module.bn, EditorExtendable: module.aC, Enum: module.aa, EventTarget: module.aD, Eventify: module.aE, ExtrapolationMode: module.aR, Gradient: module.aY, HALF_PI: module.H, MATH_FLOAT_ARRAY: module.a7, Mat3: module.M, Mat4: module.s, MathBase: module.a8, ObjectCurve: module.aV, Pool: module.P, Quat: module.Q, QuatCurve: module.aT, QuatInterpolationMode: module.aU, RealCurve: module.aP, RealInterpolationMode: module.aQ, Rect: module.R, Scheduler: module.aO, Settings: module.aZ, Size: module.S, System: module.a$, TWO_PI: module.T, TangentWeightMode: module.aS, VERSION: module.j, ValueType: module.ac, Vec2: module.V, Vec3: module.n, Vec4: module.p, WorldNode3DToLocalNodeUI: module.am, WorldNode3DToWorldNodeUI: module.an, __checkObsoleteInNamespace__: module.al, __checkObsolete__: module.ak, _decorator: module.ap, _resetDebugSetting: module.bp, absMax: module.a3, absMaxComponent: module.a2, approx: module.D, assert: module.b, assertID: module.g, assertIsNonNullable: module.bt, assertIsTrue: module.bu, assertsArrayIndex: module.bv, bezier: module.b1, bezierByTime: module.b2, binarySearch: module.bq, binarySearchBy: module.bs, binarySearchEpsilon: module.br, bits: module.k, ccenum: module.ab, cclegacy: module.l, clamp: module.F, clamp01: module.G, color: module.y, convertUtils: module.ao, debug: module.aF, deprecateModuleExportedName: module.aj, deserializeTag: module.az, disallowAnimation: module.bc, displayName: module.b7, displayOrder: module.b8, easing: module.b0, editable: module.b4, editorExtrasTag: module.ay, enumerableProps: module.a4, equals: module.B, error: module.e, errorID: module.f, floatToHalf: module.a5, formerlySerializedAs: module.be, garbageCollectionManager: module.bg, geometry: module.i, getError: module.aI, getSerializationMetadata: module.aB, halfToFloat: module.a6, inverseLerp: module.a1, isCCClassOrFastDefined: module.ar, isCCObject: module.bl, isDisplayStats: module.aG, isValid: module.bm, js: module.ad, jsbUtils: module.b3, lerp: module.I, log: module.a, logID: module.c, macro: module.aM, markAsWarning: module.ai, mat4: module.t, math: module.m, misc: module.ae, nextPow2: module.Z, override: module.bd, pingPong: module.a0, preTransforms: module.z, pseudoRandom: module.W, pseudoRandomRange: module.X, pseudoRandomRangeInt: module.Y, quat: module.r, random: module.L, randomRange: module.O, randomRangeInt: module.U, range: module.b9, rangeStep: module.ba, rect: module.x, removeProperty: module.ah, repeat: module.$, replaceProperty: module.ag, screen: module.aK, serializable: module.bf, serializeTag: module.aA, setDefaultLogTimes: module.af, setDisplayStats: module.aH, setPropertyEnumType: module.bh, setPropertyEnumTypeOnAttrs: module.bi, setRandGenerator: module.N, settings: module.a_, size: module.u, slide: module.bb, sys: module.aL, toDegree: module.K, toRadian: module.J, tooltip: module.b5, v2: module.v, v3: module.o, v4: module.q, visible: module.b6, visibleRect: module.aN, warn: module.w, warnID: module.d });
        }, function (module) {
            join = module.j;
            extname = module.e;
            mainFileName = module.m;
            basename = module.b;
            dirname = module.d;
            changeExtname = module.c;
            changeBasename = module.a;
            _normalize = module._;
            stripSep = module.s;
            getSeperator = module.g;
            exports({ Asset: module.A, Component: module.C, EventHandler: module.E, JavaScript: module.J, NodeEventType: module.N, Script: module.S, TypeScript: module.T, applyMixins: module.f, path: module.p });
        }, function (module) {
            ModelType = module.M;
            Model = module.a;
            SubModel = module.S;
            CameraFOVAxis = module.C;
            CameraProjection = module.b;
            CameraAperture = module.c;
            CameraISO = module.d;
            CameraShutter = module.e;
            CameraType = module.f;
            TrackingType = module.T;
            CameraUsage = module.g;
            SKYBOX_FLAG = module.h;
            Camera = module.i;
            ProbeClearFlag = module.P;
            ProbeType = module.j;
            ReflectionProbe = module.R;
            LODData = module.L;
            LODGroup = module.k;
            Ambient = module.A;
            ColorTemperatureToRGB = module.l;
            LightType = module.m;
            nt2lm = module.n;
            Light = module.o;
            DirectionalLight = module.D;
            SpotLight = module.p;
            SphereLight = module.q;
            PointLight = module.r;
            RangedDirectionalLight = module.s;
            FogType = module.F;
            FOG_TYPE_NONE = module.t;
            FogInfo = module.u;
            Fog = module.v;
            ShadowSize = module.w;
            ShadowType = module.x;
            PCFType = module.y;
            CSMLevel = module.z;
            CSMOptimizationMode = module.B;
            EnvironmentLightingType = module.E;
            ToneMappingType = module.G;
            ShadowsInfo = module.H;
            Shadows = module.I;
            Skybox = module.J;
            PostSettings = module.K;
            exports({ Acceleration: module.ay, AmbientInfo: module.a5, AssetManager: module.ar, BaseNode: module.Q, BufferAsset: module.ai, DEFAULT_OCTREE_DEPTH: module.a1, DEFAULT_WORLD_MAX_POS: module.a0, DEFAULT_WORLD_MIN_POS: module.$, Details: module.ah, EffectAsset: module.ao, EventGamepad: module.au, EventHMD: module.aw, EventHandheld: module.ax, EventHandle: module.av, FogInfo: module.a7, FogType: module.a2, ImageAsset: module.al, Input: module.aA, JsonAsset: module.ak, Layers: module.V, LightProbeInfo: module.aa, Material: module.ap, MissingScript: module.af, MobilityMode: module._, Node: module.Q, NodeActivator: module.W, NodeSpace: module.Y, OctreeInfo: module.a9, PostSettingsInfo: module.ad, Prefab: module.X, PrivateNode: module.ae, Scene: module.U, SceneGlobals: module.ab, ShadowSize: module.a3, ShadowType: module.a4, ShadowsInfo: module.a8, SkinInfo: module.ac, SkyboxInfo: module.a6, SystemEvent: module.aC, TextAsset: module.aj, Texture2D: module.am, TextureCube: module.an, TransformBit: module.Z, assetManager: module.aq, builtinResMgr: module.at, deserialize: module.ag, flattenCodeArray: module.N, input: module.az, pipeline: module.O, resources: module.as, systemEvent: module.aB });
        }, function (module) {
            PipelineState = module.P;
            LegacyRenderMode = module.L;
            RenderType = module.R;
            DeviceManager = module.D;
            deviceManager = module.d;
            DescriptorSet = module.a;
            Buffer = module.B;
            CommandBuffer = module.C;
            Device = module.b;
            Swapchain = module.S;
            Framebuffer = module.F;
            InputAssembler = module.I;
            DescriptorSetLayout = module.c;
            PipelineLayout = module.e;
            Queue = module.Q;
            RenderPass = module.f;
            Shader = module.g;
            Texture = module.T;
            Sampler = module.h;
            GeneralBarrier = module.G;
            TextureBarrier = module.i;
            exports('find', module.j);
        }, function (module) {
            PipelineStateInfo = module.P;
            ObjectType = module.O;
            Status = module.S;
            API = module.A;
            SurfaceTransform = module.a;
            Feature = module.F;
            Format = module.b;
            FormatType = module.c;
            Type = module.T;
            BufferUsageBit = module.B;
            BufferFlagBit = module.d;
            MemoryAccessBit = module.M;
            MemoryUsageBit = module.e;
            TextureType = module.f;
            TextureUsageBit = module.g;
            TextureFlagBit = module.h;
            FormatFeatureBit = module.i;
            SampleCount = module.j;
            VsyncMode = module.V;
            Filter = module.k;
            Address = module.l;
            ComparisonFunc = module.C;
            StencilOp = module.m;
            BlendFactor = module.n;
            BlendOp = module.o;
            ColorMask = module.p;
            ShaderStageFlagBit = module.q;
            LoadOp = module.L;
            StoreOp = module.r;
            AccessFlagBit = module.s;
            ResolveMode = module.R;
            PipelineBindPoint = module.t;
            PrimitiveMode = module.u;
            PolygonMode = module.v;
            ShadeModel = module.w;
            CullMode = module.x;
            DynamicStateFlagBit = module.D;
            StencilFace = module.y;
            DescriptorType = module.z;
            QueueType = module.Q;
            QueryType = module.E;
            CommandBufferType = module.G;
            ClearFlagBit = module.H;
            BarrierType = module.I;
            PassType = module.J;
            Size = module.K;
            DeviceCaps = module.N;
            DeviceOptions = module.U;
            Offset = module.W;
            Rect = module.X;
            Extent = module.Y;
            TextureSubresLayers = module.Z;
            TextureSubresRange = module._;
            TextureCopy = module.$;
            TextureBlit = module.a0;
            BufferTextureCopy = module.a1;
            Viewport = module.a2;
            Color = module.a3;
            BindingMappingInfo = module.a4;
            SwapchainInfo = module.a5;
            DeviceInfo = module.a6;
            BufferInfo = module.a7;
            BufferViewInfo = module.a8;
            DrawInfo = module.a9;
            DispatchInfo = module.aa;
            IndirectBuffer = module.ab;
            TextureInfo = module.ac;
            TextureViewInfo = module.ad;
            SamplerInfo = module.ae;
            Uniform = module.af;
            UniformBlock = module.ag;
            UniformSamplerTexture = module.ah;
            UniformSampler = module.ai;
            UniformTexture = module.aj;
            UniformStorageImage = module.ak;
            UniformStorageBuffer = module.al;
            UniformInputAttachment = module.am;
            ShaderStage = module.an;
            Attribute = module.ao;
            ShaderInfo = module.ap;
            InputAssemblerInfo = module.aq;
            ColorAttachment = module.ar;
            DepthStencilAttachment = module.as;
            SubpassInfo = module.at;
            SubpassDependency = module.au;
            RenderPassInfo = module.av;
            GeneralBarrierInfo = module.aw;
            TextureBarrierInfo = module.ax;
            BufferBarrierInfo = module.ay;
            FramebufferInfo = module.az;
            DescriptorSetLayoutBinding = module.aA;
            DescriptorSetLayoutInfo = module.aB;
            DescriptorSetInfo = module.aC;
            PipelineLayoutInfo = module.aD;
            InputState = module.aE;
            CommandBufferInfo = module.aF;
            QueueInfo = module.aG;
            QueryPoolInfo = module.aH;
            FormatInfo = module.aI;
            MemoryStatus = module.aJ;
            DynamicStencilStates = module.aK;
            DynamicStates = module.aL;
            GFXObject = module.aM;
            AttributeName = module.aN;
            FormatInfos = module.aO;
            DESCRIPTOR_BUFFER_TYPE = module.aP;
            DESCRIPTOR_SAMPLER_TYPE = module.aQ;
            DESCRIPTOR_DYNAMIC_TYPE = module.aR;
            DRAW_INFO_SIZE = module.aS;
            IsPowerOf2 = module.aT;
            FormatSize = module.aU;
            FormatSurfaceSize = module.aV;
            GetTypeSize = module.aW;
            getTypedArrayConstructor = module.aX;
            formatAlignment = module.aY;
            alignTo = module.aZ;
            exports('GCObject', module.a_);
        }, function (module) {
            Pass = module.P;
            overrideMacros = module.o;
            BatchingSchemes = module.B;
            programLib = module.p;
            getDeviceShaderVersion = module.g;
            RenderQueue = module.R;
            PassStage = module.a;
            genHandle = module.b;
            getTypeFromHandle = module.c;
            getBindingFromHandle = module.d;
            getCountFromHandle = module.e;
            getOffsetFromHandle = module.f;
            customizeType = module.h;
            type2reader = module.t;
            type2writer = module.i;
            type2validator = module.j;
            getDefaultFromType = module.k;
            getStringFromType = module.l;
            PoolType = module.m;
            NULL_HANDLE = module.N;
            Render2dView = module.n;
            Render2dPool = module.q;
            NodeView = module.r;
            NodePool$1 = module.s;
            PassView = module.u;
            PassPool = module.v;
            AABBView = module.A;
            AABBPool = module.w;
            RenderScene = module.x;
            CameraVisFlags = module.C;
            VisibilityFlags = module.V;
        }, function (module) {
            nearestPOT = module.n;
            TextureBufferPool = module.T;
        }, function (module) {
            MaterialInstance = module.M;
            exports('Renderer', module.R);
        }, function (module) {
            BlendState = module.B;
            BlendTarget = module.a;
            RasterizerState = module.R;
            DepthStencilState = module.D;
        }, function (module) {
            exports({ AssetLibrary: module.A, BloomStage: module.B, CCLoader: module.C, DeferredPipeline: module.D, Director: module.m, ForwardFlow: module.d, ForwardPipeline: module.F, ForwardStage: module.e, GbufferStage: module.G, InstancedBuffer: module.I, LightingStage: module.L, MainFlow: module.M, PipelineEventType: module.l, PipelineStateManager: module.P, PostProcessStage: module.g, ReflectionProbeFlow: module.h, ReflectionProbeStage: module.i, RenderFlow: module.b, RenderPipeline: module.a, RenderQueueDesc: module.k, RenderQueueSortMode: module.j, RenderStage: module.c, Root: module.R, ShadowFlow: module.S, ShadowStage: module.f, director: module.n, loader: module.o, url: module.u });
        }, function (module) {
            exports({ DeferredPipelineBuilder: module.D, ForwardPipelineBuilder: module.F });
        }, function (module) {
            RecyclePool = module.R;
            exports({ PrefabLink: module.P, RecyclePool: module.R });
        }, function (module) {
            exports({ Camera: module.C, CameraComponent: module.C });
        }, function (module) {
            exports({ ModelRenderer: module.M, RenderableComponent: module.M, getPhaseID: module.g });
        }, function (module) {
            exports({ AsyncDelegate: module.A, Game: module.G, game: module.g });
        }, function (module) {
            exports('instantiate', module.i);
        }, function (module) {
            exports('RenderingSubMesh', module.R);
        }, function (module) {
            exports({ RenderTexture: module.R, SceneAsset: module.S });
        }, function (module) {
            exports({ Event: module.E, EventAcceleration: module.a, EventKeyboard: module.b, EventMouse: module.c, EventTouch: module.d, KeyCode: module.K, SystemEventType: module.S, Touch: module.T });
        }, function (module) {
            exports('native', module.n);
        }, function (module) {
            CachedArray = module.C;
            exports('CachedArray', module.C);
        }, function (module) {
            exports('murmurhash2_32_gc', module.m);
        }, function (module) {
            exports('shift', module.s);
        }, function () {}],
        execute: (function () {

            var index$2 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Pool: Pool,
                RecyclePool: RecyclePool,
                CachedArray: CachedArray
            });
            exports('memop', index$2);

            legacyCC.log = log;
            legacyCC.warn = warn;
            legacyCC.error = error;
            legacyCC.assert = assert;
            legacyCC._throw = _throw;
            legacyCC.logID = logID;
            legacyCC.warnID = warnID;
            legacyCC.errorID = errorID;
            legacyCC.assertID = assertID;
            legacyCC.debug = debug;
            legacyCC.path = {
              join,
              extname,
              mainFileName,
              basename,
              dirname,
              changeExtname,
              changeBasename,
              _normalize,
              stripSep,
              get sep() {
                return getSeperator();
              }
            };

            let _stageOffset = 0;
            const _name2stageID = {};
            var config = {
              addStage(name) {
                if (_name2stageID[name] !== undefined) {
                  return;
                }
                const stageID = 1 << _stageOffset;
                _name2stageID[name] = stageID;
                _stageOffset += 1;
              },
              stageID(name) {
                const id = _name2stageID[name];
                if (id === undefined) {
                  return -1;
                }
                return id;
              },
              stageIDs(nameList) {
                let key = 0;
                for (const name of nameList) {
                  const id = _name2stageID[name];
                  if (id !== undefined) {
                    key |= id;
                  }
                }
                return key;
              }
            };

            var index$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BlendState: BlendState,
                BlendTarget: BlendTarget,
                RasterizerState: RasterizerState,
                DepthStencilState: DepthStencilState,
                PipelineState: PipelineState,
                PipelineStateInfo: PipelineStateInfo,
                get ObjectType () { return ObjectType; },
                get Status () { return Status; },
                get API () { return API; },
                get SurfaceTransform () { return SurfaceTransform; },
                get Feature () { return Feature; },
                get Format () { return Format; },
                get FormatType () { return FormatType; },
                get Type () { return Type; },
                get BufferUsageBit () { return BufferUsageBit; },
                get BufferFlagBit () { return BufferFlagBit; },
                get MemoryAccessBit () { return MemoryAccessBit; },
                get MemoryUsageBit () { return MemoryUsageBit; },
                get TextureType () { return TextureType; },
                get TextureUsageBit () { return TextureUsageBit; },
                get TextureFlagBit () { return TextureFlagBit; },
                get FormatFeatureBit () { return FormatFeatureBit; },
                get SampleCount () { return SampleCount; },
                get VsyncMode () { return VsyncMode; },
                get Filter () { return Filter; },
                get Address () { return Address; },
                get ComparisonFunc () { return ComparisonFunc; },
                get StencilOp () { return StencilOp; },
                get BlendFactor () { return BlendFactor; },
                get BlendOp () { return BlendOp; },
                get ColorMask () { return ColorMask; },
                get ShaderStageFlagBit () { return ShaderStageFlagBit; },
                get LoadOp () { return LoadOp; },
                get StoreOp () { return StoreOp; },
                get AccessFlagBit () { return AccessFlagBit; },
                get ResolveMode () { return ResolveMode; },
                get PipelineBindPoint () { return PipelineBindPoint; },
                get PrimitiveMode () { return PrimitiveMode; },
                get PolygonMode () { return PolygonMode; },
                get ShadeModel () { return ShadeModel; },
                get CullMode () { return CullMode; },
                get DynamicStateFlagBit () { return DynamicStateFlagBit; },
                get StencilFace () { return StencilFace; },
                get DescriptorType () { return DescriptorType; },
                get QueueType () { return QueueType; },
                get QueryType () { return QueryType; },
                get CommandBufferType () { return CommandBufferType; },
                get ClearFlagBit () { return ClearFlagBit; },
                get BarrierType () { return BarrierType; },
                get PassType () { return PassType; },
                Size: Size,
                DeviceCaps: DeviceCaps,
                DeviceOptions: DeviceOptions,
                Offset: Offset,
                Rect: Rect,
                Extent: Extent,
                TextureSubresLayers: TextureSubresLayers,
                TextureSubresRange: TextureSubresRange,
                TextureCopy: TextureCopy,
                TextureBlit: TextureBlit,
                BufferTextureCopy: BufferTextureCopy,
                Viewport: Viewport,
                Color: Color,
                BindingMappingInfo: BindingMappingInfo,
                SwapchainInfo: SwapchainInfo,
                DeviceInfo: DeviceInfo,
                BufferInfo: BufferInfo,
                BufferViewInfo: BufferViewInfo,
                DrawInfo: DrawInfo,
                DispatchInfo: DispatchInfo,
                IndirectBuffer: IndirectBuffer,
                TextureInfo: TextureInfo,
                TextureViewInfo: TextureViewInfo,
                SamplerInfo: SamplerInfo,
                Uniform: Uniform,
                UniformBlock: UniformBlock,
                UniformSamplerTexture: UniformSamplerTexture,
                UniformSampler: UniformSampler,
                UniformTexture: UniformTexture,
                UniformStorageImage: UniformStorageImage,
                UniformStorageBuffer: UniformStorageBuffer,
                UniformInputAttachment: UniformInputAttachment,
                ShaderStage: ShaderStage,
                Attribute: Attribute,
                ShaderInfo: ShaderInfo,
                InputAssemblerInfo: InputAssemblerInfo,
                ColorAttachment: ColorAttachment,
                DepthStencilAttachment: DepthStencilAttachment,
                SubpassInfo: SubpassInfo,
                SubpassDependency: SubpassDependency,
                RenderPassInfo: RenderPassInfo,
                GeneralBarrierInfo: GeneralBarrierInfo,
                TextureBarrierInfo: TextureBarrierInfo,
                BufferBarrierInfo: BufferBarrierInfo,
                FramebufferInfo: FramebufferInfo,
                DescriptorSetLayoutBinding: DescriptorSetLayoutBinding,
                DescriptorSetLayoutInfo: DescriptorSetLayoutInfo,
                DescriptorSetInfo: DescriptorSetInfo,
                PipelineLayoutInfo: PipelineLayoutInfo,
                InputState: InputState,
                CommandBufferInfo: CommandBufferInfo,
                QueueInfo: QueueInfo,
                QueryPoolInfo: QueryPoolInfo,
                FormatInfo: FormatInfo,
                MemoryStatus: MemoryStatus,
                DynamicStencilStates: DynamicStencilStates,
                DynamicStates: DynamicStates,
                GFXObject: GFXObject,
                get AttributeName () { return AttributeName; },
                FormatInfos: FormatInfos,
                DESCRIPTOR_BUFFER_TYPE: DESCRIPTOR_BUFFER_TYPE,
                DESCRIPTOR_SAMPLER_TYPE: DESCRIPTOR_SAMPLER_TYPE,
                DESCRIPTOR_DYNAMIC_TYPE: DESCRIPTOR_DYNAMIC_TYPE,
                DRAW_INFO_SIZE: DRAW_INFO_SIZE,
                IsPowerOf2: IsPowerOf2,
                FormatSize: FormatSize,
                FormatSurfaceSize: FormatSurfaceSize,
                GetTypeSize: GetTypeSize,
                getTypedArrayConstructor: getTypedArrayConstructor,
                formatAlignment: formatAlignment,
                alignTo: alignTo,
                get LegacyRenderMode () { return LegacyRenderMode; },
                get RenderType () { return RenderType; },
                DeviceManager: DeviceManager,
                deviceManager: deviceManager,
                DescriptorSet: DescriptorSet,
                Buffer: Buffer,
                CommandBuffer: CommandBuffer,
                Device: Device,
                Swapchain: Swapchain,
                Framebuffer: Framebuffer,
                InputAssembler: InputAssembler,
                DescriptorSetLayout: DescriptorSetLayout,
                PipelineLayout: PipelineLayout,
                Queue: Queue,
                RenderPass: RenderPass,
                Shader: Shader,
                Texture: Texture,
                Sampler: Sampler,
                GeneralBarrier: GeneralBarrier,
                TextureBarrier: TextureBarrier
            });
            exports('gfx', index$1);

            var index = /*#__PURE__*/Object.freeze({
                __proto__: null,
                get ModelType () { return ModelType; },
                Model: Model,
                SubModel: SubModel,
                get CameraFOVAxis () { return CameraFOVAxis; },
                get CameraProjection () { return CameraProjection; },
                get CameraAperture () { return CameraAperture; },
                get CameraISO () { return CameraISO; },
                get CameraShutter () { return CameraShutter; },
                get CameraType () { return CameraType; },
                get TrackingType () { return TrackingType; },
                get CameraUsage () { return CameraUsage; },
                SKYBOX_FLAG: SKYBOX_FLAG,
                Camera: Camera,
                get ProbeClearFlag () { return ProbeClearFlag; },
                get ProbeType () { return ProbeType; },
                ReflectionProbe: ReflectionProbe,
                LODData: LODData,
                LODGroup: LODGroup,
                Ambient: Ambient,
                ColorTemperatureToRGB: ColorTemperatureToRGB,
                get LightType () { return LightType; },
                nt2lm: nt2lm,
                Light: Light,
                DirectionalLight: DirectionalLight,
                SpotLight: SpotLight,
                SphereLight: SphereLight,
                PointLight: PointLight,
                RangedDirectionalLight: RangedDirectionalLight,
                FogType: FogType,
                FOG_TYPE_NONE: FOG_TYPE_NONE,
                FogInfo: FogInfo,
                Fog: Fog,
                ShadowSize: ShadowSize,
                ShadowType: ShadowType,
                PCFType: PCFType,
                CSMLevel: CSMLevel,
                CSMOptimizationMode: CSMOptimizationMode,
                EnvironmentLightingType: EnvironmentLightingType,
                ToneMappingType: ToneMappingType,
                ShadowsInfo: ShadowsInfo,
                Shadows: Shadows,
                Skybox: Skybox,
                PostSettings: PostSettings
            });

            function createIA(device, data) {
              if (!data.positions) {
                console.error('The data must have positions field');
                return null;
              }
              const verts = [];
              const vcount = data.positions.length / 3;
              for (let i = 0; i < vcount; ++i) {
                verts.push(data.positions[3 * i], data.positions[3 * i + 1], data.positions[3 * i + 2]);
                if (data.normals) {
                  verts.push(data.normals[3 * i], data.normals[3 * i + 1], data.normals[3 * i + 2]);
                }
                if (data.uvs) {
                  verts.push(data.uvs[2 * i], data.uvs[2 * i + 1]);
                }
                if (data.colors) {
                  verts.push(data.colors[3 * i], data.colors[3 * i + 1], data.colors[3 * i + 2]);
                }
              }
              const vfmt = [];
              vfmt.push(new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F));
              if (data.normals) {
                vfmt.push(new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F));
              }
              if (data.uvs) {
                vfmt.push(new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F));
              }
              if (data.colors) {
                vfmt.push(new Attribute(AttributeName.ATTR_COLOR, Format.RGB32F));
              }
              const vb = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, verts.length * 4, verts.length * 4 / vcount));
              vb.update(new Float32Array(verts));
              let ib = null;
              if (data.indices) {
                ib = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, data.indices.length * 2, 2));
                ib.update(new Uint16Array(data.indices));
              }
              return device.createInputAssembler(new InputAssemblerInfo(vfmt, [vb], ib));
            }

            class PassInstance extends Pass {
              get parent() {
                return this._parent;
              }
              constructor(parent, owner) {
                super(parent.root);
                this._parent = void 0;
                this._owner = void 0;
                this._dontNotify = false;
                this._parent = parent;
                this._owner = owner;
                this._doInit(this._parent, true);
                for (let i = 0; i < this._shaderInfo.blocks.length; i++) {
                  const u = this._shaderInfo.blocks[i];
                  const block = this._blocks[u.binding];
                  const parentBlock = this._parent.blocks[u.binding];
                  block.set(parentBlock);
                }
                this._rootBufferDirty = true;
                const paren = this._parent;
                for (let i = 0; i < this._shaderInfo.samplerTextures.length; i++) {
                  const u = this._shaderInfo.samplerTextures[i];
                  for (let j = 0; j < u.count; j++) {
                    const sampler = paren._descriptorSet.getSampler(u.binding, j);
                    const texture = paren._descriptorSet.getTexture(u.binding, j);
                    this._descriptorSet.bindSampler(u.binding, sampler, j);
                    this._descriptorSet.bindTexture(u.binding, texture, j);
                  }
                }
                super.tryCompile();
              }
              overridePipelineStates(original, overrides) {
                this._bs.reset();
                this._rs.reset();
                this._dss.reset();
                Pass.fillPipelineInfo(this, original);
                Pass.fillPipelineInfo(this, overrides);
                this._onStateChange();
              }
              tryCompile(defineOverrides) {
                if (defineOverrides) {
                  if (!overrideMacros(this._defines, defineOverrides)) {
                    return false;
                  }
                }
                const res = super.tryCompile();
                this._onStateChange();
                return res;
              }
              beginChangeStatesSilently() {
                this._dontNotify = true;
              }
              endChangeStatesSilently() {
                this._dontNotify = false;
              }
              _syncBatchingScheme() {
                this._defines.USE_INSTANCING = false;
                this._batchingScheme = BatchingSchemes.NONE;
              }
              _onStateChange() {
                this._hash = Pass.getPassHash(this);
                this._owner.onPassStateChange(this._dontNotify);
              }
            }

            const addStage = config.addStage;

            var renderer = /*#__PURE__*/Object.freeze({
                __proto__: null,
                addStage: addStage,
                scene: index,
                createIA: createIA,
                programLib: programLib,
                getDeviceShaderVersion: getDeviceShaderVersion,
                get RenderQueue () { return RenderQueue; },
                get PassStage () { return PassStage; },
                genHandle: genHandle,
                getTypeFromHandle: getTypeFromHandle,
                getBindingFromHandle: getBindingFromHandle,
                getCountFromHandle: getCountFromHandle,
                getOffsetFromHandle: getOffsetFromHandle,
                customizeType: customizeType,
                type2reader: type2reader,
                type2writer: type2writer,
                type2validator: type2validator,
                getDefaultFromType: getDefaultFromType,
                getStringFromType: getStringFromType,
                overrideMacros: overrideMacros,
                get BatchingSchemes () { return BatchingSchemes; },
                Pass: Pass,
                nearestPOT: nearestPOT,
                TextureBufferPool: TextureBufferPool,
                MaterialInstance: MaterialInstance,
                PassInstance: PassInstance,
                get PoolType () { return PoolType; },
                NULL_HANDLE: NULL_HANDLE,
                get Render2dView () { return Render2dView; },
                Render2dPool: Render2dPool,
                get NodeView () { return NodeView; },
                NodePool: NodePool$1,
                get PassView () { return PassView; },
                PassPool: PassPool,
                get AABBView () { return AABBView; },
                AABBPool: AABBPool,
                RenderScene: RenderScene,
                CameraVisFlags: CameraVisFlags,
                VisibilityFlags: VisibilityFlags
            });
            exports('renderer', renderer);

            class NodePool {
              constructor(poolHandlerComp) {
                this.poolHandlerComp = void 0;
                this._pool = void 0;
                this.poolHandlerComp = poolHandlerComp;
                this._pool = [];
              }
              size() {
                return this._pool.length;
              }
              clear() {
                const count = this._pool.length;
                for (let i = 0; i < count; ++i) {
                  this._pool[i].destroy();
                }
                this._pool.length = 0;
              }
              put(obj) {
                if (obj && this._pool.indexOf(obj) === -1) {
                  obj.removeFromParent();
                  const handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;
                  if (handler && handler.unuse) {
                    handler.unuse();
                  }
                  this._pool.push(obj);
                }
              }
              get(...args) {
                const last = this._pool.length - 1;
                if (last < 0) {
                  return null;
                } else {
                  const obj = this._pool[last];
                  this._pool.length = last;
                  const handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;
                  if (handler && handler.reuse) {
                    handler.reuse(arguments);
                  }
                  return obj;
                }
              }
            } exports('NodePool', NodePool);
            legacyCC.NodePool = NodePool;

            legacyCC.renderer = renderer;

        })
    };
}));
