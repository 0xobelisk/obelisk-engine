System.register("q-bundled:///fs/cocos/physics/bullet/constraints/bullet-hinge-constraint.js", ["./bullet-constraint.js", "../../../core/index.js", "../../framework/index.js", "../bullet-cache.js", "../instantiated.js", "../bullet-utils.js", "../../../core/math/index.js"], function (_export, _context) {
  "use strict";

  var BulletConstraint, Quat, Vec3, PhysicsSystem, BulletCache, CC_QUAT_0, CC_QUAT_1, CC_V3_0, bt, cocos2BulletQuat, cocos2BulletVec3, force2Impulse, toRadian, BulletHingeConstraint;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
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
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
      CC_QUAT_0 = _bulletCacheJs.CC_QUAT_0;
      CC_QUAT_1 = _bulletCacheJs.CC_QUAT_1;
      CC_V3_0 = _bulletCacheJs.CC_V3_0;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
    }, function (_bulletUtilsJs) {
      cocos2BulletQuat = _bulletUtilsJs.cocos2BulletQuat;
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
      force2Impulse = _bulletUtilsJs.force2Impulse;
    }, function (_coreMathIndexJs) {
      toRadian = _coreMathIndexJs.toRadian;
    }],
    execute: function () {
      _export("BulletHingeConstraint", BulletHingeConstraint = /*#__PURE__*/function (_BulletConstraint) {
        _inheritsLoose(BulletHingeConstraint, _BulletConstraint);
        function BulletHingeConstraint() {
          return _BulletConstraint.apply(this, arguments) || this;
        }
        var _proto = BulletHingeConstraint.prototype;
        _proto.setPivotA = function setPivotA(v) {
          this.updateFrames();
        };
        _proto.setPivotB = function setPivotB(v) {
          this.updateFrames();
        };
        _proto.setAxis = function setAxis(v) {
          this.updateFrames();
        };
        _proto.setLimitEnabled = function setLimitEnabled(v) {
          if (this.constraint.limitEnabled) {
            bt.HingeConstraint_setLimit(this._impl, toRadian(this.constraint.lowerLimit), toRadian(this.constraint.upperLimit), 0.9, 0.3, 1.0);
          } else {
            bt.HingeConstraint_setLimit(this._impl, 1, 0, 0.9, 0.3, 1.0);
          }
        };
        _proto.setLowerLimit = function setLowerLimit(min) {
          if (this.constraint.limitEnabled) {
            bt.HingeConstraint_setLimit(this._impl, toRadian(this.constraint.lowerLimit), toRadian(this.constraint.upperLimit), 0.9, 0.3, 1.0);
          }
        };
        _proto.setUpperLimit = function setUpperLimit(max) {
          if (this.constraint.limitEnabled) {
            bt.HingeConstraint_setLimit(this._impl, toRadian(this.constraint.lowerLimit), toRadian(this.constraint.upperLimit), 0.9, 0.3, 1.0);
          }
        };
        _proto.setMotorEnabled = function setMotorEnabled(v) {
          bt.HingeConstraint_enableMotor(this._impl, v);
          var velocity = -this.constraint.motorVelocity / 60.0;
          var impulse = force2Impulse(this.constraint.motorForceLimit, PhysicsSystem.instance.fixedTimeStep);
          bt.HingeConstraint_setMotorVelocity(this._impl, velocity);
          bt.HingeConstraint_setMaxMotorImpulse(this._impl, impulse);
        };
        _proto.setMotorVelocity = function setMotorVelocity(v) {
          if (this.constraint.motorEnabled) {
            var velocity = -v / 60.0;
            bt.HingeConstraint_setMotorVelocity(this._impl, velocity);
          }
        };
        _proto.setMotorForceLimit = function setMotorForceLimit(v) {
          if (this.constraint.motorEnabled) {
            var impulse = force2Impulse(v, PhysicsSystem.instance.fixedTimeStep);
            bt.HingeConstraint_setMaxMotorImpulse(this._impl, impulse);
          }
        };
        _proto.onComponentSet = function onComponentSet() {
          var cb = this.constraint.connectedBody;
          var bodyA = this._rigidBody.body.impl;
          var bodyB = cb ? cb.body.impl : bt.TypedConstraint_getFixedBody();
          var trans0 = BulletCache.instance.BT_TRANSFORM_0;
          var trans1 = BulletCache.instance.BT_TRANSFORM_1;
          this._impl = bt.HingeConstraint_new(bodyA, bodyB, trans0, trans1);
          this.setLimitEnabled(this.constraint.limitEnabled);
          this.setLowerLimit(this.constraint.lowerLimit);
          this.setUpperLimit(this.constraint.upperLimit);
          this.setMotorEnabled(this.constraint.motorEnabled);
          this.setMotorVelocity(this.constraint.motorVelocity);
          this.setMotorForceLimit(this.constraint.motorForceLimit);
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

          // offset of axis in local frame of bodyA
          Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
          cocos2BulletVec3(bt.Transform_getOrigin(trans0), v3_0);
          // rotation of axis in local frame of bodyA
          var quat = BulletCache.instance.BT_QUAT_0;
          Vec3.normalize(v3_0, cs.axis);
          Quat.rotationTo(rot_1, Vec3.UNIT_Z, v3_0);
          cocos2BulletQuat(quat, rot_1);
          bt.Transform_setRotation(trans0, quat);
          var trans1 = BulletCache.instance.BT_TRANSFORM_1;
          var cb = this.constraint.connectedBody;
          if (cb) {
            // offset of axis in local frame of bodyB
            Vec3.multiply(v3_0, cb.node.worldScale, cs.pivotB);
            // rotation of axis in local frame of bodyB
            Quat.multiply(rot_1, node.worldRotation, rot_1);
            Quat.invert(rot_0, cb.node.worldRotation);
            Quat.multiply(rot_1, rot_0, rot_1);
          } else {
            // offset of axis in local frame of bodyB
            Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
            Vec3.transformQuat(v3_0, v3_0, node.worldRotation);
            Vec3.add(v3_0, v3_0, node.worldPosition);
            // rotation of axis in local frame of bodyB
            Quat.multiply(rot_1, node.worldRotation, rot_1);
          }
          cocos2BulletVec3(bt.Transform_getOrigin(trans1), v3_0);
          cocos2BulletQuat(quat, rot_1);
          bt.Transform_setRotation(trans1, quat);
          bt.HingeConstraint_setFrames(this._impl, trans0, trans1);
        };
        _proto.updateScale0 = function updateScale0() {
          this.updateFrames();
        };
        _proto.updateScale1 = function updateScale1() {
          this.updateFrames();
        };
        _createClass(BulletHingeConstraint, [{
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return BulletHingeConstraint;
      }(BulletConstraint));
    }
  };
});