System.register("q-bundled:///fs/cocos/animation/tracks/object-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js"], function (_export, _context) {
  "use strict";

  var ccclass, ObjectCurve, CLASS_NAME_PREFIX_ANIM, SingleChannelTrack, _dec, _class, ObjectTrack;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_coreIndexJs) {
      ObjectCurve = _coreIndexJs.ObjectCurve;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_trackJs) {
      SingleChannelTrack = _trackJs.SingleChannelTrack;
    }],
    execute: function () {
      /**
       * @en
       * An object track animates an object of attribute of target.
       * @zh
       * 对象轨道描述目标上某个对象类型的属性的动画。
       */
      _export("ObjectTrack", ObjectTrack = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}ObjectTrack`), _dec(_class = class ObjectTrack extends SingleChannelTrack {
        /**
         * @internal
         */
        createCurve() {
          return new ObjectCurve();
        }
      }) || _class));
    }
  };
});