System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './mesh.jsb-cea8fe4b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './model-renderer-f8d2f66d.js'], (function (exports) {
    'use strict';
    var _applyDecoratedDescriptor, NodeEventType, legacyCC, Enum, CCInteger, CCBoolean, applyDecoratedInitializer, CCFloat, _decorator, EventTarget, Vec4, settings, Settings, assertIsTrue, warnID, Mesh, Model, MobilityMode, TransformBit, builtinResMgr, isEnableEffect, getPhaseID, ModelRenderer;
    return {
        setters: [function (module) {
            _applyDecoratedDescriptor = module.H;
            NodeEventType = module.N;
        }, function (module) {
            legacyCC = module.l;
            Enum = module.aa;
            CCInteger = module.at;
            CCBoolean = module.av;
            applyDecoratedInitializer = module.bx;
            CCFloat = module.au;
            _decorator = module.ap;
            EventTarget = module.aD;
            Vec4 = module.p;
            settings = module.a_;
            Settings = module.aZ;
            assertIsTrue = module.bu;
            warnID = module.d;
        }, function (module) {
            Mesh = module.M;
        }, function (module) {
            Model = module.a;
            MobilityMode = module._;
            TransformBit = module.Z;
            builtinResMgr = module.at;
            isEnableEffect = module.aU;
        }, function () {}, function () {}, function () {}, function (module) {
            getPhaseID = module.g;
            ModelRenderer = module.M;
        }],
        execute: (function () {

            const MorphModel = jsb.MorphModel;
            legacyCC.MorphModel = jsb.MorphModel;

            let ReflectionProbeType; exports('R', ReflectionProbeType);
            (function (ReflectionProbeType) {
              ReflectionProbeType[ReflectionProbeType["NONE"] = 0] = "NONE";
              ReflectionProbeType[ReflectionProbeType["BAKED_CUBEMAP"] = 1] = "BAKED_CUBEMAP";
              ReflectionProbeType[ReflectionProbeType["PLANAR_REFLECTION"] = 2] = "PLANAR_REFLECTION";
              ReflectionProbeType[ReflectionProbeType["BLEND_PROBES"] = 3] = "BLEND_PROBES";
              ReflectionProbeType[ReflectionProbeType["BLEND_PROBES_AND_SKYBOX"] = 4] = "BLEND_PROBES_AND_SKYBOX";
            })(ReflectionProbeType || (exports('R', ReflectionProbeType = {})));

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _class3, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class4, _class5, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _class6;
            const {
              ccclass,
              help,
              executeInEditMode,
              executionOrder,
              menu,
              visible,
              type,
              formerlySerializedAs,
              serializable,
              editable,
              disallowAnimation
            } = _decorator;
            let _phaseID = getPhaseID('specular-pass');
            function getSkinPassIndex(subModel) {
              const passes = subModel.passes;
              const r = legacyCC.rendering;
              if (isEnableEffect()) _phaseID = r.getPhaseID(r.getPassID('specular-pass'), 'default');
              for (let k = 0; k < passes.length; k++) {
                if ((!r || !r.enableEffectImport) && passes[k].phase === _phaseID || isEnableEffect() && passes[k].phaseID === _phaseID) {
                  return k;
                }
              }
              return -1;
            }
            const ModelShadowCastingMode = Enum({
              OFF: 0,
              ON: 1
            });
            const ModelShadowReceivingMode = Enum({
              OFF: 0,
              ON: 1
            });
            let ModelBakeSettings = (_dec = ccclass('cc.ModelBakeSettings'), _dec2 = formerlySerializedAs('_recieveShadow'), _dec3 = type(CCInteger), _dec4 = type(CCBoolean), _dec5 = type(CCBoolean), _dec6 = type(Enum(ReflectionProbeType)), _dec7 = type(CCBoolean), _dec(_class = (_class2 = (_class3 = class ModelBakeSettings extends EventTarget {
              constructor(...args) {
                super(...args);
                this.texture = _initializer && _initializer();
                this.uvParam = _initializer2 && _initializer2();
                this._bakeable = _initializer3 && _initializer3();
                this._castShadow = _initializer4 && _initializer4();
                this._receiveShadow = _initializer5 && _initializer5();
                this._lightmapSize = _initializer6 && _initializer6();
                this._useLightProbe = _initializer7 && _initializer7();
                this._bakeToLightProbe = _initializer8 && _initializer8();
                this._reflectionProbeType = _initializer9 && _initializer9();
                this._bakeToReflectionProbe = _initializer10 && _initializer10();
                this.probeCubemap = null;
                this.probeBlendCubemap = null;
                this.probePlanarmap = null;
              }
              get bakeable() {
                return this._bakeable;
              }
              set bakeable(val) {
                this._bakeable = val;
              }
              get castShadow() {
                return this._castShadow;
              }
              set castShadow(val) {
                this._castShadow = val;
              }
              get receiveShadow() {
                return this._receiveShadow;
              }
              set receiveShadow(val) {
                this._receiveShadow = val;
              }
              get lightmapSize() {
                return this._lightmapSize;
              }
              set lightmapSize(val) {
                this._lightmapSize = val;
              }
              get useLightProbe() {
                return this._useLightProbe;
              }
              set useLightProbe(val) {
                this._useLightProbe = val;
                this.emit(ModelBakeSettings.USE_LIGHT_PROBE_CHANGED);
              }
              get bakeToLightProbe() {
                return this._bakeToLightProbe;
              }
              set bakeToLightProbe(val) {
                this._bakeToLightProbe = val;
              }
              get reflectionProbe() {
                return this._reflectionProbeType;
              }
              set reflectionProbe(val) {
                this._reflectionProbeType = val;
                this.emit(ModelBakeSettings.REFLECTION_PROBE_CHANGED);
              }
              get bakeToReflectionProbe() {
                return this._bakeToReflectionProbe;
              }
              set bakeToReflectionProbe(val) {
                this._bakeToReflectionProbe = val;
                this.emit(ModelBakeSettings.BAKE_TO_REFLECTION_PROBE_CHANGED);
              }
            }, _class3.USE_LIGHT_PROBE_CHANGED = 'use_light_probe_changed', _class3.REFLECTION_PROBE_CHANGED = 'reflection_probe_changed', _class3.BAKE_TO_REFLECTION_PROBE_CHANGED = 'bake_to_reflection_probe_changed', _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "texture", [serializable], function () {
              return null;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "uvParam", [serializable], function () {
              return new Vec4();
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_bakeable", [serializable], function () {
              return false;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_castShadow", [serializable], function () {
              return false;
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_receiveShadow", [_dec2], function () {
              return false;
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_lightmapSize", [serializable], function () {
              return 64;
            }), _initializer7 = applyDecoratedInitializer(_class2.prototype, "_useLightProbe", [serializable], function () {
              return false;
            }), _initializer8 = applyDecoratedInitializer(_class2.prototype, "_bakeToLightProbe", [serializable], function () {
              return true;
            }), _initializer9 = applyDecoratedInitializer(_class2.prototype, "_reflectionProbeType", [serializable], function () {
              return ReflectionProbeType.NONE;
            }), _initializer10 = applyDecoratedInitializer(_class2.prototype, "_bakeToReflectionProbe", [serializable], function () {
              return true;
            }), _applyDecoratedDescriptor(_class2.prototype, "lightmapSize", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "lightmapSize"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "useLightProbe", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "useLightProbe"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bakeToLightProbe", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "bakeToLightProbe"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "reflectionProbe", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "reflectionProbe"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bakeToReflectionProbe", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "bakeToReflectionProbe"), _class2.prototype)), _class2)) || _class);
            let MeshRenderer = exports('M', (_dec8 = ccclass('cc.MeshRenderer'), _dec9 = executionOrder(100), _dec10 = type(CCFloat), _dec11 = type(CCFloat), _dec12 = type(ModelShadowCastingMode), _dec13 = type(ModelShadowReceivingMode), _dec14 = type(Mesh), _dec15 = type(CCBoolean), _dec8(_class4 = _dec9(_class4 = (_class5 = (_class6 = class MeshRenderer extends ModelRenderer {
              get shadowBias() {
                return this._shadowBias;
              }
              set shadowBias(val) {
                this._shadowBias = val;
                this._updateShadowBias();
                this._onUpdateLocalShadowBiasAndProbeId();
              }
              get shadowNormalBias() {
                return this._shadowNormalBias;
              }
              set shadowNormalBias(val) {
                this._shadowNormalBias = val;
                this._updateShadowNormalBias();
                this._onUpdateLocalShadowBiasAndProbeId();
              }
              get shadowCastingMode() {
                return this._shadowCastingMode;
              }
              set shadowCastingMode(val) {
                this._shadowCastingMode = val;
                this._updateCastShadow();
              }
              get shadowCastingModeForInspector() {
                return this.shadowCastingMode === ModelShadowCastingMode.ON;
              }
              set shadowCastingModeForInspector(val) {
                this.shadowCastingMode = val === true ? ModelShadowCastingMode.ON : ModelShadowCastingMode.OFF;
              }
              onUpdateReceiveDirLight(visibility, forceClose = false) {
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
              get receiveShadow() {
                return this._shadowReceivingMode;
              }
              set receiveShadow(val) {
                this._shadowReceivingMode = val;
                this._updateReceiveShadow();
              }
              get receiveShadowForInspector() {
                return this._shadowReceivingMode === ModelShadowReceivingMode.ON;
              }
              set receiveShadowForInspector(val) {
                this._shadowReceivingMode = val === true ? ModelShadowReceivingMode.ON : ModelShadowReceivingMode.OFF;
                this._updateReceiveShadow();
              }
              get mesh() {
                return this._mesh;
              }
              set mesh(val) {
                const old = this._mesh;
                const mesh = this._mesh = val;
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
              get model() {
                return this._model;
              }
              get enableMorph() {
                return this._enableMorph;
              }
              set enableMorph(value) {
                this._enableMorph = value;
              }
              get isGlobalStandardSkinObject() {
                return this._enabledGlobalStandardSkinObject;
              }
              set isGlobalStandardSkinObject(val) {
                legacyCC.director.root.pipeline.pipelineSceneData.standardSkinMeshRenderer = val ? this : null;
                this._enabledGlobalStandardSkinObject = val;
              }
              clearGlobalStandardSkinObjectFlag() {
                this._enabledGlobalStandardSkinObject = false;
              }
              constructor() {
                super();
                this.bakeSettings = _initializer11 && _initializer11();
                this._mesh = _initializer12 && _initializer12();
                this._shadowCastingMode = _initializer13 && _initializer13();
                this._shadowReceivingMode = _initializer14 && _initializer14();
                this._shadowBias = _initializer15 && _initializer15();
                this._shadowNormalBias = _initializer16 && _initializer16();
                this._reflectionProbeId = _initializer17 && _initializer17();
                this._reflectionProbeBlendId = _initializer18 && _initializer18();
                this._reflectionProbeBlendWeight = _initializer19 && _initializer19();
                this._enabledGlobalStandardSkinObject = _initializer20 && _initializer20();
                this._reflectionProbeDataMap = null;
                this._subMeshShapesWeights = [];
                this._modelType = void 0;
                this._model = null;
                this._morphInstance = null;
                this._enableMorph = _initializer21 && _initializer21();
                this._modelType = Model;
                const highQualityMode = settings.querySettings(Settings.Category.RENDERING, 'highQualityMode');
                if (highQualityMode) {
                  this._shadowCastingMode = ModelShadowCastingMode.ON;
                  this.bakeSettings.castShadow = true;
                  this.bakeSettings.receiveShadow = true;
                }
              }
              onLoad() {
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
              onRestore() {
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
              }
              onEnable() {
                super.onEnable();
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
              }
              onDisable() {
                if (this._model) {
                  this._detachFromScene();
                }
                this.node.off(NodeEventType.MOBILITY_CHANGED, this.onMobilityChanged, this);
                this.node.off(NodeEventType.LIGHT_PROBE_BAKING_CHANGED, this.onLightProbeBakingChanged, this);
                this.bakeSettings.off(ModelBakeSettings.USE_LIGHT_PROBE_CHANGED, this.onUseLightProbeChanged, this);
                this.bakeSettings.off(ModelBakeSettings.REFLECTION_PROBE_CHANGED, this.onReflectionProbeChanged, this);
                this.bakeSettings.off(ModelBakeSettings.BAKE_TO_REFLECTION_PROBE_CHANGED, this.onBakeToReflectionProbeChanged, this);
              }
              onDestroy() {
                if (this._model) {
                  legacyCC.director.root.destroyModel(this._model);
                  this._model = null;
                  this._models.length = 0;
                }
                if (this._morphInstance) {
                  this._morphInstance.destroy();
                }
              }
              onGeometryChanged() {
                if (this._model && this._mesh) {
                  const meshStruct = this._mesh.struct;
                  this._model.createBoundingShape(meshStruct.minPosition, meshStruct.maxPosition);
                  this._model.updateWorldBound();
                  this._model.onGeometryChanged();
                }
              }
              getWeight(subMeshIndex, shapeIndex) {
                const {
                  _subMeshShapesWeights: subMeshShapesWeights
                } = this;
                assertIsTrue(subMeshIndex < subMeshShapesWeights.length);
                const shapeWeights = this._subMeshShapesWeights[subMeshIndex];
                assertIsTrue(shapeIndex < shapeWeights.length);
                return shapeWeights[shapeIndex];
              }
              setWeights(weights, subMeshIndex) {
                const {
                  _subMeshShapesWeights: subMeshShapesWeights
                } = this;
                if (subMeshIndex >= subMeshShapesWeights.length) {
                  return;
                }
                const shapeWeights = subMeshShapesWeights[subMeshIndex];
                if (shapeWeights.length !== weights.length) {
                  return;
                }
                subMeshShapesWeights[subMeshIndex] = weights.slice(0);
                this._uploadSubMeshShapesWeights(subMeshIndex);
              }
              setWeight(weight, subMeshIndex, shapeIndex) {
                const {
                  _subMeshShapesWeights: subMeshShapesWeights
                } = this;
                if (subMeshIndex >= subMeshShapesWeights.length) {
                  return;
                }
                const shapeWeights = subMeshShapesWeights[subMeshIndex];
                if (shapeIndex >= shapeWeights.length) {
                  return;
                }
                shapeWeights[shapeIndex] = weight;
                this._uploadSubMeshShapesWeights(subMeshIndex);
              }
              setInstancedAttribute(name, value) {
                if (!this.model) {
                  return;
                }
                {
                  this.model._setInstancedAttribute(name, value);
                }
              }
              _updateLightmap(lightmap, uOff, vOff, scale, lum) {
                this.bakeSettings.texture = lightmap;
                this.bakeSettings.uvParam.x = uOff;
                this.bakeSettings.uvParam.y = vOff;
                this.bakeSettings.uvParam.z = scale;
                this.bakeSettings.uvParam.w = lum;
                this._onUpdateLightingmap();
                this._updateReceiveDirLight();
              }
              updateProbeCubemap(cubeMap) {
                if (this.bakeSettings.probeCubemap && this.bakeSettings.probeCubemap === cubeMap) {
                  return;
                }
                this.bakeSettings.probeCubemap = cubeMap;
                if (this.model !== null) {
                  this.model.updateReflectionProbeCubemap(this.bakeSettings.probeCubemap);
                }
              }
              updateProbeBlendCubemap(cubeMap) {
                if (this.bakeSettings.probeBlendCubemap && this.bakeSettings.probeBlendCubemap === cubeMap) {
                  return;
                }
                this.bakeSettings.probeBlendCubemap = cubeMap;
                if (this.model !== null) {
                  this.model.updateReflectionProbeBlendCubemap(this.bakeSettings.probeBlendCubemap);
                }
              }
              updateProbePlanarMap(planarMap) {
                if (this.bakeSettings.probePlanarmap === planarMap) {
                  return;
                }
                this.bakeSettings.probePlanarmap = planarMap;
                if (this.model !== null) {
                  this.model.updateReflectionProbePlanarMap(this.bakeSettings.probePlanarmap);
                }
              }
              updateReflectionProbeDataMap(dataMap) {
                this._reflectionProbeDataMap = dataMap;
                if (this.model !== null) {
                  this.model.updateReflectionProbeDataMap(dataMap);
                }
              }
              updateReflectionProbeId(probeId) {
                this._reflectionProbeId = probeId;
                if (this.model) {
                  this.model.reflectionProbeId = probeId;
                }
                this._onUpdateLocalShadowBiasAndProbeId();
              }
              updateReflectionProbeBlendId(blendProbeId) {
                this._reflectionProbeBlendId = blendProbeId;
                if (this.model) {
                  this.model.reflectionProbeBlendId = blendProbeId;
                }
                this._onUpdateLocalShadowBiasAndProbeId();
              }
              updateReflectionProbeBlendWeight(weight) {
                this._reflectionProbeBlendWeight = weight;
                if (this.model) {
                  this.model.reflectionProbeBlendWeight = weight;
                }
                this._onUpdateLocalReflectionProbeData();
              }
              _updateReflectionProbeTexture() {
                if (!this.model) return;
                const bakeSettings = this.bakeSettings;
                const reflectionProbe = bakeSettings.reflectionProbe;
                const probeBlendCubemap = bakeSettings.probeBlendCubemap;
                const probePlanarMap = bakeSettings.probePlanarmap;
                const probeCubeMap = bakeSettings.probeCubemap;
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
              }
              _updateModels() {
                if (!this.enabledInHierarchy) {
                  return;
                }
                const model = this._model;
                if (model) {
                  model.destroy();
                  model.initialize();
                  model.node = model.transform = this.node;
                } else {
                  this._createModel();
                }
                if (this._model) {
                  if (this._mesh) {
                    const meshStruct = this._mesh.struct;
                    this._model.createBoundingShape(meshStruct.minPosition, meshStruct.maxPosition);
                    this._model.updateWorldBound();
                  }
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
              }
              _updateReceiveDirLight() {
                if (!this._model) {
                  return;
                }
                const scene = this.node.scene;
                if (!scene || !scene.renderScene) {
                  return;
                }
                const mainLight = scene.renderScene.mainLight;
                if (!mainLight) {
                  return;
                }
                const visibility = mainLight.visibility;
                if (!mainLight.node) {
                  return;
                }
                if (mainLight.node.mobility === MobilityMode.Static) {
                  let forceClose = false;
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
              }
              _createModel() {
                const preferMorphOverPlain = !!this._morphInstance;
                const modelType = preferMorphOverPlain && this._modelType === Model ? MorphModel : this._modelType;
                const model = this._model = legacyCC.director.root.createModel(modelType);
                model.visFlags = this.visibility;
                model.node = model.transform = this.node;
                this._models.length = 0;
                this._models.push(this._model);
                if (this._morphInstance && model instanceof MorphModel) {
                  model.setMorphRendering(this._morphInstance);
                }
              }
              _attachToScene() {
                if (!this.node.scene || !this._model) {
                  return;
                }
                const renderScene = this._getRenderScene();
                if (this._model.scene !== null) {
                  this._detachFromScene();
                }
                renderScene.addModel(this._model);
              }
              _detachFromScene() {
                if (this._model && this._model.scene) {
                  this._model.scene.removeModel(this._model);
                }
              }
              _updateModelParams() {
                if (!this._mesh || !this._model) {
                  return;
                }
                this.node.hasChangedFlags |= TransformBit.POSITION;
                this._model.transform.hasChangedFlags |= TransformBit.POSITION;
                this._model.isDynamicBatching = this._isBatchingEnabled();
                const meshCount = this._mesh ? this._mesh.renderingSubMeshes.length : 0;
                const renderingMesh = this._mesh.renderingSubMeshes;
                if (renderingMesh) {
                  for (let i = 0; i < meshCount; ++i) {
                    let material = this.getRenderMaterial(i);
                    if (material && !material.isValid) {
                      material = null;
                    }
                    const subMeshData = renderingMesh[i];
                    if (subMeshData) {
                      this._model.initSubModel(i, subMeshData, material || this._getBuiltinMaterial());
                    }
                  }
                }
                this._model.enabled = true;
              }
              _onUpdateLightingmap() {
                if (this.model !== null) {
                  this.model.updateLightingmap(this.bakeSettings.texture, this.bakeSettings.uvParam);
                }
                this.setInstancedAttribute('a_lightingMapUVParam', [this.bakeSettings.uvParam.x, this.bakeSettings.uvParam.y, this.bakeSettings.uvParam.z, this.bakeSettings.uvParam.w]);
              }
              _onUpdateLocalShadowBiasAndProbeId() {
                if (this.model !== null) {
                  this.model.updateLocalShadowBias();
                  this.model.updateReflectionProbeId();
                }
                this.setInstancedAttribute('a_localShadowBiasAndProbeId', [this._shadowBias, this._shadowNormalBias, this._reflectionProbeId, this._reflectionProbeBlendId]);
              }
              _onUpdateLocalReflectionProbeData() {
                if (this.bakeSettings.reflectionProbe === ReflectionProbeType.BAKED_CUBEMAP || this.bakeSettings.reflectionProbe === ReflectionProbeType.BLEND_PROBES || this.bakeSettings.reflectionProbe === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
                  if (this.model !== null) {
                    this.model.updateReflectionProbeId();
                  }
                  this.setInstancedAttribute('a_reflectionProbeData', [this._reflectionProbeBlendWeight, 0.0, 0.0, 0.0]);
                }
              }
              _onUpdateReflectionProbeDataMap() {
                if (this.model !== null) {
                  this.model.updateReflectionProbeDataMap(this._reflectionProbeDataMap);
                }
              }
              _onMaterialModified(idx, material) {
                if (!this._model || !this._model.inited) {
                  return;
                }
                this._onRebuildPSO(idx, material || this._getBuiltinMaterial());
                this._updateStandardSkin();
              }
              _onRebuildPSO(idx, material) {
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
              _onMeshChanged(old) {}
              _clearMaterials() {
                if (!this._model) {
                  return;
                }
                const subModels = this._model.subModels;
                for (let i = 0; i < subModels.length; ++i) {
                  this._onMaterialModified(i, null);
                }
              }
              _getBuiltinMaterial() {
                return builtinResMgr.get('missing-material');
              }
              _onVisibilityChange(val) {
                if (!this._model) {
                  return;
                }
                this._model.visFlags = val;
              }
              _updateShadowBias() {
                if (!this._model) {
                  return;
                }
                this._model.shadowBias = this._shadowBias;
              }
              _updateShadowNormalBias() {
                if (!this._model) {
                  return;
                }
                this._model.shadowNormalBias = this._shadowNormalBias;
              }
              _updateCastShadow() {
                if (!this._model) {
                  return;
                }
                if (this._shadowCastingMode === ModelShadowCastingMode.OFF) {
                  this._model.castShadow = false;
                } else {
                  assertIsTrue(this._shadowCastingMode === ModelShadowCastingMode.ON, `ShadowCastingMode ${this._shadowCastingMode} is not supported.`);
                  this._model.castShadow = true;
                }
              }
              _updateReceiveShadow() {
                if (!this._model) {
                  return;
                }
                if (this._shadowReceivingMode === ModelShadowReceivingMode.OFF) {
                  this._model.receiveShadow = false;
                } else {
                  this._model.receiveShadow = true;
                }
              }
              onMobilityChanged() {
                this._updateUseLightProbe();
                this._updateReceiveDirLight();
              }
              onLightProbeBakingChanged() {
                this._updateReceiveDirLight();
              }
              onUseLightProbeChanged() {
                this._updateUseLightProbe();
              }
              onReflectionProbeChanged() {
                this._updateUseReflectionProbe();
                this._onUpdateLocalShadowBiasAndProbeId();
                if (this.bakeSettings.reflectionProbe === ReflectionProbeType.BAKED_CUBEMAP || this.bakeSettings.reflectionProbe === ReflectionProbeType.BLEND_PROBES || this.bakeSettings.reflectionProbe === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
                  legacyCC.internal.reflectionProbeManager.selectReflectionProbe(this._model);
                  if (!legacyCC.internal.reflectionProbeManager.getUsedReflectionProbe(this._model, false)) {
                    warnID(16302);
                  }
                } else if (this.bakeSettings.reflectionProbe === ReflectionProbeType.PLANAR_REFLECTION) {
                  legacyCC.internal.reflectionProbeManager.selectPlanarReflectionProbe(this._model);
                  if (!legacyCC.internal.reflectionProbeManager.getUsedReflectionProbe(this._model, true)) {
                    warnID(16302);
                  }
                }
              }
              onBakeToReflectionProbeChanged() {
                this._updateBakeToReflectionProbe();
              }
              _updateUseLightProbe() {
                if (!this._model) {
                  return;
                }
                const node = this.node;
                if (this._mesh && node && node.mobility === MobilityMode.Movable && this.bakeSettings.useLightProbe) {
                  this._model.useLightProbe = true;
                } else {
                  this._model.useLightProbe = false;
                }
              }
              _isBatchingEnabled() {
                for (let i = 0; i < this._materials.length; ++i) {
                  const mat = this._materials[i];
                  if (!mat) {
                    continue;
                  }
                  for (let p = 0; p < mat.passes.length; ++p) {
                    const pass = mat.passes[p];
                    if (pass.batchingScheme) {
                      return true;
                    }
                  }
                }
                return false;
              }
              _updateUseReflectionProbe() {
                if (!this._model) return;
                this._model.reflectionProbeType = this.bakeSettings.reflectionProbe;
                this._updateReflectionProbeTexture();
              }
              _updateUseReflectionProbeType() {
                if (!this._model) return;
                this._model.reflectionProbeType = this.bakeSettings.reflectionProbe;
              }
              _updateBakeToReflectionProbe() {
                if (!this._model) {
                  return;
                }
                this._model.bakeToReflectionProbe = this.bakeSettings.bakeToReflectionProbe;
              }
              _watchMorphInMesh() {
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
                const nSubMeshes = this._mesh.struct.primitives.length;
                for (let iSubMesh = 0; iSubMesh < nSubMeshes; ++iSubMesh) {
                  this._uploadSubMeshShapesWeights(iSubMesh);
                }
                if (this._model && this._model instanceof MorphModel) {
                  this._model.setMorphRendering(this._morphInstance);
                }
              }
              _initSubMeshShapesWeights() {
                const {
                  _mesh: mesh
                } = this;
                this._subMeshShapesWeights.length = 0;
                if (!mesh) {
                  return;
                }
                const morph = mesh.struct.morph;
                if (!morph) {
                  return;
                }
                const commonWeights = morph.weights;
                this._subMeshShapesWeights = morph.subMeshMorphs.map(subMeshMorph => {
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
              }
              _validateShapeWeights() {
                const {
                  _mesh: mesh,
                  _subMeshShapesWeights: subMeshShapesWeights
                } = this;
                if (!mesh || !mesh.struct.morph) {
                  return subMeshShapesWeights.length === 0;
                }
                const {
                  morph
                } = mesh.struct;
                if (morph.subMeshMorphs.length !== subMeshShapesWeights.length) {
                  return false;
                }
                return subMeshShapesWeights.every(({
                  length: shapeCount
                }, subMeshIndex) => {
                  var _morph$subMeshMorphs$, _morph$subMeshMorphs$2;
                  return ((_morph$subMeshMorphs$ = (_morph$subMeshMorphs$2 = morph.subMeshMorphs[subMeshIndex]) === null || _morph$subMeshMorphs$2 === void 0 ? void 0 : _morph$subMeshMorphs$2.targets.length) !== null && _morph$subMeshMorphs$ !== void 0 ? _morph$subMeshMorphs$ : 0) === shapeCount;
                });
              }
              _uploadSubMeshShapesWeights(subMeshIndex) {
                var _this$_morphInstance;
                (_this$_morphInstance = this._morphInstance) === null || _this$_morphInstance === void 0 ? void 0 : _this$_morphInstance.setWeights(subMeshIndex, this._subMeshShapesWeights[subMeshIndex]);
              }
              _updateStandardSkin() {
                const pipelineSceneData = legacyCC.director.root.pipeline.pipelineSceneData;
                if (this._enabledGlobalStandardSkinObject) {
                  pipelineSceneData.standardSkinMeshRenderer = this;
                  pipelineSceneData.standardSkinModel = this.model;
                }
                if (!pipelineSceneData.skinMaterialModel && this._model) {
                  const subModels = this._model.subModels;
                  for (let j = 0; j < subModels.length; j++) {
                    const subModel = subModels[j];
                    const skinPassIdx = getSkinPassIndex(subModel);
                    if (skinPassIdx < 0) {
                      continue;
                    }
                    pipelineSceneData.skinMaterialModel = this._model;
                    return;
                  }
                }
              }
            }, _class6.ShadowCastingMode = ModelShadowCastingMode, _class6.ShadowReceivingMode = ModelShadowReceivingMode, _class6), (_initializer11 = applyDecoratedInitializer(_class5.prototype, "bakeSettings", [serializable], function () {
              return new ModelBakeSettings(this);
            }), _initializer12 = applyDecoratedInitializer(_class5.prototype, "_mesh", [serializable], function () {
              return null;
            }), _initializer13 = applyDecoratedInitializer(_class5.prototype, "_shadowCastingMode", [serializable], function () {
              return ModelShadowCastingMode.OFF;
            }), _initializer14 = applyDecoratedInitializer(_class5.prototype, "_shadowReceivingMode", [serializable], function () {
              return ModelShadowReceivingMode.ON;
            }), _initializer15 = applyDecoratedInitializer(_class5.prototype, "_shadowBias", [serializable], function () {
              return 0;
            }), _initializer16 = applyDecoratedInitializer(_class5.prototype, "_shadowNormalBias", [serializable], function () {
              return 0;
            }), _initializer17 = applyDecoratedInitializer(_class5.prototype, "_reflectionProbeId", [serializable], function () {
              return -1;
            }), _initializer18 = applyDecoratedInitializer(_class5.prototype, "_reflectionProbeBlendId", [serializable], function () {
              return -1;
            }), _initializer19 = applyDecoratedInitializer(_class5.prototype, "_reflectionProbeBlendWeight", [serializable], function () {
              return 0;
            }), _initializer20 = applyDecoratedInitializer(_class5.prototype, "_enabledGlobalStandardSkinObject", [serializable], function () {
              return false;
            }), _applyDecoratedDescriptor(_class5.prototype, "shadowBias", [_dec10], Object.getOwnPropertyDescriptor(_class5.prototype, "shadowBias"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "shadowNormalBias", [_dec11], Object.getOwnPropertyDescriptor(_class5.prototype, "shadowNormalBias"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "shadowCastingMode", [_dec12], Object.getOwnPropertyDescriptor(_class5.prototype, "shadowCastingMode"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "receiveShadow", [_dec13], Object.getOwnPropertyDescriptor(_class5.prototype, "receiveShadow"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "mesh", [_dec14], Object.getOwnPropertyDescriptor(_class5.prototype, "mesh"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "isGlobalStandardSkinObject", [_dec15], Object.getOwnPropertyDescriptor(_class5.prototype, "isGlobalStandardSkinObject"), _class5.prototype), _initializer21 = applyDecoratedInitializer(_class5.prototype, "_enableMorph", [serializable], function () {
              return true;
            })), _class5)) || _class4) || _class4));

        })
    };
}));
