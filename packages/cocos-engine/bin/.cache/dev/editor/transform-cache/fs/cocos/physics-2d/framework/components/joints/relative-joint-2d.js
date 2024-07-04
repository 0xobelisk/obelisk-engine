System.register("q-bundled:///fs/cocos/physics-2d/framework/components/joints/relative-joint-2d.js", ["./joint-2d.js", "../../physics-types.js", "../../../../core/index.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Joint2D, EJoint2DType, Vec3, Vec2, Quat, _decorator, CCFloat, CCBoolean, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, tempVec3_1, tempVec3_2, ccclass, menu, property, RelativeJoint2D;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_joint2dJs) {
      Joint2D = _joint2dJs.Joint2D;
    }, function (_physicsTypesJs) {
      EJoint2DType = _physicsTypesJs.EJoint2DType;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      Vec2 = _coreIndexJs.Vec2;
      Quat = _coreIndexJs.Quat;
      _decorator = _coreIndexJs._decorator;
      CCFloat = _coreIndexJs.CCFloat;
      CCBoolean = _coreIndexJs.CCBoolean;
    }, function (_coreDataDecoratorsIndexJs) {
      help = _coreDataDecoratorsIndexJs.help;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
    }],
    execute: function () {
      tempVec3_1 = new Vec3();
      tempVec3_2 = new Vec3();
      ({
        ccclass,
        menu,
        property
      } = _decorator);
      _export("RelativeJoint2D", RelativeJoint2D = (_dec = ccclass('cc.RelativeJoint2D'), _dec2 = help('i18n:cc.Joint2D'), _dec3 = menu('Physics2D/Joints/RelativeJoint2D'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:physics2d.joint.maxForce'), _dec6 = type(CCFloat), _dec7 = tooltip('i18n:physics2d.joint.maxTorque'), _dec8 = type(CCFloat), _dec9 = tooltip('i18n:physics2d.joint.correctionFactor'), _dec10 = type(Vec2), _dec11 = tooltip('i18n:physics2d.joint.linearOffset'), _dec12 = type(CCFloat), _dec13 = tooltip('i18n:physics2d.joint.angularOffset'), _dec14 = type(CCBoolean), _dec15 = tooltip('i18n:physics2d.joint.autoCalcOffset'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class RelativeJoint2D extends Joint2D {
        constructor(...args) {
          super(...args);
          this.TYPE = EJoint2DType.RELATIVE;
          /// private properties
          this._maxForce = _initializer && _initializer();
          this._maxTorque = _initializer2 && _initializer2();
          this._correctionFactor = _initializer3 && _initializer3();
          this._angularOffset = _initializer4 && _initializer4();
          this._linearOffset = _initializer5 && _initializer5();
          this._autoCalcOffset = _initializer6 && _initializer6();
        }
        /**
         * @en
         * The maximum force can be applied to rigidbody.
         * @zh
         * 可以应用于刚体的最大的力值。
         */
        get maxForce() {
          return this._maxForce;
        }
        set maxForce(v) {
          this._maxForce = v;
          if (this._joint) {
            this._joint.setMaxForce(v);
          }
        }

        /**
         * @en
         * The maximum torque can be applied to rigidbody.
         * @zh
         * 可以应用于刚体的最大扭矩值。
         */
        get maxTorque() {
          return this._maxTorque;
        }
        set maxTorque(v) {
          this._maxTorque = v;
          if (this._joint) {
            this._joint.setMaxTorque(v);
          }
        }

        /**
         * @en
         * The position correction factor in the range [0,1].
         * @zh
         * 位置矫正系数，范围为 [0, 1]。
         */
        get correctionFactor() {
          return this._correctionFactor;
        }
        set correctionFactor(v) {
          this._correctionFactor = v;
          if (this._joint) {
            this._joint.setCorrectionFactor(v);
          }
        }

        /**
         * @en
         * The linear offset from connected rigidbody to rigidbody.
         * @zh
         * 关节另一端的刚体相对于起始端刚体的位置偏移量。
         */
        get linearOffset() {
          if (this._autoCalcOffset) {
            if (this.connectedBody) {
              return Vec2.subtract(this._linearOffset, this.connectedBody.node.worldPosition, this.node.worldPosition);
            } else {
              //if connected body is not set, use scene origin as connected body
              return Vec2.subtract(this._linearOffset, new Vec2(0, 0), this.node.worldPosition);
            }
          }
          return this._linearOffset;
        }
        set linearOffset(v) {
          this._linearOffset.set(v);
          if (this._joint) {
            this._joint.setLinearOffset(v);
          }
        }

        /**
         * @en
         * The angular offset from connected rigidbody to rigidbody.
         * @zh
         * 关节另一端的刚体相对于起始端刚体的角度偏移量。
         */
        get angularOffset() {
          if (this._autoCalcOffset) {
            Quat.toEuler(tempVec3_1, this.node.worldRotation);
            if (this.connectedBody) {
              Quat.toEuler(tempVec3_2, this.connectedBody.node.worldRotation);
            } else {
              //if connected body is not set, use scene origin as connected body
              Quat.toEuler(tempVec3_2, new Quat()); //?
            }

            this._angularOffset = tempVec3_2.z - tempVec3_1.z;
          }
          return this._angularOffset;
        }
        set angularOffset(v) {
          this._angularOffset = v;
          if (this._joint) {
            this._joint.setAngularOffset(v);
          }
        }

        /**
         * @en
         * Auto calculate the angularOffset and linearOffset between the connected two rigid bodies.
         * @zh
         * 自动计算关节连接的两个刚体间的 angularOffset 和 linearOffset。
         */
        get autoCalcOffset() {
          return this._autoCalcOffset;
        }
        set autoCalcOffset(v) {
          this._autoCalcOffset = v;
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "maxForce", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "maxForce"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxTorque", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "maxTorque"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "correctionFactor", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "correctionFactor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "linearOffset", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "linearOffset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "angularOffset", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "angularOffset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "autoCalcOffset", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "autoCalcOffset"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_maxForce", [serializable], function () {
        return 5;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_maxTorque", [serializable], function () {
        return 0.7;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_correctionFactor", [serializable], function () {
        return 0.3;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_angularOffset", [serializable], function () {
        return 0;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_linearOffset", [serializable], function () {
        return new Vec2();
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_autoCalcOffset", [serializable], function () {
        return true;
      })), _class2)) || _class) || _class) || _class));
    }
  };
});