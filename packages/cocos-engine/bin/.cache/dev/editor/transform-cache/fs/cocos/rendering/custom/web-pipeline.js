System.register("q-bundled:///fs/cocos/rendering/custom/web-pipeline.js", ["pal/system-info", "../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "../../core/index.js", "./types.js", "./render-graph.js", "./pipeline.js", "../pipeline-scene-data.js", "../../render-scene/scene/index.js", "../../render-scene/scene/light.js", "./layout-graph.js", "./executor.js", "../global-descriptor-set-manager.js", "../define.js", "../../../pal/system-info/enum-type/index.js", "./compiler.js", "../pipeline-ubo.js", "../../asset/asset-manager/index.js", "../../asset/assets/index.js", "./builtin-pipelines.js", "./custom-pipeline.js", "../pipeline-funcs.js", "../debug-view.js", "./utils.js", "./define.js", "./layout-graph-utils.js", "../../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var systemInfo, DEBUG, EDITOR, Feature, Format, FormatFeatureBit, ClearFlagBit, deviceManager, Viewport, API, Type, SamplerInfo, Filter, Address, DescriptorSetInfo, LoadOp, StoreOp, TextureType, SampleCount, Color, ComparisonFunc, Mat4, toRadian, Vec3, Vec4, assert, macro, cclegacy, RecyclePool, AccessType, AttachmentType, LightingMode, QueueHint, RenderCommonObjectPool, RenderCommonObjectPoolSettings, ResourceDimension, ResourceFlags, ResourceResidency, SceneFlags, UpdateFrequency, ComputePass, RasterPass, RasterSubpass, RenderData, RenderGraph, RenderGraphComponent, RenderGraphValue, RenderQueue, RenderSwapchain, ResourceDesc, ResourceGraph, ResourceGraphValue, ResourceStates, ResourceTraits, SceneData, PersistentBuffer, RenderGraphObjectPool, RenderGraphObjectPoolSettings, CullingFlags, ManagedResource, ManagedBuffer, PipelineType, PipelineCapabilities, PipelineSceneData, Camera, ShadowType, CSMLevel, PCFType, ProbeType, LightType, LayoutGraphData, Executor, GlobalDSManager, supportsR32FloatTexture, supportsRGBA16HalfFloatTexture, UBOSkinning, OS, Compiler, PipelineUBO, builtinResMgr, Material, DeferredPipelineBuilder, ForwardPipelineBuilder, CustomPipelineBuilder, decideProfilerCamera, DebugViewCompositeType, getUBOTypeCount, buildReflectionProbePass, initGlobalDescBinding, createGfxDescriptorSetsAndPipelines, legacyCC, PipelinePool, WebSetter, WebSceneBuilder, WebRenderQueueBuilder, WebRenderSubpassBuilder, WebRenderPassBuilder, WebComputeQueueBuilder, WebComputePassBuilder, WebMovePassBuilder, WebCopyPassBuilder, WebPipeline, _uboVec, _uboVec3, _uboCol, _matView, _mulMatView, uniformOffset, _samplerPointInfo, renderCommonObjectSetting, renderGraphPoolSetting, pipelinePool, renderGraphPool;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /****************************************************************************
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                             in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                                                                                                                                                                                                             use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                                                                                                                                                                                                             of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                                                                                                                                                                                                             subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                             all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                             ****************************************************************************/ /* eslint-disable max-len */
  function setUniformOffset(setter, uniformName, uniformType, value, idx = 0) {
    const uniformOffset = setter.getUniformOffset(uniformName, uniformType, idx);
    if (setter.hasUniform(uniformOffset)) {
      switch (uniformType) {
        case Type.MAT4:
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setter.offsetMat4(value, uniformOffset);
          break;
        case Type.FLOAT4:
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setter.offsetVec4(value, uniformOffset);
          break;
        default:
      }
    }
  }
  function setShadowUBOLightView(setter, camera, light, csmLevel, layout = 'default') {
    const director = cclegacy.director;
    const pipeline = director.root.pipeline;
    const device = pipeline.device;
    const sceneData = pipeline.pipelineSceneData;
    const shadowInfo = sceneData.shadows;
    if (shadowInfo.type === ShadowType.Planar) {
      return;
    }
    const csmLayers = sceneData.csmLayers;
    const packing = supportsR32FloatTexture(device) ? 0.0 : 1.0;
    const cap = pipeline.device.capabilities;
    setter.addConstant('CCCSM', layout);
    // ShadowMap
    if (!setter.addConstant('CCShadow', layout)) return;
    if (shadowInfo.enabled) {
      if (shadowInfo.type === ShadowType.ShadowMap) {
        // update CSM layers
        if (light && light.node && light.type === LightType.DIRECTIONAL) {
          csmLayers.update(sceneData, camera);
        }
      }
    }
    switch (light.type) {
      case LightType.DIRECTIONAL:
        {
          const mainLight = light;
          if (shadowInfo.enabled && mainLight && mainLight.shadowEnabled) {
            if (shadowInfo.type === ShadowType.ShadowMap) {
              let near = 0.1;
              let far = 0;
              let matShadowView;
              let matShadowProj;
              let matShadowViewProj;
              let levelCount = 0;
              if (mainLight.shadowFixedArea || mainLight.csmLevel === CSMLevel.LEVEL_1) {
                matShadowView = csmLayers.specialLayer.matShadowView;
                matShadowProj = csmLayers.specialLayer.matShadowProj;
                matShadowViewProj = csmLayers.specialLayer.matShadowViewProj;
                if (mainLight.shadowFixedArea) {
                  near = mainLight.shadowNear;
                  far = mainLight.shadowFar;
                  levelCount = 0;
                } else {
                  near = 0.1;
                  far = csmLayers.specialLayer.shadowCameraFar;
                  levelCount = 1;
                }
                _uboVec.set(LightType.DIRECTIONAL, packing, mainLight.shadowNormalBias, 0);
                setUniformOffset(setter, 'cc_shadowLPNNInfo', Type.FLOAT4, _uboVec);
              } else {
                const layer = csmLayers.layers[csmLevel];
                matShadowView = layer.matShadowView;
                matShadowProj = layer.matShadowProj;
                matShadowViewProj = layer.matShadowViewProj;
                near = layer.splitCameraNear;
                far = layer.splitCameraFar;
                levelCount = mainLight.csmLevel;
              }
              setUniformOffset(setter, 'cc_matLightView', Type.MAT4, matShadowView);
              _uboVec.set(matShadowProj.m10, matShadowProj.m14, matShadowProj.m11, matShadowProj.m15);
              setUniformOffset(setter, 'cc_shadowProjDepthInfo', Type.FLOAT4, _uboVec);
              _uboVec.set(matShadowProj.m00, matShadowProj.m05, 1.0 / matShadowProj.m00, 1.0 / matShadowProj.m05);
              setUniformOffset(setter, 'cc_shadowProjInfo', Type.FLOAT4, _uboVec);
              setUniformOffset(setter, 'cc_matLightViewProj', Type.MAT4, matShadowViewProj);
              _uboVec.set(near, far, 0, 1.0 - mainLight.shadowSaturation);
              setUniformOffset(setter, 'cc_shadowNFLSInfo', Type.FLOAT4, _uboVec);
              _uboVec.set(LightType.DIRECTIONAL, packing, mainLight.shadowNormalBias, levelCount);
              setUniformOffset(setter, 'cc_shadowLPNNInfo', Type.FLOAT4, _uboVec);
              _uboVec.set(shadowInfo.size.x, shadowInfo.size.y, mainLight.shadowPcf, mainLight.shadowBias);
              setUniformOffset(setter, 'cc_shadowWHPBInfo', Type.FLOAT4, _uboVec);
            }
          }
          break;
        }
      case LightType.SPOT:
        {
          const spotLight = light;
          if (shadowInfo.enabled && spotLight && spotLight.shadowEnabled) {
            Mat4.invert(_matView, spotLight.node.getWorldMatrix());
            setUniformOffset(setter, 'cc_matLightView', Type.MAT4, _matView);
            Mat4.perspective(_mulMatView, spotLight.angle, 1.0, 0.001, spotLight.range, true, cap.clipSpaceMinZ, cap.clipSpaceSignY, 0);
            const matShadowInvProj = _mulMatView.clone().invert();
            const matShadowProj = _mulMatView.clone();
            Mat4.multiply(_matView, _mulMatView, _matView);
            setUniformOffset(setter, 'cc_matLightViewProj', Type.MAT4, _matView);
            _uboVec.set(0.01, light.range, 0.0, 0.0);
            setUniformOffset(setter, 'cc_shadowNFLSInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(shadowInfo.size.x, shadowInfo.size.y, spotLight.shadowPcf, spotLight.shadowBias);
            setUniformOffset(setter, 'cc_shadowWHPBInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(LightType.SPOT, packing, spotLight.shadowNormalBias, 0.0);
            setUniformOffset(setter, 'cc_shadowLPNNInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(matShadowProj.m10, matShadowProj.m14, matShadowProj.m11, matShadowProj.m15);
            setUniformOffset(setter, 'cc_shadowProjDepthInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(matShadowInvProj.m10, matShadowInvProj.m14, matShadowInvProj.m11, matShadowInvProj.m15);
            setUniformOffset(setter, 'cc_shadowInvProjDepthInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(matShadowProj.m00, matShadowProj.m05, 1.0 / matShadowProj.m00, 1.0 / matShadowProj.m05);
            setUniformOffset(setter, 'cc_shadowProjInfo', Type.FLOAT4, _uboVec);
          }
          break;
        }
      case LightType.SPHERE:
        {
          _uboVec.set(shadowInfo.size.x, shadowInfo.size.y, 1.0, 0.0);
          setUniformOffset(setter, 'cc_shadowWHPBInfo', Type.FLOAT4, _uboVec);
          _uboVec.set(LightType.SPHERE, packing, 0.0, 0.0);
          setUniformOffset(setter, 'cc_shadowLPNNInfo', Type.FLOAT4, _uboVec);
          break;
        }
      case LightType.POINT:
        {
          _uboVec.set(shadowInfo.size.x, shadowInfo.size.y, 1.0, 0.0);
          setUniformOffset(setter, 'cc_shadowWHPBInfo', Type.FLOAT4, _uboVec);
          _uboVec.set(LightType.POINT, packing, 0.0, 0.0);
          setUniformOffset(setter, 'cc_shadowLPNNInfo', Type.FLOAT4, _uboVec);
          break;
        }
      default:
    }
    _uboCol.set(shadowInfo.shadowColor.x, shadowInfo.shadowColor.y, shadowInfo.shadowColor.z, shadowInfo.shadowColor.w);
    setUniformOffset(setter, 'cc_shadowColor', Type.FLOAT4, _uboCol);
  }
  function getPCFRadius(shadowInfo, mainLight) {
    const shadowMapSize = shadowInfo.size.x;
    switch (mainLight.shadowPcf) {
      case PCFType.HARD:
        return 0.0;
      case PCFType.SOFT:
        return 1.0 / (shadowMapSize * 0.5);
      case PCFType.SOFT_2X:
        return 2.0 / (shadowMapSize * 0.5);
      case PCFType.SOFT_4X:
        return 3.0 / (shadowMapSize * 0.5);
      default:
    }
    return 0.0;
  }
  function setShadowUBOView(setter, camera, layout = 'default') {
    const director = cclegacy.director;
    const pipeline = director.root.pipeline;
    const device = pipeline.device;
    const scene = director.getScene();
    const mainLight = camera && camera.scene ? camera.scene.mainLight : scene ? scene.renderScene.mainLight : null;
    const sceneData = pipeline.pipelineSceneData;
    const shadowInfo = sceneData.shadows;
    const csmLayers = sceneData.csmLayers;
    const csmSupported = sceneData.csmSupported;
    const packing = supportsR32FloatTexture(device) ? 0.0 : 1.0;
    const hasCCShadow = setter.addConstant('CCShadow', layout);
    const hasCCCSM = setter.addConstant('CCCSM', layout);
    if (mainLight && shadowInfo.enabled) {
      if (shadowInfo.type === ShadowType.ShadowMap) {
        if (mainLight.shadowEnabled) {
          if (mainLight.shadowFixedArea || mainLight.csmLevel === CSMLevel.LEVEL_1 || !csmSupported) {
            if (hasCCShadow) {
              setter.setCurrConstant('CCShadow', layout);
              const matShadowView = csmLayers.specialLayer.matShadowView;
              const matShadowProj = csmLayers.specialLayer.matShadowProj;
              const matShadowViewProj = csmLayers.specialLayer.matShadowViewProj;
              const near = mainLight.shadowNear;
              const far = mainLight.shadowFar;
              setUniformOffset(setter, 'cc_matLightView', Type.MAT4, matShadowView);
              _uboVec.set(matShadowProj.m10, matShadowProj.m14, matShadowProj.m11, matShadowProj.m15);
              setUniformOffset(setter, 'cc_shadowProjDepthInfo', Type.FLOAT4, _uboVec);
              _uboVec.set(matShadowProj.m00, matShadowProj.m05, 1.0 / matShadowProj.m00, 1.0 / matShadowProj.m05);
              setUniformOffset(setter, 'cc_shadowProjInfo', Type.FLOAT4, _uboVec);
              setUniformOffset(setter, 'cc_matLightViewProj', Type.MAT4, matShadowViewProj);
              _uboVec.set(near, far, 0, 1.0 - mainLight.shadowSaturation);
              setUniformOffset(setter, 'cc_shadowNFLSInfo', Type.FLOAT4, _uboVec);
              _uboVec.set(LightType.DIRECTIONAL, packing, mainLight.shadowNormalBias, 0);
              setUniformOffset(setter, 'cc_shadowLPNNInfo', Type.FLOAT4, _uboVec);
            }
          } else {
            if (hasCCCSM) {
              const layerThreshold = getPCFRadius(shadowInfo, mainLight);
              setter.setCurrConstant('CCCSM', layout);
              for (let i = 0; i < mainLight.csmLevel; i++) {
                const layer = csmLayers.layers[i];
                const matShadowView = layer.matShadowView;
                _uboVec.set(matShadowView.m00, matShadowView.m04, matShadowView.m08, layerThreshold);
                setUniformOffset(setter, 'cc_csmViewDir0', Type.FLOAT4, _uboVec, i);
                _uboVec.set(matShadowView.m01, matShadowView.m05, matShadowView.m09, layer.splitCameraNear);
                setUniformOffset(setter, 'cc_csmViewDir1', Type.FLOAT4, _uboVec, i);
                _uboVec.set(matShadowView.m02, matShadowView.m06, matShadowView.m10, layer.splitCameraFar);
                setUniformOffset(setter, 'cc_csmViewDir2', Type.FLOAT4, _uboVec, i);
                const csmAtlas = layer.csmAtlas;
                setUniformOffset(setter, 'cc_csmAtlas', Type.FLOAT4, csmAtlas, i);
                const matShadowViewProj = layer.matShadowViewProj;
                setUniformOffset(setter, 'cc_matCSMViewProj', Type.MAT4, matShadowViewProj, i);
                const matShadowProj = layer.matShadowProj;
                _uboVec.set(matShadowProj.m10, matShadowProj.m14, matShadowProj.m11, matShadowProj.m15);
                setUniformOffset(setter, 'cc_csmProjDepthInfo', Type.FLOAT4, _uboVec, i);
                _uboVec.set(matShadowProj.m00, matShadowProj.m05, 1.0 / matShadowProj.m00, 1.0 / matShadowProj.m05);
                setUniformOffset(setter, 'cc_csmProjInfo', Type.FLOAT4, _uboVec, i);
              }
              _uboVec.set(mainLight.csmTransitionRange, 0, 0, 0);
              setUniformOffset(setter, 'cc_csmSplitsInfo', Type.FLOAT4, _uboVec);
            }
            if (hasCCShadow) {
              setter.setCurrConstant('CCShadow', layout);
              _uboVec.set(0, 0, 0, 1.0 - mainLight.shadowSaturation);
              setUniformOffset(setter, 'cc_shadowNFLSInfo', Type.FLOAT4, _uboVec);
              _uboVec.set(LightType.DIRECTIONAL, packing, mainLight.shadowNormalBias, mainLight.csmLevel);
              setUniformOffset(setter, 'cc_shadowLPNNInfo', Type.FLOAT4, _uboVec);
            }
          }
          if (hasCCShadow) {
            setter.setCurrConstant('CCShadow', layout);
            _uboVec.set(shadowInfo.size.x, shadowInfo.size.y, mainLight.shadowPcf, mainLight.shadowBias);
            setUniformOffset(setter, 'cc_shadowWHPBInfo', Type.FLOAT4, _uboVec);
          }
        }
      } else if (hasCCShadow) {
        setter.setCurrConstant('CCShadow', layout);
        Vec3.normalize(_uboVec3, shadowInfo.normal);
        _uboVec.set(_uboVec3.x, _uboVec3.y, _uboVec3.z, -shadowInfo.distance);
        setUniformOffset(setter, 'cc_planarNDInfo', Type.FLOAT4, _uboVec);
        _uboVec.set(0, 0, 0, shadowInfo.planeBias);
        setUniformOffset(setter, 'cc_shadowWHPBInfo', Type.FLOAT4, _uboVec);
      }
      if (hasCCShadow) {
        setter.setCurrConstant('CCShadow', layout);
        setUniformOffset(setter, 'cc_shadowColor', Type.FLOAT4, shadowInfo.shadowColor);
      }
    }
  }
  function setComputeConstants(setter, layoutName) {
    const director = cclegacy.director;
    const root = director.root;
    const pipeline = root.pipeline;
    setter.addConstant('CCConst', layoutName);
  }
  function setCameraUBOValues(setter, camera, cfg, scene, layoutName = 'default') {
    var _skybox$envmap;
    const director = cclegacy.director;
    const root = director.root;
    const pipeline = root.pipeline;
    const shadowInfo = cfg.shadows;
    const skybox = cfg.skybox;
    const shadingScale = cfg.shadingScale;
    // Camera
    if (!setter.addConstant('CCCamera', layoutName)) return;
    if (camera) {
      setUniformOffset(setter, 'cc_matView', Type.MAT4, camera.matView);
      setUniformOffset(setter, 'cc_matViewInv', Type.MAT4, camera.node.worldMatrix);
      setUniformOffset(setter, 'cc_matProj', Type.MAT4, camera.matProj);
      setUniformOffset(setter, 'cc_matProjInv', Type.MAT4, camera.matProjInv);
      setUniformOffset(setter, 'cc_matViewProj', Type.MAT4, camera.matViewProj);
      setUniformOffset(setter, 'cc_matViewProjInv', Type.MAT4, camera.matViewProjInv);
      _uboVec.set(camera.surfaceTransform, camera.cameraUsage, Math.cos(toRadian(skybox.getRotationAngle())), Math.sin(toRadian(skybox.getRotationAngle())));
      setUniformOffset(setter, 'cc_surfaceTransform', Type.FLOAT4, _uboVec);
      _uboVec.set(camera.exposure, 1.0 / camera.exposure, cfg.isHDR ? 1.0 : 0.0, 1.0 / Camera.standardExposureValue);
      setUniformOffset(setter, 'cc_exposure', Type.FLOAT4, _uboVec);
    }
    if (camera) {
      _uboVec.set(camera.position.x, camera.position.y, camera.position.z, pipeline.getCombineSignY());
    } else {
      _uboVec.set(0, 0, 0, pipeline.getCombineSignY());
    }
    setUniformOffset(setter, 'cc_cameraPos', Type.FLOAT4, _uboVec);
    _uboVec.set(cfg.shadingScale, cfg.shadingScale, 1.0 / cfg.shadingScale, 1.0 / cfg.shadingScale);
    setUniformOffset(setter, 'cc_screenScale', Type.FLOAT4, _uboVec);
    const mainLight = scene && scene.mainLight;
    if (mainLight) {
      const shadowEnable = mainLight.shadowEnabled && shadowInfo.type === ShadowType.ShadowMap ? 1.0 : 0.0;
      _uboVec.set(mainLight.direction.x, mainLight.direction.y, mainLight.direction.z, shadowEnable);
      setUniformOffset(setter, 'cc_mainLitDir', Type.FLOAT4, _uboVec);
      let r = mainLight.color.x;
      let g = mainLight.color.y;
      let b = mainLight.color.z;
      if (mainLight.useColorTemperature) {
        r *= mainLight.colorTemperatureRGB.x;
        g *= mainLight.colorTemperatureRGB.y;
        b *= mainLight.colorTemperatureRGB.z;
      }
      let w = mainLight.illuminance;
      if (cfg.isHDR && camera) {
        w *= camera.exposure;
      }
      _uboVec.set(r, g, b, w);
      setUniformOffset(setter, 'cc_mainLitColor', Type.FLOAT4, _uboVec);
    } else {
      _uboVec.set(0, 0, 1, 0);
      setUniformOffset(setter, 'cc_mainLitDir', Type.FLOAT4, _uboVec);
      _uboVec.set(0, 0, 0, 0);
      setUniformOffset(setter, 'cc_mainLitColor', Type.FLOAT4, _uboVec);
    }
    const ambient = cfg.ambient;
    const skyColor = ambient.skyColor;
    if (cfg.isHDR) {
      skyColor.w = ambient.skyIllum * (camera ? camera.exposure : 1);
    } else {
      skyColor.w = ambient.skyIllum;
    }
    _uboVec.set(skyColor.x, skyColor.y, skyColor.z, skyColor.w);
    setUniformOffset(setter, 'cc_ambientSky', Type.FLOAT4, _uboVec);
    _uboVec.set(ambient.groundAlbedo.x, ambient.groundAlbedo.y, ambient.groundAlbedo.z, skybox.envmap ? (_skybox$envmap = skybox.envmap) === null || _skybox$envmap === void 0 ? void 0 : _skybox$envmap.mipmapLevel : 1.0);
    setUniformOffset(setter, 'cc_ambientGround', Type.FLOAT4, _uboVec);
    const fog = cfg.fog;
    const colorTempRGB = fog.colorArray;
    _uboVec.set(colorTempRGB.x, colorTempRGB.y, colorTempRGB.z, colorTempRGB.z);
    setUniformOffset(setter, 'cc_fogColor', Type.FLOAT4, _uboVec);
    _uboVec.set(fog.fogStart, fog.fogEnd, fog.fogDensity, 0.0);
    setUniformOffset(setter, 'cc_fogBase', Type.FLOAT4, _uboVec);
    _uboVec.set(fog.fogTop, fog.fogRange, fog.fogAtten, 0.0);
    setUniformOffset(setter, 'cc_fogAdd', Type.FLOAT4, _uboVec);
    if (camera) {
      _uboVec.set(camera.nearClip, camera.farClip, camera.getClipSpaceMinz(), 0.0);
      setUniformOffset(setter, 'cc_nearFar', Type.FLOAT4, _uboVec);
      _uboVec.set(camera.viewport.x, camera.viewport.y, shadingScale * camera.window.width * camera.viewport.z, shadingScale * camera.window.height * camera.viewport.w);
      setUniformOffset(setter, 'cc_viewPort', Type.FLOAT4, _uboVec);
    }
  }
  function setTextureUBOView(setter, camera, cfg, layout = 'default') {
    const skybox = cfg.skybox;
    const director = cclegacy.director;
    const root = director.root;
    const pipeline = root.pipeline;
    if (skybox.reflectionMap) {
      const texture = skybox.reflectionMap.getGFXTexture();
      const sampler = root.device.getSampler(skybox.reflectionMap.getSamplerInfo());
      setter.setTexture('cc_environment', texture);
      setter.setSampler('cc_environment', sampler);
    } else {
      const envmap = skybox.envmap ? skybox.envmap : builtinResMgr.get('default-cube-texture');
      if (envmap) {
        const texture = envmap.getGFXTexture();
        const sampler = root.device.getSampler(envmap.getSamplerInfo());
        setter.setTexture('cc_environment', texture);
        setter.setSampler('cc_environment', sampler);
      }
    }
    const diffuseMap = skybox.diffuseMap ? skybox.diffuseMap : builtinResMgr.get('default-cube-texture');
    if (diffuseMap) {
      const texture = diffuseMap.getGFXTexture();
      const sampler = root.device.getSampler(diffuseMap.getSamplerInfo());
      setter.setTexture('cc_diffuseMap', texture);
      setter.setSampler('cc_diffuseMap', sampler);
    }
    if (!setter.hasSampler('cc_shadowMap')) {
      setter.setSampler('cc_shadowMap', pipeline.defaultSampler);
    }
    if (!setter.hasTexture('cc_shadowMap')) {
      setter.setTexture('cc_shadowMap', pipeline.defaultTexture);
    }
    if (!setter.hasSampler('cc_spotShadowMap')) {
      setter.setSampler('cc_spotShadowMap', pipeline.defaultSampler);
    }
    if (!setter.hasTexture('cc_spotShadowMap')) {
      setter.setTexture('cc_spotShadowMap', pipeline.defaultTexture);
    }
  }
  function getFirstChildLayoutName(lg, parentID) {
    if (lg.numVertices() && parentID !== 0xFFFFFFFF && lg.numChildren(parentID)) {
      const childNodes = lg.children(parentID);
      if (childNodes.next().value && childNodes.next().value.target !== lg.nullVertex()) {
        const ququeLayoutID = childNodes.next().value.target;
        return lg.getName(ququeLayoutID);
      }
    }
    return '';
  }
  function getTextureType(dimension, arraySize) {
    switch (dimension) {
      case ResourceDimension.TEXTURE1D:
        return arraySize > 1 ? TextureType.TEX1D_ARRAY : TextureType.TEX1D;
      case ResourceDimension.TEXTURE2D:
        return arraySize > 1 ? TextureType.TEX2D_ARRAY : TextureType.TEX2D;
      case ResourceDimension.TEXTURE3D:
        return TextureType.TEX3D;
      case ResourceDimension.BUFFER:
        return TextureType.TEX2D;
      default:
        break;
    }
    return TextureType.TEX2D;
  }
  function getResourceDimension(type) {
    switch (type) {
      case TextureType.TEX1D:
      case TextureType.TEX1D_ARRAY:
        return ResourceDimension.TEXTURE1D;
      case TextureType.TEX2D:
      case TextureType.TEX2D_ARRAY:
      case TextureType.CUBE:
        return ResourceDimension.TEXTURE2D;
      case TextureType.TEX3D:
        return ResourceDimension.TEXTURE3D;
      default:
        break;
    }
    return ResourceDimension.TEXTURE2D;
  }
  function isManaged(residency) {
    return residency === ResourceResidency.MANAGED || residency === ResourceResidency.MEMORYLESS;
  }
  _export({
    WebSetter: void 0,
    WebSceneBuilder: void 0,
    WebRenderQueueBuilder: void 0,
    WebRenderSubpassBuilder: void 0,
    WebRenderPassBuilder: void 0,
    WebComputeQueueBuilder: void 0,
    WebComputePassBuilder: void 0,
    WebMovePassBuilder: void 0,
    WebCopyPassBuilder: void 0,
    WebPipeline: void 0
  });
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_gfxIndexJs) {
      Feature = _gfxIndexJs.Feature;
      Format = _gfxIndexJs.Format;
      FormatFeatureBit = _gfxIndexJs.FormatFeatureBit;
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      deviceManager = _gfxIndexJs.deviceManager;
      Viewport = _gfxIndexJs.Viewport;
      API = _gfxIndexJs.API;
      Type = _gfxIndexJs.Type;
      SamplerInfo = _gfxIndexJs.SamplerInfo;
      Filter = _gfxIndexJs.Filter;
      Address = _gfxIndexJs.Address;
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
      LoadOp = _gfxIndexJs.LoadOp;
      StoreOp = _gfxIndexJs.StoreOp;
      TextureType = _gfxIndexJs.TextureType;
      SampleCount = _gfxIndexJs.SampleCount;
      Color = _gfxIndexJs.Color;
      ComparisonFunc = _gfxIndexJs.ComparisonFunc;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      toRadian = _coreIndexJs.toRadian;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      assert = _coreIndexJs.assert;
      macro = _coreIndexJs.macro;
      cclegacy = _coreIndexJs.cclegacy;
      RecyclePool = _coreIndexJs.RecyclePool;
    }, function (_typesJs) {
      AccessType = _typesJs.AccessType;
      AttachmentType = _typesJs.AttachmentType;
      LightingMode = _typesJs.LightingMode;
      QueueHint = _typesJs.QueueHint;
      RenderCommonObjectPool = _typesJs.RenderCommonObjectPool;
      RenderCommonObjectPoolSettings = _typesJs.RenderCommonObjectPoolSettings;
      ResourceDimension = _typesJs.ResourceDimension;
      ResourceFlags = _typesJs.ResourceFlags;
      ResourceResidency = _typesJs.ResourceResidency;
      SceneFlags = _typesJs.SceneFlags;
      UpdateFrequency = _typesJs.UpdateFrequency;
    }, function (_renderGraphJs) {
      ComputePass = _renderGraphJs.ComputePass;
      RasterPass = _renderGraphJs.RasterPass;
      RasterSubpass = _renderGraphJs.RasterSubpass;
      RenderData = _renderGraphJs.RenderData;
      RenderGraph = _renderGraphJs.RenderGraph;
      RenderGraphComponent = _renderGraphJs.RenderGraphComponent;
      RenderGraphValue = _renderGraphJs.RenderGraphValue;
      RenderQueue = _renderGraphJs.RenderQueue;
      RenderSwapchain = _renderGraphJs.RenderSwapchain;
      ResourceDesc = _renderGraphJs.ResourceDesc;
      ResourceGraph = _renderGraphJs.ResourceGraph;
      ResourceGraphValue = _renderGraphJs.ResourceGraphValue;
      ResourceStates = _renderGraphJs.ResourceStates;
      ResourceTraits = _renderGraphJs.ResourceTraits;
      SceneData = _renderGraphJs.SceneData;
      PersistentBuffer = _renderGraphJs.PersistentBuffer;
      RenderGraphObjectPool = _renderGraphJs.RenderGraphObjectPool;
      RenderGraphObjectPoolSettings = _renderGraphJs.RenderGraphObjectPoolSettings;
      CullingFlags = _renderGraphJs.CullingFlags;
      ManagedResource = _renderGraphJs.ManagedResource;
      ManagedBuffer = _renderGraphJs.ManagedBuffer;
    }, function (_pipelineJs) {
      PipelineType = _pipelineJs.PipelineType;
      PipelineCapabilities = _pipelineJs.PipelineCapabilities;
    }, function (_pipelineSceneDataJs) {
      PipelineSceneData = _pipelineSceneDataJs.PipelineSceneData;
    }, function (_renderSceneSceneIndexJs) {
      Camera = _renderSceneSceneIndexJs.Camera;
      ShadowType = _renderSceneSceneIndexJs.ShadowType;
      CSMLevel = _renderSceneSceneIndexJs.CSMLevel;
      PCFType = _renderSceneSceneIndexJs.PCFType;
      ProbeType = _renderSceneSceneIndexJs.ProbeType;
    }, function (_renderSceneSceneLightJs) {
      LightType = _renderSceneSceneLightJs.LightType;
    }, function (_layoutGraphJs) {
      LayoutGraphData = _layoutGraphJs.LayoutGraphData;
    }, function (_executorJs) {
      Executor = _executorJs.Executor;
    }, function (_globalDescriptorSetManagerJs) {
      GlobalDSManager = _globalDescriptorSetManagerJs.GlobalDSManager;
    }, function (_defineJs) {
      supportsR32FloatTexture = _defineJs.supportsR32FloatTexture;
      supportsRGBA16HalfFloatTexture = _defineJs.supportsRGBA16HalfFloatTexture;
      UBOSkinning = _defineJs.UBOSkinning;
    }, function (_palSystemInfoEnumTypeIndexJs) {
      OS = _palSystemInfoEnumTypeIndexJs.OS;
    }, function (_compilerJs) {
      Compiler = _compilerJs.Compiler;
    }, function (_pipelineUboJs) {
      PipelineUBO = _pipelineUboJs.PipelineUBO;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
    }, function (_builtinPipelinesJs) {
      DeferredPipelineBuilder = _builtinPipelinesJs.DeferredPipelineBuilder;
      ForwardPipelineBuilder = _builtinPipelinesJs.ForwardPipelineBuilder;
    }, function (_customPipelineJs) {
      CustomPipelineBuilder = _customPipelineJs.CustomPipelineBuilder;
    }, function (_pipelineFuncsJs) {
      decideProfilerCamera = _pipelineFuncsJs.decideProfilerCamera;
    }, function (_debugViewJs) {
      DebugViewCompositeType = _debugViewJs.DebugViewCompositeType;
    }, function (_utilsJs) {
      getUBOTypeCount = _utilsJs.getUBOTypeCount;
    }, function (_defineJs2) {
      buildReflectionProbePass = _defineJs2.buildReflectionProbePass;
      initGlobalDescBinding = _defineJs2.initGlobalDescBinding;
    }, function (_layoutGraphUtilsJs) {
      createGfxDescriptorSetsAndPipelines = _layoutGraphUtilsJs.createGfxDescriptorSetsAndPipelines;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      _uboVec = new Vec4();
      _uboVec3 = new Vec3();
      _uboCol = new Color();
      _matView = new Mat4();
      _mulMatView = new Mat4();
      uniformOffset = -1;
      _samplerPointInfo = new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP);
      renderCommonObjectSetting = new RenderCommonObjectPoolSettings(16);
      renderGraphPoolSetting = new RenderGraphObjectPoolSettings(16);
      PipelinePool = class PipelinePool {
        constructor() {
          this.renderData = new RenderData();
          this.layoutGraph = new LayoutGraphData();
          this.rg = new RenderGraph();
          this.vertId = -1;
          this.sceneData = new SceneData();
          this.resourceGraph = new ResourceGraph();
          this.computePass = new ComputePass();
          this.rasterPass = new RasterPass();
          this.rasterSubpass = new RasterSubpass();
          this.renderQueue = new RenderQueue();
          this.sceneBuilder = new RecyclePool(() => new WebSceneBuilder(this.renderData, this.layoutGraph, this.rg, this.vertId, this.sceneData), 16);
          this.renderPassBuilder = new RecyclePool(() => new WebRenderPassBuilder(this.renderData, this.rg, this.layoutGraph, this.resourceGraph, this.vertId, this.rasterPass, this.getPipelineSceneData()), 16);
          this.computeQueueBuilder = new RecyclePool(() => new WebComputeQueueBuilder(this.renderData, this.rg, this.layoutGraph, this.vertId, this.renderQueue, this.getPipelineSceneData()), 16);
          this.renderQueueBuilder = new RecyclePool(() => new WebRenderQueueBuilder(this.renderData, this.rg, this.layoutGraph, this.vertId, this.renderQueue, this.getPipelineSceneData()), 16);
          this.renderSubpassBuilder = new RecyclePool(() => new WebRenderSubpassBuilder(this.renderData, this.rg, this.layoutGraph, this.vertId, this.rasterSubpass, this.getPipelineSceneData()), 16);
          this.computePassBuilder = new RecyclePool(() => new WebComputePassBuilder(this.renderData, this.rg, this.layoutGraph, this.resourceGraph, this.vertId, this.computePass, this.getPipelineSceneData()), 16);
          this.samplerInfo = new RecyclePool(() => new SamplerInfo(), 16);
          this.color = new RecyclePool(() => new Color(), 16);
          this.renderCommonObjectPool = new RenderCommonObjectPool(renderCommonObjectSetting);
          this.renderGraphPool = new RenderGraphObjectPool(renderGraphPoolSetting, this.renderCommonObjectPool);
          this.viewport = new RecyclePool(() => new Viewport(), 16);
        }
        getPipelineSceneData() {
          return legacyCC.director.root.pipeline.pipelineSceneData;
        }
        createColor(x = 0, y = 0, z = 0, w = 0) {
          const color = this.color.add();
          color.set(x, y, z, w);
          return color;
        }
        createSamplerInfo(minFilter = Filter.LINEAR, magFilter = Filter.LINEAR, mipFilter = Filter.NONE, addressU = Address.WRAP, addressV = Address.WRAP, addressW = Address.WRAP, maxAnisotropy = 0, cmpFunc = ComparisonFunc.ALWAYS) {
          const samplerInfo = this.samplerInfo.add();
          samplerInfo.minFilter = minFilter;
          samplerInfo.magFilter = magFilter;
          samplerInfo.mipFilter = mipFilter;
          samplerInfo.addressU = addressU;
          samplerInfo.addressV = addressV;
          samplerInfo.addressW = addressW;
          samplerInfo.maxAnisotropy = maxAnisotropy;
          samplerInfo.cmpFunc = cmpFunc;
          return samplerInfo;
        }
        reset() {
          this.sceneBuilder.reset();
          this.renderPassBuilder.reset();
          this.computePassBuilder.reset();
          this.computeQueueBuilder.reset();
          this.renderCommonObjectPool.reset();
          this.renderGraphPool.reset();
          this.viewport.reset();
          this.samplerInfo.reset();
          this.color.reset();
          this.renderQueueBuilder.reset();
          this.renderSubpassBuilder.reset();
        }
      };
      _export("WebSetter", WebSetter = class WebSetter {
        constructor(data, lg) {
          // protected
          this._data = void 0;
          this._lg = void 0;
          this._vertID = -1;
          this._currBlock = void 0;
          this._currStage = '';
          this._currFrequency = UpdateFrequency.PER_PASS;
          this._currCount = void 0;
          this._currConstant = [];
          this._data = data;
          this._lg = lg;
        }
        get name() {
          return '';
        }
        set name(name) {
          // noop
        }
        _copyToBuffer(target, offset, type) {
          assert(offset !== -1);
          const arr = this.getCurrConstant();
          switch (type) {
            case Type.FLOAT4:
              Vec4.toArray(arr, target, offset);
              break;
            case Type.MAT4:
              Mat4.toArray(arr, target, offset);
              break;
            case Type.FLOAT:
              arr[offset] = target;
              break;
            case Type.SAMPLER2D:
              break;
            case Type.TEXTURE2D:
              break;
            case Type.FLOAT2:
              {
                const vec2Val = target;
                arr[offset + 0] = vec2Val.x;
                arr[offset + 1] = vec2Val.y;
              }
              break;
            default:
          }
        }
        _applyCurrConstantBuffer(name, target, type, idx = 0) {
          const offset = this.getUniformOffset(name, type, idx);
          this._copyToBuffer(target, offset, type);
        }
        hasUniform(offset) {
          return offset !== -1;
        }
        getUniformOffset(name, type, idx = 0) {
          const currBlock = this._getCurrUniformBlock();
          if (!currBlock) return -1;
          let offset = 0;
          const typeCount = getUBOTypeCount(type);
          for (const uniform of currBlock.members) {
            const currCount = getUBOTypeCount(uniform.type);
            if (uniform.name === name) {
              if (typeCount === currCount) {
                return offset + idx * currCount;
              } else if (typeCount === currCount * uniform.count) {
                return offset;
              } else if (typeCount < currCount * uniform.count) {
                return offset + idx;
              }
              if (DEBUG) assert(false);
            }
            offset += currCount * uniform.count;
          }
          return -1;
        }
        _getCurrUniformBlock() {
          const block = this._currBlock;
          const nodeId = this._lg.locateChild(0xFFFFFFFF, this._currStage);
          const ppl = this._lg.getLayout(nodeId);
          const layout = ppl.descriptorSets.get(this._currFrequency).descriptorSetLayoutData;
          const nameID = this._lg.attributeIndex.get(block);
          return layout.uniformBlocks.get(nameID);
        }
        _getCurrDescSetLayoutData() {
          const nodeId = this._lg.locateChild(0xFFFFFFFF, this._currStage);
          const ppl = this._lg.getLayout(nodeId);
          const layout = ppl.descriptorSets.get(this._currFrequency).descriptorSetLayoutData;
          return layout;
        }
        _getCurrDescriptorBlock(block) {
          const layout = this._getCurrDescSetLayoutData();
          const nameID = this._lg.attributeIndex.get(block);
          for (const block of layout.descriptorBlocks) {
            for (let i = 0; i !== block.descriptors.length; ++i) {
              if (nameID === block.descriptors[i].descriptorID) {
                return block.offset + i;
              }
            }
          }
          return -1;
        }
        setCurrConstant(block, stage = 'default', frequency = UpdateFrequency.PER_PASS) {
          this._currBlock = block;
          this._currStage = stage;
          this._currFrequency = frequency;
          const nameID = this._lg.attributeIndex.get(block);
          this._currCount = 0;
          const currBlock = this._getCurrUniformBlock();
          if (!currBlock) return false;
          for (const uniform of currBlock.members) {
            this._currCount += getUBOTypeCount(uniform.type) * uniform.count;
          }
          this._currConstant = this._data.constants.get(nameID);
          return true;
        }
        getCurrConstant() {
          return this._currConstant;
        }
        addConstant(block, stage = 'default', frequency = UpdateFrequency.PER_PASS) {
          this._currBlock = block;
          this._currStage = stage;
          this._currFrequency = frequency;
          const num = this._lg.attributeIndex.get(block);
          this._currCount = 0;
          const currBlock = this._getCurrUniformBlock();
          if (!currBlock) return false;
          for (const uniform of currBlock.members) {
            this._currCount += getUBOTypeCount(uniform.type) * uniform.count;
          }
          if (!this._data.constants.get(num)) {
            const value = new Array(this._currCount);
            value.fill(0);
            this._data.constants.set(num, value);
          }
          this.setCurrConstant(block, stage);
          return true;
        }
        setMat4(name, mat, idx = 0) {
          this._applyCurrConstantBuffer(name, mat, Type.MAT4, idx);
        }
        offsetMat4(mat, offset) {
          this._copyToBuffer(mat, offset, Type.MAT4);
        }
        setQuaternion(name, quat, idx = 0) {
          this._applyCurrConstantBuffer(name, quat, Type.FLOAT4, idx);
        }
        offsetQuaternion(quat, offset) {
          this._copyToBuffer(quat, offset, Type.FLOAT4);
        }
        setColor(name, color, idx = 0) {
          this._applyCurrConstantBuffer(name, color, Type.FLOAT4, idx);
        }
        offsetColor(color, offset) {
          this._copyToBuffer(color, offset, Type.FLOAT4);
        }
        setVec4(name, vec, idx = 0) {
          this._applyCurrConstantBuffer(name, vec, Type.FLOAT4, idx);
        }
        offsetVec4(vec, offset) {
          this._copyToBuffer(vec, offset, Type.FLOAT4);
        }
        setVec2(name, vec, idx = 0) {
          this._applyCurrConstantBuffer(name, vec, Type.FLOAT2, idx);
        }
        offsetVec2(vec, offset) {
          this._copyToBuffer(vec, offset, Type.FLOAT2);
        }
        setFloat(name, v, idx = 0) {
          this._applyCurrConstantBuffer(name, v, Type.FLOAT, idx);
        }
        setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        }
        offsetFloat(v, offset) {
          this._copyToBuffer(v, offset, Type.FLOAT);
        }
        setBuffer(name, buffer) {
          if (this._getCurrDescriptorBlock(name) === -1) {
            return;
          }
          const num = this._lg.attributeIndex.get(name);
          this._data.buffers.set(num, buffer);
        }
        setTexture(name, texture) {
          if (this._getCurrDescriptorBlock(name) === -1) {
            return;
          }
          const num = this._lg.attributeIndex.get(name);
          this._data.textures.set(num, texture);
        }
        setReadWriteBuffer(name, buffer) {
          // TODO
        }
        setReadWriteTexture(name, texture) {
          // TODO
        }
        setSampler(name, sampler) {
          if (this._getCurrDescriptorBlock(name) === -1) {
            return;
          }
          const num = this._lg.attributeIndex.get(name);
          this._data.samplers.set(num, sampler);
        }
        getParentLayout() {
          const director = cclegacy.director;
          const root = director.root;
          const pipeline = root.pipeline;
          const parId = pipeline.renderGraph.getParent(this._vertID);
          const layoutName = pipeline.renderGraph.getLayout(parId);
          return layoutName;
        }
        getCurrentLayout() {
          const director = cclegacy.director;
          const root = director.root;
          const pipeline = root.pipeline;
          const layoutName = pipeline.renderGraph.getLayout(this._vertID);
          return layoutName;
        }
        setBuiltinCameraConstants(camera) {
          const director = cclegacy.director;
          const root = director.root;
          const pipeline = root.pipeline;
          const layoutName = this.getParentLayout();
          setCameraUBOValues(this, camera, pipeline.pipelineSceneData, camera.scene, layoutName);
        }
        setBuiltinShadowMapConstants(light, numLevels) {
          setShadowUBOView(this, null, this.getParentLayout());
        }
        setBuiltinDirectionalLightFrustumConstants(camera, light, csmLevel = 0) {
          setShadowUBOLightView(this, camera, light, csmLevel);
        }
        setBuiltinSpotLightFrustumConstants(light) {
          setShadowUBOLightView(this, null, light, 0);
        }
        setBuiltinDirectionalLightConstants(light, camera) {
          this.setBuiltinShadowMapConstants(light);
        }
        setBuiltinSphereLightConstants(light, camera) {
          const director = cclegacy.director;
          const pipeline = director.root.pipeline;
          const sceneData = pipeline.pipelineSceneData;
          if (!this.addConstant('CCForwardLight', this.getParentLayout(), UpdateFrequency.PER_BATCH)) return;
          _uboVec.set(light.position.x, light.position.y, light.position.z, LightType.SPHERE);
          setUniformOffset(this, 'cc_lightPos', Type.FLOAT4, _uboVec);
          _uboVec.set(light.size, light.range, 0.0, 0.0);
          setUniformOffset(this, 'cc_lightSizeRangeAngle', Type.FLOAT4, _uboVec);
          const isHDR = sceneData.isHDR;
          const lightMeterScale = 10000.0;
          _uboVec.set(light.color.x, light.color.y, light.color.z, 0);
          if (light.useColorTemperature) {
            const finalColor = light.finalColor;
            _uboVec.x = finalColor.x;
            _uboVec.y = finalColor.y;
            _uboVec.z = finalColor.z;
          }
          if (isHDR) {
            _uboVec.w = light.luminance * camera.exposure * lightMeterScale;
          } else {
            _uboVec.w = light.luminance;
          }
          setUniformOffset(this, 'cc_lightColor', Type.FLOAT4, _uboVec);
        }
        setBuiltinSpotLightConstants(light, camera) {
          const director = cclegacy.director;
          const pipeline = director.root.pipeline;
          const sceneData = pipeline.pipelineSceneData;
          const shadowInfo = sceneData.shadows;
          if (!this.addConstant('CCForwardLight', this.getParentLayout(), UpdateFrequency.PER_BATCH)) return;
          _uboVec.set(light.position.x, light.position.y, light.position.z, LightType.SPOT);
          setUniformOffset(this, 'cc_lightPos', Type.FLOAT4, _uboVec);
          _uboVec.set(light.size, light.range, light.spotAngle, shadowInfo.enabled && light.shadowEnabled && shadowInfo.type === ShadowType.ShadowMap ? 1 : 0);
          setUniformOffset(this, 'cc_lightSizeRangeAngle', Type.FLOAT4, _uboVec);
          _uboVec.set(light.direction.x, light.direction.y, light.direction.z, 0);
          setUniformOffset(this, 'cc_lightDir', Type.FLOAT4, _uboVec);
          const isHDR = sceneData.isHDR;
          const lightMeterScale = 10000.0;
          _uboVec.set(light.color.x, light.color.y, light.color.z, 0);
          if (light.useColorTemperature) {
            const finalColor = light.finalColor;
            _uboVec.x = finalColor.x;
            _uboVec.y = finalColor.y;
            _uboVec.z = finalColor.z;
          }
          if (isHDR) {
            _uboVec.w = light.luminance * camera.exposure * lightMeterScale;
          } else {
            _uboVec.w = light.luminance;
          }
          setUniformOffset(this, 'cc_lightColor', Type.FLOAT4, _uboVec);
          _uboVec.set(0, 0, 0, light.angleAttenuationStrength);
          setUniformOffset(this, 'cc_lightBoundingSizeVS', Type.FLOAT4, _uboVec);
        }
        setBuiltinPointLightConstants(light, camera) {
          const director = cclegacy.director;
          const pipeline = director.root.pipeline;
          const sceneData = pipeline.pipelineSceneData;
          if (!this.addConstant('CCForwardLight', this.getParentLayout(), UpdateFrequency.PER_BATCH)) return;
          _uboVec.set(light.position.x, light.position.y, light.position.z, LightType.POINT);
          setUniformOffset(this, 'cc_lightPos', Type.FLOAT4, _uboVec);
          _uboVec.set(0.0, light.range, 0.0, 0.0);
          setUniformOffset(this, 'cc_lightSizeRangeAngle', Type.FLOAT4, _uboVec);
          const isHDR = sceneData.isHDR;
          const lightMeterScale = 10000.0;
          if (light.useColorTemperature) {
            const finalColor = light.finalColor;
            _uboVec.x = finalColor.x;
            _uboVec.y = finalColor.y;
            _uboVec.z = finalColor.z;
          }
          if (isHDR) {
            _uboVec.w = light.luminance * camera.exposure * lightMeterScale;
          } else {
            _uboVec.w = light.luminance;
          }
          _uboVec.set(light.color.x, light.color.y, light.color.z, 0);
          setUniformOffset(this, 'cc_lightColor', Type.FLOAT4, _uboVec);
        }
        setBuiltinRangedDirectionalLightConstants(light, camera) {
          const director = cclegacy.director;
          const pipeline = director.root.pipeline;
          const sceneData = pipeline.pipelineSceneData;
          if (!this.addConstant('CCForwardLight', this.getParentLayout(), UpdateFrequency.PER_BATCH)) return;
          _uboVec.set(light.position.x, light.position.y, light.position.z, LightType.RANGED_DIRECTIONAL);
          setUniformOffset(this, 'cc_lightPos', Type.FLOAT4, _uboVec);
          _uboVec.set(light.right.x, light.right.y, light.right.z, 0.0);
          setUniformOffset(this, 'cc_lightSizeRangeAngle', Type.FLOAT4, _uboVec);
          _uboVec.set(light.direction.x, light.direction.y, light.direction.z, 0);
          setUniformOffset(this, 'cc_lightDir', Type.FLOAT4, _uboVec);
          const scale = light.scale;
          _uboVec.set(scale.x * 0.5, scale.y * 0.5, scale.z * 0.5, 0);
          setUniformOffset(this, 'cc_lightBoundingSizeVS', Type.FLOAT4, _uboVec);
          const isHDR = sceneData.isHDR;
          _uboVec.set(light.color.x, light.color.y, light.color.z, 0);
          if (light.useColorTemperature) {
            const finalColor = light.finalColor;
            _uboVec.x = finalColor.x;
            _uboVec.y = finalColor.y;
            _uboVec.z = finalColor.z;
          }
          if (isHDR) {
            _uboVec.w = light.illuminance * camera.exposure;
          } else {
            _uboVec.w = light.illuminance;
          }
          setUniformOffset(this, 'cc_lightColor', Type.FLOAT4, _uboVec);
        }
        hasSampler(name) {
          const id = this._lg.attributeIndex.get(name);
          if (id === undefined) {
            return false;
          }
          return this._data.samplers.has(id);
        }
        hasTexture(name) {
          const id = this._lg.attributeIndex.get(name);
          if (id === undefined) {
            return false;
          }
          return this._data.textures.has(id);
        }
        setCustomBehavior(name) {
          throw new Error('Method not implemented.');
        }
      });
      _export("WebSceneBuilder", WebSceneBuilder = class WebSceneBuilder extends WebSetter {
        constructor(data, layoutGraph, rg, sceneId, scene) {
          super(data, layoutGraph);
          this._renderGraph = void 0;
          this._scene = void 0;
          this._renderGraph = rg;
          this._scene = scene;
          this._vertID = sceneId;
        }
        update(data, layoutGraph, rg, sceneId, scene) {
          this._data = data;
          this._lg = layoutGraph;
          this._renderGraph = rg;
          this._scene = scene;
          this._vertID = sceneId;
        }
        useLightFrustum(light, csmLevel = 0, optCamera = undefined) {
          this._scene.light.light = light;
          this._scene.light.level = csmLevel;
          this._scene.light.culledByLight = true;
          if (optCamera) {
            this._scene.camera = optCamera;
          }
          if (this._scene.flags & SceneFlags.NON_BUILTIN) {
            return;
          }
          const queueId = this._renderGraph.getParent(this._vertID);
          const passId = this._renderGraph.getParent(queueId);
          const layoutName = this._renderGraph.getLayout(passId);
          setShadowUBOLightView(this, this._scene.camera, light, csmLevel, layoutName);
        }
      });
      _export("WebRenderQueueBuilder", WebRenderQueueBuilder = class WebRenderQueueBuilder extends WebSetter {
        constructor(data, renderGraph, layoutGraph, vertID, queue, pipeline) {
          super(data, layoutGraph);
          this._renderGraph = void 0;
          this._queue = void 0;
          this._pipeline = void 0;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._queue = queue;
          this._pipeline = pipeline;
        }
        update(data, renderGraph, layoutGraph, vertID, queue, pipeline) {
          this._data = data;
          this._lg = layoutGraph;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._queue = queue;
          this._pipeline = pipeline;
        }
        setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        }
        get name() {
          return this._renderGraph.getName(this._vertID);
        }
        set name(name) {
          this._renderGraph.setName(this._vertID, name);
        }
        addSceneOfCamera(camera, light, sceneFlags = SceneFlags.NONE, name = 'Camera') {
          const lightTarget = light.light;
          const sceneData = renderGraphPool.createSceneData(camera.scene, camera, sceneFlags, lightTarget && !(sceneFlags & SceneFlags.SHADOW_CASTER) ? CullingFlags.CAMERA_FRUSTUM | CullingFlags.LIGHT_BOUNDS : CullingFlags.CAMERA_FRUSTUM, lightTarget);
          this._renderGraph.addVertex(RenderGraphValue.Scene, sceneData, name, '', renderGraphPool.createRenderData(), false, this._vertID);
          const layoutName = this.getParentLayout();
          const scene = cclegacy.director.getScene();
          setCameraUBOValues(this, camera, this._pipeline, camera.scene || (scene ? scene.renderScene : null), layoutName);
          if (sceneFlags & SceneFlags.SHADOW_CASTER || lightTarget && lightTarget.type !== LightType.DIRECTIONAL) {
            setShadowUBOLightView(this, camera, lightTarget, light.level, layoutName);
          } else {
            setShadowUBOView(this, camera, layoutName);
          }
          setTextureUBOView(this, camera, this._pipeline);
          initGlobalDescBinding(this._data, layoutName);
        }
        addScene(camera, sceneFlags = SceneFlags.NONE, light = undefined) {
          const sceneData = renderGraphPool.createSceneData(camera.scene, camera, sceneFlags, light && !(sceneFlags & SceneFlags.SHADOW_CASTER) ? CullingFlags.CAMERA_FRUSTUM | CullingFlags.LIGHT_BOUNDS : CullingFlags.CAMERA_FRUSTUM, light);
          const renderData = renderGraphPool.createRenderData();
          const sceneId = this._renderGraph.addVertex(RenderGraphValue.Scene, sceneData, 'Scene', '', renderData, false, this._vertID);
          if (!(sceneFlags & SceneFlags.NON_BUILTIN)) {
            const layoutName = this.getParentLayout();
            setCameraUBOValues(this, camera, this._pipeline, camera.scene, layoutName);
            if (light && light.type !== LightType.DIRECTIONAL) setShadowUBOLightView(this, camera, light, 0, layoutName);else if (!(sceneFlags & SceneFlags.SHADOW_CASTER)) setShadowUBOView(this, camera, layoutName);
            setTextureUBOView(this, camera, this._pipeline);
            initGlobalDescBinding(this._data, layoutName);
          }
          const sceneBuilder = pipelinePool.sceneBuilder.add();
          sceneBuilder.update(renderData, this._lg, this._renderGraph, sceneId, sceneData);
          return sceneBuilder;
        }
        addFullscreenQuad(material, passID, sceneFlags = SceneFlags.NONE, name = 'Quad') {
          this._renderGraph.addVertex(RenderGraphValue.Blit, renderGraphPool.createBlit(material, passID, sceneFlags, null), name, '', renderGraphPool.createRenderData(), false, this._vertID);
          const layoutName = this.getParentLayout();
          const scene = cclegacy.director.getScene();
          setCameraUBOValues(this, null, this._pipeline, scene ? scene.renderScene : null, layoutName);
          if (sceneFlags & SceneFlags.SHADOW_CASTER) {
            // setShadowUBOLightView(this, light.light!, light.level);
          } else {
            setShadowUBOView(this, null, layoutName);
          }
          setTextureUBOView(this, null, this._pipeline);
          initGlobalDescBinding(this._data, layoutName);
        }
        addCameraQuad(camera, material, passID, sceneFlags = SceneFlags.NONE) {
          this._renderGraph.addVertex(RenderGraphValue.Blit, renderGraphPool.createBlit(material, passID, sceneFlags, camera), 'CameraQuad', '', renderGraphPool.createRenderData(), false, this._vertID);
          const layoutName = this.getParentLayout();
          const scene = cclegacy.director.getScene();
          setCameraUBOValues(this, camera, this._pipeline, camera.scene || (scene ? scene.renderScene : null), layoutName);
          if (sceneFlags & SceneFlags.SHADOW_CASTER) {
            // setShadowUBOLightView(this, light.light!, light.level);
          } else {
            setShadowUBOView(this, camera, layoutName);
          }
          setTextureUBOView(this, camera, this._pipeline);
          initGlobalDescBinding(this._data, layoutName);
        }
        clearRenderTarget(name, color = new Color()) {
          const clearView = renderGraphPool.createClearView(name, ClearFlagBit.COLOR);
          clearView.clearColor.copy(color);
          this._renderGraph.addVertex(RenderGraphValue.Clear, [clearView], 'ClearRenderTarget', '', renderGraphPool.createRenderData(), false, this._vertID);
        }
        setViewport(viewport) {
          const currViewport = pipelinePool.viewport.add();
          this._queue.viewport = currViewport.copy(viewport);
        }
        addCustomCommand(customBehavior) {
          throw new Error('Method not implemented.');
        }
      });
      _export("WebRenderSubpassBuilder", WebRenderSubpassBuilder = class WebRenderSubpassBuilder extends WebSetter {
        constructor(data, renderGraph, layoutGraph, vertID, subpass, pipeline) {
          super(data, layoutGraph);
          this._renderGraph = void 0;
          this._layoutID = void 0;
          this._subpass = void 0;
          this._pipeline = void 0;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._subpass = subpass;
          this._pipeline = pipeline;
          const layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        }
        update(data, renderGraph, layoutGraph, vertID, subpass, pipeline) {
          this._data = data;
          this._lg = layoutGraph;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._subpass = subpass;
          this._pipeline = pipeline;
          const layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        }
        addRenderTarget(name, accessType, slotName, loadOp, storeOp, color) {
          throw new Error('Method not implemented.');
        }
        setCustomShaderStages(name, stageFlags) {
          throw new Error('Method not implemented.');
        }
        setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        }
        get name() {
          return this._renderGraph.getName(this._vertID);
        }
        set name(name) {
          this._renderGraph.setName(this._vertID, name);
        }
        addDepthStencil(name, accessType, depthSlotName = '', stencilSlotName = '', loadOp = LoadOp.CLEAR, storeOp = StoreOp.STORE, depth = 1, stencil = 0, clearFlag = ClearFlagBit.DEPTH_STENCIL) {
          throw new Error('Method not implemented.');
        }
        addTexture(name, slotName, sampler = null) {
          throw new Error('Method not implemented.');
        }
        addStorageBuffer(name, accessType, slotName) {
          throw new Error('Method not implemented.');
        }
        addStorageImage(name, accessType, slotName) {
          throw new Error('Method not implemented.');
        }
        setViewport(viewport) {
          throw new Error('Method not implemented.');
        }
        addQueue(hint = QueueHint.RENDER_OPAQUE, layoutName = 'default') {
          const layoutId = this._lg.locateChild(this._layoutID, layoutName);
          if (DEBUG) {
            assert(layoutId !== 0xFFFFFFFF);
          }
          const queue = renderGraphPool.createRenderQueue(hint, layoutId);
          const data = renderGraphPool.createRenderData();
          const queueID = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, '', layoutName, data, false, this._vertID);
          const queueBuilder = pipelinePool.renderQueueBuilder.add();
          queueBuilder.update(data, this._renderGraph, this._lg, queueID, queue, this._pipeline);
          return queueBuilder;
        }
        get showStatistics() {
          return this._subpass.showStatistics;
        }
        set showStatistics(enable) {
          this._subpass.showStatistics = enable;
        }
      });
      _export("WebRenderPassBuilder", WebRenderPassBuilder = class WebRenderPassBuilder extends WebSetter {
        constructor(data, renderGraph, layoutGraph, resourceGraph, vertID, pass, pipeline) {
          super(data, layoutGraph);
          this._renderGraph = void 0;
          this._layoutID = void 0;
          this._pass = void 0;
          this._pipeline = void 0;
          this._resourceGraph = void 0;
          this._renderGraph = renderGraph;
          this._resourceGraph = resourceGraph;
          this._vertID = vertID;
          this._pass = pass;
          this._pipeline = pipeline;
          const layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        }
        update(data, renderGraph, layoutGraph, resourceGraph, vertID, pass, pipeline) {
          this._renderGraph = renderGraph;
          this._lg = layoutGraph;
          this._resourceGraph = resourceGraph;
          this._vertID = vertID;
          this._pass = pass;
          this._pipeline = pipeline;
          this._data = data;
          const layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        }
        setCustomShaderStages(name, stageFlags) {
          throw new Error('Method not implemented.');
        }
        setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        }
        setVersion(name, version) {
          this._pass.versionName = name;
          this._pass.version = version;
        }
        get name() {
          return this._renderGraph.getName(this._vertID);
        }
        set name(name) {
          this._renderGraph.setName(this._vertID, name);
        }
        addRenderTarget(name, loadOp = LoadOp.CLEAR, storeOp = StoreOp.STORE, clearColor = new Color()) {
          if (DEBUG) {
            assert(Boolean(name && this._resourceGraph.contains(name)));
          }
          let clearFlag = ClearFlagBit.COLOR;
          if (loadOp === LoadOp.LOAD) {
            clearFlag = ClearFlagBit.NONE;
          }
          const view = renderGraphPool.createRasterView('', AccessType.WRITE, AttachmentType.RENDER_TARGET, loadOp, storeOp, clearFlag);
          view.clearColor.copy(clearColor);
          this._pass.rasterViews.set(name, view);
        }
        addDepthStencil(name, loadOp = LoadOp.CLEAR, storeOp = StoreOp.STORE, depth = 1, stencil = 0, clearFlag = ClearFlagBit.DEPTH_STENCIL) {
          if (DEBUG) {
            assert(Boolean(name && this._resourceGraph.contains(name)));
          }
          const view = renderGraphPool.createRasterView('', AccessType.WRITE, AttachmentType.DEPTH_STENCIL, loadOp, storeOp, clearFlag);
          view.clearColor.set(depth, stencil, 0, 0);
          this._pass.rasterViews.set(name, view);
        }
        resolveRenderTarget(source, target) {
          // TODO
        }
        resolveDepthStencil(source, target, depthMode, stencilMode) {
          // TODO
        }
        _addComputeResource(name, accessType, slotName) {
          const view = renderGraphPool.createComputeView(slotName);
          view.accessType = accessType;
          if (DEBUG) {
            assert(Boolean(view.name));
            assert(Boolean(name && this._resourceGraph.contains(name)));
            const descriptorName = view.name;
            const descriptorID = this._lg.attributeIndex.get(descriptorName);
            assert(descriptorID !== undefined);
          }
          if (this._pass.computeViews.has(name)) {
            var _this$_pass$computeVi;
            (_this$_pass$computeVi = this._pass.computeViews.get(name)) === null || _this$_pass$computeVi === void 0 ? void 0 : _this$_pass$computeVi.push(view);
          } else {
            this._pass.computeViews.set(name, [view]);
          }
        }
        addTexture(name, slotName, sampler = null) {
          this._addComputeResource(name, AccessType.READ, slotName);
          if (sampler) {
            const descriptorID = this._lg.attributeIndex.get(slotName);
            this._data.samplers.set(descriptorID, sampler);
          }
        }
        addStorageBuffer(name, accessType, slotName) {
          this._addComputeResource(name, accessType, slotName);
        }
        addStorageImage(name, accessType, slotName) {
          this._addComputeResource(name, accessType, slotName);
        }
        addRenderSubpass(layoutName = '') {
          const name = 'Raster';
          const subpassID = this._pass.subpassGraph.numVertices();
          this._pass.subpassGraph.addVertex(name, renderGraphPool.createSubpass());
          const subpass = renderGraphPool.createRasterSubpass(subpassID, 1, 0);
          const data = renderGraphPool.createRenderData();
          const vertID = this._renderGraph.addVertex(RenderGraphValue.RasterSubpass, subpass, name, layoutName, data, false);
          const result = pipelinePool.renderSubpassBuilder.add();
          result.update(data, this._renderGraph, this._lg, vertID, subpass, this._pipeline);
          return result;
        }
        addQueue(hint = QueueHint.RENDER_OPAQUE, layoutName = 'default') {
          const layoutId = this._lg.locateChild(this._layoutID, layoutName);
          if (DEBUG) {
            assert(layoutId !== 0xFFFFFFFF);
          }
          const queue = renderGraphPool.createRenderQueue(hint, layoutId);
          const data = renderGraphPool.createRenderData();
          const queueID = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, '', layoutName, data, false, this._vertID);
          const result = pipelinePool.renderQueueBuilder.add();
          result.update(data, this._renderGraph, this._lg, queueID, queue, this._pipeline);
          return result;
        }
        addFullscreenQuad(material, passID, sceneFlags = SceneFlags.NONE, name = 'FullscreenQuad') {
          const queue = renderGraphPool.createRenderQueue(QueueHint.RENDER_TRANSPARENT);
          const queueId = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, 'Queue', '', renderGraphPool.createRenderData(), false, this._vertID);
          this._renderGraph.addVertex(RenderGraphValue.Blit, renderGraphPool.createBlit(material, passID, sceneFlags, null), name, '', renderGraphPool.createRenderData(), false, queueId);
        }
        addCameraQuad(camera, material, passID, sceneFlags, name = 'CameraQuad') {
          const queue = renderGraphPool.createRenderQueue(QueueHint.RENDER_TRANSPARENT);
          const queueId = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, 'Queue', '', renderGraphPool.createRenderData(), false, this._vertID);
          this._renderGraph.addVertex(RenderGraphValue.Blit, renderGraphPool.createBlit(material, passID, sceneFlags, camera), name, '', renderGraphPool.createRenderData(), false, queueId);
        }
        setViewport(viewport) {
          this._pass.viewport.copy(viewport);
        }
        get showStatistics() {
          return this._pass.showStatistics;
        }
        set showStatistics(enable) {
          this._pass.showStatistics = enable;
        }
      });
      _export("WebComputeQueueBuilder", WebComputeQueueBuilder = class WebComputeQueueBuilder extends WebSetter {
        constructor(data, renderGraph, layoutGraph, vertID, queue, pipeline) {
          super(data, layoutGraph);
          this._renderGraph = void 0;
          this._queue = void 0;
          this._pipeline = void 0;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._queue = queue;
          this._pipeline = pipeline;
        }
        update(data, renderGraph, layoutGraph, vertID, queue, pipeline) {
          this._data = data;
          this._lg = layoutGraph;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._queue = queue;
          this._pipeline = pipeline;
        }
        setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        }
        get name() {
          return this._renderGraph.getName(this._vertID);
        }
        set name(name) {
          this._renderGraph.setName(this._vertID, name);
        }
        addDispatch(threadGroupCountX, threadGroupCountY, threadGroupCountZ, material = null, passID = 0, name = 'Dispatch') {
          this._renderGraph.addVertex(RenderGraphValue.Dispatch, renderGraphPool.createDispatch(material, passID, threadGroupCountX, threadGroupCountY, threadGroupCountZ), name, '', renderGraphPool.createRenderData(), false, this._vertID);
        }
      });
      _export("WebComputePassBuilder", WebComputePassBuilder = class WebComputePassBuilder extends WebSetter {
        constructor(data, renderGraph, layoutGraph, resourceGraph, vertID, pass, pipeline) {
          super(data, layoutGraph);
          this._renderGraph = void 0;
          this._resourceGraph = void 0;
          this._layoutID = void 0;
          this._pass = void 0;
          this._pipeline = void 0;
          this._renderGraph = renderGraph;
          this._resourceGraph = resourceGraph;
          this._vertID = vertID;
          this._pass = pass;
          this._pipeline = pipeline;
          const layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        }
        update(data, renderGraph, layoutGraph, resourceGraph, vertID, pass, pipeline) {
          this._data = data;
          this._renderGraph = renderGraph;
          this._lg = layoutGraph;
          this._resourceGraph = resourceGraph;
          this._vertID = vertID;
          this._pass = pass;
          this._pipeline = pipeline;
          const layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        }
        setCustomShaderStages(name, stageFlags) {
          throw new Error('Method not implemented.');
        }
        setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        }
        get name() {
          return this._renderGraph.getName(this._vertID);
        }
        set name(name) {
          this._renderGraph.setName(this._vertID, name);
        }
        addTexture(name, slotName, sampler = null) {
          throw new Error('Method not implemented.');
        }
        addStorageBuffer(name, accessType, slotName) {
          this._addComputeResource(name, accessType, slotName);
        }
        addStorageImage(name, accessType, slotName) {
          this._addComputeResource(name, accessType, slotName);
        }
        addMaterialTexture(resourceName, flags) {
          throw new Error('Method not implemented.');
        }
        addQueue(layoutName = 'default') {
          const layoutId = this._lg.locateChild(this._layoutID, layoutName);
          if (DEBUG) {
            assert(layoutId !== 0xFFFFFFFF);
          }
          const queue = renderGraphPool.createRenderQueue(QueueHint.RENDER_OPAQUE, layoutId);
          const data = renderGraphPool.createRenderData();
          const queueID = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, '', layoutName, data, false, this._vertID);
          const computeQueueBuilder = pipelinePool.computeQueueBuilder.add();
          computeQueueBuilder.update(data, this._renderGraph, this._lg, queueID, queue, this._pipeline);
          return computeQueueBuilder;
        }
        _addComputeResource(name, accessType, slotName) {
          const view = renderGraphPool.createComputeView(slotName);
          view.accessType = accessType;
          if (DEBUG) {
            assert(Boolean(view.name));
            assert(Boolean(name && this._resourceGraph.contains(name)));
            const descriptorName = view.name;
            const descriptorID = this._lg.attributeIndex.get(descriptorName);
            assert(descriptorID !== undefined);
          }
          if (this._pass.computeViews.has(name)) {
            var _this$_pass$computeVi2;
            (_this$_pass$computeVi2 = this._pass.computeViews.get(name)) === null || _this$_pass$computeVi2 === void 0 ? void 0 : _this$_pass$computeVi2.push(view);
          } else {
            this._pass.computeViews.set(name, [view]);
          }
        }
      });
      _export("WebMovePassBuilder", WebMovePassBuilder = class WebMovePassBuilder {
        constructor(renderGraph, vertID, pass) {
          this._renderGraph = void 0;
          this._vertID = void 0;
          this._pass = void 0;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._pass = pass;
        }
        setCustomBehavior(name) {
          throw new Error('Method not implemented.');
        }
        get name() {
          return this._renderGraph.getName(this._vertID);
        }
        set name(name) {
          this._renderGraph.setName(this._vertID, name);
        }
        addPair(pair) {
          this._pass.movePairs.push(pair);
        }
      });
      _export("WebCopyPassBuilder", WebCopyPassBuilder = class WebCopyPassBuilder {
        constructor(renderGraph, vertID, pass) {
          this._renderGraph = void 0;
          this._vertID = void 0;
          this._pass = void 0;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._pass = pass;
        }
        addPair(pair) {
          throw new Error('Method not implemented.');
        }
        setCustomBehavior(name) {
          throw new Error('Method not implemented.');
        }
        get name() {
          return this._renderGraph.getName(this._vertID);
        }
        set name(name) {
          this._renderGraph.setName(this._vertID, name);
        }
      });
      _export("WebPipeline", WebPipeline = class WebPipeline {
        constructor(layoutGraph) {
          this._width = 0;
          this._height = 0;
          this._usesDeferredPipeline = false;
          this._copyPassMat = new Material();
          this._device = void 0;
          this._globalDSManager = void 0;
          this._defaultSampler = void 0;
          this._globalDescriptorSet = null;
          this._globalDescriptorSetInfo = null;
          this._globalDescriptorSetLayout = null;
          this._macros = {};
          this._pipelineSceneData = new PipelineSceneData();
          this._constantMacros = '';
          this._lightingMode = LightingMode.DEFAULT;
          this._profiler = null;
          this._pipelineUBO = new PipelineUBO();
          this._cameras = [];
          this._resourceUses = [];
          this._layoutGraph = void 0;
          this._resourceGraph = new ResourceGraph();
          this._renderGraph = null;
          this._compiler = null;
          this._executor = null;
          this._customPipelineName = '';
          this._forward = void 0;
          this._deferred = void 0;
          this._globalDescSetData = void 0;
          this.builder = null;
          this._combineSignY = 0;
          this._layoutGraph = layoutGraph;
        }
        get type() {
          return PipelineType.BASIC;
        }
        get capabilities() {
          return new PipelineCapabilities();
        }
        get enableCpuLightCulling() {
          if (!this._executor) {
            return true;
          }
          return this._executor._context.culling.enableLightCulling;
        }
        set enableCpuLightCulling(enable) {
          if (!this._executor) {
            return;
          }
          this._executor._context.culling.enableLightCulling = enable;
        }
        addCustomBuffer(name, info, type) {
          throw new Error('Method not implemented.');
        }
        addCustomTexture(name, info, type) {
          throw new Error('Method not implemented.');
        }
        addRenderWindow(name, format, width, height, renderWindow) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateRenderWindow(name, renderWindow);
            return resID;
          }
          // Objects need to be held for a long time, so there is no need to use pool management
          const desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = format;
          desc.flags = ResourceFlags.COLOR_ATTACHMENT;
          if (renderWindow.swapchain === null) {
            assert(renderWindow.framebuffer.colorTextures.length === 1 && renderWindow.framebuffer.colorTextures[0] !== null);
            desc.sampleCount = renderWindow.framebuffer.colorTextures[0].info.samples;
            return this._resourceGraph.addVertex(ResourceGraphValue.Framebuffer, renderWindow.framebuffer, name, desc, new ResourceTraits(ResourceResidency.EXTERNAL), new ResourceStates(), new SamplerInfo());
          } else {
            return this._resourceGraph.addVertex(ResourceGraphValue.Swapchain, new RenderSwapchain(renderWindow.swapchain), name, desc, new ResourceTraits(ResourceResidency.BACKBUFFER), new ResourceStates(), new SamplerInfo());
          }
        }
        updateRenderWindow(name, renderWindow) {
          const resId = this.resourceGraph.vertex(name);
          const desc = this.resourceGraph.getDesc(resId);
          desc.width = renderWindow.width;
          desc.height = renderWindow.height;
          const currFbo = this.resourceGraph._vertices[resId]._object;
          if (currFbo !== renderWindow.framebuffer) {
            this.resourceGraph._vertices[resId]._object = renderWindow.framebuffer;
          }
        }
        updateStorageBuffer(name, size, format = Format.UNKNOWN) {
          const resId = this.resourceGraph.vertex(name);
          const desc = this.resourceGraph.getDesc(resId);
          desc.width = size;
          if (format !== Format.UNKNOWN) {
            desc.format = format;
          }
        }
        updateRenderTarget(name, width, height, format = Format.UNKNOWN) {
          const resId = this.resourceGraph.vertex(name);
          const desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
          if (format !== Format.UNKNOWN) desc.format = format;
        }
        updateDepthStencil(name, width, height, format = Format.UNKNOWN) {
          const resId = this.resourceGraph.vertex(name);
          const desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
          if (format !== Format.UNKNOWN) desc.format = format;
        }
        updateStorageTexture(name, width, height, format = Format.UNKNOWN) {
          const resId = this.resourceGraph.vertex(name);
          const desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
          if (format !== Format.UNKNOWN) {
            desc.format = format;
          }
        }
        updateShadingRateTexture(name, width, height) {
          const resId = this.resourceGraph.vertex(name);
          const desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
        }
        addBuffer(name, size, flags, residency) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateBuffer(name, size);
            return resID;
          }
          const desc = new ResourceDesc();
          desc.dimension = ResourceDimension.BUFFER;
          desc.width = size;
          desc.flags = flags;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP));
        }
        updateBuffer(name, size) {
          this.updateResource(name, Format.UNKNOWN, size, 0, 0, 0, 0, SampleCount.X1);
        }
        addExternalTexture(name, texture, flags) {
          throw new Error('Method not implemented.');
        }
        updateExternalTexture(name, texture) {
          throw new Error('Method not implemented.');
        }
        addTexture(name, textureType, format, width, height, depth, arraySize, mipLevels, sampleCount, flags, residency) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateTexture(name, format, width, height, depth, arraySize, mipLevels, sampleCount);
            return resID;
          }
          const desc = new ResourceDesc();
          desc.dimension = getResourceDimension(textureType);
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = desc.dimension === ResourceDimension.TEXTURE3D ? depth : arraySize;
          desc.mipLevels = mipLevels;
          desc.format = format;
          desc.sampleCount = sampleCount;
          desc.flags = flags;
          desc.viewType = textureType;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP));
        }
        updateTexture(name, format, width, height, depth, arraySize, mipLevels, sampleCount) {
          this.updateResource(name, format, width, height, depth, arraySize, mipLevels, sampleCount);
        }
        addResource(name, dimension, format, width, height, depth, arraySize, mipLevels, sampleCount, flags, residency) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateResource(name, format, width, height, depth, arraySize, mipLevels, sampleCount);
            return resID;
          }
          if (dimension === ResourceDimension.BUFFER) {
            return this.addBuffer(name, width, flags, residency);
          } else {
            return this.addTexture(name, getTextureType(dimension, arraySize), format, width, height, depth, arraySize, mipLevels, sampleCount, flags, residency);
          }
        }
        updateResource(name, format, width, height, depth, arraySize, mipLevels, sampleCount) {
          const resId = this.resourceGraph.vertex(name);
          const desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = desc.dimension === ResourceDimension.TEXTURE3D ? depth : arraySize;
          desc.mipLevels = mipLevels;
          if (format !== Format.UNKNOWN) {
            desc.format = format;
          }
          desc.sampleCount = sampleCount;
        }
        containsResource(name) {
          return this._resourceGraph.contains(name);
        }
        addResolvePass(resolvePairs) {
          // TODO: implement resolve pass
          throw new Error('Method not implemented.');
        }
        addComputePass(passName) {
          const name = 'Compute';
          const pass = renderGraphPool.createComputePass();
          const data = renderGraphPool.createRenderData();
          const vertID = this._renderGraph.addVertex(RenderGraphValue.Compute, pass, name, passName, data, false);
          const result = pipelinePool.computePassBuilder.add();
          result.update(data, this._renderGraph, this._layoutGraph, this._resourceGraph, vertID, pass, this._pipelineSceneData);
          setComputeConstants(result, passName);
          initGlobalDescBinding(data, passName);
          return result;
        }
        addUploadPass(uploadPairs) {
          const name = 'UploadPass';
          const pass = renderGraphPool.createCopyPass();
          for (const up of uploadPairs) {
            pass.uploadPairs.push(up);
          }
          const vertID = this._renderGraph.addVertex(RenderGraphValue.Copy, pass, name, '', renderGraphPool.createRenderData(), false);
          // const result = new WebCopyPassBuilder(this._renderGraph!, vertID, pass);
        }

        addCopyPass(copyPairs) {
          // const renderData = new RenderData();
          // const vertID = this._renderGraph!.addVertex<RenderGraphValue.Copy>(
          //     RenderGraphValue.Copy, copyPass, 'copyPass', 'copy-pass', renderData, false,
          // );
          // const copyPass = new CopyPass();
          // copyPass.copyPairs.splice(0, copyPass.copyPairs.length, ...copyPairs);
          // const result = new WebCopyPassBuilder(this._renderGraph!, vertID, copyPass);
          // return result;
          for (const pair of copyPairs) {
            const targetName = pair.target;
            const tarVerId = this.resourceGraph.find(targetName);
            if (DEBUG) {
              const srcVerId = this.resourceGraph.find(pair.source);
              assert(srcVerId !== 0xFFFFFFFF, `The resource named ${pair.source} was not found in Resource Graph.`);
              assert(tarVerId !== 0xFFFFFFFF, `The resource named ${targetName} was not found in Resource Graph.`);
            }
            const resDesc = this.resourceGraph.getDesc(tarVerId);
            const currRaster = this.addRenderPass(resDesc.width, resDesc.height, 'copy-pass');
            currRaster.addRenderTarget(targetName, LoadOp.CLEAR, StoreOp.STORE, pipelinePool.createColor());
            currRaster.addTexture(pair.source, 'outputResultMap');
            currRaster.addQueue(QueueHint.NONE).addFullscreenQuad(this._copyPassMat, 0, SceneFlags.NONE);
          }
        }
        _generateConstantMacros(clusterEnabled) {
          let str = '';
          str += `#define CC_DEVICE_SUPPORT_FLOAT_TEXTURE ${this._device.getFormatFeatures(Format.RGBA32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) ? 1 : 0}\n`;
          // str += `#define CC_ENABLE_CLUSTERED_LIGHT_CULLING ${clusterEnabled ? 1 : 0}\n`; // defined in material
          str += `#define CC_DEVICE_MAX_VERTEX_UNIFORM_VECTORS ${this._device.capabilities.maxVertexUniformVectors}\n`;
          str += `#define CC_DEVICE_MAX_FRAGMENT_UNIFORM_VECTORS ${this._device.capabilities.maxFragmentUniformVectors}\n`;
          str += `#define CC_DEVICE_CAN_BENEFIT_FROM_INPUT_ATTACHMENT ${this._device.hasFeature(Feature.INPUT_ATTACHMENT_BENEFIT) ? 1 : 0}\n`;
          str += `#define CC_PLATFORM_ANDROID_AND_WEBGL ${systemInfo.os === OS.ANDROID && systemInfo.isBrowser ? 1 : 0}\n`;
          str += `#define CC_ENABLE_WEBGL_HIGHP_STRUCT_VALUES ${macro.ENABLE_WEBGL_HIGHP_STRUCT_VALUES ? 1 : 0}\n`;
          const jointUniformCapacity = UBOSkinning.JOINT_UNIFORM_CAPACITY;
          str += `#define CC_JOINT_UNIFORM_CAPACITY ${jointUniformCapacity}\n`;
          this._constantMacros = str;
          this._layoutGraph.constantMacros = this._constantMacros;
        }
        setCustomPipelineName(name) {
          this._customPipelineName = name;
          if (this._customPipelineName === 'Deferred') {
            this._usesDeferredPipeline = true;
          }
        }
        getGlobalDescriptorSetData() {
          const stageId = this.layoutGraph.locateChild(this.layoutGraph.nullVertex(), 'default');
          assert(stageId !== 0xFFFFFFFF);
          const layout = this.layoutGraph.getLayout(stageId);
          const layoutData = layout.descriptorSets.get(UpdateFrequency.PER_PASS);
          return layoutData;
        }
        _initCombineSignY() {
          const device = this._device;
          this._combineSignY = device.capabilities.screenSpaceSignY * 0.5 + 0.5 << 1 | device.capabilities.clipSpaceSignY * 0.5 + 0.5;
        }
        getCombineSignY() {
          return this._combineSignY;
        }
        get globalDescriptorSetData() {
          return this._globalDescSetData;
        }
        get defaultSampler() {
          return this._defaultSampler;
        }
        get defaultTexture() {
          return builtinResMgr.get('default-texture').getGFXTexture();
        }
        _compileMaterial() {
          this._copyPassMat.initialize({
            effectName: 'pipeline/copy-pass'
          });
          for (let i = 0; i < this._copyPassMat.passes.length; ++i) {
            this._copyPassMat.passes[i].tryCompile();
          }
        }
        activate(swapchain) {
          this._device = deviceManager.gfxDevice;
          pipelinePool = new PipelinePool();
          renderGraphPool = pipelinePool.renderGraphPool;
          createGfxDescriptorSetsAndPipelines(this._device, this._layoutGraph);
          this._globalDSManager = new GlobalDSManager(this._device);
          this._globalDescSetData = this.getGlobalDescriptorSetData();
          this._globalDescriptorSetLayout = this._globalDescSetData.descriptorSetLayout;
          this._globalDescriptorSetInfo = new DescriptorSetInfo(this._globalDescriptorSetLayout);
          this._globalDescriptorSet = this._device.createDescriptorSet(this._globalDescriptorSetInfo);
          this._globalDSManager.globalDescriptorSet = this.globalDescriptorSet;
          this._compileMaterial();
          this.setMacroBool('CC_USE_HDR', this._pipelineSceneData.isHDR);
          this.setMacroBool('CC_USE_FLOAT_OUTPUT', macro.ENABLE_FLOAT_OUTPUT && supportsRGBA16HalfFloatTexture(this._device));
          this._generateConstantMacros(false);
          this._pipelineSceneData.activate(this._device);
          this._pipelineUBO.activate(this._device, this);
          this._initCombineSignY();
          const isFloat = supportsR32FloatTexture(this._device) ? 0 : 1;
          this.setMacroInt('CC_SHADOWMAP_FORMAT', isFloat);
          // 0: SHADOWMAP_LINER_DEPTH_OFF, 1: SHADOWMAP_LINER_DEPTH_ON.
          const isLinear = this._device.gfxAPI === API.WEBGL ? 1 : 0;
          this.setMacroInt('CC_SHADOWMAP_USE_LINEAR_DEPTH', isLinear);
          const director = cclegacy.director;
          const root = director.root;
          this._defaultSampler = root.device.getSampler(_samplerPointInfo);
          // 0: UNIFORM_VECTORS_LESS_EQUAL_64, 1: UNIFORM_VECTORS_GREATER_EQUAL_125.
          this.pipelineSceneData.csmSupported = this.device.capabilities.maxFragmentUniformVectors >= WebPipeline.CSM_UNIFORM_VECTORS + WebPipeline.GLOBAL_UNIFORM_VECTORS;
          this.setMacroBool('CC_SUPPORT_CASCADED_SHADOW_MAP', this.pipelineSceneData.csmSupported);

          // 0: CC_SHADOW_NONE, 1: CC_SHADOW_PLANAR, 2: CC_SHADOW_MAP
          this.setMacroInt('CC_SHADOW_TYPE', 0);

          // 0: PCFType.HARD, 1: PCFType.SOFT, 2: PCFType.SOFT_2X, 3: PCFType.SOFT_4X
          this.setMacroInt('CC_DIR_SHADOW_PCF_TYPE', PCFType.HARD);

          // 0: CC_DIR_LIGHT_SHADOW_NONE, 1: CC_DIR_LIGHT_SHADOW_UNIFORM, 2: CC_DIR_LIGHT_SHADOW_CASCADED, 3: CC_DIR_LIGHT_SHADOW_VARIANCE
          this.setMacroInt('CC_DIR_LIGHT_SHADOW_TYPE', 0);

          // 0: CC_CASCADED_LAYERS_TRANSITION_OFF, 1: CC_CASCADED_LAYERS_TRANSITION_ON
          this.setMacroBool('CC_CASCADED_LAYERS_TRANSITION', false);

          // enable the deferred pipeline
          if (this.usesDeferredPipeline) {
            this.setMacroInt('CC_PIPELINE_TYPE', 1);
          }
          this._forward = new ForwardPipelineBuilder();
          this._deferred = new DeferredPipelineBuilder();
          this.builder = new CustomPipelineBuilder();
          return true;
        }
        destroy() {
          var _this$_globalDSManage, _this$_globalDSManage2, _this$_pipelineSceneD;
          (_this$_globalDSManage = this._globalDSManager) === null || _this$_globalDSManage === void 0 ? void 0 : _this$_globalDSManage.globalDescriptorSet.destroy();
          (_this$_globalDSManage2 = this._globalDSManager) === null || _this$_globalDSManage2 === void 0 ? void 0 : _this$_globalDSManage2.destroy();
          (_this$_pipelineSceneD = this._pipelineSceneData) === null || _this$_pipelineSceneD === void 0 ? void 0 : _this$_pipelineSceneD.destroy();
          return true;
        }
        get device() {
          return this._device;
        }
        get lightingMode() {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return this._lightingMode;
        }
        set lightingMode(mode) {
          this._lightingMode = mode;
        }
        get usesDeferredPipeline() {
          return this._usesDeferredPipeline;
        }
        get macros() {
          return this._macros;
        }
        get globalDSManager() {
          return this._globalDSManager;
        }
        get descriptorSetLayout() {
          return this._globalDSManager.descriptorSetLayout;
        }
        get descriptorSet() {
          return this._globalDSManager.globalDescriptorSet;
        }
        get globalDescriptorSet() {
          return this._globalDescriptorSet;
        }
        get globalDescriptorSetInfo() {
          return this._globalDescriptorSetInfo;
        }
        get commandBuffers() {
          return [this._device.commandBuffer];
        }
        get pipelineSceneData() {
          return this._pipelineSceneData;
        }
        get constantMacros() {
          return this._constantMacros;
        }
        get profiler() {
          return this._profiler;
        }
        set profiler(profiler) {
          this._profiler = profiler;
        }
        get geometryRenderer() {
          throw new Error('Method not implemented.');
        }
        get shadingScale() {
          return this._pipelineSceneData.shadingScale;
        }
        set shadingScale(scale) {
          this._pipelineSceneData.shadingScale = scale;
        }
        getMacroString(name) {
          const str = this._macros[name];
          if (str === undefined) {
            return '';
          }
          return str;
        }
        getMacroInt(name) {
          const value = this._macros[name];
          if (value === undefined) {
            return 0;
          }
          return value;
        }
        getMacroBool(name) {
          const value = this._macros[name];
          if (value === undefined) {
            return false;
          }
          return value;
        }
        getSamplerInfo(name) {
          if (this.containsResource(name)) {
            const verId = this._resourceGraph.vertex(name);
            return this._resourceGraph.getSampler(verId);
          }
          return null;
        }
        setMacroString(name, value) {
          this._macros[name] = value;
        }
        setMacroInt(name, value) {
          this._macros[name] = value;
        }
        setMacroBool(name, value) {
          this._macros[name] = value;
        }
        onGlobalPipelineStateChanged() {
          const builder = cclegacy.rendering.getCustomPipeline(macro.CUSTOM_PIPELINE_NAME);
          if (builder) {
            if (typeof builder.onGlobalPipelineStateChanged === 'function') {
              builder.onGlobalPipelineStateChanged();
            }
          }
        }
        beginSetup() {
          if (!this._renderGraph) this._renderGraph = new RenderGraph();
          pipelinePool.reset();
        }
        endSetup() {
          this.compile();
        }
        addStorageBuffer(name, format, size, residency = ResourceResidency.MANAGED) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateStorageBuffer(name, size, format);
            return resID;
          }
          const desc = new ResourceDesc();
          desc.dimension = ResourceDimension.BUFFER;
          desc.width = size;
          desc.height = 1;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = format;
          desc.flags = ResourceFlags.STORAGE;
          if (residency === ResourceResidency.PERSISTENT) {
            return this._resourceGraph.addVertex(ResourceGraphValue.PersistentBuffer, new PersistentBuffer(), name, desc, new ResourceTraits(ResourceResidency.PERSISTENT), new ResourceStates(), new SamplerInfo());
          }
          return this._resourceGraph.addVertex(ResourceGraphValue.ManagedBuffer, new ManagedBuffer(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo());
        }
        addRenderTarget(name, format, width, height, residency = ResourceResidency.MANAGED) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateRenderTarget(name, width, height, format);
            return resID;
          }
          const desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = format;
          desc.sampleCount = SampleCount.X1;
          desc.flags = ResourceFlags.COLOR_ATTACHMENT | ResourceFlags.SAMPLED;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP));
        }
        addDepthStencil(name, format, width, height, residency = ResourceResidency.MANAGED) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateDepthStencil(name, width, height, format);
            return resID;
          }
          const desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = format;
          desc.sampleCount = SampleCount.X1;
          desc.flags = ResourceFlags.DEPTH_STENCIL_ATTACHMENT | ResourceFlags.SAMPLED;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE));
        }
        addStorageTexture(name, format, width, height, residency = ResourceResidency.MANAGED) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateStorageTexture(name, width, height, format);
            return resID;
          }
          const desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = format;
          desc.flags = ResourceFlags.STORAGE | ResourceFlags.SAMPLED;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE));
        }
        addShadingRateTexture(name, width, height, residency = ResourceResidency.MANAGED) {
          const resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.addShadingRateTexture(name, width, height);
            return resID;
          }
          const desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = Format.R8UI;
          desc.flags = ResourceFlags.SHADING_RATE | ResourceFlags.STORAGE | ResourceFlags.SAMPLED;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP));
        }
        beginFrame() {
          // noop
        }
        update(camera) {
          // noop
        }
        endFrame() {
          var _this$renderGraph;
          (_this$renderGraph = this.renderGraph) === null || _this$renderGraph === void 0 ? void 0 : _this$renderGraph.clear();
        }
        compile() {
          if (!this._renderGraph) {
            throw new Error('RenderGraph cannot be built without being created');
          }
          if (!this._compiler) {
            this._compiler = new Compiler(this, this._renderGraph, this._resourceGraph, this._layoutGraph);
          }
          this._compiler.compile(this._renderGraph);
        }
        execute() {
          if (!this._renderGraph) {
            throw new Error('Cannot run without creating rendergraph');
          }
          if (!this._executor) {
            this._executor = new Executor(this, this._pipelineUBO, this._device, this._resourceGraph, this.layoutGraph, this.width, this.height);
          }
          this._executor.resize(this.width, this.height);
          this._executor.execute(this._renderGraph);
        }
        _applySize(cameras) {
          let newWidth = this._width;
          let newHeight = this._height;
          cameras.forEach(camera => {
            const window = camera.window;
            newWidth = Math.max(window.width, newWidth);
            newHeight = Math.max(window.height, newHeight);
            if (!this._cameras.includes(camera)) {
              this._cameras.push(camera);
            }
          });
          if (newWidth !== this._width || newHeight !== this._height) {
            this._width = newWidth;
            this._height = newHeight;
          }
        }
        get width() {
          return this._width;
        }
        get height() {
          return this._height;
        }
        render(cameras) {
          if (cameras.length === 0) {
            return;
          }
          this._applySize(cameras);
          decideProfilerCamera(cameras);
          // build graph
          this.beginFrame();
          this.execute();
          this.endFrame();
        }
        addBuiltinReflectionProbePass(camera) {
          const reflectionProbeManager = cclegacy.internal.reflectionProbeManager;
          if (!reflectionProbeManager) return;
          const probes = reflectionProbeManager.getProbes();
          if (probes.length === 0) return;
          for (let i = 0; i < probes.length; i++) {
            const probe = probes[i];
            if (probe.needRender) {
              if (probes[i].probeType === ProbeType.PLANAR) {
                buildReflectionProbePass(camera, this, probe, probe.realtimePlanarTexture.window, 0);
              } else if (EDITOR) {
                for (let faceIdx = 0; faceIdx < probe.bakedCubeTextures.length; faceIdx++) {
                  probe.updateCameraDir(faceIdx);
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  buildReflectionProbePass(camera, this, probe, probe.bakedCubeTextures[faceIdx].window, faceIdx);
                }
                probe.needRender = false;
              }
            }
          }
        }
        addRenderPassImpl(width, height, layoutName, count = 1, quality = 0) {
          if (DEBUG) {
            const stageId = this.layoutGraph.locateChild(this.layoutGraph.nullVertex(), layoutName);
            assert(stageId !== 0xFFFFFFFF);
            const layout = this.layoutGraph.getLayout(stageId);
            assert(Boolean(layout));
            assert(Boolean(layout.descriptorSets.get(UpdateFrequency.PER_PASS)));
          }
          const name = 'Raster';
          const pass = renderGraphPool.createRasterPass();
          pass.viewport.width = width;
          pass.viewport.height = height;
          pass.count = count;
          pass.quality = quality;
          const data = renderGraphPool.createRenderData();
          const vertID = this._renderGraph.addVertex(RenderGraphValue.RasterPass, pass, name, layoutName, data, false);
          const result = pipelinePool.renderPassBuilder.add();
          result.update(data, this._renderGraph, this._layoutGraph, this._resourceGraph, vertID, pass, this._pipelineSceneData);
          this._updateRasterPassConstants(result, width, height, layoutName);
          initGlobalDescBinding(data, layoutName);
          return result;
        }
        addRenderPass(width, height, layoutName = 'default') {
          return this.addRenderPassImpl(width, height, layoutName);
        }
        addMultisampleRenderPass(width, height, count, quality, layoutName = 'default') {
          assert(count > 1);
          return this.addRenderPassImpl(width, height, layoutName, count, quality);
        }
        getDescriptorSetLayout(shaderName, freq) {
          const lg = this._layoutGraph;
          const phaseID = lg.shaderLayoutIndex.get(shaderName);
          const pplLayout = lg.getLayout(phaseID);
          const setLayout = pplLayout.descriptorSets.get(freq);
          return setLayout.descriptorSetLayout;
        }
        get renderGraph() {
          return this._renderGraph;
        }
        get resourceGraph() {
          return this._resourceGraph;
        }
        get layoutGraph() {
          return this._layoutGraph;
        }
        get resourceUses() {
          return this._resourceUses;
        }
        _updateRasterPassConstants(setter, width, height, layoutName = 'default') {
          const director = cclegacy.director;
          const root = director.root;
          const shadingWidth = width;
          const shadingHeight = height;
          const pipeline = root.pipeline;
          const layoutGraph = pipeline.layoutGraph;
          // Global
          if (!setter.addConstant('CCGlobal', layoutName)) return;
          _uboVec.set(root.cumulativeTime, root.frameTime, director.getTotalFrames());
          setUniformOffset(setter, 'cc_time', Type.FLOAT4, _uboVec);
          _uboVec.set(shadingWidth, shadingHeight, 1.0 / shadingWidth, 1.0 / shadingHeight);
          setUniformOffset(setter, 'cc_screenSize', Type.FLOAT4, _uboVec);
          _uboVec.set(shadingWidth, shadingHeight, 1.0 / shadingWidth, 1.0 / shadingHeight);
          setUniformOffset(setter, 'cc_nativeSize', Type.FLOAT4, _uboVec);
          const debugView = root.debugView;
          _uboVec.set(0.0, 0.0, 0.0, 0.0);
          if (debugView) {
            const debugPackVec = [debugView.singleMode, 0.0, 0.0, 0.0];
            for (let i = DebugViewCompositeType.DIRECT_DIFFUSE; i < DebugViewCompositeType.MAX_BIT_COUNT; i++) {
              const idx = i >> 3;
              const bit = i % 8;
              debugPackVec[idx + 1] += (debugView.isCompositeModeEnabled(i) ? 1.0 : 0.0) * 10.0 ** bit;
            }
            debugPackVec[3] += (debugView.lightingWithAlbedo ? 1.0 : 0.0) * 10.0 ** 6.0;
            debugPackVec[3] += (debugView.csmLayerColoration ? 1.0 : 0.0) * 10.0 ** 7.0;
            _uboVec.set(debugPackVec[0], debugPackVec[1], debugPackVec[2], debugPackVec[3]);
          }
          setUniformOffset(setter, 'cc_debug_view_mode', Type.FLOAT4, _uboVec);
        }
      });
      WebPipeline.MAX_BLOOM_FILTER_PASS_NUM = 6;
      // csm uniform used vectors count
      WebPipeline.CSM_UNIFORM_VECTORS = 61;
      // all global uniform used vectors count
      WebPipeline.GLOBAL_UNIFORM_VECTORS = 64;
    }
  };
});