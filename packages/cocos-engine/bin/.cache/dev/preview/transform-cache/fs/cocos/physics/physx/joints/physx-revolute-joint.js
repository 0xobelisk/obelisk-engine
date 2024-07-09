System.register("q-bundled:///fs/cocos/physics/physx/joints/physx-revolute-joint.js", ["../../../core/index.js", "../physx-adapter.js", "./physx-joint.js", "../../../core/math/index.js"], function (_export, _context) {
  "use strict";

  var Mat4, Quat, Vec3, getTempTransform, PX, _pxtrans, _trans, PhysXJoint, toRadian, v3_0, v3_1, v3_2, quat_0, mat_0, PhysXRevoluteJoint;
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
                                                                                                                                                                                                           */
  return {
    setters: [function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_physxAdapterJs) {
      getTempTransform = _physxAdapterJs.getTempTransform;
      PX = _physxAdapterJs.PX;
      _pxtrans = _physxAdapterJs._pxtrans;
      _trans = _physxAdapterJs._trans;
    }, function (_physxJointJs) {
      PhysXJoint = _physxJointJs.PhysXJoint;
    }, function (_coreMathIndexJs) {
      toRadian = _coreMathIndexJs.toRadian;
    }],
    execute: function () {
      v3_0 = new Vec3();
      v3_1 = new Vec3();
      v3_2 = new Vec3();
      quat_0 = new Quat();
      mat_0 = new Mat4();
      _export("PhysXRevoluteJoint", PhysXRevoluteJoint = /*#__PURE__*/function (_PhysXJoint) {
        _inheritsLoose(PhysXRevoluteJoint, _PhysXJoint);
        function PhysXRevoluteJoint() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PhysXJoint.call.apply(_PhysXJoint, [this].concat(args)) || this;
          _this._limitPair = new PX.PxJointAngularLimitPair(0, 0);
          return _this;
        }
        var _proto = PhysXRevoluteJoint.prototype;
        _proto.setLimitEnabled = function setLimitEnabled(v) {
          this._impl.setRevoluteJointFlag(PX.RevoluteJointFlags.eLIMIT_ENABLED, v);
          if (v) {
            this._impl.setLimit(this._limitPair);
          }
        };
        _proto.setLowerLimit = function setLowerLimit(min) {
          this._limitPair.lower = toRadian(this.constraint.lowerLimit);
          if (this.constraint.limitEnabled) {
            this._impl.setLimit(this._limitPair);
          }
        };
        _proto.setUpperLimit = function setUpperLimit(max) {
          this._limitPair.upper = toRadian(this.constraint.upperLimit);
          if (this.constraint.limitEnabled) {
            this._impl.setLimit(this._limitPair);
          }
        };
        _proto.setMotorEnabled = function setMotorEnabled(v) {
          this._impl.setRevoluteJointFlag(PX.RevoluteJointFlags.eDRIVE_ENABLED, v);
          if (v) {
            this._impl.setDriveVelocity(this.constraint.motorVelocity / 60.0, true);
            this._impl.setDriveForceLimit(this.constraint.motorForceLimit);
          }
        };
        _proto.setMotorVelocity = function setMotorVelocity(v) {
          if (this.constraint.motorEnabled) {
            this._impl.setDriveVelocity(v / 60.0, true);
          }
        };
        _proto.setMotorForceLimit = function setMotorForceLimit(v) {
          if (this.constraint.motorEnabled) {
            this._impl.setDriveForceLimit(v);
          }
        };
        _proto.setPivotA = function setPivotA(v) {
          this.updateFrames();
        };
        _proto.setPivotB = function setPivotB(v) {
          this.updateFrames();
        };
        _proto.setAxis = function setAxis(v) {
          this.updateFrames();
        };
        _proto.onComponentSet = function onComponentSet() {
          this._impl = PX.createRevoluteJoint(PhysXJoint.tempActor, _pxtrans, null, _pxtrans);
          this._limitPair.stiffness = 0;
          this._limitPair.damping = 0;
          this._limitPair.restitution = 0.4;
          this._limitPair.contactDistance = 0.01;
          this._impl.setConstraintFlag(6, true); // enable projection for both bodies
          this._impl.setConstraintFlag(32, true); // enable force limit
          this._impl.setProjectionAngularTolerance(0.2);
          this._impl.setProjectionLinearTolerance(0.2);
          this.setPivotA(this.constraint.pivotA);
          this.setPivotB(this.constraint.pivotB);
          this.setLimitEnabled(this.constraint.limitEnabled);
          this.setMotorEnabled(this.constraint.motorEnabled);
          this.setLowerLimit(this.constraint.lowerLimit);
          this.setUpperLimit(this.constraint.upperLimit);
          this.setMotorVelocity(this.constraint.motorVelocity);
          this.setMotorForceLimit(this.constraint.motorForceLimit);
          this.updateFrames();
          this.enableDebugVisualization(true);
        };
        _proto.updateFrames = function updateFrames() {
          var cs = this.constraint;
          var cb = cs.connectedBody;
          var pos = _trans.translation;
          var rot = _trans.rotation;
          var node = cs.node;
          Vec3.normalize(v3_0, cs.axis);
          Vec3.cross(v3_2, v3_0, Vec3.UNIT_Y); // z
          if (Vec3.len(v3_2) < 0.0001) {
            Vec3.cross(v3_1, Vec3.UNIT_Z, v3_0); // y
            Vec3.cross(v3_2, v3_0, v3_1); // z
          } else {
            Vec3.cross(v3_1, v3_2, v3_0); // y
          }

          Vec3.normalize(v3_1, v3_1);
          Vec3.normalize(v3_2, v3_2);
          mat_0.set(v3_0.x, v3_0.y, v3_0.z, 0,
          // x
          v3_1.x, v3_1.y, v3_1.z, 0,
          // y
          v3_2.x, v3_2.y, v3_2.z, 0,
          // z
          0, 0, 0, 1);
          mat_0.getRotation(quat_0);
          Vec3.multiply(pos, cs.node.worldScale, cs.pivotA);
          this._impl.setLocalPose(0, getTempTransform(pos, quat_0));
          if (cb) {
            // orientation of axis in local space of body1
            Quat.multiply(quat_0, node.worldRotation, quat_0);
            Quat.invert(rot, cb.node.worldRotation);
            Quat.multiply(quat_0, rot, quat_0);
            // position in local space body0
            Vec3.multiply(pos, cb.node.worldScale, cs.pivotB);
          } else {
            // orientation of axis in local space of body1
            Quat.multiply(quat_0, node.worldRotation, quat_0);
            // position in world space
            Vec3.multiply(pos, node.worldScale, cs.pivotA);
            Vec3.transformQuat(pos, pos, node.worldRotation);
            Vec3.add(pos, pos, node.worldPosition);
          }
          this._impl.setLocalPose(1, getTempTransform(pos, quat_0));
        };
        _proto.updateScale0 = function updateScale0() {
          this.updateFrames();
        };
        _proto.updateScale1 = function updateScale1() {
          this.updateFrames();
        };
        _createClass(PhysXRevoluteJoint, [{
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return PhysXRevoluteJoint;
      }(PhysXJoint));
    }
  };
});