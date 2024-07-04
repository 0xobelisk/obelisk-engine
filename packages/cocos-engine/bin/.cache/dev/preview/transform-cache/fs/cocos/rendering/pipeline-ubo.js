System.register("q-bundled:///fs/cocos/rendering/pipeline-ubo.js", ["./define.js", "../gfx/index.js", "../render-scene/scene/camera.js", "../core/index.js", "../render-scene/scene/shadows.js", "../render-scene/scene/light.js", "../asset/asset-manager/builtin-res-mgr.js", "./debug-view.js", "./custom/define.js"], function (_export, _context) {
  "use strict";

  var UBOGlobal, UBOShadow, UBOCamera, UNIFORM_SHADOWMAP_BINDING, supportsR32FloatTexture, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, UBOCSM, isEnableEffect, BufferInfo, BufferUsageBit, MemoryUsageBit, Camera, Mat4, Vec3, Vec4, Color, toRadian, cclegacy, CSMLevel, PCFType, ShadowType, LightType, builtinResMgr, DebugViewCompositeType, getDescBindingFromName, _matShadowView, _matShadowProj, _matShadowViewProj, _vec4ShadowInfo, _lightDir, _tempVec3, PipelineUBO;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
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
                                                                                                                                                                                                                                                                                                                                                                                            */
  return {
    setters: [function (_defineJs) {
      UBOGlobal = _defineJs.UBOGlobal;
      UBOShadow = _defineJs.UBOShadow;
      UBOCamera = _defineJs.UBOCamera;
      UNIFORM_SHADOWMAP_BINDING = _defineJs.UNIFORM_SHADOWMAP_BINDING;
      supportsR32FloatTexture = _defineJs.supportsR32FloatTexture;
      UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING = _defineJs.UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING;
      UBOCSM = _defineJs.UBOCSM;
      isEnableEffect = _defineJs.isEnableEffect;
    }, function (_gfxIndexJs) {
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
    }, function (_renderSceneSceneCameraJs) {
      Camera = _renderSceneSceneCameraJs.Camera;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      Color = _coreIndexJs.Color;
      toRadian = _coreIndexJs.toRadian;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderSceneSceneShadowsJs) {
      CSMLevel = _renderSceneSceneShadowsJs.CSMLevel;
      PCFType = _renderSceneSceneShadowsJs.PCFType;
      ShadowType = _renderSceneSceneShadowsJs.ShadowType;
    }, function (_renderSceneSceneLightJs) {
      LightType = _renderSceneSceneLightJs.LightType;
    }, function (_assetAssetManagerBuiltinResMgrJs) {
      builtinResMgr = _assetAssetManagerBuiltinResMgrJs.builtinResMgr;
    }, function (_debugViewJs) {
      DebugViewCompositeType = _debugViewJs.DebugViewCompositeType;
    }, function (_customDefineJs) {
      getDescBindingFromName = _customDefineJs.getDescBindingFromName;
    }],
    execute: function () {
      _matShadowView = new Mat4();
      _matShadowProj = new Mat4();
      _matShadowViewProj = new Mat4();
      _vec4ShadowInfo = new Vec4();
      _lightDir = new Vec4(0.0, 0.0, 1.0, 0.0);
      _tempVec3 = new Vec3();
      _export("PipelineUBO", PipelineUBO = /*#__PURE__*/function () {
        function PipelineUBO() {
          this._globalUBO = new Float32Array(UBOGlobal.COUNT);
          this._cameraUBO = new Float32Array(UBOCamera.COUNT);
          this._shadowUBO = new Float32Array(UBOShadow.COUNT);
          this._csmUBO = new Float32Array(UBOCSM.COUNT);
        }
        PipelineUBO.updateGlobalUBOView = function updateGlobalUBOView(window, bufferView) {
          var director = cclegacy.director;
          var root = director.root;
          var fv = bufferView;
          var shadingWidth = Math.floor(window.width);
          var shadingHeight = Math.floor(window.height);

          // update UBOGlobal
          fv[UBOGlobal.TIME_OFFSET] = root.cumulativeTime;
          fv[UBOGlobal.TIME_OFFSET + 1] = root.frameTime;
          fv[UBOGlobal.TIME_OFFSET + 2] = director.getTotalFrames();
          fv[UBOGlobal.TIME_OFFSET + 3] = root.cumulativeTime - Math.floor(root.frameTime);
          fv[UBOGlobal.SCREEN_SIZE_OFFSET] = shadingWidth;
          fv[UBOGlobal.SCREEN_SIZE_OFFSET + 1] = shadingHeight;
          fv[UBOGlobal.SCREEN_SIZE_OFFSET + 2] = 1.0 / shadingWidth;
          fv[UBOGlobal.SCREEN_SIZE_OFFSET + 3] = 1.0 / shadingHeight;
          fv[UBOGlobal.NATIVE_SIZE_OFFSET] = shadingWidth;
          fv[UBOGlobal.NATIVE_SIZE_OFFSET + 1] = shadingHeight;
          fv[UBOGlobal.NATIVE_SIZE_OFFSET + 2] = 1.0 / fv[UBOGlobal.NATIVE_SIZE_OFFSET];
          fv[UBOGlobal.NATIVE_SIZE_OFFSET + 3] = 1.0 / fv[UBOGlobal.NATIVE_SIZE_OFFSET + 1];
          if (cclegacy.internal.reflectionProbeManager) {
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            fv[UBOGlobal.PROBE_INFO_OFFSET] = cclegacy.internal.reflectionProbeManager.getMaxProbeId() + 1;
          }
          var debugView = root.debugView;
          for (var i = 0; i <= 3; i++) {
            fv[UBOGlobal.DEBUG_VIEW_MODE_OFFSET + i] = 0.0;
          }
          if (debugView.isEnabled()) {
            fv[UBOGlobal.DEBUG_VIEW_MODE_OFFSET] = debugView.singleMode;
            for (var _i = DebugViewCompositeType.DIRECT_DIFFUSE; _i < DebugViewCompositeType.MAX_BIT_COUNT; _i++) {
              var offset = _i >> 3;
              var bit = _i % 8;
              fv[UBOGlobal.DEBUG_VIEW_MODE_OFFSET + 1 + offset] += (debugView.isCompositeModeEnabled(_i) ? 1.0 : 0.0) * Math.pow(10.0, bit);
            }
            fv[UBOGlobal.DEBUG_VIEW_MODE_OFFSET + 3] += (debugView.lightingWithAlbedo ? 1.0 : 0.0) * Math.pow(10.0, 6.0);
            fv[UBOGlobal.DEBUG_VIEW_MODE_OFFSET + 3] += (debugView.csmLayerColoration ? 1.0 : 0.0) * Math.pow(10.0, 7.0);
          }
        };
        PipelineUBO.updateCameraUBOView = function updateCameraUBOView(pipeline, bufferView, camera) {
          var _skybox$envmap;
          var scene = camera.scene ? camera.scene : cclegacy.director.getScene().renderScene;
          var mainLight = scene.mainLight;
          var sceneData = pipeline.pipelineSceneData;
          var ambient = sceneData.ambient;
          var skybox = sceneData.skybox;
          var fog = sceneData.fog;
          var shadowInfo = sceneData.shadows;
          var cv = bufferView;
          var exposure = camera.exposure;
          var isHDR = sceneData.isHDR;

          // update camera ubo
          cv[UBOCamera.SCREEN_SCALE_OFFSET] = sceneData.shadingScale;
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 1] = sceneData.shadingScale;
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 2] = 1.0 / cv[UBOCamera.SCREEN_SCALE_OFFSET];
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 3] = 1.0 / cv[UBOCamera.SCREEN_SCALE_OFFSET + 1];
          cv[UBOCamera.EXPOSURE_OFFSET] = exposure;
          cv[UBOCamera.EXPOSURE_OFFSET + 1] = 1.0 / exposure;
          cv[UBOCamera.EXPOSURE_OFFSET + 2] = isHDR ? 1.0 : 0.0;
          cv[UBOCamera.EXPOSURE_OFFSET + 3] = 1.0 / Camera.standardExposureValue;
          if (mainLight) {
            var shadowEnable = mainLight.shadowEnabled && shadowInfo.type === ShadowType.ShadowMap ? 1.0 : 0.0;
            var mainLightDir = mainLight.direction;
            _lightDir.set(mainLightDir.x, mainLightDir.y, mainLightDir.z, shadowEnable);
            Vec4.toArray(cv, _lightDir, UBOCamera.MAIN_LIT_DIR_OFFSET);
            Vec3.toArray(cv, mainLight.color, UBOCamera.MAIN_LIT_COLOR_OFFSET);
            if (mainLight.useColorTemperature) {
              var _colorTempRGB = mainLight.colorTemperatureRGB;
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET] *= _colorTempRGB.x;
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET + 1] *= _colorTempRGB.y;
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET + 2] *= _colorTempRGB.z;
            }
            if (isHDR) {
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET + 3] = mainLight.illuminance * exposure;
            } else {
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET + 3] = mainLight.illuminance;
            }
          } else {
            _lightDir.set(0, 0, 1, 0);
            Vec4.toArray(cv, _lightDir, UBOCamera.MAIN_LIT_DIR_OFFSET);
            Vec4.toArray(cv, Vec4.ZERO, UBOCamera.MAIN_LIT_COLOR_OFFSET);
          }
          var skyColor = ambient.skyColor;
          if (isHDR) {
            skyColor.w = ambient.skyIllum * exposure;
          } else {
            skyColor.w = ambient.skyIllum;
          }
          cv[UBOCamera.AMBIENT_SKY_OFFSET + 0] = skyColor.x;
          cv[UBOCamera.AMBIENT_SKY_OFFSET + 1] = skyColor.y;
          cv[UBOCamera.AMBIENT_SKY_OFFSET + 2] = skyColor.z;
          cv[UBOCamera.AMBIENT_SKY_OFFSET + 3] = skyColor.w;
          cv[UBOCamera.AMBIENT_GROUND_OFFSET + 0] = ambient.groundAlbedo.x;
          cv[UBOCamera.AMBIENT_GROUND_OFFSET + 1] = ambient.groundAlbedo.y;
          cv[UBOCamera.AMBIENT_GROUND_OFFSET + 2] = ambient.groundAlbedo.z;
          cv[UBOCamera.AMBIENT_GROUND_OFFSET + 3] = skybox.envmap ? (_skybox$envmap = skybox.envmap) === null || _skybox$envmap === void 0 ? void 0 : _skybox$envmap.mipmapLevel : 1.0;
          Mat4.toArray(cv, camera.matView, UBOCamera.MAT_VIEW_OFFSET);
          Mat4.toArray(cv, camera.node.worldMatrix, UBOCamera.MAT_VIEW_INV_OFFSET);
          Vec3.toArray(cv, camera.position, UBOCamera.CAMERA_POS_OFFSET);
          Mat4.toArray(cv, camera.matProj, UBOCamera.MAT_PROJ_OFFSET);
          Mat4.toArray(cv, camera.matProjInv, UBOCamera.MAT_PROJ_INV_OFFSET);
          Mat4.toArray(cv, camera.matViewProj, UBOCamera.MAT_VIEW_PROJ_OFFSET);
          Mat4.toArray(cv, camera.matViewProjInv, UBOCamera.MAT_VIEW_PROJ_INV_OFFSET);
          cv[UBOCamera.CAMERA_POS_OFFSET + 3] = this.getCombineSignY();
          cv[UBOCamera.SURFACE_TRANSFORM_OFFSET] = camera.surfaceTransform;
          cv[UBOCamera.SURFACE_TRANSFORM_OFFSET + 1] = camera.cameraUsage;
          cv[UBOCamera.SURFACE_TRANSFORM_OFFSET + 2] = Math.cos(toRadian(sceneData.skybox.getRotationAngle()));
          cv[UBOCamera.SURFACE_TRANSFORM_OFFSET + 3] = Math.sin(toRadian(sceneData.skybox.getRotationAngle()));
          var colorTempRGB = fog.colorArray;
          cv[UBOCamera.GLOBAL_FOG_COLOR_OFFSET] = colorTempRGB.x;
          cv[UBOCamera.GLOBAL_FOG_COLOR_OFFSET + 1] = colorTempRGB.y;
          cv[UBOCamera.GLOBAL_FOG_COLOR_OFFSET + 2] = colorTempRGB.z;
          cv[UBOCamera.GLOBAL_FOG_COLOR_OFFSET + 3] = colorTempRGB.z;
          cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET] = fog.fogStart;
          cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET + 1] = fog.fogEnd;
          cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET + 2] = fog.fogDensity;
          cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET] = fog.fogTop;
          cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET + 1] = fog.fogRange;
          cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET + 2] = fog.fogAtten;
          cv[UBOCamera.NEAR_FAR_OFFSET] = camera.nearClip;
          cv[UBOCamera.NEAR_FAR_OFFSET + 1] = camera.farClip;
          cv[UBOCamera.NEAR_FAR_OFFSET + 2] = camera.getClipSpaceMinz();
          cv[UBOCamera.VIEW_PORT_OFFSET] = sceneData.shadingScale * camera.window.width * camera.viewport.x;
          cv[UBOCamera.VIEW_PORT_OFFSET + 1] = sceneData.shadingScale * camera.window.height * camera.viewport.y;
          cv[UBOCamera.VIEW_PORT_OFFSET + 2] = sceneData.shadingScale * camera.window.width * camera.viewport.z;
          cv[UBOCamera.VIEW_PORT_OFFSET + 3] = sceneData.shadingScale * camera.window.height * camera.viewport.w;
        };
        PipelineUBO.getPCFRadius = function getPCFRadius(shadowInfo, mainLight) {
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
        };
        PipelineUBO.updatePlanarNormalAndDistance = function updatePlanarNormalAndDistance(shadowInfo, shadowUBO) {
          Vec3.normalize(_tempVec3, shadowInfo.normal);
          shadowUBO[UBOShadow.PLANAR_NORMAL_DISTANCE_INFO_OFFSET + 0] = _tempVec3.x;
          shadowUBO[UBOShadow.PLANAR_NORMAL_DISTANCE_INFO_OFFSET + 1] = _tempVec3.y;
          shadowUBO[UBOShadow.PLANAR_NORMAL_DISTANCE_INFO_OFFSET + 2] = _tempVec3.z;
          shadowUBO[UBOShadow.PLANAR_NORMAL_DISTANCE_INFO_OFFSET + 3] = -shadowInfo.distance;
        };
        PipelineUBO.updateShadowUBOView = function updateShadowUBOView(pipeline, shadowBufferView, csmBufferView, camera) {
          var device = pipeline.device;
          var mainLight = camera.scene.mainLight;
          var sceneData = pipeline.pipelineSceneData;
          var shadowInfo = sceneData.shadows;
          var csmLayers = sceneData.csmLayers;
          var sv = shadowBufferView;
          var cv = csmBufferView;
          var csmSupported = sceneData.csmSupported;
          var packing = supportsR32FloatTexture(device) ? 0.0 : 1.0;
          if (mainLight && shadowInfo.enabled) {
            if (shadowInfo.type === ShadowType.ShadowMap) {
              if (mainLight.shadowEnabled) {
                if (mainLight.shadowFixedArea || mainLight.csmLevel === CSMLevel.LEVEL_1 || !csmSupported) {
                  var matShadowView = csmLayers.specialLayer.matShadowView;
                  var matShadowProj = csmLayers.specialLayer.matShadowProj;
                  var matShadowViewProj = csmLayers.specialLayer.matShadowViewProj;
                  var near = 0.1;
                  var far = 0;
                  var levelCount = 0;
                  if (mainLight.shadowFixedArea) {
                    near = mainLight.shadowNear;
                    far = mainLight.shadowFar;
                    levelCount = 0;
                  } else {
                    far = csmLayers.specialLayer.shadowCameraFar;
                    levelCount = 1;
                  }
                  Mat4.toArray(sv, matShadowView, UBOShadow.MAT_LIGHT_VIEW_OFFSET);
                  sv[UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET + 0] = matShadowProj.m10;
                  sv[UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET + 1] = matShadowProj.m14;
                  sv[UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET + 2] = matShadowProj.m11;
                  sv[UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET + 3] = matShadowProj.m15;
                  sv[UBOShadow.SHADOW_PROJ_INFO_OFFSET + 0] = matShadowProj.m00;
                  sv[UBOShadow.SHADOW_PROJ_INFO_OFFSET + 1] = matShadowProj.m05;
                  sv[UBOShadow.SHADOW_PROJ_INFO_OFFSET + 2] = 1.0 / matShadowProj.m00;
                  sv[UBOShadow.SHADOW_PROJ_INFO_OFFSET + 3] = 1.0 / matShadowProj.m05;
                  Mat4.toArray(sv, matShadowViewProj, UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);
                  _vec4ShadowInfo.set(near, far, 0, 1.0 - mainLight.shadowSaturation);
                  Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET);
                  _vec4ShadowInfo.set(LightType.DIRECTIONAL, packing, mainLight.shadowNormalBias, levelCount);
                  Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET);
                } else {
                  var layerThreshold = this.getPCFRadius(shadowInfo, mainLight);
                  for (var i = 0; i < mainLight.csmLevel; i++) {
                    var layer = csmLayers.layers[i];
                    var _matShadowView2 = layer.matShadowView;
                    _vec4ShadowInfo.set(_matShadowView2.m00, _matShadowView2.m04, _matShadowView2.m08, layerThreshold);
                    Vec4.toArray(cv, _vec4ShadowInfo, UBOCSM.CSM_VIEW_DIR_0_OFFSET + 4 * i);
                    _vec4ShadowInfo.set(_matShadowView2.m01, _matShadowView2.m05, _matShadowView2.m09, layer.splitCameraNear);
                    Vec4.toArray(cv, _vec4ShadowInfo, UBOCSM.CSM_VIEW_DIR_1_OFFSET + 4 * i);
                    _vec4ShadowInfo.set(_matShadowView2.m02, _matShadowView2.m06, _matShadowView2.m10, layer.splitCameraFar);
                    Vec4.toArray(cv, _vec4ShadowInfo, UBOCSM.CSM_VIEW_DIR_2_OFFSET + 4 * i);
                    var csmAtlas = layer.csmAtlas;
                    Vec4.toArray(cv, csmAtlas, UBOCSM.CSM_ATLAS_OFFSET + 4 * i);
                    var _matShadowViewProj2 = layer.matShadowViewProj;
                    Mat4.toArray(cv, _matShadowViewProj2, UBOCSM.MAT_CSM_VIEW_PROJ_OFFSET + 16 * i);
                    var _matShadowProj2 = layer.matShadowProj;
                    cv[UBOCSM.CSM_PROJ_DEPTH_INFO_OFFSET + 0 + 4 * i] = _matShadowProj2.m10;
                    cv[UBOCSM.CSM_PROJ_DEPTH_INFO_OFFSET + 1 + 4 * i] = _matShadowProj2.m14;
                    cv[UBOCSM.CSM_PROJ_DEPTH_INFO_OFFSET + 2 + 4 * i] = _matShadowProj2.m11;
                    cv[UBOCSM.CSM_PROJ_DEPTH_INFO_OFFSET + 3 + 4 * i] = _matShadowProj2.m15;
                    cv[UBOCSM.CSM_PROJ_INFO_OFFSET + 0 + 4 * i] = _matShadowProj2.m00;
                    cv[UBOCSM.CSM_PROJ_INFO_OFFSET + 1 + 4 * i] = _matShadowProj2.m05;
                    cv[UBOCSM.CSM_PROJ_INFO_OFFSET + 2 + 4 * i] = 1.0 / _matShadowProj2.m00;
                    cv[UBOCSM.CSM_PROJ_INFO_OFFSET + 3 + 4 * i] = 1.0 / _matShadowProj2.m05;
                  }
                  _vec4ShadowInfo.set(mainLight.csmTransitionRange, 0, 0, 0);
                  Vec4.toArray(cv, _vec4ShadowInfo, UBOCSM.CSM_SPLITS_INFO_OFFSET);
                  _vec4ShadowInfo.set(0.1, mainLight.shadowDistance, 0, 1.0 - mainLight.shadowSaturation);
                  Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET);
                  _vec4ShadowInfo.set(LightType.DIRECTIONAL, packing, mainLight.shadowNormalBias, mainLight.csmLevel);
                  Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET);
                }
                _vec4ShadowInfo.set(shadowInfo.size.x, shadowInfo.size.y, mainLight.shadowPcf, mainLight.shadowBias);
                Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET);
              }
            } else {
              PipelineUBO.updatePlanarNormalAndDistance(shadowInfo, sv);
              _vec4ShadowInfo.set(0, 0, 0, shadowInfo.planeBias);
              Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET);
            }
            Color.toArray(sv, shadowInfo.shadowColor, UBOShadow.SHADOW_COLOR_OFFSET);
          }
        };
        PipelineUBO.updateShadowUBOLightView = function updateShadowUBOLightView(pipeline, shadowBufferView, light, level) {
          var device = pipeline.device;
          var sceneData = pipeline.pipelineSceneData;
          var shadowInfo = sceneData.shadows;
          var csmLayers = sceneData.csmLayers;
          var sv = shadowBufferView;
          var packing = supportsR32FloatTexture(device) ? 0.0 : 1.0;
          var cap = pipeline.device.capabilities;
          var csmSupported = sceneData.csmSupported;
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
                    if (mainLight.shadowFixedArea || mainLight.csmLevel === CSMLevel.LEVEL_1 || !csmSupported) {
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
                      _vec4ShadowInfo.set(LightType.DIRECTIONAL, packing, mainLight.shadowNormalBias, 0);
                      Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET);
                    } else {
                      var layer = csmLayers.layers[level];
                      matShadowView = layer.matShadowView;
                      matShadowProj = layer.matShadowProj;
                      matShadowViewProj = layer.matShadowViewProj;
                      near = layer.splitCameraNear;
                      far = layer.splitCameraFar;
                      levelCount = mainLight.csmLevel;
                    }
                    Mat4.toArray(sv, matShadowView, UBOShadow.MAT_LIGHT_VIEW_OFFSET);
                    sv[UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET + 0] = matShadowProj.m10;
                    sv[UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET + 1] = matShadowProj.m14;
                    sv[UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET + 2] = matShadowProj.m11;
                    sv[UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET + 3] = matShadowProj.m15;
                    sv[UBOShadow.SHADOW_PROJ_INFO_OFFSET + 0] = matShadowProj.m00;
                    sv[UBOShadow.SHADOW_PROJ_INFO_OFFSET + 1] = matShadowProj.m05;
                    sv[UBOShadow.SHADOW_PROJ_INFO_OFFSET + 2] = 1.0 / matShadowProj.m00;
                    sv[UBOShadow.SHADOW_PROJ_INFO_OFFSET + 3] = 1.0 / matShadowProj.m05;
                    Mat4.toArray(sv, matShadowViewProj, UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);
                    _vec4ShadowInfo.set(near, far, 0, 1.0 - mainLight.shadowSaturation);
                    Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET);
                    _vec4ShadowInfo.set(LightType.DIRECTIONAL, packing, mainLight.shadowNormalBias, levelCount);
                    Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET);
                    _vec4ShadowInfo.set(shadowInfo.size.x, shadowInfo.size.y, mainLight.shadowPcf, mainLight.shadowBias);
                    Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET);
                  }
                }
                break;
              }
            case LightType.SPOT:
              {
                var spotLight = light;
                if (shadowInfo.enabled && spotLight && spotLight.shadowEnabled) {
                  Mat4.invert(_matShadowView, light.node.getWorldMatrix());
                  Mat4.toArray(sv, _matShadowView, UBOShadow.MAT_LIGHT_VIEW_OFFSET);
                  Mat4.perspective(_matShadowProj, spotLight.angle, 1.0, 0.001, spotLight.range, true, cap.clipSpaceMinZ, cap.clipSpaceSignY, 0);
                  Mat4.multiply(_matShadowViewProj, _matShadowProj, _matShadowView);
                  Mat4.toArray(sv, _matShadowViewProj, UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);
                  _vec4ShadowInfo.set(0.01, light.range, 0.0, 0.0);
                  Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET);
                  _vec4ShadowInfo.set(shadowInfo.size.x, shadowInfo.size.y, spotLight.shadowPcf, spotLight.shadowBias);
                  Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET);
                  _vec4ShadowInfo.set(LightType.SPOT, packing, spotLight.shadowNormalBias, 0.0);
                  Vec4.toArray(sv, _vec4ShadowInfo, UBOShadow.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET);
                }
                break;
              }
            default:
          }
          Color.toArray(sv, shadowInfo.shadowColor, UBOShadow.SHADOW_COLOR_OFFSET);
        };
        /**
         *|combinedSignY|clipSpaceSignY|screenSpaceSignY| Backends |
         *|    :--:     |    :--:      |      :--:      |   :--:   |
         *|      0      |      -1      |      -1        |  Vulkan  |
         *|      1      |       1      |      -1        |  Metal   |
         *|      2      |      -1      |       1        |          |
         *|      3      |       1      |       1        |  GL-like |
         */
        PipelineUBO.getCombineSignY = function getCombineSignY() {
          return PipelineUBO._combineSignY;
        };
        var _proto = PipelineUBO.prototype;
        _proto._initCombineSignY = function _initCombineSignY() {
          var device = this._device;
          PipelineUBO._combineSignY = device.capabilities.screenSpaceSignY * 0.5 + 0.5 << 1 | device.capabilities.clipSpaceSignY * 0.5 + 0.5;
        };
        _proto.activate = function activate(device, pipeline) {
          this._device = device;
          this._pipeline = pipeline;
          var ds = this._pipeline.descriptorSet;
          if (isEnableEffect()) {
            return;
          }
          this._initCombineSignY();
          var globalUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOGlobal.SIZE, UBOGlobal.SIZE));
          ds.bindBuffer(UBOGlobal.BINDING, globalUBO);
          var cameraUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOCamera.SIZE, UBOCamera.SIZE));
          ds.bindBuffer(UBOCamera.BINDING, cameraUBO);
          var shadowUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOShadow.SIZE, UBOShadow.SIZE));
          var binding = isEnableEffect() ? getDescBindingFromName('CCShadow') : UBOShadow.BINDING;
          ds.bindBuffer(binding, shadowUBO);
          var csmUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOCSM.SIZE, UBOCSM.SIZE));
          var csmBinding = isEnableEffect() ? getDescBindingFromName('CCCSM') : UBOCSM.BINDING;
          ds.bindBuffer(csmBinding, csmUBO);
        }

        /**
         * @en Update all UBOs
         * @zh 更新全部 UBO。
         */;
        _proto.updateGlobalUBO = function updateGlobalUBO(window) {
          var globalDSManager = this._pipeline.globalDSManager;
          var ds = this._pipeline.descriptorSet;
          var cmdBuffer = this._pipeline.commandBuffers;
          ds.update();
          PipelineUBO.updateGlobalUBOView(window, this._globalUBO);
          cmdBuffer[0].updateBuffer(ds.getBuffer(UBOGlobal.BINDING), this._globalUBO);
          globalDSManager.bindBuffer(UBOGlobal.BINDING, ds.getBuffer(UBOGlobal.BINDING));
          globalDSManager.update();
        };
        _proto.updateCameraUBO = function updateCameraUBO(camera) {
          var globalDSManager = this._pipeline.globalDSManager;
          var ds = this._pipeline.descriptorSet;
          var cmdBuffer = this._pipeline.commandBuffers;
          PipelineUBO.updateCameraUBOView(this._pipeline, this._cameraUBO, camera);
          cmdBuffer[0].updateBuffer(ds.getBuffer(UBOCamera.BINDING), this._cameraUBO);
          globalDSManager.bindBuffer(UBOCamera.BINDING, ds.getBuffer(UBOCamera.BINDING));
          globalDSManager.update();
        };
        _proto.updateShadowUBO = function updateShadowUBO(camera) {
          var sceneData = this._pipeline.pipelineSceneData;
          var shadowInfo = sceneData.shadows;
          if (!shadowInfo.enabled) return;
          var ds = this._pipeline.descriptorSet;
          var cmdBuffer = this._pipeline.commandBuffers;
          var shadowFrameBufferMap = sceneData.shadowFrameBufferMap;
          var mainLight = camera.scene.mainLight;
          if (mainLight && shadowFrameBufferMap.has(mainLight)) {
            ds.bindTexture(UNIFORM_SHADOWMAP_BINDING, shadowFrameBufferMap.get(mainLight).colorTextures[0]);
          }
          PipelineUBO.updateShadowUBOView(this._pipeline, this._shadowUBO, this._csmUBO, camera);
          ds.update();
          var binding = isEnableEffect() ? getDescBindingFromName('CCShadow') : UBOShadow.BINDING;
          cmdBuffer[0].updateBuffer(ds.getBuffer(binding), this._shadowUBO);
          var csmBinding = isEnableEffect() ? getDescBindingFromName('CCCSM') : UBOCSM.BINDING;
          cmdBuffer[0].updateBuffer(ds.getBuffer(csmBinding), this._csmUBO);
        };
        _proto.updateShadowUBOLight = function updateShadowUBOLight(globalDS, light, level) {
          if (level === void 0) {
            level = 0;
          }
          PipelineUBO.updateShadowUBOLightView(this._pipeline, this._shadowUBO, light, level);
          globalDS.bindTexture(UNIFORM_SHADOWMAP_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
          globalDS.bindTexture(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
          globalDS.update();
          var binding = isEnableEffect() ? getDescBindingFromName('CCShadow') : UBOShadow.BINDING;
          this._pipeline.commandBuffers[0].updateBuffer(globalDS.getBuffer(binding), this._shadowUBO);
        };
        _proto.updateShadowUBORange = function updateShadowUBORange(offset, data) {
          if (data instanceof Mat4) {
            Mat4.toArray(this._shadowUBO, data, offset);
          } else if (data instanceof Color) {
            Color.toArray(this._shadowUBO, data, offset);
          }
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ;
        _proto.destroy = function destroy() {};
        return PipelineUBO;
      }());
      PipelineUBO._combineSignY = 0;
    }
  };
});