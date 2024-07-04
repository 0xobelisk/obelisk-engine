System.register("q-bundled:///fs/cocos/asset/assets/render-texture.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../gfx/index.js", "./texture-base.js"], function (_export, _context) {
  "use strict";

  var ccclass, EDITOR, TEST, clamp, cclegacy, errorID, ColorAttachment, DepthStencilAttachment, GeneralBarrierInfo, AccessFlagBit, RenderPassInfo, Format, deviceManager, BufferTextureCopy, TextureFlagBit, TextureBase, _dec, _class, _colorAttachment, _depthStencilAttachment, passInfo, _windowInfo, RenderTexture;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreIndexJs) {
      clamp = _coreIndexJs.clamp;
      cclegacy = _coreIndexJs.cclegacy;
      errorID = _coreIndexJs.errorID;
    }, function (_gfxIndexJs) {
      ColorAttachment = _gfxIndexJs.ColorAttachment;
      DepthStencilAttachment = _gfxIndexJs.DepthStencilAttachment;
      GeneralBarrierInfo = _gfxIndexJs.GeneralBarrierInfo;
      AccessFlagBit = _gfxIndexJs.AccessFlagBit;
      RenderPassInfo = _gfxIndexJs.RenderPassInfo;
      Format = _gfxIndexJs.Format;
      deviceManager = _gfxIndexJs.deviceManager;
      BufferTextureCopy = _gfxIndexJs.BufferTextureCopy;
      TextureFlagBit = _gfxIndexJs.TextureFlagBit;
    }, function (_textureBaseJs) {
      TextureBase = _textureBaseJs.TextureBase;
    }],
    execute: function () {
      _colorAttachment = new ColorAttachment();
      _colorAttachment.format = Format.RGBA8;
      _depthStencilAttachment = new DepthStencilAttachment();
      _depthStencilAttachment.format = Format.DEPTH_STENCIL;
      passInfo = new RenderPassInfo([_colorAttachment], _depthStencilAttachment);
      _windowInfo = {
        width: 1,
        height: 1,
        renderPassInfo: passInfo
      };
      /**
       * @en Render texture is a render target for [[Camera]] or [[Canvas]] component,
       * the render pipeline will use its `RenderWindow` as the target of the rendering process.
       * @zh 渲染贴图是 [[Camera]] 或 [[Canvas]] 组件的渲染目标对象，渲染管线会使用它的 `RenderWindow` 作为渲染的目标窗口。
       */
      _export("RenderTexture", RenderTexture = (_dec = ccclass('cc.RenderTexture'), _dec(_class = /*#__PURE__*/function (_TextureBase) {
        _inheritsLoose(RenderTexture, _TextureBase);
        function RenderTexture() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _TextureBase.call.apply(_TextureBase, [this].concat(args)) || this;
          _this._window = null;
          return _this;
        }
        var _proto = RenderTexture.prototype;
        /**
         * @en Initialize the render texture. Using IRenderTextureCreateInfo.
         * @zh 初始化渲染贴图。设置渲染贴图的名称、尺寸、渲染通道信息。
         * @param info @en The create info of render texture. @zh 渲染贴图的创建信息。
         */
        _proto.initialize = function initialize(info) {
          this._name = info.name || '';
          this._width = info.width;
          this._height = info.height;
          this._initWindow(info);
        }

        /**
         * @en Reset the render texture. User may change the name, size or render pass info of the render texture.
         * @zh 重新初始化渲染贴图。用户可以更改渲染贴图的名称、尺寸、渲染通道信息。
         * @param info @en The create info of render texture. @zh 渲染贴图的创建信息。
         */;
        _proto.reset = function reset(info) {
          // to be consistent with other assets
          this.initialize(info);
        }

        /**
         * @en Destroy the render texture.
         * @zh 销毁渲染贴图。
         */;
        _proto.destroy = function destroy() {
          if (this._window) {
            var root = cclegacy.director.root;
            root === null || root === void 0 ? void 0 : root.destroyWindow(this._window);
            this._window = null;
          }
          return _TextureBase.prototype.destroy.call(this);
        }

        /**
         * @en Resize the render texture.
         * @zh 修改渲染贴图的尺寸。
         * @param width @en The pixel width to resize to, the range is from 1 to 2048. @zh 需要调整到的像素宽度，范围为 1-2048。
         * @param height @en The pixel height to resize to, the range is from 1 to 2048. @zh 需要调整到的像素高度，范围为 1-2048。
         */;
        _proto.resize = function resize(width, height) {
          this._width = Math.floor(clamp(width, 1, 2048));
          this._height = Math.floor(clamp(height, 1, 2048));
          if (this._window) {
            this._window.resize(this._width, this._height);
          }
          this.emit('resize', this._window);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._serialize = function _serialize(ctxForExporting) {
          if (EDITOR || TEST) {
            return {
              base: _TextureBase.prototype._serialize.call(this, ctxForExporting),
              w: this._width,
              h: this._height,
              n: this._name
            };
          }
          return {};
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._deserialize = function _deserialize(serializedData, handle) {
          var data = serializedData;
          this._width = data.w;
          this._height = data.h;
          this._name = data.n;
          _TextureBase.prototype._deserialize.call(this, data.base, handle);
        }

        // To be compatible with material property interface
        /**
         * @en Gets the related [[gfx.Texture]] resource, it's also the color attachment for the render window.
         * @zh 获取渲染贴图的 GFX 资源，同时也是渲染窗口所指向的颜色缓冲贴图资源。
         * @return @en The low level gfx texture. @zh 底层的 gfx 贴图。
         */;
        _proto.getGFXTexture = function getGFXTexture() {
          return this._window && this._window.framebuffer.colorTextures[0];
        }

        /**
         * @en Callback function after render texture is loaded in [[AssetManager]]. Initialize the render texture.
         * @zh 通过 [[AssetManager]] 加载完成时的回调，初始化渲染贴图。
         */;
        _proto.onLoaded = function onLoaded() {
          this._initWindow();
        }

        /**
         * @en Implementation of the render texture initialization.
         * @zh 初始化渲染贴图的具体实现。
         * @param info @en The create info of render texture. @zh 渲染贴图的创建信息。
         * @engineInternal
         */;
        _proto._initWindow = function _initWindow(info) {
          var root = cclegacy.director.root;
          _windowInfo.title = this._name;
          _windowInfo.width = this._width;
          _windowInfo.height = this._height;
          _windowInfo.renderPassInfo = info && info.passInfo ? info.passInfo : passInfo;
          _windowInfo.externalResLow = info && info.externalResLow ? info.externalResLow : 0;
          _windowInfo.externalResHigh = info && info.externalResHigh ? info.externalResHigh : 0;
          _windowInfo.externalFlag = info && info.externalFlag ? info.externalFlag : TextureFlagBit.NONE;
          _colorAttachment.barrier = deviceManager.gfxDevice.getGeneralBarrier(new GeneralBarrierInfo(AccessFlagBit.FRAGMENT_SHADER_READ_TEXTURE, AccessFlagBit.FRAGMENT_SHADER_READ_TEXTURE));
          if (this._window) {
            this._window.destroy();
            this._window.initialize(deviceManager.gfxDevice, _windowInfo);
          } else {
            this._window = root.createWindow(_windowInfo);
          }
        }

        /**
         * @en Initialize the render texture with uuid. The default size is 1x1.
         * @zh 初始化渲染贴图。使用 uuid 进行初始化，贴图的尺寸为 1x1。
         * @param uuid @en asset uuid. @zh 资源 uuid。
         * @deprecated Since v3.7, this is an internal engine interface and you should not call this interface under any circumstances.
         */;
        _proto.initDefault = function initDefault(uuid) {
          _TextureBase.prototype.initDefault.call(this, uuid);
          this._width = this._height = 1;
          this._initWindow();
        }

        /**
         * @en Validate the correctness of the render texture.
         * @zh 验证渲染贴图的正确性。
         * @deprecated Since v3.7, this is an internal engine interface and you should not call this interface under any circumstances.
         */;
        _proto.validate = function validate() {
          return this.width >= 1 && this.width <= 2048 && this.height >= 1 && this.height <= 2048;
        }

        /**
         * @en Read pixel buffer from render texture. @zh 从 render texture 读取像素数据。
         * @param x @en The location on x axis. @zh 起始位置X轴坐标。
         * @param y @en The location on y axis. @zh 起始位置Y轴坐标。
         * @param width @en The pixel width. @zh 像素宽度。
         * @param height @en The pixel height. @zh 像素高度。
         * @param buffer @en The buffer to hold pixel data. @zh 像素缓存。
         */;
        _proto.readPixels = function readPixels(x, y, width, height, buffer) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          width = width || this.width;
          height = height || this.height;
          var gfxTexture = this.getGFXTexture();
          if (!gfxTexture) {
            errorID(7606);
            return null;
          }
          var needSize = 4 * width * height;
          if (buffer === undefined) {
            buffer = new Uint8Array(needSize);
          } else if (buffer.length < needSize) {
            errorID(7607, needSize);
            return null;
          }
          var gfxDevice = this._getGFXDevice();
          var bufferViews = [];
          var regions = [];
          var region0 = new BufferTextureCopy();
          region0.texOffset.x = x;
          region0.texOffset.y = y;
          region0.texExtent.width = width;
          region0.texExtent.height = height;
          regions.push(region0);
          bufferViews.push(buffer);
          gfxDevice === null || gfxDevice === void 0 ? void 0 : gfxDevice.copyTextureToBuffers(gfxTexture, bufferViews, regions);
          return buffer;
        };
        _createClass(RenderTexture, [{
          key: "window",
          get:
          /**
           * @en The render window for the render pipeline, it's created internally and cannot be modified.
           * @zh 渲染管线所使用的渲染窗口，内部逻辑创建，无法被修改。
           */
          function get() {
            return this._window;
          }
        }]);
        return RenderTexture;
      }(TextureBase)) || _class));
      cclegacy.RenderTexture = RenderTexture;
    }
  };
});