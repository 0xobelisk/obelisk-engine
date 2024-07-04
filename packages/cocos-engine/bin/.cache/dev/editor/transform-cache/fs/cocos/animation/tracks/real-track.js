System.register("q-bundled:///fs/cocos/animation/tracks/real-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js"], function (_export, _context) {
  "use strict";

  var ccclass, RealCurve, CLASS_NAME_PREFIX_ANIM, SingleChannelTrack, _dec, _class, RealTrack;
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
      _export("RealTrack", RealTrack = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}RealTrack`), _dec(_class = class RealTrack extends SingleChannelTrack {
        /**
         * @internal
         */
        createCurve() {
          return new RealCurve();
        }
      }) || _class));
    }
  };
});