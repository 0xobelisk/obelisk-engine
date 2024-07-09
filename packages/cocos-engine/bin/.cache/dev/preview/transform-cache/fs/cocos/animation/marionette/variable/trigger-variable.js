System.register("q-bundled:///fs/cocos/animation/marionette/variable/trigger-variable.js", ["../../../core/index.js", "../../../core/data/decorators/index.js", "./basic.js"], function (_export, _context) {
  "use strict";

  var assertIsTrue, ccclass, serializable, createInstanceTag, VariableType, VarInstanceBase, _dec, _class, _class2, _initializer, TriggerResetMode, TRIGGER_VARIABLE_FLAG_VALUE_START, TRIGGER_VARIABLE_FLAG_VALUE_MASK, TRIGGER_VARIABLE_FLAG_RESET_MODE_START, TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK, TRIGGER_VARIABLE_DEFAULT_FLAGS, TriggerVariable, VarInstanceTrigger;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("TriggerResetMode", void 0);
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
      _export("TriggerVariable", TriggerVariable = (_dec = ccclass('cc.animation.TriggerVariable'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TriggerVariable() {
          // l -> h
          // value(1 bits) | reset_mode(2 bits)
          this._flags = _initializer && _initializer();
        }
        var _proto = TriggerVariable.prototype;
        _proto[createInstanceTag] = function () {
          return new VarInstanceTrigger(this.value, this.resetMode);
        };
        _createClass(TriggerVariable, [{
          key: "type",
          get: function get() {
            return VariableType.TRIGGER;
          }
        }, {
          key: "value",
          get: function get() {
            return !!((this._flags & TRIGGER_VARIABLE_FLAG_VALUE_MASK) >> TRIGGER_VARIABLE_FLAG_VALUE_START);
          },
          set: function set(value) {
            if (value) {
              this._flags |= 1 << TRIGGER_VARIABLE_FLAG_VALUE_START;
            } else {
              this._flags &= ~(1 << TRIGGER_VARIABLE_FLAG_VALUE_START);
            }
          }
        }, {
          key: "resetMode",
          get: function get() {
            return (this._flags & TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK) >> TRIGGER_VARIABLE_FLAG_RESET_MODE_START;
          },
          set: function set(value) {
            // Clear
            this._flags &= ~TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK;
            // Set
            this._flags |= value << TRIGGER_VARIABLE_FLAG_RESET_MODE_START;
          }
        }]);
        return TriggerVariable;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_flags", [serializable], function () {
        return TRIGGER_VARIABLE_DEFAULT_FLAGS;
      })), _class2)) || _class));
      _export("VarInstanceTrigger", VarInstanceTrigger = /*#__PURE__*/function (_VarInstanceBase) {
        _inheritsLoose(VarInstanceTrigger, _VarInstanceBase);
        function VarInstanceTrigger(value, resetMode) {
          var _this;
          _this = _VarInstanceBase.call(this, VariableType.TRIGGER) || this;
          _this.resetMode = TriggerResetMode.AFTER_CONSUMED;
          _this._value = void 0;
          _this.resetMode = resetMode;
          _this._value = value;
          return _this;
        }
        var _proto2 = VarInstanceTrigger.prototype;
        _proto2.getValue = function getValue() {
          return this._value;
        };
        _proto2.setValue = function setValue(value) {
          this._value = value;
        };
        return VarInstanceTrigger;
      }(VarInstanceBase));
    }
  };
});