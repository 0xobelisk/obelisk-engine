System.register("q-bundled:///fs/cocos/particle/particle-system.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../misc/renderer.js", "../misc/model-renderer.js", "../core/index.js", "./animator/color-overtime.js", "./animator/curve-range.js", "./animator/force-overtime.js", "./animator/gradient-range.js", "./animator/limit-velocity-overtime.js", "./animator/rotation-overtime.js", "./animator/size-overtime.js", "./animator/texture-animation.js", "./animator/velocity-overtime.js", "./burst.js", "./emitter/shape-module.js", "./enum.js", "./particle-general-function.js", "./renderer/particle-system-renderer-data.js", "./renderer/trail.js", "./particle.js", "../scene-graph/node-enum.js", "./particle-culler.js", "./animator/noise-module.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, executionOrder, menu, tooltip, displayOrder, type, range, displayName, formerlySerializedAs, override, radian, serializable, visible, EDITOR, EDITOR_NOT_IN_PREVIEW, Renderer, ModelRenderer, Mat4, pseudoRandom, Quat, randomRangeInt, Vec2, Vec3, CCBoolean, CCFloat, bits, geometry, cclegacy, warn, ColorOverLifetimeModule, CurveRange, Mode, ForceOvertimeModule, GradientRange, LimitVelocityOvertimeModule, RotationOvertimeModule, SizeOvertimeModule, TextureAnimationModule, VelocityOvertimeModule, Burst, ShapeModule, CullingMode, Space, particleEmitZAxis, ParticleSystemRenderer, TrailModule, PARTICLE_MODULE_PROPERTY, TransformBit, ParticleCuller, NoiseModule, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _dec110, _dec111, _dec112, _dec113, _dec114, _dec115, _dec116, _dec117, _dec118, _dec119, _dec120, _dec121, _dec122, _dec123, _dec124, _dec125, _dec126, _dec127, _dec128, _dec129, _dec130, _dec131, _dec132, _dec133, _dec134, _dec135, _dec136, _dec137, _dec138, _dec139, _dec140, _dec141, _dec142, _dec143, _dec144, _dec145, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _initializer30, _initializer31, _initializer32, _initializer33, _initializer34, _initializer35, _initializer36, _initializer37, _initializer38, _initializer39, _initializer40, _initializer41, _class3, _world_mat, _world_rol, superMaterials, ParticleSystem;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      range = _coreDataDecoratorsIndexJs.range;
      displayName = _coreDataDecoratorsIndexJs.displayName;
      formerlySerializedAs = _coreDataDecoratorsIndexJs.formerlySerializedAs;
      override = _coreDataDecoratorsIndexJs.override;
      radian = _coreDataDecoratorsIndexJs.radian;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_miscRendererJs) {
      Renderer = _miscRendererJs.Renderer;
    }, function (_miscModelRendererJs) {
      ModelRenderer = _miscModelRendererJs.ModelRenderer;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      pseudoRandom = _coreIndexJs.pseudoRandom;
      Quat = _coreIndexJs.Quat;
      randomRangeInt = _coreIndexJs.randomRangeInt;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      CCBoolean = _coreIndexJs.CCBoolean;
      CCFloat = _coreIndexJs.CCFloat;
      bits = _coreIndexJs.bits;
      geometry = _coreIndexJs.geometry;
      cclegacy = _coreIndexJs.cclegacy;
      warn = _coreIndexJs.warn;
    }, function (_animatorColorOvertimeJs) {
      ColorOverLifetimeModule = _animatorColorOvertimeJs.default;
    }, function (_animatorCurveRangeJs) {
      CurveRange = _animatorCurveRangeJs.default;
      Mode = _animatorCurveRangeJs.Mode;
    }, function (_animatorForceOvertimeJs) {
      ForceOvertimeModule = _animatorForceOvertimeJs.default;
    }, function (_animatorGradientRangeJs) {
      GradientRange = _animatorGradientRangeJs.default;
    }, function (_animatorLimitVelocityOvertimeJs) {
      LimitVelocityOvertimeModule = _animatorLimitVelocityOvertimeJs.default;
    }, function (_animatorRotationOvertimeJs) {
      RotationOvertimeModule = _animatorRotationOvertimeJs.default;
    }, function (_animatorSizeOvertimeJs) {
      SizeOvertimeModule = _animatorSizeOvertimeJs.default;
    }, function (_animatorTextureAnimationJs) {
      TextureAnimationModule = _animatorTextureAnimationJs.default;
    }, function (_animatorVelocityOvertimeJs) {
      VelocityOvertimeModule = _animatorVelocityOvertimeJs.default;
    }, function (_burstJs) {
      Burst = _burstJs.default;
    }, function (_emitterShapeModuleJs) {
      ShapeModule = _emitterShapeModuleJs.default;
    }, function (_enumJs) {
      CullingMode = _enumJs.CullingMode;
      Space = _enumJs.Space;
    }, function (_particleGeneralFunctionJs) {
      particleEmitZAxis = _particleGeneralFunctionJs.particleEmitZAxis;
    }, function (_rendererParticleSystemRendererDataJs) {
      ParticleSystemRenderer = _rendererParticleSystemRendererDataJs.default;
    }, function (_rendererTrailJs) {
      TrailModule = _rendererTrailJs.default;
    }, function (_particleJs) {
      PARTICLE_MODULE_PROPERTY = _particleJs.PARTICLE_MODULE_PROPERTY;
    }, function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }, function (_particleCullerJs) {
      ParticleCuller = _particleCullerJs.ParticleCuller;
    }, function (_animatorNoiseModuleJs) {
      NoiseModule = _animatorNoiseModuleJs.NoiseModule;
    }],
    execute: function () {
      _world_mat = new Mat4();
      _world_rol = new Quat();
      superMaterials = Object.getOwnPropertyDescriptor(Renderer.prototype, 'sharedMaterials');
      /**
       * @en
       * Particle system component, which can make many effects such as smoke and fire.
       * Include some interesting modules and components such as Velocity Overtime, Force Overtime, Trail and Noise.
       * You can open these modules to see how the particles animate.
       * @zh
       * 粒子系统能够用来制作许多特效，例如 烟雾和火焰。
       * 包含一些有趣的模块，例如 速度模块，受力模块，拖尾模块和噪声模块。
       * 打开这些模块可以看到粒子如何进行变化。
       */
      _export("ParticleSystem", ParticleSystem = (_dec = ccclass('cc.ParticleSystem'), _dec2 = help('i18n:cc.ParticleSystem'), _dec3 = menu('Effects/ParticleSystem'), _dec4 = executionOrder(99), _dec5 = range([0, Number.POSITIVE_INFINITY, 1]), _dec6 = displayOrder(1), _dec7 = tooltip('i18n:particle_system.capacity'), _dec8 = type(GradientRange), _dec9 = displayOrder(8), _dec10 = tooltip('i18n:particle_system.startColor'), _dec11 = type(Space), _dec12 = displayOrder(9), _dec13 = tooltip('i18n:particle_system.scaleSpace'), _dec14 = displayOrder(10), _dec15 = tooltip('i18n:particle_system.startSize3D'), _dec16 = formerlySerializedAs('startSize'), _dec17 = range([0, Number.POSITIVE_INFINITY]), _dec18 = type(CurveRange), _dec19 = displayOrder(10), _dec20 = tooltip('i18n:particle_system.startSizeX'), _dec21 = type(CurveRange), _dec22 = range([0, Number.POSITIVE_INFINITY]), _dec23 = displayOrder(10), _dec24 = tooltip('i18n:particle_system.startSizeY'), _dec25 = visible(function () {
        return this.startSize3D;
      }), _dec26 = type(CurveRange), _dec27 = range([0, Number.POSITIVE_INFINITY]), _dec28 = displayOrder(10), _dec29 = tooltip('i18n:particle_system.startSizeZ'), _dec30 = visible(function () {
        return this.startSize3D;
      }), _dec31 = type(CurveRange), _dec32 = displayOrder(11), _dec33 = tooltip('i18n:particle_system.startSpeed'), _dec34 = displayOrder(12), _dec35 = tooltip('i18n:particle_system.startRotation3D'), _dec36 = type(CurveRange), _dec37 = displayOrder(12), _dec38 = tooltip('i18n:particle_system.startRotationX'), _dec39 = visible(function () {
        return this.startRotation3D;
      }), _dec40 = type(CurveRange), _dec41 = displayOrder(12), _dec42 = tooltip('i18n:particle_system.startRotationY'), _dec43 = visible(function () {
        return this.startRotation3D;
      }), _dec44 = type(CurveRange), _dec45 = formerlySerializedAs('startRotation'), _dec46 = displayOrder(12), _dec47 = tooltip('i18n:particle_system.startRotationZ'), _dec48 = type(CurveRange), _dec49 = range([0, Number.POSITIVE_INFINITY]), _dec50 = displayOrder(6), _dec51 = tooltip('i18n:particle_system.startDelay'), _dec52 = type(CurveRange), _dec53 = range([0, Number.POSITIVE_INFINITY]), _dec54 = displayOrder(7), _dec55 = tooltip('i18n:particle_system.startLifetime'), _dec56 = displayOrder(0), _dec57 = tooltip('i18n:particle_system.duration'), _dec58 = displayOrder(2), _dec59 = tooltip('i18n:particle_system.loop'), _dec60 = displayOrder(3), _dec61 = tooltip('i18n:particle_system.prewarm'), _dec62 = type(Space), _dec63 = displayOrder(4), _dec64 = tooltip('i18n:particle_system.simulationSpace'), _dec65 = displayOrder(5), _dec66 = tooltip('i18n:particle_system.simulationSpeed'), _dec67 = displayOrder(2), _dec68 = tooltip('i18n:particle_system.playOnAwake'), _dec69 = type(CurveRange), _dec70 = displayOrder(13), _dec71 = tooltip('i18n:particle_system.gravityModifier'), _dec72 = type(CurveRange), _dec73 = range([0, Number.POSITIVE_INFINITY]), _dec74 = displayOrder(14), _dec75 = tooltip('i18n:particle_system.rateOverTime'), _dec76 = type(CurveRange), _dec77 = range([0, Number.POSITIVE_INFINITY]), _dec78 = displayOrder(15), _dec79 = tooltip('i18n:particle_system.rateOverDistance'), _dec80 = type([Burst]), _dec81 = displayOrder(16), _dec82 = tooltip('i18n:particle_system.bursts'), _dec83 = type(CCBoolean), _dec84 = displayOrder(27), _dec85 = tooltip('i18n:particle_system.renderCulling'), _dec86 = type(CullingMode), _dec87 = displayOrder(17), _dec88 = tooltip('i18n:particle_system.cullingMode'), _dec89 = type(CCFloat), _dec90 = displayOrder(17), _dec91 = tooltip('i18n:particle_system.aabbHalfX'), _dec92 = type(CCFloat), _dec93 = displayOrder(17), _dec94 = tooltip('i18n:particle_system.aabbHalfY'), _dec95 = type(CCFloat), _dec96 = displayOrder(17), _dec97 = tooltip('i18n:particle_system.aabbHalfZ'), _dec98 = displayOrder(28), _dec99 = tooltip('i18n:particle_system.dataCulling'), _dec100 = formerlySerializedAs('enableCulling'), _dec101 = visible(false), _dec102 = displayName('Materials'), _dec103 = type(ColorOverLifetimeModule), _dec104 = type(ColorOverLifetimeModule), _dec105 = displayOrder(23), _dec106 = tooltip('i18n:particle_system.colorOverLifetimeModule'), _dec107 = type(ShapeModule), _dec108 = type(ShapeModule), _dec109 = displayOrder(17), _dec110 = tooltip('i18n:particle_system.shapeModule'), _dec111 = type(SizeOvertimeModule), _dec112 = type(SizeOvertimeModule), _dec113 = displayOrder(21), _dec114 = tooltip('i18n:particle_system.sizeOvertimeModule'), _dec115 = type(VelocityOvertimeModule), _dec116 = type(VelocityOvertimeModule), _dec117 = displayOrder(18), _dec118 = tooltip('i18n:particle_system.velocityOvertimeModule'), _dec119 = type(ForceOvertimeModule), _dec120 = type(ForceOvertimeModule), _dec121 = displayOrder(19), _dec122 = tooltip('i18n:particle_system.forceOvertimeModule'), _dec123 = type(LimitVelocityOvertimeModule), _dec124 = type(LimitVelocityOvertimeModule), _dec125 = displayOrder(20), _dec126 = tooltip('i18n:particle_system.limitVelocityOvertimeModule'), _dec127 = type(RotationOvertimeModule), _dec128 = type(RotationOvertimeModule), _dec129 = displayOrder(22), _dec130 = tooltip('i18n:particle_system.rotationOvertimeModule'), _dec131 = type(TextureAnimationModule), _dec132 = type(TextureAnimationModule), _dec133 = displayOrder(24), _dec134 = tooltip('i18n:particle_system.textureAnimationModule'), _dec135 = type(NoiseModule), _dec136 = type(NoiseModule), _dec137 = displayOrder(24), _dec138 = tooltip('i18n:particle_system.noiseModule'), _dec139 = type(TrailModule), _dec140 = type(TrailModule), _dec141 = displayOrder(25), _dec142 = tooltip('i18n:particle_system.trailModule'), _dec143 = type(ParticleSystemRenderer), _dec144 = displayOrder(26), _dec145 = tooltip('i18n:particle_system.renderer'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = executeInEditMode(_class = (_class2 = (_class3 = /*#__PURE__*/function (_ModelRenderer) {
        _inheritsLoose(ParticleSystem, _ModelRenderer);
        function ParticleSystem() {
          var _this;
          _this = _ModelRenderer.call(this) || this;
          /**
           * @en The initial color of the particle.
           * @zh 粒子初始颜色。
           */
          _this.startColor = _initializer && _initializer();
          /**
           * @en The space of particle scaling.
           * @zh 计算粒子缩放的空间。
           */
          _this.scaleSpace = _initializer2 && _initializer2();
          /**
           * @en Whether to modify particle size on XYZ axis.
           * @zh 是否需要修改粒子在三个轴上的大小。
           */
          _this.startSize3D = _initializer3 && _initializer3();
          /**
           * @en The initial X size of the particle.
           * @zh 粒子初始x轴方向大小。
           */
          _this.startSizeX = _initializer4 && _initializer4();
          /**
           * @en The initial Y size of the particle.
           * @zh 粒子初始y轴方向大小。
           */
          _this.startSizeY = _initializer5 && _initializer5();
          /**
           * @en The initial Z size of the particle.
           * @zh 粒子初始z轴方向大小。
           */
          _this.startSizeZ = _initializer6 && _initializer6();
          /**
           * @en The initial velocity of the particle.
           * @zh 粒子初始速度。
           */
          _this.startSpeed = _initializer7 && _initializer7();
          /**
           * @en Whether to modify particle rotation on XYZ axis.
           * @zh 是否需要修改粒子在三个轴上的旋转。
           */
          _this.startRotation3D = _initializer8 && _initializer8();
          /**
           * @en The initial rotation angle of the particle on X axis.
           * @zh 粒子初始x轴旋转角度。
           */
          _this.startRotationX = _initializer9 && _initializer9();
          /**
           * @en The initial rotation angle of the particle on Y axis.
           * @zh 粒子初始y轴旋转角度。
           */
          _this.startRotationY = _initializer10 && _initializer10();
          /**
           * @en The initial rotation angle of the particle on Z axis.
           * @zh 粒子初始z轴旋转角度。
           */
          _this.startRotationZ = _initializer11 && _initializer11();
          /**
           * @en The time delay to start emission after the particle system starts running.
           * @zh 粒子系统开始运行后，延迟粒子发射的时间。
           */
          _this.startDelay = _initializer12 && _initializer12();
          /**
           * @en Particle life time.
           * @zh 粒子生命周期。
           */
          _this.startLifetime = _initializer13 && _initializer13();
          /**
           * @en Particle system duration time.
           * @zh 粒子系统运行时间。
           */
          _this.duration = _initializer14 && _initializer14();
          /**
           * @en Whether the particle system is looping.
           * @zh 粒子系统是否循环播放。
           */
          _this.loop = _initializer15 && _initializer15();
          /**
           * @en The simulation speed of the particle system.
           * @zh 控制整个粒子系统的更新速度。
           */
          _this.simulationSpeed = _initializer16 && _initializer16();
          /**
           * @en Automatically start playing after particle system initialized.
           * @zh 粒子系统加载后是否自动开始播放。
           */
          _this.playOnAwake = _initializer17 && _initializer17();
          /**
           * @en The gravity of the particle system.
           * @zh 粒子受重力影响的重力系数。
           */
          _this.gravityModifier = _initializer18 && _initializer18();
          // emission module
          /**
           * @en The value curve of emission rate over time.
           * @zh 随时间推移发射的粒子数的变化曲线。
           */
          _this.rateOverTime = _initializer19 && _initializer19();
          /**
           * @en The value curve of emission rate over distance.
           * @zh 每移动单位距离发射的粒子数的变化曲线。
           */
          _this.rateOverDistance = _initializer20 && _initializer20();
          /**
           * @en Burst triggers of the particle system.
           * @zh 设定在指定时间发射指定数量的粒子的 burst 的数量。
           */
          _this.bursts = _initializer21 && _initializer21();
          _this._renderCulling = _initializer22 && _initializer22();
          _this._cullingMode = _initializer23 && _initializer23();
          _this._aabbHalfX = _initializer24 && _initializer24();
          _this._aabbHalfY = _initializer25 && _initializer25();
          _this._aabbHalfZ = _initializer26 && _initializer26();
          _this._dataCulling = _initializer27 && _initializer27();
          // color over lifetime module
          _this._colorOverLifetimeModule = _initializer28 && _initializer28();
          // shape module
          _this._shapeModule = _initializer29 && _initializer29();
          // size over lifetime module
          _this._sizeOvertimeModule = _initializer30 && _initializer30();
          // velocity overtime module
          _this._velocityOvertimeModule = _initializer31 && _initializer31();
          // force overTime module
          _this._forceOvertimeModule = _initializer32 && _initializer32();
          // limit velocity overtime module
          _this._limitVelocityOvertimeModule = _initializer33 && _initializer33();
          // rotation overtime module
          _this._rotationOvertimeModule = _initializer34 && _initializer34();
          // texture animation module
          _this._textureAnimationModule = _initializer35 && _initializer35();
          // noise module
          /**
           * @en Noise module which can add some interesting effects.
           * @zh 噪声模块能够增加许多有趣的特效。
           */
          _this._noiseModule = _initializer36 && _initializer36();
          // trail module
          _this._trailModule = _initializer37 && _initializer37();
          // particle system renderer
          /**
           * @en Particle system renderer (CPU or GPU).
           * @zh 粒子系统渲染器（CPU 还是 GPU）。
           */
          _this.renderer = _initializer38 && _initializer38();
          /**
           * @ignore
           */
          _this._isPlaying = void 0;
          _this._isPaused = void 0;
          _this._isStopped = void 0;
          _this._isEmitting = void 0;
          _this._needToRestart = void 0;
          _this._needRefresh = void 0;
          _this._time = void 0;
          // playback position in seconds.
          _this._emitRateTimeCounter = void 0;
          _this._emitRateDistanceCounter = void 0;
          _this._oldWPos = void 0;
          _this._curWPos = void 0;
          _this._boundingBox = void 0;
          _this._culler = void 0;
          _this._oldPos = void 0;
          _this._curPos = void 0;
          _this._isCulled = void 0;
          _this._isSimulating = void 0;
          _this._customData1 = void 0;
          _this._customData2 = void 0;
          _this._subEmitters = void 0;
          // array of { emitter: ParticleSystem, type: 'birth', 'collision' or 'death'}
          _this._needAttach = void 0;
          _this._prewarm = _initializer39 && _initializer39();
          _this._capacity = _initializer40 && _initializer40();
          _this._simulationSpace = _initializer41 && _initializer41();
          /**
           * @en Particle update processor (update every particle).
           * @zh 粒子更新器（负责更新每个粒子）。
           */
          _this.processor = null;
          _this.rateOverTime.constant = 10;
          _this.startLifetime.constant = 5;
          _this.startSizeX.constant = 1;
          _this.startSpeed.constant = 5;

          // internal status
          _this._isPlaying = false;
          _this._isPaused = false;
          _this._isStopped = true;
          _this._isEmitting = false;
          _this._needToRestart = false;
          _this._needRefresh = true;
          _this._needAttach = false;
          _this._time = 0.0; // playback position in seconds.
          _this._emitRateTimeCounter = 0.0;
          _this._emitRateDistanceCounter = 0.0;
          _this._oldWPos = new Vec3();
          _this._curWPos = new Vec3();
          _this._boundingBox = null;
          _this._culler = null;
          _this._oldPos = null;
          _this._curPos = null;
          _this._isCulled = false;
          _this._isSimulating = true;
          _this._customData1 = new Vec2();
          _this._customData2 = new Vec2();
          _this._subEmitters = []; // array of { emitter: ParticleSystem, type: 'birth', 'collision' or 'death'}
          return _this;
        }
        var _proto = ParticleSystem.prototype;
        _proto.onFocusInEditor = function onFocusInEditor() {
          this.renderer.create(this);
        };
        _proto.onLoad = function onLoad() {
          // HACK, TODO
          this.renderer.onInit(this);
          if (this._shapeModule) this._shapeModule.onInit(this);
          if (this._trailModule && !this.renderer.useGPU && this._trailModule.enable) {
            this._trailModule.onInit(this);
          }
          this.bindModule();
          this._resetPosition();

          // this._system.add(this);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._onMaterialModified = function _onMaterialModified(index, material) {
          if (this.processor !== null) {
            this.processor.onMaterialModified(index, material);
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._onRebuildPSO = function _onRebuildPSO(index, material) {
          this.processor.onRebuildPSO(index, material);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._collectModels = function _collectModels() {
          this._models.length = 0;
          this._models.push(this.processor._model);
          if (this._trailModule && this._trailModule.enable && this._trailModule._trailModel) {
            this._models.push(this._trailModule._trailModel);
          }
          return this._models;
        };
        _proto._attachToScene = function _attachToScene() {
          this.processor.attachToScene();
          if (this._trailModule && this._trailModule.enable) {
            this._trailModule._attachToScene();
          }
        }

        /**
         * @engineInternal
         */;
        _proto._detachFromScene = function _detachFromScene() {
          this.processor.detachFromScene();
          if (this._trailModule && this._trailModule.enable) {
            this._trailModule._detachFromScene();
          }
          if (this._boundingBox) {
            this._boundingBox = null;
          }
          if (this._culler) {
            this._culler.clear();
            this._culler.destroy();
            this._culler = null;
          }
        }

        /**
         * @en Bind module to particle processor.
         * @zh 把模块绑定到粒子更新函数上。
         */;
        _proto.bindModule = function bindModule() {
          if (this._colorOverLifetimeModule) this._colorOverLifetimeModule.bindTarget(this.processor);
          if (this._sizeOvertimeModule) this._sizeOvertimeModule.bindTarget(this.processor);
          if (this._rotationOvertimeModule) this._rotationOvertimeModule.bindTarget(this.processor);
          if (this._forceOvertimeModule) this._forceOvertimeModule.bindTarget(this.processor);
          if (this._limitVelocityOvertimeModule) this._limitVelocityOvertimeModule.bindTarget(this.processor);
          if (this._velocityOvertimeModule) this._velocityOvertimeModule.bindTarget(this.processor);
          if (this._textureAnimationModule) this._textureAnimationModule.bindTarget(this.processor);
          if (this._noiseModule) this._noiseModule.bindTarget(this.processor);
        }

        // TODO: Fast forward current particle system by simulating particles over given period of time, then pause it.
        // simulate(time, withChildren, restart, fixedTimeStep) {

        // }

        /**
         * @en Play particle system.
         * @zh 播放粒子效果。
         */;
        _proto.play = function play() {
          if (this._needToRestart) {
            this.reset();
            this._needToRestart = false;
          }
          if (this._isPaused) {
            this._isPaused = false;
          }
          if (this._isStopped) {
            this._isStopped = false;
          }
          this._isPlaying = true;
          this._isEmitting = true;
          this._resetPosition();

          // prewarm
          if (this._prewarm) {
            this._prewarmSystem();
          }
          if (this._trailModule) {
            this._trailModule.play();
          }
          if (this.processor) {
            var model = this.processor.getModel();
            if (model) {
              model.enabled = this.enabledInHierarchy;
            }
          }
        }

        /**
         * @en Pause particle system.
         * @zh 暂停播放粒子效果。
         */;
        _proto.pause = function pause() {
          if (this._isStopped) {
            warn('pause(): particle system is already stopped.');
            return;
          }
          if (this._isPlaying) {
            this._isPlaying = false;
          }
          this._isPaused = true;
        }

        /**
         * @zh 停止发射粒子。
         * @en Stop emitting particles.
         */;
        _proto.stopEmitting = function stopEmitting() {
          this._isEmitting = false;
          this._needToRestart = true;
        }

        /**
         * @en Stop particle system.
         * @zh 停止播放粒子。
         */;
        _proto.stop = function stop() {
          if (this._isPlaying || this._isPaused) {
            this.clear();
          }
          if (this._isPlaying) {
            this._isPlaying = false;
          }
          if (this._isPaused) {
            this._isPaused = false;
          }
          if (this._isEmitting) {
            this._isEmitting = false;
          }
          this._isStopped = true;

          // if stop emit modify the refresh flag to true
          this._needRefresh = true;
          this.reset();
        };
        _proto.reset = function reset() {
          this._time = 0.0;
          this._emitRateTimeCounter = 0.0;
          this._emitRateDistanceCounter = 0.0;
          this._resetPosition();
          for (var _iterator = _createForOfIteratorHelperLoose(this.bursts), _step; !(_step = _iterator()).done;) {
            var burst = _step.value;
            burst.reset();
          }
        }

        /**
         * @en remove all particles from current particle system.
         * @zh 将所有粒子从粒子系统中清除。
         */;
        _proto.clear = function clear() {
          if (this.enabledInHierarchy) {
            this.processor.clear();
            if (this._trailModule) this._trailModule.clear();
          }
          this._calculateBounding(false);
        }

        /**
         * @en Get current particle capacity.
         * @zh 获取当前粒子数量。
         */;
        _proto.getParticleCount = function getParticleCount() {
          if (this.processor) {
            return this.processor.getParticleCount();
          } else {
            return 0;
          }
        }

        /**
         * @ignore
         */;
        _proto.setCustomData1 = function setCustomData1(x, y) {
          Vec2.set(this._customData1, x, y);
        }

        /**
         * @ignore
         */;
        _proto.setCustomData2 = function setCustomData2(x, y) {
          Vec2.set(this._customData2, x, y);
        };
        _proto.onDestroy = function onDestroy() {
          var _this$processor$getMo;
          this.stop();
          if ((_this$processor$getMo = this.processor.getModel()) !== null && _this$processor$getMo !== void 0 && _this$processor$getMo.scene) {
            this.processor.detachFromScene();
            if (this._trailModule && this._trailModule.enable) {
              this._trailModule._detachFromScene();
            }
          }
          cclegacy.director.off(cclegacy.Director.EVENT_BEFORE_COMMIT, this.beforeRender, this);
          // this._system.remove(this);
          this.processor.onDestroy();
          if (this._trailModule) this._trailModule.destroy();
          if (this._culler) {
            this._culler.clear();
            this._culler.destroy();
            this._culler = null;
          }
        };
        _proto.onEnable = function onEnable() {
          _ModelRenderer.prototype.onEnable.call(this);
          cclegacy.director.on(cclegacy.Director.EVENT_BEFORE_COMMIT, this.beforeRender, this);
          if (this.playOnAwake && !EDITOR_NOT_IN_PREVIEW) {
            this.play();
          }
          this.processor.onEnable();
          if (this._trailModule) this._trailModule.onEnable();
        };
        _proto.onDisable = function onDisable() {
          cclegacy.director.off(cclegacy.Director.EVENT_BEFORE_COMMIT, this.beforeRender, this);
          this.processor.onDisable();
          if (this._trailModule) this._trailModule.onDisable();
          if (this._boundingBox) {
            this._boundingBox = null;
          }
          if (this._culler) {
            this._culler.clear();
            this._culler.destroy();
            this._culler = null;
          }
        };
        _proto._calculateBounding = function _calculateBounding(forceRefresh) {
          if (this._boundingBox) {
            if (!this._culler) {
              this._culler = new ParticleCuller(this);
            }
            this._culler.calculatePositions();
            geometry.AABB.fromPoints(this._boundingBox, this._culler.minPos, this._culler.maxPos);
            if (forceRefresh) {
              this.aabbHalfX = this._boundingBox.halfExtents.x;
              this.aabbHalfY = this._boundingBox.halfExtents.y;
              this.aabbHalfZ = this._boundingBox.halfExtents.z;
            } else {
              if (this.aabbHalfX) {
                this.setBoundingX(this.aabbHalfX);
              } else {
                this.aabbHalfX = this._boundingBox.halfExtents.x;
              }
              if (this.aabbHalfY) {
                this.setBoundingY(this.aabbHalfY);
              } else {
                this.aabbHalfY = this._boundingBox.halfExtents.y;
              }
              if (this.aabbHalfZ) {
                this.setBoundingZ(this.aabbHalfZ);
              } else {
                this.aabbHalfZ = this._boundingBox.halfExtents.z;
              }
            }
            this._culler.clear();
          }
        };
        _proto.update = function update(dt) {
          var scaledDeltaTime = dt * this.simulationSpeed;
          if (!this.renderCulling) {
            if (this._boundingBox) {
              this._boundingBox = null;
            }
            if (this._culler) {
              this._culler.clear();
              this._culler.destroy();
              this._culler = null;
            }
            this._isSimulating = true;
          } else {
            var _this$node$scene$rend;
            if (!this._boundingBox) {
              this._boundingBox = new geometry.AABB();
              this._calculateBounding(false);
            }
            if (!this._curPos) {
              this._curPos = new Vec3();
            }
            this.node.getWorldPosition(this._curPos);
            if (!this._oldPos) {
              this._oldPos = new Vec3();
              this._oldPos.set(this._curPos);
            }
            if (!this._curPos.equals(this._oldPos) && this._boundingBox && this._culler) {
              var dx = this._curPos.x - this._oldPos.x;
              var dy = this._curPos.y - this._oldPos.y;
              var dz = this._curPos.z - this._oldPos.z;
              var center = this._boundingBox.center;
              center.x += dx;
              center.y += dy;
              center.z += dz;
              this._culler.setBoundingBoxCenter(center.x, center.y, center.z);
              this._oldPos.set(this._curPos);
            }
            var cameraLst = (_this$node$scene$rend = this.node.scene.renderScene) === null || _this$node$scene$rend === void 0 ? void 0 : _this$node$scene$rend.cameras;
            var culled = true;
            if (cameraLst !== undefined && this._boundingBox) {
              for (var i = 0; i < cameraLst.length; ++i) {
                var camera = cameraLst[i];
                var visibility = camera.visibility;
                if ((visibility & this.node.layer) === this.node.layer) {
                  if (EDITOR_NOT_IN_PREVIEW) {
                    if (camera.name === 'Editor Camera' && geometry.intersect.aabbFrustum(this._boundingBox, camera.frustum)) {
                      culled = false;
                      break;
                    }
                  } else if (geometry.intersect.aabbFrustum(this._boundingBox, camera.frustum)) {
                    culled = false;
                    break;
                  }
                }
              }
            }
            if (culled) {
              if (this._cullingMode !== CullingMode.AlwaysSimulate) {
                this._isSimulating = false;
              }
              if (!this._isCulled) {
                this.processor.detachFromScene();
                this._isCulled = true;
              }
              if (this._trailModule && this._trailModule.enable) {
                this._trailModule._detachFromScene();
              }
              if (this._cullingMode === CullingMode.PauseAndCatchup) {
                this._time += scaledDeltaTime;
              }
              if (this._cullingMode !== CullingMode.AlwaysSimulate) {
                return;
              }
            } else {
              if (this._isCulled) {
                this._attachToScene();
                this._isCulled = false;
              }
              if (!this._isSimulating) {
                this._isSimulating = true;
              }
            }
            if (!this._isSimulating) {
              return;
            }
          }
          if (this._isPlaying) {
            this._time += scaledDeltaTime;

            // Execute emission
            this._emit(scaledDeltaTime);

            // simulation, update particles.
            if (this.processor.updateParticles(scaledDeltaTime) === 0 && !this._isEmitting) {
              this.stop();
            }
          } else {
            var mat = this.getMaterialInstance(0) || this.processor.getDefaultMaterial();
            var pass = mat.passes[0];
            this.processor.updateRotation(pass);
            this.processor.updateScale(pass);
          }
          if (this._needAttach) {
            // Check whether this particle model should be reattached
            if (this.getParticleCount() > 0) {
              if (!this._isCulled) {
                var _this$processor$getMo2;
                if (!((_this$processor$getMo2 = this.processor.getModel()) !== null && _this$processor$getMo2 !== void 0 && _this$processor$getMo2.scene)) {
                  this.processor.attachToScene();
                }
                if (this._trailModule && this._trailModule.enable) {
                  var _this$_trailModule$ge;
                  if (!((_this$_trailModule$ge = this._trailModule.getModel()) !== null && _this$_trailModule$ge !== void 0 && _this$_trailModule$ge.scene)) {
                    this._trailModule._attachToScene();
                  }
                }
                this._needAttach = false;
              }
            }
          }
          if (!this.renderer.useGPU && this._trailModule && this._trailModule.enable) {
            if (!this._trailModule.inited) {
              this._trailModule.clear();
              this._trailModule.destroy();
              this._trailModule.onInit(this);
              // Rebuild trail buffer
              this._trailModule.enable = false;
              this._trailModule.enable = true;
            }
          }
        };
        _proto.beforeRender = function beforeRender() {
          var _this$processor$getMo4;
          if (this.getParticleCount() <= 0) {
            var _this$processor$getMo3;
            if ((_this$processor$getMo3 = this.processor.getModel()) !== null && _this$processor$getMo3 !== void 0 && _this$processor$getMo3.scene) {
              this.processor.detachFromScene();
              if (this._trailModule && this._trailModule.enable) {
                this._trailModule._detachFromScene();
              }
              this._needAttach = false;
            }
          } else if (!((_this$processor$getMo4 = this.processor.getModel()) !== null && _this$processor$getMo4 !== void 0 && _this$processor$getMo4.scene)) {
            this._needAttach = true;
          }
          if (!this._isPlaying) return;

          // update render data
          this.processor.updateRenderData();
          this.processor.beforeRender();
          // update trail
          if (this._trailModule && this._trailModule.enable) {
            this._trailModule.updateRenderData();
            this._trailModule.beforeRender();
          }
        };
        _proto._onVisibilityChange = function _onVisibilityChange(val) {
          if (this.processor.model) {
            this.processor.model.visFlags = val;
          }
        };
        _proto.emit = function emit(count, dt) {
          var loopDelta = this._time % this.duration / this.duration; // loop delta value

          // refresh particle node position to update emit position
          if (this._needRefresh) {
            // this.node.setPosition(this.node.getPosition());
            this.node.invalidateChildren(TransformBit.POSITION);
            this._needRefresh = false;
          }
          if (this._simulationSpace === Space.World) {
            this.node.getWorldMatrix(_world_mat);
            this.node.getWorldRotation(_world_rol);
          }
          for (var i = 0; i < count; ++i) {
            var particle = this.processor.getFreeParticle();
            if (particle === null) {
              return;
            }
            particle.particleSystem = this;
            particle.reset();
            var rand = pseudoRandom(randomRangeInt(0, bits.INT_MAX));
            if (this._shapeModule && this._shapeModule.enable) {
              this._shapeModule.emit(particle);
            } else {
              Vec3.set(particle.position, 0, 0, 0);
              Vec3.copy(particle.velocity, particleEmitZAxis);
            }
            if (this._textureAnimationModule && this._textureAnimationModule.enable) {
              this._textureAnimationModule.init(particle);
            }
            var curveStartSpeed = this.startSpeed.evaluate(loopDelta, rand);
            Vec3.multiplyScalar(particle.velocity, particle.velocity, curveStartSpeed);
            if (this._simulationSpace === Space.World) {
              Vec3.transformMat4(particle.position, particle.position, _world_mat);
              Vec3.transformQuat(particle.velocity, particle.velocity, _world_rol);
            }
            Vec3.copy(particle.ultimateVelocity, particle.velocity);
            // apply startRotation.
            if (this.startRotation3D) {
              // eslint-disable-next-line max-len
              particle.startEuler.set(this.startRotationX.evaluate(loopDelta, rand), this.startRotationY.evaluate(loopDelta, rand), this.startRotationZ.evaluate(loopDelta, rand));
            } else {
              particle.startEuler.set(0, 0, this.startRotationZ.evaluate(loopDelta, rand));
            }
            particle.rotation.set(particle.startEuler);

            // apply startSize.
            if (this.startSize3D) {
              Vec3.set(particle.startSize, this.startSizeX.evaluate(loopDelta, rand), this.startSizeY.evaluate(loopDelta, rand), this.startSizeZ.evaluate(loopDelta, rand));
            } else {
              Vec3.set(particle.startSize, this.startSizeX.evaluate(loopDelta, rand), 1, 1);
              particle.startSize.y = particle.startSize.x;
            }
            Vec3.copy(particle.size, particle.startSize);

            // apply startColor.
            particle.startColor.set(this.startColor.evaluate(loopDelta, rand));
            particle.color.set(particle.startColor);

            // apply startLifetime.
            particle.startLifetime = this.startLifetime.evaluate(loopDelta, rand) + dt;
            particle.remainingLifetime = particle.startLifetime;
            particle.randomSeed = randomRangeInt(0, 233280);
            particle.loopCount++;
            this.processor.setNewParticle(particle);
          } // end of particles forLoop.
        }

        // initialize particle system as though it had already completed a full cycle.
        ;
        _proto._prewarmSystem = function _prewarmSystem() {
          this.startDelay.mode = Mode.Constant; // clear startDelay.
          this.startDelay.constant = 0;
          var dt = 1.0; // should use varying value?
          var cnt = this.duration / dt;
          for (var i = 0; i < cnt; ++i) {
            this._time += dt;
            this._emit(dt);
            this.processor.updateParticles(dt);
          }
        }

        // internal function
        ;
        _proto._emit = function _emit(dt) {
          // emit particles.
          var startDelay = this.startDelay.evaluate(0, 1);
          if (this._time > startDelay) {
            if (this._time > this.duration + startDelay) {
              // this._time = startDelay; // delay will not be applied from the second loop.(Unity)
              // this._emitRateTimeCounter = 0.0;
              // this._emitRateDistanceCounter = 0.0;
              if (!this.loop) {
                this._isEmitting = false;
              }
            }
            if (!this._isEmitting) return;

            // emit by rateOverTime
            this._emitRateTimeCounter += this.rateOverTime.evaluate(this._time / this.duration, 1) * dt;
            if (this._emitRateTimeCounter > 1) {
              var emitNum = Math.floor(this._emitRateTimeCounter);
              this._emitRateTimeCounter -= emitNum;
              this.emit(emitNum, dt);
            }

            // emit by rateOverDistance
            var rateOverDistance = this.rateOverDistance.evaluate(this._time / this.duration, 1);
            if (rateOverDistance > 0) {
              Vec3.copy(this._oldWPos, this._curWPos);
              this.node.getWorldPosition(this._curWPos);
              var distance = Vec3.distance(this._curWPos, this._oldWPos);
              this._emitRateDistanceCounter += distance * rateOverDistance;
            }
            if (this._emitRateDistanceCounter > 1) {
              var _emitNum = Math.floor(this._emitRateDistanceCounter);
              this._emitRateDistanceCounter -= _emitNum;
              this.emit(_emitNum, dt);
            }

            // bursts
            for (var _iterator2 = _createForOfIteratorHelperLoose(this.bursts), _step2; !(_step2 = _iterator2()).done;) {
              var burst = _step2.value;
              burst.update(this, dt);
            }
          }
        };
        _proto._resetPosition = function _resetPosition() {
          this.node.getWorldPosition(this._oldWPos);
          Vec3.copy(this._curWPos, this._oldWPos);
        };
        _proto.addSubEmitter = function addSubEmitter(subEmitter) {
          this._subEmitters.push(subEmitter);
        };
        _proto.removeSubEmitter = function removeSubEmitter(idx) {
          this._subEmitters.splice(this._subEmitters.indexOf(idx), 1);
        };
        _proto.addBurst = function addBurst(burst) {
          this.bursts.push(burst);
        };
        _proto.removeBurst = function removeBurst(idx) {
          this.bursts.splice(this.bursts.indexOf(idx), 1);
        };
        _proto.getBoundingX = function getBoundingX() {
          return this._aabbHalfX;
        };
        _proto.getBoundingY = function getBoundingY() {
          return this._aabbHalfY;
        };
        _proto.getBoundingZ = function getBoundingZ() {
          return this._aabbHalfZ;
        };
        _proto.setBoundingX = function setBoundingX(value) {
          if (this._boundingBox && this._culler) {
            this._boundingBox.halfExtents.x = value;
            this._culler.setBoundingBoxSize(this._boundingBox.halfExtents);
            this._aabbHalfX = value;
          }
        };
        _proto.setBoundingY = function setBoundingY(value) {
          if (this._boundingBox && this._culler) {
            this._boundingBox.halfExtents.y = value;
            this._culler.setBoundingBoxSize(this._boundingBox.halfExtents);
            this._aabbHalfY = value;
          }
        };
        _proto.setBoundingZ = function setBoundingZ(value) {
          if (this._boundingBox && this._culler) {
            this._boundingBox.halfExtents.z = value;
            this._culler.setBoundingBoxSize(this._boundingBox.halfExtents);
            this._aabbHalfZ = value;
          }
        }

        /**
         * @ignore
         */;
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _proto._onBeforeSerialize = function _onBeforeSerialize(props) {
          var _this2 = this;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return this.dataCulling ? props.filter(function (p) {
            return !PARTICLE_MODULE_PROPERTY.includes(p) || _this2[p] && _this2[p].enable;
          }) : props;
        }

        /**
         * @en Gets the preview of noise texture.
         * @zh 获取噪声图预览。
         * @param width @en Noise texture width @zh 噪声图宽度
         * @param height @en Noise texture height @zh 噪声图高度
         * @returns @en Noise texture RGB pixel array @zh 噪声图 RGB 纹理数组
         */;
        _proto.getNoisePreview = function getNoisePreview(width, height) {
          var out = [];
          if (this.processor) {
            this.processor.getNoisePreview(out, width, height);
          }
          return out;
        };
        _createClass(ParticleSystem, [{
          key: "capacity",
          get:
          /**
           * @en Maximum particle capacity to generate.
           * @zh 粒子系统能生成的最大粒子数量。
           */
          function get() {
            return this._capacity;
          },
          set: function set(val) {
            this._capacity = Math.floor(val > 0 ? val : 0);
            if (this.processor && this.processor.model) {
              this.processor.model.setCapacity(this._capacity);
            }
          }
        }, {
          key: "prewarm",
          get:
          /**
           * @en Play one round before start this particle system.
           * @zh 选中之后，粒子系统会以已播放完一轮之后的状态开始播放（仅当循环播放启用时有效）。
           */
          function get() {
            return this._prewarm;
          },
          set: function set(val) {
            if (val === true && this.loop === false) {
              // console.warn('prewarm only works if loop is also enabled.');
            }
            this._prewarm = val;
          }

          /**
           * @en The simulation space of the particle system, it could be world, local or custom.
           * @zh 选择粒子系统所在的坐标系[[Space]]。<br>
           */
        }, {
          key: "simulationSpace",
          get: function get() {
            return this._simulationSpace;
          },
          set: function set(val) {
            if (val !== this._simulationSpace) {
              this._simulationSpace = val;
              if (this.processor) {
                this.processor.updateMaterialParams();
                this.processor.updateTrailMaterial();
              }
            }
          }
        }, {
          key: "renderCulling",
          get: function get() {
            return this._renderCulling;
          },
          set:
          /**
           * @en Enable particle culling switch. Open it to enable particle culling.
           * If enabled will generate emitter bounding box and emitters outside the frustum will be culled.
           * @zh 粒子剔除开关，如果打开将会生成一个发射器包围盒，包围盒在相机外发射器将被剔除。
           */
          function set(value) {
            this._renderCulling = value;
            if (value) {
              if (!this._boundingBox) {
                this._boundingBox = new geometry.AABB();
                this._calculateBounding(false);
              }
            }
          }
        }, {
          key: "cullingMode",
          get:
          /**
           * @en Particle culling mode option. Includes pause, pause and catchup, always simulate.
           * @zh 粒子剔除模式选择。包括暂停模拟，暂停以后快进继续以及不间断模拟。
           */
          function get() {
            return this._cullingMode;
          },
          set: function set(value) {
            this._cullingMode = value;
          }
        }, {
          key: "aabbHalfX",
          get:
          /**
           * @en Particle bounding box half width.
           * @zh 粒子包围盒半宽。
           */
          function get() {
            var res = this.getBoundingX();
            if (res) {
              return res;
            } else {
              return 0;
            }
          },
          set: function set(value) {
            this.setBoundingX(value);
          }
        }, {
          key: "aabbHalfY",
          get:
          /**
           * @en Particle bounding box half height.
           * @zh 粒子包围盒半高。
           */
          function get() {
            var res = this.getBoundingY();
            if (res) {
              return res;
            } else {
              return 0;
            }
          },
          set: function set(value) {
            this.setBoundingY(value);
          }
        }, {
          key: "aabbHalfZ",
          get:
          /**
           * @en Particle bounding box half depth.
           * @zh 粒子包围盒半深。
           */
          function get() {
            var res = this.getBoundingZ();
            if (res) {
              return res;
            } else {
              return 0;
            }
          },
          set: function set(value) {
            this.setBoundingZ(value);
          }
        }, {
          key: "dataCulling",
          get:
          /**
           * @en Culling module data before serialize.
           * @zh 序列化之前剔除不需要的模块数据。
           */
          function get() {
            return this._dataCulling;
          },
          set: function set(value) {
            this._dataCulling = value;
          }
        }, {
          key: "sharedMaterials",
          get: function get() {
            // if we don't create an array copy, the editor will modify the original array directly.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return superMaterials.get.call(this);
          },
          set: function set(val) {
            // TODO: can we assert that superMaterials.set is defined ?
            superMaterials.set.call(this, val);
          }
        }, {
          key: "colorOverLifetimeModule",
          get:
          /**
           * @en The module controlling particle's color over life time.
           * @zh 颜色控制模块。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._colorOverLifetimeModule) {
                this._colorOverLifetimeModule = new ColorOverLifetimeModule();
                this._colorOverLifetimeModule.bindTarget(this.processor);
              }
            }
            return this._colorOverLifetimeModule;
          },
          set: function set(val) {
            if (!val) return;
            this._colorOverLifetimeModule = val;
          }
        }, {
          key: "shapeModule",
          get:
          /**
           * @en The module controlling emitter's shape.
           * @zh 粒子发射器模块。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._shapeModule) {
                this._shapeModule = new ShapeModule();
                this._shapeModule.onInit(this);
              }
            }
            return this._shapeModule;
          },
          set: function set(val) {
            if (!val) return;
            this._shapeModule = val;
          }
        }, {
          key: "sizeOvertimeModule",
          get:
          /**
           * @en The module controlling particle's size over time.
           * @zh 粒子大小模块。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._sizeOvertimeModule) {
                this._sizeOvertimeModule = new SizeOvertimeModule();
                this._sizeOvertimeModule.bindTarget(this.processor);
              }
            }
            return this._sizeOvertimeModule;
          },
          set: function set(val) {
            if (!val) return;
            this._sizeOvertimeModule = val;
          }
        }, {
          key: "velocityOvertimeModule",
          get:
          /**
           * @en The module controlling particle's velocity over time.
           * @zh 粒子速度模块。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._velocityOvertimeModule) {
                this._velocityOvertimeModule = new VelocityOvertimeModule();
                this._velocityOvertimeModule.bindTarget(this.processor);
              }
            }
            return this._velocityOvertimeModule;
          },
          set: function set(val) {
            if (!val) return;
            this._velocityOvertimeModule = val;
          }
        }, {
          key: "forceOvertimeModule",
          get:
          /**
           * @en The module controlling the force applied to particles over time.
           * @zh 粒子加速度模块。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._forceOvertimeModule) {
                this._forceOvertimeModule = new ForceOvertimeModule();
                this._forceOvertimeModule.bindTarget(this.processor);
              }
            }
            return this._forceOvertimeModule;
          },
          set: function set(val) {
            if (!val) return;
            this._forceOvertimeModule = val;
          }
        }, {
          key: "limitVelocityOvertimeModule",
          get:
          /**
           * @en The module which limits the velocity applied to particles over time, only supported in CPU particle system.
           * @zh 粒子限制速度模块（只支持 CPU 粒子）。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._limitVelocityOvertimeModule) {
                this._limitVelocityOvertimeModule = new LimitVelocityOvertimeModule();
                this._limitVelocityOvertimeModule.bindTarget(this.processor);
              }
            }
            return this._limitVelocityOvertimeModule;
          },
          set: function set(val) {
            if (!val) return;
            this._limitVelocityOvertimeModule = val;
          }
        }, {
          key: "rotationOvertimeModule",
          get:
          /**
           * @en The module controlling the rotation of particles over time.
           * @zh 粒子旋转模块。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._rotationOvertimeModule) {
                this._rotationOvertimeModule = new RotationOvertimeModule();
                this._rotationOvertimeModule.bindTarget(this.processor);
              }
            }
            return this._rotationOvertimeModule;
          },
          set: function set(val) {
            if (!val) return;
            this._rotationOvertimeModule = val;
          }
        }, {
          key: "textureAnimationModule",
          get:
          /**
           * @en The module controlling the texture animation of particles.
           * @zh 贴图动画模块。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._textureAnimationModule) {
                this._textureAnimationModule = new TextureAnimationModule();
                this._textureAnimationModule.bindTarget(this.processor);
              }
            }
            return this._textureAnimationModule;
          },
          set: function set(val) {
            if (!val) return;
            this._textureAnimationModule = val;
          }
        }, {
          key: "noiseModule",
          get:
          /**
           * @en The module controlling noise map applied to the particles, only supported in CPU particle system.
           * @zh 噪声动画模块，仅支持 CPU 粒子。
           */
          function get() {
            if (EDITOR) {
              if (!this._noiseModule) {
                this._noiseModule = new NoiseModule();
                this._noiseModule.bindTarget(this.processor);
              }
            }
            return this._noiseModule;
          },
          set: function set(val) {
            if (!val) return;
            this._noiseModule = val;
          }
        }, {
          key: "trailModule",
          get:
          /**
           * @en The module controlling the trail module.
           * @zh 粒子轨迹模块。
           */
          function get() {
            if (EDITOR_NOT_IN_PREVIEW) {
              if (!this._trailModule) {
                this._trailModule = new TrailModule();
              }
            }
            return this._trailModule;
          },
          set: function set(val) {
            if (!val) return;
            this._trailModule = val;
          }
        }, {
          key: "isPlaying",
          get: function get() {
            return this._isPlaying;
          }

          /**
           * @en Query particle system is paused or not.
           * @zh 获取粒子系统当前是否已经暂停运行。
           */
        }, {
          key: "isPaused",
          get: function get() {
            return this._isPaused;
          }

          /**
           * @en Query particle system is stopped or not.
           * @zh 获取粒子系统当前是否已经停止。
           */
        }, {
          key: "isStopped",
          get: function get() {
            return this._isStopped;
          }

          /**
           * @en Query particle system is emitting or not.
           * @zh 获取粒子系统当前是否还在发射。
           */
        }, {
          key: "isEmitting",
          get: function get() {
            return this._isEmitting;
          }

          /**
           * @en Query particle system simulation time.
           * @zh 获取粒子系统运行时间。
           */
        }, {
          key: "time",
          get: function get() {
            return this._time;
          }
        }]);
        return ParticleSystem;
      }(ModelRenderer), _class3.CullingMode = CullingMode, _class3), (_applyDecoratedDescriptor(_class2.prototype, "capacity", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "capacity"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "startColor", [_dec8, serializable, _dec9, _dec10], function () {
        return new GradientRange();
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "scaleSpace", [_dec11, serializable, _dec12, _dec13], function () {
        return Space.Local;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "startSize3D", [serializable, _dec14, _dec15], function () {
        return false;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "startSizeX", [_dec16, _dec17, _dec18, _dec19, _dec20], function () {
        return new CurveRange();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "startSizeY", [_dec21, serializable, _dec22, _dec23, _dec24, _dec25], function () {
        return new CurveRange();
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "startSizeZ", [_dec26, serializable, _dec27, _dec28, _dec29, _dec30], function () {
        return new CurveRange();
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "startSpeed", [_dec31, serializable, _dec32, _dec33], function () {
        return new CurveRange();
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "startRotation3D", [serializable, _dec34, _dec35], function () {
        return false;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "startRotationX", [_dec36, serializable, radian, _dec37, _dec38, _dec39], function () {
        return new CurveRange();
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "startRotationY", [_dec40, serializable, radian, _dec41, _dec42, _dec43], function () {
        return new CurveRange();
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "startRotationZ", [_dec44, _dec45, radian, _dec46, _dec47], function () {
        return new CurveRange();
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "startDelay", [_dec48, serializable, _dec49, _dec50, _dec51], function () {
        return new CurveRange();
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "startLifetime", [_dec52, serializable, _dec53, _dec54, _dec55], function () {
        return new CurveRange();
      }), _initializer14 = _applyDecoratedInitializer(_class2.prototype, "duration", [serializable, _dec56, _dec57], function () {
        return 5.0;
      }), _initializer15 = _applyDecoratedInitializer(_class2.prototype, "loop", [serializable, _dec58, _dec59], function () {
        return true;
      }), _applyDecoratedDescriptor(_class2.prototype, "prewarm", [_dec60, _dec61], Object.getOwnPropertyDescriptor(_class2.prototype, "prewarm"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "simulationSpace", [_dec62, serializable, _dec63, _dec64], Object.getOwnPropertyDescriptor(_class2.prototype, "simulationSpace"), _class2.prototype), _initializer16 = _applyDecoratedInitializer(_class2.prototype, "simulationSpeed", [serializable, _dec65, _dec66], function () {
        return 1.0;
      }), _initializer17 = _applyDecoratedInitializer(_class2.prototype, "playOnAwake", [serializable, _dec67, _dec68], function () {
        return true;
      }), _initializer18 = _applyDecoratedInitializer(_class2.prototype, "gravityModifier", [_dec69, serializable, _dec70, _dec71], function () {
        return new CurveRange();
      }), _initializer19 = _applyDecoratedInitializer(_class2.prototype, "rateOverTime", [_dec72, serializable, _dec73, _dec74, _dec75], function () {
        return new CurveRange();
      }), _initializer20 = _applyDecoratedInitializer(_class2.prototype, "rateOverDistance", [_dec76, serializable, _dec77, _dec78, _dec79], function () {
        return new CurveRange();
      }), _initializer21 = _applyDecoratedInitializer(_class2.prototype, "bursts", [_dec80, serializable, _dec81, _dec82], function () {
        return [];
      }), _applyDecoratedDescriptor(_class2.prototype, "renderCulling", [_dec83, _dec84, _dec85], Object.getOwnPropertyDescriptor(_class2.prototype, "renderCulling"), _class2.prototype), _initializer22 = _applyDecoratedInitializer(_class2.prototype, "_renderCulling", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "cullingMode", [_dec86, _dec87, _dec88], Object.getOwnPropertyDescriptor(_class2.prototype, "cullingMode"), _class2.prototype), _initializer23 = _applyDecoratedInitializer(_class2.prototype, "_cullingMode", [serializable], function () {
        return CullingMode.Pause;
      }), _applyDecoratedDescriptor(_class2.prototype, "aabbHalfX", [_dec89, _dec90, _dec91], Object.getOwnPropertyDescriptor(_class2.prototype, "aabbHalfX"), _class2.prototype), _initializer24 = _applyDecoratedInitializer(_class2.prototype, "_aabbHalfX", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "aabbHalfY", [_dec92, _dec93, _dec94], Object.getOwnPropertyDescriptor(_class2.prototype, "aabbHalfY"), _class2.prototype), _initializer25 = _applyDecoratedInitializer(_class2.prototype, "_aabbHalfY", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "aabbHalfZ", [_dec95, _dec96, _dec97], Object.getOwnPropertyDescriptor(_class2.prototype, "aabbHalfZ"), _class2.prototype), _initializer26 = _applyDecoratedInitializer(_class2.prototype, "_aabbHalfZ", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "dataCulling", [_dec98, _dec99], Object.getOwnPropertyDescriptor(_class2.prototype, "dataCulling"), _class2.prototype), _initializer27 = _applyDecoratedInitializer(_class2.prototype, "_dataCulling", [serializable, _dec100], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [override, _dec101, serializable, _dec102], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _initializer28 = _applyDecoratedInitializer(_class2.prototype, "_colorOverLifetimeModule", [_dec103], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "colorOverLifetimeModule", [_dec104, _dec105, _dec106], Object.getOwnPropertyDescriptor(_class2.prototype, "colorOverLifetimeModule"), _class2.prototype), _initializer29 = _applyDecoratedInitializer(_class2.prototype, "_shapeModule", [_dec107], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "shapeModule", [_dec108, _dec109, _dec110], Object.getOwnPropertyDescriptor(_class2.prototype, "shapeModule"), _class2.prototype), _initializer30 = _applyDecoratedInitializer(_class2.prototype, "_sizeOvertimeModule", [_dec111], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "sizeOvertimeModule", [_dec112, _dec113, _dec114], Object.getOwnPropertyDescriptor(_class2.prototype, "sizeOvertimeModule"), _class2.prototype), _initializer31 = _applyDecoratedInitializer(_class2.prototype, "_velocityOvertimeModule", [_dec115], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "velocityOvertimeModule", [_dec116, _dec117, _dec118], Object.getOwnPropertyDescriptor(_class2.prototype, "velocityOvertimeModule"), _class2.prototype), _initializer32 = _applyDecoratedInitializer(_class2.prototype, "_forceOvertimeModule", [_dec119], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "forceOvertimeModule", [_dec120, _dec121, _dec122], Object.getOwnPropertyDescriptor(_class2.prototype, "forceOvertimeModule"), _class2.prototype), _initializer33 = _applyDecoratedInitializer(_class2.prototype, "_limitVelocityOvertimeModule", [_dec123], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "limitVelocityOvertimeModule", [_dec124, _dec125, _dec126], Object.getOwnPropertyDescriptor(_class2.prototype, "limitVelocityOvertimeModule"), _class2.prototype), _initializer34 = _applyDecoratedInitializer(_class2.prototype, "_rotationOvertimeModule", [_dec127], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "rotationOvertimeModule", [_dec128, _dec129, _dec130], Object.getOwnPropertyDescriptor(_class2.prototype, "rotationOvertimeModule"), _class2.prototype), _initializer35 = _applyDecoratedInitializer(_class2.prototype, "_textureAnimationModule", [_dec131], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "textureAnimationModule", [_dec132, _dec133, _dec134], Object.getOwnPropertyDescriptor(_class2.prototype, "textureAnimationModule"), _class2.prototype), _initializer36 = _applyDecoratedInitializer(_class2.prototype, "_noiseModule", [_dec135], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "noiseModule", [_dec136, _dec137, _dec138], Object.getOwnPropertyDescriptor(_class2.prototype, "noiseModule"), _class2.prototype), _initializer37 = _applyDecoratedInitializer(_class2.prototype, "_trailModule", [_dec139], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "trailModule", [_dec140, _dec141, _dec142], Object.getOwnPropertyDescriptor(_class2.prototype, "trailModule"), _class2.prototype), _initializer38 = _applyDecoratedInitializer(_class2.prototype, "renderer", [_dec143, serializable, _dec144, _dec145], function () {
        return new ParticleSystemRenderer();
      }), _initializer39 = _applyDecoratedInitializer(_class2.prototype, "_prewarm", [serializable], function () {
        return false;
      }), _initializer40 = _applyDecoratedInitializer(_class2.prototype, "_capacity", [serializable], function () {
        return 100;
      }), _initializer41 = _applyDecoratedInitializer(_class2.prototype, "_simulationSpace", [serializable], function () {
        return Space.Local;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});