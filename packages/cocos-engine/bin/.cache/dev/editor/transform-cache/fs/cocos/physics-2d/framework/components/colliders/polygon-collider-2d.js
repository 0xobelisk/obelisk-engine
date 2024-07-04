System.register("q-bundled:///fs/cocos/physics-2d/framework/components/colliders/polygon-collider-2d.js", ["../../../../core/index.js", "./collider-2d.js", "../../physics-types.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var CCFloat, Vec2, _decorator, Collider2D, ECollider2DType, displayOrder, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _initializer, _initializer2, ccclass, menu, property, PolygonCollider2D;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
      Vec2 = _coreIndexJs.Vec2;
      _decorator = _coreIndexJs._decorator;
    }, function (_collider2dJs) {
      Collider2D = _collider2dJs.Collider2D;
    }, function (_physicsTypesJs) {
      ECollider2DType = _physicsTypesJs.ECollider2DType;
    }, function (_coreDataDecoratorsIndexJs) {
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
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
      _export("PolygonCollider2D", PolygonCollider2D = (_dec = ccclass('cc.PolygonCollider2D'), _dec2 = help('i18n:cc.PolygonCollider2D'), _dec3 = menu('Physics2D/Colliders/PolygonCollider2D'), _dec4 = type(CCFloat), _dec5 = displayOrder(0), _dec6 = tooltip('i18n:physics2d.collider.threshold'), _dec7 = type([Vec2]), _dec8 = tooltip('i18n:physics2d.collider.points'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class PolygonCollider2D extends Collider2D {
        constructor(...args) {
          super(...args);
          this.threshold = _initializer && _initializer();
          this._points = _initializer2 && _initializer2();
          this.TYPE = ECollider2DType.POLYGON;
        }
        /**
         * @en Polygon points.
         * @zh 多边形顶点数组。
         */
        get points() {
          return this._points;
        }
        set points(v) {
          this._points = v;
        }

        /**
         * @en Get world points.
         * @zh 世界坐标下多边形碰撞体的点。
         */
        get worldPoints() {
          if (this._shape) {
            return this._shape.worldPoints;
          }
          return [];
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "threshold", [_dec4, _dec5, _dec6], function () {
        return 1;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_points", [serializable], function () {
        return [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];
      }), _applyDecoratedDescriptor(_class2.prototype, "points", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "points"), _class2.prototype)), _class2)) || _class) || _class) || _class));
    }
  };
});