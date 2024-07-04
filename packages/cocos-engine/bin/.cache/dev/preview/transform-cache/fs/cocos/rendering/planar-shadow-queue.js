System.register("q-bundled:///fs/cocos/rendering/planar-shadow-queue.js", ["../core/index.js", "./define.js", "./pipeline-state-manager.js", "./render-instanced-queue.js", "../render-scene/scene/shadows.js", "../scene-graph/layers.js", "../render-scene/core/pass.js", "./pass-phase.js"], function (_export, _context) {
  "use strict";

  var cclegacy, geometry, isEnableEffect, SetIndex, PipelineStateManager, RenderInstancedQueue, ShadowType, Layers, BatchingSchemes, getPhaseID, _ab, _phaseID, PlanarShadowQueue;
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
  function getPlanarShadowPassIndex(subModel) {
    var passes = subModel.passes;
    var r = cclegacy.rendering;
    if (isEnableEffect()) _phaseID = r.getPhaseID(r.getPassID('default'), 'planar-shadow');
    for (var k = 0; k < passes.length; k++) {
      if ((!r || !r.enableEffectImport) && passes[k].phase === _phaseID || isEnableEffect() && passes[k].phaseID === _phaseID) {
        return k;
      }
    }
    return -1;
  }
  return {
    setters: [function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      geometry = _coreIndexJs.geometry;
    }, function (_defineJs) {
      isEnableEffect = _defineJs.isEnableEffect;
      SetIndex = _defineJs.SetIndex;
    }, function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_renderInstancedQueueJs) {
      RenderInstancedQueue = _renderInstancedQueueJs.RenderInstancedQueue;
    }, function (_renderSceneSceneShadowsJs) {
      ShadowType = _renderSceneSceneShadowsJs.ShadowType;
    }, function (_sceneGraphLayersJs) {
      Layers = _sceneGraphLayersJs.Layers;
    }, function (_renderSceneCorePassJs) {
      BatchingSchemes = _renderSceneCorePassJs.BatchingSchemes;
    }, function (_passPhaseJs) {
      getPhaseID = _passPhaseJs.getPhaseID;
    }],
    execute: function () {
      _ab = new geometry.AABB();
      _phaseID = getPhaseID('planar-shadow');
      _export("PlanarShadowQueue", PlanarShadowQueue = /*#__PURE__*/function () {
        function PlanarShadowQueue(pipeline) {
          this._subModelArray = [];
          this._shaderArray = [];
          this._passArray = [];
          this._castModels = [];
          this._instancedQueue = new RenderInstancedQueue();
          this._pipeline = void 0;
          this._pipeline = pipeline;
        }

        /**
         * @en
         * clear planar-shadow queue
         * @zh
         * 清除 planar-shadow 渲染队列数据
         */
        var _proto = PlanarShadowQueue.prototype;
        _proto.clear = function clear() {
          this._subModelArray.length = 0;
          this._shaderArray.length = 0;
          this._passArray.length = 0;
          this._instancedQueue.clear();
          this._castModels.length = 0;
        };
        _proto.gatherShadowPasses = function gatherShadowPasses(camera, cmdBuff) {
          this.clear();
          var pipelineSceneData = this._pipeline.pipelineSceneData;
          var shadows = pipelineSceneData.shadows;
          if (!shadows.enabled || shadows.type !== ShadowType.Planar || shadows.normal.length() < 0.000001) {
            return;
          }
          var scene = camera.scene;
          var frustum = camera.frustum;
          var shadowVisible = (camera.visibility & Layers.BitMask.DEFAULT) !== 0;
          if (!scene.mainLight || !shadowVisible) {
            return;
          }
          var models = scene.models;
          var visibility = camera.visibility;
          for (var i = 0; i < models.length; i++) {
            var model = models[i];
            if (scene.isCulledByLod(camera, model)) {
              continue;
            }
            if (model.enabled && model.node && model.castShadow && model.node && (visibility & model.node.layer) === model.node.layer) {
              this._castModels.push(model);
            }
          }
          for (var _i = 0; _i < this._castModels.length; _i++) {
            var _model = this._castModels[_i];
            if (_model.worldBounds) {
              geometry.AABB.transform(_ab, _model.worldBounds, shadows.matLight);
              if (!geometry.intersect.aabbFrustum(_ab, frustum)) {
                continue;
              }
            }
            var subModels = _model.subModels;
            for (var j = 0; j < subModels.length; j++) {
              var subModel = subModels[j];
              var shadowPassIdx = getPlanarShadowPassIndex(subModel);
              if (shadowPassIdx < 0) {
                this._subModelArray.push(subModel);
                var planarShader = shadows.getPlanarShader(subModel.patches);
                if (!planarShader) {
                  continue;
                }
                this._shaderArray.push(planarShader);
                this._passArray.push(shadows.material.passes[0]);
                continue;
              }
              var pass = subModel.passes[shadowPassIdx];
              var batchingScheme = pass.batchingScheme;
              if (batchingScheme === BatchingSchemes.INSTANCING) {
                var buffer = pass.getInstancedBuffer();
                buffer.merge(subModel, shadowPassIdx);
                this._instancedQueue.queue.add(buffer);
              } else {
                var shader = subModel.shaders[shadowPassIdx];
                this._subModelArray.push(subModel);
                if (shader) this._shaderArray.push(shader);
                this._passArray.push(pass);
              }
            }
          }
          this._instancedQueue.uploadBuffers(cmdBuff);
        };
        _proto.recordCommandBuffer = function recordCommandBuffer(device, renderPass, cmdBuff) {
          var shadows = this._pipeline.pipelineSceneData.shadows;
          if (!shadows.enabled || shadows.type !== ShadowType.Planar) {
            return;
          }
          this._instancedQueue.recordCommandBuffer(device, renderPass, cmdBuff);
          for (var i = 0; i < this._subModelArray.length; ++i) {
            var subModel = this._subModelArray[i];
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
        };
        return PlanarShadowQueue;
      }());
    }
  };
});