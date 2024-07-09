System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/cone-collider.js", ["../../../../core/data/decorators/index.js", "./collider.js", "../../physics-enum.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, type, serializable, Collider, EAxisDirection, EColliderType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, _initializer3, ConeCollider;
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
    }],
    execute: function () {
      /**
       * @en
       * Cone collider component.
       * @zh
       * 圆锥体碰撞器。
       */
      _export("ConeCollider", ConeCollider = (_dec = ccclass('cc.ConeCollider'), _dec2 = help('i18n:cc.ConeCollider'), _dec3 = menu('Physics/ConeCollider'), _dec4 = tooltip('i18n:physics3d.collider.cone_radius'), _dec5 = tooltip('i18n:physics3d.collider.cone_height'), _dec6 = type(EAxisDirection), _dec7 = tooltip('i18n:physics3d.collider.cone_direction'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = class ConeCollider extends Collider {
        /// PUBLIC PROPERTY GETTER\SETTER ///

        /**
         * @en
         * Gets or sets the radius of the circle on the cone body, in local space.
         * @zh
         * 获取或设置圆锥体上圆面半径。
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
         * Gets or sets the cone body is at the corresponding axial height, in local space.
         * @zh
         * 获取或设置圆锥体在相应轴向的高度。
         */
        get height() {
          return this._height;
        }
        set height(value) {
          if (this._height === value) return;
          if (value < 0) value = 0;
          this._height = value;
          if (this._shape) {
            this.shape.setHeight(value);
          }
        }

        /**
         * @en
         * Gets or sets the cone direction, in local space.
         * @zh
         * 获取或设置在圆锥体本地空间上的方向。
         */
        get direction() {
          return this._direction;
        }
        set direction(value) {
          if (this._direction === value) return;
          if (value < EAxisDirection.X_AXIS || value > EAxisDirection.Z_AXIS) return;
          this._direction = value;
          if (this._shape) {
            this.shape.setDirection(value);
          }
        }
        get shape() {
          return this._shape;
        }

        /// PRIVATE PROPERTY ///

        constructor() {
          super(EColliderType.CONE);
          this._radius = _initializer && _initializer();
          this._height = _initializer2 && _initializer2();
          this._direction = _initializer3 && _initializer3();
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "radius", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "height", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "height"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_radius", [serializable], function () {
        return 0.5;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_height", [serializable], function () {
        return 1;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_direction", [serializable], function () {
        return EAxisDirection.Y_AXIS;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});