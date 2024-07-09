System.register("q-bundled:///fs/cocos/physics-2d/framework/components/colliders/box-collider-2d.js", ["../../../../core/index.js", "./collider-2d.js", "../../physics-types.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Size, _decorator, Collider2D, ECollider2DType, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, ccclass, menu, property, BoxCollider2D;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      Size = _coreIndexJs.Size;
      _decorator = _coreIndexJs._decorator;
    }, function (_collider2dJs) {
      Collider2D = _collider2dJs.Collider2D;
    }, function (_physicsTypesJs) {
      ECollider2DType = _physicsTypesJs.ECollider2DType;
    }, function (_coreDataDecoratorsIndexJs) {
      help = _coreDataDecoratorsIndexJs.help;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
    }],
    execute: function () {
      ({
        ccclass,
        menu,
        property
      } = _decorator);
      _export("BoxCollider2D", BoxCollider2D = (_dec = ccclass('cc.BoxCollider2D'), _dec2 = help('i18n:cc.BoxCollider2D'), _dec3 = menu('Physics2D/Colliders/BoxCollider2D'), _dec4 = type(Size), _dec5 = tooltip('i18n:physics2d.collider.size'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class BoxCollider2D extends Collider2D {
        constructor(...args) {
          super(...args);
          this._size = _initializer && _initializer();
          this.TYPE = ECollider2DType.BOX;
        }
        /**
         * @en Box size.
         * @zh 包围盒大小。
         */
        get size() {
          return this._size;
        }
        set size(v) {
          this._size = v;
        }

        /**
         * @en Get world points.
         * @zh 世界坐标下 BoX 的四个点。
         */
        get worldPoints() {
          if (this._shape) {
            return this._shape.worldPoints;
          }
          return [];
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
        return new Size(1, 1);
      }), _applyDecoratedDescriptor(_class2.prototype, "size", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype)), _class2)) || _class) || _class) || _class));
    }
  };
});