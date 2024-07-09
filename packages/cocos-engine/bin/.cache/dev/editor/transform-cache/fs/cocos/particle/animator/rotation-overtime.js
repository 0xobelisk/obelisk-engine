System.register("q-bundled:///fs/cocos/particle/animator/rotation-overtime.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../particle.js", "./curve-range.js", "../enum.js", "../particle-general-function.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, radian, serializable, visible, Mat4, pseudoRandom, Quat, Vec3, Particle, ParticleModuleBase, PARTICLE_MODULE_NAME, CurveRange, ModuleRandSeed, RenderMode, isCurveTwoValues, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, ROTATION_OVERTIME_RAND_OFFSET, RotationOvertimeModule;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      radian = _coreDataDecoratorsIndexJs.radian;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      pseudoRandom = _coreIndexJs.pseudoRandom;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_particleJs) {
      Particle = _particleJs.Particle;
      ParticleModuleBase = _particleJs.ParticleModuleBase;
      PARTICLE_MODULE_NAME = _particleJs.PARTICLE_MODULE_NAME;
    }, function (_curveRangeJs) {
      CurveRange = _curveRangeJs.default;
    }, function (_enumJs) {
      ModuleRandSeed = _enumJs.ModuleRandSeed;
      RenderMode = _enumJs.RenderMode;
    }, function (_particleGeneralFunctionJs) {
      isCurveTwoValues = _particleGeneralFunctionJs.isCurveTwoValues;
    }],
    execute: function () {
      ROTATION_OVERTIME_RAND_OFFSET = ModuleRandSeed.ROTATION;
      /**
       * @en
       * This module will apply rotation to particle over life time.
       * Open the separateAxes option you can change the rotation on XYZ axis
       * Rotation on every axis is curve so you can modify these curves to see how it animate.
       * @zh
       * 本模块用于在粒子生命周期内对粒子施加旋转角速度。
       * 打开 separateAxes 就能够修改粒子在三个轴方向的旋转角速度大小。
       * 每个轴上的旋转角速度都是可以用曲线来进行编辑，修改曲线就能够看到粒子受力变化的效果了。
       */
      _export("default", RotationOvertimeModule = (_dec = ccclass('cc.RotationOvertimeModule'), _dec2 = displayOrder(0), _dec3 = displayOrder(1), _dec4 = tooltip('i18n:rotationOvertimeModule.separateAxes'), _dec5 = type(CurveRange), _dec6 = displayOrder(2), _dec7 = tooltip('i18n:rotationOvertimeModule.x'), _dec8 = visible(function () {
        return this.separateAxes;
      }), _dec9 = type(CurveRange), _dec10 = displayOrder(3), _dec11 = tooltip('i18n:rotationOvertimeModule.y'), _dec12 = visible(function () {
        return this.separateAxes;
      }), _dec13 = type(CurveRange), _dec14 = displayOrder(4), _dec15 = tooltip('i18n:rotationOvertimeModule.z'), _dec(_class = (_class2 = class RotationOvertimeModule extends ParticleModuleBase {
        constructor(...args) {
          super(...args);
          this._enable = _initializer && _initializer();
          this._separateAxes = _initializer2 && _initializer2();
          /**
           * @en Angle around X axis.
           * @zh 绕 X 轴设定旋转。
           */
          this.x = _initializer3 && _initializer3();
          /**
           * @en Angle around Y axis.
           * @zh 绕 Y 轴设定旋转。
           */
          this.y = _initializer4 && _initializer4();
          /**
           * @en Angle around Z axis.
           * @zh 绕 Z 轴设定旋转。
           */
          this.z = _initializer5 && _initializer5();
          this.name = PARTICLE_MODULE_NAME.ROTATION;
          this._startMat = new Mat4();
          this._matRot = new Mat4();
          this._quatRot = new Quat();
          this._otherEuler = new Vec3();
        }
        /**
         * @en Enable this module or not.
         * @zh 是否启用。
         */
        get enable() {
          return this._enable;
        }
        set enable(val) {
          if (this._enable === val) return;
          this._enable = val;
          if (!this.target) return;
          this.target.enableModule(this.name, val, this);
        }
        /**
         * @en Rotation around separate axis.
         * @zh 是否三个轴分开设定旋转。
         */
        get separateAxes() {
          return this._separateAxes;
        }
        set separateAxes(val) {
          this._separateAxes = val;
        }
        _processRotation(p, r2d) {
          // Same as the particle-vs-legacy.chunk glsl statemants
          const renderMode = p.particleSystem.processor.getInfo().renderMode;
          if (renderMode !== RenderMode.Mesh) {
            if (renderMode === RenderMode.StrecthedBillboard) {
              this._quatRot.set(0, 0, 0, 1);
            }
          }
          Quat.normalize(this._quatRot, this._quatRot);
          if (this._quatRot.w < 0.0) {
            // Use vec3 to save quat so we need identify negative w
            this._quatRot.x += Particle.INDENTIFY_NEG_QUAT; // Indentify negative w & revert the quat in shader
          }
        }

        /**
         * @en Apply rotation to particle.
         * @zh 作用旋转到粒子上。
         * @param p @en Particle to animate @zh 模块需要更新的粒子
         * @param dt @en Update interval time @zh 粒子系统更新的间隔时间
         * @internal
         */
        animate(p, dt) {
          const normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
          const randZ = isCurveTwoValues(this.z) ? pseudoRandom(p.randomSeed + ROTATION_OVERTIME_RAND_OFFSET) : 0;
          const renderMode = p.particleSystem.processor.getInfo().renderMode;
          if (!this._separateAxes || renderMode === RenderMode.VerticalBillboard || renderMode === RenderMode.HorizontalBillboard) {
            Quat.fromEuler(p.deltaQuat, 0, 0, this.z.evaluate(normalizedTime, randZ) * dt * Particle.R2D);
          } else {
            const randX = isCurveTwoValues(this.x) ? pseudoRandom(p.randomSeed + ROTATION_OVERTIME_RAND_OFFSET) : 0;
            const randY = isCurveTwoValues(this.y) ? pseudoRandom(p.randomSeed + ROTATION_OVERTIME_RAND_OFFSET) : 0;
            Quat.fromEuler(p.deltaQuat, this.x.evaluate(normalizedTime, randX) * dt * Particle.R2D, this.y.evaluate(normalizedTime, randY) * dt * Particle.R2D, this.z.evaluate(normalizedTime, randZ) * dt * Particle.R2D);
          }

          // Rotation-overtime combine with start rotation, after that we get quat from the mat
          p.deltaMat = Mat4.fromQuat(p.deltaMat, p.deltaQuat);
          p.localMat = p.localMat.multiply(p.deltaMat); // accumulate rotation

          if (!p.startRotated) {
            if (renderMode !== RenderMode.Mesh) {
              if (renderMode === RenderMode.StrecthedBillboard) {
                p.startEuler.set(0, 0, 0);
              } else if (renderMode !== RenderMode.Billboard) {
                p.startEuler.set(0, 0, p.startEuler.z);
              }
            }
            Quat.fromEuler(p.startRotation, p.startEuler.x * Particle.R2D, p.startEuler.y * Particle.R2D, p.startEuler.z * Particle.R2D);
            p.startRotated = true;
          }
          this._startMat = Mat4.fromQuat(this._startMat, p.startRotation);
          this._matRot = this._startMat.multiply(p.localMat);
          Mat4.getRotation(this._quatRot, this._matRot);
          this._processRotation(p, Particle.R2D);
          p.rotation.set(this._quatRot.x, this._quatRot.y, this._quatRot.z);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_separateAxes", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "separateAxes", [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "separateAxes"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "x", [_dec5, serializable, radian, _dec6, _dec7, _dec8], function () {
        return new CurveRange();
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "y", [_dec9, serializable, radian, _dec10, _dec11, _dec12], function () {
        return new CurveRange();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "z", [_dec13, serializable, radian, _dec14, _dec15], function () {
        return new CurveRange();
      })), _class2)) || _class));
    }
  };
});