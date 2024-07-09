System.register("q-bundled:///fs/cocos/rendering/render-pipeline.js", ["../core/data/decorators/index.js", "pal/system-info", "./scene-culling.js", "../asset/assets/asset.js", "../gfx/index.js", "../render-scene/scene/camera.js", "./global-descriptor-set-manager.js", "./pipeline-ubo.js", "./render-flow.js", "./pipeline-event.js", "./pipeline-funcs.js", "../../pal/system-info/enum-type/index.js", "../core/index.js", "./define.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, serializable, type, systemInfo, sceneCulling, validPunctualLightsCulling, Asset, AccessFlagBit, Attribute, BufferInfo, BufferUsageBit, ClearFlagBit, ColorAttachment, DepthStencilAttachment, Feature, Format, FormatFeatureBit, FramebufferInfo, InputAssemblerInfo, LoadOp, MemoryUsageBit, Rect, RenderPassInfo, StoreOp, SurfaceTransform, TextureInfo, TextureType, TextureUsageBit, Viewport, GeneralBarrierInfo, deviceManager, SKYBOX_FLAG, GlobalDSManager, PipelineUBO, RenderFlow, PipelineEventProcessor, PipelineEventType, decideProfilerCamera, OS, macro, murmurhash2_32_gc, cclegacy, UBOSkinning, _dec, _dec2, _dec3, _dec4, _class4, _class5, _initializer, _initializer2, MAX_BLOOM_FILTER_PASS_NUM, tmpRect, tmpViewport, BloomRenderData, PipelineRenderData, PipelineInputAssemblerData, RenderPipeline;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
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
  function hashFrameBuffer(fbo) {
    var hash = 666;
    for (var _iterator = _createForOfIteratorHelperLoose(fbo.colorTextures), _step; !(_step = _iterator()).done;) {
      var color = _step.value;
      var _info = color === null || color === void 0 ? void 0 : color.info;
      var _hashStr = _info.type + "_" + _info.usage + "_" + _info.format + "_" + _info.width + "_" + _info.height + "_" + _info.flags + "_\n            " + _info.layerCount + "_" + _info.levelCount + "_" + _info.samples + "_" + _info.depth + "_" + _info.externalRes;
      hash = murmurhash2_32_gc(_hashStr, hash);
    }
    if (fbo.depthStencilTexture) {
      var info = fbo.depthStencilTexture.info;
      var hashStr = info.type + "_" + info.usage + "_" + info.format + "_" + info.width + "_" + info.height + "_" + info.flags + "_\n            " + info.layerCount + "_" + info.levelCount + "_" + info.samples + "_" + info.depth + "_" + info.externalRes;
      hash = murmurhash2_32_gc(hashStr, hash);
    }
    return hash;
  }

  /**
   * @en Render pipeline describes how we handle the rendering process for all render objects in the related render scene root.
   * It contains some general pipeline configurations, necessary rendering resources and some [[RenderFlow]]s.
   * The rendering process function [[render]] is invoked by [[Root]] for all [[Camera]]s.
   * @zh 渲染管线对象决定了引擎对相关渲染场景下的所有渲染对象实施的完整渲染流程。
   * 这个类主要包含一些通用的管线配置，必要的渲染资源和一些 [[RenderFlow]]。
   * 渲染流程函数 [[render]] 会由 [[Root]] 发起调用并对所有 [[Camera]] 执行预设的渲染流程。
   */
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_sceneCullingJs) {
      sceneCulling = _sceneCullingJs.sceneCulling;
      validPunctualLightsCulling = _sceneCullingJs.validPunctualLightsCulling;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_gfxIndexJs) {
      AccessFlagBit = _gfxIndexJs.AccessFlagBit;
      Attribute = _gfxIndexJs.Attribute;
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      ColorAttachment = _gfxIndexJs.ColorAttachment;
      DepthStencilAttachment = _gfxIndexJs.DepthStencilAttachment;
      Feature = _gfxIndexJs.Feature;
      Format = _gfxIndexJs.Format;
      FormatFeatureBit = _gfxIndexJs.FormatFeatureBit;
      FramebufferInfo = _gfxIndexJs.FramebufferInfo;
      InputAssemblerInfo = _gfxIndexJs.InputAssemblerInfo;
      LoadOp = _gfxIndexJs.LoadOp;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      Rect = _gfxIndexJs.Rect;
      RenderPassInfo = _gfxIndexJs.RenderPassInfo;
      StoreOp = _gfxIndexJs.StoreOp;
      SurfaceTransform = _gfxIndexJs.SurfaceTransform;
      TextureInfo = _gfxIndexJs.TextureInfo;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      Viewport = _gfxIndexJs.Viewport;
      GeneralBarrierInfo = _gfxIndexJs.GeneralBarrierInfo;
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_renderSceneSceneCameraJs) {
      SKYBOX_FLAG = _renderSceneSceneCameraJs.SKYBOX_FLAG;
    }, function (_globalDescriptorSetManagerJs) {
      GlobalDSManager = _globalDescriptorSetManagerJs.GlobalDSManager;
    }, function (_pipelineUboJs) {
      PipelineUBO = _pipelineUboJs.PipelineUBO;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_pipelineEventJs) {
      PipelineEventProcessor = _pipelineEventJs.PipelineEventProcessor;
      PipelineEventType = _pipelineEventJs.PipelineEventType;
    }, function (_pipelineFuncsJs) {
      decideProfilerCamera = _pipelineFuncsJs.decideProfilerCamera;
    }, function (_palSystemInfoEnumTypeIndexJs) {
      OS = _palSystemInfoEnumTypeIndexJs.OS;
    }, function (_coreIndexJs) {
      macro = _coreIndexJs.macro;
      murmurhash2_32_gc = _coreIndexJs.murmurhash2_32_gc;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_defineJs) {
      UBOSkinning = _defineJs.UBOSkinning;
    }],
    execute: function () {
      /**
       * @en Render pipeline information descriptor
       * @zh 渲染管线描述信息。
       */
      _export("MAX_BLOOM_FILTER_PASS_NUM", MAX_BLOOM_FILTER_PASS_NUM = 6);
      tmpRect = new Rect();
      tmpViewport = new Viewport();
      _export("BloomRenderData", BloomRenderData = function BloomRenderData() {
        this.renderPass = null;
        this.sampler = null;
        this.prefiterTex = null;
        this.downsampleTexs = [];
        this.upsampleTexs = [];
        this.combineTex = null;
        this.prefilterFramebuffer = null;
        this.downsampleFramebuffers = [];
        this.upsampleFramebuffers = [];
        this.combineFramebuffer = null;
      });
      _export("PipelineRenderData", PipelineRenderData = function PipelineRenderData() {
        this.outputFrameBuffer = null;
        this.outputRenderTargets = [];
        this.outputDepth = null;
        this.sampler = null;
        this.bloom = null;
      });
      _export("PipelineInputAssemblerData", PipelineInputAssemblerData = function PipelineInputAssemblerData() {
        this.quadIB = null;
        this.quadVB = null;
        this.quadIA = null;
      });
      _export("RenderPipeline", RenderPipeline = (_dec = ccclass('cc.RenderPipeline'), _dec2 = displayOrder(0), _dec3 = displayOrder(1), _dec4 = type([RenderFlow]), _dec(_class4 = (_class5 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(RenderPipeline, _Asset);
        function RenderPipeline() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          /**
           * @en Tag
           * @zh 标签
           * @readonly
           */
          _this._tag = _initializer && _initializer();
          /**
           * @en Flows
           * @zh 渲染流程列表
           * @readonly
           */
          _this._flows = _initializer2 && _initializer2();
          _this._quadIB = null;
          _this._quadVBOnscreen = null;
          _this._quadVBOffscreen = null;
          _this._quadIAOnscreen = null;
          _this._quadIAOffscreen = null;
          _this._eventProcessor = new PipelineEventProcessor();
          _this._device = void 0;
          _this._globalDSManager = void 0;
          _this._descriptorSet = void 0;
          _this._commandBuffers = [];
          _this._pipelineUBO = new PipelineUBO();
          _this._macros = {};
          _this._constantMacros = '';
          _this._profiler = null;
          _this._geometryRenderer = null;
          _this._pipelineRenderData = null;
          _this._renderPasses = new Map();
          _this._width = 0;
          _this._height = 0;
          _this._lastUsedRenderArea = new Rect();
          _this._clusterEnabled = false;
          _this._bloomEnabled = false;
          return _this;
        }
        var _proto = RenderPipeline.prototype;
        _proto.getPipelineRenderData = function getPipelineRenderData() {
          return this._pipelineRenderData;
        }

        /**
         * @en
         * Constant macro string, static throughout the whole runtime.
         * Used to pass device-specific parameters to shader.
         * @zh 常量宏定义字符串，运行时全程不会改变，用于给 shader 传一些只和平台相关的参数。
         * @readonly
         */;
        /**
         * @en The initialization process, user shouldn't use it in most case, only useful when need to generate render pipeline programmatically.
         * @zh 初始化函数，正常情况下不会用到，仅用于程序化生成渲染管线的情况。
         * @param info The render pipeline information
         */
        _proto.initialize = function initialize(info) {
          this._flows = info.flows;
          if (info.tag) {
            this._tag = info.tag;
          }
          return true;
        };
        _proto.createRenderPass = function createRenderPass(clearFlags, colorFmt, depthFmt) {
          var device = this._device;
          var colorAttachment = new ColorAttachment();
          var depthStencilAttachment = new DepthStencilAttachment();
          colorAttachment.format = colorFmt;
          depthStencilAttachment.format = depthFmt;
          depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
          depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;
          if (!(clearFlags & ClearFlagBit.COLOR)) {
            if (clearFlags & SKYBOX_FLAG) {
              colorAttachment.loadOp = LoadOp.CLEAR;
            } else {
              colorAttachment.loadOp = LoadOp.LOAD;
              colorAttachment.barrier = device.getGeneralBarrier(new GeneralBarrierInfo(AccessFlagBit.COLOR_ATTACHMENT_WRITE, AccessFlagBit.COLOR_ATTACHMENT_WRITE));
            }
          }
          if ((clearFlags & ClearFlagBit.DEPTH_STENCIL) !== ClearFlagBit.DEPTH_STENCIL) {
            if (!(clearFlags & ClearFlagBit.DEPTH)) depthStencilAttachment.depthLoadOp = LoadOp.LOAD;
            if (!(clearFlags & ClearFlagBit.STENCIL)) depthStencilAttachment.stencilLoadOp = LoadOp.LOAD;
          }
          depthStencilAttachment.barrier = device.getGeneralBarrier(new GeneralBarrierInfo(AccessFlagBit.DEPTH_STENCIL_ATTACHMENT_WRITE, AccessFlagBit.DEPTH_STENCIL_ATTACHMENT_WRITE));
          var renderPassInfo = new RenderPassInfo([colorAttachment], depthStencilAttachment);
          return device.createRenderPass(renderPassInfo);
        };
        _proto.getRenderPass = function getRenderPass(clearFlags, fbo) {
          var fbHash = hashFrameBuffer(fbo);
          var hash = murmurhash2_32_gc(fbHash + "_" + clearFlags, 666);
          var renderPass = this._renderPasses.get(hash);
          if (renderPass) {
            return renderPass;
          }
          renderPass = this.createRenderPass(clearFlags, fbo.colorTextures[0].format, fbo.depthStencilTexture.format);
          this._renderPasses.set(hash, renderPass);
          return renderPass;
        };
        _proto.newFramebufferByRatio = function newFramebufferByRatio(dyingFramebuffer) {
          var sceneData = this.pipelineSceneData;
          var width = this._width * sceneData.shadingScale;
          var height = this._height * sceneData.shadingScale;
          var colorTexArr = dyingFramebuffer.colorTextures;
          for (var i = 0; i < colorTexArr.length; i++) {
            colorTexArr[i].resize(width, height);
          }
          if (dyingFramebuffer.depthStencilTexture) {
            dyingFramebuffer.depthStencilTexture.resize(width, height);
          }
          // move
          var newFramebuffer = this._device.createFramebuffer(new FramebufferInfo(dyingFramebuffer.renderPass, colorTexArr, dyingFramebuffer.depthStencilTexture));
          dyingFramebuffer.destroy();
          return newFramebuffer;
        }

        /**
         * @en generate renderArea by camera
         * @zh 生成renderArea
         * @param camera the camera
         * @returns
         */;
        _proto.generateRenderArea = function generateRenderArea(camera, out) {
          var vp = camera.viewport;
          var w = camera.window.width;
          var h = camera.window.height;
          out.x = vp.x * w;
          out.y = vp.y * h;
          out.width = vp.width * w;
          out.height = vp.height * h;
        };
        _proto.generateViewport = function generateViewport(camera, out) {
          this.generateRenderArea(camera, tmpRect);
          if (!out) out = tmpViewport;
          var shadingScale = this.pipelineSceneData.shadingScale;
          out.left = tmpRect.x * shadingScale;
          out.top = tmpRect.y * shadingScale;
          out.width = tmpRect.width * shadingScale;
          out.height = tmpRect.height * shadingScale;
          return out;
        };
        _proto.generateScissor = function generateScissor(camera, out) {
          if (!out) out = tmpRect;
          this.generateRenderArea(camera, out);
          var shadingScale = this.pipelineSceneData.shadingScale;
          out.x *= shadingScale;
          out.y *= shadingScale;
          out.width *= shadingScale;
          out.height *= shadingScale;
          return out;
        };
        _proto.getMacroString = function getMacroString(name) {
          var str = this._macros[name];
          if (str === undefined) {
            return '';
          }
          return str;
        };
        _proto.getMacroInt = function getMacroInt(name) {
          var value = this._macros[name];
          if (value === undefined) {
            return 0;
          }
          return value;
        };
        _proto.getMacroBool = function getMacroBool(name) {
          var value = this._macros[name];
          if (value === undefined) {
            return false;
          }
          return value;
        };
        _proto.setMacroString = function setMacroString(name, value) {
          this._macros[name] = value;
        };
        _proto.setMacroInt = function setMacroInt(name, value) {
          this._macros[name] = value;
        };
        _proto.setMacroBool = function setMacroBool(name, value) {
          this._macros[name] = value;
        }

        /**
         * @en Activate the render pipeline after loaded, it mainly activate the flows
         * @zh 当渲染管线资源加载完成后，启用管线，主要是启用管线内的 flow
         * TODO: remove swapchain dependency at this stage
         * after deferred pipeline can handle multiple swapchains
         */;
        _proto.activate = function activate(swapchain) {
          this._device = deviceManager.gfxDevice;
          this._generateConstantMacros();
          this._globalDSManager = new GlobalDSManager(this._device);
          this._descriptorSet = this._globalDSManager.globalDescriptorSet;
          this._pipelineUBO.activate(this._device, this);
          // update global defines in advance here for deferred pipeline may tryCompile shaders.
          this._macros.CC_USE_HDR = this._pipelineSceneData.isHDR;
          this._macros.CC_USE_DEBUG_VIEW = 0;
          this._generateConstantMacros();
          this._pipelineSceneData.activate(this._device);
          for (var i = 0; i < this._flows.length; i++) {
            this._flows[i].activate(this);
          }
          return true;
        };
        _proto._ensureEnoughSize = function _ensureEnoughSize(cameras) {}

        /**
         * @en Render function, it basically run the render process of all flows in sequence for the given view.
         * @zh 渲染函数，对指定的渲染视图按顺序执行所有渲染流程。
         * @param view Render view。
         */;
        _proto.render = function render(cameras) {
          if (cameras.length === 0) {
            return;
          }
          this.updateGeometryRenderer(cameras); // for capability
          this._commandBuffers[0].begin();
          this.emit(PipelineEventType.RENDER_FRAME_BEGIN, cameras);
          this._ensureEnoughSize(cameras);
          decideProfilerCamera(cameras);
          for (var i = 0; i < cameras.length; i++) {
            var camera = cameras[i];
            if (camera.scene) {
              this.emit(PipelineEventType.RENDER_CAMERA_BEGIN, camera);
              validPunctualLightsCulling(this, camera);
              sceneCulling(this, camera);
              this._pipelineUBO.updateGlobalUBO(camera.window);
              this._pipelineUBO.updateCameraUBO(camera);
              for (var j = 0; j < this._flows.length; j++) {
                this._flows[j].render(camera);
              }
              this.emit(PipelineEventType.RENDER_CAMERA_END, camera);
            }
          }
          this.emit(PipelineEventType.RENDER_FRAME_END, cameras);
          this._commandBuffers[0].end();
          this._device.queue.submit(this._commandBuffers);
        }

        /**
         * @zh
         * 销毁四边形输入汇集器。
         */;
        _proto._destroyQuadInputAssembler = function _destroyQuadInputAssembler() {
          if (this._quadIB) {
            this._quadIB.destroy();
            this._quadIB = null;
          }
          if (this._quadVBOnscreen) {
            this._quadVBOnscreen.destroy();
            this._quadVBOnscreen = null;
          }
          if (this._quadVBOffscreen) {
            this._quadVBOffscreen.destroy();
            this._quadVBOffscreen = null;
          }
          if (this._quadIAOnscreen) {
            this._quadIAOnscreen.destroy();
            this._quadIAOnscreen = null;
          }
          if (this._quadIAOffscreen) {
            this._quadIAOffscreen.destroy();
            this._quadIAOffscreen = null;
          }
        };
        _proto._destroyBloomData = function _destroyBloomData() {
          var _bloom$renderPass;
          var bloom = this._pipelineRenderData.bloom;
          if (bloom === null) return;
          if (bloom.prefiterTex) bloom.prefiterTex.destroy();
          if (bloom.prefilterFramebuffer) bloom.prefilterFramebuffer.destroy();
          for (var i = 0; i < bloom.downsampleTexs.length; ++i) {
            bloom.downsampleTexs[i].destroy();
            bloom.downsampleFramebuffers[i].destroy();
          }
          bloom.downsampleTexs.length = 0;
          bloom.downsampleFramebuffers.length = 0;
          for (var _i = 0; _i < bloom.upsampleTexs.length; ++_i) {
            bloom.upsampleTexs[_i].destroy();
            bloom.upsampleFramebuffers[_i].destroy();
          }
          bloom.upsampleTexs.length = 0;
          bloom.upsampleFramebuffers.length = 0;
          if (bloom.combineTex) bloom.combineTex.destroy();
          if (bloom.combineFramebuffer) bloom.combineFramebuffer.destroy();
          (_bloom$renderPass = bloom.renderPass) === null || _bloom$renderPass === void 0 ? void 0 : _bloom$renderPass.destroy();
          this._pipelineRenderData.bloom = null;
        };
        _proto._genQuadVertexData = function _genQuadVertexData(surfaceTransform, renderArea) {
          var vbData = new Float32Array(4 * 4);
          var minX = renderArea.x / this._width;
          var maxX = (renderArea.x + renderArea.width) / this._width;
          var minY = renderArea.y / this._height;
          var maxY = (renderArea.y + renderArea.height) / this._height;
          if (this.device.capabilities.screenSpaceSignY > 0) {
            var temp = maxY;
            maxY = minY;
            minY = temp;
          }
          var n = 0;
          switch (surfaceTransform) {
            case SurfaceTransform.IDENTITY:
              n = 0;
              vbData[n++] = -1.0;
              vbData[n++] = -1.0;
              vbData[n++] = minX;
              vbData[n++] = maxY;
              vbData[n++] = 1.0;
              vbData[n++] = -1.0;
              vbData[n++] = maxX;
              vbData[n++] = maxY;
              vbData[n++] = -1.0;
              vbData[n++] = 1.0;
              vbData[n++] = minX;
              vbData[n++] = minY;
              vbData[n++] = 1.0;
              vbData[n++] = 1.0;
              vbData[n++] = maxX;
              vbData[n++] = minY;
              break;
            case SurfaceTransform.ROTATE_90:
              n = 0;
              vbData[n++] = -1.0;
              vbData[n++] = -1.0;
              vbData[n++] = maxX;
              vbData[n++] = maxY;
              vbData[n++] = 1.0;
              vbData[n++] = -1.0;
              vbData[n++] = maxX;
              vbData[n++] = minY;
              vbData[n++] = -1.0;
              vbData[n++] = 1.0;
              vbData[n++] = minX;
              vbData[n++] = maxY;
              vbData[n++] = 1.0;
              vbData[n++] = 1.0;
              vbData[n++] = minX;
              vbData[n++] = minY;
              break;
            case SurfaceTransform.ROTATE_180:
              n = 0;
              vbData[n++] = -1.0;
              vbData[n++] = -1.0;
              vbData[n++] = minX;
              vbData[n++] = minY;
              vbData[n++] = 1.0;
              vbData[n++] = -1.0;
              vbData[n++] = maxX;
              vbData[n++] = minY;
              vbData[n++] = -1.0;
              vbData[n++] = 1.0;
              vbData[n++] = minX;
              vbData[n++] = maxY;
              vbData[n++] = 1.0;
              vbData[n++] = 1.0;
              vbData[n++] = maxX;
              vbData[n++] = maxY;
              break;
            case SurfaceTransform.ROTATE_270:
              n = 0;
              vbData[n++] = -1.0;
              vbData[n++] = -1.0;
              vbData[n++] = minX;
              vbData[n++] = minY;
              vbData[n++] = 1.0;
              vbData[n++] = -1.0;
              vbData[n++] = minX;
              vbData[n++] = maxY;
              vbData[n++] = -1.0;
              vbData[n++] = 1.0;
              vbData[n++] = maxX;
              vbData[n++] = minY;
              vbData[n++] = 1.0;
              vbData[n++] = 1.0;
              vbData[n++] = maxX;
              vbData[n++] = maxY;
              break;
            default:
              break;
          }
          return vbData;
        }

        /**
         * @zh
         * 创建四边形输入汇集器。
         */;
        _proto._createQuadInputAssembler = function _createQuadInputAssembler() {
          // create vertex buffer
          var inputAssemblerData = new PipelineInputAssemblerData();
          var vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
          var vbSize = vbStride * 4;
          var quadVB = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE | MemoryUsageBit.HOST, vbSize, vbStride));
          if (!quadVB) {
            return inputAssemblerData;
          }

          // create index buffer
          var ibStride = Uint8Array.BYTES_PER_ELEMENT;
          var ibSize = ibStride * 6;
          var quadIB = this._device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, ibSize, ibStride));
          if (!quadIB) {
            return inputAssemblerData;
          }
          var indices = new Uint8Array(6);
          indices[0] = 0;
          indices[1] = 1;
          indices[2] = 2;
          indices[3] = 1;
          indices[4] = 3;
          indices[5] = 2;
          quadIB.update(indices);

          // create input assembler

          var attributes = new Array(2);
          attributes[0] = new Attribute('a_position', Format.RG32F);
          attributes[1] = new Attribute('a_texCoord', Format.RG32F);
          var quadIA = this._device.createInputAssembler(new InputAssemblerInfo(attributes, [quadVB], quadIB));
          inputAssemblerData.quadIB = quadIB;
          inputAssemblerData.quadVB = quadVB;
          inputAssemblerData.quadIA = quadIA;
          return inputAssemblerData;
        };
        _proto.updateQuadVertexData = function updateQuadVertexData(renderArea, window) {
          var cachedArea = this._lastUsedRenderArea;
          if (cachedArea.x === renderArea.x && cachedArea.y === renderArea.y && cachedArea.width === renderArea.width && cachedArea.height === renderArea.height) {
            return;
          }
          var offData = this._genQuadVertexData(SurfaceTransform.IDENTITY, renderArea);
          this._quadVBOffscreen.update(offData);
          var onData = this._genQuadVertexData(window.swapchain && window.swapchain.surfaceTransform || SurfaceTransform.IDENTITY, renderArea);
          this._quadVBOnscreen.update(onData);
          cachedArea.copy(renderArea);
        }

        /**
         * @en Internal destroy function
         * @zh 内部销毁函数。
         */;
        _proto.destroy = function destroy() {
          var _this$_globalDSManage, _this$_pipelineSceneD;
          for (var i = 0; i < this._flows.length; i++) {
            this._flows[i].destroy();
          }
          this._flows.length = 0;
          if (this._descriptorSet) {
            this._descriptorSet.destroy();
          }
          (_this$_globalDSManage = this._globalDSManager) === null || _this$_globalDSManage === void 0 ? void 0 : _this$_globalDSManage.destroy();
          for (var _i2 = 0; _i2 < this._commandBuffers.length; _i2++) {
            this._commandBuffers[_i2].destroy();
          }
          this._commandBuffers.length = 0;
          this._pipelineUBO.destroy();
          (_this$_pipelineSceneD = this._pipelineSceneData) === null || _this$_pipelineSceneD === void 0 ? void 0 : _this$_pipelineSceneD.destroy();
          return _Asset.prototype.destroy.call(this);
        };
        _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          // do nothing
        };
        _proto._generateConstantMacros = function _generateConstantMacros() {
          var str = '';
          str += "#define CC_DEVICE_SUPPORT_FLOAT_TEXTURE " + (this.device.getFormatFeatures(Format.RGBA32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) ? 1 : 0) + "\n";
          str += "#define CC_ENABLE_CLUSTERED_LIGHT_CULLING " + (this._clusterEnabled ? 1 : 0) + "\n";
          str += "#define CC_DEVICE_MAX_VERTEX_UNIFORM_VECTORS " + this.device.capabilities.maxVertexUniformVectors + "\n";
          str += "#define CC_DEVICE_MAX_FRAGMENT_UNIFORM_VECTORS " + this.device.capabilities.maxFragmentUniformVectors + "\n";
          str += "#define CC_DEVICE_CAN_BENEFIT_FROM_INPUT_ATTACHMENT " + (this.device.hasFeature(Feature.INPUT_ATTACHMENT_BENEFIT) ? 1 : 0) + "\n";
          str += "#define CC_PLATFORM_ANDROID_AND_WEBGL " + (systemInfo.os === OS.ANDROID && systemInfo.isBrowser ? 1 : 0) + "\n";
          str += "#define CC_ENABLE_WEBGL_HIGHP_STRUCT_VALUES " + (macro.ENABLE_WEBGL_HIGHP_STRUCT_VALUES ? 1 : 0) + "\n";
          var jointUniformCapacity = UBOSkinning.JOINT_UNIFORM_CAPACITY;
          str += "#define CC_JOINT_UNIFORM_CAPACITY " + jointUniformCapacity + "\n";
          this._constantMacros = str;
        };
        _proto.updateGeometryRenderer = function updateGeometryRenderer(cameras) {
          if (this._geometryRenderer) {
            return;
          }

          // Query the first camera rendering to swapchain.
          for (var i = 0; i < cameras.length; i++) {
            var camera = cameras[i];
            if (camera && camera.window && camera.window.swapchain) {
              camera.initGeometryRenderer();
              this._geometryRenderer = camera.geometryRenderer;
              return;
            }
          }
        };
        _proto.generateBloomRenderData = function generateBloomRenderData() {
          if (this._pipelineRenderData.bloom != null) return;
          var bloom = this._pipelineRenderData.bloom = new BloomRenderData();
          var device = this.device;

          // create renderPass
          var colorAttachment = new ColorAttachment();
          colorAttachment.format = Format.RGBA8;
          colorAttachment.loadOp = LoadOp.CLEAR;
          colorAttachment.storeOp = StoreOp.STORE;
          colorAttachment.barrier = device.getGeneralBarrier(new GeneralBarrierInfo(AccessFlagBit.NONE, AccessFlagBit.COLOR_ATTACHMENT_WRITE));
          bloom.renderPass = device.createRenderPass(new RenderPassInfo([colorAttachment]));
          var curWidth = this._width;
          var curHeight = this._height;

          // prefilter
          bloom.prefiterTex = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, Format.RGBA8, curWidth >> 1, curHeight >> 1));
          bloom.prefilterFramebuffer = device.createFramebuffer(new FramebufferInfo(bloom.renderPass, [bloom.prefiterTex]));

          // downsample & upsample
          curWidth >>= 1;
          curHeight >>= 1;
          for (var i = 0; i < MAX_BLOOM_FILTER_PASS_NUM; ++i) {
            bloom.downsampleTexs.push(device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, Format.RGBA8, curWidth >> 1, curHeight >> 1)));
            bloom.downsampleFramebuffers[i] = device.createFramebuffer(new FramebufferInfo(bloom.renderPass, [bloom.downsampleTexs[i]]));
            bloom.upsampleTexs.push(device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, Format.RGBA8, curWidth, curHeight)));
            bloom.upsampleFramebuffers[i] = device.createFramebuffer(new FramebufferInfo(bloom.renderPass, [bloom.upsampleTexs[i]]));
            curWidth >>= 1;
            curHeight >>= 1;
          }

          // combine
          bloom.combineTex = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, Format.RGBA8, this._width, this._height));
          bloom.combineFramebuffer = device.createFramebuffer(new FramebufferInfo(bloom.renderPass, [bloom.combineTex]));

          // sampler
          bloom.sampler = this.globalDSManager.linearSampler;
        }

        /**
         * @en
         * Register an callback of the pipeline event type on the RenderPipeline.
         * @zh
         * 在渲染管线中注册管线事件类型的回调。
         */;
        _proto.on = function on(type, callback, target, once) {
          return this._eventProcessor.on(type, callback, target, once);
        }

        /**
         * @en
         * Register an callback of the pipeline event type on the RenderPipeline,
         * the callback will remove itself after the first time it is triggered.
         * @zh
         * 在渲染管线中注册管线事件类型的回调, 回调后会在第一时间删除自身。
         */;
        _proto.once = function once(type, callback, target) {
          return this._eventProcessor.once(type, callback, target);
        }

        /**
         * @en
         * Removes the listeners previously registered with the same type, callback, target and or useCapture,
         * if only type is passed as parameter, all listeners registered with that type will be removed.
         * @zh
         * 删除之前用同类型、回调、目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
         */;
        _proto.off = function off(type, callback, target) {
          this._eventProcessor.off(type, callback, target);
        }

        /**
         * @zh 派发一个指定事件，并传递需要的参数
         * @en Trigger an event directly with the event name and necessary arguments.
         * @param type - event type
         * @param args - Arguments when the event triggered
         */;
        _proto.emit = function emit(type, arg0, arg1, arg2, arg3, arg4) {
          this._eventProcessor.emit(type, arg0, arg1, arg2, arg3, arg4);
        }

        /**
         * @en Removes all callbacks previously registered with the same target (passed as parameter).
         * This is not for removing all listeners in the current event target,
         * and this is not for removing all listeners the target parameter have registered.
         * It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.
         * @zh 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
         * 这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
         * 这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。
         * @param typeOrTarget - The target to be searched for all related listeners
         */;
        _proto.targetOff = function targetOff(typeOrTarget) {
          this._eventProcessor.targetOff(typeOrTarget);
        }

        /**
         * @zh 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。
         * @en Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
         * @param typeOrTarget - The event type or target with which the listeners will be removed
         */;
        _proto.removeAll = function removeAll(typeOrTarget) {
          this._eventProcessor.removeAll(typeOrTarget);
        }

        /**
         * @zh 检查指定事件是否已注册回调。
         * @en Checks whether there is correspond event listener registered on the given event.
         * @param type - Event type.
         * @param callback - Callback function when event triggered.
         * @param target - Callback callee.
         */;
        _proto.hasEventListener = function hasEventListener(type, callback, target) {
          return this._eventProcessor.hasEventListener(type, callback, target);
        };
        _createClass(RenderPipeline, [{
          key: "tag",
          get:
          /**
           * @en The tag of pipeline.
           * @zh 管线的标签。
           * @readonly
           */
          function get() {
            return this._tag;
          }

          /**
           * @en The flows of pipeline.
           * @zh 管线的渲染流程列表。
           * @readonly
           */
        }, {
          key: "flows",
          get: function get() {
            return this._flows;
          }
        }, {
          key: "quadIAOnscreen",
          get:
          /**
           * @zh
           * 四边形输入汇集器。
           */
          function get() {
            return this._quadIAOnscreen;
          }
        }, {
          key: "quadIAOffscreen",
          get: function get() {
            return this._quadIAOffscreen;
          }
        }, {
          key: "constantMacros",
          get: function get() {
            return this._constantMacros;
          }

          /**
           * @en
           * The current global-scoped shader macros.
           * Used to control effects like IBL, fog, etc.
           * @zh 当前的全局宏定义，用于控制如 IBL、雾效等模块。
           * @readonly
           */
        }, {
          key: "macros",
          get: function get() {
            return this._macros;
          }
        }, {
          key: "device",
          get: function get() {
            return this._device;
          }
        }, {
          key: "globalDSManager",
          get: function get() {
            return this._globalDSManager;
          }
        }, {
          key: "descriptorSetLayout",
          get: function get() {
            return this._globalDSManager.descriptorSetLayout;
          }
        }, {
          key: "descriptorSet",
          get: function get() {
            return this._descriptorSet;
          }
        }, {
          key: "commandBuffers",
          get: function get() {
            return this._commandBuffers;
          }
        }, {
          key: "pipelineUBO",
          get: function get() {
            return this._pipelineUBO;
          }
        }, {
          key: "pipelineSceneData",
          get: function get() {
            return this._pipelineSceneData;
          }
        }, {
          key: "profiler",
          get: function get() {
            return this._profiler;
          }

          /**
           * @deprecated since v3.6, please use camera.geometryRenderer instead.
           */,
          set: function set(value) {
            this._profiler = value;
          }
        }, {
          key: "geometryRenderer",
          get: function get() {
            return this._geometryRenderer;
          }
        }, {
          key: "clusterEnabled",
          get: function get() {
            return this._clusterEnabled;
          },
          set: function set(value) {
            this._clusterEnabled = value;
          }
        }, {
          key: "bloomEnabled",
          get: function get() {
            return this._bloomEnabled;
          },
          set: function set(value) {
            this._bloomEnabled = value;
          }
        }, {
          key: "shadingScale",
          get: function get() {
            return this._pipelineSceneData.shadingScale;
          },
          set: function set(val) {
            if (this._pipelineSceneData.shadingScale !== val) {
              this._pipelineSceneData.shadingScale = val;
              this.emit(PipelineEventType.ATTACHMENT_SCALE_CAHNGED, val);
            }
          }
        }]);
        return RenderPipeline;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class5.prototype, "_tag", [_dec2, serializable], function () {
        return 0;
      }), _initializer2 = _applyDecoratedInitializer(_class5.prototype, "_flows", [_dec3, _dec4, serializable], function () {
        return [];
      })), _class5)) || _class4)); // Do not delete, for the class detection of editor
      cclegacy.RenderPipeline = RenderPipeline;
    }
  };
});