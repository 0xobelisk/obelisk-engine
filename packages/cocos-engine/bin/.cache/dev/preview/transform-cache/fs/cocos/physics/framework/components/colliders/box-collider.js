System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/box-collider.js", ["../../../../core/data/decorators/index.js", "../../../../core/index.js", "./collider.js", "../../physics-enum.js", "../../../utils/util.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, type, serializable, Vec3, Collider, EColliderType, absolute, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, BoxCollider;
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
      _export("BoxCollider", BoxCollider = (_dec = ccclass('cc.BoxCollider'), _dec2 = help('i18n:cc.BoxCollider'), _dec3 = menu('Physics/BoxCollider'), _dec4 = type(Vec3), _dec5 = tooltip('i18n:physics3d.collider.box_size'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Collider) {
        _inheritsLoose(BoxCollider, _Collider);
        function BoxCollider() {
          var _this;
          _this = _Collider.call(this, EColliderType.BOX) || this;
          /// PRIVATE PROPERTY ///
          _this._size = _initializer && _initializer();
          return _this;
        }
        _createClass(BoxCollider, [{
          key: "size",
          get:
          /// PUBLIC PROPERTY GETTER\SETTER ///

          /**
           * @en
           * Gets or sets the size of the box, in local space.
           * @zh
           * 获取或设置盒的大小。
           */
          function get() {
            return this._size;
          },
          set: function set(value) {
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
        }, {
          key: "shape",
          get: function get() {
            return this._shape;
          }
        }]);
        return BoxCollider;
      }(Collider), (_applyDecoratedDescriptor(_class2.prototype, "size", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
        return new Vec3(1, 1, 1);
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});