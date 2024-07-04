System.register("q-bundled:///fs/cocos/animation/marionette/variable/vec3-variable.js", ["../../../core/index.js", "../../../core/data/decorators/index.js", "./basic.js"], function (_export, _context) {
  "use strict";

  var assertIsTrue, Vec3, ccclass, serializable, VariableType, createInstanceTag, VarInstanceBase, _dec, _class, _class2, _initializer, Vec3Variable, VarInstanceVec3;
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
      _export("Vec3Variable", Vec3Variable = (_dec = ccclass('cc.animation.Vec3Variable'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function Vec3Variable() {
          this._value = _initializer && _initializer();
        }
        var _proto = Vec3Variable.prototype;
        _proto[createInstanceTag] = function () {
          return new VarInstanceVec3(this.value);
        };
        _createClass(Vec3Variable, [{
          key: "type",
          get: function get() {
            return VariableType.VEC3_experimental;
          }
        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            Vec3.copy(this._value, value);
          }
        }]);
        return Vec3Variable;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_value", [serializable], function () {
        return new Vec3();
      })), _class2)) || _class));
      VarInstanceVec3 = /*#__PURE__*/function (_VarInstanceBase) {
        _inheritsLoose(VarInstanceVec3, _VarInstanceBase);
        function VarInstanceVec3(value) {
          var _this;
          _this = _VarInstanceBase.call(this, VariableType.VEC3_experimental) || this;
          _this._value = new Vec3();
          Vec3.copy(_this._value, value);
          return _this;
        }
        var _proto2 = VarInstanceVec3.prototype;
        _proto2.getValue = function getValue() {
          return this._value;
        };
        _proto2.setValue = function setValue(value) {
          assertIsTrue(value instanceof Vec3);
          Vec3.copy(this._value, value);
        };
        return VarInstanceVec3;
      }(VarInstanceBase);
    }
  };
});