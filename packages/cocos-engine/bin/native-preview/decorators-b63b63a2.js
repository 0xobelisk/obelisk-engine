System.register(['./index-ce98320e.js'], (function (exports) {
  'use strict';
  var displayOrder, serializable, type, ccclass, tooltip, editable, visible, range, formerlySerializedAs, property, override, editorOnly, slide, rangeStep, rangeMin, displayName, readOnly;
  return {
    setters: [function (module) {
      displayOrder = module.b8;
      serializable = module.bf;
      type = module.bw;
      ccclass = module.by;
      tooltip = module.b5;
      editable = module.b4;
      visible = module.b6;
      range = module.b9;
      formerlySerializedAs = module.be;
      property = module.cl;
      override = module.bd;
      editorOnly = module.bK;
      slide = module.bb;
      rangeStep = module.ba;
      rangeMin = module.cp;
      displayName = module.b7;
      readOnly = module.cq;
    }],
    execute: (function () {

      exports({
        A: patch_cc_SceneGlobals,
        B: patch_cc_OctreeInfo,
        C: patch_cc_ShadowsInfo,
        D: patch_cc_FogInfo,
        E: patch_cc_SkyboxInfo,
        F: patch_cc_AmbientInfo,
        G: patch_cc_LightProbeInfo,
        H: patch_cc_SkinInfo,
        I: patch_cc_PostSettingsInfo,
        J: patch_cc_Scene,
        K: patch_cc_Asset,
        L: patch_cc_RenderTexture,
        M: patch_cc_SceneAsset,
        N: patch_cc_Mesh,
        O: patch_cc_Skeleton,
        P: patch_cc_Vertex,
        Q: patch_cc_CircumSphere,
        R: patch_cc_Tetrahedron,
        S: patch_cc_LightProbesData,
        a: patch_RenderStage,
        b: patch_ReflectionProbeStage,
        c: patch_GbufferStage,
        d: patch_LightingStage,
        e: patch_BloomStage,
        f: patch_PostProcessStage,
        g: patch_ForwardStage,
        h: patch_ShadowStage,
        i: patch_RenderFlow,
        j: patch_MainFlow,
        k: patch_ForwardFlow,
        l: patch_ShadowFlow,
        m: patch_ReflectionProbeFlow,
        n: patch_cc_RenderPipeline,
        o: patch_ForwardPipeline,
        p: patch_RenderQueueDesc,
        q: patch_DeferredPipeline,
        r: patch_cc_EffectAsset,
        s: patch_cc_TextureBase,
        t: patch_cc_Material,
        u: patch_cc_BufferAsset,
        v: patch_cc_ImageAsset,
        w: patch_cc_SimpleTexture,
        x: patch_cc_Texture2D,
        y: patch_cc_TextureCube,
        z: patch_cc_Node
      });

      const defaultExec = (cb, decorator, attr) => {
        cb();
      };
      function patch_BloomStage(ctx, apply = defaultExec) {
        const {
          BloomStage,
          Material
        } = {
          ...ctx
        };
        apply(() => {
          displayOrder(3)(BloomStage.prototype, '_bloomMaterial', () => {
            return null;
          });
        }, 'displayOrder', '_bloomMaterial');
        apply(() => {
          serializable(BloomStage.prototype, '_bloomMaterial', () => {
            return null;
          });
        }, 'serializable', '_bloomMaterial');
        apply(() => {
          type(Material)(BloomStage.prototype, '_bloomMaterial', () => {
            return null;
          });
        }, 'type', '_bloomMaterial');
        apply(() => {
          ccclass('BloomStage')(BloomStage);
        }, 'ccclass', null);
      }
      function patch_cc_AmbientInfo(ctx, apply = defaultExec) {
        const {
          AmbientInfo,
          legacyCC,
          CCFloat,
          Vec4,
          Ambient
        } = {
          ...ctx
        };
        const skyLightingColorDescriptor = Object.getOwnPropertyDescriptor(AmbientInfo.prototype, 'skyLightingColor');
        const skyIllumDescriptor = Object.getOwnPropertyDescriptor(AmbientInfo.prototype, 'skyIllum');
        const groundLightingColorDescriptor = Object.getOwnPropertyDescriptor(AmbientInfo.prototype, 'groundLightingColor');
        apply(() => {
          tooltip('i18n:ambient.skyLightingColor')(AmbientInfo.prototype, 'skyLightingColor', skyLightingColorDescriptor);
        }, 'tooltip', 'skyLightingColor');
        apply(() => {
          editable(AmbientInfo.prototype, 'skyLightingColor', skyLightingColorDescriptor);
        }, 'editable', 'skyLightingColor');
        apply(() => {
          visible(() => {
            const scene = legacyCC.director.getScene();
            const skybox = scene.globals.skybox;
            if (skybox.useIBL && skybox.applyDiffuseMap) {
              return false;
            } else {
              return true;
            }
          })(AmbientInfo.prototype, 'skyLightingColor', skyLightingColorDescriptor);
        }, 'visible', 'skyLightingColor');
        apply(() => {
          range([0, Number.POSITIVE_INFINITY, 100])(AmbientInfo.prototype, 'skyIllum', skyIllumDescriptor);
        }, 'range', 'skyIllum');
        apply(() => {
          tooltip('i18n:ambient.skyIllum')(AmbientInfo.prototype, 'skyIllum', skyIllumDescriptor);
        }, 'tooltip', 'skyIllum');
        apply(() => {
          type(CCFloat)(AmbientInfo.prototype, 'skyIllum', skyIllumDescriptor);
        }, 'type', 'skyIllum');
        apply(() => {
          editable(AmbientInfo.prototype, 'skyIllum', skyIllumDescriptor);
        }, 'editable', 'skyIllum');
        apply(() => {
          tooltip('i18n:ambient.groundLightingColor')(AmbientInfo.prototype, 'groundLightingColor', groundLightingColorDescriptor);
        }, 'tooltip', 'groundLightingColor');
        apply(() => {
          editable(AmbientInfo.prototype, 'groundLightingColor', groundLightingColorDescriptor);
        }, 'editable', 'groundLightingColor');
        apply(() => {
          visible(() => {
            const scene = legacyCC.director.getScene();
            const skybox = scene.globals.skybox;
            if (skybox.useIBL && skybox.applyDiffuseMap) {
              return false;
            } else {
              return true;
            }
          })(AmbientInfo.prototype, 'groundLightingColor', groundLightingColorDescriptor);
        }, 'visible', 'groundLightingColor');
        apply(() => {
          formerlySerializedAs('_skyColor')(AmbientInfo.prototype, '_skyColorHDR', () => {
            return new Vec4(0.2, 0.5, 0.8, 1.0);
          });
        }, 'formerlySerializedAs', '_skyColorHDR');
        apply(() => {
          serializable(AmbientInfo.prototype, '_skyColorHDR', () => {
            return new Vec4(0.2, 0.5, 0.8, 1.0);
          });
        }, 'serializable', '_skyColorHDR');
        apply(() => {
          formerlySerializedAs('_skyIllum')(AmbientInfo.prototype, '_skyIllumHDR', () => {
            return Ambient.SKY_ILLUM;
          });
        }, 'formerlySerializedAs', '_skyIllumHDR');
        apply(() => {
          serializable(AmbientInfo.prototype, '_skyIllumHDR', () => {
            return Ambient.SKY_ILLUM;
          });
        }, 'serializable', '_skyIllumHDR');
        apply(() => {
          formerlySerializedAs('_groundAlbedo')(AmbientInfo.prototype, '_groundAlbedoHDR', () => {
            return new Vec4(0.2, 0.2, 0.2, 1.0);
          });
        }, 'formerlySerializedAs', '_groundAlbedoHDR');
        apply(() => {
          serializable(AmbientInfo.prototype, '_groundAlbedoHDR', () => {
            return new Vec4(0.2, 0.2, 0.2, 1.0);
          });
        }, 'serializable', '_groundAlbedoHDR');
        apply(() => {
          serializable(AmbientInfo.prototype, '_skyColorLDR', () => {
            return new Vec4(0.2, 0.5, 0.8, 1.0);
          });
        }, 'serializable', '_skyColorLDR');
        apply(() => {
          serializable(AmbientInfo.prototype, '_skyIllumLDR', () => {
            return Ambient.SKY_ILLUM;
          });
        }, 'serializable', '_skyIllumLDR');
        apply(() => {
          serializable(AmbientInfo.prototype, '_groundAlbedoLDR', () => {
            return new Vec4(0.2, 0.2, 0.2, 1.0);
          });
        }, 'serializable', '_groundAlbedoLDR');
        apply(() => {
          ccclass('cc.AmbientInfo')(AmbientInfo);
        }, 'ccclass', null);
      }
      function patch_cc_Asset(ctx, apply = defaultExec) {
        const {
          Asset
        } = {
          ...ctx
        };
        const _nativeAssetDescriptor = Object.getOwnPropertyDescriptor(Asset.prototype, '_nativeAsset');
        apply(() => {
          serializable(Asset.prototype, '_native', () => {
            return '';
          });
        }, 'serializable', '_native');
        apply(() => {
          property(Asset.prototype, '_nativeAsset', _nativeAssetDescriptor);
        }, 'property', '_nativeAsset');
        apply(() => {
          ccclass('cc.Asset')(Asset);
        }, 'ccclass', null);
      }
      function patch_cc_BufferAsset(ctx, apply = defaultExec) {
        const {
          BufferAsset
        } = {
          ...ctx
        };
        const _nativeAssetDescriptor = Object.getOwnPropertyDescriptor(BufferAsset.prototype, '_nativeAsset');
        apply(() => {
          override(BufferAsset.prototype, '_nativeAsset', _nativeAssetDescriptor);
        }, 'override', '_nativeAsset');
        apply(() => {
          ccclass('cc.BufferAsset')(BufferAsset);
        }, 'ccclass', null);
      }
      function patch_cc_CircumSphere(ctx, apply = defaultExec) {
        const {
          CircumSphere,
          Vec3
        } = {
          ...ctx
        };
        apply(() => {
          serializable(CircumSphere.prototype, 'center', () => {
            return new Vec3(0, 0, 0);
          });
        }, 'serializable', 'center');
        apply(() => {
          serializable(CircumSphere.prototype, 'radiusSquared', () => {
            return 0.0;
          });
        }, 'serializable', 'radiusSquared');
        apply(() => {
          ccclass('cc.CircumSphere')(CircumSphere);
        }, 'ccclass', null);
      }
      function patch_cc_EffectAsset(ctx, apply = defaultExec) {
        const {
          EffectAsset
        } = {
          ...ctx
        };
        apply(() => {
          editable(EffectAsset.prototype, 'techniques', () => {
            return [];
          });
        }, 'editable', 'techniques');
        apply(() => {
          serializable(EffectAsset.prototype, 'techniques', () => {
            return [];
          });
        }, 'serializable', 'techniques');
        apply(() => {
          editable(EffectAsset.prototype, 'shaders', () => {
            return [];
          });
        }, 'editable', 'shaders');
        apply(() => {
          serializable(EffectAsset.prototype, 'shaders', () => {
            return [];
          });
        }, 'serializable', 'shaders');
        apply(() => {
          editable(EffectAsset.prototype, 'combinations', () => {
            return [];
          });
        }, 'editable', 'combinations');
        apply(() => {
          serializable(EffectAsset.prototype, 'combinations', () => {
            return [];
          });
        }, 'serializable', 'combinations');
        apply(() => {
          editorOnly(EffectAsset.prototype, 'hideInEditor', () => {
            return false;
          });
        }, 'editorOnly', 'hideInEditor');
        apply(() => {
          serializable(EffectAsset.prototype, 'hideInEditor', () => {
            return false;
          });
        }, 'serializable', 'hideInEditor');
        apply(() => {
          ccclass('cc.EffectAsset')(EffectAsset);
        }, 'ccclass', null);
      }
      function patch_cc_FogInfo(ctx, apply = defaultExec) {
        const {
          FogInfo,
          FogType,
          CCFloat,
          Color
        } = {
          ...ctx
        };
        const enabledDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'enabled');
        const accurateDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'accurate');
        const fogColorDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'fogColor');
        const typeDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'type');
        const fogDensityDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'fogDensity');
        const fogStartDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'fogStart');
        const fogEndDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'fogEnd');
        const fogAttenDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'fogAtten');
        const fogTopDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'fogTop');
        const fogRangeDescriptor = Object.getOwnPropertyDescriptor(FogInfo.prototype, 'fogRange');
        apply(() => {
          displayOrder(0)(FogInfo.prototype, 'enabled', enabledDescriptor);
        }, 'displayOrder', 'enabled');
        apply(() => {
          tooltip('i18n:fog.enabled')(FogInfo.prototype, 'enabled', enabledDescriptor);
        }, 'tooltip', 'enabled');
        apply(() => {
          editable(FogInfo.prototype, 'enabled', enabledDescriptor);
        }, 'editable', 'enabled');
        apply(() => {
          displayOrder(0)(FogInfo.prototype, 'accurate', accurateDescriptor);
        }, 'displayOrder', 'accurate');
        apply(() => {
          tooltip('i18n:fog.accurate')(FogInfo.prototype, 'accurate', accurateDescriptor);
        }, 'tooltip', 'accurate');
        apply(() => {
          editable(FogInfo.prototype, 'accurate', accurateDescriptor);
        }, 'editable', 'accurate');
        apply(() => {
          tooltip('i18n:fog.fogColor')(FogInfo.prototype, 'fogColor', fogColorDescriptor);
        }, 'tooltip', 'fogColor');
        apply(() => {
          editable(FogInfo.prototype, 'fogColor', fogColorDescriptor);
        }, 'editable', 'fogColor');
        apply(() => {
          tooltip('i18n:fog.type')(FogInfo.prototype, 'type', typeDescriptor);
        }, 'tooltip', 'type');
        apply(() => {
          displayOrder(1)(FogInfo.prototype, 'type', typeDescriptor);
        }, 'displayOrder', 'type');
        apply(() => {
          type(FogType)(FogInfo.prototype, 'type', typeDescriptor);
        }, 'type', 'type');
        apply(() => {
          editable(FogInfo.prototype, 'type', typeDescriptor);
        }, 'editable', 'type');
        apply(() => {
          tooltip('i18n:fog.fogDensity')(FogInfo.prototype, 'fogDensity', fogDensityDescriptor);
        }, 'tooltip', 'fogDensity');
        apply(() => {
          slide(FogInfo.prototype, 'fogDensity', fogDensityDescriptor);
        }, 'slide', 'fogDensity');
        apply(() => {
          range([0, 1, 0.01])(FogInfo.prototype, 'fogDensity', fogDensityDescriptor);
        }, 'range', 'fogDensity');
        apply(() => {
          type(CCFloat)(FogInfo.prototype, 'fogDensity', fogDensityDescriptor);
        }, 'type', 'fogDensity');
        apply(() => {
          visible(function () {
            return this._type !== FogType.LAYERED && this._type !== FogType.LINEAR;
          })(FogInfo.prototype, 'fogDensity', fogDensityDescriptor);
        }, 'visible', 'fogDensity');
        apply(() => {
          tooltip('i18n:fog.fogStart')(FogInfo.prototype, 'fogStart', fogStartDescriptor);
        }, 'tooltip', 'fogStart');
        apply(() => {
          rangeStep(0.01)(FogInfo.prototype, 'fogStart', fogStartDescriptor);
        }, 'rangeStep', 'fogStart');
        apply(() => {
          type(CCFloat)(FogInfo.prototype, 'fogStart', fogStartDescriptor);
        }, 'type', 'fogStart');
        apply(() => {
          visible(function () {
            return this._type !== FogType.LAYERED;
          })(FogInfo.prototype, 'fogStart', fogStartDescriptor);
        }, 'visible', 'fogStart');
        apply(() => {
          tooltip('i18n:fog.fogEnd')(FogInfo.prototype, 'fogEnd', fogEndDescriptor);
        }, 'tooltip', 'fogEnd');
        apply(() => {
          rangeStep(0.01)(FogInfo.prototype, 'fogEnd', fogEndDescriptor);
        }, 'rangeStep', 'fogEnd');
        apply(() => {
          type(CCFloat)(FogInfo.prototype, 'fogEnd', fogEndDescriptor);
        }, 'type', 'fogEnd');
        apply(() => {
          visible(function () {
            return this._type === FogType.LINEAR;
          })(FogInfo.prototype, 'fogEnd', fogEndDescriptor);
        }, 'visible', 'fogEnd');
        apply(() => {
          tooltip('i18n:fog.fogAtten')(FogInfo.prototype, 'fogAtten', fogAttenDescriptor);
        }, 'tooltip', 'fogAtten');
        apply(() => {
          rangeStep(0.01)(FogInfo.prototype, 'fogAtten', fogAttenDescriptor);
        }, 'rangeStep', 'fogAtten');
        apply(() => {
          rangeMin(0.01)(FogInfo.prototype, 'fogAtten', fogAttenDescriptor);
        }, 'rangeMin', 'fogAtten');
        apply(() => {
          type(CCFloat)(FogInfo.prototype, 'fogAtten', fogAttenDescriptor);
        }, 'type', 'fogAtten');
        apply(() => {
          visible(function () {
            return this._type !== FogType.LINEAR;
          })(FogInfo.prototype, 'fogAtten', fogAttenDescriptor);
        }, 'visible', 'fogAtten');
        apply(() => {
          tooltip('i18n:fog.fogTop')(FogInfo.prototype, 'fogTop', fogTopDescriptor);
        }, 'tooltip', 'fogTop');
        apply(() => {
          rangeStep(0.01)(FogInfo.prototype, 'fogTop', fogTopDescriptor);
        }, 'rangeStep', 'fogTop');
        apply(() => {
          type(CCFloat)(FogInfo.prototype, 'fogTop', fogTopDescriptor);
        }, 'type', 'fogTop');
        apply(() => {
          visible(function () {
            return this._type === FogType.LAYERED;
          })(FogInfo.prototype, 'fogTop', fogTopDescriptor);
        }, 'visible', 'fogTop');
        apply(() => {
          tooltip('i18n:fog.fogRange')(FogInfo.prototype, 'fogRange', fogRangeDescriptor);
        }, 'tooltip', 'fogRange');
        apply(() => {
          rangeStep(0.01)(FogInfo.prototype, 'fogRange', fogRangeDescriptor);
        }, 'rangeStep', 'fogRange');
        apply(() => {
          type(CCFloat)(FogInfo.prototype, 'fogRange', fogRangeDescriptor);
        }, 'type', 'fogRange');
        apply(() => {
          visible(function () {
            return this._type === FogType.LAYERED;
          })(FogInfo.prototype, 'fogRange', fogRangeDescriptor);
        }, 'visible', 'fogRange');
        apply(() => {
          serializable(FogInfo.prototype, '_type', () => {
            return FogType.LINEAR;
          });
        }, 'serializable', '_type');
        apply(() => {
          serializable(FogInfo.prototype, '_fogColor', () => {
            return new Color('#C8C8C8');
          });
        }, 'serializable', '_fogColor');
        apply(() => {
          serializable(FogInfo.prototype, '_enabled', () => {
            return false;
          });
        }, 'serializable', '_enabled');
        apply(() => {
          serializable(FogInfo.prototype, '_fogDensity', () => {
            return 0.3;
          });
        }, 'serializable', '_fogDensity');
        apply(() => {
          serializable(FogInfo.prototype, '_fogStart', () => {
            return 0.5;
          });
        }, 'serializable', '_fogStart');
        apply(() => {
          serializable(FogInfo.prototype, '_fogEnd', () => {
            return 300;
          });
        }, 'serializable', '_fogEnd');
        apply(() => {
          serializable(FogInfo.prototype, '_fogAtten', () => {
            return 5;
          });
        }, 'serializable', '_fogAtten');
        apply(() => {
          serializable(FogInfo.prototype, '_fogTop', () => {
            return 1.5;
          });
        }, 'serializable', '_fogTop');
        apply(() => {
          serializable(FogInfo.prototype, '_fogRange', () => {
            return 1.2;
          });
        }, 'serializable', '_fogRange');
        apply(() => {
          serializable(FogInfo.prototype, '_accurate', () => {
            return false;
          });
        }, 'serializable', '_accurate');
        apply(() => {
          ccclass('cc.FogInfo')(FogInfo);
        }, 'ccclass', null);
      }
      function patch_cc_ImageAsset(ctx, apply = defaultExec) {
        const {
          ImageAsset
        } = {
          ...ctx
        };
        const _nativeAssetDescriptor = Object.getOwnPropertyDescriptor(ImageAsset.prototype, '_nativeAsset');
        apply(() => {
          override(ImageAsset.prototype, '_nativeAsset', _nativeAssetDescriptor);
        }, 'override', '_nativeAsset');
        apply(() => {
          ccclass('cc.ImageAsset')(ImageAsset);
        }, 'ccclass', null);
      }
      function patch_cc_LightProbeInfo(ctx, apply = defaultExec) {
        const {
          LightProbeInfo,
          CCFloat,
          CCInteger
        } = {
          ...ctx
        };
        const giScaleDescriptor = Object.getOwnPropertyDescriptor(LightProbeInfo.prototype, 'giScale');
        const giSamplesDescriptor = Object.getOwnPropertyDescriptor(LightProbeInfo.prototype, 'giSamples');
        const bouncesDescriptor = Object.getOwnPropertyDescriptor(LightProbeInfo.prototype, 'bounces');
        const reduceRingingDescriptor = Object.getOwnPropertyDescriptor(LightProbeInfo.prototype, 'reduceRinging');
        const showWireframeDescriptor = Object.getOwnPropertyDescriptor(LightProbeInfo.prototype, 'showWireframe');
        const showConvexDescriptor = Object.getOwnPropertyDescriptor(LightProbeInfo.prototype, 'showConvex');
        const lightProbeSphereVolumeDescriptor = Object.getOwnPropertyDescriptor(LightProbeInfo.prototype, 'lightProbeSphereVolume');
        apply(() => {
          displayName('GIScale')(LightProbeInfo.prototype, 'giScale', giScaleDescriptor);
        }, 'displayName', 'giScale');
        apply(() => {
          tooltip('i18n:light_probe.giScale')(LightProbeInfo.prototype, 'giScale', giScaleDescriptor);
        }, 'tooltip', 'giScale');
        apply(() => {
          type(CCFloat)(LightProbeInfo.prototype, 'giScale', giScaleDescriptor);
        }, 'type', 'giScale');
        apply(() => {
          range([0, 100, 1])(LightProbeInfo.prototype, 'giScale', giScaleDescriptor);
        }, 'range', 'giScale');
        apply(() => {
          editable(LightProbeInfo.prototype, 'giScale', giScaleDescriptor);
        }, 'editable', 'giScale');
        apply(() => {
          displayName('GISamples')(LightProbeInfo.prototype, 'giSamples', giSamplesDescriptor);
        }, 'displayName', 'giSamples');
        apply(() => {
          tooltip('i18n:light_probe.giSamples')(LightProbeInfo.prototype, 'giSamples', giSamplesDescriptor);
        }, 'tooltip', 'giSamples');
        apply(() => {
          type(CCInteger)(LightProbeInfo.prototype, 'giSamples', giSamplesDescriptor);
        }, 'type', 'giSamples');
        apply(() => {
          range([64, 65535, 1])(LightProbeInfo.prototype, 'giSamples', giSamplesDescriptor);
        }, 'range', 'giSamples');
        apply(() => {
          editable(LightProbeInfo.prototype, 'giSamples', giSamplesDescriptor);
        }, 'editable', 'giSamples');
        apply(() => {
          tooltip('i18n:light_probe.bounces')(LightProbeInfo.prototype, 'bounces', bouncesDescriptor);
        }, 'tooltip', 'bounces');
        apply(() => {
          type(CCInteger)(LightProbeInfo.prototype, 'bounces', bouncesDescriptor);
        }, 'type', 'bounces');
        apply(() => {
          range([1, 4, 1])(LightProbeInfo.prototype, 'bounces', bouncesDescriptor);
        }, 'range', 'bounces');
        apply(() => {
          editable(LightProbeInfo.prototype, 'bounces', bouncesDescriptor);
        }, 'editable', 'bounces');
        apply(() => {
          tooltip('i18n:light_probe.reduceRinging')(LightProbeInfo.prototype, 'reduceRinging', reduceRingingDescriptor);
        }, 'tooltip', 'reduceRinging');
        apply(() => {
          type(CCFloat)(LightProbeInfo.prototype, 'reduceRinging', reduceRingingDescriptor);
        }, 'type', 'reduceRinging');
        apply(() => {
          slide(LightProbeInfo.prototype, 'reduceRinging', reduceRingingDescriptor);
        }, 'slide', 'reduceRinging');
        apply(() => {
          range([0.0, 0.05, 0.001])(LightProbeInfo.prototype, 'reduceRinging', reduceRingingDescriptor);
        }, 'range', 'reduceRinging');
        apply(() => {
          editable(LightProbeInfo.prototype, 'reduceRinging', reduceRingingDescriptor);
        }, 'editable', 'reduceRinging');
        apply(() => {
          tooltip('i18n:light_probe.showWireframe')(LightProbeInfo.prototype, 'showWireframe', showWireframeDescriptor);
        }, 'tooltip', 'showWireframe');
        apply(() => {
          editable(LightProbeInfo.prototype, 'showWireframe', showWireframeDescriptor);
        }, 'editable', 'showWireframe');
        apply(() => {
          tooltip('i18n:light_probe.showConvex')(LightProbeInfo.prototype, 'showConvex', showConvexDescriptor);
        }, 'tooltip', 'showConvex');
        apply(() => {
          editable(LightProbeInfo.prototype, 'showConvex', showConvexDescriptor);
        }, 'editable', 'showConvex');
        apply(() => {
          tooltip('i18n:light_probe.lightProbeSphereVolume')(LightProbeInfo.prototype, 'lightProbeSphereVolume', lightProbeSphereVolumeDescriptor);
        }, 'tooltip', 'lightProbeSphereVolume');
        apply(() => {
          type(CCFloat)(LightProbeInfo.prototype, 'lightProbeSphereVolume', lightProbeSphereVolumeDescriptor);
        }, 'type', 'lightProbeSphereVolume');
        apply(() => {
          range([0, 100, 1])(LightProbeInfo.prototype, 'lightProbeSphereVolume', lightProbeSphereVolumeDescriptor);
        }, 'range', 'lightProbeSphereVolume');
        apply(() => {
          editable(LightProbeInfo.prototype, 'lightProbeSphereVolume', lightProbeSphereVolumeDescriptor);
        }, 'editable', 'lightProbeSphereVolume');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_giScale', () => {
            return 1.0;
          });
        }, 'serializable', '_giScale');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_giSamples', () => {
            return 1024;
          });
        }, 'serializable', '_giSamples');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_bounces', () => {
            return 2;
          });
        }, 'serializable', '_bounces');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_reduceRinging', () => {
            return 0.0;
          });
        }, 'serializable', '_reduceRinging');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_showProbe', () => {
            return true;
          });
        }, 'serializable', '_showProbe');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_showWireframe', () => {
            return true;
          });
        }, 'serializable', '_showWireframe');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_showConvex', () => {
            return false;
          });
        }, 'serializable', '_showConvex');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_data', () => {
            return null;
          });
        }, 'serializable', '_data');
        apply(() => {
          serializable(LightProbeInfo.prototype, '_lightProbeSphereVolume', () => {
            return 1.0;
          });
        }, 'serializable', '_lightProbeSphereVolume');
        apply(() => {
          ccclass('cc.LightProbeInfo')(LightProbeInfo);
        }, 'ccclass', null);
      }
      function patch_cc_LightProbesData(ctx, apply = defaultExec) {
        const {
          LightProbesData,
          Vertex,
          Tetrahedron
        } = {
          ...ctx
        };
        apply(() => {
          type([Vertex])(LightProbesData.prototype, '_probes', () => {
            return [];
          });
        }, 'type', '_probes');
        apply(() => {
          serializable(LightProbesData.prototype, '_probes', () => {
            return [];
          });
        }, 'serializable', '_probes');
        apply(() => {
          type([Tetrahedron])(LightProbesData.prototype, '_tetrahedrons', () => {
            return [];
          });
        }, 'type', '_tetrahedrons');
        apply(() => {
          serializable(LightProbesData.prototype, '_tetrahedrons', () => {
            return [];
          });
        }, 'serializable', '_tetrahedrons');
        apply(() => {
          ccclass('cc.LightProbesData')(LightProbesData);
        }, 'ccclass', null);
      }
      function patch_cc_Material(ctx, apply = defaultExec) {
        const {
          Material,
          EffectAsset
        } = {
          ...ctx
        };
        apply(() => {
          type(EffectAsset)(Material.prototype, '_effectAsset', () => {
            return null;
          });
        }, 'type', '_effectAsset');
        apply(() => {
          serializable(Material.prototype, '_techIdx', () => {
            return 0;
          });
        }, 'serializable', '_techIdx');
        apply(() => {
          serializable(Material.prototype, '_defines', () => {
            return [];
          });
        }, 'serializable', '_defines');
        apply(() => {
          serializable(Material.prototype, '_states', () => {
            return [];
          });
        }, 'serializable', '_states');
        apply(() => {
          serializable(Material.prototype, '_props', () => {
            return [];
          });
        }, 'serializable', '_props');
        apply(() => {
          ccclass('cc.Material')(Material);
        }, 'ccclass', null);
      }
      function patch_cc_Mesh(ctx, apply = defaultExec) {
        const {
          Mesh
        } = {
          ...ctx
        };
        apply(() => {
          serializable(Mesh.prototype, '_struct', () => {
            return {
              vertexBundles: [],
              primitives: []
            };
          });
        }, 'serializable', '_struct');
        apply(() => {
          serializable(Mesh.prototype, '_hash', () => {
            return 0;
          });
        }, 'serializable', '_hash');
        apply(() => {
          serializable(Mesh.prototype, '_allowDataAccess', () => {
            return true;
          });
        }, 'serializable', '_allowDataAccess');
        apply(() => {
          ccclass('cc.Mesh')(Mesh);
        }, 'ccclass', null);
      }
      function patch_cc_Node(ctx, apply = defaultExec) {
        const {
          Node,
          Vec3,
          Quat,
          MobilityMode,
          Layers
        } = {
          ...ctx
        };
        const _persistNodeDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, '_persistNode');
        const nameDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'name');
        const childrenDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'children');
        const activeDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'active');
        const activeInHierarchyDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'activeInHierarchy');
        const parentDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'parent');
        const eulerAnglesDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'eulerAngles');
        const angleDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'angle');
        const mobilityDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'mobility');
        const layerDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'layer');
        apply(() => {
          property(Node.prototype, '_persistNode', _persistNodeDescriptor);
        }, 'property', '_persistNode');
        apply(() => {
          editable(Node.prototype, 'name', nameDescriptor);
        }, 'editable', 'name');
        apply(() => {
          editable(Node.prototype, 'children', childrenDescriptor);
        }, 'editable', 'children');
        apply(() => {
          editable(Node.prototype, 'active', activeDescriptor);
        }, 'editable', 'active');
        apply(() => {
          editable(Node.prototype, 'activeInHierarchy', activeInHierarchyDescriptor);
        }, 'editable', 'activeInHierarchy');
        apply(() => {
          editable(Node.prototype, 'parent', parentDescriptor);
        }, 'editable', 'parent');
        apply(() => {
          serializable(Node.prototype, '_parent', () => {
            return null;
          });
        }, 'serializable', '_parent');
        apply(() => {
          serializable(Node.prototype, '_children', () => {
            return [];
          });
        }, 'serializable', '_children');
        apply(() => {
          serializable(Node.prototype, '_active', () => {
            return true;
          });
        }, 'serializable', '_active');
        apply(() => {
          serializable(Node.prototype, '_components', () => {
            return [];
          });
        }, 'serializable', '_components');
        apply(() => {
          serializable(Node.prototype, '_prefab', () => {
            return null;
          });
        }, 'serializable', '_prefab');
        apply(() => {
          serializable(Node.prototype, '_lpos', () => {
            return new Vec3();
          });
        }, 'serializable', '_lpos');
        apply(() => {
          serializable(Node.prototype, '_lrot', () => {
            return new Quat();
          });
        }, 'serializable', '_lrot');
        apply(() => {
          serializable(Node.prototype, '_lscale', () => {
            return new Vec3(1, 1, 1);
          });
        }, 'serializable', '_lscale');
        apply(() => {
          serializable(Node.prototype, '_mobility', () => {
            return MobilityMode.Static;
          });
        }, 'serializable', '_mobility');
        apply(() => {
          serializable(Node.prototype, '_layer', () => {
            return Layers.Enum.DEFAULT;
          });
        }, 'serializable', '_layer');
        apply(() => {
          serializable(Node.prototype, '_euler', () => {
            return new Vec3();
          });
        }, 'serializable', '_euler');
        apply(() => {
          type(Vec3)(Node.prototype, 'eulerAngles', eulerAnglesDescriptor);
        }, 'type', 'eulerAngles');
        apply(() => {
          editable(Node.prototype, 'angle', angleDescriptor);
        }, 'editable', 'angle');
        apply(() => {
          type(MobilityMode)(Node.prototype, 'mobility', mobilityDescriptor);
        }, 'type', 'mobility');
        apply(() => {
          editable(Node.prototype, 'mobility', mobilityDescriptor);
        }, 'editable', 'mobility');
        apply(() => {
          editable(Node.prototype, 'layer', layerDescriptor);
        }, 'editable', 'layer');
        apply(() => {
          ccclass('cc.Node')(Node);
        }, 'ccclass', null);
      }
      function patch_cc_OctreeInfo(ctx, apply = defaultExec) {
        const {
          OctreeInfo,
          CCInteger,
          Vec3,
          DEFAULT_WORLD_MIN_POS,
          DEFAULT_WORLD_MAX_POS,
          DEFAULT_OCTREE_DEPTH
        } = {
          ...ctx
        };
        const enabledDescriptor = Object.getOwnPropertyDescriptor(OctreeInfo.prototype, 'enabled');
        const minPosDescriptor = Object.getOwnPropertyDescriptor(OctreeInfo.prototype, 'minPos');
        const maxPosDescriptor = Object.getOwnPropertyDescriptor(OctreeInfo.prototype, 'maxPos');
        const depthDescriptor = Object.getOwnPropertyDescriptor(OctreeInfo.prototype, 'depth');
        apply(() => {
          tooltip('i18n:octree_culling.enabled')(OctreeInfo.prototype, 'enabled', enabledDescriptor);
        }, 'tooltip', 'enabled');
        apply(() => {
          editable(OctreeInfo.prototype, 'enabled', enabledDescriptor);
        }, 'editable', 'enabled');
        apply(() => {
          displayName('World MinPos')(OctreeInfo.prototype, 'minPos', minPosDescriptor);
        }, 'displayName', 'minPos');
        apply(() => {
          tooltip('i18n:octree_culling.minPos')(OctreeInfo.prototype, 'minPos', minPosDescriptor);
        }, 'tooltip', 'minPos');
        apply(() => {
          editable(OctreeInfo.prototype, 'minPos', minPosDescriptor);
        }, 'editable', 'minPos');
        apply(() => {
          displayName('World MaxPos')(OctreeInfo.prototype, 'maxPos', maxPosDescriptor);
        }, 'displayName', 'maxPos');
        apply(() => {
          tooltip('i18n:octree_culling.maxPos')(OctreeInfo.prototype, 'maxPos', maxPosDescriptor);
        }, 'tooltip', 'maxPos');
        apply(() => {
          editable(OctreeInfo.prototype, 'maxPos', maxPosDescriptor);
        }, 'editable', 'maxPos');
        apply(() => {
          tooltip('i18n:octree_culling.depth')(OctreeInfo.prototype, 'depth', depthDescriptor);
        }, 'tooltip', 'depth');
        apply(() => {
          type(CCInteger)(OctreeInfo.prototype, 'depth', depthDescriptor);
        }, 'type', 'depth');
        apply(() => {
          slide(OctreeInfo.prototype, 'depth', depthDescriptor);
        }, 'slide', 'depth');
        apply(() => {
          range([4, 12, 1])(OctreeInfo.prototype, 'depth', depthDescriptor);
        }, 'range', 'depth');
        apply(() => {
          editable(OctreeInfo.prototype, 'depth', depthDescriptor);
        }, 'editable', 'depth');
        apply(() => {
          serializable(OctreeInfo.prototype, '_enabled', () => {
            return false;
          });
        }, 'serializable', '_enabled');
        apply(() => {
          serializable(OctreeInfo.prototype, '_minPos', () => {
            return new Vec3(DEFAULT_WORLD_MIN_POS);
          });
        }, 'serializable', '_minPos');
        apply(() => {
          serializable(OctreeInfo.prototype, '_maxPos', () => {
            return new Vec3(DEFAULT_WORLD_MAX_POS);
          });
        }, 'serializable', '_maxPos');
        apply(() => {
          serializable(OctreeInfo.prototype, '_depth', () => {
            return DEFAULT_OCTREE_DEPTH;
          });
        }, 'serializable', '_depth');
        apply(() => {
          ccclass('cc.OctreeInfo')(OctreeInfo);
        }, 'ccclass', null);
      }
      function patch_cc_PostSettingsInfo(ctx, apply = defaultExec) {
        const {
          PostSettingsInfo,
          ToneMappingType
        } = {
          ...ctx
        };
        const toneMappingTypeDescriptor = Object.getOwnPropertyDescriptor(PostSettingsInfo.prototype, 'toneMappingType');
        apply(() => {
          tooltip('i18n:tone_mapping.toneMappingType')(PostSettingsInfo.prototype, 'toneMappingType', toneMappingTypeDescriptor);
        }, 'tooltip', 'toneMappingType');
        apply(() => {
          type(ToneMappingType)(PostSettingsInfo.prototype, 'toneMappingType', toneMappingTypeDescriptor);
        }, 'type', 'toneMappingType');
        apply(() => {
          editable(PostSettingsInfo.prototype, 'toneMappingType', toneMappingTypeDescriptor);
        }, 'editable', 'toneMappingType');
        apply(() => {
          serializable(PostSettingsInfo.prototype, '_toneMappingType', () => {
            return ToneMappingType.DEFAULT;
          });
        }, 'serializable', '_toneMappingType');
        apply(() => {
          ccclass('cc.PostSettingsInfo')(PostSettingsInfo);
        }, 'ccclass', null);
      }
      function patch_cc_RenderPipeline(ctx, apply = defaultExec) {
        const {
          RenderPipeline,
          RenderFlow
        } = {
          ...ctx
        };
        apply(() => {
          serializable(RenderPipeline.prototype, '_tag', () => {
            return 0;
          });
        }, 'serializable', '_tag');
        apply(() => {
          displayOrder(0)(RenderPipeline.prototype, '_tag', () => {
            return 0;
          });
        }, 'displayOrder', '_tag');
        apply(() => {
          serializable(RenderPipeline.prototype, '_flows', () => {
            return [];
          });
        }, 'serializable', '_flows');
        apply(() => {
          type([RenderFlow])(RenderPipeline.prototype, '_flows', () => {
            return [];
          });
        }, 'type', '_flows');
        apply(() => {
          displayOrder(1)(RenderPipeline.prototype, '_flows', () => {
            return [];
          });
        }, 'displayOrder', '_flows');
        apply(() => {
          ccclass('cc.RenderPipeline')(RenderPipeline);
        }, 'ccclass', null);
      }
      function patch_cc_RenderTexture(ctx, apply = defaultExec) {
        const {
          RenderTexture
        } = {
          ...ctx
        };
        apply(() => {
          ccclass('cc.RenderTexture')(RenderTexture);
        }, 'ccclass', null);
      }
      function patch_cc_Scene(ctx, apply = defaultExec) {
        const {
          Scene,
          SceneGlobals
        } = {
          ...ctx
        };
        const globalsDescriptor = Object.getOwnPropertyDescriptor(Scene.prototype, 'globals');
        apply(() => {
          editable(Scene.prototype, 'globals', globalsDescriptor);
        }, 'editable', 'globals');
        apply(() => {
          editable(Scene.prototype, 'autoReleaseAssets', () => {
            return false;
          });
        }, 'editable', 'autoReleaseAssets');
        apply(() => {
          serializable(Scene.prototype, 'autoReleaseAssets', () => {
            return false;
          });
        }, 'serializable', 'autoReleaseAssets');
        apply(() => {
          serializable(Scene.prototype, '_globals', () => {
            return new SceneGlobals();
          });
        }, 'serializable', '_globals');
        apply(() => {
          ccclass('cc.Scene')(Scene);
        }, 'ccclass', null);
      }
      function patch_cc_SceneAsset(ctx, apply = defaultExec) {
        const {
          SceneAsset
        } = {
          ...ctx
        };
        apply(() => {
          serializable(SceneAsset.prototype, 'scene', () => {
            return null;
          });
        }, 'serializable', 'scene');
        apply(() => {
          editable(SceneAsset.prototype, 'scene', () => {
            return null;
          });
        }, 'editable', 'scene');
        apply(() => {
          ccclass('cc.SceneAsset')(SceneAsset);
        }, 'ccclass', null);
      }
      function patch_cc_SceneGlobals(ctx, apply = defaultExec) {
        const {
          SceneGlobals,
          AmbientInfo,
          ShadowsInfo,
          SkyboxInfo,
          FogInfo,
          OctreeInfo,
          SkinInfo,
          LightProbeInfo,
          PostSettingsInfo
        } = {
          ...ctx
        };
        const skyboxDescriptor = Object.getOwnPropertyDescriptor(SceneGlobals.prototype, 'skybox');
        apply(() => {
          editable(SceneGlobals.prototype, 'ambient', () => {
            return new AmbientInfo();
          });
        }, 'editable', 'ambient');
        apply(() => {
          serializable(SceneGlobals.prototype, 'ambient', () => {
            return new AmbientInfo();
          });
        }, 'serializable', 'ambient');
        apply(() => {
          editable(SceneGlobals.prototype, 'shadows', () => {
            return new ShadowsInfo();
          });
        }, 'editable', 'shadows');
        apply(() => {
          serializable(SceneGlobals.prototype, 'shadows', () => {
            return new ShadowsInfo();
          });
        }, 'serializable', 'shadows');
        apply(() => {
          serializable(SceneGlobals.prototype, '_skybox', () => {
            return new SkyboxInfo();
          });
        }, 'serializable', '_skybox');
        apply(() => {
          serializable(SceneGlobals.prototype, 'fog', () => {
            return new FogInfo();
          });
        }, 'serializable', 'fog');
        apply(() => {
          editable(SceneGlobals.prototype, 'fog', () => {
            return new FogInfo();
          });
        }, 'editable', 'fog');
        apply(() => {
          type(SkyboxInfo)(SceneGlobals.prototype, 'skybox', skyboxDescriptor);
        }, 'type', 'skybox');
        apply(() => {
          editable(SceneGlobals.prototype, 'skybox', skyboxDescriptor);
        }, 'editable', 'skybox');
        apply(() => {
          serializable(SceneGlobals.prototype, 'octree', () => {
            return new OctreeInfo();
          });
        }, 'serializable', 'octree');
        apply(() => {
          editable(SceneGlobals.prototype, 'octree', () => {
            return new OctreeInfo();
          });
        }, 'editable', 'octree');
        apply(() => {
          serializable(SceneGlobals.prototype, 'skin', () => {
            return new SkinInfo();
          });
        }, 'serializable', 'skin');
        apply(() => {
          editable(SceneGlobals.prototype, 'skin', () => {
            return new SkinInfo();
          });
        }, 'editable', 'skin');
        apply(() => {
          serializable(SceneGlobals.prototype, 'lightProbeInfo', () => {
            return new LightProbeInfo();
          });
        }, 'serializable', 'lightProbeInfo');
        apply(() => {
          editable(SceneGlobals.prototype, 'lightProbeInfo', () => {
            return new LightProbeInfo();
          });
        }, 'editable', 'lightProbeInfo');
        apply(() => {
          serializable(SceneGlobals.prototype, 'postSettings', () => {
            return new PostSettingsInfo();
          });
        }, 'serializable', 'postSettings');
        apply(() => {
          editable(SceneGlobals.prototype, 'postSettings', () => {
            return new PostSettingsInfo();
          });
        }, 'editable', 'postSettings');
        apply(() => {
          serializable(SceneGlobals.prototype, 'bakedWithStationaryMainLight', () => {
            return false;
          });
        }, 'serializable', 'bakedWithStationaryMainLight');
        apply(() => {
          editable(SceneGlobals.prototype, 'bakedWithStationaryMainLight', () => {
            return false;
          });
        }, 'editable', 'bakedWithStationaryMainLight');
        apply(() => {
          serializable(SceneGlobals.prototype, 'bakedWithHighpLightmap', () => {
            return false;
          });
        }, 'serializable', 'bakedWithHighpLightmap');
        apply(() => {
          editable(SceneGlobals.prototype, 'bakedWithHighpLightmap', () => {
            return false;
          });
        }, 'editable', 'bakedWithHighpLightmap');
        apply(() => {
          ccclass('cc.SceneGlobals')(SceneGlobals);
        }, 'ccclass', null);
      }
      function patch_cc_ShadowsInfo(ctx, apply = defaultExec) {
        const {
          ShadowsInfo,
          ShadowType,
          CCFloat,
          CCInteger,
          ShadowSize,
          Vec3,
          Color,
          Vec2
        } = {
          ...ctx
        };
        const enabledDescriptor = Object.getOwnPropertyDescriptor(ShadowsInfo.prototype, 'enabled');
        const typeDescriptor = Object.getOwnPropertyDescriptor(ShadowsInfo.prototype, 'type');
        const shadowColorDescriptor = Object.getOwnPropertyDescriptor(ShadowsInfo.prototype, 'shadowColor');
        const planeDirectionDescriptor = Object.getOwnPropertyDescriptor(ShadowsInfo.prototype, 'planeDirection');
        const planeHeightDescriptor = Object.getOwnPropertyDescriptor(ShadowsInfo.prototype, 'planeHeight');
        const planeBiasDescriptor = Object.getOwnPropertyDescriptor(ShadowsInfo.prototype, 'planeBias');
        const maxReceivedDescriptor = Object.getOwnPropertyDescriptor(ShadowsInfo.prototype, 'maxReceived');
        const shadowMapSizeDescriptor = Object.getOwnPropertyDescriptor(ShadowsInfo.prototype, 'shadowMapSize');
        apply(() => {
          tooltip('i18n:shadow.enabled')(ShadowsInfo.prototype, 'enabled', enabledDescriptor);
        }, 'tooltip', 'enabled');
        apply(() => {
          editable(ShadowsInfo.prototype, 'enabled', enabledDescriptor);
        }, 'editable', 'enabled');
        apply(() => {
          type(ShadowType)(ShadowsInfo.prototype, 'type', typeDescriptor);
        }, 'type', 'type');
        apply(() => {
          editable(ShadowsInfo.prototype, 'type', typeDescriptor);
        }, 'editable', 'type');
        apply(() => {
          tooltip('i18n:shadow.type')(ShadowsInfo.prototype, 'type', typeDescriptor);
        }, 'tooltip', 'type');
        apply(() => {
          visible(function () {
            return this._type === ShadowType.Planar;
          })(ShadowsInfo.prototype, 'shadowColor', shadowColorDescriptor);
        }, 'visible', 'shadowColor');
        apply(() => {
          tooltip('i18n:shadow.shadowColor')(ShadowsInfo.prototype, 'shadowColor', shadowColorDescriptor);
        }, 'tooltip', 'shadowColor');
        apply(() => {
          visible(function () {
            return this._type === ShadowType.Planar;
          })(ShadowsInfo.prototype, 'planeDirection', planeDirectionDescriptor);
        }, 'visible', 'planeDirection');
        apply(() => {
          tooltip('i18n:shadow.planeDirection')(ShadowsInfo.prototype, 'planeDirection', planeDirectionDescriptor);
        }, 'tooltip', 'planeDirection');
        apply(() => {
          visible(function () {
            return this._type === ShadowType.Planar;
          })(ShadowsInfo.prototype, 'planeHeight', planeHeightDescriptor);
        }, 'visible', 'planeHeight');
        apply(() => {
          type(CCFloat)(ShadowsInfo.prototype, 'planeHeight', planeHeightDescriptor);
        }, 'type', 'planeHeight');
        apply(() => {
          editable(ShadowsInfo.prototype, 'planeHeight', planeHeightDescriptor);
        }, 'editable', 'planeHeight');
        apply(() => {
          tooltip('i18n:shadow.planeHeight')(ShadowsInfo.prototype, 'planeHeight', planeHeightDescriptor);
        }, 'tooltip', 'planeHeight');
        apply(() => {
          visible(function () {
            return this._type === ShadowType.Planar;
          })(ShadowsInfo.prototype, 'planeBias', planeBiasDescriptor);
        }, 'visible', 'planeBias');
        apply(() => {
          type(CCFloat)(ShadowsInfo.prototype, 'planeBias', planeBiasDescriptor);
        }, 'type', 'planeBias');
        apply(() => {
          editable(ShadowsInfo.prototype, 'planeBias', planeBiasDescriptor);
        }, 'editable', 'planeBias');
        apply(() => {
          tooltip('i18n:shadow.planeBias')(ShadowsInfo.prototype, 'planeBias', planeBiasDescriptor);
        }, 'tooltip', 'planeBias');
        apply(() => {
          visible(function () {
            return this._type === ShadowType.ShadowMap;
          })(ShadowsInfo.prototype, 'maxReceived', maxReceivedDescriptor);
        }, 'visible', 'maxReceived');
        apply(() => {
          type(CCInteger)(ShadowsInfo.prototype, 'maxReceived', maxReceivedDescriptor);
        }, 'type', 'maxReceived');
        apply(() => {
          tooltip('i18n:shadow.maxReceived')(ShadowsInfo.prototype, 'maxReceived', maxReceivedDescriptor);
        }, 'tooltip', 'maxReceived');
        apply(() => {
          visible(function () {
            return this._type === ShadowType.ShadowMap;
          })(ShadowsInfo.prototype, 'shadowMapSize', shadowMapSizeDescriptor);
        }, 'visible', 'shadowMapSize');
        apply(() => {
          type(ShadowSize)(ShadowsInfo.prototype, 'shadowMapSize', shadowMapSizeDescriptor);
        }, 'type', 'shadowMapSize');
        apply(() => {
          tooltip('i18n:shadow.shadowMapSize')(ShadowsInfo.prototype, 'shadowMapSize', shadowMapSizeDescriptor);
        }, 'tooltip', 'shadowMapSize');
        apply(() => {
          serializable(ShadowsInfo.prototype, '_enabled', () => {
            return false;
          });
        }, 'serializable', '_enabled');
        apply(() => {
          serializable(ShadowsInfo.prototype, '_type', () => {
            return ShadowType.Planar;
          });
        }, 'serializable', '_type');
        apply(() => {
          serializable(ShadowsInfo.prototype, '_normal', () => {
            return new Vec3(0, 1, 0);
          });
        }, 'serializable', '_normal');
        apply(() => {
          serializable(ShadowsInfo.prototype, '_distance', () => {
            return 0;
          });
        }, 'serializable', '_distance');
        apply(() => {
          serializable(ShadowsInfo.prototype, '_planeBias', () => {
            return 1.0;
          });
        }, 'serializable', '_planeBias');
        apply(() => {
          serializable(ShadowsInfo.prototype, '_shadowColor', () => {
            return new Color(0, 0, 0, 76);
          });
        }, 'serializable', '_shadowColor');
        apply(() => {
          serializable(ShadowsInfo.prototype, '_maxReceived', () => {
            return 4;
          });
        }, 'serializable', '_maxReceived');
        apply(() => {
          serializable(ShadowsInfo.prototype, '_size', () => {
            return new Vec2(1024, 1024);
          });
        }, 'serializable', '_size');
        apply(() => {
          ccclass('cc.ShadowsInfo')(ShadowsInfo);
        }, 'ccclass', null);
      }
      function patch_cc_SimpleTexture(ctx, apply = defaultExec) {
        const {
          SimpleTexture
        } = {
          ...ctx
        };
        apply(() => {
          ccclass('cc.SimpleTexture')(SimpleTexture);
        }, 'ccclass', null);
      }
      function patch_cc_Skeleton(ctx, apply = defaultExec) {
        const {
          Skeleton,
          CCString,
          Mat4
        } = {
          ...ctx
        };
        apply(() => {
          type([CCString])(Skeleton.prototype, '_joints', () => {
            return [];
          });
        }, 'type', '_joints');
        apply(() => {
          type([Mat4])(Skeleton.prototype, '_bindposes', () => {
            return [];
          });
        }, 'type', '_bindposes');
        apply(() => {
          serializable(Skeleton.prototype, '_hash', () => {
            return 0;
          });
        }, 'serializable', '_hash');
        apply(() => {
          ccclass('cc.Skeleton')(Skeleton);
        }, 'ccclass', null);
      }
      function patch_cc_SkinInfo(ctx, apply = defaultExec) {
        const {
          SkinInfo,
          CCFloat
        } = {
          ...ctx
        };
        const enabledDescriptor = Object.getOwnPropertyDescriptor(SkinInfo.prototype, 'enabled');
        const blurRadiusDescriptor = Object.getOwnPropertyDescriptor(SkinInfo.prototype, 'blurRadius');
        const sssIntensityDescriptor = Object.getOwnPropertyDescriptor(SkinInfo.prototype, 'sssIntensity');
        apply(() => {
          tooltip('i18n:skin.enabled')(SkinInfo.prototype, 'enabled', enabledDescriptor);
        }, 'tooltip', 'enabled');
        apply(() => {
          readOnly(SkinInfo.prototype, 'enabled', enabledDescriptor);
        }, 'readOnly', 'enabled');
        apply(() => {
          editable(SkinInfo.prototype, 'enabled', enabledDescriptor);
        }, 'editable', 'enabled');
        apply(() => {
          tooltip('i18n:skin.blurRadius')(SkinInfo.prototype, 'blurRadius', blurRadiusDescriptor);
        }, 'tooltip', 'blurRadius');
        apply(() => {
          type(CCFloat)(SkinInfo.prototype, 'blurRadius', blurRadiusDescriptor);
        }, 'type', 'blurRadius');
        apply(() => {
          slide(SkinInfo.prototype, 'blurRadius', blurRadiusDescriptor);
        }, 'slide', 'blurRadius');
        apply(() => {
          range([0.0, 0.1, 0.001])(SkinInfo.prototype, 'blurRadius', blurRadiusDescriptor);
        }, 'range', 'blurRadius');
        apply(() => {
          editable(SkinInfo.prototype, 'blurRadius', blurRadiusDescriptor);
        }, 'editable', 'blurRadius');
        apply(() => {
          visible(false)(SkinInfo.prototype, 'blurRadius', blurRadiusDescriptor);
        }, 'visible', 'blurRadius');
        apply(() => {
          tooltip('i18n:skin.sssIntensity')(SkinInfo.prototype, 'sssIntensity', sssIntensityDescriptor);
        }, 'tooltip', 'sssIntensity');
        apply(() => {
          type(CCFloat)(SkinInfo.prototype, 'sssIntensity', sssIntensityDescriptor);
        }, 'type', 'sssIntensity');
        apply(() => {
          slide(SkinInfo.prototype, 'sssIntensity', sssIntensityDescriptor);
        }, 'slide', 'sssIntensity');
        apply(() => {
          range([0.0, 10.0, 0.1])(SkinInfo.prototype, 'sssIntensity', sssIntensityDescriptor);
        }, 'range', 'sssIntensity');
        apply(() => {
          editable(SkinInfo.prototype, 'sssIntensity', sssIntensityDescriptor);
        }, 'editable', 'sssIntensity');
        apply(() => {
          serializable(SkinInfo.prototype, '_enabled', () => {
            return true;
          });
        }, 'serializable', '_enabled');
        apply(() => {
          serializable(SkinInfo.prototype, '_blurRadius', () => {
            return 0.01;
          });
        }, 'serializable', '_blurRadius');
        apply(() => {
          serializable(SkinInfo.prototype, '_sssIntensity', () => {
            return 3.0;
          });
        }, 'serializable', '_sssIntensity');
        apply(() => {
          ccclass('cc.SkinInfo')(SkinInfo);
        }, 'ccclass', null);
      }
      function patch_cc_SkyboxInfo(ctx, apply = defaultExec) {
        const {
          SkyboxInfo,
          EnvironmentLightingType,
          TextureCube,
          CCFloat,
          Material
        } = {
          ...ctx
        };
        const enabledDescriptor = Object.getOwnPropertyDescriptor(SkyboxInfo.prototype, 'enabled');
        const envLightingTypeDescriptor = Object.getOwnPropertyDescriptor(SkyboxInfo.prototype, 'envLightingType');
        const useHDRDescriptor = Object.getOwnPropertyDescriptor(SkyboxInfo.prototype, 'useHDR');
        const envmapDescriptor = Object.getOwnPropertyDescriptor(SkyboxInfo.prototype, 'envmap');
        const rotationAngleDescriptor = Object.getOwnPropertyDescriptor(SkyboxInfo.prototype, 'rotationAngle');
        const diffuseMapDescriptor = Object.getOwnPropertyDescriptor(SkyboxInfo.prototype, 'diffuseMap');
        const reflectionMapDescriptor = Object.getOwnPropertyDescriptor(SkyboxInfo.prototype, 'reflectionMap');
        const skyboxMaterialDescriptor = Object.getOwnPropertyDescriptor(SkyboxInfo.prototype, 'skyboxMaterial');
        apply(() => {
          tooltip('i18n:skybox.enabled')(SkyboxInfo.prototype, 'enabled', enabledDescriptor);
        }, 'tooltip', 'enabled');
        apply(() => {
          editable(SkyboxInfo.prototype, 'enabled', enabledDescriptor);
        }, 'editable', 'enabled');
        apply(() => {
          tooltip('i18n:skybox.EnvironmentLightingType')(SkyboxInfo.prototype, 'envLightingType', envLightingTypeDescriptor);
        }, 'tooltip', 'envLightingType');
        apply(() => {
          type(EnvironmentLightingType)(SkyboxInfo.prototype, 'envLightingType', envLightingTypeDescriptor);
        }, 'type', 'envLightingType');
        apply(() => {
          editable(SkyboxInfo.prototype, 'envLightingType', envLightingTypeDescriptor);
        }, 'editable', 'envLightingType');
        apply(() => {
          tooltip('i18n:skybox.useHDR')(SkyboxInfo.prototype, 'useHDR', useHDRDescriptor);
        }, 'tooltip', 'useHDR');
        apply(() => {
          editable(SkyboxInfo.prototype, 'useHDR', useHDRDescriptor);
        }, 'editable', 'useHDR');
        apply(() => {
          tooltip('i18n:skybox.envmap')(SkyboxInfo.prototype, 'envmap', envmapDescriptor);
        }, 'tooltip', 'envmap');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, 'envmap', envmapDescriptor);
        }, 'type', 'envmap');
        apply(() => {
          editable(SkyboxInfo.prototype, 'envmap', envmapDescriptor);
        }, 'editable', 'envmap');
        apply(() => {
          tooltip('i18n:skybox.rotationAngle')(SkyboxInfo.prototype, 'rotationAngle', rotationAngleDescriptor);
        }, 'tooltip', 'rotationAngle');
        apply(() => {
          slide(SkyboxInfo.prototype, 'rotationAngle', rotationAngleDescriptor);
        }, 'slide', 'rotationAngle');
        apply(() => {
          range([0, 360, 1])(SkyboxInfo.prototype, 'rotationAngle', rotationAngleDescriptor);
        }, 'range', 'rotationAngle');
        apply(() => {
          type(CCFloat)(SkyboxInfo.prototype, 'rotationAngle', rotationAngleDescriptor);
        }, 'type', 'rotationAngle');
        apply(() => {
          displayOrder(100)(SkyboxInfo.prototype, 'diffuseMap', diffuseMapDescriptor);
        }, 'displayOrder', 'diffuseMap');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, 'diffuseMap', diffuseMapDescriptor);
        }, 'type', 'diffuseMap');
        apply(() => {
          readOnly(SkyboxInfo.prototype, 'diffuseMap', diffuseMapDescriptor);
        }, 'readOnly', 'diffuseMap');
        apply(() => {
          editable(SkyboxInfo.prototype, 'diffuseMap', diffuseMapDescriptor);
        }, 'editable', 'diffuseMap');
        apply(() => {
          visible(function () {
            if (this.useIBL && this.applyDiffuseMap) {
              return true;
            }
            return false;
          })(SkyboxInfo.prototype, 'diffuseMap', diffuseMapDescriptor);
        }, 'visible', 'diffuseMap');
        apply(() => {
          displayOrder(100)(SkyboxInfo.prototype, 'reflectionMap', reflectionMapDescriptor);
        }, 'displayOrder', 'reflectionMap');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, 'reflectionMap', reflectionMapDescriptor);
        }, 'type', 'reflectionMap');
        apply(() => {
          readOnly(SkyboxInfo.prototype, 'reflectionMap', reflectionMapDescriptor);
        }, 'readOnly', 'reflectionMap');
        apply(() => {
          editable(SkyboxInfo.prototype, 'reflectionMap', reflectionMapDescriptor);
        }, 'editable', 'reflectionMap');
        apply(() => {
          visible(function () {
            var _this$_resource;
            if ((_this$_resource = this._resource) !== null && _this$_resource !== void 0 && _this$_resource.reflectionMap) {
              return true;
            }
            return false;
          })(SkyboxInfo.prototype, 'reflectionMap', reflectionMapDescriptor);
        }, 'visible', 'reflectionMap');
        apply(() => {
          tooltip('i18n:skybox.material')(SkyboxInfo.prototype, 'skyboxMaterial', skyboxMaterialDescriptor);
        }, 'tooltip', 'skyboxMaterial');
        apply(() => {
          type(Material)(SkyboxInfo.prototype, 'skyboxMaterial', skyboxMaterialDescriptor);
        }, 'type', 'skyboxMaterial');
        apply(() => {
          editable(SkyboxInfo.prototype, 'skyboxMaterial', skyboxMaterialDescriptor);
        }, 'editable', 'skyboxMaterial');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_envLightingType', () => {
            return EnvironmentLightingType.HEMISPHERE_DIFFUSE;
          });
        }, 'serializable', '_envLightingType');
        apply(() => {
          formerlySerializedAs('_envmap')(SkyboxInfo.prototype, '_envmapHDR', () => {
            return null;
          });
        }, 'formerlySerializedAs', '_envmapHDR');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, '_envmapHDR', () => {
            return null;
          });
        }, 'type', '_envmapHDR');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_envmapHDR', () => {
            return null;
          });
        }, 'serializable', '_envmapHDR');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, '_envmapLDR', () => {
            return null;
          });
        }, 'type', '_envmapLDR');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_envmapLDR', () => {
            return null;
          });
        }, 'serializable', '_envmapLDR');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, '_diffuseMapHDR', () => {
            return null;
          });
        }, 'type', '_diffuseMapHDR');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_diffuseMapHDR', () => {
            return null;
          });
        }, 'serializable', '_diffuseMapHDR');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, '_diffuseMapLDR', () => {
            return null;
          });
        }, 'type', '_diffuseMapLDR');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_diffuseMapLDR', () => {
            return null;
          });
        }, 'serializable', '_diffuseMapLDR');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_enabled', () => {
            return false;
          });
        }, 'serializable', '_enabled');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_useHDR', () => {
            return true;
          });
        }, 'serializable', '_useHDR');
        apply(() => {
          type(Material)(SkyboxInfo.prototype, '_editableMaterial', () => {
            return null;
          });
        }, 'type', '_editableMaterial');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_editableMaterial', () => {
            return null;
          });
        }, 'serializable', '_editableMaterial');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, '_reflectionHDR', () => {
            return null;
          });
        }, 'type', '_reflectionHDR');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_reflectionHDR', () => {
            return null;
          });
        }, 'serializable', '_reflectionHDR');
        apply(() => {
          type(TextureCube)(SkyboxInfo.prototype, '_reflectionLDR', () => {
            return null;
          });
        }, 'type', '_reflectionLDR');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_reflectionLDR', () => {
            return null;
          });
        }, 'serializable', '_reflectionLDR');
        apply(() => {
          serializable(SkyboxInfo.prototype, '_rotationAngle', () => {
            return 0;
          });
        }, 'serializable', '_rotationAngle');
        apply(() => {
          ccclass('cc.SkyboxInfo')(SkyboxInfo);
        }, 'ccclass', null);
      }
      function patch_cc_Tetrahedron(ctx, apply = defaultExec) {
        const {
          Tetrahedron,
          Mat3,
          Vec3,
          CircumSphere
        } = {
          ...ctx
        };
        apply(() => {
          serializable(Tetrahedron.prototype, 'invalid', () => {
            return false;
          });
        }, 'serializable', 'invalid');
        apply(() => {
          serializable(Tetrahedron.prototype, 'vertex0', () => {
            return -1;
          });
        }, 'serializable', 'vertex0');
        apply(() => {
          serializable(Tetrahedron.prototype, 'vertex1', () => {
            return -1;
          });
        }, 'serializable', 'vertex1');
        apply(() => {
          serializable(Tetrahedron.prototype, 'vertex2', () => {
            return -1;
          });
        }, 'serializable', 'vertex2');
        apply(() => {
          serializable(Tetrahedron.prototype, 'vertex3', () => {
            return -1;
          });
        }, 'serializable', 'vertex3');
        apply(() => {
          serializable(Tetrahedron.prototype, 'neighbours', () => {
            return [-1, -1, -1, -1];
          });
        }, 'serializable', 'neighbours');
        apply(() => {
          serializable(Tetrahedron.prototype, 'matrix', () => {
            return new Mat3();
          });
        }, 'serializable', 'matrix');
        apply(() => {
          serializable(Tetrahedron.prototype, 'offset', () => {
            return new Vec3(0.0, 0.0, 0.0);
          });
        }, 'serializable', 'offset');
        apply(() => {
          serializable(Tetrahedron.prototype, 'sphere', () => {
            return new CircumSphere();
          });
        }, 'serializable', 'sphere');
        apply(() => {
          ccclass('cc.Tetrahedron')(Tetrahedron);
        }, 'ccclass', null);
      }
      function patch_cc_Texture2D(ctx, apply = defaultExec) {
        const {
          Texture2D,
          ImageAsset
        } = {
          ...ctx
        };
        apply(() => {
          type([ImageAsset])(Texture2D.prototype, '_mipmaps', () => {
            return [];
          });
        }, 'type', '_mipmaps');
        apply(() => {
          ccclass('cc.Texture2D')(Texture2D);
        }, 'ccclass', null);
      }
      function patch_cc_TextureBase(ctx, apply = defaultExec) {
        const {
          TextureBase,
          PixelFormat,
          Filter,
          WrapMode
        } = {
          ...ctx
        };
        apply(() => {
          serializable(TextureBase.prototype, '_format', () => {
            return PixelFormat.RGBA8888;
          });
        }, 'serializable', '_format');
        apply(() => {
          serializable(TextureBase.prototype, '_minFilter', () => {
            return Filter.LINEAR;
          });
        }, 'serializable', '_minFilter');
        apply(() => {
          serializable(TextureBase.prototype, '_magFilter', () => {
            return Filter.LINEAR;
          });
        }, 'serializable', '_magFilter');
        apply(() => {
          serializable(TextureBase.prototype, '_mipFilter', () => {
            return Filter.NONE;
          });
        }, 'serializable', '_mipFilter');
        apply(() => {
          serializable(TextureBase.prototype, '_wrapS', () => {
            return WrapMode.REPEAT;
          });
        }, 'serializable', '_wrapS');
        apply(() => {
          serializable(TextureBase.prototype, '_wrapT', () => {
            return WrapMode.REPEAT;
          });
        }, 'serializable', '_wrapT');
        apply(() => {
          serializable(TextureBase.prototype, '_wrapR', () => {
            return WrapMode.REPEAT;
          });
        }, 'serializable', '_wrapR');
        apply(() => {
          serializable(TextureBase.prototype, '_anisotropy', () => {
            return 0;
          });
        }, 'serializable', '_anisotropy');
        apply(() => {
          ccclass('cc.TextureBase')(TextureBase);
        }, 'ccclass', null);
      }
      function patch_cc_TextureCube(ctx, apply = defaultExec) {
        const {
          TextureCube,
          MipmapMode
        } = {
          ...ctx
        };
        apply(() => {
          serializable(TextureCube.prototype, 'isRGBE', () => {
            return false;
          });
        }, 'serializable', 'isRGBE');
        apply(() => {
          serializable(TextureCube.prototype, '_mipmapAtlas', () => {
            return null;
          });
        }, 'serializable', '_mipmapAtlas');
        apply(() => {
          serializable(TextureCube.prototype, '_mipmapMode', () => {
            return MipmapMode.NONE;
          });
        }, 'serializable', '_mipmapMode');
        apply(() => {
          serializable(TextureCube.prototype, '_mipmaps', () => {
            return [];
          });
        }, 'serializable', '_mipmaps');
        apply(() => {
          ccclass('cc.TextureCube')(TextureCube);
        }, 'ccclass', null);
      }
      function patch_cc_Vertex(ctx, apply = defaultExec) {
        const {
          Vertex,
          Vec3
        } = {
          ...ctx
        };
        apply(() => {
          serializable(Vertex.prototype, 'position', () => {
            return new Vec3(0, 0, 0);
          });
        }, 'serializable', 'position');
        apply(() => {
          serializable(Vertex.prototype, 'normal', () => {
            return new Vec3(0, 0, 0);
          });
        }, 'serializable', 'normal');
        apply(() => {
          serializable(Vertex.prototype, 'coefficients', () => {
            return [];
          });
        }, 'serializable', 'coefficients');
        apply(() => {
          ccclass('cc.Vertex')(Vertex);
        }, 'ccclass', null);
      }
      function patch_DeferredPipeline(ctx, apply = defaultExec) {
        const {
          DeferredPipeline,
          RenderTextureConfig
        } = {
          ...ctx
        };
        apply(() => {
          displayOrder(2)(DeferredPipeline.prototype, 'renderTextures', () => {
            return [];
          });
        }, 'displayOrder', 'renderTextures');
        apply(() => {
          serializable(DeferredPipeline.prototype, 'renderTextures', () => {
            return [];
          });
        }, 'serializable', 'renderTextures');
        apply(() => {
          type([RenderTextureConfig])(DeferredPipeline.prototype, 'renderTextures', () => {
            return [];
          });
        }, 'type', 'renderTextures');
        apply(() => {
          ccclass('DeferredPipeline')(DeferredPipeline);
        }, 'ccclass', null);
      }
      function patch_ForwardFlow(ctx, apply = defaultExec) {
        const {
          ForwardFlow
        } = {
          ...ctx
        };
        apply(() => {
          ccclass('ForwardFlow')(ForwardFlow);
        }, 'ccclass', null);
      }
      function patch_ForwardPipeline(ctx, apply = defaultExec) {
        const {
          ForwardPipeline,
          RenderTextureConfig
        } = {
          ...ctx
        };
        apply(() => {
          displayOrder(2)(ForwardPipeline.prototype, 'renderTextures', () => {
            return [];
          });
        }, 'displayOrder', 'renderTextures');
        apply(() => {
          serializable(ForwardPipeline.prototype, 'renderTextures', () => {
            return [];
          });
        }, 'serializable', 'renderTextures');
        apply(() => {
          type([RenderTextureConfig])(ForwardPipeline.prototype, 'renderTextures', () => {
            return [];
          });
        }, 'type', 'renderTextures');
        apply(() => {
          ccclass('ForwardPipeline')(ForwardPipeline);
        }, 'ccclass', null);
      }
      function patch_ForwardStage(ctx, apply = defaultExec) {
        const {
          ForwardStage,
          RenderQueueDesc
        } = {
          ...ctx
        };
        apply(() => {
          displayOrder(2)(ForwardStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'displayOrder', 'renderQueues');
        apply(() => {
          serializable(ForwardStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'serializable', 'renderQueues');
        apply(() => {
          type([RenderQueueDesc])(ForwardStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'type', 'renderQueues');
        apply(() => {
          ccclass('ForwardStage')(ForwardStage);
        }, 'ccclass', null);
      }
      function patch_GbufferStage(ctx, apply = defaultExec) {
        const {
          GbufferStage,
          RenderQueueDesc
        } = {
          ...ctx
        };
        apply(() => {
          displayOrder(2)(GbufferStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'displayOrder', 'renderQueues');
        apply(() => {
          serializable(GbufferStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'serializable', 'renderQueues');
        apply(() => {
          type([RenderQueueDesc])(GbufferStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'type', 'renderQueues');
        apply(() => {
          ccclass('GbufferStage')(GbufferStage);
        }, 'ccclass', null);
      }
      function patch_LightingStage(ctx, apply = defaultExec) {
        const {
          LightingStage,
          Material,
          RenderQueueDesc
        } = {
          ...ctx
        };
        apply(() => {
          displayOrder(3)(LightingStage.prototype, '_deferredMaterial', () => {
            return null;
          });
        }, 'displayOrder', '_deferredMaterial');
        apply(() => {
          serializable(LightingStage.prototype, '_deferredMaterial', () => {
            return null;
          });
        }, 'serializable', '_deferredMaterial');
        apply(() => {
          type(Material)(LightingStage.prototype, '_deferredMaterial', () => {
            return null;
          });
        }, 'type', '_deferredMaterial');
        apply(() => {
          displayOrder(2)(LightingStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'displayOrder', 'renderQueues');
        apply(() => {
          serializable(LightingStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'serializable', 'renderQueues');
        apply(() => {
          type([RenderQueueDesc])(LightingStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'type', 'renderQueues');
        apply(() => {
          ccclass('LightingStage')(LightingStage);
        }, 'ccclass', null);
      }
      function patch_MainFlow(ctx, apply = defaultExec) {
        const {
          MainFlow
        } = {
          ...ctx
        };
        apply(() => {
          ccclass('MainFlow')(MainFlow);
        }, 'ccclass', null);
      }
      function patch_PostProcessStage(ctx, apply = defaultExec) {
        const {
          PostProcessStage,
          Material,
          RenderQueueDesc
        } = {
          ...ctx
        };
        apply(() => {
          displayOrder(3)(PostProcessStage.prototype, '_postProcessMaterial', () => {
            return null;
          });
        }, 'displayOrder', '_postProcessMaterial');
        apply(() => {
          serializable(PostProcessStage.prototype, '_postProcessMaterial', () => {
            return null;
          });
        }, 'serializable', '_postProcessMaterial');
        apply(() => {
          type(Material)(PostProcessStage.prototype, '_postProcessMaterial', () => {
            return null;
          });
        }, 'type', '_postProcessMaterial');
        apply(() => {
          displayOrder(2)(PostProcessStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'displayOrder', 'renderQueues');
        apply(() => {
          serializable(PostProcessStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'serializable', 'renderQueues');
        apply(() => {
          type([RenderQueueDesc])(PostProcessStage.prototype, 'renderQueues', () => {
            return [];
          });
        }, 'type', 'renderQueues');
        apply(() => {
          ccclass('PostProcessStage')(PostProcessStage);
        }, 'ccclass', null);
      }
      function patch_ReflectionProbeFlow(ctx, apply = defaultExec) {
        const {
          ReflectionProbeFlow
        } = {
          ...ctx
        };
        apply(() => {
          ccclass('ReflectionProbeFlow')(ReflectionProbeFlow);
        }, 'ccclass', null);
      }
      function patch_ReflectionProbeStage(ctx, apply = defaultExec) {
        const {
          ReflectionProbeStage
        } = {
          ...ctx
        };
        apply(() => {
          ccclass('ReflectionProbeStage')(ReflectionProbeStage);
        }, 'ccclass', null);
      }
      function patch_RenderFlow(ctx, apply = defaultExec) {
        const {
          RenderFlow,
          RenderStage
        } = {
          ...ctx
        };
        apply(() => {
          serializable(RenderFlow.prototype, '_name', () => {
            return '';
          });
        }, 'serializable', '_name');
        apply(() => {
          displayOrder(0)(RenderFlow.prototype, '_name', () => {
            return '';
          });
        }, 'displayOrder', '_name');
        apply(() => {
          serializable(RenderFlow.prototype, '_priority', () => {
            return 0;
          });
        }, 'serializable', '_priority');
        apply(() => {
          displayOrder(1)(RenderFlow.prototype, '_priority', () => {
            return 0;
          });
        }, 'displayOrder', '_priority');
        apply(() => {
          serializable(RenderFlow.prototype, '_tag', () => {
            return 0;
          });
        }, 'serializable', '_tag');
        apply(() => {
          displayOrder(2)(RenderFlow.prototype, '_tag', () => {
            return 0;
          });
        }, 'displayOrder', '_tag');
        apply(() => {
          serializable(RenderFlow.prototype, '_stages', () => {
            return [];
          });
        }, 'serializable', '_stages');
        apply(() => {
          type([RenderStage])(RenderFlow.prototype, '_stages', () => {
            return [];
          });
        }, 'type', '_stages');
        apply(() => {
          displayOrder(3)(RenderFlow.prototype, '_stages', () => {
            return [];
          });
        }, 'displayOrder', '_stages');
        apply(() => {
          ccclass('RenderFlow')(RenderFlow);
        }, 'ccclass', null);
      }
      function patch_RenderQueueDesc(ctx, apply = defaultExec) {
        const {
          RenderQueueDesc,
          RenderQueueSortMode,
          CCString
        } = {
          ...ctx
        };
        apply(() => {
          editable(RenderQueueDesc.prototype, 'isTransparent', () => {
            return false;
          });
        }, 'editable', 'isTransparent');
        apply(() => {
          serializable(RenderQueueDesc.prototype, 'isTransparent', () => {
            return false;
          });
        }, 'serializable', 'isTransparent');
        apply(() => {
          type(RenderQueueSortMode)(RenderQueueDesc.prototype, 'sortMode', () => {
            return RenderQueueSortMode.FRONT_TO_BACK;
          });
        }, 'type', 'sortMode');
        apply(() => {
          type([CCString])(RenderQueueDesc.prototype, 'stages', () => {
            return [];
          });
        }, 'type', 'stages');
        apply(() => {
          ccclass('RenderQueueDesc')(RenderQueueDesc);
        }, 'ccclass', null);
      }
      function patch_RenderStage(ctx, apply = defaultExec) {
        const {
          RenderStage
        } = {
          ...ctx
        };
        apply(() => {
          serializable(RenderStage.prototype, '_name', () => {
            return '';
          });
        }, 'serializable', '_name');
        apply(() => {
          displayOrder(0)(RenderStage.prototype, '_name', () => {
            return '';
          });
        }, 'displayOrder', '_name');
        apply(() => {
          serializable(RenderStage.prototype, '_priority', () => {
            return 0;
          });
        }, 'serializable', '_priority');
        apply(() => {
          displayOrder(1)(RenderStage.prototype, '_priority', () => {
            return 0;
          });
        }, 'displayOrder', '_priority');
        apply(() => {
          serializable(RenderStage.prototype, '_tag', () => {
            return 0;
          });
        }, 'serializable', '_tag');
        apply(() => {
          displayOrder(2)(RenderStage.prototype, '_tag', () => {
            return 0;
          });
        }, 'displayOrder', '_tag');
        apply(() => {
          ccclass('RenderStage')(RenderStage);
        }, 'ccclass', null);
      }
      function patch_ShadowFlow(ctx, apply = defaultExec) {
        const {
          ShadowFlow
        } = {
          ...ctx
        };
        apply(() => {
          ccclass('ShadowFlow')(ShadowFlow);
        }, 'ccclass', null);
      }
      function patch_ShadowStage(ctx, apply = defaultExec) {
        const {
          ShadowStage
        } = {
          ...ctx
        };
        apply(() => {
          ccclass('ShadowStage')(ShadowStage);
        }, 'ccclass', null);
      }

    })
  };
}));
