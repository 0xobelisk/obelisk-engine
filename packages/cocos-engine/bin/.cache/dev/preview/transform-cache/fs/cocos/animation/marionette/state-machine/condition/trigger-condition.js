System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/trigger-condition.js", ["../../parametric.js", "../../../../core/index.js", "../../../define.js", "../../create-eval.js"], function (_export, _context) {
  "use strict";

  var validateVariableExistence, validateVariableTypeTriggerLike, _decorator, CLASS_NAME_PREFIX_ANIM, createEval, _dec, _class, _class2, _initializer, ccclass, serializable, TriggerCondition, TriggerConditionEval;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_parametricJs) {
      validateVariableExistence = _parametricJs.validateVariableExistence;
      validateVariableTypeTriggerLike = _parametricJs.validateVariableTypeTriggerLike;
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
      _export("TriggerCondition", TriggerCondition = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "TriggerCondition"), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TriggerCondition() {
          this.trigger = _initializer && _initializer();
        }
        var _proto = TriggerCondition.prototype;
        _proto.clone = function clone() {
          var that = new TriggerCondition();
          that.trigger = this.trigger;
          return that;
        };
        _proto[createEval] = function (context) {
          var evaluation = new TriggerConditionEval(false);
          var triggerInstance = context.getVar(this.trigger);
          if (validateVariableExistence(triggerInstance, this.trigger)) {
            validateVariableTypeTriggerLike(triggerInstance.type, this.trigger);
            evaluation.setTrigger(triggerInstance.bind(evaluation.setTrigger, evaluation));
          }
          return evaluation;
        };
        return TriggerCondition;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "trigger", [serializable], function () {
        return '';
      })), _class2)) || _class));
      TriggerConditionEval = /*#__PURE__*/function () {
        function TriggerConditionEval(triggered) {
          this._triggered = false;
          this._triggered = triggered;
        }
        var _proto2 = TriggerConditionEval.prototype;
        _proto2.setTrigger = function setTrigger(trigger) {
          this._triggered = trigger;
        };
        _proto2.eval = function _eval() {
          return this._triggered;
        };
        return TriggerConditionEval;
      }();
    }
  };
});