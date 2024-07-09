System.register("q-bundled:///fs/cocos/particle/animator/force-overtime.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../enum.js", "../particle-general-function.js", "./curve-range.js", "../particle.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, serializable, pseudoRandom, Quat, Vec3, Space, ModuleRandSeed, calculateTransform, isCurveTwoValues, CurveRange, ParticleModuleBase, PARTICLE_MODULE_NAME, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, FORCE_OVERTIME_RAND_OFFSET, _temp_v3, ForceOvertimeModule;
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
    }, function (_particleGeneralFunctionJs) {
      calculateTransform = _particleGeneralFunctionJs.calculateTransform;
      isCurveTwoValues = _particleGeneralFunctionJs.isCurveTwoValues;
    }, function (_curveRangeJs) {
      CurveRange = _curveRangeJs.default;
    }, function (_particleJs) {
      ParticleModuleBase = _particleJs.ParticleModuleBase;
      PARTICLE_MODULE_NAME = _particleJs.PARTICLE_MODULE_NAME;
    }],
    execute: function () {
      FORCE_OVERTIME_RAND_OFFSET = ModuleRandSeed.FORCE;
      _temp_v3 = new Vec3();
      /**
       * @en
       * This module will apply force to particle over life time.
       * Force on every axis is curve so you can modify these curves to see how it animate.
       * @zh
       * 本模块用于在粒子生命周期内对粒子施加外力。
       * 每个轴上的受力大小都是可以用曲线来进行编辑，修改曲线就能够看到粒子受力变化的效果了。
       */
      _export("default", ForceOvertimeModule = (_dec = ccclass('cc.ForceOvertimeModule'), _dec2 = displayOrder(0), _dec3 = type(CurveRange), _dec4 = displayOrder(2), _dec5 = tooltip('i18n:forceOvertimeModule.x'), _dec6 = type(CurveRange), _dec7 = displayOrder(3), _dec8 = tooltip('i18n:forceOvertimeModule.y'), _dec9 = type(CurveRange), _dec10 = displayOrder(4), _dec11 = tooltip('i18n:forceOvertimeModule.z'), _dec12 = type(Space), _dec13 = displayOrder(1), _dec14 = tooltip('i18n:forceOvertimeModule.space'), _dec(_class = (_class2 = /*#__PURE__*/function (_ParticleModuleBase) {
        _inheritsLoose(ForceOvertimeModule, _ParticleModuleBase);
        function ForceOvertimeModule() {
          var _this;
          _this = _ParticleModuleBase.call(this) || this;
          _this._enable = _initializer && _initializer();
          /**
           * @en Force on the X axis.
           * @zh X 轴方向上的加速度分量。
           */
          _this.x = _initializer2 && _initializer2();
          /**
           * @en Force on the Y axis.
           * @zh Y 轴方向上的加速度分量。
           */
          _this.y = _initializer3 && _initializer3();
          /**
           * @en Force on the Z axis.
           * @zh Z 轴方向上的加速度分量。
           */
          _this.z = _initializer4 && _initializer4();
          /**
           * @en Force calculation coordinate. See [[Space]].
           * @zh 加速度计算时采用的坐标系 [[Space]]。
           */
          _this.space = _initializer5 && _initializer5();
          // TODO:currently not supported
          _this.randomized = false;
          _this.rotation = void 0;
          _this.needTransform = void 0;
          _this.name = PARTICLE_MODULE_NAME.FORCE;
          _this.rotation = new Quat();
          _this.needTransform = false;
          _this.needUpdate = true;
          return _this;
        }

        /**
         * @en Update force module calculate transform.
         * @zh 更新模块，计算坐标变换。
         * @param space @en Force module update space. @zh 模块更新空间。
         * @param worldTransform @en Particle system world transform. @zh 粒子系统的世界变换矩阵。
         * @internal
         */
        var _proto = ForceOvertimeModule.prototype;
        _proto.update = function update(space, worldTransform) {
          this.needTransform = calculateTransform(space, this.space, worldTransform, this.rotation);
        }

        /**
         * @en Apply force to particle.
         * @zh 作用力到粒子上。
         * @param p @en Particle to animate. @zh 模块需要更新的粒子。
         * @param dt @en Update interval time. @zh 粒子系统更新的间隔时间。
         * @internal
         */;
        _proto.animate = function animate(p, dt) {
          var normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
          var randX = isCurveTwoValues(this.x) ? pseudoRandom(p.randomSeed + FORCE_OVERTIME_RAND_OFFSET) : 0;
          var randY = isCurveTwoValues(this.y) ? pseudoRandom(p.randomSeed + FORCE_OVERTIME_RAND_OFFSET) : 0;
          var randZ = isCurveTwoValues(this.z) ? pseudoRandom(p.randomSeed + FORCE_OVERTIME_RAND_OFFSET) : 0;
          var force = Vec3.set(_temp_v3, this.x.evaluate(normalizedTime, randX), this.y.evaluate(normalizedTime, randY), this.z.evaluate(normalizedTime, randZ));
          if (this.needTransform) {
            Vec3.transformQuat(force, force, this.rotation);
          }
          Vec3.scaleAndAdd(p.velocity, p.velocity, force, dt);
          Vec3.copy(p.ultimateVelocity, p.velocity);
        };
        _createClass(ForceOvertimeModule, [{
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
        return ForceOvertimeModule;
      }(ParticleModuleBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "x", [_dec3, serializable, _dec4, _dec5], function () {
        return new CurveRange();
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "y", [_dec6, serializable, _dec7, _dec8], function () {
        return new CurveRange();
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "z", [_dec9, serializable, _dec10, _dec11], function () {
        return new CurveRange();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "space", [_dec12, serializable, _dec13, _dec14], function () {
        return Space.Local;
      })), _class2)) || _class));
    }
  };
});