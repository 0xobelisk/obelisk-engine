System.register("q-bundled:///fs/cocos/animation/tracks/quat-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js"], function (_export, _context) {
  "use strict";

  var ccclass, QuatCurve, Quat, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, SingleChannelTrack, _dec, _class, QuatTrack, QuatTrackEval;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_coreIndexJs) {
      QuatCurve = _coreIndexJs.QuatCurve;
      Quat = _coreIndexJs.Quat;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_trackJs) {
      SingleChannelTrack = _trackJs.SingleChannelTrack;
    }],
    execute: function () {
      /**
       * @en
       * A quaternion track animates a quaternion(rotation) attribute of target.
       * @zh
       * 四元数轨道描述目标上某个四元数（旋转）属性的动画。
       */
      _export("QuatTrack", QuatTrack = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "QuatTrack"), _dec(_class = /*#__PURE__*/function (_SingleChannelTrack) {
        _inheritsLoose(QuatTrack, _SingleChannelTrack);
        function QuatTrack() {
          return _SingleChannelTrack.apply(this, arguments) || this;
        }
        var _proto = QuatTrack.prototype;
        /**
         * @internal
         */
        _proto.createCurve = function createCurve() {
          return new QuatCurve();
        }

        /**
         * @internal
         */;
        _proto[createEvalSymbol] = function () {
          return new QuatTrackEval(this.channels()[0].curve);
        };
        return QuatTrack;
      }(SingleChannelTrack)) || _class));
      _export("QuatTrackEval", QuatTrackEval = /*#__PURE__*/function () {
        function QuatTrackEval(_curve) {
          this._result = new Quat();
          this._curve = _curve;
        }
        var _proto2 = QuatTrackEval.prototype;
        _proto2.evaluate = function evaluate(time) {
          this._curve.evaluate(time, this._result);
          return this._result;
        };
        _createClass(QuatTrackEval, [{
          key: "requiresDefault",
          get: function get() {
            return false;
          }
        }]);
        return QuatTrackEval;
      }());
    }
  };
});