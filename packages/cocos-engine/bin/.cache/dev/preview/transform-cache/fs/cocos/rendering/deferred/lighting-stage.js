System.register("q-bundled:///fs/cocos/rendering/deferred/lighting-stage.js", ["../../core/data/decorators/index.js", "../../render-scene/scene/light.js", "../define.js", "../pass-phase.js", "../../gfx/index.js", "../render-stage.js", "../enum.js", "../planar-shadow-queue.js", "../../asset/assets/material.js", "../pipeline-state-manager.js", "../../core/geometry/index.js", "../../core/math/index.js", "../render-queue.js", "../pipeline-serialization.js", "../ui-phase.js", "../../core/geometry/aabb.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, type, serializable, LightType, UBODeferredLight, SetIndex, UBOForwardLight, UBOLocal, getPhaseID, Color, Rect, BufferUsageBit, MemoryUsageBit, BufferInfo, BufferViewInfo, DescriptorSetInfo, ClearFlagBit, RenderStage, DeferredStagePriority, PlanarShadowQueue, Material, PipelineStateManager, intersect, Sphere, Vec3, Vec4, renderQueueClearFunc, convertRenderQueue, renderQueueSortFunc, RenderQueueDesc, UIPhase, AABB, geometry, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, _class3, _v3, _rangedDirLightBoundingBox, _tmpBoundingBox, colors, LightingStage;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_renderSceneSceneLightJs) {
      LightType = _renderSceneSceneLightJs.LightType;
    }, function (_defineJs) {
      UBODeferredLight = _defineJs.UBODeferredLight;
      SetIndex = _defineJs.SetIndex;
      UBOForwardLight = _defineJs.UBOForwardLight;
      UBOLocal = _defineJs.UBOLocal;
    }, function (_passPhaseJs) {
      getPhaseID = _passPhaseJs.getPhaseID;
    }, function (_gfxIndexJs) {
      Color = _gfxIndexJs.Color;
      Rect = _gfxIndexJs.Rect;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferViewInfo = _gfxIndexJs.BufferViewInfo;
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
    }, function (_renderStageJs) {
      RenderStage = _renderStageJs.RenderStage;
    }, function (_enumJs) {
      DeferredStagePriority = _enumJs.DeferredStagePriority;
    }, function (_planarShadowQueueJs) {
      PlanarShadowQueue = _planarShadowQueueJs.PlanarShadowQueue;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_coreGeometryIndexJs) {
      intersect = _coreGeometryIndexJs.intersect;
      Sphere = _coreGeometryIndexJs.Sphere;
    }, function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
      Vec4 = _coreMathIndexJs.Vec4;
    }, function (_renderQueueJs) {
      renderQueueClearFunc = _renderQueueJs.renderQueueClearFunc;
      convertRenderQueue = _renderQueueJs.convertRenderQueue;
      renderQueueSortFunc = _renderQueueJs.renderQueueSortFunc;
    }, function (_pipelineSerializationJs) {
      RenderQueueDesc = _pipelineSerializationJs.RenderQueueDesc;
    }, function (_uiPhaseJs) {
      UIPhase = _uiPhaseJs.UIPhase;
    }, function (_coreGeometryAabbJs) {
      AABB = _coreGeometryAabbJs.AABB;
    }, function (_coreIndexJs) {
      geometry = _coreIndexJs.geometry;
    }],
    execute: function () {
      _v3 = new Vec3();
      _rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
      _tmpBoundingBox = new AABB();
      colors = [new Color(0, 0, 0, 1)];
      /**
       * @en The lighting render stage
       * @zh 前向渲染阶段。
       */
      _export("LightingStage", LightingStage = (_dec = ccclass('LightingStage'), _dec2 = type(Material), _dec3 = displayOrder(3), _dec4 = type([RenderQueueDesc]), _dec5 = displayOrder(2), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_RenderStage) {
        _inheritsLoose(LightingStage, _RenderStage);
        function LightingStage() {
          var _this;
          _this = _RenderStage.call(this) || this;
          _this._deferredLitsBufs = null;
          _this._maxDeferredLights = UBODeferredLight.LIGHTS_PER_PASS;
          _this._lightBufferData = void 0;
          _this._lightMeterScale = 10000.0;
          _this._descriptorSet = null;
          _this._descriptorSetLayout = void 0;
          _this._renderArea = new Rect();
          _this._uiPhase = void 0;
          _this._deferredMaterial = _initializer && _initializer();
          _this.renderQueues = _initializer2 && _initializer2();
          _this._phaseID = getPhaseID('default');
          _this._renderQueues = [];
          _this._uiPhase = new UIPhase();
          return _this;
        }
        var _proto = LightingStage.prototype;
        _proto.initialize = function initialize(info) {
          _RenderStage.prototype.initialize.call(this, info);
          return true;
        };
        _proto.gatherLights = function gatherLights(camera) {
          var pipeline = this._pipeline;
          var cmdBuff = pipeline.commandBuffers[0];
          var sphereLights = camera.scene.sphereLights;
          var spotLights = camera.scene.spotLights;
          var pointLights = camera.scene.pointLights;
          var rangedDirLights = camera.scene.rangedDirLights;
          var _sphere = Sphere.create(0, 0, 0, 1);
          var _vec4Array = new Float32Array(4);
          var exposure = camera.exposure;
          var idx = 0;
          var elementLen = Vec4.length; // sizeof(vec4) / sizeof(float32)
          var fieldLen = elementLen * this._maxDeferredLights;
          for (var i = 0; i < sphereLights.length && idx < this._maxDeferredLights; i++, ++idx) {
            var light = sphereLights[i];
            Sphere.set(_sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              // cc_lightPos
              Vec3.toArray(_vec4Array, light.position);
              _vec4Array[3] = LightType.SPHERE;
              this._lightBufferData.set(_vec4Array, idx * elementLen);

              // cc_lightColor
              Vec3.toArray(_vec4Array, light.color);
              if (light.useColorTemperature) {
                var finalColor = light.finalColor;
                _vec4Array[0] = finalColor.x;
                _vec4Array[1] = finalColor.y;
                _vec4Array[2] = finalColor.z;
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
          for (var _i = 0; _i < spotLights.length && idx < this._maxDeferredLights; _i++, ++idx) {
            var _light = spotLights[_i];
            Sphere.set(_sphere, _light.position.x, _light.position.y, _light.position.z, _light.range);
            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              // cc_lightPos
              Vec3.toArray(_vec4Array, _light.position);
              _vec4Array[3] = LightType.SPOT;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 0);

              // cc_lightColor
              Vec3.toArray(_vec4Array, _light.color);
              if (_light.useColorTemperature) {
                var _finalColor = _light.finalColor;
                _vec4Array[0] = _finalColor.x;
                _vec4Array[1] = _finalColor.y;
                _vec4Array[2] = _finalColor.z;
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
          for (var _i2 = 0; _i2 < pointLights.length && idx < this._maxDeferredLights; _i2++, ++idx) {
            var _light2 = pointLights[_i2];
            Sphere.set(_sphere, _light2.position.x, _light2.position.y, _light2.position.z, _light2.range);
            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              // cc_lightPos
              Vec3.toArray(_vec4Array, _light2.position);
              _vec4Array[3] = LightType.POINT;
              this._lightBufferData.set(_vec4Array, idx * elementLen);

              // cc_lightColor
              Vec3.toArray(_vec4Array, _light2.color);
              if (_light2.useColorTemperature) {
                var _finalColor2 = _light2.finalColor;
                _vec4Array[0] = _finalColor2.x;
                _vec4Array[1] = _finalColor2.y;
                _vec4Array[2] = _finalColor2.z;
              }
              if (pipeline.pipelineSceneData.isHDR) {
                _vec4Array[3] = _light2.luminance * exposure * this._lightMeterScale;
              } else {
                _vec4Array[3] = _light2.luminance;
              }
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 1);

              // cc_lightSizeRangeAngle
              _vec4Array[0] = 0.0;
              _vec4Array[1] = _light2.range;
              _vec4Array[2] = 0.0;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 2);
            }
          }
          for (var _i3 = 0; _i3 < rangedDirLights.length && idx < this._maxDeferredLights; _i3++, ++idx) {
            var _light3 = rangedDirLights[_i3];
            AABB.transform(_tmpBoundingBox, _rangedDirLightBoundingBox, _light3.node.getWorldMatrix());
            if (geometry.intersect.aabbFrustum(_tmpBoundingBox, camera.frustum)) {
              // UBOForwardLight
              Vec3.toArray(_vec4Array, _light3.position);
              _vec4Array[3] = LightType.RANGED_DIRECTIONAL;
              this._lightBufferData.set(_vec4Array, idx * elementLen);

              // cc_lightColor
              Vec3.toArray(_vec4Array, _light3.color);
              if (_light3.useColorTemperature) {
                var _finalColor3 = _light3.finalColor;
                _vec4Array[0] = _finalColor3.x;
                _vec4Array[1] = _finalColor3.y;
                _vec4Array[2] = _finalColor3.z;
              }
              if (pipeline.pipelineSceneData.isHDR) {
                _vec4Array[3] = _light3.illuminance * exposure;
              } else {
                _vec4Array[3] = _light3.illuminance;
              }
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 1);
              Vec3.toArray(_vec4Array, _light3.right);
              _vec4Array[3] = 0;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 2);
              Vec3.toArray(_vec4Array, _light3.direction);
              _vec4Array[3] = 0;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 3);

              // eslint-disable-next-line no-case-declarations
              var scale = _light3.scale;
              _v3.set(scale.x * 0.5, scale.y * 0.5, scale.z * 0.5);
              Vec3.toArray(_vec4Array, _v3);
              _vec4Array[3] = 0;
              this._lightBufferData.set(_vec4Array, idx * elementLen + fieldLen * 4);
            }
          }

          // the count of lights is set to cc_lightDir[0].w
          var offset = fieldLen * 3 + 3;
          this._lightBufferData.set([idx], offset);
          cmdBuff.updateBuffer(this._deferredLitsBufs, this._lightBufferData);
        };
        _proto._createStageDescriptor = function _createStageDescriptor(pass) {
          var device = this._pipeline.device;
          var totalSize = Float32Array.BYTES_PER_ELEMENT * 4 * 4 * this._maxDeferredLights;
          totalSize = Math.ceil(totalSize / device.capabilities.uboOffsetAlignment) * device.capabilities.uboOffsetAlignment;
          this._deferredLitsBufs = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, totalSize, device.capabilities.uboOffsetAlignment));
          var deferredLitsBufView = device.createBuffer(new BufferViewInfo(this._deferredLitsBufs, 0, totalSize));
          this._lightBufferData = new Float32Array(totalSize / Float32Array.BYTES_PER_ELEMENT);
          this._descriptorSet = device.createDescriptorSet(new DescriptorSetInfo(pass.localSetLayout));
          this._descriptorSet.bindBuffer(UBOForwardLight.BINDING, deferredLitsBufView);
          var _localUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, UBOLocal.SIZE, UBOLocal.SIZE));
          this._descriptorSet.bindBuffer(UBOLocal.BINDING, _localUBO);
        };
        _proto.activate = function activate(pipeline, flow) {
          _RenderStage.prototype.activate.call(this, pipeline, flow);
          this._uiPhase.activate(pipeline);

          // activate queue
          for (var i = 0; i < this.renderQueues.length; i++) {
            this._renderQueues[i] = convertRenderQueue(this.renderQueues[i]);
          }
          this._planarQueue = new PlanarShadowQueue(this._pipeline);
          if (this._deferredMaterial) {
            pipeline.pipelineSceneData.deferredLightingMaterial = this._deferredMaterial;
          }
        };
        _proto.destroy = function destroy() {
          var _this$_deferredLitsBu;
          (_this$_deferredLitsBu = this._deferredLitsBufs) === null || _this$_deferredLitsBu === void 0 ? void 0 : _this$_deferredLitsBu.destroy();
          this._deferredLitsBufs = null;
          this._descriptorSet = null;
        };
        _proto.render = function render(camera) {
          var _camera$geometryRende;
          var pipeline = this._pipeline;
          var device = pipeline.device;
          var cmdBuff = pipeline.commandBuffers[0];
          var sceneData = pipeline.pipelineSceneData;
          var renderObjects = sceneData.renderObjects;
          this._planarQueue.gatherShadowPasses(camera, cmdBuff);
          pipeline.generateRenderArea(camera, this._renderArea);
          // Lighting
          var deferredData = pipeline.getPipelineRenderData();
          var lightingMat = sceneData.deferredLightingMaterial;
          var pass = lightingMat.passes[0];
          var shader = pass.getShaderVariant();
          for (var i = 0; i < 3; ++i) {
            pass.descriptorSet.bindTexture(i, deferredData.gbufferRenderTargets[i]);
            pass.descriptorSet.bindSampler(i, deferredData.sampler);
          }
          pass.descriptorSet.bindTexture(3, deferredData.outputDepth);
          pass.descriptorSet.bindSampler(3, deferredData.sampler);
          pass.descriptorSet.update();
          if (!this._descriptorSet) {
            this._createStageDescriptor(pass);
          }
          // light信息
          this.gatherLights(camera);
          if (camera.clearFlag & ClearFlagBit.COLOR) {
            colors[0].x = camera.clearColor.x;
            colors[0].y = camera.clearColor.y;
            colors[0].z = camera.clearColor.z;
          }
          colors[0].w = 0;
          var framebuffer = deferredData.outputFrameBuffer;
          var renderPass = framebuffer.renderPass;
          pipeline.pipelineUBO.updateShadowUBO(camera);
          cmdBuff.beginRenderPass(renderPass, framebuffer, this._renderArea, colors, camera.clearDepth, camera.clearStencil);
          cmdBuff.setScissor(pipeline.generateScissor(camera));
          cmdBuff.setViewport(pipeline.generateViewport(camera));
          cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, pipeline.descriptorSet);
          var inputAssembler = pipeline.quadIAOffscreen;
          var pso = null;
          if (pass != null && shader != null && inputAssembler != null) {
            pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, inputAssembler);
          }
          if (pso != null) {
            this._descriptorSet.update();
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
            cmdBuff.bindDescriptorSet(SetIndex.LOCAL, this._descriptorSet);
            cmdBuff.bindInputAssembler(inputAssembler);
            cmdBuff.draw(inputAssembler);
          }

          // Transparent
          this._renderQueues.forEach(renderQueueClearFunc);
          var m = 0;
          var p = 0;
          var k = 0;
          for (var _i4 = 0; _i4 < renderObjects.length; ++_i4) {
            var ro = renderObjects[_i4];
            var subModels = ro.model.subModels;
            for (m = 0; m < subModels.length; ++m) {
              var subModel = subModels[m];
              var passes = subModel.passes;
              for (p = 0; p < passes.length; ++p) {
                var _pass = passes[p];
                if (_pass.phase !== this._phaseID) continue;
                for (k = 0; k < this._renderQueues.length; k++) {
                  this._renderQueues[k].insertRenderPass(ro, m, p);
                }
              }
            }
          }
          if (renderObjects.length > 0) {
            this._renderQueues.forEach(renderQueueSortFunc);
            for (var _i5 = 0; _i5 < this._renderQueues.length; _i5++) {
              this._renderQueues[_i5].recordCommandBuffer(device, renderPass, cmdBuff);
            }

            // planarQueue
            this._planarQueue.recordCommandBuffer(device, renderPass, cmdBuff);
          }
          (_camera$geometryRende = camera.geometryRenderer) === null || _camera$geometryRende === void 0 ? void 0 : _camera$geometryRende.render(renderPass, cmdBuff, pipeline.pipelineSceneData);
          this._uiPhase.render(camera, renderPass);
          cmdBuff.endRenderPass();
        };
        return LightingStage;
      }(RenderStage), _class3.initInfo = {
        name: 'LightingStage',
        priority: DeferredStagePriority.LIGHTING,
        tag: 0
      }, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_deferredMaterial", [_dec2, serializable, _dec3], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "renderQueues", [_dec4, serializable, _dec5], function () {
        return [];
      })), _class2)) || _class));
    }
  };
});