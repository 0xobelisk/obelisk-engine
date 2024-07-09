System.register("q-bundled:///fs/cocos/gfx/device-manager.js", ["../../../virtual/internal%253Aconstants.js", "../core/index.js", "./base/define.js", "./base/device.js", "../../pal/system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var JSB, WEBGPU, cclegacy, error, getError, sys, screen, Settings, settings, DeviceInfo, SwapchainInfo, Device, BrowserType, LegacyRenderMode, RenderType, DeviceManager, deviceManager;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable max-len */ /*
                                                                                                                                                                                                                                                                                                                                                                                                                          Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                         
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
  _export({
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
      _export("DeviceManager", DeviceManager = /*#__PURE__*/function () {
        function DeviceManager() {
          this.initialized = false;
          this._gfxDevice = void 0;
          this._canvas = null;
          this._swapchain = void 0;
          this._renderType = RenderType.UNKNOWN;
        }
        var _proto = DeviceManager.prototype;
        _proto.init = function init(canvas, bindingMappingInfo) {
          // Avoid setup to be called twice.
          if (this.initialized) {
            return;
          }
          var renderMode = settings.querySettings(Settings.Category.RENDERING, 'renderMode');
          this._canvas = canvas;
          this._renderType = this._determineRenderType(renderMode);

          // WebGL context created successfully
          if (this._renderType === RenderType.WEBGL) {
            var deviceInfo = new DeviceInfo(bindingMappingInfo);
            if (JSB && globalThis.gfx) {
              this._gfxDevice = gfx.DeviceManager.create(deviceInfo);
            } else {
              var useWebGL2 = !!globalThis.WebGL2RenderingContext;
              var userAgent = globalThis.navigator.userAgent.toLowerCase();
              // UC browser implementation doesn't conform to WebGL2 standard
              if (sys.browserType === BrowserType.UC) {
                useWebGL2 = false;
              }
              var deviceCtors = [];
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
              for (var i = 0; i < deviceCtors.length; i++) {
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
            this._canvas.oncontextmenu = function () {
              return false;
            };
          }
        };
        _proto._initSwapchain = function _initSwapchain() {
          var swapchainInfo = new SwapchainInfo(1, this._canvas);
          var windowSize = screen.windowSize;
          swapchainInfo.width = windowSize.width;
          swapchainInfo.height = windowSize.height;
          this._swapchain = this._gfxDevice.createSwapchain(swapchainInfo);
        };
        _proto._determineRenderType = function _determineRenderType(renderMode) {
          if (typeof renderMode !== 'number' || renderMode > RenderType.HEADLESS || renderMode < LegacyRenderMode.AUTO) {
            renderMode = LegacyRenderMode.AUTO;
          }
          // Determine RenderType
          var renderType = RenderType.CANVAS;
          var supportRender = false;
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
        };
        _createClass(DeviceManager, [{
          key: "gfxDevice",
          get: function get() {
            return this._gfxDevice;
          }
        }, {
          key: "swapchain",
          get: function get() {
            return this._swapchain;
          }
        }]);
        return DeviceManager;
      }());
      /**
       * @internal
       */
      _export("deviceManager", deviceManager = new DeviceManager());
    }
  };
});