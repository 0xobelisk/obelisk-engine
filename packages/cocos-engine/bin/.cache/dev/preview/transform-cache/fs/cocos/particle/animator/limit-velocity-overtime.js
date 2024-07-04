System.register("q-bundled:///fs/cocos/particle/animator/limit-velocity-overtime.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../enum.js", "../particle.js", "./curve-range.js", "../particle-general-function.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, serializable, visible, pseudoRandom, Vec3, Quat, Space, ModuleRandSeed, ParticleModuleBase, PARTICLE_MODULE_NAME, CurveRange, calculateTransform, isCurveTwoValues, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, LIMIT_VELOCITY_RAND_OFFSET, _temp_v3, _temp_v3_1, LimitVelocityOvertimeModule;
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
  function dampenBeyondLimit(vel, limit, dampen) {
    var sgn = Math.sign(vel);
    var abs = Math.abs(vel);
    if (abs > limit) {
      var absToGive = abs - abs * dampen;
      if (absToGive > limit) {
        abs = absToGive;
      } else {
        abs = limit;
      }
    }
    return abs * sgn;
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_coreIndexJs) {
      pseudoRandom = _coreIndexJs.pseudoRandom;
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
    }, function (_enumJs) {
      Space = _enumJs.Space;
      ModuleRandSeed = _enumJs.ModuleRandSeed;
    }, function (_particleJs) {
      ParticleModuleBase = _particleJs.ParticleModuleBase;
      PARTICLE_MODULE_NAME = _particleJs.PARTICLE_MODULE_NAME;
    }, function (_curveRangeJs) {
      CurveRange = _curveRangeJs.default;
    }, function (_particleGeneralFunctionJs) {
      calculateTransform = _particleGeneralFunctionJs.calculateTransform;
      isCurveTwoValues = _particleGeneralFunctionJs.isCurveTwoValues;
    }],
    execute: function () {
      LIMIT_VELOCITY_RAND_OFFSET = ModuleRandSeed.LIMIT;
      _temp_v3 = new Vec3();
      _temp_v3_1 = new Vec3();
      /**
       * @en
       * This module will damping particle velocity to the limit value over life time.
       * Open the separateAxes option you can damping the particle velocity on XYZ axis
       * Limit value on every axis is curve so you can modify these curves to see how it animate.
       * @zh
       * 本模块用于在粒子生命周期内对速度进行衰减，速度每次衰减比例为 dampen 持续衰减到极限速度。
       * 打开 separateAxes 就能够修改粒子在三个轴方向的极限速度大小。
       * 每个轴上的粒子极限速度大小都是可以用曲线来进行编辑，修改曲线就能够看到粒子大小变化的效果了。
       */
      _export("default", LimitVelocityOvertimeModule = (_dec = ccclass('cc.LimitVelocityOvertimeModule'), _dec2 = displayOrder(0), _dec3 = type(CurveRange), _dec4 = displayOrder(4), _dec5 = tooltip('i18n:limitVelocityOvertimeModule.limitX'), _dec6 = visible(function () {
        return this.separateAxes;
      }), _dec7 = type(CurveRange), _dec8 = displayOrder(5), _dec9 = tooltip('i18n:limitVelocityOvertimeModule.limitY'), _dec10 = visible(function () {
        return this.separateAxes;
      }), _dec11 = type(CurveRange), _dec12 = displayOrder(6), _dec13 = tooltip('i18n:limitVelocityOvertimeModule.limitZ'), _dec14 = visible(function () {
        return this.separateAxes;
      }), _dec15 = type(CurveRange), _dec16 = displayOrder(3), _dec17 = tooltip('i18n:limitVelocityOvertimeModule.limit'), _dec18 = visible(function () {
        return !this.separateAxes;
      }), _dec19 = displayOrder(7), _dec20 = tooltip('i18n:limitVelocityOvertimeModule.dampen'), _dec21 = displayOrder(2), _dec22 = tooltip('i18n:limitVelocityOvertimeModule.separateAxes'), _dec23 = type(Space), _dec24 = displayOrder(1), _dec25 = tooltip('i18n:limitVelocityOvertimeModule.space'), _dec(_class = (_class2 = /*#__PURE__*/function (_ParticleModuleBase) {
        _inheritsLoose(LimitVelocityOvertimeModule, _ParticleModuleBase);
        function LimitVelocityOvertimeModule() {
          var _this;
          _this = _ParticleModuleBase.call(this) || this;
          _this._enable = _initializer && _initializer();
          /**
           * @en Limit velocity on X axis.
           * @zh X 轴方向上的速度下限。
           */
          _this.limitX = _initializer2 && _initializer2();
          /**
           * @en Limit velocity on Y axis.
           * @zh Y 轴方向上的速度下限。
           */
          _this.limitY = _initializer3 && _initializer3();
          /**
           * @en Limit velocity on Z axis.
           * @zh Z 轴方向上的速度下限。
           */
          _this.limitZ = _initializer4 && _initializer4();
          /**
           * @en Velocity limit.
           * @zh 速度下限。
           */
          _this.limit = _initializer5 && _initializer5();
          /**
           * @en Dampen velocity percent every time.
           * @zh 速度每次衰减的比例。
           */
          _this.dampen = _initializer6 && _initializer6();
          /**
           * @en Limit velocity on separate axis.
           * @zh 是否三个轴分开限制。
           */
          _this.separateAxes = _initializer7 && _initializer7();
          /**
           * @en Space used to calculate limit velocity.
           * @zh 计算速度下限时采用的坐标系 [[Space]]。
           */
          _this.space = _initializer8 && _initializer8();
          // TODO:functions related to drag are temporarily not supported
          _this.drag = null;
          _this.multiplyDragByParticleSize = false;
          _this.multiplyDragByParticleVelocity = false;
          _this.name = PARTICLE_MODULE_NAME.LIMIT;
          _this.rotation = void 0;
          _this.needTransform = void 0;
          _this.rotation = new Quat();
          _this.needTransform = false;
          _this.needUpdate = true;
          return _this;
        }

        /**
         * @en Update limit velocity module calculate transform.
         * @zh 更新模块，计算坐标变换。
         * @param space @en Limit velocity module update space @zh 模块更新空间
         * @param worldTransform @en Particle system world transform @zh 粒子系统的世界变换矩阵
         * @internal
         */
        var _proto = LimitVelocityOvertimeModule.prototype;
        _proto.update = function update(space, worldTransform) {
          this.needTransform = calculateTransform(space, this.space, worldTransform, this.rotation);
        }

        /**
         * @en Apply limit velocity to particle.
         * @zh 作用速度衰减到粒子上。
         * @param p @en Particle to animate @zh 模块需要更新的粒子
         * @param dt @en Update interval time @zh 粒子系统更新的间隔时间
         * @internal
         */;
        _proto.animate = function animate(p, dt) {
          var normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
          var dampedVel = _temp_v3;
          if (this.separateAxes) {
            var randX = isCurveTwoValues(this.limitX) ? pseudoRandom(p.randomSeed + LIMIT_VELOCITY_RAND_OFFSET) : 0;
            var randY = isCurveTwoValues(this.limitY) ? pseudoRandom(p.randomSeed + LIMIT_VELOCITY_RAND_OFFSET) : 0;
            var randZ = isCurveTwoValues(this.limitZ) ? pseudoRandom(p.randomSeed + LIMIT_VELOCITY_RAND_OFFSET) : 0;
            Vec3.set(_temp_v3_1, this.limitX.evaluate(normalizedTime, randX), this.limitY.evaluate(normalizedTime, randY), this.limitZ.evaluate(normalizedTime, randZ));
            if (this.needTransform) {
              Vec3.transformQuat(_temp_v3_1, _temp_v3_1, this.rotation);
            }
            Vec3.set(dampedVel, dampenBeyondLimit(p.ultimateVelocity.x, _temp_v3_1.x, this.dampen), dampenBeyondLimit(p.ultimateVelocity.y, _temp_v3_1.y, this.dampen), dampenBeyondLimit(p.ultimateVelocity.z, _temp_v3_1.z, this.dampen));
          } else {
            Vec3.normalize(dampedVel, p.ultimateVelocity);
            var rand = isCurveTwoValues(this.limit) ? pseudoRandom(p.randomSeed + LIMIT_VELOCITY_RAND_OFFSET) : 0;
            Vec3.multiplyScalar(dampedVel, dampedVel, dampenBeyondLimit(p.ultimateVelocity.length(), this.limit.evaluate(normalizedTime, rand), this.dampen));
          }
          Vec3.copy(p.ultimateVelocity, dampedVel);
          Vec3.copy(p.velocity, p.ultimateVelocity);
        };
        _createClass(LimitVelocityOvertimeModule, [{
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
        return LimitVelocityOvertimeModule;
      }(ParticleModuleBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "limitX", [_dec3, serializable, _dec4, _dec5, _dec6], function () {
        return new CurveRange();
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "limitY", [_dec7, serializable, _dec8, _dec9, _dec10], function () {
        return new CurveRange();
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "limitZ", [_dec11, serializable, _dec12, _dec13, _dec14], function () {
        return new CurveRange();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "limit", [_dec15, serializable, _dec16, _dec17, _dec18], function () {
        return new CurveRange();
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "dampen", [serializable, _dec19, _dec20], function () {
        return 3;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "separateAxes", [serializable, _dec21, _dec22], function () {
        return false;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "space", [_dec23, serializable, _dec24, _dec25], function () {
        return Space.Local;
      })), _class2)) || _class));
    }
  };
});