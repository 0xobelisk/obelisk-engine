System.register("q-bundled:///fs/cocos/physics/physx/shapes/physx-box-shape.js", ["../../utils/util.js", "../physx-adapter.js", "./physx-shape.js", "../physx-instance.js"], function (_export, _context) {
  "use strict";

  var absolute, VEC3_0, PX, EPhysXShapeType, PhysXShape, PhysXInstance, PhysXBoxShape;
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
    setters: [function (_utilsUtilJs) {
      absolute = _utilsUtilJs.absolute;
      VEC3_0 = _utilsUtilJs.VEC3_0;
    }, function (_physxAdapterJs) {
      PX = _physxAdapterJs.PX;
    }, function (_physxShapeJs) {
      EPhysXShapeType = _physxShapeJs.EPhysXShapeType;
      PhysXShape = _physxShapeJs.PhysXShape;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }],
    execute: function () {
      _export("PhysXBoxShape", PhysXBoxShape = /*#__PURE__*/function (_PhysXShape) {
        _inheritsLoose(PhysXBoxShape, _PhysXShape);
        function PhysXBoxShape() {
          var _this;
          _this = _PhysXShape.call(this, EPhysXShapeType.BOX) || this;
          if (!PhysXBoxShape.BOX_GEOMETRY) {
            VEC3_0.set(0.5, 0.5, 0.5);
            PhysXBoxShape.BOX_GEOMETRY = new PX.BoxGeometry(VEC3_0);
          }
          return _this;
        }
        var _proto = PhysXBoxShape.prototype;
        _proto.updateSize = function updateSize() {
          this.updateScale();
        };
        _proto.onComponentSet = function onComponentSet() {
          this.updateGeometry();
          var pxmat = this.getSharedMaterial(this._collider.sharedMaterial);
          this._impl = PhysXInstance.physics.createShape(PhysXBoxShape.BOX_GEOMETRY, pxmat, true, this._flags);
        };
        _proto.updateScale = function updateScale() {
          this.updateGeometry();
          this._impl.setGeometry(PhysXBoxShape.BOX_GEOMETRY);
          this.setCenter(this._collider.center);
        };
        _proto.updateGeometry = function updateGeometry() {
          var co = this.collider;
          var ws = co.node.worldScale;
          VEC3_0.set(co.size).multiplyScalar(0.5).multiply(ws);
          PhysXBoxShape.BOX_GEOMETRY.setHalfExtents(absolute(VEC3_0));
        };
        _createClass(PhysXBoxShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return PhysXBoxShape;
      }(PhysXShape));
      PhysXBoxShape.BOX_GEOMETRY = void 0;
    }
  };
});