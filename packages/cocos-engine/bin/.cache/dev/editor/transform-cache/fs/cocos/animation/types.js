System.register("q-bundled:///fs/cocos/animation/types.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var ccenum, geometry, WrappedInfo, WrapMode;
  function isLerpable(object) {
    return typeof object.lerp === 'function';
  }
  _export({
    WrappedInfo: void 0,
    isLerpable: isLerpable,
    WrapMode: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
      geometry = _coreIndexJs.geometry;
    }],
    execute: function () {
      (function (WrapMode) {
        WrapMode[WrapMode["Default"] = geometry.WrapModeMask.Default] = "Default";
        WrapMode[WrapMode["Normal"] = geometry.WrapModeMask.Normal] = "Normal";
        WrapMode[WrapMode["Reverse"] = geometry.WrapModeMask.Reverse] = "Reverse";
        WrapMode[WrapMode["Loop"] = geometry.WrapModeMask.Loop] = "Loop";
        WrapMode[WrapMode["LoopReverse"] = geometry.WrapModeMask.Loop | geometry.WrapModeMask.Reverse] = "LoopReverse";
        WrapMode[WrapMode["PingPong"] = geometry.WrapModeMask.PingPong] = "PingPong";
        WrapMode[WrapMode["PingPongReverse"] = geometry.WrapModeMask.PingPong | geometry.WrapModeMask.Reverse] = "PingPongReverse";
      })(WrapMode || _export("WrapMode", WrapMode = {}));
      ccenum(WrapMode);

      /**
       * For internal
       */
      _export("WrappedInfo", WrappedInfo = class WrappedInfo {
        constructor(info) {
          this.ratio = 0;
          this.time = 0;
          this.direction = 1;
          this.stopped = true;
          this.iterations = 0;
          this.frameIndex = undefined;
          if (info) {
            this.set(info);
          }
        }
        set(info) {
          this.ratio = info.ratio;
          this.time = info.time;
          this.direction = info.direction;
          this.stopped = info.stopped;
          this.iterations = info.iterations;
          this.frameIndex = info.frameIndex;
        }
      });
    }
  };
});