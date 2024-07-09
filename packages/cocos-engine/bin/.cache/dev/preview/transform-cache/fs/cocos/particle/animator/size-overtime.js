System.register("q-bundled:///fs/cocos/particle/animator/size-overtime.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../particle.js", "./curve-range.js", "../enum.js", "../particle-general-function.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, serializable, range, visible, pseudoRandom, Vec3, ParticleModuleBase, PARTICLE_MODULE_NAME, CurveRange, ModuleRandSeed, isCurveTwoValues, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, SIZE_OVERTIME_RAND_OFFSET, SizeOvertimeModule;
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
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      range = _coreDataDecoratorsIndexJs.range;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_coreIndexJs) {
      pseudoRandom = _coreIndexJs.pseudoRandom;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_particleJs) {
      ParticleModuleBase = _particleJs.ParticleModuleBase;
      PARTICLE_MODULE_NAME = _particleJs.PARTICLE_MODULE_NAME;
    }, function (_curveRangeJs) {
      CurveRange = _curveRangeJs.default;
    }, function (_enumJs) {
      ModuleRandSeed = _enumJs.ModuleRandSeed;
    }, function (_particleGeneralFunctionJs) {
      isCurveTwoValues = _particleGeneralFunctionJs.isCurveTwoValues;
    }],
    execute: function () {
      SIZE_OVERTIME_RAND_OFFSET = ModuleRandSeed.SIZE;
      /**
       * @en
       * This module will modify particle size over life time.
       * Open the separateAxes option you can change the particle size on XYZ axis (Size on Z axis is invalid for billboard particle)
       * Size on every axis is curve so you can modify these curves to see how it animate.
       * @zh
       * 本模块用于在粒子生命周期内对大小进行改变。
       * 打开 separateAxes 就能够修改粒子在三个轴方向的大小（z轴大小对公告板粒子无效）
       * 每个轴上的粒子大小都是可以用曲线来进行编辑，修改曲线就能够看到粒子大小变化的效果了。
       */
      _export("default", SizeOvertimeModule = (_dec = ccclass('cc.SizeOvertimeModule'), _dec2 = displayOrder(0), _dec3 = displayOrder(1), _dec4 = tooltip('i18n:sizeOvertimeModule.separateAxes'), _dec5 = type(CurveRange), _dec6 = range([0, Number.POSITIVE_INFINITY]), _dec7 = displayOrder(2), _dec8 = tooltip('i18n:sizeOvertimeModule.size'), _dec9 = visible(function () {
        return !this.separateAxes;
      }), _dec10 = type(CurveRange), _dec11 = range([0, Number.POSITIVE_INFINITY]), _dec12 = displayOrder(3), _dec13 = tooltip('i18n:sizeOvertimeModule.x'), _dec14 = visible(function () {
        return this.separateAxes;
      }), _dec15 = type(CurveRange), _dec16 = range([0, Number.POSITIVE_INFINITY]), _dec17 = displayOrder(4), _dec18 = tooltip('i18n:sizeOvertimeModule.y'), _dec19 = visible(function () {
        return this.separateAxes;
      }), _dec20 = type(CurveRange), _dec21 = range([0, Number.POSITIVE_INFINITY]), _dec22 = displayOrder(5), _dec23 = tooltip('i18n:sizeOvertimeModule.z'), _dec24 = visible(function () {
        return this.separateAxes;
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_ParticleModuleBase) {
        _inheritsLoose(SizeOvertimeModule, _ParticleModuleBase);
        function SizeOvertimeModule() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ParticleModuleBase.call.apply(_ParticleModuleBase, [this].concat(args)) || this;
          _this._enable = _initializer && _initializer();
          /**
           * @en Different size on separate axis.
           * @zh 决定是否在每个轴上独立控制粒子大小。
           */
          _this.separateAxes = _initializer2 && _initializer2();
          /**
           * @en Curve to modify particle size.
           * @zh 定义一条曲线来决定粒子在其生命周期中的大小变化。
           */
          _this.size = _initializer3 && _initializer3();
          /**
           * @en Curve to modify particle size on X axis.
           * @zh 定义一条曲线来决定粒子在其生命周期中 X 轴方向上的大小变化。
           */
          _this.x = _initializer4 && _initializer4();
          /**
           * @en Curve to modify particle size on Y axis.
           * @zh 定义一条曲线来决定粒子在其生命周期中 Y 轴方向上的大小变化。
           */
          _this.y = _initializer5 && _initializer5();
          /**
           * @en Curve to modify particle size on Z axis.
           * @zh 定义一条曲线来决定粒子在其生命周期中 Z 轴方向上的大小变化。
           */
          _this.z = _initializer6 && _initializer6();
          _this.name = PARTICLE_MODULE_NAME.SIZE;
          return _this;
        }
        var _proto = SizeOvertimeModule.prototype;
        /**
         * @en Apply size animation to particle.
         * @zh 应用大小变换到粒子上。
         * @param particle @en Particle to animate @zh 模块需要更新的粒子
         * @param dt @en Update interval time @zh 粒子系统更新的间隔时间
         * @internal
         */
        _proto.animate = function animate(particle, dt) {
          if (!this.separateAxes) {
            var rand = isCurveTwoValues(this.size) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
            Vec3.multiplyScalar(particle.size, particle.startSize, this.size.evaluate(1 - particle.remainingLifetime / particle.startLifetime, rand));
          } else {
            var currLifetime = 1 - particle.remainingLifetime / particle.startLifetime;
            var randX = isCurveTwoValues(this.x) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
            var randY = isCurveTwoValues(this.y) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
            var randZ = isCurveTwoValues(this.z) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
            particle.size.x = particle.startSize.x * this.x.evaluate(currLifetime, randX);
            particle.size.y = particle.startSize.y * this.y.evaluate(currLifetime, randY);
            particle.size.z = particle.startSize.z * this.z.evaluate(currLifetime, randZ);
          }
        };
        _createClass(SizeOvertimeModule, [{
          key: "enable",
          get:
          /**
           * @en Enable this module or not.
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
        return SizeOvertimeModule;
      }(ParticleModuleBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "separateAxes", [serializable, _dec3, _dec4], function () {
        return false;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "size", [_dec5, serializable, _dec6, _dec7, _dec8, _dec9], function () {
        return new CurveRange();
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "x", [_dec10, serializable, _dec11, _dec12, _dec13, _dec14], function () {
        return new CurveRange();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "y", [_dec15, serializable, _dec16, _dec17, _dec18, _dec19], function () {
        return new CurveRange();
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "z", [_dec20, serializable, _dec21, _dec22, _dec23, _dec24], function () {
        return new CurveRange();
      })), _class2)) || _class));
    }
  };
});