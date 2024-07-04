System.register("q-bundled:///fs/cocos/rendering/custom/web-pipeline-types.js", ["../../core/index.js", "../../gfx/index.js", "../../render-scene/index.js", "../../render-scene/scene/index.js", "../define.js", "../instanced-buffer.js", "../pipeline-state-manager.js", "./types.js"], function (_export, _context) {
  "use strict";

  var RecyclePool, assert, cclegacy, deviceManager, Pass, LightType, SetIndex, InstancedBuffer, PipelineStateManager, SceneFlags, DrawInstance, ProbeHelperQueue, RenderDrawQueue, RenderInstancingQueue, RenderQueueDesc, RenderQueue, instancePool, CC_USE_RGBE_OUTPUT;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function getLayoutId(passLayout, phaseLayout) {
    const r = cclegacy.rendering;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return r.getPhaseID(r.getPassID(passLayout), phaseLayout);
  }
  function getPassIndexFromLayout(subModel, phaseLayoutId) {
    const passes = subModel.passes;
    for (let k = 0; k < passes.length; k++) {
      if (passes[k].phaseID === phaseLayoutId) {
        return k;
      }
    }
    return -1;
  }
  _export({
    DrawInstance: void 0,
    ProbeHelperQueue: void 0,
    RenderDrawQueue: void 0,
    RenderInstancingQueue: void 0,
    RenderQueueDesc: void 0,
    RenderQueue: void 0
  });
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
      _export("DrawInstance", DrawInstance = class DrawInstance {
        constructor(subModel = null, priority = 0, hash = 0, depth = 0, shaderID = 0, passIndex = 0) {
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
        update(subModel = null, priority = 0, hash = 0, depth = 0, shaderID = 0, passIndex = 0) {
          this.subModel = subModel;
          this.priority = priority;
          this.hash = hash;
          this.depth = depth;
          this.shaderID = shaderID;
          this.passIndex = passIndex;
        }
      });
      _export("instancePool", instancePool = new RecyclePool(() => new DrawInstance(), 8));
      CC_USE_RGBE_OUTPUT = 'CC_USE_RGBE_OUTPUT';
      _export("ProbeHelperQueue", ProbeHelperQueue = class ProbeHelperQueue {
        constructor() {
          this.probeMap = new Array();
          this.defaultId = getLayoutId('default', 'default');
        }
        clear() {
          this.probeMap.length = 0;
        }
        removeMacro() {
          for (const subModel of this.probeMap) {
            let patches = [];
            patches = patches.concat(subModel.patches);
            if (!patches.length) continue;
            for (let j = 0; j < patches.length; j++) {
              const patch = patches[j];
              if (patch.name === CC_USE_RGBE_OUTPUT) {
                patches.splice(j, 1);
                break;
              }
            }
            subModel.onMacroPatchesStateChanged(patches);
          }
        }
        applyMacro(model, probeLayoutId) {
          const subModels = model.subModels;
          for (let j = 0; j < subModels.length; j++) {
            const subModel = subModels[j];

            //Filter transparent objects
            const isTransparent = subModel.passes[0].blendState.targets[0].blend;
            if (isTransparent) {
              continue;
            }
            let passIdx = getPassIndexFromLayout(subModel, probeLayoutId);
            let bUseReflectPass = true;
            if (passIdx < 0) {
              probeLayoutId = this.defaultId;
              passIdx = getPassIndexFromLayout(subModel, probeLayoutId);
              bUseReflectPass = false;
            }
            if (passIdx < 0) {
              continue;
            }
            if (!bUseReflectPass) {
              let patches = [];
              patches = patches.concat(subModel.patches);
              const useRGBEPatchs = [{
                name: CC_USE_RGBE_OUTPUT,
                value: true
              }];
              patches = patches.concat(useRGBEPatchs);
              subModel.onMacroPatchesStateChanged(patches);
              this.probeMap.push(subModel);
            }
          }
        }
      });
      _export("RenderDrawQueue", RenderDrawQueue = class RenderDrawQueue {
        constructor() {
          this.instances = new Array();
        }
        empty() {
          return this.instances.length === 0;
        }
        clear() {
          this.instances.length = 0;
        }
        add(model, depth, subModelIdx, passIdx) {
          const subModel = model.subModels[subModelIdx];
          const pass = subModel.passes[passIdx];
          const passPriority = pass.priority;
          const modelPriority = subModel.priority;
          const shaderId = subModel.shaders[passIdx].typedID;
          const hash = 0 << 30 | passPriority << 16 | modelPriority << 8 | passIdx;
          const priority = model.priority;
          const instance = instancePool.add();
          instance.update(subModel, priority, hash, depth, shaderId, passIdx);
          this.instances.push(instance);
        }
        /**
         * @en Comparison sorting function. Opaque objects are sorted by priority -> depth front to back -> shader ID.
         * @zh 比较排序函数。不透明对象按优先级 -> 深度由前向后 -> Shader ID 顺序排序。
         */
        sortOpaqueOrCutout() {
          this.instances.sort((lhs, rhs) => {
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
         */
        sortTransparent() {
          this.instances.sort((lhs, rhs) => {
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
        }
        recordCommandBuffer(device, renderPass, cmdBuffer, ds = null, offset = 0, dynamicOffsets = null) {
          for (const instance of this.instances) {
            const subModel = instance.subModel;
            const passIdx = instance.passIndex;
            const inputAssembler = subModel.inputAssembler;
            const pass = subModel.passes[passIdx];
            const shader = subModel.shaders[passIdx];
            const pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, inputAssembler);
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
        }
      });
      _export("RenderInstancingQueue", RenderInstancingQueue = class RenderInstancingQueue {
        constructor() {
          this.passInstances = new Map();
          this.instanceBuffers = new Array();
          this.sortedBatches = new Array();
        }
        empty() {
          return this.passInstances.size === 0;
        }
        add(pass, subModel, passID) {
          const iter = this.passInstances.get(pass);
          if (iter === undefined) {
            const instanceBufferID = this.passInstances.size;
            if (instanceBufferID >= this.instanceBuffers.length) {
              assert(instanceBufferID === this.instanceBuffers.length);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              this.instanceBuffers.push(new InstancedBuffer(new Pass(cclegacy.director.root)));
            }
            this.passInstances.set(pass, instanceBufferID);
            assert(instanceBufferID < this.instanceBuffers.length);
            const instanceBuffer = this.instanceBuffers[instanceBufferID];
            instanceBuffer.pass = pass;
            const instances = instanceBuffer.instances;
            for (const item of instances) {
              assert(item.count === 0);
            }
          }
          const instancedBuffer = this.instanceBuffers[this.passInstances.get(pass)];
          instancedBuffer.merge(subModel, passID);
        }
        clear() {
          this.sortedBatches.length = 0;
          this.passInstances.clear();
          const instanceBuffers = this.instanceBuffers;
          instanceBuffers.forEach(instance => {
            instance.clear();
          });
        }
        sort() {
          this.sortedBatches.length = this.passInstances.size;
          let index = 0;
          for (const [pass, bufferID] of this.passInstances.entries()) {
            this.sortedBatches[index++] = this.instanceBuffers[bufferID];
          }
        }
        uploadBuffers(cmdBuffer) {
          for (const [pass, bufferID] of this.passInstances.entries()) {
            const instanceBuffer = this.instanceBuffers[bufferID];
            if (instanceBuffer.hasPendingModels) {
              instanceBuffer.uploadBuffers(cmdBuffer);
            }
          }
        }
        recordCommandBuffer(renderPass, cmdBuffer, ds = null, offset = 0, dynamicOffsets = null) {
          const renderQueue = this.sortedBatches;
          for (const instanceBuffer of renderQueue) {
            if (!instanceBuffer.hasPendingModels) {
              continue;
            }
            const instances = instanceBuffer.instances;
            const drawPass = instanceBuffer.pass;
            cmdBuffer.bindDescriptorSet(SetIndex.MATERIAL, drawPass.descriptorSet);
            let lastPSO = null;
            for (const instance of instances) {
              if (!instance.count) {
                continue;
              }
              const pso = PipelineStateManager.getOrCreatePipelineState(deviceManager.gfxDevice, drawPass, instance.shader, renderPass, instance.ia);
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
        }
      });
      _export("RenderQueueDesc", RenderQueueDesc = class RenderQueueDesc {
        constructor(frustumCulledResultID = 0xFFFFFFFF, lightBoundsCulledResultID = 0xFFFFFFFF, renderQueueTargetIn = 0xFFFFFFFF, lightTypeIn = LightType.UNKNOWN) {
          this.frustumCulledResultID = void 0;
          this.lightBoundsCulledResultID = void 0;
          this.renderQueueTarget = void 0;
          this.lightType = void 0;
          this.frustumCulledResultID = frustumCulledResultID;
          this.lightBoundsCulledResultID = lightBoundsCulledResultID;
          this.renderQueueTarget = renderQueueTargetIn;
          this.lightType = lightTypeIn;
        }
        update(culledSourceIn = 0xFFFFFFFF, lightBoundsCulledResultID = 0xFFFFFFFF, renderQueueTargetIn = 0xFFFFFFFF, lightTypeIn = LightType.UNKNOWN) {
          this.frustumCulledResultID = culledSourceIn;
          this.lightBoundsCulledResultID = lightBoundsCulledResultID;
          this.renderQueueTarget = renderQueueTargetIn;
          this.lightType = lightTypeIn;
        }
      });
      _export("RenderQueue", RenderQueue = class RenderQueue {
        constructor() {
          this.probeQueue = new ProbeHelperQueue();
          this.opaqueQueue = new RenderDrawQueue();
          this.transparentQueue = new RenderDrawQueue();
          this.opaqueInstancingQueue = new RenderInstancingQueue();
          this.transparentInstancingQueue = new RenderInstancingQueue();
          this.sceneFlags = SceneFlags.NONE;
          this.subpassOrPassLayoutID = 0xFFFFFFFF;
          this.lightByteOffset = 0xFFFFFFFF;
        }
        sort() {
          this.opaqueQueue.sortOpaqueOrCutout();
          this.transparentQueue.sortTransparent();
          this.opaqueInstancingQueue.sort();
          this.transparentInstancingQueue.sort();
        }
        update() {
          this.probeQueue.clear();
          this.opaqueQueue.clear();
          this.transparentQueue.clear();
          this.opaqueInstancingQueue.clear();
          this.transparentInstancingQueue.clear();
          this.sceneFlags = SceneFlags.NONE;
          this.subpassOrPassLayoutID = 0xFFFFFFFF;
        }
        empty() {
          return this.opaqueQueue.empty() && this.transparentQueue.empty() && this.opaqueInstancingQueue.empty() && this.transparentInstancingQueue.empty();
        }
        recordCommands(cmdBuffer, renderPass) {
          const offsets = this.lightByteOffset === 0xFFFFFFFF ? null : [this.lightByteOffset];
          this.opaqueQueue.recordCommandBuffer(deviceManager.gfxDevice, renderPass, cmdBuffer, null, 0, offsets);
          this.opaqueInstancingQueue.recordCommandBuffer(renderPass, cmdBuffer, null, 0, offsets);
          this.transparentInstancingQueue.recordCommandBuffer(renderPass, cmdBuffer, null, 0, offsets);
          this.transparentQueue.recordCommandBuffer(deviceManager.gfxDevice, renderPass, cmdBuffer, null, 0, offsets);
        }
      });
    }
  };
});