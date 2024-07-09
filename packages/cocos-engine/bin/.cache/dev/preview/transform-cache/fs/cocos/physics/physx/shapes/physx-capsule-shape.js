System.register("q-bundled:///fs/cocos/physics/physx/shapes/physx-capsule-shape.js", ["../../../core/index.js", "../../framework/index.js", "../physx-adapter.js", "../physx-instance.js", "./physx-shape.js"], function (_export, _context) {
  "use strict";

  var absMax, Quat, EAxisDirection, PX, PhysXInstance, EPhysXShapeType, PhysXShape, PhysXCapsuleShape;
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
      absMax = _coreIndexJs.absMax;
      Quat = _coreIndexJs.Quat;
    }, function (_frameworkIndexJs) {
      EAxisDirection = _frameworkIndexJs.EAxisDirection;
    }, function (_physxAdapterJs) {
      PX = _physxAdapterJs.PX;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }, function (_physxShapeJs) {
      EPhysXShapeType = _physxShapeJs.EPhysXShapeType;
      PhysXShape = _physxShapeJs.PhysXShape;
    }],
    execute: function () {
      _export("PhysXCapsuleShape", PhysXCapsuleShape = /*#__PURE__*/function (_PhysXShape) {
        _inheritsLoose(PhysXCapsuleShape, _PhysXShape);
        function PhysXCapsuleShape() {
          var _this;
          _this = _PhysXShape.call(this, EPhysXShapeType.CAPSULE) || this;
          if (!PhysXCapsuleShape.CAPSULE_GEOMETRY) {
            PhysXCapsuleShape.CAPSULE_GEOMETRY = new PX.CapsuleGeometry(0.5, 0.5);
          }
          return _this;
        }
        var _proto = PhysXCapsuleShape.prototype;
        _proto.setCylinderHeight = function setCylinderHeight(v) {
          this.updateScale();
        };
        _proto.setDirection = function setDirection(v) {
          this.updateScale();
        };
        _proto.setRadius = function setRadius(v) {
          this.updateScale();
        };
        _proto.onComponentSet = function onComponentSet() {
          this.updateGeometry();
          var pxmat = this.getSharedMaterial(this._collider.sharedMaterial);
          this._impl = PhysXInstance.physics.createShape(PhysXCapsuleShape.CAPSULE_GEOMETRY, pxmat, true, this._flags);
        };
        _proto.updateScale = function updateScale() {
          this.updateGeometry();
          this._impl.setGeometry(PhysXCapsuleShape.CAPSULE_GEOMETRY);
          this.setCenter(this._collider.center);
        };
        _proto.updateGeometry = function updateGeometry() {
          var co = this.collider;
          var ws = co.node.worldScale;
          var upAxis = co.direction;
          var r = 0.5;
          var hf = 0.5;
          if (upAxis === EAxisDirection.Y_AXIS) {
            r = co.radius * Math.abs(absMax(ws.x, ws.z));
            hf = co.cylinderHeight / 2 * Math.abs(ws.y);
            Quat.fromEuler(this._rotation, 0, 0, 90);
          } else if (upAxis === EAxisDirection.X_AXIS) {
            r = co.radius * Math.abs(absMax(ws.y, ws.z));
            hf = co.cylinderHeight / 2 * Math.abs(ws.x);
            Quat.fromEuler(this._rotation, 0, 0, 0);
          } else {
            r = co.radius * Math.abs(absMax(ws.x, ws.y));
            hf = co.cylinderHeight / 2 * Math.abs(ws.z);
            Quat.fromEuler(this._rotation, 0, 90, 0);
          }
          PhysXCapsuleShape.CAPSULE_GEOMETRY.setRadius(Math.max(0.0001, r));
          PhysXCapsuleShape.CAPSULE_GEOMETRY.setHalfHeight(Math.max(0.0001, hf));
        };
        _createClass(PhysXCapsuleShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return PhysXCapsuleShape;
      }(PhysXShape));
      PhysXCapsuleShape.CAPSULE_GEOMETRY = void 0;
    }
  };
});