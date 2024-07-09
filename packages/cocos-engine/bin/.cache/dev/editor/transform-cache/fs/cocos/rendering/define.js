System.register("q-bundled:///fs/cocos/rendering/define.js", ["../scene-graph/layers.js", "../core/index.js", "../gfx/index.js"], function (_export, _context) {
  "use strict";

  var Layers, cclegacy, BindingMappingInfo, DescriptorType, Type, ShaderStageFlagBit, DescriptorSetLayoutBinding, Uniform, UniformBlock, UniformSamplerTexture, UniformStorageImage, FormatFeatureBit, Format, API, UBOGlobal, UBOCamera, UBOShadow, UBOCSM, UBOLocal, UBOWorldBound, UBOLocalBatched, UBOForwardLight, UBODeferredLight, UBOSkinningTexture, UBOSkinningAnimation, UBOSkinning, UBOMorph, UBOUILocal, UBOSH, _class, _class2, _class3, _class4, _class5, _class6, _class7, _class8, _class10, _class11, _class12, _class13, _class14, _class15, PIPELINE_FLOW_MAIN, PIPELINE_FLOW_FORWARD, PIPELINE_FLOW_SHADOW, PIPELINE_FLOW_SMAA, PIPELINE_FLOW_TONEMAP, RenderPassStage, RenderPriority, globalDescriptorSetLayout, localDescriptorSetLayout, PipelineGlobalBindings, GLOBAL_UBO_COUNT, GLOBAL_SAMPLER_COUNT, ModelLocalBindings, LOCAL_UBO_COUNT, LOCAL_SAMPLER_COUNT, LOCAL_STORAGE_IMAGE_COUNT, SetIndex, bindingMappingInfo, UNIFORM_SHADOWMAP_NAME, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SHADOWMAP_DESCRIPTOR, UNIFORM_SHADOWMAP_LAYOUT, UNIFORM_ENVIRONMENT_NAME, UNIFORM_ENVIRONMENT_BINDING, UNIFORM_ENVIRONMENT_DESCRIPTOR, UNIFORM_ENVIRONMENT_LAYOUT, UNIFORM_DIFFUSEMAP_NAME, UNIFORM_DIFFUSEMAP_BINDING, UNIFORM_DIFFUSEMAP_DESCRIPTOR, UNIFORM_DIFFUSEMAP_LAYOUT, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_NAME, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_DESCRIPTOR, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_LAYOUT, INST_MAT_WORLD, INST_SH, JOINT_UNIFORM_CAPACITY, INST_JOINT_ANIM_INFO, UNIFORM_JOINT_TEXTURE_NAME, UNIFORM_JOINT_TEXTURE_BINDING, UNIFORM_JOINT_TEXTURE_DESCRIPTOR, UNIFORM_JOINT_TEXTURE_LAYOUT, UNIFORM_REALTIME_JOINT_TEXTURE_NAME, UNIFORM_REALTIME_JOINT_TEXTURE_BINDING, UNIFORM_REALTIME_JOINT_TEXTURE_DESCRIPTOR, UNIFORM_REALTIME_JOINT_TEXTURE_LAYOUT, UNIFORM_POSITION_MORPH_TEXTURE_NAME, UNIFORM_POSITION_MORPH_TEXTURE_BINDING, UNIFORM_POSITION_MORPH_TEXTURE_DESCRIPTOR, UNIFORM_POSITION_MORPH_TEXTURE_LAYOUT, UNIFORM_NORMAL_MORPH_TEXTURE_NAME, UNIFORM_NORMAL_MORPH_TEXTURE_BINDING, UNIFORM_NORMAL_MORPH_TEXTURE_DESCRIPTOR, UNIFORM_NORMAL_MORPH_TEXTURE_LAYOUT, UNIFORM_TANGENT_MORPH_TEXTURE_NAME, UNIFORM_TANGENT_MORPH_TEXTURE_BINDING, UNIFORM_TANGENT_MORPH_TEXTURE_DESCRIPTOR, UNIFORM_TANGENT_MORPH_TEXTURE_LAYOUT, UNIFORM_LIGHTMAP_TEXTURE_NAME, UNIFORM_LIGHTMAP_TEXTURE_BINDING, UNIFORM_LIGHTMAP_TEXTURE_DESCRIPTOR, UNIFORM_LIGHTMAP_TEXTURE_LAYOUT, UNIFORM_SPRITE_TEXTURE_NAME, UNIFORM_SPRITE_TEXTURE_BINDING, UNIFORM_SPRITE_TEXTURE_DESCRIPTOR, UNIFORM_SPRITE_TEXTURE_LAYOUT, UNIFORM_REFLECTION_TEXTURE_NAME, UNIFORM_REFLECTION_TEXTURE_BINDING, UNIFORM_REFLECTION_TEXTURE_DESCRIPTOR, UNIFORM_REFLECTION_TEXTURE_LAYOUT, UNIFORM_REFLECTION_STORAGE_NAME, UNIFORM_REFLECTION_STORAGE_BINDING, UNIFORM_REFLECTION_STORAGE_DESCRIPTOR, UNIFORM_REFLECTION_STORAGE_LAYOUT, UNIFORM_REFLECTION_PROBE_CUBEMAP_NAME, UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_CUBEMAP_DESCRIPTOR, UNIFORM_REFLECTION_PROBE_CUBEMAP_LAYOUT, UNIFORM_REFLECTION_PROBE_TEXTURE_NAME, UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING, UNIFORM_REFLECTION_PROBE_TEXTURE_DESCRIPTOR, UNIFORM_REFLECTION_PROBE_TEXTURE_LAYOUT, UNIFORM_REFLECTION_PROBE_DATA_MAP_NAME, UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING, UNIFORM_REFLECTION_PROBE_DATA_MAP_DESCRIPTOR, UNIFORM_REFLECTION_PROBE_DATA_MAP_LAYOUT, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_NAME, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_DESCRIPTOR, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_LAYOUT, CAMERA_DEFAULT_MASK, CAMERA_EDITOR_MASK, MODEL_ALWAYS_MASK;
  /**
   * @internal This method only used to init localDescriptorSetLayout.layouts[UBOSkinning.NAME]
  */
  function localDescriptorSetLayout_ResizeMaxJoints(maxCount) {
    UBOSkinning.initLayout(maxCount);
    localDescriptorSetLayout.layouts[UBOSkinning.NAME] = UBOSkinning.LAYOUT;
    localDescriptorSetLayout.bindings[UBOSkinning.BINDING] = UBOSkinning.DESCRIPTOR;
  }

  /**
   * @en The uniform buffer object for morph setting
   * @zh 形变配置的 UBO
   */

  /**
   * @en Does the device support single-channeled half float texture? (for both color attachment and sampling)
   * @zh 当前设备是否支持单通道半浮点贴图？（颜色输出和采样）
   */
  function supportsR16HalfFloatTexture(device) {
    return (device.getFormatFeatures(Format.R16F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE);
  }

  /**
   * @en Does the device support single-channeled float texture? (for both color attachment and sampling)
   * @zh 当前设备是否支持单通道浮点贴图？（颜色输出和采样）
   */
  function supportsR32FloatTexture(device) {
    return (device.getFormatFeatures(Format.R32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) && !(device.gfxAPI === API.WEBGL); // wegl 1  Single-channel float type is not supported under webgl1, so it is excluded
  }

  /**
   * @en Does the device support 4-channeled float texture? (for both color attachment and sampling)
   * @zh 当前设备是否支持4通道浮点贴图？（颜色输出和采样）
   */
  function supportsRGBA16HalfFloatTexture(device) {
    return (device.getFormatFeatures(Format.RGBA16F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) && !(device.gfxAPI === API.WEBGL); // wegl 1  Single-channel float type is not supported under webgl1, so it is excluded
  }

  /**
   * @en Does the device support 4-channeled float texture? (for both color attachment and sampling)
   * @zh 当前设备是否支持4通道浮点贴图？（颜色输出和采样）
   */
  function supportsRGBA32FloatTexture(device) {
    return (device.getFormatFeatures(Format.RGBA32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) && !(device.gfxAPI === API.WEBGL); // wegl 1  Single-channel float type is not supported under webgl1, so it is excluded
  }

  function isEnableEffect() {
    return !!(cclegacy.rendering && cclegacy.rendering.enableEffectImport);
  }

  /* eslint-enable max-len */
  _export({
    UBOGlobal: void 0,
    UBOCamera: void 0,
    UBOShadow: void 0,
    UBOCSM: void 0,
    UBOLocal: void 0,
    UBOWorldBound: void 0,
    UBOLocalBatched: void 0,
    UBOForwardLight: void 0,
    UBODeferredLight: void 0,
    UBOSkinningTexture: void 0,
    UBOSkinningAnimation: void 0,
    UBOSkinning: void 0,
    localDescriptorSetLayout_ResizeMaxJoints: localDescriptorSetLayout_ResizeMaxJoints,
    UBOMorph: void 0,
    UBOUILocal: void 0,
    UBOSH: void 0,
    supportsR16HalfFloatTexture: supportsR16HalfFloatTexture,
    supportsR32FloatTexture: supportsR32FloatTexture,
    supportsRGBA16HalfFloatTexture: supportsRGBA16HalfFloatTexture,
    supportsRGBA32FloatTexture: supportsRGBA32FloatTexture,
    isEnableEffect: isEnableEffect,
    RenderPassStage: void 0,
    RenderPriority: void 0,
    PipelineGlobalBindings: void 0,
    ModelLocalBindings: void 0,
    SetIndex: void 0
  });
  return {
    setters: [function (_sceneGraphLayersJs) {
      Layers = _sceneGraphLayersJs.Layers;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_gfxIndexJs) {
      BindingMappingInfo = _gfxIndexJs.BindingMappingInfo;
      DescriptorType = _gfxIndexJs.DescriptorType;
      Type = _gfxIndexJs.Type;
      ShaderStageFlagBit = _gfxIndexJs.ShaderStageFlagBit;
      DescriptorSetLayoutBinding = _gfxIndexJs.DescriptorSetLayoutBinding;
      Uniform = _gfxIndexJs.Uniform;
      UniformBlock = _gfxIndexJs.UniformBlock;
      UniformSamplerTexture = _gfxIndexJs.UniformSamplerTexture;
      UniformStorageImage = _gfxIndexJs.UniformStorageImage;
      FormatFeatureBit = _gfxIndexJs.FormatFeatureBit;
      Format = _gfxIndexJs.Format;
      API = _gfxIndexJs.API;
    }],
    execute: function () {
      _export("PIPELINE_FLOW_MAIN", PIPELINE_FLOW_MAIN = 'MainFlow');
      _export("PIPELINE_FLOW_FORWARD", PIPELINE_FLOW_FORWARD = 'ForwardFlow');
      _export("PIPELINE_FLOW_SHADOW", PIPELINE_FLOW_SHADOW = 'ShadowFlow');
      _export("PIPELINE_FLOW_SMAA", PIPELINE_FLOW_SMAA = 'SMAAFlow');
      _export("PIPELINE_FLOW_TONEMAP", PIPELINE_FLOW_TONEMAP = 'ToneMapFlow');
      /**
       * @en The predefined render pass stage ids
       * @zh 预设的渲染阶段。
       */
      (function (RenderPassStage) {
        RenderPassStage[RenderPassStage["DEFAULT"] = 100] = "DEFAULT";
        RenderPassStage[RenderPassStage["UI"] = 200] = "UI";
      })(RenderPassStage || _export("RenderPassStage", RenderPassStage = {}));
      cclegacy.RenderPassStage = RenderPassStage;

      /**
       * @en The predefined render priorities
       * @zh 预设的渲染优先级。
       */
      (function (RenderPriority) {
        RenderPriority[RenderPriority["MIN"] = 0] = "MIN";
        RenderPriority[RenderPriority["MAX"] = 255] = "MAX";
        RenderPriority[RenderPriority["DEFAULT"] = 128] = "DEFAULT";
      })(RenderPriority || _export("RenderPriority", RenderPriority = {}));
      /**
       * @en Render object interface
       * @zh 渲染对象接口。
       */
      /*
       * @en The render pass interface
       * @zh 渲染过程接口。
       */
      /**
       * @en Render batch interface
       * @zh 渲染批次接口。
       */
      /**
       * @en Render queue descriptor
       * @zh 渲染队列描述。
       */
      _export("globalDescriptorSetLayout", globalDescriptorSetLayout = {
        bindings: [],
        layouts: {}
      });
      _export("localDescriptorSetLayout", localDescriptorSetLayout = {
        bindings: [],
        layouts: {}
      });
      /**
       * @en The uniform bindings
       * @zh Uniform 参数绑定。
       */
      (function (PipelineGlobalBindings) {
        PipelineGlobalBindings[PipelineGlobalBindings["UBO_GLOBAL"] = 0] = "UBO_GLOBAL";
        PipelineGlobalBindings[PipelineGlobalBindings["UBO_CAMERA"] = 1] = "UBO_CAMERA";
        PipelineGlobalBindings[PipelineGlobalBindings["UBO_SHADOW"] = 2] = "UBO_SHADOW";
        PipelineGlobalBindings[PipelineGlobalBindings["UBO_CSM"] = 3] = "UBO_CSM";
        PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_SHADOWMAP"] = 4] = "SAMPLER_SHADOWMAP";
        PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_ENVIRONMENT"] = 5] = "SAMPLER_ENVIRONMENT";
        PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_SPOT_SHADOW_MAP"] = 6] = "SAMPLER_SPOT_SHADOW_MAP";
        PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_DIFFUSEMAP"] = 7] = "SAMPLER_DIFFUSEMAP";
        PipelineGlobalBindings[PipelineGlobalBindings["COUNT"] = 8] = "COUNT";
      })(PipelineGlobalBindings || _export("PipelineGlobalBindings", PipelineGlobalBindings = {}));
      GLOBAL_UBO_COUNT = PipelineGlobalBindings.SAMPLER_SHADOWMAP;
      GLOBAL_SAMPLER_COUNT = PipelineGlobalBindings.COUNT - GLOBAL_UBO_COUNT;
      (function (ModelLocalBindings) {
        ModelLocalBindings[ModelLocalBindings["UBO_LOCAL"] = 0] = "UBO_LOCAL";
        ModelLocalBindings[ModelLocalBindings["UBO_FORWARD_LIGHTS"] = 1] = "UBO_FORWARD_LIGHTS";
        ModelLocalBindings[ModelLocalBindings["UBO_SKINNING_ANIMATION"] = 2] = "UBO_SKINNING_ANIMATION";
        ModelLocalBindings[ModelLocalBindings["UBO_SKINNING_TEXTURE"] = 3] = "UBO_SKINNING_TEXTURE";
        ModelLocalBindings[ModelLocalBindings["UBO_MORPH"] = 4] = "UBO_MORPH";
        ModelLocalBindings[ModelLocalBindings["UBO_UI_LOCAL"] = 5] = "UBO_UI_LOCAL";
        ModelLocalBindings[ModelLocalBindings["UBO_SH"] = 6] = "UBO_SH";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_JOINTS"] = 7] = "SAMPLER_JOINTS";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_POSITION"] = 8] = "SAMPLER_MORPH_POSITION";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_NORMAL"] = 9] = "SAMPLER_MORPH_NORMAL";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_TANGENT"] = 10] = "SAMPLER_MORPH_TANGENT";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_LIGHTMAP"] = 11] = "SAMPLER_LIGHTMAP";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_SPRITE"] = 12] = "SAMPLER_SPRITE";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION"] = 13] = "SAMPLER_REFLECTION";
        ModelLocalBindings[ModelLocalBindings["STORAGE_REFLECTION"] = 14] = "STORAGE_REFLECTION";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION_PROBE_CUBE"] = 15] = "SAMPLER_REFLECTION_PROBE_CUBE";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION_PROBE_PLANAR"] = 16] = "SAMPLER_REFLECTION_PROBE_PLANAR";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION_PROBE_DATA_MAP"] = 17] = "SAMPLER_REFLECTION_PROBE_DATA_MAP";
        ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION_PROBE_BLEND_CUBE"] = 18] = "SAMPLER_REFLECTION_PROBE_BLEND_CUBE";
        ModelLocalBindings[ModelLocalBindings["COUNT"] = 19] = "COUNT";
      })(ModelLocalBindings || _export("ModelLocalBindings", ModelLocalBindings = {}));
      LOCAL_UBO_COUNT = ModelLocalBindings.SAMPLER_JOINTS;
      LOCAL_SAMPLER_COUNT = ModelLocalBindings.STORAGE_REFLECTION - LOCAL_UBO_COUNT;
      LOCAL_STORAGE_IMAGE_COUNT = ModelLocalBindings.COUNT - LOCAL_UBO_COUNT - LOCAL_SAMPLER_COUNT;
      (function (SetIndex) {
        SetIndex[SetIndex["GLOBAL"] = 0] = "GLOBAL";
        SetIndex[SetIndex["MATERIAL"] = 1] = "MATERIAL";
        SetIndex[SetIndex["LOCAL"] = 2] = "LOCAL";
        SetIndex[SetIndex["COUNT"] = 3] = "COUNT";
      })(SetIndex || _export("SetIndex", SetIndex = {}));
      // parameters passed to GFX Device
      _export("bindingMappingInfo", bindingMappingInfo = new BindingMappingInfo([GLOBAL_UBO_COUNT, 0, LOCAL_UBO_COUNT, 0],
      // Uniform Buffer Counts
      [GLOBAL_SAMPLER_COUNT, 0, LOCAL_SAMPLER_COUNT, 0],
      // Combined Sampler Texture Counts
      [0, 0, 0, 0],
      // Sampler Counts
      [0, 0, 0, 0],
      // Texture Counts
      [0, 0, 0, 0],
      // Storage Buffer Counts
      [0, 0, LOCAL_STORAGE_IMAGE_COUNT, 0],
      // Storage Image Counts
      [0, 0, 0, 0],
      // Subpass Input Counts
      [0, 2, 1, 3]) // Set Order Indices
      );
      /**
       * @en The global uniform buffer object
       * @zh 全局 UBO。
       */
      _export("UBOGlobal", UBOGlobal = class UBOGlobal {});
      _class = UBOGlobal;
      UBOGlobal.TIME_OFFSET = 0;
      UBOGlobal.SCREEN_SIZE_OFFSET = _class.TIME_OFFSET + 4;
      UBOGlobal.NATIVE_SIZE_OFFSET = _class.SCREEN_SIZE_OFFSET + 4;
      UBOGlobal.PROBE_INFO_OFFSET = _class.NATIVE_SIZE_OFFSET + 4;
      UBOGlobal.DEBUG_VIEW_MODE_OFFSET = _class.PROBE_INFO_OFFSET + 4;
      UBOGlobal.COUNT = _class.DEBUG_VIEW_MODE_OFFSET + 4;
      UBOGlobal.SIZE = _class.COUNT * 4;
      UBOGlobal.NAME = 'CCGlobal';
      UBOGlobal.BINDING = PipelineGlobalBindings.UBO_GLOBAL;
      UBOGlobal.DESCRIPTOR = new DescriptorSetLayoutBinding(_class.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
      UBOGlobal.LAYOUT = new UniformBlock(SetIndex.GLOBAL, _class.BINDING, _class.NAME, [new Uniform('cc_time', Type.FLOAT4, 1), new Uniform('cc_screenSize', Type.FLOAT4, 1), new Uniform('cc_nativeSize', Type.FLOAT4, 1), new Uniform('cc_probeInfo', Type.FLOAT4, 1), new Uniform('cc_debug_view_mode', Type.FLOAT4, 1)], 1);
      globalDescriptorSetLayout.layouts[UBOGlobal.NAME] = UBOGlobal.LAYOUT;
      globalDescriptorSetLayout.bindings[UBOGlobal.BINDING] = UBOGlobal.DESCRIPTOR;

      /**
       * @en The global camera uniform buffer object
       * @zh 全局相机 UBO。
       */
      _export("UBOCamera", UBOCamera = class UBOCamera {});
      _class2 = UBOCamera;
      UBOCamera.MAT_VIEW_OFFSET = 0;
      UBOCamera.MAT_VIEW_INV_OFFSET = _class2.MAT_VIEW_OFFSET + 16;
      UBOCamera.MAT_PROJ_OFFSET = _class2.MAT_VIEW_INV_OFFSET + 16;
      UBOCamera.MAT_PROJ_INV_OFFSET = _class2.MAT_PROJ_OFFSET + 16;
      UBOCamera.MAT_VIEW_PROJ_OFFSET = _class2.MAT_PROJ_INV_OFFSET + 16;
      UBOCamera.MAT_VIEW_PROJ_INV_OFFSET = _class2.MAT_VIEW_PROJ_OFFSET + 16;
      UBOCamera.CAMERA_POS_OFFSET = _class2.MAT_VIEW_PROJ_INV_OFFSET + 16;
      UBOCamera.SURFACE_TRANSFORM_OFFSET = _class2.CAMERA_POS_OFFSET + 4;
      UBOCamera.SCREEN_SCALE_OFFSET = _class2.SURFACE_TRANSFORM_OFFSET + 4;
      UBOCamera.EXPOSURE_OFFSET = _class2.SCREEN_SCALE_OFFSET + 4;
      UBOCamera.MAIN_LIT_DIR_OFFSET = _class2.EXPOSURE_OFFSET + 4;
      UBOCamera.MAIN_LIT_COLOR_OFFSET = _class2.MAIN_LIT_DIR_OFFSET + 4;
      UBOCamera.AMBIENT_SKY_OFFSET = _class2.MAIN_LIT_COLOR_OFFSET + 4;
      UBOCamera.AMBIENT_GROUND_OFFSET = _class2.AMBIENT_SKY_OFFSET + 4;
      UBOCamera.GLOBAL_FOG_COLOR_OFFSET = _class2.AMBIENT_GROUND_OFFSET + 4;
      UBOCamera.GLOBAL_FOG_BASE_OFFSET = _class2.GLOBAL_FOG_COLOR_OFFSET + 4;
      UBOCamera.GLOBAL_FOG_ADD_OFFSET = _class2.GLOBAL_FOG_BASE_OFFSET + 4;
      UBOCamera.NEAR_FAR_OFFSET = _class2.GLOBAL_FOG_ADD_OFFSET + 4;
      UBOCamera.VIEW_PORT_OFFSET = _class2.NEAR_FAR_OFFSET + 4;
      UBOCamera.COUNT = _class2.VIEW_PORT_OFFSET + 4;
      UBOCamera.SIZE = _class2.COUNT * 4;
      UBOCamera.NAME = 'CCCamera';
      UBOCamera.BINDING = PipelineGlobalBindings.UBO_CAMERA;
      UBOCamera.DESCRIPTOR = new DescriptorSetLayoutBinding(_class2.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
      UBOCamera.LAYOUT = new UniformBlock(SetIndex.GLOBAL, _class2.BINDING, _class2.NAME, [new Uniform('cc_matView', Type.MAT4, 1), new Uniform('cc_matViewInv', Type.MAT4, 1), new Uniform('cc_matProj', Type.MAT4, 1), new Uniform('cc_matProjInv', Type.MAT4, 1), new Uniform('cc_matViewProj', Type.MAT4, 1), new Uniform('cc_matViewProjInv', Type.MAT4, 1), new Uniform('cc_cameraPos', Type.FLOAT4, 1), new Uniform('cc_surfaceTransform', Type.FLOAT4, 1), new Uniform('cc_screenScale', Type.FLOAT4, 1), new Uniform('cc_exposure', Type.FLOAT4, 1), new Uniform('cc_mainLitDir', Type.FLOAT4, 1), new Uniform('cc_mainLitColor', Type.FLOAT4, 1), new Uniform('cc_ambientSky', Type.FLOAT4, 1), new Uniform('cc_ambientGround', Type.FLOAT4, 1), new Uniform('cc_fogColor', Type.FLOAT4, 1), new Uniform('cc_fogBase', Type.FLOAT4, 1), new Uniform('cc_fogAdd', Type.FLOAT4, 1), new Uniform('cc_nearFar', Type.FLOAT4, 1), new Uniform('cc_viewPort', Type.FLOAT4, 1)], 1);
      globalDescriptorSetLayout.layouts[UBOCamera.NAME] = UBOCamera.LAYOUT;
      globalDescriptorSetLayout.bindings[UBOCamera.BINDING] = UBOCamera.DESCRIPTOR;

      /**
       * @en The uniform buffer object for 'cast shadow(fixed || csm)' && 'dir fixed area shadow' && 'spot shadow' && 'sphere shadow' && 'planar shadow'
       * @zh 这个 UBO 仅仅只给 'cast shadow(fixed || csm)' && 'dir fixed area shadow' && 'spot shadow' && 'sphere shadow' && 'planar shadow' 使用
       */
      _export("UBOShadow", UBOShadow = class UBOShadow {});
      _class3 = UBOShadow;
      UBOShadow.MAT_LIGHT_VIEW_OFFSET = 0;
      UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET = _class3.MAT_LIGHT_VIEW_OFFSET + 16;
      UBOShadow.SHADOW_INV_PROJ_DEPTH_INFO_OFFSET = _class3.MAT_LIGHT_VIEW_PROJ_OFFSET + 16;
      UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET = _class3.SHADOW_INV_PROJ_DEPTH_INFO_OFFSET + 4;
      UBOShadow.SHADOW_PROJ_INFO_OFFSET = _class3.SHADOW_PROJ_DEPTH_INFO_OFFSET + 4;
      UBOShadow.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET = _class3.SHADOW_PROJ_INFO_OFFSET + 4;
      UBOShadow.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET = _class3.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET + 4;
      UBOShadow.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET = _class3.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET + 4;
      UBOShadow.SHADOW_COLOR_OFFSET = _class3.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET + 4;
      UBOShadow.PLANAR_NORMAL_DISTANCE_INFO_OFFSET = _class3.SHADOW_COLOR_OFFSET + 4;
      UBOShadow.COUNT = _class3.PLANAR_NORMAL_DISTANCE_INFO_OFFSET + 4;
      UBOShadow.SIZE = _class3.COUNT * 4;
      UBOShadow.NAME = 'CCShadow';
      UBOShadow.BINDING = PipelineGlobalBindings.UBO_SHADOW;
      UBOShadow.DESCRIPTOR = new DescriptorSetLayoutBinding(_class3.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
      UBOShadow.LAYOUT = new UniformBlock(SetIndex.GLOBAL, _class3.BINDING, _class3.NAME, [new Uniform('cc_matLightView', Type.MAT4, 1), new Uniform('cc_matLightViewProj', Type.MAT4, 1), new Uniform('cc_shadowInvProjDepthInfo', Type.FLOAT4, 1), new Uniform('cc_shadowProjDepthInfo', Type.FLOAT4, 1), new Uniform('cc_shadowProjInfo', Type.FLOAT4, 1), new Uniform('cc_shadowNFLSInfo', Type.FLOAT4, 1), new Uniform('cc_shadowWHPBInfo', Type.FLOAT4, 1), new Uniform('cc_shadowLPNNInfo', Type.FLOAT4, 1), new Uniform('cc_shadowColor', Type.FLOAT4, 1), new Uniform('cc_planarNDInfo', Type.FLOAT4, 1)], 1);
      globalDescriptorSetLayout.layouts[UBOShadow.NAME] = UBOShadow.LAYOUT;
      globalDescriptorSetLayout.bindings[UBOShadow.BINDING] = UBOShadow.DESCRIPTOR;

      /**
       * @en The uniform buffer object only for dir csm shadow(level: 1 ~ 4)
       * @zh 级联阴影使用的UBO
       */
      _export("UBOCSM", UBOCSM = class UBOCSM {});
      _class4 = UBOCSM;
      UBOCSM.CSM_LEVEL_COUNT = 4;
      UBOCSM.CSM_VIEW_DIR_0_OFFSET = 0;
      UBOCSM.CSM_VIEW_DIR_1_OFFSET = _class4.CSM_VIEW_DIR_0_OFFSET + 4 * _class4.CSM_LEVEL_COUNT;
      UBOCSM.CSM_VIEW_DIR_2_OFFSET = _class4.CSM_VIEW_DIR_1_OFFSET + 4 * _class4.CSM_LEVEL_COUNT;
      UBOCSM.CSM_ATLAS_OFFSET = _class4.CSM_VIEW_DIR_2_OFFSET + 4 * _class4.CSM_LEVEL_COUNT;
      UBOCSM.MAT_CSM_VIEW_PROJ_OFFSET = _class4.CSM_ATLAS_OFFSET + 4 * _class4.CSM_LEVEL_COUNT;
      UBOCSM.CSM_PROJ_DEPTH_INFO_OFFSET = _class4.MAT_CSM_VIEW_PROJ_OFFSET + 16 * _class4.CSM_LEVEL_COUNT;
      UBOCSM.CSM_PROJ_INFO_OFFSET = _class4.CSM_PROJ_DEPTH_INFO_OFFSET + 4 * _class4.CSM_LEVEL_COUNT;
      UBOCSM.CSM_SPLITS_INFO_OFFSET = _class4.CSM_PROJ_INFO_OFFSET + 4 * _class4.CSM_LEVEL_COUNT;
      UBOCSM.COUNT = _class4.CSM_SPLITS_INFO_OFFSET + 4;
      UBOCSM.SIZE = _class4.COUNT * 4;
      UBOCSM.NAME = 'CCCSM';
      UBOCSM.BINDING = PipelineGlobalBindings.UBO_CSM;
      UBOCSM.DESCRIPTOR = new DescriptorSetLayoutBinding(_class4.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.FRAGMENT);
      UBOCSM.LAYOUT = new UniformBlock(SetIndex.GLOBAL, _class4.BINDING, _class4.NAME, [new Uniform('cc_csmViewDir0', Type.FLOAT4, _class4.CSM_LEVEL_COUNT), new Uniform('cc_csmViewDir1', Type.FLOAT4, _class4.CSM_LEVEL_COUNT), new Uniform('cc_csmViewDir2', Type.FLOAT4, _class4.CSM_LEVEL_COUNT), new Uniform('cc_csmAtlas', Type.FLOAT4, _class4.CSM_LEVEL_COUNT), new Uniform('cc_matCSMViewProj', Type.MAT4, _class4.CSM_LEVEL_COUNT), new Uniform('cc_csmProjDepthInfo', Type.FLOAT4, _class4.CSM_LEVEL_COUNT), new Uniform('cc_csmProjInfo', Type.FLOAT4, _class4.CSM_LEVEL_COUNT), new Uniform('cc_csmSplitsInfo', Type.FLOAT4, 1)], 1);
      globalDescriptorSetLayout.layouts[UBOCSM.NAME] = UBOCSM.LAYOUT;
      globalDescriptorSetLayout.bindings[UBOCSM.BINDING] = UBOCSM.DESCRIPTOR;

      /* eslint-disable max-len */

      /**
       * @en The sampler for Main light shadow map
       * @zh 主光源阴影纹理采样器
       */
      UNIFORM_SHADOWMAP_NAME = 'cc_shadowMap';
      _export("UNIFORM_SHADOWMAP_BINDING", UNIFORM_SHADOWMAP_BINDING = PipelineGlobalBindings.SAMPLER_SHADOWMAP);
      UNIFORM_SHADOWMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SHADOWMAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_SHADOWMAP_LAYOUT = new UniformSamplerTexture(SetIndex.GLOBAL, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SHADOWMAP_NAME, Type.SAMPLER2D, 1);
      globalDescriptorSetLayout.layouts[UNIFORM_SHADOWMAP_NAME] = UNIFORM_SHADOWMAP_LAYOUT;
      globalDescriptorSetLayout.bindings[UNIFORM_SHADOWMAP_BINDING] = UNIFORM_SHADOWMAP_DESCRIPTOR;
      UNIFORM_ENVIRONMENT_NAME = 'cc_environment';
      _export("UNIFORM_ENVIRONMENT_BINDING", UNIFORM_ENVIRONMENT_BINDING = PipelineGlobalBindings.SAMPLER_ENVIRONMENT);
      UNIFORM_ENVIRONMENT_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_ENVIRONMENT_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_ENVIRONMENT_LAYOUT = new UniformSamplerTexture(SetIndex.GLOBAL, UNIFORM_ENVIRONMENT_BINDING, UNIFORM_ENVIRONMENT_NAME, Type.SAMPLER_CUBE, 1);
      globalDescriptorSetLayout.layouts[UNIFORM_ENVIRONMENT_NAME] = UNIFORM_ENVIRONMENT_LAYOUT;
      globalDescriptorSetLayout.bindings[UNIFORM_ENVIRONMENT_BINDING] = UNIFORM_ENVIRONMENT_DESCRIPTOR;
      UNIFORM_DIFFUSEMAP_NAME = 'cc_diffuseMap';
      _export("UNIFORM_DIFFUSEMAP_BINDING", UNIFORM_DIFFUSEMAP_BINDING = PipelineGlobalBindings.SAMPLER_DIFFUSEMAP);
      UNIFORM_DIFFUSEMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_DIFFUSEMAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_DIFFUSEMAP_LAYOUT = new UniformSamplerTexture(SetIndex.GLOBAL, UNIFORM_DIFFUSEMAP_BINDING, UNIFORM_DIFFUSEMAP_NAME, Type.SAMPLER_CUBE, 1);
      globalDescriptorSetLayout.layouts[UNIFORM_DIFFUSEMAP_NAME] = UNIFORM_DIFFUSEMAP_LAYOUT;
      globalDescriptorSetLayout.bindings[UNIFORM_DIFFUSEMAP_BINDING] = UNIFORM_DIFFUSEMAP_DESCRIPTOR;

      /**
       * @en The sampler for spot light shadow map
       * @zh 聚光灯阴影纹理采样器
       */
      UNIFORM_SPOT_SHADOW_MAP_TEXTURE_NAME = 'cc_spotShadowMap';
      _export("UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING", UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING = PipelineGlobalBindings.SAMPLER_SPOT_SHADOW_MAP);
      UNIFORM_SPOT_SHADOW_MAP_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_SPOT_SHADOW_MAP_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.GLOBAL, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_NAME, Type.SAMPLER2D, 1);
      globalDescriptorSetLayout.layouts[UNIFORM_SPOT_SHADOW_MAP_TEXTURE_NAME] = UNIFORM_SPOT_SHADOW_MAP_TEXTURE_LAYOUT;
      globalDescriptorSetLayout.bindings[UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING] = UNIFORM_SPOT_SHADOW_MAP_TEXTURE_DESCRIPTOR;

      /**
       * @en The local uniform buffer object
       * @zh 本地 UBO。
       */
      _export("UBOLocal", UBOLocal = class UBOLocal {});
      _class5 = UBOLocal;
      UBOLocal.MAT_WORLD_OFFSET = 0;
      UBOLocal.MAT_WORLD_IT_OFFSET = _class5.MAT_WORLD_OFFSET + 16;
      UBOLocal.LIGHTINGMAP_UVPARAM = _class5.MAT_WORLD_IT_OFFSET + 16;
      UBOLocal.LOCAL_SHADOW_BIAS = _class5.LIGHTINGMAP_UVPARAM + 4;
      UBOLocal.REFLECTION_PROBE_DATA1 = _class5.LOCAL_SHADOW_BIAS + 4;
      UBOLocal.REFLECTION_PROBE_DATA2 = _class5.REFLECTION_PROBE_DATA1 + 4;
      UBOLocal.REFLECTION_PROBE_BLEND_DATA1 = _class5.REFLECTION_PROBE_DATA2 + 4;
      UBOLocal.REFLECTION_PROBE_BLEND_DATA2 = _class5.REFLECTION_PROBE_BLEND_DATA1 + 4;
      UBOLocal.COUNT = _class5.REFLECTION_PROBE_BLEND_DATA2 + 4;
      UBOLocal.SIZE = _class5.COUNT * 4;
      UBOLocal.NAME = 'CCLocal';
      UBOLocal.BINDING = ModelLocalBindings.UBO_LOCAL;
      UBOLocal.DESCRIPTOR = new DescriptorSetLayoutBinding(_class5.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX | ShaderStageFlagBit.FRAGMENT | ShaderStageFlagBit.COMPUTE);
      UBOLocal.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class5.BINDING, _class5.NAME, [new Uniform('cc_matWorld', Type.MAT4, 1), new Uniform('cc_matWorldIT', Type.MAT4, 1), new Uniform('cc_lightingMapUVParam', Type.FLOAT4, 1), new Uniform('cc_localShadowBias', Type.FLOAT4, 1), new Uniform('cc_reflectionProbeData1', Type.FLOAT4, 1), new Uniform('cc_reflectionProbeData2', Type.FLOAT4, 1), new Uniform('cc_reflectionProbeBlendData1', Type.FLOAT4, 1), new Uniform('cc_reflectionProbeBlendData2', Type.FLOAT4, 1)], 1);
      localDescriptorSetLayout.layouts[UBOLocal.NAME] = UBOLocal.LAYOUT;
      localDescriptorSetLayout.bindings[UBOLocal.BINDING] = UBOLocal.DESCRIPTOR;

      /**
       * @en The world bound uniform buffer object
       * @zh 世界空间包围盒 UBO。
       */
      _export("UBOWorldBound", UBOWorldBound = class UBOWorldBound {});
      _class6 = UBOWorldBound;
      UBOWorldBound.WORLD_BOUND_CENTER = 0;
      UBOWorldBound.WORLD_BOUND_HALF_EXTENTS = _class6.WORLD_BOUND_CENTER + 4;
      UBOWorldBound.COUNT = _class6.WORLD_BOUND_HALF_EXTENTS + 4;
      UBOWorldBound.SIZE = _class6.COUNT * 4;
      UBOWorldBound.NAME = 'CCWorldBound';
      UBOWorldBound.BINDING = ModelLocalBindings.UBO_LOCAL;
      UBOWorldBound.DESCRIPTOR = new DescriptorSetLayoutBinding(_class6.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX | ShaderStageFlagBit.COMPUTE);
      UBOWorldBound.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class6.BINDING, _class6.NAME, [new Uniform('cc_worldBoundCenter', Type.FLOAT4, 1), new Uniform('cc_worldBoundHalfExtents', Type.FLOAT4, 1)], 1);
      localDescriptorSetLayout.layouts[UBOWorldBound.NAME] = UBOWorldBound.LAYOUT;
      localDescriptorSetLayout.bindings[UBOWorldBound.BINDING] = UBOWorldBound.DESCRIPTOR;
      _export("INST_MAT_WORLD", INST_MAT_WORLD = 'a_matWorld0');
      _export("INST_SH", INST_SH = 'a_sh_linear_const_r');
      _export("UBOLocalBatched", UBOLocalBatched = class UBOLocalBatched {});
      _class7 = UBOLocalBatched;
      UBOLocalBatched.BATCHING_COUNT = 10;
      UBOLocalBatched.MAT_WORLDS_OFFSET = 0;
      UBOLocalBatched.COUNT = 16 * _class7.BATCHING_COUNT;
      UBOLocalBatched.SIZE = _class7.COUNT * 4;
      UBOLocalBatched.NAME = 'CCLocalBatched';
      UBOLocalBatched.BINDING = ModelLocalBindings.UBO_LOCAL;
      UBOLocalBatched.DESCRIPTOR = new DescriptorSetLayoutBinding(_class7.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX | ShaderStageFlagBit.COMPUTE);
      UBOLocalBatched.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class7.BINDING, _class7.NAME, [new Uniform('cc_matWorlds', Type.MAT4, _class7.BATCHING_COUNT)], 1);
      localDescriptorSetLayout.layouts[UBOLocalBatched.NAME] = UBOLocalBatched.LAYOUT;
      localDescriptorSetLayout.bindings[UBOLocalBatched.BINDING] = UBOLocalBatched.DESCRIPTOR;

      /**
       * @en The uniform buffer object for forward lighting
       * @zh 前向灯光 UBO。
       */
      _export("UBOForwardLight", UBOForwardLight = class UBOForwardLight {});
      _class8 = UBOForwardLight;
      UBOForwardLight.LIGHTS_PER_PASS = 1;
      UBOForwardLight.LIGHT_POS_OFFSET = 0;
      UBOForwardLight.LIGHT_COLOR_OFFSET = _class8.LIGHT_POS_OFFSET + _class8.LIGHTS_PER_PASS * 4;
      UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET = _class8.LIGHT_COLOR_OFFSET + _class8.LIGHTS_PER_PASS * 4;
      UBOForwardLight.LIGHT_DIR_OFFSET = _class8.LIGHT_SIZE_RANGE_ANGLE_OFFSET + _class8.LIGHTS_PER_PASS * 4;
      UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET = _class8.LIGHT_DIR_OFFSET + _class8.LIGHTS_PER_PASS * 4;
      UBOForwardLight.COUNT = _class8.LIGHT_BOUNDING_SIZE_VS_OFFSET + _class8.LIGHTS_PER_PASS * 4;
      UBOForwardLight.SIZE = _class8.COUNT * 4;
      UBOForwardLight.NAME = 'CCForwardLight';
      UBOForwardLight.BINDING = ModelLocalBindings.UBO_FORWARD_LIGHTS;
      UBOForwardLight.DESCRIPTOR = new DescriptorSetLayoutBinding(_class8.BINDING, DescriptorType.DYNAMIC_UNIFORM_BUFFER, 1, ShaderStageFlagBit.FRAGMENT);
      UBOForwardLight.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class8.BINDING, _class8.NAME, [new Uniform('cc_lightPos', Type.FLOAT4, _class8.LIGHTS_PER_PASS), new Uniform('cc_lightColor', Type.FLOAT4, _class8.LIGHTS_PER_PASS), new Uniform('cc_lightSizeRangeAngle', Type.FLOAT4, _class8.LIGHTS_PER_PASS), new Uniform('cc_lightDir', Type.FLOAT4, _class8.LIGHTS_PER_PASS), new Uniform('cc_lightBoundingSizeVS', Type.FLOAT4, _class8.LIGHTS_PER_PASS)], 1);
      localDescriptorSetLayout.layouts[UBOForwardLight.NAME] = UBOForwardLight.LAYOUT;
      localDescriptorSetLayout.bindings[UBOForwardLight.BINDING] = UBOForwardLight.DESCRIPTOR;
      _export("UBODeferredLight", UBODeferredLight = class UBODeferredLight {});
      UBODeferredLight.LIGHTS_PER_PASS = 10;
      _export("JOINT_UNIFORM_CAPACITY", JOINT_UNIFORM_CAPACITY = 30);
      /**
       * @en The uniform buffer object for skinning texture
       * @zh 骨骼贴图 UBO。
       */
      _export("UBOSkinningTexture", UBOSkinningTexture = class UBOSkinningTexture {});
      _class10 = UBOSkinningTexture;
      UBOSkinningTexture.JOINTS_TEXTURE_INFO_OFFSET = 0;
      UBOSkinningTexture.COUNT = _class10.JOINTS_TEXTURE_INFO_OFFSET + 4;
      UBOSkinningTexture.SIZE = _class10.COUNT * 4;
      UBOSkinningTexture.NAME = 'CCSkinningTexture';
      UBOSkinningTexture.BINDING = ModelLocalBindings.UBO_SKINNING_TEXTURE;
      UBOSkinningTexture.DESCRIPTOR = new DescriptorSetLayoutBinding(_class10.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
      UBOSkinningTexture.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class10.BINDING, _class10.NAME, [new Uniform('cc_jointTextureInfo', Type.FLOAT4, 1)], 1);
      localDescriptorSetLayout.layouts[UBOSkinningTexture.NAME] = UBOSkinningTexture.LAYOUT;
      localDescriptorSetLayout.bindings[UBOSkinningTexture.BINDING] = UBOSkinningTexture.DESCRIPTOR;
      _export("UBOSkinningAnimation", UBOSkinningAnimation = class UBOSkinningAnimation {});
      _class11 = UBOSkinningAnimation;
      UBOSkinningAnimation.JOINTS_ANIM_INFO_OFFSET = 0;
      UBOSkinningAnimation.COUNT = _class11.JOINTS_ANIM_INFO_OFFSET + 4;
      UBOSkinningAnimation.SIZE = _class11.COUNT * 4;
      UBOSkinningAnimation.NAME = 'CCSkinningAnimation';
      UBOSkinningAnimation.BINDING = ModelLocalBindings.UBO_SKINNING_ANIMATION;
      UBOSkinningAnimation.DESCRIPTOR = new DescriptorSetLayoutBinding(_class11.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
      UBOSkinningAnimation.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class11.BINDING, _class11.NAME, [new Uniform('cc_jointAnimInfo', Type.FLOAT4, 1)], 1);
      localDescriptorSetLayout.layouts[UBOSkinningAnimation.NAME] = UBOSkinningAnimation.LAYOUT;
      localDescriptorSetLayout.bindings[UBOSkinningAnimation.BINDING] = UBOSkinningAnimation.DESCRIPTOR;
      _export("INST_JOINT_ANIM_INFO", INST_JOINT_ANIM_INFO = 'a_jointAnimInfo');
      _export("UBOSkinning", UBOSkinning = class UBOSkinning {
        static get JOINT_UNIFORM_CAPACITY() {
          return UBOSkinning._jointUniformCapacity;
        }
        static get COUNT() {
          return UBOSkinning._count;
        }
        static get SIZE() {
          return UBOSkinning._size;
        }
        /**
         * @internal This method only used init UBOSkinning configure.
        */
        static initLayout(capacity) {
          UBOSkinning._jointUniformCapacity = capacity;
          UBOSkinning._count = capacity * 12;
          UBOSkinning._size = UBOSkinning._count * 4;
          UBOSkinning.LAYOUT.members[0].count = capacity * 3;
        }
      });
      _class12 = UBOSkinning;
      UBOSkinning._jointUniformCapacity = 0;
      UBOSkinning._count = 0;
      UBOSkinning._size = 0;
      UBOSkinning.NAME = 'CCSkinning';
      UBOSkinning.BINDING = ModelLocalBindings.UBO_SKINNING_TEXTURE;
      UBOSkinning.DESCRIPTOR = new DescriptorSetLayoutBinding(_class12.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
      UBOSkinning.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class12.BINDING, _class12.NAME, [new Uniform('cc_joints', Type.FLOAT4, 1)], 1);
      _export("UBOMorph", UBOMorph = class UBOMorph {});
      _class13 = UBOMorph;
      UBOMorph.MAX_MORPH_TARGET_COUNT = 60;
      UBOMorph.OFFSET_OF_WEIGHTS = 0;
      UBOMorph.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH = 4 * _class13.MAX_MORPH_TARGET_COUNT;
      UBOMorph.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT = _class13.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH + 4;
      UBOMorph.OFFSET_OF_VERTICES_COUNT = _class13.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT + 4;
      UBOMorph.COUNT_BASE_4_BYTES = 4 * Math.ceil(_class13.MAX_MORPH_TARGET_COUNT / 4) + 4;
      UBOMorph.SIZE = _class13.COUNT_BASE_4_BYTES * 4;
      UBOMorph.NAME = 'CCMorph';
      UBOMorph.BINDING = ModelLocalBindings.UBO_MORPH;
      UBOMorph.DESCRIPTOR = new DescriptorSetLayoutBinding(_class13.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
      UBOMorph.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class13.BINDING, _class13.NAME, [new Uniform('cc_displacementWeights', Type.FLOAT4, _class13.MAX_MORPH_TARGET_COUNT / 4), new Uniform('cc_displacementTextureInfo', Type.FLOAT4, 1)], 1);
      localDescriptorSetLayout.layouts[UBOMorph.NAME] = UBOMorph.LAYOUT;
      localDescriptorSetLayout.bindings[UBOMorph.BINDING] = UBOMorph.DESCRIPTOR;

      // UI local uniform UBO
      _export("UBOUILocal", UBOUILocal = class UBOUILocal {});
      _class14 = UBOUILocal;
      // pre one vec4
      UBOUILocal.NAME = 'CCUILocal';
      UBOUILocal.BINDING = ModelLocalBindings.UBO_UI_LOCAL;
      UBOUILocal.DESCRIPTOR = new DescriptorSetLayoutBinding(_class14.BINDING, DescriptorType.DYNAMIC_UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
      UBOUILocal.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class14.BINDING, _class14.NAME, [new Uniform('cc_local_data', Type.FLOAT4, 1)], 1);
      localDescriptorSetLayout.layouts[UBOUILocal.NAME] = UBOUILocal.LAYOUT;
      localDescriptorSetLayout.bindings[UBOUILocal.BINDING] = UBOUILocal.DESCRIPTOR;

      /**
       * @en The SH uniform buffer object
       * @zh 球谐 UBO。
       */
      _export("UBOSH", UBOSH = class UBOSH {});
      _class15 = UBOSH;
      UBOSH.SH_LINEAR_CONST_R_OFFSET = 0;
      UBOSH.SH_LINEAR_CONST_G_OFFSET = _class15.SH_LINEAR_CONST_R_OFFSET + 4;
      UBOSH.SH_LINEAR_CONST_B_OFFSET = _class15.SH_LINEAR_CONST_G_OFFSET + 4;
      UBOSH.SH_QUADRATIC_R_OFFSET = _class15.SH_LINEAR_CONST_B_OFFSET + 4;
      UBOSH.SH_QUADRATIC_G_OFFSET = _class15.SH_QUADRATIC_R_OFFSET + 4;
      UBOSH.SH_QUADRATIC_B_OFFSET = _class15.SH_QUADRATIC_G_OFFSET + 4;
      UBOSH.SH_QUADRATIC_A_OFFSET = _class15.SH_QUADRATIC_B_OFFSET + 4;
      UBOSH.COUNT = _class15.SH_QUADRATIC_A_OFFSET + 4;
      UBOSH.SIZE = _class15.COUNT * 4;
      UBOSH.NAME = 'CCSH';
      UBOSH.BINDING = ModelLocalBindings.UBO_SH;
      UBOSH.DESCRIPTOR = new DescriptorSetLayoutBinding(_class15.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.FRAGMENT);
      UBOSH.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class15.BINDING, _class15.NAME, [new Uniform('cc_sh_linear_const_r', Type.FLOAT4, 1), new Uniform('cc_sh_linear_const_g', Type.FLOAT4, 1), new Uniform('cc_sh_linear_const_b', Type.FLOAT4, 1), new Uniform('cc_sh_quadratic_r', Type.FLOAT4, 1), new Uniform('cc_sh_quadratic_g', Type.FLOAT4, 1), new Uniform('cc_sh_quadratic_b', Type.FLOAT4, 1), new Uniform('cc_sh_quadratic_a', Type.FLOAT4, 1)], 1);
      localDescriptorSetLayout.layouts[UBOSH.NAME] = UBOSH.LAYOUT;
      localDescriptorSetLayout.bindings[UBOSH.BINDING] = UBOSH.DESCRIPTOR;

      /**
       * @en The sampler for joint texture
       * @zh 骨骼纹理采样器。
       */
      UNIFORM_JOINT_TEXTURE_NAME = 'cc_jointTexture';
      _export("UNIFORM_JOINT_TEXTURE_BINDING", UNIFORM_JOINT_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_JOINTS);
      UNIFORM_JOINT_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_JOINT_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
      UNIFORM_JOINT_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_JOINT_TEXTURE_BINDING, UNIFORM_JOINT_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_JOINT_TEXTURE_NAME] = UNIFORM_JOINT_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_JOINT_TEXTURE_BINDING] = UNIFORM_JOINT_TEXTURE_DESCRIPTOR;

      /**
       * @en The sampler for real-time joint texture
       * @zh 实时骨骼纹理采样器。
       */
      UNIFORM_REALTIME_JOINT_TEXTURE_NAME = 'cc_realtimeJoint';
      _export("UNIFORM_REALTIME_JOINT_TEXTURE_BINDING", UNIFORM_REALTIME_JOINT_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_JOINTS);
      UNIFORM_REALTIME_JOINT_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REALTIME_JOINT_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
      UNIFORM_REALTIME_JOINT_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REALTIME_JOINT_TEXTURE_BINDING, UNIFORM_REALTIME_JOINT_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_REALTIME_JOINT_TEXTURE_NAME] = UNIFORM_REALTIME_JOINT_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_REALTIME_JOINT_TEXTURE_BINDING] = UNIFORM_REALTIME_JOINT_TEXTURE_DESCRIPTOR;

      /**
       * @en The sampler for morph texture of position
       * @zh 位置形变纹理采样器。
       */
      UNIFORM_POSITION_MORPH_TEXTURE_NAME = 'cc_PositionDisplacements';
      _export("UNIFORM_POSITION_MORPH_TEXTURE_BINDING", UNIFORM_POSITION_MORPH_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_MORPH_POSITION);
      UNIFORM_POSITION_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_POSITION_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
      UNIFORM_POSITION_MORPH_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_POSITION_MORPH_TEXTURE_BINDING, UNIFORM_POSITION_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_POSITION_MORPH_TEXTURE_NAME] = UNIFORM_POSITION_MORPH_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_POSITION_MORPH_TEXTURE_BINDING] = UNIFORM_POSITION_MORPH_TEXTURE_DESCRIPTOR;

      /**
       * @en The sampler for morph texture of normal
       * @zh 法线形变纹理采样器。
       */
      UNIFORM_NORMAL_MORPH_TEXTURE_NAME = 'cc_NormalDisplacements';
      _export("UNIFORM_NORMAL_MORPH_TEXTURE_BINDING", UNIFORM_NORMAL_MORPH_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_MORPH_NORMAL);
      UNIFORM_NORMAL_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_NORMAL_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
      UNIFORM_NORMAL_MORPH_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_NORMAL_MORPH_TEXTURE_BINDING, UNIFORM_NORMAL_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_NORMAL_MORPH_TEXTURE_NAME] = UNIFORM_NORMAL_MORPH_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_NORMAL_MORPH_TEXTURE_BINDING] = UNIFORM_NORMAL_MORPH_TEXTURE_DESCRIPTOR;

      /**
       * @en The sampler for morph texture of tangent
       * @zh 切线形变纹理采样器。
       */
      UNIFORM_TANGENT_MORPH_TEXTURE_NAME = 'cc_TangentDisplacements';
      _export("UNIFORM_TANGENT_MORPH_TEXTURE_BINDING", UNIFORM_TANGENT_MORPH_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_MORPH_TANGENT);
      UNIFORM_TANGENT_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_TANGENT_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
      UNIFORM_TANGENT_MORPH_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_TANGENT_MORPH_TEXTURE_BINDING, UNIFORM_TANGENT_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_TANGENT_MORPH_TEXTURE_NAME] = UNIFORM_TANGENT_MORPH_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_TANGENT_MORPH_TEXTURE_BINDING] = UNIFORM_TANGENT_MORPH_TEXTURE_DESCRIPTOR;

      /**
       * @en The sampler for light map texture
       * @zh 光照图纹理采样器。
       */
      UNIFORM_LIGHTMAP_TEXTURE_NAME = 'cc_lightingMap';
      _export("UNIFORM_LIGHTMAP_TEXTURE_BINDING", UNIFORM_LIGHTMAP_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_LIGHTMAP);
      UNIFORM_LIGHTMAP_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_LIGHTMAP_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_LIGHTMAP_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_LIGHTMAP_TEXTURE_BINDING, UNIFORM_LIGHTMAP_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_LIGHTMAP_TEXTURE_NAME] = UNIFORM_LIGHTMAP_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_LIGHTMAP_TEXTURE_BINDING] = UNIFORM_LIGHTMAP_TEXTURE_DESCRIPTOR;

      /**
       * @en The sampler for UI sprites.
       * @zh UI 精灵纹理采样器。
       */
      UNIFORM_SPRITE_TEXTURE_NAME = 'cc_spriteTexture';
      _export("UNIFORM_SPRITE_TEXTURE_BINDING", UNIFORM_SPRITE_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_SPRITE);
      UNIFORM_SPRITE_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SPRITE_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_SPRITE_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_SPRITE_TEXTURE_BINDING, UNIFORM_SPRITE_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_SPRITE_TEXTURE_NAME] = UNIFORM_SPRITE_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_SPRITE_TEXTURE_BINDING] = UNIFORM_SPRITE_TEXTURE_DESCRIPTOR;

      /**
       * @en The sampler for reflection
       * @zh 反射纹理采样器。
       */
      UNIFORM_REFLECTION_TEXTURE_NAME = 'cc_reflectionTexture';
      _export("UNIFORM_REFLECTION_TEXTURE_BINDING", UNIFORM_REFLECTION_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_REFLECTION);
      UNIFORM_REFLECTION_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_REFLECTION_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_TEXTURE_BINDING, UNIFORM_REFLECTION_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_TEXTURE_NAME] = UNIFORM_REFLECTION_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_TEXTURE_BINDING] = UNIFORM_REFLECTION_TEXTURE_DESCRIPTOR;

      /**
        * @en The storage image for reflection
        * @zh 反射纹理存储。
        */
      UNIFORM_REFLECTION_STORAGE_NAME = 'cc_reflectionStorage';
      _export("UNIFORM_REFLECTION_STORAGE_BINDING", UNIFORM_REFLECTION_STORAGE_BINDING = ModelLocalBindings.STORAGE_REFLECTION);
      UNIFORM_REFLECTION_STORAGE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_STORAGE_BINDING, DescriptorType.STORAGE_IMAGE, 1, ShaderStageFlagBit.COMPUTE);
      UNIFORM_REFLECTION_STORAGE_LAYOUT = new UniformStorageImage(SetIndex.LOCAL, UNIFORM_REFLECTION_STORAGE_BINDING, UNIFORM_REFLECTION_STORAGE_NAME, Type.IMAGE2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_STORAGE_NAME] = UNIFORM_REFLECTION_STORAGE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_STORAGE_BINDING] = UNIFORM_REFLECTION_STORAGE_DESCRIPTOR;

      /**
       * @en The sampler for reflection probe cubemap
       * @zh 反射探针立方体贴图纹理采样器。
       */
      UNIFORM_REFLECTION_PROBE_CUBEMAP_NAME = 'cc_reflectionProbeCubemap';
      _export("UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING", UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING = ModelLocalBindings.SAMPLER_REFLECTION_PROBE_CUBE);
      UNIFORM_REFLECTION_PROBE_CUBEMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_REFLECTION_PROBE_CUBEMAP_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_CUBEMAP_NAME, Type.SAMPLER_CUBE, 1);
      localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_PROBE_CUBEMAP_NAME] = UNIFORM_REFLECTION_PROBE_CUBEMAP_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING] = UNIFORM_REFLECTION_PROBE_CUBEMAP_DESCRIPTOR;

      /**
       * @en The sampler for reflection probe planar reflection
       * @zh 反射探针平面反射贴图纹理采样器。
       */
      UNIFORM_REFLECTION_PROBE_TEXTURE_NAME = 'cc_reflectionProbePlanarMap';
      _export("UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING", UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_REFLECTION_PROBE_PLANAR);
      UNIFORM_REFLECTION_PROBE_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_REFLECTION_PROBE_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING, UNIFORM_REFLECTION_PROBE_TEXTURE_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_PROBE_TEXTURE_NAME] = UNIFORM_REFLECTION_PROBE_TEXTURE_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING] = UNIFORM_REFLECTION_PROBE_TEXTURE_DESCRIPTOR;

      /**
       * @en The sampler for reflection probe data map
       * @zh 反射探针数据贴图采样器。
       */
      UNIFORM_REFLECTION_PROBE_DATA_MAP_NAME = 'cc_reflectionProbeDataMap';
      _export("UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING", UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING = ModelLocalBindings.SAMPLER_REFLECTION_PROBE_DATA_MAP);
      UNIFORM_REFLECTION_PROBE_DATA_MAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_REFLECTION_PROBE_DATA_MAP_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING, UNIFORM_REFLECTION_PROBE_DATA_MAP_NAME, Type.SAMPLER2D, 1);
      localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_PROBE_DATA_MAP_NAME] = UNIFORM_REFLECTION_PROBE_DATA_MAP_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING] = UNIFORM_REFLECTION_PROBE_DATA_MAP_DESCRIPTOR;

      /**
       * @en The sampler for reflection probe cubemap for blend.
       * @zh 用于blend的反射探针立方体贴图纹理采样器。
       */
      UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_NAME = 'cc_reflectionProbeBlendCubemap';
      _export("UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING", UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING = ModelLocalBindings.SAMPLER_REFLECTION_PROBE_BLEND_CUBE);
      UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
      UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_NAME, Type.SAMPLER_CUBE, 1);
      localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_NAME] = UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_LAYOUT;
      localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING] = UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_DESCRIPTOR;
      _export("CAMERA_DEFAULT_MASK", CAMERA_DEFAULT_MASK = Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.GIZMOS, Layers.BitMask.EDITOR, Layers.BitMask.SCENE_GIZMO, Layers.BitMask.PROFILER]));
      _export("CAMERA_EDITOR_MASK", CAMERA_EDITOR_MASK = Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.PROFILER]));
      _export("MODEL_ALWAYS_MASK", MODEL_ALWAYS_MASK = Layers.Enum.ALL);
    }
  };
});