System.register("q-bundled:///fs/cocos/physics/cannon/shapes/cannon-trimesh-shape.js", ["@cocos/cannon", "./cannon-shape.js", "../../../core/index.js", "../cannon-util.js"], function (_export, _context) {
  "use strict";

  var CANNON, CannonShape, Vec3, commitShapeUpdates, v3_cannon0, CannonTrimeshShape;
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
    }, function (_cannonShapeJs) {
      CannonShape = _cannonShapeJs.CannonShape;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_cannonUtilJs) {
      commitShapeUpdates = _cannonUtilJs.commitShapeUpdates;
    }],
    execute: function () {
      v3_cannon0 = new CANNON.Vec3();
      _export("CannonTrimeshShape", CannonTrimeshShape = /*#__PURE__*/function (_CannonShape) {
        _inheritsLoose(CannonTrimeshShape, _CannonShape);
        function CannonTrimeshShape() {
          return _CannonShape.apply(this, arguments) || this;
        }
        var _proto = CannonTrimeshShape.prototype;
        _proto.setMesh = function setMesh(v) {
          if (!this._isBinding) return;
          var mesh = v;
          if (this._shape != null) {
            if (mesh && mesh.renderingSubMeshes.length > 0) {
              var vertices = mesh.renderingSubMeshes[0].geometricInfo.positions;
              var indices = mesh.renderingSubMeshes[0].geometricInfo.indices;
              if (indices instanceof Uint8Array) {
                this.updateProperties(vertices, new Uint16Array(indices));
              } else if (indices instanceof Uint16Array) {
                this.updateProperties(vertices, indices);
              } else if (indices instanceof Uint32Array) {
                this.updateProperties(vertices, new Uint16Array(indices));
              } else {
                this.updateProperties(vertices, new Uint16Array());
              }
            } else {
              this.updateProperties(new Float32Array(), new Uint16Array());
            }
          } else if (mesh && mesh.renderingSubMeshes.length > 0) {
            var _vertices = mesh.renderingSubMeshes[0].geometricInfo.positions;
            var _indices = mesh.renderingSubMeshes[0].geometricInfo.indices;
            this._shape = new CANNON.Trimesh(_vertices, _indices);
          } else {
            this._shape = new CANNON.Trimesh(new Float32Array(), new Uint16Array());
          }
        };
        _proto.onComponentSet = function onComponentSet() {
          this.setMesh(this.collider.mesh);
        };
        _proto.onLoad = function onLoad() {
          _CannonShape.prototype.onLoad.call(this);
          this.setMesh(this.collider.mesh);
        };
        _proto.setScale = function setScale(scale) {
          _CannonShape.prototype.setScale.call(this, scale);
          Vec3.copy(v3_cannon0, scale);
          this.impl.setScale(v3_cannon0);
        };
        _proto.updateProperties = function updateProperties(vertices, indices) {
          this.impl.vertices = new Float32Array(vertices);
          this.impl.indices = new Int16Array(indices);
          this.impl.normals = new Float32Array(indices.length);
          this.impl.aabb = new CANNON.AABB();
          this.impl.edges = [];
          this.impl.tree = new CANNON.Octree(new CANNON.AABB());
          this.impl.updateEdges();
          this.impl.updateNormals();
          this.impl.updateAABB();
          this.impl.updateBoundingSphereRadius();
          this.impl.updateTree();
          this.impl.setScale(this.impl.scale);
          if (this._index >= 0) {
            commitShapeUpdates(this._body);
          }
        };
        _createClass(CannonTrimeshShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }, {
          key: "impl",
          get: function get() {
            return this._shape;
          }
        }]);
        return CannonTrimeshShape;
      }(CannonShape));
    }
  };
});