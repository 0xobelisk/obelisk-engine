System.register("q-bundled:///fs/cocos/scene-graph/scene-globals.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../asset/assets/texture-cube.js", "../core/data/utils/attribute.js", "../core/math/index.js", "../render-scene/scene/ambient.js", "../render-scene/scene/shadows.js", "../render-scene/scene/skybox.js", "../render-scene/scene/fog.js", "../core/global-exports.js", "../core/platform/debug.js", "../asset/assets/material.js", "../core/index.js", "./node-event.js", "../render-scene/scene/post-settings.js"], function (_export, _context) {
  "use strict";

  var ccclass, visible, type, displayOrder, readOnly, slide, range, rangeStep, editable, serializable, rangeMin, tooltip, formerlySerializedAs, displayName, BAIDU, TextureCube, CCFloat, CCInteger, Color, Quat, Vec3, Vec2, Vec4, Ambient, ShadowType, ShadowSize, EnvironmentLightingType, FogType, legacyCC, warnID, Material, cclegacy, NodeEventType, ToneMappingType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _class4, _class5, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _class7, _class8, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26, _initializer27, _class9, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _class10, _class11, _initializer28, _initializer29, _initializer30, _initializer31, _initializer32, _initializer33, _initializer34, _initializer35, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _class13, _class14, _initializer36, _initializer37, _initializer38, _initializer39, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _class16, _class17, _initializer40, _initializer41, _initializer42, _dec110, _dec111, _dec112, _class19, _class20, _initializer43, _dec113, _dec114, _dec115, _dec116, _dec117, _dec118, _dec119, _dec120, _dec121, _dec122, _dec123, _dec124, _dec125, _dec126, _dec127, _dec128, _dec129, _dec130, _dec131, _dec132, _class22, _class23, _initializer44, _initializer45, _initializer46, _initializer47, _initializer48, _initializer49, _initializer50, _initializer51, _initializer52, _dec133, _dec134, _class25, _class26, _initializer53, _initializer54, _initializer55, _initializer56, _initializer57, _initializer58, _initializer59, _initializer60, _initializer61, _initializer62, _up, _v3, _v4, _col, _qt, normalizeHDRColor, AmbientInfo, SkyboxInfo, FogInfo, ShadowsInfo, DEFAULT_WORLD_MIN_POS, DEFAULT_WORLD_MAX_POS, DEFAULT_OCTREE_DEPTH, OctreeInfo, SkinInfo, PostSettingsInfo, LightProbeInfo, SceneGlobals;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      visible = _coreDataDecoratorsIndexJs.visible;
      type = _coreDataDecoratorsIndexJs.type;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      readOnly = _coreDataDecoratorsIndexJs.readOnly;
      slide = _coreDataDecoratorsIndexJs.slide;
      range = _coreDataDecoratorsIndexJs.range;
      rangeStep = _coreDataDecoratorsIndexJs.rangeStep;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      rangeMin = _coreDataDecoratorsIndexJs.rangeMin;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      formerlySerializedAs = _coreDataDecoratorsIndexJs.formerlySerializedAs;
      displayName = _coreDataDecoratorsIndexJs.displayName;
    }, function (_virtualInternal253AconstantsJs) {
      BAIDU = _virtualInternal253AconstantsJs.BAIDU;
    }, function (_assetAssetsTextureCubeJs) {
      TextureCube = _assetAssetsTextureCubeJs.TextureCube;
    }, function (_coreDataUtilsAttributeJs) {
      CCFloat = _coreDataUtilsAttributeJs.CCFloat;
      CCInteger = _coreDataUtilsAttributeJs.CCInteger;
    }, function (_coreMathIndexJs) {
      Color = _coreMathIndexJs.Color;
      Quat = _coreMathIndexJs.Quat;
      Vec3 = _coreMathIndexJs.Vec3;
      Vec2 = _coreMathIndexJs.Vec2;
      Vec4 = _coreMathIndexJs.Vec4;
    }, function (_renderSceneSceneAmbientJs) {
      Ambient = _renderSceneSceneAmbientJs.Ambient;
    }, function (_renderSceneSceneShadowsJs) {
      ShadowType = _renderSceneSceneShadowsJs.ShadowType;
      ShadowSize = _renderSceneSceneShadowsJs.ShadowSize;
    }, function (_renderSceneSceneSkyboxJs) {
      EnvironmentLightingType = _renderSceneSceneSkyboxJs.EnvironmentLightingType;
    }, function (_renderSceneSceneFogJs) {
      FogType = _renderSceneSceneFogJs.FogType;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_corePlatformDebugJs) {
      warnID = _corePlatformDebugJs.warnID;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_nodeEventJs) {
      NodeEventType = _nodeEventJs.NodeEventType;
    }, function (_renderSceneScenePostSettingsJs) {
      ToneMappingType = _renderSceneScenePostSettingsJs.ToneMappingType;
    }],
    execute: function () {
      _up = new Vec3(0, 1, 0);
      _v3 = new Vec3();
      _v4 = new Vec4();
      _col = new Color();
      _qt = new Quat(); // Normalize HDR color
      normalizeHDRColor = color => {
        const intensity = 1.0 / Math.max(Math.max(Math.max(color.x, color.y), color.z), 0.0001);
        if (intensity < 1.0) {
          color.x *= intensity;
          color.y *= intensity;
          color.z *= intensity;
        }
      };
      /**
       * @en Environment lighting configuration in the Scene
       * @zh 场景的环境光照相关配置
       */
      _export("AmbientInfo", AmbientInfo = (_dec = ccclass('cc.AmbientInfo'), _dec2 = visible(() => {
        const scene = legacyCC.director.getScene();
        const skybox = scene.globals.skybox;
        if (skybox.useIBL && skybox.applyDiffuseMap) {
          return false;
        } else {
          return true;
        }
      }), _dec3 = tooltip('i18n:ambient.skyLightingColor'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:ambient.skyIllum'), _dec6 = range([0, Number.POSITIVE_INFINITY, 100]), _dec7 = visible(() => {
        const scene = legacyCC.director.getScene();
        const skybox = scene.globals.skybox;
        if (skybox.useIBL && skybox.applyDiffuseMap) {
          return false;
        } else {
          return true;
        }
      }), _dec8 = tooltip('i18n:ambient.groundLightingColor'), _dec9 = formerlySerializedAs('_skyColor'), _dec10 = formerlySerializedAs('_skyIllum'), _dec11 = formerlySerializedAs('_groundAlbedo'), _dec(_class = (_class2 = class AmbientInfo {
        constructor() {
          this._skyColorHDR = _initializer && _initializer();
          this._skyIllumHDR = _initializer2 && _initializer2();
          this._groundAlbedoHDR = _initializer3 && _initializer3();
          this._skyColorLDR = _initializer4 && _initializer4();
          this._skyIllumLDR = _initializer5 && _initializer5();
          this._groundAlbedoLDR = _initializer6 && _initializer6();
          this._resource = null;
        }
        /**
         * @en The sky color in HDR mode
         * @zh HDR 模式下的天空光照色
         */
        get skyColorHDR() {
          return this._skyColorHDR;
        }

        /**
         * @en The ground color in HDR mode
         * @zh HDR 模式下的地面光照色
         */
        get groundAlbedoHDR() {
          return this._groundAlbedoHDR;
        }

        /**
         * @en Sky illuminance in HDR mode
         * @zh HDR 模式下的天空亮度
         */
        get skyIllumHDR() {
          return this._skyIllumHDR;
        }

        /**
         * @en The sky color in LDR mode
         * @zh LDR 模式下的天空光照色
         */
        get skyColorLDR() {
          return this._skyColorLDR;
        }

        /**
         * @en The ground color in LDR mode
         * @zh LDR 模式下的地面光照色
         */
        get groundAlbedoLDR() {
          return this._groundAlbedoLDR;
        }

        /**
         * @en Sky illuminance in LDR mode
         * @zh LDR 模式下的天空亮度
         */
        get skyIllumLDR() {
          return this._skyIllumLDR;
        }

        /**
         * @en Sky lighting color configurable in editor with color picker
         * @zh 编辑器中可配置的天空光照颜色（通过颜色拾取器）
         */
        set skyLightingColor(val) {
          _v4.set(val.x, val.y, val.z, val.w);
          if (legacyCC.director.root.pipeline.pipelineSceneData.isHDR) {
            this._skyColorHDR.set(_v4);
          } else {
            this._skyColorLDR.set(_v4);
          }
          if (this._resource) {
            this._resource.skyColor.set(_v4);
          }
        }
        get skyLightingColor() {
          const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
          _v4.set(isHDR ? this._skyColorHDR : this._skyColorLDR);
          normalizeHDRColor(_v4);
          return _col.set(_v4.x * 255, _v4.y * 255, _v4.z * 255, 255);
        }

        /**
         * @internal
         */
        set skyColor(val) {
          if (legacyCC.director.root.pipeline.pipelineSceneData.isHDR) {
            this._skyColorHDR.set(val);
          } else {
            this._skyColorLDR.set(val);
          }
          if (this._resource) {
            this._resource.skyColor.set(val);
          }
        }

        /**
         * @en Sky illuminance
         * @zh 天空亮度
         */
        set skyIllum(val) {
          if (legacyCC.director.root.pipeline.pipelineSceneData.isHDR) {
            this._skyIllumHDR = val;
          } else {
            this._skyIllumLDR = val;
          }
          if (this._resource) {
            this._resource.skyIllum = val;
          }
        }
        get skyIllum() {
          if (legacyCC.director.root.pipeline.pipelineSceneData.isHDR) {
            return this._skyIllumHDR;
          } else {
            return this._skyIllumLDR;
          }
        }

        /**
         * @en Ground lighting color configurable in editor with color picker
         * @zh 编辑器中可配置的地面光照颜色（通过颜色拾取器）
         */
        set groundLightingColor(val) {
          _v4.set(val.x, val.y, val.z, val.w);
          if (legacyCC.director.root.pipeline.pipelineSceneData.isHDR) {
            this._groundAlbedoHDR.set(_v4);
          } else {
            this._groundAlbedoLDR.set(_v4);
          }
          if (this._resource) {
            this._resource.groundAlbedo.set(_v4);
          }
        }
        get groundLightingColor() {
          const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
          _v4.set(isHDR ? this._groundAlbedoHDR : this._groundAlbedoLDR);
          normalizeHDRColor(_v4);
          return _col.set(_v4.x * 255, _v4.y * 255, _v4.z * 255, 255);
        }

        /**
         * @internal
         */
        set groundAlbedo(val) {
          if (legacyCC.director.root.pipeline.pipelineSceneData.isHDR) {
            this._groundAlbedoHDR.set(val);
          } else {
            this._groundAlbedoLDR.set(val);
          }
          if (this._resource) {
            this._resource.groundAlbedo.set(val);
          }
        }
        /**
         * @en Activate the ambient lighting configuration in the render scene, no need to invoke manually.
         * @zh 在渲染场景中启用环境光照设置，不需要手动调用
         * @param resource The ambient configuration object in the render scene
         */
        activate(resource) {
          this._resource = resource;
          this._resource.initialize(this);
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "skyLightingColor", [_dec2, editable, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "skyLightingColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "skyIllum", [editable, _dec4, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "skyIllum"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "groundLightingColor", [_dec7, editable, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "groundLightingColor"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_skyColorHDR", [serializable, _dec9], function () {
        return new Vec4(0.2, 0.5, 0.8, 1.0);
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_skyIllumHDR", [serializable, _dec10], function () {
        return Ambient.SKY_ILLUM;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_groundAlbedoHDR", [serializable, _dec11], function () {
        return new Vec4(0.2, 0.2, 0.2, 1.0);
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_skyColorLDR", [serializable], function () {
        return new Vec4(0.2, 0.5, 0.8, 1.0);
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_skyIllumLDR", [serializable], function () {
        return Ambient.SKY_ILLUM;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_groundAlbedoLDR", [serializable], function () {
        return new Vec4(0.2, 0.2, 0.2, 1.0);
      })), _class2)) || _class));
      legacyCC.AmbientInfo = AmbientInfo;

      /**
       * @en Skybox related configuration
       * @zh 天空盒相关配置
       */
      _export("SkyboxInfo", SkyboxInfo = (_dec12 = ccclass('cc.SkyboxInfo'), _dec13 = tooltip('i18n:skybox.enabled'), _dec14 = type(EnvironmentLightingType), _dec15 = tooltip('i18n:skybox.EnvironmentLightingType'), _dec16 = tooltip('i18n:skybox.useHDR'), _dec17 = type(TextureCube), _dec18 = tooltip('i18n:skybox.envmap'), _dec19 = type(CCFloat), _dec20 = range([0, 360, 1]), _dec21 = tooltip('i18n:skybox.rotationAngle'), _dec22 = visible(function () {
        if (this.useIBL && this.applyDiffuseMap) {
          return true;
        }
        return false;
      }), _dec23 = type(TextureCube), _dec24 = displayOrder(100), _dec25 = visible(function () {
        var _this$_resource;
        if ((_this$_resource = this._resource) !== null && _this$_resource !== void 0 && _this$_resource.reflectionMap) {
          return true;
        }
        return false;
      }), _dec26 = type(TextureCube), _dec27 = displayOrder(100), _dec28 = type(Material), _dec29 = tooltip('i18n:skybox.material'), _dec30 = type(TextureCube), _dec31 = formerlySerializedAs('_envmap'), _dec32 = type(TextureCube), _dec33 = type(TextureCube), _dec34 = type(TextureCube), _dec35 = type(Material), _dec36 = type(TextureCube), _dec37 = type(TextureCube), _dec12(_class4 = (_class5 = class SkyboxInfo {
        constructor() {
          this._envLightingType = _initializer7 && _initializer7();
          this._envmapHDR = _initializer8 && _initializer8();
          this._envmapLDR = _initializer9 && _initializer9();
          this._diffuseMapHDR = _initializer10 && _initializer10();
          this._diffuseMapLDR = _initializer11 && _initializer11();
          this._enabled = _initializer12 && _initializer12();
          this._useHDR = _initializer13 && _initializer13();
          this._editableMaterial = _initializer14 && _initializer14();
          this._reflectionHDR = _initializer15 && _initializer15();
          this._reflectionLDR = _initializer16 && _initializer16();
          this._rotationAngle = _initializer17 && _initializer17();
          this._resource = null;
        }
        /**
         * @en Whether to use diffuse convolution map. Enabled -> Will use map specified. Disabled -> Will revert to hemispheric lighting
         * @zh 是否为IBL启用漫反射卷积图？不启用的话将使用默认的半球光照
         */
        set applyDiffuseMap(val) {
          if (this._resource) {
            this._resource.useDiffuseMap = val;
          }
        }
        get applyDiffuseMap() {
          if (EnvironmentLightingType.DIFFUSEMAP_WITH_REFLECTION === this._envLightingType) {
            return true;
          }
          return false;
        }
        /**
         * @en Whether activate skybox in the scene
         * @zh 是否启用天空盒？
         */
        set enabled(val) {
          if (this._enabled === val) return;
          this._enabled = val;
          if (this._resource) {
            this._resource.enabled = this._enabled;
          }
        }
        get enabled() {
          return this._enabled;
        }

        /**
         * @zh 环境反射类型
         * @en environment reflection type
         */
        set envLightingType(val) {
          if (!this.envmap && EnvironmentLightingType.HEMISPHERE_DIFFUSE !== val) {
            this.useIBL = false;
            this.applyDiffuseMap = false;
            this._envLightingType = EnvironmentLightingType.HEMISPHERE_DIFFUSE;
            warnID(15001);
          } else {
            if (EnvironmentLightingType.HEMISPHERE_DIFFUSE === val) {
              this.useIBL = false;
              this.applyDiffuseMap = false;
            } else if (EnvironmentLightingType.AUTOGEN_HEMISPHERE_DIFFUSE_WITH_REFLECTION === val) {
              this.useIBL = true;
              this.applyDiffuseMap = false;
            } else if (EnvironmentLightingType.DIFFUSEMAP_WITH_REFLECTION === val) {
              this.useIBL = true;
              this.applyDiffuseMap = true;
            }
            this._envLightingType = val;
          }
        }
        get envLightingType() {
          return this._envLightingType;
        }
        /**
         * @en Whether use environment lighting
         * @zh 是否启用环境光照？
         */
        set useIBL(val) {
          if (this._resource) {
            this._resource.useIBL = val;
          }
        }
        get useIBL() {
          if (EnvironmentLightingType.HEMISPHERE_DIFFUSE !== this._envLightingType) {
            return true;
          }
          return false;
        }

        /**
         * @en Toggle HDR (TODO: This SHOULD be moved into it's own subgroup away from skybox)
         * @zh 是否启用HDR？
         */
        set useHDR(val) {
          legacyCC.director.root.pipeline.pipelineSceneData.isHDR = val;
          this._useHDR = val;

          // Switch UI to and from LDR/HDR textures depends on HDR state
          if (this._resource) {
            if (this.envLightingType === EnvironmentLightingType.DIFFUSEMAP_WITH_REFLECTION) {
              if (this.diffuseMap === null) {
                this.envLightingType = EnvironmentLightingType.AUTOGEN_HEMISPHERE_DIFFUSE_WITH_REFLECTION;
                warnID(15000);
              } else if (this.diffuseMap.isDefault) {
                warnID(15002);
              }
            }
          }
          if (this._resource) {
            this._resource.useHDR = this._useHDR;
            this._resource.updateMaterialRenderInfo();
          }
        }
        get useHDR() {
          legacyCC.director.root.pipeline.pipelineSceneData.isHDR = this._useHDR;
          return this._useHDR;
        }

        /**
         * @en The texture cube used for the skybox
         * @zh 使用的立方体贴图
         */
        set envmap(val) {
          const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            this._envmapHDR = val;
            this._reflectionHDR = null;
          } else {
            this._envmapLDR = val;
            this._reflectionLDR = null;
          }
          if (!val) {
            if (isHDR) {
              this._diffuseMapHDR = null;
            } else {
              this._diffuseMapLDR = null;
            }
            this.applyDiffuseMap = false;
            this.useIBL = false;
            this.envLightingType = EnvironmentLightingType.HEMISPHERE_DIFFUSE;
            warnID(15001);
          }
          if (this._resource) {
            this._resource.setEnvMaps(this._envmapHDR, this._envmapLDR);
            this._resource.setDiffuseMaps(this._diffuseMapHDR, this._diffuseMapLDR);
            this._resource.setReflectionMaps(this._reflectionHDR, this._reflectionLDR);
            this._resource.useDiffuseMap = this.applyDiffuseMap;
            this._resource.envmap = val;
          }
        }
        get envmap() {
          const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            return this._envmapHDR;
          } else {
            return this._envmapLDR;
          }
        }

        /**
         * @en Rotate the skybox
         * @zh 旋转天空盒
         */
        set rotationAngle(val) {
          this._rotationAngle = val;
          if (this._resource) {
            this._resource.setRotationAngle(this._rotationAngle);
          }
        }
        get rotationAngle() {
          return this._rotationAngle;
        }

        /**
         * @en The optional diffusion convolution map used in tandem with IBL
         * @zh 使用的漫反射卷积图
         */
        set diffuseMap(val) {
          const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            this._diffuseMapHDR = val;
          } else {
            this._diffuseMapLDR = val;
          }
          if (this._resource) {
            this._resource.setDiffuseMaps(this._diffuseMapHDR, this._diffuseMapLDR);
          }
        }
        get diffuseMap() {
          const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            return this._diffuseMapHDR;
          } else {
            return this._diffuseMapLDR;
          }
        }

        /**
         * @en Convolutional map using environmental reflections
         * @zh 使用环境反射卷积图
         */
        set reflectionMap(val) {
          const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            this._reflectionHDR = val;
          } else {
            this._reflectionLDR = val;
          }
          if (this._resource) {
            this._resource.setReflectionMaps(this._reflectionHDR, this._reflectionLDR);
          }
        }
        get reflectionMap() {
          const isHDR = legacyCC.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            return this._reflectionHDR;
          } else {
            return this._reflectionLDR;
          }
        }

        /**
         * @en Use custom skybox material
         * @zh 使用自定义的天空盒材质
         */
        set skyboxMaterial(val) {
          this._editableMaterial = val;
          if (this._resource) {
            this._resource.setSkyboxMaterial(this._editableMaterial);
          }
        }
        get skyboxMaterial() {
          return this._editableMaterial;
        }
        /**
         * @en Activate the skybox configuration in the render scene, no need to invoke manually.
         * @zh 在渲染场景中启用天空盒设置，不需要手动调用
         * @param resource The skybox configuration object in the render scene
         */
        activate(resource) {
          this.envLightingType = this._envLightingType;
          this._resource = resource;
          this._resource.initialize(this);
          this._resource.setEnvMaps(this._envmapHDR, this._envmapLDR);
          this._resource.setDiffuseMaps(this._diffuseMapHDR, this._diffuseMapLDR);
          this._resource.setSkyboxMaterial(this._editableMaterial);
          this._resource.setReflectionMaps(this._reflectionHDR, this._reflectionLDR);
          this._resource.setRotationAngle(this._rotationAngle);
          this._resource.activate(); // update global DS first
        }

        /**
         * @en When the environment map changed will call this function to update scene.
         * @zh 环境贴图发生变化时，会调用此函数更新场景。
         * @param val environment map
         */
        updateEnvMap(val) {
          if (!val) {
            this.applyDiffuseMap = false;
            this.useIBL = false;
            this.envLightingType = EnvironmentLightingType.HEMISPHERE_DIFFUSE;
            warnID(15001);
          }
          if (this._resource) {
            this._resource.setEnvMaps(this._envmapHDR, this._envmapLDR);
            this._resource.setDiffuseMaps(this._diffuseMapHDR, this._diffuseMapLDR);
            this._resource.setReflectionMaps(this._reflectionHDR, this._reflectionLDR);
            this._resource.useDiffuseMap = this.applyDiffuseMap;
            this._resource.envmap = val;
          }
        }

        /**
         * @en
         * Set custom skybox material properties.
         * @zh
         * 设置自定义的天空盒材质属性。
         * @param name @en The target property name. @zh 目标 property 名称。
         * @param val @en The target value. @zh 需要设置的目标值。
         * @param passIdx
         * @en The pass to apply to. Will apply to all passes if not specified.
         * @zh 设置此属性的 pass 索引，如果没有指定，则会设置此属性到所有 pass 上。
         */
        setMaterialProperty(name, val, passIdx) {
          if (!this._resource) return;
          if (this._resource.enabled && this._resource.editableMaterial) {
            this._resource.editableMaterial.setProperty(name, val, passIdx);
            this._resource.editableMaterial.passes.forEach(pass => {
              pass.update();
            });
          }
        }
      }, (_applyDecoratedDescriptor(_class5.prototype, "enabled", [editable, _dec13], Object.getOwnPropertyDescriptor(_class5.prototype, "enabled"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "envLightingType", [editable, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class5.prototype, "envLightingType"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "useHDR", [editable, _dec16], Object.getOwnPropertyDescriptor(_class5.prototype, "useHDR"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "envmap", [editable, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class5.prototype, "envmap"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "rotationAngle", [_dec19, _dec20, slide, _dec21], Object.getOwnPropertyDescriptor(_class5.prototype, "rotationAngle"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "diffuseMap", [_dec22, editable, readOnly, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class5.prototype, "diffuseMap"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "reflectionMap", [_dec25, editable, readOnly, _dec26, _dec27], Object.getOwnPropertyDescriptor(_class5.prototype, "reflectionMap"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "skyboxMaterial", [editable, _dec28, _dec29], Object.getOwnPropertyDescriptor(_class5.prototype, "skyboxMaterial"), _class5.prototype), _initializer7 = _applyDecoratedInitializer(_class5.prototype, "_envLightingType", [serializable], function () {
        return EnvironmentLightingType.HEMISPHERE_DIFFUSE;
      }), _initializer8 = _applyDecoratedInitializer(_class5.prototype, "_envmapHDR", [serializable, _dec30, _dec31], function () {
        return null;
      }), _initializer9 = _applyDecoratedInitializer(_class5.prototype, "_envmapLDR", [serializable, _dec32], function () {
        return null;
      }), _initializer10 = _applyDecoratedInitializer(_class5.prototype, "_diffuseMapHDR", [serializable, _dec33], function () {
        return null;
      }), _initializer11 = _applyDecoratedInitializer(_class5.prototype, "_diffuseMapLDR", [serializable, _dec34], function () {
        return null;
      }), _initializer12 = _applyDecoratedInitializer(_class5.prototype, "_enabled", [serializable], function () {
        return false;
      }), _initializer13 = _applyDecoratedInitializer(_class5.prototype, "_useHDR", [serializable], function () {
        return true;
      }), _initializer14 = _applyDecoratedInitializer(_class5.prototype, "_editableMaterial", [serializable, _dec35], function () {
        return null;
      }), _initializer15 = _applyDecoratedInitializer(_class5.prototype, "_reflectionHDR", [serializable, _dec36], function () {
        return null;
      }), _initializer16 = _applyDecoratedInitializer(_class5.prototype, "_reflectionLDR", [serializable, _dec37], function () {
        return null;
      }), _initializer17 = _applyDecoratedInitializer(_class5.prototype, "_rotationAngle", [serializable], function () {
        return 0;
      })), _class5)) || _class4));
      legacyCC.SkyboxInfo = SkyboxInfo;

      /**
       * @zh 全局雾相关配置
       * @en Global fog configuration
       */
      _export("FogInfo", FogInfo = (_dec38 = ccclass('cc.FogInfo'), _dec39 = tooltip('i18n:fog.enabled'), _dec40 = displayOrder(0), _dec41 = tooltip('i18n:fog.accurate'), _dec42 = displayOrder(0), _dec43 = tooltip('i18n:fog.fogColor'), _dec44 = type(FogType), _dec45 = displayOrder(1), _dec46 = tooltip('i18n:fog.type'), _dec47 = visible(function () {
        return this._type !== FogType.LAYERED && this._type !== FogType.LINEAR;
      }), _dec48 = type(CCFloat), _dec49 = range([0, 1, 0.01]), _dec50 = tooltip('i18n:fog.fogDensity'), _dec51 = visible(function () {
        return this._type !== FogType.LAYERED;
      }), _dec52 = type(CCFloat), _dec53 = rangeStep(0.01), _dec54 = tooltip('i18n:fog.fogStart'), _dec55 = visible(function () {
        return this._type === FogType.LINEAR;
      }), _dec56 = type(CCFloat), _dec57 = rangeStep(0.01), _dec58 = tooltip('i18n:fog.fogEnd'), _dec59 = visible(function () {
        return this._type !== FogType.LINEAR;
      }), _dec60 = type(CCFloat), _dec61 = rangeMin(0.01), _dec62 = rangeStep(0.01), _dec63 = tooltip('i18n:fog.fogAtten'), _dec64 = visible(function () {
        return this._type === FogType.LAYERED;
      }), _dec65 = type(CCFloat), _dec66 = rangeStep(0.01), _dec67 = tooltip('i18n:fog.fogTop'), _dec68 = visible(function () {
        return this._type === FogType.LAYERED;
      }), _dec69 = type(CCFloat), _dec70 = rangeStep(0.01), _dec71 = tooltip('i18n:fog.fogRange'), _dec38(_class7 = (_class8 = (_class9 = class FogInfo {
        constructor() {
          this._type = _initializer18 && _initializer18();
          this._fogColor = _initializer19 && _initializer19();
          this._enabled = _initializer20 && _initializer20();
          this._fogDensity = _initializer21 && _initializer21();
          this._fogStart = _initializer22 && _initializer22();
          this._fogEnd = _initializer23 && _initializer23();
          this._fogAtten = _initializer24 && _initializer24();
          this._fogTop = _initializer25 && _initializer25();
          this._fogRange = _initializer26 && _initializer26();
          this._accurate = _initializer27 && _initializer27();
          this._resource = null;
        }
        /**
         * @zh 是否启用全局雾效
         * @en Enable global fog
         */
        set enabled(val) {
          if (this._enabled === val) return;
          this._enabled = val;
          if (this._resource) {
            this._resource.enabled = val;
            if (val) {
              this._resource.type = this._type;
            }
          }
        }
        get enabled() {
          return this._enabled;
        }

        /**
         * @zh 是否启用精确雾效(像素雾)计算
         * @en Enable accurate fog (pixel fog)
         */
        set accurate(val) {
          if (this._accurate === val) return;
          this._accurate = val;
          if (this._resource) {
            this._resource.accurate = val;
            if (val) {
              this._resource.type = this._type;
            }
          }
        }
        get accurate() {
          return this._accurate;
        }

        /**
         * @zh 全局雾颜色
         * @en Global fog color
         */
        set fogColor(val) {
          this._fogColor.set(val);
          if (this._resource) {
            this._resource.fogColor = this._fogColor;
          }
        }
        get fogColor() {
          return this._fogColor;
        }

        /**
         * @zh 全局雾类型
         * @en Global fog type
         */
        get type() {
          return this._type;
        }
        set type(val) {
          this._type = val;
          if (this._resource) {
            this._resource.type = val;
          }
        }

        /**
         * @zh 全局雾浓度
         * @en Global fog density
         */
        get fogDensity() {
          return this._fogDensity;
        }
        set fogDensity(val) {
          this._fogDensity = val;
          if (this._resource) {
            this._resource.fogDensity = val;
          }
        }

        /**
         * @zh 雾效起始位置
         * @en Global fog start position
         */
        get fogStart() {
          return this._fogStart;
        }
        set fogStart(val) {
          this._fogStart = val;
          if (this._resource) {
            this._resource.fogStart = val;
          }
        }

        /**
         * @zh 雾效结束位置，只适用于线性雾
         * @en Global fog end position, only for linear fog
         */
        get fogEnd() {
          return this._fogEnd;
        }
        set fogEnd(val) {
          this._fogEnd = val;
          if (this._resource) {
            this._resource.fogEnd = val;
          }
        }

        /**
         * @zh 雾效衰减
         * @en Global fog attenuation
         */
        get fogAtten() {
          return this._fogAtten;
        }
        set fogAtten(val) {
          this._fogAtten = val;
          if (this._resource) {
            this._resource.fogAtten = val;
          }
        }

        /**
         * @zh 雾效顶部范围，只适用于层级雾
         * @en Global fog top range, only for layered fog
         */
        get fogTop() {
          return this._fogTop;
        }
        set fogTop(val) {
          this._fogTop = val;
          if (this._resource) {
            this._resource.fogTop = val;
          }
        }

        /**
         * @zh 雾效范围，只适用于层级雾
         * @en Global fog range, only for layered fog
         */
        get fogRange() {
          return this._fogRange;
        }
        set fogRange(val) {
          this._fogRange = val;
          if (this._resource) {
            this._resource.fogRange = val;
          }
        }
        /**
         * @en Activate the fog configuration in the render scene, no need to invoke manually.
         * @zh 在渲染场景中启用雾效设置，不需要手动调用
         * @param resource The fog configuration object in the render scene
         */
        activate(resource) {
          this._resource = resource;
          this._resource.initialize(this);
          this._resource.activate();
        }
      }, _class9.FogType = FogType, _class9), (_applyDecoratedDescriptor(_class8.prototype, "enabled", [editable, _dec39, _dec40], Object.getOwnPropertyDescriptor(_class8.prototype, "enabled"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "accurate", [editable, _dec41, _dec42], Object.getOwnPropertyDescriptor(_class8.prototype, "accurate"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogColor", [editable, _dec43], Object.getOwnPropertyDescriptor(_class8.prototype, "fogColor"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "type", [editable, _dec44, _dec45, _dec46], Object.getOwnPropertyDescriptor(_class8.prototype, "type"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogDensity", [_dec47, _dec48, _dec49, slide, _dec50], Object.getOwnPropertyDescriptor(_class8.prototype, "fogDensity"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogStart", [_dec51, _dec52, _dec53, _dec54], Object.getOwnPropertyDescriptor(_class8.prototype, "fogStart"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogEnd", [_dec55, _dec56, _dec57, _dec58], Object.getOwnPropertyDescriptor(_class8.prototype, "fogEnd"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogAtten", [_dec59, _dec60, _dec61, _dec62, _dec63], Object.getOwnPropertyDescriptor(_class8.prototype, "fogAtten"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogTop", [_dec64, _dec65, _dec66, _dec67], Object.getOwnPropertyDescriptor(_class8.prototype, "fogTop"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogRange", [_dec68, _dec69, _dec70, _dec71], Object.getOwnPropertyDescriptor(_class8.prototype, "fogRange"), _class8.prototype), _initializer18 = _applyDecoratedInitializer(_class8.prototype, "_type", [serializable], function () {
        return FogType.LINEAR;
      }), _initializer19 = _applyDecoratedInitializer(_class8.prototype, "_fogColor", [serializable], function () {
        return new Color('#C8C8C8');
      }), _initializer20 = _applyDecoratedInitializer(_class8.prototype, "_enabled", [serializable], function () {
        return false;
      }), _initializer21 = _applyDecoratedInitializer(_class8.prototype, "_fogDensity", [serializable], function () {
        return 0.3;
      }), _initializer22 = _applyDecoratedInitializer(_class8.prototype, "_fogStart", [serializable], function () {
        return 0.5;
      }), _initializer23 = _applyDecoratedInitializer(_class8.prototype, "_fogEnd", [serializable], function () {
        return 300;
      }), _initializer24 = _applyDecoratedInitializer(_class8.prototype, "_fogAtten", [serializable], function () {
        return 5;
      }), _initializer25 = _applyDecoratedInitializer(_class8.prototype, "_fogTop", [serializable], function () {
        return 1.5;
      }), _initializer26 = _applyDecoratedInitializer(_class8.prototype, "_fogRange", [serializable], function () {
        return 1.2;
      }), _initializer27 = _applyDecoratedInitializer(_class8.prototype, "_accurate", [serializable], function () {
        return false;
      })), _class8)) || _class7));
      /**
       * @en Scene level shadow related configuration
       * @zh 场景级别阴影相关的配置
       */
      _export("ShadowsInfo", ShadowsInfo = (_dec72 = ccclass('cc.ShadowsInfo'), _dec73 = tooltip('i18n:shadow.enabled'), _dec74 = tooltip('i18n:shadow.type'), _dec75 = type(ShadowType), _dec76 = tooltip('i18n:shadow.shadowColor'), _dec77 = visible(function () {
        return this._type === ShadowType.Planar;
      }), _dec78 = tooltip('i18n:shadow.planeDirection'), _dec79 = visible(function () {
        return this._type === ShadowType.Planar;
      }), _dec80 = tooltip('i18n:shadow.planeHeight'), _dec81 = type(CCFloat), _dec82 = visible(function () {
        return this._type === ShadowType.Planar;
      }), _dec83 = tooltip('i18n:shadow.planeBias'), _dec84 = type(CCFloat), _dec85 = visible(function () {
        return this._type === ShadowType.Planar;
      }), _dec86 = tooltip('i18n:shadow.maxReceived'), _dec87 = type(CCInteger), _dec88 = visible(function () {
        return this._type === ShadowType.ShadowMap;
      }), _dec89 = tooltip('i18n:shadow.shadowMapSize'), _dec90 = type(ShadowSize), _dec91 = visible(function () {
        return this._type === ShadowType.ShadowMap;
      }), _dec72(_class10 = (_class11 = class ShadowsInfo {
        constructor() {
          this._enabled = _initializer28 && _initializer28();
          this._type = _initializer29 && _initializer29();
          this._normal = _initializer30 && _initializer30();
          this._distance = _initializer31 && _initializer31();
          this._planeBias = _initializer32 && _initializer32();
          this._shadowColor = _initializer33 && _initializer33();
          this._maxReceived = _initializer34 && _initializer34();
          this._size = _initializer35 && _initializer35();
          this._resource = null;
        }
        /**
         * @en Whether activate planar shadow
         * @zh 是否启用平面阴影？
         */
        set enabled(val) {
          if (this._enabled === val) return;
          this._enabled = val;
          if (this._resource) {
            this._resource.enabled = val;
            if (val) {
              this._resource.type = this._type;
            }
          }
        }
        get enabled() {
          if (BAIDU) {
            if (this._type !== ShadowType.Planar) {
              this._enabled = false;
            }
          }
          return this._enabled;
        }

        /**
         * @en The type of the shadow
         * @zh 阴影渲染的类型
         */
        set type(val) {
          this._type = val;
          if (this._resource) {
            this._resource.type = val;
          }
        }
        get type() {
          return this._type;
        }

        /**
         * @en Shadow color
         * @zh 阴影颜色
         */
        set shadowColor(val) {
          this._shadowColor.set(val);
          if (this._resource) {
            this._resource.shadowColor = val;
          }
        }
        get shadowColor() {
          return this._shadowColor;
        }

        /**
         * @en The normal of the plane which receives shadow
         * @zh 阴影接收平面的法线
         */
        set planeDirection(val) {
          Vec3.copy(this._normal, val);
          if (this._resource) {
            this._resource.normal = val;
          }
        }
        get planeDirection() {
          return this._normal;
        }

        /**
         * @en The distance from coordinate origin to the receiving plane.
         * @zh 阴影接收平面与原点的距离
         */
        set planeHeight(val) {
          this._distance = val;
          if (this._resource) {
            this._resource.distance = val;
          }
        }
        get planeHeight() {
          return this._distance;
        }

        /**
         * @en Positional offset values in planar shading calculations.
         * @zh 平面阴影计算中的位置偏移值。
         */
        set planeBias(val) {
          this._planeBias = val;
          if (this._resource) {
            this._resource.planeBias = val;
          }
        }
        get planeBias() {
          return this._planeBias;
        }

        /**
         * @en get or set shadow max received
         * @zh 获取或者设置阴影接收的最大光源数量
         */
        set maxReceived(val) {
          this._maxReceived = val;
          if (this._resource) {
            this._resource.maxReceived = val;
          }
        }
        get maxReceived() {
          return this._maxReceived;
        }

        /**
         * @en get or set shadow map size
         * @zh 获取或者设置阴影纹理大小
         */
        set shadowMapSize(value) {
          this._size.set(value, value);
          if (this._resource) {
            this._resource.size.set(value, value);
            this._resource.shadowMapDirty = true;
          }
        }
        get shadowMapSize() {
          return this._size.x;
        }
        /**
         * @en Set plane which receives shadow with the given node's world transformation
         * @zh 根据指定节点的世界变换设置阴影接收平面的信息
         * @param node The node for setting up the plane
         */
        setPlaneFromNode(node) {
          node.getWorldRotation(_qt);
          this.planeDirection = Vec3.transformQuat(_v3, _up, _qt);
          node.getWorldPosition(_v3);
          this.planeHeight = Vec3.dot(this._normal, _v3);
        }

        /**
         * @en Activate the shadow configuration in the render scene, no need to invoke manually.
         * @zh 在渲染场景中启用阴影设置，不需要手动调用
         * @param resource The shadow configuration object in the render scene
         */
        activate(resource) {
          this._resource = resource;
          this._resource.initialize(this);
          this._resource.activate();
        }
      }, (_applyDecoratedDescriptor(_class11.prototype, "enabled", [editable, _dec73], Object.getOwnPropertyDescriptor(_class11.prototype, "enabled"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "type", [_dec74, editable, _dec75], Object.getOwnPropertyDescriptor(_class11.prototype, "type"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "shadowColor", [_dec76, _dec77], Object.getOwnPropertyDescriptor(_class11.prototype, "shadowColor"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "planeDirection", [_dec78, _dec79], Object.getOwnPropertyDescriptor(_class11.prototype, "planeDirection"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "planeHeight", [_dec80, editable, _dec81, _dec82], Object.getOwnPropertyDescriptor(_class11.prototype, "planeHeight"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "planeBias", [_dec83, editable, _dec84, _dec85], Object.getOwnPropertyDescriptor(_class11.prototype, "planeBias"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "maxReceived", [_dec86, _dec87, _dec88], Object.getOwnPropertyDescriptor(_class11.prototype, "maxReceived"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "shadowMapSize", [_dec89, _dec90, _dec91], Object.getOwnPropertyDescriptor(_class11.prototype, "shadowMapSize"), _class11.prototype), _initializer28 = _applyDecoratedInitializer(_class11.prototype, "_enabled", [serializable], function () {
        return false;
      }), _initializer29 = _applyDecoratedInitializer(_class11.prototype, "_type", [serializable], function () {
        return ShadowType.Planar;
      }), _initializer30 = _applyDecoratedInitializer(_class11.prototype, "_normal", [serializable], function () {
        return new Vec3(0, 1, 0);
      }), _initializer31 = _applyDecoratedInitializer(_class11.prototype, "_distance", [serializable], function () {
        return 0;
      }), _initializer32 = _applyDecoratedInitializer(_class11.prototype, "_planeBias", [serializable], function () {
        return 1.0;
      }), _initializer33 = _applyDecoratedInitializer(_class11.prototype, "_shadowColor", [serializable], function () {
        return new Color(0, 0, 0, 76);
      }), _initializer34 = _applyDecoratedInitializer(_class11.prototype, "_maxReceived", [serializable], function () {
        return 4;
      }), _initializer35 = _applyDecoratedInitializer(_class11.prototype, "_size", [serializable], function () {
        return new Vec2(1024, 1024);
      })), _class11)) || _class10));
      legacyCC.ShadowsInfo = ShadowsInfo;
      _export("DEFAULT_WORLD_MIN_POS", DEFAULT_WORLD_MIN_POS = new Vec3(-1024.0, -1024.0, -1024.0));
      _export("DEFAULT_WORLD_MAX_POS", DEFAULT_WORLD_MAX_POS = new Vec3(1024.0, 1024.0, 1024.0));
      _export("DEFAULT_OCTREE_DEPTH", DEFAULT_OCTREE_DEPTH = 8);
      /**
       * @en Scene management and culling configuration based on octree
       * @zh 基于八叉树的场景剔除配置
       */
      _export("OctreeInfo", OctreeInfo = (_dec92 = ccclass('cc.OctreeInfo'), _dec93 = tooltip('i18n:octree_culling.enabled'), _dec94 = tooltip('i18n:octree_culling.minPos'), _dec95 = displayName('World MinPos'), _dec96 = tooltip('i18n:octree_culling.maxPos'), _dec97 = displayName('World MaxPos'), _dec98 = range([4, 12, 1]), _dec99 = type(CCInteger), _dec100 = tooltip('i18n:octree_culling.depth'), _dec92(_class13 = (_class14 = class OctreeInfo {
        constructor() {
          this._enabled = _initializer36 && _initializer36();
          this._minPos = _initializer37 && _initializer37();
          this._maxPos = _initializer38 && _initializer38();
          this._depth = _initializer39 && _initializer39();
          this._resource = null;
        }
        /**
         * @en Whether activate scene culling based on octree
         * @zh 是否启用八叉树加速剔除？
         */
        set enabled(val) {
          if (this._enabled === val) return;
          this._enabled = val;
          if (this._resource) {
            this._resource.enabled = val;
          }
        }
        get enabled() {
          return this._enabled;
        }

        /**
         * @en The minimal position of the scene bounding box.
         * Objects entirely outside the bounding box will be culled, other objects will be managed dynamically.
         * @zh 场景包围盒的最小位置，完全超出包围盒的物体会被剔除，其他物体根据情况被动态剔除。
         */
        set minPos(val) {
          this._minPos = val;
          if (this._resource) {
            this._resource.minPos = val;
          }
        }
        get minPos() {
          return this._minPos;
        }

        /**
         * @en The maximum position of the scene bounding box.
         * Objects entirely outside the bounding box will be culled, other objects will be managed dynamically.
         * @zh 场景包围盒的最大位置，完全超出包围盒的物体会被剔除，其他物体根据情况被动态剔除。
         */
        set maxPos(val) {
          this._maxPos = val;
          if (this._resource) {
            this._resource.maxPos = val;
          }
        }
        get maxPos() {
          return this._maxPos;
        }

        /**
         * @en The depth of the octree.
         * @zh 八叉树的深度。
         */
        set depth(val) {
          this._depth = val;
          if (this._resource) {
            this._resource.depth = val;
          }
        }
        get depth() {
          return this._depth;
        }
        /**
         * @en Activate the octree configuration in the render scene, no need to invoke manually.
         * @zh 在渲染场景中启用八叉树设置，不需要手动调用
         * @param resource The octree configuration object in the render scene
         */
        activate(resource) {
          this._resource = resource;
          this._resource.initialize(this);
        }
      }, (_applyDecoratedDescriptor(_class14.prototype, "enabled", [editable, _dec93], Object.getOwnPropertyDescriptor(_class14.prototype, "enabled"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "minPos", [editable, _dec94, _dec95], Object.getOwnPropertyDescriptor(_class14.prototype, "minPos"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "maxPos", [editable, _dec96, _dec97], Object.getOwnPropertyDescriptor(_class14.prototype, "maxPos"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "depth", [editable, _dec98, slide, _dec99, _dec100], Object.getOwnPropertyDescriptor(_class14.prototype, "depth"), _class14.prototype), _initializer36 = _applyDecoratedInitializer(_class14.prototype, "_enabled", [serializable], function () {
        return false;
      }), _initializer37 = _applyDecoratedInitializer(_class14.prototype, "_minPos", [serializable], function () {
        return new Vec3(DEFAULT_WORLD_MIN_POS);
      }), _initializer38 = _applyDecoratedInitializer(_class14.prototype, "_maxPos", [serializable], function () {
        return new Vec3(DEFAULT_WORLD_MAX_POS);
      }), _initializer39 = _applyDecoratedInitializer(_class14.prototype, "_depth", [serializable], function () {
        return DEFAULT_OCTREE_DEPTH;
      })), _class14)) || _class13));
      legacyCC.OctreeInfo = OctreeInfo;

      /**
       * @en Global skin in the render scene.
       * @zh 渲染场景中的全局皮肤后处理设置。
       */
      _export("SkinInfo", SkinInfo = (_dec101 = ccclass('cc.SkinInfo'), _dec102 = tooltip('i18n:skin.enabled'), _dec103 = visible(false), _dec104 = range([0.0, 0.1, 0.001]), _dec105 = type(CCFloat), _dec106 = tooltip('i18n:skin.blurRadius'), _dec107 = range([0.0, 10.0, 0.1]), _dec108 = type(CCFloat), _dec109 = tooltip('i18n:skin.sssIntensity'), _dec101(_class16 = (_class17 = class SkinInfo {
        constructor() {
          this._enabled = _initializer40 && _initializer40();
          this._blurRadius = _initializer41 && _initializer41();
          this._sssIntensity = _initializer42 && _initializer42();
          this._resource = null;
        }
        /**
         * @en Enable skip.
         * @zh 是否开启皮肤后效。
         */
        set enabled(val) {
          if (this._enabled === val) return;
          this._enabled = val;
          if (this._resource) {
            this._resource.enabled = val;
          }
        }
        get enabled() {
          return this._enabled;
        }

        /**
         * @en Getter/Setter sampler width.
         * @zh 设置或者获取采样宽度。
         */
        set blurRadius(val) {
          this._blurRadius = val;
          if (this._resource) {
            this._resource.blurRadius = val;
          }
        }
        get blurRadius() {
          return this._blurRadius;
        }

        /**
         * @en Getter/Setter depth unit scale.
         * @zh 设置或者获取深度单位比例。
         */
        set sssIntensity(val) {
          this._sssIntensity = val;
          if (this._resource) {
            this._resource.sssIntensity = val;
          }
        }
        get sssIntensity() {
          return this._sssIntensity;
        }
        /**
         * @en Activate the skin configuration in the render scene, no need to invoke manually.
         * @zh 在渲染场景中启用皮肤设置，不需要手动调用
         * @param resource The skin configuration object in the render scene
         */
        activate(resource) {
          this._resource = resource;
          this._resource.initialize(this);
        }
      }, (_applyDecoratedDescriptor(_class17.prototype, "enabled", [editable, readOnly, _dec102], Object.getOwnPropertyDescriptor(_class17.prototype, "enabled"), _class17.prototype), _applyDecoratedDescriptor(_class17.prototype, "blurRadius", [_dec103, editable, _dec104, slide, _dec105, _dec106], Object.getOwnPropertyDescriptor(_class17.prototype, "blurRadius"), _class17.prototype), _applyDecoratedDescriptor(_class17.prototype, "sssIntensity", [editable, _dec107, slide, _dec108, _dec109], Object.getOwnPropertyDescriptor(_class17.prototype, "sssIntensity"), _class17.prototype), _initializer40 = _applyDecoratedInitializer(_class17.prototype, "_enabled", [serializable], function () {
        return true;
      }), _initializer41 = _applyDecoratedInitializer(_class17.prototype, "_blurRadius", [serializable], function () {
        return 0.01;
      }), _initializer42 = _applyDecoratedInitializer(_class17.prototype, "_sssIntensity", [serializable], function () {
        return 3.0;
      })), _class17)) || _class16));
      legacyCC.SkinInfo = SkinInfo;
      _export("PostSettingsInfo", PostSettingsInfo = (_dec110 = ccclass('cc.PostSettingsInfo'), _dec111 = type(ToneMappingType), _dec112 = tooltip('i18n:tone_mapping.toneMappingType'), _dec110(_class19 = (_class20 = class PostSettingsInfo {
        constructor() {
          this._toneMappingType = _initializer43 && _initializer43();
          this._resource = null;
        }
        /**
         * @zh 色调映射类型
         * @en Tone mapping type
         */
        set toneMappingType(val) {
          this._toneMappingType = val;
          if (this._resource) {
            this._resource.toneMappingType = val;
          }
        }
        get toneMappingType() {
          return this._toneMappingType;
        }
        activate(resource) {
          this._resource = resource;
          this._resource.initialize(this);
          this._resource.activate();
        }
      }, (_applyDecoratedDescriptor(_class20.prototype, "toneMappingType", [editable, _dec111, _dec112], Object.getOwnPropertyDescriptor(_class20.prototype, "toneMappingType"), _class20.prototype), _initializer43 = _applyDecoratedInitializer(_class20.prototype, "_toneMappingType", [serializable], function () {
        return ToneMappingType.DEFAULT;
      })), _class20)) || _class19));
      legacyCC.PostSettingsInfo = PostSettingsInfo;
      /**
       * @en light probe configuration
       * @zh 光照探针配置
       */
      _export("LightProbeInfo", LightProbeInfo = (_dec113 = ccclass('cc.LightProbeInfo'), _dec114 = range([0, 100, 1]), _dec115 = type(CCFloat), _dec116 = tooltip('i18n:light_probe.giScale'), _dec117 = displayName('GIScale'), _dec118 = range([64, 65535, 1]), _dec119 = type(CCInteger), _dec120 = tooltip('i18n:light_probe.giSamples'), _dec121 = displayName('GISamples'), _dec122 = range([1, 4, 1]), _dec123 = type(CCInteger), _dec124 = tooltip('i18n:light_probe.bounces'), _dec125 = range([0.0, 0.05, 0.001]), _dec126 = type(CCFloat), _dec127 = tooltip('i18n:light_probe.reduceRinging'), _dec128 = tooltip('i18n:light_probe.showWireframe'), _dec129 = tooltip('i18n:light_probe.showConvex'), _dec130 = range([0, 100, 1]), _dec131 = type(CCFloat), _dec132 = tooltip('i18n:light_probe.lightProbeSphereVolume'), _dec113(_class22 = (_class23 = class LightProbeInfo {
        constructor() {
          this._giScale = _initializer44 && _initializer44();
          this._giSamples = _initializer45 && _initializer45();
          this._bounces = _initializer46 && _initializer46();
          this._reduceRinging = _initializer47 && _initializer47();
          this._showProbe = _initializer48 && _initializer48();
          this._showWireframe = _initializer49 && _initializer49();
          this._showConvex = _initializer50 && _initializer50();
          this._data = _initializer51 && _initializer51();
          this._lightProbeSphereVolume = _initializer52 && _initializer52();
          this._nodes = [];
          this._scene = null;
          this._resource = null;
        }
        /**
         * @en GI multiplier
         * @zh GI乘数
         */
        set giScale(val) {
          if (this._giScale === val) return;
          this._giScale = val;
          if (this._resource) {
            this._resource.giScale = val;
          }
        }
        get giScale() {
          return this._giScale;
        }

        /**
         * @en GI sample counts
         * @zh GI 采样数量
         */
        set giSamples(val) {
          if (this._giSamples === val) return;
          this._giSamples = val;
          if (this._resource) {
            this._resource.giSamples = val;
          }
        }
        get giSamples() {
          return this._giSamples;
        }

        /**
         * @en light bounces
         * @zh 光照反弹次数
         */
        set bounces(val) {
          if (this._bounces === val) return;
          this._bounces = val;
          if (this._resource) {
            this._resource.bounces = val;
          }
        }
        get bounces() {
          return this._bounces;
        }

        /**
         * @en Reduce ringing of light probe
         * @zh 减少光照探针的振铃效果
         */
        set reduceRinging(val) {
          if (this._reduceRinging === val) return;
          this._reduceRinging = val;
          if (this._resource) {
            this._resource.reduceRinging = val;
          }
        }
        get reduceRinging() {
          return this._reduceRinging;
        }

        /**
         * @en Whether to show light probe
         * @zh 是否显示光照探针
         */
        set showProbe(val) {
          if (this._showProbe === val) return;
          this._showProbe = val;
          if (this._resource) {
            this._resource.showProbe = val;
          }
        }
        get showProbe() {
          return this._showProbe;
        }

        /**
         * @en Whether to show light probe's connection
         * @zh 是否显示光照探针连线
         */
        set showWireframe(val) {
          if (this._showWireframe === val) return;
          this._showWireframe = val;
          if (this._resource) {
            this._resource.showWireframe = val;
          }
        }
        get showWireframe() {
          return this._showWireframe;
        }

        /**
         * @en Whether to show light probe's convex
         * @zh 是否显示光照探针凸包
         */
        set showConvex(val) {
          if (this._showConvex === val) return;
          this._showConvex = val;
          if (this._resource) {
            this._resource.showConvex = val;
          }
        }
        get showConvex() {
          return this._showConvex;
        }

        /**
         * @en light probe's vertex and tetrahedron data
         * @zh 光照探针顶点及四面体数据
         */
        set data(val) {
          if (this._data === val) return;
          this._data = val;
          if (this._resource) {
            this._resource.data = val;
          }
        }
        get data() {
          return this._data;
        }

        /**
         * @en The value of all light probe sphere display size
         * @zh 光照探针全局显示大小
         */
        set lightProbeSphereVolume(val) {
          if (this._lightProbeSphereVolume === val) return;
          this._lightProbeSphereVolume = val;
          if (this._resource) {
            this._resource.lightProbeSphereVolume = val;
          }
        }
        get lightProbeSphereVolume() {
          return this._lightProbeSphereVolume;
        }
        activate(scene, resource) {
          this._scene = scene;
          this._resource = resource;
          this._resource.initialize(this);
        }
        onProbeBakeFinished() {
          this.onProbeBakingChanged(this._scene);
        }
        onProbeBakeCleared() {
          this.clearSHCoefficients();
          this.onProbeBakingChanged(this._scene);
        }
        onProbeBakingChanged(node) {
          if (!node) {
            return;
          }
          node.emit(NodeEventType.LIGHT_PROBE_BAKING_CHANGED);
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            this.onProbeBakingChanged(child);
          }
        }
        clearSHCoefficients() {
          if (!this._data) {
            return;
          }
          const probes = this._data.probes;
          for (let i = 0; i < probes.length; i++) {
            probes[i].coefficients.length = 0;
          }
          this.clearAllSHUBOs();
        }
        isUniqueNode() {
          return this._nodes.length === 1;
        }
        addNode(node) {
          if (!node) {
            return false;
          }
          for (let i = 0; i < this._nodes.length; i++) {
            if (this._nodes[i].node === node) {
              return false;
            }
          }
          this._nodes.push({
            node,
            probes: null
          });
          return true;
        }
        removeNode(node) {
          if (!node) {
            return false;
          }
          const index = this._nodes.findIndex(element => element.node === node);
          if (index === -1) {
            return false;
          }
          this._nodes.splice(index, 1);
          return true;
        }
        syncData(node, probes) {
          for (let i = 0; i < this._nodes.length; i++) {
            if (this._nodes[i].node === node) {
              this._nodes[i].probes = probes;
              return;
            }
          }
        }
        update(updateTet = true) {
          if (!cclegacy.internal.LightProbesData) {
            return;
          }
          if (!this._data) {
            this._data = new cclegacy.internal.LightProbesData();
            if (this._resource) {
              this._resource.data = this._data;
            }
          }
          const points = [];
          for (let i = 0; i < this._nodes.length; i++) {
            const node = this._nodes[i].node;
            const probes = this._nodes[i].probes;
            const worldPosition = node.worldPosition;
            if (!probes) {
              continue;
            }
            for (let j = 0; j < probes.length; j++) {
              const position = new Vec3(0, 0, 0);
              Vec3.add(position, probes[j], worldPosition);
              points.push(position);
            }
          }
          const pointCount = points.length;
          if (pointCount < 4) {
            this.resetAllTetraIndices();
            this._data.reset();
            return;
          }
          this._data.updateProbes(points);
          if (updateTet) {
            this.resetAllTetraIndices();
            this._data.updateTetrahedrons();
          }
        }
        clearAllSHUBOs() {
          if (!this._scene) {
            return;
          }
          const renderScene = this._scene.renderScene;
          if (!renderScene) {
            return;
          }
          const models = renderScene.models;
          for (let i = 0; i < models.length; i++) {
            models[i].clearSHUBOs();
          }
        }
        resetAllTetraIndices() {
          if (!this._scene) {
            return;
          }
          const renderScene = this._scene.renderScene;
          if (!renderScene) {
            return;
          }
          const models = renderScene.models;
          for (let i = 0; i < models.length; i++) {
            models[i].tetrahedronIndex = -1;
          }
        }
      }, (_applyDecoratedDescriptor(_class23.prototype, "giScale", [editable, _dec114, _dec115, _dec116, _dec117], Object.getOwnPropertyDescriptor(_class23.prototype, "giScale"), _class23.prototype), _applyDecoratedDescriptor(_class23.prototype, "giSamples", [editable, _dec118, _dec119, _dec120, _dec121], Object.getOwnPropertyDescriptor(_class23.prototype, "giSamples"), _class23.prototype), _applyDecoratedDescriptor(_class23.prototype, "bounces", [editable, _dec122, _dec123, _dec124], Object.getOwnPropertyDescriptor(_class23.prototype, "bounces"), _class23.prototype), _applyDecoratedDescriptor(_class23.prototype, "reduceRinging", [editable, _dec125, slide, _dec126, _dec127], Object.getOwnPropertyDescriptor(_class23.prototype, "reduceRinging"), _class23.prototype), _applyDecoratedDescriptor(_class23.prototype, "showWireframe", [editable, _dec128], Object.getOwnPropertyDescriptor(_class23.prototype, "showWireframe"), _class23.prototype), _applyDecoratedDescriptor(_class23.prototype, "showConvex", [editable, _dec129], Object.getOwnPropertyDescriptor(_class23.prototype, "showConvex"), _class23.prototype), _applyDecoratedDescriptor(_class23.prototype, "lightProbeSphereVolume", [editable, _dec130, _dec131, _dec132], Object.getOwnPropertyDescriptor(_class23.prototype, "lightProbeSphereVolume"), _class23.prototype), _initializer44 = _applyDecoratedInitializer(_class23.prototype, "_giScale", [serializable], function () {
        return 1.0;
      }), _initializer45 = _applyDecoratedInitializer(_class23.prototype, "_giSamples", [serializable], function () {
        return 1024;
      }), _initializer46 = _applyDecoratedInitializer(_class23.prototype, "_bounces", [serializable], function () {
        return 2;
      }), _initializer47 = _applyDecoratedInitializer(_class23.prototype, "_reduceRinging", [serializable], function () {
        return 0.0;
      }), _initializer48 = _applyDecoratedInitializer(_class23.prototype, "_showProbe", [serializable], function () {
        return true;
      }), _initializer49 = _applyDecoratedInitializer(_class23.prototype, "_showWireframe", [serializable], function () {
        return true;
      }), _initializer50 = _applyDecoratedInitializer(_class23.prototype, "_showConvex", [serializable], function () {
        return false;
      }), _initializer51 = _applyDecoratedInitializer(_class23.prototype, "_data", [serializable], function () {
        return null;
      }), _initializer52 = _applyDecoratedInitializer(_class23.prototype, "_lightProbeSphereVolume", [serializable], function () {
        return 1.0;
      })), _class23)) || _class22));
      /**
       * @en All scene related global parameters, it affects all content in the corresponding scene
       * @zh 各类场景级别的渲染参数，将影响全场景的所有物体
       */
      _export("SceneGlobals", SceneGlobals = (_dec133 = ccclass('cc.SceneGlobals'), _dec134 = type(SkyboxInfo), _dec133(_class25 = (_class26 = class SceneGlobals {
        constructor() {
          /**
           * @en The environment lighting configuration
           * @zh 场景的环境光照相关配置
           */
          this.ambient = _initializer53 && _initializer53();
          /**
           * @en Scene level shadow related configuration
           * @zh 平面阴影相关配置
           */
          this.shadows = _initializer54 && _initializer54();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._skybox = _initializer55 && _initializer55();
          /**
           * @en Global fog configuration
           * @zh 全局雾相关配置
           */
          this.fog = _initializer56 && _initializer56();
          /**
           * @en Octree related configuration
           * @zh 八叉树相关配置
           */
          this.octree = _initializer57 && _initializer57();
          /**
           * @en Octree related configuration
           * @zh 八叉树相关配置
           */
          this.skin = _initializer58 && _initializer58();
          /**
           * @en Light probe related configuration
           * @zh 光照探针相关配置
           */
          this.lightProbeInfo = _initializer59 && _initializer59();
          /**
           * @en Tone mapping related configuration
           * @zh 色调映射相关配置
           */
          this.postSettings = _initializer60 && _initializer60();
          /**
           * @en bake with stationary main light
           * @zh 主光源是否以静止状态烘培
           */
          this.bakedWithStationaryMainLight = _initializer61 && _initializer61();
          /**
           * @en bake lightmap with highp mode
           * @zh 是否使用高精度模式烘培光照图
           */
          this.bakedWithHighpLightmap = _initializer62 && _initializer62();
          /**
           * @en disable light map
           * @zh 关闭光照图效果
           */
          this.disableLightmap = false;
        }
        /**
         * @en Skybox related configuration
         * @zh 天空盒相关配置
         */
        get skybox() {
          return this._skybox;
        }
        set skybox(value) {
          this._skybox = value;
        }
        /**
         * @en Activate and initialize the global configurations of the scene, no need to invoke manually.
         * @zh 启用和初始化场景全局配置，不需要手动调用
         */
        activate(scene) {
          const sceneData = legacyCC.director.root.pipeline.pipelineSceneData;
          this.skybox.activate(sceneData.skybox);
          this.ambient.activate(sceneData.ambient);
          this.shadows.activate(sceneData.shadows);
          this.fog.activate(sceneData.fog);
          this.octree.activate(sceneData.octree);
          this.skin.activate(sceneData.skin);
          this.postSettings.activate(sceneData.postSettings);
          if (this.lightProbeInfo && sceneData.lightProbes) {
            this.lightProbeInfo.activate(scene, sceneData.lightProbes);
          }
          const root = legacyCC.director.root;
          root.onGlobalPipelineStateChanged();
        }
      }, (_initializer53 = _applyDecoratedInitializer(_class26.prototype, "ambient", [serializable, editable], function () {
        return new AmbientInfo();
      }), _initializer54 = _applyDecoratedInitializer(_class26.prototype, "shadows", [serializable, editable], function () {
        return new ShadowsInfo();
      }), _initializer55 = _applyDecoratedInitializer(_class26.prototype, "_skybox", [serializable], function () {
        return new SkyboxInfo();
      }), _initializer56 = _applyDecoratedInitializer(_class26.prototype, "fog", [editable, serializable], function () {
        return new FogInfo();
      }), _applyDecoratedDescriptor(_class26.prototype, "skybox", [editable, _dec134], Object.getOwnPropertyDescriptor(_class26.prototype, "skybox"), _class26.prototype), _initializer57 = _applyDecoratedInitializer(_class26.prototype, "octree", [editable, serializable], function () {
        return new OctreeInfo();
      }), _initializer58 = _applyDecoratedInitializer(_class26.prototype, "skin", [editable, serializable], function () {
        return new SkinInfo();
      }), _initializer59 = _applyDecoratedInitializer(_class26.prototype, "lightProbeInfo", [editable, serializable], function () {
        return new LightProbeInfo();
      }), _initializer60 = _applyDecoratedInitializer(_class26.prototype, "postSettings", [editable, serializable], function () {
        return new PostSettingsInfo();
      }), _initializer61 = _applyDecoratedInitializer(_class26.prototype, "bakedWithStationaryMainLight", [editable, serializable], function () {
        return false;
      }), _initializer62 = _applyDecoratedInitializer(_class26.prototype, "bakedWithHighpLightmap", [editable, serializable], function () {
        return false;
      })), _class26)) || _class25));
      legacyCC.SceneGlobals = SceneGlobals;
    }
  };
});