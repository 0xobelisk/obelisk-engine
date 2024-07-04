System.register(['./index-ce98320e.js', './builtin-pipelines-60825716.js', './device-90bc7390.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './rendering-sub-mesh.jsb-25043997.js', './node-event-18d96a1b.js', './scene-asset.jsb-0d4c6201.js', './deprecated-f8df8d32.js', './director-dc238483.js', './camera-component-b329f870.js', './deprecated-fcfb90f6.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './deprecated-80961f27.js', './touch-af62e326.js', './decorators-b63b63a2.js', './pipeline-sub-state.jsb-f3a5cc2c.js'], (function (exports) {
    'use strict';
    var systemInfo, legacyCC, Sphere, AABB, intersect, assert, Vec4, EDITOR, macro, ccclass, requireComponent, disallowMultiple, applyDecoratedInitializer, property, serializable, warn, Vec2, Mat4, type, CCFloat, clamp, CCBoolean, CCInteger, Vec3, v3, toRadian, warnID, CopyPair, buildForwardPass, buildReflectionProbePasss, isUICamera, hasSkinObject$1, getRenderArea, ResourceResidency, buildCopyPass, buildSSSSPass, buildTransparencyPass, buildHBAOPasses, buildToneMappingPass, buildFxaaPass, buildBloomPass, buildPostprocessPass, buildUIPass, QueueHint, LightInfo, SceneFlags, getCameraUniqueID, buildShadowPasses, DebugViewSingleType, DebugViewCompositeType, DeferredPipelineBuilder, UpdateFrequency, getUpdateFrequencyName, ParameterType, getParameterTypeName, getResourceResidencyName, getQueueHintName, ResourceDimension, getResourceDimensionName, ResourceFlags, TaskType, getTaskTypeName, LightingMode, getLightingModeName, AttachmentType, getAttachmentTypeName, AccessType, getAccessTypeName, ClearValueType, getClearValueTypeName, DescriptorTypeOrder, getDescriptorTypeOrderName, Descriptor, DescriptorBlock, DescriptorBlockFlattened, DescriptorBlockIndex, ResolveFlags, ResolvePair, UploadPair, MovePair, PipelineStatistics, RenderCommonObjectPoolSettings, RenderCommonObjectPool, saveLightInfo, loadLightInfo, saveDescriptor, loadDescriptor, saveDescriptorBlock, loadDescriptorBlock, saveDescriptorBlockFlattened, loadDescriptorBlockFlattened, saveDescriptorBlockIndex, loadDescriptorBlockIndex, saveResolvePair, loadResolvePair, saveCopyPair, loadCopyPair, saveMovePair, loadMovePair, savePipelineStatistics, loadPipelineStatistics, Format, Rect, Viewport, LoadOp, StoreOp, Color, ClearFlagBit, SamplerInfo, Filter, Address, CameraUsage, supportsR32FloatTexture, CSMLevel, SKYBOX_FLAG, supportsRGBA16HalfFloatTexture, Material, ShadowType, builtinResMgr, Texture2D, ImageAsset, FOG_TYPE_NONE, CameraProjection, Component, _applyDecoratedDescriptor, RenderTexture, game, director, PipelineEventType, PostProcess, Camera, MaterialInstance;
    return {
        setters: [function (module) {
            systemInfo = module.bY;
            legacyCC = module.l;
            Sphere = module.bF;
            AABB = module.bE;
            intersect = module.bG;
            assert = module.b;
            Vec4 = module.p;
            EDITOR = module.bB;
            macro = module.aM;
            ccclass = module.by;
            requireComponent = module.cC;
            disallowMultiple = module.ck;
            applyDecoratedInitializer = module.bx;
            property = module.cl;
            serializable = module.bf;
            warn = module.w;
            Vec2 = module.V;
            Mat4 = module.s;
            type = module.bw;
            CCFloat = module.au;
            clamp = module.F;
            CCBoolean = module.av;
            CCInteger = module.at;
            Vec3 = module.n;
            v3 = module.o;
            toRadian = module.J;
            warnID = module.d;
        }, function (module) {
            CopyPair = module.C;
            buildForwardPass = module.b;
            buildReflectionProbePasss = module.a;
            isUICamera = module.i;
            hasSkinObject$1 = module.h;
            getRenderArea = module.g;
            ResourceResidency = module.R;
            buildCopyPass = module.c;
            buildSSSSPass = module.d;
            buildTransparencyPass = module.e;
            buildHBAOPasses = module.f;
            buildToneMappingPass = module.j;
            buildFxaaPass = module.k;
            buildBloomPass = module.l;
            buildPostprocessPass = module.m;
            buildUIPass = module.n;
            QueueHint = module.Q;
            LightInfo = module.L;
            SceneFlags = module.S;
            getCameraUniqueID = module.o;
            buildShadowPasses = module.p;
            DebugViewSingleType = module.q;
            DebugViewCompositeType = module.r;
            DeferredPipelineBuilder = module.D;
            UpdateFrequency = module.U;
            getUpdateFrequencyName = module.s;
            ParameterType = module.P;
            getParameterTypeName = module.t;
            getResourceResidencyName = module.u;
            getQueueHintName = module.v;
            ResourceDimension = module.w;
            getResourceDimensionName = module.x;
            ResourceFlags = module.y;
            TaskType = module.T;
            getTaskTypeName = module.z;
            LightingMode = module.A;
            getLightingModeName = module.B;
            AttachmentType = module.E;
            getAttachmentTypeName = module.G;
            AccessType = module.H;
            getAccessTypeName = module.I;
            ClearValueType = module.J;
            getClearValueTypeName = module.K;
            DescriptorTypeOrder = module.M;
            getDescriptorTypeOrderName = module.N;
            Descriptor = module.O;
            DescriptorBlock = module.V;
            DescriptorBlockFlattened = module.W;
            DescriptorBlockIndex = module.X;
            ResolveFlags = module.Y;
            ResolvePair = module.Z;
            UploadPair = module._;
            MovePair = module.$;
            PipelineStatistics = module.a0;
            RenderCommonObjectPoolSettings = module.a1;
            RenderCommonObjectPool = module.a2;
            saveLightInfo = module.a3;
            loadLightInfo = module.a4;
            saveDescriptor = module.a5;
            loadDescriptor = module.a6;
            saveDescriptorBlock = module.a7;
            loadDescriptorBlock = module.a8;
            saveDescriptorBlockFlattened = module.a9;
            loadDescriptorBlockFlattened = module.aa;
            saveDescriptorBlockIndex = module.ab;
            loadDescriptorBlockIndex = module.ac;
            saveResolvePair = module.ad;
            loadResolvePair = module.ae;
            saveCopyPair = module.af;
            loadCopyPair = module.ag;
            saveMovePair = module.ah;
            loadMovePair = module.ai;
            savePipelineStatistics = module.aj;
            loadPipelineStatistics = module.ak;
        }, function (module) {
            Format = module.b;
            Rect = module.X;
            Viewport = module.a2;
            LoadOp = module.L;
            StoreOp = module.r;
            Color = module.a3;
            ClearFlagBit = module.H;
            SamplerInfo = module.ae;
            Filter = module.k;
            Address = module.l;
        }, function (module) {
            CameraUsage = module.g;
            supportsR32FloatTexture = module.aM;
            CSMLevel = module.z;
            SKYBOX_FLAG = module.h;
            supportsRGBA16HalfFloatTexture = module.aL;
            Material = module.ap;
            ShadowType = module.x;
            builtinResMgr = module.at;
            Texture2D = module.am;
            ImageAsset = module.al;
            FOG_TYPE_NONE = module.t;
            CameraProjection = module.b;
        }, function () {}, function () {}, function (module) {
            Component = module.C;
            _applyDecoratedDescriptor = module.H;
        }, function (module) {
            RenderTexture = module.R;
        }, function (module) {
            game = module.g;
        }, function (module) {
            director = module.n;
            PipelineEventType = module.l;
        }, function (module) {
            PostProcess = module.P;
            Camera = module.C;
        }, function () {}, function () {}, function (module) {
            MaterialInstance = module.M;
        }, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            const copyPair = new CopyPair();
            const pairs = [copyPair];
            class CustomPipelineBuilder {
              setup(cameras, ppl) {
                for (let i = 0; i < cameras.length; i++) {
                  const camera = cameras[i];
                  if (camera.scene === null) {
                    continue;
                  }
                  const isGameView = camera.cameraUsage === CameraUsage.GAME || camera.cameraUsage === CameraUsage.GAME_VIEW;
                  if (!isGameView) {
                    buildForwardPass(camera, ppl, isGameView);
                    buildReflectionProbePasss(camera, ppl);
                    continue;
                  }
                  if (!isUICamera(camera)) {
                    const hasDeferredTransparencyObjects = hasSkinObject$1(ppl);
                    const forwardInfo = buildForwardPass(camera, ppl, isGameView, !hasDeferredTransparencyObjects);
                    buildReflectionProbePasss(camera, ppl);
                    const area = getRenderArea(camera, camera.window.width, camera.window.height);
                    const width = area.width;
                    const height = area.height;
                    if (!ppl.containsResource('copyTexTest')) {
                      ppl.addRenderTarget('copyTexTest', Format.RGBA16F, width, height, ResourceResidency.PERSISTENT);
                    }
                    copyPair.source = forwardInfo.rtName;
                    copyPair.target = 'copyTexTest';
                    buildCopyPass(ppl, pairs);
                    const skinInfo = buildSSSSPass(camera, ppl, 'copyTexTest', forwardInfo.dsName);
                    const deferredTransparencyInfo = buildTransparencyPass(camera, ppl, skinInfo.rtName, skinInfo.dsName, hasDeferredTransparencyObjects);
                    const hbaoInfo = buildHBAOPasses(camera, ppl, deferredTransparencyInfo.rtName, deferredTransparencyInfo.dsName);
                    const toneMappingInfo = buildToneMappingPass(camera, ppl, hbaoInfo.rtName, hbaoInfo.dsName);
                    const fxaaInfo = buildFxaaPass(camera, ppl, toneMappingInfo.rtName, toneMappingInfo.dsName);
                    const bloomInfo = buildBloomPass(camera, ppl, fxaaInfo.rtName);
                    buildPostprocessPass(camera, ppl, bloomInfo.rtName);
                    continue;
                  }
                  buildUIPass(camera, ppl);
                }
              }
            }
            class WindowInfo {
              constructor(id, width, height) {
                this.id = 0xFFFFFFFF;
                this.width = 0;
                this.height = 0;
                this.id = id;
                this.width = width;
                this.height = height;
              }
            }
            class SceneInfo {
              constructor(pipelineSceneData) {
                this.pipelineSceneData = void 0;
                this.punctualLights = [];
                this.spotLights = [];
                this.shadows = void 0;
                this.pipelineSceneData = pipelineSceneData;
                this.shadows = pipelineSceneData.shadows;
              }
              reset() {
                this.punctualLights.length = 0;
                this.spotLights.length = 0;
              }
            }
            class TestPipelineBuilder {
              constructor(pipelineSceneData) {
                this._windows = new Map();
                this._sceneInfo = void 0;
                this._tiled = systemInfo.isMobile;
                this._flipY = legacyCC.director.root.device.capabilities.screenSpaceSignY;
                this._area = new Rect(0, 0, 1, 1);
                this._sphere = Sphere.create(0, 0, 0, 1);
                this._rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
                this._viewport = new Viewport();
                this._tmpBoundingBox = new AABB();
                this._sceneInfo = new SceneInfo(pipelineSceneData);
              }
              setup(cameras, ppl) {
                for (let i = 0; i < cameras.length; i++) {
                  const camera = cameras[i];
                  if (camera.scene === null || camera.window === null) {
                    continue;
                  }
                  if (camera.cameraUsage !== CameraUsage.GAME) {
                    buildForwardPass(camera, ppl, false);
                    continue;
                  }
                  ppl.update(camera);
                  const info = this.prepareGameCamera(ppl, camera);
                  this.prepareSceneInfo(camera.scene, camera.frustum, this._sceneInfo);
                  this.buildForward(ppl, camera, info.id, info.width, info.height);
                }
              }
              prepareSceneInfo(scene, frustum, sceneInfo) {
                sceneInfo.reset();
                for (let i = 0; i < scene.spotLights.length; i++) {
                  const light = scene.spotLights[i];
                  if (light.baked) {
                    continue;
                  }
                  Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
                  if (intersect.sphereFrustum(this._sphere, frustum)) {
                    sceneInfo.punctualLights.push(light);
                    sceneInfo.spotLights.push(light);
                  }
                }
                for (let i = 0; i < scene.sphereLights.length; i++) {
                  const light = scene.sphereLights[i];
                  if (light.baked) {
                    continue;
                  }
                  Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
                  if (intersect.sphereFrustum(this._sphere, frustum)) {
                    sceneInfo.punctualLights.push(light);
                  }
                }
                for (let i = 0; i < scene.pointLights.length; i++) {
                  const light = scene.pointLights[i];
                  if (light.baked) {
                    continue;
                  }
                  Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
                  if (intersect.sphereFrustum(this._sphere, frustum)) {
                    sceneInfo.punctualLights.push(light);
                  }
                }
                for (let i = 0; i < scene.rangedDirLights.length; i++) {
                  const light = scene.rangedDirLights[i];
                  AABB.transform(this._tmpBoundingBox, this._rangedDirLightBoundingBox, light.node.getWorldMatrix());
                  if (intersect.aabbFrustum(this._tmpBoundingBox, frustum)) {
                    sceneInfo.punctualLights.push(light);
                  }
                }
              }
              prepareGameCamera(ppl, camera) {
                let info = this._windows.get(camera.window);
                if (info !== undefined) {
                  let width = camera.window.width;
                  let height = camera.window.height;
                  if (width === 0) {
                    width = 1;
                  }
                  if (height === 0) {
                    height = 1;
                  }
                  if (info.width === width && info.height === height) {
                    return info;
                  }
                  info.width = width;
                  info.height = height;
                  this.updateGameCamera(ppl, camera, info.id, info.width, info.height);
                  return info;
                }
                const id = this._windows.size;
                info = new WindowInfo(id, camera.window.width ? camera.window.width : 1, camera.window.height ? camera.window.height : 1);
                this.initGameCamera(ppl, camera, info.id, info.width, info.height);
                this._windows.set(camera.window, info);
                return info;
              }
              initGameCamera(ppl, camera, id, width, height) {
                const device = ppl.device;
                ppl.addRenderWindow(`Color${id}`, Format.BGRA8, width, height, camera.window);
                ppl.addDepthStencil(`DepthStencil${id}`, Format.DEPTH_STENCIL, width, height);
                const shadowFormat = supportsR32FloatTexture(device) ? Format.R32F : Format.RGBA8;
                const shadowSize = this._sceneInfo.shadows.size;
                ppl.addRenderTarget(`ShadowMap${id}`, shadowFormat, shadowSize.x, shadowSize.y);
                ppl.addRenderTarget(`SpotShadowMap${id}0`, shadowFormat, shadowSize.x, shadowSize.y);
                ppl.addRenderTarget(`SpotShadowMap${id}1`, shadowFormat, shadowSize.x, shadowSize.y);
                ppl.addRenderTarget(`SpotShadowMap${id}2`, shadowFormat, shadowSize.x, shadowSize.y);
                ppl.addRenderTarget(`SpotShadowMap${id}3`, shadowFormat, shadowSize.x, shadowSize.y);
                ppl.addDepthStencil(`ShadowDepth${id}`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
                ppl.addDepthStencil(`SpotLightShadowDepth${id}0`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
                ppl.addDepthStencil(`SpotLightShadowDepth${id}1`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
                ppl.addDepthStencil(`SpotLightShadowDepth${id}2`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
                ppl.addDepthStencil(`SpotLightShadowDepth${id}3`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
              }
              updateGameCamera(ppl, camera, id, width, height) {
                ppl.updateRenderWindow(`Color${id}`, camera.window);
                ppl.updateDepthStencil(`DepthStencil${id}`, width, height);
                const shadowSize = this._sceneInfo.shadows.size;
                ppl.updateRenderTarget(`ShadowMap${id}`, shadowSize.x, shadowSize.y);
                ppl.updateRenderTarget(`SpotShadowMap${id}0`, shadowSize.x, shadowSize.y);
                ppl.updateRenderTarget(`SpotShadowMap${id}1`, shadowSize.x, shadowSize.y);
                ppl.updateRenderTarget(`SpotShadowMap${id}2`, shadowSize.x, shadowSize.y);
                ppl.updateRenderTarget(`SpotShadowMap${id}3`, shadowSize.x, shadowSize.y);
                ppl.updateDepthStencil(`ShadowDepth${id}`, shadowSize.x, shadowSize.y);
                ppl.updateDepthStencil(`SpotLightShadowDepth${id}0`, shadowSize.x, shadowSize.y);
                ppl.updateDepthStencil(`SpotLightShadowDepth${id}1`, shadowSize.x, shadowSize.y);
                ppl.updateDepthStencil(`SpotLightShadowDepth${id}2`, shadowSize.x, shadowSize.y);
                ppl.updateDepthStencil(`SpotLightShadowDepth${id}3`, shadowSize.x, shadowSize.y);
              }
              buildForwardTiled(ppl, camera, id, width, height, sceneInfo) {
                assert(this._tiled);
                assert(camera.scene !== null);
                const scene = camera.scene;
                scene.mainLight;
                {
                  const pass = ppl.addRenderPass(width, height, 'default');
                  pass.addRenderTarget(`Color${id}`, LoadOp.CLEAR);
                  pass.addDepthStencil(`DepthStencil${id}`, LoadOp.CLEAR);
                  pass.addQueue(QueueHint.NONE).addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE | SceneFlags.MASK);
                  pass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), SceneFlags.BLEND);
                }
              }
              buildForward(ppl, camera, id, width, height) {
                assert(camera.scene !== null);
                if (camera.scene === null) {
                  return;
                }
                const scene = camera.scene;
                const mainLight = scene.mainLight;
                if (mainLight && mainLight.shadowEnabled) {
                  this.buildCascadedShadowMapPass(ppl, id, mainLight, camera);
                }
                {
                  const pass = ppl.addRenderPass(width, height, 'default');
                  pass.addRenderTarget(`Color${id}`, LoadOp.CLEAR);
                  pass.addDepthStencil(`DepthStencil${id}`, LoadOp.CLEAR);
                  pass.addTexture(`ShadowMap${id}`, 'cc_shadowMap');
                  pass.addQueue(QueueHint.NONE).addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE | SceneFlags.MASK);
                  pass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), SceneFlags.BLEND);
                }
              }
              buildCascadedShadowMapPass(ppl, id, light, camera) {
                const width = this._sceneInfo.shadows.size.x;
                const height = this._sceneInfo.shadows.size.y;
                const pass = ppl.addRenderPass(width, height, 'default');
                pass.addRenderTarget(`ShadowMap${id}`, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
                pass.addDepthStencil(`ShadowDepth${id}`, LoadOp.CLEAR, StoreOp.DISCARD);
                if (light.shadowFixedArea) {
                  const queue = pass.addQueue(QueueHint.NONE, 'shadow-caster');
                  queue.addSceneOfCamera(camera, new LightInfo(light, 0), SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER);
                } else {
                  const csmLevel = ppl.pipelineSceneData.csmSupported ? light.csmLevel : 1;
                  for (let level = 0; level !== csmLevel; ++level) {
                    this.getMainLightViewport(light, width, height, level, this._viewport);
                    const queue = pass.addQueue(QueueHint.NONE, 'shadow-caster');
                    queue.setViewport(this._viewport);
                    queue.addSceneOfCamera(camera, new LightInfo(light, level), SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER);
                  }
                }
              }
              getViewport(area, w, h, vp) {
                vp.left = Math.trunc(area.x * w);
                vp.top = Math.trunc(area.y * h);
                vp.width = Math.trunc(area.width * w);
                vp.height = Math.trunc(area.height * h);
                vp.left = Math.max(0, vp.left);
                vp.top = Math.max(0, vp.top);
                vp.width = Math.max(1, vp.width);
                vp.height = Math.max(1, vp.height);
              }
              getMainLightViewport(light, w, h, level, vp) {
                if (light.shadowFixedArea || light.csmLevel === CSMLevel.LEVEL_1) {
                  vp.left = 0;
                  vp.top = 0;
                  vp.width = Math.trunc(w);
                  vp.height = Math.trunc(h);
                } else {
                  vp.left = Math.trunc(level % 2 * 0.5 * w);
                  if (this._flipY) {
                    vp.top = Math.trunc((1 - Math.floor(level / 2)) * 0.5 * h);
                  } else {
                    vp.top = Math.trunc(Math.floor(level / 2) * 0.5 * h);
                  }
                  vp.width = Math.trunc(0.5 * w);
                  vp.height = Math.trunc(0.5 * h);
                }
                vp.left = Math.max(0, vp.left);
                vp.top = Math.max(0, vp.top);
                vp.width = Math.max(1, vp.width);
                vp.height = Math.max(1, vp.height);
              }
            }

            const sphere = Sphere.create(0, 0, 0, 1);
            const boundingBox = new AABB();
            const rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
            class PassContext {
              constructor() {
                this.clearFlag = ClearFlagBit.COLOR;
                this.clearColor = new Color();
                this.clearDepthColor = new Color();
                this.ppl = void 0;
                this.camera = void 0;
                this.material = void 0;
                this.pass = void 0;
                this.rasterWidth = 0;
                this.rasterHeight = 0;
                this.layoutName = '';
                this.shadingScale = 1;
                this.viewport = new Rect();
                this.passViewport = new Rect();
                this.passPathName = '';
                this.passVersion = 0;
                this.isFinalCamera = false;
                this.isFinalPass = false;
                this.depthSlotName = '';
                this.shadowPass = undefined;
                this.forwardPass = undefined;
                this.postProcess = void 0;
                this.maxSpotLights = 0xFFFFFFFF;
                this.maxSphereLights = 0xFFFFFFFF;
                this.maxPointLights = 0xFFFFFFFF;
                this.maxRangedDirLights = 0xFFFFFFFF;
              }
              setClearFlag(clearFlag) {
                this.clearFlag = clearFlag;
                return this;
              }
              setClearColor(x, y, z, w) {
                Vec4.set(this.clearColor, x, y, z, w);
                return this;
              }
              setClearDepthColor(x, y, z, w) {
                Vec4.set(this.clearDepthColor, x, y, z, w);
                return this;
              }
              version() {
                {
                  this.passPathName += `_${this.pass.name}_${this.layoutName}`;
                  this.pass.setVersion(this.passPathName, this.passVersion);
                }
                return this;
              }
              clearBlack() {
                this.clearFlag = ClearFlagBit.COLOR;
                Vec4.set(passContext.clearColor, 0, 0, 0, 1);
              }
              addRenderPass(layoutName, passName) {
                const passViewport = this.passViewport;
                const pass = this.ppl.addRenderPass(passViewport.width, passViewport.height, layoutName);
                pass.name = passName;
                this.pass = pass;
                this.layoutName = layoutName;
                this.rasterWidth = passViewport.width;
                this.rasterHeight = passViewport.height;
                pass.setViewport(new Viewport(passViewport.x, passViewport.y, passViewport.width, passViewport.height));
                return this;
              }
              addSceneLights(queue, camera, flags = SceneFlags.BLEND) {
                if (this.maxPointLights === 0 && this.maxSphereLights === 0 && this.maxSpotLights === 0 && this.maxRangedDirLights === 0) {
                  return;
                }
                const scene = camera.scene;
                const spotLights = scene.spotLights;
                const sphereLights = scene.sphereLights;
                const pointLights = scene.pointLights;
                const rangedDirLights = scene.rangedDirLights;
                const numSpotLights = Math.min(spotLights.length, this.maxSpotLights);
                const numSphereLights = Math.min(sphereLights.length, this.maxSphereLights);
                const numPointLights = Math.min(pointLights.length, this.maxPointLights);
                const numRangedDirLights = Math.min(rangedDirLights.length, this.maxRangedDirLights);
                for (let i = 0; i < numSpotLights; i++) {
                  const light = spotLights[i];
                  if (light.baked) {
                    continue;
                  }
                  Sphere.set(sphere, light.position.x, light.position.y, light.position.z, light.range);
                  if (intersect.sphereFrustum(sphere, camera.frustum)) {
                    queue.addSceneOfCamera(camera, new LightInfo(light), flags);
                  }
                }
                for (let i = 0; i < numSphereLights; i++) {
                  const light = sphereLights[i];
                  if (light.baked) {
                    continue;
                  }
                  Sphere.set(sphere, light.position.x, light.position.y, light.position.z, light.range);
                  if (intersect.sphereFrustum(sphere, camera.frustum)) {
                    queue.addSceneOfCamera(camera, new LightInfo(light), flags);
                  }
                }
                for (let i = 0; i < numPointLights; i++) {
                  const light = pointLights[i];
                  if (light.baked) {
                    continue;
                  }
                  Sphere.set(sphere, light.position.x, light.position.y, light.position.z, light.range);
                  if (intersect.sphereFrustum(sphere, camera.frustum)) {
                    queue.addSceneOfCamera(camera, new LightInfo(light), flags);
                  }
                }
                for (let i = 0; i < numRangedDirLights; i++) {
                  const light = rangedDirLights[i];
                  AABB.transform(boundingBox, rangedDirLightBoundingBox, light.node.getWorldMatrix());
                  if (intersect.aabbFrustum(boundingBox, camera.frustum)) {
                    queue.addSceneOfCamera(camera, new LightInfo(light), flags);
                  }
                }
              }
              updateViewPort() {
                const camera = this.camera;
                if (!camera) {
                  return;
                }
                let shadingScale = 1;
                if (this.postProcess && (!EDITOR )) {
                  shadingScale *= this.postProcess.shadingScale;
                }
                this.shadingScale = shadingScale;
                const area = getRenderArea(camera, camera.window.width * shadingScale, camera.window.height * shadingScale, null, 0, this.viewport);
                area.width = Math.floor(area.width);
                area.height = Math.floor(area.height);
              }
              updatePassViewPort(shadingScale = 1, offsetScale = 0) {
                this.passViewport.width = this.viewport.width * shadingScale;
                this.passViewport.height = this.viewport.height * shadingScale;
                this.passViewport.x = this.viewport.x * offsetScale;
                this.passViewport.y = this.viewport.y * offsetScale;
                return this;
              }
              addRasterView(name, format, offscreen = true, residency = ResourceResidency.MANAGED) {
                const ppl = this.ppl;
                const camera = this.camera;
                const pass = this.pass;
                if (!ppl || !camera || !pass) {
                  return this;
                }
                if (!ppl.containsResource(name)) {
                  if (format === Format.DEPTH_STENCIL) {
                    ppl.addDepthStencil(name, format, this.rasterWidth, this.rasterHeight, ResourceResidency.MANAGED);
                  } else if (offscreen) {
                    ppl.addRenderTarget(name, format, this.rasterWidth, this.rasterHeight, residency || ResourceResidency.MANAGED);
                  } else {
                    ppl.addRenderWindow(name, format, this.rasterWidth, this.rasterHeight, camera.window);
                  }
                }
                if (format !== Format.DEPTH_STENCIL) {
                  if (!offscreen) {
                    ppl.updateRenderWindow(name, camera.window);
                  } else {
                    ppl.updateRenderTarget(name, this.rasterWidth, this.rasterHeight);
                  }
                } else {
                  ppl.updateDepthStencil(name, this.rasterWidth, this.rasterHeight);
                }
                if (format === Format.DEPTH_STENCIL) {
                  const clearFlag = this.clearFlag & ClearFlagBit.DEPTH_STENCIL;
                  let loadOp = LoadOp.CLEAR;
                  if (clearFlag === ClearFlagBit.NONE) {
                    loadOp = LoadOp.LOAD;
                  }
                  pass.addDepthStencil(name, loadOp, StoreOp.STORE, this.clearDepthColor.x, this.clearDepthColor.y, clearFlag);
                } else {
                  const clearColor = new Color();
                  clearColor.copy(this.clearColor);
                  const clearFlag = this.clearFlag & ClearFlagBit.COLOR;
                  let loadOp = LoadOp.CLEAR;
                  if (clearFlag === ClearFlagBit.NONE && !(this.clearFlag & SKYBOX_FLAG)) {
                    loadOp = LoadOp.LOAD;
                  } else if (this.clearFlag & SKYBOX_FLAG) {
                    clearColor.set(0, 0, 0, 1);
                  }
                  pass.addRenderTarget(name, loadOp, StoreOp.STORE, clearColor);
                }
                return this;
              }
              setPassInput(inputName, shaderName) {
                if (this.ppl.containsResource(inputName)) {
                  this.pass.addTexture(inputName, shaderName);
                }
                return this;
              }
              blitScreen(passIdx = 0) {
                this.pass.addQueue(QueueHint.RENDER_TRANSPARENT).addCameraQuad(this.camera, this.material, passIdx, SceneFlags.NONE);
                return this;
              }
            }
            const passContext = new PassContext();

            let _BasePassID = 0;
            let _pointSampler = null;
            const _samplerPointInfo = new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP);
            function getRTFormatBeforeToneMapping(ppl) {
              const useFloatOutput = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
              return ppl.pipelineSceneData.isHDR && useFloatOutput && supportsRGBA16HalfFloatTexture(ppl.device) ? Format.RGBA16F : Format.RGBA8;
            }
            function forceEnableFloatOutput(ppl) {
              let enabled = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
              if (ppl.pipelineSceneData.isHDR && !enabled) {
                const supportFloatOutput = supportsRGBA16HalfFloatTexture(ppl.device);
                ppl.setMacroBool('CC_USE_FLOAT_OUTPUT', supportFloatOutput);
                macro.ENABLE_FLOAT_OUTPUT = supportFloatOutput;
                enabled = supportFloatOutput;
              }
              return enabled;
            }
            function disablePostProcessForDebugView() {
              const debugView = legacyCC.director.root.debugView;
              return debugView.singleMode > 0;
            }
            function getShadowMapSampler() {
              if (!_pointSampler) {
                const director = legacyCC.director;
                const pipeline = director.root.pipeline;
                const device = pipeline.device;
                _pointSampler = device.getSampler(_samplerPointInfo);
              }
              return _pointSampler || undefined;
            }
            class BasePass {
              constructor() {
                this.name = void 0;
                this.effectName = 'pipeline/post-process/blit-screen';
                this._id = 0;
                this.context = passContext;
                this.getCameraUniqueID = getCameraUniqueID;
                this._material = void 0;
                this.enable = true;
                this.outputNames = [];
                this.lastPass = void 0;
                this.enableInAllEditorCamera = false;
                this._id = _BasePassID++;
              }
              get material() {
                const effectReloaded = false;
                if (!this._material || effectReloaded) {
                  const mat = new Material();
                  mat._uuid = `${this.name}-${this.effectName}-material`;
                  mat.initialize({
                    effectName: this.effectName
                  });
                  this._material = mat;
                }
                let material;
                return material || this._material;
              }
              slotName(camera, index = 0) {
                const name = this.outputNames[index] + this.name;
                return `${name}_${this._id}_${getCameraUniqueID(camera)}`;
              }
              checkEnable(camera) {
                return this.enable;
              }
              renderProfiler(camera) {
                if (passContext.isFinalCamera && !EDITOR) {
                  passContext.pass.showStatistics = true;
                }
              }
            }

            class ForwardFinalPass extends BasePass {
              constructor(...args) {
                super(...args);
                this.name = 'ForwardFinalPass';
                this.outputNames = ['ForwardFinalColor'];
                this.enableInAllEditorCamera = true;
              }
              render(camera, ppl) {
                if (!this.lastPass) {
                  return;
                }
                passContext.clearFlag = camera.clearFlag & ClearFlagBit.COLOR | camera.clearFlag & SKYBOX_FLAG;
                Vec4.set(passContext.clearColor, camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w);
                passContext.material = this.material;
                const cameraID = getCameraUniqueID(camera);
                const input0 = this.lastPass.slotName(camera, 0);
                const slot0 = this.slotName(camera, 0);
                const isOffScreen = false;
                const fb = camera.window.framebuffer;
                const ct = fb && fb.colorTextures[0];
                const format = ct ? ct.format : Format.RGBA8;
                const shadingScale = passContext.shadingScale;
                passContext.updatePassViewPort(1 / shadingScale, 1 / shadingScale).addRenderPass('post-process', `${this.name}${cameraID}`).setPassInput(input0, 'inputTexture').addRasterView(slot0, format, isOffScreen).blitScreen(0);
                this.renderProfiler(camera);
              }
            }

            class ForwardPass extends BasePass {
              constructor(...args) {
                super(...args);
                this.name = 'ForwardPass';
                this.outputNames = ['ForwardColor', 'ForwardDS'];
                this.enableInAllEditorCamera = true;
                this.depthBufferShadingScale = 1;
              }
              calcDepthSlot(camera) {
                const depthSlotName = !!passContext.depthSlotName;
                let canUsePrevDepth = !(camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
                canUsePrevDepth = canUsePrevDepth && passContext.shadingScale === this.depthBufferShadingScale;
                if (canUsePrevDepth) {
                  if (!depthSlotName) passContext.depthSlotName = super.slotName(camera, 1);
                  return;
                }
                this.depthBufferShadingScale = passContext.shadingScale;
                passContext.depthSlotName = super.slotName(camera, 1);
              }
              slotName(camera, index = 0) {
                if (index === 1) {
                  return passContext.depthSlotName;
                }
                return super.slotName(camera, index);
              }
              render(camera, ppl) {
                var _camera$scene;
                passContext.clearFlag = ClearFlagBit.COLOR | camera.clearFlag & ClearFlagBit.DEPTH_STENCIL | camera.clearFlag & SKYBOX_FLAG;
                Vec4.set(passContext.clearColor, 0, 0, 0, 0);
                Vec4.set(passContext.clearDepthColor, camera.clearDepth, camera.clearStencil, 0, 0);
                this.calcDepthSlot(camera);
                const slot0 = this.slotName(camera, 0);
                const slot1 = this.slotName(camera, 1);
                const cameraID = getCameraUniqueID(camera);
                const isOffScreen = true;
                passContext.updatePassViewPort().addRenderPass('default', `${this.name}_${cameraID}`).addRasterView(slot0, getRTFormatBeforeToneMapping(ppl), isOffScreen).addRasterView(slot1, Format.DEPTH_STENCIL, isOffScreen).version();
                const pass = passContext.pass;
                const shadowPass = passContext.shadowPass;
                if (shadowPass) {
                  for (const dirShadowName of shadowPass.mainLightShadows) {
                    if (ppl.containsResource(dirShadowName)) {
                      pass.addTexture(dirShadowName, 'cc_shadowMap', getShadowMapSampler());
                    }
                  }
                  for (const spotShadowName of shadowPass.spotLightShadows) {
                    if (ppl.containsResource(spotShadowName)) {
                      pass.addTexture(spotShadowName, 'cc_spotShadowMap', getShadowMapSampler());
                    }
                  }
                }
                const forwardQueue = pass.addQueue(QueueHint.RENDER_OPAQUE);
                forwardQueue.addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE_OBJECT | SceneFlags.CUTOUT_OBJECT | SceneFlags.GEOMETRY);
                const forwardAddQueue = pass.addQueue(QueueHint.RENDER_TRANSPARENT, 'forward-add');
                passContext.addSceneLights(forwardAddQueue, camera);
                const shadowInfo = ppl.pipelineSceneData.shadows;
                if ((_camera$scene = camera.scene) !== null && _camera$scene !== void 0 && _camera$scene.mainLight && shadowInfo.enabled && shadowInfo.type === ShadowType.Planar) {
                  var _camera$scene2;
                  pass.addQueue(QueueHint.RENDER_TRANSPARENT, 'planar-shadow').addSceneOfCamera(camera, new LightInfo((_camera$scene2 = camera.scene) === null || _camera$scene2 === void 0 ? void 0 : _camera$scene2.mainLight), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.SHADOW_CASTER | SceneFlags.GEOMETRY);
                }
                passContext.forwardPass = this;
              }
            }

            var _dec$9, _dec2$7, _class$9;
            let PostProcessSetting = (_dec$9 = ccclass('cc.PostProcessSetting'), _dec2$7 = requireComponent(PostProcess), _dec$9(_class$9 = _dec2$7(_class$9 = class PostProcessSetting extends Component {
              onEnable() {
                const pp = this.getComponent(PostProcess);
                pp === null || pp === void 0 ? void 0 : pp.addSetting(this);
              }
              onDisable() {
                const pp = this.getComponent(PostProcess);
                pp === null || pp === void 0 ? void 0 : pp.removeSetting(this);
              }
            }) || _class$9) || _class$9);

            var _dec$8, _class$8, _class2$7, _initializer$7, _initializer2$5;
            let TAA = (_dec$8 = ccclass('cc.TAA'), _dec$8(_class$8 = disallowMultiple(_class$8 = (_class2$7 = class TAA extends PostProcessSetting {
              constructor(...args) {
                super(...args);
                this._sampleScale = _initializer$7 && _initializer$7();
                this._feedback = _initializer2$5 && _initializer2$5();
              }
              get sampleScale() {
                return this._sampleScale;
              }
              set sampleScale(v) {
                this._sampleScale = v;
              }
              get feedback() {
                return this._feedback;
              }
              set feedback(v) {
                this._feedback = v;
              }
            }, (_initializer$7 = applyDecoratedInitializer(_class2$7.prototype, "_sampleScale", [serializable], function () {
              return 1;
            }), _applyDecoratedDescriptor(_class2$7.prototype, "sampleScale", [property], Object.getOwnPropertyDescriptor(_class2$7.prototype, "sampleScale"), _class2$7.prototype), _initializer2$5 = applyDecoratedInitializer(_class2$7.prototype, "_feedback", [serializable], function () {
              return 0.95;
            }), _applyDecoratedDescriptor(_class2$7.prototype, "feedback", [property], Object.getOwnPropertyDescriptor(_class2$7.prototype, "feedback"), _class2$7.prototype)), _class2$7)) || _class$8) || _class$8);

            var _dec$7, _dec2$6, _class$7, _class2$6, _initializer$6;
            let TAAMask = (_dec$7 = ccclass('TAAMask'), _dec2$6 = property(Camera), _dec$7(_class$7 = (_class2$6 = class TAAMask extends Component {
              constructor(...args) {
                super(...args);
                this.maskCamera = _initializer$6 && _initializer$6();
                this._mask = void 0;
              }
              get mask() {
                if (!this.maskCamera || !this.maskCamera.enabledInHierarchy) {
                  return undefined;
                }
                if (!this.enabledInHierarchy) {
                  return undefined;
                }
                return this._mask;
              }
              start() {
                if (!this.maskCamera) {
                  warn('Can not find a Camera for TAAMask');
                  return;
                }
                const tex = new RenderTexture();
                tex.reset({
                  width: game.canvas.width,
                  height: game.canvas.height
                });
                this._mask = tex;
                this.maskCamera.targetTexture = tex;
              }
            }, (_initializer$6 = applyDecoratedInitializer(_class2$6.prototype, "maskCamera", [_dec2$6], null)), _class2$6)) || _class$7);

            function getSetting(settingClass) {
              const cls = settingClass;
              const setting = passContext.postProcess && passContext.postProcess.getSetting(cls);
              return setting;
            }
            class SettingPass extends BasePass {
              constructor(...args) {
                super(...args);
                this.getSetting = getSetting;
              }
              get setting() {
                return this.getSetting(PostProcessSetting);
              }
              checkEnable(camera) {
                const enable = super.checkEnable(camera);
                const setting = this.setting;
                return enable && !!setting && setting.enabledInHierarchy;
              }
            }

            const tempVec4$1 = new Vec4();
            const halton8 = [new Vec2(0.5, 1.0 / 3), new Vec2(0.25, 2.0 / 3), new Vec2(0.75, 1.0 / 9), new Vec2(0.125, 4.0 / 9), new Vec2(0.625, 7.0 / 9), new Vec2(0.375, 2.0 / 9), new Vec2(0.875, 5.0 / 9), new Vec2(0.0625, 8.0 / 9)];
            halton8.forEach(v => {
              v.x -= 0.5;
              v.y -= 0.5;
            });
            const SampleOffsets = {
              x2: [new Vec2(-4.0 / 16.0, -4.0 / 16.0), new Vec2(4.0 / 16.0, 4.0 / 16.0)],
              x3: [new Vec2(-2.0 / 3.0, -2.0 / 3.0), new Vec2(2 / 3, 0 / 3), new Vec2(0 / 3, 2 / 3)],
              x4: [new Vec2(-2 / 16, -6 / 16), new Vec2(6 / 16, -2 / 16), new Vec2(2 / 16, 6 / 16), new Vec2(-6 / 16, 2 / 16)],
              x5: [new Vec2(0, -1 / 2), new Vec2(1 / 2, 0), new Vec2(0, 1 / 2), new Vec2(-1 / 2, 0)],
              halton8
            };
            class TAAPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'TAAPass';
                this.effectName = 'pipeline/post-process/taa';
                this.outputNames = ['TAA_First', 'TAA_Second'];
                this.prevMatViewProj = new Mat4();
                this.taaTextureIndex = -2;
                this.samples = SampleOffsets.halton8;
                this.sampleIndex = -1;
                this.sampleOffset = new Vec2();
                this.forceRender = true;
                this.dirty = false;
                this.taaMaskMaterial = void 0;
                this.firstRender = true;
              }
              get setting() {
                return getSetting(TAA);
              }
              checkEnable(camera) {
                let enable = super.checkEnable(camera);
                if (disablePostProcessForDebugView()) {
                  enable = false;
                }
                return enable;
              }
              slotName(camera, index = 0) {
                if (!this.checkEnable(camera)) {
                  return this.lastPass.slotName(camera, index);
                }
                if (this.taaTextureIndex < 0) {
                  return super.slotName(camera, 0);
                }
                return super.slotName(camera, (this.taaTextureIndex + 1) % 2);
              }
              applyCameraJitter(camera) {
                camera._isProjDirty = true;
                camera.update(true);
                camera.matProj.m12 += this.sampleOffset.x;
                camera.matProj.m13 += this.sampleOffset.y;
                Mat4.invert(camera.matProjInv, camera.matProj);
                Mat4.multiply(camera.matViewProj, camera.matProj, camera.matView);
                Mat4.invert(camera.matViewProjInv, camera.matViewProj);
                camera.frustum.update(camera.matViewProj, camera.matViewProjInv);
              }
              updateSample() {
                if (this.dirty || this.forceRender) {
                  this.sampleIndex++;
                  this.taaTextureIndex++;
                  this.dirty = false;
                }
                let offset = this.samples[this.sampleIndex % this.samples.length];
                if (this.sampleIndex === -1) {
                  offset = Vec2.ZERO;
                }
                const setting = this.setting;
                this.sampleOffset.x = offset.x * setting.sampleScale / game.canvas.width;
                this.sampleOffset.y = offset.y * setting.sampleScale / game.canvas.height;
              }
              render(camera, ppl) {
                const cameraID = getCameraUniqueID(camera);
                passContext.clearFlag = ClearFlagBit.COLOR;
                Vec4.set(passContext.clearColor, 0, 0, 0, 1);
                const firstRender = this.firstRender;
                if (firstRender) {
                  this.prevMatViewProj.set(camera.matViewProj);
                  this.firstRender = false;
                }
                const setting = this.setting;
                passContext.updatePassViewPort();
                const width = passContext.passViewport.width;
                const height = passContext.passViewport.height;
                let material = this.material;
                const taaMask = camera.node.getComponent(TAAMask);
                let maskTex;
                if (taaMask && taaMask.enabledInHierarchy) {
                  maskTex = taaMask.mask;
                }
                if (maskTex) {
                  if (!this.taaMaskMaterial) {
                    const mi = new MaterialInstance({
                      parent: material
                    });
                    mi.recompileShaders({
                      USE_TAA_MASK: !EDITOR
                    });
                    this.taaMaskMaterial = mi;
                  }
                  material = this.taaMaskMaterial;
                  material.setProperty('motionMaskTex', maskTex);
                } else {
                  const black = builtinResMgr.get('black-texture');
                  maskTex = black;
                  material.setProperty('motionMaskTex', maskTex);
                }
                material.setProperty('taaParams1', tempVec4$1.set(this.sampleOffset.x, this.sampleOffset.y, setting.feedback, 0));
                material.setProperty('taaTextureSize', tempVec4$1.set(1 / width, 1 / height, 1 / width, 1 / height));
                material.setProperty('taaPrevViewProj', this.prevMatViewProj);
                this.prevMatViewProj.set(camera.matViewProj);
                passContext.material = material;
                const input0 = this.lastPass.slotName(camera, 0);
                let historyTexture = super.slotName(camera, this.taaTextureIndex % 2);
                if (firstRender) {
                  historyTexture = input0;
                }
                const slot0 = this.slotName(camera, 0);
                const depthTex = passContext.depthSlotName;
                const layoutName = `DeferredTAA${this.taaTextureIndex < 0 ? -1 : this.taaTextureIndex % 2}`;
                passContext.addRenderPass(layoutName, `CameraTAAPass${cameraID}`).setPassInput(input0, 'inputTexture').setPassInput(depthTex, 'depthTex').setPassInput(historyTexture, 'taaPrevTexture').addRasterView(slot0, Format.RGBA16F, true, ResourceResidency.PERSISTENT).blitScreen(0).version();
              }
            }

            var _dec$6, _dec2$5, _class$6, _class2$5, _initializer$5;
            let FSR = (_dec$6 = ccclass('cc.FSR'), _dec2$5 = type(CCFloat), _dec$6(_class$6 = disallowMultiple(_class$6 = (_class2$5 = class FSR extends PostProcessSetting {
              constructor(...args) {
                super(...args);
                this._sharpness = _initializer$5 && _initializer$5();
              }
              get sharpness() {
                return this._sharpness;
              }
              set sharpness(v) {
                this._sharpness = v;
              }
            }, (_initializer$5 = applyDecoratedInitializer(_class2$5.prototype, "_sharpness", [serializable], function () {
              return 0.8;
            }), _applyDecoratedDescriptor(_class2$5.prototype, "sharpness", [_dec2$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "sharpness"), _class2$5.prototype)), _class2$5)) || _class$6) || _class$6);

            const tempVec4 = new Vec4();
            class FSRPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'FSRPass';
                this.effectName = 'pipeline/post-process/fsr';
                this.outputNames = ['FSRColor'];
              }
              get setting() {
                return getSetting(FSR);
              }
              checkEnable(camera) {
                let enable = super.checkEnable(camera);
                return enable;
              }
              render(camera, ppl) {
                const cameraID = getCameraUniqueID(camera);
                passContext.material = this.material;
                passContext.clearBlack();
                passContext.updatePassViewPort(1 / passContext.shadingScale, 0);
                const inputWidth = Math.floor(passContext.passViewport.width * passContext.shadingScale);
                const inputHeight = Math.floor(passContext.passViewport.height * passContext.shadingScale);
                const outWidth = Math.floor(passContext.passViewport.width);
                const outHeight = Math.floor(passContext.passViewport.height);
                const setting = this.setting;
                this.material.setProperty('fsrParams', tempVec4.set(clamp(1.0 - setting.sharpness, 0.02, 0.98), 0, 0, 0));
                this.material.setProperty('texSize', tempVec4.set(inputWidth, inputHeight, outWidth, outHeight));
                const input0 = this.lastPass.slotName(camera, 0);
                const easu = `FSR_EASU${cameraID}`;
                passContext.addRenderPass('post-process', `CameraFSR_EASU_Pass${cameraID}`).setPassInput(input0, 'outputResultMap').addRasterView(easu, Format.RGBA8).blitScreen(0).version();
                const slot0 = this.slotName(camera, 0);
                passContext.addRenderPass('post-process', `CameraFSR_RCAS_Pass${cameraID}`).setPassInput(easu, 'outputResultMap').addRasterView(slot0, Format.RGBA8).blitScreen(1).version();
              }
            }

            var _dec$5, _dec2$4, _dec3$4, _dec4$3, _class$5, _class2$4, _initializer$4, _initializer2$4, _dec5$2, _dec6$2, _dec7, _dec8, _dec9, _class4, _class5, _initializer3$3, _initializer4$2;
            let BlitScreenMaterial = (_dec$5 = ccclass('cc.BlitScreenMaterial'), _dec2$4 = property(Material), _dec3$4 = property(Material), _dec4$3 = property({
              serializable: true
            }), _dec$5(_class$5 = (_class2$4 = class BlitScreenMaterial {
              constructor() {
                this._material = _initializer$4 && _initializer$4();
                this.enable = _initializer2$4 && _initializer2$4();
              }
              get material() {
                return this._material;
              }
              set material(v) {
                this._material = v;
              }
            }, (_initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "_material", [_dec2$4, serializable], null), _applyDecoratedDescriptor(_class2$4.prototype, "material", [_dec3$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "material"), _class2$4.prototype), _initializer2$4 = applyDecoratedInitializer(_class2$4.prototype, "enable", [_dec4$3], function () {
              return true;
            })), _class2$4)) || _class$5);
            let BlitScreen = (_dec5$2 = ccclass('cc.BlitScreen'), _dec6$2 = property(Material), _dec7 = property({
              type: Material,
              visible: false
            }), _dec8 = property(BlitScreenMaterial), _dec9 = property(BlitScreenMaterial), _dec5$2(_class4 = disallowMultiple(_class4 = (_class5 = class BlitScreen extends PostProcessSetting {
              constructor(...args) {
                super(...args);
                this._activeMaterials = _initializer3$3 && _initializer3$3();
                this._materials = _initializer4$2 && _initializer4$2();
              }
              get activeMaterials() {
                return this._activeMaterials;
              }
              set activeMaterials(v) {
                this._activeMaterials = v;
                for (let i = 0; i < this._materials.length; i++) {
                  for (let j = 0; j < v.length; j++) {
                    if (this._materials[i] && v[j]) {
                      var _this$_materials$i$ma;
                      if (((_this$_materials$i$ma = this._materials[i].material) === null || _this$_materials$i$ma === void 0 ? void 0 : _this$_materials$i$ma.uuid) === v[j].uuid) {
                        this._materials[i].material = v[j];
                      }
                    }
                  }
                }
              }
              get materials() {
                return this._materials;
              }
              set materials(v) {
                this._materials = v;
                this.updateActiveMaterials();
              }
              updateActiveMaterials() {
                const materials = this._materials;
                this._activeMaterials.length = 0;
                for (let i = 0; i < materials.length; i++) {
                  const m = materials[i];
                  if (m.enable && m.material) {
                    this._activeMaterials.push(m.material);
                  }
                }
              }
              onLoad() {
                this.updateActiveMaterials();
              }
            }, (_initializer3$3 = applyDecoratedInitializer(_class5.prototype, "_activeMaterials", [_dec6$2, serializable], function () {
              return [];
            }), _applyDecoratedDescriptor(_class5.prototype, "activeMaterials", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "activeMaterials"), _class5.prototype), _initializer4$2 = applyDecoratedInitializer(_class5.prototype, "_materials", [_dec8, serializable], function () {
              return [];
            }), _applyDecoratedDescriptor(_class5.prototype, "materials", [_dec9], Object.getOwnPropertyDescriptor(_class5.prototype, "materials"), _class5.prototype)), _class5)) || _class4) || _class4);

            const outputNames = ['BlitScreenColor0', 'BlitScreenColor1'];
            class BlitScreenPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'BlitScreenPass';
                this.effectName = 'pipeline/post-process/blit-screen';
                this.outputName = outputNames[0];
              }
              get setting() {
                return getSetting(BlitScreen);
              }
              slotName(camera, index = 0) {
                return this.outputName;
              }
              checkEnable(camera) {
                const enable = super.checkEnable(camera);
                const setting = this.setting;
                return enable && setting.activeMaterials.length > 0;
              }
              render(camera, ppl) {
                const cameraID = getCameraUniqueID(camera);
                passContext.clearBlack();
                let input0 = this.lastPass.slotName(camera, 0);
                let slotIdx = 0;
                const materials = this.setting.activeMaterials;
                for (let i = 0; i < materials.length; i++) {
                  const material = materials[i];
                  passContext.material = material;
                  const slotName = `${outputNames[slotIdx]}${cameraID}`;
                  slotIdx = ++slotIdx % 2;
                  passContext.updatePassViewPort().addRenderPass('post-process', `${this.name}${cameraID}${slotIdx}`).setPassInput(input0, 'inputTexture').addRasterView(slotName, Format.RGBA8).blitScreen(0).version();
                  input0 = slotName;
                }
                this.outputName = input0;
              }
            }

            class ShadowPass extends BasePass {
              constructor(...args) {
                super(...args);
                this.name = 'ShadowPass';
                this.mainLightShadows = [];
                this.spotLightShadows = [];
              }
              render(camera, ppl) {
                passContext.shadowPass = this;
                const cameraID = getCameraUniqueID(camera);
                const cameraName = `Camera${cameraID}`;
                const shadowInfo = buildShadowPasses(cameraName, camera, ppl);
                this.mainLightShadows = shadowInfo.mainLightShadowNames;
                this.spotLightShadows = shadowInfo.spotLightShadowNames;
              }
            }

            var _dec$4, _dec2$3, _dec3$3, _class$4, _class2$3, _initializer$3, _initializer2$3;
            let ColorGrading = (_dec$4 = ccclass('cc.ColorGrading'), _dec2$3 = type(CCFloat), _dec3$3 = type(Texture2D), _dec$4(_class$4 = disallowMultiple(_class$4 = (_class2$3 = class ColorGrading extends PostProcessSetting {
              constructor(...args) {
                super(...args);
                this._contribute = _initializer$3 && _initializer$3();
                this._colorGradingMap = _initializer2$3 && _initializer2$3();
              }
              set contribute(value) {
                this._contribute = value;
              }
              get contribute() {
                return this._contribute;
              }
              set colorGradingMap(val) {
                this._colorGradingMap = val;
              }
              get colorGradingMap() {
                return this._colorGradingMap;
              }
            }, (_initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "_contribute", [serializable], function () {
              return 0.0;
            }), _initializer2$3 = applyDecoratedInitializer(_class2$3.prototype, "_colorGradingMap", [serializable], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$3.prototype, "contribute", [_dec2$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "contribute"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "colorGradingMap", [_dec3$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "colorGradingMap"), _class2$3.prototype)), _class2$3)) || _class$4) || _class$4);

            var _dec$3, _dec2$2, _dec3$2, _dec4$2, _dec5$1, _dec6$1, _class$3, _class2$2, _initializer$2, _initializer2$2, _initializer3$2, _initializer4$1, _initializer5$1;
            let Bloom = (_dec$3 = ccclass('cc.Bloom'), _dec2$2 = type(CCBoolean), _dec3$2 = type(CCBoolean), _dec4$2 = type(CCFloat), _dec5$1 = type(CCInteger), _dec6$1 = type(CCFloat), _dec$3(_class$3 = disallowMultiple(_class$3 = (_class2$2 = class Bloom extends PostProcessSetting {
              constructor(...args) {
                super(...args);
                this._enableAlphaMask = _initializer$2 && _initializer$2();
                this._useHdrIlluminance = _initializer2$2 && _initializer2$2();
                this._threshold = _initializer3$2 && _initializer3$2();
                this._iterations = _initializer4$1 && _initializer4$1();
                this._intensity = _initializer5$1 && _initializer5$1();
              }
              set enableAlphaMask(value) {
                this._enableAlphaMask = value;
              }
              get enableAlphaMask() {
                return this._enableAlphaMask;
              }
              set useHdrIlluminance(value) {
                this._useHdrIlluminance = value;
              }
              get useHdrIlluminance() {
                return this._useHdrIlluminance;
              }
              set threshold(value) {
                this._threshold = value;
              }
              get threshold() {
                return this._threshold;
              }
              set iterations(value) {
                this._iterations = value;
              }
              get iterations() {
                return this._iterations;
              }
              set intensity(value) {
                this._intensity = value;
              }
              get intensity() {
                return this._intensity;
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "_enableAlphaMask", [serializable], function () {
              return false;
            }), _initializer2$2 = applyDecoratedInitializer(_class2$2.prototype, "_useHdrIlluminance", [serializable], function () {
              return false;
            }), _initializer3$2 = applyDecoratedInitializer(_class2$2.prototype, "_threshold", [serializable], function () {
              return 0.8;
            }), _initializer4$1 = applyDecoratedInitializer(_class2$2.prototype, "_iterations", [serializable], function () {
              return 3;
            }), _initializer5$1 = applyDecoratedInitializer(_class2$2.prototype, "_intensity", [serializable], function () {
              return 2.3;
            }), _applyDecoratedDescriptor(_class2$2.prototype, "enableAlphaMask", [_dec2$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "enableAlphaMask"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "useHdrIlluminance", [_dec3$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "useHdrIlluminance"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "threshold", [_dec4$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "threshold"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "iterations", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "iterations"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "intensity", [_dec6$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "intensity"), _class2$2.prototype)), _class2$2)) || _class$3) || _class$3);

            var _dec$2, _dec2$1, _dec3$1, _dec4$1, _dec5, _dec6, _class$2, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4, _initializer5;
            let HBAO = (_dec$2 = ccclass('cc.HBAO'), _dec2$1 = type(CCFloat), _dec3$1 = type(CCFloat), _dec4$1 = type(CCInteger), _dec5 = type(CCFloat), _dec6 = type(CCBoolean), _dec$2(_class$2 = disallowMultiple(_class$2 = (_class2$1 = class HBAO extends PostProcessSetting {
              constructor(...args) {
                super(...args);
                this._radiusScale = _initializer$1 && _initializer$1();
                this._angleBiasDegree = _initializer2$1 && _initializer2$1();
                this._blurSharpness = _initializer3$1 && _initializer3$1();
                this._aoSaturation = _initializer4 && _initializer4();
                this._needBlur = _initializer5 && _initializer5();
              }
              set radiusScale(value) {
                this._radiusScale = value;
              }
              get radiusScale() {
                return this._radiusScale;
              }
              set angleBiasDegree(value) {
                this._angleBiasDegree = value;
              }
              get angleBiasDegree() {
                return this._angleBiasDegree;
              }
              set blurSharpness(value) {
                this._blurSharpness = value;
              }
              get blurSharpness() {
                return this._blurSharpness;
              }
              set aoSaturation(value) {
                this._aoSaturation = value;
              }
              get aoSaturation() {
                return this._aoSaturation;
              }
              set needBlur(value) {
                this._needBlur = value;
              }
              get needBlur() {
                return this._needBlur;
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_radiusScale", [serializable], function () {
              return 1.0;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_angleBiasDegree", [serializable], function () {
              return 10.0;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "_blurSharpness", [serializable], function () {
              return 3;
            }), _initializer4 = applyDecoratedInitializer(_class2$1.prototype, "_aoSaturation", [serializable], function () {
              return 1.0;
            }), _initializer5 = applyDecoratedInitializer(_class2$1.prototype, "_needBlur", [serializable], function () {
              return true;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "radiusScale", [_dec2$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "radiusScale"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "angleBiasDegree", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "angleBiasDegree"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "blurSharpness", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "blurSharpness"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "aoSaturation", [_dec5], Object.getOwnPropertyDescriptor(_class2$1.prototype, "aoSaturation"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "needBlur", [_dec6], Object.getOwnPropertyDescriptor(_class2$1.prototype, "needBlur"), _class2$1.prototype)), _class2$1)) || _class$2) || _class$2);

            var _dec$1, _dec2, _dec3, _dec4, _class$1, _class2, _initializer, _initializer2, _initializer3;
            let DOF = (_dec$1 = ccclass('cc.DOF'), _dec2 = type(CCFloat), _dec3 = type(CCFloat), _dec4 = type(CCFloat), _dec$1(_class$1 = disallowMultiple(_class$1 = (_class2 = class DOF extends PostProcessSetting {
              constructor(...args) {
                super(...args);
                this._focusDistance = _initializer && _initializer();
                this._focusRange = _initializer2 && _initializer2();
                this._bokehRadius = _initializer3 && _initializer3();
              }
              set focusDistance(value) {
                this._focusDistance = value;
              }
              get focusDistance() {
                return this._focusDistance;
              }
              set focusRange(value) {
                this._focusRange = value;
              }
              get focusRange() {
                return this._focusRange;
              }
              set bokehRadius(value) {
                this._bokehRadius = value;
              }
              get bokehRadius() {
                return this._bokehRadius;
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "_focusDistance", [serializable], function () {
              return 0.0;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_focusRange", [serializable], function () {
              return 0.0;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_bokehRadius", [serializable], function () {
              return 1.0;
            }), _applyDecoratedDescriptor(_class2.prototype, "focusDistance", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "focusDistance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "focusRange", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "focusRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bokehRadius", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "bokehRadius"), _class2.prototype)), _class2)) || _class$1) || _class$1);

            const vec2 = new Vec2();
            class HBAOParams {
              get uvDepthToEyePosParams() {
                return this._uvDepthToEyePosParams;
              }
              get radiusParam() {
                return this._radiusParam;
              }
              get miscParam() {
                return this._miscParam;
              }
              get blurParam() {
                return this._blurParam;
              }
              set depthTexFullResolution(val) {
                this._depthTexFullResolution.set(val);
              }
              set depthTexResolution(val) {
                this._depthTexResolution.set(val);
              }
              set sceneScale(val) {
                this._sceneScale = val;
              }
              set cameraFov(val) {
                this._cameraFov = val;
              }
              set radiusScale(val) {
                this._radiusScale = val;
              }
              set angleBiasDegree(val) {
                this._angleBiasDegree = val;
              }
              set aoStrength(val) {
                this._aoStrength = val;
              }
              set blurSharpness(val) {
                this._blurSharpness = val;
              }
              set aoSaturation(val) {
                this._aoSaturation = val;
              }
              _init() {
                const width = 4;
                const height = 4;
                const pixelFormat = Texture2D.PixelFormat.RGBA8888;
                const arrayBuffer = new Uint8Array(width * height * 4);
                for (let i = 0; i < this._randomDirAndJitter.length; i++) {
                  arrayBuffer[i] = this._randomDirAndJitter[i];
                }
                const image = new ImageAsset({
                  width,
                  height,
                  _data: arrayBuffer,
                  _compressed: false,
                  format: pixelFormat
                });
                this.randomTexture = new Texture2D();
                this.randomTexture.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
                this.randomTexture.setMipFilter(Texture2D.Filter.NONE);
                this.randomTexture.setWrapMode(Texture2D.WrapMode.REPEAT, Texture2D.WrapMode.REPEAT, Texture2D.WrapMode.REPEAT);
                this.randomTexture.image = image;
              }
              update() {
                const HALF_KERNEL_RADIUS = 4;
                const INV_LN2 = 1.44269504;
                const SQRT_LN2 = 0.8325546;
                const gR = this._radiusScale * this._sceneScale;
                const gR2 = gR * gR;
                const gNegInvR2 = -1.0 / gR2;
                const gMaxRadiusPixels = 0.1 * Math.min(this._depthTexFullResolution.x, this._depthTexFullResolution.y);
                this._radiusParam.set(gR, gR2, gNegInvR2, gMaxRadiusPixels);
                const vec2 = new Vec2(this._depthTexResolution.y / this._depthTexResolution.x, 1.0);
                const gFocalLen = new Vec2(vec2.x / Math.tan(this._cameraFov * 0.5), vec2.y / Math.tan(this._cameraFov * 0.5));
                const gTanAngleBias = Math.tan(toRadian(this._angleBiasDegree));
                const gStrength = this._aoStrength;
                this._miscParam.set(gFocalLen.x, gFocalLen.y, gTanAngleBias, gStrength);
                const gUVToViewA = new Vec2(2.0 / gFocalLen.x, -2.0 / gFocalLen.y);
                const gUVToViewB = new Vec2(-1.0 / gFocalLen.x, 1.0 / gFocalLen.y);
                this._uvDepthToEyePosParams.set(gUVToViewA.x, gUVToViewA.y, gUVToViewB.x, gUVToViewB.y);
                const BlurSigma = (HALF_KERNEL_RADIUS + 1.0) * 0.5;
                const gBlurFallOff = INV_LN2 / (2.0 * BlurSigma * BlurSigma);
                const gBlurDepthThreshold = 2.0 * SQRT_LN2 * (this._sceneScale / this._blurSharpness);
                this._blurParam.set(gBlurFallOff, gBlurDepthThreshold, this._blurSharpness / 8.0, this._aoSaturation);
              }
              constructor() {
                this._uvDepthToEyePosParams = new Vec4();
                this._radiusParam = new Vec4();
                this._miscParam = new Vec4();
                this._blurParam = new Vec4();
                this._depthTexFullResolution = new Vec2(1024);
                this._depthTexResolution = new Vec2(1024);
                this._sceneScale = 1.0;
                this._cameraFov = toRadian(45.0);
                this._radiusScale = 1.0;
                this._angleBiasDegree = 10.0;
                this._aoStrength = 1.0;
                this._blurSharpness = 8;
                this._aoSaturation = 1.0;
                this._randomDirAndJitter = [238, 91, 87, 255, 251, 44, 119, 255, 247, 64, 250, 255, 232, 5, 225, 255, 253, 177, 140, 255, 250, 51, 84, 255, 243, 76, 97, 255, 252, 36, 232, 255, 235, 100, 24, 255, 252, 36, 158, 255, 254, 20, 142, 255, 245, 135, 124, 255, 251, 43, 121, 255, 253, 31, 145, 255, 235, 98, 160, 255, 240, 146, 198, 255];
                this._init();
                this.update();
              }
            }
            class HBAOPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.HBAO_PASS_INDEX = 0;
                this.HBAO_BLUR_X_PASS_INDEX = 1;
                this.HBAO_BLUR_Y_PASS_INDEX = 2;
                this.HBAO_COMBINED_PASS_INDEX = 3;
                this._hbaoParams = null;
                this._initialize = false;
                this.averageObjectSize = new Map();
                this.name = 'HBAOPass';
                this.effectName = 'pipeline/post-process/hbao';
                this.outputNames = ['hbaoRTName', 'hbaoBluredRTName'];
              }
              get setting() {
                return getSetting(HBAO);
              }
              checkEnable(camera) {
                let enable = super.checkEnable(camera);
                return enable;
              }
              onGlobalPipelineStateChanged() {
                passContext.material = this.material;
                const passes = passContext.material.passes;
                for (let i = 0; i < passes.length; i++) {
                  const pass = passes[i];
                  pass.beginChangeStatesSilently();
                  pass.tryCompile();
                  pass.endChangeStatesSilently();
                }
              }
              getSceneScale(camera) {
                let sceneScale = camera.nearClip;
                if (!this.averageObjectSize.has(camera.node.scene)) {
                  this._calculateObjectSize(camera.node.scene, camera.visibility);
                }
                if (this.averageObjectSize.has(camera.node.scene)) {
                  const objectSize = this.averageObjectSize.get(camera.node.scene);
                  sceneScale = objectSize * 0.1;
                }
                return sceneScale;
              }
              render(camera, ppl) {
                passContext.updatePassViewPort();
                const width = passContext.passViewport.width;
                const height = passContext.passViewport.height;
                if (!this._hbaoParams) {
                  this._hbaoParams = new HBAOParams();
                }
                const setting = this.setting;
                if (!this._initialize) {
                  passContext.material = this.material;
                  this.material.setProperty('RandomTex', this._hbaoParams.randomTexture, 0);
                }
                const aoStrength = 1.0;
                const sceneScale = this.getSceneScale(camera);
                this._hbaoParams.depthTexFullResolution = vec2.set(width, height);
                this._hbaoParams.depthTexResolution = vec2.set(width, height);
                this._hbaoParams.sceneScale = sceneScale;
                this._hbaoParams.cameraFov = camera.fov;
                this._hbaoParams.radiusScale = setting.radiusScale;
                this._hbaoParams.angleBiasDegree = setting.angleBiasDegree;
                this._hbaoParams.aoStrength = aoStrength;
                this._hbaoParams.blurSharpness = setting.blurSharpness;
                this._hbaoParams.aoSaturation = setting.aoSaturation;
                this._hbaoParams.update();
                const director = legacyCC.director;
                const root = director.root;
                if (root.debugView) {
                  if (root.debugView.isEnabled() && (root.debugView.singleMode !== DebugViewSingleType.NONE && root.debugView.singleMode !== DebugViewSingleType.AO || !root.debugView.isCompositeModeEnabled(DebugViewCompositeType.AO))) {
                    return;
                  }
                }
                const inputRT = this.lastPass.slotName(camera, 0);
                const inputDS = this.lastPass.slotName(camera, 1);
                const hbaoInfo = this._renderHBAOPass(camera, inputDS);
                let hbaoCombinedInputRTName = hbaoInfo.rtName;
                if (this.setting.needBlur) {
                  const haboBlurInfoX = this._renderHBAOBlurPass(camera, hbaoInfo.rtName, inputDS, false);
                  const haboBlurInfoY = this._renderHBAOBlurPass(camera, haboBlurInfoX.rtName, inputDS, true);
                  hbaoCombinedInputRTName = haboBlurInfoY.rtName;
                }
                this._renderHBAOCombinedPass(camera, hbaoCombinedInputRTName, inputRT);
              }
              _renderHBAOPass(camera, inputDS) {
                const cameraID = getCameraUniqueID(camera);
                const passIdx = this.HBAO_PASS_INDEX;
                this.material.setProperty('uvDepthToEyePosParams', this._hbaoParams.uvDepthToEyePosParams, passIdx);
                this.material.setProperty('radiusParam', this._hbaoParams.radiusParam, passIdx);
                this.material.setProperty('miscParam', this._hbaoParams.miscParam, passIdx);
                this.material.setProperty('randomTexSize', new Vec4(this._hbaoParams.randomTexture.width, this._hbaoParams.randomTexture.height, 1.0 / this._hbaoParams.randomTexture.width, 1.0 / this._hbaoParams.randomTexture.height), passIdx);
                this.material.setProperty('blurParam', this._hbaoParams.blurParam, passIdx);
                passContext.clearBlack();
                const outputRT = super.slotName(camera, 0);
                const layoutName = 'hbao-pass';
                const passName = `CameraHBAOPass${cameraID}`;
                passContext.addRenderPass(layoutName, passName).setPassInput(inputDS, 'DepthTex').addRasterView(outputRT, Format.RGBA8).blitScreen(passIdx).version();
                return {
                  rtName: outputRT,
                  dsName: inputDS
                };
              }
              _renderHBAOBlurPass(camera, inputRT, inputDS, isYPass) {
                const cameraID = getCameraUniqueID(camera);
                passContext.clearBlack();
                const passIdx = isYPass ? this.HBAO_BLUR_Y_PASS_INDEX : this.HBAO_BLUR_X_PASS_INDEX;
                passContext.material = this.material;
                this.material.setProperty('uvDepthToEyePosParams', this._hbaoParams.uvDepthToEyePosParams, passIdx);
                this.material.setProperty('radiusParam', this._hbaoParams.radiusParam, passIdx);
                this.material.setProperty('miscParam', this._hbaoParams.miscParam, passIdx);
                this.material.setProperty('randomTexSize', new Vec4(this._hbaoParams.randomTexture.width, this._hbaoParams.randomTexture.height, 1.0 / this._hbaoParams.randomTexture.width, 1.0 / this._hbaoParams.randomTexture.height), passIdx);
                this.material.setProperty('blurParam', this._hbaoParams.blurParam, passIdx);
                let outputRT = super.slotName(camera, 1);
                let layoutName = 'blurx-pass';
                let passName = `CameraHBAOBluredXPass${cameraID}`;
                if (isYPass) {
                  outputRT = super.slotName(camera, 0);
                  layoutName = 'blury-pass';
                  passName = `CameraHBAOBluredYPass${cameraID}`;
                }
                passContext.addRenderPass(layoutName, passName).setPassInput(inputRT, 'AOTexNearest').setPassInput(inputDS, 'DepthTex').addRasterView(outputRT, Format.RGBA8).blitScreen(passIdx).version();
                return {
                  rtName: outputRT,
                  dsName: inputDS
                };
              }
              _renderHBAOCombinedPass(camera, inputRT, outputRT) {
                const cameraID = getCameraUniqueID(camera);
                const passIdx = this.HBAO_COMBINED_PASS_INDEX;
                passContext.material = this.material;
                this.material.setProperty('uvDepthToEyePosParams', this._hbaoParams.uvDepthToEyePosParams, passIdx);
                this.material.setProperty('radiusParam', this._hbaoParams.radiusParam, passIdx);
                this.material.setProperty('miscParam', this._hbaoParams.miscParam, passIdx);
                this.material.setProperty('randomTexSize', new Vec4(this._hbaoParams.randomTexture.width, this._hbaoParams.randomTexture.height, 1.0 / this._hbaoParams.randomTexture.width, 1.0 / this._hbaoParams.randomTexture.height), passIdx);
                this.material.setProperty('blurParam', this._hbaoParams.blurParam, passIdx);
                passContext.clearFlag = ClearFlagBit.NONE;
                const layoutName = 'combine-pass';
                const passName = `CameraHBAOCombinedPass${cameraID}`;
                passContext.addRenderPass(layoutName, passName).setPassInput(inputRT, 'AOTexNearest').addRasterView(outputRT, Format.RGBA8).blitScreen(passIdx).version();
              }
              _calculateObjectSize(scene, visibility) {
                if (!scene || !scene.renderScene) {
                  return;
                }
                const sumSize = new Vec3(0);
                let modelCount = 0;
                const models = scene.renderScene.models;
                for (let i = 0; i < models.length; i++) {
                  const model = models[i];
                  if (!model.node || !model.worldBounds) continue;
                  if (model.node.layer & visibility) {
                    sumSize.add(model.worldBounds.halfExtents);
                    modelCount++;
                  }
                }
                if (modelCount > 0) {
                  sumSize.divide(v3(modelCount));
                  const scale = Math.min(sumSize.x, sumSize.y, sumSize.z);
                  this.averageObjectSize.set(scene, scale);
                }
              }
              slotName(camera, index = 0) {
                return this.lastPass.slotName(camera, index);
              }
            }

            class ColorGradingPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'ColorGradingPass';
                this.effectName = 'pipeline/post-process/color-grading';
                this.outputNames = ['ColorGrading'];
              }
              get setting() {
                return getSetting(ColorGrading);
              }
              checkEnable(camera) {
                let enable = super.checkEnable(camera);
                if (disablePostProcessForDebugView()) {
                  enable = false;
                }
                return enable;
              }
              render(camera, ppl) {
                const cameraID = getCameraUniqueID(camera);
                passContext.clearFlag = ClearFlagBit.COLOR;
                Vec4.set(passContext.clearColor, 0, 0, 0, 1);
                passContext.material = this.material;
                const setting = this.setting;
                this.material.setProperty('colorGradingMap', setting.colorGradingMap);
                this.material.setProperty('contribute', setting.contribute);
                const textureSize = setting.colorGradingMap ? new Vec2(setting.colorGradingMap.width, setting.colorGradingMap.height) : new Vec2(1.0, 1.0);
                this.material.setProperty('lutTextureSize', textureSize);
                const input = this.lastPass.slotName(camera, 0);
                const slot = this.slotName(camera, 0);
                const isSquareMap = setting.colorGradingMap && setting.colorGradingMap.width === setting.colorGradingMap.height;
                const passName = isSquareMap ? 'color-grading-8x8' : 'color-grading-nx1';
                const passIndx = isSquareMap ? 1 : 0;
                passContext.updatePassViewPort().addRenderPass(passName, `color-grading${cameraID}`).setPassInput(input, 'sceneColorMap').addRasterView(slot, Format.RGBA8).blitScreen(passIndx).version();
              }
            }

            const MAX_BLOOM_FILTER_PASS_NUM = 6;
            const BLOOM_DOWNSAMPLEPASS_INDEX = 1;
            const BLOOM_UPSAMPLEPASS_INDEX = BLOOM_DOWNSAMPLEPASS_INDEX + MAX_BLOOM_FILTER_PASS_NUM;
            const BLOOM_COMBINEPASS_INDEX = BLOOM_UPSAMPLEPASS_INDEX + MAX_BLOOM_FILTER_PASS_NUM;
            class BloomPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'BloomPass';
                this.effectName = 'pipeline/post-process/bloom';
                this.outputNames = ['BloomColor'];
                this._hdrInputName = '';
              }
              get setting() {
                return getSetting(Bloom);
              }
              checkEnable(camera) {
                let enable = super.checkEnable(camera);
                if (disablePostProcessForDebugView()) {
                  enable = false;
                }
                return enable;
              }
              set hdrInputName(name) {
                this._hdrInputName = name;
              }
              render(camera, ppl) {
                const cameraID = getCameraUniqueID(camera);
                const cameraName = `Camera${cameraID}`;
                const passViewport = passContext.passViewport;
                passContext.clearBlack();
                passContext.material = this.material;
                const setting = this.setting;
                const input = this.lastPass.slotName(camera, 0);
                const output = `BLOOM_PREFILTER_COLOR${cameraID}`;
                let shadingScale = 1 / 2;
                const enableAlphaMask = setting.enableAlphaMask;
                const useHDRIntensity = setting.useHdrIlluminance;
                passContext.material.setProperty('texSize', new Vec4(useHDRIntensity, 0, setting.threshold, enableAlphaMask), 0);
                passContext.updatePassViewPort(shadingScale).addRenderPass('bloom-prefilter', `bloom-prefilter${cameraID}`).setPassInput(input, 'outputResultMap').setPassInput(this._hdrInputName, 'hdrInputMap').addRasterView(output, Format.RGBA8).blitScreen(0).version();
                for (let i = 0; i < setting.iterations; ++i) {
                  const texSize = new Vec4(passViewport.width, passViewport.height, 0, 0);
                  const bloomPassDownSampleRTName = `dsBloomPassDownSampleColor${cameraName}${i}`;
                  const downSamplerInput = i === 0 ? output : `dsBloomPassDownSampleColor${cameraName}${i - 1}`;
                  passContext.material.setProperty('texSize', texSize, BLOOM_DOWNSAMPLEPASS_INDEX + i);
                  shadingScale /= 2;
                  passContext.updatePassViewPort(shadingScale).addRenderPass(`bloom-upsample${i}`, `bloom-upsample${i}${cameraID}`).setPassInput(downSamplerInput, 'bloomTexture').addRasterView(bloomPassDownSampleRTName, Format.RGBA8).blitScreen(BLOOM_DOWNSAMPLEPASS_INDEX + i).version();
                }
                for (let i = 0; i < setting.iterations; ++i) {
                  const texSize = new Vec4(passViewport.width, passViewport.height, 0, 0);
                  const bloomPassUpSampleRTName = `dsBloomPassUpSampleColor${cameraName}${setting.iterations - 1 - i}`;
                  const upSamplerInput = i === 0 ? `dsBloomPassDownSampleColor${cameraName}${setting.iterations - 1}` : `dsBloomPassUpSampleColor${cameraName}${setting.iterations - i}`;
                  passContext.material.setProperty('texSize', texSize, BLOOM_UPSAMPLEPASS_INDEX + i);
                  shadingScale *= 2;
                  passContext.updatePassViewPort(shadingScale).addRenderPass(`bloom-downsample${i}`, `bloom-downsample${i}${cameraID}`).setPassInput(upSamplerInput, 'bloomTexture').addRasterView(bloomPassUpSampleRTName, Format.RGBA8).blitScreen(BLOOM_UPSAMPLEPASS_INDEX + i).version();
                }
                passContext.material.setProperty('texSize', new Vec4(0, 0, 0, setting.intensity), BLOOM_COMBINEPASS_INDEX);
                passContext.updatePassViewPort().addRenderPass(`bloom-combine`, `bloom-combine${cameraID}`).setPassInput(input, 'outputResultMap').setPassInput(`dsBloomPassUpSampleColor${cameraName}${0}`, 'bloomTexture').addRasterView(this.slotName(camera, 0), Format.RGBA8).blitScreen(BLOOM_COMBINEPASS_INDEX).version();
              }
            }

            var _dec, _class;
            let FXAA = (_dec = ccclass('cc.FXAA'), _dec(_class = disallowMultiple(_class = class FXAA extends PostProcessSetting {}) || _class) || _class);

            class FxaaPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'FxaaPass';
                this.effectName = 'pipeline/post-process/fxaa-hq';
                this.outputNames = ['FxaaColor'];
              }
              get setting() {
                return getSetting(FXAA);
              }
              render(camera, ppl) {
                const cameraID = getCameraUniqueID(camera);
                passContext.clearBlack();
                passContext.material = this.material;
                this.setting;
                const input = this.lastPass.slotName(camera, 0);
                const output = this.slotName(camera);
                passContext.updatePassViewPort();
                const width = passContext.passViewport.width;
                const height = passContext.passViewport.height;
                passContext.material.setProperty('texSize', new Vec4(width, height, 1.0 / width, 1.0 / height), 0);
                passContext.addRenderPass('fxaa', `fxaa${cameraID}`).setPassInput(input, 'sceneColorMap').addRasterView(output, Format.RGBA8).blitScreen(0).version();
              }
            }

            class FloatOutputProcessPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'FloatOutputProcessPass';
                this.effectName = 'pipeline/float-output-process';
                this.outputNames = ['FloatOutputProcess'];
                this.hdrInputName = '';
                this.enableInAllEditorCamera = true;
                this.enable = true;
              }
              checkEnable(camera) {
                const ppl = legacyCC.director.root.pipeline;
                return ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
              }
              getHDRInputName() {
                return this.hdrInputName;
              }
              onGlobalPipelineStateChanged() {
                passContext.material = this.material;
                const passes = passContext.material.passes;
                for (let i = 0; i < passes.length; i++) {
                  const pass = passes[i];
                  pass.beginChangeStatesSilently();
                  pass.tryCompile();
                  pass.endChangeStatesSilently();
                }
              }
              needDepthInput(ppl) {
                return ppl.pipelineSceneData.fog.type !== FOG_TYPE_NONE;
              }
              render(camera, ppl) {
                const cameraID = getCameraUniqueID(camera);
                passContext.material = this.material;
                let copyDS = '';
                let passIndx = 0;
                const inputDS = passContext.depthSlotName;
                if (this.needDepthInput(ppl)) {
                  copyDS = 'floatOutputProcessCopyDS';
                  const copyInputDSPassLayoutName = 'copy-pass';
                  const copyInputDSPass = `floatOutputProcessCopyDS-pass${cameraID}`;
                  passContext.updatePassViewPort().addRenderPass(copyInputDSPassLayoutName, copyInputDSPass).setClearFlag(ClearFlagBit.COLOR).setClearColor(1.0, 0, 0, 0).setPassInput(inputDS, 'depthRaw').addRasterView(copyDS, Format.RGBA8).blitScreen(passIndx).version();
                }
                passIndx = 1;
                this.hdrInputName = this.lastPass.slotName(camera, 0);
                const output = this.slotName(camera, 0);
                const layoutName = 'tone-mapping';
                const passName = `tone-mapping${cameraID}`;
                passContext.clearFlag = ClearFlagBit.COLOR;
                Vec4.set(passContext.clearColor, camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w);
                passContext.updatePassViewPort().addRenderPass(layoutName, passName).setPassInput(this.hdrInputName, 'u_texSampler').setPassInput(copyDS, 'DepthTex').addRasterView(output, Format.RGBA8).blitScreen(passIndx).version();
              }
            }

            class ForwardTransparencyPass extends BasePass {
              constructor(...args) {
                super(...args);
                this.name = 'ForwardTransparencyPass';
                this.enableInAllEditorCamera = true;
                this.depthBufferShadingScale = 1;
              }
              slotName(camera, index = 0) {
                return this.lastPass.slotName(camera, index);
              }
              render(camera, ppl) {
                passContext.clearFlag = ClearFlagBit.NONE;
                const output = this.lastPass.slotName(camera, 0);
                const outputDS = passContext.depthSlotName;
                const cameraID = getCameraUniqueID(camera);
                const isOffScreen = true;
                passContext.updatePassViewPort().addRenderPass('default', `${this.name}_${cameraID}`).addRasterView(output, getRTFormatBeforeToneMapping(ppl), isOffScreen).addRasterView(outputDS, Format.DEPTH_STENCIL, isOffScreen).version();
                const pass = passContext.pass;
                const shadowPass = passContext.shadowPass;
                if (shadowPass) {
                  for (const dirShadowName of shadowPass.mainLightShadows) {
                    if (ppl.containsResource(dirShadowName)) {
                      pass.addTexture(dirShadowName, 'cc_shadowMap', getShadowMapSampler());
                    }
                  }
                  for (const spotShadowName of shadowPass.spotLightShadows) {
                    if (ppl.containsResource(spotShadowName)) {
                      pass.addTexture(spotShadowName, 'cc_spotShadowMap', getShadowMapSampler());
                    }
                  }
                }
                pass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), SceneFlags.UI | SceneFlags.TRANSPARENT_OBJECT | SceneFlags.GEOMETRY);
              }
            }

            class ForwardTransparencySimplePass extends BasePass {
              constructor(...args) {
                super(...args);
                this.name = 'ForwardTransparencySimplePass';
              }
              slotName(camera, index = 0) {
                return passContext.forwardPass.slotName(camera, index);
              }
              render(camera, ppl) {
                const pass = passContext.pass;
                pass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), SceneFlags.UI | SceneFlags.TRANSPARENT_OBJECT | SceneFlags.GEOMETRY);
              }
            }

            const COPY_INPUT_DS_PASS_INDEX = 0;
            const SSSS_BLUR_X_PASS_INDEX = 1;
            const SSSS_BLUR_Y_PASS_INDEX = 2;
            function hasSkinObject(ppl) {
              const sceneData = ppl.pipelineSceneData;
              return sceneData.skin.enabled && sceneData.skinMaterialModel !== null;
            }
            const _varianceArray = [0.0484, 0.187, 0.567, 1.99, 7.41];
            const _strengthParameterArray = [0.100, 0.118, 0.113, 0.358, 0.078];
            const _vec3Temp = new Vec3();
            const _vec3Temp2 = new Vec3();
            const _vec4Temp = new Vec4();
            const _vec4Temp2 = new Vec4();
            const EXPONENT = 2.0;
            const I_SAMPLES_COUNT = 25;
            class SSSSBlurData {
              get ssssStrength() {
                return this._v3SSSSStrength;
              }
              set ssssStrength(val) {
                this._v3SSSSStrength = val;
                this._updateSampleCount();
              }
              get ssssFallOff() {
                return this._v3SSSSFallOff;
              }
              set ssssFallOff(val) {
                this._v3SSSSFallOff = val;
                this._updateSampleCount();
              }
              get kernel() {
                return this._kernel;
              }
              _gaussian(out, variance, r) {
                const xx = r / (0.001 + this._v3SSSSFallOff.x);
                out.x = Math.exp(-(xx * xx) / (2.0 * variance)) / (2.0 * 3.14 * variance);
                const yy = r / (0.001 + this._v3SSSSFallOff.y);
                out.y = Math.exp(-(yy * yy) / (2.0 * variance)) / (2.0 * 3.14 * variance);
                const zz = r / (0.001 + this._v3SSSSFallOff.z);
                out.z = Math.exp(-(zz * zz) / (2.0 * variance)) / (2.0 * 3.14 * variance);
              }
              _profile(out, val) {
                for (let i = 0; i < 5; i++) {
                  this._gaussian(_vec3Temp2, _varianceArray[i], val);
                  _vec3Temp2.multiplyScalar(_strengthParameterArray[i]);
                  out.add(_vec3Temp2);
                }
              }
              _updateSampleCount() {
                const strength = this._v3SSSSStrength;
                const nSamples = I_SAMPLES_COUNT;
                const range = 3.0 ;
                const step = 2.0 * range / (nSamples - 1);
                for (let i = 0; i < nSamples; i++) {
                  const o = -range + i * step;
                  const sign = o < 0.0 ? -1.0 : 1.0;
                  this._kernel[i].w = range * sign * Math.abs(o ** EXPONENT) / range ** EXPONENT;
                }
                for (let i = 0; i < nSamples; i++) {
                  const w0 = i > 0 ? Math.abs(this._kernel[i].w - this._kernel[i - 1].w) : 0.0;
                  const w1 = i < nSamples - 1 ? Math.abs(this._kernel[i].w - this._kernel[i + 1].w) : 0.0;
                  const area = (w0 + w1) / 2.0;
                  _vec3Temp.set(0);
                  this._profile(_vec3Temp, this._kernel[i].w);
                  _vec3Temp.multiplyScalar(area);
                  this._kernel[i].x = _vec3Temp.x;
                  this._kernel[i].y = _vec3Temp.y;
                  this._kernel[i].z = _vec3Temp.z;
                }
                const remainder = nSamples % 2;
                _vec4Temp.set(this._kernel[(nSamples - remainder) / 2]);
                for (let i = (nSamples - remainder) / 2; i > 0; i--) {
                  _vec4Temp2.set(this._kernel[i - 1]);
                  this._kernel[i].set(_vec4Temp2);
                }
                this._kernel[0].set(_vec4Temp);
                _vec3Temp.set(0.0);
                for (let i = 0; i < nSamples; i++) {
                  _vec3Temp.add3f(this._kernel[i].x, this._kernel[i].y, this._kernel[i].z);
                }
                for (let i = 0; i < nSamples; i++) {
                  this._kernel[i].x /= _vec3Temp.x;
                  this._kernel[i].y /= _vec3Temp.y;
                  this._kernel[i].z /= _vec3Temp.z;
                }
                this._kernel[0].x = (1.0 - strength.x) * 1.0 + strength.x * this._kernel[0].x;
                this._kernel[0].y = (1.0 - strength.y) * 1.0 + strength.y * this._kernel[0].y;
                this._kernel[0].z = (1.0 - strength.z) * 1.0 + strength.z * this._kernel[0].z;
                for (let i = 1; i < nSamples; i++) {
                  this._kernel[i].x *= strength.x;
                  this._kernel[i].y *= strength.y;
                  this._kernel[i].z *= strength.z;
                }
              }
              _init() {
                for (let i = 0; i < I_SAMPLES_COUNT; i++) {
                  this._kernel[i] = new Vec4();
                }
                this._updateSampleCount();
              }
              constructor() {
                this._v3SSSSStrength = new Vec3(0.48, 0.41, 0.28);
                this._v3SSSSFallOff = new Vec3(1.0, 0.37, 0.3);
                this._kernel = [];
                this._init();
              }
            }
            class SkinPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'SkinPass';
                this.effectName = 'pipeline/ssss-blur';
                this.outputNames = ['SSSSBlur', 'SSSSBlurDS'];
                this.ssssBlurData = new SSSSBlurData();
                this._activate = false;
                this.enableInAllEditorCamera = true;
              }
              checkEnable(camera) {
                const ppl = legacyCC.director.root.pipeline;
                let enable = hasSkinObject(ppl);
                if (enable) {
                  if (!this._activate) {
                    if (!ppl.getMacroBool('CC_USE_FLOAT_OUTPUT')) {
                      warnID(16303);
                    }
                    if (!ppl.pipelineSceneData.standardSkinModel) {
                      warnID(16304);
                    }
                    this._activate = true;
                  }
                  enable = forceEnableFloatOutput(ppl);
                }
                return enable;
              }
              render(camera, ppl) {
                var _this$lastPass;
                passContext.material = this.material;
                const inputRT = (_this$lastPass = this.lastPass) === null || _this$lastPass === void 0 ? void 0 : _this$lastPass.slotName(camera, 0);
                const inputDS = passContext.depthSlotName;
                this._buildSSSSBlurPass(camera, ppl, inputRT, inputDS);
                this._buildSpecularPass(camera, ppl, inputRT, inputDS);
              }
              _buildSSSSBlurPass(camera, ppl, inputRT, inputDS) {
                const cameraID = getCameraUniqueID(camera);
                const pipelineSceneData = ppl.pipelineSceneData;
                let halfExtents = new Vec3(0.2, 0.2, 0.2);
                const standardSkinModel = pipelineSceneData.standardSkinModel;
                const skinMaterialModel = pipelineSceneData.skinMaterialModel;
                if (standardSkinModel && standardSkinModel.worldBounds) {
                  halfExtents = standardSkinModel.worldBounds.halfExtents;
                } else if (skinMaterialModel && skinMaterialModel.worldBounds) {
                  halfExtents = skinMaterialModel.worldBounds.halfExtents;
                }
                const boundingBox = Math.min(halfExtents.x, halfExtents.y, halfExtents.z) * 2.0;
                const skin = pipelineSceneData.skin;
                const ssssBlurRTName = super.slotName(camera, 0);
                const ssssBlurDSName = super.slotName(camera, 1);
                const copyInputDSPassLayoutName = 'copy-pass';
                const copyInputDSPass = `copyDS-pass${cameraID}`;
                let passIdx = COPY_INPUT_DS_PASS_INDEX;
                passContext.updatePassViewPort().addRenderPass(copyInputDSPassLayoutName, copyInputDSPass).setClearFlag(ClearFlagBit.COLOR).setClearColor(1.0, 0, 0, 0).setPassInput(inputDS, 'depthRaw').addRasterView(ssssBlurDSName, Format.RGBA8).blitScreen(passIdx).version();
                passIdx = SSSS_BLUR_X_PASS_INDEX;
                const ssssblurXPassLayoutName = 'ssss-blurX';
                const ssssblurXPassPassName = `ssss-blurX${cameraID}`;
                this.material.setProperty('blurInfo', new Vec4(camera.fov, skin.blurRadius, boundingBox, skin.sssIntensity), passIdx);
                this.material.setProperty('kernel', this.ssssBlurData.kernel, passIdx);
                passContext.updatePassViewPort().addRenderPass(ssssblurXPassLayoutName, ssssblurXPassPassName).setPassInput(inputRT, 'colorTex').setPassInput(ssssBlurDSName, 'depthTex').setClearFlag(ClearFlagBit.COLOR).setClearColor(0, 0, 0, 1).addRasterView(ssssBlurRTName, getRTFormatBeforeToneMapping(ppl)).blitScreen(passIdx).version();
                passIdx = SSSS_BLUR_Y_PASS_INDEX;
                const ssssblurYPassLayoutName = 'ssss-blurY';
                const ssssblurYPassPassName = `ssss-blurY${cameraID}`;
                this.material.setProperty('blurInfo', new Vec4(camera.fov, skin.blurRadius, boundingBox, skin.sssIntensity), passIdx);
                this.material.setProperty('kernel', this.ssssBlurData.kernel, passIdx);
                passContext.updatePassViewPort().addRenderPass(ssssblurYPassLayoutName, ssssblurYPassPassName).setPassInput(ssssBlurRTName, 'colorTex').setPassInput(ssssBlurDSName, 'depthTex').setClearFlag(ClearFlagBit.NONE).setClearColor(0, 0, 0, 1).addRasterView(inputRT, getRTFormatBeforeToneMapping(ppl)).blitScreen(passIdx).version();
              }
              _buildSpecularPass(camera, ppl, inputRT, inputDS) {
                const cameraID = getCameraUniqueID(camera);
                const layoutName = 'specular-pass';
                const passName = `specular-pass${cameraID}`;
                passContext.updatePassViewPort().addRenderPass(layoutName, passName).setClearFlag(ClearFlagBit.NONE).setClearColor(0, 0, 0, 1).addRasterView(inputRT, getRTFormatBeforeToneMapping(ppl), true).setClearFlag(ClearFlagBit.NONE).setClearDepthColor(camera.clearDepth, camera.clearStencil, 0, 1).addRasterView(inputDS, Format.DEPTH_STENCIL, true).version();
                const pass = passContext.pass;
                const shadowPass = passContext.shadowPass;
                if (shadowPass) {
                  for (const dirShadowName of shadowPass.mainLightShadows) {
                    if (ppl.containsResource(dirShadowName)) {
                      pass.addTexture(dirShadowName, 'cc_shadowMap', getShadowMapSampler());
                    }
                  }
                  for (const spotShadowName of shadowPass.spotLightShadows) {
                    if (ppl.containsResource(spotShadowName)) {
                      pass.addTexture(spotShadowName, 'cc_spotShadowMap', getShadowMapSampler());
                    }
                  }
                }
                pass.addQueue(QueueHint.RENDER_OPAQUE, 'default').addSceneOfCamera(camera, new LightInfo(), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.CUTOUT_OBJECT);
                pass.addQueue(QueueHint.RENDER_TRANSPARENT, 'forward-add').addSceneOfCamera(camera, new LightInfo(), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.CUTOUT_OBJECT);
              }
              slotName(camera, index = 0) {
                return this.lastPass.slotName(camera, index);
              }
            }

            class PostFinalPass extends BasePass {
              constructor(...args) {
                super(...args);
                this.name = 'PostFinalPass';
                this.outputNames = ['PostFinalColor'];
                this.effectName = 'pipeline/post-process/post-final';
                this.enableInAllEditorCamera = true;
              }
              render(camera, ppl) {
                if (!this.lastPass) {
                  return;
                }
                passContext.clearFlag = camera.clearFlag & ClearFlagBit.COLOR;
                Vec4.set(passContext.clearColor, camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w);
                passContext.material = this.material;
                const cameraID = getCameraUniqueID(camera);
                const input0 = this.lastPass.slotName(camera, 0);
                const slot0 = this.slotName(camera, 0);
                const isOffScreen = false;
                const fb = camera.window.framebuffer;
                const ct = fb && fb.colorTextures[0];
                const format = ct ? ct.format : Format.RGBA8;
                const shadingScale = passContext.shadingScale;
                passContext.updatePassViewPort(1 / shadingScale, 1 / shadingScale).addRenderPass('post-final', `${this.name}${cameraID}`).setPassInput(input0, 'inputTexture').addRasterView(slot0, format, isOffScreen).blitScreen(0);
                this.renderProfiler(camera);
              }
            }

            class DofPass extends SettingPass {
              constructor(...args) {
                super(...args);
                this.name = 'DOFPass';
                this.effectName = 'pipeline/post-process/dof';
                this.outputNames = ['DOFColor'];
              }
              get setting() {
                return getSetting(DOF);
              }
              checkEnable(camera) {
                let enable = super.checkEnable(camera);
                if (disablePostProcessForDebugView()) {
                  enable = false;
                }
                return enable;
              }
              render(camera, ppl) {
                const cameraID = getCameraUniqueID(camera);
                passContext.clearFlag = ClearFlagBit.COLOR;
                Vec4.set(passContext.clearColor, 0, 0, 0, 1);
                const passViewport = passContext.passViewport;
                passContext.material = this.material;
                const setting = this.setting;
                const width = passViewport.width;
                const height = passViewport.height;
                const cocParams = new Vec4(setting.focusDistance, setting.focusRange, setting.bokehRadius, 0.0);
                const mainTexTexelSize = new Vec4(1.0 / width, 1.0 / height, width, height);
                this.material.setProperty('cocParams', cocParams);
                this.material.setProperty('mainTexTexelSize', mainTexTexelSize);
                const slot = this.slotName(camera, 0);
                const colorTex = this.lastPass.slotName(camera, 0);
                const depthTex = this.lastPass.slotName(camera, 1);
                const outputCOC = `DOF_CIRCLE_OF_CONFUSION${cameraID}`;
                passContext.updatePassViewPort().addRenderPass('dof-coc', `dof-coc${cameraID}`).setPassInput(depthTex, 'DepthTex').addRasterView(outputCOC, Format.RGBA8).blitScreen(0).version();
                const outputPrefilter = `DOF_PREFILTER${cameraID}`;
                passContext.updatePassViewPort(0.5).addRenderPass('dof-prefilter', `dof-prefilter${cameraID}`).setPassInput(colorTex, 'colorTex').setPassInput(outputCOC, 'cocTex').addRasterView(outputPrefilter, Format.RGBA8).blitScreen(1).version();
                const outputBokeh = `DOF_BOKEH${cameraID}`;
                passContext.updatePassViewPort(0.5).addRenderPass('dof-bokeh', `dof-bokeh${cameraID}`).setPassInput(outputPrefilter, 'prefilterTex').addRasterView(outputBokeh, Format.RGBA8).blitScreen(2).version();
                const outputFilter = `DOF_FILTER${cameraID}`;
                passContext.updatePassViewPort(0.5).addRenderPass('dof-filter', `dof-filter${cameraID}`).setPassInput(outputBokeh, 'bokehTex').addRasterView(outputFilter, Format.RGBA8).blitScreen(3).version();
                passContext.updatePassViewPort().addRenderPass('dof-combine', `dof-combine${cameraID}`).setPassInput(outputFilter, 'filterTex').setPassInput(outputCOC, 'cocTex').setPassInput(colorTex, 'colorTex').addRasterView(slot, Format.RGBA8).blitScreen(4).version();
              }
            }

            class PostProcessBuilder {
              constructor() {
                this.pipelines = new Map();
                this.init();
              }
              onGlobalPipelineStateChanged() {
                const passes = this.pipelines.get('forward');
                if (passes !== undefined) {
                  for (let i = 0; i < passes.length; i++) {
                    const pass = passes[i];
                    if (typeof pass.onGlobalPipelineStateChanged === 'function') {
                      pass.onGlobalPipelineStateChanged();
                    }
                  }
                }
              }
              init() {
                const forward = new ForwardPass();
                const forwardFinal = new ForwardFinalPass();
                const shadowPass = new ShadowPass();
                this.addPass(shadowPass, 'default');
                this.addPass(forward, 'default');
                this.addPass(new ForwardTransparencySimplePass(), 'default');
                this.addPass(forwardFinal, 'default');
                this.addPass(shadowPass);
                this.addPass(forward);
                this.addPass(new SkinPass());
                this.addPass(new HBAOPass());
                this.addPass(new FloatOutputProcessPass());
                this.addPass(new ForwardTransparencyPass());
                this.addPass(new DofPass());
                this.addPass(new TAAPass());
                this.addPass(new FxaaPass());
                this.addPass(new ColorGradingPass());
                this.addPass(new BlitScreenPass());
                this.addPass(new BloomPass());
                this.addPass(new FSRPass());
                this.addPass(new PostFinalPass());
              }
              getPass(passClass, pipelineName = 'forward') {
                const pp = this.pipelines.get(pipelineName);
                return pp && pp.find(p => p instanceof passClass);
              }
              addPass(pass, pipelineName = 'forward') {
                let pp = this.pipelines.get(pipelineName);
                if (!pp) {
                  pp = [];
                  this.pipelines.set(pipelineName, pp);
                }
                const oldIdx = pp.findIndex(p => p.name === pass.name);
                if (oldIdx !== -1) {
                  pp.splice(oldIdx, 1);
                }
                pp.push(pass);
              }
              insertPass(pass, passClass, pipelineName = 'forward') {
                const pp = this.pipelines.get(pipelineName);
                if (pp) {
                  const oldIdx = pp.findIndex(p => p.name === pass.name);
                  if (oldIdx !== -1) {
                    pp.splice(oldIdx, 1);
                  }
                  const idx = pp.findIndex(p => p instanceof passClass);
                  if (idx !== -1) {
                    pp.splice(idx + 1, 0, pass);
                  }
                }
              }
              initEditor() {
                director.root.cameraList.forEach(cam => {
                  if (cam.name === 'Editor Camera') {
                    cam.usePostProcess = cam.projectionType === CameraProjection.PERSPECTIVE;
                  }
                });
              }
              applyPreviewCamera(camera) {
                if (!camera.node.parent) return;
                const camComp = camera.node.parent.getComponent(Camera);
                const oriCamera = camComp && camComp.camera;
                if (oriCamera) {
                  camera.postProcess = oriCamera.postProcess;
                  camera.usePostProcess = oriCamera.usePostProcess;
                }
              }
              resortEditorCameras(cameras) {
                const newCameras = [];
                for (let i = 0; i < cameras.length; i++) {
                  const c = cameras[i];
                  if (c.name === 'Editor Camera' || c.name === 'Editor UIGizmoCamera' || c.name === 'Scene Gizmo Camera') {
                    newCameras.push(c);
                  }
                }
                for (let i = 0; i < cameras.length; i++) {
                  const c = cameras[i];
                  if (newCameras.indexOf(c) === -1) {
                    newCameras.push(c);
                  }
                }
                return newCameras;
              }
              setup(cameras, ppl) {
                passContext.ppl = ppl;
                passContext.shadowPass = undefined;
                passContext.forwardPass = undefined;
                passContext.depthSlotName = '';
                passContext.isFinalCamera = false;
                passContext.isFinalPass = false;
                let globalPP;
                for (let i = 0; i < PostProcess.all.length; i++) {
                  const pp = PostProcess.all[i];
                  if (pp.global) {
                    globalPP = pp;
                  }
                }
                for (let i = 0; i < cameras.length; i++) {
                  const camera = cameras[i];
                  if (!camera.scene) {
                    continue;
                  }
                  ppl.update(camera);
                  if (i === cameras.length - 1) {
                    passContext.isFinalCamera = true;
                  }
                  ppl.addBuiltinReflectionProbePass(camera);
                  passContext.postProcess = camera.postProcess || globalPP;
                  director.root.pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_BEGIN, camera);
                  this.renderCamera(camera, ppl);
                }
              }
              getCameraPipelineName(camera) {
                let pipelineName = camera.pipeline;
                if (!pipelineName && camera.usePostProcess) {
                  pipelineName = 'forward';
                } else {
                  pipelineName = 'default';
                }
                return pipelineName;
              }
              getCameraPasses(camera) {
                const pipelineName = this.getCameraPipelineName(camera);
                return this.pipelines.get(pipelineName) || [];
              }
              renderCamera(camera, ppl) {
                passContext.passPathName = `${getCameraUniqueID(camera)}`;
                passContext.camera = camera;
                passContext.updateViewPort();
                const passes = this.getCameraPasses(camera);
                const taaPass = passes.find(p => p instanceof TAAPass);
                if (taaPass && taaPass.checkEnable(camera)) {
                  taaPass.applyCameraJitter(camera);
                  taaPass.updateSample();
                }
                const floatOutputPass = passes.find(p => p instanceof FloatOutputProcessPass);
                let lastPass;
                for (let i = 0; i < passes.length; i++) {
                  const pass = passes[i];
                  if (!pass.checkEnable(camera)) {
                    continue;
                  }
                  if (i === passes.length - 1) {
                    passContext.isFinalPass = true;
                  }
                  if (pass.name === 'BloomPass') {
                    pass.hdrInputName = floatOutputPass === undefined || floatOutputPass === null ? '' : floatOutputPass.getHDRInputName();
                  }
                  pass.lastPass = lastPass;
                  pass.render(camera, ppl);
                  lastPass = pass;
                }
              }
            }

            let PipelineType;
            (function (PipelineType) {
              PipelineType[PipelineType["BASIC"] = 0] = "BASIC";
              PipelineType[PipelineType["STANDARD"] = 1] = "STANDARD";
            })(PipelineType || (PipelineType = {}));
            function getPipelineTypeName(e) {
              switch (e) {
                case PipelineType.BASIC:
                  return 'BASIC';
                case PipelineType.STANDARD:
                  return 'STANDARD';
                default:
                  return '';
              }
            }
            let SubpassCapabilities;
            (function (SubpassCapabilities) {
              SubpassCapabilities[SubpassCapabilities["NONE"] = 0] = "NONE";
              SubpassCapabilities[SubpassCapabilities["INPUT_DEPTH_STENCIL"] = 1] = "INPUT_DEPTH_STENCIL";
              SubpassCapabilities[SubpassCapabilities["INPUT_COLOR"] = 2] = "INPUT_COLOR";
              SubpassCapabilities[SubpassCapabilities["INPUT_COLOR_MRT"] = 4] = "INPUT_COLOR_MRT";
              SubpassCapabilities[SubpassCapabilities["HETEROGENEOUS_SAMPLE_COUNT"] = 8] = "HETEROGENEOUS_SAMPLE_COUNT";
            })(SubpassCapabilities || (SubpassCapabilities = {}));
            class PipelineCapabilities {
              constructor() {
                this.subpass = SubpassCapabilities.NONE;
              }
            }

            let _pipeline = null;
            const INVALID_ID = 0xFFFFFFFF;
            const enableEffectImport = true;
            let _renderModule;
            function createCustomPipeline() {
              _pipeline = render.Factory.createPipeline();
              return _pipeline;
            }
            const customPipelineBuilderMap = new Map();
            function setCustomPipeline(name, builder) {
              customPipelineBuilderMap.set(name, builder);
            }
            function getCustomPipeline(name) {
              let builder = customPipelineBuilderMap.get(name);
              if (!builder) {
                if (name === 'Test') {
                  builder = new TestPipelineBuilder(_pipeline.pipelineSceneData);
                  customPipelineBuilderMap.set('Test', builder);
                } else {
                  builder = customPipelineBuilderMap.get('Forward');
                }
              }
              return builder;
            }
            function addCustomBuiltinPipelines(map) {
              map.set('Forward', new PostProcessBuilder());
              map.set('Deferred', new DeferredPipelineBuilder());
              map.set('Deprecated', new CustomPipelineBuilder());
            }
            addCustomBuiltinPipelines(customPipelineBuilderMap);
            function init(device, arrayBuffer) {
              if (arrayBuffer) {
                _renderModule = render.Factory.init(device, arrayBuffer);
              } else {
                _renderModule = render.Factory.init(device, new ArrayBuffer(0));
              }
            }
            function destroy() {
              render.Factory.destroy(_renderModule);
            }
            function getPassID(name) {
              if (name === undefined) {
                return _renderModule.getPassID('default');
              }
              return _renderModule.getPassID(name);
            }
            function getSubpassID(passID, name) {
              return _renderModule.getSubpassID(passID, name);
            }
            function getPhaseID(passID, name) {
              if (name === undefined) {
                return _renderModule.getPhaseID(passID, 'default');
              }
              if (typeof name === 'number') {
                return _renderModule.getPhaseID(passID, name.toString());
              }
              return _renderModule.getPhaseID(passID, name);
            }
            function completePhaseName(name) {
              if (typeof name === 'number') {
                return name.toString();
              } else if (typeof name === 'string') {
                return name;
              } else {
                return 'default';
              }
            }

            var rendering = /*#__PURE__*/Object.freeze({
                __proto__: null,
                get UpdateFrequency () { return UpdateFrequency; },
                getUpdateFrequencyName: getUpdateFrequencyName,
                get ParameterType () { return ParameterType; },
                getParameterTypeName: getParameterTypeName,
                get ResourceResidency () { return ResourceResidency; },
                getResourceResidencyName: getResourceResidencyName,
                get QueueHint () { return QueueHint; },
                getQueueHintName: getQueueHintName,
                get ResourceDimension () { return ResourceDimension; },
                getResourceDimensionName: getResourceDimensionName,
                get ResourceFlags () { return ResourceFlags; },
                get TaskType () { return TaskType; },
                getTaskTypeName: getTaskTypeName,
                get SceneFlags () { return SceneFlags; },
                get LightingMode () { return LightingMode; },
                getLightingModeName: getLightingModeName,
                get AttachmentType () { return AttachmentType; },
                getAttachmentTypeName: getAttachmentTypeName,
                get AccessType () { return AccessType; },
                getAccessTypeName: getAccessTypeName,
                get ClearValueType () { return ClearValueType; },
                getClearValueTypeName: getClearValueTypeName,
                LightInfo: LightInfo,
                get DescriptorTypeOrder () { return DescriptorTypeOrder; },
                getDescriptorTypeOrderName: getDescriptorTypeOrderName,
                Descriptor: Descriptor,
                DescriptorBlock: DescriptorBlock,
                DescriptorBlockFlattened: DescriptorBlockFlattened,
                DescriptorBlockIndex: DescriptorBlockIndex,
                get ResolveFlags () { return ResolveFlags; },
                ResolvePair: ResolvePair,
                CopyPair: CopyPair,
                UploadPair: UploadPair,
                MovePair: MovePair,
                PipelineStatistics: PipelineStatistics,
                RenderCommonObjectPoolSettings: RenderCommonObjectPoolSettings,
                RenderCommonObjectPool: RenderCommonObjectPool,
                saveLightInfo: saveLightInfo,
                loadLightInfo: loadLightInfo,
                saveDescriptor: saveDescriptor,
                loadDescriptor: loadDescriptor,
                saveDescriptorBlock: saveDescriptorBlock,
                loadDescriptorBlock: loadDescriptorBlock,
                saveDescriptorBlockFlattened: saveDescriptorBlockFlattened,
                loadDescriptorBlockFlattened: loadDescriptorBlockFlattened,
                saveDescriptorBlockIndex: saveDescriptorBlockIndex,
                loadDescriptorBlockIndex: loadDescriptorBlockIndex,
                saveResolvePair: saveResolvePair,
                loadResolvePair: loadResolvePair,
                saveCopyPair: saveCopyPair,
                loadCopyPair: loadCopyPair,
                saveMovePair: saveMovePair,
                loadMovePair: loadMovePair,
                savePipelineStatistics: savePipelineStatistics,
                loadPipelineStatistics: loadPipelineStatistics,
                get PipelineType () { return PipelineType; },
                getPipelineTypeName: getPipelineTypeName,
                get SubpassCapabilities () { return SubpassCapabilities; },
                PipelineCapabilities: PipelineCapabilities,
                INVALID_ID: INVALID_ID,
                enableEffectImport: enableEffectImport,
                createCustomPipeline: createCustomPipeline,
                customPipelineBuilderMap: customPipelineBuilderMap,
                setCustomPipeline: setCustomPipeline,
                getCustomPipeline: getCustomPipeline,
                init: init,
                destroy: destroy,
                getPassID: getPassID,
                getSubpassID: getSubpassID,
                getPhaseID: getPhaseID,
                completePhaseName: completePhaseName
            });
            exports('rendering', rendering);

            setCustomPipeline('Custom', new PostProcessBuilder());

            var index = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PostProcessSetting: PostProcessSetting,
                PostProcess: PostProcess,
                FSR: FSR,
                BlitScreen: BlitScreen,
                TAA: TAA,
                ColorGrading: ColorGrading,
                Bloom: Bloom,
                HBAO: HBAO,
                DOF: DOF,
                SettingPass: SettingPass,
                getRTFormatBeforeToneMapping: getRTFormatBeforeToneMapping,
                forceEnableFloatOutput: forceEnableFloatOutput,
                disablePostProcessForDebugView: disablePostProcessForDebugView,
                getShadowMapSampler: getShadowMapSampler,
                BasePass: BasePass,
                ForwardPass: ForwardPass,
                TAAPass: TAAPass,
                FSRPass: FSRPass,
                BlitScreenPass: BlitScreenPass,
                ColorGradingPass: ColorGradingPass,
                BloomPass: BloomPass,
                FxaaPass: FxaaPass,
                ForwardFinalPass: ForwardFinalPass,
                ShadowPass: ShadowPass,
                FloatOutputProcessPass: FloatOutputProcessPass,
                ForwardTransparencyPass: ForwardTransparencyPass,
                ForwardTransparencySimplePass: ForwardTransparencySimplePass,
                COPY_INPUT_DS_PASS_INDEX: COPY_INPUT_DS_PASS_INDEX,
                SSSS_BLUR_X_PASS_INDEX: SSSS_BLUR_X_PASS_INDEX,
                SSSS_BLUR_Y_PASS_INDEX: SSSS_BLUR_Y_PASS_INDEX,
                EXPONENT: EXPONENT,
                I_SAMPLES_COUNT: I_SAMPLES_COUNT,
                SSSSBlurData: SSSSBlurData,
                SkinPass: SkinPass,
                PostFinalPass: PostFinalPass,
                DofPass: DofPass,
                PostProcessBuilder: PostProcessBuilder
            });
            exports('postProcess', index);

            legacyCC.rendering = rendering;

        })
    };
}));
