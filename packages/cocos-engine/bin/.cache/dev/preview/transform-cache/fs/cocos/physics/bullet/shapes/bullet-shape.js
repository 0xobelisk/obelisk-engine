System.register("q-bundled:///fs/cocos/physics/bullet/shapes/bullet-shape.js", ["../../../core/index.js", "../../../../exports/physics-framework.js", "../bullet-enum.js", "../bullet-utils.js", "../bullet-cache.js", "../instantiated.js", "../../framework/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, PhysicsSystem, EBtSharedBodyDirty, cocos2BulletQuat, cocos2BulletVec3, BulletCache, CC_V3_0, bt, EBulletType, EColliderType, v3_0, ccMaterialBooks, BulletShape;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_exportsPhysicsFrameworkJs) {
      PhysicsSystem = _exportsPhysicsFrameworkJs.PhysicsSystem;
    }, function (_bulletEnumJs) {
      EBtSharedBodyDirty = _bulletEnumJs.EBtSharedBodyDirty;
    }, function (_bulletUtilsJs) {
      cocos2BulletQuat = _bulletUtilsJs.cocos2BulletQuat;
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
      CC_V3_0 = _bulletCacheJs.CC_V3_0;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
      EBulletType = _instantiatedJs.EBulletType;
    }, function (_frameworkIndexJs) {
      EColliderType = _frameworkIndexJs.EColliderType;
    }],
    execute: function () {
      v3_0 = CC_V3_0;
      ccMaterialBooks = {};
      _export("BulletShape", BulletShape = /*#__PURE__*/function () {
        function BulletShape() {
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
        var _proto = BulletShape.prototype;
        _proto.updateEventListener = function updateEventListener() {
          this._sharedBody.wrappedWorld.updateNeedEmitEvents(this.collider.needCollisionEvent || this.collider.needTriggerEvent);
        };
        _proto.setMaterial = function setMaterial(v) {
          var v1 = v == null ? PhysicsSystem.instance.defaultMaterial : v;
          if (!this._isTrigger && this._isEnabled) {
            if (this._compound) {
              if (!ccMaterialBooks[v1._uuid]) ccMaterialBooks[v1._uuid] = bt.ccMaterial_new();
              var mat = ccMaterialBooks[v1._uuid];
              bt.ccMaterial_set(mat, v1.restitution, v1.friction, v1.rollingFriction, v1.spinningFriction);
              bt.CollisionShape_setMaterial(this._impl, mat);
            } else {
              bt.CollisionObject_setMaterial(this._sharedBody.body, v1.restitution, v1.friction, v1.rollingFriction, v1.spinningFriction);
            }
          }
        };
        _proto.setCenter = function setCenter(v) {
          Vec3.copy(v3_0, v);
          v3_0.multiply(this._collider.node.worldScale);
          cocos2BulletVec3(bt.Transform_getOrigin(this.transform), v3_0);
          this.updateCompoundTransform();
        };
        _proto.setAsTrigger = function setAsTrigger(v) {
          if (this._isTrigger === v) return;
          if (this._isEnabled) {
            this._sharedBody.removeShape(this, !v);
            this._sharedBody.addShape(this, v);
          }
          this._isTrigger = v;
        };
        _proto.getAABB = function getAABB(v) {
          var bt_transform = BulletCache.instance.BT_TRANSFORM_0;
          bt.Transform_setIdentity(bt_transform);
          bt.Transform_setRotation(bt_transform, cocos2BulletQuat(BulletCache.instance.BT_QUAT_0, this._collider.node.worldRotation));
          var MIN = BulletCache.instance.BT_V3_0;
          var MAX = BulletCache.instance.BT_V3_1;
          bt.CollisionShape_getAabb(this._impl, bt_transform, MIN, MAX);
          v.halfExtents.x = (bt.Vec3_x(MAX) - bt.Vec3_x(MIN)) / 2;
          v.halfExtents.y = (bt.Vec3_y(MAX) - bt.Vec3_y(MIN)) / 2;
          v.halfExtents.z = (bt.Vec3_z(MAX) - bt.Vec3_z(MIN)) / 2;
          Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
        };
        _proto.getBoundingSphere = function getBoundingSphere(v) {
          v.radius = bt.CollisionShape_getLocalBoundingSphere(this._impl);
          Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
        };
        _proto.initialize = function initialize(com) {
          this._collider = com;
          this._isInitialized = true;
          this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
          this._sharedBody.reference = true;
          this.onComponentSet();
          this.setWrapper();
        };
        _proto.setWrapper = function setWrapper() {
          if (BulletCache.isNotEmptyShape(this._impl)) {
            bt.CollisionShape_setUserPointer(this._impl, this._impl);
            BulletCache.setWrapper(this._impl, BulletShape.TYPE, this);
          }
        }

        // virtual
        ;
        _proto.onLoad = function onLoad() {
          this.setCenter(this._collider.center);
          this.setAsTrigger(this._collider.isTrigger);
        };
        _proto.onEnable = function onEnable() {
          this._isEnabled = true;
          this._sharedBody.addShape(this, this._isTrigger);
          this.setMaterial(this.collider.sharedMaterial);
        };
        _proto.onDisable = function onDisable() {
          this._isEnabled = false;
          this._sharedBody.removeShape(this, this._isTrigger);
        };
        _proto.onDestroy = function onDestroy() {
          this._sharedBody.reference = false;
          this._collider = null;
          bt._safe_delete(this.quat, EBulletType.EBulletTypeQuat);
          bt._safe_delete(this.transform, EBulletType.EBulletTypeTransform);
          if (this._compound) bt._safe_delete(this._compound, EBulletType.EBulletTypeCollisionShape);
          if (BulletCache.isNotEmptyShape(this._impl)) {
            bt._safe_delete(this._impl, EBulletType.EBulletTypeCollisionShape);
            BulletCache.delWrapper(this._impl, BulletShape.TYPE);
          }
        };
        _proto.updateByReAdd = function updateByReAdd() {
          if (this._isEnabled) {
            this._sharedBody.removeShape(this, this._isTrigger);
            this._sharedBody.addShape(this, this._isTrigger);
          }
        };
        _proto.getGroup = function getGroup() {
          return this._sharedBody.collisionFilterGroup;
        };
        _proto.setGroup = function setGroup(v) {
          this._sharedBody.collisionFilterGroup = v;
        };
        _proto.addGroup = function addGroup(v) {
          this._sharedBody.collisionFilterGroup |= v;
        };
        _proto.removeGroup = function removeGroup(v) {
          this._sharedBody.collisionFilterGroup &= ~v;
        };
        _proto.getMask = function getMask() {
          return this._sharedBody.collisionFilterMask;
        };
        _proto.setMask = function setMask(v) {
          this._sharedBody.collisionFilterMask = v;
        };
        _proto.addMask = function addMask(v) {
          this._sharedBody.collisionFilterMask |= v;
        };
        _proto.removeMask = function removeMask(v) {
          this._sharedBody.collisionFilterMask &= ~v;
        };
        _proto.setCompound = function setCompound(compound) {
          if (this._compound) bt.CompoundShape_removeChildShape(this._compound, this._impl);
          if (compound) bt.CompoundShape_addChildShape(compound, this.transform, this._impl);
          this._compound = compound;
        };
        _proto.updateScale = function updateScale() {
          this.setCenter(this._collider.center);
        };
        _proto.updateCompoundTransform = function updateCompoundTransform() {
          if (this._compound) {
            bt.CompoundShape_updateChildTransform(this._compound, this._impl, this.transform, true);
          } else if (this._isEnabled && !this._isTrigger) {
            if (this._sharedBody && !this._sharedBody.bodyStruct.useCompound) {
              this._sharedBody.dirty |= EBtSharedBodyDirty.BODY_RE_ADD;
            }
          }
        };
        _proto.needCompound = function needCompound() {
          if (this._collider.type === EColliderType.TERRAIN) {
            return true;
          }
          if (this._collider.center.equals(Vec3.ZERO)) {
            return false;
          }
          return true;
        };
        _createClass(BulletShape, [{
          key: "attachedRigidBody",
          get: function get() {
            if (this._sharedBody.wrappedBody) return this._sharedBody.wrappedBody.rigidBody;
            return null;
          }
        }, {
          key: "impl",
          get: function get() {
            return this._impl;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }, {
          key: "sharedBody",
          get: function get() {
            return this._sharedBody;
          }
        }]);
        return BulletShape;
      }());
      BulletShape.TYPE = 'shape';
      BulletShape.idCounter = 0;
    }
  };
});