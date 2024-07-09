System.register("q-bundled:///fs/cocos/animation/auxiliary-curve-entry.js", ["../core/index.js", "../core/data/decorators/index.js", "./define.js"], function (_export, _context) {
  "use strict";

  var RealCurve, ccclass, serializable, CLASS_NAME_PREFIX_ANIM, _dec, _class, _class2, _initializer, _initializer2, AuxiliaryCurveEntry;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      RealCurve = _coreIndexJs.RealCurve;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      _export("AuxiliaryCurveEntry", AuxiliaryCurveEntry = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "AuxiliaryCurveEntry"), _dec(_class = (_class2 = function AuxiliaryCurveEntry() {
        this.name = _initializer && _initializer();
        this.curve = _initializer2 && _initializer2();
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "name", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "curve", [serializable], function () {
        return new RealCurve();
      })), _class2)) || _class));
    }
  };
});