System.register("q-bundled:///fs/cocos/physics/bullet/bullet-shared-body.js", ["../../scene-graph/node-enum.js", "./bullet-utils.js", "./bullet-enum.js", "./bullet-cache.js", "../framework/index.js", "../framework/physics-enum.js", "../../core/index.js", "./instantiated.js", "./bullet-env.js"], function (_export, _context) {
  "use strict";

  var TransformBit, bullet2CocosVec3, cocos2BulletQuat, cocos2BulletVec3, bullet2CocosQuat, btCollisionFlags, btCollisionObjectStates, EBtSharedBodyDirty, CC_V3_0, CC_QUAT_0, BulletCache, PhysicsSystem, ERigidBodyType, PhysicsGroup, js, bt, btCache, EBulletType, importFunc, _class, v3_0, quat_0, IDCounter, BulletSharedBody;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }, function (_bulletUtilsJs) {
      bullet2CocosVec3 = _bulletUtilsJs.bullet2CocosVec3;
      cocos2BulletQuat = _bulletUtilsJs.cocos2BulletQuat;
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
      bullet2CocosQuat = _bulletUtilsJs.bullet2CocosQuat;
    }, function (_bulletEnumJs) {
      btCollisionFlags = _bulletEnumJs.btCollisionFlags;
      btCollisionObjectStates = _bulletEnumJs.btCollisionObjectStates;
      EBtSharedBodyDirty = _bulletEnumJs.EBtSharedBodyDirty;
    }, function (_bulletCacheJs) {
      CC_V3_0 = _bulletCacheJs.CC_V3_0;
      CC_QUAT_0 = _bulletCacheJs.CC_QUAT_0;
      BulletCache = _bulletCacheJs.BulletCache;
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_frameworkPhysicsEnumJs) {
      ERigidBodyType = _frameworkPhysicsEnumJs.ERigidBodyType;
      PhysicsGroup = _frameworkPhysicsEnumJs.PhysicsGroup;
    }, function (_coreIndexJs) {
      js = _coreIndexJs.js;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
      btCache = _instantiatedJs.btCache;
      EBulletType = _instantiatedJs.EBulletType;
    }, function (_bulletEnvJs) {
      importFunc = _bulletEnvJs.importFunc;
    }],
    execute: function () {
      v3_0 = CC_V3_0;
      quat_0 = CC_QUAT_0;
      IDCounter = 0;
      /**
       * shared object, node : shared = 1 : 1
       * body for static \ dynamic \ kinematic (collider)
       * ghost for trigger
       */
      _export("BulletSharedBody", BulletSharedBody = /*#__PURE__*/function () {
        BulletSharedBody.getSharedBody = function getSharedBody(node, wrappedWorld, wrappedBody) {
          var key = node.uuid;
          var newSB;
          if (BulletSharedBody.sharedBodesMap.has(key)) {
            newSB = BulletSharedBody.sharedBodesMap.get(key);
          } else {
            newSB = new BulletSharedBody(node, wrappedWorld);
            var g = PhysicsGroup.DEFAULT;
            var m = PhysicsSystem.instance.collisionMatrix[g];
            newSB._collisionFilterGroup = g;
            newSB._collisionFilterMask = m;
            BulletSharedBody.sharedBodesMap.set(node.uuid, newSB);
          }
          if (wrappedBody) {
            newSB._wrappedBody = wrappedBody;
            var _g = wrappedBody.rigidBody.group;
            var _m = PhysicsSystem.instance.collisionMatrix[_g];
            newSB._collisionFilterGroup = _g;
            newSB._collisionFilterMask = _m;
          }
          return newSB;
        };
        function BulletSharedBody(node, wrappedWorld) {
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
        var _proto = BulletSharedBody.prototype;
        _proto._instantiateBodyStruct = function _instantiateBodyStruct() {
          if (this._bodyStruct) return;
          var mass = 0;
          if (this._wrappedBody && this._wrappedBody.rigidBody.enabled && this._wrappedBody.rigidBody.isDynamic) {
            mass = this._wrappedBody.rigidBody.mass;
          }
          var trans = BulletCache.instance.BT_TRANSFORM_0;
          var quat = BulletCache.instance.BT_QUAT_0;
          cocos2BulletVec3(bt.Transform_getOrigin(trans), this.node.worldPosition);
          cocos2BulletQuat(quat, this.node.worldRotation);
          bt.Transform_setRotation(trans, quat);
          var motionState = bt.MotionState.implement(importFunc).$$.ptr;
          bt.ccMotionState_setup(motionState, this.id, trans);
          var body = bt.RigidBody_new(mass, motionState);
          var sleepTd = PhysicsSystem.instance.sleepThreshold;
          bt.RigidBody_setSleepingThresholds(body, sleepTd, sleepTd);
          this._bodyStruct = {
            id: IDCounter++,
            body: body,
            motionState: motionState,
            compound: bt.ccCompoundShape_new(),
            wrappedShapes: [],
            useCompound: false
          };
          BulletCache.setWrapper(this.id, btCache.BODY_CACHE_NAME, this);
          if (this._ghostStruct) bt.CollisionObject_setIgnoreCollisionCheck(this.ghost, this.body, true);
          if (this._wrappedBody) this.setBodyType(this._wrappedBody.rigidBody.type);
        };
        _proto._instantiateGhostStruct = function _instantiateGhostStruct() {
          if (this._ghostStruct) return;
          var ghost = bt.CollisionObject_new();
          var ghostShape = bt.ccCompoundShape_new();
          bt.CollisionObject_setCollisionShape(ghost, ghostShape);
          bt.CollisionObject_setCollisionFlags(ghost, btCollisionFlags.CF_STATIC_OBJECT | btCollisionFlags.CF_NO_CONTACT_RESPONSE);
          this._ghostStruct = {
            id: IDCounter++,
            ghost: ghost,
            compound: ghostShape,
            wrappedShapes: []
          };
          if (this._bodyStruct) bt.CollisionObject_setIgnoreCollisionCheck(this.body, this.ghost, true);
          if (this._wrappedBody) this.setGhostType(this._wrappedBody.rigidBody.type);
        };
        _proto.setType = function setType(v) {
          this.setBodyType(v);
          this.setGhostType(v);
        };
        _proto.setBodyType = function setBodyType(v) {
          if (this._bodyStruct && this._wrappedBody) {
            var body = this._bodyStruct.body;
            var wrap = this._wrappedBody;
            var com = wrap.rigidBody;
            var m_bcf = bt.CollisionObject_getCollisionFlags(body);
            var localInertia = BulletCache.instance.BT_V3_0;
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
        };
        _proto.setGhostType = function setGhostType(v) {
          if (this._ghostStruct) {
            var ghost = this._ghostStruct.ghost;
            var m_gcf = bt.CollisionObject_getCollisionFlags(ghost);
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
        };
        _proto.addShape = function addShape(v, isTrigger) {
          function switchShape(that, shape) {
            bt.CollisionObject_setCollisionShape(that.body, shape);
            that.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
            if (that._wrappedBody && that._wrappedBody.isEnabled) {
              that._wrappedBody.setMass(that._wrappedBody.rigidBody.mass);
            }
          }
          if (isTrigger) {
            var index = this.ghostStruct.wrappedShapes.indexOf(v);
            if (index < 0) {
              this.ghostStruct.wrappedShapes.push(v);
              v.setCompound(this.ghostCompoundShape);
              this.ghostEnabled = true;
            }
          } else {
            var _index = this.bodyStruct.wrappedShapes.indexOf(v);
            if (_index < 0) {
              this.bodyStruct.wrappedShapes.push(v);
              if (this.bodyStruct.useCompound) {
                v.setCompound(this.bodyCompoundShape);
              } else {
                var l = this.bodyStruct.wrappedShapes.length;
                if (l === 1 && !v.needCompound()) {
                  switchShape(this, v.impl);
                } else {
                  this.bodyStruct.useCompound = true;
                  for (var i = 0; i < l; i++) {
                    var childShape = this.bodyStruct.wrappedShapes[i];
                    childShape.setCompound(this.bodyCompoundShape);
                  }
                  switchShape(this, this.bodyStruct.compound);
                }
              }
              this.bodyEnabled = true;
            }
          }
        };
        _proto.removeShape = function removeShape(v, isTrigger) {
          if (isTrigger) {
            var index = this.ghostStruct.wrappedShapes.indexOf(v);
            if (index >= 0) {
              js.array.fastRemoveAt(this.ghostStruct.wrappedShapes, index);
              v.setCompound(0);
              this.ghostEnabled = false;
            }
          } else {
            var _index2 = this.bodyStruct.wrappedShapes.indexOf(v);
            if (_index2 >= 0) {
              if (this.bodyStruct.useCompound) {
                v.setCompound(0);
              } else {
                bt.CollisionObject_setCollisionShape(this.body, bt.EmptyShape_static());
              }
              bt.CollisionObject_activate(this.body, true);
              this.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
              js.array.fastRemoveAt(this.bodyStruct.wrappedShapes, _index2);
              this.bodyEnabled = false;
            }
          }
        };
        _proto.addJoint = function addJoint(v, type) {
          if (type) {
            var i = this.wrappedJoints1.indexOf(v);
            if (i < 0) this.wrappedJoints1.push(v);
          } else {
            var _i = this.wrappedJoints0.indexOf(v);
            if (_i < 0) this.wrappedJoints0.push(v);
          }
        };
        _proto.removeJoint = function removeJoint(v, type) {
          if (type) {
            var i = this.wrappedJoints1.indexOf(v);
            if (i >= 0) js.array.fastRemoveAt(this.wrappedJoints1, i);
          } else {
            var _i2 = this.wrappedJoints0.indexOf(v);
            if (_i2 >= 0) js.array.fastRemoveAt(this.wrappedJoints0, _i2);
          }
        };
        _proto.updateDirty = function updateDirty() {
          if (this.dirty) {
            if (this.bodyIndex >= 0 && this.dirty & EBtSharedBodyDirty.BODY_RE_ADD) this.updateBodyByReAdd();
            if (this.ghostIndex >= 0 && this.dirty & EBtSharedBodyDirty.GHOST_RE_ADD) this.updateGhostByReAdd();
            this.dirty = 0;
          }
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          if (this.node.hasChangedFlags) {
            var bt_quat = BulletCache.instance.BT_QUAT_0;
            var bt_transform = bt.CollisionObject_getWorldTransform(this.body);
            cocos2BulletQuat(bt_quat, this.node.worldRotation);
            cocos2BulletVec3(bt.Transform_getOrigin(bt_transform), this.node.worldPosition);
            bt.Transform_setRotation(bt_transform, bt_quat);
            if (this.node.hasChangedFlags & TransformBit.SCALE) {
              this.syncBodyScale();
            }
            if (bt.CollisionObject_isKinematicObject(this.body)) {
              // Kinematic objects must be updated using motion state
              var ms = bt.RigidBody_getMotionState(this.body);
              if (ms) bt.MotionState_setWorldTransform(ms, bt_transform);
            } else if (this.isBodySleeping()) bt.CollisionObject_activate(this.body, false);
          }
        };
        _proto.syncPhysicsToScene = function syncPhysicsToScene() {
          if (bt.CollisionObject_isStaticOrKinematicObject(this.body)) return;
          this.syncPhysicsToGraphics();
        };
        _proto.syncPhysicsToGraphics = function syncPhysicsToGraphics() {
          if (this.isBodySleeping()) return;
          var bt_quat = BulletCache.instance.BT_QUAT_0;
          var bt_transform = BulletCache.instance.BT_TRANSFORM_0;
          bt.RigidBody_getWorldTransform(this.body, bt_transform);
          var originPosPtr = bt.Transform_getRotationAndOrigin(bt_transform, bt_quat);
          this.node.worldRotation = bullet2CocosQuat(quat_0, bt_quat);
          this.node.worldPosition = bullet2CocosVec3(v3_0, originPosPtr);

          // sync node to ghost
          if (this._ghostStruct) {
            var bt_transform1 = bt.CollisionObject_getWorldTransform(this.ghost);
            cocos2BulletVec3(bt.Transform_getOrigin(bt_transform1), this.node.worldPosition);
            cocos2BulletQuat(bt_quat, this.node.worldRotation);
            bt.Transform_setRotation(bt_transform1, bt_quat);
          }
        };
        _proto.syncSceneToGhost = function syncSceneToGhost() {
          if (this.node.hasChangedFlags) {
            var bt_quat = BulletCache.instance.BT_QUAT_0;
            var bt_transform = bt.CollisionObject_getWorldTransform(this.ghost);
            cocos2BulletVec3(bt.Transform_getOrigin(bt_transform), this.node.worldPosition);
            cocos2BulletQuat(bt_quat, this.node.worldRotation);
            bt.Transform_setRotation(bt_transform, bt_quat);
            if (this.node.hasChangedFlags & TransformBit.SCALE) this.syncGhostScale();
            bt.CollisionObject_activate(this.ghost, false);
          }
        };
        _proto.syncInitialBody = function syncInitialBody() {
          var bt_quat = BulletCache.instance.BT_QUAT_0;
          var bt_transform = bt.CollisionObject_getWorldTransform(this.body);
          cocos2BulletVec3(bt.Transform_getOrigin(bt_transform), this.node.worldPosition);
          cocos2BulletQuat(bt_quat, this.node.worldRotation);
          bt.Transform_setRotation(bt_transform, bt_quat);
          this.syncBodyScale();
          bt.CollisionObject_activate(this.body, false);
        };
        _proto.syncInitialGhost = function syncInitialGhost() {
          var bt_quat = BulletCache.instance.BT_QUAT_0;
          var bt_transform = bt.CollisionObject_getWorldTransform(this.ghost);
          cocos2BulletVec3(bt.Transform_getOrigin(bt_transform), this.node.worldPosition);
          cocos2BulletQuat(bt_quat, this.node.worldRotation);
          bt.Transform_setRotation(bt_transform, bt_quat);
          this.syncGhostScale();
          bt.CollisionObject_activate(this.body, false);
        };
        _proto.syncBodyScale = function syncBodyScale() {
          for (var i = 0; i < this.bodyStruct.wrappedShapes.length; i++) {
            this.bodyStruct.wrappedShapes[i].updateScale();
          }
          for (var _i3 = 0; _i3 < this.wrappedJoints0.length; _i3++) {
            this.wrappedJoints0[_i3].updateScale0();
          }
          for (var _i4 = 0; _i4 < this.wrappedJoints1.length; _i4++) {
            this.wrappedJoints1[_i4].updateScale1();
          }
        };
        _proto.syncGhostScale = function syncGhostScale() {
          for (var i = 0; i < this.ghostStruct.wrappedShapes.length; i++) {
            this.ghostStruct.wrappedShapes[i].updateScale();
          }
        }

        /**
         * see: https://pybullet.org/Bullet/phpBB3/viewtopic.php?f=9&t=5312&p=19094&hilit=how+to+change+group+mask#p19097
         */;
        _proto.updateBodyByReAdd = function updateBodyByReAdd() {
          if (this.bodyIndex >= 0) {
            this.wrappedWorld.removeSharedBody(this);
            this.bodyIndex = this.wrappedWorld.bodies.length;
            this.wrappedWorld.addSharedBody(this);
          }
        };
        _proto.updateGhostByReAdd = function updateGhostByReAdd() {
          if (this.ghostIndex >= 0) {
            this.wrappedWorld.removeGhostObject(this);
            this.ghostIndex = this.wrappedWorld.ghosts.length;
            this.wrappedWorld.addGhostObject(this);
          }
        };
        _proto.destroy = function destroy() {
          BulletSharedBody.sharedBodesMap["delete"](this.node.uuid);
          this.node = null;
          this.wrappedWorld = null;
          if (this._bodyStruct) {
            var bodyStruct = this._bodyStruct;
            BulletCache.delWrapper(bodyStruct.body, btCache.BODY_CACHE_NAME);
            bt._safe_delete(bodyStruct.motionState, EBulletType.EBulletTypeMotionState);
            bt._safe_delete(bodyStruct.compound, EBulletType.EBulletTypeCollisionShape);
            bt._safe_delete(bodyStruct.body, EBulletType.EBulletTypeCollisionObject);
            this._bodyStruct = null;
          }
          if (this._ghostStruct) {
            var ghostStruct = this._ghostStruct;
            bt._safe_delete(ghostStruct.compound, EBulletType.EBulletTypeCollisionShape);
            bt._safe_delete(ghostStruct.ghost, EBulletType.EBulletTypeCollisionObject);
            this._ghostStruct = null;
          }
        };
        _proto.isBodySleeping = function isBodySleeping() {
          return bt.CollisionObject_isSleeping(this.body);
        };
        _createClass(BulletSharedBody, [{
          key: "wrappedBody",
          get: function get() {
            return this._wrappedBody;
          }
        }, {
          key: "bodyCompoundShape",
          get: function get() {
            return this.bodyStruct.compound;
          }
        }, {
          key: "ghostCompoundShape",
          get: function get() {
            return this.ghostStruct.compound;
          }
        }, {
          key: "body",
          get: function get() {
            return this.bodyStruct.body;
          }
        }, {
          key: "ghost",
          get: function get() {
            return this.ghostStruct.ghost;
          }
        }, {
          key: "collisionFilterGroup",
          get: function get() {
            return this._collisionFilterGroup;
          },
          set: function set(v) {
            if (v !== this._collisionFilterGroup) {
              this._collisionFilterGroup = v;
              this.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
              this.dirty |= EBtSharedBodyDirty.GHOST_RE_ADD;
            }
          }
        }, {
          key: "collisionFilterMask",
          get: function get() {
            return this._collisionFilterMask;
          },
          set: function set(v) {
            if (v !== this._collisionFilterMask) {
              this._collisionFilterMask = v;
              this.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
              this.dirty |= EBtSharedBodyDirty.GHOST_RE_ADD;
            }
          }
        }, {
          key: "bodyStruct",
          get: function get() {
            this._instantiateBodyStruct();
            return this._bodyStruct;
          }
        }, {
          key: "ghostStruct",
          get: function get() {
            this._instantiateGhostStruct();
            return this._ghostStruct;
          }
        }, {
          key: "bodyEnabled",
          set:
          /**
           * add or remove from world \
           * add, if enable \
           * remove, if disable & shapes.length == 0 & wrappedBody disable
           */
          function set(v) {
            if (v) {
              if (this.bodyIndex < 0) {
                // add to world only if it is a dynamic body or having shapes.
                if (this.bodyStruct.wrappedShapes.length === 0) {
                  if (!this.wrappedBody) return;
                  if (!this.wrappedBody.rigidBody.isDynamic) return;
                }
                this.bodyIndex = this.wrappedWorld.bodies.length;
                this.wrappedWorld.addSharedBody(this);
                this.syncInitialBody();
              }
            } else if (this.bodyIndex >= 0) {
              var isRemoveBody = this.bodyStruct.wrappedShapes.length === 0 && this.wrappedBody == null || this.bodyStruct.wrappedShapes.length === 0 && this.wrappedBody != null && !this.wrappedBody.isEnabled || this.bodyStruct.wrappedShapes.length === 0 && this.wrappedBody != null && !this.wrappedBody.rigidBody.enabledInHierarchy;
              if (isRemoveBody) {
                bt.RigidBody_clearState(this.body); // clear velocity etc.
                this.bodyIndex = -1;
                this.wrappedWorld.removeSharedBody(this);
              }
            }
          }
        }, {
          key: "ghostEnabled",
          set: function set(v) {
            if (v) {
              if (this.ghostIndex < 0 && this.ghostStruct.wrappedShapes.length > 0) {
                this.ghostIndex = 1;
                this.wrappedWorld.addGhostObject(this);
                this.syncInitialGhost();
              }
            } else if (this.ghostIndex >= 0) {
              /** remove trigger */
              var isRemoveGhost = this.ghostStruct.wrappedShapes.length === 0 && this.ghost;
              if (isRemoveGhost) {
                this.ghostIndex = -1;
                this.wrappedWorld.removeGhostObject(this);
              }
            }
          }
        }, {
          key: "reference",
          set: function set(v) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            v ? this.ref++ : this.ref--;
            if (this.ref === 0) {
              this.destroy();
            }
          }
        }]);
        return BulletSharedBody;
      }());
      _class = BulletSharedBody;
      BulletSharedBody.idCounter = 0;
      BulletSharedBody.sharedBodesMap = new Map();
    }
  };
});