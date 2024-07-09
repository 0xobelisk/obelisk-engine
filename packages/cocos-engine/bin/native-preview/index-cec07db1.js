System.register(['./find-7a03d1cc.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './index-ce98320e.js', './mesh-renderer-ea94cc01.js', './mesh.jsb-cea8fe4b.js', './util-9da0b4a2.js', './skeleton.jsb-04631524.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './deprecated-15f68f3e.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './camera-component-b329f870.js'], (function (exports) {
    'use strict';
    var find, readMesh, createMesh, MeshUtils, readBuffer, writeBuffer, mapBuffer, removeProperty, legacyCC, setClassAlias, Vec3, Enum, ccclass$2, applyDecoratedInitializer, type$2, serializable$2, Color, CCInteger, CCBoolean, CCFloat, _decorator, clamp, warnID, settings, Settings, formerlySerializedAs$2, toRadian, property$2, replaceProperty, AABB, intersect, warn, CCObject, MeshRenderer, ReflectionProbeType, absolute, _applyDecoratedDescriptor, Component, NodeEventType, Layers, LightType, Light$1, CAMERA_DEFAULT_MASK, PCFType, CSMLevel, CSMOptimizationMode, Shadows, DirectionalLight$1, Camera, nt2lm, SphereLight$1, SpotLight$1, PointLight$1, RangedDirectionalLight$1, LODData, LODGroup$1, ProbeType, ImageAsset, PixelFormat, Texture2D, ProbeClearFlag, TextureCube, TransformBit, ReflectionProbe$1, Node, Camera$1;
    return {
        setters: [function (module) {
            find = module.j;
        }, function (module) {
            readMesh = module.r;
            createMesh = module.c;
            MeshUtils = module.M;
        }, function (module) {
            readBuffer = module.r;
            writeBuffer = module.w;
            mapBuffer = module.m;
        }, function (module) {
            removeProperty = module.ah;
            legacyCC = module.l;
            setClassAlias = module.cj;
            Vec3 = module.n;
            Enum = module.aa;
            ccclass$2 = module.by;
            applyDecoratedInitializer = module.bx;
            type$2 = module.bw;
            serializable$2 = module.bf;
            Color = module.C;
            CCInteger = module.at;
            CCBoolean = module.av;
            CCFloat = module.au;
            _decorator = module.ap;
            clamp = module.F;
            warnID = module.d;
            settings = module.a_;
            Settings = module.aZ;
            formerlySerializedAs$2 = module.be;
            toRadian = module.J;
            property$2 = module.cl;
            replaceProperty = module.ag;
            AABB = module.bE;
            intersect = module.bG;
            warn = module.w;
            CCObject = module.as;
        }, function (module) {
            MeshRenderer = module.M;
            ReflectionProbeType = module.R;
        }, function () {}, function (module) {
            absolute = module.a;
        }, function () {}, function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
            NodeEventType = module.N;
        }, function (module) {
            Layers = module.V;
            LightType = module.m;
            Light$1 = module.o;
            CAMERA_DEFAULT_MASK = module.aN;
            PCFType = module.y;
            CSMLevel = module.z;
            CSMOptimizationMode = module.B;
            Shadows = module.I;
            DirectionalLight$1 = module.D;
            Camera = module.i;
            nt2lm = module.n;
            SphereLight$1 = module.q;
            SpotLight$1 = module.p;
            PointLight$1 = module.r;
            RangedDirectionalLight$1 = module.s;
            LODData = module.L;
            LODGroup$1 = module.k;
            ProbeType = module.j;
            ImageAsset = module.al;
            PixelFormat = module.aS;
            Texture2D = module.am;
            ProbeClearFlag = module.P;
            TextureCube = module.an;
            TransformBit = module.Z;
            ReflectionProbe$1 = module.R;
            Node = module.Q;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function (module) {
            Camera$1 = module.C;
        }],
        execute: (function () {

            function toPPM(buffer, w, h) {
              return `P3 ${w} ${h} 255\n${buffer.filter((e, i) => i % 4 < 3).toString()}\n`;
            }

            var utils = /*#__PURE__*/Object.freeze({
                __proto__: null,
                find: find,
                toPPM: toPPM,
                readMesh: readMesh,
                createMesh: createMesh,
                MeshUtils: MeshUtils,
                readBuffer: readBuffer,
                writeBuffer: writeBuffer,
                mapBuffer: mapBuffer
            });
            exports('u', utils);

            removeProperty(MeshRenderer.prototype, 'MeshRenderer.prototype', [{
              name: 'enableDynamicBatching'
            }, {
              name: 'recieveShadows'
            }]);
            legacyCC.ModelComponent = MeshRenderer;
            setClassAlias(MeshRenderer, 'cc.ModelComponent');

            var _dec$7, _class$7, _class2$7, _initializer$7, _initializer2$7, _initializer3$6, _dec2$7, _dec3$7, _dec4$6, _class4$1, _class5$1, _initializer4$6, _initializer5$5, _initializer6$3, _initializer7$3, _initializer8$3, _class6;
            const _color_tmp = new Vec3();
            const PhotometricTerm = Enum({
              LUMINOUS_FLUX: 0,
              LUMINANCE: 1
            });
            let StaticLightSettings = (_dec$7 = ccclass$2('cc.StaticLightSettings'), _dec$7(_class$7 = (_class2$7 = class StaticLightSettings {
              constructor() {
                this._baked = _initializer$7 && _initializer$7();
                this._editorOnly = _initializer2$7 && _initializer2$7();
                this._castShadow = _initializer3$6 && _initializer3$6();
              }
              get editorOnly() {
                return this._editorOnly;
              }
              set editorOnly(val) {
                this._editorOnly = val;
              }
              get baked() {
                return this._baked;
              }
              set baked(val) {
                this._baked = val;
              }
              get castShadow() {
                return this._castShadow;
              }
              set castShadow(val) {
                this._castShadow = val;
              }
            }, (_initializer$7 = applyDecoratedInitializer(_class2$7.prototype, "_baked", [serializable$2], function () {
              return false;
            }), _initializer2$7 = applyDecoratedInitializer(_class2$7.prototype, "_editorOnly", [serializable$2], function () {
              return false;
            }), _initializer3$6 = applyDecoratedInitializer(_class2$7.prototype, "_castShadow", [serializable$2], function () {
              return false;
            })), _class2$7)) || _class$7);
            let Light = exports('L', (_dec2$7 = ccclass$2('cc.Light'), _dec3$7 = type$2(StaticLightSettings), _dec4$6 = type$2(Layers.BitMask), _dec2$7(_class4$1 = (_class5$1 = (_class6 = class Light extends Component {
              get color() {
                return this._color;
              }
              set color(val) {
                this._color = val;
                if (this._light) {
                  _color_tmp.x = val.r / 255.0;
                  _color_tmp.y = val.g / 255.0;
                  _color_tmp.z = val.b / 255.0;
                  this._light.color = _color_tmp;
                }
              }
              get useColorTemperature() {
                return this._useColorTemperature;
              }
              set useColorTemperature(enable) {
                this._useColorTemperature = enable;
                if (this._light) {
                  this._light.useColorTemperature = enable;
                }
              }
              get colorTemperature() {
                return this._colorTemperature;
              }
              set colorTemperature(val) {
                this._colorTemperature = val;
                if (this._light) {
                  this._light.colorTemperature = val;
                }
              }
              get staticSettings() {
                return this._staticSettings;
              }
              set staticSettings(val) {
                this._staticSettings = val;
              }
              get type() {
                return this._type;
              }
              get baked() {
                return this.staticSettings.baked;
              }
              set baked(val) {
                this.staticSettings.baked = val;
                if (this._light !== null) {
                  this._light.baked = val;
                }
              }
              set visibility(vis) {
                this._visibility = vis;
                if (this._light) {
                  this._light.visibility = vis;
                }
                this._onUpdateReceiveDirLight();
              }
              get visibility() {
                return this._visibility;
              }
              constructor() {
                super();
                this._color = _initializer4$6 && _initializer4$6();
                this._useColorTemperature = _initializer5$5 && _initializer5$5();
                this._colorTemperature = _initializer6$3 && _initializer6$3();
                this._staticSettings = _initializer7$3 && _initializer7$3();
                this._visibility = _initializer8$3 && _initializer8$3();
                this._type = LightType.UNKNOWN;
                this._lightType = void 0;
                this._light = null;
                this._lightType = Light$1;
              }
              onLoad() {
                this._createLight();
              }
              onEnable() {
                this._attachToScene();
              }
              onDisable() {
                this._detachFromScene();
              }
              onDestroy() {
                this._destroyLight();
              }
              _createLight() {
                if (!this._light) {
                  this._light = legacyCC.director.root.createLight(this._lightType);
                }
                this.color = this._color;
                this.useColorTemperature = this._useColorTemperature;
                this.colorTemperature = this._colorTemperature;
                this._light.node = this.node;
                this._light.baked = this.baked;
                this._light.visibility = this.visibility;
              }
              _destroyLight() {
                if (this._light) {
                  legacyCC.director.root.recycleLight(this._light);
                  this._light = null;
                }
              }
              _attachToScene() {
                this._detachFromScene();
                if (this._light && !this._light.scene && this.node.scene) {
                  const renderScene = this._getRenderScene();
                  switch (this._type) {
                    case LightType.DIRECTIONAL:
                      renderScene.addDirectionalLight(this._light);
                      renderScene.setMainLight(this._light);
                      break;
                    case LightType.SPHERE:
                      renderScene.addSphereLight(this._light);
                      break;
                    case LightType.SPOT:
                      renderScene.addSpotLight(this._light);
                      break;
                    case LightType.POINT:
                      renderScene.addPointLight(this._light);
                      break;
                    case LightType.RANGED_DIRECTIONAL:
                      renderScene.addRangedDirLight(this._light);
                      break;
                  }
                }
              }
              _detachFromScene() {
                if (this._light && this._light.scene) {
                  const renderScene = this._light.scene;
                  switch (this._type) {
                    case LightType.DIRECTIONAL:
                      renderScene.removeDirectionalLight(this._light);
                      renderScene.unsetMainLight(this._light);
                      break;
                    case LightType.SPHERE:
                      renderScene.removeSphereLight(this._light);
                      break;
                    case LightType.SPOT:
                      renderScene.removeSpotLight(this._light);
                      break;
                    case LightType.POINT:
                      renderScene.removePointLight(this._light);
                      break;
                    case LightType.RANGED_DIRECTIONAL:
                      renderScene.removeRangedDirLight(this._light);
                      break;
                  }
                }
              }
              _onUpdateReceiveDirLight() {}
            }, _class6.Type = LightType, _class6.PhotometricTerm = PhotometricTerm, _class6), (_initializer4$6 = applyDecoratedInitializer(_class5$1.prototype, "_color", [serializable$2], function () {
              return Color.WHITE.clone();
            }), _initializer5$5 = applyDecoratedInitializer(_class5$1.prototype, "_useColorTemperature", [serializable$2], function () {
              return false;
            }), _initializer6$3 = applyDecoratedInitializer(_class5$1.prototype, "_colorTemperature", [serializable$2], function () {
              return 6550;
            }), _initializer7$3 = applyDecoratedInitializer(_class5$1.prototype, "_staticSettings", [serializable$2], function () {
              return new StaticLightSettings();
            }), _initializer8$3 = applyDecoratedInitializer(_class5$1.prototype, "_visibility", [serializable$2], function () {
              return CAMERA_DEFAULT_MASK;
            }), _applyDecoratedDescriptor(_class5$1.prototype, "staticSettings", [_dec3$7], Object.getOwnPropertyDescriptor(_class5$1.prototype, "staticSettings"), _class5$1.prototype), _applyDecoratedDescriptor(_class5$1.prototype, "visibility", [_dec4$6], Object.getOwnPropertyDescriptor(_class5$1.prototype, "visibility"), _class5$1.prototype)), _class5$1)) || _class4$1));

            var _dec$6, _dec2$6, _dec3$6, _dec4$5, _dec5$5, _dec6$5, _dec7$4, _dec8$3, _dec9$2, _dec10$2, _dec11$1, _dec12$1, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class$6, _class2$6, _initializer$6, _initializer2$6, _initializer3$5, _initializer4$5, _initializer5$4, _initializer6$2, _initializer7$2, _initializer8$2, _initializer9$2, _initializer10$2, _initializer11$1, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19;
            const {
              ccclass: ccclass$1,
              menu: menu$1,
              executeInEditMode: executeInEditMode$1,
              property: property$1,
              serializable: serializable$1,
              formerlySerializedAs: formerlySerializedAs$1,
              tooltip: tooltip$1,
              help: help$1,
              visible: visible$1,
              type: type$1,
              editable: editable$1,
              slide: slide$1,
              range: range$1
            } = _decorator;
            let DirectionalLight = exports('D', (_dec$6 = ccclass$1('cc.DirectionalLight'), _dec2$6 = formerlySerializedAs$1('_illuminance'), _dec3$6 = type$1(CCInteger), _dec4$5 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 1
              }
            }), _dec5$5 = type$1(CCBoolean), _dec6$5 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 5
              }
            }), _dec7$4 = type$1(PCFType), _dec8$3 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 6
              }
            }), _dec9$2 = type$1(CCFloat), _dec10$2 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 7
              }
            }), _dec11$1 = type$1(CCFloat), _dec12$1 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 8
              }
            }), _dec13 = type$1(CCFloat), _dec14 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 9
              }
            }), _dec15 = type$1(CCFloat), _dec16 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 22
              }
            }), _dec17 = type$1(CCFloat), _dec18 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 10
              }
            }), _dec19 = type$1(CSMLevel), _dec20 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 11
              }
            }), _dec21 = type$1(CCBoolean), _dec22 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 12
              }
            }), _dec23 = type$1(CCFloat), _dec24 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 13
              }
            }), _dec25 = type$1(CSMOptimizationMode), _dec26 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 14
              }
            }), _dec27 = type$1(CCBoolean), _dec28 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 15
              }
            }), _dec29 = type$1(CCFloat), _dec30 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 16
              }
            }), _dec31 = type$1(CCFloat), _dec32 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 17
              }
            }), _dec33 = type$1(CCFloat), _dec34 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 19
              }
            }), _dec35 = type$1(CCBoolean), _dec36 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 20
              }
            }), _dec37 = type$1(CCBoolean), _dec38 = property$1({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 21
              }
            }), _dec39 = type$1(CCFloat), _dec$6(_class$6 = (_class2$6 = class DirectionalLight extends Light {
              get illuminance() {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  return this._illuminanceHDR;
                } else {
                  return this._illuminanceLDR;
                }
              }
              set illuminance(val) {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  this._illuminanceHDR = val;
                  this._light && (this._light.illuminanceHDR = this._illuminanceHDR);
                } else {
                  this._illuminanceLDR = val;
                  this._light && (this._light.illuminanceLDR = this._illuminanceLDR);
                }
              }
              get shadowEnabled() {
                return this._shadowEnabled;
              }
              set shadowEnabled(val) {
                this._shadowEnabled = val;
                if (this._light) {
                  this._light.shadowEnabled = this._shadowEnabled;
                }
              }
              get shadowPcf() {
                return this._shadowPcf;
              }
              set shadowPcf(val) {
                this._shadowPcf = val;
                if (this._light) {
                  this._light.shadowPcf = this._shadowPcf;
                }
              }
              get shadowBias() {
                return this._shadowBias;
              }
              set shadowBias(val) {
                this._shadowBias = val;
                if (this._light) {
                  this._light.shadowBias = this._shadowBias;
                }
              }
              get shadowNormalBias() {
                return this._shadowNormalBias;
              }
              set shadowNormalBias(val) {
                this._shadowNormalBias = val;
                if (this._light) {
                  this._light.shadowNormalBias = this._shadowNormalBias;
                }
              }
              get shadowSaturation() {
                return this._shadowSaturation;
              }
              set shadowSaturation(val) {
                this._shadowSaturation = clamp(val, 0.0, 1.0);
                if (this._light) {
                  this._light.shadowSaturation = this._shadowSaturation;
                }
              }
              get shadowDistance() {
                return this._shadowDistance;
              }
              set shadowDistance(val) {
                this._shadowDistance = Math.min(val, Shadows.MAX_FAR);
                if (this._shadowDistance / 0.1 < 10.0) {
                  warnID(15003, this._shadowDistance);
                }
                if (this._light) {
                  this._light.shadowDistance = this._shadowDistance;
                  this._light.csmNeedUpdate = true;
                }
              }
              get shadowInvisibleOcclusionRange() {
                return this._shadowInvisibleOcclusionRange;
              }
              set shadowInvisibleOcclusionRange(val) {
                this._shadowInvisibleOcclusionRange = Math.min(val, Shadows.MAX_FAR);
                if (this._light) {
                  this._light.shadowInvisibleOcclusionRange = this._shadowInvisibleOcclusionRange;
                }
              }
              get csmLevel() {
                return this._csmLevel;
              }
              set csmLevel(val) {
                this._csmLevel = val;
                if (this._light) {
                  this._light.csmLevel = this._csmLevel;
                  this._light.csmNeedUpdate = true;
                }
              }
              get enableCSM() {
                return this._csmLevel > CSMLevel.LEVEL_1;
              }
              set enableCSM(val) {
                this._csmLevel = val ? CSMLevel.LEVEL_4 : CSMLevel.LEVEL_1;
                if (this._light) {
                  this._light.csmLevel = this._csmLevel;
                  this._light.csmNeedUpdate = true;
                }
              }
              get csmLayerLambda() {
                return this._csmLayerLambda;
              }
              set csmLayerLambda(val) {
                this._csmLayerLambda = val;
                if (this._light) {
                  this._light.csmLayerLambda = this._csmLayerLambda;
                  this._light.csmNeedUpdate = true;
                }
              }
              get csmOptimizationMode() {
                return this._csmOptimizationMode;
              }
              set csmOptimizationMode(val) {
                this._csmOptimizationMode = val;
                if (this._light) {
                  this._light.csmOptimizationMode = this._csmOptimizationMode;
                }
              }
              get shadowFixedArea() {
                return this._shadowFixedArea;
              }
              set shadowFixedArea(val) {
                this._shadowFixedArea = val;
                if (this._light) {
                  this._light.shadowFixedArea = this._shadowFixedArea;
                }
              }
              get shadowNear() {
                return this._shadowNear;
              }
              set shadowNear(val) {
                this._shadowNear = val;
                if (this._light) {
                  this._light.shadowNear = this._shadowNear;
                }
              }
              get shadowFar() {
                return this._shadowFar;
              }
              set shadowFar(val) {
                this._shadowFar = Math.min(val, Shadows.MAX_FAR);
                if (this._light) {
                  this._light.shadowFar = this._shadowFar;
                }
              }
              get shadowOrthoSize() {
                return this._shadowOrthoSize;
              }
              set shadowOrthoSize(val) {
                this._shadowOrthoSize = val;
                if (this._light) {
                  this._light.shadowOrthoSize = this._shadowOrthoSize;
                }
              }
              get csmAdvancedOptions() {
                return this._csmAdvancedOptions;
              }
              set csmAdvancedOptions(val) {
                this._csmAdvancedOptions = val;
              }
              get csmLayersTransition() {
                return this._csmLayersTransition;
              }
              set csmLayersTransition(val) {
                this._csmLayersTransition = val;
                if (this._light) {
                  this._light.csmLayersTransition = val;
                }
              }
              get csmTransitionRange() {
                return this._csmTransitionRange;
              }
              set csmTransitionRange(val) {
                this._csmTransitionRange = val;
                if (this._light) {
                  this._light.csmTransitionRange = val;
                }
              }
              constructor() {
                super();
                this._illuminanceHDR = _initializer$6 && _initializer$6();
                this._illuminanceLDR = _initializer2$6 && _initializer2$6();
                this._shadowEnabled = _initializer3$5 && _initializer3$5();
                this._shadowPcf = _initializer4$5 && _initializer4$5();
                this._shadowBias = _initializer5$4 && _initializer5$4();
                this._shadowNormalBias = _initializer6$2 && _initializer6$2();
                this._shadowSaturation = _initializer7$2 && _initializer7$2();
                this._shadowDistance = _initializer8$2 && _initializer8$2();
                this._shadowInvisibleOcclusionRange = _initializer9$2 && _initializer9$2();
                this._csmLevel = _initializer10$2 && _initializer10$2();
                this._csmLayerLambda = _initializer11$1 && _initializer11$1();
                this._csmOptimizationMode = _initializer12 && _initializer12();
                this._csmAdvancedOptions = _initializer13 && _initializer13();
                this._csmLayersTransition = _initializer14 && _initializer14();
                this._csmTransitionRange = _initializer15 && _initializer15();
                this._shadowFixedArea = _initializer16 && _initializer16();
                this._shadowNear = _initializer17 && _initializer17();
                this._shadowFar = _initializer18 && _initializer18();
                this._shadowOrthoSize = _initializer19 && _initializer19();
                this._lightType = DirectionalLight$1;
                const highQualityMode = settings.querySettings(Settings.Category.RENDERING, 'highQualityMode');
                if (highQualityMode) {
                  this._shadowPcf = PCFType.SOFT_2X;
                  this._shadowDistance = 50;
                  this.enableCSM = true;
                  this.staticSettings.castShadow = true;
                }
              }
              _createLight() {
                super._createLight();
                this._type = LightType.DIRECTIONAL;
                if (this._light) {
                  const dirLight = this._light;
                  dirLight.illuminanceHDR = this._illuminanceHDR;
                  dirLight.illuminanceLDR = this._illuminanceLDR;
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
              }
              _onUpdateReceiveDirLight() {
                if (!this._light) {
                  return;
                }
                super._onUpdateReceiveDirLight();
                const scene = this.node.scene;
                if (!scene || !scene.renderScene) {
                  return;
                }
                if (scene.renderScene.mainLight !== this._light) {
                  return;
                }
                const models = scene.renderScene.models;
                for (let i = 0; i < models.length; i++) {
                  const model = models[i];
                  if (!model.node) continue;
                  const meshRender = model.node.getComponent(MeshRenderer);
                  if (!meshRender) continue;
                  meshRender.onUpdateReceiveDirLight(this._visibility);
                }
              }
            }, (_initializer$6 = applyDecoratedInitializer(_class2$6.prototype, "_illuminanceHDR", [property$1, _dec2$6], function () {
              return 65000;
            }), _initializer2$6 = applyDecoratedInitializer(_class2$6.prototype, "_illuminanceLDR", [serializable$1], function () {
              return 65000 * Camera.standardExposureValue;
            }), _initializer3$5 = applyDecoratedInitializer(_class2$6.prototype, "_shadowEnabled", [serializable$1], function () {
              return false;
            }), _initializer4$5 = applyDecoratedInitializer(_class2$6.prototype, "_shadowPcf", [serializable$1], function () {
              return PCFType.HARD;
            }), _initializer5$4 = applyDecoratedInitializer(_class2$6.prototype, "_shadowBias", [serializable$1], function () {
              return 0.00001;
            }), _initializer6$2 = applyDecoratedInitializer(_class2$6.prototype, "_shadowNormalBias", [serializable$1], function () {
              return 0.0;
            }), _initializer7$2 = applyDecoratedInitializer(_class2$6.prototype, "_shadowSaturation", [serializable$1], function () {
              return 1.0;
            }), _initializer8$2 = applyDecoratedInitializer(_class2$6.prototype, "_shadowDistance", [serializable$1], function () {
              return 50;
            }), _initializer9$2 = applyDecoratedInitializer(_class2$6.prototype, "_shadowInvisibleOcclusionRange", [serializable$1], function () {
              return 200;
            }), _initializer10$2 = applyDecoratedInitializer(_class2$6.prototype, "_csmLevel", [serializable$1], function () {
              return CSMLevel.LEVEL_4;
            }), _initializer11$1 = applyDecoratedInitializer(_class2$6.prototype, "_csmLayerLambda", [serializable$1], function () {
              return 0.75;
            }), _initializer12 = applyDecoratedInitializer(_class2$6.prototype, "_csmOptimizationMode", [serializable$1], function () {
              return CSMOptimizationMode.RemoveDuplicates;
            }), _initializer13 = applyDecoratedInitializer(_class2$6.prototype, "_csmAdvancedOptions", [serializable$1], function () {
              return false;
            }), _initializer14 = applyDecoratedInitializer(_class2$6.prototype, "_csmLayersTransition", [serializable$1], function () {
              return false;
            }), _initializer15 = applyDecoratedInitializer(_class2$6.prototype, "_csmTransitionRange", [serializable$1], function () {
              return 0.05;
            }), _initializer16 = applyDecoratedInitializer(_class2$6.prototype, "_shadowFixedArea", [serializable$1], function () {
              return false;
            }), _initializer17 = applyDecoratedInitializer(_class2$6.prototype, "_shadowNear", [serializable$1], function () {
              return 0.1;
            }), _initializer18 = applyDecoratedInitializer(_class2$6.prototype, "_shadowFar", [serializable$1], function () {
              return 10.0;
            }), _initializer19 = applyDecoratedInitializer(_class2$6.prototype, "_shadowOrthoSize", [serializable$1], function () {
              return 5;
            }), _applyDecoratedDescriptor(_class2$6.prototype, "illuminance", [_dec3$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "illuminance"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowEnabled", [_dec4$5, _dec5$5], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowEnabled"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowPcf", [_dec6$5, _dec7$4], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowPcf"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowBias", [_dec8$3, _dec9$2], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowBias"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowNormalBias", [_dec10$2, _dec11$1], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowNormalBias"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowSaturation", [_dec12$1, _dec13], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowSaturation"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowDistance", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowDistance"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowInvisibleOcclusionRange", [_dec16, _dec17], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowInvisibleOcclusionRange"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "csmLevel", [_dec18, _dec19], Object.getOwnPropertyDescriptor(_class2$6.prototype, "csmLevel"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "enableCSM", [_dec20, _dec21], Object.getOwnPropertyDescriptor(_class2$6.prototype, "enableCSM"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "csmLayerLambda", [_dec22, _dec23], Object.getOwnPropertyDescriptor(_class2$6.prototype, "csmLayerLambda"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "csmOptimizationMode", [_dec24, _dec25], Object.getOwnPropertyDescriptor(_class2$6.prototype, "csmOptimizationMode"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowFixedArea", [_dec26, _dec27], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowFixedArea"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowNear", [_dec28, _dec29], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowNear"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowFar", [_dec30, _dec31], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowFar"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "shadowOrthoSize", [_dec32, _dec33], Object.getOwnPropertyDescriptor(_class2$6.prototype, "shadowOrthoSize"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "csmAdvancedOptions", [_dec34, _dec35], Object.getOwnPropertyDescriptor(_class2$6.prototype, "csmAdvancedOptions"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "csmLayersTransition", [_dec36, _dec37], Object.getOwnPropertyDescriptor(_class2$6.prototype, "csmLayersTransition"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "csmTransitionRange", [_dec38, _dec39], Object.getOwnPropertyDescriptor(_class2$6.prototype, "csmTransitionRange"), _class2$6.prototype)), _class2$6)) || _class$6));

            var _dec$5, _dec2$5, _dec3$5, _dec4$4, _dec5$4, _dec6$4, _dec7$3, _class$5, _class2$5, _initializer$5, _initializer2$5, _initializer3$4, _initializer4$4, _initializer5$3;
            let SphereLight = exports('S', (_dec$5 = ccclass$2('cc.SphereLight'), _dec2$5 = formerlySerializedAs$2('_luminance'), _dec3$5 = type$2(CCInteger), _dec4$4 = type$2(CCInteger), _dec5$4 = type$2(PhotometricTerm), _dec6$4 = type$2(CCFloat), _dec7$3 = type$2(CCFloat), _dec$5(_class$5 = (_class2$5 = class SphereLight extends Light {
              get luminousFlux() {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  return this._luminanceHDR * nt2lm(this._size);
                } else {
                  return this._luminanceLDR;
                }
              }
              set luminousFlux(val) {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                let result = 0;
                if (isHDR) {
                  this._luminanceHDR = val / nt2lm(this._size);
                  result = this._luminanceHDR;
                } else {
                  this._luminanceLDR = val;
                  result = this._luminanceLDR;
                }
                this._light && (this._light.luminance = result);
              }
              get luminance() {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  return this._luminanceHDR;
                } else {
                  return this._luminanceLDR;
                }
              }
              set luminance(val) {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  this._luminanceHDR = val;
                  this._light && (this._light.luminanceHDR = this._luminanceHDR);
                } else {
                  this._luminanceLDR = val;
                  this._light && (this._light.luminanceLDR = this._luminanceLDR);
                }
              }
              get term() {
                return this._term;
              }
              set term(val) {
                this._term = val;
              }
              get size() {
                return this._size;
              }
              set size(val) {
                this._size = val;
                if (this._light) {
                  this._light.size = val;
                }
              }
              get range() {
                return this._range;
              }
              set range(val) {
                this._range = val;
                if (this._light) {
                  this._light.range = val;
                }
              }
              constructor() {
                super();
                this._size = _initializer$5 && _initializer$5();
                this._luminanceHDR = _initializer2$5 && _initializer2$5();
                this._luminanceLDR = _initializer3$4 && _initializer3$4();
                this._term = _initializer4$4 && _initializer4$4();
                this._range = _initializer5$3 && _initializer5$3();
                this._lightType = SphereLight$1;
              }
              _createLight() {
                super._createLight();
                this._type = LightType.SPHERE;
                this.size = this._size;
                this.range = this._range;
                if (this._light) {
                  this._light.luminanceHDR = this._luminanceHDR;
                  this._light.luminanceLDR = this._luminanceLDR;
                }
              }
            }, (_initializer$5 = applyDecoratedInitializer(_class2$5.prototype, "_size", [serializable$2], function () {
              return 0.15;
            }), _initializer2$5 = applyDecoratedInitializer(_class2$5.prototype, "_luminanceHDR", [serializable$2, _dec2$5], function () {
              return 1700 / nt2lm(0.15);
            }), _initializer3$4 = applyDecoratedInitializer(_class2$5.prototype, "_luminanceLDR", [serializable$2], function () {
              return 1700 / nt2lm(0.15) * Camera.standardExposureValue * Camera.standardLightMeterScale;
            }), _initializer4$4 = applyDecoratedInitializer(_class2$5.prototype, "_term", [serializable$2], function () {
              return PhotometricTerm.LUMINOUS_FLUX;
            }), _initializer5$3 = applyDecoratedInitializer(_class2$5.prototype, "_range", [serializable$2], function () {
              return 1;
            }), _applyDecoratedDescriptor(_class2$5.prototype, "luminousFlux", [_dec3$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "luminousFlux"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "luminance", [_dec4$4], Object.getOwnPropertyDescriptor(_class2$5.prototype, "luminance"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "term", [_dec5$4], Object.getOwnPropertyDescriptor(_class2$5.prototype, "term"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "size", [_dec6$4], Object.getOwnPropertyDescriptor(_class2$5.prototype, "size"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "range", [_dec7$3], Object.getOwnPropertyDescriptor(_class2$5.prototype, "range"), _class2$5.prototype)), _class2$5)) || _class$5));

            var _dec$4, _dec2$4, _dec3$4, _dec4$3, _dec5$3, _dec6$3, _dec7$2, _dec8$2, _dec9$1, _dec10$1, _dec11, _dec12, _class$4, _class2$4, _initializer$4, _initializer2$4, _initializer3$3, _initializer4$3, _initializer5$2, _initializer6$1, _initializer7$1, _initializer8$1, _initializer9$1, _initializer10$1, _initializer11;
            const {
              ccclass,
              range,
              slide,
              type,
              editable,
              displayOrder,
              help,
              executeInEditMode,
              menu,
              tooltip,
              serializable,
              formerlySerializedAs,
              visible,
              property
            } = _decorator;
            let SpotLight = exports('a', (_dec$4 = ccclass('cc.SpotLight'), _dec2$4 = formerlySerializedAs('_luminance'), _dec3$4 = type(PhotometricTerm), _dec4$3 = type(CCFloat), _dec5$3 = property({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 1
              }
            }), _dec6$3 = type(CCBoolean), _dec7$2 = property({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 2
              }
            }), _dec8$2 = type(PCFType), _dec9$1 = property({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 3
              }
            }), _dec10$1 = type(CCFloat), _dec11 = property({
              group: {
                name: 'DynamicShadowSettings',
                displayOrder: 4
              }
            }), _dec12 = type(CCFloat), _dec$4(_class$4 = (_class2$4 = class SpotLight extends Light {
              get luminousFlux() {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  return this._luminanceHDR * nt2lm(this._size);
                } else {
                  return this._luminanceLDR;
                }
              }
              set luminousFlux(val) {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                let result = 0;
                if (isHDR) {
                  this._luminanceHDR = val / nt2lm(this._size);
                  result = this._luminanceHDR;
                } else {
                  this._luminanceLDR = val;
                  result = this._luminanceLDR;
                }
                this._light && (this._light.luminance = result);
              }
              get luminance() {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  return this._luminanceHDR;
                } else {
                  return this._luminanceLDR;
                }
              }
              set luminance(val) {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  this._luminanceHDR = val;
                  this._light && (this._light.luminanceHDR = this._luminanceHDR);
                } else {
                  this._luminanceLDR = val;
                  this._light && (this._light.luminanceLDR = this._luminanceLDR);
                }
              }
              get term() {
                return this._term;
              }
              set term(val) {
                this._term = val;
              }
              get size() {
                return this._size;
              }
              set size(val) {
                this._size = val;
                if (this._light) {
                  this._light.size = val;
                }
              }
              get range() {
                return this._range;
              }
              set range(val) {
                this._range = val;
                if (this._light) {
                  this._light.range = val;
                }
              }
              get spotAngle() {
                return this._spotAngle;
              }
              set spotAngle(val) {
                this._spotAngle = val;
                if (this._light) {
                  this._light.spotAngle = toRadian(val);
                }
              }
              get angleAttenuationStrength() {
                return this._angleAttenuationStrength;
              }
              set angleAttenuationStrength(val) {
                this._angleAttenuationStrength = val;
                if (this._light) {
                  this._light.angleAttenuationStrength = val;
                }
              }
              get shadowEnabled() {
                return this._shadowEnabled;
              }
              set shadowEnabled(val) {
                this._shadowEnabled = val;
                if (this._light) {
                  this._light.shadowEnabled = val;
                }
              }
              get shadowPcf() {
                return this._shadowPcf;
              }
              set shadowPcf(val) {
                this._shadowPcf = val;
                if (this._light) {
                  this._light.shadowPcf = val;
                }
              }
              get shadowBias() {
                return this._shadowBias;
              }
              set shadowBias(val) {
                this._shadowBias = val;
                if (this._light) {
                  this._light.shadowBias = val;
                }
              }
              get shadowNormalBias() {
                return this._shadowNormalBias;
              }
              set shadowNormalBias(val) {
                this._shadowNormalBias = val;
                if (this._light) {
                  this._light.shadowNormalBias = val;
                }
              }
              constructor() {
                super();
                this._size = _initializer$4 && _initializer$4();
                this._luminanceHDR = _initializer2$4 && _initializer2$4();
                this._luminanceLDR = _initializer3$3 && _initializer3$3();
                this._term = _initializer4$3 && _initializer4$3();
                this._range = _initializer5$2 && _initializer5$2();
                this._spotAngle = _initializer6$1 && _initializer6$1();
                this._angleAttenuationStrength = _initializer7$1 && _initializer7$1();
                this._shadowEnabled = _initializer8$1 && _initializer8$1();
                this._shadowPcf = _initializer9$1 && _initializer9$1();
                this._shadowBias = _initializer10$1 && _initializer10$1();
                this._shadowNormalBias = _initializer11 && _initializer11();
                this._lightType = SpotLight$1;
              }
              _createLight() {
                super._createLight();
                this._type = LightType.SPOT;
                this.size = this._size;
                this.range = this._range;
                this.spotAngle = this._spotAngle;
                this.angleAttenuationStrength = this._angleAttenuationStrength;
                if (this._light) {
                  const spotLight = this._light;
                  spotLight.luminanceHDR = this._luminanceHDR;
                  spotLight.luminanceLDR = this._luminanceLDR;
                  spotLight.shadowEnabled = this._shadowEnabled;
                  spotLight.shadowPcf = this._shadowPcf;
                  spotLight.shadowBias = this._shadowBias;
                  spotLight.shadowNormalBias = this._shadowNormalBias;
                }
              }
            }, (_initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "_size", [serializable], function () {
              return 0.15;
            }), _initializer2$4 = applyDecoratedInitializer(_class2$4.prototype, "_luminanceHDR", [serializable, _dec2$4], function () {
              return 1700 / nt2lm(0.15);
            }), _initializer3$3 = applyDecoratedInitializer(_class2$4.prototype, "_luminanceLDR", [serializable], function () {
              return 1700 / nt2lm(0.15) * Camera.standardExposureValue * Camera.standardLightMeterScale;
            }), _initializer4$3 = applyDecoratedInitializer(_class2$4.prototype, "_term", [serializable], function () {
              return PhotometricTerm.LUMINOUS_FLUX;
            }), _initializer5$2 = applyDecoratedInitializer(_class2$4.prototype, "_range", [serializable], function () {
              return 1;
            }), _initializer6$1 = applyDecoratedInitializer(_class2$4.prototype, "_spotAngle", [serializable], function () {
              return 60;
            }), _initializer7$1 = applyDecoratedInitializer(_class2$4.prototype, "_angleAttenuationStrength", [serializable], function () {
              return 0;
            }), _initializer8$1 = applyDecoratedInitializer(_class2$4.prototype, "_shadowEnabled", [serializable], function () {
              return false;
            }), _initializer9$1 = applyDecoratedInitializer(_class2$4.prototype, "_shadowPcf", [serializable], function () {
              return PCFType.HARD;
            }), _initializer10$1 = applyDecoratedInitializer(_class2$4.prototype, "_shadowBias", [serializable], function () {
              return 0.00001;
            }), _initializer11 = applyDecoratedInitializer(_class2$4.prototype, "_shadowNormalBias", [serializable], function () {
              return 0.0;
            }), _applyDecoratedDescriptor(_class2$4.prototype, "term", [_dec3$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "term"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "size", [_dec4$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "size"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "shadowEnabled", [_dec5$3, _dec6$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "shadowEnabled"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "shadowPcf", [_dec7$2, _dec8$2], Object.getOwnPropertyDescriptor(_class2$4.prototype, "shadowPcf"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "shadowBias", [_dec9$1, _dec10$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "shadowBias"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "shadowNormalBias", [_dec11, _dec12], Object.getOwnPropertyDescriptor(_class2$4.prototype, "shadowNormalBias"), _class2$4.prototype)), _class2$4)) || _class$4));

            var _dec$3, _dec2$3, _dec3$3, _dec4$2, _dec5$2, _dec6$2, _class$3, _class2$3, _initializer$3, _initializer2$3, _initializer3$2, _initializer4$2;
            let PointLight = exports('P', (_dec$3 = ccclass$2('cc.PointLight'), _dec2$3 = formerlySerializedAs$2('_luminance'), _dec3$3 = type$2(CCInteger), _dec4$2 = type$2(CCInteger), _dec5$2 = type$2(PhotometricTerm), _dec6$2 = type$2(CCFloat), _dec$3(_class$3 = (_class2$3 = class PointLight extends Light {
              get luminousFlux() {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  return this._luminanceHDR * nt2lm(1.0);
                } else {
                  return this._luminanceLDR;
                }
              }
              set luminousFlux(val) {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                let result = 0;
                if (isHDR) {
                  this._luminanceHDR = val / nt2lm(1.0);
                  result = this._luminanceHDR;
                } else {
                  this._luminanceLDR = val;
                  result = this._luminanceLDR;
                }
                this._light && (this._light.luminance = result);
              }
              get luminance() {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  return this._luminanceHDR;
                } else {
                  return this._luminanceLDR;
                }
              }
              set luminance(val) {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  this._luminanceHDR = val;
                  this._light && (this._light.luminanceHDR = this._luminanceHDR);
                } else {
                  this._luminanceLDR = val;
                  this._light && (this._light.luminanceLDR = this._luminanceLDR);
                }
              }
              get term() {
                return this._term;
              }
              set term(val) {
                this._term = val;
              }
              get range() {
                return this._range;
              }
              set range(val) {
                this._range = val;
                if (this._light) {
                  this._light.range = val;
                }
              }
              constructor() {
                super();
                this._luminanceHDR = _initializer$3 && _initializer$3();
                this._luminanceLDR = _initializer2$3 && _initializer2$3();
                this._term = _initializer3$2 && _initializer3$2();
                this._range = _initializer4$2 && _initializer4$2();
                this._lightType = PointLight$1;
              }
              _createLight() {
                super._createLight();
                this._type = LightType.POINT;
                this.range = this._range;
                if (this._light) {
                  this._light.luminanceHDR = this._luminanceHDR;
                  this._light.luminanceLDR = this._luminanceLDR;
                }
              }
            }, (_initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "_luminanceHDR", [serializable$2, _dec2$3], function () {
              return 1700 / nt2lm(0.15);
            }), _initializer2$3 = applyDecoratedInitializer(_class2$3.prototype, "_luminanceLDR", [serializable$2], function () {
              return 1700 / nt2lm(0.15) * Camera.standardExposureValue * Camera.standardLightMeterScale;
            }), _initializer3$2 = applyDecoratedInitializer(_class2$3.prototype, "_term", [serializable$2], function () {
              return PhotometricTerm.LUMINOUS_FLUX;
            }), _initializer4$2 = applyDecoratedInitializer(_class2$3.prototype, "_range", [serializable$2], function () {
              return 1;
            }), _applyDecoratedDescriptor(_class2$3.prototype, "luminousFlux", [_dec3$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "luminousFlux"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "luminance", [_dec4$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "luminance"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "term", [_dec5$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "term"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "range", [_dec6$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "range"), _class2$3.prototype)), _class2$3)) || _class$3));

            var _dec$2, _dec2$2, _dec3$2, _class$2, _class2$2, _initializer$2, _initializer2$2;
            let RangedDirectionalLight = exports('R', (_dec$2 = ccclass$2('cc.RangedDirectionalLight'), _dec2$2 = formerlySerializedAs$2('_illuminance'), _dec3$2 = type$2(CCInteger), _dec$2(_class$2 = (_class2$2 = class RangedDirectionalLight extends Light {
              get illuminance() {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  return this._illuminanceHDR;
                } else {
                  return this._illuminanceLDR;
                }
              }
              set illuminance(val) {
                const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
                if (isHDR) {
                  this._illuminanceHDR = val;
                  this._light && (this._light.illuminanceHDR = this._illuminanceHDR);
                } else {
                  this._illuminanceLDR = val;
                  this._light && (this._light.illuminanceLDR = this._illuminanceLDR);
                }
              }
              constructor() {
                super();
                this._illuminanceHDR = _initializer$2 && _initializer$2();
                this._illuminanceLDR = _initializer2$2 && _initializer2$2();
                this._lightType = RangedDirectionalLight$1;
              }
              _createLight() {
                super._createLight();
                this._type = LightType.RANGED_DIRECTIONAL;
                if (this._light) {
                  this._light.illuminanceHDR = this._illuminanceHDR;
                  this._light.illuminanceLDR = this._illuminanceLDR;
                }
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "_illuminanceHDR", [property$2, _dec2$2], function () {
              return 65000;
            }), _initializer2$2 = applyDecoratedInitializer(_class2$2.prototype, "_illuminanceLDR", [serializable$2], function () {
              return 65000 * Camera.standardExposureValue;
            }), _applyDecoratedDescriptor(_class2$2.prototype, "illuminance", [_dec3$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "illuminance"), _class2$2.prototype)), _class2$2)) || _class$2));

            legacyCC.LightComponent = Light;
            setClassAlias(Light, 'cc.LightComponent');
            legacyCC.DirectionalLightComponent = DirectionalLight;
            setClassAlias(DirectionalLight, 'cc.DirectionalLightComponent');
            legacyCC.SphereLightComponent = SphereLight;
            setClassAlias(SphereLight, 'cc.SphereLightComponent');
            legacyCC.SpotLightComponent = SpotLight;
            setClassAlias(SpotLight, 'cc.SpotLightComponent');
            replaceProperty(SpotLight.prototype, 'SpotLight.prototype', [{
              name: 'luminousPower',
              newName: 'luminousFlux',
              customGetter() {
                return this.luminousFlux;
              },
              customSetter(value) {
                this.luminousFlux = value;
              }
            }]);
            replaceProperty(SphereLight.prototype, 'SphereLight.prototype', [{
              name: 'luminousPower',
              newName: 'luminousFlux',
              customGetter() {
                return this.luminousFlux;
              },
              customSetter(value) {
                this.luminousFlux = value;
              }
            }]);
            replaceProperty(Light.PhotometricTerm, 'Light.PhotometricTerm', [{
              name: 'LUMINOUS_POWER',
              newName: 'LUMINOUS_FLUX'
            }]);

            var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _class$1, _class2$1, _initializer$1, _initializer2$1, _dec6$1, _dec7$1, _dec8$1, _class4, _class5, _initializer3$1, _initializer4$1, _initializer5$1;
            const DEFAULT_SCREEN_OCCUPATION = [0.25, 0.125, 0.01];
            let LOD = exports('b', (_dec$1 = ccclass$2('cc.LOD'), _dec2$1 = type$2([MeshRenderer]), _dec3$1 = type$2(CCFloat), _dec4$1 = type$2([MeshRenderer]), _dec5$1 = type$2([CCInteger]), _dec$1(_class$1 = (_class2$1 = class LOD {
              constructor() {
                this._screenUsagePercentage = _initializer$1 && _initializer$1();
                this._renderers = _initializer2$1 && _initializer2$1();
                this._LODData = new LODData();
                this._modelAddedCallback = void 0;
                this._LODData.screenUsagePercentage = this._screenUsagePercentage;
                this._modelAddedCallback = null;
              }
              get screenUsagePercentage() {
                return this._screenUsagePercentage;
              }
              set screenUsagePercentage(val) {
                this._screenUsagePercentage = val;
                this._LODData.screenUsagePercentage = val;
              }
              get renderers() {
                return this._renderers;
              }
              set renderers(meshList) {
                if (meshList === this._renderers) return;
                let modelAdded = false;
                this._renderers.length = 0;
                this._LODData.clearModels();
                for (let i = 0; i < meshList.length; i++) {
                  var _meshList$i;
                  this._renderers[i] = meshList[i];
                  const model = (_meshList$i = meshList[i]) === null || _meshList$i === void 0 ? void 0 : _meshList$i.model;
                  if (model) {
                    modelAdded = true;
                    this._LODData.addModel(model);
                  }
                }
                if (this._modelAddedCallback && modelAdded) {
                  this._modelAddedCallback();
                }
              }
              get triangleCount() {
                const tris = [];
                this._renderers.forEach(meshRenderer => {
                  let count = 0;
                  if (meshRenderer && meshRenderer.mesh) {
                    const primitives = meshRenderer.mesh.struct.primitives;
                    primitives === null || primitives === void 0 ? void 0 : primitives.forEach(subMesh => {
                      if (subMesh && subMesh.indexView) {
                        count += subMesh.indexView.count;
                      }
                    });
                  }
                  tris.push(count / 3);
                });
                return tris;
              }
              get rendererCount() {
                return this._renderers.length;
              }
              get lodData() {
                return this._LODData;
              }
              set modelAddedCallback(callback) {
                this._modelAddedCallback = callback;
              }
              insertRenderer(index, renderer) {
                if (index < 0 || index > this._renderers.length) {
                  index = this._renderers.length;
                }
                this._renderers.splice(index, 0, renderer);
                let modelAdded = false;
                if (renderer.model) {
                  modelAdded = true;
                  this._LODData.addModel(renderer.model);
                }
                if (this._modelAddedCallback && modelAdded) {
                  this._modelAddedCallback();
                }
                return renderer;
              }
              deleteRenderer(index) {
                var _renders$;
                const renders = this._renderers.splice(index, 1);
                const model = renders.length > 0 ? (_renders$ = renders[0]) === null || _renders$ === void 0 ? void 0 : _renders$.model : null;
                if (model) {
                  this._LODData.eraseModel(model);
                }
                return renders[0];
              }
              getRenderer(index) {
                return this._renderers[index] || null;
              }
              setRenderer(index, renderer) {
                if (index < 0 || index >= this.rendererCount) {
                  console.error('setRenderer to LOD error, index out of range');
                  return;
                }
                this.deleteRenderer(index);
                this.insertRenderer(index, renderer);
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_screenUsagePercentage", [serializable$2], function () {
              return 1.0;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_renderers", [_dec2$1, serializable$2], function () {
              return [];
            }), _applyDecoratedDescriptor(_class2$1.prototype, "screenUsagePercentage", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "screenUsagePercentage"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "renderers", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "renderers"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "triangleCount", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "triangleCount"), _class2$1.prototype)), _class2$1)) || _class$1));
            let LODGroup = exports('c', (_dec6$1 = ccclass$2('cc.LODGroup'), _dec7$1 = type$2(CCFloat), _dec8$1 = type$2([LOD]), _dec6$1(_class4 = (_class5 = class LODGroup extends Component {
              constructor() {
                super();
                this._localBoundaryCenter = _initializer3$1 && _initializer3$1();
                this._objectSize = _initializer4$1 && _initializer4$1();
                this._LODs = _initializer5$1 && _initializer5$1();
                this._lodGroup = new LODGroup$1();
                this._eventRegistered = false;
                this._forceUsedLevels = [];
              }
              set localBoundaryCenter(val) {
                this._localBoundaryCenter.set(val);
                this._lodGroup.localBoundaryCenter = val;
              }
              get localBoundaryCenter() {
                return this._localBoundaryCenter.clone();
              }
              get lodCount() {
                return this._LODs.length;
              }
              set objectSize(val) {
                this._objectSize = val;
                this._lodGroup.objectSize = val;
              }
              get objectSize() {
                return this._objectSize;
              }
              get LODs() {
                return this._LODs;
              }
              set LODs(valArray) {
                if (valArray === this._LODs) {
                  this._updateDataToScene();
                  return;
                }
                this._LODs.length = 0;
                this.lodGroup.clearLODs();
                valArray.forEach((lod, index) => {
                  this.lodGroup.insertLOD(index, lod.lodData);
                  this._LODs[index] = lod;
                  lod.modelAddedCallback = this.onLodModelAddedCallback.bind(this);
                });
                this._updateDataToScene();
              }
              get lodGroup() {
                return this._lodGroup;
              }
              onLodModelAddedCallback() {
                if (this.objectSize === 0) {
                  this.recalculateBounds();
                }
              }
              insertLOD(index, screenUsagePercentage, lod) {
                if (index < 0 || index > this.lodCount) {
                  index = this.lodCount;
                }
                if (!lod) {
                  lod = new LOD();
                }
                lod.modelAddedCallback = this.onLodModelAddedCallback.bind(this);
                if (!screenUsagePercentage) {
                  const preLod = this.getLOD(index - 1);
                  const nextLod = this.getLOD(index);
                  if (preLod && nextLod) {
                    screenUsagePercentage = (preLod.screenUsagePercentage + nextLod.screenUsagePercentage) / 2;
                  } else if (preLod && !nextLod) {
                    screenUsagePercentage = preLod.screenUsagePercentage / 2;
                    if (screenUsagePercentage > 0.01) {
                      screenUsagePercentage = 0.01;
                    }
                  } else if (nextLod && !preLod) {
                    screenUsagePercentage = nextLod.screenUsagePercentage;
                    const curNextLOD = this.getLOD(index + 1);
                    nextLod.screenUsagePercentage = (screenUsagePercentage + (curNextLOD ? curNextLOD.screenUsagePercentage : 0)) / 2;
                  } else {
                    screenUsagePercentage = DEFAULT_SCREEN_OCCUPATION[0];
                  }
                }
                lod.screenUsagePercentage = screenUsagePercentage;
                this._LODs.splice(index, 0, lod);
                this._lodGroup.insertLOD(index, lod.lodData);
                this._updateDataToScene();
                if (this.node) {
                  this._emitChangeNode(this.node);
                }
                return lod;
              }
              eraseLOD(index) {
                if (index < 0 || index >= this.lodCount) {
                  console.warn('eraseLOD error, index out of range');
                  return null;
                }
                const lod = this._LODs[index];
                if (!lod) {
                  console.warn('eraseLOD error, LOD not exist at specified index.');
                  return null;
                }
                this._LODs.splice(index, 1);
                this._lodGroup.eraseLOD(index);
                this._updateDataToScene();
                this._emitChangeNode(this.node);
                return lod;
              }
              getLOD(index) {
                if (index < 0 || index >= this.lodCount) {
                  console.warn('getLOD error, index out of range');
                  return null;
                }
                return this._LODs[index];
              }
              setLOD(index, lod) {
                if (index < 0 || index >= this.lodCount) {
                  console.warn('setLOD error, index out of range');
                  return;
                }
                this._LODs[index] = lod;
                lod.modelAddedCallback = this.onLodModelAddedCallback.bind(this);
                this.lodGroup.updateLOD(index, lod.lodData);
                this._updateDataToScene();
              }
              recalculateBounds() {
                function getTransformedBoundary(c, e, transform) {
                  let minPos;
                  let maxPos;
                  const pts = new Array(new Vec3(c.x - e.x, c.y - e.y, c.z - e.z), new Vec3(c.x - e.x, c.y + e.y, c.z - e.z), new Vec3(c.x + e.x, c.y + e.y, c.z - e.z), new Vec3(c.x + e.x, c.y - e.y, c.z - e.z), new Vec3(c.x - e.x, c.y - e.y, c.z + e.z), new Vec3(c.x - e.x, c.y + e.y, c.z + e.z), new Vec3(c.x + e.x, c.y + e.y, c.z + e.z), new Vec3(c.x + e.x, c.y - e.y, c.z + e.z));
                  minPos = pts[0].transformMat4(transform);
                  maxPos = minPos.clone();
                  for (let i = 1; i < 8; ++i) {
                    const pt = pts[i].transformMat4(transform);
                    minPos = Vec3.min(minPos, minPos, pt);
                    maxPos = Vec3.max(maxPos, maxPos, pt);
                  }
                  return [minPos, maxPos];
                }
                const minPos = new Vec3();
                const maxPos = new Vec3();
                let boundsMin = null;
                let boundsMax = new Vec3();
                for (let i = 0; i < this.lodCount; ++i) {
                  const lod = this.getLOD(i);
                  if (lod) {
                    for (let j = 0; j < lod.rendererCount; ++j) {
                      var _renderer$model, _renderer$model2;
                      const renderer = lod.getRenderer(j);
                      if (!renderer) {
                        continue;
                      }
                      (_renderer$model = renderer.model) === null || _renderer$model === void 0 ? void 0 : _renderer$model.updateWorldBound();
                      let worldBounds = (_renderer$model2 = renderer.model) === null || _renderer$model2 === void 0 ? void 0 : _renderer$model2.worldBounds;
                      if (worldBounds) {
                        {
                          const center = worldBounds.center;
                          const halfExtents = worldBounds.halfExtents;
                          worldBounds = AABB.create(center.x, center.y, center.z, halfExtents.x, halfExtents.y, halfExtents.z);
                        }
                        worldBounds.getBoundary(minPos, maxPos);
                        if (boundsMin) {
                          Vec3.min(boundsMin, boundsMin, minPos);
                          Vec3.max(boundsMax, boundsMax, maxPos);
                        } else {
                          boundsMin = minPos.clone();
                          boundsMax = maxPos.clone();
                        }
                      }
                    }
                  }
                }
                if (boundsMin) {
                  const boundsMin2 = boundsMin;
                  const c = new Vec3((boundsMax.x + boundsMin2.x) * 0.5, (boundsMax.y + boundsMin2.y) * 0.5, (boundsMax.z + boundsMin2.z) * 0.5);
                  const e = new Vec3((boundsMax.x - boundsMin2.x) * 0.5, (boundsMax.y - boundsMin2.y) * 0.5, (boundsMax.z - boundsMin2.z) * 0.5);
                  const [minPos, maxPos] = getTransformedBoundary(c, e, this.node.worldMatrix.clone().invert());
                  c.set((maxPos.x + minPos.x) * 0.5, (maxPos.y + minPos.y) * 0.5, (maxPos.z + minPos.z) * 0.5);
                  e.set((maxPos.x - minPos.x) * 0.5, (maxPos.y - minPos.y) * 0.5, (maxPos.z - minPos.z) * 0.5);
                  this.localBoundaryCenter = c;
                  this.objectSize = Math.max(e.x, e.y, e.z) * 2.0;
                } else {
                  this.localBoundaryCenter = new Vec3(0, 0, 0);
                  this.objectSize = 0;
                }
                this._emitChangeNode(this.node);
              }
              resetObjectSize() {
                if (this.objectSize === 1.0) return;
                if (this.objectSize === 0) {
                  this.objectSize = 1.0;
                }
                const scale = 1.0 / this.objectSize;
                this.objectSize = 1.0;
                for (let i = 0; i < this.lodCount; ++i) {
                  const lod = this.getLOD(i);
                  if (lod) {
                    lod.screenUsagePercentage *= scale;
                  }
                }
                this._emitChangeNode(this.node);
              }
              forceLOD(lodLevel) {
                this._forceUsedLevels = lodLevel < 0 ? [] : [lodLevel];
                this.lodGroup.lockLODLevels(this._forceUsedLevels);
              }
              forceLODs(lodIndexArray) {
              }
              onLoad() {
                this._lodGroup.node = this.node;
                this._lodGroup.objectSize = this._objectSize;
                this._lodGroup.localBoundaryCenter = this._localBoundaryCenter;
                if (!this._eventRegistered) {
                  this.node.on(NodeEventType.COMPONENT_REMOVED, this._onRemove, this);
                  this._eventRegistered = true;
                }
                this._constructLOD();
              }
              _onRemove(comp) {
                if (comp === this) {
                  this.onDisable();
                }
              }
              _constructLOD() {
                if (this.lodCount < 1) {
                  const size = DEFAULT_SCREEN_OCCUPATION.length;
                  for (let i = 0; i < size; i++) {
                    this.insertLOD(i, DEFAULT_SCREEN_OCCUPATION[i]);
                  }
                }
              }
              onRestore() {
                this._constructLOD();
                if (this.enabledInHierarchy) {
                  this._attachToScene();
                }
              }
              onEnable() {
                this._attachToScene();
                if (this.objectSize === 0) {
                  this.recalculateBounds();
                }
                this.lodGroup.lockLODLevels(this._forceUsedLevels);
                if (this.lodCount > 0 && this._lodGroup.lodCount < 1) {
                  this._LODs.forEach((lod, index) => {
                    lod.lodData.screenUsagePercentage = lod.screenUsagePercentage;
                    const renderers = lod.renderers;
                    if (renderers !== null && renderers.length > 0) {
                      for (let i = 0; i < renderers.length; i++) {
                        const lodInstance = lod.lodData;
                        const renderer = renderers[i];
                        if (lodInstance && renderer && renderer.model) {
                          lodInstance.addModel(renderer.model);
                        }
                      }
                    }
                    this._lodGroup.insertLOD(index, lod.lodData);
                  });
                }
              }
              onDisable() {
                this._detachFromScene();
                this.lodGroup.lockLODLevels([]);
              }
              _attachToScene() {
                if (this.node && this.node.scene) {
                  const renderScene = this._getRenderScene();
                  if (this._lodGroup.scene) {
                    this._detachFromScene();
                  }
                  renderScene.addLODGroup(this._lodGroup);
                }
              }
              _detachFromScene() {
                if (this._lodGroup.scene) {
                  this._lodGroup.scene.removeLODGroup(this._lodGroup);
                }
              }
              _emitChangeNode(node) {
              }
              _updateDataToScene() {
                this._detachFromScene();
                this._attachToScene();
              }
            }, (_initializer3$1 = applyDecoratedInitializer(_class5.prototype, "_localBoundaryCenter", [serializable$2], function () {
              return new Vec3(0, 0, 0);
            }), _initializer4$1 = applyDecoratedInitializer(_class5.prototype, "_objectSize", [serializable$2], function () {
              return 0;
            }), _initializer5$1 = applyDecoratedInitializer(_class5.prototype, "_LODs", [serializable$2], function () {
              return [];
            }), _applyDecoratedDescriptor(_class5.prototype, "objectSize", [_dec7$1], Object.getOwnPropertyDescriptor(_class5.prototype, "objectSize"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "LODs", [_dec8$1], Object.getOwnPropertyDescriptor(_class5.prototype, "LODs"), _class5.prototype)), _class5)) || _class4));

            const REFLECTION_PROBE_DEFAULT_MASK = Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.UI_3D, Layers.BitMask.GIZMOS, Layers.BitMask.EDITOR, Layers.BitMask.SCENE_GIZMO, Layers.BitMask.PROFILER, Layers.Enum.IGNORE_RAYCAST]);
            class ReflectionProbeManager {
              constructor() {
                this._probes = [];
                this._useCubeModels = new Map();
                this._usePlanarModels = new Map();
                this._updateForRuntime = true;
                this._dataTexture = null;
                this._registeredEvent = false;
              }
              set updateForRuntime(val) {
                this._updateForRuntime = val;
              }
              get updateForRuntime() {
                return this._updateForRuntime;
              }
              registerEvent() {
                if (!this._registeredEvent) {
                  legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_UPDATE, this.onUpdateProbes, this);
                  this._registeredEvent = true;
                }
              }
              onUpdateProbes() {
                if (this._probes.length === 0) return;
                const scene = legacyCC.director.getScene();
                if (!scene || !scene.renderScene) {
                  return;
                }
                const models = scene.renderScene.models;
                for (let i = 0; i < models.length; i++) {
                  const model = models[i];
                  if (!model.node) continue;
                  if (model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) {
                    if (model.reflectionProbeType === ReflectionProbeType.BAKED_CUBEMAP || this._isUsedBlending(model)) {
                      this.selectReflectionProbe(model);
                    } else if (model.reflectionProbeType === ReflectionProbeType.PLANAR_REFLECTION) {
                      this.selectPlanarReflectionProbe(model);
                    }
                  }
                }
              }
              filterModelsForPlanarReflection() {
                if (this._probes.length === 0) return;
                const scene = legacyCC.director.getScene();
                if (!scene || !scene.renderScene) {
                  return;
                }
                const models = scene.renderScene.models;
                for (let i = 0; i < models.length; i++) {
                  const model = models[i];
                  if (!model.node) continue;
                  if (model.node.layer & REFLECTION_PROBE_DEFAULT_MASK && model.reflectionProbeType === ReflectionProbeType.PLANAR_REFLECTION) {
                    this.selectPlanarReflectionProbe(model);
                  }
                }
              }
              clearPlanarReflectionMap(probe) {
                for (const entry of this._usePlanarModels.entries()) {
                  if (entry[1] === probe) {
                    this._updatePlanarMapOfModel(entry[0], null, null);
                  }
                }
              }
              register(probe) {
                const index = this._probes.indexOf(probe);
                if (index === -1) {
                  this._probes.push(probe);
                  this.updateProbeData();
                }
              }
              unregister(probe) {
                for (let i = 0; i < this._probes.length; i++) {
                  if (this._probes[i] === probe) {
                    const del = this._probes.splice(i, 1);
                    if (del[0]) {
                      this._removeDependentModels(del[0]);
                    }
                    break;
                  }
                }
                this.updateProbeData();
              }
              exists(probeId) {
                if (this._probes.length === 0) return false;
                for (let i = 0; i < this._probes.length; i++) {
                  if (this._probes[i].getProbeId() === probeId) {
                    return true;
                  }
                }
                return false;
              }
              getNewReflectionProbeId() {
                let probeId = 0;
                while (true) {
                  if (this.exists(probeId)) {
                    probeId++;
                  } else {
                    return probeId;
                  }
                }
              }
              getProbes() {
                return this._probes;
              }
              getProbeById(probeId) {
                for (let i = 0; i < this._probes.length; i++) {
                  if (this._probes[i].getProbeId() === probeId) {
                    return this._probes[i];
                  }
                }
                return null;
              }
              clearAll() {
                this._probes = [];
              }
              getProbeByCamera(camera) {
                for (let i = 0; i < this._probes.length; i++) {
                  if (this._probes[i].camera === camera) {
                    return this._probes[i];
                  }
                }
                return null;
              }
              updateBakedCubemap(probe) {
                const models = this._getModelsByProbe(probe);
                if (!probe.cubemap) return;
                for (let i = 0; i < models.length; i++) {
                  const model = models[i];
                  this._updateCubemapOfModel(model, probe);
                }
                probe.needRefresh = false;
                if (models.length === 0) {
                  for (const entry of this._useCubeModels.entries()) {
                    if (entry[0].reflectionProbeBlendId === probe.getProbeId()) {
                      this._updateBlendCubemap(entry[0], probe);
                    }
                  }
                }
              }
              updatePlanarMap(probe, texture) {
                if (!probe.node || !probe.node.scene) return;
                const models = this._getModelsByProbe(probe);
                for (let i = 0; i < models.length; i++) {
                  this._updatePlanarMapOfModel(models[i], texture, probe);
                }
                if (probe.previewPlane) {
                  const meshRender = probe.previewPlane.getComponent(MeshRenderer);
                  if (meshRender) {
                    meshRender.updateProbePlanarMap(texture);
                  }
                }
              }
              selectPlanarReflectionProbe(model) {
                if (!model.node || !model.worldBounds || model.reflectionProbeType !== ReflectionProbeType.PLANAR_REFLECTION) return;
                for (let i = 0; i < this._probes.length; i++) {
                  const probe = this._probes[i];
                  if (probe.probeType !== ProbeType.PLANAR) continue;
                  if (model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) {
                    model.updateWorldBound();
                    if (intersect.aabbWithAABB(model.worldBounds, probe.boundingBox)) {
                      this._usePlanarModels.set(model, probe);
                    } else if (this._usePlanarModels.has(model)) {
                      const old = this._usePlanarModels.get(model);
                      if (old === probe) {
                        this._usePlanarModels.delete(model);
                        this._updatePlanarMapOfModel(model, null, null);
                      }
                    }
                  }
                }
                for (let i = 0; i < this._probes.length; i++) {
                  if (this._probes[i].probeType === ProbeType.PLANAR) {
                    if (!this._probes[i].realtimePlanarTexture) {
                      this.updatePlanarMap(this._probes[i], null);
                    } else {
                      this.updatePlanarMap(this._probes[i], this._probes[i].realtimePlanarTexture.getGFXTexture());
                    }
                  }
                }
              }
              selectReflectionProbe(model) {
                if (model.node && model.worldBounds && model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) {
                  model.updateWorldBound();
                  const nearest = this._getNearestProbe(model);
                  if (!nearest) {
                    this._updateCubemapOfModel(model, null);
                    this._useCubeModels.delete(model);
                  } else if (this._useCubeModels.has(model)) {
                    const old = this._useCubeModels.get(model);
                    if (old !== nearest) {
                      this._useCubeModels.set(model, nearest);
                    }
                    nearest.needRefresh = true;
                  } else {
                    this._useCubeModels.set(model, nearest);
                    nearest.needRefresh = true;
                  }
                }
                for (let i = 0; i < this._probes.length; i++) {
                  if (this._probes[i].needRefresh && this._probes[i].probeType === ProbeType.CUBE || this._isUsedBlending(model)) {
                    this.updateBakedCubemap(this._probes[i]);
                  }
                }
              }
              updatePreviewSphere(probe) {
                if (!probe || !probe.previewSphere) return;
                const meshRender = probe.previewSphere.getComponent(MeshRenderer);
                if (meshRender) {
                  meshRender.updateProbeCubemap(probe.cubemap);
                  meshRender.updateReflectionProbeId(probe.getProbeId());
                }
              }
              updatePreviewPlane(probe) {
                if (!probe || !probe.previewPlane) return;
                const meshRender = probe.previewPlane.getComponent(MeshRenderer);
                if (meshRender) {
                  if (probe.realtimePlanarTexture) {
                    this.updatePlanarMap(probe, probe.realtimePlanarTexture.getGFXTexture());
                  }
                }
              }
              updateProbeData() {
                if (this._probes.length === 0) return;
                const maxId = this.getMaxProbeId();
                const height = maxId + 1;
                const dataWidth = 3;
                if (this._dataTexture) {
                  this._dataTexture.destroy();
                }
                const buffer = new Float32Array(4 * dataWidth * height);
                let bufferOffset = 0;
                for (let i = 0; i <= maxId; i++) {
                  const probe = this.getProbeById(i);
                  if (!probe) {
                    bufferOffset += 4 * dataWidth;
                    continue;
                  }
                  if (probe.probeType === ProbeType.CUBE) {
                    buffer[bufferOffset] = probe.node.worldPosition.x;
                    buffer[bufferOffset + 1] = probe.node.worldPosition.y;
                    buffer[bufferOffset + 2] = probe.node.worldPosition.z;
                    buffer[bufferOffset + 3] = 0.0;
                    buffer[bufferOffset + 4] = probe.size.x;
                    buffer[bufferOffset + 5] = probe.size.y;
                    buffer[bufferOffset + 6] = probe.size.z;
                    buffer[bufferOffset + 7] = 0.0;
                    const mipAndUseRGBE = probe.isRGBE() ? 1000 : 0;
                    buffer[bufferOffset + 8] = probe.cubemap ? probe.cubemap.mipmapLevel + mipAndUseRGBE : 1.0 + mipAndUseRGBE;
                  } else {
                    buffer[bufferOffset] = probe.node.up.x;
                    buffer[bufferOffset + 1] = probe.node.up.y;
                    buffer[bufferOffset + 2] = probe.node.up.z;
                    buffer[bufferOffset + 3] = 1.0;
                    buffer[bufferOffset + 4] = 1.0;
                    buffer[bufferOffset + 5] = 1.0;
                    buffer[bufferOffset + 6] = 0.0;
                    buffer[bufferOffset + 7] = 0.0;
                    buffer[bufferOffset + 8] = 1.0;
                  }
                  bufferOffset += 4 * dataWidth;
                }
                const updateView = new Uint8Array(buffer.buffer);
                const image = new ImageAsset({
                  _data: updateView,
                  _compressed: false,
                  width: dataWidth * 4,
                  height,
                  format: PixelFormat.RGBA8888
                });
                this._dataTexture = new Texture2D();
                this._dataTexture.setFilters(Texture2D.Filter.NONE, Texture2D.Filter.NONE);
                this._dataTexture.setMipFilter(Texture2D.Filter.NONE);
                this._dataTexture.setWrapMode(Texture2D.WrapMode.CLAMP_TO_EDGE, Texture2D.WrapMode.CLAMP_TO_EDGE, Texture2D.WrapMode.CLAMP_TO_EDGE);
                this._dataTexture.image = image;
                this._dataTexture.uploadData(updateView);
                for (let i = 0; i < this._probes.length; i++) {
                  const probe = this._probes[i];
                  const models = this._getModelsByProbe(probe);
                  for (let j = 0; j < models.length; j++) {
                    const meshRender = models[j].node.getComponent(MeshRenderer);
                    if (meshRender) {
                      meshRender.updateReflectionProbeDataMap(this._dataTexture);
                    }
                  }
                }
              }
              getMaxProbeId() {
                if (this._probes.length === 0) {
                  return -1;
                }
                if (this._probes.length === 1) {
                  return this._probes[0].getProbeId();
                }
                this._probes.sort((a, b) => a.getProbeId() - b.getProbeId());
                return this._probes[this._probes.length - 1].getProbeId();
              }
              getUsedReflectionProbe(model, planarReflection) {
                if (planarReflection) {
                  if (this._usePlanarModels.has(model)) {
                    return this._usePlanarModels.get(model);
                  }
                } else if (this._useCubeModels.has(model)) {
                  return this._useCubeModels.get(model);
                }
                return null;
              }
              setReflectionProbe(model, probe, blendProbe = null) {
                if (!probe) return;
                this._useCubeModels.set(model, probe);
                this._updateCubemapOfModel(model, probe);
                if (blendProbe) {
                  this._updateBlendProbeInfo(model, probe, blendProbe);
                }
              }
              updateProbeOfModels() {
                if (this._probes.length === 0) return;
                const scene = legacyCC.director.getScene();
                if (!scene || !scene.renderScene) {
                  return;
                }
                const models = scene.renderScene.models;
                for (let i = 0; i < models.length; i++) {
                  const model = models[i];
                  if (!model.node) continue;
                  if (model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) {
                    if (model.reflectionProbeType === ReflectionProbeType.BAKED_CUBEMAP || model.reflectionProbeType === ReflectionProbeType.PLANAR_REFLECTION || this._isUsedBlending(model)) {
                      model.updateReflectionProbeId();
                    }
                  }
                }
              }
              _getNearestProbe(model) {
                if (!model.node || !model.worldBounds || this._probes.length === 0) return null;
                let nearestProbe = null;
                let minDistance = Infinity;
                for (const probe of this._probes) {
                  if (probe.probeType !== ProbeType.CUBE || !probe.validate() || !intersect.aabbWithAABB(model.worldBounds, probe.boundingBox)) {
                    continue;
                  }
                  const distance = Vec3.distance(model.node.worldPosition, probe.node.worldPosition);
                  if (distance < minDistance) {
                    minDistance = distance;
                    nearestProbe = probe;
                  }
                }
                return nearestProbe;
              }
              _getBlendProbe(model) {
                if (!model || !model.node || !model.worldBounds || this._probes.length < 2) {
                  return null;
                }
                const temp = [];
                for (let i = 0; i < this._probes.length; i++) {
                  if (this._probes[i].probeType !== ProbeType.CUBE || !this._probes[i].validate() || !intersect.aabbWithAABB(model.worldBounds, this._probes[i].boundingBox)) {
                    continue;
                  }
                  temp.push(this._probes[i]);
                }
                temp.sort((a, b) => {
                  const aDistance = Vec3.distance(model.node.worldPosition, a.node.worldPosition);
                  const bDistance = Vec3.distance(model.node.worldPosition, b.node.worldPosition);
                  return aDistance - bDistance;
                });
                return temp.length > 1 ? temp[1] : null;
              }
              _getModelsByProbe(probe) {
                const models = [];
                let useModels = this._useCubeModels;
                if (probe.probeType === ProbeType.PLANAR) {
                  useModels = this._usePlanarModels;
                }
                for (const entry of useModels.entries()) {
                  if (entry[1] === probe) {
                    models.push(entry[0]);
                  }
                }
                return models;
              }
              _removeDependentModels(probe) {
                for (const key of this._useCubeModels.keys()) {
                  const p = this._useCubeModels.get(key);
                  if (p !== undefined && p === probe) {
                    this._useCubeModels.delete(key);
                    this.selectReflectionProbe(key);
                  }
                }
                for (const key of this._usePlanarModels.keys()) {
                  const p = this._usePlanarModels.get(key);
                  if (p !== undefined && p === probe) {
                    this._usePlanarModels.delete(key);
                    this.selectPlanarReflectionProbe(key);
                  }
                }
              }
              _updateCubemapOfModel(model, probe) {
                const node = model.node;
                if (!node) {
                  return;
                }
                const meshRender = node.getComponent(MeshRenderer);
                if (!meshRender) {
                  return;
                }
                meshRender.updateProbeCubemap(probe ? probe.cubemap : null);
                meshRender.updateReflectionProbeId(probe && probe.cubemap ? probe.getProbeId() : -1);
                if (probe) {
                  meshRender.updateReflectionProbeDataMap(this._dataTexture);
                  if (this._isUsedBlending(model)) {
                    const blendProbe = this._getBlendProbe(model);
                    this._updateBlendProbeInfo(model, probe, blendProbe);
                  }
                }
              }
              _updatePlanarMapOfModel(model, texture, probe) {
                const meshRender = model.node.getComponent(MeshRenderer);
                if (meshRender) {
                  meshRender.updateProbePlanarMap(texture);
                  if (probe) {
                    meshRender.updateReflectionProbeId(probe.getProbeId());
                    meshRender.updateReflectionProbeDataMap(this._dataTexture);
                  } else {
                    meshRender.updateReflectionProbeId(-1);
                  }
                }
              }
              _isUsedBlending(model) {
                if (model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES || model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
                  return true;
                }
                return false;
              }
              _updateBlendProbeInfo(model, probe, blendProbe) {
                const node = model.node;
                if (!node) {
                  return;
                }
                const meshRender = node.getComponent(MeshRenderer);
                if (!meshRender) {
                  return;
                }
                if (blendProbe) {
                  meshRender.updateReflectionProbeBlendId(blendProbe.getProbeId());
                  meshRender.updateProbeBlendCubemap(blendProbe.cubemap);
                  meshRender.updateReflectionProbeBlendWeight(this._calculateBlendWeight(model, probe, blendProbe));
                } else {
                  meshRender.updateReflectionProbeBlendId(-1);
                  if (model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
                    meshRender.updateReflectionProbeBlendWeight(this._calculateBlendWeight(model, probe, blendProbe));
                  }
                }
              }
              _updateBlendCubemap(model, probe) {
                const node = model.node;
                if (!node) {
                  return;
                }
                if (!this._isUsedBlending(model)) {
                  return;
                }
                const meshRender = node.getComponent(MeshRenderer);
                if (meshRender) {
                  meshRender.updateProbeBlendCubemap(probe.cubemap);
                }
              }
              _calculateBlendWeight(model, probe, blendProbe) {
                if (blendProbe) {
                  const d1 = Vec3.distance(model.node.worldPosition, probe.node.worldPosition);
                  const d2 = Vec3.distance(model.node.worldPosition, blendProbe.node.worldPosition);
                  return 1.0 - d2 / (d1 + d2);
                }
                if (model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES) {
                  return 0.0;
                } else if (model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
                  return this._calculateBlendOfSkybox(model.worldBounds, probe.boundingBox);
                }
                return 0.0;
              }
              _calculateBlendOfSkybox(aabb1, aabb2) {
                if (!aabb1) return 1.0;
                const aMin = new Vec3();
                const aMax = new Vec3();
                const bMin = new Vec3();
                const bMax = new Vec3();
                Vec3.subtract(aMin, aabb1.center, aabb1.halfExtents);
                Vec3.add(aMax, aabb1.center, aabb1.halfExtents);
                Vec3.subtract(bMin, aabb2.center, aabb2.halfExtents);
                Vec3.add(bMax, aabb2.center, aabb2.halfExtents);
                const inside = aMin.x <= bMax.x && aMax.x >= bMin.x && aMin.y <= bMax.y && aMax.y >= bMin.y && aMin.z <= bMax.z && aMax.z >= bMin.z;
                if (inside) {
                  const fullSize = new Vec3();
                  Vec3.multiplyScalar(fullSize, aabb1.halfExtents, 2.0);
                  const boundaryXAdd = aMin.x + fullSize.x <= bMax.x && aMax.x + fullSize.x >= bMin.x;
                  const boundaryXSub = aMin.x - fullSize.x <= bMax.x && aMax.x - fullSize.x >= bMin.x;
                  const boundaryYAdd = aMin.y + fullSize.y <= bMax.y && aMax.y + fullSize.y >= bMin.y;
                  const boundaryYSub = aMin.y - fullSize.y <= bMax.y && aMax.y - fullSize.y >= bMin.y;
                  const boundaryZAdd = aMin.z + fullSize.z <= bMax.z && aMax.z + fullSize.z >= bMin.z;
                  const boundaryZSub = aMin.z - fullSize.z <= bMax.z && aMax.z - fullSize.z >= bMin.z;
                  const weights = [];
                  if (!boundaryXAdd) {
                    const offset = aMax.x - bMax.x;
                    weights.push(offset / fullSize.x);
                  }
                  if (!boundaryXSub) {
                    const offset = Math.abs(aMin.x - bMin.x);
                    weights.push(offset / fullSize.x);
                  }
                  if (!boundaryYAdd) {
                    const offset = aMax.y - bMax.y;
                    weights.push(offset / fullSize.y);
                  }
                  if (!boundaryYSub) {
                    const offset = Math.abs(aMin.y - bMin.y);
                    weights.push(offset / fullSize.y);
                  }
                  if (!boundaryZAdd) {
                    const offset = aMax.z - bMax.z;
                    weights.push(offset / fullSize.z);
                  }
                  if (!boundaryZSub) {
                    const offset = Math.abs(aMin.z - bMin.z);
                    weights.push(offset / fullSize.z);
                  }
                  if (weights.length > 0) {
                    weights.sort((a, b) => b - a);
                    return weights[0];
                  } else {
                    return 0.0;
                  }
                }
                return 1.0;
              }
            } exports('e', ReflectionProbeManager);
            ReflectionProbeManager.probeManager = void 0;
            ReflectionProbeManager.probeManager = new ReflectionProbeManager();
            legacyCC.internal.reflectionProbeManager = ReflectionProbeManager.probeManager;

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _class3;
            let ProbeResolution;
            (function (ProbeResolution) {
              ProbeResolution[ProbeResolution["Low_256x256"] = 256] = "Low_256x256";
              ProbeResolution[ProbeResolution["Medium_512x512"] = 512] = "Medium_512x512";
              ProbeResolution[ProbeResolution["High_768x768"] = 768] = "High_768x768";
            })(ProbeResolution || (ProbeResolution = {}));
            let ReflectionProbe = exports('d', (_dec = ccclass$2('cc.ReflectionProbe'), _dec2 = type$2(Vec3), _dec3 = type$2(Enum(ProbeType)), _dec4 = type$2(Enum(ProbeResolution)), _dec5 = type$2(Enum(ProbeClearFlag)), _dec6 = type$2(Color), _dec7 = type$2(Layers.BitMask), _dec8 = type$2(Camera$1), _dec9 = type$2(CCBoolean), _dec10 = type$2(TextureCube), _dec(_class = (_class2 = (_class3 = class ReflectionProbe extends Component {
              constructor(...args) {
                super(...args);
                this._lastSize = new Vec3();
                this._resolution = _initializer && _initializer();
                this._clearFlag = _initializer2 && _initializer2();
                this._backgroundColor = _initializer3 && _initializer3();
                this._visibility = _initializer4 && _initializer4();
                this._probeType = _initializer5 && _initializer5();
                this._cubemap = _initializer6 && _initializer6();
                this._size = _initializer7 && _initializer7();
                this._sourceCamera = _initializer8 && _initializer8();
                this._probeId = _initializer9 && _initializer9();
                this._fastBake = _initializer10 && _initializer10();
                this._probe = null;
                this._previewSphere = null;
                this._previewPlane = null;
                this._sourceCameraPos = new Vec3(0, 0, 0);
                this._position = new Vec3(0, 0, 0);
              }
              set size(value) {
                this._size.set(value);
                absolute(this._size);
                this.probe.size = this._size;
                if (this.probe) {
                  this.probe.updateBoundingBox();
                  ReflectionProbeManager.probeManager.onUpdateProbes();
                  ReflectionProbeManager.probeManager.updateProbeData();
                  ReflectionProbeManager.probeManager.updateProbeOfModels();
                }
              }
              get size() {
                return this._size;
              }
              set probeType(value) {
                this.probe.probeType = value;
                if (value !== this._probeType) {
                  const lastSize = this._size.clone();
                  const lastSizeIsNoExist = Vec3.equals(this._lastSize, Vec3.ZERO);
                  this._probeType = value;
                  if (this._probeType === ProbeType.CUBE) {
                    if (lastSizeIsNoExist) {
                      this._size.set(ReflectionProbe.DEFAULT_CUBE_SIZE);
                    }
                    this.probe.switchProbeType(value, null);
                    ReflectionProbeManager.probeManager.clearPlanarReflectionMap(this.probe);
                  } else {
                    if (lastSizeIsNoExist) {
                      this._size.set(ReflectionProbe.DEFAULT_PLANER_SIZE);
                    }
                    if (!this._sourceCamera) {
                      warn('the reflection camera is invalid, please set the reflection camera');
                    } else {
                      this.probe.switchProbeType(value, this._sourceCamera.camera);
                    }
                  }
                  if (!lastSizeIsNoExist) {
                    this._size.set(this._lastSize);
                  }
                  this._lastSize.set(lastSize);
                  this.size = this._size;
                }
              }
              get probeType() {
                return this._probeType;
              }
              set resolution(value) {
                this._resolution = value;
                this.probe.resolution = value;
              }
              get resolution() {
                return this._resolution;
              }
              set clearFlag(value) {
                this._clearFlag = value;
                this.probe.clearFlag = this._clearFlag;
              }
              get clearFlag() {
                return this._clearFlag;
              }
              set backgroundColor(val) {
                this._backgroundColor = val;
                this.probe.backgroundColor = this._backgroundColor;
              }
              get backgroundColor() {
                return this._backgroundColor;
              }
              get visibility() {
                return this._visibility;
              }
              set visibility(val) {
                this._visibility = val;
                this.probe.visibility = this._visibility;
              }
              set sourceCamera(camera) {
                this._sourceCamera = camera;
                if (camera) {
                  this.visibility = camera.visibility;
                  this.clearFlag = camera.clearFlags;
                  this.backgroundColor = camera.clearColor;
                  if (this.probeType === ProbeType.PLANAR) {
                    this.probe.switchProbeType(this.probeType, camera.camera);
                  }
                }
              }
              get sourceCamera() {
                return this._sourceCamera;
              }
              get fastBake() {
                return this._fastBake;
              }
              set fastBake(val) {
                this._fastBake = val;
              }
              set cubemap(val) {
                this._cubemap = val;
                this.probe.cubemap = val;
                ReflectionProbeManager.probeManager.onUpdateProbes();
              }
              get cubemap() {
                return this._cubemap;
              }
              get probe() {
                return this._probe;
              }
              set previewSphere(val) {
                this._previewSphere = val;
                if (this.probe) {
                  this.probe.previewSphere = val;
                  if (this._previewSphere) {
                    ReflectionProbeManager.probeManager.updatePreviewSphere(this.probe);
                  }
                }
              }
              get previewSphere() {
                return this._previewSphere;
              }
              set previewPlane(val) {
                this._previewPlane = val;
                if (this.probe) {
                  this.probe.previewPlane = val;
                  if (this._previewPlane) {
                    ReflectionProbeManager.probeManager.updatePreviewPlane(this.probe);
                  }
                }
              }
              get previewPlane() {
                return this._previewPlane;
              }
              onLoad() {
                this._createProbe();
              }
              onEnable() {
                if (this._probe) {
                  const probe = ReflectionProbeManager.probeManager.getProbeById(this._probeId);
                  if (probe !== null && probe !== this._probe) {
                    this._probeId = ReflectionProbeManager.probeManager.getNewReflectionProbeId();
                    this._probe.updateProbeId(this._probeId);
                  }
                  ReflectionProbeManager.probeManager.register(this._probe);
                  ReflectionProbeManager.probeManager.onUpdateProbes();
                  this._probe.enable();
                }
              }
              onDisable() {
                if (this._probe) {
                  ReflectionProbeManager.probeManager.unregister(this._probe);
                  this._probe.disable();
                }
              }
              start() {
                if (this._sourceCamera && this.probeType === ProbeType.PLANAR) {
                  this.probe.renderPlanarReflection(this.sourceCamera.camera);
                  ReflectionProbeManager.probeManager.filterModelsForPlanarReflection();
                }
                ReflectionProbeManager.probeManager.updateProbeData();
                this._position = this.node.getWorldPosition().clone();
              }
              onDestroy() {
                if (this.probe) {
                  this.probe.destroy();
                }
              }
              update(dt) {
                if (!this.probe) return;
                if (this.probeType === ProbeType.PLANAR && this.sourceCamera) {
                  if (this.sourceCamera.node.hasChangedFlags & TransformBit.TRS || !this._sourceCameraPos.equals(this.sourceCamera.node.getWorldPosition())) {
                    this._sourceCameraPos = this.sourceCamera.node.getWorldPosition();
                    this.probe.renderPlanarReflection(this.sourceCamera.camera);
                  }
                }
                if (this.node.hasChangedFlags & TransformBit.POSITION) {
                  this.probe.updateBoundingBox();
                  ReflectionProbeManager.probeManager.onUpdateProbes();
                  ReflectionProbeManager.probeManager.updateProbeData();
                }
                {
                  const worldPos = this.node.getWorldPosition();
                  if (!this._position.equals(worldPos)) {
                    this._position = worldPos;
                    this.probe.updateBoundingBox();
                    ReflectionProbeManager.probeManager.updateProbeData();
                    ReflectionProbeManager.probeManager.updateProbeOfModels();
                  }
                }
              }
              clearBakedCubemap() {
                this.cubemap = null;
                ReflectionProbeManager.probeManager.updateBakedCubemap(this.probe);
                ReflectionProbeManager.probeManager.updatePreviewSphere(this.probe);
              }
              _createProbe() {
                if (this._probeId === -1 || ReflectionProbeManager.probeManager.exists(this._probeId)) {
                  this._probeId = ReflectionProbeManager.probeManager.getNewReflectionProbeId();
                }
                this._probe = new ReflectionProbe$1(this._probeId);
                if (this._probe) {
                  const cameraNode = new Node('ReflectionProbeCamera');
                  cameraNode.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
                  this.node.scene.addChild(cameraNode);
                  this._probe.initialize(this.node, cameraNode);
                  if (this.enabled) {
                    ReflectionProbeManager.probeManager.register(this._probe);
                  }
                  this._probe.resolution = this._resolution;
                  this._probe.clearFlag = this._clearFlag;
                  this._probe.backgroundColor = this._backgroundColor;
                  this._probe.visibility = this._visibility;
                  this._probe.probeType = this._probeType;
                  this._probe.size = this._size;
                  this._probe.cubemap = this._cubemap;
                }
              }
            }, _class3.DEFAULT_CUBE_SIZE = new Vec3(1, 1, 1), _class3.DEFAULT_PLANER_SIZE = new Vec3(5, 0.5, 5), _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "_resolution", [serializable$2], function () {
              return 256;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_clearFlag", [serializable$2], function () {
              return ProbeClearFlag.SKYBOX;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_backgroundColor", [serializable$2], function () {
              return new Color(0, 0, 0, 255);
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_visibility", [serializable$2], function () {
              return CAMERA_DEFAULT_MASK;
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_probeType", [serializable$2], function () {
              return ProbeType.CUBE;
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_cubemap", [serializable$2], function () {
              return null;
            }), _initializer7 = applyDecoratedInitializer(_class2.prototype, "_size", [serializable$2], function () {
              return new Vec3(1, 1, 1);
            }), _initializer8 = applyDecoratedInitializer(_class2.prototype, "_sourceCamera", [serializable$2], function () {
              return null;
            }), _initializer9 = applyDecoratedInitializer(_class2.prototype, "_probeId", [serializable$2], function () {
              return -1;
            }), _initializer10 = applyDecoratedInitializer(_class2.prototype, "_fastBake", [serializable$2], function () {
              return false;
            }), _applyDecoratedDescriptor(_class2.prototype, "size", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "probeType", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "probeType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resolution", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "resolution"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clearFlag", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "clearFlag"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "backgroundColor", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "backgroundColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "visibility", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "visibility"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sourceCamera", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "sourceCamera"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fastBake", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "fastBake"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cubemap", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "cubemap"), _class2.prototype)), _class2)) || _class));

            legacyCC.utils = utils;

        })
    };
}));
