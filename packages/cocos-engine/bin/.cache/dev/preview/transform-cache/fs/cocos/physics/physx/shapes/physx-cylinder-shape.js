System.register("q-bundled:///fs/cocos/physics/physx/shapes/physx-cylinder-shape.js", ["../../../core/index.js", "../../../primitive/cylinder.js", "../../framework/index.js", "../physx-adapter.js", "../physx-instance.js", "./physx-shape.js"], function (_export, _context) {
  "use strict";

  var Quat, Vec3, cylinder, EAxisDirection, createConvexMesh, createMeshGeometryFlags, PX, _trans, PhysXInstance, EPhysXShapeType, PhysXShape, PhysXCylinderShape;
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
    }, function (_primitiveCylinderJs) {
      cylinder = _primitiveCylinderJs.default;
    }, function (_frameworkIndexJs) {
      EAxisDirection = _frameworkIndexJs.EAxisDirection;
    }, function (_physxAdapterJs) {
      createConvexMesh = _physxAdapterJs.createConvexMesh;
      createMeshGeometryFlags = _physxAdapterJs.createMeshGeometryFlags;
      PX = _physxAdapterJs.PX;
      _trans = _physxAdapterJs._trans;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }, function (_physxShapeJs) {
      EPhysXShapeType = _physxShapeJs.EPhysXShapeType;
      PhysXShape = _physxShapeJs.PhysXShape;
    }],
    execute: function () {
      _export("PhysXCylinderShape", PhysXCylinderShape = /*#__PURE__*/function (_PhysXShape) {
        _inheritsLoose(PhysXCylinderShape, _PhysXShape);
        function PhysXCylinderShape() {
          var _this;
          _this = _PhysXShape.call(this, EPhysXShapeType.CYLINDER) || this;
          _this.geometry = void 0;
          return _this;
        }
        var _proto = PhysXCylinderShape.prototype;
        _proto.setRadius = function setRadius(v) {
          this.updateGeometry();
        };
        _proto.setHeight = function setHeight(v) {
          this.updateGeometry();
        };
        _proto.setDirection = function setDirection(v) {
          this.updateGeometry();
        };
        _proto.onComponentSet = function onComponentSet() {
          var collider = this.collider;
          var physics = PhysXInstance.physics;
          if (!PhysXCylinderShape.CONVEX_MESH) {
            var cooking = PhysXInstance.cooking;
            var primitive = cylinder(0.5, 0.5, 2, {
              radialSegments: 32,
              heightSegments: 1
            });
            PhysXCylinderShape.CONVEX_MESH = createConvexMesh(primitive.positions, cooking, physics);
          }
          var meshScale = PhysXShape.MESH_SCALE;
          meshScale.setScale(Vec3.ONE);
          meshScale.setRotation(Quat.IDENTITY);
          var convexMesh = PhysXCylinderShape.CONVEX_MESH;
          var pxmat = this.getSharedMaterial(collider.sharedMaterial);
          this.geometry = new PX.ConvexMeshGeometry(convexMesh, meshScale, createMeshGeometryFlags(0, true));
          this.updateGeometry();
          this._impl = physics.createShape(this.geometry, pxmat, true, this._flags);
        };
        _proto.updateScale = function updateScale() {
          this.updateGeometry();
          this.setCenter(this._collider.center);
        };
        _proto.updateGeometry = function updateGeometry() {
          var collider = this.collider;
          var r = collider.radius;
          var h = collider.height;
          var a = collider.direction;
          var scale = _trans.translation;
          Vec3.copy(scale, collider.node.worldScale);
          scale.y *= Math.max(0.0001, h / 2);
          var radius = Math.max(0.0001, r / 0.5);
          var xzMaxNorm = Math.max(scale.x, scale.z);
          scale.x = scale.z = xzMaxNorm * radius;
          var quat = _trans.rotation;
          switch (a) {
            case EAxisDirection.X_AXIS:
              Quat.fromEuler(quat, 0, 0, 90);
              break;
            case EAxisDirection.Y_AXIS:
            default:
              Quat.copy(quat, Quat.IDENTITY);
              break;
            case EAxisDirection.Z_AXIS:
              Quat.fromEuler(quat, 90, 0, 0);
              break;
          }
          var meshScale = PhysXShape.MESH_SCALE;
          meshScale.setScale(scale);
          meshScale.setRotation(quat);
          this.geometry.setScale(meshScale);
          Quat.copy(this._rotation, quat);
        };
        _createClass(PhysXCylinderShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return PhysXCylinderShape;
      }(PhysXShape));
      PhysXCylinderShape.CONVEX_MESH = void 0;
    }
  };
});