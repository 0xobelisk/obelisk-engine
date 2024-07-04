System.register("q-bundled:///fs/cocos/physics/cocos/shapes/builtin-sphere-shape.js", ["../../../core/index.js", "./builtin-shape.js", "../../utils/util.js"], function (_export, _context) {
  "use strict";

  var Vec3, geometry, BuiltinShape, maxComponent, tempMin, tempMax, BuiltinSphereShape;
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
      Vec3 = _coreIndexJs.Vec3;
      geometry = _coreIndexJs.geometry;
    }, function (_builtinShapeJs) {
      BuiltinShape = _builtinShapeJs.BuiltinShape;
    }, function (_utilsUtilJs) {
      maxComponent = _utilsUtilJs.maxComponent;
    }],
    execute: function () {
      tempMin = new Vec3();
      tempMax = new Vec3();
      _export("BuiltinSphereShape", BuiltinSphereShape = /*#__PURE__*/function (_BuiltinShape) {
        _inheritsLoose(BuiltinSphereShape, _BuiltinShape);
        var _proto = BuiltinSphereShape.prototype;
        _proto.updateRadius = function updateRadius() {
          this.localSphere.radius = this.collider.radius;
          var s = maxComponent(this.collider.node.worldScale);
          this.worldSphere.radius = this.localSphere.radius * s;
        };
        function BuiltinSphereShape(radius) {
          var _this;
          if (radius === void 0) {
            radius = 0.5;
          }
          _this = _BuiltinShape.call(this) || this;
          _this._localShape = new geometry.Sphere(0, 0, 0, radius);
          _this._worldShape = new geometry.Sphere(0, 0, 0, radius);
          return _this;
        }
        _proto.onLoad = function onLoad() {
          _BuiltinShape.prototype.onLoad.call(this);
          this.updateRadius();
        };
        _proto.getAABB = function getAABB(v) {
          this.worldSphere.getBoundary(tempMin, tempMax);
          geometry.AABB.fromPoints(v, tempMin, tempMax);
        };
        _createClass(BuiltinSphereShape, [{
          key: "localSphere",
          get: function get() {
            return this._localShape;
          }
        }, {
          key: "worldSphere",
          get: function get() {
            return this._worldShape;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return BuiltinSphereShape;
      }(BuiltinShape));
    }
  };
});