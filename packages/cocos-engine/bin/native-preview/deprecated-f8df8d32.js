System.register(['./index-ce98320e.js', './director-dc238483.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './device-90bc7390.js', './node-event-18d96a1b.js'], (function (exports, module) {
    'use strict';
    var fastRemove, assertIsTrue, Vec2, legacyCC, settings, Settings, ccwindow$1, Mat4, sys, clamp01, cubicOut, preTransforms, EventTarget, systemInfo, DebugMode, _resetDebugSetting, macro, screen, garbageCollectionManager, errorID, log, engineVersion, EDITOR_NOT_IN_PREVIEW, logID, assert, warn, markAsWarning, removeProperty, replaceProperty, PipelineStateManager, director, Director, RenderPipeline, Material, SetIndex, input, bindingMappingInfo, assetManager, builtinResMgr, Layers, deviceManager, LegacyRenderMode, Color, Rect, BufferInfo, BufferUsageBit, MemoryUsageBit, Attribute, Format, InputAssemblerInfo, SamplerInfo, Address, TextureInfo, TextureType, TextureUsageBit, BufferTextureCopy;
    return {
        setters: [function (module) {
            fastRemove = module.bA;
            assertIsTrue = module.bu;
            Vec2 = module.V;
            legacyCC = module.l;
            settings = module.a_;
            Settings = module.aZ;
            ccwindow$1 = module.c6;
            Mat4 = module.s;
            sys = module.aL;
            clamp01 = module.G;
            cubicOut = module.cm;
            preTransforms = module.z;
            EventTarget = module.aD;
            systemInfo = module.bY;
            DebugMode = module.aJ;
            _resetDebugSetting = module.bp;
            macro = module.aM;
            screen = module.aK;
            garbageCollectionManager = module.bg;
            errorID = module.f;
            log = module.a;
            engineVersion = module.j;
            EDITOR_NOT_IN_PREVIEW = module.c8;
            logID = module.c;
            assert = module.b;
            warn = module.w;
            markAsWarning = module.ai;
            removeProperty = module.ah;
            replaceProperty = module.ag;
        }, function (module) {
            PipelineStateManager = module.P;
            director = module.n;
            Director = module.m;
            RenderPipeline = module.a;
        }, function (module) {
            Material = module.ap;
            SetIndex = module.aO;
            input = module.az;
            bindingMappingInfo = module.aP;
            assetManager = module.aq;
            builtinResMgr = module.at;
            Layers = module.V;
        }, function (module) {
            deviceManager = module.d;
            LegacyRenderMode = module.L;
        }, function (module) {
            Color = module.a3;
            Rect = module.X;
            BufferInfo = module.a7;
            BufferUsageBit = module.B;
            MemoryUsageBit = module.e;
            Attribute = module.ao;
            Format = module.b;
            InputAssemblerInfo = module.aq;
            SamplerInfo = module.ae;
            Address = module.l;
            TextureInfo = module.ac;
            TextureType = module.f;
            TextureUsageBit = module.g;
            BufferTextureCopy = module.a1;
        }, function () {}],
        execute: (function () {

            class AsyncDelegate {
              constructor() {
                this._delegates = [];
              }
              add(callback) {
                if (!this._delegates.includes(callback)) {
                  this._delegates.push(callback);
                }
              }
              hasListener(callback) {
                return this._delegates.includes(callback);
              }
              remove(callback) {
                fastRemove(this._delegates, callback);
              }
              dispatch(...args) {
                return Promise.all(this._delegates.map(func => func(...arguments)).filter(Boolean));
              }
            } exports('A', AsyncDelegate);

            const ccwindow = typeof globalThis.jsb !== 'undefined' ? typeof jsb.window !== 'undefined' ? jsb.window : window : window;
            const ccdocument = ccwindow.document;
            function findCanvas() {
              const container = ccdocument.createElement('div');
              const frame = ccdocument.documentElement;
              const canvas = ccwindow.__canvas;
              return {
                frame,
                canvas,
                container
              };
            }
            function loadJsFile(path) {
              if (window.oh && window.scriptEngineType === 'napi') {
                window.oh.loadModule(path);
                return Promise.resolve();
              } else {
                {
                  return new Promise((resolve, reject) => {
                    const sourceURL = window.location.href + path;
                    const xhr = new XMLHttpRequest();
                    xhr.onload = () => {
                      if (xhr.status !== 200) {
                        reject(new Error(`load js file failed: ${sourceURL}, error status: ${xhr.status}`));
                        return;
                      }
                      window.eval(`${xhr.response}\n//# sourceURL=${sourceURL}`);
                      resolve();
                    };
                    xhr.onerror = () => {
                      reject(new Error(`load js file failed: ${sourceURL}`));
                    };
                    xhr.open('GET', sourceURL, true);
                    xhr.send(null);
                  });
                }
              }
            }

            class Pacer {
              constructor() {
                this._rafHandle = 0;
                this._onTick = null;
                this._targetFrameRate = 60;
                this._isPlaying = false;
                this._updateCallback = void 0;
                this._updateCallback = () => {
                  if (this._isPlaying) {
                    this._rafHandle = requestAnimationFrame(this._updateCallback);
                  }
                  if (this._onTick) {
                    this._onTick();
                  }
                };
              }
              get targetFrameRate() {
                return this._targetFrameRate;
              }
              set targetFrameRate(val) {
                if (this._targetFrameRate !== val) {
                  assertIsTrue(val > 0);
                  this._targetFrameRate = val;
                  jsb.setPreferredFramesPerSecond(this._targetFrameRate);
                  if (this._isPlaying) {
                    this.stop();
                    this.start();
                  }
                }
              }
              set onTick(val) {
                this._onTick = val;
              }
              get onTick() {
                return this._onTick;
              }
              start() {
                if (this._isPlaying) return;
                this._rafHandle = requestAnimationFrame(this._updateCallback);
                this._isPlaying = true;
              }
              stop() {
                if (!this._isPlaying) return;
                cancelAnimationFrame(this._rafHandle);
                this._rafHandle = 0;
                this._isPlaying = false;
              }
            }

            let XREye;
            (function (XREye) {
              XREye[XREye["NONE"] = -1] = "NONE";
              XREye[XREye["LEFT"] = 0] = "LEFT";
              XREye[XREye["RIGHT"] = 1] = "RIGHT";
            })(XREye || (XREye = {}));
            let XRConfigKey;
            (function (XRConfigKey) {
              XRConfigKey[XRConfigKey["SESSION_RUNNING"] = 2] = "SESSION_RUNNING";
              XRConfigKey[XRConfigKey["VIEW_COUNT"] = 6] = "VIEW_COUNT";
              XRConfigKey[XRConfigKey["SWAPCHAIN_WIDTH"] = 7] = "SWAPCHAIN_WIDTH";
              XRConfigKey[XRConfigKey["SWAPCHAIN_HEIGHT"] = 8] = "SWAPCHAIN_HEIGHT";
              XRConfigKey[XRConfigKey["DEVICE_IPD"] = 37] = "DEVICE_IPD";
              XRConfigKey[XRConfigKey["SPLIT_AR_GLASSES"] = 42] = "SPLIT_AR_GLASSES";
            })(XRConfigKey || (XRConfigKey = {}));
            let XRPoseType;
            (function (XRPoseType) {
              XRPoseType[XRPoseType["VIEW_LEFT"] = 0] = "VIEW_LEFT";
              XRPoseType[XRPoseType["HAND_LEFT"] = 1] = "HAND_LEFT";
              XRPoseType[XRPoseType["AIM_LEFT"] = 2] = "AIM_LEFT";
              XRPoseType[XRPoseType["VIEW_RIGHT"] = 3] = "VIEW_RIGHT";
              XRPoseType[XRPoseType["HAND_RIGHT"] = 4] = "HAND_RIGHT";
              XRPoseType[XRPoseType["AIM_RIGHT"] = 5] = "AIM_RIGHT";
              XRPoseType[XRPoseType["HEAD_MIDDLE"] = 6] = "HEAD_MIDDLE";
            })(XRPoseType || (XRPoseType = {}));

            const v2_0 = new Vec2();
            class SplashScreen {
              get isFinished() {
                return this._curTime >= this.settings.totalTime;
              }
              set curTime(val) {
                this._curTime = val;
              }
              get curTime() {
                return this._curTime;
              }
              init() {
                var _settings$querySettin, _settings$querySettin2, _settings$querySettin3, _settings$querySettin4, _settings$querySettin5, _settings$querySettin6;
                this.settings = {
                  displayRatio: (_settings$querySettin = settings.querySettings(Settings.Category.SPLASH_SCREEN, 'displayRatio')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : 0.4,
                  totalTime: (_settings$querySettin2 = settings.querySettings(Settings.Category.SPLASH_SCREEN, 'totalTime')) !== null && _settings$querySettin2 !== void 0 ? _settings$querySettin2 : 3000,
                  watermarkLocation: (_settings$querySettin3 = settings.querySettings(Settings.Category.SPLASH_SCREEN, 'watermarkLocation')) !== null && _settings$querySettin3 !== void 0 ? _settings$querySettin3 : 'default',
                  autoFit: (_settings$querySettin4 = settings.querySettings(Settings.Category.SPLASH_SCREEN, 'autoFit')) !== null && _settings$querySettin4 !== void 0 ? _settings$querySettin4 : true,
                  logo: (_settings$querySettin5 = settings.querySettings(Settings.Category.SPLASH_SCREEN, 'logo')) !== null && _settings$querySettin5 !== void 0 ? _settings$querySettin5 : undefined,
                  background: (_settings$querySettin6 = settings.querySettings(Settings.Category.SPLASH_SCREEN, 'background')) !== null && _settings$querySettin6 !== void 0 ? _settings$querySettin6 : undefined
                };
                this._curTime = 0;
                if (this.settings.totalTime <= 0 || this.settings.logo === undefined || this.settings.background === undefined) {
                  this.settings.totalTime = 0;
                } else {
                  this.device = legacyCC.director.root.device;
                  this.swapchain = legacyCC.director.root.mainWindow.swapchain;
                  this.preInit();
                  this.initLayout();
                  if (this.settings.logo.type === 'default') {
                    this.initWaterMark();
                  }
                  let bgPromise = Promise.resolve();
                  let logoPromise = Promise.resolve();
                  if (this.settings.background.type === 'custom') {
                    bgPromise = new Promise((resolve, reject) => {
                      this.bgImage = new ccwindow$1.Image();
                      this.bgImage.onload = () => {
                        this.initBG();
                        resolve();
                      };
                      this.bgImage.onerror = () => {
                        reject();
                      };
                      this.bgImage.src = this.settings.background.base64;
                    });
                  }
                  if (this.settings.logo.type !== 'none') {
                    logoPromise = new Promise((resolve, reject) => {
                      this.logoImage = new ccwindow$1.Image();
                      this.logoImage.onload = () => {
                        this.initLogo();
                        resolve();
                      };
                      this.logoImage.onerror = () => {
                        reject();
                      };
                      this.logoImage.src = this.settings.logo.base64;
                    });
                  }
                  return Promise.all([bgPromise, logoPromise]);
                }
                return Promise.resolve([]);
              }
              preInit() {
                var _this$settings$backgr;
                const clearColor = (_this$settings$backgr = this.settings.background) === null || _this$settings$backgr === void 0 ? void 0 : _this$settings$backgr.color;
                this.clearColors = clearColor ? [new Color(clearColor.x, clearColor.y, clearColor.z, clearColor.w)] : [new Color(0, 0, 0, 1)];
                const {
                  device,
                  swapchain
                } = this;
                this.renderArea = new Rect(0, 0, swapchain.width, swapchain.height);
                this.cmdBuff = device.commandBuffer;
                const verts = new Float32Array([0.5, 0.5, 1, 0, -0.5, 0.5, 0, 0, 0.5, -0.5, 1, 1, -0.5, -0.5, 0, 1]);
                const vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
                const vbSize = vbStride * 4;
                this.vertexBuffers = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, vbSize, vbStride));
                this.vertexBuffers.update(verts);
                const indices = new Uint16Array([0, 1, 2, 1, 3, 2]);
                const ibStride = Uint16Array.BYTES_PER_ELEMENT;
                const ibSize = ibStride * 6;
                this.indicesBuffers = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, ibSize, ibStride));
                this.indicesBuffers.update(indices);
                const attributes = [new Attribute('a_position', Format.RG32F), new Attribute('a_texCoord', Format.RG32F)];
                const IAInfo = new InputAssemblerInfo(attributes, [this.vertexBuffers], this.indicesBuffers);
                this.quadAssmebler = device.createInputAssembler(IAInfo);
                this.projection = new Mat4();
                Mat4.ortho(this.projection, -1, 1, -1, 1, -1, 1, device.capabilities.clipSpaceMinZ, device.capabilities.clipSpaceSignY, swapchain.surfaceTransform);
                this.isMobile = sys.isMobile;
              }
              initLayout() {
                if (this.isMobile) {
                  this.bgWidth = 812;
                  this.bgHeight = 375;
                  this.logoWidthTemp = 70;
                  this.logoHeightTemp = 100;
                  this.textSize = 12;
                  this.textHeight = this.textSize + this.textExpandSize;
                  this.textXTrans = 1 / 2;
                  this.textYExtraTrans = 16;
                } else {
                  this.bgWidth = 1920;
                  this.bgHeight = 1080;
                  this.logoWidthTemp = 140;
                  this.logoHeightTemp = 200;
                  this.textSize = 24;
                  this.textHeight = this.textSize + this.textExpandSize;
                  this.textXTrans = 1 / 2;
                  this.textYExtraTrans = 32;
                }
                this.logoXTrans = 1 / 2;
                this.logoYTrans = 1 / 6 + 2.5 / 6;
                this.initScale();
              }
              initScale() {
                const dw = this.swapchain.width;
                const dh = this.swapchain.height;
                let desiredWidth = this.isMobile ? 375 : 1080;
                let desiredHeight = this.isMobile ? 812 : 1920;
                if (dw > dh) {
                  const temp = desiredHeight;
                  desiredHeight = desiredWidth;
                  desiredWidth = temp;
                }
                if (dw / dh > 16 / 9) {
                  this.scaleSize = dh / desiredHeight;
                } else {
                  this.scaleSize = dw / desiredWidth;
                }
              }
              update(deltaTime) {
                const settings = this.settings;
                const {
                  device,
                  swapchain
                } = this;
                Mat4.ortho(this.projection, -1, 1, -1, 1, -1, 1, device.capabilities.clipSpaceMinZ, device.capabilities.clipSpaceSignY, swapchain.surfaceTransform);
                const dw = swapchain.width;
                const dh = swapchain.height;
                this.initScale();
                this._curTime += deltaTime * 1000;
                const percent = clamp01(this._curTime / settings.totalTime);
                const u_p = cubicOut(percent);
                let scaleX = 1;
                let scaleY = 1;
                if (this.settings.background.type === 'custom') {
                  if (dw < dh) {
                    scaleX = dh * this.bgRatio;
                    scaleY = dh;
                  } else {
                    scaleX = dw;
                    scaleY = dw * this.bgRatio;
                  }
                  this.bgMat.setProperty('resolution', v2_0.set(dw, dh), 0);
                  this.bgMat.setProperty('scale', v2_0.set(scaleX, scaleY), 0);
                  this.bgMat.setProperty('translate', v2_0.set(dw * 0.5, dh * 0.5), 0);
                  this.bgMat.setProperty('percent', 1.0);
                  this.bgMat.setProperty('u_projection', this.projection);
                  this.bgMat.passes[0].update();
                }
                const logoYTrans = dh * this.logoYTrans;
                if (this.settings.logo.type !== 'none') {
                  scaleX = this.logoWidth * this.scaleSize * settings.displayRatio;
                  scaleY = this.logoHeight * this.scaleSize * settings.displayRatio;
                  this.logoMat.setProperty('resolution', v2_0.set(dw, dh), 0);
                  this.logoMat.setProperty('scale', v2_0.set(scaleX, scaleY), 0);
                  this.logoMat.setProperty('translate', v2_0.set(dw * this.logoXTrans, logoYTrans), 0);
                  this.logoMat.setProperty('percent', u_p);
                  this.logoMat.setProperty('u_projection', this.projection);
                  this.logoMat.passes[0].update();
                }
                if (this.settings.logo.type === 'default' && this.watermarkMat) {
                  const watermarkTW = this.watermarkTexture.width;
                  const watermarkTH = this.watermarkTexture.height;
                  scaleX = watermarkTW;
                  scaleY = watermarkTH;
                  const textYTrans = logoYTrans - (this.logoHeight * 0.5 * settings.displayRatio + this.textYExtraTrans) * this.scaleSize - watermarkTH * 0.5;
                  this.watermarkMat.setProperty('resolution', v2_0.set(dw, dh), 0);
                  this.watermarkMat.setProperty('scale', v2_0.set(scaleX, scaleY), 0);
                  this.watermarkMat.setProperty('translate', v2_0.set(dw * this.textXTrans, textYTrans), 0);
                  this.watermarkMat.setProperty('percent', u_p);
                  this.watermarkMat.setProperty('u_projection', this.projection);
                  this.watermarkMat.passes[0].update();
                }
                this.frame();
              }
              initBG() {
                const device = this.device;
                this.bgMat = new Material();
                this.bgMat.initialize({
                  effectName: 'util/splash-screen'
                });
                const samplerInfo = new SamplerInfo();
                samplerInfo.addressU = Address.CLAMP;
                samplerInfo.addressV = Address.CLAMP;
                samplerInfo.addressW = Address.CLAMP;
                this.sampler = device.getSampler(samplerInfo);
                this.bgTexture = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST, Format.RGBA8, this.bgImage.width, this.bgImage.height));
                const pass = this.bgMat.passes[0];
                const binding = pass.getBinding('mainTexture');
                pass.bindTexture(binding, this.bgTexture);
                this.shader = pass.getShaderVariant();
                const descriptorSet = pass.descriptorSet;
                descriptorSet.bindSampler(binding, this.sampler);
                descriptorSet.update();
                const region = new BufferTextureCopy();
                region.texExtent.width = this.bgImage.width;
                region.texExtent.height = this.bgImage.height;
                region.texExtent.depth = 1;
                device.copyTexImagesToTexture([this.bgImage], this.bgTexture, [region]);
              }
              initLogo() {
                const device = this.device;
                this.logoMat = new Material();
                this.logoMat.initialize({
                  effectName: 'util/splash-screen'
                });
                const samplerInfo = new SamplerInfo();
                samplerInfo.addressU = Address.CLAMP;
                samplerInfo.addressV = Address.CLAMP;
                samplerInfo.addressW = Address.CLAMP;
                this.sampler = device.getSampler(samplerInfo);
                this.logoTexture = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST, Format.RGBA8, this.logoImage.width, this.logoImage.height));
                const pass = this.logoMat.passes[0];
                const binding = pass.getBinding('mainTexture');
                pass.bindTexture(binding, this.logoTexture);
                this.shader = pass.getShaderVariant();
                const descriptorSet = pass.descriptorSet;
                descriptorSet.bindSampler(binding, this.sampler);
                descriptorSet.update();
                const region = new BufferTextureCopy();
                region.texExtent.width = this.logoImage.width;
                region.texExtent.height = this.logoImage.height;
                region.texExtent.depth = 1;
                device.copyTexImagesToTexture([this.logoImage], this.logoTexture, [region]);
                const logoRatio = this.logoImage.width / this.logoImage.height;
                if (logoRatio < 1) {
                  this.logoWidth = this.logoWidthTemp;
                  this.logoHeight = this.logoWidthTemp / logoRatio;
                } else {
                  this.logoWidth = this.logoHeightTemp * logoRatio;
                  this.logoHeight = this.logoHeightTemp;
                }
              }
              initWaterMark() {
                const watermarkImg = ccwindow$1.document.createElement('canvas');
                watermarkImg.height = this.textHeight * this.scaleSize;
                watermarkImg.style.width = `${watermarkImg.width}`;
                watermarkImg.style.height = `${watermarkImg.height}`;
                const text = 'Created with Cocos';
                const ctx = watermarkImg.getContext('2d');
                ctx.font = `${this.textSize * this.scaleSize}px Arial`;
                ctx.textBaseline = 'top';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#707070';
                const textLength = ctx.measureText(text).width + 10;
                watermarkImg.width = textLength;
                ctx.font = `${this.textSize * this.scaleSize}px Arial`;
                ctx.textBaseline = 'top';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#707070';
                ctx.fillText(text, watermarkImg.width / 2, 0);
                const region = new BufferTextureCopy();
                region.texExtent.width = watermarkImg.width;
                region.texExtent.height = watermarkImg.height;
                region.texExtent.depth = 1;
                this.watermarkTexture = this.device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST, Format.RGBA8, watermarkImg.width, watermarkImg.height));
                this.device.copyTexImagesToTexture([watermarkImg], this.watermarkTexture, [region]);
                this.watermarkMat = new Material();
                this.watermarkMat.initialize({
                  effectName: 'util/splash-screen'
                });
                const pass = this.watermarkMat.passes[0];
                const binding = pass.getBinding('mainTexture');
                pass.bindTexture(binding, this.watermarkTexture);
                pass.descriptorSet.update();
              }
              frame() {
                const {
                  device,
                  swapchain
                } = this;
                if (!sys.isXR || xr.entry.isRenderAllowable()) {
                  const renderSize = sys.isXR ? 2 : 1;
                  for (let xrEye = 0; xrEye < renderSize; xrEye++) {
                    if (sys.isXR) {
                      xr.entry.renderLoopStart(xrEye);
                      const xrFov = xr.entry.getEyeFov(xrEye);
                      let radioLeft = 1.0;
                      let radioRight = 1.0;
                      if (xrEye === XREye.LEFT) {
                        radioLeft = Math.abs(Math.tan(xrFov[0])) / Math.abs(Math.tan(xrFov[1]));
                      } else if (xrEye === XREye.RIGHT) {
                        radioRight = Math.abs(Math.tan(xrFov[1])) / Math.abs(Math.tan(xrFov[0]));
                      }
                      Mat4.ortho(this.projection, -radioLeft, radioRight, -1, 1, -1, 1, device.capabilities.clipSpaceMinZ, device.capabilities.clipSpaceSignY, swapchain.surfaceTransform);
                      this.projection.m00 = preTransforms[swapchain.surfaceTransform][0];
                      this.projection.m05 = preTransforms[swapchain.surfaceTransform][3] * device.capabilities.clipSpaceSignY;
                      if (this.settings.background.type === 'custom') {
                        this.bgMat.setProperty('u_projection', this.projection);
                        this.bgMat.passes[0].update();
                      }
                      if (this.settings.logo.type !== 'none') {
                        this.logoMat.setProperty('u_projection', this.projection);
                        this.logoMat.passes[0].update();
                      }
                      if (this.settings.logo.type === 'default' && this.watermarkMat) {
                        this.watermarkMat.setProperty('u_projection', this.projection);
                        this.watermarkMat.passes[0].update();
                      }
                    }
                    device.enableAutoBarrier(true);
                    device.acquire([swapchain]);
                    const cmdBuff = this.cmdBuff;
                    const framebuffer = legacyCC.director.root.mainWindow.framebuffer;
                    const renderArea = this.renderArea;
                    renderArea.width = swapchain.width;
                    renderArea.height = swapchain.height;
                    cmdBuff.begin();
                    cmdBuff.beginRenderPass(framebuffer.renderPass, framebuffer, renderArea, this.clearColors, 1.0, 0);
                    if (this.settings.background.type === 'custom') {
                      const bgPass = this.bgMat.passes[0];
                      const bgPso = PipelineStateManager.getOrCreatePipelineState(device, bgPass, this.shader, framebuffer.renderPass, this.quadAssmebler);
                      cmdBuff.bindPipelineState(bgPso);
                      cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, bgPass.descriptorSet);
                      cmdBuff.bindInputAssembler(this.quadAssmebler);
                      cmdBuff.draw(this.quadAssmebler);
                    }
                    if (this.settings.logo.type !== 'none') {
                      const logoPass = this.logoMat.passes[0];
                      const logoPso = PipelineStateManager.getOrCreatePipelineState(device, logoPass, this.shader, framebuffer.renderPass, this.quadAssmebler);
                      cmdBuff.bindPipelineState(logoPso);
                      cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, logoPass.descriptorSet);
                      cmdBuff.bindInputAssembler(this.quadAssmebler);
                      cmdBuff.draw(this.quadAssmebler);
                    }
                    if (this.settings.logo.type === 'default' && this.watermarkMat) {
                      const wartermarkPass = this.watermarkMat.passes[0];
                      const watermarkPso = PipelineStateManager.getOrCreatePipelineState(device, wartermarkPass, this.shader, framebuffer.renderPass, this.quadAssmebler);
                      cmdBuff.bindPipelineState(watermarkPso);
                      cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, wartermarkPass.descriptorSet);
                      cmdBuff.bindInputAssembler(this.quadAssmebler);
                      cmdBuff.draw(this.quadAssmebler);
                    }
                    cmdBuff.endRenderPass();
                    cmdBuff.end();
                    device.flushCommands([cmdBuff]);
                    device.queue.submit([cmdBuff]);
                    device.present();
                    device.enableAutoBarrier(!legacyCC.rendering);
                    if (sys.isXR) {
                      xr.entry.renderLoopEnd(xrEye);
                    }
                  }
                }
              }
              destroy() {
                this.device = null;
                this.swapchain = null;
                this.clearColors = null;
                if (this.settings.background.type === 'custom') {
                  if (this.bgImage.destroy) this.bgImage.destroy();
                  this.bgImage = null;
                  this.bgMat.destroy();
                  this.bgMat = null;
                  this.bgTexture.destroy();
                  this.bgTexture = null;
                }
                if (this.settings.logo.type !== 'none') {
                  if (this.logoImage.destroy) this.logoImage.destroy();
                  this.logoImage = null;
                  this.logoMat.destroy();
                  this.logoMat = null;
                  this.logoTexture.destroy();
                  this.logoTexture = null;
                }
                this.renderArea = null;
                this.cmdBuff = null;
                this.shader = null;
                this.quadAssmebler.destroy();
                this.quadAssmebler = null;
                this.vertexBuffers.destroy();
                this.vertexBuffers = null;
                this.indicesBuffers.destroy();
                this.indicesBuffers = null;
                this.sampler = null;
                if (this.settings.logo.type === 'default' && this.watermarkTexture) {
                  this.watermarkMat.destroy();
                  this.watermarkMat = null;
                  this.watermarkTexture.destroy();
                  this.watermarkTexture = null;
                }
                this.settings = null;
              }
              static get instance() {
                if (!SplashScreen._ins) {
                  SplashScreen._ins = new SplashScreen();
                }
                return SplashScreen._ins;
              }
              constructor() {
                this.settings = void 0;
                this._curTime = 0;
                this.device = void 0;
                this.swapchain = void 0;
                this.shader = void 0;
                this.sampler = void 0;
                this.cmdBuff = void 0;
                this.quadAssmebler = void 0;
                this.vertexBuffers = void 0;
                this.indicesBuffers = void 0;
                this.renderArea = void 0;
                this.clearColors = void 0;
                this.projection = void 0;
                this.isMobile = false;
                this.bgMat = void 0;
                this.bgImage = void 0;
                this.bgTexture = void 0;
                this.logoMat = void 0;
                this.logoImage = void 0;
                this.logoTexture = void 0;
                this.watermarkMat = void 0;
                this.watermarkTexture = void 0;
                this.bgWidth = 1920;
                this.bgHeight = 1080;
                this.bgRatio = 16 / 9;
                this.logoWidthTemp = 140;
                this.logoHeightTemp = 200;
                this.logoWidth = 0;
                this.logoHeight = 0;
                this.logoXTrans = 1 / 2;
                this.logoYTrans = 1 / 6 + 2.5 / 6;
                this.textSize = 24;
                this.textHeight = 24;
                this.textXTrans = 1 / 2;
                this.textYExtraTrans = 32;
                this.textExpandSize = 4;
                this.scaleSize = 1;
              }
            }
            SplashScreen._ins = void 0;
            legacyCC.internal.SplashScreen = SplashScreen;

            class EffectSettings {
              constructor() {
                this._data = null;
              }
              init(path = '') {
                if (!legacyCC.rendering || !legacyCC.rendering.enableEffectImport || !path) {
                  return Promise.resolve();
                }
                return new Promise((resolve, reject) => {
                  if (!path.startsWith('http')) {
                    fsUtils.readArrayBuffer(path, (err, arrayBuffer) => {
                      if (err) {
                        reject(err);
                        return;
                      }
                      this._data = arrayBuffer;
                      resolve();
                    });
                  } else {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', path);
                    xhr.responseType = 'arraybuffer';
                    xhr.onload = () => {
                      this._data = xhr.response;
                      resolve();
                    };
                    xhr.onerror = () => {
                      reject(new Error('request effect settings failed!'));
                    };
                    xhr.send(null);
                  }
                });
              }
              get data() {
                return this._data;
              }
            }
            const effectSettings = new EffectSettings();
            legacyCC.effectSettings = effectSettings;

            class Game extends EventTarget {
              constructor(...args) {
                super(...args);
                this.frame = null;
                this.container = null;
                this.canvas = null;
                this.renderType = -1;
                this.eventTargetOn = super.on;
                this.eventTargetOnce = super.once;
                this.config = {};
                this.onStart = null;
                this.frameTime = 1000 / 60;
                this._isCloning = false;
                this._inited = false;
                this._engineInited = false;
                this._rendererInitialized = false;
                this._paused = true;
                this._pausedByEngine = false;
                this._frameRate = 60;
                this._pacer = null;
                this._initTime = 0;
                this._startTime = 0;
                this._deltaTime = 0.0;
                this._useFixedDeltaTime = false;
                this._shouldLoadLaunchScene = true;
                this.onPreBaseInitDelegate = new AsyncDelegate();
                this.onPostBaseInitDelegate = new AsyncDelegate();
                this.onPreInfrastructureInitDelegate = new AsyncDelegate();
                this.onPostInfrastructureInitDelegate = new AsyncDelegate();
                this.onPreSubsystemInitDelegate = new AsyncDelegate();
                this.onPostSubsystemInitDelegate = new AsyncDelegate();
                this.onPreProjectInitDelegate = new AsyncDelegate();
                this.onPostProjectInitDelegate = new AsyncDelegate();
              }
              get inited() {
                return this._inited;
              }
              get frameRate() {
                return this._frameRate;
              }
              set frameRate(frameRate) {
                if (typeof frameRate !== 'number') {
                  frameRate = parseInt(frameRate, 10);
                  if (Number.isNaN(frameRate)) {
                    frameRate = 60;
                  }
                }
                this._frameRate = frameRate;
                this.frameTime = 1000 / frameRate;
                if (this._pacer) this._pacer.targetFrameRate = this._frameRate;
              }
              get deltaTime() {
                return this._useFixedDeltaTime ? this.frameTime / 1000 : this._deltaTime;
              }
              get totalTime() {
                return performance.now() - this._initTime;
              }
              get frameStartTime() {
                return this._startTime;
              }
              setFrameRate(frameRate) {
                this.frameRate = frameRate;
              }
              getFrameRate() {
                return this.frameRate;
              }
              step() {
                director.tick(this._calculateDT(true));
              }
              pauseByEngine() {
                if (this._paused) {
                  return;
                }
                this._pausedByEngine = true;
                this.pause();
              }
              resumeByEngine() {
                if (this._pausedByEngine) {
                  this.resume();
                  this._pausedByEngine = false;
                }
              }
              pause() {
                var _this$_pacer;
                if (this._paused) {
                  return;
                }
                this._paused = true;
                (_this$_pacer = this._pacer) === null || _this$_pacer === void 0 ? void 0 : _this$_pacer.stop();
                this.emit(Game.EVENT_PAUSE);
              }
              resume() {
                var _this$_pacer2;
                if (!this._paused) {
                  return;
                }
                input._clearEvents();
                this._paused = false;
                (_this$_pacer2 = this._pacer) === null || _this$_pacer2 === void 0 ? void 0 : _this$_pacer2.start();
                this.emit(Game.EVENT_RESUME);
              }
              isPaused() {
                return this._paused;
              }
              restart() {
                const endFramePromise = new Promise(resolve => {
                  director.once(Director.EVENT_END_FRAME, () => resolve());
                });
                return endFramePromise.then(() => {
                  director.reset();
                  legacyCC.Object._deferredDestroy();
                  this.pause();
                  this.resume();
                  this._shouldLoadLaunchScene = true;
                  SplashScreen.instance.curTime = 0;
                  this._safeEmit(Game.EVENT_RESTART);
                });
              }
              end() {
                systemInfo.close();
              }
              on(type, callback, target, once) {
                if (this.canRegisterEvent(type)) {
                  callback.call(target);
                }
                return this.eventTargetOn(type, callback, target, once);
              }
              once(type, callback, target) {
                if (this.canRegisterEvent(type)) {
                  return callback.call(target);
                }
                return this.eventTargetOnce(type, callback, target);
              }
              canRegisterEvent(type) {
                return this._engineInited && type === Game.EVENT_ENGINE_INITED || this._inited && type === Game.EVENT_GAME_INITED || this._rendererInitialized && type === Game.EVENT_RENDERER_INITED;
              }
              init(config) {
                this._compatibleWithOldParams(config);
                return Promise.resolve().then(() => {
                  this.emit(Game.EVENT_PRE_BASE_INIT);
                  return this.onPreBaseInitDelegate.dispatch();
                }).then(() => {
                  {
                    console.time('Init Base');
                  }
                  const debugMode = config.debugMode || DebugMode.NONE;
                  _resetDebugSetting(debugMode);
                }).then(() => sys.init()).then(() => {
                  this._initEvents();
                }).then(() => settings.init(config.settingsPath, config.overrideSettings)).then(() => {
                  {
                    console.timeEnd('Init Base');
                  }
                  this.emit(Game.EVENT_POST_BASE_INIT);
                  return this.onPostBaseInitDelegate.dispatch();
                }).then(() => {
                  this.emit(Game.EVENT_PRE_INFRASTRUCTURE_INIT);
                  return this.onPreInfrastructureInitDelegate.dispatch();
                }).then(() => {
                  {
                    console.time('Init Infrastructure');
                  }
                  macro.init();
                  this._initXR();
                  const adapter = findCanvas();
                  if (adapter) {
                    this.canvas = adapter.canvas;
                    this.frame = adapter.frame;
                    this.container = adapter.container;
                  }
                  screen.init();
                  garbageCollectionManager.init();
                  deviceManager.init(this.canvas, bindingMappingInfo);
                  const renderPipelineUuid = settings.querySettings(Settings.Category.RENDERING, 'renderPipeline');
                  if (renderPipelineUuid === 'ca127c79-69d6-4afd-8183-d712d7b80e14') {
                    if (!macro.CUSTOM_PIPELINE_NAME) {
                      macro.CUSTOM_PIPELINE_NAME = 'Forward';
                    }
                  }
                  if (macro.CUSTOM_PIPELINE_NAME === '') {
                    legacyCC.rendering = undefined;
                  }
                  assetManager.init();
                  builtinResMgr.init();
                  Layers.init();
                  this.initPacer();
                  {
                    console.timeEnd('Init Infrastructure');
                  }
                }).then(() => {
                  this.emit(Game.EVENT_POST_INFRASTRUCTURE_INIT);
                  return this.onPostInfrastructureInitDelegate.dispatch();
                }).then(() => {
                  this.emit(Game.EVENT_PRE_SUBSYSTEM_INIT);
                  return this.onPreSubsystemInitDelegate.dispatch();
                }).then(() => effectSettings.init(settings.querySettings(Settings.Category.RENDERING, 'effectSettingsPath'))).then(() => {
                  if (!legacyCC.rendering || !legacyCC.rendering.enableEffectImport) {
                    return;
                  }
                  const renderMode = settings.querySettings(Settings.Category.RENDERING, 'renderMode');
                  if (renderMode === LegacyRenderMode.HEADLESS) {
                    legacyCC.rendering.init(deviceManager.gfxDevice, null);
                    return;
                  }
                  const data = effectSettings.data;
                  if (data === null) {
                    errorID(1102);
                    return;
                  }
                  legacyCC.rendering.init(deviceManager.gfxDevice, data);
                }).then(() => {
                  const scriptPackages = settings.querySettings(Settings.Category.SCRIPTING, 'scriptPackages');
                  if (scriptPackages) {
                    return Promise.all(scriptPackages.map(pack => module.import(pack)));
                  }
                  return Promise.resolve([]);
                }).then(() => {
                  {
                    console.time('Init SubSystem');
                  }
                  director.init();
                  return builtinResMgr.loadBuiltinAssets();
                }).then(() => {
                  {
                    console.timeEnd('Init SubSystem');
                  }
                  this.emit(Game.EVENT_POST_SUBSYSTEM_INIT);
                  return this.onPostSubsystemInitDelegate.dispatch();
                }).then(() => {
                  log(`Cocos Creator v${engineVersion}`);
                  this.emit(Game.EVENT_ENGINE_INITED);
                  this._engineInited = true;
                }).then(() => {
                  this.emit(Game.EVENT_PRE_PROJECT_INIT);
                  return this.onPreProjectInitDelegate.dispatch();
                }).then(() => {
                  {
                    console.time('Init Project');
                  }
                  const jsList = settings.querySettings(Settings.Category.PLUGINS, 'jsList');
                  let promise = Promise.resolve();
                  if (jsList) {
                    jsList.forEach(jsListFile => {
                      promise = promise.then(() => loadJsFile(`${'plugins' }/${jsListFile}`));
                    });
                  }
                  return promise;
                }).then(() => this._loadProjectBundles()).then(() => this._loadCCEScripts()).then(() => this._setupRenderPipeline()).then(() => this._loadPreloadAssets()).then(() => {
                  builtinResMgr.compileBuiltinMaterial();
                  return SplashScreen.instance.init();
                }).then(() => {
                  {
                    console.timeEnd('Init Project');
                  }
                  this.emit(Game.EVENT_POST_PROJECT_INIT);
                  return this.onPostProjectInitDelegate.dispatch();
                }).then(() => {
                  this._inited = true;
                  this._safeEmit(Game.EVENT_GAME_INITED);
                });
              }
              _initXR() {
                var _settings$querySettin;
                if (typeof globalThis.__globalXR === 'undefined') {
                  globalThis.__globalXR = {};
                }
                const globalXR = globalThis.__globalXR;
                globalXR.webxrCompatible = (_settings$querySettin = settings.querySettings(Settings.Category.XR, 'webxrCompatible')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : false;
                if (sys.isXR) {
                  var _settings$querySettin2, _settings$querySettin3;
                  xr.entry = xr.XrEntry.getInstance();
                  const xrMSAA = (_settings$querySettin2 = settings.querySettings(Settings.Category.RENDERING, 'msaa')) !== null && _settings$querySettin2 !== void 0 ? _settings$querySettin2 : 1;
                  const xrRenderingScale = (_settings$querySettin3 = settings.querySettings(Settings.Category.RENDERING, 'renderingScale')) !== null && _settings$querySettin3 !== void 0 ? _settings$querySettin3 : 1.0;
                  xr.entry.setMultisamplesRTT(xrMSAA);
                  xr.entry.setRenderingScale(xrRenderingScale);
                }
              }
              _compatibleWithOldParams(config) {
                const overrideSettings = config.overrideSettings = config.overrideSettings || {};
                if ('showFPS' in config) {
                  overrideSettings.profiling = overrideSettings.profiling || {};
                  overrideSettings.profiling.showFPS = config.showFPS;
                }
                if ('frameRate' in config) {
                  overrideSettings.screen = overrideSettings.screen || {};
                  overrideSettings.screen.frameRate = config.frameRate;
                }
                if ('renderMode' in config) {
                  overrideSettings.rendering = overrideSettings.rendering || {};
                  overrideSettings.rendering.renderMode = config.renderMode;
                }
                if ('renderPipeline' in config) {
                  overrideSettings.rendering = overrideSettings.rendering || {};
                  overrideSettings.rendering.renderPipeline = config.renderPipeline;
                }
                if ('assetOptions' in config) {
                  overrideSettings.assets = overrideSettings.assets || {};
                  Object.assign(overrideSettings.assets, config.assetOptions);
                }
                if ('customJointTextureLayouts' in config) {
                  overrideSettings.animation = overrideSettings.animation || {};
                  overrideSettings.animation.customJointTextureLayouts = config.customJointTextureLayouts;
                }
                if ('physics' in config) {
                  overrideSettings.physics = overrideSettings.physics || {};
                  Object.assign(overrideSettings.physics, config.physics);
                }
                if ('orientation' in config) {
                  overrideSettings.screen = overrideSettings.screen || {};
                  overrideSettings.screen.orientation = config.orientation;
                }
                if ('exactFitScreen' in config) {
                  overrideSettings.screen = overrideSettings.screen || {};
                  overrideSettings.screen.exactFitScreen = config.exactFitScreen;
                }
              }
              _loadPreloadAssets() {
                const preloadAssets = settings.querySettings(Settings.Category.ASSETS, 'preloadAssets');
                if (!preloadAssets) return Promise.resolve([]);
                return Promise.all(preloadAssets.map(uuid => new Promise((resolve, reject) => {
                  assetManager.loadAny(uuid, err => {
                    if (err) {
                      reject(err);
                      return;
                    }
                    resolve();
                  });
                })));
              }
              _loadCCEScripts() {
                return new Promise((resolve, reject) => {
                  {
                    resolve();
                  }
                });
              }
              _loadProjectBundles() {
                const preloadBundles = settings.querySettings(Settings.Category.ASSETS, 'preloadBundles');
                if (!preloadBundles) return Promise.resolve([]);
                return Promise.all(preloadBundles.map(({
                  bundle,
                  version
                }) => new Promise((resolve, reject) => {
                  const opts = {};
                  if (version) opts.version = version;
                  assetManager.loadBundle(bundle, opts, err => {
                    if (err) {
                      reject(err);
                      return;
                    }
                    resolve();
                  });
                })));
              }
              run(onStart) {
                if (onStart) {
                  this.onStart = onStart;
                }
                if (!this._inited || EDITOR_NOT_IN_PREVIEW) {
                  return;
                }
                this.resume();
              }
              _calculateDT(useFixedDeltaTime) {
                this._useFixedDeltaTime = useFixedDeltaTime;
                if (useFixedDeltaTime) {
                  this._startTime = performance.now();
                  return this.frameTime / 1000;
                }
                const now = performance.now();
                this._deltaTime = now > this._startTime ? (now - this._startTime) / 1000 : 0;
                if (this._deltaTime > Game.DEBUG_DT_THRESHOLD) {
                  this._deltaTime = this.frameTime / 1000;
                }
                this._startTime = now;
                return this._deltaTime;
              }
              _updateCallback() {
                if (!this._inited) return;
                if (!SplashScreen.instance.isFinished) {
                  SplashScreen.instance.update(this._calculateDT(false));
                } else if (this._shouldLoadLaunchScene) {
                  this._shouldLoadLaunchScene = false;
                  const launchScene = settings.querySettings(Settings.Category.LAUNCH, 'launchScene');
                  if (launchScene) {
                    director.loadScene(launchScene, () => {
                      var _this$onStart;
                      logID(1103, launchScene);
                      this._initTime = performance.now();
                      director.startAnimation();
                      (_this$onStart = this.onStart) === null || _this$onStart === void 0 ? void 0 : _this$onStart.call(this);
                    });
                  } else {
                    var _this$onStart2;
                    this._initTime = performance.now();
                    director.startAnimation();
                    (_this$onStart2 = this.onStart) === null || _this$onStart2 === void 0 ? void 0 : _this$onStart2.call(this);
                  }
                } else {
                  director.tick(this._calculateDT(false));
                }
              }
              initPacer() {
                var _settings$querySettin4;
                const frameRate = (_settings$querySettin4 = settings.querySettings(Settings.Category.SCREEN, 'frameRate')) !== null && _settings$querySettin4 !== void 0 ? _settings$querySettin4 : 60;
                assert(typeof frameRate === 'number');
                this._pacer = new Pacer();
                this._pacer.onTick = this._updateCallback.bind(this);
                this.frameRate = frameRate;
              }
              _initEvents() {
                systemInfo.on('show', this._onShow, this);
                systemInfo.on('hide', this._onHide, this);
                systemInfo.on('close', this._onClose, this);
              }
              _onHide() {
                this.emit(Game.EVENT_HIDE);
                this.pauseByEngine();
              }
              _onShow() {
                this.emit(Game.EVENT_SHOW);
                this.resumeByEngine();
              }
              _onClose() {
                this.emit(Game.EVENT_CLOSE);
                systemInfo.exit();
              }
              addPersistRootNode(node) {
                director.addPersistRootNode(node);
              }
              removePersistRootNode(node) {
                director.removePersistRootNode(node);
              }
              isPersistRootNode(node) {
                return director.isPersistRootNode(node);
              }
              _setupRenderPipeline() {
                const renderPipeline = settings.querySettings(Settings.Category.RENDERING, 'renderPipeline');
                if (!renderPipeline || renderPipeline === 'ca127c79-69d6-4afd-8183-d712d7b80e14') {
                  return this._setRenderPipeline();
                }
                return new Promise((resolve, reject) => {
                  assetManager.loadAny(renderPipeline, (err, asset) => err || !(asset instanceof RenderPipeline) ? reject(err) : resolve(asset));
                }).then(asset => {
                  this._setRenderPipeline(asset);
                }).catch(reason => {
                  warn(reason);
                  warn(`Failed load render pipeline: ${renderPipeline}, engine failed to initialize, will fallback to default pipeline`);
                  this._setRenderPipeline();
                });
              }
              _setRenderPipeline(rppl) {
                if (!director.root.setRenderPipeline(rppl)) {
                  this._setRenderPipeline();
                }
                this._rendererInitialized = true;
                this._safeEmit(Game.EVENT_RENDERER_INITED);
              }
              _safeEmit(event) {
                {
                  this.emit(event);
                }
              }
            } exports('G', Game);
            Game.EVENT_HIDE = 'game_on_hide';
            Game.EVENT_SHOW = 'game_on_show';
            Game.EVENT_LOW_MEMORY = 'game_on_low_memory';
            Game.EVENT_GAME_INITED = 'game_inited';
            Game.EVENT_ENGINE_INITED = 'engine_inited';
            Game.EVENT_RENDERER_INITED = 'renderer_inited';
            Game.EVENT_PRE_BASE_INIT = 'pre_base_init';
            Game.EVENT_POST_BASE_INIT = 'post_base_init';
            Game.EVENT_PRE_INFRASTRUCTURE_INIT = 'pre_infrastructure_init';
            Game.EVENT_POST_INFRASTRUCTURE_INIT = 'post_infrastructure_init';
            Game.EVENT_PRE_SUBSYSTEM_INIT = 'pre_subsystem_init';
            Game.EVENT_POST_SUBSYSTEM_INIT = 'post_subsystem_init';
            Game.EVENT_PRE_PROJECT_INIT = 'pre_project_init';
            Game.EVENT_POST_PROJECT_INIT = 'post_project_init';
            Game.EVENT_RESTART = 'game_on_restart';
            Game.EVENT_PAUSE = 'game_on_pause';
            Game.EVENT_RESUME = 'game_on_resume';
            Game.EVENT_CLOSE = 'game_on_close';
            Game.RENDER_TYPE_CANVAS = 0;
            Game.RENDER_TYPE_WEBGL = 1;
            Game.RENDER_TYPE_OPENGL = 2;
            Game.RENDER_TYPE_HEADLESS = 3;
            Game.DEBUG_DT_THRESHOLD = 1;
            legacyCC.Game = Game;
            const game = exports('g', legacyCC.game = new Game());

            markAsWarning(Director.prototype, 'director', [{
              name: 'calculateDeltaTime'
            }, {
              name: 'getDeltaTime',
              suggest: 'Use game.deltaTime instead'
            }, {
              name: 'getTotalTime',
              suggest: 'Use game.totalTime instead'
            }, {
              name: 'getCurrentTime',
              suggest: 'Use game.frameStartTime instead'
            }]);
            removeProperty(Director.prototype, 'director', [{
              name: 'setAnimationInterval',
              suggest: 'please use game.frameRate instead'
            }, {
              name: 'getAnimationInterval',
              suggest: 'please use game.frameRate instead'
            }, {
              name: 'getRunningScene',
              suggest: 'please use getScene instead'
            }, {
              name: 'setDepthTest',
              suggest: 'please use camera API instead'
            }, {
              name: 'setClearColor',
              suggest: 'please use camera API instead'
            }, {
              name: 'getWinSize',
              suggest: 'please use view.getVisibleSize instead'
            }, {
              name: 'getWinSizeInPixels'
            }, {
              name: 'purgeCachedData',
              suggest: 'please use assetManager.releaseAll instead'
            }, {
              name: 'convertToGL'
            }, {
              name: 'convertToUI'
            }]);
            replaceProperty(director, 'director', [{
              name: '_getSceneUuid',
              targetName: 'assetManager.main',
              newName: 'getSceneInfo',
              customFunction: sceneName => {
                if (assetManager.main) {
                  var _assetManager$main$ge;
                  return (_assetManager$main$ge = assetManager.main.getSceneInfo(sceneName)) === null || _assetManager$main$ge === void 0 ? void 0 : _assetManager$main$ge.uuid;
                }
                return '';
              }
            }]);
            markAsWarning(game, 'game', [{
              name: 'collisionMatrix'
            }, {
              name: 'groupList'
            }]);
            replaceProperty(game, 'game', [{
              name: '_sceneInfos',
              targetName: 'assetManager.main',
              newName: 'getSceneInfo',
              customGetter: () => {
                const scenes = [];
                if (assetManager.main) {
                  assetManager.main.config.scenes.forEach(val => {
                    scenes.push(val);
                  });
                }
                return scenes;
              }
            }]);

        })
    };
}));
