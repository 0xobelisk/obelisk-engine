System.register("q-bundled:///fs/cocos/particle/animator/velocity-overtime.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../enum.js", "../particle.js", "../particle-general-function.js", "./curve-range.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, serializable, pseudoRandom, Quat, Vec3, Space, ModuleRandSeed, ParticleModuleBase, PARTICLE_MODULE_NAME, calculateTransform, isCurveTwoValues, CurveRange, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, VELOCITY_X_OVERTIME_RAND_OFFSET, VELOCITY_Y_OVERTIME_RAND_OFFSET, VELOCITY_Z_OVERTIME_RAND_OFFSET, _temp_v3, VelocityOvertimeModule;
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
    }, function (_coreIndexJs) {
      pseudoRandom = _coreIndexJs.pseudoRandom;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_enumJs) {
      Space = _enumJs.Space;
      ModuleRandSeed = _enumJs.ModuleRandSeed;
    }, function (_particleJs) {
      ParticleModuleBase = _particleJs.ParticleModuleBase;
      PARTICLE_MODULE_NAME = _particleJs.PARTICLE_MODULE_NAME;
    }, function (_particleGeneralFunctionJs) {
      calculateTransform = _particleGeneralFunctionJs.calculateTransform;
      isCurveTwoValues = _particleGeneralFunctionJs.isCurveTwoValues;
    }, function (_curveRangeJs) {
      CurveRange = _curveRangeJs.default;
    }],
    execute: function () {
      VELOCITY_X_OVERTIME_RAND_OFFSET = ModuleRandSeed.VELOCITY_X;
      VELOCITY_Y_OVERTIME_RAND_OFFSET = ModuleRandSeed.VELOCITY_Y;
      VELOCITY_Z_OVERTIME_RAND_OFFSET = ModuleRandSeed.VELOCITY_Z;
      _temp_v3 = new Vec3();
      /**
       * @en
       * This module will modify particle velocity over life time.
       * Open the separateAxes option you can change the velocity on XYZ axis.
       * Velocity on every axis is curve so you can modify these curves to see how it animate.
       * @zh
       * 本模块用于在粒子生命周期内改变粒子的速度。
       * 打开 separateAxes 就能够修改粒子在三个轴方向的速度大小。
       * 每个轴上的速度大小都是可以用曲线来进行编辑，修改曲线就能够看到粒子速度变化的效果了。
       */
      _export("default", VelocityOvertimeModule = (_dec = ccclass('cc.VelocityOvertimeModule'), _dec2 = displayOrder(0), _dec3 = type(CurveRange), _dec4 = displayOrder(2), _dec5 = tooltip('i18n:velocityOvertimeModule.x'), _dec6 = type(CurveRange), _dec7 = displayOrder(3), _dec8 = tooltip('i18n:velocityOvertimeModule.y'), _dec9 = type(CurveRange), _dec10 = displayOrder(4), _dec11 = tooltip('i18n:velocityOvertimeModule.z'), _dec12 = type(CurveRange), _dec13 = displayOrder(5), _dec14 = tooltip('i18n:velocityOvertimeModule.speedModifier'), _dec15 = type(Space), _dec16 = displayOrder(1), _dec17 = tooltip('i18n:velocityOvertimeModule.space'), _dec(_class = (_class2 = /*#__PURE__*/function (_ParticleModuleBase) {
        _inheritsLoose(VelocityOvertimeModule, _ParticleModuleBase);
        function VelocityOvertimeModule() {
          var _this;
          _this = _ParticleModuleBase.call(this) || this;
          _this._enable = _initializer && _initializer();
          /**
           * @en Velocity on X axis.
           * @zh X 轴方向上的速度分量。
           */
          _this.x = _initializer2 && _initializer2();
          /**
           * @en Velocity on Y axis.
           * @zh Y 轴方向上的速度分量。
           */
          _this.y = _initializer3 && _initializer3();
          /**
           * @en Velocity on Z axis.
           * @zh Z 轴方向上的速度分量。
           */
          _this.z = _initializer4 && _initializer4();
          /**
           * @en Speed modifier (available for CPU particle).
           * @zh 速度修正系数（只支持 CPU 粒子）。
           */
          _this.speedModifier = _initializer5 && _initializer5();
          /**
           * @en Velocity [[Space]] used to calculate particle velocity.
           * @zh 速度计算时采用的坐标系[[Space]]。
           */
          _this.space = _initializer6 && _initializer6();
          _this.rotation = void 0;
          _this.needTransform = void 0;
          _this.name = PARTICLE_MODULE_NAME.VELOCITY;
          _this.rotation = new Quat();
          _this.speedModifier.constant = 1;
          _this.needTransform = false;
          _this.needUpdate = true;
          return _this;
        }

        /**
         * @en Update velocity overtime module calculate transform.
         * @zh 更新模块，计算坐标变换。
         * @param space @en Velocity overtime module update space @zh 模块更新空间
         * @param worldTransform @en Particle system world transform @zh 粒子系统的世界变换矩阵
         * @internal
         */
        var _proto = VelocityOvertimeModule.prototype;
        _proto.update = function update(space, worldTransform) {
          this.needTransform = calculateTransform(space, this.space, worldTransform, this.rotation);
        }

        /**
         * @en Apply velocity animation to particle.
         * @zh 作用速度变换到粒子上。
         * @param p @en Particle to animate @zh 模块需要更新的粒子
         * @param dt @en Update interval time @zh 粒子系统更新的间隔时间
         * @internal
         */;
        _proto.animate = function animate(p, dt) {
          var normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
          var randX = isCurveTwoValues(this.x) ? pseudoRandom(p.randomSeed ^ VELOCITY_X_OVERTIME_RAND_OFFSET) : 0;
          var randY = isCurveTwoValues(this.y) ? pseudoRandom(p.randomSeed ^ VELOCITY_Y_OVERTIME_RAND_OFFSET) : 0;
          var randZ = isCurveTwoValues(this.z) ? pseudoRandom(p.randomSeed ^ VELOCITY_Z_OVERTIME_RAND_OFFSET) : 0;
          var randSpeed = isCurveTwoValues(this.speedModifier) ? pseudoRandom(p.randomSeed + VELOCITY_X_OVERTIME_RAND_OFFSET) : 0;
          var vel = Vec3.set(_temp_v3, this.x.evaluate(normalizedTime, randX), this.y.evaluate(normalizedTime, randY), this.z.evaluate(normalizedTime, randZ));
          if (this.needTransform) {
            Vec3.transformQuat(vel, vel, this.rotation);
          }
          Vec3.add(p.animatedVelocity, p.animatedVelocity, vel);
          Vec3.add(p.ultimateVelocity, p.velocity, p.animatedVelocity);
          Vec3.multiplyScalar(p.ultimateVelocity, p.ultimateVelocity, this.speedModifier.evaluate(1 - p.remainingLifetime / p.startLifetime, randSpeed));
        };
        _createClass(VelocityOvertimeModule, [{
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
        return VelocityOvertimeModule;
      }(ParticleModuleBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "x", [_dec3, serializable, _dec4, _dec5], function () {
        return new CurveRange();
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "y", [_dec6, serializable, _dec7, _dec8], function () {
        return new CurveRange();
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "z", [_dec9, serializable, _dec10, _dec11], function () {
        return new CurveRange();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "speedModifier", [_dec12, serializable, _dec13, _dec14], function () {
        return new CurveRange();
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "space", [_dec15, serializable, _dec16, _dec17], function () {
        return Space.Local;
      })), _class2)) || _class));
    }
  };
});