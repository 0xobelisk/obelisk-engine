System.register(['./deprecated-f8df8d32.js', './director-dc238483.js', './physics-selector-fe6b5c81.js', './index-ce98320e.js', './find-7a03d1cc.js', './instantiated-8e31be8a.js', './device-90bc7390.js', './physics-framework-6f0ca899.js', './builtin-res-mgr.jsb-c9e8e53a.js', './physics-enum-187e99c4.js', './array-collision-matrix-d2eb0646.js', './util-9da0b4a2.js', './node-event-18d96a1b.js', './scene-asset.jsb-0d4c6201.js', './decorators-b63b63a2.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './wasm-native-08118220.js', './impl-9c038f77.js', './collision-matrix-13be3bef.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './mesh.jsb-cea8fe4b.js', './skeleton.jsb-04631524.js', './terrain-asset-debe117c.js', './rendering-sub-mesh.jsb-25043997.js', './base.js', './deprecated-80961f27.js', './texture-buffer-pool-005a6472.js', './builtin-pipelines-60825716.js', './instantiate-a87ac743.js', './touch-af62e326.js', './cached-array-9b18d763.js', './murmurhash2_gc-2108d723.js', './move-2b84a753.js', './capsule-3c7095c4.js'], (function () {
    'use strict';
    var game, Game, director, selector, Vec3, Quat, Mat4, Color, fastRemoveAt, error, absMaxComponent, absMax, warn, toRadian, degreesToRadians, bt, btCache, EBulletType, EBulletDebugDrawModes, EBulletTriangleRaycastFlag, PrimitiveMode, PhysicsSystem, CharacterControllerContact, TransformBit, PhysicsGroup, ERigidBodyType, EColliderType, EPhysicsDrawFlags, EConstraintMode, EDriverMode, ArrayCollisionMatrix, VEC3_0, absolute;
    return {
        setters: [function (module) {
            game = module.g;
            Game = module.G;
        }, function (module) {
            director = module.n;
        }, function (module) {
            selector = module.s;
        }, function (module) {
            Vec3 = module.n;
            Quat = module.Q;
            Mat4 = module.s;
            Color = module.C;
            fastRemoveAt = module.bz;
            error = module.e;
            absMaxComponent = module.a2;
            absMax = module.a3;
            warn = module.w;
            toRadian = module.J;
            degreesToRadians = module.cM;
        }, function () {}, function (module) {
            bt = module.b;
            btCache = module.a;
            EBulletType = module.E;
            EBulletDebugDrawModes = module.c;
            EBulletTriangleRaycastFlag = module.d;
        }, function (module) {
            PrimitiveMode = module.u;
        }, function (module) {
            PhysicsSystem = module.P;
            CharacterControllerContact = module.C;
        }, function (module) {
            TransformBit = module.Z;
        }, function (module) {
            PhysicsGroup = module.P;
            ERigidBodyType = module.E;
            EColliderType = module.a;
            EPhysicsDrawFlags = module.i;
            EConstraintMode = module.e;
            EDriverMode = module.f;
        }, function (module) {
            ArrayCollisionMatrix = module.A;
        }, function (module) {
            VEC3_0 = module.V;
            absolute = module.a;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            const TriggerEventObject = {
              type: 'onTriggerEnter',
              selfCollider: null,
              otherCollider: null,
              impl: null
            };
            const CollisionEventObject = {
              type: 'onCollisionEnter',
              selfCollider: null,
              otherCollider: null,
              contacts: [],
              impl: null
            };
            const CharacterTriggerEventObject = {
              type: 'onControllerTriggerEnter',
              collider: null,
              characterController: null,
              impl: null
            };
            class BulletCache {
              constructor() {
                this.BT_TRANSFORM_0 = bt.Transform_new();
                this.BT_TRANSFORM_1 = bt.Transform_new();
                this.BT_V3_0 = bt.Vec3_new(0, 0, 0);
                this.BT_V3_1 = bt.Vec3_new(0, 0, 0);
                this.BT_V3_2 = bt.Vec3_new(0, 0, 0);
                this.BT_QUAT_0 = bt.Quat_new(0, 0, 0, 1);
              }
              static get instance() {
                if (BulletCache._instance == null) BulletCache._instance = new BulletCache();
                return BulletCache._instance;
              }
              static setWrapper(impl, type, wrap) {
                if (!this.ROOT[type]) this.ROOT[type] = {};
                this.ROOT[type][impl] = wrap;
              }
              static delWrapper(impl, type) {
                delete this.ROOT[type][impl];
              }
              static getWrapper(ptr, type) {
                return this.ROOT[type][ptr];
              }
              static isNotEmptyShape(ptr) {
                return ptr !== bt.EmptyShape_static();
              }
            }
            BulletCache._instance = void 0;
            BulletCache.ROOT = {};
            const CC_V3_0 = new Vec3();
            const CC_V3_1 = new Vec3();
            const CC_V3_2 = new Vec3();
            const CC_QUAT_0 = new Quat();
            const CC_QUAT_1 = new Quat();
            const CC_MAT4_0 = new Mat4();
            new Mat4();
            const CC_COLOR_0 = new Color();
            btCache.CACHE = BulletCache;

            function cocos2BulletVec3(out, v) {
              bt.Vec3_set(out, v.x, v.y, v.z);
              return out;
            }
            function bullet2CocosVec3(out, v) {
              const rawVertexBuffer = bt.HEAPF32.subarray(v / 4, v / 4 + 3);
              out.x = rawVertexBuffer[0];
              out.y = rawVertexBuffer[1];
              out.z = rawVertexBuffer[2];
              return out;
            }
            function cocos2BulletQuat(out, q) {
              bt.Quat_set(out, q.x, q.y, q.z, q.w);
              return out;
            }
            function bullet2CocosQuat(out, q) {
              const rawVertexBuffer = bt.HEAPF32.subarray(q / 4, q / 4 + 4);
              out.x = rawVertexBuffer[0];
              out.y = rawVertexBuffer[1];
              out.z = rawVertexBuffer[2];
              out.w = rawVertexBuffer[3];
              return out;
            }
            function cocos2BulletTriMesh(out, mesh) {
              const len = mesh.renderingSubMeshes.length;
              for (let i = 0; i < len; i++) {
                const subMesh = mesh.renderingSubMeshes[i];
                const geoInfo = subMesh.geometricInfo;
                if (geoInfo) {
                  const primitiveMode = subMesh.primitiveMode;
                  const vb = geoInfo.positions;
                  const ib = geoInfo.indices;
                  const v0 = BulletCache.instance.BT_V3_0;
                  const v1 = BulletCache.instance.BT_V3_1;
                  const v2 = BulletCache.instance.BT_V3_2;
                  if (primitiveMode === PrimitiveMode.TRIANGLE_LIST) {
                    const cnt = ib.length;
                    for (let j = 0; j < cnt; j += 3) {
                      const i0 = ib[j] * 3;
                      const i1 = ib[j + 1] * 3;
                      const i2 = ib[j + 2] * 3;
                      bt.Vec3_set(v0, vb[i0], vb[i0 + 1], vb[i0 + 2]);
                      bt.Vec3_set(v1, vb[i1], vb[i1 + 1], vb[i1 + 2]);
                      bt.Vec3_set(v2, vb[i2], vb[i2 + 1], vb[i2 + 2]);
                      bt.TriangleMesh_addTriangle(out, v0, v1, v2, false);
                    }
                  } else if (primitiveMode === PrimitiveMode.TRIANGLE_STRIP) {
                    const cnt = ib.length - 2;
                    let rev = 0;
                    for (let j = 0; j < cnt; j += 1) {
                      const i0 = ib[j - rev] * 3;
                      const i1 = ib[j + rev + 1] * 3;
                      const i2 = ib[j + 2] * 3;
                      rev = ~rev;
                      bt.Vec3_set(v0, vb[i0], vb[i0 + 1], vb[i0 + 2]);
                      bt.Vec3_set(v1, vb[i1], vb[i1 + 1], vb[i1 + 2]);
                      bt.Vec3_set(v2, vb[i2], vb[i2 + 1], vb[i2 + 2]);
                      bt.TriangleMesh_addTriangle(out, v0, v1, v2, false);
                    }
                  } else if (primitiveMode === PrimitiveMode.TRIANGLE_FAN) {
                    const cnt = ib.length - 1;
                    const i0 = ib[0] * 3;
                    bt.Vec3_set(v0, vb[i0], vb[i0 + 1], vb[i0 + 2]);
                    for (let j = 1; j < cnt; j += 1) {
                      const i1 = ib[j] * 3;
                      const i2 = ib[j + 1] * 3;
                      bt.Vec3_set(v1, vb[i1], vb[i1 + 1], vb[i1 + 2]);
                      bt.Vec3_set(v2, vb[i2], vb[i2 + 1], vb[i2 + 2]);
                      bt.TriangleMesh_addTriangle(out, v0, v1, v2, false);
                    }
                  }
                }
              }
              return out;
            }
            function force2Impulse(force, dt) {
              return force * dt;
            }

            let EBtSharedBodyDirty;
            (function (EBtSharedBodyDirty) {
              EBtSharedBodyDirty[EBtSharedBodyDirty["BODY_RE_ADD"] = 1] = "BODY_RE_ADD";
              EBtSharedBodyDirty[EBtSharedBodyDirty["GHOST_RE_ADD"] = 2] = "GHOST_RE_ADD";
            })(EBtSharedBodyDirty || (EBtSharedBodyDirty = {}));
            let btCollisionFlags;
            (function (btCollisionFlags) {
              btCollisionFlags[btCollisionFlags["CF_STATIC_OBJECT"] = 1] = "CF_STATIC_OBJECT";
              btCollisionFlags[btCollisionFlags["CF_KINEMATIC_OBJECT"] = 2] = "CF_KINEMATIC_OBJECT";
              btCollisionFlags[btCollisionFlags["CF_NO_CONTACT_RESPONSE"] = 4] = "CF_NO_CONTACT_RESPONSE";
              btCollisionFlags[btCollisionFlags["CF_CUSTOM_MATERIAL_CALLBACK"] = 8] = "CF_CUSTOM_MATERIAL_CALLBACK";
              btCollisionFlags[btCollisionFlags["CF_CHARACTER_OBJECT"] = 16] = "CF_CHARACTER_OBJECT";
              btCollisionFlags[btCollisionFlags["CF_DISABLE_VISUALIZE_OBJECT"] = 32] = "CF_DISABLE_VISUALIZE_OBJECT";
              btCollisionFlags[btCollisionFlags["CF_DISABLE_SPU_COLLISION_PROCESSING"] = 64] = "CF_DISABLE_SPU_COLLISION_PROCESSING";
            })(btCollisionFlags || (btCollisionFlags = {}));
            let btCollisionObjectTypes;
            (function (btCollisionObjectTypes) {
              btCollisionObjectTypes[btCollisionObjectTypes["CO_COLLISION_OBJECT"] = 1] = "CO_COLLISION_OBJECT";
              btCollisionObjectTypes[btCollisionObjectTypes["CO_RIGID_BODY"] = 2] = "CO_RIGID_BODY";
              btCollisionObjectTypes[btCollisionObjectTypes["CO_GHOST_OBJECT"] = 4] = "CO_GHOST_OBJECT";
              btCollisionObjectTypes[btCollisionObjectTypes["CO_SOFT_BODY"] = 8] = "CO_SOFT_BODY";
              btCollisionObjectTypes[btCollisionObjectTypes["CO_HF_FLUID"] = 16] = "CO_HF_FLUID";
              btCollisionObjectTypes[btCollisionObjectTypes["CO_USER_TYPE"] = 32] = "CO_USER_TYPE";
              btCollisionObjectTypes[btCollisionObjectTypes["CO_FEATHERSTONE_LINK"] = 64] = "CO_FEATHERSTONE_LINK";
            })(btCollisionObjectTypes || (btCollisionObjectTypes = {}));
            let btCollisionObjectStates;
            (function (btCollisionObjectStates) {
              btCollisionObjectStates[btCollisionObjectStates["ACTIVE_TAG"] = 1] = "ACTIVE_TAG";
              btCollisionObjectStates[btCollisionObjectStates["ISLAND_SLEEPING"] = 2] = "ISLAND_SLEEPING";
              btCollisionObjectStates[btCollisionObjectStates["WANTS_DEACTIVATION"] = 3] = "WANTS_DEACTIVATION";
              btCollisionObjectStates[btCollisionObjectStates["DISABLE_DEACTIVATION"] = 4] = "DISABLE_DEACTIVATION";
              btCollisionObjectStates[btCollisionObjectStates["DISABLE_SIMULATION"] = 5] = "DISABLE_SIMULATION";
            })(btCollisionObjectStates || (btCollisionObjectStates = {}));
            let btRigidBodyFlags;
            (function (btRigidBodyFlags) {
              btRigidBodyFlags[btRigidBodyFlags["BT_DISABLE_WORLD_GRAVITY"] = 1] = "BT_DISABLE_WORLD_GRAVITY";
              btRigidBodyFlags[btRigidBodyFlags["BT_ENABLE_GYROPSCOPIC_FORCE"] = 2] = "BT_ENABLE_GYROPSCOPIC_FORCE";
            })(btRigidBodyFlags || (btRigidBodyFlags = {}));

            const v3_0$6 = CC_V3_0;
            const v3_1$2 = CC_V3_1;
            class BulletRigidBody {
              get isAwake() {
                const state = bt.CollisionObject_getActivationState(this.impl);
                return state === btCollisionObjectStates.ACTIVE_TAG || state === btCollisionObjectStates.DISABLE_DEACTIVATION;
              }
              get isSleepy() {
                const state = bt.CollisionObject_getActivationState(this.impl);
                return state === btCollisionObjectStates.WANTS_DEACTIVATION;
              }
              get isSleeping() {
                const state = bt.CollisionObject_getActivationState(this.impl);
                return state === btCollisionObjectStates.ISLAND_SLEEPING;
              }
              setMass(value) {
                if (!this._rigidBody.isDynamic) return;
                bt.RigidBody_setMass(this.impl, value);
                this._wakeUpIfSleep();
                this._sharedBody.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
              }
              setType(v) {
                this._sharedBody.setType(v);
              }
              setLinearDamping(value) {
                bt.RigidBody_setDamping(this.impl, this._rigidBody.linearDamping, this._rigidBody.angularDamping);
              }
              setAngularDamping(value) {
                bt.RigidBody_setDamping(this.impl, this._rigidBody.linearDamping, this._rigidBody.angularDamping);
              }
              useGravity(value) {
                if (!this._rigidBody.isDynamic) return;
                let m_rigidBodyFlag = bt.RigidBody_getFlags(this.impl);
                if (value) {
                  m_rigidBodyFlag &= ~btRigidBodyFlags.BT_DISABLE_WORLD_GRAVITY;
                } else {
                  bt.RigidBody_setGravity(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, Vec3.ZERO));
                  m_rigidBodyFlag |= btRigidBodyFlags.BT_DISABLE_WORLD_GRAVITY;
                }
                bt.RigidBody_setFlags(this.impl, m_rigidBodyFlag);
                this._wakeUpIfSleep();
                this._sharedBody.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
              }
              useCCD(value) {
                bt.CollisionObject_setCcdMotionThreshold(this.impl, value ? 0.01 : 0);
                bt.CollisionObject_setCcdSweptSphereRadius(this.impl, value ? 0.1 : 0);
                this._isUsingCCD = value;
              }
              isUsingCCD() {
                return this._isUsingCCD;
              }
              setLinearFactor(v) {
                bt.RigidBody_setLinearFactor(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, v));
                this._wakeUpIfSleep();
              }
              setAngularFactor(v) {
                bt.RigidBody_setAngularFactor(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, v));
                this._wakeUpIfSleep();
              }
              setAllowSleep(v) {
                if (!this._rigidBody.isDynamic) return;
                if (v) {
                  bt.CollisionObject_forceActivationState(this.impl, btCollisionObjectStates.ACTIVE_TAG);
                } else {
                  bt.CollisionObject_forceActivationState(this.impl, btCollisionObjectStates.DISABLE_DEACTIVATION);
                }
                this._wakeUpIfSleep();
              }
              get impl() {
                return this._sharedBody.body;
              }
              get rigidBody() {
                return this._rigidBody;
              }
              get sharedBody() {
                return this._sharedBody;
              }
              get isEnabled() {
                return this._isEnabled;
              }
              constructor() {
                this.id = void 0;
                this._isEnabled = false;
                this._isUsingCCD = false;
                this._sharedBody = void 0;
                this._rigidBody = void 0;
                this.id = BulletRigidBody.idCounter++;
              }
              clearState() {
                bt.RigidBody_clearState(this.impl);
              }
              clearVelocity() {
                this.setLinearVelocity(Vec3.ZERO);
                this.setAngularVelocity(Vec3.ZERO);
              }
              clearForces() {
                bt.RigidBody_clearForces(this.impl);
              }
              initialize(com) {
                this._rigidBody = com;
                this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._rigidBody.node, this);
                this._sharedBody.reference = true;
              }
              onEnable() {
                this._isEnabled = true;
                this.setMass(this._rigidBody.mass);
                this.setAllowSleep(this._rigidBody.allowSleep);
                this.setLinearDamping(this._rigidBody.linearDamping);
                this.setAngularDamping(this._rigidBody.angularDamping);
                this.setLinearFactor(this._rigidBody.linearFactor);
                this.setAngularFactor(this._rigidBody.angularFactor);
                this.useGravity(this._rigidBody.useGravity);
                this._sharedBody.bodyEnabled = true;
              }
              onDisable() {
                this._isEnabled = false;
                this._sharedBody.bodyEnabled = false;
              }
              onDestroy() {
                this._sharedBody.reference = false;
                this._rigidBody = null;
                this._sharedBody = null;
              }
              wakeUp(force = true) {
                bt.CollisionObject_activate(this.impl, force);
              }
              sleep() {
                const state = bt.CollisionObject_getActivationState(this.impl);
                if (state !== btCollisionObjectStates.DISABLE_DEACTIVATION && state !== btCollisionObjectStates.DISABLE_SIMULATION) {
                  bt.CollisionObject_forceActivationState(this.impl, btCollisionObjectStates.ISLAND_SLEEPING);
                }
              }
              setSleepThreshold(v) {
                this._wakeUpIfSleep();
                bt.RigidBody_setSleepingThresholds(this.impl, v, v);
              }
              getSleepThreshold() {
                return bt.RigidBody_getLinearSleepingThreshold(this.impl);
              }
              getLinearVelocity(out) {
                return bullet2CocosVec3(out, bt.RigidBody_getLinearVelocity(this.impl));
              }
              setLinearVelocity(value) {
                this._wakeUpIfSleep();
                cocos2BulletVec3(bt.RigidBody_getLinearVelocity(this.impl), value);
              }
              getAngularVelocity(out) {
                return bullet2CocosVec3(out, bt.RigidBody_getAngularVelocity(this.impl));
              }
              setAngularVelocity(value) {
                this._wakeUpIfSleep();
                cocos2BulletVec3(bt.RigidBody_getAngularVelocity(this.impl), value);
              }
              applyLocalForce(force, rel_pos) {
                this._sharedBody.syncSceneToPhysics();
                this._wakeUpIfSleep();
                const quat = this._sharedBody.node.worldRotation;
                const v = Vec3.transformQuat(v3_0$6, force, quat);
                const rp = rel_pos ? Vec3.transformQuat(v3_1$2, rel_pos, quat) : Vec3.ZERO;
                bt.RigidBody_applyForce(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, v), cocos2BulletVec3(BulletCache.instance.BT_V3_1, rp));
              }
              applyLocalTorque(torque) {
                this._sharedBody.syncSceneToPhysics();
                this._wakeUpIfSleep();
                Vec3.transformQuat(v3_0$6, torque, this._sharedBody.node.worldRotation);
                bt.RigidBody_applyTorque(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, v3_0$6));
              }
              applyLocalImpulse(impulse, rel_pos) {
                this._sharedBody.syncSceneToPhysics();
                this._wakeUpIfSleep();
                const quat = this._sharedBody.node.worldRotation;
                const v = Vec3.transformQuat(v3_0$6, impulse, quat);
                const rp = rel_pos ? Vec3.transformQuat(v3_1$2, rel_pos, quat) : Vec3.ZERO;
                bt.RigidBody_applyImpulse(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, v), cocos2BulletVec3(BulletCache.instance.BT_V3_1, rp));
              }
              applyForce(force, rel_pos) {
                this._sharedBody.syncSceneToPhysics();
                this._wakeUpIfSleep();
                const rp = rel_pos || Vec3.ZERO;
                bt.RigidBody_applyForce(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, force), cocos2BulletVec3(BulletCache.instance.BT_V3_1, rp));
              }
              applyTorque(torque) {
                this._sharedBody.syncSceneToPhysics();
                this._wakeUpIfSleep();
                bt.RigidBody_applyTorque(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, torque));
              }
              applyImpulse(impulse, rel_pos) {
                this._sharedBody.syncSceneToPhysics();
                this._wakeUpIfSleep();
                const rp = rel_pos || Vec3.ZERO;
                bt.RigidBody_applyImpulse(this.impl, cocos2BulletVec3(BulletCache.instance.BT_V3_0, impulse), cocos2BulletVec3(BulletCache.instance.BT_V3_1, rp));
              }
              getGroup() {
                return this._sharedBody.collisionFilterGroup;
              }
              setGroup(v) {
                this._sharedBody.collisionFilterGroup = v;
              }
              addGroup(v) {
                this._sharedBody.collisionFilterGroup |= v;
              }
              removeGroup(v) {
                this._sharedBody.collisionFilterGroup &= ~v;
              }
              getMask() {
                return this._sharedBody.collisionFilterMask;
              }
              setMask(v) {
                this._sharedBody.collisionFilterMask = v;
              }
              addMask(v) {
                this._sharedBody.collisionFilterMask |= v;
              }
              removeMask(v) {
                this._sharedBody.collisionFilterMask &= ~v;
              }
              _wakeUpIfSleep() {
                if (!this.isAwake) {
                  bt.CollisionObject_activate(this.impl, true);
                }
              }
            }
            BulletRigidBody.idCounter = 0;

            const importFunc = {
              syncPhysicsToGraphics(id) {
                const body = btCache.CACHE.getWrapper(id, btCache.BODY_CACHE_NAME);
                body.syncPhysicsToGraphics();
              },
              onShapeHitExt(hit, controller) {
                const cct = btCache.CACHE.getWrapper(controller, btCache.CCT_CACHE_NAME);
                cct.onShapeHitExt(hit);
              },
              onDebugDrawLine(from, to, color) {
                const world = btCache.CACHE.world;
                if (world) {
                  world.onDebugDrawLine(from, to, color);
                }
              },
              clearLines() {
                const world = btCache.CACHE.world;
                if (world) {
                  world.onClearLines();
                }
              },
              flushLines() {}
            };

            const v3_0$5 = CC_V3_0;
            const quat_0 = CC_QUAT_0;
            let IDCounter = 0;
            class BulletSharedBody {
              static getSharedBody(node, wrappedWorld, wrappedBody) {
                const key = node.uuid;
                let newSB;
                if (BulletSharedBody.sharedBodesMap.has(key)) {
                  newSB = BulletSharedBody.sharedBodesMap.get(key);
                } else {
                  newSB = new BulletSharedBody(node, wrappedWorld);
                  const g = PhysicsGroup.DEFAULT;
                  const m = PhysicsSystem.instance.collisionMatrix[g];
                  newSB._collisionFilterGroup = g;
                  newSB._collisionFilterMask = m;
                  BulletSharedBody.sharedBodesMap.set(node.uuid, newSB);
                }
                if (wrappedBody) {
                  newSB._wrappedBody = wrappedBody;
                  const g = wrappedBody.rigidBody.group;
                  const m = PhysicsSystem.instance.collisionMatrix[g];
                  newSB._collisionFilterGroup = g;
                  newSB._collisionFilterMask = m;
                }
                return newSB;
              }
              get wrappedBody() {
                return this._wrappedBody;
              }
              get bodyCompoundShape() {
                return this.bodyStruct.compound;
              }
              get ghostCompoundShape() {
                return this.ghostStruct.compound;
              }
              get body() {
                return this.bodyStruct.body;
              }
              get ghost() {
                return this.ghostStruct.ghost;
              }
              get collisionFilterGroup() {
                return this._collisionFilterGroup;
              }
              set collisionFilterGroup(v) {
                if (v !== this._collisionFilterGroup) {
                  this._collisionFilterGroup = v;
                  this.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
                  this.dirty |= EBtSharedBodyDirty.GHOST_RE_ADD;
                }
              }
              get collisionFilterMask() {
                return this._collisionFilterMask;
              }
              set collisionFilterMask(v) {
                if (v !== this._collisionFilterMask) {
                  this._collisionFilterMask = v;
                  this.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
                  this.dirty |= EBtSharedBodyDirty.GHOST_RE_ADD;
                }
              }
              get bodyStruct() {
                this._instantiateBodyStruct();
                return this._bodyStruct;
              }
              get ghostStruct() {
                this._instantiateGhostStruct();
                return this._ghostStruct;
              }
              set bodyEnabled(v) {
                if (v) {
                  if (this.bodyIndex < 0) {
                    if (this.bodyStruct.wrappedShapes.length === 0) {
                      if (!this.wrappedBody) return;
                      if (!this.wrappedBody.rigidBody.isDynamic) return;
                    }
                    this.bodyIndex = this.wrappedWorld.bodies.length;
                    this.wrappedWorld.addSharedBody(this);
                    this.syncInitialBody();
                  }
                } else if (this.bodyIndex >= 0) {
                  const isRemoveBody = this.bodyStruct.wrappedShapes.length === 0 && this.wrappedBody == null || this.bodyStruct.wrappedShapes.length === 0 && this.wrappedBody != null && !this.wrappedBody.isEnabled || this.bodyStruct.wrappedShapes.length === 0 && this.wrappedBody != null && !this.wrappedBody.rigidBody.enabledInHierarchy;
                  if (isRemoveBody) {
                    bt.RigidBody_clearState(this.body);
                    this.bodyIndex = -1;
                    this.wrappedWorld.removeSharedBody(this);
                  }
                }
              }
              set ghostEnabled(v) {
                if (v) {
                  if (this.ghostIndex < 0 && this.ghostStruct.wrappedShapes.length > 0) {
                    this.ghostIndex = 1;
                    this.wrappedWorld.addGhostObject(this);
                    this.syncInitialGhost();
                  }
                } else if (this.ghostIndex >= 0) {
                  const isRemoveGhost = this.ghostStruct.wrappedShapes.length === 0 && this.ghost;
                  if (isRemoveGhost) {
                    this.ghostIndex = -1;
                    this.wrappedWorld.removeGhostObject(this);
                  }
                }
              }
              set reference(v) {
                v ? this.ref++ : this.ref--;
                if (this.ref === 0) {
                  this.destroy();
                }
              }
              constructor(node, wrappedWorld) {
                this.id = void 0;
                this.node = void 0;
                this.wrappedWorld = void 0;
                this.wrappedJoints0 = [];
                this.wrappedJoints1 = [];
                this.dirty = 0;
                this._collisionFilterGroup = PhysicsSystem.PhysicsGroup.DEFAULT;
                this._collisionFilterMask = -1;
                this.ref = 0;
                this.bodyIndex = -1;
                this.ghostIndex = -1;
                this._bodyStruct = void 0;
                this._ghostStruct = void 0;
                this._wrappedBody = null;
                this.id = BulletSharedBody.idCounter++;
                this.wrappedWorld = wrappedWorld;
                this.node = node;
              }
              _instantiateBodyStruct() {
                if (this._bodyStruct) return;
                let mass = 0;
                if (this._wrappedBody && this._wrappedBody.rigidBody.enabled && this._wrappedBody.rigidBody.isDynamic) {
                  mass = this._wrappedBody.rigidBody.mass;
                }
                const trans = BulletCache.instance.BT_TRANSFORM_0;
                const quat = BulletCache.instance.BT_QUAT_0;
                cocos2BulletVec3(bt.Transform_getOrigin(trans), this.node.worldPosition);
                cocos2BulletQuat(quat, this.node.worldRotation);
                bt.Transform_setRotation(trans, quat);
                const motionState = bt.MotionState.implement(importFunc).$$.ptr;
                bt.ccMotionState_setup(motionState, this.id, trans);
                const body = bt.RigidBody_new(mass, motionState);
                const sleepTd = PhysicsSystem.instance.sleepThreshold;
                bt.RigidBody_setSleepingThresholds(body, sleepTd, sleepTd);
                this._bodyStruct = {
                  id: IDCounter++,
                  body,
                  motionState,
                  compound: bt.ccCompoundShape_new(),
                  wrappedShapes: [],
                  useCompound: false
                };
                BulletCache.setWrapper(this.id, btCache.BODY_CACHE_NAME, this);
                if (this._ghostStruct) bt.CollisionObject_setIgnoreCollisionCheck(this.ghost, this.body, true);
                if (this._wrappedBody) this.setBodyType(this._wrappedBody.rigidBody.type);
              }
              _instantiateGhostStruct() {
                if (this._ghostStruct) return;
                const ghost = bt.CollisionObject_new();
                const ghostShape = bt.ccCompoundShape_new();
                bt.CollisionObject_setCollisionShape(ghost, ghostShape);
                bt.CollisionObject_setCollisionFlags(ghost, btCollisionFlags.CF_STATIC_OBJECT | btCollisionFlags.CF_NO_CONTACT_RESPONSE);
                this._ghostStruct = {
                  id: IDCounter++,
                  ghost,
                  compound: ghostShape,
                  wrappedShapes: []
                };
                if (this._bodyStruct) bt.CollisionObject_setIgnoreCollisionCheck(this.body, this.ghost, true);
                if (this._wrappedBody) this.setGhostType(this._wrappedBody.rigidBody.type);
              }
              setType(v) {
                this.setBodyType(v);
                this.setGhostType(v);
              }
              setBodyType(v) {
                if (this._bodyStruct && this._wrappedBody) {
                  const body = this._bodyStruct.body;
                  const wrap = this._wrappedBody;
                  const com = wrap.rigidBody;
                  let m_bcf = bt.CollisionObject_getCollisionFlags(body);
                  const localInertia = BulletCache.instance.BT_V3_0;
                  switch (v) {
                    case ERigidBodyType.DYNAMIC:
                      m_bcf &= ~btCollisionFlags.CF_KINEMATIC_OBJECT;
                      m_bcf &= ~btCollisionFlags.CF_STATIC_OBJECT;
                      bt.CollisionObject_setCollisionFlags(body, m_bcf);
                      wrap.setMass(com.mass);
                      wrap.useGravity(com.useGravity);
                      wrap.setAllowSleep(com.allowSleep);
                      break;
                    case ERigidBodyType.KINEMATIC:
                      bt.Vec3_set(localInertia, 0, 0, 0);
                      bt.RigidBody_setMassProps(body, 0, localInertia);
                      m_bcf |= btCollisionFlags.CF_KINEMATIC_OBJECT;
                      m_bcf &= ~btCollisionFlags.CF_STATIC_OBJECT;
                      bt.CollisionObject_setCollisionFlags(body, m_bcf);
                      bt.CollisionObject_forceActivationState(body, btCollisionObjectStates.DISABLE_DEACTIVATION);
                      break;
                    case ERigidBodyType.STATIC:
                    default:
                      bt.Vec3_set(localInertia, 0, 0, 0);
                      bt.RigidBody_setMassProps(body, 0, localInertia);
                      m_bcf |= btCollisionFlags.CF_STATIC_OBJECT;
                      m_bcf &= ~btCollisionFlags.CF_KINEMATIC_OBJECT;
                      bt.CollisionObject_setCollisionFlags(body, m_bcf);
                      bt.CollisionObject_forceActivationState(body, btCollisionObjectStates.ISLAND_SLEEPING);
                      break;
                  }
                  this.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
                }
              }
              setGhostType(v) {
                if (this._ghostStruct) {
                  const ghost = this._ghostStruct.ghost;
                  let m_gcf = bt.CollisionObject_getCollisionFlags(ghost);
                  switch (v) {
                    case ERigidBodyType.DYNAMIC:
                    case ERigidBodyType.KINEMATIC:
                      m_gcf &= ~btCollisionFlags.CF_STATIC_OBJECT;
                      m_gcf |= btCollisionFlags.CF_KINEMATIC_OBJECT;
                      bt.CollisionObject_setCollisionFlags(ghost, m_gcf);
                      bt.CollisionObject_forceActivationState(ghost, btCollisionObjectStates.DISABLE_DEACTIVATION);
                      break;
                    case ERigidBodyType.STATIC:
                    default:
                      m_gcf &= ~btCollisionFlags.CF_KINEMATIC_OBJECT;
                      m_gcf |= btCollisionFlags.CF_STATIC_OBJECT;
                      bt.CollisionObject_setCollisionFlags(ghost, m_gcf);
                      bt.CollisionObject_forceActivationState(ghost, btCollisionObjectStates.ISLAND_SLEEPING);
                      break;
                  }
                  this.dirty |= EBtSharedBodyDirty.GHOST_RE_ADD;
                }
              }
              addShape(v, isTrigger) {
                function switchShape(that, shape) {
                  bt.CollisionObject_setCollisionShape(that.body, shape);
                  that.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
                  if (that._wrappedBody && that._wrappedBody.isEnabled) {
                    that._wrappedBody.setMass(that._wrappedBody.rigidBody.mass);
                  }
                }
                if (isTrigger) {
                  const index = this.ghostStruct.wrappedShapes.indexOf(v);
                  if (index < 0) {
                    this.ghostStruct.wrappedShapes.push(v);
                    v.setCompound(this.ghostCompoundShape);
                    this.ghostEnabled = true;
                  }
                } else {
                  const index = this.bodyStruct.wrappedShapes.indexOf(v);
                  if (index < 0) {
                    this.bodyStruct.wrappedShapes.push(v);
                    if (this.bodyStruct.useCompound) {
                      v.setCompound(this.bodyCompoundShape);
                    } else {
                      const l = this.bodyStruct.wrappedShapes.length;
                      if (l === 1 && !v.needCompound()) {
                        switchShape(this, v.impl);
                      } else {
                        this.bodyStruct.useCompound = true;
                        for (let i = 0; i < l; i++) {
                          const childShape = this.bodyStruct.wrappedShapes[i];
                          childShape.setCompound(this.bodyCompoundShape);
                        }
                        switchShape(this, this.bodyStruct.compound);
                      }
                    }
                    this.bodyEnabled = true;
                  }
                }
              }
              removeShape(v, isTrigger) {
                if (isTrigger) {
                  const index = this.ghostStruct.wrappedShapes.indexOf(v);
                  if (index >= 0) {
                    fastRemoveAt(this.ghostStruct.wrappedShapes, index);
                    v.setCompound(0);
                    this.ghostEnabled = false;
                  }
                } else {
                  const index = this.bodyStruct.wrappedShapes.indexOf(v);
                  if (index >= 0) {
                    if (this.bodyStruct.useCompound) {
                      v.setCompound(0);
                    } else {
                      bt.CollisionObject_setCollisionShape(this.body, bt.EmptyShape_static());
                    }
                    bt.CollisionObject_activate(this.body, true);
                    this.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
                    fastRemoveAt(this.bodyStruct.wrappedShapes, index);
                    this.bodyEnabled = false;
                  }
                }
              }
              addJoint(v, type) {
                if (type) {
                  const i = this.wrappedJoints1.indexOf(v);
                  if (i < 0) this.wrappedJoints1.push(v);
                } else {
                  const i = this.wrappedJoints0.indexOf(v);
                  if (i < 0) this.wrappedJoints0.push(v);
                }
              }
              removeJoint(v, type) {
                if (type) {
                  const i = this.wrappedJoints1.indexOf(v);
                  if (i >= 0) fastRemoveAt(this.wrappedJoints1, i);
                } else {
                  const i = this.wrappedJoints0.indexOf(v);
                  if (i >= 0) fastRemoveAt(this.wrappedJoints0, i);
                }
              }
              updateDirty() {
                if (this.dirty) {
                  if (this.bodyIndex >= 0 && this.dirty & EBtSharedBodyDirty.BODY_RE_ADD) this.updateBodyByReAdd();
                  if (this.ghostIndex >= 0 && this.dirty & EBtSharedBodyDirty.GHOST_RE_ADD) this.updateGhostByReAdd();
                  this.dirty = 0;
                }
              }
              syncSceneToPhysics() {
                if (this.node.hasChangedFlags) {
                  const bt_quat = BulletCache.instance.BT_QUAT_0;
                  const bt_transform = bt.CollisionObject_getWorldTransform(this.body);
                  cocos2BulletQuat(bt_quat, this.node.worldRotation);
                  cocos2BulletVec3(bt.Transform_getOrigin(bt_transform), this.node.worldPosition);
                  bt.Transform_setRotation(bt_transform, bt_quat);
                  if (this.node.hasChangedFlags & TransformBit.SCALE) {
                    this.syncBodyScale();
                  }
                  if (bt.CollisionObject_isKinematicObject(this.body)) {
                    const ms = bt.RigidBody_getMotionState(this.body);
                    if (ms) bt.MotionState_setWorldTransform(ms, bt_transform);
                  } else if (this.isBodySleeping()) bt.CollisionObject_activate(this.body, false);
                }
              }
              syncPhysicsToScene() {
                if (bt.CollisionObject_isStaticOrKinematicObject(this.body)) return;
                this.syncPhysicsToGraphics();
              }
              syncPhysicsToGraphics() {
                if (this.isBodySleeping()) return;
                const bt_quat = BulletCache.instance.BT_QUAT_0;
                const bt_transform = BulletCache.instance.BT_TRANSFORM_0;
                bt.RigidBody_getWorldTransform(this.body, bt_transform);
                const originPosPtr = bt.Transform_getRotationAndOrigin(bt_transform, bt_quat);
                this.node.worldRotation = bullet2CocosQuat(quat_0, bt_quat);
                this.node.worldPosition = bullet2CocosVec3(v3_0$5, originPosPtr);
                if (this._ghostStruct) {
                  const bt_transform1 = bt.CollisionObject_getWorldTransform(this.ghost);
                  cocos2BulletVec3(bt.Transform_getOrigin(bt_transform1), this.node.worldPosition);
                  cocos2BulletQuat(bt_quat, this.node.worldRotation);
                  bt.Transform_setRotation(bt_transform1, bt_quat);
                }
              }
              syncSceneToGhost() {
                if (this.node.hasChangedFlags) {
                  const bt_quat = BulletCache.instance.BT_QUAT_0;
                  const bt_transform = bt.CollisionObject_getWorldTransform(this.ghost);
                  cocos2BulletVec3(bt.Transform_getOrigin(bt_transform), this.node.worldPosition);
                  cocos2BulletQuat(bt_quat, this.node.worldRotation);
                  bt.Transform_setRotation(bt_transform, bt_quat);
                  if (this.node.hasChangedFlags & TransformBit.SCALE) this.syncGhostScale();
                  bt.CollisionObject_activate(this.ghost, false);
                }
              }
              syncInitialBody() {
                const bt_quat = BulletCache.instance.BT_QUAT_0;
                const bt_transform = bt.CollisionObject_getWorldTransform(this.body);
                cocos2BulletVec3(bt.Transform_getOrigin(bt_transform), this.node.worldPosition);
                cocos2BulletQuat(bt_quat, this.node.worldRotation);
                bt.Transform_setRotation(bt_transform, bt_quat);
                this.syncBodyScale();
                bt.CollisionObject_activate(this.body, false);
              }
              syncInitialGhost() {
                const bt_quat = BulletCache.instance.BT_QUAT_0;
                const bt_transform = bt.CollisionObject_getWorldTransform(this.ghost);
                cocos2BulletVec3(bt.Transform_getOrigin(bt_transform), this.node.worldPosition);
                cocos2BulletQuat(bt_quat, this.node.worldRotation);
                bt.Transform_setRotation(bt_transform, bt_quat);
                this.syncGhostScale();
                bt.CollisionObject_activate(this.body, false);
              }
              syncBodyScale() {
                for (let i = 0; i < this.bodyStruct.wrappedShapes.length; i++) {
                  this.bodyStruct.wrappedShapes[i].updateScale();
                }
                for (let i = 0; i < this.wrappedJoints0.length; i++) {
                  this.wrappedJoints0[i].updateScale0();
                }
                for (let i = 0; i < this.wrappedJoints1.length; i++) {
                  this.wrappedJoints1[i].updateScale1();
                }
              }
              syncGhostScale() {
                for (let i = 0; i < this.ghostStruct.wrappedShapes.length; i++) {
                  this.ghostStruct.wrappedShapes[i].updateScale();
                }
              }
              updateBodyByReAdd() {
                if (this.bodyIndex >= 0) {
                  this.wrappedWorld.removeSharedBody(this);
                  this.bodyIndex = this.wrappedWorld.bodies.length;
                  this.wrappedWorld.addSharedBody(this);
                }
              }
              updateGhostByReAdd() {
                if (this.ghostIndex >= 0) {
                  this.wrappedWorld.removeGhostObject(this);
                  this.ghostIndex = this.wrappedWorld.ghosts.length;
                  this.wrappedWorld.addGhostObject(this);
                }
              }
              destroy() {
                BulletSharedBody.sharedBodesMap.delete(this.node.uuid);
                this.node = null;
                this.wrappedWorld = null;
                if (this._bodyStruct) {
                  const bodyStruct = this._bodyStruct;
                  BulletCache.delWrapper(bodyStruct.body, btCache.BODY_CACHE_NAME);
                  bt._safe_delete(bodyStruct.motionState, EBulletType.EBulletTypeMotionState);
                  bt._safe_delete(bodyStruct.compound, EBulletType.EBulletTypeCollisionShape);
                  bt._safe_delete(bodyStruct.body, EBulletType.EBulletTypeCollisionObject);
                  this._bodyStruct = null;
                }
                if (this._ghostStruct) {
                  const ghostStruct = this._ghostStruct;
                  bt._safe_delete(ghostStruct.compound, EBulletType.EBulletTypeCollisionShape);
                  bt._safe_delete(ghostStruct.ghost, EBulletType.EBulletTypeCollisionObject);
                  this._ghostStruct = null;
                }
              }
              isBodySleeping() {
                return bt.CollisionObject_isSleeping(this.body);
              }
            }
            BulletSharedBody.idCounter = 0;
            BulletSharedBody.sharedBodesMap = new Map();

            const v3_0$4 = CC_V3_0;
            const ccMaterialBooks = {};
            class BulletShape {
              constructor() {
                this.id = BulletShape.idCounter++;
                this._isEnabled = false;
                this._isTrigger = false;
                this._isInitialized = false;
                this._impl = 0;
                this._compound = 0;
                this.quat = bt.Quat_new(0, 0, 0, 1);
                this.transform = bt.Transform_new();
                this._collider = void 0;
                this._sharedBody = void 0;
              }
              updateEventListener() {
                this._sharedBody.wrappedWorld.updateNeedEmitEvents(this.collider.needCollisionEvent || this.collider.needTriggerEvent);
              }
              setMaterial(v) {
                const v1 = v == null ? PhysicsSystem.instance.defaultMaterial : v;
                if (!this._isTrigger && this._isEnabled) {
                  if (this._compound) {
                    if (!ccMaterialBooks[v1._uuid]) ccMaterialBooks[v1._uuid] = bt.ccMaterial_new();
                    const mat = ccMaterialBooks[v1._uuid];
                    bt.ccMaterial_set(mat, v1.restitution, v1.friction, v1.rollingFriction, v1.spinningFriction);
                    bt.CollisionShape_setMaterial(this._impl, mat);
                  } else {
                    bt.CollisionObject_setMaterial(this._sharedBody.body, v1.restitution, v1.friction, v1.rollingFriction, v1.spinningFriction);
                  }
                }
              }
              setCenter(v) {
                Vec3.copy(v3_0$4, v);
                v3_0$4.multiply(this._collider.node.worldScale);
                cocos2BulletVec3(bt.Transform_getOrigin(this.transform), v3_0$4);
                this.updateCompoundTransform();
              }
              setAsTrigger(v) {
                if (this._isTrigger === v) return;
                if (this._isEnabled) {
                  this._sharedBody.removeShape(this, !v);
                  this._sharedBody.addShape(this, v);
                }
                this._isTrigger = v;
              }
              get attachedRigidBody() {
                if (this._sharedBody.wrappedBody) return this._sharedBody.wrappedBody.rigidBody;
                return null;
              }
              get impl() {
                return this._impl;
              }
              get collider() {
                return this._collider;
              }
              get sharedBody() {
                return this._sharedBody;
              }
              getAABB(v) {
                const bt_transform = BulletCache.instance.BT_TRANSFORM_0;
                bt.Transform_setIdentity(bt_transform);
                bt.Transform_setRotation(bt_transform, cocos2BulletQuat(BulletCache.instance.BT_QUAT_0, this._collider.node.worldRotation));
                const MIN = BulletCache.instance.BT_V3_0;
                const MAX = BulletCache.instance.BT_V3_1;
                bt.CollisionShape_getAabb(this._impl, bt_transform, MIN, MAX);
                v.halfExtents.x = (bt.Vec3_x(MAX) - bt.Vec3_x(MIN)) / 2;
                v.halfExtents.y = (bt.Vec3_y(MAX) - bt.Vec3_y(MIN)) / 2;
                v.halfExtents.z = (bt.Vec3_z(MAX) - bt.Vec3_z(MIN)) / 2;
                Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
              }
              getBoundingSphere(v) {
                v.radius = bt.CollisionShape_getLocalBoundingSphere(this._impl);
                Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
              }
              initialize(com) {
                this._collider = com;
                this._isInitialized = true;
                this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
                this._sharedBody.reference = true;
                this.onComponentSet();
                this.setWrapper();
              }
              setWrapper() {
                if (BulletCache.isNotEmptyShape(this._impl)) {
                  bt.CollisionShape_setUserPointer(this._impl, this._impl);
                  BulletCache.setWrapper(this._impl, BulletShape.TYPE, this);
                }
              }
              onLoad() {
                this.setCenter(this._collider.center);
                this.setAsTrigger(this._collider.isTrigger);
              }
              onEnable() {
                this._isEnabled = true;
                this._sharedBody.addShape(this, this._isTrigger);
                this.setMaterial(this.collider.sharedMaterial);
              }
              onDisable() {
                this._isEnabled = false;
                this._sharedBody.removeShape(this, this._isTrigger);
              }
              onDestroy() {
                this._sharedBody.reference = false;
                this._collider = null;
                bt._safe_delete(this.quat, EBulletType.EBulletTypeQuat);
                bt._safe_delete(this.transform, EBulletType.EBulletTypeTransform);
                if (this._compound) bt._safe_delete(this._compound, EBulletType.EBulletTypeCollisionShape);
                if (BulletCache.isNotEmptyShape(this._impl)) {
                  bt._safe_delete(this._impl, EBulletType.EBulletTypeCollisionShape);
                  BulletCache.delWrapper(this._impl, BulletShape.TYPE);
                }
              }
              updateByReAdd() {
                if (this._isEnabled) {
                  this._sharedBody.removeShape(this, this._isTrigger);
                  this._sharedBody.addShape(this, this._isTrigger);
                }
              }
              getGroup() {
                return this._sharedBody.collisionFilterGroup;
              }
              setGroup(v) {
                this._sharedBody.collisionFilterGroup = v;
              }
              addGroup(v) {
                this._sharedBody.collisionFilterGroup |= v;
              }
              removeGroup(v) {
                this._sharedBody.collisionFilterGroup &= ~v;
              }
              getMask() {
                return this._sharedBody.collisionFilterMask;
              }
              setMask(v) {
                this._sharedBody.collisionFilterMask = v;
              }
              addMask(v) {
                this._sharedBody.collisionFilterMask |= v;
              }
              removeMask(v) {
                this._sharedBody.collisionFilterMask &= ~v;
              }
              setCompound(compound) {
                if (this._compound) bt.CompoundShape_removeChildShape(this._compound, this._impl);
                if (compound) bt.CompoundShape_addChildShape(compound, this.transform, this._impl);
                this._compound = compound;
              }
              updateScale() {
                this.setCenter(this._collider.center);
              }
              updateCompoundTransform() {
                if (this._compound) {
                  bt.CompoundShape_updateChildTransform(this._compound, this._impl, this.transform, true);
                } else if (this._isEnabled && !this._isTrigger) {
                  if (this._sharedBody && !this._sharedBody.bodyStruct.useCompound) {
                    this._sharedBody.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
                  }
                }
              }
              needCompound() {
                if (this._collider.type === EColliderType.TERRAIN) {
                  return true;
                }
                if (this._collider.center.equals(Vec3.ZERO)) {
                  return false;
                }
                return true;
              }
            }
            BulletShape.TYPE = 'shape';
            BulletShape.idCounter = 0;

            class TupleDictionary {
              constructor() {
                this.data = void 0;
                this.data = {
                  keys: []
                };
              }
              get(i, j) {
                if (i > j) {
                  const temp = j;
                  j = i;
                  i = temp;
                }
                return this.data[`${i}-${j}`];
              }
              set(i, j, value) {
                if (i > j) {
                  const temp = j;
                  j = i;
                  i = temp;
                }
                const key = `${i}-${j}`;
                if (value == null) {
                  const idx = this.data.keys.indexOf(key);
                  if (idx !== -1) {
                    this.data.keys.splice(idx, 1);
                    delete this.data[key];
                    return value;
                  }
                }
                if (!this.get(i, j)) {
                  this.data.keys.push(key);
                }
                this.data[key] = value;
                return this.data[key];
              }
              reset() {
                this.data = {
                  keys: []
                };
              }
              getLength() {
                return this.data.keys.length;
              }
              getKeyByIndex(index) {
                return this.data.keys[index];
              }
              getDataByKey(Key) {
                return this.data[Key];
              }
            }

            class BulletContactData {
              get isBodyA() {
                const sb = this.event.selfCollider.shape.sharedBody.body;
                return sb === bt.PersistentManifold_getBody0(this.event.impl);
              }
              constructor(event) {
                this.impl = 0;
                this.event = void 0;
                this.event = event;
              }
              getLocalPointOnA(out) {
                if (this.impl) bullet2CocosVec3(out, bt.ManifoldPoint_get_m_localPointA(this.impl));
              }
              getLocalPointOnB(out) {
                if (this.impl) bullet2CocosVec3(out, bt.ManifoldPoint_get_m_localPointB(this.impl));
              }
              getWorldPointOnA(out) {
                if (this.impl) bullet2CocosVec3(out, bt.ManifoldPoint_get_m_positionWorldOnA(this.impl));
              }
              getWorldPointOnB(out) {
                if (this.impl) bullet2CocosVec3(out, bt.ManifoldPoint_get_m_positionWorldOnB(this.impl));
              }
              getLocalNormalOnA(out) {
                if (this.impl) {
                  const bt_rot = BulletCache.instance.BT_QUAT_0;
                  const body = bt.PersistentManifold_getBody0(this.event.impl);
                  const trans = bt.CollisionObject_getWorldTransform(body);
                  bt.Transform_getRotation(trans, bt_rot);
                  const inv_rot = CC_QUAT_0;
                  bullet2CocosQuat(inv_rot, bt_rot);
                  Quat.conjugate(inv_rot, inv_rot);
                  bullet2CocosVec3(out, bt.ManifoldPoint_get_m_normalWorldOnB(this.impl));
                  if (!this.isBodyA) Vec3.negate(out, out);
                  Vec3.transformQuat(out, out, inv_rot);
                }
              }
              getLocalNormalOnB(out) {
                if (this.impl) {
                  const bt_rot = BulletCache.instance.BT_QUAT_0;
                  const body = bt.PersistentManifold_getBody1(this.event.impl);
                  const trans = bt.CollisionObject_getWorldTransform(body);
                  bt.Transform_getRotation(trans, bt_rot);
                  const inv_rot = CC_QUAT_0;
                  bullet2CocosQuat(inv_rot, bt_rot);
                  Quat.conjugate(inv_rot, inv_rot);
                  bullet2CocosVec3(out, bt.ManifoldPoint_get_m_normalWorldOnB(this.impl));
                  Vec3.transformQuat(out, out, inv_rot);
                }
              }
              getWorldNormalOnA(out) {
                if (this.impl) {
                  bullet2CocosVec3(out, bt.ManifoldPoint_get_m_normalWorldOnB(this.impl));
                  if (!this.isBodyA) Vec3.negate(out, out);
                }
              }
              getWorldNormalOnB(out) {
                if (this.impl) bullet2CocosVec3(out, bt.ManifoldPoint_get_m_normalWorldOnB(this.impl));
              }
            }

            const contactsPool = [];
            const v3_0$3 = CC_V3_0;
            const v3_1$1 = CC_V3_1;
            const v3_2 = CC_V3_2;
            const c_0 = CC_COLOR_0;
            const emitHit = new CharacterControllerContact();
            class BulletWorld {
              setDefaultMaterial(v) {}
              setAllowSleep(v) {
                bt.ccDiscreteDynamicsWorld_setAllowSleep(this._world, v);
              }
              setGravity(gravity) {
                bt.DynamicsWorld_setGravity(this._world, cocos2BulletVec3(BulletCache.instance.BT_V3_0, gravity));
              }
              updateNeedEmitEvents(v) {
                if (!this.ghosts) return;
                if (v) {
                  this._needEmitEvents = true;
                } else {
                  this._needEmitEvents = false;
                  for (let i = 0; i < this.ghosts.length; i++) {
                    const ghost = this.ghosts[i];
                    const shapes = ghost.ghostStruct.wrappedShapes;
                    for (let j = 0; j < shapes.length; j++) {
                      const collider = shapes[j].collider;
                      if (collider.needCollisionEvent || collider.needTriggerEvent) {
                        this._needEmitEvents = true;
                        return;
                      }
                    }
                  }
                  for (let i = 0; i < this.bodies.length; i++) {
                    const body = this.bodies[i];
                    const shapes = body.bodyStruct.wrappedShapes;
                    for (let j = 0; j < shapes.length; j++) {
                      const collider = shapes[j].collider;
                      if (collider.needCollisionEvent || collider.needTriggerEvent) {
                        this._needEmitEvents = true;
                        return;
                      }
                    }
                  }
                }
              }
              updateNeedEmitCCTEvents(force) {
                if (!this.ccts) return;
                if (force) {
                  this._needEmitCCTEvents = true;
                } else {
                  this._needEmitCCTEvents = false;
                  const ccts = this.ccts;
                  const length = ccts.length;
                  for (let i = 0; i < length; i++) {
                    const cctCom = ccts[i].characterController;
                    if (cctCom.needCollisionEvent) {
                      this._needEmitCCTEvents = true;
                      return;
                    }
                  }
                }
              }
              get impl() {
                return this._world;
              }
              constructor() {
                this._world = void 0;
                this._broadphase = void 0;
                this._solver = void 0;
                this._dispatcher = void 0;
                this._debugDraw = void 0;
                this._debugLineCount = 0;
                this._MAX_DEBUG_LINE_COUNT = 16384;
                this._debugDrawFlags = EPhysicsDrawFlags.NONE;
                this._debugConstraintSize = 0.3;
                this._needEmitEvents = false;
                this._needSyncAfterEvents = false;
                this._needEmitCCTEvents = false;
                this.bodies = [];
                this.ghosts = [];
                this.ccts = [];
                this.constraints = [];
                this.triggerArrayMat = new ArrayCollisionMatrix();
                this.collisionArrayMat = new ArrayCollisionMatrix();
                this.contactsDic = new TupleDictionary();
                this.oldContactsDic = new TupleDictionary();
                this.cctShapeEventDic = new TupleDictionary();
                this.cctContactsDic = new TupleDictionary();
                this.cctOldContactsDic = new TupleDictionary();
                btCache.CACHE.world = this;
                this._broadphase = bt.DbvtBroadphase_new();
                this._dispatcher = bt.CollisionDispatcher_new();
                this._solver = bt.SequentialImpulseConstraintSolver_new();
                this._world = bt.ccDiscreteDynamicsWorld_new(this._dispatcher, this._broadphase, this._solver);
                const debugDraw = bt.DebugDraw.implement(importFunc);
                this._debugDraw = debugDraw.$$.ptr;
                bt.CollisionWorld_setDebugDrawer(this._world, this._debugDraw);
                bt.DebugDraw_setDebugMode(this._debugDraw, EBulletDebugDrawModes.DBG_NoDebug);
                bt.DebugDraw_setAABBColor(this._debugDraw, 0, 1, 1);
                bt.DebugDraw_setActiveObjectColor(this._debugDraw, 1, 0, 1);
                bt.DebugDraw_setDeactiveObjectColor(this._debugDraw, 1, 0, 1);
                bt.DebugDraw_setWantsDeactivationObjectColor(this._debugDraw, 1, 0, 1);
                bt.DebugDraw_setDisabledDeactivationObjectColor(this._debugDraw, 1, 0, 1);
                bt.DebugDraw_setDisabledSimulationObjectColor(this._debugDraw, 1, 0, 1);
                bt.DebugDraw_setConstraintLimitColor(this._debugDraw, 0.5, 0.5, 0.5);
              }
              destroy() {
                if (this.constraints.length || this.bodies.length || this.ccts.length) error('You should destroy all physics component first.');
                bt._safe_delete(this._world, EBulletType.EBulletTypeCollisionWorld);
                bt._safe_delete(this._broadphase, EBulletType.EBulletTypeDbvtBroadPhase);
                bt._safe_delete(this._dispatcher, EBulletType.EBulletTypeCollisionDispatcher);
                bt._safe_delete(this._solver, EBulletType.EBulletTypeSequentialImpulseConstraintSolver);
                bt._safe_delete(this._debugDraw, EBulletType.EBulletTypeDebugDraw);
                this.bodies = null;
                this.ghosts = null;
                this.ccts = null;
                this.constraints = null;
                this.triggerArrayMat = null;
                this.collisionArrayMat = null;
                this.contactsDic = null;
                this.oldContactsDic = null;
                this.cctShapeEventDic = null;
                this.cctShapeEventPool = null;
                contactsPool.length = 0;
              }
              step(deltaTime, timeSinceLastCalled, maxSubStep = 0) {
                if (!this.bodies.length && !this.ghosts.length) return;
                if (timeSinceLastCalled === undefined) timeSinceLastCalled = deltaTime;
                bt.DynamicsWorld_stepSimulation(this._world, timeSinceLastCalled, maxSubStep, deltaTime);
                bt.CollisionWorld_debugDrawWorld(this._world);
              }
              syncSceneToPhysics() {
                for (let i = this.ghosts.length - 1; i >= 0; i--) {
                  const ghost = this.ghosts[i];
                  ghost.updateDirty();
                  ghost.syncSceneToGhost();
                }
                for (let i = this.bodies.length - 1; i >= 0; i--) {
                  const body = this.bodies[i];
                  body.updateDirty();
                  body.syncSceneToPhysics();
                }
                const ccts = this.ccts;
                const length = ccts.length;
                for (let i = length - 1; i >= 0; i--) {
                  const cct = ccts[i];
                  cct.updateDirty();
                  cct.syncSceneToPhysics();
                }
              }
              syncAfterEvents() {
                if (!this._needSyncAfterEvents) return;
                this.syncSceneToPhysics();
              }
              raycast(worldRay, options, pool, results) {
                worldRay.computeHit(v3_0$3, options.maxDistance);
                const to = cocos2BulletVec3(BulletCache.instance.BT_V3_0, v3_0$3);
                const from = cocos2BulletVec3(BulletCache.instance.BT_V3_1, worldRay.o);
                const allHitsCB = bt.ccAllRayCallback_static();
                bt.ccAllRayCallback_reset(allHitsCB, from, to, options.mask >>> 0, options.queryTrigger);
                bt.ccAllRayCallback_setFlags(allHitsCB, EBulletTriangleRaycastFlag.UseSubSimplexConvexCastRaytest);
                bt.CollisionWorld_rayTest(this._world, from, to, allHitsCB);
                if (bt.RayCallback_hasHit(allHitsCB)) {
                  const posArray = bt.ccAllRayCallback_getHitPointWorld(allHitsCB);
                  const normalArray = bt.ccAllRayCallback_getHitNormalWorld(allHitsCB);
                  const ptrArray = bt.ccAllRayCallback_getCollisionShapePtrs(allHitsCB);
                  for (let i = 0, n = bt.int_array_size(ptrArray); i < n; i++) {
                    bullet2CocosVec3(v3_0$3, bt.Vec3_array_at(posArray, i));
                    bullet2CocosVec3(v3_1$1, bt.Vec3_array_at(normalArray, i));
                    const shape = BulletCache.getWrapper(bt.int_array_at(ptrArray, i), BulletShape.TYPE);
                    const r = pool.add();
                    results.push(r);
                    r._assign(v3_0$3, Vec3.distance(worldRay.o, v3_0$3), shape.collider, v3_1$1);
                  }
                  return true;
                }
                return false;
              }
              raycastClosest(worldRay, options, result) {
                worldRay.computeHit(v3_0$3, options.maxDistance);
                const to = cocos2BulletVec3(BulletCache.instance.BT_V3_0, v3_0$3);
                const from = cocos2BulletVec3(BulletCache.instance.BT_V3_1, worldRay.o);
                const closeHitCB = bt.ccClosestRayCallback_static();
                bt.ccClosestRayCallback_reset(closeHitCB, from, to, options.mask >>> 0, options.queryTrigger);
                bt.ccClosestRayCallback_setFlags(closeHitCB, EBulletTriangleRaycastFlag.UseSubSimplexConvexCastRaytest);
                bt.CollisionWorld_rayTest(this._world, from, to, closeHitCB);
                if (bt.RayCallback_hasHit(closeHitCB)) {
                  bullet2CocosVec3(v3_0$3, bt.ccClosestRayCallback_getHitPointWorld(closeHitCB));
                  bullet2CocosVec3(v3_1$1, bt.ccClosestRayCallback_getHitNormalWorld(closeHitCB));
                  const shape = BulletCache.getWrapper(bt.ccClosestRayCallback_getCollisionShapePtr(closeHitCB), BulletShape.TYPE);
                  result._assign(v3_0$3, Vec3.distance(worldRay.o, v3_0$3), shape.collider, v3_1$1);
                  return true;
                }
                return false;
              }
              sweepBox(worldRay, halfExtent, orientation, options, pool, results) {
                const hf = BulletCache.instance.BT_V3_0;
                cocos2BulletVec3(hf, halfExtent);
                if (!BulletWorld._sweepBoxGeometry) {
                  BulletWorld._sweepBoxGeometry = bt.BoxShape_new(hf);
                }
                bt.BoxShape_setUnscaledHalfExtents(BulletWorld._sweepBoxGeometry, hf);
                return this.sweep(worldRay, BulletWorld._sweepBoxGeometry, orientation, options, pool, results);
              }
              sweepBoxClosest(worldRay, halfExtent, orientation, options, result) {
                const hf = BulletCache.instance.BT_V3_0;
                cocos2BulletVec3(hf, halfExtent);
                if (!BulletWorld._sweepBoxGeometry) {
                  BulletWorld._sweepBoxGeometry = bt.BoxShape_new(hf);
                }
                bt.BoxShape_setUnscaledHalfExtents(BulletWorld._sweepBoxGeometry, hf);
                return this.sweepClosest(worldRay, BulletWorld._sweepBoxGeometry, orientation, options, result);
              }
              sweepSphere(worldRay, radius, options, pool, results) {
                if (!BulletWorld._sweepSphereGeometry) {
                  BulletWorld._sweepSphereGeometry = bt.SphereShape_new(radius);
                }
                bt.SphereShape_setUnscaledRadius(BulletWorld._sweepSphereGeometry, radius);
                return this.sweep(worldRay, BulletWorld._sweepSphereGeometry, Quat.IDENTITY, options, pool, results);
              }
              sweepSphereClosest(worldRay, radius, options, result) {
                if (!BulletWorld._sweepSphereGeometry) {
                  BulletWorld._sweepSphereGeometry = bt.SphereShape_new(radius);
                }
                bt.SphereShape_setUnscaledRadius(BulletWorld._sweepSphereGeometry, radius);
                return this.sweepClosest(worldRay, BulletWorld._sweepSphereGeometry, Quat.IDENTITY, options, result);
              }
              sweepCapsule(worldRay, radius, height, orientation, options, pool, results) {
                if (!BulletWorld._sweepCapsuleGeometry) {
                  BulletWorld._sweepCapsuleGeometry = bt.CapsuleShape_new(radius, height);
                }
                bt.CapsuleShape_updateProp(BulletWorld._sweepCapsuleGeometry, radius, height * 0.5, 1);
                return this.sweep(worldRay, BulletWorld._sweepCapsuleGeometry, orientation, options, pool, results);
              }
              sweepCapsuleClosest(worldRay, radius, height, orientation, options, result) {
                if (!BulletWorld._sweepCapsuleGeometry) {
                  BulletWorld._sweepCapsuleGeometry = bt.CapsuleShape_new(radius, height);
                }
                bt.CapsuleShape_updateProp(BulletWorld._sweepCapsuleGeometry, radius, height * 0.5, 1);
                return this.sweepClosest(worldRay, BulletWorld._sweepCapsuleGeometry, orientation, options, result);
              }
              sweep(worldRay, btShapePtr, orientation, options, pool, results) {
                const BT_fromTransform = BulletCache.instance.BT_TRANSFORM_0;
                const BT_toTransform = BulletCache.instance.BT_TRANSFORM_1;
                const BT_orientation = BulletCache.instance.BT_QUAT_0;
                cocos2BulletVec3(bt.Transform_getOrigin(BT_fromTransform), worldRay.o);
                cocos2BulletQuat(BT_orientation, orientation);
                bt.Transform_setRotation(BT_fromTransform, BT_orientation);
                worldRay.computeHit(v3_0$3, options.maxDistance);
                cocos2BulletVec3(bt.Transform_getOrigin(BT_toTransform), v3_0$3);
                cocos2BulletQuat(BT_orientation, orientation);
                bt.Transform_setRotation(BT_toTransform, BT_orientation);
                const allHitsCB = bt.ccAllConvexCallback_static();
                bt.ccAllConvexCallback_reset(allHitsCB, BT_fromTransform, BT_toTransform, options.mask >>> 0, options.queryTrigger);
                bt.CollisionWorld_convexSweepTest(this._world, btShapePtr, BT_fromTransform, BT_toTransform, allHitsCB, 0);
                if (bt.ConvexCallback_hasHit(allHitsCB)) {
                  const posArray = bt.ccAllConvexCallback_getHitPointWorld(allHitsCB);
                  const normalArray = bt.ccAllConvexCallback_getHitNormalWorld(allHitsCB);
                  const ptrArray = bt.ccAllConvexCallback_getCollisionShapePtrs(allHitsCB);
                  for (let i = 0, n = bt.int_array_size(ptrArray); i < n; i++) {
                    bullet2CocosVec3(v3_0$3, bt.Vec3_array_at(posArray, i));
                    bullet2CocosVec3(v3_1$1, bt.Vec3_array_at(normalArray, i));
                    const shape = BulletCache.getWrapper(bt.int_array_at(ptrArray, i), BulletShape.TYPE);
                    const r = pool.add();
                    results.push(r);
                    r._assign(v3_0$3, Vec3.distance(worldRay.o, v3_0$3), shape.collider, v3_1$1);
                  }
                  return true;
                }
                return false;
              }
              sweepClosest(worldRay, btShapePtr, orientation, options, result) {
                const BT_fromTransform = BulletCache.instance.BT_TRANSFORM_0;
                const BT_toTransform = BulletCache.instance.BT_TRANSFORM_1;
                const BT_orientation = BulletCache.instance.BT_QUAT_0;
                cocos2BulletVec3(bt.Transform_getOrigin(BT_fromTransform), worldRay.o);
                cocos2BulletQuat(BT_orientation, orientation);
                bt.Transform_setRotation(BT_fromTransform, BT_orientation);
                worldRay.computeHit(v3_0$3, options.maxDistance);
                cocos2BulletVec3(bt.Transform_getOrigin(BT_toTransform), v3_0$3);
                cocos2BulletQuat(BT_orientation, orientation);
                bt.Transform_setRotation(BT_toTransform, BT_orientation);
                const closeHitCB = bt.ccClosestConvexCallback_static();
                bt.ccClosestConvexCallback_reset(closeHitCB, BT_fromTransform, BT_toTransform, options.mask >>> 0, options.queryTrigger);
                bt.CollisionWorld_convexSweepTest(this._world, btShapePtr, BT_fromTransform, BT_toTransform, closeHitCB, 0);
                if (bt.ConvexCallback_hasHit(closeHitCB)) {
                  bullet2CocosVec3(v3_0$3, bt.ccClosestConvexCallback_getHitPointWorld(closeHitCB));
                  bullet2CocosVec3(v3_1$1, bt.ccClosestConvexCallback_getHitNormalWorld(closeHitCB));
                  const shape = BulletCache.getWrapper(bt.ccClosestConvexCallback_getCollisionShapePtr(closeHitCB), BulletShape.TYPE);
                  result._assign(v3_0$3, Vec3.distance(worldRay.o, v3_0$3), shape.collider, v3_1$1);
                  return true;
                }
                return false;
              }
              getSharedBody(node, wrappedBody) {
                return BulletSharedBody.getSharedBody(node, this, wrappedBody);
              }
              addSharedBody(sharedBody) {
                const i = this.bodies.indexOf(sharedBody);
                if (i < 0) {
                  this.bodies.push(sharedBody);
                  const group = sharedBody.collisionFilterGroup;
                  const mask = sharedBody.collisionFilterMask;
                  bt.DynamicsWorld_addRigidBody(this._world, sharedBody.body, group >>> 0, mask >>> 0);
                }
              }
              removeSharedBody(sharedBody) {
                const i = this.bodies.indexOf(sharedBody);
                if (i >= 0) {
                  fastRemoveAt(this.bodies, i);
                  bt.DynamicsWorld_removeRigidBody(this._world, sharedBody.body);
                }
              }
              addGhostObject(sharedBody) {
                const i = this.ghosts.indexOf(sharedBody);
                if (i < 0) {
                  this.ghosts.push(sharedBody);
                  const group = sharedBody.collisionFilterGroup;
                  const mask = sharedBody.collisionFilterMask;
                  bt.CollisionWorld_addCollisionObject(this._world, sharedBody.ghost, group >>> 0, mask >>> 0);
                }
              }
              removeGhostObject(sharedBody) {
                const i = this.ghosts.indexOf(sharedBody);
                if (i >= 0) {
                  fastRemoveAt(this.ghosts, i);
                  bt.CollisionWorld_removeCollisionObject(this._world, sharedBody.ghost);
                }
              }
              addCCT(cct) {
                const index = this.ccts.indexOf(cct);
                if (index < 0) {
                  this.ccts.push(cct);
                  const cctGhost = bt.CharacterController_getGhostObject(cct.impl);
                  const group = cct.getGroup();
                  const mask = cct.getMask();
                  bt.CollisionWorld_addCollisionObject(this._world, cctGhost, group >>> 0, mask >>> 0);
                  bt.DynamicsWorld_addAction(this._world, cct.impl);
                }
              }
              removeCCT(cct) {
                const index = this.ccts.indexOf(cct);
                if (index >= 0) {
                  fastRemoveAt(this.ccts, index);
                  const cctGhost = bt.CharacterController_getGhostObject(cct.impl);
                  bt.CollisionWorld_removeCollisionObject(this._world, cctGhost);
                  bt.DynamicsWorld_removeAction(this._world, cct.impl);
                }
              }
              addConstraint(constraint) {
                const i = this.constraints.indexOf(constraint);
                if (i < 0) {
                  this.constraints.push(constraint);
                  bt.DynamicsWorld_addConstraint(this.impl, constraint.impl, !constraint.constraint.enableCollision);
                  constraint.index = i;
                }
              }
              removeConstraint(constraint) {
                const i = this.constraints.indexOf(constraint);
                if (i >= 0) {
                  this.constraints.splice(i, 1);
                  bt.DynamicsWorld_removeConstraint(this.impl, constraint.impl);
                  constraint.index = -1;
                }
              }
              emitEvents() {
                this._needSyncAfterEvents = false;
                if (this._needEmitEvents) {
                  this.gatherConatactData();
                  this.emitCollisionAndTriggerEvent();
                  this.emitCCTTriggerEvent();
                }
                if (this._needEmitCCTEvents) {
                  this.emitCCTCollisionEvent();
                }
              }
              emitCollisionAndTriggerEvent() {
                let dicL = this.contactsDic.getLength();
                while (dicL--) {
                  contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
                  CollisionEventObject.contacts.length = 0;
                  const key = this.contactsDic.getKeyByIndex(dicL);
                  const data = this.contactsDic.getDataByKey(key);
                  const shape0 = data.shape0;
                  const shape1 = data.shape1;
                  this.oldContactsDic.set(shape0.id, shape1.id, data);
                  const collider0 = shape0.collider;
                  const collider1 = shape1.collider;
                  if (collider0 && collider1) {
                    const isTrigger = collider0.isTrigger || collider1.isTrigger;
                    if (isTrigger) {
                      if (this.triggerArrayMat.get(shape0.id, shape1.id)) {
                        TriggerEventObject.type = 'onTriggerStay';
                      } else {
                        TriggerEventObject.type = 'onTriggerEnter';
                        this.triggerArrayMat.set(shape0.id, shape1.id, true);
                      }
                      TriggerEventObject.impl = data.impl;
                      TriggerEventObject.selfCollider = collider0;
                      TriggerEventObject.otherCollider = collider1;
                      collider0.emit(TriggerEventObject.type, TriggerEventObject);
                      TriggerEventObject.selfCollider = collider1;
                      TriggerEventObject.otherCollider = collider0;
                      collider1.emit(TriggerEventObject.type, TriggerEventObject);
                      this._needSyncAfterEvents = true;
                    } else {
                      const body0 = collider0.attachedRigidBody;
                      const body1 = collider1.attachedRigidBody;
                      if (body0 && body1) {
                        if (body0.isSleeping && body1.isSleeping) continue;
                      } else if (!body0 && body1) {
                        if (body1.isSleeping) continue;
                      } else if (!body1 && body0) {
                        if (body0.isSleeping) continue;
                      }
                      if (this.collisionArrayMat.get(shape0.id, shape1.id)) {
                        CollisionEventObject.type = 'onCollisionStay';
                      } else {
                        CollisionEventObject.type = 'onCollisionEnter';
                        this.collisionArrayMat.set(shape0.id, shape1.id, true);
                      }
                      for (let i = 0; i < data.contacts.length; i++) {
                        const cq = data.contacts[i];
                        if (contactsPool.length > 0) {
                          const c = contactsPool.pop();
                          c.impl = cq;
                          CollisionEventObject.contacts.push(c);
                        } else {
                          const c = new BulletContactData(CollisionEventObject);
                          c.impl = cq;
                          CollisionEventObject.contacts.push(c);
                        }
                      }
                      CollisionEventObject.impl = data.impl;
                      CollisionEventObject.selfCollider = collider0;
                      CollisionEventObject.otherCollider = collider1;
                      collider0.emit(CollisionEventObject.type, CollisionEventObject);
                      CollisionEventObject.selfCollider = collider1;
                      CollisionEventObject.otherCollider = collider0;
                      collider1.emit(CollisionEventObject.type, CollisionEventObject);
                      this._needSyncAfterEvents = true;
                    }
                    if (this.oldContactsDic.get(shape0.id, shape1.id) == null) {
                      this.oldContactsDic.set(shape0.id, shape1.id, data);
                    }
                  }
                }
                let oldDicL = this.oldContactsDic.getLength();
                while (oldDicL--) {
                  const key = this.oldContactsDic.getKeyByIndex(oldDicL);
                  const data = this.oldContactsDic.getDataByKey(key);
                  const shape0 = data.shape0;
                  const shape1 = data.shape1;
                  const collider0 = shape0.collider;
                  const collider1 = shape1.collider;
                  if (collider0 && collider1) {
                    const isTrigger = collider0.isTrigger || collider1.isTrigger;
                    if (this.contactsDic.getDataByKey(key) == null) {
                      if (isTrigger) {
                        if (this.triggerArrayMat.get(shape0.id, shape1.id)) {
                          TriggerEventObject.type = 'onTriggerExit';
                          TriggerEventObject.selfCollider = collider0;
                          TriggerEventObject.otherCollider = collider1;
                          collider0.emit(TriggerEventObject.type, TriggerEventObject);
                          TriggerEventObject.selfCollider = collider1;
                          TriggerEventObject.otherCollider = collider0;
                          collider1.emit(TriggerEventObject.type, TriggerEventObject);
                          this.triggerArrayMat.set(shape0.id, shape1.id, false);
                          this.oldContactsDic.set(shape0.id, shape1.id, null);
                          this._needSyncAfterEvents = true;
                        }
                      } else if (this.collisionArrayMat.get(shape0.id, shape1.id)) {
                        contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
                        CollisionEventObject.contacts.length = 0;
                        CollisionEventObject.type = 'onCollisionExit';
                        CollisionEventObject.selfCollider = collider0;
                        CollisionEventObject.otherCollider = collider1;
                        collider0.emit(CollisionEventObject.type, CollisionEventObject);
                        CollisionEventObject.selfCollider = collider1;
                        CollisionEventObject.otherCollider = collider0;
                        collider1.emit(CollisionEventObject.type, CollisionEventObject);
                        this.collisionArrayMat.set(shape0.id, shape1.id, false);
                        this.oldContactsDic.set(shape0.id, shape1.id, null);
                        this._needSyncAfterEvents = true;
                      }
                    }
                  }
                }
                this.contactsDic.reset();
              }
              emitCCTTriggerEvent() {
                let dicL = this.cctContactsDic.getLength();
                while (dicL--) {
                  const key = this.cctContactsDic.getKeyByIndex(dicL);
                  const data = this.cctContactsDic.getDataByKey(key);
                  const shape = data.shape;
                  const cct = data.cct;
                  this.cctOldContactsDic.set(shape.id, cct.id, data);
                  const collider = shape.collider;
                  const characterController = cct.characterController;
                  if (collider && characterController) {
                    const isTrigger = collider.isTrigger;
                    if (isTrigger) {
                      if (this.triggerArrayMat.get(shape.id, cct.id)) {
                        CharacterTriggerEventObject.type = 'onControllerTriggerStay';
                      } else {
                        CharacterTriggerEventObject.type = 'onControllerTriggerEnter';
                        this.triggerArrayMat.set(shape.id, cct.id, true);
                      }
                      CharacterTriggerEventObject.impl = data.impl;
                      CharacterTriggerEventObject.collider = collider;
                      CharacterTriggerEventObject.characterController = characterController;
                      collider.emit(CharacterTriggerEventObject.type, CharacterTriggerEventObject);
                      CharacterTriggerEventObject.collider = collider;
                      CharacterTriggerEventObject.characterController = characterController;
                      characterController.emit(CharacterTriggerEventObject.type, CharacterTriggerEventObject);
                      this._needSyncAfterEvents = true;
                    }
                    if (this.cctOldContactsDic.get(shape.id, cct.id) == null) {
                      this.cctOldContactsDic.set(shape.id, cct.id, data);
                    }
                  }
                }
                let oldDicL = this.cctOldContactsDic.getLength();
                while (oldDicL--) {
                  const key = this.cctOldContactsDic.getKeyByIndex(oldDicL);
                  const data = this.cctOldContactsDic.getDataByKey(key);
                  const shape = data.shape;
                  const cct = data.cct;
                  const collider = shape.collider;
                  const characterController = cct.characterController;
                  if (collider && characterController) {
                    const isTrigger = collider.isTrigger;
                    if (this.cctContactsDic.getDataByKey(key) == null) {
                      if (isTrigger) {
                        if (this.triggerArrayMat.get(shape.id, cct.id)) {
                          CharacterTriggerEventObject.type = 'onControllerTriggerExit';
                          CharacterTriggerEventObject.collider = collider;
                          CharacterTriggerEventObject.characterController = characterController;
                          collider.emit(CharacterTriggerEventObject.type, CharacterTriggerEventObject);
                          CharacterTriggerEventObject.collider = collider;
                          CharacterTriggerEventObject.characterController = characterController;
                          characterController.emit(CharacterTriggerEventObject.type, CharacterTriggerEventObject);
                          this.triggerArrayMat.set(shape.id, cct.id, false);
                          this.cctOldContactsDic.set(shape.id, cct.id, null);
                          this._needSyncAfterEvents = true;
                        }
                      }
                    }
                  }
                }
                this.cctContactsDic.reset();
              }
              emitCCTCollisionEvent() {
                let dicL = this.cctShapeEventDic.getLength();
                while (dicL--) {
                  var _emitHit$controller;
                  const key = this.cctShapeEventDic.getKeyByIndex(dicL);
                  const data = this.cctShapeEventDic.getDataByKey(key);
                  const cct = data.BulletCharacterController;
                  const shape = data.BulletShape;
                  const worldPos = data.worldPos;
                  const worldNormal = data.worldNormal;
                  const motionDir = data.motionDir;
                  const motionLength = data.motionLength;
                  emitHit.controller = cct.characterController;
                  emitHit.collider = shape.collider;
                  emitHit.worldPosition.set(worldPos.x, worldPos.y, worldPos.z);
                  emitHit.worldNormal.set(worldNormal.x, worldNormal.y, worldNormal.z);
                  emitHit.motionDirection.set(motionDir.x, motionDir.y, motionDir.z);
                  emitHit.motionLength = motionLength;
                  (_emitHit$controller = emitHit.controller) === null || _emitHit$controller === void 0 ? void 0 : _emitHit$controller.emit('onControllerColliderHit', emitHit);
                  this._needSyncAfterEvents = true;
                }
                this.cctShapeEventDic.reset();
              }
              gatherConatactData() {
                const numManifolds = bt.Dispatcher_getNumManifolds(this._dispatcher);
                for (let i = 0; i < numManifolds; i++) {
                  const manifold = bt.Dispatcher_getManifoldByIndexInternal(this._dispatcher, i);
                  const numContacts = bt.PersistentManifold_getNumContacts(manifold);
                  for (let j = 0; j < numContacts; j++) {
                    const manifoldPoint = bt.PersistentManifold_getContactPoint(manifold, j);
                    const s0 = bt.ManifoldPoint_getShape0(manifoldPoint);
                    const s1 = bt.ManifoldPoint_getShape1(manifoldPoint);
                    let processed = false;
                    if (!processed) {
                      const shape0 = BulletCache.getWrapper(s0, BulletShape.TYPE);
                      const shape1 = BulletCache.getWrapper(s1, BulletShape.TYPE);
                      if (shape0 && shape1) {
                        processed = true;
                        if (shape0.collider.needTriggerEvent || shape1.collider.needTriggerEvent || shape0.collider.needCollisionEvent || shape1.collider.needCollisionEvent) {
                          let item = this.contactsDic.get(shape0.id, shape1.id);
                          if (!item) {
                            item = this.contactsDic.set(shape0.id, shape1.id, {
                              shape0,
                              shape1,
                              contacts: [],
                              impl: manifold
                            });
                          }
                          item.contacts.push(manifoldPoint);
                        }
                      }
                    }
                    if (!processed) {
                      const shape = BulletCache.getWrapper(s0, BulletShape.TYPE);
                      const cct = BulletCache.getWrapper(s1, btCache.CCT_CACHE_NAME);
                      if (shape && cct) {
                        processed = true;
                        if (shape.collider.needTriggerEvent) {
                          let item = this.cctContactsDic.get(shape.id, cct.id);
                          if (!item) {
                            item = this.cctContactsDic.set(shape.id, cct.id, {
                              shape,
                              cct,
                              contacts: [],
                              impl: manifold
                            });
                          }
                          item.contacts.push(manifoldPoint);
                          processed = true;
                        }
                      }
                    }
                    if (!processed) {
                      const cct = BulletCache.getWrapper(s0, btCache.CCT_CACHE_NAME);
                      const shape = BulletCache.getWrapper(s1, BulletShape.TYPE);
                      if (shape && cct) {
                        processed = true;
                        if (shape.collider.needTriggerEvent) {
                          let item = this.cctContactsDic.get(shape.id, cct.id);
                          if (!item) {
                            item = this.cctContactsDic.set(shape.id, cct.id, {
                              shape,
                              cct,
                              contacts: [],
                              impl: manifold
                            });
                          }
                          item.contacts.push(manifoldPoint);
                          processed = true;
                        }
                      }
                    }
                  }
                }
              }
              get debugDrawFlags() {
                return this._debugDrawFlags;
              }
              set debugDrawFlags(v) {
                this._debugDrawFlags = v;
                if (this._debugDraw) {
                  this._setDebugDrawMode();
                }
              }
              get debugDrawConstraintSize() {
                return this._debugConstraintSize;
              }
              set debugDrawConstraintSize(v) {
                this._debugConstraintSize = v;
                for (let i = 0; i < this.constraints.length; i++) {
                  this.constraints[i].updateDebugDrawSize();
                }
              }
              _setDebugDrawMode() {
                let btDrawMode = 0;
                if (this._debugDrawFlags & EPhysicsDrawFlags.WIRE_FRAME) {
                  btDrawMode |= EBulletDebugDrawModes.DBG_DrawWireframe;
                }
                if (this._debugDrawFlags & EPhysicsDrawFlags.CONSTRAINT) {
                  btDrawMode |= EBulletDebugDrawModes.DBG_DrawConstraints;
                  btDrawMode |= EBulletDebugDrawModes.DBG_DrawConstraintLimits;
                }
                if (this._debugDrawFlags & EPhysicsDrawFlags.AABB) {
                  btDrawMode |= EBulletDebugDrawModes.DBG_DrawAabb;
                }
                bt.DebugDraw_setDebugMode(this._debugDraw, btDrawMode);
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
              onDebugDrawLine(from, to, color) {
                const debugRenderer = this._getDebugRenderer();
                if (debugRenderer && this._debugLineCount < this._MAX_DEBUG_LINE_COUNT) {
                  this._debugLineCount++;
                  bullet2CocosVec3(v3_0$3, from);
                  bullet2CocosVec3(v3_1$1, to);
                  bullet2CocosVec3(v3_2, color);
                  c_0.set(v3_2.x * 255, v3_2.y * 255, v3_2.z * 255, 255);
                  debugRenderer.addLine(v3_0$3, v3_1$1, c_0);
                }
              }
              onClearLines() {
                this._debugLineCount = 0;
              }
            }
            BulletWorld._sweepBoxGeometry = void 0;
            BulletWorld._sweepSphereGeometry = void 0;
            BulletWorld._sweepCapsuleGeometry = void 0;

            class BulletBoxShape extends BulletShape {
              updateSize() {
                const hf = BulletCache.instance.BT_V3_0;
                cocos2BulletVec3(hf, this.getMinUnscaledHalfExtents(VEC3_0));
                bt.BoxShape_setUnscaledHalfExtents(this.impl, hf);
                this.updateCompoundTransform();
              }
              get collider() {
                return this._collider;
              }
              onComponentSet() {
                const hf = BulletCache.instance.BT_V3_0;
                cocos2BulletVec3(hf, this.getMinUnscaledHalfExtents(VEC3_0));
                this._impl = bt.BoxShape_new(hf);
                this.updateScale();
              }
              updateScale() {
                super.updateScale();
                const bt_v3 = BulletCache.instance.BT_V3_0;
                bt.CollisionShape_setLocalScaling(this._impl, cocos2BulletVec3(bt_v3, this.getMinScale(VEC3_0)));
                this.updateCompoundTransform();
              }
              getMinUnscaledHalfExtents(out) {
                const size = this.collider.size;
                const ws = absolute(VEC3_0.set(this._collider.node.worldScale));
                const minVolumeSize = PhysicsSystem.instance.minVolumeSize;
                const halfSizeX = size.x / 2;
                const halfSizeY = size.y / 2;
                const halfSizeZ = size.z / 2;
                const halfX = halfSizeX * ws.x < minVolumeSize ? minVolumeSize / ws.x : halfSizeX;
                const halfY = halfSizeY * ws.y < minVolumeSize ? minVolumeSize / ws.y : halfSizeY;
                const halfZ = halfSizeZ * ws.z < minVolumeSize ? minVolumeSize / ws.z : halfSizeZ;
                out.set(halfX, halfY, halfZ);
                return out;
              }
              getMinScale(out) {
                const size = this.collider.size;
                const ws = absolute(VEC3_0.set(this._collider.node.worldScale));
                const minVolumeSize = PhysicsSystem.instance.minVolumeSize;
                const halfSizeX = size.x / 2;
                const halfSizeY = size.y / 2;
                const halfSizeZ = size.z / 2;
                const scaleX = halfSizeX * ws.x < minVolumeSize ? minVolumeSize / halfSizeX : ws.x;
                const scaleY = halfSizeY * ws.y < minVolumeSize ? minVolumeSize / halfSizeY : ws.y;
                const scaleZ = halfSizeZ * ws.z < minVolumeSize ? minVolumeSize / halfSizeZ : ws.z;
                out.set(scaleX, scaleY, scaleZ);
                return out;
              }
            }

            class BulletSphereShape extends BulletShape {
              updateRadius() {
                bt.SphereShape_setUnscaledRadius(this.impl, this.getMinUnscaledRadius());
                this.updateCompoundTransform();
              }
              get collider() {
                return this._collider;
              }
              onComponentSet() {
                this._impl = bt.SphereShape_new(this.getMinUnscaledRadius());
                this.updateScale();
              }
              updateScale() {
                super.updateScale();
                const scale = this.getMinScale();
                CC_V3_0.set(scale, scale, scale);
                const bt_v3 = BulletCache.instance.BT_V3_0;
                bt.CollisionShape_setLocalScaling(this._impl, cocos2BulletVec3(bt_v3, CC_V3_0));
                this.updateCompoundTransform();
              }
              getMinUnscaledRadius() {
                const radius = this.collider.radius;
                const ws = Math.abs(absMaxComponent(this._collider.node.worldScale));
                const minVolumeSize = PhysicsSystem.instance.minVolumeSize;
                return ws * radius < minVolumeSize ? minVolumeSize / ws : radius;
              }
              getMinScale() {
                const radius = this.collider.radius;
                const ws = Math.abs(absMaxComponent(this._collider.node.worldScale));
                const minVolumeSize = PhysicsSystem.instance.minVolumeSize;
                return ws * radius < minVolumeSize ? minVolumeSize / radius : ws;
              }
            }

            class BulletCapsuleShape extends BulletShape {
              setCylinderHeight(v) {
                this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
              }
              setDirection(v) {
                this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
              }
              setRadius(v) {
                this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
              }
              get collider() {
                return this._collider;
              }
              onComponentSet() {
                this._impl = bt.CapsuleShape_new(0.5, 1);
                this.setRadius(this.collider.radius);
              }
              updateScale() {
                super.updateScale();
                this.setRadius(this.collider.radius);
              }
              updateProperties(radius, height, direction, scale) {
                const ws = scale;
                const upAxis = direction;
                let wr;
                let halfH;
                if (upAxis === 1) {
                  wr = radius * Math.abs(absMax(ws.x, ws.z));
                  halfH = height / 2 * Math.abs(ws.y);
                } else if (upAxis === 0) {
                  wr = radius * Math.abs(absMax(ws.y, ws.z));
                  halfH = height / 2 * Math.abs(ws.x);
                } else {
                  wr = radius * Math.abs(absMax(ws.x, ws.y));
                  halfH = height / 2 * Math.abs(ws.z);
                }
                bt.CapsuleShape_updateProp(this._impl, wr, halfH, upAxis);
                this.updateCompoundTransform();
              }
            }

            class BulletBvhTriangleMeshShape {
              static getBulletBvhTriangleMeshShape(key, mesh) {
                let newBulletBvhTriangleMeshShape;
                if (BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.has(key)) {
                  newBulletBvhTriangleMeshShape = BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.get(key);
                  newBulletBvhTriangleMeshShape.reference = true;
                } else {
                  newBulletBvhTriangleMeshShape = new BulletBvhTriangleMeshShape(key, mesh);
                  BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap.set(key, newBulletBvhTriangleMeshShape);
                }
                return newBulletBvhTriangleMeshShape;
              }
              set reference(v) {
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
            }
            BulletBvhTriangleMeshShape.BulletBvhTriangleMeshShapeMap = new Map();

            class BulletTrimeshShape extends BulletShape {
              constructor(...args) {
                super(...args);
                this.btBVHMeshShape = void 0;
                this.refBtTriangleMesh = 0;
              }
              get collider() {
                return this._collider;
              }
              setMesh(v) {
                if (!this._isInitialized) return;
                if (this._impl && BulletCache.isNotEmptyShape(this._impl)) {
                  if (this._compound) {
                    bt.CompoundShape_removeChildShape(this._compound, this._impl);
                  }
                  bt._safe_delete(this._impl, EBulletType.EBulletTypeCollisionShape);
                  BulletCache.delWrapper(this._impl, BulletShape.TYPE);
                  this._impl = 0;
                }
                const mesh = v;
                if (mesh && mesh.renderingSubMeshes.length > 0) {
                  if (this.collider.convex) {
                    const btTriangleMesh = this._getBtTriangleMesh(mesh);
                    this._impl = bt.ConvexTriangleMeshShape_new(btTriangleMesh);
                  } else {
                    this.btBVHMeshShape = BulletBvhTriangleMeshShape.getBulletBvhTriangleMeshShape(mesh.hash, mesh);
                    this._impl = bt.ScaledBvhTriangleMeshShape_new(this.btBVHMeshShape.bulletBvhTriangleMeshShapePtr, 1, 1, 1);
                  }
                  const bt_v3 = BulletCache.instance.BT_V3_0;
                  cocos2BulletVec3(bt_v3, this._collider.node.worldScale);
                  bt.CollisionShape_setLocalScaling(this._impl, bt_v3);
                  bt.CollisionShape_setMargin(this._impl, 0.01);
                  this.setCompound(this._compound);
                  this.updateByReAdd();
                  this.setWrapper();
                } else {
                  this._impl = bt.EmptyShape_static();
                }
              }
              onComponentSet() {
                this.setMesh(this.collider.mesh);
              }
              onDestroy() {
                if (this.collider.convex) {
                  if (this.refBtTriangleMesh) {
                    bt._safe_delete(this.refBtTriangleMesh, EBulletType.EBulletTypeTriangleMesh);
                  }
                } else if (this.btBVHMeshShape) {
                  this.btBVHMeshShape.reference = false;
                }
                super.onDestroy();
              }
              updateScale() {
                super.updateScale();
                const bt_v3 = BulletCache.instance.BT_V3_0;
                cocos2BulletVec3(bt_v3, this._collider.node.worldScale);
                bt.CollisionShape_setLocalScaling(this._impl, bt_v3);
                this.updateCompoundTransform();
              }
              _getBtTriangleMesh(mesh) {
                this.refBtTriangleMesh = bt.TriangleMesh_new();
                cocos2BulletTriMesh(this.refBtTriangleMesh, mesh);
                return this.refBtTriangleMesh;
              }
            }

            class BulletCylinderShape extends BulletShape {
              setHeight(v) {
                this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
              }
              setDirection(v) {
                this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
              }
              setRadius(v) {
                this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
              }
              get collider() {
                return this._collider;
              }
              onComponentSet() {
                const bt_v3 = BulletCache.instance.BT_V3_0;
                bt.Vec3_set(bt_v3, 0.5, 1, 0.5);
                this._impl = bt.CylinderShape_new(bt_v3);
                this.setRadius(this.collider.radius);
              }
              updateScale() {
                super.updateScale();
                this.setRadius(this.collider.radius);
              }
              updateProperties(radius, height, direction, scale) {
                const ws = scale;
                const upAxis = direction;
                let wr;
                let wh;
                if (upAxis === 1) {
                  wh = height * Math.abs(ws.y);
                  wr = radius * Math.abs(absMax(ws.x, ws.z));
                } else if (upAxis === 0) {
                  wh = height * Math.abs(ws.x);
                  wr = radius * Math.abs(absMax(ws.y, ws.z));
                } else {
                  wh = height * Math.abs(ws.z);
                  wr = radius * Math.abs(absMax(ws.x, ws.y));
                }
                bt.CylinderShape_updateProp(this._impl, wr, wh / 2, upAxis);
                this.updateCompoundTransform();
              }
            }

            class BulletConeShape extends BulletShape {
              setHeight(v) {
                this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
              }
              setDirection(v) {
                this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
              }
              setRadius(v) {
                this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
              }
              get impl() {
                return this._impl;
              }
              get collider() {
                return this._collider;
              }
              onComponentSet() {
                this._impl = bt.ConeShape_new(0.5, 1);
                this.setRadius(this.collider.radius);
              }
              updateScale() {
                super.updateScale();
                this.setRadius(this.collider.radius);
              }
              updateProperties(radius, height, direction, scale) {
                const ws = scale;
                const upAxis = direction;
                let wr;
                let wh;
                if (upAxis === 1) {
                  wh = height * Math.abs(ws.y);
                  wr = radius * Math.abs(absMax(ws.x, ws.z));
                } else if (upAxis === 0) {
                  wh = height * Math.abs(ws.x);
                  wr = radius * Math.abs(absMax(ws.y, ws.z));
                } else {
                  wh = height * Math.abs(ws.z);
                  wr = radius * Math.abs(absMax(ws.x, ws.y));
                }
                bt.ConeShape_setRadius(this._impl, wr);
                bt.ConeShape_setHeight(this._impl, wh);
                bt.ConeShape_setConeUpIndex(this._impl, upAxis);
                const bt_v3 = BulletCache.instance.BT_V3_0;
                bt.Vec3_set(bt_v3, 1, 1, 1);
                bt.CollisionShape_setLocalScaling(this._impl, bt_v3);
                this.updateCompoundTransform();
              }
            }

            class BulletTerrainShape extends BulletShape {
              constructor(...args) {
                super(...args);
                this._bufPtr = 0;
                this._tileSize = 0;
                this._localOffset = new Vec3();
              }
              get collider() {
                return this._collider;
              }
              setTerrain(v) {
                if (!this._isInitialized) return;
                if (this._impl && BulletCache.isNotEmptyShape(this._impl)) {
                  warn('[Physics][Bullet]: change the terrain asset after initialization is not support.');
                } else {
                  const terrain = v;
                  if (terrain) {
                    this._tileSize = terrain.tileSize;
                    const sizeI = terrain.getVertexCountI();
                    const sizeJ = terrain.getVertexCountJ();
                    this._bufPtr = bt._malloc(4 * sizeI * sizeJ);
                    let offset = 0;
                    let min = Number.MAX_SAFE_INTEGER;
                    let max = Number.MIN_SAFE_INTEGER;
                    for (let j = 0; j < sizeJ; j++) {
                      for (let i = 0; i < sizeI; i++) {
                        const v = terrain.getHeight(i, j);
                        bt._write_f32(this._bufPtr + offset, v);
                        if (min > v) min = v;
                        if (v > max) max = v;
                        offset += 4;
                      }
                    }
                    max += 0.01;
                    min -= 0.01;
                    this._localOffset.set((sizeI - 1) / 2 * this._tileSize, (max + min) / 2, (sizeJ - 1) / 2 * this._tileSize);
                    this._impl = bt.TerrainShape_new(sizeI, sizeJ, this._bufPtr, 1, min, max);
                    const bt_v3 = BulletCache.instance.BT_V3_0;
                    bt.Vec3_set(bt_v3, this._tileSize, 1, this._tileSize);
                    bt.CollisionShape_setLocalScaling(this._impl, bt_v3);
                    this.setCompound(this._compound);
                    this.updateByReAdd();
                    this.setWrapper();
                  } else {
                    this._impl = bt.EmptyShape_static();
                  }
                }
              }
              onComponentSet() {
                this.setTerrain(this.collider.terrain);
              }
              onDestroy() {
                if (this._bufPtr) bt._free(this._bufPtr);
                super.onDestroy();
              }
              setCenter(v) {
                Vec3.copy(CC_V3_0, v);
                CC_V3_0.add(this._localOffset);
                cocos2BulletVec3(bt.Transform_getOrigin(this.transform), CC_V3_0);
                this.updateCompoundTransform();
              }
            }

            class BulletSimplexShape extends BulletShape {
              setShapeType(v) {}
              setVertices(v) {}
              get collider() {
                return this._collider;
              }
              onComponentSet() {
                this._impl = bt.SimplexShape_new();
                const length = this.collider.shapeType;
                const vertices = this.collider.vertices;
                const bt_v3 = BulletCache.instance.BT_V3_0;
                for (let i = 0; i < length; i++) {
                  bt.SimplexShape_addVertex(this._impl, cocos2BulletVec3(bt_v3, vertices[i]));
                }
                bt.CollisionShape_setLocalScaling(this._impl, cocos2BulletVec3(bt_v3, this._collider.node.worldScale));
              }
              onLoad() {
                super.onLoad();
                this.collider.updateVertices();
              }
              updateScale() {
                super.updateScale();
                const bt_v3 = BulletCache.instance.BT_V3_0;
                bt.CollisionShape_setLocalScaling(this._impl, cocos2BulletVec3(bt_v3, this._collider.node.worldScale));
              }
            }

            class BulletPlaneShape extends BulletShape {
              setNormal(v) {
                cocos2BulletVec3(bt.StaticPlaneShape_getPlaneNormal(this.impl), v);
                this.updateCompoundTransform();
              }
              setConstant(v) {
                bt.StaticPlaneShape_setPlaneConstant(this.impl, v);
                this.updateCompoundTransform();
              }
              updateScale() {
                super.updateScale();
                const bt_v3 = BulletCache.instance.BT_V3_0;
                cocos2BulletVec3(bt_v3, this._collider.node.worldScale);
                bt.CollisionShape_setLocalScaling(this._impl, bt_v3);
                this.updateCompoundTransform();
              }
              get collider() {
                return this._collider;
              }
              onComponentSet() {
                const normal = BulletCache.instance.BT_V3_0;
                cocos2BulletVec3(normal, this.collider.normal);
                this._impl = bt.StaticPlaneShape_new(normal, this.collider.constant);
                this.updateScale();
              }
            }

            class BulletConstraint {
              constructor() {
                this.dirty = 0;
                this.index = -1;
                this._impl = 0;
                this._com = void 0;
                this._rigidBody = void 0;
                this._connectedBody = null;
                this._collided = false;
              }
              setConnectedBody(v) {
                if (this._connectedBody === v) return;
                const oldBody2 = this._connectedBody;
                if (oldBody2) {
                  const oldSB2 = oldBody2.body.sharedBody;
                  oldSB2.removeJoint(this, 1);
                }
                const sb = this._rigidBody.body.sharedBody;
                sb.removeJoint(this, 0);
                if (this._impl) {
                  sb.wrappedWorld.removeConstraint(this);
                  bt._safe_delete(this._impl, EBulletType.EBulletTypeTypedConstraint);
                }
                this._connectedBody = v;
                const connect = this._connectedBody;
                this.onComponentSet();
                this.setEnableCollision(this._collided);
                sb.wrappedWorld.addConstraint(this);
                sb.addJoint(this, 0);
                if (connect) {
                  const sb2 = connect.body.sharedBody;
                  sb2.addJoint(this, 1);
                }
              }
              setEnableCollision(v) {
                if (this._collided !== v) {
                  this._collided = v;
                  this.updateByReAdd();
                }
              }
              get impl() {
                return this._impl;
              }
              get constraint() {
                return this._com;
              }
              updateByReAdd() {
                if (this._rigidBody && this.index >= 0) {
                  const sb = this._rigidBody.body.sharedBody;
                  sb.wrappedWorld.removeConstraint(this);
                  sb.wrappedWorld.addConstraint(this);
                }
              }
              initialize(v) {
                this._com = v;
                this._rigidBody = v.attachedBody;
                this._connectedBody = v.connectedBody;
                this._collided = v.enableCollision;
                this.onComponentSet();
                this.setEnableCollision(this._collided);
              }
              updateDebugDrawSize() {
                if (this.impl) {
                  const size = PhysicsSystem.instance.physicsWorld.debugDrawConstraintSize;
                  bt.TypedConstraint_setDbgDrawSize(this.impl, size);
                }
              }
              onEnable() {
                const sb = this._rigidBody.body.sharedBody;
                sb.wrappedWorld.addConstraint(this);
                sb.addJoint(this, 0);
                const connect = this._connectedBody;
                if (connect) {
                  const sb2 = connect.body.sharedBody;
                  sb2.addJoint(this, 1);
                }
              }
              onDisable() {
                const sb = this._rigidBody.body.sharedBody;
                sb.wrappedWorld.removeConstraint(this);
                sb.removeJoint(this, 0);
                const connect = this._connectedBody;
                if (connect) {
                  const sb2 = connect.body.sharedBody;
                  sb2.removeJoint(this, 1);
                }
              }
              onDestroy() {
                bt._safe_delete(this._impl, EBulletType.EBulletTypeTypedConstraint);
                this._com = null;
                this._rigidBody = null;
                this._connectedBody = null;
              }
            }

            class BulletP2PConstraint extends BulletConstraint {
              setPivotA(v) {
                const cs = this.constraint;
                const pivotA = BulletCache.instance.BT_V3_0;
                Vec3.multiply(CC_V3_0, cs.node.worldScale, cs.pivotA);
                cocos2BulletVec3(pivotA, CC_V3_0);
                bt.P2PConstraint_setPivotA(this._impl, pivotA);
                if (!cs.connectedBody) this.setPivotB(cs.pivotB);
              }
              setPivotB(v) {
                const cs = this.constraint;
                const node = this._rigidBody.node;
                const pivotB = BulletCache.instance.BT_V3_0;
                const cb = cs.connectedBody;
                if (cb) {
                  Vec3.multiply(CC_V3_0, cb.node.worldScale, cs.pivotB);
                  cocos2BulletVec3(pivotB, CC_V3_0);
                } else {
                  Vec3.multiply(CC_V3_0, node.worldScale, cs.pivotA);
                  Vec3.transformQuat(CC_V3_0, CC_V3_0, node.worldRotation);
                  Vec3.add(CC_V3_0, CC_V3_0, node.worldPosition);
                  cocos2BulletVec3(pivotB, CC_V3_0);
                }
                bt.P2PConstraint_setPivotB(this._impl, pivotB);
              }
              get constraint() {
                return this._com;
              }
              onComponentSet() {
                const cb = this.constraint.connectedBody;
                const bodyA = this._rigidBody.body.impl;
                const bodyB = cb ? cb.body.impl : bt.TypedConstraint_getFixedBody();
                const pivotA = BulletCache.instance.BT_V3_0;
                const pivotB = BulletCache.instance.BT_V3_1;
                this._impl = bt.P2PConstraint_new(bodyA, bodyB, pivotA, pivotB);
                this.setPivotA(this.constraint.pivotA);
                this.setPivotB(this.constraint.pivotB);
                this.updateDebugDrawSize();
              }
              updateScale0() {
                this.setPivotA(this.constraint.pivotA);
              }
              updateScale1() {
                this.setPivotB(this.constraint.pivotB);
              }
            }

            class BulletFixedConstraint extends BulletConstraint {
              setBreakForce(v) {
                bt.TypedConstraint_setMaxImpulseThreshold(this._impl, v);
              }
              setBreakTorque(v) {}
              get constraint() {
                return this._com;
              }
              onComponentSet() {
                const cb = this.constraint.connectedBody;
                const bodyA = this._rigidBody.body.impl;
                const bodyB = cb ? cb.body.impl : bt.TypedConstraint_getFixedBody();
                const trans0 = BulletCache.instance.BT_TRANSFORM_0;
                const trans1 = BulletCache.instance.BT_TRANSFORM_1;
                this._impl = bt.FixedConstraint_new(bodyA, bodyB, trans0, trans1);
                this.setBreakForce(this.constraint.breakForce);
                this.setBreakTorque(this.constraint.breakTorque);
                this.updateFrames();
                this.updateDebugDrawSize();
              }
              updateFrames() {
                const cb = this.constraint.connectedBody;
                const bodyA = this._rigidBody.body.sharedBody;
                const pos = CC_V3_0;
                const rot = CC_QUAT_0;
                const trans0 = BulletCache.instance.BT_TRANSFORM_0;
                const trans1 = BulletCache.instance.BT_TRANSFORM_1;
                const quat = BulletCache.instance.BT_QUAT_0;
                const trans = CC_MAT4_0;
                Mat4.fromRT(trans, bodyA.node.worldRotation, bodyA.node.worldPosition);
                Mat4.invert(trans, trans);
                Mat4.getRotation(rot, trans);
                Mat4.getTranslation(pos, trans);
                cocos2BulletVec3(bt.Transform_getOrigin(trans0), pos);
                cocos2BulletQuat(quat, rot);
                bt.Transform_setRotation(trans0, quat);
                if (cb) {
                  const bodyB = cb.body.sharedBody;
                  Mat4.fromRT(trans, bodyB.node.worldRotation, bodyB.node.worldPosition);
                  Mat4.invert(trans, trans);
                  Mat4.getRotation(rot, trans);
                  Mat4.getTranslation(pos, trans);
                  cocos2BulletVec3(bt.Transform_getOrigin(trans1), pos);
                  cocos2BulletQuat(quat, rot);
                  bt.Transform_setRotation(trans1, quat);
                } else {
                  bt.Transform_setIdentity(trans1);
                }
                bt.FixedConstraint_setFrames(this._impl, trans0, trans1);
              }
              updateScale0() {
                this.updateFrames();
              }
              updateScale1() {
                this.updateFrames();
              }
            }

            class BulletHingeConstraint extends BulletConstraint {
              setPivotA(v) {
                this.updateFrames();
              }
              setPivotB(v) {
                this.updateFrames();
              }
              setAxis(v) {
                this.updateFrames();
              }
              setLimitEnabled(v) {
                if (this.constraint.limitEnabled) {
                  bt.HingeConstraint_setLimit(this._impl, toRadian(this.constraint.lowerLimit), toRadian(this.constraint.upperLimit), 0.9, 0.3, 1.0);
                } else {
                  bt.HingeConstraint_setLimit(this._impl, 1, 0, 0.9, 0.3, 1.0);
                }
              }
              setLowerLimit(min) {
                if (this.constraint.limitEnabled) {
                  bt.HingeConstraint_setLimit(this._impl, toRadian(this.constraint.lowerLimit), toRadian(this.constraint.upperLimit), 0.9, 0.3, 1.0);
                }
              }
              setUpperLimit(max) {
                if (this.constraint.limitEnabled) {
                  bt.HingeConstraint_setLimit(this._impl, toRadian(this.constraint.lowerLimit), toRadian(this.constraint.upperLimit), 0.9, 0.3, 1.0);
                }
              }
              setMotorEnabled(v) {
                bt.HingeConstraint_enableMotor(this._impl, v);
                const velocity = -this.constraint.motorVelocity / 60.0;
                const impulse = force2Impulse(this.constraint.motorForceLimit, PhysicsSystem.instance.fixedTimeStep);
                bt.HingeConstraint_setMotorVelocity(this._impl, velocity);
                bt.HingeConstraint_setMaxMotorImpulse(this._impl, impulse);
              }
              setMotorVelocity(v) {
                if (this.constraint.motorEnabled) {
                  const velocity = -v / 60.0;
                  bt.HingeConstraint_setMotorVelocity(this._impl, velocity);
                }
              }
              setMotorForceLimit(v) {
                if (this.constraint.motorEnabled) {
                  const impulse = force2Impulse(v, PhysicsSystem.instance.fixedTimeStep);
                  bt.HingeConstraint_setMaxMotorImpulse(this._impl, impulse);
                }
              }
              get constraint() {
                return this._com;
              }
              onComponentSet() {
                const cb = this.constraint.connectedBody;
                const bodyA = this._rigidBody.body.impl;
                const bodyB = cb ? cb.body.impl : bt.TypedConstraint_getFixedBody();
                const trans0 = BulletCache.instance.BT_TRANSFORM_0;
                const trans1 = BulletCache.instance.BT_TRANSFORM_1;
                this._impl = bt.HingeConstraint_new(bodyA, bodyB, trans0, trans1);
                this.setLimitEnabled(this.constraint.limitEnabled);
                this.setLowerLimit(this.constraint.lowerLimit);
                this.setUpperLimit(this.constraint.upperLimit);
                this.setMotorEnabled(this.constraint.motorEnabled);
                this.setMotorVelocity(this.constraint.motorVelocity);
                this.setMotorForceLimit(this.constraint.motorForceLimit);
                this.updateFrames();
                this.updateDebugDrawSize();
              }
              updateFrames() {
                const cs = this.constraint;
                const node = cs.node;
                const v3_0 = CC_V3_0;
                const rot_0 = CC_QUAT_0;
                const rot_1 = CC_QUAT_1;
                const trans0 = BulletCache.instance.BT_TRANSFORM_0;
                Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
                cocos2BulletVec3(bt.Transform_getOrigin(trans0), v3_0);
                const quat = BulletCache.instance.BT_QUAT_0;
                Vec3.normalize(v3_0, cs.axis);
                Quat.rotationTo(rot_1, Vec3.UNIT_Z, v3_0);
                cocos2BulletQuat(quat, rot_1);
                bt.Transform_setRotation(trans0, quat);
                const trans1 = BulletCache.instance.BT_TRANSFORM_1;
                const cb = this.constraint.connectedBody;
                if (cb) {
                  Vec3.multiply(v3_0, cb.node.worldScale, cs.pivotB);
                  Quat.multiply(rot_1, node.worldRotation, rot_1);
                  Quat.invert(rot_0, cb.node.worldRotation);
                  Quat.multiply(rot_1, rot_0, rot_1);
                } else {
                  Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
                  Vec3.transformQuat(v3_0, v3_0, node.worldRotation);
                  Vec3.add(v3_0, v3_0, node.worldPosition);
                  Quat.multiply(rot_1, node.worldRotation, rot_1);
                }
                cocos2BulletVec3(bt.Transform_getOrigin(trans1), v3_0);
                cocos2BulletQuat(quat, rot_1);
                bt.Transform_setRotation(trans1, quat);
                bt.HingeConstraint_setFrames(this._impl, trans0, trans1);
              }
              updateScale0() {
                this.updateFrames();
              }
              updateScale1() {
                this.updateFrames();
              }
            }

            var RotateOrder;
            (function (RotateOrder) {
              RotateOrder[RotateOrder["RO_XYZ"] = 0] = "RO_XYZ";
              RotateOrder[RotateOrder["RO_XZY"] = 1] = "RO_XZY";
              RotateOrder[RotateOrder["RO_YXZ"] = 2] = "RO_YXZ";
              RotateOrder[RotateOrder["RO_YZX"] = 3] = "RO_YZX";
              RotateOrder[RotateOrder["RO_ZXY"] = 4] = "RO_ZXY";
              RotateOrder[RotateOrder["RO_ZYX"] = 5] = "RO_ZYX";
            })(RotateOrder || (RotateOrder = {}));
            var BulletDofAxis;
            (function (BulletDofAxis) {
              BulletDofAxis[BulletDofAxis["X"] = 0] = "X";
              BulletDofAxis[BulletDofAxis["Y"] = 1] = "Y";
              BulletDofAxis[BulletDofAxis["Z"] = 2] = "Z";
              BulletDofAxis[BulletDofAxis["TWIST"] = 3] = "TWIST";
              BulletDofAxis[BulletDofAxis["SWING1"] = 4] = "SWING1";
              BulletDofAxis[BulletDofAxis["SWING2"] = 5] = "SWING2";
            })(BulletDofAxis || (BulletDofAxis = {}));
            class BulletConfigurableConstraint extends BulletConstraint {
              _setLimit(v, axis, lower, upper) {
                switch (v) {
                  case EConstraintMode.LOCKED:
                    bt.Generic6DofSpring2Constraint_setLimit(this._impl, axis, 0, 0);
                    break;
                  case EConstraintMode.LIMITED:
                    bt.Generic6DofSpring2Constraint_setLimit(this._impl, axis, lower, upper);
                    break;
                  case EConstraintMode.FREE:
                    bt.Generic6DofSpring2Constraint_setLimit(this._impl, axis, 1, 0);
                    break;
                }
              }
              setConstraintMode(idx, v) {
                const ll = this.constraint.linearLimitSettings;
                const al = this.constraint.angularLimitSettings;
                const lowers = [0, 0, 0];
                const uppers = [0, 0, 0];
                let upper = 0;
                let lower = 0;
                switch (idx) {
                  case 0:
                  case 1:
                  case 2:
                    Vec3.toArray(lowers, ll.lower);
                    Vec3.toArray(uppers, ll.upper);
                    lower = lowers[idx];
                    upper = uppers[idx];
                    break;
                  case 3:
                    upper = toRadian(al.twistExtent) * 0.5;
                    lower = -upper;
                    break;
                  case 4:
                    upper = toRadian(al.swingExtent1) * 0.5;
                    lower = -upper;
                    break;
                  case 5:
                    upper = toRadian(al.swingExtent2) * 0.5;
                    lower = -upper;
                    break;
                  default:
                    error(`idx should be in [0, 5], but give ${idx}`);
                    break;
                }
                this._setLimit(v, idx, lower, upper);
              }
              setLinearLimit(idx, lower, upper) {
                let cm = 0;
                const ll = this.constraint.linearLimitSettings;
                switch (idx) {
                  case 0:
                    cm = ll.xMotion;
                    break;
                  case 1:
                    cm = ll.yMotion;
                    break;
                  case 2:
                    cm = ll.zMotion;
                    break;
                }
                this._setLimit(cm, idx, lower, upper);
              }
              setAngularExtent(twist, swing1, swing2) {
                const al = this.constraint.angularLimitSettings;
                this._setLimit(al.twistMotion, BulletDofAxis.TWIST, -toRadian(twist) * 0.5, toRadian(twist) * 0.5);
                this._setLimit(al.swingMotion1, BulletDofAxis.SWING1, -toRadian(swing1) * 0.5, toRadian(swing1) * 0.5);
                this._setLimit(al.swingMotion2, BulletDofAxis.SWING2, -toRadian(swing2) * 0.5, toRadian(swing2) * 0.5);
              }
              setSwingSoftConstraint(v) {
                bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.SWING1, v);
                bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.SWING2, v);
              }
              setTwistSoftConstraint(v) {
                bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.TWIST, v);
              }
              setLinearSoftConstraint(v) {
                bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.X, v);
                bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.Y, v);
                bt.Generic6DofSpring2Constraint_enableSpring(this._impl, BulletDofAxis.Z, v);
              }
              setLinearStiffness(v) {
                bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.X, v);
                bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.Y, v);
                bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.Z, v);
              }
              setLinearDamping(v) {
                bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.X, v);
                bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.Y, v);
                bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.Z, v);
              }
              setLinearRestitution(v) {
                bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.X, v);
                bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.Y, v);
                bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.Z, v);
              }
              setSwingStiffness(v) {
                bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.SWING1, v);
                bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.SWING2, v);
              }
              setSwingDamping(v) {
                bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.SWING1, v);
                bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.SWING2, v);
              }
              setSwingRestitution(v) {
                bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.SWING1, v);
                bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.SWING2, v);
              }
              setTwistStiffness(v) {
                bt.Generic6DofSpring2Constraint_setStiffness(this._impl, BulletDofAxis.TWIST, v);
              }
              setTwistDamping(v) {
                bt.Generic6DofSpring2Constraint_setDamping(this._impl, BulletDofAxis.TWIST, v);
              }
              setTwistRestitution(v) {
                bt.Generic6DofSpring2Constraint_setBounce(this._impl, BulletDofAxis.TWIST, v);
              }
              setDriverMode(idx, v) {
                if (v === EDriverMode.DISABLED) {
                  bt.Generic6DofSpring2Constraint_enableMotor(this._impl, idx, false);
                } else if (v === EDriverMode.SERVO) {
                  bt.Generic6DofSpring2Constraint_enableMotor(this._impl, idx, true);
                  bt.Generic6DofSpring2Constraint_setServo(this._impl, idx, true);
                } else if (v === EDriverMode.INDUCTION) {
                  bt.Generic6DofSpring2Constraint_enableMotor(this._impl, idx, true);
                  bt.Generic6DofSpring2Constraint_setServo(this._impl, idx, false);
                }
              }
              _updateMotorTargetAndVelocity(index) {
                let mode = EDriverMode.DISABLED;
                let axis = 0;
                let target = 0;
                let velocity = 0;
                const ld = this.constraint.linearDriverSettings;
                const ad = this.constraint.angularDriverSettings;
                switch (index) {
                  case 0:
                    axis = BulletDofAxis.X;
                    mode = ld.xDrive;
                    target = ld.targetPosition.x;
                    velocity = -ld.targetVelocity.x;
                    break;
                  case 1:
                    axis = BulletDofAxis.Y;
                    mode = ld.yDrive;
                    target = ld.targetPosition.y;
                    velocity = -ld.targetVelocity.y;
                    break;
                  case 2:
                    axis = BulletDofAxis.Z;
                    mode = ld.zDrive;
                    target = ld.targetPosition.z;
                    velocity = -ld.targetVelocity.z;
                    break;
                  case 3:
                    axis = BulletDofAxis.TWIST;
                    mode = ad.twistDrive;
                    target = -toRadian(ad.targetOrientation.x);
                    velocity = -toRadian(ad.targetVelocity.x);
                    break;
                  case 4:
                    axis = BulletDofAxis.SWING1;
                    mode = ad.swingDrive1;
                    target = -toRadian(ad.targetOrientation.y);
                    velocity = -toRadian(ad.targetVelocity.y);
                    break;
                  case 5:
                    axis = BulletDofAxis.SWING2;
                    mode = ad.swingDrive2;
                    target = -toRadian(ad.targetOrientation.z);
                    velocity = -toRadian(ad.targetVelocity.z);
                    break;
                }
                const strength = index > 2 ? ad.strength : ld.strength;
                bt.Generic6DofSpring2Constraint_setServoTarget(this._impl, axis, target);
                if (mode === EDriverMode.SERVO) {
                  if (index > 2) {
                    bt.Generic6DofSpring2Constraint_setTargetVelocity(this._impl, axis, -target * strength * 0.1);
                  } else {
                    bt.Generic6DofSpring2Constraint_setTargetVelocity(this._impl, axis, target * strength * 0.1);
                  }
                } else if (mode === EDriverMode.INDUCTION) {
                  bt.Generic6DofSpring2Constraint_setTargetVelocity(this._impl, axis, velocity);
                }
              }
              setLinearMotorTarget(v) {
                this._updateMotorTargetAndVelocity(0);
                this._updateMotorTargetAndVelocity(1);
                this._updateMotorTargetAndVelocity(2);
              }
              setLinearMotorVelocity(v) {
                this._updateMotorTargetAndVelocity(0);
                this._updateMotorTargetAndVelocity(1);
                this._updateMotorTargetAndVelocity(2);
              }
              setLinearMotorForceLimit(v) {
                bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.X, v);
                bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.Y, v);
                bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.Z, v);
              }
              setAngularMotorTarget(v) {
                this._updateMotorTargetAndVelocity(3);
                this._updateMotorTargetAndVelocity(4);
                this._updateMotorTargetAndVelocity(5);
              }
              setAngularMotorVelocity(v) {
                this._updateMotorTargetAndVelocity(3);
                this._updateMotorTargetAndVelocity(4);
                this._updateMotorTargetAndVelocity(5);
              }
              setAngularMotorForceLimit(v) {
                bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.TWIST, v);
                bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.SWING1, v);
                bt.Generic6DofSpring2Constraint_setMaxMotorForce(this._impl, BulletDofAxis.SWING2, v);
              }
              setPivotA(v) {
                this.updateFrames();
              }
              setPivotB(v) {
                this.updateFrames();
              }
              setAutoPivotB(v) {
                this.updateFrames();
              }
              setAxis(v) {
                this.updateFrames();
              }
              setSecondaryAxis(v) {
                this.updateFrames();
              }
              setBreakForce(v) {
                const maxForce = Math.max(this.constraint.breakForce, this.constraint.breakTorque);
                const impulse = force2Impulse(maxForce, PhysicsSystem.instance.fixedTimeStep);
                bt.TypedConstraint_setMaxImpulseThreshold(this._impl, impulse);
              }
              setBreakTorque(v) {
                const maxForce = Math.max(this.constraint.breakForce, this.constraint.breakTorque);
                const impulse = force2Impulse(maxForce, PhysicsSystem.instance.fixedTimeStep);
                bt.TypedConstraint_setMaxImpulseThreshold(this._impl, impulse);
              }
              get constraint() {
                return this._com;
              }
              onComponentSet() {
                const cb = this.constraint.connectedBody;
                const bodyA = this._rigidBody.body.impl;
                const bodyB = cb && cb.body.impl || bt.TypedConstraint_getFixedBody();
                const trans0 = BulletCache.instance.BT_TRANSFORM_0;
                const trans1 = BulletCache.instance.BT_TRANSFORM_1;
                this._impl = bt.Generic6DofSpring2Constraint_new(bodyA, bodyB, trans0, trans1, RotateOrder.RO_YZX);
                const linearLimit = this.constraint.linearLimitSettings;
                const angularLimit = this.constraint.angularLimitSettings;
                this.setConstraintMode(0, linearLimit.xMotion);
                this.setConstraintMode(1, linearLimit.yMotion);
                this.setConstraintMode(2, linearLimit.zMotion);
                this.setConstraintMode(3, angularLimit.twistMotion);
                this.setConstraintMode(4, angularLimit.swingMotion1);
                this.setConstraintMode(5, angularLimit.swingMotion2);
                this.setLinearSoftConstraint(linearLimit.enableSoftConstraint);
                this.setLinearStiffness(linearLimit.stiffness);
                this.setLinearDamping(linearLimit.damping);
                this.setLinearRestitution(linearLimit.restitution);
                this.setSwingSoftConstraint(angularLimit.enableSoftConstraintSwing);
                this.setSwingRestitution(angularLimit.swingRestitution);
                this.setSwingStiffness(angularLimit.swingStiffness);
                this.setSwingDamping(angularLimit.swingDamping);
                this.setTwistSoftConstraint(angularLimit.enableSoftConstraintTwist);
                this.setTwistRestitution(angularLimit.twistRestitution);
                this.setTwistStiffness(angularLimit.twistStiffness);
                this.setTwistDamping(angularLimit.twistDamping);
                const linearMotor = this.constraint.linearDriverSettings;
                const angularMotor = this.constraint.angularDriverSettings;
                this.setDriverMode(0, linearMotor.xDrive);
                this.setDriverMode(1, linearMotor.yDrive);
                this.setDriverMode(2, linearMotor.zDrive);
                this.setDriverMode(3, angularMotor.twistDrive);
                this.setDriverMode(4, angularMotor.swingDrive1);
                this.setDriverMode(5, angularMotor.swingDrive2);
                this.setLinearMotorTarget(linearMotor.targetPosition);
                this.setLinearMotorVelocity(linearMotor.targetVelocity);
                this.setLinearMotorForceLimit(linearMotor.strength);
                this.setAngularMotorTarget(angularMotor.targetOrientation);
                this.setAngularMotorVelocity(angularMotor.targetVelocity);
                this.setAngularMotorForceLimit(angularMotor.strength);
                this.setBreakForce(this.constraint.breakForce);
                this.setBreakTorque(this.constraint.breakTorque);
                this.updateFrames();
                this.updateDebugDrawSize();
              }
              updateFrames() {
                const cs = this.constraint;
                const node = cs.node;
                const v3_0 = CC_V3_0;
                const rot_0 = CC_QUAT_0;
                const rot_1 = CC_QUAT_1;
                const trans0 = BulletCache.instance.BT_TRANSFORM_0;
                Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
                cocos2BulletVec3(bt.Transform_getOrigin(trans0), v3_0);
                const quat = BulletCache.instance.BT_QUAT_0;
                const axisX = cs.axis;
                const axisY = cs.secondaryAxis;
                const axisZ = Vec3.cross(CC_V3_1, axisX, axisY);
                const mat = Mat4.set(CC_MAT4_0, axisX.x, axisX.y, axisX.z, 0, axisY.x, axisY.y, axisY.z, 0, axisZ.x, axisZ.y, axisZ.z, 0, 0, 0, 0, 1);
                mat.getRotation(rot_0);
                cocos2BulletQuat(quat, rot_0);
                bt.Transform_setRotation(trans0, quat);
                const trans1 = BulletCache.instance.BT_TRANSFORM_1;
                const cb = this.constraint.connectedBody;
                if (cb) {
                  Quat.multiply(rot_0, node.worldRotation, rot_0);
                  Quat.invert(rot_1, cb.node.worldRotation);
                  Quat.multiply(rot_0, rot_1, rot_0);
                  if (cs.autoPivotB) {
                    Vec3.multiply(v3_0, cs.node.worldScale, cs.pivotA);
                    Vec3.transformQuat(v3_0, v3_0, node.worldRotation);
                    Vec3.add(v3_0, v3_0, cs.node.worldPosition);
                    Vec3.subtract(v3_0, v3_0, cb.node.worldPosition);
                    Vec3.transformQuat(v3_0, v3_0, rot_1);
                  } else {
                    Vec3.multiply(v3_0, cb.node.worldScale, cs.pivotB);
                  }
                } else {
                  Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
                  Vec3.transformQuat(v3_0, v3_0, node.worldRotation);
                  Vec3.add(v3_0, v3_0, node.worldPosition);
                  Quat.multiply(rot_0, node.worldRotation, rot_0);
                }
                cocos2BulletVec3(bt.Transform_getOrigin(trans1), v3_0);
                cocos2BulletQuat(quat, rot_0);
                bt.Transform_setRotation(trans1, quat);
                bt.Generic6DofSpring2Constraint_setFrames(this._impl, trans0, trans1);
              }
              updateScale0() {
                this.updateFrames();
              }
              updateScale1() {
                this.updateFrames();
              }
            }

            const v3_0$2 = new Vec3(0, 0, 0);
            const v3_1 = new Vec3(0, 0, 0);
            new Vec3(0, 0, 0);
            class BulletCharacterController {
              get isEnabled() {
                return this._isEnabled;
              }
              get impl() {
                return this._impl;
              }
              get characterController() {
                return this._comp;
              }
              constructor() {
                this.wrappedWorld = void 0;
                this._isEnabled = false;
                this._impl = 0;
                this._comp = null;
                this._btCollisionFlags = 0;
                this._word3 = 0;
                this._dirty = false;
                this._collisionFilterGroup = PhysicsGroup.DEFAULT;
                this._collisionFilterMask = -1;
                this.id = BulletCharacterController.idCounter++;
                this.wrappedWorld = PhysicsSystem.instance.physicsWorld;
              }
              onComponentSet() {}
              updateScale() {}
              initialize(comp) {
                this._comp = comp;
                const group = this._comp.group;
                const mask = PhysicsSystem.instance.collisionMatrix[group];
                this._collisionFilterGroup = group;
                this._collisionFilterMask = mask;
                this.onComponentSet();
                if (this._impl === 0) {
                  error('[Physics]: Initialize BulletCharacterController failed');
                  return false;
                } else {
                  return true;
                }
              }
              setWrapper() {
                BulletCache.setWrapper(this._impl, btCache.CCT_CACHE_NAME, this);
                const cctCollisionShapeImpl = bt.CharacterController_getCollisionShape(this.impl);
                BulletCache.setWrapper(cctCollisionShapeImpl, btCache.CCT_CACHE_NAME, this);
              }
              onEnable() {
                this._isEnabled = true;
                if (!this._impl) {
                  this.onComponentSet();
                }
                this.setDetectCollisions(false);
                this.setOverlapRecovery(true);
                PhysicsSystem.instance.physicsWorld.addCCT(this);
                this.setWrapper();
              }
              onDisable() {
                this._isEnabled = false;
                this.wrappedWorld.removeCCT(this);
                this.onDestroy();
              }
              onDestroy() {
                bt._safe_delete(this._impl, EBulletType.EBulletTypeCharacterController);
                BulletCache.delWrapper(this._impl, btCache.CCT_CACHE_NAME);
                this._impl = 0;
              }
              onLoad() {}
              getPosition(out) {
                if (!this._impl) return;
                bullet2CocosVec3(out, bt.CharacterController_getPosition(this.impl));
              }
              setPosition(value) {
                if (!this._impl) return;
                cocos2BulletVec3(bt.CharacterController_getPosition(this.impl), value);
                this.syncPhysicsToScene();
              }
              setContactOffset(value) {
                if (!this._impl) return;
                bt.CharacterController_setContactOffset(this._impl, value);
              }
              setStepOffset(value) {
                if (!this._impl) return;
                bt.CharacterController_setStepOffset(this._impl, value);
              }
              setSlopeLimit(value) {
                if (!this._impl) return;
                bt.CharacterController_setSlopeLimit(this._impl, degreesToRadians(value));
              }
              setDetectCollisions(value) {
                if (!this._impl) return;
                bt.CharacterController_setCollision(this.impl, value);
              }
              setOverlapRecovery(value) {
                if (!this._impl) return;
                bt.CharacterController_setOverlapRecovery(this.impl, value);
              }
              onGround() {
                return (this._btCollisionFlags & 1 << 2) > 0;
              }
              syncSceneToPhysics() {
                const node = this.characterController.node;
                if (node.hasChangedFlags) {
                  if (node.hasChangedFlags & TransformBit.SCALE) this.syncScale();
                  if (node.hasChangedFlags & TransformBit.POSITION) {
                    Vec3.add(v3_0$2, node.worldPosition, this.scaledCenter);
                    this.setPosition(v3_0$2);
                  }
                }
              }
              syncPhysicsToScene() {
                this.getPosition(v3_0$2);
                v3_0$2.subtract(this.scaledCenter);
                this._comp.node.setWorldPosition(v3_0$2);
              }
              syncScale() {
                this.updateScale();
              }
              get scaledCenter() {
                Vec3.multiply(v3_1, this._comp.center, this._comp.node.worldScale);
                return v3_1;
              }
              move(movement, minDist, elapsedTime) {
                if (!this._isEnabled) {
                  return;
                }
                const movementBT = BulletCache.instance.BT_V3_0;
                bt.Vec3_set(movementBT, movement.x, movement.y, movement.z);
                this._btCollisionFlags = bt.CharacterController_move(this.impl, movementBT, minDist, elapsedTime);
              }
              setGroup(v) {
                if (v !== this._collisionFilterGroup) {
                  this._collisionFilterGroup = v;
                  this._dirty = true;
                }
              }
              getGroup() {
                return this._collisionFilterGroup;
              }
              addGroup(v) {
                this._collisionFilterGroup |= v;
                this._dirty = true;
              }
              removeGroup(v) {
                this._collisionFilterGroup &= ~v;
                this._dirty = true;
              }
              setMask(v) {
                if (v !== this._collisionFilterMask) {
                  this._collisionFilterMask = v;
                  this._dirty = true;
                }
              }
              getMask() {
                return this._collisionFilterMask;
              }
              addMask(v) {
                this._collisionFilterMask |= v;
                this._dirty = true;
              }
              removeMask(v) {
                this._collisionFilterMask &= ~v;
                this._dirty = true;
              }
              updateEventListener() {
                this.wrappedWorld.updateNeedEmitCCTEvents(this.characterController.needCollisionEvent);
              }
              updateDirty() {
                if (this._dirty) {
                  PhysicsSystem.instance.physicsWorld.removeCCT(this);
                  PhysicsSystem.instance.physicsWorld.addCCT(this);
                  this._dirty = false;
                }
              }
              onShapeHitExt(hit) {
                const shapePtr = bt.ControllerShapeHit_getHitShape(hit);
                const bulletWorld = PhysicsSystem.instance.physicsWorld;
                bulletWorld.cctShapeEventDic.get(this.impl, shapePtr);
                const worldPos = new Vec3();
                bullet2CocosVec3(worldPos, bt.ControllerHit_getHitWorldPos(hit));
                const worldNormal = new Vec3();
                bullet2CocosVec3(worldNormal, bt.ControllerHit_getHitWorldNormal(hit));
                const motionDir = new Vec3();
                bullet2CocosVec3(motionDir, bt.ControllerHit_getHitMotionDir(hit));
                const motionLength = bt.ControllerHit_getHitMotionLength(hit);
                const s = BulletCache.getWrapper(shapePtr, BulletShape.TYPE);
                if (s) {
                  bulletWorld.cctShapeEventDic.set(this.impl, shapePtr, {
                    BulletCharacterController: this,
                    BulletShape: s,
                    worldPos,
                    worldNormal,
                    motionDir,
                    motionLength
                  });
                }
              }
            }
            BulletCharacterController.idCounter = 0;

            const v3_0$1 = new Vec3(0, 0, 0);
            class BulletCapsuleCharacterController extends BulletCharacterController {
              get component() {
                return this._comp;
              }
              onComponentSet() {
                this.component.node.getWorldPosition(v3_0$1);
                v3_0$1.add(this.scaledCenter);
                const pos = BulletCache.instance.BT_V3_0;
                bt.Vec3_set(pos, v3_0$1.x, v3_0$1.y, v3_0$1.z);
                const upDir = Vec3.UNIT_Y;
                const up = BulletCache.instance.BT_V3_1;
                bt.Vec3_set(up, upDir.x, upDir.y, upDir.z);
                const report = bt.ControllerHitReport.implement(importFunc).$$.ptr;
                const bulletWorld = PhysicsSystem.instance.physicsWorld;
                const controllerDesc = bt.CapsuleCharacterControllerDesc_new(degreesToRadians(this.component.slopeLimit), this.component.stepOffset, this.component.skinWidth, up, pos, report, this.component.radius, this.component.height);
                this._impl = bt.CapsuleCharacterController_new(bulletWorld.impl, controllerDesc, 0);
                this.updateScale();
              }
              setRadius(value) {
                this.updateScale();
              }
              setHeight(value) {
                this.updateScale();
              }
              updateScale() {
                this.updateGeometry();
              }
              updateGeometry() {
                const ws = this.component.node.worldScale;
                const r = this.component.radius * absMax(ws.x, ws.z);
                const h = this.component.height * Math.abs(ws.y);
                bt.CapsuleCharacterController_setRadius(this.impl, r);
                bt.CapsuleCharacterController_setHeight(this.impl, h);
                this._dirty = true;
              }
            }

            const v3_0 = new Vec3(0, 0, 0);
            class BulletBoxCharacterController extends BulletCharacterController {
              get component() {
                return this._comp;
              }
              onComponentSet() {
                this.component.node.getWorldPosition(v3_0);
                v3_0.add(this.scaledCenter);
                const pos = BulletCache.instance.BT_V3_0;
                bt.Vec3_set(pos, v3_0.x, v3_0.y, v3_0.z);
                const upDir = Vec3.UNIT_Y;
                const up = BulletCache.instance.BT_V3_1;
                bt.Vec3_set(up, upDir.x, upDir.y, upDir.z);
                const report = bt.ControllerHitReport.implement(importFunc).$$.ptr;
                const bulletWorld = PhysicsSystem.instance.physicsWorld;
                const controllerDesc = bt.BoxCharacterControllerDesc_new(degreesToRadians(this.component.slopeLimit), this.component.stepOffset, this.component.skinWidth, up, pos, report, this.component.halfHeight, this.component.halfSideExtent, this.component.halfForwardExtent);
                this._impl = bt.BoxCharacterController_new(bulletWorld.impl, controllerDesc, 0);
                this.updateScale();
              }
              setHalfHeight(value) {
                this.updateScale();
              }
              setHalfSideExtent(value) {
                this.updateScale();
              }
              setHalfForwardExtent(value) {
                this.updateScale();
              }
              updateScale() {
                this.updateGeometry();
              }
              updateGeometry() {
                const ws = this.component.node.worldScale;
                bt.BoxCharacterController_setHalfSideExtent(this.impl, this.component.halfSideExtent * ws.x);
                bt.BoxCharacterController_setHalfHeight(this.impl, this.component.halfHeight * ws.y);
                bt.BoxCharacterController_setHalfForwardExtent(this.impl, this.component.halfForwardExtent * ws.z);
                this._dirty = true;
              }
            }

            game.once(Game.EVENT_PRE_SUBSYSTEM_INIT, () => {
              selector.register('bullet', {
                PhysicsWorld: BulletWorld,
                RigidBody: BulletRigidBody,
                BoxShape: BulletBoxShape,
                SphereShape: BulletSphereShape,
                CapsuleShape: BulletCapsuleShape,
                TrimeshShape: BulletTrimeshShape,
                CylinderShape: BulletCylinderShape,
                ConeShape: BulletConeShape,
                TerrainShape: BulletTerrainShape,
                SimplexShape: BulletSimplexShape,
                PlaneShape: BulletPlaneShape,
                PointToPointConstraint: BulletP2PConstraint,
                HingeConstraint: BulletHingeConstraint,
                FixedConstraint: BulletFixedConstraint,
                ConfigurableConstraint: BulletConfigurableConstraint,
                BoxCharacterController: BulletBoxCharacterController,
                CapsuleCharacterController: BulletCapsuleCharacterController
              });
            });

        })
    };
}));
