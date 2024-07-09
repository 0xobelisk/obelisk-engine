System.register("q-bundled:///fs/cocos/rendering/custom/executor.js", ["../index.js", "../../core/index.js", "../../core/geometry/intersect.js", "../../core/geometry/sphere.js", "../../gfx/index.js", "../../core/global-exports.js", "../../core/math/vec3.js", "../../core/math/vec4.js", "../../render-scene/scene/shadows.js", "../define.js", "../render-pipeline.js", "./render-graph.js", "./types.js", "../render-additive-light-queue.js", "./graph.js", "./effect.js", "./define.js", "../render-reflection-probe-queue.js", "./scene-culling.js"], function (_export, _context) {
  "use strict";

  var getPhaseID, PipelineStateManager, assert, cclegacy, RecyclePool, intersect, Sphere, AccessFlagBit, Attribute, BufferInfo, BufferUsageBit, BufferViewInfo, ColorAttachment, DepthStencilAttachment, DescriptorSetInfo, deviceManager, DispatchInfo, Format, Framebuffer, FramebufferInfo, GeneralBarrierInfo, InputAssemblerInfo, LoadOp, MemoryUsageBit, PipelineBindPoint, PipelineStateInfo, Rect, RenderPassInfo, StoreOp, SurfaceTransform, Texture, TextureInfo, TextureType, TextureUsageBit, Viewport, legacyCC, Vec3, Vec4, ShadowType, SetIndex, UBODeferredLight, UBOForwardLight, UBOLocal, PipelineInputAssemblerData, Blit, ComputePass, ComputeView, RasterPass, RasterView, RenderGraph, RenderSwapchain, SceneData, AccessType, AttachmentType, QueueHint, ResourceDimension, ResourceFlags, ResourceResidency, SceneFlags, UpdateFrequency, RenderAdditiveLightQueue, DefaultVisitor, depthFirstSearch, ReferenceGraphView, VectorGraphColorMap, bool, getDescriptorSetDataFromLayout, getRenderArea, mergeSrcToTargetDesc, updateGlobalDescBinding, RenderReflectionProbeQueue, LightResource, SceneCulling, ResourceVisitor, DeviceResource, DeviceTexture, DeviceBuffer, BlitDesc, DeviceComputeQueue, DeviceRenderQueue, SubmitInfo, RenderPassLayoutInfo, RasterPassInfo, DeviceRenderPass, ComputePassInfo, DeviceComputePass, GraphScene, DeviceRenderScene, ExecutorPools, BlitInfo, ExecutorContext, Executor, BaseRenderVisitor, PreRenderVisitor, PostRenderVisitor, RenderVisitor, context, _vec4Array, profilerViewport, renderPassArea, resourceVisitor, sceneViewport, vbData, quadRect, volLightAttrCount;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    const pSceneData = cclegacy.director.root.pipeline.pipelineSceneData;
    return pSceneData.shadows.enabled && pSceneData.shadows.type === ShadowType.ShadowMap && graphScene.scene && (graphScene.scene.flags & SceneFlags.SHADOW_CASTER) !== 0;
  }
  _export({
    Executor: void 0,
    RenderVisitor: void 0
  });
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
      ResourceVisitor = class ResourceVisitor {
        constructor(resName = '') {
          this.name = void 0;
          this.name = resName;
          if (context) {
            const ppl = context.pipeline;
            ppl.resourceUses.push(resName);
          }
        }
        set resName(value) {
          this.name = value;
        }
        checkTexture(name) {
          const dTex = context.deviceTextures.get(name);
          const resID = context.resourceGraph.vertex(this.name);
          const desc = context.resourceGraph.getDesc(resID);
          let res = false;
          if (dTex.texture) {
            res = dTex.texture.width === desc.width && dTex.texture.height === desc.height;
          } else if (dTex.swapchain) {
            res = dTex.swapchain.width === desc.width && dTex.swapchain.height === desc.height;
          }
          return res;
        }
        createDeviceTex(value) {
          if (!context.deviceTextures.get(this.name)) {
            const deviceTex = new DeviceTexture(this.name, value);
            context.deviceTextures.set(this.name, deviceTex);
          } else if (!this.checkTexture(this.name)) {
            var _dTex$texture;
            const dTex = context.deviceTextures.get(this.name);
            (_dTex$texture = dTex.texture) === null || _dTex$texture === void 0 ? void 0 : _dTex$texture.destroy();
            const deviceTex = new DeviceTexture(this.name, value);
            context.deviceTextures.set(this.name, deviceTex);
          }
        }
        checkBuffer(name) {
          const dBuf = context.deviceBuffers.get(name);
          const resID = context.resourceGraph.vertex(this.name);
          const desc = context.resourceGraph.getDesc(resID);
          return dBuf.buffer.size >= desc.width;
        }
        createDeviceBuf(value) {
          const mount = !!context.deviceBuffers.get(this.name);
          if (!mount) {
            const deviceBuf = new DeviceBuffer(this.name, value);
            context.deviceBuffers.set(this.name, deviceBuf);
          } else if (!this.checkBuffer(this.name)) {
            var _dBuf$buffer;
            const dBuf = context.deviceBuffers.get(this.name);
            (_dBuf$buffer = dBuf.buffer) === null || _dBuf$buffer === void 0 ? void 0 : _dBuf$buffer.destroy();
            const deviceBuf = new DeviceBuffer(this.name, value);
            context.deviceBuffers.set(this.name, deviceBuf);
          }
        }
        managed(value) {
          this.createDeviceTex(value);
        }
        managedBuffer(value) {
          this.createDeviceBuf(value);
        }
        managedTexture(value) {
          // noop
        }
        persistentBuffer(value) {
          this.createDeviceBuf(value);
        }
        persistentTexture(value) {
          this.createDeviceTex(value);
        }
        framebuffer(value) {
          this.createDeviceTex(value);
        }
        swapchain(value) {
          this.createDeviceTex(value);
        }
        formatView(value) {
          // do nothing
        }
        subresourceView(value) {
          // do nothing
        }
      }; // Defining the recording interface
      DeviceResource = class DeviceResource {
        constructor(name) {
          this._name = void 0;
          this._name = name;
        }
        get name() {
          return this._name;
        }
      };
      DeviceTexture = class DeviceTexture extends DeviceResource {
        get texture() {
          return this._texture;
        }
        set framebuffer(val) {
          this._framebuffer = val;
        }
        get framebuffer() {
          return this._framebuffer;
        }
        get description() {
          return this._desc;
        }
        get trait() {
          return this._trait;
        }
        get swapchain() {
          return this._swapchain;
        }
        constructor(name, tex) {
          super(name);
          this._texture = null;
          this._swapchain = null;
          this._framebuffer = null;
          this._desc = null;
          this._trait = null;
          const resGraph = context.resourceGraph;
          const verID = resGraph.vertex(name);
          this._desc = resGraph.getDesc(verID);
          this._trait = resGraph.getTraits(verID);
          if (tex instanceof Texture) {
            this._texture = tex;
            return;
          }
          if (tex instanceof Framebuffer) {
            this._framebuffer = tex;
            return;
          }
          if (tex instanceof RenderSwapchain) {
            this._swapchain = tex.swapchain;
            return;
          }
          const info = this._desc;
          let type = TextureType.TEX2D;
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
          let usageFlags = TextureUsageBit.NONE;
          if (info.flags & ResourceFlags.COLOR_ATTACHMENT) usageFlags |= TextureUsageBit.COLOR_ATTACHMENT;
          if (info.flags & ResourceFlags.DEPTH_STENCIL_ATTACHMENT) usageFlags |= TextureUsageBit.DEPTH_STENCIL_ATTACHMENT;
          if (info.flags & ResourceFlags.INPUT_ATTACHMENT) usageFlags |= TextureUsageBit.INPUT_ATTACHMENT;
          if (info.flags & ResourceFlags.SAMPLED) usageFlags |= TextureUsageBit.SAMPLED;
          if (info.flags & ResourceFlags.STORAGE) usageFlags |= TextureUsageBit.STORAGE;
          if (info.flags & ResourceFlags.TRANSFER_SRC) usageFlags |= TextureUsageBit.TRANSFER_SRC;
          if (info.flags & ResourceFlags.TRANSFER_DST) usageFlags |= TextureUsageBit.TRANSFER_DST;
          this._texture = context.device.createTexture(new TextureInfo(type, usageFlags, info.format, info.width, info.height));
        }
        release() {
          if (this.framebuffer) {
            this.framebuffer.destroy();
            this._framebuffer = null;
          }
          if (this.texture) {
            this.texture.destroy();
            this._texture = null;
          }
        }
      };
      DeviceBuffer = class DeviceBuffer extends DeviceResource {
        get buffer() {
          return this._buffer;
        }
        constructor(name, buffer) {
          super(name);
          this._buffer = void 0;
          const resGraph = context.resourceGraph;
          const verID = resGraph.vertex(name);
          const desc = resGraph.getDesc(verID);
          const bufferInfo = new BufferInfo();
          bufferInfo.size = desc.width;
          bufferInfo.memUsage = MemoryUsageBit.DEVICE;
          if (desc.flags & ResourceFlags.INDIRECT) bufferInfo.usage |= BufferUsageBit.INDIRECT;
          if (desc.flags & ResourceFlags.UNIFORM) bufferInfo.usage |= BufferUsageBit.UNIFORM;
          if (desc.flags & ResourceFlags.STORAGE) bufferInfo.usage |= BufferUsageBit.STORAGE;
          if (desc.flags & ResourceFlags.TRANSFER_SRC) bufferInfo.usage |= BufferUsageBit.TRANSFER_SRC;
          if (desc.flags & ResourceFlags.TRANSFER_DST) bufferInfo.usage |= BufferUsageBit.TRANSFER_DST;
          this._buffer = context.device.createBuffer(bufferInfo);
        }
        release() {
          if (this._buffer) {
            this._buffer.destroy();
            this._buffer = null;
          }
        }
      };
      _vec4Array = new Float32Array(4);
      BlitDesc = class BlitDesc {
        get screenQuad() {
          return this._screenQuad;
        }
        get blit() {
          return this._blit;
        }
        set blit(blit) {
          this._blit = blit;
        }
        get stageDesc() {
          return this._stageDesc;
        }
        constructor(blit, queue) {
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
        _createQuadInputAssembler() {
          return context.blit.pipelineIAData;
        }
        createScreenQuad() {
          if (!this._screenQuad) {
            this._screenQuad = this._createQuadInputAssembler();
          }
        }
        _gatherVolumeLights(camera) {
          if (!camera.scene) {
            return;
          }
          const pipeline = context.pipeline;
          const cmdBuff = context.commandBuffer;
          const sphereLights = camera.scene.sphereLights;
          const spotLights = camera.scene.spotLights;
          const _sphere = Sphere.create(0, 0, 0, 1);
          const exposure = camera.exposure;
          let idx = 0;
          const maxLights = UBODeferredLight.LIGHTS_PER_PASS;
          const elementLen = Vec4.length; // sizeof(vec4) / sizeof(float32)
          const fieldLen = elementLen * maxLights;
          for (let i = 0; i < sphereLights.length && idx < maxLights; i++, ++idx) {
            const light = sphereLights[i];
            Sphere.set(_sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              // cc_lightPos
              Vec3.toArray(_vec4Array, light.position);
              _vec4Array[3] = 0;
              this._lightBufferData.set(_vec4Array, idx * elementLen);

              // cc_lightColor
              Vec3.toArray(_vec4Array, light.color);
              if (light.useColorTemperature) {
                const tempRGB = light.colorTemperatureRGB;
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
          for (let i = 0; i < spotLights.length && idx < maxLights; i++, ++idx) {
            const light = spotLights[i];
            Sphere.set(_sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              // cc_lightPos
              Vec3.toArray(_vec4Array, light.position);
              _vec4Array[3] = 1;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 0);

              // cc_lightColor
              Vec3.toArray(_vec4Array, light.color);
              if (light.useColorTemperature) {
                const tempRGB = light.colorTemperatureRGB;
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
              _vec4Array[2] = light.spotAngle;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 2);

              // cc_lightDir
              Vec3.toArray(_vec4Array, light.direction);
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 3);
            }
          }

          // the count of lights is set to cc_lightDir[0].w
          const offset = fieldLen * 3 + 3;
          this._lightBufferData.set([idx], offset);
          cmdBuff.updateBuffer(this._lightVolumeBuffer, this._lightBufferData);
        }
        update() {
          if (this.blit.sceneFlags & SceneFlags.VOLUMETRIC_LIGHTING && this.blit.camera && !this._isGatherLight) {
            this._gatherVolumeLights(this.blit.camera);
            this._isGatherLight = true;
            this._isUpdate = false;
          }
          if (!this._isUpdate) {
            this._stageDesc.update();
            this._isUpdate = true;
          }
        }
        reset() {
          this._isUpdate = false;
          this._isGatherLight = false;
        }
        createStageDescriptor() {
          const blit = this.blit;
          const pass = blit.material.passes[blit.passID];
          const device = context.device;
          this._stageDesc = context.blit.stageDescs.get(pass);
          if (!this._stageDesc) {
            this._stageDesc = device.createDescriptorSet(new DescriptorSetInfo(pass.localSetLayout));
            context.blit.stageDescs.set(pass, this._stageDesc);
          }
          if (this.blit.sceneFlags & SceneFlags.VOLUMETRIC_LIGHTING) {
            this._lightVolumeBuffer = context.blit.lightVolumeBuffer;
            const deferredLitsBufView = context.blit.deferredLitsBufView;
            this._lightBufferData = context.blit.lightBufferData;
            this._lightBufferData.fill(0);
            this._stageDesc.bindBuffer(UBOForwardLight.BINDING, deferredLitsBufView);
          }
          this._stageDesc.bindBuffer(UBOLocal.BINDING, context.blit.emptyLocalUBO);
        }
      };
      DeviceComputeQueue = class DeviceComputeQueue {
        constructor() {
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
        preRecord() {
          // nothing to do
        }
        postRecord() {
          // nothing to do
        }
        init(devicePass, renderQueue, id) {
          this.reset();
          this.queueHint = renderQueue.hint;
          this.queueId = id;
          this._devicePass = devicePass;
          this._phaseID = cclegacy.rendering.getPhaseID(devicePass.passID, context.renderGraph.getLayout(id));
        }
        get phaseID() {
          return this._phaseID;
        }
        set layoutID(value) {
          this._layoutID = value;
          const layoutGraph = context.layoutGraph;
          this._renderPhase = layoutGraph.tryGetRenderPhase(value);
          const layout = layoutGraph.getLayout(value);
          this._descSetData = layout.descriptorSets.get(UpdateFrequency.PER_PHASE);
        }
        get layoutID() {
          return this._layoutID;
        }
        get descSetData() {
          return this._descSetData;
        }
        get renderPhase() {
          return this._renderPhase;
        }
        set queueId(val) {
          this._queueId = val;
        }
        get queueId() {
          return this._queueId;
        }
        set isUpdateUBO(update) {
          this._isUpdateUBO = update;
        }
        get isUpdateUBO() {
          return this._isUpdateUBO;
        }
        set isUploadInstance(value) {
          this._isUploadInstance = value;
        }
        get isUploadInstance() {
          return this._isUploadInstance;
        }
        set isUploadBatched(value) {
          this._isUploadBatched = value;
        }
        get isUploadBatched() {
          return this._isUploadBatched;
        }
        reset() {
          this._isUpdateUBO = false;
          this._isUploadInstance = false;
          this._isUploadBatched = false;
        }
        set queueHint(value) {
          this._hint = value;
        }
        get queueHint() {
          return this._hint;
        }
        get devicePass() {
          return this._devicePass;
        }
        record() {
          if (this._descSetData && this._descSetData.descriptorSet) {
            context.commandBuffer.bindDescriptorSet(SetIndex.COUNT, this._descSetData.descriptorSet);
          }
        }
      };
      DeviceRenderQueue = class DeviceRenderQueue {
        constructor() {
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
        get phaseID() {
          return this._phaseID;
        }
        set layoutID(value) {
          this._layoutID = value;
          const layoutGraph = context.layoutGraph;
          this._renderPhase = layoutGraph.tryGetRenderPhase(value);
          const layout = layoutGraph.getLayout(value);
          this._descSetData = layout.descriptorSets.get(UpdateFrequency.PER_PHASE);
        }
        get layoutID() {
          return this._layoutID;
        }
        get descSetData() {
          return this._descSetData;
        }
        get renderPhase() {
          return this._renderPhase;
        }
        get viewport() {
          return this._viewport;
        }
        get scissor() {
          return this._scissor;
        }
        set queueId(val) {
          this._queueId = val;
        }
        get queueId() {
          return this._queueId;
        }
        set isUpdateUBO(update) {
          this._isUpdateUBO = update;
        }
        get isUpdateUBO() {
          return this._isUpdateUBO;
        }
        set isUploadInstance(value) {
          this._isUploadInstance = value;
        }
        get isUploadInstance() {
          return this._isUploadInstance;
        }
        set isUploadBatched(value) {
          this._isUploadBatched = value;
        }
        get isUploadBatched() {
          return this._isUploadBatched;
        }
        init(devicePass, renderQueue, id) {
          this.reset();
          this._graphQueue = renderQueue;
          this.queueHint = renderQueue.hint;
          const viewport = this._viewport = renderQueue.viewport;
          if (viewport) {
            this._scissor = new Rect(viewport.left, viewport.top, viewport.width, viewport.height);
          }
          this.queueId = id;
          this._devicePass = devicePass;
          this._phaseID = cclegacy.rendering.getPhaseID(devicePass.passID, context.renderGraph.getLayout(id));
        }
        createBlitDesc(blit) {
          if (!this._blitDesc) {
            this._blitDesc = new BlitDesc(blit, this);
          }
          this._blitDesc.createScreenQuad();
          this._blitDesc.createStageDescriptor();
        }
        addScene(scene) {
          const deviceScene = context.pools.addDeviceScene();
          deviceScene.init(this, scene);
          this._renderScenes.push(deviceScene);
          return deviceScene;
        }
        reset() {
          var _this$_blitDesc;
          this._renderScenes.length = 0;
          this._isUpdateUBO = false;
          this._isUploadInstance = false;
          this._isUploadBatched = false;
          (_this$_blitDesc = this._blitDesc) === null || _this$_blitDesc === void 0 ? void 0 : _this$_blitDesc.reset();
        }
        get graphQueue() {
          return this._graphQueue;
        }
        get blitDesc() {
          return this._blitDesc;
        }
        get renderScenes() {
          return this._renderScenes;
        }
        set queueHint(value) {
          this._hint = value;
        }
        get queueHint() {
          return this._hint;
        }
        get devicePass() {
          return this._devicePass;
        }
        preRecord() {
          // nothing to do
        }
        record() {
          if (this._descSetData && this._descSetData.descriptorSet) {
            context.commandBuffer.bindDescriptorSet(SetIndex.COUNT, this._descSetData.descriptorSet);
          }
          this._renderScenes.forEach(scene => {
            scene.record();
          });
        }
        postRecord() {
          // nothing to do
        }
      };
      SubmitInfo = class SubmitInfo {
        constructor() {
          // <scene id, shadow queue>
          this.additiveLight = null;
          this.reflectionProbe = null;
        }
        reset() {
          this.additiveLight = null;
          this.reflectionProbe = null;
        }
      };
      RenderPassLayoutInfo = class RenderPassLayoutInfo {
        constructor(layoutId, vertId, input) {
          this._layoutID = 0;
          this._vertID = -1;
          this._stage = null;
          this._layout = void 0;
          this._inputName = void 0;
          this._descriptorSet = null;
          this._inputName = input[0];
          this._layoutID = layoutId;
          this._vertID = vertId;
          const lg = context.layoutGraph;
          this._stage = lg.getRenderStage(layoutId);
          this._layout = lg.getLayout(layoutId);
          const layoutData = this._layout.descriptorSets.get(UpdateFrequency.PER_PASS);
          if (!layoutData) {
            return;
          }
          const layoutDesc = layoutData.descriptorSet;
          // find resource
          const deviceTex = context.deviceTextures.get(this._inputName);
          const gfxTex = deviceTex === null || deviceTex === void 0 ? void 0 : deviceTex.texture;
          const deviceBuf = context.deviceBuffers.get(this._inputName);
          const gfxBuf = deviceBuf === null || deviceBuf === void 0 ? void 0 : deviceBuf.buffer;
          if (!gfxTex && !gfxBuf) {
            throw Error(`Could not find texture with resource name ${this._inputName}`);
          }
          const resId = context.resourceGraph.vertex(this._inputName);
          const samplerInfo = context.resourceGraph.getSampler(resId);
          // bind descriptors
          for (const descriptor of input[1]) {
            const descriptorName = descriptor.name;
            const descriptorID = lg.attributeIndex.get(descriptorName);
            // find descriptor binding
            for (const block of layoutData.descriptorSetLayoutData.descriptorBlocks) {
              for (let i = 0; i !== block.descriptors.length; ++i) {
                if (descriptorID === block.descriptors[i].descriptorID) {
                  if (gfxTex) {
                    layoutDesc.bindTexture(block.offset + i, gfxTex);
                    const renderData = context.renderGraph.getData(this._vertID);
                    layoutDesc.bindSampler(block.offset + i, renderData.samplers.get(descriptorID) || context.device.getSampler(samplerInfo));
                  } else {
                    const desc = context.resourceGraph.getDesc(resId);
                    if (desc.flags & ResourceFlags.STORAGE) {
                      const access = input[1][0].accessType !== AccessType.READ ? AccessFlagBit.COMPUTE_SHADER_WRITE : AccessFlagBit.COMPUTE_SHADER_READ_OTHER;
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
        get descriptorSet() {
          return this._descriptorSet;
        }
        get layoutID() {
          return this._layoutID;
        }
        get vertID() {
          return this._vertID;
        }
        get stage() {
          return this._stage;
        }
        get layout() {
          return this._layout;
        }
      };
      RasterPassInfo = class RasterPassInfo {
        constructor() {
          this._id = void 0;
          this._pass = void 0;
        }
        get id() {
          return this._id;
        }
        get pass() {
          return this._pass;
        }
        _copyPass(pass) {
          const rasterPass = this._pass || new RasterPass();
          rasterPass.width = pass.width;
          rasterPass.height = pass.height;
          rasterPass.versionName = pass.versionName;
          rasterPass.version = pass.version;
          rasterPass.showStatistics = pass.showStatistics;
          rasterPass.viewport.copy(pass.viewport);
          for (const val of pass.rasterViews) {
            const currRasterKey = val[0];
            const currRasterView = val[1];
            const rasterView = rasterPass.rasterViews.get(currRasterKey) || new RasterView();
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
          for (const val of pass.computeViews) {
            const currComputeViews = val[1];
            const currComputeKey = val[0];
            const computeViews = rasterPass.computeViews.get(currComputeKey) || [];
            if (computeViews.length) computeViews.length = currComputeViews.length;
            let idx = 0;
            for (const currComputeView of currComputeViews) {
              const computeView = computeViews[idx] || new ComputeView();
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
        }
        applyInfo(id, pass) {
          this._id = id;
          this._copyPass(pass);
        }
      };
      profilerViewport = new Viewport();
      renderPassArea = new Rect();
      resourceVisitor = new ResourceVisitor();
      DeviceRenderPass = class DeviceRenderPass {
        constructor(passInfo) {
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
          const device = context.device;
          this._layoutName = context.renderGraph.getLayout(passInfo.id);
          this._passID = cclegacy.rendering.getPassID(this._layoutName);
          const depthStencilAttachment = new DepthStencilAttachment();
          depthStencilAttachment.format = Format.DEPTH_STENCIL;
          depthStencilAttachment.depthLoadOp = LoadOp.DISCARD;
          depthStencilAttachment.stencilLoadOp = LoadOp.DISCARD;
          depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
          depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;
          const colors = [];
          const colorTexs = [];
          let depthTex = null;
          let swapchain = null;
          let framebuffer = null;
          for (const cv of passInfo.pass.computeViews) {
            this._applyRenderLayout(cv);
          }
          // update the layout descriptorSet
          if (this.renderLayout && this.renderLayout.descriptorSet) {
            this.renderLayout.descriptorSet.update();
          }
          for (const [resName, rasterV] of passInfo.pass.rasterViews) {
            let resTex = context.deviceTextures.get(resName);
            if (!resTex) {
              this.visitResource(resName);
              resTex = context.deviceTextures.get(resName);
            } else {
              const resGraph = context.resourceGraph;
              const resId = resGraph.vertex(resName);
              const resFbo = resGraph._vertices[resId]._object;
              if (resTex.framebuffer && resFbo instanceof Framebuffer && resTex.framebuffer !== resFbo) {
                resTex.framebuffer = resFbo;
              } else if (resTex.texture) {
                const desc = resGraph.getDesc(resId);
                if (resTex.texture.width !== desc.width || resTex.texture.height !== desc.height) {
                  resTex.texture.resize(desc.width, desc.height);
                }
              }
            }
            if (!swapchain) swapchain = resTex.swapchain;
            if (!framebuffer) framebuffer = resTex.framebuffer;
            const clearFlag = rasterV.clearFlags & 0xffffffff;
            switch (rasterV.attachmentType) {
              case AttachmentType.RENDER_TARGET:
                {
                  if (!resTex.swapchain && !resTex.framebuffer) colorTexs.push(resTex.texture);
                  const colorAttachment = new ColorAttachment();
                  colorAttachment.format = resTex.description.format;
                  colorAttachment.sampleCount = resTex.description.sampleCount;
                  colorAttachment.loadOp = rasterV.loadOp;
                  colorAttachment.storeOp = rasterV.storeOp;
                  colorAttachment.barrier = device.getGeneralBarrier(new GeneralBarrierInfo(rasterV.loadOp === LoadOp.LOAD ? AccessFlagBit.COLOR_ATTACHMENT_WRITE : AccessFlagBit.NONE, rasterV.storeOp === StoreOp.STORE ? AccessFlagBit.COLOR_ATTACHMENT_WRITE : AccessFlagBit.NONE));
                  this._clearColor.push(rasterV.clearColor);
                  colors.push(colorAttachment);
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
            const colorAttachment = new ColorAttachment();
            colors.push(colorAttachment);
          }
          if (colorTexs.length === 0 && !swapchain && !framebuffer) {
            const currTex = device.createTexture(new TextureInfo());
            colorTexs.push(currTex);
          }
          const depth = swapchain ? swapchain.depthStencilTexture : depthTex;
          if (!depth) {
            depthStencilAttachment.format = Format.UNKNOWN;
          }
          this._renderPass = device.createRenderPass(new RenderPassInfo(colors, depthStencilAttachment));
          this._framebuffer = framebuffer || device.createFramebuffer(new FramebufferInfo(this._renderPass, swapchain ? [swapchain.colorTexture] : colorTexs, swapchain ? swapchain.depthStencilTexture : depthTex));
        }
        get layoutName() {
          return this._layoutName;
        }
        get passID() {
          return this._passID;
        }
        get renderLayout() {
          return this._layout;
        }
        get renderPass() {
          return this._renderPass;
        }
        get framebuffer() {
          return this._framebuffer;
        }
        get clearColor() {
          return this._clearColor;
        }
        get clearDepth() {
          return this._clearDepth;
        }
        get clearStencil() {
          return this._clearStencil;
        }
        get deviceQueues() {
          return this._deviceQueues;
        }
        get rasterPassInfo() {
          return this._rasterInfo;
        }
        get viewport() {
          return this._viewport;
        }
        visitResource(resName) {
          const resourceGraph = context.resourceGraph;
          const vertId = resourceGraph.vertex(resName);
          resourceVisitor.resName = resName;
          resourceGraph.visitVertex(resourceVisitor, vertId);
        }
        addQueue(queue) {
          this._deviceQueues.set(queue.queueId, queue);
        }
        preRecord() {
          context.descriptorSet = getDescriptorSetDataFromLayout(this.layoutName).descriptorSet;
        }
        _applyRenderLayout(input) {
          const stageName = context.renderGraph.getLayout(this.rasterPassInfo.id);
          if (stageName) {
            const layoutGraph = context.layoutGraph;
            const stageId = layoutGraph.locateChild(layoutGraph.nullVertex(), stageName);
            if (stageId !== 0xFFFFFFFF) {
              this._layout = new RenderPassLayoutInfo(stageId, this.rasterPassInfo.id, input);
            }
          }
        }
        getGlobalDescData() {
          const stageId = context.layoutGraph.locateChild(context.layoutGraph.nullVertex(), 'default');
          assert(stageId !== 0xFFFFFFFF);
          const layout = context.layoutGraph.getLayout(stageId);
          const layoutData = layout.descriptorSets.get(UpdateFrequency.PER_PASS);
          return layoutData;
        }
        _applyViewport(frameTex) {
          this._viewport = null;
          const viewport = this._rasterInfo.pass.viewport;
          if (viewport.left !== 0 || viewport.top !== 0 || viewport.width !== 0 || viewport.height !== 0) {
            this._viewport = viewport;
          }
        }
        _showProfiler(rect) {
          const profiler = context.pipeline.profiler;
          if (!profiler || !profiler.enabled) {
            return;
          }
          const renderPass = this._renderPass;
          const cmdBuff = context.commandBuffer;
          const submodel = profiler.subModels[0];
          const pass = submodel.passes[0];
          const ia = submodel.inputAssembler;
          const device = context.device;
          const pso = PipelineStateManager.getOrCreatePipelineState(device, pass, submodel.shaders[0], renderPass, ia);
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
        record() {
          const tex = this.framebuffer.colorTextures[0];
          this._applyViewport(tex);
          const cmdBuff = context.commandBuffer;
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
          for (const queue of this._deviceQueues.values()) {
            queue.record();
          }
          if (this._rasterInfo.pass.showStatistics) {
            this._showProfiler(renderPassArea);
          }
          cmdBuff.endRenderPass();
        }
        postRecord() {
          // nothing to do
        }
        resetResource(id, pass) {
          this._rasterInfo.applyInfo(id, pass);
          this._layoutName = context.renderGraph.getLayout(id);
          this._passID = cclegacy.rendering.getPassID(this._layoutName);
          this._deviceQueues.clear();
          let framebuffer = null;
          const colTextures = [];
          let depTexture = this._framebuffer ? this._framebuffer.depthStencilTexture : null;
          for (const cv of this._rasterInfo.pass.computeViews) {
            this._applyRenderLayout(cv);
          }
          // update the layout descriptorSet
          if (this.renderLayout && this.renderLayout.descriptorSet) {
            this.renderLayout.descriptorSet.update();
          }
          const resGraph = context.resourceGraph;
          const currentWidth = this._framebuffer ? this._framebuffer.width : 0;
          const currentHeight = this._framebuffer ? this._framebuffer.height : 0;
          let width = 0;
          let height = 0;
          for (const [resName, rasterV] of this._rasterInfo.pass.rasterViews) {
            if (rasterV.attachmentType === AttachmentType.SHADING_RATE) {
              continue;
            }
            const resId = resGraph.vertex(resName);
            const resDesc = resGraph.getDesc(resId);
            width = resDesc.width;
            height = resDesc.height;
            break;
          }
          const needRebuild = width !== currentWidth || height !== currentHeight;
          for (const [resName, rasterV] of this._rasterInfo.pass.rasterViews) {
            let deviceTex = context.deviceTextures.get(resName);
            const currTex = deviceTex;
            if (!deviceTex) {
              this.visitResource(resName);
              deviceTex = context.deviceTextures.get(resName);
            }
            const resGraph = context.resourceGraph;
            const resId = resGraph.vertex(resName);
            const resFbo = resGraph._vertices[resId]._object;
            const resDesc = resGraph.getDesc(resId);
            if (deviceTex.framebuffer && resFbo instanceof Framebuffer && deviceTex.framebuffer !== resFbo) {
              framebuffer = this._framebuffer = deviceTex.framebuffer = resFbo;
            } else if (!currTex || deviceTex.texture && needRebuild) {
              const gfxTex = deviceTex.texture;
              if (currTex) gfxTex.resize(resDesc.width, resDesc.height);
              switch (rasterV.attachmentType) {
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
        }
      };
      ComputePassInfo = class ComputePassInfo {
        constructor() {
          this._id = void 0;
          this._pass = void 0;
        }
        get id() {
          return this._id;
        }
        get pass() {
          return this._pass;
        }
        _copyPass(pass) {
          const computePass = this._pass || new ComputePass();
          for (const val of pass.computeViews) {
            const currComputeViews = val[1];
            const currComputeKey = val[0];
            const computeViews = computePass.computeViews.get(currComputeKey) || [];
            if (computeViews.length) computeViews.length = currComputeViews.length;
            let idx = 0;
            for (const currComputeView of currComputeViews) {
              const computeView = computeViews[idx] || new ComputeView();
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
        }
        applyInfo(id, pass) {
          this._id = id;
          this._copyPass(pass);
        }
      };
      DeviceComputePass = class DeviceComputePass {
        constructor(passInfo) {
          this._deviceQueues = [];
          this._passID = void 0;
          this._layoutName = void 0;
          this._viewport = null;
          this._computeInfo = void 0;
          this._layout = null;
          this._computeInfo = passInfo;
          this._layoutName = context.renderGraph.getLayout(passInfo.id);
          this._passID = cclegacy.rendering.getPassID(this._layoutName);
          for (const cv of passInfo.pass.computeViews) {
            let resTex = context.deviceTextures.get(cv[0]);
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
        preRecord() {
          // nothing to do
        }
        postRecord() {
          // nothing to do
        }
        get layoutName() {
          return this._layoutName;
        }
        get passID() {
          return this._passID;
        }
        get renderLayout() {
          return this._layout;
        }
        get deviceQueues() {
          return this._deviceQueues;
        }
        get computePassInfo() {
          return this._computeInfo;
        }
        visitResource(resName) {
          const resourceGraph = context.resourceGraph;
          const vertId = resourceGraph.vertex(resName);
          resourceVisitor.resName = resName;
          resourceGraph.visitVertex(resourceVisitor, vertId);
        }
        addQueue(queue) {
          this._deviceQueues.push(queue);
        }
        _applyRenderLayout(input) {
          const stageName = context.renderGraph.getLayout(this._computeInfo.id);
          if (stageName) {
            const layoutGraph = context.layoutGraph;
            const stageId = layoutGraph.locateChild(layoutGraph.nullVertex(), stageName);
            if (stageId !== 0xFFFFFFFF) {
              this._layout = new RenderPassLayoutInfo(stageId, this._computeInfo.id, input);
            }
          }
        }
        getGlobalDescData() {
          const stageId = context.layoutGraph.locateChild(context.layoutGraph.nullVertex(), 'default');
          assert(stageId !== 0xFFFFFFFF);
          const layout = context.layoutGraph.getLayout(stageId);
          const layoutData = layout.descriptorSets.get(UpdateFrequency.PER_PASS);
          return layoutData;
        }

        // record common buffer
        record() {
          const cmdBuff = context.commandBuffer;
          if (context.descriptorSet) {
            cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, context.descriptorSet);
          }
          for (const queue of this._deviceQueues) {
            queue.record();
          }
          const renderData = context.renderGraph.getData(this._computeInfo.id);
          updateGlobalDescBinding(renderData, context.renderGraph.getLayout(this._computeInfo.id));
        }
        resetResource(id, pass) {
          this._computeInfo.applyInfo(id, pass);
          this._layoutName = context.renderGraph.getLayout(id);
          this._passID = cclegacy.rendering.getPassID(this._layoutName);
          this._deviceQueues.length = 0;
          for (const cv of this._computeInfo.pass.computeViews) {
            this._applyRenderLayout(cv);
          }
          // update the layout descriptorSet
          if (this.renderLayout && this.renderLayout.descriptorSet) {
            this.renderLayout.descriptorSet.update();
          }
        }
      };
      GraphScene = class GraphScene {
        constructor() {
          this.scene = null;
          this.blit = null;
          this.dispatch = null;
          this.sceneID = -1;
        }
        _copyScene(scene) {
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
        }
        _copyBlit(blit) {
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
        }
        init(scene, blit, sceneID) {
          this._copyScene(scene);
          this._copyBlit(blit);
          this.sceneID = sceneID;
        }
      };
      sceneViewport = new Viewport();
      DeviceRenderScene = class DeviceRenderScene {
        constructor() {
          this._currentQueue = void 0;
          this._renderPass = void 0;
          this._graphScene = void 0;
          this._scene = null;
          this._camera = null;
        }
        get camera() {
          return this._camera;
        }
        preRecord() {
          if (this.graphScene.blit) {
            this._currentQueue.createBlitDesc(this.graphScene.blit);
            this._currentQueue.blitDesc.update();
          }
          context.lightResource.buildLightBuffer(context.commandBuffer);
          context.lightResource.tryUpdateRenderSceneLocalDescriptorSet(context.culling);
        }
        postRecord() {
          // nothing to do
        }
        init(queue, graphScene) {
          this._currentQueue = queue;
          this._graphScene = graphScene;
          this._renderPass = queue.devicePass.renderPass;
          const camera = graphScene.scene && graphScene.scene.camera ? graphScene.scene.camera : null;
          if (camera) {
            this._scene = camera.scene;
            this._camera = camera;
          }
        }
        get graphScene() {
          return this._graphScene;
        }
        _recordUI() {
          const devicePass = this._currentQueue.devicePass;
          const rasterId = devicePass.rasterPassInfo.id;
          const passRenderData = context.renderGraph.getData(rasterId);
          // CCGlobal
          this._updateGlobal(passRenderData);
          // CCCamera, CCShadow, CCCSM
          const queueId = this._currentQueue.queueId;
          const queueRenderData = context.renderGraph.getData(queueId);
          this._updateGlobal(queueRenderData);
          const layoutName = context.renderGraph.getLayout(rasterId);
          const descSetData = getDescriptorSetDataFromLayout(layoutName);
          if (context.descriptorSet) {
            mergeSrcToTargetDesc(descSetData.descriptorSet, context.descriptorSet, true);
          }
          this._currentQueue.isUpdateUBO = true;
          const batches = this.camera.scene.batches;
          for (let i = 0; i < batches.length; i++) {
            const batch = batches[i];
            let visible = false;
            if (this.camera.visibility & batch.visFlags) {
              visible = true;
            }
            if (!visible) continue;
            // shaders.length always equals actual used passes.length
            const count = batch.shaders.length;
            for (let j = 0; j < count; j++) {
              const pass = batch.passes[j];
              if (pass.phaseID !== this._currentQueue.phaseID) continue;
              const shader = batch.shaders[j];
              const inputAssembler = batch.inputAssembler;
              const pso = PipelineStateManager.getOrCreatePipelineState(deviceManager.gfxDevice, pass, shader, this._renderPass, inputAssembler);
              context.commandBuffer.bindPipelineState(pso);
              context.commandBuffer.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
              const ds = batch.descriptorSet;
              context.commandBuffer.bindDescriptorSet(SetIndex.LOCAL, ds);
              context.commandBuffer.bindInputAssembler(inputAssembler);
              context.commandBuffer.draw(inputAssembler);
            }
          }
        }
        _recordBlit() {
          if (!this.graphScene.blit) {
            return;
          }
          const blit = this.graphScene.blit;
          const currMat = blit.material;
          const pass = currMat.passes[blit.passID];
          pass.update();
          const shader = pass.getShaderVariant();
          const devicePass = this._currentQueue.devicePass;
          const screenIa = this._currentQueue.blitDesc.screenQuad.quadIA;
          const globalDesc = context.descriptorSet;
          let pso = null;
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
        }
        _updateGlobal(data) {
          const devicePass = this._currentQueue.devicePass;
          updateGlobalDescBinding(data, context.renderGraph.getLayout(devicePass.rasterPassInfo.id));
        }
        _updateRenderData() {
          if (this._currentQueue.isUpdateUBO) return;
          const devicePass = this._currentQueue.devicePass;
          const rasterId = devicePass.rasterPassInfo.id;
          const passRenderData = context.renderGraph.getData(rasterId);
          // CCGlobal
          this._updateGlobal(passRenderData);
          // CCCamera, CCShadow, CCCSM
          const queueId = this._currentQueue.queueId;
          const queueRenderData = context.renderGraph.getData(queueId);
          this._updateGlobal(queueRenderData);
          const sceneId = this.graphScene.sceneID;
          const sceneRenderData = context.renderGraph.getData(sceneId);
          if (sceneRenderData) this._updateGlobal(sceneRenderData);
          const layoutName = context.renderGraph.getLayout(rasterId);
          const descSetData = getDescriptorSetDataFromLayout(layoutName);
          mergeSrcToTargetDesc(descSetData.descriptorSet, context.descriptorSet, true);
          this._currentQueue.isUpdateUBO = true;
        }
        _applyViewport() {
          const queueViewport = this._currentQueue.viewport;
          if (queueViewport) {
            context.commandBuffer.setViewport(queueViewport);
            context.commandBuffer.setScissor(this._currentQueue.scissor);
          } else if (!this._currentQueue.devicePass.viewport) {
            const texture = this._currentQueue.devicePass.framebuffer.colorTextures[0];
            const graphScene = this.graphScene;
            const lightInfo = graphScene.scene ? graphScene.scene.light : null;
            const area = isShadowMap(this.graphScene) && graphScene.scene && lightInfo.light ? getRenderArea(this.camera, texture.width, texture.height, lightInfo.light, lightInfo.level) : getRenderArea(this.camera, texture.width, texture.height);
            sceneViewport.left = area.x;
            sceneViewport.top = area.y;
            sceneViewport.width = area.width;
            sceneViewport.height = area.height;
            context.commandBuffer.setViewport(sceneViewport);
            context.commandBuffer.setScissor(area);
          }
        }
        record() {
          const devicePass = this._currentQueue.devicePass;
          const sceneCulling = context.culling;
          this._updateRenderData();
          this._applyViewport();
          // Currently processing blit and camera first
          if (this.graphScene.blit) {
            this._recordBlit();
            return;
          }
          const renderQueueDesc = sceneCulling.renderQueueIndex.get(this.graphScene.sceneID);
          const renderQueue = sceneCulling.renderQueues[renderQueueDesc.renderQueueTarget];
          const graphSceneData = this.graphScene.scene;
          renderQueue.recordCommands(context.commandBuffer, this._renderPass);
          if (bool(graphSceneData.flags & SceneFlags.REFLECTION_PROBE)) renderQueue.probeQueue.removeMacro();
          if (graphSceneData.flags & SceneFlags.GEOMETRY) {
            var _geometryRenderer;
            (_geometryRenderer = this.camera.geometryRenderer) === null || _geometryRenderer === void 0 ? void 0 : _geometryRenderer.render(devicePass.renderPass, context.commandBuffer, context.pipeline.pipelineSceneData);
          }
          if (graphSceneData.flags & SceneFlags.UI) {
            this._recordUI();
          }
        }
      };
      ExecutorPools = class ExecutorPools {
        constructor(context) {
          this.deviceQueuePool = void 0;
          this.computeQueuePool = void 0;
          this.graphScenePool = void 0;
          this.reflectionProbe = void 0;
          this.passPool = void 0;
          this.rasterPassInfoPool = void 0;
          this.computePassInfoPool = void 0;
          this.deviceScenePool = void 0;
          this.deviceQueuePool = new RecyclePool(() => new DeviceRenderQueue(), 16);
          this.deviceScenePool = new RecyclePool(() => new DeviceRenderScene(), 16);
          this.computeQueuePool = new RecyclePool(() => new DeviceComputeQueue(), 16);
          this.graphScenePool = new RecyclePool(() => new GraphScene(), 16);
          this.rasterPassInfoPool = new RecyclePool(() => new RasterPassInfo(), 16);
          this.computePassInfoPool = new RecyclePool(() => new ComputePassInfo(), 16);
          this.reflectionProbe = new RecyclePool(() => new RenderReflectionProbeQueue(context.pipeline), 8);
          this.passPool = new RecyclePool(() => ({
            priority: 0,
            hash: 0,
            depth: 0,
            shaderId: 0,
            subModel: null,
            passIdx: 0
          }), 64);
        }
        addDeviceQueue() {
          return this.deviceQueuePool.add();
        }
        addComputeQueue() {
          return this.computeQueuePool.add();
        }
        addGraphScene() {
          return this.graphScenePool.add();
        }
        addDeviceScene() {
          return this.deviceScenePool.add();
        }
        addReflectionProbe() {
          return this.reflectionProbe.add();
        }
        addRasterPassInfo() {
          return this.rasterPassInfoPool.add();
        }
        addComputePassInfo() {
          return this.computePassInfoPool.add();
        }
        reset() {
          this.deviceQueuePool.reset();
          this.computeQueuePool.reset();
          this.graphScenePool.reset();
          this.reflectionProbe.reset();
          this.computePassInfoPool.reset();
          this.deviceScenePool.reset();
        }
      };
      vbData = new Float32Array(4 * 4);
      quadRect = new Rect(); // The attribute length of the volume light
      volLightAttrCount = 5;
      BlitInfo = class BlitInfo {
        get pipelineIAData() {
          return this._pipelineIAData;
        }
        get deferredLitsBufView() {
          return this._deferredLitsBufView;
        }
        get lightVolumeBuffer() {
          return this._lightVolumeBuffer;
        }
        get lightBufferData() {
          return this._lightBufferData;
        }
        get stageDescs() {
          return this._stageDescs;
        }
        get emptyLocalUBO() {
          return this._localUBO;
        }
        constructor(context) {
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
          const vb = this._genQuadVertexData(SurfaceTransform.IDENTITY, new Rect(0, 0, context.width, context.height));
          this._pipelineIAData.quadVB.update(vb);
          this._createLightVolumes();
          this._localUBO = context.device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, UBOLocal.SIZE, UBOLocal.SIZE));
        }
        resize(width, height) {
          if (width !== this._width || height !== this._height) {
            quadRect.y = quadRect.x = 0;
            quadRect.width = width;
            quadRect.height = height;
            const vb = this._genQuadVertexData(SurfaceTransform.IDENTITY, quadRect);
            this._pipelineIAData.quadVB.update(vb);
          }
        }
        _createLightVolumes() {
          const device = this._context.root.device;
          let totalSize = Float32Array.BYTES_PER_ELEMENT * volLightAttrCount * 4 * UBODeferredLight.LIGHTS_PER_PASS;
          totalSize = Math.ceil(totalSize / device.capabilities.uboOffsetAlignment) * device.capabilities.uboOffsetAlignment;
          this._lightVolumeBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, totalSize, device.capabilities.uboOffsetAlignment));
          this._deferredLitsBufView = device.createBuffer(new BufferViewInfo(this._lightVolumeBuffer, 0, totalSize));
          this._lightBufferData = new Float32Array(totalSize / Float32Array.BYTES_PER_ELEMENT);
        }
        _genQuadVertexData(surfaceTransform, renderArea) {
          const minX = renderArea.x / this._context.width;
          const maxX = (renderArea.x + renderArea.width) / this._context.width;
          let minY = renderArea.y / this._context.height;
          let maxY = (renderArea.y + renderArea.height) / this._context.height;
          if (this._context.root.device.capabilities.screenSpaceSignY > 0) {
            const temp = maxY;
            maxY = minY;
            minY = temp;
          }
          let n = 0;
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
        _createQuadInputAssembler() {
          // create vertex buffer
          const inputAssemblerData = new PipelineInputAssemblerData();
          const vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
          const vbSize = vbStride * 4;
          const device = cclegacy.director.root.device;
          const quadVB = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE | MemoryUsageBit.HOST, vbSize, vbStride));
          if (!quadVB) {
            return inputAssemblerData;
          }

          // create index buffer
          const ibStride = Uint16Array.BYTES_PER_ELEMENT;
          const ibSize = ibStride * 6;
          const quadIB = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, ibSize, ibStride));
          if (!quadIB) {
            return inputAssemblerData;
          }
          const indices = new Uint16Array(6);
          indices[0] = 0;
          indices[1] = 1;
          indices[2] = 2;
          indices[3] = 1;
          indices[4] = 3;
          indices[5] = 2;
          quadIB.update(indices.buffer);

          // create input assembler

          const attributes = new Array(2);
          attributes[0] = new Attribute('a_position', Format.RG32F);
          attributes[1] = new Attribute('a_texCoord', Format.RG32F);
          const quadIA = device.createInputAssembler(new InputAssemblerInfo(attributes, [quadVB], quadIB));
          inputAssemblerData.quadIB = quadIB;
          inputAssemblerData.quadVB = quadVB;
          inputAssemblerData.quadIA = quadIA;
          return inputAssemblerData;
        }
      };
      ExecutorContext = class ExecutorContext {
        constructor(pipeline, ubo, device, resourceGraph, renderGraph, layoutGraph, width, height, descriptorSet = null) {
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
        reset() {
          this.culling.clear();
          this.pools.reset();
          this.cullCamera = null;
          for (const infoMap of this.submitMap) {
            for (const info of infoMap[1]) info[1].reset();
          }
          this.lightResource.clear();
        }
        resize(width, height) {
          this.width = width;
          this.height = height;
          this.blit.resize(width, height);
        }
      };
      _export("Executor", Executor = class Executor {
        constructor(pipeline, ubo, device, resourceGraph, layoutGraph, width, height) {
          this._context = void 0;
          this._visitor = void 0;
          context = this._context = new ExecutorContext(pipeline, ubo, device, resourceGraph, new RenderGraph(), layoutGraph, width, height);
          const programLib = cclegacy.rendering.programLib;
          context.lightResource.init(programLib, device, 16);
        }
        resize(width, height) {
          context.resize(width, height);
        }
        _removeDeviceResource() {
          const pipeline = context.pipeline;
          const resourceUses = pipeline.resourceUses;
          const deletes = [];
          const deviceTexs = context.deviceTextures;
          for (const [name, dTex] of deviceTexs) {
            const resId = context.resourceGraph.vertex(name);
            const trait = context.resourceGraph.getTraits(resId);
            if (!resourceUses.includes(name)) {
              switch (trait.residency) {
                case ResourceResidency.MANAGED:
                  deletes.push(name);
                  break;
                default:
              }
            }
          }
          for (const name of deletes) {
            deviceTexs.get(name).release();
            deviceTexs.delete(name);
          }
          const deletesBuff = [];
          const deviceBuffs = context.deviceBuffers;
          for (const [name, dBuff] of deviceBuffs) {
            const resId = context.resourceGraph.vertex(name);
            const trait = context.resourceGraph.getTraits(resId);
            if (!resourceUses.includes(name)) {
              switch (trait.residency) {
                case ResourceResidency.MANAGED:
                  deletesBuff.push(name);
                  break;
                default:
              }
            }
          }
          for (const name of deletesBuff) {
            deviceBuffs.get(name).release();
            deviceBuffs.delete(name);
          }
          resourceUses.length = 0;
        }
        execute(rg) {
          context.renderGraph = rg;
          context.reset();
          const cmdBuff = context.commandBuffer;
          const culling = context.culling;
          culling.buildRenderQueues(rg, context.layoutGraph, context.pipelineSceneData);
          context.lightResource.buildLights(culling, context.pipelineSceneData.isHDR, context.pipelineSceneData.shadows);
          culling.uploadInstancing(cmdBuff);
          this._removeDeviceResource();
          cmdBuff.begin();
          if (!this._visitor) this._visitor = new RenderVisitor();
          depthFirstSearch(this._visitor.graphView, this._visitor, this._visitor.colorMap);
          cmdBuff.end();
          context.device.queue.submit([cmdBuff]);
        }
        release() {
          context.devicePasses.clear();
          for (const [k, v] of context.deviceTextures) {
            v.release();
          }
          context.deviceTextures.clear();
          for (const [k, v] of context.deviceBuffers) {
            v.release();
          }
          context.deviceBuffers.clear();
        }
      });
      BaseRenderVisitor = class BaseRenderVisitor {
        constructor() {
          this.queueID = 0xFFFFFFFF;
          this.sceneID = 0xFFFFFFFF;
          this.passID = 0xFFFFFFFF;
          this.dispatchID = 0xFFFFFFFF;
          this.currPass = void 0;
          this.currQueue = void 0;
          this.rg = void 0;
          this.rg = context.renderGraph;
        }
        _isRasterPass(u) {
          return !!context.renderGraph.tryGetRasterPass(u);
        }
        isComputePass(u) {
          return !!context.renderGraph.tryGetCompute(u);
        }
        isDispatch(u) {
          return !!context.renderGraph.tryGetDispatch(u);
        }
        _isQueue(u) {
          return !!context.renderGraph.tryGetQueue(u);
        }
        _isScene(u) {
          return !!context.renderGraph.tryGetScene(u);
        }
        _isBlit(u) {
          return !!context.renderGraph.tryGetBlit(u);
        }
        applyID(id) {
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
        }
      };
      PreRenderVisitor = class PreRenderVisitor extends BaseRenderVisitor {
        constructor() {
          super();
        }
        clear(value) {
          // do nothing
        }
        viewport(value) {
          // do nothing
        }
        rasterPass(pass) {
          if (!this.rg.getValid(this.passID)) return;
          const devicePasses = context.devicePasses;
          const passHash = pass.hashValue;
          this.currPass = devicePasses.get(passHash);
          if (!this.currPass) {
            const rasterInfo = context.pools.addRasterPassInfo();
            rasterInfo.applyInfo(this.passID, pass);
            this.currPass = new DeviceRenderPass(rasterInfo);
            devicePasses.set(passHash, this.currPass);
          } else {
            this.currPass.resetResource(this.passID, pass);
          }
          this.currPass.preRecord();
        }
        rasterSubpass(value) {
          // do nothing
        }
        computeSubpass(value) {
          // do nothing
        }
        resolve(value) {
          // do nothing
        }
        move(value) {
          // do nothing
        }
        raytrace(value) {
          // do nothing
        }
        compute(pass) {
          if (!this.rg.getValid(this.passID)) return;
          const devicePasses = context.devicePasses;
          const computeInfo = new ComputePassInfo();
          computeInfo.applyInfo(this.passID, pass);
          this.currPass = new DeviceComputePass(computeInfo);
          this.currPass.preRecord();
          this.currPass.record();
        }
        copy(value) {
          if (value.uploadPairs.length) {
            for (const upload of value.uploadPairs) {
              const resBuffers = context.deviceBuffers;
              const resourceGraph = context.resourceGraph;
              const vertId = resourceGraph.vertex(upload.target);
              resourceVisitor.resName = upload.target;
              resourceGraph.visitVertex(resourceVisitor, vertId);
              const gfxBuffer = resBuffers.get(upload.target);
              context.device.commandBuffer.updateBuffer(gfxBuffer.buffer, upload.source, upload.source.byteLength);
            }
          }
        }
        queue(value) {
          if (!this.rg.getValid(this.queueID)) return;
          let deviceQueue;
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
          const layoutName = this.rg.getLayout(this.queueID);
          if (layoutName) {
            const layoutGraph = context.layoutGraph;
            if (this.currPass.renderLayout) {
              const layoutId = layoutGraph.locateChild(this.currPass.renderLayout.layoutID, layoutName);
              this.currQueue.layoutID = layoutId;
            }
          }
          this.currQueue.preRecord();
        }
        scene(value) {
          if (!this.rg.getValid(this.sceneID)) return;
          const renderQueue = this.currQueue;
          const graphScene = context.pools.addGraphScene();
          graphScene.init(value, null, this.sceneID);
          const renderScene = renderQueue.addScene(graphScene);
          renderScene.preRecord();
        }
        blit(value) {
          if (!this.rg.getValid(this.sceneID)) return;
          const renderQueue = this.currQueue;
          const graphScene = context.pools.addGraphScene();
          graphScene.init(null, value, -1);
          const renderScene = renderQueue.addScene(graphScene);
          renderScene.preRecord();
        }
        dispatch(value) {
          var _value$material;
          let pso = null;
          const devicePass = this.currPass;
          const pass = (_value$material = value.material) === null || _value$material === void 0 ? void 0 : _value$material.passes[value.passID];
          pass === null || pass === void 0 ? void 0 : pass.update();
          const shader = pass === null || pass === void 0 ? void 0 : pass.getShaderVariant();
          if (pass !== null && shader !== null) {
            const psoInfo = new PipelineStateInfo(shader, pass === null || pass === void 0 ? void 0 : pass.pipelineLayout);
            psoInfo.bindPoint = PipelineBindPoint.COMPUTE;
            pso = deviceManager.gfxDevice.createPipelineState(psoInfo);
          }
          const cmdBuff = context.commandBuffer;
          if (pso) {
            cmdBuff.bindPipelineState(pso);
            const layoutStage = devicePass.renderLayout;
            const layoutDesc = layoutStage.descriptorSet;
            cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, layoutDesc);
          }
          const gx = value.threadGroupCountX;
          const gy = value.threadGroupCountY;
          const gz = value.threadGroupCountZ;
          cmdBuff.dispatch(new DispatchInfo(gx, gy, gz));
        }
      };
      PostRenderVisitor = class PostRenderVisitor extends BaseRenderVisitor {
        constructor() {
          super();
        }
        clear(value) {
          // do nothing
        }
        viewport(value) {
          // do nothing
        }
        rasterPass(pass) {
          const devicePasses = context.devicePasses;
          const passHash = pass.hashValue;
          const currPass = devicePasses.get(passHash);
          if (!currPass) return;
          this.currPass = currPass;
          this.currPass.record();
        }
        rasterSubpass(value) {
          // do nothing
        }
        computeSubpass(value) {
          // do nothing
        }
        resolve(value) {
          // do nothing
        }
        compute(value) {
          // do nothing
        }
        copy(value) {
          // do nothing
        }
        move(value) {
          // do nothing
        }
        raytrace(value) {
          // do nothing
        }
        queue(value) {
          // collect scene results
        }
        scene(value) {
          // scene command list finished
        }
        blit(value) {
          // do nothing
        }
        dispatch(value) {
          // do nothing
        }
      };
      _export("RenderVisitor", RenderVisitor = class RenderVisitor extends DefaultVisitor {
        constructor() {
          super();
          this._preVisitor = void 0;
          this._postVisitor = void 0;
          this._graphView = void 0;
          this._colorMap = void 0;
          this._preVisitor = new PreRenderVisitor();
          this._postVisitor = new PostRenderVisitor();
          this._graphView = new ReferenceGraphView(context.renderGraph);
          this._colorMap = new VectorGraphColorMap(context.renderGraph.numVertices());
        }
        get graphView() {
          return this._graphView;
        }
        get colorMap() {
          return this._colorMap;
        }
        discoverVertex(u, gv) {
          const g = gv.g;
          this._preVisitor.applyID(u);
          g.visitVertex(this._preVisitor, u);
        }
        finishVertex(v, gv) {
          const g = gv.g;
          g.visitVertex(this._postVisitor, v);
        }
      });
    }
  };
});