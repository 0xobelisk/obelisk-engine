System.register("q-bundled:///fs/cocos/physics/cannon/shapes/cannon-box-shape.js", ["@cocos/cannon", "../../../core/index.js", "../cannon-util.js", "./cannon-shape.js", "../../../../exports/physics-framework.js", "../../utils/util.js"], function (_export, _context) {
  "use strict";

  var CANNON, clamp, Vec3, commitShapeUpdates, CannonShape, PhysicsSystem, absolute, VEC3_0, CannonBoxShape;
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
      clamp = _coreIndexJs.clamp;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_cannonUtilJs) {
      commitShapeUpdates = _cannonUtilJs.commitShapeUpdates;
    }, function (_cannonShapeJs) {
      CannonShape = _cannonShapeJs.CannonShape;
    }, function (_exportsPhysicsFrameworkJs) {
      PhysicsSystem = _exportsPhysicsFrameworkJs.PhysicsSystem;
    }, function (_utilsUtilJs) {
      absolute = _utilsUtilJs.absolute;
      VEC3_0 = _utilsUtilJs.VEC3_0;
    }],
    execute: function () {
      _export("CannonBoxShape", CannonBoxShape = /*#__PURE__*/function (_CannonShape) {
        _inheritsLoose(CannonBoxShape, _CannonShape);
        function CannonBoxShape() {
          var _this;
          _this = _CannonShape.call(this) || this;
          _this.halfExtent = void 0;
          _this.halfExtent = new CANNON.Vec3(0.5, 0.5, 0.5);
          _this._shape = new CANNON.Box(_this.halfExtent.clone());
          return _this;
        }
        var _proto = CannonBoxShape.prototype;
        _proto.updateSize = function updateSize() {
          Vec3.multiplyScalar(this.halfExtent, this.collider.size, 0.5);
          var ws = absolute(VEC3_0.set(this.collider.node.worldScale));
          var x = this.halfExtent.x * ws.x;
          var y = this.halfExtent.y * ws.y;
          var z = this.halfExtent.z * ws.z;
          var minVolumeSize = PhysicsSystem.instance.minVolumeSize;
          this.impl.halfExtents.x = clamp(x, minVolumeSize, Number.MAX_VALUE);
          this.impl.halfExtents.y = clamp(y, minVolumeSize, Number.MAX_VALUE);
          this.impl.halfExtents.z = clamp(z, minVolumeSize, Number.MAX_VALUE);
          this.impl.updateConvexPolyhedronRepresentation();
          if (this._index !== -1) {
            commitShapeUpdates(this._body);
          }
        };
        _proto.onLoad = function onLoad() {
          _CannonShape.prototype.onLoad.call(this);
          this.updateSize();
        };
        _proto.setScale = function setScale(scale) {
          _CannonShape.prototype.setScale.call(this, scale);
          this.updateSize();
        };
        _createClass(CannonBoxShape, [{
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
        return CannonBoxShape;
      }(CannonShape));
    }
  };
});