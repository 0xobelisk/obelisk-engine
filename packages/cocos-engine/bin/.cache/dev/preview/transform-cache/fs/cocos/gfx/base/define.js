System.register("q-bundled:///fs/cocos/gfx/base/define.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var GCObject, deepCopy, ObjectType, Status, API, SurfaceTransform, Feature, Format, FormatType, Type, BufferUsageBit, BufferFlagBit, MemoryAccessBit, MemoryUsageBit, TextureType, TextureUsageBit, TextureFlagBit, FormatFeatureBit, SampleCount, VsyncMode, Filter, Address, ComparisonFunc, StencilOp, BlendFactor, BlendOp, ColorMask, ShaderStageFlagBit, LoadOp, StoreOp, AccessFlagBit, ResolveMode, PipelineBindPoint, PrimitiveMode, PolygonMode, ShadeModel, CullMode, DynamicStateFlagBit, StencilFace, DescriptorType, QueueType, QueryType, CommandBufferType, ClearFlagBit, BarrierType, PassType, Size, DeviceCaps, DeviceOptions, Offset, Rect, Extent, TextureSubresLayers, TextureSubresRange, TextureCopy, TextureBlit, BufferTextureCopy, Viewport, Color, BindingMappingInfo, SwapchainInfo, DeviceInfo, BufferInfo, BufferViewInfo, DrawInfo, DispatchInfo, IndirectBuffer, TextureInfo, TextureViewInfo, SamplerInfo, Uniform, UniformBlock, UniformSamplerTexture, UniformSampler, UniformTexture, UniformStorageImage, UniformStorageBuffer, UniformInputAttachment, ShaderStage, Attribute, ShaderInfo, InputAssemblerInfo, ColorAttachment, DepthStencilAttachment, SubpassInfo, SubpassDependency, RenderPassInfo, GeneralBarrierInfo, TextureBarrierInfo, BufferBarrierInfo, FramebufferInfo, DescriptorSetLayoutBinding, DescriptorSetLayoutInfo, DescriptorSetInfo, PipelineLayoutInfo, InputState, CommandBufferInfo, QueueInfo, QueryPoolInfo, FormatInfo, MemoryStatus, DynamicStencilStates, DynamicStates, GFXObject, AttributeName, FormatInfos, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, DESCRIPTOR_DYNAMIC_TYPE, DRAW_INFO_SIZE, _type2size;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable no-empty-function */
  function IsPowerOf2(x) {
    return x > 0 && (x & x - 1) === 0;
  }

  /**
    * @en Get memory size of the specified fomat.
    * @zh 获取指定格式对应的内存大小。
    * @param format The target format.
    * @param width The target width.
    * @param height The target height.
    * @param depth The target depth.
    */
  function FormatSize(format, width, height, depth) {
    if (!FormatInfos[format].isCompressed) {
      return width * height * depth * FormatInfos[format].size;
    } else {
      switch (format) {
        case Format.BC1:
        case Format.BC1_ALPHA:
        case Format.BC1_SRGB:
        case Format.BC1_SRGB_ALPHA:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 8 * depth;
        case Format.BC2:
        case Format.BC2_SRGB:
        case Format.BC3:
        case Format.BC3_SRGB:
        case Format.BC4:
        case Format.BC4_SNORM:
        case Format.BC6H_SF16:
        case Format.BC6H_UF16:
        case Format.BC7:
        case Format.BC7_SRGB:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;
        case Format.BC5:
        case Format.BC5_SNORM:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 32 * depth;
        case Format.ETC_RGB8:
        case Format.ETC2_RGB8:
        case Format.ETC2_SRGB8:
        case Format.ETC2_RGB8_A1:
        case Format.EAC_R11:
        case Format.EAC_R11SN:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 8 * depth;
        case Format.ETC2_RGBA8:
        case Format.ETC2_SRGB8_A1:
        case Format.EAC_RG11:
        case Format.EAC_RG11SN:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;
        case Format.PVRTC_RGB2:
        case Format.PVRTC_RGBA2:
        case Format.PVRTC2_2BPP:
          return Math.ceil(width / 8) * Math.ceil(height / 4) * 8 * depth;
        case Format.PVRTC_RGB4:
        case Format.PVRTC_RGBA4:
        case Format.PVRTC2_4BPP:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 8 * depth;
        case Format.ASTC_RGBA_4X4:
        case Format.ASTC_SRGBA_4X4:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;
        case Format.ASTC_RGBA_5X4:
        case Format.ASTC_SRGBA_5X4:
          return Math.ceil(width / 5) * Math.ceil(height / 4) * 16 * depth;
        case Format.ASTC_RGBA_5X5:
        case Format.ASTC_SRGBA_5X5:
          return Math.ceil(width / 5) * Math.ceil(height / 5) * 16 * depth;
        case Format.ASTC_RGBA_6X5:
        case Format.ASTC_SRGBA_6X5:
          return Math.ceil(width / 6) * Math.ceil(height / 5) * 16 * depth;
        case Format.ASTC_RGBA_6X6:
        case Format.ASTC_SRGBA_6X6:
          return Math.ceil(width / 6) * Math.ceil(height / 6) * 16 * depth;
        case Format.ASTC_RGBA_8X5:
        case Format.ASTC_SRGBA_8X5:
          return Math.ceil(width / 8) * Math.ceil(height / 5) * 16 * depth;
        case Format.ASTC_RGBA_8X6:
        case Format.ASTC_SRGBA_8X6:
          return Math.ceil(width / 8) * Math.ceil(height / 6) * 16 * depth;
        case Format.ASTC_RGBA_8X8:
        case Format.ASTC_SRGBA_8X8:
          return Math.ceil(width / 8) * Math.ceil(height / 8) * 16 * depth;
        case Format.ASTC_RGBA_10X5:
        case Format.ASTC_SRGBA_10X5:
          return Math.ceil(width / 10) * Math.ceil(height / 5) * 16 * depth;
        case Format.ASTC_RGBA_10X6:
        case Format.ASTC_SRGBA_10X6:
          return Math.ceil(width / 10) * Math.ceil(height / 6) * 16 * depth;
        case Format.ASTC_RGBA_10X8:
        case Format.ASTC_SRGBA_10X8:
          return Math.ceil(width / 10) * Math.ceil(height / 8) * 16 * depth;
        case Format.ASTC_RGBA_10X10:
        case Format.ASTC_SRGBA_10X10:
          return Math.ceil(width / 10) * Math.ceil(height / 10) * 16 * depth;
        case Format.ASTC_RGBA_12X10:
        case Format.ASTC_SRGBA_12X10:
          return Math.ceil(width / 12) * Math.ceil(height / 10) * 16 * depth;
        case Format.ASTC_RGBA_12X12:
        case Format.ASTC_SRGBA_12X12:
          return Math.ceil(width / 12) * Math.ceil(height / 12) * 16 * depth;
        default:
          {
            return 0;
          }
      }
    }
  }

  /**
    * @en Get memory size of the specified surface.
    * @zh GFX 格式表面内存大小。
    * @param format The target format.
    * @param width The target width.
    * @param height The target height.
    * @param depth The target depth.
    * @param mips The target mip levels.
    */
  function FormatSurfaceSize(format, width, height, depth, mips) {
    var size = 0;
    for (var i = 0; i < mips; ++i) {
      size += FormatSize(format, width, height, depth);
      width = Math.max(width >> 1, 1);
      height = Math.max(height >> 1, 1);
    }
    return size;
  }
  /**
    * @en Get the memory size of the specified type.
    * @zh 得到 GFX 数据类型的大小。
    * @param type The target type.
    */
  function GetTypeSize(type) {
    return _type2size[type] || 0;
  }
  function getTypedArrayConstructor(info) {
    if (info.isCompressed) {
      return Uint8Array;
    }
    var stride = info.size / info.count;
    switch (info.type) {
      case FormatType.UNORM:
      case FormatType.UINT:
        {
          switch (stride) {
            case 1:
              return Uint8Array;
            case 2:
              return Uint16Array;
            case 4:
              return Uint32Array;
            default:
              return Uint8Array;
          }
        }
      case FormatType.SNORM:
      case FormatType.INT:
        {
          switch (stride) {
            case 1:
              return Int8Array;
            case 2:
              return Int16Array;
            case 4:
              return Int32Array;
            default:
              return Int8Array;
          }
        }
      case FormatType.FLOAT:
        {
          switch (stride) {
            case 2:
              return Uint16Array;
            case 4:
              return Float32Array;
            default:
              return Float32Array;
          }
        }
      default:
    }
    return Float32Array;
  }
  function formatAlignment(format) {
    switch (format) {
      case Format.BC1:
      case Format.BC1_ALPHA:
      case Format.BC1_SRGB:
      case Format.BC1_SRGB_ALPHA:
      case Format.BC2:
      case Format.BC2_SRGB:
      case Format.BC3:
      case Format.BC3_SRGB:
      case Format.BC4:
      case Format.BC4_SNORM:
      case Format.BC6H_SF16:
      case Format.BC6H_UF16:
      case Format.BC7:
      case Format.BC7_SRGB:
      case Format.BC5:
      case Format.BC5_SNORM:
      case Format.ETC_RGB8:
      case Format.ETC2_RGB8:
      case Format.ETC2_SRGB8:
      case Format.ETC2_RGB8_A1:
      case Format.EAC_R11:
      case Format.EAC_R11SN:
      case Format.ETC2_RGBA8:
      case Format.ETC2_SRGB8_A1:
      case Format.EAC_RG11:
      case Format.EAC_RG11SN:
        return {
          width: 4,
          height: 4
        };
      case Format.PVRTC_RGB2:
      case Format.PVRTC_RGBA2:
      case Format.PVRTC2_2BPP:
        return {
          width: 8,
          height: 4
        };
      case Format.PVRTC_RGB4:
      case Format.PVRTC_RGBA4:
      case Format.PVRTC2_4BPP:
        return {
          width: 4,
          height: 4
        };
      case Format.ASTC_RGBA_4X4:
      case Format.ASTC_SRGBA_4X4:
        return {
          width: 4,
          height: 4
        };
      case Format.ASTC_RGBA_5X4:
      case Format.ASTC_SRGBA_5X4:
        return {
          width: 5,
          height: 4
        };
      case Format.ASTC_RGBA_5X5:
      case Format.ASTC_SRGBA_5X5:
        return {
          width: 5,
          height: 5
        };
      case Format.ASTC_RGBA_6X5:
      case Format.ASTC_SRGBA_6X5:
        return {
          width: 6,
          height: 5
        };
      case Format.ASTC_RGBA_6X6:
      case Format.ASTC_SRGBA_6X6:
        return {
          width: 6,
          height: 6
        };
      case Format.ASTC_RGBA_8X5:
      case Format.ASTC_SRGBA_8X5:
        return {
          width: 8,
          height: 5
        };
      case Format.ASTC_RGBA_8X6:
      case Format.ASTC_SRGBA_8X6:
        return {
          width: 8,
          height: 6
        };
      case Format.ASTC_RGBA_8X8:
      case Format.ASTC_SRGBA_8X8:
        return {
          width: 8,
          height: 8
        };
      case Format.ASTC_RGBA_10X5:
      case Format.ASTC_SRGBA_10X5:
        return {
          width: 10,
          height: 5
        };
      case Format.ASTC_RGBA_10X6:
      case Format.ASTC_SRGBA_10X6:
        return {
          width: 10,
          height: 6
        };
      case Format.ASTC_RGBA_10X8:
      case Format.ASTC_SRGBA_10X8:
        return {
          width: 10,
          height: 8
        };
      case Format.ASTC_RGBA_10X10:
      case Format.ASTC_SRGBA_10X10:
        return {
          width: 10,
          height: 10
        };
      case Format.ASTC_RGBA_12X10:
      case Format.ASTC_SRGBA_12X10:
        return {
          width: 12,
          height: 10
        };
      case Format.ASTC_RGBA_12X12:
      case Format.ASTC_SRGBA_12X12:
        return {
          width: 12,
          height: 12
        };
      default:
        return {
          width: 1,
          height: 1
        };
    }
  }
  function alignTo(size, alignment) {
    return Math.ceil(size / alignment) * alignment;
  }
  _export({
    IsPowerOf2: IsPowerOf2,
    FormatSize: FormatSize,
    FormatSurfaceSize: FormatSurfaceSize,
    GetTypeSize: GetTypeSize,
    getTypedArrayConstructor: getTypedArrayConstructor,
    formatAlignment: formatAlignment,
    alignTo: alignTo,
    ObjectType: void 0,
    Status: void 0,
    API: void 0,
    SurfaceTransform: void 0,
    Feature: void 0,
    Format: void 0,
    FormatType: void 0,
    Type: void 0,
    BufferUsageBit: void 0,
    BufferFlagBit: void 0,
    MemoryAccessBit: void 0,
    MemoryUsageBit: void 0,
    TextureType: void 0,
    TextureUsageBit: void 0,
    TextureFlagBit: void 0,
    FormatFeatureBit: void 0,
    SampleCount: void 0,
    VsyncMode: void 0,
    Filter: void 0,
    Address: void 0,
    ComparisonFunc: void 0,
    StencilOp: void 0,
    BlendFactor: void 0,
    BlendOp: void 0,
    ColorMask: void 0,
    ShaderStageFlagBit: void 0,
    LoadOp: void 0,
    StoreOp: void 0,
    AccessFlagBit: void 0,
    ResolveMode: void 0,
    PipelineBindPoint: void 0,
    PrimitiveMode: void 0,
    PolygonMode: void 0,
    ShadeModel: void 0,
    CullMode: void 0,
    DynamicStateFlagBit: void 0,
    StencilFace: void 0,
    DescriptorType: void 0,
    QueueType: void 0,
    QueryType: void 0,
    CommandBufferType: void 0,
    ClearFlagBit: void 0,
    BarrierType: void 0,
    PassType: void 0,
    AttributeName: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      GCObject = _coreIndexJs.GCObject;
    }],
    execute: function () {
      deepCopy = function deepCopy(target, source, Ctor) {
        for (var i = 0; i < source.length; ++i) {
          if (target.length <= i) target.push(new Ctor());
          target[i].copy(source[i]);
        }
        target.length = source.length;
      };
      /**
        * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
        * The following section is auto-generated from native/cocos/renderer/core/gfx/GFXDef-common.h
        * by the script native/tools/gfx-define-generator/generate.js.
        * Changes to these public interfaces should be made there first and synced back.
        * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
        */
      /**
       * @en Graphics object type
       * @zh 图形API对象的类型
       */
      (function (ObjectType) {
        ObjectType[ObjectType["UNKNOWN"] = 0] = "UNKNOWN";
        ObjectType[ObjectType["SWAPCHAIN"] = 1] = "SWAPCHAIN";
        ObjectType[ObjectType["BUFFER"] = 2] = "BUFFER";
        ObjectType[ObjectType["TEXTURE"] = 3] = "TEXTURE";
        ObjectType[ObjectType["RENDER_PASS"] = 4] = "RENDER_PASS";
        ObjectType[ObjectType["FRAMEBUFFER"] = 5] = "FRAMEBUFFER";
        ObjectType[ObjectType["SAMPLER"] = 6] = "SAMPLER";
        ObjectType[ObjectType["SHADER"] = 7] = "SHADER";
        ObjectType[ObjectType["DESCRIPTOR_SET_LAYOUT"] = 8] = "DESCRIPTOR_SET_LAYOUT";
        ObjectType[ObjectType["PIPELINE_LAYOUT"] = 9] = "PIPELINE_LAYOUT";
        ObjectType[ObjectType["PIPELINE_STATE"] = 10] = "PIPELINE_STATE";
        ObjectType[ObjectType["DESCRIPTOR_SET"] = 11] = "DESCRIPTOR_SET";
        ObjectType[ObjectType["INPUT_ASSEMBLER"] = 12] = "INPUT_ASSEMBLER";
        ObjectType[ObjectType["COMMAND_BUFFER"] = 13] = "COMMAND_BUFFER";
        ObjectType[ObjectType["QUEUE"] = 14] = "QUEUE";
        ObjectType[ObjectType["QUERY_POOL"] = 15] = "QUERY_POOL";
        ObjectType[ObjectType["GLOBAL_BARRIER"] = 16] = "GLOBAL_BARRIER";
        ObjectType[ObjectType["TEXTURE_BARRIER"] = 17] = "TEXTURE_BARRIER";
        ObjectType[ObjectType["BUFFER_BARRIER"] = 18] = "BUFFER_BARRIER";
        ObjectType[ObjectType["COUNT"] = 19] = "COUNT";
      })(ObjectType || _export("ObjectType", ObjectType = {}));
      (function (Status) {
        Status[Status["UNREADY"] = 0] = "UNREADY";
        Status[Status["FAILED"] = 1] = "FAILED";
        Status[Status["SUCCESS"] = 2] = "SUCCESS";
      })(Status || _export("Status", Status = {}));
      (function (API) {
        API[API["UNKNOWN"] = 0] = "UNKNOWN";
        API[API["GLES2"] = 1] = "GLES2";
        API[API["GLES3"] = 2] = "GLES3";
        API[API["METAL"] = 3] = "METAL";
        API[API["VULKAN"] = 4] = "VULKAN";
        API[API["NVN"] = 5] = "NVN";
        API[API["WEBGL"] = 6] = "WEBGL";
        API[API["WEBGL2"] = 7] = "WEBGL2";
        API[API["WEBGPU"] = 8] = "WEBGPU";
      })(API || _export("API", API = {}));
      (function (SurfaceTransform) {
        SurfaceTransform[SurfaceTransform["IDENTITY"] = 0] = "IDENTITY";
        SurfaceTransform[SurfaceTransform["ROTATE_90"] = 1] = "ROTATE_90";
        SurfaceTransform[SurfaceTransform["ROTATE_180"] = 2] = "ROTATE_180";
        SurfaceTransform[SurfaceTransform["ROTATE_270"] = 3] = "ROTATE_270";
      })(SurfaceTransform || _export("SurfaceTransform", SurfaceTransform = {}));
      (function (Feature) {
        Feature[Feature["ELEMENT_INDEX_UINT"] = 0] = "ELEMENT_INDEX_UINT";
        Feature[Feature["INSTANCED_ARRAYS"] = 1] = "INSTANCED_ARRAYS";
        Feature[Feature["MULTIPLE_RENDER_TARGETS"] = 2] = "MULTIPLE_RENDER_TARGETS";
        Feature[Feature["BLEND_MINMAX"] = 3] = "BLEND_MINMAX";
        Feature[Feature["COMPUTE_SHADER"] = 4] = "COMPUTE_SHADER";
        Feature[Feature["INPUT_ATTACHMENT_BENEFIT"] = 5] = "INPUT_ATTACHMENT_BENEFIT";
        Feature[Feature["SUBPASS_COLOR_INPUT"] = 6] = "SUBPASS_COLOR_INPUT";
        Feature[Feature["SUBPASS_DEPTH_STENCIL_INPUT"] = 7] = "SUBPASS_DEPTH_STENCIL_INPUT";
        Feature[Feature["RASTERIZATION_ORDER_COHERENT"] = 8] = "RASTERIZATION_ORDER_COHERENT";
        Feature[Feature["MULTI_SAMPLE_RESOLVE_DEPTH_STENCIL"] = 9] = "MULTI_SAMPLE_RESOLVE_DEPTH_STENCIL";
        Feature[Feature["COUNT"] = 10] = "COUNT";
      })(Feature || _export("Feature", Feature = {}));
      (function (Format) {
        Format[Format["UNKNOWN"] = 0] = "UNKNOWN";
        Format[Format["A8"] = 1] = "A8";
        Format[Format["L8"] = 2] = "L8";
        Format[Format["LA8"] = 3] = "LA8";
        Format[Format["R8"] = 4] = "R8";
        Format[Format["R8SN"] = 5] = "R8SN";
        Format[Format["R8UI"] = 6] = "R8UI";
        Format[Format["R8I"] = 7] = "R8I";
        Format[Format["R16F"] = 8] = "R16F";
        Format[Format["R16UI"] = 9] = "R16UI";
        Format[Format["R16I"] = 10] = "R16I";
        Format[Format["R32F"] = 11] = "R32F";
        Format[Format["R32UI"] = 12] = "R32UI";
        Format[Format["R32I"] = 13] = "R32I";
        Format[Format["RG8"] = 14] = "RG8";
        Format[Format["RG8SN"] = 15] = "RG8SN";
        Format[Format["RG8UI"] = 16] = "RG8UI";
        Format[Format["RG8I"] = 17] = "RG8I";
        Format[Format["RG16F"] = 18] = "RG16F";
        Format[Format["RG16UI"] = 19] = "RG16UI";
        Format[Format["RG16I"] = 20] = "RG16I";
        Format[Format["RG32F"] = 21] = "RG32F";
        Format[Format["RG32UI"] = 22] = "RG32UI";
        Format[Format["RG32I"] = 23] = "RG32I";
        Format[Format["RGB8"] = 24] = "RGB8";
        Format[Format["SRGB8"] = 25] = "SRGB8";
        Format[Format["RGB8SN"] = 26] = "RGB8SN";
        Format[Format["RGB8UI"] = 27] = "RGB8UI";
        Format[Format["RGB8I"] = 28] = "RGB8I";
        Format[Format["RGB16F"] = 29] = "RGB16F";
        Format[Format["RGB16UI"] = 30] = "RGB16UI";
        Format[Format["RGB16I"] = 31] = "RGB16I";
        Format[Format["RGB32F"] = 32] = "RGB32F";
        Format[Format["RGB32UI"] = 33] = "RGB32UI";
        Format[Format["RGB32I"] = 34] = "RGB32I";
        Format[Format["RGBA8"] = 35] = "RGBA8";
        Format[Format["BGRA8"] = 36] = "BGRA8";
        Format[Format["SRGB8_A8"] = 37] = "SRGB8_A8";
        Format[Format["RGBA8SN"] = 38] = "RGBA8SN";
        Format[Format["RGBA8UI"] = 39] = "RGBA8UI";
        Format[Format["RGBA8I"] = 40] = "RGBA8I";
        Format[Format["RGBA16F"] = 41] = "RGBA16F";
        Format[Format["RGBA16UI"] = 42] = "RGBA16UI";
        Format[Format["RGBA16I"] = 43] = "RGBA16I";
        Format[Format["RGBA32F"] = 44] = "RGBA32F";
        Format[Format["RGBA32UI"] = 45] = "RGBA32UI";
        Format[Format["RGBA32I"] = 46] = "RGBA32I";
        Format[Format["R5G6B5"] = 47] = "R5G6B5";
        Format[Format["R11G11B10F"] = 48] = "R11G11B10F";
        Format[Format["RGB5A1"] = 49] = "RGB5A1";
        Format[Format["RGBA4"] = 50] = "RGBA4";
        Format[Format["RGB10A2"] = 51] = "RGB10A2";
        Format[Format["RGB10A2UI"] = 52] = "RGB10A2UI";
        Format[Format["RGB9E5"] = 53] = "RGB9E5";
        Format[Format["DEPTH"] = 54] = "DEPTH";
        Format[Format["DEPTH_STENCIL"] = 55] = "DEPTH_STENCIL";
        Format[Format["BC1"] = 56] = "BC1";
        Format[Format["BC1_ALPHA"] = 57] = "BC1_ALPHA";
        Format[Format["BC1_SRGB"] = 58] = "BC1_SRGB";
        Format[Format["BC1_SRGB_ALPHA"] = 59] = "BC1_SRGB_ALPHA";
        Format[Format["BC2"] = 60] = "BC2";
        Format[Format["BC2_SRGB"] = 61] = "BC2_SRGB";
        Format[Format["BC3"] = 62] = "BC3";
        Format[Format["BC3_SRGB"] = 63] = "BC3_SRGB";
        Format[Format["BC4"] = 64] = "BC4";
        Format[Format["BC4_SNORM"] = 65] = "BC4_SNORM";
        Format[Format["BC5"] = 66] = "BC5";
        Format[Format["BC5_SNORM"] = 67] = "BC5_SNORM";
        Format[Format["BC6H_UF16"] = 68] = "BC6H_UF16";
        Format[Format["BC6H_SF16"] = 69] = "BC6H_SF16";
        Format[Format["BC7"] = 70] = "BC7";
        Format[Format["BC7_SRGB"] = 71] = "BC7_SRGB";
        Format[Format["ETC_RGB8"] = 72] = "ETC_RGB8";
        Format[Format["ETC2_RGB8"] = 73] = "ETC2_RGB8";
        Format[Format["ETC2_SRGB8"] = 74] = "ETC2_SRGB8";
        Format[Format["ETC2_RGB8_A1"] = 75] = "ETC2_RGB8_A1";
        Format[Format["ETC2_SRGB8_A1"] = 76] = "ETC2_SRGB8_A1";
        Format[Format["ETC2_RGBA8"] = 77] = "ETC2_RGBA8";
        Format[Format["ETC2_SRGB8_A8"] = 78] = "ETC2_SRGB8_A8";
        Format[Format["EAC_R11"] = 79] = "EAC_R11";
        Format[Format["EAC_R11SN"] = 80] = "EAC_R11SN";
        Format[Format["EAC_RG11"] = 81] = "EAC_RG11";
        Format[Format["EAC_RG11SN"] = 82] = "EAC_RG11SN";
        Format[Format["PVRTC_RGB2"] = 83] = "PVRTC_RGB2";
        Format[Format["PVRTC_RGBA2"] = 84] = "PVRTC_RGBA2";
        Format[Format["PVRTC_RGB4"] = 85] = "PVRTC_RGB4";
        Format[Format["PVRTC_RGBA4"] = 86] = "PVRTC_RGBA4";
        Format[Format["PVRTC2_2BPP"] = 87] = "PVRTC2_2BPP";
        Format[Format["PVRTC2_4BPP"] = 88] = "PVRTC2_4BPP";
        Format[Format["ASTC_RGBA_4X4"] = 89] = "ASTC_RGBA_4X4";
        Format[Format["ASTC_RGBA_5X4"] = 90] = "ASTC_RGBA_5X4";
        Format[Format["ASTC_RGBA_5X5"] = 91] = "ASTC_RGBA_5X5";
        Format[Format["ASTC_RGBA_6X5"] = 92] = "ASTC_RGBA_6X5";
        Format[Format["ASTC_RGBA_6X6"] = 93] = "ASTC_RGBA_6X6";
        Format[Format["ASTC_RGBA_8X5"] = 94] = "ASTC_RGBA_8X5";
        Format[Format["ASTC_RGBA_8X6"] = 95] = "ASTC_RGBA_8X6";
        Format[Format["ASTC_RGBA_8X8"] = 96] = "ASTC_RGBA_8X8";
        Format[Format["ASTC_RGBA_10X5"] = 97] = "ASTC_RGBA_10X5";
        Format[Format["ASTC_RGBA_10X6"] = 98] = "ASTC_RGBA_10X6";
        Format[Format["ASTC_RGBA_10X8"] = 99] = "ASTC_RGBA_10X8";
        Format[Format["ASTC_RGBA_10X10"] = 100] = "ASTC_RGBA_10X10";
        Format[Format["ASTC_RGBA_12X10"] = 101] = "ASTC_RGBA_12X10";
        Format[Format["ASTC_RGBA_12X12"] = 102] = "ASTC_RGBA_12X12";
        Format[Format["ASTC_SRGBA_4X4"] = 103] = "ASTC_SRGBA_4X4";
        Format[Format["ASTC_SRGBA_5X4"] = 104] = "ASTC_SRGBA_5X4";
        Format[Format["ASTC_SRGBA_5X5"] = 105] = "ASTC_SRGBA_5X5";
        Format[Format["ASTC_SRGBA_6X5"] = 106] = "ASTC_SRGBA_6X5";
        Format[Format["ASTC_SRGBA_6X6"] = 107] = "ASTC_SRGBA_6X6";
        Format[Format["ASTC_SRGBA_8X5"] = 108] = "ASTC_SRGBA_8X5";
        Format[Format["ASTC_SRGBA_8X6"] = 109] = "ASTC_SRGBA_8X6";
        Format[Format["ASTC_SRGBA_8X8"] = 110] = "ASTC_SRGBA_8X8";
        Format[Format["ASTC_SRGBA_10X5"] = 111] = "ASTC_SRGBA_10X5";
        Format[Format["ASTC_SRGBA_10X6"] = 112] = "ASTC_SRGBA_10X6";
        Format[Format["ASTC_SRGBA_10X8"] = 113] = "ASTC_SRGBA_10X8";
        Format[Format["ASTC_SRGBA_10X10"] = 114] = "ASTC_SRGBA_10X10";
        Format[Format["ASTC_SRGBA_12X10"] = 115] = "ASTC_SRGBA_12X10";
        Format[Format["ASTC_SRGBA_12X12"] = 116] = "ASTC_SRGBA_12X12";
        Format[Format["COUNT"] = 117] = "COUNT";
      })(Format || _export("Format", Format = {}));
      (function (FormatType) {
        FormatType[FormatType["NONE"] = 0] = "NONE";
        FormatType[FormatType["UNORM"] = 1] = "UNORM";
        FormatType[FormatType["SNORM"] = 2] = "SNORM";
        FormatType[FormatType["UINT"] = 3] = "UINT";
        FormatType[FormatType["INT"] = 4] = "INT";
        FormatType[FormatType["UFLOAT"] = 5] = "UFLOAT";
        FormatType[FormatType["FLOAT"] = 6] = "FLOAT";
      })(FormatType || _export("FormatType", FormatType = {}));
      (function (Type) {
        Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
        Type[Type["BOOL"] = 1] = "BOOL";
        Type[Type["BOOL2"] = 2] = "BOOL2";
        Type[Type["BOOL3"] = 3] = "BOOL3";
        Type[Type["BOOL4"] = 4] = "BOOL4";
        Type[Type["INT"] = 5] = "INT";
        Type[Type["INT2"] = 6] = "INT2";
        Type[Type["INT3"] = 7] = "INT3";
        Type[Type["INT4"] = 8] = "INT4";
        Type[Type["UINT"] = 9] = "UINT";
        Type[Type["UINT2"] = 10] = "UINT2";
        Type[Type["UINT3"] = 11] = "UINT3";
        Type[Type["UINT4"] = 12] = "UINT4";
        Type[Type["FLOAT"] = 13] = "FLOAT";
        Type[Type["FLOAT2"] = 14] = "FLOAT2";
        Type[Type["FLOAT3"] = 15] = "FLOAT3";
        Type[Type["FLOAT4"] = 16] = "FLOAT4";
        Type[Type["MAT2"] = 17] = "MAT2";
        Type[Type["MAT2X3"] = 18] = "MAT2X3";
        Type[Type["MAT2X4"] = 19] = "MAT2X4";
        Type[Type["MAT3X2"] = 20] = "MAT3X2";
        Type[Type["MAT3"] = 21] = "MAT3";
        Type[Type["MAT3X4"] = 22] = "MAT3X4";
        Type[Type["MAT4X2"] = 23] = "MAT4X2";
        Type[Type["MAT4X3"] = 24] = "MAT4X3";
        Type[Type["MAT4"] = 25] = "MAT4";
        Type[Type["SAMPLER1D"] = 26] = "SAMPLER1D";
        Type[Type["SAMPLER1D_ARRAY"] = 27] = "SAMPLER1D_ARRAY";
        Type[Type["SAMPLER2D"] = 28] = "SAMPLER2D";
        Type[Type["SAMPLER2D_ARRAY"] = 29] = "SAMPLER2D_ARRAY";
        Type[Type["SAMPLER3D"] = 30] = "SAMPLER3D";
        Type[Type["SAMPLER_CUBE"] = 31] = "SAMPLER_CUBE";
        Type[Type["SAMPLER"] = 32] = "SAMPLER";
        Type[Type["TEXTURE1D"] = 33] = "TEXTURE1D";
        Type[Type["TEXTURE1D_ARRAY"] = 34] = "TEXTURE1D_ARRAY";
        Type[Type["TEXTURE2D"] = 35] = "TEXTURE2D";
        Type[Type["TEXTURE2D_ARRAY"] = 36] = "TEXTURE2D_ARRAY";
        Type[Type["TEXTURE3D"] = 37] = "TEXTURE3D";
        Type[Type["TEXTURE_CUBE"] = 38] = "TEXTURE_CUBE";
        Type[Type["IMAGE1D"] = 39] = "IMAGE1D";
        Type[Type["IMAGE1D_ARRAY"] = 40] = "IMAGE1D_ARRAY";
        Type[Type["IMAGE2D"] = 41] = "IMAGE2D";
        Type[Type["IMAGE2D_ARRAY"] = 42] = "IMAGE2D_ARRAY";
        Type[Type["IMAGE3D"] = 43] = "IMAGE3D";
        Type[Type["IMAGE_CUBE"] = 44] = "IMAGE_CUBE";
        Type[Type["SUBPASS_INPUT"] = 45] = "SUBPASS_INPUT";
        Type[Type["COUNT"] = 46] = "COUNT";
      })(Type || _export("Type", Type = {}));
      (function (BufferUsageBit) {
        BufferUsageBit[BufferUsageBit["NONE"] = 0] = "NONE";
        BufferUsageBit[BufferUsageBit["TRANSFER_SRC"] = 1] = "TRANSFER_SRC";
        BufferUsageBit[BufferUsageBit["TRANSFER_DST"] = 2] = "TRANSFER_DST";
        BufferUsageBit[BufferUsageBit["INDEX"] = 4] = "INDEX";
        BufferUsageBit[BufferUsageBit["VERTEX"] = 8] = "VERTEX";
        BufferUsageBit[BufferUsageBit["UNIFORM"] = 16] = "UNIFORM";
        BufferUsageBit[BufferUsageBit["STORAGE"] = 32] = "STORAGE";
        BufferUsageBit[BufferUsageBit["INDIRECT"] = 64] = "INDIRECT";
      })(BufferUsageBit || _export("BufferUsageBit", BufferUsageBit = {}));
      (function (BufferFlagBit) {
        BufferFlagBit[BufferFlagBit["NONE"] = 0] = "NONE";
      })(BufferFlagBit || _export("BufferFlagBit", BufferFlagBit = {}));
      (function (MemoryAccessBit) {
        MemoryAccessBit[MemoryAccessBit["NONE"] = 0] = "NONE";
        MemoryAccessBit[MemoryAccessBit["READ_ONLY"] = 1] = "READ_ONLY";
        MemoryAccessBit[MemoryAccessBit["WRITE_ONLY"] = 2] = "WRITE_ONLY";
        MemoryAccessBit[MemoryAccessBit["READ_WRITE"] = 3] = "READ_WRITE";
      })(MemoryAccessBit || _export("MemoryAccessBit", MemoryAccessBit = {}));
      (function (MemoryUsageBit) {
        MemoryUsageBit[MemoryUsageBit["NONE"] = 0] = "NONE";
        MemoryUsageBit[MemoryUsageBit["DEVICE"] = 1] = "DEVICE";
        MemoryUsageBit[MemoryUsageBit["HOST"] = 2] = "HOST";
      })(MemoryUsageBit || _export("MemoryUsageBit", MemoryUsageBit = {}));
      (function (TextureType) {
        TextureType[TextureType["TEX1D"] = 0] = "TEX1D";
        TextureType[TextureType["TEX2D"] = 1] = "TEX2D";
        TextureType[TextureType["TEX3D"] = 2] = "TEX3D";
        TextureType[TextureType["CUBE"] = 3] = "CUBE";
        TextureType[TextureType["TEX1D_ARRAY"] = 4] = "TEX1D_ARRAY";
        TextureType[TextureType["TEX2D_ARRAY"] = 5] = "TEX2D_ARRAY";
      })(TextureType || _export("TextureType", TextureType = {}));
      (function (TextureUsageBit) {
        TextureUsageBit[TextureUsageBit["NONE"] = 0] = "NONE";
        TextureUsageBit[TextureUsageBit["TRANSFER_SRC"] = 1] = "TRANSFER_SRC";
        TextureUsageBit[TextureUsageBit["TRANSFER_DST"] = 2] = "TRANSFER_DST";
        TextureUsageBit[TextureUsageBit["SAMPLED"] = 4] = "SAMPLED";
        TextureUsageBit[TextureUsageBit["STORAGE"] = 8] = "STORAGE";
        TextureUsageBit[TextureUsageBit["COLOR_ATTACHMENT"] = 16] = "COLOR_ATTACHMENT";
        TextureUsageBit[TextureUsageBit["DEPTH_STENCIL_ATTACHMENT"] = 32] = "DEPTH_STENCIL_ATTACHMENT";
        TextureUsageBit[TextureUsageBit["INPUT_ATTACHMENT"] = 64] = "INPUT_ATTACHMENT";
      })(TextureUsageBit || _export("TextureUsageBit", TextureUsageBit = {}));
      (function (TextureFlagBit) {
        TextureFlagBit[TextureFlagBit["NONE"] = 0] = "NONE";
        TextureFlagBit[TextureFlagBit["GEN_MIPMAP"] = 1] = "GEN_MIPMAP";
        TextureFlagBit[TextureFlagBit["GENERAL_LAYOUT"] = 2] = "GENERAL_LAYOUT";
        TextureFlagBit[TextureFlagBit["EXTERNAL_OES"] = 4] = "EXTERNAL_OES";
        TextureFlagBit[TextureFlagBit["EXTERNAL_NORMAL"] = 8] = "EXTERNAL_NORMAL";
        TextureFlagBit[TextureFlagBit["LAZILY_ALLOCATED"] = 16] = "LAZILY_ALLOCATED";
        TextureFlagBit[TextureFlagBit["MUTABLE_VIEW_FORMAT"] = 64] = "MUTABLE_VIEW_FORMAT";
        TextureFlagBit[TextureFlagBit["MUTABLE_STORAGE"] = 128] = "MUTABLE_STORAGE";
      })(TextureFlagBit || _export("TextureFlagBit", TextureFlagBit = {}));
      (function (FormatFeatureBit) {
        FormatFeatureBit[FormatFeatureBit["NONE"] = 0] = "NONE";
        FormatFeatureBit[FormatFeatureBit["RENDER_TARGET"] = 1] = "RENDER_TARGET";
        FormatFeatureBit[FormatFeatureBit["SAMPLED_TEXTURE"] = 2] = "SAMPLED_TEXTURE";
        FormatFeatureBit[FormatFeatureBit["LINEAR_FILTER"] = 4] = "LINEAR_FILTER";
        FormatFeatureBit[FormatFeatureBit["STORAGE_TEXTURE"] = 8] = "STORAGE_TEXTURE";
        FormatFeatureBit[FormatFeatureBit["VERTEX_ATTRIBUTE"] = 16] = "VERTEX_ATTRIBUTE";
      })(FormatFeatureBit || _export("FormatFeatureBit", FormatFeatureBit = {}));
      (function (SampleCount) {
        SampleCount[SampleCount["X1"] = 1] = "X1";
        SampleCount[SampleCount["X2"] = 2] = "X2";
        SampleCount[SampleCount["X4"] = 4] = "X4";
        SampleCount[SampleCount["X8"] = 8] = "X8";
        SampleCount[SampleCount["X16"] = 16] = "X16";
        SampleCount[SampleCount["X32"] = 32] = "X32";
        SampleCount[SampleCount["X64"] = 64] = "X64";
      })(SampleCount || _export("SampleCount", SampleCount = {}));
      (function (VsyncMode) {
        VsyncMode[VsyncMode["OFF"] = 0] = "OFF";
        VsyncMode[VsyncMode["ON"] = 1] = "ON";
        VsyncMode[VsyncMode["RELAXED"] = 2] = "RELAXED";
        VsyncMode[VsyncMode["MAILBOX"] = 3] = "MAILBOX";
        VsyncMode[VsyncMode["HALF"] = 4] = "HALF";
      })(VsyncMode || _export("VsyncMode", VsyncMode = {}));
      (function (Filter) {
        Filter[Filter["NONE"] = 0] = "NONE";
        Filter[Filter["POINT"] = 1] = "POINT";
        Filter[Filter["LINEAR"] = 2] = "LINEAR";
        Filter[Filter["ANISOTROPIC"] = 3] = "ANISOTROPIC";
      })(Filter || _export("Filter", Filter = {}));
      (function (Address) {
        Address[Address["WRAP"] = 0] = "WRAP";
        Address[Address["MIRROR"] = 1] = "MIRROR";
        Address[Address["CLAMP"] = 2] = "CLAMP";
        Address[Address["BORDER"] = 3] = "BORDER";
      })(Address || _export("Address", Address = {}));
      (function (ComparisonFunc) {
        ComparisonFunc[ComparisonFunc["NEVER"] = 0] = "NEVER";
        ComparisonFunc[ComparisonFunc["LESS"] = 1] = "LESS";
        ComparisonFunc[ComparisonFunc["EQUAL"] = 2] = "EQUAL";
        ComparisonFunc[ComparisonFunc["LESS_EQUAL"] = 3] = "LESS_EQUAL";
        ComparisonFunc[ComparisonFunc["GREATER"] = 4] = "GREATER";
        ComparisonFunc[ComparisonFunc["NOT_EQUAL"] = 5] = "NOT_EQUAL";
        ComparisonFunc[ComparisonFunc["GREATER_EQUAL"] = 6] = "GREATER_EQUAL";
        ComparisonFunc[ComparisonFunc["ALWAYS"] = 7] = "ALWAYS";
      })(ComparisonFunc || _export("ComparisonFunc", ComparisonFunc = {}));
      (function (StencilOp) {
        StencilOp[StencilOp["ZERO"] = 0] = "ZERO";
        StencilOp[StencilOp["KEEP"] = 1] = "KEEP";
        StencilOp[StencilOp["REPLACE"] = 2] = "REPLACE";
        StencilOp[StencilOp["INCR"] = 3] = "INCR";
        StencilOp[StencilOp["DECR"] = 4] = "DECR";
        StencilOp[StencilOp["INVERT"] = 5] = "INVERT";
        StencilOp[StencilOp["INCR_WRAP"] = 6] = "INCR_WRAP";
        StencilOp[StencilOp["DECR_WRAP"] = 7] = "DECR_WRAP";
      })(StencilOp || _export("StencilOp", StencilOp = {}));
      (function (BlendFactor) {
        BlendFactor[BlendFactor["ZERO"] = 0] = "ZERO";
        BlendFactor[BlendFactor["ONE"] = 1] = "ONE";
        BlendFactor[BlendFactor["SRC_ALPHA"] = 2] = "SRC_ALPHA";
        BlendFactor[BlendFactor["DST_ALPHA"] = 3] = "DST_ALPHA";
        BlendFactor[BlendFactor["ONE_MINUS_SRC_ALPHA"] = 4] = "ONE_MINUS_SRC_ALPHA";
        BlendFactor[BlendFactor["ONE_MINUS_DST_ALPHA"] = 5] = "ONE_MINUS_DST_ALPHA";
        BlendFactor[BlendFactor["SRC_COLOR"] = 6] = "SRC_COLOR";
        BlendFactor[BlendFactor["DST_COLOR"] = 7] = "DST_COLOR";
        BlendFactor[BlendFactor["ONE_MINUS_SRC_COLOR"] = 8] = "ONE_MINUS_SRC_COLOR";
        BlendFactor[BlendFactor["ONE_MINUS_DST_COLOR"] = 9] = "ONE_MINUS_DST_COLOR";
        BlendFactor[BlendFactor["SRC_ALPHA_SATURATE"] = 10] = "SRC_ALPHA_SATURATE";
        BlendFactor[BlendFactor["CONSTANT_COLOR"] = 11] = "CONSTANT_COLOR";
        BlendFactor[BlendFactor["ONE_MINUS_CONSTANT_COLOR"] = 12] = "ONE_MINUS_CONSTANT_COLOR";
        BlendFactor[BlendFactor["CONSTANT_ALPHA"] = 13] = "CONSTANT_ALPHA";
        BlendFactor[BlendFactor["ONE_MINUS_CONSTANT_ALPHA"] = 14] = "ONE_MINUS_CONSTANT_ALPHA";
      })(BlendFactor || _export("BlendFactor", BlendFactor = {}));
      (function (BlendOp) {
        BlendOp[BlendOp["ADD"] = 0] = "ADD";
        BlendOp[BlendOp["SUB"] = 1] = "SUB";
        BlendOp[BlendOp["REV_SUB"] = 2] = "REV_SUB";
        BlendOp[BlendOp["MIN"] = 3] = "MIN";
        BlendOp[BlendOp["MAX"] = 4] = "MAX";
      })(BlendOp || _export("BlendOp", BlendOp = {}));
      (function (ColorMask) {
        ColorMask[ColorMask["NONE"] = 0] = "NONE";
        ColorMask[ColorMask["R"] = 1] = "R";
        ColorMask[ColorMask["G"] = 2] = "G";
        ColorMask[ColorMask["B"] = 4] = "B";
        ColorMask[ColorMask["A"] = 8] = "A";
        ColorMask[ColorMask["ALL"] = 15] = "ALL";
      })(ColorMask || _export("ColorMask", ColorMask = {}));
      (function (ShaderStageFlagBit) {
        ShaderStageFlagBit[ShaderStageFlagBit["NONE"] = 0] = "NONE";
        ShaderStageFlagBit[ShaderStageFlagBit["VERTEX"] = 1] = "VERTEX";
        ShaderStageFlagBit[ShaderStageFlagBit["CONTROL"] = 2] = "CONTROL";
        ShaderStageFlagBit[ShaderStageFlagBit["EVALUATION"] = 4] = "EVALUATION";
        ShaderStageFlagBit[ShaderStageFlagBit["GEOMETRY"] = 8] = "GEOMETRY";
        ShaderStageFlagBit[ShaderStageFlagBit["FRAGMENT"] = 16] = "FRAGMENT";
        ShaderStageFlagBit[ShaderStageFlagBit["COMPUTE"] = 32] = "COMPUTE";
        ShaderStageFlagBit[ShaderStageFlagBit["ALL"] = 63] = "ALL";
      })(ShaderStageFlagBit || _export("ShaderStageFlagBit", ShaderStageFlagBit = {}));
      (function (LoadOp) {
        LoadOp[LoadOp["LOAD"] = 0] = "LOAD";
        LoadOp[LoadOp["CLEAR"] = 1] = "CLEAR";
        LoadOp[LoadOp["DISCARD"] = 2] = "DISCARD";
      })(LoadOp || _export("LoadOp", LoadOp = {}));
      (function (StoreOp) {
        StoreOp[StoreOp["STORE"] = 0] = "STORE";
        StoreOp[StoreOp["DISCARD"] = 1] = "DISCARD";
      })(StoreOp || _export("StoreOp", StoreOp = {}));
      (function (AccessFlagBit) {
        AccessFlagBit[AccessFlagBit["NONE"] = 0] = "NONE";
        AccessFlagBit[AccessFlagBit["INDIRECT_BUFFER"] = 1] = "INDIRECT_BUFFER";
        AccessFlagBit[AccessFlagBit["INDEX_BUFFER"] = 2] = "INDEX_BUFFER";
        AccessFlagBit[AccessFlagBit["VERTEX_BUFFER"] = 4] = "VERTEX_BUFFER";
        AccessFlagBit[AccessFlagBit["VERTEX_SHADER_READ_UNIFORM_BUFFER"] = 8] = "VERTEX_SHADER_READ_UNIFORM_BUFFER";
        AccessFlagBit[AccessFlagBit["VERTEX_SHADER_READ_TEXTURE"] = 16] = "VERTEX_SHADER_READ_TEXTURE";
        AccessFlagBit[AccessFlagBit["VERTEX_SHADER_READ_OTHER"] = 32] = "VERTEX_SHADER_READ_OTHER";
        AccessFlagBit[AccessFlagBit["FRAGMENT_SHADER_READ_UNIFORM_BUFFER"] = 64] = "FRAGMENT_SHADER_READ_UNIFORM_BUFFER";
        AccessFlagBit[AccessFlagBit["FRAGMENT_SHADER_READ_TEXTURE"] = 128] = "FRAGMENT_SHADER_READ_TEXTURE";
        AccessFlagBit[AccessFlagBit["FRAGMENT_SHADER_READ_COLOR_INPUT_ATTACHMENT"] = 256] = "FRAGMENT_SHADER_READ_COLOR_INPUT_ATTACHMENT";
        AccessFlagBit[AccessFlagBit["FRAGMENT_SHADER_READ_DEPTH_STENCIL_INPUT_ATTACHMENT"] = 512] = "FRAGMENT_SHADER_READ_DEPTH_STENCIL_INPUT_ATTACHMENT";
        AccessFlagBit[AccessFlagBit["FRAGMENT_SHADER_READ_OTHER"] = 1024] = "FRAGMENT_SHADER_READ_OTHER";
        AccessFlagBit[AccessFlagBit["COLOR_ATTACHMENT_READ"] = 2048] = "COLOR_ATTACHMENT_READ";
        AccessFlagBit[AccessFlagBit["DEPTH_STENCIL_ATTACHMENT_READ"] = 4096] = "DEPTH_STENCIL_ATTACHMENT_READ";
        AccessFlagBit[AccessFlagBit["COMPUTE_SHADER_READ_UNIFORM_BUFFER"] = 8192] = "COMPUTE_SHADER_READ_UNIFORM_BUFFER";
        AccessFlagBit[AccessFlagBit["COMPUTE_SHADER_READ_TEXTURE"] = 16384] = "COMPUTE_SHADER_READ_TEXTURE";
        AccessFlagBit[AccessFlagBit["COMPUTE_SHADER_READ_OTHER"] = 32768] = "COMPUTE_SHADER_READ_OTHER";
        AccessFlagBit[AccessFlagBit["TRANSFER_READ"] = 65536] = "TRANSFER_READ";
        AccessFlagBit[AccessFlagBit["HOST_READ"] = 131072] = "HOST_READ";
        AccessFlagBit[AccessFlagBit["PRESENT"] = 262144] = "PRESENT";
        AccessFlagBit[AccessFlagBit["VERTEX_SHADER_WRITE"] = 524288] = "VERTEX_SHADER_WRITE";
        AccessFlagBit[AccessFlagBit["FRAGMENT_SHADER_WRITE"] = 1048576] = "FRAGMENT_SHADER_WRITE";
        AccessFlagBit[AccessFlagBit["COLOR_ATTACHMENT_WRITE"] = 2097152] = "COLOR_ATTACHMENT_WRITE";
        AccessFlagBit[AccessFlagBit["DEPTH_STENCIL_ATTACHMENT_WRITE"] = 4194304] = "DEPTH_STENCIL_ATTACHMENT_WRITE";
        AccessFlagBit[AccessFlagBit["COMPUTE_SHADER_WRITE"] = 8388608] = "COMPUTE_SHADER_WRITE";
        AccessFlagBit[AccessFlagBit["TRANSFER_WRITE"] = 16777216] = "TRANSFER_WRITE";
        AccessFlagBit[AccessFlagBit["HOST_PREINITIALIZED"] = 33554432] = "HOST_PREINITIALIZED";
        AccessFlagBit[AccessFlagBit["HOST_WRITE"] = 67108864] = "HOST_WRITE";
      })(AccessFlagBit || _export("AccessFlagBit", AccessFlagBit = {}));
      (function (ResolveMode) {
        ResolveMode[ResolveMode["NONE"] = 0] = "NONE";
        ResolveMode[ResolveMode["SAMPLE_ZERO"] = 1] = "SAMPLE_ZERO";
        ResolveMode[ResolveMode["AVERAGE"] = 2] = "AVERAGE";
        ResolveMode[ResolveMode["MIN"] = 3] = "MIN";
        ResolveMode[ResolveMode["MAX"] = 4] = "MAX";
      })(ResolveMode || _export("ResolveMode", ResolveMode = {}));
      (function (PipelineBindPoint) {
        PipelineBindPoint[PipelineBindPoint["GRAPHICS"] = 0] = "GRAPHICS";
        PipelineBindPoint[PipelineBindPoint["COMPUTE"] = 1] = "COMPUTE";
        PipelineBindPoint[PipelineBindPoint["RAY_TRACING"] = 2] = "RAY_TRACING";
      })(PipelineBindPoint || _export("PipelineBindPoint", PipelineBindPoint = {}));
      (function (PrimitiveMode) {
        PrimitiveMode[PrimitiveMode["POINT_LIST"] = 0] = "POINT_LIST";
        PrimitiveMode[PrimitiveMode["LINE_LIST"] = 1] = "LINE_LIST";
        PrimitiveMode[PrimitiveMode["LINE_STRIP"] = 2] = "LINE_STRIP";
        PrimitiveMode[PrimitiveMode["LINE_LOOP"] = 3] = "LINE_LOOP";
        PrimitiveMode[PrimitiveMode["LINE_LIST_ADJACENCY"] = 4] = "LINE_LIST_ADJACENCY";
        PrimitiveMode[PrimitiveMode["LINE_STRIP_ADJACENCY"] = 5] = "LINE_STRIP_ADJACENCY";
        PrimitiveMode[PrimitiveMode["ISO_LINE_LIST"] = 6] = "ISO_LINE_LIST";
        PrimitiveMode[PrimitiveMode["TRIANGLE_LIST"] = 7] = "TRIANGLE_LIST";
        PrimitiveMode[PrimitiveMode["TRIANGLE_STRIP"] = 8] = "TRIANGLE_STRIP";
        PrimitiveMode[PrimitiveMode["TRIANGLE_FAN"] = 9] = "TRIANGLE_FAN";
        PrimitiveMode[PrimitiveMode["TRIANGLE_LIST_ADJACENCY"] = 10] = "TRIANGLE_LIST_ADJACENCY";
        PrimitiveMode[PrimitiveMode["TRIANGLE_STRIP_ADJACENCY"] = 11] = "TRIANGLE_STRIP_ADJACENCY";
        PrimitiveMode[PrimitiveMode["TRIANGLE_PATCH_ADJACENCY"] = 12] = "TRIANGLE_PATCH_ADJACENCY";
        PrimitiveMode[PrimitiveMode["QUAD_PATCH_LIST"] = 13] = "QUAD_PATCH_LIST";
      })(PrimitiveMode || _export("PrimitiveMode", PrimitiveMode = {}));
      (function (PolygonMode) {
        PolygonMode[PolygonMode["FILL"] = 0] = "FILL";
        PolygonMode[PolygonMode["POINT"] = 1] = "POINT";
        PolygonMode[PolygonMode["LINE"] = 2] = "LINE";
      })(PolygonMode || _export("PolygonMode", PolygonMode = {}));
      (function (ShadeModel) {
        ShadeModel[ShadeModel["GOURAND"] = 0] = "GOURAND";
        ShadeModel[ShadeModel["FLAT"] = 1] = "FLAT";
      })(ShadeModel || _export("ShadeModel", ShadeModel = {}));
      (function (CullMode) {
        CullMode[CullMode["NONE"] = 0] = "NONE";
        CullMode[CullMode["FRONT"] = 1] = "FRONT";
        CullMode[CullMode["BACK"] = 2] = "BACK";
      })(CullMode || _export("CullMode", CullMode = {}));
      (function (DynamicStateFlagBit) {
        DynamicStateFlagBit[DynamicStateFlagBit["NONE"] = 0] = "NONE";
        DynamicStateFlagBit[DynamicStateFlagBit["LINE_WIDTH"] = 1] = "LINE_WIDTH";
        DynamicStateFlagBit[DynamicStateFlagBit["DEPTH_BIAS"] = 2] = "DEPTH_BIAS";
        DynamicStateFlagBit[DynamicStateFlagBit["BLEND_CONSTANTS"] = 4] = "BLEND_CONSTANTS";
        DynamicStateFlagBit[DynamicStateFlagBit["DEPTH_BOUNDS"] = 8] = "DEPTH_BOUNDS";
        DynamicStateFlagBit[DynamicStateFlagBit["STENCIL_WRITE_MASK"] = 16] = "STENCIL_WRITE_MASK";
        DynamicStateFlagBit[DynamicStateFlagBit["STENCIL_COMPARE_MASK"] = 32] = "STENCIL_COMPARE_MASK";
      })(DynamicStateFlagBit || _export("DynamicStateFlagBit", DynamicStateFlagBit = {}));
      (function (StencilFace) {
        StencilFace[StencilFace["FRONT"] = 1] = "FRONT";
        StencilFace[StencilFace["BACK"] = 2] = "BACK";
        StencilFace[StencilFace["ALL"] = 3] = "ALL";
      })(StencilFace || _export("StencilFace", StencilFace = {}));
      (function (DescriptorType) {
        DescriptorType[DescriptorType["UNKNOWN"] = 0] = "UNKNOWN";
        DescriptorType[DescriptorType["UNIFORM_BUFFER"] = 1] = "UNIFORM_BUFFER";
        DescriptorType[DescriptorType["DYNAMIC_UNIFORM_BUFFER"] = 2] = "DYNAMIC_UNIFORM_BUFFER";
        DescriptorType[DescriptorType["STORAGE_BUFFER"] = 4] = "STORAGE_BUFFER";
        DescriptorType[DescriptorType["DYNAMIC_STORAGE_BUFFER"] = 8] = "DYNAMIC_STORAGE_BUFFER";
        DescriptorType[DescriptorType["SAMPLER_TEXTURE"] = 16] = "SAMPLER_TEXTURE";
        DescriptorType[DescriptorType["SAMPLER"] = 32] = "SAMPLER";
        DescriptorType[DescriptorType["TEXTURE"] = 64] = "TEXTURE";
        DescriptorType[DescriptorType["STORAGE_IMAGE"] = 128] = "STORAGE_IMAGE";
        DescriptorType[DescriptorType["INPUT_ATTACHMENT"] = 256] = "INPUT_ATTACHMENT";
      })(DescriptorType || _export("DescriptorType", DescriptorType = {}));
      (function (QueueType) {
        QueueType[QueueType["GRAPHICS"] = 0] = "GRAPHICS";
        QueueType[QueueType["COMPUTE"] = 1] = "COMPUTE";
        QueueType[QueueType["TRANSFER"] = 2] = "TRANSFER";
      })(QueueType || _export("QueueType", QueueType = {}));
      (function (QueryType) {
        QueryType[QueryType["OCCLUSION"] = 0] = "OCCLUSION";
        QueryType[QueryType["PIPELINE_STATISTICS"] = 1] = "PIPELINE_STATISTICS";
        QueryType[QueryType["TIMESTAMP"] = 2] = "TIMESTAMP";
      })(QueryType || _export("QueryType", QueryType = {}));
      (function (CommandBufferType) {
        CommandBufferType[CommandBufferType["PRIMARY"] = 0] = "PRIMARY";
        CommandBufferType[CommandBufferType["SECONDARY"] = 1] = "SECONDARY";
      })(CommandBufferType || _export("CommandBufferType", CommandBufferType = {}));
      (function (ClearFlagBit) {
        ClearFlagBit[ClearFlagBit["NONE"] = 0] = "NONE";
        ClearFlagBit[ClearFlagBit["COLOR"] = 1] = "COLOR";
        ClearFlagBit[ClearFlagBit["DEPTH"] = 2] = "DEPTH";
        ClearFlagBit[ClearFlagBit["STENCIL"] = 4] = "STENCIL";
        ClearFlagBit[ClearFlagBit["DEPTH_STENCIL"] = 6] = "DEPTH_STENCIL";
        ClearFlagBit[ClearFlagBit["ALL"] = 7] = "ALL";
      })(ClearFlagBit || _export("ClearFlagBit", ClearFlagBit = {}));
      (function (BarrierType) {
        BarrierType[BarrierType["FULL"] = 0] = "FULL";
        BarrierType[BarrierType["SPLIT_BEGIN"] = 1] = "SPLIT_BEGIN";
        BarrierType[BarrierType["SPLIT_END"] = 2] = "SPLIT_END";
      })(BarrierType || _export("BarrierType", BarrierType = {}));
      (function (PassType) {
        PassType[PassType["RASTER"] = 0] = "RASTER";
        PassType[PassType["COMPUTE"] = 1] = "COMPUTE";
        PassType[PassType["COPY"] = 2] = "COPY";
        PassType[PassType["MOVE"] = 3] = "MOVE";
        PassType[PassType["RAYTRACE"] = 4] = "RAYTRACE";
        PassType[PassType["PRESENT"] = 5] = "PRESENT";
      })(PassType || _export("PassType", PassType = {}));
      _export("Size", Size = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function Size(x, y, z) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (z === void 0) {
            z = 0;
          }
          this.x = x;
          this.y = y;
          this.z = z;
        }
        var _proto = Size.prototype;
        _proto.copy = function copy(info) {
          this.x = info.x;
          this.y = info.y;
          this.z = info.z;
          return this;
        };
        return Size;
      }());
      _export("DeviceCaps", DeviceCaps = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DeviceCaps(maxVertexAttributes, maxVertexUniformVectors, maxFragmentUniformVectors, maxTextureUnits, maxImageUnits, maxVertexTextureUnits, maxColorRenderTargets, maxShaderStorageBufferBindings, maxShaderStorageBlockSize, maxUniformBufferBindings, maxUniformBlockSize, maxTextureSize, maxCubeMapTextureSize, maxArrayTextureLayers, max3DTextureSize, uboOffsetAlignment, maxComputeSharedMemorySize, maxComputeWorkGroupInvocations, maxComputeWorkGroupSize, maxComputeWorkGroupCount, supportQuery, clipSpaceMinZ, screenSpaceSignY, clipSpaceSignY) {
          if (maxVertexAttributes === void 0) {
            maxVertexAttributes = 0;
          }
          if (maxVertexUniformVectors === void 0) {
            maxVertexUniformVectors = 0;
          }
          if (maxFragmentUniformVectors === void 0) {
            maxFragmentUniformVectors = 0;
          }
          if (maxTextureUnits === void 0) {
            maxTextureUnits = 0;
          }
          if (maxImageUnits === void 0) {
            maxImageUnits = 0;
          }
          if (maxVertexTextureUnits === void 0) {
            maxVertexTextureUnits = 0;
          }
          if (maxColorRenderTargets === void 0) {
            maxColorRenderTargets = 0;
          }
          if (maxShaderStorageBufferBindings === void 0) {
            maxShaderStorageBufferBindings = 0;
          }
          if (maxShaderStorageBlockSize === void 0) {
            maxShaderStorageBlockSize = 0;
          }
          if (maxUniformBufferBindings === void 0) {
            maxUniformBufferBindings = 0;
          }
          if (maxUniformBlockSize === void 0) {
            maxUniformBlockSize = 0;
          }
          if (maxTextureSize === void 0) {
            maxTextureSize = 0;
          }
          if (maxCubeMapTextureSize === void 0) {
            maxCubeMapTextureSize = 0;
          }
          if (maxArrayTextureLayers === void 0) {
            maxArrayTextureLayers = 0;
          }
          if (max3DTextureSize === void 0) {
            max3DTextureSize = 0;
          }
          if (uboOffsetAlignment === void 0) {
            uboOffsetAlignment = 1;
          }
          if (maxComputeSharedMemorySize === void 0) {
            maxComputeSharedMemorySize = 0;
          }
          if (maxComputeWorkGroupInvocations === void 0) {
            maxComputeWorkGroupInvocations = 0;
          }
          if (maxComputeWorkGroupSize === void 0) {
            maxComputeWorkGroupSize = new Size();
          }
          if (maxComputeWorkGroupCount === void 0) {
            maxComputeWorkGroupCount = new Size();
          }
          if (supportQuery === void 0) {
            supportQuery = false;
          }
          if (clipSpaceMinZ === void 0) {
            clipSpaceMinZ = -1;
          }
          if (screenSpaceSignY === void 0) {
            screenSpaceSignY = 1;
          }
          if (clipSpaceSignY === void 0) {
            clipSpaceSignY = 1;
          }
          this.maxVertexAttributes = maxVertexAttributes;
          this.maxVertexUniformVectors = maxVertexUniformVectors;
          this.maxFragmentUniformVectors = maxFragmentUniformVectors;
          this.maxTextureUnits = maxTextureUnits;
          this.maxImageUnits = maxImageUnits;
          this.maxVertexTextureUnits = maxVertexTextureUnits;
          this.maxColorRenderTargets = maxColorRenderTargets;
          this.maxShaderStorageBufferBindings = maxShaderStorageBufferBindings;
          this.maxShaderStorageBlockSize = maxShaderStorageBlockSize;
          this.maxUniformBufferBindings = maxUniformBufferBindings;
          this.maxUniformBlockSize = maxUniformBlockSize;
          this.maxTextureSize = maxTextureSize;
          this.maxCubeMapTextureSize = maxCubeMapTextureSize;
          this.maxArrayTextureLayers = maxArrayTextureLayers;
          this.max3DTextureSize = max3DTextureSize;
          this.uboOffsetAlignment = uboOffsetAlignment;
          this.maxComputeSharedMemorySize = maxComputeSharedMemorySize;
          this.maxComputeWorkGroupInvocations = maxComputeWorkGroupInvocations;
          this.maxComputeWorkGroupSize = maxComputeWorkGroupSize;
          this.maxComputeWorkGroupCount = maxComputeWorkGroupCount;
          this.supportQuery = supportQuery;
          this.clipSpaceMinZ = clipSpaceMinZ;
          this.screenSpaceSignY = screenSpaceSignY;
          this.clipSpaceSignY = clipSpaceSignY;
        }
        var _proto2 = DeviceCaps.prototype;
        _proto2.copy = function copy(info) {
          this.maxVertexAttributes = info.maxVertexAttributes;
          this.maxVertexUniformVectors = info.maxVertexUniformVectors;
          this.maxFragmentUniformVectors = info.maxFragmentUniformVectors;
          this.maxTextureUnits = info.maxTextureUnits;
          this.maxImageUnits = info.maxImageUnits;
          this.maxVertexTextureUnits = info.maxVertexTextureUnits;
          this.maxColorRenderTargets = info.maxColorRenderTargets;
          this.maxShaderStorageBufferBindings = info.maxShaderStorageBufferBindings;
          this.maxShaderStorageBlockSize = info.maxShaderStorageBlockSize;
          this.maxUniformBufferBindings = info.maxUniformBufferBindings;
          this.maxUniformBlockSize = info.maxUniformBlockSize;
          this.maxTextureSize = info.maxTextureSize;
          this.maxCubeMapTextureSize = info.maxCubeMapTextureSize;
          this.maxArrayTextureLayers = info.maxArrayTextureLayers;
          this.max3DTextureSize = info.max3DTextureSize;
          this.uboOffsetAlignment = info.uboOffsetAlignment;
          this.maxComputeSharedMemorySize = info.maxComputeSharedMemorySize;
          this.maxComputeWorkGroupInvocations = info.maxComputeWorkGroupInvocations;
          this.maxComputeWorkGroupSize.copy(info.maxComputeWorkGroupSize);
          this.maxComputeWorkGroupCount.copy(info.maxComputeWorkGroupCount);
          this.supportQuery = info.supportQuery;
          this.clipSpaceMinZ = info.clipSpaceMinZ;
          this.screenSpaceSignY = info.screenSpaceSignY;
          this.clipSpaceSignY = info.clipSpaceSignY;
          return this;
        };
        return DeviceCaps;
      }());
      _export("DeviceOptions", DeviceOptions = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DeviceOptions(enableBarrierDeduce) {
          if (enableBarrierDeduce === void 0) {
            enableBarrierDeduce = true;
          }
          this.enableBarrierDeduce = enableBarrierDeduce;
        }
        var _proto3 = DeviceOptions.prototype;
        _proto3.copy = function copy(info) {
          this.enableBarrierDeduce = info.enableBarrierDeduce;
          return this;
        };
        return DeviceOptions;
      }());
      _export("Offset", Offset = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function Offset(x, y, z) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (z === void 0) {
            z = 0;
          }
          this.x = x;
          this.y = y;
          this.z = z;
        }
        var _proto4 = Offset.prototype;
        _proto4.copy = function copy(info) {
          this.x = info.x;
          this.y = info.y;
          this.z = info.z;
          return this;
        };
        return Offset;
      }());
      _export("Rect", Rect = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function Rect(x, y, width, height) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (width === void 0) {
            width = 0;
          }
          if (height === void 0) {
            height = 0;
          }
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
        }
        var _proto5 = Rect.prototype;
        _proto5.copy = function copy(info) {
          this.x = info.x;
          this.y = info.y;
          this.width = info.width;
          this.height = info.height;
          return this;
        };
        return Rect;
      }());
      _export("Extent", Extent = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function Extent(width, height, depth) {
          if (width === void 0) {
            width = 0;
          }
          if (height === void 0) {
            height = 0;
          }
          if (depth === void 0) {
            depth = 1;
          }
          this.width = width;
          this.height = height;
          this.depth = depth;
        }
        var _proto6 = Extent.prototype;
        _proto6.copy = function copy(info) {
          this.width = info.width;
          this.height = info.height;
          this.depth = info.depth;
          return this;
        };
        return Extent;
      }());
      _export("TextureSubresLayers", TextureSubresLayers = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function TextureSubresLayers(mipLevel, baseArrayLayer, layerCount) {
          if (mipLevel === void 0) {
            mipLevel = 0;
          }
          if (baseArrayLayer === void 0) {
            baseArrayLayer = 0;
          }
          if (layerCount === void 0) {
            layerCount = 1;
          }
          this.mipLevel = mipLevel;
          this.baseArrayLayer = baseArrayLayer;
          this.layerCount = layerCount;
        }
        var _proto7 = TextureSubresLayers.prototype;
        _proto7.copy = function copy(info) {
          this.mipLevel = info.mipLevel;
          this.baseArrayLayer = info.baseArrayLayer;
          this.layerCount = info.layerCount;
          return this;
        };
        return TextureSubresLayers;
      }());
      _export("TextureSubresRange", TextureSubresRange = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function TextureSubresRange(baseMipLevel, levelCount, baseArrayLayer, layerCount) {
          if (baseMipLevel === void 0) {
            baseMipLevel = 0;
          }
          if (levelCount === void 0) {
            levelCount = 1;
          }
          if (baseArrayLayer === void 0) {
            baseArrayLayer = 0;
          }
          if (layerCount === void 0) {
            layerCount = 1;
          }
          this.baseMipLevel = baseMipLevel;
          this.levelCount = levelCount;
          this.baseArrayLayer = baseArrayLayer;
          this.layerCount = layerCount;
        }
        var _proto8 = TextureSubresRange.prototype;
        _proto8.copy = function copy(info) {
          this.baseMipLevel = info.baseMipLevel;
          this.levelCount = info.levelCount;
          this.baseArrayLayer = info.baseArrayLayer;
          this.layerCount = info.layerCount;
          return this;
        };
        return TextureSubresRange;
      }());
      _export("TextureCopy", TextureCopy = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function TextureCopy(srcSubres, srcOffset, dstSubres, dstOffset, extent) {
          if (srcSubres === void 0) {
            srcSubres = new TextureSubresLayers();
          }
          if (srcOffset === void 0) {
            srcOffset = new Offset();
          }
          if (dstSubres === void 0) {
            dstSubres = new TextureSubresLayers();
          }
          if (dstOffset === void 0) {
            dstOffset = new Offset();
          }
          if (extent === void 0) {
            extent = new Extent();
          }
          this.srcSubres = srcSubres;
          this.srcOffset = srcOffset;
          this.dstSubres = dstSubres;
          this.dstOffset = dstOffset;
          this.extent = extent;
        }
        var _proto9 = TextureCopy.prototype;
        _proto9.copy = function copy(info) {
          this.srcSubres.copy(info.srcSubres);
          this.srcOffset.copy(info.srcOffset);
          this.dstSubres.copy(info.dstSubres);
          this.dstOffset.copy(info.dstOffset);
          this.extent.copy(info.extent);
          return this;
        };
        return TextureCopy;
      }());
      _export("TextureBlit", TextureBlit = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function TextureBlit(srcSubres, srcOffset, srcExtent, dstSubres, dstOffset, dstExtent) {
          if (srcSubres === void 0) {
            srcSubres = new TextureSubresLayers();
          }
          if (srcOffset === void 0) {
            srcOffset = new Offset();
          }
          if (srcExtent === void 0) {
            srcExtent = new Extent();
          }
          if (dstSubres === void 0) {
            dstSubres = new TextureSubresLayers();
          }
          if (dstOffset === void 0) {
            dstOffset = new Offset();
          }
          if (dstExtent === void 0) {
            dstExtent = new Extent();
          }
          this.srcSubres = srcSubres;
          this.srcOffset = srcOffset;
          this.srcExtent = srcExtent;
          this.dstSubres = dstSubres;
          this.dstOffset = dstOffset;
          this.dstExtent = dstExtent;
        }
        var _proto10 = TextureBlit.prototype;
        _proto10.copy = function copy(info) {
          this.srcSubres.copy(info.srcSubres);
          this.srcOffset.copy(info.srcOffset);
          this.srcExtent.copy(info.srcExtent);
          this.dstSubres.copy(info.dstSubres);
          this.dstOffset.copy(info.dstOffset);
          this.dstExtent.copy(info.dstExtent);
          return this;
        };
        return TextureBlit;
      }());
      _export("BufferTextureCopy", BufferTextureCopy = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function BufferTextureCopy(buffOffset, buffStride, buffTexHeight, texOffset, texExtent, texSubres) {
          if (buffOffset === void 0) {
            buffOffset = 0;
          }
          if (buffStride === void 0) {
            buffStride = 0;
          }
          if (buffTexHeight === void 0) {
            buffTexHeight = 0;
          }
          if (texOffset === void 0) {
            texOffset = new Offset();
          }
          if (texExtent === void 0) {
            texExtent = new Extent();
          }
          if (texSubres === void 0) {
            texSubres = new TextureSubresLayers();
          }
          this.buffOffset = buffOffset;
          this.buffStride = buffStride;
          this.buffTexHeight = buffTexHeight;
          this.texOffset = texOffset;
          this.texExtent = texExtent;
          this.texSubres = texSubres;
        }
        var _proto11 = BufferTextureCopy.prototype;
        _proto11.copy = function copy(info) {
          this.buffOffset = info.buffOffset;
          this.buffStride = info.buffStride;
          this.buffTexHeight = info.buffTexHeight;
          this.texOffset.copy(info.texOffset);
          this.texExtent.copy(info.texExtent);
          this.texSubres.copy(info.texSubres);
          return this;
        };
        return BufferTextureCopy;
      }());
      _export("Viewport", Viewport = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function Viewport(left, top, width, height, minDepth, maxDepth) {
          if (left === void 0) {
            left = 0;
          }
          if (top === void 0) {
            top = 0;
          }
          if (width === void 0) {
            width = 0;
          }
          if (height === void 0) {
            height = 0;
          }
          if (minDepth === void 0) {
            minDepth = 0;
          }
          if (maxDepth === void 0) {
            maxDepth = 1;
          }
          this.left = left;
          this.top = top;
          this.width = width;
          this.height = height;
          this.minDepth = minDepth;
          this.maxDepth = maxDepth;
        }
        var _proto12 = Viewport.prototype;
        _proto12.copy = function copy(info) {
          this.left = info.left;
          this.top = info.top;
          this.width = info.width;
          this.height = info.height;
          this.minDepth = info.minDepth;
          this.maxDepth = info.maxDepth;
          return this;
        };
        _proto12.reset = function reset() {
          this.left = 0;
          this.top = 0;
          this.width = 0;
          this.height = 0;
          this.minDepth = 0;
          this.maxDepth = 1;
        };
        return Viewport;
      }());
      _export("Color", Color = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function Color(x, y, z, w) {
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
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        }
        var _proto13 = Color.prototype;
        _proto13.copy = function copy(info) {
          this.x = info.x;
          this.y = info.y;
          this.z = info.z;
          this.w = info.w;
          return this;
        };
        _proto13.set = function set(x, y, z, w) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
          return this;
        };
        _proto13.reset = function reset() {
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.w = 0;
        };
        return Color;
      }());
      _export("BindingMappingInfo", BindingMappingInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function BindingMappingInfo(maxBlockCounts, maxSamplerTextureCounts, maxSamplerCounts, maxTextureCounts, maxBufferCounts, maxImageCounts, maxSubpassInputCounts, setIndices) {
          if (maxBlockCounts === void 0) {
            maxBlockCounts = [0];
          }
          if (maxSamplerTextureCounts === void 0) {
            maxSamplerTextureCounts = [0];
          }
          if (maxSamplerCounts === void 0) {
            maxSamplerCounts = [0];
          }
          if (maxTextureCounts === void 0) {
            maxTextureCounts = [0];
          }
          if (maxBufferCounts === void 0) {
            maxBufferCounts = [0];
          }
          if (maxImageCounts === void 0) {
            maxImageCounts = [0];
          }
          if (maxSubpassInputCounts === void 0) {
            maxSubpassInputCounts = [0];
          }
          if (setIndices === void 0) {
            setIndices = [0];
          }
          this.maxBlockCounts = maxBlockCounts;
          this.maxSamplerTextureCounts = maxSamplerTextureCounts;
          this.maxSamplerCounts = maxSamplerCounts;
          this.maxTextureCounts = maxTextureCounts;
          this.maxBufferCounts = maxBufferCounts;
          this.maxImageCounts = maxImageCounts;
          this.maxSubpassInputCounts = maxSubpassInputCounts;
          this.setIndices = setIndices;
        }
        var _proto14 = BindingMappingInfo.prototype;
        _proto14.copy = function copy(info) {
          this.maxBlockCounts = info.maxBlockCounts.slice();
          this.maxSamplerTextureCounts = info.maxSamplerTextureCounts.slice();
          this.maxSamplerCounts = info.maxSamplerCounts.slice();
          this.maxTextureCounts = info.maxTextureCounts.slice();
          this.maxBufferCounts = info.maxBufferCounts.slice();
          this.maxImageCounts = info.maxImageCounts.slice();
          this.maxSubpassInputCounts = info.maxSubpassInputCounts.slice();
          this.setIndices = info.setIndices.slice();
          return this;
        };
        return BindingMappingInfo;
      }());
      _export("SwapchainInfo", SwapchainInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function SwapchainInfo(windowId, windowHandle, vsyncMode, width, height) {
          if (windowId === void 0) {
            windowId = 0;
          }
          if (windowHandle === void 0) {
            windowHandle = null;
          }
          if (vsyncMode === void 0) {
            vsyncMode = VsyncMode.ON;
          }
          if (width === void 0) {
            width = 0;
          }
          if (height === void 0) {
            height = 0;
          }
          this.windowId = windowId;
          this.windowHandle = windowHandle;
          this.vsyncMode = vsyncMode;
          this.width = width;
          this.height = height;
        }
        var _proto15 = SwapchainInfo.prototype;
        _proto15.copy = function copy(info) {
          this.windowId = info.windowId;
          this.windowHandle = info.windowHandle;
          this.vsyncMode = info.vsyncMode;
          this.width = info.width;
          this.height = info.height;
          return this;
        };
        return SwapchainInfo;
      }());
      _export("DeviceInfo", DeviceInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DeviceInfo(bindingMappingInfo) {
          if (bindingMappingInfo === void 0) {
            bindingMappingInfo = new BindingMappingInfo();
          }
          this.bindingMappingInfo = bindingMappingInfo;
        }
        var _proto16 = DeviceInfo.prototype;
        _proto16.copy = function copy(info) {
          this.bindingMappingInfo.copy(info.bindingMappingInfo);
          return this;
        };
        return DeviceInfo;
      }());
      _export("BufferInfo", BufferInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function BufferInfo(usage, memUsage, size, stride, flags) {
          if (usage === void 0) {
            usage = BufferUsageBit.NONE;
          }
          if (memUsage === void 0) {
            memUsage = MemoryUsageBit.NONE;
          }
          if (size === void 0) {
            size = 0;
          }
          if (stride === void 0) {
            stride = 1;
          }
          if (flags === void 0) {
            flags = BufferFlagBit.NONE;
          }
          this.usage = usage;
          this.memUsage = memUsage;
          this.size = size;
          this.stride = stride;
          this.flags = flags;
        }
        var _proto17 = BufferInfo.prototype;
        _proto17.copy = function copy(info) {
          this.usage = info.usage;
          this.memUsage = info.memUsage;
          this.size = info.size;
          this.stride = info.stride;
          this.flags = info.flags;
          return this;
        };
        return BufferInfo;
      }());
      _export("BufferViewInfo", BufferViewInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function BufferViewInfo(buffer, offset, range) {
          if (buffer === void 0) {
            buffer = null;
          }
          if (offset === void 0) {
            offset = 0;
          }
          if (range === void 0) {
            range = 0;
          }
          this.buffer = buffer;
          this.offset = offset;
          this.range = range;
        }
        var _proto18 = BufferViewInfo.prototype;
        _proto18.copy = function copy(info) {
          this.buffer = info.buffer;
          this.offset = info.offset;
          this.range = info.range;
          return this;
        };
        return BufferViewInfo;
      }());
      _export("DrawInfo", DrawInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DrawInfo(vertexCount, firstVertex, indexCount, firstIndex, vertexOffset, instanceCount, firstInstance) {
          if (vertexCount === void 0) {
            vertexCount = 0;
          }
          if (firstVertex === void 0) {
            firstVertex = 0;
          }
          if (indexCount === void 0) {
            indexCount = 0;
          }
          if (firstIndex === void 0) {
            firstIndex = 0;
          }
          if (vertexOffset === void 0) {
            vertexOffset = 0;
          }
          if (instanceCount === void 0) {
            instanceCount = 0;
          }
          if (firstInstance === void 0) {
            firstInstance = 0;
          }
          this.vertexCount = vertexCount;
          this.firstVertex = firstVertex;
          this.indexCount = indexCount;
          this.firstIndex = firstIndex;
          this.vertexOffset = vertexOffset;
          this.instanceCount = instanceCount;
          this.firstInstance = firstInstance;
        }
        var _proto19 = DrawInfo.prototype;
        _proto19.copy = function copy(info) {
          this.vertexCount = info.vertexCount;
          this.firstVertex = info.firstVertex;
          this.indexCount = info.indexCount;
          this.firstIndex = info.firstIndex;
          this.vertexOffset = info.vertexOffset;
          this.instanceCount = info.instanceCount;
          this.firstInstance = info.firstInstance;
          return this;
        };
        return DrawInfo;
      }());
      _export("DispatchInfo", DispatchInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DispatchInfo(groupCountX, groupCountY, groupCountZ, indirectBuffer, indirectOffset) {
          if (groupCountX === void 0) {
            groupCountX = 0;
          }
          if (groupCountY === void 0) {
            groupCountY = 0;
          }
          if (groupCountZ === void 0) {
            groupCountZ = 0;
          }
          if (indirectBuffer === void 0) {
            indirectBuffer = null;
          }
          if (indirectOffset === void 0) {
            indirectOffset = 0;
          }
          this.groupCountX = groupCountX;
          this.groupCountY = groupCountY;
          this.groupCountZ = groupCountZ;
          this.indirectBuffer = indirectBuffer;
          this.indirectOffset = indirectOffset;
        }
        var _proto20 = DispatchInfo.prototype;
        _proto20.copy = function copy(info) {
          this.groupCountX = info.groupCountX;
          this.groupCountY = info.groupCountY;
          this.groupCountZ = info.groupCountZ;
          this.indirectBuffer = info.indirectBuffer;
          this.indirectOffset = info.indirectOffset;
          return this;
        };
        return DispatchInfo;
      }());
      _export("IndirectBuffer", IndirectBuffer = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function IndirectBuffer(drawInfos) {
          if (drawInfos === void 0) {
            drawInfos = [];
          }
          this.drawInfos = drawInfos;
        }
        var _proto21 = IndirectBuffer.prototype;
        _proto21.copy = function copy(info) {
          deepCopy(this.drawInfos, info.drawInfos, DrawInfo);
          return this;
        };
        return IndirectBuffer;
      }());
      _export("TextureInfo", TextureInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function TextureInfo(type, usage, format, width, height, flags, layerCount, levelCount, samples, depth, externalRes) {
          if (type === void 0) {
            type = TextureType.TEX2D;
          }
          if (usage === void 0) {
            usage = TextureUsageBit.NONE;
          }
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          if (width === void 0) {
            width = 0;
          }
          if (height === void 0) {
            height = 0;
          }
          if (flags === void 0) {
            flags = TextureFlagBit.NONE;
          }
          if (layerCount === void 0) {
            layerCount = 1;
          }
          if (levelCount === void 0) {
            levelCount = 1;
          }
          if (samples === void 0) {
            samples = SampleCount.X1;
          }
          if (depth === void 0) {
            depth = 1;
          }
          if (externalRes === void 0) {
            externalRes = 0;
          }
          this.type = type;
          this.usage = usage;
          this.format = format;
          this.width = width;
          this.height = height;
          this.flags = flags;
          this.layerCount = layerCount;
          this.levelCount = levelCount;
          this.samples = samples;
          this.depth = depth;
          this.externalRes = externalRes;
        }
        var _proto22 = TextureInfo.prototype;
        _proto22.copy = function copy(info) {
          this.type = info.type;
          this.usage = info.usage;
          this.format = info.format;
          this.width = info.width;
          this.height = info.height;
          this.flags = info.flags;
          this.layerCount = info.layerCount;
          this.levelCount = info.levelCount;
          this.samples = info.samples;
          this.depth = info.depth;
          this.externalRes = info.externalRes;
          return this;
        };
        return TextureInfo;
      }());
      _export("TextureViewInfo", TextureViewInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function TextureViewInfo(texture, type, format, baseLevel, levelCount, baseLayer, layerCount) {
          if (texture === void 0) {
            texture = null;
          }
          if (type === void 0) {
            type = TextureType.TEX2D;
          }
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          if (baseLevel === void 0) {
            baseLevel = 0;
          }
          if (levelCount === void 0) {
            levelCount = 1;
          }
          if (baseLayer === void 0) {
            baseLayer = 0;
          }
          if (layerCount === void 0) {
            layerCount = 1;
          }
          this.texture = texture;
          this.type = type;
          this.format = format;
          this.baseLevel = baseLevel;
          this.levelCount = levelCount;
          this.baseLayer = baseLayer;
          this.layerCount = layerCount;
        }
        var _proto23 = TextureViewInfo.prototype;
        _proto23.copy = function copy(info) {
          this.texture = info.texture;
          this.type = info.type;
          this.format = info.format;
          this.baseLevel = info.baseLevel;
          this.levelCount = info.levelCount;
          this.baseLayer = info.baseLayer;
          this.layerCount = info.layerCount;
          return this;
        };
        return TextureViewInfo;
      }());
      _export("SamplerInfo", SamplerInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function SamplerInfo(minFilter, magFilter, mipFilter, addressU, addressV, addressW, maxAnisotropy, cmpFunc) {
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
          this.minFilter = minFilter;
          this.magFilter = magFilter;
          this.mipFilter = mipFilter;
          this.addressU = addressU;
          this.addressV = addressV;
          this.addressW = addressW;
          this.maxAnisotropy = maxAnisotropy;
          this.cmpFunc = cmpFunc;
        }
        var _proto24 = SamplerInfo.prototype;
        _proto24.copy = function copy(info) {
          this.minFilter = info.minFilter;
          this.magFilter = info.magFilter;
          this.mipFilter = info.mipFilter;
          this.addressU = info.addressU;
          this.addressV = info.addressV;
          this.addressW = info.addressW;
          this.maxAnisotropy = info.maxAnisotropy;
          this.cmpFunc = info.cmpFunc;
          return this;
        };
        return SamplerInfo;
      }());
      _export("Uniform", Uniform = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function Uniform(name, type, count) {
          if (name === void 0) {
            name = '';
          }
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          if (count === void 0) {
            count = 0;
          }
          this.name = name;
          this.type = type;
          this.count = count;
        }
        var _proto25 = Uniform.prototype;
        _proto25.copy = function copy(info) {
          this.name = info.name;
          this.type = info.type;
          this.count = info.count;
          return this;
        };
        return Uniform;
      }());
      _export("UniformBlock", UniformBlock = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function UniformBlock(set, binding, name, members, count, flattened) {
          if (set === void 0) {
            set = 0;
          }
          if (binding === void 0) {
            binding = 0;
          }
          if (name === void 0) {
            name = '';
          }
          if (members === void 0) {
            members = [];
          }
          if (count === void 0) {
            count = 0;
          }
          if (flattened === void 0) {
            flattened = 0;
          }
          this.set = set;
          this.binding = binding;
          this.name = name;
          this.members = members;
          this.count = count;
          this.flattened = flattened;
        }
        var _proto26 = UniformBlock.prototype;
        _proto26.copy = function copy(info) {
          this.set = info.set;
          this.binding = info.binding;
          this.name = info.name;
          deepCopy(this.members, info.members, Uniform);
          this.count = info.count;
          this.flattened = info.flattened;
          return this;
        };
        return UniformBlock;
      }());
      _export("UniformSamplerTexture", UniformSamplerTexture = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function UniformSamplerTexture(set, binding, name, type, count, flattened) {
          if (set === void 0) {
            set = 0;
          }
          if (binding === void 0) {
            binding = 0;
          }
          if (name === void 0) {
            name = '';
          }
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          if (count === void 0) {
            count = 0;
          }
          if (flattened === void 0) {
            flattened = 0;
          }
          this.set = set;
          this.binding = binding;
          this.name = name;
          this.type = type;
          this.count = count;
          this.flattened = flattened;
        }
        var _proto27 = UniformSamplerTexture.prototype;
        _proto27.copy = function copy(info) {
          this.set = info.set;
          this.binding = info.binding;
          this.name = info.name;
          this.type = info.type;
          this.count = info.count;
          this.flattened = info.flattened;
          return this;
        };
        return UniformSamplerTexture;
      }());
      _export("UniformSampler", UniformSampler = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function UniformSampler(set, binding, name, count, flattened) {
          if (set === void 0) {
            set = 0;
          }
          if (binding === void 0) {
            binding = 0;
          }
          if (name === void 0) {
            name = '';
          }
          if (count === void 0) {
            count = 0;
          }
          if (flattened === void 0) {
            flattened = 0;
          }
          this.set = set;
          this.binding = binding;
          this.name = name;
          this.count = count;
          this.flattened = flattened;
        }
        var _proto28 = UniformSampler.prototype;
        _proto28.copy = function copy(info) {
          this.set = info.set;
          this.binding = info.binding;
          this.name = info.name;
          this.count = info.count;
          this.flattened = info.flattened;
          return this;
        };
        return UniformSampler;
      }());
      _export("UniformTexture", UniformTexture = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function UniformTexture(set, binding, name, type, count, flattened) {
          if (set === void 0) {
            set = 0;
          }
          if (binding === void 0) {
            binding = 0;
          }
          if (name === void 0) {
            name = '';
          }
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          if (count === void 0) {
            count = 0;
          }
          if (flattened === void 0) {
            flattened = 0;
          }
          this.set = set;
          this.binding = binding;
          this.name = name;
          this.type = type;
          this.count = count;
          this.flattened = flattened;
        }
        var _proto29 = UniformTexture.prototype;
        _proto29.copy = function copy(info) {
          this.set = info.set;
          this.binding = info.binding;
          this.name = info.name;
          this.type = info.type;
          this.count = info.count;
          this.flattened = info.flattened;
          return this;
        };
        return UniformTexture;
      }());
      _export("UniformStorageImage", UniformStorageImage = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function UniformStorageImage(set, binding, name, type, count, memoryAccess, flattened) {
          if (set === void 0) {
            set = 0;
          }
          if (binding === void 0) {
            binding = 0;
          }
          if (name === void 0) {
            name = '';
          }
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          if (count === void 0) {
            count = 0;
          }
          if (memoryAccess === void 0) {
            memoryAccess = MemoryAccessBit.READ_WRITE;
          }
          if (flattened === void 0) {
            flattened = 0;
          }
          this.set = set;
          this.binding = binding;
          this.name = name;
          this.type = type;
          this.count = count;
          this.memoryAccess = memoryAccess;
          this.flattened = flattened;
        }
        var _proto30 = UniformStorageImage.prototype;
        _proto30.copy = function copy(info) {
          this.set = info.set;
          this.binding = info.binding;
          this.name = info.name;
          this.type = info.type;
          this.count = info.count;
          this.memoryAccess = info.memoryAccess;
          this.flattened = info.flattened;
          return this;
        };
        return UniformStorageImage;
      }());
      _export("UniformStorageBuffer", UniformStorageBuffer = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function UniformStorageBuffer(set, binding, name, count, memoryAccess, flattened) {
          if (set === void 0) {
            set = 0;
          }
          if (binding === void 0) {
            binding = 0;
          }
          if (name === void 0) {
            name = '';
          }
          if (count === void 0) {
            count = 0;
          }
          if (memoryAccess === void 0) {
            memoryAccess = MemoryAccessBit.READ_WRITE;
          }
          if (flattened === void 0) {
            flattened = 0;
          }
          this.set = set;
          this.binding = binding;
          this.name = name;
          this.count = count;
          this.memoryAccess = memoryAccess;
          this.flattened = flattened;
        }
        var _proto31 = UniformStorageBuffer.prototype;
        _proto31.copy = function copy(info) {
          this.set = info.set;
          this.binding = info.binding;
          this.name = info.name;
          this.count = info.count;
          this.memoryAccess = info.memoryAccess;
          this.flattened = info.flattened;
          return this;
        };
        return UniformStorageBuffer;
      }());
      _export("UniformInputAttachment", UniformInputAttachment = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function UniformInputAttachment(set, binding, name, count, flattened) {
          if (set === void 0) {
            set = 0;
          }
          if (binding === void 0) {
            binding = 0;
          }
          if (name === void 0) {
            name = '';
          }
          if (count === void 0) {
            count = 0;
          }
          if (flattened === void 0) {
            flattened = 0;
          }
          this.set = set;
          this.binding = binding;
          this.name = name;
          this.count = count;
          this.flattened = flattened;
        }
        var _proto32 = UniformInputAttachment.prototype;
        _proto32.copy = function copy(info) {
          this.set = info.set;
          this.binding = info.binding;
          this.name = info.name;
          this.count = info.count;
          this.flattened = info.flattened;
          return this;
        };
        return UniformInputAttachment;
      }());
      _export("ShaderStage", ShaderStage = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function ShaderStage(stage, source) {
          if (stage === void 0) {
            stage = ShaderStageFlagBit.NONE;
          }
          if (source === void 0) {
            source = '';
          }
          this.stage = stage;
          this.source = source;
        }
        var _proto33 = ShaderStage.prototype;
        _proto33.copy = function copy(info) {
          this.stage = info.stage;
          this.source = info.source;
          return this;
        };
        return ShaderStage;
      }());
      _export("Attribute", Attribute = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function Attribute(name, format, isNormalized, stream, isInstanced, location) {
          if (name === void 0) {
            name = '';
          }
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          if (isNormalized === void 0) {
            isNormalized = false;
          }
          if (stream === void 0) {
            stream = 0;
          }
          if (isInstanced === void 0) {
            isInstanced = false;
          }
          if (location === void 0) {
            location = 0;
          }
          this.name = name;
          this.format = format;
          this.isNormalized = isNormalized;
          this.stream = stream;
          this.isInstanced = isInstanced;
          this.location = location;
        }
        var _proto34 = Attribute.prototype;
        _proto34.copy = function copy(info) {
          this.name = info.name;
          this.format = info.format;
          this.isNormalized = info.isNormalized;
          this.stream = info.stream;
          this.isInstanced = info.isInstanced;
          this.location = info.location;
          return this;
        };
        return Attribute;
      }());
      _export("ShaderInfo", ShaderInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function ShaderInfo(name, stages, attributes, blocks, buffers, samplerTextures, samplers, textures, images, subpassInputs) {
          if (name === void 0) {
            name = '';
          }
          if (stages === void 0) {
            stages = [];
          }
          if (attributes === void 0) {
            attributes = [];
          }
          if (blocks === void 0) {
            blocks = [];
          }
          if (buffers === void 0) {
            buffers = [];
          }
          if (samplerTextures === void 0) {
            samplerTextures = [];
          }
          if (samplers === void 0) {
            samplers = [];
          }
          if (textures === void 0) {
            textures = [];
          }
          if (images === void 0) {
            images = [];
          }
          if (subpassInputs === void 0) {
            subpassInputs = [];
          }
          this.name = name;
          this.stages = stages;
          this.attributes = attributes;
          this.blocks = blocks;
          this.buffers = buffers;
          this.samplerTextures = samplerTextures;
          this.samplers = samplers;
          this.textures = textures;
          this.images = images;
          this.subpassInputs = subpassInputs;
        }
        var _proto35 = ShaderInfo.prototype;
        _proto35.copy = function copy(info) {
          this.name = info.name;
          deepCopy(this.stages, info.stages, ShaderStage);
          deepCopy(this.attributes, info.attributes, Attribute);
          deepCopy(this.blocks, info.blocks, UniformBlock);
          deepCopy(this.buffers, info.buffers, UniformStorageBuffer);
          deepCopy(this.samplerTextures, info.samplerTextures, UniformSamplerTexture);
          deepCopy(this.samplers, info.samplers, UniformSampler);
          deepCopy(this.textures, info.textures, UniformTexture);
          deepCopy(this.images, info.images, UniformStorageImage);
          deepCopy(this.subpassInputs, info.subpassInputs, UniformInputAttachment);
          return this;
        };
        return ShaderInfo;
      }());
      _export("InputAssemblerInfo", InputAssemblerInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function InputAssemblerInfo(attributes, vertexBuffers, indexBuffer, indirectBuffer) {
          if (attributes === void 0) {
            attributes = [];
          }
          if (vertexBuffers === void 0) {
            vertexBuffers = [];
          }
          if (indexBuffer === void 0) {
            indexBuffer = null;
          }
          if (indirectBuffer === void 0) {
            indirectBuffer = null;
          }
          this.attributes = attributes;
          this.vertexBuffers = vertexBuffers;
          this.indexBuffer = indexBuffer;
          this.indirectBuffer = indirectBuffer;
        }
        var _proto36 = InputAssemblerInfo.prototype;
        _proto36.copy = function copy(info) {
          deepCopy(this.attributes, info.attributes, Attribute);
          this.vertexBuffers = info.vertexBuffers.slice();
          this.indexBuffer = info.indexBuffer;
          this.indirectBuffer = info.indirectBuffer;
          return this;
        };
        return InputAssemblerInfo;
      }());
      _export("ColorAttachment", ColorAttachment = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function ColorAttachment(format, sampleCount, loadOp, storeOp, barrier) {
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          if (sampleCount === void 0) {
            sampleCount = SampleCount.X1;
          }
          if (loadOp === void 0) {
            loadOp = LoadOp.CLEAR;
          }
          if (storeOp === void 0) {
            storeOp = StoreOp.STORE;
          }
          if (barrier === void 0) {
            barrier = null;
          }
          this.format = format;
          this.sampleCount = sampleCount;
          this.loadOp = loadOp;
          this.storeOp = storeOp;
          this.barrier = barrier;
        }
        var _proto37 = ColorAttachment.prototype;
        _proto37.copy = function copy(info) {
          this.format = info.format;
          this.sampleCount = info.sampleCount;
          this.loadOp = info.loadOp;
          this.storeOp = info.storeOp;
          this.barrier = info.barrier;
          return this;
        };
        return ColorAttachment;
      }());
      _export("DepthStencilAttachment", DepthStencilAttachment = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DepthStencilAttachment(format, sampleCount, depthLoadOp, depthStoreOp, stencilLoadOp, stencilStoreOp, barrier) {
          if (format === void 0) {
            format = Format.UNKNOWN;
          }
          if (sampleCount === void 0) {
            sampleCount = SampleCount.X1;
          }
          if (depthLoadOp === void 0) {
            depthLoadOp = LoadOp.CLEAR;
          }
          if (depthStoreOp === void 0) {
            depthStoreOp = StoreOp.STORE;
          }
          if (stencilLoadOp === void 0) {
            stencilLoadOp = LoadOp.CLEAR;
          }
          if (stencilStoreOp === void 0) {
            stencilStoreOp = StoreOp.STORE;
          }
          if (barrier === void 0) {
            barrier = null;
          }
          this.format = format;
          this.sampleCount = sampleCount;
          this.depthLoadOp = depthLoadOp;
          this.depthStoreOp = depthStoreOp;
          this.stencilLoadOp = stencilLoadOp;
          this.stencilStoreOp = stencilStoreOp;
          this.barrier = barrier;
        }
        var _proto38 = DepthStencilAttachment.prototype;
        _proto38.copy = function copy(info) {
          this.format = info.format;
          this.sampleCount = info.sampleCount;
          this.depthLoadOp = info.depthLoadOp;
          this.depthStoreOp = info.depthStoreOp;
          this.stencilLoadOp = info.stencilLoadOp;
          this.stencilStoreOp = info.stencilStoreOp;
          this.barrier = info.barrier;
          return this;
        };
        return DepthStencilAttachment;
      }());
      _export("SubpassInfo", SubpassInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function SubpassInfo(inputs, colors, resolves, preserves, depthStencil, depthStencilResolve, depthResolveMode, stencilResolveMode) {
          if (inputs === void 0) {
            inputs = [];
          }
          if (colors === void 0) {
            colors = [];
          }
          if (resolves === void 0) {
            resolves = [];
          }
          if (preserves === void 0) {
            preserves = [];
          }
          if (depthStencil === void 0) {
            depthStencil = -1;
          }
          if (depthStencilResolve === void 0) {
            depthStencilResolve = -1;
          }
          if (depthResolveMode === void 0) {
            depthResolveMode = ResolveMode.NONE;
          }
          if (stencilResolveMode === void 0) {
            stencilResolveMode = ResolveMode.NONE;
          }
          this.inputs = inputs;
          this.colors = colors;
          this.resolves = resolves;
          this.preserves = preserves;
          this.depthStencil = depthStencil;
          this.depthStencilResolve = depthStencilResolve;
          this.depthResolveMode = depthResolveMode;
          this.stencilResolveMode = stencilResolveMode;
        }
        var _proto39 = SubpassInfo.prototype;
        _proto39.copy = function copy(info) {
          this.inputs = info.inputs.slice();
          this.colors = info.colors.slice();
          this.resolves = info.resolves.slice();
          this.preserves = info.preserves.slice();
          this.depthStencil = info.depthStencil;
          this.depthStencilResolve = info.depthStencilResolve;
          this.depthResolveMode = info.depthResolveMode;
          this.stencilResolveMode = info.stencilResolveMode;
          return this;
        };
        return SubpassInfo;
      }());
      _export("SubpassDependency", SubpassDependency = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function SubpassDependency(srcSubpass, dstSubpass, generalBarrier, prevAccesses, nextAccesses) {
          if (srcSubpass === void 0) {
            srcSubpass = 0;
          }
          if (dstSubpass === void 0) {
            dstSubpass = 0;
          }
          if (generalBarrier === void 0) {
            generalBarrier = null;
          }
          if (prevAccesses === void 0) {
            prevAccesses = [AccessFlagBit.NONE];
          }
          if (nextAccesses === void 0) {
            nextAccesses = [AccessFlagBit.NONE];
          }
          this.srcSubpass = srcSubpass;
          this.dstSubpass = dstSubpass;
          this.generalBarrier = generalBarrier;
          this.prevAccesses = prevAccesses;
          this.nextAccesses = nextAccesses;
        }
        var _proto40 = SubpassDependency.prototype;
        _proto40.copy = function copy(info) {
          this.srcSubpass = info.srcSubpass;
          this.dstSubpass = info.dstSubpass;
          this.generalBarrier = info.generalBarrier;
          this.prevAccesses = info.prevAccesses.slice();
          this.nextAccesses = info.nextAccesses.slice();
          return this;
        };
        return SubpassDependency;
      }());
      _export("RenderPassInfo", RenderPassInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function RenderPassInfo(colorAttachments, depthStencilAttachment, depthStencilResolveAttachment, subpasses, dependencies) {
          if (colorAttachments === void 0) {
            colorAttachments = [];
          }
          if (depthStencilAttachment === void 0) {
            depthStencilAttachment = new DepthStencilAttachment();
          }
          if (depthStencilResolveAttachment === void 0) {
            depthStencilResolveAttachment = new DepthStencilAttachment();
          }
          if (subpasses === void 0) {
            subpasses = [];
          }
          if (dependencies === void 0) {
            dependencies = [];
          }
          this.colorAttachments = colorAttachments;
          this.depthStencilAttachment = depthStencilAttachment;
          this.depthStencilResolveAttachment = depthStencilResolveAttachment;
          this.subpasses = subpasses;
          this.dependencies = dependencies;
        }
        var _proto41 = RenderPassInfo.prototype;
        _proto41.copy = function copy(info) {
          deepCopy(this.colorAttachments, info.colorAttachments, ColorAttachment);
          this.depthStencilAttachment.copy(info.depthStencilAttachment);
          this.depthStencilResolveAttachment.copy(info.depthStencilResolveAttachment);
          deepCopy(this.subpasses, info.subpasses, SubpassInfo);
          deepCopy(this.dependencies, info.dependencies, SubpassDependency);
          return this;
        };
        return RenderPassInfo;
      }());
      _export("GeneralBarrierInfo", GeneralBarrierInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function GeneralBarrierInfo(prevAccesses, nextAccesses, type) {
          if (prevAccesses === void 0) {
            prevAccesses = AccessFlagBit.NONE;
          }
          if (nextAccesses === void 0) {
            nextAccesses = AccessFlagBit.NONE;
          }
          if (type === void 0) {
            type = BarrierType.FULL;
          }
          this.prevAccesses = prevAccesses;
          this.nextAccesses = nextAccesses;
          this.type = type;
        }
        var _proto42 = GeneralBarrierInfo.prototype;
        _proto42.copy = function copy(info) {
          this.prevAccesses = info.prevAccesses;
          this.nextAccesses = info.nextAccesses;
          this.type = info.type;
          return this;
        };
        return GeneralBarrierInfo;
      }());
      _export("TextureBarrierInfo", TextureBarrierInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function TextureBarrierInfo(prevAccesses, nextAccesses, type, baseMipLevel, levelCount, baseSlice, sliceCount, discardContents, srcQueue, dstQueue) {
          if (prevAccesses === void 0) {
            prevAccesses = AccessFlagBit.NONE;
          }
          if (nextAccesses === void 0) {
            nextAccesses = AccessFlagBit.NONE;
          }
          if (type === void 0) {
            type = BarrierType.FULL;
          }
          if (baseMipLevel === void 0) {
            baseMipLevel = 0;
          }
          if (levelCount === void 0) {
            levelCount = 1;
          }
          if (baseSlice === void 0) {
            baseSlice = 0;
          }
          if (sliceCount === void 0) {
            sliceCount = 1;
          }
          if (discardContents === void 0) {
            discardContents = false;
          }
          if (srcQueue === void 0) {
            srcQueue = null;
          }
          if (dstQueue === void 0) {
            dstQueue = null;
          }
          this.prevAccesses = prevAccesses;
          this.nextAccesses = nextAccesses;
          this.type = type;
          this.baseMipLevel = baseMipLevel;
          this.levelCount = levelCount;
          this.baseSlice = baseSlice;
          this.sliceCount = sliceCount;
          this.discardContents = discardContents;
          this.srcQueue = srcQueue;
          this.dstQueue = dstQueue;
        }
        var _proto43 = TextureBarrierInfo.prototype;
        _proto43.copy = function copy(info) {
          this.prevAccesses = info.prevAccesses;
          this.nextAccesses = info.nextAccesses;
          this.type = info.type;
          this.baseMipLevel = info.baseMipLevel;
          this.levelCount = info.levelCount;
          this.baseSlice = info.baseSlice;
          this.sliceCount = info.sliceCount;
          this.discardContents = info.discardContents;
          this.srcQueue = info.srcQueue;
          this.dstQueue = info.dstQueue;
          return this;
        };
        return TextureBarrierInfo;
      }());
      _export("BufferBarrierInfo", BufferBarrierInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function BufferBarrierInfo(prevAccesses, nextAccesses, type, offset, size, discardContents, srcQueue, dstQueue) {
          if (prevAccesses === void 0) {
            prevAccesses = AccessFlagBit.NONE;
          }
          if (nextAccesses === void 0) {
            nextAccesses = AccessFlagBit.NONE;
          }
          if (type === void 0) {
            type = BarrierType.FULL;
          }
          if (offset === void 0) {
            offset = 0;
          }
          if (size === void 0) {
            size = 0;
          }
          if (discardContents === void 0) {
            discardContents = false;
          }
          if (srcQueue === void 0) {
            srcQueue = null;
          }
          if (dstQueue === void 0) {
            dstQueue = null;
          }
          this.prevAccesses = prevAccesses;
          this.nextAccesses = nextAccesses;
          this.type = type;
          this.offset = offset;
          this.size = size;
          this.discardContents = discardContents;
          this.srcQueue = srcQueue;
          this.dstQueue = dstQueue;
        }
        var _proto44 = BufferBarrierInfo.prototype;
        _proto44.copy = function copy(info) {
          this.prevAccesses = info.prevAccesses;
          this.nextAccesses = info.nextAccesses;
          this.type = info.type;
          this.offset = info.offset;
          this.size = info.size;
          this.discardContents = info.discardContents;
          this.srcQueue = info.srcQueue;
          this.dstQueue = info.dstQueue;
          return this;
        };
        return BufferBarrierInfo;
      }());
      _export("FramebufferInfo", FramebufferInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function FramebufferInfo(renderPass, colorTextures, depthStencilTexture, depthStencilResolveTexture) {
          if (renderPass === void 0) {
            renderPass = null;
          }
          if (colorTextures === void 0) {
            colorTextures = [];
          }
          if (depthStencilTexture === void 0) {
            depthStencilTexture = null;
          }
          if (depthStencilResolveTexture === void 0) {
            depthStencilResolveTexture = null;
          }
          this.renderPass = renderPass;
          this.colorTextures = colorTextures;
          this.depthStencilTexture = depthStencilTexture;
          this.depthStencilResolveTexture = depthStencilResolveTexture;
        }
        var _proto45 = FramebufferInfo.prototype;
        _proto45.copy = function copy(info) {
          this.renderPass = info.renderPass;
          this.colorTextures = info.colorTextures.slice();
          this.depthStencilTexture = info.depthStencilTexture;
          this.depthStencilResolveTexture = info.depthStencilResolveTexture;
          return this;
        };
        return FramebufferInfo;
      }());
      _export("DescriptorSetLayoutBinding", DescriptorSetLayoutBinding = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DescriptorSetLayoutBinding(binding, descriptorType, count, stageFlags, immutableSamplers) {
          if (binding === void 0) {
            binding = -1;
          }
          if (descriptorType === void 0) {
            descriptorType = DescriptorType.UNKNOWN;
          }
          if (count === void 0) {
            count = 0;
          }
          if (stageFlags === void 0) {
            stageFlags = ShaderStageFlagBit.NONE;
          }
          if (immutableSamplers === void 0) {
            immutableSamplers = [];
          }
          this.binding = binding;
          this.descriptorType = descriptorType;
          this.count = count;
          this.stageFlags = stageFlags;
          this.immutableSamplers = immutableSamplers;
        }
        var _proto46 = DescriptorSetLayoutBinding.prototype;
        _proto46.copy = function copy(info) {
          this.binding = info.binding;
          this.descriptorType = info.descriptorType;
          this.count = info.count;
          this.stageFlags = info.stageFlags;
          this.immutableSamplers = info.immutableSamplers.slice();
          return this;
        };
        return DescriptorSetLayoutBinding;
      }());
      _export("DescriptorSetLayoutInfo", DescriptorSetLayoutInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DescriptorSetLayoutInfo(bindings) {
          if (bindings === void 0) {
            bindings = [];
          }
          this.bindings = bindings;
        }
        var _proto47 = DescriptorSetLayoutInfo.prototype;
        _proto47.copy = function copy(info) {
          deepCopy(this.bindings, info.bindings, DescriptorSetLayoutBinding);
          return this;
        };
        _proto47.reset = function reset() {
          this.bindings.length = 0;
        };
        return DescriptorSetLayoutInfo;
      }());
      _export("DescriptorSetInfo", DescriptorSetInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DescriptorSetInfo(layout) {
          if (layout === void 0) {
            layout = null;
          }
          this.layout = layout;
        }
        var _proto48 = DescriptorSetInfo.prototype;
        _proto48.copy = function copy(info) {
          this.layout = info.layout;
          return this;
        };
        return DescriptorSetInfo;
      }());
      _export("PipelineLayoutInfo", PipelineLayoutInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function PipelineLayoutInfo(setLayouts) {
          if (setLayouts === void 0) {
            setLayouts = [];
          }
          this.setLayouts = setLayouts;
        }
        var _proto49 = PipelineLayoutInfo.prototype;
        _proto49.copy = function copy(info) {
          this.setLayouts = info.setLayouts.slice();
          return this;
        };
        return PipelineLayoutInfo;
      }());
      _export("InputState", InputState = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function InputState(attributes) {
          if (attributes === void 0) {
            attributes = [];
          }
          this.attributes = attributes;
        }
        var _proto50 = InputState.prototype;
        _proto50.copy = function copy(info) {
          deepCopy(this.attributes, info.attributes, Attribute);
          return this;
        };
        return InputState;
      }());
      _export("CommandBufferInfo", CommandBufferInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function CommandBufferInfo(queue, type) {
          if (queue === void 0) {
            queue = null;
          }
          if (type === void 0) {
            type = CommandBufferType.PRIMARY;
          }
          this.queue = queue;
          this.type = type;
        }
        var _proto51 = CommandBufferInfo.prototype;
        _proto51.copy = function copy(info) {
          this.queue = info.queue;
          this.type = info.type;
          return this;
        };
        return CommandBufferInfo;
      }());
      _export("QueueInfo", QueueInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function QueueInfo(type) {
          if (type === void 0) {
            type = QueueType.GRAPHICS;
          }
          this.type = type;
        }
        var _proto52 = QueueInfo.prototype;
        _proto52.copy = function copy(info) {
          this.type = info.type;
          return this;
        };
        return QueueInfo;
      }());
      _export("QueryPoolInfo", QueryPoolInfo = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function QueryPoolInfo(type, maxQueryObjects, forceWait) {
          if (type === void 0) {
            type = QueryType.OCCLUSION;
          }
          if (maxQueryObjects === void 0) {
            maxQueryObjects = 32767;
          }
          if (forceWait === void 0) {
            forceWait = true;
          }
          this.type = type;
          this.maxQueryObjects = maxQueryObjects;
          this.forceWait = forceWait;
        }
        var _proto53 = QueryPoolInfo.prototype;
        _proto53.copy = function copy(info) {
          this.type = info.type;
          this.maxQueryObjects = info.maxQueryObjects;
          this.forceWait = info.forceWait;
          return this;
        };
        return QueryPoolInfo;
      }());
      _export("FormatInfo", FormatInfo =
      // to make sure all usages must be an instance of this exact class, not assembled from plain object

      function FormatInfo(name, size, count, type, hasAlpha, hasDepth, hasStencil, isCompressed) {
        if (name === void 0) {
          name = '';
        }
        if (size === void 0) {
          size = 0;
        }
        if (count === void 0) {
          count = 0;
        }
        if (type === void 0) {
          type = FormatType.NONE;
        }
        if (hasAlpha === void 0) {
          hasAlpha = false;
        }
        if (hasDepth === void 0) {
          hasDepth = false;
        }
        if (hasStencil === void 0) {
          hasStencil = false;
        }
        if (isCompressed === void 0) {
          isCompressed = false;
        }
        this.name = name;
        this.size = size;
        this.count = count;
        this.type = type;
        this.hasAlpha = hasAlpha;
        this.hasDepth = hasDepth;
        this.hasStencil = hasStencil;
        this.isCompressed = isCompressed;
      });
      _export("MemoryStatus", MemoryStatus = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function MemoryStatus(bufferSize, textureSize) {
          if (bufferSize === void 0) {
            bufferSize = 0;
          }
          if (textureSize === void 0) {
            textureSize = 0;
          }
          this.bufferSize = bufferSize;
          this.textureSize = textureSize;
        }
        var _proto54 = MemoryStatus.prototype;
        _proto54.copy = function copy(info) {
          this.bufferSize = info.bufferSize;
          this.textureSize = info.textureSize;
          return this;
        };
        return MemoryStatus;
      }());
      _export("DynamicStencilStates", DynamicStencilStates = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DynamicStencilStates(writeMask, compareMask, reference) {
          if (writeMask === void 0) {
            writeMask = 0;
          }
          if (compareMask === void 0) {
            compareMask = 0;
          }
          if (reference === void 0) {
            reference = 0;
          }
          this.writeMask = writeMask;
          this.compareMask = compareMask;
          this.reference = reference;
        }
        var _proto55 = DynamicStencilStates.prototype;
        _proto55.copy = function copy(info) {
          this.writeMask = info.writeMask;
          this.compareMask = info.compareMask;
          this.reference = info.reference;
          return this;
        };
        return DynamicStencilStates;
      }());
      _export("DynamicStates", DynamicStates = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function DynamicStates(viewport, scissor, blendConstant, lineWidth, depthBiasConstant, depthBiasClamp, depthBiasSlope, depthMinBounds, depthMaxBounds, stencilStatesFront, stencilStatesBack) {
          if (viewport === void 0) {
            viewport = new Viewport();
          }
          if (scissor === void 0) {
            scissor = new Rect();
          }
          if (blendConstant === void 0) {
            blendConstant = new Color();
          }
          if (lineWidth === void 0) {
            lineWidth = 1;
          }
          if (depthBiasConstant === void 0) {
            depthBiasConstant = 0;
          }
          if (depthBiasClamp === void 0) {
            depthBiasClamp = 0;
          }
          if (depthBiasSlope === void 0) {
            depthBiasSlope = 0;
          }
          if (depthMinBounds === void 0) {
            depthMinBounds = 0;
          }
          if (depthMaxBounds === void 0) {
            depthMaxBounds = 0;
          }
          if (stencilStatesFront === void 0) {
            stencilStatesFront = new DynamicStencilStates();
          }
          if (stencilStatesBack === void 0) {
            stencilStatesBack = new DynamicStencilStates();
          }
          this.viewport = viewport;
          this.scissor = scissor;
          this.blendConstant = blendConstant;
          this.lineWidth = lineWidth;
          this.depthBiasConstant = depthBiasConstant;
          this.depthBiasClamp = depthBiasClamp;
          this.depthBiasSlope = depthBiasSlope;
          this.depthMinBounds = depthMinBounds;
          this.depthMaxBounds = depthMaxBounds;
          this.stencilStatesFront = stencilStatesFront;
          this.stencilStatesBack = stencilStatesBack;
        }
        var _proto56 = DynamicStates.prototype;
        _proto56.copy = function copy(info) {
          this.viewport.copy(info.viewport);
          this.scissor.copy(info.scissor);
          this.blendConstant.copy(info.blendConstant);
          this.lineWidth = info.lineWidth;
          this.depthBiasConstant = info.depthBiasConstant;
          this.depthBiasClamp = info.depthBiasClamp;
          this.depthBiasSlope = info.depthBiasSlope;
          this.depthMinBounds = info.depthMinBounds;
          this.depthMaxBounds = info.depthMaxBounds;
          this.stencilStatesFront.copy(info.stencilStatesFront);
          this.stencilStatesBack.copy(info.stencilStatesBack);
          return this;
        };
        return DynamicStates;
      }());
      /**
        * ========================= !DO NOT CHANGE THE ABOVE SECTION MANUALLY! =========================
        * The above section is auto-generated from native/cocos/renderer/core/gfx/GFXDef-common.h
        * by the script native/tools/gfx-define-generator/generate.js.
        * Changes to these public interfaces should be made there first and synced back.
        * ========================= !DO NOT CHANGE THE ABOVE SECTION MANUALLY! =========================
        */
      /**
        * @en GFX base object.
        * @zh GFX 基类对象。
        */
      _export("GFXObject", GFXObject = /*#__PURE__*/function (_GCObject) {
        _inheritsLoose(GFXObject, _GCObject);
        function GFXObject(objectType) {
          var _this;
          _this = _GCObject.call(this) || this;
          _this._objectType = ObjectType.UNKNOWN;
          _this._objectID = 0;
          _this._typedID = 0;
          _this._objectType = objectType;
          _this._objectID = GFXObject._idTable[ObjectType.UNKNOWN]++;
          _this._typedID = GFXObject._idTable[objectType]++;
          return _this;
        }
        _createClass(GFXObject, [{
          key: "objectType",
          get: function get() {
            return this._objectType;
          }
        }, {
          key: "objectID",
          get: function get() {
            return this._objectID;
          }
        }, {
          key: "typedID",
          get: function get() {
            return this._typedID;
          }
        }]);
        return GFXObject;
      }(GCObject));
      GFXObject._idTable = Array(ObjectType.COUNT).fill(1 << 16);
      (function (AttributeName) {
        AttributeName["ATTR_POSITION"] = "a_position";
        AttributeName["ATTR_NORMAL"] = "a_normal";
        AttributeName["ATTR_TANGENT"] = "a_tangent";
        AttributeName["ATTR_BITANGENT"] = "a_bitangent";
        AttributeName["ATTR_WEIGHTS"] = "a_weights";
        AttributeName["ATTR_JOINTS"] = "a_joints";
        AttributeName["ATTR_COLOR"] = "a_color";
        AttributeName["ATTR_COLOR1"] = "a_color1";
        AttributeName["ATTR_COLOR2"] = "a_color2";
        AttributeName["ATTR_TEX_COORD"] = "a_texCoord";
        AttributeName["ATTR_TEX_COORD1"] = "a_texCoord1";
        AttributeName["ATTR_TEX_COORD2"] = "a_texCoord2";
        AttributeName["ATTR_TEX_COORD3"] = "a_texCoord3";
        AttributeName["ATTR_TEX_COORD4"] = "a_texCoord4";
        AttributeName["ATTR_TEX_COORD5"] = "a_texCoord5";
        AttributeName["ATTR_TEX_COORD6"] = "a_texCoord6";
        AttributeName["ATTR_TEX_COORD7"] = "a_texCoord7";
        AttributeName["ATTR_TEX_COORD8"] = "a_texCoord8";
        AttributeName["ATTR_BATCH_ID"] = "a_batch_id";
        AttributeName["ATTR_BATCH_UV"] = "a_batch_uv";
      })(AttributeName || _export("AttributeName", AttributeName = {}));
      _export("FormatInfos", FormatInfos = Object.freeze([new FormatInfo('UNKNOWN', 0, 0, FormatType.NONE, false, false, false, false), new FormatInfo('A8', 1, 1, FormatType.UNORM, true, false, false, false), new FormatInfo('L8', 1, 1, FormatType.UNORM, false, false, false, false), new FormatInfo('LA8', 1, 2, FormatType.UNORM, true, false, false, false), new FormatInfo('R8', 1, 1, FormatType.UNORM, false, false, false, false), new FormatInfo('R8SN', 1, 1, FormatType.SNORM, false, false, false, false), new FormatInfo('R8UI', 1, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R8I', 1, 1, FormatType.INT, false, false, false, false), new FormatInfo('R16F', 2, 1, FormatType.FLOAT, false, false, false, false), new FormatInfo('R16UI', 2, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R16I', 2, 1, FormatType.INT, false, false, false, false), new FormatInfo('R32F', 4, 1, FormatType.FLOAT, false, false, false, false), new FormatInfo('R32UI', 4, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R32I', 4, 1, FormatType.INT, false, false, false, false), new FormatInfo('RG8', 2, 2, FormatType.UNORM, false, false, false, false), new FormatInfo('RG8SN', 2, 2, FormatType.SNORM, false, false, false, false), new FormatInfo('RG8UI', 2, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG8I', 2, 2, FormatType.INT, false, false, false, false), new FormatInfo('RG16F', 4, 2, FormatType.FLOAT, false, false, false, false), new FormatInfo('RG16UI', 4, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG16I', 4, 2, FormatType.INT, false, false, false, false), new FormatInfo('RG32F', 8, 2, FormatType.FLOAT, false, false, false, false), new FormatInfo('RG32UI', 8, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG32I', 8, 2, FormatType.INT, false, false, false, false), new FormatInfo('RGB8', 3, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('SRGB8', 3, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('RGB8SN', 3, 3, FormatType.SNORM, false, false, false, false), new FormatInfo('RGB8UI', 3, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB8I', 3, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGB16F', 6, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB16UI', 6, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB16I', 6, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGB32F', 12, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB32UI', 12, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB32I', 12, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGBA8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('BGRA8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('SRGB8_A8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGBA8SN', 4, 4, FormatType.SNORM, true, false, false, false), new FormatInfo('RGBA8UI', 4, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA8I', 4, 4, FormatType.INT, true, false, false, false), new FormatInfo('RGBA16F', 8, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('RGBA16UI', 8, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA16I', 8, 4, FormatType.INT, true, false, false, false), new FormatInfo('RGBA32F', 16, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('RGBA32UI', 16, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA32I', 16, 4, FormatType.INT, true, false, false, false), new FormatInfo('R5G6B5', 2, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('R11G11B10F', 4, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB5A1', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGBA4', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGB10A2', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGB10A2UI', 2, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGB9E5', 2, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('DEPTH', 4, 1, FormatType.FLOAT, false, true, false, false), new FormatInfo('DEPTH_STENCIL', 5, 2, FormatType.FLOAT, false, true, true, false), new FormatInfo('BC1', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('BC1_ALPHA', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC1_SRGB', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('BC1_SRGB_ALPHA', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC2', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC2_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC3', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC3_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC4', 1, 1, FormatType.UNORM, false, false, false, true), new FormatInfo('BC4_SNORM', 1, 1, FormatType.SNORM, false, false, false, true), new FormatInfo('BC5', 1, 2, FormatType.UNORM, false, false, false, true), new FormatInfo('BC5_SNORM', 1, 2, FormatType.SNORM, false, false, false, true), new FormatInfo('BC6H_UF16', 1, 3, FormatType.UFLOAT, false, false, false, true), new FormatInfo('BC6H_SF16', 1, 3, FormatType.FLOAT, false, false, false, true), new FormatInfo('BC7', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC7_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC_RGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_RGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_SRGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_RGB8_A1', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_SRGB8_A1', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_RGBA8', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_SRGB8_A8', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('EAC_R11', 1, 1, FormatType.UNORM, false, false, false, true), new FormatInfo('EAC_R11SN', 1, 1, FormatType.SNORM, false, false, false, true), new FormatInfo('EAC_RG11', 2, 2, FormatType.UNORM, false, false, false, true), new FormatInfo('EAC_RG11SN', 2, 2, FormatType.SNORM, false, false, false, true), new FormatInfo('PVRTC_RGB2', 2, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('PVRTC_RGBA2', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC_RGB4', 2, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('PVRTC_RGBA4', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC2_2BPP', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC2_4BPP', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_4x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_5x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_5x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_6x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_6x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_12x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_12x12', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_4x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_5x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_5x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_6x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_6x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_12x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_12x12', 1, 4, FormatType.UNORM, true, false, false, true)]));
      _export("DESCRIPTOR_BUFFER_TYPE", DESCRIPTOR_BUFFER_TYPE = DescriptorType.UNIFORM_BUFFER | DescriptorType.DYNAMIC_UNIFORM_BUFFER | DescriptorType.STORAGE_BUFFER | DescriptorType.DYNAMIC_STORAGE_BUFFER);
      _export("DESCRIPTOR_SAMPLER_TYPE", DESCRIPTOR_SAMPLER_TYPE = DescriptorType.SAMPLER_TEXTURE | DescriptorType.SAMPLER | DescriptorType.TEXTURE | DescriptorType.STORAGE_IMAGE | DescriptorType.INPUT_ATTACHMENT);
      _export("DESCRIPTOR_DYNAMIC_TYPE", DESCRIPTOR_DYNAMIC_TYPE = DescriptorType.DYNAMIC_STORAGE_BUFFER | DescriptorType.DYNAMIC_UNIFORM_BUFFER);
      _export("DRAW_INFO_SIZE", DRAW_INFO_SIZE = 28);
      _type2size = [0,
      // UNKNOWN
      4,
      // BOOL
      8,
      // BOOL2
      12,
      // BOOL3
      16,
      // BOOL4
      4,
      // INT
      8,
      // INT2
      12,
      // INT3
      16,
      // INT4
      4,
      // UINT
      8,
      // UINT2
      12,
      // UINT3
      16,
      // UINT4
      4,
      // FLOAT
      8,
      // FLOAT2
      12,
      // FLOAT3
      16,
      // FLOAT4
      16,
      // MAT2
      24,
      // MAT2X3
      32,
      // MAT2X4
      24,
      // MAT3X2
      36,
      // MAT3
      48,
      // MAT3X4
      32,
      // MAT4X2
      48,
      // MAT4X3
      64,
      // MAT4
      4,
      // SAMPLER1D
      4,
      // SAMPLER1D_ARRAY
      4,
      // SAMPLER2D
      4,
      // SAMPLER2D_ARRAY
      4,
      // SAMPLER3D
      4 // SAMPLER_CUBE
      ];
    }
  };
});