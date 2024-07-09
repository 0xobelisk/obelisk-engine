System.register("q-bundled:///fs/cocos/physics/cannon/cannon-shared-body.js", ["@cocos/cannon", "../../core/index.js", "../framework/physics-enum.js", "../utils/util.js", "../../../exports/physics-framework.js", "../../scene-graph/node-enum.js", "./cannon-util.js", "./cannon-contact-equation.js"], function (_export, _context) {
  "use strict";

  var CANNON, Quat, Vec3, js, ERigidBodyType, PhysicsGroup, getWrap, setWrap, PhysicsSystem, TransformBit, commitShapeUpdates, CannonContactEquation, _class, v3_0, quat_0, contactsPool, CollisionEventObject, CannonSharedBody;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_cocosCannon) {
      CANNON = _cocosCannon.default;
    }, function (_coreIndexJs) {
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      js = _coreIndexJs.js;
    }, function (_frameworkPhysicsEnumJs) {
      ERigidBodyType = _frameworkPhysicsEnumJs.ERigidBodyType;
      PhysicsGroup = _frameworkPhysicsEnumJs.PhysicsGroup;
    }, function (_utilsUtilJs) {
      getWrap = _utilsUtilJs.getWrap;
      setWrap = _utilsUtilJs.setWrap;
    }, function (_exportsPhysicsFrameworkJs) {
      PhysicsSystem = _exportsPhysicsFrameworkJs.PhysicsSystem;
    }, function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }, function (_cannonUtilJs) {
      commitShapeUpdates = _cannonUtilJs.commitShapeUpdates;
    }, function (_cannonContactEquationJs) {
      CannonContactEquation = _cannonContactEquationJs.CannonContactEquation;
    }],
    execute: function () {
      v3_0 = new Vec3();
      quat_0 = new Quat();
      contactsPool = [];
      CollisionEventObject = {
        type: 'onCollisionEnter',
        selfCollider: null,
        otherCollider: null,
        contacts: [],
        impl: null
      };
      /**
        * node : shared-body = 1 : 1
        * static
        */
      _export("CannonSharedBody", CannonSharedBody = /*#__PURE__*/function () {
        CannonSharedBody.getSharedBody = function getSharedBody(node, wrappedWorld, wrappedBody) {
          var key = node.uuid;
          var newSB;
          if (CannonSharedBody.sharedBodesMap.has(key)) {
            newSB = CannonSharedBody.sharedBodesMap.get(key);
          } else {
            newSB = new CannonSharedBody(node, wrappedWorld);
            var g = PhysicsGroup.DEFAULT;
            var m = PhysicsSystem.instance.collisionMatrix[g];
            newSB.body.collisionFilterGroup = g;
            newSB.body.collisionFilterMask = m;
            newSB.body.position = new CANNON.Vec3(node.worldPosition.x, node.worldPosition.y, node.worldPosition.z);
            newSB.body.quaternion = new CANNON.Quaternion(node.worldRotation.x, node.worldRotation.y, node.worldRotation.z, node.worldRotation.w);
            CannonSharedBody.sharedBodesMap.set(node.uuid, newSB);
          }
          if (wrappedBody) {
            newSB.wrappedBody = wrappedBody;
            var _g = wrappedBody.rigidBody.group;
            var _m = PhysicsSystem.instance.collisionMatrix[_g];
            newSB.body.collisionFilterGroup = _g;
            newSB.body.collisionFilterMask = _m;
            newSB.body.position = new CANNON.Vec3(node.worldPosition.x, node.worldPosition.y, node.worldPosition.z);
            newSB.body.quaternion = new CANNON.Quaternion(node.worldRotation.x, node.worldRotation.y, node.worldRotation.z, node.worldRotation.w);
          }
          return newSB;
        };
        function CannonSharedBody(node, wrappedWorld) {
          this.node = void 0;
          this.wrappedWorld = void 0;
          this.body = void 0;
          this.wrappedShapes = [];
          this.wrappedJoints0 = [];
          this.wrappedJoints1 = [];
          this.wrappedBody = null;
          this.index = -1;
          this.ref = 0;
          this.onCollidedListener = this.onCollided.bind(this);
          this.wrappedWorld = wrappedWorld;
          this.node = node;
          this.body = new CANNON.Body();
          setWrap(this.body, this);
          this.body.collisionFilterGroup = PhysicsSystem.PhysicsGroup.DEFAULT;
          this.body.sleepSpeedLimit = PhysicsSystem.instance.sleepThreshold;
          this.body.material = this.wrappedWorld.impl.defaultMaterial;
          this.body.addEventListener('cc-collide', this.onCollidedListener);
        }
        var _proto = CannonSharedBody.prototype;
        _proto.addShape = function addShape(v) {
          var index = this.wrappedShapes.indexOf(v);
          if (index < 0) {
            var _index = this.body.shapes.length;
            this.body.addShape(v.impl);
            this.wrappedShapes.push(v);
            v.setIndex(_index);
            var offset = this.body.shapeOffsets[_index];
            var orient = this.body.shapeOrientations[_index];
            v.setOffsetAndOrient(offset, orient);
            if (this.body.isSleeping()) this.body.wakeUp();
          }
        };
        _proto.removeShape = function removeShape(v) {
          var index = this.wrappedShapes.indexOf(v);
          if (index >= 0) {
            js.array.fastRemoveAt(this.wrappedShapes, index);
            this.body.removeShape(v.impl);
            v.setIndex(-1);
            if (this.body.isSleeping()) this.body.wakeUp();
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
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          var node = this.node;
          var body = this.body;
          if (node.hasChangedFlags) {
            if (body.isSleeping()) body.wakeUp();
            Vec3.copy(body.position, node.worldPosition);
            Quat.copy(body.quaternion, node.worldRotation);
            body.aabbNeedsUpdate = true;
            if (node.hasChangedFlags & TransformBit.SCALE) this.syncScale();
          }
        };
        _proto.syncPhysicsToScene = function syncPhysicsToScene() {
          var n = this.node;
          var b = this.body;
          if (b.type === ERigidBodyType.DYNAMIC) {
            if (!b.isSleeping()) {
              Vec3.copy(v3_0, b.position);
              Quat.copy(quat_0, b.quaternion);
              n.worldPosition = v3_0;
              n.worldRotation = quat_0;
            }
          }
        };
        _proto.syncInitial = function syncInitial() {
          var n = this.node;
          var b = this.body;
          Vec3.copy(b.position, n.worldPosition);
          Quat.copy(b.quaternion, n.worldRotation);
          Vec3.copy(b.previousPosition, n.worldPosition);
          Quat.copy(b.previousQuaternion, n.worldRotation);
          b.aabbNeedsUpdate = true;
          this.syncScale();
          if (b.isSleeping()) b.wakeUp();
        };
        _proto.syncScale = function syncScale() {
          for (var i = 0; i < this.wrappedShapes.length; i++) {
            this.wrappedShapes[i].setScale(this.node.worldScale);
          }
          for (var _i3 = 0; _i3 < this.wrappedJoints0.length; _i3++) {
            this.wrappedJoints0[_i3].updateScale0();
          }
          for (var _i4 = 0; _i4 < this.wrappedJoints1.length; _i4++) {
            this.wrappedJoints1[_i4].updateScale1();
          }
          commitShapeUpdates(this.body);
        };
        _proto.destroy = function destroy() {
          setWrap(this.body, null);
          this.body.removeEventListener('cc-collide', this.onCollidedListener);
          CannonSharedBody.sharedBodesMap["delete"](this.node.uuid);
          delete CANNON.World.idToBodyMap[this.body.id];
          this.node = null;
          this.wrappedWorld = null;
          this.body = null;
          this.wrappedShapes = null;
          this.wrappedJoints0 = null;
          this.wrappedJoints1 = null;
          this.onCollidedListener = null;
        };
        _proto.onCollided = function onCollided(event) {
          CollisionEventObject.type = event.event;
          var self = getWrap(event.selfShape);
          var other = getWrap(event.otherShape);
          if (self && self.collider.needCollisionEvent) {
            contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
            CollisionEventObject.contacts.length = 0;
            CollisionEventObject.impl = event;
            CollisionEventObject.selfCollider = self.collider;
            CollisionEventObject.otherCollider = other ? other.collider : null;
            var i = 0;
            if (CollisionEventObject.type !== 'onCollisionExit') {
              for (i = 0; i < event.contacts.length; i++) {
                var cq = event.contacts[i];
                if (contactsPool.length > 0) {
                  var c = contactsPool.pop();
                  c.impl = cq;
                  CollisionEventObject.contacts.push(c);
                } else {
                  var _c = new CannonContactEquation(CollisionEventObject);
                  _c.impl = cq;
                  CollisionEventObject.contacts.push(_c);
                }
              }
            }
            for (i = 0; i < this.wrappedShapes.length; i++) {
              var shape = this.wrappedShapes[i];
              shape.collider.emit(CollisionEventObject.type, CollisionEventObject);
            }
          }
        };
        _createClass(CannonSharedBody, [{
          key: "enabled",
          set:
          /**
            * add or remove from world \
            * add, if enable \
            * remove, if disable & shapes.length == 0 & wrappedBody disable
            */
          function set(v) {
            if (v) {
              if (this.index < 0) {
                this.index = this.wrappedWorld.bodies.length;
                this.wrappedWorld.addSharedBody(this);
                this.syncInitial();
              }
            } else if (this.index >= 0) {
              var isRemove = this.wrappedShapes.length === 0 && this.wrappedBody == null || this.wrappedShapes.length === 0 && this.wrappedBody != null && !this.wrappedBody.isEnabled;
              if (isRemove) {
                this.body.sleep(); // clear velocity etc.
                this.index = -1;
                this.wrappedWorld.removeSharedBody(this);
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
        return CannonSharedBody;
      }());
      _class = CannonSharedBody;
      CannonSharedBody.sharedBodesMap = new Map();
    }
  };
});