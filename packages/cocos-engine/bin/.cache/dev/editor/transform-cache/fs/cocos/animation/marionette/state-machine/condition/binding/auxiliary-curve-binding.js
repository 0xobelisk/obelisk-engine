System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/binding/auxiliary-curve-binding.js", ["../../../../../core/index.js", "../../../../define.js", "./binding.js", "./editor.js"], function (_export, _context) {
  "use strict";

  var _decorator, CLASS_NAME_PREFIX_ANIM, TCBinding, TCBindingValueType, provide, TCAuxiliaryCurveBindingEvaluation, _dec, _dec2, _class, _class2, _initializer, ccclass, serializable, TCAuxiliaryCurveBinding;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_bindingJs) {
      TCBinding = _bindingJs.TCBinding;
      TCBindingValueType = _bindingJs.TCBindingValueType;
    }, function (_editorJs) {
      provide = _editorJs.provide;
    }],
    execute: function () {
      ({
        ccclass,
        serializable
      } = _decorator);
      /**
       * @zh 一种过渡条件绑定，该绑定用于获取指定辅助曲线的当前值。该类绑定产生浮点值。
       *
       * @en A kind of transition condition binding,
       * which is used to obtain the current value of specified auxiliary curve.
       * This type of binding yields float value.
       */
      _export("TCAuxiliaryCurveBinding", TCAuxiliaryCurveBinding = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}TCAuxiliaryCurveBinding`), _dec2 = provide(TCBindingValueType.FLOAT), _dec(_class = _dec2(_class = (_class2 = class TCAuxiliaryCurveBinding extends TCBinding {
        constructor(...args) {
          super(...args);
          /**
           * @zh
           * 辅助曲线的名称。
           * @en
           * The auxiliary curve's name.
           */
          this.curveName = _initializer && _initializer();
        }
        getValueType() {
          return TCBindingValueType.FLOAT;
        }
        bind(context) {
          const view = context.getEvaluationTimeAuxiliaryCurveView();
          return new TCAuxiliaryCurveBindingEvaluation(view, this.curveName);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "curveName", [serializable], function () {
        return '';
      })), _class2)) || _class) || _class));
      TCAuxiliaryCurveBindingEvaluation = class TCAuxiliaryCurveBindingEvaluation {
        constructor(_view, _curveName) {
          this._view = _view;
          this._curveName = _curveName;
        }
        evaluate() {
          return this._view.get(this._curveName);
        }
      };
    }
  };
});