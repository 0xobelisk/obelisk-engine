System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/trigger-condition.js", ["../../parametric.js", "../../../../core/index.js", "../../../define.js", "../../create-eval.js"], function (_export, _context) {
  "use strict";

  var validateVariableExistence, validateVariableTypeTriggerLike, _decorator, CLASS_NAME_PREFIX_ANIM, createEval, TriggerConditionEval, _dec, _class, _class2, _initializer, ccclass, serializable, TriggerCondition;
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
      ({
        ccclass,
        serializable
      } = _decorator);
      _export("TriggerCondition", TriggerCondition = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}TriggerCondition`), _dec(_class = (_class2 = class TriggerCondition {
        constructor() {
          this.trigger = _initializer && _initializer();
        }
        clone() {
          const that = new TriggerCondition();
          that.trigger = this.trigger;
          return that;
        }
        [createEval](context) {
          const evaluation = new TriggerConditionEval(false);
          const triggerInstance = context.getVar(this.trigger);
          if (validateVariableExistence(triggerInstance, this.trigger)) {
            validateVariableTypeTriggerLike(triggerInstance.type, this.trigger);
            evaluation.setTrigger(triggerInstance.bind(evaluation.setTrigger, evaluation));
          }
          return evaluation;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "trigger", [serializable], function () {
        return '';
      })), _class2)) || _class));
      TriggerConditionEval = class TriggerConditionEval {
        constructor(triggered) {
          this._triggered = false;
          this._triggered = triggered;
        }
        setTrigger(trigger) {
          this._triggered = trigger;
        }
        eval() {
          return this._triggered;
        }
      };
    }
  };
});