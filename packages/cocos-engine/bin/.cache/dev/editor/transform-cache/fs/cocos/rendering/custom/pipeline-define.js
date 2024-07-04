System.register("q-bundled:///fs/cocos/rendering/custom/pipeline-define.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../gfx/index.js", "../../render-scene/scene/index.js", "../define.js", "./define.js", "./types.js", "../pipeline-funcs.js"], function (_export, _context) {
  "use strict";

  var EDITOR, cclegacy, ClearFlagBit, Color, Format, LoadOp, StoreOp, Viewport, LightType, ProbeType, ShadowType, supportsR32FloatTexture, GBufferInfo, getCameraUniqueID, getLoadOpOfClearFlag, getRenderArea, getRTFormatBeforeToneMapping, LightingInfo, PostInfo, ShadowInfo, updateCameraUBO, validPunctualLightsCulling, AccessType, AttachmentType, LightInfo, QueueHint, ResourceResidency, SceneFlags, getProfilerCamera, SRGBToLinear, CameraInfo, cameraInfos, windowInfos, shadowInfo, updateShadowRes, shadowPass, updateReflectionProbeRes, gBufferInfo, emptyColor, lightingInfo, postInfo;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function prepareRenderWindow(camera) {
    let windowID = windowInfos.get(camera.window);
    if (windowID === undefined) {
      windowID = windowInfos.size;
      windowInfos.set(camera.window, windowID);
    }
    return windowID;
  }
  function prepareResource(ppl, camera, initResourceFunc, updateResourceFunc) {
    let info = cameraInfos.get(camera);
    if (info !== undefined) {
      let width = camera.window.width;
      let height = camera.window.height;
      if (width === 0) {
        width = 1;
      }
      if (height === 0) {
        height = 1;
      }
      const windowID = prepareRenderWindow(camera);
      info.width = width;
      info.height = height;
      info.windowID = windowID;
      updateResourceFunc(ppl, info);
      return info;
    }
    const windowID = prepareRenderWindow(camera);
    info = new CameraInfo(camera, cameraInfos.size, windowID, camera.window.width ? camera.window.width : 1, camera.window.height ? camera.window.height : 1);
    initResourceFunc(ppl, info);
    cameraInfos.set(camera, info);
    return info;
  }
  function buildShadowRes(ppl, name, width, height) {
    const fboW = width;
    const fboH = height;
    const shadowMapName = name;
    const device = ppl.device;
    if (!ppl.containsResource(shadowMapName)) {
      const format = supportsR32FloatTexture(device) ? Format.R32F : Format.RGBA8;
      ppl.addRenderTarget(shadowMapName, format, fboW, fboH, ResourceResidency.MANAGED);
      ppl.addDepthStencil(`${shadowMapName}Depth`, Format.DEPTH_STENCIL, fboW, fboH, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(shadowMapName, fboW, fboH);
    ppl.updateDepthStencil(`${shadowMapName}Depth`, fboW, fboH);
  }
  function setupShadowRes(ppl, cameraInfo) {
    const camera = cameraInfo.camera;
    validPunctualLightsCulling(ppl, camera);
    const pipeline = ppl;
    const shadow = pipeline.pipelineSceneData.shadows;
    const validPunctualLights = ppl.pipelineSceneData.validPunctualLights;
    const shadows = ppl.pipelineSceneData.shadows;
    shadowInfo.reset();
    if (!shadow.enabled || shadow.type !== ShadowType.ShadowMap) {
      return shadowInfo;
    }
    shadowInfo.shadowEnabled = true;
    const _validLights = shadowInfo.validLights;
    let n = 0;
    let m = 0;
    for (; n < shadow.maxReceived && m < validPunctualLights.length;) {
      const light = validPunctualLights[m];
      if (light.type === LightType.SPOT) {
        const spotLight = light;
        if (spotLight.shadowEnabled) {
          _validLights.push(light);
          n++;
        }
      }
      m++;
    }
    const {
      mainLight
    } = camera.scene;
    // build shadow map
    const mapWidth = shadows.size.x;
    const mapHeight = shadows.size.y;
    if (mainLight && mainLight.shadowEnabled) {
      shadowInfo.mainLightShadowNames[0] = `MainLightShadow${cameraInfo.id}`;
      if (mainLight.shadowFixedArea) {
        buildShadowRes(ppl, shadowInfo.mainLightShadowNames[0], mapWidth, mapHeight);
      } else {
        const csmLevel = pipeline.pipelineSceneData.csmSupported ? mainLight.csmLevel : 1;
        shadowInfo.mainLightShadowNames[0] = `MainLightShadow${cameraInfo.id}`;
        for (let i = 0; i < csmLevel; i++) {
          buildShadowRes(ppl, shadowInfo.mainLightShadowNames[0], mapWidth, mapHeight);
        }
      }
    }
    for (let l = 0; l < _validLights.length; l++) {
      const light = _validLights[l];
      const passName = `SpotLightShadow${l.toString()}${cameraInfo.id}`;
      shadowInfo.spotLightShadowNames[l] = passName;
      buildShadowRes(ppl, shadowInfo.spotLightShadowNames[l], mapWidth, mapHeight);
    }
    return shadowInfo;
  }
  function buildShadowPass(passName, ppl, camera, light, level, width, height) {
    const fboW = width;
    const fboH = height;
    const area = getRenderArea(camera, width, height, light, level);
    width = area.width;
    height = area.height;
    const shadowMapName = passName;
    if (!level) {
      shadowPass = ppl.addRenderPass(width, height, 'default');
      shadowPass.name = passName;
      shadowPass.setViewport(new Viewport(0, 0, fboW, fboH));
      shadowPass.addRenderTarget(shadowMapName, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, camera.clearColor.w));
      shadowPass.addDepthStencil(`${shadowMapName}Depth`, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, ClearFlagBit.DEPTH_STENCIL);
    }
    const queue = shadowPass.addQueue(QueueHint.RENDER_OPAQUE, 'shadow-caster');
    queue.addSceneOfCamera(camera, new LightInfo(light, level), SceneFlags.SHADOW_CASTER);
    queue.setViewport(new Viewport(area.x, area.y, area.width, area.height));
  }
  function setupShadowPass(ppl, cameraInfo) {
    if (!shadowInfo.shadowEnabled) return;
    const camera = cameraInfo.camera;
    const shadows = ppl.pipelineSceneData.shadows;
    // build shadow map
    const mapWidth = shadows.size.x;
    const mapHeight = shadows.size.y;
    const {
      mainLight
    } = camera.scene;
    if (mainLight && mainLight.shadowEnabled) {
      shadowInfo.mainLightShadowNames[0] = `MainLightShadow${cameraInfo.id}`;
      if (mainLight.shadowFixedArea) {
        buildShadowPass(shadowInfo.mainLightShadowNames[0], ppl, camera, mainLight, 0, mapWidth, mapHeight);
      } else {
        const csmLevel = ppl.pipelineSceneData.csmSupported ? mainLight.csmLevel : 1;
        shadowInfo.mainLightShadowNames[0] = `MainLightShadow${cameraInfo.id}`;
        for (let i = 0; i < csmLevel; i++) {
          buildShadowPass(shadowInfo.mainLightShadowNames[0], ppl, camera, mainLight, i, mapWidth, mapHeight);
        }
      }
    }
    for (let l = 0; l < shadowInfo.validLights.length; l++) {
      const light = shadowInfo.validLights[l];
      const passName = `SpotLightShadow${l.toString()}${cameraInfo.id}`;
      shadowInfo.spotLightShadowNames[l] = passName;
      buildShadowPass(passName, ppl, camera, light, 0, mapWidth, mapHeight);
    }
  }
  function setupForwardRes(ppl, cameraInfo, isOffScreen = false) {
    const camera = cameraInfo.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    setupShadowRes(ppl, cameraInfo);
    if (!isOffScreen) {
      ppl.addRenderWindow(`ForwardColor${cameraInfo.id}`, Format.BGRA8, width, height, cameraInfo.camera.window);
    } else {
      ppl.addRenderTarget(`ForwardColor${cameraInfo.id}`, getRTFormatBeforeToneMapping(ppl), width, height, ResourceResidency.PERSISTENT);
    }
    ppl.addDepthStencil(`ForwardDepthStencil${cameraInfo.id}`, Format.DEPTH_STENCIL, width, height);
  }
  function updateForwardRes(ppl, cameraInfo, isOffScreen = false) {
    const camera = cameraInfo.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    updateShadowRes(ppl, cameraInfo);
    if (!isOffScreen) {
      ppl.updateRenderWindow(`ForwardColor${cameraInfo.id}`, cameraInfo.camera.window);
    } else {
      ppl.updateRenderTarget(`ForwardColor${cameraInfo.id}`, width, height);
    }
    ppl.updateDepthStencil(`ForwardDepthStencil${cameraInfo.id}`, width, height);
  }
  function setupDeferredForward(ppl, cameraInfo, inputColor, clusterLighting) {
    const area = getRenderArea(cameraInfo.camera, cameraInfo.camera.window.width, cameraInfo.camera.window.height);
    const width = area.width;
    const height = area.height;
    const forwardPass = ppl.addRenderPass(width, height, 'default');
    const camera = cameraInfo.camera;
    forwardPass.addRenderTarget(inputColor, LoadOp.LOAD, StoreOp.STORE);
    forwardPass.addDepthStencil(gBufferInfo.ds, LoadOp.LOAD, StoreOp.DISCARD);
    for (const dirShadowName of shadowInfo.mainLightShadowNames) {
      if (ppl.containsResource(dirShadowName)) {
        forwardPass.addTexture(dirShadowName, 'cc_shadowMap');
      }
    }
    for (const spotShadowName of shadowInfo.spotLightShadowNames) {
      if (ppl.containsResource(spotShadowName)) {
        forwardPass.addTexture(spotShadowName, 'cc_spotShadowMap');
      }
    }
    let sceneFlags = SceneFlags.OPAQUE_OBJECT | SceneFlags.PLANAR_SHADOW | SceneFlags.CUTOUT_OBJECT | SceneFlags.DRAW_INSTANCING;
    sceneFlags |= clusterLighting ? SceneFlags.CLUSTERED_LIGHTING : SceneFlags.DEFAULT_LIGHTING;
    forwardPass.addQueue(QueueHint.RENDER_OPAQUE, 'deferred-forward').addSceneOfCamera(camera, new LightInfo(), sceneFlags);
    forwardPass.addQueue(QueueHint.RENDER_TRANSPARENT, 'deferred-forward').addSceneOfCamera(camera, new LightInfo(), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.GEOMETRY);
  }
  function setupForwardPass(ppl, cameraInfo, isOffScreen = false, enabledAlpha = true) {
    if (EDITOR) {
      ppl.setMacroInt('CC_PIPELINE_TYPE', 0);
    }
    setupShadowPass(ppl, cameraInfo);
    const cameraID = cameraInfo.id;
    const area = getRenderArea(cameraInfo.camera, cameraInfo.camera.window.width, cameraInfo.camera.window.height);
    const width = area.width;
    const height = area.height;
    const forwardPass = ppl.addRenderPass(width, height, 'default');
    forwardPass.name = `ForwardPass${cameraID}`;
    forwardPass.setViewport(new Viewport(area.x, area.y, width, height));
    for (const dirShadowName of shadowInfo.mainLightShadowNames) {
      if (ppl.containsResource(dirShadowName)) {
        forwardPass.addTexture(dirShadowName, 'cc_shadowMap');
      }
    }
    for (const spotShadowName of shadowInfo.spotLightShadowNames) {
      if (ppl.containsResource(spotShadowName)) {
        forwardPass.addTexture(spotShadowName, 'cc_spotShadowMap');
      }
    }
    const camera = cameraInfo.camera;
    forwardPass.addRenderTarget(`ForwardColor${cameraInfo.id}`, isOffScreen ? LoadOp.CLEAR : getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, new Color(camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w));
    forwardPass.addDepthStencil(`ForwardDepthStencil${cameraInfo.id}`, isOffScreen ? LoadOp.CLEAR : getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.DEPTH_STENCIL),
    // If the depth texture is used by subsequent passes, it must be set to store.
    isOffScreen ? StoreOp.DISCARD : StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    forwardPass.addQueue(QueueHint.RENDER_OPAQUE).addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE_OBJECT | SceneFlags.PLANAR_SHADOW | SceneFlags.CUTOUT_OBJECT | SceneFlags.DEFAULT_LIGHTING | SceneFlags.DRAW_INSTANCING);
    let sceneFlags = SceneFlags.TRANSPARENT_OBJECT | SceneFlags.GEOMETRY;
    if (!isOffScreen) {
      sceneFlags |= SceneFlags.UI;
      forwardPass.showStatistics = true;
    }
    if (enabledAlpha) {
      forwardPass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), sceneFlags);
    }
    return {
      rtName: `ForwardColor${cameraInfo.id}`,
      dsName: `ForwardDepthStencil${cameraInfo.id}`
    };
  }
  function buildReflectionProbeRes(ppl, probe, renderWindow, faceIdx) {
    const area = probe.renderArea();
    const width = area.x;
    const height = area.y;
    const probePassRTName = `reflectionProbePassColor${faceIdx}`;
    const probePassDSName = `reflectionProbePassDS${faceIdx}`;
    if (!ppl.containsResource(probePassRTName)) {
      ppl.addRenderWindow(probePassRTName, Format.RGBA8, width, height, renderWindow);
      ppl.addDepthStencil(probePassDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderWindow(probePassRTName, renderWindow);
    ppl.updateDepthStencil(probePassDSName, width, height);
  }
  function setupReflectionProbeRes(ppl, info) {
    if (!cclegacy.internal.reflectionProbeManager) return;
    const probes = cclegacy.internal.reflectionProbeManager.getProbes();
    if (probes.length === 0) return;
    for (let i = 0; i < probes.length; i++) {
      const probe = probes[i];
      if (probe.needRender) {
        if (probes[i].probeType === ProbeType.PLANAR) {
          const window = probe.realtimePlanarTexture.window;
          buildReflectionProbeRes(ppl, probe, window, 0);
        } else if (EDITOR) {
          for (let faceIdx = 0; faceIdx < probe.bakedCubeTextures.length; faceIdx++) {
            probe.updateCameraDir(faceIdx);
            buildReflectionProbeRes(ppl, probe, probe.bakedCubeTextures[faceIdx].window, faceIdx);
          }
          probe.needRender = false;
        }
      }
    }
  }
  function buildReflectProbePass(ppl, info, probe, renderWindow, faceIdx) {
    const area = probe.renderArea();
    const width = area.x;
    const height = area.y;
    const probeCamera = probe.camera;
    const probePassRTName = `reflectionProbePassColor${faceIdx}`;
    const probePassDSName = `reflectionProbePassDS${faceIdx}`;
    const probePass = ppl.addRenderPass(width, height, 'default');
    probePass.name = `ReflectionProbePass${faceIdx}`;
    probePass.setViewport(new Viewport(0, 0, width, height));
    probePass.addRenderTarget(probePassRTName, getLoadOpOfClearFlag(probeCamera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, new Color(probeCamera.clearColor.x, probeCamera.clearColor.y, probeCamera.clearColor.z, probeCamera.clearColor.w));
    probePass.addDepthStencil(probePassDSName, getLoadOpOfClearFlag(probeCamera.clearFlag, AttachmentType.DEPTH_STENCIL), StoreOp.STORE, probeCamera.clearDepth, probeCamera.clearStencil, probeCamera.clearFlag);
    const passBuilder = probePass.addQueue(QueueHint.RENDER_OPAQUE);
    passBuilder.addSceneOfCamera(info.camera, new LightInfo(), SceneFlags.REFLECTION_PROBE);
    updateCameraUBO(passBuilder, probeCamera, ppl);
  }
  function setupReflectionProbePass(ppl, info) {
    if (!cclegacy.internal.reflectionProbeManager) return;
    const probes = cclegacy.internal.reflectionProbeManager.getProbes();
    if (probes.length === 0) return;
    for (let i = 0; i < probes.length; i++) {
      const probe = probes[i];
      if (probe.needRender) {
        if (probes[i].probeType === ProbeType.PLANAR) {
          const window = probe.realtimePlanarTexture.window;
          buildReflectProbePass(ppl, info, probe, window, 0);
        } else if (EDITOR) {
          for (let faceIdx = 0; faceIdx < probe.bakedCubeTextures.length; faceIdx++) {
            probe.updateCameraDir(faceIdx);
            buildReflectProbePass(ppl, info, probe, probe.bakedCubeTextures[faceIdx].window, faceIdx);
          }
          probe.needRender = false;
        }
      }
    }
  }
  function setupGBufferRes(ppl, info) {
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const gBufferPassRTName = `gBufferPassColorCamera${info.id}`;
    const gBufferPassNormal = `gBufferPassNormal${info.id}`;
    const gBufferPassEmissive = `gBufferPassEmissive${info.id}`;
    const gBufferPassDSName = `gBufferPassDSCamera${info.id}`;
    const colFormat = Format.RGBA16F;
    ppl.addRenderTarget(gBufferPassRTName, colFormat, width, height, ResourceResidency.MANAGED);
    ppl.addRenderTarget(gBufferPassEmissive, colFormat, width, height, ResourceResidency.MANAGED);
    ppl.addRenderTarget(gBufferPassNormal, colFormat, width, height, ResourceResidency.MANAGED);
    ppl.addDepthStencil(gBufferPassDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    gBufferInfo.color = gBufferPassRTName;
    gBufferInfo.normal = gBufferPassNormal;
    gBufferInfo.emissive = gBufferPassEmissive;
    gBufferInfo.ds = gBufferPassDSName;
  }
  function updateGBufferRes(ppl, info) {
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const gBufferPassRTName = `gBufferPassColorCamera${info.id}`;
    const gBufferPassNormal = `gBufferPassNormal${info.id}`;
    const gBufferPassEmissive = `gBufferPassEmissive${info.id}`;
    const gBufferPassDSName = `gBufferPassDSCamera${info.id}`;
    ppl.updateRenderTarget(gBufferPassRTName, width, height);
    ppl.updateRenderTarget(gBufferPassEmissive, width, height);
    ppl.updateRenderTarget(gBufferPassNormal, width, height);
    ppl.updateDepthStencil(gBufferPassDSName, width, height);
  }
  function setupScenePassTiled(pipeline, info, useCluster) {
    if (!lightingInfo) {
      lightingInfo = new LightingInfo(useCluster);
    }
    const ppl = pipeline;
    const camera = info.camera;
    const cameraID = getCameraUniqueID(camera);
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const gBufferPassRTName = gBufferInfo.color;
    const gBufferPassNormal = gBufferInfo.normal;
    const gBufferPassEmissive = gBufferInfo.emissive;
    const gBufferPassDSName = gBufferInfo.ds;
    const scenePass = ppl.addRenderPass(width, height, 'deferred-scene-tiled');

    // gbuffer subpass
    const gBufferPass = scenePass.addRenderSubpass('gbuffer-tiled');
    gBufferPass.name = `CameraGBufferPass${info.id}`;
    gBufferPass.setViewport(new Viewport(area.x, area.y, width, height));
    const rtColor = new Color(0, 0, 0, 0);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      if (ppl.pipelineSceneData.isHDR) {
        SRGBToLinear(rtColor, camera.clearColor);
      } else {
        rtColor.x = camera.clearColor.x;
        rtColor.y = camera.clearColor.y;
        rtColor.z = camera.clearColor.z;
      }
    }
    gBufferPass.addRenderTarget(gBufferPassRTName, AccessType.WRITE, '_', LoadOp.CLEAR, StoreOp.DISCARD, emptyColor);
    gBufferPass.addRenderTarget(gBufferPassNormal, AccessType.WRITE, '_', LoadOp.CLEAR, StoreOp.DISCARD, emptyColor);
    gBufferPass.addRenderTarget(gBufferPassEmissive, AccessType.WRITE, '_', LoadOp.CLEAR, StoreOp.DISCARD, emptyColor);
    gBufferPass.addDepthStencil(gBufferPassDSName, AccessType.WRITE, '_', '_', LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    gBufferPass.addQueue(QueueHint.RENDER_OPAQUE, 'gbuffer-tiled').addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE_OBJECT | SceneFlags.CUTOUT_OBJECT);

    // lighting subpass
    const lightingPass = scenePass.addRenderSubpass('deferred-lighting-tiled');
    lightingPass.name = `CameraLightingPass${info.id}`;
    lightingPass.setViewport(new Viewport(area.x, area.y, width, height));
    lightingPass.addRenderTarget(gBufferPassRTName, AccessType.READ, 'albedoMap', LoadOp.DISCARD, StoreOp.DISCARD);
    lightingPass.addRenderTarget(gBufferPassNormal, AccessType.READ, 'normalMap', LoadOp.DISCARD, StoreOp.DISCARD);
    lightingPass.addRenderTarget(gBufferPassEmissive, AccessType.READ, 'emissiveMap', LoadOp.DISCARD, StoreOp.DISCARD);
    lightingPass.addDepthStencil(gBufferPassDSName, AccessType.READ, 'depthStencil', '_', LoadOp.DISCARD, StoreOp.DISCARD);

    // cluster data
    const clusterLightBufferName = `clusterLightBuffer${cameraID}`;
    const clusterLightIndicesBufferName = `clusterLightIndicesBuffer${cameraID}`;
    const clusterLightGridBufferName = `clusterLightGridBuffer${cameraID}`;
    if (ppl.containsResource(clusterLightBufferName)) {
      lightingPass.addStorageBuffer(clusterLightBufferName, AccessType.READ, 'b_ccLightsBuffer');
      lightingPass.addStorageBuffer(clusterLightIndicesBufferName, AccessType.READ, 'b_clusterLightIndicesBuffer');
      lightingPass.addStorageBuffer(clusterLightGridBufferName, AccessType.READ, 'b_clusterLightGridBuffer');
    }
    const deferredLightingPassRTName = `deferredLightingPassRTName${info.id}`;
    lightingPass.addRenderTarget(deferredLightingPassRTName, AccessType.WRITE, '_', LoadOp.CLEAR, StoreOp.STORE, rtColor);
    lightingPass.addQueue(QueueHint.RENDER_TRANSPARENT, 'deferred-lighting-tiled').addCameraQuad(camera, lightingInfo.deferredLightingMaterial, 1, SceneFlags.VOLUMETRIC_LIGHTING);
    return {
      rtName: deferredLightingPassRTName
    };
  }
  function setupGBufferPass(ppl, info) {
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const gBufferPassRTName = gBufferInfo.color;
    const gBufferPassNormal = gBufferInfo.normal;
    const gBufferPassEmissive = gBufferInfo.emissive;
    const gBufferPassDSName = gBufferInfo.ds;
    // gbuffer pass
    const gBufferPass = ppl.addRenderPass(width, height, 'gbuffer');
    gBufferPass.name = `CameraGBufferPass${info.id}`;
    gBufferPass.setViewport(new Viewport(area.x, area.y, width, height));
    const rtColor = new Color(0, 0, 0, 0);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      if (ppl.pipelineSceneData.isHDR) {
        SRGBToLinear(rtColor, camera.clearColor);
      } else {
        rtColor.x = camera.clearColor.x;
        rtColor.y = camera.clearColor.y;
        rtColor.z = camera.clearColor.z;
      }
    }
    gBufferPass.addRenderTarget(gBufferPassRTName, LoadOp.CLEAR, StoreOp.STORE, rtColor);
    gBufferPass.addRenderTarget(gBufferPassEmissive, LoadOp.CLEAR, StoreOp.STORE, new Color(0, 0, 0, 0));
    gBufferPass.addRenderTarget(gBufferPassNormal, LoadOp.CLEAR, StoreOp.STORE, new Color(0, 0, 0, 0));
    gBufferPass.addDepthStencil(gBufferPassDSName, LoadOp.CLEAR, StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    gBufferPass.addQueue(QueueHint.RENDER_OPAQUE, 'gbuffer').addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE_OBJECT | SceneFlags.CUTOUT_OBJECT);
    return gBufferPass;
  }
  function setupLightingRes(ppl, info) {
    setupShadowRes(ppl, info);
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const deferredLightingPassRTName = `deferredLightingPassRTName${info.id}`;
    ppl.addRenderTarget(deferredLightingPassRTName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
  }
  function updateLightingRes(ppl, info) {
    updateShadowRes(ppl, info);
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const deferredLightingPassRTName = `deferredLightingPassRTName${info.id}`;
    ppl.updateRenderTarget(deferredLightingPassRTName, width, height);
  }
  function setupLightingPass(pipeline, info, useCluster) {
    setupShadowPass(pipeline, info);
    if (!lightingInfo) {
      lightingInfo = new LightingInfo(useCluster);
    }
    const ppl = pipeline;
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const cameraID = getCameraUniqueID(camera);
    const deferredLightingPassRTName = `deferredLightingPassRTName${info.id}`;
    // lighting pass
    const lightingPass = ppl.addRenderPass(width, height, 'deferred-lighting');
    lightingPass.name = `CameraLightingPass${info.id}`;
    lightingPass.setViewport(new Viewport(area.x, area.y, width, height));
    for (const dirShadowName of shadowInfo.mainLightShadowNames) {
      if (ppl.containsResource(dirShadowName)) {
        lightingPass.addTexture(dirShadowName, 'cc_shadowMap');
      }
    }
    for (const spotShadowName of shadowInfo.spotLightShadowNames) {
      if (ppl.containsResource(spotShadowName)) {
        lightingPass.addTexture(spotShadowName, 'cc_spotShadowMap');
      }
    }
    if (ppl.containsResource(gBufferInfo.color)) {
      lightingPass.addTexture(gBufferInfo.color, 'albedoMap');
      lightingPass.addTexture(gBufferInfo.normal, 'normalMap');
      lightingPass.addTexture(gBufferInfo.emissive, 'emissiveMap');
      lightingPass.addTexture(gBufferInfo.ds, 'depthStencil');
    }

    // cluster data
    const clusterLightBufferName = `clusterLightBuffer${cameraID}`;
    const clusterLightIndicesBufferName = `clusterLightIndicesBuffer${cameraID}`;
    const clusterLightGridBufferName = `clusterLightGridBuffer${cameraID}`;
    if (ppl.containsResource(clusterLightBufferName)) {
      lightingPass.addStorageBuffer(clusterLightBufferName, AccessType.READ, 'b_ccLightsBuffer');
      lightingPass.addStorageBuffer(clusterLightIndicesBufferName, AccessType.READ, 'b_clusterLightIndicesBuffer');
      lightingPass.addStorageBuffer(clusterLightGridBufferName, AccessType.READ, 'b_clusterLightGridBuffer');
    }
    const lightingClearColor = new Color(0, 0, 0, 0);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      lightingClearColor.x = camera.clearColor.x;
      lightingClearColor.y = camera.clearColor.y;
      lightingClearColor.z = camera.clearColor.z;
    }
    lightingClearColor.w = 0;
    lightingPass.addRenderTarget(deferredLightingPassRTName, LoadOp.CLEAR, StoreOp.STORE, lightingClearColor);
    lightingPass.addQueue(QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, lightingInfo.deferredLightingMaterial, 0, SceneFlags.VOLUMETRIC_LIGHTING);
    // lightingPass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(),
    //     SceneFlags.TRANSPARENT_OBJECT | SceneFlags.PLANAR_SHADOW | SceneFlags.GEOMETRY);
    return {
      rtName: deferredLightingPassRTName
    };
  }
  function setupPostprocessRes(ppl, info) {
    const cameraID = info.id;
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const postprocessPassRTName = `postprocessPassRTName${cameraID}`;
    const postprocessPassDS = `postprocessPassDS${cameraID}`;
    ppl.addRenderWindow(postprocessPassRTName, Format.BGRA8, width, height, camera.window);
    ppl.addDepthStencil(postprocessPassDS, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
  }
  function updatePostprocessRes(ppl, info) {
    const cameraID = info.id;
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const postprocessPassRTName = `postprocessPassRTName${cameraID}`;
    const postprocessPassDS = `postprocessPassDS${cameraID}`;
    ppl.updateRenderWindow(postprocessPassRTName, camera.window);
    ppl.updateDepthStencil(postprocessPassDS, width, height);
  }
  function setupPostprocessPass(ppl, info, inputTex) {
    if (!postInfo) {
      postInfo = new PostInfo();
    }
    const cameraID = info.id;
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const postprocessPassRTName = `postprocessPassRTName${cameraID}`;
    const postprocessPassDS = `postprocessPassDS${cameraID}`;
    const postprocessPass = ppl.addRenderPass(width, height, 'post-process');
    postprocessPass.name = `CameraPostprocessPass${cameraID}`;
    postprocessPass.setViewport(new Viewport(area.x, area.y, area.width, area.height));
    if (ppl.containsResource(inputTex)) {
      postprocessPass.addTexture(inputTex, 'outputResultMap');
    }
    const postClearColor = new Color(0, 0, 0, camera.clearColor.w);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      postClearColor.x = camera.clearColor.x;
      postClearColor.y = camera.clearColor.y;
      postClearColor.z = camera.clearColor.z;
    }
    postprocessPass.addRenderTarget(postprocessPassRTName, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, postClearColor);
    postprocessPass.addDepthStencil(postprocessPassDS, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.DEPTH_STENCIL), StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    postprocessPass.addQueue(QueueHint.NONE).addCameraQuad(camera, postInfo.postMaterial, 0, SceneFlags.NONE);
    if (getProfilerCamera() === camera) {
      postprocessPass.showStatistics = true;
    }
    return {
      rtName: postprocessPassRTName,
      dsName: postprocessPassDS
    };
  }
  function setupUIRes(ppl, info) {
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const dsUIAndProfilerPassRTName = `dsUIAndProfilerPassColor${info.id}`;
    const dsUIAndProfilerPassDSName = `dsUIAndProfilerPassDS${info.id}`;
    ppl.addRenderWindow(dsUIAndProfilerPassRTName, Format.BGRA8, width, height, camera.window);
    ppl.addDepthStencil(dsUIAndProfilerPassDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
  }
  function updateUIRes(ppl, info) {
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const dsUIAndProfilerPassRTName = `dsUIAndProfilerPassColor${info.id}`;
    const dsUIAndProfilerPassDSName = `dsUIAndProfilerPassDS${info.id}`;
    ppl.updateRenderWindow(dsUIAndProfilerPassRTName, camera.window);
    ppl.updateDepthStencil(dsUIAndProfilerPassDSName, width, height);
  }
  function setupUIPass(ppl, info) {
    const camera = info.camera;
    const area = getRenderArea(camera, camera.window.width, camera.window.height);
    const width = area.width;
    const height = area.height;
    const dsUIAndProfilerPassRTName = `dsUIAndProfilerPassColor${info.id}`;
    const dsUIAndProfilerPassDSName = `dsUIAndProfilerPassDS${info.id}`;
    const uiAndProfilerPass = ppl.addRenderPass(width, height, 'default');
    uiAndProfilerPass.name = `CameraUIAndProfilerPass${info.id}`;
    uiAndProfilerPass.setViewport(new Viewport(area.x, area.y, width, height));
    uiAndProfilerPass.addRenderTarget(dsUIAndProfilerPassRTName, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, new Color(camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w));
    uiAndProfilerPass.addDepthStencil(dsUIAndProfilerPassDSName, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.DEPTH_STENCIL), StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    const sceneFlags = SceneFlags.UI;
    uiAndProfilerPass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), sceneFlags);
    if (getProfilerCamera() === camera) {
      uiAndProfilerPass.showStatistics = true;
    }
  }
  _export({
    CameraInfo: void 0,
    prepareResource: prepareResource,
    setupShadowRes: setupShadowRes,
    setupShadowPass: setupShadowPass,
    setupForwardRes: setupForwardRes,
    updateForwardRes: updateForwardRes,
    setupDeferredForward: setupDeferredForward,
    setupForwardPass: setupForwardPass,
    buildReflectionProbeRes: buildReflectionProbeRes,
    setupReflectionProbeRes: setupReflectionProbeRes,
    setupReflectionProbePass: setupReflectionProbePass,
    setupGBufferRes: setupGBufferRes,
    updateGBufferRes: updateGBufferRes,
    setupScenePassTiled: setupScenePassTiled,
    setupGBufferPass: setupGBufferPass,
    setupLightingRes: setupLightingRes,
    updateLightingRes: updateLightingRes,
    setupLightingPass: setupLightingPass,
    setupPostprocessRes: setupPostprocessRes,
    updatePostprocessRes: updatePostprocessRes,
    setupPostprocessPass: setupPostprocessPass,
    setupUIRes: setupUIRes,
    updateUIRes: updateUIRes,
    setupUIPass: setupUIPass
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Color = _gfxIndexJs.Color;
      Format = _gfxIndexJs.Format;
      LoadOp = _gfxIndexJs.LoadOp;
      StoreOp = _gfxIndexJs.StoreOp;
      Viewport = _gfxIndexJs.Viewport;
    }, function (_renderSceneSceneIndexJs) {
      LightType = _renderSceneSceneIndexJs.LightType;
      ProbeType = _renderSceneSceneIndexJs.ProbeType;
      ShadowType = _renderSceneSceneIndexJs.ShadowType;
    }, function (_defineJs) {
      supportsR32FloatTexture = _defineJs.supportsR32FloatTexture;
    }, function (_defineJs2) {
      GBufferInfo = _defineJs2.GBufferInfo;
      getCameraUniqueID = _defineJs2.getCameraUniqueID;
      getLoadOpOfClearFlag = _defineJs2.getLoadOpOfClearFlag;
      getRenderArea = _defineJs2.getRenderArea;
      getRTFormatBeforeToneMapping = _defineJs2.getRTFormatBeforeToneMapping;
      LightingInfo = _defineJs2.LightingInfo;
      PostInfo = _defineJs2.PostInfo;
      ShadowInfo = _defineJs2.ShadowInfo;
      updateCameraUBO = _defineJs2.updateCameraUBO;
      validPunctualLightsCulling = _defineJs2.validPunctualLightsCulling;
    }, function (_typesJs) {
      AccessType = _typesJs.AccessType;
      AttachmentType = _typesJs.AttachmentType;
      LightInfo = _typesJs.LightInfo;
      QueueHint = _typesJs.QueueHint;
      ResourceResidency = _typesJs.ResourceResidency;
      SceneFlags = _typesJs.SceneFlags;
    }, function (_pipelineFuncsJs) {
      getProfilerCamera = _pipelineFuncsJs.getProfilerCamera;
      SRGBToLinear = _pipelineFuncsJs.SRGBToLinear;
    }],
    execute: function () {
      _export("CameraInfo", CameraInfo = class CameraInfo {
        constructor(camera, id, windowID, width, height) {
          this.camera = void 0;
          this.id = 0xFFFFFFFF;
          this.windowID = 0xFFFFFFFF;
          this.width = 0;
          this.height = 0;
          this.camera = camera;
          this.id = id;
          this.windowID = windowID;
          this.width = width;
          this.height = height;
        }
      });
      _export("cameraInfos", cameraInfos = new Map());
      _export("windowInfos", windowInfos = new Map());
      shadowInfo = new ShadowInfo();
      _export("updateShadowRes", updateShadowRes = setupShadowRes);
      _export("updateReflectionProbeRes", updateReflectionProbeRes = setupReflectionProbeRes);
      gBufferInfo = new GBufferInfo();
      emptyColor = new Color(0, 0, 0, 0);
    }
  };
});