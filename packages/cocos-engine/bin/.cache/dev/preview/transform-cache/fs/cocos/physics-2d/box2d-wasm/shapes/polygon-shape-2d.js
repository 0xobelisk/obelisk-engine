System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/shapes/polygon-shape-2d.js", ["../instantiated.js", "./shape-2d.js", "../../framework/utils/polygon-partition.js", "../../framework/physics-types.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var B2, B2Shape2D, PolygonPartition, PHYSICS_2D_PTM_RATIO, Vec2, warn, B2PolygonShape;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
    }, function (_shape2dJs) {
      B2Shape2D = _shape2dJs.B2Shape2D;
    }, function (_frameworkUtilsPolygonPartitionJs) {
      PolygonPartition = _frameworkUtilsPolygonPartitionJs;
    }, function (_frameworkPhysicsTypesJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkPhysicsTypesJs.PHYSICS_2D_PTM_RATIO;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      warn = _coreIndexJs.warn;
    }],
    execute: function () {
      _export("B2PolygonShape", B2PolygonShape = /*#__PURE__*/function (_B2Shape2D) {
        _inheritsLoose(B2PolygonShape, _B2Shape2D);
        function B2PolygonShape() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _B2Shape2D.call.apply(_B2Shape2D, [this].concat(args)) || this;
          _this._worldPoints = [];
          return _this;
        }
        var _proto = B2PolygonShape.prototype;
        _proto._createShapes = function _createShapes(scaleX, scaleY, relativePositionX, relativePositionY) {
          var shapes = [];
          var comp = this.collider;
          var points = comp.points;

          // check if last point equal to first point
          if (points.length > 0 && points[0].equals(points[points.length - 1])) {
            points.length -= 1;
          }
          var polys = PolygonPartition.ConvexPartition(points);
          if (!polys) {
            warn('[Physics2D] b2PolygonShape failed to decompose polygon into convex polygons, node name: ', comp.node.name);
            return shapes;
          }
          var offset = comp.offset;
          for (var i = 0; i < polys.length; i++) {
            var poly = polys[i];
            var shape = 0; //B2.PolygonShape ptr
            var vertices = B2.Vec2VectorNew();
            var firstVertice = null;
            for (var j = 0, l = poly.length; j < l; j++) {
              if (!shape) {
                shape = B2.PolygonShapeNew();
              }
              var p = poly[j];
              var x = (relativePositionX + (p.x + offset.x) * scaleX) / PHYSICS_2D_PTM_RATIO;
              var y = (relativePositionY + (p.y + offset.y) * scaleY) / PHYSICS_2D_PTM_RATIO;
              var v = {
                x: x,
                y: y
              };
              B2.Vec2VectorPush(vertices, x, y);
              if (!firstVertice) {
                firstVertice = v;
              }
              if (B2.Vec2VectorSize(vertices) === B2.maxPolygonVertices) {
                B2.PolygonShapeSet(shape, B2.Vec2VectorGetPtr(vertices), B2.Vec2VectorSize(vertices));
                shapes.push(shape);
                shape = 0;
                if (j < l - 1) {
                  var temp = B2.Vec2VectorGet(vertices, B2.Vec2VectorSize(vertices) - 1);
                  B2.Vec2VectorResize(vertices, 0, 0, 0); //clear
                  B2.Vec2VectorPush(vertices, firstVertice.x, firstVertice.y);
                  B2.Vec2VectorPush(vertices, temp.x, temp.y);
                }
              }
            }
            if (shape) {
              B2.PolygonShapeSet(shape, B2.Vec2VectorGetPtr(vertices), B2.Vec2VectorSize(vertices));
              shapes.push(shape);
            }
            B2.Vec2VectorDelete(vertices);
          }
          return shapes;
        };
        _createClass(B2PolygonShape, [{
          key: "worldPoints",
          get: function get() {
            var comp = this.collider;
            var points = comp.points;
            var worldPoints = this._worldPoints;
            var m = comp.node.worldMatrix;
            for (var i = 0; i < points.length; i++) {
              if (!worldPoints[i]) {
                worldPoints[i] = new Vec2();
              }
              Vec2.transformMat4(worldPoints[i], points[i], m);
            }
            worldPoints.length = points.length;
            return this._worldPoints;
          }
        }]);
        return B2PolygonShape;
      }(B2Shape2D));
    }
  };
});