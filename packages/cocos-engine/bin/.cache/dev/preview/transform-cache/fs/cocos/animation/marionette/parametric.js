System.register("q-bundled:///fs/cocos/animation/marionette/parametric.js", ["../../core/index.js", "../define.js", "./errors.js", "./variable/index.js"], function (_export, _context) {
  "use strict";

  var _decorator, CLASS_NAME_PREFIX_ANIM, VariableNotDefinedError, VariableTypeMismatchedError, VariableType, _dec, _class, _class2, _initializer, _initializer2, _dec2, _class4, _class5, _initializer3, _initializer4, ccclass, serializable, BindableNumber, BindableBoolean;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function bindOr(context, bindable, type, callback, thisArg) {
    var variable = bindable.variable,
      value = bindable.value;
    if (!variable) {
      return value;
    }
    var varInstance = context.getVar(variable);
    if (!validateVariableExistence(varInstance, variable)) {
      return value;
    }
    if (varInstance.type !== type) {
      throw new VariableTypeMismatchedError(variable, 'number');
    }
    for (var _len = arguments.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }
    var initialValue = varInstance.bind.apply(varInstance, [callback, thisArg].concat(args));
    return initialValue;
  }
  function bindNumericOr(context, bindable, type, callback, thisArg) {
    var variable = bindable.variable,
      value = bindable.value;
    if (!variable) {
      return value;
    }
    var varInstance = context.getVar(variable);
    if (!validateVariableExistence(varInstance, variable)) {
      return value;
    }
    if (type !== VariableType.FLOAT && type !== VariableType.INTEGER) {
      throw new VariableTypeMismatchedError(variable, 'number or integer');
    }
    for (var _len2 = arguments.length, args = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      args[_key2 - 5] = arguments[_key2];
    }
    var initialValue = varInstance.bind.apply(varInstance, [callback, thisArg].concat(args));
    return initialValue;
  }
  function validateVariableExistence(varInstance, name) {
    if (!varInstance) {
      // TODO, warn only?
      throw new VariableNotDefinedError(name);
    } else {
      return true;
    }
  }
  function validateVariableType(type, expected, name) {
    if (type !== expected) {
      throw new VariableTypeMismatchedError(name, 'number');
    }
  }
  function validateVariableTypeNumeric(type, name) {
    if (type !== VariableType.FLOAT && type !== VariableType.INTEGER) {
      throw new VariableTypeMismatchedError(name, 'number or integer');
    }
  }
  function validateVariableTypeTriggerLike(type, name) {
    if (type !== VariableType.TRIGGER) {
      throw new VariableTypeMismatchedError(name, 'trigger');
    }
  }
  _export({
    bindOr: bindOr,
    bindNumericOr: bindNumericOr,
    validateVariableExistence: validateVariableExistence,
    validateVariableType: validateVariableType,
    validateVariableTypeNumeric: validateVariableTypeNumeric,
    validateVariableTypeTriggerLike: validateVariableTypeTriggerLike
  });
  return {
    setters: [function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_errorsJs) {
      VariableNotDefinedError = _errorsJs.VariableNotDefinedError;
      VariableTypeMismatchedError = _errorsJs.VariableTypeMismatchedError;
    }, function (_variableIndexJs) {
      VariableType = _variableIndexJs.VariableType;
    }],
    execute: function () {
      _export("VariableType", VariableType);
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      _export("BindableNumber", BindableNumber = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "BindableNumber"), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function BindableNumber(value) {
          if (value === void 0) {
            value = 0.0;
          }
          this.variable = _initializer && _initializer();
          this.value = _initializer2 && _initializer2();
          this.value = value;
        }
        var _proto = BindableNumber.prototype;
        _proto.clone = function clone() {
          var that = new BindableNumber();
          that.value = this.value;
          that.variable = this.variable;
          return that;
        };
        return BindableNumber;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "variable", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "value", [serializable], function () {
        return 0.0;
      })), _class2)) || _class));
      _export("BindableBoolean", BindableBoolean = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "BindableBoolean"), _dec2(_class4 = (_class5 = /*#__PURE__*/function () {
        function BindableBoolean(value) {
          if (value === void 0) {
            value = false;
          }
          this.variable = _initializer3 && _initializer3();
          this.value = _initializer4 && _initializer4();
          this.value = value;
        }
        var _proto2 = BindableBoolean.prototype;
        _proto2.clone = function clone() {
          var that = new BindableBoolean();
          that.value = this.value;
          that.variable = this.variable;
          return that;
        };
        return BindableBoolean;
      }(), (_initializer3 = _applyDecoratedInitializer(_class5.prototype, "variable", [serializable], function () {
        return '';
      }), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "value", [serializable], function () {
        return false;
      })), _class5)) || _class4));
    }
  };
});