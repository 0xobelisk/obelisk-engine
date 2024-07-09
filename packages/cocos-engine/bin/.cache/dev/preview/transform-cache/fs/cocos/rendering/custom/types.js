System.register("q-bundled:///fs/cocos/rendering/custom/types.js", ["../../gfx/index.js", "./serialization.js", "../../core/memop/index.js"], function (_export, _context) {
  "use strict";

  var ResolveMode, ShaderStageFlagBit, Type, UniformBlock, saveUniformBlock, loadUniformBlock, RecyclePool, UpdateFrequency, ParameterType, ResourceResidency, QueueHint, ResourceDimension, ResourceFlags, TaskType, SceneFlags, LightingMode, AttachmentType, AccessType, ClearValueType, LightInfo, DescriptorTypeOrder, Descriptor, DescriptorBlock, DescriptorBlockFlattened, DescriptorBlockIndex, ResolveFlags, ResolvePair, CopyPair, UploadPair, MovePair, PipelineStatistics, RenderCommonObjectPoolSettings, RenderCommonObjectPool;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /****************************************************************************
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
                                                                                                                                                                                      ****************************************************************************/ /**
                                                                                                                                                                                                                                                                     * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
                                                                                                                                                                                                                                                                     * The following section is auto-generated.
                                                                                                                                                                                                                                                                     * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
                                                                                                                                                                                                                                                                     */ /* eslint-disable max-len */
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
    for (var _iterator = _createForOfIteratorHelperLoose(v.descriptors), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        k1 = _step$value[0],
        v1 = _step$value[1];
      ar.writeString(k1);
      saveDescriptor(ar, v1);
    }
    ar.writeNumber(v.uniformBlocks.size); // Map<string, UniformBlock>
    for (var _iterator2 = _createForOfIteratorHelperLoose(v.uniformBlocks), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _step2.value,
        _k = _step2$value[0],
        _v = _step2$value[1];
      ar.writeString(_k);
      saveUniformBlock(ar, _v);
    }
    ar.writeNumber(v.capacity);
    ar.writeNumber(v.count);
  }
  function loadDescriptorBlock(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // Map<string, Descriptor>
    for (var i1 = 0; i1 !== sz; ++i1) {
      var k1 = ar.readString();
      var v1 = new Descriptor();
      loadDescriptor(ar, v1);
      v.descriptors.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<string, UniformBlock>
    for (var _i = 0; _i !== sz; ++_i) {
      var _k2 = ar.readString();
      var _v2 = new UniformBlock();
      loadUniformBlock(ar, _v2);
      v.uniformBlocks.set(_k2, _v2);
    }
    v.capacity = ar.readNumber();
    v.count = ar.readNumber();
  }
  function saveDescriptorBlockFlattened(ar, v) {
    ar.writeNumber(v.descriptorNames.length); // string[]
    for (var _iterator3 = _createForOfIteratorHelperLoose(v.descriptorNames), _step3; !(_step3 = _iterator3()).done;) {
      var v1 = _step3.value;
      ar.writeString(v1);
    }
    ar.writeNumber(v.uniformBlockNames.length); // string[]
    for (var _iterator4 = _createForOfIteratorHelperLoose(v.uniformBlockNames), _step4; !(_step4 = _iterator4()).done;) {
      var _v3 = _step4.value;
      ar.writeString(_v3);
    }
    ar.writeNumber(v.descriptors.length); // Descriptor[]
    for (var _iterator5 = _createForOfIteratorHelperLoose(v.descriptors), _step5; !(_step5 = _iterator5()).done;) {
      var _v4 = _step5.value;
      saveDescriptor(ar, _v4);
    }
    ar.writeNumber(v.uniformBlocks.length); // UniformBlock[]
    for (var _iterator6 = _createForOfIteratorHelperLoose(v.uniformBlocks), _step6; !(_step6 = _iterator6()).done;) {
      var _v5 = _step6.value;
      saveUniformBlock(ar, _v5);
    }
    ar.writeNumber(v.capacity);
    ar.writeNumber(v.count);
  }
  function loadDescriptorBlockFlattened(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // string[]
    v.descriptorNames.length = sz;
    for (var i1 = 0; i1 !== sz; ++i1) {
      v.descriptorNames[i1] = ar.readString();
    }
    sz = ar.readNumber(); // string[]
    v.uniformBlockNames.length = sz;
    for (var _i2 = 0; _i2 !== sz; ++_i2) {
      v.uniformBlockNames[_i2] = ar.readString();
    }
    sz = ar.readNumber(); // Descriptor[]
    v.descriptors.length = sz;
    for (var _i3 = 0; _i3 !== sz; ++_i3) {
      var v1 = new Descriptor();
      loadDescriptor(ar, v1);
      v.descriptors[_i3] = v1;
    }
    sz = ar.readNumber(); // UniformBlock[]
    v.uniformBlocks.length = sz;
    for (var _i4 = 0; _i4 !== sz; ++_i4) {
      var _v6 = new UniformBlock();
      loadUniformBlock(ar, _v6);
      v.uniformBlocks[_i4] = _v6;
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
    getDescriptorTypeOrderName: getDescriptorTypeOrderName,
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
      _export("LightInfo", LightInfo = /*#__PURE__*/function () {
        function LightInfo(light, level, culledByLight, probe) {
          if (light === void 0) {
            light = null;
          }
          if (level === void 0) {
            level = 0;
          }
          if (culledByLight === void 0) {
            culledByLight = false;
          }
          if (probe === void 0) {
            probe = null;
          }
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
        var _proto = LightInfo.prototype;
        _proto.reset = function reset(light, level, culledByLight, probe) {
          if (light === void 0) {
            light = null;
          }
          if (level === void 0) {
            level = 0;
          }
          if (culledByLight === void 0) {
            culledByLight = false;
          }
          if (probe === void 0) {
            probe = null;
          }
          this.light = light;
          this.probe = probe;
          this.level = level;
          this.culledByLight = culledByLight;
        };
        return LightInfo;
      }());
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
      _export("Descriptor", Descriptor = /*#__PURE__*/function () {
        function Descriptor(type) {
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          this.type = void 0;
          this.count = 1;
          this.type = type;
        }
        var _proto2 = Descriptor.prototype;
        _proto2.reset = function reset(type) {
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          this.type = type;
          this.count = 1;
        };
        return Descriptor;
      }());
      _export("DescriptorBlock", DescriptorBlock = /*#__PURE__*/function () {
        function DescriptorBlock() {
          this.descriptors = new Map();
          this.uniformBlocks = new Map();
          this.capacity = 0;
          this.count = 0;
        }
        var _proto3 = DescriptorBlock.prototype;
        _proto3.reset = function reset() {
          this.descriptors.clear();
          this.uniformBlocks.clear();
          this.capacity = 0;
          this.count = 0;
        };
        return DescriptorBlock;
      }());
      _export("DescriptorBlockFlattened", DescriptorBlockFlattened = /*#__PURE__*/function () {
        function DescriptorBlockFlattened() {
          this.descriptorNames = [];
          this.uniformBlockNames = [];
          this.descriptors = [];
          this.uniformBlocks = [];
          this.capacity = 0;
          this.count = 0;
        }
        var _proto4 = DescriptorBlockFlattened.prototype;
        _proto4.reset = function reset() {
          this.descriptorNames.length = 0;
          this.uniformBlockNames.length = 0;
          this.descriptors.length = 0;
          this.uniformBlocks.length = 0;
          this.capacity = 0;
          this.count = 0;
        };
        return DescriptorBlockFlattened;
      }());
      _export("DescriptorBlockIndex", DescriptorBlockIndex = function DescriptorBlockIndex(updateFrequency, parameterType, descriptorType, visibility) {
        if (updateFrequency === void 0) {
          updateFrequency = UpdateFrequency.PER_INSTANCE;
        }
        if (parameterType === void 0) {
          parameterType = ParameterType.CONSTANTS;
        }
        if (descriptorType === void 0) {
          descriptorType = DescriptorTypeOrder.UNIFORM_BUFFER;
        }
        if (visibility === void 0) {
          visibility = ShaderStageFlagBit.NONE;
        }
        this.updateFrequency = void 0;
        this.parameterType = void 0;
        this.descriptorType = void 0;
        this.visibility = void 0;
        this.updateFrequency = updateFrequency;
        this.parameterType = parameterType;
        this.descriptorType = descriptorType;
        this.visibility = visibility;
      });
      (function (ResolveFlags) {
        ResolveFlags[ResolveFlags["NONE"] = 0] = "NONE";
        ResolveFlags[ResolveFlags["COLOR"] = 1] = "COLOR";
        ResolveFlags[ResolveFlags["DEPTH"] = 2] = "DEPTH";
        ResolveFlags[ResolveFlags["STENCIL"] = 4] = "STENCIL";
      })(ResolveFlags || _export("ResolveFlags", ResolveFlags = {}));
      _export("ResolvePair", ResolvePair = /*#__PURE__*/function () {
        function ResolvePair(source, target, resolveFlags, mode, mode1) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (resolveFlags === void 0) {
            resolveFlags = ResolveFlags.NONE;
          }
          if (mode === void 0) {
            mode = ResolveMode.SAMPLE_ZERO;
          }
          if (mode1 === void 0) {
            mode1 = ResolveMode.SAMPLE_ZERO;
          }
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
        var _proto5 = ResolvePair.prototype;
        _proto5.reset = function reset(source, target, resolveFlags, mode, mode1) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (resolveFlags === void 0) {
            resolveFlags = ResolveFlags.NONE;
          }
          if (mode === void 0) {
            mode = ResolveMode.SAMPLE_ZERO;
          }
          if (mode1 === void 0) {
            mode1 = ResolveMode.SAMPLE_ZERO;
          }
          this.source = source;
          this.target = target;
          this.resolveFlags = resolveFlags;
          this.mode = mode;
          this.mode1 = mode1;
        };
        return ResolvePair;
      }());
      _export("CopyPair", CopyPair = /*#__PURE__*/function () {
        function CopyPair(source, target, mipLevels, numSlices, sourceMostDetailedMip, sourceFirstSlice, sourcePlaneSlice, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (sourceMostDetailedMip === void 0) {
            sourceMostDetailedMip = 0;
          }
          if (sourceFirstSlice === void 0) {
            sourceFirstSlice = 0;
          }
          if (sourcePlaneSlice === void 0) {
            sourcePlaneSlice = 0;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
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
        var _proto6 = CopyPair.prototype;
        _proto6.reset = function reset(source, target, mipLevels, numSlices, sourceMostDetailedMip, sourceFirstSlice, sourcePlaneSlice, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (sourceMostDetailedMip === void 0) {
            sourceMostDetailedMip = 0;
          }
          if (sourceFirstSlice === void 0) {
            sourceFirstSlice = 0;
          }
          if (sourcePlaneSlice === void 0) {
            sourcePlaneSlice = 0;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
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
        };
        return CopyPair;
      }());
      _export("UploadPair", UploadPair = /*#__PURE__*/function () {
        function UploadPair(source, target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (source === void 0) {
            source = new Uint8Array(0);
          }
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
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
        var _proto7 = UploadPair.prototype;
        _proto7.reset = function reset(target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
          // source: Uint8Array size unchanged
          this.target = target;
          this.mipLevels = mipLevels;
          this.numSlices = numSlices;
          this.targetMostDetailedMip = targetMostDetailedMip;
          this.targetFirstSlice = targetFirstSlice;
          this.targetPlaneSlice = targetPlaneSlice;
        };
        return UploadPair;
      }());
      _export("MovePair", MovePair = /*#__PURE__*/function () {
        function MovePair(source, target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
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
        var _proto8 = MovePair.prototype;
        _proto8.reset = function reset(source, target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
          this.source = source;
          this.target = target;
          this.mipLevels = mipLevels;
          this.numSlices = numSlices;
          this.targetMostDetailedMip = targetMostDetailedMip;
          this.targetFirstSlice = targetFirstSlice;
          this.targetPlaneSlice = targetPlaneSlice;
        };
        return MovePair;
      }());
      _export("PipelineStatistics", PipelineStatistics = /*#__PURE__*/function () {
        function PipelineStatistics() {
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
        var _proto9 = PipelineStatistics.prototype;
        _proto9.reset = function reset() {
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
        };
        return PipelineStatistics;
      }());
      _export("RenderCommonObjectPoolSettings", RenderCommonObjectPoolSettings = function RenderCommonObjectPoolSettings(batchSize) {
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
      });
      _export("RenderCommonObjectPool", RenderCommonObjectPool = /*#__PURE__*/function () {
        function RenderCommonObjectPool(settings) {
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
          this._lightInfo = new RecyclePool(function () {
            return new LightInfo();
          }, settings.lightInfoBatchSize);
          this._descriptor = new RecyclePool(function () {
            return new Descriptor();
          }, settings.descriptorBatchSize);
          this._descriptorBlock = new RecyclePool(function () {
            return new DescriptorBlock();
          }, settings.descriptorBlockBatchSize);
          this._descriptorBlockFlattened = new RecyclePool(function () {
            return new DescriptorBlockFlattened();
          }, settings.descriptorBlockFlattenedBatchSize);
          this._descriptorBlockIndex = new RecyclePool(function () {
            return new DescriptorBlockIndex();
          }, settings.descriptorBlockIndexBatchSize);
          this._resolvePair = new RecyclePool(function () {
            return new ResolvePair();
          }, settings.resolvePairBatchSize);
          this._copyPair = new RecyclePool(function () {
            return new CopyPair();
          }, settings.copyPairBatchSize);
          this._uploadPair = new RecyclePool(function () {
            return new UploadPair();
          }, settings.uploadPairBatchSize);
          this._movePair = new RecyclePool(function () {
            return new MovePair();
          }, settings.movePairBatchSize);
          this._pipelineStatistics = new RecyclePool(function () {
            return new PipelineStatistics();
          }, settings.pipelineStatisticsBatchSize);
        }
        var _proto10 = RenderCommonObjectPool.prototype;
        _proto10.reset = function reset() {
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
        };
        _proto10.createLightInfo = function createLightInfo(light, level, culledByLight, probe) {
          if (light === void 0) {
            light = null;
          }
          if (level === void 0) {
            level = 0;
          }
          if (culledByLight === void 0) {
            culledByLight = false;
          }
          if (probe === void 0) {
            probe = null;
          }
          var v = this._lightInfo.add();
          v.reset(light, level, culledByLight, probe);
          return v;
        };
        _proto10.createDescriptor = function createDescriptor(type) {
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          var v = this._descriptor.add();
          v.reset(type);
          return v;
        };
        _proto10.createDescriptorBlock = function createDescriptorBlock() {
          var v = this._descriptorBlock.add();
          v.reset();
          return v;
        };
        _proto10.createDescriptorBlockFlattened = function createDescriptorBlockFlattened() {
          var v = this._descriptorBlockFlattened.add();
          v.reset();
          return v;
        };
        _proto10.createDescriptorBlockIndex = function createDescriptorBlockIndex(updateFrequency, parameterType, descriptorType, visibility) {
          if (updateFrequency === void 0) {
            updateFrequency = UpdateFrequency.PER_INSTANCE;
          }
          if (parameterType === void 0) {
            parameterType = ParameterType.CONSTANTS;
          }
          if (descriptorType === void 0) {
            descriptorType = DescriptorTypeOrder.UNIFORM_BUFFER;
          }
          if (visibility === void 0) {
            visibility = ShaderStageFlagBit.NONE;
          }
          var v = this._descriptorBlockIndex.add();
          v.updateFrequency = updateFrequency;
          v.parameterType = parameterType;
          v.descriptorType = descriptorType;
          v.visibility = visibility;
          return v;
        };
        _proto10.createResolvePair = function createResolvePair(source, target, resolveFlags, mode, mode1) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (resolveFlags === void 0) {
            resolveFlags = ResolveFlags.NONE;
          }
          if (mode === void 0) {
            mode = ResolveMode.SAMPLE_ZERO;
          }
          if (mode1 === void 0) {
            mode1 = ResolveMode.SAMPLE_ZERO;
          }
          var v = this._resolvePair.add();
          v.reset(source, target, resolveFlags, mode, mode1);
          return v;
        };
        _proto10.createCopyPair = function createCopyPair(source, target, mipLevels, numSlices, sourceMostDetailedMip, sourceFirstSlice, sourcePlaneSlice, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (sourceMostDetailedMip === void 0) {
            sourceMostDetailedMip = 0;
          }
          if (sourceFirstSlice === void 0) {
            sourceFirstSlice = 0;
          }
          if (sourcePlaneSlice === void 0) {
            sourcePlaneSlice = 0;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
          var v = this._copyPair.add();
          v.reset(source, target, mipLevels, numSlices, sourceMostDetailedMip, sourceFirstSlice, sourcePlaneSlice, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice);
          return v;
        };
        _proto10.createUploadPair = function createUploadPair(target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
          var v = this._uploadPair.add();
          v.reset(target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice);
          return v;
        };
        _proto10.createMovePair = function createMovePair(source, target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice) {
          if (source === void 0) {
            source = '';
          }
          if (target === void 0) {
            target = '';
          }
          if (mipLevels === void 0) {
            mipLevels = 0xFFFFFFFF;
          }
          if (numSlices === void 0) {
            numSlices = 0xFFFFFFFF;
          }
          if (targetMostDetailedMip === void 0) {
            targetMostDetailedMip = 0;
          }
          if (targetFirstSlice === void 0) {
            targetFirstSlice = 0;
          }
          if (targetPlaneSlice === void 0) {
            targetPlaneSlice = 0;
          }
          var v = this._movePair.add();
          v.reset(source, target, mipLevels, numSlices, targetMostDetailedMip, targetFirstSlice, targetPlaneSlice);
          return v;
        };
        _proto10.createPipelineStatistics = function createPipelineStatistics() {
          var v = this._pipelineStatistics.add();
          v.reset();
          return v;
        };
        return RenderCommonObjectPool;
      }());
    }
  };
});