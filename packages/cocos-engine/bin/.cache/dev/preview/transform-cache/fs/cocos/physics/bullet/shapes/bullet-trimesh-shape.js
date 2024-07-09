System.register("q-bundled:///fs/cocos/physics/bullet/shapes/bullet-trimesh-shape.js", ["./bullet-shape.js", "../bullet-utils.js", "../bullet-cache.js", "../instantiated.js", "../bullet-bvh-triangle-mesh-shape.js"], function (_export, _context) {
  "use strict";

  var BulletShape, cocos2BulletVec3, cocos2BulletTriMesh, BulletCache, bt, EBulletType, BulletBvhTriangleMeshShape, BulletTrimeshShape;
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
    setters: [function (_bulletShapeJs) {
      BulletShape = _bulletShapeJs.BulletShape;
    }, function (_bulletUtilsJs) {
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
      cocos2BulletTriMesh = _bulletUtilsJs.cocos2BulletTriMesh;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
      EBulletType = _instantiatedJs.EBulletType;
    }, function (_bulletBvhTriangleMeshShapeJs) {
      BulletBvhTriangleMeshShape = _bulletBvhTriangleMeshShapeJs.BulletBvhTriangleMeshShape;
    }],
    execute: function () {
      _export("BulletTrimeshShape", BulletTrimeshShape = /*#__PURE__*/function (_BulletShape) {
        _inheritsLoose(BulletTrimeshShape, _BulletShape);
        function BulletTrimeshShape() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BulletShape.call.apply(_BulletShape, [this].concat(args)) || this;
          _this.btBVHMeshShape = void 0;
          _this.refBtTriangleMesh = 0;
          return _this;
        }
        var _proto = BulletTrimeshShape.prototype;
        _proto.setMesh = function setMesh(v) {
          if (!this._isInitialized) return;
          if (this._impl && BulletCache.isNotEmptyShape(this._impl)) {
            if (this._compound) {
              bt.CompoundShape_removeChildShape(this._compound, this._impl);
            }
            bt._safe_delete(this._impl, EBulletType.EBulletTypeCollisionShape);
            BulletCache.delWrapper(this._impl, BulletShape.TYPE);
            this._impl = 0;
          }
          var mesh = v;
          if (mesh && mesh.renderingSubMeshes.length > 0) {
            if (this.collider.convex) {
              var btTriangleMesh = this._getBtTriangleMesh(mesh);
              this._impl = bt.ConvexTriangleMeshShape_new(btTriangleMesh);
            } else {
              this.btBVHMeshShape = BulletBvhTriangleMeshShape.getBulletBvhTriangleMeshShape(mesh.hash, mesh);
              this._impl = bt.ScaledBvhTriangleMeshShape_new(this.btBVHMeshShape.bulletBvhTriangleMeshShapePtr, 1, 1, 1);
            }
            var bt_v3 = BulletCache.instance.BT_V3_0;
            cocos2BulletVec3(bt_v3, this._collider.node.worldScale);
            bt.CollisionShape_setLocalScaling(this._impl, bt_v3);
            bt.CollisionShape_setMargin(this._impl, 0.01);
            this.setCompound(this._compound);
            this.updateByReAdd();
            this.setWrapper();
          } else {
            this._impl = bt.EmptyShape_static();
          }
        };
        _proto.onComponentSet = function onComponentSet() {
          this.setMesh(this.collider.mesh);
        };
        _proto.onDestroy = function onDestroy() {
          if (this.collider.convex) {
            if (this.refBtTriangleMesh) {
              bt._safe_delete(this.refBtTriangleMesh, EBulletType.EBulletTypeTriangleMesh);
            }
          } else if (this.btBVHMeshShape) {
            this.btBVHMeshShape.reference = false;
          }
          _BulletShape.prototype.onDestroy.call(this);
        };
        _proto.updateScale = function updateScale() {
          _BulletShape.prototype.updateScale.call(this);
          var bt_v3 = BulletCache.instance.BT_V3_0;
          cocos2BulletVec3(bt_v3, this._collider.node.worldScale);
          bt.CollisionShape_setLocalScaling(this._impl, bt_v3);
          this.updateCompoundTransform();
        };
        _proto._getBtTriangleMesh = function _getBtTriangleMesh(mesh) {
          this.refBtTriangleMesh = bt.TriangleMesh_new();
          cocos2BulletTriMesh(this.refBtTriangleMesh, mesh);
          return this.refBtTriangleMesh;
        };
        _createClass(BulletTrimeshShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return BulletTrimeshShape;
      }(BulletShape));
    }
  };
});