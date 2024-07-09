System.register("q-bundled:///fs/cocos/physics/physx/shapes/physx-trimesh-shape.js", ["../../../core/index.js", "../physx-adapter.js", "./physx-shape.js", "../physx-instance.js"], function (_export, _context) {
  "use strict";

  var Quat, Vec3, addReference, createConvexMesh, createMeshGeometryFlags, createTriangleMesh, PX, removeReference, EPhysXShapeType, PhysXShape, PhysXInstance, PhysXTrimeshShape;
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
      addReference = _physxAdapterJs.addReference;
      createConvexMesh = _physxAdapterJs.createConvexMesh;
      createMeshGeometryFlags = _physxAdapterJs.createMeshGeometryFlags;
      createTriangleMesh = _physxAdapterJs.createTriangleMesh;
      PX = _physxAdapterJs.PX;
      removeReference = _physxAdapterJs.removeReference;
    }, function (_physxShapeJs) {
      EPhysXShapeType = _physxShapeJs.EPhysXShapeType;
      PhysXShape = _physxShapeJs.PhysXShape;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }],
    execute: function () {
      _export("PhysXTrimeshShape", PhysXTrimeshShape = /*#__PURE__*/function (_PhysXShape) {
        _inheritsLoose(PhysXTrimeshShape, _PhysXShape);
        function PhysXTrimeshShape() {
          var _this;
          _this = _PhysXShape.call(this, EPhysXShapeType.MESH) || this;
          _this.geometry = void 0;
          return _this;
        }
        var _proto = PhysXTrimeshShape.prototype;
        _proto.setMesh = function setMesh(v) {
          if (v && v.renderingSubMeshes.length > 0) {
            if (this._impl != null) {
              this.removeFromBody();
              removeReference(this, this._impl);
              this._impl.release();
              this._impl = null;
            }
            var physics = PhysXInstance.physics;
            var collider = this.collider;
            var pxmat = this.getSharedMaterial(collider.sharedMaterial);
            var meshScale = PhysXShape.MESH_SCALE;
            meshScale.setScale(Vec3.ONE);
            meshScale.setRotation(Quat.IDENTITY);
            var posBuf = v.renderingSubMeshes[0].geometricInfo.positions;
            var indBuf = v.renderingSubMeshes[0].geometricInfo.indices;
            if (indBuf instanceof Uint16Array) {
              indBuf = new Uint32Array(indBuf);
            }
            if (indBuf instanceof Uint8Array) {
              indBuf = new Uint32Array(indBuf);
            }
            if (collider.convex || indBuf === undefined) {
              if (PX.MESH_CONVEX[v._uuid] == null) {
                var cooking = PhysXInstance.cooking;
                PX.MESH_CONVEX[v._uuid] = createConvexMesh(posBuf, cooking, physics);
              }
              var convexMesh = PX.MESH_CONVEX[v._uuid];
              this.geometry = new PX.ConvexMeshGeometry(convexMesh, meshScale, createMeshGeometryFlags(0, true));
            } else {
              if (PX.MESH_STATIC[v._uuid] == null) {
                var _cooking = PhysXInstance.cooking;
                PX.MESH_STATIC[v._uuid] = createTriangleMesh(posBuf, indBuf, _cooking, physics);
              }
              var trimesh = PX.MESH_STATIC[v._uuid];
              this.geometry = new PX.TriangleMeshGeometry(trimesh, meshScale, createMeshGeometryFlags(0, false));
            }
            this.updateGeometry();
            this._impl = physics.createShape(this.geometry, pxmat, true, this._flags);
            this.addToBody();
            addReference(this, this._impl); //in case setMesh is called after initialization
          }
        };
        _proto.onComponentSet = function onComponentSet() {
          this.setMesh(this.collider.mesh);
        };
        _proto.updateScale = function updateScale() {
          this.updateGeometry();
          this.setCenter(this._collider.center);
        };
        _proto.updateGeometry = function updateGeometry() {
          var meshScale = PhysXShape.MESH_SCALE;
          meshScale.setScale(this.collider.node.worldScale);
          meshScale.setRotation(Quat.IDENTITY);
          this.geometry.setScale(meshScale);
        }

        /* override */;
        _proto.setMaterial = function setMaterial(v) {
          if (this._impl) _PhysXShape.prototype.setMaterial.call(this, v);
        };
        _proto.setCenter = function setCenter(v) {
          if (this._impl) _PhysXShape.prototype.setCenter.call(this, v);
        };
        _proto.setAsTrigger = function setAsTrigger(v) {
          if (this._impl) _PhysXShape.prototype.setAsTrigger.call(this, v);
        };
        _proto.setFilerData = function setFilerData(v) {
          if (this._impl) _PhysXShape.prototype.setFilerData.call(this, v);
        };
        _proto.addToBody = function addToBody() {
          if (this._impl) _PhysXShape.prototype.addToBody.call(this);
        };
        _proto.removeFromBody = function removeFromBody() {
          if (this._impl) _PhysXShape.prototype.removeFromBody.call(this);
        };
        _createClass(PhysXTrimeshShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return PhysXTrimeshShape;
      }(PhysXShape));
    }
  };
});