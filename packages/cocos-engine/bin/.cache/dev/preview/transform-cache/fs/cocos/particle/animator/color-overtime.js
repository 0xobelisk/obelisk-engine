System.register("q-bundled:///fs/cocos/particle/animator/color-overtime.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../particle.js", "./gradient-range.js", "../enum.js", "../particle-general-function.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, type, serializable, pseudoRandom, PARTICLE_MODULE_NAME, ParticleModuleBase, GradientRange, ModuleRandSeed, isGradientTwoValues, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _initializer2, COLOR_OVERTIME_RAND_OFFSET, ColorOvertimeModule;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      pseudoRandom = _coreIndexJs.pseudoRandom;
    }, function (_particleJs) {
      PARTICLE_MODULE_NAME = _particleJs.PARTICLE_MODULE_NAME;
      ParticleModuleBase = _particleJs.ParticleModuleBase;
    }, function (_gradientRangeJs) {
      GradientRange = _gradientRangeJs.default;
    }, function (_enumJs) {
      ModuleRandSeed = _enumJs.ModuleRandSeed;
    }, function (_particleGeneralFunctionJs) {
      isGradientTwoValues = _particleGeneralFunctionJs.isGradientTwoValues;
    }],
    execute: function () {
      COLOR_OVERTIME_RAND_OFFSET = ModuleRandSeed.COLOR;
      /**
       * @en
       * This module will modify particle color over life time. You can set the color gradient to see how it changes.
       * @zh
       * 本模块用于在粒子生命周期内对颜色进行改变，可以修改模块下的颜色渐变条来查看粒子颜色渐变效果。
       */
      _export("default", ColorOvertimeModule = (_dec = ccclass('cc.ColorOvertimeModule'), _dec2 = displayOrder(0), _dec3 = type(GradientRange), _dec4 = displayOrder(1), _dec(_class = (_class2 = /*#__PURE__*/function (_ParticleModuleBase) {
        _inheritsLoose(ColorOvertimeModule, _ParticleModuleBase);
        function ColorOvertimeModule() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ParticleModuleBase.call.apply(_ParticleModuleBase, [this].concat(args)) || this;
          _this._enable = _initializer && _initializer();
          /**
           * @en Change color over life time. Evaluate by key interpolation.
           * @zh 颜色随时间变化的参数，各个 key 之间线性插值变化。
           */
          _this.color = _initializer2 && _initializer2();
          _this.name = PARTICLE_MODULE_NAME.COLOR;
          return _this;
        }
        var _proto = ColorOvertimeModule.prototype;
        /**
         * @en Apply color animation to particle.
         * @zh 作用颜色变换到粒子上。
         * @param particle @en Particle to animate. @zh 模块需要更新的粒子。
         * @internal
         */
        _proto.animate = function animate(particle) {
          particle.color.set(particle.startColor);
          var rand = isGradientTwoValues(this.color) ? pseudoRandom(particle.randomSeed + COLOR_OVERTIME_RAND_OFFSET) : 0;
          particle.color.multiply(this.color.evaluate(1.0 - particle.remainingLifetime / particle.startLifetime, rand));
        };
        _createClass(ColorOvertimeModule, [{
          key: "enable",
          get:
          /**
           * @en Enable or disable this module.
           * @zh 是否启用。
           */
          function get() {
            return this._enable;
          },
          set: function set(val) {
            if (this._enable === val) return;
            this._enable = val;
            if (!this.target) return;
            this.target.enableModule(this.name, val, this);
          }
        }]);
        return ColorOvertimeModule;
      }(ParticleModuleBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "color", [_dec3, serializable, _dec4], function () {
        return new GradientRange();
      })), _class2)) || _class));
    }
  };
});