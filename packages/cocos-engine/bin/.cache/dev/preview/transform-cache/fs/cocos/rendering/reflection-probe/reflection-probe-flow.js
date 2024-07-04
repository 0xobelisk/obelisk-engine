System.register("q-bundled:///fs/cocos/rendering/reflection-probe/reflection-probe-flow.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/decorators/index.js", "../render-flow.js", "./reflection-probe-stage.js", "../pipeline-serialization.js", "../../render-scene/scene/reflection-probe.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, RenderFlow, ReflectionProbeStage, RenderFlowTag, ProbeType, cclegacy, _dec, _class, _class2, ReflectionProbeFlow;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("ReflectionProbeFlow", ReflectionProbeFlow = (_dec = ccclass('ReflectionProbeFlow'), _dec(_class = (_class2 = /*#__PURE__*/function (_RenderFlow) {
        _inheritsLoose(ReflectionProbeFlow, _RenderFlow);
        function ReflectionProbeFlow() {
          return _RenderFlow.apply(this, arguments) || this;
        }
        var _proto = ReflectionProbeFlow.prototype;
        _proto.initialize = function initialize(info) {
          _RenderFlow.prototype.initialize.call(this, info);
          if (this._stages.length === 0) {
            var probeStage = new ReflectionProbeStage();
            probeStage.initialize(ReflectionProbeStage.initInfo);
            this._stages.push(probeStage);
          }
          return true;
        };
        _proto.activate = function activate(pipeline) {
          _RenderFlow.prototype.activate.call(this, pipeline);
        };
        _proto.render = function render(camera) {
          if (!cclegacy.internal.reflectionProbeManager) {
            return;
          }
          var probes = cclegacy.internal.reflectionProbeManager.getProbes();
          for (var i = 0; i < probes.length; i++) {
            if (probes[i].needRender) {
              if (EDITOR || probes[i].probeType === ProbeType.PLANAR) {
                this._renderStage(camera, probes[i]);
              }
            }
          }
        };
        _proto.destroy = function destroy() {
          _RenderFlow.prototype.destroy.call(this);
        };
        _proto._renderStage = function _renderStage(camera, probe) {
          for (var i = 0; i < this._stages.length; i++) {
            var probeStage = this._stages[i];
            if (probe.probeType === ProbeType.PLANAR) {
              cclegacy.internal.reflectionProbeManager.updatePlanarMap(probe, null);
              probeStage.setUsageInfo(probe, probe.realtimePlanarTexture.window.framebuffer);
              probeStage.render(camera);
              cclegacy.internal.reflectionProbeManager.updatePlanarMap(probe, probe.realtimePlanarTexture.getGFXTexture());
            } else {
              for (var faceIdx = 0; faceIdx < 6; faceIdx++) {
                var renderTexture = probe.bakedCubeTextures[faceIdx];
                if (!renderTexture) return;
                //update camera dirction
                probe.updateCameraDir(faceIdx);
                probeStage.setUsageInfo(probe, renderTexture.window.framebuffer);
                probeStage.render(camera);
              }
              probe.needRender = false;
            }
          }
        };
        return ReflectionProbeFlow;
      }(RenderFlow), _class2.initInfo = {
        name: 'PIPELINE_FLOW_RELECTION_PROBE',
        priority: 0,
        tag: RenderFlowTag.SCENE,
        stages: []
      }, _class2)) || _class));
    }
  };
});