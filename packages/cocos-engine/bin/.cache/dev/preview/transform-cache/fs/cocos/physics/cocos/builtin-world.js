System.register("q-bundled:///fs/cocos/physics/cocos/builtin-world.js", ["../../core/index.js", "./builtin-shared-body.js", "../utils/array-collision-matrix.js", "../../../exports/physics-framework.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, error, js, geometry, warnID, Color, BuiltinSharedBody, ArrayCollisionMatrix, EPhysicsDrawFlags, director, hitPoint, TriggerEventObject, aabbTemp, AABB_LINE_COUNT, BuiltInWorld;
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
      error = _coreIndexJs.error;
      js = _coreIndexJs.js;
      geometry = _coreIndexJs.geometry;
      warnID = _coreIndexJs.warnID;
      Color = _coreIndexJs.Color;
    }, function (_builtinSharedBodyJs) {
      BuiltinSharedBody = _builtinSharedBodyJs.BuiltinSharedBody;
    }, function (_utilsArrayCollisionMatrixJs) {
      ArrayCollisionMatrix = _utilsArrayCollisionMatrixJs.ArrayCollisionMatrix;
    }, function (_exportsPhysicsFrameworkJs) {
      EPhysicsDrawFlags = _exportsPhysicsFrameworkJs.EPhysicsDrawFlags;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      hitPoint = new Vec3();
      TriggerEventObject = {
        type: 'onTriggerEnter',
        selfCollider: null,
        otherCollider: null,
        impl: {}
      };
      aabbTemp = new geometry.AABB();
      AABB_LINE_COUNT = 12;
      /**
       * Built-in collision system, intended for use as a
       * efficient discrete collision detector,
       * not a full physical simulator
       */
      _export("BuiltInWorld", BuiltInWorld = /*#__PURE__*/function () {
        function BuiltInWorld() {
          this.shapeArr = [];
          this.bodies = [];
          this._shapeArrPrev = [];
          this._collisionMatrix = new ArrayCollisionMatrix();
          this._collisionMatrixPrev = new ArrayCollisionMatrix();
          this._debugLineCount = 0;
          this._MAX_DEBUG_LINE_COUNT = 16384;
          this._debugDrawFlags = EPhysicsDrawFlags.NONE;
          this._debugConstraintSize = 0.3;
          this._aabbColor = new Color(0, 255, 255, 255);
          this._wireframeColor = new Color(255, 0, 255, 255);
        }
        var _proto = BuiltInWorld.prototype;
        _proto.sweepBox = function sweepBox(worldRay, halfExtent, orientation, options, pool, results) {
          warnID(9640);
          return false;
        };
        _proto.sweepBoxClosest = function sweepBoxClosest(worldRay, halfExtent, orientation, options, result) {
          warnID(9640);
          return false;
        };
        _proto.sweepSphere = function sweepSphere(worldRay, radius, options, pool, results) {
          warnID(9640);
          return false;
        };
        _proto.sweepSphereClosest = function sweepSphereClosest(worldRay, radius, options, result) {
          warnID(9640);
          return false;
        };
        _proto.sweepCapsule = function sweepCapsule(worldRay, radius, height, orientation, options, pool, results) {
          warnID(9640);
          return false;
        };
        _proto.sweepCapsuleClosest = function sweepCapsuleClosest(worldRay, radius, height, orientation, options, result) {
          warnID(9640);
          return false;
        };
        _proto.setGravity = function setGravity(v) {
          //empty
        };
        _proto.setAllowSleep = function setAllowSleep(v) {
          //empty
        };
        _proto.setDefaultMaterial = function setDefaultMaterial(v) {
          //empty
        };
        _proto.destroy = function destroy() {
          if (this.bodies.length) error('You should destroy all physics component first.');
        };
        _proto.step = function step(deltaTime) {
          // store and reset collision array
          var tmp = this._shapeArrPrev;
          this._shapeArrPrev = this.shapeArr;
          this.shapeArr = tmp;
          this.shapeArr.length = 0;

          // collision detection
          for (var i = 0; i < this.bodies.length; i++) {
            var bodyA = this.bodies[i];
            for (var j = i + 1; j < this.bodies.length; j++) {
              var bodyB = this.bodies[j];

              // first, Check collision filter masks
              if ((bodyA.collisionFilterGroup & bodyB.collisionFilterMask) === 0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask) === 0) {
                continue;
              }
              bodyA.intersects(bodyB);
            }
          }
          this._debugDraw();
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          for (var i = 0; i < this.bodies.length; i++) {
            this.bodies[i].syncSceneToPhysics();
          }
        };
        _proto.syncAfterEvents = function syncAfterEvents() {
          this.syncSceneToPhysics();
        };
        _proto.emitEvents = function emitEvents() {
          this.emitTriggerEvent();
        };
        _proto.raycastClosest = function raycastClosest(worldRay, options, out) {
          var tmp_d = Infinity;
          var max_d = options.maxDistance;
          var mask = options.mask;
          for (var i = 0; i < this.bodies.length; i++) {
            var body = this.bodies[i];
            if (!(body.collisionFilterGroup & mask)) continue;
            for (var _i = 0; _i < body.shapes.length; _i++) {
              var shape = body.shapes[_i];
              var distance = geometry.intersect.resolve(worldRay, shape.worldShape);
              if (distance === 0 || distance > max_d) {
                continue;
              }
              if (tmp_d > distance) {
                tmp_d = distance;
                Vec3.normalize(hitPoint, worldRay.d);
                Vec3.scaleAndAdd(hitPoint, worldRay.o, hitPoint, distance);
                out._assign(hitPoint, distance, shape.collider, Vec3.ZERO);
              }
            }
          }
          return !(tmp_d === Infinity);
        };
        _proto.raycast = function raycast(worldRay, options, pool, results) {
          var max_d = options.maxDistance;
          var mask = options.mask;
          for (var i = 0; i < this.bodies.length; i++) {
            var body = this.bodies[i];
            if (!(body.collisionFilterGroup & mask)) continue;
            for (var _i2 = 0; _i2 < body.shapes.length; _i2++) {
              var shape = body.shapes[_i2];
              var distance = geometry.intersect.resolve(worldRay, shape.worldShape);
              if (distance === 0 || distance > max_d) {
                continue;
              } else {
                var r = pool.add();
                worldRay.computeHit(hitPoint, distance);
                r._assign(hitPoint, distance, shape.collider, Vec3.ZERO);
                results.push(r);
              }
            }
          }
          return results.length > 0;
        };
        _proto.getSharedBody = function getSharedBody(node, wrappedBody) {
          return BuiltinSharedBody.getSharedBody(node, this, wrappedBody);
        };
        _proto.addSharedBody = function addSharedBody(body) {
          var index = this.bodies.indexOf(body);
          if (index < 0) {
            this.bodies.push(body);
          }
        };
        _proto.removeSharedBody = function removeSharedBody(body) {
          var index = this.bodies.indexOf(body);
          if (index >= 0) {
            js.array.fastRemoveAt(this.bodies, index);
          }
        };
        _proto.emitTriggerEvent = function emitTriggerEvent() {
          var shapeA;
          var shapeB;
          for (var i = 0; i < this.shapeArr.length; i += 2) {
            shapeA = this.shapeArr[i];
            shapeB = this.shapeArr[i + 1];
            TriggerEventObject.selfCollider = shapeA.collider;
            TriggerEventObject.otherCollider = shapeB.collider;
            this._collisionMatrix.set(shapeA.id, shapeB.id, true);
            if (this._collisionMatrixPrev.get(shapeA.id, shapeB.id)) {
              // emit stay
              TriggerEventObject.type = 'onTriggerStay';
            } else {
              // first trigger, emit enter
              TriggerEventObject.type = 'onTriggerEnter';
            }
            if (shapeA.collider) {
              shapeA.collider.emit(TriggerEventObject.type, TriggerEventObject);
            }
            TriggerEventObject.selfCollider = shapeB.collider;
            TriggerEventObject.otherCollider = shapeA.collider;
            if (shapeB.collider) {
              shapeB.collider.emit(TriggerEventObject.type, TriggerEventObject);
            }
          }
          for (var _i3 = 0; _i3 < this._shapeArrPrev.length; _i3 += 2) {
            shapeA = this._shapeArrPrev[_i3];
            shapeB = this._shapeArrPrev[_i3 + 1];
            if (this._collisionMatrixPrev.get(shapeA.id, shapeB.id)) {
              if (!this._collisionMatrix.get(shapeA.id, shapeB.id)) {
                // emit exit
                TriggerEventObject.type = 'onTriggerExit';
                TriggerEventObject.selfCollider = shapeA.collider;
                TriggerEventObject.otherCollider = shapeB.collider;
                if (shapeA.collider) {
                  shapeA.collider.emit(TriggerEventObject.type, TriggerEventObject);
                }
                TriggerEventObject.selfCollider = shapeB.collider;
                TriggerEventObject.otherCollider = shapeA.collider;
                if (shapeB.collider) {
                  shapeB.collider.emit(TriggerEventObject.type, TriggerEventObject);
                }
                this._collisionMatrix.set(shapeA.id, shapeB.id, false);
              }
            }
          }
          var temp = this._collisionMatrixPrev.matrix;
          this._collisionMatrixPrev.matrix = this._collisionMatrix.matrix;
          this._collisionMatrix.matrix = temp;
          this._collisionMatrix.reset();
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
              for (var j = 0; j < body.shapes.length; j++) {
                var shape = body.shapes[j];
                if (this._debugLineCount + AABB_LINE_COUNT < this._MAX_DEBUG_LINE_COUNT) {
                  this._debugLineCount += AABB_LINE_COUNT;
                  shape.getAABB(aabbTemp);
                  debugRenderer.addBoundingBox(aabbTemp, this._aabbColor);
                }
              }
            }
          }
        };
        _createClass(BuiltInWorld, [{
          key: "impl",
          get: function get() {
            return this;
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
        return BuiltInWorld;
      }());
    }
  };
});