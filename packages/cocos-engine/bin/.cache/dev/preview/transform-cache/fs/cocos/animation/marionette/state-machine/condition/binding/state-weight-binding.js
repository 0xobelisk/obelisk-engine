System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/binding/state-weight-binding.js", ["../../../../../core/index.js", "../../../../define.js", "./binding.js", "./editor.js"], function (_export, _context2) {
  "use strict";

  var _decorator, CLASS_NAME_PREFIX_ANIM, TCBinding, TCBindingValueType, provide, support, TCBindingTransitionSourceFilter, _dec, _dec2, _dec3, _class, ccclass, TCStateWeightBinding, TCStateWeightBindingEvaluation;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      support = _editorJs.support;
      TCBindingTransitionSourceFilter = _editorJs.TCBindingTransitionSourceFilter;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      /**
       * @zh 一种过渡条件绑定，该绑定用于获取过渡的源头状态当前的权重值。该类绑定产生浮点值。
       *
       * @en A kind of transition condition binding,
       * which is used to obtain the current weight value of transition source state.
       * This type of binding yields float value.
       */
      _export("TCStateWeightBinding", TCStateWeightBinding = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "TCStateWeightBinding"), _dec2 = provide(TCBindingValueType.FLOAT), _dec3 = support(TCBindingTransitionSourceFilter.WEIGHTED), _dec(_class = _dec2(_class = _dec3(_class = /*#__PURE__*/function (_TCBinding) {
        _inheritsLoose(TCStateWeightBinding, _TCBinding);
        function TCStateWeightBinding() {
          return _TCBinding.apply(this, arguments) || this;
        }
        var _proto = TCStateWeightBinding.prototype;
        _proto.getValueType = function getValueType() {
          return TCBindingValueType.FLOAT;
        };
        _proto.bind = function bind(_context) {
          return new TCStateWeightBindingEvaluation();
        };
        return TCStateWeightBinding;
      }(TCBinding)) || _class) || _class) || _class));
      TCStateWeightBindingEvaluation = /*#__PURE__*/function () {
        function TCStateWeightBindingEvaluation() {}
        var _proto2 = TCStateWeightBindingEvaluation.prototype;
        _proto2.evaluate = function evaluate(context) {
          return context.sourceStateWeight;
        };
        return TCStateWeightBindingEvaluation;
      }();
    }
  };
});