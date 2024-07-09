System.register("q-bundled:///fs/cocos/animation/marionette/variable/primitive-variable.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../core/data/decorators/index.js", "./basic.js"], function (_export, _context) {
  "use strict";

  var DEBUG, assertIsTrue, ccclass, serializable, VariableType, createInstanceTag, VarInstanceBase, VarInstancePrimitive, _dec, _class, _class2, _initializer, _initializer2, PlainVariable;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("VarInstancePrimitive", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_basicJs) {
      VariableType = _basicJs.VariableType;
      createInstanceTag = _basicJs.createInstanceTag;
      VarInstanceBase = _basicJs.VarInstanceBase;
    }],
    execute: function () {
      _export("PlainVariable", PlainVariable = (_dec = ccclass('cc.animation.PlainVariable'), _dec(_class = (_class2 = class PlainVariable {
        constructor(type) {
          // TODO: we should not specify type here but due to de-serialization limitation
          // See: https://github.com/cocos-creator/3d-tasks/issues/7909
          this._type = _initializer && _initializer();
          // Same as `_type`
          this._value = _initializer2 && _initializer2();
          if (typeof type === 'undefined') {
            return;
          }
          this._type = type;
          switch (type) {
            default:
              break;
            case VariableType.FLOAT:
              this._value = 0.0;
              break;
            case VariableType.INTEGER:
              this._value = 0;
              break;
            case VariableType.BOOLEAN:
              this._value = false;
              break;
          }
        }
        get type() {
          return this._type;
        }
        get value() {
          return this._value;
        }
        set value(value) {
          if (DEBUG) {
            switch (this._type) {
              default:
                break;
              case VariableType.FLOAT:
                assertIsTrue(typeof value === 'number');
                break;
              case VariableType.INTEGER:
                assertIsTrue(Number.isInteger(value));
                break;
              case VariableType.BOOLEAN:
                assertIsTrue(typeof value === 'boolean');
                break;
            }
          }
          this._value = value;
        }
        [createInstanceTag]() {
          return new VarInstancePrimitive(this._type, this._value);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_type", [serializable], function () {
        return VariableType.FLOAT;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_value", [serializable], function () {
        return 0.0;
      })), _class2)) || _class));
      _export("VarInstancePrimitive", VarInstancePrimitive = class VarInstancePrimitive extends VarInstanceBase {
        constructor(type, value) {
          super(type);
          this._value = void 0;
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