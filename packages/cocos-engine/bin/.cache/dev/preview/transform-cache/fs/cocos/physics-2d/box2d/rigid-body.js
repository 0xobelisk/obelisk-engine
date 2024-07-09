System.register("q-bundled:///fs/cocos/physics-2d/box2d/rigid-body.js", ["@cocos/box2d", "../framework/physics-system.js", "../../core/index.js", "../framework/physics-types.js", "../../scene-graph/node.js", "../framework/index.js"], function (_export, _context) {
  "use strict";

  var b2, PhysicsSystem2D, Vec2, toRadian, Vec3, Quat, TWO_PI, HALF_PI, PHYSICS_2D_PTM_RATIO, ERigidBody2DType, Node, Collider2D, tempVec3, tempVec2_1, b2RigidBody2D;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_cocosBox2d) {
      b2 = _cocosBox2d.default;
    }, function (_frameworkPhysicsSystemJs) {
      PhysicsSystem2D = _frameworkPhysicsSystemJs.PhysicsSystem2D;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      toRadian = _coreIndexJs.toRadian;
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
      TWO_PI = _coreIndexJs.TWO_PI;
      HALF_PI = _coreIndexJs.HALF_PI;
    }, function (_frameworkPhysicsTypesJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkPhysicsTypesJs.PHYSICS_2D_PTM_RATIO;
      ERigidBody2DType = _frameworkPhysicsTypesJs.ERigidBody2DType;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_frameworkIndexJs) {
      Collider2D = _frameworkIndexJs.Collider2D;
    }],
    execute: function () {
      tempVec3 = new Vec3();
      tempVec2_1 = new b2.Vec2();
      _export("b2RigidBody2D", b2RigidBody2D = /*#__PURE__*/function () {
        function b2RigidBody2D() {
          this._animatedPos = new Vec2();
          this._animatedAngle = 0;
          this._body = null;
          this._rigidBody = void 0;
          this._inited = false;
        }
        var _proto = b2RigidBody2D.prototype;
        _proto.initialize = function initialize(com) {
          this._rigidBody = com;
          PhysicsSystem2D.instance._callAfterStep(this, this._init);
        };
        _proto.onDestroy = function onDestroy() {
          PhysicsSystem2D.instance._callAfterStep(this, this._destroy);
        };
        _proto.onEnable = function onEnable() {
          this.setActive(true);
        };
        _proto.onDisable = function onDisable() {
          this.setActive(false);
        };
        _proto.nodeTransformChanged = function nodeTransformChanged(type) {
          if (PhysicsSystem2D.instance.stepping) {
            return;
          }
          if (type & Node.TransformBit.SCALE) {
            var colliders = this.rigidBody.getComponents(Collider2D);
            for (var i = 0; i < colliders.length; i++) {
              colliders[i].apply();
            }
          }
          if (type & Node.TransformBit.POSITION) {
            this.syncPositionToPhysics(true);
          }
          if (type & Node.TransformBit.ROTATION) {
            this.syncRotationToPhysics(true);
          }
        };
        _proto._init = function _init() {
          if (this._inited) {
            return;
          }
          PhysicsSystem2D.instance.physicsWorld.addBody(this);
          this.setActive(false);
          this._inited = true;
        };
        _proto._destroy = function _destroy() {
          if (!this._inited) return;
          PhysicsSystem2D.instance.physicsWorld.removeBody(this);
          this._inited = false;
        };
        _proto.animate = function animate(dt) {
          var b2body = this._body;
          if (!b2body) return;
          var b2Pos = b2body.GetPosition();
          b2body.SetAwake(true);
          var timeStep = 1 / dt;
          tempVec2_1.x = (this._animatedPos.x - b2Pos.x) * timeStep;
          tempVec2_1.y = (this._animatedPos.y - b2Pos.y) * timeStep;
          b2body.SetLinearVelocity(tempVec2_1);

          //convert b2Rotation to [-PI~PI], which is the same as this._animatedAngle
          var b2Rotation = b2body.GetAngle() % TWO_PI;
          if (b2Rotation > Math.PI) {
            b2Rotation -= TWO_PI;
          }

          //calculate angular velocity
          var angularVelocity = (this._animatedAngle - b2Rotation) * timeStep;
          if (this._animatedAngle < -HALF_PI && b2Rotation > HALF_PI) {
            //ccw, crossing PI
            angularVelocity = (this._animatedAngle + TWO_PI - b2Rotation) * timeStep;
          }
          if (this._animatedAngle > HALF_PI && b2Rotation < -HALF_PI) {
            //cw, crossing PI
            angularVelocity = (this._animatedAngle - TWO_PI - b2Rotation) * timeStep;
          }
          b2body.SetAngularVelocity(angularVelocity);
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          var dirty = this._rigidBody.node.hasChangedFlags;
          if (dirty) {
            this.nodeTransformChanged(dirty);
          }
        };
        _proto.syncPositionToPhysics = function syncPositionToPhysics(enableAnimated) {
          if (enableAnimated === void 0) {
            enableAnimated = false;
          }
          var b2body = this._body;
          if (!b2body) return;
          var pos = this._rigidBody.node.worldPosition;
          var temp;
          var bodyType = this._rigidBody.type;
          if (bodyType === ERigidBody2DType.Animated) {
            temp = b2body.GetLinearVelocity();
          } else {
            temp = b2body.GetPosition();
          }
          temp.x = pos.x / PHYSICS_2D_PTM_RATIO;
          temp.y = pos.y / PHYSICS_2D_PTM_RATIO;
          if (bodyType === ERigidBody2DType.Animated && enableAnimated) {
            this._animatedPos.set(temp.x, temp.y);
          } else {
            b2body.SetTransformVec(temp, b2body.GetAngle());
          }
        };
        _proto.syncRotationToPhysics = function syncRotationToPhysics(enableAnimated) {
          if (enableAnimated === void 0) {
            enableAnimated = false;
          }
          var b2body = this._body;
          if (!b2body) return;
          var rot = this._rigidBody.node.worldRotation;
          var euler = tempVec3;
          Quat.toEulerInYXZOrder(euler, rot);
          var rotation = toRadian(euler.z);
          var bodyType = this._rigidBody.type;
          if (bodyType === ERigidBody2DType.Animated && enableAnimated) {
            this._animatedAngle = rotation;
          } else {
            b2body.SetTransformVec(b2body.GetPosition(), rotation);
          }
        };
        _proto.resetVelocity = function resetVelocity() {
          var b2body = this._body;
          if (!b2body) return;
          var temp = b2body.m_linearVelocity;
          temp.Set(0, 0);
          b2body.SetLinearVelocity(temp);
          b2body.SetAngularVelocity(0);
        };
        _proto.setType = function setType(v) {
          this._body.SetType(v);
        };
        _proto.setLinearDamping = function setLinearDamping(v) {
          this._body.SetLinearDamping(v);
        };
        _proto.setAngularDamping = function setAngularDamping(v) {
          this._body.SetAngularDamping(v);
        };
        _proto.setGravityScale = function setGravityScale(v) {
          this._body.SetGravityScale(v);
        };
        _proto.setFixedRotation = function setFixedRotation(v) {
          this._body.SetFixedRotation(v);
        };
        _proto.setAllowSleep = function setAllowSleep(v) {
          this._body.SetSleepingAllowed(v);
        };
        _proto.isActive = function isActive() {
          return this._body.IsActive();
        };
        _proto.setActive = function setActive(v) {
          this._body.SetActive(v);
        };
        _proto.wakeUp = function wakeUp() {
          this._body.SetAwake(true);
        };
        _proto.sleep = function sleep() {
          this._body.SetAwake(false);
        };
        _proto.getMass = function getMass() {
          return this._body.GetMass();
        };
        _proto.setLinearVelocity = function setLinearVelocity(v) {
          this._body.SetLinearVelocity(v);
        };
        _proto.getLinearVelocity = function getLinearVelocity(out) {
          var velocity = this._body.GetLinearVelocity();
          out.x = velocity.x;
          out.y = velocity.y;
          return out;
        };
        _proto.getLinearVelocityFromWorldPoint = function getLinearVelocityFromWorldPoint(worldPoint, out) {
          tempVec2_1.Set(worldPoint.x / PHYSICS_2D_PTM_RATIO, worldPoint.y / PHYSICS_2D_PTM_RATIO);
          this._body.GetLinearVelocityFromWorldPoint(tempVec2_1, out);
          out.x *= PHYSICS_2D_PTM_RATIO;
          out.y *= PHYSICS_2D_PTM_RATIO;
          return out;
        };
        _proto.setAngularVelocity = function setAngularVelocity(v) {
          this._body.SetAngularVelocity(v);
        };
        _proto.getAngularVelocity = function getAngularVelocity() {
          return this._body.GetAngularVelocity();
        };
        _proto.getLocalVector = function getLocalVector(worldVector, out) {
          out = out || new Vec2();
          tempVec2_1.Set(worldVector.x / PHYSICS_2D_PTM_RATIO, worldVector.y / PHYSICS_2D_PTM_RATIO);
          this._body.GetLocalVector(tempVec2_1, out);
          out.x *= PHYSICS_2D_PTM_RATIO;
          out.y *= PHYSICS_2D_PTM_RATIO;
          return out;
        };
        _proto.getWorldVector = function getWorldVector(localVector, out) {
          tempVec2_1.Set(localVector.x / PHYSICS_2D_PTM_RATIO, localVector.y / PHYSICS_2D_PTM_RATIO);
          this._body.GetWorldVector(tempVec2_1, out);
          out.x *= PHYSICS_2D_PTM_RATIO;
          out.y *= PHYSICS_2D_PTM_RATIO;
          return out;
        };
        _proto.getLocalPoint = function getLocalPoint(worldPoint, out) {
          out = out || new Vec2();
          tempVec2_1.Set(worldPoint.x / PHYSICS_2D_PTM_RATIO, worldPoint.y / PHYSICS_2D_PTM_RATIO);
          this._body.GetLocalPoint(tempVec2_1, out);
          out.x *= PHYSICS_2D_PTM_RATIO;
          out.y *= PHYSICS_2D_PTM_RATIO;
          return out;
        };
        _proto.getWorldPoint = function getWorldPoint(localPoint, out) {
          out = out || new Vec2();
          tempVec2_1.Set(localPoint.x / PHYSICS_2D_PTM_RATIO, localPoint.y / PHYSICS_2D_PTM_RATIO);
          this._body.GetWorldPoint(tempVec2_1, out);
          out.x *= PHYSICS_2D_PTM_RATIO;
          out.y *= PHYSICS_2D_PTM_RATIO;
          return out;
        };
        _proto.getLocalCenter = function getLocalCenter(out) {
          out = out || new Vec2();
          var pos = this._body.GetLocalCenter();
          out.x = pos.x * PHYSICS_2D_PTM_RATIO;
          out.y = pos.y * PHYSICS_2D_PTM_RATIO;
          return out;
        };
        _proto.getWorldCenter = function getWorldCenter(out) {
          out = out || new Vec2();
          var pos = this._body.GetWorldCenter();
          out.x = pos.x * PHYSICS_2D_PTM_RATIO;
          out.y = pos.y * PHYSICS_2D_PTM_RATIO;
          return out;
        };
        _proto.getInertia = function getInertia() {
          return this._body.GetInertia();
        };
        _proto.applyForce = function applyForce(force, point, wake) {
          if (this._body) {
            tempVec2_1.Set(point.x / PHYSICS_2D_PTM_RATIO, point.y / PHYSICS_2D_PTM_RATIO);
            this._body.ApplyForce(force, tempVec2_1, wake);
          }
        };
        _proto.applyForceToCenter = function applyForceToCenter(force, wake) {
          if (this._body) {
            this._body.ApplyForceToCenter(force, wake);
          }
        };
        _proto.applyTorque = function applyTorque(torque, wake) {
          if (this._body) {
            this._body.ApplyTorque(torque, wake);
          }
        };
        _proto.applyLinearImpulse = function applyLinearImpulse(impulse, point, wake) {
          if (this._body) {
            tempVec2_1.Set(point.x / PHYSICS_2D_PTM_RATIO, point.y / PHYSICS_2D_PTM_RATIO);
            this._body.ApplyLinearImpulse(impulse, tempVec2_1, wake);
          }
        };
        _proto.applyLinearImpulseToCenter = function applyLinearImpulseToCenter(impulse, wake) {
          if (this._body) {
            this._body.ApplyLinearImpulse(impulse, this._body.GetPosition(), wake);
          }
        };
        _proto.applyAngularImpulse = function applyAngularImpulse(impulse, wake) {
          if (this._body) {
            this._body.ApplyAngularImpulse(impulse, wake);
          }
        };
        _createClass(b2RigidBody2D, [{
          key: "impl",
          get: function get() {
            return this._body;
          }
        }, {
          key: "_imp",
          set: function set(v) {
            this._body = v;
          }
        }, {
          key: "rigidBody",
          get: function get() {
            return this._rigidBody;
          }
        }, {
          key: "isAwake",
          get: function get() {
            return this._body.IsAwake();
          }
        }, {
          key: "isSleeping",
          get: function get() {
            return !this._body.IsAwake();
          }
        }]);
        return b2RigidBody2D;
      }());
    }
  };
});