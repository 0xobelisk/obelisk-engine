System.register("q-bundled:///fs/cocos/rendering/custom/web-pipeline.js", ["pal/system-info", "../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "../../core/index.js", "./types.js", "./render-graph.js", "./pipeline.js", "../pipeline-scene-data.js", "../../render-scene/scene/index.js", "../../render-scene/scene/light.js", "./layout-graph.js", "./executor.js", "../global-descriptor-set-manager.js", "../define.js", "../../../pal/system-info/enum-type/index.js", "./compiler.js", "../pipeline-ubo.js", "../../asset/asset-manager/index.js", "../../asset/assets/index.js", "./builtin-pipelines.js", "./custom-pipeline.js", "../pipeline-funcs.js", "../debug-view.js", "./utils.js", "./define.js", "./layout-graph-utils.js", "../../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var systemInfo, DEBUG, EDITOR, Feature, Format, FormatFeatureBit, ClearFlagBit, deviceManager, Viewport, API, Type, SamplerInfo, Filter, Address, DescriptorSetInfo, LoadOp, StoreOp, TextureType, SampleCount, Color, ComparisonFunc, Mat4, toRadian, Vec3, Vec4, assert, macro, cclegacy, RecyclePool, AccessType, AttachmentType, LightingMode, QueueHint, RenderCommonObjectPool, RenderCommonObjectPoolSettings, ResourceDimension, ResourceFlags, ResourceResidency, SceneFlags, UpdateFrequency, ComputePass, RasterPass, RasterSubpass, RenderData, RenderGraph, RenderGraphComponent, RenderGraphValue, RenderQueue, RenderSwapchain, ResourceDesc, ResourceGraph, ResourceGraphValue, ResourceStates, ResourceTraits, SceneData, PersistentBuffer, RenderGraphObjectPool, RenderGraphObjectPoolSettings, CullingFlags, ManagedResource, ManagedBuffer, PipelineType, PipelineCapabilities, PipelineSceneData, Camera, ShadowType, CSMLevel, PCFType, ProbeType, LightType, LayoutGraphData, Executor, GlobalDSManager, supportsR32FloatTexture, supportsRGBA16HalfFloatTexture, UBOSkinning, OS, Compiler, PipelineUBO, builtinResMgr, Material, DeferredPipelineBuilder, ForwardPipelineBuilder, CustomPipelineBuilder, decideProfilerCamera, DebugViewCompositeType, getUBOTypeCount, buildReflectionProbePass, initGlobalDescBinding, createGfxDescriptorSetsAndPipelines, legacyCC, _uboVec, _uboVec3, _uboCol, _matView, _mulMatView, uniformOffset, _samplerPointInfo, renderCommonObjectSetting, renderGraphPoolSetting, PipelinePool, pipelinePool, renderGraphPool, WebSetter, WebSceneBuilder, WebRenderQueueBuilder, WebRenderSubpassBuilder, WebRenderPassBuilder, WebComputeQueueBuilder, WebComputePassBuilder, WebMovePassBuilder, WebCopyPassBuilder, WebPipeline;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
  function setUniformOffset(setter, uniformName, uniformType, value, idx) {
    if (idx === void 0) {
      idx = 0;
    }
    var uniformOffset = setter.getUniformOffset(uniformName, uniformType, idx);
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
  function setShadowUBOLightView(setter, camera, light, csmLevel, layout) {
    if (layout === void 0) {
      layout = 'default';
    }
    var director = cclegacy.director;
    var pipeline = director.root.pipeline;
    var device = pipeline.device;
    var sceneData = pipeline.pipelineSceneData;
    var shadowInfo = sceneData.shadows;
    if (shadowInfo.type === ShadowType.Planar) {
      return;
    }
    var csmLayers = sceneData.csmLayers;
    var packing = supportsR32FloatTexture(device) ? 0.0 : 1.0;
    var cap = pipeline.device.capabilities;
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
          var mainLight = light;
          if (shadowInfo.enabled && mainLight && mainLight.shadowEnabled) {
            if (shadowInfo.type === ShadowType.ShadowMap) {
              var near = 0.1;
              var far = 0;
              var matShadowView;
              var matShadowProj;
              var matShadowViewProj;
              var levelCount = 0;
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
                var layer = csmLayers.layers[csmLevel];
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
          var spotLight = light;
          if (shadowInfo.enabled && spotLight && spotLight.shadowEnabled) {
            Mat4.invert(_matView, spotLight.node.getWorldMatrix());
            setUniformOffset(setter, 'cc_matLightView', Type.MAT4, _matView);
            Mat4.perspective(_mulMatView, spotLight.angle, 1.0, 0.001, spotLight.range, true, cap.clipSpaceMinZ, cap.clipSpaceSignY, 0);
            var matShadowInvProj = _mulMatView.clone().invert();
            var _matShadowProj = _mulMatView.clone();
            Mat4.multiply(_matView, _mulMatView, _matView);
            setUniformOffset(setter, 'cc_matLightViewProj', Type.MAT4, _matView);
            _uboVec.set(0.01, light.range, 0.0, 0.0);
            setUniformOffset(setter, 'cc_shadowNFLSInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(shadowInfo.size.x, shadowInfo.size.y, spotLight.shadowPcf, spotLight.shadowBias);
            setUniformOffset(setter, 'cc_shadowWHPBInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(LightType.SPOT, packing, spotLight.shadowNormalBias, 0.0);
            setUniformOffset(setter, 'cc_shadowLPNNInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(_matShadowProj.m10, _matShadowProj.m14, _matShadowProj.m11, _matShadowProj.m15);
            setUniformOffset(setter, 'cc_shadowProjDepthInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(matShadowInvProj.m10, matShadowInvProj.m14, matShadowInvProj.m11, matShadowInvProj.m15);
            setUniformOffset(setter, 'cc_shadowInvProjDepthInfo', Type.FLOAT4, _uboVec);
            _uboVec.set(_matShadowProj.m00, _matShadowProj.m05, 1.0 / _matShadowProj.m00, 1.0 / _matShadowProj.m05);
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
    var shadowMapSize = shadowInfo.size.x;
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
  function setShadowUBOView(setter, camera, layout) {
    if (layout === void 0) {
      layout = 'default';
    }
    var director = cclegacy.director;
    var pipeline = director.root.pipeline;
    var device = pipeline.device;
    var scene = director.getScene();
    var mainLight = camera && camera.scene ? camera.scene.mainLight : scene ? scene.renderScene.mainLight : null;
    var sceneData = pipeline.pipelineSceneData;
    var shadowInfo = sceneData.shadows;
    var csmLayers = sceneData.csmLayers;
    var csmSupported = sceneData.csmSupported;
    var packing = supportsR32FloatTexture(device) ? 0.0 : 1.0;
    var hasCCShadow = setter.addConstant('CCShadow', layout);
    var hasCCCSM = setter.addConstant('CCCSM', layout);
    if (mainLight && shadowInfo.enabled) {
      if (shadowInfo.type === ShadowType.ShadowMap) {
        if (mainLight.shadowEnabled) {
          if (mainLight.shadowFixedArea || mainLight.csmLevel === CSMLevel.LEVEL_1 || !csmSupported) {
            if (hasCCShadow) {
              setter.setCurrConstant('CCShadow', layout);
              var matShadowView = csmLayers.specialLayer.matShadowView;
              var matShadowProj = csmLayers.specialLayer.matShadowProj;
              var matShadowViewProj = csmLayers.specialLayer.matShadowViewProj;
              var near = mainLight.shadowNear;
              var far = mainLight.shadowFar;
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
              var layerThreshold = getPCFRadius(shadowInfo, mainLight);
              setter.setCurrConstant('CCCSM', layout);
              for (var i = 0; i < mainLight.csmLevel; i++) {
                var layer = csmLayers.layers[i];
                var _matShadowView = layer.matShadowView;
                _uboVec.set(_matShadowView.m00, _matShadowView.m04, _matShadowView.m08, layerThreshold);
                setUniformOffset(setter, 'cc_csmViewDir0', Type.FLOAT4, _uboVec, i);
                _uboVec.set(_matShadowView.m01, _matShadowView.m05, _matShadowView.m09, layer.splitCameraNear);
                setUniformOffset(setter, 'cc_csmViewDir1', Type.FLOAT4, _uboVec, i);
                _uboVec.set(_matShadowView.m02, _matShadowView.m06, _matShadowView.m10, layer.splitCameraFar);
                setUniformOffset(setter, 'cc_csmViewDir2', Type.FLOAT4, _uboVec, i);
                var csmAtlas = layer.csmAtlas;
                setUniformOffset(setter, 'cc_csmAtlas', Type.FLOAT4, csmAtlas, i);
                var _matShadowViewProj = layer.matShadowViewProj;
                setUniformOffset(setter, 'cc_matCSMViewProj', Type.MAT4, _matShadowViewProj, i);
                var _matShadowProj2 = layer.matShadowProj;
                _uboVec.set(_matShadowProj2.m10, _matShadowProj2.m14, _matShadowProj2.m11, _matShadowProj2.m15);
                setUniformOffset(setter, 'cc_csmProjDepthInfo', Type.FLOAT4, _uboVec, i);
                _uboVec.set(_matShadowProj2.m00, _matShadowProj2.m05, 1.0 / _matShadowProj2.m00, 1.0 / _matShadowProj2.m05);
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
    var director = cclegacy.director;
    var root = director.root;
    var pipeline = root.pipeline;
    setter.addConstant('CCConst', layoutName);
  }
  function setCameraUBOValues(setter, camera, cfg, scene, layoutName) {
    var _skybox$envmap;
    if (layoutName === void 0) {
      layoutName = 'default';
    }
    var director = cclegacy.director;
    var root = director.root;
    var pipeline = root.pipeline;
    var shadowInfo = cfg.shadows;
    var skybox = cfg.skybox;
    var shadingScale = cfg.shadingScale;
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
    var mainLight = scene && scene.mainLight;
    if (mainLight) {
      var shadowEnable = mainLight.shadowEnabled && shadowInfo.type === ShadowType.ShadowMap ? 1.0 : 0.0;
      _uboVec.set(mainLight.direction.x, mainLight.direction.y, mainLight.direction.z, shadowEnable);
      setUniformOffset(setter, 'cc_mainLitDir', Type.FLOAT4, _uboVec);
      var r = mainLight.color.x;
      var g = mainLight.color.y;
      var b = mainLight.color.z;
      if (mainLight.useColorTemperature) {
        r *= mainLight.colorTemperatureRGB.x;
        g *= mainLight.colorTemperatureRGB.y;
        b *= mainLight.colorTemperatureRGB.z;
      }
      var w = mainLight.illuminance;
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
    var ambient = cfg.ambient;
    var skyColor = ambient.skyColor;
    if (cfg.isHDR) {
      skyColor.w = ambient.skyIllum * (camera ? camera.exposure : 1);
    } else {
      skyColor.w = ambient.skyIllum;
    }
    _uboVec.set(skyColor.x, skyColor.y, skyColor.z, skyColor.w);
    setUniformOffset(setter, 'cc_ambientSky', Type.FLOAT4, _uboVec);
    _uboVec.set(ambient.groundAlbedo.x, ambient.groundAlbedo.y, ambient.groundAlbedo.z, skybox.envmap ? (_skybox$envmap = skybox.envmap) === null || _skybox$envmap === void 0 ? void 0 : _skybox$envmap.mipmapLevel : 1.0);
    setUniformOffset(setter, 'cc_ambientGround', Type.FLOAT4, _uboVec);
    var fog = cfg.fog;
    var colorTempRGB = fog.colorArray;
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
  function setTextureUBOView(setter, camera, cfg, layout) {
    if (layout === void 0) {
      layout = 'default';
    }
    var skybox = cfg.skybox;
    var director = cclegacy.director;
    var root = director.root;
    var pipeline = root.pipeline;
    if (skybox.reflectionMap) {
      var texture = skybox.reflectionMap.getGFXTexture();
      var sampler = root.device.getSampler(skybox.reflectionMap.getSamplerInfo());
      setter.setTexture('cc_environment', texture);
      setter.setSampler('cc_environment', sampler);
    } else {
      var envmap = skybox.envmap ? skybox.envmap : builtinResMgr.get('default-cube-texture');
      if (envmap) {
        var _texture = envmap.getGFXTexture();
        var _sampler = root.device.getSampler(envmap.getSamplerInfo());
        setter.setTexture('cc_environment', _texture);
        setter.setSampler('cc_environment', _sampler);
      }
    }
    var diffuseMap = skybox.diffuseMap ? skybox.diffuseMap : builtinResMgr.get('default-cube-texture');
    if (diffuseMap) {
      var _texture2 = diffuseMap.getGFXTexture();
      var _sampler2 = root.device.getSampler(diffuseMap.getSamplerInfo());
      setter.setTexture('cc_diffuseMap', _texture2);
      setter.setSampler('cc_diffuseMap', _sampler2);
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
      var childNodes = lg.children(parentID);
      if (childNodes.next().value && childNodes.next().value.target !== lg.nullVertex()) {
        var ququeLayoutID = childNodes.next().value.target;
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
      PipelinePool = /*#__PURE__*/function () {
        function PipelinePool() {
          var _this = this;
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
          this.sceneBuilder = new RecyclePool(function () {
            return new WebSceneBuilder(_this.renderData, _this.layoutGraph, _this.rg, _this.vertId, _this.sceneData);
          }, 16);
          this.renderPassBuilder = new RecyclePool(function () {
            return new WebRenderPassBuilder(_this.renderData, _this.rg, _this.layoutGraph, _this.resourceGraph, _this.vertId, _this.rasterPass, _this.getPipelineSceneData());
          }, 16);
          this.computeQueueBuilder = new RecyclePool(function () {
            return new WebComputeQueueBuilder(_this.renderData, _this.rg, _this.layoutGraph, _this.vertId, _this.renderQueue, _this.getPipelineSceneData());
          }, 16);
          this.renderQueueBuilder = new RecyclePool(function () {
            return new WebRenderQueueBuilder(_this.renderData, _this.rg, _this.layoutGraph, _this.vertId, _this.renderQueue, _this.getPipelineSceneData());
          }, 16);
          this.renderSubpassBuilder = new RecyclePool(function () {
            return new WebRenderSubpassBuilder(_this.renderData, _this.rg, _this.layoutGraph, _this.vertId, _this.rasterSubpass, _this.getPipelineSceneData());
          }, 16);
          this.computePassBuilder = new RecyclePool(function () {
            return new WebComputePassBuilder(_this.renderData, _this.rg, _this.layoutGraph, _this.resourceGraph, _this.vertId, _this.computePass, _this.getPipelineSceneData());
          }, 16);
          this.samplerInfo = new RecyclePool(function () {
            return new SamplerInfo();
          }, 16);
          this.color = new RecyclePool(function () {
            return new Color();
          }, 16);
          this.renderCommonObjectPool = new RenderCommonObjectPool(renderCommonObjectSetting);
          this.renderGraphPool = new RenderGraphObjectPool(renderGraphPoolSetting, this.renderCommonObjectPool);
          this.viewport = new RecyclePool(function () {
            return new Viewport();
          }, 16);
        }
        var _proto = PipelinePool.prototype;
        _proto.getPipelineSceneData = function getPipelineSceneData() {
          return legacyCC.director.root.pipeline.pipelineSceneData;
        };
        _proto.createColor = function createColor(x, y, z, w) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (z === void 0) {
            z = 0;
          }
          if (w === void 0) {
            w = 0;
          }
          var color = this.color.add();
          color.set(x, y, z, w);
          return color;
        };
        _proto.createSamplerInfo = function createSamplerInfo(minFilter, magFilter, mipFilter, addressU, addressV, addressW, maxAnisotropy, cmpFunc) {
          if (minFilter === void 0) {
            minFilter = Filter.LINEAR;
          }
          if (magFilter === void 0) {
            magFilter = Filter.LINEAR;
          }
          if (mipFilter === void 0) {
            mipFilter = Filter.NONE;
          }
          if (addressU === void 0) {
            addressU = Address.WRAP;
          }
          if (addressV === void 0) {
            addressV = Address.WRAP;
          }
          if (addressW === void 0) {
            addressW = Address.WRAP;
          }
          if (maxAnisotropy === void 0) {
            maxAnisotropy = 0;
          }
          if (cmpFunc === void 0) {
            cmpFunc = ComparisonFunc.ALWAYS;
          }
          var samplerInfo = this.samplerInfo.add();
          samplerInfo.minFilter = minFilter;
          samplerInfo.magFilter = magFilter;
          samplerInfo.mipFilter = mipFilter;
          samplerInfo.addressU = addressU;
          samplerInfo.addressV = addressV;
          samplerInfo.addressW = addressW;
          samplerInfo.maxAnisotropy = maxAnisotropy;
          samplerInfo.cmpFunc = cmpFunc;
          return samplerInfo;
        };
        _proto.reset = function reset() {
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
        };
        return PipelinePool;
      }();
      _export("WebSetter", WebSetter = /*#__PURE__*/function () {
        function WebSetter(data, lg) {
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
        var _proto2 = WebSetter.prototype;
        _proto2._copyToBuffer = function _copyToBuffer(target, offset, type) {
          assert(offset !== -1);
          var arr = this.getCurrConstant();
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
                var vec2Val = target;
                arr[offset + 0] = vec2Val.x;
                arr[offset + 1] = vec2Val.y;
              }
              break;
            default:
          }
        };
        _proto2._applyCurrConstantBuffer = function _applyCurrConstantBuffer(name, target, type, idx) {
          if (idx === void 0) {
            idx = 0;
          }
          var offset = this.getUniformOffset(name, type, idx);
          this._copyToBuffer(target, offset, type);
        };
        _proto2.hasUniform = function hasUniform(offset) {
          return offset !== -1;
        };
        _proto2.getUniformOffset = function getUniformOffset(name, type, idx) {
          if (idx === void 0) {
            idx = 0;
          }
          var currBlock = this._getCurrUniformBlock();
          if (!currBlock) return -1;
          var offset = 0;
          var typeCount = getUBOTypeCount(type);
          for (var _iterator = _createForOfIteratorHelperLoose(currBlock.members), _step; !(_step = _iterator()).done;) {
            var uniform = _step.value;
            var currCount = getUBOTypeCount(uniform.type);
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
        };
        _proto2._getCurrUniformBlock = function _getCurrUniformBlock() {
          var block = this._currBlock;
          var nodeId = this._lg.locateChild(0xFFFFFFFF, this._currStage);
          var ppl = this._lg.getLayout(nodeId);
          var layout = ppl.descriptorSets.get(this._currFrequency).descriptorSetLayoutData;
          var nameID = this._lg.attributeIndex.get(block);
          return layout.uniformBlocks.get(nameID);
        };
        _proto2._getCurrDescSetLayoutData = function _getCurrDescSetLayoutData() {
          var nodeId = this._lg.locateChild(0xFFFFFFFF, this._currStage);
          var ppl = this._lg.getLayout(nodeId);
          var layout = ppl.descriptorSets.get(this._currFrequency).descriptorSetLayoutData;
          return layout;
        };
        _proto2._getCurrDescriptorBlock = function _getCurrDescriptorBlock(block) {
          var layout = this._getCurrDescSetLayoutData();
          var nameID = this._lg.attributeIndex.get(block);
          for (var _iterator2 = _createForOfIteratorHelperLoose(layout.descriptorBlocks), _step2; !(_step2 = _iterator2()).done;) {
            var _block = _step2.value;
            for (var i = 0; i !== _block.descriptors.length; ++i) {
              if (nameID === _block.descriptors[i].descriptorID) {
                return _block.offset + i;
              }
            }
          }
          return -1;
        };
        _proto2.setCurrConstant = function setCurrConstant(block, stage, frequency) {
          if (stage === void 0) {
            stage = 'default';
          }
          if (frequency === void 0) {
            frequency = UpdateFrequency.PER_PASS;
          }
          this._currBlock = block;
          this._currStage = stage;
          this._currFrequency = frequency;
          var nameID = this._lg.attributeIndex.get(block);
          this._currCount = 0;
          var currBlock = this._getCurrUniformBlock();
          if (!currBlock) return false;
          for (var _iterator3 = _createForOfIteratorHelperLoose(currBlock.members), _step3; !(_step3 = _iterator3()).done;) {
            var uniform = _step3.value;
            this._currCount += getUBOTypeCount(uniform.type) * uniform.count;
          }
          this._currConstant = this._data.constants.get(nameID);
          return true;
        };
        _proto2.getCurrConstant = function getCurrConstant() {
          return this._currConstant;
        };
        _proto2.addConstant = function addConstant(block, stage, frequency) {
          if (stage === void 0) {
            stage = 'default';
          }
          if (frequency === void 0) {
            frequency = UpdateFrequency.PER_PASS;
          }
          this._currBlock = block;
          this._currStage = stage;
          this._currFrequency = frequency;
          var num = this._lg.attributeIndex.get(block);
          this._currCount = 0;
          var currBlock = this._getCurrUniformBlock();
          if (!currBlock) return false;
          for (var _iterator4 = _createForOfIteratorHelperLoose(currBlock.members), _step4; !(_step4 = _iterator4()).done;) {
            var uniform = _step4.value;
            this._currCount += getUBOTypeCount(uniform.type) * uniform.count;
          }
          if (!this._data.constants.get(num)) {
            var value = new Array(this._currCount);
            value.fill(0);
            this._data.constants.set(num, value);
          }
          this.setCurrConstant(block, stage);
          return true;
        };
        _proto2.setMat4 = function setMat4(name, mat, idx) {
          if (idx === void 0) {
            idx = 0;
          }
          this._applyCurrConstantBuffer(name, mat, Type.MAT4, idx);
        };
        _proto2.offsetMat4 = function offsetMat4(mat, offset) {
          this._copyToBuffer(mat, offset, Type.MAT4);
        };
        _proto2.setQuaternion = function setQuaternion(name, quat, idx) {
          if (idx === void 0) {
            idx = 0;
          }
          this._applyCurrConstantBuffer(name, quat, Type.FLOAT4, idx);
        };
        _proto2.offsetQuaternion = function offsetQuaternion(quat, offset) {
          this._copyToBuffer(quat, offset, Type.FLOAT4);
        };
        _proto2.setColor = function setColor(name, color, idx) {
          if (idx === void 0) {
            idx = 0;
          }
          this._applyCurrConstantBuffer(name, color, Type.FLOAT4, idx);
        };
        _proto2.offsetColor = function offsetColor(color, offset) {
          this._copyToBuffer(color, offset, Type.FLOAT4);
        };
        _proto2.setVec4 = function setVec4(name, vec, idx) {
          if (idx === void 0) {
            idx = 0;
          }
          this._applyCurrConstantBuffer(name, vec, Type.FLOAT4, idx);
        };
        _proto2.offsetVec4 = function offsetVec4(vec, offset) {
          this._copyToBuffer(vec, offset, Type.FLOAT4);
        };
        _proto2.setVec2 = function setVec2(name, vec, idx) {
          if (idx === void 0) {
            idx = 0;
          }
          this._applyCurrConstantBuffer(name, vec, Type.FLOAT2, idx);
        };
        _proto2.offsetVec2 = function offsetVec2(vec, offset) {
          this._copyToBuffer(vec, offset, Type.FLOAT2);
        };
        _proto2.setFloat = function setFloat(name, v, idx) {
          if (idx === void 0) {
            idx = 0;
          }
          this._applyCurrConstantBuffer(name, v, Type.FLOAT, idx);
        };
        _proto2.setArrayBuffer = function setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        };
        _proto2.offsetFloat = function offsetFloat(v, offset) {
          this._copyToBuffer(v, offset, Type.FLOAT);
        };
        _proto2.setBuffer = function setBuffer(name, buffer) {
          if (this._getCurrDescriptorBlock(name) === -1) {
            return;
          }
          var num = this._lg.attributeIndex.get(name);
          this._data.buffers.set(num, buffer);
        };
        _proto2.setTexture = function setTexture(name, texture) {
          if (this._getCurrDescriptorBlock(name) === -1) {
            return;
          }
          var num = this._lg.attributeIndex.get(name);
          this._data.textures.set(num, texture);
        };
        _proto2.setReadWriteBuffer = function setReadWriteBuffer(name, buffer) {
          // TODO
        };
        _proto2.setReadWriteTexture = function setReadWriteTexture(name, texture) {
          // TODO
        };
        _proto2.setSampler = function setSampler(name, sampler) {
          if (this._getCurrDescriptorBlock(name) === -1) {
            return;
          }
          var num = this._lg.attributeIndex.get(name);
          this._data.samplers.set(num, sampler);
        };
        _proto2.getParentLayout = function getParentLayout() {
          var director = cclegacy.director;
          var root = director.root;
          var pipeline = root.pipeline;
          var parId = pipeline.renderGraph.getParent(this._vertID);
          var layoutName = pipeline.renderGraph.getLayout(parId);
          return layoutName;
        };
        _proto2.getCurrentLayout = function getCurrentLayout() {
          var director = cclegacy.director;
          var root = director.root;
          var pipeline = root.pipeline;
          var layoutName = pipeline.renderGraph.getLayout(this._vertID);
          return layoutName;
        };
        _proto2.setBuiltinCameraConstants = function setBuiltinCameraConstants(camera) {
          var director = cclegacy.director;
          var root = director.root;
          var pipeline = root.pipeline;
          var layoutName = this.getParentLayout();
          setCameraUBOValues(this, camera, pipeline.pipelineSceneData, camera.scene, layoutName);
        };
        _proto2.setBuiltinShadowMapConstants = function setBuiltinShadowMapConstants(light, numLevels) {
          setShadowUBOView(this, null, this.getParentLayout());
        };
        _proto2.setBuiltinDirectionalLightFrustumConstants = function setBuiltinDirectionalLightFrustumConstants(camera, light, csmLevel) {
          if (csmLevel === void 0) {
            csmLevel = 0;
          }
          setShadowUBOLightView(this, camera, light, csmLevel);
        };
        _proto2.setBuiltinSpotLightFrustumConstants = function setBuiltinSpotLightFrustumConstants(light) {
          setShadowUBOLightView(this, null, light, 0);
        };
        _proto2.setBuiltinDirectionalLightConstants = function setBuiltinDirectionalLightConstants(light, camera) {
          this.setBuiltinShadowMapConstants(light);
        };
        _proto2.setBuiltinSphereLightConstants = function setBuiltinSphereLightConstants(light, camera) {
          var director = cclegacy.director;
          var pipeline = director.root.pipeline;
          var sceneData = pipeline.pipelineSceneData;
          if (!this.addConstant('CCForwardLight', this.getParentLayout(), UpdateFrequency.PER_BATCH)) return;
          _uboVec.set(light.position.x, light.position.y, light.position.z, LightType.SPHERE);
          setUniformOffset(this, 'cc_lightPos', Type.FLOAT4, _uboVec);
          _uboVec.set(light.size, light.range, 0.0, 0.0);
          setUniformOffset(this, 'cc_lightSizeRangeAngle', Type.FLOAT4, _uboVec);
          var isHDR = sceneData.isHDR;
          var lightMeterScale = 10000.0;
          _uboVec.set(light.color.x, light.color.y, light.color.z, 0);
          if (light.useColorTemperature) {
            var finalColor = light.finalColor;
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
        };
        _proto2.setBuiltinSpotLightConstants = function setBuiltinSpotLightConstants(light, camera) {
          var director = cclegacy.director;
          var pipeline = director.root.pipeline;
          var sceneData = pipeline.pipelineSceneData;
          var shadowInfo = sceneData.shadows;
          if (!this.addConstant('CCForwardLight', this.getParentLayout(), UpdateFrequency.PER_BATCH)) return;
          _uboVec.set(light.position.x, light.position.y, light.position.z, LightType.SPOT);
          setUniformOffset(this, 'cc_lightPos', Type.FLOAT4, _uboVec);
          _uboVec.set(light.size, light.range, light.spotAngle, shadowInfo.enabled && light.shadowEnabled && shadowInfo.type === ShadowType.ShadowMap ? 1 : 0);
          setUniformOffset(this, 'cc_lightSizeRangeAngle', Type.FLOAT4, _uboVec);
          _uboVec.set(light.direction.x, light.direction.y, light.direction.z, 0);
          setUniformOffset(this, 'cc_lightDir', Type.FLOAT4, _uboVec);
          var isHDR = sceneData.isHDR;
          var lightMeterScale = 10000.0;
          _uboVec.set(light.color.x, light.color.y, light.color.z, 0);
          if (light.useColorTemperature) {
            var finalColor = light.finalColor;
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
        };
        _proto2.setBuiltinPointLightConstants = function setBuiltinPointLightConstants(light, camera) {
          var director = cclegacy.director;
          var pipeline = director.root.pipeline;
          var sceneData = pipeline.pipelineSceneData;
          if (!this.addConstant('CCForwardLight', this.getParentLayout(), UpdateFrequency.PER_BATCH)) return;
          _uboVec.set(light.position.x, light.position.y, light.position.z, LightType.POINT);
          setUniformOffset(this, 'cc_lightPos', Type.FLOAT4, _uboVec);
          _uboVec.set(0.0, light.range, 0.0, 0.0);
          setUniformOffset(this, 'cc_lightSizeRangeAngle', Type.FLOAT4, _uboVec);
          var isHDR = sceneData.isHDR;
          var lightMeterScale = 10000.0;
          if (light.useColorTemperature) {
            var finalColor = light.finalColor;
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
        };
        _proto2.setBuiltinRangedDirectionalLightConstants = function setBuiltinRangedDirectionalLightConstants(light, camera) {
          var director = cclegacy.director;
          var pipeline = director.root.pipeline;
          var sceneData = pipeline.pipelineSceneData;
          if (!this.addConstant('CCForwardLight', this.getParentLayout(), UpdateFrequency.PER_BATCH)) return;
          _uboVec.set(light.position.x, light.position.y, light.position.z, LightType.RANGED_DIRECTIONAL);
          setUniformOffset(this, 'cc_lightPos', Type.FLOAT4, _uboVec);
          _uboVec.set(light.right.x, light.right.y, light.right.z, 0.0);
          setUniformOffset(this, 'cc_lightSizeRangeAngle', Type.FLOAT4, _uboVec);
          _uboVec.set(light.direction.x, light.direction.y, light.direction.z, 0);
          setUniformOffset(this, 'cc_lightDir', Type.FLOAT4, _uboVec);
          var scale = light.scale;
          _uboVec.set(scale.x * 0.5, scale.y * 0.5, scale.z * 0.5, 0);
          setUniformOffset(this, 'cc_lightBoundingSizeVS', Type.FLOAT4, _uboVec);
          var isHDR = sceneData.isHDR;
          _uboVec.set(light.color.x, light.color.y, light.color.z, 0);
          if (light.useColorTemperature) {
            var finalColor = light.finalColor;
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
        };
        _proto2.hasSampler = function hasSampler(name) {
          var id = this._lg.attributeIndex.get(name);
          if (id === undefined) {
            return false;
          }
          return this._data.samplers.has(id);
        };
        _proto2.hasTexture = function hasTexture(name) {
          var id = this._lg.attributeIndex.get(name);
          if (id === undefined) {
            return false;
          }
          return this._data.textures.has(id);
        };
        _proto2.setCustomBehavior = function setCustomBehavior(name) {
          throw new Error('Method not implemented.');
        };
        _createClass(WebSetter, [{
          key: "name",
          get: function get() {
            return '';
          },
          set: function set(name) {
            // noop
          }
        }]);
        return WebSetter;
      }());
      _export("WebSceneBuilder", WebSceneBuilder = /*#__PURE__*/function (_WebSetter) {
        _inheritsLoose(WebSceneBuilder, _WebSetter);
        function WebSceneBuilder(data, layoutGraph, rg, sceneId, scene) {
          var _this2;
          _this2 = _WebSetter.call(this, data, layoutGraph) || this;
          _this2._renderGraph = void 0;
          _this2._scene = void 0;
          _this2._renderGraph = rg;
          _this2._scene = scene;
          _this2._vertID = sceneId;
          return _this2;
        }
        var _proto3 = WebSceneBuilder.prototype;
        _proto3.update = function update(data, layoutGraph, rg, sceneId, scene) {
          this._data = data;
          this._lg = layoutGraph;
          this._renderGraph = rg;
          this._scene = scene;
          this._vertID = sceneId;
        };
        _proto3.useLightFrustum = function useLightFrustum(light, csmLevel, optCamera) {
          if (csmLevel === void 0) {
            csmLevel = 0;
          }
          if (optCamera === void 0) {
            optCamera = undefined;
          }
          this._scene.light.light = light;
          this._scene.light.level = csmLevel;
          this._scene.light.culledByLight = true;
          if (optCamera) {
            this._scene.camera = optCamera;
          }
          if (this._scene.flags & SceneFlags.NON_BUILTIN) {
            return;
          }
          var queueId = this._renderGraph.getParent(this._vertID);
          var passId = this._renderGraph.getParent(queueId);
          var layoutName = this._renderGraph.getLayout(passId);
          setShadowUBOLightView(this, this._scene.camera, light, csmLevel, layoutName);
        };
        return WebSceneBuilder;
      }(WebSetter));
      _export("WebRenderQueueBuilder", WebRenderQueueBuilder = /*#__PURE__*/function (_WebSetter2) {
        _inheritsLoose(WebRenderQueueBuilder, _WebSetter2);
        function WebRenderQueueBuilder(data, renderGraph, layoutGraph, vertID, queue, pipeline) {
          var _this3;
          _this3 = _WebSetter2.call(this, data, layoutGraph) || this;
          _this3._renderGraph = void 0;
          _this3._queue = void 0;
          _this3._pipeline = void 0;
          _this3._renderGraph = renderGraph;
          _this3._vertID = vertID;
          _this3._queue = queue;
          _this3._pipeline = pipeline;
          return _this3;
        }
        var _proto4 = WebRenderQueueBuilder.prototype;
        _proto4.update = function update(data, renderGraph, layoutGraph, vertID, queue, pipeline) {
          this._data = data;
          this._lg = layoutGraph;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._queue = queue;
          this._pipeline = pipeline;
        };
        _proto4.setArrayBuffer = function setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        };
        _proto4.addSceneOfCamera = function addSceneOfCamera(camera, light, sceneFlags, name) {
          if (sceneFlags === void 0) {
            sceneFlags = SceneFlags.NONE;
          }
          if (name === void 0) {
            name = 'Camera';
          }
          var lightTarget = light.light;
          var sceneData = renderGraphPool.createSceneData(camera.scene, camera, sceneFlags, lightTarget && !(sceneFlags & SceneFlags.SHADOW_CASTER) ? CullingFlags.CAMERA_FRUSTUM | CullingFlags.LIGHT_BOUNDS : CullingFlags.CAMERA_FRUSTUM, lightTarget);
          this._renderGraph.addVertex(RenderGraphValue.Scene, sceneData, name, '', renderGraphPool.createRenderData(), false, this._vertID);
          var layoutName = this.getParentLayout();
          var scene = cclegacy.director.getScene();
          setCameraUBOValues(this, camera, this._pipeline, camera.scene || (scene ? scene.renderScene : null), layoutName);
          if (sceneFlags & SceneFlags.SHADOW_CASTER || lightTarget && lightTarget.type !== LightType.DIRECTIONAL) {
            setShadowUBOLightView(this, camera, lightTarget, light.level, layoutName);
          } else {
            setShadowUBOView(this, camera, layoutName);
          }
          setTextureUBOView(this, camera, this._pipeline);
          initGlobalDescBinding(this._data, layoutName);
        };
        _proto4.addScene = function addScene(camera, sceneFlags, light) {
          if (sceneFlags === void 0) {
            sceneFlags = SceneFlags.NONE;
          }
          if (light === void 0) {
            light = undefined;
          }
          var sceneData = renderGraphPool.createSceneData(camera.scene, camera, sceneFlags, light && !(sceneFlags & SceneFlags.SHADOW_CASTER) ? CullingFlags.CAMERA_FRUSTUM | CullingFlags.LIGHT_BOUNDS : CullingFlags.CAMERA_FRUSTUM, light);
          var renderData = renderGraphPool.createRenderData();
          var sceneId = this._renderGraph.addVertex(RenderGraphValue.Scene, sceneData, 'Scene', '', renderData, false, this._vertID);
          if (!(sceneFlags & SceneFlags.NON_BUILTIN)) {
            var layoutName = this.getParentLayout();
            setCameraUBOValues(this, camera, this._pipeline, camera.scene, layoutName);
            if (light && light.type !== LightType.DIRECTIONAL) setShadowUBOLightView(this, camera, light, 0, layoutName);else if (!(sceneFlags & SceneFlags.SHADOW_CASTER)) setShadowUBOView(this, camera, layoutName);
            setTextureUBOView(this, camera, this._pipeline);
            initGlobalDescBinding(this._data, layoutName);
          }
          var sceneBuilder = pipelinePool.sceneBuilder.add();
          sceneBuilder.update(renderData, this._lg, this._renderGraph, sceneId, sceneData);
          return sceneBuilder;
        };
        _proto4.addFullscreenQuad = function addFullscreenQuad(material, passID, sceneFlags, name) {
          if (sceneFlags === void 0) {
            sceneFlags = SceneFlags.NONE;
          }
          if (name === void 0) {
            name = 'Quad';
          }
          this._renderGraph.addVertex(RenderGraphValue.Blit, renderGraphPool.createBlit(material, passID, sceneFlags, null), name, '', renderGraphPool.createRenderData(), false, this._vertID);
          var layoutName = this.getParentLayout();
          var scene = cclegacy.director.getScene();
          setCameraUBOValues(this, null, this._pipeline, scene ? scene.renderScene : null, layoutName);
          if (sceneFlags & SceneFlags.SHADOW_CASTER) {
            // setShadowUBOLightView(this, light.light!, light.level);
          } else {
            setShadowUBOView(this, null, layoutName);
          }
          setTextureUBOView(this, null, this._pipeline);
          initGlobalDescBinding(this._data, layoutName);
        };
        _proto4.addCameraQuad = function addCameraQuad(camera, material, passID, sceneFlags) {
          if (sceneFlags === void 0) {
            sceneFlags = SceneFlags.NONE;
          }
          this._renderGraph.addVertex(RenderGraphValue.Blit, renderGraphPool.createBlit(material, passID, sceneFlags, camera), 'CameraQuad', '', renderGraphPool.createRenderData(), false, this._vertID);
          var layoutName = this.getParentLayout();
          var scene = cclegacy.director.getScene();
          setCameraUBOValues(this, camera, this._pipeline, camera.scene || (scene ? scene.renderScene : null), layoutName);
          if (sceneFlags & SceneFlags.SHADOW_CASTER) {
            // setShadowUBOLightView(this, light.light!, light.level);
          } else {
            setShadowUBOView(this, camera, layoutName);
          }
          setTextureUBOView(this, camera, this._pipeline);
          initGlobalDescBinding(this._data, layoutName);
        };
        _proto4.clearRenderTarget = function clearRenderTarget(name, color) {
          if (color === void 0) {
            color = new Color();
          }
          var clearView = renderGraphPool.createClearView(name, ClearFlagBit.COLOR);
          clearView.clearColor.copy(color);
          this._renderGraph.addVertex(RenderGraphValue.Clear, [clearView], 'ClearRenderTarget', '', renderGraphPool.createRenderData(), false, this._vertID);
        };
        _proto4.setViewport = function setViewport(viewport) {
          var currViewport = pipelinePool.viewport.add();
          this._queue.viewport = currViewport.copy(viewport);
        };
        _proto4.addCustomCommand = function addCustomCommand(customBehavior) {
          throw new Error('Method not implemented.');
        };
        _createClass(WebRenderQueueBuilder, [{
          key: "name",
          get: function get() {
            return this._renderGraph.getName(this._vertID);
          },
          set: function set(name) {
            this._renderGraph.setName(this._vertID, name);
          }
        }]);
        return WebRenderQueueBuilder;
      }(WebSetter));
      _export("WebRenderSubpassBuilder", WebRenderSubpassBuilder = /*#__PURE__*/function (_WebSetter3) {
        _inheritsLoose(WebRenderSubpassBuilder, _WebSetter3);
        function WebRenderSubpassBuilder(data, renderGraph, layoutGraph, vertID, subpass, pipeline) {
          var _this4;
          _this4 = _WebSetter3.call(this, data, layoutGraph) || this;
          _this4._renderGraph = void 0;
          _this4._layoutID = void 0;
          _this4._subpass = void 0;
          _this4._pipeline = void 0;
          _this4._renderGraph = renderGraph;
          _this4._vertID = vertID;
          _this4._subpass = subpass;
          _this4._pipeline = pipeline;
          var layoutName = _this4._renderGraph.component(RenderGraphComponent.Layout, _this4._vertID);
          _this4._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
          return _this4;
        }
        var _proto5 = WebRenderSubpassBuilder.prototype;
        _proto5.update = function update(data, renderGraph, layoutGraph, vertID, subpass, pipeline) {
          this._data = data;
          this._lg = layoutGraph;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._subpass = subpass;
          this._pipeline = pipeline;
          var layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        };
        _proto5.addRenderTarget = function addRenderTarget(name, accessType, slotName, loadOp, storeOp, color) {
          throw new Error('Method not implemented.');
        };
        _proto5.setCustomShaderStages = function setCustomShaderStages(name, stageFlags) {
          throw new Error('Method not implemented.');
        };
        _proto5.setArrayBuffer = function setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        };
        _proto5.addDepthStencil = function addDepthStencil(name, accessType, depthSlotName, stencilSlotName, loadOp, storeOp, depth, stencil, clearFlag) {
          if (depthSlotName === void 0) {
            depthSlotName = '';
          }
          if (stencilSlotName === void 0) {
            stencilSlotName = '';
          }
          if (loadOp === void 0) {
            loadOp = LoadOp.CLEAR;
          }
          if (storeOp === void 0) {
            storeOp = StoreOp.STORE;
          }
          if (depth === void 0) {
            depth = 1;
          }
          if (stencil === void 0) {
            stencil = 0;
          }
          if (clearFlag === void 0) {
            clearFlag = ClearFlagBit.DEPTH_STENCIL;
          }
          throw new Error('Method not implemented.');
        };
        _proto5.addTexture = function addTexture(name, slotName, sampler) {
          if (sampler === void 0) {
            sampler = null;
          }
          throw new Error('Method not implemented.');
        };
        _proto5.addStorageBuffer = function addStorageBuffer(name, accessType, slotName) {
          throw new Error('Method not implemented.');
        };
        _proto5.addStorageImage = function addStorageImage(name, accessType, slotName) {
          throw new Error('Method not implemented.');
        };
        _proto5.setViewport = function setViewport(viewport) {
          throw new Error('Method not implemented.');
        };
        _proto5.addQueue = function addQueue(hint, layoutName) {
          if (hint === void 0) {
            hint = QueueHint.RENDER_OPAQUE;
          }
          if (layoutName === void 0) {
            layoutName = 'default';
          }
          var layoutId = this._lg.locateChild(this._layoutID, layoutName);
          if (DEBUG) {
            assert(layoutId !== 0xFFFFFFFF);
          }
          var queue = renderGraphPool.createRenderQueue(hint, layoutId);
          var data = renderGraphPool.createRenderData();
          var queueID = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, '', layoutName, data, false, this._vertID);
          var queueBuilder = pipelinePool.renderQueueBuilder.add();
          queueBuilder.update(data, this._renderGraph, this._lg, queueID, queue, this._pipeline);
          return queueBuilder;
        };
        _createClass(WebRenderSubpassBuilder, [{
          key: "name",
          get: function get() {
            return this._renderGraph.getName(this._vertID);
          },
          set: function set(name) {
            this._renderGraph.setName(this._vertID, name);
          }
        }, {
          key: "showStatistics",
          get: function get() {
            return this._subpass.showStatistics;
          },
          set: function set(enable) {
            this._subpass.showStatistics = enable;
          }
        }]);
        return WebRenderSubpassBuilder;
      }(WebSetter));
      _export("WebRenderPassBuilder", WebRenderPassBuilder = /*#__PURE__*/function (_WebSetter4) {
        _inheritsLoose(WebRenderPassBuilder, _WebSetter4);
        function WebRenderPassBuilder(data, renderGraph, layoutGraph, resourceGraph, vertID, pass, pipeline) {
          var _this5;
          _this5 = _WebSetter4.call(this, data, layoutGraph) || this;
          _this5._renderGraph = void 0;
          _this5._layoutID = void 0;
          _this5._pass = void 0;
          _this5._pipeline = void 0;
          _this5._resourceGraph = void 0;
          _this5._renderGraph = renderGraph;
          _this5._resourceGraph = resourceGraph;
          _this5._vertID = vertID;
          _this5._pass = pass;
          _this5._pipeline = pipeline;
          var layoutName = _this5._renderGraph.component(RenderGraphComponent.Layout, _this5._vertID);
          _this5._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
          return _this5;
        }
        var _proto6 = WebRenderPassBuilder.prototype;
        _proto6.update = function update(data, renderGraph, layoutGraph, resourceGraph, vertID, pass, pipeline) {
          this._renderGraph = renderGraph;
          this._lg = layoutGraph;
          this._resourceGraph = resourceGraph;
          this._vertID = vertID;
          this._pass = pass;
          this._pipeline = pipeline;
          this._data = data;
          var layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        };
        _proto6.setCustomShaderStages = function setCustomShaderStages(name, stageFlags) {
          throw new Error('Method not implemented.');
        };
        _proto6.setArrayBuffer = function setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        };
        _proto6.setVersion = function setVersion(name, version) {
          this._pass.versionName = name;
          this._pass.version = version;
        };
        _proto6.addRenderTarget = function addRenderTarget(name, loadOp, storeOp, clearColor) {
          if (loadOp === void 0) {
            loadOp = LoadOp.CLEAR;
          }
          if (storeOp === void 0) {
            storeOp = StoreOp.STORE;
          }
          if (clearColor === void 0) {
            clearColor = new Color();
          }
          if (DEBUG) {
            assert(Boolean(name && this._resourceGraph.contains(name)));
          }
          var clearFlag = ClearFlagBit.COLOR;
          if (loadOp === LoadOp.LOAD) {
            clearFlag = ClearFlagBit.NONE;
          }
          var view = renderGraphPool.createRasterView('', AccessType.WRITE, AttachmentType.RENDER_TARGET, loadOp, storeOp, clearFlag);
          view.clearColor.copy(clearColor);
          this._pass.rasterViews.set(name, view);
        };
        _proto6.addDepthStencil = function addDepthStencil(name, loadOp, storeOp, depth, stencil, clearFlag) {
          if (loadOp === void 0) {
            loadOp = LoadOp.CLEAR;
          }
          if (storeOp === void 0) {
            storeOp = StoreOp.STORE;
          }
          if (depth === void 0) {
            depth = 1;
          }
          if (stencil === void 0) {
            stencil = 0;
          }
          if (clearFlag === void 0) {
            clearFlag = ClearFlagBit.DEPTH_STENCIL;
          }
          if (DEBUG) {
            assert(Boolean(name && this._resourceGraph.contains(name)));
          }
          var view = renderGraphPool.createRasterView('', AccessType.WRITE, AttachmentType.DEPTH_STENCIL, loadOp, storeOp, clearFlag);
          view.clearColor.set(depth, stencil, 0, 0);
          this._pass.rasterViews.set(name, view);
        };
        _proto6.resolveRenderTarget = function resolveRenderTarget(source, target) {
          // TODO
        };
        _proto6.resolveDepthStencil = function resolveDepthStencil(source, target, depthMode, stencilMode) {
          // TODO
        };
        _proto6._addComputeResource = function _addComputeResource(name, accessType, slotName) {
          var view = renderGraphPool.createComputeView(slotName);
          view.accessType = accessType;
          if (DEBUG) {
            assert(Boolean(view.name));
            assert(Boolean(name && this._resourceGraph.contains(name)));
            var descriptorName = view.name;
            var descriptorID = this._lg.attributeIndex.get(descriptorName);
            assert(descriptorID !== undefined);
          }
          if (this._pass.computeViews.has(name)) {
            var _this$_pass$computeVi;
            (_this$_pass$computeVi = this._pass.computeViews.get(name)) === null || _this$_pass$computeVi === void 0 ? void 0 : _this$_pass$computeVi.push(view);
          } else {
            this._pass.computeViews.set(name, [view]);
          }
        };
        _proto6.addTexture = function addTexture(name, slotName, sampler) {
          if (sampler === void 0) {
            sampler = null;
          }
          this._addComputeResource(name, AccessType.READ, slotName);
          if (sampler) {
            var descriptorID = this._lg.attributeIndex.get(slotName);
            this._data.samplers.set(descriptorID, sampler);
          }
        };
        _proto6.addStorageBuffer = function addStorageBuffer(name, accessType, slotName) {
          this._addComputeResource(name, accessType, slotName);
        };
        _proto6.addStorageImage = function addStorageImage(name, accessType, slotName) {
          this._addComputeResource(name, accessType, slotName);
        };
        _proto6.addRenderSubpass = function addRenderSubpass(layoutName) {
          if (layoutName === void 0) {
            layoutName = '';
          }
          var name = 'Raster';
          var subpassID = this._pass.subpassGraph.numVertices();
          this._pass.subpassGraph.addVertex(name, renderGraphPool.createSubpass());
          var subpass = renderGraphPool.createRasterSubpass(subpassID, 1, 0);
          var data = renderGraphPool.createRenderData();
          var vertID = this._renderGraph.addVertex(RenderGraphValue.RasterSubpass, subpass, name, layoutName, data, false);
          var result = pipelinePool.renderSubpassBuilder.add();
          result.update(data, this._renderGraph, this._lg, vertID, subpass, this._pipeline);
          return result;
        };
        _proto6.addQueue = function addQueue(hint, layoutName) {
          if (hint === void 0) {
            hint = QueueHint.RENDER_OPAQUE;
          }
          if (layoutName === void 0) {
            layoutName = 'default';
          }
          var layoutId = this._lg.locateChild(this._layoutID, layoutName);
          if (DEBUG) {
            assert(layoutId !== 0xFFFFFFFF);
          }
          var queue = renderGraphPool.createRenderQueue(hint, layoutId);
          var data = renderGraphPool.createRenderData();
          var queueID = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, '', layoutName, data, false, this._vertID);
          var result = pipelinePool.renderQueueBuilder.add();
          result.update(data, this._renderGraph, this._lg, queueID, queue, this._pipeline);
          return result;
        };
        _proto6.addFullscreenQuad = function addFullscreenQuad(material, passID, sceneFlags, name) {
          if (sceneFlags === void 0) {
            sceneFlags = SceneFlags.NONE;
          }
          if (name === void 0) {
            name = 'FullscreenQuad';
          }
          var queue = renderGraphPool.createRenderQueue(QueueHint.RENDER_TRANSPARENT);
          var queueId = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, 'Queue', '', renderGraphPool.createRenderData(), false, this._vertID);
          this._renderGraph.addVertex(RenderGraphValue.Blit, renderGraphPool.createBlit(material, passID, sceneFlags, null), name, '', renderGraphPool.createRenderData(), false, queueId);
        };
        _proto6.addCameraQuad = function addCameraQuad(camera, material, passID, sceneFlags, name) {
          if (name === void 0) {
            name = 'CameraQuad';
          }
          var queue = renderGraphPool.createRenderQueue(QueueHint.RENDER_TRANSPARENT);
          var queueId = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, 'Queue', '', renderGraphPool.createRenderData(), false, this._vertID);
          this._renderGraph.addVertex(RenderGraphValue.Blit, renderGraphPool.createBlit(material, passID, sceneFlags, camera), name, '', renderGraphPool.createRenderData(), false, queueId);
        };
        _proto6.setViewport = function setViewport(viewport) {
          this._pass.viewport.copy(viewport);
        };
        _createClass(WebRenderPassBuilder, [{
          key: "name",
          get: function get() {
            return this._renderGraph.getName(this._vertID);
          },
          set: function set(name) {
            this._renderGraph.setName(this._vertID, name);
          }
        }, {
          key: "showStatistics",
          get: function get() {
            return this._pass.showStatistics;
          },
          set: function set(enable) {
            this._pass.showStatistics = enable;
          }
        }]);
        return WebRenderPassBuilder;
      }(WebSetter));
      _export("WebComputeQueueBuilder", WebComputeQueueBuilder = /*#__PURE__*/function (_WebSetter5) {
        _inheritsLoose(WebComputeQueueBuilder, _WebSetter5);
        function WebComputeQueueBuilder(data, renderGraph, layoutGraph, vertID, queue, pipeline) {
          var _this6;
          _this6 = _WebSetter5.call(this, data, layoutGraph) || this;
          _this6._renderGraph = void 0;
          _this6._queue = void 0;
          _this6._pipeline = void 0;
          _this6._renderGraph = renderGraph;
          _this6._vertID = vertID;
          _this6._queue = queue;
          _this6._pipeline = pipeline;
          return _this6;
        }
        var _proto7 = WebComputeQueueBuilder.prototype;
        _proto7.update = function update(data, renderGraph, layoutGraph, vertID, queue, pipeline) {
          this._data = data;
          this._lg = layoutGraph;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._queue = queue;
          this._pipeline = pipeline;
        };
        _proto7.setArrayBuffer = function setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        };
        _proto7.addDispatch = function addDispatch(threadGroupCountX, threadGroupCountY, threadGroupCountZ, material, passID, name) {
          if (material === void 0) {
            material = null;
          }
          if (passID === void 0) {
            passID = 0;
          }
          if (name === void 0) {
            name = 'Dispatch';
          }
          this._renderGraph.addVertex(RenderGraphValue.Dispatch, renderGraphPool.createDispatch(material, passID, threadGroupCountX, threadGroupCountY, threadGroupCountZ), name, '', renderGraphPool.createRenderData(), false, this._vertID);
        };
        _createClass(WebComputeQueueBuilder, [{
          key: "name",
          get: function get() {
            return this._renderGraph.getName(this._vertID);
          },
          set: function set(name) {
            this._renderGraph.setName(this._vertID, name);
          }
        }]);
        return WebComputeQueueBuilder;
      }(WebSetter));
      _export("WebComputePassBuilder", WebComputePassBuilder = /*#__PURE__*/function (_WebSetter6) {
        _inheritsLoose(WebComputePassBuilder, _WebSetter6);
        function WebComputePassBuilder(data, renderGraph, layoutGraph, resourceGraph, vertID, pass, pipeline) {
          var _this7;
          _this7 = _WebSetter6.call(this, data, layoutGraph) || this;
          _this7._renderGraph = void 0;
          _this7._resourceGraph = void 0;
          _this7._layoutID = void 0;
          _this7._pass = void 0;
          _this7._pipeline = void 0;
          _this7._renderGraph = renderGraph;
          _this7._resourceGraph = resourceGraph;
          _this7._vertID = vertID;
          _this7._pass = pass;
          _this7._pipeline = pipeline;
          var layoutName = _this7._renderGraph.component(RenderGraphComponent.Layout, _this7._vertID);
          _this7._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
          return _this7;
        }
        var _proto8 = WebComputePassBuilder.prototype;
        _proto8.update = function update(data, renderGraph, layoutGraph, resourceGraph, vertID, pass, pipeline) {
          this._data = data;
          this._renderGraph = renderGraph;
          this._lg = layoutGraph;
          this._resourceGraph = resourceGraph;
          this._vertID = vertID;
          this._pass = pass;
          this._pipeline = pipeline;
          var layoutName = this._renderGraph.component(RenderGraphComponent.Layout, this._vertID);
          this._layoutID = layoutGraph.locateChild(layoutGraph.nullVertex(), layoutName);
        };
        _proto8.setCustomShaderStages = function setCustomShaderStages(name, stageFlags) {
          throw new Error('Method not implemented.');
        };
        _proto8.setArrayBuffer = function setArrayBuffer(name, arrayBuffer) {
          throw new Error('Method not implemented.');
        };
        _proto8.addTexture = function addTexture(name, slotName, sampler) {
          if (sampler === void 0) {
            sampler = null;
          }
          throw new Error('Method not implemented.');
        };
        _proto8.addStorageBuffer = function addStorageBuffer(name, accessType, slotName) {
          this._addComputeResource(name, accessType, slotName);
        };
        _proto8.addStorageImage = function addStorageImage(name, accessType, slotName) {
          this._addComputeResource(name, accessType, slotName);
        };
        _proto8.addMaterialTexture = function addMaterialTexture(resourceName, flags) {
          throw new Error('Method not implemented.');
        };
        _proto8.addQueue = function addQueue(layoutName) {
          if (layoutName === void 0) {
            layoutName = 'default';
          }
          var layoutId = this._lg.locateChild(this._layoutID, layoutName);
          if (DEBUG) {
            assert(layoutId !== 0xFFFFFFFF);
          }
          var queue = renderGraphPool.createRenderQueue(QueueHint.RENDER_OPAQUE, layoutId);
          var data = renderGraphPool.createRenderData();
          var queueID = this._renderGraph.addVertex(RenderGraphValue.Queue, queue, '', layoutName, data, false, this._vertID);
          var computeQueueBuilder = pipelinePool.computeQueueBuilder.add();
          computeQueueBuilder.update(data, this._renderGraph, this._lg, queueID, queue, this._pipeline);
          return computeQueueBuilder;
        };
        _proto8._addComputeResource = function _addComputeResource(name, accessType, slotName) {
          var view = renderGraphPool.createComputeView(slotName);
          view.accessType = accessType;
          if (DEBUG) {
            assert(Boolean(view.name));
            assert(Boolean(name && this._resourceGraph.contains(name)));
            var descriptorName = view.name;
            var descriptorID = this._lg.attributeIndex.get(descriptorName);
            assert(descriptorID !== undefined);
          }
          if (this._pass.computeViews.has(name)) {
            var _this$_pass$computeVi2;
            (_this$_pass$computeVi2 = this._pass.computeViews.get(name)) === null || _this$_pass$computeVi2 === void 0 ? void 0 : _this$_pass$computeVi2.push(view);
          } else {
            this._pass.computeViews.set(name, [view]);
          }
        };
        _createClass(WebComputePassBuilder, [{
          key: "name",
          get: function get() {
            return this._renderGraph.getName(this._vertID);
          },
          set: function set(name) {
            this._renderGraph.setName(this._vertID, name);
          }
        }]);
        return WebComputePassBuilder;
      }(WebSetter));
      _export("WebMovePassBuilder", WebMovePassBuilder = /*#__PURE__*/function () {
        function WebMovePassBuilder(renderGraph, vertID, pass) {
          this._renderGraph = void 0;
          this._vertID = void 0;
          this._pass = void 0;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._pass = pass;
        }
        var _proto9 = WebMovePassBuilder.prototype;
        _proto9.setCustomBehavior = function setCustomBehavior(name) {
          throw new Error('Method not implemented.');
        };
        _proto9.addPair = function addPair(pair) {
          this._pass.movePairs.push(pair);
        };
        _createClass(WebMovePassBuilder, [{
          key: "name",
          get: function get() {
            return this._renderGraph.getName(this._vertID);
          },
          set: function set(name) {
            this._renderGraph.setName(this._vertID, name);
          }
        }]);
        return WebMovePassBuilder;
      }());
      _export("WebCopyPassBuilder", WebCopyPassBuilder = /*#__PURE__*/function () {
        function WebCopyPassBuilder(renderGraph, vertID, pass) {
          this._renderGraph = void 0;
          this._vertID = void 0;
          this._pass = void 0;
          this._renderGraph = renderGraph;
          this._vertID = vertID;
          this._pass = pass;
        }
        var _proto10 = WebCopyPassBuilder.prototype;
        _proto10.addPair = function addPair(pair) {
          throw new Error('Method not implemented.');
        };
        _proto10.setCustomBehavior = function setCustomBehavior(name) {
          throw new Error('Method not implemented.');
        };
        _createClass(WebCopyPassBuilder, [{
          key: "name",
          get: function get() {
            return this._renderGraph.getName(this._vertID);
          },
          set: function set(name) {
            this._renderGraph.setName(this._vertID, name);
          }
        }]);
        return WebCopyPassBuilder;
      }());
      _export("WebPipeline", WebPipeline = /*#__PURE__*/function () {
        function WebPipeline(layoutGraph) {
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
        var _proto11 = WebPipeline.prototype;
        _proto11.addCustomBuffer = function addCustomBuffer(name, info, type) {
          throw new Error('Method not implemented.');
        };
        _proto11.addCustomTexture = function addCustomTexture(name, info, type) {
          throw new Error('Method not implemented.');
        };
        _proto11.addRenderWindow = function addRenderWindow(name, format, width, height, renderWindow) {
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateRenderWindow(name, renderWindow);
            return resID;
          }
          // Objects need to be held for a long time, so there is no need to use pool management
          var desc = new ResourceDesc();
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
        };
        _proto11.updateRenderWindow = function updateRenderWindow(name, renderWindow) {
          var resId = this.resourceGraph.vertex(name);
          var desc = this.resourceGraph.getDesc(resId);
          desc.width = renderWindow.width;
          desc.height = renderWindow.height;
          var currFbo = this.resourceGraph._vertices[resId]._object;
          if (currFbo !== renderWindow.framebuffer) {
            this.resourceGraph._vertices[resId]._object = renderWindow.framebuffer;
          }
        };
        _proto11.updateStorageBuffer = function updateStorageBuffer(name, size, format) {
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          var resId = this.resourceGraph.vertex(name);
          var desc = this.resourceGraph.getDesc(resId);
          desc.width = size;
          if (format !== Format.UNKNOWN) {
            desc.format = format;
          }
        };
        _proto11.updateRenderTarget = function updateRenderTarget(name, width, height, format) {
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          var resId = this.resourceGraph.vertex(name);
          var desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
          if (format !== Format.UNKNOWN) desc.format = format;
        };
        _proto11.updateDepthStencil = function updateDepthStencil(name, width, height, format) {
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          var resId = this.resourceGraph.vertex(name);
          var desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
          if (format !== Format.UNKNOWN) desc.format = format;
        };
        _proto11.updateStorageTexture = function updateStorageTexture(name, width, height, format) {
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          var resId = this.resourceGraph.vertex(name);
          var desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
          if (format !== Format.UNKNOWN) {
            desc.format = format;
          }
        };
        _proto11.updateShadingRateTexture = function updateShadingRateTexture(name, width, height) {
          var resId = this.resourceGraph.vertex(name);
          var desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
        };
        _proto11.addBuffer = function addBuffer(name, size, flags, residency) {
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateBuffer(name, size);
            return resID;
          }
          var desc = new ResourceDesc();
          desc.dimension = ResourceDimension.BUFFER;
          desc.width = size;
          desc.flags = flags;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP));
        };
        _proto11.updateBuffer = function updateBuffer(name, size) {
          this.updateResource(name, Format.UNKNOWN, size, 0, 0, 0, 0, SampleCount.X1);
        };
        _proto11.addExternalTexture = function addExternalTexture(name, texture, flags) {
          throw new Error('Method not implemented.');
        };
        _proto11.updateExternalTexture = function updateExternalTexture(name, texture) {
          throw new Error('Method not implemented.');
        };
        _proto11.addTexture = function addTexture(name, textureType, format, width, height, depth, arraySize, mipLevels, sampleCount, flags, residency) {
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateTexture(name, format, width, height, depth, arraySize, mipLevels, sampleCount);
            return resID;
          }
          var desc = new ResourceDesc();
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
        };
        _proto11.updateTexture = function updateTexture(name, format, width, height, depth, arraySize, mipLevels, sampleCount) {
          this.updateResource(name, format, width, height, depth, arraySize, mipLevels, sampleCount);
        };
        _proto11.addResource = function addResource(name, dimension, format, width, height, depth, arraySize, mipLevels, sampleCount, flags, residency) {
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateResource(name, format, width, height, depth, arraySize, mipLevels, sampleCount);
            return resID;
          }
          if (dimension === ResourceDimension.BUFFER) {
            return this.addBuffer(name, width, flags, residency);
          } else {
            return this.addTexture(name, getTextureType(dimension, arraySize), format, width, height, depth, arraySize, mipLevels, sampleCount, flags, residency);
          }
        };
        _proto11.updateResource = function updateResource(name, format, width, height, depth, arraySize, mipLevels, sampleCount) {
          var resId = this.resourceGraph.vertex(name);
          var desc = this.resourceGraph.getDesc(resId);
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = desc.dimension === ResourceDimension.TEXTURE3D ? depth : arraySize;
          desc.mipLevels = mipLevels;
          if (format !== Format.UNKNOWN) {
            desc.format = format;
          }
          desc.sampleCount = sampleCount;
        };
        _proto11.containsResource = function containsResource(name) {
          return this._resourceGraph.contains(name);
        };
        _proto11.addResolvePass = function addResolvePass(resolvePairs) {
          // TODO: implement resolve pass
          throw new Error('Method not implemented.');
        };
        _proto11.addComputePass = function addComputePass(passName) {
          var name = 'Compute';
          var pass = renderGraphPool.createComputePass();
          var data = renderGraphPool.createRenderData();
          var vertID = this._renderGraph.addVertex(RenderGraphValue.Compute, pass, name, passName, data, false);
          var result = pipelinePool.computePassBuilder.add();
          result.update(data, this._renderGraph, this._layoutGraph, this._resourceGraph, vertID, pass, this._pipelineSceneData);
          setComputeConstants(result, passName);
          initGlobalDescBinding(data, passName);
          return result;
        };
        _proto11.addUploadPass = function addUploadPass(uploadPairs) {
          var name = 'UploadPass';
          var pass = renderGraphPool.createCopyPass();
          for (var _iterator5 = _createForOfIteratorHelperLoose(uploadPairs), _step5; !(_step5 = _iterator5()).done;) {
            var up = _step5.value;
            pass.uploadPairs.push(up);
          }
          var vertID = this._renderGraph.addVertex(RenderGraphValue.Copy, pass, name, '', renderGraphPool.createRenderData(), false);
          // const result = new WebCopyPassBuilder(this._renderGraph!, vertID, pass);
        };
        _proto11.addCopyPass = function addCopyPass(copyPairs) {
          // const renderData = new RenderData();
          // const vertID = this._renderGraph!.addVertex<RenderGraphValue.Copy>(
          //     RenderGraphValue.Copy, copyPass, 'copyPass', 'copy-pass', renderData, false,
          // );
          // const copyPass = new CopyPass();
          // copyPass.copyPairs.splice(0, copyPass.copyPairs.length, ...copyPairs);
          // const result = new WebCopyPassBuilder(this._renderGraph!, vertID, copyPass);
          // return result;
          for (var _iterator6 = _createForOfIteratorHelperLoose(copyPairs), _step6; !(_step6 = _iterator6()).done;) {
            var pair = _step6.value;
            var targetName = pair.target;
            var tarVerId = this.resourceGraph.find(targetName);
            if (DEBUG) {
              var srcVerId = this.resourceGraph.find(pair.source);
              assert(srcVerId !== 0xFFFFFFFF, "The resource named " + pair.source + " was not found in Resource Graph.");
              assert(tarVerId !== 0xFFFFFFFF, "The resource named " + targetName + " was not found in Resource Graph.");
            }
            var resDesc = this.resourceGraph.getDesc(tarVerId);
            var currRaster = this.addRenderPass(resDesc.width, resDesc.height, 'copy-pass');
            currRaster.addRenderTarget(targetName, LoadOp.CLEAR, StoreOp.STORE, pipelinePool.createColor());
            currRaster.addTexture(pair.source, 'outputResultMap');
            currRaster.addQueue(QueueHint.NONE).addFullscreenQuad(this._copyPassMat, 0, SceneFlags.NONE);
          }
        };
        _proto11._generateConstantMacros = function _generateConstantMacros(clusterEnabled) {
          var str = '';
          str += "#define CC_DEVICE_SUPPORT_FLOAT_TEXTURE " + (this._device.getFormatFeatures(Format.RGBA32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) ? 1 : 0) + "\n";
          // str += `#define CC_ENABLE_CLUSTERED_LIGHT_CULLING ${clusterEnabled ? 1 : 0}\n`; // defined in material
          str += "#define CC_DEVICE_MAX_VERTEX_UNIFORM_VECTORS " + this._device.capabilities.maxVertexUniformVectors + "\n";
          str += "#define CC_DEVICE_MAX_FRAGMENT_UNIFORM_VECTORS " + this._device.capabilities.maxFragmentUniformVectors + "\n";
          str += "#define CC_DEVICE_CAN_BENEFIT_FROM_INPUT_ATTACHMENT " + (this._device.hasFeature(Feature.INPUT_ATTACHMENT_BENEFIT) ? 1 : 0) + "\n";
          str += "#define CC_PLATFORM_ANDROID_AND_WEBGL " + (systemInfo.os === OS.ANDROID && systemInfo.isBrowser ? 1 : 0) + "\n";
          str += "#define CC_ENABLE_WEBGL_HIGHP_STRUCT_VALUES " + (macro.ENABLE_WEBGL_HIGHP_STRUCT_VALUES ? 1 : 0) + "\n";
          var jointUniformCapacity = UBOSkinning.JOINT_UNIFORM_CAPACITY;
          str += "#define CC_JOINT_UNIFORM_CAPACITY " + jointUniformCapacity + "\n";
          this._constantMacros = str;
          this._layoutGraph.constantMacros = this._constantMacros;
        };
        _proto11.setCustomPipelineName = function setCustomPipelineName(name) {
          this._customPipelineName = name;
          if (this._customPipelineName === 'Deferred') {
            this._usesDeferredPipeline = true;
          }
        };
        _proto11.getGlobalDescriptorSetData = function getGlobalDescriptorSetData() {
          var stageId = this.layoutGraph.locateChild(this.layoutGraph.nullVertex(), 'default');
          assert(stageId !== 0xFFFFFFFF);
          var layout = this.layoutGraph.getLayout(stageId);
          var layoutData = layout.descriptorSets.get(UpdateFrequency.PER_PASS);
          return layoutData;
        };
        _proto11._initCombineSignY = function _initCombineSignY() {
          var device = this._device;
          this._combineSignY = device.capabilities.screenSpaceSignY * 0.5 + 0.5 << 1 | device.capabilities.clipSpaceSignY * 0.5 + 0.5;
        };
        _proto11.getCombineSignY = function getCombineSignY() {
          return this._combineSignY;
        };
        _proto11._compileMaterial = function _compileMaterial() {
          this._copyPassMat.initialize({
            effectName: 'pipeline/copy-pass'
          });
          for (var i = 0; i < this._copyPassMat.passes.length; ++i) {
            this._copyPassMat.passes[i].tryCompile();
          }
        };
        _proto11.activate = function activate(swapchain) {
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
          var isFloat = supportsR32FloatTexture(this._device) ? 0 : 1;
          this.setMacroInt('CC_SHADOWMAP_FORMAT', isFloat);
          // 0: SHADOWMAP_LINER_DEPTH_OFF, 1: SHADOWMAP_LINER_DEPTH_ON.
          var isLinear = this._device.gfxAPI === API.WEBGL ? 1 : 0;
          this.setMacroInt('CC_SHADOWMAP_USE_LINEAR_DEPTH', isLinear);
          var director = cclegacy.director;
          var root = director.root;
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
        };
        _proto11.destroy = function destroy() {
          var _this$_globalDSManage, _this$_globalDSManage2, _this$_pipelineSceneD;
          (_this$_globalDSManage = this._globalDSManager) === null || _this$_globalDSManage === void 0 ? void 0 : _this$_globalDSManage.globalDescriptorSet.destroy();
          (_this$_globalDSManage2 = this._globalDSManager) === null || _this$_globalDSManage2 === void 0 ? void 0 : _this$_globalDSManage2.destroy();
          (_this$_pipelineSceneD = this._pipelineSceneData) === null || _this$_pipelineSceneD === void 0 ? void 0 : _this$_pipelineSceneD.destroy();
          return true;
        };
        _proto11.getMacroString = function getMacroString(name) {
          var str = this._macros[name];
          if (str === undefined) {
            return '';
          }
          return str;
        };
        _proto11.getMacroInt = function getMacroInt(name) {
          var value = this._macros[name];
          if (value === undefined) {
            return 0;
          }
          return value;
        };
        _proto11.getMacroBool = function getMacroBool(name) {
          var value = this._macros[name];
          if (value === undefined) {
            return false;
          }
          return value;
        };
        _proto11.getSamplerInfo = function getSamplerInfo(name) {
          if (this.containsResource(name)) {
            var verId = this._resourceGraph.vertex(name);
            return this._resourceGraph.getSampler(verId);
          }
          return null;
        };
        _proto11.setMacroString = function setMacroString(name, value) {
          this._macros[name] = value;
        };
        _proto11.setMacroInt = function setMacroInt(name, value) {
          this._macros[name] = value;
        };
        _proto11.setMacroBool = function setMacroBool(name, value) {
          this._macros[name] = value;
        };
        _proto11.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          var builder = cclegacy.rendering.getCustomPipeline(macro.CUSTOM_PIPELINE_NAME);
          if (builder) {
            if (typeof builder.onGlobalPipelineStateChanged === 'function') {
              builder.onGlobalPipelineStateChanged();
            }
          }
        };
        _proto11.beginSetup = function beginSetup() {
          if (!this._renderGraph) this._renderGraph = new RenderGraph();
          pipelinePool.reset();
        };
        _proto11.endSetup = function endSetup() {
          this.compile();
        };
        _proto11.addStorageBuffer = function addStorageBuffer(name, format, size, residency) {
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateStorageBuffer(name, size, format);
            return resID;
          }
          var desc = new ResourceDesc();
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
        };
        _proto11.addRenderTarget = function addRenderTarget(name, format, width, height, residency) {
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateRenderTarget(name, width, height, format);
            return resID;
          }
          var desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = format;
          desc.sampleCount = SampleCount.X1;
          desc.flags = ResourceFlags.COLOR_ATTACHMENT | ResourceFlags.SAMPLED;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP));
        };
        _proto11.addDepthStencil = function addDepthStencil(name, format, width, height, residency) {
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateDepthStencil(name, width, height, format);
            return resID;
          }
          var desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = format;
          desc.sampleCount = SampleCount.X1;
          desc.flags = ResourceFlags.DEPTH_STENCIL_ATTACHMENT | ResourceFlags.SAMPLED;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE));
        };
        _proto11.addStorageTexture = function addStorageTexture(name, format, width, height, residency) {
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.updateStorageTexture(name, width, height, format);
            return resID;
          }
          var desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = format;
          desc.flags = ResourceFlags.STORAGE | ResourceFlags.SAMPLED;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE));
        };
        _proto11.addShadingRateTexture = function addShadingRateTexture(name, width, height, residency) {
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          var resID = this._resourceGraph.find(name);
          if (resID !== 0xFFFFFFFF) {
            this.addShadingRateTexture(name, width, height);
            return resID;
          }
          var desc = new ResourceDesc();
          desc.dimension = ResourceDimension.TEXTURE2D;
          desc.width = width;
          desc.height = height;
          desc.depthOrArraySize = 1;
          desc.mipLevels = 1;
          desc.format = Format.R8UI;
          desc.flags = ResourceFlags.SHADING_RATE | ResourceFlags.STORAGE | ResourceFlags.SAMPLED;
          return this._resourceGraph.addVertex(ResourceGraphValue.Managed, new ManagedResource(), name, desc, new ResourceTraits(residency), new ResourceStates(), new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP));
        };
        _proto11.beginFrame = function beginFrame() {
          // noop
        };
        _proto11.update = function update(camera) {
          // noop
        };
        _proto11.endFrame = function endFrame() {
          var _this$renderGraph;
          (_this$renderGraph = this.renderGraph) === null || _this$renderGraph === void 0 ? void 0 : _this$renderGraph.clear();
        };
        _proto11.compile = function compile() {
          if (!this._renderGraph) {
            throw new Error('RenderGraph cannot be built without being created');
          }
          if (!this._compiler) {
            this._compiler = new Compiler(this, this._renderGraph, this._resourceGraph, this._layoutGraph);
          }
          this._compiler.compile(this._renderGraph);
        };
        _proto11.execute = function execute() {
          if (!this._renderGraph) {
            throw new Error('Cannot run without creating rendergraph');
          }
          if (!this._executor) {
            this._executor = new Executor(this, this._pipelineUBO, this._device, this._resourceGraph, this.layoutGraph, this.width, this.height);
          }
          this._executor.resize(this.width, this.height);
          this._executor.execute(this._renderGraph);
        };
        _proto11._applySize = function _applySize(cameras) {
          var _this8 = this;
          var newWidth = this._width;
          var newHeight = this._height;
          cameras.forEach(function (camera) {
            var window = camera.window;
            newWidth = Math.max(window.width, newWidth);
            newHeight = Math.max(window.height, newHeight);
            if (!_this8._cameras.includes(camera)) {
              _this8._cameras.push(camera);
            }
          });
          if (newWidth !== this._width || newHeight !== this._height) {
            this._width = newWidth;
            this._height = newHeight;
          }
        };
        _proto11.render = function render(cameras) {
          if (cameras.length === 0) {
            return;
          }
          this._applySize(cameras);
          decideProfilerCamera(cameras);
          // build graph
          this.beginFrame();
          this.execute();
          this.endFrame();
        };
        _proto11.addBuiltinReflectionProbePass = function addBuiltinReflectionProbePass(camera) {
          var reflectionProbeManager = cclegacy.internal.reflectionProbeManager;
          if (!reflectionProbeManager) return;
          var probes = reflectionProbeManager.getProbes();
          if (probes.length === 0) return;
          for (var i = 0; i < probes.length; i++) {
            var probe = probes[i];
            if (probe.needRender) {
              if (probes[i].probeType === ProbeType.PLANAR) {
                buildReflectionProbePass(camera, this, probe, probe.realtimePlanarTexture.window, 0);
              } else if (EDITOR) {
                for (var faceIdx = 0; faceIdx < probe.bakedCubeTextures.length; faceIdx++) {
                  probe.updateCameraDir(faceIdx);
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  buildReflectionProbePass(camera, this, probe, probe.bakedCubeTextures[faceIdx].window, faceIdx);
                }
                probe.needRender = false;
              }
            }
          }
        };
        _proto11.addRenderPassImpl = function addRenderPassImpl(width, height, layoutName, count, quality) {
          if (count === void 0) {
            count = 1;
          }
          if (quality === void 0) {
            quality = 0;
          }
          if (DEBUG) {
            var stageId = this.layoutGraph.locateChild(this.layoutGraph.nullVertex(), layoutName);
            assert(stageId !== 0xFFFFFFFF);
            var layout = this.layoutGraph.getLayout(stageId);
            assert(Boolean(layout));
            assert(Boolean(layout.descriptorSets.get(UpdateFrequency.PER_PASS)));
          }
          var name = 'Raster';
          var pass = renderGraphPool.createRasterPass();
          pass.viewport.width = width;
          pass.viewport.height = height;
          pass.count = count;
          pass.quality = quality;
          var data = renderGraphPool.createRenderData();
          var vertID = this._renderGraph.addVertex(RenderGraphValue.RasterPass, pass, name, layoutName, data, false);
          var result = pipelinePool.renderPassBuilder.add();
          result.update(data, this._renderGraph, this._layoutGraph, this._resourceGraph, vertID, pass, this._pipelineSceneData);
          this._updateRasterPassConstants(result, width, height, layoutName);
          initGlobalDescBinding(data, layoutName);
          return result;
        };
        _proto11.addRenderPass = function addRenderPass(width, height, layoutName) {
          if (layoutName === void 0) {
            layoutName = 'default';
          }
          return this.addRenderPassImpl(width, height, layoutName);
        };
        _proto11.addMultisampleRenderPass = function addMultisampleRenderPass(width, height, count, quality, layoutName) {
          if (layoutName === void 0) {
            layoutName = 'default';
          }
          assert(count > 1);
          return this.addRenderPassImpl(width, height, layoutName, count, quality);
        };
        _proto11.getDescriptorSetLayout = function getDescriptorSetLayout(shaderName, freq) {
          var lg = this._layoutGraph;
          var phaseID = lg.shaderLayoutIndex.get(shaderName);
          var pplLayout = lg.getLayout(phaseID);
          var setLayout = pplLayout.descriptorSets.get(freq);
          return setLayout.descriptorSetLayout;
        };
        _proto11._updateRasterPassConstants = function _updateRasterPassConstants(setter, width, height, layoutName) {
          if (layoutName === void 0) {
            layoutName = 'default';
          }
          var director = cclegacy.director;
          var root = director.root;
          var shadingWidth = width;
          var shadingHeight = height;
          var pipeline = root.pipeline;
          var layoutGraph = pipeline.layoutGraph;
          // Global
          if (!setter.addConstant('CCGlobal', layoutName)) return;
          _uboVec.set(root.cumulativeTime, root.frameTime, director.getTotalFrames());
          setUniformOffset(setter, 'cc_time', Type.FLOAT4, _uboVec);
          _uboVec.set(shadingWidth, shadingHeight, 1.0 / shadingWidth, 1.0 / shadingHeight);
          setUniformOffset(setter, 'cc_screenSize', Type.FLOAT4, _uboVec);
          _uboVec.set(shadingWidth, shadingHeight, 1.0 / shadingWidth, 1.0 / shadingHeight);
          setUniformOffset(setter, 'cc_nativeSize', Type.FLOAT4, _uboVec);
          var debugView = root.debugView;
          _uboVec.set(0.0, 0.0, 0.0, 0.0);
          if (debugView) {
            var debugPackVec = [debugView.singleMode, 0.0, 0.0, 0.0];
            for (var i = DebugViewCompositeType.DIRECT_DIFFUSE; i < DebugViewCompositeType.MAX_BIT_COUNT; i++) {
              var idx = i >> 3;
              var bit = i % 8;
              debugPackVec[idx + 1] += (debugView.isCompositeModeEnabled(i) ? 1.0 : 0.0) * Math.pow(10.0, bit);
            }
            debugPackVec[3] += (debugView.lightingWithAlbedo ? 1.0 : 0.0) * Math.pow(10.0, 6.0);
            debugPackVec[3] += (debugView.csmLayerColoration ? 1.0 : 0.0) * Math.pow(10.0, 7.0);
            _uboVec.set(debugPackVec[0], debugPackVec[1], debugPackVec[2], debugPackVec[3]);
          }
          setUniformOffset(setter, 'cc_debug_view_mode', Type.FLOAT4, _uboVec);
        };
        _createClass(WebPipeline, [{
          key: "type",
          get: function get() {
            return PipelineType.BASIC;
          }
        }, {
          key: "capabilities",
          get: function get() {
            return new PipelineCapabilities();
          }
        }, {
          key: "enableCpuLightCulling",
          get: function get() {
            if (!this._executor) {
              return true;
            }
            return this._executor._context.culling.enableLightCulling;
          },
          set: function set(enable) {
            if (!this._executor) {
              return;
            }
            this._executor._context.culling.enableLightCulling = enable;
          }
        }, {
          key: "globalDescriptorSetData",
          get: function get() {
            return this._globalDescSetData;
          }
        }, {
          key: "defaultSampler",
          get: function get() {
            return this._defaultSampler;
          }
        }, {
          key: "defaultTexture",
          get: function get() {
            return builtinResMgr.get('default-texture').getGFXTexture();
          }
        }, {
          key: "device",
          get: function get() {
            return this._device;
          }
        }, {
          key: "lightingMode",
          get: function get() {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return this._lightingMode;
          },
          set: function set(mode) {
            this._lightingMode = mode;
          }
        }, {
          key: "usesDeferredPipeline",
          get: function get() {
            return this._usesDeferredPipeline;
          }
        }, {
          key: "macros",
          get: function get() {
            return this._macros;
          }
        }, {
          key: "globalDSManager",
          get: function get() {
            return this._globalDSManager;
          }
        }, {
          key: "descriptorSetLayout",
          get: function get() {
            return this._globalDSManager.descriptorSetLayout;
          }
        }, {
          key: "descriptorSet",
          get: function get() {
            return this._globalDSManager.globalDescriptorSet;
          }
        }, {
          key: "globalDescriptorSet",
          get: function get() {
            return this._globalDescriptorSet;
          }
        }, {
          key: "globalDescriptorSetInfo",
          get: function get() {
            return this._globalDescriptorSetInfo;
          }
        }, {
          key: "commandBuffers",
          get: function get() {
            return [this._device.commandBuffer];
          }
        }, {
          key: "pipelineSceneData",
          get: function get() {
            return this._pipelineSceneData;
          }
        }, {
          key: "constantMacros",
          get: function get() {
            return this._constantMacros;
          }
        }, {
          key: "profiler",
          get: function get() {
            return this._profiler;
          },
          set: function set(profiler) {
            this._profiler = profiler;
          }
        }, {
          key: "geometryRenderer",
          get: function get() {
            throw new Error('Method not implemented.');
          }
        }, {
          key: "shadingScale",
          get: function get() {
            return this._pipelineSceneData.shadingScale;
          },
          set: function set(scale) {
            this._pipelineSceneData.shadingScale = scale;
          }
        }, {
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }, {
          key: "renderGraph",
          get: function get() {
            return this._renderGraph;
          }
        }, {
          key: "resourceGraph",
          get: function get() {
            return this._resourceGraph;
          }
        }, {
          key: "layoutGraph",
          get: function get() {
            return this._layoutGraph;
          }
        }, {
          key: "resourceUses",
          get: function get() {
            return this._resourceUses;
          }
        }]);
        return WebPipeline;
      }());
      WebPipeline.MAX_BLOOM_FILTER_PASS_NUM = 6;
      // csm uniform used vectors count
      WebPipeline.CSM_UNIFORM_VECTORS = 61;
      // all global uniform used vectors count
      WebPipeline.GLOBAL_UNIFORM_VECTORS = 64;
    }
  };
});