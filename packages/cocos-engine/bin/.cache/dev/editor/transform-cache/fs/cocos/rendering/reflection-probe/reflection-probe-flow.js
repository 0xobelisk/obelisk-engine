System.register("q-bundled:///fs/cocos/rendering/reflection-probe/reflection-probe-flow.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/decorators/index.js", "../render-flow.js", "./reflection-probe-stage.js", "../pipeline-serialization.js", "../../render-scene/scene/reflection-probe.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, RenderFlow, ReflectionProbeStage, RenderFlowTag, ProbeType, cclegacy, _dec, _class, _class2, ReflectionProbeFlow;
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_reflectionProbeStageJs) {
      ReflectionProbeStage = _reflectionProbeStageJs.ReflectionProbeStage;
    }, function (_pipelineSerializationJs) {
      RenderFlowTag = _pipelineSerializationJs.RenderFlowTag;
    }, function (_renderSceneSceneReflectionProbeJs) {
      ProbeType = _renderSceneSceneReflectionProbeJs.ProbeType;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en reflection probe render flow
       * @zh 反射探针rendertexture绘制流程
       */
      _export("ReflectionProbeFlow", ReflectionProbeFlow = (_dec = ccclass('ReflectionProbeFlow'), _dec(_class = (_class2 = class ReflectionProbeFlow extends RenderFlow {
        initialize(info) {
          super.initialize(info);
          if (this._stages.length === 0) {
            const probeStage = new ReflectionProbeStage();
            probeStage.initialize(ReflectionProbeStage.initInfo);
            this._stages.push(probeStage);
          }
          return true;
        }
        activate(pipeline) {
          super.activate(pipeline);
        }
        render(camera) {
          if (!cclegacy.internal.reflectionProbeManager) {
            return;
          }
          const probes = cclegacy.internal.reflectionProbeManager.getProbes();
          for (let i = 0; i < probes.length; i++) {
            if (probes[i].needRender) {
              if (EDITOR || probes[i].probeType === ProbeType.PLANAR) {
                this._renderStage(camera, probes[i]);
              }
            }
          }
        }
        destroy() {
          super.destroy();
        }
        _renderStage(camera, probe) {
          for (let i = 0; i < this._stages.length; i++) {
            const probeStage = this._stages[i];
            if (probe.probeType === ProbeType.PLANAR) {
              cclegacy.internal.reflectionProbeManager.updatePlanarMap(probe, null);
              probeStage.setUsageInfo(probe, probe.realtimePlanarTexture.window.framebuffer);
              probeStage.render(camera);
              cclegacy.internal.reflectionProbeManager.updatePlanarMap(probe, probe.realtimePlanarTexture.getGFXTexture());
            } else {
              for (let faceIdx = 0; faceIdx < 6; faceIdx++) {
                const renderTexture = probe.bakedCubeTextures[faceIdx];
                if (!renderTexture) return;
                //update camera dirction
                probe.updateCameraDir(faceIdx);
                probeStage.setUsageInfo(probe, renderTexture.window.framebuffer);
                probeStage.render(camera);
              }
              probe.needRender = false;
            }
          }
        }
      }, _class2.initInfo = {
        name: 'PIPELINE_FLOW_RELECTION_PROBE',
        priority: 0,
        tag: RenderFlowTag.SCENE,
        stages: []
      }, _class2)) || _class));
    }
  };
});