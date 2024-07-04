System.register("q-bundled:///fs/cocos/physics/framework/components/character-controllers/character-controller.js", ["../../../../core/data/decorators/index.js", "../../../../../../virtual/internal%253Aconstants.js", "../../../../core/index.js", "../../../../scene-graph/index.js", "../../physics-selector.js", "../../physics-system.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, tooltip, displayOrder, type, serializable, DEBUG, Vec3, warn, CCFloat, Eventify, Component, selector, createCharacterController, PhysicsSystem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, v3_0, scaledCenter, CharacterController;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      warn = _coreIndexJs.warn;
      CCFloat = _coreIndexJs.CCFloat;
      Eventify = _coreIndexJs.Eventify;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }, function (_physicsSelectorJs) {
      selector = _physicsSelectorJs.selector;
      createCharacterController = _physicsSelectorJs.createCharacterController;
    }, function (_physicsSystemJs) {
      PhysicsSystem = _physicsSystemJs.PhysicsSystem;
    }],
    execute: function () {
      v3_0 = new Vec3(0, 0, 0);
      scaledCenter = new Vec3(0, 0, 0);
      /**
       * @en
       * Base class for Character Controller component.
       * @zh
       * 角色控制器组件基类。
       */
      _export("CharacterController", CharacterController = (_dec = ccclass('cc.CharacterController'), _dec2 = type(PhysicsSystem.PhysicsGroup), _dec3 = displayOrder(-2), _dec4 = tooltip('i18n:physics3d.character_controller.group'), _dec5 = tooltip('i18n:physics3d.character_controller.minMoveDistance'), _dec6 = type(CCFloat), _dec7 = tooltip('i18n:physics3d.character_controller.stepOffset'), _dec8 = type(CCFloat), _dec9 = tooltip('i18n:physics3d.character_controller.slopeLimit'), _dec10 = type(CCFloat), _dec11 = tooltip('i18n:physics3d.character_controller.skinWidth'), _dec12 = type(CCFloat), _dec13 = tooltip('i18n:physics3d.character_controller.center'), _dec14 = type(Vec3), _dec(_class = disallowMultiple(_class = (_class2 = class CharacterController extends Eventify(Component) {
        /// PUBLIC PROPERTY GETTER\SETTER ///

        /**
         * @en
         * Gets or sets the group of the character controller.
         * @zh
         * 获取或设置分组。
         */
        get group() {
          return this._group;
        }
        set group(v) {
          if (DEBUG && !Number.isInteger(Math.log2(v >>> 0))) {
            warn('[Physics]: The group should only have one bit.');
          }
          this._group = v;
          if (this._cct) {
            // The judgment is added here because the data exists in two places
            if (this._cct.getGroup() !== v) this._cct.setGroup(v);
          }
        }

        /**
         * @en
         * Gets or sets the minimum movement distance of the character controller.
         * @zh
         * 获取或设置角色控制器的最小移动距离。
         */
        get minMoveDistance() {
          return this._minMoveDistance;
        }
        set minMoveDistance(value) {
          if (this._minMoveDistance === value) return;
          this._minMoveDistance = Math.abs(value);
        }

        /**
         * @en 、
         * Gets or sets the maximum height the character controller can automatically climb.
         * @zh
         * 获取或设置角色控制器的最大自动爬台阶高度。
         */
        get stepOffset() {
          return this._stepOffset;
        }
        set stepOffset(value) {
          if (this._stepOffset === value) return;
          this._stepOffset = Math.abs(value);
          if (this._cct) {
            this._cct.setStepOffset(value);
          }
        }

        /**
         * @en
         * Gets or sets the slope limit of the character controller in degree.
         * @zh
         * 获取或设置角色控制器的最大爬坡角度。
        */
        get slopeLimit() {
          return this._slopeLimit;
        }
        set slopeLimit(value) {
          if (this._slopeLimit === value) return;
          this._slopeLimit = Math.abs(value);
          if (this._cct) {
            this._cct.setSlopeLimit(value);
          }
        }

        /**
         * @en
         * Gets or sets the skin width of the character controller.
         * @zh
         * 获取或设置角色控制器的皮肤宽度。
         */
        get skinWidth() {
          return this._skinWidth;
        }
        set skinWidth(value) {
          if (this._skinWidth === value) return;
          this._skinWidth = Math.abs(value);
          if (this._cct) {
            this._cct.setContactOffset(Math.max(0.0001, value));
          }
        }

        // /**
        //  * @en
        //  * Gets or sets if the character controller can collide with other objects.
        //  * @zh
        //  * 获取或设置角色控制器是否和发生碰撞。
        //  */
        // @tooltip('i18n:physics3d.character_controller.detectCollisions')
        // @type(CCBoolean)
        // public get detectCollisions () {
        //     return this._detectCollisions;
        // }

        // public set detectCollisions (value) {
        //     if (this._detectCollisions === value) return;
        //     this._detectCollisions = value;
        //     if (this._cct) {
        //         this._cct.setDetectCollisions(value);
        //     }
        // }

        // /**
        //  * @en
        //  * Gets or sets if the character controller enables overlap recovery when penetrating with other colliders.
        //  * @zh
        //  * 获取或设置角色控制器和其他碰撞体穿透时是否恢复。
        //  */
        // @tooltip('i18n:physics3d.character_controller.enableOverlapRecovery')
        // @type(CCBoolean)
        // public get enableOverlapRecovery () {
        //     return this._enableOverlapRecovery;
        // }

        // public set enableOverlapRecovery (value) {
        //     if (this._enableOverlapRecovery === value) return;
        //     this._enableOverlapRecovery = value;
        //     if (this._cct) {
        //         this._cct.setOverlapRecovery(value);
        //     }
        // }

        /**
         * @en
         * Gets or sets the center of the character controller in local space.
         * @zh
         * 获取或设置角色控制器的中心点在局部坐标系中的位置。
         */
        get center() {
          return this._center;
        }
        set center(value) {
          if (Vec3.equals(this._center, value)) return;
          Vec3.copy(this._center, value);
          // if (this._cct) { //update cct position
          //     Vec3.copy(VEC3_0, this.node.worldPosition);
          //     VEC3_0.add(this.scaledCenter);//cct world position
          //     this._cct.setPosition(VEC3_0);
          // }
        }

        /**
         * @en
         * Gets the type of this character controller.
         * @zh
         * 获取此角色控制器的类型。
         */

        constructor(type) {
          super();
          this.type = void 0;
          this._cct = null;
          //lowLevel instance
          /// PRIVATE PROPERTY ///
          this._group = _initializer && _initializer();
          this._minMoveDistance = _initializer2 && _initializer2();
          //[ 0, infinity ]
          this._stepOffset = _initializer3 && _initializer3();
          this._slopeLimit = _initializer4 && _initializer4();
          //degree[ 0, 180]
          this._skinWidth = _initializer5 && _initializer5();
          //[ 0.0001, infinity ]
          // @serializable
          // private _detectCollisions = true;
          // @serializable
          // private _enableOverlapRecovery = true;
          this._center = _initializer6 && _initializer6();
          this._initialized = false;
          this._prevPos = new Vec3();
          this._currentPos = new Vec3();
          this._velocity = new Vec3();
          this._centerWorldPosition = new Vec3();
          this._needCollisionEvent = false;
          this._needTriggerEvent = false;
          this.type = type;
        }
        get _isInitialized() {
          if (this._cct === null || !this._initialized) {
            //error('[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene.');
            return false;
          } else {
            return true;
          }
        }

        /// COMPONENT LIFECYCLE ///

        onLoad() {
          if (!selector.runInEditor) return;
          this._cct = createCharacterController(this.type);
          this._initialized = this._cct.initialize(this);
          this._cct.onLoad();
        }
        onEnable() {
          if (this._cct) {
            this._cct.onEnable();
          }
        }
        onDisable() {
          if (this._cct) {
            this._cct.onDisable();
          }
        }
        onDestroy() {
          if (this._cct) {
            this._needCollisionEvent = false;
            this._needTriggerEvent = false;
            this._cct.updateEventListener();
            this._cct.onDestroy();
            this._cct = null;
          }
        }

        /// PUBLIC METHOD ///

        /**
         * @en
         * Gets world position of center.
         * @zh
         * 获取中心的世界坐标。
         */
        get centerWorldPosition() {
          if (this._isInitialized) this._cct.getPosition(this._centerWorldPosition);
          return this._centerWorldPosition;
        }

        /**
         * @en
         * Sets world position of center.
         * Note: Calling this function will immediately synchronize the position of
         * the character controller in the physics world to the node.
         * @zh
         * 设置中心的世界坐标。
         * 注意：调用该函数会立刻将角色控制器在物理世界中的位置同步到节点上。
         */
        set centerWorldPosition(value) {
          if (this._isInitialized) this._cct.setPosition(value);
        }

        /**
         * @en
         * Gets the velocity.
         * Note: velocity is only updated after move() is called.
         * @zh
         * 获取速度。
         * 注意：velocity 只会在 move() 调用后更新。
         */
        get velocity() {
          return this._velocity;
        }

        /**
         * @en
         * Gets whether the character is on the ground.
         * Note: isGrounded is only updated after move() is called.
         * @zh
         * 获取是否在地面上。
         * 注意：isGrounded 只会在 move() 调用后更新。
         */
        get isGrounded() {
          return this._cct.onGround();
        }

        /**
         * @en
         * Move the character.
         * @zh
         * 移动角色控制器。
         * @param movement @zh 移动向量 @en The movement vector
         */
        move(movement) {
          if (!this._isInitialized) {
            return;
          }
          this._prevPos.set(this.centerWorldPosition);
          const elapsedTime = PhysicsSystem.instance.fixedTimeStep;
          this._cct.move(movement, this._minMoveDistance, elapsedTime);
          this._currentPos.set(this.centerWorldPosition);
          this._velocity = this._currentPos.subtract(this._prevPos).multiplyScalar(1.0 / elapsedTime);
          this._cct.syncPhysicsToScene();
        }

        /// EVENT INTERFACE ///
        /**
         * @en
         * Registers callbacks associated with triggered or collision events.
         * @zh
         * 注册触发或碰撞事件相关的回调。
         * @param type - The event type, onControllerColliderHit;
         * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
         * @param target - The event callback target.
         */
        on(type, callback, target, once) {
          const ret = super.on(type, callback, target, once);
          this._updateNeedEvent(type);
          return ret;
        }

        /**
         * @en
         * Unregisters callbacks associated with trigger or collision events that have been registered.
         * @zh
         * 取消已经注册的触发或碰撞事件相关的回调。
         * @param type - The event type, onControllerColliderHit;
         * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
         * @param target - The event callback target.
         */
        off(type, callback, target) {
          super.off(type, callback, target);
          this._updateNeedEvent();
        }

        /**
         * @en
         * Registers a callback associated with a trigger or collision event, which is automatically unregistered once executed.
         * @zh
         * 注册触发或碰撞事件相关的回调，执行一次后会自动取消注册。
         * @param type - The event type, onControllerColliderHit;
         * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
         * @param target - The event callback target.
         */
        once(type, callback, target) {
          // TODO: callback invoker now is a entity, after `once` will not calling the upper `off`.
          const ret = super.once(type, callback, target);
          this._updateNeedEvent(type);
          return ret;
        }

        /// GROUP MASK ///

        /**
         * @en
         * Gets the group value.
         * @zh
         * 获取分组值。
         * @returns @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        getGroup() {
          if (this._isInitialized) return this._cct.getGroup();
          return 0;
        }

        /**
         * @en
         * Sets the group value.
         * @zh
         * 设置分组值。
         * @param v @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        setGroup(v) {
          if (this._isInitialized) this._cct.setGroup(v);
        }

        /**
         * @en
         * Add a grouping value to fill in the group you want to join.
         * @zh
         * 添加分组值，可填要加入的 group。
         * @param v @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        addGroup(v) {
          if (this._isInitialized) this._cct.addGroup(v);
        }

        /**
         * @en
         * Subtract the grouping value to fill in the group to be removed.
         * @zh
         * 减去分组值，可填要移除的 group。
         * @param v @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        removeGroup(v) {
          if (this._isInitialized) this._cct.removeGroup(v);
        }

        /**
         * @en
         * Gets the mask value.
         * @zh
         * 获取掩码值。
         * @returns {number} @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        getMask() {
          if (this._isInitialized) return this._cct.getMask();
          return 0;
        }

        /**
         * @en
         * Sets the mask value.
         * @zh
         * 设置掩码值。
         * @param v @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        setMask(v) {
          if (this._isInitialized) this._cct.setMask(v);
        }

        /**
         * @en
         * Add mask values to fill in groups that need to be checked.
         * @zh
         * 添加掩码值，可填入需要检查的 group。
         * @param v @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        addMask(v) {
          if (this._isInitialized) this._cct.addMask(v);
        }

        /**
         * @en
         * Subtract the mask value to fill in the group that does not need to be checked.
         * @zh
         * 减去掩码值，可填入不需要检查的 group。
         * @param v @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        removeMask(v) {
          if (this._isInitialized) this._cct.removeMask(v);
        }
        get needCollisionEvent() {
          return this._needCollisionEvent;
        }
        get needTriggerEvent() {
          return this._needTriggerEvent;
        }
        _updateNeedEvent(type) {
          if (this.isValid) {
            if (type !== undefined) {
              if (type === 'onControllerColliderHit') {
                this._needCollisionEvent = true;
              }
              if (type === 'onControllerTriggerEnter' || type === 'onControllerTriggerStay' || type === 'onControllerTriggerExit') {
                this._needTriggerEvent = true;
              }
            } else {
              if (!this.hasEventListener('onControllerColliderHit')) {
                this._needCollisionEvent = false;
              }
              if (!(this.hasEventListener('onControllerTriggerEnter') || this.hasEventListener('onControllerTriggerStay') || this.hasEventListener('onControllerTriggerExit'))) {
                this._needTriggerEvent = false;
              }
            }
            if (this._cct) this._cct.updateEventListener();
          }
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "group", [_dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "group"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minMoveDistance", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "minMoveDistance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "stepOffset", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "stepOffset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "slopeLimit", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "slopeLimit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "skinWidth", [_dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "skinWidth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "center", [_dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "center"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_group", [serializable], function () {
        return PhysicsSystem.PhysicsGroup.DEFAULT;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_minMoveDistance", [serializable], function () {
        return 0.001;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_stepOffset", [serializable], function () {
        return 0.5;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_slopeLimit", [serializable], function () {
        return 45.0;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_skinWidth", [serializable], function () {
        return 0.01;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_center", [serializable], function () {
        return new Vec3();
      })), _class2)) || _class) || _class));
    }
  };
});