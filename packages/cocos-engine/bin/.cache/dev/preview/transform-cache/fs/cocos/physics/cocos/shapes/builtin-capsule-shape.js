System.register("q-bundled:///fs/cocos/physics/cocos/shapes/builtin-capsule-shape.js", ["./builtin-shape.js", "../../../core/index.js", "../../framework/index.js"], function (_export, _context) {
  "use strict";

  var BuiltinShape, Vec3, geometry, EAxisDirection, temp0, temp1, BuiltinCapsuleShape;
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
    setters: [function (_builtinShapeJs) {
      BuiltinShape = _builtinShapeJs.BuiltinShape;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      geometry = _coreIndexJs.geometry;
    }, function (_frameworkIndexJs) {
      EAxisDirection = _frameworkIndexJs.EAxisDirection;
    }],
    execute: function () {
      temp0 = new Vec3();
      temp1 = new Vec3();
      _export("BuiltinCapsuleShape", BuiltinCapsuleShape = /*#__PURE__*/function (_BuiltinShape) {
        _inheritsLoose(BuiltinCapsuleShape, _BuiltinShape);
        function BuiltinCapsuleShape(radius, height, direction) {
          var _this;
          if (radius === void 0) {
            radius = 0.5;
          }
          if (height === void 0) {
            height = 2;
          }
          if (direction === void 0) {
            direction = EAxisDirection.Y_AXIS;
          }
          _this = _BuiltinShape.call(this) || this;
          var halfHeight = (height - radius * 2) / 2;
          var h = halfHeight < 0 ? 0 : halfHeight;
          _this._localShape = new geometry.Capsule(radius, h, direction);
          _this._worldShape = new geometry.Capsule(radius, h, direction);
          return _this;
        }
        var _proto = BuiltinCapsuleShape.prototype;
        _proto.setRadius = function setRadius(v) {
          this.localCapsule.radius = v;
          this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
        };
        _proto.setCylinderHeight = function setCylinderHeight(v) {
          this.localCapsule.halfHeight = v / 2;
          this.localCapsule.updateCache();
          this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
        };
        _proto.setDirection = function setDirection(v) {
          this.localCapsule.axis = v;
          this.localCapsule.updateCache();
          this.worldCapsule.axis = v;
          this.worldCapsule.updateCache();
          this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
        };
        _proto.onLoad = function onLoad() {
          _BuiltinShape.prototype.onLoad.call(this);
          this.setRadius(this.collider.radius);
          this.setDirection(this.collider.direction);
        };
        _proto.getAABB = function getAABB(v) {
          //capsule has not implemented getBoundary
          v.center.set(this.worldCapsule.center);
          v.halfExtents.set(0, 0, 0);
          temp0.set(this.worldCapsule.radius, this.worldCapsule.radius, this.worldCapsule.radius);
          Vec3.add(temp1, this.worldCapsule.ellipseCenter0, temp0);
          v.mergePoint(temp1);
          Vec3.subtract(temp1, this.worldCapsule.ellipseCenter0, temp0);
          v.mergePoint(temp1);
          Vec3.add(temp1, this.worldCapsule.ellipseCenter1, temp0);
          v.mergePoint(temp1);
          Vec3.subtract(temp1, this.worldCapsule.ellipseCenter1, temp0);
          v.mergePoint(temp1);
        };
        _createClass(BuiltinCapsuleShape, [{
          key: "localCapsule",
          get: function get() {
            return this._localShape;
          }
        }, {
          key: "worldCapsule",
          get: function get() {
            return this._worldShape;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return BuiltinCapsuleShape;
      }(BuiltinShape));
    }
  };
});