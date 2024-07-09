System.register("q-bundled:///fs/cocos/physics/framework/components/constraints/hinge-constraint.js", ["../../../../core/data/decorators/index.js", "../../../../../../virtual/internal%253Aconstants.js", "./constraint.js", "../../../../core/index.js", "../../physics-enum.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, menu, serializable, formerlySerializedAs, type, tooltip, EDITOR_NOT_IN_PREVIEW, Constraint, Vec3, CCFloat, CCBoolean, EConstraintType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, _initializer3, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class4, _class5, _initializer4, _initializer5, _initializer6, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class7, _class8, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, HingeLimitData, HingeMotorData, HingeConstraint;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
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
      Vec3 = _coreIndexJs.Vec3;
      CCFloat = _coreIndexJs.CCFloat;
      CCBoolean = _coreIndexJs.CCBoolean;
    }, function (_physicsEnumJs) {
      EConstraintType = _physicsEnumJs.EConstraintType;
    }],
    execute: function () {
      /**
       * @en The hinge constraint limitation data.
       * @zh 铰链约束的限制数据。
       */
      _export("HingeLimitData", HingeLimitData = (_dec = ccclass('cc.HingeLimitData'), _dec2 = formerlySerializedAs('enabled'), _dec3 = formerlySerializedAs('upperLimit'), _dec4 = formerlySerializedAs('lowerLimit'), _dec5 = type(CCBoolean), _dec6 = type(CCFloat), _dec7 = type(CCFloat), _dec(_class = (_class2 = class HingeLimitData {
        constructor() {
          this._enabled = _initializer && _initializer();
          this._upperLimit = _initializer2 && _initializer2();
          this._lowerLimit = _initializer3 && _initializer3();
        }

        /**
         * @en
         * Whether to enable the rotation limit of the hinge constraint.
         * @zh
         * 是否开启旋转限制。
         */
        get enabled() {
          return this._enabled;
        }
        set enabled(v) {
          this._enabled = v;
        }

        /**
         * @en
         * The upper limit to the rotation of pivotB related to pivotB's local position. (in degrees)
         * @zh
         * 转轴约束的旋转上限。（以度为单位）
         */
        get upperLimit() {
          return this._upperLimit;
        }
        set upperLimit(v) {
          this._upperLimit = v;
        }

        /**
         * @en
         * The lower limit to the rotation of pivotB related to pivotB's local position. (in degrees)
         * @zh
         * 转轴约束的旋转下限。（以度为单位）
         */
        get lowerLimit() {
          return this._lowerLimit;
        }
        set lowerLimit(v) {
          this._lowerLimit = v;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enabled", [serializable, _dec2], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_upperLimit", [serializable, _dec3], function () {
        return Number.MAX_VALUE;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_lowerLimit", [serializable, _dec4], function () {
        return -Number.MAX_VALUE;
      }), _applyDecoratedDescriptor(_class2.prototype, "enabled", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "enabled"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "upperLimit", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "upperLimit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lowerLimit", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "lowerLimit"), _class2.prototype)), _class2)) || _class));
      /**
       * @en The hinge constraint motor data.
       * @zh 铰链约束的马达数据。
       */
      _export("HingeMotorData", HingeMotorData = (_dec8 = ccclass('cc.HingeMotorData'), _dec9 = formerlySerializedAs('enabled'), _dec10 = formerlySerializedAs('motorVelocity'), _dec11 = formerlySerializedAs('motorForceLimit'), _dec12 = type(CCBoolean), _dec13 = type(CCFloat), _dec14 = type(CCFloat), _dec8(_class4 = (_class5 = class HingeMotorData {
        constructor() {
          this._enabled = _initializer4 && _initializer4();
          this._motorVelocity = _initializer5 && _initializer5();
          this._motorForceLimit = _initializer6 && _initializer6();
        }

        /**
         * @en
         * Whether the motor is enabled or not.
         * @zh
         * 转轴约束是否启用 Motor
         */
        get enabled() {
          return this._enabled;
        }
        set enabled(v) {
          this._enabled = v;
        }

        /**
         * @en
         * The rotation speed of pivotA related to pivotB. (in degrees per second)
         * @zh
         * 转轴约束的旋转速度。（以度每秒为单位）
         */
        get motorVelocity() {
          return this._motorVelocity;
        }
        set motorVelocity(v) {
          this._motorVelocity = v;
        }

        /**
         * @en
         * The max drive force of the motor.
         * @zh
         * 转轴约束的最大驱动力。
         */
        get motorForceLimit() {
          return this._motorForceLimit;
        }
        set motorForceLimit(v) {
          this._motorForceLimit = v;
        }
      }, (_initializer4 = _applyDecoratedInitializer(_class5.prototype, "_enabled", [serializable, _dec9], function () {
        return false;
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "_motorVelocity", [serializable, _dec10], function () {
        return 0;
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "_motorForceLimit", [serializable, _dec11], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class5.prototype, "enabled", [_dec12], Object.getOwnPropertyDescriptor(_class5.prototype, "enabled"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "motorVelocity", [_dec13], Object.getOwnPropertyDescriptor(_class5.prototype, "motorVelocity"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "motorForceLimit", [_dec14], Object.getOwnPropertyDescriptor(_class5.prototype, "motorForceLimit"), _class5.prototype)), _class5)) || _class4));
      /**
       * @en Hinge constraint.
       * It keeps the local rotation axes of two rigid bodies aligned,
       * and locks the relative motion along the rotation axis.
       * @zh 铰链约束。
       * 它保持两个刚体的本地旋转轴对齐，并锁定沿旋转轴的相对运动。
       */
      _export("HingeConstraint", HingeConstraint = (_dec15 = ccclass('cc.HingeConstraint'), _dec16 = help('i18n:cc.HingeConstraint'), _dec17 = menu('Physics/HingeConstraint(beta)'), _dec18 = type(Vec3), _dec19 = tooltip('i18n:physics3d.constraint.pivotA'), _dec20 = type(Vec3), _dec21 = tooltip('i18n:physics3d.constraint.pivotB'), _dec22 = type(Vec3), _dec23 = tooltip('i18n:physics3d.constraint.axis'), _dec24 = type(CCBoolean), _dec25 = type(CCFloat), _dec26 = type(CCFloat), _dec27 = type(CCBoolean), _dec28 = type(CCFloat), _dec29 = type(CCFloat), _dec30 = formerlySerializedAs('axisA'), _dec31 = formerlySerializedAs('pivotA'), _dec32 = formerlySerializedAs('pivotB'), _dec33 = formerlySerializedAs('limitData'), _dec34 = formerlySerializedAs('motorData'), _dec15(_class7 = _dec16(_class7 = _dec17(_class7 = (_class8 = class HingeConstraint extends Constraint {
        /**
         * @en
         * The pivot point of the constraint in the local coordinate system of the attached rigid body.
         * @zh
         * 约束关节在连接刚体的本地坐标系中的锚点。
         */
        get pivotA() {
          return this._pivotA;
        }
        set pivotA(v) {
          Vec3.copy(this._pivotA, v);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setPivotA(this._pivotA);
          }
        }

        /**
         * @en
         * The pivot point of the constraint in the local coordinate system of the connected rigid body.
         * @zh
         * 约束关节在连接刚体的本地坐标系中的锚点。
         */
        get pivotB() {
          return this._pivotB;
        }
        set pivotB(v) {
          Vec3.copy(this._pivotB, v);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setPivotB(this._pivotB);
          }
        }

        /**
         * @en
         * The axis of the constraint in the local coordinate system of the attached rigid body.
         * @zh
         * 约束关节在连接刚体的本地坐标系中的轴。
         */
        get axis() {
          return this._axis;
        }
        set axis(v) {
          Vec3.copy(this._axis, v);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setAxis(this._axis);
          }
        }

        /**
         * @en
         * Whether to enable the rotation limit of the hinge constraint.
         * @zh
         * 是否开启旋转限制。
         */
        get limitEnabled() {
          return this._limitData.enabled;
        }
        set limitEnabled(v) {
          this._limitData.enabled = v;
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setLimitEnabled(v);
          }
        }

        /**
         * @en
         * The upper limit to the rotation angle of pivotB related to pivotB's local position.
         * @zh
         * 转轴约束的旋转角度上限。
         */
        get upperLimit() {
          return this._limitData.upperLimit;
        }
        set upperLimit(v) {
          this._limitData.upperLimit = v;
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setUpperLimit(v);
          }
        }

        /**
         * @en
         * The lower limit to the rotation angle of pivotB related to pivotB's local position.
         * @zh
         * 转轴约束的旋转角度下限。
         */
        get lowerLimit() {
          return this._limitData.lowerLimit;
        }
        set lowerLimit(v) {
          this._limitData.lowerLimit = v;
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setLowerLimit(v);
          }
        }

        /**
         * @en
         * Whether the motor is enabled or not.
         * @zh
         * 转轴约束是否启用 Motor
         */
        get motorEnabled() {
          return this._motorData.enabled;
        }
        set motorEnabled(v) {
          this._motorData.enabled = v;
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setMotorEnabled(v);
          }
        }

        /**
         * @en
         * The rotation speed of pivotA related to pivotB.
         * @zh
         * 转轴约束的旋转速度。
         */
        get motorVelocity() {
          return this._motorData.motorVelocity;
        }
        set motorVelocity(v) {
          this._motorData.motorVelocity = v;
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setMotorVelocity(v);
          }
        }

        /**
         * @en
         * The max drive force of the motor.
         * @zh
         * 转轴约束的最大驱动力。
         */
        get motorForceLimit() {
          return this._motorData.motorForceLimit;
        }
        set motorForceLimit(v) {
          this._motorData.motorForceLimit = v;
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.constraint.setMotorForceLimit(v);
          }
        }
        get constraint() {
          return this._constraint;
        }
        constructor() {
          super(EConstraintType.HINGE);
          this._axis = _initializer7 && _initializer7();
          this._pivotA = _initializer8 && _initializer8();
          this._pivotB = _initializer9 && _initializer9();
          this._limitData = _initializer10 && _initializer10();
          this._motorData = _initializer11 && _initializer11();
        }
      }, (_applyDecoratedDescriptor(_class8.prototype, "pivotA", [_dec18, _dec19], Object.getOwnPropertyDescriptor(_class8.prototype, "pivotA"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "pivotB", [_dec20, _dec21], Object.getOwnPropertyDescriptor(_class8.prototype, "pivotB"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "axis", [_dec22, _dec23], Object.getOwnPropertyDescriptor(_class8.prototype, "axis"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "limitEnabled", [_dec24], Object.getOwnPropertyDescriptor(_class8.prototype, "limitEnabled"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "upperLimit", [_dec25], Object.getOwnPropertyDescriptor(_class8.prototype, "upperLimit"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "lowerLimit", [_dec26], Object.getOwnPropertyDescriptor(_class8.prototype, "lowerLimit"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "motorEnabled", [_dec27], Object.getOwnPropertyDescriptor(_class8.prototype, "motorEnabled"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "motorVelocity", [_dec28], Object.getOwnPropertyDescriptor(_class8.prototype, "motorVelocity"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "motorForceLimit", [_dec29], Object.getOwnPropertyDescriptor(_class8.prototype, "motorForceLimit"), _class8.prototype), _initializer7 = _applyDecoratedInitializer(_class8.prototype, "_axis", [serializable, _dec30], function () {
        return new Vec3();
      }), _initializer8 = _applyDecoratedInitializer(_class8.prototype, "_pivotA", [serializable, _dec31], function () {
        return new Vec3();
      }), _initializer9 = _applyDecoratedInitializer(_class8.prototype, "_pivotB", [serializable, _dec32], function () {
        return new Vec3();
      }), _initializer10 = _applyDecoratedInitializer(_class8.prototype, "_limitData", [serializable, _dec33], function () {
        return new HingeLimitData();
      }), _initializer11 = _applyDecoratedInitializer(_class8.prototype, "_motorData", [serializable, _dec34], function () {
        return new HingeMotorData();
      })), _class8)) || _class7) || _class7) || _class7));
    }
  };
});