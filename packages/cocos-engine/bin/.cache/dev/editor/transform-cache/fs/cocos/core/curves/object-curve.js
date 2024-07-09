System.register("q-bundled:///fs/cocos/core/curves/object-curve.js", ["../data/decorators/index.js", "../math/index.js", "./keyframe-curve.js"], function (_export, _context) {
  "use strict";

  var ccclass, clamp, KeyframeCurve, _dec, _class, ObjectCurve;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
    }, function (_mathIndexJs) {
      clamp = _mathIndexJs.clamp;
    }, function (_keyframeCurveJs) {
      KeyframeCurve = _keyframeCurveJs.KeyframeCurve;
    }],
    execute: function () {
      _export("ObjectCurve", ObjectCurve = (_dec = ccclass('cc.ObjectCurve'), _dec(_class = class ObjectCurve extends KeyframeCurve {
        evaluate(time) {
          const iSearch = this.searchKeyframe(time);
          if (iSearch >= 0) {
            return this._values[iSearch];
          }
          const iPrev = clamp(~iSearch - 1, 0, this._values.length - 1);
          return this._values[iPrev];
        }
      }) || _class));
    }
  };
});