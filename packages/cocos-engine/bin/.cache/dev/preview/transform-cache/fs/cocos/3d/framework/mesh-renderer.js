System.register("q-bundled:///fs/cocos/3d/framework/mesh-renderer.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/decorators/index.js", "../assets/mesh.js", "../../core/index.js", "../../render-scene/index.js", "../models/morph-model.js", "../../scene-graph/node-enum.js", "../../misc/model-renderer.js", "../../scene-graph/node-event.js", "../../asset/asset-manager/builtin-res-mgr.js", "../../core/settings.js", "../reflection-probe/reflection-probe-enum.js", "../../rendering/pass-phase.js", "../../rendering/define.js"], function (_export, _context) {
  "use strict";

  var JSB, displayOrder, group, range, Mesh, Vec4, Enum, cclegacy, CCBoolean, CCFloat, assertIsTrue, _decorator, CCInteger, EventTarget, warnID, scene, MorphModel, MobilityMode, TransformBit, ModelRenderer, NodeEventType, builtinResMgr, settings, Settings, ReflectionProbeType, getPhaseID, isEnableEffect, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _class3, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class4, _class5, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _class6, ccclass, help, executeInEditMode, executionOrder, menu, visible, type, formerlySerializedAs, serializable, editable, disallowAnimation, _phaseID, ModelShadowCastingMode, ModelShadowReceivingMode, ModelBakeSettings, MeshRenderer;
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
  function getSkinPassIndex(subModel) {
    var passes = subModel.passes;
    var r = cclegacy.rendering;
    if (isEnableEffect()) _phaseID = r.getPhaseID(r.getPassID('specular-pass'), 'default');
    for (var k = 0; k < passes.length; k++) {
      if ((!r || !r.enableEffectImport) && passes[k].phase === _phaseID || isEnableEffect() && passes[k].phaseID === _phaseID) {
        return k;
      }
    }
    return -1;
  }

  /**
   * @en Shadow projection mode.
   * @zh 阴影投射方式。
   */
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreDataDecoratorsIndexJs) {
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      group = _coreDataDecoratorsIndexJs.group;
      range = _coreDataDecoratorsIndexJs.range;
    }, function (_assetsMeshJs) {
      Mesh = _assetsMeshJs.Mesh;
    }, function (_coreIndexJs) {
      Vec4 = _coreIndexJs.Vec4;
      Enum = _coreIndexJs.Enum;
      cclegacy = _coreIndexJs.cclegacy;
      CCBoolean = _coreIndexJs.CCBoolean;
      CCFloat = _coreIndexJs.CCFloat;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      _decorator = _coreIndexJs._decorator;
      CCInteger = _coreIndexJs.CCInteger;
      EventTarget = _coreIndexJs.EventTarget;
      warnID = _coreIndexJs.warnID;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_modelsMorphModelJs) {
      MorphModel = _modelsMorphModelJs.MorphModel;
    }, function (_sceneGraphNodeEnumJs) {
      MobilityMode = _sceneGraphNodeEnumJs.MobilityMode;
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }, function (_miscModelRendererJs) {
      ModelRenderer = _miscModelRendererJs.ModelRenderer;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }, function (_assetAssetManagerBuiltinResMgrJs) {
      builtinResMgr = _assetAssetManagerBuiltinResMgrJs.builtinResMgr;
    }, function (_coreSettingsJs) {
      settings = _coreSettingsJs.settings;
      Settings = _coreSettingsJs.Settings;
    }, function (_reflectionProbeReflectionProbeEnumJs) {
      ReflectionProbeType = _reflectionProbeReflectionProbeEnumJs.ReflectionProbeType;
    }, function (_renderingPassPhaseJs) {
      getPhaseID = _renderingPassPhaseJs.getPhaseID;
    }, function (_renderingDefineJs) {
      isEnableEffect = _renderingDefineJs.isEnableEffect;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      help = _decorator.help;
      executeInEditMode = _decorator.executeInEditMode;
      executionOrder = _decorator.executionOrder;
      menu = _decorator.menu;
      visible = _decorator.visible;
      type = _decorator.type;
      formerlySerializedAs = _decorator.formerlySerializedAs;
      serializable = _decorator.serializable;
      editable = _decorator.editable;
      disallowAnimation = _decorator.disallowAnimation;
      _phaseID = getPhaseID('specular-pass');
      ModelShadowCastingMode = Enum({
        /**
         * @en Disable shadow projection.
         * @zh 不投射阴影。
         */
        OFF: 0,
        /**
         * @en Enable shadow projection.
         * @zh 开启阴影投射。
         */
        ON: 1
      });
      /**
       * @en Shadow receive mode.
       * @zh 阴影接收方式。
       */
      ModelShadowReceivingMode = Enum({
        /**
         * @en Disable shadow receiving.
         * @zh 不接收阴影。
         */
        OFF: 0,
        /**
         * @en Enable shadow receiving.
         * @zh 开启阴影投射。
         */
        ON: 1
      });
      /**
       * @en Model's bake settings.
       * @zh 模型烘焙设置
       */
      ModelBakeSettings = (_dec = ccclass('cc.ModelBakeSettings'), _dec2 = formerlySerializedAs('_recieveShadow'), _dec3 = group({
        id: 'LightMap',
        name: 'i18n:ENGINE.classes.cc.ModelBakeSettings.groups.LightMap.displayName',
        displayOrder: 0,
        style: 'section'
      }), _dec4 = group({
        id: 'LightMap',
        name: 'i18n:ENGINE.classes.cc.ModelBakeSettings.groups.LightMap.displayName'
      }), _dec5 = group({
        id: 'LightMap',
        name: 'i18n:ENGINE.classes.cc.ModelBakeSettings.groups.LightMap.displayName'
      }), _dec6 = group({
        id: 'LightMap',
        name: 'i18n:ENGINE.classes.cc.ModelBakeSettings.groups.LightMap.displayName'
      }), _dec7 = type(CCInteger), _dec8 = range([0, 1024]), _dec9 = group({
        id: 'LightProbe',
        name: 'i18n:ENGINE.classes.cc.ModelBakeSettings.groups.LightProbe.displayName',
        displayOrder: 1,
        style: 'section'
      }), _dec10 = type(CCBoolean), _dec11 = group({
        id: 'LightProbe',
        name: 'i18n:ENGINE.classes.cc.ModelBakeSettings.groups.LightProbe.displayName'
      }), _dec12 = type(CCBoolean), _dec13 = group({
        id: 'ReflectionProbe',
        name: 'i18n:ENGINE.classes.cc.ModelBakeSettings.groups.ReflectionProbe.displayName',
        displayOrder: 2,
        style: 'section'
      }), _dec14 = type(Enum(ReflectionProbeType)), _dec15 = group({
        id: 'ReflectionProbe',
        name: 'i18n:ENGINE.classes.cc.ModelBakeSettings.groups.ReflectionProbe.displayName'
      }), _dec16 = type(CCBoolean), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(ModelBakeSettings, _EventTarget);
        function ModelBakeSettings() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EventTarget.call.apply(_EventTarget, [this].concat(args)) || this;
          _this.texture = _initializer && _initializer();
          _this.uvParam = _initializer2 && _initializer2();
          _this._bakeable = _initializer3 && _initializer3();
          _this._castShadow = _initializer4 && _initializer4();
          _this._receiveShadow = _initializer5 && _initializer5();
          _this._lightmapSize = _initializer6 && _initializer6();
          _this._useLightProbe = _initializer7 && _initializer7();
          _this._bakeToLightProbe = _initializer8 && _initializer8();
          _this._reflectionProbeType = _initializer9 && _initializer9();
          _this._bakeToReflectionProbe = _initializer10 && _initializer10();
          _this.probeCubemap = null;
          _this.probeBlendCubemap = null;
          _this.probePlanarmap = null;
          return _this;
        }
        _createClass(ModelBakeSettings, [{
          key: "bakeable",
          get:
          /**
           * @en Whether the model is static and bake-able with light map.
           * Notice: the model's vertex data must have the second UV attribute to enable light map baking.
           * @zh 模型是否是静态的并可以烘培光照贴图。
           * 注意：模型顶点数据必须包含第二套 UV 属性来支持光照贴图烘焙。
           */
          function get() {
            return this._bakeable;
          },
          set: function set(val) {
            this._bakeable = val;
          }

          /**
           * @en Whether to cast shadow in light map baking.
           * @zh 在光照贴图烘焙中是否投射阴影。
           */
        }, {
          key: "castShadow",
          get: function get() {
            return this._castShadow;
          },
          set: function set(val) {
            this._castShadow = val;
          }

          /**
           * @en Whether to receive shadow in light map baking.
           * @zh 在光照贴图烘焙中是否接受阴影。
           */
        }, {
          key: "receiveShadow",
          get: function get() {
            return this._receiveShadow;
          },
          set: function set(val) {
            this._receiveShadow = val;
          }

          /**
           * @en The lightmap size.
           * @zh 光照图大小。
           */
        }, {
          key: "lightmapSize",
          get: function get() {
            return this._lightmapSize;
          },
          set: function set(val) {
            this._lightmapSize = val;
          }

          /**
           * @en Whether to use light probe which provides indirect light to dynamic objects.
           * @zh 模型是否使用光照探针，光照探针为动态物体提供间接光。
           */
        }, {
          key: "useLightProbe",
          get: function get() {
            return this._useLightProbe;
          },
          set: function set(val) {
            this._useLightProbe = val;
            this.emit(ModelBakeSettings.USE_LIGHT_PROBE_CHANGED);
          }

          /**
           * @en Whether the model is used to calculate light probe
           * @zh 模型是否用于计算光照探针
           */
        }, {
          key: "bakeToLightProbe",
          get: function get() {
            return this._bakeToLightProbe;
          },
          set: function set(val) {
            this._bakeToLightProbe = val;
          }

          /**
           * @en Used to set whether to use the reflection probe or set probe's type.
           * @zh 用于设置是否使用反射探针或者设置反射探针的类型。
           */
        }, {
          key: "reflectionProbe",
          get: function get() {
            return this._reflectionProbeType;
          },
          set: function set(val) {
            this._reflectionProbeType = val;
            this.emit(ModelBakeSettings.REFLECTION_PROBE_CHANGED);
          }

          /**
           * @en Whether the model can be render by the reflection probe
           * @zh 模型是否能被反射探针渲染
           */
        }, {
          key: "bakeToReflectionProbe",
          get: function get() {
            return this._bakeToReflectionProbe;
          },
          set: function set(val) {
            this._bakeToReflectionProbe = val;
            this.emit(ModelBakeSettings.BAKE_TO_REFLECTION_PROBE_CHANGED);
          }
        }]);
        return ModelBakeSettings;
      }(EventTarget), _class3.USE_LIGHT_PROBE_CHANGED = 'use_light_probe_changed', _class3.REFLECTION_PROBE_CHANGED = 'reflection_probe_changed', _class3.BAKE_TO_REFLECTION_PROBE_CHANGED = 'bake_to_reflection_probe_changed', _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "texture", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "uvParam", [serializable], function () {
        return new Vec4();
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_bakeable", [serializable], function () {
        return false;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_castShadow", [serializable], function () {
        return false;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_receiveShadow", [_dec2], function () {
        return false;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_lightmapSize", [serializable], function () {
        return 64;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_useLightProbe", [serializable], function () {
        return false;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_bakeToLightProbe", [serializable], function () {
        return true;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_reflectionProbeType", [serializable], function () {
        return ReflectionProbeType.NONE;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_bakeToReflectionProbe", [serializable], function () {
        return true;
      }), _applyDecoratedDescriptor(_class2.prototype, "bakeable", [_dec3, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "bakeable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "castShadow", [_dec4, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "castShadow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "receiveShadow", [_dec5, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "receiveShadow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lightmapSize", [_dec6, editable, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "lightmapSize"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "useLightProbe", [_dec9, editable, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "useLightProbe"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bakeToLightProbe", [_dec11, editable, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "bakeToLightProbe"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "reflectionProbe", [_dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "reflectionProbe"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bakeToReflectionProbe", [_dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "bakeToReflectionProbe"), _class2.prototype)), _class2)) || _class);
      /**
       * @en Mesh renderer component for general 3d model rendering, it generates and link to a Model in the render scene.
       * It supports real time lighting and shadow, baked light map, and morph rendering.
       * @zh 用于通用模型渲染的网格渲染器组件，会创建并关联一个渲染场景中的模型对象。
       * 该组件支持实时光照和阴影，预烘焙光照贴图和形变网格渲染。
       */
      _export("MeshRenderer", MeshRenderer = (_dec17 = ccclass('cc.MeshRenderer'), _dec18 = help('i18n:cc.MeshRenderer'), _dec19 = executionOrder(100), _dec20 = menu('Mesh/MeshRenderer'), _dec21 = displayOrder(3), _dec22 = type(CCFloat), _dec23 = group({
        id: 'DynamicShadow',
        name: 'i18n:ENGINE.classes.cc.MeshRenderer.groups.DynamicShadow.displayName',
        displayOrder: 2,
        style: 'section'
      }), _dec24 = type(CCFloat), _dec25 = group({
        id: 'DynamicShadow',
        name: 'i18n:ENGINE.classes.cc.MeshRenderer.groups.DynamicShadow.displayName'
      }), _dec26 = type(ModelShadowCastingMode), _dec27 = group({
        id: 'DynamicShadow',
        name: 'i18n:ENGINE.classes.cc.MeshRenderer.groups.DynamicShadow.displayName'
      }), _dec28 = visible(false), _dec29 = group({
        id: 'DynamicShadow',
        name: 'i18n:ENGINE.classes.cc.MeshRenderer.groups.DynamicShadow.displayName'
      }), _dec30 = type(ModelShadowReceivingMode), _dec31 = visible(false), _dec32 = group({
        id: 'DynamicShadow',
        name: 'i18n:ENGINE.classes.cc.MeshRenderer.groups.DynamicShadow.displayName'
      }), _dec33 = type(Mesh), _dec34 = displayOrder(1), _dec35 = visible(function () {
        return !!(this.mesh && this.mesh.struct.morph && this.mesh.struct.morph.subMeshMorphs.some(function (subMeshMorph) {
          return !!subMeshMorph;
        }));
      }), _dec36 = type(CCBoolean), _dec17(_class4 = _dec18(_class4 = _dec19(_class4 = _dec20(_class4 = executeInEditMode(_class4 = (_class5 = (_class6 = /*#__PURE__*/function (_ModelRenderer) {
        _inheritsLoose(MeshRenderer, _ModelRenderer);
        var _proto = MeshRenderer.prototype;
        /**
         * @en Is received direction Light.
         * @zh 是否接收平行光光照。
         * @param visibility @en direction light visibility. @zh 方向光的可见性。
         */
        _proto.onUpdateReceiveDirLight = function onUpdateReceiveDirLight(visibility, forceClose) {
          if (forceClose === void 0) {
            forceClose = false;
          }
          if (!this._model) {
            return;
          }
          if (forceClose) {
            this._model.receiveDirLight = false;
            return;
          }
          if (this.node && (visibility & this.node.layer) === this.node.layer || visibility & this._model.visFlags) {
            this._model.receiveDirLight = true;
          } else {
            this._model.receiveDirLight = false;
          }
        }

        /**
         * @en receive shadow.
         * @zh 实时光照下是否接受阴影。
         */;
        /**
         * @engineInternal
         */
        _proto.clearGlobalStandardSkinObjectFlag = function clearGlobalStandardSkinObjectFlag() {
          this._enabledGlobalStandardSkinObject = false;
        };
        function MeshRenderer() {
          var _this2;
          _this2 = _ModelRenderer.call(this) || this;
          /**
           * @en The settings for GI baking, it was called lightmapSettings before
           * @zh 全局光照烘焙的配置，以前名称为lightmapSettings
           */
          _this2.bakeSettings = _initializer11 && _initializer11();
          _this2._mesh = _initializer12 && _initializer12();
          _this2._shadowCastingMode = _initializer13 && _initializer13();
          _this2._shadowReceivingMode = _initializer14 && _initializer14();
          _this2._shadowBias = _initializer15 && _initializer15();
          _this2._shadowNormalBias = _initializer16 && _initializer16();
          _this2._reflectionProbeId = _initializer17 && _initializer17();
          _this2._reflectionProbeBlendId = _initializer18 && _initializer18();
          _this2._reflectionProbeBlendWeight = _initializer19 && _initializer19();
          _this2._enabledGlobalStandardSkinObject = _initializer20 && _initializer20();
          _this2._reflectionProbeDataMap = null;
          // @serializable
          _this2._subMeshShapesWeights = [];
          _this2._modelType = void 0;
          _this2._model = null;
          _this2._morphInstance = null;
          _this2._enableMorph = _initializer21 && _initializer21();
          _this2._modelType = scene.Model;
          var highQualityMode = settings.querySettings(Settings.Category.RENDERING, 'highQualityMode');
          if (highQualityMode) {
            _this2._shadowCastingMode = ModelShadowCastingMode.ON;
            _this2.bakeSettings.castShadow = true;
            _this2.bakeSettings.receiveShadow = true;
          }
          return _this2;
        }
        _proto.onLoad = function onLoad() {
          if (this._mesh) {
            this._mesh.initialize();
          }
          if (!this._validateShapeWeights()) {
            this._initSubMeshShapesWeights();
          }
          this._watchMorphInMesh();
          this._updateModels();
          this._updateCastShadow();
          this._updateReceiveShadow();
          this._updateShadowBias();
          this._updateShadowNormalBias();
          this._updateUseLightProbe();
          this._updateBakeToReflectionProbe();
          this._updateUseReflectionProbe();
          this._updateReceiveDirLight();
          this._updateStandardSkin();
        }

        // Redo, Undo, Prefab restore, etc.
        ;
        _proto.onRestore = function onRestore() {
          this._updateModels();
          if (this.enabledInHierarchy) {
            this._attachToScene();
          }
          this._updateCastShadow();
          this._updateReceiveShadow();
          this._updateShadowBias();
          this._updateShadowNormalBias();
          this._updateUseLightProbe();
          this._updateBakeToReflectionProbe();
          this._updateUseReflectionProbe();
          this._updateReceiveDirLight();
          this._updateStandardSkin();
        };
        _proto.onEnable = function onEnable() {
          _ModelRenderer.prototype.onEnable.call(this);
          this.node.on(NodeEventType.MOBILITY_CHANGED, this.onMobilityChanged, this);
          this.node.on(NodeEventType.LIGHT_PROBE_BAKING_CHANGED, this.onLightProbeBakingChanged, this);
          this.bakeSettings.on(ModelBakeSettings.USE_LIGHT_PROBE_CHANGED, this.onUseLightProbeChanged, this);
          this.bakeSettings.on(ModelBakeSettings.REFLECTION_PROBE_CHANGED, this.onReflectionProbeChanged, this);
          this.bakeSettings.on(ModelBakeSettings.BAKE_TO_REFLECTION_PROBE_CHANGED, this.onBakeToReflectionProbeChanged, this);
          if (!this._model) {
            this._updateModels();
          }
          this._model.onGlobalPipelineStateChanged();
          this._updateCastShadow();
          this._updateReceiveShadow();
          this._updateShadowBias();
          this._updateShadowNormalBias();
          this._updateBakeToReflectionProbe();
          this._updateUseReflectionProbe();
          this._onUpdateLocalShadowBiasAndProbeId();
          this._updateUseLightProbe();
          this._updateReceiveDirLight();
          this._onUpdateReflectionProbeDataMap();
          this._onUpdateLocalReflectionProbeData();
          this._updateStandardSkin();
          this._attachToScene();
        };
        _proto.onDisable = function onDisable() {
          if (this._model) {
            this._detachFromScene();
          }
          this.node.off(NodeEventType.MOBILITY_CHANGED, this.onMobilityChanged, this);
          this.node.off(NodeEventType.LIGHT_PROBE_BAKING_CHANGED, this.onLightProbeBakingChanged, this);
          this.bakeSettings.off(ModelBakeSettings.USE_LIGHT_PROBE_CHANGED, this.onUseLightProbeChanged, this);
          this.bakeSettings.off(ModelBakeSettings.REFLECTION_PROBE_CHANGED, this.onReflectionProbeChanged, this);
          this.bakeSettings.off(ModelBakeSettings.BAKE_TO_REFLECTION_PROBE_CHANGED, this.onBakeToReflectionProbeChanged, this);
        };
        _proto.onDestroy = function onDestroy() {
          if (this._model) {
            cclegacy.director.root.destroyModel(this._model);
            this._model = null;
            this._models.length = 0;
          }
          if (this._morphInstance) {
            this._morphInstance.destroy();
          }
        };
        _proto.onGeometryChanged = function onGeometryChanged() {
          if (this._model && this._mesh) {
            var meshStruct = this._mesh.struct;
            this._model.createBoundingShape(meshStruct.minPosition, meshStruct.maxPosition);
            this._model.updateWorldBound();
            this._model.onGeometryChanged();
          }
        }

        /**
         * @zh 获取子网格指定形变目标的权重。
         * @en Gets the weight at specified morph target of the specified sub mesh.
         * @param subMeshIndex Index to the sub mesh.
         * @param shapeIndex Index to the morph target of the sub mesh.
         * @returns The weight.
         */;
        _proto.getWeight = function getWeight(subMeshIndex, shapeIndex) {
          var subMeshShapesWeights = this._subMeshShapesWeights;
          assertIsTrue(subMeshIndex < subMeshShapesWeights.length);
          var shapeWeights = this._subMeshShapesWeights[subMeshIndex];
          assertIsTrue(shapeIndex < shapeWeights.length);
          return shapeWeights[shapeIndex];
        }

        /**
         * @zh
         * 设置子网格所有形变目标的权重。
         * `subMeshIndex` 是无效索引或 `weights` 的长度不匹配子网格的形变目标数量时，此方法不会生效。
         * @en
         * Sets weights of each morph target of the specified sub mesh.
         * If takes no effect if `subMeshIndex` is out of bounds or if `weights` has a different length with morph targets count of the sub mesh.
         * @param weights The weights.
         * @param subMeshIndex Index to the sub mesh.
         */;
        _proto.setWeights = function setWeights(weights, subMeshIndex) {
          var subMeshShapesWeights = this._subMeshShapesWeights;
          if (subMeshIndex >= subMeshShapesWeights.length) {
            return;
          }
          var shapeWeights = subMeshShapesWeights[subMeshIndex];
          if (shapeWeights.length !== weights.length) {
            return;
          }
          subMeshShapesWeights[subMeshIndex] = weights.slice(0);
          this._uploadSubMeshShapesWeights(subMeshIndex);
        }

        /**
         * @zh
         * 设置子网格指定外形的权重。
         * `subMeshIndex` 或 `shapeIndex` 是无效索引时，此方法不会生效。
         * @en
         * Sets the weight at specified shape of specified sub mesh.
         * If takes no effect if
         * `subMeshIndex` or `shapeIndex` out of bounds.
         * @param weight The weight.
         * @param subMeshIndex Index to the sub mesh.
         * @param shapeIndex Index to the shape of the sub mesh.
         */;
        _proto.setWeight = function setWeight(weight, subMeshIndex, shapeIndex) {
          var subMeshShapesWeights = this._subMeshShapesWeights;
          if (subMeshIndex >= subMeshShapesWeights.length) {
            return;
          }
          var shapeWeights = subMeshShapesWeights[subMeshIndex];
          if (shapeIndex >= shapeWeights.length) {
            return;
          }
          shapeWeights[shapeIndex] = weight;
          this._uploadSubMeshShapesWeights(subMeshIndex);
        };
        _proto.setInstancedAttribute = function setInstancedAttribute(name, value) {
          if (!this.model) {
            return;
          }
          if (JSB) {
            this.model._setInstancedAttribute(name, value);
          } else {
            var subModels = this.model.subModels;
            for (var i = 0; i < subModels.length; i++) {
              var subModel = subModels[i];
              var _subModel$instancedAt = subModel.instancedAttributeBlock,
                attributes = _subModel$instancedAt.attributes,
                views = _subModel$instancedAt.views;
              for (var _i = 0; _i < attributes.length; _i++) {
                if (attributes[_i].name === name) {
                  views[_i].set(value);
                  break;
                }
              }
            }
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._updateLightmap = function _updateLightmap(lightmap, uOff, vOff, scale, lum) {
          this.bakeSettings.texture = lightmap;
          this.bakeSettings.uvParam.x = uOff;
          this.bakeSettings.uvParam.y = vOff;
          this.bakeSettings.uvParam.z = scale;
          this.bakeSettings.uvParam.w = lum;
          this._onUpdateLightingmap();
          this._updateReceiveDirLight();
        }

        /**
         * @zh
         * 更新反射探针烘焙的cubemap。
         * @en
         * Updat cubemap baked with reflection probes.
         * @param cubeMap baked cubemap.
         * @param useDefaultTexture if the reflection probe has not been baked, is the skybox used instead.
         */;
        _proto.updateProbeCubemap = function updateProbeCubemap(cubeMap) {
          if (this.bakeSettings.probeCubemap && this.bakeSettings.probeCubemap === cubeMap) {
            return;
          }
          this.bakeSettings.probeCubemap = cubeMap;
          if (this.model !== null) {
            this.model.updateReflectionProbeCubemap(this.bakeSettings.probeCubemap);
          }
        }

        /**
         * @zh
         * 更新用于混合的反射探针烘焙的cubemap。
         * @en
         * Updat cubemap baked with reflection probes for blending.
         * @param cubeMap baked cubemap.
         */;
        _proto.updateProbeBlendCubemap = function updateProbeBlendCubemap(cubeMap) {
          if (this.bakeSettings.probeBlendCubemap && this.bakeSettings.probeBlendCubemap === cubeMap) {
            return;
          }
          this.bakeSettings.probeBlendCubemap = cubeMap;
          if (this.model !== null) {
            this.model.updateReflectionProbeBlendCubemap(this.bakeSettings.probeBlendCubemap);
          }
        }

        /**
         * @zh
         * 更新平面反射渲染纹理。
         * @en
         * Update the reflection rendering texture.
         * @param planarMap render texture.
         */;
        _proto.updateProbePlanarMap = function updateProbePlanarMap(planarMap) {
          if (this.bakeSettings.probePlanarmap === planarMap) {
            return;
          }
          this.bakeSettings.probePlanarmap = planarMap;
          if (this.model !== null) {
            this.model.updateReflectionProbePlanarMap(this.bakeSettings.probePlanarmap);
          }
        }

        /**
         * @zh
         * 更新反射探针的数据贴图。
         * @en
         * Update the data mapping of the reflection probe.
         * @param dataMap data mapping with data saved all reflection probe data.
         */;
        _proto.updateReflectionProbeDataMap = function updateReflectionProbeDataMap(dataMap) {
          this._reflectionProbeDataMap = dataMap;
          if (this.model !== null) {
            this.model.updateReflectionProbeDataMap(dataMap);
          }
        }

        /**
         * @zh
         * 更新反射探针的id。
         * @en
         * Update the id of the reflection probe.
         * @param probeId probe id.
         */;
        _proto.updateReflectionProbeId = function updateReflectionProbeId(probeId) {
          this._reflectionProbeId = probeId;
          if (this.model) {
            this.model.reflectionProbeId = probeId;
          }
          this._onUpdateLocalShadowBiasAndProbeId();
        }

        /**
         * @zh
         * 更新用于混合的反射探针的id。
         * @en
         * Update the id of the reflection probe used for blending.
         * @param blendProbeId probe id of blend.
         */;
        _proto.updateReflectionProbeBlendId = function updateReflectionProbeBlendId(blendProbeId) {
          this._reflectionProbeBlendId = blendProbeId;
          if (this.model) {
            this.model.reflectionProbeBlendId = blendProbeId;
          }
          this._onUpdateLocalShadowBiasAndProbeId();
        }

        /**
         * @zh
         * 更新混合权重。
         * @en
         * Update blending weight.
         * @param weight blending weight.
         */;
        _proto.updateReflectionProbeBlendWeight = function updateReflectionProbeBlendWeight(weight) {
          this._reflectionProbeBlendWeight = weight;
          if (this.model) {
            this.model.reflectionProbeBlendWeight = weight;
          }
          this._onUpdateLocalReflectionProbeData();
        };
        _proto._updateReflectionProbeTexture = function _updateReflectionProbeTexture() {
          if (!this.model) return;
          var bakeSettings = this.bakeSettings;
          var reflectionProbe = bakeSettings.reflectionProbe;
          var probeBlendCubemap = bakeSettings.probeBlendCubemap;
          var probePlanarMap = bakeSettings.probePlanarmap;
          var probeCubeMap = bakeSettings.probeCubemap;
          if (reflectionProbe === ReflectionProbeType.BAKED_CUBEMAP) {
            this.model.updateReflectionProbeCubemap(probeCubeMap);
            this.model.updateReflectionProbePlanarMap(null);
            this.model.updateReflectionProbeBlendCubemap(null);
          } else if (reflectionProbe === ReflectionProbeType.BLEND_PROBES || reflectionProbe === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
            this.model.updateReflectionProbeCubemap(probeCubeMap);
            this.model.updateReflectionProbeBlendCubemap(probeBlendCubemap);
            this.model.updateReflectionProbePlanarMap(null);
          } else if (reflectionProbe === ReflectionProbeType.PLANAR_REFLECTION) {
            this.model.updateReflectionProbePlanarMap(probePlanarMap);
            this.model.updateReflectionProbeCubemap(null);
            this.model.updateReflectionProbeBlendCubemap(null);
          } else {
            this.model.updateReflectionProbeCubemap(null);
            this.model.updateReflectionProbePlanarMap(null);
            this.model.updateReflectionProbeBlendCubemap(null);
          }
        };
        _proto._updateModels = function _updateModels() {
          if (!this.enabledInHierarchy) {
            return;
          }
          var model = this._model;
          if (model) {
            model.destroy();
            model.initialize();
            model.node = model.transform = this.node;
          } else {
            this._createModel();
          }
          if (this._model) {
            if (this._mesh) {
              var meshStruct = this._mesh.struct;
              this._model.createBoundingShape(meshStruct.minPosition, meshStruct.maxPosition);
              this._model.updateWorldBound();
            }
            // Initialize lighting map before model initializing
            // because the lighting map will influence the model's shader
            this._model.initLightingmap(this.bakeSettings.texture, this.bakeSettings.uvParam);
            this._updateUseLightProbe();
            this._updateUseReflectionProbeType();
            this._updateModelParams();
            this._onUpdateLightingmap();
            this._onUpdateLocalShadowBiasAndProbeId();
            this._updateUseReflectionProbe();
            this._updateReceiveDirLight();
            this._onUpdateReflectionProbeDataMap();
            this._onUpdateLocalReflectionProbeData();
          }
        };
        _proto._updateReceiveDirLight = function _updateReceiveDirLight() {
          if (!this._model) {
            return;
          }
          var scene = this.node.scene;
          if (!scene || !scene.renderScene) {
            return;
          }
          var mainLight = scene.renderScene.mainLight;
          if (!mainLight) {
            return;
          }
          var visibility = mainLight.visibility;
          if (!mainLight.node) {
            return;
          }
          if (mainLight.node.mobility === MobilityMode.Static) {
            var forceClose = false;
            if (this.bakeSettings.texture && !this.node.scene.globals.disableLightmap) {
              forceClose = true;
            }
            if (this.node.scene.globals.lightProbeInfo.data && this.node.scene.globals.lightProbeInfo.data.hasCoefficients() && this._model.useLightProbe) {
              forceClose = true;
            }
            this.onUpdateReceiveDirLight(visibility, forceClose);
          } else {
            this.onUpdateReceiveDirLight(visibility);
          }
        };
        _proto._createModel = function _createModel() {
          var preferMorphOverPlain = !!this._morphInstance;
          // Note we only change to use `MorphModel` if
          // we are required to render morph and the `this._modelType` is exactly the basic `Model`.
          // We do this since the `this._modelType` might be changed in classes derived from `Model`.
          // We shall not overwrite it.
          // Please notice that we do not enforce that
          // derived classes should use a morph-able model type(i.e. model type derived from `MorphModel`).
          // So we should take care of the edge case.
          var modelType = preferMorphOverPlain && this._modelType === scene.Model ? MorphModel : this._modelType;
          var model = this._model = cclegacy.director.root.createModel(modelType);
          model.visFlags = this.visibility;
          model.node = model.transform = this.node;
          this._models.length = 0;
          this._models.push(this._model);
          if (this._morphInstance && model instanceof MorphModel) {
            model.setMorphRendering(this._morphInstance);
          }
        };
        _proto._attachToScene = function _attachToScene() {
          if (!this.node.scene || !this._model) {
            return;
          }
          var renderScene = this._getRenderScene();
          if (this._model.scene !== null) {
            this._detachFromScene();
          }
          renderScene.addModel(this._model);
        }

        /**
         * @engineInternal
         */;
        _proto._detachFromScene = function _detachFromScene() {
          if (this._model && this._model.scene) {
            this._model.scene.removeModel(this._model);
          }
        };
        _proto._updateModelParams = function _updateModelParams() {
          if (!this._mesh || !this._model) {
            return;
          }
          this.node.hasChangedFlags |= TransformBit.POSITION;
          this._model.transform.hasChangedFlags |= TransformBit.POSITION;
          this._model.isDynamicBatching = this._isBatchingEnabled();
          var meshCount = this._mesh ? this._mesh.renderingSubMeshes.length : 0;
          var renderingMesh = this._mesh.renderingSubMeshes;
          if (renderingMesh) {
            for (var i = 0; i < meshCount; ++i) {
              var material = this.getRenderMaterial(i);
              if (material && !material.isValid) {
                material = null;
              }
              var subMeshData = renderingMesh[i];
              if (subMeshData) {
                this._model.initSubModel(i, subMeshData, material || this._getBuiltinMaterial());
              }
            }
          }
          this._model.enabled = true;
        };
        _proto._onUpdateLightingmap = function _onUpdateLightingmap() {
          if (this.model !== null) {
            this.model.updateLightingmap(this.bakeSettings.texture, this.bakeSettings.uvParam);
          }
          this.setInstancedAttribute('a_lightingMapUVParam', [this.bakeSettings.uvParam.x, this.bakeSettings.uvParam.y, this.bakeSettings.uvParam.z, this.bakeSettings.uvParam.w]);
        };
        _proto._onUpdateLocalShadowBiasAndProbeId = function _onUpdateLocalShadowBiasAndProbeId() {
          if (this.model !== null) {
            this.model.updateLocalShadowBias();
            this.model.updateReflectionProbeId();
          }
          this.setInstancedAttribute('a_localShadowBiasAndProbeId', [this._shadowBias, this._shadowNormalBias, this._reflectionProbeId, this._reflectionProbeBlendId]);
        };
        _proto._onUpdateLocalReflectionProbeData = function _onUpdateLocalReflectionProbeData() {
          if (this.bakeSettings.reflectionProbe === ReflectionProbeType.BAKED_CUBEMAP || this.bakeSettings.reflectionProbe === ReflectionProbeType.BLEND_PROBES || this.bakeSettings.reflectionProbe === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
            if (this.model !== null) {
              this.model.updateReflectionProbeId();
            }
            this.setInstancedAttribute('a_reflectionProbeData', [this._reflectionProbeBlendWeight, 0.0, 0.0, 0.0]);
          }
        };
        _proto._onUpdateReflectionProbeDataMap = function _onUpdateReflectionProbeDataMap() {
          if (this.model !== null) {
            this.model.updateReflectionProbeDataMap(this._reflectionProbeDataMap);
          }
        };
        _proto._onMaterialModified = function _onMaterialModified(idx, material) {
          if (!this._model || !this._model.inited) {
            return;
          }
          this._onRebuildPSO(idx, material || this._getBuiltinMaterial());
          this._updateStandardSkin();
        }

        /**
         * @engineInternal
         */;
        _proto._onRebuildPSO = function _onRebuildPSO(idx, material) {
          if (!this._model || !this._model.inited) {
            return;
          }
          this._model.isDynamicBatching = this._isBatchingEnabled();
          this._model.setSubModelMaterial(idx, material);
          this._onUpdateLightingmap();
          this._onUpdateLocalShadowBiasAndProbeId();
          this._updateReflectionProbeTexture();
          this._onUpdateReflectionProbeDataMap();
          this._onUpdateLocalReflectionProbeData();
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ;
        _proto._onMeshChanged = function _onMeshChanged(old) {};
        _proto._clearMaterials = function _clearMaterials() {
          if (!this._model) {
            return;
          }
          var subModels = this._model.subModels;
          for (var i = 0; i < subModels.length; ++i) {
            this._onMaterialModified(i, null);
          }
        };
        _proto._getBuiltinMaterial = function _getBuiltinMaterial() {
          // classic ugly pink indicating missing material
          return builtinResMgr.get('missing-material');
        };
        _proto._onVisibilityChange = function _onVisibilityChange(val) {
          if (!this._model) {
            return;
          }
          this._model.visFlags = val;
        };
        _proto._updateShadowBias = function _updateShadowBias() {
          if (!this._model) {
            return;
          }
          this._model.shadowBias = this._shadowBias;
        };
        _proto._updateShadowNormalBias = function _updateShadowNormalBias() {
          if (!this._model) {
            return;
          }
          this._model.shadowNormalBias = this._shadowNormalBias;
        };
        _proto._updateCastShadow = function _updateCastShadow() {
          if (!this._model) {
            return;
          }
          if (this._shadowCastingMode === ModelShadowCastingMode.OFF) {
            this._model.castShadow = false;
          } else {
            assertIsTrue(this._shadowCastingMode === ModelShadowCastingMode.ON, "ShadowCastingMode " + this._shadowCastingMode + " is not supported.");
            this._model.castShadow = true;
          }
        };
        _proto._updateReceiveShadow = function _updateReceiveShadow() {
          if (!this._model) {
            return;
          }
          if (this._shadowReceivingMode === ModelShadowReceivingMode.OFF) {
            this._model.receiveShadow = false;
          } else {
            this._model.receiveShadow = true;
          }
        };
        _proto.onMobilityChanged = function onMobilityChanged() {
          this._updateUseLightProbe();
          this._updateReceiveDirLight();
        };
        _proto.onLightProbeBakingChanged = function onLightProbeBakingChanged() {
          this._updateReceiveDirLight();
        };
        _proto.onUseLightProbeChanged = function onUseLightProbeChanged() {
          this._updateUseLightProbe();
        };
        _proto.onReflectionProbeChanged = function onReflectionProbeChanged() {
          this._updateUseReflectionProbe();
          this._onUpdateLocalShadowBiasAndProbeId();
          if (this.bakeSettings.reflectionProbe === ReflectionProbeType.BAKED_CUBEMAP || this.bakeSettings.reflectionProbe === ReflectionProbeType.BLEND_PROBES || this.bakeSettings.reflectionProbe === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
            cclegacy.internal.reflectionProbeManager.selectReflectionProbe(this._model);
            if (!cclegacy.internal.reflectionProbeManager.getUsedReflectionProbe(this._model, false)) {
              warnID(16302);
            }
          } else if (this.bakeSettings.reflectionProbe === ReflectionProbeType.PLANAR_REFLECTION) {
            cclegacy.internal.reflectionProbeManager.selectPlanarReflectionProbe(this._model);
            if (!cclegacy.internal.reflectionProbeManager.getUsedReflectionProbe(this._model, true)) {
              warnID(16302);
            }
          }
        };
        _proto.onBakeToReflectionProbeChanged = function onBakeToReflectionProbeChanged() {
          this._updateBakeToReflectionProbe();
        };
        _proto._updateUseLightProbe = function _updateUseLightProbe() {
          if (!this._model) {
            return;
          }
          var node = this.node;
          if (this._mesh && node && node.mobility === MobilityMode.Movable && this.bakeSettings.useLightProbe) {
            this._model.useLightProbe = true;
          } else {
            this._model.useLightProbe = false;
          }
        };
        _proto._isBatchingEnabled = function _isBatchingEnabled() {
          for (var i = 0; i < this._materials.length; ++i) {
            var mat = this._materials[i];
            if (!mat) {
              continue;
            }
            for (var p = 0; p < mat.passes.length; ++p) {
              var pass = mat.passes[p];
              if (pass.batchingScheme) {
                return true;
              }
            }
          }
          return false;
        };
        _proto._updateUseReflectionProbe = function _updateUseReflectionProbe() {
          if (!this._model) return;
          this._model.reflectionProbeType = this.bakeSettings.reflectionProbe;
          this._updateReflectionProbeTexture();
        };
        _proto._updateUseReflectionProbeType = function _updateUseReflectionProbeType() {
          if (!this._model) return;
          this._model.reflectionProbeType = this.bakeSettings.reflectionProbe;
        };
        _proto._updateBakeToReflectionProbe = function _updateBakeToReflectionProbe() {
          if (!this._model) {
            return;
          }
          this._model.bakeToReflectionProbe = this.bakeSettings.bakeToReflectionProbe;
        };
        _proto._watchMorphInMesh = function _watchMorphInMesh() {
          if (this._morphInstance) {
            this._morphInstance.destroy();
            this._morphInstance = null;
          }
          if (!this._enableMorph) {
            return;
          }
          if (!this._mesh || !this._mesh.struct.morph || !this._mesh.morphRendering) {
            return;
          }
          this._morphInstance = this._mesh.morphRendering.createInstance();
          var nSubMeshes = this._mesh.struct.primitives.length;
          for (var iSubMesh = 0; iSubMesh < nSubMeshes; ++iSubMesh) {
            this._uploadSubMeshShapesWeights(iSubMesh);
          }
          if (this._model && this._model instanceof MorphModel) {
            this._model.setMorphRendering(this._morphInstance);
          }
        };
        _proto._initSubMeshShapesWeights = function _initSubMeshShapesWeights() {
          var mesh = this._mesh;
          this._subMeshShapesWeights.length = 0;
          if (!mesh) {
            return;
          }
          var morph = mesh.struct.morph;
          if (!morph) {
            return;
          }
          var commonWeights = morph.weights;
          this._subMeshShapesWeights = morph.subMeshMorphs.map(function (subMeshMorph) {
            if (!subMeshMorph) {
              return [];
            } else if (subMeshMorph.weights) {
              return subMeshMorph.weights.slice(0);
            } else if (commonWeights) {
              assertIsTrue(commonWeights.length === subMeshMorph.targets.length);
              return commonWeights.slice(0);
            } else {
              return new Array(subMeshMorph.targets.length).fill(0.0);
            }
          });
        };
        _proto._validateShapeWeights = function _validateShapeWeights() {
          var mesh = this._mesh,
            subMeshShapesWeights = this._subMeshShapesWeights;
          if (!mesh || !mesh.struct.morph) {
            return subMeshShapesWeights.length === 0;
          }
          var morph = mesh.struct.morph;
          if (morph.subMeshMorphs.length !== subMeshShapesWeights.length) {
            return false;
          }
          return subMeshShapesWeights.every(function (_ref, subMeshIndex) {
            var _morph$subMeshMorphs$, _morph$subMeshMorphs$2;
            var shapeCount = _ref.length;
            return ((_morph$subMeshMorphs$ = (_morph$subMeshMorphs$2 = morph.subMeshMorphs[subMeshIndex]) === null || _morph$subMeshMorphs$2 === void 0 ? void 0 : _morph$subMeshMorphs$2.targets.length) !== null && _morph$subMeshMorphs$ !== void 0 ? _morph$subMeshMorphs$ : 0) === shapeCount;
          });
        };
        _proto._uploadSubMeshShapesWeights = function _uploadSubMeshShapesWeights(subMeshIndex) {
          var _this$_morphInstance;
          (_this$_morphInstance = this._morphInstance) === null || _this$_morphInstance === void 0 ? void 0 : _this$_morphInstance.setWeights(subMeshIndex, this._subMeshShapesWeights[subMeshIndex]);
        };
        _proto._updateStandardSkin = function _updateStandardSkin() {
          var pipelineSceneData = cclegacy.director.root.pipeline.pipelineSceneData;
          if (this._enabledGlobalStandardSkinObject) {
            pipelineSceneData.standardSkinMeshRenderer = this;
            pipelineSceneData.standardSkinModel = this.model;
          }
          if (!pipelineSceneData.skinMaterialModel && this._model) {
            var subModels = this._model.subModels;
            for (var j = 0; j < subModels.length; j++) {
              var subModel = subModels[j];
              var skinPassIdx = getSkinPassIndex(subModel);
              if (skinPassIdx < 0) {
                continue;
              }
              pipelineSceneData.skinMaterialModel = this._model;
              return;
            }
          }
        };
        _createClass(MeshRenderer, [{
          key: "shadowBias",
          get:
          /**
           * @en Local shadow bias for real time lighting.
           * @zh 实时光照下模型局部的阴影偏移。
           */
          function get() {
            return this._shadowBias;
          },
          set: function set(val) {
            this._shadowBias = val;
            this._updateShadowBias();
            this._onUpdateLocalShadowBiasAndProbeId();
          }

          /**
          * @en local shadow normal bias for real time lighting.
          * @zh 实时光照下模型局部的阴影法线偏移。
          */
        }, {
          key: "shadowNormalBias",
          get: function get() {
            return this._shadowNormalBias;
          },
          set: function set(val) {
            this._shadowNormalBias = val;
            this._updateShadowNormalBias();
            this._onUpdateLocalShadowBiasAndProbeId();
          }

          /**
           * @en Shadow projection mode.
           * @zh 实时光照下阴影投射方式。
           */
        }, {
          key: "shadowCastingMode",
          get: function get() {
            return this._shadowCastingMode;
          },
          set: function set(val) {
            this._shadowCastingMode = val;
            this._updateCastShadow();
          }
        }, {
          key: "shadowCastingModeForInspector",
          get: function get() {
            return this.shadowCastingMode === ModelShadowCastingMode.ON;
          },
          set: function set(val) {
            this.shadowCastingMode = val === true ? ModelShadowCastingMode.ON : ModelShadowCastingMode.OFF;
          }
        }, {
          key: "receiveShadow",
          get: function get() {
            return this._shadowReceivingMode;
          },
          set: function set(val) {
            this._shadowReceivingMode = val;
            this._updateReceiveShadow();
          }
        }, {
          key: "receiveShadowForInspector",
          get: function get() {
            return this._shadowReceivingMode === ModelShadowReceivingMode.ON;
          },
          set: function set(val) {
            this._shadowReceivingMode = val === true ? ModelShadowReceivingMode.ON : ModelShadowReceivingMode.OFF;
            this._updateReceiveShadow();
          }

          /**
           * @en Gets or sets the mesh of the model.
           * Note, when set, all morph targets' weights would be reset to zero.
           * @zh 获取或设置模型的网格数据。
           * 注意，设置时，所有形变目标的权重都将归零。
           */
        }, {
          key: "mesh",
          get: function get() {
            return this._mesh;
          },
          set: function set(val) {
            var old = this._mesh;
            var mesh = this._mesh = val;
            mesh === null || mesh === void 0 ? void 0 : mesh.initialize();
            this._initSubMeshShapesWeights();
            this._watchMorphInMesh();
            this._onMeshChanged(old);
            this._updateModels();
            if (this.enabledInHierarchy) {
              this._attachToScene();
            }
            this._updateCastShadow();
            this._updateReceiveShadow();
            this._updateUseLightProbe();
            this._updateUseReflectionProbe();
            this._updateReceiveDirLight();
          }

          /**
           * @en Gets the model in [[RenderScene]].
           * @zh 获取渲染场景 [[RenderScene]] 中对应的模型。
           */
        }, {
          key: "model",
          get: function get() {
            return this._model;
          }

          /**
           * @en Whether to enable morph rendering.
           * @zh 是否启用形变网格渲染。
           */
          // eslint-disable-next-line func-names
        }, {
          key: "enableMorph",
          get: function get() {
            return this._enableMorph;
          },
          set: function set(value) {
            this._enableMorph = value;
          }

          /**
           * @en Set the Separable-SSS skin standard model component.
           * @zh 设置是否是全局的4s标准模型组件
           */
        }, {
          key: "isGlobalStandardSkinObject",
          get: function get() {
            return this._enabledGlobalStandardSkinObject;
          },
          set: function set(val) {
            cclegacy.director.root.pipeline.pipelineSceneData.standardSkinMeshRenderer = val ? this : null;
            this._enabledGlobalStandardSkinObject = val;
          }
        }]);
        return MeshRenderer;
      }(ModelRenderer), _class6.ShadowCastingMode = ModelShadowCastingMode, _class6.ShadowReceivingMode = ModelShadowReceivingMode, _class6), (_initializer11 = _applyDecoratedInitializer(_class5.prototype, "bakeSettings", [serializable, editable, disallowAnimation, _dec21], function () {
        return new ModelBakeSettings(this);
      }), _initializer12 = _applyDecoratedInitializer(_class5.prototype, "_mesh", [serializable], function () {
        return null;
      }), _initializer13 = _applyDecoratedInitializer(_class5.prototype, "_shadowCastingMode", [serializable], function () {
        return ModelShadowCastingMode.OFF;
      }), _initializer14 = _applyDecoratedInitializer(_class5.prototype, "_shadowReceivingMode", [serializable], function () {
        return ModelShadowReceivingMode.ON;
      }), _initializer15 = _applyDecoratedInitializer(_class5.prototype, "_shadowBias", [serializable], function () {
        return 0;
      }), _initializer16 = _applyDecoratedInitializer(_class5.prototype, "_shadowNormalBias", [serializable], function () {
        return 0;
      }), _initializer17 = _applyDecoratedInitializer(_class5.prototype, "_reflectionProbeId", [serializable], function () {
        return -1;
      }), _initializer18 = _applyDecoratedInitializer(_class5.prototype, "_reflectionProbeBlendId", [serializable], function () {
        return -1;
      }), _initializer19 = _applyDecoratedInitializer(_class5.prototype, "_reflectionProbeBlendWeight", [serializable], function () {
        return 0;
      }), _initializer20 = _applyDecoratedInitializer(_class5.prototype, "_enabledGlobalStandardSkinObject", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class5.prototype, "shadowBias", [_dec22, _dec23, disallowAnimation], Object.getOwnPropertyDescriptor(_class5.prototype, "shadowBias"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "shadowNormalBias", [_dec24, _dec25, disallowAnimation], Object.getOwnPropertyDescriptor(_class5.prototype, "shadowNormalBias"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "shadowCastingMode", [_dec26, _dec27, disallowAnimation, _dec28], Object.getOwnPropertyDescriptor(_class5.prototype, "shadowCastingMode"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "shadowCastingModeForInspector", [_dec29, disallowAnimation], Object.getOwnPropertyDescriptor(_class5.prototype, "shadowCastingModeForInspector"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "receiveShadow", [_dec30, _dec31], Object.getOwnPropertyDescriptor(_class5.prototype, "receiveShadow"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "receiveShadowForInspector", [_dec32, disallowAnimation], Object.getOwnPropertyDescriptor(_class5.prototype, "receiveShadowForInspector"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "mesh", [_dec33, _dec34], Object.getOwnPropertyDescriptor(_class5.prototype, "mesh"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "enableMorph", [_dec35, disallowAnimation], Object.getOwnPropertyDescriptor(_class5.prototype, "enableMorph"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "isGlobalStandardSkinObject", [_dec36, disallowAnimation], Object.getOwnPropertyDescriptor(_class5.prototype, "isGlobalStandardSkinObject"), _class5.prototype), _initializer21 = _applyDecoratedInitializer(_class5.prototype, "_enableMorph", [serializable], function () {
        return true;
      })), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4));
    }
  };
});