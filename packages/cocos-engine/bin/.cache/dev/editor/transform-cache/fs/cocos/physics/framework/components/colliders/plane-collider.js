System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/plane-collider.js", ["../../../../core/data/decorators/index.js", "../../../../core/index.js", "./collider.js", "../../physics-enum.js", "../rigid-body.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, type, editable, serializable, Vec3, warnID, Collider, EColliderType, ERigidBodyType, RigidBody, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, PlaneCollider;
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
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      warnID = _coreIndexJs.warnID;
    }, function (_colliderJs) {
      Collider = _colliderJs.Collider;
    }, function (_physicsEnumJs) {
      EColliderType = _physicsEnumJs.EColliderType;
      ERigidBodyType = _physicsEnumJs.ERigidBodyType;
    }, function (_rigidBodyJs) {
      RigidBody = _rigidBodyJs.RigidBody;
    }],
    execute: function () {
      /**
       * @en
       * Plane collider component.
       * @zh
       * 静态平面碰撞器。
       */
      _export("PlaneCollider", PlaneCollider = (_dec = ccclass('cc.PlaneCollider'), _dec2 = help('i18n:cc.PlaneCollider'), _dec3 = menu('Physics/PlaneCollider'), _dec4 = type(Vec3), _dec5 = tooltip('i18n:physics3d.collider.plane_normal'), _dec6 = tooltip('i18n:physics3d.collider.plane_constant'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = class PlaneCollider extends Collider {
        /// PUBLIC PROPERTY GETTER\SETTER ///

        /**
         * @en
         * Gets or sets the normal of the plane, in local space.
         * @zh
         * 获取或设置平面在本地坐标系下的法线。
         */
        get normal() {
          return this._normal;
        }
        set normal(value) {
          if (Vec3.strictEquals(this._normal, value)) return;
          Vec3.copy(this._normal, value);
          if (this._shape) {
            this.shape.setNormal(this._normal);
          }
        }

        /**
         * @en
         * Gets or sets the value of the plane moving along the normal, in local space.
         * @zh
         * 获取或设置平面在本地坐标系下沿着法线移动的数值。
         */
        get constant() {
          return this._constant;
        }
        set constant(v) {
          if (this._constant === v) return;
          this._constant = v;
          if (this._shape) {
            this.shape.setConstant(this._constant);
          }
        }

        /**
         * @en
         * Gets the wrapper object, through which the lowLevel instance can be accessed.
         * @zh
         * 获取封装对象，通过此对象可以访问到底层实例。
         */
        get shape() {
          return this._shape;
        }
        onEnable() {
          super.onEnable();
          if (this.node) {
            const body = this.node.getComponent(RigidBody);
            if (body && body.isValid && body.type === ERigidBodyType.DYNAMIC) {
              warnID(9630, this.node.name);
            }
          }
        }

        /// PRIVATE PROPERTY ///

        constructor() {
          super(EColliderType.PLANE);
          this._normal = _initializer && _initializer();
          this._constant = _initializer2 && _initializer2();
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "normal", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "normal"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "constant", [editable, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "constant"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_normal", [serializable], function () {
        return new Vec3(0, 1, 0);
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_constant", [serializable], function () {
        return 0;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});