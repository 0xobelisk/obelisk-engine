System.register("q-bundled:///fs/cocos/animation/marionette/motion/motion.js", ["../create-eval.js", "../../../core/index.js", "../../../core/data/decorators/index.js", "../../define.js"], function (_export, _context) {
  "use strict";

  var createEval, EditorExtendable, ccclass, CLASS_NAME_PREFIX_ANIM, _dec, _class, Motion;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_coreIndexJs) {
      EditorExtendable = _coreIndexJs.EditorExtendable;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      // Note: the ccclass name mismatch
      // since we ever made a historical mistaken: take a look at `MotionState`'s class name...
      _export("Motion", Motion = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "MotionBase"), _dec(_class = /*#__PURE__*/function (_EditorExtendable) {
        _inheritsLoose(Motion, _EditorExtendable);
        function Motion() {
          return _EditorExtendable.apply(this, arguments) || this;
        }
        var _proto = Motion.prototype;
        /**
         * // TODO: HACK
         * @internal
         */
        _proto.__callOnAfterDeserializeRecursive = function __callOnAfterDeserializeRecursive() {
          // Can be overrode in subclasses.
        };
        return Motion;
      }(EditorExtendable)) || _class));
    }
  };
});