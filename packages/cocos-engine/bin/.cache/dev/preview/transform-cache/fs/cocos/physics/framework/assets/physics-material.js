System.register("q-bundled:///fs/cocos/physics/framework/assets/physics-material.js", ["../../../core/data/decorators/index.js", "../../../asset/assets/asset.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, range, serializable, type, Asset, CCFloat, math, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, PhysicsMaterial;
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
      _export("PhysicsMaterial", PhysicsMaterial = (_dec = ccclass('cc.PhysicsMaterial'), _dec2 = type(CCFloat), _dec3 = type(CCFloat), _dec4 = type(CCFloat), _dec5 = type(CCFloat), _dec6 = range([0, 1, 0.01]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(PhysicsMaterial, _Asset);
        function PhysicsMaterial() {
          var _this;
          _this = _Asset.call(this) || this;
          _this.id = void 0;
          _this._friction = _initializer && _initializer();
          _this._rollingFriction = _initializer2 && _initializer2();
          _this._spinningFriction = _initializer3 && _initializer3();
          _this._restitution = _initializer4 && _initializer4();
          PhysicsMaterial.allMaterials.push(_assertThisInitialized(_this));
          _this.id = PhysicsMaterial._idCounter++;
          if (!_this._uuid) _this._uuid = "pm_" + _this.id;
          return _this;
        }

        /**
         * @en
         * clone.
         * @zh
         * 克隆。
         */
        var _proto = PhysicsMaterial.prototype;
        _proto.clone = function clone() {
          var c = new PhysicsMaterial();
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
         */;
        _proto.destroy = function destroy() {
          if (_Asset.prototype.destroy.call(this)) {
            var idx = PhysicsMaterial.allMaterials.indexOf(this);
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
         */;
        _proto.setValues = function setValues(friction, rollingFriction, spinningFriction, restitution) {
          var emitUpdate = this._friction !== friction || this._rollingFriction !== rollingFriction || this._spinningFriction !== spinningFriction || this._restitution !== restitution;
          this._friction = friction;
          this._rollingFriction = rollingFriction;
          this._spinningFriction = spinningFriction;
          this._restitution = restitution;
          if (emitUpdate) this.emit(PhysicsMaterial.EVENT_UPDATE);
        };
        _createClass(PhysicsMaterial, [{
          key: "friction",
          get:
          /**
           * @en
           * Friction for this material.
           * @zh
           * 此材质的摩擦系数。
           */
          function get() {
            return this._friction;
          },
          set: function set(value) {
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
        }, {
          key: "rollingFriction",
          get: function get() {
            return this._rollingFriction;
          },
          set: function set(value) {
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
        }, {
          key: "spinningFriction",
          get: function get() {
            return this._spinningFriction;
          },
          set: function set(value) {
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
        }, {
          key: "restitution",
          get: function get() {
            return this._restitution;
          },
          set: function set(value) {
            if (!math.equals(this._restitution, value)) {
              this._restitution = value;
              this.emit(PhysicsMaterial.EVENT_UPDATE);
            }
          }
        }]);
        return PhysicsMaterial;
      }(Asset), _class3.allMaterials = [], _class3.EVENT_UPDATE = 'event_update', _class3._idCounter = 0, _class3), (_applyDecoratedDescriptor(_class2.prototype, "friction", [editable, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "friction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rollingFriction", [editable, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "rollingFriction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spinningFriction", [editable, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "spinningFriction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "restitution", [editable, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "restitution"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_friction", [serializable], function () {
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