System.register("q-bundled:///fs/cocos/rendering/custom/define.js", ["../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "../../render-scene/scene/reflection-probe.js", "../../render-scene/scene/camera.js", "../../render-scene/scene/shadows.js", "../../render-scene/scene/light.js", "../define.js", "./types.js", "../../core/index.js", "../../asset/assets/index.js", "../pipeline-funcs.js", "../../core/geometry/index.js", "../debug-view.js"], function (_export, _context) {
  "use strict";

  var EDITOR, BufferInfo, Buffer, BufferUsageBit, ClearFlagBit, Color, LoadOp, Format, Rect, Sampler, StoreOp, Texture, Viewport, MemoryUsageBit, Filter, Address, ProbeType, Camera, SKYBOX_FLAG, CSMLevel, ShadowType, LightType, UBOForwardLight, supportsR32FloatTexture, supportsRGBA16HalfFloatTexture, AccessType, AttachmentType, LightInfo, QueueHint, ResourceResidency, SceneFlags, UpdateFrequency, UploadPair, Vec2, Vec3, Vec4, macro, geometry, toRadian, cclegacy, assert, nextPow2, ImageAsset, Material, Texture2D, getProfilerCamera, SRGBToLinear, AABB, DebugViewCompositeType, DebugViewSingleType, _rangedDirLightBoundingBox, _tmpBoundingBox, AntiAliasing, _cameras, FxaaData, fxaaData, MAX_BLOOM_FILTER_PASS_NUM, BLOOM_PREFILTERPASS_INDEX, BLOOM_DOWNSAMPLEPASS_INDEX, BLOOM_UPSAMPLEPASS_INDEX, BLOOM_COMBINEPASS_INDEX, BloomData, bloomData, PostInfo, postInfo, shadowPass, ShadowInfo, shadowInfo, GBufferInfo, LightingInfo, lightingInfo, uniformMap, layouts, _varianceArray, _strengthParameterArray, _vec3Temp, _vec3Temp2, _vec4Temp, _vec4Temp2, COPY_INPUT_DS_PASS_INDEX, SSSS_BLUR_X_PASS_INDEX, SSSS_BLUR_Y_PASS_INDEX, EXPONENT, I_SAMPLES_COUNT, SSSSBlurData, ssssBlurData, ToneMappingInfo, toneMappingInfo, HBAOParams, _hbaoParams, vec2, MAX_LIGHTS_PER_CLUSTER, CLUSTERS_X, CLUSTERS_Y, CLUSTERS_Z, CLUSTER_COUNT, ClusterLightData, _clusterLightData, kLightMeterScale;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable @typescript-eslint/ban-ts-comment */ /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                    Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                   
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
  function getRTFormatBeforeToneMapping(ppl) {
    var useFloatOutput = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
    return ppl.pipelineSceneData.isHDR && useFloatOutput && supportsRGBA16HalfFloatTexture(ppl.device) ? Format.RGBA16F : Format.RGBA8;
  }
  function forceEnableFloatOutput(ppl) {
    if (ppl.pipelineSceneData.isHDR && !ppl.getMacroBool('CC_USE_FLOAT_OUTPUT')) {
      var supportFloatOutput = supportsRGBA16HalfFloatTexture(ppl.device);
      ppl.setMacroBool('CC_USE_FLOAT_OUTPUT', supportFloatOutput);
      macro.ENABLE_FLOAT_OUTPUT = supportFloatOutput;
    }
  }
  function validPunctualLightsCulling(pipeline, camera) {
    var sceneData = pipeline.pipelineSceneData;
    var validPunctualLights = sceneData.validPunctualLights;
    validPunctualLights.length = 0;
    var _sphere = geometry.Sphere.create(0, 0, 0, 1);
    var _ref = camera.scene,
      spotLights = _ref.spotLights;
    for (var i = 0; i < spotLights.length; i++) {
      var light = spotLights[i];
      if (light.baked && !camera.node.scene.globals.disableLightmap) {
        continue;
      }
      geometry.Sphere.set(_sphere, light.position.x, light.position.y, light.position.z, light.range);
      if (geometry.intersect.sphereFrustum(_sphere, camera.frustum)) {
        validPunctualLights.push(light);
      }
    }
    var _ref2 = camera.scene,
      sphereLights = _ref2.sphereLights;
    for (var _i = 0; _i < sphereLights.length; _i++) {
      var _light = sphereLights[_i];
      if (_light.baked && !camera.node.scene.globals.disableLightmap) {
        continue;
      }
      geometry.Sphere.set(_sphere, _light.position.x, _light.position.y, _light.position.z, _light.range);
      if (geometry.intersect.sphereFrustum(_sphere, camera.frustum)) {
        validPunctualLights.push(_light);
      }
    }
    var _ref3 = camera.scene,
      pointLights = _ref3.pointLights;
    for (var _i2 = 0; _i2 < pointLights.length; _i2++) {
      var _light2 = pointLights[_i2];
      if (_light2.baked) {
        continue;
      }
      geometry.Sphere.set(_sphere, _light2.position.x, _light2.position.y, _light2.position.z, _light2.range);
      if (geometry.intersect.sphereFrustum(_sphere, camera.frustum)) {
        validPunctualLights.push(_light2);
      }
    }
    var _ref4 = camera.scene,
      rangedDirLights = _ref4.rangedDirLights;
    for (var _i3 = 0; _i3 < rangedDirLights.length; _i3++) {
      var _light3 = rangedDirLights[_i3];
      AABB.transform(_tmpBoundingBox, _rangedDirLightBoundingBox, _light3.node.getWorldMatrix());
      if (geometry.intersect.aabbFrustum(_tmpBoundingBox, camera.frustum)) {
        validPunctualLights.push(_light3);
      }
    }
    // in jsb, std::vector is not synchronized, so we need to assign it manually
    sceneData.validPunctualLights = validPunctualLights;
  }
  function getCameraUniqueID(camera) {
    if (!_cameras.includes(camera)) {
      _cameras.push(camera);
    }
    return _cameras.indexOf(camera);
  }
  function getLoadOpOfClearFlag(clearFlag, attachment) {
    var loadOp = LoadOp.CLEAR;
    if (!(clearFlag & ClearFlagBit.COLOR) && attachment === AttachmentType.RENDER_TARGET) {
      if (clearFlag & SKYBOX_FLAG) {
        loadOp = LoadOp.CLEAR;
      } else {
        loadOp = LoadOp.LOAD;
      }
    }
    if ((clearFlag & ClearFlagBit.DEPTH_STENCIL) !== ClearFlagBit.DEPTH_STENCIL && attachment === AttachmentType.DEPTH_STENCIL) {
      if (!(clearFlag & ClearFlagBit.DEPTH)) loadOp = LoadOp.LOAD;
      if (!(clearFlag & ClearFlagBit.STENCIL)) loadOp = LoadOp.LOAD;
    }
    return loadOp;
  }
  function getRenderArea(camera, width, height, light, level, out) {
    if (light === void 0) {
      light = null;
    }
    if (level === void 0) {
      level = 0;
    }
    if (out === void 0) {
      out = undefined;
    }
    out = out || new Rect();
    var vp = camera ? camera.viewport : new Rect(0, 0, 1, 1);
    var w = width;
    var h = height;
    out.x = vp.x * w;
    out.y = vp.y * h;
    out.width = vp.width * w;
    out.height = vp.height * h;
    if (light) {
      switch (light.type) {
        case LightType.DIRECTIONAL:
          {
            var mainLight = light;
            if (mainLight.shadowFixedArea || mainLight.csmLevel === CSMLevel.LEVEL_1) {
              out.x = 0;
              out.y = 0;
              out.width = w;
              out.height = h;
            } else {
              var screenSpaceSignY = cclegacy.director.root.device.capabilities.screenSpaceSignY;
              out.x = level % 2 * 0.5 * w;
              if (screenSpaceSignY > 0) {
                out.y = (1 - Math.floor(level / 2)) * 0.5 * h;
              } else {
                out.y = Math.floor(level / 2) * 0.5 * h;
              }
              out.width = 0.5 * w;
              out.height = 0.5 * h;
            }
            break;
          }
        case LightType.SPOT:
          {
            out.x = 0;
            out.y = 0;
            out.width = w;
            out.height = h;
            break;
          }
        default:
      }
    }
    return out;
  }
  function buildCopyPass(ppl, inOuts) {
    ppl.addCopyPass(inOuts);
  }
  function buildFxaaPass(camera, ppl, inputRT, inputDS) {
    if (!fxaaData) {
      fxaaData = new FxaaData();
    }
    var cameraID = getCameraUniqueID(camera);
    var cameraName = "Camera" + cameraID;
    var width = camera.window.width;
    var height = camera.window.height;
    var area = getRenderArea(camera, width, height);
    width = area.width;
    height = area.height;
    // Start
    var clearColor = new Color(0, 0, 0, 1);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      clearColor.x = camera.clearColor.x;
      clearColor.y = camera.clearColor.y;
      clearColor.z = camera.clearColor.z;
    }
    clearColor.w = camera.clearColor.w;
    var fxaaPassRTName = "dsFxaaPassColor" + cameraName;

    // ppl.updateRenderWindow(inputRT, camera.window);
    if (!ppl.containsResource(fxaaPassRTName)) {
      ppl.addRenderTarget(fxaaPassRTName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(fxaaPassRTName, width, height);
    var fxaaPassIdx = 0;
    var fxaaPass = ppl.addRenderPass(width, height, 'fxaa');
    fxaaPass.name = "CameraFxaaPass" + cameraID;
    fxaaPass.setViewport(new Viewport(area.x, area.y, width, height));
    if (ppl.containsResource(inputRT)) {
      fxaaPass.addTexture(inputRT, 'sceneColorMap');
    }
    fxaaPass.addRenderTarget(fxaaPassRTName, LoadOp.CLEAR, StoreOp.STORE, clearColor);
    fxaaData.fxaaMaterial.setProperty('texSize', new Vec4(width, height, 1.0 / width, 1.0 / height), fxaaPassIdx);
    fxaaPass.addQueue(QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, fxaaData.fxaaMaterial, fxaaPassIdx, SceneFlags.NONE);
    return {
      rtName: fxaaPassRTName,
      dsName: inputDS
    };
  }
  function buildBloomPass(camera, ppl, inputRT, threshold, iterations, intensity) {
    if (threshold === void 0) {
      threshold = 0.6;
    }
    if (iterations === void 0) {
      iterations = 2;
    }
    if (intensity === void 0) {
      intensity = 2.0;
    }
    if (!bloomData) {
      bloomData = new BloomData();
    }
    bloomData.threshold = threshold;
    bloomData.iterations = iterations;
    bloomData.intensity = intensity;
    var cameraID = getCameraUniqueID(camera);
    var cameraName = "Camera" + cameraID;
    var width = camera.window.width;
    var height = camera.window.height;
    var area = getRenderArea(camera, width, height);
    width = area.width;
    height = area.height;
    // Start bloom
    var bloomClearColor = new Color(0, 0, 0, 1);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      bloomClearColor.x = camera.clearColor.x;
      bloomClearColor.y = camera.clearColor.y;
      bloomClearColor.z = camera.clearColor.z;
    }
    bloomClearColor.w = camera.clearColor.w;
    // ==== Bloom prefilter ===
    var bloomPassPrefilterRTName = "dsBloomPassPrefilterColor" + cameraName;
    var bloomPassPrefilterDSName = "dsBloomPassPrefilterDS" + cameraName;
    width >>= 1;
    height >>= 1;
    if (!ppl.containsResource(bloomPassPrefilterRTName)) {
      ppl.addRenderTarget(bloomPassPrefilterRTName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
      ppl.addDepthStencil(bloomPassPrefilterDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(bloomPassPrefilterRTName, width, height);
    ppl.updateDepthStencil(bloomPassPrefilterDSName, width, height);
    var bloomPrefilterPass = ppl.addRenderPass(width, height, 'bloom-prefilter');
    bloomPrefilterPass.name = "CameraBloomPrefilterPass" + cameraID;
    bloomPrefilterPass.setViewport(new Viewport(area.x, area.y, width, height));
    if (ppl.containsResource(inputRT)) {
      bloomPrefilterPass.addTexture(inputRT, 'outputResultMap');
    }
    bloomPrefilterPass.addRenderTarget(bloomPassPrefilterRTName, LoadOp.CLEAR, StoreOp.STORE, bloomClearColor);
    bloomData.bloomMaterial.setProperty('texSize', new Vec4(0, 0, bloomData.threshold, 0), 0);
    bloomPrefilterPass.addQueue(QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, bloomData.bloomMaterial, 0, SceneFlags.NONE);
    // === Bloom downSampler ===
    for (var i = 0; i < bloomData.iterations; ++i) {
      var texSize = new Vec4(width, height, 0, 0);
      var bloomPassDownSampleRTName = "dsBloomPassDownSampleColor" + cameraName + i;
      var bloomPassDownSampleDSName = "dsBloomPassDownSampleDS" + cameraName + i;
      width >>= 1;
      height >>= 1;
      if (!ppl.containsResource(bloomPassDownSampleRTName)) {
        ppl.addRenderTarget(bloomPassDownSampleRTName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
        ppl.addDepthStencil(bloomPassDownSampleDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
      }
      ppl.updateRenderTarget(bloomPassDownSampleRTName, width, height);
      ppl.updateDepthStencil(bloomPassDownSampleDSName, width, height);
      var bloomDownSamplePass = ppl.addRenderPass(width, height, "bloom-downsample" + i);
      bloomDownSamplePass.name = "CameraBloomDownSamplePass" + cameraID + i;
      bloomDownSamplePass.setViewport(new Viewport(area.x, area.y, width, height));
      if (i === 0) {
        bloomDownSamplePass.addTexture(bloomPassPrefilterRTName, 'bloomTexture');
      } else {
        bloomDownSamplePass.addTexture("dsBloomPassDownSampleColor" + cameraName + (i - 1), 'bloomTexture');
      }
      bloomDownSamplePass.addRenderTarget(bloomPassDownSampleRTName, LoadOp.CLEAR, StoreOp.STORE, bloomClearColor);
      bloomData.bloomMaterial.setProperty('texSize', texSize, BLOOM_DOWNSAMPLEPASS_INDEX + i);
      bloomDownSamplePass.addQueue(QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, bloomData.bloomMaterial, BLOOM_DOWNSAMPLEPASS_INDEX + i, SceneFlags.NONE);
    }
    // === Bloom upSampler ===
    for (var _i4 = 0; _i4 < bloomData.iterations; ++_i4) {
      var _texSize = new Vec4(width, height, 0, 0);
      var bloomPassUpSampleRTName = "dsBloomPassUpSampleColor" + cameraName + (bloomData.iterations - 1 - _i4);
      var bloomPassUpSampleDSName = "dsBloomPassUpSampleDS" + cameraName + (bloomData.iterations - 1 - _i4);
      width <<= 1;
      height <<= 1;
      if (!ppl.containsResource(bloomPassUpSampleRTName)) {
        ppl.addRenderTarget(bloomPassUpSampleRTName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
        ppl.addDepthStencil(bloomPassUpSampleDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
      }
      ppl.updateRenderTarget(bloomPassUpSampleRTName, width, height);
      ppl.updateDepthStencil(bloomPassUpSampleDSName, width, height);
      var bloomUpSamplePass = ppl.addRenderPass(width, height, "bloom-upsample" + _i4);
      bloomUpSamplePass.name = "CameraBloomUpSamplePass" + cameraID + (bloomData.iterations - 1 - _i4);
      bloomUpSamplePass.setViewport(new Viewport(area.x, area.y, width, height));
      if (_i4 === 0) {
        bloomUpSamplePass.addTexture("dsBloomPassDownSampleColor" + cameraName + (bloomData.iterations - 1), 'bloomTexture');
      } else {
        bloomUpSamplePass.addTexture("dsBloomPassUpSampleColor" + cameraName + (bloomData.iterations - _i4), 'bloomTexture');
      }
      bloomUpSamplePass.addRenderTarget(bloomPassUpSampleRTName, LoadOp.CLEAR, StoreOp.STORE, bloomClearColor);
      bloomData.bloomMaterial.setProperty('texSize', _texSize, BLOOM_UPSAMPLEPASS_INDEX + _i4);
      bloomUpSamplePass.addQueue(QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, bloomData.bloomMaterial, BLOOM_UPSAMPLEPASS_INDEX + _i4, SceneFlags.NONE);
    }
    // === Bloom Combine Pass ===
    var bloomPassCombineRTName = "dsBloomPassCombineColor" + cameraName;
    var bloomPassCombineDSName = "dsBloomPassCombineDS" + cameraName;
    width = area.width;
    height = area.height;
    if (!ppl.containsResource(bloomPassCombineRTName)) {
      ppl.addRenderTarget(bloomPassCombineRTName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
      ppl.addDepthStencil(bloomPassCombineDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(bloomPassCombineRTName, width, height);
    ppl.updateDepthStencil(bloomPassCombineDSName, width, height);
    var bloomCombinePass = ppl.addRenderPass(width, height, 'bloom-combine');
    bloomCombinePass.name = "CameraBloomCombinePass" + cameraID;
    bloomCombinePass.setViewport(new Viewport(area.x, area.y, width, height));
    bloomCombinePass.addTexture(inputRT, 'outputResultMap');
    bloomCombinePass.addTexture("dsBloomPassUpSampleColor" + cameraName + 0, 'bloomTexture');
    bloomCombinePass.addRenderTarget(bloomPassCombineRTName, LoadOp.CLEAR, StoreOp.STORE, bloomClearColor);
    bloomData.bloomMaterial.setProperty('texSize', new Vec4(0, 0, 0, bloomData.intensity), BLOOM_COMBINEPASS_INDEX);
    bloomCombinePass.addQueue(QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, bloomData.bloomMaterial, BLOOM_COMBINEPASS_INDEX, SceneFlags.NONE);
    return {
      rtName: bloomPassCombineRTName,
      dsName: bloomPassCombineDSName
    };
  }
  function buildPostprocessPass(camera, ppl, inputTex) {
    if (!postInfo) {
      postInfo = new PostInfo();
    }
    var cameraID = getCameraUniqueID(camera);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var postprocessPassRTName = "postprocessPassRTName" + cameraID;
    var postprocessPassDS = "postprocessPassDS" + cameraID;
    if (!ppl.containsResource(postprocessPassRTName)) {
      ppl.addRenderWindow(postprocessPassRTName, Format.BGRA8, width, height, camera.window);
      ppl.addDepthStencil(postprocessPassDS, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderWindow(postprocessPassRTName, camera.window);
    ppl.updateDepthStencil(postprocessPassDS, width, height);
    var postprocessPass = ppl.addRenderPass(width, height, 'post-process');
    postprocessPass.name = "CameraPostprocessPass" + cameraID;
    postprocessPass.setViewport(new Viewport(area.x, area.y, area.width, area.height));
    if (ppl.containsResource(inputTex)) {
      postprocessPass.addTexture(inputTex, 'outputResultMap');
    }
    var postClearColor = new Color(0, 0, 0, camera.clearColor.w);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      postClearColor.x = camera.clearColor.x;
      postClearColor.y = camera.clearColor.y;
      postClearColor.z = camera.clearColor.z;
    }
    postprocessPass.addRenderTarget(postprocessPassRTName, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, postClearColor);
    postprocessPass.addDepthStencil(postprocessPassDS, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.DEPTH_STENCIL), StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    postprocessPass.addQueue(QueueHint.NONE).addFullscreenQuad(postInfo.postMaterial, 0, SceneFlags.NONE);
    if (getProfilerCamera() === camera) {
      postprocessPass.showStatistics = true;
    }
    return {
      rtName: postprocessPassRTName,
      dsName: postprocessPassDS
    };
  }
  function buildForwardPass(camera, ppl, isOffScreen, enabledAlpha) {
    if (enabledAlpha === void 0) {
      enabledAlpha = true;
    }
    if (EDITOR) {
      ppl.setMacroInt('CC_PIPELINE_TYPE', 0);
    }
    var cameraID = getCameraUniqueID(camera);
    var cameraName = "Camera" + cameraID;
    var shadowInfo = buildShadowPasses(cameraName, camera, ppl);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var forwardPassRTName = "dsForwardPassColor" + cameraName;
    var forwardPassDSName = "dsForwardPassDS" + cameraName;
    if (!ppl.containsResource(forwardPassRTName)) {
      if (!isOffScreen) {
        ppl.addRenderWindow(forwardPassRTName, Format.BGRA8, width, height, camera.window);
      } else {
        ppl.addRenderTarget(forwardPassRTName, getRTFormatBeforeToneMapping(ppl), width, height, ResourceResidency.PERSISTENT);
      }
      ppl.addDepthStencil(forwardPassDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    }
    if (!isOffScreen) {
      ppl.updateRenderWindow(forwardPassRTName, camera.window);
      ppl.updateDepthStencil(forwardPassDSName, width, height);
    } else {
      ppl.updateRenderTarget(forwardPassRTName, width, height);
      ppl.updateDepthStencil(forwardPassDSName, width, height);
    }
    var forwardPass = ppl.addRenderPass(width, height, 'default');
    forwardPass.name = "CameraForwardPass" + cameraID;
    forwardPass.setViewport(new Viewport(area.x, area.y, width, height));
    for (var _iterator = _createForOfIteratorHelperLoose(shadowInfo.mainLightShadowNames), _step; !(_step = _iterator()).done;) {
      var dirShadowName = _step.value;
      if (ppl.containsResource(dirShadowName)) {
        forwardPass.addTexture(dirShadowName, 'cc_shadowMap');
      }
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(shadowInfo.spotLightShadowNames), _step2; !(_step2 = _iterator2()).done;) {
      var spotShadowName = _step2.value;
      if (ppl.containsResource(spotShadowName)) {
        forwardPass.addTexture(spotShadowName, 'cc_spotShadowMap');
      }
    }
    forwardPass.addRenderTarget(forwardPassRTName, isOffScreen ? LoadOp.CLEAR : getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, new Color(camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w));
    forwardPass.addDepthStencil(forwardPassDSName, isOffScreen ? LoadOp.CLEAR : getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.DEPTH_STENCIL),
    // If the depth texture is used by subsequent passes, it must be set to store.
    isOffScreen ? StoreOp.DISCARD : StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    forwardPass.addQueue(QueueHint.RENDER_OPAQUE).addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE_OBJECT | SceneFlags.PLANAR_SHADOW | SceneFlags.CUTOUT_OBJECT | SceneFlags.DEFAULT_LIGHTING | SceneFlags.DRAW_INSTANCING);
    var sceneFlags = SceneFlags.TRANSPARENT_OBJECT | SceneFlags.GEOMETRY;
    if (!isOffScreen) {
      sceneFlags |= SceneFlags.UI;
      forwardPass.showStatistics = true;
    }
    if (enabledAlpha) {
      forwardPass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), sceneFlags);
    }
    return {
      rtName: forwardPassRTName,
      dsName: forwardPassDSName
    };
  }
  function buildShadowPass(passName, ppl, camera, light, level, width, height) {
    var fboW = width;
    var fboH = height;
    var area = getRenderArea(camera, width, height, light, level);
    width = area.width;
    height = area.height;
    var device = ppl.device;
    var shadowMapName = passName;
    if (!ppl.containsResource(shadowMapName)) {
      var format = supportsR32FloatTexture(device) ? Format.R32F : Format.RGBA8;
      ppl.addRenderTarget(shadowMapName, format, fboW, fboH, ResourceResidency.MANAGED);
      ppl.addDepthStencil(shadowMapName + "Depth", Format.DEPTH_STENCIL, fboW, fboH, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(shadowMapName, fboW, fboH);
    ppl.updateDepthStencil(shadowMapName + "Depth", fboW, fboH);
    if (!level) {
      shadowPass = ppl.addRenderPass(width, height, 'default');
      shadowPass.name = passName;
      shadowPass.setViewport(new Viewport(0, 0, fboW, fboH));
      shadowPass.addRenderTarget(shadowMapName, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, camera.clearColor.w));
      shadowPass.addDepthStencil(shadowMapName + "Depth", LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, ClearFlagBit.DEPTH_STENCIL);
    }
    var queue = shadowPass.addQueue(QueueHint.RENDER_OPAQUE, 'shadow-caster');
    queue.addScene(camera, SceneFlags.SHADOW_CASTER | SceneFlags.OPAQUE_OBJECT | SceneFlags.MASK).useLightFrustum(light, light.type !== LightType.DIRECTIONAL ? 0 : level);
    queue.setViewport(new Viewport(area.x, area.y, area.width, area.height));
  }
  function buildReflectionProbePasss(camera, ppl) {
    var reflectionProbeManager = cclegacy.internal.reflectionProbeManager;
    if (!reflectionProbeManager) return;
    var probes = reflectionProbeManager.getProbes();
    if (probes.length === 0) return;
    for (var i = 0; i < probes.length; i++) {
      var probe = probes[i];
      if (probe.needRender) {
        if (probes[i].probeType === ProbeType.PLANAR) {
          buildReflectionProbePass(camera, ppl, probe, probe.realtimePlanarTexture.window, 0);
        } else if (EDITOR) {
          for (var faceIdx = 0; faceIdx < probe.bakedCubeTextures.length; faceIdx++) {
            probe.updateCameraDir(faceIdx);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            buildReflectionProbePass(camera, ppl, probe, probe.bakedCubeTextures[faceIdx].window, faceIdx);
          }
          probe.needRender = false;
        }
      }
    }
  }
  function buildReflectionProbePass(camera, ppl, probe, renderWindow, faceIdx) {
    var cameraName = "Camera" + faceIdx;
    var area = probe.renderArea();
    var width = area.x;
    var height = area.y;
    var probeCamera = probe.camera;
    var probePassRTName = "reflectionProbePassColor" + cameraName;
    var probePassDSName = "reflectionProbePassDS" + cameraName;
    if (!ppl.containsResource(probePassRTName)) {
      ppl.addRenderWindow(probePassRTName, Format.RGBA8, width, height, renderWindow);
      ppl.addDepthStencil(probePassDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.EXTERNAL);
    }
    ppl.updateRenderWindow(probePassRTName, renderWindow);
    ppl.updateDepthStencil(probePassDSName, width, height);
    var probePass = ppl.addRenderPass(width, height, 'default');
    probePass.name = "ReflectionProbePass" + faceIdx;
    probePass.setViewport(new Viewport(0, 0, width, height));
    probePass.addRenderTarget(probePassRTName, getLoadOpOfClearFlag(probeCamera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, new Color(probeCamera.clearColor.x, probeCamera.clearColor.y, probeCamera.clearColor.z, probeCamera.clearColor.w));
    probePass.addDepthStencil(probePassDSName, getLoadOpOfClearFlag(probeCamera.clearFlag, AttachmentType.DEPTH_STENCIL), StoreOp.STORE, probeCamera.clearDepth, probeCamera.clearStencil, probeCamera.clearFlag);
    var passBuilder = probePass.addQueue(QueueHint.RENDER_OPAQUE, 'reflect-map');
    var lightInfo = new LightInfo();
    lightInfo.probe = probe;
    passBuilder.addSceneOfCamera(camera, lightInfo, SceneFlags.REFLECTION_PROBE | SceneFlags.OPAQUE_OBJECT);
    updateCameraUBO(passBuilder, probeCamera, ppl);
  }
  function buildShadowPasses(cameraName, camera, ppl) {
    validPunctualLightsCulling(ppl, camera);
    var pipeline = ppl;
    var shadow = pipeline.pipelineSceneData.shadows;
    var validPunctualLights = ppl.pipelineSceneData.validPunctualLights;
    shadowInfo.reset();
    var shadows = ppl.pipelineSceneData.shadows;
    if (!shadow.enabled || shadow.type !== ShadowType.ShadowMap) {
      return shadowInfo;
    }
    shadowInfo.shadowEnabled = true;
    var n = 0;
    var m = 0;
    for (; n < shadow.maxReceived && m < validPunctualLights.length;) {
      var light = validPunctualLights[m];
      if (light.type === LightType.SPOT) {
        var spotLight = light;
        if (spotLight.shadowEnabled) {
          shadowInfo.validLights.push(light);
          n++;
        }
      }
      m++;
    }
    var _ref5 = camera.scene,
      mainLight = _ref5.mainLight;
    // build shadow map
    var mapWidth = shadows.size.x;
    var mapHeight = shadows.size.y;
    if (mainLight && mainLight.shadowEnabled) {
      shadowInfo.mainLightShadowNames[0] = "MainLightShadow" + cameraName;
      if (mainLight.shadowFixedArea) {
        buildShadowPass(shadowInfo.mainLightShadowNames[0], ppl, camera, mainLight, 0, mapWidth, mapHeight);
      } else {
        var csmLevel = pipeline.pipelineSceneData.csmSupported ? mainLight.csmLevel : 1;
        shadowInfo.mainLightShadowNames[0] = "MainLightShadow" + cameraName;
        for (var i = 0; i < csmLevel; i++) {
          buildShadowPass(shadowInfo.mainLightShadowNames[0], ppl, camera, mainLight, i, mapWidth, mapHeight);
        }
      }
    }
    for (var l = 0; l < shadowInfo.validLights.length; l++) {
      var _light4 = shadowInfo.validLights[l];
      var passName = "SpotLightShadow" + l.toString() + cameraName;
      shadowInfo.spotLightShadowNames[l] = passName;
      buildShadowPass(passName, ppl, camera, _light4, 0, mapWidth, mapHeight);
    }
    return shadowInfo;
  }
  // deferred passes
  function buildGBufferPass(camera, ppl) {
    var cameraID = getCameraUniqueID(camera);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var gBufferPassRTName = "gBufferPassColorCamera";
    var gBufferPassNormal = "gBufferPassNormal";
    var gBufferPassEmissive = "gBufferPassEmissive";
    var gBufferPassDSName = "gBufferPassDSCamera";
    if (!ppl.containsResource(gBufferPassRTName)) {
      var colFormat = Format.RGBA16F;
      ppl.addRenderTarget(gBufferPassRTName, colFormat, width, height, ResourceResidency.MANAGED);
      ppl.addRenderTarget(gBufferPassNormal, colFormat, width, height, ResourceResidency.MANAGED);
      ppl.addRenderTarget(gBufferPassEmissive, colFormat, width, height, ResourceResidency.MANAGED);
      ppl.addDepthStencil(gBufferPassDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(gBufferPassRTName, width, height);
    ppl.updateRenderTarget(gBufferPassNormal, width, height);
    ppl.updateRenderTarget(gBufferPassEmissive, width, height);
    ppl.updateDepthStencil(gBufferPassDSName, width, height);
    // gbuffer pass
    var gBufferPass = ppl.addRenderPass(width, height, 'default');
    gBufferPass.name = "CameraGBufferPass" + cameraID;
    gBufferPass.setViewport(new Viewport(area.x, area.y, area.width, area.height));
    var rtColor = new Color(0, 0, 0, 0);
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
    gBufferPass.addRenderTarget(gBufferPassNormal, LoadOp.CLEAR, StoreOp.STORE, new Color(0, 0, 0, 0));
    gBufferPass.addRenderTarget(gBufferPassEmissive, LoadOp.CLEAR, StoreOp.STORE, new Color(0, 0, 0, 0));
    gBufferPass.addDepthStencil(gBufferPassDSName, LoadOp.CLEAR, StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    gBufferPass.addQueue(QueueHint.RENDER_OPAQUE).addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE_OBJECT | SceneFlags.CUTOUT_OBJECT);
    var gBufferInfo = new GBufferInfo();
    gBufferInfo.color = gBufferPassRTName;
    gBufferInfo.normal = gBufferPassNormal;
    gBufferInfo.emissive = gBufferPassEmissive;
    gBufferInfo.ds = gBufferPassDSName;
    return gBufferInfo;
  }
  // deferred lighting pass
  function buildLightingPass(camera, ppl, gBuffer) {
    if (!lightingInfo) {
      lightingInfo = new LightingInfo(false);
    }
    var cameraID = getCameraUniqueID(camera);
    var cameraName = "Camera" + cameraID;
    var cameraInfo = buildShadowPasses(cameraName, camera, ppl);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var deferredLightingPassRTName = "deferredLightingPassRTName";
    if (!ppl.containsResource(deferredLightingPassRTName)) {
      ppl.addRenderTarget(deferredLightingPassRTName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(deferredLightingPassRTName, width, height);
    // lighting pass
    var lightingPass = ppl.addRenderPass(width, height, 'deferred-lighting');
    lightingPass.name = "CameraLightingPass" + cameraID;
    lightingPass.setViewport(new Viewport(area.x, area.y, width, height));
    for (var _iterator3 = _createForOfIteratorHelperLoose(cameraInfo.mainLightShadowNames), _step3; !(_step3 = _iterator3()).done;) {
      var dirShadowName = _step3.value;
      if (ppl.containsResource(dirShadowName)) {
        lightingPass.addTexture(dirShadowName, 'cc_shadowMap');
      }
    }
    for (var _iterator4 = _createForOfIteratorHelperLoose(cameraInfo.spotLightShadowNames), _step4; !(_step4 = _iterator4()).done;) {
      var spotShadowName = _step4.value;
      if (ppl.containsResource(spotShadowName)) {
        lightingPass.addTexture(spotShadowName, 'cc_spotShadowMap');
      }
    }
    if (ppl.containsResource(gBuffer.color)) {
      lightingPass.addTexture(gBuffer.color, 'albedoMap');
      lightingPass.addTexture(gBuffer.normal, 'normalMap');
      lightingPass.addTexture(gBuffer.emissive, 'emissiveMap');
      lightingPass.addTexture(gBuffer.ds, 'depthStencil');
    }
    var lightingClearColor = new Color(0, 0, 0, 0);
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
  function getClearFlags(attachment, clearFlag, loadOp) {
    switch (attachment) {
      case AttachmentType.DEPTH_STENCIL:
        if (loadOp === LoadOp.CLEAR) {
          if (clearFlag & ClearFlagBit.DEPTH_STENCIL) {
            return clearFlag;
          } else {
            return ClearFlagBit.DEPTH_STENCIL;
          }
        } else {
          return ClearFlagBit.NONE;
        }
      case AttachmentType.RENDER_TARGET:
      default:
        if (loadOp === LoadOp.CLEAR) {
          return ClearFlagBit.COLOR;
        } else {
          return ClearFlagBit.NONE;
        }
    }
  }
  function buildUIPass(camera, ppl) {
    var cameraID = getCameraUniqueID(camera);
    var cameraName = "Camera" + cameraID;
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var dsUIAndProfilerPassRTName = "dsUIAndProfilerPassColor" + cameraName;
    var dsUIAndProfilerPassDSName = "dsUIAndProfilerPassDS" + cameraName;
    if (!ppl.containsResource(dsUIAndProfilerPassRTName)) {
      ppl.addRenderWindow(dsUIAndProfilerPassRTName, Format.BGRA8, width, height, camera.window);
      ppl.addDepthStencil(dsUIAndProfilerPassDSName, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderWindow(dsUIAndProfilerPassRTName, camera.window);
    ppl.updateDepthStencil(dsUIAndProfilerPassDSName, width, height);
    var uiAndProfilerPass = ppl.addRenderPass(width, height, 'default');
    uiAndProfilerPass.name = "CameraUIAndProfilerPass" + cameraID;
    uiAndProfilerPass.setViewport(new Viewport(area.x, area.y, width, height));
    uiAndProfilerPass.addRenderTarget(dsUIAndProfilerPassRTName, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, new Color(camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w));
    uiAndProfilerPass.addDepthStencil(dsUIAndProfilerPassDSName, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.DEPTH_STENCIL), StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    var sceneFlags = SceneFlags.UI;
    uiAndProfilerPass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), sceneFlags);
    if (getProfilerCamera() === camera) {
      uiAndProfilerPass.showStatistics = true;
    }
  }
  function updateCameraUBO(setter, camera, ppl) {
    var pipeline = cclegacy.director.root.pipeline;
    var sceneData = ppl.pipelineSceneData;
    var skybox = sceneData.skybox;
    setter.addConstant('CCCamera');
    setter.setMat4('cc_matView', camera.matView);
    setter.setMat4('cc_matViewInv', camera.node.worldMatrix);
    setter.setMat4('cc_matProj', camera.matProj);
    setter.setMat4('cc_matProjInv', camera.matProjInv);
    setter.setMat4('cc_matViewProj', camera.matViewProj);
    setter.setMat4('cc_matViewProjInv', camera.matViewProjInv);
    setter.setVec4('cc_cameraPos', new Vec4(camera.position.x, camera.position.y, camera.position.z, pipeline.getCombineSignY()));
    // eslint-disable-next-line max-len
    setter.setVec4('cc_surfaceTransform', new Vec4(camera.surfaceTransform, 0.0, Math.cos(toRadian(skybox.getRotationAngle())), Math.sin(toRadian(skybox.getRotationAngle()))));
    // eslint-disable-next-line max-len
    setter.setVec4('cc_screenScale', new Vec4(sceneData.shadingScale, sceneData.shadingScale, 1.0 / sceneData.shadingScale, 1.0 / sceneData.shadingScale));
    setter.setVec4('cc_exposure', new Vec4(camera.exposure, 1.0 / camera.exposure, sceneData.isHDR ? 1.0 : 0.0, 1.0 / Camera.standardExposureValue));
  }
  function bindDescValue(desc, binding, value) {
    if (value instanceof Buffer) {
      desc.bindBuffer(binding, value);
    } else if (value instanceof Texture) {
      desc.bindTexture(binding, value);
    } else if (value instanceof Sampler) {
      desc.bindSampler(binding, value);
    }
  }
  function bindGlobalDesc(desc, binding, value) {
    bindDescValue(desc, binding, value);
  }
  function getDescBinding(descId, descData) {
    var layoutData = descData;
    // find descriptor binding
    for (var _iterator5 = _createForOfIteratorHelperLoose(layoutData.descriptorSetLayoutData.descriptorBlocks), _step5; !(_step5 = _iterator5()).done;) {
      var block = _step5.value;
      for (var i = 0; i !== block.descriptors.length; ++i) {
        if (descId === block.descriptors[i].descriptorID) {
          return block.offset + i;
        }
      }
    }
    return -1;
  }
  function getDescBindingFromName(bindingName) {
    var pipeline = cclegacy.director.root.pipeline;
    var layoutGraph = pipeline.layoutGraph;
    var vertIds = layoutGraph.vertices();
    var descId = layoutGraph.attributeIndex.get(bindingName);
    var currDesData;
    for (var _iterator6 = _createForOfIteratorHelperLoose(vertIds), _step6; !(_step6 = _iterator6()).done;) {
      var i = _step6.value;
      var layout = layoutGraph.getLayout(i);
      for (var _iterator7 = _createForOfIteratorHelperLoose(layout.descriptorSets), _step7; !(_step7 = _iterator7()).done;) {
        var _step7$value = _step7.value,
          k = _step7$value[0],
          descData = _step7$value[1];
        var layoutData = descData.descriptorSetLayoutData;
        var blocks = layoutData.descriptorBlocks;
        for (var _iterator8 = _createForOfIteratorHelperLoose(blocks), _step8; !(_step8 = _iterator8()).done;) {
          var b = _step8.value;
          for (var _iterator9 = _createForOfIteratorHelperLoose(b.descriptors), _step9; !(_step9 = _iterator9()).done;) {
            var ds = _step9.value;
            if (ds.descriptorID === descId) {
              currDesData = descData;
              return getDescBinding(descId, currDesData);
            }
          }
        }
      }
    }
    return -1;
  }
  function applyGlobalDescBinding(data, layout, isUpdate) {
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    var constants = data.constants;
    var samplers = data.samplers;
    var textures = data.textures;
    var buffers = data.buffers;
    var root = cclegacy.director.root;
    var device = root.device;
    var pipeline = root.pipeline;
    var descriptorSetData = getDescriptorSetDataFromLayout(layout);
    var descriptorSet = descriptorSetData.descriptorSet;
    for (var _iterator10 = _createForOfIteratorHelperLoose(constants), _step10; !(_step10 = _iterator10()).done;) {
      var _step10$value = _step10.value,
        key = _step10$value[0],
        value = _step10$value[1];
      var bindId = getDescBinding(key, descriptorSetData);
      if (bindId === -1) {
        continue;
      }
      var uniformKey = "" + layout + bindId;
      var buffer = descriptorSet.getBuffer(bindId);
      var haveBuff = true;
      if (!buffer && !isUpdate) {
        buffer = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, value.length * 4, value.length * 4));
        haveBuff = false;
      }
      if (isUpdate) {
        var currUniform = uniformMap.get(uniformKey);
        if (!currUniform) {
          uniformMap.set(uniformKey, new Float32Array(value));
          currUniform = uniformMap.get(uniformKey);
        }
        currUniform.set(value);
        buffer.update(currUniform);
      }
      if (!haveBuff) bindGlobalDesc(descriptorSet, bindId, buffer);
    }
    for (var _iterator11 = _createForOfIteratorHelperLoose(textures), _step11; !(_step11 = _iterator11()).done;) {
      var _step11$value = _step11.value,
        _key = _step11$value[0],
        _value = _step11$value[1];
      var _bindId = getDescBinding(_key, descriptorSetData);
      if (_bindId === -1) {
        continue;
      }
      var tex = descriptorSet.getTexture(_bindId);
      if (!tex || isUpdate && _value !== pipeline.defaultTexture
      // @ts-ignore
      || !tex.gpuTexture && !(tex.gpuTextureView && tex.gpuTextureView.gpuTexture)) {
        bindGlobalDesc(descriptorSet, _bindId, _value);
      }
    }
    for (var _iterator12 = _createForOfIteratorHelperLoose(samplers), _step12; !(_step12 = _iterator12()).done;) {
      var _step12$value = _step12.value,
        _key2 = _step12$value[0],
        _value2 = _step12$value[1];
      var _bindId2 = getDescBinding(_key2, descriptorSetData);
      if (_bindId2 === -1) {
        continue;
      }
      var sampler = descriptorSet.getSampler(_bindId2);
      if (!sampler || isUpdate && _value2 !== pipeline.defaultSampler) {
        bindGlobalDesc(descriptorSet, _bindId2, _value2);
      }
    }
    for (var _iterator13 = _createForOfIteratorHelperLoose(buffers), _step13; !(_step13 = _iterator13()).done;) {
      var _step13$value = _step13.value,
        _key3 = _step13$value[0],
        _value3 = _step13$value[1];
      var _bindId3 = getDescBinding(_key3, descriptorSetData);
      if (_bindId3 === -1) {
        continue;
      }
      var _buffer = descriptorSet.getBuffer(_bindId3);
      if (!_buffer || isUpdate) {
        bindGlobalDesc(descriptorSet, _bindId3, _value3);
      }
    }
  }
  function getDescriptorSetDataFromLayout(layoutName) {
    var descLayout = layouts.get(layoutName);
    if (descLayout) {
      return descLayout;
    }
    var webPip = cclegacy.director.root.pipeline;
    var stageId = webPip.layoutGraph.locateChild(webPip.layoutGraph.nullVertex(), layoutName);
    assert(stageId !== 0xFFFFFFFF);
    var layout = webPip.layoutGraph.getLayout(stageId);
    var layoutData = layout.descriptorSets.get(UpdateFrequency.PER_PASS);
    layouts.set(layoutName, layoutData);
    return layoutData;
  }
  function getDescriptorSetDataFromLayoutId(id) {
    var webPip = cclegacy.director.root.pipeline;
    var layout = webPip.layoutGraph.getLayout(id);
    var layoutData = layout.descriptorSets.get(UpdateFrequency.PER_PASS);
    return layoutData;
  }
  function initGlobalDescBinding(data, layoutName) {
    if (layoutName === void 0) {
      layoutName = 'default';
    }
    applyGlobalDescBinding(data, layoutName);
  }
  function updateGlobalDescBinding(data, layoutName) {
    if (layoutName === void 0) {
      layoutName = 'default';
    }
    applyGlobalDescBinding(data, layoutName, true);
  }
  function mergeSrcToTargetDesc(fromDesc, toDesc, isForce) {
    if (isForce === void 0) {
      isForce = false;
    }
    fromDesc.update();
    var fromGpuDesc = fromDesc.gpuDescriptorSet;
    var toGpuDesc = toDesc.gpuDescriptorSet;
    var extResId = [];
    if (isForce) {
      toGpuDesc.gpuDescriptors = fromGpuDesc.gpuDescriptors;
      toGpuDesc.descriptorIndices = fromGpuDesc.descriptorIndices;
      return extResId;
    }
    for (var i = 0; i < toGpuDesc.gpuDescriptors.length; i++) {
      var fromRes = fromGpuDesc.gpuDescriptors[i];
      if (!fromRes) continue;
      var currRes = toGpuDesc.gpuDescriptors[i];
      if (!currRes.gpuBuffer && fromRes.gpuBuffer) {
        currRes.gpuBuffer = fromRes.gpuBuffer;
        extResId.push(i);
      } else if ('gpuTextureView' in currRes && !currRes.gpuTextureView) {
        currRes.gpuTextureView = fromRes.gpuTextureView;
        currRes.gpuSampler = fromRes.gpuSampler;
        extResId.push(i);
      } else if ('gpuTexture' in currRes && !currRes.gpuTexture) {
        currRes.gpuTexture = fromRes.gpuTexture;
        currRes.gpuSampler = fromRes.gpuSampler;
        extResId.push(i);
      }
    }
    return extResId;
  }
  function hasSkinObject(ppl) {
    var sceneData = ppl.pipelineSceneData;
    return sceneData.skin.enabled && sceneData.standardSkinModel !== null;
  }
  function _buildSSSSBlurPass(camera, ppl, inputRT, inputDS) {
    var sceneData = ppl.pipelineSceneData;
    var skin = sceneData.skin;
    var standardSkinModel = sceneData.standardSkinModel;
    if (!skin.enabled && standardSkinModel) return {
      rtName: inputRT,
      dsName: inputDS
    };
    if (!ssssBlurData) ssssBlurData = new SSSSBlurData();
    ssssBlurData.ssssFov = camera.fov;
    ssssBlurData.ssssWidth = skin.blurRadius;
    if (standardSkinModel && standardSkinModel.worldBounds) {
      var halfExtents = standardSkinModel.worldBounds.halfExtents;
      ssssBlurData.boundingBox = Math.min(halfExtents.x, halfExtents.y, halfExtents.z) * 2.0;
    }
    ssssBlurData.ssssScale = skin.sssIntensity;
    var cameraID = getCameraUniqueID(camera);
    var cameraName = "Camera" + cameraID;
    var webPipeline = ppl;
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;

    // Start blur
    var ssssBlurClearColor = new Color(0, 0, 0, 1);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      ssssBlurClearColor.x = camera.clearColor.x;
      ssssBlurClearColor.y = camera.clearColor.y;
      ssssBlurClearColor.z = camera.clearColor.z;
    }
    ssssBlurClearColor.w = camera.clearColor.w;
    var ssssBlurRTName = "dsSSSSBlurColor" + cameraName;
    var ssssBlurDSName = "dsSSSSBlurDSColor" + cameraName;
    if (!ppl.containsResource(ssssBlurRTName)) {
      ppl.addRenderTarget(ssssBlurRTName, getRTFormatBeforeToneMapping(ppl), width, height, ResourceResidency.MANAGED);
      ppl.addRenderTarget(ssssBlurDSName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(ssssBlurRTName, width, height);
    ppl.updateRenderTarget(ssssBlurDSName, width, height);

    // ==== Copy input DS ===
    var copyInputDSPass = ppl.addRenderPass(width, height, 'copy-pass');
    copyInputDSPass.name = "CameraCopyDSPass" + cameraID;
    copyInputDSPass.setViewport(new Viewport(area.x, area.y, width, height));
    if (ppl.containsResource(inputDS)) {
      var verId = webPipeline.resourceGraph.vertex(inputDS);
      var sampler = webPipeline.resourceGraph.getSampler(verId);
      sampler.minFilter = Filter.POINT;
      sampler.magFilter = Filter.POINT;
      sampler.mipFilter = Filter.NONE;
      copyInputDSPass.addTexture(inputDS, 'depthRaw');
    }
    copyInputDSPass.addRenderTarget(ssssBlurDSName, LoadOp.CLEAR, StoreOp.STORE, new Color(1.0, 0.0, 0.0, 0.0));
    copyInputDSPass.addQueue(QueueHint.RENDER_OPAQUE | QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, ssssBlurData.ssssBlurMaterial, COPY_INPUT_DS_PASS_INDEX, SceneFlags.NONE);

    // ==== SSSS Blur X Pass ===
    var ssssblurXPass = ppl.addRenderPass(width, height, 'ssss-blurX');
    ssssblurXPass.name = "CameraSSSSBlurXPass" + cameraID;
    ssssblurXPass.setViewport(new Viewport(area.x, area.y, width, height));
    if (ppl.containsResource(inputRT)) {
      var _verId = webPipeline.resourceGraph.vertex(inputRT);
      var _sampler = webPipeline.resourceGraph.getSampler(_verId);
      _sampler.minFilter = Filter.POINT;
      _sampler.magFilter = Filter.POINT;
      _sampler.mipFilter = Filter.NONE;
      ssssblurXPass.addTexture(inputRT, 'colorTex');
    }
    if (ppl.containsResource(ssssBlurDSName)) {
      var _verId2 = webPipeline.resourceGraph.vertex(ssssBlurDSName);
      var _sampler2 = webPipeline.resourceGraph.getSampler(_verId2);
      _sampler2.minFilter = Filter.POINT;
      _sampler2.magFilter = Filter.POINT;
      _sampler2.mipFilter = Filter.NONE;
      ssssblurXPass.addTexture(ssssBlurDSName, 'depthTex');
    }
    ssssblurXPass.addRenderTarget(ssssBlurRTName, LoadOp.CLEAR, StoreOp.STORE, ssssBlurClearColor);
    ssssblurXPass.addDepthStencil(inputDS, LoadOp.LOAD, StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    ssssBlurData.ssssBlurMaterial.setProperty('blurInfo', new Vec4(ssssBlurData.ssssFov, ssssBlurData.ssssWidth, ssssBlurData.boundingBox, ssssBlurData.ssssScale), SSSS_BLUR_X_PASS_INDEX);
    ssssBlurData.ssssBlurMaterial.setProperty('kernel', ssssBlurData.kernel, SSSS_BLUR_X_PASS_INDEX);
    ssssblurXPass.addQueue(QueueHint.RENDER_OPAQUE | QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, ssssBlurData.ssssBlurMaterial, SSSS_BLUR_X_PASS_INDEX, SceneFlags.NONE);

    // === SSSS Blur Y Pass ===
    var ssssblurYPass = ppl.addRenderPass(width, height, 'ssss-blurY');
    ssssblurYPass.name = "CameraSSSSBlurYPass" + cameraID;
    ssssblurYPass.setViewport(new Viewport(area.x, area.y, width, height));
    if (ppl.containsResource(ssssBlurRTName)) {
      var _verId3 = webPipeline.resourceGraph.vertex(ssssBlurRTName);
      var _sampler3 = webPipeline.resourceGraph.getSampler(_verId3);
      _sampler3.minFilter = Filter.POINT;
      _sampler3.magFilter = Filter.POINT;
      _sampler3.mipFilter = Filter.NONE;
      ssssblurYPass.addTexture(ssssBlurRTName, 'colorTex');
    }
    if (ppl.containsResource(ssssBlurDSName)) {
      var _verId4 = webPipeline.resourceGraph.vertex(ssssBlurDSName);
      var _sampler4 = webPipeline.resourceGraph.getSampler(_verId4);
      _sampler4.minFilter = Filter.POINT;
      _sampler4.magFilter = Filter.POINT;
      _sampler4.mipFilter = Filter.NONE;
      ssssblurYPass.addTexture(ssssBlurDSName, 'depthTex');
    }
    ssssblurYPass.addRenderTarget(inputRT, LoadOp.LOAD, StoreOp.STORE, ssssBlurClearColor);
    ssssblurYPass.addDepthStencil(inputDS, LoadOp.LOAD, StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    ssssBlurData.ssssBlurMaterial.setProperty('blurInfo', new Vec4(ssssBlurData.ssssFov, ssssBlurData.ssssWidth, ssssBlurData.boundingBox, ssssBlurData.ssssScale), SSSS_BLUR_Y_PASS_INDEX);
    ssssBlurData.ssssBlurMaterial.setProperty('kernel', ssssBlurData.kernel, SSSS_BLUR_Y_PASS_INDEX);
    ssssblurYPass.addQueue(QueueHint.RENDER_OPAQUE | QueueHint.RENDER_TRANSPARENT).addCameraQuad(camera, ssssBlurData.ssssBlurMaterial, SSSS_BLUR_Y_PASS_INDEX, SceneFlags.NONE);
    return {
      rtName: inputRT,
      dsName: inputDS
    };
  }
  function buildToneMappingPass(camera, ppl, inputRT, inputDS) {
    if (!ppl.pipelineSceneData.isHDR || !ppl.getMacroBool('CC_USE_FLOAT_OUTPUT')) return {
      rtName: inputRT,
      dsName: inputDS
    };
    if (!toneMappingInfo) {
      toneMappingInfo = new ToneMappingInfo();
    }
    var cameraID = getCameraUniqueID(camera);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var toneMappingClearColor = new Color(0, 0, 0, camera.clearColor.w);
    if (camera.clearFlag & ClearFlagBit.COLOR) {
      toneMappingClearColor.x = camera.clearColor.x;
      toneMappingClearColor.y = camera.clearColor.y;
      toneMappingClearColor.z = camera.clearColor.z;
    }
    var toneMappingPassRTName = "toneMappingPassRTName" + cameraID;
    var toneMappingPassDS = "toneMappingPassDS" + cameraID;
    if (!ppl.containsResource(toneMappingPassRTName)) {
      ppl.addRenderTarget(toneMappingPassRTName, Format.RGBA8, width, height, ResourceResidency.MANAGED);
      ppl.addDepthStencil(toneMappingPassDS, Format.DEPTH_STENCIL, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(toneMappingPassRTName, width, height);
    ppl.updateDepthStencil(toneMappingPassDS, width, height);
    var toneMappingPass = ppl.addRenderPass(width, height, 'tone-mapping');
    toneMappingPass.name = "CameraToneMappingPass" + cameraID;
    toneMappingPass.setViewport(new Viewport(area.x, area.y, area.width, area.height));
    if (ppl.containsResource(inputRT)) {
      toneMappingPass.addTexture(inputRT, 'u_texSampler');
    }
    toneMappingPass.addRenderTarget(toneMappingPassRTName, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.RENDER_TARGET), StoreOp.STORE, toneMappingClearColor);
    toneMappingPass.addDepthStencil(toneMappingPassDS, getLoadOpOfClearFlag(camera.clearFlag, AttachmentType.DEPTH_STENCIL), StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    toneMappingPass.addQueue(QueueHint.NONE).addFullscreenQuad(toneMappingInfo.toneMappingMaterial, 0, SceneFlags.NONE);
    toneMappingPass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), SceneFlags.UI);
    if (getProfilerCamera() === camera) {
      toneMappingPass.showStatistics = true;
    }
    return {
      rtName: toneMappingPassRTName,
      dsName: toneMappingPassDS
    };
  }
  function buildTransparencyPass(camera, ppl, inputRT, inputDS, hasDeferredTransparencyObject) {
    if (hasDeferredTransparencyObject) return {
      rtName: inputRT,
      dsName: inputDS
    };
    var cameraID = getCameraUniqueID(camera);
    var cameraName = "Camera" + cameraID;
    var cameraInfo = buildShadowPasses(cameraName, camera, ppl);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var alphaPass = ppl.addRenderPass(width, height, 'default');
    alphaPass.name = "CameraAlphaPass" + cameraID;
    alphaPass.setViewport(new Viewport(area.x, area.y, width, height));
    for (var _iterator14 = _createForOfIteratorHelperLoose(cameraInfo.mainLightShadowNames), _step14; !(_step14 = _iterator14()).done;) {
      var dirShadowName = _step14.value;
      if (ppl.containsResource(dirShadowName)) {
        alphaPass.addTexture(dirShadowName, 'cc_shadowMap');
      }
    }
    for (var _iterator15 = _createForOfIteratorHelperLoose(cameraInfo.spotLightShadowNames), _step15; !(_step15 = _iterator15()).done;) {
      var spotShadowName = _step15.value;
      if (ppl.containsResource(spotShadowName)) {
        alphaPass.addTexture(spotShadowName, 'cc_spotShadowMap');
      }
    }
    alphaPass.addRenderTarget(inputRT, LoadOp.LOAD, StoreOp.STORE, new Color(camera.clearDepth, camera.clearStencil, 0, 0));
    alphaPass.addDepthStencil(inputDS, LoadOp.LOAD, StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    alphaPass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.GEOMETRY);
    return {
      rtName: inputRT,
      dsName: inputDS
    };
  }
  function _buildSpecularPass(camera, ppl, inputRT, inputDS) {
    if (EDITOR) {
      ppl.setMacroInt('CC_PIPELINE_TYPE', 0);
    }
    var cameraID = getCameraUniqueID(camera);
    var cameraName = "Camera" + cameraID;
    var cameraInfo = buildShadowPasses(cameraName, camera, ppl);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var specalurPass = ppl.addRenderPass(width, height, 'specular-pass');
    specalurPass.name = "CameraSpecalurPass" + cameraID;
    specalurPass.setViewport(new Viewport(area.x, area.y, width, height));
    for (var _iterator16 = _createForOfIteratorHelperLoose(cameraInfo.mainLightShadowNames), _step16; !(_step16 = _iterator16()).done;) {
      var dirShadowName = _step16.value;
      if (ppl.containsResource(dirShadowName)) {
        specalurPass.addTexture(dirShadowName, 'cc_shadowMap');
      }
    }
    for (var _iterator17 = _createForOfIteratorHelperLoose(cameraInfo.spotLightShadowNames), _step17; !(_step17 = _iterator17()).done;) {
      var spotShadowName = _step17.value;
      if (ppl.containsResource(spotShadowName)) {
        specalurPass.addTexture(spotShadowName, 'cc_spotShadowMap');
      }
    }
    specalurPass.addRenderTarget(inputRT, LoadOp.LOAD, StoreOp.STORE, new Color(camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w));
    specalurPass.addDepthStencil(inputDS, LoadOp.LOAD, StoreOp.STORE, camera.clearDepth, camera.clearStencil, camera.clearFlag);
    specalurPass.addQueue(QueueHint.RENDER_OPAQUE, 'default').addSceneOfCamera(camera, new LightInfo(), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.DEFAULT_LIGHTING | SceneFlags.PLANAR_SHADOW | SceneFlags.CUTOUT_OBJECT | SceneFlags.DRAW_INSTANCING | SceneFlags.GEOMETRY);
    specalurPass.addQueue(QueueHint.RENDER_TRANSPARENT, 'forward-add').addSceneOfCamera(camera, new LightInfo(), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.DEFAULT_LIGHTING | SceneFlags.PLANAR_SHADOW | SceneFlags.CUTOUT_OBJECT | SceneFlags.DRAW_INSTANCING | SceneFlags.GEOMETRY);
    return {
      rtName: inputRT,
      dsName: inputDS
    };
  }
  function buildSSSSPass(camera, ppl, inputRT, inputDS) {
    if (hasSkinObject(ppl)) {
      forceEnableFloatOutput(ppl);
      var blurInfo = _buildSSSSBlurPass(camera, ppl, inputRT, inputDS);
      var specularInfo = _buildSpecularPass(camera, ppl, blurInfo.rtName, blurInfo.dsName);
      return {
        rtName: specularInfo.rtName,
        dsName: specularInfo.dsName
      };
    } else {
      var _specularInfo = _buildSpecularPass(camera, ppl, inputRT, inputDS);
      return {
        rtName: _specularInfo.rtName,
        dsName: _specularInfo.dsName
      };
    }
  }
  function _buildHBAOPass(camera, ppl, inputRT, inputDS) {
    if (!_hbaoParams) return {
      rtName: inputRT,
      dsName: inputDS
    };
    var cameraID = getCameraUniqueID(camera);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var hbaoClearColor = new Color(0, 0, 0, camera.clearColor.w);
    var hbaoRTName = "hbaoRTName" + cameraID;
    if (!ppl.containsResource(hbaoRTName)) {
      ppl.addRenderTarget(hbaoRTName, Format.BGRA8, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(hbaoRTName, width, height);
    var hbaoPass = ppl.addRenderPass(width, height, 'hbao-pass');
    hbaoPass.name = "CameraHBAOPass" + cameraID;
    hbaoPass.setViewport(new Viewport(area.x, area.y, area.width, area.height));
    if (ppl.containsResource(inputDS)) {
      var webPipeline = ppl;
      var verId = webPipeline.resourceGraph.vertex(inputDS);
      var sampler = webPipeline.resourceGraph.getSampler(verId);
      sampler.minFilter = sampler.magFilter = Filter.POINT;
      sampler.mipFilter = Filter.NONE;
      sampler.addressU = sampler.addressV = Address.CLAMP;
      hbaoPass.addTexture(inputDS, 'DepthTex');
    }
    hbaoPass.addRenderTarget(hbaoRTName, LoadOp.LOAD, StoreOp.STORE, hbaoClearColor);
    var passIdx = 0;
    _hbaoParams.hbaoMaterial.setProperty('uvDepthToEyePosParams', _hbaoParams.uvDepthToEyePosParams, passIdx);
    _hbaoParams.hbaoMaterial.setProperty('radiusParam', _hbaoParams.radiusParam, passIdx);
    _hbaoParams.hbaoMaterial.setProperty('miscParam', _hbaoParams.miscParam, passIdx);
    // eslint-disable-next-line max-len
    _hbaoParams.hbaoMaterial.setProperty('randomTexSize', new Vec4(_hbaoParams.randomTexture.width, _hbaoParams.randomTexture.height, 1.0 / _hbaoParams.randomTexture.width, 1.0 / _hbaoParams.randomTexture.height), passIdx);
    _hbaoParams.hbaoMaterial.setProperty('blurParam', _hbaoParams.blurParam, passIdx);
    hbaoPass.addQueue(QueueHint.RENDER_TRANSPARENT | QueueHint.RENDER_OPAQUE).addCameraQuad(camera, _hbaoParams.hbaoMaterial, passIdx, SceneFlags.NONE);
    return {
      rtName: hbaoRTName,
      dsName: inputDS
    };
  }
  function _buildHBAOBlurPass(camera, ppl, inputRT, inputDS, isYPass) {
    if (!_hbaoParams) return {
      rtName: inputRT,
      dsName: inputDS
    };
    var cameraID = getCameraUniqueID(camera);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var hbaoClearColor = new Color(0, 0, 0, camera.clearColor.w);
    var inputRTName = "hbaoRTName" + cameraID;
    var outputRTName = "hbaoBluredRTName" + cameraID;
    var shaderPassName = 'blurx-pass';
    var blurPassName = "CameraHBAOBluredXPass" + cameraID;
    if (isYPass) {
      outputRTName = "hbaoRTName" + cameraID;
      inputRTName = "hbaoBluredRTName" + cameraID;
      shaderPassName = 'blury-pass';
      blurPassName = "CameraHBAOBluredYPass" + cameraID;
    }
    if (!ppl.containsResource(outputRTName)) {
      ppl.addRenderTarget(outputRTName, Format.BGRA8, width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(outputRTName, width, height);
    var blurPass = ppl.addRenderPass(width, height, shaderPassName);
    blurPass.name = blurPassName;
    blurPass.setViewport(new Viewport(area.x, area.y, area.width, area.height));
    if (ppl.containsResource(inputDS)) {
      var webPipeline = ppl;
      var verId = webPipeline.resourceGraph.vertex(inputDS);
      var sampler = webPipeline.resourceGraph.getSampler(verId);
      sampler.minFilter = sampler.magFilter = Filter.POINT;
      sampler.mipFilter = Filter.NONE;
      sampler.addressU = sampler.addressV = Address.CLAMP;
      blurPass.addTexture(inputDS, 'DepthTex');
    }
    if (ppl.containsResource(inputRTName)) {
      var _webPipeline = ppl;
      var _verId5 = _webPipeline.resourceGraph.vertex(inputRTName);
      var _sampler5 = _webPipeline.resourceGraph.getSampler(_verId5);
      _sampler5.minFilter = _sampler5.magFilter = Filter.LINEAR;
      _sampler5.mipFilter = Filter.NONE;
      _sampler5.addressU = _sampler5.addressV = Address.CLAMP;
      blurPass.addTexture(inputRTName, 'AOTexNearest');
    }
    blurPass.addRenderTarget(outputRTName, LoadOp.LOAD, StoreOp.STORE, hbaoClearColor);
    var passIdx = isYPass ? 2 : 1;
    _hbaoParams.hbaoMaterial.setProperty('uvDepthToEyePosParams', _hbaoParams.uvDepthToEyePosParams, passIdx);
    _hbaoParams.hbaoMaterial.setProperty('radiusParam', _hbaoParams.radiusParam, passIdx);
    _hbaoParams.hbaoMaterial.setProperty('miscParam', _hbaoParams.miscParam, passIdx);
    _hbaoParams.hbaoMaterial.setProperty('blurParam', _hbaoParams.blurParam, passIdx);
    blurPass.addQueue(QueueHint.RENDER_TRANSPARENT | QueueHint.RENDER_OPAQUE).addCameraQuad(camera, _hbaoParams.hbaoMaterial, passIdx, SceneFlags.NONE);
    return {
      rtName: outputRTName,
      dsName: inputDS
    };
  }
  function _buildHBAOCombinedPass(camera, ppl, inputRT, inputDS, outputRT) {
    if (!_hbaoParams) return {
      rtName: inputRT,
      dsName: inputDS
    };
    var cameraID = getCameraUniqueID(camera);
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;
    var hbaoClearColor = new Color(0, 0, 0, camera.clearColor.w);
    var outputRTName = outputRT;
    if (!ppl.containsResource(outputRTName)) {
      ppl.addRenderTarget(outputRTName, getRTFormatBeforeToneMapping(ppl), width, height, ResourceResidency.MANAGED);
    }
    ppl.updateRenderTarget(outputRTName, width, height);
    var hbaoPass = ppl.addRenderPass(width, height, 'combine-pass');
    hbaoPass.name = "CameraHBAOCombinedPass" + cameraID;
    hbaoPass.setViewport(new Viewport(area.x, area.y, area.width, area.height));
    var inputRTName = inputRT;
    if (ppl.containsResource(inputRTName)) {
      var webPipeline = ppl;
      var verId = webPipeline.resourceGraph.vertex(inputRTName);
      var sampler = webPipeline.resourceGraph.getSampler(verId);
      sampler.minFilter = sampler.magFilter = Filter.LINEAR;
      sampler.mipFilter = Filter.NONE;
      sampler.addressU = sampler.addressV = Address.CLAMP;
      hbaoPass.addTexture(inputRTName, 'AOTexNearest');
    }
    hbaoPass.addRenderTarget(outputRTName, LoadOp.LOAD, StoreOp.STORE, hbaoClearColor);
    var passIdx = 3;
    _hbaoParams.hbaoMaterial.setProperty('uvDepthToEyePosParams', _hbaoParams.uvDepthToEyePosParams, passIdx);
    _hbaoParams.hbaoMaterial.setProperty('radiusParam', _hbaoParams.radiusParam, passIdx);
    _hbaoParams.hbaoMaterial.setProperty('miscParam', _hbaoParams.miscParam, passIdx);
    _hbaoParams.hbaoMaterial.setProperty('blurParam', _hbaoParams.blurParam, passIdx);
    hbaoPass.addQueue(QueueHint.RENDER_TRANSPARENT | QueueHint.RENDER_OPAQUE).addCameraQuad(camera, _hbaoParams.hbaoMaterial, passIdx, SceneFlags.NONE);
    return {
      rtName: outputRTName,
      dsName: inputDS
    };
  }
  function buildHBAOPasses(camera, ppl, inputRT, inputDS, radiusScale, angleBiasDegree, blurSharpness, aoSaturation, aoStrength, needBlur) {
    if (radiusScale === void 0) {
      radiusScale = 1.0;
    }
    if (angleBiasDegree === void 0) {
      angleBiasDegree = 10.0;
    }
    if (blurSharpness === void 0) {
      blurSharpness = 3;
    }
    if (aoSaturation === void 0) {
      aoSaturation = 1.0;
    }
    if (aoStrength === void 0) {
      aoStrength = 1.0;
    }
    if (needBlur === void 0) {
      needBlur = true;
    }
    var area = getRenderArea(camera, camera.window.width, camera.window.height);
    var width = area.width;
    var height = area.height;

    // params
    if (!_hbaoParams) _hbaoParams = new HBAOParams();
    // todo: nearest object distance from camera
    var sceneScale = camera.nearClip;
    // todo: Half Res Depth Tex
    _hbaoParams.depthTexFullResolution = vec2.set(width, height);
    _hbaoParams.depthTexResolution = vec2.set(width, height);
    _hbaoParams.sceneScale = sceneScale;
    _hbaoParams.cameraFov = camera.fov;
    _hbaoParams.radiusScale = radiusScale;
    _hbaoParams.angleBiasDegree = angleBiasDegree;
    _hbaoParams.aoStrength = aoStrength;
    _hbaoParams.blurSharpness = blurSharpness;
    _hbaoParams.aoSaturation = aoSaturation;
    _hbaoParams.update();

    // debug view
    var director = cclegacy.director;
    var root = director.root;
    if (root.debugView) {
      if (root.debugView.isEnabled() && (root.debugView.singleMode !== DebugViewSingleType.NONE && root.debugView.singleMode !== DebugViewSingleType.AO || !root.debugView.isCompositeModeEnabled(DebugViewCompositeType.AO))) {
        return {
          rtName: inputRT,
          dsName: inputDS
        };
      }
    }

    // passes
    var hbaoInfo = _buildHBAOPass(camera, ppl, inputRT, inputDS);
    var hbaoCombinedInputRTName = hbaoInfo.rtName;
    if (needBlur) {
      var haboBlurInfoX = _buildHBAOBlurPass(camera, ppl, hbaoInfo.rtName, inputDS, false);
      var haboBlurInfoY = _buildHBAOBlurPass(camera, ppl, haboBlurInfoX.rtName, inputDS, true);
      hbaoCombinedInputRTName = haboBlurInfoY.rtName;
    }
    var haboCombined = _buildHBAOCombinedPass(camera, ppl, hbaoCombinedInputRTName, inputDS, inputRT);
    return {
      rtName: haboCombined.rtName,
      dsName: inputDS
    };
  }
  function buildLightClusterBuildPass(camera, clusterData, ppl) {
    var cameraID = getCameraUniqueID(camera);
    var clusterBufferName = "clusterBuffer" + cameraID;
    var clusterBufferSize = CLUSTER_COUNT * 2 * 4 * 4;
    if (!ppl.containsResource(clusterBufferName)) {
      ppl.addStorageBuffer(clusterBufferName, Format.UNKNOWN, clusterBufferSize, ResourceResidency.MANAGED);
    }
    ppl.updateStorageBuffer(clusterBufferName, clusterBufferSize);
    var clusterPass = ppl.addComputePass('cluster-build-cs');
    clusterPass.addStorageBuffer(clusterBufferName, AccessType.WRITE, 'b_clustersBuffer');
    clusterPass.addQueue().addDispatch(clusterData.dispatchX, clusterData.dispatchY, clusterData.dispatchZ, clusterData.clusterBuildCS, 0);
    var width = camera.width * ppl.pipelineSceneData.shadingScale;
    var height = camera.height * ppl.pipelineSceneData.shadingScale;
    if ('setCurrConstant' in clusterPass) {
      // web-pipeline
      clusterPass.addConstant('CCConst', 'cluster-build-cs');
    }
    clusterPass.setVec4('cc_nearFar', new Vec4(camera.nearClip, camera.farClip, camera.getClipSpaceMinz(), 0));
    clusterPass.setVec4('cc_viewPort', new Vec4(0, 0, width, height));
    clusterPass.setVec4('cc_workGroup', new Vec4(CLUSTERS_X, CLUSTERS_Y, CLUSTERS_Z, 0));
    clusterPass.setMat4('cc_matView', camera.matView);
    clusterPass.setMat4('cc_matProjInv', camera.matProjInv);
  }
  function buildLightClusterCullingPass(camera, clusterData, ppl) {
    var cameraID = getCameraUniqueID(camera);
    var clusterBufferName = "clusterBuffer" + cameraID;
    var clusterLightBufferName = "clusterLightBuffer" + cameraID;
    var clusterGlobalIndexBufferName = "globalIndexBuffer" + cameraID;
    var clusterLightIndicesBufferName = "clusterLightIndicesBuffer" + cameraID;
    var clusterLightGridBufferName = "clusterLightGridBuffer" + cameraID;

    // index buffer
    var lightIndexBufferSize = MAX_LIGHTS_PER_CLUSTER * CLUSTER_COUNT * 4;
    var lightGridBufferSize = CLUSTER_COUNT * 4 * 4;
    if (!ppl.containsResource(clusterLightIndicesBufferName)) {
      ppl.addStorageBuffer(clusterLightIndicesBufferName, Format.UNKNOWN, lightIndexBufferSize, ResourceResidency.MANAGED);
    }
    if (!ppl.containsResource(clusterLightGridBufferName)) {
      ppl.addStorageBuffer(clusterLightGridBufferName, Format.UNKNOWN, lightGridBufferSize, ResourceResidency.MANAGED);
    }
    var clusterPass = ppl.addComputePass('cluster-culling-cs');
    clusterPass.addStorageBuffer(clusterLightBufferName, AccessType.READ, 'b_ccLightsBuffer');
    clusterPass.addStorageBuffer(clusterBufferName, AccessType.READ, 'b_clustersBuffer');
    clusterPass.addStorageBuffer(clusterLightIndicesBufferName, AccessType.WRITE, 'b_clusterLightIndicesBuffer');
    clusterPass.addStorageBuffer(clusterLightGridBufferName, AccessType.WRITE, 'b_clusterLightGridBuffer');
    clusterPass.addStorageBuffer(clusterGlobalIndexBufferName, AccessType.WRITE, 'b_globalIndexBuffer');
    clusterPass.addQueue().addDispatch(clusterData.dispatchX, clusterData.dispatchY, clusterData.dispatchZ, clusterData.clusterLightCullingCS, 0);
    var width = camera.width * ppl.pipelineSceneData.shadingScale;
    var height = camera.height * ppl.pipelineSceneData.shadingScale;
    if ('setCurrConstant' in clusterPass) {
      // web-pipeline
      clusterPass.addConstant('CCConst', 'cluster-build-cs');
    }
    clusterPass.setVec4('cc_nearFar', new Vec4(camera.nearClip, camera.farClip, camera.getClipSpaceMinz(), 0));
    clusterPass.setVec4('cc_viewPort', new Vec4(width, height, width, height));
    clusterPass.setVec4('cc_workGroup', new Vec4(CLUSTERS_X, CLUSTERS_Y, CLUSTERS_Z, 0));
    clusterPass.setMat4('cc_matView', camera.matView);
    clusterPass.setMat4('cc_matProjInv', camera.matProjInv);
  }
  function buildLightBuffer(size, floatPerLight, camera, pipeline) {
    var buffer = new ArrayBuffer(size);
    var view = new Float32Array(buffer);
    var data = pipeline.pipelineSceneData;
    var lightMeterScale = 10000.0;
    var exposure = camera.exposure;

    // gather light data
    var index = 0;
    for (var _iterator18 = _createForOfIteratorHelperLoose(data.validPunctualLights), _step18; !(_step18 = _iterator18()).done;) {
      var light = _step18.value;
      var offset = index * floatPerLight;
      var positionOffset = offset + 0;
      var colorOffset = offset + 4;
      var sizeRangeAngleOffset = offset + 8;
      var directionOffset = offset + 12;
      var boundSizeOffset = offset + 16;
      var luminanceHDR = 0;
      var luminanceLDR = 0;
      var position = void 0;
      if (light.type === LightType.POINT) {
        var point = light;
        position = point.position;
        luminanceLDR = point.luminanceLDR;
        luminanceHDR = point.luminanceHDR;
        view[sizeRangeAngleOffset] = 0;
        view[sizeRangeAngleOffset + 1] = point.range;
        view[sizeRangeAngleOffset + 2] = 0;
        view[sizeRangeAngleOffset + 3] = 0;
      } else if (light.type === LightType.SPHERE) {
        var sphere = light;
        position = sphere.position;
        luminanceLDR = sphere.luminanceLDR;
        luminanceHDR = sphere.luminanceHDR;
        view[sizeRangeAngleOffset] = sphere.size;
        view[sizeRangeAngleOffset + 1] = sphere.range;
        view[sizeRangeAngleOffset + 2] = 0;
        view[sizeRangeAngleOffset + 3] = 0;
      } else if (light.type === LightType.SPOT) {
        var spot = light;
        position = spot.position;
        luminanceLDR = spot.luminanceLDR;
        luminanceHDR = spot.luminanceHDR;
        view[sizeRangeAngleOffset] = spot.size;
        view[sizeRangeAngleOffset + 1] = spot.range;
        view[sizeRangeAngleOffset + 2] = spot.spotAngle;
        view[sizeRangeAngleOffset + 3] = 0;
        var dir = spot.direction;
        view[directionOffset] = dir.x;
        view[directionOffset + 1] = dir.y;
        view[directionOffset + 2] = dir.z;
        view[directionOffset + 3] = 0;
      } else if (light.type === LightType.RANGED_DIRECTIONAL) {
        var directional = light;
        position = directional.position;
        luminanceLDR = directional.illuminanceLDR;
        luminanceHDR = directional.illuminanceHDR;
        var right = directional.right;
        view[sizeRangeAngleOffset] = right.x;
        view[sizeRangeAngleOffset + 1] = right.y;
        view[sizeRangeAngleOffset + 2] = right.z;
        view[sizeRangeAngleOffset + 3] = 0;
        var _dir = directional.direction;
        view[directionOffset] = _dir.x;
        view[directionOffset + 1] = _dir.y;
        view[directionOffset + 2] = _dir.z;
        view[directionOffset + 3] = 0;
        var scale = directional.scale;
        view[boundSizeOffset] = scale.x * 0.5;
        view[boundSizeOffset + 1] = scale.y * 0.5;
        view[boundSizeOffset + 2] = scale.z * 0.5;
        view[boundSizeOffset + 3] = 0;
      }
      // position
      view[positionOffset] = position.x;
      view[positionOffset + 1] = position.y;
      view[positionOffset + 2] = position.z;
      view[positionOffset + 3] = light.type;

      // color
      var color = light.color;
      if (light.useColorTemperature) {
        var tempRGB = light.colorTemperatureRGB;
        view[colorOffset] = color.x * tempRGB.x;
        view[colorOffset + 1] = color.y * tempRGB.y;
        view[colorOffset + 2] = color.z * tempRGB.z;
      } else {
        view[colorOffset] = color.x;
        view[colorOffset + 1] = color.y;
        view[colorOffset + 2] = color.z;
      }
      view[colorOffset + 3] = data.isHDR ? luminanceHDR * exposure * lightMeterScale : luminanceLDR;
      index++;
    }
    // last float of first light data
    view[3 * 4 + 3] = data.validPunctualLights.length;
    return buffer;
  }
  function buildStandardLightData(camera, pipeline) {
    validPunctualLightsCulling(pipeline, camera);
  }
  function buildClusterLightData(camera, pipeline) {
    validPunctualLightsCulling(pipeline, camera);

    // build cluster light data
    var data = pipeline.pipelineSceneData;
    var validLightCountForBuffer = nextPow2(Math.max(data.validPunctualLights.length, 1));
    var lightBufferFloatNum = 20; // 5 * vec4
    var clusterLightBufferSize = validLightCountForBuffer * 4 * lightBufferFloatNum;
    var cameraID = getCameraUniqueID(camera);
    var clusterLightBufferName = "clusterLightBuffer" + cameraID;
    var clusterGlobalIndexBufferName = "globalIndexBuffer" + cameraID;
    var ppl = pipeline;
    if (!ppl.containsResource(clusterGlobalIndexBufferName)) {
      ppl.addStorageBuffer(clusterGlobalIndexBufferName, Format.UNKNOWN, 4, ResourceResidency.PERSISTENT);
    }
    if (!ppl.containsResource(clusterLightBufferName)) {
      ppl.addStorageBuffer(clusterLightBufferName, Format.UNKNOWN, clusterLightBufferSize, ResourceResidency.PERSISTENT);
    }
    ppl.updateStorageBuffer(clusterLightBufferName, clusterLightBufferSize);
    var buffer = buildLightBuffer(clusterLightBufferSize, lightBufferFloatNum, camera, pipeline);

    // global index buffer
    var globalIndexBuffer = new ArrayBuffer(4);
    var globalIndexBufferView = new Uint32Array(globalIndexBuffer);
    globalIndexBufferView[0] = 0;
    var uploadPair1 = new UploadPair(new Uint8Array(buffer), clusterLightBufferName);
    var uploadPair2 = new UploadPair(new Uint8Array(globalIndexBuffer), clusterGlobalIndexBufferName);
    ppl.addUploadPass([uploadPair1, uploadPair2]);
  }
  function buildClusterPasses(camera, pipeline) {
    buildClusterLightData(camera, pipeline);
    var ppl = pipeline;
    if (!_clusterLightData) _clusterLightData = new ClusterLightData();
    buildLightClusterBuildPass(camera, _clusterLightData, ppl);
    buildLightClusterCullingPass(camera, _clusterLightData, ppl);
  }
  function hashCombine(hash, currHash) {
    return currHash ^= (hash >>> 0) + 0x9e3779b9 + (currHash << 6) + (currHash >> 2);
  }
  function hashCombineNum(val, currHash) {
    var hash = 5381;
    return hashCombine(hash * 33 ^ val, currHash);
  }
  function hashCombineStr(str, currHash) {
    // DJB2 HASH
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
      hash = hash * 33 ^ str.charCodeAt(i);
    }
    return hashCombine(hash, currHash);
  }
  function bool(val) {
    return !!val;
  }
  function AlignUp(value, alignment) {
    return value + (alignment - 1) & ~(alignment - 1);
  }
  function SetLightUBO(light, bHDR, exposure, shadowInfo, buffer, offset, elemSize) {
    var vec4Array = new Float32Array(4);
    var size = 0.0;
    var range = 0.0;
    var luminanceHDR = 0.0;
    var luminanceLDR = 0.0;
    if (light && light.type === LightType.SPHERE) {
      var sphereLight = light;
      vec4Array[0] = sphereLight.position.x;
      vec4Array[1] = sphereLight.position.y;
      vec4Array[2] = sphereLight.position.z;
      vec4Array[3] = LightType.SPHERE;
      size = sphereLight.size;
      range = sphereLight.range;
      luminanceHDR = sphereLight.luminanceHDR;
      luminanceLDR = sphereLight.luminanceLDR;
    } else if (light && light.type === LightType.SPOT) {
      var spotLight = light;
      vec4Array[0] = spotLight.position.x;
      vec4Array[1] = spotLight.position.y;
      vec4Array[2] = spotLight.position.z;
      vec4Array[3] = LightType.SPOT;
      size = spotLight.size;
      range = spotLight.range;
      luminanceHDR = spotLight.luminanceHDR;
      luminanceLDR = spotLight.luminanceLDR;
    } else if (light && light.type === LightType.POINT) {
      var pointLight = light;
      vec4Array[0] = pointLight.position.x;
      vec4Array[1] = pointLight.position.y;
      vec4Array[2] = pointLight.position.z;
      vec4Array[3] = LightType.POINT;
      size = 0.0;
      range = pointLight.range;
      luminanceHDR = pointLight.luminanceHDR;
      luminanceLDR = pointLight.luminanceLDR;
    } else if (light && light.type === LightType.RANGED_DIRECTIONAL) {
      var rangedDirLight = light;
      vec4Array[0] = rangedDirLight.position.x;
      vec4Array[1] = rangedDirLight.position.y;
      vec4Array[2] = rangedDirLight.position.z;
      vec4Array[3] = LightType.RANGED_DIRECTIONAL;
      size = 0.0;
      range = 0.0;
      luminanceHDR = rangedDirLight.illuminanceHDR;
      luminanceLDR = rangedDirLight.illuminanceLDR;
    }
    var index = offset + UBOForwardLight.LIGHT_POS_OFFSET;
    buffer.set(vec4Array, index);
    index = offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET;
    vec4Array.set([size, range, 0, 0]);
    buffer.set(vec4Array, index);
    index = offset + UBOForwardLight.LIGHT_COLOR_OFFSET;
    var color = light ? light.color : new Color();
    if (light && light.useColorTemperature) {
      var tempRGB = light.colorTemperatureRGB;
      buffer[index++] = color.x * tempRGB.x;
      buffer[index++] = color.y * tempRGB.y;
      buffer[index++] = color.z * tempRGB.z;
    } else {
      buffer[index++] = color.x;
      buffer[index++] = color.y;
      buffer[index++] = color.z;
    }
    if (bHDR) {
      buffer[index] = luminanceHDR * exposure * kLightMeterScale;
    } else {
      buffer[index] = luminanceLDR;
    }
    switch (light ? light.type : LightType.UNKNOWN) {
      case LightType.SPHERE:
        buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 2] = 0;
        buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 3] = 0;
        break;
      case LightType.SPOT:
        {
          var _spotLight = light;
          buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 2] = _spotLight.spotAngle;
          buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 3] = shadowInfo && shadowInfo.enabled && _spotLight.shadowEnabled && shadowInfo.type === ShadowType.ShadowMap ? 1.0 : 0.0;
          index = offset + UBOForwardLight.LIGHT_DIR_OFFSET;
          var direction = _spotLight.direction;
          buffer[index++] = direction.x;
          buffer[index++] = direction.y;
          buffer[index] = direction.z;
          buffer[offset + UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET + 0] = 0;
          buffer[offset + UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET + 1] = 0;
          buffer[offset + UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET + 2] = 0;
          buffer[offset + UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET + 3] = _spotLight.angleAttenuationStrength;
        }
        break;
      case LightType.POINT:
        buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 2] = 0;
        buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 3] = 0;
        break;
      case LightType.RANGED_DIRECTIONAL:
        {
          var _rangedDirLight = light;
          var right = _rangedDirLight.right;
          buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 0] = right.x;
          buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 1] = right.y;
          buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 2] = right.z;
          buffer[offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + 3] = 0;
          var _direction = _rangedDirLight.direction;
          buffer[offset + UBOForwardLight.LIGHT_DIR_OFFSET + 0] = _direction.x;
          buffer[offset + UBOForwardLight.LIGHT_DIR_OFFSET + 1] = _direction.y;
          buffer[offset + UBOForwardLight.LIGHT_DIR_OFFSET + 2] = _direction.z;
          buffer[offset + UBOForwardLight.LIGHT_DIR_OFFSET + 3] = 0;
          var scale = _rangedDirLight.scale;
          buffer[offset + UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET + 0] = scale.x * 0.5;
          buffer[offset + UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET + 1] = scale.y * 0.5;
          buffer[offset + UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET + 2] = scale.z * 0.5;
          buffer[offset + UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET + 3] = 0;
        }
        break;
      default:
        break;
    }
  }
  function getSubpassOrPassID(sceneId, rg, lg) {
    var queueId = rg.getParent(sceneId);
    assert(queueId !== 0xFFFFFFFF);
    var subpassOrPassID = rg.getParent(queueId);
    assert(subpassOrPassID !== 0xFFFFFFFF);
    var passId = rg.getParent(subpassOrPassID);
    var layoutId = lg.nullVertex();
    // single render pass
    if (passId === rg.nullVertex()) {
      var layoutName = rg.getLayout(subpassOrPassID);
      assert(!!layoutName);
      layoutId = lg.locateChild(lg.nullVertex(), layoutName);
    } else {
      var passLayoutName = rg.getLayout(passId);
      assert(!!passLayoutName);
      var passLayoutId = lg.locateChild(lg.nullVertex(), passLayoutName);
      assert(passLayoutId !== lg.nullVertex());
      var subpassLayoutName = rg.getLayout(subpassOrPassID);
      if (subpassLayoutName.length === 0) {
        layoutId = passLayoutId;
      } else {
        var subpassLayoutId = lg.locateChild(passLayoutId, subpassLayoutName);
        assert(subpassLayoutId !== lg.nullVertex());
        layoutId = subpassLayoutId;
      }
    }
    assert(layoutId !== lg.nullVertex());
    return layoutId;
  }
  _export({
    getRTFormatBeforeToneMapping: getRTFormatBeforeToneMapping,
    validPunctualLightsCulling: validPunctualLightsCulling,
    getCameraUniqueID: getCameraUniqueID,
    getLoadOpOfClearFlag: getLoadOpOfClearFlag,
    getRenderArea: getRenderArea,
    buildCopyPass: buildCopyPass,
    buildFxaaPass: buildFxaaPass,
    buildBloomPass: buildBloomPass,
    buildPostprocessPass: buildPostprocessPass,
    buildForwardPass: buildForwardPass,
    buildShadowPass: buildShadowPass,
    buildReflectionProbePasss: buildReflectionProbePasss,
    buildReflectionProbePass: buildReflectionProbePass,
    buildShadowPasses: buildShadowPasses,
    buildGBufferPass: buildGBufferPass,
    buildLightingPass: buildLightingPass,
    buildUIPass: buildUIPass,
    updateCameraUBO: updateCameraUBO,
    getDescBinding: getDescBinding,
    getDescBindingFromName: getDescBindingFromName,
    getDescriptorSetDataFromLayout: getDescriptorSetDataFromLayout,
    getDescriptorSetDataFromLayoutId: getDescriptorSetDataFromLayoutId,
    initGlobalDescBinding: initGlobalDescBinding,
    updateGlobalDescBinding: updateGlobalDescBinding,
    mergeSrcToTargetDesc: mergeSrcToTargetDesc,
    hasSkinObject: hasSkinObject,
    buildToneMappingPass: buildToneMappingPass,
    buildTransparencyPass: buildTransparencyPass,
    buildSSSSPass: buildSSSSPass,
    buildHBAOPasses: buildHBAOPasses,
    buildLightClusterBuildPass: buildLightClusterBuildPass,
    buildLightClusterCullingPass: buildLightClusterCullingPass,
    buildLightBuffer: buildLightBuffer,
    buildStandardLightData: buildStandardLightData,
    buildClusterLightData: buildClusterLightData,
    buildClusterPasses: buildClusterPasses,
    hashCombineNum: hashCombineNum,
    hashCombineStr: hashCombineStr,
    bool: bool,
    AlignUp: AlignUp,
    SetLightUBO: SetLightUBO,
    getSubpassOrPassID: getSubpassOrPassID,
    AntiAliasing: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_gfxIndexJs) {
      BufferInfo = _gfxIndexJs.BufferInfo;
      Buffer = _gfxIndexJs.Buffer;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Color = _gfxIndexJs.Color;
      LoadOp = _gfxIndexJs.LoadOp;
      Format = _gfxIndexJs.Format;
      Rect = _gfxIndexJs.Rect;
      Sampler = _gfxIndexJs.Sampler;
      StoreOp = _gfxIndexJs.StoreOp;
      Texture = _gfxIndexJs.Texture;
      Viewport = _gfxIndexJs.Viewport;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      Filter = _gfxIndexJs.Filter;
      Address = _gfxIndexJs.Address;
    }, function (_renderSceneSceneReflectionProbeJs) {
      ProbeType = _renderSceneSceneReflectionProbeJs.ProbeType;
    }, function (_renderSceneSceneCameraJs) {
      Camera = _renderSceneSceneCameraJs.Camera;
      SKYBOX_FLAG = _renderSceneSceneCameraJs.SKYBOX_FLAG;
    }, function (_renderSceneSceneShadowsJs) {
      CSMLevel = _renderSceneSceneShadowsJs.CSMLevel;
      ShadowType = _renderSceneSceneShadowsJs.ShadowType;
    }, function (_renderSceneSceneLightJs) {
      LightType = _renderSceneSceneLightJs.LightType;
    }, function (_defineJs) {
      UBOForwardLight = _defineJs.UBOForwardLight;
      supportsR32FloatTexture = _defineJs.supportsR32FloatTexture;
      supportsRGBA16HalfFloatTexture = _defineJs.supportsRGBA16HalfFloatTexture;
    }, function (_typesJs) {
      AccessType = _typesJs.AccessType;
      AttachmentType = _typesJs.AttachmentType;
      LightInfo = _typesJs.LightInfo;
      QueueHint = _typesJs.QueueHint;
      ResourceResidency = _typesJs.ResourceResidency;
      SceneFlags = _typesJs.SceneFlags;
      UpdateFrequency = _typesJs.UpdateFrequency;
      UploadPair = _typesJs.UploadPair;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      macro = _coreIndexJs.macro;
      geometry = _coreIndexJs.geometry;
      toRadian = _coreIndexJs.toRadian;
      cclegacy = _coreIndexJs.cclegacy;
      assert = _coreIndexJs.assert;
      nextPow2 = _coreIndexJs.nextPow2;
    }, function (_assetAssetsIndexJs) {
      ImageAsset = _assetAssetsIndexJs.ImageAsset;
      Material = _assetAssetsIndexJs.Material;
      Texture2D = _assetAssetsIndexJs.Texture2D;
    }, function (_pipelineFuncsJs) {
      getProfilerCamera = _pipelineFuncsJs.getProfilerCamera;
      SRGBToLinear = _pipelineFuncsJs.SRGBToLinear;
    }, function (_coreGeometryIndexJs) {
      AABB = _coreGeometryIndexJs.AABB;
    }, function (_debugViewJs) {
      DebugViewCompositeType = _debugViewJs.DebugViewCompositeType;
      DebugViewSingleType = _debugViewJs.DebugViewSingleType;
    }],
    execute: function () {
      _rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
      _tmpBoundingBox = new AABB(); // Anti-aliasing type, other types will be gradually added in the future
      (function (AntiAliasing) {
        AntiAliasing[AntiAliasing["NONE"] = 0] = "NONE";
        AntiAliasing[AntiAliasing["FXAA"] = 1] = "FXAA";
        AntiAliasing[AntiAliasing["FXAAHQ"] = 2] = "FXAAHQ";
      })(AntiAliasing || _export("AntiAliasing", AntiAliasing = {}));
      _cameras = [];
      FxaaData = /*#__PURE__*/function () {
        var _proto = FxaaData.prototype;
        _proto._updateFxaaPass = function _updateFxaaPass() {
          if (!this.fxaaMaterial) return;
          var combinePass = this.fxaaMaterial.passes[0];
          combinePass.beginChangeStatesSilently();
          combinePass.tryCompile();
          combinePass.endChangeStatesSilently();
        };
        _proto._init = function _init() {
          if (this.fxaaMaterial) return;
          this.fxaaMaterial = new Material();
          this.fxaaMaterial._uuid = 'builtin-fxaa-material';
          this.fxaaMaterial.initialize({
            effectName: 'pipeline/post-process/fxaa-hq'
          });
          for (var i = 0; i < this.fxaaMaterial.passes.length; ++i) {
            this.fxaaMaterial.passes[i].tryCompile();
          }
          this._updateFxaaPass();
        };
        function FxaaData() {
          this._init();
        }
        return FxaaData;
      }();
      fxaaData = null;
      _export("MAX_BLOOM_FILTER_PASS_NUM", MAX_BLOOM_FILTER_PASS_NUM = 6);
      _export("BLOOM_PREFILTERPASS_INDEX", BLOOM_PREFILTERPASS_INDEX = 0);
      _export("BLOOM_DOWNSAMPLEPASS_INDEX", BLOOM_DOWNSAMPLEPASS_INDEX = 1);
      _export("BLOOM_UPSAMPLEPASS_INDEX", BLOOM_UPSAMPLEPASS_INDEX = BLOOM_DOWNSAMPLEPASS_INDEX + MAX_BLOOM_FILTER_PASS_NUM);
      _export("BLOOM_COMBINEPASS_INDEX", BLOOM_COMBINEPASS_INDEX = BLOOM_UPSAMPLEPASS_INDEX + MAX_BLOOM_FILTER_PASS_NUM);
      BloomData = /*#__PURE__*/function () {
        var _proto2 = BloomData.prototype;
        _proto2._updateBloomPass = function _updateBloomPass() {
          if (!this.bloomMaterial) return;
          var prefilterPass = this.bloomMaterial.passes[BLOOM_PREFILTERPASS_INDEX];
          prefilterPass.beginChangeStatesSilently();
          prefilterPass.tryCompile();
          prefilterPass.endChangeStatesSilently();
          for (var i = 0; i < MAX_BLOOM_FILTER_PASS_NUM; ++i) {
            var downsamplePass = this.bloomMaterial.passes[BLOOM_DOWNSAMPLEPASS_INDEX + i];
            downsamplePass.beginChangeStatesSilently();
            downsamplePass.tryCompile();
            downsamplePass.endChangeStatesSilently();
            var upsamplePass = this.bloomMaterial.passes[BLOOM_UPSAMPLEPASS_INDEX + i];
            upsamplePass.beginChangeStatesSilently();
            upsamplePass.tryCompile();
            upsamplePass.endChangeStatesSilently();
          }
          var combinePass = this.bloomMaterial.passes[BLOOM_COMBINEPASS_INDEX];
          combinePass.beginChangeStatesSilently();
          combinePass.tryCompile();
          combinePass.endChangeStatesSilently();
        };
        _proto2._init = function _init() {
          if (this.bloomMaterial) return;
          this.bloomMaterial = new Material();
          this.bloomMaterial._uuid = 'builtin-bloom-material';
          this.bloomMaterial.initialize({
            effectName: 'pipeline/post-process/bloom'
          });
          for (var i = 0; i < this.bloomMaterial.passes.length; ++i) {
            this.bloomMaterial.passes[i].tryCompile();
          }
          this._updateBloomPass();
        };
        function BloomData() {
          this.threshold = 0.1;
          this.iterations = 2;
          this.intensity = 0.8;
          this._init();
        }
        return BloomData;
      }();
      bloomData = null;
      _export("PostInfo", PostInfo = /*#__PURE__*/function () {
        var _proto3 = PostInfo.prototype;
        _proto3._init = function _init() {
          this.postMaterial = new Material();
          this.postMaterial.name = 'builtin-post-process-material';
          this.postMaterial.initialize({
            effectName: 'pipeline/post-process',
            defines: {
              // Anti-aliasing type, currently only fxaa, so 1 means fxaa
              ANTIALIAS_TYPE: this.antiAliasing
            }
          });
          for (var i = 0; i < this.postMaterial.passes.length; ++i) {
            this.postMaterial.passes[i].tryCompile();
          }
        };
        function PostInfo(antiAliasing) {
          if (antiAliasing === void 0) {
            antiAliasing = AntiAliasing.NONE;
          }
          this.antiAliasing = AntiAliasing.NONE;
          this.antiAliasing = antiAliasing;
          this._init();
        }
        return PostInfo;
      }());
      _export("ShadowInfo", ShadowInfo = /*#__PURE__*/function () {
        function ShadowInfo() {
          this.shadowEnabled = false;
          this.mainLightShadowNames = new Array();
          this.spotLightShadowNames = new Array();
          this.validLights = [];
        }
        var _proto4 = ShadowInfo.prototype;
        _proto4.reset = function reset() {
          this.shadowEnabled = false;
          this.mainLightShadowNames.length = 0;
          this.spotLightShadowNames.length = 0;
          this.validLights.length = 0;
        };
        return ShadowInfo;
      }());
      shadowInfo = new ShadowInfo();
      _export("GBufferInfo", GBufferInfo = function GBufferInfo() {
        this.color = void 0;
        this.normal = void 0;
        this.emissive = void 0;
        this.ds = void 0;
      });
      _export("LightingInfo", LightingInfo = /*#__PURE__*/function () {
        var _proto5 = LightingInfo.prototype;
        _proto5._init = function _init() {
          this.deferredLightingMaterial = new Material();
          this.deferredLightingMaterial.name = 'builtin-deferred-material';
          this.deferredLightingMaterial.initialize({
            effectName: 'pipeline/deferred-lighting',
            defines: {
              CC_ENABLE_CLUSTERED_LIGHT_CULLING: this.enableCluster,
              CC_RECEIVE_SHADOW: 1
            }
          });
          for (var i = 0; i < this.deferredLightingMaterial.passes.length; ++i) {
            this.deferredLightingMaterial.passes[i].tryCompile();
          }
        };
        function LightingInfo(clusterEn) {
          this.enableCluster = void 0;
          this.enableCluster = clusterEn ? 1 : 0;
          this._init();
        }
        return LightingInfo;
      }());
      uniformMap = new Map();
      layouts = new Map();
      _varianceArray = [0.0484, 0.187, 0.567, 1.99, 7.41];
      _strengthParameterArray = [0.100, 0.118, 0.113, 0.358, 0.078];
      _vec3Temp = new Vec3();
      _vec3Temp2 = new Vec3();
      _vec4Temp = new Vec4();
      _vec4Temp2 = new Vec4();
      _export("COPY_INPUT_DS_PASS_INDEX", COPY_INPUT_DS_PASS_INDEX = 0);
      _export("SSSS_BLUR_X_PASS_INDEX", SSSS_BLUR_X_PASS_INDEX = 1);
      _export("SSSS_BLUR_Y_PASS_INDEX", SSSS_BLUR_Y_PASS_INDEX = 2);
      _export("EXPONENT", EXPONENT = 2.0);
      _export("I_SAMPLES_COUNT", I_SAMPLES_COUNT = 25);
      SSSSBlurData = /*#__PURE__*/function () {
        var _proto6 = SSSSBlurData.prototype;
        /**
         * We use a falloff to modulate the shape of the profile. Big falloffs
         * spreads the shape making it wider, while small falloffs make it
         * narrower.
         */
        _proto6._gaussian = function _gaussian(out, variance, r) {
          var xx = r / (0.001 + this._v3SSSSFallOff.x);
          out.x = Math.exp(-(xx * xx) / (2.0 * variance)) / (2.0 * 3.14 * variance);
          var yy = r / (0.001 + this._v3SSSSFallOff.y);
          out.y = Math.exp(-(yy * yy) / (2.0 * variance)) / (2.0 * 3.14 * variance);
          var zz = r / (0.001 + this._v3SSSSFallOff.z);
          out.z = Math.exp(-(zz * zz) / (2.0 * variance)) / (2.0 * 3.14 * variance);
        }

        /**
         * We used the red channel of the original skin profile defined in
         * [d'Eon07] for all three channels. We noticed it can be used for green
         * and blue channels (scaled using the falloff parameter) without
         * introducing noticeable differences and allowing for total control over
         * the profile. For example, it allows to create blue SSS gradients, which
         * could be useful in case of rendering blue creatures.
         */;
        _proto6._profile = function _profile(out, val) {
          for (var i = 0; i < 5; i++) {
            this._gaussian(_vec3Temp2, _varianceArray[i], val);
            _vec3Temp2.multiplyScalar(_strengthParameterArray[i]);
            out.add(_vec3Temp2);
          }
        };
        _proto6._updateSampleCount = function _updateSampleCount() {
          var strength = this._v3SSSSStrength;
          var nSamples = I_SAMPLES_COUNT;
          var range = nSamples > 20 ? 3.0 : 2.0;

          // Calculate the offsets:
          var step = 2.0 * range / (nSamples - 1);
          for (var i = 0; i < nSamples; i++) {
            var o = -range + i * step;
            var sign = o < 0.0 ? -1.0 : 1.0;
            // eslint-disable-next-line no-restricted-properties
            this._kernel[i].w = range * sign * Math.abs(Math.pow(o, EXPONENT)) / Math.pow(range, EXPONENT);
          }

          // Calculate the weights:
          for (var _i5 = 0; _i5 < nSamples; _i5++) {
            var w0 = _i5 > 0 ? Math.abs(this._kernel[_i5].w - this._kernel[_i5 - 1].w) : 0.0;
            var w1 = _i5 < nSamples - 1 ? Math.abs(this._kernel[_i5].w - this._kernel[_i5 + 1].w) : 0.0;
            var area = (w0 + w1) / 2.0;
            _vec3Temp.set(0);
            this._profile(_vec3Temp, this._kernel[_i5].w);
            _vec3Temp.multiplyScalar(area);
            this._kernel[_i5].x = _vec3Temp.x;
            this._kernel[_i5].y = _vec3Temp.y;
            this._kernel[_i5].z = _vec3Temp.z;
          }

          // We want the offset 0.0 to come first:
          var remainder = nSamples % 2;
          _vec4Temp.set(this._kernel[(nSamples - remainder) / 2]);
          for (var _i6 = (nSamples - remainder) / 2; _i6 > 0; _i6--) {
            _vec4Temp2.set(this._kernel[_i6 - 1]);
            this._kernel[_i6].set(_vec4Temp2);
          }
          this._kernel[0].set(_vec4Temp);

          // Calculate the sum of the weights, we will need to normalize them below:
          _vec3Temp.set(0.0);
          for (var _i7 = 0; _i7 < nSamples; _i7++) {
            _vec3Temp.add3f(this._kernel[_i7].x, this._kernel[_i7].y, this._kernel[_i7].z);
          }
          // Normalize the weights:
          for (var _i8 = 0; _i8 < nSamples; _i8++) {
            this._kernel[_i8].x /= _vec3Temp.x;
            this._kernel[_i8].y /= _vec3Temp.y;
            this._kernel[_i8].z /= _vec3Temp.z;
          }

          // Tweak them using the desired strength. The first one is:
          // lerp(1.0, kernel[0].rgb, strength)
          this._kernel[0].x = (1.0 - strength.x) * 1.0 + strength.x * this._kernel[0].x;
          this._kernel[0].y = (1.0 - strength.y) * 1.0 + strength.y * this._kernel[0].y;
          this._kernel[0].z = (1.0 - strength.z) * 1.0 + strength.z * this._kernel[0].z;

          // The others:
          // lerp(0.0, kernel[0].rgb, strength)
          for (var _i9 = 1; _i9 < nSamples; _i9++) {
            this._kernel[_i9].x *= strength.x;
            this._kernel[_i9].y *= strength.y;
            this._kernel[_i9].z *= strength.z;
          }
        };
        _proto6._updateBlurPass = function _updateBlurPass() {
          if (!this.ssssBlurMaterial) return;
          var copyInputDSPass = this.ssssBlurMaterial.passes[COPY_INPUT_DS_PASS_INDEX];
          copyInputDSPass.beginChangeStatesSilently();
          copyInputDSPass.tryCompile();
          copyInputDSPass.endChangeStatesSilently();
          var ssssBlurXPass = this.ssssBlurMaterial.passes[SSSS_BLUR_X_PASS_INDEX];
          ssssBlurXPass.beginChangeStatesSilently();
          ssssBlurXPass.tryCompile();
          ssssBlurXPass.endChangeStatesSilently();
          var ssssBlurYPass = this.ssssBlurMaterial.passes[SSSS_BLUR_Y_PASS_INDEX];
          ssssBlurYPass.beginChangeStatesSilently();
          ssssBlurYPass.tryCompile();
          ssssBlurYPass.endChangeStatesSilently();
        };
        _proto6._init = function _init() {
          if (this.ssssBlurMaterial) return;
          this.ssssBlurMaterial = new Material();
          this.ssssBlurMaterial._uuid = 'builtin-ssssBlur-material';
          this.ssssBlurMaterial.initialize({
            effectName: 'pipeline/ssss-blur'
          });
          for (var i = 0; i < this.ssssBlurMaterial.passes.length; ++i) {
            this.ssssBlurMaterial.passes[i].tryCompile();
          }
          this._updateBlurPass();
          for (var _i10 = 0; _i10 < I_SAMPLES_COUNT; _i10++) {
            this._kernel[_i10] = new Vec4();
          }
          this._updateSampleCount();
        };
        function SSSSBlurData() {
          this.ssssFov = 45.0 / 57.3;
          this.ssssWidth = 0.01;
          this.boundingBox = 0.4;
          this.ssssScale = 3.0;
          this._v3SSSSStrength = new Vec3(0.48, 0.41, 0.28);
          this._v3SSSSFallOff = new Vec3(1.0, 0.37, 0.3);
          this._kernel = [];
          this._init();
        }
        _createClass(SSSSBlurData, [{
          key: "ssssStrength",
          get: function get() {
            return this._v3SSSSStrength;
          },
          set: function set(val) {
            this._v3SSSSStrength = val;
            this._updateSampleCount();
          }
        }, {
          key: "ssssFallOff",
          get: function get() {
            return this._v3SSSSFallOff;
          },
          set: function set(val) {
            this._v3SSSSFallOff = val;
            this._updateSampleCount();
          }
        }, {
          key: "kernel",
          get: function get() {
            return this._kernel;
          }
        }]);
        return SSSSBlurData;
      }();
      ssssBlurData = null;
      ToneMappingInfo = /*#__PURE__*/function () {
        var _proto7 = ToneMappingInfo.prototype;
        _proto7._init = function _init() {
          this.toneMappingMaterial = new Material();
          this.toneMappingMaterial.name = 'builtin-tone-mapping-material';
          this.toneMappingMaterial.initialize({
            effectName: 'pipeline/tone-mapping'
          });
          for (var i = 0; i < this.toneMappingMaterial.passes.length; ++i) {
            this.toneMappingMaterial.passes[i].tryCompile();
          }
        };
        function ToneMappingInfo() {
          this._init();
        }
        return ToneMappingInfo;
      }();
      toneMappingInfo = null;
      HBAOParams = /*#__PURE__*/function () {
        var _proto8 = HBAOParams.prototype;
        _proto8._init = function _init() {
          if (this.hbaoMaterial) return;
          this.hbaoMaterial = new Material();
          this.hbaoMaterial.name = 'builtin-hbao-material';
          this.hbaoMaterial.initialize({
            effectName: 'pipeline/post-process/hbao'
          });
          for (var i = 0; i < this.hbaoMaterial.passes.length; ++i) {
            this.hbaoMaterial.passes[i].tryCompile();
          }
          var width = 4;
          var height = 4;
          var pixelFormat = Texture2D.PixelFormat.RGBA8888;
          var arrayBuffer = new Uint8Array(width * height * 4);
          for (var _i11 = 0; _i11 < this._randomDirAndJitter.length; _i11++) {
            arrayBuffer[_i11] = this._randomDirAndJitter[_i11];
          }
          var image = new ImageAsset({
            width: width,
            height: height,
            _data: arrayBuffer,
            _compressed: false,
            format: pixelFormat
          });
          this.randomTexture = new Texture2D();
          this.randomTexture.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
          this.randomTexture.setMipFilter(Texture2D.Filter.NONE);
          this.randomTexture.setWrapMode(Texture2D.WrapMode.REPEAT, Texture2D.WrapMode.REPEAT, Texture2D.WrapMode.REPEAT);
          this.randomTexture.image = image;
          this.hbaoMaterial.setProperty('RandomTex', this.randomTexture, 0);
        };
        _proto8.update = function update() {
          // should be same value as shader
          var HALF_KERNEL_RADIUS = 4;
          var INV_LN2 = 1.44269504;
          var SQRT_LN2 = 0.8325546;
          var gR = this._radiusScale * this._sceneScale;
          var gR2 = gR * gR;
          var gNegInvR2 = -1.0 / gR2;
          var gMaxRadiusPixels = 0.1 * Math.min(this._depthTexFullResolution.x, this._depthTexFullResolution.y);
          this._radiusParam.set(gR, gR2, gNegInvR2, gMaxRadiusPixels);
          var vec2 = new Vec2(this._depthTexResolution.y / this._depthTexResolution.x, 1.0);
          var gFocalLen = new Vec2(vec2.x / Math.tan(this._cameraFov * 0.5), vec2.y / Math.tan(this._cameraFov * 0.5));
          var gTanAngleBias = Math.tan(toRadian(this._angleBiasDegree));
          var gStrength = this._aoStrength;
          this._miscParam.set(gFocalLen.x, gFocalLen.y, gTanAngleBias, gStrength);
          var gUVToViewA = new Vec2(2.0 / gFocalLen.x, -2.0 / gFocalLen.y);
          var gUVToViewB = new Vec2(-1.0 / gFocalLen.x, 1.0 / gFocalLen.y);
          this._uvDepthToEyePosParams.set(gUVToViewA.x, gUVToViewA.y, gUVToViewB.x, gUVToViewB.y);
          var BlurSigma = (HALF_KERNEL_RADIUS + 1.0) * 0.5;
          var gBlurFallOff = INV_LN2 / (2.0 * BlurSigma * BlurSigma);
          var gBlurDepthThreshold = 2.0 * SQRT_LN2 * (this._sceneScale / this._blurSharpness);
          this._blurParam.set(gBlurFallOff, gBlurDepthThreshold, this._blurSharpness / 8.0, this._aoSaturation);
        };
        function HBAOParams() {
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
        _createClass(HBAOParams, [{
          key: "uvDepthToEyePosParams",
          get: function get() {
            return this._uvDepthToEyePosParams;
          }
        }, {
          key: "radiusParam",
          get: function get() {
            return this._radiusParam;
          }
        }, {
          key: "miscParam",
          get: function get() {
            return this._miscParam;
          }
        }, {
          key: "blurParam",
          get: function get() {
            return this._blurParam;
          }
        }, {
          key: "depthTexFullResolution",
          set: function set(val) {
            this._depthTexFullResolution.set(val);
          }
        }, {
          key: "depthTexResolution",
          set: function set(val) {
            this._depthTexResolution.set(val);
          }
        }, {
          key: "sceneScale",
          set: function set(val) {
            this._sceneScale = val;
          }
        }, {
          key: "cameraFov",
          set: function set(val) {
            this._cameraFov = val;
          }
        }, {
          key: "radiusScale",
          set: function set(val) {
            this._radiusScale = val;
          }
        }, {
          key: "angleBiasDegree",
          set: function set(val) {
            this._angleBiasDegree = val;
          }
        }, {
          key: "aoStrength",
          set: function set(val) {
            this._aoStrength = val;
          }
        }, {
          key: "blurSharpness",
          set: function set(val) {
            this._blurSharpness = val;
          }
        }, {
          key: "aoSaturation",
          set: function set(val) {
            this._aoSaturation = val;
          }
        }]);
        return HBAOParams;
      }();
      _hbaoParams = null;
      vec2 = new Vec2();
      _export("MAX_LIGHTS_PER_CLUSTER", MAX_LIGHTS_PER_CLUSTER = 200);
      _export("CLUSTERS_X", CLUSTERS_X = 16);
      _export("CLUSTERS_Y", CLUSTERS_Y = 8);
      _export("CLUSTERS_Z", CLUSTERS_Z = 24);
      _export("CLUSTER_COUNT", CLUSTER_COUNT = CLUSTERS_X * CLUSTERS_Y * CLUSTERS_Z);
      ClusterLightData = /*#__PURE__*/function () {
        var _proto9 = ClusterLightData.prototype;
        _proto9._initMaterial = function _initMaterial(id, effect) {
          var mat = new Material();
          mat.name = id;
          mat.initialize({
            effectName: effect
          });
          for (var i = 0; i < mat.passes.length; ++i) {
            mat.passes[i].tryCompile();
          }
          return mat;
        };
        _proto9._init = function _init() {
          this.clusterBuildCS = this._initMaterial('builtin-cluster-build-cs-material', 'pipeline/cluster-build');
          this.clusterLightCullingCS = this._initMaterial('builtin-cluster-culling-cs-material', 'pipeline/cluster-culling');
          this.dispatchX = CLUSTERS_X / this.clusters_x_threads;
          this.dispatchY = CLUSTERS_Y / this.clusters_y_threads;
          this.dispatchZ = CLUSTERS_Z / this.clusters_z_threads;
        };
        function ClusterLightData() {
          this.clusters_x_threads = 16;
          this.clusters_y_threads = 8;
          this.clusters_z_threads = 1;
          this.dispatchX = 1;
          this.dispatchY = 1;
          this.dispatchZ = 1;
          this._init();
        }
        return ClusterLightData;
      }();
      _clusterLightData = null;
      kLightMeterScale = 10000;
    }
  };
});