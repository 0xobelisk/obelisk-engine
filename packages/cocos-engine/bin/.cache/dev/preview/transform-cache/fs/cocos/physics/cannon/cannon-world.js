System.register("q-bundled:///fs/cocos/physics/cannon/cannon-world.js", ["@cocos/cannon", "../../core/index.js", "./cannon-util.js", "./shapes/cannon-shape.js", "./cannon-shared-body.js", "../framework/index.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var CANNON, Vec3, error, js, geometry, warnID, Color, fillRaycastResult, toCannonRaycastOptions, CannonShape, CannonSharedBody, EPhysicsDrawFlags, director, aabbTemp, AABB_LINE_COUNT, CannonWorld, from, to, raycastOpt;
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
  function setupFromAndTo(worldRay, distance) {
    Vec3.copy(from, worldRay.o);
    worldRay.computeHit(to, distance);
  }
  return {
    setters: [function (_cocosCannon) {
      CANNON = _cocosCannon.default;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      error = _coreIndexJs.error;
      js = _coreIndexJs.js;
      geometry = _coreIndexJs.geometry;
      warnID = _coreIndexJs.warnID;
      Color = _coreIndexJs.Color;
    }, function (_cannonUtilJs) {
      fillRaycastResult = _cannonUtilJs.fillRaycastResult;
      toCannonRaycastOptions = _cannonUtilJs.toCannonRaycastOptions;
    }, function (_shapesCannonShapeJs) {
      CannonShape = _shapesCannonShapeJs.CannonShape;
    }, function (_cannonSharedBodyJs) {
      CannonSharedBody = _cannonSharedBodyJs.CannonSharedBody;
    }, function (_frameworkIndexJs) {
      EPhysicsDrawFlags = _frameworkIndexJs.EPhysicsDrawFlags;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      aabbTemp = new geometry.AABB();
      AABB_LINE_COUNT = 12;
      _export("CannonWorld", CannonWorld = /*#__PURE__*/function () {
        var _proto = CannonWorld.prototype;
        _proto.setDefaultMaterial = function setDefaultMaterial(mat) {
          this._world.defaultMaterial.friction = mat.friction;
          this._world.defaultMaterial.restitution = mat.restitution;
          if (CannonShape.idToMaterial[mat.id] != null) {
            CannonShape.idToMaterial[mat.id] = this._world.defaultMaterial;
          }
        };
        _proto.setAllowSleep = function setAllowSleep(v) {
          this._world.allowSleep = v;
        };
        _proto.setGravity = function setGravity(gravity) {
          Vec3.copy(this._world.gravity, gravity);
        }

        // get defaultContactMaterial () {
        //     return this._defaultContactMaterial;
        // }
        ;

        function CannonWorld() {
          this.bodies = [];
          this.constraints = [];
          this._world = void 0;
          this._debugLineCount = 0;
          this._MAX_DEBUG_LINE_COUNT = 16384;
          this._debugDrawFlags = EPhysicsDrawFlags.NONE;
          this._debugConstraintSize = 0.3;
          this._aabbColor = new Color(0, 255, 255, 255);
          this._wireframeColor = new Color(255, 0, 255, 255);
          this._world = new CANNON.World();
          this._world.broadphase = new CANNON.NaiveBroadphase();
          // this._world.broadphase = new CANNON.SAPBroadphase(this._world);
          this._world.solver.iterations = 10;
          this._world.solver.tolerance = 0.0001;
          this._world.defaultContactMaterial.contactEquationStiffness = 1000000;
          this._world.defaultContactMaterial.frictionEquationStiffness = 1000000;
          this._world.defaultContactMaterial.contactEquationRelaxation = 3;
          this._world.defaultContactMaterial.frictionEquationRelaxation = 3;
        }
        _proto.sweepBox = function sweepBox(worldRay, halfExtent, orientation, options, pool, results) {
          warnID(9641);
          return false;
        };
        _proto.sweepBoxClosest = function sweepBoxClosest(worldRay, halfExtent, orientation, options, result) {
          warnID(9641);
          return false;
        };
        _proto.sweepSphere = function sweepSphere(worldRay, radius, options, pool, results) {
          warnID(9641);
          return false;
        };
        _proto.sweepSphereClosest = function sweepSphereClosest(worldRay, radius, options, result) {
          warnID(9641);
          return false;
        };
        _proto.sweepCapsule = function sweepCapsule(worldRay, radius, height, orientation, options, pool, results) {
          warnID(9641);
          return false;
        };
        _proto.sweepCapsuleClosest = function sweepCapsuleClosest(worldRay, radius, height, orientation, options, result) {
          warnID(9641);
          return false;
        };
        _proto.destroy = function destroy() {
          if (this.constraints.length || this.bodies.length) error('You should destroy all physics component first.');
          this._world.broadphase = null;
          this._world = null;
        };
        _proto.emitEvents = function emitEvents() {
          this._world.emitTriggeredEvents();
          this._world.emitCollisionEvents();
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          for (var i = 0; i < this.bodies.length; i++) {
            this.bodies[i].syncSceneToPhysics();
          }
        };
        _proto.syncAfterEvents = function syncAfterEvents() {
          this.syncSceneToPhysics();
        };
        _proto.step = function step(deltaTime, timeSinceLastCalled, maxSubStep) {
          if (this.bodies.length === 0) return;
          this._world.step(deltaTime, timeSinceLastCalled, maxSubStep);

          // sync physics to scene
          for (var i = 0; i < this.bodies.length; i++) {
            this.bodies[i].syncPhysicsToScene();
          }
          this._debugDraw();
        };
        _proto.raycastClosest = function raycastClosest(worldRay, options, result) {
          setupFromAndTo(worldRay, options.maxDistance);
          toCannonRaycastOptions(raycastOpt, options);
          var hit = this._world.raycastClosest(from, to, raycastOpt, CannonWorld.rayResult);
          if (hit) {
            fillRaycastResult(result, CannonWorld.rayResult);
          }
          return hit;
        };
        _proto.raycast = function raycast(worldRay, options, pool, results) {
          setupFromAndTo(worldRay, options.maxDistance);
          toCannonRaycastOptions(raycastOpt, options);
          var hit = this._world.raycastAll(from, to, raycastOpt, function (result) {
            var r = pool.add();
            fillRaycastResult(r, result);
            results.push(r);
          });
          return hit;
        };
        _proto.getSharedBody = function getSharedBody(node, wrappedBody) {
          return CannonSharedBody.getSharedBody(node, this, wrappedBody);
        };
        _proto.addSharedBody = function addSharedBody(sharedBody) {
          var i = this.bodies.indexOf(sharedBody);
          if (i < 0) {
            this.bodies.push(sharedBody);
            this._world.addBody(sharedBody.body);
          }
        };
        _proto.removeSharedBody = function removeSharedBody(sharedBody) {
          var i = this.bodies.indexOf(sharedBody);
          if (i >= 0) {
            js.array.fastRemoveAt(this.bodies, i);
            this._world.remove(sharedBody.body);
          }
        }

        //  addContactMaterial (contactMaterial: ContactMaterial) {
        //     this._cannonWorld.addContactMaterial(contactMaterial._getImpl());
        // }
        ;
        _proto.addConstraint = function addConstraint(constraint) {
          var i = this.constraints.indexOf(constraint);
          if (i < 0) {
            this.constraints.push(constraint);
            this._world.addConstraint(constraint.impl);
          }
        };
        _proto.removeConstraint = function removeConstraint(constraint) {
          var i = this.constraints.indexOf(constraint);
          if (i >= 0) {
            js.array.fastRemoveAt(this.constraints, i);
            this._world.removeConstraint(constraint.impl);
          }
        };
        _proto._getDebugRenderer = function _getDebugRenderer() {
          var _mainWindow;
          var cameras = (_mainWindow = director.root.mainWindow) === null || _mainWindow === void 0 ? void 0 : _mainWindow.cameras;
          if (!cameras) return null;
          if (cameras.length === 0) return null;
          if (!cameras[0]) return null;
          cameras[0].initGeometryRenderer();
          return cameras[0].geometryRenderer;
        };
        _proto._debugDraw = function _debugDraw() {
          var debugRenderer = this._getDebugRenderer();
          if (!debugRenderer) return;
          this._debugLineCount = 0;
          if (this._debugDrawFlags & EPhysicsDrawFlags.AABB) {
            for (var i = 0; i < this.bodies.length; i++) {
              var body = this.bodies[i];
              for (var j = 0; j < body.wrappedShapes.length; j++) {
                var shape = body.wrappedShapes[j];
                if (this._debugLineCount + AABB_LINE_COUNT < this._MAX_DEBUG_LINE_COUNT) {
                  this._debugLineCount += AABB_LINE_COUNT;
                  shape.getAABB(aabbTemp);
                  debugRenderer.addBoundingBox(aabbTemp, this._aabbColor);
                }
              }
            }
          }
        };
        _createClass(CannonWorld, [{
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
          }
        }, {
          key: "debugDrawConstraintSize",
          get: function get() {
            return this._debugConstraintSize;
          },
          set: function set(v) {
            this._debugConstraintSize = v;
          }
        }]);
        return CannonWorld;
      }());
      CannonWorld.rayResult = new CANNON.RaycastResult();
      from = new CANNON.Vec3();
      to = new CANNON.Vec3();
      raycastOpt = {
        checkCollisionResponse: false,
        collisionFilterGroup: -1,
        collisionFilterMask: -1,
        skipBackfaces: true
      };
    }
  };
});