System.register("q-bundled:///fs/cocos/core/geometry/deprecated-3.0.0.js", ["../utils/x-deprecated.js", "./intersect.js", "./line.js", "./plane.js", "./ray.js", "./triangle.js", "./sphere.js", "./aabb.js", "./obb.js", "./capsule.js", "./frustum.js"], function (_export, _context) {
  "use strict";

  var replaceProperty, intersect, Line, Plane, Ray, Triangle, Sphere, AABB, OBB, Capsule, Frustum, line, plane, ray, triangle, sphere, aabb, obb, capsule, frustum;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function deprecatedClassMessage(oldClassName, newClassName) {
    console.warn(oldClassName + " is deprecated, please use " + newClassName + " instead.");
  }

  /**
   * @en
   * Alias of [[geometry.Line]]
   * @zh
   * [[geometry.Line]] 别名类
   *
   * @deprecated Since v3.0, please use Line instead
   */
  return {
    setters: [function (_utilsXDeprecatedJs) {
      replaceProperty = _utilsXDeprecatedJs.replaceProperty;
    }, function (_intersectJs) {
      intersect = _intersectJs.default;
    }, function (_lineJs) {
      Line = _lineJs.Line;
    }, function (_planeJs) {
      Plane = _planeJs.Plane;
    }, function (_rayJs) {
      Ray = _rayJs.Ray;
    }, function (_triangleJs) {
      Triangle = _triangleJs.Triangle;
    }, function (_sphereJs) {
      Sphere = _sphereJs.Sphere;
    }, function (_aabbJs) {
      AABB = _aabbJs.AABB;
    }, function (_obbJs) {
      OBB = _obbJs.OBB;
    }, function (_capsuleJs) {
      Capsule = _capsuleJs.Capsule;
    }, function (_frustumJs) {
      Frustum = _frustumJs.Frustum;
    }],
    execute: function () {
      replaceProperty(intersect, 'intersect', [{
        name: 'ray_aabb',
        newName: 'rayAABB'
      }, {
        name: 'ray_plane',
        newName: 'rayPlane'
      }, {
        name: 'ray_triangle',
        newName: 'rayTriangle'
      }, {
        name: 'ray_sphere',
        newName: 'raySphere'
      }, {
        name: 'ray_obb',
        newName: 'rayOBB'
      }, {
        name: 'ray_capsule',
        newName: 'rayCapsule'
      }, {
        name: 'ray_subMesh',
        newName: 'raySubMesh'
      }, {
        name: 'ray_mesh',
        newName: 'rayMesh'
      }, {
        name: 'ray_model',
        newName: 'rayModel'
      }, {
        name: 'line_plane',
        newName: 'linePlane'
      }, {
        name: 'line_triangle',
        newName: 'lineTriangle'
      }, {
        name: 'line_aabb',
        newName: 'lineAABB'
      }, {
        name: 'line_obb',
        newName: 'lineOBB'
      }, {
        name: 'line_sphere',
        newName: 'lineSphere'
      }, {
        name: 'aabb_aabb',
        newName: 'aabbWithAABB'
      }, {
        name: 'aabb_obb',
        newName: 'aabbWithOBB'
      }, {
        name: 'aabb_plane',
        newName: 'aabbPlane'
      }, {
        name: 'aabb_frustum',
        newName: 'aabbFrustum'
      }, {
        name: 'aabbFrustum_accurate',
        newName: 'aabbFrustumAccurate'
      }, {
        name: 'obb_point',
        newName: 'obbPoint'
      }, {
        name: 'obb_plane',
        newName: 'obbPlane'
      }, {
        name: 'obb_frustum',
        newName: 'obbFrustum'
      }, {
        name: 'obbFrustum_accurate',
        newName: 'obbFrustumAccurate'
      }, {
        name: 'obb_obb',
        newName: 'obbWithOBB'
      }, {
        name: 'obb_capsule',
        newName: 'obbCapsule'
      }, {
        name: 'sphere_plane',
        newName: 'spherePlane'
      }, {
        name: 'sphere_frustum',
        newName: 'sphereFrustum'
      }, {
        name: 'sphereFrustum_accurate',
        newName: 'sphereFrustumAccurate'
      }, {
        name: 'sphere_sphere',
        newName: 'sphereWithSphere'
      }, {
        name: 'sphere_aabb',
        newName: 'sphereAABB'
      }, {
        name: 'sphere_obb',
        newName: 'sphereOBB'
      }, {
        name: 'sphere_capsule',
        newName: 'sphereCapsule'
      }, {
        name: 'capsule_capsule',
        newName: 'capsuleWithCapsule'
      }]);
      _export("line", line = /*#__PURE__*/function (_Line) {
        _inheritsLoose(line, _Line);
        function line() {
          var _this;
          _this = _Line.call(this) || this;
          deprecatedClassMessage('line', 'Line');
          return _this;
        }
        return line;
      }(Line));
      /**
       * @en
       * Alias of [[geometry.Plane]]
       *
       * @zh
       * [[geometry.Plane]] 别名类
       *
       * @deprecated Since v3.0, please use Plane instead
       */
      _export("plane", plane = /*#__PURE__*/function (_Plane) {
        _inheritsLoose(plane, _Plane);
        function plane() {
          var _this2;
          _this2 = _Plane.call(this) || this;
          deprecatedClassMessage('plane', 'Plane');
          return _this2;
        }
        return plane;
      }(Plane));
      /**
       * @en
       * Alias of [[geometry.Ray]]
       * @zh
       * [[geometry.Ray]] 别名类
       * @deprecated Since v3.0, please use Ray instead
       */
      _export("ray", ray = /*#__PURE__*/function (_Ray) {
        _inheritsLoose(ray, _Ray);
        function ray() {
          var _this3;
          _this3 = _Ray.call(this) || this;
          deprecatedClassMessage('ray', 'Ray');
          return _this3;
        }
        return ray;
      }(Ray));
      /**
       * @en
       * Alias of [[geometry.Triangle]]
       *
       * @zh
       * [[geometry.Triangle]] 别名类
       * @deprecated Since v3.0, please use Triangle instead
       */
      _export("triangle", triangle = /*#__PURE__*/function (_Triangle) {
        _inheritsLoose(triangle, _Triangle);
        function triangle() {
          var _this4;
          _this4 = _Triangle.call(this) || this;
          deprecatedClassMessage('triangle', 'Triangle');
          return _this4;
        }
        return triangle;
      }(Triangle));
      /**
       * @en
       * Alias of [[geometry.Sphere]]
       *
       * @zh
       * [[geometry.Sphere]] 别名类
       * @deprecated Since v3.0, please use Sphere instead
       */
      _export("sphere", sphere = /*#__PURE__*/function (_Sphere) {
        _inheritsLoose(sphere, _Sphere);
        function sphere() {
          var _this5;
          _this5 = _Sphere.call(this) || this;
          deprecatedClassMessage('sphere', 'Sphere');
          return _this5;
        }
        return sphere;
      }(Sphere));
      /**
       * @en
       * Alias of [[geometry.AABB]]
       *
       * @zh
       * [[geometry.AABB]] 别名类
       * @deprecated Since v3.0, please use AABB instead
       */
      _export("aabb", aabb = /*#__PURE__*/function (_AABB) {
        _inheritsLoose(aabb, _AABB);
        function aabb() {
          var _this6;
          _this6 = _AABB.call(this) || this;
          deprecatedClassMessage('aabb', 'AABB');
          return _this6;
        }
        return aabb;
      }(AABB));
      /**
       * @en
       * Alias of [[geometry.OBB]]
       *
       * @zh
       * [[geometry.OBB]] 别名类
       * @deprecated Since v3.0, please use OBB instead
       */
      _export("obb", obb = /*#__PURE__*/function (_OBB) {
        _inheritsLoose(obb, _OBB);
        function obb() {
          var _this7;
          _this7 = _OBB.call(this) || this;
          deprecatedClassMessage('obb', 'OBB');
          return _this7;
        }
        return obb;
      }(OBB));
      /**
       * @en
       * Alias of [[geometry.Capsule]]
       *
       * @zh
       * [[geometry.Capsule]] 别名类
       * @deprecated Since v3.0, please use Capsule instead
       */
      _export("capsule", capsule = /*#__PURE__*/function (_Capsule) {
        _inheritsLoose(capsule, _Capsule);
        function capsule() {
          var _this8;
          _this8 = _Capsule.call(this) || this;
          deprecatedClassMessage('capsule', 'Capsule');
          return _this8;
        }
        return capsule;
      }(Capsule));
      /**
       * @en
       * Alias of [[geometry.Frustum]]
       *
       * @zh
       * [[geometry.Frustum]] 别名类
       * @deprecated Since v3.0, please use Frustum instead
       */
      _export("frustum", frustum = /*#__PURE__*/function (_Frustum) {
        _inheritsLoose(frustum, _Frustum);
        function frustum() {
          var _this9;
          _this9 = _Frustum.call(this) || this;
          deprecatedClassMessage('frustum', 'Frustum');
          return _this9;
        }
        return frustum;
      }(Frustum));
    }
  };
});