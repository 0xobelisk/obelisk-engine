System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/collider.js", ["../../../../core/data/decorators/index.js", "../../../../../../virtual/internal%253Aconstants.js", "../../../../core/index.js", "../rigid-body.js", "../../assets/physics-material.js", "../../../../scene-graph/index.js", "../../physics-enum.js", "../../physics-selector.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, displayName, readOnly, type, serializable, EDITOR, Eventify, Vec3, error, geometry, RigidBody, PhysicsMaterial, Component, EColliderType, EAxisDirection, selector, createShape, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _initializer, _initializer2, _initializer3, _class3, Collider;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function findAttachedBody(node) {
    var rb = node.getComponent(RigidBody);
    if (rb && rb.isValid) {
      return rb;
    }
    return null;
    // if (node.parent == null || node.parent == node.scene) return null;
    // return findAttachedBody(node.parent);
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      displayName = _coreDataDecoratorsIndexJs.displayName;
      readOnly = _coreDataDecoratorsIndexJs.readOnly;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      Eventify = _coreIndexJs.Eventify;
      Vec3 = _coreIndexJs.Vec3;
      error = _coreIndexJs.error;
      geometry = _coreIndexJs.geometry;
    }, function (_rigidBodyJs) {
      RigidBody = _rigidBodyJs.RigidBody;
    }, function (_assetsPhysicsMaterialJs) {
      PhysicsMaterial = _assetsPhysicsMaterialJs.PhysicsMaterial;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }, function (_physicsEnumJs) {
      EColliderType = _physicsEnumJs.EColliderType;
      EAxisDirection = _physicsEnumJs.EAxisDirection;
    }, function (_physicsSelectorJs) {
      selector = _physicsSelectorJs.selector;
      createShape = _physicsSelectorJs.createShape;
    }],
    execute: function () {
      /**
       * @en
       * Base class for colliders.
       * @zh
       * 碰撞器的基类。
       */
      _export("Collider", Collider = (_dec = ccclass('cc.Collider'), _dec2 = type(RigidBody), _dec3 = displayName('Attached'), _dec4 = displayOrder(-2), _dec5 = tooltip('i18n:physics3d.collider.attached'), _dec6 = type(PhysicsMaterial), _dec7 = displayName('Material'), _dec8 = displayOrder(-1), _dec9 = tooltip('i18n:physics3d.collider.sharedMaterial'), _dec10 = displayOrder(0), _dec11 = tooltip('i18n:physics3d.collider.isTrigger'), _dec12 = type(Vec3), _dec13 = displayOrder(1), _dec14 = tooltip('i18n:physics3d.collider.center'), _dec15 = type(PhysicsMaterial), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Eventify) {
        _inheritsLoose(Collider, _Eventify);
        function Collider(type) {
          var _this;
          _this = _Eventify.call(this) || this;
          _this.type = void 0;
          /// PROTECTED PROPERTY ///
          _this._shape = null;
          _this._aabb = null;
          _this._boundingSphere = null;
          _this._isSharedMaterial = true;
          _this._needTriggerEvent = false;
          _this._needCollisionEvent = false;
          // protected _attachedRigidBody: RigidBody | null = null;
          _this._material = _initializer && _initializer();
          _this._isTrigger = _initializer2 && _initializer2();
          _this._center = _initializer3 && _initializer3();
          _this.type = type;
          return _this;
        }

        /// EVENT INTERFACE ///

        /**
         * @en
         * Registers callbacks associated with triggered or collision events.
         * @zh
         * 注册触发或碰撞事件相关的回调。
         * @param type - The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;
         * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
         * @param target - The event callback target.
         */
        var _proto = Collider.prototype;
        _proto.on = function on(type, callback, target, once) {
          var ret = _Eventify.prototype.on.call(this, type, callback, target, once);
          this._updateNeedEvent(type);
          return ret;
        }

        /**
         * @en
         * Unregisters callbacks associated with trigger or collision events that have been registered.
         * @zh
         * 取消已经注册的触发或碰撞事件相关的回调。
         * @param type - The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;
         * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
         * @param target - The event callback target.
         */;
        _proto.off = function off(type, callback, target) {
          _Eventify.prototype.off.call(this, type, callback, target);
          this._updateNeedEvent();
        }

        /**
         * @en
         * Registers a callback associated with a trigger or collision event, which is automatically unregistered once executed.
         * @zh
         * 注册触发或碰撞事件相关的回调，执行一次后会自动取消注册。
         * @param type - The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;
         * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
         * @param target - The event callback target.
         */;
        _proto.once = function once(type, callback, target) {
          // TODO: callback invoker now is a entity, after `once` will not calling the upper `off`.
          var ret = _Eventify.prototype.once.call(this, type, callback, target);
          this._updateNeedEvent(type);
          return ret;
        }

        /**
         * @en
         * Removes all registered events of the specified target or type.
         * @zh
         * 移除所有指定目标或类型的注册事件。
         * @param typeOrTarget - The event type or target.
         */;
        _proto.removeAll = function removeAll(typeOrTarget) {
          _Eventify.prototype.removeAll.call(this, typeOrTarget);
          this._updateNeedEvent();
        }

        /// GROUP MASK ///

        /**
         * @en
         * Gets the group value.
         * @zh
         * 获取分组值。
         * @returns @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */;
        _proto.getGroup = function getGroup() {
          if (this._isInitialized) {
            return this._shape.getGroup();
          }
          return 0;
        }

        /**
         * @en
         * Sets the group value.
         * @zh
         * 设置分组值。
         * @param v @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */;
        _proto.setGroup = function setGroup(v) {
          if (this._isInitialized) {
            this._shape.setGroup(v);
          }
        }

        /**
         * @en
         * Add a grouping value to fill in the group you want to join.
         * @zh
         * 添加分组值，可填要加入的 group。
         * @param v @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */;
        _proto.addGroup = function addGroup(v) {
          if (this._isInitialized) {
            this._shape.addGroup(v);
          }
        }

        /**
         * @en
         * Subtract the grouping value to fill in the group to be removed.
         * @zh
         * 减去分组值，可填要移除的 group。
         * @param v @zh 分组值，为 32 位整数，范围为 [2^0, 2^31] @en Group value which is a 32-bits integer, the range is [2^0, 2^31]
         */;
        _proto.removeGroup = function removeGroup(v) {
          if (this._isInitialized) {
            this._shape.removeGroup(v);
          }
        }

        /**
         * @en
         * Gets the mask value.
         * @zh
         * 获取掩码值。
         * @returns @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */;
        _proto.getMask = function getMask() {
          if (this._isInitialized) {
            return this._shape.getMask();
          }
          return 0;
        }

        /**
         * @en
         * Sets the mask value.
         * @zh
         * 设置掩码值。
         * @param v @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */;
        _proto.setMask = function setMask(v) {
          if (this._isInitialized) {
            this._shape.setMask(v);
          }
        }

        /**
         * @en
         * Add mask values to fill in groups that need to be checked.
         * @zh
         * 添加掩码值，可填入需要检查的 group。
         * @param v @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */;
        _proto.addMask = function addMask(v) {
          if (this._isInitialized) {
            this._shape.addMask(v);
          }
        }

        /**
         * @en
         * Subtract the mask value to fill in the group that does not need to be checked.
         * @zh
         * 减去掩码值，可填入不需要检查的 group。
         * @param v @zh 掩码值，为 32 位整数，范围为 [2^0, 2^31] @en Mask value which is a 32-bits integer, the range is [2^0, 2^31]
         */;
        _proto.removeMask = function removeMask(v) {
          if (this._isInitialized) {
            this._shape.removeMask(v);
          }
        }

        /// COMPONENT LIFECYCLE ///
        ;
        _proto.onLoad = function onLoad() {
          if (!selector.runInEditor) return;
          this.sharedMaterial = this._material;
          this._shape = createShape(this.type);
          this._shape.initialize(this);
          this._shape.onLoad();
        };
        _proto.onEnable = function onEnable() {
          if (this._shape) {
            this._shape.onEnable();
          }
        };
        _proto.onDisable = function onDisable() {
          if (this._shape) {
            this._shape.onDisable();
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._shape) {
            this._needTriggerEvent = false;
            this._needCollisionEvent = false;
            this._shape.updateEventListener();
            if (this._material) this._material.off(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
            this._shape.onDestroy();
          }
          if (this._boundingSphere) this._boundingSphere.destroy();
        };
        _proto._updateMaterial = function _updateMaterial() {
          if (this._shape) this._shape.setMaterial(this._material);
        };
        _proto._updateNeedEvent = function _updateNeedEvent(type) {
          if (this.isValid) {
            if (type !== undefined) {
              if (type === 'onCollisionEnter' || type === 'onCollisionStay' || type === 'onCollisionExit') {
                this._needCollisionEvent = true;
              }
              if (type === 'onTriggerEnter' || type === 'onTriggerStay' || type === 'onTriggerExit' || type === 'onControllerTriggerEnter' || type === 'onControllerTriggerStay' || type === 'onControllerTriggerExit') {
                this._needTriggerEvent = true;
              }
            } else {
              if (!(this.hasEventListener('onTriggerEnter') || this.hasEventListener('onTriggerStay') || this.hasEventListener('onTriggerExit') || this.hasEventListener('onControllerTriggerEnter') || this.hasEventListener('onControllerTriggerStay') || this.hasEventListener('onControllerTriggerExit'))) {
                this._needTriggerEvent = false;
              }
              if (!(this.hasEventListener('onCollisionEnter') || this.hasEventListener('onCollisionStay') || this.hasEventListener('onCollisionExit'))) {
                this._needCollisionEvent = false;
              }
            }
            if (this._shape) this._shape.updateEventListener();
          }
        };
        _createClass(Collider, [{
          key: "attachedRigidBody",
          get:
          /// PUBLIC PROPERTY GETTER\SETTER ///
          /**
           * @en
           * Get the rigid body component to which the collider is bound, possibly null.
           * @zh
           * 获取碰撞器所绑定的刚体组件，可能为空。
           */
          function get() {
            return findAttachedBody(this.node);
            // return this._attachedRigidBody;
          }

          /**
           * @en
           * Gets or sets the physical material for this collider.
           * @zh
           * 获取或设置此碰撞器的物理材质。
           */
        }, {
          key: "sharedMaterial",
          get: function get() {
            return this._material;
          },
          set: function set(value) {
            if (EDITOR) {
              this._material = value;
            } else {
              this.material = value;
            }
          }

          /**
           * @en
           * Gets or sets the physics material for this collider, which in Shared state will generate a new instance.
           * @zh
           * 获取或设置此碰撞器的物理材质，共享状态下获取将会生成新的实例。
           */
        }, {
          key: "material",
          get: function get() {
            if (this._isSharedMaterial && this._material) {
              this._material.off(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
              this._material = this._material.clone();
              this._material.on(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
              this._isSharedMaterial = false;
            }
            return this._material;
          },
          set: function set(value) {
            if (this._shape) {
              if (value && this._material) {
                if (this._material.id !== value.id) {
                  this._material.off(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                  value.on(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                  this._isSharedMaterial = false;
                  this._material = value;
                }
              } else if (value && !this._material) {
                value.on(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                this._material = value;
              } else if (!value && this._material) {
                this._material.off(PhysicsMaterial.EVENT_UPDATE, this._updateMaterial, this);
                this._material = value;
              }
              this._updateMaterial();
            } else {
              this._material = value;
            }
          }

          /**
           * @en
           * Gets or sets the collider is trigger, this will be always trigger if using builtin.
           * @zh
           * 获取或设置碰撞器是否为触发器。(builtin 中无论真假都为触发器)
           */
        }, {
          key: "isTrigger",
          get: function get() {
            return this._isTrigger;
          },
          set: function set(value) {
            this._isTrigger = value;
            if (this._shape) {
              this._shape.setAsTrigger(this._isTrigger);
            }
          }

          /**
           * @en
           * Gets or sets the center of the collider, in local space.
           * @zh
           * 在本地空间中，获取或设置碰撞器的中心点。
           */
        }, {
          key: "center",
          get: function get() {
            return this._center;
          },
          set: function set(value) {
            Vec3.copy(this._center, value);
            if (this._shape) {
              this._shape.setCenter(this._center);
            }
          }

          /**
           * @en
           * Gets the wrapper object, through which the lowLevel instance can be accessed.
           * @zh
           * 获取封装对象，通过此对象可以访问到底层实例。
           */
        }, {
          key: "shape",
          get: function get() {
            return this._shape;
          }
        }, {
          key: "worldBounds",
          get: function get() {
            if (this._aabb == null) this._aabb = new geometry.AABB();
            if (this._shape) this._shape.getAABB(this._aabb);
            return this._aabb;
          }
        }, {
          key: "boundingSphere",
          get: function get() {
            if (this._boundingSphere == null) this._boundingSphere = new geometry.Sphere();
            if (this._shape) this._shape.getBoundingSphere(this._boundingSphere);
            return this._boundingSphere;
          }
        }, {
          key: "needTriggerEvent",
          get: function get() {
            return this._needTriggerEvent;
          }
        }, {
          key: "needCollisionEvent",
          get: function get() {
            return this._needCollisionEvent;
          }
        }, {
          key: "_isInitialized",
          get: function get() {
            var r = this._shape === null;
            if (r) {
              error('[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene.');
            }
            return !r;
          }
        }]);
        return Collider;
      }(Eventify(Component)), _class3.Type = EColliderType, _class3.Axis = EAxisDirection, _class3), (_applyDecoratedDescriptor(_class2.prototype, "attachedRigidBody", [_dec2, readOnly, _dec3, _dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "attachedRigidBody"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sharedMaterial", [_dec6, _dec7, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isTrigger", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "isTrigger"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "center", [_dec12, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "center"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_material", [_dec15], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_isTrigger", [serializable], function () {
        return false;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_center", [serializable], function () {
        return new Vec3();
      })), _class2)) || _class));
      (function (_Collider) {})(Collider || _export("Collider", Collider = {}));
    }
  };
});