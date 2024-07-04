System.register("q-bundled:///fs/cocos/rendering/render-shadow-map-batched-queue.js", ["./define.js", "./pass-phase.js", "./pipeline-state-manager.js", "../render-scene/core/pass.js", "./render-instanced-queue.js", "../render-scene/scene/shadows.js", "../render-scene/scene/light.js", "../core/index.js", "./scene-culling.js"], function (_export, _context) {
  "use strict";

  var isEnableEffect, SetIndex, getPhaseID, PipelineStateManager, BatchingSchemes, RenderInstancedQueue, ShadowType, LightType, cclegacy, geometry, shadowCulling, _phaseID, RenderShadowMapBatchedQueue;
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
  function getShadowPassIndex(subModel) {
    var passes = subModel.passes;
    var r = cclegacy.rendering;
    if (isEnableEffect()) _phaseID = r.getPhaseID(r.getPassID('default'), 'shadow-caster');
    for (var k = 0; k < passes.length; k++) {
      if ((!r || !r.enableEffectImport) && passes[k].phase === _phaseID || isEnableEffect() && passes[k].phaseID === _phaseID) {
        return k;
      }
    }
    return -1;
  }

  /**
   * @zh
   * 阴影渲染队列
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
    }, function (_renderInstancedQueueJs) {
      RenderInstancedQueue = _renderInstancedQueueJs.RenderInstancedQueue;
    }, function (_renderSceneSceneShadowsJs) {
      ShadowType = _renderSceneSceneShadowsJs.ShadowType;
    }, function (_renderSceneSceneLightJs) {
      LightType = _renderSceneSceneLightJs.LightType;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      geometry = _coreIndexJs.geometry;
    }, function (_sceneCullingJs) {
      shadowCulling = _sceneCullingJs.shadowCulling;
    }],
    execute: function () {
      _phaseID = getPhaseID('shadow-caster');
      _export("RenderShadowMapBatchedQueue", RenderShadowMapBatchedQueue = /*#__PURE__*/function () {
        function RenderShadowMapBatchedQueue(pipeline) {
          this._pipeline = void 0;
          this._subModelsArray = [];
          this._passArray = [];
          this._shaderArray = [];
          this._instancedQueue = void 0;
          this._pipeline = pipeline;
          this._instancedQueue = new RenderInstancedQueue();
        }
        var _proto = RenderShadowMapBatchedQueue.prototype;
        _proto.gatherLightPasses = function gatherLightPasses(camera, light, cmdBuff, level) {
          if (level === void 0) {
            level = 0;
          }
          this.clear();
          var sceneData = this._pipeline.pipelineSceneData;
          var shadowInfo = sceneData.shadows;
          if (light && shadowInfo.enabled && shadowInfo.type === ShadowType.ShadowMap) {
            switch (light.type) {
              case LightType.DIRECTIONAL:
                // eslint-disable-next-line no-case-declarations
                var dirLight = light;
                if (dirLight.shadowEnabled) {
                  var csmLayers = sceneData.csmLayers;
                  var layer;
                  if (dirLight.shadowFixedArea) {
                    layer = csmLayers.specialLayer;
                  } else {
                    layer = csmLayers.layers[level];
                  }
                  shadowCulling(camera, sceneData, layer);
                  var dirShadowObjects = layer.shadowObjects;
                  for (var i = 0; i < dirShadowObjects.length; i++) {
                    var ro = dirShadowObjects[i];
                    var model = ro.model;
                    this.add(model, level);
                  }
                }
                break;
              case LightType.SPOT:
                // eslint-disable-next-line no-case-declarations
                var spotLight = light;
                if (spotLight.shadowEnabled) {
                  var visibility = spotLight.visibility;
                  var castShadowObjects = sceneData.csmLayers.castShadowObjects;
                  for (var _i = 0; _i < castShadowObjects.length; _i++) {
                    var _ro = castShadowObjects[_i];
                    var _model = _ro.model;
                    if (_model.worldBounds) {
                      if ((visibility & _model.node.layer) !== _model.node.layer || !geometry.intersect.aabbFrustum(_model.worldBounds, spotLight.frustum)) {
                        continue;
                      }
                    }
                    this.add(_model, level);
                  }
                }
                break;
              default:
            }
            this._instancedQueue.uploadBuffers(cmdBuff);
          }
        }

        /**
         * @zh
         * clear light-Batched-Queue
         */;
        _proto.clear = function clear() {
          this._subModelsArray.length = 0;
          this._shaderArray.length = 0;
          this._passArray.length = 0;
          this._instancedQueue.clear();
        };
        _proto.add = function add(model, level) {
          var subModels = model.subModels;
          for (var j = 0; j < subModels.length; j++) {
            var subModel = subModels[j];
            var shadowPassIdx = getShadowPassIndex(subModel);
            if (shadowPassIdx < 0) {
              continue;
            }
            var pass = subModel.passes[shadowPassIdx];
            var batchingScheme = pass.batchingScheme;
            if (batchingScheme === BatchingSchemes.INSTANCING) {
              // instancing
              var buffer = pass.getInstancedBuffer(level);
              buffer.merge(subModel, shadowPassIdx);
              this._instancedQueue.queue.add(buffer);
            } else {
              var shader = subModel.shaders[shadowPassIdx];
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
        };
        return RenderShadowMapBatchedQueue;
      }());
    }
  };
});