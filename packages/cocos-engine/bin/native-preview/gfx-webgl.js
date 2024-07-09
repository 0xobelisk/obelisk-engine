System.register(['./device-90bc7390.js', './buffer-barrier-92305f2c.js', './index-ce98320e.js', './cached-array-9b18d763.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './murmurhash2_gc-2108d723.js'], (function (exports) {
    'use strict';
    var DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, Rect, TextureFlagBit, FormatInfos, getTypedArrayConstructor, formatAlignment, Extent, Offset, alignTo, FormatSize, ClearFlagBit, DynamicStates, DrawInfo, Filter, MemoryUsageBit, BufferUsageBit, TextureType, ShaderStageFlagBit, UniformSamplerTexture, Type, Format, LoadOp, ColorMask, CullMode, DynamicStateFlagBit, UniformBlock, Uniform, DescriptorSetLayoutBinding, DescriptorType, Attribute, StencilFace, CommandBufferType, DESCRIPTOR_DYNAMIC_TYPE, PipelineState, Viewport, IsPowerOf2, FormatSurfaceSize, TextureInfo, TextureUsageBit, BufferTextureCopy, Device, API, QueueInfo, QueueType, CommandBufferInfo, Feature, FormatFeatureBit, DescriptorSet, Buffer, CommandBuffer, Framebuffer, InputAssembler, DescriptorSetLayout, PipelineLayout, Queue, RenderPass, Sampler, Shader, Texture, Swapchain, GeneralBarrier, TextureBarrier, BufferBarrier, error, assertID, errorID, debug, legacyCC, nextPow2, systemInfo, OS, BrowserType, WECHAT_MINI_PROGRAM, macro, EDITOR, warnID, warn, CachedArray, DepthStencilState, RasterizerState, BlendState;
    return {
        setters: [function (module) {
            DESCRIPTOR_BUFFER_TYPE = module.aP;
            DESCRIPTOR_SAMPLER_TYPE = module.aQ;
            Rect = module.X;
            TextureFlagBit = module.h;
            FormatInfos = module.aO;
            getTypedArrayConstructor = module.aX;
            formatAlignment = module.aY;
            Extent = module.Y;
            Offset = module.W;
            alignTo = module.aZ;
            FormatSize = module.aU;
            ClearFlagBit = module.H;
            DynamicStates = module.aL;
            DrawInfo = module.a9;
            Filter = module.k;
            MemoryUsageBit = module.e;
            BufferUsageBit = module.B;
            TextureType = module.f;
            ShaderStageFlagBit = module.q;
            UniformSamplerTexture = module.ah;
            Type = module.T;
            Format = module.b;
            LoadOp = module.L;
            ColorMask = module.p;
            CullMode = module.x;
            DynamicStateFlagBit = module.D;
            UniformBlock = module.ag;
            Uniform = module.af;
            DescriptorSetLayoutBinding = module.aA;
            DescriptorType = module.z;
            Attribute = module.ao;
            StencilFace = module.y;
            CommandBufferType = module.G;
            DESCRIPTOR_DYNAMIC_TYPE = module.aR;
            PipelineState = module.b1;
            Viewport = module.a2;
            IsPowerOf2 = module.aT;
            FormatSurfaceSize = module.aV;
            TextureInfo = module.ac;
            TextureUsageBit = module.g;
            BufferTextureCopy = module.a1;
            Device = module.a$;
            API = module.A;
            QueueInfo = module.aG;
            QueueType = module.Q;
            CommandBufferInfo = module.aF;
            Feature = module.F;
            FormatFeatureBit = module.i;
        }, function (module) {
            DescriptorSet = module.D;
            Buffer = module.B;
            CommandBuffer = module.C;
            Framebuffer = module.F;
            InputAssembler = module.I;
            DescriptorSetLayout = module.a;
            PipelineLayout = module.P;
            Queue = module.Q;
            RenderPass = module.R;
            Sampler = module.S;
            Shader = module.b;
            Texture = module.T;
            Swapchain = module.c;
            GeneralBarrier = module.G;
            TextureBarrier = module.d;
            BufferBarrier = module.e;
        }, function (module) {
            error = module.e;
            assertID = module.g;
            errorID = module.f;
            debug = module.aF;
            legacyCC = module.l;
            nextPow2 = module.Z;
            systemInfo = module.bY;
            OS = module.bZ;
            BrowserType = module.cb;
            WECHAT_MINI_PROGRAM = module.cr;
            macro = module.aM;
            EDITOR = module.bB;
            warnID = module.d;
            warn = module.w;
        }, function (module) {
            CachedArray = module.C;
        }, function (module) {
            DepthStencilState = module.D;
            RasterizerState = module.R;
            BlendState = module.B;
        }, function () {}],
        execute: (function () {

            class WebGLDescriptorSet extends DescriptorSet {
              constructor(...args) {
                super(...args);
                this._gpuDescriptorSet = null;
              }
              get gpuDescriptorSet() {
                return this._gpuDescriptorSet;
              }
              initialize(info) {
                this._layout = info.layout;
                const {
                  bindings,
                  descriptorIndices,
                  descriptorCount
                } = info.layout.gpuDescriptorSetLayout;
                this._buffers = Array(descriptorCount).fill(null);
                this._textures = Array(descriptorCount).fill(null);
                this._samplers = Array(descriptorCount).fill(null);
                const gpuDescriptors = [];
                this._gpuDescriptorSet = {
                  gpuDescriptors,
                  descriptorIndices
                };
                for (let i = 0; i < bindings.length; ++i) {
                  const binding = bindings[i];
                  for (let j = 0; j < binding.count; j++) {
                    gpuDescriptors.push({
                      type: binding.descriptorType,
                      gpuBuffer: null,
                      gpuTexture: null,
                      gpuSampler: null
                    });
                  }
                }
              }
              destroy() {
                this._layout = null;
                this._gpuDescriptorSet = null;
              }
              update() {
                if (this._isDirty && this._gpuDescriptorSet) {
                  const descriptors = this._gpuDescriptorSet.gpuDescriptors;
                  for (let i = 0; i < descriptors.length; ++i) {
                    if (descriptors[i].type & DESCRIPTOR_BUFFER_TYPE) {
                      const buffer = this._buffers[i];
                      if (buffer) {
                        descriptors[i].gpuBuffer = buffer.gpuBuffer || buffer.gpuBufferView;
                      }
                    } else if (descriptors[i].type & DESCRIPTOR_SAMPLER_TYPE) {
                      if (this._textures[i]) {
                        descriptors[i].gpuTexture = this._textures[i].gpuTexture;
                      }
                      if (this._samplers[i]) {
                        descriptors[i].gpuSampler = this._samplers[i].gpuSampler;
                      }
                    }
                  }
                  this._isDirty = false;
                }
              }
            }

            let WebGLEXT;
            (function (WebGLEXT) {
              WebGLEXT[WebGLEXT["RGBA16F_EXT"] = 34842] = "RGBA16F_EXT";
              WebGLEXT[WebGLEXT["RGB16F_EXT"] = 34843] = "RGB16F_EXT";
              WebGLEXT[WebGLEXT["RGBA32F_EXT"] = 34836] = "RGBA32F_EXT";
              WebGLEXT[WebGLEXT["FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT"] = 33297] = "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT";
              WebGLEXT[WebGLEXT["UNSIGNED_NORMALIZED_EXT"] = 35863] = "UNSIGNED_NORMALIZED_EXT";
              WebGLEXT[WebGLEXT["UNSIGNED_INT_24_8_WEBGL"] = 34042] = "UNSIGNED_INT_24_8_WEBGL";
              WebGLEXT[WebGLEXT["HALF_FLOAT_OES"] = 36193] = "HALF_FLOAT_OES";
              WebGLEXT[WebGLEXT["SRGB_EXT"] = 35904] = "SRGB_EXT";
              WebGLEXT[WebGLEXT["SRGB_ALPHA_EXT"] = 35906] = "SRGB_ALPHA_EXT";
              WebGLEXT[WebGLEXT["SRGB8_ALPHA8_EXT"] = 35907] = "SRGB8_ALPHA8_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_RGB_S3TC_DXT1_EXT"] = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_S3TC_DXT1_EXT"] = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_S3TC_DXT3_EXT"] = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_S3TC_DXT5_EXT"] = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB_S3TC_DXT1_EXT"] = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"] = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"] = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"] = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT";
              WebGLEXT[WebGLEXT["COMPRESSED_RGB_PVRTC_4BPPV1_IMG"] = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
              WebGLEXT[WebGLEXT["COMPRESSED_RGB_PVRTC_2BPPV1_IMG"] = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"] = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"] = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG";
              WebGLEXT[WebGLEXT["COMPRESSED_RGB_ETC1_WEBGL"] = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
              WebGLEXT[WebGLEXT["COMPRESSED_R11_EAC"] = 37488] = "COMPRESSED_R11_EAC";
              WebGLEXT[WebGLEXT["COMPRESSED_SIGNED_R11_EAC"] = 37489] = "COMPRESSED_SIGNED_R11_EAC";
              WebGLEXT[WebGLEXT["COMPRESSED_RG11_EAC"] = 37490] = "COMPRESSED_RG11_EAC";
              WebGLEXT[WebGLEXT["COMPRESSED_SIGNED_RG11_EAC"] = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
              WebGLEXT[WebGLEXT["COMPRESSED_RGB8_ETC2"] = 37492] = "COMPRESSED_RGB8_ETC2";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ETC2"] = 37493] = "COMPRESSED_SRGB8_ETC2";
              WebGLEXT[WebGLEXT["COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA8_ETC2_EAC"] = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"] = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_4x4_KHR"] = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_5x4_KHR"] = 37809] = "COMPRESSED_RGBA_ASTC_5x4_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_5x5_KHR"] = 37810] = "COMPRESSED_RGBA_ASTC_5x5_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_6x5_KHR"] = 37811] = "COMPRESSED_RGBA_ASTC_6x5_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_6x6_KHR"] = 37812] = "COMPRESSED_RGBA_ASTC_6x6_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_8x5_KHR"] = 37813] = "COMPRESSED_RGBA_ASTC_8x5_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_8x6_KHR"] = 37814] = "COMPRESSED_RGBA_ASTC_8x6_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_8x8_KHR"] = 37815] = "COMPRESSED_RGBA_ASTC_8x8_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_10x5_KHR"] = 37816] = "COMPRESSED_RGBA_ASTC_10x5_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_10x6_KHR"] = 37817] = "COMPRESSED_RGBA_ASTC_10x6_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_10x8_KHR"] = 37818] = "COMPRESSED_RGBA_ASTC_10x8_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_10x10_KHR"] = 37819] = "COMPRESSED_RGBA_ASTC_10x10_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_12x10_KHR"] = 37820] = "COMPRESSED_RGBA_ASTC_12x10_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_RGBA_ASTC_12x12_KHR"] = 37821] = "COMPRESSED_RGBA_ASTC_12x12_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR"] = 37840] = "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR"] = 37841] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR"] = 37842] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR"] = 37843] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR"] = 37844] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR"] = 37845] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR"] = 37846] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR"] = 37847] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR"] = 37848] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR"] = 37849] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR"] = 37850] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR"] = 37851] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR"] = 37852] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR";
              WebGLEXT[WebGLEXT["COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR"] = 37853] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR";
            })(WebGLEXT || (WebGLEXT = {}));
            class WebGLDeviceManager {
              static get instance() {
                return WebGLDeviceManager._instance;
              }
              static setInstance(instance) {
                WebGLDeviceManager._instance = instance;
              }
            }
            WebGLDeviceManager._instance = null;

            function GFXFormatToWebGLType(format, gl) {
              switch (format) {
                case Format.R8:
                  return gl.UNSIGNED_BYTE;
                case Format.R8SN:
                  return gl.BYTE;
                case Format.R8UI:
                  return gl.UNSIGNED_BYTE;
                case Format.R8I:
                  return gl.BYTE;
                case Format.R16F:
                  return WebGLEXT.HALF_FLOAT_OES;
                case Format.R16UI:
                  return gl.UNSIGNED_SHORT;
                case Format.R16I:
                  return gl.SHORT;
                case Format.R32F:
                  return gl.FLOAT;
                case Format.R32UI:
                  return gl.UNSIGNED_INT;
                case Format.R32I:
                  return gl.INT;
                case Format.RG8:
                  return gl.UNSIGNED_BYTE;
                case Format.RG8SN:
                  return gl.BYTE;
                case Format.RG8UI:
                  return gl.UNSIGNED_BYTE;
                case Format.RG8I:
                  return gl.BYTE;
                case Format.RG16F:
                  return WebGLEXT.HALF_FLOAT_OES;
                case Format.RG16UI:
                  return gl.UNSIGNED_SHORT;
                case Format.RG16I:
                  return gl.SHORT;
                case Format.RG32F:
                  return gl.FLOAT;
                case Format.RG32UI:
                  return gl.UNSIGNED_INT;
                case Format.RG32I:
                  return gl.INT;
                case Format.RGB8:
                  return gl.UNSIGNED_BYTE;
                case Format.SRGB8:
                  return gl.UNSIGNED_BYTE;
                case Format.RGB8SN:
                  return gl.BYTE;
                case Format.RGB8UI:
                  return gl.UNSIGNED_BYTE;
                case Format.RGB8I:
                  return gl.BYTE;
                case Format.RGB16F:
                  return WebGLEXT.HALF_FLOAT_OES;
                case Format.RGB16UI:
                  return gl.UNSIGNED_SHORT;
                case Format.RGB16I:
                  return gl.SHORT;
                case Format.RGB32F:
                  return gl.FLOAT;
                case Format.RGB32UI:
                  return gl.UNSIGNED_INT;
                case Format.RGB32I:
                  return gl.INT;
                case Format.BGRA8:
                  return gl.UNSIGNED_BYTE;
                case Format.RGBA8:
                  return gl.UNSIGNED_BYTE;
                case Format.SRGB8_A8:
                  return gl.UNSIGNED_BYTE;
                case Format.RGBA8SN:
                  return gl.BYTE;
                case Format.RGBA8UI:
                  return gl.UNSIGNED_BYTE;
                case Format.RGBA8I:
                  return gl.BYTE;
                case Format.RGBA16F:
                  return WebGLEXT.HALF_FLOAT_OES;
                case Format.RGBA16UI:
                  return gl.UNSIGNED_SHORT;
                case Format.RGBA16I:
                  return gl.SHORT;
                case Format.RGBA32F:
                  return gl.FLOAT;
                case Format.RGBA32UI:
                  return gl.UNSIGNED_INT;
                case Format.RGBA32I:
                  return gl.INT;
                case Format.R5G6B5:
                  return gl.UNSIGNED_SHORT_5_6_5;
                case Format.R11G11B10F:
                  return gl.FLOAT;
                case Format.RGB5A1:
                  return gl.UNSIGNED_SHORT_5_5_5_1;
                case Format.RGBA4:
                  return gl.UNSIGNED_SHORT_4_4_4_4;
                case Format.RGB10A2:
                  return gl.UNSIGNED_BYTE;
                case Format.RGB10A2UI:
                  return gl.UNSIGNED_INT;
                case Format.RGB9E5:
                  return gl.UNSIGNED_BYTE;
                case Format.DEPTH:
                  return gl.UNSIGNED_INT;
                case Format.DEPTH_STENCIL:
                  return WebGLEXT.UNSIGNED_INT_24_8_WEBGL;
                case Format.BC1:
                  return gl.UNSIGNED_BYTE;
                case Format.BC1_SRGB:
                  return gl.UNSIGNED_BYTE;
                case Format.BC2:
                  return gl.UNSIGNED_BYTE;
                case Format.BC2_SRGB:
                  return gl.UNSIGNED_BYTE;
                case Format.BC3:
                  return gl.UNSIGNED_BYTE;
                case Format.BC3_SRGB:
                  return gl.UNSIGNED_BYTE;
                case Format.BC4:
                  return gl.UNSIGNED_BYTE;
                case Format.BC4_SNORM:
                  return gl.BYTE;
                case Format.BC5:
                  return gl.UNSIGNED_BYTE;
                case Format.BC5_SNORM:
                  return gl.BYTE;
                case Format.BC6H_SF16:
                  return gl.FLOAT;
                case Format.BC6H_UF16:
                  return gl.FLOAT;
                case Format.BC7:
                  return gl.UNSIGNED_BYTE;
                case Format.BC7_SRGB:
                  return gl.UNSIGNED_BYTE;
                case Format.ETC_RGB8:
                  return gl.UNSIGNED_BYTE;
                case Format.ETC2_RGB8:
                  return gl.UNSIGNED_BYTE;
                case Format.ETC2_SRGB8:
                  return gl.UNSIGNED_BYTE;
                case Format.ETC2_RGB8_A1:
                  return gl.UNSIGNED_BYTE;
                case Format.ETC2_SRGB8_A1:
                  return gl.UNSIGNED_BYTE;
                case Format.EAC_R11:
                  return gl.UNSIGNED_BYTE;
                case Format.EAC_R11SN:
                  return gl.BYTE;
                case Format.EAC_RG11:
                  return gl.UNSIGNED_BYTE;
                case Format.EAC_RG11SN:
                  return gl.BYTE;
                case Format.PVRTC_RGB2:
                  return gl.UNSIGNED_BYTE;
                case Format.PVRTC_RGBA2:
                  return gl.UNSIGNED_BYTE;
                case Format.PVRTC_RGB4:
                  return gl.UNSIGNED_BYTE;
                case Format.PVRTC_RGBA4:
                  return gl.UNSIGNED_BYTE;
                case Format.PVRTC2_2BPP:
                  return gl.UNSIGNED_BYTE;
                case Format.PVRTC2_4BPP:
                  return gl.UNSIGNED_BYTE;
                case Format.ASTC_RGBA_4X4:
                case Format.ASTC_RGBA_5X4:
                case Format.ASTC_RGBA_5X5:
                case Format.ASTC_RGBA_6X5:
                case Format.ASTC_RGBA_6X6:
                case Format.ASTC_RGBA_8X5:
                case Format.ASTC_RGBA_8X6:
                case Format.ASTC_RGBA_8X8:
                case Format.ASTC_RGBA_10X5:
                case Format.ASTC_RGBA_10X6:
                case Format.ASTC_RGBA_10X8:
                case Format.ASTC_RGBA_10X10:
                case Format.ASTC_RGBA_12X10:
                case Format.ASTC_RGBA_12X12:
                case Format.ASTC_SRGBA_4X4:
                case Format.ASTC_SRGBA_5X4:
                case Format.ASTC_SRGBA_5X5:
                case Format.ASTC_SRGBA_6X5:
                case Format.ASTC_SRGBA_6X6:
                case Format.ASTC_SRGBA_8X5:
                case Format.ASTC_SRGBA_8X6:
                case Format.ASTC_SRGBA_8X8:
                case Format.ASTC_SRGBA_10X5:
                case Format.ASTC_SRGBA_10X6:
                case Format.ASTC_SRGBA_10X8:
                case Format.ASTC_SRGBA_10X10:
                case Format.ASTC_SRGBA_12X10:
                case Format.ASTC_SRGBA_12X12:
                  return gl.UNSIGNED_BYTE;
                default:
                  {
                    return gl.UNSIGNED_BYTE;
                  }
              }
            }
            function GFXFormatToWebGLInternalFormat(format, gl) {
              switch (format) {
                case Format.R5G6B5:
                  return gl.RGB565;
                case Format.RGB5A1:
                  return gl.RGB5_A1;
                case Format.RGBA4:
                  return gl.RGBA4;
                case Format.RGBA16F:
                  return WebGLEXT.RGBA16F_EXT;
                case Format.RGBA32F:
                  return WebGLEXT.RGBA32F_EXT;
                case Format.SRGB8_A8:
                  return WebGLEXT.SRGB8_ALPHA8_EXT;
                case Format.DEPTH:
                  return gl.DEPTH_COMPONENT16;
                case Format.DEPTH_STENCIL:
                  return gl.DEPTH_STENCIL;
                default:
                  {
                    error('Unsupported Format, convert to WebGL internal format failed.');
                    return gl.RGBA;
                  }
              }
            }
            function GFXFormatToWebGLFormat(format, gl) {
              switch (format) {
                case Format.A8:
                  return gl.ALPHA;
                case Format.L8:
                  return gl.LUMINANCE;
                case Format.LA8:
                  return gl.LUMINANCE_ALPHA;
                case Format.RGB8:
                  return gl.RGB;
                case Format.RGB16F:
                  return gl.RGB;
                case Format.RGB32F:
                  return gl.RGB;
                case Format.BGRA8:
                  return gl.RGBA;
                case Format.RGBA8:
                  return gl.RGBA;
                case Format.SRGB8_A8:
                  return gl.RGBA;
                case Format.RGBA16F:
                  return gl.RGBA;
                case Format.RGBA32F:
                  return gl.RGBA;
                case Format.R5G6B5:
                  return gl.RGB;
                case Format.RGB5A1:
                  return gl.RGBA;
                case Format.RGBA4:
                  return gl.RGBA;
                case Format.DEPTH:
                  return gl.DEPTH_COMPONENT;
                case Format.DEPTH_STENCIL:
                  return gl.DEPTH_STENCIL;
                case Format.BC1:
                  return WebGLEXT.COMPRESSED_RGB_S3TC_DXT1_EXT;
                case Format.BC1_ALPHA:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                case Format.BC1_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                case Format.BC1_SRGB_ALPHA:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                case Format.BC2:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                case Format.BC2_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                case Format.BC3:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                case Format.BC3_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                case Format.ETC_RGB8:
                  return WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL;
                case Format.ETC2_RGB8:
                  return WebGLEXT.COMPRESSED_RGB8_ETC2;
                case Format.ETC2_SRGB8:
                  return WebGLEXT.COMPRESSED_SRGB8_ETC2;
                case Format.ETC2_RGB8_A1:
                  return WebGLEXT.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;
                case Format.ETC2_SRGB8_A1:
                  return WebGLEXT.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;
                case Format.ETC2_RGBA8:
                  return WebGLEXT.COMPRESSED_RGBA8_ETC2_EAC;
                case Format.ETC2_SRGB8_A8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
                case Format.EAC_R11:
                  return WebGLEXT.COMPRESSED_R11_EAC;
                case Format.EAC_R11SN:
                  return WebGLEXT.COMPRESSED_SIGNED_R11_EAC;
                case Format.EAC_RG11:
                  return WebGLEXT.COMPRESSED_RG11_EAC;
                case Format.EAC_RG11SN:
                  return WebGLEXT.COMPRESSED_SIGNED_RG11_EAC;
                case Format.PVRTC_RGB2:
                  return WebGLEXT.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                case Format.PVRTC_RGBA2:
                  return WebGLEXT.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                case Format.PVRTC_RGB4:
                  return WebGLEXT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                case Format.PVRTC_RGBA4:
                  return WebGLEXT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                case Format.ASTC_RGBA_4X4:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_4x4_KHR;
                case Format.ASTC_RGBA_5X4:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_5x4_KHR;
                case Format.ASTC_RGBA_5X5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_5x5_KHR;
                case Format.ASTC_RGBA_6X5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_6x5_KHR;
                case Format.ASTC_RGBA_6X6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_6x6_KHR;
                case Format.ASTC_RGBA_8X5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x5_KHR;
                case Format.ASTC_RGBA_8X6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x6_KHR;
                case Format.ASTC_RGBA_8X8:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x8_KHR;
                case Format.ASTC_RGBA_10X5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x5_KHR;
                case Format.ASTC_RGBA_10X6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x6_KHR;
                case Format.ASTC_RGBA_10X8:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x8_KHR;
                case Format.ASTC_RGBA_10X10:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x10_KHR;
                case Format.ASTC_RGBA_12X10:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_12x10_KHR;
                case Format.ASTC_RGBA_12X12:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_12x12_KHR;
                case Format.ASTC_SRGBA_4X4:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
                case Format.ASTC_SRGBA_5X4:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
                case Format.ASTC_SRGBA_5X5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
                case Format.ASTC_SRGBA_6X5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
                case Format.ASTC_SRGBA_6X6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
                case Format.ASTC_SRGBA_8X5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
                case Format.ASTC_SRGBA_8X6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
                case Format.ASTC_SRGBA_8X8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
                case Format.ASTC_SRGBA_10X5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
                case Format.ASTC_SRGBA_10X6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
                case Format.ASTC_SRGBA_10X8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
                case Format.ASTC_SRGBA_10X10:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
                case Format.ASTC_SRGBA_12X10:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
                case Format.ASTC_SRGBA_12X12:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
                default:
                  {
                    error('Unsupported Format, convert to WebGL format failed.');
                    return gl.RGBA;
                  }
              }
            }
            function GFXTypeToWebGLType(type, gl) {
              switch (type) {
                case Type.BOOL:
                  return gl.BOOL;
                case Type.BOOL2:
                  return gl.BOOL_VEC2;
                case Type.BOOL3:
                  return gl.BOOL_VEC3;
                case Type.BOOL4:
                  return gl.BOOL_VEC4;
                case Type.INT:
                  return gl.INT;
                case Type.INT2:
                  return gl.INT_VEC2;
                case Type.INT3:
                  return gl.INT_VEC3;
                case Type.INT4:
                  return gl.INT_VEC4;
                case Type.UINT:
                  return gl.UNSIGNED_INT;
                case Type.FLOAT:
                  return gl.FLOAT;
                case Type.FLOAT2:
                  return gl.FLOAT_VEC2;
                case Type.FLOAT3:
                  return gl.FLOAT_VEC3;
                case Type.FLOAT4:
                  return gl.FLOAT_VEC4;
                case Type.MAT2:
                  return gl.FLOAT_MAT2;
                case Type.MAT3:
                  return gl.FLOAT_MAT3;
                case Type.MAT4:
                  return gl.FLOAT_MAT4;
                case Type.SAMPLER2D:
                  return gl.SAMPLER_2D;
                case Type.SAMPLER_CUBE:
                  return gl.SAMPLER_CUBE;
                default:
                  {
                    error('Unsupported GLType, convert to GL type failed.');
                    return Type.UNKNOWN;
                  }
              }
            }
            function GFXTypeToTypedArrayCtor(type) {
              switch (type) {
                case Type.BOOL:
                case Type.BOOL2:
                case Type.BOOL3:
                case Type.BOOL4:
                case Type.INT:
                case Type.INT2:
                case Type.INT3:
                case Type.INT4:
                case Type.UINT:
                  return Int32Array;
                case Type.FLOAT:
                case Type.FLOAT2:
                case Type.FLOAT3:
                case Type.FLOAT4:
                case Type.MAT2:
                case Type.MAT3:
                case Type.MAT4:
                  return Float32Array;
                default:
                  {
                    error('Unsupported GLType, convert to TypedArrayConstructor failed.');
                    return Float32Array;
                  }
              }
            }
            function WebGLTypeToGFXType(glType, gl) {
              switch (glType) {
                case gl.BOOL:
                  return Type.BOOL;
                case gl.BOOL_VEC2:
                  return Type.BOOL2;
                case gl.BOOL_VEC3:
                  return Type.BOOL3;
                case gl.BOOL_VEC4:
                  return Type.BOOL4;
                case gl.INT:
                  return Type.INT;
                case gl.INT_VEC2:
                  return Type.INT2;
                case gl.INT_VEC3:
                  return Type.INT3;
                case gl.INT_VEC4:
                  return Type.INT4;
                case gl.UNSIGNED_INT:
                  return Type.UINT;
                case gl.FLOAT:
                  return Type.FLOAT;
                case gl.FLOAT_VEC2:
                  return Type.FLOAT2;
                case gl.FLOAT_VEC3:
                  return Type.FLOAT3;
                case gl.FLOAT_VEC4:
                  return Type.FLOAT4;
                case gl.FLOAT_MAT2:
                  return Type.MAT2;
                case gl.FLOAT_MAT3:
                  return Type.MAT3;
                case gl.FLOAT_MAT4:
                  return Type.MAT4;
                case gl.SAMPLER_2D:
                  return Type.SAMPLER2D;
                case gl.SAMPLER_CUBE:
                  return Type.SAMPLER_CUBE;
                default:
                  {
                    error('Unsupported GLType, convert to Type failed.');
                    return Type.UNKNOWN;
                  }
              }
            }
            function WebGLGetTypeSize(glType, gl) {
              switch (glType) {
                case gl.BOOL:
                  return 4;
                case gl.BOOL_VEC2:
                  return 8;
                case gl.BOOL_VEC3:
                  return 12;
                case gl.BOOL_VEC4:
                  return 16;
                case gl.INT:
                  return 4;
                case gl.INT_VEC2:
                  return 8;
                case gl.INT_VEC3:
                  return 12;
                case gl.INT_VEC4:
                  return 16;
                case gl.UNSIGNED_INT:
                  return 4;
                case gl.FLOAT:
                  return 4;
                case gl.FLOAT_VEC2:
                  return 8;
                case gl.FLOAT_VEC3:
                  return 12;
                case gl.FLOAT_VEC4:
                  return 16;
                case gl.FLOAT_MAT2:
                  return 16;
                case gl.FLOAT_MAT3:
                  return 36;
                case gl.FLOAT_MAT4:
                  return 64;
                case gl.SAMPLER_2D:
                  return 4;
                case gl.SAMPLER_CUBE:
                  return 4;
                default:
                  {
                    error('Unsupported GLType, get type failed.');
                    return 0;
                  }
              }
            }
            function WebGLGetComponentCount(glType, gl) {
              switch (glType) {
                case gl.FLOAT_MAT2:
                  return 2;
                case gl.FLOAT_MAT3:
                  return 3;
                case gl.FLOAT_MAT4:
                  return 4;
                default:
                  {
                    return 1;
                  }
              }
            }
            const WebGLCmpFuncs = [0x0200, 0x0201, 0x0202, 0x0203, 0x0204, 0x0205, 0x0206, 0x0207];
            const WebGLStencilOps = [0x0000, 0x1E00, 0x1E01, 0x1E02, 0x1E03, 0x150A, 0x8507, 0x8508];
            const WebGLBlendOps = [0x8006, 0x800A, 0x800B, 0x8007, 0x8008];
            const WebGLBlendFactors = [0x0000, 0x0001, 0x0302, 0x0304, 0x0303, 0x0305, 0x0300, 0x0306, 0x0301, 0x0307, 0x0308, 0x8001, 0x8002, 0x8003, 0x8004];
            let WebGLCmd;
            (function (WebGLCmd) {
              WebGLCmd[WebGLCmd["BEGIN_RENDER_PASS"] = 0] = "BEGIN_RENDER_PASS";
              WebGLCmd[WebGLCmd["END_RENDER_PASS"] = 1] = "END_RENDER_PASS";
              WebGLCmd[WebGLCmd["BIND_STATES"] = 2] = "BIND_STATES";
              WebGLCmd[WebGLCmd["DRAW"] = 3] = "DRAW";
              WebGLCmd[WebGLCmd["UPDATE_BUFFER"] = 4] = "UPDATE_BUFFER";
              WebGLCmd[WebGLCmd["COPY_BUFFER_TO_TEXTURE"] = 5] = "COPY_BUFFER_TO_TEXTURE";
              WebGLCmd[WebGLCmd["BLIT_TEXTURE"] = 6] = "BLIT_TEXTURE";
              WebGLCmd[WebGLCmd["COUNT"] = 7] = "COUNT";
            })(WebGLCmd || (WebGLCmd = {}));
            class WebGLCmdObject {
              constructor(type) {
                this.cmdType = void 0;
                this.refCount = 0;
                this.cmdType = type;
              }
            }
            class WebGLCmdBeginRenderPass extends WebGLCmdObject {
              constructor() {
                super(WebGLCmd.BEGIN_RENDER_PASS);
                this.gpuRenderPass = null;
                this.gpuFramebuffer = null;
                this.renderArea = new Rect();
                this.clearFlag = ClearFlagBit.NONE;
                this.clearColors = [];
                this.clearDepth = 1.0;
                this.clearStencil = 0;
              }
              clear() {
                this.gpuFramebuffer = null;
                this.clearColors.length = 0;
              }
            }
            class WebGLCmdBindStates extends WebGLCmdObject {
              constructor() {
                super(WebGLCmd.BIND_STATES);
                this.gpuPipelineState = null;
                this.gpuInputAssembler = null;
                this.gpuDescriptorSets = [];
                this.dynamicOffsets = [];
                this.dynamicStates = new DynamicStates();
              }
              clear() {
                this.gpuPipelineState = null;
                this.gpuDescriptorSets.length = 0;
                this.gpuInputAssembler = null;
                this.dynamicOffsets.length = 0;
              }
            }
            class WebGLCmdDraw extends WebGLCmdObject {
              constructor() {
                super(WebGLCmd.DRAW);
                this.drawInfo = new DrawInfo();
              }
              clear() {}
            }
            class WebGLCmdUpdateBuffer extends WebGLCmdObject {
              constructor() {
                super(WebGLCmd.UPDATE_BUFFER);
                this.gpuBuffer = null;
                this.buffer = null;
                this.offset = 0;
                this.size = 0;
              }
              clear() {
                this.gpuBuffer = null;
                this.buffer = null;
              }
            }
            class WebGLCmdCopyBufferToTexture extends WebGLCmdObject {
              constructor() {
                super(WebGLCmd.COPY_BUFFER_TO_TEXTURE);
                this.gpuTexture = null;
                this.buffers = [];
                this.regions = [];
              }
              clear() {
                this.gpuTexture = null;
                this.buffers.length = 0;
                this.regions.length = 0;
              }
            }
            class WebGLCmdBlitTexture extends WebGLCmdObject {
              constructor() {
                super(WebGLCmd.BLIT_TEXTURE);
                this.srcTexture = null;
                this.dstTexture = null;
                this.regions = [];
                this.filter = Filter.LINEAR;
              }
              clear() {
                this.srcTexture = null;
                this.dstTexture = null;
                this.regions.length = 0;
              }
            }
            class WebGLCmdPackage {
              constructor() {
                this.cmds = new CachedArray(1);
                this.beginRenderPassCmds = new CachedArray(1);
                this.bindStatesCmds = new CachedArray(1);
                this.drawCmds = new CachedArray(1);
                this.updateBufferCmds = new CachedArray(1);
                this.copyBufferToTextureCmds = new CachedArray(1);
                this.blitTextureCmds = new CachedArray(1);
              }
              clearCmds(allocator) {
                if (this.beginRenderPassCmds.length) {
                  allocator.beginRenderPassCmdPool.freeCmds(this.beginRenderPassCmds);
                  this.beginRenderPassCmds.clear();
                }
                if (this.bindStatesCmds.length) {
                  allocator.bindStatesCmdPool.freeCmds(this.bindStatesCmds);
                  this.bindStatesCmds.clear();
                }
                if (this.drawCmds.length) {
                  allocator.drawCmdPool.freeCmds(this.drawCmds);
                  this.drawCmds.clear();
                }
                if (this.updateBufferCmds.length) {
                  allocator.updateBufferCmdPool.freeCmds(this.updateBufferCmds);
                  this.updateBufferCmds.clear();
                }
                if (this.copyBufferToTextureCmds.length) {
                  allocator.copyBufferToTextureCmdPool.freeCmds(this.copyBufferToTextureCmds);
                  this.copyBufferToTextureCmds.clear();
                }
                if (this.blitTextureCmds.length) {
                  allocator.blitTextureCmdPool.freeCmds(this.blitTextureCmds);
                  this.blitTextureCmds.clear();
                }
                this.cmds.clear();
              }
            }
            function WebGLCmdFuncCreateBuffer(device, gpuBuffer) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              const glUsage = gpuBuffer.memUsage & MemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
              if (gpuBuffer.usage & BufferUsageBit.VERTEX) {
                gpuBuffer.glTarget = gl.ARRAY_BUFFER;
                const glBuffer = gl.createBuffer();
                if (glBuffer) {
                  gpuBuffer.glBuffer = glBuffer;
                  if (gpuBuffer.size > 0) {
                    if (device.extensions.useVAO) {
                      if (cache.glVAO) {
                        device.extensions.OES_vertex_array_object.bindVertexArrayOES(null);
                        cache.glVAO = null;
                      }
                    }
                    gfxStateCache.gpuInputAssembler = null;
                    if (device.stateCache.glArrayBuffer !== gpuBuffer.glBuffer) {
                      gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
                      device.stateCache.glArrayBuffer = gpuBuffer.glBuffer;
                    }
                    gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.size, glUsage);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    device.stateCache.glArrayBuffer = null;
                  }
                }
              } else if (gpuBuffer.usage & BufferUsageBit.INDEX) {
                gpuBuffer.glTarget = gl.ELEMENT_ARRAY_BUFFER;
                const glBuffer = gl.createBuffer();
                if (glBuffer) {
                  gpuBuffer.glBuffer = glBuffer;
                  if (gpuBuffer.size > 0) {
                    if (device.extensions.useVAO) {
                      if (cache.glVAO) {
                        device.extensions.OES_vertex_array_object.bindVertexArrayOES(null);
                        cache.glVAO = null;
                      }
                    }
                    gfxStateCache.gpuInputAssembler = null;
                    if (device.stateCache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
                      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                      device.stateCache.glElementArrayBuffer = gpuBuffer.glBuffer;
                    }
                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.size, glUsage);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    device.stateCache.glElementArrayBuffer = null;
                  }
                }
              } else if (gpuBuffer.usage & BufferUsageBit.UNIFORM) {
                gpuBuffer.glTarget = gl.NONE;
                if (gpuBuffer.buffer) {
                  gpuBuffer.vf32 = new Float32Array(gpuBuffer.buffer.buffer);
                }
              } else if (gpuBuffer.usage & BufferUsageBit.INDIRECT) {
                gpuBuffer.glTarget = gl.NONE;
              } else if (gpuBuffer.usage & BufferUsageBit.TRANSFER_DST) {
                gpuBuffer.glTarget = gl.NONE;
              } else if (gpuBuffer.usage & BufferUsageBit.TRANSFER_SRC) {
                gpuBuffer.glTarget = gl.NONE;
              } else {
                error('Unsupported BufferType, create buffer failed.');
                gpuBuffer.glTarget = gl.NONE;
              }
            }
            function WebGLCmdFuncDestroyBuffer(device, gpuBuffer) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              if (gpuBuffer.glBuffer) {
                switch (gpuBuffer.glTarget) {
                  case gl.ARRAY_BUFFER:
                    if (device.extensions.useVAO) {
                      if (cache.glVAO) {
                        device.extensions.OES_vertex_array_object.bindVertexArrayOES(null);
                        device.stateCache.glVAO = null;
                      }
                    }
                    gfxStateCache.gpuInputAssembler = null;
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    device.stateCache.glArrayBuffer = null;
                    break;
                  case gl.ELEMENT_ARRAY_BUFFER:
                    if (device.extensions.useVAO) {
                      if (cache.glVAO) {
                        device.extensions.OES_vertex_array_object.bindVertexArrayOES(null);
                        device.stateCache.glVAO = null;
                      }
                    }
                    gfxStateCache.gpuInputAssembler = null;
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    device.stateCache.glElementArrayBuffer = null;
                    break;
                }
                gl.deleteBuffer(gpuBuffer.glBuffer);
                gpuBuffer.glBuffer = null;
              }
            }
            function WebGLCmdFuncResizeBuffer(device, gpuBuffer) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              const glUsage = gpuBuffer.memUsage & MemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
              if (gpuBuffer.usage & BufferUsageBit.VERTEX) {
                if (device.extensions.useVAO) {
                  if (cache.glVAO) {
                    device.extensions.OES_vertex_array_object.bindVertexArrayOES(null);
                    cache.glVAO = null;
                  }
                }
                gfxStateCache.gpuInputAssembler = null;
                if (device.stateCache.glArrayBuffer !== gpuBuffer.glBuffer) {
                  gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
                }
                if (gpuBuffer.buffer) {
                  gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.buffer, glUsage);
                } else {
                  gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.size, glUsage);
                }
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
                device.stateCache.glArrayBuffer = null;
              } else if (gpuBuffer.usage & BufferUsageBit.INDEX) {
                if (device.extensions.useVAO) {
                  if (cache.glVAO) {
                    device.extensions.OES_vertex_array_object.bindVertexArrayOES(null);
                    cache.glVAO = null;
                  }
                }
                gfxStateCache.gpuInputAssembler = null;
                if (device.stateCache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
                  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                }
                if (gpuBuffer.buffer) {
                  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.buffer, glUsage);
                } else {
                  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.size, glUsage);
                }
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                device.stateCache.glElementArrayBuffer = null;
              } else if (gpuBuffer.usage & BufferUsageBit.UNIFORM) {
                if (gpuBuffer.buffer) {
                  gpuBuffer.vf32 = new Float32Array(gpuBuffer.buffer.buffer);
                }
              } else if (gpuBuffer.usage & BufferUsageBit.INDIRECT || gpuBuffer.usage & BufferUsageBit.TRANSFER_DST || gpuBuffer.usage & BufferUsageBit.TRANSFER_SRC) {
                gpuBuffer.glTarget = gl.NONE;
              } else {
                error('Unsupported BufferType, create buffer failed.');
                gpuBuffer.glTarget = gl.NONE;
              }
            }
            function WebGLCmdFuncUpdateBuffer(device, gpuBuffer, buffer, offset, size) {
              if (gpuBuffer.usage & BufferUsageBit.UNIFORM) {
                if (ArrayBuffer.isView(buffer)) {
                  gpuBuffer.vf32.set(buffer, offset / Float32Array.BYTES_PER_ELEMENT);
                } else {
                  gpuBuffer.vf32.set(new Float32Array(buffer), offset / Float32Array.BYTES_PER_ELEMENT);
                }
              } else if (gpuBuffer.usage & BufferUsageBit.INDIRECT) {
                gpuBuffer.indirects.clearDraws();
                const drawInfos = buffer.drawInfos;
                for (let i = 0; i < drawInfos.length; ++i) {
                  gpuBuffer.indirects.setDrawInfo(offset + i, drawInfos[i]);
                }
              } else {
                const buff = buffer;
                const {
                  gl
                } = device;
                const cache = device.stateCache;
                switch (gpuBuffer.glTarget) {
                  case gl.ARRAY_BUFFER:
                    {
                      if (device.extensions.useVAO) {
                        if (cache.glVAO) {
                          device.extensions.OES_vertex_array_object.bindVertexArrayOES(null);
                          cache.glVAO = null;
                        }
                      }
                      gfxStateCache.gpuInputAssembler = null;
                      if (device.stateCache.glArrayBuffer !== gpuBuffer.glBuffer) {
                        gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
                        device.stateCache.glArrayBuffer = gpuBuffer.glBuffer;
                      }
                      break;
                    }
                  case gl.ELEMENT_ARRAY_BUFFER:
                    {
                      if (device.extensions.useVAO) {
                        if (cache.glVAO) {
                          device.extensions.OES_vertex_array_object.bindVertexArrayOES(null);
                          cache.glVAO = null;
                        }
                      }
                      gfxStateCache.gpuInputAssembler = null;
                      if (device.stateCache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
                        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                        device.stateCache.glElementArrayBuffer = gpuBuffer.glBuffer;
                      }
                      break;
                    }
                  default:
                    {
                      error('Unsupported BufferType, update buffer failed.');
                      return;
                    }
                }
                if (size === buff.byteLength) {
                  gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
                } else {
                  gl.bufferSubData(gpuBuffer.glTarget, offset, buff.slice(0, size));
                }
              }
            }
            function WebGLCmdFuncCreateTexture(device, gpuTexture) {
              const {
                gl
              } = device;
              gpuTexture.glFormat = gpuTexture.glInternalFmt = GFXFormatToWebGLFormat(gpuTexture.format, gl);
              gpuTexture.glType = GFXFormatToWebGLType(gpuTexture.format, gl);
              let w = gpuTexture.width;
              let h = gpuTexture.height;
              switch (gpuTexture.type) {
                case TextureType.TEX2D:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                    const maxSize = Math.max(w, h);
                    if (maxSize > device.capabilities.maxTextureSize) {
                      errorID(9100, maxSize, device.capabilities.maxTextureSize);
                    }
                    if (!device.textureExclusive[gpuTexture.format] && !device.extensions.WEBGL_depth_texture && FormatInfos[gpuTexture.format].hasDepth) {
                      gpuTexture.glInternalFmt = GFXFormatToWebGLInternalFormat(gpuTexture.format, gl);
                      gpuTexture.glRenderbuffer = gl.createRenderbuffer();
                      if (gpuTexture.size > 0) {
                        if (device.stateCache.glRenderbuffer !== gpuTexture.glRenderbuffer) {
                          gl.bindRenderbuffer(gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
                          device.stateCache.glRenderbuffer = gpuTexture.glRenderbuffer;
                        }
                        gl.renderbufferStorage(gl.RENDERBUFFER, gpuTexture.glInternalFmt, w, h);
                      }
                    } else {
                      gpuTexture.glTexture = gl.createTexture();
                      if (gpuTexture.size > 0) {
                        const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
                        if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                          gl.bindTexture(gl.TEXTURE_2D, gpuTexture.glTexture);
                          glTexUnit.glTexture = gpuTexture.glTexture;
                        }
                        if (FormatInfos[gpuTexture.format].isCompressed) {
                          for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                            const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                            const view = new Uint8Array(imgSize);
                            gl.compressedTexImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, view);
                            w = Math.max(1, w >> 1);
                            h = Math.max(1, h >> 1);
                          }
                        } else {
                          for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                            gl.texImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                            w = Math.max(1, w >> 1);
                            h = Math.max(1, h >> 1);
                          }
                        }
                        if (gpuTexture.isPowerOf2) {
                          gpuTexture.glWrapS = gl.REPEAT;
                          gpuTexture.glWrapT = gl.REPEAT;
                        } else {
                          gpuTexture.glWrapS = gl.CLAMP_TO_EDGE;
                          gpuTexture.glWrapT = gl.CLAMP_TO_EDGE;
                        }
                        gpuTexture.glMinFilter = gl.LINEAR;
                        gpuTexture.glMagFilter = gl.LINEAR;
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_S, gpuTexture.glWrapS);
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_T, gpuTexture.glWrapT);
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MIN_FILTER, gpuTexture.glMinFilter);
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MAG_FILTER, gpuTexture.glMagFilter);
                      }
                    }
                    break;
                  }
                case TextureType.CUBE:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_CUBE_MAP;
                    const maxSize = Math.max(w, h);
                    if (maxSize > device.capabilities.maxCubeMapTextureSize) {
                      errorID(9100, maxSize, device.capabilities.maxTextureSize);
                    }
                    gpuTexture.glTexture = gl.createTexture();
                    if (gpuTexture.size > 0) {
                      const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        gl.bindTexture(gl.TEXTURE_CUBE_MAP, gpuTexture.glTexture);
                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }
                      if (FormatInfos[gpuTexture.format].isCompressed) {
                        for (let f = 0; f < 6; ++f) {
                          w = gpuTexture.width;
                          h = gpuTexture.height;
                          for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                            const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                            const view = new Uint8Array(imgSize);
                            gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, i, gpuTexture.glInternalFmt, w, h, 0, view);
                            w = Math.max(1, w >> 1);
                            h = Math.max(1, h >> 1);
                          }
                        }
                      } else {
                        for (let f = 0; f < 6; ++f) {
                          w = gpuTexture.width;
                          h = gpuTexture.height;
                          for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, i, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                            w = Math.max(1, w >> 1);
                            h = Math.max(1, h >> 1);
                          }
                        }
                      }
                      if (gpuTexture.isPowerOf2) {
                        gpuTexture.glWrapS = gl.REPEAT;
                        gpuTexture.glWrapT = gl.REPEAT;
                      } else {
                        gpuTexture.glWrapS = gl.CLAMP_TO_EDGE;
                        gpuTexture.glWrapT = gl.CLAMP_TO_EDGE;
                      }
                      gpuTexture.glMinFilter = gl.LINEAR;
                      gpuTexture.glMagFilter = gl.LINEAR;
                      gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_S, gpuTexture.glWrapS);
                      gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_T, gpuTexture.glWrapT);
                      gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MIN_FILTER, gpuTexture.glMinFilter);
                      gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MAG_FILTER, gpuTexture.glMagFilter);
                    }
                    break;
                  }
                default:
                  {
                    error('Unsupported TextureType, create texture failed.');
                    gpuTexture.type = TextureType.TEX2D;
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                  }
              }
            }
            function WebGLCmdFuncDestroyTexture(device, gpuTexture) {
              const {
                gl
              } = device;
              if (gpuTexture.glTexture) {
                const glTexUnits = device.stateCache.glTexUnits;
                let texUnit = device.stateCache.texUnit;
                gl.deleteTexture(gpuTexture.glTexture);
                for (let i = 0; i < glTexUnits.length; i++) {
                  if (glTexUnits[i].glTexture === gpuTexture.glTexture) {
                    gl.activeTexture(gl.TEXTURE0 + i);
                    texUnit = i;
                    gl.bindTexture(gpuTexture.glTarget, null);
                    glTexUnits[i].glTexture = null;
                  }
                }
                device.stateCache.texUnit = texUnit;
                gpuTexture.glTexture = null;
              }
              if (gpuTexture.glRenderbuffer) {
                let glRenderbuffer = device.stateCache.glRenderbuffer;
                gl.deleteRenderbuffer(gpuTexture.glRenderbuffer);
                if (glRenderbuffer === gpuTexture.glRenderbuffer) {
                  gl.bindRenderbuffer(gl.RENDERBUFFER, null);
                  glRenderbuffer = null;
                }
                gpuTexture.glRenderbuffer = null;
              }
            }
            function WebGLCmdFuncResizeTexture(device, gpuTexture) {
              if (!gpuTexture.size) return;
              const {
                gl
              } = device;
              let w = gpuTexture.width;
              let h = gpuTexture.height;
              switch (gpuTexture.type) {
                case TextureType.TEX2D:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                    const maxSize = Math.max(w, h);
                    if (maxSize > device.capabilities.maxTextureSize) {
                      errorID(9100, maxSize, device.capabilities.maxTextureSize);
                    }
                    if (gpuTexture.glRenderbuffer) {
                      if (device.stateCache.glRenderbuffer !== gpuTexture.glRenderbuffer) {
                        gl.bindRenderbuffer(gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
                        device.stateCache.glRenderbuffer = gpuTexture.glRenderbuffer;
                      }
                      gl.renderbufferStorage(gl.RENDERBUFFER, gpuTexture.glInternalFmt, w, h);
                    } else if (gpuTexture.glTexture) {
                      const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        gl.bindTexture(gl.TEXTURE_2D, gpuTexture.glTexture);
                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }
                      if (FormatInfos[gpuTexture.format].isCompressed) {
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                          const view = new Uint8Array(imgSize);
                          gl.compressedTexImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, view);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      } else {
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          gl.texImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      }
                    }
                    break;
                  }
                case TextureType.CUBE:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_CUBE_MAP;
                    const maxSize = Math.max(w, h);
                    if (maxSize > device.capabilities.maxCubeMapTextureSize) {
                      errorID(9100, maxSize, device.capabilities.maxTextureSize);
                    }
                    const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
                    if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                      gl.bindTexture(gl.TEXTURE_CUBE_MAP, gpuTexture.glTexture);
                      glTexUnit.glTexture = gpuTexture.glTexture;
                    }
                    if (FormatInfos[gpuTexture.format].isCompressed) {
                      for (let f = 0; f < 6; ++f) {
                        w = gpuTexture.width;
                        h = gpuTexture.height;
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                          const view = new Uint8Array(imgSize);
                          gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, i, gpuTexture.glInternalFmt, w, h, 0, view);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      }
                    } else {
                      for (let f = 0; f < 6; ++f) {
                        w = gpuTexture.width;
                        h = gpuTexture.height;
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, i, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      }
                    }
                    break;
                  }
                default:
                  {
                    error('Unsupported TextureType, create texture failed.');
                    gpuTexture.type = TextureType.TEX2D;
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                  }
              }
            }
            function WebGLCmdFuncCreateFramebuffer(device, gpuFramebuffer) {
              for (let i = 0; i < gpuFramebuffer.gpuColorTextures.length; ++i) {
                const tex = gpuFramebuffer.gpuColorTextures[i];
                if (tex.isSwapchainTexture) {
                  gpuFramebuffer.isOffscreen = false;
                  return;
                }
              }
              const {
                gl
              } = device;
              const attachments = [];
              const glFramebuffer = gl.createFramebuffer();
              if (glFramebuffer) {
                gpuFramebuffer.glFramebuffer = glFramebuffer;
                if (device.stateCache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
                  gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
                }
                for (let i = 0; i < gpuFramebuffer.gpuColorTextures.length; ++i) {
                  const gpuTexture = gpuFramebuffer.gpuColorTextures[i];
                  if (gpuTexture) {
                    if (gpuTexture.glTexture) {
                      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gpuTexture.glTarget, gpuTexture.glTexture, 0);
                    } else {
                      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
                    }
                    attachments.push(gl.COLOR_ATTACHMENT0 + i);
                    gpuFramebuffer.width = Math.min(gpuFramebuffer.width, gpuTexture.width);
                    gpuFramebuffer.height = Math.min(gpuFramebuffer.height, gpuTexture.height);
                  }
                }
                const dst = gpuFramebuffer.gpuDepthStencilTexture;
                if (dst) {
                  const glAttachment = FormatInfos[dst.format].hasStencil ? gl.DEPTH_STENCIL_ATTACHMENT : gl.DEPTH_ATTACHMENT;
                  if (dst.glTexture) {
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, glAttachment, dst.glTarget, dst.glTexture, 0);
                  } else {
                    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, glAttachment, gl.RENDERBUFFER, dst.glRenderbuffer);
                  }
                  gpuFramebuffer.width = Math.min(gpuFramebuffer.width, dst.width);
                  gpuFramebuffer.height = Math.min(gpuFramebuffer.height, dst.height);
                }
                if (device.extensions.WEBGL_draw_buffers) {
                  device.extensions.WEBGL_draw_buffers.drawBuffersWEBGL(attachments);
                }
                const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
                if (status !== gl.FRAMEBUFFER_COMPLETE) {
                  switch (status) {
                    case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                      {
                        error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
                        break;
                      }
                    case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                      {
                        error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
                        break;
                      }
                    case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                      {
                        error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
                        break;
                      }
                    case gl.FRAMEBUFFER_UNSUPPORTED:
                      {
                        error('glCheckFramebufferStatus() - FRAMEBUFFER_UNSUPPORTED');
                        break;
                      }
                  }
                }
                if (device.stateCache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
                  gl.bindFramebuffer(gl.FRAMEBUFFER, device.stateCache.glFramebuffer);
                }
              }
            }
            function WebGLCmdFuncDestroyFramebuffer(device, gpuFramebuffer) {
              if (gpuFramebuffer.glFramebuffer) {
                device.gl.deleteFramebuffer(gpuFramebuffer.glFramebuffer);
                if (device.stateCache.glFramebuffer === gpuFramebuffer.glFramebuffer) {
                  device.gl.bindFramebuffer(device.gl.FRAMEBUFFER, null);
                  device.stateCache.glFramebuffer = null;
                }
                gpuFramebuffer.glFramebuffer = null;
              }
            }
            function WebGLCmdFuncCreateShader(device, gpuShader) {
              const {
                gl
              } = device;
              for (let k = 0; k < gpuShader.gpuStages.length; k++) {
                const gpuStage = gpuShader.gpuStages[k];
                let glShaderType = 0;
                let shaderTypeStr = '';
                let lineNumber = 1;
                switch (gpuStage.type) {
                  case ShaderStageFlagBit.VERTEX:
                    {
                      shaderTypeStr = 'VertexShader';
                      glShaderType = gl.VERTEX_SHADER;
                      break;
                    }
                  case ShaderStageFlagBit.FRAGMENT:
                    {
                      shaderTypeStr = 'FragmentShader';
                      glShaderType = gl.FRAGMENT_SHADER;
                      break;
                    }
                  default:
                    {
                      error('Unsupported ShaderType.');
                      return;
                    }
                }
                const glShader = gl.createShader(glShaderType);
                if (glShader) {
                  gpuStage.glShader = glShader;
                  gl.shaderSource(gpuStage.glShader, gpuStage.source);
                  gl.compileShader(gpuStage.glShader);
                  if (!gl.getShaderParameter(gpuStage.glShader, gl.COMPILE_STATUS)) {
                    error(`${shaderTypeStr} in '${gpuShader.name}' compilation failed.`);
                    error('Shader source dump:', gpuStage.source.replace(/^|\n/g, () => `\n${lineNumber++} `));
                    error(gl.getShaderInfoLog(gpuStage.glShader));
                    for (let l = 0; l < gpuShader.gpuStages.length; l++) {
                      const stage = gpuShader.gpuStages[k];
                      if (stage.glShader) {
                        gl.deleteShader(stage.glShader);
                        stage.glShader = null;
                      }
                    }
                    return;
                  }
                }
              }
              const glProgram = gl.createProgram();
              if (!glProgram) {
                return;
              }
              gpuShader.glProgram = glProgram;
              for (let k = 0; k < gpuShader.gpuStages.length; k++) {
                const gpuStage = gpuShader.gpuStages[k];
                gl.attachShader(gpuShader.glProgram, gpuStage.glShader);
              }
              gl.linkProgram(gpuShader.glProgram);
              if (device.extensions.destroyShadersImmediately) {
                for (let k = 0; k < gpuShader.gpuStages.length; k++) {
                  const gpuStage = gpuShader.gpuStages[k];
                  if (gpuStage.glShader) {
                    gl.detachShader(gpuShader.glProgram, gpuStage.glShader);
                    gl.deleteShader(gpuStage.glShader);
                    gpuStage.glShader = null;
                  }
                }
              }
              if (gl.getProgramParameter(gpuShader.glProgram, gl.LINK_STATUS)) {
                debug(`Shader '${gpuShader.name}' compilation succeeded.`);
              } else {
                error(`Failed to link shader '${gpuShader.name}'.`);
                error(gl.getProgramInfoLog(gpuShader.glProgram));
                return;
              }
              const activeAttribCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_ATTRIBUTES);
              gpuShader.glInputs = new Array(activeAttribCount);
              for (let i = 0; i < activeAttribCount; ++i) {
                const attribInfo = gl.getActiveAttrib(gpuShader.glProgram, i);
                if (attribInfo) {
                  let varName;
                  const nameOffset = attribInfo.name.indexOf('[');
                  if (nameOffset !== -1) {
                    varName = attribInfo.name.substr(0, nameOffset);
                  } else {
                    varName = attribInfo.name;
                  }
                  const glLoc = gl.getAttribLocation(gpuShader.glProgram, varName);
                  const type = WebGLTypeToGFXType(attribInfo.type, gl);
                  const stride = WebGLGetTypeSize(attribInfo.type, gl);
                  gpuShader.glInputs[i] = {
                    binding: glLoc,
                    name: varName,
                    type,
                    stride,
                    count: attribInfo.size,
                    size: stride * attribInfo.size,
                    glType: attribInfo.type,
                    glLoc
                  };
                }
              }
              if (gpuShader.blocks.length > 0) {
                gpuShader.glBlocks = new Array(gpuShader.blocks.length);
                for (let i = 0; i < gpuShader.blocks.length; ++i) {
                  const block = gpuShader.blocks[i];
                  const glBlock = {
                    set: block.set,
                    binding: block.binding,
                    name: block.name,
                    size: 0,
                    glUniforms: new Array(block.members.length),
                    glActiveUniforms: []
                  };
                  gpuShader.glBlocks[i] = glBlock;
                  for (let u = 0; u < block.members.length; ++u) {
                    const uniform = block.members[u];
                    const glType = GFXTypeToWebGLType(uniform.type, gl);
                    const stride = WebGLGetTypeSize(glType, gl);
                    const size = stride * uniform.count;
                    glBlock.glUniforms[u] = {
                      binding: -1,
                      name: uniform.name,
                      type: uniform.type,
                      stride,
                      count: uniform.count,
                      size,
                      offset: 0,
                      glType,
                      glLoc: null,
                      array: null
                    };
                  }
                }
              }
              for (let i = 0; i < gpuShader.subpassInputs.length; ++i) {
                const subpassInput = gpuShader.subpassInputs[i];
                gpuShader.samplerTextures.push(new UniformSamplerTexture(subpassInput.set, subpassInput.binding, subpassInput.name, Type.SAMPLER2D, subpassInput.count));
              }
              if (gpuShader.samplerTextures.length > 0) {
                gpuShader.glSamplerTextures = new Array(gpuShader.samplerTextures.length);
                for (let i = 0; i < gpuShader.samplerTextures.length; ++i) {
                  const sampler = gpuShader.samplerTextures[i];
                  gpuShader.glSamplerTextures[i] = {
                    set: sampler.set,
                    binding: sampler.binding,
                    name: sampler.name,
                    type: sampler.type,
                    count: sampler.count,
                    units: [],
                    glUnits: null,
                    glType: GFXTypeToWebGLType(sampler.type, gl),
                    glLoc: null
                  };
                }
              }
              const activeUniformCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_UNIFORMS);
              for (let i = 0; i < activeUniformCount; ++i) {
                const uniformInfo = gl.getActiveUniform(gpuShader.glProgram, i);
                if (uniformInfo) {
                  const isSampler = uniformInfo.type === gl.SAMPLER_2D || uniformInfo.type === gl.SAMPLER_CUBE;
                  if (!isSampler) {
                    const glLoc = gl.getUniformLocation(gpuShader.glProgram, uniformInfo.name);
                    if (device.extensions.isLocationActive(glLoc)) {
                      let varName;
                      const nameOffset = uniformInfo.name.indexOf('[');
                      if (nameOffset !== -1) {
                        varName = uniformInfo.name.substr(0, nameOffset);
                      } else {
                        varName = uniformInfo.name;
                      }
                      for (let j = 0; j < gpuShader.glBlocks.length; j++) {
                        const glBlock = gpuShader.glBlocks[j];
                        for (let k = 0; k < glBlock.glUniforms.length; k++) {
                          const glUniform = glBlock.glUniforms[k];
                          if (glUniform.name === varName) {
                            glUniform.glLoc = glLoc;
                            glUniform.count = uniformInfo.size;
                            glUniform.size = glUniform.stride * glUniform.count;
                            glUniform.array = new (GFXTypeToTypedArrayCtor(glUniform.type))(glUniform.size / 4);
                            glBlock.glActiveUniforms.push(glUniform);
                            break;
                          }
                        }
                      }
                    }
                  }
                }
              }
              for (let j = 0; j < gpuShader.glBlocks.length; j++) {
                const glBlock = gpuShader.glBlocks[j];
                for (let k = 0; k < glBlock.glUniforms.length; k++) {
                  const glUniform = glBlock.glUniforms[k];
                  glUniform.offset = glBlock.size / 4;
                  glBlock.size += glUniform.size;
                }
              }
              const glActiveSamplers = [];
              const glActiveSamplerLocations = [];
              const {
                bindingMappings
              } = device;
              const {
                texUnitCacheMap
              } = device.stateCache;
              if (!(legacyCC.rendering && legacyCC.rendering.enableEffectImport)) {
                let flexibleSetBaseOffset = 0;
                for (let i = 0; i < gpuShader.blocks.length; ++i) {
                  if (gpuShader.blocks[i].set === bindingMappings.flexibleSet) {
                    flexibleSetBaseOffset++;
                  }
                }
                let arrayOffset = 0;
                for (let i = 0; i < gpuShader.samplerTextures.length; ++i) {
                  const sampler = gpuShader.samplerTextures[i];
                  const glLoc = gl.getUniformLocation(gpuShader.glProgram, sampler.name);
                  if (device.extensions.isLocationActive(glLoc)) {
                    glActiveSamplers.push(gpuShader.glSamplerTextures[i]);
                    glActiveSamplerLocations.push(glLoc);
                  }
                  if (texUnitCacheMap[sampler.name] === undefined) {
                    let binding = sampler.binding + bindingMappings.samplerTextureOffsets[sampler.set] + arrayOffset;
                    if (sampler.set === bindingMappings.flexibleSet) {
                      binding -= flexibleSetBaseOffset;
                    }
                    texUnitCacheMap[sampler.name] = binding % device.capabilities.maxTextureUnits;
                    arrayOffset += sampler.count - 1;
                  }
                }
              } else {
                for (let i = 0; i < gpuShader.samplerTextures.length; ++i) {
                  const sampler = gpuShader.samplerTextures[i];
                  const glLoc = gl.getUniformLocation(gpuShader.glProgram, sampler.name);
                  if (device.extensions.isLocationActive(glLoc)) {
                    glActiveSamplers.push(gpuShader.glSamplerTextures[i]);
                    glActiveSamplerLocations.push(glLoc);
                  }
                  if (texUnitCacheMap[sampler.name] === undefined) {
                    texUnitCacheMap[sampler.name] = sampler.flattened % device.capabilities.maxTextureUnits;
                  }
                }
              }
              if (glActiveSamplers.length) {
                const usedTexUnits = [];
                for (let i = 0; i < glActiveSamplers.length; ++i) {
                  const glSampler = glActiveSamplers[i];
                  let cachedUnit = texUnitCacheMap[glSampler.name];
                  if (cachedUnit !== undefined) {
                    glSampler.glLoc = glActiveSamplerLocations[i];
                    for (let t = 0; t < glSampler.count; ++t) {
                      while (usedTexUnits[cachedUnit]) {
                        cachedUnit = (cachedUnit + 1) % device.capabilities.maxTextureUnits;
                      }
                      glSampler.units.push(cachedUnit);
                      usedTexUnits[cachedUnit] = true;
                    }
                  }
                }
                let unitIdx = 0;
                for (let i = 0; i < glActiveSamplers.length; ++i) {
                  const glSampler = glActiveSamplers[i];
                  if (!device.extensions.isLocationActive(glSampler.glLoc)) {
                    glSampler.glLoc = glActiveSamplerLocations[i];
                    for (let t = 0; t < glSampler.count; ++t) {
                      while (usedTexUnits[unitIdx]) {
                        unitIdx = (unitIdx + 1) % device.capabilities.maxTextureUnits;
                      }
                      if (texUnitCacheMap[glSampler.name] === undefined) {
                        texUnitCacheMap[glSampler.name] = unitIdx;
                      }
                      glSampler.units.push(unitIdx);
                      usedTexUnits[unitIdx] = true;
                    }
                  }
                }
                if (device.stateCache.glProgram !== gpuShader.glProgram) {
                  gl.useProgram(gpuShader.glProgram);
                }
                for (let i = 0; i < glActiveSamplers.length; i++) {
                  const glSampler = glActiveSamplers[i];
                  glSampler.glUnits = new Int32Array(glSampler.units);
                  gl.uniform1iv(glSampler.glLoc, glSampler.glUnits);
                }
                if (device.stateCache.glProgram !== gpuShader.glProgram) {
                  gl.useProgram(device.stateCache.glProgram);
                }
              }
              for (let i = 0; i < gpuShader.glBlocks.length;) {
                if (gpuShader.glBlocks[i].glActiveUniforms.length) {
                  i++;
                } else {
                  gpuShader.glBlocks[i] = gpuShader.glBlocks[gpuShader.glBlocks.length - 1];
                  gpuShader.glBlocks.length--;
                }
              }
              gpuShader.glSamplerTextures = glActiveSamplers;
            }
            function WebGLCmdFuncDestroyShader(device, gpuShader) {
              if (gpuShader.glProgram) {
                const {
                  gl
                } = device;
                if (!device.extensions.destroyShadersImmediately) {
                  for (let k = 0; k < gpuShader.gpuStages.length; k++) {
                    const gpuStage = gpuShader.gpuStages[k];
                    if (gpuStage.glShader) {
                      gl.detachShader(gpuShader.glProgram, gpuStage.glShader);
                      gl.deleteShader(gpuStage.glShader);
                      gpuStage.glShader = null;
                    }
                  }
                }
                gl.deleteProgram(gpuShader.glProgram);
                if (device.stateCache.glProgram === gpuShader.glProgram) {
                  device.gl.useProgram(null);
                  device.stateCache.glProgram = null;
                }
                gpuShader.glProgram = null;
              }
            }
            function WebGLCmdFuncCreateInputAssember(device, gpuInputAssembler) {
              const {
                gl
              } = device;
              gpuInputAssembler.glAttribs = new Array(gpuInputAssembler.attributes.length);
              const offsets = [0, 0, 0, 0, 0, 0, 0, 0];
              for (let i = 0; i < gpuInputAssembler.attributes.length; ++i) {
                const attrib = gpuInputAssembler.attributes[i];
                const stream = attrib.stream !== undefined ? attrib.stream : 0;
                const gpuBuffer = gpuInputAssembler.gpuVertexBuffers[stream];
                const glType = GFXFormatToWebGLType(attrib.format, gl);
                const {
                  size
                } = FormatInfos[attrib.format];
                gpuInputAssembler.glAttribs[i] = {
                  name: attrib.name,
                  glBuffer: gpuBuffer.glBuffer,
                  glType,
                  size,
                  count: FormatInfos[attrib.format].count,
                  stride: gpuBuffer.stride,
                  componentCount: WebGLGetComponentCount(glType, gl),
                  isNormalized: attrib.isNormalized !== undefined ? attrib.isNormalized : false,
                  isInstanced: attrib.isInstanced !== undefined ? attrib.isInstanced : false,
                  offset: offsets[stream]
                };
                offsets[stream] += size;
              }
            }
            function WebGLCmdFuncDestroyInputAssembler(device, gpuInputAssembler) {
              const it = gpuInputAssembler.glVAOs.values();
              let res = it.next();
              const OES_vertex_array_object = device.extensions.OES_vertex_array_object;
              let glVAO = device.stateCache.glVAO;
              while (!res.done) {
                OES_vertex_array_object.deleteVertexArrayOES(res.value);
                if (glVAO === res.value) {
                  OES_vertex_array_object.bindVertexArrayOES(null);
                  glVAO = null;
                }
                res = it.next();
              }
              device.stateCache.glVAO = glVAO;
              gpuInputAssembler.glVAOs.clear();
            }
            const gfxStateCache = {
              gpuPipelineState: null,
              gpuInputAssembler: null,
              glPrimitive: 0
            };
            const realRenderArea = new Rect();
            function WebGLCmdFuncBeginRenderPass(device, gpuRenderPass, gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              let clears = 0;
              if (gpuFramebuffer) {
                realRenderArea.x = renderArea.x << gpuFramebuffer.lodLevel;
                realRenderArea.y = renderArea.y << gpuFramebuffer.lodLevel;
                realRenderArea.width = renderArea.width << gpuFramebuffer.lodLevel;
                realRenderArea.height = renderArea.height << gpuFramebuffer.lodLevel;
              }
              if (gpuFramebuffer && gpuRenderPass) {
                if (cache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
                  gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
                  cache.glFramebuffer = gpuFramebuffer.glFramebuffer;
                }
                if (cache.viewport.left !== realRenderArea.x || cache.viewport.top !== realRenderArea.y || cache.viewport.width !== realRenderArea.width || cache.viewport.height !== realRenderArea.height) {
                  gl.viewport(realRenderArea.x, realRenderArea.y, realRenderArea.width, realRenderArea.height);
                  cache.viewport.left = realRenderArea.x;
                  cache.viewport.top = realRenderArea.y;
                  cache.viewport.width = realRenderArea.width;
                  cache.viewport.height = realRenderArea.height;
                }
                if (cache.scissorRect.x !== realRenderArea.x || cache.scissorRect.y !== realRenderArea.y || cache.scissorRect.width !== realRenderArea.width || cache.scissorRect.height !== realRenderArea.height) {
                  gl.scissor(realRenderArea.x, realRenderArea.y, realRenderArea.width, realRenderArea.height);
                  cache.scissorRect.x = realRenderArea.x;
                  cache.scissorRect.y = realRenderArea.y;
                  cache.scissorRect.width = realRenderArea.width;
                  cache.scissorRect.height = realRenderArea.height;
                }
                let clearCount = clearColors.length;
                if (!device.extensions.WEBGL_draw_buffers) {
                  clearCount = 1;
                }
                for (let j = 0; j < clearCount; ++j) {
                  const colorAttachment = gpuRenderPass.colorAttachments[j];
                  if (colorAttachment.format !== Format.UNKNOWN) {
                    switch (colorAttachment.loadOp) {
                      case LoadOp.LOAD:
                        break;
                      case LoadOp.CLEAR:
                        {
                          if (cache.bs.targets[0].blendColorMask !== ColorMask.ALL) {
                            gl.colorMask(true, true, true, true);
                          }
                          const clearColor = clearColors[0];
                          gl.clearColor(clearColor.x, clearColor.y, clearColor.z, clearColor.w);
                          clears |= gl.COLOR_BUFFER_BIT;
                          break;
                        }
                      case LoadOp.DISCARD:
                        {
                          break;
                        }
                    }
                  }
                }
                if (gpuRenderPass.depthStencilAttachment) {
                  if (gpuRenderPass.depthStencilAttachment.format !== Format.UNKNOWN) {
                    switch (gpuRenderPass.depthStencilAttachment.depthLoadOp) {
                      case LoadOp.LOAD:
                        break;
                      case LoadOp.CLEAR:
                        {
                          if (!cache.dss.depthWrite) {
                            gl.depthMask(true);
                          }
                          gl.clearDepth(clearDepth);
                          clears |= gl.DEPTH_BUFFER_BIT;
                          break;
                        }
                      case LoadOp.DISCARD:
                        {
                          break;
                        }
                    }
                    if (FormatInfos[gpuRenderPass.depthStencilAttachment.format].hasStencil) {
                      switch (gpuRenderPass.depthStencilAttachment.stencilLoadOp) {
                        case LoadOp.LOAD:
                          break;
                        case LoadOp.CLEAR:
                          {
                            if (!cache.dss.stencilWriteMaskFront) {
                              gl.stencilMaskSeparate(gl.FRONT, 0xffff);
                            }
                            if (!cache.dss.stencilWriteMaskBack) {
                              gl.stencilMaskSeparate(gl.BACK, 0xffff);
                            }
                            gl.clearStencil(clearStencil);
                            clears |= gl.STENCIL_BUFFER_BIT;
                            break;
                          }
                        case LoadOp.DISCARD:
                          {
                            break;
                          }
                      }
                    }
                  }
                }
                if (clears) {
                  gl.clear(clears);
                }
                if (clears & gl.COLOR_BUFFER_BIT) {
                  const colorMask = cache.bs.targets[0].blendColorMask;
                  if (colorMask !== ColorMask.ALL) {
                    const r = (colorMask & ColorMask.R) !== ColorMask.NONE;
                    const g = (colorMask & ColorMask.G) !== ColorMask.NONE;
                    const b = (colorMask & ColorMask.B) !== ColorMask.NONE;
                    const a = (colorMask & ColorMask.A) !== ColorMask.NONE;
                    gl.colorMask(r, g, b, a);
                  }
                }
                if (clears & gl.DEPTH_BUFFER_BIT && !cache.dss.depthWrite) {
                  gl.depthMask(false);
                }
                if (clears & gl.STENCIL_BUFFER_BIT) {
                  if (!cache.dss.stencilWriteMaskFront) {
                    gl.stencilMaskSeparate(gl.FRONT, 0);
                  }
                  if (!cache.dss.stencilWriteMaskBack) {
                    gl.stencilMaskSeparate(gl.BACK, 0);
                  }
                }
              }
            }
            function WebGLCmdFuncBindStates(device, gpuPipelineState, gpuInputAssembler, gpuDescriptorSets, dynamicOffsets, dynamicStates) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              const gpuShader = gpuPipelineState && gpuPipelineState.gpuShader;
              let isShaderChanged = false;
              let glWrapS;
              let glWrapT;
              let glMinFilter;
              if (gpuPipelineState && gfxStateCache.gpuPipelineState !== gpuPipelineState) {
                gfxStateCache.gpuPipelineState = gpuPipelineState;
                gfxStateCache.glPrimitive = gpuPipelineState.glPrimitive;
                if (gpuPipelineState.gpuShader) {
                  const {
                    glProgram
                  } = gpuPipelineState.gpuShader;
                  if (cache.glProgram !== glProgram) {
                    gl.useProgram(glProgram);
                    cache.glProgram = glProgram;
                    isShaderChanged = true;
                  }
                }
                const {
                  rs
                } = gpuPipelineState;
                if (rs) {
                  if (cache.rs.cullMode !== rs.cullMode) {
                    switch (rs.cullMode) {
                      case CullMode.NONE:
                        {
                          gl.disable(gl.CULL_FACE);
                          break;
                        }
                      case CullMode.FRONT:
                        {
                          gl.enable(gl.CULL_FACE);
                          gl.cullFace(gl.FRONT);
                          break;
                        }
                      case CullMode.BACK:
                        {
                          gl.enable(gl.CULL_FACE);
                          gl.cullFace(gl.BACK);
                          break;
                        }
                    }
                    cache.rs.cullMode = rs.cullMode;
                  }
                  const isFrontFaceCCW = rs.isFrontFaceCCW;
                  if (cache.rs.isFrontFaceCCW !== isFrontFaceCCW) {
                    gl.frontFace(isFrontFaceCCW ? gl.CCW : gl.CW);
                    cache.rs.isFrontFaceCCW = isFrontFaceCCW;
                  }
                  if (cache.rs.depthBias !== rs.depthBias || cache.rs.depthBiasSlop !== rs.depthBiasSlop) {
                    gl.polygonOffset(rs.depthBias, rs.depthBiasSlop);
                    cache.rs.depthBias = rs.depthBias;
                    cache.rs.depthBiasSlop = rs.depthBiasSlop;
                  }
                  if (cache.rs.lineWidth !== rs.lineWidth) {
                    gl.lineWidth(rs.lineWidth);
                    cache.rs.lineWidth = rs.lineWidth;
                  }
                }
                const {
                  dss
                } = gpuPipelineState;
                if (dss) {
                  if (cache.dss.depthTest !== dss.depthTest) {
                    if (dss.depthTest) {
                      gl.enable(gl.DEPTH_TEST);
                    } else {
                      gl.disable(gl.DEPTH_TEST);
                    }
                    cache.dss.depthTest = dss.depthTest;
                  }
                  if (cache.dss.depthWrite !== dss.depthWrite) {
                    gl.depthMask(dss.depthWrite);
                    cache.dss.depthWrite = dss.depthWrite;
                  }
                  if (cache.dss.depthFunc !== dss.depthFunc) {
                    gl.depthFunc(WebGLCmpFuncs[dss.depthFunc]);
                    cache.dss.depthFunc = dss.depthFunc;
                  }
                  if (cache.dss.stencilTestFront !== dss.stencilTestFront || cache.dss.stencilTestBack !== dss.stencilTestBack) {
                    if (dss.stencilTestFront || dss.stencilTestBack) {
                      gl.enable(gl.STENCIL_TEST);
                    } else {
                      gl.disable(gl.STENCIL_TEST);
                    }
                    cache.dss.stencilTestFront = dss.stencilTestFront;
                    cache.dss.stencilTestBack = dss.stencilTestBack;
                  }
                  if (cache.dss.stencilFuncFront !== dss.stencilFuncFront || cache.dss.stencilRefFront !== dss.stencilRefFront || cache.dss.stencilReadMaskFront !== dss.stencilReadMaskFront) {
                    gl.stencilFuncSeparate(gl.FRONT, WebGLCmpFuncs[dss.stencilFuncFront], dss.stencilRefFront, dss.stencilReadMaskFront);
                    cache.dss.stencilFuncFront = dss.stencilFuncFront;
                    cache.dss.stencilRefFront = dss.stencilRefFront;
                    cache.dss.stencilReadMaskFront = dss.stencilReadMaskFront;
                  }
                  if (cache.dss.stencilFailOpFront !== dss.stencilFailOpFront || cache.dss.stencilZFailOpFront !== dss.stencilZFailOpFront || cache.dss.stencilPassOpFront !== dss.stencilPassOpFront) {
                    gl.stencilOpSeparate(gl.FRONT, WebGLStencilOps[dss.stencilFailOpFront], WebGLStencilOps[dss.stencilZFailOpFront], WebGLStencilOps[dss.stencilPassOpFront]);
                    cache.dss.stencilFailOpFront = dss.stencilFailOpFront;
                    cache.dss.stencilZFailOpFront = dss.stencilZFailOpFront;
                    cache.dss.stencilPassOpFront = dss.stencilPassOpFront;
                  }
                  if (cache.dss.stencilWriteMaskFront !== dss.stencilWriteMaskFront) {
                    gl.stencilMaskSeparate(gl.FRONT, dss.stencilWriteMaskFront);
                    cache.dss.stencilWriteMaskFront = dss.stencilWriteMaskFront;
                  }
                  if (cache.dss.stencilFuncBack !== dss.stencilFuncBack || cache.dss.stencilRefBack !== dss.stencilRefBack || cache.dss.stencilReadMaskBack !== dss.stencilReadMaskBack) {
                    gl.stencilFuncSeparate(gl.BACK, WebGLCmpFuncs[dss.stencilFuncBack], dss.stencilRefBack, dss.stencilReadMaskBack);
                    cache.dss.stencilFuncBack = dss.stencilFuncBack;
                    cache.dss.stencilRefBack = dss.stencilRefBack;
                    cache.dss.stencilReadMaskBack = dss.stencilReadMaskBack;
                  }
                  if (cache.dss.stencilFailOpBack !== dss.stencilFailOpBack || cache.dss.stencilZFailOpBack !== dss.stencilZFailOpBack || cache.dss.stencilPassOpBack !== dss.stencilPassOpBack) {
                    gl.stencilOpSeparate(gl.BACK, WebGLStencilOps[dss.stencilFailOpBack], WebGLStencilOps[dss.stencilZFailOpBack], WebGLStencilOps[dss.stencilPassOpBack]);
                    cache.dss.stencilFailOpBack = dss.stencilFailOpBack;
                    cache.dss.stencilZFailOpBack = dss.stencilZFailOpBack;
                    cache.dss.stencilPassOpBack = dss.stencilPassOpBack;
                  }
                  if (cache.dss.stencilWriteMaskBack !== dss.stencilWriteMaskBack) {
                    gl.stencilMaskSeparate(gl.BACK, dss.stencilWriteMaskBack);
                    cache.dss.stencilWriteMaskBack = dss.stencilWriteMaskBack;
                  }
                }
                const {
                  bs
                } = gpuPipelineState;
                if (bs) {
                  if (cache.bs.isA2C !== bs.isA2C) {
                    if (bs.isA2C) {
                      gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);
                    } else {
                      gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
                    }
                    cache.bs.isA2C = bs.isA2C;
                  }
                  if (cache.bs.blendColor.x !== bs.blendColor.x || cache.bs.blendColor.y !== bs.blendColor.y || cache.bs.blendColor.z !== bs.blendColor.z || cache.bs.blendColor.w !== bs.blendColor.w) {
                    gl.blendColor(bs.blendColor.x, bs.blendColor.y, bs.blendColor.z, bs.blendColor.w);
                    cache.bs.blendColor.x = bs.blendColor.x;
                    cache.bs.blendColor.y = bs.blendColor.y;
                    cache.bs.blendColor.z = bs.blendColor.z;
                    cache.bs.blendColor.w = bs.blendColor.w;
                  }
                  const target0 = bs.targets[0];
                  const target0Cache = cache.bs.targets[0];
                  if (target0Cache.blend !== target0.blend) {
                    if (target0.blend) {
                      gl.enable(gl.BLEND);
                    } else {
                      gl.disable(gl.BLEND);
                    }
                    target0Cache.blend = target0.blend;
                  }
                  if (target0Cache.blendEq !== target0.blendEq || target0Cache.blendAlphaEq !== target0.blendAlphaEq) {
                    gl.blendEquationSeparate(WebGLBlendOps[target0.blendEq], WebGLBlendOps[target0.blendAlphaEq]);
                    target0Cache.blendEq = target0.blendEq;
                    target0Cache.blendAlphaEq = target0.blendAlphaEq;
                  }
                  if (target0Cache.blendSrc !== target0.blendSrc || target0Cache.blendDst !== target0.blendDst || target0Cache.blendSrcAlpha !== target0.blendSrcAlpha || target0Cache.blendDstAlpha !== target0.blendDstAlpha) {
                    gl.blendFuncSeparate(WebGLBlendFactors[target0.blendSrc], WebGLBlendFactors[target0.blendDst], WebGLBlendFactors[target0.blendSrcAlpha], WebGLBlendFactors[target0.blendDstAlpha]);
                    target0Cache.blendSrc = target0.blendSrc;
                    target0Cache.blendDst = target0.blendDst;
                    target0Cache.blendSrcAlpha = target0.blendSrcAlpha;
                    target0Cache.blendDstAlpha = target0.blendDstAlpha;
                  }
                  if (target0Cache.blendColorMask !== target0.blendColorMask) {
                    gl.colorMask((target0.blendColorMask & ColorMask.R) !== ColorMask.NONE, (target0.blendColorMask & ColorMask.G) !== ColorMask.NONE, (target0.blendColorMask & ColorMask.B) !== ColorMask.NONE, (target0.blendColorMask & ColorMask.A) !== ColorMask.NONE);
                    target0Cache.blendColorMask = target0.blendColorMask;
                  }
                }
              }
              if (gpuPipelineState && gpuPipelineState.gpuPipelineLayout && gpuShader) {
                const blockLen = gpuShader.glBlocks.length;
                const {
                  dynamicOffsetIndices
                } = gpuPipelineState.gpuPipelineLayout;
                for (let j = 0; j < blockLen; j++) {
                  const glBlock = gpuShader.glBlocks[j];
                  const gpuDescriptorSet = gpuDescriptorSets[glBlock.set];
                  const descriptorIdx = gpuDescriptorSet && gpuDescriptorSet.descriptorIndices[glBlock.binding];
                  const gpuDescriptor = descriptorIdx >= 0 && gpuDescriptorSet.gpuDescriptors[descriptorIdx];
                  let vf32 = null;
                  let offset = 0;
                  if (gpuDescriptor && gpuDescriptor.gpuBuffer) {
                    const {
                      gpuBuffer
                    } = gpuDescriptor;
                    const dynamicOffsetIndexSet = dynamicOffsetIndices[glBlock.set];
                    const dynamicOffsetIndex = dynamicOffsetIndexSet && dynamicOffsetIndexSet[glBlock.binding];
                    if (dynamicOffsetIndex >= 0) {
                      offset = dynamicOffsets[dynamicOffsetIndex];
                    }
                    if ('vf32' in gpuBuffer) {
                      vf32 = gpuBuffer.vf32;
                    } else {
                      offset += gpuBuffer.offset;
                      vf32 = gpuBuffer.gpuBuffer.vf32;
                    }
                    offset >>= 2;
                  }
                  if (!vf32) {
                    continue;
                  }
                  const uniformLen = glBlock.glActiveUniforms.length;
                  for (let l = 0; l < uniformLen; l++) {
                    const glUniform = glBlock.glActiveUniforms[l];
                    switch (glUniform.glType) {
                      case gl.BOOL:
                      case gl.INT:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniform1iv(glUniform.glLoc, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.BOOL_VEC2:
                      case gl.INT_VEC2:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniform2iv(glUniform.glLoc, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.BOOL_VEC3:
                      case gl.INT_VEC3:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniform3iv(glUniform.glLoc, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.BOOL_VEC4:
                      case gl.INT_VEC4:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniform4iv(glUniform.glLoc, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.FLOAT:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniform1fv(glUniform.glLoc, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.FLOAT_VEC2:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniform2fv(glUniform.glLoc, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.FLOAT_VEC3:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniform3fv(glUniform.glLoc, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.FLOAT_VEC4:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniform4fv(glUniform.glLoc, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.FLOAT_MAT2:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniformMatrix2fv(glUniform.glLoc, false, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.FLOAT_MAT3:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniformMatrix3fv(glUniform.glLoc, false, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                      case gl.FLOAT_MAT4:
                        {
                          for (let u = 0; u < glUniform.array.length; ++u) {
                            const idx = glUniform.offset + offset + u;
                            if (vf32[idx] !== glUniform.array[u]) {
                              for (let n = u, m = idx; n < glUniform.array.length; ++n, ++m) {
                                glUniform.array[n] = vf32[m];
                              }
                              gl.uniformMatrix4fv(glUniform.glLoc, false, glUniform.array);
                              break;
                            }
                          }
                          break;
                        }
                    }
                  }
                  continue;
                }
                const samplerLen = gpuShader.glSamplerTextures.length;
                for (let i = 0; i < samplerLen; i++) {
                  const glSampler = gpuShader.glSamplerTextures[i];
                  const gpuDescriptorSet = gpuDescriptorSets[glSampler.set];
                  let descriptorIndex = gpuDescriptorSet && gpuDescriptorSet.descriptorIndices[glSampler.binding];
                  let gpuDescriptor = descriptorIndex >= 0 && gpuDescriptorSet.gpuDescriptors[descriptorIndex];
                  const texUnitLen = glSampler.units.length;
                  for (let l = 0; l < texUnitLen; l++) {
                    const texUnit = glSampler.units[l];
                    if (!gpuDescriptor || !gpuDescriptor.gpuSampler) {
                      continue;
                    }
                    if (gpuDescriptor.gpuTexture && gpuDescriptor.gpuTexture.size > 0) {
                      const {
                        gpuTexture
                      } = gpuDescriptor;
                      const glTexUnit = cache.glTexUnits[texUnit];
                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        if (cache.texUnit !== texUnit) {
                          gl.activeTexture(gl.TEXTURE0 + texUnit);
                          cache.texUnit = texUnit;
                        }
                        if (gpuTexture.glTexture) {
                          gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
                        } else {
                          gl.bindTexture(gpuTexture.glTarget, device.nullTex2D.gpuTexture.glTexture);
                        }
                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }
                      const {
                        gpuSampler
                      } = gpuDescriptor;
                      if (gpuTexture.isPowerOf2) {
                        glWrapS = gpuSampler.glWrapS;
                        glWrapT = gpuSampler.glWrapT;
                      } else {
                        glWrapS = gl.CLAMP_TO_EDGE;
                        glWrapT = gl.CLAMP_TO_EDGE;
                      }
                      if (gpuTexture.isPowerOf2) {
                        if (gpuTexture.mipLevel <= 1 && (gpuSampler.glMinFilter === gl.LINEAR_MIPMAP_NEAREST || gpuSampler.glMinFilter === gl.LINEAR_MIPMAP_LINEAR)) {
                          glMinFilter = gl.LINEAR;
                        } else {
                          glMinFilter = gpuSampler.glMinFilter;
                        }
                      } else if (gpuSampler.glMinFilter === gl.LINEAR || gpuSampler.glMinFilter === gl.LINEAR_MIPMAP_NEAREST || gpuSampler.glMinFilter === gl.LINEAR_MIPMAP_LINEAR) {
                        glMinFilter = gl.LINEAR;
                      } else {
                        glMinFilter = gl.NEAREST;
                      }
                      if (gpuTexture.glWrapS !== glWrapS) {
                        if (cache.texUnit !== texUnit) {
                          gl.activeTexture(gl.TEXTURE0 + texUnit);
                          cache.texUnit = texUnit;
                        }
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_S, glWrapS);
                        gpuTexture.glWrapS = glWrapS;
                      }
                      if (gpuTexture.glWrapT !== glWrapT) {
                        if (cache.texUnit !== texUnit) {
                          gl.activeTexture(gl.TEXTURE0 + texUnit);
                          cache.texUnit = texUnit;
                        }
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_T, glWrapT);
                        gpuTexture.glWrapT = glWrapT;
                      }
                      if (gpuTexture.glMinFilter !== glMinFilter) {
                        if (cache.texUnit !== texUnit) {
                          gl.activeTexture(gl.TEXTURE0 + texUnit);
                          cache.texUnit = texUnit;
                        }
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MIN_FILTER, glMinFilter);
                        gpuTexture.glMinFilter = glMinFilter;
                      }
                      if (gpuTexture.glMagFilter !== gpuSampler.glMagFilter) {
                        if (cache.texUnit !== texUnit) {
                          gl.activeTexture(gl.TEXTURE0 + texUnit);
                          cache.texUnit = texUnit;
                        }
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MAG_FILTER, gpuSampler.glMagFilter);
                        gpuTexture.glMagFilter = gpuSampler.glMagFilter;
                      }
                    }
                    gpuDescriptor = gpuDescriptorSet.gpuDescriptors[++descriptorIndex];
                  }
                }
              }
              if (gpuInputAssembler && gpuShader && (isShaderChanged || gfxStateCache.gpuInputAssembler !== gpuInputAssembler)) {
                gfxStateCache.gpuInputAssembler = gpuInputAssembler;
                const ia = device.extensions.ANGLE_instanced_arrays;
                if (device.extensions.useVAO) {
                  const vao = device.extensions.OES_vertex_array_object;
                  let glVAO = gpuInputAssembler.glVAOs.get(gpuShader.glProgram);
                  if (!glVAO) {
                    glVAO = vao.createVertexArrayOES();
                    gpuInputAssembler.glVAOs.set(gpuShader.glProgram, glVAO);
                    vao.bindVertexArrayOES(glVAO);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    cache.glArrayBuffer = null;
                    cache.glElementArrayBuffer = null;
                    let glAttrib;
                    const inputLen = gpuShader.glInputs.length;
                    for (let j = 0; j < inputLen; j++) {
                      const glInput = gpuShader.glInputs[j];
                      glAttrib = null;
                      const attribLen = gpuInputAssembler.glAttribs.length;
                      for (let k = 0; k < attribLen; k++) {
                        const attrib = gpuInputAssembler.glAttribs[k];
                        if (attrib.name === glInput.name) {
                          glAttrib = attrib;
                          break;
                        }
                      }
                      if (glAttrib) {
                        if (cache.glArrayBuffer !== glAttrib.glBuffer) {
                          gl.bindBuffer(gl.ARRAY_BUFFER, glAttrib.glBuffer);
                          cache.glArrayBuffer = glAttrib.glBuffer;
                        }
                        for (let c = 0; c < glAttrib.componentCount; ++c) {
                          const glLoc = glInput.glLoc + c;
                          const attribOffset = glAttrib.offset + glAttrib.size * c;
                          gl.enableVertexAttribArray(glLoc);
                          cache.glCurrentAttribLocs[glLoc] = true;
                          gl.vertexAttribPointer(glLoc, glAttrib.count, glAttrib.glType, glAttrib.isNormalized, glAttrib.stride, attribOffset);
                          if (ia) {
                            ia.vertexAttribDivisorANGLE(glLoc, glAttrib.isInstanced ? 1 : 0);
                          }
                        }
                      }
                    }
                    const gpuBuffer = gpuInputAssembler.gpuIndexBuffer;
                    if (gpuBuffer) {
                      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                    }
                    vao.bindVertexArrayOES(null);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    cache.glArrayBuffer = null;
                    cache.glElementArrayBuffer = null;
                  }
                  if (cache.glVAO !== glVAO) {
                    vao.bindVertexArrayOES(glVAO);
                    cache.glVAO = glVAO;
                  }
                } else {
                  for (let a = 0; a < device.capabilities.maxVertexAttributes; ++a) {
                    cache.glCurrentAttribLocs[a] = false;
                  }
                  const inputLen = gpuShader.glInputs.length;
                  for (let j = 0; j < inputLen; j++) {
                    const glInput = gpuShader.glInputs[j];
                    let glAttrib = null;
                    const attribLen = gpuInputAssembler.glAttribs.length;
                    for (let k = 0; k < attribLen; k++) {
                      const attrib = gpuInputAssembler.glAttribs[k];
                      if (attrib.name === glInput.name) {
                        glAttrib = attrib;
                        break;
                      }
                    }
                    if (glAttrib) {
                      if (cache.glArrayBuffer !== glAttrib.glBuffer) {
                        gl.bindBuffer(gl.ARRAY_BUFFER, glAttrib.glBuffer);
                        cache.glArrayBuffer = glAttrib.glBuffer;
                      }
                      for (let c = 0; c < glAttrib.componentCount; ++c) {
                        const glLoc = glInput.glLoc + c;
                        const attribOffset = glAttrib.offset + glAttrib.size * c;
                        if (!cache.glEnabledAttribLocs[glLoc] && glLoc >= 0) {
                          gl.enableVertexAttribArray(glLoc);
                          cache.glEnabledAttribLocs[glLoc] = true;
                        }
                        cache.glCurrentAttribLocs[glLoc] = true;
                        gl.vertexAttribPointer(glLoc, glAttrib.count, glAttrib.glType, glAttrib.isNormalized, glAttrib.stride, attribOffset);
                        if (ia) {
                          ia.vertexAttribDivisorANGLE(glLoc, glAttrib.isInstanced ? 1 : 0);
                        }
                      }
                    }
                  }
                  const gpuBuffer = gpuInputAssembler.gpuIndexBuffer;
                  if (gpuBuffer) {
                    if (cache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
                      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                      cache.glElementArrayBuffer = gpuBuffer.glBuffer;
                    }
                  }
                  for (let a = 0; a < device.capabilities.maxVertexAttributes; ++a) {
                    if (cache.glEnabledAttribLocs[a] !== cache.glCurrentAttribLocs[a]) {
                      gl.disableVertexAttribArray(a);
                      cache.glEnabledAttribLocs[a] = false;
                    }
                  }
                }
              }
              if (gpuPipelineState && gpuPipelineState.dynamicStates.length) {
                const dsLen = gpuPipelineState.dynamicStates.length;
                for (let j = 0; j < dsLen; j++) {
                  const dynamicState = gpuPipelineState.dynamicStates[j];
                  switch (dynamicState) {
                    case DynamicStateFlagBit.LINE_WIDTH:
                      {
                        if (cache.rs.lineWidth !== dynamicStates.lineWidth) {
                          gl.lineWidth(dynamicStates.lineWidth);
                          cache.rs.lineWidth = dynamicStates.lineWidth;
                        }
                        break;
                      }
                    case DynamicStateFlagBit.DEPTH_BIAS:
                      {
                        if (cache.rs.depthBias !== dynamicStates.depthBiasConstant || cache.rs.depthBiasSlop !== dynamicStates.depthBiasSlope) {
                          gl.polygonOffset(dynamicStates.depthBiasConstant, dynamicStates.depthBiasSlope);
                          cache.rs.depthBias = dynamicStates.depthBiasConstant;
                          cache.rs.depthBiasSlop = dynamicStates.depthBiasSlope;
                        }
                        break;
                      }
                    case DynamicStateFlagBit.BLEND_CONSTANTS:
                      {
                        const blendConstant = dynamicStates.blendConstant;
                        if (cache.bs.blendColor.x !== blendConstant.x || cache.bs.blendColor.y !== blendConstant.y || cache.bs.blendColor.z !== blendConstant.z || cache.bs.blendColor.w !== blendConstant.w) {
                          gl.blendColor(blendConstant.x, blendConstant.y, blendConstant.z, blendConstant.w);
                          cache.bs.blendColor.copy(blendConstant);
                        }
                        break;
                      }
                    case DynamicStateFlagBit.STENCIL_WRITE_MASK:
                      {
                        const front = dynamicStates.stencilStatesFront;
                        const back = dynamicStates.stencilStatesBack;
                        if (cache.dss.stencilWriteMaskFront !== front.writeMask) {
                          gl.stencilMaskSeparate(gl.FRONT, front.writeMask);
                          cache.dss.stencilWriteMaskFront = front.writeMask;
                        }
                        if (cache.dss.stencilWriteMaskBack !== back.writeMask) {
                          gl.stencilMaskSeparate(gl.BACK, back.writeMask);
                          cache.dss.stencilWriteMaskBack = back.writeMask;
                        }
                        break;
                      }
                    case DynamicStateFlagBit.STENCIL_COMPARE_MASK:
                      {
                        const front = dynamicStates.stencilStatesFront;
                        const back = dynamicStates.stencilStatesBack;
                        if (cache.dss.stencilRefFront !== front.reference || cache.dss.stencilReadMaskFront !== front.compareMask) {
                          gl.stencilFuncSeparate(gl.FRONT, WebGLCmpFuncs[cache.dss.stencilFuncFront], front.reference, front.compareMask);
                          cache.dss.stencilRefFront = front.reference;
                          cache.dss.stencilReadMaskFront = front.compareMask;
                        }
                        if (cache.dss.stencilRefBack !== back.reference || cache.dss.stencilReadMaskBack !== back.compareMask) {
                          gl.stencilFuncSeparate(gl.BACK, WebGLCmpFuncs[cache.dss.stencilFuncBack], back.reference, back.compareMask);
                          cache.dss.stencilRefBack = back.reference;
                          cache.dss.stencilReadMaskBack = back.compareMask;
                        }
                        break;
                      }
                  }
                }
              }
            }
            function WebGLCmdFuncDraw(device, drawInfo) {
              const {
                gl
              } = device;
              const {
                ANGLE_instanced_arrays: ia,
                WEBGL_multi_draw: md
              } = device.extensions;
              const {
                gpuInputAssembler,
                glPrimitive
              } = gfxStateCache;
              if (gpuInputAssembler) {
                const indexBuffer = gpuInputAssembler.gpuIndexBuffer;
                if (gpuInputAssembler.gpuIndirectBuffer) {
                  const indirects = gpuInputAssembler.gpuIndirectBuffer.indirects;
                  if (indirects.drawByIndex) {
                    for (let j = 0; j < indirects.drawCount; j++) {
                      indirects.byteOffsets[j] = indirects.offsets[j] * indexBuffer.stride;
                    }
                    if (md) {
                      if (indirects.instancedDraw) {
                        md.multiDrawElementsInstancedWEBGL(glPrimitive, indirects.counts, 0, gpuInputAssembler.glIndexType, indirects.byteOffsets, 0, indirects.instances, 0, indirects.drawCount);
                      } else {
                        md.multiDrawElementsWEBGL(glPrimitive, indirects.counts, 0, gpuInputAssembler.glIndexType, indirects.byteOffsets, 0, indirects.drawCount);
                      }
                    } else {
                      for (let j = 0; j < indirects.drawCount; j++) {
                        if (indirects.instances[j] && ia) {
                          ia.drawElementsInstancedANGLE(glPrimitive, indirects.counts[j], gpuInputAssembler.glIndexType, indirects.byteOffsets[j], indirects.instances[j]);
                        } else {
                          gl.drawElements(glPrimitive, indirects.counts[j], gpuInputAssembler.glIndexType, indirects.byteOffsets[j]);
                        }
                      }
                    }
                  } else if (md) {
                    if (indirects.instancedDraw) {
                      md.multiDrawArraysInstancedWEBGL(glPrimitive, indirects.offsets, 0, indirects.counts, 0, indirects.instances, 0, indirects.drawCount);
                    } else {
                      md.multiDrawArraysWEBGL(glPrimitive, indirects.offsets, 0, indirects.counts, 0, indirects.drawCount);
                    }
                  } else {
                    for (let j = 0; j < indirects.drawCount; j++) {
                      if (indirects.instances[j] && ia) {
                        ia.drawArraysInstancedANGLE(glPrimitive, indirects.offsets[j], indirects.counts[j], indirects.instances[j]);
                      } else {
                        gl.drawArrays(glPrimitive, indirects.offsets[j], indirects.counts[j]);
                      }
                    }
                  }
                } else if (drawInfo.instanceCount && ia) {
                  if (indexBuffer) {
                    if (drawInfo.indexCount > 0) {
                      const offset = drawInfo.firstIndex * indexBuffer.stride;
                      ia.drawElementsInstancedANGLE(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, offset, drawInfo.instanceCount);
                    }
                  } else if (drawInfo.vertexCount > 0) {
                    ia.drawArraysInstancedANGLE(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount, drawInfo.instanceCount);
                  }
                } else if (indexBuffer) {
                  if (drawInfo.indexCount > 0) {
                    const offset = drawInfo.firstIndex * indexBuffer.stride;
                    gl.drawElements(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, offset);
                  }
                } else if (drawInfo.vertexCount > 0) {
                  gl.drawArrays(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount);
                }
              }
            }
            const cmdIds = new Array(WebGLCmd.COUNT);
            function WebGLCmdFuncExecuteCmds(device, cmdPackage) {
              cmdIds.fill(0);
              for (let i = 0; i < cmdPackage.cmds.length; ++i) {
                const cmd = cmdPackage.cmds.array[i];
                const cmdId = cmdIds[cmd]++;
                switch (cmd) {
                  case WebGLCmd.BEGIN_RENDER_PASS:
                    {
                      const cmd0 = cmdPackage.beginRenderPassCmds.array[cmdId];
                      WebGLCmdFuncBeginRenderPass(device, cmd0.gpuRenderPass, cmd0.gpuFramebuffer, cmd0.renderArea, cmd0.clearColors, cmd0.clearDepth, cmd0.clearStencil);
                      break;
                    }
                  case WebGLCmd.BIND_STATES:
                    {
                      const cmd2 = cmdPackage.bindStatesCmds.array[cmdId];
                      WebGLCmdFuncBindStates(device, cmd2.gpuPipelineState, cmd2.gpuInputAssembler, cmd2.gpuDescriptorSets, cmd2.dynamicOffsets, cmd2.dynamicStates);
                      break;
                    }
                  case WebGLCmd.DRAW:
                    {
                      const cmd3 = cmdPackage.drawCmds.array[cmdId];
                      WebGLCmdFuncDraw(device, cmd3.drawInfo);
                      break;
                    }
                  case WebGLCmd.UPDATE_BUFFER:
                    {
                      const cmd4 = cmdPackage.updateBufferCmds.array[cmdId];
                      WebGLCmdFuncUpdateBuffer(device, cmd4.gpuBuffer, cmd4.buffer, cmd4.offset, cmd4.size);
                      break;
                    }
                  case WebGLCmd.COPY_BUFFER_TO_TEXTURE:
                    {
                      const cmd5 = cmdPackage.copyBufferToTextureCmds.array[cmdId];
                      WebGLCmdFuncCopyBuffersToTexture(device, cmd5.buffers, cmd5.gpuTexture, cmd5.regions);
                      break;
                    }
                  case WebGLCmd.BLIT_TEXTURE:
                    {
                      const cmd6 = cmdPackage.blitTextureCmds.array[cmdId];
                      WebGLCmdFuncBlitTexture(device, cmd6.srcTexture, cmd6.dstTexture, cmd6.regions, cmd6.filter);
                      break;
                    }
                }
              }
            }
            function WebGLCmdFuncCopyTexImagesToTexture(device, texImages, gpuTexture, regions) {
              const {
                gl
              } = device;
              const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
              if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
                glTexUnit.glTexture = gpuTexture.glTexture;
              }
              let n = 0;
              let f = 0;
              switch (gpuTexture.glTarget) {
                case gl.TEXTURE_2D:
                  {
                    for (let i = 0; i < regions.length; i++) {
                      const region = regions[i];
                      gl.texSubImage2D(gl.TEXTURE_2D, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
                    }
                    break;
                  }
                case gl.TEXTURE_CUBE_MAP:
                  {
                    for (let i = 0; i < regions.length; i++) {
                      const region = regions[i];
                      const fcount = region.texSubres.baseArrayLayer + region.texSubres.layerCount;
                      for (f = region.texSubres.baseArrayLayer; f < fcount; ++f) {
                        gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
                      }
                    }
                    break;
                  }
                default:
                  {
                    error('Unsupported GL texture type, copy buffer to texture failed.');
                  }
              }
              if (gpuTexture.flags & TextureFlagBit.GEN_MIPMAP && gpuTexture.isPowerOf2) {
                gl.generateMipmap(gpuTexture.glTarget);
              }
            }
            let stagingBuffer = new Uint8Array(1);
            function pixelBufferPick(buffer, format, offset, stride, extent) {
              const blockHeight = formatAlignment(format).height;
              const bufferSize = FormatSize(format, extent.width, extent.height, extent.depth);
              const rowStride = FormatSize(format, stride.width, 1, 1);
              const sliceStride = FormatSize(format, stride.width, stride.height, 1);
              const chunkSize = FormatSize(format, extent.width, 1, 1);
              const ArrayBufferCtor = getTypedArrayConstructor(FormatInfos[format]);
              if (stagingBuffer.byteLength < bufferSize) {
                stagingBuffer = new Uint8Array(bufferSize);
              }
              let destOffset = 0;
              let bufferOffset = offset;
              for (let i = 0; i < extent.depth; i++) {
                bufferOffset = offset + sliceStride * i;
                for (let j = 0; j < extent.height; j += blockHeight) {
                  stagingBuffer.subarray(destOffset, destOffset + chunkSize).set(new Uint8Array(buffer.buffer, buffer.byteOffset + bufferOffset, chunkSize));
                  destOffset += chunkSize;
                  bufferOffset += rowStride;
                }
              }
              const length = bufferSize / ArrayBufferCtor.BYTES_PER_ELEMENT;
              assertID(Number.isInteger(length), 9101);
              return new ArrayBufferCtor(stagingBuffer.buffer, 0, length);
            }
            function WebGLCmdFuncCopyBuffersToTexture(device, buffers, gpuTexture, regions) {
              const {
                gl
              } = device;
              const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
              if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
                glTexUnit.glTexture = gpuTexture.glTexture;
              }
              let n = 0;
              let f = 0;
              const fmtInfo = FormatInfos[gpuTexture.format];
              const ArrayBufferCtor = getTypedArrayConstructor(fmtInfo);
              const {
                isCompressed
              } = fmtInfo;
              const blockSize = formatAlignment(gpuTexture.format);
              const extent = new Extent();
              const offset = new Offset();
              const stride = new Extent();
              switch (gpuTexture.glTarget) {
                case gl.TEXTURE_2D:
                  {
                    for (let i = 0; i < regions.length; i++) {
                      const region = regions[i];
                      const mipLevel = region.texSubres.mipLevel;
                      offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
                      offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
                      extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
                      extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
                      stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
                      stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
                      const destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
                      const destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
                      let pixels;
                      const buffer = buffers[n++];
                      if (stride.width === extent.width && stride.height === extent.height) {
                        const length = FormatSize(gpuTexture.format, destWidth, destHeight, 1) / ArrayBufferCtor.BYTES_PER_ELEMENT;
                        assertID(Number.isInteger(length), 9101);
                        pixels = new ArrayBufferCtor(buffer.buffer, buffer.byteOffset + region.buffOffset, length);
                      } else {
                        pixels = pixelBufferPick(buffer, gpuTexture.format, region.buffOffset, stride, extent);
                      }
                      if (!isCompressed) {
                        gl.texSubImage2D(gl.TEXTURE_2D, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, gpuTexture.glType, pixels);
                      } else if (gpuTexture.glInternalFmt !== WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL && !device.extensions.noCompressedTexSubImage2D) {
                        gl.compressedTexSubImage2D(gl.TEXTURE_2D, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, pixels);
                      } else {
                        gl.compressedTexImage2D(gl.TEXTURE_2D, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, 0, pixels);
                      }
                    }
                    break;
                  }
                case gl.TEXTURE_CUBE_MAP:
                  {
                    for (let i = 0; i < regions.length; i++) {
                      const region = regions[i];
                      const mipLevel = region.texSubres.mipLevel;
                      offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
                      offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
                      extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
                      extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
                      stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
                      stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
                      const destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
                      const destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
                      const fcount = region.texSubres.baseArrayLayer + region.texSubres.layerCount;
                      for (f = region.texSubres.baseArrayLayer; f < fcount; ++f) {
                        let pixels;
                        const buffer = buffers[n++];
                        if (stride.width === extent.width && stride.height === extent.height) {
                          const length = FormatSize(gpuTexture.format, destWidth, destHeight, 1) / ArrayBufferCtor.BYTES_PER_ELEMENT;
                          assertID(Number.isInteger(length), 9101);
                          pixels = new ArrayBufferCtor(buffer.buffer, buffer.byteOffset + region.buffOffset, length);
                        } else {
                          pixels = pixelBufferPick(buffer, gpuTexture.format, region.buffOffset, stride, extent);
                        }
                        if (!isCompressed) {
                          gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, gpuTexture.glType, pixels);
                        } else if (gpuTexture.glInternalFmt !== WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL && !device.extensions.noCompressedTexSubImage2D) {
                          gl.compressedTexSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, pixels);
                        } else {
                          gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, 0, pixels);
                        }
                      }
                    }
                    break;
                  }
                default:
                  {
                    error('Unsupported GL texture type, copy buffer to texture failed.');
                  }
              }
              if (gpuTexture.flags & TextureFlagBit.GEN_MIPMAP) {
                gl.generateMipmap(gpuTexture.glTarget);
              }
            }
            function WebGLCmdFuncCopyTextureToBuffers(device, gpuTexture, buffers, regions) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              const framebuffer = gl.createFramebuffer();
              gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
              let x = 0;
              let y = 0;
              let w = 1;
              let h = 1;
              switch (gpuTexture.glTarget) {
                case gl.TEXTURE_2D:
                  {
                    for (let k = 0; k < regions.length; k++) {
                      const region = regions[k];
                      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gpuTexture.glTarget, gpuTexture.glTexture, region.texSubres.mipLevel);
                      x = region.texOffset.x;
                      y = region.texOffset.y;
                      w = region.texExtent.width;
                      h = region.texExtent.height;
                      gl.readPixels(x, y, w, h, gpuTexture.glFormat, gpuTexture.glType, buffers[k]);
                    }
                    break;
                  }
                default:
                  {
                    error('Unsupported GL texture type, copy texture to buffers failed.');
                  }
              }
              gl.bindFramebuffer(gl.FRAMEBUFFER, null);
              cache.glFramebuffer = null;
              gl.deleteFramebuffer(framebuffer);
            }
            function WebGLCmdFuncBlitTexture(device, srcTexture, dstTexture, regions, filter) {
              device.blitManager.draw(srcTexture, dstTexture, regions, filter);
            }

            class WebGLIndirectDrawInfos {
              constructor() {
                this.counts = void 0;
                this.offsets = void 0;
                this.instances = void 0;
                this.drawCount = 0;
                this.drawByIndex = false;
                this.instancedDraw = false;
                this.byteOffsets = void 0;
                this._capacity = 4;
                this.counts = new Int32Array(this._capacity);
                this.offsets = new Int32Array(this._capacity);
                this.instances = new Int32Array(this._capacity);
                this.byteOffsets = new Int32Array(this._capacity);
              }
              clearDraws() {
                this.drawCount = 0;
                this.drawByIndex = false;
                this.instancedDraw = false;
              }
              setDrawInfo(idx, info) {
                this._ensureCapacity(idx);
                this.drawByIndex = info.indexCount > 0;
                this.instancedDraw = !!info.instanceCount;
                this.drawCount = Math.max(idx + 1, this.drawCount);
                if (this.drawByIndex) {
                  this.counts[idx] = info.indexCount;
                  this.offsets[idx] = info.firstIndex;
                } else {
                  this.counts[idx] = info.vertexCount;
                  this.offsets[idx] = info.firstVertex;
                }
                this.instances[idx] = Math.max(1, info.instanceCount);
              }
              _ensureCapacity(target) {
                if (this._capacity > target) return;
                this._capacity = nextPow2(target);
                const counts = new Int32Array(this._capacity);
                const offsets = new Int32Array(this._capacity);
                const instances = new Int32Array(this._capacity);
                this.byteOffsets = new Int32Array(this._capacity);
                counts.set(this.counts);
                offsets.set(this.offsets);
                instances.set(this.instances);
                this.counts = counts;
                this.offsets = offsets;
                this.instances = instances;
              }
            }
            class IWebGLBlitManager {
              constructor() {
                this._gpuShader = null;
                this._gpuDescriptorSetLayout = null;
                this._gpuPipelineLayout = null;
                this._gpuPipelineState = null;
                this._gpuVertexBuffer = null;
                this._gpuInputAssembler = null;
                this._gpuPointSampler = null;
                this._gpuLinearSampler = null;
                this._gpuDescriptorSet = null;
                this._gpuUniformBuffer = null;
                this._drawInfo = null;
                this._glFramebuffer = null;
                this._uniformBuffer = null;
                const {
                  gl
                } = WebGLDeviceManager.instance;
                const device = WebGLDeviceManager.instance;
                const samplerOffset = device.bindingMappingInfo.maxBlockCounts[0];
                this._gpuShader = {
                  name: 'Blit Pass',
                  blocks: [new UniformBlock(0, 0, `BlitParams`, [new Uniform(`tilingOffsetSrc`, Type.FLOAT4, 1), new Uniform(`tilingOffsetDst`, Type.FLOAT4, 1)], 1)],
                  samplerTextures: [new UniformSamplerTexture(0, samplerOffset, 'textureSrc', Type.SAMPLER2D, 1)],
                  subpassInputs: [],
                  gpuStages: [{
                    type: ShaderStageFlagBit.VERTEX,
                    source: `
                    precision mediump float;

                    attribute vec2 a_position;
                    attribute vec2 a_texCoord;
            
                    uniform vec4 tilingOffsetSrc;
                    uniform vec4 tilingOffsetDst;
            
                    varying vec2 v_texCoord;
            
                    void main() {
                        v_texCoord = a_texCoord * tilingOffsetSrc.xy + tilingOffsetSrc.zw;
                        gl_Position = vec4((a_position + 1.0) * tilingOffsetDst.xy - 1.0 + tilingOffsetDst.zw * 2.0, 0, 1);
                    }`,
                    glShader: null
                  }, {
                    type: ShaderStageFlagBit.FRAGMENT,
                    source: `
                    precision mediump float;
                    uniform sampler2D textureSrc;

                    varying vec2 v_texCoord;
                    
                    void main() {
                        gl_FragColor = texture2D(textureSrc, v_texCoord);
                    }`,
                    glShader: null
                  }],
                  glProgram: null,
                  glInputs: [],
                  glUniforms: [],
                  glBlocks: [],
                  glSamplerTextures: []
                };
                WebGLCmdFuncCreateShader(WebGLDeviceManager.instance, this._gpuShader);
                this._gpuDescriptorSetLayout = {
                  bindings: [new DescriptorSetLayoutBinding(0, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX), new DescriptorSetLayoutBinding(samplerOffset, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT)],
                  dynamicBindings: [],
                  descriptorIndices: [],
                  descriptorCount: samplerOffset + 1
                };
                for (let i = 0; i < samplerOffset; i++) {
                  this._gpuDescriptorSetLayout.descriptorIndices[i] = 0;
                }
                this._gpuDescriptorSetLayout.descriptorIndices.push(1);
                this._gpuPipelineLayout = {
                  gpuSetLayouts: [this._gpuDescriptorSetLayout],
                  dynamicOffsetCount: 0,
                  dynamicOffsetOffsets: [0],
                  dynamicOffsetIndices: [[]]
                };
                this._gpuPipelineState = {
                  glPrimitive: gl.TRIANGLE_STRIP,
                  gpuShader: this._gpuShader,
                  gpuPipelineLayout: this._gpuPipelineLayout,
                  rs: null,
                  dss: new DepthStencilState(false, false),
                  bs: null,
                  dynamicStates: [],
                  gpuRenderPass: null
                };
                this._gpuVertexBuffer = {
                  usage: BufferUsageBit.VERTEX,
                  memUsage: MemoryUsageBit.DEVICE,
                  size: 16 * Float32Array.BYTES_PER_ELEMENT,
                  stride: 4 * Float32Array.BYTES_PER_ELEMENT,
                  buffer: null,
                  vf32: null,
                  indirects: new WebGLIndirectDrawInfos(),
                  glTarget: 0,
                  glBuffer: null
                };
                WebGLCmdFuncCreateBuffer(WebGLDeviceManager.instance, this._gpuVertexBuffer);
                WebGLDeviceManager.instance.memoryStatus.bufferSize += this._gpuVertexBuffer.size;
                const data = new Float32Array([-1.0, -1.0, 0.0, 0.0, 1.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0]);
                WebGLCmdFuncUpdateBuffer(WebGLDeviceManager.instance, this._gpuVertexBuffer, data, 0, data.length);
                this._gpuInputAssembler = {
                  attributes: [new Attribute(`a_position`, Format.RG32F), new Attribute(`a_texCoord`, Format.RG32F)],
                  gpuVertexBuffers: [this._gpuVertexBuffer],
                  gpuIndexBuffer: null,
                  gpuIndirectBuffer: null,
                  glAttribs: [],
                  glIndexType: 0,
                  glVAOs: new Map()
                };
                WebGLCmdFuncCreateInputAssember(WebGLDeviceManager.instance, this._gpuInputAssembler);
                this._gpuPointSampler = {
                  glMinFilter: 0x2600,
                  glMagFilter: 0x2600,
                  glWrapS: 0x2901,
                  glWrapT: 0x2901,
                  glWrapR: 0x2901
                };
                this._gpuLinearSampler = {
                  glMinFilter: 0x2601,
                  glMagFilter: 0x2601,
                  glWrapS: 0x2901,
                  glWrapT: 0x2901,
                  glWrapR: 0x2901
                };
                this._uniformBuffer = new Float32Array(8);
                this._gpuUniformBuffer = {
                  usage: BufferUsageBit.UNIFORM,
                  memUsage: MemoryUsageBit.DEVICE,
                  size: 8 * Float32Array.BYTES_PER_ELEMENT,
                  stride: 8 * Float32Array.BYTES_PER_ELEMENT,
                  buffer: this._uniformBuffer,
                  vf32: null,
                  indirects: new WebGLIndirectDrawInfos(),
                  glTarget: 0,
                  glBuffer: null
                };
                WebGLCmdFuncCreateBuffer(WebGLDeviceManager.instance, this._gpuUniformBuffer);
                WebGLDeviceManager.instance.memoryStatus.bufferSize += this._gpuUniformBuffer.size;
                this._gpuDescriptorSet = {
                  gpuDescriptors: [{
                    type: DescriptorType.UNIFORM_BUFFER,
                    gpuBuffer: this._gpuUniformBuffer,
                    gpuTexture: null,
                    gpuSampler: null
                  }, {
                    type: DescriptorType.SAMPLER_TEXTURE,
                    gpuBuffer: null,
                    gpuTexture: null,
                    gpuSampler: null
                  }],
                  descriptorIndices: this._gpuDescriptorSetLayout.descriptorIndices
                };
                this._drawInfo = new DrawInfo(4, 0, 0, 0, 0, 0, 0);
                this._glFramebuffer = WebGLDeviceManager.instance.gl.createFramebuffer();
              }
              destroy() {
                if (this._glFramebuffer) {
                  WebGLDeviceManager.instance.gl.deleteFramebuffer(this._glFramebuffer);
                  this._glFramebuffer = null;
                }
                if (this._gpuVertexBuffer) {
                  WebGLDeviceManager.instance.memoryStatus.bufferSize -= this._gpuVertexBuffer.size;
                  WebGLCmdFuncDestroyBuffer(WebGLDeviceManager.instance, this._gpuVertexBuffer);
                }
                if (this._gpuUniformBuffer) {
                  WebGLDeviceManager.instance.memoryStatus.bufferSize -= this._gpuUniformBuffer.size;
                  WebGLCmdFuncDestroyBuffer(WebGLDeviceManager.instance, this._gpuUniformBuffer);
                }
                if (this._gpuShader) {
                  WebGLCmdFuncDestroyShader(WebGLDeviceManager.instance, this._gpuShader);
                }
                if (this._gpuInputAssembler) {
                  WebGLCmdFuncDestroyInputAssembler(WebGLDeviceManager.instance, this._gpuInputAssembler);
                }
              }
              draw(gpuTextureSrc, gpuTextureDst, regions, filter) {
                const device = WebGLDeviceManager.instance;
                const {
                  gl
                } = device;
                const stateCache = device.stateCache;
                const origFramebuffer = stateCache.glFramebuffer;
                gl.viewport(0, 0, gpuTextureDst.width, gpuTextureDst.height);
                gl.scissor(0, 0, gpuTextureDst.width, gpuTextureDst.height);
                if (!this._uniformBuffer || !this._gpuUniformBuffer || !this._gpuPipelineState || !this._gpuInputAssembler || !this._gpuDescriptorSet || !this._drawInfo) {
                  return;
                }
                const descriptor = this._gpuDescriptorSet.gpuDescriptors[1];
                descriptor.gpuTexture = gpuTextureSrc;
                descriptor.gpuSampler = filter === Filter.POINT ? this._gpuPointSampler : this._gpuLinearSampler;
                const formatInfo = FormatInfos[gpuTextureDst.format];
                let attachment = gl.COLOR_ATTACHMENT0;
                if (formatInfo.hasStencil) {
                  attachment = gl.DEPTH_STENCIL_ATTACHMENT;
                } else if (formatInfo.hasDepth) {
                  attachment = gl.DEPTH_ATTACHMENT;
                }
                const regionIndices = regions.map((_, i) => i);
                regionIndices.sort((a, b) => regions[a].srcSubres.mipLevel - regions[b].srcSubres.mipLevel);
                if (stateCache.glFramebuffer !== this._glFramebuffer) {
                  device.gl.bindFramebuffer(device.gl.FRAMEBUFFER, this._glFramebuffer);
                  stateCache.glFramebuffer = this._glFramebuffer;
                }
                let mipLevel = regions[0].dstSubres.mipLevel;
                if (gpuTextureDst.glTexture) {
                  gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gpuTextureDst.glTarget, gpuTextureDst.glTexture, mipLevel);
                } else {
                  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachment, gl.RENDERBUFFER, gpuTextureDst.glRenderbuffer);
                }
                for (let i = 0; i < regionIndices.length; ++i) {
                  const region = regions[regionIndices[i]];
                  if (gpuTextureSrc.glTexture && mipLevel !== region.srcSubres.mipLevel) {
                    mipLevel = region.srcSubres.mipLevel;
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gpuTextureDst.glTarget, gpuTextureDst.glTexture, mipLevel);
                  }
                  const srcWidth = gpuTextureSrc.width;
                  const srcHeight = gpuTextureSrc.height;
                  const dstWidth = gpuTextureDst.width;
                  const dstHeight = gpuTextureDst.height;
                  this._uniformBuffer[0] = region.srcExtent.width / srcWidth;
                  this._uniformBuffer[1] = region.srcExtent.height / srcHeight;
                  this._uniformBuffer[2] = region.srcOffset.x / srcWidth;
                  this._uniformBuffer[3] = region.srcOffset.y / srcHeight;
                  this._uniformBuffer[4] = region.dstExtent.width / dstWidth;
                  this._uniformBuffer[5] = region.dstExtent.height / dstHeight;
                  this._uniformBuffer[6] = region.dstOffset.x / dstWidth;
                  this._uniformBuffer[7] = region.dstOffset.y / dstHeight;
                  WebGLCmdFuncUpdateBuffer(device, this._gpuUniformBuffer, this._uniformBuffer, 0, this._uniformBuffer.length * Float32Array.BYTES_PER_ELEMENT);
                  WebGLCmdFuncBindStates(device, this._gpuPipelineState, this._gpuInputAssembler, [this._gpuDescriptorSet], [], null);
                  WebGLCmdFuncDraw(device, this._drawInfo);
                }
                if (stateCache.glFramebuffer !== origFramebuffer) {
                  device.gl.bindFramebuffer(device.gl.FRAMEBUFFER, origFramebuffer);
                  stateCache.glFramebuffer = origFramebuffer;
                }
                const origViewport = stateCache.viewport;
                gl.viewport(origViewport.left, origViewport.top, origViewport.width, origViewport.height);
                const origScissor = stateCache.scissorRect;
                gl.scissor(origScissor.x, origScissor.y, origScissor.width, origScissor.height);
              }
            }

            class WebGLBuffer extends Buffer {
              constructor(...args) {
                super(...args);
                this._gpuBuffer = null;
                this._gpuBufferView = null;
                this._uniformBuffer = null;
              }
              get gpuBuffer() {
                return this._gpuBuffer;
              }
              get gpuBufferView() {
                return this._gpuBufferView;
              }
              initialize(info) {
                if ('buffer' in info) {
                  this._isBufferView = true;
                  const buffer = info.buffer;
                  this._usage = buffer.usage;
                  this._memUsage = buffer.memUsage;
                  this._size = this._stride = info.range;
                  this._count = 1;
                  this._flags = buffer.flags;
                  this._gpuBufferView = {
                    gpuBuffer: buffer.gpuBuffer,
                    offset: info.offset,
                    range: info.range
                  };
                } else {
                  this._usage = info.usage;
                  this._memUsage = info.memUsage;
                  this._size = info.size;
                  this._stride = Math.max(info.stride || this._size, 1);
                  this._count = this._size / this._stride;
                  this._flags = info.flags;
                  if (this._usage & BufferUsageBit.UNIFORM && this._size > 0) {
                    this._uniformBuffer = new Uint8Array(this._size);
                  }
                  this._gpuBuffer = {
                    usage: this._usage,
                    memUsage: this._memUsage,
                    size: this._size,
                    stride: this._stride,
                    buffer: null,
                    vf32: null,
                    indirects: new WebGLIndirectDrawInfos(),
                    glTarget: 0,
                    glBuffer: null
                  };
                  if (this._usage & BufferUsageBit.UNIFORM) {
                    this._gpuBuffer.buffer = this._uniformBuffer;
                  }
                  WebGLCmdFuncCreateBuffer(WebGLDeviceManager.instance, this._gpuBuffer);
                  WebGLDeviceManager.instance.memoryStatus.bufferSize += this._size;
                }
              }
              destroy() {
                if (this._gpuBuffer) {
                  WebGLCmdFuncDestroyBuffer(WebGLDeviceManager.instance, this._gpuBuffer);
                  WebGLDeviceManager.instance.memoryStatus.bufferSize -= this._size;
                  this._gpuBuffer = null;
                }
                if (this._gpuBufferView) {
                  this._gpuBufferView = null;
                }
              }
              resize(size) {
                if (this._isBufferView) {
                  console.warn('cannot resize buffer views!');
                  return;
                }
                const oldSize = this._size;
                if (oldSize === size) {
                  return;
                }
                this._size = size;
                this._count = this._size / this._stride;
                if (this._uniformBuffer) {
                  this._uniformBuffer = new Uint8Array(size);
                }
                if (this._gpuBuffer) {
                  if (this._uniformBuffer) {
                    this._gpuBuffer.buffer = this._uniformBuffer;
                  }
                  this._gpuBuffer.size = size;
                  if (size > 0) {
                    WebGLCmdFuncResizeBuffer(WebGLDeviceManager.instance, this._gpuBuffer);
                    WebGLDeviceManager.instance.memoryStatus.bufferSize -= oldSize;
                    WebGLDeviceManager.instance.memoryStatus.bufferSize += size;
                  }
                }
              }
              update(buffer, size) {
                if (this._isBufferView) {
                  console.warn('cannot update through buffer views!');
                  return;
                }
                let buffSize;
                if (size !== undefined) {
                  buffSize = size;
                } else if (this._usage & BufferUsageBit.INDIRECT) {
                  buffSize = 0;
                } else {
                  buffSize = buffer.byteLength;
                }
                WebGLCmdFuncUpdateBuffer(WebGLDeviceManager.instance, this._gpuBuffer, buffer, 0, buffSize);
              }
            }

            class WebGLCommandPool {
              constructor(Clazz, count) {
                this._frees = void 0;
                this._freeIdx = 0;
                this._freeCmds = void 0;
                this._frees = new Array(count);
                this._freeCmds = new CachedArray(count);
                for (let i = 0; i < count; ++i) {
                  this._frees[i] = new Clazz();
                }
                this._freeIdx = count - 1;
              }
              alloc(Clazz) {
                if (this._freeIdx < 0) {
                  const size = this._frees.length * 2;
                  const temp = this._frees;
                  this._frees = new Array(size);
                  const increase = size - temp.length;
                  for (let i = 0; i < increase; ++i) {
                    this._frees[i] = new Clazz();
                  }
                  for (let i = increase, j = 0; i < size; ++i, ++j) {
                    this._frees[i] = temp[j];
                  }
                  this._freeIdx += increase;
                }
                const cmd = this._frees[this._freeIdx];
                this._frees[this._freeIdx--] = null;
                ++cmd.refCount;
                return cmd;
              }
              free(cmd) {
                if (--cmd.refCount === 0) {
                  this._freeCmds.push(cmd);
                }
              }
              freeCmds(cmds) {
                for (let i = 0; i < cmds.length; ++i) {
                  if (--cmds.array[i].refCount === 0) {
                    this._freeCmds.push(cmds.array[i]);
                  }
                }
              }
              release() {
                for (let i = 0; i < this._freeCmds.length; ++i) {
                  const cmd = this._freeCmds.array[i];
                  cmd.clear();
                  this._frees[++this._freeIdx] = cmd;
                }
                this._freeCmds.clear();
              }
            }
            class WebGLCommandAllocator {
              constructor() {
                this.beginRenderPassCmdPool = void 0;
                this.bindStatesCmdPool = void 0;
                this.drawCmdPool = void 0;
                this.updateBufferCmdPool = void 0;
                this.copyBufferToTextureCmdPool = void 0;
                this.blitTextureCmdPool = void 0;
                this.beginRenderPassCmdPool = new WebGLCommandPool(WebGLCmdBeginRenderPass, 1);
                this.bindStatesCmdPool = new WebGLCommandPool(WebGLCmdBindStates, 1);
                this.drawCmdPool = new WebGLCommandPool(WebGLCmdDraw, 1);
                this.updateBufferCmdPool = new WebGLCommandPool(WebGLCmdUpdateBuffer, 1);
                this.copyBufferToTextureCmdPool = new WebGLCommandPool(WebGLCmdCopyBufferToTexture, 1);
                this.blitTextureCmdPool = new WebGLCommandPool(WebGLCmdBlitTexture, 1);
              }
              clearCmds(cmdPackage) {
                if (cmdPackage.beginRenderPassCmds.length) {
                  this.beginRenderPassCmdPool.freeCmds(cmdPackage.beginRenderPassCmds);
                  cmdPackage.beginRenderPassCmds.clear();
                }
                if (cmdPackage.bindStatesCmds.length) {
                  this.bindStatesCmdPool.freeCmds(cmdPackage.bindStatesCmds);
                  cmdPackage.bindStatesCmds.clear();
                }
                if (cmdPackage.drawCmds.length) {
                  this.drawCmdPool.freeCmds(cmdPackage.drawCmds);
                  cmdPackage.drawCmds.clear();
                }
                if (cmdPackage.updateBufferCmds.length) {
                  this.updateBufferCmdPool.freeCmds(cmdPackage.updateBufferCmds);
                  cmdPackage.updateBufferCmds.clear();
                }
                if (cmdPackage.copyBufferToTextureCmds.length) {
                  this.copyBufferToTextureCmdPool.freeCmds(cmdPackage.copyBufferToTextureCmds);
                  cmdPackage.copyBufferToTextureCmds.clear();
                }
                if (cmdPackage.blitTextureCmds.length) {
                  this.blitTextureCmdPool.freeCmds(cmdPackage.blitTextureCmds);
                  cmdPackage.blitTextureCmds.clear();
                }
                cmdPackage.cmds.clear();
              }
              releaseCmds() {
                this.beginRenderPassCmdPool.release();
                this.bindStatesCmdPool.release();
                this.drawCmdPool.release();
                this.updateBufferCmdPool.release();
                this.copyBufferToTextureCmdPool.release();
                this.blitTextureCmdPool.release();
              }
            }

            class WebGLCommandBuffer extends CommandBuffer {
              constructor(...args) {
                super(...args);
                this.cmdPackage = new WebGLCmdPackage();
                this._cmdAllocator = new WebGLCommandAllocator();
                this._isInRenderPass = false;
                this._curGPUPipelineState = null;
                this._curGPUInputAssembler = null;
                this._curGPUDescriptorSets = [];
                this._curDynamicOffsets = Array(8).fill(0);
                this._curDynamicStates = new DynamicStates();
                this._isStateInvalied = false;
              }
              initialize(info) {
                this._type = info.type;
                this._queue = info.queue;
                const setCount = WebGLDeviceManager.instance.bindingMappings.blockOffsets.length;
                for (let i = 0; i < setCount; i++) {
                  this._curGPUDescriptorSets.push(null);
                }
              }
              destroy() {
                this._cmdAllocator.clearCmds(this.cmdPackage);
              }
              begin(renderPass, subpass = 0, frameBuffer) {
                this._cmdAllocator.clearCmds(this.cmdPackage);
                this._curGPUPipelineState = null;
                this._curGPUInputAssembler = null;
                this._curGPUDescriptorSets.length = 0;
                this._numDrawCalls = 0;
                this._numInstances = 0;
                this._numTris = 0;
              }
              end() {
                if (this._isStateInvalied) {
                  this.bindStates();
                }
                this._isInRenderPass = false;
              }
              beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
                const cmd = this._cmdAllocator.beginRenderPassCmdPool.alloc(WebGLCmdBeginRenderPass);
                cmd.gpuRenderPass = renderPass.gpuRenderPass;
                cmd.gpuFramebuffer = framebuffer.gpuFramebuffer;
                cmd.renderArea.copy(renderArea);
                cmd.clearColors.length = clearColors.length;
                for (let i = 0; i < clearColors.length; ++i) {
                  cmd.clearColors[i] = clearColors[i];
                }
                cmd.clearDepth = clearDepth;
                cmd.clearStencil = clearStencil;
                this.cmdPackage.beginRenderPassCmds.push(cmd);
                this.cmdPackage.cmds.push(WebGLCmd.BEGIN_RENDER_PASS);
                this._isInRenderPass = true;
              }
              endRenderPass() {
                this._isInRenderPass = false;
              }
              bindPipelineState(pipelineState) {
                const gpuPipelineState = pipelineState.gpuPipelineState;
                if (gpuPipelineState !== this._curGPUPipelineState) {
                  this._curGPUPipelineState = gpuPipelineState;
                  this._isStateInvalied = true;
                }
              }
              bindDescriptorSet(set, descriptorSet, dynamicOffsets) {
                const gpuDescriptorSet = descriptorSet.gpuDescriptorSet;
                if (gpuDescriptorSet !== this._curGPUDescriptorSets[set]) {
                  this._curGPUDescriptorSets[set] = gpuDescriptorSet;
                  this._isStateInvalied = true;
                }
                if (dynamicOffsets) {
                  var _this$_curGPUPipeline;
                  const gpuPipelineLayout = (_this$_curGPUPipeline = this._curGPUPipelineState) === null || _this$_curGPUPipeline === void 0 ? void 0 : _this$_curGPUPipeline.gpuPipelineLayout;
                  if (gpuPipelineLayout) {
                    const offsets = this._curDynamicOffsets;
                    const idx = gpuPipelineLayout.dynamicOffsetOffsets[set];
                    for (let i = 0; i < dynamicOffsets.length; i++) offsets[idx + i] = dynamicOffsets[i];
                    this._isStateInvalied = true;
                  }
                }
              }
              bindInputAssembler(inputAssembler) {
                const gpuInputAssembler = inputAssembler.gpuInputAssembler;
                this._curGPUInputAssembler = gpuInputAssembler;
                this._isStateInvalied = true;
              }
              setViewport(viewport) {
                const cache = this._curDynamicStates.viewport;
                if (cache.left !== viewport.left || cache.top !== viewport.top || cache.width !== viewport.width || cache.height !== viewport.height || cache.minDepth !== viewport.minDepth || cache.maxDepth !== viewport.maxDepth) {
                  cache.left = viewport.left;
                  cache.top = viewport.top;
                  cache.width = viewport.width;
                  cache.height = viewport.height;
                  cache.minDepth = viewport.minDepth;
                  cache.maxDepth = viewport.maxDepth;
                  this._isStateInvalied = true;
                }
              }
              setScissor(scissor) {
                const cache = this._curDynamicStates.scissor;
                if (cache.x !== scissor.x || cache.y !== scissor.y || cache.width !== scissor.width || cache.height !== scissor.height) {
                  cache.x = scissor.x;
                  cache.y = scissor.y;
                  cache.width = scissor.width;
                  cache.height = scissor.height;
                  this._isStateInvalied = true;
                }
              }
              setLineWidth(lineWidth) {
                if (this._curDynamicStates.lineWidth !== lineWidth) {
                  this._curDynamicStates.lineWidth = lineWidth;
                  this._isStateInvalied = true;
                }
              }
              setDepthBias(depthBiasConstantFactor, depthBiasClamp, depthBiasSlopeFactor) {
                const cache = this._curDynamicStates;
                if (cache.depthBiasConstant !== depthBiasConstantFactor || cache.depthBiasClamp !== depthBiasClamp || cache.depthBiasSlope !== depthBiasSlopeFactor) {
                  cache.depthBiasConstant = depthBiasConstantFactor;
                  cache.depthBiasClamp = depthBiasClamp;
                  cache.depthBiasSlope = depthBiasSlopeFactor;
                  this._isStateInvalied = true;
                }
              }
              setBlendConstants(blendConstants) {
                const cache = this._curDynamicStates.blendConstant;
                if (cache.x !== blendConstants.x || cache.y !== blendConstants.y || cache.z !== blendConstants.z || cache.w !== blendConstants.w) {
                  cache.copy(blendConstants);
                  this._isStateInvalied = true;
                }
              }
              setDepthBound(minDepthBounds, maxDepthBounds) {
                const cache = this._curDynamicStates;
                if (cache.depthMinBounds !== minDepthBounds || cache.depthMaxBounds !== maxDepthBounds) {
                  cache.depthMinBounds = minDepthBounds;
                  cache.depthMaxBounds = maxDepthBounds;
                  this._isStateInvalied = true;
                }
              }
              setStencilWriteMask(face, writeMask) {
                const front = this._curDynamicStates.stencilStatesFront;
                const back = this._curDynamicStates.stencilStatesBack;
                if (face & StencilFace.FRONT) {
                  if (front.writeMask !== writeMask) {
                    front.writeMask = writeMask;
                    this._isStateInvalied = true;
                  }
                }
                if (face & StencilFace.BACK) {
                  if (back.writeMask !== writeMask) {
                    back.writeMask = writeMask;
                    this._isStateInvalied = true;
                  }
                }
              }
              setStencilCompareMask(face, reference, compareMask) {
                const front = this._curDynamicStates.stencilStatesFront;
                const back = this._curDynamicStates.stencilStatesBack;
                if (face & StencilFace.FRONT) {
                  if (front.compareMask !== compareMask || front.reference !== reference) {
                    front.reference = reference;
                    front.compareMask = compareMask;
                    this._isStateInvalied = true;
                  }
                }
                if (face & StencilFace.BACK) {
                  if (back.compareMask !== compareMask || back.reference !== reference) {
                    back.reference = reference;
                    back.compareMask = compareMask;
                    this._isStateInvalied = true;
                  }
                }
              }
              draw(infoOrAssembler) {
                if (this._type === CommandBufferType.PRIMARY && this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
                  if (this._isStateInvalied) {
                    this.bindStates();
                  }
                  const info = 'drawInfo' in infoOrAssembler ? infoOrAssembler.drawInfo : infoOrAssembler;
                  const cmd = this._cmdAllocator.drawCmdPool.alloc(WebGLCmdDraw);
                  cmd.drawInfo.copy(info);
                  this.cmdPackage.drawCmds.push(cmd);
                  this.cmdPackage.cmds.push(WebGLCmd.DRAW);
                  ++this._numDrawCalls;
                  this._numInstances += info.instanceCount;
                  const indexCount = info.indexCount || info.vertexCount;
                  if (this._curGPUPipelineState) {
                    const glPrimitive = this._curGPUPipelineState.glPrimitive;
                    switch (glPrimitive) {
                      case 0x0004:
                        {
                          this._numTris += indexCount / 3 * Math.max(info.instanceCount, 1);
                          break;
                        }
                      case 0x0005:
                      case 0x0006:
                        {
                          this._numTris += (indexCount - 2) * Math.max(info.instanceCount, 1);
                          break;
                        }
                    }
                  }
                } else {
                  console.error('Command \'draw\' must be recorded inside a render pass.');
                }
              }
              updateBuffer(buffer, data, size) {
                if (this._type === CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
                  const gpuBuffer = buffer.gpuBuffer;
                  if (gpuBuffer) {
                    const cmd = this._cmdAllocator.updateBufferCmdPool.alloc(WebGLCmdUpdateBuffer);
                    let buffSize = 0;
                    let buff = null;
                    if (buffer.usage & BufferUsageBit.INDIRECT) {
                      buff = data;
                    } else {
                      if (size !== undefined) {
                        buffSize = size;
                      } else {
                        buffSize = data.byteLength;
                      }
                      buff = data;
                    }
                    cmd.gpuBuffer = gpuBuffer;
                    cmd.buffer = buff;
                    cmd.offset = 0;
                    cmd.size = buffSize;
                    this.cmdPackage.updateBufferCmds.push(cmd);
                    this.cmdPackage.cmds.push(WebGLCmd.UPDATE_BUFFER);
                  }
                } else {
                  console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
                }
              }
              copyBuffersToTexture(buffers, texture, regions) {
                if (this._type === CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
                  const gpuTexture = texture.gpuTexture;
                  if (gpuTexture) {
                    const cmd = this._cmdAllocator.copyBufferToTextureCmdPool.alloc(WebGLCmdCopyBufferToTexture);
                    if (cmd) {
                      cmd.gpuTexture = gpuTexture;
                      cmd.regions = regions;
                      cmd.buffers = buffers;
                      this.cmdPackage.copyBufferToTextureCmds.push(cmd);
                      this.cmdPackage.cmds.push(WebGLCmd.COPY_BUFFER_TO_TEXTURE);
                    }
                  }
                } else {
                  console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
                }
              }
              execute(cmdBuffs, count) {
                for (let i = 0; i < count; ++i) {
                  const webGLCmdBuff = cmdBuffs[i];
                  for (let c = 0; c < webGLCmdBuff.cmdPackage.beginRenderPassCmds.length; ++c) {
                    const cmd = webGLCmdBuff.cmdPackage.beginRenderPassCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.beginRenderPassCmds.push(cmd);
                  }
                  for (let c = 0; c < webGLCmdBuff.cmdPackage.bindStatesCmds.length; ++c) {
                    const cmd = webGLCmdBuff.cmdPackage.bindStatesCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.bindStatesCmds.push(cmd);
                  }
                  for (let c = 0; c < webGLCmdBuff.cmdPackage.drawCmds.length; ++c) {
                    const cmd = webGLCmdBuff.cmdPackage.drawCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.drawCmds.push(cmd);
                  }
                  for (let c = 0; c < webGLCmdBuff.cmdPackage.updateBufferCmds.length; ++c) {
                    const cmd = webGLCmdBuff.cmdPackage.updateBufferCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.updateBufferCmds.push(cmd);
                  }
                  for (let c = 0; c < webGLCmdBuff.cmdPackage.copyBufferToTextureCmds.length; ++c) {
                    const cmd = webGLCmdBuff.cmdPackage.copyBufferToTextureCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.copyBufferToTextureCmds.push(cmd);
                  }
                  for (let c = 0; c < webGLCmdBuff.cmdPackage.blitTextureCmds.length; ++c) {
                    const cmd = webGLCmdBuff.cmdPackage.blitTextureCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.blitTextureCmds.push(cmd);
                  }
                  this.cmdPackage.cmds.concat(webGLCmdBuff.cmdPackage.cmds.array);
                  this._numDrawCalls += webGLCmdBuff._numDrawCalls;
                  this._numInstances += webGLCmdBuff._numInstances;
                  this._numTris += webGLCmdBuff._numTris;
                }
              }
              pipelineBarrier(GeneralBarrier, bufferBarriers, buffers, textureBarriers, textures) {}
              bindStates() {
                const bindStatesCmd = this._cmdAllocator.bindStatesCmdPool.alloc(WebGLCmdBindStates);
                if (bindStatesCmd) {
                  bindStatesCmd.gpuPipelineState = this._curGPUPipelineState;
                  Array.prototype.push.apply(bindStatesCmd.gpuDescriptorSets, this._curGPUDescriptorSets);
                  Array.prototype.push.apply(bindStatesCmd.dynamicOffsets, this._curDynamicOffsets);
                  bindStatesCmd.gpuInputAssembler = this._curGPUInputAssembler;
                  bindStatesCmd.dynamicStates.copy(this._curDynamicStates);
                  this.cmdPackage.bindStatesCmds.push(bindStatesCmd);
                  this.cmdPackage.cmds.push(WebGLCmd.BIND_STATES);
                  this._isStateInvalied = false;
                }
              }
              blitTexture(srcTexture, dstTexture, regions, filter) {
                const blitTextureCmd = this._cmdAllocator.blitTextureCmdPool.alloc(WebGLCmdBlitTexture);
                blitTextureCmd.srcTexture = srcTexture.gpuTexture;
                blitTextureCmd.dstTexture = dstTexture.gpuTexture;
                blitTextureCmd.regions = regions;
                blitTextureCmd.filter = filter;
                ++this._numDrawCalls;
                this.cmdPackage.blitTextureCmds.push(blitTextureCmd);
                this.cmdPackage.cmds.push(WebGLCmd.BLIT_TEXTURE);
              }
            }

            class WebGLFramebuffer extends Framebuffer {
              constructor(...args) {
                super(...args);
                this._gpuFramebuffer = null;
              }
              get gpuFramebuffer() {
                return this._gpuFramebuffer;
              }
              initialize(info) {
                this._renderPass = info.renderPass;
                this._colorTextures = info.colorTextures || [];
                this._depthStencilTexture = info.depthStencilTexture || null;
                let lodLevel = 0;
                const gpuColorTextures = [];
                for (let i = 0; i < info.colorTextures.length; ++i) {
                  const colorTexture = info.colorTextures[i];
                  if (colorTexture) {
                    gpuColorTextures.push(colorTexture.gpuTexture);
                    lodLevel = colorTexture.lodLevel;
                  }
                }
                let gpuDepthStencilTexture = null;
                if (info.depthStencilTexture) {
                  gpuDepthStencilTexture = info.depthStencilTexture.gpuTexture;
                  lodLevel = info.depthStencilTexture.lodLevel;
                }
                let width = Number.MAX_SAFE_INTEGER;
                let height = Number.MAX_SAFE_INTEGER;
                this._gpuFramebuffer = {
                  gpuRenderPass: info.renderPass.gpuRenderPass,
                  gpuColorTextures,
                  gpuDepthStencilTexture,
                  glFramebuffer: null,
                  isOffscreen: true,
                  get width() {
                    if (this.gpuColorTextures.length > 0) {
                      return this.gpuColorTextures[0].width;
                    } else if (this.gpuDepthStencilTexture) {
                      return this.gpuDepthStencilTexture.width;
                    }
                    return width;
                  },
                  set width(val) {
                    width = val;
                  },
                  get height() {
                    if (this.gpuColorTextures.length > 0) {
                      return this.gpuColorTextures[0].height;
                    } else if (this.gpuDepthStencilTexture) {
                      return this.gpuDepthStencilTexture.height;
                    }
                    return height;
                  },
                  set height(val) {
                    height = val;
                  },
                  lodLevel
                };
                WebGLCmdFuncCreateFramebuffer(WebGLDeviceManager.instance, this._gpuFramebuffer);
                this._width = this._gpuFramebuffer.width;
                this._height = this._gpuFramebuffer.height;
              }
              destroy() {
                if (this._gpuFramebuffer) {
                  WebGLCmdFuncDestroyFramebuffer(WebGLDeviceManager.instance, this._gpuFramebuffer);
                  this._gpuFramebuffer = null;
                }
              }
            }

            class WebGLInputAssembler extends InputAssembler {
              constructor(...args) {
                super(...args);
                this._gpuInputAssembler = null;
              }
              get gpuInputAssembler() {
                return this._gpuInputAssembler;
              }
              initialize(info) {
                if (info.vertexBuffers.length === 0) {
                  console.error('InputAssemblerInfo.vertexBuffers is null.');
                  return;
                }
                this._attributes = info.attributes;
                this._attributesHash = this.computeAttributesHash();
                this._vertexBuffers = info.vertexBuffers;
                if (info.indexBuffer) {
                  this._indexBuffer = info.indexBuffer;
                  this._drawInfo.indexCount = this._indexBuffer.size / this._indexBuffer.stride;
                  this._drawInfo.firstIndex = 0;
                } else {
                  const vertBuff = this._vertexBuffers[0];
                  this._drawInfo.vertexCount = vertBuff.size / vertBuff.stride;
                  this._drawInfo.firstVertex = 0;
                  this._drawInfo.vertexOffset = 0;
                }
                this._drawInfo.instanceCount = 0;
                this._drawInfo.firstInstance = 0;
                this._indirectBuffer = info.indirectBuffer || null;
                const gpuVertexBuffers = new Array(info.vertexBuffers.length);
                for (let i = 0; i < info.vertexBuffers.length; ++i) {
                  const vb = info.vertexBuffers[i];
                  if (vb.gpuBuffer) {
                    gpuVertexBuffers[i] = vb.gpuBuffer;
                  }
                }
                let gpuIndexBuffer = null;
                let glIndexType = 0;
                if (info.indexBuffer) {
                  gpuIndexBuffer = info.indexBuffer.gpuBuffer;
                  if (gpuIndexBuffer) {
                    switch (gpuIndexBuffer.stride) {
                      case 1:
                        glIndexType = 0x1401;
                        break;
                      case 2:
                        glIndexType = 0x1403;
                        break;
                      case 4:
                        glIndexType = 0x1405;
                        break;
                      default:
                        {
                          console.error('Error index buffer stride.');
                        }
                    }
                  }
                }
                let gpuIndirectBuffer = null;
                if (info.indirectBuffer) {
                  gpuIndirectBuffer = info.indirectBuffer.gpuBuffer;
                }
                this._gpuInputAssembler = {
                  attributes: info.attributes,
                  gpuVertexBuffers,
                  gpuIndexBuffer,
                  gpuIndirectBuffer,
                  glAttribs: [],
                  glIndexType,
                  glVAOs: new Map()
                };
                WebGLCmdFuncCreateInputAssember(WebGLDeviceManager.instance, this._gpuInputAssembler);
              }
              destroy() {
                const device = WebGLDeviceManager.instance;
                if (this._gpuInputAssembler && device.extensions.useVAO) {
                  WebGLCmdFuncDestroyInputAssembler(device, this._gpuInputAssembler);
                }
                this._gpuInputAssembler = null;
              }
            }

            class WebGLDescriptorSetLayout extends DescriptorSetLayout {
              constructor(...args) {
                super(...args);
                this._gpuDescriptorSetLayout = null;
              }
              get gpuDescriptorSetLayout() {
                return this._gpuDescriptorSetLayout;
              }
              initialize(info) {
                Array.prototype.push.apply(this._bindings, info.bindings);
                let descriptorCount = 0;
                let maxBinding = -1;
                const flattenedIndices = [];
                for (let i = 0; i < this._bindings.length; i++) {
                  const binding = this._bindings[i];
                  flattenedIndices.push(descriptorCount);
                  descriptorCount += binding.count;
                  if (binding.binding > maxBinding) maxBinding = binding.binding;
                }
                this._bindingIndices = Array(maxBinding + 1).fill(-1);
                const descriptorIndices = this._descriptorIndices = Array(maxBinding + 1).fill(-1);
                for (let i = 0; i < this._bindings.length; i++) {
                  const binding = this._bindings[i];
                  this._bindingIndices[binding.binding] = i;
                  descriptorIndices[binding.binding] = flattenedIndices[i];
                }
                const dynamicBindings = [];
                for (let i = 0; i < this._bindings.length; i++) {
                  const binding = this._bindings[i];
                  if (binding.descriptorType & DESCRIPTOR_DYNAMIC_TYPE) {
                    for (let j = 0; j < binding.count; j++) {
                      dynamicBindings.push(binding.binding);
                    }
                  }
                }
                this._gpuDescriptorSetLayout = {
                  bindings: this._bindings,
                  dynamicBindings,
                  descriptorIndices,
                  descriptorCount
                };
              }
              destroy() {
                this._bindings.length = 0;
              }
            }

            class WebGLPipelineLayout extends PipelineLayout {
              constructor(...args) {
                super(...args);
                this._gpuPipelineLayout = null;
              }
              get gpuPipelineLayout() {
                return this._gpuPipelineLayout;
              }
              initialize(info) {
                Array.prototype.push.apply(this._setLayouts, info.setLayouts);
                const dynamicOffsetIndices = [];
                const gpuSetLayouts = [];
                let dynamicOffsetCount = 0;
                const dynamicOffsetOffsets = [];
                for (let i = 0; i < this._setLayouts.length; i++) {
                  const setLayout = this._setLayouts[i];
                  const dynamicBindings = setLayout.gpuDescriptorSetLayout.dynamicBindings;
                  const indices = Array(setLayout.bindingIndices.length).fill(-1);
                  for (let j = 0; j < dynamicBindings.length; j++) {
                    const binding = dynamicBindings[j];
                    if (indices[binding] < 0) indices[binding] = dynamicOffsetCount + j;
                  }
                  gpuSetLayouts.push(setLayout.gpuDescriptorSetLayout);
                  dynamicOffsetIndices.push(indices);
                  dynamicOffsetOffsets.push(dynamicOffsetCount);
                  dynamicOffsetCount += dynamicBindings.length;
                }
                this._gpuPipelineLayout = {
                  gpuSetLayouts,
                  dynamicOffsetIndices,
                  dynamicOffsetCount,
                  dynamicOffsetOffsets
                };
              }
              destroy() {
                this._setLayouts.length = 0;
              }
            }

            const WebGLPrimitives = [0x0000, 0x0001, 0x0003, 0x0002, 0x0000, 0x0000, 0x0000, 0x0004, 0x0005, 0x0006, 0x0000, 0x0000, 0x0000, 0x0000];
            class WebGLPipelineState extends PipelineState {
              constructor(...args) {
                super(...args);
                this._gpuPipelineState = null;
              }
              get gpuPipelineState() {
                return this._gpuPipelineState;
              }
              initialize(info) {
                this._primitive = info.primitive;
                this._shader = info.shader;
                this._pipelineLayout = info.pipelineLayout;
                const bs = this._bs;
                if (info.blendState) {
                  const bsInfo = info.blendState;
                  const {
                    targets
                  } = bsInfo;
                  if (targets) {
                    targets.forEach((t, i) => {
                      bs.setTarget(i, t);
                    });
                  }
                  if (bsInfo.isA2C !== undefined) {
                    bs.isA2C = bsInfo.isA2C;
                  }
                  if (bsInfo.isIndepend !== undefined) {
                    bs.isIndepend = bsInfo.isIndepend;
                  }
                  if (bsInfo.blendColor !== undefined) {
                    bs.blendColor = bsInfo.blendColor;
                  }
                }
                Object.assign(this._rs, info.rasterizerState);
                Object.assign(this._dss, info.depthStencilState);
                this._is = info.inputState;
                this._renderPass = info.renderPass;
                this._dynamicStates = info.dynamicStates;
                const dynamicStates = [];
                for (let i = 0; i < 31; i++) {
                  if (this._dynamicStates & 1 << i) {
                    dynamicStates.push(1 << i);
                  }
                }
                this._gpuPipelineState = {
                  glPrimitive: WebGLPrimitives[info.primitive],
                  gpuShader: info.shader.gpuShader,
                  gpuPipelineLayout: info.pipelineLayout.gpuPipelineLayout,
                  rs: info.rasterizerState,
                  dss: info.depthStencilState,
                  bs: info.blendState,
                  gpuRenderPass: info.renderPass.gpuRenderPass,
                  dynamicStates
                };
              }
              destroy() {
                this._gpuPipelineState = null;
              }
            }

            class WebGLPrimaryCommandBuffer extends WebGLCommandBuffer {
              beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
                WebGLCmdFuncBeginRenderPass(WebGLDeviceManager.instance, renderPass.gpuRenderPass, framebuffer.gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil);
                this._isInRenderPass = true;
              }
              draw(infoOrAssembler) {
                if (this._isInRenderPass) {
                  if (this._isStateInvalied) {
                    this.bindStates();
                  }
                  const info = 'drawInfo' in infoOrAssembler ? infoOrAssembler.drawInfo : infoOrAssembler;
                  WebGLCmdFuncDraw(WebGLDeviceManager.instance, info);
                  ++this._numDrawCalls;
                  this._numInstances += info.instanceCount;
                  const indexCount = info.indexCount || info.vertexCount;
                  if (this._curGPUPipelineState) {
                    const glPrimitive = this._curGPUPipelineState.glPrimitive;
                    switch (glPrimitive) {
                      case 0x0004:
                        {
                          this._numTris += indexCount / 3 * Math.max(info.instanceCount, 1);
                          break;
                        }
                      case 0x0005:
                      case 0x0006:
                        {
                          this._numTris += (indexCount - 2) * Math.max(info.instanceCount, 1);
                          break;
                        }
                    }
                  }
                } else {
                  console.error('Command \'draw\' must be recorded inside a render pass.');
                }
              }
              setViewport(viewport) {
                const {
                  stateCache: cache,
                  gl
                } = WebGLDeviceManager.instance;
                if (cache.viewport.left !== viewport.left || cache.viewport.top !== viewport.top || cache.viewport.width !== viewport.width || cache.viewport.height !== viewport.height) {
                  gl.viewport(viewport.left, viewport.top, viewport.width, viewport.height);
                  cache.viewport.left = viewport.left;
                  cache.viewport.top = viewport.top;
                  cache.viewport.width = viewport.width;
                  cache.viewport.height = viewport.height;
                }
              }
              setScissor(scissor) {
                const {
                  stateCache: cache,
                  gl
                } = WebGLDeviceManager.instance;
                if (cache.scissorRect.x !== scissor.x || cache.scissorRect.y !== scissor.y || cache.scissorRect.width !== scissor.width || cache.scissorRect.height !== scissor.height) {
                  gl.scissor(scissor.x, scissor.y, scissor.width, scissor.height);
                  cache.scissorRect.x = scissor.x;
                  cache.scissorRect.y = scissor.y;
                  cache.scissorRect.width = scissor.width;
                  cache.scissorRect.height = scissor.height;
                }
              }
              updateBuffer(buffer, data, size) {
                if (!this._isInRenderPass) {
                  const gpuBuffer = buffer.gpuBuffer;
                  if (gpuBuffer) {
                    let buffSize;
                    if (size !== undefined) {
                      buffSize = size;
                    } else if (buffer.usage & BufferUsageBit.INDIRECT) {
                      buffSize = 0;
                    } else {
                      buffSize = data.byteLength;
                    }
                    WebGLCmdFuncUpdateBuffer(WebGLDeviceManager.instance, gpuBuffer, data, 0, buffSize);
                  }
                } else {
                  console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
                }
              }
              copyBuffersToTexture(buffers, texture, regions) {
                if (!this._isInRenderPass) {
                  const gpuTexture = texture.gpuTexture;
                  if (gpuTexture) {
                    WebGLCmdFuncCopyBuffersToTexture(WebGLDeviceManager.instance, buffers, gpuTexture, regions);
                  }
                } else {
                  console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
                }
              }
              execute(cmdBuffs, count) {
                for (let i = 0; i < count; ++i) {
                  const webGLCmdBuff = cmdBuffs[i];
                  WebGLCmdFuncExecuteCmds(WebGLDeviceManager.instance, webGLCmdBuff.cmdPackage);
                  this._numDrawCalls += webGLCmdBuff._numDrawCalls;
                  this._numInstances += webGLCmdBuff._numInstances;
                  this._numTris += webGLCmdBuff._numTris;
                }
              }
              bindStates() {
                WebGLCmdFuncBindStates(WebGLDeviceManager.instance, this._curGPUPipelineState, this._curGPUInputAssembler, this._curGPUDescriptorSets, this._curDynamicOffsets, this._curDynamicStates);
                this._isStateInvalied = false;
              }
              blitTexture(srcTexture, dstTexture, regions, filter) {
                const gpuTextureSrc = srcTexture.gpuTexture;
                const gpuTextureDst = dstTexture.gpuTexture;
                WebGLCmdFuncBlitTexture(WebGLDeviceManager.instance, gpuTextureSrc, gpuTextureDst, regions, filter);
              }
            }

            class WebGLQueue extends Queue {
              constructor(...args) {
                super(...args);
                this.numDrawCalls = 0;
                this.numInstances = 0;
                this.numTris = 0;
              }
              initialize(info) {
                this._type = info.type;
              }
              destroy() {}
              submit(cmdBuffs) {
                const len = cmdBuffs.length;
                for (let i = 0; i < len; i++) {
                  const cmdBuff = cmdBuffs[i];
                  this.numDrawCalls += cmdBuff.numDrawCalls;
                  this.numInstances += cmdBuff.numInstances;
                  this.numTris += cmdBuff.numTris;
                }
              }
              clear() {
                this.numDrawCalls = 0;
                this.numInstances = 0;
                this.numTris = 0;
              }
            }

            class WebGLRenderPass extends RenderPass {
              constructor(...args) {
                super(...args);
                this._gpuRenderPass = null;
              }
              get gpuRenderPass() {
                return this._gpuRenderPass;
              }
              initialize(info) {
                this._colorInfos = info.colorAttachments;
                this._depthStencilInfo = info.depthStencilAttachment;
                this._subpasses = info.subpasses;
                this._gpuRenderPass = {
                  colorAttachments: this._colorInfos,
                  depthStencilAttachment: this._depthStencilInfo
                };
                this._hash = this.computeHash();
              }
              destroy() {
                this._gpuRenderPass = null;
              }
            }

            const WebGLWraps = [0x2901, 0x8370, 0x812F, 0x812F];
            class WebGLSampler extends Sampler {
              get gpuSampler() {
                return this._gpuSampler;
              }
              constructor(info, hash) {
                super(info, hash);
                this._gpuSampler = null;
                let glMinFilter = 0;
                let glMagFilter = 0;
                const minFilter = this._info.minFilter;
                const magFilter = this._info.magFilter;
                const mipFilter = this._info.mipFilter;
                if (minFilter === Filter.LINEAR || minFilter === Filter.ANISOTROPIC) {
                  if (mipFilter === Filter.LINEAR || mipFilter === Filter.ANISOTROPIC) {
                    glMinFilter = 0x2703;
                  } else if (mipFilter === Filter.POINT) {
                    glMinFilter = 0x2701;
                  } else {
                    glMinFilter = 0x2601;
                  }
                } else if (mipFilter === Filter.LINEAR || mipFilter === Filter.ANISOTROPIC) {
                  glMinFilter = 0x2702;
                } else if (mipFilter === Filter.POINT) {
                  glMinFilter = 0x2700;
                } else {
                  glMinFilter = 0x2600;
                }
                if (magFilter === Filter.LINEAR || magFilter === Filter.ANISOTROPIC) {
                  glMagFilter = 0x2601;
                } else {
                  glMagFilter = 0x2600;
                }
                const glWrapS = WebGLWraps[this._info.addressU];
                const glWrapT = WebGLWraps[this._info.addressV];
                const glWrapR = WebGLWraps[this._info.addressW];
                this._gpuSampler = {
                  glMinFilter,
                  glMagFilter,
                  glWrapS,
                  glWrapT,
                  glWrapR
                };
              }
            }

            class WebGLShader extends Shader {
              constructor(...args) {
                super(...args);
                this._gpuShader = null;
              }
              get gpuShader() {
                if (this._gpuShader.glProgram === null) {
                  WebGLCmdFuncCreateShader(WebGLDeviceManager.instance, this._gpuShader);
                }
                return this._gpuShader;
              }
              initialize(info) {
                this._name = info.name;
                this._stages = info.stages;
                this._attributes = info.attributes;
                this._blocks = info.blocks;
                this._samplers = info.samplers;
                this._gpuShader = {
                  name: info.name,
                  blocks: info.blocks.slice(),
                  samplerTextures: info.samplerTextures.slice(),
                  subpassInputs: info.subpassInputs.slice(),
                  gpuStages: new Array(info.stages.length),
                  glProgram: null,
                  glInputs: [],
                  glUniforms: [],
                  glBlocks: [],
                  glSamplerTextures: []
                };
                for (let i = 0; i < info.stages.length; ++i) {
                  const stage = info.stages[i];
                  this._gpuShader.gpuStages[i] = {
                    type: stage.stage,
                    source: stage.source,
                    glShader: null
                  };
                }
              }
              destroy() {
                if (this._gpuShader) {
                  WebGLCmdFuncDestroyShader(WebGLDeviceManager.instance, this._gpuShader);
                  this._gpuShader = null;
                }
              }
            }

            class WebGLStateCache {
              constructor() {
                this.glArrayBuffer = null;
                this.glElementArrayBuffer = null;
                this.glVAO = null;
                this.texUnit = 0;
                this.glTexUnits = [];
                this.glRenderbuffer = null;
                this.glFramebuffer = null;
                this.viewport = new Viewport();
                this.scissorRect = new Rect(0, 0, 0, 0);
                this.rs = new RasterizerState();
                this.dss = new DepthStencilState();
                this.bs = new BlendState();
                this.glProgram = null;
                this.glEnabledAttribLocs = [];
                this.glCurrentAttribLocs = [];
                this.texUnitCacheMap = {};
              }
              initialize(texUnit, vertexAttributes) {
                for (let i = 0; i < texUnit; ++i) this.glTexUnits.push({
                  glTexture: null
                });
                this.glEnabledAttribLocs.length = vertexAttributes;
                this.glEnabledAttribLocs.fill(false);
                this.glCurrentAttribLocs.length = vertexAttributes;
                this.glCurrentAttribLocs.fill(false);
              }
            }

            class WebGLTexture extends Texture {
              constructor(...args) {
                super(...args);
                this._gpuTexture = null;
                this._lodLevel = 0;
              }
              get gpuTexture() {
                return this._gpuTexture;
              }
              get lodLevel() {
                return this._lodLevel;
              }
              initialize(info, isSwapchainTexture) {
                let texInfo = info;
                const viewInfo = info;
                if ('texture' in info) {
                  texInfo = viewInfo.texture.info;
                  this._isTextureView = true;
                }
                this._info.copy(texInfo);
                this._isPowerOf2 = IsPowerOf2(this._info.width) && IsPowerOf2(this._info.height);
                this._size = FormatSurfaceSize(this._info.format, this.width, this.height, this.depth, this._info.levelCount) * this._info.layerCount;
                if (!this._isTextureView) {
                  this._gpuTexture = {
                    type: texInfo.type,
                    format: texInfo.format,
                    usage: texInfo.usage,
                    width: texInfo.width,
                    height: texInfo.height,
                    depth: texInfo.depth,
                    size: this._size,
                    arrayLayer: texInfo.layerCount,
                    mipLevel: texInfo.levelCount,
                    samples: texInfo.samples,
                    flags: texInfo.flags,
                    isPowerOf2: this._isPowerOf2,
                    glTarget: 0,
                    glInternalFmt: 0,
                    glFormat: 0,
                    glType: 0,
                    glUsage: 0,
                    glTexture: null,
                    glRenderbuffer: null,
                    glWrapS: 0,
                    glWrapT: 0,
                    glMinFilter: 0,
                    glMagFilter: 0,
                    isSwapchainTexture: isSwapchainTexture || false
                  };
                  if (!this._gpuTexture.isSwapchainTexture) {
                    WebGLCmdFuncCreateTexture(WebGLDeviceManager.instance, this._gpuTexture);
                    WebGLDeviceManager.instance.memoryStatus.textureSize += this._size;
                  }
                  this._viewInfo.texture = this;
                  this._viewInfo.type = info.type;
                  this._viewInfo.format = info.format;
                  this._viewInfo.baseLevel = 0;
                  this._viewInfo.levelCount = info.levelCount;
                  this._viewInfo.baseLayer = 0;
                  this._viewInfo.layerCount = info.layerCount;
                } else {
                  this._viewInfo.copy(viewInfo);
                  this._lodLevel = viewInfo.baseLevel;
                  this._gpuTexture = viewInfo.texture._gpuTexture;
                }
              }
              destroy() {
                if (!this._isTextureView && this._gpuTexture) {
                  WebGLCmdFuncDestroyTexture(WebGLDeviceManager.instance, this._gpuTexture);
                  WebGLDeviceManager.instance.memoryStatus.textureSize -= this._size;
                  this._gpuTexture = null;
                }
              }
              getGLTextureHandle() {
                const gpuTexture = this._gpuTexture;
                if (!gpuTexture) {
                  return 0;
                }
                if (gpuTexture.glTexture) {
                  return gpuTexture.glTexture;
                } else if (gpuTexture.glRenderbuffer) {
                  return gpuTexture.glRenderbuffer;
                }
                return 0;
              }
              resize(width, height) {
                if (this._info.width === width && this._info.height === height) {
                  return;
                }
                if (this._info.levelCount === WebGLTexture.getLevelCount(this._info.width, this._info.height)) {
                  this._info.levelCount = WebGLTexture.getLevelCount(width, height);
                } else if (this._info.levelCount > 1) {
                  this._info.levelCount = Math.min(this._info.levelCount, WebGLTexture.getLevelCount(width, height));
                }
                const oldSize = this._size;
                this._info.width = width;
                this._info.height = height;
                this._size = FormatSurfaceSize(this._info.format, this.width, this.height, this.depth, this._info.levelCount) * this._info.layerCount;
                if (!this._isTextureView && this._gpuTexture) {
                  this._gpuTexture.width = width;
                  this._gpuTexture.height = height;
                  this._gpuTexture.size = this._size;
                  if (!this._gpuTexture.isSwapchainTexture) {
                    WebGLCmdFuncResizeTexture(WebGLDeviceManager.instance, this._gpuTexture);
                    WebGLDeviceManager.instance.memoryStatus.textureSize -= oldSize;
                    WebGLDeviceManager.instance.memoryStatus.textureSize += this._size;
                  }
                }
              }
              initAsSwapchainTexture(info) {
                const texInfo = new TextureInfo();
                texInfo.format = info.format;
                texInfo.usage = FormatInfos[info.format].hasDepth ? TextureUsageBit.DEPTH_STENCIL_ATTACHMENT : TextureUsageBit.COLOR_ATTACHMENT;
                texInfo.width = info.width;
                texInfo.height = info.height;
                this.initialize(texInfo, true);
              }
            }

            const eventWebGLContextLost = 'webglcontextlost';
            function initStates(gl) {
              gl.activeTexture(gl.TEXTURE0);
              gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
              gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
              gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
              gl.bindFramebuffer(gl.FRAMEBUFFER, null);
              gl.enable(gl.SCISSOR_TEST);
              gl.enable(gl.CULL_FACE);
              gl.cullFace(gl.BACK);
              gl.frontFace(gl.CCW);
              gl.disable(gl.POLYGON_OFFSET_FILL);
              gl.polygonOffset(0.0, 0.0);
              gl.enable(gl.DEPTH_TEST);
              gl.depthMask(true);
              gl.depthFunc(gl.LESS);
              gl.depthRange(0.0, 1.0);
              gl.stencilFuncSeparate(gl.FRONT, gl.ALWAYS, 1, 0xffff);
              gl.stencilOpSeparate(gl.FRONT, gl.KEEP, gl.KEEP, gl.KEEP);
              gl.stencilMaskSeparate(gl.FRONT, 0xffff);
              gl.stencilFuncSeparate(gl.BACK, gl.ALWAYS, 1, 0xffff);
              gl.stencilOpSeparate(gl.BACK, gl.KEEP, gl.KEEP, gl.KEEP);
              gl.stencilMaskSeparate(gl.BACK, 0xffff);
              gl.disable(gl.STENCIL_TEST);
              gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
              gl.disable(gl.BLEND);
              gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
              gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ONE, gl.ZERO);
              gl.colorMask(true, true, true, true);
              gl.blendColor(0.0, 0.0, 0.0, 0.0);
            }
            function getExtension(gl, ext) {
              const prefixes = ['', 'WEBKIT_', 'MOZ_'];
              for (let i = 0; i < prefixes.length; ++i) {
                const _ext = gl.getExtension(prefixes[i] + ext);
                if (_ext) {
                  return _ext;
                }
              }
              return null;
            }
            function getExtensions(gl) {
              const res = {
                EXT_texture_filter_anisotropic: getExtension(gl, 'EXT_texture_filter_anisotropic'),
                EXT_blend_minmax: getExtension(gl, 'EXT_blend_minmax'),
                EXT_frag_depth: getExtension(gl, 'EXT_frag_depth'),
                EXT_shader_texture_lod: getExtension(gl, 'EXT_shader_texture_lod'),
                EXT_sRGB: getExtension(gl, 'EXT_sRGB'),
                OES_vertex_array_object: getExtension(gl, 'OES_vertex_array_object'),
                EXT_color_buffer_half_float: getExtension(gl, 'EXT_color_buffer_half_float'),
                WEBGL_color_buffer_float: getExtension(gl, 'WEBGL_color_buffer_float'),
                WEBGL_compressed_texture_etc1: getExtension(gl, 'WEBGL_compressed_texture_etc1'),
                WEBGL_compressed_texture_etc: getExtension(gl, 'WEBGL_compressed_texture_etc'),
                WEBGL_compressed_texture_pvrtc: getExtension(gl, 'WEBGL_compressed_texture_pvrtc'),
                WEBGL_compressed_texture_s3tc: getExtension(gl, 'WEBGL_compressed_texture_s3tc'),
                WEBGL_compressed_texture_s3tc_srgb: getExtension(gl, 'WEBGL_compressed_texture_s3tc_srgb'),
                WEBGL_debug_shaders: getExtension(gl, 'WEBGL_debug_shaders'),
                WEBGL_draw_buffers: getExtension(gl, 'WEBGL_draw_buffers'),
                WEBGL_lose_context: getExtension(gl, 'WEBGL_lose_context'),
                WEBGL_depth_texture: getExtension(gl, 'WEBGL_depth_texture'),
                OES_texture_half_float: getExtension(gl, 'OES_texture_half_float'),
                OES_texture_half_float_linear: getExtension(gl, 'OES_texture_half_float_linear'),
                OES_texture_float: getExtension(gl, 'OES_texture_float'),
                OES_texture_float_linear: getExtension(gl, 'OES_texture_float_linear'),
                OES_standard_derivatives: getExtension(gl, 'OES_standard_derivatives'),
                OES_element_index_uint: getExtension(gl, 'OES_element_index_uint'),
                ANGLE_instanced_arrays: getExtension(gl, 'ANGLE_instanced_arrays'),
                WEBGL_debug_renderer_info: getExtension(gl, 'WEBGL_debug_renderer_info'),
                WEBGL_multi_draw: null,
                WEBGL_compressed_texture_astc: null,
                destroyShadersImmediately: true,
                noCompressedTexSubImage2D: false,
                isLocationActive: glLoc => !!glLoc,
                useVAO: false
              };
              {
                if (systemInfo.os !== OS.IOS || systemInfo.osMainVersion !== 14 || !systemInfo.isBrowser) {
                  res.WEBGL_compressed_texture_astc = getExtension(gl, 'WEBGL_compressed_texture_astc');
                }
                if (systemInfo.os !== OS.ANDROID && systemInfo.os !== OS.IOS) {
                  res.WEBGL_multi_draw = getExtension(gl, 'WEBGL_multi_draw');
                }
                if (systemInfo.browserType === BrowserType.UC) {
                  res.ANGLE_instanced_arrays = null;
                }
                if (systemInfo.os === OS.IOS && systemInfo.osMainVersion <= 10 || (WECHAT_MINI_PROGRAM) ) {
                  res.destroyShadersImmediately = false;
                }
              }
              if (res.OES_vertex_array_object) {
                res.useVAO = true;
              }
              return res;
            }
            function getContext(canvas) {
              let context = null;
              try {
                const webGLCtxAttribs = {
                  alpha: macro.ENABLE_TRANSPARENT_CANVAS,
                  antialias: EDITOR || macro.ENABLE_WEBGL_ANTIALIAS,
                  depth: true,
                  stencil: true,
                  premultipliedAlpha: false,
                  preserveDrawingBuffer: false,
                  powerPreference: 'default',
                  failIfMajorPerformanceCaveat: false
                };
                context = canvas.getContext('webgl', webGLCtxAttribs);
              } catch (err) {
                return null;
              }
              return context;
            }
            class WebGLSwapchain extends Swapchain {
              constructor(...args) {
                super(...args);
                this.stateCache = new WebGLStateCache();
                this.cmdAllocator = new WebGLCommandAllocator();
                this.nullTex2D = null;
                this.nullTexCube = null;
                this._canvas = null;
                this._webGLContextLostHandler = null;
                this._extensions = null;
                this._blitManager = null;
              }
              get extensions() {
                return this._extensions;
              }
              get blitManager() {
                return this._blitManager;
              }
              initialize(info) {
                this._canvas = info.windowHandle;
                this._webGLContextLostHandler = this._onWebGLContextLost.bind(this);
                this._canvas.addEventListener(eventWebGLContextLost, this._onWebGLContextLost);
                const gl = WebGLDeviceManager.instance.gl;
                this.stateCache.initialize(WebGLDeviceManager.instance.capabilities.maxTextureUnits, WebGLDeviceManager.instance.capabilities.maxVertexAttributes);
                this._extensions = getExtensions(gl);
                initStates(gl);
                const colorFmt = Format.RGBA8;
                let depthStencilFmt = Format.DEPTH_STENCIL;
                let depthBits = gl.getParameter(gl.DEPTH_BITS);
                const stencilBits = gl.getParameter(gl.STENCIL_BITS);
                if (depthBits && stencilBits) depthStencilFmt = Format.DEPTH_STENCIL;else if (depthBits) depthStencilFmt = Format.DEPTH;
                this._colorTexture = new WebGLTexture();
                this._colorTexture.initAsSwapchainTexture({
                  swapchain: this,
                  format: colorFmt,
                  width: info.width,
                  height: info.height
                });
                this._depthStencilTexture = new WebGLTexture();
                this._depthStencilTexture.initAsSwapchainTexture({
                  swapchain: this,
                  format: depthStencilFmt,
                  width: info.width,
                  height: info.height
                });
                this.nullTex2D = WebGLDeviceManager.instance.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.GEN_MIPMAP));
                this.nullTexCube = WebGLDeviceManager.instance.createTexture(new TextureInfo(TextureType.CUBE, TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.GEN_MIPMAP, 6));
                const nullTexRegion = new BufferTextureCopy();
                nullTexRegion.texExtent.width = 2;
                nullTexRegion.texExtent.height = 2;
                const nullTexBuff = new Uint8Array(this.nullTex2D.size);
                nullTexBuff.fill(0);
                WebGLDeviceManager.instance.copyBuffersToTexture([nullTexBuff], this.nullTex2D, [nullTexRegion]);
                nullTexRegion.texSubres.layerCount = 6;
                WebGLDeviceManager.instance.copyBuffersToTexture([nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff], this.nullTexCube, [nullTexRegion]);
                this._blitManager = new IWebGLBlitManager();
              }
              destroy() {
                if (this._canvas && this._webGLContextLostHandler) {
                  this._canvas.removeEventListener(eventWebGLContextLost, this._webGLContextLostHandler);
                  this._webGLContextLostHandler = null;
                }
                if (this.nullTex2D) {
                  this.nullTex2D.destroy();
                  this.nullTex2D = null;
                }
                if (this.nullTexCube) {
                  this.nullTexCube.destroy();
                  this.nullTexCube = null;
                }
                if (this._blitManager) {
                  this._blitManager.destroy();
                  this._blitManager = null;
                }
                this._extensions = null;
                this._canvas = null;
              }
              resize(width, height, surfaceTransform) {
                if (this._colorTexture.width !== width || this._colorTexture.height !== height) {
                  debug(`Resizing swapchain: ${width}x${height}`);
                  this._canvas.width = width;
                  this._canvas.height = height;
                  this._colorTexture.resize(width, height);
                  this._depthStencilTexture.resize(width, height);
                }
              }
              _onWebGLContextLost(event) {
                warnID(11000);
                warn(event);
              }
            }

            class WebGLDevice extends Device {
              constructor(...args) {
                super(...args);
                this._swapchain = null;
                this._context = null;
                this._bindingMappings = null;
                this._textureExclusive = new Array(Format.COUNT);
              }
              get gl() {
                return this._context;
              }
              get extensions() {
                return this._swapchain.extensions;
              }
              get stateCache() {
                return this._swapchain.stateCache;
              }
              get nullTex2D() {
                return this._swapchain.nullTex2D;
              }
              get nullTexCube() {
                return this._swapchain.nullTexCube;
              }
              get textureExclusive() {
                return this._textureExclusive;
              }
              get bindingMappings() {
                return this._bindingMappings;
              }
              get blitManager() {
                return this._swapchain.blitManager;
              }
              initialize(info) {
                WebGLDeviceManager.setInstance(this);
                this._gfxAPI = API.WEBGL;
                const mapping = this._bindingMappingInfo = info.bindingMappingInfo;
                const blockOffsets = [];
                const samplerTextureOffsets = [];
                const firstSet = mapping.setIndices[0];
                blockOffsets[firstSet] = 0;
                samplerTextureOffsets[firstSet] = 0;
                for (let i = 1; i < mapping.setIndices.length; ++i) {
                  const curSet = mapping.setIndices[i];
                  const prevSet = mapping.setIndices[i - 1];
                  blockOffsets[curSet] = mapping.maxBlockCounts[prevSet] + blockOffsets[prevSet];
                  samplerTextureOffsets[curSet] = mapping.maxSamplerTextureCounts[prevSet] + samplerTextureOffsets[prevSet];
                }
                for (let i = 0; i < mapping.setIndices.length; ++i) {
                  const curSet = mapping.setIndices[i];
                  samplerTextureOffsets[curSet] -= mapping.maxBlockCounts[curSet];
                }
                this._bindingMappings = {
                  blockOffsets,
                  samplerTextureOffsets,
                  flexibleSet: mapping.setIndices[mapping.setIndices.length - 1]
                };
                const gl = this._context = getContext(Device.canvas);
                if (!gl) {
                  console.error('This device does not support WebGL.');
                  return false;
                }
                this._queue = this.createQueue(new QueueInfo(QueueType.GRAPHICS));
                this._cmdBuff = this.createCommandBuffer(new CommandBufferInfo(this._queue));
                this._caps.maxVertexAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
                this._caps.maxVertexUniformVectors = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
                this._caps.maxFragmentUniformVectors = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
                this._caps.maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
                this._caps.maxVertexTextureUnits = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
                this._caps.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
                this._caps.maxCubeMapTextureSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
                this._caps.maxArrayTextureLayers = 0;
                this._caps.max3DTextureSize = 0;
                this._caps.maxUniformBufferBindings = 16;
                const extensions = gl.getSupportedExtensions();
                let extStr = '';
                if (extensions) {
                  for (const ext of extensions) {
                    extStr += `${ext} `;
                  }
                }
                const exts = getExtensions(gl);
                if (exts.WEBGL_debug_renderer_info) {
                  this._renderer = gl.getParameter(exts.WEBGL_debug_renderer_info.UNMASKED_RENDERER_WEBGL);
                  this._vendor = gl.getParameter(exts.WEBGL_debug_renderer_info.UNMASKED_VENDOR_WEBGL);
                } else {
                  this._renderer = gl.getParameter(gl.RENDERER);
                  this._vendor = gl.getParameter(gl.VENDOR);
                }
                const version = gl.getParameter(gl.VERSION);
                this._features.fill(false);
                this.initFormatFeatures(exts);
                if (exts.EXT_blend_minmax) {
                  this._features[Feature.BLEND_MINMAX] = true;
                }
                if (exts.OES_element_index_uint) {
                  this._features[Feature.ELEMENT_INDEX_UINT] = true;
                }
                if (exts.ANGLE_instanced_arrays) {
                  this._features[Feature.INSTANCED_ARRAYS] = true;
                }
                if (exts.WEBGL_draw_buffers) {
                  this._features[Feature.MULTIPLE_RENDER_TARGETS] = true;
                }
                let compressedFormat = '';
                if (this.getFormatFeatures(Format.ETC_RGB8)) {
                  compressedFormat += 'etc1 ';
                }
                if (this.getFormatFeatures(Format.ETC2_RGB8)) {
                  compressedFormat += 'etc2 ';
                }
                if (this.getFormatFeatures(Format.BC1)) {
                  compressedFormat += 'dxt ';
                }
                if (this.getFormatFeatures(Format.PVRTC_RGB2)) {
                  compressedFormat += 'pvrtc ';
                }
                if (this.getFormatFeatures(Format.ASTC_RGBA_4X4)) {
                  compressedFormat += 'astc ';
                }
                debug('WebGL device initialized.');
                debug(`RENDERER: ${this._renderer}`);
                debug(`VENDOR: ${this._vendor}`);
                debug(`VERSION: ${version}`);
                debug(`COMPRESSED_FORMAT: ${compressedFormat}`);
                debug(`EXTENSIONS: ${extStr}`);
                return true;
              }
              destroy() {
                if (this._queue) {
                  this._queue.destroy();
                  this._queue = null;
                }
                if (this._cmdBuff) {
                  this._cmdBuff.destroy();
                  this._cmdBuff = null;
                }
                this._swapchain = null;
              }
              flushCommands(cmdBuffs) {}
              acquire(swapchains) {}
              present() {
                const queue = this._queue;
                this._numDrawCalls = queue.numDrawCalls;
                this._numInstances = queue.numInstances;
                this._numTris = queue.numTris;
                queue.clear();
              }
              initFormatFeatures(exts) {
                this._formatFeatures.fill(FormatFeatureBit.NONE);
                this._textureExclusive.fill(true);
                const tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
                this._formatFeatures[Format.RGB8] = tempFeature;
                this._formatFeatures[Format.R5G6B5] = tempFeature;
                this._textureExclusive[Format.R5G6B5] = false;
                this._formatFeatures[Format.RGBA8] = tempFeature;
                this._formatFeatures[Format.RGBA4] = tempFeature;
                this._textureExclusive[Format.RGBA4] = false;
                this._formatFeatures[Format.RGB5A1] = tempFeature;
                this._textureExclusive[Format.RGB5A1] = false;
                this._formatFeatures[Format.DEPTH] = FormatFeatureBit.RENDER_TARGET;
                this._textureExclusive[Format.DEPTH] = false;
                this._formatFeatures[Format.DEPTH_STENCIL] = FormatFeatureBit.RENDER_TARGET;
                this._textureExclusive[Format.DEPTH_STENCIL] = false;
                this._formatFeatures[Format.R8I] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RG8I] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGB8I] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGBA8I] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.R8UI] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RG8UI] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGB8UI] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGBA8UI] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.R8I] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RG8I] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGB8I] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGBA8I] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.R8UI] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RG8UI] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGB8UI] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGBA8UI] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.R32F] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RG32F] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGB32F] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.RGBA32F] |= FormatFeatureBit.VERTEX_ATTRIBUTE;
                if (exts.EXT_sRGB) {
                  this._formatFeatures[Format.SRGB8] = tempFeature;
                  this._formatFeatures[Format.SRGB8_A8] = tempFeature;
                  this._textureExclusive[Format.SRGB8_A8] = false;
                }
                if (exts.WEBGL_depth_texture) {
                  this._formatFeatures[Format.DEPTH] |= tempFeature;
                  this._formatFeatures[Format.DEPTH_STENCIL] |= tempFeature;
                }
                if (exts.WEBGL_color_buffer_float) {
                  this._formatFeatures[Format.RGB32F] |= FormatFeatureBit.RENDER_TARGET;
                  this._formatFeatures[Format.RGBA32F] |= FormatFeatureBit.RENDER_TARGET;
                  this._textureExclusive[Format.RGB32F] = false;
                  this._textureExclusive[Format.RGBA32F] = false;
                }
                if (exts.EXT_color_buffer_half_float) {
                  this._formatFeatures[Format.RGB16F] |= FormatFeatureBit.RENDER_TARGET;
                  this._formatFeatures[Format.RGBA16F] |= FormatFeatureBit.RENDER_TARGET;
                  this._textureExclusive[Format.RGB16F] = false;
                  this._textureExclusive[Format.RGBA16F] = false;
                }
                if (exts.OES_texture_float) {
                  this._formatFeatures[Format.RGB32F] |= FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE;
                  this._formatFeatures[Format.RGBA32F] |= FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE;
                }
                if (exts.OES_texture_half_float) {
                  this._formatFeatures[Format.RGB16F] |= FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE;
                  this._formatFeatures[Format.RGBA16F] |= FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE;
                }
                if (exts.OES_texture_float_linear) {
                  this._formatFeatures[Format.RGB32F] |= FormatFeatureBit.LINEAR_FILTER;
                  this._formatFeatures[Format.RGBA32F] |= FormatFeatureBit.LINEAR_FILTER;
                }
                if (exts.OES_texture_half_float_linear) {
                  this._formatFeatures[Format.RGB16F] |= FormatFeatureBit.LINEAR_FILTER;
                  this._formatFeatures[Format.RGBA16F] |= FormatFeatureBit.LINEAR_FILTER;
                }
                const compressedFeature = FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
                if (exts.WEBGL_compressed_texture_etc1) {
                  this._formatFeatures[Format.ETC_RGB8] = compressedFeature;
                }
                if (exts.WEBGL_compressed_texture_etc) {
                  this._formatFeatures[Format.ETC2_RGB8] = compressedFeature;
                  this._formatFeatures[Format.ETC2_RGBA8] = compressedFeature;
                  this._formatFeatures[Format.ETC2_SRGB8] = compressedFeature;
                  this._formatFeatures[Format.ETC2_SRGB8_A8] = compressedFeature;
                  this._formatFeatures[Format.ETC2_RGB8_A1] = compressedFeature;
                  this._formatFeatures[Format.ETC2_SRGB8_A1] = compressedFeature;
                }
                if (exts.WEBGL_compressed_texture_s3tc) {
                  this._formatFeatures[Format.BC1] = compressedFeature;
                  this._formatFeatures[Format.BC1_ALPHA] = compressedFeature;
                  this._formatFeatures[Format.BC1_SRGB] = compressedFeature;
                  this._formatFeatures[Format.BC1_SRGB_ALPHA] = compressedFeature;
                  this._formatFeatures[Format.BC2] = compressedFeature;
                  this._formatFeatures[Format.BC2_SRGB] = compressedFeature;
                  this._formatFeatures[Format.BC3] = compressedFeature;
                  this._formatFeatures[Format.BC3_SRGB] = compressedFeature;
                }
                if (exts.WEBGL_compressed_texture_pvrtc) {
                  this._formatFeatures[Format.PVRTC_RGB2] |= compressedFeature;
                  this._formatFeatures[Format.PVRTC_RGBA2] |= compressedFeature;
                  this._formatFeatures[Format.PVRTC_RGB4] |= compressedFeature;
                  this._formatFeatures[Format.PVRTC_RGBA4] |= compressedFeature;
                }
                if (exts.WEBGL_compressed_texture_astc) {
                  this._formatFeatures[Format.ASTC_RGBA_4X4] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_5X4] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_5X5] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_6X5] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_6X6] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_8X5] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_8X6] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_8X8] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_10X5] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_10X6] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_10X8] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_10X10] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_12X10] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_12X12] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_4X4] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_5X4] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_5X5] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_6X5] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_6X6] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_8X5] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_8X6] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_8X8] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_10X5] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_10X6] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_10X8] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_10X10] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_12X10] |= compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_12X12] |= compressedFeature;
                }
              }
              createCommandBuffer(info) {
                const Ctor = info.type === CommandBufferType.PRIMARY ? WebGLPrimaryCommandBuffer : WebGLCommandBuffer;
                const cmdBuff = new Ctor();
                cmdBuff.initialize(info);
                return cmdBuff;
              }
              createSwapchain(info) {
                const swapchain = new WebGLSwapchain();
                this._swapchain = swapchain;
                swapchain.initialize(info);
                return swapchain;
              }
              createBuffer(info) {
                const buffer = new WebGLBuffer();
                buffer.initialize(info);
                return buffer;
              }
              createTexture(info) {
                const texture = new WebGLTexture();
                texture.initialize(info);
                return texture;
              }
              createDescriptorSet(info) {
                const descriptorSet = new WebGLDescriptorSet();
                descriptorSet.initialize(info);
                return descriptorSet;
              }
              createShader(info) {
                const shader = new WebGLShader();
                shader.initialize(info);
                return shader;
              }
              createInputAssembler(info) {
                const inputAssembler = new WebGLInputAssembler();
                inputAssembler.initialize(info);
                return inputAssembler;
              }
              createRenderPass(info) {
                const renderPass = new WebGLRenderPass();
                renderPass.initialize(info);
                return renderPass;
              }
              createFramebuffer(info) {
                const framebuffer = new WebGLFramebuffer();
                framebuffer.initialize(info);
                return framebuffer;
              }
              createDescriptorSetLayout(info) {
                const descriptorSetLayout = new WebGLDescriptorSetLayout();
                descriptorSetLayout.initialize(info);
                return descriptorSetLayout;
              }
              createPipelineLayout(info) {
                const pipelineLayout = new WebGLPipelineLayout();
                pipelineLayout.initialize(info);
                return pipelineLayout;
              }
              createPipelineState(info) {
                const pipelineState = new WebGLPipelineState();
                pipelineState.initialize(info);
                return pipelineState;
              }
              createQueue(info) {
                const queue = new WebGLQueue();
                queue.initialize(info);
                return queue;
              }
              getSampler(info) {
                const hash = Sampler.computeHash(info);
                if (!this._samplers.has(hash)) {
                  this._samplers.set(hash, new WebGLSampler(info, hash));
                }
                return this._samplers.get(hash);
              }
              getSwapchains() {
                return [this._swapchain];
              }
              getGeneralBarrier(info) {
                const hash = GeneralBarrier.computeHash(info);
                if (!this._generalBarrierss.has(hash)) {
                  this._generalBarrierss.set(hash, new GeneralBarrier(info, hash));
                }
                return this._generalBarrierss.get(hash);
              }
              getTextureBarrier(info) {
                const hash = TextureBarrier.computeHash(info);
                if (!this._textureBarriers.has(hash)) {
                  this._textureBarriers.set(hash, new TextureBarrier(info, hash));
                }
                return this._textureBarriers.get(hash);
              }
              getBufferBarrier(info) {
                const hash = BufferBarrier.computeHash(info);
                if (!this._bufferBarriers.has(hash)) {
                  this._bufferBarriers.set(hash, new BufferBarrier(info, hash));
                }
                return this._bufferBarriers.get(hash);
              }
              copyBuffersToTexture(buffers, texture, regions) {
                WebGLCmdFuncCopyBuffersToTexture(this, buffers, texture.gpuTexture, regions);
              }
              copyTextureToBuffers(texture, buffers, regions) {
                WebGLCmdFuncCopyTextureToBuffers(this, texture.gpuTexture, buffers, regions);
              }
              copyTexImagesToTexture(texImages, texture, regions) {
                WebGLCmdFuncCopyTexImagesToTexture(this, texImages, texture.gpuTexture, regions);
              }
            } exports('WebGLDevice', WebGLDevice);

            legacyCC.WebGLDevice = WebGLDevice;

        })
    };
}));
