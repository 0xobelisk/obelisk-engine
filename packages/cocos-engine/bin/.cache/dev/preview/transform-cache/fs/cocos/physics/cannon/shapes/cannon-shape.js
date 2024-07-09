System.register("q-bundled:///fs/cocos/physics/cannon/shapes/cannon-shape.js", ["@cocos/cannon", "../../../core/index.js", "../../utils/util.js", "../cannon-util.js", "../../framework/physics-system.js"], function (_export, _context) {
  "use strict";

  var CANNON, Vec3, Quat, getWrap, setWrap, commitShapeUpdates, PhysicsSystem, TriggerEventObject, cannonQuat_0, cannonVec3_0, cannonVec3_1, CannonShape;
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
    setters: [function (_cocosCannon) {
      CANNON = _cocosCannon.default;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
    }, function (_utilsUtilJs) {
      getWrap = _utilsUtilJs.getWrap;
      setWrap = _utilsUtilJs.setWrap;
    }, function (_cannonUtilJs) {
      commitShapeUpdates = _cannonUtilJs.commitShapeUpdates;
    }, function (_frameworkPhysicsSystemJs) {
      PhysicsSystem = _frameworkPhysicsSystemJs.PhysicsSystem;
    }],
    execute: function () {
      TriggerEventObject = {
        type: 'onTriggerEnter',
        selfCollider: null,
        otherCollider: null,
        impl: null
      };
      cannonQuat_0 = new CANNON.Quaternion();
      cannonVec3_0 = new CANNON.Vec3();
      cannonVec3_1 = new CANNON.Vec3();
      _export("CannonShape", CannonShape = /*#__PURE__*/function () {
        function CannonShape() {
          this._collider = void 0;
          this._shape = void 0;
          this._offset = new CANNON.Vec3();
          this._orient = new CANNON.Quaternion();
          this._index = -1;
          this._sharedBody = void 0;
          this.onTriggerListener = this._onTrigger.bind(this);
          this._isBinding = false;
        }
        var _proto = CannonShape.prototype;
        _proto.updateEventListener = function updateEventListener() {};
        _proto.setMaterial = function setMaterial(mat) {
          var mat1 = mat == null ? PhysicsSystem.instance.defaultMaterial : mat;
          if (CannonShape.idToMaterial[mat1.id] == null) {
            CannonShape.idToMaterial[mat1.id] = new CANNON.Material(mat1.id);
          }
          this._shape.material = CannonShape.idToMaterial[mat1.id];
          var smat = this._shape.material;
          smat.friction = mat1.friction;
          smat.restitution = mat1.restitution;
          var coef = CANNON.CC_CONFIG.correctInelastic;
          smat.correctInelastic = smat.restitution === 0 ? coef : 0;
        };
        _proto.setAsTrigger = function setAsTrigger(v) {
          this._shape.collisionResponse = !v;
          if (this._index >= 0) {
            this._body.updateHasTrigger();
          }
        };
        _proto.setCenter = function setCenter(v) {
          this._setCenter(v);
          if (this._index >= 0) {
            commitShapeUpdates(this._body);
          }
        };
        _proto.setAttachedBody = function setAttachedBody(v) {
          if (v) {
            if (this._sharedBody) {
              if (this._sharedBody.wrappedBody === v.body) return;
              this._sharedBody.reference = false;
            }
            this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(v.node);
            this._sharedBody.reference = true;
          } else {
            if (this._sharedBody) {
              this._sharedBody.reference = false;
            }
            this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
            this._sharedBody.reference = true;
          }
        };
        _proto.getAABB = function getAABB(v) {
          Quat.copy(cannonQuat_0, this._collider.node.worldRotation);
          this._shape.calculateWorldAABB(CANNON.Vec3.ZERO, cannonQuat_0, cannonVec3_0, cannonVec3_1);
          Vec3.subtract(v.halfExtents, cannonVec3_1, cannonVec3_0);
          Vec3.multiplyScalar(v.halfExtents, v.halfExtents, 0.5);
          Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
        };
        _proto.getBoundingSphere = function getBoundingSphere(v) {
          v.radius = this._shape.boundingSphereRadius;
          Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
        };
        /** LIFECYCLE */
        _proto.initialize = function initialize(comp) {
          this._collider = comp;
          this._isBinding = true;
          this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
          this._sharedBody.reference = true;
          this.onComponentSet();
          setWrap(this._shape, this);
          this._shape.addEventListener('cc-trigger', this.onTriggerListener);
        }

        // virtual
        ;
        _proto.onComponentSet = function onComponentSet() {};
        _proto.onLoad = function onLoad() {
          this.setMaterial(this._collider.sharedMaterial);
          this.setCenter(this._collider.center);
          this.setAsTrigger(this._collider.isTrigger);
        };
        _proto.onEnable = function onEnable() {
          this._sharedBody.addShape(this);
          this._sharedBody.enabled = true;
        };
        _proto.onDisable = function onDisable() {
          this._sharedBody.removeShape(this);
          this._sharedBody.enabled = false;
        };
        _proto.onDestroy = function onDestroy() {
          this._sharedBody.reference = false;
          this._shape.removeEventListener('cc-trigger', this.onTriggerListener);
          delete CANNON.World.idToShapeMap[this._shape.id];
          this._sharedBody = null;
          setWrap(this._shape, null);
          this._offset = null;
          this._orient = null;
          this._shape = null;
          this._collider = null;
          this.onTriggerListener = null;
        }

        /** INTERFACE */

        /** group */;
        _proto.getGroup = function getGroup() {
          return this._body.collisionFilterGroup;
        };
        _proto.setGroup = function setGroup(v) {
          this._body.collisionFilterGroup = v;
          if (!this._body.isAwake()) this._body.wakeUp();
        };
        _proto.addGroup = function addGroup(v) {
          this._body.collisionFilterGroup |= v;
          if (!this._body.isAwake()) this._body.wakeUp();
        };
        _proto.removeGroup = function removeGroup(v) {
          this._body.collisionFilterGroup &= ~v;
          if (!this._body.isAwake()) this._body.wakeUp();
        }

        /** mask */;
        _proto.getMask = function getMask() {
          return this._body.collisionFilterMask;
        };
        _proto.setMask = function setMask(v) {
          this._body.collisionFilterMask = v;
          if (!this._body.isAwake()) this._body.wakeUp();
        };
        _proto.addMask = function addMask(v) {
          this._body.collisionFilterMask |= v;
          if (!this._body.isAwake()) this._body.wakeUp();
        };
        _proto.removeMask = function removeMask(v) {
          this._body.collisionFilterMask &= ~v;
          if (!this._body.isAwake()) this._body.wakeUp();
        }

        /**
         * change scale will recalculate center & size \
         * size handle by child class
         * @param scale
         */;
        _proto.setScale = function setScale(scale) {
          this._setCenter(this._collider.center);
        };
        _proto.setIndex = function setIndex(index) {
          this._index = index;
        };
        _proto.setOffsetAndOrient = function setOffsetAndOrient(offset, orient) {
          Vec3.copy(offset, this._offset);
          Quat.copy(orient, this._orient);
          this._offset = offset;
          this._orient = orient;
        };
        _proto._setCenter = function _setCenter(v) {
          var lpos = this._offset;
          Vec3.subtract(lpos, this._sharedBody.node.worldPosition, this._collider.node.worldPosition);
          Vec3.add(lpos, lpos, v);
          Vec3.multiply(lpos, lpos, this._collider.node.worldScale);
        };
        _proto._onTrigger = function _onTrigger(event) {
          TriggerEventObject.type = event.event;
          var self = getWrap(event.selfShape);
          var other = getWrap(event.otherShape);
          if (self && self.collider.needTriggerEvent) {
            TriggerEventObject.selfCollider = self.collider;
            TriggerEventObject.otherCollider = other ? other.collider : null;
            TriggerEventObject.impl = event;
            this._collider.emit(TriggerEventObject.type, TriggerEventObject);
          }
        };
        _createClass(CannonShape, [{
          key: "impl",
          get: function get() {
            return this._shape;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }, {
          key: "attachedRigidBody",
          get: function get() {
            if (this._sharedBody.wrappedBody) {
              return this._sharedBody.wrappedBody.rigidBody;
            }
            return null;
          }
        }, {
          key: "sharedBody",
          get: function get() {
            return this._sharedBody;
          }
        }, {
          key: "_body",
          get: function get() {
            return this._sharedBody.body;
          }
        }]);
        return CannonShape;
      }());
      CannonShape.idToMaterial = {};
    }
  };
});