System.register("q-bundled:///fs/cocos/animation/marionette/variable/primitive-variable.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../core/data/decorators/index.js", "./basic.js"], function (_export, _context) {
  "use strict";

  var DEBUG, assertIsTrue, ccclass, serializable, VariableType, createInstanceTag, VarInstanceBase, _dec, _class, _class2, _initializer, _initializer2, PlainVariable, VarInstancePrimitive;
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
      _export("PlainVariable", PlainVariable = (_dec = ccclass('cc.animation.PlainVariable'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function PlainVariable(type) {
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
        var _proto = PlainVariable.prototype;
        _proto[createInstanceTag] = function () {
          return new VarInstancePrimitive(this._type, this._value);
        };
        _createClass(PlainVariable, [{
          key: "type",
          get: function get() {
            return this._type;
          }
        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
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
        }]);
        return PlainVariable;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_type", [serializable], function () {
        return VariableType.FLOAT;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_value", [serializable], function () {
        return 0.0;
      })), _class2)) || _class));
      _export("VarInstancePrimitive", VarInstancePrimitive = /*#__PURE__*/function (_VarInstanceBase) {
        _inheritsLoose(VarInstancePrimitive, _VarInstanceBase);
        function VarInstancePrimitive(type, value) {
          var _this;
          _this = _VarInstanceBase.call(this, type) || this;
          _this._value = void 0;
          _this._value = value;
          return _this;
        }
        var _proto2 = VarInstancePrimitive.prototype;
        _proto2.getValue = function getValue() {
          return this._value;
        };
        _proto2.setValue = function setValue(value) {
          this._value = value;
        };
        return VarInstancePrimitive;
      }(VarInstanceBase));
    }
  };
});