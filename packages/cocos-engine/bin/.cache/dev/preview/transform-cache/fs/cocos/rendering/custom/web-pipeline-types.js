System.register("q-bundled:///fs/cocos/rendering/custom/web-pipeline-types.js", ["../../core/index.js", "../../gfx/index.js", "../../render-scene/index.js", "../../render-scene/scene/index.js", "../define.js", "../instanced-buffer.js", "../pipeline-state-manager.js", "./types.js"], function (_export, _context) {
  "use strict";

  var RecyclePool, assert, cclegacy, deviceManager, Pass, LightType, SetIndex, InstancedBuffer, PipelineStateManager, SceneFlags, DrawInstance, instancePool, CC_USE_RGBE_OUTPUT, ProbeHelperQueue, RenderDrawQueue, RenderInstancingQueue, RenderQueueDesc, RenderQueue;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function getLayoutId(passLayout, phaseLayout) {
    var r = cclegacy.rendering;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return r.getPhaseID(r.getPassID(passLayout), phaseLayout);
  }
  function getPassIndexFromLayout(subModel, phaseLayoutId) {
    var passes = subModel.passes;
    for (var k = 0; k < passes.length; k++) {
      if (passes[k].phaseID === phaseLayoutId) {
        return k;
      }
    }
    return -1;
  }
  return {
    setters: [function (_coreIndexJs) {
      RecyclePool = _coreIndexJs.RecyclePool;
      assert = _coreIndexJs.assert;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_gfxIndexJs) {
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_renderSceneIndexJs) {
      Pass = _renderSceneIndexJs.Pass;
    }, function (_renderSceneSceneIndexJs) {
      LightType = _renderSceneSceneIndexJs.LightType;
    }, function (_defineJs) {
      SetIndex = _defineJs.SetIndex;
    }, function (_instancedBufferJs) {
      InstancedBuffer = _instancedBufferJs.InstancedBuffer;
    }, function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_typesJs) {
      SceneFlags = _typesJs.SceneFlags;
    }],
    execute: function () {
      _export("DrawInstance", DrawInstance = /*#__PURE__*/function () {
        function DrawInstance(subModel, priority, hash, depth, shaderID, passIndex) {
          if (subModel === void 0) {
            subModel = null;
          }
          if (priority === void 0) {
            priority = 0;
          }
          if (hash === void 0) {
            hash = 0;
          }
          if (depth === void 0) {
            depth = 0;
          }
          if (shaderID === void 0) {
            shaderID = 0;
          }
          if (passIndex === void 0) {
            passIndex = 0;
          }
          this.subModel = void 0;
          this.priority = void 0;
          this.hash = void 0;
          this.depth = void 0;
          this.shaderID = void 0;
          this.passIndex = void 0;
          this.subModel = subModel;
          this.priority = priority;
          this.hash = hash;
          this.depth = depth;
          this.shaderID = shaderID;
          this.passIndex = passIndex;
        }
        var _proto = DrawInstance.prototype;
        _proto.update = function update(subModel, priority, hash, depth, shaderID, passIndex) {
          if (subModel === void 0) {
            subModel = null;
          }
          if (priority === void 0) {
            priority = 0;
          }
          if (hash === void 0) {
            hash = 0;
          }
          if (depth === void 0) {
            depth = 0;
          }
          if (shaderID === void 0) {
            shaderID = 0;
          }
          if (passIndex === void 0) {
            passIndex = 0;
          }
          this.subModel = subModel;
          this.priority = priority;
          this.hash = hash;
          this.depth = depth;
          this.shaderID = shaderID;
          this.passIndex = passIndex;
        };
        return DrawInstance;
      }());
      _export("instancePool", instancePool = new RecyclePool(function () {
        return new DrawInstance();
      }, 8));
      CC_USE_RGBE_OUTPUT = 'CC_USE_RGBE_OUTPUT';
      _export("ProbeHelperQueue", ProbeHelperQueue = /*#__PURE__*/function () {
        function ProbeHelperQueue() {
          this.probeMap = new Array();
          this.defaultId = getLayoutId('default', 'default');
        }
        var _proto2 = ProbeHelperQueue.prototype;
        _proto2.clear = function clear() {
          this.probeMap.length = 0;
        };
        _proto2.removeMacro = function removeMacro() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.probeMap), _step; !(_step = _iterator()).done;) {
            var subModel = _step.value;
            var patches = [];
            patches = patches.concat(subModel.patches);
            if (!patches.length) continue;
            for (var j = 0; j < patches.length; j++) {
              var patch = patches[j];
              if (patch.name === CC_USE_RGBE_OUTPUT) {
                patches.splice(j, 1);
                break;
              }
            }
            subModel.onMacroPatchesStateChanged(patches);
          }
        };
        _proto2.applyMacro = function applyMacro(model, probeLayoutId) {
          var subModels = model.subModels;
          for (var j = 0; j < subModels.length; j++) {
            var subModel = subModels[j];

            //Filter transparent objects
            var isTransparent = subModel.passes[0].blendState.targets[0].blend;
            if (isTransparent) {
              continue;
            }
            var passIdx = getPassIndexFromLayout(subModel, probeLayoutId);
            var bUseReflectPass = true;
            if (passIdx < 0) {
              probeLayoutId = this.defaultId;
              passIdx = getPassIndexFromLayout(subModel, probeLayoutId);
              bUseReflectPass = false;
            }
            if (passIdx < 0) {
              continue;
            }
            if (!bUseReflectPass) {
              var patches = [];
              patches = patches.concat(subModel.patches);
              var useRGBEPatchs = [{
                name: CC_USE_RGBE_OUTPUT,
                value: true
              }];
              patches = patches.concat(useRGBEPatchs);
              subModel.onMacroPatchesStateChanged(patches);
              this.probeMap.push(subModel);
            }
          }
        };
        return ProbeHelperQueue;
      }());
      _export("RenderDrawQueue", RenderDrawQueue = /*#__PURE__*/function () {
        function RenderDrawQueue() {
          this.instances = new Array();
        }
        var _proto3 = RenderDrawQueue.prototype;
        _proto3.empty = function empty() {
          return this.instances.length === 0;
        };
        _proto3.clear = function clear() {
          this.instances.length = 0;
        };
        _proto3.add = function add(model, depth, subModelIdx, passIdx) {
          var subModel = model.subModels[subModelIdx];
          var pass = subModel.passes[passIdx];
          var passPriority = pass.priority;
          var modelPriority = subModel.priority;
          var shaderId = subModel.shaders[passIdx].typedID;
          var hash = 0 << 30 | passPriority << 16 | modelPriority << 8 | passIdx;
          var priority = model.priority;
          var instance = instancePool.add();
          instance.update(subModel, priority, hash, depth, shaderId, passIdx);
          this.instances.push(instance);
        }
        /**
         * @en Comparison sorting function. Opaque objects are sorted by priority -> depth front to back -> shader ID.
         * @zh 比较排序函数。不透明对象按优先级 -> 深度由前向后 -> Shader ID 顺序排序。
         */;
        _proto3.sortOpaqueOrCutout = function sortOpaqueOrCutout() {
          this.instances.sort(function (lhs, rhs) {
            if (lhs.hash !== rhs.hash) {
              return lhs.hash - rhs.hash;
            }
            if (lhs.depth !== rhs.depth) {
              return lhs.depth - rhs.depth;
            }
            return lhs.shaderID - rhs.shaderID;
          });
        }
        /**
         * @en Comparison sorting function. Transparent objects are sorted by priority -> depth back to front -> shader ID.
         * @zh 比较排序函数。半透明对象按优先级 -> 深度由后向前 -> Shader ID 顺序排序。
         */;
        _proto3.sortTransparent = function sortTransparent() {
          this.instances.sort(function (lhs, rhs) {
            if (lhs.priority !== rhs.priority) {
              return lhs.priority - rhs.priority;
            }
            if (lhs.hash !== rhs.hash) {
              return lhs.hash - rhs.hash;
            }
            if (lhs.depth !== rhs.depth) {
              return rhs.depth - lhs.depth; // 注意此处的差值顺序，为了按照降序排列
            }

            return lhs.shaderID - rhs.shaderID;
          });
        };
        _proto3.recordCommandBuffer = function recordCommandBuffer(device, renderPass, cmdBuffer, ds, offset, dynamicOffsets) {
          if (ds === void 0) {
            ds = null;
          }
          if (offset === void 0) {
            offset = 0;
          }
          if (dynamicOffsets === void 0) {
            dynamicOffsets = null;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.instances), _step2; !(_step2 = _iterator2()).done;) {
            var instance = _step2.value;
            var subModel = instance.subModel;
            var passIdx = instance.passIndex;
            var inputAssembler = subModel.inputAssembler;
            var pass = subModel.passes[passIdx];
            var shader = subModel.shaders[passIdx];
            var pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, inputAssembler);
            cmdBuffer.bindPipelineState(pso);
            cmdBuffer.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
            if (ds) {
              cmdBuffer.bindDescriptorSet(SetIndex.GLOBAL, ds, [offset]);
            }
            if (dynamicOffsets) {
              cmdBuffer.bindDescriptorSet(SetIndex.LOCAL, subModel.descriptorSet, dynamicOffsets);
            } else {
              cmdBuffer.bindDescriptorSet(SetIndex.LOCAL, subModel.descriptorSet);
            }
            cmdBuffer.bindInputAssembler(inputAssembler);
            cmdBuffer.draw(inputAssembler);
          }
        };
        return RenderDrawQueue;
      }());
      _export("RenderInstancingQueue", RenderInstancingQueue = /*#__PURE__*/function () {
        function RenderInstancingQueue() {
          this.passInstances = new Map();
          this.instanceBuffers = new Array();
          this.sortedBatches = new Array();
        }
        var _proto4 = RenderInstancingQueue.prototype;
        _proto4.empty = function empty() {
          return this.passInstances.size === 0;
        };
        _proto4.add = function add(pass, subModel, passID) {
          var iter = this.passInstances.get(pass);
          if (iter === undefined) {
            var instanceBufferID = this.passInstances.size;
            if (instanceBufferID >= this.instanceBuffers.length) {
              assert(instanceBufferID === this.instanceBuffers.length);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              this.instanceBuffers.push(new InstancedBuffer(new Pass(cclegacy.director.root)));
            }
            this.passInstances.set(pass, instanceBufferID);
            assert(instanceBufferID < this.instanceBuffers.length);
            var instanceBuffer = this.instanceBuffers[instanceBufferID];
            instanceBuffer.pass = pass;
            var instances = instanceBuffer.instances;
            for (var _iterator3 = _createForOfIteratorHelperLoose(instances), _step3; !(_step3 = _iterator3()).done;) {
              var item = _step3.value;
              assert(item.count === 0);
            }
          }
          var instancedBuffer = this.instanceBuffers[this.passInstances.get(pass)];
          instancedBuffer.merge(subModel, passID);
        };
        _proto4.clear = function clear() {
          this.sortedBatches.length = 0;
          this.passInstances.clear();
          var instanceBuffers = this.instanceBuffers;
          instanceBuffers.forEach(function (instance) {
            instance.clear();
          });
        };
        _proto4.sort = function sort() {
          this.sortedBatches.length = this.passInstances.size;
          var index = 0;
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.passInstances.entries()), _step4; !(_step4 = _iterator4()).done;) {
            var _step4$value = _step4.value,
              pass = _step4$value[0],
              bufferID = _step4$value[1];
            this.sortedBatches[index++] = this.instanceBuffers[bufferID];
          }
        };
        _proto4.uploadBuffers = function uploadBuffers(cmdBuffer) {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.passInstances.entries()), _step5; !(_step5 = _iterator5()).done;) {
            var _step5$value = _step5.value,
              pass = _step5$value[0],
              bufferID = _step5$value[1];
            var instanceBuffer = this.instanceBuffers[bufferID];
            if (instanceBuffer.hasPendingModels) {
              instanceBuffer.uploadBuffers(cmdBuffer);
            }
          }
        };
        _proto4.recordCommandBuffer = function recordCommandBuffer(renderPass, cmdBuffer, ds, offset, dynamicOffsets) {
          if (ds === void 0) {
            ds = null;
          }
          if (offset === void 0) {
            offset = 0;
          }
          if (dynamicOffsets === void 0) {
            dynamicOffsets = null;
          }
          var renderQueue = this.sortedBatches;
          for (var _iterator6 = _createForOfIteratorHelperLoose(renderQueue), _step6; !(_step6 = _iterator6()).done;) {
            var instanceBuffer = _step6.value;
            if (!instanceBuffer.hasPendingModels) {
              continue;
            }
            var instances = instanceBuffer.instances;
            var drawPass = instanceBuffer.pass;
            cmdBuffer.bindDescriptorSet(SetIndex.MATERIAL, drawPass.descriptorSet);
            var lastPSO = null;
            for (var _iterator7 = _createForOfIteratorHelperLoose(instances), _step7; !(_step7 = _iterator7()).done;) {
              var instance = _step7.value;
              if (!instance.count) {
                continue;
              }
              var pso = PipelineStateManager.getOrCreatePipelineState(deviceManager.gfxDevice, drawPass, instance.shader, renderPass, instance.ia);
              if (lastPSO !== pso) {
                cmdBuffer.bindPipelineState(pso);
                lastPSO = pso;
              }
              if (ds) {
                cmdBuffer.bindDescriptorSet(SetIndex.GLOBAL, ds, [offset]);
              }
              if (dynamicOffsets) {
                cmdBuffer.bindDescriptorSet(SetIndex.LOCAL, instance.descriptorSet, dynamicOffsets);
              } else {
                cmdBuffer.bindDescriptorSet(SetIndex.LOCAL, instance.descriptorSet, instanceBuffer.dynamicOffsets);
              }
              cmdBuffer.bindInputAssembler(instance.ia);
              cmdBuffer.draw(instance.ia);
            }
          }
        };
        return RenderInstancingQueue;
      }());
      _export("RenderQueueDesc", RenderQueueDesc = /*#__PURE__*/function () {
        function RenderQueueDesc(frustumCulledResultID, lightBoundsCulledResultID, renderQueueTargetIn, lightTypeIn) {
          if (frustumCulledResultID === void 0) {
            frustumCulledResultID = 0xFFFFFFFF;
          }
          if (lightBoundsCulledResultID === void 0) {
            lightBoundsCulledResultID = 0xFFFFFFFF;
          }
          if (renderQueueTargetIn === void 0) {
            renderQueueTargetIn = 0xFFFFFFFF;
          }
          if (lightTypeIn === void 0) {
            lightTypeIn = LightType.UNKNOWN;
          }
          this.frustumCulledResultID = void 0;
          this.lightBoundsCulledResultID = void 0;
          this.renderQueueTarget = void 0;
          this.lightType = void 0;
          this.frustumCulledResultID = frustumCulledResultID;
          this.lightBoundsCulledResultID = lightBoundsCulledResultID;
          this.renderQueueTarget = renderQueueTargetIn;
          this.lightType = lightTypeIn;
        }
        var _proto5 = RenderQueueDesc.prototype;
        _proto5.update = function update(culledSourceIn, lightBoundsCulledResultID, renderQueueTargetIn, lightTypeIn) {
          if (culledSourceIn === void 0) {
            culledSourceIn = 0xFFFFFFFF;
          }
          if (lightBoundsCulledResultID === void 0) {
            lightBoundsCulledResultID = 0xFFFFFFFF;
          }
          if (renderQueueTargetIn === void 0) {
            renderQueueTargetIn = 0xFFFFFFFF;
          }
          if (lightTypeIn === void 0) {
            lightTypeIn = LightType.UNKNOWN;
          }
          this.frustumCulledResultID = culledSourceIn;
          this.lightBoundsCulledResultID = lightBoundsCulledResultID;
          this.renderQueueTarget = renderQueueTargetIn;
          this.lightType = lightTypeIn;
        };
        return RenderQueueDesc;
      }());
      _export("RenderQueue", RenderQueue = /*#__PURE__*/function () {
        function RenderQueue() {
          this.probeQueue = new ProbeHelperQueue();
          this.opaqueQueue = new RenderDrawQueue();
          this.transparentQueue = new RenderDrawQueue();
          this.opaqueInstancingQueue = new RenderInstancingQueue();
          this.transparentInstancingQueue = new RenderInstancingQueue();
          this.sceneFlags = SceneFlags.NONE;
          this.subpassOrPassLayoutID = 0xFFFFFFFF;
          this.lightByteOffset = 0xFFFFFFFF;
        }
        var _proto6 = RenderQueue.prototype;
        _proto6.sort = function sort() {
          this.opaqueQueue.sortOpaqueOrCutout();
          this.transparentQueue.sortTransparent();
          this.opaqueInstancingQueue.sort();
          this.transparentInstancingQueue.sort();
        };
        _proto6.update = function update() {
          this.probeQueue.clear();
          this.opaqueQueue.clear();
          this.transparentQueue.clear();
          this.opaqueInstancingQueue.clear();
          this.transparentInstancingQueue.clear();
          this.sceneFlags = SceneFlags.NONE;
          this.subpassOrPassLayoutID = 0xFFFFFFFF;
        };
        _proto6.empty = function empty() {
          return this.opaqueQueue.empty() && this.transparentQueue.empty() && this.opaqueInstancingQueue.empty() && this.transparentInstancingQueue.empty();
        };
        _proto6.recordCommands = function recordCommands(cmdBuffer, renderPass) {
          var offsets = this.lightByteOffset === 0xFFFFFFFF ? null : [this.lightByteOffset];
          this.opaqueQueue.recordCommandBuffer(deviceManager.gfxDevice, renderPass, cmdBuffer, null, 0, offsets);
          this.opaqueInstancingQueue.recordCommandBuffer(renderPass, cmdBuffer, null, 0, offsets);
          this.transparentInstancingQueue.recordCommandBuffer(renderPass, cmdBuffer, null, 0, offsets);
          this.transparentQueue.recordCommandBuffer(deviceManager.gfxDevice, renderPass, cmdBuffer, null, 0, offsets);
        };
        return RenderQueue;
      }());
    }
  };
});