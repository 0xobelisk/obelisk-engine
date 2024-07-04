System.register("q-bundled:///fs/cocos/2d/assembler/graphics/types.js", ["../../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccenum, LineCap, LineJoin, PointFlags;
  _export({
    LineCap: void 0,
    LineJoin: void 0,
    PointFlags: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
    }],
    execute: function () {
      (function (LineCap) {
        LineCap[LineCap["BUTT"] = 0] = "BUTT";
        LineCap[LineCap["ROUND"] = 1] = "ROUND";
        LineCap[LineCap["SQUARE"] = 2] = "SQUARE";
      })(LineCap || _export("LineCap", LineCap = {}));
      ccenum(LineCap);

      /**
       * @en Enum for LineJoin.
       * @zh 线段拐角属性
       * @enum Graphics.LineJoin
       */
      (function (LineJoin) {
        LineJoin[LineJoin["BEVEL"] = 0] = "BEVEL";
        LineJoin[LineJoin["ROUND"] = 1] = "ROUND";
        LineJoin[LineJoin["MITER"] = 2] = "MITER";
      })(LineJoin || _export("LineJoin", LineJoin = {}));
      ccenum(LineJoin);

      // PointFlags
      (function (PointFlags) {
        PointFlags[PointFlags["PT_CORNER"] = 1] = "PT_CORNER";
        PointFlags[PointFlags["PT_LEFT"] = 2] = "PT_LEFT";
        PointFlags[PointFlags["PT_BEVEL"] = 4] = "PT_BEVEL";
        PointFlags[PointFlags["PT_INNERBEVEL"] = 8] = "PT_INNERBEVEL";
      })(PointFlags || _export("PointFlags", PointFlags = {}));
      ccenum(PointFlags);
    }
  };
});