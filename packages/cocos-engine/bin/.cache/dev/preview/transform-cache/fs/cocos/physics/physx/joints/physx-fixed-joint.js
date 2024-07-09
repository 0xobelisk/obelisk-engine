System.register("q-bundled:///fs/cocos/physics/physx/joints/physx-fixed-joint.js", ["../../../core/index.js", "../physx-adapter.js", "./physx-joint.js"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, Mat4, PX, getTempTransform, _pxtrans, PhysXJoint, v3_0, quat_0, mat_0, PhysXFixedJoint;
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
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
      Mat4 = _coreIndexJs.Mat4;
    }, function (_physxAdapterJs) {
      PX = _physxAdapterJs.PX;
      getTempTransform = _physxAdapterJs.getTempTransform;
      _pxtrans = _physxAdapterJs._pxtrans;
    }, function (_physxJointJs) {
      PhysXJoint = _physxJointJs.PhysXJoint;
    }],
    execute: function () {
      v3_0 = new Vec3();
      quat_0 = new Quat();
      mat_0 = new Mat4();
      _export("PhysXFixedJoint", PhysXFixedJoint = /*#__PURE__*/function (_PhysXJoint) {
        _inheritsLoose(PhysXFixedJoint, _PhysXJoint);
        function PhysXFixedJoint() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PhysXJoint.call.apply(_PhysXJoint, [this].concat(args)) || this;
          _this._breakForce = 0;
          _this._breakTorque = 0;
          return _this;
        }
        var _proto = PhysXFixedJoint.prototype;
        _proto.setBreakForce = function setBreakForce(v) {
          this._breakForce = this.constraint.breakForce;
          this._impl.setBreakForce(this._breakForce, this._breakTorque);
        };
        _proto.setBreakTorque = function setBreakTorque(v) {
          this._breakTorque = this.constraint.breakTorque;
          this._impl.setBreakForce(this._breakForce, this._breakTorque);
        };
        _proto.onComponentSet = function onComponentSet() {
          this._impl = PX.createFixedConstraint(PhysXJoint.tempActor, _pxtrans, null, _pxtrans);
          this.setBreakForce(this.constraint.breakForce);
          this.setBreakTorque(this.constraint.breakTorque);
          this.updateFrame();
          this.enableDebugVisualization(true);
        };
        _proto.updateFrame = function updateFrame() {
          var bodyA = this._rigidBody.body.sharedBody;
          var cb = this.constraint.connectedBody;
          Mat4.fromRT(mat_0, bodyA.node.worldRotation, bodyA.node.worldPosition);
          Mat4.invert(mat_0, mat_0);
          Mat4.getRotation(quat_0, mat_0);
          Mat4.getTranslation(v3_0, mat_0);
          this._impl.setLocalPose(0, getTempTransform(v3_0, quat_0));
          if (cb) {
            var bodyB = cb.body.sharedBody;
            Mat4.fromRT(mat_0, bodyB.node.worldRotation, bodyB.node.worldPosition);
            Mat4.invert(mat_0, mat_0);
            Mat4.getRotation(quat_0, mat_0);
            Mat4.getTranslation(v3_0, mat_0);
            this._impl.setLocalPose(1, getTempTransform(v3_0, quat_0));
          } else {
            this._impl.setLocalPose(1, getTempTransform(Vec3.ZERO, Quat.IDENTITY));
          }
        };
        _proto.updateScale0 = function updateScale0() {
          this.updateFrame();
        };
        _proto.updateScale1 = function updateScale1() {
          this.updateFrame();
        };
        _createClass(PhysXFixedJoint, [{
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return PhysXFixedJoint;
      }(PhysXJoint));
    }
  };
});