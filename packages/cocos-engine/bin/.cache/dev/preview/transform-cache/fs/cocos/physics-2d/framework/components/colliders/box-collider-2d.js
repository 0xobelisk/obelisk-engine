System.register("q-bundled:///fs/cocos/physics-2d/framework/components/colliders/box-collider-2d.js", ["../../../../core/index.js", "./collider-2d.js", "../../physics-types.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Size, _decorator, Collider2D, ECollider2DType, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, ccclass, menu, property, BoxCollider2D;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      ccclass = _decorator.ccclass;
      menu = _decorator.menu;
      property = _decorator.property;
      _export("BoxCollider2D", BoxCollider2D = (_dec = ccclass('cc.BoxCollider2D'), _dec2 = help('i18n:cc.BoxCollider2D'), _dec3 = menu('Physics2D/Colliders/BoxCollider2D'), _dec4 = type(Size), _dec5 = tooltip('i18n:physics2d.collider.size'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Collider2D) {
        _inheritsLoose(BoxCollider2D, _Collider2D);
        function BoxCollider2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Collider2D.call.apply(_Collider2D, [this].concat(args)) || this;
          _this._size = _initializer && _initializer();
          _this.TYPE = ECollider2DType.BOX;
          return _this;
        }
        _createClass(BoxCollider2D, [{
          key: "size",
          get:
          /**
           * @en Box size.
           * @zh 包围盒大小。
           */
          function get() {
            return this._size;
          },
          set: function set(v) {
            this._size = v;
          }

          /**
           * @en Get world points.
           * @zh 世界坐标下 BoX 的四个点。
           */
        }, {
          key: "worldPoints",
          get: function get() {
            if (this._shape) {
              return this._shape.worldPoints;
            }
            return [];
          }
        }]);
        return BoxCollider2D;
      }(Collider2D), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
        return new Size(1, 1);
      }), _applyDecoratedDescriptor(_class2.prototype, "size", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype)), _class2)) || _class) || _class) || _class));
    }
  };
});