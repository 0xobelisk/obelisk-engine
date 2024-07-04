System.register("q-bundled:///fs/cocos/particle/animator/noise-module.js", ["../../core/index.js", "../noise.js", "../particle.js"], function (_export, _context) {
  "use strict";

  var CCFloat, CCInteger, _decorator, Vec3, random, ParticleNoise, PARTICLE_MODULE_NAME, ParticleModuleBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, ccclass, serializable, displayOrder, type, range, slide, visible, NoiseModule;
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
    setters: [function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
      CCInteger = _coreIndexJs.CCInteger;
      _decorator = _coreIndexJs._decorator;
      Vec3 = _coreIndexJs.Vec3;
      random = _coreIndexJs.random;
    }, function (_noiseJs) {
      ParticleNoise = _noiseJs.ParticleNoise;
    }, function (_particleJs) {
      PARTICLE_MODULE_NAME = _particleJs.PARTICLE_MODULE_NAME;
      ParticleModuleBase = _particleJs.ParticleModuleBase;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      displayOrder = _decorator.displayOrder;
      type = _decorator.type;
      range = _decorator.range;
      slide = _decorator.slide;
      visible = _decorator.visible;
      /**
       * @en
       * Adding noise to your particles is a simple and effective way to create interesting patterns and effects.
       * @zh
       * 为粒子添加噪声是创建有趣方案和效果的简单有效方法。
       */
      _export("NoiseModule", NoiseModule = (_dec = ccclass('cc.NoiseModule'), _dec2 = displayOrder(0), _dec3 = type(CCFloat), _dec4 = range([0, 100]), _dec5 = displayOrder(16), _dec6 = type(CCFloat), _dec7 = range([0, 100]), _dec8 = displayOrder(16), _dec9 = type(CCFloat), _dec10 = range([0, 100]), _dec11 = displayOrder(16), _dec12 = type(CCFloat), _dec13 = range([0, 100]), _dec14 = displayOrder(16), _dec15 = type(CCFloat), _dec16 = range([0, 100]), _dec17 = displayOrder(16), _dec18 = type(CCFloat), _dec19 = range([0, 100]), _dec20 = displayOrder(16), _dec21 = type(CCFloat), _dec22 = range([0, 100, 0.1]), _dec23 = displayOrder(16), _dec24 = visible(false), _dec25 = type(CCFloat), _dec26 = range([0, 1, 0.1]), _dec27 = displayOrder(16), _dec28 = visible(false), _dec29 = type(CCFloat), _dec30 = range([0, 1, 0.1]), _dec31 = displayOrder(16), _dec32 = visible(false), _dec33 = type(CCFloat), _dec34 = range([0, 1, 0.1]), _dec35 = displayOrder(16), _dec36 = type(CCInteger), _dec37 = range([1, 4, 1]), _dec38 = displayOrder(16), _dec39 = visible(function () {
        return this._octaves > 1;
      }), _dec40 = type(CCFloat), _dec41 = range([0, 1, 0.1]), _dec42 = displayOrder(16), _dec43 = visible(function () {
        return this._octaves > 1;
      }), _dec44 = type(CCFloat), _dec45 = range([1, 4, 0.1]), _dec46 = displayOrder(16), _dec(_class = (_class2 = /*#__PURE__*/function (_ParticleModuleBase) {
        _inheritsLoose(NoiseModule, _ParticleModuleBase);
        function NoiseModule() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ParticleModuleBase.call.apply(_ParticleModuleBase, [this].concat(args)) || this;
          _this._enable = _initializer && _initializer();
          _this._strengthX = _initializer2 && _initializer2();
          _this._strengthY = _initializer3 && _initializer3();
          _this._strengthZ = _initializer4 && _initializer4();
          _this._noiseSpeedX = _initializer5 && _initializer5();
          _this._noiseSpeedY = _initializer6 && _initializer6();
          _this._noiseSpeedZ = _initializer7 && _initializer7();
          _this._noiseFrequency = _initializer8 && _initializer8();
          _this._remapX = _initializer9 && _initializer9();
          _this._remapY = _initializer10 && _initializer10();
          _this._remapZ = _initializer11 && _initializer11();
          _this._octaves = _initializer12 && _initializer12();
          _this._octaveMultiplier = _initializer13 && _initializer13();
          _this._octaveScale = _initializer14 && _initializer14();
          _this.name = PARTICLE_MODULE_NAME.NOISE;
          _this.noise = new ParticleNoise();
          _this.samplePosition = new Vec3();
          return _this;
        }
        var _proto = NoiseModule.prototype;
        /**
         * @en Apply noise effect to particle.
         * @zh 作用噪声效果到粒子上。
         * @param particle @en Particle to animate @zh 模块需要更新的粒子
         * @param dt @en Update interval time @zh 粒子系统更新的间隔时间
         * @internal
         */
        _proto.animate = function animate(particle, dt) {
          this.noise.setTime(particle.particleSystem.time);
          this.noise.setSpeed(this.noiseSpeedX, this.noiseSpeedY, this.noiseSpeedZ);
          this.noise.setFrequency(this.noiseFrequency);
          this.noise.setAbs(this.remapX, this.remapY, this.remapZ);
          this.noise.setAmplititude(this.strengthX, this.strengthY, this.strengthZ);
          this.noise.setOctaves(this.octaves, this.octaveMultiplier, this.octaveScale);
          this.samplePosition.set(particle.position);
          this.samplePosition.add3f(random() * 1.0, random() * 1.0, random() * 1.0);
          this.noise.setSamplePoint(this.samplePosition);
          this.noise.getNoiseParticle();
          var noisePosition = this.noise.getResult();
          noisePosition.multiply3f(random(), random(), random());
          Vec3.add(particle.position, particle.position, noisePosition.multiplyScalar(dt));
        }

        /**
         * @en Gets the preview of noise texture.
         * @zh 获取噪声图预览。
         * @param out @en Noise texture pixels array @zh 噪声图像素数组
         * @param ps @en Particle system @zh 噪声图作用的粒子系统
         * @param width @en Texture width @zh 噪声图宽度
         * @param height @en Texture height @zh 噪声图高度
         */;
        _proto.getNoisePreview = function getNoisePreview(out, ps, width, height) {
          this.noise.setTime(ps.time);
          this.noise.setSpeed(this.noiseSpeedX, this.noiseSpeedY, this.noiseSpeedZ);
          this.noise.setFrequency(this.noiseFrequency);
          this.noise.setAbs(this.remapX, this.remapY, this.remapZ);
          this.noise.setAmplititude(this.strengthX, this.strengthY, this.strengthZ);
          this.noise.setOctaves(this.octaves, this.octaveMultiplier, this.octaveScale);
          this.noise.getNoiseParticle();
          this.noise.getPreview(out, width, height);
        };
        _createClass(NoiseModule, [{
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

          /**
           * @en Strength on X axis.
           * @zh X 轴上的强度大小。
           */
        }, {
          key: "strengthX",
          get: function get() {
            return this._strengthX;
          },
          set: function set(value) {
            this._strengthX = value;
          }
        }, {
          key: "strengthY",
          get:
          /**
           * @en Strength on Y axis.
           * @zh Y 轴上的强度大小。
           */
          function get() {
            return this._strengthY;
          },
          set: function set(value) {
            this._strengthY = value;
          }
        }, {
          key: "strengthZ",
          get:
          /**
           * @en Strength on Z axis.
           * @zh Z 轴上的强度大小。
           */
          function get() {
            return this._strengthZ;
          },
          set: function set(value) {
            this._strengthZ = value;
          }
        }, {
          key: "noiseSpeedX",
          get:
          /**
           * @en Noise texture roll speed on X axis.
           * @zh X 轴上的噪声图滚动速度。
           */
          function get() {
            return this._noiseSpeedX;
          },
          set: function set(value) {
            this._noiseSpeedX = value;
          }
        }, {
          key: "noiseSpeedY",
          get:
          /**
           * @en Noise texture roll speed on Y axis.
           * @zh Y 轴上的噪声图滚动速度。
           */
          function get() {
            return this._noiseSpeedY;
          },
          set: function set(value) {
            this._noiseSpeedY = value;
          }
        }, {
          key: "noiseSpeedZ",
          get:
          /**
           * @en Noise texture roll speed on Z axis.
           * @zh Z 轴上的噪声图滚动速度。
           */
          function get() {
            return this._noiseSpeedZ;
          },
          set: function set(value) {
            this._noiseSpeedZ = value;
          }
        }, {
          key: "noiseFrequency",
          get:
          /**
           * @en Noise frequency.
           * @zh 噪声图频率。
           */
          function get() {
            return this._noiseFrequency;
          },
          set: function set(value) {
            this._noiseFrequency = value;
          }
        }, {
          key: "remapX",
          get:
          /**
           * @en Remap the final noise X axis values into a different range.
           * @zh 噪声值映射到 X 轴的不同范围。
           */
          function get() {
            return this._remapX;
          },
          set: function set(value) {
            this._remapX = value;
          }
        }, {
          key: "remapY",
          get:
          /**
           * @en Remap the final noise Y axis values into a different range.
           * @zh 噪声值映射到 Y 轴的不同范围。
           */
          function get() {
            return this._remapY;
          },
          set: function set(value) {
            this._remapY = value;
          }
        }, {
          key: "remapZ",
          get:
          /**
           * @en Remap the final noise Z axis values into a different range.
           * @zh 噪声值映射到 Z 轴的不同范围。
           */
          function get() {
            return this._remapZ;
          },
          set: function set(value) {
            this._remapZ = value;
          }
        }, {
          key: "octaves",
          get:
          /**
           * @en Specify how many layers of overlapping noise are combined to produce the final noise values.
           * @zh 指定组合多少层重叠噪声来产生最终噪声值。
           */
          function get() {
            return this._octaves;
          },
          set: function set(value) {
            this._octaves = value;
          }
        }, {
          key: "octaveMultiplier",
          get:
          /**
           * @en For each additional noise layer, reduce the strength by this proportion.
           * @zh 对于每个附加的噪声层，按此比例降低强度。
           */ // eslint-disable-next-line func-names
          function get() {
            return this._octaveMultiplier;
          },
          set: function set(value) {
            this._octaveMultiplier = value;
          }
        }, {
          key: "octaveScale",
          get:
          /**
           * @en For each additional noise layer, adjust the frequency by this multiplier.
           * @zh 对于每个附加的噪声层，按此乘数调整频率。
           */ // eslint-disable-next-line func-names
          function get() {
            return this._octaveScale;
          },
          set: function set(value) {
            this._octaveScale = value;
          }
        }]);
        return NoiseModule;
      }(ParticleModuleBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "strengthX", [_dec3, _dec4, _dec5, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "strengthX"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_strengthX", [serializable], function () {
        return 10;
      }), _applyDecoratedDescriptor(_class2.prototype, "strengthY", [_dec6, _dec7, _dec8, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "strengthY"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_strengthY", [serializable], function () {
        return 10;
      }), _applyDecoratedDescriptor(_class2.prototype, "strengthZ", [_dec9, _dec10, _dec11, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "strengthZ"), _class2.prototype), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_strengthZ", [serializable], function () {
        return 10;
      }), _applyDecoratedDescriptor(_class2.prototype, "noiseSpeedX", [_dec12, _dec13, slide, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "noiseSpeedX"), _class2.prototype), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_noiseSpeedX", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "noiseSpeedY", [_dec15, _dec16, _dec17, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "noiseSpeedY"), _class2.prototype), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_noiseSpeedY", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "noiseSpeedZ", [_dec18, _dec19, _dec20, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "noiseSpeedZ"), _class2.prototype), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_noiseSpeedZ", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "noiseFrequency", [_dec21, _dec22, _dec23, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "noiseFrequency"), _class2.prototype), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_noiseFrequency", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "remapX", [_dec24, _dec25, _dec26, _dec27, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "remapX"), _class2.prototype), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_remapX", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "remapY", [_dec28, _dec29, _dec30, _dec31, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "remapY"), _class2.prototype), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_remapY", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "remapZ", [_dec32, _dec33, _dec34, _dec35, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "remapZ"), _class2.prototype), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_remapZ", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "octaves", [_dec36, _dec37, _dec38, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "octaves"), _class2.prototype), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "_octaves", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "octaveMultiplier", [_dec39, _dec40, _dec41, _dec42], Object.getOwnPropertyDescriptor(_class2.prototype, "octaveMultiplier"), _class2.prototype), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "_octaveMultiplier", [serializable], function () {
        return 0.5;
      }), _applyDecoratedDescriptor(_class2.prototype, "octaveScale", [_dec43, _dec44, _dec45, _dec46], Object.getOwnPropertyDescriptor(_class2.prototype, "octaveScale"), _class2.prototype), _initializer14 = _applyDecoratedInitializer(_class2.prototype, "_octaveScale", [serializable], function () {
        return 2;
      })), _class2)) || _class));
    }
  };
});