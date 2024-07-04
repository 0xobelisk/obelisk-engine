System.register("q-bundled:///fs/cocos/physics/cannon/shapes/cannon-terrain-shape.js", ["@cocos/cannon", "./cannon-shape.js", "../../../core/index.js", "../cannon-util.js"], function (_export, _context) {
  "use strict";

  var CANNON, CannonShape, Vec3, Quat, commitShapeUpdates, CANNON_AABB_LOCAL, CANNON_AABB, CANNON_TRANSFORM, CannonTerrainShape;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    }, function (_cannonShapeJs) {
      CannonShape = _cannonShapeJs.CannonShape;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
    }, function (_cannonUtilJs) {
      commitShapeUpdates = _cannonUtilJs.commitShapeUpdates;
    }],
    execute: function () {
      CANNON_AABB_LOCAL = new CANNON.AABB();
      CANNON_AABB = new CANNON.AABB();
      CANNON_TRANSFORM = new CANNON.Transform(); // eslint-disable-next-line func-names
      CANNON.Heightfield.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        var frame = CANNON_TRANSFORM;
        var result = CANNON_AABB;
        Vec3.copy(frame.position, pos);
        Quat.copy(frame.quaternion, quat);
        var s = this.elementSize;
        var data = this.data;
        CANNON_AABB_LOCAL.lowerBound.set(0, 0, this.minValue);
        CANNON_AABB_LOCAL.upperBound.set((data.length - 1) * s, (data[0].length - 1) * s, this.maxValue);
        CANNON_AABB_LOCAL.toWorldFrame(frame, result);
        min.copy(result.lowerBound);
        max.copy(result.upperBound);
      };
      _export("CannonTerrainShape", CannonTerrainShape = /*#__PURE__*/function (_CannonShape) {
        _inheritsLoose(CannonTerrainShape, _CannonShape);
        var _proto = CannonTerrainShape.prototype;
        _proto.setTerrain = function setTerrain(v) {
          if (v) {
            if (this._terrainID !== v._uuid) {
              var terrain = v;
              var sizeI = terrain.getVertexCountI();
              var sizeJ = terrain.getVertexCountJ();
              this._terrainID = terrain._uuid;
              this.data.length = sizeI - 1;
              for (var i = 0; i < sizeI; i++) {
                if (this.data[i] == null) this.data[i] = [];
                this.data[i].length = sizeJ - 1;
                for (var j = 0; j < sizeJ; j++) {
                  this.data[i][j] = terrain.getHeight(i, sizeJ - 1 - j);
                }
              }
              this.options.elementSize = terrain.tileSize;
              this.updateProperties(this.data, this.options.elementSize);
            }
          } else if (this._terrainID !== '') {
            this._terrainID = '';
            this.data.length = 1;
            this.data[0] = this.data[0] || [];
            this.data[0].length = 0;
            this.options.elementSize = 0;
            this.updateProperties(this.data, this.options.elementSize);
          }
        };
        function CannonTerrainShape() {
          var _this;
          _this = _CannonShape.call(this) || this;
          _this.data = void 0;
          _this.options = void 0;
          _this._terrainID = void 0;
          _this.data = [[]];
          _this.options = {
            elementSize: 0
          };
          _this._terrainID = '';
          return _this;
        }
        _proto.onComponentSet = function onComponentSet() {
          var terrain = this.collider.terrain;
          if (terrain) {
            var sizeI = terrain.getVertexCountI();
            var sizeJ = terrain.getVertexCountJ();
            for (var i = 0; i < sizeI; i++) {
              if (this.data[i] == null) this.data[i] = [];
              for (var j = 0; j < sizeJ; j++) {
                this.data[i][j] = terrain.getHeight(i, sizeJ - 1 - j);
              }
            }
            this.options.elementSize = terrain.tileSize;
            this._terrainID = terrain._uuid;
          }
          this._shape = new CANNON.Heightfield(this.data, this.options);
        };
        _proto.onLoad = function onLoad() {
          _CannonShape.prototype.onLoad.call(this);
          this.setTerrain(this.collider.terrain);
        };
        _proto.updateProperties = function updateProperties(data, elementSize) {
          var impl = this.impl;
          impl.data = data;
          impl.elementSize = elementSize;
          impl.updateMinValue();
          impl.updateMaxValue();
          impl.updateBoundingSphereRadius();
          impl.update();
          if (this._index >= 0) {
            commitShapeUpdates(this._body);
          }
        }

        // override
        ;
        _proto._setCenter = function _setCenter(v) {
          var terrain = this.collider.terrain;
          if (terrain) {
            Quat.fromEuler(this._orient, -90, 0, 0);
            var lpos = this._offset;
            Vec3.set(lpos, 0, 0, (terrain.getVertexCountJ() - 1) * terrain.tileSize);
            Vec3.add(lpos, lpos, v);
            // Vec3.multiply(lpos, lpos, this._collider.node.worldScale);
          }
        };
        _createClass(CannonTerrainShape, [{
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
        return CannonTerrainShape;
      }(CannonShape));
    }
  };
});