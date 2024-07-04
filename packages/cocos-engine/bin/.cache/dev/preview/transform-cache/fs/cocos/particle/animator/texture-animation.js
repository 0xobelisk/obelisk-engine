System.register("q-bundled:///fs/cocos/particle/animator/texture-animation.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../particle.js", "./curve-range.js", "../enum.js", "../particle-general-function.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, formerlySerializedAs, serializable, range, lerp, pseudoRandom, repeat, Enum, random, error, ParticleModuleBase, PARTICLE_MODULE_NAME, CurveRange, ModuleRandSeed, isCurveTwoValues, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, TEXTURE_ANIMATION_RAND_OFFSET, Mode, Animation, TextureAnimationModule;
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
      formerlySerializedAs = _coreDataDecoratorsIndexJs.formerlySerializedAs;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      range = _coreDataDecoratorsIndexJs.range;
    }, function (_coreIndexJs) {
      lerp = _coreIndexJs.lerp;
      pseudoRandom = _coreIndexJs.pseudoRandom;
      repeat = _coreIndexJs.repeat;
      Enum = _coreIndexJs.Enum;
      random = _coreIndexJs.random;
      error = _coreIndexJs.error;
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
      TEXTURE_ANIMATION_RAND_OFFSET = ModuleRandSeed.TEXTURE;
      /**
       * @en Texture animation type.
       * @zh 粒子贴图动画类型。
       * @enum textureAnimationModule.Mode
       */
      Mode = Enum({
        /**
         * 网格类型。
         */
        Grid: 0

        /**
         * 精灵类型（暂未支持）。
         */
        // Sprites: 1,
      });
      /**
       * @en Mode to play texture animation.
       * @zh 贴图动画的播放方式。
       * @enum textureAnimationModule.Animation
       */
      Animation = Enum({
        /**
         * @en Play whole sheet of texture.
         * @zh 播放贴图中的所有帧。
         */
        WholeSheet: 0,
        /**
         * @en Play just one row of texture.
         * @zh 播放贴图中的其中一行动画。
         */
        SingleRow: 1
      });
      /**
       * @en
       * Use this module to play frame animation of the particle texture.
       * @zh
       * 这个模块用于播放粒子纹理带的纹理帧动画。
       */
      _export("default", TextureAnimationModule = (_dec = ccclass('cc.TextureAnimationModule'), _dec2 = formerlySerializedAs('numTilesX'), _dec3 = formerlySerializedAs('numTilesY'), _dec4 = displayOrder(0), _dec5 = type(Mode), _dec6 = type(Mode), _dec7 = displayOrder(1), _dec8 = tooltip('i18n:textureAnimationModule.mode'), _dec9 = displayOrder(2), _dec10 = tooltip('i18n:textureAnimationModule.numTilesX'), _dec11 = displayOrder(3), _dec12 = tooltip('i18n:textureAnimationModule.numTilesY'), _dec13 = type(Animation), _dec14 = displayOrder(4), _dec15 = tooltip('i18n:textureAnimationModule.animation'), _dec16 = type(CurveRange), _dec17 = range([0, Number.POSITIVE_INFINITY]), _dec18 = displayOrder(7), _dec19 = tooltip('i18n:textureAnimationModule.frameOverTime'), _dec20 = type(CurveRange), _dec21 = range([0, Number.POSITIVE_INFINITY]), _dec22 = displayOrder(8), _dec23 = tooltip('i18n:textureAnimationModule.startFrame'), _dec24 = displayOrder(9), _dec25 = tooltip('i18n:textureAnimationModule.cycleCount'), _dec26 = displayOrder(5), _dec27 = tooltip('i18n:textureAnimationModule.randomRow'), _dec28 = displayOrder(6), _dec29 = tooltip('i18n:textureAnimationModule.rowIndex'), _dec(_class = (_class2 = /*#__PURE__*/function (_ParticleModuleBase) {
        _inheritsLoose(TextureAnimationModule, _ParticleModuleBase);
        function TextureAnimationModule() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ParticleModuleBase.call.apply(_ParticleModuleBase, [this].concat(args)) || this;
          _this._enable = _initializer && _initializer();
          _this._numTilesX = _initializer2 && _initializer2();
          _this._numTilesY = _initializer3 && _initializer3();
          _this._mode = _initializer4 && _initializer4();
          /**
           * @en Texture animation type. See [[Animation]].
           * @zh 动画播放方式 [[Animation]]。
           */
          _this.animation = _initializer5 && _initializer5();
          /**
           * @en Curve to control texture animation speed.
           * @zh 一个周期内动画播放的帧与时间变化曲线。
           */
          _this.frameOverTime = _initializer6 && _initializer6();
          /**
           * @en Texture animation frame start to play.
           * @zh 从第几帧开始播放，时间为整个粒子系统的生命周期。
           */
          _this.startFrame = _initializer7 && _initializer7();
          /**
           * @en Animation cycle count per particle life.
           * @zh 一个生命周期内播放循环的次数。
           */
          _this.cycleCount = _initializer8 && _initializer8();
          _this._flipU = _initializer9 && _initializer9();
          _this._flipV = _initializer10 && _initializer10();
          _this._uvChannelMask = _initializer11 && _initializer11();
          /**
           * @en Get random row from texture to generate animation.<br>
           * This option is available when [[Animation]] type is SingleRow.
           * @zh 随机从动画贴图中选择一行以生成动画。<br>
           * 此选项仅在动画播放方式为 SingleRow 时生效。
           */
          _this.randomRow = _initializer12 && _initializer12();
          /**
           * @en Generate animation from specific row in texture.<br>
           * This option is available when [[Animation]] type is SingleRow and randomRow option is disabled.
           * @zh 从动画贴图中选择特定行以生成动画。<br>
           * 此选项仅在动画播放方式为 SingleRow 时且禁用 randomRow 时可用。
           */
          _this.rowIndex = _initializer13 && _initializer13();
          _this.name = PARTICLE_MODULE_NAME.TEXTURE;
          return _this;
        }
        var _proto = TextureAnimationModule.prototype;
        /**
         * @en Init start row to particle.
         * @zh 给粒子创建初始行属性。
         * @param p @en Particle to set start row. @zh 设置初始行属性的粒子。
         * @internal
         */
        _proto.init = function init(p) {
          p.startRow = Math.floor(random() * this.numTilesY);
        }

        /**
         * @en Apply texture animation to particle.
         * @zh 应用贴图动画到粒子。
         * @param p @en Particle to animate. @zh 模块需要更新的粒子。
         * @param dt @en Update interval time. @zh 粒子系统更新的间隔时间。
         * @internal
         */;
        _proto.animate = function animate(p, dt) {
          var normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
          var randStart = isCurveTwoValues(this.startFrame) ? pseudoRandom(p.randomSeed + TEXTURE_ANIMATION_RAND_OFFSET) : 0;
          var randFrame = isCurveTwoValues(this.frameOverTime) ? pseudoRandom(p.randomSeed + TEXTURE_ANIMATION_RAND_OFFSET) : 0;
          var startFrame = this.startFrame.evaluate(normalizedTime, randStart) / (this.numTilesX * this.numTilesY);
          if (this.animation === Animation.WholeSheet) {
            p.frameIndex = repeat(this.cycleCount * (this.frameOverTime.evaluate(normalizedTime, randFrame) + startFrame), 1);
          } else if (this.animation === Animation.SingleRow) {
            var rowLength = 1 / this.numTilesY;
            if (this.randomRow) {
              var f = repeat(this.cycleCount * (this.frameOverTime.evaluate(normalizedTime, randFrame) + startFrame), 1);
              var from = p.startRow * rowLength;
              var to = from + rowLength;
              p.frameIndex = lerp(from, to, f);
            } else {
              var _from = this.rowIndex * rowLength;
              var _to = _from + rowLength;
              p.frameIndex = lerp(_from, _to, repeat(this.cycleCount * (this.frameOverTime.evaluate(normalizedTime, randFrame) + startFrame), 1));
            }
          }
        };
        _createClass(TextureAnimationModule, [{
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
            this.target.updateMaterialParams();
            this.target.enableModule(this.name, val, this);
          }
        }, {
          key: "mode",
          get:
          /**
           * @en Set texture animation [[Mode]] (only support Grid mode).
           * @zh 设定粒子贴图动画的类型（暂只支持 Grid 模式）[[Mode]]。
           */
          function get() {
            return this._mode;
          },
          set: function set(val) {
            if (val !== Mode.Grid) {
              error('particle texture animation\'s sprites is not supported!');
            }
          }

          /**
           * @en Tile count on X axis.
           * @zh X 方向动画帧数。
           */
        }, {
          key: "numTilesX",
          get: function get() {
            return this._numTilesX;
          },
          set: function set(val) {
            if (this._numTilesX !== val) {
              this._numTilesX = val;
              this.target.updateMaterialParams();
            }
          }

          /**
           * @en Tile count on Y axis.
           * @zh Y 方向动画帧数。
           */
        }, {
          key: "numTilesY",
          get: function get() {
            return this._numTilesY;
          },
          set: function set(val) {
            if (this._numTilesY !== val) {
              this._numTilesY = val;
              this.target.updateMaterialParams();
            }
          }
        }, {
          key: "flipU",
          get:
          /**
           * @ignore
           */
          function get() {
            return this._flipU;
          },
          set: function set(val) {
            error('particle texture animation\'s flipU is not supported!');
          }
        }, {
          key: "flipV",
          get: function get() {
            return this._flipV;
          },
          set: function set(val) {
            error('particle texture animation\'s flipV is not supported!');
          }
        }, {
          key: "uvChannelMask",
          get: function get() {
            return this._uvChannelMask;
          },
          set: function set(val) {
            error('particle texture animation\'s uvChannelMask is not supported!');
          }
        }]);
        return TextureAnimationModule;
      }(ParticleModuleBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_numTilesX", [_dec2], function () {
        return 0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_numTilesY", [_dec3], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_mode", [_dec5], function () {
        return Mode.Grid;
      }), _applyDecoratedDescriptor(_class2.prototype, "mode", [_dec6, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "mode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "numTilesX", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "numTilesX"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "numTilesY", [_dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "numTilesY"), _class2.prototype), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "animation", [_dec13, serializable, _dec14, _dec15], function () {
        return Animation.WholeSheet;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "frameOverTime", [_dec16, serializable, _dec17, _dec18, _dec19], function () {
        return new CurveRange();
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "startFrame", [_dec20, serializable, _dec21, _dec22, _dec23], function () {
        return new CurveRange();
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "cycleCount", [serializable, _dec24, _dec25], function () {
        return 0;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_flipU", [serializable], function () {
        return 0;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_flipV", [serializable], function () {
        return 0;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_uvChannelMask", [serializable], function () {
        return -1;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "randomRow", [serializable, _dec26, _dec27], function () {
        return false;
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "rowIndex", [serializable, _dec28, _dec29], function () {
        return 0;
      })), _class2)) || _class));
    }
  };
});