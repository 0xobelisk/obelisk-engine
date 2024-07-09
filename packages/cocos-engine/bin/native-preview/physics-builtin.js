System.register(['./physics-selector-fe6b5c81.js', './index-ce98320e.js', './physics-framework-6f0ca899.js', './physics-enum-187e99c4.js', './array-collision-matrix-d2eb0646.js', './deprecated-f8df8d32.js', './director-dc238483.js', './util-9da0b4a2.js', './node-event-18d96a1b.js', './decorators-b63b63a2.js', './collision-matrix-13be3bef.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './touch-af62e326.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './scene-asset.jsb-0d4c6201.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './mesh.jsb-cea8fe4b.js', './skeleton.jsb-04631524.js', './terrain-asset-debe117c.js', './rendering-sub-mesh.jsb-25043997.js', './base.js', './deprecated-80961f27.js', './texture-buffer-pool-005a6472.js', './builtin-pipelines-60825716.js', './instantiate-a87ac743.js', './impl-9c038f77.js', './cached-array-9b18d763.js', './murmurhash2_gc-2108d723.js', './move-2b84a753.js', './capsule-3c7095c4.js'], (function (exports) {
    'use strict';
    var selector, Mat4, Vec3, Quat, intersect, fastRemoveAt, AABB, Color, warnID, error, OBB, Sphere, Capsule, PhysicsSystem, PhysicsGroup, EPhysicsDrawFlags, EAxisDirection, ArrayCollisionMatrix, game, Game, director, maxComponent;
    return {
        setters: [function (module) {
            selector = module.s;
        }, function (module) {
            Mat4 = module.s;
            Vec3 = module.n;
            Quat = module.Q;
            intersect = module.bG;
            fastRemoveAt = module.bz;
            AABB = module.bE;
            Color = module.C;
            warnID = module.d;
            error = module.e;
            OBB = module.cO;
            Sphere = module.bF;
            Capsule = module.cP;
        }, function (module) {
            PhysicsSystem = module.P;
            exports('CharacterControllerContact', module.C);
        }, function (module) {
            PhysicsGroup = module.P;
            EPhysicsDrawFlags = module.i;
            EAxisDirection = module.b;
        }, function (module) {
            ArrayCollisionMatrix = module.A;
        }, function (module) {
            game = module.g;
            Game = module.G;
        }, function (module) {
            director = module.n;
        }, function (module) {
            maxComponent = module.m;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            class BuiltinObject {
              constructor() {
                this.collisionFilterGroup = PhysicsSystem.PhysicsGroup.DEFAULT;
                this.collisionFilterMask = -1;
              }
              getGroup() {
                return this.collisionFilterGroup;
              }
              setGroup(v) {
                this.collisionFilterGroup = v;
              }
              addGroup(v) {
                this.collisionFilterGroup |= v;
              }
              removeGroup(v) {
                this.collisionFilterGroup &= ~v;
              }
              getMask() {
                return this.collisionFilterMask;
              }
              setMask(v) {
                this.collisionFilterMask = v;
              }
              addMask(v) {
                this.collisionFilterMask |= v;
              }
              removeMask(v) {
                this.collisionFilterMask &= ~v;
              }
            }

            const m4_0 = new Mat4();
            const v3_0 = new Vec3();
            const v3_1 = new Vec3();
            const quat_0 = new Quat();
            class BuiltinSharedBody extends BuiltinObject {
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
                v ? this.ref++ : this.ref--;
                if (this.ref === 0) {
                  this.destroy();
                }
              }
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
                      if (intersect.resolve(shapeA.worldShape, shapeB.worldShape)) {
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
                  fastRemoveAt(this.shapes, i);
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
            }
            BuiltinSharedBody.sharedBodesMap = new Map();
            BuiltinSharedBody.idCounter = 0;

            const hitPoint = new Vec3();
            const TriggerEventObject = {
              type: 'onTriggerEnter',
              selfCollider: null,
              otherCollider: null,
              impl: {}
            };
            const aabbTemp = new AABB();
            const AABB_LINE_COUNT = 12;
            class BuiltInWorld {
              constructor() {
                this.shapeArr = [];
                this.bodies = [];
                this._shapeArrPrev = [];
                this._collisionMatrix = new ArrayCollisionMatrix();
                this._collisionMatrixPrev = new ArrayCollisionMatrix();
                this._debugLineCount = 0;
                this._MAX_DEBUG_LINE_COUNT = 16384;
                this._debugDrawFlags = EPhysicsDrawFlags.NONE;
                this._debugConstraintSize = 0.3;
                this._aabbColor = new Color(0, 255, 255, 255);
                this._wireframeColor = new Color(255, 0, 255, 255);
              }
              sweepBox(worldRay, halfExtent, orientation, options, pool, results) {
                warnID(9640);
                return false;
              }
              sweepBoxClosest(worldRay, halfExtent, orientation, options, result) {
                warnID(9640);
                return false;
              }
              sweepSphere(worldRay, radius, options, pool, results) {
                warnID(9640);
                return false;
              }
              sweepSphereClosest(worldRay, radius, options, result) {
                warnID(9640);
                return false;
              }
              sweepCapsule(worldRay, radius, height, orientation, options, pool, results) {
                warnID(9640);
                return false;
              }
              sweepCapsuleClosest(worldRay, radius, height, orientation, options, result) {
                warnID(9640);
                return false;
              }
              setGravity(v) {}
              setAllowSleep(v) {}
              setDefaultMaterial(v) {}
              get impl() {
                return this;
              }
              get debugDrawFlags() {
                return this._debugDrawFlags;
              }
              set debugDrawFlags(v) {
                this._debugDrawFlags = v;
              }
              get debugDrawConstraintSize() {
                return this._debugConstraintSize;
              }
              set debugDrawConstraintSize(v) {
                this._debugConstraintSize = v;
              }
              destroy() {
                if (this.bodies.length) error('You should destroy all physics component first.');
              }
              step(deltaTime) {
                const tmp = this._shapeArrPrev;
                this._shapeArrPrev = this.shapeArr;
                this.shapeArr = tmp;
                this.shapeArr.length = 0;
                for (let i = 0; i < this.bodies.length; i++) {
                  const bodyA = this.bodies[i];
                  for (let j = i + 1; j < this.bodies.length; j++) {
                    const bodyB = this.bodies[j];
                    if ((bodyA.collisionFilterGroup & bodyB.collisionFilterMask) === 0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask) === 0) {
                      continue;
                    }
                    bodyA.intersects(bodyB);
                  }
                }
                this._debugDraw();
              }
              syncSceneToPhysics() {
                for (let i = 0; i < this.bodies.length; i++) {
                  this.bodies[i].syncSceneToPhysics();
                }
              }
              syncAfterEvents() {
                this.syncSceneToPhysics();
              }
              emitEvents() {
                this.emitTriggerEvent();
              }
              raycastClosest(worldRay, options, out) {
                let tmp_d = Infinity;
                const max_d = options.maxDistance;
                const mask = options.mask;
                for (let i = 0; i < this.bodies.length; i++) {
                  const body = this.bodies[i];
                  if (!(body.collisionFilterGroup & mask)) continue;
                  for (let i = 0; i < body.shapes.length; i++) {
                    const shape = body.shapes[i];
                    const distance = intersect.resolve(worldRay, shape.worldShape);
                    if (distance === 0 || distance > max_d) {
                      continue;
                    }
                    if (tmp_d > distance) {
                      tmp_d = distance;
                      Vec3.normalize(hitPoint, worldRay.d);
                      Vec3.scaleAndAdd(hitPoint, worldRay.o, hitPoint, distance);
                      out._assign(hitPoint, distance, shape.collider, Vec3.ZERO);
                    }
                  }
                }
                return !(tmp_d === Infinity);
              }
              raycast(worldRay, options, pool, results) {
                const max_d = options.maxDistance;
                const mask = options.mask;
                for (let i = 0; i < this.bodies.length; i++) {
                  const body = this.bodies[i];
                  if (!(body.collisionFilterGroup & mask)) continue;
                  for (let i = 0; i < body.shapes.length; i++) {
                    const shape = body.shapes[i];
                    const distance = intersect.resolve(worldRay, shape.worldShape);
                    if (distance === 0 || distance > max_d) {
                      continue;
                    } else {
                      const r = pool.add();
                      worldRay.computeHit(hitPoint, distance);
                      r._assign(hitPoint, distance, shape.collider, Vec3.ZERO);
                      results.push(r);
                    }
                  }
                }
                return results.length > 0;
              }
              getSharedBody(node, wrappedBody) {
                return BuiltinSharedBody.getSharedBody(node, this, wrappedBody);
              }
              addSharedBody(body) {
                const index = this.bodies.indexOf(body);
                if (index < 0) {
                  this.bodies.push(body);
                }
              }
              removeSharedBody(body) {
                const index = this.bodies.indexOf(body);
                if (index >= 0) {
                  fastRemoveAt(this.bodies, index);
                }
              }
              emitTriggerEvent() {
                let shapeA;
                let shapeB;
                for (let i = 0; i < this.shapeArr.length; i += 2) {
                  shapeA = this.shapeArr[i];
                  shapeB = this.shapeArr[i + 1];
                  TriggerEventObject.selfCollider = shapeA.collider;
                  TriggerEventObject.otherCollider = shapeB.collider;
                  this._collisionMatrix.set(shapeA.id, shapeB.id, true);
                  if (this._collisionMatrixPrev.get(shapeA.id, shapeB.id)) {
                    TriggerEventObject.type = 'onTriggerStay';
                  } else {
                    TriggerEventObject.type = 'onTriggerEnter';
                  }
                  if (shapeA.collider) {
                    shapeA.collider.emit(TriggerEventObject.type, TriggerEventObject);
                  }
                  TriggerEventObject.selfCollider = shapeB.collider;
                  TriggerEventObject.otherCollider = shapeA.collider;
                  if (shapeB.collider) {
                    shapeB.collider.emit(TriggerEventObject.type, TriggerEventObject);
                  }
                }
                for (let i = 0; i < this._shapeArrPrev.length; i += 2) {
                  shapeA = this._shapeArrPrev[i];
                  shapeB = this._shapeArrPrev[i + 1];
                  if (this._collisionMatrixPrev.get(shapeA.id, shapeB.id)) {
                    if (!this._collisionMatrix.get(shapeA.id, shapeB.id)) {
                      TriggerEventObject.type = 'onTriggerExit';
                      TriggerEventObject.selfCollider = shapeA.collider;
                      TriggerEventObject.otherCollider = shapeB.collider;
                      if (shapeA.collider) {
                        shapeA.collider.emit(TriggerEventObject.type, TriggerEventObject);
                      }
                      TriggerEventObject.selfCollider = shapeB.collider;
                      TriggerEventObject.otherCollider = shapeA.collider;
                      if (shapeB.collider) {
                        shapeB.collider.emit(TriggerEventObject.type, TriggerEventObject);
                      }
                      this._collisionMatrix.set(shapeA.id, shapeB.id, false);
                    }
                  }
                }
                const temp = this._collisionMatrixPrev.matrix;
                this._collisionMatrixPrev.matrix = this._collisionMatrix.matrix;
                this._collisionMatrix.matrix = temp;
                this._collisionMatrix.reset();
              }
              _getDebugRenderer() {
                var _mainWindow;
                const cameras = (_mainWindow = director.root.mainWindow) === null || _mainWindow === void 0 ? void 0 : _mainWindow.cameras;
                if (!cameras) return null;
                if (cameras.length === 0) return null;
                if (!cameras[0]) return null;
                cameras[0].initGeometryRenderer();
                return cameras[0].geometryRenderer;
              }
              _debugDraw() {
                const debugRenderer = this._getDebugRenderer();
                if (!debugRenderer) return;
                this._debugLineCount = 0;
                if (this._debugDrawFlags & EPhysicsDrawFlags.AABB) {
                  for (let i = 0; i < this.bodies.length; i++) {
                    const body = this.bodies[i];
                    for (let j = 0; j < body.shapes.length; j++) {
                      const shape = body.shapes[j];
                      if (this._debugLineCount + AABB_LINE_COUNT < this._MAX_DEBUG_LINE_COUNT) {
                        this._debugLineCount += AABB_LINE_COUNT;
                        shape.getAABB(aabbTemp);
                        debugRenderer.addBoundingBox(aabbTemp, this._aabbColor);
                      }
                    }
                  }
                }
              }
            }

            class BuiltinRigidBody {
              constructor() {
                this._rigidBody = void 0;
                this._sharedBody = void 0;
              }
              get impl() {
                return this;
              }
              get isAwake() {
                return true;
              }
              get isSleepy() {
                return false;
              }
              get isSleeping() {
                return false;
              }
              get rigidBody() {
                return this._rigidBody;
              }
              get sharedBody() {
                return this._sharedBody;
              }
              initialize(com) {
                this._rigidBody = com;
                this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._rigidBody.node, this);
                this._sharedBody.reference = true;
              }
              onEnable() {
                this._sharedBody.enabled = true;
              }
              onDisable() {
                this._sharedBody.enabled = false;
              }
              onDestroy() {
                this._sharedBody.reference = false;
                this._rigidBody = null;
                this._sharedBody = null;
              }
              setMass(v) {}
              setType(v) {}
              setLinearDamping(v) {}
              setAngularDamping(v) {}
              useGravity(v) {}
              useCCD(v) {}
              isUsingCCD() {
                return false;
              }
              setLinearFactor(v) {}
              setAngularFactor(v) {}
              setAllowSleep(v) {}
              wakeUp() {}
              sleep() {}
              clearState() {}
              clearForces() {}
              clearVelocity() {}
              setSleepThreshold(v) {}
              getSleepThreshold() {
                return 0;
              }
              getLinearVelocity(out) {}
              setLinearVelocity(value) {}
              getAngularVelocity(out) {}
              setAngularVelocity(value) {}
              applyForce(force, relativePoint) {}
              applyLocalForce(force, relativePoint) {}
              applyImpulse(force, relativePoint) {}
              applyLocalImpulse(force, relativePoint) {}
              applyTorque(torque) {}
              applyLocalTorque(torque) {}
              setGroup(v) {
                this._sharedBody.setGroup(v);
              }
              getGroup() {
                return this._sharedBody.getGroup();
              }
              addGroup(v) {
                this._sharedBody.addGroup(v);
              }
              removeGroup(v) {
                this._sharedBody.removeGroup(v);
              }
              setMask(v) {
                this._sharedBody.setMask(v);
              }
              getMask() {
                return this._sharedBody.getMask();
              }
              addMask(v) {
                this._sharedBody.addMask(v);
              }
              removeMask(v) {
                this._sharedBody.removeMask(v);
              }
            }

            class BuiltinShape {
              constructor() {
                this.id = BuiltinShape.idCounter++;
                this._sharedBody = void 0;
                this._collider = void 0;
                this._localShape = void 0;
                this._worldShape = void 0;
              }
              getAABB(v) {}
              getBoundingSphere(v) {}
              updateEventListener() {}
              setMaterial(v) {}
              setAsTrigger(v) {}
              get attachedRigidBody() {
                return null;
              }
              setCenter(v) {
                Vec3.copy(this._localShape.center, v);
              }
              get localShape() {
                return this._localShape;
              }
              get worldShape() {
                return this._worldShape;
              }
              get impl() {
                return this._worldShape;
              }
              get sharedBody() {
                return this._sharedBody;
              }
              get collider() {
                return this._collider;
              }
              initialize(comp) {
                this._collider = comp;
                this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
                this._sharedBody.reference = true;
              }
              onLoad() {
                this.setCenter(this._collider.center);
              }
              onEnable() {
                this._sharedBody.addShape(this);
                this._sharedBody.enabled = true;
              }
              onDisable() {
                this._sharedBody.removeShape(this);
                this._sharedBody.enabled = false;
              }
              onDestroy() {
                this._sharedBody.reference = false;
                this._collider = null;
                this._localShape = null;
                this._worldShape = null;
              }
              transform(m, pos, rot, scale) {
                this._localShape.transform(m, pos, rot, scale, this._worldShape);
              }
              getGroup() {
                return this._sharedBody.getGroup();
              }
              setGroup(v) {
                this._sharedBody.setGroup(v);
              }
              addGroup(v) {
                this._sharedBody.addGroup(v);
              }
              removeGroup(v) {
                this._sharedBody.removeGroup(v);
              }
              getMask() {
                return this._sharedBody.getMask();
              }
              setMask(v) {
                this._sharedBody.setMask(v);
              }
              addMask(v) {
                this._sharedBody.addMask(v);
              }
              removeMask(v) {
                this._sharedBody.removeMask(v);
              }
            }
            BuiltinShape.idCounter = 0;

            const tempMin$1 = new Vec3();
            const tempMax$1 = new Vec3();
            class BuiltinBoxShape extends BuiltinShape {
              get localObb() {
                return this._localShape;
              }
              get worldObb() {
                return this._worldShape;
              }
              get collider() {
                return this._collider;
              }
              constructor() {
                super();
                this._localShape = new OBB();
                this._worldShape = new OBB();
              }
              updateSize() {
                Vec3.multiplyScalar(this.localObb.halfExtents, this.collider.size, 0.5);
                Vec3.multiply(this.worldObb.halfExtents, this.localObb.halfExtents, this.collider.node.worldScale);
              }
              onLoad() {
                super.onLoad();
                this.updateSize();
              }
              getAABB(v) {
                this.worldObb.getBoundary(tempMin$1, tempMax$1);
                AABB.fromPoints(v, tempMin$1, tempMax$1);
              }
            }

            const tempMin = new Vec3();
            const tempMax = new Vec3();
            class BuiltinSphereShape extends BuiltinShape {
              updateRadius() {
                this.localSphere.radius = this.collider.radius;
                const s = maxComponent(this.collider.node.worldScale);
                this.worldSphere.radius = this.localSphere.radius * s;
              }
              get localSphere() {
                return this._localShape;
              }
              get worldSphere() {
                return this._worldShape;
              }
              get collider() {
                return this._collider;
              }
              constructor(radius = 0.5) {
                super();
                this._localShape = new Sphere(0, 0, 0, radius);
                this._worldShape = new Sphere(0, 0, 0, radius);
              }
              onLoad() {
                super.onLoad();
                this.updateRadius();
              }
              getAABB(v) {
                this.worldSphere.getBoundary(tempMin, tempMax);
                AABB.fromPoints(v, tempMin, tempMax);
              }
            }

            const temp0 = new Vec3();
            const temp1 = new Vec3();
            class BuiltinCapsuleShape extends BuiltinShape {
              get localCapsule() {
                return this._localShape;
              }
              get worldCapsule() {
                return this._worldShape;
              }
              get collider() {
                return this._collider;
              }
              constructor(radius = 0.5, height = 2, direction = EAxisDirection.Y_AXIS) {
                super();
                const halfHeight = (height - radius * 2) / 2;
                const h = halfHeight < 0 ? 0 : halfHeight;
                this._localShape = new Capsule(radius, h, direction);
                this._worldShape = new Capsule(radius, h, direction);
              }
              setRadius(v) {
                this.localCapsule.radius = v;
                this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
              }
              setCylinderHeight(v) {
                this.localCapsule.halfHeight = v / 2;
                this.localCapsule.updateCache();
                this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
              }
              setDirection(v) {
                this.localCapsule.axis = v;
                this.localCapsule.updateCache();
                this.worldCapsule.axis = v;
                this.worldCapsule.updateCache();
                this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
              }
              onLoad() {
                super.onLoad();
                this.setRadius(this.collider.radius);
                this.setDirection(this.collider.direction);
              }
              getAABB(v) {
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
              }
            }

            game.once(Game.EVENT_PRE_SUBSYSTEM_INIT, () => {
              selector.register('builtin', {
                RigidBody: BuiltinRigidBody,
                BoxShape: BuiltinBoxShape,
                SphereShape: BuiltinSphereShape,
                PhysicsWorld: BuiltInWorld,
                CapsuleShape: BuiltinCapsuleShape
              });
            });

        })
    };
}));
