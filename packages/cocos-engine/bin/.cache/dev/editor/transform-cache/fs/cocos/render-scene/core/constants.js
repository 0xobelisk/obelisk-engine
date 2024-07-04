System.register("q-bundled:///fs/cocos/render-scene/core/constants.js", [], function (_export, _context) {
  "use strict";

  var RenderQueue, PassStage;
  _export({
    RenderQueue: void 0,
    PassStage: void 0
  });
  return {
    setters: [],
    execute: function () {
      (function (RenderQueue) {
        RenderQueue[RenderQueue["OPAQUE"] = 0] = "OPAQUE";
        RenderQueue[RenderQueue["TRANSPARENT"] = 1] = "TRANSPARENT";
        RenderQueue[RenderQueue["OVERLAY"] = 2] = "OVERLAY";
      })(RenderQueue || _export("RenderQueue", RenderQueue = {}));
      (function (PassStage) {
        PassStage[PassStage["DEFAULT"] = 1] = "DEFAULT";
        PassStage[PassStage["FORWARD"] = 2] = "FORWARD";
        PassStage[PassStage["SHADOWCAST"] = 4] = "SHADOWCAST";
      })(PassStage || _export("PassStage", PassStage = {}));
    }
  };
});