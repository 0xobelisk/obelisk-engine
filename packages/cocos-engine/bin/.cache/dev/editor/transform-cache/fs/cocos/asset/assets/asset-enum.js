System.register("q-bundled:///fs/cocos/asset/assets/asset-enum.js", ["../../gfx/index.js"], function (_export, _context) {
  "use strict";

  var Address, GFXFilter, Format, CUSTOM_PIXEL_FORMAT, PixelFormat, WrapMode, Filter;
  _export({
    PixelFormat: void 0,
    WrapMode: void 0,
    Filter: void 0
  });
  return {
    setters: [function (_gfxIndexJs) {
      Address = _gfxIndexJs.Address;
      GFXFilter = _gfxIndexJs.Filter;
      Format = _gfxIndexJs.Format;
    }],
    execute: function () {
      /*
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
      // define a specified number for the pixel format which gfx do not have a standard definition.
      CUSTOM_PIXEL_FORMAT = 1024;
      /**
       * @en
       * The texture pixel format, default value is RGBA8888,<br>
       * you should note that textures loaded by normal image files (png, jpg) can only support RGBA8888 format,<br>
       * other formats are supported by compressed file types or raw data.
       * @zh
       * 纹理像素格式，默认值为RGBA8888，<br>
       * 你应该注意到普通图像文件（png，jpg）加载的纹理只能支持RGBA8888格式，<br>
       * 压缩文件类型或原始数据支持其他格式。
       */
      (function (PixelFormat) {
        PixelFormat[PixelFormat["RGB565"] = Format.R5G6B5] = "RGB565";
        PixelFormat[PixelFormat["RGB5A1"] = Format.RGB5A1] = "RGB5A1";
        PixelFormat[PixelFormat["RGBA4444"] = Format.RGBA4] = "RGBA4444";
        PixelFormat[PixelFormat["RGB888"] = Format.RGB8] = "RGB888";
        PixelFormat[PixelFormat["RGB32F"] = Format.RGB32F] = "RGB32F";
        PixelFormat[PixelFormat["RGBA8888"] = Format.RGBA8] = "RGBA8888";
        PixelFormat[PixelFormat["RGBA32F"] = Format.RGBA32F] = "RGBA32F";
        PixelFormat[PixelFormat["A8"] = Format.A8] = "A8";
        PixelFormat[PixelFormat["I8"] = Format.L8] = "I8";
        PixelFormat[PixelFormat["AI8"] = Format.LA8] = "AI8";
        PixelFormat[PixelFormat["RGB_PVRTC_2BPPV1"] = Format.PVRTC_RGB2] = "RGB_PVRTC_2BPPV1";
        PixelFormat[PixelFormat["RGBA_PVRTC_2BPPV1"] = Format.PVRTC_RGBA2] = "RGBA_PVRTC_2BPPV1";
        PixelFormat[PixelFormat["RGB_A_PVRTC_2BPPV1"] = CUSTOM_PIXEL_FORMAT] = "RGB_A_PVRTC_2BPPV1";
        PixelFormat[PixelFormat["RGB_PVRTC_4BPPV1"] = Format.PVRTC_RGB4] = "RGB_PVRTC_4BPPV1";
        PixelFormat[PixelFormat["RGBA_PVRTC_4BPPV1"] = Format.PVRTC_RGBA4] = "RGBA_PVRTC_4BPPV1";
        PixelFormat[PixelFormat["RGB_A_PVRTC_4BPPV1"] = CUSTOM_PIXEL_FORMAT + 1] = "RGB_A_PVRTC_4BPPV1";
        PixelFormat[PixelFormat["RGB_ETC1"] = Format.ETC_RGB8] = "RGB_ETC1";
        PixelFormat[PixelFormat["RGBA_ETC1"] = CUSTOM_PIXEL_FORMAT + 2] = "RGBA_ETC1";
        PixelFormat[PixelFormat["RGB_ETC2"] = Format.ETC2_RGB8] = "RGB_ETC2";
        PixelFormat[PixelFormat["RGBA_ETC2"] = Format.ETC2_RGBA8] = "RGBA_ETC2";
        PixelFormat[PixelFormat["RGBA_ASTC_4x4"] = Format.ASTC_RGBA_4X4] = "RGBA_ASTC_4x4";
        PixelFormat[PixelFormat["RGBA_ASTC_5x4"] = Format.ASTC_RGBA_5X4] = "RGBA_ASTC_5x4";
        PixelFormat[PixelFormat["RGBA_ASTC_5x5"] = Format.ASTC_RGBA_5X5] = "RGBA_ASTC_5x5";
        PixelFormat[PixelFormat["RGBA_ASTC_6x5"] = Format.ASTC_RGBA_6X5] = "RGBA_ASTC_6x5";
        PixelFormat[PixelFormat["RGBA_ASTC_6x6"] = Format.ASTC_RGBA_6X6] = "RGBA_ASTC_6x6";
        PixelFormat[PixelFormat["RGBA_ASTC_8x5"] = Format.ASTC_RGBA_8X5] = "RGBA_ASTC_8x5";
        PixelFormat[PixelFormat["RGBA_ASTC_8x6"] = Format.ASTC_RGBA_8X6] = "RGBA_ASTC_8x6";
        PixelFormat[PixelFormat["RGBA_ASTC_8x8"] = Format.ASTC_RGBA_8X8] = "RGBA_ASTC_8x8";
        PixelFormat[PixelFormat["RGBA_ASTC_10x5"] = Format.ASTC_RGBA_10X5] = "RGBA_ASTC_10x5";
        PixelFormat[PixelFormat["RGBA_ASTC_10x6"] = Format.ASTC_RGBA_10X6] = "RGBA_ASTC_10x6";
        PixelFormat[PixelFormat["RGBA_ASTC_10x8"] = Format.ASTC_RGBA_10X8] = "RGBA_ASTC_10x8";
        PixelFormat[PixelFormat["RGBA_ASTC_10x10"] = Format.ASTC_RGBA_10X10] = "RGBA_ASTC_10x10";
        PixelFormat[PixelFormat["RGBA_ASTC_12x10"] = Format.ASTC_RGBA_12X10] = "RGBA_ASTC_12x10";
        PixelFormat[PixelFormat["RGBA_ASTC_12x12"] = Format.ASTC_RGBA_12X12] = "RGBA_ASTC_12x12";
      })(PixelFormat || _export("PixelFormat", PixelFormat = {}));
      (function (WrapMode) {
        WrapMode[WrapMode["REPEAT"] = Address.WRAP] = "REPEAT";
        WrapMode[WrapMode["CLAMP_TO_EDGE"] = Address.CLAMP] = "CLAMP_TO_EDGE";
        WrapMode[WrapMode["MIRRORED_REPEAT"] = Address.MIRROR] = "MIRRORED_REPEAT";
        WrapMode[WrapMode["CLAMP_TO_BORDER"] = Address.BORDER] = "CLAMP_TO_BORDER";
      })(WrapMode || _export("WrapMode", WrapMode = {}));
      (function (Filter) {
        Filter[Filter["NONE"] = GFXFilter.NONE] = "NONE";
        Filter[Filter["LINEAR"] = GFXFilter.LINEAR] = "LINEAR";
        Filter[Filter["NEAREST"] = GFXFilter.POINT] = "NEAREST";
      })(Filter || _export("Filter", Filter = {}));
    }
  };
});