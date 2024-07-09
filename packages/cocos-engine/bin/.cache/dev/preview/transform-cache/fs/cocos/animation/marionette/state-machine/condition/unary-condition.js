System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/unary-condition.js", ["../../parametric.js", "../../../../core/index.js", "../../../define.js", "../../create-eval.js"], function (_export, _context) {
  "use strict";

  var VariableType, BindableBoolean, bindOr, _decorator, CLASS_NAME_PREFIX_ANIM, createEval, _dec, _class, _class2, _initializer, _initializer2, _class3, ccclass, serializable, UnaryOperator, UnaryCondition, UnaryConditionEval;
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
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      (function (UnaryOperator) {
        UnaryOperator[UnaryOperator["TRUTHY"] = 0] = "TRUTHY";
        UnaryOperator[UnaryOperator["FALSY"] = 1] = "FALSY";
      })(UnaryOperator || (UnaryOperator = {}));
      _export("UnaryCondition", UnaryCondition = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "UnaryCondition"), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function () {
        function UnaryCondition() {
          this.operator = _initializer && _initializer();
          this.operand = _initializer2 && _initializer2();
        }
        var _proto = UnaryCondition.prototype;
        _proto.clone = function clone() {
          var that = new UnaryCondition();
          that.operator = this.operator;
          that.operand = this.operand.clone();
          return that;
        };
        _proto[createEval] = function (context) {
          var operator = this.operator,
            operand = this.operand;
          var evaluation = new UnaryConditionEval(operator, false);
          var value = bindOr(context, operand, VariableType.BOOLEAN, evaluation.setOperand, evaluation);
          evaluation.reset(value);
          return evaluation;
        };
        return UnaryCondition;
      }(), _class3.Operator = UnaryOperator, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "operator", [serializable], function () {
        return UnaryOperator.TRUTHY;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "operand", [serializable], function () {
        return new BindableBoolean();
      })), _class2)) || _class));
      UnaryConditionEval = /*#__PURE__*/function () {
        function UnaryConditionEval(operator, operand) {
          this._operator = operator;
          this._operand = operand;
          this._eval();
        }
        var _proto2 = UnaryConditionEval.prototype;
        _proto2.reset = function reset(value) {
          this.setOperand(value);
        };
        _proto2.setOperand = function setOperand(value) {
          this._operand = value;
          this._eval();
        }

        /**
         * Evaluates this condition.
         */;
        _proto2.eval = function _eval() {
          return this._result;
        };
        _proto2._eval = function _eval() {
          var operand = this._operand;
          switch (this._operator) {
            default:
            case UnaryOperator.TRUTHY:
              this._result = !!operand;
              break;
            case UnaryOperator.FALSY:
              this._result = !operand;
              break;
          }
        };
        return UnaryConditionEval;
      }();
    }
  };
});