System.register("q-bundled:///fs/cocos/rendering/render-reflection-probe-queue.js", ["./define.js", "./pass-phase.js", "./pipeline-state-manager.js", "../render-scene/core/pass.js", "../render-scene/scene/reflection-probe.js", "../render-scene/scene/camera.js", "./render-instanced-queue.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var isEnableEffect, SetIndex, getPhaseID, PipelineStateManager, BatchingSchemes, ProbeType, SKYBOX_FLAG, RenderInstancedQueue, cclegacy, geometry, CC_USE_RGBE_OUTPUT, _phaseID, _phaseReflectMapID, RenderReflectionProbeQueue;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function getPassIndex(subModel) {
    var passes = subModel.passes;
    var r = cclegacy.rendering;
    if (isEnableEffect()) _phaseID = r.getPhaseID(r.getPassID('default'), 'default');
    for (var k = 0; k < passes.length; k++) {
      if ((!r || !r.enableEffectImport) && passes[k].phase === _phaseID || isEnableEffect() && passes[k].phaseID === _phaseID) {
        return k;
      }
    }
    return -1;
  }
  function getReflectMapPassIndex(subModel) {
    var passes = subModel.passes;
    var r = cclegacy.rendering;
    if (isEnableEffect()) _phaseReflectMapID = r.getPhaseID(r.getPassID('default'), 'reflect-map');
    for (var k = 0; k < passes.length; k++) {
      if ((!r || !r.enableEffectImport) && passes[k].phase === _phaseReflectMapID || isEnableEffect() && passes[k].phaseID === _phaseReflectMapID) {
        return k;
      }
    }
    return -1;
  }

  /**
   * @zh
   * 反射探针渲染队列
   */
  return {
    setters: [function (_defineJs) {
      isEnableEffect = _defineJs.isEnableEffect;
      SetIndex = _defineJs.SetIndex;
    }, function (_passPhaseJs) {
      getPhaseID = _passPhaseJs.getPhaseID;
    }, function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_renderSceneCorePassJs) {
      BatchingSchemes = _renderSceneCorePassJs.BatchingSchemes;
    }, function (_renderSceneSceneReflectionProbeJs) {
      ProbeType = _renderSceneSceneReflectionProbeJs.ProbeType;
    }, function (_renderSceneSceneCameraJs) {
      SKYBOX_FLAG = _renderSceneSceneCameraJs.SKYBOX_FLAG;
    }, function (_renderInstancedQueueJs) {
      RenderInstancedQueue = _renderInstancedQueueJs.RenderInstancedQueue;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      geometry = _coreIndexJs.geometry;
    }],
    execute: function () {
      CC_USE_RGBE_OUTPUT = 'CC_USE_RGBE_OUTPUT';
      _phaseID = getPhaseID('default');
      _phaseReflectMapID = getPhaseID('reflect-map');
      _export("RenderReflectionProbeQueue", RenderReflectionProbeQueue = /*#__PURE__*/function () {
        function RenderReflectionProbeQueue(pipeline) {
          this._pipeline = void 0;
          this._subModelsArray = [];
          this._passArray = [];
          this._shaderArray = [];
          this._rgbeSubModelsArray = [];
          this._instancedQueue = void 0;
          this._patches = [];
          this._pipeline = pipeline;
          this._instancedQueue = new RenderInstancedQueue();
        }
        var _proto = RenderReflectionProbeQueue.prototype;
        _proto.gatherRenderObjects = function gatherRenderObjects(probe, camera, cmdBuff) {
          this.clear();
          var scene = camera.scene;
          var sceneData = this._pipeline.pipelineSceneData;
          var skybox = sceneData.skybox;
          if (skybox.enabled && skybox.model && probe.camera.clearFlag & SKYBOX_FLAG) {
            this.add(skybox.model);
          }
          var models = scene.models;
          var visibility = probe.visibility;
          for (var i = 0; i < models.length; i++) {
            var model = models[i];
            if (!model.node || scene.isCulledByLod(camera, model)) {
              continue;
            }
            if ((visibility & model.node.layer) !== model.node.layer && !(visibility & model.visFlags)) {
              continue;
            }
            if (model.enabled && model.worldBounds && model.bakeToReflectionProbe) {
              if (probe.probeType === ProbeType.CUBE) {
                if (geometry.intersect.aabbWithAABB(model.worldBounds, probe.boundingBox)) {
                  this.add(model);
                }
              } else if (geometry.intersect.aabbFrustum(model.worldBounds, probe.camera.frustum)) {
                this.add(model);
              }
            }
          }
          this._instancedQueue.uploadBuffers(cmdBuff);
        };
        _proto.clear = function clear() {
          this._subModelsArray.length = 0;
          this._shaderArray.length = 0;
          this._passArray.length = 0;
          this._instancedQueue.clear();
          this._rgbeSubModelsArray.length = 0;
        };
        _proto.add = function add(model) {
          var subModels = model.subModels;
          for (var j = 0; j < subModels.length; j++) {
            var subModel = subModels[j];

            //Filter transparent objects
            var isTransparent = subModel.passes[0].blendState.targets[0].blend;
            if (isTransparent) {
              continue;
            }
            var passIdx = getReflectMapPassIndex(subModel);
            var bUseReflectPass = true;
            if (passIdx < 0) {
              passIdx = getPassIndex(subModel);
              bUseReflectPass = false;
            }
            if (passIdx < 0) {
              continue;
            }
            var pass = subModel.passes[passIdx];
            var batchingScheme = pass.batchingScheme;
            if (!bUseReflectPass) {
              this._patches = [];
              this._patches = this._patches.concat(subModel.patches);
              var useRGBEPatchs = [{
                name: CC_USE_RGBE_OUTPUT,
                value: true
              }];
              this._patches = this._patches.concat(useRGBEPatchs);
              subModel.onMacroPatchesStateChanged(this._patches);
              this._rgbeSubModelsArray.push(subModel);
            }
            if (batchingScheme === BatchingSchemes.INSTANCING) {
              // instancing
              var buffer = pass.getInstancedBuffer();
              buffer.merge(subModel, passIdx);
              this._instancedQueue.queue.add(buffer);
            } else {
              var shader = subModel.shaders[passIdx];
              this._subModelsArray.push(subModel);
              if (shader) this._shaderArray.push(shader);
              this._passArray.push(pass);
            }
          }
        }

        /**
         * @zh
         * record CommandBuffer
         */;
        _proto.recordCommandBuffer = function recordCommandBuffer(device, renderPass, cmdBuff) {
          this._instancedQueue.recordCommandBuffer(device, renderPass, cmdBuff);
          for (var i = 0; i < this._subModelsArray.length; ++i) {
            var subModel = this._subModelsArray[i];
            var shader = this._shaderArray[i];
            var pass = this._passArray[i];
            var ia = subModel.inputAssembler;
            var pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, ia);
            var descriptorSet = pass.descriptorSet;
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, descriptorSet);
            cmdBuff.bindDescriptorSet(SetIndex.LOCAL, subModel.descriptorSet);
            cmdBuff.bindInputAssembler(ia);
            cmdBuff.draw(ia);
          }
          this.resetRGBEMacro();
          this._instancedQueue.clear();
        };
        _proto.resetRGBEMacro = function resetRGBEMacro() {
          for (var i = 0; i < this._rgbeSubModelsArray.length; i++) {
            this._patches = [];
            var subModel = this._rgbeSubModelsArray[i];
            // eslint-disable-next-line prefer-const
            this._patches = this._patches.concat(subModel.patches);
            if (!this._patches) continue;
            for (var j = 0; j < this._patches.length; j++) {
              var patch = this._patches[j];
              if (patch.name === CC_USE_RGBE_OUTPUT) {
                this._patches.splice(j, 1);
                break;
              }
            }
            subModel.onMacroPatchesStateChanged(this._patches);
          }
        };
        return RenderReflectionProbeQueue;
      }());
    }
  };
});