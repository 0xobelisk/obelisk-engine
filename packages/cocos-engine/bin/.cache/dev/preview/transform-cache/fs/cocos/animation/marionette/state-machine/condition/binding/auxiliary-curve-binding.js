System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/binding/auxiliary-curve-binding.js", ["../../../../../core/index.js", "../../../../define.js", "./binding.js", "./editor.js"], function (_export, _context) {
  "use strict";

  var _decorator, CLASS_NAME_PREFIX_ANIM, TCBinding, TCBindingValueType, provide, _dec, _dec2, _class, _class2, _initializer, ccclass, serializable, TCAuxiliaryCurveBinding, TCAuxiliaryCurveBindingEvaluation;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      /**
       * @zh 一种过渡条件绑定，该绑定用于获取指定辅助曲线的当前值。该类绑定产生浮点值。
       *
       * @en A kind of transition condition binding,
       * which is used to obtain the current value of specified auxiliary curve.
       * This type of binding yields float value.
       */
      _export("TCAuxiliaryCurveBinding", TCAuxiliaryCurveBinding = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "TCAuxiliaryCurveBinding"), _dec2 = provide(TCBindingValueType.FLOAT), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_TCBinding) {
        _inheritsLoose(TCAuxiliaryCurveBinding, _TCBinding);
        function TCAuxiliaryCurveBinding() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _TCBinding.call.apply(_TCBinding, [this].concat(args)) || this;
          /**
           * @zh
           * 辅助曲线的名称。
           * @en
           * The auxiliary curve's name.
           */
          _this.curveName = _initializer && _initializer();
          return _this;
        }
        var _proto = TCAuxiliaryCurveBinding.prototype;
        _proto.getValueType = function getValueType() {
          return TCBindingValueType.FLOAT;
        };
        _proto.bind = function bind(context) {
          var view = context.getEvaluationTimeAuxiliaryCurveView();
          return new TCAuxiliaryCurveBindingEvaluation(view, this.curveName);
        };
        return TCAuxiliaryCurveBinding;
      }(TCBinding), (_initializer = _applyDecoratedInitializer(_class2.prototype, "curveName", [serializable], function () {
        return '';
      })), _class2)) || _class) || _class));
      TCAuxiliaryCurveBindingEvaluation = /*#__PURE__*/function () {
        function TCAuxiliaryCurveBindingEvaluation(_view, _curveName) {
          this._view = _view;
          this._curveName = _curveName;
        }
        var _proto2 = TCAuxiliaryCurveBindingEvaluation.prototype;
        _proto2.evaluate = function evaluate() {
          return this._view.get(this._curveName);
        };
        return TCAuxiliaryCurveBindingEvaluation;
      }();
    }
  };
});