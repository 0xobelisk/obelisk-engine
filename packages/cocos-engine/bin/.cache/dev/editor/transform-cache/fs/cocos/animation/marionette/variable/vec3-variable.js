System.register("q-bundled:///fs/cocos/animation/marionette/variable/vec3-variable.js", ["../../../core/index.js", "../../../core/data/decorators/index.js", "./basic.js"], function (_export, _context) {
  "use strict";

  var assertIsTrue, Vec3, ccclass, serializable, VariableType, createInstanceTag, VarInstanceBase, VarInstanceVec3, _dec, _class, _class2, _initializer, Vec3Variable;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_basicJs) {
      VariableType = _basicJs.VariableType;
      createInstanceTag = _basicJs.createInstanceTag;
      VarInstanceBase = _basicJs.VarInstanceBase;
    }],
    execute: function () {
      _export("Vec3Variable", Vec3Variable = (_dec = ccclass('cc.animation.Vec3Variable'), _dec(_class = (_class2 = class Vec3Variable {
        constructor() {
          this._value = _initializer && _initializer();
        }
        get type() {
          return VariableType.VEC3_experimental;
        }
        get value() {
          return this._value;
        }
        set value(value) {
          Vec3.copy(this._value, value);
        }
        [createInstanceTag]() {
          return new VarInstanceVec3(this.value);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_value", [serializable], function () {
        return new Vec3();
      })), _class2)) || _class));
      VarInstanceVec3 = class VarInstanceVec3 extends VarInstanceBase {
        constructor(value) {
          super(VariableType.VEC3_experimental);
          this._value = new Vec3();
          Vec3.copy(this._value, value);
        }
        getValue() {
          return this._value;
        }
        setValue(value) {
          assertIsTrue(value instanceof Vec3);
          Vec3.copy(this._value, value);
        }
      };
    }
  };
});