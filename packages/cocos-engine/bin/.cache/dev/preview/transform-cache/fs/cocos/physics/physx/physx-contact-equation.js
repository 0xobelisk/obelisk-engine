System.register("q-bundled:///fs/cocos/physics/physx/physx-contact-equation.js", ["../../core/index.js", "./physx-adapter.js"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, getContactNormal, getContactPosition, quat, PhysXContactEquation;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    }, function (_physxAdapterJs) {
      getContactNormal = _physxAdapterJs.getContactNormal;
      getContactPosition = _physxAdapterJs.getContactPosition;
    }],
    execute: function () {
      quat = new Quat();
      _export("PhysXContactEquation", PhysXContactEquation = /*#__PURE__*/function () {
        function PhysXContactEquation(event) {
          this.impl = null;
          this.event = void 0;
          this.colliderA = void 0;
          this.colliderB = void 0;
          this.event = event;
        }
        var _proto = PhysXContactEquation.prototype;
        _proto.getLocalPointOnA = function getLocalPointOnA(out) {
          getContactPosition(this.impl, out, this.event.impl);
          Vec3.subtract(out, out, this.colliderA.node.worldPosition);
        };
        _proto.getLocalPointOnB = function getLocalPointOnB(out) {
          getContactPosition(this.impl, out, this.event.impl);
          Vec3.subtract(out, out, this.colliderB.node.worldPosition);
        };
        _proto.getWorldPointOnA = function getWorldPointOnA(out) {
          getContactPosition(this.impl, out, this.event.impl);
        };
        _proto.getWorldPointOnB = function getWorldPointOnB(out) {
          getContactPosition(this.impl, out, this.event.impl);
        };
        _proto.getLocalNormalOnA = function getLocalNormalOnA(out) {
          this.getWorldNormalOnA(out);
          Quat.conjugate(quat, this.colliderA.node.worldRotation);
          Vec3.transformQuat(out, out, quat);
        };
        _proto.getLocalNormalOnB = function getLocalNormalOnB(out) {
          this.getWorldNormalOnB(out);
          Quat.conjugate(quat, this.colliderB.node.worldRotation);
          Vec3.transformQuat(out, out, quat);
        };
        _proto.getWorldNormalOnA = function getWorldNormalOnA(out) {
          getContactNormal(this.impl, out, this.event.impl);
          if (!this.isBodyA) Vec3.negate(out, out);
        };
        _proto.getWorldNormalOnB = function getWorldNormalOnB(out) {
          getContactNormal(this.impl, out, this.event.impl);
        };
        _createClass(PhysXContactEquation, [{
          key: "isBodyA",
          get: function get() {
            return this.colliderA.uuid === this.event.selfCollider.uuid;
          }
        }]);
        return PhysXContactEquation;
      }());
    }
  };
});