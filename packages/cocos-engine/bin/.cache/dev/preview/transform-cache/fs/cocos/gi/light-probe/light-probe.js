System.register("q-bundled:///fs/cocos/gi/light-probe/light-probe.js", ["../../core/data/decorators/index.js", "./delaunay.js", "./polynomial-solver.js", "../../core/index.js", "./sh.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, type, Vertex, Tetrahedron, Delaunay, PolynomialSolver, Vec3, cclegacy, EPSILON, SH, _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, _v1, _v2, _normal, _edgeP0, _edgeP1, _edgeP2, _crossP12, _crossP20, _normal2, _edge1, _edge2, _v, _vp0, _vp1, _vp2, LightProbesData, LightProbes;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_delaunayJs) {
      Vertex = _delaunayJs.Vertex;
      Tetrahedron = _delaunayJs.Tetrahedron;
      Delaunay = _delaunayJs.Delaunay;
    }, function (_polynomialSolverJs) {
      PolynomialSolver = _polynomialSolverJs.PolynomialSolver;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
      EPSILON = _coreIndexJs.EPSILON;
    }, function (_shJs) {
      SH = _shJs.SH;
    }],
    execute: function () {
      _v1 = new Vec3(0.0, 0.0, 0.0);
      _v2 = new Vec3(0.0, 0.0, 0.0);
      _normal = new Vec3(0.0, 0.0, 0.0);
      _edgeP0 = new Vec3(0.0, 0.0, 0.0);
      _edgeP1 = new Vec3(0.0, 0.0, 0.0);
      _edgeP2 = new Vec3(0.0, 0.0, 0.0);
      _crossP12 = new Vec3(0.0, 0.0, 0.0);
      _crossP20 = new Vec3(0.0, 0.0, 0.0);
      _normal2 = new Vec3(0.0, 0.0, 0.0);
      _edge1 = new Vec3(0.0, 0.0, 0.0);
      _edge2 = new Vec3(0.0, 0.0, 0.0);
      _v = new Vec3(0.0, 0.0, 0.0);
      _vp0 = new Vec3(0.0, 0.0, 0.0);
      _vp1 = new Vec3(0.0, 0.0, 0.0);
      _vp2 = new Vec3(0.0, 0.0, 0.0);
      _export("LightProbesData", LightProbesData = (_dec = ccclass('cc.LightProbesData'), _dec2 = type([Vertex]), _dec3 = type([Tetrahedron]), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function LightProbesData() {
          this._probes = _initializer && _initializer();
          this._tetrahedrons = _initializer2 && _initializer2();
        }
        var _proto = LightProbesData.prototype;
        _proto.empty = function empty() {
          return this._probes.length === 0 || this._tetrahedrons.length === 0;
        };
        _proto.reset = function reset() {
          this._probes.length = 0;
          this._tetrahedrons.length = 0;
        };
        _proto.updateProbes = function updateProbes(points) {
          this._probes.length = points.length;
          var pointCount = this._probes.length;
          for (var i = 0; i < pointCount; i++) {
            var probe = this._probes[i];
            if (!probe) {
              probe = new Vertex(points[i]);
              for (var j = 0; j < SH.getBasisCount(); j++) {
                probe.coefficients[j] = Vec3.ZERO;
              }
              this._probes[i] = probe;
            } else {
              probe.position.set(points[i]);
            }
          }
        };
        _proto.updateTetrahedrons = function updateTetrahedrons() {
          var delaunay = new Delaunay(this._probes);
          this._tetrahedrons = delaunay.build();
        };
        _proto.getInterpolationSHCoefficients = function getInterpolationSHCoefficients(tetIndex, weights, coefficients) {
          if (!this.hasCoefficients()) {
            return false;
          }
          var length = SH.getBasisCount();
          var tetrahedron = this._tetrahedrons[tetIndex];
          var c0 = this._probes[tetrahedron.vertex0].coefficients;
          var c1 = this._probes[tetrahedron.vertex1].coefficients;
          var c2 = this._probes[tetrahedron.vertex2].coefficients;
          if (tetrahedron.vertex3 >= 0) {
            var c3 = this._probes[tetrahedron.vertex3].coefficients;
            for (var i = 0; i < length; i++) {
              coefficients[i] = new Vec3(0.0, 0.0, 0.0);
              Vec3.scaleAndAdd(coefficients[i], coefficients[i], c0[i], weights.x);
              Vec3.scaleAndAdd(coefficients[i], coefficients[i], c1[i], weights.y);
              Vec3.scaleAndAdd(coefficients[i], coefficients[i], c2[i], weights.z);
              Vec3.scaleAndAdd(coefficients[i], coefficients[i], c3[i], weights.w);
            }
          } else {
            for (var _i = 0; _i < length; _i++) {
              coefficients[_i] = new Vec3(0.0, 0.0, 0.0);
              Vec3.scaleAndAdd(coefficients[_i], coefficients[_i], c0[_i], weights.x);
              Vec3.scaleAndAdd(coefficients[_i], coefficients[_i], c1[_i], weights.y);
              Vec3.scaleAndAdd(coefficients[_i], coefficients[_i], c2[_i], weights.z);
            }
          }
          return true;
        };
        _proto.getInterpolationWeights = function getInterpolationWeights(position, tetIndex, weights) {
          var tetrahedronCount = this._tetrahedrons.length;
          if (tetIndex < 0 || tetIndex >= tetrahedronCount) {
            tetIndex = 0;
          }
          var lastIndex = -1;
          var nextIndex = -1;
          for (var i = 0; i < tetrahedronCount; i++) {
            var tetrahedron = this._tetrahedrons[tetIndex];
            this.getBarycentricCoord(position, tetrahedron, weights);
            if (weights.x >= 0.0 && weights.y >= 0.0 && weights.z >= 0.0 && weights.w >= 0.0) {
              break;
            }
            if (weights.x < weights.y && weights.x < weights.z && weights.x < weights.w) {
              nextIndex = tetrahedron.neighbours[0];
            } else if (weights.y < weights.z && weights.y < weights.w) {
              nextIndex = tetrahedron.neighbours[1];
            } else if (weights.z < weights.w) {
              nextIndex = tetrahedron.neighbours[2];
            } else {
              nextIndex = tetrahedron.neighbours[3];
            }

            // return directly due to numerical precision error
            if (lastIndex === nextIndex) {
              break;
            }
            lastIndex = tetIndex;
            tetIndex = nextIndex;
          }
          return tetIndex;
        };
        _proto.hasCoefficients = function hasCoefficients() {
          return !this.empty() && this._probes[0].coefficients.length !== 0;
        };
        LightProbesData.getTriangleBarycentricCoord = function getTriangleBarycentricCoord(p0, p1, p2, position) {
          Vec3.subtract(_v1, p1, p0);
          Vec3.subtract(_v2, p2, p0);
          Vec3.cross(_normal, _v1, _v2);
          if (_normal.lengthSqr() <= EPSILON) {
            return new Vec3(0.0, 0.0, 0.0);
          }
          var n = _normal.clone();
          n.normalize();
          var area012Inv = 1.0 / n.dot(_normal);
          Vec3.subtract(_edgeP0, p0, position);
          Vec3.subtract(_edgeP1, p1, position);
          Vec3.subtract(_edgeP2, p2, position);
          Vec3.cross(_crossP12, _edgeP1, _edgeP2);
          var areaP12 = n.dot(_crossP12);
          var alpha = areaP12 * area012Inv;
          Vec3.cross(_crossP20, _edgeP2, _edgeP0);
          var areaP20 = n.dot(_crossP20);
          var beta = areaP20 * area012Inv;
          return new Vec3(alpha, beta, 1.0 - alpha - beta);
        };
        _proto.getBarycentricCoord = function getBarycentricCoord(position, tetrahedron, weights) {
          if (tetrahedron.vertex3 >= 0) {
            this.getTetrahedronBarycentricCoord(position, tetrahedron, weights);
          } else {
            this.getOuterCellBarycentricCoord(position, tetrahedron, weights);
          }
        };
        _proto.getTetrahedronBarycentricCoord = function getTetrahedronBarycentricCoord(position, tetrahedron, weights) {
          var result = new Vec3(0.0, 0.0, 0.0);
          Vec3.subtract(result, position, this._probes[tetrahedron.vertex3].position);
          Vec3.transformMat3(result, result, tetrahedron.matrix);
          weights.set(result.x, result.y, result.z, 1.0 - result.x - result.y - result.z);
        };
        _proto.getOuterCellBarycentricCoord = function getOuterCellBarycentricCoord(position, tetrahedron, weights) {
          var p0 = this._probes[tetrahedron.vertex0].position;
          var p1 = this._probes[tetrahedron.vertex1].position;
          var p2 = this._probes[tetrahedron.vertex2].position;
          Vec3.subtract(_edge1, p1, p0);
          Vec3.subtract(_edge2, p2, p0);
          Vec3.cross(_normal2, _edge1, _edge2);
          Vec3.subtract(_v, position, p0);
          var t = Vec3.dot(_v, _normal2);
          if (t < 0.0) {
            // test tetrahedron in next iterator
            weights.set(0.0, 0.0, 0.0, -1.0);
            return;
          }
          var coefficients = new Vec3(0.0, 0.0, 0.0);
          Vec3.transformMat3(coefficients, position, tetrahedron.matrix);
          Vec3.add(coefficients, coefficients, tetrahedron.offset);
          if (tetrahedron.vertex3 === -1) {
            t = PolynomialSolver.getCubicUniqueRoot(coefficients.x, coefficients.y, coefficients.z);
          } else {
            t = PolynomialSolver.getQuadraticUniqueRoot(coefficients.x, coefficients.y, coefficients.z);
          }
          Vec3.scaleAndAdd(_vp0, p0, this._probes[tetrahedron.vertex0].normal, t);
          Vec3.scaleAndAdd(_vp1, p1, this._probes[tetrahedron.vertex1].normal, t);
          Vec3.scaleAndAdd(_vp2, p2, this._probes[tetrahedron.vertex2].normal, t);
          var result = LightProbesData.getTriangleBarycentricCoord(_vp0, _vp1, _vp2, position);
          weights.set(result.x, result.y, result.z, 0.0);
        };
        _createClass(LightProbesData, [{
          key: "probes",
          get: function get() {
            return this._probes;
          }
        }, {
          key: "tetrahedrons",
          get: function get() {
            return this._tetrahedrons;
          }
        }]);
        return LightProbesData;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_probes", [serializable, _dec2], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_tetrahedrons", [serializable, _dec3], function () {
        return [];
      })), _class2)) || _class));
      cclegacy.internal.LightProbesData = LightProbesData;

      /**
       * @en light probe data
       * @zh 光照探针数据
       */
      _export("LightProbes", LightProbes = /*#__PURE__*/function () {
        function LightProbes() {
          this._giScale = 1.0;
          this._giSamples = 1024;
          this._bounces = 2;
          this._reduceRinging = 0.0;
          this._showProbe = true;
          this._showWireframe = true;
          this._showConvex = false;
          this._data = null;
          this._lightProbeSphereVolume = 1.0;
        }
        var _proto2 = LightProbes.prototype;
        _proto2.initialize = function initialize(info) {
          this._giScale = info.giScale;
          this._giSamples = info.giSamples;
          this._bounces = info.bounces;
          this._reduceRinging = info.reduceRinging;
          this._showProbe = info.showProbe;
          this._showWireframe = info.showWireframe;
          this._showConvex = info.showConvex;
          this._data = info.data;
          this._lightProbeSphereVolume = info.lightProbeSphereVolume;
        };
        _proto2.empty = function empty() {
          if (!this._data) {
            return true;
          }
          return this._data.empty();
        };
        _createClass(LightProbes, [{
          key: "giScale",
          get: function get() {
            return this._giScale;
          }

          /**
            * @en GI sample counts
            * @zh GI 采样数量
            */,
          set:
          /**
           * @en GI multiplier
           * @zh GI乘数
           */
          function set(val) {
            this._giScale = val;
          }
        }, {
          key: "giSamples",
          get: function get() {
            return this._giSamples;
          }

          /**
            * @en light bounces
            * @zh 光照反弹次数
            */,
          set: function set(val) {
            this._giSamples = val;
          }
        }, {
          key: "bounces",
          get: function get() {
            return this._bounces;
          }

          /**
           * @en Reduce ringing of light probe
           * @zh 减少光照探针的振铃效果
           */,
          set: function set(val) {
            this._bounces = val;
          }
        }, {
          key: "reduceRinging",
          get: function get() {
            return this._reduceRinging;
          }

          /**
           * @en Whether to show light probe
           * @zh 是否显示光照探针
           */,
          set: function set(val) {
            this._reduceRinging = val;
          }
        }, {
          key: "showProbe",
          get: function get() {
            return this._showProbe;
          }

          /**
           * @en Whether to show light probe's connection
           * @zh 是否显示光照探针连线
           */,
          set: function set(val) {
            this._showProbe = val;
          }
        }, {
          key: "showWireframe",
          get: function get() {
            return this._showWireframe;
          }

          /**
           * @en Whether to show light probe's convex
           * @zh 是否显示光照探针凸包
           */,
          set: function set(val) {
            this._showWireframe = val;
          }
        }, {
          key: "showConvex",
          get: function get() {
            return this._showConvex;
          }

          /**
           * @en light probe's vertex and tetrahedron data
           * @zh 光照探针顶点及四面体数据
           */,
          set: function set(val) {
            this._showConvex = val;
          }
        }, {
          key: "data",
          get: function get() {
            return this._data;
          }

          /**
           * @en The value of all light probe sphere display size
           * @zh 光照探针全局显示大小
           */,
          set: function set(val) {
            this._data = val;
          }
        }, {
          key: "lightProbeSphereVolume",
          get: function get() {
            return this._lightProbeSphereVolume;
          },
          set: function set(val) {
            this._lightProbeSphereVolume = val;
          }
        }]);
        return LightProbes;
      }());
      cclegacy.internal.LightProbes = LightProbes;
    }
  };
});