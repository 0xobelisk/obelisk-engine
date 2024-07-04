System.register("q-bundled:///fs/cocos/physics/framework/components/rigid-body.js", ["../../../core/data/decorators/index.js", "../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../scene-graph/index.js", "../physics-selector.js", "../physics-enum.js", "../physics-system.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, disallowMultiple, executeInEditMode, menu, executionOrder, tooltip, displayOrder, visible, type, serializable, DEBUG, Vec3, error, warn, Component, selector, createRigidBody, ERigidBodyType, PhysicsSystem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _class3, RigidBody;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function isDynamicBody() {
    return this.isDynamic;
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      menu = _coreDataDecoratorsIndexJs.menu;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      visible = _coreDataDecoratorsIndexJs.visible;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      error = _coreIndexJs.error;
      warn = _coreIndexJs.warn;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }, function (_physicsSelectorJs) {
      selector = _physicsSelectorJs.selector;
      createRigidBody = _physicsSelectorJs.createRigidBody;
    }, function (_physicsEnumJs) {
      ERigidBodyType = _physicsEnumJs.ERigidBodyType;
    }, function (_physicsSystemJs) {
      PhysicsSystem = _physicsSystemJs.PhysicsSystem;
    }],
    execute: function () {
      /**
       * @en
       * Rigid body component.
       * @zh
       * 刚体组件。
       */
      _export("RigidBody", RigidBody = (_dec = ccclass('cc.RigidBody'), _dec2 = help('i18n:cc.RigidBody'), _dec3 = menu('Physics/RigidBody'), _dec4 = executionOrder(-1), _dec5 = type(PhysicsSystem.PhysicsGroup), _dec6 = displayOrder(-2), _dec7 = tooltip('i18n:physics3d.rigidbody.group'), _dec8 = type(ERigidBodyType), _dec9 = displayOrder(-1), _dec10 = tooltip('i18n:physics3d.rigidbody.type'), _dec11 = visible(isDynamicBody), _dec12 = displayOrder(0), _dec13 = tooltip('i18n:physics3d.rigidbody.mass'), _dec14 = visible(isDynamicBody), _dec15 = displayOrder(0.5), _dec16 = tooltip('i18n:physics3d.rigidbody.allowSleep'), _dec17 = visible(isDynamicBody), _dec18 = displayOrder(1), _dec19 = tooltip('i18n:physics3d.rigidbody.linearDamping'), _dec20 = visible(isDynamicBody), _dec21 = displayOrder(2), _dec22 = tooltip('i18n:physics3d.rigidbody.angularDamping'), _dec23 = visible(isDynamicBody), _dec24 = displayOrder(4), _dec25 = tooltip('i18n:physics3d.rigidbody.useGravity'), _dec26 = visible(isDynamicBody), _dec27 = displayOrder(6), _dec28 = tooltip('i18n:physics3d.rigidbody.linearFactor'), _dec29 = visible(isDynamicBody), _dec30 = displayOrder(7), _dec31 = tooltip('i18n:physics3d.rigidbody.angularFactor'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = disallowMultiple(_class = _dec4(_class = (_class2 = (_class3 = class RigidBody extends Component {
        constructor(...args) {
          super(...args);
          this._body = null;
          /// PRIVATE PROPERTY ///
          this._group = _initializer && _initializer();
          this._type = _initializer2 && _initializer2();
          this._mass = _initializer3 && _initializer3();
          this._allowSleep = _initializer4 && _initializer4();
          this._linearDamping = _initializer5 && _initializer5();
          this._angularDamping = _initializer6 && _initializer6();
          this._useGravity = _initializer7 && _initializer7();
          this._linearFactor = _initializer8 && _initializer8();
          this._angularFactor = _initializer9 && _initializer9();
        }
        /// PUBLIC PROPERTY GETTER\SETTER ///
        /**
         * @en
         * Gets or sets the group of the rigid body.
         * @zh
         * 获取或设置分组。
         */
        get group() {
          return this._group;
        }
        set group(v) {
          if (DEBUG && !Number.isInteger(Math.log2(v >>> 0))) warn('[Physics]: The group should only have one bit.');
          this._group = v;
          if (this._body) {
            // The judgment is added here because the data exists in two places
            if (this._body.getGroup() !== v) this._body.setGroup(v);
          }
        }

        /**
         * @en
         * Gets or sets the type of rigid body.
         * @zh
         * 获取或设置刚体类型。
         */
        get type() {
          return this._type;
        }
        set type(v) {
          if (this._type === v) return;
          this._type = v;
          if (this._body) this._body.setType(v);
        }

        /**
         * @en
         * Gets or sets the mass of the rigid body.
         * @zh
         * 获取或设置刚体的质量。
         */
        get mass() {
          return this._mass;
        }
        set mass(value) {
          if (DEBUG && value <= 0) warn('[Physics]: The mass should be greater than zero.');
          if (this._mass === value) return;
          value = value <= 0 ? 0.0001 : value;
          this._mass = value;
          if (this._body) this._body.setMass(value);
        }

        /**
         * @en
         * Gets or sets whether hibernation is allowed.
         * @zh
         * 获取或设置是否允许休眠。
         */
        get allowSleep() {
          return this._allowSleep;
        }
        set allowSleep(v) {
          this._allowSleep = v;
          if (this._body) this._body.setAllowSleep(v);
        }

        /**
         * @en
         * Gets or sets linear damping.
         * @zh
         * 获取或设置线性阻尼。
         */
        get linearDamping() {
          return this._linearDamping;
        }
        set linearDamping(value) {
          if (DEBUG && (value < 0 || value > 1)) warn('[Physics]: The damping should be between zero to one.');
          this._linearDamping = value;
          if (this._body) this._body.setLinearDamping(value);
        }

        /**
         * @en
         * Gets or sets the rotation damping.
         * @zh
         * 获取或设置旋转阻尼。
         */
        get angularDamping() {
          return this._angularDamping;
        }
        set angularDamping(value) {
          if (DEBUG && (value < 0 || value > 1)) warn('[Physics]: The damping should be between zero to one.');
          this._angularDamping = value;
          if (this._body) this._body.setAngularDamping(value);
        }

        /**
         * @en
         * Gets or sets whether a rigid body uses gravity.
         * @zh
         * 获取或设置刚体是否使用重力。
         */
        get useGravity() {
          return this._useGravity;
        }
        set useGravity(value) {
          this._useGravity = value;
          if (this._body) this._body.useGravity(value);
        }

        /**
         * @en
         * Gets or sets the linear velocity factor that can be used to control the scaling of the velocity in each axis direction.
         * @zh
         * 获取或设置线性速度的因子，可以用来控制每个轴方向上的速度的缩放。
         */
        get linearFactor() {
          return this._linearFactor;
        }
        set linearFactor(value) {
          Vec3.copy(this._linearFactor, value);
          if (this._body) {
            this._body.setLinearFactor(this._linearFactor);
          }
        }

        /**
         * @en
         * Gets or sets the rotation speed factor that can be used to control the scaling of the rotation speed in each axis direction.
         * @zh
         * 获取或设置旋转速度的因子，可以用来控制每个轴方向上的旋转速度的缩放。
         */
        get angularFactor() {
          return this._angularFactor;
        }
        set angularFactor(value) {
          Vec3.copy(this._angularFactor, value);
          if (this._body) {
            this._body.setAngularFactor(this._angularFactor);
          }
        }

        /**
         * @en
         * Gets or sets the speed threshold for going to sleep.
         * @zh
         * 获取或设置进入休眠的速度临界值。
         */
        get sleepThreshold() {
          if (this._isInitialized) {
            return this._body.getSleepThreshold();
          }
          return 0.1;
        }
        set sleepThreshold(v) {
          if (this._isInitialized) {
            this._body.setSleepThreshold(v);
          }
        }

        /**
         * @en
         * Turning on or off continuous collision detection.
         * @zh
         * 开启或关闭连续碰撞检测。
         */
        get useCCD() {
          if (this._isInitialized) {
            return this._body.isUsingCCD();
          }
          return false;
        }
        set useCCD(v) {
          if (this._isInitialized) {
            this._body.useCCD(v);
          }
        }

        /**
         * @en
         * Gets whether it is the state of awake.
         * @zh
         * 获取是否是唤醒的状态。
         */
        get isAwake() {
          if (this._isInitialized) return this._body.isAwake;
          return false;
        }

        /**
         * @en
         * Gets whether you can enter a dormant state.
         * @zh
         * 获取是否是可进入休眠的状态。
         */
        get isSleepy() {
          if (this._isInitialized) return this._body.isSleepy;
          return false;
        }

        /**
         * @en
         * Gets whether the state is dormant.
         * @zh
         * 获取是否是正在休眠的状态。
         */
        get isSleeping() {
          if (this._isInitialized) return this._body.isSleeping;
          return false;
        }

        /**
         * @en
         * Gets or sets whether the rigid body is static.
         * @zh
         * 获取或设置刚体是否是静态类型的（静止不动的）。
         */
        get isStatic() {
          return this._type === ERigidBodyType.STATIC;
        }
        set isStatic(v) {
          if (v && this.isStatic || !v && !this.isStatic) return;
          this.type = v ? ERigidBodyType.STATIC : ERigidBodyType.DYNAMIC;
        }

        /**
         * @en
         * Gets or sets whether the rigid body moves through physical dynamics.
         * @zh
         * 获取或设置刚体是否是动力学态类型的（将根据物理动力学控制运动）。
         */
        get isDynamic() {
          return this._type === ERigidBodyType.DYNAMIC;
        }
        set isDynamic(v) {
          if (v && this.isDynamic || !v && !this.isDynamic) return;
          this.type = v ? ERigidBodyType.DYNAMIC : ERigidBodyType.KINEMATIC;
        }

        /**
         * @en
         * Gets or sets whether a rigid body is controlled by users.
         * @zh
         * 获取或设置刚体是否是运动态类型的（将由用户来控制运动）。
         */
        get isKinematic() {
          return this._type === ERigidBodyType.KINEMATIC;
        }
        set isKinematic(v) {
          if (v && this.isKinematic || !v && !this.isKinematic) return;
          this.type = v ? ERigidBodyType.KINEMATIC : ERigidBodyType.DYNAMIC;
        }

        /**
         * @en
         * Gets the wrapper object, through which the lowLevel instance can be accessed.
         * @zh
         * 获取封装对象，通过此对象可以访问到底层实例。
         */
        get body() {
          return this._body;
        }
        get _isInitialized() {
          const r = this._body === null;
          if (r) {
            error('[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene.');
          }
          return !r;
        }

        /// COMPONENT LIFECYCLE ///

        onLoad() {
          if (!selector.runInEditor) return;
          this._body = createRigidBody();
          this._body.initialize(this);
        }
        onEnable() {
          if (this._body) this._body.onEnable();
        }
        onDisable() {
          if (this._body) this._body.onDisable();
        }
        onDestroy() {
          if (this._body) this._body.onDestroy();
        }

        /// PUBLIC METHOD ///

        /**
         * @en
         * Apply force to a world point. This could, for example, be a point on the Body surface.
         * @zh
         * 在世界空间中，相对于刚体的质心的某点上对刚体施加作用力。
         * @param force @zh 作用力 @en The force applied
         * @param relativePoint @zh 作用点，相对于刚体的质心 @en The point to apply the force on, relative to the center of mass of the rigid body
         */
        applyForce(force, relativePoint) {
          if (this._isInitialized) this._body.applyForce(force, relativePoint);
        }

        /**
         * @en
         * Apply force to a local point. This could, for example, be a point on the Body surface.
         * @zh
         * 在本地空间中，相对于刚体的质心的某点上对刚体施加作用力。
         * @param force @zh 作用力 @en The force applied
         * @param localPoint @zh 作用点 @en The point to apply the force on
         */
        applyLocalForce(force, localPoint) {
          if (this._isInitialized) this._body.applyLocalForce(force, localPoint);
        }

        /**
         * @en
         * In world space, impulse is applied to the rigid body at some point relative to the center of mass of the rigid body.
         * @zh
         * 在世界空间中，相对于刚体的质心的某点上对刚体施加冲量。
         * @param impulse @zh 冲量 @en The impulse applied
         * @param relativePoint @zh 作用点，相对于刚体的中心点 @en The point to apply the impulse, relative to the center of mass of the rigid body
         */
        applyImpulse(impulse, relativePoint) {
          if (this._isInitialized) this._body.applyImpulse(impulse, relativePoint);
        }

        /**
         * @en
         * In local space, impulse is applied to the rigid body at some point relative to the center of mass of the rigid body.
         * @zh
         * 在本地空间中，相对于刚体的质心的某点上对刚体施加冲量。
         * @param impulse @zh 冲量 @en The impulse applied
         * @param localPoint @zh 作用点 @en The point to apply the impulse
         */
        applyLocalImpulse(impulse, localPoint) {
          if (this._isInitialized) this._body.applyLocalImpulse(impulse, localPoint);
        }

        /**
         * @en
         * In world space, torque is applied to the rigid body.
         * @zh
         * 在世界空间中，对刚体施加扭矩。
         * @param torque @zh 扭矩 @en The torque applied
         */
        applyTorque(torque) {
          if (this._isInitialized) this._body.applyTorque(torque);
        }

        /**
         * @zh
         * 在本地空间中，对刚体施加扭矩。
         * @zh
         * In local space, torque is applied to the rigid body.
         * @param torque @zh 扭矩 @en The torque applied
         */
        applyLocalTorque(torque) {
          if (this._isInitialized) this._body.applyLocalTorque(torque);
        }

        /**
         * @en
         * Wake up the rigid body.
         * @zh
         * 唤醒刚体。
         */
        wakeUp() {
          if (this._isInitialized) this._body.wakeUp();
        }

        /**
         * @en
         * Dormancy of rigid body.
         * @zh
         * 休眠刚体。
         */
        sleep() {
          if (this._isInitialized) this._body.sleep();
        }

        /**
         * @en
         * Clear the forces and velocity of the rigid body.
         * @zh
         * 清除刚体受到的力和速度。
         */
        clearState() {
          if (this._isInitialized) this._body.clearState();
        }

        /**
         * @en
         * Clear the forces of the rigid body.
         * @zh
         * 清除刚体受到的力。
         */
        clearForces() {
          if (this._isInitialized) this._body.clearForces();
        }

        /**
         * @en
         * Clear velocity of the rigid body.
         * @zh
         * 清除刚体的速度。
         */
        clearVelocity() {
          if (this._isInitialized) this._body.clearVelocity();
        }

        /**
         * @en
         * Gets the linear velocity.
         * @zh
         * 获取线性速度。
         * @param out @zh 速度向量 @en The velocity vector
         */
        getLinearVelocity(out) {
          if (this._isInitialized) this._body.getLinearVelocity(out);
        }

        /**
         * @en
         * Sets the linear velocity.
         * @zh
         * 设置线性速度。
         * @param value @zh 速度向量 @en The velocity vector
         */
        setLinearVelocity(value) {
          if (this._isInitialized) this._body.setLinearVelocity(value);
        }

        /**
         * @en
         * Gets the angular velocity.
         * @zh
         * 获取旋转速度。
         * @param out @zh 角速度向量 @en The angular velocity vector
         */
        getAngularVelocity(out) {
          if (this._isInitialized) this._body.getAngularVelocity(out);
        }

        /**
         * @en
         * Sets the angular velocity.
         * @zh
         * 设置旋转速度。
         * @param value @zh 角速度向量 @en The angular velocity vector
         */
        setAngularVelocity(value) {
          if (this._isInitialized) this._body.setAngularVelocity(value);
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
          if (this._isInitialized) return this._body.getGroup();
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
          if (this._isInitialized) this._body.setGroup(v);
        }

        /**
         * @en
         * Add a grouping value to fill in the group you want to join.
         * @zh
         * 添加分组值，可填要加入的 group。
         * @param v @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        addGroup(v) {
          if (this._isInitialized) this._body.addGroup(v);
        }

        /**
         * @en
         * Subtract the grouping value to fill in the group to be removed.
         * @zh
         * 减去分组值，可填要移除的 group。
         * @param v @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        removeGroup(v) {
          if (this._isInitialized) this._body.removeGroup(v);
        }

        /**
         * @en
         * Gets the mask value.
         * @zh
         * 获取掩码值。
         * @returns {number} @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        getMask() {
          if (this._isInitialized) return this._body.getMask();
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
          if (this._isInitialized) this._body.setMask(v);
        }

        /**
         * @en
         * Add mask values to fill in groups that need to be checked.
         * @zh
         * 添加掩码值，可填入需要检查的 group。
         * @param v @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        addMask(v) {
          if (this._isInitialized) this._body.addMask(v);
        }

        /**
         * @en
         * Subtract the mask value to fill in the group that does not need to be checked.
         * @zh
         * 减去掩码值，可填入不需要检查的 group。
         * @param v @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */
        removeMask(v) {
          if (this._isInitialized) this._body.removeMask(v);
        }
      }, _class3.Type = ERigidBodyType, _class3), (_applyDecoratedDescriptor(_class2.prototype, "group", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "group"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "type", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "mass", [_dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "mass"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "allowSleep", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "allowSleep"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "linearDamping", [_dec17, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "linearDamping"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "angularDamping", [_dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "angularDamping"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "useGravity", [_dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "useGravity"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "linearFactor", [_dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "linearFactor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "angularFactor", [_dec29, _dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "angularFactor"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_group", [serializable], function () {
        return PhysicsSystem.PhysicsGroup.DEFAULT;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_type", [serializable], function () {
        return ERigidBodyType.DYNAMIC;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_mass", [serializable], function () {
        return 1;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_allowSleep", [serializable], function () {
        return true;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_linearDamping", [serializable], function () {
        return 0.1;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_angularDamping", [serializable], function () {
        return 0.1;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_useGravity", [serializable], function () {
        return true;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_linearFactor", [serializable], function () {
        return new Vec3(1, 1, 1);
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_angularFactor", [serializable], function () {
        return new Vec3(1, 1, 1);
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class));
      (function (_RigidBody) {})(RigidBody || _export("RigidBody", RigidBody = {}));
    }
  };
});