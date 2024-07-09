System.register("q-bundled:///fs/cocos/physics/physx/joints/physx-spherical-joint.js", ["../../../core/index.js", "../physx-adapter.js", "./physx-joint.js"], function (_export, _context) {
  "use strict";

  var Quat, Vec3, PX, _trans, getTempTransform, _pxtrans, PhysXJoint, PhysXSphericalJoint;
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
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_physxAdapterJs) {
      PX = _physxAdapterJs.PX;
      _trans = _physxAdapterJs._trans;
      getTempTransform = _physxAdapterJs.getTempTransform;
      _pxtrans = _physxAdapterJs._pxtrans;
    }, function (_physxJointJs) {
      PhysXJoint = _physxJointJs.PhysXJoint;
    }],
    execute: function () {
      _export("PhysXSphericalJoint", PhysXSphericalJoint = /*#__PURE__*/function (_PhysXJoint) {
        _inheritsLoose(PhysXSphericalJoint, _PhysXJoint);
        function PhysXSphericalJoint() {
          return _PhysXJoint.apply(this, arguments) || this;
        }
        var _proto = PhysXSphericalJoint.prototype;
        _proto.setPivotA = function setPivotA(v) {
          var cs = this.constraint;
          var pos = _trans.translation;
          var rot = _trans.rotation;
          Vec3.multiply(pos, cs.node.worldScale, cs.pivotA);
          Quat.copy(rot, Quat.IDENTITY);
          this._impl.setLocalPose(0, getTempTransform(pos, rot));
          if (!cs.connectedBody) this.setPivotB(cs.pivotB);
        };
        _proto.setPivotB = function setPivotB(v) {
          var cs = this.constraint;
          var cb = cs.connectedBody;
          var pos = _trans.translation;
          var rot = _trans.rotation;
          Vec3.copy(pos, cs.pivotB);
          Quat.copy(rot, Quat.IDENTITY);
          if (cb) {
            Vec3.multiply(pos, cb.node.worldScale, cs.pivotB);
          } else {
            var node = cs.node;
            Vec3.multiply(pos, node.worldScale, cs.pivotA);
            Vec3.transformQuat(pos, pos, node.worldRotation);
            Vec3.add(pos, pos, node.worldPosition);
            Quat.multiply(rot, rot, node.worldRotation);
          }
          this._impl.setLocalPose(1, getTempTransform(pos, rot));
        };
        _proto.onComponentSet = function onComponentSet() {
          this._impl = PX.createSphericalJoint(PhysXJoint.tempActor, _pxtrans, null, _pxtrans);
          this.setPivotA(this.constraint.pivotA);
          this.setPivotB(this.constraint.pivotB);
          this.enableDebugVisualization(true);
        };
        _proto.updateScale0 = function updateScale0() {
          this.setPivotA(this.constraint.pivotA);
        };
        _proto.updateScale1 = function updateScale1() {
          this.setPivotB(this.constraint.pivotB);
        };
        _createClass(PhysXSphericalJoint, [{
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return PhysXSphericalJoint;
      }(PhysXJoint));
    }
  };
});