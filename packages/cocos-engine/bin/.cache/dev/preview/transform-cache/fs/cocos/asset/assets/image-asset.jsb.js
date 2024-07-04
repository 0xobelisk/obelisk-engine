System.register("q-bundled:///fs/cocos/asset/assets/image-asset.jsb.js", ["../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "./asset-enum.js", "../../core/index.js", "../../native-binding/decorators.js", "./asset.js"], function (_export, _context) {
  "use strict";

  var ALIPAY, XIAOMI, JSB, TEST, BAIDU, EDITOR, Format, FormatFeatureBit, deviceManager, PixelFormat, sys, macro, warnID, cclegacy, patch_cc_ImageAsset, ImageAsset, jsbWindow, extnames, imageAssetProto, superDestroy;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  function isImageBitmap(imageSource) {
    return !!(sys.hasFeature(sys.Feature.IMAGE_BITMAP) && imageSource instanceof ImageBitmap);
  }
  function isNativeImage(imageSource) {
    if (ALIPAY || XIAOMI || BAIDU) {
      // We're unable to grab the constructors of Alipay native image or canvas object.
      return !('_data' in imageSource);
    }
    if (JSB && imageSource._compressed === true) {
      return false;
    }
    return imageSource instanceof jsbWindow.HTMLImageElement || imageSource instanceof jsbWindow.HTMLCanvasElement || isImageBitmap(imageSource);
  }

  // TODO: we mark imageAssetProto as type of any, because here we have many dynamic injected property @dumganhar
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      ALIPAY = _virtualInternal253AconstantsJs.ALIPAY;
      XIAOMI = _virtualInternal253AconstantsJs.XIAOMI;
      JSB = _virtualInternal253AconstantsJs.JSB;
      TEST = _virtualInternal253AconstantsJs.TEST;
      BAIDU = _virtualInternal253AconstantsJs.BAIDU;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_gfxIndexJs) {
      Format = _gfxIndexJs.Format;
      FormatFeatureBit = _gfxIndexJs.FormatFeatureBit;
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_assetEnumJs) {
      PixelFormat = _assetEnumJs.PixelFormat;
    }, function (_coreIndexJs) {
      sys = _coreIndexJs.sys;
      macro = _coreIndexJs.macro;
      warnID = _coreIndexJs.warnID;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_nativeBindingDecoratorsJs) {
      patch_cc_ImageAsset = _nativeBindingDecoratorsJs.patch_cc_ImageAsset;
    }, function (_assetJs) {}],
    execute: function () {
      _export("ImageAsset", ImageAsset = jsb.ImageAsset);
      jsbWindow = jsb.window;
      extnames = ['.png', '.jpg', '.jpeg', '.bmp', '.webp', '.pvr', '.pkm', '.astc'];
      imageAssetProto = ImageAsset.prototype;
      imageAssetProto._ctor = function (nativeAsset) {
        jsb.Asset.prototype._ctor.apply(this, arguments);
        this._width = 0;
        this._height = 0;
        this._nativeData = {
          _data: null,
          width: 0,
          height: 0,
          format: 0,
          _compressed: false,
          mipmapLevelDataSize: []
        };
        if (nativeAsset !== undefined) {
          this.reset(nativeAsset);
        }
      };
      Object.defineProperty(imageAssetProto, '_nativeAsset', {
        configurable: true,
        enumerable: true,
        get: function get() {
          return this._nativeData;
        },
        set: function set(value) {
          if (!(value instanceof jsbWindow.HTMLElement) && !isImageBitmap(value)) {
            value.format = value.format || this.format;
          }
          this.reset(value);
        }
      });
      Object.defineProperty(imageAssetProto, 'data', {
        configurable: true,
        enumerable: true,
        get: function get() {
          if (this._nativeData && isNativeImage(this._nativeData)) {
            return this._nativeData;
          }
          return this._nativeData && this._nativeData._data;
        }
      });
      imageAssetProto._setRawAsset = function (filename, inLibrary) {
        if (inLibrary === void 0) {
          inLibrary = true;
        }
        if (inLibrary !== false) {
          this._native = filename || '';
        } else {
          this._native = "/" + filename; // simply use '/' to tag location where is not in the library
        }
      };

      // TODO: Property 'format' does not exist on type 'HTMLCanvasElement'.
      // imageAssetProto.reset = function (data: ImageSource) {
      imageAssetProto.reset = function (data) {
        this._nativeData = data;
        if (!(data instanceof jsbWindow.HTMLElement)) {
          if (data.format !== undefined) {
            this.format = data.format;
          }
        }
        this._syncDataToNative();
      };
      superDestroy = jsb.Asset.prototype.destroy;
      imageAssetProto.destroy = function () {
        if (this.data && this.data instanceof jsbWindow.HTMLImageElement) {
          this.data.src = '';
          this._setRawAsset('');
          this.data.destroy();
        } else if (isImageBitmap(this.data)) {
          this.data.close && this.data.close();
        }
        return superDestroy.call(this);
      };
      Object.defineProperty(imageAssetProto, 'width', {
        configurable: true,
        enumerable: true,
        get: function get() {
          return this._nativeData.width || this._width;
        }
      });
      Object.defineProperty(imageAssetProto, 'height', {
        configurable: true,
        enumerable: true,
        get: function get() {
          return this._nativeData.height || this._height;
        }
      });
      imageAssetProto._syncDataToNative = function () {
        var data = this._nativeData;
        this._width = data.width;
        this._height = data.height;
        this.setWidth(this._width);
        this.setHeight(this._height);
        this.url = this.nativeUrl;
        if (data instanceof jsbWindow.HTMLCanvasElement) {
          this.setData(data._data.data);
        } else if (data instanceof jsbWindow.HTMLImageElement) {
          this.setData(data._data);
          if (data._mipmapLevelDataSize) {
            this.setMipmapLevelDataSize(data._mipmapLevelDataSize);
          }
        } else {
          if (!this._nativeData._data) {
            console.error("[ImageAsset] setData bad argument " + this._nativeData);
            return;
          }
          this.setData(this._nativeData._data);
          if (this._nativeData.mipmapLevelDataSize) {
            this.setMipmapLevelDataSize(this._nativeData.mipmapLevelDataSize);
          }
        }
      };
      imageAssetProto._serialize = function () {
        if (EDITOR || TEST) {
          var targetExtensions;
          if (this._native) {
            targetExtensions = [this._native];
          }
          if (!targetExtensions) {
            return '';
          }
          var extensionIndices = [];
          for (var _iterator = _createForOfIteratorHelperLoose(targetExtensions), _step; !(_step = _iterator()).done;) {
            var targetExtension = _step.value;
            var extensionFormat = targetExtension.split('@');
            var i = extnames.indexOf(extensionFormat[0]);
            var exportedExtensionID = i < 0 ? targetExtension : "" + i;
            if (extensionFormat[1]) {
              exportedExtensionID += "@" + extensionFormat[1];
            }
            extensionIndices.push(exportedExtensionID);
          }
          return {
            fmt: extensionIndices.join('_'),
            w: this.width,
            h: this.height
          };
        }
      };
      imageAssetProto._deserialize = function (data) {
        var fmtStr = '';
        if (typeof data === 'string') {
          fmtStr = data;
        } else {
          this._width = data.w;
          this._height = data.h;
          fmtStr = data.fmt;
        }
        var device = deviceManager.gfxDevice;
        var extensionIDs = fmtStr.split('_');
        var preferedExtensionIndex = Number.MAX_VALUE;
        // let format = this._format;
        var format = this.format;
        var ext = '';
        var SupportTextureFormats = macro.SUPPORT_TEXTURE_FORMATS;
        for (var _iterator2 = _createForOfIteratorHelperLoose(extensionIDs), _step2; !(_step2 = _iterator2()).done;) {
          var extensionID = _step2.value;
          var extFormat = extensionID.split('@');
          var i = parseInt(extFormat[0], undefined);
          // const tmpExt = ImageAsset.extnames[i] || extFormat[0];
          var tmpExt = extnames[i] || extFormat[0];
          var index = SupportTextureFormats.indexOf(tmpExt);
          if (index !== -1 && index < preferedExtensionIndex) {
            // const fmt = extFormat[1] ? parseInt(extFormat[1]) : this._format;
            var fmt = extFormat[1] ? parseInt(extFormat[1]) : this.format;

            // check whether or not support compressed texture
            if (tmpExt === '.astc' && (!device || !(device.getFormatFeatures(Format.ASTC_RGBA_4X4) & FormatFeatureBit.SAMPLED_TEXTURE))) {
              continue;
            } else if (tmpExt === '.pvr' && (!device || !(device.getFormatFeatures(Format.PVRTC_RGBA4) & FormatFeatureBit.SAMPLED_TEXTURE))) {
              continue;
            } else if ((fmt === PixelFormat.RGB_ETC1 || fmt === PixelFormat.RGBA_ETC1) && (!device || !(device.getFormatFeatures(Format.ETC_RGB8) & FormatFeatureBit.SAMPLED_TEXTURE))) {
              continue;
            } else if ((fmt === PixelFormat.RGB_ETC2 || fmt === PixelFormat.RGBA_ETC2) && (!device || !(device.getFormatFeatures(Format.ETC2_RGB8) & FormatFeatureBit.SAMPLED_TEXTURE))) {
              continue;
            } else if (tmpExt === '.webp' && !sys.hasFeature(sys.Feature.WEBP)) {
              continue;
            }
            preferedExtensionIndex = index;
            ext = tmpExt;
            format = fmt;
          }
        }
        if (ext) {
          this._setRawAsset(ext);
          this.format = format;
          // this._format = format;
        } else {
          warnID(3121);
        }
      };
      cclegacy.ImageAsset = jsb.ImageAsset;

      // handle meta data, it is generated automatically
      patch_cc_ImageAsset({
        ImageAsset: ImageAsset
      });
    }
  };
});