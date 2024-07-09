System.register("q-bundled:///fs/cocos/physics/framework/assets/physics-material.js", ["../../../core/data/decorators/index.js", "../../../asset/assets/asset.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, range, serializable, type, Asset, CCFloat, math, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, PhysicsMaterial;
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
      editable = _coreDataDecoratorsIndexJs.editable;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
      math = _coreIndexJs.math;
    }],
    execute: function () {
      /**
       * @en
       * Physics materials.
       * @zh
       * 物理材质。
       */
      _export("PhysicsMaterial", PhysicsMaterial = (_dec = ccclass('cc.PhysicsMaterial'), _dec2 = type(CCFloat), _dec3 = type(CCFloat), _dec4 = type(CCFloat), _dec5 = type(CCFloat), _dec6 = range([0, 1, 0.01]), _dec(_class = (_class2 = (_class3 = class PhysicsMaterial extends Asset {
        /**
         * @en
         * Friction for this material.
         * @zh
         * 此材质的摩擦系数。
         */
        get friction() {
          return this._friction;
        }
        set friction(value) {
          if (!math.equals(this._friction, value)) {
            this._friction = value;
            this.emit(PhysicsMaterial.EVENT_UPDATE);
          }
        }

        /**
         * @en
         * Rolling friction for this material.
         * @zh
         * 此材质的滚动摩擦系数。
         */
        get rollingFriction() {
          return this._rollingFriction;
        }
        set rollingFriction(value) {
          if (!math.equals(this._rollingFriction, value)) {
            this._rollingFriction = value;
            this.emit(PhysicsMaterial.EVENT_UPDATE);
          }
        }

        /**
         * @en
         * Spinning friction for this material.
         * @zh
         * 此材质的自旋摩擦系数。
         */
        get spinningFriction() {
          return this._spinningFriction;
        }
        set spinningFriction(value) {
          if (!math.equals(this._spinningFriction, value)) {
            this._spinningFriction = value;
            this.emit(PhysicsMaterial.EVENT_UPDATE);
          }
        }

        /**
         * @en
         * Restitution for this material.
         * @zh
         * 此材质的回弹系数。
         */
        get restitution() {
          return this._restitution;
        }
        set restitution(value) {
          if (!math.equals(this._restitution, value)) {
            this._restitution = value;
            this.emit(PhysicsMaterial.EVENT_UPDATE);
          }
        }
        constructor() {
          super();
          this.id = void 0;
          this._friction = _initializer && _initializer();
          this._rollingFriction = _initializer2 && _initializer2();
          this._spinningFriction = _initializer3 && _initializer3();
          this._restitution = _initializer4 && _initializer4();
          PhysicsMaterial.allMaterials.push(this);
          this.id = PhysicsMaterial._idCounter++;
          if (!this._uuid) this._uuid = `pm_${this.id}`;
        }

        /**
         * @en
         * clone.
         * @zh
         * 克隆。
         */
        clone() {
          const c = new PhysicsMaterial();
          c._friction = this._friction;
          c._restitution = this._restitution;
          c._rollingFriction = this._rollingFriction;
          c._spinningFriction = this._spinningFriction;
          return c;
        }

        /**
         * @en
         * destroy.
         * @zh
         * 销毁。
         * @return 是否成功
         */
        destroy() {
          if (super.destroy()) {
            const idx = PhysicsMaterial.allMaterials.indexOf(this);
            if (idx >= 0) {
              PhysicsMaterial.allMaterials.splice(idx, 1);
            }
            return true;
          }
          return false;
        }

        /**
         * @en
         * Sets the coefficients values.
         * @zh
         * 设置材质相关的系数。
         * @param friction
         * @param rollingFriction
         * @param spinningFriction
         * @param restitution
         */
        setValues(friction, rollingFriction, spinningFriction, restitution) {
          const emitUpdate = this._friction !== friction || this._rollingFriction !== rollingFriction || this._spinningFriction !== spinningFriction || this._restitution !== restitution;
          this._friction = friction;
          this._rollingFriction = rollingFriction;
          this._spinningFriction = spinningFriction;
          this._restitution = restitution;
          if (emitUpdate) this.emit(PhysicsMaterial.EVENT_UPDATE);
        }
      }, _class3.allMaterials = [], _class3.EVENT_UPDATE = 'event_update', _class3._idCounter = 0, _class3), (_applyDecoratedDescriptor(_class2.prototype, "friction", [editable, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "friction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rollingFriction", [editable, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "rollingFriction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spinningFriction", [editable, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "spinningFriction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "restitution", [editable, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "restitution"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_friction", [serializable], function () {
        return 0.6;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_rollingFriction", [serializable], function () {
        return 0.0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_spinningFriction", [serializable], function () {
        return 0.0;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_restitution", [serializable], function () {
        return 0.0;
      })), _class2)) || _class));
    }
  };
});