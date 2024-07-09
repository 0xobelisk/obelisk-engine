System.register("q-bundled:///fs/cocos/physics/cocos/builtin-shared-body.js", ["../../core/index.js", "./object/builtin-object.js", "../framework/index.js", "../framework/physics-enum.js"], function (_export, _context) {
  "use strict";

  var Mat4, Quat, Vec3, js, geometry, BuiltinObject, PhysicsSystem, PhysicsGroup, BuiltinSharedBody, _class, m4_0, v3_0, v3_1, quat_0;
  _export("BuiltinSharedBody", void 0);
  return {
    setters: [function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      js = _coreIndexJs.js;
      geometry = _coreIndexJs.geometry;
    }, function (_objectBuiltinObjectJs) {
      BuiltinObject = _objectBuiltinObjectJs.BuiltinObject;
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_frameworkPhysicsEnumJs) {
      PhysicsGroup = _frameworkPhysicsEnumJs.PhysicsGroup;
    }],
    execute: function () {
      m4_0 = new Mat4();
      v3_0 = new Vec3();
      v3_1 = new Vec3();
      quat_0 = new Quat();
      /**
       * Built-in static collider, no physical forces involved
       */
      _export("BuiltinSharedBody", BuiltinSharedBody = class BuiltinSharedBody extends BuiltinObject {
        static getSharedBody(node, wrappedWorld, wrappedBody) {
          const key = node.uuid;
          let newSB;
          if (BuiltinSharedBody.sharedBodesMap.has(key)) {
            newSB = BuiltinSharedBody.sharedBodesMap.get(key);
          } else {
            newSB = new BuiltinSharedBody(node, wrappedWorld);
            const g = PhysicsGroup.DEFAULT;
            const m = PhysicsSystem.instance.collisionMatrix[g];
            newSB.collisionFilterGroup = g;
            newSB.collisionFilterMask = m;
            BuiltinSharedBody.sharedBodesMap.set(node.uuid, newSB);
          }
          if (wrappedBody) {
            newSB.wrappedBody = wrappedBody;
            const g = wrappedBody.rigidBody.group;
            const m = PhysicsSystem.instance.collisionMatrix[g];
            newSB.collisionFilterGroup = g;
            newSB.collisionFilterMask = m;
          }
          return newSB;
        }
        get id() {
          return this._id;
        }

        /**
         * add or remove from world \
         * add, if enable \
         * remove, if disable & shapes.length == 0 & wrappedBody disable
         */
        set enabled(v) {
          if (v) {
            if (this.index < 0) {
              this.index = this.world.bodies.length;
              this.world.addSharedBody(this);
              this.syncInitial();
            }
          } else if (this.index >= 0) {
            const isRemove = this.shapes.length === 0;
            if (isRemove) {
              this.index = -1;
              this.world.removeSharedBody(this);
            }
          }
        }
        set reference(v) {
          // eslint-disable-next-line no-unused-expressions
          v ? this.ref++ : this.ref--;
          if (this.ref === 0) {
            this.destroy();
          }
        }

        /** id generator */

        constructor(node, world) {
          super();
          this._id = void 0;
          this.index = -1;
          this.ref = 0;
          this.node = void 0;
          this.world = void 0;
          this.shapes = [];
          this.wrappedBody = null;
          this._id = BuiltinSharedBody.idCounter++;
          this.node = node;
          this.world = world;
        }
        intersects(body) {
          for (let i = 0; i < this.shapes.length; i++) {
            const shapeA = this.shapes[i];
            for (let j = 0; j < body.shapes.length; j++) {
              const shapeB = body.shapes[j];
              if (shapeA.collider.needTriggerEvent || shapeB.collider.needTriggerEvent) {
                if (geometry.intersect.resolve(shapeA.worldShape, shapeB.worldShape)) {
                  this.world.shapeArr.push(shapeA);
                  this.world.shapeArr.push(shapeB);
                }
              }
            }
          }
        }
        addShape(shape) {
          const i = this.shapes.indexOf(shape);
          if (i < 0) {
            this.shapes.push(shape);
          }
        }
        removeShape(shape) {
          const i = this.shapes.indexOf(shape);
          if (i >= 0) {
            js.array.fastRemoveAt(this.shapes, i);
          }
        }
        syncSceneToPhysics() {
          if (this.node.hasChangedFlags) {
            this.node.getWorldMatrix(m4_0);
            v3_0.set(this.node.worldPosition);
            quat_0.set(this.node.worldRotation);
            v3_1.set(this.node.worldScale);
            for (let i = 0; i < this.shapes.length; i++) {
              this.shapes[i].transform(m4_0, v3_0, quat_0, v3_1);
            }
          }
        }
        syncInitial() {
          this.node.getWorldMatrix(m4_0);
          v3_0.set(this.node.worldPosition);
          quat_0.set(this.node.worldRotation);
          v3_1.set(this.node.worldScale);
          for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].transform(m4_0, v3_0, quat_0, v3_1);
          }
        }
        destroy() {
          BuiltinSharedBody.sharedBodesMap.delete(this.node.uuid);
          this.node = null;
          this.world = null;
          this.shapes = null;
        }
      });
      _class = BuiltinSharedBody;
      BuiltinSharedBody.sharedBodesMap = new Map();
      BuiltinSharedBody.idCounter = 0;
    }
  };
});