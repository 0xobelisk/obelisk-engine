System.register("q-bundled:///fs/cocos/animation/tracks/object-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js"], function (_export, _context) {
  "use strict";

  var ccclass, ObjectCurve, CLASS_NAME_PREFIX_ANIM, SingleChannelTrack, _dec, _class, ObjectTrack;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("ObjectTrack", ObjectTrack = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "ObjectTrack"), _dec(_class = /*#__PURE__*/function (_SingleChannelTrack) {
        _inheritsLoose(ObjectTrack, _SingleChannelTrack);
        function ObjectTrack() {
          return _SingleChannelTrack.apply(this, arguments) || this;
        }
        var _proto = ObjectTrack.prototype;
        /**
         * @internal
         */
        _proto.createCurve = function createCurve() {
          return new ObjectCurve();
        };
        return ObjectTrack;
      }(SingleChannelTrack)) || _class));
    }
  };
});