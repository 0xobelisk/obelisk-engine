System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/box-collider.js", ["../../../../core/data/decorators/index.js", "../../../../core/index.js", "./collider.js", "../../physics-enum.js", "../../../utils/util.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, type, serializable, Vec3, Collider, EColliderType, absolute, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, BoxCollider;
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
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_colliderJs) {
      Collider = _colliderJs.Collider;
    }, function (_physicsEnumJs) {
      EColliderType = _physicsEnumJs.EColliderType;
    }, function (_utilsUtilJs) {
      absolute = _utilsUtilJs.absolute;
    }],
    execute: function () {
      /**
       * @en
       * Box collider component.
       * @zh
       * 盒子碰撞器。
       */
      _export("BoxCollider", BoxCollider = (_dec = ccclass('cc.BoxCollider'), _dec2 = help('i18n:cc.BoxCollider'), _dec3 = menu('Physics/BoxCollider'), _dec4 = type(Vec3), _dec5 = tooltip('i18n:physics3d.collider.box_size'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = class BoxCollider extends Collider {
        /// PUBLIC PROPERTY GETTER\SETTER ///

        /**
         * @en
         * Gets or sets the size of the box, in local space.
         * @zh
         * 获取或设置盒的大小。
         */
        get size() {
          return this._size;
        }
        set size(value) {
          if (Vec3.strictEquals(this._size, value)) return;
          Vec3.copy(this._size, value);
          absolute(this._size);
          if (this._shape) {
            this.shape.updateSize();
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
          super(EColliderType.BOX);
          this._size = _initializer && _initializer();
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "size", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
        return new Vec3(1, 1, 1);
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});