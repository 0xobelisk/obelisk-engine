System.register("q-bundled:///fs/cocos/physics/bullet/bullet-bvh-triangle-mesh-shape.js", ["./instantiated.js", "./bullet-utils.js"], function (_export, _context) {
  "use strict";

  var bt, EBulletType, cocos2BulletTriMesh, _class, BulletBvhTriangleMeshShape;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
      EBulletType = _instantiatedJs.EBulletType;
    }, function (_bulletUtilsJs) {
      cocos2BulletTriMesh = _bulletUtilsJs.cocos2BulletTriMesh;
    }],
    execute: function () {
      _export("BulletBvhTriangleMeshShape", BulletBvhTriangleMeshShape = /*#__PURE__*/function () {
        BulletBvhTriangleMeshShape.getBulletBvhTriangleMeshShape = function getBulletBvhTriangleMeshShape(key, mesh) {
          var newBulletBvhTriangleMeshShape;
          if (BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.has(key)) {
            //can be improved
            newBulletBvhTriangleMeshShape = BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.get(key);
            newBulletBvhTriangleMeshShape.reference = true;
          } else {
            newBulletBvhTriangleMeshShape = new BulletBvhTriangleMeshShape(key, mesh);
            BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.set(key, newBulletBvhTriangleMeshShape);
          }
          return newBulletBvhTriangleMeshShape;
        };
        function BulletBvhTriangleMeshShape(key, mesh) {
          this.key = void 0;
          this.ref = 0;
          this.bulletBvhTriangleMeshShapePtr = void 0;
          this.btTriangleMeshPtr = 0;
          this.reference = true;
          this.key = key;
          this.btTriangleMeshPtr = bt.TriangleMesh_new();
          cocos2BulletTriMesh(this.btTriangleMeshPtr, mesh);
          this.bulletBvhTriangleMeshShapePtr = bt.BvhTriangleMeshShape_new(this.btTriangleMeshPtr, true, true);
        }
        var _proto = BulletBvhTriangleMeshShape.prototype;
        _proto.destroy = function destroy() {
          if (this.bulletBvhTriangleMeshShapePtr) {
            bt._safe_delete(EBulletType.EBulletTypeCollisionShape, this.bulletBvhTriangleMeshShapePtr);
          }
          if (this.btTriangleMeshPtr) {
            bt._safe_delete(EBulletType.EBulletTypeTriangleMesh, this.btTriangleMeshPtr);
          }
          BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap["delete"](this.key);
        };
        _createClass(BulletBvhTriangleMeshShape, [{
          key: "reference",
          set: function set(v) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            v ? this.ref++ : this.ref--;
            if (this.ref === 0) {
              this.destroy();
            }
          }
        }]);
        return BulletBvhTriangleMeshShape;
      }());
      _class = BulletBvhTriangleMeshShape;
      BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap = new Map();
    }
  };
});