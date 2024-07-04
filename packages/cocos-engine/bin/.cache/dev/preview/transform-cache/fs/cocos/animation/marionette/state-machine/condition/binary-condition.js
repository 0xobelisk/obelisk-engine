System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/binary-condition.js", ["../../../../core/index.js", "../../../define.js", "../../create-eval.js", "../../../../serialization/index.js", "./binding/variable-binding.js", "./binding/runtime.js"], function (_export, _context) {
  "use strict";

  var _decorator, CLASS_NAME_PREFIX_ANIM, createEval, instantiate, TCVariableBinding, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, ccclass, serializable, BinaryOperator, BinaryCondition, BinaryConditionEval;
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
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_serializationIndexJs) {
      instantiate = _serializationIndexJs.instantiate;
    }, function (_bindingVariableBindingJs) {
      TCVariableBinding = _bindingVariableBindingJs.TCVariableBinding;
    }, function (_bindingRuntimeJs) {}],
    execute: function () {
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      /**
       * @zh 二元条件操作符。
       * @en Operator used in binary condition.
       */
      (function (BinaryOperator) {
        BinaryOperator[BinaryOperator["EQUAL_TO"] = 0] = "EQUAL_TO";
        BinaryOperator[BinaryOperator["NOT_EQUAL_TO"] = 1] = "NOT_EQUAL_TO";
        BinaryOperator[BinaryOperator["LESS_THAN"] = 2] = "LESS_THAN";
        BinaryOperator[BinaryOperator["LESS_THAN_OR_EQUAL_TO"] = 3] = "LESS_THAN_OR_EQUAL_TO";
        BinaryOperator[BinaryOperator["GREATER_THAN"] = 4] = "GREATER_THAN";
        BinaryOperator[BinaryOperator["GREATER_THAN_OR_EQUAL_TO"] = 5] = "GREATER_THAN_OR_EQUAL_TO";
      })(BinaryOperator || (BinaryOperator = {}));
      /**
       * @zh 描述一个二元条件，它有两个数值类型的操作数。
       * @en Describes a binary condition, there are two operands with numeric type.
       */
      _export("BinaryCondition", BinaryCondition = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "BinaryCondition"), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function () {
        function BinaryCondition() {
          /**
           * @zh
           * 运算符。
           * @en
           * Operator.
           */
          this.operator = _initializer && _initializer();
          /**
           * @zh
           * 左操作数的值。
           * @en
           * Left operand value.
           */
          this.lhs = _initializer2 && _initializer2();
          /**
           * @zh
           * 左操作数上的绑定。
           * @en
           * Left operand binding.
           */
          this.lhsBinding = _initializer3 && _initializer3();
          /**
           * @zh
           * 右操作数的值。
           * @en
           * Right operand value.
           */
          this.rhs = _initializer4 && _initializer4();
        }
        var _proto = BinaryCondition.prototype;
        _proto.clone = function clone() {
          var that = new BinaryCondition();
          that.operator = this.operator;
          that.lhs = this.lhs;
          that.lhsBinding = instantiate(this.lhsBinding);
          that.rhs = this.rhs;
          return that;
        };
        _proto[createEval] = function (context) {
          var _this$lhsBinding;
          var lhsBindingEvaluation = (_this$lhsBinding = this.lhsBinding) === null || _this$lhsBinding === void 0 ? void 0 : _this$lhsBinding.bind(context);
          var binaryConditionEval = new BinaryConditionEval(this.operator, this.lhs, this.rhs, lhsBindingEvaluation);
          return binaryConditionEval;
        };
        return BinaryCondition;
      }(), _class3.Operator = BinaryOperator, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "operator", [serializable], function () {
        return BinaryOperator.EQUAL_TO;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "lhs", [serializable], function () {
        return 0.0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "lhsBinding", [serializable], function () {
        return new TCVariableBinding();
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "rhs", [serializable], function () {
        return 0.0;
      })), _class2)) || _class));
      BinaryConditionEval = /*#__PURE__*/function () {
        function BinaryConditionEval(_operator, lhsValue, rhsValue, _lhsBindingEvaluation) {
          this._operator = _operator;
          this._lhsBindingEvaluation = _lhsBindingEvaluation;
          this._lhsValue = lhsValue;
          this._rhsValue = rhsValue;
        }

        /**
         * Evaluates this condition.
         */
        var _proto2 = BinaryConditionEval.prototype;
        _proto2.eval = function _eval(context) {
          var _this$_lhsBindingEval, _this$_lhsBindingEval2;
          var lhsValue = (_this$_lhsBindingEval = (_this$_lhsBindingEval2 = this._lhsBindingEvaluation) === null || _this$_lhsBindingEval2 === void 0 ? void 0 : _this$_lhsBindingEval2.evaluate(context)) !== null && _this$_lhsBindingEval !== void 0 ? _this$_lhsBindingEval : this._lhsValue;
          var rhsValue = this._rhsValue;
          switch (this._operator) {
            default:
            case BinaryOperator.EQUAL_TO:
              return lhsValue === rhsValue;
            case BinaryOperator.NOT_EQUAL_TO:
              return lhsValue !== rhsValue;
            case BinaryOperator.LESS_THAN:
              return lhsValue < rhsValue;
            case BinaryOperator.LESS_THAN_OR_EQUAL_TO:
              return lhsValue <= rhsValue;
            case BinaryOperator.GREATER_THAN:
              return lhsValue > rhsValue;
            case BinaryOperator.GREATER_THAN_OR_EQUAL_TO:
              return lhsValue >= rhsValue;
          }
        };
        return BinaryConditionEval;
      }();
    }
  };
});