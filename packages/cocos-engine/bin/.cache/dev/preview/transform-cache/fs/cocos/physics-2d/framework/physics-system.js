System.register("q-bundled:///fs/cocos/physics-2d/framework/physics-system.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "./physics-selector.js", "../../physics/framework/collision-matrix.js", "./physics-types.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, System, Vec2, Eventify, Enum, Settings, settings, cclegacy, createPhysicsWorld, selector, CollisionMatrix, ERaycast2DType, PHYSICS_2D_PTM_RATIO, PhysicsGroup, director, Director, instance, PhysicsSystem2D;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    }, function (_coreIndexJs) {
      System = _coreIndexJs.System;
      Vec2 = _coreIndexJs.Vec2;
      Eventify = _coreIndexJs.Eventify;
      Enum = _coreIndexJs.Enum;
      Settings = _coreIndexJs.Settings;
      settings = _coreIndexJs.settings;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_physicsSelectorJs) {
      createPhysicsWorld = _physicsSelectorJs.createPhysicsWorld;
      selector = _physicsSelectorJs.selector;
    }, function (_physicsFrameworkCollisionMatrixJs) {
      CollisionMatrix = _physicsFrameworkCollisionMatrixJs.CollisionMatrix;
    }, function (_physicsTypesJs) {
      ERaycast2DType = _physicsTypesJs.ERaycast2DType;
      PHYSICS_2D_PTM_RATIO = _physicsTypesJs.PHYSICS_2D_PTM_RATIO;
      PhysicsGroup = _physicsTypesJs.PhysicsGroup;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
      Director = _gameIndexJs.Director;
    }],
    execute: function () {
      instance = null;
      cclegacy.internal.PhysicsGroup2D = PhysicsGroup;
      _export("PhysicsSystem2D", PhysicsSystem2D = /*#__PURE__*/function (_Eventify) {
        _inheritsLoose(PhysicsSystem2D, _Eventify);
        function PhysicsSystem2D() {
          var _settings$querySettin, _settings$querySettin2, _settings$querySettin3, _settings$querySettin4;
          var _this;
          _this = _Eventify.call(this) || this;
          /**
           * @en
           * The velocity iterations for the velocity constraint solver.
           * @zh
           * 速度更新迭代数。
           */
          _this.velocityIterations = 10;
          /**
           * @en
           * The position Iterations for the position constraint solver.
           * @zh
           * 位置迭代更新数。
           */
          _this.positionIterations = 10;
          /**
           * @en
           * Gets the collision matrix。
           * @zh
           * 获取碰撞矩阵。
           */
          _this.collisionMatrix = new CollisionMatrix();
          _this._enable = true;
          _this._allowSleep = true;
          _this._maxSubSteps = 1;
          _this._fixedTimeStep = 1.0 / 60.0;
          _this._autoSimulation = true;
          _this._accumulator = 0;
          _this._steping = false;
          _this._gravity = new Vec2(0, -10 * PHYSICS_2D_PTM_RATIO);
          _this._delayEvents = [];
          var gravity = settings.querySettings(Settings.Category.PHYSICS, 'gravity');
          if (gravity) {
            Vec2.copy(_this._gravity, gravity);
            _this._gravity.multiplyScalar(PHYSICS_2D_PTM_RATIO);
          }
          _this._allowSleep = (_settings$querySettin = settings.querySettings(Settings.Category.PHYSICS, 'allowSleep')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : _this._allowSleep;
          _this._fixedTimeStep = (_settings$querySettin2 = settings.querySettings(Settings.Category.PHYSICS, 'fixedTimeStep')) !== null && _settings$querySettin2 !== void 0 ? _settings$querySettin2 : _this._fixedTimeStep;
          _this._maxSubSteps = (_settings$querySettin3 = settings.querySettings(Settings.Category.PHYSICS, 'maxSubSteps')) !== null && _settings$querySettin3 !== void 0 ? _settings$querySettin3 : _this._maxSubSteps;
          _this._autoSimulation = (_settings$querySettin4 = settings.querySettings(Settings.Category.PHYSICS, 'autoSimulation')) !== null && _settings$querySettin4 !== void 0 ? _settings$querySettin4 : _this._autoSimulation;
          var collisionMatrix = settings.querySettings(Settings.Category.PHYSICS, 'collisionMatrix');
          if (collisionMatrix) {
            for (var i in collisionMatrix) {
              var bit = parseInt(i);
              var value = 1 << parseInt(i);
              _this.collisionMatrix["" + value] = collisionMatrix[bit];
            }
          }
          var collisionGroups = settings.querySettings(Settings.Category.PHYSICS, 'collisionGroups');
          if (collisionGroups) {
            var cg = collisionGroups;
            if (cg instanceof Array) {
              cg.forEach(function (v) {
                PhysicsGroup[v.name] = 1 << v.index;
              });
              Enum.update(PhysicsGroup);
            }
          }
          var mutableSelector = selector;
          mutableSelector.physicsWorld = createPhysicsWorld();
          _this.gravity = _this._gravity;
          _this.allowSleep = _this._allowSleep;
          return _this;
        }

        /**
        * @en
        * Perform a simulation of the physics system, which will now be performed automatically on each frame.
        * @zh
        * 执行一次物理系统的模拟，目前将在每帧自动执行一次。
        * @param deltaTime @en time step. @zh 与上一次执行相差的时间，目前为每帧消耗时间。
        */
        var _proto = PhysicsSystem2D.prototype;
        _proto.postUpdate = function postUpdate(deltaTime) {
          if (!this._enable) {
            return;
          }
          if (!this._autoSimulation) {
            return;
          }
          director.emit(Director.EVENT_BEFORE_PHYSICS);
          this.physicsWorld.syncSceneToPhysics();
          this._steping = true;
          var fixedTimeStep = this._fixedTimeStep;
          var velocityIterations = this.velocityIterations;
          var positionIterations = this.positionIterations;
          this._accumulator += deltaTime;
          var substepIndex = 0;
          while (substepIndex++ < this._maxSubSteps && this._accumulator > fixedTimeStep) {
            this.physicsWorld.step(fixedTimeStep, velocityIterations, positionIterations);
            this._accumulator -= fixedTimeStep;
          }
          var events = this._delayEvents;
          for (var i = 0, l = events.length; i < l; i++) {
            var event = events[i];
            event.func.call(event.target);
          }
          events.length = 0;
          this.physicsWorld.syncPhysicsToScene();
          if (this.debugDrawFlags) {
            this.physicsWorld.drawDebug();
          }
          this._steping = false;
          director.emit(Director.EVENT_AFTER_PHYSICS);
        }

        // eslint-disable-next-line @typescript-eslint/ban-types
        ;
        _proto._callAfterStep = function _callAfterStep(target, func) {
          if (this._steping) {
            this._delayEvents.push({
              target: target,
              func: func
            });
          } else {
            func.call(target);
          }
        }

        /**
         * @en
         * Reset the accumulator of time to given value.
         * @zh
         * 重置时间累积总量为给定值。
         */;
        _proto.resetAccumulator = function resetAccumulator(time) {
          if (time === void 0) {
            time = 0;
          }
          this._accumulator = time;
        }

        /**
         * @en
         * Perform simulation steps for the physics world.
         * @zh
         * 执行物理世界的模拟步进。
         * @param fixedTimeStep
         */;
        _proto.step = function step(fixedTimeStep) {
          this.physicsWorld.step(fixedTimeStep, this.velocityIterations, this.positionIterations);
        }

        /**
         * @en
         * Raycast the world for all colliders in the path of the ray.
         * The raycast ignores colliders that contain the starting point.
         * @zh
         * 检测哪些碰撞体在给定射线的路径上，射线检测将忽略包含起始点的碰撞体。
         * @method rayCast
         * @param {Vec2} p1 @en start point of the raycast. @zh 射线起点。
         * @param {Vec2} p2 @en end point of the raycast. @zh 射线终点。
         * @param {RayCastType} type - @en optional, default is RayCastType.Closest. @zh 可选，默认是RayCastType.Closest。
         * @param {number} mask - @en optional, default is 0xffffffff. @zh 可选，默认是0xffffffff。
         * @return {[PhysicsRayCastResult]}
         */;
        _proto.raycast = function raycast(p1, p2, type, mask) {
          if (type === void 0) {
            type = ERaycast2DType.Closest;
          }
          if (mask === void 0) {
            mask = 0xffffffff;
          }
          return this.physicsWorld.raycast(p1, p2, type, mask);
        }

        /**
         * @en Test which colliders contain the point.
         * @zh 检测给定点在哪些碰撞体内。
         */;
        _proto.testPoint = function testPoint(p) {
          return this.physicsWorld.testPoint(p);
        }

        /**
         * @en Test which colliders contain the point.
         * @zh 检测给定点在哪些碰撞体内。
         */;
        _proto.testAABB = function testAABB(rect) {
          return this.physicsWorld.testAABB(rect);
        };
        PhysicsSystem2D.constructAndRegister = function constructAndRegister() {
          director.registerSystem(PhysicsSystem2D.ID, PhysicsSystem2D.instance, System.Priority.LOW);
        };
        _createClass(PhysicsSystem2D, [{
          key: "enable",
          get:
          /**
           * @en
           * Gets or sets whether the physical system is enabled, which can be used to pause or continue running the physical system.
           * @zh
           * 获取或设置是否启用物理系统，可以用于暂停或继续运行物理系统。
           */
          function get() {
            return this._enable;
          },
          set: function set(value) {
            this._enable = value;
          }

          /**
           * @zh
           * Gets or sets whether the physical system allows automatic sleep, which defaults to true.
           * @zh
           * 获取或设置物理系统是否允许自动休眠，默认为 true。
           */
        }, {
          key: "allowSleep",
          get: function get() {
            return this._allowSleep;
          },
          set: function set(v) {
            this._allowSleep = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.physicsWorld.setAllowSleep(v);
            }
          }

          /**
           * @en
           * Gets or sets the value of gravity in the physical world, which defaults to (0, -10).
           * @zh
           * 获取或设置物理世界的重力数值，默认为 (0, -10)。
           */
        }, {
          key: "gravity",
          get: function get() {
            return this._gravity;
          },
          set: function set(gravity) {
            this._gravity.set(gravity);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.physicsWorld.setGravity(new Vec2(gravity.x / PHYSICS_2D_PTM_RATIO, gravity.y / PHYSICS_2D_PTM_RATIO));
            }
          }

          /**
           * @en
           * Gets or sets the maximum number of simulated substeps per frame.
           * @zh
           * 获取或设置每帧模拟的最大子步数。
           */
        }, {
          key: "maxSubSteps",
          get: function get() {
            return this._maxSubSteps;
          },
          set: function set(value) {
            this._maxSubSteps = value;
          }

          /**
           * @en
           * Gets or sets the fixed delta time consumed by each simulation step.
           * @zh
           * 获取或设置每步模拟消耗的固定时间。
           */
        }, {
          key: "fixedTimeStep",
          get: function get() {
            return this._fixedTimeStep;
          },
          set: function set(value) {
            this._fixedTimeStep = value;
          }

          /**
           * @en
           * Turn on or off the automatic simulation.
           * @zh
           * 获取或设置是否自动模拟。
           */
        }, {
          key: "autoSimulation",
          get: function get() {
            return this._autoSimulation;
          },
          set: function set(value) {
            this._autoSimulation = value;
          }
        }, {
          key: "debugDrawFlags",
          get: function get() {
            return this.physicsWorld.debugDrawFlags;
          },
          set: function set(v) {
            this.physicsWorld.debugDrawFlags = v;
          }
        }, {
          key: "physicsWorld",
          get:
          /**
           * @en
           * Gets the wrappered object of the physical world through which you can access the actual underlying object.
           * @zh
           * 获取物理世界的封装对象，通过它你可以访问到实际的底层对象。
           */
          function get() {
            return selector.physicsWorld;
          }

          /**
           * @en
           * Gets the ID of the system.
           * @zh
           * 获取此系统的ID。
           */
        }, {
          key: "stepping",
          get: function get() {
            return this._steping;
          }
        }], [{
          key: "PHYSICS_NONE",
          get: function get() {
            return !selector.id;
          }
        }, {
          key: "PHYSICS_BUILTIN",
          get: function get() {
            return selector.id === 'builtin';
          }
        }, {
          key: "PHYSICS_BOX2D",
          get: function get() {
            return selector.id === 'box2d';
          }
        }, {
          key: "PHYSICS_BOX2D_WASM",
          get: function get() {
            return selector.id === 'box2d-wasm';
          }

          /**
           * @en
           * Gets the predefined physics groups.
           * @zh
           * 获取预定义的物理分组。
           */
        }, {
          key: "PhysicsGroup",
          get: function get() {
            return PhysicsGroup;
          }

          /**
           * @en
           * Gets the physical system instance.
           * @zh
           * 获取物理系统实例。
           */
        }, {
          key: "instance",
          get: function get() {
            if (!instance) {
              instance = new PhysicsSystem2D();
            }
            return instance;
          }
        }]);
        return PhysicsSystem2D;
      }(Eventify(System)));
      PhysicsSystem2D.ID = 'PHYSICS_2D';
      director.once(Director.EVENT_INIT, function () {
        PhysicsSystem2D.constructAndRegister();
      });
    }
  };
});