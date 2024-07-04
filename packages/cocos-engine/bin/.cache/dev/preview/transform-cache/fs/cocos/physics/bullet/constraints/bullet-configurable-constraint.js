System.register("q-bundled:///fs/cocos/physics/bullet/constraints/bullet-configurable-constraint.js", ["./bullet-constraint.js", "../../../core/index.js", "../../framework/index.js", "../instantiated.js", "../bullet-cache.js", "../bullet-utils.js"], function (_export, _context) {
  "use strict";

  var BulletConstraint, error, Mat4, Quat, Vec3, toRadian, EConstraintMode, EDriverMode, PhysicsSystem, bt, BulletCache, CC_QUAT_0, CC_QUAT_1, CC_V3_0, CC_MAT4_0, CC_V3_1, cocos2BulletQuat, cocos2BulletVec3, force2Impulse, RotateOrder, BulletDofAxis, BulletConfigurableConstraint;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            https://www.cocos.com/
                                                                                                                                                                                                           
                                                                                                                                                                                                            Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                            of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                            in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                            use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                            of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                            subject to the following conditions:
                                                                                                                                                                                                           
                                                                                                                                                                                                            The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                            all copies or substantial portions of the Software.
                                                                                                                                                                                                           
                                                                                                                                                                                                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                            THE SOFTWARE.
                                                                                                                                                                                                           */ /* eslint-disable new-cap */
  return {
    setters: [function (_bulletConstraintJs) {
      BulletConstraint = _bulletConstraintJs.BulletConstraint;
    }, function (_coreIndexJs) {
      error = _coreIndexJs.error;
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      toRadian = _coreIndexJs.toRadian;
    }, function (_frameworkIndexJs) {
      EConstraintMode = _frameworkIndexJs.EConstraintMode;
      EDriverMode = _frameworkIndexJs.EDriverMode;
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
      CC_QUAT_0 = _bulletCacheJs.CC_QUAT_0;
      CC_QUAT_1 = _bulletCacheJs.CC_QUAT_1;
      CC_V3_0 = _bulletCacheJs.CC_V3_0;
      CC_MAT4_0 = _bulletCacheJs.CC_MAT4_0;
      CC_V3_1 = _bulletCacheJs.CC_V3_1;
    }, function (_bulletUtilsJs) {
      cocos2BulletQuat = _bulletUtilsJs.cocos2BulletQuat;
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
      force2Impulse = _bulletUtilsJs.force2Impulse;
    }],
    execute: function () {
      (function (RotateOrder) {
        RotateOrder[RotateOrder["RO_XYZ"] = 0] = "RO_XYZ";
        RotateOrder[RotateOrder["RO_XZY"] = 1] = "RO_XZY";
        RotateOrder[RotateOrder["RO_YXZ"] = 2] = "RO_YXZ";
        RotateOrder[RotateOrder["RO_YZX"] = 3] = "RO_YZX";
        RotateOrder[RotateOrder["RO_ZXY"] = 4] = "RO_ZXY";
        RotateOrder[RotateOrder["RO_ZYX"] = 5] = "RO_ZYX";
      })(RotateOrder || (RotateOrder = {}));
      (function (BulletDofAxis) {
        BulletDofAxis[BulletDofAxis["X"] = 0] = "X";
        BulletDofAxis[BulletDofAxis["Y"] = 1] = "Y";
        BulletDofAxis[BulletDofAxis["Z"] = 2] = "Z";
        BulletDofAxis[BulletDofAxis["TWIST"] = 3] = "TWIST";
        BulletDofAxis[BulletDofAxis["SWING1"] = 4] = "SWING1";
        BulletDofAxis[BulletDofAxis["SWING2"] = 5] = "SWING2";
      })(BulletDofAxis || (BulletDofAxis = {}));
      _export("BulletConfigurableConstraint", BulletConfigurableConstraint = /*#__PURE__*/function (_BulletConstraint) {
        _inheritsLoose(BulletConfigurableConstraint, _BulletConstraint);
        function BulletConfigurableConstraint() {
          return _BulletConstraint.apply(this, arguments) || this;
        }
        var _proto = BulletConfigurableConstraint.prototype;
        _proto._setLimit = function _setLimit(v, axis, lower, upper) {
          switch (v) {
            case EConstraintMode.LOCKED:
              bt.Generic6DofSpring2Constraint_setLimit(this._impl, axis, 0, 0);
              break;
            case EConstraintMode.LIMITED:
              bt.Generic6DofSpring2Constraint_setLimit(this._impl, axis, lower, upper);
              break;
            case EConstraintMode.FREE:
              bt.Generic6DofSpring2Constraint_setLimit(this._impl, axis, 1, 0);
              break;
            default:
              break;
          }
        };
        _proto.setConstraintMode = function setConstraintMode(idx, v) {
          var ll = this.constraint.linearLimitSettings;
          var al = this.constraint.angularLimitSettings;
          var lowers = [0, 0, 0];
          var uppers = [0, 0, 0];
          var upper = 0;
          var lower = 0;
          switch (idx) {
            case 0:
            case 1:
            case 2:
              Vec3.toArray(lowers, ll.lower);
              Vec3.toArray(uppers, ll.upper);
              lower = lowers[idx];
              upper = uppers[idx];
              break;
            case 3:
              upper = toRadian(al.twistExtent) * 0.5;
              lower = -upper;
              break;
            case 4:
              upper = toRadian(al.swingExtent1) * 0.5;
              lower = -upper;
              break;
            case 5:
              upper = toRadian(al.swingExtent2) * 0.5;
              lower = -upper;
              break;
            default:
              error("idx should be in [0, 5], but give " + idx);
              break;
          }
          this._setLimit(v, idx, lower, upper);
        };
        _proto.setLinearLimit = function setLinearLimit(idx, lower, upper) {
          var cm = 0;
          var ll = this.constraint.linearLimitSettings;
          switch (idx) {
            case 0:
              cm = ll.xMotion;
              break;
            case 1:
              cm = ll.yMotion;
              break;
            case 2:
              cm = ll.zMotion;
              break;
            default:
              break;
          }
          this._setLimit(cm, idx, lower, upper);
        };
        _proto.setAngularExtent = function setAngularExtent(twist, swing1, swing2) {
          var al = this.constraint.angularLimitSettings;
          this._setLimit(al.twistMotion, BulletDofAxis.TWIST, -toRadian(twist) * 0.5, toRadian(twist) * 0.5);
          this._setLimit(al.swingMotion1, BulletDofAxis.SWING1, -toRadian(swing1) * 0.5, toRadian(swing1) * 0.5);
          this._setLimit(al.swingMotion2, BulletDofAxis.SWING2, -toRadian(swing2) * 0.5, toRadian(swing2) * 0.5);
        };
        _proto.setSwingSoftConstraint = function setSwingSoftConstraint(v) {
          bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.SWING1, v);
          bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.SWING2, v);
        };
        _proto.setTwistSoftConstraint = function setTwistSoftConstraint(v) {
          bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.TWIST, v);
        };
        _proto.setLinearSoftConstraint = function setLinearSoftConstraint(v) {
          bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.X, v);
          bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.Y, v);
          bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.Z, v);
        };
        _proto.setLinearStiffness = function setLinearStiffness(v) {
          bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.X, v);
          bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.Y, v);
          bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.Z, v);
        };
        _proto.setLinearDamping = function setLinearDamping(v) {
          bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.X, v);
          bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.Y, v);
          bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.Z, v);
        };
        _proto.setLinearRestitution = function setLinearRestitution(v) {
          bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.X, v);
          bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.Y, v);
          bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.Z, v);
        };
        _proto.setSwingStiffness = function setSwingStiffness(v) {
          bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.SWING1, v);
          bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.SWING2, v);
        };
        _proto.setSwingDamping = function setSwingDamping(v) {
          bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.SWING1, v);
          bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.SWING2, v);
        };
        _proto.setSwingRestitution = function setSwingRestitution(v) {
          bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.SWING1, v);
          bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.SWING2, v);
        };
        _proto.setTwistStiffness = function setTwistStiffness(v) {
          bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.TWIST, v);
        };
        _proto.setTwistDamping = function setTwistDamping(v) {
          bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.TWIST, v);
        };
        _proto.setTwistRestitution = function setTwistRestitution(v) {
          bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.TWIST, v);
        };
        _proto.setDriverMode = function setDriverMode(idx, v) {
          if (v === EDriverMode.DISABLED) {
            bt.Generic6DofSpring2Constraint_enableMotor(this._impl, idx, false);
          } else if (v === EDriverMode.SERVO) {
            bt.Generic6DofSpring2Constraint_enableMotor(this._impl, idx, true);
            bt.Generic6DofSpring2Constraint_setServo(this._impl, idx, true);
          } else if (v === EDriverMode.INDUCTION) {
            bt.Generic6DofSpring2Constraint_enableMotor(this._impl, idx, true);
            bt.Generic6DofSpring2Constraint_setServo(this._impl, idx, false);
          }
        };
        _proto._updateMotorTargetAndVelocity = function _updateMotorTargetAndVelocity(index) {
          var mode = EDriverMode.DISABLED;
          var axis = 0;
          var target = 0;
          var velocity = 0;
          var ld = this.constraint.linearDriverSettings;
          var ad = this.constraint.angularDriverSettings;
          switch (index) {
            case 0:
              axis = BulletDofAxis.X;
              mode = ld.xDrive;
              target = ld.targetPosition.x;
              velocity = -ld.targetVelocity.x;
              break;
            case 1:
              axis = BulletDofAxis.Y;
              mode = ld.yDrive;
              target = ld.targetPosition.y;
              velocity = -ld.targetVelocity.y;
              break;
            case 2:
              axis = BulletDofAxis.Z;
              mode = ld.zDrive;
              target = ld.targetPosition.z;
              velocity = -ld.targetVelocity.z;
              break;
            case 3:
              axis = BulletDofAxis.TWIST;
              mode = ad.twistDrive;
              target = -toRadian(ad.targetOrientation.x);
              velocity = -toRadian(ad.targetVelocity.x);
              break;
            case 4:
              axis = BulletDofAxis.SWING1;
              mode = ad.swingDrive1;
              target = -toRadian(ad.targetOrientation.y);
              velocity = -toRadian(ad.targetVelocity.y);
              break;
            case 5:
              axis = BulletDofAxis.SWING2;
              mode = ad.swingDrive2;
              target = -toRadian(ad.targetOrientation.z);
              velocity = -toRadian(ad.targetVelocity.z);
              break;
            default:
              break;
          }
          var strength = index > 2 ? ad.strength : ld.strength;
          bt.Generic6DofSpring2Constraint_setServoTarget(this._impl, axis, target);
          if (mode === EDriverMode.SERVO) {
            if (index > 2) {
              bt.Generic6DofSpring2Constraint_setTargetVelocity(this._impl, axis, -target * strength * 0.1);
            } else {
              bt.Generic6DofSpring2Constraint_setTargetVelocity(this._impl, axis, target * strength * 0.1);
            }
          } else if (mode === EDriverMode.INDUCTION) {
            bt.Generic6DofSpring2Constraint_setTargetVelocity(this._impl, axis, velocity);
          }
        };
        _proto.setLinearMotorTarget = function setLinearMotorTarget(v) {
          this._updateMotorTargetAndVelocity(0);
          this._updateMotorTargetAndVelocity(1);
          this._updateMotorTargetAndVelocity(2);
        };
        _proto.setLinearMotorVelocity = function setLinearMotorVelocity(v) {
          this._updateMotorTargetAndVelocity(0);
          this._updateMotorTargetAndVelocity(1);
          this._updateMotorTargetAndVelocity(2);
        };
        _proto.setLinearMotorForceLimit = function setLinearMotorForceLimit(v) {
          bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.X, v);
          bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.Y, v);
          bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.Z, v);
        };
        _proto.setAngularMotorTarget = function setAngularMotorTarget(v) {
          this._updateMotorTargetAndVelocity(3);
          this._updateMotorTargetAndVelocity(4);
          this._updateMotorTargetAndVelocity(5);
        };
        _proto.setAngularMotorVelocity = function setAngularMotorVelocity(v) {
          this._updateMotorTargetAndVelocity(3);
          this._updateMotorTargetAndVelocity(4);
          this._updateMotorTargetAndVelocity(5);
        };
        _proto.setAngularMotorForceLimit = function setAngularMotorForceLimit(v) {
          bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.TWIST, v);
          bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.SWING1, v);
          bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.SWING2, v);
        };
        _proto.setPivotA = function setPivotA(v) {
          this.updateFrames();
        };
        _proto.setPivotB = function setPivotB(v) {
          this.updateFrames();
        };
        _proto.setAutoPivotB = function setAutoPivotB(v) {
          this.updateFrames();
        };
        _proto.setAxis = function setAxis(v) {
          this.updateFrames();
        };
        _proto.setSecondaryAxis = function setSecondaryAxis(v) {
          this.updateFrames();
        };
        _proto.setBreakForce = function setBreakForce(v) {
          var maxForce = Math.max(this.constraint.breakForce, this.constraint.breakTorque);
          var impulse = force2Impulse(maxForce, PhysicsSystem.instance.fixedTimeStep);
          bt.TypedConstraint_setMaxImpulseThreshold(this._impl, impulse);
        };
        _proto.setBreakTorque = function setBreakTorque(v) {
          var maxForce = Math.max(this.constraint.breakForce, this.constraint.breakTorque);
          var impulse = force2Impulse(maxForce, PhysicsSystem.instance.fixedTimeStep);
          bt.TypedConstraint_setMaxImpulseThreshold(this._impl, impulse);
        };
        _proto.onComponentSet = function onComponentSet() {
          var cb = this.constraint.connectedBody;
          var bodyA = this._rigidBody.body.impl;
          var bodyB = cb && cb.body.impl || bt.TypedConstraint_getFixedBody();
          var trans0 = BulletCache.instance.BT_TRANSFORM_0;
          var trans1 = BulletCache.instance.BT_TRANSFORM_1;
          this._impl = bt.Generic6DofSpring2Constraint_new(bodyA, bodyB, trans0, trans1, RotateOrder.RO_YZX);
          var linearLimit = this.constraint.linearLimitSettings;
          var angularLimit = this.constraint.angularLimitSettings;
          // they set limits implicitly
          this.setConstraintMode(0, linearLimit.xMotion);
          this.setConstraintMode(1, linearLimit.yMotion);
          this.setConstraintMode(2, linearLimit.zMotion);
          this.setConstraintMode(3, angularLimit.twistMotion);
          this.setConstraintMode(4, angularLimit.swingMotion1);
          this.setConstraintMode(5, angularLimit.swingMotion2);
          this.setLinearSoftConstraint(linearLimit.enableSoftConstraint);
          this.setLinearStiffness(linearLimit.stiffness);
          this.setLinearDamping(linearLimit.damping);
          this.setLinearRestitution(linearLimit.restitution);
          this.setSwingSoftConstraint(angularLimit.enableSoftConstraintSwing);
          this.setSwingRestitution(angularLimit.swingRestitution);
          this.setSwingStiffness(angularLimit.swingStiffness);
          this.setSwingDamping(angularLimit.swingDamping);
          this.setTwistSoftConstraint(angularLimit.enableSoftConstraintTwist);
          this.setTwistRestitution(angularLimit.twistRestitution);
          this.setTwistStiffness(angularLimit.twistStiffness);
          this.setTwistDamping(angularLimit.twistDamping);
          var linearMotor = this.constraint.linearDriverSettings;
          var angularMotor = this.constraint.angularDriverSettings;
          this.setDriverMode(0, linearMotor.xDrive);
          this.setDriverMode(1, linearMotor.yDrive);
          this.setDriverMode(2, linearMotor.zDrive);
          this.setDriverMode(3, angularMotor.twistDrive);
          this.setDriverMode(4, angularMotor.swingDrive1);
          this.setDriverMode(5, angularMotor.swingDrive2);
          this.setLinearMotorTarget(linearMotor.targetPosition);
          this.setLinearMotorVelocity(linearMotor.targetVelocity);
          this.setLinearMotorForceLimit(linearMotor.strength);
          this.setAngularMotorTarget(angularMotor.targetOrientation);
          this.setAngularMotorVelocity(angularMotor.targetVelocity);
          this.setAngularMotorForceLimit(angularMotor.strength);
          this.setBreakForce(this.constraint.breakForce);
          this.setBreakTorque(this.constraint.breakTorque);
          this.updateFrames();
          this.updateDebugDrawSize();
        };
        _proto.updateFrames = function updateFrames() {
          var cs = this.constraint;
          var node = cs.node;
          var v3_0 = CC_V3_0;
          var rot_0 = CC_QUAT_0;
          var rot_1 = CC_QUAT_1;
          var trans0 = BulletCache.instance.BT_TRANSFORM_0;
          Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
          cocos2BulletVec3(bt.Transform_getOrigin(trans0), v3_0);
          var quat = BulletCache.instance.BT_QUAT_0;
          var axisX = cs.axis;
          var axisY = cs.secondaryAxis;
          var axisZ = Vec3.cross(CC_V3_1, axisX, axisY);
          var mat = Mat4.set(CC_MAT4_0, axisX.x, axisX.y, axisX.z, 0, axisY.x, axisY.y, axisY.z, 0, axisZ.x, axisZ.y, axisZ.z, 0, 0, 0, 0, 1);
          mat.getRotation(rot_0);
          cocos2BulletQuat(quat, rot_0);
          bt.Transform_setRotation(trans0, quat);
          var trans1 = BulletCache.instance.BT_TRANSFORM_1;
          var cb = this.constraint.connectedBody;
          if (cb) {
            Quat.multiply(rot_0, node.worldRotation, rot_0);
            Quat.invert(rot_1, cb.node.worldRotation);
            Quat.multiply(rot_0, rot_1, rot_0);
            if (cs.autoPivotB) {
              Vec3.multiply(v3_0, cs.node.worldScale, cs.pivotA);
              Vec3.transformQuat(v3_0, v3_0, node.worldRotation);
              Vec3.add(v3_0, v3_0, cs.node.worldPosition);
              Vec3.subtract(v3_0, v3_0, cb.node.worldPosition);
              Vec3.transformQuat(v3_0, v3_0, rot_1);
            } else {
              Vec3.multiply(v3_0, cb.node.worldScale, cs.pivotB);
            }
          } else {
            Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
            Vec3.transformQuat(v3_0, v3_0, node.worldRotation);
            Vec3.add(v3_0, v3_0, node.worldPosition);
            Quat.multiply(rot_0, node.worldRotation, rot_0);
          }
          cocos2BulletVec3(bt.Transform_getOrigin(trans1), v3_0);
          cocos2BulletQuat(quat, rot_0);
          bt.Transform_setRotation(trans1, quat);
          bt.Generic6DofSpring2Constraint_setFrames(this._impl, trans0, trans1);
        };
        _proto.updateScale0 = function updateScale0() {
          this.updateFrames();
        };
        _proto.updateScale1 = function updateScale1() {
          this.updateFrames();
        };
        _createClass(BulletConfigurableConstraint, [{
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return BulletConfigurableConstraint;
      }(BulletConstraint));
    }
  };
});