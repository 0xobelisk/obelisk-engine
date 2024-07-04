System.register("q-bundled:///fs/cocos/physics/physx/shapes/physx-shape.js", ["../../../core/index.js", "../../framework/index.js", "../physx-adapter.js", "../physx-enum.js", "../physx-instance.js"], function (_export, _context) {
  "use strict";

  var Quat, Vec3, geometry, PhysicsSystem, addReference, getShapeFlags, getShapeMaterials, getShapeWorldBounds, getTempTransform, PX, removeReference, _trans, EFilterDataWord3, PhysXInstance, EPhysXShapeType, PhysXShape;
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
                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable @typescript-eslint/no-unsafe-return */
  _export("EPhysXShapeType", void 0);
  return {
    setters: [function (_coreIndexJs) {
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      geometry = _coreIndexJs.geometry;
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_physxAdapterJs) {
      addReference = _physxAdapterJs.addReference;
      getShapeFlags = _physxAdapterJs.getShapeFlags;
      getShapeMaterials = _physxAdapterJs.getShapeMaterials;
      getShapeWorldBounds = _physxAdapterJs.getShapeWorldBounds;
      getTempTransform = _physxAdapterJs.getTempTransform;
      PX = _physxAdapterJs.PX;
      removeReference = _physxAdapterJs.removeReference;
      _trans = _physxAdapterJs._trans;
    }, function (_physxEnumJs) {
      EFilterDataWord3 = _physxEnumJs.EFilterDataWord3;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }],
    execute: function () {
      (function (EPhysXShapeType) {
        EPhysXShapeType[EPhysXShapeType["SPHERE"] = 0] = "SPHERE";
        EPhysXShapeType[EPhysXShapeType["BOX"] = 1] = "BOX";
        EPhysXShapeType[EPhysXShapeType["CAPSULE"] = 2] = "CAPSULE";
        EPhysXShapeType[EPhysXShapeType["CYLINDER"] = 3] = "CYLINDER";
        EPhysXShapeType[EPhysXShapeType["CONE"] = 4] = "CONE";
        EPhysXShapeType[EPhysXShapeType["PLANE"] = 5] = "PLANE";
        EPhysXShapeType[EPhysXShapeType["TERRAIN"] = 6] = "TERRAIN";
        EPhysXShapeType[EPhysXShapeType["MESH"] = 7] = "MESH";
      })(EPhysXShapeType || _export("EPhysXShapeType", EPhysXShapeType = {}));
      _export("PhysXShape", PhysXShape = /*#__PURE__*/function () {
        function PhysXShape(type) {
          this.id = void 0;
          this.type = void 0;
          this._impl = null;
          this._collider = null;
          this._flags = void 0;
          this._sharedBody = void 0;
          this._rotation = new Quat(0, 0, 0, 1);
          this._index = -1;
          this._word3 = 0;
          this._isEnabled = false;
          this.type = type;
          this.id = PhysXShape.idCounter++;
        }
        var _proto = PhysXShape.prototype;
        _proto.initialize = function initialize(v) {
          this._collider = v;
          this._flags = getShapeFlags(v.isTrigger);
          this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(v.node);
          this._sharedBody.reference = true;
          this.onComponentSet();
          addReference(this, this._impl);
        };
        _proto.setIndex = function setIndex(v) {
          this._index = v;
        }

        // virtual
        ;
        _proto.onComponentSet = function onComponentSet() {}

        // virtual
        ;
        _proto.updateScale = function updateScale() {};
        _proto.onLoad = function onLoad() {
          this.setMaterial(this._collider.sharedMaterial);
          this.setCenter(this._collider.center);
        };
        _proto.onEnable = function onEnable() {
          this.addToBody();
          this._isEnabled = true;
          this._sharedBody.enabled = true;
        };
        _proto.onDisable = function onDisable() {
          this.removeFromBody();
          this._isEnabled = false;
          this._sharedBody.enabled = false;
        };
        _proto.onDestroy = function onDestroy() {
          this._sharedBody.reference = false;
          if (this._impl) {
            removeReference(this, this._impl);
            this._impl.release();
            this._impl = null;
          }
          this._flags = null;
          this._collider = null;
        };
        _proto.setMaterial = function setMaterial(v) {
          var mat = this.getSharedMaterial(v);
          this._impl.setMaterials(getShapeMaterials(mat));
        };
        _proto.getSharedMaterial = function getSharedMaterial(v) {
          var v1 = v == null ? PhysicsSystem.instance.defaultMaterial : v;
          if (!PX.CACHE_MAT[v1.id]) {
            var physics = PhysXInstance.physics;
            var _mat = physics.createMaterial(v1.friction, v1.friction, v1.restitution);
            _mat.setFrictionCombineMode(PX.CombineMode.eMULTIPLY);
            _mat.setRestitutionCombineMode(PX.CombineMode.eMULTIPLY);
            PX.CACHE_MAT[v1.id] = _mat;
            return _mat;
          }
          var mat = PX.CACHE_MAT[v1.id];
          mat.setStaticFriction(v1.friction);
          mat.setDynamicFriction(v1.friction);
          mat.setRestitution(v1.restitution);
          return mat;
        };
        _proto.setAsTrigger = function setAsTrigger(v) {
          if (v) {
            this._impl.setFlag(PX.ShapeFlag.eSIMULATION_SHAPE, !v);
            this._impl.setFlag(PX.ShapeFlag.eTRIGGER_SHAPE, v);
          } else {
            this._impl.setFlag(PX.ShapeFlag.eTRIGGER_SHAPE, v);
            this._impl.setFlag(PX.ShapeFlag.eSIMULATION_SHAPE, !v);
          }
          if (this._index >= 0) {
            this._sharedBody.removeShape(this);
            this._sharedBody.addShape(this);
          }
        };
        _proto.setCenter = function setCenter(v) {
          var pos = _trans.translation;
          var rot = _trans.rotation;
          Vec3.multiply(pos, v, this._collider.node.worldScale);
          Quat.copy(rot, this._rotation);
          var trans = getTempTransform(pos, rot);
          this._impl.setLocalPose(trans);
        };
        _proto.getAABB = function getAABB(v) {
          getShapeWorldBounds(this.impl, this._sharedBody.impl, 1, v);
        };
        _proto.getBoundingSphere = function getBoundingSphere(v) {
          geometry.AABB.toBoundingSphere(v, this._collider.worldBounds);
        };
        _proto.setGroup = function setGroup(v) {
          this._sharedBody.setGroup(v);
        };
        _proto.getGroup = function getGroup() {
          return this._sharedBody.getGroup();
        };
        _proto.addGroup = function addGroup(v) {
          this._sharedBody.addGroup(v);
        };
        _proto.removeGroup = function removeGroup(v) {
          this._sharedBody.removeGroup(v);
        };
        _proto.setMask = function setMask(v) {
          this._sharedBody.setMask(v);
        };
        _proto.getMask = function getMask() {
          return this._sharedBody.getMask();
        };
        _proto.addMask = function addMask(v) {
          this._sharedBody.addMask(v);
        };
        _proto.removeMask = function removeMask(v) {
          this._sharedBody.removeMask(v);
        };
        _proto.updateFilterData = function updateFilterData(filterData) {
          this._word3 = EFilterDataWord3.DETECT_CONTACT_CCD;
          if (this._collider.needTriggerEvent) {
            this._word3 |= EFilterDataWord3.DETECT_TRIGGER_EVENT;
          }
          if (this._collider.needCollisionEvent) {
            this._word3 |= EFilterDataWord3.DETECT_CONTACT_EVENT | EFilterDataWord3.DETECT_CONTACT_POINT;
          }
          //filterData.word2 = this.id;//useless
          filterData.word3 = this._word3;
          this.setFilerData(filterData);
        };
        _proto.updateEventListener = function updateEventListener() {
          if (this._sharedBody) this.updateFilterData(this._sharedBody.filterData);
        };
        _proto.updateByReAdd = function updateByReAdd() {
          if (this._isEnabled) {
            this.removeFromBody();
            this.addToBody();
          }
        }

        // virtual
        ;
        _proto.setFilerData = function setFilerData(filterData) {
          this._impl.setQueryFilterData(filterData);
          this._impl.setSimulationFilterData(filterData);
        }

        // virtual
        ;
        _proto.addToBody = function addToBody() {
          this._sharedBody.addShape(this);
        }

        // virtual
        ;
        _proto.removeFromBody = function removeFromBody() {
          this._sharedBody.removeShape(this);
        };
        _createClass(PhysXShape, [{
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
          key: "attachedRigidBody",
          get: function get() {
            return null;
          }
        }], [{
          key: "MESH_SCALE",
          get: function get() {
            if (!this._MESH_SCALE) {
              this._MESH_SCALE = new PX.MeshScale(Vec3.ZERO, Quat.IDENTITY);
            }
            return this._MESH_SCALE;
          }
        }]);
        return PhysXShape;
      }());
      PhysXShape._MESH_SCALE = void 0;
      PhysXShape.idCounter = 0;
    }
  };
});