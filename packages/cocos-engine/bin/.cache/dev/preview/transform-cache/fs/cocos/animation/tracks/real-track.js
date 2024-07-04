System.register("q-bundled:///fs/cocos/animation/tracks/real-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js"], function (_export, _context) {
  "use strict";

  var ccclass, RealCurve, CLASS_NAME_PREFIX_ANIM, SingleChannelTrack, _dec, _class, RealTrack;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_coreIndexJs) {
      RealCurve = _coreIndexJs.RealCurve;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_trackJs) {
      SingleChannelTrack = _trackJs.SingleChannelTrack;
    }],
    execute: function () {
      /**
       * @en
       * A real track animates a scalar attribute of target.
       * @zh
       * 实数轨道描述目标上某个标量属性的动画。
       */
      _export("RealTrack", RealTrack = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "RealTrack"), _dec(_class = /*#__PURE__*/function (_SingleChannelTrack) {
        _inheritsLoose(RealTrack, _SingleChannelTrack);
        function RealTrack() {
          return _SingleChannelTrack.apply(this, arguments) || this;
        }
        var _proto = RealTrack.prototype;
        /**
         * @internal
         */
        _proto.createCurve = function createCurve() {
          return new RealCurve();
        };
        return RealTrack;
      }(SingleChannelTrack)) || _class));
    }
  };
});