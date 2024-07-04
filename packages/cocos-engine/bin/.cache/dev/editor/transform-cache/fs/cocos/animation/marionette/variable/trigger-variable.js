System.register("q-bundled:///fs/cocos/animation/marionette/variable/trigger-variable.js", ["../../../core/index.js", "../../../core/data/decorators/index.js", "./basic.js"], function (_export, _context) {
  "use strict";

  var assertIsTrue, ccclass, serializable, createInstanceTag, VariableType, VarInstanceBase, VarInstanceTrigger, _dec, _class, _class2, _initializer, TriggerResetMode, TRIGGER_VARIABLE_FLAG_VALUE_START, TRIGGER_VARIABLE_FLAG_VALUE_MASK, TRIGGER_VARIABLE_FLAG_RESET_MODE_START, TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK, TRIGGER_VARIABLE_DEFAULT_FLAGS, TriggerVariable;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export({
    VarInstanceTrigger: void 0,
    TriggerResetMode: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_basicJs) {
      createInstanceTag = _basicJs.createInstanceTag;
      VariableType = _basicJs.VariableType;
      VarInstanceBase = _basicJs.VarInstanceBase;
    }],
    execute: function () {
      (function (TriggerResetMode) {
        TriggerResetMode[TriggerResetMode["AFTER_CONSUMED"] = 0] = "AFTER_CONSUMED";
        TriggerResetMode[TriggerResetMode["NEXT_FRAME_OR_AFTER_CONSUMED"] = 1] = "NEXT_FRAME_OR_AFTER_CONSUMED";
      })(TriggerResetMode || _export("TriggerResetMode", TriggerResetMode = {}));
      TRIGGER_VARIABLE_FLAG_VALUE_START = 0;
      TRIGGER_VARIABLE_FLAG_VALUE_MASK = 1;
      TRIGGER_VARIABLE_FLAG_RESET_MODE_START = 1;
      TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK = 6; // 0b110
      // DO NOT CHANGE TO THIS VALUE. This is related to V3.5 migration.
      TRIGGER_VARIABLE_DEFAULT_FLAGS = 0; // Let's ensure `0`'s meaning: `value: false, resetMode: TriggerSwitchMode: TriggerResetMode.AFTER_CONSUMED`
      assertIsTrue((0 << TRIGGER_VARIABLE_FLAG_VALUE_START | TriggerResetMode.AFTER_CONSUMED << TRIGGER_VARIABLE_FLAG_RESET_MODE_START) === TRIGGER_VARIABLE_DEFAULT_FLAGS);
      _export("TriggerVariable", TriggerVariable = (_dec = ccclass('cc.animation.TriggerVariable'), _dec(_class = (_class2 = class TriggerVariable {
        constructor() {
          // l -> h
          // value(1 bits) | reset_mode(2 bits)
          this._flags = _initializer && _initializer();
        }
        get type() {
          return VariableType.TRIGGER;
        }
        get value() {
          return !!((this._flags & TRIGGER_VARIABLE_FLAG_VALUE_MASK) >> TRIGGER_VARIABLE_FLAG_VALUE_START);
        }
        set value(value) {
          if (value) {
            this._flags |= 1 << TRIGGER_VARIABLE_FLAG_VALUE_START;
          } else {
            this._flags &= ~(1 << TRIGGER_VARIABLE_FLAG_VALUE_START);
          }
        }
        get resetMode() {
          return (this._flags & TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK) >> TRIGGER_VARIABLE_FLAG_RESET_MODE_START;
        }
        set resetMode(value) {
          // Clear
          this._flags &= ~TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK;
          // Set
          this._flags |= value << TRIGGER_VARIABLE_FLAG_RESET_MODE_START;
        }
        [createInstanceTag]() {
          return new VarInstanceTrigger(this.value, this.resetMode);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_flags", [serializable], function () {
        return TRIGGER_VARIABLE_DEFAULT_FLAGS;
      })), _class2)) || _class));
      _export("VarInstanceTrigger", VarInstanceTrigger = class VarInstanceTrigger extends VarInstanceBase {
        constructor(value, resetMode) {
          super(VariableType.TRIGGER);
          this.resetMode = TriggerResetMode.AFTER_CONSUMED;
          this._value = void 0;
          this.resetMode = resetMode;
          this._value = value;
        }
        getValue() {
          return this._value;
        }
        setValue(value) {
          this._value = value;
        }
      });
    }
  };
});