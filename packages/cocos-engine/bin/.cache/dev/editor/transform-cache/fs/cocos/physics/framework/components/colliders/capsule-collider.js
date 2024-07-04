System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/capsule-collider.js", ["../../../../core/data/decorators/index.js", "./collider.js", "../../physics-enum.js", "../../../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, type, serializable, Collider, EAxisDirection, EColliderType, absMax, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, _initializer3, CapsuleCollider;
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
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_colliderJs) {
      Collider = _colliderJs.Collider;
    }, function (_physicsEnumJs) {
      EAxisDirection = _physicsEnumJs.EAxisDirection;
      EColliderType = _physicsEnumJs.EColliderType;
    }, function (_coreIndexJs) {
      absMax = _coreIndexJs.absMax;
    }],
    execute: function () {
      /**
       * @en
       * Capsule collider component.
       * @zh
       * 胶囊体碰撞器。
       */
      _export("CapsuleCollider", CapsuleCollider = (_dec = ccclass('cc.CapsuleCollider'), _dec2 = help('i18n:cc.CapsuleCollider'), _dec3 = menu('Physics/CapsuleCollider'), _dec4 = tooltip('i18n:physics3d.collider.capsule_radius'), _dec5 = tooltip('i18n:physics3d.collider.capsule_cylinderHeight'), _dec6 = type(EAxisDirection), _dec7 = tooltip('i18n:physics3d.collider.capsule_direction'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = class CapsuleCollider extends Collider {
        /// PUBLIC PROPERTY GETTER\SETTER ///

        /**
         * @en
         * Gets or sets the radius of the sphere on the capsule body, in local space.
         * @zh
         * 获取或设置胶囊体在本地坐标系下的球半径。
         */
        get radius() {
          return this._radius;
        }
        set radius(value) {
          if (this._radius === value) return;
          this._radius = Math.abs(value);
          if (this._shape) {
            this.shape.setRadius(value);
          }
        }

        /**
         * @en
         * Gets or sets the cylinder on the capsule body is at the corresponding axial height, in local space.
         * @zh
         * 获取或设置在本地坐标系下的胶囊体上圆柱体的高度。
         */
        get cylinderHeight() {
          return this._cylinderHeight;
        }
        set cylinderHeight(value) {
          if (this._cylinderHeight === value) return;
          this._cylinderHeight = Math.abs(value);
          if (this._shape) {
            this.shape.setCylinderHeight(value);
          }
        }

        /**
         * @en
         * Gets or sets the capsule direction, in local space.
         * @zh
         * 获取或设置在本地坐标系下胶囊体的方向。
         */
        get direction() {
          return this._direction;
        }
        set direction(value) {
          value = Math.floor(value);
          if (value < EAxisDirection.X_AXIS || value > EAxisDirection.Z_AXIS) return;
          if (this._direction === value) return;
          this._direction = value;
          if (this._shape) {
            this.shape.setDirection(value);
          }
        }

        /**
         * @en
         * Gets or sets the capsule height, in local space, with the minimum value being the diameter of the sphere.
         * @zh
         * 获取或设置在本地坐标系下胶囊体的高度，最小值为球的直径。
         */
        get height() {
          return this._radius * 2 + this._cylinderHeight;
        }
        set height(value) {
          let ch = value - this._radius * 2;
          if (ch < 0) ch = 0;
          this.cylinderHeight = ch;
        }

        /**
         * @en
         * Gets the capsule body is at the corresponding axial height, in world space.
         * @zh
         * 获取胶囊体在世界坐标系下相应胶囊体朝向上的高度，只读属性。
         */
        get worldHeight() {
          return this._radius * 2 * this._getRadiusScale() + this._cylinderHeight * this._getHeightScale();
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

        /// PRIVATE PROPERTY ///

        constructor() {
          super(EColliderType.CAPSULE);
          this._radius = _initializer && _initializer();
          this._cylinderHeight = _initializer2 && _initializer2();
          this._direction = _initializer3 && _initializer3();
        }
        _getRadiusScale() {
          if (this.node == null) return 1;
          const ws = this.node.worldScale;
          if (this._direction === EAxisDirection.Y_AXIS) return Math.abs(absMax(ws.x, ws.z));
          if (this._direction === EAxisDirection.X_AXIS) return Math.abs(absMax(ws.y, ws.z));
          return Math.abs(absMax(ws.x, ws.y));
        }
        _getHeightScale() {
          if (this.node == null) return 1;
          const ws = this.node.worldScale;
          if (this._direction === EAxisDirection.Y_AXIS) return Math.abs(ws.y);
          if (this._direction === EAxisDirection.X_AXIS) return Math.abs(ws.x);
          return Math.abs(ws.z);
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "radius", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cylinderHeight", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "cylinderHeight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_radius", [serializable], function () {
        return 0.5;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_cylinderHeight", [serializable], function () {
        return 1;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_direction", [serializable], function () {
        return EAxisDirection.Y_AXIS;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});