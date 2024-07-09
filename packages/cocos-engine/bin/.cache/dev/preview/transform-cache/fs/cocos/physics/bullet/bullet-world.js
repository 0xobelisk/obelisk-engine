System.register("q-bundled:///fs/cocos/physics/bullet/bullet-world.js", ["./bullet-shared-body.js", "./shapes/bullet-shape.js", "../utils/array-collision-matrix.js", "../utils/tuple-dictionary.js", "./bullet-cache.js", "./bullet-utils.js", "../framework/index.js", "../../core/index.js", "./bullet-contact-data.js", "./instantiated.js", "../../game/index.js", "./bullet-env.js"], function (_export, _context) {
  "use strict";

  var BulletSharedBody, BulletShape, ArrayCollisionMatrix, TupleDictionary, TriggerEventObject, CollisionEventObject, CC_V3_0, CC_V3_1, CC_V3_2, CC_COLOR_0, BulletCache, CharacterTriggerEventObject, bullet2CocosVec3, cocos2BulletQuat, cocos2BulletVec3, CharacterControllerContact, EPhysicsDrawFlags, error, Vec3, js, Quat, BulletContactData, bt, EBulletType, EBulletTriangleRaycastFlag, EBulletDebugDrawModes, btCache, director, importFunc, contactsPool, v3_0, v3_1, v3_2, c_0, emitHit, BulletWorld;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable new-cap */ /*
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
    setters: [function (_bulletSharedBodyJs) {
      BulletSharedBody = _bulletSharedBodyJs.BulletSharedBody;
    }, function (_shapesBulletShapeJs) {
      BulletShape = _shapesBulletShapeJs.BulletShape;
    }, function (_utilsArrayCollisionMatrixJs) {
      ArrayCollisionMatrix = _utilsArrayCollisionMatrixJs.ArrayCollisionMatrix;
    }, function (_utilsTupleDictionaryJs) {
      TupleDictionary = _utilsTupleDictionaryJs.TupleDictionary;
    }, function (_bulletCacheJs) {
      TriggerEventObject = _bulletCacheJs.TriggerEventObject;
      CollisionEventObject = _bulletCacheJs.CollisionEventObject;
      CC_V3_0 = _bulletCacheJs.CC_V3_0;
      CC_V3_1 = _bulletCacheJs.CC_V3_1;
      CC_V3_2 = _bulletCacheJs.CC_V3_2;
      CC_COLOR_0 = _bulletCacheJs.CC_COLOR_0;
      BulletCache = _bulletCacheJs.BulletCache;
      CharacterTriggerEventObject = _bulletCacheJs.CharacterTriggerEventObject;
    }, function (_bulletUtilsJs) {
      bullet2CocosVec3 = _bulletUtilsJs.bullet2CocosVec3;
      cocos2BulletQuat = _bulletUtilsJs.cocos2BulletQuat;
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
    }, function (_frameworkIndexJs) {
      CharacterControllerContact = _frameworkIndexJs.CharacterControllerContact;
      EPhysicsDrawFlags = _frameworkIndexJs.EPhysicsDrawFlags;
    }, function (_coreIndexJs) {
      error = _coreIndexJs.error;
      Vec3 = _coreIndexJs.Vec3;
      js = _coreIndexJs.js;
      Quat = _coreIndexJs.Quat;
    }, function (_bulletContactDataJs) {
      BulletContactData = _bulletContactDataJs.BulletContactData;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
      EBulletType = _instantiatedJs.EBulletType;
      EBulletTriangleRaycastFlag = _instantiatedJs.EBulletTriangleRaycastFlag;
      EBulletDebugDrawModes = _instantiatedJs.EBulletDebugDrawModes;
      btCache = _instantiatedJs.btCache;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }, function (_bulletEnvJs) {
      importFunc = _bulletEnvJs.importFunc;
    }],
    execute: function () {
      contactsPool = [];
      v3_0 = CC_V3_0;
      v3_1 = CC_V3_1;
      v3_2 = CC_V3_2;
      c_0 = CC_COLOR_0;
      emitHit = new CharacterControllerContact();
      _export("BulletWorld", BulletWorld = /*#__PURE__*/function () {
        var _proto = BulletWorld.prototype;
        _proto.setDefaultMaterial = function setDefaultMaterial(v) {
          //empty
        };
        _proto.setAllowSleep = function setAllowSleep(v) {
          bt.ccDiscreteDynamicsWorld_setAllowSleep(this._world, v);
        };
        _proto.setGravity = function setGravity(gravity) {
          bt.DynamicsWorld_setGravity(this._world, cocos2BulletVec3(BulletCache.instance.BT_V3_0, gravity));
        };
        _proto.updateNeedEmitEvents = function updateNeedEmitEvents(v) {
          if (!this.ghosts) return; // return if destroyed
          if (v) {
            this._needEmitEvents = true;
          } else {
            this._needEmitEvents = false;
            for (var i = 0; i < this.ghosts.length; i++) {
              var ghost = this.ghosts[i];
              var shapes = ghost.ghostStruct.wrappedShapes;
              for (var j = 0; j < shapes.length; j++) {
                var collider = shapes[j].collider;
                if (collider.needCollisionEvent || collider.needTriggerEvent) {
                  this._needEmitEvents = true;
                  return;
                }
              }
            }
            for (var _i = 0; _i < this.bodies.length; _i++) {
              var body = this.bodies[_i];
              var _shapes = body.bodyStruct.wrappedShapes;
              for (var _j = 0; _j < _shapes.length; _j++) {
                var _collider = _shapes[_j].collider;
                if (_collider.needCollisionEvent || _collider.needTriggerEvent) {
                  this._needEmitEvents = true;
                  return;
                }
              }
            }
          }
        };
        _proto.updateNeedEmitCCTEvents = function updateNeedEmitCCTEvents(force) {
          if (!this.ccts) return; // return if already been removed from bullet world
          if (force) {
            this._needEmitCCTEvents = true;
          } else {
            this._needEmitCCTEvents = false;
            var ccts = this.ccts;
            var length = ccts.length;
            for (var i = 0; i < length; i++) {
              var cctCom = ccts[i].characterController;
              if (cctCom.needCollisionEvent) {
                this._needEmitCCTEvents = true;
                return;
              }
            }
          }
        };
        function BulletWorld() {
          this._world = void 0;
          this._broadphase = void 0;
          this._solver = void 0;
          this._dispatcher = void 0;
          this._debugDraw = void 0;
          this._debugLineCount = 0;
          this._MAX_DEBUG_LINE_COUNT = 16384;
          this._debugDrawFlags = EPhysicsDrawFlags.NONE;
          this._debugConstraintSize = 0.3;
          //B3_DEFAULT_DEBUGDRAW_SIZE
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
          var debugDraw = bt.DebugDraw.implement(importFunc); //new PhysicsDebugDraw();
          this._debugDraw = debugDraw.$$.ptr;
          bt.CollisionWorld_setDebugDrawer(this._world, this._debugDraw);
          bt.DebugDraw_setDebugMode(this._debugDraw, EBulletDebugDrawModes.DBG_NoDebug);
          bt.DebugDraw_setAABBColor(this._debugDraw, 0, 1, 1);
          // set color for all shapes
          bt.DebugDraw_setActiveObjectColor(this._debugDraw, 1, 0, 1);
          bt.DebugDraw_setDeactiveObjectColor(this._debugDraw, 1, 0, 1);
          bt.DebugDraw_setWantsDeactivationObjectColor(this._debugDraw, 1, 0, 1);
          bt.DebugDraw_setDisabledDeactivationObjectColor(this._debugDraw, 1, 0, 1);
          bt.DebugDraw_setDisabledSimulationObjectColor(this._debugDraw, 1, 0, 1);
          // set color for all shapes END
          bt.DebugDraw_setConstraintLimitColor(this._debugDraw, 0.5, 0.5, 0.5);
        }
        _proto.destroy = function destroy() {
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
        };
        _proto.step = function step(deltaTime, timeSinceLastCalled, maxSubStep) {
          if (maxSubStep === void 0) {
            maxSubStep = 0;
          }
          if (!this.bodies.length && !this.ghosts.length) return;
          if (timeSinceLastCalled === undefined) timeSinceLastCalled = deltaTime;
          bt.DynamicsWorld_stepSimulation(this._world, timeSinceLastCalled, maxSubStep, deltaTime);
          bt.CollisionWorld_debugDrawWorld(this._world);
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          // Use reverse traversal order, because update dirty will mess up the ghosts or bodyies array.
          for (var i = this.ghosts.length - 1; i >= 0; i--) {
            var ghost = this.ghosts[i]; // Use temporary object, same reason as above
            ghost.updateDirty();
            ghost.syncSceneToGhost();
          }
          for (var _i2 = this.bodies.length - 1; _i2 >= 0; _i2--) {
            var body = this.bodies[_i2];
            body.updateDirty();
            body.syncSceneToPhysics();
          }
          var ccts = this.ccts;
          var length = ccts.length;
          for (var _i3 = length - 1; _i3 >= 0; _i3--) {
            var cct = ccts[_i3];
            cct.updateDirty();
            cct.syncSceneToPhysics();
          }
        };
        _proto.syncAfterEvents = function syncAfterEvents() {
          if (!this._needSyncAfterEvents) return;
          this.syncSceneToPhysics();
        };
        _proto.raycast = function raycast(worldRay, options, pool, results) {
          worldRay.computeHit(v3_0, options.maxDistance);
          var to = cocos2BulletVec3(BulletCache.instance.BT_V3_0, v3_0);
          var from = cocos2BulletVec3(BulletCache.instance.BT_V3_1, worldRay.o);
          var allHitsCB = bt.ccAllRayCallback_static();
          bt.ccAllRayCallback_reset(allHitsCB, from, to, options.mask >>> 0, options.queryTrigger);
          bt.ccAllRayCallback_setFlags(allHitsCB, EBulletTriangleRaycastFlag.UseSubSimplexConvexCastRaytest);
          bt.CollisionWorld_rayTest(this._world, from, to, allHitsCB);
          if (bt.RayCallback_hasHit(allHitsCB)) {
            var posArray = bt.ccAllRayCallback_getHitPointWorld(allHitsCB);
            var normalArray = bt.ccAllRayCallback_getHitNormalWorld(allHitsCB);
            var ptrArray = bt.ccAllRayCallback_getCollisionShapePtrs(allHitsCB);
            for (var i = 0, n = bt.int_array_size(ptrArray); i < n; i++) {
              bullet2CocosVec3(v3_0, bt.Vec3_array_at(posArray, i));
              bullet2CocosVec3(v3_1, bt.Vec3_array_at(normalArray, i));
              var shape = BulletCache.getWrapper(bt.int_array_at(ptrArray, i), BulletShape.TYPE);
              var r = pool.add();
              results.push(r);
              r._assign(v3_0, Vec3.distance(worldRay.o, v3_0), shape.collider, v3_1);
            }
            return true;
          }
          return false;
        };
        _proto.raycastClosest = function raycastClosest(worldRay, options, result) {
          worldRay.computeHit(v3_0, options.maxDistance);
          var to = cocos2BulletVec3(BulletCache.instance.BT_V3_0, v3_0);
          var from = cocos2BulletVec3(BulletCache.instance.BT_V3_1, worldRay.o);
          var closeHitCB = bt.ccClosestRayCallback_static();
          bt.ccClosestRayCallback_reset(closeHitCB, from, to, options.mask >>> 0, options.queryTrigger);
          bt.ccClosestRayCallback_setFlags(closeHitCB, EBulletTriangleRaycastFlag.UseSubSimplexConvexCastRaytest);
          bt.CollisionWorld_rayTest(this._world, from, to, closeHitCB);
          if (bt.RayCallback_hasHit(closeHitCB)) {
            bullet2CocosVec3(v3_0, bt.ccClosestRayCallback_getHitPointWorld(closeHitCB));
            bullet2CocosVec3(v3_1, bt.ccClosestRayCallback_getHitNormalWorld(closeHitCB));
            var shape = BulletCache.getWrapper(bt.ccClosestRayCallback_getCollisionShapePtr(closeHitCB), BulletShape.TYPE);
            result._assign(v3_0, Vec3.distance(worldRay.o, v3_0), shape.collider, v3_1);
            return true;
          }
          return false;
        };
        _proto.sweepBox = function sweepBox(worldRay, halfExtent, orientation, options, pool, results) {
          // cast shape
          var hf = BulletCache.instance.BT_V3_0;
          cocos2BulletVec3(hf, halfExtent);
          if (!BulletWorld._sweepBoxGeometry) {
            BulletWorld._sweepBoxGeometry = bt.BoxShape_new(hf);
          }
          bt.BoxShape_setUnscaledHalfExtents(BulletWorld._sweepBoxGeometry, hf);
          return this.sweep(worldRay, BulletWorld._sweepBoxGeometry, orientation, options, pool, results);
        };
        _proto.sweepBoxClosest = function sweepBoxClosest(worldRay, halfExtent, orientation, options, result) {
          // cast shape
          var hf = BulletCache.instance.BT_V3_0;
          cocos2BulletVec3(hf, halfExtent);
          if (!BulletWorld._sweepBoxGeometry) {
            BulletWorld._sweepBoxGeometry = bt.BoxShape_new(hf);
          }
          bt.BoxShape_setUnscaledHalfExtents(BulletWorld._sweepBoxGeometry, hf);
          return this.sweepClosest(worldRay, BulletWorld._sweepBoxGeometry, orientation, options, result);
        };
        _proto.sweepSphere = function sweepSphere(worldRay, radius, options, pool, results) {
          // cast shape
          if (!BulletWorld._sweepSphereGeometry) {
            BulletWorld._sweepSphereGeometry = bt.SphereShape_new(radius);
          }
          bt.SphereShape_setUnscaledRadius(BulletWorld._sweepSphereGeometry, radius);
          return this.sweep(worldRay, BulletWorld._sweepSphereGeometry, Quat.IDENTITY, options, pool, results);
        };
        _proto.sweepSphereClosest = function sweepSphereClosest(worldRay, radius, options, result) {
          // cast shape
          if (!BulletWorld._sweepSphereGeometry) {
            BulletWorld._sweepSphereGeometry = bt.SphereShape_new(radius);
          }
          bt.SphereShape_setUnscaledRadius(BulletWorld._sweepSphereGeometry, radius);
          return this.sweepClosest(worldRay, BulletWorld._sweepSphereGeometry, Quat.IDENTITY, options, result);
        };
        _proto.sweepCapsule = function sweepCapsule(worldRay, radius, height, orientation, options, pool, results) {
          // cast shape
          if (!BulletWorld._sweepCapsuleGeometry) {
            BulletWorld._sweepCapsuleGeometry = bt.CapsuleShape_new(radius, height);
          }
          bt.CapsuleShape_updateProp(BulletWorld._sweepCapsuleGeometry, radius, height * 0.5, 1);
          return this.sweep(worldRay, BulletWorld._sweepCapsuleGeometry, orientation, options, pool, results);
        };
        _proto.sweepCapsuleClosest = function sweepCapsuleClosest(worldRay, radius, height, orientation, options, result) {
          // cast shape
          if (!BulletWorld._sweepCapsuleGeometry) {
            BulletWorld._sweepCapsuleGeometry = bt.CapsuleShape_new(radius, height);
          }
          bt.CapsuleShape_updateProp(BulletWorld._sweepCapsuleGeometry, radius, height * 0.5, 1);
          return this.sweepClosest(worldRay, BulletWorld._sweepCapsuleGeometry, orientation, options, result);
        };
        _proto.sweep = function sweep(worldRay, btShapePtr, orientation, options, pool, results) {
          var BT_fromTransform = BulletCache.instance.BT_TRANSFORM_0;
          var BT_toTransform = BulletCache.instance.BT_TRANSFORM_1;
          var BT_orientation = BulletCache.instance.BT_QUAT_0;

          // from transform
          cocos2BulletVec3(bt.Transform_getOrigin(BT_fromTransform), worldRay.o);
          cocos2BulletQuat(BT_orientation, orientation);
          bt.Transform_setRotation(BT_fromTransform, BT_orientation);

          // to transform
          worldRay.computeHit(v3_0, options.maxDistance);
          cocos2BulletVec3(bt.Transform_getOrigin(BT_toTransform), v3_0);
          cocos2BulletQuat(BT_orientation, orientation);
          bt.Transform_setRotation(BT_toTransform, BT_orientation);
          var allHitsCB = bt.ccAllConvexCallback_static();
          bt.ccAllConvexCallback_reset(allHitsCB, BT_fromTransform, BT_toTransform, options.mask >>> 0, options.queryTrigger);
          bt.CollisionWorld_convexSweepTest(this._world, btShapePtr, BT_fromTransform, BT_toTransform, allHitsCB, 0);
          if (bt.ConvexCallback_hasHit(allHitsCB)) {
            var posArray = bt.ccAllConvexCallback_getHitPointWorld(allHitsCB);
            var normalArray = bt.ccAllConvexCallback_getHitNormalWorld(allHitsCB);
            var ptrArray = bt.ccAllConvexCallback_getCollisionShapePtrs(allHitsCB);
            for (var i = 0, n = bt.int_array_size(ptrArray); i < n; i++) {
              bullet2CocosVec3(v3_0, bt.Vec3_array_at(posArray, i));
              bullet2CocosVec3(v3_1, bt.Vec3_array_at(normalArray, i));
              var shape = BulletCache.getWrapper(bt.int_array_at(ptrArray, i), BulletShape.TYPE);
              var r = pool.add();
              results.push(r);
              r._assign(v3_0, Vec3.distance(worldRay.o, v3_0), shape.collider, v3_1);
            }
            return true;
          }
          return false;
        };
        _proto.sweepClosest = function sweepClosest(worldRay, btShapePtr, orientation, options, result) {
          var BT_fromTransform = BulletCache.instance.BT_TRANSFORM_0;
          var BT_toTransform = BulletCache.instance.BT_TRANSFORM_1;
          var BT_orientation = BulletCache.instance.BT_QUAT_0;

          // from transform
          cocos2BulletVec3(bt.Transform_getOrigin(BT_fromTransform), worldRay.o);
          cocos2BulletQuat(BT_orientation, orientation);
          bt.Transform_setRotation(BT_fromTransform, BT_orientation);

          // to transform
          worldRay.computeHit(v3_0, options.maxDistance);
          cocos2BulletVec3(bt.Transform_getOrigin(BT_toTransform), v3_0);
          cocos2BulletQuat(BT_orientation, orientation);
          bt.Transform_setRotation(BT_toTransform, BT_orientation);
          var closeHitCB = bt.ccClosestConvexCallback_static();
          bt.ccClosestConvexCallback_reset(closeHitCB, BT_fromTransform, BT_toTransform, options.mask >>> 0, options.queryTrigger);
          bt.CollisionWorld_convexSweepTest(this._world, btShapePtr, BT_fromTransform, BT_toTransform, closeHitCB, 0);
          if (bt.ConvexCallback_hasHit(closeHitCB)) {
            bullet2CocosVec3(v3_0, bt.ccClosestConvexCallback_getHitPointWorld(closeHitCB));
            bullet2CocosVec3(v3_1, bt.ccClosestConvexCallback_getHitNormalWorld(closeHitCB));
            var shape = BulletCache.getWrapper(bt.ccClosestConvexCallback_getCollisionShapePtr(closeHitCB), BulletShape.TYPE);
            result._assign(v3_0, Vec3.distance(worldRay.o, v3_0), shape.collider, v3_1);
            return true;
          }
          return false;
        };
        _proto.getSharedBody = function getSharedBody(node, wrappedBody) {
          return BulletSharedBody.getSharedBody(node, this, wrappedBody);
        };
        _proto.addSharedBody = function addSharedBody(sharedBody) {
          var i = this.bodies.indexOf(sharedBody);
          if (i < 0) {
            this.bodies.push(sharedBody);
            var group = sharedBody.collisionFilterGroup;
            var mask = sharedBody.collisionFilterMask;
            bt.DynamicsWorld_addRigidBody(this._world, sharedBody.body, group >>> 0, mask >>> 0);
          }
        };
        _proto.removeSharedBody = function removeSharedBody(sharedBody) {
          var i = this.bodies.indexOf(sharedBody);
          if (i >= 0) {
            js.array.fastRemoveAt(this.bodies, i);
            bt.DynamicsWorld_removeRigidBody(this._world, sharedBody.body);
          }
        };
        _proto.addGhostObject = function addGhostObject(sharedBody) {
          var i = this.ghosts.indexOf(sharedBody);
          if (i < 0) {
            this.ghosts.push(sharedBody);
            var group = sharedBody.collisionFilterGroup;
            var mask = sharedBody.collisionFilterMask;
            bt.CollisionWorld_addCollisionObject(this._world, sharedBody.ghost, group >>> 0, mask >>> 0);
          }
        };
        _proto.removeGhostObject = function removeGhostObject(sharedBody) {
          var i = this.ghosts.indexOf(sharedBody);
          if (i >= 0) {
            js.array.fastRemoveAt(this.ghosts, i);
            bt.CollisionWorld_removeCollisionObject(this._world, sharedBody.ghost);
          }
        };
        _proto.addCCT = function addCCT(cct) {
          var index = this.ccts.indexOf(cct);
          if (index < 0) {
            this.ccts.push(cct);
            var cctGhost = bt.CharacterController_getGhostObject(cct.impl);
            var group = cct.getGroup();
            var mask = cct.getMask();
            bt.CollisionWorld_addCollisionObject(this._world, cctGhost, group >>> 0, mask >>> 0);
            bt.DynamicsWorld_addAction(this._world, cct.impl);
          }
        };
        _proto.removeCCT = function removeCCT(cct) {
          var index = this.ccts.indexOf(cct);
          if (index >= 0) {
            js.array.fastRemoveAt(this.ccts, index);
            var cctGhost = bt.CharacterController_getGhostObject(cct.impl);
            bt.CollisionWorld_removeCollisionObject(this._world, cctGhost);
            bt.DynamicsWorld_removeAction(this._world, cct.impl);
          }
        };
        _proto.addConstraint = function addConstraint(constraint) {
          var i = this.constraints.indexOf(constraint);
          if (i < 0) {
            this.constraints.push(constraint);
            bt.DynamicsWorld_addConstraint(this.impl, constraint.impl, !constraint.constraint.enableCollision);
            constraint.index = i;
          }
        };
        _proto.removeConstraint = function removeConstraint(constraint) {
          var i = this.constraints.indexOf(constraint);
          if (i >= 0) {
            this.constraints.splice(i, 1);
            bt.DynamicsWorld_removeConstraint(this.impl, constraint.impl);
            constraint.index = -1;
          }
        };
        _proto.emitEvents = function emitEvents() {
          this._needSyncAfterEvents = false;
          if (this._needEmitEvents) {
            this.gatherConatactData();
            this.emitCollisionAndTriggerEvent();
            // emit cct trigger events
            this.emitCCTTriggerEvent();
          }

          // emit cct collision events
          if (this._needEmitCCTEvents) {
            this.emitCCTCollisionEvent();
          }
        };
        _proto.emitCollisionAndTriggerEvent = function emitCollisionAndTriggerEvent() {
          // is enter or stay
          var dicL = this.contactsDic.getLength();
          while (dicL--) {
            contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
            CollisionEventObject.contacts.length = 0;
            var key = this.contactsDic.getKeyByIndex(dicL);
            var data = this.contactsDic.getDataByKey(key);
            var shape0 = data.shape0;
            var shape1 = data.shape1;
            this.oldContactsDic.set(shape0.id, shape1.id, data);
            var collider0 = shape0.collider;
            var collider1 = shape1.collider;
            if (collider0 && collider1) {
              var isTrigger = collider0.isTrigger || collider1.isTrigger;
              if (isTrigger) {
                if (this.triggerArrayMat.get(shape0.id, shape1.id)) {
                  TriggerEventObject.type = 'onTriggerStay';
                } else {
                  TriggerEventObject.type = 'onTriggerEnter';
                  this.triggerArrayMat.set(shape0.id, shape1.id, true);
                }
                TriggerEventObject.impl = data.impl; //btPersistentManifold
                TriggerEventObject.selfCollider = collider0;
                TriggerEventObject.otherCollider = collider1;
                collider0.emit(TriggerEventObject.type, TriggerEventObject);
                TriggerEventObject.selfCollider = collider1;
                TriggerEventObject.otherCollider = collider0;
                collider1.emit(TriggerEventObject.type, TriggerEventObject);
                this._needSyncAfterEvents = true;
              } else {
                var body0 = collider0.attachedRigidBody;
                var body1 = collider1.attachedRigidBody;
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
                for (var i = 0; i < data.contacts.length; i++) {
                  var cq = data.contacts[i]; //btManifoldPoint
                  if (contactsPool.length > 0) {
                    var c = contactsPool.pop();
                    c.impl = cq; //btManifoldPoint
                    CollisionEventObject.contacts.push(c);
                  } else {
                    var _c = new BulletContactData(CollisionEventObject);
                    _c.impl = cq; //btManifoldPoint
                    CollisionEventObject.contacts.push(_c);
                  }
                }
                CollisionEventObject.impl = data.impl; //btPersistentManifold
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

          // is exit
          var oldDicL = this.oldContactsDic.getLength();
          while (oldDicL--) {
            var _key = this.oldContactsDic.getKeyByIndex(oldDicL);
            var _data = this.oldContactsDic.getDataByKey(_key);
            var _shape = _data.shape0;
            var _shape2 = _data.shape1;
            var _collider2 = _shape.collider;
            var _collider3 = _shape2.collider;
            if (_collider2 && _collider3) {
              var _isTrigger = _collider2.isTrigger || _collider3.isTrigger;
              if (this.contactsDic.getDataByKey(_key) == null) {
                if (_isTrigger) {
                  if (this.triggerArrayMat.get(_shape.id, _shape2.id)) {
                    TriggerEventObject.type = 'onTriggerExit';
                    TriggerEventObject.selfCollider = _collider2;
                    TriggerEventObject.otherCollider = _collider3;
                    _collider2.emit(TriggerEventObject.type, TriggerEventObject);
                    TriggerEventObject.selfCollider = _collider3;
                    TriggerEventObject.otherCollider = _collider2;
                    _collider3.emit(TriggerEventObject.type, TriggerEventObject);
                    this.triggerArrayMat.set(_shape.id, _shape2.id, false);
                    this.oldContactsDic.set(_shape.id, _shape2.id, null);
                    this._needSyncAfterEvents = true;
                  }
                } else if (this.collisionArrayMat.get(_shape.id, _shape2.id)) {
                  contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
                  CollisionEventObject.contacts.length = 0;
                  CollisionEventObject.type = 'onCollisionExit';
                  CollisionEventObject.selfCollider = _collider2;
                  CollisionEventObject.otherCollider = _collider3;
                  _collider2.emit(CollisionEventObject.type, CollisionEventObject);
                  CollisionEventObject.selfCollider = _collider3;
                  CollisionEventObject.otherCollider = _collider2;
                  _collider3.emit(CollisionEventObject.type, CollisionEventObject);
                  this.collisionArrayMat.set(_shape.id, _shape2.id, false);
                  this.oldContactsDic.set(_shape.id, _shape2.id, null);
                  this._needSyncAfterEvents = true;
                }
              }
            }
          }
          this.contactsDic.reset();
        };
        _proto.emitCCTTriggerEvent = function emitCCTTriggerEvent() {
          // is enter or stay
          var dicL = this.cctContactsDic.getLength();
          while (dicL--) {
            var key = this.cctContactsDic.getKeyByIndex(dicL);
            var data = this.cctContactsDic.getDataByKey(key);
            var shape = data.shape;
            var cct = data.cct;
            this.cctOldContactsDic.set(shape.id, cct.id, data);
            var collider = shape.collider;
            var characterController = cct.characterController;
            if (collider && characterController) {
              var isTrigger = collider.isTrigger;
              if (isTrigger) {
                if (this.triggerArrayMat.get(shape.id, cct.id)) {
                  CharacterTriggerEventObject.type = 'onControllerTriggerStay';
                } else {
                  CharacterTriggerEventObject.type = 'onControllerTriggerEnter';
                  this.triggerArrayMat.set(shape.id, cct.id, true);
                }
                CharacterTriggerEventObject.impl = data.impl; //btPersistentManifold
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

          // is exit
          var oldDicL = this.cctOldContactsDic.getLength();
          while (oldDicL--) {
            var _key2 = this.cctOldContactsDic.getKeyByIndex(oldDicL);
            var _data2 = this.cctOldContactsDic.getDataByKey(_key2);
            var _shape3 = _data2.shape;
            var _cct = _data2.cct;
            var _collider4 = _shape3.collider;
            var _characterController = _cct.characterController;
            if (_collider4 && _characterController) {
              var _isTrigger2 = _collider4.isTrigger;
              if (this.cctContactsDic.getDataByKey(_key2) == null) {
                if (_isTrigger2) {
                  if (this.triggerArrayMat.get(_shape3.id, _cct.id)) {
                    CharacterTriggerEventObject.type = 'onControllerTriggerExit';
                    CharacterTriggerEventObject.collider = _collider4;
                    CharacterTriggerEventObject.characterController = _characterController;
                    _collider4.emit(CharacterTriggerEventObject.type, CharacterTriggerEventObject);
                    CharacterTriggerEventObject.collider = _collider4;
                    CharacterTriggerEventObject.characterController = _characterController;
                    _characterController.emit(CharacterTriggerEventObject.type, CharacterTriggerEventObject);
                    this.triggerArrayMat.set(_shape3.id, _cct.id, false);
                    this.cctOldContactsDic.set(_shape3.id, _cct.id, null);
                    this._needSyncAfterEvents = true;
                  }
                }
              }
            }
          }
          this.cctContactsDic.reset();
        };
        _proto.emitCCTCollisionEvent = function emitCCTCollisionEvent() {
          var dicL = this.cctShapeEventDic.getLength();
          while (dicL--) {
            var _emitHit$controller;
            var key = this.cctShapeEventDic.getKeyByIndex(dicL);
            var data = this.cctShapeEventDic.getDataByKey(key);
            var cct = data.BulletCharacterController;
            var shape = data.BulletShape;
            var worldPos = data.worldPos;
            var worldNormal = data.worldNormal;
            var motionDir = data.motionDir;
            var motionLength = data.motionLength;
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
        };
        _proto.gatherConatactData = function gatherConatactData() {
          var numManifolds = bt.Dispatcher_getNumManifolds(this._dispatcher);
          for (var i = 0; i < numManifolds; i++) {
            var manifold = bt.Dispatcher_getManifoldByIndexInternal(this._dispatcher, i); //btPersistentManifold
            var numContacts = bt.PersistentManifold_getNumContacts(manifold);
            for (var j = 0; j < numContacts; j++) {
              var manifoldPoint = bt.PersistentManifold_getContactPoint(manifold, j); //btManifoldPoint
              var s0 = bt.ManifoldPoint_getShape0(manifoldPoint);
              var s1 = bt.ManifoldPoint_getShape1(manifoldPoint);
              var processed = false;
              if (!processed) {
                var shape0 = BulletCache.getWrapper(s0, BulletShape.TYPE);
                var shape1 = BulletCache.getWrapper(s1, BulletShape.TYPE);
                if (shape0 && shape1) {
                  processed = true;
                  if (shape0.collider.needTriggerEvent || shape1.collider.needTriggerEvent || shape0.collider.needCollisionEvent || shape1.collider.needCollisionEvent) {
                    // current contact
                    var item = this.contactsDic.get(shape0.id, shape1.id);
                    if (!item) {
                      item = this.contactsDic.set(shape0.id, shape1.id, {
                        shape0: shape0,
                        shape1: shape1,
                        contacts: [],
                        impl: manifold
                      });
                    }
                    item.contacts.push(manifoldPoint); //btManifoldPoint
                  }
                }
              }

              //cct - collider trigger event
              if (!processed) {
                var shape = BulletCache.getWrapper(s0, BulletShape.TYPE);
                var cct = BulletCache.getWrapper(s1, btCache.CCT_CACHE_NAME);
                if (shape && cct) {
                  processed = true;
                  if (shape.collider.needTriggerEvent) {
                    // current contact
                    var _item = this.cctContactsDic.get(shape.id, cct.id);
                    if (!_item) {
                      _item = this.cctContactsDic.set(shape.id, cct.id, {
                        shape: shape,
                        cct: cct,
                        contacts: [],
                        impl: manifold
                      });
                    }
                    _item.contacts.push(manifoldPoint); //btManifoldPoint
                    processed = true;
                  }
                }
              }

              //cct - collider trigger event
              if (!processed) {
                var _cct2 = BulletCache.getWrapper(s0, btCache.CCT_CACHE_NAME);
                var _shape4 = BulletCache.getWrapper(s1, BulletShape.TYPE);
                if (_shape4 && _cct2) {
                  processed = true;
                  if (_shape4.collider.needTriggerEvent) {
                    // current contact
                    var _item2 = this.cctContactsDic.get(_shape4.id, _cct2.id);
                    if (!_item2) {
                      _item2 = this.cctContactsDic.set(_shape4.id, _cct2.id, {
                        shape: _shape4,
                        cct: _cct2,
                        contacts: [],
                        impl: manifold
                      });
                    }
                    _item2.contacts.push(manifoldPoint); //btManifoldPoint
                    processed = true;
                  }
                }
              }
            }
          }
        };
        _proto._setDebugDrawMode = function _setDebugDrawMode() {
          var btDrawMode = 0;
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
        };
        _proto._getDebugRenderer = function _getDebugRenderer() {
          var _mainWindow;
          var cameras = (_mainWindow = director.root.mainWindow) === null || _mainWindow === void 0 ? void 0 : _mainWindow.cameras;
          if (!cameras) return null;
          if (cameras.length === 0) return null;
          if (!cameras[0]) return null;
          cameras[0].initGeometryRenderer();
          return cameras[0].geometryRenderer;
        }

        // callback function called by bullet wasm
        ;
        _proto.onDebugDrawLine = function onDebugDrawLine(from, to, color) {
          var debugRenderer = this._getDebugRenderer();
          if (debugRenderer && this._debugLineCount < this._MAX_DEBUG_LINE_COUNT) {
            this._debugLineCount++;
            bullet2CocosVec3(v3_0, from);
            bullet2CocosVec3(v3_1, to);
            bullet2CocosVec3(v3_2, color);
            c_0.set(v3_2.x * 255, v3_2.y * 255, v3_2.z * 255, 255);
            debugRenderer.addLine(v3_0, v3_1, c_0);
          }
        };
        _proto.onClearLines = function onClearLines() {
          this._debugLineCount = 0;
        };
        _createClass(BulletWorld, [{
          key: "impl",
          get: function get() {
            return this._world;
          }
        }, {
          key: "debugDrawFlags",
          get: function get() {
            return this._debugDrawFlags;
          },
          set: function set(v) {
            this._debugDrawFlags = v;
            if (this._debugDraw) {
              this._setDebugDrawMode();
            }
          }
        }, {
          key: "debugDrawConstraintSize",
          get: function get() {
            return this._debugConstraintSize;
          },
          set: function set(v) {
            this._debugConstraintSize = v;
            for (var i = 0; i < this.constraints.length; i++) {
              this.constraints[i].updateDebugDrawSize();
            }
          }
        }]);
        return BulletWorld;
      }());
      BulletWorld._sweepBoxGeometry = void 0;
      BulletWorld._sweepSphereGeometry = void 0;
      BulletWorld._sweepCapsuleGeometry = void 0;
    }
  };
});