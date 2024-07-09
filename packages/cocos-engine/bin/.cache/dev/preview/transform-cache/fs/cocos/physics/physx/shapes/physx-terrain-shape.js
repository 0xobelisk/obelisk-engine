System.register("q-bundled:///fs/cocos/physics/physx/shapes/physx-terrain-shape.js", ["../physx-adapter.js", "../physx-instance.js", "./physx-shape.js"], function (_export, _context) {
  "use strict";

  var createHeightField, createHeightFieldGeometry, getTempTransform, PX, PhysXInstance, EPhysXShapeType, PhysXShape, PhysXTerrainShape;
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
    setters: [function (_physxAdapterJs) {
      createHeightField = _physxAdapterJs.createHeightField;
      createHeightFieldGeometry = _physxAdapterJs.createHeightFieldGeometry;
      getTempTransform = _physxAdapterJs.getTempTransform;
      PX = _physxAdapterJs.PX;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }, function (_physxShapeJs) {
      EPhysXShapeType = _physxShapeJs.EPhysXShapeType;
      PhysXShape = _physxShapeJs.PhysXShape;
    }],
    execute: function () {
      _export("PhysXTerrainShape", PhysXTerrainShape = /*#__PURE__*/function (_PhysXShape) {
        _inheritsLoose(PhysXTerrainShape, _PhysXShape);
        function PhysXTerrainShape() {
          return _PhysXShape.call(this, EPhysXShapeType.TERRAIN) || this;
        }
        var _proto = PhysXTerrainShape.prototype;
        _proto.setTerrain = function setTerrain(v) {
          if (v && this._impl == null) {
            var physics = PhysXInstance.physics;
            var collider = this.collider;
            if (PX.TERRAIN_STATIC[v._uuid] == null) {
              var cooking = PhysXInstance.cooking;
              PX.TERRAIN_STATIC[v._uuid] = createHeightField(v, PhysXTerrainShape.heightScale, cooking, physics);
            }
            var hf = PX.TERRAIN_STATIC[v._uuid];
            var pxmat = this.getSharedMaterial(collider.sharedMaterial);
            var geometry = createHeightFieldGeometry(hf, 0, PhysXTerrainShape.heightScale, v.tileSize, v.tileSize);
            this._impl = physics.createShape(geometry, pxmat, true, this._flags);
            this.updateByReAdd();
          }
        };
        _proto.onComponentSet = function onComponentSet() {
          this.setTerrain(this.collider.terrain);
        };
        _proto.updateScale = function updateScale() {
          this.setCenter(this._collider.center);
        }

        /* override */;
        _proto.setCenter = function setCenter(v) {
          if (this._impl) this._impl.setLocalPose(getTempTransform(v, this._rotation));
        };
        _proto.setMaterial = function setMaterial(v) {
          if (this._impl) _PhysXShape.prototype.setMaterial.call(this, v);
        };
        _proto.setAsTrigger = function setAsTrigger(v) {
          if (this._impl) _PhysXShape.prototype.setAsTrigger.call(this, v);
        };
        _proto.setFilerData = function setFilerData(v) {
          if (this._impl) _PhysXShape.prototype.setFilerData.call(this, v);
        };
        _proto.addToBody = function addToBody() {
          if (this._impl) _PhysXShape.prototype.addToBody.call(this);
        };
        _proto.removeFromBody = function removeFromBody() {
          if (this._impl) _PhysXShape.prototype.removeFromBody.call(this);
        };
        _createClass(PhysXTerrainShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return PhysXTerrainShape;
      }(PhysXShape));
      PhysXTerrainShape.heightScale = 1 / 512;
    }
  };
});