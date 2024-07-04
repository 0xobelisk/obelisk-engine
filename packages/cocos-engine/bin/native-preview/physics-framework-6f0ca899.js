System.register(['./index-ce98320e.js', './deprecated-f8df8d32.js', './director-dc238483.js', './node-event-18d96a1b.js', './collision-matrix-13be3bef.js', './physics-enum-187e99c4.js', './physics-selector-fe6b5c81.js', './builtin-res-mgr.jsb-c9e8e53a.js', './deprecated-fcfb90f6.js', './find-7a03d1cc.js', './util-9da0b4a2.js', './mesh.jsb-cea8fe4b.js', './skeleton.jsb-04631524.js', './terrain-asset-debe117c.js', './base.js'], (function (exports) {
    'use strict';
    var ccclass, type, applyDecoratedInitializer, CCFloat, equals, serializable, Vec3, legacyCC, System, settings, Settings, warn, Enum, Ray, disallowMultiple, executionOrder, error, Eventify, AABB, Sphere, absMax, warnID, requireComponent, CCBoolean, formerlySerializedAs, replaceProperty, removeProperty, setClassAlias, game, director, Director, _applyDecoratedDescriptor, Asset, Component, CollisionMatrix, PhysicsGroup, ERigidBodyType, EColliderType, EAxisDirection, ESimplexType, EConstraintType, EConstraintMode, EDriverMode, ECharacterControllerType, ED6Axis, EPhysicsDrawFlags, selector, constructDefaultWorld, createRigidBody, createShape, createConstraint, createCharacterController, builtinResMgr, assetManager, RecyclePool, absolute, util, Mesh, TerrainAsset;
    return {
        setters: [function (module) {
            ccclass = module.by;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            CCFloat = module.au;
            equals = module.B;
            serializable = module.bf;
            Vec3 = module.n;
            legacyCC = module.l;
            System = module.a$;
            settings = module.a_;
            Settings = module.aZ;
            warn = module.w;
            Enum = module.aa;
            Ray = module.ci;
            disallowMultiple = module.ck;
            executionOrder = module.cs;
            error = module.e;
            Eventify = module.aE;
            AABB = module.bE;
            Sphere = module.bF;
            absMax = module.a3;
            warnID = module.d;
            requireComponent = module.cC;
            CCBoolean = module.av;
            formerlySerializedAs = module.be;
            replaceProperty = module.ag;
            removeProperty = module.ah;
            setClassAlias = module.cj;
        }, function (module) {
            game = module.g;
        }, function (module) {
            director = module.n;
            Director = module.m;
        }, function (module) {
            _applyDecoratedDescriptor = module.H;
            Asset = module.A;
            Component = module.C;
        }, function (module) {
            CollisionMatrix = module.C;
        }, function (module) {
            PhysicsGroup = module.P;
            ERigidBodyType = module.E;
            EColliderType = module.a;
            EAxisDirection = module.b;
            ESimplexType = module.c;
            EConstraintType = module.d;
            EConstraintMode = module.e;
            EDriverMode = module.f;
            ECharacterControllerType = module.g;
            ED6Axis = module.h;
            EPhysicsDrawFlags = module.i;
        }, function (module) {
            selector = module.s;
            constructDefaultWorld = module.c;
            createRigidBody = module.a;
            createShape = module.b;
            createConstraint = module.d;
            createCharacterController = module.e;
        }, function (module) {
            builtinResMgr = module.at;
            assetManager = module.aq;
        }, function (module) {
            RecyclePool = module.R;
        }, function () {}, function (module) {
            absolute = module.a;
            util = module.u;
        }, function (module) {
            Mesh = module.M;
        }, function () {}, function (module) {
            TerrainAsset = module.T;
        }, function () {}],
        execute: (function () {

            var _dec$k, _dec2$j, _dec3$a, _dec4$9, _dec5$7, _class$k, _class2$k, _initializer$k, _initializer2$h, _initializer3$a, _initializer4$5, _class3$4;
            let PhysicsMaterial = exports('c', (_dec$k = ccclass('cc.PhysicsMaterial'), _dec2$j = type(CCFloat), _dec3$a = type(CCFloat), _dec4$9 = type(CCFloat), _dec5$7 = type(CCFloat), _dec$k(_class$k = (_class2$k = (_class3$4 = class PhysicsMaterial extends Asset {
              get friction() {
                return this._friction;
              }
              set friction(value) {
                if (!equals(this._friction, value)) {
                  this._friction = value;
                  this.emit(PhysicsMaterial.EVENT_UPDATE);
                }
              }
              get rollingFriction() {
                return this._rollingFriction;
              }
              set rollingFriction(value) {
                if (!equals(this._rollingFriction, value)) {
                  this._rollingFriction = value;
                  this.emit(PhysicsMaterial.EVENT_UPDATE);
                }
              }
              get spinningFriction() {
                return this._spinningFriction;
              }
              set spinningFriction(value) {
                if (!equals(this._spinningFriction, value)) {
                  this._spinningFriction = value;
                  this.emit(PhysicsMaterial.EVENT_UPDATE);
                }
              }
              get restitution() {
                return this._restitution;
              }
              set restitution(value) {
                if (!equals(this._restitution, value)) {
                  this._restitution = value;
                  this.emit(PhysicsMaterial.EVENT_UPDATE);
                }
              }
              constructor() {
                super();
                this.id = void 0;
                this._friction = _initializer$k && _initializer$k();
                this._rollingFriction = _initializer2$h && _initializer2$h();
                this._spinningFriction = _initializer3$a && _initializer3$a();
                this._restitution = _initializer4$5 && _initializer4$5();
                PhysicsMaterial.allMaterials.push(this);
                this.id = PhysicsMaterial._idCounter++;
                if (!this._uuid) this._uuid = `pm_${this.id}`;
              }
              clone() {
                const c = new PhysicsMaterial();
                c._friction = this._friction;
                c._restitution = this._restitution;
                c._rollingFriction = this._rollingFriction;
                c._spinningFriction = this._spinningFriction;
                return c;
              }
              destroy() {
                if (super.destroy()) {
                  const idx = PhysicsMaterial.allMaterials.indexOf(this);
                  if (idx >= 0) {
                    PhysicsMaterial.allMaterials.splice(idx, 1);
                  }
                  return true;
                }
                return false;
              }
              setValues(friction, rollingFriction, spinningFriction, restitution) {
                const emitUpdate = this._friction !== friction || this._rollingFriction !== rollingFriction || this._spinningFriction !== spinningFriction || this._restitution !== restitution;
                this._friction = friction;
                this._rollingFriction = rollingFriction;
                this._spinningFriction = spinningFriction;
                this._restitution = restitution;
                if (emitUpdate) this.emit(PhysicsMaterial.EVENT_UPDATE);
              }
            }, _class3$4.allMaterials = [], _class3$4.EVENT_UPDATE = 'event_update', _class3$4._idCounter = 0, _class3$4), (_applyDecoratedDescriptor(_class2$k.prototype, "friction", [_dec2$j], Object.getOwnPropertyDescriptor(_class2$k.prototype, "friction"), _class2$k.prototype), _applyDecoratedDescriptor(_class2$k.prototype, "rollingFriction", [_dec3$a], Object.getOwnPropertyDescriptor(_class2$k.prototype, "rollingFriction"), _class2$k.prototype), _applyDecoratedDescriptor(_class2$k.prototype, "spinningFriction", [_dec4$9], Object.getOwnPropertyDescriptor(_class2$k.prototype, "spinningFriction"), _class2$k.prototype), _applyDecoratedDescriptor(_class2$k.prototype, "restitution", [_dec5$7], Object.getOwnPropertyDescriptor(_class2$k.prototype, "restitution"), _class2$k.prototype), _initializer$k = applyDecoratedInitializer(_class2$k.prototype, "_friction", [serializable], function () {
              return 0.6;
            }), _initializer2$h = applyDecoratedInitializer(_class2$k.prototype, "_rollingFriction", [serializable], function () {
              return 0.0;
            }), _initializer3$a = applyDecoratedInitializer(_class2$k.prototype, "_spinningFriction", [serializable], function () {
              return 0.0;
            }), _initializer4$5 = applyDecoratedInitializer(_class2$k.prototype, "_restitution", [serializable], function () {
              return 0.0;
            })), _class2$k)) || _class$k));

            class PhysicsRayResult {
              constructor() {
                this._hitPoint = new Vec3();
                this._hitNormal = new Vec3();
                this._distance = 0;
                this._collider = null;
              }
              get hitPoint() {
                return this._hitPoint;
              }
              get distance() {
                return this._distance;
              }
              get collider() {
                return this._collider;
              }
              get hitNormal() {
                return this._hitNormal;
              }
              _assign(hitPoint, distance, collider, hitNormal) {
                Vec3.copy(this._hitPoint, hitPoint);
                Vec3.copy(this._hitNormal, hitNormal);
                this._distance = distance;
                this._collider = collider;
              }
              clone() {
                const c = new PhysicsRayResult();
                Vec3.copy(c._hitPoint, this._hitPoint);
                Vec3.copy(c._hitNormal, this._hitNormal);
                c._distance = this._distance;
                c._collider = this._collider;
                return c;
              }
            } exports('d', PhysicsRayResult);
            class PhysicsLineStripCastResult extends PhysicsRayResult {
              constructor(...args) {
                super(...args);
                this._id = 0;
              }
              get id() {
                return this._id;
              }
              _assign(hitPoint, distance, collider, hitNormal, id = 0) {
                super._assign(hitPoint, distance, collider, hitNormal);
                this._id = id;
              }
              clone() {
                const c = new PhysicsLineStripCastResult();
                Vec3.copy(c._hitPoint, this._hitPoint);
                Vec3.copy(c._hitNormal, this._hitNormal);
                c._distance = this._distance;
                c._collider = this._collider;
                c._id = this._id;
                return c;
              }
            } exports('e', PhysicsLineStripCastResult);

            legacyCC.internal.PhysicsGroup = PhysicsGroup;
            class PhysicsSystem extends System {
              static get PHYSICS_NONE() {
                return !selector.id;
              }
              static get PHYSICS_BUILTIN() {
                return selector.id === 'builtin';
              }
              static get PHYSICS_CANNON() {
                return selector.id === 'cannon.js';
              }
              static get PHYSICS_BULLET() {
                return selector.id === 'bullet';
              }
              static get PHYSICS_PHYSX() {
                return selector.id === 'physx';
              }
              static get PhysicsGroup() {
                return PhysicsGroup;
              }
              static get instance() {
                return PhysicsSystem._instance;
              }
              get enable() {
                return this._enable;
              }
              set enable(value) {
                this._enable = value;
              }
              get allowSleep() {
                return this._allowSleep;
              }
              set allowSleep(v) {
                this._allowSleep = v;
                if (this.physicsWorld) {
                  this.physicsWorld.setAllowSleep(v);
                }
              }
              get maxSubSteps() {
                return this._maxSubSteps;
              }
              set maxSubSteps(value) {
                this._maxSubSteps = value;
              }
              get fixedTimeStep() {
                return this._fixedTimeStep;
              }
              set fixedTimeStep(value) {
                this._fixedTimeStep = value;
              }
              get gravity() {
                return this._gravity;
              }
              set gravity(gravity) {
                this._gravity.set(gravity);
                if (this.physicsWorld) {
                  this.physicsWorld.setGravity(gravity);
                }
              }
              get sleepThreshold() {
                return this._sleepThreshold;
              }
              set sleepThreshold(v) {
                this._sleepThreshold = v;
              }
              get autoSimulation() {
                return this._autoSimulation;
              }
              set autoSimulation(value) {
                this._autoSimulation = value;
              }
              get defaultMaterial() {
                return this._material;
              }
              setDefaultPhysicsMaterial(material) {
                this._material = material;
                this.physicsWorld.setDefaultMaterial(this._material);
                this._material.on(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
              }
              initDefaultMaterial() {
                if (this._material != null) return Promise.resolve();
                const builtinMaterial = builtinResMgr.get('default-physics-material');
                if (!builtinMaterial) {
                  console.error('PhysicsSystem initDefaultMaterial() Failed to load builtinMaterial');
                  return Promise.resolve();
                }
                const userMaterial = settings.querySettings(Settings.Category.PHYSICS, 'defaultMaterial');
                if (!userMaterial) {
                  this.setDefaultPhysicsMaterial(builtinMaterial);
                  return Promise.resolve();
                } else {
                  return new Promise((resolve, reject) => {
                    assetManager.loadAny(userMaterial, (err, asset) => err || !(asset instanceof PhysicsMaterial) ? reject(err) : resolve(asset));
                  }).then(asset => {
                    this.setDefaultPhysicsMaterial(asset);
                  }).catch(reason => {
                    warn(reason);
                    warn(`Failed to load user customized default physics material: ${userMaterial}, will fallback to built-in default physics material`);
                    this.setDefaultPhysicsMaterial(builtinMaterial);
                  });
                }
              }
              get physicsWorld() {
                return selector.physicsWorld;
              }
              constructor() {
                super();
                this.raycastClosestResult = new PhysicsRayResult();
                this.raycastResults = [];
                this.lineStripCastClosestResult = new PhysicsLineStripCastResult();
                this.lineStripCastResults = [];
                this.sweepCastClosestResult = new PhysicsRayResult();
                this.sweepCastResults = [];
                this.collisionMatrix = new CollisionMatrix(1);
                this.minVolumeSize = 1e-5;
                this.useNodeChains = false;
                this._enable = true;
                this._allowSleep = true;
                this._maxSubSteps = 1;
                this._subStepCount = 0;
                this._fixedTimeStep = 1.0 / 60.0;
                this._autoSimulation = true;
                this._accumulator = 0;
                this._sleepThreshold = 0.1;
                this._gravity = new Vec3(0, -10, 0);
                this._material = void 0;
                this.raycastOptions = {
                  group: -1,
                  mask: -1,
                  queryTrigger: true,
                  maxDistance: 10000000
                };
                this.raycastResultPool = new RecyclePool(() => new PhysicsRayResult(), 1);
                this.sweepResultPool = new RecyclePool(() => new PhysicsRayResult(), 1);
              }
              postUpdate(deltaTime) {
                if (!this.physicsWorld) return;
                if (!this._enable) {
                  this.physicsWorld.syncSceneToPhysics();
                  return;
                }
                if (this._autoSimulation) {
                  this._subStepCount = 0;
                  this._accumulator += deltaTime;
                  director.emit(Director.EVENT_BEFORE_PHYSICS);
                  while (this._subStepCount < this._maxSubSteps) {
                    if (this._accumulator >= this._fixedTimeStep) {
                      this.physicsWorld.syncSceneToPhysics();
                      this.physicsWorld.step(this._fixedTimeStep);
                      this.physicsWorld.emitEvents();
                      this.physicsWorld.syncAfterEvents();
                      this._accumulator -= this._fixedTimeStep;
                      this._subStepCount++;
                    } else {
                      this.physicsWorld.syncSceneToPhysics();
                      break;
                    }
                  }
                  director.emit(Director.EVENT_AFTER_PHYSICS);
                }
              }
              resetConfiguration(config) {
                const allowSleep = config ? config.allowSleep : settings.querySettings(Settings.Category.PHYSICS, 'allowSleep');
                if (typeof allowSleep === 'boolean') this._allowSleep = allowSleep;
                const fixedTimeStep = config ? config.fixedTimeStep : settings.querySettings(Settings.Category.PHYSICS, 'fixedTimeStep');
                if (typeof fixedTimeStep === 'number') this._fixedTimeStep = fixedTimeStep;
                const maxSubSteps = config ? config.maxSubSteps : settings.querySettings(Settings.Category.PHYSICS, 'maxSubSteps');
                if (typeof maxSubSteps === 'number') this._maxSubSteps = maxSubSteps;
                const sleepThreshold = config ? config.sleepThreshold : settings.querySettings(Settings.Category.PHYSICS, 'sleepThreshold');
                if (typeof sleepThreshold === 'number') this._sleepThreshold = sleepThreshold;
                const autoSimulation = config ? config.autoSimulation : settings.querySettings(Settings.Category.PHYSICS, 'autoSimulation');
                if (typeof autoSimulation === 'boolean') this.autoSimulation = autoSimulation;
                const gravity = config ? config.gravity : settings.querySettings(Settings.Category.PHYSICS, 'gravity');
                if (gravity) Vec3.copy(this._gravity, gravity);
                const collisionMatrix = config ? config.collisionMatrix : settings.querySettings(Settings.Category.PHYSICS, 'collisionMatrix');
                if (collisionMatrix) {
                  for (const i in collisionMatrix) {
                    this.collisionMatrix[`${1 << parseInt(i)}`] = collisionMatrix[i];
                  }
                }
                const collisionGroups = config ? config.collisionGroups : settings.querySettings(Settings.Category.PHYSICS, 'collisionGroups');
                if (collisionGroups) {
                  const cg = collisionGroups;
                  if (cg instanceof Array) {
                    cg.forEach(v => {
                      PhysicsGroup[v.name] = 1 << v.index;
                    });
                    Enum.update(PhysicsGroup);
                  }
                }
                if (this.physicsWorld) {
                  this.physicsWorld.setGravity(this._gravity);
                  this.physicsWorld.setAllowSleep(this._allowSleep);
                }
              }
              resetAccumulator(time = 0) {
                this._accumulator = time;
              }
              step(fixedTimeStep, deltaTime, maxSubSteps) {
                if (this.physicsWorld) this.physicsWorld.step(fixedTimeStep, deltaTime, maxSubSteps);
              }
              syncSceneToPhysics() {
                if (this.physicsWorld) this.physicsWorld.syncSceneToPhysics();
              }
              emitEvents() {
                if (this.physicsWorld) this.physicsWorld.emitEvents();
              }
              get debugDrawFlags() {
                return this.physicsWorld.debugDrawFlags;
              }
              set debugDrawFlags(v) {
                this.physicsWorld.debugDrawFlags = v;
              }
              get debugDrawConstraintSize() {
                return this.physicsWorld.debugDrawConstraintSize;
              }
              set debugDrawConstraintSize(v) {
                this.physicsWorld.debugDrawConstraintSize = v;
              }
              raycast(worldRay, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (!this.physicsWorld) return false;
                this.raycastResultPool.reset();
                this.raycastResults.length = 0;
                this.raycastOptions.mask = mask >>> 0;
                this.raycastOptions.maxDistance = maxDistance;
                this.raycastOptions.queryTrigger = queryTrigger;
                return this.physicsWorld.raycast(worldRay, this.raycastOptions, this.raycastResultPool, this.raycastResults);
              }
              raycastClosest(worldRay, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (!this.physicsWorld) return false;
                this.raycastOptions.mask = mask >>> 0;
                this.raycastOptions.maxDistance = maxDistance;
                this.raycastOptions.queryTrigger = queryTrigger;
                return this.physicsWorld.raycastClosest(worldRay, this.raycastOptions, this.raycastClosestResult);
              }
              lineStripCast(samplePointsWorldSpace, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (samplePointsWorldSpace.length < 2) return false;
                this.lineStripCastResults = [];
                let distance = 0;
                const worldRay = new Ray();
                for (let i = 1; i < samplePointsWorldSpace.length; ++i) {
                  if (distance > maxDistance) break;
                  const fromPoint = samplePointsWorldSpace[i - 1];
                  const toPoint = samplePointsWorldSpace[i];
                  const direction = new Vec3();
                  Vec3.subtract(direction, toPoint, fromPoint);
                  const stepLength = Vec3.len(direction);
                  distance += stepLength;
                  Vec3.multiplyScalar(direction, direction, 1.0 / stepLength);
                  worldRay.d = direction;
                  worldRay.o = fromPoint;
                  const hit = this.raycast(worldRay, mask, stepLength, queryTrigger);
                  if (hit) {
                    for (let re = 0; re < this.raycastResults.length; re++) {
                      const result = this.raycastResults[re];
                      if (re === 0 && Vec3.equals(fromPoint, result.hitPoint)) {
                        continue;
                      }
                      const copiedResult = new PhysicsLineStripCastResult();
                      copiedResult._assign(result.hitPoint, result.distance, result.collider, result.hitNormal, i - 1);
                      this.lineStripCastResults.push(copiedResult);
                    }
                  }
                }
                return this.lineStripCastResults.length > 0;
              }
              lineStripCastClosest(samplePointsWorldSpace, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (samplePointsWorldSpace.length < 2) {
                  return false;
                }
                let distance = 0;
                const worldRay = new Ray();
                let hit = false;
                for (let i = 1; i < samplePointsWorldSpace.length; ++i) {
                  if (distance > maxDistance) break;
                  const fromPoint = samplePointsWorldSpace[i - 1];
                  const toPoint = samplePointsWorldSpace[i];
                  const direction = new Vec3();
                  Vec3.subtract(direction, toPoint, fromPoint);
                  const stepLength = Vec3.len(direction);
                  distance += stepLength;
                  Vec3.multiplyScalar(direction, direction, 1.0 / stepLength);
                  worldRay.d = direction;
                  worldRay.o = fromPoint;
                  hit = this.raycastClosest(worldRay, mask, stepLength, queryTrigger);
                  if (hit) {
                    const result = this.raycastClosestResult;
                    const copiedResult = new PhysicsLineStripCastResult();
                    copiedResult._assign(result.hitPoint, result.distance, result.collider, result.hitNormal, i - 1);
                    this.lineStripCastClosestResult = copiedResult;
                    break;
                  }
                }
                return hit;
              }
              sweepBox(worldRay, halfExtent, orientation, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (!this.physicsWorld) return false;
                this.sweepResultPool.reset();
                this.sweepCastResults.length = 0;
                this.raycastOptions.mask = mask >>> 0;
                this.raycastOptions.maxDistance = maxDistance;
                this.raycastOptions.queryTrigger = queryTrigger;
                return this.physicsWorld.sweepBox(worldRay, halfExtent, orientation, this.raycastOptions, this.sweepResultPool, this.sweepCastResults);
              }
              sweepBoxClosest(worldRay, halfExtent, orientation, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (!this.physicsWorld) return false;
                this.raycastOptions.mask = mask >>> 0;
                this.raycastOptions.maxDistance = maxDistance;
                this.raycastOptions.queryTrigger = queryTrigger;
                return this.physicsWorld.sweepBoxClosest(worldRay, halfExtent, orientation, this.raycastOptions, this.sweepCastClosestResult);
              }
              sweepSphere(worldRay, radius, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (!this.physicsWorld) return false;
                this.sweepResultPool.reset();
                this.sweepCastResults.length = 0;
                this.raycastOptions.mask = mask >>> 0;
                this.raycastOptions.maxDistance = maxDistance;
                this.raycastOptions.queryTrigger = queryTrigger;
                return this.physicsWorld.sweepSphere(worldRay, radius, this.raycastOptions, this.sweepResultPool, this.sweepCastResults);
              }
              sweepSphereClosest(worldRay, radius, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (!this.physicsWorld) return false;
                this.raycastOptions.mask = mask >>> 0;
                this.raycastOptions.maxDistance = maxDistance;
                this.raycastOptions.queryTrigger = queryTrigger;
                return this.physicsWorld.sweepSphereClosest(worldRay, radius, this.raycastOptions, this.sweepCastClosestResult);
              }
              sweepCapsule(worldRay, radius, height, orientation, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (!this.physicsWorld) return false;
                this.sweepResultPool.reset();
                this.sweepCastResults.length = 0;
                this.raycastOptions.mask = mask >>> 0;
                this.raycastOptions.maxDistance = maxDistance;
                this.raycastOptions.queryTrigger = queryTrigger;
                return this.physicsWorld.sweepCapsule(worldRay, radius, height, orientation, this.raycastOptions, this.sweepResultPool, this.sweepCastResults);
              }
              sweepCapsuleClosest(worldRay, radius, height, orientation, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true) {
                if (!this.physicsWorld) return false;
                this.raycastOptions.mask = mask >>> 0;
                this.raycastOptions.maxDistance = maxDistance;
                this.raycastOptions.queryTrigger = queryTrigger;
                return this.physicsWorld.sweepCapsuleClosest(worldRay, radius, height, orientation, this.raycastOptions, this.sweepCastClosestResult);
              }
              _updateMaterial() {
                if (this.physicsWorld) this.physicsWorld.setDefaultMaterial(this._material);
              }
              static constructAndRegister() {
                var _settings$querySettin;
                const enabled = (_settings$querySettin = settings.querySettings(Settings.Category.PHYSICS, 'enabled')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : true;
                if (!enabled) {
                  return;
                }
                if (!PhysicsSystem._instance) {
                  const sys = new PhysicsSystem();
                  PhysicsSystem._instance = sys;
                  sys.resetConfiguration();
                  constructDefaultWorld(sys);
                  director.registerSystem(PhysicsSystem.ID, sys, sys.priority);
                  game.onPostProjectInitDelegate.add(sys.initDefaultMaterial.bind(sys));
                }
              }
            } exports('P', PhysicsSystem);
            PhysicsSystem.ID = 'PHYSICS';
            PhysicsSystem._instance = null;
            director.once(Director.EVENT_INIT, () => {
              PhysicsSystem.constructAndRegister();
            });

            var _dec$j, _dec2$i, _dec3$9, _dec4$8, _class$j, _class2$j, _initializer$j, _initializer2$g, _initializer3$9, _initializer4$4, _initializer5$3, _initializer6$3, _initializer7$2, _initializer8$2, _initializer9$2, _class3$3;
            let RigidBody = exports('R', (_dec$j = ccclass('cc.RigidBody'), _dec2$i = executionOrder(-1), _dec3$9 = type(PhysicsSystem.PhysicsGroup), _dec4$8 = type(ERigidBodyType), _dec$j(_class$j = disallowMultiple(_class$j = _dec2$i(_class$j = (_class2$j = (_class3$3 = class RigidBody extends Component {
              constructor(...args) {
                super(...args);
                this._body = null;
                this._group = _initializer$j && _initializer$j();
                this._type = _initializer2$g && _initializer2$g();
                this._mass = _initializer3$9 && _initializer3$9();
                this._allowSleep = _initializer4$4 && _initializer4$4();
                this._linearDamping = _initializer5$3 && _initializer5$3();
                this._angularDamping = _initializer6$3 && _initializer6$3();
                this._useGravity = _initializer7$2 && _initializer7$2();
                this._linearFactor = _initializer8$2 && _initializer8$2();
                this._angularFactor = _initializer9$2 && _initializer9$2();
              }
              get group() {
                return this._group;
              }
              set group(v) {
                if (!Number.isInteger(Math.log2(v >>> 0))) warn('[Physics]: The group should only have one bit.');
                this._group = v;
                if (this._body) {
                  if (this._body.getGroup() !== v) this._body.setGroup(v);
                }
              }
              get type() {
                return this._type;
              }
              set type(v) {
                if (this._type === v) return;
                this._type = v;
                if (this._body) this._body.setType(v);
              }
              get mass() {
                return this._mass;
              }
              set mass(value) {
                if (value <= 0) warn('[Physics]: The mass should be greater than zero.');
                if (this._mass === value) return;
                value = value <= 0 ? 0.0001 : value;
                this._mass = value;
                if (this._body) this._body.setMass(value);
              }
              get allowSleep() {
                return this._allowSleep;
              }
              set allowSleep(v) {
                this._allowSleep = v;
                if (this._body) this._body.setAllowSleep(v);
              }
              get linearDamping() {
                return this._linearDamping;
              }
              set linearDamping(value) {
                if ((value < 0 || value > 1)) warn('[Physics]: The damping should be between zero to one.');
                this._linearDamping = value;
                if (this._body) this._body.setLinearDamping(value);
              }
              get angularDamping() {
                return this._angularDamping;
              }
              set angularDamping(value) {
                if ((value < 0 || value > 1)) warn('[Physics]: The damping should be between zero to one.');
                this._angularDamping = value;
                if (this._body) this._body.setAngularDamping(value);
              }
              get useGravity() {
                return this._useGravity;
              }
              set useGravity(value) {
                this._useGravity = value;
                if (this._body) this._body.useGravity(value);
              }
              get linearFactor() {
                return this._linearFactor;
              }
              set linearFactor(value) {
                Vec3.copy(this._linearFactor, value);
                if (this._body) {
                  this._body.setLinearFactor(this._linearFactor);
                }
              }
              get angularFactor() {
                return this._angularFactor;
              }
              set angularFactor(value) {
                Vec3.copy(this._angularFactor, value);
                if (this._body) {
                  this._body.setAngularFactor(this._angularFactor);
                }
              }
              get sleepThreshold() {
                if (this._isInitialized) {
                  return this._body.getSleepThreshold();
                }
                return 0.1;
              }
              set sleepThreshold(v) {
                if (this._isInitialized) {
                  this._body.setSleepThreshold(v);
                }
              }
              get useCCD() {
                if (this._isInitialized) {
                  return this._body.isUsingCCD();
                }
                return false;
              }
              set useCCD(v) {
                if (this._isInitialized) {
                  this._body.useCCD(v);
                }
              }
              get isAwake() {
                if (this._isInitialized) return this._body.isAwake;
                return false;
              }
              get isSleepy() {
                if (this._isInitialized) return this._body.isSleepy;
                return false;
              }
              get isSleeping() {
                if (this._isInitialized) return this._body.isSleeping;
                return false;
              }
              get isStatic() {
                return this._type === ERigidBodyType.STATIC;
              }
              set isStatic(v) {
                if (v && this.isStatic || !v && !this.isStatic) return;
                this.type = v ? ERigidBodyType.STATIC : ERigidBodyType.DYNAMIC;
              }
              get isDynamic() {
                return this._type === ERigidBodyType.DYNAMIC;
              }
              set isDynamic(v) {
                if (v && this.isDynamic || !v && !this.isDynamic) return;
                this.type = v ? ERigidBodyType.DYNAMIC : ERigidBodyType.KINEMATIC;
              }
              get isKinematic() {
                return this._type === ERigidBodyType.KINEMATIC;
              }
              set isKinematic(v) {
                if (v && this.isKinematic || !v && !this.isKinematic) return;
                this.type = v ? ERigidBodyType.KINEMATIC : ERigidBodyType.DYNAMIC;
              }
              get body() {
                return this._body;
              }
              get _isInitialized() {
                const r = this._body === null;
                if (r) {
                  error('[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene.');
                }
                return !r;
              }
              onLoad() {
                if (!selector.runInEditor) return;
                this._body = createRigidBody();
                this._body.initialize(this);
              }
              onEnable() {
                if (this._body) this._body.onEnable();
              }
              onDisable() {
                if (this._body) this._body.onDisable();
              }
              onDestroy() {
                if (this._body) this._body.onDestroy();
              }
              applyForce(force, relativePoint) {
                if (this._isInitialized) this._body.applyForce(force, relativePoint);
              }
              applyLocalForce(force, localPoint) {
                if (this._isInitialized) this._body.applyLocalForce(force, localPoint);
              }
              applyImpulse(impulse, relativePoint) {
                if (this._isInitialized) this._body.applyImpulse(impulse, relativePoint);
              }
              applyLocalImpulse(impulse, localPoint) {
                if (this._isInitialized) this._body.applyLocalImpulse(impulse, localPoint);
              }
              applyTorque(torque) {
                if (this._isInitialized) this._body.applyTorque(torque);
              }
              applyLocalTorque(torque) {
                if (this._isInitialized) this._body.applyLocalTorque(torque);
              }
              wakeUp() {
                if (this._isInitialized) this._body.wakeUp();
              }
              sleep() {
                if (this._isInitialized) this._body.sleep();
              }
              clearState() {
                if (this._isInitialized) this._body.clearState();
              }
              clearForces() {
                if (this._isInitialized) this._body.clearForces();
              }
              clearVelocity() {
                if (this._isInitialized) this._body.clearVelocity();
              }
              getLinearVelocity(out) {
                if (this._isInitialized) this._body.getLinearVelocity(out);
              }
              setLinearVelocity(value) {
                if (this._isInitialized) this._body.setLinearVelocity(value);
              }
              getAngularVelocity(out) {
                if (this._isInitialized) this._body.getAngularVelocity(out);
              }
              setAngularVelocity(value) {
                if (this._isInitialized) this._body.setAngularVelocity(value);
              }
              getGroup() {
                if (this._isInitialized) return this._body.getGroup();
                return 0;
              }
              setGroup(v) {
                if (this._isInitialized) this._body.setGroup(v);
              }
              addGroup(v) {
                if (this._isInitialized) this._body.addGroup(v);
              }
              removeGroup(v) {
                if (this._isInitialized) this._body.removeGroup(v);
              }
              getMask() {
                if (this._isInitialized) return this._body.getMask();
                return 0;
              }
              setMask(v) {
                if (this._isInitialized) this._body.setMask(v);
              }
              addMask(v) {
                if (this._isInitialized) this._body.addMask(v);
              }
              removeMask(v) {
                if (this._isInitialized) this._body.removeMask(v);
              }
            }, _class3$3.Type = ERigidBodyType, _class3$3), (_applyDecoratedDescriptor(_class2$j.prototype, "group", [_dec3$9], Object.getOwnPropertyDescriptor(_class2$j.prototype, "group"), _class2$j.prototype), _applyDecoratedDescriptor(_class2$j.prototype, "type", [_dec4$8], Object.getOwnPropertyDescriptor(_class2$j.prototype, "type"), _class2$j.prototype), _initializer$j = applyDecoratedInitializer(_class2$j.prototype, "_group", [serializable], function () {
              return PhysicsSystem.PhysicsGroup.DEFAULT;
            }), _initializer2$g = applyDecoratedInitializer(_class2$j.prototype, "_type", [serializable], function () {
              return ERigidBodyType.DYNAMIC;
            }), _initializer3$9 = applyDecoratedInitializer(_class2$j.prototype, "_mass", [serializable], function () {
              return 1;
            }), _initializer4$4 = applyDecoratedInitializer(_class2$j.prototype, "_allowSleep", [serializable], function () {
              return true;
            }), _initializer5$3 = applyDecoratedInitializer(_class2$j.prototype, "_linearDamping", [serializable], function () {
              return 0.1;
            }), _initializer6$3 = applyDecoratedInitializer(_class2$j.prototype, "_angularDamping", [serializable], function () {
              return 0.1;
            }), _initializer7$2 = applyDecoratedInitializer(_class2$j.prototype, "_useGravity", [serializable], function () {
              return true;
            }), _initializer8$2 = applyDecoratedInitializer(_class2$j.prototype, "_linearFactor", [serializable], function () {
              return new Vec3(1, 1, 1);
            }), _initializer9$2 = applyDecoratedInitializer(_class2$j.prototype, "_angularFactor", [serializable], function () {
              return new Vec3(1, 1, 1);
            })), _class2$j)) || _class$j) || _class$j) || _class$j));
            (function (_RigidBody) {})(RigidBody || (exports('R', RigidBody = {})));

            var _dec$i, _dec2$h, _dec3$8, _dec4$7, _dec5$6, _class$i, _class2$i, _initializer$i, _initializer2$f, _initializer3$8, _class3$2;
            let Collider = exports('f', (_dec$i = ccclass('cc.Collider'), _dec2$h = type(RigidBody), _dec3$8 = type(PhysicsMaterial), _dec4$7 = type(Vec3), _dec5$6 = type(PhysicsMaterial), _dec$i(_class$i = (_class2$i = (_class3$2 = class Collider extends Eventify(Component) {
              get attachedRigidBody() {
                return findAttachedBody(this.node);
              }
              get sharedMaterial() {
                return this._material;
              }
              set sharedMaterial(value) {
                {
                  this.material = value;
                }
              }
              get material() {
                if (this._isSharedMaterial && this._material) {
                  this._material.off(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                  this._material = this._material.clone();
                  this._material.on(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                  this._isSharedMaterial = false;
                }
                return this._material;
              }
              set material(value) {
                if (this._shape) {
                  if (value && this._material) {
                    if (this._material.id !== value.id) {
                      this._material.off(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                      value.on(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                      this._isSharedMaterial = false;
                      this._material = value;
                    }
                  } else if (value && !this._material) {
                    value.on(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                    this._material = value;
                  } else if (!value && this._material) {
                    this._material.off(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                    this._material = value;
                  }
                  this._updateMaterial();
                } else {
                  this._material = value;
                }
              }
              get isTrigger() {
                return this._isTrigger;
              }
              set isTrigger(value) {
                this._isTrigger = value;
                if (this._shape) {
                  this._shape.setAsTrigger(this._isTrigger);
                }
              }
              get center() {
                return this._center;
              }
              set center(value) {
                Vec3.copy(this._center, value);
                if (this._shape) {
                  this._shape.setCenter(this._center);
                }
              }
              get shape() {
                return this._shape;
              }
              get worldBounds() {
                if (this._aabb == null) this._aabb = new AABB();
                if (this._shape) this._shape.getAABB(this._aabb);
                return this._aabb;
              }
              get boundingSphere() {
                if (this._boundingSphere == null) this._boundingSphere = new Sphere();
                if (this._shape) this._shape.getBoundingSphere(this._boundingSphere);
                return this._boundingSphere;
              }
              get needTriggerEvent() {
                return this._needTriggerEvent;
              }
              get needCollisionEvent() {
                return this._needCollisionEvent;
              }
              get _isInitialized() {
                const r = this._shape === null;
                if (r) {
                  error('[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene.');
                }
                return !r;
              }
              constructor(type) {
                super();
                this.type = void 0;
                this._shape = null;
                this._aabb = null;
                this._boundingSphere = null;
                this._isSharedMaterial = true;
                this._needTriggerEvent = false;
                this._needCollisionEvent = false;
                this._material = _initializer$i && _initializer$i();
                this._isTrigger = _initializer2$f && _initializer2$f();
                this._center = _initializer3$8 && _initializer3$8();
                this.type = type;
              }
              on(type, callback, target, once) {
                const ret = super.on(type, callback, target, once);
                this._updateNeedEvent(type);
                return ret;
              }
              off(type, callback, target) {
                super.off(type, callback, target);
                this._updateNeedEvent();
              }
              once(type, callback, target) {
                const ret = super.once(type, callback, target);
                this._updateNeedEvent(type);
                return ret;
              }
              removeAll(typeOrTarget) {
                super.removeAll(typeOrTarget);
                this._updateNeedEvent();
              }
              getGroup() {
                if (this._isInitialized) {
                  return this._shape.getGroup();
                }
                return 0;
              }
              setGroup(v) {
                if (this._isInitialized) {
                  this._shape.setGroup(v);
                }
              }
              addGroup(v) {
                if (this._isInitialized) {
                  this._shape.addGroup(v);
                }
              }
              removeGroup(v) {
                if (this._isInitialized) {
                  this._shape.removeGroup(v);
                }
              }
              getMask() {
                if (this._isInitialized) {
                  return this._shape.getMask();
                }
                return 0;
              }
              setMask(v) {
                if (this._isInitialized) {
                  this._shape.setMask(v);
                }
              }
              addMask(v) {
                if (this._isInitialized) {
                  this._shape.addMask(v);
                }
              }
              removeMask(v) {
                if (this._isInitialized) {
                  this._shape.removeMask(v);
                }
              }
              onLoad() {
                if (!selector.runInEditor) return;
                this.sharedMaterial = this._material;
                this._shape = createShape(this.type);
                this._shape.initialize(this);
                this._shape.onLoad();
              }
              onEnable() {
                if (this._shape) {
                  this._shape.onEnable();
                }
              }
              onDisable() {
                if (this._shape) {
                  this._shape.onDisable();
                }
              }
              onDestroy() {
                if (this._shape) {
                  this._needTriggerEvent = false;
                  this._needCollisionEvent = false;
                  this._shape.updateEventListener();
                  if (this._material) this._material.off(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                  this._shape.onDestroy();
                }
                if (this._boundingSphere) this._boundingSphere.destroy();
              }
              _updateMaterial() {
                if (this._shape) this._shape.setMaterial(this._material);
              }
              _updateNeedEvent(type) {
                if (this.isValid) {
                  if (type !== undefined) {
                    if (type === 'onCollisionEnter' || type === 'onCollisionStay' || type === 'onCollisionExit') {
                      this._needCollisionEvent = true;
                    }
                    if (type === 'onTriggerEnter' || type === 'onTriggerStay' || type === 'onTriggerExit' || type === 'onControllerTriggerEnter' || type === 'onControllerTriggerStay' || type === 'onControllerTriggerExit') {
                      this._needTriggerEvent = true;
                    }
                  } else {
                    if (!(this.hasEventListener('onTriggerEnter') || this.hasEventListener('onTriggerStay') || this.hasEventListener('onTriggerExit') || this.hasEventListener('onControllerTriggerEnter') || this.hasEventListener('onControllerTriggerStay') || this.hasEventListener('onControllerTriggerExit'))) {
                      this._needTriggerEvent = false;
                    }
                    if (!(this.hasEventListener('onCollisionEnter') || this.hasEventListener('onCollisionStay') || this.hasEventListener('onCollisionExit'))) {
                      this._needCollisionEvent = false;
                    }
                  }
                  if (this._shape) this._shape.updateEventListener();
                }
              }
            }, _class3$2.Type = EColliderType, _class3$2.Axis = EAxisDirection, _class3$2), (_applyDecoratedDescriptor(_class2$i.prototype, "attachedRigidBody", [_dec2$h], Object.getOwnPropertyDescriptor(_class2$i.prototype, "attachedRigidBody"), _class2$i.prototype), _applyDecoratedDescriptor(_class2$i.prototype, "sharedMaterial", [_dec3$8], Object.getOwnPropertyDescriptor(_class2$i.prototype, "sharedMaterial"), _class2$i.prototype), _applyDecoratedDescriptor(_class2$i.prototype, "center", [_dec4$7], Object.getOwnPropertyDescriptor(_class2$i.prototype, "center"), _class2$i.prototype), _initializer$i = applyDecoratedInitializer(_class2$i.prototype, "_material", [_dec5$6], function () {
              return null;
            }), _initializer2$f = applyDecoratedInitializer(_class2$i.prototype, "_isTrigger", [serializable], function () {
              return false;
            }), _initializer3$8 = applyDecoratedInitializer(_class2$i.prototype, "_center", [serializable], function () {
              return new Vec3();
            })), _class2$i)) || _class$i));
            (function (_Collider) {})(Collider || (exports('f', Collider = {})));
            function findAttachedBody(node) {
              const rb = node.getComponent(RigidBody);
              if (rb && rb.isValid) {
                return rb;
              }
              return null;
            }

            var _dec$h, _dec2$g, _class$h, _class2$h, _initializer$h;
            let BoxCollider = exports('B', (_dec$h = ccclass('cc.BoxCollider'), _dec2$g = type(Vec3), _dec$h(_class$h = (_class2$h = class BoxCollider extends Collider {
              get size() {
                return this._size;
              }
              set size(value) {
                if (Vec3.strictEquals(this._size, value)) return;
                Vec3.copy(this._size, value);
                absolute(this._size);
                if (this._shape) {
                  this.shape.updateSize();
                }
              }
              get shape() {
                return this._shape;
              }
              constructor() {
                super(EColliderType.BOX);
                this._size = _initializer$h && _initializer$h();
              }
            }, (_applyDecoratedDescriptor(_class2$h.prototype, "size", [_dec2$g], Object.getOwnPropertyDescriptor(_class2$h.prototype, "size"), _class2$h.prototype), _initializer$h = applyDecoratedInitializer(_class2$h.prototype, "_size", [serializable], function () {
              return new Vec3(1, 1, 1);
            })), _class2$h)) || _class$h));

            var _dec$g, _class$g, _class2$g, _initializer$g;
            let SphereCollider = exports('g', (_dec$g = ccclass('cc.SphereCollider'), _dec$g(_class$g = (_class2$g = class SphereCollider extends Collider {
              get radius() {
                return this._radius;
              }
              set radius(value) {
                if (this._radius === value) return;
                this._radius = Math.abs(value);
                if (this._shape) {
                  this.shape.updateRadius();
                }
              }
              get shape() {
                return this._shape;
              }
              constructor() {
                super(EColliderType.SPHERE);
                this._radius = _initializer$g && _initializer$g();
              }
            }, (_initializer$g = applyDecoratedInitializer(_class2$g.prototype, "_radius", [serializable], function () {
              return 0.5;
            })), _class2$g)) || _class$g));

            var _dec$f, _dec2$f, _class$f, _class2$f, _initializer$f, _initializer2$e, _initializer3$7;
            let CapsuleCollider = exports('h', (_dec$f = ccclass('cc.CapsuleCollider'), _dec2$f = type(EAxisDirection), _dec$f(_class$f = (_class2$f = class CapsuleCollider extends Collider {
              get radius() {
                return this._radius;
              }
              set radius(value) {
                if (this._radius === value) return;
                this._radius = Math.abs(value);
                if (this._shape) {
                  this.shape.setRadius(value);
                }
              }
              get cylinderHeight() {
                return this._cylinderHeight;
              }
              set cylinderHeight(value) {
                if (this._cylinderHeight === value) return;
                this._cylinderHeight = Math.abs(value);
                if (this._shape) {
                  this.shape.setCylinderHeight(value);
                }
              }
              get direction() {
                return this._direction;
              }
              set direction(value) {
                value = Math.floor(value);
                if (value < EAxisDirection.X_AXIS || value > EAxisDirection.Z_AXIS) return;
                if (this._direction === value) return;
                this._direction = value;
                if (this._shape) {
                  this.shape.setDirection(value);
                }
              }
              get height() {
                return this._radius * 2 + this._cylinderHeight;
              }
              set height(value) {
                let ch = value - this._radius * 2;
                if (ch < 0) ch = 0;
                this.cylinderHeight = ch;
              }
              get worldHeight() {
                return this._radius * 2 * this._getRadiusScale() + this._cylinderHeight * this._getHeightScale();
              }
              get shape() {
                return this._shape;
              }
              constructor() {
                super(EColliderType.CAPSULE);
                this._radius = _initializer$f && _initializer$f();
                this._cylinderHeight = _initializer2$e && _initializer2$e();
                this._direction = _initializer3$7 && _initializer3$7();
              }
              _getRadiusScale() {
                if (this.node == null) return 1;
                const ws = this.node.worldScale;
                if (this._direction === EAxisDirection.Y_AXIS) return Math.abs(absMax(ws.x, ws.z));
                if (this._direction === EAxisDirection.X_AXIS) return Math.abs(absMax(ws.y, ws.z));
                return Math.abs(absMax(ws.x, ws.y));
              }
              _getHeightScale() {
                if (this.node == null) return 1;
                const ws = this.node.worldScale;
                if (this._direction === EAxisDirection.Y_AXIS) return Math.abs(ws.y);
                if (this._direction === EAxisDirection.X_AXIS) return Math.abs(ws.x);
                return Math.abs(ws.z);
              }
            }, (_applyDecoratedDescriptor(_class2$f.prototype, "direction", [_dec2$f], Object.getOwnPropertyDescriptor(_class2$f.prototype, "direction"), _class2$f.prototype), _initializer$f = applyDecoratedInitializer(_class2$f.prototype, "_radius", [serializable], function () {
              return 0.5;
            }), _initializer2$e = applyDecoratedInitializer(_class2$f.prototype, "_cylinderHeight", [serializable], function () {
              return 1;
            }), _initializer3$7 = applyDecoratedInitializer(_class2$f.prototype, "_direction", [serializable], function () {
              return EAxisDirection.Y_AXIS;
            })), _class2$f)) || _class$f));

            var _dec$e, _dec2$e, _class$e, _class2$e, _initializer$e, _initializer2$d, _initializer3$6;
            let CylinderCollider = exports('i', (_dec$e = ccclass('cc.CylinderCollider'), _dec2$e = type(EAxisDirection), _dec$e(_class$e = (_class2$e = class CylinderCollider extends Collider {
              get radius() {
                return this._radius;
              }
              set radius(value) {
                if (this._radius === value) return;
                this._radius = Math.abs(value);
                if (this._shape) {
                  this.shape.setRadius(value);
                }
              }
              get height() {
                return this._height;
              }
              set height(value) {
                if (this._height === value) return;
                this._height = Math.abs(value);
                if (this._shape) {
                  this.shape.setHeight(value);
                }
              }
              get direction() {
                return this._direction;
              }
              set direction(value) {
                if (this._direction === value) return;
                if (value < EAxisDirection.X_AXIS || value > EAxisDirection.Z_AXIS) return;
                this._direction = value;
                if (this._shape) {
                  this.shape.setDirection(value);
                }
              }
              get shape() {
                return this._shape;
              }
              constructor() {
                super(EColliderType.CYLINDER);
                this._radius = _initializer$e && _initializer$e();
                this._height = _initializer2$d && _initializer2$d();
                this._direction = _initializer3$6 && _initializer3$6();
              }
            }, (_applyDecoratedDescriptor(_class2$e.prototype, "direction", [_dec2$e], Object.getOwnPropertyDescriptor(_class2$e.prototype, "direction"), _class2$e.prototype), _initializer$e = applyDecoratedInitializer(_class2$e.prototype, "_radius", [serializable], function () {
              return 0.5;
            }), _initializer2$d = applyDecoratedInitializer(_class2$e.prototype, "_height", [serializable], function () {
              return 2;
            }), _initializer3$6 = applyDecoratedInitializer(_class2$e.prototype, "_direction", [serializable], function () {
              return EAxisDirection.Y_AXIS;
            })), _class2$e)) || _class$e));

            var _dec$d, _dec2$d, _class$d, _class2$d, _initializer$d, _initializer2$c, _initializer3$5;
            let ConeCollider = exports('j', (_dec$d = ccclass('cc.ConeCollider'), _dec2$d = type(EAxisDirection), _dec$d(_class$d = (_class2$d = class ConeCollider extends Collider {
              get radius() {
                return this._radius;
              }
              set radius(value) {
                if (this._radius === value) return;
                this._radius = Math.abs(value);
                if (this._shape) {
                  this.shape.setRadius(value);
                }
              }
              get height() {
                return this._height;
              }
              set height(value) {
                if (this._height === value) return;
                if (value < 0) value = 0;
                this._height = value;
                if (this._shape) {
                  this.shape.setHeight(value);
                }
              }
              get direction() {
                return this._direction;
              }
              set direction(value) {
                if (this._direction === value) return;
                if (value < EAxisDirection.X_AXIS || value > EAxisDirection.Z_AXIS) return;
                this._direction = value;
                if (this._shape) {
                  this.shape.setDirection(value);
                }
              }
              get shape() {
                return this._shape;
              }
              constructor() {
                super(EColliderType.CONE);
                this._radius = _initializer$d && _initializer$d();
                this._height = _initializer2$c && _initializer2$c();
                this._direction = _initializer3$5 && _initializer3$5();
              }
            }, (_applyDecoratedDescriptor(_class2$d.prototype, "direction", [_dec2$d], Object.getOwnPropertyDescriptor(_class2$d.prototype, "direction"), _class2$d.prototype), _initializer$d = applyDecoratedInitializer(_class2$d.prototype, "_radius", [serializable], function () {
              return 0.5;
            }), _initializer2$c = applyDecoratedInitializer(_class2$d.prototype, "_height", [serializable], function () {
              return 1;
            }), _initializer3$5 = applyDecoratedInitializer(_class2$d.prototype, "_direction", [serializable], function () {
              return EAxisDirection.Y_AXIS;
            })), _class2$d)) || _class$d));

            var _dec$c, _dec2$c, _class$c, _class2$c, _initializer$c, _initializer2$b;
            let MeshCollider = exports('M', (_dec$c = ccclass('cc.MeshCollider'), _dec2$c = type(Mesh), _dec$c(_class$c = (_class2$c = class MeshCollider extends Collider {
              get mesh() {
                return this._mesh;
              }
              set mesh(value) {
                if (this._mesh === value) return;
                this._mesh = value;
                if (this._shape) this.shape.setMesh(this._mesh);
              }
              get convex() {
                return this._convex;
              }
              set convex(value) {
                if (this._convex === value) return;
                this._convex = value;
                if (this._shape && this._mesh) this.shape.setMesh(this._mesh);
              }
              get shape() {
                return this._shape;
              }
              onEnable() {
                super.onEnable();
                if (this.node) {
                  const body = this.node.getComponent(RigidBody);
                  if (body && body.isValid && body.type === ERigidBodyType.DYNAMIC && !this.convex) {
                    warnID(9630, this.node.name);
                  }
                }
              }
              constructor() {
                super(EColliderType.MESH);
                this._mesh = _initializer$c && _initializer$c();
                this._convex = _initializer2$b && _initializer2$b();
              }
            }, (_applyDecoratedDescriptor(_class2$c.prototype, "mesh", [_dec2$c], Object.getOwnPropertyDescriptor(_class2$c.prototype, "mesh"), _class2$c.prototype), _initializer$c = applyDecoratedInitializer(_class2$c.prototype, "_mesh", [serializable], function () {
              return null;
            }), _initializer2$b = applyDecoratedInitializer(_class2$c.prototype, "_convex", [serializable], function () {
              return false;
            })), _class2$c)) || _class$c));

            var _dec$b, _dec2$b, _class$b, _class2$b, _initializer$b, _initializer2$a, _initializer3$4, _initializer4$3;
            let ConstantForce = exports('b', (_dec$b = ccclass('cc.ConstantForce'), _dec2$b = requireComponent(RigidBody), _dec$b(_class$b = _dec2$b(_class$b = disallowMultiple(_class$b = (_class2$b = class ConstantForce extends Component {
              constructor(...args) {
                super(...args);
                this._rigidBody = null;
                this._force = _initializer$b && _initializer$b();
                this._localForce = _initializer2$a && _initializer2$a();
                this._torque = _initializer3$4 && _initializer3$4();
                this._localTorque = _initializer4$3 && _initializer4$3();
                this._mask = 0;
              }
              get force() {
                return this._force;
              }
              set force(value) {
                Vec3.copy(this._force, value);
                this._maskUpdate(this._force, 1);
              }
              get localForce() {
                return this._localForce;
              }
              set localForce(value) {
                Vec3.copy(this._localForce, value);
                this._maskUpdate(this.localForce, 2);
              }
              get torque() {
                return this._torque;
              }
              set torque(value) {
                Vec3.copy(this._torque, value);
                this._maskUpdate(this._torque, 4);
              }
              get localTorque() {
                return this._localTorque;
              }
              set localTorque(value) {
                Vec3.copy(this._localTorque, value);
                this._maskUpdate(this._localTorque, 8);
              }
              onLoad() {
                this._rigidBody = this.node.getComponent(RigidBody);
                this._maskUpdate(this._force, 1);
                this._maskUpdate(this._localForce, 2);
                this._maskUpdate(this._torque, 4);
                this._maskUpdate(this._localTorque, 8);
              }
              lateUpdate(dt) {
                {
                  if (this._rigidBody != null && this._mask !== 0) {
                    if (this._mask & 1) this._rigidBody.applyForce(this._force);
                    if (this._mask & 2) this._rigidBody.applyLocalForce(this.localForce);
                    if (this._mask & 4) this._rigidBody.applyTorque(this._torque);
                    if (this._mask & 8) this._rigidBody.applyLocalTorque(this._localTorque);
                  }
                }
              }
              _maskUpdate(t, m) {
                if (t.strictEquals(Vec3.ZERO)) {
                  this._mask &= ~m;
                } else {
                  this._mask |= m;
                }
              }
            }, (_initializer$b = applyDecoratedInitializer(_class2$b.prototype, "_force", [serializable], function () {
              return new Vec3();
            }), _initializer2$a = applyDecoratedInitializer(_class2$b.prototype, "_localForce", [serializable], function () {
              return new Vec3();
            }), _initializer3$4 = applyDecoratedInitializer(_class2$b.prototype, "_torque", [serializable], function () {
              return new Vec3();
            }), _initializer4$3 = applyDecoratedInitializer(_class2$b.prototype, "_localTorque", [serializable], function () {
              return new Vec3();
            })), _class2$b)) || _class$b) || _class$b) || _class$b));

            var _dec$a, _dec2$a, _class$a, _class2$a, _initializer$a;
            let TerrainCollider = exports('T', (_dec$a = ccclass('cc.TerrainCollider'), _dec2$a = type(TerrainAsset), _dec$a(_class$a = (_class2$a = class TerrainCollider extends Collider {
              get terrain() {
                return this._terrain;
              }
              set terrain(value) {
                this._terrain = value;
                if (this._shape) this.shape.setTerrain(this._terrain);
              }
              get shape() {
                return this._shape;
              }
              onEnable() {
                super.onEnable();
                if (this.node) {
                  const body = this.node.getComponent(RigidBody);
                  if (body && body.isValid && body.type === ERigidBodyType.DYNAMIC) {
                    warnID(9630, this.node.name);
                  }
                }
              }
              constructor() {
                super(EColliderType.TERRAIN);
                this._terrain = _initializer$a && _initializer$a();
              }
            }, (_applyDecoratedDescriptor(_class2$a.prototype, "terrain", [_dec2$a], Object.getOwnPropertyDescriptor(_class2$a.prototype, "terrain"), _class2$a.prototype), _initializer$a = applyDecoratedInitializer(_class2$a.prototype, "_terrain", [serializable], function () {
              return null;
            })), _class2$a)) || _class$a));

            var _dec$9, _dec2$9, _class$9, _class2$9, _initializer$9, _initializer2$9, _class3$1;
            let SimplexCollider = exports('S', (_dec$9 = ccclass('cc.SimplexCollider'), _dec2$9 = type(ESimplexType), _dec$9(_class$9 = (_class2$9 = (_class3$1 = class SimplexCollider extends Collider {
              get shapeType() {
                return this._shapeType;
              }
              set shapeType(v) {
                this._shapeType = v;
                if (this._shape) {
                  this.shape.setShapeType(v);
                }
              }
              get vertex0() {
                return this._vertices[0];
              }
              set vertex0(v) {
                Vec3.copy(this._vertices[0], v);
                this.updateVertices();
              }
              get vertex1() {
                return this._vertices[1];
              }
              set vertex1(v) {
                Vec3.copy(this._vertices[1], v);
                this.updateVertices();
              }
              get vertex2() {
                return this._vertices[2];
              }
              set vertex2(v) {
                Vec3.copy(this._vertices[2], v);
                this.updateVertices();
              }
              get vertex3() {
                return this._vertices[3];
              }
              set vertex3(v) {
                Vec3.copy(this._vertices[3], v);
                this.updateVertices();
              }
              get shape() {
                return this._shape;
              }
              get vertices() {
                return this._vertices;
              }
              constructor() {
                super(EColliderType.SIMPLEX);
                this._shapeType = _initializer$9 && _initializer$9();
                this._vertices = _initializer2$9 && _initializer2$9();
              }
              updateVertices() {
                if (this._shape) {
                  this.shape.setVertices(this._vertices);
                }
              }
            }, _class3$1.ESimplexType = ESimplexType, _class3$1), (_applyDecoratedDescriptor(_class2$9.prototype, "shapeType", [_dec2$9], Object.getOwnPropertyDescriptor(_class2$9.prototype, "shapeType"), _class2$9.prototype), _initializer$9 = applyDecoratedInitializer(_class2$9.prototype, "_shapeType", [serializable], function () {
              return ESimplexType.TETRAHEDRON;
            }), _initializer2$9 = applyDecoratedInitializer(_class2$9.prototype, "_vertices", [serializable], function () {
              return [new Vec3(0, 0, 0), new Vec3(0, 0, 1), new Vec3(1, 0, 0), new Vec3(0, 1, 0)];
            })), _class2$9)) || _class$9));
            (function (_SimplexCollider) {})(SimplexCollider || (exports('S', SimplexCollider = {})));

            var _dec$8, _dec2$8, _class$8, _class2$8, _initializer$8, _initializer2$8;
            let PlaneCollider = exports('k', (_dec$8 = ccclass('cc.PlaneCollider'), _dec2$8 = type(Vec3), _dec$8(_class$8 = (_class2$8 = class PlaneCollider extends Collider {
              get normal() {
                return this._normal;
              }
              set normal(value) {
                if (Vec3.strictEquals(this._normal, value)) return;
                Vec3.copy(this._normal, value);
                if (this._shape) {
                  this.shape.setNormal(this._normal);
                }
              }
              get constant() {
                return this._constant;
              }
              set constant(v) {
                if (this._constant === v) return;
                this._constant = v;
                if (this._shape) {
                  this.shape.setConstant(this._constant);
                }
              }
              get shape() {
                return this._shape;
              }
              onEnable() {
                super.onEnable();
                if (this.node) {
                  const body = this.node.getComponent(RigidBody);
                  if (body && body.isValid && body.type === ERigidBodyType.DYNAMIC) {
                    warnID(9630, this.node.name);
                  }
                }
              }
              constructor() {
                super(EColliderType.PLANE);
                this._normal = _initializer$8 && _initializer$8();
                this._constant = _initializer2$8 && _initializer2$8();
              }
            }, (_applyDecoratedDescriptor(_class2$8.prototype, "normal", [_dec2$8], Object.getOwnPropertyDescriptor(_class2$8.prototype, "normal"), _class2$8.prototype), _initializer$8 = applyDecoratedInitializer(_class2$8.prototype, "_normal", [serializable], function () {
              return new Vec3(0, 1, 0);
            }), _initializer2$8 = applyDecoratedInitializer(_class2$8.prototype, "_constant", [serializable], function () {
              return 0;
            })), _class2$8)) || _class$8));

            var _dec$7, _dec2$7, _dec3$7, _dec4$6, _dec5$5, _class$7, _class2$7, _initializer$7, _initializer2$7, _class3;
            let Constraint = exports('l', (_dec$7 = ccclass('cc.Constraint'), _dec2$7 = requireComponent(RigidBody), _dec3$7 = type(RigidBody), _dec4$6 = type(RigidBody), _dec5$5 = type(RigidBody), _dec$7(_class$7 = _dec2$7(_class$7 = (_class2$7 = (_class3 = class Constraint extends Eventify(Component) {
              get attachedBody() {
                return this.getComponent(RigidBody);
              }
              get connectedBody() {
                return this._connectedBody;
              }
              set connectedBody(v) {
                this._connectedBody = v;
                {
                  if (this._constraint) this._constraint.setConnectedBody(v);
                }
              }
              get enableCollision() {
                return this._enableCollision;
              }
              set enableCollision(v) {
                this._enableCollision = v;
                {
                  if (this._constraint) this._constraint.setEnableCollision(v);
                }
              }
              constructor(type) {
                super();
                this.TYPE = void 0;
                this._enableCollision = _initializer$7 && _initializer$7();
                this._connectedBody = _initializer2$7 && _initializer2$7();
                this._constraint = null;
                this.TYPE = type;
              }
              onLoad() {
                if (!selector.runInEditor) return;
                this._constraint = createConstraint(this.TYPE);
                this._constraint.initialize(this);
              }
              onEnable() {
                if (this._constraint) {
                  this._constraint.onEnable();
                }
              }
              onDisable() {
                if (this._constraint) {
                  this._constraint.onDisable();
                }
              }
              onDestroy() {
                if (this._constraint) {
                  this._constraint.onDestroy();
                }
              }
            }, _class3.Type = EConstraintType, _class3), (_applyDecoratedDescriptor(_class2$7.prototype, "attachedBody", [_dec3$7], Object.getOwnPropertyDescriptor(_class2$7.prototype, "attachedBody"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "connectedBody", [_dec4$6], Object.getOwnPropertyDescriptor(_class2$7.prototype, "connectedBody"), _class2$7.prototype), _initializer$7 = applyDecoratedInitializer(_class2$7.prototype, "_enableCollision", [serializable], function () {
              return true;
            }), _initializer2$7 = applyDecoratedInitializer(_class2$7.prototype, "_connectedBody", [_dec5$5], function () {
              return null;
            })), _class2$7)) || _class$7) || _class$7));
            (function (_Constraint) {})(Constraint || (exports('l', Constraint = {})));

            var _dec$6, _dec2$6, _dec3$6, _dec4$5, _dec5$4, _dec6$2, _dec7$2, _class$6, _class2$6, _initializer$6, _initializer2$6, _initializer3$3, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _class4$1, _class5$1, _initializer4$2, _initializer5$2, _initializer6$2, _dec15$1, _dec16$1, _dec17$1, _dec18$1, _dec19$1, _dec20$1, _dec21$1, _dec22$1, _dec23$1, _dec24$1, _dec25$1, _dec26$1, _dec27$1, _dec28$1, _dec29$1, _class7$1, _class8$1, _initializer7$1, _initializer8$1, _initializer9$1, _initializer10$1, _initializer11$1;
            let HingeLimitData = (_dec$6 = ccclass('cc.HingeLimitData'), _dec2$6 = formerlySerializedAs('enabled'), _dec3$6 = formerlySerializedAs('upperLimit'), _dec4$5 = formerlySerializedAs('lowerLimit'), _dec5$4 = type(CCBoolean), _dec6$2 = type(CCFloat), _dec7$2 = type(CCFloat), _dec$6(_class$6 = (_class2$6 = class HingeLimitData {
              constructor() {
                this._enabled = _initializer$6 && _initializer$6();
                this._upperLimit = _initializer2$6 && _initializer2$6();
                this._lowerLimit = _initializer3$3 && _initializer3$3();
              }
              get enabled() {
                return this._enabled;
              }
              set enabled(v) {
                this._enabled = v;
              }
              get upperLimit() {
                return this._upperLimit;
              }
              set upperLimit(v) {
                this._upperLimit = v;
              }
              get lowerLimit() {
                return this._lowerLimit;
              }
              set lowerLimit(v) {
                this._lowerLimit = v;
              }
            }, (_initializer$6 = applyDecoratedInitializer(_class2$6.prototype, "_enabled", [serializable, _dec2$6], function () {
              return false;
            }), _initializer2$6 = applyDecoratedInitializer(_class2$6.prototype, "_upperLimit", [serializable, _dec3$6], function () {
              return Number.MAX_VALUE;
            }), _initializer3$3 = applyDecoratedInitializer(_class2$6.prototype, "_lowerLimit", [serializable, _dec4$5], function () {
              return -Number.MAX_VALUE;
            }), _applyDecoratedDescriptor(_class2$6.prototype, "enabled", [_dec5$4], Object.getOwnPropertyDescriptor(_class2$6.prototype, "enabled"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "upperLimit", [_dec6$2], Object.getOwnPropertyDescriptor(_class2$6.prototype, "upperLimit"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "lowerLimit", [_dec7$2], Object.getOwnPropertyDescriptor(_class2$6.prototype, "lowerLimit"), _class2$6.prototype)), _class2$6)) || _class$6);
            let HingeMotorData = (_dec8$1 = ccclass('cc.HingeMotorData'), _dec9$1 = formerlySerializedAs('enabled'), _dec10$1 = formerlySerializedAs('motorVelocity'), _dec11$1 = formerlySerializedAs('motorForceLimit'), _dec12$1 = type(CCBoolean), _dec13$1 = type(CCFloat), _dec14$1 = type(CCFloat), _dec8$1(_class4$1 = (_class5$1 = class HingeMotorData {
              constructor() {
                this._enabled = _initializer4$2 && _initializer4$2();
                this._motorVelocity = _initializer5$2 && _initializer5$2();
                this._motorForceLimit = _initializer6$2 && _initializer6$2();
              }
              get enabled() {
                return this._enabled;
              }
              set enabled(v) {
                this._enabled = v;
              }
              get motorVelocity() {
                return this._motorVelocity;
              }
              set motorVelocity(v) {
                this._motorVelocity = v;
              }
              get motorForceLimit() {
                return this._motorForceLimit;
              }
              set motorForceLimit(v) {
                this._motorForceLimit = v;
              }
            }, (_initializer4$2 = applyDecoratedInitializer(_class5$1.prototype, "_enabled", [serializable, _dec9$1], function () {
              return false;
            }), _initializer5$2 = applyDecoratedInitializer(_class5$1.prototype, "_motorVelocity", [serializable, _dec10$1], function () {
              return 0;
            }), _initializer6$2 = applyDecoratedInitializer(_class5$1.prototype, "_motorForceLimit", [serializable, _dec11$1], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class5$1.prototype, "enabled", [_dec12$1], Object.getOwnPropertyDescriptor(_class5$1.prototype, "enabled"), _class5$1.prototype), _applyDecoratedDescriptor(_class5$1.prototype, "motorVelocity", [_dec13$1], Object.getOwnPropertyDescriptor(_class5$1.prototype, "motorVelocity"), _class5$1.prototype), _applyDecoratedDescriptor(_class5$1.prototype, "motorForceLimit", [_dec14$1], Object.getOwnPropertyDescriptor(_class5$1.prototype, "motorForceLimit"), _class5$1.prototype)), _class5$1)) || _class4$1);
            let HingeConstraint = exports('H', (_dec15$1 = ccclass('cc.HingeConstraint'), _dec16$1 = type(Vec3), _dec17$1 = type(Vec3), _dec18$1 = type(Vec3), _dec19$1 = type(CCBoolean), _dec20$1 = type(CCFloat), _dec21$1 = type(CCFloat), _dec22$1 = type(CCBoolean), _dec23$1 = type(CCFloat), _dec24$1 = type(CCFloat), _dec25$1 = formerlySerializedAs('axisA'), _dec26$1 = formerlySerializedAs('pivotA'), _dec27$1 = formerlySerializedAs('pivotB'), _dec28$1 = formerlySerializedAs('limitData'), _dec29$1 = formerlySerializedAs('motorData'), _dec15$1(_class7$1 = (_class8$1 = class HingeConstraint extends Constraint {
              get pivotA() {
                return this._pivotA;
              }
              set pivotA(v) {
                Vec3.copy(this._pivotA, v);
                {
                  this.constraint.setPivotA(this._pivotA);
                }
              }
              get pivotB() {
                return this._pivotB;
              }
              set pivotB(v) {
                Vec3.copy(this._pivotB, v);
                {
                  this.constraint.setPivotB(this._pivotB);
                }
              }
              get axis() {
                return this._axis;
              }
              set axis(v) {
                Vec3.copy(this._axis, v);
                {
                  this.constraint.setAxis(this._axis);
                }
              }
              get limitEnabled() {
                return this._limitData.enabled;
              }
              set limitEnabled(v) {
                this._limitData.enabled = v;
                {
                  this.constraint.setLimitEnabled(v);
                }
              }
              get upperLimit() {
                return this._limitData.upperLimit;
              }
              set upperLimit(v) {
                this._limitData.upperLimit = v;
                {
                  this.constraint.setUpperLimit(v);
                }
              }
              get lowerLimit() {
                return this._limitData.lowerLimit;
              }
              set lowerLimit(v) {
                this._limitData.lowerLimit = v;
                {
                  this.constraint.setLowerLimit(v);
                }
              }
              get motorEnabled() {
                return this._motorData.enabled;
              }
              set motorEnabled(v) {
                this._motorData.enabled = v;
                {
                  this.constraint.setMotorEnabled(v);
                }
              }
              get motorVelocity() {
                return this._motorData.motorVelocity;
              }
              set motorVelocity(v) {
                this._motorData.motorVelocity = v;
                {
                  this.constraint.setMotorVelocity(v);
                }
              }
              get motorForceLimit() {
                return this._motorData.motorForceLimit;
              }
              set motorForceLimit(v) {
                this._motorData.motorForceLimit = v;
                {
                  this.constraint.setMotorForceLimit(v);
                }
              }
              get constraint() {
                return this._constraint;
              }
              constructor() {
                super(EConstraintType.HINGE);
                this._axis = _initializer7$1 && _initializer7$1();
                this._pivotA = _initializer8$1 && _initializer8$1();
                this._pivotB = _initializer9$1 && _initializer9$1();
                this._limitData = _initializer10$1 && _initializer10$1();
                this._motorData = _initializer11$1 && _initializer11$1();
              }
            }, (_applyDecoratedDescriptor(_class8$1.prototype, "pivotA", [_dec16$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "pivotA"), _class8$1.prototype), _applyDecoratedDescriptor(_class8$1.prototype, "pivotB", [_dec17$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "pivotB"), _class8$1.prototype), _applyDecoratedDescriptor(_class8$1.prototype, "axis", [_dec18$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "axis"), _class8$1.prototype), _applyDecoratedDescriptor(_class8$1.prototype, "limitEnabled", [_dec19$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "limitEnabled"), _class8$1.prototype), _applyDecoratedDescriptor(_class8$1.prototype, "upperLimit", [_dec20$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "upperLimit"), _class8$1.prototype), _applyDecoratedDescriptor(_class8$1.prototype, "lowerLimit", [_dec21$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "lowerLimit"), _class8$1.prototype), _applyDecoratedDescriptor(_class8$1.prototype, "motorEnabled", [_dec22$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "motorEnabled"), _class8$1.prototype), _applyDecoratedDescriptor(_class8$1.prototype, "motorVelocity", [_dec23$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "motorVelocity"), _class8$1.prototype), _applyDecoratedDescriptor(_class8$1.prototype, "motorForceLimit", [_dec24$1], Object.getOwnPropertyDescriptor(_class8$1.prototype, "motorForceLimit"), _class8$1.prototype), _initializer7$1 = applyDecoratedInitializer(_class8$1.prototype, "_axis", [serializable, _dec25$1], function () {
              return new Vec3();
            }), _initializer8$1 = applyDecoratedInitializer(_class8$1.prototype, "_pivotA", [serializable, _dec26$1], function () {
              return new Vec3();
            }), _initializer9$1 = applyDecoratedInitializer(_class8$1.prototype, "_pivotB", [serializable, _dec27$1], function () {
              return new Vec3();
            }), _initializer10$1 = applyDecoratedInitializer(_class8$1.prototype, "_limitData", [serializable, _dec28$1], function () {
              return new HingeLimitData();
            }), _initializer11$1 = applyDecoratedInitializer(_class8$1.prototype, "_motorData", [serializable, _dec29$1], function () {
              return new HingeMotorData();
            })), _class8$1)) || _class7$1));

            var _dec$5, _dec2$5, _dec3$5, _dec4$4, _dec5$3, _class$5, _class2$5, _initializer$5, _initializer2$5;
            let FixedConstraint = exports('F', (_dec$5 = ccclass('cc.FixedConstraint'), _dec2$5 = type(CCFloat), _dec3$5 = type(CCFloat), _dec4$4 = formerlySerializedAs('breakForce'), _dec5$3 = formerlySerializedAs('breakTorque'), _dec$5(_class$5 = (_class2$5 = class FixedConstraint extends Constraint {
              get breakForce() {
                return this._breakForce;
              }
              set breakForce(v) {
                this._breakForce = v;
                {
                  this.constraint.setBreakForce(v);
                }
              }
              get breakTorque() {
                return this._breakTorque;
              }
              set breakTorque(v) {
                this._breakTorque = v;
                {
                  this.constraint.setBreakTorque(v);
                }
              }
              get constraint() {
                return this._constraint;
              }
              constructor() {
                super(EConstraintType.FIXED);
                this._breakForce = _initializer$5 && _initializer$5();
                this._breakTorque = _initializer2$5 && _initializer2$5();
              }
            }, (_applyDecoratedDescriptor(_class2$5.prototype, "breakForce", [_dec2$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "breakForce"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "breakTorque", [_dec3$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "breakTorque"), _class2$5.prototype), _initializer$5 = applyDecoratedInitializer(_class2$5.prototype, "_breakForce", [serializable, _dec4$4], function () {
              return 1e8;
            }), _initializer2$5 = applyDecoratedInitializer(_class2$5.prototype, "_breakTorque", [serializable, _dec5$3], function () {
              return 1e8;
            })), _class2$5)) || _class$5));

            var _dec$4, _dec2$4, _dec3$4, _dec4$3, _dec5$2, _dec6$1, _dec7$1, _dec8, _dec9, _dec10, _class$4, _class2$4, _initializer$4, _initializer2$4, _initializer3$2, _initializer4$1, _initializer5$1, _initializer6$1, _initializer7, _initializer8, _initializer9, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class4, _class5, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class7, _class8, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class10, _class11, _initializer30, _initializer31, _initializer32, _initializer33, _initializer34, _initializer35, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _class13, _class14, _initializer36, _initializer37, _initializer38, _initializer39, _initializer40, _initializer41, _initializer42, _initializer43, _initializer44, _initializer45, _initializer46;
            let LinearLimitSettings = (_dec$4 = ccclass('cc.LinearLimitSettings'), _dec2$4 = type(EConstraintMode), _dec3$4 = type(EConstraintMode), _dec4$3 = type(EConstraintMode), _dec5$2 = type(Vec3), _dec6$1 = type(Vec3), _dec7$1 = type(CCFloat), _dec8 = type(CCBoolean), _dec9 = type(CCFloat), _dec10 = type(CCFloat), _dec$4(_class$4 = (_class2$4 = class LinearLimitSettings {
              get xMotion() {
                return this._xMotion;
              }
              set xMotion(v) {
                this._xMotion = v;
                {
                  this._impl.setConstraintMode(0, v);
                }
              }
              get yMotion() {
                return this._yMotion;
              }
              set yMotion(v) {
                this._yMotion = v;
                {
                  this._impl.setConstraintMode(1, v);
                }
              }
              get zMotion() {
                return this._zMotion;
              }
              set zMotion(v) {
                this._zMotion = v;
                {
                  this._impl.setConstraintMode(2, v);
                }
              }
              get upper() {
                return this._upper;
              }
              set upper(v) {
                Vec3.copy(this._upper, v);
                {
                  const lower = this.lower;
                  this._impl.setLinearLimit(0, lower.x, v.x);
                  this._impl.setLinearLimit(1, lower.y, v.y);
                  this._impl.setLinearLimit(2, lower.z, v.z);
                }
              }
              get lower() {
                return this._lower;
              }
              set lower(v) {
                Vec3.copy(this._lower, v);
                {
                  const upper = this.upper;
                  this._impl.setLinearLimit(0, v.x, upper.x);
                  this._impl.setLinearLimit(1, v.y, upper.y);
                  this._impl.setLinearLimit(2, v.z, upper.z);
                }
              }
              get restitution() {
                return this._bounciness;
              }
              set restitution(v) {
                this._bounciness = v;
                {
                  this._impl.setLinearRestitution(v);
                }
              }
              get enableSoftConstraint() {
                return this._enableSoftConstraint;
              }
              set enableSoftConstraint(v) {
                this._enableSoftConstraint = v;
                {
                  this._impl.setLinearSoftConstraint(v);
                }
              }
              get stiffness() {
                return this._stiffness;
              }
              set stiffness(v) {
                this._stiffness = v;
                {
                  this._impl.setLinearStiffness(v);
                }
              }
              get damping() {
                return this._damping;
              }
              set damping(v) {
                this._damping = v;
                {
                  this._impl.setLinearDamping(v);
                }
              }
              set impl(v) {
                this._impl = v;
              }
              constructor(configurableConstraint) {
                this._xMotion = _initializer$4 && _initializer$4();
                this._yMotion = _initializer2$4 && _initializer2$4();
                this._zMotion = _initializer3$2 && _initializer3$2();
                this._upper = _initializer4$1 && _initializer4$1();
                this._lower = _initializer5$1 && _initializer5$1();
                this._enableSoftConstraint = _initializer6$1 && _initializer6$1();
                this._bounciness = _initializer7 && _initializer7();
                this._stiffness = _initializer8 && _initializer8();
                this._damping = _initializer9 && _initializer9();
                this._impl = void 0;
                this._impl = configurableConstraint;
              }
            }, (_applyDecoratedDescriptor(_class2$4.prototype, "xMotion", [_dec2$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "xMotion"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "yMotion", [_dec3$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "yMotion"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "zMotion", [_dec4$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "zMotion"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "upper", [_dec5$2], Object.getOwnPropertyDescriptor(_class2$4.prototype, "upper"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "lower", [_dec6$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "lower"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "restitution", [_dec7$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "restitution"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "enableSoftConstraint", [_dec8], Object.getOwnPropertyDescriptor(_class2$4.prototype, "enableSoftConstraint"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "stiffness", [_dec9], Object.getOwnPropertyDescriptor(_class2$4.prototype, "stiffness"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "damping", [_dec10], Object.getOwnPropertyDescriptor(_class2$4.prototype, "damping"), _class2$4.prototype), _initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "_xMotion", [serializable], function () {
              return EConstraintMode.FREE;
            }), _initializer2$4 = applyDecoratedInitializer(_class2$4.prototype, "_yMotion", [serializable], function () {
              return EConstraintMode.FREE;
            }), _initializer3$2 = applyDecoratedInitializer(_class2$4.prototype, "_zMotion", [serializable], function () {
              return EConstraintMode.FREE;
            }), _initializer4$1 = applyDecoratedInitializer(_class2$4.prototype, "_upper", [serializable], function () {
              return new Vec3();
            }), _initializer5$1 = applyDecoratedInitializer(_class2$4.prototype, "_lower", [serializable], function () {
              return new Vec3();
            }), _initializer6$1 = applyDecoratedInitializer(_class2$4.prototype, "_enableSoftConstraint", [serializable], function () {
              return false;
            }), _initializer7 = applyDecoratedInitializer(_class2$4.prototype, "_bounciness", [serializable], function () {
              return 0;
            }), _initializer8 = applyDecoratedInitializer(_class2$4.prototype, "_stiffness", [serializable], function () {
              return 0;
            }), _initializer9 = applyDecoratedInitializer(_class2$4.prototype, "_damping", [serializable], function () {
              return 0;
            })), _class2$4)) || _class$4);
            let AngularLimitSettings = (_dec11 = ccclass('cc.AngularLimitSettings'), _dec12 = type(EConstraintMode), _dec13 = type(EConstraintMode), _dec14 = type(EConstraintMode), _dec15 = type(CCFloat), _dec16 = type(CCFloat), _dec17 = type(CCFloat), _dec18 = type(CCFloat), _dec19 = type(CCFloat), _dec20 = type(CCBoolean), _dec21 = type(CCFloat), _dec22 = type(CCFloat), _dec23 = type(CCBoolean), _dec24 = type(CCFloat), _dec25 = type(CCFloat), _dec11(_class4 = (_class5 = class AngularLimitSettings {
              get twistMotion() {
                return this._twistMotion;
              }
              set twistMotion(v) {
                this._twistMotion = v;
                {
                  this._impl.setConstraintMode(3, v);
                }
              }
              get swingMotion1() {
                return this._swing1Motion;
              }
              set swingMotion1(v) {
                this._swing1Motion = v;
                {
                  this._impl.setConstraintMode(4, v);
                }
              }
              get swingMotion2() {
                return this._swing2Motion;
              }
              set swingMotion2(v) {
                this._swing2Motion = v;
                {
                  this._impl.setConstraintMode(5, v);
                }
              }
              get twistExtent() {
                return this._twistExtent;
              }
              set twistExtent(v) {
                this._twistExtent = v;
                {
                  this._impl.setAngularExtent(v, this.swingExtent1, this.swingExtent2);
                }
              }
              get swingExtent1() {
                return this._swingExtent1;
              }
              set swingExtent1(v) {
                this._swingExtent1 = v;
                {
                  this._impl.setAngularExtent(this.twistExtent, v, this.swingExtent2);
                }
              }
              get swingExtent2() {
                return this._swingExtent2;
              }
              set swingExtent2(v) {
                this._swingExtent2 = v;
                {
                  this._impl.setAngularExtent(this.twistExtent, this.swingExtent1, v);
                }
              }
              get twistRestitution() {
                return this._twistBounciness;
              }
              set twistRestitution(v) {
                this._twistBounciness = v;
                {
                  this._impl.setTwistRestitution(v);
                }
              }
              get swingRestitution() {
                return this._swingBounciness;
              }
              set swingRestitution(v) {
                this._swingBounciness = v;
                {
                  this._impl.setSwingRestitution(v);
                }
              }
              get enableSoftConstraintTwist() {
                return this._enableSoftConstraintTwist;
              }
              set enableSoftConstraintTwist(v) {
                this._enableSoftConstraintTwist = v;
                {
                  this._impl.setTwistSoftConstraint(v);
                }
              }
              get twistStiffness() {
                return this._twistStiffness;
              }
              set twistStiffness(v) {
                this._twistStiffness = v;
                {
                  this._impl.setTwistStiffness(v);
                }
              }
              get twistDamping() {
                return this._twistDamping;
              }
              set twistDamping(v) {
                this._twistDamping = v;
                {
                  this._impl.setTwistDamping(v);
                }
              }
              get enableSoftConstraintSwing() {
                return this._enableSoftConstraintSwing;
              }
              set enableSoftConstraintSwing(v) {
                this._enableSoftConstraintSwing = v;
                {
                  this._impl.setSwingSoftConstraint(v);
                }
              }
              get swingStiffness() {
                return this._swingStiffness;
              }
              set swingStiffness(v) {
                this._swingStiffness = v;
                {
                  this._impl.setSwingStiffness(v);
                }
              }
              get swingDamping() {
                return this._swingDamping;
              }
              set swingDamping(v) {
                this._swingDamping = v;
                {
                  this._impl.setSwingDamping(v);
                }
              }
              set impl(v) {
                this._impl = v;
              }
              constructor(configurableConstraint) {
                this._swing1Motion = _initializer10 && _initializer10();
                this._swing2Motion = _initializer11 && _initializer11();
                this._twistMotion = _initializer12 && _initializer12();
                this._twistExtent = _initializer13 && _initializer13();
                this._swingExtent1 = _initializer14 && _initializer14();
                this._swingExtent2 = _initializer15 && _initializer15();
                this._enableSoftConstraintSwing = _initializer16 && _initializer16();
                this._swingBounciness = _initializer17 && _initializer17();
                this._swingStiffness = _initializer18 && _initializer18();
                this._swingDamping = _initializer19 && _initializer19();
                this._enableSoftConstraintTwist = _initializer20 && _initializer20();
                this._twistBounciness = _initializer21 && _initializer21();
                this._twistStiffness = _initializer22 && _initializer22();
                this._twistDamping = _initializer23 && _initializer23();
                this._impl = void 0;
                this._impl = configurableConstraint;
              }
            }, (_applyDecoratedDescriptor(_class5.prototype, "twistMotion", [_dec12], Object.getOwnPropertyDescriptor(_class5.prototype, "twistMotion"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingMotion1", [_dec13], Object.getOwnPropertyDescriptor(_class5.prototype, "swingMotion1"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingMotion2", [_dec14], Object.getOwnPropertyDescriptor(_class5.prototype, "swingMotion2"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "twistExtent", [_dec15], Object.getOwnPropertyDescriptor(_class5.prototype, "twistExtent"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingExtent1", [_dec16], Object.getOwnPropertyDescriptor(_class5.prototype, "swingExtent1"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingExtent2", [_dec17], Object.getOwnPropertyDescriptor(_class5.prototype, "swingExtent2"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "twistRestitution", [_dec18], Object.getOwnPropertyDescriptor(_class5.prototype, "twistRestitution"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingRestitution", [_dec19], Object.getOwnPropertyDescriptor(_class5.prototype, "swingRestitution"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "enableSoftConstraintTwist", [_dec20], Object.getOwnPropertyDescriptor(_class5.prototype, "enableSoftConstraintTwist"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "twistStiffness", [_dec21], Object.getOwnPropertyDescriptor(_class5.prototype, "twistStiffness"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "twistDamping", [_dec22], Object.getOwnPropertyDescriptor(_class5.prototype, "twistDamping"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "enableSoftConstraintSwing", [_dec23], Object.getOwnPropertyDescriptor(_class5.prototype, "enableSoftConstraintSwing"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingStiffness", [_dec24], Object.getOwnPropertyDescriptor(_class5.prototype, "swingStiffness"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingDamping", [_dec25], Object.getOwnPropertyDescriptor(_class5.prototype, "swingDamping"), _class5.prototype), _initializer10 = applyDecoratedInitializer(_class5.prototype, "_swing1Motion", [serializable], function () {
              return EConstraintMode.FREE;
            }), _initializer11 = applyDecoratedInitializer(_class5.prototype, "_swing2Motion", [serializable], function () {
              return EConstraintMode.FREE;
            }), _initializer12 = applyDecoratedInitializer(_class5.prototype, "_twistMotion", [serializable], function () {
              return EConstraintMode.FREE;
            }), _initializer13 = applyDecoratedInitializer(_class5.prototype, "_twistExtent", [serializable], function () {
              return 0;
            }), _initializer14 = applyDecoratedInitializer(_class5.prototype, "_swingExtent1", [serializable], function () {
              return 0;
            }), _initializer15 = applyDecoratedInitializer(_class5.prototype, "_swingExtent2", [serializable], function () {
              return 0;
            }), _initializer16 = applyDecoratedInitializer(_class5.prototype, "_enableSoftConstraintSwing", [serializable], function () {
              return false;
            }), _initializer17 = applyDecoratedInitializer(_class5.prototype, "_swingBounciness", [serializable], function () {
              return 0;
            }), _initializer18 = applyDecoratedInitializer(_class5.prototype, "_swingStiffness", [serializable], function () {
              return 0;
            }), _initializer19 = applyDecoratedInitializer(_class5.prototype, "_swingDamping", [serializable], function () {
              return 0;
            }), _initializer20 = applyDecoratedInitializer(_class5.prototype, "_enableSoftConstraintTwist", [serializable], function () {
              return false;
            }), _initializer21 = applyDecoratedInitializer(_class5.prototype, "_twistBounciness", [serializable], function () {
              return 0;
            }), _initializer22 = applyDecoratedInitializer(_class5.prototype, "_twistStiffness", [serializable], function () {
              return 0;
            }), _initializer23 = applyDecoratedInitializer(_class5.prototype, "_twistDamping", [serializable], function () {
              return 0;
            })), _class5)) || _class4);
            let LinearDriverSettings = (_dec26 = ccclass('cc.LinearDriverSettings'), _dec27 = type(EDriverMode), _dec28 = type(EDriverMode), _dec29 = type(EDriverMode), _dec30 = type(Vec3), _dec31 = type(Vec3), _dec32 = type(CCFloat), _dec26(_class7 = (_class8 = class LinearDriverSettings {
              get xDrive() {
                return this._xDrive;
              }
              set xDrive(v) {
                this._xDrive = v;
                {
                  this._impl.setDriverMode(0, v);
                }
              }
              get yDrive() {
                return this._yDrive;
              }
              set yDrive(v) {
                this._yDrive = v;
                {
                  this._impl.setDriverMode(1, v);
                }
              }
              get zDrive() {
                return this._zDrive;
              }
              set zDrive(v) {
                this._zDrive = v;
                {
                  this._impl.setDriverMode(2, v);
                }
              }
              get targetPosition() {
                return this._target;
              }
              set targetPosition(v) {
                Vec3.copy(this._target, v);
                {
                  this._impl.setLinearMotorTarget(v);
                }
              }
              get targetVelocity() {
                return this._velocity;
              }
              set targetVelocity(v) {
                Vec3.copy(this._velocity, v);
                {
                  this._impl.setLinearMotorVelocity(v);
                }
              }
              get strength() {
                return this._strength;
              }
              set strength(v) {
                this._strength = v;
                {
                  this._impl.setLinearMotorForceLimit(v);
                }
              }
              set impl(v) {
                this._impl = v;
              }
              constructor(configurableConstraint) {
                this._target = _initializer24 && _initializer24();
                this._velocity = _initializer25 && _initializer25();
                this._xDrive = _initializer26 && _initializer26();
                this._yDrive = _initializer27 && _initializer27();
                this._zDrive = _initializer28 && _initializer28();
                this._strength = _initializer29 && _initializer29();
                this._impl = void 0;
                this._impl = configurableConstraint;
              }
            }, (_applyDecoratedDescriptor(_class8.prototype, "xDrive", [_dec27], Object.getOwnPropertyDescriptor(_class8.prototype, "xDrive"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "yDrive", [_dec28], Object.getOwnPropertyDescriptor(_class8.prototype, "yDrive"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "zDrive", [_dec29], Object.getOwnPropertyDescriptor(_class8.prototype, "zDrive"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "targetPosition", [_dec30], Object.getOwnPropertyDescriptor(_class8.prototype, "targetPosition"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "targetVelocity", [_dec31], Object.getOwnPropertyDescriptor(_class8.prototype, "targetVelocity"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "strength", [_dec32], Object.getOwnPropertyDescriptor(_class8.prototype, "strength"), _class8.prototype), _initializer24 = applyDecoratedInitializer(_class8.prototype, "_target", [serializable], function () {
              return new Vec3();
            }), _initializer25 = applyDecoratedInitializer(_class8.prototype, "_velocity", [serializable], function () {
              return new Vec3();
            }), _initializer26 = applyDecoratedInitializer(_class8.prototype, "_xDrive", [serializable], function () {
              return EDriverMode.DISABLED;
            }), _initializer27 = applyDecoratedInitializer(_class8.prototype, "_yDrive", [serializable], function () {
              return EDriverMode.DISABLED;
            }), _initializer28 = applyDecoratedInitializer(_class8.prototype, "_zDrive", [serializable], function () {
              return EDriverMode.DISABLED;
            }), _initializer29 = applyDecoratedInitializer(_class8.prototype, "_strength", [serializable], function () {
              return 0;
            })), _class8)) || _class7);
            let AngularDriverSettings = (_dec33 = ccclass('cc.AngularDriverSettings'), _dec34 = type(EDriverMode), _dec35 = type(EDriverMode), _dec36 = type(EDriverMode), _dec37 = type(Vec3), _dec38 = type(Vec3), _dec39 = type(CCFloat), _dec33(_class10 = (_class11 = class AngularDriverSettings {
              get twistDrive() {
                return this._twistDrive;
              }
              set twistDrive(v) {
                this._twistDrive = v;
                {
                  this._impl.setDriverMode(3, v);
                }
              }
              get swingDrive1() {
                return this._swingDrive1;
              }
              set swingDrive1(v) {
                this._swingDrive1 = v;
                {
                  this._impl.setDriverMode(4, v);
                }
              }
              get swingDrive2() {
                return this._swingDrive2;
              }
              set swingDrive2(v) {
                this._swingDrive2 = v;
                {
                  this._impl.setDriverMode(5, v);
                }
              }
              get targetOrientation() {
                return this._targetOrientation;
              }
              set targetOrientation(v) {
                Vec3.copy(this._targetOrientation, v);
                {
                  this._impl.setAngularMotorTarget(v);
                }
              }
              get targetVelocity() {
                return this._targetVelocity;
              }
              set targetVelocity(v) {
                Vec3.copy(this._targetVelocity, v);
                {
                  this._impl.setAngularMotorVelocity(v);
                }
              }
              get strength() {
                return this._strength;
              }
              set strength(v) {
                this._strength = v;
                {
                  this._impl.setAngularMotorForceLimit(v);
                }
              }
              set impl(v) {
                this._impl = v;
              }
              constructor(configurableConstraint) {
                this._swingDrive1 = _initializer30 && _initializer30();
                this._swingDrive2 = _initializer31 && _initializer31();
                this._twistDrive = _initializer32 && _initializer32();
                this._targetOrientation = _initializer33 && _initializer33();
                this._targetVelocity = _initializer34 && _initializer34();
                this._strength = _initializer35 && _initializer35();
                this._impl = void 0;
                this._impl = configurableConstraint;
              }
            }, (_applyDecoratedDescriptor(_class11.prototype, "twistDrive", [_dec34], Object.getOwnPropertyDescriptor(_class11.prototype, "twistDrive"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "swingDrive1", [_dec35], Object.getOwnPropertyDescriptor(_class11.prototype, "swingDrive1"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "swingDrive2", [_dec36], Object.getOwnPropertyDescriptor(_class11.prototype, "swingDrive2"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "targetOrientation", [_dec37], Object.getOwnPropertyDescriptor(_class11.prototype, "targetOrientation"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "targetVelocity", [_dec38], Object.getOwnPropertyDescriptor(_class11.prototype, "targetVelocity"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "strength", [_dec39], Object.getOwnPropertyDescriptor(_class11.prototype, "strength"), _class11.prototype), _initializer30 = applyDecoratedInitializer(_class11.prototype, "_swingDrive1", [serializable], function () {
              return EDriverMode.DISABLED;
            }), _initializer31 = applyDecoratedInitializer(_class11.prototype, "_swingDrive2", [serializable], function () {
              return EDriverMode.DISABLED;
            }), _initializer32 = applyDecoratedInitializer(_class11.prototype, "_twistDrive", [serializable], function () {
              return EDriverMode.DISABLED;
            }), _initializer33 = applyDecoratedInitializer(_class11.prototype, "_targetOrientation", [serializable], function () {
              return new Vec3();
            }), _initializer34 = applyDecoratedInitializer(_class11.prototype, "_targetVelocity", [serializable], function () {
              return new Vec3();
            }), _initializer35 = applyDecoratedInitializer(_class11.prototype, "_strength", [serializable], function () {
              return 0;
            })), _class11)) || _class10);
            let ConfigurableConstraint = exports('m', (_dec40 = ccclass('cc.ConfigurableConstraint'), _dec41 = type(Vec3), _dec42 = type(Vec3), _dec43 = type(Vec3), _dec44 = type(Vec3), _dec45 = type(CCBoolean), _dec46 = type(CCFloat), _dec47 = type(CCFloat), _dec48 = type(LinearLimitSettings), _dec49 = type(AngularLimitSettings), _dec50 = type(LinearDriverSettings), _dec51 = type(AngularDriverSettings), _dec52 = formerlySerializedAs('linearLimitSettings'), _dec53 = formerlySerializedAs('angularLimitSettings'), _dec54 = formerlySerializedAs('linearDriverSettings'), _dec55 = formerlySerializedAs('angularDriverSettings'), _dec40(_class13 = (_class14 = class ConfigurableConstraint extends Constraint {
              get axis() {
                return this._axis;
              }
              set axis(v) {
                Vec3.copy(this._axis, v);
                {
                  this.constraint.setAxis(this._axis);
                }
              }
              get secondaryAxis() {
                return this._secondaryAxis;
              }
              set secondaryAxis(v) {
                Vec3.copy(this._secondaryAxis, v);
                {
                  this.constraint.setSecondaryAxis(this._secondaryAxis);
                }
              }
              get pivotA() {
                return this._pivotA;
              }
              set pivotA(v) {
                Vec3.copy(this._pivotA, v);
                {
                  this.constraint.setPivotA(this._pivotA);
                }
              }
              get pivotB() {
                return this._pivotB;
              }
              set pivotB(v) {
                Vec3.copy(this._pivotB, v);
                {
                  this.constraint.setPivotB(this._pivotB);
                }
              }
              get autoPivotB() {
                return this._autoPivotB;
              }
              set autoPivotB(v) {
                this._autoPivotB = v;
                {
                  this.constraint.setAutoPivotB(this._autoPivotB);
                }
              }
              get breakForce() {
                return this._breakForce;
              }
              set breakForce(v) {
                this._breakForce = v;
                {
                  this.constraint.setBreakForce(v);
                }
              }
              get breakTorque() {
                return this._breakTorque;
              }
              set breakTorque(v) {
                this._breakTorque = v;
                {
                  this.constraint.setBreakTorque(v);
                }
              }
              get linearLimitSettings() {
                return this._linearLimitSettings;
              }
              set linearLimitSettings(v) {
                this._linearLimitSettings = v;
                {
                  const constraint = this.constraint;
                  constraint.setConstraintMode(0, v.xMotion);
                  constraint.setConstraintMode(1, v.yMotion);
                  constraint.setConstraintMode(2, v.zMotion);
                  const upper = v.upper;
                  const lower = v.lower;
                  constraint.setLinearLimit(0, lower.x, upper.x);
                  constraint.setLinearLimit(1, lower.y, upper.y);
                  constraint.setLinearLimit(2, lower.z, upper.z);
                  constraint.setLinearSoftConstraint(v.enableSoftConstraint);
                  constraint.setLinearDamping(v.damping);
                  constraint.setLinearStiffness(v.stiffness);
                  constraint.setLinearRestitution(v.restitution);
                }
              }
              get angularLimitSettings() {
                return this._angularLimitSettings;
              }
              set angularLimitSettings(v) {
                this._angularLimitSettings = v;
                {
                  const constraint = this.constraint;
                  constraint.setConstraintMode(3, v.twistMotion);
                  constraint.setConstraintMode(4, v.swingMotion1);
                  constraint.setConstraintMode(5, v.swingMotion2);
                  constraint.setAngularExtent(v.twistExtent, v.swingExtent1, v.swingExtent2);
                  constraint.setTwistRestitution(v.twistRestitution);
                  constraint.setSwingRestitution(v.swingRestitution);
                  constraint.setTwistSoftConstraint(v.enableSoftConstraintTwist);
                  constraint.setSwingSoftConstraint(v.enableSoftConstraintSwing);
                  constraint.setTwistDamping(v.twistDamping);
                  constraint.setSwingDamping(v.swingDamping);
                  constraint.setTwistStiffness(v.twistStiffness);
                  constraint.setSwingStiffness(v.swingStiffness);
                }
              }
              get linearDriverSettings() {
                return this._linearDriverSettings;
              }
              set linearDriverSettings(v) {
                this._linearDriverSettings = v;
                {
                  const constraint = this.constraint;
                  constraint.setDriverMode(0, v.xDrive);
                  constraint.setDriverMode(1, v.yDrive);
                  constraint.setDriverMode(2, v.zDrive);
                  constraint.setLinearMotorTarget(v.targetPosition);
                  constraint.setLinearMotorVelocity(v.targetVelocity);
                  constraint.setLinearMotorForceLimit(v.strength);
                }
              }
              get angularDriverSettings() {
                return this._angularDriverSettings;
              }
              set angularDriverSettings(v) {
                this._angularDriverSettings = v;
                {
                  const constraint = this.constraint;
                  constraint.setDriverMode(3, v.twistDrive);
                  constraint.setDriverMode(4, v.swingDrive1);
                  constraint.setDriverMode(5, v.swingDrive2);
                  constraint.setAngularMotorTarget(v.targetOrientation);
                  constraint.setAngularMotorVelocity(v.targetVelocity);
                  constraint.setAngularMotorForceLimit(v.strength);
                }
              }
              get constraint() {
                return this._constraint;
              }
              constructor() {
                super(EConstraintType.CONFIGURABLE);
                this._breakForce = _initializer36 && _initializer36();
                this._breakTorque = _initializer37 && _initializer37();
                this._linearLimitSettings = _initializer38 && _initializer38();
                this._angularLimitSettings = _initializer39 && _initializer39();
                this._linearDriverSettings = _initializer40 && _initializer40();
                this._angularDriverSettings = _initializer41 && _initializer41();
                this._pivotA = _initializer42 && _initializer42();
                this._pivotB = _initializer43 && _initializer43();
                this._autoPivotB = _initializer44 && _initializer44();
                this._axis = _initializer45 && _initializer45();
                this._secondaryAxis = _initializer46 && _initializer46();
                this._linearLimitSettings = new LinearLimitSettings(this.constraint);
                this._angularLimitSettings = new AngularLimitSettings(this.constraint);
                this._linearDriverSettings = new LinearDriverSettings(this.constraint);
                this._angularDriverSettings = new AngularDriverSettings(this.constraint);
              }
              onLoad() {
                super.onLoad();
                {
                  this.linearLimitSettings.impl = this.constraint;
                  this.angularLimitSettings.impl = this.constraint;
                  this.linearDriverSettings.impl = this.constraint;
                  this.angularDriverSettings.impl = this.constraint;
                }
              }
            }, (_applyDecoratedDescriptor(_class14.prototype, "axis", [_dec41], Object.getOwnPropertyDescriptor(_class14.prototype, "axis"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "secondaryAxis", [_dec42], Object.getOwnPropertyDescriptor(_class14.prototype, "secondaryAxis"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "pivotA", [_dec43], Object.getOwnPropertyDescriptor(_class14.prototype, "pivotA"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "pivotB", [_dec44], Object.getOwnPropertyDescriptor(_class14.prototype, "pivotB"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "autoPivotB", [_dec45], Object.getOwnPropertyDescriptor(_class14.prototype, "autoPivotB"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "breakForce", [_dec46], Object.getOwnPropertyDescriptor(_class14.prototype, "breakForce"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "breakTorque", [_dec47], Object.getOwnPropertyDescriptor(_class14.prototype, "breakTorque"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "linearLimitSettings", [_dec48], Object.getOwnPropertyDescriptor(_class14.prototype, "linearLimitSettings"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "angularLimitSettings", [_dec49], Object.getOwnPropertyDescriptor(_class14.prototype, "angularLimitSettings"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "linearDriverSettings", [_dec50], Object.getOwnPropertyDescriptor(_class14.prototype, "linearDriverSettings"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "angularDriverSettings", [_dec51], Object.getOwnPropertyDescriptor(_class14.prototype, "angularDriverSettings"), _class14.prototype), _initializer36 = applyDecoratedInitializer(_class14.prototype, "_breakForce", [serializable], function () {
              return 1e8;
            }), _initializer37 = applyDecoratedInitializer(_class14.prototype, "_breakTorque", [serializable], function () {
              return 1e8;
            }), _initializer38 = applyDecoratedInitializer(_class14.prototype, "_linearLimitSettings", [serializable, _dec52], null), _initializer39 = applyDecoratedInitializer(_class14.prototype, "_angularLimitSettings", [serializable, _dec53], null), _initializer40 = applyDecoratedInitializer(_class14.prototype, "_linearDriverSettings", [serializable, _dec54], null), _initializer41 = applyDecoratedInitializer(_class14.prototype, "_angularDriverSettings", [serializable, _dec55], null), _initializer42 = applyDecoratedInitializer(_class14.prototype, "_pivotA", [serializable], function () {
              return new Vec3();
            }), _initializer43 = applyDecoratedInitializer(_class14.prototype, "_pivotB", [serializable], function () {
              return new Vec3();
            }), _initializer44 = applyDecoratedInitializer(_class14.prototype, "_autoPivotB", [serializable], function () {
              return false;
            }), _initializer45 = applyDecoratedInitializer(_class14.prototype, "_axis", [serializable], function () {
              return new Vec3(0, 1, 0);
            }), _initializer46 = applyDecoratedInitializer(_class14.prototype, "_secondaryAxis", [serializable], function () {
              return new Vec3(1, 0, 0);
            })), _class14)) || _class13));

            var _dec$3, _dec2$3, _dec3$3, _class$3, _class2$3, _initializer$3, _initializer2$3;
            let PointToPointConstraint = exports('n', (_dec$3 = ccclass('cc.PointToPointConstraint'), _dec2$3 = type(Vec3), _dec3$3 = type(Vec3), _dec$3(_class$3 = (_class2$3 = class PointToPointConstraint extends Constraint {
              get pivotA() {
                return this._pivotA;
              }
              set pivotA(v) {
                Vec3.copy(this._pivotA, v);
                {
                  this.constraint.setPivotA(this._pivotA);
                }
              }
              get pivotB() {
                return this._pivotB;
              }
              set pivotB(v) {
                Vec3.copy(this._pivotB, v);
                {
                  this.constraint.setPivotB(this._pivotB);
                }
              }
              get constraint() {
                return this._constraint;
              }
              constructor() {
                super(EConstraintType.POINT_TO_POINT);
                this._pivotA = _initializer$3 && _initializer$3();
                this._pivotB = _initializer2$3 && _initializer2$3();
              }
            }, (_applyDecoratedDescriptor(_class2$3.prototype, "pivotA", [_dec2$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "pivotA"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "pivotB", [_dec3$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "pivotB"), _class2$3.prototype), _initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "_pivotA", [serializable], function () {
              return new Vec3();
            }), _initializer2$3 = applyDecoratedInitializer(_class2$3.prototype, "_pivotB", [serializable], function () {
              return new Vec3();
            })), _class2$3)) || _class$3));

            var _dec$2, _dec2$2, _dec3$2, _dec4$2, _dec5$1, _dec6, _dec7, _class$2, _class2$2, _initializer$2, _initializer2$2, _initializer3$1, _initializer4, _initializer5, _initializer6;
            new Vec3(0, 0, 0);
            new Vec3(0, 0, 0);
            let CharacterController = exports('a', (_dec$2 = ccclass('cc.CharacterController'), _dec2$2 = type(PhysicsSystem.PhysicsGroup), _dec3$2 = type(CCFloat), _dec4$2 = type(CCFloat), _dec5$1 = type(CCFloat), _dec6 = type(CCFloat), _dec7 = type(Vec3), _dec$2(_class$2 = disallowMultiple(_class$2 = (_class2$2 = class CharacterController extends Eventify(Component) {
              get group() {
                return this._group;
              }
              set group(v) {
                if (!Number.isInteger(Math.log2(v >>> 0))) {
                  warn('[Physics]: The group should only have one bit.');
                }
                this._group = v;
                if (this._cct) {
                  if (this._cct.getGroup() !== v) this._cct.setGroup(v);
                }
              }
              get minMoveDistance() {
                return this._minMoveDistance;
              }
              set minMoveDistance(value) {
                if (this._minMoveDistance === value) return;
                this._minMoveDistance = Math.abs(value);
              }
              get stepOffset() {
                return this._stepOffset;
              }
              set stepOffset(value) {
                if (this._stepOffset === value) return;
                this._stepOffset = Math.abs(value);
                if (this._cct) {
                  this._cct.setStepOffset(value);
                }
              }
              get slopeLimit() {
                return this._slopeLimit;
              }
              set slopeLimit(value) {
                if (this._slopeLimit === value) return;
                this._slopeLimit = Math.abs(value);
                if (this._cct) {
                  this._cct.setSlopeLimit(value);
                }
              }
              get skinWidth() {
                return this._skinWidth;
              }
              set skinWidth(value) {
                if (this._skinWidth === value) return;
                this._skinWidth = Math.abs(value);
                if (this._cct) {
                  this._cct.setContactOffset(Math.max(0.0001, value));
                }
              }
              get center() {
                return this._center;
              }
              set center(value) {
                if (Vec3.equals(this._center, value)) return;
                Vec3.copy(this._center, value);
              }
              constructor(type) {
                super();
                this.type = void 0;
                this._cct = null;
                this._group = _initializer$2 && _initializer$2();
                this._minMoveDistance = _initializer2$2 && _initializer2$2();
                this._stepOffset = _initializer3$1 && _initializer3$1();
                this._slopeLimit = _initializer4 && _initializer4();
                this._skinWidth = _initializer5 && _initializer5();
                this._center = _initializer6 && _initializer6();
                this._initialized = false;
                this._prevPos = new Vec3();
                this._currentPos = new Vec3();
                this._velocity = new Vec3();
                this._centerWorldPosition = new Vec3();
                this._needCollisionEvent = false;
                this._needTriggerEvent = false;
                this.type = type;
              }
              get _isInitialized() {
                if (this._cct === null || !this._initialized) {
                  return false;
                } else {
                  return true;
                }
              }
              onLoad() {
                if (!selector.runInEditor) return;
                this._cct = createCharacterController(this.type);
                this._initialized = this._cct.initialize(this);
                this._cct.onLoad();
              }
              onEnable() {
                if (this._cct) {
                  this._cct.onEnable();
                }
              }
              onDisable() {
                if (this._cct) {
                  this._cct.onDisable();
                }
              }
              onDestroy() {
                if (this._cct) {
                  this._needCollisionEvent = false;
                  this._needTriggerEvent = false;
                  this._cct.updateEventListener();
                  this._cct.onDestroy();
                  this._cct = null;
                }
              }
              get centerWorldPosition() {
                if (this._isInitialized) this._cct.getPosition(this._centerWorldPosition);
                return this._centerWorldPosition;
              }
              set centerWorldPosition(value) {
                if (this._isInitialized) this._cct.setPosition(value);
              }
              get velocity() {
                return this._velocity;
              }
              get isGrounded() {
                return this._cct.onGround();
              }
              move(movement) {
                if (!this._isInitialized) {
                  return;
                }
                this._prevPos.set(this.centerWorldPosition);
                const elapsedTime = PhysicsSystem.instance.fixedTimeStep;
                this._cct.move(movement, this._minMoveDistance, elapsedTime);
                this._currentPos.set(this.centerWorldPosition);
                this._velocity = this._currentPos.subtract(this._prevPos).multiplyScalar(1.0 / elapsedTime);
                this._cct.syncPhysicsToScene();
              }
              on(type, callback, target, once) {
                const ret = super.on(type, callback, target, once);
                this._updateNeedEvent(type);
                return ret;
              }
              off(type, callback, target) {
                super.off(type, callback, target);
                this._updateNeedEvent();
              }
              once(type, callback, target) {
                const ret = super.once(type, callback, target);
                this._updateNeedEvent(type);
                return ret;
              }
              getGroup() {
                if (this._isInitialized) return this._cct.getGroup();
                return 0;
              }
              setGroup(v) {
                if (this._isInitialized) this._cct.setGroup(v);
              }
              addGroup(v) {
                if (this._isInitialized) this._cct.addGroup(v);
              }
              removeGroup(v) {
                if (this._isInitialized) this._cct.removeGroup(v);
              }
              getMask() {
                if (this._isInitialized) return this._cct.getMask();
                return 0;
              }
              setMask(v) {
                if (this._isInitialized) this._cct.setMask(v);
              }
              addMask(v) {
                if (this._isInitialized) this._cct.addMask(v);
              }
              removeMask(v) {
                if (this._isInitialized) this._cct.removeMask(v);
              }
              get needCollisionEvent() {
                return this._needCollisionEvent;
              }
              get needTriggerEvent() {
                return this._needTriggerEvent;
              }
              _updateNeedEvent(type) {
                if (this.isValid) {
                  if (type !== undefined) {
                    if (type === 'onControllerColliderHit') {
                      this._needCollisionEvent = true;
                    }
                    if (type === 'onControllerTriggerEnter' || type === 'onControllerTriggerStay' || type === 'onControllerTriggerExit') {
                      this._needTriggerEvent = true;
                    }
                  } else {
                    if (!this.hasEventListener('onControllerColliderHit')) {
                      this._needCollisionEvent = false;
                    }
                    if (!(this.hasEventListener('onControllerTriggerEnter') || this.hasEventListener('onControllerTriggerStay') || this.hasEventListener('onControllerTriggerExit'))) {
                      this._needTriggerEvent = false;
                    }
                  }
                  if (this._cct) this._cct.updateEventListener();
                }
              }
            }, (_applyDecoratedDescriptor(_class2$2.prototype, "group", [_dec2$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "group"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "minMoveDistance", [_dec3$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "minMoveDistance"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "stepOffset", [_dec4$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "stepOffset"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "slopeLimit", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "slopeLimit"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "skinWidth", [_dec6], Object.getOwnPropertyDescriptor(_class2$2.prototype, "skinWidth"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "center", [_dec7], Object.getOwnPropertyDescriptor(_class2$2.prototype, "center"), _class2$2.prototype), _initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "_group", [serializable], function () {
              return PhysicsSystem.PhysicsGroup.DEFAULT;
            }), _initializer2$2 = applyDecoratedInitializer(_class2$2.prototype, "_minMoveDistance", [serializable], function () {
              return 0.001;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$2.prototype, "_stepOffset", [serializable], function () {
              return 0.5;
            }), _initializer4 = applyDecoratedInitializer(_class2$2.prototype, "_slopeLimit", [serializable], function () {
              return 45.0;
            }), _initializer5 = applyDecoratedInitializer(_class2$2.prototype, "_skinWidth", [serializable], function () {
              return 0.01;
            }), _initializer6 = applyDecoratedInitializer(_class2$2.prototype, "_center", [serializable], function () {
              return new Vec3();
            })), _class2$2)) || _class$2) || _class$2));

            var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3;
            new Vec3(0, 0, 0);
            let BoxCharacterController = exports('q', (_dec$1 = ccclass('cc.BoxCharacterController'), _dec2$1 = executionOrder(-1), _dec3$1 = type(CCFloat), _dec4$1 = type(CCFloat), _dec5 = type(CCFloat), _dec$1(_class$1 = _dec2$1(_class$1 = (_class2$1 = class BoxCharacterController extends CharacterController {
              constructor() {
                super(ECharacterControllerType.BOX);
                this._halfHeight = _initializer$1 && _initializer$1();
                this._halfSideExtent = _initializer2$1 && _initializer2$1();
                this._halfForwardExtent = _initializer3 && _initializer3();
              }
              get halfHeight() {
                return this._halfHeight;
              }
              set halfHeight(value) {
                if (this._halfHeight === value) return;
                this._halfHeight = Math.abs(value);
                if (this._cct) {
                  this._cct.setHalfHeight(value);
                }
              }
              get halfSideExtent() {
                return this._halfSideExtent;
              }
              set halfSideExtent(value) {
                if (this._halfSideExtent === value) return;
                this._halfSideExtent = Math.abs(value);
                if (this._cct) {
                  this._cct.setHalfSideExtent(value);
                }
              }
              get halfForwardExtent() {
                return this._halfForwardExtent;
              }
              set halfForwardExtent(value) {
                if (this._halfForwardExtent === value) return;
                this._halfForwardExtent = Math.abs(value);
                if (this._cct) {
                  this._cct.setHalfForwardExtent(value);
                }
              }
            }, (_applyDecoratedDescriptor(_class2$1.prototype, "halfHeight", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "halfHeight"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "halfSideExtent", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "halfSideExtent"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "halfForwardExtent", [_dec5], Object.getOwnPropertyDescriptor(_class2$1.prototype, "halfForwardExtent"), _class2$1.prototype), _initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_halfHeight", [serializable], function () {
              return 0.5;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_halfSideExtent", [serializable], function () {
              return 0.5;
            }), _initializer3 = applyDecoratedInitializer(_class2$1.prototype, "_halfForwardExtent", [serializable], function () {
              return 0.5;
            })), _class2$1)) || _class$1) || _class$1));

            var _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _initializer2;
            new Vec3(0, 0, 0);
            let CapsuleCharacterController = exports('o', (_dec = ccclass('cc.CapsuleCharacterController'), _dec2 = executionOrder(-1), _dec3 = type(CCFloat), _dec4 = type(CCFloat), _dec(_class = _dec2(_class = (_class2 = class CapsuleCharacterController extends CharacterController {
              constructor() {
                super(ECharacterControllerType.CAPSULE);
                this._radius = _initializer && _initializer();
                this._height = _initializer2 && _initializer2();
              }
              get radius() {
                return this._radius;
              }
              set radius(value) {
                if (this._radius === value) return;
                this._radius = Math.abs(value);
                if (this._cct) {
                  this._cct.setRadius(value);
                }
              }
              get height() {
                return this._height;
              }
              set height(value) {
                if (this._height === value) return;
                this._height = Math.abs(value);
                if (this._cct) {
                  this._cct.setHeight(value);
                }
              }
            }, (_applyDecoratedDescriptor(_class2.prototype, "radius", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "height", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "height"), _class2.prototype), _initializer = applyDecoratedInitializer(_class2.prototype, "_radius", [serializable], function () {
              return 0.5;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_height", [serializable], function () {
              return 1.0;
            })), _class2)) || _class) || _class));

            class CharacterControllerContact {
              constructor() {
                this.worldPosition = new Vec3();
                this.worldNormal = new Vec3();
                this.motionDirection = new Vec3();
                this.motionLength = 0;
              }
            } exports('C', CharacterControllerContact);

            legacyCC.PhysicsSystem = PhysicsSystem;
            legacyCC.PhysicsMaterial = PhysicsMaterial;
            legacyCC.PhysicsRayResult = PhysicsRayResult;
            legacyCC.ConstantForce = ConstantForce;

            var physics = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PhysicsSystem: PhysicsSystem,
                PhysicsRayResult: PhysicsRayResult,
                PhysicsLineStripCastResult: PhysicsLineStripCastResult,
                get Collider () { return Collider; },
                BoxCollider: BoxCollider,
                SphereCollider: SphereCollider,
                CapsuleCollider: CapsuleCollider,
                MeshCollider: MeshCollider,
                CylinderCollider: CylinderCollider,
                ConeCollider: ConeCollider,
                TerrainCollider: TerrainCollider,
                get SimplexCollider () { return SimplexCollider; },
                PlaneCollider: PlaneCollider,
                get Constraint () { return Constraint; },
                HingeConstraint: HingeConstraint,
                FixedConstraint: FixedConstraint,
                PointToPointConstraint: PointToPointConstraint,
                ConfigurableConstraint: ConfigurableConstraint,
                get RigidBody () { return RigidBody; },
                PhysicsMaterial: PhysicsMaterial,
                ConstantForce: ConstantForce,
                CharacterController: CharacterController,
                BoxCharacterController: BoxCharacterController,
                CapsuleCharacterController: CapsuleCharacterController,
                selector: selector,
                utils: util,
                CharacterControllerContact: CharacterControllerContact,
                get ERigidBodyType () { return ERigidBodyType; },
                get EAxisDirection () { return EAxisDirection; },
                get ED6Axis () { return ED6Axis; },
                get ESimplexType () { return ESimplexType; },
                get EColliderType () { return EColliderType; },
                get EConstraintType () { return EConstraintType; },
                get EConstraintMode () { return EConstraintMode; },
                get EDriverMode () { return EDriverMode; },
                get ECharacterControllerType () { return ECharacterControllerType; },
                get PhysicsGroup () { return PhysicsGroup; },
                get EPhysicsDrawFlags () { return EPhysicsDrawFlags; }
            });
            exports('p', physics);

            replaceProperty(PhysicsSystem, 'PhysicsSystem', [{
              name: 'ins',
              newName: 'instance'
            }, {
              name: 'PHYSICS_AMMO',
              newName: 'PHYSICS_BULLET'
            }]);
            replaceProperty(PhysicsSystem.prototype, 'PhysicsSystem.prototype', [{
              name: 'deltaTime',
              newName: 'fixedTimeStep'
            }, {
              name: 'maxSubStep',
              newName: 'maxSubSteps'
            }]);
            removeProperty(PhysicsSystem.prototype, 'PhysicsSystem.prototype', [{
              name: 'useFixedTime'
            }, {
              name: 'useCollisionMatrix'
            }, {
              name: 'updateCollisionMatrix'
            }, {
              name: 'resetCollisionMatrix'
            }, {
              name: 'isCollisionGroup'
            }, {
              name: 'setCollisionGroup'
            }]);
            replaceProperty(Collider.prototype, 'Collider.prototype', [{
              name: 'attachedRigidbody',
              newName: 'attachedRigidBody'
            }, {
              name: 'TYPE',
              newName: 'type'
            }]);
            replaceProperty(Collider, 'Collider', [{
              name: 'EColliderType',
              newName: 'Type'
            }, {
              name: 'EAxisDirection',
              newName: 'Axis'
            }]);
            replaceProperty(Constraint, 'Constraint', [{
              name: 'EConstraintType',
              newName: 'Type'
            }]);
            replaceProperty(BoxCollider.prototype, 'BoxCollider.prototype', [{
              name: 'boxShape',
              newName: 'shape'
            }]);
            replaceProperty(SphereCollider.prototype, 'SphereCollider.prototype', [{
              name: 'sphereShape',
              newName: 'shape'
            }]);
            replaceProperty(CapsuleCollider.prototype, 'CapsuleCollider.prototype', [{
              name: 'capsuleShape',
              newName: 'shape'
            }]);
            replaceProperty(RigidBody.prototype, 'RigidBody.prototype', [{
              name: 'rigidBody',
              newName: 'body'
            }]);
            replaceProperty(RigidBody, 'RigidBody', [{
              name: 'ERigidBodyType',
              newName: 'Type'
            }]);
            removeProperty(RigidBody.prototype, 'RigidBody.prototype', [{
              name: 'fixedRotation'
            }]);
            legacyCC.RigidBodyComponent = RigidBody;
            setClassAlias(RigidBody, 'cc.RigidBodyComponent');
            legacyCC.ColliderComponent = Collider;
            setClassAlias(Collider, 'cc.ColliderComponent');
            legacyCC.BoxColliderComponent = BoxCollider;
            setClassAlias(BoxCollider, 'cc.BoxColliderComponent');
            legacyCC.SphereColliderComponent = SphereCollider;
            setClassAlias(SphereCollider, 'cc.SphereColliderComponent');
            setClassAlias(CapsuleCollider, 'cc.CapsuleColliderComponent');
            setClassAlias(MeshCollider, 'cc.MeshColliderComponent');
            setClassAlias(CylinderCollider, 'cc.CylinderColliderComponent');
            legacyCC.PhysicMaterial = PhysicsMaterial;
            setClassAlias(PhysicsMaterial, 'cc.PhysicMaterial');

            legacyCC.physics = physics;

        })
    };
}));
