System.register("q-bundled:///fs/cocos/physics/bullet/bullet-bvh-triangle-mesh-shape.js", ["./instantiated.js", "./bullet-utils.js"], function (_export, _context) {
  "use strict";

  var bt, EBulletType, cocos2BulletTriMesh, BulletBvhTriangleMeshShape, _class;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export("BulletBvhTriangleMeshShape", void 0);
  return {
    setters: [function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
      EBulletType = _instantiatedJs.EBulletType;
    }, function (_bulletUtilsJs) {
      cocos2BulletTriMesh = _bulletUtilsJs.cocos2BulletTriMesh;
    }],
    execute: function () {
      _export("BulletBvhTriangleMeshShape", BulletBvhTriangleMeshShape = class BulletBvhTriangleMeshShape {
        static getBulletBvhTriangleMeshShape(key, mesh) {
          let newBulletBvhTriangleMeshShape;
          if (BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.has(key)) {
            //can be improved
            newBulletBvhTriangleMeshShape = BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.get(key);
            newBulletBvhTriangleMeshShape.reference = true;
          } else {
            newBulletBvhTriangleMeshShape = new BulletBvhTriangleMeshShape(key, mesh);
            BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.set(key, newBulletBvhTriangleMeshShape);
          }
          return newBulletBvhTriangleMeshShape;
        }
        set reference(v) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          v ? this.ref++ : this.ref--;
          if (this.ref === 0) {
            this.destroy();
          }
        }
        constructor(key, mesh) {
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
        destroy() {
          if (this.bulletBvhTriangleMeshShapePtr) {
            bt._safe_delete(EBulletType.EBulletTypeCollisionShape, this.bulletBvhTriangleMeshShapePtr);
          }
          if (this.btTriangleMeshPtr) {
            bt._safe_delete(EBulletType.EBulletTypeTriangleMesh, this.btTriangleMeshPtr);
          }
          BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.delete(this.key);
        }
      });
      _class = BulletBvhTriangleMeshShape;
      BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap = new Map();
    }
  };
});