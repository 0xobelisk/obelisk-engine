System.register("q-bundled:///fs/cocos/physics/cannon/constraints/cannon-hinge-constraint.js", ["@cocos/cannon", "./cannon-constraint.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var CANNON, CannonConstraint, Vec3, Quat, warnID, v3_0, quat_0, CannonHingeConstraint;
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
    setters: [function (_cocosCannon) {
      CANNON = _cocosCannon.default;
    }, function (_cannonConstraintJs) {
      CannonConstraint = _cannonConstraintJs.CannonConstraint;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
      warnID = _coreIndexJs.warnID;
    }],
    execute: function () {
      v3_0 = new Vec3();
      quat_0 = new Quat();
      _export("CannonHingeConstraint", CannonHingeConstraint = /*#__PURE__*/function (_CannonConstraint) {
        _inheritsLoose(CannonHingeConstraint, _CannonConstraint);
        function CannonHingeConstraint() {
          return _CannonConstraint.apply(this, arguments) || this;
        }
        var _proto = CannonHingeConstraint.prototype;
        _proto.setPivotA = function setPivotA(v) {
          var cs = this.constraint;
          Vec3.multiply(this.impl.pivotA, this.constraint.node.worldScale, cs.pivotA);
          if (!cs.connectedBody) this.setPivotB(cs.pivotB);
        };
        _proto.setPivotB = function setPivotB(v) {
          var cs = this.constraint;
          var cb = cs.connectedBody;
          if (cb) {
            Vec3.multiply(this.impl.pivotB, cb.node.worldScale, cs.pivotB);
          } else {
            var node = this.constraint.node;
            Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
            Vec3.transformQuat(v3_0, v3_0, node.worldRotation);
            Vec3.add(v3_0, v3_0, node.worldPosition);
            Vec3.copy(this.impl.pivotB, v3_0);
          }
        };
        _proto.setAxis = function setAxis(v) {
          var equations = this.impl.equations;
          Vec3.copy(this.impl.axisA, v);
          Vec3.copy(equations[3].axisA, v);
          Vec3.copy(equations[4].axisA, v);
          Vec3.copy(equations[5].axisA, v);
          if (this.constraint.connectedBody) {
            Vec3.transformQuat(this.impl.axisB, v, this.constraint.node.worldRotation);
            Quat.invert(quat_0, this.constraint.connectedBody.node.worldRotation);
            Vec3.transformQuat(this.impl.axisB, this.impl.axisB, quat_0);
            Vec3.copy(equations[3].axisB, this.impl.axisB);
            Vec3.copy(equations[4].axisB, this.impl.axisB);
            Vec3.copy(equations[5].axisB, this.impl.axisB);
          } else {
            Vec3.transformQuat(this.impl.axisB, v, this.constraint.node.worldRotation);
            Vec3.copy(equations[3].axisB, this.impl.axisB);
            Vec3.copy(equations[4].axisB, this.impl.axisB);
            Vec3.copy(equations[5].axisB, this.impl.axisB);
          }
        };
        _proto.setLimitEnabled = function setLimitEnabled(v) {
          warnID(9613);
        };
        _proto.setLowerLimit = function setLowerLimit(min) {
          warnID(9613);
        };
        _proto.setUpperLimit = function setUpperLimit(max) {
          warnID(9613);
        };
        _proto.setMotorEnabled = function setMotorEnabled(v) {
          warnID(9613);
        };
        _proto.setMotorVelocity = function setMotorVelocity(v) {
          warnID(9613);
        };
        _proto.setMotorForceLimit = function setMotorForceLimit(v) {
          warnID(9613);
        };
        _proto.onComponentSet = function onComponentSet() {
          var bodyA = this._rigidBody.body.impl;
          var cb = this.constraint.connectedBody;
          var bodyB = CANNON.World.staticBody;
          if (cb) {
            bodyB = cb.body.impl;
          }
          this._impl = new CANNON.HingeConstraint(bodyA, bodyB);
          this.setPivotA(this.constraint.pivotA);
          this.setPivotB(this.constraint.pivotB);
          this.setAxis(this.constraint.axis);
        };
        _proto.updateScale0 = function updateScale0() {
          this.setPivotA(this.constraint.pivotA);
        };
        _proto.updateScale1 = function updateScale1() {
          this.setPivotB(this.constraint.pivotB);
        };
        _createClass(CannonHingeConstraint, [{
          key: "impl",
          get: function get() {
            return this._impl;
          }
        }, {
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return CannonHingeConstraint;
      }(CannonConstraint));
    }
  };
});