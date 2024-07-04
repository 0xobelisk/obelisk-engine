System.register("q-bundled:///fs/cocos/3d/lights/directional-light-component.js", ["./light-component.js", "../../render-scene/index.js", "../../core/index.js", "../../render-scene/scene/index.js", "../framework/mesh-renderer.js"], function (_export, _context) {
  "use strict";

  var Light, scene, cclegacy, clamp, warnID, CCBoolean, CCFloat, _decorator, settings, Settings, CCInteger, Camera, PCFType, Shadows, ShadowType, CSMOptimizationMode, CSMLevel, MeshRenderer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, ccclass, menu, executeInEditMode, property, serializable, formerlySerializedAs, tooltip, help, visible, type, editable, slide, range, DirectionalLight;
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
    setters: [function (_lightComponentJs) {
      Light = _lightComponentJs.Light;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      clamp = _coreIndexJs.clamp;
      warnID = _coreIndexJs.warnID;
      CCBoolean = _coreIndexJs.CCBoolean;
      CCFloat = _coreIndexJs.CCFloat;
      _decorator = _coreIndexJs._decorator;
      settings = _coreIndexJs.settings;
      Settings = _coreIndexJs.Settings;
      CCInteger = _coreIndexJs.CCInteger;
    }, function (_renderSceneSceneIndexJs) {
      Camera = _renderSceneSceneIndexJs.Camera;
      PCFType = _renderSceneSceneIndexJs.PCFType;
      Shadows = _renderSceneSceneIndexJs.Shadows;
      ShadowType = _renderSceneSceneIndexJs.ShadowType;
      CSMOptimizationMode = _renderSceneSceneIndexJs.CSMOptimizationMode;
      CSMLevel = _renderSceneSceneIndexJs.CSMLevel;
    }, function (_frameworkMeshRendererJs) {
      MeshRenderer = _frameworkMeshRendererJs.MeshRenderer;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      menu = _decorator.menu;
      executeInEditMode = _decorator.executeInEditMode;
      property = _decorator.property;
      serializable = _decorator.serializable;
      formerlySerializedAs = _decorator.formerlySerializedAs;
      tooltip = _decorator.tooltip;
      help = _decorator.help;
      visible = _decorator.visible;
      type = _decorator.type;
      editable = _decorator.editable;
      slide = _decorator.slide;
      range = _decorator.range;
      /**
       * @en The directional light component, only one real time directional light is permitted in one scene, it act as the main light of the scene.
       * @zh 平行光源组件，一个场景只允许存在一个实时的平行光源，作为场景的主光源存在。
       */
      _export("DirectionalLight", DirectionalLight = (_dec = ccclass('cc.DirectionalLight'), _dec2 = help('i18n:cc.DirectionalLight'), _dec3 = menu('Light/DirectionalLight'), _dec4 = formerlySerializedAs('_illuminance'), _dec5 = tooltip('i18n:lights.illuminance'), _dec6 = range([0, Number.POSITIVE_INFINITY, 10]), _dec7 = type(CCInteger), _dec8 = tooltip('i18n:lights.shadowEnabled'), _dec9 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap;
      }), _dec10 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 1
        }
      }), _dec11 = type(CCBoolean), _dec12 = tooltip('i18n:lights.shadowPcf'), _dec13 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap;
      }), _dec14 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 5
        }
      }), _dec15 = type(PCFType), _dec16 = tooltip('i18n:lights.shadowBias'), _dec17 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap;
      }), _dec18 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 6
        }
      }), _dec19 = type(CCFloat), _dec20 = tooltip('i18n:lights.shadowNormalBias'), _dec21 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap;
      }), _dec22 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 7
        }
      }), _dec23 = type(CCFloat), _dec24 = tooltip('i18n:lights.shadowSaturation'), _dec25 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap;
      }), _dec26 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 8
        }
      }), _dec27 = range([0.0, 1.0, 0.01]), _dec28 = type(CCFloat), _dec29 = tooltip('i18n:lights.shadowDistance'), _dec30 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._shadowFixedArea === false;
      }), _dec31 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 9
        }
      }), _dec32 = tooltip('shadow visible distance: shadow quality is inversely proportional of the magnitude of this value'), _dec33 = range([0.0, 2000.0, 0.1]), _dec34 = type(CCFloat), _dec35 = tooltip('i18n:lights.shadowInvisibleOcclusionRange'), _dec36 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._shadowFixedArea === false && this._csmAdvancedOptions;
      }), _dec37 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 22
        }
      }), _dec38 = tooltip('if shadow has been culled, increase this value to fix it'), _dec39 = range([0.0, 2000.0, 1.0]), _dec40 = type(CCFloat), _dec41 = visible(false), _dec42 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 10
        }
      }), _dec43 = tooltip('CSM Level'), _dec44 = type(CSMLevel), _dec45 = tooltip('i18n:lights.enableCSM'), _dec46 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._shadowFixedArea === false;
      }), _dec47 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 11
        }
      }), _dec48 = tooltip('enable CSM'), _dec49 = type(CCBoolean), _dec50 = visible(false), _dec51 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 12
        }
      }), _dec52 = tooltip('CSM Level ratio'), _dec53 = range([0.0, 1.0, 0.01]), _dec54 = type(CCFloat), _dec55 = visible(false), _dec56 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 13
        }
      }), _dec57 = tooltip('CSM Performance Optimization Mode'), _dec58 = type(CSMOptimizationMode), _dec59 = tooltip('i18n:lights.shadowFixedArea'), _dec60 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap;
      }), _dec61 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 14
        }
      }), _dec62 = type(CCBoolean), _dec63 = tooltip('i18n:lights.shadowNear'), _dec64 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._shadowFixedArea === true;
      }), _dec65 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 15
        }
      }), _dec66 = type(CCFloat), _dec67 = tooltip('i18n:lights.shadowFar'), _dec68 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._shadowFixedArea === true;
      }), _dec69 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 16
        }
      }), _dec70 = type(CCFloat), _dec71 = tooltip('i18n:lights.shadowOrthoSize'), _dec72 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._shadowFixedArea === true;
      }), _dec73 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 17
        }
      }), _dec74 = type(CCFloat), _dec75 = tooltip('i18n:lights.shadowAdvancedOptions'), _dec76 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._csmLevel > CSMLevel.LEVEL_1;
      }), _dec77 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 19
        }
      }), _dec78 = type(CCBoolean), _dec79 = tooltip('i18n:lights.csmLayersTransition'), _dec80 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._csmLevel > CSMLevel.LEVEL_1 && this._csmAdvancedOptions;
      }), _dec81 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 20
        }
      }), _dec82 = type(CCBoolean), _dec83 = tooltip('i18n:lights.csmTransitionRange'), _dec84 = visible(function () {
        return cclegacy.director.root.pipeline.pipelineSceneData.shadows.enabled && cclegacy.director.root.pipeline.pipelineSceneData.shadows.type === ShadowType.ShadowMap && this._csmLevel > CSMLevel.LEVEL_1 && this._csmAdvancedOptions;
      }), _dec85 = property({
        group: {
          name: 'DynamicShadowSettings',
          displayOrder: 21
        }
      }), _dec86 = range([0.0, 0.1, 0.01]), _dec87 = type(CCFloat), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Light) {
        _inheritsLoose(DirectionalLight, _Light);
        function DirectionalLight() {
          var _this;
          _this = _Light.call(this) || this;
          _this._illuminanceHDR = _initializer && _initializer();
          _this._illuminanceLDR = _initializer2 && _initializer2();
          // Public properties of shadow
          _this._shadowEnabled = _initializer3 && _initializer3();
          // Shadow map properties
          _this._shadowPcf = _initializer4 && _initializer4();
          _this._shadowBias = _initializer5 && _initializer5();
          _this._shadowNormalBias = _initializer6 && _initializer6();
          _this._shadowSaturation = _initializer7 && _initializer7();
          _this._shadowDistance = _initializer8 && _initializer8();
          _this._shadowInvisibleOcclusionRange = _initializer9 && _initializer9();
          _this._csmLevel = _initializer10 && _initializer10();
          _this._csmLayerLambda = _initializer11 && _initializer11();
          _this._csmOptimizationMode = _initializer12 && _initializer12();
          _this._csmAdvancedOptions = _initializer13 && _initializer13();
          _this._csmLayersTransition = _initializer14 && _initializer14();
          _this._csmTransitionRange = _initializer15 && _initializer15();
          // fixed area properties
          _this._shadowFixedArea = _initializer16 && _initializer16();
          _this._shadowNear = _initializer17 && _initializer17();
          _this._shadowFar = _initializer18 && _initializer18();
          _this._shadowOrthoSize = _initializer19 && _initializer19();
          _this._lightType = scene.DirectionalLight;
          var highQualityMode = settings.querySettings(Settings.Category.RENDERING, 'highQualityMode');
          if (highQualityMode) {
            _this._shadowPcf = PCFType.SOFT_2X;
            _this._shadowDistance = 50;
            _this.enableCSM = true;
            _this.staticSettings.castShadow = true;
          }
          return _this;
        }
        var _proto = DirectionalLight.prototype;
        _proto._createLight = function _createLight() {
          _Light.prototype._createLight.call(this);
          this._type = scene.LightType.DIRECTIONAL;
          if (this._light) {
            var dirLight = this._light;
            dirLight.illuminanceHDR = this._illuminanceHDR;
            dirLight.illuminanceLDR = this._illuminanceLDR;
            // shadow info
            dirLight.shadowEnabled = this._shadowEnabled;
            dirLight.shadowPcf = this._shadowPcf;
            dirLight.shadowBias = this._shadowBias;
            dirLight.shadowNormalBias = this._shadowNormalBias;
            dirLight.shadowSaturation = this._shadowSaturation;
            dirLight.shadowDistance = this._shadowDistance;
            dirLight.shadowInvisibleOcclusionRange = this._shadowInvisibleOcclusionRange;
            dirLight.shadowFixedArea = this._shadowFixedArea;
            dirLight.shadowNear = this._shadowNear;
            dirLight.shadowFar = this._shadowFar;
            dirLight.shadowOrthoSize = this._shadowOrthoSize;
            dirLight.csmLevel = this._csmLevel;
            dirLight.csmLayerLambda = this._csmLayerLambda;
            dirLight.csmOptimizationMode = this._csmOptimizationMode;
            dirLight.csmLayersTransition = this._csmLayersTransition;
            dirLight.csmTransitionRange = this._csmTransitionRange;
          }
        };
        _proto._onUpdateReceiveDirLight = function _onUpdateReceiveDirLight() {
          if (!this._light) {
            return;
          }
          _Light.prototype._onUpdateReceiveDirLight.call(this);
          var scene = this.node.scene;
          if (!scene || !scene.renderScene) {
            return;
          }
          if (scene.renderScene.mainLight !== this._light) {
            return;
          }
          var models = scene.renderScene.models;
          for (var i = 0; i < models.length; i++) {
            var model = models[i];
            if (!model.node) continue;
            var meshRender = model.node.getComponent(MeshRenderer);
            if (!meshRender) continue;
            meshRender.onUpdateReceiveDirLight(this._visibility);
          }
        };
        _createClass(DirectionalLight, [{
          key: "illuminance",
          get:
          /**
           * @en The light source intensity.
           * @zh 光源强度。
           */
          function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._illuminanceHDR;
            } else {
              return this._illuminanceLDR;
            }
          },
          set: function set(val) {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this._illuminanceHDR = val;
              this._light && (this._light.illuminanceHDR = this._illuminanceHDR);
            } else {
              this._illuminanceLDR = val;
              this._light && (this._light.illuminanceLDR = this._illuminanceLDR);
            }
          }

          /**
           * @en Whether activate real time shadow.
           * @zh 是否启用实时阴影？
           */
        }, {
          key: "shadowEnabled",
          get: function get() {
            return this._shadowEnabled;
          },
          set: function set(val) {
            this._shadowEnabled = val;
            if (this._light) {
              this._light.shadowEnabled = this._shadowEnabled;
            }
          }

          /**
           * @en The shadow pcf for real time shadow.
           * @zh 实时阴影计算中的阴影 pcf 等级。
           */
        }, {
          key: "shadowPcf",
          get: function get() {
            return this._shadowPcf;
          },
          set: function set(val) {
            this._shadowPcf = val;
            if (this._light) {
              this._light.shadowPcf = this._shadowPcf;
            }
          }

          /**
           * @en The shadow map sampler offset for real time shadow.
           * @zh 实时阴影计算中的阴影纹理偏移值。
           */
        }, {
          key: "shadowBias",
          get: function get() {
            return this._shadowBias;
          },
          set: function set(val) {
            this._shadowBias = val;
            if (this._light) {
              this._light.shadowBias = this._shadowBias;
            }
          }

          /**
           * @en The global normal bias for real time shadow.
           * @zh 实时阴影计算中的法线偏移。
           */
        }, {
          key: "shadowNormalBias",
          get: function get() {
            return this._shadowNormalBias;
          },
          set: function set(val) {
            this._shadowNormalBias = val;
            if (this._light) {
              this._light.shadowNormalBias = this._shadowNormalBias;
            }
          }

          /**
           * @en The shadow color saturation for real time shadow.
           * @zh 实时阴影计算中的阴影颜色饱和度。
           */
        }, {
          key: "shadowSaturation",
          get: function get() {
            return this._shadowSaturation;
          },
          set: function set(val) {
            this._shadowSaturation = clamp(val, 0.0, 1.0);
            if (this._light) {
              this._light.shadowSaturation = this._shadowSaturation;
            }
          }

          /**
           * @en The potential shadow distance from the camera for real time shadow.
           * @zh 实时阴影计算中潜在阴影产生的范围
           */
        }, {
          key: "shadowDistance",
          get: function get() {
            return this._shadowDistance;
          },
          set: function set(val) {
            this._shadowDistance = Math.min(val, Shadows.MAX_FAR);
            if (this._shadowDistance / 0.1 < 10.0) {
              warnID(15003, this._shadowDistance);
            }
            if (this._light) {
              this._light.shadowDistance = this._shadowDistance;
              this._light.csmNeedUpdate = true;
            }
          }

          /**
           * @en The occlusion range for real time shadow.
           * @zh 实时阴影计算中剔除阴影的范围
          */
        }, {
          key: "shadowInvisibleOcclusionRange",
          get: function get() {
            return this._shadowInvisibleOcclusionRange;
          },
          set: function set(val) {
            this._shadowInvisibleOcclusionRange = Math.min(val, Shadows.MAX_FAR);
            if (this._light) {
              this._light.shadowInvisibleOcclusionRange = this._shadowInvisibleOcclusionRange;
            }
          }

          /**
           * @en get or set shadow CSM level
           * @zh 获取或者设置阴影层级
           */
        }, {
          key: "csmLevel",
          get: function get() {
            return this._csmLevel;
          },
          set: function set(val) {
            this._csmLevel = val;
            if (this._light) {
              this._light.csmLevel = this._csmLevel;
              this._light.csmNeedUpdate = true;
            }
          }

          /**
           * @en enable csm
           * @zh 开启或关闭 csm 模式
           */
        }, {
          key: "enableCSM",
          get: function get() {
            return this._csmLevel > CSMLevel.LEVEL_1;
          },
          set: function set(val) {
            this._csmLevel = val ? CSMLevel.LEVEL_4 : CSMLevel.LEVEL_1;
            if (this._light) {
              this._light.csmLevel = this._csmLevel;
              this._light.csmNeedUpdate = true;
            }
          }

          /**
           * @en get or set shadow CSM level ratio
           * @zh 获取或者设置阴影层级系数
           */
        }, {
          key: "csmLayerLambda",
          get: function get() {
            return this._csmLayerLambda;
          },
          set: function set(val) {
            this._csmLayerLambda = val;
            if (this._light) {
              this._light.csmLayerLambda = this._csmLayerLambda;
              this._light.csmNeedUpdate = true;
            }
          }

          /**
           * @en get or set shadow CSM performance optimization mode
           * @zh 获取或者设置级联阴影性能优化模式
           * @internal
           */
        }, {
          key: "csmOptimizationMode",
          get: function get() {
            return this._csmOptimizationMode;
          },
          set: function set(val) {
            this._csmOptimizationMode = val;
            if (this._light) {
              this._light.csmOptimizationMode = this._csmOptimizationMode;
            }
          }

          /**
           * @en Whether to use fixed area shadow in real time shadow.
           * @zh 实时阴影计算中是否使用固定区域阴影。
           */
        }, {
          key: "shadowFixedArea",
          get: function get() {
            return this._shadowFixedArea;
          },
          set: function set(val) {
            this._shadowFixedArea = val;
            if (this._light) {
              this._light.shadowFixedArea = this._shadowFixedArea;
            }
          }

          /**
           * @en The near clip plane of the shadow camera for fixed area shadow
           * @zh 固定区域阴影设置中阴影相机近裁剪面
           */
        }, {
          key: "shadowNear",
          get: function get() {
            return this._shadowNear;
          },
          set: function set(val) {
            this._shadowNear = val;
            if (this._light) {
              this._light.shadowNear = this._shadowNear;
            }
          }

          /**
           * @en The far clip plane of the shadow camera for fixed area shadow.
           * @zh 固定区域阴影设置中阴影相机远裁剪面。
           */
        }, {
          key: "shadowFar",
          get: function get() {
            return this._shadowFar;
          },
          set: function set(val) {
            this._shadowFar = Math.min(val, Shadows.MAX_FAR);
            if (this._light) {
              this._light.shadowFar = this._shadowFar;
            }
          }

          /**
           * @en The orthogonal size of the shadow camera for fixed area shadow.
           * @zh 固定区域阴影设置中阴影相机的正交尺寸
           */
        }, {
          key: "shadowOrthoSize",
          get: function get() {
            return this._shadowOrthoSize;
          },
          set: function set(val) {
            this._shadowOrthoSize = val;
            if (this._light) {
              this._light.shadowOrthoSize = this._shadowOrthoSize;
            }
          }

          /**
           * @en Enabled shadow advanced options
           * @zh 是否启用高级选项？
           */
        }, {
          key: "csmAdvancedOptions",
          get: function get() {
            return this._csmAdvancedOptions;
          },
          set: function set(val) {
            this._csmAdvancedOptions = val;
          }

          /**
           * @en Enabled csm layers transition
           * @zh 是否启用级联阴影层级过渡？
           */
        }, {
          key: "csmLayersTransition",
          get: function get() {
            return this._csmLayersTransition;
          },
          set: function set(val) {
            this._csmLayersTransition = val;
            if (this._light) {
              this._light.csmLayersTransition = val;
            }
          }

          /**
           * @en get or set csm layers transition range
           * @zh 获取或者设置级联阴影层级过渡范围？
           */
        }, {
          key: "csmTransitionRange",
          get: function get() {
            return this._csmTransitionRange;
          },
          set: function set(val) {
            this._csmTransitionRange = val;
            if (this._light) {
              this._light.csmTransitionRange = val;
            }
          }
        }]);
        return DirectionalLight;
      }(Light), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_illuminanceHDR", [property, _dec4], function () {
        return 65000;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_illuminanceLDR", [serializable], function () {
        return 65000 * Camera.standardExposureValue;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_shadowEnabled", [serializable], function () {
        return false;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_shadowPcf", [serializable], function () {
        return PCFType.HARD;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_shadowBias", [serializable], function () {
        return 0.00001;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_shadowNormalBias", [serializable], function () {
        return 0.0;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_shadowSaturation", [serializable], function () {
        return 1.0;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_shadowDistance", [serializable], function () {
        return 50;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_shadowInvisibleOcclusionRange", [serializable], function () {
        return 200;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_csmLevel", [serializable], function () {
        return CSMLevel.LEVEL_4;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_csmLayerLambda", [serializable], function () {
        return 0.75;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "_csmOptimizationMode", [serializable], function () {
        return CSMOptimizationMode.RemoveDuplicates;
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "_csmAdvancedOptions", [serializable], function () {
        return false;
      }), _initializer14 = _applyDecoratedInitializer(_class2.prototype, "_csmLayersTransition", [serializable], function () {
        return false;
      }), _initializer15 = _applyDecoratedInitializer(_class2.prototype, "_csmTransitionRange", [serializable], function () {
        return 0.05;
      }), _initializer16 = _applyDecoratedInitializer(_class2.prototype, "_shadowFixedArea", [serializable], function () {
        return false;
      }), _initializer17 = _applyDecoratedInitializer(_class2.prototype, "_shadowNear", [serializable], function () {
        return 0.1;
      }), _initializer18 = _applyDecoratedInitializer(_class2.prototype, "_shadowFar", [serializable], function () {
        return 10.0;
      }), _initializer19 = _applyDecoratedInitializer(_class2.prototype, "_shadowOrthoSize", [serializable], function () {
        return 5;
      }), _applyDecoratedDescriptor(_class2.prototype, "illuminance", [_dec5, editable, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "illuminance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowEnabled", [_dec8, _dec9, _dec10, editable, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowEnabled"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowPcf", [_dec12, _dec13, _dec14, editable, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowPcf"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowBias", [_dec16, _dec17, _dec18, editable, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowBias"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowNormalBias", [_dec20, _dec21, _dec22, editable, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowNormalBias"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowSaturation", [_dec24, _dec25, _dec26, editable, _dec27, slide, _dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowSaturation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowDistance", [_dec29, _dec30, _dec31, editable, _dec32, _dec33, slide, _dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowDistance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowInvisibleOcclusionRange", [_dec35, _dec36, _dec37, editable, _dec38, _dec39, slide, _dec40], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowInvisibleOcclusionRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "csmLevel", [_dec41, _dec42, editable, _dec43, _dec44], Object.getOwnPropertyDescriptor(_class2.prototype, "csmLevel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableCSM", [_dec45, _dec46, _dec47, editable, _dec48, _dec49], Object.getOwnPropertyDescriptor(_class2.prototype, "enableCSM"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "csmLayerLambda", [_dec50, _dec51, editable, _dec52, _dec53, slide, _dec54], Object.getOwnPropertyDescriptor(_class2.prototype, "csmLayerLambda"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "csmOptimizationMode", [_dec55, _dec56, editable, _dec57, _dec58], Object.getOwnPropertyDescriptor(_class2.prototype, "csmOptimizationMode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowFixedArea", [_dec59, _dec60, _dec61, editable, _dec62], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowFixedArea"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowNear", [_dec63, _dec64, _dec65, editable, _dec66], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowNear"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowFar", [_dec67, _dec68, _dec69, editable, _dec70], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowFar"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowOrthoSize", [_dec71, _dec72, _dec73, _dec74], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowOrthoSize"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "csmAdvancedOptions", [_dec75, _dec76, _dec77, editable, _dec78], Object.getOwnPropertyDescriptor(_class2.prototype, "csmAdvancedOptions"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "csmLayersTransition", [_dec79, _dec80, _dec81, editable, _dec82], Object.getOwnPropertyDescriptor(_class2.prototype, "csmLayersTransition"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "csmTransitionRange", [_dec83, _dec84, _dec85, editable, _dec86, slide, _dec87], Object.getOwnPropertyDescriptor(_class2.prototype, "csmTransitionRange"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});