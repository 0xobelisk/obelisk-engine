System.register("q-bundled:///fs/cocos/animation/marionette/variable/quat-variable.js", ["./basic.js", "../../../core/data/decorators/index.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var VariableType, createInstanceTag, VarInstanceBase, ccclass, serializable, assertIsTrue, Quat, VarInstanceQuat, _dec, _class, _class2, _initializer, QuatVariable;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_basicJs) {
      VariableType = _basicJs.VariableType;
      createInstanceTag = _basicJs.createInstanceTag;
      VarInstanceBase = _basicJs.VarInstanceBase;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      Quat = _coreIndexJs.Quat;
    }],
    execute: function () {
      _export("QuatVariable", QuatVariable = (_dec = ccclass('cc.animation.QuatVariable'), _dec(_class = (_class2 = class QuatVariable {
        constructor() {
          this._value = _initializer && _initializer();
        }
        get type() {
          return VariableType.QUAT_experimental;
        }
        get value() {
          return this._value;
        }
        set value(value) {
          Quat.copy(this._value, value);
        }
        [createInstanceTag]() {
          return new VarInstanceQuat(this._value);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_value", [serializable], function () {
        return new Quat();
      })), _class2)) || _class));
      VarInstanceQuat = class VarInstanceQuat extends VarInstanceBase {
        constructor(value) {
          super(VariableType.QUAT_experimental);
          this._value = new Quat();
          Quat.copy(this._value, value);
        }
        getValue() {
          return this._value;
        }
        setValue(value) {
          assertIsTrue(value instanceof Quat);
          Quat.copy(this._value, value);
        }
      };
    }
  };
});