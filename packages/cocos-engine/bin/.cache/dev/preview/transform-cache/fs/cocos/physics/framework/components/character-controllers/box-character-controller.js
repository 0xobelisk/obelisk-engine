System.register("q-bundled:///fs/cocos/physics/framework/components/character-controllers/box-character-controller.js", ["../../../../core/data/decorators/index.js", "../../../../core/index.js", "../../physics-enum.js", "./character-controller.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, executionOrder, tooltip, type, serializable, Vec3, CCFloat, ECharacterControllerType, CharacterController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _initializer, _initializer2, _initializer3, v3_0, BoxCharacterController;
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
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      CCFloat = _coreIndexJs.CCFloat;
    }, function (_physicsEnumJs) {
      ECharacterControllerType = _physicsEnumJs.ECharacterControllerType;
    }, function (_characterControllerJs) {
      CharacterController = _characterControllerJs.CharacterController;
    }],
    execute: function () {
      v3_0 = new Vec3(0, 0, 0);
      /**
       * @en
       * Character Controller component.
       * @zh
       * 角色控制器组件。
       */
      _export("BoxCharacterController", BoxCharacterController = (_dec = ccclass('cc.BoxCharacterController'), _dec2 = help('i18n:cc.BoxCharacterController'), _dec3 = menu('Physics/BoxCharacterController'), _dec4 = executionOrder(-1), _dec5 = tooltip('i18n:physics3d.character_controller.boxHalfHeight'), _dec6 = type(CCFloat), _dec7 = tooltip('i18n:physics3d.character_controller.boxHalfSideExtent'), _dec8 = type(CCFloat), _dec9 = tooltip('i18n:physics3d.character_controller.boxHalfForwardExtent'), _dec10 = type(CCFloat), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_CharacterController) {
        _inheritsLoose(BoxCharacterController, _CharacterController);
        function BoxCharacterController() {
          var _this;
          _this = _CharacterController.call(this, ECharacterControllerType.BOX) || this;
          /// PRIVATE PROPERTY ///
          _this._halfHeight = _initializer && _initializer();
          _this._halfSideExtent = _initializer2 && _initializer2();
          _this._halfForwardExtent = _initializer3 && _initializer3();
          return _this;
        }

        /// PUBLIC PROPERTY GETTER\SETTER ///
        /**
         * @en
         * Gets or sets the half height of the box shape of the CharacterController in local space.
         * @zh
         * 获取或设置立方体在本地坐标系下的高度的一半。
         */
        _createClass(BoxCharacterController, [{
          key: "halfHeight",
          get: function get() {
            return this._halfHeight;
          },
          set: function set(value) {
            if (this._halfHeight === value) return;
            this._halfHeight = Math.abs(value);
            if (this._cct) {
              this._cct.setHalfHeight(value);
            }
          }

          /**
           * @en
           * Gets or sets the half side extent of box shape of the CharacterController in local space.
           * @zh
           * 获取或设置立方体在本地坐标系下的横向宽度的一半。
           */
        }, {
          key: "halfSideExtent",
          get: function get() {
            return this._halfSideExtent;
          },
          set: function set(value) {
            if (this._halfSideExtent === value) return;
            this._halfSideExtent = Math.abs(value);
            if (this._cct) {
              this._cct.setHalfSideExtent(value);
            }
          }

          /**
           * @en
           * Gets or sets the half forward extent of the box on the CharacterController in local space.
           * @zh
           * 获取或设置立方体在本地坐标系下的纵向宽度一半。
           */
        }, {
          key: "halfForwardExtent",
          get: function get() {
            return this._halfForwardExtent;
          },
          set: function set(value) {
            if (this._halfForwardExtent === value) return;
            this._halfForwardExtent = Math.abs(value);
            if (this._cct) {
              this._cct.setHalfForwardExtent(value);
            }
          }
        }]);
        return BoxCharacterController;
      }(CharacterController), (_applyDecoratedDescriptor(_class2.prototype, "halfHeight", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "halfHeight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "halfSideExtent", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "halfSideExtent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "halfForwardExtent", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "halfForwardExtent"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_halfHeight", [serializable], function () {
        return 0.5;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_halfSideExtent", [serializable], function () {
        return 0.5;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_halfForwardExtent", [serializable], function () {
        return 0.5;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});