System.register("q-bundled:///fs/cocos/physics/framework/components/character-controllers/capsule-character-controller.js", ["../../../../core/data/decorators/index.js", "../../../../core/index.js", "../../physics-enum.js", "./character-controller.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, executionOrder, tooltip, type, serializable, Vec3, CCFloat, ECharacterControllerType, CharacterController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _initializer, _initializer2, v3_0, CapsuleCharacterController;
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
      _export("CapsuleCharacterController", CapsuleCharacterController = (_dec = ccclass('cc.CapsuleCharacterController'), _dec2 = help('i18n:cc.CapsuleCharacterController'), _dec3 = menu('Physics/CapsuleCharacterController'), _dec4 = executionOrder(-1), _dec5 = tooltip('i18n:physics3d.character_controller.capsuleRadius'), _dec6 = type(CCFloat), _dec7 = tooltip('i18n:physics3d.character_controller.capsuleHeight'), _dec8 = type(CCFloat), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = _dec4(_class = (_class2 = class CapsuleCharacterController extends CharacterController {
        constructor() {
          super(ECharacterControllerType.CAPSULE);
          /// PRIVATE PROPERTY ///
          this._radius = _initializer && _initializer();
          this._height = _initializer2 && _initializer2();
        }

        /// PUBLIC PROPERTY GETTER\SETTER ///
        /**
         * @en
         * Gets or sets the radius of the sphere of the capsule shape of the CharacterController in local space.
         * @zh
         * 获取或设置在本地坐标系下的胶囊体球半径。
         */
        get radius() {
          return this._radius;
        }
        set radius(value) {
          if (this._radius === value) return;
          this._radius = Math.abs(value);
          if (this._cct) {
            this._cct.setRadius(value);
          }
        }

        /**
         * @en
         * Gets or sets the height of the capsule shape of the CharacterController in local space.
         * Height the distance between the two sphere centers at the end of the capsule.
         * @zh
         * 获取或设置在本地坐标系下的胶囊体末端两个球心的距离。
         */
        get height() {
          return this._height;
        }
        set height(value) {
          if (this._height === value) return;
          this._height = Math.abs(value);
          if (this._cct) {
            this._cct.setHeight(value);
          }
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "radius", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "height", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "height"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_radius", [serializable], function () {
        return 0.5;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_height", [serializable], function () {
        return 1.0;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});