System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/sphere-collider.js", ["../../../../core/data/decorators/index.js", "./collider.js", "../../physics-enum.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, serializable, Collider, EColliderType, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, SphereCollider;
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
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_colliderJs) {
      Collider = _colliderJs.Collider;
    }, function (_physicsEnumJs) {
      EColliderType = _physicsEnumJs.EColliderType;
    }],
    execute: function () {
      /**
       * @en
       * Sphere collider component.
       * @zh
       * 球碰撞器。
       */
      _export("SphereCollider", SphereCollider = (_dec = ccclass('cc.SphereCollider'), _dec2 = help('i18n:cc.SphereCollider'), _dec3 = menu('Physics/SphereCollider'), _dec4 = tooltip('i18n:physics3d.collider.sphere_radius'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = class SphereCollider extends Collider {
        /// PUBLIC PROPERTY GETTER\SETTER ///

        /**
         * @en
         * Gets or sets the radius of the sphere.
         * @zh
         * 获取或设置球的半径。
         */
        get radius() {
          return this._radius;
        }
        set radius(value) {
          if (this._radius === value) return;
          this._radius = Math.abs(value);
          if (this._shape) {
            this.shape.updateRadius();
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

        /// PRIVATE PROPERTY ///

        constructor() {
          super(EColliderType.SPHERE);
          this._radius = _initializer && _initializer();
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "radius", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_radius", [serializable], function () {
        return 0.5;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});