System.register("q-bundled:///fs/cocos/rendering/custom/builtin-pipelines.js", ["../../../../virtual/internal%253Aconstants.js", "../../render-scene/scene/index.js", "./define.js", "./utils.js", "./pipeline-define.js", "../../gfx/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, CameraUsage, buildClusterPasses, isUICamera, prepareResource, setupForwardPass, setupForwardRes, setupReflectionProbePass, setupReflectionProbeRes, updateForwardRes, updateReflectionProbeRes, setupGBufferPass, updateGBufferRes, setupGBufferRes, setupLightingPass, setupLightingRes, updateLightingRes, setupPostprocessPass, setupPostprocessRes, updatePostprocessRes, setupUIPass, setupUIRes, updateUIRes, setupDeferredForward, Feature, ForwardPipelineBuilder, DeferredPipelineBuilder;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
                                                                                                                                                                                                                                                                                                                                                                                            */
  _export({
    ForwardPipelineBuilder: void 0,
    DeferredPipelineBuilder: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_renderSceneSceneIndexJs) {
      CameraUsage = _renderSceneSceneIndexJs.CameraUsage;
    }, function (_defineJs) {
      buildClusterPasses = _defineJs.buildClusterPasses;
    }, function (_utilsJs) {
      isUICamera = _utilsJs.isUICamera;
    }, function (_pipelineDefineJs) {
      prepareResource = _pipelineDefineJs.prepareResource;
      setupForwardPass = _pipelineDefineJs.setupForwardPass;
      setupForwardRes = _pipelineDefineJs.setupForwardRes;
      setupReflectionProbePass = _pipelineDefineJs.setupReflectionProbePass;
      setupReflectionProbeRes = _pipelineDefineJs.setupReflectionProbeRes;
      updateForwardRes = _pipelineDefineJs.updateForwardRes;
      updateReflectionProbeRes = _pipelineDefineJs.updateReflectionProbeRes;
      setupGBufferPass = _pipelineDefineJs.setupGBufferPass;
      updateGBufferRes = _pipelineDefineJs.updateGBufferRes;
      setupGBufferRes = _pipelineDefineJs.setupGBufferRes;
      setupLightingPass = _pipelineDefineJs.setupLightingPass;
      setupLightingRes = _pipelineDefineJs.setupLightingRes;
      updateLightingRes = _pipelineDefineJs.updateLightingRes;
      setupPostprocessPass = _pipelineDefineJs.setupPostprocessPass;
      setupPostprocessRes = _pipelineDefineJs.setupPostprocessRes;
      updatePostprocessRes = _pipelineDefineJs.updatePostprocessRes;
      setupUIPass = _pipelineDefineJs.setupUIPass;
      setupUIRes = _pipelineDefineJs.setupUIRes;
      updateUIRes = _pipelineDefineJs.updateUIRes;
      setupDeferredForward = _pipelineDefineJs.setupDeferredForward;
    }, function (_gfxIndexJs) {
      Feature = _gfxIndexJs.Feature;
    }],
    execute: function () {
      _export("ForwardPipelineBuilder", ForwardPipelineBuilder = class ForwardPipelineBuilder {
        setup(cameras, ppl) {
          for (let i = 0; i < cameras.length; i++) {
            const camera = cameras[i];
            if (camera.scene === null) {
              continue;
            }
            ppl.update(camera);
            const info = prepareResource(ppl, camera, this.initResource, this.updateResource);
            setupForwardPass(ppl, info);
            if (EDITOR) {
              setupReflectionProbePass(ppl, info);
            }
          }
        }
        initResource(ppl, cameraInfo) {
          setupForwardRes(ppl, cameraInfo);
          if (EDITOR) setupReflectionProbeRes(ppl, cameraInfo);
        }
        updateResource(ppl, cameraInfo) {
          updateForwardRes(ppl, cameraInfo);
          if (EDITOR) updateReflectionProbeRes(ppl, cameraInfo);
        }
      });
      _export("DeferredPipelineBuilder", DeferredPipelineBuilder = class DeferredPipelineBuilder {
        setup(cameras, ppl) {
          for (let i = 0; i < cameras.length; ++i) {
            const camera = cameras[i];
            if (!camera.scene) {
              continue;
            }
            ppl.update(camera);
            const forceDisableCluster = false;
            const useCluster = !forceDisableCluster && ppl.device.hasFeature(Feature.COMPUTE_SHADER);
            const isGameView = camera.cameraUsage === CameraUsage.GAME || camera.cameraUsage === CameraUsage.GAME_VIEW;
            const info = prepareResource(ppl, camera, this.initResource, this.updateResource);
            if (!isGameView) {
              setupForwardPass(ppl, info);
              continue;
            }
            if (!isUICamera(camera)) {
              if (useCluster) {
                buildClusterPasses(camera, ppl);
              }

              // GBuffer Pass
              setupGBufferPass(ppl, info);
              // Lighting Pass
              const lightInfo = setupLightingPass(ppl, info, useCluster);
              // Deferred ForwardPass, for non-surface-shader material and transparent material
              setupDeferredForward(ppl, info, lightInfo.rtName, useCluster);
              // Postprocess
              setupPostprocessPass(ppl, info, lightInfo.rtName);
              continue;
            }
            // render ui
            setupUIPass(ppl, info);
          }
        }
        initResource(ppl, cameraInfo) {
          if (EDITOR) {
            setupForwardRes(ppl, cameraInfo);
            return;
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          if (!isUICamera(cameraInfo.camera)) {
            setupGBufferRes(ppl, cameraInfo);
            setupLightingRes(ppl, cameraInfo);
            setupPostprocessRes(ppl, cameraInfo);
          } else {
            setupUIRes(ppl, cameraInfo);
          }
        }
        updateResource(ppl, cameraInfo) {
          if (EDITOR) {
            updateForwardRes(ppl, cameraInfo);
            return;
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          if (!isUICamera(cameraInfo.camera)) {
            updateGBufferRes(ppl, cameraInfo);
            updateLightingRes(ppl, cameraInfo);
            updatePostprocessRes(ppl, cameraInfo);
          } else {
            updateUIRes(ppl, cameraInfo);
          }
        }
      });
    }
  };
});