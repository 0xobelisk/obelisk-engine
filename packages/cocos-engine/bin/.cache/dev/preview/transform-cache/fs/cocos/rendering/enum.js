System.register("q-bundled:///fs/cocos/rendering/enum.js", [], function (_export, _context) {
  "use strict";

  var CommonStagePriority, ForwardStagePriority, ForwardFlowPriority, DeferredStagePriority, DeferredFlowPriority;
  _export({
    CommonStagePriority: void 0,
    ForwardStagePriority: void 0,
    ForwardFlowPriority: void 0,
    DeferredStagePriority: void 0,
    DeferredFlowPriority: void 0
  });
  return {
    setters: [],
    execute: function () {
      (function (CommonStagePriority) {
        CommonStagePriority[CommonStagePriority["BLOOM"] = 18] = "BLOOM";
        CommonStagePriority[CommonStagePriority["POST_PROCESS"] = 19] = "POST_PROCESS";
        CommonStagePriority[CommonStagePriority["UI"] = 20] = "UI";
      })(CommonStagePriority || _export("CommonStagePriority", CommonStagePriority = {}));
      (function (ForwardStagePriority) {
        ForwardStagePriority[ForwardStagePriority["AR"] = 5] = "AR";
        ForwardStagePriority[ForwardStagePriority["FORWARD"] = 10] = "FORWARD";
      })(ForwardStagePriority || _export("ForwardStagePriority", ForwardStagePriority = {}));
      (function (ForwardFlowPriority) {
        ForwardFlowPriority[ForwardFlowPriority["SHADOW"] = 0] = "SHADOW";
        ForwardFlowPriority[ForwardFlowPriority["FORWARD"] = 1] = "FORWARD";
        ForwardFlowPriority[ForwardFlowPriority["UI"] = 10] = "UI";
      })(ForwardFlowPriority || _export("ForwardFlowPriority", ForwardFlowPriority = {}));
      (function (DeferredStagePriority) {
        DeferredStagePriority[DeferredStagePriority["GBUFFER"] = 10] = "GBUFFER";
        DeferredStagePriority[DeferredStagePriority["LIGHTING"] = 15] = "LIGHTING";
        DeferredStagePriority[DeferredStagePriority["TRANSPARENT"] = 18] = "TRANSPARENT";
      })(DeferredStagePriority || _export("DeferredStagePriority", DeferredStagePriority = {}));
      (function (DeferredFlowPriority) {
        DeferredFlowPriority[DeferredFlowPriority["SHADOW"] = 0] = "SHADOW";
        DeferredFlowPriority[DeferredFlowPriority["MAIN"] = 1] = "MAIN";
        DeferredFlowPriority[DeferredFlowPriority["UI"] = 10] = "UI";
      })(DeferredFlowPriority || _export("DeferredFlowPriority", DeferredFlowPriority = {}));
    }
  };
});