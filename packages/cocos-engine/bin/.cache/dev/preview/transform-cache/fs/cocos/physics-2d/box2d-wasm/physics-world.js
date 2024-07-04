System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/physics-world.js", ["../../../../virtual/internal%253Aconstants.js", "./instantiated.js", "../../core/index.js", "../framework/physics-types.js", "../../2d/framework/index.js", "../../2d/components/index.js", "./platform/physics-contact-listener.js", "./platform/physics-aabb-query-callback.js", "./platform/physics-ray-cast-callback.js", "./physics-contact.js", "../framework/index.js", "./platform/physics-debug-draw.js", "../../scene-graph/index.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, B2, getImplPtr, addImplPtrReference, addImplPtrReferenceWASM, getTSObjectFromWASMObjectPtr, removeImplPtrReference, removeImplPtrReferenceWASM, B2ObjectType, Vec3, Quat, Vec2, toDegree, CCObject, js, PHYSICS_2D_PTM_RATIO, ERaycast2DType, ERigidBody2DType, Canvas, Graphics, PhysicsContactListener, PhysicsAABBQueryCallback, PhysicsRayCastCallback, PhysicsContact, Contact2DType, PhysicsDebugDraw, Node, find, Layers, director, tempVec3, tempVec2_1, tempVec2_2, tempB2Vec2_1, testResults, B2PhysicsWorld;
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
      getImplPtr = _instantiatedJs.getImplPtr;
      addImplPtrReference = _instantiatedJs.addImplPtrReference;
      addImplPtrReferenceWASM = _instantiatedJs.addImplPtrReferenceWASM;
      getTSObjectFromWASMObjectPtr = _instantiatedJs.getTSObjectFromWASMObjectPtr;
      removeImplPtrReference = _instantiatedJs.removeImplPtrReference;
      removeImplPtrReferenceWASM = _instantiatedJs.removeImplPtrReferenceWASM;
      B2ObjectType = _instantiatedJs.B2ObjectType;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
      Vec2 = _coreIndexJs.Vec2;
      toDegree = _coreIndexJs.toDegree;
      CCObject = _coreIndexJs.CCObject;
      js = _coreIndexJs.js;
    }, function (_frameworkPhysicsTypesJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkPhysicsTypesJs.PHYSICS_2D_PTM_RATIO;
      ERaycast2DType = _frameworkPhysicsTypesJs.ERaycast2DType;
      ERigidBody2DType = _frameworkPhysicsTypesJs.ERigidBody2DType;
    }, function (_dFrameworkIndexJs) {
      Canvas = _dFrameworkIndexJs.Canvas;
    }, function (_dComponentsIndexJs) {
      Graphics = _dComponentsIndexJs.Graphics;
    }, function (_platformPhysicsContactListenerJs) {
      PhysicsContactListener = _platformPhysicsContactListenerJs.PhysicsContactListener;
    }, function (_platformPhysicsAabbQueryCallbackJs) {
      PhysicsAABBQueryCallback = _platformPhysicsAabbQueryCallbackJs.PhysicsAABBQueryCallback;
    }, function (_platformPhysicsRayCastCallbackJs) {
      PhysicsRayCastCallback = _platformPhysicsRayCastCallbackJs.PhysicsRayCastCallback;
    }, function (_physicsContactJs) {
      PhysicsContact = _physicsContactJs.PhysicsContact;
    }, function (_frameworkIndexJs) {
      Contact2DType = _frameworkIndexJs.Contact2DType;
    }, function (_platformPhysicsDebugDrawJs) {
      PhysicsDebugDraw = _platformPhysicsDebugDrawJs.PhysicsDebugDraw;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
      find = _sceneGraphIndexJs.find;
      Layers = _sceneGraphIndexJs.Layers;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      tempVec3 = new Vec3();
      tempVec2_1 = new Vec2();
      tempVec2_2 = new Vec2();
      tempB2Vec2_1 = {
        x: 0,
        y: 0
      }; // const tempB2AABB = null;//new B2.AABB();
      testResults = [];
      _export("B2PhysicsWorld", B2PhysicsWorld = /*#__PURE__*/function () {
        function B2PhysicsWorld() {
          this._world = void 0;
          this._bodies = [];
          this._animatedBodies = [];
          this._rotationAxis = new Vec3();
          this._physicsGroundBody = void 0;
          this._contactListener = void 0;
          this._aabbQueryCallback = void 0;
          this._raycastQueryCallback = void 0;
          this._temoBodyDef = void 0;
          this._tempB2AABB = void 0;
          this.tempB2FixtureDefPtr = void 0;
          this._debugGraphics = null;
          this._b2DebugDrawer = null;
          this._debugDrawFlags = 0;
          this._world = new B2.World({
            x: 0,
            y: -10
          });
          this._physicsGroundBody = this._world.CreateBody(new B2.BodyDef());
          PhysicsContactListener._BeginContact = this._onBeginContact;
          PhysicsContactListener._EndContact = this._onEndContact;
          PhysicsContactListener._PreSolve = this._onPreSolve;
          PhysicsContactListener._PostSolve = this._onPostSolve;
          this._contactListener = B2.ContactListener.implement(PhysicsContactListener.callback);
          this._world.SetContactListener(this._contactListener);
          this._aabbQueryCallback = B2.QueryCallback.implement(PhysicsAABBQueryCallback.callback);
          this._raycastQueryCallback = B2.RayCastCallback.implement(PhysicsRayCastCallback.callback);
          this._temoBodyDef = new B2.BodyDef();
          this._tempB2AABB = new B2.AABB();
          this.tempB2FixtureDefPtr = B2.FixtureDefNew();
        }
        var _proto = B2PhysicsWorld.prototype;
        _proto._checkDebugDrawValid = function _checkDebugDrawValid() {
          if (EDITOR_NOT_IN_PREVIEW) return;
          if (!this._debugGraphics || !this._debugGraphics.isValid) {
            var canvas = find('Canvas');
            if (!canvas) {
              var scene = director.getScene();
              if (!scene) {
                return;
              }
              canvas = new Node('Canvas');
              canvas.addComponent(Canvas);
              canvas.parent = scene;
            }
            var node = new Node('PHYSICS_2D_DEBUG_DRAW');
            // node.zIndex = cc.macro.MAX_ZINDEX;
            node.hideFlags |= CCObject.Flags.DontSave;
            node.parent = canvas;
            node.worldPosition = Vec3.ZERO;
            node.layer = Layers.Enum.UI_2D;
            this._debugGraphics = node.addComponent(Graphics);
            this._debugGraphics.lineWidth = 3;
            PhysicsDebugDraw._drawer = this._debugGraphics;
            var debugDraw = B2.Draw.implement(PhysicsDebugDraw.callback); //new PhysicsDebugDraw();

            this._b2DebugDrawer = debugDraw;
            this._world.SetDebugDraw(debugDraw);
          }
          var parent = this._debugGraphics.node.parent;
          this._debugGraphics.node.setSiblingIndex(parent.children.length - 1);
          if (this._b2DebugDrawer) {
            this._b2DebugDrawer.SetFlags(this.debugDrawFlags);
          }
        };
        _proto.setGravity = function setGravity(v) {
          this._world.SetGravity(v);
        };
        _proto.setAllowSleep = function setAllowSleep(v) {
          this._world.SetAllowSleeping(true);
        };
        _proto.step = function step(deltaTime, velocityIterations, positionIterations) {
          if (velocityIterations === void 0) {
            velocityIterations = 10;
          }
          if (positionIterations === void 0) {
            positionIterations = 10;
          }
          var animatedBodies = this._animatedBodies;
          for (var i = 0, l = animatedBodies.length; i < l; i++) {
            animatedBodies[i].animate(deltaTime);
          }
          this._world.Step(deltaTime, velocityIterations, positionIterations);
        };
        _proto.raycast = function raycast(p1, p2, type, mask) {
          if (p1.equals(p2)) {
            return [];
          }
          type = type || ERaycast2DType.Closest;
          tempVec2_1.x = p1.x / PHYSICS_2D_PTM_RATIO;
          tempVec2_1.y = p1.y / PHYSICS_2D_PTM_RATIO;
          tempVec2_2.x = p2.x / PHYSICS_2D_PTM_RATIO;
          tempVec2_2.y = p2.y / PHYSICS_2D_PTM_RATIO;
          PhysicsRayCastCallback.init(type, mask);
          this._world.RayCast(this._raycastQueryCallback, tempVec2_1, tempVec2_2);
          var fixtures = PhysicsRayCastCallback.getFixtures();
          if (fixtures.length > 0) {
            var points = PhysicsRayCastCallback.getPoints();
            var normals = PhysicsRayCastCallback.getNormals();
            var fractions = PhysicsRayCastCallback.getFractions();
            var results = [];
            for (var i = 0, l = fixtures.length; i < l; i++) {
              var fixture = fixtures[i];
              var shape = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, fixture);
              var collider = shape.collider;
              if (type === ERaycast2DType.AllClosest) {
                var result = void 0;
                for (var j = 0; j < results.length; j++) {
                  if (results[j].collider === collider) {
                    result = results[j];
                  }
                }
                if (result) {
                  if (fractions[i] < result.fraction) {
                    result.fixtureIndex = shape.getFixtureIndex(fixture);
                    result.point.x = points[i].x * PHYSICS_2D_PTM_RATIO;
                    result.point.y = points[i].y * PHYSICS_2D_PTM_RATIO;
                    result.normal.x = normals[i].x;
                    result.normal.y = normals[i].y;
                    result.fraction = fractions[i];
                  }
                  continue;
                }
              }
              results.push({
                collider: collider,
                fixtureIndex: shape.getFixtureIndex(fixture),
                point: new Vec2(points[i].x * PHYSICS_2D_PTM_RATIO, points[i].y * PHYSICS_2D_PTM_RATIO),
                normal: new Vec2(normals[i].x, normals[i].y),
                fraction: fractions[i]
              });
            }
            return results;
          }
          return [];
        };
        _proto.syncPhysicsToScene = function syncPhysicsToScene() {
          var bodies = this._bodies;
          for (var i = 0, l = bodies.length; i < l; i++) {
            var body = bodies[i];
            var bodyComp = body.rigidBody;
            if (bodyComp.type === ERigidBody2DType.Animated) {
              body.resetVelocity();
              continue;
            }
            var node = bodyComp.node;
            var b2body = body.impl;

            // position
            var pos = b2body.GetPosition();
            tempVec3.x = pos.x * PHYSICS_2D_PTM_RATIO;
            tempVec3.y = pos.y * PHYSICS_2D_PTM_RATIO;
            tempVec3.z = 0;
            node.worldPosition = tempVec3;

            // rotation
            var angle = toDegree(b2body.GetAngle());
            node.setWorldRotationFromEuler(0, 0, angle);
          }
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          var bodies = this._bodies;
          for (var i = 0; i < bodies.length; i++) {
            bodies[i].syncSceneToPhysics();
          }
        };
        _proto.addBody = function addBody(body) {
          var bodies = this._bodies;
          if (bodies.includes(body)) {
            return;
          }
          var bodyDef = this._temoBodyDef;
          var comp = body.rigidBody;
          bodyDef.allowSleep = comp.allowSleep;
          bodyDef.gravityScale = comp.gravityScale;
          bodyDef.linearDamping = comp.linearDamping;
          bodyDef.angularDamping = comp.angularDamping;
          bodyDef.fixedRotation = comp.fixedRotation;
          bodyDef.bullet = comp.bullet;
          var node = comp.node;
          var pos = node.worldPosition;
          bodyDef.position = {
            x: pos.x / PHYSICS_2D_PTM_RATIO,
            y: pos.y / PHYSICS_2D_PTM_RATIO
          };
          tempVec3.z = Quat.getAxisAngle(this._rotationAxis, node.worldRotation);
          if (this._rotationAxis.z < 0.0) {
            tempVec3.z = Math.PI * 2 - tempVec3.z;
          }
          bodyDef.angle = tempVec3.z;
          bodyDef.awake = comp.awakeOnLoad;
          if (comp.type === ERigidBody2DType.Animated) {
            bodyDef.type = B2.BodyType.b2_kinematicBody;
            this._animatedBodies.push(body);
            body._animatedPos.set(bodyDef.position.x, bodyDef.position.y);
            body._animatedAngle = bodyDef.angle;
          } else {
            switch (comp.type) {
              case ERigidBody2DType.Dynamic:
                bodyDef.type = B2.BodyType.b2_dynamicBody;
                break;
              case ERigidBody2DType.Static:
                bodyDef.type = B2.BodyType.b2_staticBody;
                break;
              case ERigidBody2DType.Kinematic:
                bodyDef.type = B2.BodyType.b2_kinematicBody;
                break;
              default:
                bodyDef.type = B2.BodyType.b2_staticBody;
                break;
            }
          }

          // read private property
          var compPrivate = comp;
          var linearVelocity = compPrivate._linearVelocity;
          bodyDef.linearVelocity = {
            x: linearVelocity.x,
            y: linearVelocity.y
          };
          bodyDef.angularVelocity = compPrivate._angularVelocity;
          var b2Body = this._world.CreateBody(bodyDef);
          addImplPtrReference(B2ObjectType.Body, body, getImplPtr(b2Body));
          addImplPtrReferenceWASM(B2ObjectType.Body, b2Body, getImplPtr(b2Body));
          body._imp = b2Body;
          this._bodies.push(body);
        };
        _proto.removeBody = function removeBody(body) {
          if (!this._bodies.includes(body)) {
            return;
          }
          if (body.impl) {
            removeImplPtrReference(B2ObjectType.Body, getImplPtr(body.impl));
            removeImplPtrReferenceWASM(B2ObjectType.Body, getImplPtr(body.impl));
            this._world.DestroyBody(body.impl);
            body._imp = null;
          }
          js.array.remove(this._bodies, body);
          var comp = body.rigidBody;
          if (comp.type === ERigidBody2DType.Animated) {
            js.array.remove(this._animatedBodies, body);
          }
        };
        _proto.registerContactFixture = function registerContactFixture(fixture) {
          //B2.Fixture ptr
          this._contactListener.registerContactFixture(fixture);
        };
        _proto.unregisterContactFixture = function unregisterContactFixture(fixture) {
          //B2.Fixture ptr
          this._contactListener.unregisterContactFixture(fixture);
        };
        _proto.testPoint = function testPoint(point) {
          var x = tempVec2_1.x = point.x / PHYSICS_2D_PTM_RATIO;
          var y = tempVec2_1.y = point.y / PHYSICS_2D_PTM_RATIO;
          var d = 0.2 / PHYSICS_2D_PTM_RATIO;
          this._tempB2AABB.lowerBound = {
            x: x - d,
            y: y - d
          };
          this._tempB2AABB.upperBound = {
            x: x + d,
            y: y + d
          };
          var callback = this._aabbQueryCallback;
          PhysicsAABBQueryCallback.init(tempVec2_1);
          this._world.QueryAABB(callback, this._tempB2AABB);
          var fixtures = PhysicsAABBQueryCallback.getFixtures();
          testResults.length = 0;
          for (var i = 0; i < fixtures.length; i++) {
            var collider = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, fixtures[i]).collider;
            if (!testResults.includes(collider)) {
              testResults.push(collider);
            }
          }
          return testResults;
        };
        _proto.testAABB = function testAABB(rect) {
          this._tempB2AABB.lowerBound = {
            x: rect.xMin / PHYSICS_2D_PTM_RATIO,
            y: rect.yMin / PHYSICS_2D_PTM_RATIO
          };
          this._tempB2AABB.upperBound = {
            x: rect.xMax / PHYSICS_2D_PTM_RATIO,
            y: rect.yMax / PHYSICS_2D_PTM_RATIO
          };
          var callback = this._aabbQueryCallback;
          PhysicsAABBQueryCallback.init();
          this._world.QueryAABB(callback, this._tempB2AABB);
          var fixtures = PhysicsAABBQueryCallback.getFixtures();
          testResults.length = 0;
          for (var i = 0; i < fixtures.length; i++) {
            var collider = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, fixtures[i]).collider;
            if (!testResults.includes(collider)) {
              testResults.push(collider);
            }
          }
          return testResults;
        };
        _proto.drawDebug = function drawDebug() {
          this._checkDebugDrawValid();
          if (!this._debugGraphics) {
            return;
          }
          this._debugGraphics.clear();
          this._world.DebugDraw();
        };
        _proto._onBeginContact = function _onBeginContact(b2contact) {
          var c = PhysicsContact.get(b2contact);
          c.emit(Contact2DType.BEGIN_CONTACT);
        };
        _proto._onEndContact = function _onEndContact(b2contact) {
          var c = getTSObjectFromWASMObjectPtr(B2ObjectType.Contact, b2contact);
          if (!c) {
            return;
          }
          c.emit(Contact2DType.END_CONTACT);
          PhysicsContact.put(b2contact);
        };
        _proto._onPreSolve = function _onPreSolve(b2contact) {
          var c = getTSObjectFromWASMObjectPtr(B2ObjectType.Contact, b2contact);
          if (!c) {
            return;
          }
          c.emit(Contact2DType.PRE_SOLVE);
        };
        _proto._onPostSolve = function _onPostSolve(b2contact, impulse) {
          var c = getTSObjectFromWASMObjectPtr(B2ObjectType.Contact, b2contact);
          if (!c) {
            return;
          }

          // impulse only survive during post sole callback
          c._setImpulse(impulse);
          c.emit(Contact2DType.POST_SOLVE);
          c._setImpulse(0);
        };
        _createClass(B2PhysicsWorld, [{
          key: "impl",
          get: function get() {
            return this._world;
          }
        }, {
          key: "groundBodyImpl",
          get: function get() {
            return this._physicsGroundBody;
          }
        }, {
          key: "debugDrawFlags",
          get: function get() {
            return this._debugDrawFlags;
          },
          set: function set(v) {
            if (EDITOR_NOT_IN_PREVIEW) return;
            if (!v) {
              if (this._debugGraphics) {
                this._debugGraphics.node.parent = null;
              }
            }
            this._debugDrawFlags = v;
          }
        }]);
        return B2PhysicsWorld;
      }());
    }
  };
});