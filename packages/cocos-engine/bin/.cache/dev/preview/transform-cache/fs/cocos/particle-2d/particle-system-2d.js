System.register("q-bundled:///fs/cocos/particle-2d/particle-system-2d.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../2d/framework/ui-renderer.js", "../core/index.js", "./particle-simulator-2d.js", "../2d/assets/sprite-frame.js", "../asset/assets/image-asset.js", "./particle-asset.js", "../gfx/index.js", "./png-reader.js", "./tiff-reader.js", "../../external/compression/ZipUtils.js", "../asset/asset-manager/index.js", "./define.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, type, displayOrder, menu, executeInEditMode, serializable, playOnFocus, tooltip, visible, formerlySerializedAs, override, EDITOR, EDITOR_NOT_IN_PREVIEW, UIRenderer, Color, Vec2, warnID, errorID, error, path, Simulator, SpriteFrame, ImageAsset, ParticleAsset, BlendFactor, PNGReader, TiffReader, codec, assetManager, builtinResMgr, PositionType, EmitterMode, DURATION_INFINITY, START_RADIUS_EQUAL_TO_END_RADIUS, START_SIZE_EQUAL_TO_END_SIZE, ccwindow, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _initializer30, _initializer31, _initializer32, _initializer33, _initializer34, _initializer35, _initializer36, _initializer37, _initializer38, _initializer39, _initializer40, _initializer41, _initializer42, _initializer43, _class3, ImageFormat, ParticleSystem2D;
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
  function getImageFormatByData(imgData) {
    // if it is a png file buffer.
    if (imgData.length > 8 && imgData[0] === 0x89 && imgData[1] === 0x50 && imgData[2] === 0x4E && imgData[3] === 0x47 && imgData[4] === 0x0D && imgData[5] === 0x0A && imgData[6] === 0x1A && imgData[7] === 0x0A) {
      return ImageFormat.PNG;
    }

    // if it is a tiff file buffer.
    if (imgData.length > 2 && (imgData[0] === 0x49 && imgData[1] === 0x49 || imgData[0] === 0x4d && imgData[1] === 0x4d || imgData[0] === 0xff && imgData[1] === 0xd8)) {
      return ImageFormat.TIFF;
    }
    return ImageFormat.UNKNOWN;
  }
  function getParticleComponents(node) {
    var parent = node.parent;
    var comp = node.getComponent(ParticleSystem2D);
    if (!parent || !comp) {
      return node.getComponentsInChildren(ParticleSystem2D);
    }
    return getParticleComponents(parent);
  }

  /**
   * @en Particle System base class.
   * cocos2d also supports particles generated by Particle Designer (http://particledesigner.71squared.com/).
   * 'Radius Mode' in Particle Designer uses a fixed emit rate of 30 hz. Since that can't be guarateed in cocos2d,
   * cocos2d uses a another approach, but the results are almost identical.
   * cocos2d supports all the variables used by Particle Designer plus a bit more:
   *  - spinning particles (supported when using ParticleSystem)
   *  - tangential acceleration (Gravity mode)
   *  - radial acceleration (Gravity mode)
   *  - radius direction (Radius mode) (Particle Designer supports outwards to inwards direction only)
   * It is possible to customize any of the above mentioned properties in runtime. Example:
   * emitter.radialAccel = 15;
   * emitter.startSpin = 0;
   *
   * @zh 2D 粒子基础类型
   * cocos2d 同样支 Particle Designer (http://particledesigner.71squared.com/) 生成的粒子
   * 粒子设计器中的 半径模式 使用 30 hz 的固定发射率。由于 cocos2d 无法保证，
   * cocos2d 使用了另一种方法，但结果几乎相同。
   * cocos2d 支持 Particle Designer 使用的所有变量，还有：
   * -旋转粒子（使用粒子系统时支持）
   * -切向加速度（重力模式）
   * -径向加速度（重力模式）
   * -半径方向（半径模式）（Particle Designer 仅支持向外到向内的方向）
   * 可以在运行时自定义上述任何属性。例如：
   * emitter.radialAccel = 15;
   * emitter.startSpin = 0;
   *
   */
  _export({
    getImageFormatByData: getImageFormatByData,
    ImageFormat: void 0
  });
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      type = _coreDataDecoratorsIndexJs.type;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      playOnFocus = _coreDataDecoratorsIndexJs.playOnFocus;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      visible = _coreDataDecoratorsIndexJs.visible;
      formerlySerializedAs = _coreDataDecoratorsIndexJs.formerlySerializedAs;
      override = _coreDataDecoratorsIndexJs.override;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_dFrameworkUiRendererJs) {
      UIRenderer = _dFrameworkUiRendererJs.UIRenderer;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Vec2 = _coreIndexJs.Vec2;
      warnID = _coreIndexJs.warnID;
      errorID = _coreIndexJs.errorID;
      error = _coreIndexJs.error;
      path = _coreIndexJs.path;
    }, function (_particleSimulator2dJs) {
      Simulator = _particleSimulator2dJs.Simulator;
    }, function (_dAssetsSpriteFrameJs) {
      SpriteFrame = _dAssetsSpriteFrameJs.SpriteFrame;
    }, function (_assetAssetsImageAssetJs) {
      ImageAsset = _assetAssetsImageAssetJs.ImageAsset;
    }, function (_particleAssetJs) {
      ParticleAsset = _particleAssetJs.ParticleAsset;
    }, function (_gfxIndexJs) {
      BlendFactor = _gfxIndexJs.BlendFactor;
    }, function (_pngReaderJs) {
      PNGReader = _pngReaderJs.PNGReader;
    }, function (_tiffReaderJs) {
      TiffReader = _tiffReaderJs.TiffReader;
    }, function (_externalCompressionZipUtilsJs) {
      codec = _externalCompressionZipUtilsJs.default;
    }, function (_assetAssetManagerIndexJs) {
      assetManager = _assetAssetManagerIndexJs.assetManager;
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_defineJs) {
      PositionType = _defineJs.PositionType;
      EmitterMode = _defineJs.EmitterMode;
      DURATION_INFINITY = _defineJs.DURATION_INFINITY;
      START_RADIUS_EQUAL_TO_END_RADIUS = _defineJs.START_RADIUS_EQUAL_TO_END_RADIUS;
      START_SIZE_EQUAL_TO_END_SIZE = _defineJs.START_SIZE_EQUAL_TO_END_SIZE;
    }, function (_coreGlobalExportsJs) {
      ccwindow = _coreGlobalExportsJs.ccwindow;
    }],
    execute: function () {
      (function (ImageFormat) {
        ImageFormat[ImageFormat["JPG"] = 0] = "JPG";
        ImageFormat[ImageFormat["PNG"] = 1] = "PNG";
        ImageFormat[ImageFormat["TIFF"] = 2] = "TIFF";
        ImageFormat[ImageFormat["WEBP"] = 3] = "WEBP";
        ImageFormat[ImageFormat["PVR"] = 4] = "PVR";
        ImageFormat[ImageFormat["ETC"] = 5] = "ETC";
        ImageFormat[ImageFormat["S3TC"] = 6] = "S3TC";
        ImageFormat[ImageFormat["ATITC"] = 7] = "ATITC";
        ImageFormat[ImageFormat["TGA"] = 8] = "TGA";
        ImageFormat[ImageFormat["RAWDATA"] = 9] = "RAWDATA";
        ImageFormat[ImageFormat["UNKNOWN"] = 10] = "UNKNOWN";
      })(ImageFormat || _export("ImageFormat", ImageFormat = {}));
      _export("ParticleSystem2D", ParticleSystem2D = (_dec = ccclass('cc.ParticleSystem2D'), _dec2 = menu('Effects/ParticleSystem2D'), _dec3 = displayOrder(6), _dec4 = tooltip('i18n:particle_system.custom'), _dec5 = type(ParticleAsset), _dec6 = displayOrder(5), _dec7 = tooltip('i18n:particle_system.file'), _dec8 = type(SpriteFrame), _dec9 = tooltip('i18n:particle_system.spriteFrame'), _dec10 = tooltip('i18n:particle_system.totalParticles'), _dec11 = tooltip('i18n:particle_system.duration'), _dec12 = tooltip('i18n:particle_system.emissionRate'), _dec13 = tooltip('i18n:particle_system.life'), _dec14 = tooltip('i18n:particle_system.lifeVar'), _dec15 = tooltip('i18n:particle_system.startColor'), _dec16 = tooltip('i18n:particle_system.startColorVar'), _dec17 = visible(function () {
        return false;
      }), _dec18 = tooltip('i18n:particle_system.endColor'), _dec19 = tooltip('i18n:particle_system.endColorVar'), _dec20 = tooltip('i18n:particle_system.angle'), _dec21 = tooltip('i18n:particle_system.angleVar'), _dec22 = tooltip('i18n:particle_system.startSize'), _dec23 = tooltip('i18n:particle_system.startSizeVar'), _dec24 = tooltip('i18n:particle_system.endSize'), _dec25 = tooltip('i18n:particle_system.endSizeVar'), _dec26 = tooltip('i18n:particle_system.startSpin'), _dec27 = tooltip('i18n:particle_system.startSpinVar'), _dec28 = tooltip('i18n:particle_system.endSpin'), _dec29 = tooltip('i18n:particle_system.endSpinVar'), _dec30 = tooltip('i18n:particle_system.posVar'), _dec31 = type(PositionType), _dec32 = tooltip('i18n:particle_system.positionType'), _dec33 = displayOrder(2), _dec34 = tooltip('i18n:particle_system.preview'), _dec35 = type(EmitterMode), _dec36 = tooltip('i18n:particle_system.emitterMode'), _dec37 = tooltip('i18n:particle_system.gravity'), _dec38 = tooltip('i18n:particle_system.speed'), _dec39 = tooltip('i18n:particle_system.speedVar'), _dec40 = tooltip('i18n:particle_system.tangentialAccel'), _dec41 = tooltip('i18n:particle_system.tangentialAccelVar'), _dec42 = tooltip('i18n:particle_system.radialAccel'), _dec43 = tooltip('i18n:particle_system.radialAccelVar'), _dec44 = tooltip('i18n:particle_system.rotationIsDir'), _dec45 = tooltip('i18n:particle_system.startRadius'), _dec46 = tooltip('i18n:particle_system.startRadiusVar'), _dec47 = tooltip('i18n:particle_system.endRadius'), _dec48 = tooltip('i18n:particle_system.endRadiusVar'), _dec49 = tooltip('i18n:particle_system.rotatePerS'), _dec50 = tooltip('i18n:particle_system.rotatePerSVar'), _dec51 = displayOrder(3), _dec52 = tooltip('i18n:particle_system.playOnLoad'), _dec53 = displayOrder(4), _dec54 = tooltip('i18n:particle_system.autoRemoveOnFinish'), _dec55 = formerlySerializedAs('preview'), _dec(_class = _dec2(_class = playOnFocus(_class = executeInEditMode(_class = (_class2 = (_class3 = /*#__PURE__*/function (_UIRenderer) {
        _inheritsLoose(ParticleSystem2D, _UIRenderer);
        function ParticleSystem2D() {
          var _this;
          _this = _UIRenderer.call(this) || this;
          /**
           * @en How many seconds the emitter wil run. -1 means 'forever'.
           * @zh 发射器生存时间，单位秒，-1表示持续发射。
           */
          _this.duration = _initializer && _initializer();
          /**
           * @en Emission rate of the particles.
           * @zh 每秒发射的粒子数目。
           */
          _this.emissionRate = _initializer2 && _initializer2();
          /**
           * @en Life of each particle setter.
           * @zh 粒子的运行时间。
           */
          _this.life = _initializer3 && _initializer3();
          /**
           * @en Variation of life.
           * @zh 粒子的运行时间变化范围。
           */
          _this.lifeVar = _initializer4 && _initializer4();
          /**
           * @en Angle of each particle setter.
           * @zh 粒子角度。
           */
          _this.angle = _initializer5 && _initializer5();
          /**
           * @en Variation of angle of each particle setter.
           * @zh 粒子角度变化范围。
           */
          _this.angleVar = _initializer6 && _initializer6();
          /**
           * @en Start size in pixels of each particle.
           * @zh 粒子的初始大小。
           */
          _this.startSize = _initializer7 && _initializer7();
          /**
           * @en Variation of start size in pixels.
           * @zh 粒子初始大小的变化范围。
           */
          _this.startSizeVar = _initializer8 && _initializer8();
          /**
           * @en End size in pixels of each particle.
           * @zh 粒子结束时的大小。
           */
          _this.endSize = _initializer9 && _initializer9();
          /**
           * @en Variation of end size in pixels.
           * @zh 粒子结束大小的变化范围。
           */
          _this.endSizeVar = _initializer10 && _initializer10();
          /**
           * @en Start angle of each particle.
           * @zh 粒子开始自旋角度。
           */
          _this.startSpin = _initializer11 && _initializer11();
          /**
           * @en Variation of start angle.
           * @zh 粒子开始自旋角度变化范围。
           */
          _this.startSpinVar = _initializer12 && _initializer12();
          /**
           * @en End angle of each particle.
           * @zh 粒子结束自旋角度。
           */
          _this.endSpin = _initializer13 && _initializer13();
          /**
           * @en Variation of end angle.
           * @zh 粒子结束自旋角度变化范围。
           */
          _this.endSpinVar = _initializer14 && _initializer14();
          /**
           * @en Source position of the emitter.
           * @zh 发射器位置。
           */
          _this.sourcePos = _initializer15 && _initializer15();
          /**
           * @en Variation of source position.
           * @zh 发射器位置的变化范围。（横向和纵向）
           */
          _this.posVar = _initializer16 && _initializer16();
          /**
           * @en Particles emitter modes.
           * @zh 发射器类型。
           */
          _this.emitterMode = _initializer17 && _initializer17();
          // GRAVITY MODE
          /**
           * @en Gravity of the emitter.
           * @zh 重力。
           */
          _this.gravity = _initializer18 && _initializer18();
          /**
           * @en Speed of the emitter.
           * @zh 速度。
           */
          _this.speed = _initializer19 && _initializer19();
          /**
           * @en Variation of the speed.
           * @zh 速度变化范围。
           */
          _this.speedVar = _initializer20 && _initializer20();
          /**
           * @en Tangential acceleration of each particle. Only available in 'Gravity' mode.
           * @zh 每个粒子的切向加速度，即垂直于重力方向的加速度，只有在重力模式下可用。
           */
          _this.tangentialAccel = _initializer21 && _initializer21();
          /**
           * @en Variation of the tangential acceleration.
           * @zh 每个粒子的切向加速度变化范围。
           */
          _this.tangentialAccelVar = _initializer22 && _initializer22();
          /**
           * @en Acceleration of each particle. Only available in 'Gravity' mode.
           * @zh 粒子径向加速度，即平行于重力方向的加速度，只有在重力模式下可用。
           */
          _this.radialAccel = _initializer23 && _initializer23();
          /**
           * @en Variation of the radial acceleration.
           * @zh 粒子径向加速度变化范围。
           */
          _this.radialAccelVar = _initializer24 && _initializer24();
          /**
           * @en Indicate whether the rotation of each particle equals to its direction. Only available in 'Gravity' mode.
           * @zh 每个粒子的旋转是否等于其方向，只有在重力模式下可用。
           */
          _this.rotationIsDir = _initializer25 && _initializer25();
          // RADIUS MODE
          /**
           * @en Starting radius of the particles. Only available in 'Radius' mode.
           * @zh 初始半径，表示粒子出生时相对发射器的距离，只有在半径模式下可用。
           */
          _this.startRadius = _initializer26 && _initializer26();
          /**
           * @en Variation of the starting radius.
           * @zh 初始半径变化范围。
           */
          _this.startRadiusVar = _initializer27 && _initializer27();
          /**
           * @en Ending radius of the particles. Only available in 'Radius' mode.
           * @zh 结束半径，只有在半径模式下可用。
           */
          _this.endRadius = _initializer28 && _initializer28();
          /**
           * @en Variation of the ending radius.
           * @zh 结束半径变化范围。
           */
          _this.endRadiusVar = _initializer29 && _initializer29();
          /**
           * @en Number of degrees to rotate a particle around the source pos per second. Only available in 'Radius' mode.
           * @zh 粒子每秒围绕起始点的旋转角度，只有在半径模式下可用。
           */
          _this.rotatePerS = _initializer30 && _initializer30();
          /**
           * @en Variation of the degrees to rotate a particle around the source pos per second.
           * @zh 粒子每秒围绕起始点的旋转角度变化范围。
           */
          _this.rotatePerSVar = _initializer31 && _initializer31();
          _this.aspectRatio = 1;
          /**
           * @en If set to true, the particle system will automatically start playing on onLoad.
           * @zh 如果设置为 true 运行时会自动发射粒子。
           */
          _this.playOnLoad = _initializer32 && _initializer32();
          /**
           * @en Indicate whether the owner node will be auto-removed when it has no particles left.
           * @zh 粒子播放完毕后自动销毁所在的节点。
           */
          _this.autoRemoveOnFinish = _initializer33 && _initializer33();
          /**
           * @en Play particle in edit mode.
           * @zh 在编辑器模式下预览粒子，启用后选中粒子时，粒子将自动播放。
           */
          _this._preview = _initializer34 && _initializer34();
          _this._custom = _initializer35 && _initializer35();
          _this._file = _initializer36 && _initializer36();
          _this._spriteFrame = _initializer37 && _initializer37();
          _this._totalParticles = _initializer38 && _initializer38();
          _this._startColor = _initializer39 && _initializer39();
          _this._startColorVar = _initializer40 && _initializer40();
          _this._endColor = _initializer41 && _initializer41();
          _this._endColorVar = _initializer42 && _initializer42();
          _this._positionType = _initializer43 && _initializer43();
          _this._stopped = true;
          _this._useFile = void 0;
          _this.initProperties();
          _this._useFile = false;
          return _this;
        }
        var _proto = ParticleSystem2D.prototype;
        _proto.onEnable = function onEnable() {
          _UIRenderer.prototype.onEnable.call(this);
          this._updateMaterial();
          this._updatePositionType();
        };
        _proto.onDestroy = function onDestroy() {
          _UIRenderer.prototype.onDestroy.call(this);
          if (this.autoRemoveOnFinish) {
            this.autoRemoveOnFinish = false; // already removed
          }

          // reset uv data so next time simulator will refill buffer uv info when exit edit mode from prefab.
          this._simulator.uvFilled = 0;
          if (this._simulator.renderData && this._assembler) {
            this._assembler.removeData(this._simulator.renderData);
          }
        };
        _proto.initProperties = function initProperties() {
          this._previewTimer = null;
          this._focused = false;
          this.aspectRatio = 1;
          this._simulator = new Simulator(this);
        };
        _proto.onFocusInEditor = function onFocusInEditor() {
          this._focused = true;
          var components = getParticleComponents(this.node);
          for (var i = 0; i < components.length; ++i) {
            components[i]._startPreview();
          }
        };
        _proto.onLostFocusInEditor = function onLostFocusInEditor() {
          this._focused = false;
          var components = getParticleComponents(this.node);
          for (var i = 0; i < components.length; ++i) {
            components[i]._stopPreview();
          }
        };
        _proto._startPreview = function _startPreview() {
          if (this._preview) {
            this.resetSystem();
          }
        };
        _proto._stopPreview = function _stopPreview() {
          if (this._preview) {
            this.resetSystem();
            this.stopSystem();
          }
          if (this._previewTimer) {
            clearInterval(this._previewTimer);
          }
        };
        _proto.__preload = function __preload() {
          _UIRenderer.prototype.__preload.call(this);
          if (this._custom && this.spriteFrame && !this._renderSpriteFrame) {
            this._applySpriteFrame();
          } else if (this._file) {
            if (this._custom) {
              var missCustomTexture = !this._getTexture();
              if (missCustomTexture) {
                this._applyFile();
              }
            } else {
              this._applyFile();
            }
          }

          // auto play
          if (!EDITOR_NOT_IN_PREVIEW) {
            if (this.playOnLoad) {
              this.resetSystem();
            }
          }
        };
        _proto._flushAssembler = function _flushAssembler() {
          var assembler = ParticleSystem2D.Assembler.getAssembler(this);
          if (this._assembler !== assembler) {
            this._assembler = assembler;
          }
          if (this._assembler && this._assembler.createData) {
            this._simulator.renderData = this._assembler.createData(this);
            this._simulator.renderData.particleInitRenderDrawInfo(this.renderEntity); // 确保 renderEntity 和 renderData 都是 simulator 上的
            this._simulator.initDrawInfo();
          }
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          if (!this._simulator.finished) {
            this._simulator.step(dt);
          }
        }

        // APIS

        /**
         * @en Add a particle to the emitter.
         * @zh 添加一个粒子到发射器中。
         * @return {Boolean}
         */;
        _proto.addParticle = function addParticle() {
          // Not implemented
        }

        /**
         * @en Stop emitting particles. Running particles will continue to run until they die.
         * @zh 停止发射器发射粒子，发射出去的粒子将继续运行，直至粒子生命结束。
         * @example
         * // stop particle system.
         * myParticleSystem.stopSystem();
         */;
        _proto.stopSystem = function stopSystem() {
          this._stopped = true;
          this._simulator.stop();
        }

        /**
         * @en Kill all living particles.
         * @zh 杀死所有存在的粒子，然后重新启动粒子发射器。
         * @example
         * // play particle system.
         * myParticleSystem.resetSystem();
         */;
        _proto.resetSystem = function resetSystem() {
          this._stopped = false;
          this._simulator.reset();
          this.markForUpdateRenderData();
        }

        /**
         * @en Whether or not the system is full.
         * @zh 发射器中粒子是否大于等于设置的总粒子数量。
         * @return {Boolean}
         */;
        _proto.isFull = function isFull() {
          return this.particleCount >= this.totalParticles;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._applyFile = function _applyFile() {
          var file = this._file;
          if (file) {
            if (!file) {
              errorID(6029);
              return;
            }
            if (!this.isValid) {
              return;
            }
            this._plistFile = file.nativeUrl;
            if (!this._custom) {
              var isDiffFrame = this._spriteFrame !== file.spriteFrame;
              if (isDiffFrame) this.spriteFrame = file.spriteFrame;
              this._initWithDictionary(file._nativeAsset);
            }
            if (!this._spriteFrame) {
              if (file.spriteFrame) {
                this.spriteFrame = file.spriteFrame;
              } else if (this._custom) {
                this._initTextureWithDictionary(file._nativeAsset);
              }
            } else if (!this._renderSpriteFrame && this._spriteFrame) {
              this._applySpriteFrame();
            }
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._initTextureWithDictionary = function _initTextureWithDictionary(dict) {
          var _this2 = this;
          if (dict.spriteFrameUuid) {
            var spriteFrameUuid = dict.spriteFrameUuid;
            assetManager.loadAny(spriteFrameUuid, function (err, spriteFrame) {
              if (err) {
                dict.spriteFrameUuid = undefined;
                _this2._initTextureWithDictionary(dict);
                error(err);
              } else {
                _this2.spriteFrame = spriteFrame;
              }
            });
          } else {
            // texture
            var imgPath = path.changeBasename(this._plistFile, dict.textureFileName || '');
            if (dict.textureFileName) {
              // Try to get the texture from the cache
              assetManager.loadRemote(imgPath, function (err, imageAsset) {
                if (err) {
                  dict.textureFileName = undefined;
                  _this2._initTextureWithDictionary(dict);
                  error(err);
                } else {
                  // eslint-disable-next-line no-lonely-if
                  if (imageAsset) {
                    _this2.spriteFrame = SpriteFrame.createWithImage(imageAsset);
                  } else {
                    _this2.spriteFrame = SpriteFrame.createWithImage(builtinResMgr.get('white-texture'));
                  }
                }
              });
            } else if (dict.textureImageData) {
              var textureData = dict.textureImageData;
              if (textureData && textureData.length > 0) {
                var imgPathName = imgPath;
                if (this.file) {
                  imgPathName += "-" + this.file.uuid;
                }
                var imageAsset = assetManager.assets.get(imgPathName);
                if (!imageAsset) {
                  var buffer = codec.unzipBase64AsArray(textureData, 1);
                  if (!buffer) {
                    warnID(6030, this._file.name);
                    return false;
                  }
                  var imageFormat = getImageFormatByData(buffer);
                  if (imageFormat !== ImageFormat.TIFF && imageFormat !== ImageFormat.PNG) {
                    warnID(6031, this._file.name);
                    return false;
                  }
                  var canvasObj = ccwindow.document.createElement('canvas');
                  if (imageFormat === ImageFormat.PNG) {
                    var myPngObj = new PNGReader(buffer);
                    myPngObj.render(canvasObj);
                  } else {
                    if (!this._tiffReader) {
                      this._tiffReader = new TiffReader();
                    }
                    this._tiffReader.parseTIFF(buffer, canvasObj);
                  }
                  imageAsset = new ImageAsset(canvasObj);
                  assetManager.assets.add(imgPathName, imageAsset);
                }
                if (!imageAsset) {
                  warnID(6032, this._file.name);
                }
                // TODO: Use cc.assetManager to load asynchronously the SpriteFrame object, avoid using textureUtil
                if (imageAsset) {
                  this.spriteFrame = SpriteFrame.createWithImage(imageAsset);
                } else {
                  this.spriteFrame = SpriteFrame.createWithImage(builtinResMgr.get('white-texture'));
                }
              } else {
                return false;
              }
            }
          }
          return true;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._initWithDictionary = function _initWithDictionary(dict) {
          this._useFile = true;
          this.totalParticles = parseInt(dict.maxParticles || 0);

          // life span
          this.life = parseFloat(dict.particleLifespan || 0);
          this.lifeVar = parseFloat(dict.particleLifespanVariance || 0);

          // emission Rate
          var _tempEmissionRate = dict.emissionRate;
          if (_tempEmissionRate) {
            this.emissionRate = _tempEmissionRate;
          } else {
            this.emissionRate = Math.min(this.totalParticles / this.life, Number.MAX_VALUE);
          }

          // duration
          this.duration = parseFloat(dict.duration || 0);

          // blend function // remove when component remove blend function
          this._srcBlendFactor = parseInt(dict.blendFuncSource || BlendFactor.SRC_ALPHA);
          this._dstBlendFactor = parseInt(dict.blendFuncDestination || BlendFactor.ONE_MINUS_SRC_ALPHA);

          // color
          var locStartColor = this._startColor;
          locStartColor.r = parseFloat(dict.startColorRed || 0) * 255;
          locStartColor.g = parseFloat(dict.startColorGreen || 0) * 255;
          locStartColor.b = parseFloat(dict.startColorBlue || 0) * 255;
          locStartColor.a = parseFloat(dict.startColorAlpha || 0) * 255;
          var locStartColorVar = this._startColorVar;
          locStartColorVar.r = parseFloat(dict.startColorVarianceRed || 0) * 255;
          locStartColorVar.g = parseFloat(dict.startColorVarianceGreen || 0) * 255;
          locStartColorVar.b = parseFloat(dict.startColorVarianceBlue || 0) * 255;
          locStartColorVar.a = parseFloat(dict.startColorVarianceAlpha || 0) * 255;
          var locEndColor = this._endColor;
          locEndColor.r = parseFloat(dict.finishColorRed || 0) * 255;
          locEndColor.g = parseFloat(dict.finishColorGreen || 0) * 255;
          locEndColor.b = parseFloat(dict.finishColorBlue || 0) * 255;
          locEndColor.a = parseFloat(dict.finishColorAlpha || 0) * 255;
          var locEndColorVar = this._endColorVar;
          locEndColorVar.r = parseFloat(dict.finishColorVarianceRed || 0) * 255;
          locEndColorVar.g = parseFloat(dict.finishColorVarianceGreen || 0) * 255;
          locEndColorVar.b = parseFloat(dict.finishColorVarianceBlue || 0) * 255;
          locEndColorVar.a = parseFloat(dict.finishColorVarianceAlpha || 0) * 255;

          // particle size
          this.startSize = parseFloat(dict.startParticleSize || 0);
          this.startSizeVar = parseFloat(dict.startParticleSizeVariance || 0);
          this.endSize = parseFloat(dict.finishParticleSize || 0);
          this.endSizeVar = parseFloat(dict.finishParticleSizeVariance || 0);

          // position
          // Make empty positionType value and old version compatible
          this.positionType = parseFloat(dict.positionType !== undefined ? dict.positionType : PositionType.FREE);
          // for
          this.sourcePos.set(0, 0);
          this.posVar.set(parseFloat(dict.sourcePositionVariancex || 0), parseFloat(dict.sourcePositionVariancey || 0));
          // angle
          this.angle = parseFloat(dict.angle || 0);
          this.angleVar = parseFloat(dict.angleVariance || 0);

          // Spinning
          this.startSpin = parseFloat(dict.rotationStart || 0);
          this.startSpinVar = parseFloat(dict.rotationStartVariance || 0);
          this.endSpin = parseFloat(dict.rotationEnd || 0);
          this.endSpinVar = parseFloat(dict.rotationEndVariance || 0);
          this.emitterMode = parseInt(dict.emitterType || EmitterMode.GRAVITY);

          // Mode A: Gravity + tangential accel + radial accel
          if (this.emitterMode === EmitterMode.GRAVITY) {
            // gravity
            this.gravity.set(parseFloat(dict.gravityx || 0), parseFloat(dict.gravityy || 0));
            // speed
            this.speed = parseFloat(dict.speed || 0);
            this.speedVar = parseFloat(dict.speedVariance || 0);

            // radial acceleration
            this.radialAccel = parseFloat(dict.radialAcceleration || 0);
            this.radialAccelVar = parseFloat(dict.radialAccelVariance || 0);

            // tangential acceleration
            this.tangentialAccel = parseFloat(dict.tangentialAcceleration || 0);
            this.tangentialAccelVar = parseFloat(dict.tangentialAccelVariance || 0);

            // rotation is dir
            var locRotationIsDir = dict.rotationIsDir || '';
            if (locRotationIsDir !== null) {
              locRotationIsDir = locRotationIsDir.toString().toLowerCase();
              this.rotationIsDir = locRotationIsDir === 'true' || locRotationIsDir === '1';
            } else {
              this.rotationIsDir = false;
            }
          } else if (this.emitterMode === EmitterMode.RADIUS) {
            // or Mode B: radius movement
            this.startRadius = parseFloat(dict.maxRadius || 0);
            this.startRadiusVar = parseFloat(dict.maxRadiusVariance || 0);
            this.endRadius = parseFloat(dict.minRadius || 0);
            this.endRadiusVar = parseFloat(dict.minRadiusVariance || 0);
            this.rotatePerS = parseFloat(dict.rotatePerSecond || 0);
            this.rotatePerSVar = parseFloat(dict.rotatePerSecondVariance || 0);
          } else {
            warnID(6009);
            return false;
          }
          this._initTextureWithDictionary(dict);
          return true;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._syncAspect = function _syncAspect() {
          if (this._renderSpriteFrame) {
            var frameRect = this._renderSpriteFrame.rect;
            this.aspectRatio = frameRect.width / frameRect.height;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._applySpriteFrame = function _applySpriteFrame() {
          this._renderSpriteFrame = this._renderSpriteFrame || this._spriteFrame;
          if (this._renderSpriteFrame) {
            if (this._renderSpriteFrame.texture) {
              if (this._simulator) {
                this._simulator.updateUVs(true);
              }
              this._syncAspect();
              this._updateMaterial();
              this._stopped = false;
              this.markForUpdateRenderData();
            }
          } else {
            this.resetSystem();
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._getTexture = function _getTexture() {
          return this._renderSpriteFrame && this._renderSpriteFrame.texture;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._updateMaterial = function _updateMaterial() {
          if (this._customMaterial) {
            this.setSharedMaterial(this._customMaterial, 0);
            var target = this.getRenderMaterial(0).passes[0].blendState.targets[0];
            this._dstBlendFactor = target.blendDst;
            this._srcBlendFactor = target.blendSrc;
          }
          var mat = this.getMaterialInstance(0);
          if (mat) mat.recompileShaders({
            USE_LOCAL: this._positionType !== PositionType.FREE
          });
          if (mat && mat.passes.length > 0) {
            this._updateBlendFunc();
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._finishedSimulation = function _finishedSimulation() {
          if (EDITOR_NOT_IN_PREVIEW) {
            if (this._preview && this._focused && !this.active /* && !cc.engine.isPlaying */) {
              this.resetSystem();
            }
            return;
          }
          this.resetSystem();
          this.stopSystem();
          this.markForUpdateRenderData();
          if (this.autoRemoveOnFinish && this._stopped) {
            this.node.destroy();
          }
        };
        _proto._canRender = function _canRender() {
          return _UIRenderer.prototype._canRender.call(this) && !this._stopped && this._renderSpriteFrame !== null && this._renderSpriteFrame !== undefined;
        };
        _proto._render = function _render(render) {
          if (this._positionType === PositionType.RELATIVE) {
            render.commitComp(this, this._simulator.renderData, this._renderSpriteFrame, this._assembler, this.node.parent);
          } else if (this.positionType === PositionType.GROUPED) {
            render.commitComp(this, this._simulator.renderData, this._renderSpriteFrame, this._assembler, this.node);
          } else {
            render.commitComp(this, this._simulator.renderData, this._renderSpriteFrame, this._assembler, null);
          }
        };
        _proto._updatePositionType = function _updatePositionType() {
          if (this._positionType === PositionType.RELATIVE) {
            this._renderEntity.setRenderTransform(this.node.parent);
            this._renderEntity.setUseLocal(true);
          } else if (this.positionType === PositionType.GROUPED) {
            this._renderEntity.setRenderTransform(this.node);
            this._renderEntity.setUseLocal(true);
          } else {
            this._renderEntity.setRenderTransform(null);
            this._renderEntity.setUseLocal(false);
          }
        };
        _createClass(ParticleSystem2D, [{
          key: "custom",
          get:
          /**
           * @en If set custom to true, then use custom properties instead of read particle file.
           * @zh 是否自定义粒子属性。
           */
          function get() {
            return this._custom;
          },
          set: function set(value) {
            if (EDITOR_NOT_IN_PREVIEW && !value && !this._file) {
              warnID(6000);
              return;
            }
            if (this._custom !== value) {
              this._custom = value;
              this._applyFile();
              this._updateMaterial();
            }
          }

          /**
           * @en The plist file.
           * @zh plist 格式的粒子配置文件。
           */
        }, {
          key: "file",
          get: function get() {
            return this._file;
          },
          set: function set(value) {
            if (this._file !== value) {
              this._file = value;
              if (value) {
                this._applyFile();
              } else {
                this.custom = true;
              }
            }
          }

          /**
           * @en SpriteFrame used for particles display
           * @zh 用于粒子呈现的 SpriteFrame
           */
        }, {
          key: "spriteFrame",
          get: function get() {
            return this._spriteFrame;
          },
          set: function set(value) {
            var lastSprite = this._renderSpriteFrame;
            if (lastSprite === value) {
              return;
            }
            this._renderSpriteFrame = value;
            if (!value || value._uuid) {
              this._spriteFrame = value;
            }
            this._applySpriteFrame();
            if (EDITOR) {
              this.node.emit('spriteframe-changed', this);
            }
          }

          /**
           * @en Current quantity of particles that are being simulated.
           * @zh 当前播放的粒子数量。
           * @readonly
           */
        }, {
          key: "particleCount",
          get: function get() {
            return this._simulator.particles.length;
          }

          /**
           * @en Maximum particles of the system.
           * @zh 粒子最大数量。
           */
        }, {
          key: "totalParticles",
          get: function get() {
            return this._totalParticles;
          },
          set: function set(value) {
            if (this._totalParticles === value) return;
            this._totalParticles = value;
          }
        }, {
          key: "startColor",
          get:
          /**
           * @en Start color of each particle.
           * @zh 粒子初始颜色。
           */
          function get() {
            return this._startColor;
          },
          set: function set(val) {
            this._startColor.r = val.r;
            this._startColor.g = val.g;
            this._startColor.b = val.b;
            this._startColor.a = val.a;
          }

          /**
           * @en Variation of the start color.
           * @zh 粒子初始颜色变化范围。
           */
        }, {
          key: "startColorVar",
          get: function get() {
            return this._startColorVar;
          },
          set: function set(val) {
            this._startColorVar.r = val.r;
            this._startColorVar.g = val.g;
            this._startColorVar.b = val.b;
            this._startColorVar.a = val.a;
          }
        }, {
          key: "color",
          get: function get() {
            return this._color;
          }

          /**
           * @en Ending color of each particle.
           * @zh 粒子结束颜色。
           */,
          set: function set(value) {}
        }, {
          key: "endColor",
          get: function get() {
            return this._endColor;
          },
          set: function set(val) {
            this._endColor.r = val.r;
            this._endColor.g = val.g;
            this._endColor.b = val.b;
            this._endColor.a = val.a;
          }

          /**
           * @en Variation of the end color.
           * @zh 粒子结束颜色变化范围。
           */
        }, {
          key: "endColorVar",
          get: function get() {
            return this._endColorVar;
          },
          set: function set(val) {
            this._endColorVar.r = val.r;
            this._endColorVar.g = val.g;
            this._endColorVar.b = val.b;
            this._endColorVar.a = val.a;
          }
        }, {
          key: "positionType",
          get:
          /**
           * @en Particles movement type.
           * @zh 粒子位置类型。
           */
          function get() {
            return this._positionType;
          },
          set: function set(val) {
            this._positionType = val;
            this._updateMaterial();
            this._updatePositionType();
          }

          /**
           * @en Preview particle system effect.
           * @ch 查看粒子效果
           */
        }, {
          key: "preview",
          get: function get() {
            return this._preview;
          },
          set: function set(val) {
            if (val) {
              this._startPreview();
            } else {
              this._stopPreview();
            }
            this._preview = val;
          }
        }, {
          key: "stopped",
          get:
          /**
           * @en Indicate whether the system simulation have stopped.
           * @zh 指示粒子播放是否完毕。
           */
          function get() {
            return this._stopped;
          }

          /**
           * @en Indicate whether the particle system is activated.
           * @zh 是否激活粒子。
           * @readonly
           */
        }, {
          key: "active",
          get: function get() {
            return this._simulator.active;
          }
        }, {
          key: "assembler",
          get: function get() {
            return this._assembler;
          }
        }]);
        return ParticleSystem2D;
      }(UIRenderer), _class3.EmitterMode = EmitterMode, _class3.PositionType = PositionType, _class3.DURATION_INFINITY = DURATION_INFINITY, _class3.START_SIZE_EQUAL_TO_END_SIZE = START_SIZE_EQUAL_TO_END_SIZE, _class3.START_RADIUS_EQUAL_TO_END_RADIUS = START_RADIUS_EQUAL_TO_END_RADIUS, _class3), (_applyDecoratedDescriptor(_class2.prototype, "custom", [editable, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "custom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "file", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "file"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "totalParticles", [editable, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "totalParticles"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "duration", [serializable, editable, _dec11], function () {
        return -1;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "emissionRate", [serializable, editable, _dec12], function () {
        return 10;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "life", [serializable, editable, _dec13], function () {
        return 1;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "lifeVar", [serializable, editable, _dec14], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "startColor", [editable, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "startColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "startColorVar", [editable, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "startColorVar"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "color", [override, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "endColor", [editable, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "endColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "endColorVar", [editable, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "endColorVar"), _class2.prototype), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "angle", [serializable, editable, _dec20], function () {
        return 90;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "angleVar", [serializable, editable, _dec21], function () {
        return 20;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "startSize", [serializable, editable, _dec22], function () {
        return 50;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "startSizeVar", [serializable, editable, _dec23], function () {
        return 0;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "endSize", [serializable, editable, _dec24], function () {
        return 0;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "endSizeVar", [serializable, editable, _dec25], function () {
        return 0;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "startSpin", [serializable, editable, _dec26], function () {
        return 0;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "startSpinVar", [serializable, editable, _dec27], function () {
        return 0;
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "endSpin", [serializable, editable, _dec28], function () {
        return 0;
      }), _initializer14 = _applyDecoratedInitializer(_class2.prototype, "endSpinVar", [serializable, editable, _dec29], function () {
        return 0;
      }), _initializer15 = _applyDecoratedInitializer(_class2.prototype, "sourcePos", [serializable], function () {
        return Vec2.ZERO.clone();
      }), _initializer16 = _applyDecoratedInitializer(_class2.prototype, "posVar", [serializable, editable, _dec30], function () {
        return Vec2.ZERO.clone();
      }), _applyDecoratedDescriptor(_class2.prototype, "positionType", [_dec31, _dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "positionType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "preview", [editable, _dec33, _dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "preview"), _class2.prototype), _initializer17 = _applyDecoratedInitializer(_class2.prototype, "emitterMode", [serializable, editable, _dec35, _dec36], function () {
        return EmitterMode.GRAVITY;
      }), _initializer18 = _applyDecoratedInitializer(_class2.prototype, "gravity", [serializable, editable, _dec37], function () {
        return Vec2.ZERO.clone();
      }), _initializer19 = _applyDecoratedInitializer(_class2.prototype, "speed", [serializable, editable, _dec38], function () {
        return 180;
      }), _initializer20 = _applyDecoratedInitializer(_class2.prototype, "speedVar", [serializable, editable, _dec39], function () {
        return 50;
      }), _initializer21 = _applyDecoratedInitializer(_class2.prototype, "tangentialAccel", [serializable, editable, _dec40], function () {
        return 80;
      }), _initializer22 = _applyDecoratedInitializer(_class2.prototype, "tangentialAccelVar", [serializable, editable, _dec41], function () {
        return 0;
      }), _initializer23 = _applyDecoratedInitializer(_class2.prototype, "radialAccel", [serializable, editable, _dec42], function () {
        return 0;
      }), _initializer24 = _applyDecoratedInitializer(_class2.prototype, "radialAccelVar", [serializable, editable, _dec43], function () {
        return 0;
      }), _initializer25 = _applyDecoratedInitializer(_class2.prototype, "rotationIsDir", [serializable, editable, _dec44], function () {
        return false;
      }), _initializer26 = _applyDecoratedInitializer(_class2.prototype, "startRadius", [serializable, editable, _dec45], function () {
        return 0;
      }), _initializer27 = _applyDecoratedInitializer(_class2.prototype, "startRadiusVar", [serializable, editable, _dec46], function () {
        return 0;
      }), _initializer28 = _applyDecoratedInitializer(_class2.prototype, "endRadius", [serializable, editable, _dec47], function () {
        return 0;
      }), _initializer29 = _applyDecoratedInitializer(_class2.prototype, "endRadiusVar", [serializable, editable, _dec48], function () {
        return 0;
      }), _initializer30 = _applyDecoratedInitializer(_class2.prototype, "rotatePerS", [serializable, editable, _dec49], function () {
        return 0;
      }), _initializer31 = _applyDecoratedInitializer(_class2.prototype, "rotatePerSVar", [serializable, editable, _dec50], function () {
        return 0;
      }), _initializer32 = _applyDecoratedInitializer(_class2.prototype, "playOnLoad", [serializable, editable, _dec51, _dec52], function () {
        return true;
      }), _initializer33 = _applyDecoratedInitializer(_class2.prototype, "autoRemoveOnFinish", [serializable, editable, _dec53, _dec54], function () {
        return false;
      }), _initializer34 = _applyDecoratedInitializer(_class2.prototype, "_preview", [_dec55], function () {
        return true;
      }), _initializer35 = _applyDecoratedInitializer(_class2.prototype, "_custom", [serializable], function () {
        return false;
      }), _initializer36 = _applyDecoratedInitializer(_class2.prototype, "_file", [serializable], function () {
        return null;
      }), _initializer37 = _applyDecoratedInitializer(_class2.prototype, "_spriteFrame", [serializable], function () {
        return null;
      }), _initializer38 = _applyDecoratedInitializer(_class2.prototype, "_totalParticles", [serializable], function () {
        return 150;
      }), _initializer39 = _applyDecoratedInitializer(_class2.prototype, "_startColor", [serializable], function () {
        return new Color(255, 255, 255, 255);
      }), _initializer40 = _applyDecoratedInitializer(_class2.prototype, "_startColorVar", [serializable], function () {
        return new Color(0, 0, 0, 0);
      }), _initializer41 = _applyDecoratedInitializer(_class2.prototype, "_endColor", [serializable], function () {
        return new Color(255, 255, 255, 0);
      }), _initializer42 = _applyDecoratedInitializer(_class2.prototype, "_endColorVar", [serializable], function () {
        return new Color(0, 0, 0, 0);
      }), _initializer43 = _applyDecoratedInitializer(_class2.prototype, "_positionType", [serializable], function () {
        return PositionType.FREE;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});