System.register("q-bundled:///fs/cocos/rendering/custom/types.js", ["../../gfx/index.js", "./serialization.js", "../../core/memop/index.js"], function (_export, _context) {
  "use strict";

  var ResolveMode, ShaderStageFlagBit, Type, UniformBlock, saveUniformBlock, loadUniformBlock, RecyclePool, LightInfo, Descriptor, DescriptorBlock, DescriptorBlockFlattened, DescriptorBlockIndex, ResolvePair, CopyPair, UploadPair, MovePair, PipelineStatistics, RenderCommonObjectPoolSettings, RenderCommonObjectPool, UpdateFrequency, ParameterType, ResourceResidency, QueueHint, ResourceDimension, ResourceFlags, TaskType, SceneFlags, LightingMode, AttachmentType, AccessType, ClearValueType, DescriptorTypeOrder, ResolveFlags;
  function getUpdateFrequencyName(e) {
    switch (e) {
      case UpdateFrequency.PER_INSTANCE:
        return 'PER_INSTANCE';
      case UpdateFrequency.PER_BATCH:
        return 'PER_BATCH';
      case UpdateFrequency.PER_PHASE:
        return 'PER_PHASE';
      case UpdateFrequency.PER_PASS:
        return 'PER_PASS';
      case UpdateFrequency.COUNT:
        return 'COUNT';
      default:
        return '';
    }
  }
  function getParameterTypeName(e) {
    switch (e) {
      case ParameterType.CONSTANTS:
        return 'CONSTANTS';
      case ParameterType.CBV:
        return 'CBV';
      case ParameterType.UAV:
        return 'UAV';
      case ParameterType.SRV:
        return 'SRV';
      case ParameterType.TABLE:
        return 'TABLE';
      case ParameterType.SSV:
        return 'SSV';
      default:
        return '';
    }
  }
  function getResourceResidencyName(e) {
    switch (e) {
      case ResourceResidency.MANAGED:
        return 'MANAGED';
      case ResourceResidency.MEMORYLESS:
        return 'MEMORYLESS';
      case ResourceResidency.PERSISTENT:
        return 'PERSISTENT';
      case ResourceResidency.EXTERNAL:
        return 'EXTERNAL';
      case ResourceResidency.BACKBUFFER:
        return 'BACKBUFFER';
      default:
        return '';
    }
  }
  function getQueueHintName(e) {
    switch (e) {
      case QueueHint.NONE:
        return 'NONE';
      case QueueHint.OPAQUE:
        return 'OPAQUE';
      case QueueHint.MASK:
        return 'MASK';
      case QueueHint.BLEND:
        return 'BLEND';
      default:
        return '';
    }
  }
  function getResourceDimensionName(e) {
    switch (e) {
      case ResourceDimension.BUFFER:
        return 'BUFFER';
      case ResourceDimension.TEXTURE1D:
        return 'TEXTURE1D';
      case ResourceDimension.TEXTURE2D:
        return 'TEXTURE2D';
      case ResourceDimension.TEXTURE3D:
        return 'TEXTURE3D';
      default:
        return '';
    }
  }
  function getTaskTypeName(e) {
    switch (e) {
      case TaskType.SYNC:
        return 'SYNC';
      case TaskType.ASYNC:
        return 'ASYNC';
      default:
        return '';
    }
  }
  function getLightingModeName(e) {
    switch (e) {
      case LightingMode.NONE:
        return 'NONE';
      case LightingMode.DEFAULT:
        return 'DEFAULT';
      case LightingMode.CLUSTERED:
        return 'CLUSTERED';
      default:
        return '';
    }
  }
  function getAttachmentTypeName(e) {
    switch (e) {
      case AttachmentType.RENDER_TARGET:
        return 'RENDER_TARGET';
      case AttachmentType.DEPTH_STENCIL:
        return 'DEPTH_STENCIL';
      case AttachmentType.SHADING_RATE:
        return 'SHADING_RATE';
      default:
        return '';
    }
  }
  function getAccessTypeName(e) {
    switch (e) {
      case AccessType.READ:
        return 'READ';
      case AccessType.READ_WRITE:
        return 'READ_WRITE';
      case AccessType.WRITE:
        return 'WRITE';
      default:
        return '';
    }
  }
  function getClearValueTypeName(e) {
    switch (e) {
      case ClearValueType.NONE:
        return 'NONE';
      case ClearValueType.FLOAT_TYPE:
        return 'FLOAT_TYPE';
      case ClearValueType.INT_TYPE:
        return 'INT_TYPE';
      default:
        return '';
    }
  }
  function getDescriptorTypeOrderName(e) {
    switch (e) {
      case DescriptorTypeOrder.UNIFORM_BUFFER:
        return 'UNIFORM_BUFFER';
      case DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER:
        return 'DYNAMIC_UNIFORM_BUFFER';
      case DescriptorTypeOrder.SAMPLER_TEXTURE:
        return 'SAMPLER_TEXTURE';
      case DescriptorTypeOrder.SAMPLER:
        return 'SAMPLER';
      case DescriptorTypeOrder.TEXTURE:
        return 'TEXTURE';
      case DescriptorTypeOrder.STORAGE_BUFFER:
        return 'STORAGE_BUFFER';
      case DescriptorTypeOrder.DYNAMIC_STORAGE_BUFFER:
        return 'DYNAMIC_STORAGE_BUFFER';
      case DescriptorTypeOrder.STORAGE_IMAGE:
        return 'STORAGE_IMAGE';
      case DescriptorTypeOrder.INPUT_ATTACHMENT:
        return 'INPUT_ATTACHMENT';
      default:
        return '';
    }
  }
  function saveLightInfo(ar, v) {
    // skip, v.light: Light
    // skip, v.probe: ReflectionProbe
    ar.writeNumber(v.level);
    ar.writeBool(v.culledByLight);
  }
  function loadLightInfo(ar, v) {
    // skip, v.light: Light
    // skip, v.probe: ReflectionProbe
    v.level = ar.readNumber();
    v.culledByLight = ar.readBool();
  }
  function saveDescriptor(ar, v) {
    ar.writeNumber(v.type);
    ar.writeNumber(v.count);
  }
  function loadDescriptor(ar, v) {
    v.type = ar.readNumber();
    v.count = ar.readNumber();
  }
  function saveDescriptorBlock(ar, v) {
    ar.writeNumber(v.descriptors.size); // Map<string, Descriptor>
    for (const [k1, v1] of v.descriptors) {
      ar.writeString(k1);
      saveDescriptor(ar, v1);
    }
    ar.writeNumber(v.uniformBlocks.size); // Map<string, UniformBlock>
    for (const [k1, v1] of v.uniformBlocks) {
      ar.writeString(k1);
      saveUniformBlock(ar, v1);
    }
    ar.writeNumber(v.capacity);
    ar.writeNumber(v.count);
  }
  function loadDescriptorBlock(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // Map<string, Descriptor>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readString();
      const v1 = new Descriptor();
      loadDescriptor(ar, v1);
      v.descriptors.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<string, UniformBlock>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readString();
      const v1 = new UniformBlock();
      loadUniformBlock(ar, v1);
      v.uniformBlocks.set(k1, v1);
    }
    v.capacity = ar.readNumber();
    v.count = ar.readNumber();
  }
  function saveDescriptorBlockFlattened(ar, v) {
    ar.writeNumber(v.descriptorNames.length); // string[]
    for (const v1 of v.descriptorNames) {
      ar.writeString(v1);
    }
    ar.writeNumber(v.uniformBlockNames.length); // string[]
    for (const v1 of v.uniformBlockNames) {
      ar.writeString(v1);
    }
    ar.writeNumber(v.descriptors.length); // Descriptor[]
    for (const v1 of v.descriptors) {
      saveDescriptor(ar, v1);
    }
    ar.writeNumber(v.uniformBlocks.length); // UniformBlock[]
    for (const v1 of v.uniformBlocks) {
      saveUniformBlock(ar, v1);
    }
    ar.writeNumber(v.capacity);
    ar.writeNumber(v.count);
  }
  function loadDescriptorBlockFlattened(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // string[]
    v.descriptorNames.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      v.descriptorNames[i1] = ar.readString();
    }
    sz = ar.readNumber(); // string[]
    v.uniformBlockNames.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      v.uniformBlockNames[i1] = ar.readString();
    }
    sz = ar.readNumber(); // Descriptor[]
    v.descriptors.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      const v1 = new Descriptor();
      loadDescriptor(ar, v1);
      v.descriptors[i1] = v1;
    }
    sz = ar.readNumber(); // UniformBlock[]
    v.uniformBlocks.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      const v1 = new UniformBlock();
      loadUniformBlock(ar, v1);
      v.uniformBlocks[i1] = v1;
    }
    v.capacity = ar.readNumber();
    v.count = ar.readNumber();
  }
  function saveDescriptorBlockIndex(ar, v) {
    ar.writeNumber(v.updateFrequency);
    ar.writeNumber(v.parameterType);
    ar.writeNumber(v.descriptorType);
    ar.writeNumber(v.visibility);
  }
  function loadDescriptorBlockIndex(ar, v) {
    v.updateFrequency = ar.readNumber();
    v.parameterType = ar.readNumber();
    v.descriptorType = ar.readNumber();
    v.visibility = ar.readNumber();
  }
  function saveResolvePair(ar, v) {
    ar.writeString(v.source);
    ar.writeString(v.target);
    ar.writeNumber(v.resolveFlags);
    ar.writeNumber(v.mode);
    ar.writeNumber(v.mode1);
  }
  function loadResolvePair(ar, v) {
    v.source = ar.readString();
    v.target = ar.readString();
    v.resolveFlags = ar.readNumber();
    v.mode = ar.readNumber();
    v.mode1 = ar.readNumber();
  }
  function saveCopyPair(ar, v) {
    ar.writeString(v.source);
    ar.writeString(v.target);
    ar.writeNumber(v.mipLevels);
    ar.writeNumber(v.numSlices);
    ar.writeNumber(v.sourceMostDetailedMip);
    ar.writeNumber(v.sourceFirstSlice);
    ar.writeNumber(v.sourcePlaneSlice);
    ar.writeNumber(v.targetMostDetailedMip);
    ar.writeNumber(v.targetFirstSlice);
    ar.writeNumber(v.targetPlaneSlice);
  }
  function loadCopyPair(ar, v) {
    v.source = ar.readString();
    v.target = ar.readString();
    v.mipLevels = ar.readNumber();
    v.numSlices = ar.readNumber();
    v.sourceMostDetailedMip = ar.readNumber();
    v.sourceFirstSlice = ar.readNumber();
    v.sourcePlaneSlice = ar.readNumber();
    v.targetMostDetailedMip = ar.readNumber();
    v.targetFirstSlice = ar.readNumber();
    v.targetPlaneSlice = ar.readNumber();
  }
  function saveMovePair(ar, v) {
    ar.writeString(v.source);
    ar.writeString(v.target);
    ar.writeNumber(v.mipLevels);
    ar.writeNumber(v.numSlices);
    ar.writeNumber(v.targetMostDetailedMip);
    ar.writeNumber(v.targetFirstSlice);
    ar.writeNumber(v.targetPlaneSlice);
  }
  function loadMovePair(ar, v) {
    v.source = ar.readString();
    v.target = ar.readString();
    v.mipLevels = ar.readNumber();
    v.numSlices = ar.readNumber();
    v.targetMostDetailedMip = ar.readNumber();
    v.targetFirstSlice = ar.readNumber();
    v.targetPlaneSlice = ar.readNumber();
  }
  function savePipelineStatistics(ar, v) {
    ar.writeNumber(v.numRenderPasses);
    ar.writeNumber(v.numManagedTextures);
    ar.writeNumber(v.totalManagedTextures);
    ar.writeNumber(v.numUploadBuffers);
    ar.writeNumber(v.numUploadBufferViews);
    ar.writeNumber(v.numFreeUploadBuffers);
    ar.writeNumber(v.numFreeUploadBufferViews);
    ar.writeNumber(v.numDescriptorSets);
    ar.writeNumber(v.numFreeDescriptorSets);
    ar.writeNumber(v.numInstancingBuffers);
    ar.writeNumber(v.numInstancingUniformBlocks);
  }
  function loadPipelineStatistics(ar, v) {
    v.numRenderPasses = ar.readNumber();
    v.numManagedTextures = ar.readNumber();
    v.totalManagedTextures = ar.readNumber();
    v.numUploadBuffers = ar.readNumber();
    v.numUploadBufferViews = ar.readNumber();
    v.numFreeUploadBuffers = ar.readNumber();
    v.numFreeUploadBufferViews = ar.readNumber();
    v.numDescriptorSets = ar.readNumber();
    v.numFreeDescriptorSets = ar.readNumber();
    v.numInstancingBuffers = ar.readNumber();
    v.numInstancingUniformBlocks = ar.readNumber();
  }
  _export({
    getUpdateFrequencyName: getUpdateFrequencyName,
    getParameterTypeName: getParameterTypeName,
    getResourceResidencyName: getResourceResidencyName,
    getQueueHintName: getQueueHintName,
    getResourceDimensionName: getResourceDimensionName,
    getTaskTypeName: getTaskTypeName,
    getLightingModeName: getLightingModeName,
    getAttachmentTypeName: getAttachmentTypeName,
    getAccessTypeName: getAccessTypeName,
    getClearValueTypeName: getClearValueTypeName,
    LightInfo: void 0,
    getDescriptorTypeOrderName: getDescriptorTypeOrderName,
    Descriptor: void 0,
    DescriptorBlock: void 0,
    DescriptorBlockFlattened: void 0,
    DescriptorBlockIndex: void 0,
    ResolvePair: void 0,
    CopyPair: void 0,
    UploadPair: void 0,
    MovePair: void 0,
    PipelineStatistics: void 0,
    RenderCommonObjectPoolSettings: void 0,
    RenderCommonObjectPool: void 0,
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
    UpdateFrequency: void 0,
    ParameterType: void 0,
    ResourceResidency: void 0,
    QueueHint: void 0,
    ResourceDimension: void 0,
    ResourceFlags: void 0,
    TaskType: void 0,
    SceneFlags: void 0,
    LightingMode: void 0,
    AttachmentType: void 0,
    AccessType: void 0,
    ClearValueType: void 0,
    DescriptorTypeOrder: void 0,
    ResolveFlags: void 0
  });
  return {
    setters: [function (_gfxIndexJs) {
      ResolveMode = _gfxIndexJs.ResolveMode;
      ShaderStageFlagBit = _gfxIndexJs.ShaderStageFlagBit;
      Type = _gfxIndexJs.Type;
      UniformBlock = _gfxIndexJs.UniformBlock;
    }, function (_serializationJs) {
      saveUniformBlock = _serializationJs.saveUniformBlock;
      loadUniformBlock = _serializationJs.loadUniformBlock;
    }, function (_coreMemopIndexJs) {
      RecyclePool = _coreMemopIndexJs.RecyclePool;
    }],
    execute: function () {
      (function (UpdateFrequency) {
        UpdateFrequency[UpdateFrequency["PER_INSTANCE"] = 0] = "PER_INSTANCE";
        UpdateFrequency[UpdateFrequency["PER_BATCH"] = 1] = "PER_BATCH";
        UpdateFrequency[UpdateFrequency["PER_PHASE"] = 2] = "PER_PHASE";
        UpdateFrequency[UpdateFrequency["PER_PASS"] = 3] = "PER_PASS";
        UpdateFrequency[UpdateFrequency["COUNT"] = 4] = "COUNT";
      })(UpdateFrequency || _export("UpdateFrequency", UpdateFrequency = {}));
      (function (ParameterType) {
        ParameterType[ParameterType["CONSTANTS"] = 0] = "CONSTANTS";
        ParameterType[ParameterType["CBV"] = 1] = "CBV";
        ParameterType[ParameterType["UAV"] = 2] = "UAV";
        ParameterType[ParameterType["SRV"] = 3] = "SRV";
        ParameterType[ParameterType["TABLE"] = 4] = "TABLE";
        ParameterType[ParameterType["SSV"] = 5] = "SSV";
      })(ParameterType || _export("ParameterType", ParameterType = {}));
      (function (ResourceResidency) {
        ResourceResidency[ResourceResidency["MANAGED"] = 0] = "MANAGED";
        ResourceResidency[ResourceResidency["MEMORYLESS"] = 1] = "MEMORYLESS";
        ResourceResidency[ResourceResidency["PERSISTENT"] = 2] = "PERSISTENT";
        ResourceResidency[ResourceResidency["EXTERNAL"] = 3] = "EXTERNAL";
        ResourceResidency[ResourceResidency["BACKBUFFER"] = 4] = "BACKBUFFER";
      })(ResourceResidency || _export("ResourceResidency", ResourceResidency = {}));
      (function (QueueHint) {
        QueueHint[QueueHint["NONE"] = 0] = "NONE";
        QueueHint[QueueHint["OPAQUE"] = 1] = "OPAQUE";
        QueueHint[QueueHint["MASK"] = 2] = "MASK";
        QueueHint[QueueHint["BLEND"] = 3] = "BLEND";
        QueueHint[QueueHint["RENDER_OPAQUE"] = 1] = "RENDER_OPAQUE";
        QueueHint[QueueHint["RENDER_CUTOUT"] = 2] = "RENDER_CUTOUT";
        QueueHint[QueueHint["RENDER_TRANSPARENT"] = 3] = "RENDER_TRANSPARENT";
      })(QueueHint || _export("QueueHint", QueueHint = {}));
      (function (ResourceDimension) {
        ResourceDimension[ResourceDimension["BUFFER"] = 0] = "BUFFER";
        ResourceDimension[ResourceDimension["TEXTURE1D"] = 1] = "TEXTURE1D";
        ResourceDimension[ResourceDimension["TEXTURE2D"] = 2] = "TEXTURE2D";
        ResourceDimension[ResourceDimension["TEXTURE3D"] = 3] = "TEXTURE3D";
      })(ResourceDimension || _export("ResourceDimension", ResourceDimension = {}));
      (function (ResourceFlags) {
        ResourceFlags[ResourceFlags["NONE"] = 0] = "NONE";
        ResourceFlags[ResourceFlags["UNIFORM"] = 1] = "UNIFORM";
        ResourceFlags[ResourceFlags["INDIRECT"] = 2] = "INDIRECT";
        ResourceFlags[ResourceFlags["STORAGE"] = 4] = "STORAGE";
        ResourceFlags[ResourceFlags["SAMPLED"] = 8] = "SAMPLED";
        ResourceFlags[ResourceFlags["COLOR_ATTACHMENT"] = 16] = "COLOR_ATTACHMENT";
        ResourceFlags[ResourceFlags["DEPTH_STENCIL_ATTACHMENT"] = 32] = "DEPTH_STENCIL_ATTACHMENT";
        ResourceFlags[ResourceFlags["INPUT_ATTACHMENT"] = 64] = "INPUT_ATTACHMENT";
        ResourceFlags[ResourceFlags["SHADING_RATE"] = 128] = "SHADING_RATE";
        ResourceFlags[ResourceFlags["TRANSFER_SRC"] = 256] = "TRANSFER_SRC";
        ResourceFlags[ResourceFlags["TRANSFER_DST"] = 512] = "TRANSFER_DST";
      })(ResourceFlags || _export("ResourceFlags", ResourceFlags = {}));
      (function (TaskType) {
        TaskType[TaskType["SYNC"] = 0] = "SYNC";
        TaskType[TaskType["ASYNC"] = 1] = "ASYNC";
      })(TaskType || _export("TaskType", TaskType = {}));
      (function (SceneFlags) {
        SceneFlags[SceneFlags["NONE"] = 0] = "NONE";
        SceneFlags[SceneFlags["OPAQUE"] = 1] = "OPAQUE";
        SceneFlags[SceneFlags["MASK"] = 2] = "MASK";
        SceneFlags[SceneFlags["BLEND"] = 4] = "BLEND";
        SceneFlags[SceneFlags["OPAQUE_OBJECT"] = 1] = "OPAQUE_OBJECT";
        SceneFlags[SceneFlags["CUTOUT_OBJECT"] = 2] = "CUTOUT_OBJECT";
        SceneFlags[SceneFlags["TRANSPARENT_OBJECT"] = 4] = "TRANSPARENT_OBJECT";
        SceneFlags[SceneFlags["SHADOW_CASTER"] = 8] = "SHADOW_CASTER";
        SceneFlags[SceneFlags["UI"] = 16] = "UI";
        SceneFlags[SceneFlags["DEFAULT_LIGHTING"] = 32] = "DEFAULT_LIGHTING";
        SceneFlags[SceneFlags["VOLUMETRIC_LIGHTING"] = 64] = "VOLUMETRIC_LIGHTING";
        SceneFlags[SceneFlags["CLUSTERED_LIGHTING"] = 128] = "CLUSTERED_LIGHTING";
        SceneFlags[SceneFlags["PLANAR_SHADOW"] = 256] = "PLANAR_SHADOW";
        SceneFlags[SceneFlags["GEOMETRY"] = 512] = "GEOMETRY";
        SceneFlags[SceneFlags["PROFILER"] = 1024] = "PROFILER";
        SceneFlags[SceneFlags["DRAW_INSTANCING"] = 2048] = "DRAW_INSTANCING";
        SceneFlags[SceneFlags["DRAW_NON_INSTANCING"] = 4096] = "DRAW_NON_INSTANCING";
        SceneFlags[SceneFlags["REFLECTION_PROBE"] = 8192] = "REFLECTION_PROBE";
        SceneFlags[SceneFlags["GPU_DRIVEN"] = 16384] = "GPU_DRIVEN";
        SceneFlags[SceneFlags["NON_BUILTIN"] = 32768] = "NON_BUILTIN";
        SceneFlags[SceneFlags["ALL"] = 4294967295] = "ALL";
      })(SceneFlags || _export("SceneFlags", SceneFlags = {}));
      (function (LightingMode) {
        LightingMode[LightingMode["NONE"] = 0] = "NONE";
        LightingMode[LightingMode["DEFAULT"] = 1] = "DEFAULT";
        LightingMode[LightingMode["CLUSTERED"] = 2] = "CLUSTERED";
      })(LightingMode || _export("LightingMode", LightingMode = {}));
      (function (AttachmentType) {
        AttachmentType[AttachmentType["RENDER_TARGET"] = 0] = "RENDER_TARGET";
        AttachmentType[AttachmentType["DEPTH_STENCIL"] = 1] = "DEPTH_STENCIL";
        AttachmentType[AttachmentType["SHADING_RATE"] = 2] = "SHADING_RATE";
      })(AttachmentType || _export("AttachmentType", AttachmentType = {}));
      (function (AccessType) {
        AccessType[AccessType["READ"] = 0] = "READ";
        AccessType[AccessType["READ_WRITE"] = 1] = "READ_WRITE";
        AccessType[AccessType["WRITE"] = 2] = "WRITE";
      })(AccessType || _export("AccessType", AccessType = {}));
      (function (ClearValueType) {
        ClearValueType[ClearValueType["NONE"] = 0] = "NONE";
        ClearValueType[ClearValueType["FLOAT_TYPE"] = 1] = "FLOAT_TYPE";
        ClearValueType[ClearValueType["INT_TYPE"] = 2] = "INT_TYPE";
      })(ClearValueType || _export("ClearValueType", ClearValueType = {}));
      _export("LightInfo", LightInfo = class LightInfo {
        constructor(light = null, level = 0, culledByLight = false, probe = null) {
          /*refcount*/
          this.light = void 0;
          /*pointer*/
          this.probe = void 0;
          this.level = void 0;
          this.culledByLight = void 0;
          this.light = light;
          this.probe = probe;
          this.level = level;
          this.culledByLight = culledByLight;
        }
        reset(light = null, level = 0, culledByLight = false, probe = null) {
          this.light = light;
          this.probe = probe;
          this.level = level;
          this.culledByLight = culledByLight;
        }
      });
      (function (DescriptorTypeOrder) {
        DescriptorTypeOrder[DescriptorTypeOrder["UNIFORM_BUFFER"] = 0] = "UNIFORM_BUFFER";
        DescriptorTypeOrder[DescriptorTypeOrder["DYNAMIC_UNIFORM_BUFFER"] = 1] = "DYNAMIC_UNIFORM_BUFFER";
        DescriptorTypeOrder[DescriptorTypeOrder["SAMPLER_TEXTURE"] = 2] = "SAMPLER_TEXTURE";
        DescriptorTypeOrder[DescriptorTypeOrder["SAMPLER"] = 3] = "SAMPLER";
        DescriptorTypeOrder[DescriptorTypeOrder["TEXTURE"] = 4] = "TEXTURE";
        DescriptorTypeOrder[DescriptorTypeOrder["STORAGE_BUFFER"] = 5] = "STORAGE_BUFFER";
        DescriptorTypeOrder[DescriptorTypeOrder["DYNAMIC_STORAGE_BUFFER"] = 6] = "DYNAMIC_STORAGE_BUFFER";
        DescriptorTypeOrder[DescriptorTypeOrder["STORAGE_IMAGE"] = 7] = "STORAGE_IMAGE";
        DescriptorTypeOrder[DescriptorTypeOrder["INPUT_ATTACHMENT"] = 8] = "INPUT_ATTACHMENT";
      })(DescriptorTypeOrder || _export("DescriptorTypeOrder", DescriptorTypeOrder = {}));
      _export("Descriptor", Descriptor = class Descriptor {
        constructor(type = Type.UNKNOWN) {
          this.type = void 0;
          this.count = 1;
          this.type = type;
        }
        reset(type = Type.UNKNOWN) {
          this.type = type;
          this.count = 1;
        }
      });
      _export("DescriptorBlock", DescriptorBlock = class DescriptorBlock {
        constructor() {
          this.descriptors = new Map();
          this.uniformBlocks = new Map();
          this.capacity = 0;
          this.count = 0;
        }
        reset() {
          this.descriptors.clear();
          this.uniformBlocks.clear();
          this.capacity = 0;
          this.count = 0;
        }
      });
      _export("DescriptorBlockFlattened", DescriptorBlockFlattened = class DescriptorBlockFlattened {
        constructor() {
          this.descriptorNames = [];
          this.uniformBlockNames = [];
          this.descriptors = [];
          this.uniformBlocks = [];
          this.capacity = 0;
          this.count = 0;
        }
        reset() {
          this.descriptorNames.length = 0;
          this.uniformBlockNames.length = 0;
          this.descriptors.length = 0;
          this.uniformBlocks.length = 0;
          this.capacity = 0;
          this.count = 0;
        }
      });
      _export("DescriptorBlockIndex", DescriptorBlockIndex = class DescriptorBlockIndex {
        constructor(updateFrequency = UpdateFrequency.PER_INSTANCE, parameterType = ParameterType.CONSTANTS, descriptorType = DescriptorTypeOrder.UNIFORM_BUFFER, visibility = ShaderStageFlagBit.NONE) {
          this.updateFrequency = void 0;
          this.parameterType = void 0;
          this.descriptorType = void 0;
          this.visibility = void 0;
          this.updateFrequency = updateFrequency;
          this.parameterType = parameterType;
          this.descriptorType = descriptorType;
          this.visibility = visibility;
        }
      });
      (function (ResolveFlags) {
        ResolveFlags[ResolveFlags["NONE"] = 0] = "NONE";
        ResolveFlags[ResolveFlags["COLOR"] = 1] = "COLOR";
        ResolveFlags[ResolveFlags["DEPTH"] = 2] = "DEPTH";
        ResolveFlags[ResolveFlags["STENCIL"] = 4] = "STENCIL";
      })(ResolveFlags || _export("ResolveFlags", ResolveFlags = {}));
      _export("ResolvePair", ResolvePair = class ResolvePair {
        constructor(source = '', target = '', resolveFlags = ResolveFlags.NONE, mode = ResolveMode.SAMPLE_ZERO, mode1 = ResolveMode.SAMPLE_ZERO) {
          this.source = void 0;
          this.target = void 0;
          this.resolveFlags = void 0;
          this.mode = void 0;
          this.mode1 = void 0;
          this.source = source;
          this.target = target;
          this.resolveFlags = resolveFlags;
          this.mode = mode;
          this.mode1 = mode1;
        }
        reset(source = '', target = '', resolveFlags = ResolveFlags.NONE, mode = ResolveMode.SAMPLE_ZERO, mode1 = ResolveMode.SAMPLE_ZERO) {
          this.source = source;
          this.target = target;
          this.resolveFlags = resolveFlags;
          this.mode = mode;
          this.mode1 = mode1;
        }
      });
      _export("CopyPair", CopyPair = class CopyPair {
        constructor(source = '', target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, sourceMostDetailedMip = 0, sourceFirstSlice = 0, sourcePlaneSlice = 0, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          this.source = void 0;
          this.target = void 0;
          this.mipLevels = void 0;
          this.numSlices = void 0;
          this.sourceMostDetailedMip = void 0;
          this.sourceFirstSlice = void 0;
          this.sourcePlaneSlice = void 0;
          this.targetMostDetailedMip = void 0;
          this.targetFirstSlice = void 0;
          this.targetPlaneSlice = void 0;
          this.source = source;
          this.target = target;
          this.mipLevels = mipLevels;
          this.numSlices = numSlices;
          this.sourceMostDetailedMip = sourceMostDetailedMip;
          this.sourceFirstSlice = sourceFirstSlice;
          this.sourcePlaneSlice = sourcePlaneSlice;
          this.targetMostDetailedMip = targetMostDetailedMip;
          this.targetFirstSlice = targetFirstSlice;
          this.targetPlaneSlice = targetPlaneSlice;
        }
        reset(source = '', target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, sourceMostDetailedMip = 0, sourceFirstSlice = 0, sourcePlaneSlice = 0, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          this.source = source;
          this.target = target;
          this.mipLevels = mipLevels;
          this.numSlices = numSlices;
          this.sourceMostDetailedMip = sourceMostDetailedMip;
          this.sourceFirstSlice = sourceFirstSlice;
          this.sourcePlaneSlice = sourcePlaneSlice;
          this.targetMostDetailedMip = targetMostDetailedMip;
          this.targetFirstSlice = targetFirstSlice;
          this.targetPlaneSlice = targetPlaneSlice;
        }
      });
      _export("UploadPair", UploadPair = class UploadPair {
        constructor(source = new Uint8Array(0), target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          this.source = void 0;
          this.target = void 0;
          this.mipLevels = void 0;
          this.numSlices = void 0;
          this.targetMostDetailedMip = void 0;
          this.targetFirstSlice = void 0;
          this.targetPlaneSlice = void 0;
          this.source = source;
          this.target = target;
          this.mipLevels = mipLevels;
          this.numSlices = numSlices;
          this.targetMostDetailedMip = targetMostDetailedMip;
          this.targetFirstSlice = targetFirstSlice;
          this.targetPlaneSlice = targetPlaneSlice;
        }
        reset(target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          // source: Uint8Array size unchanged
          this.target = target;
          this.mipLevels = mipLevels;
          this.numSlices = numSlices;
          this.targetMostDetailedMip = targetMostDetailedMip;
          this.targetFirstSlice = targetFirstSlice;
          this.targetPlaneSlice = targetPlaneSlice;
        }
      });
      _export("MovePair", MovePair = class MovePair {
        constructor(source = '', target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          this.source = void 0;
          this.target = void 0;
          this.mipLevels = void 0;
          this.numSlices = void 0;
          this.targetMostDetailedMip = void 0;
          this.targetFirstSlice = void 0;
          this.targetPlaneSlice = void 0;
          this.source = source;
          this.target = target;
          this.mipLevels = mipLevels;
          this.numSlices = numSlices;
          this.targetMostDetailedMip = targetMostDetailedMip;
          this.targetFirstSlice = targetFirstSlice;
          this.targetPlaneSlice = targetPlaneSlice;
        }
        reset(source = '', target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          this.source = source;
          this.target = target;
          this.mipLevels = mipLevels;
          this.numSlices = numSlices;
          this.targetMostDetailedMip = targetMostDetailedMip;
          this.targetFirstSlice = targetFirstSlice;
          this.targetPlaneSlice = targetPlaneSlice;
        }
      });
      _export("PipelineStatistics", PipelineStatistics = class PipelineStatistics {
        constructor() {
          this.numRenderPasses = 0;
          this.numManagedTextures = 0;
          this.totalManagedTextures = 0;
          this.numUploadBuffers = 0;
          this.numUploadBufferViews = 0;
          this.numFreeUploadBuffers = 0;
          this.numFreeUploadBufferViews = 0;
          this.numDescriptorSets = 0;
          this.numFreeDescriptorSets = 0;
          this.numInstancingBuffers = 0;
          this.numInstancingUniformBlocks = 0;
        }
        reset() {
          this.numRenderPasses = 0;
          this.numManagedTextures = 0;
          this.totalManagedTextures = 0;
          this.numUploadBuffers = 0;
          this.numUploadBufferViews = 0;
          this.numFreeUploadBuffers = 0;
          this.numFreeUploadBufferViews = 0;
          this.numDescriptorSets = 0;
          this.numFreeDescriptorSets = 0;
          this.numInstancingBuffers = 0;
          this.numInstancingUniformBlocks = 0;
        }
      });
      _export("RenderCommonObjectPoolSettings", RenderCommonObjectPoolSettings = class RenderCommonObjectPoolSettings {
        constructor(batchSize) {
          this.lightInfoBatchSize = 16;
          this.descriptorBatchSize = 16;
          this.descriptorBlockBatchSize = 16;
          this.descriptorBlockFlattenedBatchSize = 16;
          this.descriptorBlockIndexBatchSize = 16;
          this.resolvePairBatchSize = 16;
          this.copyPairBatchSize = 16;
          this.uploadPairBatchSize = 16;
          this.movePairBatchSize = 16;
          this.pipelineStatisticsBatchSize = 16;
          this.lightInfoBatchSize = batchSize;
          this.descriptorBatchSize = batchSize;
          this.descriptorBlockBatchSize = batchSize;
          this.descriptorBlockFlattenedBatchSize = batchSize;
          this.descriptorBlockIndexBatchSize = batchSize;
          this.resolvePairBatchSize = batchSize;
          this.copyPairBatchSize = batchSize;
          this.uploadPairBatchSize = batchSize;
          this.movePairBatchSize = batchSize;
          this.pipelineStatisticsBatchSize = batchSize;
        }
      });
      _export("RenderCommonObjectPool", RenderCommonObjectPool = class RenderCommonObjectPool {
        constructor(settings) {
          this._lightInfo = void 0;
          this._descriptor = void 0;
          this._descriptorBlock = void 0;
          this._descriptorBlockFlattened = void 0;
          this._descriptorBlockIndex = void 0;
          this._resolvePair = void 0;
          this._copyPair = void 0;
          this._uploadPair = void 0;
          this._movePair = void 0;
          this._pipelineStatistics = void 0;
          this._lightInfo = new RecyclePool(() => new LightInfo(), settings.lightInfoBatchSize);
          this._descriptor = new RecyclePool(() => new Descriptor(), settings.descriptorBatchSize);
          this._descriptorBlock = new RecyclePool(() => new DescriptorBlock(), settings.descriptorBlockBatchSize);
          this._descriptorBlockFlattened = new RecyclePool(() => new DescriptorBlockFlattened(), settings.descriptorBlockFlattenedBatchSize);
          this._descriptorBlockIndex = new RecyclePool(() => new DescriptorBlockIndex(), settings.descriptorBlockIndexBatchSize);
          this._resolvePair = new RecyclePool(() => new ResolvePair(), settings.resolvePairBatchSize);
          this._copyPair = new RecyclePool(() => new CopyPair(), settings.copyPairBatchSize);
          this._uploadPair = new RecyclePool(() => new UploadPair(), settings.uploadPairBatchSize);
          this._movePair = new RecyclePool(() => new MovePair(), settings.movePairBatchSize);
          this._pipelineStatistics = new RecyclePool(() => new PipelineStatistics(), settings.pipelineStatisticsBatchSize);
        }
        reset() {
          this._lightInfo.reset();
          this._descriptor.reset();
          this._descriptorBlock.reset();
          this._descriptorBlockFlattened.reset();
          this._descriptorBlockIndex.reset();
          this._resolvePair.reset();
          this._copyPair.reset();
          this._uploadPair.reset();
          this._movePair.reset();
          this._pipelineStatistics.reset();
        }
        createLightInfo(light = null, level = 0, culledByLight = false, probe = null) {
          const v = this._lightInfo.add();
          v.reset(light, level, culledByLight, probe);
          return v;
        }
        createDescriptor(type = Type.UNKNOWN) {
          const v = this._descriptor.add();
          v.reset(type);
          return v;
        }
        createDescriptorBlock() {
          const v = this._descriptorBlock.add();
          v.reset();
          return v;
        }
        createDescriptorBlockFlattened() {
          const v = this._descriptorBlockFlattened.add();
          v.reset();
          return v;
        }
        createDescriptorBlockIndex(updateFrequency = UpdateFrequency.PER_INSTANCE, parameterType = ParameterType.CONSTANTS, descriptorType = DescriptorTypeOrder.UNIFORM_BUFFER, visibility = ShaderStageFlagBit.NONE) {
          const v = this._descriptorBlockIndex.add();
          v.updateFrequency = updateFrequency;
          v.parameterType = parameterType;
          v.descriptorType = descriptorType;
          v.visibility = visibility;
          return v;
        }
        createResolvePair(source = '', target = '', resolveFlags = ResolveFlags.NONE, mode = ResolveMode.SAMPLE_ZERO, mode1 = ResolveMode.SAMPLE_ZERO) {
          const v = this._resolvePair.add();
          v.reset(source, target, resolveFlags, mode, mode1);
          return v;
        }
        createCopyPair(source = '', target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, sourceMostDetailedMip = 0, sourceFirstSlice = 0, sourcePlaneSlice = 0, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          const v = this._copyPair.add();
          v.reset(source, target, mipLevels, numSlices, sourceMostDetailedMip, sourceFirstSlice, sourcePlaneSlice, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice);
          return v;
        }
        createUploadPair(target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          const v = this._uploadPair.add();
          v.reset(target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice);
          return v;
        }
        createMovePair(source = '', target = '', mipLevels = 0xFFFFFFFF, numSlices = 0xFFFFFFFF, targetMostDetailedMip = 0, targetFirstSlice = 0, targetPlaneSlice = 0) {
          const v = this._movePair.add();
          v.reset(source, target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice);
          return v;
        }
        createPipelineStatistics() {
          const v = this._pipelineStatistics.add();
          v.reset();
          return v;
        }
      });
    }
  };
});