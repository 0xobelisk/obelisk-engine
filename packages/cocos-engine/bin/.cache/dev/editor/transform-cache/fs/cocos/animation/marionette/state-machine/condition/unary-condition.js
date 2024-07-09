System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/unary-condition.js", ["../../parametric.js", "../../../../core/index.js", "../../../define.js", "../../create-eval.js"], function (_export, _context) {
  "use strict";

  var VariableType, BindableBoolean, bindOr, _decorator, CLASS_NAME_PREFIX_ANIM, createEval, UnaryConditionEval, _dec, _class, _class2, _initializer, _initializer2, _class3, ccclass, serializable, UnaryOperator, UnaryCondition;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_parametricJs) {
      VariableType = _parametricJs.VariableType;
      BindableBoolean = _parametricJs.BindableBoolean;
      bindOr = _parametricJs.bindOr;
    }, function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }],
    execute: function () {
      ({
        ccclass,
        serializable
      } = _decorator);
      (function (UnaryOperator) {
        UnaryOperator[UnaryOperator["TRUTHY"] = 0] = "TRUTHY";
        UnaryOperator[UnaryOperator["FALSY"] = 1] = "FALSY";
      })(UnaryOperator || (UnaryOperator = {}));
      _export("UnaryCondition", UnaryCondition = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}UnaryCondition`), _dec(_class = (_class2 = (_class3 = class UnaryCondition {
        constructor() {
          this.operator = _initializer && _initializer();
          this.operand = _initializer2 && _initializer2();
        }
        clone() {
          const that = new UnaryCondition();
          that.operator = this.operator;
          that.operand = this.operand.clone();
          return that;
        }
        [createEval](context) {
          const {
            operator,
            operand
          } = this;
          const evaluation = new UnaryConditionEval(operator, false);
          const value = bindOr(context, operand, VariableType.BOOLEAN, evaluation.setOperand, evaluation);
          evaluation.reset(value);
          return evaluation;
        }
      }, _class3.Operator = UnaryOperator, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "operator", [serializable], function () {
        return UnaryOperator.TRUTHY;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "operand", [serializable], function () {
        return new BindableBoolean();
      })), _class2)) || _class));
      UnaryConditionEval = class UnaryConditionEval {
        constructor(operator, operand) {
          this._operator = operator;
          this._operand = operand;
          this._eval();
        }
        reset(value) {
          this.setOperand(value);
        }
        setOperand(value) {
          this._operand = value;
          this._eval();
        }

        /**
         * Evaluates this condition.
         */
        eval() {
          return this._result;
        }
        _eval() {
          const {
            _operand: operand
          } = this;
          switch (this._operator) {
            default:
            case UnaryOperator.TRUTHY:
              this._result = !!operand;
              break;
            case UnaryOperator.FALSY:
              this._result = !operand;
              break;
          }
        }
      };
    }
  };
});