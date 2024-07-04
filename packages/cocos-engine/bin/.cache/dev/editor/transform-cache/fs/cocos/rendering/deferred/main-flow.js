System.register("q-bundled:///fs/cocos/rendering/deferred/main-flow.js", ["../../core/data/decorators/index.js", "../define.js", "../render-flow.js", "../enum.js", "./gbuffer-stage.js", "./lighting-stage.js", "./postprocess-stage.js", "./bloom-stage.js"], function (_export, _context) {
  "use strict";

  var ccclass, PIPELINE_FLOW_MAIN, RenderFlow, DeferredFlowPriority, GbufferStage, LightingStage, PostProcessStage, BloomStage, _dec, _class, _class2, MainFlow;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_defineJs) {
      PIPELINE_FLOW_MAIN = _defineJs.PIPELINE_FLOW_MAIN;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_enumJs) {
      DeferredFlowPriority = _enumJs.DeferredFlowPriority;
    }, function (_gbufferStageJs) {
      GbufferStage = _gbufferStageJs.GbufferStage;
    }, function (_lightingStageJs) {
      LightingStage = _lightingStageJs.LightingStage;
    }, function (_postprocessStageJs) {
      PostProcessStage = _postprocessStageJs.PostProcessStage;
    }, function (_bloomStageJs) {
      BloomStage = _bloomStageJs.BloomStage;
    }],
    execute: function () {
      /**
       * @en The main flow in deferred render pipeline
       * @zh 延迟渲染流程。
       */
      _export("MainFlow", MainFlow = (_dec = ccclass('MainFlow'), _dec(_class = (_class2 = class MainFlow extends RenderFlow {
        initialize(info) {
          super.initialize(info);
          if (this._stages.length === 0) {
            const gbufferStage = new GbufferStage();
            gbufferStage.initialize(GbufferStage.initInfo);
            this._stages.push(gbufferStage);
            const lightingStage = new LightingStage();
            lightingStage.initialize(LightingStage.initInfo);
            this._stages.push(lightingStage);
            const bloomStage = new BloomStage();
            bloomStage.initialize(BloomStage.initInfo);
            this._stages.push(bloomStage);
            const postProcessStage = new PostProcessStage();
            postProcessStage.initialize(PostProcessStage.initInfo);
            this._stages.push(postProcessStage);
          }
          return true;
        }
        activate(pipeline) {
          super.activate(pipeline);
        }
        render(camera) {
          super.render(camera);
        }
        destroy() {
          super.destroy();
        }
      }, _class2.initInfo = {
        name: PIPELINE_FLOW_MAIN,
        priority: DeferredFlowPriority.MAIN,
        stages: []
      }, _class2)) || _class));
    }
  };
});