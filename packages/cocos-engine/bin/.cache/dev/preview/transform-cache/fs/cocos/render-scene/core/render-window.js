System.register("q-bundled:///fs/cocos/render-scene/core/render-window.js", ["pal/screen-adapter", "../../../pal/screen-adapter/enum-type/index.js", "../../gfx/index.js"], function (_export, _context) {
  "use strict";

  var screenAdapter, Orientation, TextureType, TextureUsageBit, Format, TextureInfo, FramebufferInfo, SurfaceTransform, TextureFlagBit, _orientationMap, orientationMap, RenderWindow;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_palScreenAdapterEnumTypeIndexJs) {
      Orientation = _palScreenAdapterEnumTypeIndexJs.Orientation;
    }, function (_gfxIndexJs) {
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      Format = _gfxIndexJs.Format;
      TextureInfo = _gfxIndexJs.TextureInfo;
      FramebufferInfo = _gfxIndexJs.FramebufferInfo;
      SurfaceTransform = _gfxIndexJs.SurfaceTransform;
      TextureFlagBit = _gfxIndexJs.TextureFlagBit;
    }],
    execute: function () {
      orientationMap = (_orientationMap = {}, _orientationMap[Orientation.PORTRAIT] = SurfaceTransform.IDENTITY, _orientationMap[Orientation.LANDSCAPE_RIGHT] = SurfaceTransform.ROTATE_90, _orientationMap[Orientation.PORTRAIT_UPSIDE_DOWN] = SurfaceTransform.ROTATE_180, _orientationMap[Orientation.LANDSCAPE_LEFT] = SurfaceTransform.ROTATE_270, _orientationMap);
      /**
       * @en The render window represents the render target, it could be an off screen frame buffer or the on screen buffer.
       * @zh 渲染窗口代表了一个渲染目标，可以是离屏的帧缓冲，也可以是屏幕缓冲
       */
      _export("RenderWindow", RenderWindow = /*#__PURE__*/function () {
        /**
         * @private
         */
        RenderWindow.registerCreateFunc = function registerCreateFunc(root) {
          root._createWindowFun = function (_root) {
            return new RenderWindow(_root);
          };
        };
        function RenderWindow(root) {
          this._title = '';
          this._width = 1;
          this._height = 1;
          this._swapchain = null;
          this._renderPass = null;
          this._colorTextures = [];
          this._depthStencilTexture = null;
          this._cameras = [];
          this._hasOnScreenAttachments = false;
          this._hasOffScreenAttachments = false;
          this._framebuffer = null;
          this._device = null;
        }
        var _proto = RenderWindow.prototype;
        _proto.initialize = function initialize(device, info) {
          if (info.title !== undefined) {
            this._title = info.title;
          }
          if (info.swapchain !== undefined) {
            this._swapchain = info.swapchain;
          }
          this._width = info.width;
          this._height = info.height;
          this._device = device;
          this._renderPass = device.createRenderPass(info.renderPassInfo);
          if (info.swapchain) {
            this._swapchain = info.swapchain;
            this._colorTextures.push(info.swapchain.colorTexture);
            this._depthStencilTexture = info.swapchain.depthStencilTexture;
          } else {
            for (var i = 0; i < info.renderPassInfo.colorAttachments.length; i++) {
              var textureInfo = new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_SRC, info.renderPassInfo.colorAttachments[i].format, this._width, this._height);
              if (info.externalFlag && (info.externalFlag & TextureFlagBit.EXTERNAL_NORMAL || info.externalFlag & TextureFlagBit.EXTERNAL_OES)) {
                textureInfo.flags |= info.externalFlag;
                textureInfo.externalRes = info.externalResLow ? info.externalResLow : 0;
              }
              this._colorTextures.push(device.createTexture(textureInfo));
            }
            if (info.renderPassInfo.depthStencilAttachment.format !== Format.UNKNOWN) {
              this._depthStencilTexture = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.DEPTH_STENCIL_ATTACHMENT | TextureUsageBit.SAMPLED, info.renderPassInfo.depthStencilAttachment.format, this._width, this._height));
              this._hasOffScreenAttachments = true;
            }
          }
          this._framebuffer = device.createFramebuffer(new FramebufferInfo(this._renderPass, this._colorTextures, this._depthStencilTexture));
          return true;
        };
        _proto.destroy = function destroy() {
          this.clearCameras();
          if (this._framebuffer) {
            this._framebuffer.destroy();
            this._framebuffer = null;
          }
          if (this._depthStencilTexture) {
            this._depthStencilTexture.destroy();
            this._depthStencilTexture = null;
          }
          for (var i = 0; i < this._colorTextures.length; i++) {
            var colorTexture = this._colorTextures[i];
            if (colorTexture) {
              colorTexture.destroy();
            }
          }
          this._colorTextures.length = 0;
          this._device = null;
        }

        /**
         * @en Resize window.
         * @zh 重置窗口大小。
         * @param width The new width.
         * @param height The new height.
         */;
        _proto.resize = function resize(width, height) {
          if (this._swapchain) {
            this._swapchain.resize(width, height, orientationMap[screenAdapter.orientation]);
            this._width = this._swapchain.width;
            this._height = this._swapchain.height;
          } else {
            for (var i = 0; i < this._colorTextures.length; i++) {
              this._colorTextures[i].resize(width, height);
            }
            if (this._depthStencilTexture) {
              this._depthStencilTexture.resize(width, height);
            }
            this._width = width;
            this._height = height;
          }
          if (this.framebuffer) {
            this.framebuffer.destroy();
            this._framebuffer = this._device.createFramebuffer(new FramebufferInfo(this._renderPass, this._colorTextures, this._depthStencilTexture));
          }
          for (var _iterator = _createForOfIteratorHelperLoose(this._cameras), _step; !(_step = _iterator()).done;) {
            var camera = _step.value;
            camera.resize(width, height);
          }
        }

        /**
         * @en Extract all render cameras attached to the render window to the output cameras list
         * @zh 将所有挂载到当前渲染窗口的摄像机存储到输出列表参数中
         * @param cameras @en The output cameras list, should be empty before invoke this function
         *                @zh 输出相机列表参数，传入时应该为空
         */;
        _proto.extractRenderCameras = function extractRenderCameras(cameras) {
          for (var j = 0; j < this._cameras.length; j++) {
            var camera = this._cameras[j];
            if (camera.enabled) {
              camera.update();
              cameras.push(camera);
            }
          }
        }

        /**
         * @en Attach a new camera to the render window
         * @zh 添加渲染相机
         * @param camera @en The camera to attach @zh 要挂载的相机
         */;
        _proto.attachCamera = function attachCamera(camera) {
          for (var i = 0; i < this._cameras.length; i++) {
            if (this._cameras[i] === camera) {
              return;
            }
          }
          this._cameras.push(camera);
          this.sortCameras();
        }

        /**
         * @en Detach a camera from the render window
         * @zh 移除场景中的渲染相机
         * @param camera @en The camera to detach @zh 要移除的相机
         */;
        _proto.detachCamera = function detachCamera(camera) {
          for (var i = 0; i < this._cameras.length; ++i) {
            if (this._cameras[i] === camera) {
              this._cameras.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Clear all attached cameras
         * @zh 清空全部渲染相机
         */;
        _proto.clearCameras = function clearCameras() {
          this._cameras.length = 0;
        }

        /**
         * @en Sort all attached cameras with priority
         * @zh 按照优先级对所有挂载的相机排序
         */;
        _proto.sortCameras = function sortCameras() {
          this._cameras.sort(function (a, b) {
            return a.priority - b.priority;
          });
        };
        _createClass(RenderWindow, [{
          key: "width",
          get:
          /**
           * @en Get window width. Pre-rotated (i.e. rotationally invariant, always in identity/portrait mode) if possible.
           * If you want to get oriented size instead, you should use [[renderer.scene.Camera.width]] which corresponds to the current screen rotation.
           * @zh 获取窗口宽度。如果支持交换链预变换，返回值将始终处于单位旋转（竖屏）坐标系下。如果需要获取旋转后的尺寸，请使用 [[renderer.scene.Camera.width]]。
           */
          function get() {
            return this._width;
          }

          /**
           * @en Get window height. Pre-rotated (i.e. rotationally invariant, always in identity/portrait mode) if possible.
           * If you want to get oriented size instead, you should use [[renderer.scene.Camera.width]] which corresponds to the current screen rotation.
           * @zh 获取窗口高度。如果支持交换链预变换，返回值将始终处于单位旋转（竖屏）坐标系下。如果需要获取旋转后的尺寸，请使用 [[renderer.scene.Camera.height]]。
           */
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }

          /**
           * @en Get the swapchain for this window, if there is one
           * @zh 如果存在的话，获取此窗口的交换链
           */
        }, {
          key: "swapchain",
          get: function get() {
            return this._swapchain;
          }

          /**
           * @en Get window frame buffer.
           * @zh 帧缓冲对象。
           */
        }, {
          key: "framebuffer",
          get: function get() {
            return this._framebuffer;
          }
        }, {
          key: "cameras",
          get: function get() {
            return this._cameras;
          }
        }]);
        return RenderWindow;
      }());
    }
  };
});