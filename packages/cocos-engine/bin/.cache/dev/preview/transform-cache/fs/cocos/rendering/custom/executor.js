System.register("q-bundled:///fs/cocos/rendering/custom/executor.js", ["../index.js", "../../core/index.js", "../../core/geometry/intersect.js", "../../core/geometry/sphere.js", "../../gfx/index.js", "../../core/global-exports.js", "../../core/math/vec3.js", "../../core/math/vec4.js", "../../render-scene/scene/shadows.js", "../define.js", "../render-pipeline.js", "./render-graph.js", "./types.js", "../render-additive-light-queue.js", "./graph.js", "./effect.js", "./define.js", "../render-reflection-probe-queue.js", "./scene-culling.js"], function (_export, _context) {
  "use strict";

  var getPhaseID, PipelineStateManager, assert, cclegacy, RecyclePool, intersect, Sphere, AccessFlagBit, Attribute, BufferInfo, BufferUsageBit, BufferViewInfo, ColorAttachment, DepthStencilAttachment, DescriptorSetInfo, deviceManager, DispatchInfo, Format, Framebuffer, FramebufferInfo, GeneralBarrierInfo, InputAssemblerInfo, LoadOp, MemoryUsageBit, PipelineBindPoint, PipelineStateInfo, Rect, RenderPassInfo, StoreOp, SurfaceTransform, Texture, TextureInfo, TextureType, TextureUsageBit, Viewport, legacyCC, Vec3, Vec4, ShadowType, SetIndex, UBODeferredLight, UBOForwardLight, UBOLocal, PipelineInputAssemblerData, Blit, ComputePass, ComputeView, RasterPass, RasterView, RenderGraph, RenderSwapchain, SceneData, AccessType, AttachmentType, QueueHint, ResourceDimension, ResourceFlags, ResourceResidency, SceneFlags, UpdateFrequency, RenderAdditiveLightQueue, DefaultVisitor, depthFirstSearch, ReferenceGraphView, VectorGraphColorMap, bool, getDescriptorSetDataFromLayout, getRenderArea, mergeSrcToTargetDesc, updateGlobalDescBinding, RenderReflectionProbeQueue, LightResource, SceneCulling, ResourceVisitor, context, DeviceResource, DeviceTexture, DeviceBuffer, _vec4Array, BlitDesc, DeviceComputeQueue, DeviceRenderQueue, SubmitInfo, RenderPassLayoutInfo, RasterPassInfo, profilerViewport, renderPassArea, resourceVisitor, DeviceRenderPass, ComputePassInfo, DeviceComputePass, GraphScene, sceneViewport, DeviceRenderScene, ExecutorPools, vbData, quadRect, volLightAttrCount, BlitInfo, ExecutorContext, Executor, BaseRenderVisitor, PreRenderVisitor, PostRenderVisitor, RenderVisitor;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /****************************************************************************
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
                                                                                                                                                                                                                                                                                                                                                                                             ****************************************************************************/ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * The following section is auto-generated.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable max-len */
  function isShadowMap(graphScene) {
    var pSceneData = cclegacy.director.root.pipeline.pipelineSceneData;
    return pSceneData.shadows.enabled && pSceneData.shadows.type === ShadowType.ShadowMap && graphScene.scene && (graphScene.scene.flags & SceneFlags.SHADOW_CASTER) !== 0;
  }
  return {
    setters: [function (_indexJs) {
      getPhaseID = _indexJs.getPhaseID;
      PipelineStateManager = _indexJs.PipelineStateManager;
    }, function (_coreIndexJs) {
      assert = _coreIndexJs.assert;
      cclegacy = _coreIndexJs.cclegacy;
      RecyclePool = _coreIndexJs.RecyclePool;
    }, function (_coreGeometryIntersectJs) {
      intersect = _coreGeometryIntersectJs.default;
    }, function (_coreGeometrySphereJs) {
      Sphere = _coreGeometrySphereJs.Sphere;
    }, function (_gfxIndexJs) {
      AccessFlagBit = _gfxIndexJs.AccessFlagBit;
      Attribute = _gfxIndexJs.Attribute;
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      BufferViewInfo = _gfxIndexJs.BufferViewInfo;
      ColorAttachment = _gfxIndexJs.ColorAttachment;
      DepthStencilAttachment = _gfxIndexJs.DepthStencilAttachment;
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
      deviceManager = _gfxIndexJs.deviceManager;
      DispatchInfo = _gfxIndexJs.DispatchInfo;
      Format = _gfxIndexJs.Format;
      Framebuffer = _gfxIndexJs.Framebuffer;
      FramebufferInfo = _gfxIndexJs.FramebufferInfo;
      GeneralBarrierInfo = _gfxIndexJs.GeneralBarrierInfo;
      InputAssemblerInfo = _gfxIndexJs.InputAssemblerInfo;
      LoadOp = _gfxIndexJs.LoadOp;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      PipelineBindPoint = _gfxIndexJs.PipelineBindPoint;
      PipelineStateInfo = _gfxIndexJs.PipelineStateInfo;
      Rect = _gfxIndexJs.Rect;
      RenderPassInfo = _gfxIndexJs.RenderPassInfo;
      StoreOp = _gfxIndexJs.StoreOp;
      SurfaceTransform = _gfxIndexJs.SurfaceTransform;
      Texture = _gfxIndexJs.Texture;
      TextureInfo = _gfxIndexJs.TextureInfo;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      Viewport = _gfxIndexJs.Viewport;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_coreMathVec3Js) {
      Vec3 = _coreMathVec3Js.Vec3;
    }, function (_coreMathVec4Js) {
      Vec4 = _coreMathVec4Js.Vec4;
    }, function (_renderSceneSceneShadowsJs) {
      ShadowType = _renderSceneSceneShadowsJs.ShadowType;
    }, function (_defineJs) {
      SetIndex = _defineJs.SetIndex;
      UBODeferredLight = _defineJs.UBODeferredLight;
      UBOForwardLight = _defineJs.UBOForwardLight;
      UBOLocal = _defineJs.UBOLocal;
    }, function (_renderPipelineJs) {
      PipelineInputAssemblerData = _renderPipelineJs.PipelineInputAssemblerData;
    }, function (_renderGraphJs) {
      Blit = _renderGraphJs.Blit;
      ComputePass = _renderGraphJs.ComputePass;
      ComputeView = _renderGraphJs.ComputeView;
      RasterPass = _renderGraphJs.RasterPass;
      RasterView = _renderGraphJs.RasterView;
      RenderGraph = _renderGraphJs.RenderGraph;
      RenderSwapchain = _renderGraphJs.RenderSwapchain;
      SceneData = _renderGraphJs.SceneData;
    }, function (_typesJs) {
      AccessType = _typesJs.AccessType;
      AttachmentType = _typesJs.AttachmentType;
      QueueHint = _typesJs.QueueHint;
      ResourceDimension = _typesJs.ResourceDimension;
      ResourceFlags = _typesJs.ResourceFlags;
      ResourceResidency = _typesJs.ResourceResidency;
      SceneFlags = _typesJs.SceneFlags;
      UpdateFrequency = _typesJs.UpdateFrequency;
    }, function (_renderAdditiveLightQueueJs) {
      RenderAdditiveLightQueue = _renderAdditiveLightQueueJs.RenderAdditiveLightQueue;
    }, function (_graphJs) {
      DefaultVisitor = _graphJs.DefaultVisitor;
      depthFirstSearch = _graphJs.depthFirstSearch;
      ReferenceGraphView = _graphJs.ReferenceGraphView;
    }, function (_effectJs) {
      VectorGraphColorMap = _effectJs.VectorGraphColorMap;
    }, function (_defineJs2) {
      bool = _defineJs2.bool;
      getDescriptorSetDataFromLayout = _defineJs2.getDescriptorSetDataFromLayout;
      getRenderArea = _defineJs2.getRenderArea;
      mergeSrcToTargetDesc = _defineJs2.mergeSrcToTargetDesc;
      updateGlobalDescBinding = _defineJs2.updateGlobalDescBinding;
    }, function (_renderReflectionProbeQueueJs) {
      RenderReflectionProbeQueue = _renderReflectionProbeQueueJs.RenderReflectionProbeQueue;
    }, function (_sceneCullingJs) {
      LightResource = _sceneCullingJs.LightResource;
      SceneCulling = _sceneCullingJs.SceneCulling;
    }],
    execute: function () {
      ResourceVisitor = /*#__PURE__*/function () {
        function ResourceVisitor(resName) {
          if (resName === void 0) {
            resName = '';
          }
          this.name = void 0;
          this.name = resName;
          if (context) {
            var ppl = context.pipeline;
            ppl.resourceUses.push(resName);
          }
        }
        var _proto = ResourceVisitor.prototype;
        _proto.checkTexture = function checkTexture(name) {
          var dTex = context.deviceTextures.get(name);
          var resID = context.resourceGraph.vertex(this.name);
          var desc = context.resourceGraph.getDesc(resID);
          var res = false;
          if (dTex.texture) {
            res = dTex.texture.width === desc.width && dTex.texture.height === desc.height;
          } else if (dTex.swapchain) {
            res = dTex.swapchain.width === desc.width && dTex.swapchain.height === desc.height;
          }
          return res;
        };
        _proto.createDeviceTex = function createDeviceTex(value) {
          if (!context.deviceTextures.get(this.name)) {
            var deviceTex = new DeviceTexture(this.name, value);
            context.deviceTextures.set(this.name, deviceTex);
          } else if (!this.checkTexture(this.name)) {
            var _dTex$texture;
            var dTex = context.deviceTextures.get(this.name);
            (_dTex$texture = dTex.texture) === null || _dTex$texture === void 0 ? void 0 : _dTex$texture.destroy();
            var _deviceTex = new DeviceTexture(this.name, value);
            context.deviceTextures.set(this.name, _deviceTex);
          }
        };
        _proto.checkBuffer = function checkBuffer(name) {
          var dBuf = context.deviceBuffers.get(name);
          var resID = context.resourceGraph.vertex(this.name);
          var desc = context.resourceGraph.getDesc(resID);
          return dBuf.buffer.size >= desc.width;
        };
        _proto.createDeviceBuf = function createDeviceBuf(value) {
          var mount = !!context.deviceBuffers.get(this.name);
          if (!mount) {
            var deviceBuf = new DeviceBuffer(this.name, value);
            context.deviceBuffers.set(this.name, deviceBuf);
          } else if (!this.checkBuffer(this.name)) {
            var _dBuf$buffer;
            var dBuf = context.deviceBuffers.get(this.name);
            (_dBuf$buffer = dBuf.buffer) === null || _dBuf$buffer === void 0 ? void 0 : _dBuf$buffer.destroy();
            var _deviceBuf = new DeviceBuffer(this.name, value);
            context.deviceBuffers.set(this.name, _deviceBuf);
          }
        };
        _proto.managed = function managed(value) {
          this.createDeviceTex(value);
        };
        _proto.managedBuffer = function managedBuffer(value) {
          this.createDeviceBuf(value);
        };
        _proto.managedTexture = function managedTexture(value) {
          // noop
        };
        _proto.persistentBuffer = function persistentBuffer(value) {
          this.createDeviceBuf(value);
        };
        _proto.persistentTexture = function persistentTexture(value) {
          this.createDeviceTex(value);
        };
        _proto.framebuffer = function framebuffer(value) {
          this.createDeviceTex(value);
        };
        _proto.swapchain = function swapchain(value) {
          this.createDeviceTex(value);
        };
        _proto.formatView = function formatView(value) {
          // do nothing
        };
        _proto.subresourceView = function subresourceView(value) {
          // do nothing
        };
        _createClass(ResourceVisitor, [{
          key: "resName",
          set: function set(value) {
            this.name = value;
          }
        }]);
        return ResourceVisitor;
      }(); // Defining the recording interface
      DeviceResource = /*#__PURE__*/function () {
        function DeviceResource(name) {
          this._name = void 0;
          this._name = name;
        }
        _createClass(DeviceResource, [{
          key: "name",
          get: function get() {
            return this._name;
          }
        }]);
        return DeviceResource;
      }();
      DeviceTexture = /*#__PURE__*/function (_DeviceResource) {
        _inheritsLoose(DeviceTexture, _DeviceResource);
        function DeviceTexture(name, tex) {
          var _this;
          _this = _DeviceResource.call(this, name) || this;
          _this._texture = null;
          _this._swapchain = null;
          _this._framebuffer = null;
          _this._desc = null;
          _this._trait = null;
          var resGraph = context.resourceGraph;
          var verID = resGraph.vertex(name);
          _this._desc = resGraph.getDesc(verID);
          _this._trait = resGraph.getTraits(verID);
          if (tex instanceof Texture) {
            _this._texture = tex;
            return _assertThisInitialized(_this);
          }
          if (tex instanceof Framebuffer) {
            _this._framebuffer = tex;
            return _assertThisInitialized(_this);
          }
          if (tex instanceof RenderSwapchain) {
            _this._swapchain = tex.swapchain;
            return _assertThisInitialized(_this);
          }
          var info = _this._desc;
          var type = TextureType.TEX2D;
          switch (info.dimension) {
            case ResourceDimension.TEXTURE1D:
              type = TextureType.TEX1D;
              break;
            case ResourceDimension.TEXTURE2D:
              type = TextureType.TEX2D;
              break;
            case ResourceDimension.TEXTURE3D:
              type = TextureType.TEX3D;
              break;
            default:
          }
          var usageFlags = TextureUsageBit.NONE;
          if (info.flags & ResourceFlags.COLOR_ATTACHMENT) usageFlags |= TextureUsageBit.COLOR_ATTACHMENT;
          if (info.flags & ResourceFlags.DEPTH_STENCIL_ATTACHMENT) usageFlags |= TextureUsageBit.DEPTH_STENCIL_ATTACHMENT;
          if (info.flags & ResourceFlags.INPUT_ATTACHMENT) usageFlags |= TextureUsageBit.INPUT_ATTACHMENT;
          if (info.flags & ResourceFlags.SAMPLED) usageFlags |= TextureUsageBit.SAMPLED;
          if (info.flags & ResourceFlags.STORAGE) usageFlags |= TextureUsageBit.STORAGE;
          if (info.flags & ResourceFlags.TRANSFER_SRC) usageFlags |= TextureUsageBit.TRANSFER_SRC;
          if (info.flags & ResourceFlags.TRANSFER_DST) usageFlags |= TextureUsageBit.TRANSFER_DST;
          _this._texture = context.device.createTexture(new TextureInfo(type, usageFlags, info.format, info.width, info.height));
          return _this;
        }
        var _proto2 = DeviceTexture.prototype;
        _proto2.release = function release() {
          if (this.framebuffer) {
            this.framebuffer.destroy();
            this._framebuffer = null;
          }
          if (this.texture) {
            this.texture.destroy();
            this._texture = null;
          }
        };
        _createClass(DeviceTexture, [{
          key: "texture",
          get: function get() {
            return this._texture;
          }
        }, {
          key: "framebuffer",
          get: function get() {
            return this._framebuffer;
          },
          set: function set(val) {
            this._framebuffer = val;
          }
        }, {
          key: "description",
          get: function get() {
            return this._desc;
          }
        }, {
          key: "trait",
          get: function get() {
            return this._trait;
          }
        }, {
          key: "swapchain",
          get: function get() {
            return this._swapchain;
          }
        }]);
        return DeviceTexture;
      }(DeviceResource);
      DeviceBuffer = /*#__PURE__*/function (_DeviceResource2) {
        _inheritsLoose(DeviceBuffer, _DeviceResource2);
        function DeviceBuffer(name, buffer) {
          var _this2;
          _this2 = _DeviceResource2.call(this, name) || this;
          _this2._buffer = void 0;
          var resGraph = context.resourceGraph;
          var verID = resGraph.vertex(name);
          var desc = resGraph.getDesc(verID);
          var bufferInfo = new BufferInfo();
          bufferInfo.size = desc.width;
          bufferInfo.memUsage = MemoryUsageBit.DEVICE;
          if (desc.flags & ResourceFlags.INDIRECT) bufferInfo.usage |= BufferUsageBit.INDIRECT;
          if (desc.flags & ResourceFlags.UNIFORM) bufferInfo.usage |= BufferUsageBit.UNIFORM;
          if (desc.flags & ResourceFlags.STORAGE) bufferInfo.usage |= BufferUsageBit.STORAGE;
          if (desc.flags & ResourceFlags.TRANSFER_SRC) bufferInfo.usage |= BufferUsageBit.TRANSFER_SRC;
          if (desc.flags & ResourceFlags.TRANSFER_DST) bufferInfo.usage |= BufferUsageBit.TRANSFER_DST;
          _this2._buffer = context.device.createBuffer(bufferInfo);
          return _this2;
        }
        var _proto3 = DeviceBuffer.prototype;
        _proto3.release = function release() {
          if (this._buffer) {
            this._buffer.destroy();
            this._buffer = null;
          }
        };
        _createClass(DeviceBuffer, [{
          key: "buffer",
          get: function get() {
            return this._buffer;
          }
        }]);
        return DeviceBuffer;
      }(DeviceResource);
      _vec4Array = new Float32Array(4);
      BlitDesc = /*#__PURE__*/function () {
        function BlitDesc(blit, queue) {
          this._isUpdate = false;
          this._isGatherLight = false;
          this._blit = void 0;
          this._screenQuad = null;
          this._queue = null;
          this._stageDesc = void 0;
          // If VOLUMETRIC_LIGHTING is turned on, it needs to be assigned
          this._lightVolumeBuffer = null;
          this._lightMeterScale = 10000.0;
          this._lightBufferData = void 0;
          this._blit = blit;
          this._queue = queue;
        }
        /**
         * @zh
         * 创建四边形输入汇集器。
         */
        var _proto4 = BlitDesc.prototype;
        _proto4._createQuadInputAssembler = function _createQuadInputAssembler() {
          return context.blit.pipelineIAData;
        };
        _proto4.createScreenQuad = function createScreenQuad() {
          if (!this._screenQuad) {
            this._screenQuad = this._createQuadInputAssembler();
          }
        };
        _proto4._gatherVolumeLights = function _gatherVolumeLights(camera) {
          if (!camera.scene) {
            return;
          }
          var pipeline = context.pipeline;
          var cmdBuff = context.commandBuffer;
          var sphereLights = camera.scene.sphereLights;
          var spotLights = camera.scene.spotLights;
          var _sphere = Sphere.create(0, 0, 0, 1);
          var exposure = camera.exposure;
          var idx = 0;
          var maxLights = UBODeferredLight.LIGHTS_PER_PASS;
          var elementLen = Vec4.length; // sizeof(vec4) / sizeof(float32)
          var fieldLen = elementLen * maxLights;
          for (var i = 0; i < sphereLights.length && idx < maxLights; i++, ++idx) {
            var light = sphereLights[i];
            Sphere.set(_sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              // cc_lightPos
              Vec3.toArray(_vec4Array, light.position);
              _vec4Array[3] = 0;
              this._lightBufferData.set(_vec4Array, idx * elementLen);

              // cc_lightColor
              Vec3.toArray(_vec4Array, light.color);
              if (light.useColorTemperature) {
                var tempRGB = light.colorTemperatureRGB;
                _vec4Array[0] *= tempRGB.x;
                _vec4Array[1] *= tempRGB.y;
                _vec4Array[2] *= tempRGB.z;
              }
              if (pipeline.pipelineSceneData.isHDR) {
                _vec4Array[3] = light.luminance * exposure * this._lightMeterScale;
              } else {
                _vec4Array[3] = light.luminance;
              }
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 1);

              // cc_lightSizeRangeAngle
              _vec4Array[0] = light.size;
              _vec4Array[1] = light.range;
              _vec4Array[2] = 0.0;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 2);
            }
          }
          for (var _i = 0; _i < spotLights.length && idx < maxLights; _i++, ++idx) {
            var _light = spotLights[_i];
            Sphere.set(_sphere, _light.position.x, _light.position.y, _light.position.z, _light.range);
            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              // cc_lightPos
              Vec3.toArray(_vec4Array, _light.position);
              _vec4Array[3] = 1;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 0);

              // cc_lightColor
              Vec3.toArray(_vec4Array, _light.color);
              if (_light.useColorTemperature) {
                var _tempRGB = _light.colorTemperatureRGB;
                _vec4Array[0] *= _tempRGB.x;
                _vec4Array[1] *= _tempRGB.y;
                _vec4Array[2] *= _tempRGB.z;
              }
              if (pipeline.pipelineSceneData.isHDR) {
                _vec4Array[3] = _light.luminance * exposure * this._lightMeterScale;
              } else {
                _vec4Array[3] = _light.luminance;
              }
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 1);

              // cc_lightSizeRangeAngle
              _vec4Array[0] = _light.size;
              _vec4Array[1] = _light.range;
              _vec4Array[2] = _light.spotAngle;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 2);

              // cc_lightDir
              Vec3.toArray(_vec4Array, _light.direction);
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 3);
            }
          }

          // the count of lights is set to cc_lightDir[0].w
          var offset = fieldLen * 3 + 3;
          this._lightBufferData.set([idx], offset);
          cmdBuff.updateBuffer(this._lightVolumeBuffer, this._lightBufferData);
        };
        _proto4.update = function update() {
          if (this.blit.sceneFlags & SceneFlags.VOLUMETRIC_LIGHTING && this.blit.camera && !this._isGatherLight) {
            this._gatherVolumeLights(this.blit.camera);
            this._isGatherLight = true;
            this._isUpdate = false;
          }
          if (!this._isUpdate) {
            this._stageDesc.update();
            this._isUpdate = true;
          }
        };
        _proto4.reset = function reset() {
          this._isUpdate = false;
          this._isGatherLight = false;
        };
        _proto4.createStageDescriptor = function createStageDescriptor() {
          var blit = this.blit;
          var pass = blit.material.passes[blit.passID];
          var device = context.device;
          this._stageDesc = context.blit.stageDescs.get(pass);
          if (!this._stageDesc) {
            this._stageDesc = device.createDescriptorSet(new DescriptorSetInfo(pass.localSetLayout));
            context.blit.stageDescs.set(pass, this._stageDesc);
          }
          if (this.blit.sceneFlags & SceneFlags.VOLUMETRIC_LIGHTING) {
            this._lightVolumeBuffer = context.blit.lightVolumeBuffer;
            var deferredLitsBufView = context.blit.deferredLitsBufView;
            this._lightBufferData = context.blit.lightBufferData;
            this._lightBufferData.fill(0);
            this._stageDesc.bindBuffer(UBOForwardLight.BINDING, deferredLitsBufView);
          }
          this._stageDesc.bindBuffer(UBOLocal.BINDING, context.blit.emptyLocalUBO);
        };
        _createClass(BlitDesc, [{
          key: "screenQuad",
          get: function get() {
            return this._screenQuad;
          }
        }, {
          key: "blit",
          get: function get() {
            return this._blit;
          },
          set: function set(blit) {
            this._blit = blit;
          }
        }, {
          key: "stageDesc",
          get: function get() {
            return this._stageDesc;
          }
        }]);
        return BlitDesc;
      }();
      DeviceComputeQueue = /*#__PURE__*/function () {
        function DeviceComputeQueue() {
          this._devicePass = void 0;
          this._hint = QueueHint.NONE;
          this._phaseID = getPhaseID('default');
          this._renderPhase = null;
          this._descSetData = null;
          this._layoutID = -1;
          this._isUpdateUBO = false;
          this._isUploadInstance = false;
          this._isUploadBatched = false;
          this._queueId = -1;
        }
        var _proto5 = DeviceComputeQueue.prototype;
        _proto5.preRecord = function preRecord() {
          // nothing to do
        };
        _proto5.postRecord = function postRecord() {
          // nothing to do
        };
        _proto5.init = function init(devicePass, renderQueue, id) {
          this.reset();
          this.queueHint = renderQueue.hint;
          this.queueId = id;
          this._devicePass = devicePass;
          this._phaseID = cclegacy.rendering.getPhaseID(devicePass.passID, context.renderGraph.getLayout(id));
        };
        _proto5.reset = function reset() {
          this._isUpdateUBO = false;
          this._isUploadInstance = false;
          this._isUploadBatched = false;
        };
        _proto5.record = function record() {
          if (this._descSetData && this._descSetData.descriptorSet) {
            context.commandBuffer.bindDescriptorSet(SetIndex.COUNT, this._descSetData.descriptorSet);
          }
        };
        _createClass(DeviceComputeQueue, [{
          key: "phaseID",
          get: function get() {
            return this._phaseID;
          }
        }, {
          key: "layoutID",
          get: function get() {
            return this._layoutID;
          },
          set: function set(value) {
            this._layoutID = value;
            var layoutGraph = context.layoutGraph;
            this._renderPhase = layoutGraph.tryGetRenderPhase(value);
            var layout = layoutGraph.getLayout(value);
            this._descSetData = layout.descriptorSets.get(UpdateFrequency.PER_PHASE);
          }
        }, {
          key: "descSetData",
          get: function get() {
            return this._descSetData;
          }
        }, {
          key: "renderPhase",
          get: function get() {
            return this._renderPhase;
          }
        }, {
          key: "queueId",
          get: function get() {
            return this._queueId;
          },
          set: function set(val) {
            this._queueId = val;
          }
        }, {
          key: "isUpdateUBO",
          get: function get() {
            return this._isUpdateUBO;
          },
          set: function set(update) {
            this._isUpdateUBO = update;
          }
        }, {
          key: "isUploadInstance",
          get: function get() {
            return this._isUploadInstance;
          },
          set: function set(value) {
            this._isUploadInstance = value;
          }
        }, {
          key: "isUploadBatched",
          get: function get() {
            return this._isUploadBatched;
          },
          set: function set(value) {
            this._isUploadBatched = value;
          }
        }, {
          key: "queueHint",
          get: function get() {
            return this._hint;
          },
          set: function set(value) {
            this._hint = value;
          }
        }, {
          key: "devicePass",
          get: function get() {
            return this._devicePass;
          }
        }]);
        return DeviceComputeQueue;
      }();
      DeviceRenderQueue = /*#__PURE__*/function () {
        function DeviceRenderQueue() {
          this._renderScenes = [];
          this._devicePass = void 0;
          this._hint = QueueHint.NONE;
          this._graphQueue = void 0;
          this._phaseID = getPhaseID('default');
          this._renderPhase = null;
          this._descSetData = null;
          this._viewport = null;
          this._scissor = null;
          this._layoutID = -1;
          this._isUpdateUBO = false;
          this._isUploadInstance = false;
          this._isUploadBatched = false;
          this._blitDesc = null;
          this._queueId = -1;
        }
        var _proto6 = DeviceRenderQueue.prototype;
        _proto6.init = function init(devicePass, renderQueue, id) {
          this.reset();
          this._graphQueue = renderQueue;
          this.queueHint = renderQueue.hint;
          var viewport = this._viewport = renderQueue.viewport;
          if (viewport) {
            this._scissor = new Rect(viewport.left, viewport.top, viewport.width, viewport.height);
          }
          this.queueId = id;
          this._devicePass = devicePass;
          this._phaseID = cclegacy.rendering.getPhaseID(devicePass.passID, context.renderGraph.getLayout(id));
        };
        _proto6.createBlitDesc = function createBlitDesc(blit) {
          if (!this._blitDesc) {
            this._blitDesc = new BlitDesc(blit, this);
          }
          this._blitDesc.createScreenQuad();
          this._blitDesc.createStageDescriptor();
        };
        _proto6.addScene = function addScene(scene) {
          var deviceScene = context.pools.addDeviceScene();
          deviceScene.init(this, scene);
          this._renderScenes.push(deviceScene);
          return deviceScene;
        };
        _proto6.reset = function reset() {
          var _this$_blitDesc;
          this._renderScenes.length = 0;
          this._isUpdateUBO = false;
          this._isUploadInstance = false;
          this._isUploadBatched = false;
          (_this$_blitDesc = this._blitDesc) === null || _this$_blitDesc === void 0 ? void 0 : _this$_blitDesc.reset();
        };
        _proto6.preRecord = function preRecord() {
          // nothing to do
        };
        _proto6.record = function record() {
          if (this._descSetData && this._descSetData.descriptorSet) {
            context.commandBuffer.bindDescriptorSet(SetIndex.COUNT, this._descSetData.descriptorSet);
          }
          this._renderScenes.forEach(function (scene) {
            scene.record();
          });
        };
        _proto6.postRecord = function postRecord() {
          // nothing to do
        };
        _createClass(DeviceRenderQueue, [{
          key: "phaseID",
          get: function get() {
            return this._phaseID;
          }
        }, {
          key: "layoutID",
          get: function get() {
            return this._layoutID;
          },
          set: function set(value) {
            this._layoutID = value;
            var layoutGraph = context.layoutGraph;
            this._renderPhase = layoutGraph.tryGetRenderPhase(value);
            var layout = layoutGraph.getLayout(value);
            this._descSetData = layout.descriptorSets.get(UpdateFrequency.PER_PHASE);
          }
        }, {
          key: "descSetData",
          get: function get() {
            return this._descSetData;
          }
        }, {
          key: "renderPhase",
          get: function get() {
            return this._renderPhase;
          }
        }, {
          key: "viewport",
          get: function get() {
            return this._viewport;
          }
        }, {
          key: "scissor",
          get: function get() {
            return this._scissor;
          }
        }, {
          key: "queueId",
          get: function get() {
            return this._queueId;
          },
          set: function set(val) {
            this._queueId = val;
          }
        }, {
          key: "isUpdateUBO",
          get: function get() {
            return this._isUpdateUBO;
          },
          set: function set(update) {
            this._isUpdateUBO = update;
          }
        }, {
          key: "isUploadInstance",
          get: function get() {
            return this._isUploadInstance;
          },
          set: function set(value) {
            this._isUploadInstance = value;
          }
        }, {
          key: "isUploadBatched",
          get: function get() {
            return this._isUploadBatched;
          },
          set: function set(value) {
            this._isUploadBatched = value;
          }
        }, {
          key: "graphQueue",
          get: function get() {
            return this._graphQueue;
          }
        }, {
          key: "blitDesc",
          get: function get() {
            return this._blitDesc;
          }
        }, {
          key: "renderScenes",
          get: function get() {
            return this._renderScenes;
          }
        }, {
          key: "queueHint",
          get: function get() {
            return this._hint;
          },
          set: function set(value) {
            this._hint = value;
          }
        }, {
          key: "devicePass",
          get: function get() {
            return this._devicePass;
          }
        }]);
        return DeviceRenderQueue;
      }();
      SubmitInfo = /*#__PURE__*/function () {
        function SubmitInfo() {
          // <scene id, shadow queue>
          this.additiveLight = null;
          this.reflectionProbe = null;
        }
        var _proto7 = SubmitInfo.prototype;
        _proto7.reset = function reset() {
          this.additiveLight = null;
          this.reflectionProbe = null;
        };
        return SubmitInfo;
      }();
      RenderPassLayoutInfo = /*#__PURE__*/function () {
        function RenderPassLayoutInfo(layoutId, vertId, input) {
          this._layoutID = 0;
          this._vertID = -1;
          this._stage = null;
          this._layout = void 0;
          this._inputName = void 0;
          this._descriptorSet = null;
          this._inputName = input[0];
          this._layoutID = layoutId;
          this._vertID = vertId;
          var lg = context.layoutGraph;
          this._stage = lg.getRenderStage(layoutId);
          this._layout = lg.getLayout(layoutId);
          var layoutData = this._layout.descriptorSets.get(UpdateFrequency.PER_PASS);
          if (!layoutData) {
            return;
          }
          var layoutDesc = layoutData.descriptorSet;
          // find resource
          var deviceTex = context.deviceTextures.get(this._inputName);
          var gfxTex = deviceTex === null || deviceTex === void 0 ? void 0 : deviceTex.texture;
          var deviceBuf = context.deviceBuffers.get(this._inputName);
          var gfxBuf = deviceBuf === null || deviceBuf === void 0 ? void 0 : deviceBuf.buffer;
          if (!gfxTex && !gfxBuf) {
            throw Error("Could not find texture with resource name " + this._inputName);
          }
          var resId = context.resourceGraph.vertex(this._inputName);
          var samplerInfo = context.resourceGraph.getSampler(resId);
          // bind descriptors
          for (var _iterator = _createForOfIteratorHelperLoose(input[1]), _step; !(_step = _iterator()).done;) {
            var descriptor = _step.value;
            var descriptorName = descriptor.name;
            var descriptorID = lg.attributeIndex.get(descriptorName);
            // find descriptor binding
            for (var _iterator2 = _createForOfIteratorHelperLoose(layoutData.descriptorSetLayoutData.descriptorBlocks), _step2; !(_step2 = _iterator2()).done;) {
              var block = _step2.value;
              for (var i = 0; i !== block.descriptors.length; ++i) {
                if (descriptorID === block.descriptors[i].descriptorID) {
                  if (gfxTex) {
                    layoutDesc.bindTexture(block.offset + i, gfxTex);
                    var renderData = context.renderGraph.getData(this._vertID);
                    layoutDesc.bindSampler(block.offset + i, renderData.samplers.get(descriptorID) || context.device.getSampler(samplerInfo));
                  } else {
                    var desc = context.resourceGraph.getDesc(resId);
                    if (desc.flags & ResourceFlags.STORAGE) {
                      var access = input[1][0].accessType !== AccessType.READ ? AccessFlagBit.COMPUTE_SHADER_WRITE : AccessFlagBit.COMPUTE_SHADER_READ_OTHER;
                      layoutDesc.bindBuffer(block.offset + i, gfxBuf, 0, access);
                    } else {
                      layoutDesc.bindBuffer(block.offset + i, gfxBuf);
                    }
                  }
                  if (!this._descriptorSet) this._descriptorSet = layoutDesc;
                  continue;
                }
              }
            }
          }
        }
        _createClass(RenderPassLayoutInfo, [{
          key: "descriptorSet",
          get: function get() {
            return this._descriptorSet;
          }
        }, {
          key: "layoutID",
          get: function get() {
            return this._layoutID;
          }
        }, {
          key: "vertID",
          get: function get() {
            return this._vertID;
          }
        }, {
          key: "stage",
          get: function get() {
            return this._stage;
          }
        }, {
          key: "layout",
          get: function get() {
            return this._layout;
          }
        }]);
        return RenderPassLayoutInfo;
      }();
      RasterPassInfo = /*#__PURE__*/function () {
        function RasterPassInfo() {
          this._id = void 0;
          this._pass = void 0;
        }
        var _proto8 = RasterPassInfo.prototype;
        _proto8._copyPass = function _copyPass(pass) {
          var rasterPass = this._pass || new RasterPass();
          rasterPass.width = pass.width;
          rasterPass.height = pass.height;
          rasterPass.versionName = pass.versionName;
          rasterPass.version = pass.version;
          rasterPass.showStatistics = pass.showStatistics;
          rasterPass.viewport.copy(pass.viewport);
          for (var _iterator3 = _createForOfIteratorHelperLoose(pass.rasterViews), _step3; !(_step3 = _iterator3()).done;) {
            var val = _step3.value;
            var currRasterKey = val[0];
            var currRasterView = val[1];
            var rasterView = rasterPass.rasterViews.get(currRasterKey) || new RasterView();
            rasterView.slotName = currRasterView.slotName;
            rasterView.accessType = currRasterView.accessType;
            rasterView.attachmentType = currRasterView.attachmentType;
            rasterView.loadOp = currRasterView.loadOp ? LoadOp.CLEAR : LoadOp.LOAD;
            rasterView.storeOp = currRasterView.storeOp;
            rasterView.clearFlags = currRasterView.clearFlags;
            rasterView.slotID = currRasterView.slotID;
            rasterView.clearColor.copy(currRasterView.clearColor);
            rasterPass.rasterViews.set(currRasterKey, rasterView);
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(pass.computeViews), _step4; !(_step4 = _iterator4()).done;) {
            var _val = _step4.value;
            var currComputeViews = _val[1];
            var currComputeKey = _val[0];
            var computeViews = rasterPass.computeViews.get(currComputeKey) || [];
            if (computeViews.length) computeViews.length = currComputeViews.length;
            var idx = 0;
            for (var _iterator5 = _createForOfIteratorHelperLoose(currComputeViews), _step5; !(_step5 = _iterator5()).done;) {
              var currComputeView = _step5.value;
              var computeView = computeViews[idx] || new ComputeView();
              computeView.name = currComputeView.name;
              computeView.accessType = currComputeView.accessType;
              computeView.clearFlags = currComputeView.clearFlags;
              computeView.clearValue.x = currComputeView.clearValue.x;
              computeView.clearValue.y = currComputeView.clearValue.y;
              computeView.clearValue.z = currComputeView.clearValue.z;
              computeView.clearValue.w = currComputeView.clearValue.w;
              computeView.clearValueType = currComputeView.clearValueType;
              computeViews[idx] = computeView;
              idx++;
            }
            rasterPass.computeViews.set(currComputeKey, computeViews);
          }
          this._pass = rasterPass;
        };
        _proto8.applyInfo = function applyInfo(id, pass) {
          this._id = id;
          this._copyPass(pass);
        };
        _createClass(RasterPassInfo, [{
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "pass",
          get: function get() {
            return this._pass;
          }
        }]);
        return RasterPassInfo;
      }();
      profilerViewport = new Viewport();
      renderPassArea = new Rect();
      resourceVisitor = new ResourceVisitor();
      DeviceRenderPass = /*#__PURE__*/function () {
        function DeviceRenderPass(passInfo) {
          this._renderPass = void 0;
          this._framebuffer = void 0;
          this._clearColor = [];
          this._deviceQueues = new Map();
          this._clearDepth = 1;
          this._clearStencil = 0;
          this._passID = void 0;
          this._layoutName = void 0;
          this._viewport = null;
          this._rasterInfo = void 0;
          this._layout = null;
          this._rasterInfo = passInfo;
          var device = context.device;
          this._layoutName = context.renderGraph.getLayout(passInfo.id);
          this._passID = cclegacy.rendering.getPassID(this._layoutName);
          var depthStencilAttachment = new DepthStencilAttachment();
          depthStencilAttachment.format = Format.DEPTH_STENCIL;
          depthStencilAttachment.depthLoadOp = LoadOp.DISCARD;
          depthStencilAttachment.stencilLoadOp = LoadOp.DISCARD;
          depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
          depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;
          var colors = [];
          var colorTexs = [];
          var depthTex = null;
          var swapchain = null;
          var framebuffer = null;
          for (var _iterator6 = _createForOfIteratorHelperLoose(passInfo.pass.computeViews), _step6; !(_step6 = _iterator6()).done;) {
            var cv = _step6.value;
            this._applyRenderLayout(cv);
          }
          // update the layout descriptorSet
          if (this.renderLayout && this.renderLayout.descriptorSet) {
            this.renderLayout.descriptorSet.update();
          }
          for (var _iterator7 = _createForOfIteratorHelperLoose(passInfo.pass.rasterViews), _step7; !(_step7 = _iterator7()).done;) {
            var _step7$value = _step7.value,
              resName = _step7$value[0],
              rasterV = _step7$value[1];
            var resTex = context.deviceTextures.get(resName);
            if (!resTex) {
              this.visitResource(resName);
              resTex = context.deviceTextures.get(resName);
            } else {
              var resGraph = context.resourceGraph;
              var resId = resGraph.vertex(resName);
              var resFbo = resGraph._vertices[resId]._object;
              if (resTex.framebuffer && resFbo instanceof Framebuffer && resTex.framebuffer !== resFbo) {
                resTex.framebuffer = resFbo;
              } else if (resTex.texture) {
                var desc = resGraph.getDesc(resId);
                if (resTex.texture.width !== desc.width || resTex.texture.height !== desc.height) {
                  resTex.texture.resize(desc.width, desc.height);
                }
              }
            }
            if (!swapchain) swapchain = resTex.swapchain;
            if (!framebuffer) framebuffer = resTex.framebuffer;
            var clearFlag = rasterV.clearFlags & 0xffffffff;
            switch (rasterV.attachmentType) {
              case AttachmentType.RENDER_TARGET:
                {
                  if (!resTex.swapchain && !resTex.framebuffer) colorTexs.push(resTex.texture);
                  var _colorAttachment = new ColorAttachment();
                  _colorAttachment.format = resTex.description.format;
                  _colorAttachment.sampleCount = resTex.description.sampleCount;
                  _colorAttachment.loadOp = rasterV.loadOp;
                  _colorAttachment.storeOp = rasterV.storeOp;
                  _colorAttachment.barrier = device.getGeneralBarrier(new GeneralBarrierInfo(rasterV.loadOp === LoadOp.LOAD ? AccessFlagBit.COLOR_ATTACHMENT_WRITE : AccessFlagBit.NONE, rasterV.storeOp === StoreOp.STORE ? AccessFlagBit.COLOR_ATTACHMENT_WRITE : AccessFlagBit.NONE));
                  this._clearColor.push(rasterV.clearColor);
                  colors.push(_colorAttachment);
                }
                break;
              case AttachmentType.DEPTH_STENCIL:
                depthStencilAttachment.depthStoreOp = rasterV.storeOp;
                depthStencilAttachment.stencilStoreOp = rasterV.storeOp;
                depthStencilAttachment.depthLoadOp = rasterV.loadOp;
                depthStencilAttachment.stencilLoadOp = rasterV.loadOp;
                depthStencilAttachment.barrier = device.getGeneralBarrier(new GeneralBarrierInfo(rasterV.loadOp === LoadOp.LOAD ? AccessFlagBit.DEPTH_STENCIL_ATTACHMENT_WRITE : AccessFlagBit.NONE, rasterV.storeOp === StoreOp.STORE ? AccessFlagBit.DEPTH_STENCIL_ATTACHMENT_WRITE : AccessFlagBit.NONE));
                if (!resTex.swapchain && !resTex.framebuffer) depthTex = resTex.texture;
                this._clearDepth = rasterV.clearColor.x;
                this._clearStencil = rasterV.clearColor.y;
                break;
              case AttachmentType.SHADING_RATE:
                // noop
                break;
              default:
            }
          }
          if (colors.length === 0) {
            var colorAttachment = new ColorAttachment();
            colors.push(colorAttachment);
          }
          if (colorTexs.length === 0 && !swapchain && !framebuffer) {
            var currTex = device.createTexture(new TextureInfo());
            colorTexs.push(currTex);
          }
          var depth = swapchain ? swapchain.depthStencilTexture : depthTex;
          if (!depth) {
            depthStencilAttachment.format = Format.UNKNOWN;
          }
          this._renderPass = device.createRenderPass(new RenderPassInfo(colors, depthStencilAttachment));
          this._framebuffer = framebuffer || device.createFramebuffer(new FramebufferInfo(this._renderPass, swapchain ? [swapchain.colorTexture] : colorTexs, swapchain ? swapchain.depthStencilTexture : depthTex));
        }
        var _proto9 = DeviceRenderPass.prototype;
        _proto9.visitResource = function visitResource(resName) {
          var resourceGraph = context.resourceGraph;
          var vertId = resourceGraph.vertex(resName);
          resourceVisitor.resName = resName;
          resourceGraph.visitVertex(resourceVisitor, vertId);
        };
        _proto9.addQueue = function addQueue(queue) {
          this._deviceQueues.set(queue.queueId, queue);
        };
        _proto9.preRecord = function preRecord() {
          context.descriptorSet = getDescriptorSetDataFromLayout(this.layoutName).descriptorSet;
        };
        _proto9._applyRenderLayout = function _applyRenderLayout(input) {
          var stageName = context.renderGraph.getLayout(this.rasterPassInfo.id);
          if (stageName) {
            var layoutGraph = context.layoutGraph;
            var stageId = layoutGraph.locateChild(layoutGraph.nullVertex(), stageName);
            if (stageId !== 0xFFFFFFFF) {
              this._layout = new RenderPassLayoutInfo(stageId, this.rasterPassInfo.id, input);
            }
          }
        };
        _proto9.getGlobalDescData = function getGlobalDescData() {
          var stageId = context.layoutGraph.locateChild(context.layoutGraph.nullVertex(), 'default');
          assert(stageId !== 0xFFFFFFFF);
          var layout = context.layoutGraph.getLayout(stageId);
          var layoutData = layout.descriptorSets.get(UpdateFrequency.PER_PASS);
          return layoutData;
        };
        _proto9._applyViewport = function _applyViewport(frameTex) {
          this._viewport = null;
          var viewport = this._rasterInfo.pass.viewport;
          if (viewport.left !== 0 || viewport.top !== 0 || viewport.width !== 0 || viewport.height !== 0) {
            this._viewport = viewport;
          }
        };
        _proto9._showProfiler = function _showProfiler(rect) {
          var profiler = context.pipeline.profiler;
          if (!profiler || !profiler.enabled) {
            return;
          }
          var renderPass = this._renderPass;
          var cmdBuff = context.commandBuffer;
          var submodel = profiler.subModels[0];
          var pass = submodel.passes[0];
          var ia = submodel.inputAssembler;
          var device = context.device;
          var pso = PipelineStateManager.getOrCreatePipelineState(device, pass, submodel.shaders[0], renderPass, ia);
          profilerViewport.width = rect.width;
          profilerViewport.height = rect.height;
          cmdBuff.setViewport(profilerViewport);
          cmdBuff.setScissor(rect);
          cmdBuff.bindPipelineState(pso);
          cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
          cmdBuff.bindDescriptorSet(SetIndex.LOCAL, submodel.descriptorSet);
          cmdBuff.bindInputAssembler(ia);
          cmdBuff.draw(ia);
        }

        // record common buffer
        ;
        _proto9.record = function record() {
          var tex = this.framebuffer.colorTextures[0];
          this._applyViewport(tex);
          var cmdBuff = context.commandBuffer;
          if (this._viewport) {
            renderPassArea.x = this._viewport.left;
            renderPassArea.y = this._viewport.top;
            renderPassArea.width = this._viewport.width;
            renderPassArea.height = this._viewport.height;
          } else {
            renderPassArea.y = renderPassArea.x = 0;
            renderPassArea.width = tex.width;
            renderPassArea.height = tex.height;
          }
          cmdBuff.beginRenderPass(this.renderPass, this.framebuffer, renderPassArea, this.clearColor, this.clearDepth, this.clearStencil);
          if (context.descriptorSet) {
            cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, context.descriptorSet);
          }
          for (var _iterator8 = _createForOfIteratorHelperLoose(this._deviceQueues.values()), _step8; !(_step8 = _iterator8()).done;) {
            var queue = _step8.value;
            queue.record();
          }
          if (this._rasterInfo.pass.showStatistics) {
            this._showProfiler(renderPassArea);
          }
          cmdBuff.endRenderPass();
        };
        _proto9.postRecord = function postRecord() {
          // nothing to do
        };
        _proto9.resetResource = function resetResource(id, pass) {
          this._rasterInfo.applyInfo(id, pass);
          this._layoutName = context.renderGraph.getLayout(id);
          this._passID = cclegacy.rendering.getPassID(this._layoutName);
          this._deviceQueues.clear();
          var framebuffer = null;
          var colTextures = [];
          var depTexture = this._framebuffer ? this._framebuffer.depthStencilTexture : null;
          for (var _iterator9 = _createForOfIteratorHelperLoose(this._rasterInfo.pass.computeViews), _step9; !(_step9 = _iterator9()).done;) {
            var cv = _step9.value;
            this._applyRenderLayout(cv);
          }
          // update the layout descriptorSet
          if (this.renderLayout && this.renderLayout.descriptorSet) {
            this.renderLayout.descriptorSet.update();
          }
          var resGraph = context.resourceGraph;
          var currentWidth = this._framebuffer ? this._framebuffer.width : 0;
          var currentHeight = this._framebuffer ? this._framebuffer.height : 0;
          var width = 0;
          var height = 0;
          for (var _iterator10 = _createForOfIteratorHelperLoose(this._rasterInfo.pass.rasterViews), _step10; !(_step10 = _iterator10()).done;) {
            var _step10$value = _step10.value,
              resName = _step10$value[0],
              rasterV = _step10$value[1];
            if (rasterV.attachmentType === AttachmentType.SHADING_RATE) {
              continue;
            }
            var resId = resGraph.vertex(resName);
            var resDesc = resGraph.getDesc(resId);
            width = resDesc.width;
            height = resDesc.height;
            break;
          }
          var needRebuild = width !== currentWidth || height !== currentHeight;
          for (var _iterator11 = _createForOfIteratorHelperLoose(this._rasterInfo.pass.rasterViews), _step11; !(_step11 = _iterator11()).done;) {
            var _step11$value = _step11.value,
              _resName = _step11$value[0],
              _rasterV = _step11$value[1];
            var deviceTex = context.deviceTextures.get(_resName);
            var currTex = deviceTex;
            if (!deviceTex) {
              this.visitResource(_resName);
              deviceTex = context.deviceTextures.get(_resName);
            }
            var _resGraph = context.resourceGraph;
            var _resId = _resGraph.vertex(_resName);
            var resFbo = _resGraph._vertices[_resId]._object;
            var _resDesc = _resGraph.getDesc(_resId);
            if (deviceTex.framebuffer && resFbo instanceof Framebuffer && deviceTex.framebuffer !== resFbo) {
              framebuffer = this._framebuffer = deviceTex.framebuffer = resFbo;
            } else if (!currTex || deviceTex.texture && needRebuild) {
              var gfxTex = deviceTex.texture;
              if (currTex) gfxTex.resize(_resDesc.width, _resDesc.height);
              switch (_rasterV.attachmentType) {
                case AttachmentType.RENDER_TARGET:
                  colTextures.push(gfxTex);
                  break;
                case AttachmentType.DEPTH_STENCIL:
                  depTexture = gfxTex;
                  break;
                case AttachmentType.SHADING_RATE:
                  // noop
                  break;
                default:
              }
            }
          }
          if (!framebuffer && colTextures.length) {
            this._framebuffer.destroy();
            this._framebuffer = context.device.createFramebuffer(new FramebufferInfo(this._renderPass, colTextures, depTexture));
          }
        };
        _createClass(DeviceRenderPass, [{
          key: "layoutName",
          get: function get() {
            return this._layoutName;
          }
        }, {
          key: "passID",
          get: function get() {
            return this._passID;
          }
        }, {
          key: "renderLayout",
          get: function get() {
            return this._layout;
          }
        }, {
          key: "renderPass",
          get: function get() {
            return this._renderPass;
          }
        }, {
          key: "framebuffer",
          get: function get() {
            return this._framebuffer;
          }
        }, {
          key: "clearColor",
          get: function get() {
            return this._clearColor;
          }
        }, {
          key: "clearDepth",
          get: function get() {
            return this._clearDepth;
          }
        }, {
          key: "clearStencil",
          get: function get() {
            return this._clearStencil;
          }
        }, {
          key: "deviceQueues",
          get: function get() {
            return this._deviceQueues;
          }
        }, {
          key: "rasterPassInfo",
          get: function get() {
            return this._rasterInfo;
          }
        }, {
          key: "viewport",
          get: function get() {
            return this._viewport;
          }
        }]);
        return DeviceRenderPass;
      }();
      ComputePassInfo = /*#__PURE__*/function () {
        function ComputePassInfo() {
          this._id = void 0;
          this._pass = void 0;
        }
        var _proto10 = ComputePassInfo.prototype;
        _proto10._copyPass = function _copyPass(pass) {
          var computePass = this._pass || new ComputePass();
          for (var _iterator12 = _createForOfIteratorHelperLoose(pass.computeViews), _step12; !(_step12 = _iterator12()).done;) {
            var val = _step12.value;
            var currComputeViews = val[1];
            var currComputeKey = val[0];
            var computeViews = computePass.computeViews.get(currComputeKey) || [];
            if (computeViews.length) computeViews.length = currComputeViews.length;
            var idx = 0;
            for (var _iterator13 = _createForOfIteratorHelperLoose(currComputeViews), _step13; !(_step13 = _iterator13()).done;) {
              var currComputeView = _step13.value;
              var computeView = computeViews[idx] || new ComputeView();
              computeView.name = currComputeView.name;
              computeView.accessType = currComputeView.accessType;
              computeView.clearFlags = currComputeView.clearFlags;
              computeView.clearValue.x = currComputeView.clearValue.x;
              computeView.clearValue.y = currComputeView.clearValue.y;
              computeView.clearValue.z = currComputeView.clearValue.z;
              computeView.clearValue.w = currComputeView.clearValue.w;
              computeView.clearValueType = currComputeView.clearValueType;
              computeViews[idx] = computeView;
              idx++;
            }
            computePass.computeViews.set(currComputeKey, computeViews);
          }
          this._pass = computePass;
        };
        _proto10.applyInfo = function applyInfo(id, pass) {
          this._id = id;
          this._copyPass(pass);
        };
        _createClass(ComputePassInfo, [{
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "pass",
          get: function get() {
            return this._pass;
          }
        }]);
        return ComputePassInfo;
      }();
      DeviceComputePass = /*#__PURE__*/function () {
        function DeviceComputePass(passInfo) {
          this._deviceQueues = [];
          this._passID = void 0;
          this._layoutName = void 0;
          this._viewport = null;
          this._computeInfo = void 0;
          this._layout = null;
          this._computeInfo = passInfo;
          this._layoutName = context.renderGraph.getLayout(passInfo.id);
          this._passID = cclegacy.rendering.getPassID(this._layoutName);
          for (var _iterator14 = _createForOfIteratorHelperLoose(passInfo.pass.computeViews), _step14; !(_step14 = _iterator14()).done;) {
            var cv = _step14.value;
            var resTex = context.deviceTextures.get(cv[0]);
            if (!resTex) {
              this.visitResource(cv[0]);
              resTex = context.deviceTextures.get(cv[0]);
            }
            this._applyRenderLayout(cv);
          }
          // update the layout descriptorSet
          if (this.renderLayout && this.renderLayout.descriptorSet) {
            this.renderLayout.descriptorSet.update();
          }
        }
        var _proto11 = DeviceComputePass.prototype;
        _proto11.preRecord = function preRecord() {
          // nothing to do
        };
        _proto11.postRecord = function postRecord() {
          // nothing to do
        };
        _proto11.visitResource = function visitResource(resName) {
          var resourceGraph = context.resourceGraph;
          var vertId = resourceGraph.vertex(resName);
          resourceVisitor.resName = resName;
          resourceGraph.visitVertex(resourceVisitor, vertId);
        };
        _proto11.addQueue = function addQueue(queue) {
          this._deviceQueues.push(queue);
        };
        _proto11._applyRenderLayout = function _applyRenderLayout(input) {
          var stageName = context.renderGraph.getLayout(this._computeInfo.id);
          if (stageName) {
            var layoutGraph = context.layoutGraph;
            var stageId = layoutGraph.locateChild(layoutGraph.nullVertex(), stageName);
            if (stageId !== 0xFFFFFFFF) {
              this._layout = new RenderPassLayoutInfo(stageId, this._computeInfo.id, input);
            }
          }
        };
        _proto11.getGlobalDescData = function getGlobalDescData() {
          var stageId = context.layoutGraph.locateChild(context.layoutGraph.nullVertex(), 'default');
          assert(stageId !== 0xFFFFFFFF);
          var layout = context.layoutGraph.getLayout(stageId);
          var layoutData = layout.descriptorSets.get(UpdateFrequency.PER_PASS);
          return layoutData;
        }

        // record common buffer
        ;
        _proto11.record = function record() {
          var cmdBuff = context.commandBuffer;
          if (context.descriptorSet) {
            cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, context.descriptorSet);
          }
          for (var _iterator15 = _createForOfIteratorHelperLoose(this._deviceQueues), _step15; !(_step15 = _iterator15()).done;) {
            var queue = _step15.value;
            queue.record();
          }
          var renderData = context.renderGraph.getData(this._computeInfo.id);
          updateGlobalDescBinding(renderData, context.renderGraph.getLayout(this._computeInfo.id));
        };
        _proto11.resetResource = function resetResource(id, pass) {
          this._computeInfo.applyInfo(id, pass);
          this._layoutName = context.renderGraph.getLayout(id);
          this._passID = cclegacy.rendering.getPassID(this._layoutName);
          this._deviceQueues.length = 0;
          for (var _iterator16 = _createForOfIteratorHelperLoose(this._computeInfo.pass.computeViews), _step16; !(_step16 = _iterator16()).done;) {
            var cv = _step16.value;
            this._applyRenderLayout(cv);
          }
          // update the layout descriptorSet
          if (this.renderLayout && this.renderLayout.descriptorSet) {
            this.renderLayout.descriptorSet.update();
          }
        };
        _createClass(DeviceComputePass, [{
          key: "layoutName",
          get: function get() {
            return this._layoutName;
          }
        }, {
          key: "passID",
          get: function get() {
            return this._passID;
          }
        }, {
          key: "renderLayout",
          get: function get() {
            return this._layout;
          }
        }, {
          key: "deviceQueues",
          get: function get() {
            return this._deviceQueues;
          }
        }, {
          key: "computePassInfo",
          get: function get() {
            return this._computeInfo;
          }
        }]);
        return DeviceComputePass;
      }();
      GraphScene = /*#__PURE__*/function () {
        function GraphScene() {
          this.scene = null;
          this.blit = null;
          this.dispatch = null;
          this.sceneID = -1;
        }
        var _proto12 = GraphScene.prototype;
        _proto12._copyScene = function _copyScene(scene) {
          if (scene) {
            if (!this.scene) {
              this.scene = new SceneData();
            }
            this.scene.scene = scene.scene;
            this.scene.light.level = scene.light.level;
            this.scene.light.light = scene.light.light;
            this.scene.flags = scene.flags;
            this.scene.camera = scene.camera;
            this.scene.shadingLight = scene.shadingLight;
            return;
          }
          this.scene = null;
        };
        _proto12._copyBlit = function _copyBlit(blit) {
          if (blit) {
            if (!this.blit) {
              this.blit = new Blit(blit.material, blit.passID, blit.sceneFlags, blit.camera);
            }
            this.blit.material = blit.material;
            this.blit.passID = blit.passID;
            this.blit.sceneFlags = blit.sceneFlags;
            this.blit.camera = blit.camera;
            return;
          }
          this.blit = null;
        };
        _proto12.init = function init(scene, blit, sceneID) {
          this._copyScene(scene);
          this._copyBlit(blit);
          this.sceneID = sceneID;
        };
        return GraphScene;
      }();
      sceneViewport = new Viewport();
      DeviceRenderScene = /*#__PURE__*/function () {
        function DeviceRenderScene() {
          this._currentQueue = void 0;
          this._renderPass = void 0;
          this._graphScene = void 0;
          this._scene = null;
          this._camera = null;
        }
        var _proto13 = DeviceRenderScene.prototype;
        _proto13.preRecord = function preRecord() {
          if (this.graphScene.blit) {
            this._currentQueue.createBlitDesc(this.graphScene.blit);
            this._currentQueue.blitDesc.update();
          }
          context.lightResource.buildLightBuffer(context.commandBuffer);
          context.lightResource.tryUpdateRenderSceneLocalDescriptorSet(context.culling);
        };
        _proto13.postRecord = function postRecord() {
          // nothing to do
        };
        _proto13.init = function init(queue, graphScene) {
          this._currentQueue = queue;
          this._graphScene = graphScene;
          this._renderPass = queue.devicePass.renderPass;
          var camera = graphScene.scene && graphScene.scene.camera ? graphScene.scene.camera : null;
          if (camera) {
            this._scene = camera.scene;
            this._camera = camera;
          }
        };
        _proto13._recordUI = function _recordUI() {
          var devicePass = this._currentQueue.devicePass;
          var rasterId = devicePass.rasterPassInfo.id;
          var passRenderData = context.renderGraph.getData(rasterId);
          // CCGlobal
          this._updateGlobal(passRenderData);
          // CCCamera, CCShadow, CCCSM
          var queueId = this._currentQueue.queueId;
          var queueRenderData = context.renderGraph.getData(queueId);
          this._updateGlobal(queueRenderData);
          var layoutName = context.renderGraph.getLayout(rasterId);
          var descSetData = getDescriptorSetDataFromLayout(layoutName);
          if (context.descriptorSet) {
            mergeSrcToTargetDesc(descSetData.descriptorSet, context.descriptorSet, true);
          }
          this._currentQueue.isUpdateUBO = true;
          var batches = this.camera.scene.batches;
          for (var i = 0; i < batches.length; i++) {
            var batch = batches[i];
            var visible = false;
            if (this.camera.visibility & batch.visFlags) {
              visible = true;
            }
            if (!visible) continue;
            // shaders.length always equals actual used passes.length
            var count = batch.shaders.length;
            for (var j = 0; j < count; j++) {
              var pass = batch.passes[j];
              if (pass.phaseID !== this._currentQueue.phaseID) continue;
              var shader = batch.shaders[j];
              var inputAssembler = batch.inputAssembler;
              var pso = PipelineStateManager.getOrCreatePipelineState(deviceManager.gfxDevice, pass, shader, this._renderPass, inputAssembler);
              context.commandBuffer.bindPipelineState(pso);
              context.commandBuffer.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
              var ds = batch.descriptorSet;
              context.commandBuffer.bindDescriptorSet(SetIndex.LOCAL, ds);
              context.commandBuffer.bindInputAssembler(inputAssembler);
              context.commandBuffer.draw(inputAssembler);
            }
          }
        };
        _proto13._recordBlit = function _recordBlit() {
          if (!this.graphScene.blit) {
            return;
          }
          var blit = this.graphScene.blit;
          var currMat = blit.material;
          var pass = currMat.passes[blit.passID];
          pass.update();
          var shader = pass.getShaderVariant();
          var devicePass = this._currentQueue.devicePass;
          var screenIa = this._currentQueue.blitDesc.screenQuad.quadIA;
          var globalDesc = context.descriptorSet;
          var pso = null;
          if (pass !== null && shader !== null && screenIa !== null) {
            pso = PipelineStateManager.getOrCreatePipelineState(context.device, pass, shader, devicePass.renderPass, screenIa);
          }
          if (pso) {
            context.commandBuffer.bindPipelineState(pso);
            context.commandBuffer.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
            context.commandBuffer.bindDescriptorSet(SetIndex.LOCAL, this._currentQueue.blitDesc.stageDesc);
            context.commandBuffer.bindInputAssembler(screenIa);
            context.commandBuffer.draw(screenIa);
          }
        };
        _proto13._updateGlobal = function _updateGlobal(data) {
          var devicePass = this._currentQueue.devicePass;
          updateGlobalDescBinding(data, context.renderGraph.getLayout(devicePass.rasterPassInfo.id));
        };
        _proto13._updateRenderData = function _updateRenderData() {
          if (this._currentQueue.isUpdateUBO) return;
          var devicePass = this._currentQueue.devicePass;
          var rasterId = devicePass.rasterPassInfo.id;
          var passRenderData = context.renderGraph.getData(rasterId);
          // CCGlobal
          this._updateGlobal(passRenderData);
          // CCCamera, CCShadow, CCCSM
          var queueId = this._currentQueue.queueId;
          var queueRenderData = context.renderGraph.getData(queueId);
          this._updateGlobal(queueRenderData);
          var sceneId = this.graphScene.sceneID;
          var sceneRenderData = context.renderGraph.getData(sceneId);
          if (sceneRenderData) this._updateGlobal(sceneRenderData);
          var layoutName = context.renderGraph.getLayout(rasterId);
          var descSetData = getDescriptorSetDataFromLayout(layoutName);
          mergeSrcToTargetDesc(descSetData.descriptorSet, context.descriptorSet, true);
          this._currentQueue.isUpdateUBO = true;
        };
        _proto13._applyViewport = function _applyViewport() {
          var queueViewport = this._currentQueue.viewport;
          if (queueViewport) {
            context.commandBuffer.setViewport(queueViewport);
            context.commandBuffer.setScissor(this._currentQueue.scissor);
          } else if (!this._currentQueue.devicePass.viewport) {
            var texture = this._currentQueue.devicePass.framebuffer.colorTextures[0];
            var graphScene = this.graphScene;
            var lightInfo = graphScene.scene ? graphScene.scene.light : null;
            var area = isShadowMap(this.graphScene) && graphScene.scene && lightInfo.light ? getRenderArea(this.camera, texture.width, texture.height, lightInfo.light, lightInfo.level) : getRenderArea(this.camera, texture.width, texture.height);
            sceneViewport.left = area.x;
            sceneViewport.top = area.y;
            sceneViewport.width = area.width;
            sceneViewport.height = area.height;
            context.commandBuffer.setViewport(sceneViewport);
            context.commandBuffer.setScissor(area);
          }
        };
        _proto13.record = function record() {
          var devicePass = this._currentQueue.devicePass;
          var sceneCulling = context.culling;
          this._updateRenderData();
          this._applyViewport();
          // Currently processing blit and camera first
          if (this.graphScene.blit) {
            this._recordBlit();
            return;
          }
          var renderQueueDesc = sceneCulling.renderQueueIndex.get(this.graphScene.sceneID);
          var renderQueue = sceneCulling.renderQueues[renderQueueDesc.renderQueueTarget];
          var graphSceneData = this.graphScene.scene;
          renderQueue.recordCommands(context.commandBuffer, this._renderPass);
          if (bool(graphSceneData.flags & SceneFlags.REFLECTION_PROBE)) renderQueue.probeQueue.removeMacro();
          if (graphSceneData.flags & SceneFlags.GEOMETRY) {
            var _geometryRenderer;
            (_geometryRenderer = this.camera.geometryRenderer) === null || _geometryRenderer === void 0 ? void 0 : _geometryRenderer.render(devicePass.renderPass, context.commandBuffer, context.pipeline.pipelineSceneData);
          }
          if (graphSceneData.flags & SceneFlags.UI) {
            this._recordUI();
          }
        };
        _createClass(DeviceRenderScene, [{
          key: "camera",
          get: function get() {
            return this._camera;
          }
        }, {
          key: "graphScene",
          get: function get() {
            return this._graphScene;
          }
        }]);
        return DeviceRenderScene;
      }();
      ExecutorPools = /*#__PURE__*/function () {
        function ExecutorPools(context) {
          this.deviceQueuePool = void 0;
          this.computeQueuePool = void 0;
          this.graphScenePool = void 0;
          this.reflectionProbe = void 0;
          this.passPool = void 0;
          this.rasterPassInfoPool = void 0;
          this.computePassInfoPool = void 0;
          this.deviceScenePool = void 0;
          this.deviceQueuePool = new RecyclePool(function () {
            return new DeviceRenderQueue();
          }, 16);
          this.deviceScenePool = new RecyclePool(function () {
            return new DeviceRenderScene();
          }, 16);
          this.computeQueuePool = new RecyclePool(function () {
            return new DeviceComputeQueue();
          }, 16);
          this.graphScenePool = new RecyclePool(function () {
            return new GraphScene();
          }, 16);
          this.rasterPassInfoPool = new RecyclePool(function () {
            return new RasterPassInfo();
          }, 16);
          this.computePassInfoPool = new RecyclePool(function () {
            return new ComputePassInfo();
          }, 16);
          this.reflectionProbe = new RecyclePool(function () {
            return new RenderReflectionProbeQueue(context.pipeline);
          }, 8);
          this.passPool = new RecyclePool(function () {
            return {
              priority: 0,
              hash: 0,
              depth: 0,
              shaderId: 0,
              subModel: null,
              passIdx: 0
            };
          }, 64);
        }
        var _proto14 = ExecutorPools.prototype;
        _proto14.addDeviceQueue = function addDeviceQueue() {
          return this.deviceQueuePool.add();
        };
        _proto14.addComputeQueue = function addComputeQueue() {
          return this.computeQueuePool.add();
        };
        _proto14.addGraphScene = function addGraphScene() {
          return this.graphScenePool.add();
        };
        _proto14.addDeviceScene = function addDeviceScene() {
          return this.deviceScenePool.add();
        };
        _proto14.addReflectionProbe = function addReflectionProbe() {
          return this.reflectionProbe.add();
        };
        _proto14.addRasterPassInfo = function addRasterPassInfo() {
          return this.rasterPassInfoPool.add();
        };
        _proto14.addComputePassInfo = function addComputePassInfo() {
          return this.computePassInfoPool.add();
        };
        _proto14.reset = function reset() {
          this.deviceQueuePool.reset();
          this.computeQueuePool.reset();
          this.graphScenePool.reset();
          this.reflectionProbe.reset();
          this.computePassInfoPool.reset();
          this.deviceScenePool.reset();
        };
        return ExecutorPools;
      }();
      vbData = new Float32Array(4 * 4);
      quadRect = new Rect(); // The attribute length of the volume light
      volLightAttrCount = 5;
      BlitInfo = /*#__PURE__*/function () {
        function BlitInfo(context) {
          this._pipelineIAData = void 0;
          this._context = void 0;
          this._width = void 0;
          this._height = void 0;
          this._lightVolumeBuffer = void 0;
          this._lightBufferData = void 0;
          this._deferredLitsBufView = void 0;
          this._localUBO = void 0;
          this._stageDescs = new Map();
          this._context = context;
          this._width = context.width;
          this._height = context.height;
          this._pipelineIAData = this._createQuadInputAssembler();
          var vb = this._genQuadVertexData(SurfaceTransform.IDENTITY, new Rect(0, 0, context.width, context.height));
          this._pipelineIAData.quadVB.update(vb);
          this._createLightVolumes();
          this._localUBO = context.device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, UBOLocal.SIZE, UBOLocal.SIZE));
        }
        var _proto15 = BlitInfo.prototype;
        _proto15.resize = function resize(width, height) {
          if (width !== this._width || height !== this._height) {
            quadRect.y = quadRect.x = 0;
            quadRect.width = width;
            quadRect.height = height;
            var vb = this._genQuadVertexData(SurfaceTransform.IDENTITY, quadRect);
            this._pipelineIAData.quadVB.update(vb);
          }
        };
        _proto15._createLightVolumes = function _createLightVolumes() {
          var device = this._context.root.device;
          var totalSize = Float32Array.BYTES_PER_ELEMENT * volLightAttrCount * 4 * UBODeferredLight.LIGHTS_PER_PASS;
          totalSize = Math.ceil(totalSize / device.capabilities.uboOffsetAlignment) * device.capabilities.uboOffsetAlignment;
          this._lightVolumeBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, totalSize, device.capabilities.uboOffsetAlignment));
          this._deferredLitsBufView = device.createBuffer(new BufferViewInfo(this._lightVolumeBuffer, 0, totalSize));
          this._lightBufferData = new Float32Array(totalSize / Float32Array.BYTES_PER_ELEMENT);
        };
        _proto15._genQuadVertexData = function _genQuadVertexData(surfaceTransform, renderArea) {
          var minX = renderArea.x / this._context.width;
          var maxX = (renderArea.x + renderArea.width) / this._context.width;
          var minY = renderArea.y / this._context.height;
          var maxY = (renderArea.y + renderArea.height) / this._context.height;
          if (this._context.root.device.capabilities.screenSpaceSignY > 0) {
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
        };
        _proto15._createQuadInputAssembler = function _createQuadInputAssembler() {
          // create vertex buffer
          var inputAssemblerData = new PipelineInputAssemblerData();
          var vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
          var vbSize = vbStride * 4;
          var device = cclegacy.director.root.device;
          var quadVB = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE | MemoryUsageBit.HOST, vbSize, vbStride));
          if (!quadVB) {
            return inputAssemblerData;
          }

          // create index buffer
          var ibStride = Uint16Array.BYTES_PER_ELEMENT;
          var ibSize = ibStride * 6;
          var quadIB = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, ibSize, ibStride));
          if (!quadIB) {
            return inputAssemblerData;
          }
          var indices = new Uint16Array(6);
          indices[0] = 0;
          indices[1] = 1;
          indices[2] = 2;
          indices[3] = 1;
          indices[4] = 3;
          indices[5] = 2;
          quadIB.update(indices.buffer);

          // create input assembler

          var attributes = new Array(2);
          attributes[0] = new Attribute('a_position', Format.RG32F);
          attributes[1] = new Attribute('a_texCoord', Format.RG32F);
          var quadIA = device.createInputAssembler(new InputAssemblerInfo(attributes, [quadVB], quadIB));
          inputAssemblerData.quadIB = quadIB;
          inputAssemblerData.quadVB = quadVB;
          inputAssemblerData.quadIA = quadIA;
          return inputAssemblerData;
        };
        _createClass(BlitInfo, [{
          key: "pipelineIAData",
          get: function get() {
            return this._pipelineIAData;
          }
        }, {
          key: "deferredLitsBufView",
          get: function get() {
            return this._deferredLitsBufView;
          }
        }, {
          key: "lightVolumeBuffer",
          get: function get() {
            return this._lightVolumeBuffer;
          }
        }, {
          key: "lightBufferData",
          get: function get() {
            return this._lightBufferData;
          }
        }, {
          key: "stageDescs",
          get: function get() {
            return this._stageDescs;
          }
        }, {
          key: "emptyLocalUBO",
          get: function get() {
            return this._localUBO;
          }
        }]);
        return BlitInfo;
      }();
      ExecutorContext = /*#__PURE__*/function () {
        function ExecutorContext(pipeline, ubo, device, resourceGraph, renderGraph, layoutGraph, width, height, descriptorSet) {
          if (descriptorSet === void 0) {
            descriptorSet = null;
          }
          this.device = void 0;
          this.pipeline = void 0;
          this.commandBuffer = void 0;
          this.pipelineSceneData = void 0;
          this.resourceGraph = void 0;
          this.devicePasses = new Map();
          this.deviceTextures = new Map();
          this.deviceBuffers = new Map();
          this.layoutGraph = void 0;
          this.root = void 0;
          this.ubo = void 0;
          this.additiveLight = void 0;
          this.submitMap = new Map();
          this.pools = void 0;
          this.blit = void 0;
          this.culling = void 0;
          this.lightResource = new LightResource();
          this.renderGraph = void 0;
          this.width = void 0;
          this.height = void 0;
          this.cullCamera = void 0;
          this.descriptorSet = void 0;
          this.pipeline = pipeline;
          this.device = device;
          this.commandBuffer = device.commandBuffer;
          this.pipelineSceneData = pipeline.pipelineSceneData;
          this.resourceGraph = resourceGraph;
          this.renderGraph = renderGraph;
          this.root = legacyCC.director.root;
          this.ubo = ubo;
          this.layoutGraph = layoutGraph;
          this.width = width;
          this.height = height;
          this.additiveLight = new RenderAdditiveLightQueue(pipeline);
          this.pools = new ExecutorPools(this);
          this.blit = new BlitInfo(this);
          this.culling = new SceneCulling();
          this.descriptorSet = descriptorSet;
        }
        var _proto16 = ExecutorContext.prototype;
        _proto16.reset = function reset() {
          this.culling.clear();
          this.pools.reset();
          this.cullCamera = null;
          for (var _iterator17 = _createForOfIteratorHelperLoose(this.submitMap), _step17; !(_step17 = _iterator17()).done;) {
            var infoMap = _step17.value;
            for (var _iterator18 = _createForOfIteratorHelperLoose(infoMap[1]), _step18; !(_step18 = _iterator18()).done;) {
              var info = _step18.value;
              info[1].reset();
            }
          }
          this.lightResource.clear();
        };
        _proto16.resize = function resize(width, height) {
          this.width = width;
          this.height = height;
          this.blit.resize(width, height);
        };
        return ExecutorContext;
      }();
      _export("Executor", Executor = /*#__PURE__*/function () {
        function Executor(pipeline, ubo, device, resourceGraph, layoutGraph, width, height) {
          this._context = void 0;
          this._visitor = void 0;
          context = this._context = new ExecutorContext(pipeline, ubo, device, resourceGraph, new RenderGraph(), layoutGraph, width, height);
          var programLib = cclegacy.rendering.programLib;
          context.lightResource.init(programLib, device, 16);
        }
        var _proto17 = Executor.prototype;
        _proto17.resize = function resize(width, height) {
          context.resize(width, height);
        };
        _proto17._removeDeviceResource = function _removeDeviceResource() {
          var pipeline = context.pipeline;
          var resourceUses = pipeline.resourceUses;
          var deletes = [];
          var deviceTexs = context.deviceTextures;
          for (var _iterator19 = _createForOfIteratorHelperLoose(deviceTexs), _step19; !(_step19 = _iterator19()).done;) {
            var _step19$value = _step19.value,
              _name2 = _step19$value[0],
              dTex = _step19$value[1];
            var resId = context.resourceGraph.vertex(_name2);
            var trait = context.resourceGraph.getTraits(resId);
            if (!resourceUses.includes(_name2)) {
              switch (trait.residency) {
                case ResourceResidency.MANAGED:
                  deletes.push(_name2);
                  break;
                default:
              }
            }
          }
          for (var _i2 = 0, _deletes = deletes; _i2 < _deletes.length; _i2++) {
            var name = _deletes[_i2];
            deviceTexs.get(name).release();
            deviceTexs["delete"](name);
          }
          var deletesBuff = [];
          var deviceBuffs = context.deviceBuffers;
          for (var _iterator20 = _createForOfIteratorHelperLoose(deviceBuffs), _step20; !(_step20 = _iterator20()).done;) {
            var _step20$value = _step20.value,
              _name3 = _step20$value[0],
              dBuff = _step20$value[1];
            var _resId2 = context.resourceGraph.vertex(_name3);
            var _trait = context.resourceGraph.getTraits(_resId2);
            if (!resourceUses.includes(_name3)) {
              switch (_trait.residency) {
                case ResourceResidency.MANAGED:
                  deletesBuff.push(_name3);
                  break;
                default:
              }
            }
          }
          for (var _i3 = 0, _deletesBuff = deletesBuff; _i3 < _deletesBuff.length; _i3++) {
            var _name = _deletesBuff[_i3];
            deviceBuffs.get(_name).release();
            deviceBuffs["delete"](_name);
          }
          resourceUses.length = 0;
        };
        _proto17.execute = function execute(rg) {
          context.renderGraph = rg;
          context.reset();
          var cmdBuff = context.commandBuffer;
          var culling = context.culling;
          culling.buildRenderQueues(rg, context.layoutGraph, context.pipelineSceneData);
          context.lightResource.buildLights(culling, context.pipelineSceneData.isHDR, context.pipelineSceneData.shadows);
          culling.uploadInstancing(cmdBuff);
          this._removeDeviceResource();
          cmdBuff.begin();
          if (!this._visitor) this._visitor = new RenderVisitor();
          depthFirstSearch(this._visitor.graphView, this._visitor, this._visitor.colorMap);
          cmdBuff.end();
          context.device.queue.submit([cmdBuff]);
        };
        _proto17.release = function release() {
          context.devicePasses.clear();
          for (var _iterator21 = _createForOfIteratorHelperLoose(context.deviceTextures), _step21; !(_step21 = _iterator21()).done;) {
            var _step21$value = _step21.value,
              k = _step21$value[0],
              v = _step21$value[1];
            v.release();
          }
          context.deviceTextures.clear();
          for (var _iterator22 = _createForOfIteratorHelperLoose(context.deviceBuffers), _step22; !(_step22 = _iterator22()).done;) {
            var _step22$value = _step22.value,
              _k = _step22$value[0],
              _v = _step22$value[1];
            _v.release();
          }
          context.deviceBuffers.clear();
        };
        return Executor;
      }());
      BaseRenderVisitor = /*#__PURE__*/function () {
        function BaseRenderVisitor() {
          this.queueID = 0xFFFFFFFF;
          this.sceneID = 0xFFFFFFFF;
          this.passID = 0xFFFFFFFF;
          this.dispatchID = 0xFFFFFFFF;
          this.currPass = void 0;
          this.currQueue = void 0;
          this.rg = void 0;
          this.rg = context.renderGraph;
        }
        var _proto18 = BaseRenderVisitor.prototype;
        _proto18._isRasterPass = function _isRasterPass(u) {
          return !!context.renderGraph.tryGetRasterPass(u);
        };
        _proto18.isComputePass = function isComputePass(u) {
          return !!context.renderGraph.tryGetCompute(u);
        };
        _proto18.isDispatch = function isDispatch(u) {
          return !!context.renderGraph.tryGetDispatch(u);
        };
        _proto18._isQueue = function _isQueue(u) {
          return !!context.renderGraph.tryGetQueue(u);
        };
        _proto18._isScene = function _isScene(u) {
          return !!context.renderGraph.tryGetScene(u);
        };
        _proto18._isBlit = function _isBlit(u) {
          return !!context.renderGraph.tryGetBlit(u);
        };
        _proto18.applyID = function applyID(id) {
          if (this._isRasterPass(id)) {
            this.passID = id;
          } else if (this._isQueue(id)) {
            this.queueID = id;
          } else if (this._isScene(id) || this._isBlit(id)) {
            this.sceneID = id;
          } else if (this.isComputePass(id)) {
            this.passID = id;
          } else if (this.isDispatch(id)) {
            this.dispatchID = id;
          }
        };
        return BaseRenderVisitor;
      }();
      PreRenderVisitor = /*#__PURE__*/function (_BaseRenderVisitor) {
        _inheritsLoose(PreRenderVisitor, _BaseRenderVisitor);
        function PreRenderVisitor() {
          return _BaseRenderVisitor.call(this) || this;
        }
        var _proto19 = PreRenderVisitor.prototype;
        _proto19.clear = function clear(value) {
          // do nothing
        };
        _proto19.viewport = function viewport(value) {
          // do nothing
        };
        _proto19.rasterPass = function rasterPass(pass) {
          if (!this.rg.getValid(this.passID)) return;
          var devicePasses = context.devicePasses;
          var passHash = pass.hashValue;
          this.currPass = devicePasses.get(passHash);
          if (!this.currPass) {
            var rasterInfo = context.pools.addRasterPassInfo();
            rasterInfo.applyInfo(this.passID, pass);
            this.currPass = new DeviceRenderPass(rasterInfo);
            devicePasses.set(passHash, this.currPass);
          } else {
            this.currPass.resetResource(this.passID, pass);
          }
          this.currPass.preRecord();
        };
        _proto19.rasterSubpass = function rasterSubpass(value) {
          // do nothing
        };
        _proto19.computeSubpass = function computeSubpass(value) {
          // do nothing
        };
        _proto19.resolve = function resolve(value) {
          // do nothing
        };
        _proto19.move = function move(value) {
          // do nothing
        };
        _proto19.raytrace = function raytrace(value) {
          // do nothing
        };
        _proto19.compute = function compute(pass) {
          if (!this.rg.getValid(this.passID)) return;
          var devicePasses = context.devicePasses;
          var computeInfo = new ComputePassInfo();
          computeInfo.applyInfo(this.passID, pass);
          this.currPass = new DeviceComputePass(computeInfo);
          this.currPass.preRecord();
          this.currPass.record();
        };
        _proto19.copy = function copy(value) {
          if (value.uploadPairs.length) {
            for (var _iterator23 = _createForOfIteratorHelperLoose(value.uploadPairs), _step23; !(_step23 = _iterator23()).done;) {
              var upload = _step23.value;
              var resBuffers = context.deviceBuffers;
              var resourceGraph = context.resourceGraph;
              var vertId = resourceGraph.vertex(upload.target);
              resourceVisitor.resName = upload.target;
              resourceGraph.visitVertex(resourceVisitor, vertId);
              var gfxBuffer = resBuffers.get(upload.target);
              context.device.commandBuffer.updateBuffer(gfxBuffer.buffer, upload.source, upload.source.byteLength);
            }
          }
        };
        _proto19.queue = function queue(value) {
          if (!this.rg.getValid(this.queueID)) return;
          var deviceQueue;
          if ('rasterPassInfo' in this.currPass) {
            deviceQueue = context.pools.addDeviceQueue();
            deviceQueue.init(this.currPass, value, this.queueID);
            this.currQueue = deviceQueue;
            this.currPass.addQueue(deviceQueue);
          } else {
            deviceQueue = context.pools.addComputeQueue();
            deviceQueue.init(this.currPass, value, this.queueID);
            this.currQueue = deviceQueue;
            this.currPass.addQueue(deviceQueue);
          }
          var layoutName = this.rg.getLayout(this.queueID);
          if (layoutName) {
            var layoutGraph = context.layoutGraph;
            if (this.currPass.renderLayout) {
              var layoutId = layoutGraph.locateChild(this.currPass.renderLayout.layoutID, layoutName);
              this.currQueue.layoutID = layoutId;
            }
          }
          this.currQueue.preRecord();
        };
        _proto19.scene = function scene(value) {
          if (!this.rg.getValid(this.sceneID)) return;
          var renderQueue = this.currQueue;
          var graphScene = context.pools.addGraphScene();
          graphScene.init(value, null, this.sceneID);
          var renderScene = renderQueue.addScene(graphScene);
          renderScene.preRecord();
        };
        _proto19.blit = function blit(value) {
          if (!this.rg.getValid(this.sceneID)) return;
          var renderQueue = this.currQueue;
          var graphScene = context.pools.addGraphScene();
          graphScene.init(null, value, -1);
          var renderScene = renderQueue.addScene(graphScene);
          renderScene.preRecord();
        };
        _proto19.dispatch = function dispatch(value) {
          var _value$material;
          var pso = null;
          var devicePass = this.currPass;
          var pass = (_value$material = value.material) === null || _value$material === void 0 ? void 0 : _value$material.passes[value.passID];
          pass === null || pass === void 0 ? void 0 : pass.update();
          var shader = pass === null || pass === void 0 ? void 0 : pass.getShaderVariant();
          if (pass !== null && shader !== null) {
            var psoInfo = new PipelineStateInfo(shader, pass === null || pass === void 0 ? void 0 : pass.pipelineLayout);
            psoInfo.bindPoint = PipelineBindPoint.COMPUTE;
            pso = deviceManager.gfxDevice.createPipelineState(psoInfo);
          }
          var cmdBuff = context.commandBuffer;
          if (pso) {
            cmdBuff.bindPipelineState(pso);
            var layoutStage = devicePass.renderLayout;
            var layoutDesc = layoutStage.descriptorSet;
            cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, layoutDesc);
          }
          var gx = value.threadGroupCountX;
          var gy = value.threadGroupCountY;
          var gz = value.threadGroupCountZ;
          cmdBuff.dispatch(new DispatchInfo(gx, gy, gz));
        };
        return PreRenderVisitor;
      }(BaseRenderVisitor);
      PostRenderVisitor = /*#__PURE__*/function (_BaseRenderVisitor2) {
        _inheritsLoose(PostRenderVisitor, _BaseRenderVisitor2);
        function PostRenderVisitor() {
          return _BaseRenderVisitor2.call(this) || this;
        }
        var _proto20 = PostRenderVisitor.prototype;
        _proto20.clear = function clear(value) {
          // do nothing
        };
        _proto20.viewport = function viewport(value) {
          // do nothing
        };
        _proto20.rasterPass = function rasterPass(pass) {
          var devicePasses = context.devicePasses;
          var passHash = pass.hashValue;
          var currPass = devicePasses.get(passHash);
          if (!currPass) return;
          this.currPass = currPass;
          this.currPass.record();
        };
        _proto20.rasterSubpass = function rasterSubpass(value) {
          // do nothing
        };
        _proto20.computeSubpass = function computeSubpass(value) {
          // do nothing
        };
        _proto20.resolve = function resolve(value) {
          // do nothing
        };
        _proto20.compute = function compute(value) {
          // do nothing
        };
        _proto20.copy = function copy(value) {
          // do nothing
        };
        _proto20.move = function move(value) {
          // do nothing
        };
        _proto20.raytrace = function raytrace(value) {
          // do nothing
        };
        _proto20.queue = function queue(value) {
          // collect scene results
        };
        _proto20.scene = function scene(value) {
          // scene command list finished
        };
        _proto20.blit = function blit(value) {
          // do nothing
        };
        _proto20.dispatch = function dispatch(value) {
          // do nothing
        };
        return PostRenderVisitor;
      }(BaseRenderVisitor);
      _export("RenderVisitor", RenderVisitor = /*#__PURE__*/function (_DefaultVisitor) {
        _inheritsLoose(RenderVisitor, _DefaultVisitor);
        function RenderVisitor() {
          var _this3;
          _this3 = _DefaultVisitor.call(this) || this;
          _this3._preVisitor = void 0;
          _this3._postVisitor = void 0;
          _this3._graphView = void 0;
          _this3._colorMap = void 0;
          _this3._preVisitor = new PreRenderVisitor();
          _this3._postVisitor = new PostRenderVisitor();
          _this3._graphView = new ReferenceGraphView(context.renderGraph);
          _this3._colorMap = new VectorGraphColorMap(context.renderGraph.numVertices());
          return _this3;
        }
        var _proto21 = RenderVisitor.prototype;
        _proto21.discoverVertex = function discoverVertex(u, gv) {
          var g = gv.g;
          this._preVisitor.applyID(u);
          g.visitVertex(this._preVisitor, u);
        };
        _proto21.finishVertex = function finishVertex(v, gv) {
          var g = gv.g;
          g.visitVertex(this._postVisitor, v);
        };
        _createClass(RenderVisitor, [{
          key: "graphView",
          get: function get() {
            return this._graphView;
          }
        }, {
          key: "colorMap",
          get: function get() {
            return this._colorMap;
          }
        }]);
        return RenderVisitor;
      }(DefaultVisitor));
    }
  };
});