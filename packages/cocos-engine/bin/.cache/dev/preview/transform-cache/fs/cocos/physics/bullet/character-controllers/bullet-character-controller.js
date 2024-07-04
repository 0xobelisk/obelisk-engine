System.register("q-bundled:///fs/cocos/physics/bullet/character-controllers/bullet-character-controller.js", ["../../../core/index.js", "../../framework/index.js", "../bullet-cache.js", "../bullet-utils.js", "../instantiated.js", "../../framework/physics-enum.js", "../shapes/bullet-shape.js", "../../../core/utils/misc.js", "../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var error, Vec3, PhysicsSystem, BulletCache, bullet2CocosVec3, cocos2BulletVec3, bt, btCache, EBulletType, PhysicsGroup, BulletShape, degreesToRadians, TransformBit, v3_0, v3_1, v3_2, BulletCharacterController;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_coreIndexJs) {
      error = _coreIndexJs.error;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
    }, function (_bulletUtilsJs) {
      bullet2CocosVec3 = _bulletUtilsJs.bullet2CocosVec3;
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
      btCache = _instantiatedJs.btCache;
      EBulletType = _instantiatedJs.EBulletType;
    }, function (_frameworkPhysicsEnumJs) {
      PhysicsGroup = _frameworkPhysicsEnumJs.PhysicsGroup;
    }, function (_shapesBulletShapeJs) {
      BulletShape = _shapesBulletShapeJs.BulletShape;
    }, function (_coreUtilsMiscJs) {
      degreesToRadians = _coreUtilsMiscJs.degreesToRadians;
    }, function (_sceneGraphIndexJs) {
      TransformBit = _sceneGraphIndexJs.TransformBit;
    }],
    execute: function () {
      v3_0 = new Vec3(0, 0, 0);
      v3_1 = new Vec3(0, 0, 0);
      v3_2 = new Vec3(0, 0, 0);
      _export("BulletCharacterController", BulletCharacterController = /*#__PURE__*/function () {
        function BulletCharacterController() {
          this.wrappedWorld = void 0;
          this._isEnabled = false;
          this._impl = 0;
          //btCapsuleCharacterController
          this._comp = null;
          this._btCollisionFlags = 0;
          //: btControllerCollisionFlag
          this._word3 = 0;
          this._dirty = false;
          this._collisionFilterGroup = PhysicsGroup.DEFAULT;
          this._collisionFilterMask = -1;
          this.id = BulletCharacterController.idCounter++;
          this.wrappedWorld = PhysicsSystem.instance.physicsWorld;
        }

        // virtual
        var _proto = BulletCharacterController.prototype;
        _proto.onComponentSet = function onComponentSet() {
          //empty
        };
        _proto.updateScale = function updateScale() {
          //empty
        };
        _proto.initialize = function initialize(comp) {
          this._comp = comp;
          var group = this._comp.group;
          var mask = PhysicsSystem.instance.collisionMatrix[group];
          this._collisionFilterGroup = group;
          this._collisionFilterMask = mask;
          this.onComponentSet();
          if (this._impl === 0) {
            error('[Physics]: Initialize BulletCharacterController failed');
            return false;
          } else {
            return true;
          }
        };
        _proto.setWrapper = function setWrapper() {
          BulletCache.setWrapper(this._impl, btCache.CCT_CACHE_NAME, this);
          var cctCollisionShapeImpl = bt.CharacterController_getCollisionShape(this.impl);
          BulletCache.setWrapper(cctCollisionShapeImpl, btCache.CCT_CACHE_NAME, this);
        };
        _proto.onEnable = function onEnable() {
          this._isEnabled = true;
          if (!this._impl) {
            this.onComponentSet();
          }
          this.setDetectCollisions(false);
          this.setOverlapRecovery(true);
          PhysicsSystem.instance.physicsWorld.addCCT(this);
          this.setWrapper();
        };
        _proto.onDisable = function onDisable() {
          this._isEnabled = false;
          this.wrappedWorld.removeCCT(this);
          this.onDestroy();
        };
        _proto.onDestroy = function onDestroy() {
          //(this._comp as any) = null;
          bt._safe_delete(this._impl, EBulletType.EBulletTypeCharacterController);
          BulletCache.delWrapper(this._impl, btCache.CCT_CACHE_NAME);
          this._impl = 0;
          //(this.wrappedWorld as any) = null;
        };
        _proto.onLoad = function onLoad() {
          //empty
        };
        _proto.getPosition = function getPosition(out) {
          if (!this._impl) return;
          bullet2CocosVec3(out, bt.CharacterController_getPosition(this.impl));
        };
        _proto.setPosition = function setPosition(value) {
          if (!this._impl) return;
          cocos2BulletVec3(bt.CharacterController_getPosition(this.impl), value);
          this.syncPhysicsToScene();
        };
        _proto.setContactOffset = function setContactOffset(value) {
          if (!this._impl) return;
          bt.CharacterController_setContactOffset(this._impl, value);
        };
        _proto.setStepOffset = function setStepOffset(value) {
          if (!this._impl) return;
          bt.CharacterController_setStepOffset(this._impl, value);
        };
        _proto.setSlopeLimit = function setSlopeLimit(value) {
          if (!this._impl) return;
          bt.CharacterController_setSlopeLimit(this._impl, degreesToRadians(value));
        };
        _proto.setDetectCollisions = function setDetectCollisions(value) {
          if (!this._impl) return;
          bt.CharacterController_setCollision(this.impl, value);
        };
        _proto.setOverlapRecovery = function setOverlapRecovery(value) {
          if (!this._impl) return;
          bt.CharacterController_setOverlapRecovery(this.impl, value);
        };
        _proto.onGround = function onGround() {
          return (this._btCollisionFlags & 1 << 2) > 0; //btControllerCollisionFlag::Enum::BULLET_CONTROLLER_COLLISION_DOWN
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          var node = this.characterController.node;
          if (node.hasChangedFlags) {
            if (node.hasChangedFlags & TransformBit.SCALE) this.syncScale();
            //teleport
            if (node.hasChangedFlags & TransformBit.POSITION) {
              Vec3.add(v3_0, node.worldPosition, this.scaledCenter);
              this.setPosition(v3_0);
            }
          }
        };
        _proto.syncPhysicsToScene = function syncPhysicsToScene() {
          this.getPosition(v3_0);
          v3_0.subtract(this.scaledCenter);
          this._comp.node.setWorldPosition(v3_0);
        };
        _proto.syncScale = function syncScale() {
          this.updateScale();
        };
        _proto.move = function move(movement, minDist, elapsedTime) {
          if (!this._isEnabled) {
            return;
          }
          var movementBT = BulletCache.instance.BT_V3_0;
          bt.Vec3_set(movementBT, movement.x, movement.y, movement.z);
          this._btCollisionFlags = bt.CharacterController_move(this.impl, movementBT, minDist, elapsedTime);
        };
        _proto.setGroup = function setGroup(v) {
          if (v !== this._collisionFilterGroup) {
            this._collisionFilterGroup = v;
            this._dirty = true;
          }
        };
        _proto.getGroup = function getGroup() {
          return this._collisionFilterGroup;
        };
        _proto.addGroup = function addGroup(v) {
          this._collisionFilterGroup |= v;
          this._dirty = true;
        };
        _proto.removeGroup = function removeGroup(v) {
          this._collisionFilterGroup &= ~v;
          this._dirty = true;
        };
        _proto.setMask = function setMask(v) {
          if (v !== this._collisionFilterMask) {
            this._collisionFilterMask = v;
            this._dirty = true;
          }
        };
        _proto.getMask = function getMask() {
          return this._collisionFilterMask;
        };
        _proto.addMask = function addMask(v) {
          this._collisionFilterMask |= v;
          this._dirty = true;
        };
        _proto.removeMask = function removeMask(v) {
          this._collisionFilterMask &= ~v;
          this._dirty = true;
        };
        _proto.updateEventListener = function updateEventListener() {
          this.wrappedWorld.updateNeedEmitCCTEvents(this.characterController.needCollisionEvent);
        }

        // update group and mask by re-adding cct to physics world
        ;
        _proto.updateDirty = function updateDirty() {
          if (this._dirty) {
            PhysicsSystem.instance.physicsWorld.removeCCT(this);
            PhysicsSystem.instance.physicsWorld.addCCT(this);
            this._dirty = false;
          }
        };
        _proto.onShapeHitExt = function onShapeHitExt(hit) {
          var shapePtr = bt.ControllerShapeHit_getHitShape(hit);
          var bulletWorld = PhysicsSystem.instance.physicsWorld;
          //use characterController impl and shape impl pair as key
          var item = bulletWorld.cctShapeEventDic.get(this.impl, shapePtr);
          var worldPos = new Vec3();
          bullet2CocosVec3(worldPos, bt.ControllerHit_getHitWorldPos(hit));
          var worldNormal = new Vec3();
          bullet2CocosVec3(worldNormal, bt.ControllerHit_getHitWorldNormal(hit));
          var motionDir = new Vec3();
          bullet2CocosVec3(motionDir, bt.ControllerHit_getHitMotionDir(hit));
          var motionLength = bt.ControllerHit_getHitMotionLength(hit);
          var s = BulletCache.getWrapper(shapePtr, BulletShape.TYPE);
          if (s) {
            item = bulletWorld.cctShapeEventDic.set(this.impl, shapePtr, {
              BulletCharacterController: this,
              BulletShape: s,
              worldPos: worldPos,
              worldNormal: worldNormal,
              motionDir: motionDir,
              motionLength: motionLength
            });
          }
        };
        _createClass(BulletCharacterController, [{
          key: "isEnabled",
          get: function get() {
            return this._isEnabled;
          }
        }, {
          key: "impl",
          get: function get() {
            return this._impl;
          }
        }, {
          key: "characterController",
          get: function get() {
            return this._comp;
          }
        }, {
          key: "scaledCenter",
          get: function get() {
            Vec3.multiply(v3_1, this._comp.center, this._comp.node.worldScale);
            return v3_1;
          }
        }]);
        return BulletCharacterController;
      }());
      BulletCharacterController.idCounter = 0;
    }
  };
});