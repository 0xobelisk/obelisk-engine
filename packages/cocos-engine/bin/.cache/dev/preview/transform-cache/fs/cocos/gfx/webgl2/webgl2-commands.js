System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-commands.js", ["../base/define.js", "./webgl2-define.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var BufferUsageBit, ColorMask, CullMode, DynamicStateFlagBit, Filter, Format, TextureType, Type, FormatInfos, FormatSize, LoadOp, MemoryUsageBit, SampleCount, ShaderStageFlagBit, TextureFlagBit, Rect, DrawInfo, DynamicStates, UniformSamplerTexture, alignTo, Extent, formatAlignment, getTypedArrayConstructor, Offset, WebGL2EXT, CachedArray, error, errorID, debug, cclegacy, assertID, WebGLWraps, _f32v4, WebGLCmpFuncs, WebGLStencilOps, WebGLBlendOps, WebGLBlendFactors, WebGL2Cmd, WebGL2CmdObject, WebGL2CmdBeginRenderPass, WebGL2CmdBindStates, WebGL2CmdDraw, WebGL2CmdUpdateBuffer, WebGL2CmdCopyBufferToTexture, WebGL2CmdBlitTexture, WebGL2CmdPackage, gfxStateCache, cmdIds, stagingBuffer;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
  function CmpF32NotEuqal(a, b) {
    var c = a - b;
    return c > 0.000001 || c < -0.000001;
  }
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
  function WebGL2CmdFuncCreateBuffer(device, gpuBuffer) {
    var gl = device.gl;
    var cache = device.stateCache;
    var glUsage = gpuBuffer.memUsage & MemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
    if (gpuBuffer.usage & BufferUsageBit.VERTEX) {
      gpuBuffer.glTarget = gl.ARRAY_BUFFER;
      var glBuffer = gl.createBuffer();
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
      var _glBuffer = gl.createBuffer();
      if (_glBuffer) {
        gpuBuffer.glBuffer = _glBuffer;
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
      var _glBuffer2 = gl.createBuffer();
      if (_glBuffer2 && gpuBuffer.size > 0) {
        gpuBuffer.glBuffer = _glBuffer2;
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
    var gl = device.gl;
    var cache = device.stateCache;
    if (gpuBuffer.glBuffer) {
      // Firefox 75+ implicitly unbind whatever buffer there was on the slot sometimes
      // can be reproduced in the static batching scene at https://github.com/cocos-creator/test-cases-3d
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
        default:
      }
      gl.deleteBuffer(gpuBuffer.glBuffer);
      gpuBuffer.glBuffer = null;
    }
  }
  function WebGL2CmdFuncResizeBuffer(device, gpuBuffer) {
    var gl = device.gl;
    var cache = device.stateCache;
    var glUsage = gpuBuffer.memUsage & MemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
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
      var drawInfos = buffer.drawInfos;
      for (var i = 0; i < drawInfos.length; ++i) {
        gpuBuffer.indirects.setDrawInfo(offset + i, drawInfos[i]);
      }
    } else {
      var buff = buffer;
      var gl = device.gl;
      var cache = device.stateCache;
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
    var gl = device.gl;
    gpuTexture.glInternalFmt = GFXFormatToWebGLInternalFormat(gpuTexture.format, gl);
    gpuTexture.glFormat = GFXFormatToWebGLFormat(gpuTexture.format, gl);
    gpuTexture.glType = GFXFormatToWebGLType(gpuTexture.format, gl);
    var w = gpuTexture.width;
    var h = gpuTexture.height;
    var d = gpuTexture.depth;
    var l = gpuTexture.arrayLayer;
    switch (gpuTexture.type) {
      case TextureType.TEX2D:
        {
          gpuTexture.glTarget = gl.TEXTURE_2D;
          var maxSize = Math.max(w, h);
          if (maxSize > device.capabilities.maxTextureSize) {
            errorID(9100, maxSize, device.capabilities.maxTextureSize);
          }
          if (gpuTexture.samples === SampleCount.X1) {
            gpuTexture.glTexture = gl.createTexture();
            if (gpuTexture.size > 0) {
              var glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
              if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                gl.bindTexture(gl.TEXTURE_2D, gpuTexture.glTexture);
                glTexUnit.glTexture = gpuTexture.glTexture;
              }
              if (FormatInfos[gpuTexture.format].isCompressed) {
                for (var i = 0; i < gpuTexture.mipLevel; ++i) {
                  var imgSize = FormatSize(gpuTexture.format, w, h, 1);
                  var view = new Uint8Array(imgSize);
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
          var _maxSize = Math.max(w, h);
          if (_maxSize > device.capabilities.maxTextureSize) {
            errorID(9100, _maxSize, device.capabilities.maxTextureSize);
          }
          if (l > device.capabilities.maxArrayTextureLayers) {
            errorID(9100, l, device.capabilities.maxArrayTextureLayers);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            var _glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (_glTexUnit.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_2D_ARRAY, gpuTexture.glTexture);
              _glTexUnit.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (var _i = 0; _i < gpuTexture.mipLevel; ++_i) {
                var _imgSize = FormatSize(gpuTexture.format, w, h, l);
                var _view = new Uint8Array(_imgSize);
                gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, _i, gpuTexture.glInternalFmt, w, h, l, 0, _view);
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
          var _maxSize2 = Math.max(Math.max(w, h), d);
          if (_maxSize2 > device.capabilities.max3DTextureSize) {
            errorID(9100, _maxSize2, device.capabilities.max3DTextureSize);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            var _glTexUnit2 = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (_glTexUnit2.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_3D, gpuTexture.glTexture);
              _glTexUnit2.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (var _i2 = 0; _i2 < gpuTexture.mipLevel; ++_i2) {
                var _imgSize2 = FormatSize(gpuTexture.format, w, h, d);
                var _view2 = new Uint8Array(_imgSize2);
                gl.compressedTexImage3D(gl.TEXTURE_3D, _i2, gpuTexture.glInternalFmt, w, h, d, 0, _view2);
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
          var _maxSize3 = Math.max(w, h);
          if (_maxSize3 > device.capabilities.maxCubeMapTextureSize) {
            errorID(9100, _maxSize3, device.capabilities.maxTextureSize);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            var _glTexUnit3 = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (_glTexUnit3.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_CUBE_MAP, gpuTexture.glTexture);
              _glTexUnit3.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (var _i3 = 0; _i3 < gpuTexture.mipLevel; ++_i3) {
                var _imgSize3 = FormatSize(gpuTexture.format, w, h, 1);
                var _view3 = new Uint8Array(_imgSize3);
                for (var f = 0; f < 6; ++f) {
                  gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _i3, gpuTexture.glInternalFmt, w, h, 0, _view3);
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
    var gl = device.gl;
    if (gpuTexture.glTexture) {
      var glTexUnits = device.stateCache.glTexUnits;
      var texUnit = device.stateCache.texUnit;
      gl.deleteTexture(gpuTexture.glTexture);
      for (var i = 0; i < glTexUnits.length; ++i) {
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
      var glRenderbuffer = device.stateCache.glRenderbuffer;
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
    var gl = device.gl;
    var w = gpuTexture.width;
    var h = gpuTexture.height;
    var d = gpuTexture.depth;
    var l = gpuTexture.arrayLayer;
    switch (gpuTexture.type) {
      case TextureType.TEX2D:
        {
          gpuTexture.glTarget = gl.TEXTURE_2D;
          var maxSize = Math.max(w, h);
          if (maxSize > device.capabilities.maxTextureSize) {
            errorID(9100, maxSize, device.capabilities.maxTextureSize);
          }
          if (gpuTexture.samples === SampleCount.X1) {
            var glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (glTexUnit.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_2D, gpuTexture.glTexture);
              glTexUnit.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (var i = 0; i < gpuTexture.mipLevel; ++i) {
                var imgSize = FormatSize(gpuTexture.format, w, h, 1);
                var view = new Uint8Array(imgSize);
                gl.compressedTexImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, view);
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            } else {
              // immutable by default
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
          var _maxSize4 = Math.max(w, h);
          if (_maxSize4 > device.capabilities.maxTextureSize) {
            errorID(9100, _maxSize4, device.capabilities.maxTextureSize);
          }
          if (l > device.capabilities.maxArrayTextureLayers) {
            errorID(9100, l, device.capabilities.maxArrayTextureLayers);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            var _glTexUnit4 = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (_glTexUnit4.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_2D_ARRAY, gpuTexture.glTexture);
              _glTexUnit4.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (var _i4 = 0; _i4 < gpuTexture.mipLevel; ++_i4) {
                var _imgSize4 = FormatSize(gpuTexture.format, w, h, l);
                var _view4 = new Uint8Array(_imgSize4);
                gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, _i4, gpuTexture.glInternalFmt, w, h, l, 0, _view4);
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
          var _maxSize5 = Math.max(Math.max(w, h), d);
          if (_maxSize5 > device.capabilities.max3DTextureSize) {
            errorID(9100, _maxSize5, device.capabilities.max3DTextureSize);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            var _glTexUnit5 = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (_glTexUnit5.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_3D, gpuTexture.glTexture);
              _glTexUnit5.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (var _i5 = 0; _i5 < gpuTexture.mipLevel; ++_i5) {
                var _imgSize5 = FormatSize(gpuTexture.format, w, h, d);
                var _view5 = new Uint8Array(_imgSize5);
                gl.compressedTexImage3D(gl.TEXTURE_3D, _i5, gpuTexture.glInternalFmt, w, h, d, 0, _view5);
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
          var _maxSize6 = Math.max(w, h);
          if (_maxSize6 > device.capabilities.maxCubeMapTextureSize) {
            errorID(9100, _maxSize6, device.capabilities.maxTextureSize);
          }
          var _glTexUnit6 = device.stateCache.glTexUnits[device.stateCache.texUnit];
          if (_glTexUnit6.glTexture !== gpuTexture.glTexture) {
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, gpuTexture.glTexture);
            _glTexUnit6.glTexture = gpuTexture.glTexture;
          }
          if (FormatInfos[gpuTexture.format].isCompressed) {
            for (var f = 0; f < 6; ++f) {
              w = gpuTexture.width;
              h = gpuTexture.height;
              for (var _i6 = 0; _i6 < gpuTexture.mipLevel; ++_i6) {
                var _imgSize6 = FormatSize(gpuTexture.format, w, h, 1);
                var _view6 = new Uint8Array(_imgSize6);
                gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _i6, gpuTexture.glInternalFmt, w, h, 0, _view6);
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            }
          } else {
            // immutable by default
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
    var gl = device.gl;
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
    var gl = device.gl;
    var it = gpuSampler.glSamplers.values();
    var res = it.next();
    while (!res.done) {
      gl.deleteSampler(res.value);
      var glSamplerUnits = device.stateCache.glSamplerUnits;
      for (var i = 0; i < glSamplerUnits.length; ++i) {
        if (glSamplerUnits[i] === res.value) {
          gl.bindSampler(i, null);
          glSamplerUnits[i] = null;
        }
      }
    }
    gpuSampler.glSamplers.clear();
  }
  function WebGL2CmdFuncCreateFramebuffer(device, gpuFramebuffer) {
    for (var i = 0; i < gpuFramebuffer.gpuColorViews.length; ++i) {
      var tex = gpuFramebuffer.gpuColorViews[i].gpuTexture;
      if (tex.isSwapchainTexture) {
        gpuFramebuffer.isOffscreen = false;
        return;
      }
    }
    var gl = device.gl;
    var attachments = [];
    var glFramebuffer = gl.createFramebuffer();
    if (glFramebuffer) {
      gpuFramebuffer.glFramebuffer = glFramebuffer;
      if (device.stateCache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
      }
      for (var _i7 = 0; _i7 < gpuFramebuffer.gpuColorViews.length; ++_i7) {
        var colorTextureView = gpuFramebuffer.gpuColorViews[_i7];
        var colorTexture = colorTextureView.gpuTexture;
        if (colorTexture) {
          if (colorTexture.glTexture) {
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + _i7, colorTexture.glTarget, colorTexture.glTexture, colorTextureView.baseLevel);
          } else {
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + _i7, gl.RENDERBUFFER, colorTexture.glRenderbuffer);
          }
          attachments.push(gl.COLOR_ATTACHMENT0 + _i7);
          gpuFramebuffer.width = Math.min(gpuFramebuffer.width, colorTexture.width >> colorTextureView.baseLevel);
          gpuFramebuffer.height = Math.min(gpuFramebuffer.height, colorTexture.height >> colorTextureView.baseLevel);
        }
      }
      var dstView = gpuFramebuffer.gpuDepthStencilView;
      if (dstView) {
        var dst = dstView.gpuTexture;
        var glAttachment = FormatInfos[dst.format].hasStencil ? gl.DEPTH_STENCIL_ATTACHMENT : gl.DEPTH_ATTACHMENT;
        if (dst.glTexture) {
          gl.framebufferTexture2D(gl.FRAMEBUFFER, glAttachment, dst.glTarget, dst.glTexture, gpuFramebuffer.gpuDepthStencilView.baseLevel);
        } else {
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, glAttachment, gl.RENDERBUFFER, dst.glRenderbuffer);
        }
        gpuFramebuffer.width = Math.min(gpuFramebuffer.width, dst.width >> dstView.baseLevel);
        gpuFramebuffer.height = Math.min(gpuFramebuffer.height, dst.height >> dstView.baseLevel);
      }
      gl.drawBuffers(attachments);
      var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
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
          default:
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
    var gl = device.gl;
    var _loop = function _loop() {
        var gpuStage = gpuShader.gpuStages[k];
        var glShaderType = 0;
        var shaderTypeStr = '';
        var lineNumber = 1;
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
              return {
                v: void 0
              };
            }
        }
        var glShader = gl.createShader(glShaderType);
        if (glShader) {
          gpuStage.glShader = glShader;
          gl.shaderSource(gpuStage.glShader, "#version 300 es\n" + gpuStage.source);
          gl.compileShader(gpuStage.glShader);
          if (!gl.getShaderParameter(gpuStage.glShader, gl.COMPILE_STATUS)) {
            error(shaderTypeStr + " in '" + gpuShader.name + "' compilation failed.");
            error('Shader source dump:', gpuStage.source.replace(/^|\n/g, function () {
              return "\n" + lineNumber++ + " ";
            }));
            error(gl.getShaderInfoLog(gpuStage.glShader));
            for (var l = 0; l < gpuShader.gpuStages.length; l++) {
              var stage = gpuShader.gpuStages[k];
              if (stage.glShader) {
                gl.deleteShader(stage.glShader);
                stage.glShader = null;
              }
            }
            return {
              v: void 0
            };
          }
        }
      },
      _ret;
    for (var k = 0; k < gpuShader.gpuStages.length; k++) {
      _ret = _loop();
      if (_ret) return _ret.v;
    }
    var glProgram = gl.createProgram();
    if (!glProgram) {
      return;
    }
    gpuShader.glProgram = glProgram;
    var enableEffectImport = !!(cclegacy.rendering && cclegacy.rendering.enableEffectImport);

    // link program
    for (var _k = 0; _k < gpuShader.gpuStages.length; _k++) {
      var gpuStage = gpuShader.gpuStages[_k];
      gl.attachShader(gpuShader.glProgram, gpuStage.glShader);
    }
    gl.linkProgram(gpuShader.glProgram);

    // detach & delete immediately
    for (var _k2 = 0; _k2 < gpuShader.gpuStages.length; _k2++) {
      var _gpuStage = gpuShader.gpuStages[_k2];
      if (_gpuStage.glShader) {
        gl.detachShader(gpuShader.glProgram, _gpuStage.glShader);
        gl.deleteShader(_gpuStage.glShader);
        _gpuStage.glShader = null;
      }
    }
    if (gl.getProgramParameter(gpuShader.glProgram, gl.LINK_STATUS)) {
      debug("Shader '" + gpuShader.name + "' compilation succeeded.");
    } else {
      error("Failed to link shader '" + gpuShader.name + "'.");
      error(gl.getProgramInfoLog(gpuShader.glProgram));
      return;
    }

    // parse inputs
    var activeAttribCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_ATTRIBUTES);
    gpuShader.glInputs = new Array(activeAttribCount);
    for (var i = 0; i < activeAttribCount; ++i) {
      var attribInfo = gl.getActiveAttrib(gpuShader.glProgram, i);
      if (attribInfo) {
        var varName = void 0;
        var nameOffset = attribInfo.name.indexOf('[');
        if (nameOffset !== -1) {
          varName = attribInfo.name.substr(0, nameOffset);
        } else {
          varName = attribInfo.name;
        }
        var glLoc = gl.getAttribLocation(gpuShader.glProgram, varName);
        var type = WebGLTypeToGFXType(attribInfo.type, gl);
        var stride = WebGLGetTypeSize(attribInfo.type, gl);
        gpuShader.glInputs[i] = {
          name: varName,
          type: type,
          stride: stride,
          count: attribInfo.size,
          size: stride * attribInfo.size,
          glType: attribInfo.type,
          glLoc: glLoc
        };
      }
    }

    // create uniform blocks
    var activeBlockCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_UNIFORM_BLOCKS);
    var blockName;
    var blockIdx;
    var blockSize;
    var block;
    if (activeBlockCount) {
      gpuShader.glBlocks = new Array(activeBlockCount);
      for (var b = 0; b < activeBlockCount; ++b) {
        blockName = gl.getActiveUniformBlockName(gpuShader.glProgram, b);
        var _nameOffset = blockName.indexOf('[');
        if (_nameOffset !== -1) {
          blockName = blockName.substr(0, _nameOffset);
        }

        // blockIdx = gl.getUniformBlockIndex(gpuShader.glProgram, blockName);
        block = null;
        for (var _k3 = 0; _k3 < gpuShader.blocks.length; _k3++) {
          if (gpuShader.blocks[_k3].name === blockName) {
            block = gpuShader.blocks[_k3];
            break;
          }
        }
        if (!block) {
          error("Block '" + blockName + "' does not bound");
        } else {
          // blockIdx = gl.getUniformBlockIndex(gpuShader.glProgram, blockName);
          blockIdx = b;
          blockSize = gl.getActiveUniformBlockParameter(gpuShader.glProgram, blockIdx, gl.UNIFORM_BLOCK_DATA_SIZE);
          var glBinding = enableEffectImport ? block.flattened : block.binding + (device.bindingMappings.blockOffsets[block.set] || 0);
          gl.uniformBlockBinding(gpuShader.glProgram, blockIdx, glBinding);
          gpuShader.glBlocks[b] = {
            set: block.set,
            binding: block.binding,
            idx: blockIdx,
            name: blockName,
            size: blockSize,
            glBinding: glBinding
          };
        }
      }
    }

    // WebGL doesn't support Framebuffer Fetch
    for (var _i8 = 0; _i8 < gpuShader.subpassInputs.length; ++_i8) {
      var subpassInput = gpuShader.subpassInputs[_i8];
      gpuShader.samplerTextures.push(new UniformSamplerTexture(subpassInput.set, subpassInput.binding, subpassInput.name, Type.SAMPLER2D, subpassInput.count));
    }

    // create uniform sampler textures
    if (gpuShader.samplerTextures.length > 0) {
      gpuShader.glSamplerTextures = new Array(gpuShader.samplerTextures.length);
      for (var _i9 = 0; _i9 < gpuShader.samplerTextures.length; ++_i9) {
        var sampler = gpuShader.samplerTextures[_i9];
        gpuShader.glSamplerTextures[_i9] = {
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

    // texture unit index mapping optimization
    var glActiveSamplers = [];
    var glActiveSamplerLocations = [];
    var texUnitCacheMap = device.stateCache.texUnitCacheMap;
    if (!enableEffectImport) {
      var flexibleSetBaseOffset = 0;
      for (var _i10 = 0; _i10 < gpuShader.blocks.length; ++_i10) {
        if (gpuShader.blocks[_i10].set === device.bindingMappings.flexibleSet) {
          flexibleSetBaseOffset++;
        }
      }
      var arrayOffset = 0;
      for (var _i11 = 0; _i11 < gpuShader.samplerTextures.length; ++_i11) {
        var _sampler = gpuShader.samplerTextures[_i11];
        var _glLoc = gl.getUniformLocation(gpuShader.glProgram, _sampler.name);
        // wEcHAT just returns { id: -1 } for non-existing names /eyerolling
        if (_glLoc && _glLoc.id !== -1) {
          glActiveSamplers.push(gpuShader.glSamplerTextures[_i11]);
          glActiveSamplerLocations.push(_glLoc);
        }
        if (texUnitCacheMap[_sampler.name] === undefined) {
          var binding = _sampler.binding + device.bindingMappings.samplerTextureOffsets[_sampler.set] + arrayOffset;
          if (_sampler.set === device.bindingMappings.flexibleSet) {
            binding -= flexibleSetBaseOffset;
          }
          texUnitCacheMap[_sampler.name] = binding % device.capabilities.maxTextureUnits;
          arrayOffset += _sampler.count - 1;
        }
      }
    } else {
      for (var _i12 = 0; _i12 < gpuShader.samplerTextures.length; ++_i12) {
        var _sampler2 = gpuShader.samplerTextures[_i12];
        var _glLoc2 = gl.getUniformLocation(gpuShader.glProgram, _sampler2.name);
        // wEcHAT just returns { id: -1 } for non-existing names /eyerolling
        if (_glLoc2 && _glLoc2.id !== -1) {
          glActiveSamplers.push(gpuShader.glSamplerTextures[_i12]);
          glActiveSamplerLocations.push(_glLoc2);
        }
        if (texUnitCacheMap[_sampler2.name] === undefined) {
          texUnitCacheMap[_sampler2.name] = _sampler2.flattened % device.capabilities.maxTextureUnits;
        }
      }
    }
    if (glActiveSamplers.length) {
      var usedTexUnits = [];
      // try to reuse existing mappings first
      for (var _i13 = 0; _i13 < glActiveSamplers.length; ++_i13) {
        var glSampler = glActiveSamplers[_i13];
        var cachedUnit = texUnitCacheMap[glSampler.name];
        if (cachedUnit !== undefined) {
          glSampler.glLoc = glActiveSamplerLocations[_i13];
          for (var t = 0; t < glSampler.count; ++t) {
            while (usedTexUnits[cachedUnit]) {
              cachedUnit = (cachedUnit + 1) % device.capabilities.maxTextureUnits;
            }
            glSampler.units.push(cachedUnit);
            usedTexUnits[cachedUnit] = true;
          }
        }
      }
      // fill in the rest sequencially
      var unitIdx = 0;
      for (var _i14 = 0; _i14 < glActiveSamplers.length; ++_i14) {
        var _glSampler = glActiveSamplers[_i14];
        if (!_glSampler.glLoc) {
          _glSampler.glLoc = glActiveSamplerLocations[_i14];
          while (usedTexUnits[unitIdx]) {
            unitIdx++;
          }
          for (var _t = 0; _t < _glSampler.count; ++_t) {
            while (usedTexUnits[unitIdx]) {
              unitIdx = (unitIdx + 1) % device.capabilities.maxTextureUnits;
            }
            if (texUnitCacheMap[_glSampler.name] === undefined) {
              texUnitCacheMap[_glSampler.name] = unitIdx;
            }
            _glSampler.units.push(unitIdx);
            usedTexUnits[unitIdx] = true;
          }
        }
      }
      if (device.stateCache.glProgram !== gpuShader.glProgram) {
        gl.useProgram(gpuShader.glProgram);
      }
      for (var _k4 = 0; _k4 < glActiveSamplers.length; _k4++) {
        var _glSampler2 = glActiveSamplers[_k4];
        _glSampler2.glUnits = new Int32Array(_glSampler2.units);
        gl.uniform1iv(_glSampler2.glLoc, _glSampler2.glUnits);
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
    var gl = device.gl;
    gpuInputAssembler.glAttribs = new Array(gpuInputAssembler.attributes.length);
    var offsets = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < gpuInputAssembler.attributes.length; ++i) {
      var attrib = gpuInputAssembler.attributes[i];
      var stream = attrib.stream !== undefined ? attrib.stream : 0;
      // if (stream < gpuInputAssembler.gpuVertexBuffers.length) {

      var gpuBuffer = gpuInputAssembler.gpuVertexBuffers[stream];
      var glType = GFXFormatToWebGLType(attrib.format, gl);
      var size = FormatInfos[attrib.format].size;
      gpuInputAssembler.glAttribs[i] = {
        name: attrib.name,
        glBuffer: gpuBuffer.glBuffer,
        glType: glType,
        size: size,
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
    var it = gpuInputAssembler.glVAOs.values();
    var res = it.next();
    var gl = device.gl;
    var glVAO = device.stateCache.glVAO;
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
  function WebGL2CmdFuncBeginRenderPass(device, gpuRenderPass, gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil) {
    var gl = device.gl;
    var cache = device.stateCache;
    var clears = 0;
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
      for (var j = 0; j < clearColors.length; ++j) {
        var colorAttachment = gpuRenderPass.colorAttachments[j];
        if (colorAttachment.format !== Format.UNKNOWN) {
          switch (colorAttachment.loadOp) {
            case LoadOp.LOAD:
              break;
            // GL default behavior
            case LoadOp.CLEAR:
              {
                if (cache.bs.targets[0].blendColorMask !== ColorMask.ALL) {
                  gl.colorMask(true, true, true, true);
                }

                // We-chat mini-game, glClearBufferfv get INVALID_ENUM. MRT may not be supported. use clearColor instead.
                if (gpuRenderPass.colorAttachments.length === 1) {
                  var clearColor = clearColors[0];
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
                // invalidate the framebuffer
                gfxStateCache.invalidateAttachments.push(gl.COLOR_ATTACHMENT0 + j);
                break;
              }
            default:
          }
        }
      } // if (curGPURenderPass)

      if (gpuRenderPass.depthStencilAttachment) {
        if (gpuRenderPass.depthStencilAttachment.format !== Format.UNKNOWN) {
          switch (gpuRenderPass.depthStencilAttachment.depthLoadOp) {
            case LoadOp.LOAD:
              break;
            // GL default behavior
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
                // invalidate the framebuffer
                gfxStateCache.invalidateAttachments.push(gl.DEPTH_ATTACHMENT);
                break;
              }
            default:
          }
          if (FormatInfos[gpuRenderPass.depthStencilAttachment.format].hasStencil) {
            switch (gpuRenderPass.depthStencilAttachment.stencilLoadOp) {
              case LoadOp.LOAD:
                break;
              // GL default behavior
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
                  // invalidate the framebuffer
                  gfxStateCache.invalidateAttachments.push(gl.STENCIL_ATTACHMENT);
                  break;
                }
              default:
            }
          }
        }
      } // if (curGPURenderPass.depthStencilAttachment)

      if (gpuFramebuffer.glFramebuffer && gfxStateCache.invalidateAttachments.length) {
        gl.invalidateFramebuffer(gl.FRAMEBUFFER, gfxStateCache.invalidateAttachments);
      }
      if (clears) {
        gl.clear(clears);
      }

      // restore states
      if (clears & gl.COLOR_BUFFER_BIT) {
        var colorMask = cache.bs.targets[0].blendColorMask;
        if (colorMask !== ColorMask.ALL) {
          var r = (colorMask & ColorMask.R) !== ColorMask.NONE;
          var g = (colorMask & ColorMask.G) !== ColorMask.NONE;
          var b = (colorMask & ColorMask.B) !== ColorMask.NONE;
          var a = (colorMask & ColorMask.A) !== ColorMask.NONE;
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
    } // if (gpuFramebuffer)
  }

  function WebGL2CmdFuncBindStates(device, gpuPipelineState, gpuInputAssembler, gpuDescriptorSets, dynamicOffsets, dynamicStates) {
    var gl = device.gl;
    var cache = device.stateCache;
    var gpuShader = gpuPipelineState && gpuPipelineState.gpuShader;
    var isShaderChanged = false;

    // bind pipeline
    if (gpuPipelineState && gfxStateCache.gpuPipelineState !== gpuPipelineState) {
      gfxStateCache.gpuPipelineState = gpuPipelineState;
      gfxStateCache.glPrimitive = gpuPipelineState.glPrimitive;
      if (gpuShader) {
        var glProgram = gpuShader.glProgram;
        if (cache.glProgram !== glProgram) {
          gl.useProgram(glProgram);
          cache.glProgram = glProgram;
          isShaderChanged = true;
        }
      }

      // rasterizer state
      var rs = gpuPipelineState.rs;
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
            default:
          }
          device.stateCache.rs.cullMode = rs.cullMode;
        }
        var isFrontFaceCCW = rs.isFrontFaceCCW; // boolean XOR
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
      } // rasterizater state

      // depth-stencil state
      var dss = gpuPipelineState.dss;
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

        // front
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

        // back
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
      } // depth-stencil state

      // blend state
      var bs = gpuPipelineState.bs;
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
        var target0 = bs.targets[0];
        var target0Cache = cache.bs.targets[0];
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
      } // blend state
    } // bind pipeline

    // bind descriptor sets
    if (gpuPipelineState && gpuPipelineState.gpuPipelineLayout && gpuShader) {
      var blockLen = gpuShader.glBlocks.length;
      var dynamicOffsetIndices = gpuPipelineState.gpuPipelineLayout.dynamicOffsetIndices;
      for (var j = 0; j < blockLen; j++) {
        var glBlock = gpuShader.glBlocks[j];
        var gpuDescriptorSet = gpuDescriptorSets[glBlock.set];
        var descriptorIndex = gpuDescriptorSet && gpuDescriptorSet.descriptorIndices[glBlock.binding];
        var gpuDescriptor = descriptorIndex >= 0 && gpuDescriptorSet.gpuDescriptors[descriptorIndex];
        if (!gpuDescriptor || !gpuDescriptor.gpuBuffer) {
          // error(`Buffer binding '${glBlock.name}' at set ${glBlock.set} binding ${glBlock.binding} is not bounded`);
          continue;
        }
        var dynamicOffsetIndexSet = dynamicOffsetIndices[glBlock.set];
        var dynamicOffsetIndex = dynamicOffsetIndexSet && dynamicOffsetIndexSet[glBlock.binding];
        var offset = gpuDescriptor.gpuBuffer.glOffset;
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
      var samplerLen = gpuShader.glSamplerTextures.length;
      for (var i = 0; i < samplerLen; i++) {
        var glSampler = gpuShader.glSamplerTextures[i];
        var _gpuDescriptorSet = gpuDescriptorSets[glSampler.set];
        var _descriptorIndex = _gpuDescriptorSet && _gpuDescriptorSet.descriptorIndices[glSampler.binding];
        var _gpuDescriptor = _descriptorIndex >= 0 && _gpuDescriptorSet.gpuDescriptors[_descriptorIndex];
        for (var l = 0; l < glSampler.units.length; l++) {
          var texUnit = glSampler.units[l];
          var glTexUnit = cache.glTexUnits[texUnit];
          if (!_gpuDescriptor || !_gpuDescriptor.gpuTextureView || !_gpuDescriptor.gpuTextureView.gpuTexture || !_gpuDescriptor.gpuSampler) {
            // error(`Sampler binding '${glSampler.name}' at set ${glSampler.set} binding ${glSampler.binding} index ${l} is not bounded`);
            continue;
          }
          var gpuTextureView = _gpuDescriptor.gpuTextureView;
          var gpuTexture = gpuTextureView.gpuTexture;
          var minLod = gpuTextureView.baseLevel;
          var maxLod = minLod + gpuTextureView.levelCount;
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
            var _gpuDescriptor2 = _gpuDescriptor,
              gpuSampler = _gpuDescriptor2.gpuSampler; // get sampler with different mipmap levels
            var _glSampler3 = gpuSampler.getGLSampler(device, minLod, maxLod);
            if (cache.glSamplerUnits[texUnit] !== _glSampler3) {
              gl.bindSampler(texUnit, _glSampler3);
              cache.glSamplerUnits[texUnit] = _glSampler3;
            }
          }
          _gpuDescriptor = _gpuDescriptorSet.gpuDescriptors[++_descriptorIndex];
        }
      }
    } // bind descriptor sets

    // bind vertex/index buffer
    if (gpuInputAssembler && gpuShader && (isShaderChanged || gfxStateCache.gpuInputAssembler !== gpuInputAssembler)) {
      gfxStateCache.gpuInputAssembler = gpuInputAssembler;
      if (device.extensions.useVAO) {
        // check vao
        var glVAO = gpuInputAssembler.glVAOs.get(gpuShader.glProgram);
        if (!glVAO) {
          glVAO = gl.createVertexArray();
          gpuInputAssembler.glVAOs.set(gpuShader.glProgram, glVAO);
          gl.bindVertexArray(glVAO);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          cache.glArrayBuffer = null;
          cache.glElementArrayBuffer = null;
          var glAttrib;
          for (var _j = 0; _j < gpuShader.glInputs.length; _j++) {
            var glInput = gpuShader.glInputs[_j];
            glAttrib = null;
            for (var k = 0; k < gpuInputAssembler.glAttribs.length; k++) {
              var attrib = gpuInputAssembler.glAttribs[k];
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
              for (var c = 0; c < glAttrib.componentCount; ++c) {
                var glLoc = glInput.glLoc + c;
                var attribOffset = glAttrib.offset + glAttrib.size * c;
                gl.enableVertexAttribArray(glLoc);
                cache.glCurrentAttribLocs[glLoc] = true;
                gl.vertexAttribPointer(glLoc, glAttrib.count, glAttrib.glType, glAttrib.isNormalized, glAttrib.stride, attribOffset);
                gl.vertexAttribDivisor(glLoc, glAttrib.isInstanced ? 1 : 0);
              }
            }
          }
          var gpuBuffer = gpuInputAssembler.gpuIndexBuffer;
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
        for (var a = 0; a < device.capabilities.maxVertexAttributes; ++a) {
          cache.glCurrentAttribLocs[a] = false;
        }
        for (var _j2 = 0; _j2 < gpuShader.glInputs.length; _j2++) {
          var _glInput = gpuShader.glInputs[_j2];
          var _glAttrib = null;
          for (var _k5 = 0; _k5 < gpuInputAssembler.glAttribs.length; _k5++) {
            var _attrib = gpuInputAssembler.glAttribs[_k5];
            if (_attrib.name === _glInput.name) {
              _glAttrib = _attrib;
              break;
            }
          }
          if (_glAttrib) {
            if (cache.glArrayBuffer !== _glAttrib.glBuffer) {
              gl.bindBuffer(gl.ARRAY_BUFFER, _glAttrib.glBuffer);
              cache.glArrayBuffer = _glAttrib.glBuffer;
            }
            for (var _c = 0; _c < _glAttrib.componentCount; ++_c) {
              var _glLoc3 = _glInput.glLoc + _c;
              var _attribOffset = _glAttrib.offset + _glAttrib.size * _c;
              if (!cache.glEnabledAttribLocs[_glLoc3] && _glLoc3 >= 0) {
                gl.enableVertexAttribArray(_glLoc3);
                cache.glEnabledAttribLocs[_glLoc3] = true;
              }
              cache.glCurrentAttribLocs[_glLoc3] = true;
              gl.vertexAttribPointer(_glLoc3, _glAttrib.count, _glAttrib.glType, _glAttrib.isNormalized, _glAttrib.stride, _attribOffset);
              gl.vertexAttribDivisor(_glLoc3, _glAttrib.isInstanced ? 1 : 0);
            }
          }
        } // for

        var _gpuBuffer = gpuInputAssembler.gpuIndexBuffer;
        if (_gpuBuffer) {
          if (cache.glElementArrayBuffer !== _gpuBuffer.glBuffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _gpuBuffer.glBuffer);
            cache.glElementArrayBuffer = _gpuBuffer.glBuffer;
          }
        }
        for (var _a = 0; _a < device.capabilities.maxVertexAttributes; ++_a) {
          if (cache.glEnabledAttribLocs[_a] !== cache.glCurrentAttribLocs[_a]) {
            gl.disableVertexAttribArray(_a);
            cache.glEnabledAttribLocs[_a] = false;
          }
        }
      }
    } // bind vertex/index buffer

    // update dynamic states
    if (gpuPipelineState && gpuPipelineState.dynamicStates.length) {
      var dsLen = gpuPipelineState.dynamicStates.length;
      for (var _k6 = 0; _k6 < dsLen; _k6++) {
        var dynamicState = gpuPipelineState.dynamicStates[_k6];
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
              var blendConstant = dynamicStates.blendConstant;
              if (cache.bs.blendColor.x !== blendConstant.x || cache.bs.blendColor.y !== blendConstant.y || cache.bs.blendColor.z !== blendConstant.z || cache.bs.blendColor.w !== blendConstant.w) {
                gl.blendColor(blendConstant.x, blendConstant.y, blendConstant.z, blendConstant.w);
                cache.bs.blendColor.copy(blendConstant);
              }
              break;
            }
          case DynamicStateFlagBit.STENCIL_WRITE_MASK:
            {
              var front = dynamicStates.stencilStatesFront;
              var back = dynamicStates.stencilStatesBack;
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
              var _front = dynamicStates.stencilStatesFront;
              var _back = dynamicStates.stencilStatesBack;
              if (cache.dss.stencilRefFront !== _front.reference || cache.dss.stencilReadMaskFront !== _front.compareMask) {
                gl.stencilFuncSeparate(gl.FRONT, WebGLCmpFuncs[cache.dss.stencilFuncFront], _front.reference, _front.compareMask);
                cache.dss.stencilRefFront = _front.reference;
                cache.dss.stencilReadMaskFront = _front.compareMask;
              }
              if (cache.dss.stencilRefBack !== _back.reference || cache.dss.stencilReadMaskBack !== _back.compareMask) {
                gl.stencilFuncSeparate(gl.BACK, WebGLCmpFuncs[cache.dss.stencilFuncBack], _back.reference, _back.compareMask);
                cache.dss.stencilRefBack = _back.reference;
                cache.dss.stencilReadMaskBack = _back.compareMask;
              }
              break;
            }
          default:
        } // switch
      } // for
    } // update dynamic states
  }

  function WebGL2CmdFuncDraw(device, drawInfo) {
    var gl = device.gl;
    var gpuInputAssembler = gfxStateCache.gpuInputAssembler,
      glPrimitive = gfxStateCache.glPrimitive;
    var md = device.extensions.WEBGL_multi_draw;
    if (gpuInputAssembler) {
      var indexBuffer = gpuInputAssembler.gpuIndexBuffer;
      if (gpuInputAssembler.gpuIndirectBuffer) {
        var indirects = gpuInputAssembler.gpuIndirectBuffer.indirects;
        if (indirects.drawByIndex) {
          for (var j = 0; j < indirects.drawCount; j++) {
            indirects.byteOffsets[j] = indirects.offsets[j] * indexBuffer.stride;
          }
          if (md) {
            if (indirects.instancedDraw) {
              md.multiDrawElementsInstancedWEBGL(glPrimitive, indirects.counts, 0, gpuInputAssembler.glIndexType, indirects.byteOffsets, 0, indirects.instances, 0, indirects.drawCount);
            } else {
              md.multiDrawElementsWEBGL(glPrimitive, indirects.counts, 0, gpuInputAssembler.glIndexType, indirects.byteOffsets, 0, indirects.drawCount);
            }
          } else {
            for (var _j3 = 0; _j3 < indirects.drawCount; _j3++) {
              if (indirects.instances[_j3]) {
                gl.drawElementsInstanced(glPrimitive, indirects.counts[_j3], gpuInputAssembler.glIndexType, indirects.byteOffsets[_j3], indirects.instances[_j3]);
              } else {
                gl.drawElements(glPrimitive, indirects.counts[_j3], gpuInputAssembler.glIndexType, indirects.byteOffsets[_j3]);
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
          for (var _j4 = 0; _j4 < indirects.drawCount; _j4++) {
            if (indirects.instances[_j4]) {
              gl.drawArraysInstanced(glPrimitive, indirects.offsets[_j4], indirects.counts[_j4], indirects.instances[_j4]);
            } else {
              gl.drawArrays(glPrimitive, indirects.offsets[_j4], indirects.counts[_j4]);
            }
          }
        }
      } else if (drawInfo.instanceCount) {
        if (indexBuffer) {
          if (drawInfo.indexCount > 0) {
            var offset = drawInfo.firstIndex * indexBuffer.stride;
            gl.drawElementsInstanced(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, offset, drawInfo.instanceCount);
          }
        } else if (drawInfo.vertexCount > 0) {
          gl.drawArraysInstanced(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount, drawInfo.instanceCount);
        }
      } else if (indexBuffer) {
        if (drawInfo.indexCount > 0) {
          var _offset = drawInfo.firstIndex * indexBuffer.stride;
          gl.drawElements(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, _offset);
        }
      } else if (drawInfo.vertexCount > 0) {
        gl.drawArrays(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount);
      }
    }
  }
  function WebGL2CmdFuncExecuteCmds(device, cmdPackage) {
    cmdIds.fill(0);
    for (var i = 0; i < cmdPackage.cmds.length; ++i) {
      var cmd = cmdPackage.cmds.array[i];
      var cmdId = cmdIds[cmd]++;
      switch (cmd) {
        case WebGL2Cmd.BEGIN_RENDER_PASS:
          {
            var cmd0 = cmdPackage.beginRenderPassCmds.array[cmdId];
            WebGL2CmdFuncBeginRenderPass(device, cmd0.gpuRenderPass, cmd0.gpuFramebuffer, cmd0.renderArea, cmd0.clearColors, cmd0.clearDepth, cmd0.clearStencil);
            break;
          }
        /*
            case WebGL2Cmd.END_RENDER_PASS: {
                // WebGL 2.0 doesn't support store operation of attachments.
                // StoreOp.Store is the default GL behavior.
                break;
            }
            */
        case WebGL2Cmd.BIND_STATES:
          {
            var cmd2 = cmdPackage.bindStatesCmds.array[cmdId];
            WebGL2CmdFuncBindStates(device, cmd2.gpuPipelineState, cmd2.gpuInputAssembler, cmd2.gpuDescriptorSets, cmd2.dynamicOffsets, cmd2.dynamicStates);
            break;
          }
        case WebGL2Cmd.DRAW:
          {
            var cmd3 = cmdPackage.drawCmds.array[cmdId];
            WebGL2CmdFuncDraw(device, cmd3.drawInfo);
            break;
          }
        case WebGL2Cmd.UPDATE_BUFFER:
          {
            var cmd4 = cmdPackage.updateBufferCmds.array[cmdId];
            WebGL2CmdFuncUpdateBuffer(device, cmd4.gpuBuffer, cmd4.buffer, cmd4.offset, cmd4.size);
            break;
          }
        case WebGL2Cmd.COPY_BUFFER_TO_TEXTURE:
          {
            var cmd5 = cmdPackage.copyBufferToTextureCmds.array[cmdId];
            WebGL2CmdFuncCopyBuffersToTexture(device, cmd5.buffers, cmd5.gpuTexture, cmd5.regions);
            break;
          }
        case WebGL2Cmd.BLIT_TEXTURE:
          {
            var cmd6 = cmdPackage.blitTextureCmds.array[cmdId];
            WebGL2CmdFuncBlitTexture(device, cmd6.srcTexture, cmd6.dstTexture, cmd6.regions, cmd6.filter);
            break;
          }
        default:
      } // switch
    } // for
  }

  function toUseTexImage2D(texImages, regions) {
    if (texImages.length > 1 || regions.length > 1) return false;
    var isVideoElement = texImages[0] instanceof HTMLVideoElement;
    if (isVideoElement) {
      var videoElement = texImages[0];
      var isSameSize = regions[0].texOffset.x === 0 && regions[0].texOffset.y === 0 && regions[0].texExtent.width === videoElement.videoWidth && regions[0].texExtent.height === videoElement.videoHeight;
      return isSameSize;
    }
    return false;
  }
  function WebGL2CmdFuncCopyTexImagesToTexture(device, texImages, gpuTexture, regions) {
    var gl = device.gl;
    var glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
    if (glTexUnit.glTexture !== gpuTexture.glTexture) {
      gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
      glTexUnit.glTexture = gpuTexture.glTexture;
    }
    var n = 0;
    var f = 0;
    switch (gpuTexture.glTarget) {
      case gl.TEXTURE_2D:
        {
          if (gpuTexture.flags & TextureFlagBit.MUTABLE_STORAGE || toUseTexImage2D(texImages, regions)) {
            gl.texImage2D(gl.TEXTURE_2D, regions[0].texSubres.mipLevel, gpuTexture.glInternalFmt, regions[0].texExtent.width, regions[0].texExtent.height, 0, gpuTexture.glFormat, gpuTexture.glType, texImages[0]);
          } else {
            for (var k = 0; k < regions.length; k++) {
              var region = regions[k];
              gl.texSubImage2D(gl.TEXTURE_2D, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
            }
          }
          break;
        }
      case gl.TEXTURE_CUBE_MAP:
        {
          for (var _k7 = 0; _k7 < regions.length; _k7++) {
            var _region = regions[_k7];
            var fcount = _region.texSubres.baseArrayLayer + _region.texSubres.layerCount;
            for (f = _region.texSubres.baseArrayLayer; f < fcount; ++f) {
              gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _region.texSubres.mipLevel, _region.texOffset.x, _region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
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
  function pixelBufferPick(buffer, format, offset, stride, extent) {
    var blockHeight = formatAlignment(format).height;
    var bufferSize = FormatSize(format, extent.width, extent.height, extent.depth);
    var rowStrideSize = FormatSize(format, stride.width, 1, 1);
    var sliceStrideSize = FormatSize(format, stride.width, stride.height, 1);
    var destRowSize = FormatSize(format, extent.width, 1, 1);
    var ArrayBufferCtor = getTypedArrayConstructor(FormatInfos[format]);
    if (stagingBuffer.byteLength < bufferSize) {
      stagingBuffer = new Uint8Array(bufferSize);
    }
    var destOffset = 0;
    var bufferOffset = offset;
    for (var i = 0; i < extent.depth; i++) {
      bufferOffset = offset + sliceStrideSize * i;
      for (var j = 0; j < extent.height; j += blockHeight) {
        stagingBuffer.subarray(destOffset, destOffset + destRowSize).set(new Uint8Array(buffer.buffer, buffer.byteOffset + bufferOffset, destRowSize));
        destOffset += destRowSize;
        bufferOffset += rowStrideSize;
      }
    }
    var length = bufferSize / ArrayBufferCtor.BYTES_PER_ELEMENT;
    assertID(Number.isInteger(length), 9101);
    return new ArrayBufferCtor(stagingBuffer.buffer, 0, length);
  }
  function WebGL2CmdFuncCopyBuffersToTexture(device, buffers, gpuTexture, regions) {
    var gl = device.gl;
    var glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
    if (glTexUnit.glTexture !== gpuTexture.glTexture) {
      gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
      glTexUnit.glTexture = gpuTexture.glTexture;
    }
    var n = 0;
    var f = 0;
    var fmtInfo = FormatInfos[gpuTexture.format];
    var ArrayBufferCtor = getTypedArrayConstructor(fmtInfo);
    var isCompressed = fmtInfo.isCompressed;
    var blockSize = formatAlignment(gpuTexture.format);
    var extent = new Extent();
    var offset = new Offset();
    var stride = new Extent();
    switch (gpuTexture.glTarget) {
      case gl.TEXTURE_2D:
        {
          for (var k = 0; k < regions.length; k++) {
            var region = regions[k];
            var mipLevel = region.texSubres.mipLevel;
            offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
            offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
            extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
            extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
            stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
            stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
            var destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
            var destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
            var pixels = void 0;
            var buffer = buffers[n++];
            if (stride.width === extent.width && stride.height === extent.height) {
              var length = FormatSize(gpuTexture.format, destWidth, destHeight, 1) / ArrayBufferCtor.BYTES_PER_ELEMENT;
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
              // WEBGL_compressed_texture_etc1
              gl.compressedTexImage2D(gl.TEXTURE_2D, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, 0, pixels);
            }
          }
          break;
        }
      case gl.TEXTURE_2D_ARRAY:
        {
          for (var _k8 = 0; _k8 < regions.length; _k8++) {
            var _region2 = regions[_k8];
            var _mipLevel = _region2.texSubres.mipLevel;
            offset.x = _region2.texOffset.x === 0 ? 0 : alignTo(_region2.texOffset.x, blockSize.width);
            offset.y = _region2.texOffset.y === 0 ? 0 : alignTo(_region2.texOffset.y, blockSize.height);
            extent.width = _region2.texExtent.width < blockSize.width ? _region2.texExtent.width : alignTo(_region2.texExtent.width, blockSize.width);
            extent.height = _region2.texExtent.height < blockSize.height ? _region2.texExtent.width : alignTo(_region2.texExtent.height, blockSize.height);
            extent.depth = 1;
            stride.width = _region2.buffStride > 0 ? _region2.buffStride : extent.width;
            stride.height = _region2.buffTexHeight > 0 ? _region2.buffTexHeight : extent.height;
            var _destWidth = _region2.texExtent.width + offset.x === gpuTexture.width >> _mipLevel ? _region2.texExtent.width : extent.width;
            var _destHeight = _region2.texExtent.height + offset.y === gpuTexture.height >> _mipLevel ? _region2.texExtent.height : extent.height;
            var fcount = _region2.texSubres.baseArrayLayer + _region2.texSubres.layerCount;
            for (f = _region2.texSubres.baseArrayLayer; f < fcount; ++f) {
              offset.z = f;
              var _pixels = void 0;
              var _buffer = buffers[n++];
              if (stride.width === extent.width && stride.height === extent.height) {
                var _length = FormatSize(gpuTexture.format, _destWidth, _destHeight, 1) / ArrayBufferCtor.BYTES_PER_ELEMENT;
                assertID(Number.isInteger(_length), 9101);
                _pixels = new ArrayBufferCtor(_buffer.buffer, _buffer.byteOffset + _region2.buffOffset, _length);
              } else {
                _pixels = pixelBufferPick(_buffer, gpuTexture.format, _region2.buffOffset, stride, extent);
              }
              if (!isCompressed) {
                gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, _mipLevel, offset.x, offset.y, offset.z, _destWidth, _destHeight, extent.depth, gpuTexture.glFormat, gpuTexture.glType, _pixels);
              } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
                gl.compressedTexSubImage3D(gl.TEXTURE_2D_ARRAY, _mipLevel, offset.x, offset.y, offset.z, _destWidth, _destHeight, extent.depth, gpuTexture.glFormat, _pixels);
              } else {
                // WEBGL_compressed_texture_etc1
                gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, _mipLevel, gpuTexture.glInternalFmt, _destWidth, _destHeight, extent.depth, 0, _pixels);
              }
            }
          }
          break;
        }
      case gl.TEXTURE_3D:
        {
          for (var _k9 = 0; _k9 < regions.length; _k9++) {
            var _region3 = regions[_k9];
            var _mipLevel2 = _region3.texSubres.mipLevel;
            offset.x = _region3.texOffset.x === 0 ? 0 : alignTo(_region3.texOffset.x, blockSize.width);
            offset.y = _region3.texOffset.y === 0 ? 0 : alignTo(_region3.texOffset.y, blockSize.height);
            offset.z = _region3.texOffset.z;
            extent.width = _region3.texExtent.width < blockSize.width ? _region3.texExtent.width : alignTo(_region3.texExtent.width, blockSize.width);
            extent.height = _region3.texExtent.height < blockSize.height ? _region3.texExtent.width : alignTo(_region3.texExtent.height, blockSize.height);
            extent.depth = _region3.texExtent.depth;
            stride.width = _region3.buffStride > 0 ? _region3.buffStride : extent.width;
            stride.height = _region3.buffTexHeight > 0 ? _region3.buffTexHeight : extent.height;
            var _destWidth2 = _region3.texExtent.width + offset.x === gpuTexture.width >> _mipLevel2 ? _region3.texExtent.width : extent.width;
            var _destHeight2 = _region3.texExtent.height + offset.y === gpuTexture.height >> _mipLevel2 ? _region3.texExtent.height : extent.height;
            var _pixels2 = void 0;
            var _buffer2 = buffers[n++];
            if (stride.width === extent.width && stride.height === extent.height) {
              var _length2 = FormatSize(gpuTexture.format, _destWidth2, _destHeight2, extent.depth) / ArrayBufferCtor.BYTES_PER_ELEMENT;
              assertID(Number.isInteger(_length2), 9101);
              _pixels2 = new ArrayBufferCtor(_buffer2.buffer, _buffer2.byteOffset + _region3.buffOffset, _length2);
            } else {
              _pixels2 = pixelBufferPick(_buffer2, gpuTexture.format, _region3.buffOffset, stride, extent);
            }
            if (!isCompressed) {
              gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, _mipLevel2, offset.x, offset.y, offset.z, _destWidth2, _destHeight2, extent.depth, gpuTexture.glFormat, gpuTexture.glType, _pixels2);
            } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
              gl.compressedTexSubImage3D(gl.TEXTURE_2D_ARRAY, _mipLevel2, offset.x, offset.y, offset.z, _destWidth2, _destHeight2, extent.depth, gpuTexture.glFormat, _pixels2);
            } else {
              // WEBGL_compressed_texture_etc1
              gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, _mipLevel2, gpuTexture.glInternalFmt, _destWidth2, _destHeight2, extent.depth, 0, _pixels2);
            }
          }
          break;
        }
      case gl.TEXTURE_CUBE_MAP:
        {
          for (var _k10 = 0; _k10 < regions.length; _k10++) {
            var _region4 = regions[_k10];
            var _mipLevel3 = _region4.texSubres.mipLevel;
            offset.x = _region4.texOffset.x === 0 ? 0 : alignTo(_region4.texOffset.x, blockSize.width);
            offset.y = _region4.texOffset.y === 0 ? 0 : alignTo(_region4.texOffset.y, blockSize.height);
            extent.width = _region4.texExtent.width < blockSize.width ? _region4.texExtent.width : alignTo(_region4.texExtent.width, blockSize.width);
            extent.height = _region4.texExtent.height < blockSize.height ? _region4.texExtent.width : alignTo(_region4.texExtent.height, blockSize.height);
            stride.width = _region4.buffStride > 0 ? _region4.buffStride : extent.width;
            stride.height = _region4.buffTexHeight > 0 ? _region4.buffTexHeight : extent.height;
            var _destWidth3 = _region4.texExtent.width + offset.x === gpuTexture.width >> _mipLevel3 ? _region4.texExtent.width : extent.width;
            var _destHeight3 = _region4.texExtent.height + offset.y === gpuTexture.height >> _mipLevel3 ? _region4.texExtent.height : extent.height;
            var _fcount = _region4.texSubres.baseArrayLayer + _region4.texSubres.layerCount;
            for (f = _region4.texSubres.baseArrayLayer; f < _fcount; ++f) {
              var _pixels3 = void 0;
              var _buffer3 = buffers[n++];
              if (stride.width === extent.width && stride.height === extent.height) {
                var _length3 = FormatSize(gpuTexture.format, _destWidth3, _destHeight3, 1) / ArrayBufferCtor.BYTES_PER_ELEMENT;
                assertID(Number.isInteger(_length3), 9101);
                _pixels3 = new ArrayBufferCtor(_buffer3.buffer, _buffer3.byteOffset + _region4.buffOffset, _length3);
              } else {
                _pixels3 = pixelBufferPick(_buffer3, gpuTexture.format, _region4.buffOffset, stride, extent);
              }
              if (!isCompressed) {
                gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _mipLevel3, offset.x, offset.y, _destWidth3, _destHeight3, gpuTexture.glFormat, gpuTexture.glType, _pixels3);
              } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
                gl.compressedTexSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _mipLevel3, offset.x, offset.y, _destWidth3, _destHeight3, gpuTexture.glFormat, _pixels3);
              } else {
                // WEBGL_compressed_texture_etc1
                gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _mipLevel3, gpuTexture.glInternalFmt, _destWidth3, _destHeight3, 0, _pixels3);
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
    var gl = device.gl;
    var cache = device.stateCache;
    var framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    var x = 0;
    var y = 0;
    var w = 1;
    var h = 1;
    switch (gpuTexture.glTarget) {
      case gl.TEXTURE_2D:
        {
          for (var k = 0; k < regions.length; k++) {
            var region = regions[k];
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
  function WebGL2CmdFuncBlitFramebuffer(device, src, dst, srcRect, dstRect, filter) {
    var gl = device.gl;
    if (device.stateCache.glReadFramebuffer !== src.glFramebuffer) {
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, src.glFramebuffer);
      device.stateCache.glReadFramebuffer = src.glFramebuffer;
    }
    var rebindFBO = dst.glFramebuffer !== device.stateCache.glFramebuffer;
    if (rebindFBO) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, dst.glFramebuffer);
    }
    var mask = 0;
    if (src.gpuColorViews.length > 0) {
      mask |= gl.COLOR_BUFFER_BIT;
    }
    if (src.gpuDepthStencilView) {
      mask |= gl.DEPTH_BUFFER_BIT;
      if (FormatInfos[src.gpuDepthStencilView.gpuTexture.format].hasStencil) {
        mask |= gl.STENCIL_BUFFER_BIT;
      }
    }
    var glFilter = filter === Filter.LINEAR || filter === Filter.ANISOTROPIC ? gl.LINEAR : gl.NEAREST;
    gl.blitFramebuffer(srcRect.x, srcRect.y, srcRect.x + srcRect.width, srcRect.y + srcRect.height, dstRect.x, dstRect.y, dstRect.x + dstRect.width, dstRect.y + dstRect.height, mask, glFilter);
    if (rebindFBO) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, device.stateCache.glFramebuffer);
    }
  }
  function WebGL2CmdFuncBlitTexture(device, src, dst, regions, filter) {
    var gl = device.gl;
    var cache = device.stateCache;
    var blitManager = device.blitManager;
    if (!blitManager) {
      return;
    }

    // logic different from native, because framebuffer-map is not implemented in webgl2
    var glFilter = filter === Filter.LINEAR || filter === Filter.ANISOTROPIC ? gl.LINEAR : gl.NEAREST;
    var srcFramebuffer = blitManager.srcFramebuffer;
    var dstFramebuffer = blitManager.dstFramebuffer;
    var origReadFBO = cache.glReadFramebuffer;
    var origDrawFBO = cache.glFramebuffer;
    var srcMip = regions[0].srcSubres.mipLevel;
    var dstMip = regions[0].dstSubres.mipLevel;
    var blitInfo = function blitInfo(formatInfo) {
      var mask = 0;
      var attachment = gl.COLOR_ATTACHMENT0;
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
        mask: mask,
        attachment: attachment
      };
    };
    var regionIndices = regions.map(function (_, i) {
      return i;
    });
    regionIndices.sort(function (a, b) {
      return regions[a].srcSubres.mipLevel - regions[b].srcSubres.mipLevel;
    });
    var _blitInfo = blitInfo(FormatInfos[src.format]),
      srcMask = _blitInfo.mask,
      srcAttachment = _blitInfo.attachment;
    var _blitInfo2 = blitInfo(FormatInfos[dst.format]),
      dstMask = _blitInfo2.mask,
      dstAttachment = _blitInfo2.attachment;
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
    for (var i = 0; i < regionIndices.length; i++) {
      var region = regions[regionIndices[i]];
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

    // restore fbo state
    if (cache.glReadFramebuffer !== origReadFBO) {
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, origReadFBO);
      cache.glReadFramebuffer = origReadFBO;
    }
    if (cache.glFramebuffer !== origDrawFBO) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, origDrawFBO);
      cache.glFramebuffer = origDrawFBO;
    }
  }
  _export({
    GFXFormatToWebGLType: GFXFormatToWebGLType,
    GFXFormatToWebGLInternalFormat: GFXFormatToWebGLInternalFormat,
    GFXFormatToWebGLFormat: GFXFormatToWebGLFormat,
    WebGL2CmdFuncCreateBuffer: WebGL2CmdFuncCreateBuffer,
    WebGL2CmdFuncDestroyBuffer: WebGL2CmdFuncDestroyBuffer,
    WebGL2CmdFuncResizeBuffer: WebGL2CmdFuncResizeBuffer,
    WebGL2CmdFuncUpdateBuffer: WebGL2CmdFuncUpdateBuffer,
    WebGL2CmdFuncCreateTexture: WebGL2CmdFuncCreateTexture,
    WebGL2CmdFuncDestroyTexture: WebGL2CmdFuncDestroyTexture,
    WebGL2CmdFuncResizeTexture: WebGL2CmdFuncResizeTexture,
    WebGL2CmdFuncPrepareSamplerInfo: WebGL2CmdFuncPrepareSamplerInfo,
    WebGL2CmdFuncDestroySampler: WebGL2CmdFuncDestroySampler,
    WebGL2CmdFuncCreateFramebuffer: WebGL2CmdFuncCreateFramebuffer,
    WebGL2CmdFuncDestroyFramebuffer: WebGL2CmdFuncDestroyFramebuffer,
    WebGL2CmdFuncCreateShader: WebGL2CmdFuncCreateShader,
    WebGL2CmdFuncDestroyShader: WebGL2CmdFuncDestroyShader,
    WebGL2CmdFuncCreateInputAssember: WebGL2CmdFuncCreateInputAssember,
    WebGL2CmdFuncDestroyInputAssembler: WebGL2CmdFuncDestroyInputAssembler,
    WebGL2CmdFuncBeginRenderPass: WebGL2CmdFuncBeginRenderPass,
    WebGL2CmdFuncBindStates: WebGL2CmdFuncBindStates,
    WebGL2CmdFuncDraw: WebGL2CmdFuncDraw,
    WebGL2CmdFuncExecuteCmds: WebGL2CmdFuncExecuteCmds,
    WebGL2CmdFuncCopyTexImagesToTexture: WebGL2CmdFuncCopyTexImagesToTexture,
    WebGL2CmdFuncCopyBuffersToTexture: WebGL2CmdFuncCopyBuffersToTexture,
    WebGL2CmdFuncCopyTextureToBuffers: WebGL2CmdFuncCopyTextureToBuffers,
    WebGL2CmdFuncBlitFramebuffer: WebGL2CmdFuncBlitFramebuffer,
    WebGL2CmdFuncBlitTexture: WebGL2CmdFuncBlitTexture,
    WebGL2Cmd: void 0
  });
  return {
    setters: [function (_baseDefineJs) {
      BufferUsageBit = _baseDefineJs.BufferUsageBit;
      ColorMask = _baseDefineJs.ColorMask;
      CullMode = _baseDefineJs.CullMode;
      DynamicStateFlagBit = _baseDefineJs.DynamicStateFlagBit;
      Filter = _baseDefineJs.Filter;
      Format = _baseDefineJs.Format;
      TextureType = _baseDefineJs.TextureType;
      Type = _baseDefineJs.Type;
      FormatInfos = _baseDefineJs.FormatInfos;
      FormatSize = _baseDefineJs.FormatSize;
      LoadOp = _baseDefineJs.LoadOp;
      MemoryUsageBit = _baseDefineJs.MemoryUsageBit;
      SampleCount = _baseDefineJs.SampleCount;
      ShaderStageFlagBit = _baseDefineJs.ShaderStageFlagBit;
      TextureFlagBit = _baseDefineJs.TextureFlagBit;
      Rect = _baseDefineJs.Rect;
      DrawInfo = _baseDefineJs.DrawInfo;
      DynamicStates = _baseDefineJs.DynamicStates;
      UniformSamplerTexture = _baseDefineJs.UniformSamplerTexture;
      alignTo = _baseDefineJs.alignTo;
      Extent = _baseDefineJs.Extent;
      formatAlignment = _baseDefineJs.formatAlignment;
      getTypedArrayConstructor = _baseDefineJs.getTypedArrayConstructor;
      Offset = _baseDefineJs.Offset;
    }, function (_webgl2DefineJs) {
      WebGL2EXT = _webgl2DefineJs.WebGL2EXT;
    }, function (_coreIndexJs) {
      CachedArray = _coreIndexJs.CachedArray;
      error = _coreIndexJs.error;
      errorID = _coreIndexJs.errorID;
      debug = _coreIndexJs.debug;
      cclegacy = _coreIndexJs.cclegacy;
      assertID = _coreIndexJs.assertID;
    }],
    execute: function () {
      WebGLWraps = [0x2901,
      // WebGLRenderingContext.REPEAT
      0x8370,
      // WebGLRenderingContext.MIRRORED_REPEAT
      0x812F,
      // WebGLRenderingContext.CLAMP_TO_EDGE
      0x812F // WebGLRenderingContext.CLAMP_TO_EDGE
      ];
      _f32v4 = new Float32Array(4);
      WebGLCmpFuncs = [0x0200,
      // WebGLRenderingContext.NEVER,
      0x0201,
      // WebGLRenderingContext.LESS,
      0x0202,
      // WebGLRenderingContext.EQUAL,
      0x0203,
      // WebGLRenderingContext.LEQUAL,
      0x0204,
      // WebGLRenderingContext.GREATER,
      0x0205,
      // WebGLRenderingContext.NOTEQUAL,
      0x0206,
      // WebGLRenderingContext.GEQUAL,
      0x0207 // WebGLRenderingContext.ALWAYS,
      ];
      WebGLStencilOps = [0x0000,
      // WebGLRenderingContext.ZERO,
      0x1E00,
      // WebGLRenderingContext.KEEP,
      0x1E01,
      // WebGLRenderingContext.REPLACE,
      0x1E02,
      // WebGLRenderingContext.INCR,
      0x1E03,
      // WebGLRenderingContext.DECR,
      0x150A,
      // WebGLRenderingContext.INVERT,
      0x8507,
      // WebGLRenderingContext.INCR_WRAP,
      0x8508 // WebGLRenderingContext.DECR_WRAP,
      ];
      WebGLBlendOps = [0x8006,
      // WebGLRenderingContext.FUNC_ADD,
      0x800A,
      // WebGLRenderingContext.FUNC_SUBTRACT,
      0x800B,
      // WebGLRenderingContext.FUNC_REVERSE_SUBTRACT,
      0x8007,
      // WebGL2RenderingContext.MIN,
      0x8008 // WebGL2RenderingContext.MAX,
      ];
      WebGLBlendFactors = [0x0000,
      // WebGLRenderingContext.ZERO,
      0x0001,
      // WebGLRenderingContext.ONE,
      0x0302,
      // WebGLRenderingContext.SRC_ALPHA,
      0x0304,
      // WebGLRenderingContext.DST_ALPHA,
      0x0303,
      // WebGLRenderingContext.ONE_MINUS_SRC_ALPHA,
      0x0305,
      // WebGLRenderingContext.ONE_MINUS_DST_ALPHA,
      0x0300,
      // WebGLRenderingContext.SRC_COLOR,
      0x0306,
      // WebGLRenderingContext.DST_COLOR,
      0x0301,
      // WebGLRenderingContext.ONE_MINUS_SRC_COLOR,
      0x0307,
      // WebGLRenderingContext.ONE_MINUS_DST_COLOR,
      0x0308,
      // WebGLRenderingContext.SRC_ALPHA_SATURATE,
      0x8001,
      // WebGLRenderingContext.CONSTANT_COLOR,
      0x8002,
      // WebGLRenderingContext.ONE_MINUS_CONSTANT_COLOR,
      0x8003,
      // WebGLRenderingContext.CONSTANT_ALPHA,
      0x8004 // WebGLRenderingContext.ONE_MINUS_CONSTANT_ALPHA,
      ];
      (function (WebGL2Cmd) {
        WebGL2Cmd[WebGL2Cmd["BEGIN_RENDER_PASS"] = 0] = "BEGIN_RENDER_PASS";
        WebGL2Cmd[WebGL2Cmd["END_RENDER_PASS"] = 1] = "END_RENDER_PASS";
        WebGL2Cmd[WebGL2Cmd["BIND_STATES"] = 2] = "BIND_STATES";
        WebGL2Cmd[WebGL2Cmd["DRAW"] = 3] = "DRAW";
        WebGL2Cmd[WebGL2Cmd["UPDATE_BUFFER"] = 4] = "UPDATE_BUFFER";
        WebGL2Cmd[WebGL2Cmd["COPY_BUFFER_TO_TEXTURE"] = 5] = "COPY_BUFFER_TO_TEXTURE";
        WebGL2Cmd[WebGL2Cmd["BLIT_TEXTURE"] = 6] = "BLIT_TEXTURE";
        WebGL2Cmd[WebGL2Cmd["COUNT"] = 7] = "COUNT";
      })(WebGL2Cmd || _export("WebGL2Cmd", WebGL2Cmd = {}));
      _export("WebGL2CmdObject", WebGL2CmdObject = function WebGL2CmdObject(type) {
        this.cmdType = void 0;
        this.refCount = 0;
        this.cmdType = type;
      });
      _export("WebGL2CmdBeginRenderPass", WebGL2CmdBeginRenderPass = /*#__PURE__*/function (_WebGL2CmdObject) {
        _inheritsLoose(WebGL2CmdBeginRenderPass, _WebGL2CmdObject);
        function WebGL2CmdBeginRenderPass() {
          var _this;
          _this = _WebGL2CmdObject.call(this, WebGL2Cmd.BEGIN_RENDER_PASS) || this;
          _this.gpuRenderPass = null;
          _this.gpuFramebuffer = null;
          _this.renderArea = new Rect();
          _this.clearColors = [];
          _this.clearDepth = 1.0;
          _this.clearStencil = 0;
          return _this;
        }
        var _proto = WebGL2CmdBeginRenderPass.prototype;
        _proto.clear = function clear() {
          this.gpuFramebuffer = null;
          this.clearColors.length = 0;
        };
        return WebGL2CmdBeginRenderPass;
      }(WebGL2CmdObject));
      _export("WebGL2CmdBindStates", WebGL2CmdBindStates = /*#__PURE__*/function (_WebGL2CmdObject2) {
        _inheritsLoose(WebGL2CmdBindStates, _WebGL2CmdObject2);
        function WebGL2CmdBindStates() {
          var _this2;
          _this2 = _WebGL2CmdObject2.call(this, WebGL2Cmd.BIND_STATES) || this;
          _this2.gpuPipelineState = null;
          _this2.gpuInputAssembler = null;
          _this2.gpuDescriptorSets = [];
          _this2.dynamicOffsets = [];
          _this2.dynamicStates = new DynamicStates();
          return _this2;
        }
        var _proto2 = WebGL2CmdBindStates.prototype;
        _proto2.clear = function clear() {
          this.gpuPipelineState = null;
          this.gpuInputAssembler = null;
          this.gpuDescriptorSets.length = 0;
          this.dynamicOffsets.length = 0;
        };
        return WebGL2CmdBindStates;
      }(WebGL2CmdObject));
      _export("WebGL2CmdDraw", WebGL2CmdDraw = /*#__PURE__*/function (_WebGL2CmdObject3) {
        _inheritsLoose(WebGL2CmdDraw, _WebGL2CmdObject3);
        function WebGL2CmdDraw() {
          var _this3;
          _this3 = _WebGL2CmdObject3.call(this, WebGL2Cmd.DRAW) || this;
          _this3.drawInfo = new DrawInfo();
          return _this3;
        }
        var _proto3 = WebGL2CmdDraw.prototype;
        _proto3.clear = function clear() {
          // noop
        };
        return WebGL2CmdDraw;
      }(WebGL2CmdObject));
      _export("WebGL2CmdUpdateBuffer", WebGL2CmdUpdateBuffer = /*#__PURE__*/function (_WebGL2CmdObject4) {
        _inheritsLoose(WebGL2CmdUpdateBuffer, _WebGL2CmdObject4);
        function WebGL2CmdUpdateBuffer() {
          var _this4;
          _this4 = _WebGL2CmdObject4.call(this, WebGL2Cmd.UPDATE_BUFFER) || this;
          _this4.gpuBuffer = null;
          _this4.buffer = null;
          _this4.offset = 0;
          _this4.size = 0;
          return _this4;
        }
        var _proto4 = WebGL2CmdUpdateBuffer.prototype;
        _proto4.clear = function clear() {
          this.gpuBuffer = null;
          this.buffer = null;
        };
        return WebGL2CmdUpdateBuffer;
      }(WebGL2CmdObject));
      _export("WebGL2CmdCopyBufferToTexture", WebGL2CmdCopyBufferToTexture = /*#__PURE__*/function (_WebGL2CmdObject5) {
        _inheritsLoose(WebGL2CmdCopyBufferToTexture, _WebGL2CmdObject5);
        function WebGL2CmdCopyBufferToTexture() {
          var _this5;
          _this5 = _WebGL2CmdObject5.call(this, WebGL2Cmd.COPY_BUFFER_TO_TEXTURE) || this;
          _this5.gpuTexture = null;
          _this5.buffers = [];
          _this5.regions = [];
          return _this5;
        }
        var _proto5 = WebGL2CmdCopyBufferToTexture.prototype;
        _proto5.clear = function clear() {
          this.gpuTexture = null;
          this.buffers.length = 0;
          this.regions.length = 0;
        };
        return WebGL2CmdCopyBufferToTexture;
      }(WebGL2CmdObject));
      _export("WebGL2CmdBlitTexture", WebGL2CmdBlitTexture = /*#__PURE__*/function (_WebGL2CmdObject6) {
        _inheritsLoose(WebGL2CmdBlitTexture, _WebGL2CmdObject6);
        function WebGL2CmdBlitTexture() {
          var _this6;
          _this6 = _WebGL2CmdObject6.call(this, WebGL2Cmd.BLIT_TEXTURE) || this;
          _this6.srcTexture = null;
          _this6.dstTexture = null;
          _this6.regions = [];
          _this6.filter = Filter.LINEAR;
          return _this6;
        }
        var _proto6 = WebGL2CmdBlitTexture.prototype;
        _proto6.clear = function clear() {
          this.srcTexture = null;
          this.dstTexture = null;
          this.regions.length = 0;
        };
        return WebGL2CmdBlitTexture;
      }(WebGL2CmdObject));
      _export("WebGL2CmdPackage", WebGL2CmdPackage = /*#__PURE__*/function () {
        function WebGL2CmdPackage() {
          this.cmds = new CachedArray(1);
          this.beginRenderPassCmds = new CachedArray(1);
          this.bindStatesCmds = new CachedArray(1);
          this.drawCmds = new CachedArray(1);
          this.updateBufferCmds = new CachedArray(1);
          this.copyBufferToTextureCmds = new CachedArray(1);
          this.blitTextureCmds = new CachedArray(1);
        }
        var _proto7 = WebGL2CmdPackage.prototype;
        _proto7.clearCmds = function clearCmds(allocator) {
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
        };
        return WebGL2CmdPackage;
      }());
      gfxStateCache = {
        gpuPipelineState: null,
        gpuInputAssembler: null,
        glPrimitive: 0,
        invalidateAttachments: []
      };
      cmdIds = new Array(WebGL2Cmd.COUNT);
      stagingBuffer = new Uint8Array(1);
    }
  };
});