System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/intensity-specification.js", ["../../../../core/index.js", "../../../../core/data/decorators/index.js", "../../../define.js"], function (_export, _context) {
  "use strict";

  var ccenum, ccclass, editable, range, serializable, type, visible, CLASS_NAME_PREFIX_ANIM, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, _initializer3, IntensityType, IntensitySpecification;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      (function (IntensityType) {
        IntensityType[IntensityType["VALUE"] = 0] = "VALUE";
        IntensityType[IntensityType["AUXILIARY_CURVE"] = 1] = "AUXILIARY_CURVE";
      })(IntensityType || (IntensityType = {}));
      ccenum(IntensityType);
      _export("IntensitySpecification", IntensitySpecification = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}IntensitySpecification`), _dec2 = type(IntensityType), _dec3 = visible(function visible() {
        return this.type === IntensityType.VALUE;
      }), _dec4 = range([0.0, 1.0, 0.01]), _dec5 = visible(function visible() {
        return this.type === IntensityType.AUXILIARY_CURVE;
      }), _dec(_class = (_class2 = class IntensitySpecification {
        constructor() {
          this.type = _initializer && _initializer();
          this.value = _initializer2 && _initializer2();
          this.auxiliaryCurveName = _initializer3 && _initializer3();
          this._handle = undefined;
        }
        bind(context) {
          if (this.type === IntensityType.AUXILIARY_CURVE && this.auxiliaryCurveName) {
            const handle = context.bindAuxiliaryCurve(this.auxiliaryCurveName);
            this._handle = handle;
          }
        }
        evaluate(pose) {
          if (this.type === IntensityType.AUXILIARY_CURVE && this._handle) {
            const value = pose.auxiliaryCurves[this._handle.index];
            return value;
          }
          return this.value;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "type", [_dec2, serializable, editable], function () {
        return IntensityType.VALUE;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "value", [serializable, editable, _dec3, _dec4], function () {
        return 1.0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "auxiliaryCurveName", [serializable, editable, _dec5], function () {
        return '';
      })), _class2)) || _class));
    }
  };
});