System.register("q-bundled:///fs/cocos/rendering/forward/forward-flow.js", ["../../core/data/decorators/index.js", "../define.js", "../render-flow.js", "../enum.js", "./forward-stage.js"], function (_export, _context) {
  "use strict";

  var ccclass, PIPELINE_FLOW_FORWARD, RenderFlow, ForwardFlowPriority, ForwardStage, _dec, _class, _class2, ForwardFlow;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_defineJs) {
      PIPELINE_FLOW_FORWARD = _defineJs.PIPELINE_FLOW_FORWARD;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_enumJs) {
      ForwardFlowPriority = _enumJs.ForwardFlowPriority;
    }, function (_forwardStageJs) {
      ForwardStage = _forwardStageJs.ForwardStage;
    }],
    execute: function () {
      /**
       * @en The forward flow in forward render pipeline
       * @zh 前向渲染流程。
       */
      _export("ForwardFlow", ForwardFlow = (_dec = ccclass('ForwardFlow'), _dec(_class = (_class2 = class ForwardFlow extends RenderFlow {
        initialize(info) {
          super.initialize(info);
          if (this._stages.length === 0) {
            const forwardStage = new ForwardStage();
            forwardStage.initialize(ForwardStage.initInfo);
            this._stages.push(forwardStage);
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
        name: PIPELINE_FLOW_FORWARD,
        priority: ForwardFlowPriority.FORWARD,
        stages: []
      }, _class2)) || _class));
    }
  };
});