System.register("q-bundled:///fs/cocos/rendering/deferred/deferred-pipeline.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../asset/asset-manager/builtin-res-mgr.js", "../render-pipeline.js", "./main-flow.js", "../pipeline-serialization.js", "../shadow/shadow-flow.js", "../../gfx/index.js", "../define.js", "../../core/platform/debug.js", "./deferred-pipeline-scene-data.js", "../pipeline-event.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, type, serializable, EDITOR, builtinResMgr, RenderPipeline, PipelineRenderData, PipelineInputAssemblerData, MainFlow, RenderTextureConfig, ShadowFlow, Format, StoreOp, ColorAttachment, DepthStencilAttachment, LoadOp, RenderPassInfo, AccessFlagBit, TextureInfo, TextureType, TextureUsageBit, FramebufferInfo, GeneralBarrierInfo, UBOGlobal, UBOCamera, UBOShadow, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, errorID, DeferredPipelineSceneData, PipelineEventType, _dec, _dec2, _dec3, _class2, _class3, _initializer, PIPELINE_TYPE, DeferredRenderData, DeferredPipeline;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) Huawei Technologies Co., Ltd. 2020-2021.
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
                                                                                                                                                                                                           */ /**
                                                                                                                                                                                                               * @category pipeline
                                                                                                                                                                                                               */
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_assetAssetManagerBuiltinResMgrJs) {
      builtinResMgr = _assetAssetManagerBuiltinResMgrJs.builtinResMgr;
    }, function (_renderPipelineJs) {
      RenderPipeline = _renderPipelineJs.RenderPipeline;
      PipelineRenderData = _renderPipelineJs.PipelineRenderData;
      PipelineInputAssemblerData = _renderPipelineJs.PipelineInputAssemblerData;
    }, function (_mainFlowJs) {
      MainFlow = _mainFlowJs.MainFlow;
    }, function (_pipelineSerializationJs) {
      RenderTextureConfig = _pipelineSerializationJs.RenderTextureConfig;
    }, function (_shadowShadowFlowJs) {
      ShadowFlow = _shadowShadowFlowJs.ShadowFlow;
    }, function (_gfxIndexJs) {
      Format = _gfxIndexJs.Format;
      StoreOp = _gfxIndexJs.StoreOp;
      ColorAttachment = _gfxIndexJs.ColorAttachment;
      DepthStencilAttachment = _gfxIndexJs.DepthStencilAttachment;
      LoadOp = _gfxIndexJs.LoadOp;
      RenderPassInfo = _gfxIndexJs.RenderPassInfo;
      AccessFlagBit = _gfxIndexJs.AccessFlagBit;
      TextureInfo = _gfxIndexJs.TextureInfo;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      FramebufferInfo = _gfxIndexJs.FramebufferInfo;
      GeneralBarrierInfo = _gfxIndexJs.GeneralBarrierInfo;
    }, function (_defineJs) {
      UBOGlobal = _defineJs.UBOGlobal;
      UBOCamera = _defineJs.UBOCamera;
      UBOShadow = _defineJs.UBOShadow;
      UNIFORM_SHADOWMAP_BINDING = _defineJs.UNIFORM_SHADOWMAP_BINDING;
      UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING = _defineJs.UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING;
    }, function (_corePlatformDebugJs) {
      errorID = _corePlatformDebugJs.errorID;
    }, function (_deferredPipelineSceneDataJs) {
      DeferredPipelineSceneData = _deferredPipelineSceneDataJs.DeferredPipelineSceneData;
    }, function (_pipelineEventJs) {
      PipelineEventType = _pipelineEventJs.PipelineEventType;
    }],
    execute: function () {
      PIPELINE_TYPE = 1;
      _export("DeferredRenderData", DeferredRenderData = /*#__PURE__*/function (_PipelineRenderData) {
        _inheritsLoose(DeferredRenderData, _PipelineRenderData);
        function DeferredRenderData() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PipelineRenderData.call.apply(_PipelineRenderData, [this].concat(args)) || this;
          _this.gbufferFrameBuffer = null;
          _this.gbufferRenderTargets = [];
          return _this;
        }
        return DeferredRenderData;
      }(PipelineRenderData));
      /**
       * @en The deferred render pipeline
       * @zh 延迟渲染管线。
       */
      _export("DeferredPipeline", DeferredPipeline = (_dec = ccclass('DeferredPipeline'), _dec2 = type([RenderTextureConfig]), _dec3 = displayOrder(2), _dec(_class2 = (_class3 = /*#__PURE__*/function (_RenderPipeline) {
        _inheritsLoose(DeferredPipeline, _RenderPipeline);
        function DeferredPipeline() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _RenderPipeline.call.apply(_RenderPipeline, [this].concat(args)) || this;
          _this2._gbufferRenderPass = null;
          _this2._lightingRenderPass = null;
          _this2.renderTextures = _initializer && _initializer();
          return _this2;
        }
        var _proto = DeferredPipeline.prototype;
        _proto.initialize = function initialize(info) {
          _RenderPipeline.prototype.initialize.call(this, info);
          if (this._flows.length === 0) {
            var shadowFlow = new ShadowFlow();
            shadowFlow.initialize(ShadowFlow.initInfo);
            this._flows.push(shadowFlow);
            var mainFlow = new MainFlow();
            mainFlow.initialize(MainFlow.initInfo);
            this._flows.push(mainFlow);
          }
          return true;
        };
        _proto.activate = function activate(swapchain) {
          if (EDITOR) {
            console.info('Deferred render pipeline initialized. ' + 'Note that non-transparent materials with no lighting will not be rendered, such as builtin-unlit.');
          }
          this._macros = {
            CC_PIPELINE_TYPE: PIPELINE_TYPE
          };
          this._pipelineSceneData = new DeferredPipelineSceneData();
          if (!_RenderPipeline.prototype.activate.call(this, swapchain)) {
            return false;
          }
          if (!this._activeRenderer(swapchain)) {
            errorID(2402);
            return false;
          }
          return true;
        };
        _proto.destroy = function destroy() {
          this._destroyUBOs();
          this._destroyQuadInputAssembler();
          this._destroyDeferredData();
          var rpIter = this._renderPasses.values();
          var rpRes = rpIter.next();
          while (!rpRes.done) {
            rpRes.value.destroy();
            rpRes = rpIter.next();
          }
          this._commandBuffers.length = 0;
          return _RenderPipeline.prototype.destroy.call(this);
        };
        _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          this.pipelineSceneData.updatePipelineSceneData();
        };
        _proto.getPipelineRenderData = function getPipelineRenderData() {
          if (!this._pipelineRenderData) {
            this._generateDeferredRenderData();
          }
          return this._pipelineRenderData;
        };
        _proto._activeRenderer = function _activeRenderer(swapchain) {
          var device = this.device;
          this._commandBuffers.push(device.commandBuffer);
          var sampler = this.globalDSManager.pointSampler;
          this._descriptorSet.bindSampler(UNIFORM_SHADOWMAP_BINDING, sampler);
          this._descriptorSet.bindTexture(UNIFORM_SHADOWMAP_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
          this._descriptorSet.bindSampler(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, sampler);
          this._descriptorSet.bindTexture(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
          this._descriptorSet.update();
          var inputAssemblerDataOffscreen = new PipelineInputAssemblerData();
          inputAssemblerDataOffscreen = this._createQuadInputAssembler();
          if (!inputAssemblerDataOffscreen.quadIB || !inputAssemblerDataOffscreen.quadVB || !inputAssemblerDataOffscreen.quadIA) {
            return false;
          }
          this._quadIB = inputAssemblerDataOffscreen.quadIB;
          this._quadVBOffscreen = inputAssemblerDataOffscreen.quadVB;
          this._quadIAOffscreen = inputAssemblerDataOffscreen.quadIA;
          var inputAssemblerDataOnscreen = this._createQuadInputAssembler();
          if (!inputAssemblerDataOnscreen.quadIB || !inputAssemblerDataOnscreen.quadVB || !inputAssemblerDataOnscreen.quadIA) {
            return false;
          }
          this._quadVBOnscreen = inputAssemblerDataOnscreen.quadVB;
          this._quadIAOnscreen = inputAssemblerDataOnscreen.quadIA;
          if (!this._gbufferRenderPass) {
            var colorAttachment0 = new ColorAttachment();
            colorAttachment0.format = Format.RGBA16F;
            colorAttachment0.loadOp = LoadOp.CLEAR; // should clear color attachment
            colorAttachment0.storeOp = StoreOp.STORE;
            var colorAttachment1 = new ColorAttachment();
            colorAttachment1.format = Format.RGBA16F;
            colorAttachment1.loadOp = LoadOp.CLEAR; // should clear color attachment
            colorAttachment1.storeOp = StoreOp.STORE;
            var colorAttachment2 = new ColorAttachment();
            colorAttachment2.format = Format.RGBA16F;
            colorAttachment2.loadOp = LoadOp.CLEAR; // should clear color attachment
            colorAttachment2.storeOp = StoreOp.STORE;
            var depthStencilAttachment = new DepthStencilAttachment();
            depthStencilAttachment.format = Format.DEPTH_STENCIL;
            depthStencilAttachment.depthLoadOp = LoadOp.CLEAR;
            depthStencilAttachment.depthStoreOp = StoreOp.STORE;
            depthStencilAttachment.stencilLoadOp = LoadOp.CLEAR;
            depthStencilAttachment.stencilStoreOp = StoreOp.STORE;
            var renderPassInfo = new RenderPassInfo([colorAttachment0, colorAttachment1, colorAttachment2], depthStencilAttachment);
            this._gbufferRenderPass = device.createRenderPass(renderPassInfo);
          }
          if (!this._lightingRenderPass) {
            var colorAttachment = new ColorAttachment();
            colorAttachment.format = Format.RGBA8;
            colorAttachment.loadOp = LoadOp.CLEAR; // should clear color attachment
            colorAttachment.storeOp = StoreOp.STORE;
            colorAttachment.barrier = device.getGeneralBarrier(new GeneralBarrierInfo(AccessFlagBit.NONE, AccessFlagBit.COLOR_ATTACHMENT_WRITE));
            var _depthStencilAttachment = new DepthStencilAttachment();
            _depthStencilAttachment.format = Format.DEPTH_STENCIL;
            _depthStencilAttachment.depthLoadOp = LoadOp.LOAD;
            _depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;
            _depthStencilAttachment.stencilLoadOp = LoadOp.LOAD;
            _depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
            colorAttachment.barrier = device.getGeneralBarrier(new GeneralBarrierInfo(AccessFlagBit.DEPTH_STENCIL_ATTACHMENT_WRITE, AccessFlagBit.DEPTH_STENCIL_ATTACHMENT_WRITE));
            var _renderPassInfo = new RenderPassInfo([colorAttachment], _depthStencilAttachment);
            this._lightingRenderPass = device.createRenderPass(_renderPassInfo);
          }
          this._width = swapchain.width;
          this._height = swapchain.height;
          this._generateDeferredRenderData();
          return true;
        };
        _proto._destroyUBOs = function _destroyUBOs() {
          if (this._descriptorSet) {
            this._descriptorSet.getBuffer(UBOGlobal.BINDING).destroy();
            this._descriptorSet.getBuffer(UBOShadow.BINDING).destroy();
            this._descriptorSet.getBuffer(UBOCamera.BINDING).destroy();
            this._descriptorSet.getTexture(UNIFORM_SHADOWMAP_BINDING).destroy();
            this._descriptorSet.getTexture(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING).destroy();
          }
        };
        _proto._destroyDeferredData = function _destroyDeferredData() {
          var deferredData = this._pipelineRenderData;
          if (deferredData) {
            if (deferredData.gbufferFrameBuffer) deferredData.gbufferFrameBuffer.destroy();
            if (deferredData.outputFrameBuffer) deferredData.outputFrameBuffer.destroy();
            if (deferredData.outputDepth) deferredData.outputDepth.destroy();
            for (var i = 0; i < deferredData.gbufferRenderTargets.length; i++) {
              deferredData.gbufferRenderTargets[i].destroy();
            }
            deferredData.gbufferRenderTargets.length = 0;
            for (var _i = 0; _i < deferredData.outputRenderTargets.length; _i++) {
              deferredData.outputRenderTargets[_i].destroy();
            }
            deferredData.outputRenderTargets.length = 0;
            this._destroyBloomData();
          }
          this._pipelineRenderData = null;
        };
        _proto._ensureEnoughSize = function _ensureEnoughSize(cameras) {
          var newWidth = this._width;
          var newHeight = this._height;
          for (var i = 0; i < cameras.length; ++i) {
            var window = cameras[i].window;
            newWidth = Math.max(window.width, newWidth);
            newHeight = Math.max(window.height, newHeight);
          }
          if (newWidth !== this._width || newHeight !== this._height) {
            this._width = newWidth;
            this._height = newHeight;
            this._destroyDeferredData();
            this._generateDeferredRenderData();
          }
        };
        _proto._generateDeferredRenderData = function _generateDeferredRenderData() {
          var _this3 = this;
          var device = this.device;
          var data = this._pipelineRenderData = new DeferredRenderData();
          var sceneData = this.pipelineSceneData;
          for (var i = 0; i < 3; ++i) {
            data.gbufferRenderTargets.push(device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, Format.RGBA16F,
            // normals need more precision
            this._width * sceneData.shadingScale, this._height * sceneData.shadingScale)));
          }
          data.outputDepth = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.DEPTH_STENCIL_ATTACHMENT | TextureUsageBit.SAMPLED, Format.DEPTH_STENCIL, this._width * sceneData.shadingScale, this._height * sceneData.shadingScale));
          data.gbufferFrameBuffer = device.createFramebuffer(new FramebufferInfo(this._gbufferRenderPass, data.gbufferRenderTargets, data.outputDepth));
          data.outputRenderTargets.push(device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, Format.RGBA16F, this._width * sceneData.shadingScale, this._height * sceneData.shadingScale)));
          data.outputFrameBuffer = device.createFramebuffer(new FramebufferInfo(this._lightingRenderPass, data.outputRenderTargets, null));
          data.sampler = this.globalDSManager.pointSampler;

          // Listens when the attachment texture is scaled
          this.on(PipelineEventType.ATTACHMENT_SCALE_CAHNGED, function (val) {
            data.sampler = val < 1 ? _this3.globalDSManager.pointSampler : _this3.globalDSManager.linearSampler;
            data.gbufferFrameBuffer = _this3.newFramebufferByRatio(data.gbufferFrameBuffer);
            data.gbufferFrameBuffer = _this3.newFramebufferByRatio(data.outputFrameBuffer);
          });
        };
        return DeferredPipeline;
      }(RenderPipeline), (_initializer = _applyDecoratedInitializer(_class3.prototype, "renderTextures", [_dec2, serializable, _dec3], function () {
        return [];
      })), _class3)) || _class2));
    }
  };
});