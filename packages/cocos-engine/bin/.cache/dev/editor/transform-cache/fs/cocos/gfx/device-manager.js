System.register("q-bundled:///fs/cocos/gfx/device-manager.js", ["../../../virtual/internal%253Aconstants.js", "../core/index.js", "./base/define.js", "./base/device.js", "../../pal/system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var JSB, WEBGPU, cclegacy, error, getError, sys, screen, Settings, settings, DeviceInfo, SwapchainInfo, Device, BrowserType, DeviceManager, LegacyRenderMode, RenderType, deviceManager;
  _export({
    DeviceManager: void 0,
    LegacyRenderMode: void 0,
    RenderType: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
      WEBGPU = _virtualInternal253AconstantsJs.WEBGPU;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      error = _coreIndexJs.error;
      getError = _coreIndexJs.getError;
      sys = _coreIndexJs.sys;
      screen = _coreIndexJs.screen;
      Settings = _coreIndexJs.Settings;
      settings = _coreIndexJs.settings;
    }, function (_baseDefineJs) {
      DeviceInfo = _baseDefineJs.DeviceInfo;
      SwapchainInfo = _baseDefineJs.SwapchainInfo;
    }, function (_baseDeviceJs) {
      Device = _baseDeviceJs.Device;
    }, function (_palSystemInfoEnumTypeIndexJs) {
      BrowserType = _palSystemInfoEnumTypeIndexJs.BrowserType;
    }],
    execute: function () {
      (function (LegacyRenderMode) {
        LegacyRenderMode[LegacyRenderMode["AUTO"] = 0] = "AUTO";
        LegacyRenderMode[LegacyRenderMode["CANVAS"] = 1] = "CANVAS";
        LegacyRenderMode[LegacyRenderMode["WEBGL"] = 2] = "WEBGL";
        LegacyRenderMode[LegacyRenderMode["HEADLESS"] = 3] = "HEADLESS";
      })(LegacyRenderMode || _export("LegacyRenderMode", LegacyRenderMode = {}));
      (function (RenderType) {
        RenderType[RenderType["UNKNOWN"] = -1] = "UNKNOWN";
        RenderType[RenderType["CANVAS"] = 0] = "CANVAS";
        RenderType[RenderType["WEBGL"] = 1] = "WEBGL";
        RenderType[RenderType["OPENGL"] = 2] = "OPENGL";
        RenderType[RenderType["HEADLESS"] = 3] = "HEADLESS";
      })(RenderType || _export("RenderType", RenderType = {}));
      /**
       * @internal
       */
      _export("DeviceManager", DeviceManager = class DeviceManager {
        constructor() {
          this.initialized = false;
          this._gfxDevice = void 0;
          this._canvas = null;
          this._swapchain = void 0;
          this._renderType = RenderType.UNKNOWN;
        }
        get gfxDevice() {
          return this._gfxDevice;
        }
        get swapchain() {
          return this._swapchain;
        }
        init(canvas, bindingMappingInfo) {
          // Avoid setup to be called twice.
          if (this.initialized) {
            return;
          }
          const renderMode = settings.querySettings(Settings.Category.RENDERING, 'renderMode');
          this._canvas = canvas;
          this._renderType = this._determineRenderType(renderMode);

          // WebGL context created successfully
          if (this._renderType === RenderType.WEBGL) {
            const deviceInfo = new DeviceInfo(bindingMappingInfo);
            if (JSB && globalThis.gfx) {
              this._gfxDevice = gfx.DeviceManager.create(deviceInfo);
            } else {
              let useWebGL2 = !!globalThis.WebGL2RenderingContext;
              const userAgent = globalThis.navigator.userAgent.toLowerCase();
              // UC browser implementation doesn't conform to WebGL2 standard
              if (sys.browserType === BrowserType.UC) {
                useWebGL2 = false;
              }
              const deviceCtors = [];
              if (WEBGPU) {
                deviceCtors.push(cclegacy.WebGPUDevice);
              }
              if (useWebGL2 && cclegacy.WebGL2Device) {
                deviceCtors.push(cclegacy.WebGL2Device);
              }
              if (cclegacy.WebGLDevice) {
                deviceCtors.push(cclegacy.WebGLDevice);
              }
              if (cclegacy.EmptyDevice) {
                deviceCtors.push(cclegacy.EmptyDevice);
              }
              Device.canvas = canvas;
              for (let i = 0; i < deviceCtors.length; i++) {
                this._gfxDevice = new deviceCtors[i]();
                if (this._gfxDevice.initialize(deviceInfo)) {
                  break;
                }
              }
              this._initSwapchain();
            }
          } else if (this._renderType === RenderType.HEADLESS && cclegacy.EmptyDevice) {
            this._gfxDevice = new cclegacy.EmptyDevice();
            this._gfxDevice.initialize(new DeviceInfo(bindingMappingInfo));
            this._initSwapchain();
          }
          if (!this._gfxDevice) {
            // todo fix here for wechat game
            error('can not support canvas rendering in 3D');
            this._renderType = RenderType.UNKNOWN;
            return;
          }
          if (this._canvas) {
            this._canvas.oncontextmenu = () => false;
          }
        }
        _initSwapchain() {
          const swapchainInfo = new SwapchainInfo(1, this._canvas);
          const windowSize = screen.windowSize;
          swapchainInfo.width = windowSize.width;
          swapchainInfo.height = windowSize.height;
          this._swapchain = this._gfxDevice.createSwapchain(swapchainInfo);
        }
        _determineRenderType(renderMode) {
          if (typeof renderMode !== 'number' || renderMode > RenderType.HEADLESS || renderMode < LegacyRenderMode.AUTO) {
            renderMode = LegacyRenderMode.AUTO;
          }
          // Determine RenderType
          let renderType = RenderType.CANVAS;
          let supportRender = false;
          if (renderMode === LegacyRenderMode.CANVAS) {
            renderType = RenderType.CANVAS;
            supportRender = true;
          } else if (renderMode === LegacyRenderMode.AUTO || renderMode === LegacyRenderMode.WEBGL) {
            renderType = RenderType.WEBGL;
            supportRender = true;
          } else if (renderMode === LegacyRenderMode.HEADLESS) {
            renderType = RenderType.HEADLESS;
            supportRender = true;
          }
          if (!supportRender) {
            throw new Error(getError(3820, renderMode));
          }
          return renderType;
        }
      });
      /**
       * @internal
       */
      _export("deviceManager", deviceManager = new DeviceManager());
    }
  };
});