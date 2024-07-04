System.register("q-bundled:///fs/cocos/physics-2d/box2d/joints/hinge-joint.js", ["@cocos/box2d", "./joint-2d.js", "../../framework/physics-types.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var b2, b2Joint, PHYSICS_2D_PTM_RATIO, toRadian, b2HingeJoint;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
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
    setters: [function (_cocosBox2d) {
      b2 = _cocosBox2d.default;
    }, function (_joint2dJs) {
      b2Joint = _joint2dJs.b2Joint;
    }, function (_frameworkPhysicsTypesJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkPhysicsTypesJs.PHYSICS_2D_PTM_RATIO;
    }, function (_coreIndexJs) {
      toRadian = _coreIndexJs.toRadian;
    }],
    execute: function () {
      _export("b2HingeJoint", b2HingeJoint = /*#__PURE__*/function (_b2Joint) {
        _inheritsLoose(b2HingeJoint, _b2Joint);
        function b2HingeJoint() {
          return _b2Joint.apply(this, arguments) || this;
        }
        var _proto = b2HingeJoint.prototype;
        _proto.enableLimit = function enableLimit(v) {
          if (this._b2joint) {
            this._b2joint.EnableLimit(v);
          }
        };
        _proto.setLowerAngle = function setLowerAngle(v) {
          this.updateLimits();
        };
        _proto.setUpperAngle = function setUpperAngle(v) {
          this.updateLimits();
        };
        _proto.updateLimits = function updateLimits() {
          if (this._b2joint) {
            var comp = this._jointComp;
            this._b2joint.SetLimits(toRadian(comp.lowerAngle), toRadian(comp.upperAngle));
          }
        }

        // motor
        ;
        _proto.enableMotor = function enableMotor(v) {
          if (this._b2joint) {
            this._b2joint.EnableMotor(v);
          }
        };
        _proto.setMaxMotorTorque = function setMaxMotorTorque(v) {
          if (this._b2joint) {
            this._b2joint.SetMaxMotorTorque(v);
          }
        };
        _proto.setMotorSpeed = function setMotorSpeed(v) {
          if (this._b2joint) {
            this._b2joint.SetMotorSpeed(v);
          }
        };
        _proto._createJointDef = function _createJointDef() {
          var comp = this._jointComp;
          var def = new b2.RevoluteJointDef();
          def.localAnchorA.Set(comp.anchor.x / PHYSICS_2D_PTM_RATIO, comp.anchor.y / PHYSICS_2D_PTM_RATIO);
          def.localAnchorB.Set(comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO, comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO);
          def.enableMotor = comp.enableMotor;
          def.maxMotorTorque = comp.maxMotorTorque;
          def.motorSpeed = toRadian(comp.motorSpeed);
          def.enableLimit = comp.enableLimit;
          def.lowerAngle = toRadian(comp.lowerAngle);
          def.upperAngle = toRadian(comp.upperAngle);
          return def;
        };
        return b2HingeJoint;
      }(b2Joint));
    }
  };
});