System.register("q-bundled:///fs/cocos/core/curves/object-curve.js", ["../data/decorators/index.js", "../math/index.js", "./keyframe-curve.js"], function (_export, _context) {
  "use strict";

  var ccclass, clamp, KeyframeCurve, _dec, _class, ObjectCurve;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
    }, function (_mathIndexJs) {
      clamp = _mathIndexJs.clamp;
    }, function (_keyframeCurveJs) {
      KeyframeCurve = _keyframeCurveJs.KeyframeCurve;
    }],
    execute: function () {
      _export("ObjectCurve", ObjectCurve = (_dec = ccclass('cc.ObjectCurve'), _dec(_class = /*#__PURE__*/function (_KeyframeCurve) {
        _inheritsLoose(ObjectCurve, _KeyframeCurve);
        function ObjectCurve() {
          return _KeyframeCurve.apply(this, arguments) || this;
        }
        var _proto = ObjectCurve.prototype;
        _proto.evaluate = function evaluate(time) {
          var iSearch = this.searchKeyframe(time);
          if (iSearch >= 0) {
            return this._values[iSearch];
          }
          var iPrev = clamp(~iSearch - 1, 0, this._values.length - 1);
          return this._values[iPrev];
        };
        return ObjectCurve;
      }(KeyframeCurve)) || _class));
    }
  };
});