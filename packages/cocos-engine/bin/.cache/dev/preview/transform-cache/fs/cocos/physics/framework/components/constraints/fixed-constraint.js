System.register("q-bundled:///fs/cocos/physics/framework/components/constraints/fixed-constraint.js", ["../../../../core/data/decorators/index.js", "../../../../../../virtual/internal%253Aconstants.js", "./constraint.js", "../../../../core/index.js", "../../physics-enum.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, menu, serializable, formerlySerializedAs, type, tooltip, EDITOR_NOT_IN_PREVIEW, Constraint, CCFloat, EConstraintType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _initializer, _initializer2, FixedConstraint;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      formerlySerializedAs = _coreDataDecoratorsIndexJs.formerlySerializedAs;
      type = _coreDataDecoratorsIndexJs.type;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_constraintJs) {
      Constraint = _constraintJs.Constraint;
    }, function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
    }, function (_physicsEnumJs) {
      EConstraintType = _physicsEnumJs.EConstraintType;
    }],
    execute: function () {
      /**
       * @en The fixed constraint.
       * It locks the relative position and rotation between two rigid bodies.
       * @zh 固定关节。
       * 固定关节会锁定两个刚体间的相对位置和相对旋转。
       */
      _export("FixedConstraint", FixedConstraint = (_dec = ccclass('cc.FixedConstraint'), _dec2 = help('i18n:cc.FixedConstraint'), _dec3 = menu('Physics/FixedConstraint(beta)'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:physics3d.constraint.breakForce'), _dec6 = type(CCFloat), _dec7 = tooltip('i18n:physics3d.constraint.breakTorque'), _dec8 = formerlySerializedAs('breakForce'), _dec9 = formerlySerializedAs('breakTorque'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Constraint) {
        _inheritsLoose(FixedConstraint, _Constraint);
        function FixedConstraint() {
          var _this;
          _this = _Constraint.call(this, EConstraintType.FIXED) || this;
          _this._breakForce = _initializer && _initializer();
          _this._breakTorque = _initializer2 && _initializer2();
          return _this;
        }
        _createClass(FixedConstraint, [{
          key: "breakForce",
          get:
          /**
           * @en
           * The maximum force that can be applied to the constraint before it breaks.
           * @zh
           * 约束的断裂力阈值。
           */
          function get() {
            return this._breakForce;
          },
          set: function set(v) {
            this._breakForce = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setBreakForce(v);
            }
          }

          /**
           * @en
           * The maximum torque that can be applied to the constraint before it breaks.
           * @zh
           * 约束的断裂扭矩阈值。
           */
        }, {
          key: "breakTorque",
          get: function get() {
            return this._breakTorque;
          },
          set: function set(v) {
            this._breakTorque = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setBreakTorque(v);
            }
          }
        }, {
          key: "constraint",
          get: function get() {
            return this._constraint;
          }
        }]);
        return FixedConstraint;
      }(Constraint), (_applyDecoratedDescriptor(_class2.prototype, "breakForce", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "breakForce"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "breakTorque", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "breakTorque"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_breakForce", [serializable, _dec8], function () {
        return 1e8;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_breakTorque", [serializable, _dec9], function () {
        return 1e8;
      })), _class2)) || _class) || _class) || _class));
    }
  };
});