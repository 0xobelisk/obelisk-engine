System.register(['./index-ce98320e.js', './device-90bc7390.js', './buffer-barrier-92305f2c.js', './cached-array-9b18d763.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './murmurhash2_gc-2108d723.js'], (function (exports) {
    'use strict';
    var error, assertID, errorID, legacyCC, debug, nextPow2, systemInfo, OS, macro, EDITOR, warnID, warn, sys, BrowserType, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, TextureFlagBit, FormatInfos, getTypedArrayConstructor, formatAlignment, Extent, Offset, alignTo, FormatSize, Rect, DynamicStates, DrawInfo, Filter, MemoryUsageBit, BufferUsageBit, TextureType, SampleCount, ShaderStageFlagBit, UniformSamplerTexture, Type, Format, LoadOp, ColorMask, CullMode, DynamicStateFlagBit, StencilFace, CommandBufferType, DESCRIPTOR_DYNAMIC_TYPE, PipelineState, Viewport, IsPowerOf2, FormatSurfaceSize, TextureInfo, TextureUsageBit, BufferTextureCopy, Device, API, QueueInfo, QueueType, CommandBufferInfo, Feature, FormatFeatureBit, DescriptorSet, Buffer, CommandBuffer, Framebuffer, InputAssembler, DescriptorSetLayout, PipelineLayout, Queue, RenderPass, Sampler, Shader, Texture, Swapchain, GeneralBarrier, TextureBarrier, BufferBarrier, CachedArray, RasterizerState, DepthStencilState, BlendState;
    return {
        setters: [function (module) {
            error = module.e;
            assertID = module.g;
            errorID = module.f;
            legacyCC = module.l;
            debug = module.aF;
            nextPow2 = module.Z;
            systemInfo = module.bY;
            OS = module.bZ;
            macro = module.aM;
            EDITOR = module.bB;
            warnID = module.d;
            warn = module.w;
            sys = module.aL;
            BrowserType = module.cb;
        }, function (module) {
            DESCRIPTOR_BUFFER_TYPE = module.aP;
            DESCRIPTOR_SAMPLER_TYPE = module.aQ;
            TextureFlagBit = module.h;
            FormatInfos = module.aO;
            getTypedArrayConstructor = module.aX;
            formatAlignment = module.aY;
            Extent = module.Y;
            Offset = module.W;
            alignTo = module.aZ;
            FormatSize = module.aU;
            Rect = module.X;
            DynamicStates = module.aL;
            DrawInfo = module.a9;
            Filter = module.k;
            MemoryUsageBit = module.e;
            BufferUsageBit = module.B;
            TextureType = module.f;
            SampleCount = module.j;
            ShaderStageFlagBit = module.q;
            UniformSamplerTexture = module.ah;
            Type = module.T;
            Format = module.b;
            LoadOp = module.L;
            ColorMask = module.p;
            CullMode = module.x;
            DynamicStateFlagBit = module.D;
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
            CachedArray = module.C;
        }, function (module) {
            RasterizerState = module.R;
            DepthStencilState = module.D;
            BlendState = module.B;
        }, function () {}],
        execute: (function () {

            class WebGL2DescriptorSet extends DescriptorSet {
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
                      gpuTextureView: null,
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
                      if (this._buffers[i]) {
                        descriptors[i].gpuBuffer = this._buffers[i].gpuBuffer;
                      }
                    } else if (descriptors[i].type & DESCRIPTOR_SAMPLER_TYPE) {
                      if (this._textures[i]) {
                        descriptors[i].gpuTextureView = this._textures[i].gpuTextureView;
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

            let WebGL2EXT;
            (function (WebGL2EXT) {
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGB_S3TC_DXT1_EXT"] = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_S3TC_DXT1_EXT"] = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_S3TC_DXT3_EXT"] = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_S3TC_DXT5_EXT"] = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB_S3TC_DXT1_EXT"] = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"] = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"] = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"] = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGB_PVRTC_4BPPV1_IMG"] = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGB_PVRTC_2BPPV1_IMG"] = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"] = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"] = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGB_ETC1_WEBGL"] = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
              WebGL2EXT[WebGL2EXT["COMPRESSED_R11_EAC"] = 37488] = "COMPRESSED_R11_EAC";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SIGNED_R11_EAC"] = 37489] = "COMPRESSED_SIGNED_R11_EAC";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RG11_EAC"] = 37490] = "COMPRESSED_RG11_EAC";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SIGNED_RG11_EAC"] = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGB8_ETC2"] = 37492] = "COMPRESSED_RGB8_ETC2";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ETC2"] = 37493] = "COMPRESSED_SRGB8_ETC2";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA8_ETC2_EAC"] = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"] = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_4x4_KHR"] = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_5x4_KHR"] = 37809] = "COMPRESSED_RGBA_ASTC_5x4_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_5x5_KHR"] = 37810] = "COMPRESSED_RGBA_ASTC_5x5_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_6x5_KHR"] = 37811] = "COMPRESSED_RGBA_ASTC_6x5_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_6x6_KHR"] = 37812] = "COMPRESSED_RGBA_ASTC_6x6_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_8x5_KHR"] = 37813] = "COMPRESSED_RGBA_ASTC_8x5_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_8x6_KHR"] = 37814] = "COMPRESSED_RGBA_ASTC_8x6_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_8x8_KHR"] = 37815] = "COMPRESSED_RGBA_ASTC_8x8_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_10x5_KHR"] = 37816] = "COMPRESSED_RGBA_ASTC_10x5_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_10x6_KHR"] = 37817] = "COMPRESSED_RGBA_ASTC_10x6_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_10x8_KHR"] = 37818] = "COMPRESSED_RGBA_ASTC_10x8_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_10x10_KHR"] = 37819] = "COMPRESSED_RGBA_ASTC_10x10_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_12x10_KHR"] = 37820] = "COMPRESSED_RGBA_ASTC_12x10_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_RGBA_ASTC_12x12_KHR"] = 37821] = "COMPRESSED_RGBA_ASTC_12x12_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR"] = 37840] = "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR"] = 37841] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR"] = 37842] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR"] = 37843] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR"] = 37844] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR"] = 37845] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR"] = 37846] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR"] = 37847] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR"] = 37848] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR"] = 37849] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR"] = 37850] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR"] = 37851] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR"] = 37852] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR";
              WebGL2EXT[WebGL2EXT["COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR"] = 37853] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR";
            })(WebGL2EXT || (WebGL2EXT = {}));
            class WebGL2DeviceManager {
              static get instance() {
                return WebGL2DeviceManager._instance;
              }
              static setInstance(instance) {
                WebGL2DeviceManager._instance = instance;
              }
            }
            WebGL2DeviceManager._instance = null;

            const WebGLWraps = [0x2901, 0x8370, 0x812F, 0x812F];
            const _f32v4 = new Float32Array(4);
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
                  return gl.HALF_FLOAT;
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
                  return gl.HALF_FLOAT;
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
                  return gl.HALF_FLOAT;
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
                  return gl.HALF_FLOAT;
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
                  return gl.UNSIGNED_INT_10F_11F_11F_REV;
                case Format.RGB5A1:
                  return gl.UNSIGNED_SHORT_5_5_5_1;
                case Format.RGBA4:
                  return gl.UNSIGNED_SHORT_4_4_4_4;
                case Format.RGB10A2:
                  return gl.UNSIGNED_INT_2_10_10_10_REV;
                case Format.RGB10A2UI:
                  return gl.UNSIGNED_INT_2_10_10_10_REV;
                case Format.RGB9E5:
                  return gl.FLOAT;
                case Format.DEPTH:
                  return gl.FLOAT;
                case Format.DEPTH_STENCIL:
                  return gl.UNSIGNED_INT_24_8;
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
                case Format.A8:
                  return gl.ALPHA;
                case Format.L8:
                  return gl.LUMINANCE;
                case Format.LA8:
                  return gl.LUMINANCE_ALPHA;
                case Format.R8:
                  return gl.R8;
                case Format.R8SN:
                  return gl.R8_SNORM;
                case Format.R8UI:
                  return gl.R8UI;
                case Format.R8I:
                  return gl.R8I;
                case Format.RG8:
                  return gl.RG8;
                case Format.RG8SN:
                  return gl.RG8_SNORM;
                case Format.RG8UI:
                  return gl.RG8UI;
                case Format.RG8I:
                  return gl.RG8I;
                case Format.RGB8:
                  return gl.RGB8;
                case Format.RGB8SN:
                  return gl.RGB8_SNORM;
                case Format.RGB8UI:
                  return gl.RGB8UI;
                case Format.RGB8I:
                  return gl.RGB8I;
                case Format.BGRA8:
                  return gl.RGBA8;
                case Format.RGBA8:
                  return gl.RGBA8;
                case Format.RGBA8SN:
                  return gl.RGBA8_SNORM;
                case Format.RGBA8UI:
                  return gl.RGBA8UI;
                case Format.RGBA8I:
                  return gl.RGBA8I;
                case Format.R16I:
                  return gl.R16I;
                case Format.R16UI:
                  return gl.R16UI;
                case Format.R16F:
                  return gl.R16F;
                case Format.RG16I:
                  return gl.RG16I;
                case Format.RG16UI:
                  return gl.RG16UI;
                case Format.RG16F:
                  return gl.RG16F;
                case Format.RGB16I:
                  return gl.RGB16I;
                case Format.RGB16UI:
                  return gl.RGB16UI;
                case Format.RGB16F:
                  return gl.RGB16F;
                case Format.RGBA16I:
                  return gl.RGBA16I;
                case Format.RGBA16UI:
                  return gl.RGBA16UI;
                case Format.RGBA16F:
                  return gl.RGBA16F;
                case Format.R32I:
                  return gl.R32I;
                case Format.R32UI:
                  return gl.R32UI;
                case Format.R32F:
                  return gl.R32F;
                case Format.RG32I:
                  return gl.RG32I;
                case Format.RG32UI:
                  return gl.RG32UI;
                case Format.RG32F:
                  return gl.RG32F;
                case Format.RGB32I:
                  return gl.RGB32I;
                case Format.RGB32UI:
                  return gl.RGB32UI;
                case Format.RGB32F:
                  return gl.RGB32F;
                case Format.RGBA32I:
                  return gl.RGBA32I;
                case Format.RGBA32UI:
                  return gl.RGBA32UI;
                case Format.RGBA32F:
                  return gl.RGBA32F;
                case Format.R5G6B5:
                  return gl.RGB565;
                case Format.RGB5A1:
                  return gl.RGB5_A1;
                case Format.RGBA4:
                  return gl.RGBA4;
                case Format.SRGB8:
                  return gl.SRGB8;
                case Format.SRGB8_A8:
                  return gl.SRGB8_ALPHA8;
                case Format.RGB10A2:
                  return gl.RGB10_A2;
                case Format.RGB10A2UI:
                  return gl.RGB10_A2UI;
                case Format.R11G11B10F:
                  return gl.R11F_G11F_B10F;
                case Format.DEPTH:
                  return gl.DEPTH_COMPONENT32F;
                case Format.DEPTH_STENCIL:
                  return gl.DEPTH24_STENCIL8;
                case Format.BC1:
                  return WebGL2EXT.COMPRESSED_RGB_S3TC_DXT1_EXT;
                case Format.BC1_ALPHA:
                  return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                case Format.BC1_SRGB:
                  return WebGL2EXT.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                case Format.BC1_SRGB_ALPHA:
                  return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                case Format.BC2:
                  return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                case Format.BC2_SRGB:
                  return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                case Format.BC3:
                  return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                case Format.BC3_SRGB:
                  return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                case Format.ETC_RGB8:
                  return WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL;
                case Format.ETC2_RGB8:
                  return WebGL2EXT.COMPRESSED_RGB8_ETC2;
                case Format.ETC2_SRGB8:
                  return WebGL2EXT.COMPRESSED_SRGB8_ETC2;
                case Format.ETC2_RGB8_A1:
                  return WebGL2EXT.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;
                case Format.ETC2_SRGB8_A1:
                  return WebGL2EXT.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;
                case Format.ETC2_RGBA8:
                  return WebGL2EXT.COMPRESSED_RGBA8_ETC2_EAC;
                case Format.ETC2_SRGB8_A8:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
                case Format.EAC_R11:
                  return WebGL2EXT.COMPRESSED_R11_EAC;
                case Format.EAC_R11SN:
                  return WebGL2EXT.COMPRESSED_SIGNED_R11_EAC;
                case Format.EAC_RG11:
                  return WebGL2EXT.COMPRESSED_RG11_EAC;
                case Format.EAC_RG11SN:
                  return WebGL2EXT.COMPRESSED_SIGNED_RG11_EAC;
                case Format.PVRTC_RGB2:
                  return WebGL2EXT.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                case Format.PVRTC_RGBA2:
                  return WebGL2EXT.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                case Format.PVRTC_RGB4:
                  return WebGL2EXT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                case Format.PVRTC_RGBA4:
                  return WebGL2EXT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                case Format.ASTC_RGBA_4X4:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_4x4_KHR;
                case Format.ASTC_RGBA_5X4:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_5x4_KHR;
                case Format.ASTC_RGBA_5X5:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_5x5_KHR;
                case Format.ASTC_RGBA_6X5:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_6x5_KHR;
                case Format.ASTC_RGBA_6X6:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_6x6_KHR;
                case Format.ASTC_RGBA_8X5:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x5_KHR;
                case Format.ASTC_RGBA_8X6:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x6_KHR;
                case Format.ASTC_RGBA_8X8:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x8_KHR;
                case Format.ASTC_RGBA_10X5:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x5_KHR;
                case Format.ASTC_RGBA_10X6:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x6_KHR;
                case Format.ASTC_RGBA_10X8:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x8_KHR;
                case Format.ASTC_RGBA_10X10:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x10_KHR;
                case Format.ASTC_RGBA_12X10:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_12x10_KHR;
                case Format.ASTC_RGBA_12X12:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_12x12_KHR;
                case Format.ASTC_SRGBA_4X4:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
                case Format.ASTC_SRGBA_5X4:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
                case Format.ASTC_SRGBA_5X5:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
                case Format.ASTC_SRGBA_6X5:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
                case Format.ASTC_SRGBA_6X6:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
                case Format.ASTC_SRGBA_8X5:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
                case Format.ASTC_SRGBA_8X6:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
                case Format.ASTC_SRGBA_8X8:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
                case Format.ASTC_SRGBA_10X5:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
                case Format.ASTC_SRGBA_10X6:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
                case Format.ASTC_SRGBA_10X8:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
                case Format.ASTC_SRGBA_10X10:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
                case Format.ASTC_SRGBA_12X10:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
                case Format.ASTC_SRGBA_12X12:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
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
                case Format.R8:
                case Format.R8SN:
                  return gl.RED;
                case Format.R8UI:
                case Format.R8I:
                  return gl.RED;
                case Format.RG8:
                case Format.RG8SN:
                case Format.RG8UI:
                case Format.RG8I:
                  return gl.RG;
                case Format.RGB8:
                case Format.RGB8SN:
                case Format.RGB8UI:
                case Format.RGB8I:
                  return gl.RGB;
                case Format.BGRA8:
                case Format.RGBA8:
                case Format.RGBA8SN:
                case Format.RGBA8UI:
                case Format.RGBA8I:
                  return gl.RGBA;
                case Format.R16UI:
                case Format.R16I:
                case Format.R16F:
                  return gl.RED;
                case Format.RG16UI:
                case Format.RG16I:
                case Format.RG16F:
                  return gl.RG;
                case Format.RGB16UI:
                case Format.RGB16I:
                case Format.RGB16F:
                  return gl.RGB;
                case Format.RGBA16UI:
                case Format.RGBA16I:
                case Format.RGBA16F:
                  return gl.RGBA;
                case Format.R32UI:
                case Format.R32I:
                case Format.R32F:
                  return gl.RED;
                case Format.RG32UI:
                case Format.RG32I:
                case Format.RG32F:
                  return gl.RG;
                case Format.RGB32UI:
                case Format.RGB32I:
                case Format.RGB32F:
                  return gl.RGB;
                case Format.RGBA32UI:
                case Format.RGBA32I:
                case Format.RGBA32F:
                  return gl.RGBA;
                case Format.RGB10A2:
                  return gl.RGBA;
                case Format.R11G11B10F:
                  return gl.RGB;
                case Format.R5G6B5:
                  return gl.RGB;
                case Format.RGB5A1:
                  return gl.RGBA;
                case Format.RGBA4:
                  return gl.RGBA;
                case Format.SRGB8:
                  return gl.RGB;
                case Format.SRGB8_A8:
                  return gl.RGBA;
                case Format.DEPTH:
                  return gl.DEPTH_COMPONENT;
                case Format.DEPTH_STENCIL:
                  return gl.DEPTH_STENCIL;
                case Format.BC1:
                  return WebGL2EXT.COMPRESSED_RGB_S3TC_DXT1_EXT;
                case Format.BC1_ALPHA:
                  return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                case Format.BC1_SRGB:
                  return WebGL2EXT.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                case Format.BC1_SRGB_ALPHA:
                  return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                case Format.BC2:
                  return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                case Format.BC2_SRGB:
                  return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                case Format.BC3:
                  return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                case Format.BC3_SRGB:
                  return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                case Format.ETC_RGB8:
                  return WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL;
                case Format.ETC2_RGB8:
                  return WebGL2EXT.COMPRESSED_RGB8_ETC2;
                case Format.ETC2_SRGB8:
                  return WebGL2EXT.COMPRESSED_SRGB8_ETC2;
                case Format.ETC2_RGB8_A1:
                  return WebGL2EXT.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;
                case Format.ETC2_SRGB8_A1:
                  return WebGL2EXT.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;
                case Format.ETC2_RGBA8:
                  return WebGL2EXT.COMPRESSED_RGBA8_ETC2_EAC;
                case Format.ETC2_SRGB8_A8:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
                case Format.EAC_R11:
                  return WebGL2EXT.COMPRESSED_R11_EAC;
                case Format.EAC_R11SN:
                  return WebGL2EXT.COMPRESSED_SIGNED_R11_EAC;
                case Format.EAC_RG11:
                  return WebGL2EXT.COMPRESSED_RG11_EAC;
                case Format.EAC_RG11SN:
                  return WebGL2EXT.COMPRESSED_SIGNED_RG11_EAC;
                case Format.PVRTC_RGB2:
                  return WebGL2EXT.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                case Format.PVRTC_RGBA2:
                  return WebGL2EXT.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                case Format.PVRTC_RGB4:
                  return WebGL2EXT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                case Format.PVRTC_RGBA4:
                  return WebGL2EXT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                case Format.ASTC_RGBA_4X4:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_4x4_KHR;
                case Format.ASTC_RGBA_5X4:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_5x4_KHR;
                case Format.ASTC_RGBA_5X5:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_5x5_KHR;
                case Format.ASTC_RGBA_6X5:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_6x5_KHR;
                case Format.ASTC_RGBA_6X6:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_6x6_KHR;
                case Format.ASTC_RGBA_8X5:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x5_KHR;
                case Format.ASTC_RGBA_8X6:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x6_KHR;
                case Format.ASTC_RGBA_8X8:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x8_KHR;
                case Format.ASTC_RGBA_10X5:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x5_KHR;
                case Format.ASTC_RGBA_10X6:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x6_KHR;
                case Format.ASTC_RGBA_10X8:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x8_KHR;
                case Format.ASTC_RGBA_10X10:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x10_KHR;
                case Format.ASTC_RGBA_12X10:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_12x10_KHR;
                case Format.ASTC_RGBA_12X12:
                  return WebGL2EXT.COMPRESSED_RGBA_ASTC_12x12_KHR;
                case Format.ASTC_SRGBA_4X4:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
                case Format.ASTC_SRGBA_5X4:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
                case Format.ASTC_SRGBA_5X5:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
                case Format.ASTC_SRGBA_6X5:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
                case Format.ASTC_SRGBA_6X6:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
                case Format.ASTC_SRGBA_8X5:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
                case Format.ASTC_SRGBA_8X6:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
                case Format.ASTC_SRGBA_8X8:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
                case Format.ASTC_SRGBA_10X5:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
                case Format.ASTC_SRGBA_10X6:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
                case Format.ASTC_SRGBA_10X8:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
                case Format.ASTC_SRGBA_10X10:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
                case Format.ASTC_SRGBA_12X10:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
                case Format.ASTC_SRGBA_12X12:
                  return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
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
                case Type.MAT2X3:
                  return gl.FLOAT_MAT2x3;
                case Type.MAT2X4:
                  return gl.FLOAT_MAT2x4;
                case Type.MAT3X2:
                  return gl.FLOAT_MAT3x2;
                case Type.MAT3:
                  return gl.FLOAT_MAT3;
                case Type.MAT3X4:
                  return gl.FLOAT_MAT3x4;
                case Type.MAT4X2:
                  return gl.FLOAT_MAT4x2;
                case Type.MAT4X3:
                  return gl.FLOAT_MAT4x3;
                case Type.MAT4:
                  return gl.FLOAT_MAT4;
                case Type.SAMPLER2D:
                  return gl.SAMPLER_2D;
                case Type.SAMPLER2D_ARRAY:
                  return gl.SAMPLER_2D_ARRAY;
                case Type.SAMPLER3D:
                  return gl.SAMPLER_3D;
                case Type.SAMPLER_CUBE:
                  return gl.SAMPLER_CUBE;
                default:
                  {
                    error('Unsupported GLType, convert to GL type failed.');
                    return Type.UNKNOWN;
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
                case gl.UNSIGNED_INT_VEC2:
                  return Type.UINT2;
                case gl.UNSIGNED_INT_VEC3:
                  return Type.UINT3;
                case gl.UNSIGNED_INT_VEC4:
                  return Type.UINT4;
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
                case gl.FLOAT_MAT2x3:
                  return Type.MAT2X3;
                case gl.FLOAT_MAT2x4:
                  return Type.MAT2X4;
                case gl.FLOAT_MAT3x2:
                  return Type.MAT3X2;
                case gl.FLOAT_MAT3:
                  return Type.MAT3;
                case gl.FLOAT_MAT3x4:
                  return Type.MAT3X4;
                case gl.FLOAT_MAT4x2:
                  return Type.MAT4X2;
                case gl.FLOAT_MAT4x3:
                  return Type.MAT4X3;
                case gl.FLOAT_MAT4:
                  return Type.MAT4;
                case gl.SAMPLER_2D:
                  return Type.SAMPLER2D;
                case gl.SAMPLER_2D_ARRAY:
                  return Type.SAMPLER2D_ARRAY;
                case gl.SAMPLER_3D:
                  return Type.SAMPLER3D;
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
                case gl.UNSIGNED_INT_VEC2:
                  return 8;
                case gl.UNSIGNED_INT_VEC3:
                  return 12;
                case gl.UNSIGNED_INT_VEC4:
                  return 16;
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
                case gl.FLOAT_MAT2x3:
                  return 24;
                case gl.FLOAT_MAT2x4:
                  return 32;
                case gl.FLOAT_MAT3x2:
                  return 24;
                case gl.FLOAT_MAT3:
                  return 36;
                case gl.FLOAT_MAT3x4:
                  return 48;
                case gl.FLOAT_MAT4x2:
                  return 32;
                case gl.FLOAT_MAT4x3:
                  return 48;
                case gl.FLOAT_MAT4:
                  return 64;
                case gl.SAMPLER_2D:
                  return 4;
                case gl.SAMPLER_2D_ARRAY:
                  return 4;
                case gl.SAMPLER_2D_ARRAY_SHADOW:
                  return 4;
                case gl.SAMPLER_3D:
                  return 4;
                case gl.SAMPLER_CUBE:
                  return 4;
                case gl.INT_SAMPLER_2D:
                  return 4;
                case gl.INT_SAMPLER_2D_ARRAY:
                  return 4;
                case gl.INT_SAMPLER_3D:
                  return 4;
                case gl.INT_SAMPLER_CUBE:
                  return 4;
                case gl.UNSIGNED_INT_SAMPLER_2D:
                  return 4;
                case gl.UNSIGNED_INT_SAMPLER_2D_ARRAY:
                  return 4;
                case gl.UNSIGNED_INT_SAMPLER_3D:
                  return 4;
                case gl.UNSIGNED_INT_SAMPLER_CUBE:
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
                case gl.FLOAT_MAT2x3:
                  return 2;
                case gl.FLOAT_MAT2x4:
                  return 2;
                case gl.FLOAT_MAT3x2:
                  return 3;
                case gl.FLOAT_MAT3:
                  return 3;
                case gl.FLOAT_MAT3x4:
                  return 3;
                case gl.FLOAT_MAT4x2:
                  return 4;
                case gl.FLOAT_MAT4x3:
                  return 4;
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
            let WebGL2Cmd;
            (function (WebGL2Cmd) {
              WebGL2Cmd[WebGL2Cmd["BEGIN_RENDER_PASS"] = 0] = "BEGIN_RENDER_PASS";
              WebGL2Cmd[WebGL2Cmd["END_RENDER_PASS"] = 1] = "END_RENDER_PASS";
              WebGL2Cmd[WebGL2Cmd["BIND_STATES"] = 2] = "BIND_STATES";
              WebGL2Cmd[WebGL2Cmd["DRAW"] = 3] = "DRAW";
              WebGL2Cmd[WebGL2Cmd["UPDATE_BUFFER"] = 4] = "UPDATE_BUFFER";
              WebGL2Cmd[WebGL2Cmd["COPY_BUFFER_TO_TEXTURE"] = 5] = "COPY_BUFFER_TO_TEXTURE";
              WebGL2Cmd[WebGL2Cmd["BLIT_TEXTURE"] = 6] = "BLIT_TEXTURE";
              WebGL2Cmd[WebGL2Cmd["COUNT"] = 7] = "COUNT";
            })(WebGL2Cmd || (WebGL2Cmd = {}));
            class WebGL2CmdObject {
              constructor(type) {
                this.cmdType = void 0;
                this.refCount = 0;
                this.cmdType = type;
              }
            }
            class WebGL2CmdBeginRenderPass extends WebGL2CmdObject {
              constructor() {
                super(WebGL2Cmd.BEGIN_RENDER_PASS);
                this.gpuRenderPass = null;
                this.gpuFramebuffer = null;
                this.renderArea = new Rect();
                this.clearColors = [];
                this.clearDepth = 1.0;
                this.clearStencil = 0;
              }
              clear() {
                this.gpuFramebuffer = null;
                this.clearColors.length = 0;
              }
            }
            class WebGL2CmdBindStates extends WebGL2CmdObject {
              constructor() {
                super(WebGL2Cmd.BIND_STATES);
                this.gpuPipelineState = null;
                this.gpuInputAssembler = null;
                this.gpuDescriptorSets = [];
                this.dynamicOffsets = [];
                this.dynamicStates = new DynamicStates();
              }
              clear() {
                this.gpuPipelineState = null;
                this.gpuInputAssembler = null;
                this.gpuDescriptorSets.length = 0;
                this.dynamicOffsets.length = 0;
              }
            }
            class WebGL2CmdDraw extends WebGL2CmdObject {
              constructor() {
                super(WebGL2Cmd.DRAW);
                this.drawInfo = new DrawInfo();
              }
              clear() {}
            }
            class WebGL2CmdUpdateBuffer extends WebGL2CmdObject {
              constructor() {
                super(WebGL2Cmd.UPDATE_BUFFER);
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
            class WebGL2CmdCopyBufferToTexture extends WebGL2CmdObject {
              constructor() {
                super(WebGL2Cmd.COPY_BUFFER_TO_TEXTURE);
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
            class WebGL2CmdBlitTexture extends WebGL2CmdObject {
              constructor() {
                super(WebGL2Cmd.BLIT_TEXTURE);
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
            class WebGL2CmdPackage {
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
            function WebGL2CmdFuncCreateBuffer(device, gpuBuffer) {
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
                        gl.bindVertexArray(null);
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
                        gl.bindVertexArray(null);
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
                gpuBuffer.glTarget = gl.UNIFORM_BUFFER;
                const glBuffer = gl.createBuffer();
                if (glBuffer && gpuBuffer.size > 0) {
                  gpuBuffer.glBuffer = glBuffer;
                  if (device.stateCache.glUniformBuffer !== gpuBuffer.glBuffer) {
                    gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
                    device.stateCache.glUniformBuffer = gpuBuffer.glBuffer;
                  }
                  gl.bufferData(gl.UNIFORM_BUFFER, gpuBuffer.size, glUsage);
                  gl.bindBuffer(gl.UNIFORM_BUFFER, null);
                  device.stateCache.glUniformBuffer = null;
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
            function WebGL2CmdFuncDestroyBuffer(device, gpuBuffer) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              if (gpuBuffer.glBuffer) {
                switch (gpuBuffer.glTarget) {
                  case gl.ARRAY_BUFFER:
                    if (device.extensions.useVAO) {
                      if (cache.glVAO) {
                        gl.bindVertexArray(null);
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
                        gl.bindVertexArray(null);
                        device.stateCache.glVAO = null;
                      }
                    }
                    gfxStateCache.gpuInputAssembler = null;
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    device.stateCache.glElementArrayBuffer = null;
                    break;
                  case gl.UNIFORM_BUFFER:
                    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
                    device.stateCache.glUniformBuffer = null;
                    break;
                }
                gl.deleteBuffer(gpuBuffer.glBuffer);
                gpuBuffer.glBuffer = null;
              }
            }
            function WebGL2CmdFuncResizeBuffer(device, gpuBuffer) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              const glUsage = gpuBuffer.memUsage & MemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
              if (gpuBuffer.usage & BufferUsageBit.VERTEX) {
                if (device.extensions.useVAO) {
                  if (cache.glVAO) {
                    gl.bindVertexArray(null);
                    cache.glVAO = null;
                  }
                }
                gfxStateCache.gpuInputAssembler = null;
                if (cache.glArrayBuffer !== gpuBuffer.glBuffer) {
                  gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
                }
                if (gpuBuffer.buffer) {
                  gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.buffer, glUsage);
                } else {
                  gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.size, glUsage);
                }
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
                cache.glArrayBuffer = null;
              } else if (gpuBuffer.usage & BufferUsageBit.INDEX) {
                if (device.extensions.useVAO) {
                  if (cache.glVAO) {
                    gl.bindVertexArray(null);
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
                if (device.stateCache.glUniformBuffer !== gpuBuffer.glBuffer) {
                  gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
                }
                gl.bufferData(gl.UNIFORM_BUFFER, gpuBuffer.size, glUsage);
                gl.bindBuffer(gl.UNIFORM_BUFFER, null);
                device.stateCache.glUniformBuffer = null;
              } else if (gpuBuffer.usage & BufferUsageBit.INDIRECT || gpuBuffer.usage & BufferUsageBit.TRANSFER_DST || gpuBuffer.usage & BufferUsageBit.TRANSFER_SRC) {
                gpuBuffer.glTarget = gl.NONE;
              } else {
                error('Unsupported BufferType, create buffer failed.');
                gpuBuffer.glTarget = gl.NONE;
              }
            }
            function WebGL2CmdFuncUpdateBuffer(device, gpuBuffer, buffer, offset, size) {
              if (gpuBuffer.usage & BufferUsageBit.INDIRECT) {
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
                          gl.bindVertexArray(null);
                          cache.glVAO = null;
                        }
                      }
                      gfxStateCache.gpuInputAssembler = null;
                      if (cache.glArrayBuffer !== gpuBuffer.glBuffer) {
                        gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
                        cache.glArrayBuffer = gpuBuffer.glBuffer;
                      }
                      if (size === buff.byteLength) {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
                      } else {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff.slice(0, size));
                      }
                      break;
                    }
                  case gl.ELEMENT_ARRAY_BUFFER:
                    {
                      if (device.extensions.useVAO) {
                        if (cache.glVAO) {
                          gl.bindVertexArray(null);
                          cache.glVAO = null;
                        }
                      }
                      gfxStateCache.gpuInputAssembler = null;
                      if (cache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
                        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                        cache.glElementArrayBuffer = gpuBuffer.glBuffer;
                      }
                      if (size === buff.byteLength) {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
                      } else {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff.slice(0, size));
                      }
                      break;
                    }
                  case gl.UNIFORM_BUFFER:
                    {
                      if (cache.glUniformBuffer !== gpuBuffer.glBuffer) {
                        gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
                        cache.glUniformBuffer = gpuBuffer.glBuffer;
                      }
                      if (size === buff.byteLength) {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
                      } else {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, new Float32Array(buff, 0, size / 4));
                      }
                      break;
                    }
                  default:
                    {
                      error('Unsupported BufferType, update buffer failed.');
                    }
                }
              }
            }
            function WebGL2CmdFuncCreateTexture(device, gpuTexture) {
              const {
                gl
              } = device;
              gpuTexture.glInternalFmt = GFXFormatToWebGLInternalFormat(gpuTexture.format, gl);
              gpuTexture.glFormat = GFXFormatToWebGLFormat(gpuTexture.format, gl);
              gpuTexture.glType = GFXFormatToWebGLType(gpuTexture.format, gl);
              let w = gpuTexture.width;
              let h = gpuTexture.height;
              const d = gpuTexture.depth;
              const l = gpuTexture.arrayLayer;
              switch (gpuTexture.type) {
                case TextureType.TEX2D:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                    const maxSize = Math.max(w, h);
                    if (maxSize > device.capabilities.maxTextureSize) {
                      errorID(9100, maxSize, device.capabilities.maxTextureSize);
                    }
                    if (gpuTexture.samples === SampleCount.X1) {
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
                        } else if (gpuTexture.flags & TextureFlagBit.MUTABLE_STORAGE) {
                          gl.texImage2D(gl.TEXTURE_2D, 0, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                        } else {
                          gl.texStorage2D(gl.TEXTURE_2D, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h);
                        }
                      }
                    } else {
                      gpuTexture.glRenderbuffer = gl.createRenderbuffer();
                      if (gpuTexture.size > 0) {
                        if (device.stateCache.glRenderbuffer !== gpuTexture.glRenderbuffer) {
                          gl.bindRenderbuffer(gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
                          device.stateCache.glRenderbuffer = gpuTexture.glRenderbuffer;
                        }
                        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, gpuTexture.samples, gpuTexture.glInternalFmt, gpuTexture.width, gpuTexture.height);
                      }
                    }
                    break;
                  }
                case TextureType.TEX2D_ARRAY:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_2D_ARRAY;
                    const maxSize = Math.max(w, h);
                    if (maxSize > device.capabilities.maxTextureSize) {
                      errorID(9100, maxSize, device.capabilities.maxTextureSize);
                    }
                    if (l > device.capabilities.maxArrayTextureLayers) {
                      errorID(9100, l, device.capabilities.maxArrayTextureLayers);
                    }
                    gpuTexture.glTexture = gl.createTexture();
                    if (gpuTexture.size > 0) {
                      const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        gl.bindTexture(gl.TEXTURE_2D_ARRAY, gpuTexture.glTexture);
                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }
                      if (FormatInfos[gpuTexture.format].isCompressed) {
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          const imgSize = FormatSize(gpuTexture.format, w, h, l);
                          const view = new Uint8Array(imgSize);
                          gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, i, gpuTexture.glInternalFmt, w, h, l, 0, view);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      } else {
                        gl.texStorage3D(gl.TEXTURE_2D_ARRAY, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h, l);
                      }
                    }
                    break;
                  }
                case TextureType.TEX3D:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_3D;
                    const maxSize = Math.max(Math.max(w, h), d);
                    if (maxSize > device.capabilities.max3DTextureSize) {
                      errorID(9100, maxSize, device.capabilities.max3DTextureSize);
                    }
                    gpuTexture.glTexture = gl.createTexture();
                    if (gpuTexture.size > 0) {
                      const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        gl.bindTexture(gl.TEXTURE_3D, gpuTexture.glTexture);
                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }
                      if (FormatInfos[gpuTexture.format].isCompressed) {
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          const imgSize = FormatSize(gpuTexture.format, w, h, d);
                          const view = new Uint8Array(imgSize);
                          gl.compressedTexImage3D(gl.TEXTURE_3D, i, gpuTexture.glInternalFmt, w, h, d, 0, view);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      } else {
                        gl.texStorage3D(gl.TEXTURE_3D, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h, d);
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
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                          const view = new Uint8Array(imgSize);
                          for (let f = 0; f < 6; ++f) {
                            gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, i, gpuTexture.glInternalFmt, w, h, 0, view);
                          }
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      } else {
                        gl.texStorage2D(gl.TEXTURE_CUBE_MAP, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h);
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
            function WebGL2CmdFuncDestroyTexture(device, gpuTexture) {
              const {
                gl
              } = device;
              if (gpuTexture.glTexture) {
                const glTexUnits = device.stateCache.glTexUnits;
                let texUnit = device.stateCache.texUnit;
                gl.deleteTexture(gpuTexture.glTexture);
                for (let i = 0; i < glTexUnits.length; ++i) {
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
            function WebGL2CmdFuncResizeTexture(device, gpuTexture) {
              if (!gpuTexture.size) return;
              const {
                gl
              } = device;
              let w = gpuTexture.width;
              let h = gpuTexture.height;
              const d = gpuTexture.depth;
              const l = gpuTexture.arrayLayer;
              switch (gpuTexture.type) {
                case TextureType.TEX2D:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                    const maxSize = Math.max(w, h);
                    if (maxSize > device.capabilities.maxTextureSize) {
                      errorID(9100, maxSize, device.capabilities.maxTextureSize);
                    }
                    if (gpuTexture.samples === SampleCount.X1) {
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
                        WebGL2CmdFuncDestroyTexture(device, gpuTexture);
                        WebGL2CmdFuncCreateTexture(device, gpuTexture);
                      }
                    } else if (gpuTexture.glRenderbuffer) {
                      if (device.stateCache.glRenderbuffer !== gpuTexture.glRenderbuffer) {
                        gl.bindRenderbuffer(gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
                        device.stateCache.glRenderbuffer = gpuTexture.glRenderbuffer;
                      }
                      gl.renderbufferStorageMultisample(gl.RENDERBUFFER, gpuTexture.samples, gpuTexture.glInternalFmt, gpuTexture.width, gpuTexture.height);
                    }
                    break;
                  }
                case TextureType.TEX2D_ARRAY:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_2D_ARRAY;
                    const maxSize = Math.max(w, h);
                    if (maxSize > device.capabilities.maxTextureSize) {
                      errorID(9100, maxSize, device.capabilities.maxTextureSize);
                    }
                    if (l > device.capabilities.maxArrayTextureLayers) {
                      errorID(9100, l, device.capabilities.maxArrayTextureLayers);
                    }
                    gpuTexture.glTexture = gl.createTexture();
                    if (gpuTexture.size > 0) {
                      const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        gl.bindTexture(gl.TEXTURE_2D_ARRAY, gpuTexture.glTexture);
                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }
                      if (FormatInfos[gpuTexture.format].isCompressed) {
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          const imgSize = FormatSize(gpuTexture.format, w, h, l);
                          const view = new Uint8Array(imgSize);
                          gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, i, gpuTexture.glInternalFmt, w, h, l, 0, view);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      } else {
                        gl.texStorage3D(gl.TEXTURE_2D_ARRAY, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h, l);
                      }
                    }
                    break;
                  }
                case TextureType.TEX3D:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_3D;
                    const maxSize = Math.max(Math.max(w, h), d);
                    if (maxSize > device.capabilities.max3DTextureSize) {
                      errorID(9100, maxSize, device.capabilities.max3DTextureSize);
                    }
                    gpuTexture.glTexture = gl.createTexture();
                    if (gpuTexture.size > 0) {
                      const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        gl.bindTexture(gl.TEXTURE_3D, gpuTexture.glTexture);
                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }
                      if (FormatInfos[gpuTexture.format].isCompressed) {
                        for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                          const imgSize = FormatSize(gpuTexture.format, w, h, d);
                          const view = new Uint8Array(imgSize);
                          gl.compressedTexImage3D(gl.TEXTURE_3D, i, gpuTexture.glInternalFmt, w, h, d, 0, view);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      } else {
                        gl.texStorage3D(gl.TEXTURE_3D, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h, d);
                      }
                    }
                    break;
                  }
                case TextureType.CUBE:
                  {
                    gpuTexture.type = TextureType.CUBE;
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
                      WebGL2CmdFuncDestroyTexture(device, gpuTexture);
                      WebGL2CmdFuncCreateTexture(device, gpuTexture);
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
            function WebGL2CmdFuncPrepareSamplerInfo(device, gpuSampler) {
              const {
                gl
              } = device;
              if (gpuSampler.minFilter === Filter.LINEAR || gpuSampler.minFilter === Filter.ANISOTROPIC) {
                if (gpuSampler.mipFilter === Filter.LINEAR || gpuSampler.mipFilter === Filter.ANISOTROPIC) {
                  gpuSampler.glMinFilter = gl.LINEAR_MIPMAP_LINEAR;
                } else if (gpuSampler.mipFilter === Filter.POINT) {
                  gpuSampler.glMinFilter = gl.LINEAR_MIPMAP_NEAREST;
                } else {
                  gpuSampler.glMinFilter = gl.LINEAR;
                }
              } else if (gpuSampler.mipFilter === Filter.LINEAR || gpuSampler.mipFilter === Filter.ANISOTROPIC) {
                gpuSampler.glMinFilter = gl.NEAREST_MIPMAP_LINEAR;
              } else if (gpuSampler.mipFilter === Filter.POINT) {
                gpuSampler.glMinFilter = gl.NEAREST_MIPMAP_NEAREST;
              } else {
                gpuSampler.glMinFilter = gl.NEAREST;
              }
              if (gpuSampler.magFilter === Filter.LINEAR || gpuSampler.magFilter === Filter.ANISOTROPIC) {
                gpuSampler.glMagFilter = gl.LINEAR;
              } else {
                gpuSampler.glMagFilter = gl.NEAREST;
              }
              gpuSampler.glWrapS = WebGLWraps[gpuSampler.addressU];
              gpuSampler.glWrapT = WebGLWraps[gpuSampler.addressV];
              gpuSampler.glWrapR = WebGLWraps[gpuSampler.addressW];
            }
            function WebGL2CmdFuncDestroySampler(device, gpuSampler) {
              const {
                gl
              } = device;
              const it = gpuSampler.glSamplers.values();
              const res = it.next();
              while (!res.done) {
                gl.deleteSampler(res.value);
                const glSamplerUnits = device.stateCache.glSamplerUnits;
                for (let i = 0; i < glSamplerUnits.length; ++i) {
                  if (glSamplerUnits[i] === res.value) {
                    gl.bindSampler(i, null);
                    glSamplerUnits[i] = null;
                  }
                }
              }
              gpuSampler.glSamplers.clear();
            }
            function WebGL2CmdFuncCreateFramebuffer(device, gpuFramebuffer) {
              for (let i = 0; i < gpuFramebuffer.gpuColorViews.length; ++i) {
                const tex = gpuFramebuffer.gpuColorViews[i].gpuTexture;
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
                for (let i = 0; i < gpuFramebuffer.gpuColorViews.length; ++i) {
                  const colorTextureView = gpuFramebuffer.gpuColorViews[i];
                  const colorTexture = colorTextureView.gpuTexture;
                  if (colorTexture) {
                    if (colorTexture.glTexture) {
                      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, colorTexture.glTarget, colorTexture.glTexture, colorTextureView.baseLevel);
                    } else {
                      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.RENDERBUFFER, colorTexture.glRenderbuffer);
                    }
                    attachments.push(gl.COLOR_ATTACHMENT0 + i);
                    gpuFramebuffer.width = Math.min(gpuFramebuffer.width, colorTexture.width >> colorTextureView.baseLevel);
                    gpuFramebuffer.height = Math.min(gpuFramebuffer.height, colorTexture.height >> colorTextureView.baseLevel);
                  }
                }
                const dstView = gpuFramebuffer.gpuDepthStencilView;
                if (dstView) {
                  const dst = dstView.gpuTexture;
                  const glAttachment = FormatInfos[dst.format].hasStencil ? gl.DEPTH_STENCIL_ATTACHMENT : gl.DEPTH_ATTACHMENT;
                  if (dst.glTexture) {
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, glAttachment, dst.glTarget, dst.glTexture, gpuFramebuffer.gpuDepthStencilView.baseLevel);
                  } else {
                    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, glAttachment, gl.RENDERBUFFER, dst.glRenderbuffer);
                  }
                  gpuFramebuffer.width = Math.min(gpuFramebuffer.width, dst.width >> dstView.baseLevel);
                  gpuFramebuffer.height = Math.min(gpuFramebuffer.height, dst.height >> dstView.baseLevel);
                }
                gl.drawBuffers(attachments);
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
            function WebGL2CmdFuncDestroyFramebuffer(device, gpuFramebuffer) {
              if (gpuFramebuffer.glFramebuffer) {
                device.gl.deleteFramebuffer(gpuFramebuffer.glFramebuffer);
                if (device.stateCache.glFramebuffer === gpuFramebuffer.glFramebuffer) {
                  device.gl.bindFramebuffer(device.gl.FRAMEBUFFER, null);
                  device.stateCache.glFramebuffer = null;
                }
                gpuFramebuffer.glFramebuffer = null;
              }
            }
            function WebGL2CmdFuncCreateShader(device, gpuShader) {
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
                  gl.shaderSource(gpuStage.glShader, `#version 300 es\n${gpuStage.source}`);
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
              const enableEffectImport = !!(legacyCC.rendering && legacyCC.rendering.enableEffectImport);
              for (let k = 0; k < gpuShader.gpuStages.length; k++) {
                const gpuStage = gpuShader.gpuStages[k];
                gl.attachShader(gpuShader.glProgram, gpuStage.glShader);
              }
              gl.linkProgram(gpuShader.glProgram);
              for (let k = 0; k < gpuShader.gpuStages.length; k++) {
                const gpuStage = gpuShader.gpuStages[k];
                if (gpuStage.glShader) {
                  gl.detachShader(gpuShader.glProgram, gpuStage.glShader);
                  gl.deleteShader(gpuStage.glShader);
                  gpuStage.glShader = null;
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
              const activeBlockCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_UNIFORM_BLOCKS);
              let blockName;
              let blockIdx;
              let blockSize;
              let block;
              if (activeBlockCount) {
                gpuShader.glBlocks = new Array(activeBlockCount);
                for (let b = 0; b < activeBlockCount; ++b) {
                  blockName = gl.getActiveUniformBlockName(gpuShader.glProgram, b);
                  const nameOffset = blockName.indexOf('[');
                  if (nameOffset !== -1) {
                    blockName = blockName.substr(0, nameOffset);
                  }
                  block = null;
                  for (let k = 0; k < gpuShader.blocks.length; k++) {
                    if (gpuShader.blocks[k].name === blockName) {
                      block = gpuShader.blocks[k];
                      break;
                    }
                  }
                  if (!block) {
                    error(`Block '${blockName}' does not bound`);
                  } else {
                    blockIdx = b;
                    blockSize = gl.getActiveUniformBlockParameter(gpuShader.glProgram, blockIdx, gl.UNIFORM_BLOCK_DATA_SIZE);
                    const glBinding = enableEffectImport ? block.flattened : block.binding + (device.bindingMappings.blockOffsets[block.set] || 0);
                    gl.uniformBlockBinding(gpuShader.glProgram, blockIdx, glBinding);
                    gpuShader.glBlocks[b] = {
                      set: block.set,
                      binding: block.binding,
                      idx: blockIdx,
                      name: blockName,
                      size: blockSize,
                      glBinding
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
              const glActiveSamplers = [];
              const glActiveSamplerLocations = [];
              const texUnitCacheMap = device.stateCache.texUnitCacheMap;
              if (!enableEffectImport) {
                let flexibleSetBaseOffset = 0;
                for (let i = 0; i < gpuShader.blocks.length; ++i) {
                  if (gpuShader.blocks[i].set === device.bindingMappings.flexibleSet) {
                    flexibleSetBaseOffset++;
                  }
                }
                let arrayOffset = 0;
                for (let i = 0; i < gpuShader.samplerTextures.length; ++i) {
                  const sampler = gpuShader.samplerTextures[i];
                  const glLoc = gl.getUniformLocation(gpuShader.glProgram, sampler.name);
                  if (glLoc && glLoc.id !== -1) {
                    glActiveSamplers.push(gpuShader.glSamplerTextures[i]);
                    glActiveSamplerLocations.push(glLoc);
                  }
                  if (texUnitCacheMap[sampler.name] === undefined) {
                    let binding = sampler.binding + device.bindingMappings.samplerTextureOffsets[sampler.set] + arrayOffset;
                    if (sampler.set === device.bindingMappings.flexibleSet) {
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
                  if (glLoc && glLoc.id !== -1) {
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
                  if (!glSampler.glLoc) {
                    glSampler.glLoc = glActiveSamplerLocations[i];
                    while (usedTexUnits[unitIdx]) {
                      unitIdx++;
                    }
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
                for (let k = 0; k < glActiveSamplers.length; k++) {
                  const glSampler = glActiveSamplers[k];
                  glSampler.glUnits = new Int32Array(glSampler.units);
                  gl.uniform1iv(glSampler.glLoc, glSampler.glUnits);
                }
                if (device.stateCache.glProgram !== gpuShader.glProgram) {
                  gl.useProgram(device.stateCache.glProgram);
                }
              }
              gpuShader.glSamplerTextures = glActiveSamplers;
            }
            function WebGL2CmdFuncDestroyShader(device, gpuShader) {
              if (gpuShader.glProgram) {
                device.gl.deleteProgram(gpuShader.glProgram);
                if (device.stateCache.glProgram === gpuShader.glProgram) {
                  device.gl.useProgram(null);
                  device.stateCache.glProgram = null;
                }
                gpuShader.glProgram = null;
              }
            }
            function WebGL2CmdFuncCreateInputAssember(device, gpuInputAssembler) {
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
            function WebGL2CmdFuncDestroyInputAssembler(device, gpuInputAssembler) {
              const it = gpuInputAssembler.glVAOs.values();
              let res = it.next();
              const {
                gl
              } = device;
              let glVAO = device.stateCache.glVAO;
              while (!res.done) {
                gl.deleteVertexArray(res.value);
                if (glVAO === res.value) {
                  gl.bindVertexArray(null);
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
              glPrimitive: 0,
              invalidateAttachments: []
            };
            function WebGL2CmdFuncBeginRenderPass(device, gpuRenderPass, gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              let clears = 0;
              if (gpuFramebuffer && gpuRenderPass) {
                if (cache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
                  gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
                  cache.glFramebuffer = gpuFramebuffer.glFramebuffer;
                }
                if (cache.viewport.left !== renderArea.x || cache.viewport.top !== renderArea.y || cache.viewport.width !== renderArea.width || cache.viewport.height !== renderArea.height) {
                  gl.viewport(renderArea.x, renderArea.y, renderArea.width, renderArea.height);
                  cache.viewport.left = renderArea.x;
                  cache.viewport.top = renderArea.y;
                  cache.viewport.width = renderArea.width;
                  cache.viewport.height = renderArea.height;
                }
                if (cache.scissorRect.x !== renderArea.x || cache.scissorRect.y !== renderArea.y || cache.scissorRect.width !== renderArea.width || cache.scissorRect.height !== renderArea.height) {
                  gl.scissor(renderArea.x, renderArea.y, renderArea.width, renderArea.height);
                  cache.scissorRect.x = renderArea.x;
                  cache.scissorRect.y = renderArea.y;
                  cache.scissorRect.width = renderArea.width;
                  cache.scissorRect.height = renderArea.height;
                }
                gfxStateCache.invalidateAttachments.length = 0;
                for (let j = 0; j < clearColors.length; ++j) {
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
                          if (gpuRenderPass.colorAttachments.length === 1) {
                            const clearColor = clearColors[0];
                            gl.clearColor(clearColor.x, clearColor.y, clearColor.z, clearColor.w);
                            clears |= gl.COLOR_BUFFER_BIT;
                          } else {
                            _f32v4[0] = clearColors[j].x;
                            _f32v4[1] = clearColors[j].y;
                            _f32v4[2] = clearColors[j].z;
                            _f32v4[3] = clearColors[j].w;
                            gl.clearBufferfv(gl.COLOR, j, _f32v4);
                          }
                          break;
                        }
                      case LoadOp.DISCARD:
                        {
                          gfxStateCache.invalidateAttachments.push(gl.COLOR_ATTACHMENT0 + j);
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
                          gfxStateCache.invalidateAttachments.push(gl.DEPTH_ATTACHMENT);
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
                            gfxStateCache.invalidateAttachments.push(gl.STENCIL_ATTACHMENT);
                            break;
                          }
                      }
                    }
                  }
                }
                if (gpuFramebuffer.glFramebuffer && gfxStateCache.invalidateAttachments.length) {
                  gl.invalidateFramebuffer(gl.FRAMEBUFFER, gfxStateCache.invalidateAttachments);
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
            function WebGL2CmdFuncBindStates(device, gpuPipelineState, gpuInputAssembler, gpuDescriptorSets, dynamicOffsets, dynamicStates) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              const gpuShader = gpuPipelineState && gpuPipelineState.gpuShader;
              let isShaderChanged = false;
              if (gpuPipelineState && gfxStateCache.gpuPipelineState !== gpuPipelineState) {
                gfxStateCache.gpuPipelineState = gpuPipelineState;
                gfxStateCache.glPrimitive = gpuPipelineState.glPrimitive;
                if (gpuShader) {
                  const {
                    glProgram
                  } = gpuShader;
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
                    device.stateCache.rs.cullMode = rs.cullMode;
                  }
                  const isFrontFaceCCW = rs.isFrontFaceCCW;
                  if (device.stateCache.rs.isFrontFaceCCW !== isFrontFaceCCW) {
                    gl.frontFace(isFrontFaceCCW ? gl.CCW : gl.CW);
                    device.stateCache.rs.isFrontFaceCCW = isFrontFaceCCW;
                  }
                  if (device.stateCache.rs.depthBias !== rs.depthBias || device.stateCache.rs.depthBiasSlop !== rs.depthBiasSlop) {
                    gl.polygonOffset(rs.depthBias, rs.depthBiasSlop);
                    device.stateCache.rs.depthBias = rs.depthBias;
                    device.stateCache.rs.depthBiasSlop = rs.depthBiasSlop;
                  }
                  if (device.stateCache.rs.lineWidth !== rs.lineWidth) {
                    gl.lineWidth(rs.lineWidth);
                    device.stateCache.rs.lineWidth = rs.lineWidth;
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
                  const descriptorIndex = gpuDescriptorSet && gpuDescriptorSet.descriptorIndices[glBlock.binding];
                  const gpuDescriptor = descriptorIndex >= 0 && gpuDescriptorSet.gpuDescriptors[descriptorIndex];
                  if (!gpuDescriptor || !gpuDescriptor.gpuBuffer) {
                    continue;
                  }
                  const dynamicOffsetIndexSet = dynamicOffsetIndices[glBlock.set];
                  const dynamicOffsetIndex = dynamicOffsetIndexSet && dynamicOffsetIndexSet[glBlock.binding];
                  let offset = gpuDescriptor.gpuBuffer.glOffset;
                  if (dynamicOffsetIndex >= 0) {
                    offset += dynamicOffsets[dynamicOffsetIndex];
                  }
                  if (cache.glBindUBOs[glBlock.glBinding] !== gpuDescriptor.gpuBuffer.glBuffer || cache.glBindUBOOffsets[glBlock.glBinding] !== offset) {
                    if (offset) {
                      gl.bindBufferRange(gl.UNIFORM_BUFFER, glBlock.glBinding, gpuDescriptor.gpuBuffer.glBuffer, offset, gpuDescriptor.gpuBuffer.size);
                    } else {
                      gl.bindBufferBase(gl.UNIFORM_BUFFER, glBlock.glBinding, gpuDescriptor.gpuBuffer.glBuffer);
                    }
                    cache.glUniformBuffer = cache.glBindUBOs[glBlock.glBinding] = gpuDescriptor.gpuBuffer.glBuffer;
                    cache.glBindUBOOffsets[glBlock.glBinding] = offset;
                  }
                }
                const samplerLen = gpuShader.glSamplerTextures.length;
                for (let i = 0; i < samplerLen; i++) {
                  const glSampler = gpuShader.glSamplerTextures[i];
                  const gpuDescriptorSet = gpuDescriptorSets[glSampler.set];
                  let descriptorIndex = gpuDescriptorSet && gpuDescriptorSet.descriptorIndices[glSampler.binding];
                  let gpuDescriptor = descriptorIndex >= 0 && gpuDescriptorSet.gpuDescriptors[descriptorIndex];
                  for (let l = 0; l < glSampler.units.length; l++) {
                    const texUnit = glSampler.units[l];
                    const glTexUnit = cache.glTexUnits[texUnit];
                    if (!gpuDescriptor || !gpuDescriptor.gpuTextureView || !gpuDescriptor.gpuTextureView.gpuTexture || !gpuDescriptor.gpuSampler) {
                      continue;
                    }
                    const gpuTextureView = gpuDescriptor.gpuTextureView;
                    const gpuTexture = gpuTextureView.gpuTexture;
                    const minLod = gpuTextureView.baseLevel;
                    const maxLod = minLod + gpuTextureView.levelCount;
                    if (gpuTexture.size > 0) {
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
                      const glSampler = gpuSampler.getGLSampler(device, minLod, maxLod);
                      if (cache.glSamplerUnits[texUnit] !== glSampler) {
                        gl.bindSampler(texUnit, glSampler);
                        cache.glSamplerUnits[texUnit] = glSampler;
                      }
                    }
                    gpuDescriptor = gpuDescriptorSet.gpuDescriptors[++descriptorIndex];
                  }
                }
              }
              if (gpuInputAssembler && gpuShader && (isShaderChanged || gfxStateCache.gpuInputAssembler !== gpuInputAssembler)) {
                gfxStateCache.gpuInputAssembler = gpuInputAssembler;
                if (device.extensions.useVAO) {
                  let glVAO = gpuInputAssembler.glVAOs.get(gpuShader.glProgram);
                  if (!glVAO) {
                    glVAO = gl.createVertexArray();
                    gpuInputAssembler.glVAOs.set(gpuShader.glProgram, glVAO);
                    gl.bindVertexArray(glVAO);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    cache.glArrayBuffer = null;
                    cache.glElementArrayBuffer = null;
                    let glAttrib;
                    for (let j = 0; j < gpuShader.glInputs.length; j++) {
                      const glInput = gpuShader.glInputs[j];
                      glAttrib = null;
                      for (let k = 0; k < gpuInputAssembler.glAttribs.length; k++) {
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
                          gl.vertexAttribDivisor(glLoc, glAttrib.isInstanced ? 1 : 0);
                        }
                      }
                    }
                    const gpuBuffer = gpuInputAssembler.gpuIndexBuffer;
                    if (gpuBuffer) {
                      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                    }
                    gl.bindVertexArray(null);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    cache.glArrayBuffer = null;
                    cache.glElementArrayBuffer = null;
                  }
                  if (cache.glVAO !== glVAO) {
                    gl.bindVertexArray(glVAO);
                    cache.glVAO = glVAO;
                  }
                } else {
                  for (let a = 0; a < device.capabilities.maxVertexAttributes; ++a) {
                    cache.glCurrentAttribLocs[a] = false;
                  }
                  for (let j = 0; j < gpuShader.glInputs.length; j++) {
                    const glInput = gpuShader.glInputs[j];
                    let glAttrib = null;
                    for (let k = 0; k < gpuInputAssembler.glAttribs.length; k++) {
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
                        gl.vertexAttribDivisor(glLoc, glAttrib.isInstanced ? 1 : 0);
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
                for (let k = 0; k < dsLen; k++) {
                  const dynamicState = gpuPipelineState.dynamicStates[k];
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
            function WebGL2CmdFuncDraw(device, drawInfo) {
              const {
                gl
              } = device;
              const {
                gpuInputAssembler,
                glPrimitive
              } = gfxStateCache;
              const md = device.extensions.WEBGL_multi_draw;
              if (gpuInputAssembler) {
                const indexBuffer = gpuInputAssembler.gpuIndexBuffer;
                if (gpuInputAssembler.gpuIndirectBuffer) {
                  const {
                    indirects
                  } = gpuInputAssembler.gpuIndirectBuffer;
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
                        if (indirects.instances[j]) {
                          gl.drawElementsInstanced(glPrimitive, indirects.counts[j], gpuInputAssembler.glIndexType, indirects.byteOffsets[j], indirects.instances[j]);
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
                      if (indirects.instances[j]) {
                        gl.drawArraysInstanced(glPrimitive, indirects.offsets[j], indirects.counts[j], indirects.instances[j]);
                      } else {
                        gl.drawArrays(glPrimitive, indirects.offsets[j], indirects.counts[j]);
                      }
                    }
                  }
                } else if (drawInfo.instanceCount) {
                  if (indexBuffer) {
                    if (drawInfo.indexCount > 0) {
                      const offset = drawInfo.firstIndex * indexBuffer.stride;
                      gl.drawElementsInstanced(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, offset, drawInfo.instanceCount);
                    }
                  } else if (drawInfo.vertexCount > 0) {
                    gl.drawArraysInstanced(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount, drawInfo.instanceCount);
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
            const cmdIds = new Array(WebGL2Cmd.COUNT);
            function WebGL2CmdFuncExecuteCmds(device, cmdPackage) {
              cmdIds.fill(0);
              for (let i = 0; i < cmdPackage.cmds.length; ++i) {
                const cmd = cmdPackage.cmds.array[i];
                const cmdId = cmdIds[cmd]++;
                switch (cmd) {
                  case WebGL2Cmd.BEGIN_RENDER_PASS:
                    {
                      const cmd0 = cmdPackage.beginRenderPassCmds.array[cmdId];
                      WebGL2CmdFuncBeginRenderPass(device, cmd0.gpuRenderPass, cmd0.gpuFramebuffer, cmd0.renderArea, cmd0.clearColors, cmd0.clearDepth, cmd0.clearStencil);
                      break;
                    }
                  case WebGL2Cmd.BIND_STATES:
                    {
                      const cmd2 = cmdPackage.bindStatesCmds.array[cmdId];
                      WebGL2CmdFuncBindStates(device, cmd2.gpuPipelineState, cmd2.gpuInputAssembler, cmd2.gpuDescriptorSets, cmd2.dynamicOffsets, cmd2.dynamicStates);
                      break;
                    }
                  case WebGL2Cmd.DRAW:
                    {
                      const cmd3 = cmdPackage.drawCmds.array[cmdId];
                      WebGL2CmdFuncDraw(device, cmd3.drawInfo);
                      break;
                    }
                  case WebGL2Cmd.UPDATE_BUFFER:
                    {
                      const cmd4 = cmdPackage.updateBufferCmds.array[cmdId];
                      WebGL2CmdFuncUpdateBuffer(device, cmd4.gpuBuffer, cmd4.buffer, cmd4.offset, cmd4.size);
                      break;
                    }
                  case WebGL2Cmd.COPY_BUFFER_TO_TEXTURE:
                    {
                      const cmd5 = cmdPackage.copyBufferToTextureCmds.array[cmdId];
                      WebGL2CmdFuncCopyBuffersToTexture(device, cmd5.buffers, cmd5.gpuTexture, cmd5.regions);
                      break;
                    }
                  case WebGL2Cmd.BLIT_TEXTURE:
                    {
                      const cmd6 = cmdPackage.blitTextureCmds.array[cmdId];
                      WebGL2CmdFuncBlitTexture(device, cmd6.srcTexture, cmd6.dstTexture, cmd6.regions, cmd6.filter);
                      break;
                    }
                }
              }
            }
            function toUseTexImage2D(texImages, regions) {
              if (texImages.length > 1 || regions.length > 1) return false;
              const isVideoElement = texImages[0] instanceof HTMLVideoElement;
              if (isVideoElement) {
                const videoElement = texImages[0];
                const isSameSize = regions[0].texOffset.x === 0 && regions[0].texOffset.y === 0 && regions[0].texExtent.width === videoElement.videoWidth && regions[0].texExtent.height === videoElement.videoHeight;
                return isSameSize;
              }
              return false;
            }
            function WebGL2CmdFuncCopyTexImagesToTexture(device, texImages, gpuTexture, regions) {
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
                    if (gpuTexture.flags & TextureFlagBit.MUTABLE_STORAGE || toUseTexImage2D(texImages, regions)) {
                      gl.texImage2D(gl.TEXTURE_2D, regions[0].texSubres.mipLevel, gpuTexture.glInternalFmt, regions[0].texExtent.width, regions[0].texExtent.height, 0, gpuTexture.glFormat, gpuTexture.glType, texImages[0]);
                    } else {
                      for (let k = 0; k < regions.length; k++) {
                        const region = regions[k];
                        gl.texSubImage2D(gl.TEXTURE_2D, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
                      }
                    }
                    break;
                  }
                case gl.TEXTURE_CUBE_MAP:
                  {
                    for (let k = 0; k < regions.length; k++) {
                      const region = regions[k];
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
              if (gpuTexture.flags & TextureFlagBit.GEN_MIPMAP) {
                gl.generateMipmap(gpuTexture.glTarget);
              }
            }
            let stagingBuffer = new Uint8Array(1);
            function pixelBufferPick(buffer, format, offset, stride, extent) {
              const blockHeight = formatAlignment(format).height;
              const bufferSize = FormatSize(format, extent.width, extent.height, extent.depth);
              const rowStrideSize = FormatSize(format, stride.width, 1, 1);
              const sliceStrideSize = FormatSize(format, stride.width, stride.height, 1);
              const destRowSize = FormatSize(format, extent.width, 1, 1);
              const ArrayBufferCtor = getTypedArrayConstructor(FormatInfos[format]);
              if (stagingBuffer.byteLength < bufferSize) {
                stagingBuffer = new Uint8Array(bufferSize);
              }
              let destOffset = 0;
              let bufferOffset = offset;
              for (let i = 0; i < extent.depth; i++) {
                bufferOffset = offset + sliceStrideSize * i;
                for (let j = 0; j < extent.height; j += blockHeight) {
                  stagingBuffer.subarray(destOffset, destOffset + destRowSize).set(new Uint8Array(buffer.buffer, buffer.byteOffset + bufferOffset, destRowSize));
                  destOffset += destRowSize;
                  bufferOffset += rowStrideSize;
                }
              }
              const length = bufferSize / ArrayBufferCtor.BYTES_PER_ELEMENT;
              assertID(Number.isInteger(length), 9101);
              return new ArrayBufferCtor(stagingBuffer.buffer, 0, length);
            }
            function WebGL2CmdFuncCopyBuffersToTexture(device, buffers, gpuTexture, regions) {
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
                    for (let k = 0; k < regions.length; k++) {
                      const region = regions[k];
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
                      } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
                        gl.compressedTexSubImage2D(gl.TEXTURE_2D, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, pixels);
                      } else {
                        gl.compressedTexImage2D(gl.TEXTURE_2D, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, 0, pixels);
                      }
                    }
                    break;
                  }
                case gl.TEXTURE_2D_ARRAY:
                  {
                    for (let k = 0; k < regions.length; k++) {
                      const region = regions[k];
                      const mipLevel = region.texSubres.mipLevel;
                      offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
                      offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
                      extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
                      extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
                      extent.depth = 1;
                      stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
                      stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
                      const destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
                      const destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
                      const fcount = region.texSubres.baseArrayLayer + region.texSubres.layerCount;
                      for (f = region.texSubres.baseArrayLayer; f < fcount; ++f) {
                        offset.z = f;
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
                          gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, offset.x, offset.y, offset.z, destWidth, destHeight, extent.depth, gpuTexture.glFormat, gpuTexture.glType, pixels);
                        } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
                          gl.compressedTexSubImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, offset.x, offset.y, offset.z, destWidth, destHeight, extent.depth, gpuTexture.glFormat, pixels);
                        } else {
                          gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, extent.depth, 0, pixels);
                        }
                      }
                    }
                    break;
                  }
                case gl.TEXTURE_3D:
                  {
                    for (let k = 0; k < regions.length; k++) {
                      const region = regions[k];
                      const mipLevel = region.texSubres.mipLevel;
                      offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
                      offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
                      offset.z = region.texOffset.z;
                      extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
                      extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
                      extent.depth = region.texExtent.depth;
                      stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
                      stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
                      const destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
                      const destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
                      let pixels;
                      const buffer = buffers[n++];
                      if (stride.width === extent.width && stride.height === extent.height) {
                        const length = FormatSize(gpuTexture.format, destWidth, destHeight, extent.depth) / ArrayBufferCtor.BYTES_PER_ELEMENT;
                        assertID(Number.isInteger(length), 9101);
                        pixels = new ArrayBufferCtor(buffer.buffer, buffer.byteOffset + region.buffOffset, length);
                      } else {
                        pixels = pixelBufferPick(buffer, gpuTexture.format, region.buffOffset, stride, extent);
                      }
                      if (!isCompressed) {
                        gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, offset.x, offset.y, offset.z, destWidth, destHeight, extent.depth, gpuTexture.glFormat, gpuTexture.glType, pixels);
                      } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
                        gl.compressedTexSubImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, offset.x, offset.y, offset.z, destWidth, destHeight, extent.depth, gpuTexture.glFormat, pixels);
                      } else {
                        gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, extent.depth, 0, pixels);
                      }
                    }
                    break;
                  }
                case gl.TEXTURE_CUBE_MAP:
                  {
                    for (let k = 0; k < regions.length; k++) {
                      const region = regions[k];
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
                        } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
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
            function WebGL2CmdFuncCopyTextureToBuffers(device, gpuTexture, buffers, regions) {
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
            function WebGL2CmdFuncBlitTexture(device, src, dst, regions, filter) {
              const {
                gl
              } = device;
              const cache = device.stateCache;
              const blitManager = device.blitManager;
              if (!blitManager) {
                return;
              }
              const glFilter = filter === Filter.LINEAR || filter === Filter.ANISOTROPIC ? gl.LINEAR : gl.NEAREST;
              const srcFramebuffer = blitManager.srcFramebuffer;
              const dstFramebuffer = blitManager.dstFramebuffer;
              const origReadFBO = cache.glReadFramebuffer;
              const origDrawFBO = cache.glFramebuffer;
              let srcMip = regions[0].srcSubres.mipLevel;
              let dstMip = regions[0].dstSubres.mipLevel;
              const blitInfo = formatInfo => {
                let mask = 0;
                let attachment = gl.COLOR_ATTACHMENT0;
                if (formatInfo.hasStencil) {
                  attachment = gl.DEPTH_STENCIL_ATTACHMENT;
                } else if (formatInfo.hasDepth) {
                  attachment = gl.DEPTH_ATTACHMENT;
                }
                if (formatInfo.hasDepth || formatInfo.hasStencil) {
                  if (formatInfo.hasDepth) {
                    mask |= gl.DEPTH_BUFFER_BIT;
                  }
                  if (formatInfo.hasStencil) {
                    mask |= gl.STENCIL_BUFFER_BIT;
                  }
                } else {
                  mask |= gl.COLOR_BUFFER_BIT;
                }
                return {
                  mask,
                  attachment
                };
              };
              const regionIndices = regions.map((_, i) => i);
              regionIndices.sort((a, b) => regions[a].srcSubres.mipLevel - regions[b].srcSubres.mipLevel);
              const {
                mask: srcMask,
                attachment: srcAttachment
              } = blitInfo(FormatInfos[src.format]);
              const {
                mask: dstMask,
                attachment: dstAttachment
              } = blitInfo(FormatInfos[dst.format]);
              if (cache.glReadFramebuffer !== srcFramebuffer) {
                gl.bindFramebuffer(gl.READ_FRAMEBUFFER, srcFramebuffer);
                cache.glReadFramebuffer = srcFramebuffer;
              }
              if (cache.glFramebuffer !== dstFramebuffer) {
                gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, dstFramebuffer);
                cache.glFramebuffer = dstFramebuffer;
              }
              if (src.glTexture) {
                gl.framebufferTexture2D(gl.READ_FRAMEBUFFER, srcAttachment, src.glTarget, src.glTexture, srcMip);
              } else {
                gl.framebufferRenderbuffer(gl.READ_FRAMEBUFFER, srcAttachment, gl.RENDERBUFFER, src.glRenderbuffer);
              }
              if (dst.glTexture) {
                gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, dstAttachment, dst.glTarget, dst.glTexture, dstMip);
              } else {
                gl.framebufferRenderbuffer(gl.DRAW_FRAMEBUFFER, dstAttachment, gl.RENDERBUFFER, dst.glRenderbuffer);
              }
              for (let i = 0; i < regionIndices.length; i++) {
                const region = regions[regionIndices[i]];
                if (src.glTexture && srcMip !== region.srcSubres.mipLevel) {
                  srcMip = region.srcSubres.mipLevel;
                  gl.framebufferTexture2D(gl.READ_FRAMEBUFFER, srcAttachment, src.glTarget, src.glTexture, srcMip);
                }
                if (dst.glTexture && dstMip !== region.dstSubres.mipLevel) {
                  dstMip = region.dstSubres.mipLevel;
                  gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, dstAttachment, dst.glTarget, dst.glTexture, dstMip);
                }
                gl.blitFramebuffer(region.srcOffset.x, region.srcOffset.y, region.srcOffset.x + region.srcExtent.width, region.srcOffset.y + region.srcExtent.height, region.dstOffset.x, region.dstOffset.y, region.dstOffset.x + region.dstExtent.width, region.dstOffset.y + region.dstExtent.height, srcMask, glFilter);
              }
              if (cache.glReadFramebuffer !== origReadFBO) {
                gl.bindFramebuffer(gl.READ_FRAMEBUFFER, origReadFBO);
                cache.glReadFramebuffer = origReadFBO;
              }
              if (cache.glFramebuffer !== origDrawFBO) {
                gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, origDrawFBO);
                cache.glFramebuffer = origDrawFBO;
              }
            }

            class WebGL2IndirectDrawInfos {
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
            class IWebGL2BlitManager {
              get srcFramebuffer() {
                return this._srcFramebuffer;
              }
              get dstFramebuffer() {
                return this._dstFramebuffer;
              }
              constructor() {
                this._srcFramebuffer = void 0;
                this._dstFramebuffer = void 0;
                const {
                  gl
                } = WebGL2DeviceManager.instance;
                this._srcFramebuffer = gl.createFramebuffer();
                this._dstFramebuffer = gl.createFramebuffer();
              }
              destroy() {
                const {
                  gl
                } = WebGL2DeviceManager.instance;
                gl.deleteFramebuffer(this._srcFramebuffer);
                gl.deleteFramebuffer(this._dstFramebuffer);
              }
            }

            class WebGL2Buffer extends Buffer {
              constructor(...args) {
                super(...args);
                this._gpuBuffer = null;
              }
              get gpuBuffer() {
                return this._gpuBuffer;
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
                  this._gpuBuffer = {
                    usage: this._usage,
                    memUsage: this._memUsage,
                    size: this._size,
                    stride: this._stride,
                    buffer: null,
                    indirects: buffer.gpuBuffer.indirects,
                    glTarget: buffer.gpuBuffer.glTarget,
                    glBuffer: buffer.gpuBuffer.glBuffer,
                    glOffset: info.offset
                  };
                } else {
                  this._usage = info.usage;
                  this._memUsage = info.memUsage;
                  this._size = info.size;
                  this._stride = Math.max(info.stride || this._size, 1);
                  this._count = this._size / this._stride;
                  this._flags = info.flags;
                  this._gpuBuffer = {
                    usage: this._usage,
                    memUsage: this._memUsage,
                    size: this._size,
                    stride: this._stride,
                    buffer: null,
                    indirects: new WebGL2IndirectDrawInfos(),
                    glTarget: 0,
                    glBuffer: null,
                    glOffset: 0
                  };
                  WebGL2CmdFuncCreateBuffer(WebGL2DeviceManager.instance, this._gpuBuffer);
                  WebGL2DeviceManager.instance.memoryStatus.bufferSize += this._size;
                }
              }
              destroy() {
                if (this._gpuBuffer) {
                  if (!this._isBufferView) {
                    WebGL2CmdFuncDestroyBuffer(WebGL2DeviceManager.instance, this._gpuBuffer);
                    WebGL2DeviceManager.instance.memoryStatus.bufferSize -= this._size;
                  }
                  this._gpuBuffer = null;
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
                if (this._gpuBuffer) {
                  this._gpuBuffer.size = size;
                  if (size > 0) {
                    WebGL2CmdFuncResizeBuffer(WebGL2DeviceManager.instance, this._gpuBuffer);
                    WebGL2DeviceManager.instance.memoryStatus.bufferSize -= oldSize;
                    WebGL2DeviceManager.instance.memoryStatus.bufferSize += size;
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
                WebGL2CmdFuncUpdateBuffer(WebGL2DeviceManager.instance, this._gpuBuffer, buffer, 0, buffSize);
              }
            }

            class WebGL2CommandPool {
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
            class WebGL2CommandAllocator {
              constructor() {
                this.beginRenderPassCmdPool = void 0;
                this.bindStatesCmdPool = void 0;
                this.drawCmdPool = void 0;
                this.updateBufferCmdPool = void 0;
                this.copyBufferToTextureCmdPool = void 0;
                this.blitTextureCmdPool = void 0;
                this.beginRenderPassCmdPool = new WebGL2CommandPool(WebGL2CmdBeginRenderPass, 1);
                this.bindStatesCmdPool = new WebGL2CommandPool(WebGL2CmdBindStates, 1);
                this.drawCmdPool = new WebGL2CommandPool(WebGL2CmdDraw, 1);
                this.updateBufferCmdPool = new WebGL2CommandPool(WebGL2CmdUpdateBuffer, 1);
                this.copyBufferToTextureCmdPool = new WebGL2CommandPool(WebGL2CmdCopyBufferToTexture, 1);
                this.blitTextureCmdPool = new WebGL2CommandPool(WebGL2CmdBlitTexture, 1);
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

            class WebGL2CommandBuffer extends CommandBuffer {
              constructor(...args) {
                super(...args);
                this.cmdPackage = new WebGL2CmdPackage();
                this._cmdAllocator = new WebGL2CommandAllocator();
                this._isInRenderPass = false;
                this._curGPUPipelineState = null;
                this._curGPUDescriptorSets = [];
                this._curGPUInputAssembler = null;
                this._curDynamicOffsets = Array(8).fill(0);
                this._curDynamicStates = new DynamicStates();
                this._isStateInvalied = false;
              }
              initialize(info) {
                this._type = info.type;
                this._queue = info.queue;
                const setCount = WebGL2DeviceManager.instance.bindingMappings.blockOffsets.length;
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
                const cmd = this._cmdAllocator.beginRenderPassCmdPool.alloc(WebGL2CmdBeginRenderPass);
                cmd.gpuRenderPass = renderPass.gpuRenderPass;
                cmd.gpuFramebuffer = framebuffer.gpuFramebuffer;
                cmd.renderArea.copy(renderArea);
                for (let i = 0; i < clearColors.length; ++i) {
                  cmd.clearColors[i] = clearColors[i];
                }
                cmd.clearDepth = clearDepth;
                cmd.clearStencil = clearStencil;
                this.cmdPackage.beginRenderPassCmds.push(cmd);
                this.cmdPackage.cmds.push(WebGL2Cmd.BEGIN_RENDER_PASS);
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
                const gpuDescriptorSets = descriptorSet.gpuDescriptorSet;
                if (gpuDescriptorSets !== this._curGPUDescriptorSets[set]) {
                  this._curGPUDescriptorSets[set] = gpuDescriptorSets;
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
                  const cmd = this._cmdAllocator.drawCmdPool.alloc(WebGL2CmdDraw);
                  cmd.drawInfo.copy(info);
                  this.cmdPackage.drawCmds.push(cmd);
                  this.cmdPackage.cmds.push(WebGL2Cmd.DRAW);
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
                    const cmd = this._cmdAllocator.updateBufferCmdPool.alloc(WebGL2CmdUpdateBuffer);
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
                    this.cmdPackage.cmds.push(WebGL2Cmd.UPDATE_BUFFER);
                  }
                } else {
                  console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
                }
              }
              copyBuffersToTexture(buffers, texture, regions) {
                if (this._type === CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
                  const gpuTexture = texture.gpuTexture;
                  if (gpuTexture) {
                    const cmd = this._cmdAllocator.copyBufferToTextureCmdPool.alloc(WebGL2CmdCopyBufferToTexture);
                    cmd.gpuTexture = gpuTexture;
                    cmd.regions = regions;
                    cmd.buffers = buffers;
                    this.cmdPackage.copyBufferToTextureCmds.push(cmd);
                    this.cmdPackage.cmds.push(WebGL2Cmd.COPY_BUFFER_TO_TEXTURE);
                  }
                } else {
                  console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
                }
              }
              execute(cmdBuffs, count) {
                for (let i = 0; i < count; ++i) {
                  const webGL2CmdBuff = cmdBuffs[i];
                  for (let c = 0; c < webGL2CmdBuff.cmdPackage.beginRenderPassCmds.length; ++c) {
                    const cmd = webGL2CmdBuff.cmdPackage.beginRenderPassCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.beginRenderPassCmds.push(cmd);
                  }
                  for (let c = 0; c < webGL2CmdBuff.cmdPackage.bindStatesCmds.length; ++c) {
                    const cmd = webGL2CmdBuff.cmdPackage.bindStatesCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.bindStatesCmds.push(cmd);
                  }
                  for (let c = 0; c < webGL2CmdBuff.cmdPackage.drawCmds.length; ++c) {
                    const cmd = webGL2CmdBuff.cmdPackage.drawCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.drawCmds.push(cmd);
                  }
                  for (let c = 0; c < webGL2CmdBuff.cmdPackage.updateBufferCmds.length; ++c) {
                    const cmd = webGL2CmdBuff.cmdPackage.updateBufferCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.updateBufferCmds.push(cmd);
                  }
                  for (let c = 0; c < webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.length; ++c) {
                    const cmd = webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.copyBufferToTextureCmds.push(cmd);
                  }
                  for (let c = 0; c < webGL2CmdBuff.cmdPackage.blitTextureCmds.length; ++c) {
                    const cmd = webGL2CmdBuff.cmdPackage.blitTextureCmds.array[c];
                    ++cmd.refCount;
                    this.cmdPackage.blitTextureCmds.push(cmd);
                  }
                  this.cmdPackage.cmds.concat(webGL2CmdBuff.cmdPackage.cmds.array);
                  this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
                  this._numInstances += webGL2CmdBuff._numInstances;
                  this._numTris += webGL2CmdBuff._numTris;
                }
              }
              pipelineBarrier(GeneralBarrier, bufferBarriers, buffers, textureBarriers, textures) {}
              bindStates() {
                const bindStatesCmd = this._cmdAllocator.bindStatesCmdPool.alloc(WebGL2CmdBindStates);
                bindStatesCmd.gpuPipelineState = this._curGPUPipelineState;
                Array.prototype.push.apply(bindStatesCmd.gpuDescriptorSets, this._curGPUDescriptorSets);
                Array.prototype.push.apply(bindStatesCmd.dynamicOffsets, this._curDynamicOffsets);
                bindStatesCmd.gpuInputAssembler = this._curGPUInputAssembler;
                bindStatesCmd.dynamicStates = this._curDynamicStates;
                this.cmdPackage.bindStatesCmds.push(bindStatesCmd);
                this.cmdPackage.cmds.push(WebGL2Cmd.BIND_STATES);
                this._isStateInvalied = false;
              }
              blitTexture(srcTexture, dstTexture, regions, filter) {
                const blitTextureCmd = this._cmdAllocator.blitTextureCmdPool.alloc(WebGL2CmdBlitTexture);
                blitTextureCmd.srcTexture = srcTexture.gpuTexture;
                blitTextureCmd.dstTexture = dstTexture.gpuTexture;
                blitTextureCmd.regions = regions;
                blitTextureCmd.filter = filter;
                ++this._numDrawCalls;
                this.cmdPackage.blitTextureCmds.push(blitTextureCmd);
                this.cmdPackage.cmds.push(WebGL2Cmd.BLIT_TEXTURE);
              }
            }

            class WebGL2Framebuffer extends Framebuffer {
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
                const gpuColorViews = [];
                for (let i = 0; i < info.colorTextures.length; i++) {
                  const colorTexture = info.colorTextures[i];
                  if (colorTexture) {
                    gpuColorViews.push(colorTexture.gpuTextureView);
                  }
                }
                let gpuDepthStencilView = null;
                if (info.depthStencilTexture) {
                  gpuDepthStencilView = info.depthStencilTexture.gpuTextureView;
                }
                let width = Number.MAX_SAFE_INTEGER;
                let height = Number.MAX_SAFE_INTEGER;
                this._gpuFramebuffer = {
                  gpuRenderPass: info.renderPass.gpuRenderPass,
                  gpuColorViews,
                  gpuDepthStencilView,
                  glFramebuffer: null,
                  isOffscreen: true,
                  get width() {
                    if (this.gpuColorViews.length > 0) {
                      return this.gpuColorViews[0].gpuTexture.width;
                    } else if (this.gpuDepthStencilView) {
                      return this.gpuDepthStencilView.gpuTexture.width;
                    }
                    return width;
                  },
                  set width(val) {
                    width = val;
                  },
                  get height() {
                    if (this.gpuColorViews.length > 0) {
                      return this.gpuColorViews[0].gpuTexture.height;
                    } else if (this.gpuDepthStencilView) {
                      return this.gpuDepthStencilView.gpuTexture.height;
                    }
                    return height;
                  },
                  set height(val) {
                    height = val;
                  }
                };
                WebGL2CmdFuncCreateFramebuffer(WebGL2DeviceManager.instance, this._gpuFramebuffer);
                this._width = this._gpuFramebuffer.width;
                this._height = this._gpuFramebuffer.height;
              }
              destroy() {
                if (this._gpuFramebuffer) {
                  WebGL2CmdFuncDestroyFramebuffer(WebGL2DeviceManager.instance, this._gpuFramebuffer);
                  this._gpuFramebuffer = null;
                }
              }
            }

            class WebGL2InputAssembler extends InputAssembler {
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
                          console.error('Illegal index buffer stride.');
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
                WebGL2CmdFuncCreateInputAssember(WebGL2DeviceManager.instance, this._gpuInputAssembler);
              }
              destroy() {
                const device = WebGL2DeviceManager.instance;
                if (this._gpuInputAssembler && device.extensions.useVAO) {
                  WebGL2CmdFuncDestroyInputAssembler(device, this._gpuInputAssembler);
                }
                this._gpuInputAssembler = null;
              }
            }

            class WebGL2DescriptorSetLayout extends DescriptorSetLayout {
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

            class WebGL2PipelineLayout extends PipelineLayout {
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
            class WebGL2PipelineState extends PipelineState {
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

            class WebGL2PrimaryCommandBuffer extends WebGL2CommandBuffer {
              beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
                WebGL2CmdFuncBeginRenderPass(WebGL2DeviceManager.instance, renderPass.gpuRenderPass, framebuffer.gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil);
                this._isInRenderPass = true;
              }
              draw(infoOrAssembler) {
                if (this._isInRenderPass) {
                  if (this._isStateInvalied) {
                    this.bindStates();
                  }
                  const info = 'drawInfo' in infoOrAssembler ? infoOrAssembler.drawInfo : infoOrAssembler;
                  WebGL2CmdFuncDraw(WebGL2DeviceManager.instance, info);
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
                } = WebGL2DeviceManager.instance;
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
                } = WebGL2DeviceManager.instance;
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
                    WebGL2CmdFuncUpdateBuffer(WebGL2DeviceManager.instance, gpuBuffer, data, 0, buffSize);
                  }
                } else {
                  console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
                }
              }
              copyBuffersToTexture(buffers, texture, regions) {
                if (!this._isInRenderPass) {
                  const gpuTexture = texture.gpuTexture;
                  if (gpuTexture) {
                    WebGL2CmdFuncCopyBuffersToTexture(WebGL2DeviceManager.instance, buffers, gpuTexture, regions);
                  }
                } else {
                  console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
                }
              }
              execute(cmdBuffs, count) {
                for (let i = 0; i < count; ++i) {
                  const webGL2CmdBuff = cmdBuffs[i];
                  WebGL2CmdFuncExecuteCmds(WebGL2DeviceManager.instance, webGL2CmdBuff.cmdPackage);
                  this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
                  this._numInstances += webGL2CmdBuff._numInstances;
                  this._numTris += webGL2CmdBuff._numTris;
                }
              }
              bindStates() {
                WebGL2CmdFuncBindStates(WebGL2DeviceManager.instance, this._curGPUPipelineState, this._curGPUInputAssembler, this._curGPUDescriptorSets, this._curDynamicOffsets, this._curDynamicStates);
                this._isStateInvalied = false;
              }
              blitTexture(srcTexture, dstTexture, regions, filter) {
                const gpuTextureSrc = srcTexture.gpuTexture;
                const gpuTextureDst = dstTexture.gpuTexture;
                WebGL2CmdFuncBlitTexture(WebGL2DeviceManager.instance, gpuTextureSrc, gpuTextureDst, regions, filter);
              }
            }

            class WebGL2Queue extends Queue {
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
                for (let i = 0; i < cmdBuffs.length; i++) {
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

            class WebGL2RenderPass extends RenderPass {
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

            class WebGL2Sampler extends Sampler {
              get gpuSampler() {
                return this._gpuSampler;
              }
              constructor(info, hash) {
                super(info, hash);
                this._gpuSampler = null;
                this._gpuSampler = {
                  glSamplers: new Map(),
                  minFilter: this._info.minFilter,
                  magFilter: this._info.magFilter,
                  mipFilter: this._info.mipFilter,
                  addressU: this._info.addressU,
                  addressV: this._info.addressV,
                  addressW: this._info.addressW,
                  glMinFilter: 0,
                  glMagFilter: 0,
                  glWrapS: 0,
                  glWrapT: 0,
                  glWrapR: 0,
                  getGLSampler(device, minLod, maxLod) {
                    const {
                      gl
                    } = device;
                    const samplerHash = minLod << 16 | maxLod;
                    if (!this.glSamplers.has(samplerHash)) {
                      const glSampler = gl.createSampler();
                      if (glSampler) {
                        this.glSamplers.set(samplerHash, glSampler);
                        gl.samplerParameteri(glSampler, gl.TEXTURE_MIN_FILTER, this.glMinFilter);
                        gl.samplerParameteri(glSampler, gl.TEXTURE_MAG_FILTER, this.glMagFilter);
                        gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_S, this.glWrapS);
                        gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_T, this.glWrapT);
                        gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_R, this.glWrapR);
                        gl.samplerParameterf(glSampler, gl.TEXTURE_MIN_LOD, minLod);
                        gl.samplerParameterf(glSampler, gl.TEXTURE_MAX_LOD, maxLod);
                      }
                    }
                    const sampler = this.glSamplers.get(samplerHash);
                    return sampler;
                  }
                };
                WebGL2CmdFuncPrepareSamplerInfo(WebGL2DeviceManager.instance, this._gpuSampler);
              }
              destroy() {
                if (this._gpuSampler) {
                  WebGL2CmdFuncDestroySampler(WebGL2DeviceManager.instance, this._gpuSampler);
                  this._gpuSampler = null;
                }
              }
            }

            class WebGL2Shader extends Shader {
              constructor(...args) {
                super(...args);
                this._gpuShader = null;
              }
              get gpuShader() {
                if (this._gpuShader.glProgram === null) {
                  WebGL2CmdFuncCreateShader(WebGL2DeviceManager.instance, this._gpuShader);
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
                  WebGL2CmdFuncDestroyShader(WebGL2DeviceManager.instance, this._gpuShader);
                  this._gpuShader = null;
                }
              }
            }

            class WebGL2StateCache {
              constructor() {
                this.glArrayBuffer = null;
                this.glElementArrayBuffer = null;
                this.glUniformBuffer = null;
                this.glBindUBOs = [];
                this.glBindUBOOffsets = [];
                this.glVAO = null;
                this.texUnit = 0;
                this.glTexUnits = [];
                this.glSamplerUnits = [];
                this.glRenderbuffer = null;
                this.glFramebuffer = null;
                this.glReadFramebuffer = null;
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
              initialize(texUnit, bufferBindings, vertexAttributes) {
                for (let i = 0; i < texUnit; ++i) this.glTexUnits.push({
                  glTexture: null
                });
                this.glSamplerUnits.length = texUnit;
                this.glSamplerUnits.fill(null);
                this.glBindUBOs.length = bufferBindings;
                this.glBindUBOs.fill(null);
                this.glBindUBOOffsets.length = bufferBindings;
                this.glBindUBOOffsets.fill(0);
                this.glEnabledAttribLocs.length = vertexAttributes;
                this.glEnabledAttribLocs.fill(false);
                this.glCurrentAttribLocs.length = vertexAttributes;
                this.glCurrentAttribLocs.fill(false);
              }
            }

            class WebGL2Texture extends Texture {
              constructor(...args) {
                super(...args);
                this._gpuTexture = null;
                this._gpuTextureView = null;
              }
              get gpuTexture() {
                return this._gpuTexture;
              }
              get gpuTextureView() {
                return this._gpuTextureView;
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
                  if (!this._gpuTexture.isSwapchainTexture && this._gpuTexture) {
                    WebGL2CmdFuncCreateTexture(WebGL2DeviceManager.instance, this._gpuTexture);
                    WebGL2DeviceManager.instance.memoryStatus.textureSize += this._size;
                  }
                  this._viewInfo.texture = this;
                  this._viewInfo.type = info.type;
                  this._viewInfo.format = info.format;
                  this._viewInfo.baseLevel = 0;
                  this._viewInfo.levelCount = info.levelCount;
                  this._viewInfo.baseLayer = 0;
                  this._viewInfo.layerCount = info.layerCount;
                  this._gpuTextureView = {
                    gpuTexture: this._gpuTexture,
                    type: this._viewInfo.type,
                    format: this._viewInfo.format,
                    baseLevel: this._viewInfo.baseLevel,
                    levelCount: this._viewInfo.levelCount
                  };
                } else {
                  var _this$_gpuTexture;
                  this._viewInfo.copy(viewInfo);
                  this._gpuTexture = viewInfo.texture._gpuTexture;
                  if (((_this$_gpuTexture = this._gpuTexture) === null || _this$_gpuTexture === void 0 ? void 0 : _this$_gpuTexture.format) !== texInfo.format) {
                    console.log('GPU memory alias is not supported');
                    return;
                  }
                  this._gpuTextureView = {
                    gpuTexture: this._gpuTexture,
                    type: viewInfo.type,
                    format: viewInfo.format,
                    baseLevel: viewInfo.baseLevel,
                    levelCount: viewInfo.levelCount
                  };
                }
              }
              destroy() {
                if (!this._isTextureView && this._gpuTexture) {
                  WebGL2CmdFuncDestroyTexture(WebGL2DeviceManager.instance, this._gpuTexture);
                  WebGL2DeviceManager.instance.memoryStatus.textureSize -= this._size;
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
                if (this._info.levelCount === WebGL2Texture.getLevelCount(this._info.width, this._info.height)) {
                  this._info.levelCount = WebGL2Texture.getLevelCount(width, height);
                } else if (this._info.levelCount > 1) {
                  this._info.levelCount = Math.min(this._info.levelCount, WebGL2Texture.getLevelCount(width, height));
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
                    WebGL2CmdFuncResizeTexture(WebGL2DeviceManager.instance, this._gpuTexture);
                    WebGL2DeviceManager.instance.memoryStatus.textureSize -= oldSize;
                    WebGL2DeviceManager.instance.memoryStatus.textureSize += this._size;
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
              gl.polygonOffset(0.0, 0.0);
              gl.enable(gl.DEPTH_TEST);
              gl.depthMask(true);
              gl.depthFunc(gl.LESS);
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
                EXT_color_buffer_half_float: getExtension(gl, 'EXT_color_buffer_half_float'),
                EXT_color_buffer_float: getExtension(gl, 'EXT_color_buffer_float'),
                WEBGL_compressed_texture_etc1: getExtension(gl, 'WEBGL_compressed_texture_etc1'),
                WEBGL_compressed_texture_etc: getExtension(gl, 'WEBGL_compressed_texture_etc'),
                WEBGL_compressed_texture_pvrtc: getExtension(gl, 'WEBGL_compressed_texture_pvrtc'),
                WEBGL_compressed_texture_astc: getExtension(gl, 'WEBGL_compressed_texture_astc'),
                WEBGL_compressed_texture_s3tc: getExtension(gl, 'WEBGL_compressed_texture_s3tc'),
                WEBGL_compressed_texture_s3tc_srgb: getExtension(gl, 'WEBGL_compressed_texture_s3tc_srgb'),
                WEBGL_debug_shaders: getExtension(gl, 'WEBGL_debug_shaders'),
                WEBGL_lose_context: getExtension(gl, 'WEBGL_lose_context'),
                WEBGL_debug_renderer_info: getExtension(gl, 'WEBGL_debug_renderer_info'),
                OES_texture_half_float_linear: getExtension(gl, 'OES_texture_half_float_linear'),
                OES_texture_float_linear: getExtension(gl, 'OES_texture_float_linear'),
                WEBGL_multi_draw: null,
                useVAO: true
              };
              {
                if (systemInfo.os !== OS.ANDROID && systemInfo.os !== OS.IOS) {
                  res.WEBGL_multi_draw = getExtension(gl, 'WEBGL_multi_draw');
                }
              }
              return res;
            }
            function getContext(canvas) {
              let context = null;
              try {
                var _globalThis$__globalX;
                if ((_globalThis$__globalX = globalThis.__globalXR) !== null && _globalThis$__globalX !== void 0 && _globalThis$__globalX.webxrCompatible) {
                  const glAttribs = {
                    alpha: macro.ENABLE_TRANSPARENT_CANVAS,
                    antialias: EDITOR || macro.ENABLE_WEBGL_ANTIALIAS,
                    depth: true,
                    stencil: true,
                    premultipliedAlpha: false,
                    preserveDrawingBuffer: false,
                    powerPreference: 'default',
                    failIfMajorPerformanceCaveat: false,
                    xrCompatible: true
                  };
                  context = canvas.getContext('webgl2', glAttribs);
                  return context;
                }
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
                context = canvas.getContext('webgl2', webGLCtxAttribs);
              } catch (err) {
                return null;
              }
              return context;
            }
            class WebGL2Swapchain extends Swapchain {
              constructor(...args) {
                super(...args);
                this.stateCache = new WebGL2StateCache();
                this.nullTex2D = null;
                this.nullTexCube = null;
                this._canvas = null;
                this._webGL2ContextLostHandler = null;
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
                this._webGL2ContextLostHandler = this._onWebGLContextLost.bind(this);
                this._canvas.addEventListener(eventWebGLContextLost, this._onWebGLContextLost);
                const gl = WebGL2DeviceManager.instance.gl;
                this.stateCache.initialize(WebGL2DeviceManager.instance.capabilities.maxTextureUnits, WebGL2DeviceManager.instance.capabilities.maxUniformBufferBindings, WebGL2DeviceManager.instance.capabilities.maxVertexAttributes);
                this._extensions = getExtensions(gl);
                initStates(gl);
                const colorFmt = Format.RGBA8;
                let depthStencilFmt = Format.DEPTH_STENCIL;
                const depthBits = gl.getParameter(gl.DEPTH_BITS);
                const stencilBits = gl.getParameter(gl.STENCIL_BITS);
                if (depthBits && stencilBits) depthStencilFmt = Format.DEPTH_STENCIL;else if (depthBits) depthStencilFmt = Format.DEPTH;
                this._colorTexture = new WebGL2Texture();
                this._colorTexture.initAsSwapchainTexture({
                  swapchain: this,
                  format: colorFmt,
                  width: info.width,
                  height: info.height
                });
                this._depthStencilTexture = new WebGL2Texture();
                this._depthStencilTexture.initAsSwapchainTexture({
                  swapchain: this,
                  format: depthStencilFmt,
                  width: info.width,
                  height: info.height
                });
                this.nullTex2D = WebGL2DeviceManager.instance.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.NONE));
                this.nullTexCube = WebGL2DeviceManager.instance.createTexture(new TextureInfo(TextureType.CUBE, TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.NONE, 6));
                const nullTexRegion = new BufferTextureCopy();
                nullTexRegion.texExtent.width = 2;
                nullTexRegion.texExtent.height = 2;
                const nullTexBuff = new Uint8Array(this.nullTex2D.size);
                nullTexBuff.fill(0);
                WebGL2DeviceManager.instance.copyBuffersToTexture([nullTexBuff], this.nullTex2D, [nullTexRegion]);
                nullTexRegion.texSubres.layerCount = 6;
                WebGL2DeviceManager.instance.copyBuffersToTexture([nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff], this.nullTexCube, [nullTexRegion]);
                this._blitManager = new IWebGL2BlitManager();
              }
              destroy() {
                if (this._canvas && this._webGL2ContextLostHandler) {
                  this._canvas.removeEventListener(eventWebGLContextLost, this._webGL2ContextLostHandler);
                  this._webGL2ContextLostHandler = null;
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

            class WebGL2Device extends Device {
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
                WebGL2DeviceManager.setInstance(this);
                this._gfxAPI = API.WEBGL2;
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
                  console.error('This device does not support WebGL2.');
                  return false;
                }
                this._queue = this.createQueue(new QueueInfo(QueueType.GRAPHICS));
                this._cmdBuff = this.createCommandBuffer(new CommandBufferInfo(this._queue));
                this._caps.maxVertexAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
                this._caps.maxVertexUniformVectors = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
                if (systemInfo.os === OS.IOS) {
                  const maxVertexUniformVectors = this._caps.maxVertexUniformVectors;
                  if (sys.browserType === BrowserType.WECHAT) {
                    this._caps.maxVertexUniformVectors = maxVertexUniformVectors < 256 ? maxVertexUniformVectors : 256;
                  } else if (sys.browserType === BrowserType.SAFARI) {
                    this._caps.maxVertexUniformVectors = maxVertexUniformVectors < 512 ? maxVertexUniformVectors : 512;
                  }
                }
                this._caps.maxFragmentUniformVectors = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
                this._caps.maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
                this._caps.maxVertexTextureUnits = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
                this._caps.maxUniformBufferBindings = gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS);
                this._caps.maxUniformBlockSize = gl.getParameter(gl.MAX_UNIFORM_BLOCK_SIZE);
                this._caps.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
                this._caps.maxCubeMapTextureSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
                this._caps.maxArrayTextureLayers = gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS);
                this._caps.max3DTextureSize = gl.getParameter(gl.MAX_3D_TEXTURE_SIZE);
                this._caps.uboOffsetAlignment = gl.getParameter(gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT);
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
                this._features[Feature.ELEMENT_INDEX_UINT] = true;
                this._features[Feature.INSTANCED_ARRAYS] = true;
                this._features[Feature.MULTIPLE_RENDER_TARGETS] = true;
                this._features[Feature.BLEND_MINMAX] = true;
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
                debug('WebGL2 device initialized.');
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
                const it = this._samplers.values();
                let res = it.next();
                while (!res.done) {
                  res.value.destroy();
                  res = it.next();
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
                let tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.LINEAR_FILTER | FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.R8] = tempFeature;
                this._formatFeatures[Format.RG8] = tempFeature;
                this._formatFeatures[Format.RGB8] = tempFeature;
                this._formatFeatures[Format.RGBA8] = tempFeature;
                tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
                this._formatFeatures[Format.R8SN] = tempFeature;
                this._formatFeatures[Format.RG8SN] = tempFeature;
                this._formatFeatures[Format.RGB8SN] = tempFeature;
                this._formatFeatures[Format.RGBA8SN] = tempFeature;
                this._formatFeatures[Format.R5G6B5] = tempFeature;
                this._formatFeatures[Format.RGBA4] = tempFeature;
                this._formatFeatures[Format.RGB5A1] = tempFeature;
                this._formatFeatures[Format.RGB10A2] = tempFeature;
                this._formatFeatures[Format.SRGB8] = tempFeature;
                this._formatFeatures[Format.SRGB8_A8] = tempFeature;
                this._formatFeatures[Format.R11G11B10F] = tempFeature;
                this._formatFeatures[Format.RGB9E5] = tempFeature;
                this._formatFeatures[Format.DEPTH] = tempFeature;
                this._formatFeatures[Format.DEPTH_STENCIL] = tempFeature;
                this._formatFeatures[Format.RGB10A2UI] = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
                tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.R16F] = tempFeature;
                this._formatFeatures[Format.RG16F] = tempFeature;
                this._formatFeatures[Format.RGB16F] = tempFeature;
                this._formatFeatures[Format.RGBA16F] = tempFeature;
                tempFeature = FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.R32F] = tempFeature;
                this._formatFeatures[Format.RG32F] = tempFeature;
                this._formatFeatures[Format.RGB32F] = tempFeature;
                this._formatFeatures[Format.RGBA32F] = tempFeature;
                this._formatFeatures[Format.RGB10A2UI] = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
                tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER | FormatFeatureBit.VERTEX_ATTRIBUTE;
                this._formatFeatures[Format.R8I] = tempFeature;
                this._formatFeatures[Format.R8UI] = tempFeature;
                this._formatFeatures[Format.R16I] = tempFeature;
                this._formatFeatures[Format.R16UI] = tempFeature;
                this._formatFeatures[Format.R32I] = tempFeature;
                this._formatFeatures[Format.R32UI] = tempFeature;
                this._formatFeatures[Format.RG8I] = tempFeature;
                this._formatFeatures[Format.RG8UI] = tempFeature;
                this._formatFeatures[Format.RG16I] = tempFeature;
                this._formatFeatures[Format.RG16UI] = tempFeature;
                this._formatFeatures[Format.RG32I] = tempFeature;
                this._formatFeatures[Format.RG32UI] = tempFeature;
                this._formatFeatures[Format.RGB8I] = tempFeature;
                this._formatFeatures[Format.RGB8UI] = tempFeature;
                this._formatFeatures[Format.RGB16I] = tempFeature;
                this._formatFeatures[Format.RGB16UI] = tempFeature;
                this._formatFeatures[Format.RGB32I] = tempFeature;
                this._formatFeatures[Format.RGB32UI] = tempFeature;
                this._formatFeatures[Format.RGBA8I] = tempFeature;
                this._formatFeatures[Format.RGBA8UI] = tempFeature;
                this._formatFeatures[Format.RGBA16I] = tempFeature;
                this._formatFeatures[Format.RGBA16UI] = tempFeature;
                this._formatFeatures[Format.RGBA32I] = tempFeature;
                this._formatFeatures[Format.RGBA32UI] = tempFeature;
                this._textureExclusive[Format.R8] = false;
                this._textureExclusive[Format.RG8] = false;
                this._textureExclusive[Format.RGB8] = false;
                this._textureExclusive[Format.R5G6B5] = false;
                this._textureExclusive[Format.RGBA4] = false;
                this._textureExclusive[Format.RGB5A1] = false;
                this._textureExclusive[Format.RGBA8] = false;
                this._textureExclusive[Format.RGB10A2] = false;
                this._textureExclusive[Format.RGB10A2UI] = false;
                this._textureExclusive[Format.SRGB8_A8] = false;
                this._textureExclusive[Format.R8I] = false;
                this._textureExclusive[Format.R8UI] = false;
                this._textureExclusive[Format.R16I] = false;
                this._textureExclusive[Format.R16UI] = false;
                this._textureExclusive[Format.R32I] = false;
                this._textureExclusive[Format.R32UI] = false;
                this._textureExclusive[Format.RG8I] = false;
                this._textureExclusive[Format.RG8UI] = false;
                this._textureExclusive[Format.RG16I] = false;
                this._textureExclusive[Format.RG16UI] = false;
                this._textureExclusive[Format.RG32I] = false;
                this._textureExclusive[Format.RG32UI] = false;
                this._textureExclusive[Format.RGBA8I] = false;
                this._textureExclusive[Format.RGBA8UI] = false;
                this._textureExclusive[Format.RGBA16I] = false;
                this._textureExclusive[Format.RGBA16UI] = false;
                this._textureExclusive[Format.RGBA32I] = false;
                this._textureExclusive[Format.RGBA32UI] = false;
                this._textureExclusive[Format.DEPTH] = false;
                this._textureExclusive[Format.DEPTH_STENCIL] = false;
                if (exts.EXT_color_buffer_float) {
                  this._formatFeatures[Format.R32F] |= FormatFeatureBit.RENDER_TARGET;
                  this._formatFeatures[Format.RG32F] |= FormatFeatureBit.RENDER_TARGET;
                  this._formatFeatures[Format.RGBA32F] |= FormatFeatureBit.RENDER_TARGET;
                  this._textureExclusive[Format.R32F] = false;
                  this._textureExclusive[Format.RG32F] = false;
                  this._textureExclusive[Format.RGBA32F] = false;
                }
                if (exts.EXT_color_buffer_half_float) {
                  this._textureExclusive[Format.R16F] = false;
                  this._textureExclusive[Format.RG16F] = false;
                  this._textureExclusive[Format.RGBA16F] = false;
                }
                if (exts.OES_texture_float_linear) {
                  this._formatFeatures[Format.RGB32F] |= FormatFeatureBit.LINEAR_FILTER;
                  this._formatFeatures[Format.RGBA32F] |= FormatFeatureBit.LINEAR_FILTER;
                  this._formatFeatures[Format.R32F] |= FormatFeatureBit.LINEAR_FILTER;
                  this._formatFeatures[Format.RG32F] |= FormatFeatureBit.LINEAR_FILTER;
                }
                if (exts.OES_texture_half_float_linear) {
                  this._formatFeatures[Format.RGB16F] |= FormatFeatureBit.LINEAR_FILTER;
                  this._formatFeatures[Format.RGBA16F] |= FormatFeatureBit.LINEAR_FILTER;
                  this._formatFeatures[Format.R16F] |= FormatFeatureBit.LINEAR_FILTER;
                  this._formatFeatures[Format.RG16F] |= FormatFeatureBit.LINEAR_FILTER;
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
                  this._formatFeatures[Format.PVRTC_RGB2] = compressedFeature;
                  this._formatFeatures[Format.PVRTC_RGBA2] = compressedFeature;
                  this._formatFeatures[Format.PVRTC_RGB4] = compressedFeature;
                  this._formatFeatures[Format.PVRTC_RGBA4] = compressedFeature;
                }
                if (exts.WEBGL_compressed_texture_astc) {
                  this._formatFeatures[Format.ASTC_RGBA_4X4] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_5X4] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_5X5] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_6X5] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_6X6] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_8X5] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_8X6] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_8X8] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_10X5] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_10X6] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_10X8] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_10X10] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_12X10] = compressedFeature;
                  this._formatFeatures[Format.ASTC_RGBA_12X12] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_4X4] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_5X4] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_5X5] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_6X5] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_6X6] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_8X5] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_8X6] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_8X8] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_10X5] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_10X6] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_10X8] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_10X10] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_12X10] = compressedFeature;
                  this._formatFeatures[Format.ASTC_SRGBA_12X12] = compressedFeature;
                }
              }
              createCommandBuffer(info) {
                const Ctor = info.type === CommandBufferType.PRIMARY ? WebGL2PrimaryCommandBuffer : WebGL2CommandBuffer;
                const cmdBuff = new Ctor();
                cmdBuff.initialize(info);
                return cmdBuff;
              }
              createSwapchain(info) {
                const swapchain = new WebGL2Swapchain();
                this._swapchain = swapchain;
                swapchain.initialize(info);
                return swapchain;
              }
              createBuffer(info) {
                const buffer = new WebGL2Buffer();
                buffer.initialize(info);
                return buffer;
              }
              createTexture(info) {
                const texture = new WebGL2Texture();
                texture.initialize(info);
                return texture;
              }
              createDescriptorSet(info) {
                const descriptorSet = new WebGL2DescriptorSet();
                descriptorSet.initialize(info);
                return descriptorSet;
              }
              createShader(info) {
                const shader = new WebGL2Shader();
                shader.initialize(info);
                return shader;
              }
              createInputAssembler(info) {
                const inputAssembler = new WebGL2InputAssembler();
                inputAssembler.initialize(info);
                return inputAssembler;
              }
              createRenderPass(info) {
                const renderPass = new WebGL2RenderPass();
                renderPass.initialize(info);
                return renderPass;
              }
              createFramebuffer(info) {
                const framebuffer = new WebGL2Framebuffer();
                framebuffer.initialize(info);
                return framebuffer;
              }
              createDescriptorSetLayout(info) {
                const descriptorSetLayout = new WebGL2DescriptorSetLayout();
                descriptorSetLayout.initialize(info);
                return descriptorSetLayout;
              }
              createPipelineLayout(info) {
                const pipelineLayout = new WebGL2PipelineLayout();
                pipelineLayout.initialize(info);
                return pipelineLayout;
              }
              createPipelineState(info) {
                const pipelineState = new WebGL2PipelineState();
                pipelineState.initialize(info);
                return pipelineState;
              }
              createQueue(info) {
                const queue = new WebGL2Queue();
                queue.initialize(info);
                return queue;
              }
              getSampler(info) {
                const hash = Sampler.computeHash(info);
                if (!this._samplers.has(hash)) {
                  this._samplers.set(hash, new WebGL2Sampler(info, hash));
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
                WebGL2CmdFuncCopyBuffersToTexture(this, buffers, texture.gpuTexture, regions);
              }
              copyTextureToBuffers(texture, buffers, regions) {
                WebGL2CmdFuncCopyTextureToBuffers(this, texture.gpuTexture, buffers, regions);
              }
              copyTexImagesToTexture(texImages, texture, regions) {
                WebGL2CmdFuncCopyTexImagesToTexture(this, texImages, texture.gpuTexture, regions);
              }
            } exports('WebGL2Device', WebGL2Device);

            legacyCC.WebGL2Device = WebGL2Device;

        })
    };
}));
