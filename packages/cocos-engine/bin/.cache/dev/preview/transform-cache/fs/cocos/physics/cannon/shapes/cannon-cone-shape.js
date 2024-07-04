System.register("q-bundled:///fs/cocos/physics/cannon/shapes/cannon-cone-shape.js", ["@cocos/cannon", "../../../core/index.js", "./cannon-shape.js", "../../framework/physics-enum.js", "../cannon-util.js"], function (_export, _context) {
  "use strict";

  var CANNON, Vec3, CannonShape, EAxisDirection, commitShapeUpdates, v3_0, v3_1, CannonConeShape;
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
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_cannonShapeJs) {
      CannonShape = _cannonShapeJs.CannonShape;
    }, function (_frameworkPhysicsEnumJs) {
      EAxisDirection = _frameworkPhysicsEnumJs.EAxisDirection;
    }, function (_cannonUtilJs) {
      commitShapeUpdates = _cannonUtilJs.commitShapeUpdates;
    }],
    execute: function () {
      v3_0 = new Vec3();
      v3_1 = new Vec3();
      _export("CannonConeShape", CannonConeShape = /*#__PURE__*/function (_CannonShape) {
        _inheritsLoose(CannonConeShape, _CannonShape);
        var _proto = CannonConeShape.prototype;
        _proto.setRadius = function setRadius(v) {
          this.updateProperties(this.collider.radius, this.collider.height, CANNON.CC_CONFIG.numSegmentsCone, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        };
        _proto.setHeight = function setHeight(v) {
          this.updateProperties(this.collider.radius, this.collider.height, CANNON.CC_CONFIG.numSegmentsCone, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        };
        _proto.setDirection = function setDirection(v) {
          this.updateProperties(this.collider.radius, this.collider.height, CANNON.CC_CONFIG.numSegmentsCone, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        };
        function CannonConeShape(radius, height, direction) {
          var _this;
          if (radius === void 0) {
            radius = 0.5;
          }
          if (height === void 0) {
            height = 1;
          }
          if (direction === void 0) {
            direction = EAxisDirection.Y_AXIS;
          }
          _this = _CannonShape.call(this) || this;
          _this._shape = new CANNON.Cylinder(0, radius, height, CANNON.CC_CONFIG.numSegmentsCone, direction === EAxisDirection.Y_AXIS);
          return _this;
        }
        _proto.onLoad = function onLoad() {
          _CannonShape.prototype.onLoad.call(this);
          this.setRadius(this.collider.radius);
        };
        _proto.setScale = function setScale(scale) {
          _CannonShape.prototype.setScale.call(this, scale);
          this.setRadius(this.collider.radius);
        };
        _proto.updateProperties = function updateProperties(radius, height, numSegments, direction, scale) {
          var wh = height;
          var wr = radius;
          var cos = Math.cos;
          var sin = Math.sin;
          var abs = Math.abs;
          var max = Math.max;
          if (direction === 1) {
            wh = abs(scale.y) * height;
            wr = max(abs(scale.x), abs(scale.z)) * radius;
          } else if (direction === 2) {
            wh = abs(scale.z) * height;
            wr = max(abs(scale.x), abs(scale.y)) * radius;
          } else {
            wh = abs(scale.x) * height;
            wr = max(abs(scale.y), abs(scale.z)) * radius;
          }
          var N = numSegments;
          var hH = wh / 2;
          var vertices = [];
          var indices = [];
          var axes = [];
          var theta = Math.PI * 2 / N;
          if (direction === 1) {
            var bf = [];
            indices.push(bf);
            vertices.push(new CANNON.Vec3(0, hH, 0));
            for (var i = 0; i < N; i++) {
              var x = wr * cos(theta * i);
              var z = wr * sin(theta * i);
              vertices.push(new CANNON.Vec3(x, -hH, z));
            }
            for (var _i = 0; _i < N; _i++) {
              if (_i !== 0) bf.push(_i);
              var face = void 0;
              if (_i < N - 1) {
                face = [0, _i + 2, _i + 1];
              } else {
                face = [0, 1, _i + 1];
              }
              indices.push(face);
              Vec3.subtract(v3_0, vertices[0], vertices[face[1]]);
              Vec3.subtract(v3_1, vertices[face[2]], vertices[face[1]]);
              Vec3.cross(v3_0, v3_1, v3_0);
              v3_0.normalize();
              axes.push(new CANNON.Vec3(v3_0.x, v3_0.y, v3_0.z));
            }
            axes.push(new CANNON.Vec3(0, -1, 0));
          } else if (direction === 2) {
            var _bf = [];
            indices.push(_bf);
            vertices.push(new CANNON.Vec3(0, 0, hH));
            for (var _i2 = 0; _i2 < N; _i2++) {
              var _x = wr * cos(theta * _i2);
              var y = wr * sin(theta * _i2);
              vertices.push(new CANNON.Vec3(_x, y, -hH));
            }
            for (var _i3 = 0; _i3 < N; _i3++) {
              if (_i3 !== 0) _bf.push(N - _i3);
              var _face = void 0;
              if (_i3 < N - 1) {
                _face = [0, _i3 + 1, _i3 + 2];
              } else {
                _face = [0, _i3 + 1, 1];
              }
              indices.push(_face);
              Vec3.subtract(v3_0, vertices[0], vertices[_face[1]]);
              Vec3.subtract(v3_1, vertices[_face[2]], vertices[_face[1]]);
              Vec3.cross(v3_0, v3_0, v3_1);
              v3_0.normalize();
              axes.push(new CANNON.Vec3(v3_0.x, v3_0.y, v3_0.z));
            }
            axes.push(new CANNON.Vec3(0, 0, -1));
          } else {
            var _bf2 = [];
            indices.push(_bf2);
            vertices.push(new CANNON.Vec3(hH, 0, 0));
            for (var _i4 = 0; _i4 < N; _i4++) {
              var _y = wr * cos(theta * _i4);
              var _z = wr * sin(theta * _i4);
              vertices.push(new CANNON.Vec3(-hH, _y, _z));
            }
            for (var _i5 = 0; _i5 < N; _i5++) {
              if (_i5 !== 0) _bf2.push(N - _i5);
              var _face2 = void 0;
              if (_i5 < N - 1) {
                _face2 = [0, _i5 + 1, _i5 + 2];
              } else {
                _face2 = [0, _i5 + 1, 1];
              }
              indices.push(_face2);
              Vec3.subtract(v3_0, vertices[0], vertices[_face2[1]]);
              Vec3.subtract(v3_1, vertices[_face2[2]], vertices[_face2[1]]);
              Vec3.cross(v3_0, v3_0, v3_1);
              v3_0.normalize();
              axes.push(new CANNON.Vec3(v3_0.x, v3_0.y, v3_0.z));
            }
            axes.push(new CANNON.Vec3(-1, 0, 0));
          }
          this.impl.vertices = vertices;
          this.impl.faces = indices;
          this.impl.uniqueAxes = axes;
          this.impl.worldVerticesNeedsUpdate = true;
          this.impl.worldFaceNormalsNeedsUpdate = true;
          this.impl.computeNormals();
          this.impl.computeEdges();
          this.impl.updateBoundingSphereRadius();
        };
        _createClass(CannonConeShape, [{
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
        return CannonConeShape;
      }(CannonShape));
    }
  };
});