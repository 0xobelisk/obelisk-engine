System.register(['./index-ce98320e.js', './physics-enum-187e99c4.js'], (function (exports) {
    'use strict';
    var EDITOR, log, warn, errorID, legacyCC, EColliderType, EConstraintType, ECharacterControllerType;
    return {
        setters: [function (module) {
            EDITOR = module.bB;
            log = module.a;
            warn = module.w;
            errorID = module.f;
            legacyCC = module.l;
        }, function (module) {
            EColliderType = module.a;
            EConstraintType = module.d;
            ECharacterControllerType = module.g;
        }],
        execute: (function () {

            exports({
                a: createRigidBody,
                b: createShape,
                c: constructDefaultWorld,
                d: createConstraint,
                e: createCharacterController
            });

            function updateLegacyMacro(id) {
              legacyCC._global.CC_PHYSICS_BUILTIN = id === 'builtin';
              legacyCC._global.CC_PHYSICS_CANNON = id === 'cannon.js';
              legacyCC._global.CC_PHYSICS_AMMO = id === 'bullet';
            }
            function register(id, wrapper) {
              log(`[PHYSICS]: register ${id}.`);
              selector.backend[id] = wrapper;
              if (!selector.physicsWorld || selector.id === id) {
                updateLegacyMacro(id);
                const mutableSelector = selector;
                mutableSelector.id = id;
                mutableSelector.wrapper = wrapper;
              }
            }
            let worldInitData;
            function switchTo(id) {
              if (!selector.runInEditor) return;
              const mutableSelector = selector;
              if (selector.physicsWorld && id !== selector.id && selector.backend[id] != null) {
                selector.physicsWorld.destroy();
                log(`[PHYSICS]: switch from ${selector.id} to ${id}.`);
                updateLegacyMacro(id);
                mutableSelector.id = id;
                mutableSelector.wrapper = selector.backend[id];
                mutableSelector.physicsWorld = createPhysicsWorld();
              } else {
                log(`[PHYSICS]: using ${id}.`);
                mutableSelector.physicsWorld = createPhysicsWorld();
              }
              if (worldInitData) {
                const world = mutableSelector.physicsWorld;
                world.setGravity(worldInitData.gravity);
                world.setAllowSleep(worldInitData.allowSleep);
              }
            }
            const selector = exports('s', {
              id: '',
              switchTo,
              register,
              wrapper: {},
              backend: {},
              physicsWorld: null,
              runInEditor: !EDITOR
            });
            function constructDefaultWorld(data) {
              if (!worldInitData) worldInitData = data;
              if (!selector.runInEditor) return;
              if (!selector.physicsWorld) {
                log(`[PHYSICS]: using ${selector.id}.`);
                const mutableSelector = selector;
                const world = mutableSelector.physicsWorld = createPhysicsWorld();
                world.setGravity(worldInitData.gravity);
                world.setAllowSleep(worldInitData.allowSleep);
              }
            }
            const FUNC = (...v) => 0;
            const ENTIRE_WORLD = {
              impl: null,
              debugDrawFlags: 0,
              debugDrawConstraintSize: 0,
              setGravity: FUNC,
              setAllowSleep: FUNC,
              setDefaultMaterial: FUNC,
              step: FUNC,
              syncAfterEvents: FUNC,
              syncSceneToPhysics: FUNC,
              raycast: FUNC,
              raycastClosest: FUNC,
              sweepBox: FUNC,
              sweepBoxClosest: FUNC,
              sweepSphere: FUNC,
              sweepSphereClosest: FUNC,
              sweepCapsule: FUNC,
              sweepCapsuleClosest: FUNC,
              emitEvents: FUNC,
              destroy: FUNC
            };
            var ECheckType;
            (function (ECheckType) {
              ECheckType[ECheckType["World"] = 0] = "World";
              ECheckType[ECheckType["RigidBody"] = 1] = "RigidBody";
              ECheckType[ECheckType["BoxCollider"] = 2] = "BoxCollider";
              ECheckType[ECheckType["SphereCollider"] = 3] = "SphereCollider";
              ECheckType[ECheckType["CapsuleCollider"] = 4] = "CapsuleCollider";
              ECheckType[ECheckType["MeshCollider"] = 5] = "MeshCollider";
              ECheckType[ECheckType["CylinderCollider"] = 6] = "CylinderCollider";
              ECheckType[ECheckType["ConeCollider"] = 7] = "ConeCollider";
              ECheckType[ECheckType["TerrainCollider"] = 8] = "TerrainCollider";
              ECheckType[ECheckType["SimplexCollider"] = 9] = "SimplexCollider";
              ECheckType[ECheckType["PlaneCollider"] = 10] = "PlaneCollider";
              ECheckType[ECheckType["PointToPointConstraint"] = 11] = "PointToPointConstraint";
              ECheckType[ECheckType["HingeConstraint"] = 12] = "HingeConstraint";
              ECheckType[ECheckType["FixedConstraint"] = 13] = "FixedConstraint";
              ECheckType[ECheckType["ConfigurableConstraint"] = 14] = "ConfigurableConstraint";
              ECheckType[ECheckType["BoxCharacterController"] = 15] = "BoxCharacterController";
              ECheckType[ECheckType["CapsuleCharacterController"] = 16] = "CapsuleCharacterController";
            })(ECheckType || (ECheckType = {}));
            function check(obj, type) {
              if (obj == null) {
                if (selector.id) {
                  warn(`${selector.id} physics does not support ${ECheckType[type]}`);
                } else {
                  errorID(9600);
                }
                return true;
              }
              return false;
            }
            function createPhysicsWorld() {
              if (check(selector.wrapper.PhysicsWorld, ECheckType.World)) {
                return ENTIRE_WORLD;
              }
              return new selector.wrapper.PhysicsWorld();
            }
            const ENTIRE_RIGID_BODY = {
              impl: null,
              rigidBody: null,
              isAwake: false,
              isSleepy: false,
              isSleeping: false,
              initialize: FUNC,
              onEnable: FUNC,
              onDisable: FUNC,
              onDestroy: FUNC,
              setType: FUNC,
              setMass: FUNC,
              setLinearDamping: FUNC,
              setAngularDamping: FUNC,
              useGravity: FUNC,
              setLinearFactor: FUNC,
              setAngularFactor: FUNC,
              setAllowSleep: FUNC,
              wakeUp: FUNC,
              sleep: FUNC,
              clearState: FUNC,
              clearForces: FUNC,
              clearVelocity: FUNC,
              setSleepThreshold: FUNC,
              getSleepThreshold: FUNC,
              getLinearVelocity: FUNC,
              setLinearVelocity: FUNC,
              getAngularVelocity: FUNC,
              setAngularVelocity: FUNC,
              applyForce: FUNC,
              applyLocalForce: FUNC,
              applyImpulse: FUNC,
              applyLocalImpulse: FUNC,
              applyTorque: FUNC,
              applyLocalTorque: FUNC,
              setGroup: FUNC,
              getGroup: FUNC,
              addGroup: FUNC,
              removeGroup: FUNC,
              setMask: FUNC,
              getMask: FUNC,
              addMask: FUNC,
              removeMask: FUNC,
              isUsingCCD: FUNC,
              useCCD: FUNC
            };
            function createRigidBody() {
              if (check(selector.wrapper.RigidBody, ECheckType.RigidBody)) {
                return ENTIRE_RIGID_BODY;
              }
              return new selector.wrapper.RigidBody();
            }
            const CREATE_COLLIDER_PROXY = {
              INITED: false
            };
            const ENTIRE_SHAPE = {
              impl: null,
              collider: null,
              attachedRigidBody: null,
              initialize: FUNC,
              onLoad: FUNC,
              onEnable: FUNC,
              onDisable: FUNC,
              onDestroy: FUNC,
              setGroup: FUNC,
              getGroup: FUNC,
              addGroup: FUNC,
              removeGroup: FUNC,
              setMask: FUNC,
              getMask: FUNC,
              addMask: FUNC,
              removeMask: FUNC,
              setMaterial: FUNC,
              setAsTrigger: FUNC,
              setCenter: FUNC,
              getAABB: FUNC,
              getBoundingSphere: FUNC,
              updateSize: FUNC,
              updateRadius: FUNC,
              setRadius: FUNC,
              setCylinderHeight: FUNC,
              setDirection: FUNC,
              setHeight: FUNC,
              setShapeType: FUNC,
              setVertices: FUNC,
              setMesh: FUNC,
              setTerrain: FUNC,
              setNormal: FUNC,
              setConstant: FUNC,
              updateEventListener: FUNC
            };
            function createShape(type) {
              initColliderProxy();
              return CREATE_COLLIDER_PROXY[type]();
            }
            function initColliderProxy() {
              if (CREATE_COLLIDER_PROXY.INITED) return;
              CREATE_COLLIDER_PROXY.INITED = true;
              CREATE_COLLIDER_PROXY[EColliderType.BOX] = function createBoxShape() {
                if (check(selector.wrapper.BoxShape, ECheckType.BoxCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.BoxShape();
              };
              CREATE_COLLIDER_PROXY[EColliderType.SPHERE] = function createSphereShape() {
                if (check(selector.wrapper.SphereShape, ECheckType.SphereCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.SphereShape();
              };
              CREATE_COLLIDER_PROXY[EColliderType.CAPSULE] = function createCapsuleShape() {
                if (check(selector.wrapper.CapsuleShape, ECheckType.CapsuleCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.CapsuleShape();
              };
              CREATE_COLLIDER_PROXY[EColliderType.CYLINDER] = function createCylinderShape() {
                if (check(selector.wrapper.CylinderShape, ECheckType.CylinderCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.CylinderShape();
              };
              CREATE_COLLIDER_PROXY[EColliderType.CONE] = function createConeShape() {
                if (check(selector.wrapper.ConeShape, ECheckType.ConeCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.ConeShape();
              };
              CREATE_COLLIDER_PROXY[EColliderType.MESH] = function createTrimeshShape() {
                if (check(selector.wrapper.TrimeshShape, ECheckType.MeshCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.TrimeshShape();
              };
              CREATE_COLLIDER_PROXY[EColliderType.TERRAIN] = function createTerrainShape() {
                if (check(selector.wrapper.TerrainShape, ECheckType.TerrainCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.TerrainShape();
              };
              CREATE_COLLIDER_PROXY[EColliderType.SIMPLEX] = function createSimplexShape() {
                if (check(selector.wrapper.SimplexShape, ECheckType.SimplexCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.SimplexShape();
              };
              CREATE_COLLIDER_PROXY[EColliderType.PLANE] = function createPlaneShape() {
                if (check(selector.wrapper.PlaneShape, ECheckType.PlaneCollider)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.PlaneShape();
              };
            }
            const CREATE_CONSTRAINT_PROXY = {
              INITED: false
            };
            const ENTIRE_CONSTRAINT = {
              impl: null,
              initialize: FUNC,
              onLoad: FUNC,
              onEnable: FUNC,
              onDisable: FUNC,
              onDestroy: FUNC,
              setEnableCollision: FUNC,
              setConnectedBody: FUNC,
              setPivotA: FUNC,
              setPivotB: FUNC,
              setAxis: FUNC,
              setSecondaryAxis: FUNC,
              setBreakForce: FUNC,
              setBreakTorque: FUNC,
              setConstraintMode: FUNC,
              setLinearLimit: FUNC,
              setAngularExtent: FUNC,
              setLinearSoftConstraint: FUNC,
              setLinearStiffness: FUNC,
              setLinearDamping: FUNC,
              setLinearRestitution: FUNC,
              setSwingSoftConstraint: FUNC,
              setTwistSoftConstraint: FUNC,
              setSwingStiffness: FUNC,
              setSwingDamping: FUNC,
              setSwingRestitution: FUNC,
              setTwistStiffness: FUNC,
              setTwistDamping: FUNC,
              setTwistRestitution: FUNC,
              setDriverMode: FUNC,
              setLinearMotorTarget: FUNC,
              setLinearMotorVelocity: FUNC,
              setLinearMotorForceLimit: FUNC,
              setAngularMotorTarget: FUNC,
              setAngularMotorVelocity: FUNC,
              setAngularMotorForceLimit: FUNC,
              setAutoPivotB: FUNC,
              setLimitEnabled: FUNC,
              setLowerLimit: FUNC,
              setUpperLimit: FUNC,
              setMotorEnabled: FUNC,
              setMotorVelocity: FUNC,
              setMotorForceLimit: FUNC
            };
            function createConstraint(type) {
              initConstraintProxy();
              return CREATE_CONSTRAINT_PROXY[type]();
            }
            function initConstraintProxy() {
              if (CREATE_CONSTRAINT_PROXY.INITED) return;
              CREATE_CONSTRAINT_PROXY.INITED = true;
              CREATE_CONSTRAINT_PROXY[EConstraintType.POINT_TO_POINT] = function createPointToPointConstraint() {
                if (check(selector.wrapper.PointToPointConstraint, ECheckType.PointToPointConstraint)) {
                  return ENTIRE_CONSTRAINT;
                }
                return new selector.wrapper.PointToPointConstraint();
              };
              CREATE_CONSTRAINT_PROXY[EConstraintType.HINGE] = function createHingeConstraint() {
                if (check(selector.wrapper.HingeConstraint, ECheckType.HingeConstraint)) {
                  return ENTIRE_CONSTRAINT;
                }
                return new selector.wrapper.HingeConstraint();
              };
              CREATE_CONSTRAINT_PROXY[EConstraintType.FIXED] = function createFixedConstraint() {
                if (check(selector.wrapper.FixedConstraint, ECheckType.FixedConstraint)) {
                  return ENTIRE_CONSTRAINT;
                }
                return new selector.wrapper.FixedConstraint();
              };
              CREATE_CONSTRAINT_PROXY[EConstraintType.CONFIGURABLE] = function createConfigurableConstraint() {
                if (check(selector.wrapper.ConfigurableConstraint, ECheckType.ConfigurableConstraint)) {
                  return ENTIRE_CONSTRAINT;
                }
                return new selector.wrapper.ConfigurableConstraint();
              };
            }
            const CREATE_CHARACTER_CONTROLLER_PROXY = {
              INITED: false
            };
            const ENTIRE_CHARACTER_CONTROLLER = {
              initialize: FUNC,
              onLoad: FUNC,
              onEnable: FUNC,
              onDisable: FUNC,
              onDestroy: FUNC,
              onGround: FUNC,
              getPosition: FUNC,
              setPosition: FUNC,
              setStepOffset: FUNC,
              setSlopeLimit: FUNC,
              setContactOffset: FUNC,
              setDetectCollisions: FUNC,
              setOverlapRecovery: FUNC,
              setGroup: FUNC,
              getGroup: FUNC,
              addGroup: FUNC,
              removeGroup: FUNC,
              setMask: FUNC,
              getMask: FUNC,
              addMask: FUNC,
              removeMask: FUNC,
              move: FUNC,
              syncPhysicsToScene: FUNC,
              updateEventListener: FUNC,
              setHalfHeight: FUNC,
              setHalfSideExtent: FUNC,
              setHalfForwardExtent: FUNC,
              setRadius: FUNC,
              setHeight: FUNC
            };
            function createCharacterController(type) {
              initCharacterControllerProxy();
              return CREATE_CHARACTER_CONTROLLER_PROXY[type]();
            }
            function initCharacterControllerProxy() {
              if (CREATE_CHARACTER_CONTROLLER_PROXY.INITED) return;
              CREATE_CHARACTER_CONTROLLER_PROXY.INITED = true;
              CREATE_CHARACTER_CONTROLLER_PROXY[ECharacterControllerType.BOX] = function createBoxCharacterController() {
                if (check(selector.wrapper.BoxCharacterController, ECheckType.BoxCharacterController)) {
                  return ENTIRE_CHARACTER_CONTROLLER;
                }
                return new selector.wrapper.BoxCharacterController();
              };
              CREATE_CHARACTER_CONTROLLER_PROXY[ECharacterControllerType.CAPSULE] = function createCapsuleCharacterController() {
                if (check(selector.wrapper.CapsuleCharacterController, ECheckType.CapsuleCharacterController)) {
                  return ENTIRE_CHARACTER_CONTROLLER;
                }
                return new selector.wrapper.CapsuleCharacterController();
              };
            }

        })
    };
}));
