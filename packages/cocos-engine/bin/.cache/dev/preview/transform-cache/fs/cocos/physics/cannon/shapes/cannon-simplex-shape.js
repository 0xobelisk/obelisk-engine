System.register("q-bundled:///fs/cocos/physics/cannon/shapes/cannon-simplex-shape.js", ["@cocos/cannon", "../../../core/index.js", "../cannon-util.js", "./cannon-shape.js", "../../../../exports/physics-framework.js"], function (_export, _context) {
  "use strict";

  var CANNON, Vec3, commitShapeUpdates, CannonShape, SimplexCollider, CannonSimplexShape, createTetra;
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
                                                                                                                                                                                                           */ /* eslint-disable func-names */
  return {
    setters: [function (_cocosCannon) {
      CANNON = _cocosCannon.default;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_cannonUtilJs) {
      commitShapeUpdates = _cannonUtilJs.commitShapeUpdates;
    }, function (_cannonShapeJs) {
      CannonShape = _cannonShapeJs.CannonShape;
    }, function (_exportsPhysicsFrameworkJs) {
      SimplexCollider = _exportsPhysicsFrameworkJs.SimplexCollider;
    }],
    execute: function () {
      _export("CannonSimplexShape", CannonSimplexShape = /*#__PURE__*/function (_CannonShape) {
        _inheritsLoose(CannonSimplexShape, _CannonShape);
        function CannonSimplexShape() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CannonShape.call.apply(_CannonShape, [this].concat(args)) || this;
          _this.vertices = [];
          return _this;
        }
        var _proto = CannonSimplexShape.prototype;
        _proto.setShapeType = function setShapeType(v) {
          if (this._isBinding) {
            // TODO: change the type after init
          }
        };
        _proto.setVertices = function setVertices(v) {
          var length = this.vertices.length;
          if (length === 4) {
            var ws = this._collider.node.worldScale;
            for (var i = 0; i < length; i++) {
              Vec3.multiply(this.vertices[i], ws, v[i]);
            }
            var impl = this.impl;
            impl.computeNormals();
            impl.computeEdges();
            impl.updateBoundingSphereRadius();
          } else {
            // TODO: add to center
            // const impl = this.impl as CANNON.Particle;
          }
          if (this._index !== -1) {
            commitShapeUpdates(this._body);
          }
        };
        _proto.onComponentSet = function onComponentSet() {
          var type = this.collider.shapeType;
          if (type === SimplexCollider.ESimplexType.TETRAHEDRON) {
            for (var i = 0; i < 4; i++) {
              this.vertices[i] = new CANNON.Vec3(0, 0, 0);
            }
            this._shape = createTetra(this.vertices);
          } else {
            if (type !== SimplexCollider.ESimplexType.VERTEX) {
              // WARN
            }
            this._shape = new CANNON.Particle();
          }
        };
        _proto.onLoad = function onLoad() {
          _CannonShape.prototype.onLoad.call(this);
          this.collider.updateVertices();
        };
        _proto.setScale = function setScale(scale) {
          _CannonShape.prototype.setScale.call(this, scale);
          this.collider.updateVertices();
        };
        _createClass(CannonSimplexShape, [{
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
        return CannonSimplexShape;
      }(CannonShape));
      createTetra = function () {
        var faces = [[0, 3, 2],
        // -x
        [0, 1, 3],
        // -y
        [0, 2, 1],
        // -z
        [1, 2, 3] // +xyz
        ];

        return function (verts) {
          return new CANNON.ConvexPolyhedron(verts, faces);
        };
      }();
    }
  };
});