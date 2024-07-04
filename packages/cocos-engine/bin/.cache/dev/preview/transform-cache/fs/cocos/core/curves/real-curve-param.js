System.register("q-bundled:///fs/cocos/core/curves/real-curve-param.js", [], function (_export, _context) {
  "use strict";

  var RealInterpolationMode, ExtrapolationMode, TangentWeightMode;
  _export({
    RealInterpolationMode: void 0,
    ExtrapolationMode: void 0,
    TangentWeightMode: void 0
  });
  return {
    setters: [],
    execute: function () {
      (function (RealInterpolationMode) {
        RealInterpolationMode[RealInterpolationMode["LINEAR"] = 0] = "LINEAR";
        RealInterpolationMode[RealInterpolationMode["CONSTANT"] = 1] = "CONSTANT";
        RealInterpolationMode[RealInterpolationMode["CUBIC"] = 2] = "CUBIC";
      })(RealInterpolationMode || _export("RealInterpolationMode", RealInterpolationMode = {}));
      (function (ExtrapolationMode) {
        ExtrapolationMode[ExtrapolationMode["LINEAR"] = 0] = "LINEAR";
        ExtrapolationMode[ExtrapolationMode["CLAMP"] = 1] = "CLAMP";
        ExtrapolationMode[ExtrapolationMode["LOOP"] = 2] = "LOOP";
        ExtrapolationMode[ExtrapolationMode["PING_PONG"] = 3] = "PING_PONG";
      })(ExtrapolationMode || _export("ExtrapolationMode", ExtrapolationMode = {}));
      (function (TangentWeightMode) {
        TangentWeightMode[TangentWeightMode["NONE"] = 0] = "NONE";
        TangentWeightMode[TangentWeightMode["LEFT"] = 1] = "LEFT";
        TangentWeightMode[TangentWeightMode["RIGHT"] = 2] = "RIGHT";
        TangentWeightMode[TangentWeightMode["BOTH"] = 3] = "BOTH";
      })(TangentWeightMode || _export("TangentWeightMode", TangentWeightMode = {}));
    }
  };
});