System.register("q-bundled:///fs/cocos/physics/cannon/cannon-contact-equation.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Quat, Vec3, quat, CannonContactEquation;
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
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }],
    execute: function () {
      quat = new Quat();
      _export("CannonContactEquation", CannonContactEquation = /*#__PURE__*/function () {
        function CannonContactEquation(event) {
          this.impl = null;
          this.event = void 0;
          this.event = event;
        }
        var _proto = CannonContactEquation.prototype;
        _proto.getLocalPointOnA = function getLocalPointOnA(out) {
          if (this.impl) Vec3.copy(out, this.impl.rj);
        };
        _proto.getLocalPointOnB = function getLocalPointOnB(out) {
          if (this.impl) Vec3.copy(out, this.impl.ri);
        };
        _proto.getWorldPointOnA = function getWorldPointOnA(out) {
          if (this.impl) Vec3.add(out, this.impl.rj, this.impl.bj.position);
        };
        _proto.getWorldPointOnB = function getWorldPointOnB(out) {
          if (this.impl) Vec3.add(out, this.impl.ri, this.impl.bi.position);
        };
        _proto.getLocalNormalOnA = function getLocalNormalOnA(out) {
          if (this.impl) {
            this.getWorldNormalOnA(out);
            Quat.conjugate(quat, this.impl.bi.quaternion);
            Vec3.transformQuat(out, out, quat);
          }
        };
        _proto.getLocalNormalOnB = function getLocalNormalOnB(out) {
          if (this.impl) {
            Quat.conjugate(quat, this.impl.bj.quaternion);
            Vec3.transformQuat(out, this.impl.ni, quat);
          }
        };
        _proto.getWorldNormalOnA = function getWorldNormalOnA(out) {
          if (this.impl) {
            this.getWorldNormalOnB(out);
            if (!this.isBodyA) Vec3.negate(out, out);
          }
        };
        _proto.getWorldNormalOnB = function getWorldNormalOnB(out) {
          if (this.impl) Vec3.copy(out, this.impl.ni);
        };
        _createClass(CannonContactEquation, [{
          key: "isBodyA",
          get: function get() {
            if (this.impl) {
              var si = this.event.selfCollider.shape.impl;
              var bj = this.impl.bj;
              return si.body.id === bj.id;
            }
            return false;
          }
        }]);
        return CannonContactEquation;
      }());
    }
  };
});