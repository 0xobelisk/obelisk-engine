System.register("q-bundled:///fs/cocos/asset/assets/simple-texture.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "../../core/index.js", "./asset-enum.js", "./texture-base.js", "../asset-manager/depend-util.js"], function (_export, _context) {
  "use strict";

  var ccclass, DEV, TextureFlagBit, TextureUsageBit, API, BufferTextureCopy, assertID, error, js, macro, cclegacy, Filter, TextureBase, dependUtil, _dec, _class, _regions, SimpleTexture;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function getMipLevel(width, height) {
    var size = Math.max(width, height);
    var level = 0;
    while (size) {
      size >>= 1;
      level++;
    }
    return level;
  }
  function isPOT(n) {
    return n && (n & n - 1) === 0;
  }
  function canGenerateMipmap(device, w, h) {
    var needCheckPOT = device.gfxAPI === API.WEBGL;
    if (needCheckPOT) {
      return isPOT(w) && isPOT(h);
    }
    return true;
  }

  /**
   * @en The simple texture base class.
   * It create the GFX Texture and can set mipmap levels.
   * @zh 简单贴图基类。
   * 简单贴图内部创建了 GFX 贴图和该贴图上的 GFX 贴图视图。
   * 简单贴图允许指定不同的 Mipmap 层级。
   */
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_virtualInternal253AconstantsJs) {
      DEV = _virtualInternal253AconstantsJs.DEV;
    }, function (_gfxIndexJs) {
      TextureFlagBit = _gfxIndexJs.TextureFlagBit;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      API = _gfxIndexJs.API;
      BufferTextureCopy = _gfxIndexJs.BufferTextureCopy;
    }, function (_coreIndexJs) {
      assertID = _coreIndexJs.assertID;
      error = _coreIndexJs.error;
      js = _coreIndexJs.js;
      macro = _coreIndexJs.macro;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_assetEnumJs) {
      Filter = _assetEnumJs.Filter;
    }, function (_textureBaseJs) {
      TextureBase = _textureBaseJs.TextureBase;
    }, function (_assetManagerDependUtilJs) {
      dependUtil = _assetManagerDependUtilJs.default;
    }],
    execute: function () {
      _regions = [new BufferTextureCopy()];
      _export("SimpleTexture", SimpleTexture = (_dec = ccclass('cc.SimpleTexture'), _dec(_class = /*#__PURE__*/function (_TextureBase) {
        _inheritsLoose(SimpleTexture, _TextureBase);
        function SimpleTexture() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _TextureBase.call.apply(_TextureBase, [this].concat(args)) || this;
          /**
           * @engineInternal
           */
          _this._gfxTexture = null;
          /**
           * @engineInternal
           */
          _this._gfxTextureView = null;
          _this._mipmapLevel = 1;
          // Cache these data to reduce JSB invoking.
          _this._textureWidth = 0;
          _this._textureHeight = 0;
          /**
           * @engineInternal
           */
          _this._baseLevel = 0;
          /**
           * @engineInternal
           */
          _this._maxLevel = 1000;
          return _this;
        }
        var _proto = SimpleTexture.prototype;
        /**
         * @en The GFX Texture resource.
         * @zh 获取此贴图底层的 GFX 贴图对象。
         * @return @en The low level gfx texture. @zh 底层的 GFX 贴图。
         */
        _proto.getGFXTexture = function getGFXTexture() {
          return this._gfxTextureView;
        };
        _proto.destroy = function destroy() {
          this._tryDestroyTextureView();
          this._tryDestroyTexture();
          return _TextureBase.prototype.destroy.call(this);
        }

        /**
         * @en Update the level 0 mipmap image.
         * @zh 更新 0 级 Mipmap。
         */;
        _proto.updateImage = function updateImage() {
          this.updateMipmaps(0);
        }

        /**
         * @en Update the given level mipmap image.
         * @zh 更新指定层级范围内的 Mipmap。当 Mipmap 数据发生了改变时应调用此方法提交更改。
         * 若指定的层级范围超出了实际已有的层级范围，只有覆盖的那些层级范围会被更新。
         * @param firstLevel @en First level to be updated. @zh 更新指定层的 mipmap。
         * @param count @en Mipmap level count to be updated。 @zh 指定要更新层的数量。
         */;
        _proto.updateMipmaps = function updateMipmaps(firstLevel, count) {
          if (firstLevel === void 0) {
            firstLevel = 0;
          }
        }

        /**
         * @en Upload data to the given mipmap level.
         * The size of the image will affect how the mipmap is updated.
         * - When the image is an ArrayBuffer, the size of the image must match the mipmap size.
         * - If the image size matches the mipmap size, the mipmap data will be updated entirely.
         * - If the image size is smaller than the mipmap size, the mipmap will be updated from top left corner.
         * - If the image size is larger, an error will be raised
         * @zh 上传图像数据到指定层级的 Mipmap 中。
         * 图像的尺寸影响 Mipmap 的更新范围：
         * - 当图像是 `ArrayBuffer` 时，图像的尺寸必须和 Mipmap 的尺寸一致；否则，
         * - 若图像的尺寸与 Mipmap 的尺寸相同，上传后整个 Mipmap 的数据将与图像数据一致；
         * - 若图像的尺寸小于指定层级 Mipmap 的尺寸（不管是长或宽），则从贴图左上角开始，图像尺寸范围内的 Mipmap 会被更新；
         * - 若图像的尺寸超出了指定层级 Mipmap 的尺寸（不管是长或宽），都将引起错误。
         * @param source @en The source image or image data. @zh 源图像或图像数据。
         * @param level @en Mipmap level to upload the image to. @zh 要上传的 mipmap 层级。
         * @param arrayIndex @en The array index. @zh 要上传的数组索引。
         */;
        _proto.uploadData = function uploadData(source, level, arrayIndex) {
          if (level === void 0) {
            level = 0;
          }
          if (arrayIndex === void 0) {
            arrayIndex = 0;
          }
          if (!this._gfxTexture || this._mipmapLevel <= level) {
            return;
          }
          var gfxDevice = this._getGFXDevice();
          if (!gfxDevice) {
            return;
          }
          var region = _regions[0];
          region.texExtent.width = this._textureWidth >> level;
          region.texExtent.height = this._textureHeight >> level;
          region.texSubres.mipLevel = level;
          region.texSubres.baseArrayLayer = arrayIndex;
          if (DEV) {
            if (source instanceof HTMLElement) {
              if (source.height > region.texExtent.height || source.width > region.texExtent.width) {
                error("Image source(" + this.name + ") bounds override.");
              }
            }
          }
          if (ArrayBuffer.isView(source)) {
            gfxDevice.copyBuffersToTexture([source], this._gfxTexture, _regions);
          } else {
            gfxDevice.copyTexImagesToTexture([source], this._gfxTexture, _regions);
          }
        }

        /**
         * @engineInternal
         */;
        _proto._assignImage = function _assignImage(image, level, arrayIndex) {
          var data = image.data;
          if (!data) {
            return;
          }
          this.uploadData(data, level, arrayIndex);
          this._checkTextureLoaded();
          if (macro.CLEANUP_IMAGE_CACHE) {
            var deps = dependUtil.getDeps(this._uuid);
            var index = deps.indexOf(image._uuid);
            if (index !== -1) {
              js.array.fastRemoveAt(deps, index);
              image.decRef();
            }
          }
        }

        /**
         * @engineInternal
         */;
        _proto._checkTextureLoaded = function _checkTextureLoaded() {
          this._textureReady();
        }

        /**
         * @engineInternal
         */;
        _proto._textureReady = function _textureReady() {
          this.loaded = true;
          this.emit('load');
        }

        /**
         * @en
         * Set mipmap level of this texture.
         * The value is passes as presumed info to `this._getGfxTextureCreateInfo()`.
         * @zh
         * 设置此贴图的 mipmap 层级
         * @param value The mipmap level.
         * @engineInternal
         *
         */;
        _proto._setMipmapLevel = function _setMipmapLevel(value) {
          this._mipmapLevel = value < 1 ? 1 : value;
        }

        /**
         * @engineInternal
         */;
        _proto._setMipRange = function _setMipRange(baseLevel, maxLevel) {
          this._baseLevel = baseLevel < 1 ? 0 : baseLevel;
          this._maxLevel = maxLevel < 1 ? 0 : maxLevel;
        }

        /**
         * @en Set mipmap level range for this texture.
         * @zh 设置当前贴图的 mipmap 范围。
         * @param baseLevel @en The base mipmap level. @zh 最低 mipmap 等级。
         * @param maxLevel @en The maximum mipmap level. @zh 最高 mipmap 等级。
         */;
        _proto.setMipRange = function setMipRange(baseLevel, maxLevel) {
          assertID(baseLevel <= maxLevel, 3124);
          this._setMipRange(baseLevel, maxLevel);
          var device = this._getGFXDevice();
          if (!device) {
            return;
          }
          // create a new texture view before the destruction of the previous one to bypass the bug that
          // vulkan destroys textureview in use. This is a temporary solution, should be fixed later.
          var textureView = this._createTextureView(device);
          this._tryDestroyTextureView();
          this._gfxTextureView = textureView;
        }

        /**
         * @en This method is override by derived classes to provide GFX texture info.
         * @zh 这个方法被派生类重写以提供 GFX 纹理信息。
         * @param presumed The presumed GFX texture info.
         * @engineInternal
         */;
        _proto._getGfxTextureCreateInfo = function _getGfxTextureCreateInfo(presumed) {
          return null;
        }

        /**
         * @en This method is overrided by derived classes to provide GFX TextureViewInfo.
         * @zh 这个方法被派生类重写以提供 GFX 纹理视图信息。
         * @param presumed The presumed GFX TextureViewInfo.
         * @engineInternal
         */;
        _proto._getGfxTextureViewCreateInfo = function _getGfxTextureViewCreateInfo(presumed) {
          return null;
        }

        /**
         * @engineInternal
         */;
        _proto._tryReset = function _tryReset() {
          this._tryDestroyTextureView();
          this._tryDestroyTexture();
          if (this._mipmapLevel === 0) {
            return;
          }
          var device = this._getGFXDevice();
          if (!device) {
            return;
          }
          this._createTexture(device);
          this._gfxTextureView = this._createTextureView(device);
        }

        /**
         * @en Whether mipmaps are baked convolutional maps.
         * @zh mipmaps 是否为烘焙出来的卷积图。
         */;
        _proto.isUsingOfflineMipmaps = function isUsingOfflineMipmaps() {
          return false;
        }

        /**
         * @engineInternal
         */;
        _proto._createTexture = function _createTexture(device) {
          if (this._width === 0 || this._height === 0) {
            return;
          }
          var flags = TextureFlagBit.NONE;
          if (this._mipFilter !== Filter.NONE && canGenerateMipmap(device, this._width, this._height)) {
            this._mipmapLevel = getMipLevel(this._width, this._height);
            if (!this.isUsingOfflineMipmaps() && !this.isCompressed) {
              flags = TextureFlagBit.GEN_MIPMAP;
            }
          }
          var textureCreateInfo = this._getGfxTextureCreateInfo({
            usage: TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST | TextureUsageBit.COLOR_ATTACHMENT,
            format: this._getGFXFormat(),
            levelCount: this._mipmapLevel,
            flags: flags
          });
          if (!textureCreateInfo) {
            return;
          }
          var texture = device.createTexture(textureCreateInfo);
          this._textureWidth = textureCreateInfo.width;
          this._textureHeight = textureCreateInfo.height;
          this._gfxTexture = texture;
        }

        /**
         * @engineInternal
         */;
        _proto._createTextureView = function _createTextureView(device) {
          if (!this._gfxTexture) {
            return null;
          }
          var maxLevel = this._maxLevel < this._mipmapLevel ? this._maxLevel : this._mipmapLevel - 1;
          var textureViewCreateInfo = this._getGfxTextureViewCreateInfo({
            texture: this._gfxTexture,
            format: this._getGFXFormat(),
            baseLevel: this._baseLevel,
            levelCount: maxLevel - this._baseLevel + 1
          });
          if (!textureViewCreateInfo) {
            return null;
          }
          return device.createTexture(textureViewCreateInfo);
        }

        /**
         * @engineInternal
         */;
        _proto._tryDestroyTexture = function _tryDestroyTexture() {
          if (this._gfxTexture) {
            this._gfxTexture.destroy();
            this._gfxTexture = null;
          }
        }

        /**
         * @engineInternal
         */;
        _proto._tryDestroyTextureView = function _tryDestroyTextureView() {
          if (this._gfxTextureView) {
            this._gfxTextureView.destroy();
            this._gfxTextureView = null;
          }
        };
        _createClass(SimpleTexture, [{
          key: "mipmapLevel",
          get:
          /**
           * @en The mipmap level of the texture.
           * @zh 贴图中的 Mipmap 层级数量。
           */
          function get() {
            return this._mipmapLevel;
          }
        }]);
        return SimpleTexture;
      }(TextureBase)) || _class));
      cclegacy.SimpleTexture = SimpleTexture;
    }
  };
});