System.register("q-bundled:///fs/cocos/physics/physx/character-controllers/physx-character-controller.js", ["../../../core/index.js", "../../framework/index.js", "../physx-adapter.js", "../../../core/utils/misc.js", "../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var error, Vec3, PhysicsSystem, getWrapShape, PX, degreesToRadians, TransformBit, v3_0, v3_1, PhysXCharacterController;
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
    }, function (_physxAdapterJs) {
      getWrapShape = _physxAdapterJs.getWrapShape;
      PX = _physxAdapterJs.PX;
    }, function (_coreUtilsMiscJs) {
      degreesToRadians = _coreUtilsMiscJs.degreesToRadians;
    }, function (_sceneGraphIndexJs) {
      TransformBit = _sceneGraphIndexJs.TransformBit;
    }],
    execute: function () {
      v3_0 = new Vec3(0, 0, 0);
      v3_1 = new Vec3(0, 0, 0);
      _export("PhysXCharacterController", PhysXCharacterController = /*#__PURE__*/function () {
        function PhysXCharacterController() {
          this._isEnabled = false;
          this._impl = null;
          this._comp = null;
          this._pxCollisionFlags = 0;
          //: PX.PxControllerCollisionFlags;
          this._filterData = void 0;
          this._queryFilterCB = null;
          this._word3 = 0;
          this._overlapRecovery = true;
          this.id = void 0;
          this.id = PhysXCharacterController.idCounter++;
          this._filterData = {
            word0: 1,
            word1: 1,
            word2: 1,
            word3: 0
          };
        }

        // virtual
        var _proto = PhysXCharacterController.prototype;
        _proto.onComponentSet = function onComponentSet() {};
        _proto.create = function create() {};
        _proto.updateScale = function updateScale() {};
        _proto.initialize = function initialize(comp) {
          this._comp = comp;
          this._queryFilterCB = PX.PxQueryFilterCallback.implement(PhysXCharacterController.queryCallback);
          var group = this._comp.group;
          this._filterData.word0 = this._comp.group;
          var mask = PhysicsSystem.instance.collisionMatrix[group];
          this._filterData.word1 = mask;
          this.onComponentSet();
          if (this._impl == null) {
            error('[Physics]: Initialize PhysXCharacterController Failed');
            return false;
          } else {
            return true;
          }
        };
        _proto.onEnable = function onEnable() {
          this._isEnabled = true;
          if (!this._impl) {
            this.onComponentSet();
          }
          this.setDetectCollisions(true);
          this.setOverlapRecovery(true);
          PhysicsSystem.instance.physicsWorld.addCCT(this);
        };
        _proto.onDisable = function onDisable() {
          this._isEnabled = false;
          PhysicsSystem.instance.physicsWorld.removeCCT(this);
          this.onDestroy(); //to be optimized
        };
        _proto.onLoad = function onLoad() {};
        _proto.release = function release() {
          if (this._impl) {
            if (this._impl.$$) {
              PX.IMPL_PTR[this._impl.$$.ptr] = null;
              delete PX.IMPL_PTR[this._impl.$$.ptr];
              var shapePtr = this._impl.getShape().$$.ptr;
              PX.IMPL_PTR[shapePtr] = null;
              delete PX.IMPL_PTR[shapePtr];
            }
            this._impl.release();
            this._impl = null;
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.release();
        }

        //world position of cct
        ;
        _proto.getPosition = function getPosition(out) {
          if (!this._impl) return;
          Vec3.copy(out, this._impl.getPosition());
        };
        _proto.setPosition = function setPosition(value) {
          if (!this._impl) return;
          this._impl.setPosition(value);
          this.syncPhysicsToScene();
        };
        _proto.setContactOffset = function setContactOffset(value) {
          if (!this._impl) return;
          this._impl.setContactOffset(value);
        };
        _proto.setStepOffset = function setStepOffset(value) {
          if (!this._impl) return;
          this._impl.setStepOffset(value);
        };
        _proto.setSlopeLimit = function setSlopeLimit(value) {
          if (!this._impl) return;
          this._impl.setSlopeLimit(Math.cos(degreesToRadians(value)));
        };
        _proto.setDetectCollisions = function setDetectCollisions(value) {
          if (!this._impl) return;
          this._impl.setCollision(value);
        };
        _proto.setQuery = function setQuery(value) {
          if (!this._impl) return;
          this._impl.setQuery(value);
        };
        _proto.setOverlapRecovery = function setOverlapRecovery(value) {
          this._overlapRecovery = value;
        };
        _proto.onGround = function onGround() {
          return (this._pxCollisionFlags & 1 << 2) > 0; //PxControllerCollisionFlag::Enum::eCOLLISION_DOWN
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
          PhysicsSystem.instance.physicsWorld.controllerManager.setOverlapRecoveryModule(this._overlapRecovery);
          this._pxCollisionFlags = this._impl.move(movement, minDist, elapsedTime, this.filterData, this.queryFilterCB);
        };
        _proto.setGroup = function setGroup(v) {
          v >>>= 0; //convert to unsigned int(32bit) for physx
          this._filterData.word0 = v;
          this.updateFilterData();
        };
        _proto.getGroup = function getGroup() {
          return this._filterData.word0;
        };
        _proto.addGroup = function addGroup(v) {
          v >>>= 0; //convert to unsigned int(32bit) for physx
          this._filterData.word0 |= v;
          this.updateFilterData();
        };
        _proto.removeGroup = function removeGroup(v) {
          v >>>= 0; //convert to unsigned int(32bit) for physx
          this._filterData.word0 &= ~v;
          this.updateFilterData();
        };
        _proto.setMask = function setMask(v) {
          v >>>= 0; //convert to unsigned int(32bit) for physx
          this._filterData.word1 = v;
          this.updateFilterData();
        };
        _proto.getMask = function getMask() {
          return this._filterData.word1;
        };
        _proto.addMask = function addMask(v) {
          v >>>= 0; //convert to unsigned int(32bit) for physx
          this._filterData.word1 |= v;
          this.updateFilterData();
        };
        _proto.removeMask = function removeMask(v) {
          v >>>= 0; //convert to unsigned int(32bit) for physx
          this._filterData.word1 &= ~v;
          this.updateFilterData();
        };
        _proto.updateEventListener = function updateEventListener() {
          this.updateFilterData();
        };
        _proto.updateFilterData = function updateFilterData() {
          if (!this._impl) return;
          // this._impl.setQueryFilterData(filterData);//set inside move()
          this._impl.setSimulationFilterData(this.filterData);
        };
        _createClass(PhysXCharacterController, [{
          key: "isEnabled",
          get: function get() {
            return this._isEnabled;
          }
        }, {
          key: "impl",
          get: function get() {
            /* eslint-disable @typescript-eslint/no-unsafe-return */
            return this._impl;
          }
        }, {
          key: "characterController",
          get: function get() {
            return this._comp;
          }
        }, {
          key: "filterData",
          get: function get() {
            /* eslint-disable @typescript-eslint/no-unsafe-return */
            return this._filterData;
          }
        }, {
          key: "queryFilterCB",
          get: function get() {
            /* eslint-disable @typescript-eslint/no-unsafe-return */
            return this._queryFilterCB;
          }
        }, {
          key: "scaledCenter",
          get: function get() {
            Vec3.multiply(v3_1, this._comp.center, this._comp.node.worldScale);
            return v3_1;
          }

          // eNONE = 0,   //!< the query should ignore this shape
          // eTOUCH = 1,  //!< a hit on the shape touches the intersection geometry of the query but does not block it
          // eBLOCK = 2   //!< a hit on the shape blocks the query (does not block overlap queries)
        }]);
        return PhysXCharacterController;
      }());
      PhysXCharacterController.idCounter = 0;
      PhysXCharacterController.queryCallback = {
        preFilter: function preFilter(filterData, shape, _actor, _out) {
          var pxShape = getWrapShape(shape);
          if (!pxShape) {
            return PX.QueryHitType.eNONE;
          }
          var collider = pxShape.collider;
          if (!(filterData.word0 & collider.getMask()) || !(filterData.word1 & collider.getGroup())) {
            return PX.QueryHitType.eNONE;
          }

          // Ignore trigger shape
          // this is done in physx::Cct::findTouchedGeometry
          // Ubi (EA) : Discarding Triggers
          // const shapeFlags = shape.getFlags();
          // if (shapeFlags.isSet(PX.ShapeFlag.eTRIGGER_SHAPE)) {
          //     return PX.QueryHitType.eNONE;
          // }

          return PX.QueryHitType.eBLOCK;
        }
      };
    }
  };
});