System.register(['./index-ce98320e.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js'], (function (exports) {
    'use strict';
    var settings, Settings, sys, BrowserType, legacyCC, error, screen, getError, replaceProperty, removeProperty, warnID, DeviceInfo, SwapchainInfo, Device$1, defines, PipelineStateInfo, BlendTarget, BlendState, RasterizerState, DepthStencilState;
    return {
        setters: [function (module) {
            settings = module.a_;
            Settings = module.aZ;
            sys = module.aL;
            BrowserType = module.cb;
            legacyCC = module.l;
            error = module.e;
            screen = module.aK;
            getError = module.aI;
            replaceProperty = module.ag;
            removeProperty = module.ah;
            warnID = module.d;
        }, function (module) {
            DeviceInfo = module.a6;
            SwapchainInfo = module.a5;
            Device$1 = module.a$;
            defines = module.b0;
            PipelineStateInfo = module.P;
        }, function (module) {
            BlendTarget = module.a;
            BlendState = module.B;
            RasterizerState = module.R;
            DepthStencilState = module.D;
        }],
        execute: (function () {

            exports('j', find);

            let LegacyRenderMode; exports('L', LegacyRenderMode);
            (function (LegacyRenderMode) {
              LegacyRenderMode[LegacyRenderMode["AUTO"] = 0] = "AUTO";
              LegacyRenderMode[LegacyRenderMode["CANVAS"] = 1] = "CANVAS";
              LegacyRenderMode[LegacyRenderMode["WEBGL"] = 2] = "WEBGL";
              LegacyRenderMode[LegacyRenderMode["HEADLESS"] = 3] = "HEADLESS";
            })(LegacyRenderMode || (exports('L', LegacyRenderMode = {})));
            let RenderType; exports('R', RenderType);
            (function (RenderType) {
              RenderType[RenderType["UNKNOWN"] = -1] = "UNKNOWN";
              RenderType[RenderType["CANVAS"] = 0] = "CANVAS";
              RenderType[RenderType["WEBGL"] = 1] = "WEBGL";
              RenderType[RenderType["OPENGL"] = 2] = "OPENGL";
              RenderType[RenderType["HEADLESS"] = 3] = "HEADLESS";
            })(RenderType || (exports('R', RenderType = {})));
            class DeviceManager {
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
                if (this.initialized) {
                  return;
                }
                const renderMode = settings.querySettings(Settings.Category.RENDERING, 'renderMode');
                this._canvas = canvas;
                this._renderType = this._determineRenderType(renderMode);
                if (this._renderType === RenderType.WEBGL) {
                  const deviceInfo = new DeviceInfo(bindingMappingInfo);
                  if (globalThis.gfx) {
                    this._gfxDevice = gfx.DeviceManager.create(deviceInfo);
                  } else {
                    let useWebGL2 = !!globalThis.WebGL2RenderingContext;
                    globalThis.navigator.userAgent.toLowerCase();
                    if (sys.browserType === BrowserType.UC) {
                      useWebGL2 = false;
                    }
                    const deviceCtors = [];
                    if (useWebGL2 && legacyCC.WebGL2Device) {
                      deviceCtors.push(legacyCC.WebGL2Device);
                    }
                    if (legacyCC.WebGLDevice) {
                      deviceCtors.push(legacyCC.WebGLDevice);
                    }
                    if (legacyCC.EmptyDevice) {
                      deviceCtors.push(legacyCC.EmptyDevice);
                    }
                    Device$1.canvas = canvas;
                    for (let i = 0; i < deviceCtors.length; i++) {
                      this._gfxDevice = new deviceCtors[i]();
                      if (this._gfxDevice.initialize(deviceInfo)) {
                        break;
                      }
                    }
                    this._initSwapchain();
                  }
                } else if (this._renderType === RenderType.HEADLESS && legacyCC.EmptyDevice) {
                  this._gfxDevice = new legacyCC.EmptyDevice();
                  this._gfxDevice.initialize(new DeviceInfo(bindingMappingInfo));
                  this._initSwapchain();
                }
                if (!this._gfxDevice) {
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
            } exports('D', DeviceManager);
            const deviceManager = exports('d', new DeviceManager());

            const polyfills = {
              GFXDevice: true,
              GFXBuffer: true,
              GFXTexture: true,
              GFXSampler: true,
              GFXShader: true,
              GFXInputAssembler: true,
              GFXRenderPass: true,
              GFXFramebuffer: true,
              GFXPipelineState: true,
              GFXCommandBuffer: true,
              GFXQueue: true,
              GFXObjectType: true,
              GFXObject: false,
              GFXAttributeName: true,
              GFXType: true,
              GFXFormat: true,
              GFXBufferUsageBit: true,
              GFXMemoryUsageBit: true,
              GFXBufferFlagBit: true,
              GFXBufferAccessBit: 'MemoryAccessBit',
              GFXPrimitiveMode: true,
              GFXPolygonMode: true,
              GFXShadeModel: true,
              GFXCullMode: true,
              GFXComparisonFunc: true,
              GFXStencilOp: true,
              GFXBlendOp: true,
              GFXBlendFactor: true,
              GFXColorMask: true,
              GFXFilter: true,
              GFXAddress: true,
              GFXTextureType: true,
              GFXTextureUsageBit: true,
              GFXSampleCount: true,
              GFXTextureFlagBit: true,
              GFXShaderStageFlagBit: true,
              GFXDescriptorType: true,
              GFXCommandBufferType: true,
              GFXLoadOp: true,
              GFXStoreOp: true,
              GFXPipelineBindPoint: true,
              GFXDynamicStateFlagBit: true,
              GFXStencilFace: true,
              GFXQueueType: true,
              GFXRect: true,
              GFXViewport: true,
              GFXColor: true,
              GFXClearFlag: true,
              GFXOffset: true,
              GFXExtent: true,
              GFXTextureSubres: 'TextureSubresLayers',
              GFXTextureCopy: true,
              GFXBufferTextureCopy: true,
              GFXFormatType: true,
              GFXFormatInfo: true,
              GFXMemoryStatus: true,
              GFXFormatInfos: true,
              GFXFormatSize: true,
              GFXFormatSurfaceSize: true,
              GFXGetTypeSize: true,
              getTypedArrayConstructor: false
            };
            for (const name in polyfills) {
              let newName = polyfills[name];
              if (newName === true) {
                newName = name.slice(3);
              } else if (newName === false) {
                newName = name;
              }
              replaceProperty(legacyCC, 'cc', [{
                name,
                newName,
                target: legacyCC.gfx,
                targetName: 'cc.gfx'
              }]);
            }
            removeProperty(legacyCC, 'cc', [{
              name: 'GFX_MAX_VERTEX_ATTRIBUTES'
            }, {
              name: 'GFX_MAX_TEXTURE_UNITS'
            }, {
              name: 'GFX_MAX_ATTACHMENTS'
            }, {
              name: 'GFX_MAX_BUFFER_BINDINGS'
            }, {
              name: 'GFXTextureLayout'
            }]);

            const DescriptorSet = exports('a', gfx.DescriptorSet);
            const Buffer = exports('B', gfx.Buffer);
            const CommandBuffer = exports('C', gfx.CommandBuffer);
            const Device = exports('b', gfx.Device);
            const Swapchain = exports('S', gfx.Swapchain);
            const Framebuffer = exports('F', gfx.Framebuffer);
            const InputAssembler = exports('I', gfx.InputAssembler);
            const DescriptorSetLayout = exports('c', gfx.DescriptorSetLayout);
            const PipelineLayout = exports('e', gfx.PipelineLayout);
            const PipelineState = exports('P', gfx.PipelineState);
            const Queue = exports('Q', gfx.Queue);
            const RenderPass = exports('f', gfx.RenderPass);
            const Shader = exports('g', gfx.Shader);
            const Texture = exports('T', gfx.Texture);
            const Sampler = exports('h', gfx.Sampler);
            const GeneralBarrier = exports('G', gfx.GeneralBarrier);
            const TextureBarrier = exports('i', gfx.TextureBarrier);
            const polyfillCC = Object.assign({}, defines);
            polyfillCC.GFXObject = gfx.GFXObject;
            polyfillCC.Device = gfx.Device;
            polyfillCC.Swapchain = gfx.Swapchain;
            polyfillCC.Buffer = gfx.Buffer;
            polyfillCC.Texture = gfx.Texture;
            polyfillCC.Sampler = gfx.Sampler;
            polyfillCC.Shader = gfx.Shader;
            polyfillCC.InputAssembler = gfx.InputAssembler;
            polyfillCC.RenderPass = gfx.RenderPass;
            polyfillCC.Framebuffer = gfx.Framebuffer;
            polyfillCC.DescriptorSet = gfx.DescriptorSet;
            polyfillCC.DescriptorSetLayout = gfx.DescriptorSetLayout;
            polyfillCC.PipelineLayout = gfx.PipelineLayout;
            polyfillCC.PipelineState = gfx.PipelineState;
            polyfillCC.CommandBuffer = gfx.CommandBuffer;
            polyfillCC.Queue = gfx.Queue;
            polyfillCC.GeneralBarrier = gfx.GeneralBarrier;
            polyfillCC.TextureBarrier = gfx.TextureBarrier;
            legacyCC.gfx = polyfillCC;
            polyfillCC.BlendTarget = BlendTarget;
            polyfillCC.BlendState = BlendState;
            polyfillCC.RasterizerState = RasterizerState;
            polyfillCC.DepthStencilState = DepthStencilState;
            polyfillCC.PipelineStateInfo = PipelineStateInfo;

            function find(path, referenceNode) {
              if (!referenceNode) {
                const scene = legacyCC.director.getScene();
                if (!scene) {
                  {
                    warnID(5601);
                  }
                  return null;
                } else if (!scene.isValid) {
                  warnID(5602);
                  return null;
                }
                referenceNode = scene;
              } else if (!referenceNode.isValid) {
                warnID(5603);
                return null;
              }
              return referenceNode.getChildByPath(path);
            }
            legacyCC.find = find;

        })
    };
}));
