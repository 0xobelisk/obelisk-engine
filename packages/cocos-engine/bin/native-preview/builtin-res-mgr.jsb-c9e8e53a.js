System.register(['./index-ce98320e.js', './find-7a03d1cc.js', './device-90bc7390.js', './node-event-18d96a1b.js', './touch-af62e326.js', './decorators-b63b63a2.js'], (function (exports, module) {
    'use strict';
    var Mat4, Vec3, legacyCC, Enum, BitMask, settings, Settings, assertIsTrue, getError, value, log2, Vec2, Vec4, Color, Mat3, Quat, ccclass, applyDecoratedInitializer, serializable, macro, sys, warnID, error, getClassById, editorOnly, CCClass, deserializeTag, getClassName, isChildClassOf, BUILTIN_CLASSID_RE, getClassId, ENUM_TAG, BITMASK_TAG, Pool, getSuper, Platform, errorID, Size, Rect, assertIsNonNullable, fastRemoveAt$1, CCObject, get, mixin, getClassByName, serializeTag, editorExtrasTag, syncNodeValues, CallbacksInvoker, CCInteger, CCFloat, deprecateModuleExportedName, EventTarget, screenAdapter, Orientation, systemInfo, OS, Feature, log, NATIVE, replaceProperty, markAsWarning, removeProperty, type, CCString, ValueType, EDITOR, updateChildrenForDeserialize, MutableForwardIterator, isValid, assert, removeAt, createMap, isCCObject, isCCClassOrFastDefined, isEmptyObject, obsolete, callInNextTick, ccwindow, XIAOMI, EDITOR_NOT_IN_PREVIEW, addon, PREVIEW, deviceManager, Texture, ClearFlagBit, Format, Address, Filter$1, DescriptorSetLayoutBinding, DescriptorType, ShaderStageFlagBit, UniformBlock, Uniform, Type, UniformSamplerTexture, UniformStorageImage, BindingMappingInfo, FormatFeatureBit, API, Asset, Component, decodeUuid, Cache, parsed, files, NodeEventType, EventHandler, normalize, assets, isScene, bundles, RequestType, mainFileName, basename, BuiltinBundleName, transform, Task, fetchPipeline, Pipeline, pipeline, transformPipeline, presets, extname, assetsOverrideMap, helper, references, Event, EventTouch, InputEventType, EventAcceleration, KeyCode, EventKeyboard, EventMouse, Touch, SystemEventType, patch_cc_EffectAsset, patch_cc_TextureBase, patch_cc_Material, patch_cc_BufferAsset, patch_cc_ImageAsset, patch_cc_SimpleTexture, patch_cc_Texture2D, patch_cc_TextureCube, patch_cc_Node, patch_cc_SceneGlobals, patch_cc_OctreeInfo, patch_cc_ShadowsInfo, patch_cc_FogInfo, patch_cc_SkyboxInfo, patch_cc_AmbientInfo, patch_cc_LightProbeInfo, patch_cc_SkinInfo, patch_cc_PostSettingsInfo, patch_cc_Scene;
    return {
        setters: [function (module) {
            Mat4 = module.s;
            Vec3 = module.n;
            legacyCC = module.l;
            Enum = module.aa;
            BitMask = module.a9;
            settings = module.a_;
            Settings = module.aZ;
            assertIsTrue = module.bu;
            getError = module.aI;
            value = module.bH;
            log2 = module.bI;
            Vec2 = module.V;
            Vec4 = module.p;
            Color = module.C;
            Mat3 = module.M;
            Quat = module.Q;
            ccclass = module.by;
            applyDecoratedInitializer = module.bx;
            serializable = module.bf;
            macro = module.aM;
            sys = module.aL;
            warnID = module.d;
            error = module.e;
            getClassById = module.bJ;
            editorOnly = module.bK;
            CCClass = module.aq;
            deserializeTag = module.az;
            getClassName = module.bL;
            isChildClassOf = module.bM;
            BUILTIN_CLASSID_RE = module.bN;
            getClassId = module.bO;
            ENUM_TAG = module.bj;
            BITMASK_TAG = module.bk;
            Pool = module.bP;
            getSuper = module.bQ;
            Platform = module.bR;
            errorID = module.f;
            Size = module.S;
            Rect = module.R;
            assertIsNonNullable = module.bt;
            fastRemoveAt$1 = module.bz;
            CCObject = module.as;
            get = module.bS;
            mixin = module.bT;
            getClassByName = module.bU;
            serializeTag = module.aA;
            editorExtrasTag = module.ay;
            syncNodeValues = module.bV;
            CallbacksInvoker = module.bo;
            CCInteger = module.at;
            CCFloat = module.au;
            deprecateModuleExportedName = module.aj;
            EventTarget = module.aD;
            screenAdapter = module.bW;
            Orientation = module.bX;
            systemInfo = module.bY;
            OS = module.bZ;
            Feature = module.b_;
            log = module.a;
            NATIVE = module.bC;
            replaceProperty = module.ag;
            markAsWarning = module.ai;
            removeProperty = module.ah;
            type = module.bw;
            CCString = module.aw;
            ValueType = module.ac;
            EDITOR = module.bB;
            updateChildrenForDeserialize = module.b$;
            MutableForwardIterator = module.c0;
            isValid = module.bm;
            assert = module.b;
            removeAt = module.c1;
            createMap = module.c2;
            isCCObject = module.bl;
            isCCClassOrFastDefined = module.ar;
            isEmptyObject = module.c3;
            obsolete = module.c4;
            callInNextTick = module.c5;
            ccwindow = module.c6;
            XIAOMI = module.c7;
            EDITOR_NOT_IN_PREVIEW = module.c8;
            addon = module.c9;
            PREVIEW = module.ca;
        }, function (module) {
            deviceManager = module.d;
            Texture = module.T;
        }, function (module) {
            ClearFlagBit = module.H;
            Format = module.b;
            Address = module.l;
            Filter$1 = module.k;
            DescriptorSetLayoutBinding = module.aA;
            DescriptorType = module.z;
            ShaderStageFlagBit = module.q;
            UniformBlock = module.ag;
            Uniform = module.af;
            Type = module.T;
            UniformSamplerTexture = module.ah;
            UniformStorageImage = module.ak;
            BindingMappingInfo = module.a4;
            FormatFeatureBit = module.i;
            API = module.A;
        }, function (module) {
            Asset = module.A;
            Component = module.C;
            decodeUuid = module.q;
            Cache = module.l;
            parsed = module.r;
            files = module.u;
            NodeEventType = module.N;
            EventHandler = module.E;
            normalize = module.v;
            assets = module.k;
            isScene = module.w;
            bundles = module.o;
            RequestType = module.R;
            mainFileName = module.m;
            basename = module.b;
            BuiltinBundleName = module.B;
            transform = module.t;
            Task = module.x;
            fetchPipeline = module.i;
            Pipeline = module.P;
            pipeline = module.h;
            transformPipeline = module.y;
            presets = module.z;
            extname = module.e;
            assetsOverrideMap = module.D;
            helper = module.F;
            references = module.G;
        }, function (module) {
            Event = module.E;
            EventTouch = module.d;
            InputEventType = module.I;
            EventAcceleration = module.a;
            KeyCode = module.K;
            EventKeyboard = module.b;
            EventMouse = module.c;
            Touch = module.T;
            SystemEventType = module.S;
        }, function (module) {
            patch_cc_EffectAsset = module.r;
            patch_cc_TextureBase = module.s;
            patch_cc_Material = module.t;
            patch_cc_BufferAsset = module.u;
            patch_cc_ImageAsset = module.v;
            patch_cc_SimpleTexture = module.w;
            patch_cc_Texture2D = module.x;
            patch_cc_TextureCube = module.y;
            patch_cc_Node = module.z;
            patch_cc_SceneGlobals = module.A;
            patch_cc_OctreeInfo = module.B;
            patch_cc_ShadowsInfo = module.C;
            patch_cc_FogInfo = module.D;
            patch_cc_SkyboxInfo = module.E;
            patch_cc_AmbientInfo = module.F;
            patch_cc_LightProbeInfo = module.G;
            patch_cc_SkinInfo = module.H;
            patch_cc_PostSettingsInfo = module.I;
            patch_cc_Scene = module.J;
        }],
        execute: (function () {

            exports({
                N: flattenCodeArray,
                aF: parseLoadResArgs,
                aJ: setDefaultProgressCallback,
                aL: supportsRGBA16HalfFloatTexture,
                aM: supportsR32FloatTexture,
                aU: isEnableEffect,
                ag: deserialize,
                l: ColorTemperatureToRGB
            });

            function deepFlatten(strList, array) {
              for (const item of array) {
                if (Array.isArray(item)) {
                  deepFlatten(strList, item);
                } else {
                  strList.push(item);
                }
              }
            }
            function flattenCodeArray(array) {
              const separator = '\n' ;
              const strList = [];
              deepFlatten(strList, array);
              return strList.join(separator);
            }

            let ModelType; exports('M', ModelType);
            (function (ModelType) {
              ModelType[ModelType["DEFAULT"] = 0] = "DEFAULT";
              ModelType[ModelType["SKINNING"] = 1] = "SKINNING";
              ModelType[ModelType["BAKED_SKINNING"] = 2] = "BAKED_SKINNING";
              ModelType[ModelType["BATCH_2D"] = 3] = "BATCH_2D";
              ModelType[ModelType["PARTICLE_BATCH"] = 4] = "PARTICLE_BATCH";
              ModelType[ModelType["LINE"] = 5] = "LINE";
            })(ModelType || (exports('M', ModelType = {})));
            const Model = exports('a', jsb.Model);
            const modelProto = Model.prototype;
            modelProto._ctor = function () {
              this._device = deviceManager.gfxDevice;
            };
            const oldCreateBoundingShape = modelProto.createBoundingShape;
            modelProto.createBoundingShape = function (minPos, maxPos) {
              if (!minPos || !maxPos) {
                return;
              }
              oldCreateBoundingShape.call(this, minPos, maxPos);
            };

            const SubModel = exports('S', jsb.SubModel);

            const _tempFloatArray = new Float32Array(jsb.createExternalArrayBuffer(20 * 4));
            const fillMat4WithTempFloatArray = function fillMat4WithTempFloatArray(out) {
              Mat4.set(out, _tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2], _tempFloatArray[3], _tempFloatArray[4], _tempFloatArray[5], _tempFloatArray[6], _tempFloatArray[7], _tempFloatArray[8], _tempFloatArray[9], _tempFloatArray[10], _tempFloatArray[11], _tempFloatArray[12], _tempFloatArray[13], _tempFloatArray[14], _tempFloatArray[15]);
            };

            let CameraFOVAxis; exports('C', CameraFOVAxis);
            (function (CameraFOVAxis) {
              CameraFOVAxis[CameraFOVAxis["VERTICAL"] = 0] = "VERTICAL";
              CameraFOVAxis[CameraFOVAxis["HORIZONTAL"] = 1] = "HORIZONTAL";
            })(CameraFOVAxis || (exports('C', CameraFOVAxis = {})));
            let CameraProjection; exports('b', CameraProjection);
            (function (CameraProjection) {
              CameraProjection[CameraProjection["ORTHO"] = 0] = "ORTHO";
              CameraProjection[CameraProjection["PERSPECTIVE"] = 1] = "PERSPECTIVE";
            })(CameraProjection || (exports('b', CameraProjection = {})));
            let CameraAperture; exports('c', CameraAperture);
            (function (CameraAperture) {
              CameraAperture[CameraAperture["F1_8"] = 0] = "F1_8";
              CameraAperture[CameraAperture["F2_0"] = 1] = "F2_0";
              CameraAperture[CameraAperture["F2_2"] = 2] = "F2_2";
              CameraAperture[CameraAperture["F2_5"] = 3] = "F2_5";
              CameraAperture[CameraAperture["F2_8"] = 4] = "F2_8";
              CameraAperture[CameraAperture["F3_2"] = 5] = "F3_2";
              CameraAperture[CameraAperture["F3_5"] = 6] = "F3_5";
              CameraAperture[CameraAperture["F4_0"] = 7] = "F4_0";
              CameraAperture[CameraAperture["F4_5"] = 8] = "F4_5";
              CameraAperture[CameraAperture["F5_0"] = 9] = "F5_0";
              CameraAperture[CameraAperture["F5_6"] = 10] = "F5_6";
              CameraAperture[CameraAperture["F6_3"] = 11] = "F6_3";
              CameraAperture[CameraAperture["F7_1"] = 12] = "F7_1";
              CameraAperture[CameraAperture["F8_0"] = 13] = "F8_0";
              CameraAperture[CameraAperture["F9_0"] = 14] = "F9_0";
              CameraAperture[CameraAperture["F10_0"] = 15] = "F10_0";
              CameraAperture[CameraAperture["F11_0"] = 16] = "F11_0";
              CameraAperture[CameraAperture["F13_0"] = 17] = "F13_0";
              CameraAperture[CameraAperture["F14_0"] = 18] = "F14_0";
              CameraAperture[CameraAperture["F16_0"] = 19] = "F16_0";
              CameraAperture[CameraAperture["F18_0"] = 20] = "F18_0";
              CameraAperture[CameraAperture["F20_0"] = 21] = "F20_0";
              CameraAperture[CameraAperture["F22_0"] = 22] = "F22_0";
            })(CameraAperture || (exports('c', CameraAperture = {})));
            let CameraISO; exports('d', CameraISO);
            (function (CameraISO) {
              CameraISO[CameraISO["ISO100"] = 0] = "ISO100";
              CameraISO[CameraISO["ISO200"] = 1] = "ISO200";
              CameraISO[CameraISO["ISO400"] = 2] = "ISO400";
              CameraISO[CameraISO["ISO800"] = 3] = "ISO800";
            })(CameraISO || (exports('d', CameraISO = {})));
            let CameraShutter; exports('e', CameraShutter);
            (function (CameraShutter) {
              CameraShutter[CameraShutter["D1"] = 0] = "D1";
              CameraShutter[CameraShutter["D2"] = 1] = "D2";
              CameraShutter[CameraShutter["D4"] = 2] = "D4";
              CameraShutter[CameraShutter["D8"] = 3] = "D8";
              CameraShutter[CameraShutter["D15"] = 4] = "D15";
              CameraShutter[CameraShutter["D30"] = 5] = "D30";
              CameraShutter[CameraShutter["D60"] = 6] = "D60";
              CameraShutter[CameraShutter["D125"] = 7] = "D125";
              CameraShutter[CameraShutter["D250"] = 8] = "D250";
              CameraShutter[CameraShutter["D500"] = 9] = "D500";
              CameraShutter[CameraShutter["D1000"] = 10] = "D1000";
              CameraShutter[CameraShutter["D2000"] = 11] = "D2000";
              CameraShutter[CameraShutter["D4000"] = 12] = "D4000";
            })(CameraShutter || (exports('e', CameraShutter = {})));
            let CameraType; exports('f', CameraType);
            (function (CameraType) {
              CameraType[CameraType["DEFAULT"] = -1] = "DEFAULT";
              CameraType[CameraType["LEFT_EYE"] = 0] = "LEFT_EYE";
              CameraType[CameraType["RIGHT_EYE"] = 1] = "RIGHT_EYE";
              CameraType[CameraType["MAIN"] = 2] = "MAIN";
            })(CameraType || (exports('f', CameraType = {})));
            let TrackingType; exports('T', TrackingType);
            (function (TrackingType) {
              TrackingType[TrackingType["NO_TRACKING"] = 0] = "NO_TRACKING";
              TrackingType[TrackingType["POSITION_AND_ROTATION"] = 1] = "POSITION_AND_ROTATION";
              TrackingType[TrackingType["POSITION"] = 2] = "POSITION";
              TrackingType[TrackingType["ROTATION"] = 3] = "ROTATION";
            })(TrackingType || (exports('T', TrackingType = {})));
            let CameraUsage; exports('g', CameraUsage);
            (function (CameraUsage) {
              CameraUsage[CameraUsage["EDITOR"] = 0] = "EDITOR";
              CameraUsage[CameraUsage["GAME_VIEW"] = 1] = "GAME_VIEW";
              CameraUsage[CameraUsage["SCENE_VIEW"] = 2] = "SCENE_VIEW";
              CameraUsage[CameraUsage["PREVIEW"] = 3] = "PREVIEW";
              CameraUsage[CameraUsage["GAME"] = 100] = "GAME";
            })(CameraUsage || (exports('g', CameraUsage = {})));
            const SKYBOX_FLAG = exports('h', ClearFlagBit.STENCIL << 1);
            const Camera = exports('i', jsb.Camera);
            const cameraProto = jsb.Camera.prototype;
            Object.defineProperty(Camera, "standardExposureValue", {
              configurable: true,
              enumerable: true,
              get() {
                return Camera.getStandardExposureValue();
              }
            });
            Object.defineProperty(Camera, "standardLightMeterScale", {
              configurable: true,
              enumerable: true,
              get() {
                return Camera.getStandardLightMeterScale();
              }
            });
            Object.defineProperty(cameraProto, 'matView', {
              configurable: true,
              enumerable: true,
              get() {
                this.getMatView();
                fillMat4WithTempFloatArray(this._matView);
                return this._matView;
              }
            });
            Object.defineProperty(cameraProto, 'matProj', {
              configurable: true,
              enumerable: true,
              get() {
                this.getMatProj();
                fillMat4WithTempFloatArray(this._matProj);
                return this._matProj;
              }
            });
            Object.defineProperty(cameraProto, 'matProjInv', {
              configurable: true,
              enumerable: true,
              get() {
                this.getMatProjInv();
                fillMat4WithTempFloatArray(this._matProjInv);
                return this._matProjInv;
              }
            });
            Object.defineProperty(cameraProto, 'matViewProj', {
              configurable: true,
              enumerable: true,
              get() {
                this.getMatViewProj();
                fillMat4WithTempFloatArray(this._matViewProj);
                return this._matViewProj;
              }
            });
            Object.defineProperty(cameraProto, 'matViewProjInv', {
              configurable: true,
              enumerable: true,
              get() {
                this.getMatViewProjInv();
                fillMat4WithTempFloatArray(this._matViewProjInv);
                return this._matViewProjInv;
              }
            });
            const oldInitialize = cameraProto.initialize;
            cameraProto.initialize = function initialize() {
              oldInitialize.apply(this, arguments);
              this._matView = new Mat4();
              this._matProj = new Mat4();
              this._matProjInv = new Mat4();
              this._matViewProj = new Mat4();
              this._matViewProjInv = new Mat4();
            };
            const oldScreenPointToRay = cameraProto.screenPointToRay;
            const oldScreenToWorld = cameraProto.screenToWorld;
            const oldWorldToScreen = cameraProto.worldToScreen;
            const oldWorldMatrixToScreen = cameraProto.worldMatrixToScreen;
            cameraProto.screenPointToRay = function screenPointToRay(out, x, y) {
              _tempFloatArray[0] = x;
              _tempFloatArray[1] = y;
              oldScreenPointToRay.call(this);
              out.o.x = _tempFloatArray[0];
              out.o.y = _tempFloatArray[1];
              out.o.z = _tempFloatArray[2];
              out.d.x = _tempFloatArray[3];
              out.d.y = _tempFloatArray[4];
              out.d.z = _tempFloatArray[5];
              return out;
            };
            cameraProto.screenToWorld = function screenToWorld(out, screenPos) {
              _tempFloatArray[0] = screenPos.x;
              _tempFloatArray[1] = screenPos.y;
              _tempFloatArray[2] = screenPos.z;
              oldScreenToWorld.call(this);
              Vec3.set(out, _tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2]);
              return out;
            };
            cameraProto.worldToScreen = function worldToScreen(out, worldPos) {
              _tempFloatArray[0] = worldPos.x;
              _tempFloatArray[1] = worldPos.y;
              _tempFloatArray[2] = worldPos.z;
              oldWorldToScreen.call(this);
              Vec3.set(out, _tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2]);
              return out;
            };
            cameraProto.worldMatrixToScreen = function worldMatrixToScreen(out, worldMatrix, width, height) {
              _tempFloatArray[0] = worldMatrix.m00;
              _tempFloatArray[1] = worldMatrix.m01;
              _tempFloatArray[2] = worldMatrix.m02;
              _tempFloatArray[3] = worldMatrix.m03;
              _tempFloatArray[4] = worldMatrix.m04;
              _tempFloatArray[5] = worldMatrix.m05;
              _tempFloatArray[6] = worldMatrix.m06;
              _tempFloatArray[7] = worldMatrix.m07;
              _tempFloatArray[8] = worldMatrix.m08;
              _tempFloatArray[9] = worldMatrix.m09;
              _tempFloatArray[10] = worldMatrix.m10;
              _tempFloatArray[11] = worldMatrix.m11;
              _tempFloatArray[12] = worldMatrix.m12;
              _tempFloatArray[13] = worldMatrix.m13;
              _tempFloatArray[14] = worldMatrix.m14;
              _tempFloatArray[15] = worldMatrix.m15;
              _tempFloatArray[16] = width;
              _tempFloatArray[17] = height;
              oldWorldMatrixToScreen.call(this);
              fillMat4WithTempFloatArray(out);
              return out;
            };

            let ProbeClearFlag; exports('P', ProbeClearFlag);
            (function (ProbeClearFlag) {
              ProbeClearFlag[ProbeClearFlag["SKYBOX"] = SKYBOX_FLAG | ClearFlagBit.DEPTH_STENCIL] = "SKYBOX";
              ProbeClearFlag[ProbeClearFlag["SOLID_COLOR"] = ClearFlagBit.ALL] = "SOLID_COLOR";
            })(ProbeClearFlag || (exports('P', ProbeClearFlag = {})));
            let ProbeType; exports('j', ProbeType);
            (function (ProbeType) {
              ProbeType[ProbeType["CUBE"] = 0] = "CUBE";
              ProbeType[ProbeType["PLANAR"] = 1] = "PLANAR";
            })(ProbeType || (exports('j', ProbeType = {})));
            const ReflectionProbe = exports('R', jsb.ReflectionProbe);
            const reflectionProbeProto = jsb.ReflectionProbe.prototype;
            reflectionProbeProto._ctor = function (id) {
              this._probeId = id;
            };

            const LODData = exports('L', jsb.LODData);
            const LODGroup = exports('k', jsb.LODGroup);
            const Ambient = exports('A', jsb.Ambient);
            legacyCC.Ambient = Ambient;
            Ambient.SUN_ILLUM = 65000.0;
            Ambient.SKY_ILLUM = 20000.0;
            function ColorTemperatureToRGB(rgb, kelvin) {
              if (kelvin < 1000.0) {
                kelvin = 1000.0;
              } else if (kelvin > 15000.0) {
                kelvin = 15000.0;
              }
              const kSqr = kelvin * kelvin;
              const u = (0.860117757 + 1.54118254e-4 * kelvin + 1.28641212e-7 * kSqr) / (1.0 + 8.42420235e-4 * kelvin + 7.08145163e-7 * kSqr);
              const v = (0.317398726 + 4.22806245e-5 * kelvin + 4.20481691e-8 * kSqr) / (1.0 - 2.89741816e-5 * kelvin + 1.61456053e-7 * kSqr);
              const d = 2.0 * u - 8.0 * v + 4.0;
              const x = 3.0 * u / d;
              const y = 2.0 * v / d;
              const z = 1.0 - x - y;
              const X = 1.0 / y * x;
              const Z = 1.0 / y * z;
              rgb.x = 3.2404542 * X + -1.5371385 + -0.4985314 * Z;
              rgb.y = -0.9692660 * X + 1.8760108 + 0.0415560 * Z;
              rgb.z = 0.0556434 * X + -0.2040259 + 1.0572252 * Z;
            }
            let LightType; exports('m', LightType);
            (function (LightType) {
              LightType[LightType["DIRECTIONAL"] = 0] = "DIRECTIONAL";
              LightType[LightType["SPHERE"] = 1] = "SPHERE";
              LightType[LightType["SPOT"] = 2] = "SPOT";
              LightType[LightType["POINT"] = 3] = "POINT";
              LightType[LightType["RANGED_DIRECTIONAL"] = 4] = "RANGED_DIRECTIONAL";
              LightType[LightType["UNKNOWN"] = 5] = "UNKNOWN";
            })(LightType || (exports('m', LightType = {})));
            const nt2lm = exports('n', size => 4 * Math.PI * Math.PI * size * size);
            const Light = exports('o', jsb.Light);
            legacyCC.Light = jsb.Light;
            const DirectionalLight = exports('D', jsb.DirectionalLight);
            legacyCC.DirectionalLight = jsb.DirectionalLight;
            const SpotLight = exports('p', jsb.SpotLight);
            legacyCC.SpotLight = jsb.SpotLight;
            const SphereLight = exports('q', jsb.SphereLight);
            legacyCC.SphereLight = jsb.SphereLight;
            const PointLight = exports('r', jsb.PointLight);
            legacyCC.PointLight = jsb.PointLight;
            const RangedDirectionalLight = exports('s', jsb.RangedDirectionalLight);
            legacyCC.RangedDirectionalLight = jsb.RangedDirectionalLight;
            const FogType$1 = exports('F', Enum({
              LINEAR: 0,
              EXP: 1,
              EXP_SQUARED: 2,
              LAYERED: 3
            }));
            const FOG_TYPE_NONE = exports('t', FogType$1.LAYERED + 1);
            const FogInfo$1 = exports('u', jsb.FogInfo);
            const Fog = exports('v', jsb.Fog);
            legacyCC.Fog = Fog;
            const ShadowSize$1 = exports('w', Enum({
              Low_256x256: 256,
              Medium_512x512: 512,
              High_1024x1024: 1024,
              Ultra_2048x2048: 2048
            }));
            const ShadowType$1 = exports('x', Enum({
              Planar: 0,
              ShadowMap: 1
            }));
            const PCFType = exports('y', Enum({
              HARD: 0,
              SOFT: 1,
              SOFT_2X: 2,
              SOFT_4X: 3
            }));
            const CSMLevel = exports('z', Enum({
              LEVEL_1: 1,
              LEVEL_2: 2,
              LEVEL_3: 3,
              LEVEL_4: 4
            }));
            const CSMOptimizationMode = exports('B', Enum({
              NONE: 1,
              RemoveDuplicates: 2,
              DisableRotationFix: 3
            }));
            const EnvironmentLightingType = exports('E', Enum({
              HEMISPHERE_DIFFUSE: 0,
              AUTOGEN_HEMISPHERE_DIFFUSE_WITH_REFLECTION: 1,
              DIFFUSEMAP_WITH_REFLECTION: 2
            }));
            const ToneMappingType = exports('G', Enum({
              DEFAULT: 0,
              LINEAR: 1
            }));
            const ShadowsInfo$1 = exports('H', jsb.ShadowsInfo);
            const Shadows = exports('I', jsb.Shadows);
            legacyCC.Shadows = Shadows;
            Object.defineProperty(Shadows, "MAX_FAR", {
              configurable: true,
              enumerable: true,
              get() {
                return 2000.0;
              }
            });
            const COEFFICIENT_OF_EXPANSION = 2.0 * Math.sqrt(3.0);
            Object.defineProperty(Shadows, 'COEFFICIENT_OF_EXPANSION', {
              configurable: true,
              enumerable: true,
              get() {
                return COEFFICIENT_OF_EXPANSION;
              }
            });
            const Skybox = exports('J', jsb.Skybox);
            legacyCC.Skybox = Skybox;
            const PostSettings = exports('K', jsb.PostSettings);
            legacyCC.PostSettings = PostSettings;

            const layerList = {
              NONE: 0,
              IGNORE_RAYCAST: 1 << 20,
              GIZMOS: 1 << 21,
              EDITOR: 1 << 22,
              UI_3D: 1 << 23,
              SCENE_GIZMO: 1 << 24,
              UI_2D: 1 << 25,
              PROFILER: 1 << 28,
              DEFAULT: 1 << 30,
              ALL: 0xffffffff
            };
            class Layers {
              static init() {
                const userLayers = settings.querySettings(Settings.Category.ENGINE, 'customLayers');
                if (!userLayers) return;
                for (let i = 0; i < userLayers.length; i++) {
                  const layer = userLayers[i];
                  Layers.addLayer(layer.name, layer.bit);
                }
              }
              static makeMaskInclude(includes) {
                let mask = 0;
                for (const inc of includes) {
                  mask |= inc;
                }
                return mask;
              }
              static makeMaskExclude(excludes) {
                return ~Layers.makeMaskInclude(excludes);
              }
              static addLayer(name, bitNum) {
                if (bitNum === undefined) {
                  console.warn('bitNum can\'t be undefined');
                  return;
                }
                if (bitNum > 19 || bitNum < 0) {
                  console.warn('maximum layers reached.');
                  return;
                }
                const val = 1 << bitNum;
                assertIsTrue(!Layers.Enum[name], getError(2104, name));
                Layers.Enum[name] = val;
                value(Layers.Enum, String(val), name);
                Layers.BitMask[name] = val;
                value(Layers.BitMask, String(val), name);
                BitMask.update(Layers.BitMask);
                Enum.update(Layers.Enum);
              }
              static deleteLayer(bitNum) {
                if (bitNum > 19 || bitNum < 0) {
                  console.warn('do not change buildin layers.');
                  return;
                }
                const val = 1 << bitNum;
                delete Layers.Enum[Layers.Enum[val]];
                delete Layers.Enum[val];
                delete Layers.BitMask[Layers.BitMask[val]];
                delete Layers.BitMask[val];
                BitMask.update(Layers.BitMask);
                Enum.update(Layers.Enum);
              }
              static nameToLayer(name) {
                if (name === undefined) {
                  console.warn('name can\'t be undefined');
                  return -1;
                }
                return log2(Layers.Enum[name]);
              }
              static layerToName(bitNum) {
                if (bitNum > 31 || bitNum < 0) {
                  console.warn('Unable to access unknown layer.');
                  return '';
                }
                return Layers.Enum[1 << bitNum];
              }
            } exports('V', Layers);
            Layers.Enum = Enum(layerList);
            Layers.BitMask = BitMask({
              ...layerList
            });
            legacyCC.Layers = Layers;

            const EffectAsset = exports('ao', jsb.EffectAsset);
            legacyCC.EffectAsset = EffectAsset;
            const effectAssetProto = EffectAsset.prototype;
            effectAssetProto._ctor = function () {
              jsb.Asset.prototype._ctor.apply(this, arguments);
              this.hideInEditor = false;
            };
            patch_cc_EffectAsset({
              EffectAsset
            });

            const CUSTOM_PIXEL_FORMAT = 1024;
            let PixelFormat; exports('aS', PixelFormat);
            (function (PixelFormat) {
              PixelFormat[PixelFormat["RGB565"] = Format.R5G6B5] = "RGB565";
              PixelFormat[PixelFormat["RGB5A1"] = Format.RGB5A1] = "RGB5A1";
              PixelFormat[PixelFormat["RGBA4444"] = Format.RGBA4] = "RGBA4444";
              PixelFormat[PixelFormat["RGB888"] = Format.RGB8] = "RGB888";
              PixelFormat[PixelFormat["RGB32F"] = Format.RGB32F] = "RGB32F";
              PixelFormat[PixelFormat["RGBA8888"] = Format.RGBA8] = "RGBA8888";
              PixelFormat[PixelFormat["RGBA32F"] = Format.RGBA32F] = "RGBA32F";
              PixelFormat[PixelFormat["A8"] = Format.A8] = "A8";
              PixelFormat[PixelFormat["I8"] = Format.L8] = "I8";
              PixelFormat[PixelFormat["AI8"] = Format.LA8] = "AI8";
              PixelFormat[PixelFormat["RGB_PVRTC_2BPPV1"] = Format.PVRTC_RGB2] = "RGB_PVRTC_2BPPV1";
              PixelFormat[PixelFormat["RGBA_PVRTC_2BPPV1"] = Format.PVRTC_RGBA2] = "RGBA_PVRTC_2BPPV1";
              PixelFormat[PixelFormat["RGB_A_PVRTC_2BPPV1"] = CUSTOM_PIXEL_FORMAT] = "RGB_A_PVRTC_2BPPV1";
              PixelFormat[PixelFormat["RGB_PVRTC_4BPPV1"] = Format.PVRTC_RGB4] = "RGB_PVRTC_4BPPV1";
              PixelFormat[PixelFormat["RGBA_PVRTC_4BPPV1"] = Format.PVRTC_RGBA4] = "RGBA_PVRTC_4BPPV1";
              PixelFormat[PixelFormat["RGB_A_PVRTC_4BPPV1"] = CUSTOM_PIXEL_FORMAT + 1] = "RGB_A_PVRTC_4BPPV1";
              PixelFormat[PixelFormat["RGB_ETC1"] = Format.ETC_RGB8] = "RGB_ETC1";
              PixelFormat[PixelFormat["RGBA_ETC1"] = CUSTOM_PIXEL_FORMAT + 2] = "RGBA_ETC1";
              PixelFormat[PixelFormat["RGB_ETC2"] = Format.ETC2_RGB8] = "RGB_ETC2";
              PixelFormat[PixelFormat["RGBA_ETC2"] = Format.ETC2_RGBA8] = "RGBA_ETC2";
              PixelFormat[PixelFormat["RGBA_ASTC_4x4"] = Format.ASTC_RGBA_4X4] = "RGBA_ASTC_4x4";
              PixelFormat[PixelFormat["RGBA_ASTC_5x4"] = Format.ASTC_RGBA_5X4] = "RGBA_ASTC_5x4";
              PixelFormat[PixelFormat["RGBA_ASTC_5x5"] = Format.ASTC_RGBA_5X5] = "RGBA_ASTC_5x5";
              PixelFormat[PixelFormat["RGBA_ASTC_6x5"] = Format.ASTC_RGBA_6X5] = "RGBA_ASTC_6x5";
              PixelFormat[PixelFormat["RGBA_ASTC_6x6"] = Format.ASTC_RGBA_6X6] = "RGBA_ASTC_6x6";
              PixelFormat[PixelFormat["RGBA_ASTC_8x5"] = Format.ASTC_RGBA_8X5] = "RGBA_ASTC_8x5";
              PixelFormat[PixelFormat["RGBA_ASTC_8x6"] = Format.ASTC_RGBA_8X6] = "RGBA_ASTC_8x6";
              PixelFormat[PixelFormat["RGBA_ASTC_8x8"] = Format.ASTC_RGBA_8X8] = "RGBA_ASTC_8x8";
              PixelFormat[PixelFormat["RGBA_ASTC_10x5"] = Format.ASTC_RGBA_10X5] = "RGBA_ASTC_10x5";
              PixelFormat[PixelFormat["RGBA_ASTC_10x6"] = Format.ASTC_RGBA_10X6] = "RGBA_ASTC_10x6";
              PixelFormat[PixelFormat["RGBA_ASTC_10x8"] = Format.ASTC_RGBA_10X8] = "RGBA_ASTC_10x8";
              PixelFormat[PixelFormat["RGBA_ASTC_10x10"] = Format.ASTC_RGBA_10X10] = "RGBA_ASTC_10x10";
              PixelFormat[PixelFormat["RGBA_ASTC_12x10"] = Format.ASTC_RGBA_12X10] = "RGBA_ASTC_12x10";
              PixelFormat[PixelFormat["RGBA_ASTC_12x12"] = Format.ASTC_RGBA_12X12] = "RGBA_ASTC_12x12";
            })(PixelFormat || (exports('aS', PixelFormat = {})));
            let WrapMode; exports('aT', WrapMode);
            (function (WrapMode) {
              WrapMode[WrapMode["REPEAT"] = Address.WRAP] = "REPEAT";
              WrapMode[WrapMode["CLAMP_TO_EDGE"] = Address.CLAMP] = "CLAMP_TO_EDGE";
              WrapMode[WrapMode["MIRRORED_REPEAT"] = Address.MIRROR] = "MIRRORED_REPEAT";
              WrapMode[WrapMode["CLAMP_TO_BORDER"] = Address.BORDER] = "CLAMP_TO_BORDER";
            })(WrapMode || (exports('aT', WrapMode = {})));
            let Filter; exports('aR', Filter);
            (function (Filter) {
              Filter[Filter["NONE"] = Filter$1.NONE] = "NONE";
              Filter[Filter["LINEAR"] = Filter$1.LINEAR] = "LINEAR";
              Filter[Filter["NEAREST"] = Filter$1.POINT] = "NEAREST";
            })(Filter || (exports('aR', Filter = {})));

            const textureBaseProto = jsb.TextureBase.prototype;
            textureBaseProto._serialize = function (ctxForExporting) {
              return '';
            };
            textureBaseProto._deserialize = function (serializedData, handle) {
              const data = serializedData;
              const fields = data.split(',');
              fields.unshift('');
              if (fields.length >= 5) {
                this.setFilters(parseInt(fields[1]), parseInt(fields[2]));
                this.setWrapMode(parseInt(fields[3]), parseInt(fields[4]));
              }
              if (fields.length >= 7) {
                this.setMipFilter(parseInt(fields[5]));
                this.setAnisotropy(parseInt(fields[6]));
              }
            };
            textureBaseProto._getGFXDevice = function () {
              return deviceManager.gfxDevice;
            };
            textureBaseProto._getGFXFormat = function () {
              return this._getGFXPixelFormat(this.format);
            };
            textureBaseProto._setGFXFormat = function (format) {
              this.format = format === undefined ? PixelFormat.RGBA8888 : format;
            };
            textureBaseProto._getGFXPixelFormat = function (format) {
              if (format === PixelFormat.RGBA_ETC1) {
                format = PixelFormat.RGB_ETC1;
              } else if (format === PixelFormat.RGB_A_PVRTC_4BPPV1) {
                format = PixelFormat.RGB_PVRTC_4BPPV1;
              } else if (format === PixelFormat.RGB_A_PVRTC_2BPPV1) {
                format = PixelFormat.RGB_PVRTC_2BPPV1;
              }
              return format;
            };
            textureBaseProto.createNode = null;
            const TextureBase = exports('aQ', jsb.TextureBase);
            TextureBase.Filter = Filter;
            TextureBase.PixelFormat = PixelFormat;
            TextureBase.WrapMode = WrapMode;
            textureBaseProto._ctor = function () {
              jsb.Asset.prototype._ctor.apply(this, arguments);
              this._gfxSampler = null;
              this._samplerInfo = null;
              this._textureHash = 0;
              this._registerGFXSamplerUpdatedListener();
            };
            const oldGetGFXSampler = textureBaseProto.getGFXSampler;
            textureBaseProto.getGFXSampler = function () {
              if (!this._gfxSampler) {
                this._gfxSampler = oldGetGFXSampler.call(this);
              }
              return this._gfxSampler;
            };
            const oldGetHash = textureBaseProto.getHash;
            textureBaseProto.getHash = function () {
              if (this._textureHash === 0) {
                this._textureHash = oldGetHash.call(this);
              }
              return this._textureHash;
            };
            const oldGetSamplerInfo = textureBaseProto.getSamplerInfo;
            textureBaseProto.getSamplerInfo = function () {
              if (!this._samplerInfo) {
                this._samplerInfo = oldGetSamplerInfo.call(this);
              }
              return this._samplerInfo;
            };
            const oldDestroy = textureBaseProto.destroy;
            textureBaseProto.destroy = function () {
              var _cclegacy$director$ro;
              if ((_cclegacy$director$ro = legacyCC.director.root) !== null && _cclegacy$director$ro !== void 0 && _cclegacy$director$ro.batcher2D) {
                legacyCC.director.root.batcher2D._releaseDescriptorSetCache(this.getGFXTexture(), this.getGFXSampler());
              }
              return oldDestroy.call(this);
            };
            textureBaseProto._onGFXSamplerUpdated = function (gfxSampler, samplerInfo) {
              this._gfxSampler = gfxSampler;
              this._samplerInfo = samplerInfo;
            };
            legacyCC.TextureBase = jsb.TextureBase;
            patch_cc_TextureBase({
              TextureBase,
              Filter,
              WrapMode,
              PixelFormat
            });

            const matProto = jsb.Material.prototype;
            function wrapSetProperty(cb, target, name, val, passIdx) {
              if (passIdx != undefined) {
                cb.call(target, name, val, passIdx);
              } else {
                cb.call(target, name, val);
              }
            }
            var MathType;
            (function (MathType) {
              MathType[MathType["VEC2"] = 0] = "VEC2";
              MathType[MathType["VEC3"] = 1] = "VEC3";
              MathType[MathType["VEC4"] = 2] = "VEC4";
              MathType[MathType["QUATERNION"] = 3] = "QUATERNION";
              MathType[MathType["MAT3"] = 4] = "MAT3";
              MathType[MathType["MAT4"] = 5] = "MAT4";
              MathType[MathType["SIZE"] = 6] = "SIZE";
              MathType[MathType["RECT"] = 7] = "RECT";
              MathType[MathType["COLOR"] = 8] = "COLOR";
            })(MathType || (MathType = {}));
            matProto.setProperty = function (name, val, passIdx) {
              if (Array.isArray(val)) {
                const first = val[0];
                if (typeof first === 'number') {
                  if (Number.isInteger(first)) {
                    wrapSetProperty(this.setPropertyInt32Array, this, name, val, passIdx);
                  } else {
                    wrapSetProperty(this.setPropertyFloat32Array, this, name, val, passIdx);
                  }
                } else if (first instanceof Vec2) {
                  wrapSetProperty(this.setPropertyVec2Array, this, name, val, passIdx);
                } else if (first instanceof Vec3) {
                  wrapSetProperty(this.setPropertyVec3Array, this, name, val, passIdx);
                } else if (first instanceof Vec4) {
                  wrapSetProperty(this.setPropertyVec4Array, this, name, val, passIdx);
                } else if (first instanceof Color) {
                  wrapSetProperty(this.setPropertyColorArray, this, name, val, passIdx);
                } else if (first instanceof Mat3) {
                  wrapSetProperty(this.setPropertyMat3Array, this, name, val, passIdx);
                } else if (first instanceof Mat4) {
                  wrapSetProperty(this.setPropertyMat4Array, this, name, val, passIdx);
                } else if (first instanceof Quat) {
                  wrapSetProperty(this.setPropertyQuatArray, this, name, val, passIdx);
                } else if (first instanceof TextureBase) {
                  wrapSetProperty(this.setPropertyTextureBaseArray, this, name, val, passIdx);
                } else if (first instanceof Texture) {
                  wrapSetProperty(this.setPropertyGFXTextureArray, this, name, val, passIdx);
                } else {
                  legacyCC.error(`Material.setProperty Unknown type: ${val}`);
                }
              } else if (typeof val === 'number') {
                if (Number.isInteger(val)) {
                  wrapSetProperty(this.setPropertyInt32, this, name, val, passIdx);
                } else {
                  wrapSetProperty(this.setPropertyFloat32, this, name, val, passIdx);
                }
              } else if (val instanceof Vec2) {
                wrapSetProperty(this.setPropertyVec2, this, name, val, passIdx);
              } else if (val instanceof Vec3) {
                wrapSetProperty(this.setPropertyVec3, this, name, val, passIdx);
              } else if (val instanceof Vec4) {
                wrapSetProperty(this.setPropertyVec4, this, name, val, passIdx);
              } else if (val instanceof Color) {
                wrapSetProperty(this.setPropertyColor, this, name, val, passIdx);
              } else if (val instanceof Mat3) {
                wrapSetProperty(this.setPropertyMat3, this, name, val, passIdx);
              } else if (val instanceof Mat4) {
                wrapSetProperty(this.setPropertyMat4, this, name, val, passIdx);
              } else if (val instanceof Quat) {
                wrapSetProperty(this.setPropertyQuat, this, name, val, passIdx);
              } else if (val instanceof TextureBase) {
                wrapSetProperty(this.setPropertyTextureBase, this, name, val, passIdx);
              } else if (val instanceof Texture) {
                wrapSetProperty(this.setPropertyGFXTexture, this, name, val, passIdx);
              } else if (val === null) {
                if (passIdx) {
                  this.setPropertyNull(name, passIdx);
                } else {
                  this.setPropertyNull(name);
                }
              } else {
                legacyCC.error(`Material.setProperty Unknown type: ${val}`);
              }
            };
            matProto.getProperty = function (name, passIdx) {
              let val;
              if (passIdx !== undefined) {
                val = this._getProperty(name, passIdx);
              } else {
                val = this._getProperty(name);
              }
              if (Array.isArray(val)) {
                const first = val[0];
                const arr = [];
                if (first instanceof jsb.Vec2 || first.type === MathType.VEC2) {
                  for (let i = 0, len = val.length; i < len; ++i) {
                    const e = val[i];
                    arr.push(new Vec2(e.x, e.y));
                  }
                } else if (first.type === MathType.VEC3) {
                  for (let i = 0, len = val.length; i < len; ++i) {
                    const e = val[i];
                    arr.push(new Vec3(e.x, e.y, e.z));
                  }
                } else if (first.type === MathType.VEC4) {
                  for (let i = 0, len = val.length; i < len; ++i) {
                    const e = val[i];
                    arr.push(new Vec4(e.x, e.y, e.z, e.w));
                  }
                } else if (first instanceof jsb.Color) {
                  for (let i = 0, len = val.length; i < len; ++i) {
                    const e = val[i];
                    arr.push(new Color(e.r, e.g, e.b, e.a));
                  }
                } else if (first.type === MathType.MAT3) {
                  for (let i = 0, len = val.length; i < len; ++i) {
                    const e = val[i];
                    arr.push(new Mat3(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]));
                  }
                } else if (first.type === MathType.MAT4) {
                  for (let i = 0, len = val.length; i < len; ++i) {
                    const e = val[i];
                    arr.push(new Mat4(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]));
                  }
                } else if (first.type === MathType.QUATERNION) {
                  for (let i = 0, len = val.length; i < len; ++i) {
                    const e = val[i];
                    arr.push(new Quat(e.x, e.y, e.z, e.w));
                  }
                }
                return arr || val;
              } else if (val === null || val === undefined) {
                return null;
              }
              let ret;
              const e = val;
              if (val instanceof jsb.Vec2 || val.type === MathType.VEC2) {
                ret = new Vec3(e.x, e.y);
              } else if (val.type === MathType.VEC3) {
                ret = new Vec3(e.x, e.y, e.z);
              } else if (val.type === MathType.VEC4) {
                ret = new Vec4(e.x, e.y, e.z, e.w);
              } else if (val instanceof jsb.Color) {
                ret = new Color(e.r, e.g, e.b, e.a);
              } else if (val.type === MathType.MAT3) {
                ret = new Mat3(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
              } else if (val.type === MathType.MAT4) {
                ret = new Mat4(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
              } else if (val.type === MathType.QUATERNION) {
                ret = new Quat(e.x, e.y, e.z, e.w);
              }
              return ret || val;
            };
            const Material = exports('ap', jsb.Material);
            legacyCC.Material = Material;
            const materialProto = Material.prototype;
            materialProto._ctor = function () {
              jsb.Asset.prototype._ctor.apply(this, arguments);
              this._props = [];
              this._passes = [];
              this._registerPassesUpdatedListener();
              this._isCtorCalled = true;
            };
            const oldOnLoaded$2 = materialProto.onLoaded;
            materialProto.onLoaded = function () {
              this._propsInternal = this._props;
              oldOnLoaded$2.call(this);
            };
            materialProto._onPassesUpdated = function () {
              this._passes = this.getPasses();
            };
            Object.defineProperty(materialProto, 'passes', {
              enumerable: true,
              configurable: true,
              get() {
                if (!this._isCtorCalled) {
                  this._ctor();
                  this._passes = this.getPasses();
                }
                return this._passes;
              }
            });
            patch_cc_Material({
              Material,
              EffectAsset
            });

            var _class$6, _class2$5, _class3$1, _class4$1, _class5$1, _class6, _class7$1, _class8$1, _class10$1, _class11$1, _class12, _class13$1, _class14$1, _class15;
            const PIPELINE_FLOW_MAIN = 'MainFlow';
            const PIPELINE_FLOW_FORWARD = 'ForwardFlow';
            const PIPELINE_FLOW_SHADOW = 'ShadowFlow';
            const PIPELINE_FLOW_SMAA = 'SMAAFlow';
            const PIPELINE_FLOW_TONEMAP = 'ToneMapFlow';
            let RenderPassStage;
            (function (RenderPassStage) {
              RenderPassStage[RenderPassStage["DEFAULT"] = 100] = "DEFAULT";
              RenderPassStage[RenderPassStage["UI"] = 200] = "UI";
            })(RenderPassStage || (RenderPassStage = {}));
            legacyCC.RenderPassStage = RenderPassStage;
            let RenderPriority; exports('a$', RenderPriority);
            (function (RenderPriority) {
              RenderPriority[RenderPriority["MIN"] = 0] = "MIN";
              RenderPriority[RenderPriority["MAX"] = 255] = "MAX";
              RenderPriority[RenderPriority["DEFAULT"] = 128] = "DEFAULT";
            })(RenderPriority || (exports('a$', RenderPriority = {})));
            const globalDescriptorSetLayout = {
              bindings: [],
              layouts: {}
            };
            const localDescriptorSetLayout = {
              bindings: [],
              layouts: {}
            };
            let PipelineGlobalBindings;
            (function (PipelineGlobalBindings) {
              PipelineGlobalBindings[PipelineGlobalBindings["UBO_GLOBAL"] = 0] = "UBO_GLOBAL";
              PipelineGlobalBindings[PipelineGlobalBindings["UBO_CAMERA"] = 1] = "UBO_CAMERA";
              PipelineGlobalBindings[PipelineGlobalBindings["UBO_SHADOW"] = 2] = "UBO_SHADOW";
              PipelineGlobalBindings[PipelineGlobalBindings["UBO_CSM"] = 3] = "UBO_CSM";
              PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_SHADOWMAP"] = 4] = "SAMPLER_SHADOWMAP";
              PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_ENVIRONMENT"] = 5] = "SAMPLER_ENVIRONMENT";
              PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_SPOT_SHADOW_MAP"] = 6] = "SAMPLER_SPOT_SHADOW_MAP";
              PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_DIFFUSEMAP"] = 7] = "SAMPLER_DIFFUSEMAP";
              PipelineGlobalBindings[PipelineGlobalBindings["COUNT"] = 8] = "COUNT";
            })(PipelineGlobalBindings || (PipelineGlobalBindings = {}));
            const GLOBAL_UBO_COUNT = PipelineGlobalBindings.SAMPLER_SHADOWMAP;
            const GLOBAL_SAMPLER_COUNT = PipelineGlobalBindings.COUNT - GLOBAL_UBO_COUNT;
            let ModelLocalBindings; exports('aZ', ModelLocalBindings);
            (function (ModelLocalBindings) {
              ModelLocalBindings[ModelLocalBindings["UBO_LOCAL"] = 0] = "UBO_LOCAL";
              ModelLocalBindings[ModelLocalBindings["UBO_FORWARD_LIGHTS"] = 1] = "UBO_FORWARD_LIGHTS";
              ModelLocalBindings[ModelLocalBindings["UBO_SKINNING_ANIMATION"] = 2] = "UBO_SKINNING_ANIMATION";
              ModelLocalBindings[ModelLocalBindings["UBO_SKINNING_TEXTURE"] = 3] = "UBO_SKINNING_TEXTURE";
              ModelLocalBindings[ModelLocalBindings["UBO_MORPH"] = 4] = "UBO_MORPH";
              ModelLocalBindings[ModelLocalBindings["UBO_UI_LOCAL"] = 5] = "UBO_UI_LOCAL";
              ModelLocalBindings[ModelLocalBindings["UBO_SH"] = 6] = "UBO_SH";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_JOINTS"] = 7] = "SAMPLER_JOINTS";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_POSITION"] = 8] = "SAMPLER_MORPH_POSITION";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_NORMAL"] = 9] = "SAMPLER_MORPH_NORMAL";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_TANGENT"] = 10] = "SAMPLER_MORPH_TANGENT";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_LIGHTMAP"] = 11] = "SAMPLER_LIGHTMAP";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_SPRITE"] = 12] = "SAMPLER_SPRITE";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION"] = 13] = "SAMPLER_REFLECTION";
              ModelLocalBindings[ModelLocalBindings["STORAGE_REFLECTION"] = 14] = "STORAGE_REFLECTION";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION_PROBE_CUBE"] = 15] = "SAMPLER_REFLECTION_PROBE_CUBE";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION_PROBE_PLANAR"] = 16] = "SAMPLER_REFLECTION_PROBE_PLANAR";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION_PROBE_DATA_MAP"] = 17] = "SAMPLER_REFLECTION_PROBE_DATA_MAP";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_REFLECTION_PROBE_BLEND_CUBE"] = 18] = "SAMPLER_REFLECTION_PROBE_BLEND_CUBE";
              ModelLocalBindings[ModelLocalBindings["COUNT"] = 19] = "COUNT";
            })(ModelLocalBindings || (exports('aZ', ModelLocalBindings = {})));
            const LOCAL_UBO_COUNT = ModelLocalBindings.SAMPLER_JOINTS;
            const LOCAL_SAMPLER_COUNT = ModelLocalBindings.STORAGE_REFLECTION - LOCAL_UBO_COUNT;
            const LOCAL_STORAGE_IMAGE_COUNT = ModelLocalBindings.COUNT - LOCAL_UBO_COUNT - LOCAL_SAMPLER_COUNT;
            let SetIndex; exports('aO', SetIndex);
            (function (SetIndex) {
              SetIndex[SetIndex["GLOBAL"] = 0] = "GLOBAL";
              SetIndex[SetIndex["MATERIAL"] = 1] = "MATERIAL";
              SetIndex[SetIndex["LOCAL"] = 2] = "LOCAL";
              SetIndex[SetIndex["COUNT"] = 3] = "COUNT";
            })(SetIndex || (exports('aO', SetIndex = {})));
            const bindingMappingInfo = exports('aP', new BindingMappingInfo([GLOBAL_UBO_COUNT, 0, LOCAL_UBO_COUNT, 0], [GLOBAL_SAMPLER_COUNT, 0, LOCAL_SAMPLER_COUNT, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, LOCAL_STORAGE_IMAGE_COUNT, 0], [0, 0, 0, 0], [0, 2, 1, 3]));
            class UBOGlobal {}
            _class$6 = UBOGlobal;
            UBOGlobal.TIME_OFFSET = 0;
            UBOGlobal.SCREEN_SIZE_OFFSET = _class$6.TIME_OFFSET + 4;
            UBOGlobal.NATIVE_SIZE_OFFSET = _class$6.SCREEN_SIZE_OFFSET + 4;
            UBOGlobal.PROBE_INFO_OFFSET = _class$6.NATIVE_SIZE_OFFSET + 4;
            UBOGlobal.DEBUG_VIEW_MODE_OFFSET = _class$6.PROBE_INFO_OFFSET + 4;
            UBOGlobal.COUNT = _class$6.DEBUG_VIEW_MODE_OFFSET + 4;
            UBOGlobal.SIZE = _class$6.COUNT * 4;
            UBOGlobal.NAME = 'CCGlobal';
            UBOGlobal.BINDING = PipelineGlobalBindings.UBO_GLOBAL;
            UBOGlobal.DESCRIPTOR = new DescriptorSetLayoutBinding(_class$6.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
            UBOGlobal.LAYOUT = new UniformBlock(SetIndex.GLOBAL, _class$6.BINDING, _class$6.NAME, [new Uniform('cc_time', Type.FLOAT4, 1), new Uniform('cc_screenSize', Type.FLOAT4, 1), new Uniform('cc_nativeSize', Type.FLOAT4, 1), new Uniform('cc_probeInfo', Type.FLOAT4, 1), new Uniform('cc_debug_view_mode', Type.FLOAT4, 1)], 1);
            globalDescriptorSetLayout.layouts[UBOGlobal.NAME] = UBOGlobal.LAYOUT;
            globalDescriptorSetLayout.bindings[UBOGlobal.BINDING] = UBOGlobal.DESCRIPTOR;
            class UBOCamera {}
            _class2$5 = UBOCamera;
            UBOCamera.MAT_VIEW_OFFSET = 0;
            UBOCamera.MAT_VIEW_INV_OFFSET = _class2$5.MAT_VIEW_OFFSET + 16;
            UBOCamera.MAT_PROJ_OFFSET = _class2$5.MAT_VIEW_INV_OFFSET + 16;
            UBOCamera.MAT_PROJ_INV_OFFSET = _class2$5.MAT_PROJ_OFFSET + 16;
            UBOCamera.MAT_VIEW_PROJ_OFFSET = _class2$5.MAT_PROJ_INV_OFFSET + 16;
            UBOCamera.MAT_VIEW_PROJ_INV_OFFSET = _class2$5.MAT_VIEW_PROJ_OFFSET + 16;
            UBOCamera.CAMERA_POS_OFFSET = _class2$5.MAT_VIEW_PROJ_INV_OFFSET + 16;
            UBOCamera.SURFACE_TRANSFORM_OFFSET = _class2$5.CAMERA_POS_OFFSET + 4;
            UBOCamera.SCREEN_SCALE_OFFSET = _class2$5.SURFACE_TRANSFORM_OFFSET + 4;
            UBOCamera.EXPOSURE_OFFSET = _class2$5.SCREEN_SCALE_OFFSET + 4;
            UBOCamera.MAIN_LIT_DIR_OFFSET = _class2$5.EXPOSURE_OFFSET + 4;
            UBOCamera.MAIN_LIT_COLOR_OFFSET = _class2$5.MAIN_LIT_DIR_OFFSET + 4;
            UBOCamera.AMBIENT_SKY_OFFSET = _class2$5.MAIN_LIT_COLOR_OFFSET + 4;
            UBOCamera.AMBIENT_GROUND_OFFSET = _class2$5.AMBIENT_SKY_OFFSET + 4;
            UBOCamera.GLOBAL_FOG_COLOR_OFFSET = _class2$5.AMBIENT_GROUND_OFFSET + 4;
            UBOCamera.GLOBAL_FOG_BASE_OFFSET = _class2$5.GLOBAL_FOG_COLOR_OFFSET + 4;
            UBOCamera.GLOBAL_FOG_ADD_OFFSET = _class2$5.GLOBAL_FOG_BASE_OFFSET + 4;
            UBOCamera.NEAR_FAR_OFFSET = _class2$5.GLOBAL_FOG_ADD_OFFSET + 4;
            UBOCamera.VIEW_PORT_OFFSET = _class2$5.NEAR_FAR_OFFSET + 4;
            UBOCamera.COUNT = _class2$5.VIEW_PORT_OFFSET + 4;
            UBOCamera.SIZE = _class2$5.COUNT * 4;
            UBOCamera.NAME = 'CCCamera';
            UBOCamera.BINDING = PipelineGlobalBindings.UBO_CAMERA;
            UBOCamera.DESCRIPTOR = new DescriptorSetLayoutBinding(_class2$5.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
            UBOCamera.LAYOUT = new UniformBlock(SetIndex.GLOBAL, _class2$5.BINDING, _class2$5.NAME, [new Uniform('cc_matView', Type.MAT4, 1), new Uniform('cc_matViewInv', Type.MAT4, 1), new Uniform('cc_matProj', Type.MAT4, 1), new Uniform('cc_matProjInv', Type.MAT4, 1), new Uniform('cc_matViewProj', Type.MAT4, 1), new Uniform('cc_matViewProjInv', Type.MAT4, 1), new Uniform('cc_cameraPos', Type.FLOAT4, 1), new Uniform('cc_surfaceTransform', Type.FLOAT4, 1), new Uniform('cc_screenScale', Type.FLOAT4, 1), new Uniform('cc_exposure', Type.FLOAT4, 1), new Uniform('cc_mainLitDir', Type.FLOAT4, 1), new Uniform('cc_mainLitColor', Type.FLOAT4, 1), new Uniform('cc_ambientSky', Type.FLOAT4, 1), new Uniform('cc_ambientGround', Type.FLOAT4, 1), new Uniform('cc_fogColor', Type.FLOAT4, 1), new Uniform('cc_fogBase', Type.FLOAT4, 1), new Uniform('cc_fogAdd', Type.FLOAT4, 1), new Uniform('cc_nearFar', Type.FLOAT4, 1), new Uniform('cc_viewPort', Type.FLOAT4, 1)], 1);
            globalDescriptorSetLayout.layouts[UBOCamera.NAME] = UBOCamera.LAYOUT;
            globalDescriptorSetLayout.bindings[UBOCamera.BINDING] = UBOCamera.DESCRIPTOR;
            class UBOShadow {}
            _class3$1 = UBOShadow;
            UBOShadow.MAT_LIGHT_VIEW_OFFSET = 0;
            UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET = _class3$1.MAT_LIGHT_VIEW_OFFSET + 16;
            UBOShadow.SHADOW_INV_PROJ_DEPTH_INFO_OFFSET = _class3$1.MAT_LIGHT_VIEW_PROJ_OFFSET + 16;
            UBOShadow.SHADOW_PROJ_DEPTH_INFO_OFFSET = _class3$1.SHADOW_INV_PROJ_DEPTH_INFO_OFFSET + 4;
            UBOShadow.SHADOW_PROJ_INFO_OFFSET = _class3$1.SHADOW_PROJ_DEPTH_INFO_OFFSET + 4;
            UBOShadow.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET = _class3$1.SHADOW_PROJ_INFO_OFFSET + 4;
            UBOShadow.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET = _class3$1.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET + 4;
            UBOShadow.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET = _class3$1.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET + 4;
            UBOShadow.SHADOW_COLOR_OFFSET = _class3$1.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET + 4;
            UBOShadow.PLANAR_NORMAL_DISTANCE_INFO_OFFSET = _class3$1.SHADOW_COLOR_OFFSET + 4;
            UBOShadow.COUNT = _class3$1.PLANAR_NORMAL_DISTANCE_INFO_OFFSET + 4;
            UBOShadow.SIZE = _class3$1.COUNT * 4;
            UBOShadow.NAME = 'CCShadow';
            UBOShadow.BINDING = PipelineGlobalBindings.UBO_SHADOW;
            UBOShadow.DESCRIPTOR = new DescriptorSetLayoutBinding(_class3$1.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
            UBOShadow.LAYOUT = new UniformBlock(SetIndex.GLOBAL, _class3$1.BINDING, _class3$1.NAME, [new Uniform('cc_matLightView', Type.MAT4, 1), new Uniform('cc_matLightViewProj', Type.MAT4, 1), new Uniform('cc_shadowInvProjDepthInfo', Type.FLOAT4, 1), new Uniform('cc_shadowProjDepthInfo', Type.FLOAT4, 1), new Uniform('cc_shadowProjInfo', Type.FLOAT4, 1), new Uniform('cc_shadowNFLSInfo', Type.FLOAT4, 1), new Uniform('cc_shadowWHPBInfo', Type.FLOAT4, 1), new Uniform('cc_shadowLPNNInfo', Type.FLOAT4, 1), new Uniform('cc_shadowColor', Type.FLOAT4, 1), new Uniform('cc_planarNDInfo', Type.FLOAT4, 1)], 1);
            globalDescriptorSetLayout.layouts[UBOShadow.NAME] = UBOShadow.LAYOUT;
            globalDescriptorSetLayout.bindings[UBOShadow.BINDING] = UBOShadow.DESCRIPTOR;
            class UBOCSM {}
            _class4$1 = UBOCSM;
            UBOCSM.CSM_LEVEL_COUNT = 4;
            UBOCSM.CSM_VIEW_DIR_0_OFFSET = 0;
            UBOCSM.CSM_VIEW_DIR_1_OFFSET = _class4$1.CSM_VIEW_DIR_0_OFFSET + 4 * _class4$1.CSM_LEVEL_COUNT;
            UBOCSM.CSM_VIEW_DIR_2_OFFSET = _class4$1.CSM_VIEW_DIR_1_OFFSET + 4 * _class4$1.CSM_LEVEL_COUNT;
            UBOCSM.CSM_ATLAS_OFFSET = _class4$1.CSM_VIEW_DIR_2_OFFSET + 4 * _class4$1.CSM_LEVEL_COUNT;
            UBOCSM.MAT_CSM_VIEW_PROJ_OFFSET = _class4$1.CSM_ATLAS_OFFSET + 4 * _class4$1.CSM_LEVEL_COUNT;
            UBOCSM.CSM_PROJ_DEPTH_INFO_OFFSET = _class4$1.MAT_CSM_VIEW_PROJ_OFFSET + 16 * _class4$1.CSM_LEVEL_COUNT;
            UBOCSM.CSM_PROJ_INFO_OFFSET = _class4$1.CSM_PROJ_DEPTH_INFO_OFFSET + 4 * _class4$1.CSM_LEVEL_COUNT;
            UBOCSM.CSM_SPLITS_INFO_OFFSET = _class4$1.CSM_PROJ_INFO_OFFSET + 4 * _class4$1.CSM_LEVEL_COUNT;
            UBOCSM.COUNT = _class4$1.CSM_SPLITS_INFO_OFFSET + 4;
            UBOCSM.SIZE = _class4$1.COUNT * 4;
            UBOCSM.NAME = 'CCCSM';
            UBOCSM.BINDING = PipelineGlobalBindings.UBO_CSM;
            UBOCSM.DESCRIPTOR = new DescriptorSetLayoutBinding(_class4$1.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.FRAGMENT);
            UBOCSM.LAYOUT = new UniformBlock(SetIndex.GLOBAL, _class4$1.BINDING, _class4$1.NAME, [new Uniform('cc_csmViewDir0', Type.FLOAT4, _class4$1.CSM_LEVEL_COUNT), new Uniform('cc_csmViewDir1', Type.FLOAT4, _class4$1.CSM_LEVEL_COUNT), new Uniform('cc_csmViewDir2', Type.FLOAT4, _class4$1.CSM_LEVEL_COUNT), new Uniform('cc_csmAtlas', Type.FLOAT4, _class4$1.CSM_LEVEL_COUNT), new Uniform('cc_matCSMViewProj', Type.MAT4, _class4$1.CSM_LEVEL_COUNT), new Uniform('cc_csmProjDepthInfo', Type.FLOAT4, _class4$1.CSM_LEVEL_COUNT), new Uniform('cc_csmProjInfo', Type.FLOAT4, _class4$1.CSM_LEVEL_COUNT), new Uniform('cc_csmSplitsInfo', Type.FLOAT4, 1)], 1);
            globalDescriptorSetLayout.layouts[UBOCSM.NAME] = UBOCSM.LAYOUT;
            globalDescriptorSetLayout.bindings[UBOCSM.BINDING] = UBOCSM.DESCRIPTOR;
            const UNIFORM_SHADOWMAP_NAME = 'cc_shadowMap';
            const UNIFORM_SHADOWMAP_BINDING = PipelineGlobalBindings.SAMPLER_SHADOWMAP;
            const UNIFORM_SHADOWMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SHADOWMAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_SHADOWMAP_LAYOUT = new UniformSamplerTexture(SetIndex.GLOBAL, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SHADOWMAP_NAME, Type.SAMPLER2D, 1);
            globalDescriptorSetLayout.layouts[UNIFORM_SHADOWMAP_NAME] = UNIFORM_SHADOWMAP_LAYOUT;
            globalDescriptorSetLayout.bindings[UNIFORM_SHADOWMAP_BINDING] = UNIFORM_SHADOWMAP_DESCRIPTOR;
            const UNIFORM_ENVIRONMENT_NAME = 'cc_environment';
            const UNIFORM_ENVIRONMENT_BINDING = PipelineGlobalBindings.SAMPLER_ENVIRONMENT;
            const UNIFORM_ENVIRONMENT_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_ENVIRONMENT_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_ENVIRONMENT_LAYOUT = new UniformSamplerTexture(SetIndex.GLOBAL, UNIFORM_ENVIRONMENT_BINDING, UNIFORM_ENVIRONMENT_NAME, Type.SAMPLER_CUBE, 1);
            globalDescriptorSetLayout.layouts[UNIFORM_ENVIRONMENT_NAME] = UNIFORM_ENVIRONMENT_LAYOUT;
            globalDescriptorSetLayout.bindings[UNIFORM_ENVIRONMENT_BINDING] = UNIFORM_ENVIRONMENT_DESCRIPTOR;
            const UNIFORM_DIFFUSEMAP_NAME = 'cc_diffuseMap';
            const UNIFORM_DIFFUSEMAP_BINDING = PipelineGlobalBindings.SAMPLER_DIFFUSEMAP;
            const UNIFORM_DIFFUSEMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_DIFFUSEMAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_DIFFUSEMAP_LAYOUT = new UniformSamplerTexture(SetIndex.GLOBAL, UNIFORM_DIFFUSEMAP_BINDING, UNIFORM_DIFFUSEMAP_NAME, Type.SAMPLER_CUBE, 1);
            globalDescriptorSetLayout.layouts[UNIFORM_DIFFUSEMAP_NAME] = UNIFORM_DIFFUSEMAP_LAYOUT;
            globalDescriptorSetLayout.bindings[UNIFORM_DIFFUSEMAP_BINDING] = UNIFORM_DIFFUSEMAP_DESCRIPTOR;
            const UNIFORM_SPOT_SHADOW_MAP_TEXTURE_NAME = 'cc_spotShadowMap';
            const UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING = PipelineGlobalBindings.SAMPLER_SPOT_SHADOW_MAP;
            const UNIFORM_SPOT_SHADOW_MAP_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_SPOT_SHADOW_MAP_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.GLOBAL, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING, UNIFORM_SPOT_SHADOW_MAP_TEXTURE_NAME, Type.SAMPLER2D, 1);
            globalDescriptorSetLayout.layouts[UNIFORM_SPOT_SHADOW_MAP_TEXTURE_NAME] = UNIFORM_SPOT_SHADOW_MAP_TEXTURE_LAYOUT;
            globalDescriptorSetLayout.bindings[UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING] = UNIFORM_SPOT_SHADOW_MAP_TEXTURE_DESCRIPTOR;
            class UBOLocal {} exports('a_', UBOLocal);
            _class5$1 = UBOLocal;
            UBOLocal.MAT_WORLD_OFFSET = 0;
            UBOLocal.MAT_WORLD_IT_OFFSET = _class5$1.MAT_WORLD_OFFSET + 16;
            UBOLocal.LIGHTINGMAP_UVPARAM = _class5$1.MAT_WORLD_IT_OFFSET + 16;
            UBOLocal.LOCAL_SHADOW_BIAS = _class5$1.LIGHTINGMAP_UVPARAM + 4;
            UBOLocal.REFLECTION_PROBE_DATA1 = _class5$1.LOCAL_SHADOW_BIAS + 4;
            UBOLocal.REFLECTION_PROBE_DATA2 = _class5$1.REFLECTION_PROBE_DATA1 + 4;
            UBOLocal.REFLECTION_PROBE_BLEND_DATA1 = _class5$1.REFLECTION_PROBE_DATA2 + 4;
            UBOLocal.REFLECTION_PROBE_BLEND_DATA2 = _class5$1.REFLECTION_PROBE_BLEND_DATA1 + 4;
            UBOLocal.COUNT = _class5$1.REFLECTION_PROBE_BLEND_DATA2 + 4;
            UBOLocal.SIZE = _class5$1.COUNT * 4;
            UBOLocal.NAME = 'CCLocal';
            UBOLocal.BINDING = ModelLocalBindings.UBO_LOCAL;
            UBOLocal.DESCRIPTOR = new DescriptorSetLayoutBinding(_class5$1.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX | ShaderStageFlagBit.FRAGMENT | ShaderStageFlagBit.COMPUTE);
            UBOLocal.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class5$1.BINDING, _class5$1.NAME, [new Uniform('cc_matWorld', Type.MAT4, 1), new Uniform('cc_matWorldIT', Type.MAT4, 1), new Uniform('cc_lightingMapUVParam', Type.FLOAT4, 1), new Uniform('cc_localShadowBias', Type.FLOAT4, 1), new Uniform('cc_reflectionProbeData1', Type.FLOAT4, 1), new Uniform('cc_reflectionProbeData2', Type.FLOAT4, 1), new Uniform('cc_reflectionProbeBlendData1', Type.FLOAT4, 1), new Uniform('cc_reflectionProbeBlendData2', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOLocal.NAME] = UBOLocal.LAYOUT;
            localDescriptorSetLayout.bindings[UBOLocal.BINDING] = UBOLocal.DESCRIPTOR;
            class UBOWorldBound {}
            _class6 = UBOWorldBound;
            UBOWorldBound.WORLD_BOUND_CENTER = 0;
            UBOWorldBound.WORLD_BOUND_HALF_EXTENTS = _class6.WORLD_BOUND_CENTER + 4;
            UBOWorldBound.COUNT = _class6.WORLD_BOUND_HALF_EXTENTS + 4;
            UBOWorldBound.SIZE = _class6.COUNT * 4;
            UBOWorldBound.NAME = 'CCWorldBound';
            UBOWorldBound.BINDING = ModelLocalBindings.UBO_LOCAL;
            UBOWorldBound.DESCRIPTOR = new DescriptorSetLayoutBinding(_class6.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX | ShaderStageFlagBit.COMPUTE);
            UBOWorldBound.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class6.BINDING, _class6.NAME, [new Uniform('cc_worldBoundCenter', Type.FLOAT4, 1), new Uniform('cc_worldBoundHalfExtents', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOWorldBound.NAME] = UBOWorldBound.LAYOUT;
            localDescriptorSetLayout.bindings[UBOWorldBound.BINDING] = UBOWorldBound.DESCRIPTOR;
            const INST_MAT_WORLD = 'a_matWorld0';
            const INST_SH = 'a_sh_linear_const_r';
            class UBOLocalBatched {}
            _class7$1 = UBOLocalBatched;
            UBOLocalBatched.BATCHING_COUNT = 10;
            UBOLocalBatched.MAT_WORLDS_OFFSET = 0;
            UBOLocalBatched.COUNT = 16 * _class7$1.BATCHING_COUNT;
            UBOLocalBatched.SIZE = _class7$1.COUNT * 4;
            UBOLocalBatched.NAME = 'CCLocalBatched';
            UBOLocalBatched.BINDING = ModelLocalBindings.UBO_LOCAL;
            UBOLocalBatched.DESCRIPTOR = new DescriptorSetLayoutBinding(_class7$1.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX | ShaderStageFlagBit.COMPUTE);
            UBOLocalBatched.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class7$1.BINDING, _class7$1.NAME, [new Uniform('cc_matWorlds', Type.MAT4, _class7$1.BATCHING_COUNT)], 1);
            localDescriptorSetLayout.layouts[UBOLocalBatched.NAME] = UBOLocalBatched.LAYOUT;
            localDescriptorSetLayout.bindings[UBOLocalBatched.BINDING] = UBOLocalBatched.DESCRIPTOR;
            class UBOForwardLight {}
            _class8$1 = UBOForwardLight;
            UBOForwardLight.LIGHTS_PER_PASS = 1;
            UBOForwardLight.LIGHT_POS_OFFSET = 0;
            UBOForwardLight.LIGHT_COLOR_OFFSET = _class8$1.LIGHT_POS_OFFSET + _class8$1.LIGHTS_PER_PASS * 4;
            UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET = _class8$1.LIGHT_COLOR_OFFSET + _class8$1.LIGHTS_PER_PASS * 4;
            UBOForwardLight.LIGHT_DIR_OFFSET = _class8$1.LIGHT_SIZE_RANGE_ANGLE_OFFSET + _class8$1.LIGHTS_PER_PASS * 4;
            UBOForwardLight.LIGHT_BOUNDING_SIZE_VS_OFFSET = _class8$1.LIGHT_DIR_OFFSET + _class8$1.LIGHTS_PER_PASS * 4;
            UBOForwardLight.COUNT = _class8$1.LIGHT_BOUNDING_SIZE_VS_OFFSET + _class8$1.LIGHTS_PER_PASS * 4;
            UBOForwardLight.SIZE = _class8$1.COUNT * 4;
            UBOForwardLight.NAME = 'CCForwardLight';
            UBOForwardLight.BINDING = ModelLocalBindings.UBO_FORWARD_LIGHTS;
            UBOForwardLight.DESCRIPTOR = new DescriptorSetLayoutBinding(_class8$1.BINDING, DescriptorType.DYNAMIC_UNIFORM_BUFFER, 1, ShaderStageFlagBit.FRAGMENT);
            UBOForwardLight.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class8$1.BINDING, _class8$1.NAME, [new Uniform('cc_lightPos', Type.FLOAT4, _class8$1.LIGHTS_PER_PASS), new Uniform('cc_lightColor', Type.FLOAT4, _class8$1.LIGHTS_PER_PASS), new Uniform('cc_lightSizeRangeAngle', Type.FLOAT4, _class8$1.LIGHTS_PER_PASS), new Uniform('cc_lightDir', Type.FLOAT4, _class8$1.LIGHTS_PER_PASS), new Uniform('cc_lightBoundingSizeVS', Type.FLOAT4, _class8$1.LIGHTS_PER_PASS)], 1);
            localDescriptorSetLayout.layouts[UBOForwardLight.NAME] = UBOForwardLight.LAYOUT;
            localDescriptorSetLayout.bindings[UBOForwardLight.BINDING] = UBOForwardLight.DESCRIPTOR;
            class UBODeferredLight {}
            UBODeferredLight.LIGHTS_PER_PASS = 10;
            const JOINT_UNIFORM_CAPACITY = 30;
            class UBOSkinningTexture {}
            _class10$1 = UBOSkinningTexture;
            UBOSkinningTexture.JOINTS_TEXTURE_INFO_OFFSET = 0;
            UBOSkinningTexture.COUNT = _class10$1.JOINTS_TEXTURE_INFO_OFFSET + 4;
            UBOSkinningTexture.SIZE = _class10$1.COUNT * 4;
            UBOSkinningTexture.NAME = 'CCSkinningTexture';
            UBOSkinningTexture.BINDING = ModelLocalBindings.UBO_SKINNING_TEXTURE;
            UBOSkinningTexture.DESCRIPTOR = new DescriptorSetLayoutBinding(_class10$1.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOSkinningTexture.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class10$1.BINDING, _class10$1.NAME, [new Uniform('cc_jointTextureInfo', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOSkinningTexture.NAME] = UBOSkinningTexture.LAYOUT;
            localDescriptorSetLayout.bindings[UBOSkinningTexture.BINDING] = UBOSkinningTexture.DESCRIPTOR;
            class UBOSkinningAnimation {} exports('aV', UBOSkinningAnimation);
            _class11$1 = UBOSkinningAnimation;
            UBOSkinningAnimation.JOINTS_ANIM_INFO_OFFSET = 0;
            UBOSkinningAnimation.COUNT = _class11$1.JOINTS_ANIM_INFO_OFFSET + 4;
            UBOSkinningAnimation.SIZE = _class11$1.COUNT * 4;
            UBOSkinningAnimation.NAME = 'CCSkinningAnimation';
            UBOSkinningAnimation.BINDING = ModelLocalBindings.UBO_SKINNING_ANIMATION;
            UBOSkinningAnimation.DESCRIPTOR = new DescriptorSetLayoutBinding(_class11$1.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOSkinningAnimation.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class11$1.BINDING, _class11$1.NAME, [new Uniform('cc_jointAnimInfo', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOSkinningAnimation.NAME] = UBOSkinningAnimation.LAYOUT;
            localDescriptorSetLayout.bindings[UBOSkinningAnimation.BINDING] = UBOSkinningAnimation.DESCRIPTOR;
            const INST_JOINT_ANIM_INFO = 'a_jointAnimInfo';
            class UBOSkinning {
              static get JOINT_UNIFORM_CAPACITY() {
                return UBOSkinning._jointUniformCapacity;
              }
              static get COUNT() {
                return UBOSkinning._count;
              }
              static get SIZE() {
                return UBOSkinning._size;
              }
              static initLayout(capacity) {
                UBOSkinning._jointUniformCapacity = capacity;
                UBOSkinning._count = capacity * 12;
                UBOSkinning._size = UBOSkinning._count * 4;
                UBOSkinning.LAYOUT.members[0].count = capacity * 3;
              }
            }
            _class12 = UBOSkinning;
            UBOSkinning._jointUniformCapacity = 0;
            UBOSkinning._count = 0;
            UBOSkinning._size = 0;
            UBOSkinning.NAME = 'CCSkinning';
            UBOSkinning.BINDING = ModelLocalBindings.UBO_SKINNING_TEXTURE;
            UBOSkinning.DESCRIPTOR = new DescriptorSetLayoutBinding(_class12.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOSkinning.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class12.BINDING, _class12.NAME, [new Uniform('cc_joints', Type.FLOAT4, 1)], 1);
            function localDescriptorSetLayout_ResizeMaxJoints(maxCount) {
              UBOSkinning.initLayout(maxCount);
              localDescriptorSetLayout.layouts[UBOSkinning.NAME] = UBOSkinning.LAYOUT;
              localDescriptorSetLayout.bindings[UBOSkinning.BINDING] = UBOSkinning.DESCRIPTOR;
            }
            class UBOMorph {}
            _class13$1 = UBOMorph;
            UBOMorph.MAX_MORPH_TARGET_COUNT = 60;
            UBOMorph.OFFSET_OF_WEIGHTS = 0;
            UBOMorph.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH = 4 * _class13$1.MAX_MORPH_TARGET_COUNT;
            UBOMorph.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT = _class13$1.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH + 4;
            UBOMorph.OFFSET_OF_VERTICES_COUNT = _class13$1.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT + 4;
            UBOMorph.COUNT_BASE_4_BYTES = 4 * Math.ceil(_class13$1.MAX_MORPH_TARGET_COUNT / 4) + 4;
            UBOMorph.SIZE = _class13$1.COUNT_BASE_4_BYTES * 4;
            UBOMorph.NAME = 'CCMorph';
            UBOMorph.BINDING = ModelLocalBindings.UBO_MORPH;
            UBOMorph.DESCRIPTOR = new DescriptorSetLayoutBinding(_class13$1.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOMorph.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class13$1.BINDING, _class13$1.NAME, [new Uniform('cc_displacementWeights', Type.FLOAT4, _class13$1.MAX_MORPH_TARGET_COUNT / 4), new Uniform('cc_displacementTextureInfo', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOMorph.NAME] = UBOMorph.LAYOUT;
            localDescriptorSetLayout.bindings[UBOMorph.BINDING] = UBOMorph.DESCRIPTOR;
            class UBOUILocal {}
            _class14$1 = UBOUILocal;
            UBOUILocal.NAME = 'CCUILocal';
            UBOUILocal.BINDING = ModelLocalBindings.UBO_UI_LOCAL;
            UBOUILocal.DESCRIPTOR = new DescriptorSetLayoutBinding(_class14$1.BINDING, DescriptorType.DYNAMIC_UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOUILocal.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class14$1.BINDING, _class14$1.NAME, [new Uniform('cc_local_data', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOUILocal.NAME] = UBOUILocal.LAYOUT;
            localDescriptorSetLayout.bindings[UBOUILocal.BINDING] = UBOUILocal.DESCRIPTOR;
            class UBOSH {}
            _class15 = UBOSH;
            UBOSH.SH_LINEAR_CONST_R_OFFSET = 0;
            UBOSH.SH_LINEAR_CONST_G_OFFSET = _class15.SH_LINEAR_CONST_R_OFFSET + 4;
            UBOSH.SH_LINEAR_CONST_B_OFFSET = _class15.SH_LINEAR_CONST_G_OFFSET + 4;
            UBOSH.SH_QUADRATIC_R_OFFSET = _class15.SH_LINEAR_CONST_B_OFFSET + 4;
            UBOSH.SH_QUADRATIC_G_OFFSET = _class15.SH_QUADRATIC_R_OFFSET + 4;
            UBOSH.SH_QUADRATIC_B_OFFSET = _class15.SH_QUADRATIC_G_OFFSET + 4;
            UBOSH.SH_QUADRATIC_A_OFFSET = _class15.SH_QUADRATIC_B_OFFSET + 4;
            UBOSH.COUNT = _class15.SH_QUADRATIC_A_OFFSET + 4;
            UBOSH.SIZE = _class15.COUNT * 4;
            UBOSH.NAME = 'CCSH';
            UBOSH.BINDING = ModelLocalBindings.UBO_SH;
            UBOSH.DESCRIPTOR = new DescriptorSetLayoutBinding(_class15.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.FRAGMENT);
            UBOSH.LAYOUT = new UniformBlock(SetIndex.LOCAL, _class15.BINDING, _class15.NAME, [new Uniform('cc_sh_linear_const_r', Type.FLOAT4, 1), new Uniform('cc_sh_linear_const_g', Type.FLOAT4, 1), new Uniform('cc_sh_linear_const_b', Type.FLOAT4, 1), new Uniform('cc_sh_quadratic_r', Type.FLOAT4, 1), new Uniform('cc_sh_quadratic_g', Type.FLOAT4, 1), new Uniform('cc_sh_quadratic_b', Type.FLOAT4, 1), new Uniform('cc_sh_quadratic_a', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOSH.NAME] = UBOSH.LAYOUT;
            localDescriptorSetLayout.bindings[UBOSH.BINDING] = UBOSH.DESCRIPTOR;
            const UNIFORM_JOINT_TEXTURE_NAME = 'cc_jointTexture';
            const UNIFORM_JOINT_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_JOINTS;
            const UNIFORM_JOINT_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_JOINT_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
            const UNIFORM_JOINT_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_JOINT_TEXTURE_BINDING, UNIFORM_JOINT_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_JOINT_TEXTURE_NAME] = UNIFORM_JOINT_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_JOINT_TEXTURE_BINDING] = UNIFORM_JOINT_TEXTURE_DESCRIPTOR;
            const UNIFORM_REALTIME_JOINT_TEXTURE_NAME = 'cc_realtimeJoint';
            const UNIFORM_REALTIME_JOINT_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_JOINTS;
            const UNIFORM_REALTIME_JOINT_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REALTIME_JOINT_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
            const UNIFORM_REALTIME_JOINT_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REALTIME_JOINT_TEXTURE_BINDING, UNIFORM_REALTIME_JOINT_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_REALTIME_JOINT_TEXTURE_NAME] = UNIFORM_REALTIME_JOINT_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_REALTIME_JOINT_TEXTURE_BINDING] = UNIFORM_REALTIME_JOINT_TEXTURE_DESCRIPTOR;
            const UNIFORM_POSITION_MORPH_TEXTURE_NAME = 'cc_PositionDisplacements';
            const UNIFORM_POSITION_MORPH_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_MORPH_POSITION;
            const UNIFORM_POSITION_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_POSITION_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
            const UNIFORM_POSITION_MORPH_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_POSITION_MORPH_TEXTURE_BINDING, UNIFORM_POSITION_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_POSITION_MORPH_TEXTURE_NAME] = UNIFORM_POSITION_MORPH_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_POSITION_MORPH_TEXTURE_BINDING] = UNIFORM_POSITION_MORPH_TEXTURE_DESCRIPTOR;
            const UNIFORM_NORMAL_MORPH_TEXTURE_NAME = 'cc_NormalDisplacements';
            const UNIFORM_NORMAL_MORPH_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_MORPH_NORMAL;
            const UNIFORM_NORMAL_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_NORMAL_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
            const UNIFORM_NORMAL_MORPH_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_NORMAL_MORPH_TEXTURE_BINDING, UNIFORM_NORMAL_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_NORMAL_MORPH_TEXTURE_NAME] = UNIFORM_NORMAL_MORPH_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_NORMAL_MORPH_TEXTURE_BINDING] = UNIFORM_NORMAL_MORPH_TEXTURE_DESCRIPTOR;
            const UNIFORM_TANGENT_MORPH_TEXTURE_NAME = 'cc_TangentDisplacements';
            const UNIFORM_TANGENT_MORPH_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_MORPH_TANGENT;
            const UNIFORM_TANGENT_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_TANGENT_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.VERTEX);
            const UNIFORM_TANGENT_MORPH_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_TANGENT_MORPH_TEXTURE_BINDING, UNIFORM_TANGENT_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_TANGENT_MORPH_TEXTURE_NAME] = UNIFORM_TANGENT_MORPH_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_TANGENT_MORPH_TEXTURE_BINDING] = UNIFORM_TANGENT_MORPH_TEXTURE_DESCRIPTOR;
            const UNIFORM_LIGHTMAP_TEXTURE_NAME = 'cc_lightingMap';
            const UNIFORM_LIGHTMAP_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_LIGHTMAP;
            const UNIFORM_LIGHTMAP_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_LIGHTMAP_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_LIGHTMAP_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_LIGHTMAP_TEXTURE_BINDING, UNIFORM_LIGHTMAP_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_LIGHTMAP_TEXTURE_NAME] = UNIFORM_LIGHTMAP_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_LIGHTMAP_TEXTURE_BINDING] = UNIFORM_LIGHTMAP_TEXTURE_DESCRIPTOR;
            const UNIFORM_SPRITE_TEXTURE_NAME = 'cc_spriteTexture';
            const UNIFORM_SPRITE_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_SPRITE;
            const UNIFORM_SPRITE_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SPRITE_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_SPRITE_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_SPRITE_TEXTURE_BINDING, UNIFORM_SPRITE_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_SPRITE_TEXTURE_NAME] = UNIFORM_SPRITE_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_SPRITE_TEXTURE_BINDING] = UNIFORM_SPRITE_TEXTURE_DESCRIPTOR;
            const UNIFORM_REFLECTION_TEXTURE_NAME = 'cc_reflectionTexture';
            const UNIFORM_REFLECTION_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_REFLECTION;
            const UNIFORM_REFLECTION_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_REFLECTION_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_TEXTURE_BINDING, UNIFORM_REFLECTION_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_TEXTURE_NAME] = UNIFORM_REFLECTION_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_TEXTURE_BINDING] = UNIFORM_REFLECTION_TEXTURE_DESCRIPTOR;
            const UNIFORM_REFLECTION_STORAGE_NAME = 'cc_reflectionStorage';
            const UNIFORM_REFLECTION_STORAGE_BINDING = ModelLocalBindings.STORAGE_REFLECTION;
            const UNIFORM_REFLECTION_STORAGE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_STORAGE_BINDING, DescriptorType.STORAGE_IMAGE, 1, ShaderStageFlagBit.COMPUTE);
            const UNIFORM_REFLECTION_STORAGE_LAYOUT = new UniformStorageImage(SetIndex.LOCAL, UNIFORM_REFLECTION_STORAGE_BINDING, UNIFORM_REFLECTION_STORAGE_NAME, Type.IMAGE2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_STORAGE_NAME] = UNIFORM_REFLECTION_STORAGE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_STORAGE_BINDING] = UNIFORM_REFLECTION_STORAGE_DESCRIPTOR;
            const UNIFORM_REFLECTION_PROBE_CUBEMAP_NAME = 'cc_reflectionProbeCubemap';
            const UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING = ModelLocalBindings.SAMPLER_REFLECTION_PROBE_CUBE;
            const UNIFORM_REFLECTION_PROBE_CUBEMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_REFLECTION_PROBE_CUBEMAP_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_CUBEMAP_NAME, Type.SAMPLER_CUBE, 1);
            localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_PROBE_CUBEMAP_NAME] = UNIFORM_REFLECTION_PROBE_CUBEMAP_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING] = UNIFORM_REFLECTION_PROBE_CUBEMAP_DESCRIPTOR;
            const UNIFORM_REFLECTION_PROBE_TEXTURE_NAME = 'cc_reflectionProbePlanarMap';
            const UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_REFLECTION_PROBE_PLANAR;
            const UNIFORM_REFLECTION_PROBE_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_REFLECTION_PROBE_TEXTURE_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING, UNIFORM_REFLECTION_PROBE_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_PROBE_TEXTURE_NAME] = UNIFORM_REFLECTION_PROBE_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING] = UNIFORM_REFLECTION_PROBE_TEXTURE_DESCRIPTOR;
            const UNIFORM_REFLECTION_PROBE_DATA_MAP_NAME = 'cc_reflectionProbeDataMap';
            const UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING = ModelLocalBindings.SAMPLER_REFLECTION_PROBE_DATA_MAP;
            const UNIFORM_REFLECTION_PROBE_DATA_MAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_REFLECTION_PROBE_DATA_MAP_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING, UNIFORM_REFLECTION_PROBE_DATA_MAP_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_PROBE_DATA_MAP_NAME] = UNIFORM_REFLECTION_PROBE_DATA_MAP_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING] = UNIFORM_REFLECTION_PROBE_DATA_MAP_DESCRIPTOR;
            const UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_NAME = 'cc_reflectionProbeBlendCubemap';
            const UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING = ModelLocalBindings.SAMPLER_REFLECTION_PROBE_BLEND_CUBE;
            const UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING, DescriptorType.SAMPLER_TEXTURE, 1, ShaderStageFlagBit.FRAGMENT);
            const UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_LAYOUT = new UniformSamplerTexture(SetIndex.LOCAL, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_NAME, Type.SAMPLER_CUBE, 1);
            localDescriptorSetLayout.layouts[UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_NAME] = UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING] = UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_DESCRIPTOR;
            const CAMERA_DEFAULT_MASK = exports('aN', Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.GIZMOS, Layers.BitMask.EDITOR, Layers.BitMask.SCENE_GIZMO, Layers.BitMask.PROFILER]));
            const CAMERA_EDITOR_MASK = Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.PROFILER]);
            const MODEL_ALWAYS_MASK = Layers.Enum.ALL;
            function supportsR16HalfFloatTexture(device) {
              return (device.getFormatFeatures(Format.R16F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE);
            }
            function supportsR32FloatTexture(device) {
              return (device.getFormatFeatures(Format.R32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) && !(device.gfxAPI === API.WEBGL);
            }
            function supportsRGBA16HalfFloatTexture(device) {
              return (device.getFormatFeatures(Format.RGBA16F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) && !(device.gfxAPI === API.WEBGL);
            }
            function supportsRGBA32FloatTexture(device) {
              return (device.getFormatFeatures(Format.RGBA32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) && !(device.gfxAPI === API.WEBGL);
            }
            function isEnableEffect() {
              return !!(legacyCC.rendering && legacyCC.rendering.enableEffectImport);
            }

            var define = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PIPELINE_FLOW_MAIN: PIPELINE_FLOW_MAIN,
                PIPELINE_FLOW_FORWARD: PIPELINE_FLOW_FORWARD,
                PIPELINE_FLOW_SHADOW: PIPELINE_FLOW_SHADOW,
                PIPELINE_FLOW_SMAA: PIPELINE_FLOW_SMAA,
                PIPELINE_FLOW_TONEMAP: PIPELINE_FLOW_TONEMAP,
                get RenderPassStage () { return RenderPassStage; },
                get RenderPriority () { return RenderPriority; },
                globalDescriptorSetLayout: globalDescriptorSetLayout,
                localDescriptorSetLayout: localDescriptorSetLayout,
                get PipelineGlobalBindings () { return PipelineGlobalBindings; },
                get ModelLocalBindings () { return ModelLocalBindings; },
                get SetIndex () { return SetIndex; },
                bindingMappingInfo: bindingMappingInfo,
                UBOGlobal: UBOGlobal,
                UBOCamera: UBOCamera,
                UBOShadow: UBOShadow,
                UBOCSM: UBOCSM,
                UNIFORM_SHADOWMAP_BINDING: UNIFORM_SHADOWMAP_BINDING,
                UNIFORM_ENVIRONMENT_BINDING: UNIFORM_ENVIRONMENT_BINDING,
                UNIFORM_DIFFUSEMAP_BINDING: UNIFORM_DIFFUSEMAP_BINDING,
                UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING: UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING,
                UBOLocal: UBOLocal,
                UBOWorldBound: UBOWorldBound,
                INST_MAT_WORLD: INST_MAT_WORLD,
                INST_SH: INST_SH,
                UBOLocalBatched: UBOLocalBatched,
                UBOForwardLight: UBOForwardLight,
                UBODeferredLight: UBODeferredLight,
                JOINT_UNIFORM_CAPACITY: JOINT_UNIFORM_CAPACITY,
                UBOSkinningTexture: UBOSkinningTexture,
                UBOSkinningAnimation: UBOSkinningAnimation,
                INST_JOINT_ANIM_INFO: INST_JOINT_ANIM_INFO,
                UBOSkinning: UBOSkinning,
                localDescriptorSetLayout_ResizeMaxJoints: localDescriptorSetLayout_ResizeMaxJoints,
                UBOMorph: UBOMorph,
                UBOUILocal: UBOUILocal,
                UBOSH: UBOSH,
                UNIFORM_JOINT_TEXTURE_BINDING: UNIFORM_JOINT_TEXTURE_BINDING,
                UNIFORM_REALTIME_JOINT_TEXTURE_BINDING: UNIFORM_REALTIME_JOINT_TEXTURE_BINDING,
                UNIFORM_POSITION_MORPH_TEXTURE_BINDING: UNIFORM_POSITION_MORPH_TEXTURE_BINDING,
                UNIFORM_NORMAL_MORPH_TEXTURE_BINDING: UNIFORM_NORMAL_MORPH_TEXTURE_BINDING,
                UNIFORM_TANGENT_MORPH_TEXTURE_BINDING: UNIFORM_TANGENT_MORPH_TEXTURE_BINDING,
                UNIFORM_LIGHTMAP_TEXTURE_BINDING: UNIFORM_LIGHTMAP_TEXTURE_BINDING,
                UNIFORM_SPRITE_TEXTURE_BINDING: UNIFORM_SPRITE_TEXTURE_BINDING,
                UNIFORM_REFLECTION_TEXTURE_BINDING: UNIFORM_REFLECTION_TEXTURE_BINDING,
                UNIFORM_REFLECTION_STORAGE_BINDING: UNIFORM_REFLECTION_STORAGE_BINDING,
                UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING: UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING,
                UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING: UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING,
                UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING: UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING,
                UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING: UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING,
                CAMERA_DEFAULT_MASK: CAMERA_DEFAULT_MASK,
                CAMERA_EDITOR_MASK: CAMERA_EDITOR_MASK,
                MODEL_ALWAYS_MASK: MODEL_ALWAYS_MASK,
                supportsR16HalfFloatTexture: supportsR16HalfFloatTexture,
                supportsR32FloatTexture: supportsR32FloatTexture,
                supportsRGBA16HalfFloatTexture: supportsRGBA16HalfFloatTexture,
                supportsRGBA32FloatTexture: supportsRGBA32FloatTexture,
                isEnableEffect: isEnableEffect
            });
            exports('O', define);

            let NodeSpace; exports('Y', NodeSpace);
            (function (NodeSpace) {
              NodeSpace[NodeSpace["LOCAL"] = 0] = "LOCAL";
              NodeSpace[NodeSpace["WORLD"] = 1] = "WORLD";
            })(NodeSpace || (exports('Y', NodeSpace = {})));
            let TransformBit; exports('Z', TransformBit);
            (function (TransformBit) {
              TransformBit[TransformBit["NONE"] = 0] = "NONE";
              TransformBit[TransformBit["POSITION"] = 1] = "POSITION";
              TransformBit[TransformBit["ROTATION"] = 2] = "ROTATION";
              TransformBit[TransformBit["SCALE"] = 4] = "SCALE";
              TransformBit[TransformBit["RS"] = TransformBit.ROTATION | TransformBit.SCALE] = "RS";
              TransformBit[TransformBit["TRS"] = TransformBit.POSITION | TransformBit.ROTATION | TransformBit.SCALE] = "TRS";
              TransformBit[TransformBit["TRS_MASK"] = ~TransformBit.TRS] = "TRS_MASK";
            })(TransformBit || (exports('Z', TransformBit = {})));
            legacyCC.internal.TransformBit = TransformBit;
            const MobilityMode = exports('_', Enum({
              Static: 0,
              Stationary: 1,
              Movable: 2
            }));

            const BufferAsset = exports('ai', jsb.BufferAsset);
            legacyCC.BufferAsset = jsb.BufferAsset;
            patch_cc_BufferAsset({
              BufferAsset
            });

            var _dec$5, _class$5, _class2$4, _initializer$4;
            let TextAsset = exports('aj', (_dec$5 = ccclass('cc.TextAsset'), _dec$5(_class$5 = (_class2$4 = class TextAsset extends Asset {
              constructor(...args) {
                super(...args);
                this.text = _initializer$4 && _initializer$4();
              }
              toString() {
                return this.text;
              }
            }, (_initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "text", [serializable], function () {
              return '';
            })), _class2$4)) || _class$5));
            legacyCC.TextAsset = TextAsset;

            var _dec$4, _class$4, _class2$3, _initializer$3;
            let JsonAsset = exports('ak', (_dec$4 = ccclass('cc.JsonAsset'), _dec$4(_class$4 = (_class2$3 = class JsonAsset extends Asset {
              constructor(...args) {
                super(...args);
                this.json = _initializer$3 && _initializer$3();
              }
            }, (_initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "json", [serializable], function () {
              return null;
            })), _class2$3)) || _class$4));
            legacyCC.JsonAsset = JsonAsset;

            const ImageAsset$1 = exports('al', jsb.ImageAsset);
            const jsbWindow$1 = jsb.window;
            const extnames = ['.png', '.jpg', '.jpeg', '.bmp', '.webp', '.pvr', '.pkm', '.astc'];
            function isImageBitmap(imageSource) {
              return !!(sys.hasFeature(sys.Feature.IMAGE_BITMAP) && imageSource instanceof ImageBitmap);
            }
            function isNativeImage(imageSource) {
              if (imageSource._compressed === true) {
                return false;
              }
              return imageSource instanceof jsbWindow$1.HTMLImageElement || imageSource instanceof jsbWindow$1.HTMLCanvasElement || isImageBitmap(imageSource);
            }
            const imageAssetProto = ImageAsset$1.prototype;
            imageAssetProto._ctor = function (nativeAsset) {
              jsb.Asset.prototype._ctor.apply(this, arguments);
              this._width = 0;
              this._height = 0;
              this._nativeData = {
                _data: null,
                width: 0,
                height: 0,
                format: 0,
                _compressed: false,
                mipmapLevelDataSize: []
              };
              if (nativeAsset !== undefined) {
                this.reset(nativeAsset);
              }
            };
            Object.defineProperty(imageAssetProto, '_nativeAsset', {
              configurable: true,
              enumerable: true,
              get() {
                return this._nativeData;
              },
              set(value) {
                if (!(value instanceof jsbWindow$1.HTMLElement) && !isImageBitmap(value)) {
                  value.format = value.format || this.format;
                }
                this.reset(value);
              }
            });
            Object.defineProperty(imageAssetProto, 'data', {
              configurable: true,
              enumerable: true,
              get() {
                if (this._nativeData && isNativeImage(this._nativeData)) {
                  return this._nativeData;
                }
                return this._nativeData && this._nativeData._data;
              }
            });
            imageAssetProto._setRawAsset = function (filename, inLibrary = true) {
              if (inLibrary !== false) {
                this._native = filename || '';
              } else {
                this._native = `/${filename}`;
              }
            };
            imageAssetProto.reset = function (data) {
              this._nativeData = data;
              if (!(data instanceof jsbWindow$1.HTMLElement)) {
                if (data.format !== undefined) {
                  this.format = data.format;
                }
              }
              this._syncDataToNative();
            };
            const superDestroy = jsb.Asset.prototype.destroy;
            imageAssetProto.destroy = function () {
              if (this.data && this.data instanceof jsbWindow$1.HTMLImageElement) {
                this.data.src = '';
                this._setRawAsset('');
                this.data.destroy();
              } else if (isImageBitmap(this.data)) {
                this.data.close && this.data.close();
              }
              return superDestroy.call(this);
            };
            Object.defineProperty(imageAssetProto, 'width', {
              configurable: true,
              enumerable: true,
              get() {
                return this._nativeData.width || this._width;
              }
            });
            Object.defineProperty(imageAssetProto, 'height', {
              configurable: true,
              enumerable: true,
              get() {
                return this._nativeData.height || this._height;
              }
            });
            imageAssetProto._syncDataToNative = function () {
              const data = this._nativeData;
              this._width = data.width;
              this._height = data.height;
              this.setWidth(this._width);
              this.setHeight(this._height);
              this.url = this.nativeUrl;
              if (data instanceof jsbWindow$1.HTMLCanvasElement) {
                this.setData(data._data.data);
              } else if (data instanceof jsbWindow$1.HTMLImageElement) {
                this.setData(data._data);
                if (data._mipmapLevelDataSize) {
                  this.setMipmapLevelDataSize(data._mipmapLevelDataSize);
                }
              } else {
                if (!this._nativeData._data) {
                  console.error(`[ImageAsset] setData bad argument ${this._nativeData}`);
                  return;
                }
                this.setData(this._nativeData._data);
                if (this._nativeData.mipmapLevelDataSize) {
                  this.setMipmapLevelDataSize(this._nativeData.mipmapLevelDataSize);
                }
              }
            };
            imageAssetProto._serialize = function () {
            };
            imageAssetProto._deserialize = function (data) {
              let fmtStr = '';
              if (typeof data === 'string') {
                fmtStr = data;
              } else {
                this._width = data.w;
                this._height = data.h;
                fmtStr = data.fmt;
              }
              const device = deviceManager.gfxDevice;
              const extensionIDs = fmtStr.split('_');
              let preferedExtensionIndex = Number.MAX_VALUE;
              let format = this.format;
              let ext = '';
              const SupportTextureFormats = macro.SUPPORT_TEXTURE_FORMATS;
              for (const extensionID of extensionIDs) {
                const extFormat = extensionID.split('@');
                const i = parseInt(extFormat[0], undefined);
                const tmpExt = extnames[i] || extFormat[0];
                const index = SupportTextureFormats.indexOf(tmpExt);
                if (index !== -1 && index < preferedExtensionIndex) {
                  const fmt = extFormat[1] ? parseInt(extFormat[1]) : this.format;
                  if (tmpExt === '.astc' && (!device || !(device.getFormatFeatures(Format.ASTC_RGBA_4X4) & FormatFeatureBit.SAMPLED_TEXTURE))) {
                    continue;
                  } else if (tmpExt === '.pvr' && (!device || !(device.getFormatFeatures(Format.PVRTC_RGBA4) & FormatFeatureBit.SAMPLED_TEXTURE))) {
                    continue;
                  } else if ((fmt === PixelFormat.RGB_ETC1 || fmt === PixelFormat.RGBA_ETC1) && (!device || !(device.getFormatFeatures(Format.ETC_RGB8) & FormatFeatureBit.SAMPLED_TEXTURE))) {
                    continue;
                  } else if ((fmt === PixelFormat.RGB_ETC2 || fmt === PixelFormat.RGBA_ETC2) && (!device || !(device.getFormatFeatures(Format.ETC2_RGB8) & FormatFeatureBit.SAMPLED_TEXTURE))) {
                    continue;
                  } else if (tmpExt === '.webp' && !sys.hasFeature(sys.Feature.WEBP)) {
                    continue;
                  }
                  preferedExtensionIndex = index;
                  ext = tmpExt;
                  format = fmt;
                }
              }
              if (ext) {
                this._setRawAsset(ext);
                this.format = format;
              } else {
                warnID(3121);
              }
            };
            legacyCC.ImageAsset = jsb.ImageAsset;
            patch_cc_ImageAsset({
              ImageAsset: ImageAsset$1
            });

            var _dec$3, _class$3, _class2$2, _initializer$2;
            let MissingScript = exports('af', (_dec$3 = ccclass('cc.MissingScript'), _dec$3(_class$3 = (_class2$2 = class MissingScript extends Component {
              static safeFindClass(id) {
                const cls = getClassById(id);
                if (cls) {
                  return cls;
                }
                legacyCC.deserialize.reportMissingClass(id);
                return undefined;
              }
              constructor() {
                super();
                this._$erialized = _initializer$2 && _initializer$2();
              }
              onLoad() {
                warnID(4600, this.node.name);
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "_$erialized", [serializable, editorOnly], function () {
              return null;
            })), _class2$2)) || _class$3));
            legacyCC._MissingScript = MissingScript;
            try {
              const props = MissingScript.__values__;
              if (props.length === 0 || props[props.length - 1] !== '_$erialized') {
                error(`The '_$erialized' prop in MissingScript is missing. Please contact jare.`);
                error(`    Error props: ['${props}']`);
              }
            } catch (e) {
              error(`Error when checking MissingScript 5, ${e}`);
            }

            const VERSION = 1;
            const MAGIC = 0x4E4F4343;
            const CHUNK_ALIGN_AS = 8;
            class CCON {
              constructor(document, chunks) {
                this._document = void 0;
                this._chunks = void 0;
                this._document = document;
                this._chunks = chunks;
              }
              get document() {
                return this._document;
              }
              get chunks() {
                return this._chunks;
              }
            }
            function parseCCONJson(json) {
              const cconPreface = json;
              return {
                chunks: cconPreface.chunks,
                document: cconPreface.document
              };
            }
            function decodeCCONBinary(bytes) {
              if (bytes.length < 16) {
                throw new InvalidCCONError(getError(13102));
              }
              const dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
              const magic = dataView.getUint32(0, true);
              if (magic !== MAGIC) {
                throw new InvalidCCONError(getError(13100));
              }
              const version = dataView.getUint32(4, true);
              if (version !== VERSION) {
                throw new InvalidCCONError(getError(13101, version));
              }
              const dataByteLength = dataView.getUint32(8, true);
              if (dataByteLength !== dataView.byteLength) {
                throw new InvalidCCONError(getError(13102));
              }
              let chunksStart = 12;
              const jsonDataLength = dataView.getUint32(chunksStart, true);
              chunksStart += 4;
              const jsonData = new Uint8Array(dataView.buffer, chunksStart + dataView.byteOffset, jsonDataLength);
              chunksStart += jsonDataLength;
              const jsonString = decodeJson(jsonData);
              let json;
              try {
                json = JSON.parse(jsonString);
              } catch (err) {
                throw new InvalidCCONError(err);
              }
              const chunks = [];
              while (chunksStart < dataView.byteLength) {
                if (chunksStart % CHUNK_ALIGN_AS !== 0) {
                  const padding = CHUNK_ALIGN_AS - chunksStart % CHUNK_ALIGN_AS;
                  chunksStart += padding;
                }
                const chunkDataLength = dataView.getUint32(chunksStart, true);
                chunksStart += 4;
                chunks.push(new Uint8Array(dataView.buffer, chunksStart + dataView.byteOffset, chunkDataLength));
                chunksStart += chunkDataLength;
              }
              if (chunksStart !== dataView.byteLength) {
                throw new InvalidCCONError(getError(13102));
              }
              return new CCON(json, chunks);
            }
            function decodeJson(data) {
              if (typeof TextDecoder !== 'undefined') {
                return new TextDecoder().decode(data);
              } else if ('Buffer' in globalThis) {
                const {
                  Buffer
                } = globalThis;
                return Buffer.from(data.buffer, data.byteOffset, data.byteLength).toString();
              } else {
                throw new Error(getError(13104));
              }
            }
            class InvalidCCONError extends Error {}
            legacyCC.internal.parseCCONJson = parseCCONJson;
            legacyCC.internal.decodeCCONBinary = decodeCCONBinary;
            legacyCC.internal.CCON = CCON;

            function compileObjectTypeJit(sources, defaultValue, accessorToSet, propNameLiteralToSet, assumeHavePropIfIsValue) {
              if (defaultValue instanceof legacyCC.ValueType) {
                if (!assumeHavePropIfIsValue) {
                  sources.push('if(prop){');
                }
                const ctorCode = getClassName(defaultValue);
                sources.push(`s._deserializeFastDefinedObject(o${accessorToSet},prop,${ctorCode});`);
                if (!assumeHavePropIfIsValue) {
                  sources.push(`}else o${accessorToSet}=null;`);
                }
              } else {
                sources.push(`
if (prop) {
    s._deserializeAndAssignField(o, prop, ${propNameLiteralToSet});
} else {
    o${accessorToSet}=null;
}
`);
              }
            }
            const compileDeserialize = compileDeserializeJIT ;
            const DELIMITER = CCClass.Attr.DELIMETER;
            const POSTFIX_TYPE = `${DELIMITER}type`;
            const POSTFIX_EDITOR_ONLY = `${DELIMITER}editorOnly`;
            const POSTFIX_DEFAULT = `${DELIMITER}default`;
            const POSTFIX_FORMERLY_SERIALIZED_AS = `${DELIMITER}formerlySerializedAs`;
            function compileDeserializeJIT(self, klass) {
              const attrs = CCClass.Attr.getClassAttrs(klass);
              const props = klass.__values__;
              const sources = ['var prop;'];
              const fastMode = canBeDeserializedInFastMode(klass);
              for (let p = 0; p < props.length; p++) {
                const propName = props[p];
                if (attrs[propName + POSTFIX_EDITOR_ONLY]) {
                  continue;
                }
                let accessorToSet;
                let propNameLiteralToSet;
                if (CCClass.IDENTIFIER_RE.test(propName)) {
                  propNameLiteralToSet = `"${propName}"`;
                  accessorToSet = `.${propName}`;
                } else {
                  propNameLiteralToSet = CCClass.escapeForJS(propName);
                  accessorToSet = `[${propNameLiteralToSet}]`;
                }
                let accessorToGet = accessorToSet;
                if (attrs[propName + POSTFIX_FORMERLY_SERIALIZED_AS]) {
                  const propNameToRead = attrs[propName + POSTFIX_FORMERLY_SERIALIZED_AS];
                  if (CCClass.IDENTIFIER_RE.test(propNameToRead)) {
                    accessorToGet = `.${propNameToRead}`;
                  } else {
                    accessorToGet = `[${CCClass.escapeForJS(propNameToRead)}]`;
                  }
                }
                sources.push(`prop=d${accessorToGet};`);
                sources.push(`if(typeof ${'(prop)' }!=="undefined"){`);
                const defaultValue = CCClass.getDefault(attrs[propName + POSTFIX_DEFAULT]);
                const userType = attrs[propName + POSTFIX_TYPE];
                if (fastMode && (defaultValue !== undefined || userType)) {
                  const isPrimitiveTypeInFastMode = isPrimitivePropertyByDefaultOrType(defaultValue, userType);
                  if (isPrimitiveTypeInFastMode) {
                    sources.push(`o${accessorToSet}=prop;`);
                  } else {
                    compileObjectTypeJit(sources, defaultValue, accessorToSet, propNameLiteralToSet, true);
                  }
                } else {
                  sources.push(`${`if(typeof ${'(prop)' }!=="object"){` + 'o'}${accessorToSet}=prop;` + `}else{`);
                  compileObjectTypeJit(sources, defaultValue, accessorToSet, propNameLiteralToSet, false);
                  sources.push('}');
                }
                sources.push('}');
              }
              if (isChildClassOf(klass, legacyCC.Node) || isChildClassOf(klass, legacyCC.Component)) {
                {
                  const mayUsedInPersistRoot = isChildClassOf(klass, legacyCC.Node);
                  if (mayUsedInPersistRoot) {
                    sources.push('d._id&&(o._id=d._id);');
                  }
                }
              }
              if (props[props.length - 1] === '_$erialized') {
                sources.push('o._$erialized=JSON.parse(JSON.stringify(d));');
                sources.push('s._fillPlainObject(o._$erialized,d);');
              }
              return Function('s', 'o', 'd', 'k', sources.join(''));
            }
            function canBeDeserializedInFastMode(klass) {
              return BUILTIN_CLASSID_RE.test(getClassId(klass));
            }
            function isPrimitivePropertyByDefaultOrType(defaultValue, userType) {
              if (defaultValue === undefined) {
                return userType instanceof CCClass.Attr.PrimitiveType || userType === ENUM_TAG || userType === BITMASK_TAG;
              } else {
                const defaultType = typeof defaultValue;
                return defaultType === 'string' || defaultType === 'number' || defaultType === 'boolean';
              }
            }
            class DeserializerPool extends Pool {
              constructor() {
                super(deserializer => {
                  deserializer.clear();
                }, 1);
              }
            }
            DeserializerPool.prototype.get = function (details, classFinder, reportMissingClass, customEnv, ignoreEditorOnly) {
              const cache = this._get();
              if (cache) {
                cache.reset(details, classFinder, reportMissingClass, customEnv, ignoreEditorOnly);
                return cache;
              } else {
                return new _Deserializer(details, classFinder, reportMissingClass, customEnv, ignoreEditorOnly);
              }
            };
            class _Deserializer {
              get ignoreEditorOnly() {
                return this._ignoreEditorOnly;
              }
              constructor(result, classFinder, reportMissingClass, customEnv, ignoreEditorOnly) {
                this.deserializedList = void 0;
                this.deserializedData = void 0;
                this._ignoreEditorOnly = void 0;
                this.result = result;
                this.customEnv = customEnv;
                this.deserializedList = [];
                this.deserializedData = null;
                this._classFinder = classFinder;
                this._reportMissingClass = reportMissingClass;
                this._onDereferenced = classFinder === null || classFinder === void 0 ? void 0 : classFinder.onDereferenced;
                {
                  this._ignoreEditorOnly = ignoreEditorOnly;
                }
              }
              reset(result, classFinder, reportMissingClass, customEnv, ignoreEditorOnly) {
                this.result = result;
                this.customEnv = customEnv;
                this._classFinder = classFinder;
                this._reportMissingClass = reportMissingClass;
                this._onDereferenced = classFinder === null || classFinder === void 0 ? void 0 : classFinder.onDereferenced;
                {
                  this._ignoreEditorOnly = ignoreEditorOnly;
                }
              }
              clear() {
                this.result = null;
                this.customEnv = null;
                this.deserializedList.length = 0;
                this.deserializedData = null;
                this._classFinder = null;
                this._reportMissingClass = null;
                this._onDereferenced = null;
              }
              deserialize(serializedData) {
                let fromCCON = false;
                let jsonObj;
                if (serializedData instanceof CCON) {
                  fromCCON = true;
                  jsonObj = serializedData.document;
                  if (serializedData.chunks.length > 0) {
                    assertIsTrue(serializedData.chunks.length === 1);
                    this._mainBinChunk = serializedData.chunks[0];
                  }
                } else {
                  jsonObj = serializedData;
                }
                this._serializedData = jsonObj;
                this._context = {
                  fromCCON
                };
                const serializedRootObject = Array.isArray(jsonObj) ? jsonObj[0] : jsonObj;
                {
                  this.deserializedData = this._deserializeObject(serializedRootObject, 0);
                }
                this._serializedData = undefined;
                this._mainBinChunk = undefined;
                this._context = undefined;
                return this.deserializedData;
              }
              _deserializeObject(serialized, globalIndex, owner, propName) {
                switch (serialized.__type__) {
                  case 'TypedArray':
                    return this._deserializeTypedArrayView(serialized);
                  case 'TypedArrayRef':
                    return this._deserializeTypedArrayViewRef(serialized);
                  default:
                    if (serialized.__type__) {
                      return this._deserializeTypeTaggedObject(serialized, globalIndex, owner, propName);
                    } else if (!Array.isArray(serialized)) {
                      return this._deserializePlainObject(serialized);
                    } else {
                      return this._deserializeArray(serialized);
                    }
                }
              }
              _deserializeTypedArrayView(value) {
                return globalThis[value.ctor].from(value.array);
              }
              _deserializeTypedArrayViewRef(value) {
                const {
                  offset,
                  length,
                  ctor: constructorName
                } = value;
                const obj = new globalThis[constructorName](this._mainBinChunk.buffer, this._mainBinChunk.byteOffset + offset, length);
                return obj;
              }
              _deserializeArray(value) {
                const obj = new Array(value.length);
                let prop;
                for (let i = 0; i < value.length; i++) {
                  prop = value[i];
                  if (typeof prop === 'object' && prop) {
                    const isAssetType = this._deserializeAndAssignField(obj, prop, `${i}`);
                    if (isAssetType) {
                      obj[i] = null;
                    }
                  } else {
                    obj[i] = prop;
                  }
                }
                return obj;
              }
              _deserializePlainObject(value) {
                const obj = {};
                this._fillPlainObject(obj, value);
                return obj;
              }
              _deserializeTypeTaggedObject(value, globalIndex, owner, propName) {
                const type = value.__type__;
                const klass = this._classFinder(type, value, owner, propName);
                if (!klass) {
                  const notReported = this._classFinder === getClassById;
                  if (notReported) {
                    this._reportMissingClass(type);
                  }
                  return null;
                }
                const createObject = constructor => {
                  const obj = new constructor();
                  if (globalIndex >= 0) {
                    this.deserializedList[globalIndex] = obj;
                  }
                  return obj;
                };
                {
                  const obj = createObject(klass);
                  this._deserializeInto(value, obj, klass);
                  return obj;
                }
              }
              _deserializeInto(value, object, constructor, skipCustomized = false) {
                if (!skipCustomized && object[deserializeTag]) {
                  this._runCustomizedDeserialize(value, object, constructor);
                  return;
                }
                if (object._deserialize) {
                  object._deserialize(value.content, this);
                  return;
                }
                if (legacyCC.Class._isCCClass(constructor)) {
                  this._deserializeFireClass(object, value, constructor);
                } else {
                  this._deserializeFastDefinedObject(object, value, constructor);
                }
              }
              _runCustomizedDeserialize(value, object, constructor) {
                const serializationInput = {
                  readProperty: name => {
                    const serializedField = value[name];
                    if (typeof serializedField !== 'object' || !serializedField) {
                      return serializedField;
                    } else {
                      return this._deserializeObjectField(serializedField);
                    }
                  },
                  readThis: () => {
                    this._deserializeInto(value, object, constructor, true);
                  },
                  readSuper: () => {
                    const superConstructor = getSuper(constructor);
                    if (superConstructor) {
                      this._deserializeInto(value, object, superConstructor);
                    }
                  }
                };
                object[deserializeTag](serializationInput, this._context);
              }
              _deserializeFireClass(obj, serialized, klass) {
                let deserialize;
                if (klass.hasOwnProperty('__deserialize__')) {
                  deserialize = klass.__deserialize__;
                } else {
                  deserialize = compileDeserialize(this, klass);
                  try {
                    if (klass === MissingScript) {
                      const props = klass.__values__;
                      if (props.length === 0 || props[props.length - 1] !== '_$erialized') {
                        error(`The '_$erialized' prop of MissingScript is missing. Will force the raw data to be save.`);
                        error(`    Error props: ['${props}']. Please contact jare.`);
                      }
                      const rawDeserialize = deserialize;
                      deserialize = function (deserializer, object, deserialized, constructor) {
                        rawDeserialize(deserializer, object, deserialized, constructor);
                        if (!object._$erialized) {
                          error(`Unable to stash previously serialized data. ${JSON.stringify(deserialized)}`);
                        }
                      };
                    }
                  } catch (e) {
                    error(`Error when checking MissingScript 6, ${e}`);
                  }
                  value(klass, '__deserialize__', deserialize, true);
                }
                deserialize(this, obj, serialized, klass);
              }
              _deserializeAndAssignField(obj, serializedField, propName) {
                const id = serializedField.__id__;
                if (typeof id === 'number') {
                  const field = this.deserializedList[id];
                  if (field) {
                    obj[propName] = field;
                  } else {
                    var _this$_onDereferenced;
                    const source = this._serializedData[id];
                    {
                      obj[propName] = this._deserializeObject(source, id, undefined, propName);
                    }
                    (_this$_onDereferenced = this._onDereferenced) === null || _this$_onDereferenced === void 0 ? void 0 : _this$_onDereferenced.call(this, this.deserializedList, id, obj, propName);
                  }
                } else {
                  const uuid = serializedField.__uuid__;
                  if (uuid) {
                    const expectedType = serializedField.__expectedType__;
                    this.result.push(obj, propName, uuid, expectedType);
                  } else {
                    obj[propName] = this._deserializeObject(serializedField, -1);
                  }
                }
                return false;
              }
              _deserializeObjectField(serializedField) {
                const id = serializedField.__id__;
                if (typeof id === 'number') {
                  const field = this.deserializedList[id];
                  if (field) {
                    return field;
                  } else {
                    const source = this._serializedData[id];
                    const field = this._deserializeObject(source, id, undefined, undefined);
                    return field;
                  }
                } else {
                  const uuid = serializedField.__uuid__;
                  if (uuid) {
                    serializedField.__expectedType__;
                    throw new Error(`Asset reference field serialization is currently not supported in custom serialization.`);
                  } else {
                    return this._deserializeObject(serializedField, -1);
                  }
                }
              }
              _fillPlainObject(instance, serialized) {
                for (const propName in serialized) {
                  if (!serialized.hasOwnProperty(propName)) {
                    continue;
                  }
                  const prop = serialized[propName];
                  if (typeof prop !== 'object') {
                    if (propName !== '__type__') {
                      instance[propName] = prop;
                    }
                  } else if (prop) {
                    const isAssetType = this._deserializeAndAssignField(instance, prop, propName);
                    if (isAssetType) {
                      instance[propName] = null;
                    }
                  } else {
                    instance[propName] = null;
                  }
                }
              }
              _deserializeFastDefinedObject(instance, serialized, klass) {
                if (klass === legacyCC.Vec2) {
                  instance.x = serialized.x || 0;
                  instance.y = serialized.y || 0;
                  return;
                } else if (klass === legacyCC.Vec3) {
                  instance.x = serialized.x || 0;
                  instance.y = serialized.y || 0;
                  instance.z = serialized.z || 0;
                  return;
                } else if (klass === legacyCC.Color) {
                  instance.r = serialized.r || 0;
                  instance.g = serialized.g || 0;
                  instance.b = serialized.b || 0;
                  const a = serialized.a;
                  instance.a = a === undefined ? 255 : a;
                  return;
                } else if (klass === legacyCC.Size) {
                  instance.width = serialized.width || 0;
                  instance.height = serialized.height || 0;
                  return;
                }
                const attrs = CCClass.Attr.getClassAttrs(klass);
                const props = klass.__values__;
                if (!props) {
                  error(`Unable to deserialize ${getClassName(klass)}. ` + 'For non-CCClass types, they can only be marked as serializable by `CCClass.fastDefine`.');
                }
                for (let i = 0; i < props.length; i++) {
                  const propName = props[i];
                  let value = serialized[propName];
                  const exists = value !== undefined || serialized.hasOwnProperty(propName);
                  if (!exists) {
                    value = CCClass.getDefault(attrs[propName + POSTFIX_DEFAULT]);
                  }
                  if (typeof value !== 'object') {
                    instance[propName] = value;
                  } else if (value) {
                    this._deserializeAndAssignField(instance, value, propName);
                  } else {
                    instance[propName] = null;
                  }
                }
              }
            }
            _Deserializer.pool = new DeserializerPool();
            function deserializeDynamic(data, details, options) {
              var _options$reportMissin;
              options = options || {};
              const classFinder = options.classFinder || getClassById;
              const createAssetRefs = options.createAssetRefs || sys.platform === Platform.EDITOR_CORE;
              const customEnv = options.customEnv;
              const ignoreEditorOnly = options.ignoreEditorOnly;
              const reportMissingClass = (_options$reportMissin = options.reportMissingClass) !== null && _options$reportMissin !== void 0 ? _options$reportMissin : legacyCC.deserialize.reportMissingClass;
              details.init();
              const deserializer = _Deserializer.pool.get(details, classFinder, reportMissingClass, customEnv, ignoreEditorOnly);
              legacyCC.game._isCloning = true;
              const res = deserializer.deserialize(data);
              legacyCC.game._isCloning = false;
              _Deserializer.pool.put(deserializer);
              if (createAssetRefs) {
                details.assignAssetsBy((uuid, options) => EditorExtends.serialize.asAsset(uuid, options.type));
              }
              return res;
            }
            function parseUuidDependenciesDynamic(serialized) {
              const depends = [];
              const parseDependRecursively = (data, out) => {
                if (!data || typeof data !== 'object' || typeof data.__id__ === 'number') {
                  return;
                }
                const uuid = data.__uuid__;
                if (Array.isArray(data)) {
                  for (let i = 0, l = data.length; i < l; i++) {
                    parseDependRecursively(data[i], out);
                  }
                } else if (uuid) {
                  out.push(uuid);
                } else {
                  for (const prop in data) {
                    parseDependRecursively(data[prop], out);
                  }
                }
              };
              parseDependRecursively(serialized, depends);
              return depends;
            }

            function reportMissingClass(id) {
              {
                errorID(5302, id);
              }
            }

            const constructorMap = [Vec2, Vec3, Vec4, Quat, Color, Size, Rect, Mat4];
            function vec4LikeSetter(obj, data) {
              obj.x = data[1];
              obj.y = data[2];
              obj.z = data[3];
              obj.w = data[4];
            }
            const setterMap = [(obj, data) => {
              obj.x = data[1];
              obj.y = data[2];
            }, (obj, data) => {
              obj.x = data[1];
              obj.y = data[2];
              obj.z = data[3];
            }, vec4LikeSetter, vec4LikeSetter, (obj, data) => {
              obj._val = data[1];
            }, (obj, data) => {
              obj.width = data[1];
              obj.height = data[2];
            }, (obj, data) => {
              obj.x = data[1];
              obj.y = data[2];
              obj.width = data[3];
              obj.height = data[4];
            }, (obj, data) => {
              Mat4.fromArray(obj, data, 1);
            }];
            function deserializeBuiltinValueType(data, owner, key, value) {
              const typeIndex = value[0];
              assertIsTrue(typeIndex >= 0 && typeIndex < constructorMap.length);
              const object = new constructorMap[typeIndex]();
              const setter = setterMap[typeIndex];
              setter(object, value);
              owner[key] = object;
            }
            function deserializeBuiltinValueTypeInto(data, owner, key, value) {
              const typeIndex = value[0];
              assertIsTrue(typeIndex >= 0 && typeIndex < constructorMap.length);
              {
                const tmp = owner[key];
                const setter = setterMap[typeIndex];
                setter(tmp, value);
                owner[key] = tmp;
              }
            }

            const SUPPORT_MIN_FORMAT_VERSION = 1;
            const EMPTY_PLACEHOLDER = 0;
            const DataTypeID = {
              SimpleType: 0,
              InstanceRef: 1,
              Array_InstanceRef: 2,
              Array_AssetRefByInnerObj: 3,
              Class: 4,
              ValueTypeCreated: 5,
              AssetRefByInnerObj: 6,
              TRS: 7,
              ValueType: 8,
              Array_Class: 9,
              CustomizedClass: 10,
              Dict: 11,
              Array: 12,
              ARRAY_LENGTH: 13
            };
            const CLASS_TYPE = 0;
            const CLASS_KEYS = 1;
            const CLASS_PROP_TYPE_OFFSET = 2;
            const MASK_CLASS = 0;
            const OBJ_DATA_MASK = 0;
            const CUSTOM_OBJ_DATA_CLASS = 0;
            const CUSTOM_OBJ_DATA_CONTENT = 1;
            const DICT_JSON_LAYOUT = 0;
            const ARRAY_ITEM_VALUES = 0;
            const Refs = {
              EACH_RECORD_LENGTH: 3,
              OWNER_OFFSET: 0,
              KEY_OFFSET: 1,
              TARGET_OFFSET: 2
            };
            const File = {
              Version: 0,
              Context: 0,
              SharedUuids: 1,
              SharedStrings: 2,
              SharedClasses: 3,
              SharedMasks: 4,
              Instances: 5,
              InstanceTypes: 6,
              Refs: 7,
              DependObjs: 8,
              DependKeys: 9,
              DependUuidIndices: 10,
              ARRAY_LENGTH: 11
            };
            const PACKED_SECTIONS = File.Instances;
            class Details {
              constructor() {
                this.uuidObjList = null;
                this.uuidPropList = null;
                this.uuidList = null;
                this.uuidTypeList = [];
              }
              init(data) {
                if (data) {
                  this.uuidObjList = data[File.DependObjs];
                  this.uuidPropList = data[File.DependKeys];
                  this.uuidList = data[File.DependUuidIndices];
                } else {
                  const used = this.uuidList;
                  if (!used) {
                    this.uuidList = [];
                    this.uuidObjList = [];
                    this.uuidPropList = [];
                    this.uuidTypeList = [];
                  }
                }
              }
              reset() {
                {
                  const used = this.uuidList;
                  if (used) {
                    this.uuidList.length = 0;
                    this.uuidObjList.length = 0;
                    this.uuidPropList.length = 0;
                    this.uuidTypeList.length = 0;
                  }
                }
              }
              push(obj, propName, uuid, type) {
                this.uuidObjList.push(obj);
                this.uuidPropList.push(propName);
                this.uuidList.push(uuid);
                this.uuidTypeList.push(type || '');
              }
            } exports('ah', Details);
            Details.pool = new Pool(obj => {
              obj.reset();
            }, 5);
            Details.pool.get = function () {
              return this._get() || new Details();
            };
            function dereference(refs, instances, strings) {
              const dataLength = refs.length - 1;
              let i = 0;
              const instanceOffset = refs[dataLength] * Refs.EACH_RECORD_LENGTH;
              for (; i < instanceOffset; i += Refs.EACH_RECORD_LENGTH) {
                const owner = refs[i];
                const target = instances[refs[i + Refs.TARGET_OFFSET]];
                const keyIndex = refs[i + Refs.KEY_OFFSET];
                if (keyIndex >= 0) {
                  owner[strings[keyIndex]] = target;
                } else {
                  owner[~keyIndex] = target;
                }
              }
              for (; i < dataLength; i += Refs.EACH_RECORD_LENGTH) {
                const owner = instances[refs[i]];
                const target = instances[refs[i + Refs.TARGET_OFFSET]];
                const keyIndex = refs[i + Refs.KEY_OFFSET];
                if (keyIndex >= 0) {
                  owner[strings[keyIndex]] = target;
                } else {
                  owner[~keyIndex] = target;
                }
              }
            }
            function deserializeCCObject(data, objectData) {
              const mask = data[File.SharedMasks][objectData[OBJ_DATA_MASK]];
              const clazz = mask[MASK_CLASS];
              const ctor = clazz[CLASS_TYPE];
              const obj = new ctor();
              const keys = clazz[CLASS_KEYS];
              const classTypeOffset = clazz[CLASS_PROP_TYPE_OFFSET];
              const maskTypeOffset = mask[mask.length - 1];
              let i = MASK_CLASS + 1;
              for (; i < maskTypeOffset; ++i) {
                const key = keys[mask[i]];
                obj[key] = objectData[i];
              }
              for (; i < objectData.length; ++i) {
                const key = keys[mask[i]];
                const type = clazz[mask[i] + classTypeOffset];
                const op = ASSIGNMENTS[type];
                op(data, obj, key, objectData[i]);
              }
              return obj;
            }
            function deserializeCustomCCObject(data, ctor, value) {
              const obj = new ctor();
              if (obj._deserialize) {
                obj._deserialize(value, data[File.Context]);
              } else {
                errorID(5303, getClassName(ctor));
              }
              return obj;
            }
            function assignSimple(data, owner, key, value) {
              owner[key] = value;
            }
            function assignInstanceRef(data, owner, key, value) {
              if (value >= 0) {
                owner[key] = data[File.Instances][value];
              } else {
                data[File.Refs][~value * Refs.EACH_RECORD_LENGTH] = owner;
              }
            }
            function genArrayParser(parser) {
              return (data, owner, key, value) => {
                for (let i = 0; i < value.length; ++i) {
                  parser(data, value, i, value[i]);
                }
                owner[key] = value;
              };
            }
            function parseAssetRefByInnerObj(data, owner, key, value) {
              owner[key] = null;
              data[File.DependObjs][value] = owner;
            }
            function parseClass(data, owner, key, value) {
              owner[key] = deserializeCCObject(data, value);
            }
            function parseCustomClass(data, owner, key, value) {
              const ctor = data[File.SharedClasses][value[CUSTOM_OBJ_DATA_CLASS]];
              owner[key] = deserializeCustomCCObject(data, ctor, value[CUSTOM_OBJ_DATA_CONTENT]);
            }
            function parseTRS(data, owner, key, value) {
              const typedArray = owner[key];
              typedArray.set(value);
            }
            function parseDict(data, owner, key, value) {
              const dict = value[DICT_JSON_LAYOUT];
              owner[key] = dict;
              for (let i = DICT_JSON_LAYOUT + 1; i < value.length; i += 3) {
                const subKey = value[i];
                const subType = value[i + 1];
                const subValue = value[i + 2];
                const op = ASSIGNMENTS[subType];
                op(data, dict, subKey, subValue);
              }
            }
            function parseArray(data, owner, key, value) {
              const array = value[ARRAY_ITEM_VALUES];
              for (let i = 0; i < array.length; ++i) {
                const subValue = array[i];
                const type = value[i + 1];
                if (type !== DataTypeID.SimpleType) {
                  const op = ASSIGNMENTS[type];
                  op(data, array, i, subValue);
                }
              }
              owner[key] = array;
            }
            const ASSIGNMENTS = new Array(DataTypeID.ARRAY_LENGTH);
            ASSIGNMENTS[DataTypeID.SimpleType] = assignSimple;
            ASSIGNMENTS[DataTypeID.InstanceRef] = assignInstanceRef;
            ASSIGNMENTS[DataTypeID.Array_InstanceRef] = genArrayParser(assignInstanceRef);
            ASSIGNMENTS[DataTypeID.Array_AssetRefByInnerObj] = genArrayParser(parseAssetRefByInnerObj);
            ASSIGNMENTS[DataTypeID.Class] = parseClass;
            ASSIGNMENTS[DataTypeID.ValueTypeCreated] = deserializeBuiltinValueTypeInto;
            ASSIGNMENTS[DataTypeID.AssetRefByInnerObj] = parseAssetRefByInnerObj;
            ASSIGNMENTS[DataTypeID.TRS] = parseTRS;
            ASSIGNMENTS[DataTypeID.ValueType] = deserializeBuiltinValueType;
            ASSIGNMENTS[DataTypeID.Array_Class] = genArrayParser(parseClass);
            ASSIGNMENTS[DataTypeID.CustomizedClass] = parseCustomClass;
            ASSIGNMENTS[DataTypeID.Dict] = parseDict;
            ASSIGNMENTS[DataTypeID.Array] = parseArray;
            function parseInstances(data) {
              const instances = data[File.Instances];
              const instanceTypes = data[File.InstanceTypes];
              const instanceTypesLen = instanceTypes === EMPTY_PLACEHOLDER ? 0 : instanceTypes.length;
              let rootIndex = instances[instances.length - 1];
              let normalObjectCount = instances.length - instanceTypesLen;
              if (typeof rootIndex !== 'number') {
                rootIndex = 0;
              } else {
                if (rootIndex < 0) {
                  rootIndex = ~rootIndex;
                }
                --normalObjectCount;
              }
              let insIndex = 0;
              for (; insIndex < normalObjectCount; ++insIndex) {
                instances[insIndex] = deserializeCCObject(data, instances[insIndex]);
              }
              const classes = data[File.SharedClasses];
              for (let typeIndex = 0; typeIndex < instanceTypesLen; ++typeIndex, ++insIndex) {
                let type = instanceTypes[typeIndex];
                const eachData = instances[insIndex];
                if (type >= 0) {
                  const ctor = classes[type];
                  instances[insIndex] = deserializeCustomCCObject(data, ctor, eachData);
                } else {
                  type = ~type;
                  const op = ASSIGNMENTS[type];
                  op(data, instances, insIndex, eachData);
                }
              }
              return rootIndex;
            }
            function getMissingClass(hasCustomFinder, type, reportMissingClass) {
              if (!hasCustomFinder) {
                reportMissingClass(type);
              }
              return Object;
            }
            function doLookupClass(classFinder, type, container, index, silent, hasCustomFinder, reportMissingClass) {
              let klass = classFinder(type);
              if (!klass) {
                if (silent) {
                  container[index] = ((c, i, t) => function proxy() {
                    const actualClass = classFinder(t) || getMissingClass(hasCustomFinder, t, reportMissingClass);
                    c[i] = actualClass;
                    return new actualClass();
                  })(container, index, type);
                  return;
                } else {
                  klass = getMissingClass(hasCustomFinder, type, reportMissingClass);
                }
              }
              container[index] = klass;
            }
            function lookupClasses(data, silent, customFinder, reportMissingClass) {
              const classFinder = customFinder || getClassById;
              const classes = data[File.SharedClasses];
              for (let i = 0; i < classes.length; ++i) {
                const klassLayout = classes[i];
                if (typeof klassLayout !== 'string') {
                  {
                    if (typeof klassLayout[CLASS_TYPE] === 'function') {
                      throw new Error('Can not deserialize the same JSON data again.');
                    }
                  }
                  const type = klassLayout[CLASS_TYPE];
                  doLookupClass(classFinder, type, klassLayout, CLASS_TYPE, silent, customFinder, reportMissingClass);
                } else {
                  doLookupClass(classFinder, klassLayout, classes, i, silent, customFinder, reportMissingClass);
                }
              }
            }
            function cacheMasks(data) {
              const masks = data[File.SharedMasks];
              if (masks) {
                const classes = data[File.SharedClasses];
                for (let i = 0; i < masks.length; ++i) {
                  const mask = masks[i];
                  mask[MASK_CLASS] = classes[mask[MASK_CLASS]];
                }
              }
            }
            function parseResult(data) {
              const instances = data[File.Instances];
              const sharedStrings = data[File.SharedStrings];
              const dependSharedUuids = data[File.SharedUuids];
              const dependObjs = data[File.DependObjs];
              const dependKeys = data[File.DependKeys];
              const dependUuids = data[File.DependUuidIndices];
              for (let i = 0; i < dependObjs.length; ++i) {
                const obj = dependObjs[i];
                if (typeof obj === 'number') {
                  dependObjs[i] = instances[obj];
                }
                let key = dependKeys[i];
                if (typeof key === 'number') {
                  if (key >= 0) {
                    key = sharedStrings[key];
                  } else {
                    key = ~key;
                  }
                  dependKeys[i] = key;
                }
                const uuid = dependUuids[i];
                if (typeof uuid === 'number') {
                  dependUuids[i] = dependSharedUuids[uuid];
                }
              }
            }
            function isCompiledJson(json) {
              if (Array.isArray(json)) {
                const version = json[0];
                return typeof version === 'number' || version instanceof FileInfo;
              } else {
                return false;
              }
            }
            function initializeDeserializationContext(data, details, options) {
              var _options;
              details.init(data);
              (_options = options) !== null && _options !== void 0 ? _options : options = {};
              let version = data[File.Version];
              let preprocessed = false;
              if (typeof version === 'object') {
                preprocessed = version.preprocessed;
                version = version.version;
              }
              if (version < SUPPORT_MIN_FORMAT_VERSION) {
                throw new Error(getError(5304, version));
              }
              const context = options;
              context._version = version;
              context.result = details;
              data[File.Context] = context;
              if (!preprocessed) {
                var _options$reportMissin;
                lookupClasses(data, false, options.classFinder, (_options$reportMissin = options.reportMissingClass) !== null && _options$reportMissin !== void 0 ? _options$reportMissin : deserialize.reportMissingClass);
                cacheMasks(data);
              }
            }
            function deserialize(data, details, options) {
              if (typeof data === 'string') {
                data = JSON.parse(data);
              }
              let isBorrowedDetails = false;
              if (!details) {
                const borrowedDetails = Details.pool.get();
                assertIsTrue(borrowedDetails, `Can not allocate deserialization details`);
                details = borrowedDetails;
                isBorrowedDetails = true;
              }
              let res;
              if (!isCompiledJson(data)) {
                res = deserializeDynamic(data, details, options);
              } else {
                initializeDeserializationContext(data, details, options);
                const runtimeData = data;
                legacyCC.game._isCloning = true;
                const instances = runtimeData[File.Instances];
                const rootIndex = parseInstances(runtimeData);
                legacyCC.game._isCloning = false;
                if (runtimeData[File.Refs]) {
                  dereference(runtimeData[File.Refs], instances, runtimeData[File.SharedStrings]);
                }
                parseResult(runtimeData);
                res = instances[rootIndex];
              }
              if (isBorrowedDetails) {
                Details.pool.put(details);
              }
              return res;
            }
            deserialize.Details = Details;
            deserialize.reportMissingClass = reportMissingClass;
            class FileInfo {
              constructor(version) {
                this.preprocessed = true;
                this.version = version;
              }
            }
            function unpackJSONs(data, classFinder, reportMissingClass) {
              if (data[File.Version] < SUPPORT_MIN_FORMAT_VERSION) {
                throw new Error(getError(5304, data[File.Version]));
              }
              lookupClasses(data, true, classFinder, reportMissingClass !== null && reportMissingClass !== void 0 ? reportMissingClass : deserialize.reportMissingClass);
              cacheMasks(data);
              const version = new FileInfo(data[File.Version]);
              const sharedUuids = data[File.SharedUuids];
              const sharedStrings = data[File.SharedStrings];
              const sharedClasses = data[File.SharedClasses];
              const sharedMasks = data[File.SharedMasks];
              const sections = data[PACKED_SECTIONS];
              for (let i = 0; i < sections.length; ++i) {
                const section = sections[i];
                section.unshift(version, sharedUuids, sharedStrings, sharedClasses, sharedMasks);
              }
              return sections;
            }
            function packCustomObjData(type, data, hasNativeDep) {
              return [SUPPORT_MIN_FORMAT_VERSION, EMPTY_PLACEHOLDER, EMPTY_PLACEHOLDER, [type], EMPTY_PLACEHOLDER, hasNativeDep ? [data, ~0] : [data], [0], EMPTY_PLACEHOLDER, [], [], []];
            }
            function hasNativeDep(data) {
              const instances = data[File.Instances];
              const rootInfo = instances[instances.length - 1];
              if (typeof rootInfo !== 'number') {
                return false;
              } else {
                return rootInfo < 0;
              }
            }
            function getDependUuidList(json) {
              const sharedUuids = json[File.SharedUuids];
              return json[File.DependUuidIndices].map(index => sharedUuids[index]);
            }
            function parseUuidDependencies(serialized) {
              if (isCompiledJson(serialized)) {
                return getDependUuidList(serialized);
              } else {
                return parseUuidDependenciesDynamic(serialized);
              }
            }
            {
              deserialize.isCompiledJson = isCompiledJson;
            }
            legacyCC.deserialize = deserialize;

            const dependMap = new WeakMap();
            const nativeDependMap = new WeakSet();
            const onLoadedInvokedMap = new WeakSet();

            function deserializeAsset(json, options) {
              let classFinder;
              {
                classFinder = MissingScript.safeFindClass;
              }
              const tdInfo = Details.pool.get();
              let asset;
              try {
                asset = deserialize(json, tdInfo, {
                  classFinder,
                  customEnv: options
                });
              } catch (e) {
                error(e);
                Details.pool.put(tdInfo);
                throw e;
              }
              asset._uuid = options.__uuid__ || '';
              const uuidList = tdInfo.uuidList;
              const objList = tdInfo.uuidObjList;
              const propList = tdInfo.uuidPropList;
              const typeList = tdInfo.uuidTypeList || [];
              const depends = [];
              for (let i = 0; i < uuidList.length; i++) {
                const dependUuid = uuidList[i];
                depends[i] = {
                  uuid: decodeUuid(dependUuid),
                  owner: objList[i],
                  prop: propList[i],
                  type: getClassById(typeList[i])
                };
              }
              dependMap.set(asset, depends);
              if (asset._native) {
                nativeDependMap.add(asset);
              }
              Details.pool.put(tdInfo);
              return asset;
            }

            class DependUtil {
              static get instance() {
                if (!this._instance) {
                  this._instance = new DependUtil();
                }
                return this._instance;
              }
              constructor() {
                this._depends = new Cache();
              }
              init() {
                this._depends.clear();
              }
              getNativeDep(uuid) {
                const depend = this._depends.get(uuid);
                if (depend && depend.nativeDep) {
                  return {
                    ...depend.nativeDep
                  };
                }
                return null;
              }
              getDeps(uuid) {
                if (this._depends.has(uuid)) {
                  return this._depends.get(uuid).deps;
                }
                return [];
              }
              getDepsRecursively(uuid) {
                const exclude = Object.create(null);
                const depends = [];
                this._descend(uuid, exclude, depends);
                return depends;
              }
              remove(uuid) {
                this._depends.remove(uuid);
              }
              parse(uuid, json) {
                let out = null;
                if (Array.isArray(json) || json.__type__ || json instanceof CCON) {
                  if (this._depends.has(uuid)) {
                    return this._depends.get(uuid);
                  }
                  if (Array.isArray(json) && (!(isCompiledJson(json)) || !hasNativeDep(json))) {
                    out = {
                      deps: this._parseDepsFromJson(json)
                    };
                  } else {
                    try {
                      const asset = deserializeAsset(json, {
                        __uuid__: uuid
                      });
                      out = this._parseDepsFromAsset(asset);
                      if (out.nativeDep) {
                        out.nativeDep.uuid = uuid;
                      }
                      parsed.add(`${uuid}@import`, asset);
                    } catch (e) {
                      files.remove(`${uuid}@import`);
                      out = {
                        deps: []
                      };
                    }
                  }
                } else {
                  if (this._depends.has(uuid)) {
                    out = this._depends.get(uuid);
                    if (out.parsedFromExistAsset) {
                      return out;
                    }
                  }
                  out = this._parseDepsFromAsset(json);
                }
                this._depends.add(uuid, out);
                return out;
              }
              _parseDepsFromAsset(asset) {
                const out = {
                  deps: [],
                  parsedFromExistAsset: true
                };
                const deps = dependMap.get(asset);
                assertIsNonNullable(deps);
                for (let i = 0, l = deps.length; i < l; i++) {
                  out.deps.push(deps[i].uuid);
                }
                if (nativeDependMap.has(asset)) {
                  out.nativeDep = asset._nativeDep;
                }
                return out;
              }
              _parseDepsFromJson(json) {
                const depends = parseUuidDependencies(json);
                depends.forEach((uuid, index) => depends[index] = decodeUuid(uuid));
                return depends;
              }
              _descend(uuid, exclude, depends) {
                const deps = this.getDeps(uuid);
                for (let i = 0; i < deps.length; i++) {
                  const depend = deps[i];
                  if (!exclude[depend]) {
                    exclude[depend] = true;
                    depends.push(depend);
                    this._descend(depend, exclude, depends);
                  }
                }
              }
            }
            DependUtil._instance = void 0;
            var dependUtil = exports('aH', DependUtil.instance);

            const SimpleTexture = jsb.SimpleTexture;
            const jsbWindow = jsb.window;
            SimpleTexture.Filter = Filter;
            SimpleTexture.PixelFormat = PixelFormat;
            SimpleTexture.WrapMode = WrapMode;
            const simpleTextureProto = jsb.SimpleTexture.prototype;
            const oldUpdateDataFunc = simpleTextureProto.uploadData;
            simpleTextureProto.uploadData = function (source, level = 0, arrayIndex = 0) {
              let data;
              if (source instanceof jsbWindow.HTMLCanvasElement) {
                data = source.data;
              } else if (source instanceof jsbWindow.HTMLImageElement) {
                data = source._data;
              } else if (ArrayBuffer.isView(source)) {
                data = source.buffer;
              }
              oldUpdateDataFunc.call(this, data, level, arrayIndex);
            };
            simpleTextureProto._ctor = function () {
              jsb.TextureBase.prototype._ctor.apply(this, arguments);
              this._gfxTexture = null;
              this._registerListeners();
            };
            const oldGetGFXTexture = simpleTextureProto.getGFXTexture;
            simpleTextureProto.getGFXTexture = function () {
              if (!this._gfxTexture) {
                this._gfxTexture = oldGetGFXTexture.call(this);
              }
              return this._gfxTexture;
            };
            simpleTextureProto._onGFXTextureUpdated = function (gfxTexture) {
              this._gfxTexture = gfxTexture;
            };
            simpleTextureProto._onAfterAssignImage = function (image) {
              if (macro.CLEANUP_IMAGE_CACHE) {
                const deps = dependUtil.getDeps(this._uuid);
                const index = deps.indexOf(image._uuid);
                if (index !== -1) {
                  fastRemoveAt$1(deps, index);
                  image.decRef();
                }
              }
            };
            patch_cc_SimpleTexture({
              SimpleTexture
            });
            legacyCC.SimpleTexture = jsb.SimpleTexture;

            const texture2DProto = jsb.Texture2D.prototype;
            texture2DProto.createNode = null;
            const Texture2D$1 = exports('am', jsb.Texture2D);
            Texture2D$1.Filter = Filter;
            Texture2D$1.PixelFormat = PixelFormat;
            Texture2D$1.WrapMode = WrapMode;
            texture2DProto._ctor = function () {
              SimpleTexture.prototype._ctor.apply(this, arguments);
              this._mipmaps = [];
            };
            texture2DProto._serialize = function (ctxForExporting) {
              return null;
            };
            texture2DProto._deserialize = function (serializedData, handle) {
              const data = serializedData;
              TextureBase.prototype._deserialize.call(this, data.base, undefined);
              this._mipmaps = new Array(data.mipmaps.length);
              for (let i = 0; i < data.mipmaps.length; ++i) {
                this._mipmaps[i] = new ImageAsset$1();
                if (!data.mipmaps[i]) {
                  continue;
                }
                const mipmapUUID = data.mipmaps[i];
                handle.result.push(this._mipmaps, `${i}`, mipmapUUID, getClassId(ImageAsset$1));
              }
            };
            const oldOnLoaded$1 = texture2DProto.onLoaded;
            texture2DProto.onLoaded = function () {
              this.syncMipmapsForJS(this._mipmaps);
              oldOnLoaded$1.call(this);
            };
            Object.defineProperty(texture2DProto, 'image', {
              configurable: true,
              enumerable: true,
              get() {
                return this._mipmaps.length === 0 ? null : this._mipmaps[0];
              },
              set(value) {
                this.mipmaps = value ? [value] : [];
              }
            });
            Object.defineProperty(texture2DProto, 'mipmaps', {
              configurable: true,
              enumerable: true,
              get() {
                return this._mipmaps;
              },
              set(arr) {
                for (let i = 0, len = arr.length; i < len; ++i) {
                  arr[i]._syncDataToNative();
                }
                this._mipmaps = arr;
                this.setMipmaps(arr);
              }
            });
            legacyCC.Texture2D = jsb.Texture2D;
            patch_cc_Texture2D({
              Texture2D: Texture2D$1,
              ImageAsset: ImageAsset$1
            });

            const textureCubeProto = jsb.TextureCube.prototype;
            var FaceIndex;
            (function (FaceIndex) {
              FaceIndex[FaceIndex["right"] = 0] = "right";
              FaceIndex[FaceIndex["left"] = 1] = "left";
              FaceIndex[FaceIndex["top"] = 2] = "top";
              FaceIndex[FaceIndex["bottom"] = 3] = "bottom";
              FaceIndex[FaceIndex["front"] = 4] = "front";
              FaceIndex[FaceIndex["back"] = 5] = "back";
            })(FaceIndex || (FaceIndex = {}));
            var MipmapMode;
            (function (MipmapMode) {
              MipmapMode[MipmapMode["NONE"] = 0] = "NONE";
              MipmapMode[MipmapMode["AUTO"] = 1] = "AUTO";
              MipmapMode[MipmapMode["BAKED_CONVOLUTION_MAP"] = 2] = "BAKED_CONVOLUTION_MAP";
            })(MipmapMode || (MipmapMode = {}));
            textureCubeProto.createNode = null;
            const TextureCube = exports('an', jsb.TextureCube);
            TextureCube.Filter = Filter;
            TextureCube.PixelFormat = PixelFormat;
            TextureCube.WrapMode = WrapMode;
            textureCubeProto._ctor = function () {
              jsb.SimpleTexture.prototype._ctor.apply(this, arguments);
              this._mipmaps = null;
              this._mipmapAtlas = null;
            };
            Object.defineProperty(textureCubeProto, 'mipmaps', {
              get() {
                return this._mipmaps;
              },
              set(value) {
                this._mipmaps = value;
                this.setMipmaps(value);
              }
            });
            Object.defineProperty(textureCubeProto, 'image', {
              get() {
                return this._mipmaps.length === 0 ? null : this._mipmaps[0];
              },
              set(value) {
                this.mipmaps = value ? [value] : [];
              }
            });
            const oldOnLoaded = textureCubeProto.onLoaded;
            textureCubeProto.onLoaded = function () {
              if (this._mipmapMode === MipmapMode.BAKED_CONVOLUTION_MAP) {
                this.setMipmapAtlasForJS(this._mipmapAtlas);
              } else {
                this.setMipmapsForJS(this._mipmaps);
              }
              oldOnLoaded.apply(this);
            };
            textureCubeProto._serialize = function (ctxForExporting) {
              return null;
            };
            textureCubeProto._deserialize = function (serializedData, handle) {
              const data = serializedData;
              jsb.TextureBase.prototype._deserialize.call(this, data.base, handle);
              this.isRGBE = data.rgbe;
              if (data.mipmapMode != undefined) {
                this._mipmapMode = data.mipmapMode;
              }
              if (this._mipmapMode === MipmapMode.BAKED_CONVOLUTION_MAP) {
                const mipmapAtlas = data.mipmapAtlas;
                const mipmapLayout = data.mipmapLayout;
                this._mipmapAtlas = {
                  atlas: {},
                  layout: mipmapLayout
                };
                this._mipmapAtlas.atlas = {
                  front: new jsb.ImageAsset(),
                  back: new jsb.ImageAsset(),
                  left: new jsb.ImageAsset(),
                  right: new jsb.ImageAsset(),
                  top: new jsb.ImageAsset(),
                  bottom: new jsb.ImageAsset()
                };
                if (mipmapAtlas) {
                  const imageAssetClassId = getClassId(jsb.ImageAsset);
                  handle.result.push(this._mipmapAtlas.atlas, `front`, mipmapAtlas.front, imageAssetClassId);
                  handle.result.push(this._mipmapAtlas.atlas, `back`, mipmapAtlas.back, imageAssetClassId);
                  handle.result.push(this._mipmapAtlas.atlas, `left`, mipmapAtlas.left, imageAssetClassId);
                  handle.result.push(this._mipmapAtlas.atlas, `right`, mipmapAtlas.right, imageAssetClassId);
                  handle.result.push(this._mipmapAtlas.atlas, `top`, mipmapAtlas.top, imageAssetClassId);
                  handle.result.push(this._mipmapAtlas.atlas, `bottom`, mipmapAtlas.bottom, imageAssetClassId);
                }
              } else {
                this._mipmaps = new Array(data.mipmaps.length);
                for (let i = 0; i < data.mipmaps.length; ++i) {
                  this._mipmaps[i] = {
                    front: new jsb.ImageAsset(),
                    back: new jsb.ImageAsset(),
                    left: new jsb.ImageAsset(),
                    right: new jsb.ImageAsset(),
                    top: new jsb.ImageAsset(),
                    bottom: new jsb.ImageAsset()
                  };
                  const mipmap = data.mipmaps[i];
                  const imageAssetClassId = getClassId(jsb.ImageAsset);
                  handle.result.push(this._mipmaps[i], `front`, mipmap.front, imageAssetClassId);
                  handle.result.push(this._mipmaps[i], `back`, mipmap.back, imageAssetClassId);
                  handle.result.push(this._mipmaps[i], `left`, mipmap.left, imageAssetClassId);
                  handle.result.push(this._mipmaps[i], `right`, mipmap.right, imageAssetClassId);
                  handle.result.push(this._mipmaps[i], `top`, mipmap.top, imageAssetClassId);
                  handle.result.push(this._mipmaps[i], `bottom`, mipmap.bottom, imageAssetClassId);
                }
              }
            };
            legacyCC.TextureCube = jsb.TextureCube;
            patch_cc_TextureCube({
              TextureCube,
              MipmapMode
            });

            class NodeUIProperties {
              get uiTransformComp() {
                if (!this._uiTransformComp) {
                  this._uiTransformComp = this._node.getComponent('cc.UITransform');
                }
                return this._uiTransformComp;
              }
              set uiTransformComp(value) {
                this._uiTransformComp = value;
              }
              get uiComp() {
                return this._uiComp;
              }
              set uiComp(comp) {
                if (this._uiComp && comp) {
                  warnID(12002);
                  return;
                }
                this._uiComp = comp;
              }
              setOpacity(v) {
                this._opacity = v;
              }
              get opacity() {
                return this._opacity;
              }
              get localOpacity() {
                return this._localOpacity;
              }
              set localOpacity(val) {
                this._localOpacity = val;
                this.colorDirty = true;
              }
              constructor(node) {
                this._uiComp = null;
                this._opacity = 1;
                this._localOpacity = 1;
                this.colorDirty = true;
                this._uiTransformComp = null;
                this._node = void 0;
                this._node = node;
              }
              applyOpacity(effectOpacity) {
                this._opacity = this._localOpacity * effectOpacity;
              }
              static markOpacityTree(node, isDirty = true) {}
            }

            CCObject.Flags.Destroying;
            !!legacyCC.GAME_VIEW;
            function nodePolyfill(Node) {
              {
                get(Node.prototype, ' INFO ', function () {
                  let path = '';
                  let node = this;
                  while (node && !(node instanceof legacyCC.Scene)) {
                    if (path) {
                      path = `${node.name}/${path}`;
                    } else {
                      path = node.name;
                    }
                    node = node._parent;
                  }
                  return `${this.name}, path: ${path}`;
                });
              }
            }

            const reserveContentsForAllSyncablePrefabTag = Symbol('ReserveContentsForAllSyncablePrefab');
            const Node = exports('Q', jsb.Node);
            legacyCC.Node = Node;
            const NodeCls = Node;
            NodeCls.reserveContentsForAllSyncablePrefabTag = reserveContentsForAllSyncablePrefabTag;
            NodeCls.EventType = NodeEventType;
            NodeCls.NodeSpace = NodeSpace;
            NodeCls.TransformDirtyBit = TransformBit;
            NodeCls.TransformBit = TransformBit;
            const TRANSFORMBIT_TRS = TransformBit.TRS;
            const nodeProto = jsb.Node.prototype;
            const TRANSFORM_ON = 1 << 0;
            const Destroying = CCObject.Flags.Destroying;
            Node._setTempFloatArray(_tempFloatArray.buffer);
            function getConstructor(typeOrClassName) {
              if (!typeOrClassName) {
                return null;
              }
              if (typeof typeOrClassName === 'string') {
                return getClassByName(typeOrClassName);
              }
              return typeOrClassName;
            }
            nodeProto.attr = function (attrs) {
              mixin(this, attrs);
            };
            nodeProto.getComponent = function (typeOrClassName) {
              const constructor = getConstructor(typeOrClassName);
              if (constructor) {
                return NodeCls._findComponent(this, constructor);
              }
              return null;
            };
            nodeProto.getComponents = function (typeOrClassName) {
              const constructor = getConstructor(typeOrClassName);
              const components = [];
              if (constructor) {
                NodeCls._findComponents(this, constructor, components);
              }
              return components;
            };
            nodeProto.getComponentInChildren = function (typeOrClassName) {
              const constructor = getConstructor(typeOrClassName);
              if (constructor) {
                return NodeCls._findChildComponent(this._children, constructor);
              }
              return null;
            };
            nodeProto.getComponentsInChildren = function (typeOrClassName) {
              const constructor = getConstructor(typeOrClassName);
              const components = [];
              if (constructor) {
                NodeCls._findComponents(this, constructor, components);
                NodeCls._findChildComponents(this.children, constructor, components);
              }
              return components;
            };
            nodeProto.addComponent = function (typeOrClassName) {
              let constructor;
              if (typeof typeOrClassName === 'string') {
                constructor = getClassByName(typeOrClassName);
                if (!constructor) {
                  if (legacyCC._RF.peek()) {
                    errorID(3808, typeOrClassName);
                  }
                  throw TypeError(getError(3807, typeOrClassName));
                }
              } else {
                if (!typeOrClassName) {
                  throw TypeError(getError(3804));
                }
                constructor = typeOrClassName;
              }
              if (typeof constructor !== 'function') {
                throw TypeError(getError(3809));
              }
              if (!isChildClassOf(constructor, Component)) {
                throw TypeError(getError(3810));
              }
              const reqComps = constructor._requireComponent;
              if (reqComps) {
                const tryAdd = c => {
                  if (!this.getComponent(c)) {
                    this.addComponent(c);
                  }
                };
                if (Array.isArray(reqComps)) {
                  reqComps.forEach(c => tryAdd(c));
                } else {
                  tryAdd(reqComps);
                }
              }
              const component = new constructor();
              component.node = this;
              this._components.push(component);
              this.emit(NodeEventType.COMPONENT_ADDED, component);
              if (this._activeInHierarchy) {
                legacyCC.director._nodeActivator.activateComp(component);
              }
              return component;
            };
            nodeProto.removeComponent = function (component) {
              if (!component) {
                errorID(3813);
                return;
              }
              let componentInstance = null;
              if (component instanceof Component) {
                componentInstance = component;
              } else {
                componentInstance = this.getComponent(component);
              }
              if (componentInstance) {
                componentInstance.destroy();
              }
            };
            const REGISTERED_EVENT_MASK_TRANSFORM_CHANGED = 1 << 0;
            const REGISTERED_EVENT_MASK_PARENT_CHANGED = 1 << 1;
            const REGISTERED_EVENT_MASK_MOBILITY_CHANGED = 1 << 2;
            const REGISTERED_EVENT_MASK_LAYER_CHANGED = 1 << 3;
            const REGISTERED_EVENT_MASK_SIBLING_ORDER_CHANGED = 1 << 4;
            const REGISTERED_EVENT_MASK_LIGHT_PROBE_BAKING_CHANGED = 1 << 5;
            nodeProto.on = function (type, callback, target, useCapture = false) {
              switch (type) {
                case NodeEventType.TRANSFORM_CHANGED:
                  this._eventMask |= TRANSFORM_ON;
                  if (!(this._registeredNodeEventTypeMask & REGISTERED_EVENT_MASK_TRANSFORM_CHANGED)) {
                    this._registerOnTransformChanged();
                    this._registeredNodeEventTypeMask |= REGISTERED_EVENT_MASK_TRANSFORM_CHANGED;
                  }
                  break;
                case NodeEventType.PARENT_CHANGED:
                  if (!(this._registeredNodeEventTypeMask & REGISTERED_EVENT_MASK_PARENT_CHANGED)) {
                    this._registerOnParentChanged();
                    this._registeredNodeEventTypeMask |= REGISTERED_EVENT_MASK_PARENT_CHANGED;
                  }
                  break;
                case NodeEventType.MOBILITY_CHANGED:
                  if (!(this._registeredNodeEventTypeMask & REGISTERED_EVENT_MASK_MOBILITY_CHANGED)) {
                    this._registerOnMobilityChanged();
                    this._registeredNodeEventTypeMask |= REGISTERED_EVENT_MASK_MOBILITY_CHANGED;
                  }
                  break;
                case NodeEventType.LAYER_CHANGED:
                  if (!(this._registeredNodeEventTypeMask & REGISTERED_EVENT_MASK_LAYER_CHANGED)) {
                    this._registerOnLayerChanged();
                    this._registeredNodeEventTypeMask |= REGISTERED_EVENT_MASK_LAYER_CHANGED;
                  }
                  break;
                case NodeEventType.CHILDREN_ORDER_CHANGED:
                  if (!(this._registeredNodeEventTypeMask & REGISTERED_EVENT_MASK_SIBLING_ORDER_CHANGED)) {
                    this._registerOnSiblingOrderChanged();
                    this._registeredNodeEventTypeMask |= REGISTERED_EVENT_MASK_SIBLING_ORDER_CHANGED;
                  }
                  break;
                case NodeEventType.LIGHT_PROBE_BAKING_CHANGED:
                  if (!(this._registeredNodeEventTypeMask & REGISTERED_EVENT_MASK_LIGHT_PROBE_BAKING_CHANGED)) {
                    this._registerOnLightProbeBakingChanged();
                    this._registeredNodeEventTypeMask |= REGISTERED_EVENT_MASK_LIGHT_PROBE_BAKING_CHANGED;
                  }
                  break;
              }
              this._eventProcessor.on(type, callback, target, useCapture);
            };
            nodeProto.off = function (type, callback, target, useCapture = false) {
              this._eventProcessor.off(type, callback, target, useCapture);
              const hasListeners = this._eventProcessor.hasEventListener(type);
              if (!hasListeners) {
                switch (type) {
                  case NodeEventType.TRANSFORM_CHANGED:
                    this._eventMask &= ~TRANSFORM_ON;
                    break;
                }
              }
            };
            nodeProto.once = function (type, callback, target, useCapture) {
              this._eventProcessor.once(type, callback, target, useCapture);
            };
            nodeProto.emit = function (type, arg0, arg1, arg2, arg3, arg4) {
              this._eventProcessor.emit(type, arg0, arg1, arg2, arg3, arg4);
            };
            nodeProto.dispatchEvent = function (event) {
              this._eventProcessor.dispatchEvent(event);
            };
            nodeProto.hasEventListener = function (type, callback, target) {
              return this._eventProcessor.hasEventListener(type, callback, target);
            };
            nodeProto.targetOff = function (target) {
              this._eventProcessor.targetOff(target);
              if (this._eventMask & TRANSFORM_ON && !this._eventProcessor.hasEventListener(NodeEventType.TRANSFORM_CHANGED)) {
                this._eventMask &= ~TRANSFORM_ON;
              }
            };
            nodeProto.pauseSystemEvents = function pauseSystemEvents(recursive) {
              this._eventProcessor.setEnabled(false, recursive);
            };
            nodeProto.resumeSystemEvents = function resumeSystemEvents(recursive) {
              this._eventProcessor.setEnabled(true, recursive);
            };
            nodeProto.getWritableComponents = function () {
              return this._components;
            };
            nodeProto._setActiveInHierarchy = function (v) {
              return this._activeInHierarchy = v;
            };
            nodeProto._removeComponent = function (component) {
              if (!component) {
                errorID(3814);
                return;
              }
              if (!(this._objFlags & Destroying)) {
                const i = this._components.indexOf(component);
                if (i !== -1) {
                  this._components.splice(i, 1);
                  this.emit(NodeEventType.COMPONENT_REMOVED, component);
                } else if (component.node !== this) {
                  errorID(3815);
                }
              }
            };
            nodeProto._registerIfAttached = undefined ;
            nodeProto._onTransformChanged = function (transformType) {
              this.emit(NodeEventType.TRANSFORM_CHANGED, transformType);
            };
            nodeProto._onParentChanged = function (oldParent) {
              this.emit(NodeEventType.PARENT_CHANGED, oldParent);
            };
            nodeProto._onReAttach = function () {
              this._eventProcessor.reattach();
            };
            nodeProto._onEditorAttached = function (attached) {
            };
            nodeProto._onRemovePersistRootNode = function () {
              legacyCC.game.removePersistRootNode(this);
            };
            nodeProto._onDestroyComponents = function () {
              this._eventProcessor.destroy();
              const comps = this._components;
              for (let i = 0; i < comps.length; ++i) {
                comps[i]._destroyImmediate();
              }
            };
            nodeProto._onMobilityChanged = function () {
              this.emit(NodeEventType.MOBILITY_CHANGED);
            };
            nodeProto._onLayerChanged = function (layer) {
              this.emit(NodeEventType.LAYER_CHANGED, layer);
            };
            nodeProto._onChildRemoved = function (child) {
              const removeAt = this._children.indexOf(child);
              if (removeAt < 0) {
                errorID(1633);
                return;
              }
              this._children.splice(removeAt, 1);
              this.emit(NodeEventType.CHILD_REMOVED, child);
            };
            nodeProto._onChildAdded = function (child) {
              this._children.push(child);
              this.emit(NodeEventType.CHILD_ADDED, child);
            };
            const oldPreDestroy = nodeProto._onPreDestroy;
            nodeProto._onPreDestroy = function _onPreDestroy() {
              const ret = oldPreDestroy.call(this);
              this.emit(NodeEventType.NODE_DESTROYED, this);
              this._eventProcessor.destroy();
              const children = this._children;
              for (let i = 0; i < children.length; ++i) {
                children[i]._destroyImmediate();
              }
              const comps = this._components;
              for (let i = 0; i < comps.length; ++i) {
                comps[i]._destroyImmediate();
              }
              return ret;
            };
            nodeProto.destroyAllChildren = function destroyAllChildren() {
              const children = this._children;
              for (let i = 0, len = children.length; i < len; ++i) {
                children[i].destroy();
              }
            };
            nodeProto._onSiblingOrderChanged = function () {
              this.emit(NodeEventType.CHILDREN_ORDER_CHANGED);
            };
            nodeProto._onActivateNode = function (shouldActiveNow) {
              legacyCC.director._nodeActivator.activateNode(this, shouldActiveNow);
            };
            nodeProto._onPostActivated = function (active) {
              if (active) {
                this._eventProcessor.setEnabled(true);
                this.invalidateChildren(TransformBit.TRS);
                if (this._uiProps && this._uiProps.uiComp) {
                  this._uiProps.uiComp.setNodeDirty();
                  this._uiProps.uiComp.setTextureDirty();
                  this._uiProps.uiComp.markForUpdateRenderData();
                }
              } else {
                this._eventProcessor.setEnabled(false);
              }
            };
            nodeProto._onLightProbeBakingChanged = function () {
              this.emit(NodeEventType.LIGHT_PROBE_BAKING_CHANGED);
            };
            NodeCls._findComponent = function (node, constructor) {
              const cls = constructor;
              const comps = node._components;
              if (cls._sealed) {
                for (let i = 0; i < comps.length; ++i) {
                  const comp = comps[i];
                  if (comp.constructor === constructor) {
                    return comp;
                  }
                }
              } else {
                for (let i = 0; i < comps.length; ++i) {
                  const comp = comps[i];
                  if (comp instanceof constructor) {
                    return comp;
                  }
                }
              }
              return null;
            };
            NodeCls._findComponents = function (node, constructor, components) {
              const cls = constructor;
              const comps = node._components;
              if (cls._sealed) {
                for (let i = 0; i < comps.length; ++i) {
                  const comp = comps[i];
                  if (comp.constructor === constructor) {
                    components.push(comp);
                  }
                }
              } else {
                for (let i = 0; i < comps.length; ++i) {
                  const comp = comps[i];
                  if (comp instanceof constructor) {
                    components.push(comp);
                  }
                }
              }
            };
            NodeCls._findChildComponent = function (children, constructor) {
              for (let i = 0; i < children.length; ++i) {
                const node = children[i];
                let comp = NodeCls._findComponent(node, constructor);
                if (comp) {
                  return comp;
                }
                const childChildren = node.children;
                if (childChildren.length > 0) {
                  comp = NodeCls._findChildComponent(childChildren, constructor);
                  if (comp) {
                    return comp;
                  }
                }
              }
              return null;
            };
            NodeCls._findChildComponents = function (children, constructor, components) {
              for (let i = 0; i < children.length; ++i) {
                const node = children[i];
                NodeCls._findComponents(node, constructor, components);
                const childChildren = node.children;
                if (childChildren.length > 0) {
                  NodeCls._findChildComponents(childChildren, constructor, components);
                }
              }
            };
            NodeCls.isNode = function (obj) {
              return obj instanceof jsb.Node && (obj.constructor === jsb.Node || !(obj instanceof legacyCC.Scene));
            };
            let _tempQuat = new Quat();
            nodeProto.setRTS = function setRTS(rot, pos, scale) {
              if (rot) {
                let val = _tempQuat;
                if (rot instanceof Quat) {
                  val = rot;
                } else {
                  Quat.fromEuler(val, rot.x, rot.y, rot.z);
                }
                _tempFloatArray[0] = 4;
                _tempFloatArray[1] = val.x;
                _tempFloatArray[2] = val.y;
                _tempFloatArray[3] = val.z;
                _tempFloatArray[4] = val.w;
                this._lrot.set(val.x, val.y, val.z, val.w);
              } else {
                _tempFloatArray[0] = 0;
              }
              if (pos) {
                _tempFloatArray[5] = 3;
                _tempFloatArray[6] = pos.x;
                _tempFloatArray[7] = pos.y;
                _tempFloatArray[8] = pos.z;
                this._lpos.set(pos.x, pos.y, pos.z);
              } else {
                _tempFloatArray[5] = 0;
              }
              if (scale) {
                _tempFloatArray[9] = 3;
                _tempFloatArray[10] = scale.x;
                _tempFloatArray[11] = scale.y;
                _tempFloatArray[12] = scale.z;
                this._lscale.set(scale.x, scale.y, scale.z);
              } else {
                _tempFloatArray[9] = 0;
              }
              this._setRTS();
            };
            nodeProto.getPosition = function getPosition(out) {
              if (out) {
                return Vec3.set(out, this._lpos.x, this._lpos.y, this._lpos.z);
              }
              return Vec3.copy(new Vec3(), this._lpos);
            };
            nodeProto.setPosition = function setPosition(val, y, z) {
              if (y === undefined && z === undefined) {
                _tempFloatArray[0] = 3;
                const pos = val;
                this._lpos.x = _tempFloatArray[1] = pos.x;
                this._lpos.y = _tempFloatArray[2] = pos.y;
                this._lpos.z = _tempFloatArray[3] = pos.z;
              } else if (z === undefined) {
                _tempFloatArray[0] = 2;
                this._lpos.x = _tempFloatArray[1] = val;
                this._lpos.y = _tempFloatArray[2] = y;
              } else {
                _tempFloatArray[0] = 3;
                this._lpos.x = _tempFloatArray[1] = val;
                this._lpos.y = _tempFloatArray[2] = y;
                this._lpos.z = _tempFloatArray[3] = z;
              }
              this._setPosition();
            };
            nodeProto.getRotation = function getRotation(out) {
              const lrot = this._lrot;
              if (out) {
                return Quat.set(out, lrot.x, lrot.y, lrot.z, lrot.w);
              }
              return Quat.copy(new Quat(), lrot);
            };
            nodeProto.setRotation = function setRotation(val, y, z, w) {
              if (y === undefined || z === undefined || w === undefined) {
                const rot = val;
                this._lrot.x = _tempFloatArray[0] = rot.x;
                this._lrot.y = _tempFloatArray[1] = rot.y;
                this._lrot.z = _tempFloatArray[2] = rot.z;
                this._lrot.w = _tempFloatArray[3] = rot.w;
              } else {
                this._lrot.x = _tempFloatArray[0] = val;
                this._lrot.y = _tempFloatArray[1] = y;
                this._lrot.z = _tempFloatArray[2] = z;
                this._lrot.w = _tempFloatArray[3] = w;
              }
              this._setRotation();
            };
            nodeProto.setRotationFromEuler = function setRotationFromEuler(val, y, zOpt) {
              const z = zOpt === undefined ? this._euler.z : zOpt;
              if (y === undefined) {
                const euler = val;
                this._euler.x = _tempFloatArray[0] = euler.x;
                this._euler.y = _tempFloatArray[1] = euler.y;
                this._euler.z = _tempFloatArray[2] = euler.z;
              } else {
                this._euler.x = _tempFloatArray[0] = val;
                this._euler.y = _tempFloatArray[1] = y;
                this._euler.z = _tempFloatArray[2] = z;
              }
              this._setRotationFromEuler();
            };
            nodeProto.getScale = function getScale(out) {
              if (out) {
                return Vec3.set(out, this._lscale.x, this._lscale.y, this._lscale.z);
              }
              return Vec3.copy(new Vec3(), this._lscale);
            };
            nodeProto.setScale = function setScale(val, y, z) {
              if (y === undefined && z === undefined) {
                _tempFloatArray[0] = 3;
                const scale = val;
                this._lscale.x = _tempFloatArray[1] = scale.x;
                this._lscale.y = _tempFloatArray[2] = scale.y;
                this._lscale.z = _tempFloatArray[3] = scale.z;
              } else if (z === undefined) {
                _tempFloatArray[0] = 2;
                this._lscale.x = _tempFloatArray[1] = val;
                this._lscale.y = _tempFloatArray[2] = y;
              } else {
                _tempFloatArray[0] = 3;
                this._lscale.x = _tempFloatArray[1] = val;
                this._lscale.y = _tempFloatArray[2] = y;
                this._lscale.z = _tempFloatArray[3] = z;
              }
              this._setScale();
            };
            nodeProto.getWorldPosition = function getWorldPosition(out) {
              this._getWorldPosition();
              out = out || new Vec3();
              return out.set(_tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2]);
            };
            nodeProto.getWorldRotation = function getWorldRotation(out) {
              this._getWorldRotation();
              out = out || new Quat();
              return out.set(_tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2], _tempFloatArray[3]);
            };
            nodeProto.getWorldScale = function getWorldScale(out) {
              this._getWorldScale();
              out = out || new Vec3();
              return out.set(_tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2]);
            };
            nodeProto.getWorldMatrix = function getWorldMatrix(out) {
              this._getWorldMatrix();
              out = out || new Mat4();
              fillMat4WithTempFloatArray(out);
              return out;
            };
            nodeProto.getEulerAngles = function getEulerAngles(out) {
              this._getEulerAngles();
              out = out || new Vec3();
              return out.set(_tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2]);
            };
            nodeProto.getForward = function getForward(out) {
              this._getForward();
              out = out || new Vec3();
              return out.set(_tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2]);
            };
            nodeProto.getUp = function getUp(out) {
              this._getUp();
              out = out || new Vec3();
              return out.set(_tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2]);
            };
            nodeProto.getRight = function getRight(out) {
              this._getRight();
              out = out || new Vec3();
              return out.set(_tempFloatArray[0], _tempFloatArray[1], _tempFloatArray[2]);
            };
            nodeProto.inverseTransformPoint = function inverseTransformPoint(out, p) {
              _tempFloatArray[0] = p.x;
              _tempFloatArray[1] = p.y;
              _tempFloatArray[2] = p.z;
              this._inverseTransformPoint();
              out.x = _tempFloatArray[0];
              out.y = _tempFloatArray[1];
              out.z = _tempFloatArray[2];
              return out;
            };
            nodeProto.getWorldRT = function getWorldRT(out) {
              out = out || new Mat4();
              this._getWorldRT();
              fillMat4WithTempFloatArray(out);
              return out;
            };
            nodeProto.getWorldRS = function getWorldRS(out) {
              out = out || new Mat4();
              this._getWorldRS();
              fillMat4WithTempFloatArray(out);
              return out;
            };
            nodeProto.isTransformDirty = function () {
              return this._transformFlags !== TransformBit.NONE;
            };
            Object.defineProperty(nodeProto, 'name', {
              configurable: true,
              enumerable: true,
              get() {
                return this._name;
              },
              set(v) {
                this._name = v;
              }
            });
            Object.defineProperty(nodeProto, 'position', {
              configurable: true,
              enumerable: true,
              get() {
                return this._lpos;
              },
              set(v) {
                this.setPosition(v);
              }
            });
            Object.defineProperty(nodeProto, 'rotation', {
              configurable: true,
              enumerable: true,
              get() {
                return this._lrot;
              },
              set(v) {
                this.setRotation(v);
              }
            });
            Object.defineProperty(nodeProto, 'scale', {
              configurable: true,
              enumerable: true,
              get() {
                return this._lscale;
              },
              set(v) {
                this.setScale(v);
              }
            });
            Object.defineProperty(nodeProto, 'worldPosition', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getWorldPosition();
              },
              set(v) {
                this.setWorldPosition(v);
              }
            });
            Object.defineProperty(nodeProto, 'worldRotation', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getWorldRotation();
              },
              set(v) {
                this.setWorldRotation(v);
              }
            });
            Object.defineProperty(nodeProto, 'worldScale', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getWorldScale();
              },
              set(v) {
                this.setWorldScale(v);
              }
            });
            Object.defineProperty(nodeProto, '_pos', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getWorldPosition();
              }
            });
            Object.defineProperty(nodeProto, '_rot', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getWorldRotation();
              }
            });
            Object.defineProperty(nodeProto, '_scale', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getWorldScale();
              }
            });
            Object.defineProperty(nodeProto, 'eulerAngles', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getEulerAngles();
              },
              set(v) {
                this.setRotationFromEuler(v.x, v.y, v.z);
              }
            });
            Object.defineProperty(nodeProto, 'worldMatrix', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getWorldMatrix();
              }
            });
            Object.defineProperty(nodeProto, '_mat', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getWorldMatrix();
              }
            });
            Object.defineProperty(nodeProto, 'activeInHierarchy', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint8Arr[0] != 0;
              },
              set(v) {
                this._sharedUint8Arr[0] = v ? 1 : 0;
              }
            });
            Object.defineProperty(nodeProto, '_activeInHierarchy', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint8Arr[0] != 0;
              },
              set(v) {
                this._sharedUint8Arr[0] = v ? 1 : 0;
              }
            });
            Object.defineProperty(nodeProto, 'layer', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint32Arr[1];
              },
              set(v) {
                this._sharedUint32Arr[1] = v;
                if (this._uiProps && this._uiProps.uiComp) {
                  this._uiProps.uiComp.setNodeDirty();
                  this._uiProps.uiComp.markForUpdateRenderData();
                }
                this.emit(NodeEventType.LAYER_CHANGED, v);
              }
            });
            Object.defineProperty(nodeProto, '_layer', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint32Arr[1];
              },
              set(v) {
                this._sharedUint32Arr[1] = v;
              }
            });
            Object.defineProperty(nodeProto, '_eventMask', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint32Arr[0];
              },
              set(v) {
                this._sharedUint32Arr[0] = v;
              }
            });
            Object.defineProperty(nodeProto, '_siblingIndex', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedInt32Arr[0];
              },
              set(v) {
                this._sharedInt32Arr[0] = v;
              }
            });
            Object.defineProperty(nodeProto, 'prefab', {
              configurable: true,
              enumerable: true,
              get() {
                return this._prefab;
              }
            });
            Object.defineProperty(nodeProto, 'siblingIndex', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedInt32Arr[0];
              },
              set(v) {
                this._sharedInt32Arr[0] = v;
              }
            });
            nodeProto.getSiblingIndex = function getSiblingIndex() {
              return this._sharedInt32Arr[0];
            };
            Object.defineProperty(nodeProto, '_transformFlags', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint32Arr[2];
              },
              set(v) {
                this._sharedUint32Arr[2] = v;
              }
            });
            Object.defineProperty(nodeProto, '_active', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint8Arr[1] != 0;
              },
              set(v) {
                this._sharedUint8Arr[1] = v ? 1 : 0;
              }
            });
            Object.defineProperty(nodeProto, 'active', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint8Arr[1] != 0;
              },
              set(v) {
                this.setActive(!!v);
              }
            });
            Object.defineProperty(nodeProto, '_static', {
              configurable: true,
              enumerable: true,
              get() {
                return this._sharedUint8Arr[2] != 0;
              },
              set(v) {
                this._sharedUint8Arr[2] = v ? 1 : 0;
              }
            });
            Object.defineProperty(nodeProto, 'forward', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getForward();
              },
              set(dir) {
                this.setForward(dir);
              }
            });
            Object.defineProperty(nodeProto, 'up', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getUp();
              }
            });
            Object.defineProperty(nodeProto, 'right', {
              configurable: true,
              enumerable: true,
              get() {
                return this.getRight();
              }
            });
            Object.defineProperty(nodeProto, 'eventProcessor', {
              configurable: true,
              enumerable: true,
              get() {
                return this._eventProcessor;
              }
            });
            Object.defineProperty(nodeProto, 'components', {
              configurable: true,
              enumerable: true,
              get() {
                return this._components;
              }
            });
            Object.defineProperty(nodeProto, '_parent', {
              configurable: true,
              enumerable: true,
              get() {
                this._parentRef = this._parentInternal;
                return this._parentRef;
              },
              set(v) {
                this._parentRef = this._parentInternal = v;
              }
            });
            Object.defineProperty(nodeProto, 'parent', {
              configurable: true,
              enumerable: true,
              get() {
                this._parentRef = this.getParent();
                return this._parentRef;
              },
              set(v) {
                this._parentRef = v;
                this.setParent(v);
              }
            });
            Object.defineProperty(nodeProto, 'children', {
              configurable: true,
              enumerable: true,
              get() {
                return this._children;
              },
              set(v) {
                this._children = v;
              }
            });
            Object.defineProperty(nodeProto, 'scene', {
              configurable: true,
              enumerable: true,
              get() {
                return this._scene;
              }
            });
            nodeProto.rotate = function (rot, ns) {
              _tempFloatArray[1] = rot.x;
              _tempFloatArray[2] = rot.y;
              _tempFloatArray[3] = rot.z;
              _tempFloatArray[4] = rot.w;
              if (ns) {
                _tempFloatArray[5] = ns;
                _tempFloatArray[0] = 5;
              } else {
                _tempFloatArray[0] = 4;
              }
              this._rotateForJS();
              const lrot = this._lrot;
              lrot.x = _tempFloatArray[0];
              lrot.y = _tempFloatArray[1];
              lrot.z = _tempFloatArray[2];
              lrot.w = _tempFloatArray[3];
            };
            nodeProto.addChild = function (child) {
              child.setParent(this);
            };
            nodeProto.insertChild = function (child, siblingIndex) {
              child.parent = this;
              child.setSiblingIndex(siblingIndex);
            };
            nodeProto[serializeTag] = function (serializationOutput, context) {
              {
                serializationOutput.writeThis();
              }
              const isMountedChild = () => {
                var _this$editorExtrasTag;
                return !!((_this$editorExtrasTag = this[editorExtrasTag]) !== null && _this$editorExtrasTag !== void 0 && _this$editorExtrasTag.mountedRoot);
              };
              const isSyncPrefab = () => {
                var _this$_prefab, _this$_prefab$root, _this$_prefab$root$_p, _this$_prefab2;
                return ((_this$_prefab = this._prefab) === null || _this$_prefab === void 0 ? void 0 : (_this$_prefab$root = _this$_prefab.root) === null || _this$_prefab$root === void 0 ? void 0 : (_this$_prefab$root$_p = _this$_prefab$root._prefab) === null || _this$_prefab$root$_p === void 0 ? void 0 : _this$_prefab$root$_p.instance) && ((this === null || this === void 0 ? void 0 : (_this$_prefab2 = this._prefab) === null || _this$_prefab2 === void 0 ? void 0 : _this$_prefab2.instance) || !isMountedChild());
              };
              const canDiscardByPrefabRoot = () => !(context.customArguments[reserveContentsForAllSyncablePrefabTag] || !isSyncPrefab() || context.root === this);
              if (canDiscardByPrefabRoot()) {
                var _this$_prefab3;
                const isRoot = ((_this$_prefab3 = this._prefab) === null || _this$_prefab3 === void 0 ? void 0 : _this$_prefab3.root) === this;
                if (isRoot) {
                  let isNestedPrefab = false;
                  let parent = this.getParent();
                  while (parent) {
                    var _parent$_prefab;
                    const nestedRoots = (_parent$_prefab = parent._prefab) === null || _parent$_prefab === void 0 ? void 0 : _parent$_prefab.nestedPrefabInstanceRoots;
                    if (nestedRoots && nestedRoots.length > 0) {
                      isNestedPrefab = !nestedRoots.some(root => root === this);
                      break;
                    }
                    parent = parent.getParent();
                  }
                  if (!isNestedPrefab) {
                    serializationOutput.writeProperty('_objFlags', this._objFlags);
                    serializationOutput.writeProperty('_parent', this._parent);
                    serializationOutput.writeProperty('_prefab', this._prefab);
                    if (context.customArguments.keepNodeUuid) {
                      serializationOutput.writeProperty('_id', this._id);
                    }
                  }
                  serializationOutput.writeProperty(editorExtrasTag, this[editorExtrasTag]);
                }
              } else {
                serializationOutput.writeThis();
              }
            };
            nodeProto._onActiveNode = function (shouldActiveNow) {
              legacyCC.director._nodeActivator.activateNode(this, shouldActiveNow);
            };
            nodeProto._onBatchCreated = function (dontSyncChildPrefab) {
              this.hasChangedFlags = TRANSFORMBIT_TRS;
              const children = this._children;
              const len = children.length;
              let child;
              for (let i = 0; i < len; ++i) {
                child = children[i];
                child._siblingIndex = i;
                child._onBatchCreated(dontSyncChildPrefab);
              }
              syncNodeValues(this);
            };
            nodeProto._onSceneUpdated = function (scene) {
              this._scene = scene;
            };
            nodeProto._onLocalPositionUpdated = function (x, y, z) {
              const lpos = this._lpos;
              lpos.x = x;
              lpos.y = y;
              lpos.z = z;
            };
            nodeProto._onLocalRotationUpdated = function (x, y, z, w) {
              const lrot = this._lrot;
              lrot.x = x;
              lrot.y = y;
              lrot.z = z;
              lrot.w = w;
            };
            nodeProto._onLocalScaleUpdated = function (x, y, z) {
              const lscale = this._lscale;
              lscale.x = x;
              lscale.y = y;
              lscale.z = z;
            };
            nodeProto._onLocalPositionRotationScaleUpdated = function (px, py, pz, rx, ry, rz, rw, sx, sy, sz) {
              const lpos = this._lpos;
              lpos.x = px;
              lpos.y = py;
              lpos.z = pz;
              const lrot = this._lrot;
              lrot.x = rx;
              lrot.y = ry;
              lrot.z = rz;
              lrot.w = rw;
              const lscale = this._lscale;
              lscale.x = sx;
              lscale.y = sy;
              lscale.z = sz;
            };
            nodeProto._instantiate = function (cloned, isSyncedNode) {
              if (!cloned) {
                cloned = legacyCC.instantiate._clone(this, this);
              }
              cloned._prefab;
              cloned._parent = null;
              cloned._onBatchCreated(isSyncedNode);
              return cloned;
            };
            nodeProto._onSiblingIndexChanged = function (index) {
              const siblings = this._parent._children;
              index = index !== -1 ? index : siblings.length - 1;
              const oldIndex = siblings.indexOf(this);
              if (index !== oldIndex) {
                siblings.splice(oldIndex, 1);
                if (index < siblings.length) {
                  siblings.splice(index, 0, this);
                } else {
                  siblings.push(this);
                }
              }
            };
            nodeProto._ctor = function (name) {
              this.__nativeRefs = {};
              this._parentRef = null;
              this.__jsb_ref_id = undefined;
              this._iN$t = null;
              this.__editorExtras__ = {
                editorOnly: true
              };
              this._components = [];
              this._eventProcessor = new legacyCC.NodeEventProcessor(this);
              this._uiProps = new NodeUIProperties(this);
              const sharedArrayBuffer = this._initAndReturnSharedBuffer();
              this._sharedUint32Arr = new Uint32Array(sharedArrayBuffer, 0, 3);
              this._sharedInt32Arr = new Int32Array(sharedArrayBuffer, 12, 1);
              this._sharedUint8Arr = new Uint8Array(sharedArrayBuffer, 16, 3);
              this._sharedUint32Arr[1] = Layers.Enum.DEFAULT;
              this._scene = null;
              this._prefab = null;
              this._originalSceneId = '';
              this._children = [];
              this._lpos = new Vec3();
              this._lrot = new Quat();
              this._lscale = new Vec3(1, 1, 1);
              this._euler = new Vec3();
              this._registeredNodeEventTypeMask = 0;
            };
            nodePolyfill(Node);
            patch_cc_Node({
              Node,
              Vec3,
              Quat,
              MobilityMode,
              Layers
            });

            CCClass.Attr.setClassAttr(EventHandler, 'target', 'type', 'Object');
            CCClass.Attr.setClassAttr(EventHandler, 'target', 'ctor', Node);

            class EventGamepad extends Event {
              constructor(type, gamepad) {
                super(type, false);
                this.gamepad = void 0;
                this.gamepad = gamepad;
              }
            } exports('au', EventGamepad);

            class EventHandle extends Event {
              constructor(eventType, handleInputDevice) {
                super(eventType, false);
                this.handleInputDevice = void 0;
                this.handleInputDevice = handleInputDevice;
              }
            } exports('av', EventHandle);

            class EventHMD extends Event {
              constructor(eventType, hmdInputDevice) {
                super(eventType, false);
                this.hmdInputDevice = void 0;
                this.hmdInputDevice = hmdInputDevice;
              }
            } exports('aw', EventHMD);

            class EventHandheld extends Event {
              constructor(eventType, handheldInputDevice) {
                super(eventType, false);
                this.handheldInputDevice = void 0;
                this.handheldInputDevice = handheldInputDevice;
              }
            } exports('ax', EventHandheld);

            class Acceleration {
              constructor(x = 0, y = 0, z = 0, timestamp = 0) {
                this.x = void 0;
                this.y = void 0;
                this.z = void 0;
                this.timestamp = void 0;
                this.x = x;
                this.y = y;
                this.z = z;
                this.timestamp = timestamp;
              }
            } exports('ay', Acceleration);

            const _cachedArray = new Array(16);
            let _currentHovered = null;
            const pos = new Vec2();
            const _touchEvents = [NodeEventType.TOUCH_START, NodeEventType.TOUCH_MOVE, NodeEventType.TOUCH_END, NodeEventType.TOUCH_CANCEL];
            const _mouseEvents = [NodeEventType.MOUSE_DOWN, NodeEventType.MOUSE_ENTER, NodeEventType.MOUSE_MOVE, NodeEventType.MOUSE_LEAVE, NodeEventType.MOUSE_UP, NodeEventType.MOUSE_WHEEL];
            let DispatcherEventType; exports('aY', DispatcherEventType);
            (function (DispatcherEventType) {
              DispatcherEventType[DispatcherEventType["ADD_POINTER_EVENT_PROCESSOR"] = 0] = "ADD_POINTER_EVENT_PROCESSOR";
              DispatcherEventType[DispatcherEventType["REMOVE_POINTER_EVENT_PROCESSOR"] = 1] = "REMOVE_POINTER_EVENT_PROCESSOR";
              DispatcherEventType[DispatcherEventType["MARK_LIST_DIRTY"] = 2] = "MARK_LIST_DIRTY";
            })(DispatcherEventType || (exports('aY', DispatcherEventType = {})));
            class NodeEventProcessor {
              get isEnabled() {
                return this._isEnabled;
              }
              get node() {
                return this._node;
              }
              constructor(node) {
                this.claimedTouchIdList = [];
                this.maskList = null;
                this.cachedCameraPriority = 0;
                this.previousMouseIn = false;
                this.bubblingTarget = null;
                this.capturingTarget = null;
                this.shouldHandleEventMouse = false;
                this.shouldHandleEventTouch = false;
                this._dispatchingTouch = null;
                this._isEnabled = false;
                this._node = void 0;
                this._node = node;
              }
              setEnabled(value, recursive = false) {
                if (this._isEnabled === value) {
                  return;
                }
                this._isEnabled = value;
                const node = this.node;
                const children = node.children;
                if (value) {
                  this._attachMask();
                }
                NodeEventProcessor.callbacksInvoker.emit(DispatcherEventType.MARK_LIST_DIRTY);
                if (recursive && children.length > 0) {
                  for (let i = 0; i < children.length; ++i) {
                    const child = children[i];
                    child.eventProcessor.setEnabled(value, true);
                  }
                }
              }
              reattach() {
                let currentMaskList;
                this.node.walk(node => {
                  if (!currentMaskList) {
                    currentMaskList = this._searchComponentsInParent(NodeEventProcessor._maskComp);
                  }
                  node.eventProcessor.maskList = currentMaskList;
                });
              }
              destroy() {
                if (_currentHovered === this._node) {
                  _currentHovered = null;
                }
                if (this.capturingTarget) this.capturingTarget.clear();
                if (this.bubblingTarget) this.bubblingTarget.clear();
                NodeEventProcessor.callbacksInvoker.emit(DispatcherEventType.REMOVE_POINTER_EVENT_PROCESSOR, this);
                if (this._dispatchingTouch) {
                  const cancelEvent = new EventTouch([this._dispatchingTouch], true, InputEventType.TOUCH_CANCEL);
                  cancelEvent.touch = this._dispatchingTouch;
                  this.dispatchEvent(cancelEvent);
                  this._dispatchingTouch = null;
                }
              }
              on(type, callback, target, useCapture) {
                this._tryEmittingAddEvent(type);
                useCapture = !!useCapture;
                let invoker;
                if (useCapture) {
                  var _this$capturingTarget;
                  invoker = (_this$capturingTarget = this.capturingTarget) !== null && _this$capturingTarget !== void 0 ? _this$capturingTarget : this.capturingTarget = this._newCallbacksInvoker();
                } else {
                  var _this$bubblingTarget;
                  invoker = (_this$bubblingTarget = this.bubblingTarget) !== null && _this$bubblingTarget !== void 0 ? _this$bubblingTarget : this.bubblingTarget = this._newCallbacksInvoker();
                }
                invoker.on(type, callback, target);
                return callback;
              }
              once(type, callback, target, useCapture) {
                this._tryEmittingAddEvent(type);
                useCapture = !!useCapture;
                let invoker;
                if (useCapture) {
                  var _this$capturingTarget2;
                  invoker = (_this$capturingTarget2 = this.capturingTarget) !== null && _this$capturingTarget2 !== void 0 ? _this$capturingTarget2 : this.capturingTarget = this._newCallbacksInvoker();
                } else {
                  var _this$bubblingTarget2;
                  invoker = (_this$bubblingTarget2 = this.bubblingTarget) !== null && _this$bubblingTarget2 !== void 0 ? _this$bubblingTarget2 : this.bubblingTarget = this._newCallbacksInvoker();
                }
                invoker.on(type, callback, target, true);
                return callback;
              }
              off(type, callback, target, useCapture) {
                var _invoker;
                useCapture = !!useCapture;
                let invoker;
                if (useCapture) {
                  invoker = this.capturingTarget;
                } else {
                  invoker = this.bubblingTarget;
                }
                (_invoker = invoker) === null || _invoker === void 0 ? void 0 : _invoker.off(type, callback, target);
              }
              targetOff(target) {
                var _this$capturingTarget3, _this$bubblingTarget3;
                (_this$capturingTarget3 = this.capturingTarget) === null || _this$capturingTarget3 === void 0 ? void 0 : _this$capturingTarget3.removeAll(target);
                (_this$bubblingTarget3 = this.bubblingTarget) === null || _this$bubblingTarget3 === void 0 ? void 0 : _this$bubblingTarget3.removeAll(target);
                if (this.shouldHandleEventTouch && !this._hasTouchListeners()) {
                  this.shouldHandleEventTouch = false;
                }
                if (this.shouldHandleEventMouse && !this._hasMouseListeners()) {
                  this.shouldHandleEventMouse = false;
                }
                if (!this._hasPointerListeners()) {
                  NodeEventProcessor.callbacksInvoker.emit(DispatcherEventType.REMOVE_POINTER_EVENT_PROCESSOR, this);
                }
              }
              emit(type, arg0, arg1, arg2, arg3, arg4) {
                var _this$bubblingTarget4;
                (_this$bubblingTarget4 = this.bubblingTarget) === null || _this$bubblingTarget4 === void 0 ? void 0 : _this$bubblingTarget4.emit(type, arg0, arg1, arg2, arg3, arg4);
              }
              dispatchEvent(event) {
                const owner = this.node;
                let target;
                let i = 0;
                event.target = owner;
                _cachedArray.length = 0;
                this.getCapturingTargets(event.type, _cachedArray);
                event.eventPhase = 1;
                for (i = _cachedArray.length - 1; i >= 0; --i) {
                  target = _cachedArray[i];
                  if (target.eventProcessor.capturingTarget) {
                    event.currentTarget = target;
                    target.eventProcessor.capturingTarget.emit(event.type, event, _cachedArray);
                    if (event.propagationStopped) {
                      _cachedArray.length = 0;
                      return;
                    }
                  }
                }
                _cachedArray.length = 0;
                event.eventPhase = 2;
                event.currentTarget = owner;
                if (this.capturingTarget) {
                  this.capturingTarget.emit(event.type, event);
                }
                if (!event.propagationImmediateStopped && this.bubblingTarget) {
                  this.bubblingTarget.emit(event.type, event);
                }
                if (!event.propagationStopped && event.bubbles) {
                  this.getBubblingTargets(event.type, _cachedArray);
                  event.eventPhase = 3;
                  for (i = 0; i < _cachedArray.length; ++i) {
                    target = _cachedArray[i];
                    if (target.eventProcessor.bubblingTarget) {
                      event.currentTarget = target;
                      target.eventProcessor.bubblingTarget.emit(event.type, event);
                      if (event.propagationStopped) {
                        _cachedArray.length = 0;
                        return;
                      }
                    }
                  }
                }
                _cachedArray.length = 0;
              }
              hasEventListener(type, callback, target) {
                let has = false;
                if (this.bubblingTarget) {
                  has = this.bubblingTarget.hasEventListener(type, callback, target);
                }
                if (!has && this.capturingTarget) {
                  has = this.capturingTarget.hasEventListener(type, callback, target);
                }
                return has;
              }
              getCapturingTargets(type, targets) {
                let parent = this._node.parent;
                while (parent) {
                  var _parent$eventProcesso;
                  if ((_parent$eventProcesso = parent.eventProcessor.capturingTarget) !== null && _parent$eventProcesso !== void 0 && _parent$eventProcesso.hasEventListener(type)) {
                    targets.push(parent);
                  }
                  parent = parent.parent;
                }
              }
              getBubblingTargets(type, targets) {
                let parent = this._node.parent;
                while (parent) {
                  var _parent$eventProcesso2;
                  if ((_parent$eventProcesso2 = parent.eventProcessor.bubblingTarget) !== null && _parent$eventProcesso2 !== void 0 && _parent$eventProcesso2.hasEventListener(type)) {
                    targets.push(parent);
                  }
                  parent = parent.parent;
                }
              }
              onUpdatingSiblingIndex() {
                NodeEventProcessor.callbacksInvoker.emit(DispatcherEventType.MARK_LIST_DIRTY);
              }
              _searchComponentsInParent(ctor) {
                const node = this.node;
                if (ctor) {
                  let index = 0;
                  let list = [];
                  for (let curr = node; curr && Node.isNode(curr); curr = curr.parent, ++index) {
                    const comp = curr.getComponent(ctor);
                    if (comp) {
                      const next = {
                        index,
                        comp
                      };
                      if (list) {
                        list.push(next);
                      } else {
                        list = [next];
                      }
                    }
                  }
                  return list.length > 0 ? list : null;
                }
                return null;
              }
              _attachMask() {
                this.maskList = this._searchComponentsInParent(NodeEventProcessor._maskComp);
              }
              _isTouchEvent(type) {
                const index = _touchEvents.indexOf(type);
                return index !== -1;
              }
              _isMouseEvent(type) {
                const index = _mouseEvents.indexOf(type);
                return index !== -1;
              }
              _hasTouchListeners() {
                for (let i = 0; i < _touchEvents.length; ++i) {
                  const eventType = _touchEvents[i];
                  if (this.hasEventListener(eventType)) {
                    return true;
                  }
                }
                return false;
              }
              _hasMouseListeners() {
                for (let i = 0; i < _mouseEvents.length; ++i) {
                  const eventType = _mouseEvents[i];
                  if (this.hasEventListener(eventType)) {
                    return true;
                  }
                }
                return false;
              }
              _hasPointerListeners() {
                const has = this._hasTouchListeners();
                if (has) {
                  return true;
                }
                return this._hasMouseListeners();
              }
              _tryEmittingAddEvent(typeToAdd) {
                const isTouchEvent = this._isTouchEvent(typeToAdd);
                const isMouseEvent = this._isMouseEvent(typeToAdd);
                if (isTouchEvent) {
                  this.shouldHandleEventTouch = true;
                } else if (isMouseEvent) {
                  this.shouldHandleEventMouse = true;
                }
                if ((isTouchEvent || isMouseEvent) && !this._hasPointerListeners()) {
                  NodeEventProcessor.callbacksInvoker.emit(DispatcherEventType.ADD_POINTER_EVENT_PROCESSOR, this);
                }
              }
              _newCallbacksInvoker() {
                const callbacksInvoker = new CallbacksInvoker();
                callbacksInvoker._registerOffCallback(() => {
                  if (this.shouldHandleEventTouch && !this._hasTouchListeners()) {
                    this.shouldHandleEventTouch = false;
                  }
                  if (this.shouldHandleEventMouse && !this._hasMouseListeners()) {
                    this.shouldHandleEventMouse = false;
                  }
                  if (!this._hasPointerListeners()) {
                    NodeEventProcessor.callbacksInvoker.emit(DispatcherEventType.REMOVE_POINTER_EVENT_PROCESSOR, this);
                  }
                });
                return callbacksInvoker;
              }
              _handleEventMouse(eventMouse) {
                switch (eventMouse.type) {
                  case InputEventType.MOUSE_DOWN:
                    return this._handleMouseDown(eventMouse);
                  case InputEventType.MOUSE_MOVE:
                    return this._handleMouseMove(eventMouse);
                  case InputEventType.MOUSE_UP:
                    return this._handleMouseUp(eventMouse);
                  case InputEventType.MOUSE_WHEEL:
                    return this._handleMouseWheel(eventMouse);
                  default:
                    return false;
                }
              }
              _handleMouseDown(event) {
                const node = this._node;
                if (!node || !node._uiProps.uiTransformComp) {
                  return false;
                }
                event.getLocation(pos);
                if (node._uiProps.uiTransformComp.hitTest(pos, event.windowId)) {
                  event.type = NodeEventType.MOUSE_DOWN;
                  event.bubbles = true;
                  node.dispatchEvent(event);
                  event.propagationStopped = true;
                  return true;
                }
                return false;
              }
              _handleMouseMove(event) {
                const node = this._node;
                if (!node || !node._uiProps.uiTransformComp) {
                  return false;
                }
                event.getLocation(pos);
                const hit = node._uiProps.uiTransformComp.hitTest(pos, event.windowId);
                if (hit) {
                  if (!this.previousMouseIn) {
                    if (_currentHovered && _currentHovered !== node) {
                      event.type = NodeEventType.MOUSE_LEAVE;
                      _currentHovered.dispatchEvent(event);
                      _currentHovered.eventProcessor.previousMouseIn = false;
                    }
                    _currentHovered = node;
                    event.type = NodeEventType.MOUSE_ENTER;
                    node.dispatchEvent(event);
                    this.previousMouseIn = true;
                  }
                  event.type = NodeEventType.MOUSE_MOVE;
                  event.bubbles = true;
                  node.dispatchEvent(event);
                  event.propagationStopped = true;
                  return true;
                } else if (this.previousMouseIn) {
                  event.type = NodeEventType.MOUSE_LEAVE;
                  node.dispatchEvent(event);
                  this.previousMouseIn = false;
                  _currentHovered = null;
                }
                return false;
              }
              _handleMouseUp(event) {
                const node = this._node;
                if (!node || !node._uiProps.uiTransformComp) {
                  return false;
                }
                event.getLocation(pos);
                if (node._uiProps.uiTransformComp.hitTest(pos, event.windowId)) {
                  event.type = NodeEventType.MOUSE_UP;
                  event.bubbles = true;
                  node.dispatchEvent(event);
                  event.propagationStopped = true;
                  return true;
                }
                return false;
              }
              _handleMouseWheel(event) {
                const node = this._node;
                if (!node || !node._uiProps.uiTransformComp) {
                  return false;
                }
                event.getLocation(pos);
                if (node._uiProps.uiTransformComp.hitTest(pos, event.windowId)) {
                  event.type = NodeEventType.MOUSE_WHEEL;
                  event.bubbles = true;
                  node.dispatchEvent(event);
                  event.propagationStopped = true;
                  return true;
                }
                return false;
              }
              _handleEventTouch(eventTouch) {
                switch (eventTouch.type) {
                  case InputEventType.TOUCH_START:
                    return this._handleTouchStart(eventTouch);
                  case InputEventType.TOUCH_MOVE:
                    return this._handleTouchMove(eventTouch);
                  case InputEventType.TOUCH_END:
                    return this._handleTouchEnd(eventTouch);
                  case InputEventType.TOUCH_CANCEL:
                    return this._handleTouchCancel(eventTouch);
                  default:
                    return false;
                }
              }
              _handleTouchStart(event) {
                const node = this.node;
                if (!node || !node._uiProps.uiTransformComp) {
                  return false;
                }
                event.getLocation(pos);
                if (node._uiProps.uiTransformComp.hitTest(pos, event.windowId)) {
                  event.type = NodeEventType.TOUCH_START;
                  event.bubbles = true;
                  this._dispatchingTouch = event.touch;
                  node.dispatchEvent(event);
                  return true;
                }
                return false;
              }
              _handleTouchMove(event) {
                const node = this.node;
                if (!node || !node._uiProps.uiTransformComp) {
                  return false;
                }
                event.type = NodeEventType.TOUCH_MOVE;
                event.bubbles = true;
                this._dispatchingTouch = event.touch;
                node.dispatchEvent(event);
                return true;
              }
              _handleTouchEnd(event) {
                const node = this.node;
                if (!node || !node._uiProps.uiTransformComp) {
                  return;
                }
                event.getLocation(pos);
                if (node._uiProps.uiTransformComp.hitTest(pos, event.windowId)) {
                  event.type = NodeEventType.TOUCH_END;
                } else {
                  event.type = NodeEventType.TOUCH_CANCEL;
                }
                event.bubbles = true;
                node.dispatchEvent(event);
                this._dispatchingTouch = null;
              }
              _handleTouchCancel(event) {
                const node = this.node;
                if (!node || !node._uiProps.uiTransformComp) {
                  return;
                }
                event.type = NodeEventType.TOUCH_CANCEL;
                event.bubbles = true;
                node.dispatchEvent(event);
                this._dispatchingTouch = null;
              }
            } exports('aX', NodeEventProcessor);
            NodeEventProcessor._maskComp = null;
            NodeEventProcessor.callbacksInvoker = new CallbacksInvoker();
            legacyCC.NodeEventProcessor = NodeEventProcessor;

            const DEFAULT_WORLD_MIN_POS = exports('$', new Vec3(-1024.0, -1024.0, -1024.0));
            const DEFAULT_WORLD_MAX_POS = exports('a0', new Vec3(1024.0, 1024.0, 1024.0));
            const DEFAULT_OCTREE_DEPTH = exports('a1', 8);
            const FogType = exports('a2', Enum({
              LINEAR: 0,
              EXP: 1,
              EXP_SQUARED: 2,
              LAYERED: 3
            }));
            const ShadowSize = exports('a3', Enum({
              Low_256x256: 256,
              Medium_512x512: 512,
              High_1024x1024: 1024,
              Ultra_2048x2048: 2048
            }));
            const ShadowType = exports('a4', Enum({
              Planar: 0,
              ShadowMap: 1
            }));
            const AmbientInfo = exports('a5', jsb.AmbientInfo);
            legacyCC.AmbientInfo = AmbientInfo;
            const SkyboxInfo = exports('a6', jsb.SkyboxInfo);
            legacyCC.SkyboxInfo = SkyboxInfo;
            const FogInfo = exports('a7', jsb.FogInfo);
            legacyCC.FogInfo = FogInfo;
            FogInfo.FogType = FogType;
            const ShadowsInfo = exports('a8', jsb.ShadowsInfo);
            legacyCC.ShadowsInfo = ShadowsInfo;
            const OctreeInfo = exports('a9', jsb.OctreeInfo);
            legacyCC.OctreeInfo = OctreeInfo;
            const LightProbeInfo = exports('aa', jsb.LightProbeInfo);
            const SceneGlobals = exports('ab', jsb.SceneGlobals);
            legacyCC.SceneGlobals = SceneGlobals;
            const SkinInfo = exports('ac', jsb.SkinInfo);
            legacyCC.SkinInfo = SkinInfo;
            const PostSettingsInfo = exports('ad', jsb.PostSettingsInfo);
            legacyCC.PostSettingsInfo = PostSettingsInfo;
            (function () {
              const sceneGlobalsProto = SceneGlobals.prototype;
              sceneGlobalsProto._ctor = function () {
                this._ambientRef = this.getAmbientInfo();
                this._shadowsRef = this.getShadowsInfo();
                this._skyboxRef = this.getSkyboxInfo();
                this._fogRef = this.getFogInfo();
                this._octreeRef = this.getOctreeInfo();
                this._lightProbeRef = this.getLightProbeInfo();
                this._skinRef = this.getSkinInfo();
                this._postSettingsRef = this.getPostSettingsInfo();
              };
              Object.defineProperty(sceneGlobalsProto, 'ambient', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._ambientRef;
                },
                set(v) {
                  this._ambientRef = v;
                  this.setAmbientInfo(v);
                }
              });
              Object.defineProperty(sceneGlobalsProto, 'shadows', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._shadowsRef;
                },
                set(v) {
                  this._shadowsRef = v;
                  this.setShadowsInfo(v);
                }
              });
              Object.defineProperty(sceneGlobalsProto, '_skybox', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._skyboxRef;
                },
                set(v) {
                  this._skyboxRef = v;
                  this.setSkyboxInfo(v);
                }
              });
              Object.defineProperty(sceneGlobalsProto, 'skybox', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._skyboxRef;
                },
                set(v) {
                  this._skyboxRef = v;
                  this.setSkyboxInfo(v);
                }
              });
              Object.defineProperty(sceneGlobalsProto, 'fog', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._fogRef;
                },
                set(v) {
                  this._fogRef = v;
                  this.setFogInfo(v);
                }
              });
              Object.defineProperty(sceneGlobalsProto, 'octree', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._octreeRef;
                },
                set(v) {
                  this._octreeRef = v;
                  this.setOctreeInfo(v);
                }
              });
              Object.defineProperty(sceneGlobalsProto, 'lightProbeInfo', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._lightProbeRef;
                },
                set(v) {
                  this._lightProbeRef = v;
                  this.setLightProbeInfo(v);
                }
              });
              Object.defineProperty(sceneGlobalsProto, 'skin', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._skinRef;
                },
                set(v) {
                  this._skinRef = v;
                  this.setSkinInfo(v);
                }
              });
              Object.defineProperty(sceneGlobalsProto, 'postSettings', {
                enumerable: true,
                configurable: true,
                get() {
                  return this._postSettingsRef;
                },
                set(v) {
                  this._postSettingsRef = v;
                  this.setPostSettingsInfo(v);
                }
              });
            })();
            patch_cc_SceneGlobals({
              SceneGlobals,
              AmbientInfo,
              SkyboxInfo,
              FogInfo,
              ShadowsInfo,
              LightProbeInfo,
              OctreeInfo,
              SkinInfo,
              PostSettingsInfo
            });
            patch_cc_OctreeInfo({
              OctreeInfo,
              CCInteger,
              Vec3,
              DEFAULT_WORLD_MAX_POS,
              DEFAULT_WORLD_MIN_POS,
              DEFAULT_OCTREE_DEPTH
            });
            patch_cc_ShadowsInfo({
              ShadowsInfo,
              ShadowType,
              CCFloat,
              CCInteger,
              ShadowSize,
              Vec3,
              Color,
              Vec2
            });
            patch_cc_FogInfo({
              FogInfo,
              FogType,
              CCFloat,
              Color
            });
            patch_cc_SkyboxInfo({
              SkyboxInfo,
              EnvironmentLightingType,
              TextureCube,
              CCFloat,
              Material
            });
            patch_cc_AmbientInfo({
              AmbientInfo,
              Vec4,
              Ambient,
              CCFloat,
              legacyCC
            });
            patch_cc_LightProbeInfo({
              LightProbeInfo,
              CCFloat,
              CCInteger
            });
            patch_cc_SkinInfo({
              SkinInfo,
              CCFloat
            });
            patch_cc_PostSettingsInfo({
              PostSettingsInfo,
              ToneMappingType
            });

            deprecateModuleExportedName({
              SystemEventType: {
                newName: 'Input.EventType',
                since: '3.3.0',
                removed: false
              }
            });

            deprecateModuleExportedName({
              SystemEvent: {
                newName: 'Input',
                since: '3.4.0',
                removed: false
              },
              systemEvent: {
                newName: 'input',
                since: '3.4.0',
                removed: false
              }
            });

            class AccelerometerInputSource {
              constructor() {
                this._intervalInSeconds = 0.2;
                this._intervalId = void 0;
                this._isEnabled = false;
                this._eventTarget = new EventTarget();
                this._didAccelerateFunc = void 0;
                this._didAccelerateFunc = this._didAccelerate.bind(this);
              }
              _didAccelerate() {
                const deviceMotionValue = jsb.device.getDeviceMotionValue();
                let x = deviceMotionValue[3] * 0.1;
                let y = deviceMotionValue[4] * 0.1;
                const z = deviceMotionValue[5] * 0.1;
                const orientation = screenAdapter.orientation;
                const tmpX = x;
                if (orientation === Orientation.LANDSCAPE_RIGHT) {
                  x = -y;
                  y = tmpX;
                } else if (orientation === Orientation.LANDSCAPE_LEFT) {
                  x = y;
                  y = -tmpX;
                } else if (orientation === Orientation.PORTRAIT_UPSIDE_DOWN) {
                  x = -x;
                  y = -y;
                }
                if (systemInfo.os === OS.ANDROID || systemInfo.os === OS.OHOS || systemInfo.os === OS.OPENHARMONY) {
                  x = -x;
                  y = -y;
                }
                const timestamp = performance.now();
                const acceleration = new Acceleration(x, y, z, timestamp);
                const eventAcceleration = new EventAcceleration(acceleration);
                this._eventTarget.emit(InputEventType.DEVICEMOTION, eventAcceleration);
              }
              start() {
                if (this._intervalId) {
                  clearInterval(this._intervalId);
                }
                this._intervalId = setInterval(this._didAccelerateFunc, this._intervalInSeconds * 1000);
                jsb.device.setAccelerometerInterval(this._intervalInSeconds);
                jsb.device.setAccelerometerEnabled(true);
                this._isEnabled = true;
              }
              stop() {
                if (this._intervalId) {
                  clearInterval(this._intervalId);
                  this._intervalId = undefined;
                }
                jsb.device.setAccelerometerEnabled(false);
                this._isEnabled = false;
              }
              setInterval(intervalInMileseconds) {
                this._intervalInSeconds = intervalInMileseconds / 1000;
                jsb.device.setAccelerometerInterval(this._intervalInSeconds);
                if (this._isEnabled) {
                  jsb.device.setAccelerometerEnabled(false);
                  jsb.device.setAccelerometerEnabled(true);
                }
              }
              on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              }
            }

            class InputSource {}
            class InputSourceAxis1D extends InputSource {
              getValue() {
                throw new Error('Method not implemented.');
              }
            }
            class InputSourceAxis2D extends InputSource {
              getValue() {
                throw new Error('Method not implemented.');
              }
            }
            class InputSourceAxis3D extends InputSource {
              getValue() {
                throw new Error('Method not implemented.');
              }
            }
            class InputSourceQuat extends InputSource {
              getValue() {
                throw new Error('Method not implemented.');
              }
            }
            class CompositeInputSourceAxis1D extends InputSourceAxis1D {
              constructor(options) {
                super();
                this.positive = void 0;
                this.negative = void 0;
                this.positive = options.positive;
                this.negative = options.negative;
              }
              getValue() {
                const positiveValue = this.positive.getValue();
                const negativeValue = this.negative.getValue();
                if (Math.abs(positiveValue) > Math.abs(negativeValue)) {
                  return positiveValue;
                }
                return -negativeValue;
              }
            }
            class CompositeInputSourceAxis2D extends InputSourceAxis2D {
              constructor(options) {
                super();
                this.up = void 0;
                this.down = void 0;
                this.left = void 0;
                this.right = void 0;
                this.xAxis = void 0;
                this.yAxis = void 0;
                this.up = options.up;
                this.down = options.down;
                this.left = options.left;
                this.right = options.right;
                this.xAxis = new CompositeInputSourceAxis1D({
                  positive: this.right,
                  negative: this.left
                });
                this.yAxis = new CompositeInputSourceAxis1D({
                  positive: this.up,
                  negative: this.down
                });
              }
              getValue() {
                return new Vec2(this.xAxis.getValue(), this.yAxis.getValue());
              }
            }
            class InputSourceButton extends InputSourceAxis1D {
              getValue() {
                return super.getValue();
              }
            }
            class InputSourceDpad extends CompositeInputSourceAxis2D {}
            class InputSourceStick extends CompositeInputSourceAxis2D {}
            class InputSourceOrientation extends InputSourceQuat {
              getValue() {
                return super.getValue();
              }
            }
            class InputSourcePosition extends InputSourceAxis3D {
              getValue() {
                return super.getValue();
              }
            }
            class InputSourceTouch extends InputSourceAxis1D {
              getValue() {
                return super.getValue();
              }
            }

            var Button$1;
            (function (Button) {
              Button[Button["BUTTON_SOUTH"] = 0] = "BUTTON_SOUTH";
              Button[Button["BUTTON_EAST"] = 1] = "BUTTON_EAST";
              Button[Button["BUTTON_WEST"] = 2] = "BUTTON_WEST";
              Button[Button["BUTTON_NORTH"] = 3] = "BUTTON_NORTH";
              Button[Button["NS_MINUS"] = 4] = "NS_MINUS";
              Button[Button["NS_PLUS"] = 5] = "NS_PLUS";
              Button[Button["BUTTON_L1"] = 6] = "BUTTON_L1";
              Button[Button["BUTTON_L2"] = 7] = "BUTTON_L2";
              Button[Button["BUTTON_L3"] = 8] = "BUTTON_L3";
              Button[Button["BUTTON_R1"] = 9] = "BUTTON_R1";
              Button[Button["BUTTON_R2"] = 10] = "BUTTON_R2";
              Button[Button["BUTTON_R3"] = 11] = "BUTTON_R3";
              Button[Button["DPAD_UP"] = 12] = "DPAD_UP";
              Button[Button["DPAD_DOWN"] = 13] = "DPAD_DOWN";
              Button[Button["DPAD_LEFT"] = 14] = "DPAD_LEFT";
              Button[Button["DPAD_RIGHT"] = 15] = "DPAD_RIGHT";
              Button[Button["LEFT_STICK_UP"] = 16] = "LEFT_STICK_UP";
              Button[Button["LEFT_STICK_DOWN"] = 17] = "LEFT_STICK_DOWN";
              Button[Button["LEFT_STICK_LEFT"] = 18] = "LEFT_STICK_LEFT";
              Button[Button["LEFT_STICK_RIGHT"] = 19] = "LEFT_STICK_RIGHT";
              Button[Button["RIGHT_STICK_UP"] = 20] = "RIGHT_STICK_UP";
              Button[Button["RIGHT_STICK_DOWN"] = 21] = "RIGHT_STICK_DOWN";
              Button[Button["RIGHT_STICK_LEFT"] = 22] = "RIGHT_STICK_LEFT";
              Button[Button["RIGHT_STICK_RIGHT"] = 23] = "RIGHT_STICK_RIGHT";
              Button[Button["ROKID_MENU"] = 24] = "ROKID_MENU";
              Button[Button["ROKID_START"] = 25] = "ROKID_START";
            })(Button$1 || (Button$1 = {}));
            const _nativeButtonMap$1 = {
              1: Button$1.BUTTON_EAST,
              2: Button$1.BUTTON_SOUTH,
              3: Button$1.BUTTON_NORTH,
              4: Button$1.BUTTON_WEST,
              5: Button$1.BUTTON_L1,
              6: Button$1.BUTTON_R1,
              7: Button$1.NS_MINUS,
              8: Button$1.NS_PLUS,
              9: Button$1.BUTTON_L3,
              10: Button$1.BUTTON_R3,
              11: Button$1.ROKID_MENU,
              12: Button$1.ROKID_START
            };
            class GamepadInputDevice {
              get buttonNorth() {
                return this._buttonNorth;
              }
              get buttonEast() {
                return this._buttonEast;
              }
              get buttonWest() {
                return this._buttonWest;
              }
              get buttonSouth() {
                return this._buttonSouth;
              }
              get buttonL1() {
                return this._buttonL1;
              }
              get buttonL2() {
                return this._buttonL2;
              }
              get buttonL3() {
                return this._buttonL3;
              }
              get buttonR1() {
                return this._buttonR1;
              }
              get buttonR2() {
                return this._buttonR2;
              }
              get buttonR3() {
                return this._buttonR3;
              }
              get buttonShare() {
                return this._buttonShare;
              }
              get buttonOptions() {
                return this._buttonOptions;
              }
              get dpad() {
                return this._dpad;
              }
              get leftStick() {
                return this._leftStick;
              }
              get rightStick() {
                return this._rightStick;
              }
              get buttonStart() {
                return this._buttonStart;
              }
              get gripLeft() {
                return this._gripLeft;
              }
              get gripRight() {
                return this._gripRight;
              }
              get handLeftPosition() {
                return this._handLeftPosition;
              }
              get handLeftOrientation() {
                return this._handLeftOrientation;
              }
              get handRightPosition() {
                return this._handRightPosition;
              }
              get handRightOrientation() {
                return this._handRightOrientation;
              }
              get aimLeftPosition() {
                return this._aimLeftPosition;
              }
              get aimLeftOrientation() {
                return this._aimLeftOrientation;
              }
              get aimRightPosition() {
                return this._aimRightPosition;
              }
              get aimRightOrientation() {
                return this._aimRightOrientation;
              }
              get deviceId() {
                return this._deviceId;
              }
              get connected() {
                return this._connected;
              }
              constructor(deviceId) {
                this._buttonNorth = void 0;
                this._buttonEast = void 0;
                this._buttonWest = void 0;
                this._buttonSouth = void 0;
                this._buttonL1 = void 0;
                this._buttonL2 = void 0;
                this._buttonL3 = void 0;
                this._buttonR1 = void 0;
                this._buttonR2 = void 0;
                this._buttonR3 = void 0;
                this._buttonShare = void 0;
                this._buttonOptions = void 0;
                this._dpad = void 0;
                this._leftStick = void 0;
                this._rightStick = void 0;
                this._buttonStart = void 0;
                this._gripLeft = void 0;
                this._gripRight = void 0;
                this._handLeftPosition = void 0;
                this._handLeftOrientation = void 0;
                this._handRightPosition = void 0;
                this._handRightOrientation = void 0;
                this._aimLeftPosition = void 0;
                this._aimLeftOrientation = void 0;
                this._aimRightPosition = void 0;
                this._aimRightOrientation = void 0;
                this._deviceId = -1;
                this._connected = false;
                this._nativeButtonState = {
                  [Button$1.BUTTON_SOUTH]: 0,
                  [Button$1.BUTTON_EAST]: 0,
                  [Button$1.BUTTON_WEST]: 0,
                  [Button$1.BUTTON_NORTH]: 0,
                  [Button$1.NS_MINUS]: 0,
                  [Button$1.NS_PLUS]: 0,
                  [Button$1.BUTTON_L1]: 0,
                  [Button$1.BUTTON_L2]: 0,
                  [Button$1.BUTTON_L3]: 0,
                  [Button$1.BUTTON_R1]: 0,
                  [Button$1.BUTTON_R2]: 0,
                  [Button$1.BUTTON_R3]: 0,
                  [Button$1.DPAD_UP]: 0,
                  [Button$1.DPAD_DOWN]: 0,
                  [Button$1.DPAD_LEFT]: 0,
                  [Button$1.DPAD_RIGHT]: 0,
                  [Button$1.LEFT_STICK_UP]: 0,
                  [Button$1.LEFT_STICK_DOWN]: 0,
                  [Button$1.LEFT_STICK_LEFT]: 0,
                  [Button$1.LEFT_STICK_RIGHT]: 0,
                  [Button$1.RIGHT_STICK_UP]: 0,
                  [Button$1.RIGHT_STICK_DOWN]: 0,
                  [Button$1.RIGHT_STICK_LEFT]: 0,
                  [Button$1.RIGHT_STICK_RIGHT]: 0,
                  [Button$1.ROKID_MENU]: 0,
                  [Button$1.ROKID_START]: 0
                };
                this._deviceId = deviceId;
                this._initInputSource();
              }
              static _init() {
                if (!systemInfo.hasFeature(Feature.EVENT_GAMEPAD)) {
                  return;
                }
                GamepadInputDevice._registerEvent();
              }
              static _on(eventType, cb, target) {
                GamepadInputDevice._eventTarget.on(eventType, cb, target);
              }
              static _removeInputDevice(id) {
                const removeIndex = GamepadInputDevice.all.findIndex(device => device.deviceId === id);
                if (removeIndex === -1) {
                  return;
                }
                fastRemoveAt$1(GamepadInputDevice.all, removeIndex);
              }
              static _getInputDevice(id) {
                return GamepadInputDevice.all.find(device => device.deviceId === id);
              }
              static _createInputDevice(id, connected) {
                const device = new GamepadInputDevice(id);
                device._connected = connected;
                GamepadInputDevice.all.push(device);
                return device;
              }
              static _getOrCreateInputDevice(id, connected) {
                let device = GamepadInputDevice._getInputDevice(id);
                if (!device) {
                  device = GamepadInputDevice._createInputDevice(id, connected);
                }
                device._connected = connected;
                return device;
              }
              static _registerEvent() {
                jsb.onControllerInput = infoList => {
                  for (let i = 0; i < infoList.length; ++i) {
                    const info = infoList[i];
                    const device = GamepadInputDevice._getOrCreateInputDevice(info.id, true);
                    device._updateNativeButtonState(info);
                    GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_INPUT, new EventGamepad(InputEventType.GAMEPAD_INPUT, device));
                  }
                };
                jsb.onControllerChange = controllerIds => {
                  for (let i = 0; i < controllerIds.length; ++i) {
                    const id = controllerIds[i];
                    let device = GamepadInputDevice._getInputDevice(id);
                    if (!device) {
                      device = GamepadInputDevice._createInputDevice(id, true);
                      GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, device));
                    }
                  }
                  const allDevices = GamepadInputDevice.all;
                  for (let i = 0; i < allDevices.length; ++i) {
                    const device = allDevices[i];
                    if (!controllerIds.includes(device.deviceId)) {
                      GamepadInputDevice._removeInputDevice(device.deviceId);
                      device._connected = false;
                      GamepadInputDevice._eventTarget.emit(InputEventType.GAMEPAD_CHANGE, new EventGamepad(InputEventType.GAMEPAD_CHANGE, device));
                    }
                  }
                };
              }
              _axisToButtons(axisValue) {
                const value = Math.abs(axisValue);
                if (axisValue > 0) {
                  return {
                    negative: 0,
                    positive: value
                  };
                } else if (axisValue < 0) {
                  return {
                    negative: value,
                    positive: 0
                  };
                } else {
                  return {
                    negative: 0,
                    positive: 0
                  };
                }
              }
              _updateNativeButtonState(info) {
                const {
                  buttonInfoList,
                  axisInfoList
                } = info;
                for (let i = 0; i < buttonInfoList.length; ++i) {
                  const buttonInfo = buttonInfoList[i];
                  const button = _nativeButtonMap$1[buttonInfo.code];
                  this._nativeButtonState[button] = buttonInfo.isPressed ? 1 : 0;
                }
                for (let i = 0; i < axisInfoList.length; ++i) {
                  const axisInfo = axisInfoList[i];
                  const {
                    code,
                    value
                  } = axisInfo;
                  let negativeButton;
                  let positiveButton;
                  let axisValue;
                  switch (code) {
                    case 1:
                      negativeButton = Button$1.DPAD_LEFT;
                      positiveButton = Button$1.DPAD_RIGHT;
                      axisValue = this._axisToButtons(value);
                      break;
                    case 2:
                      negativeButton = Button$1.DPAD_DOWN;
                      positiveButton = Button$1.DPAD_UP;
                      axisValue = this._axisToButtons(value);
                      break;
                    case 3:
                      negativeButton = Button$1.LEFT_STICK_LEFT;
                      positiveButton = Button$1.LEFT_STICK_RIGHT;
                      axisValue = this._axisToButtons(value);
                      break;
                    case 4:
                      negativeButton = Button$1.LEFT_STICK_DOWN;
                      positiveButton = Button$1.LEFT_STICK_UP;
                      axisValue = this._axisToButtons(value);
                      break;
                    case 5:
                      negativeButton = Button$1.RIGHT_STICK_LEFT;
                      positiveButton = Button$1.RIGHT_STICK_RIGHT;
                      axisValue = this._axisToButtons(value);
                      break;
                    case 6:
                      negativeButton = Button$1.RIGHT_STICK_DOWN;
                      positiveButton = Button$1.RIGHT_STICK_UP;
                      axisValue = this._axisToButtons(value);
                      break;
                    default:
                      if (code === 7) {
                        this._nativeButtonState[Button$1.BUTTON_L2] = value;
                      } else if (code === 8) {
                        this._nativeButtonState[Button$1.BUTTON_R2] = value;
                      }
                      break;
                  }
                  if (negativeButton && positiveButton && axisValue) {
                    this._nativeButtonState[negativeButton] = axisValue.negative;
                    this._nativeButtonState[positiveButton] = axisValue.positive;
                  }
                }
              }
              _initInputSource() {
                this._buttonNorth = new InputSourceButton();
                this._buttonNorth.getValue = () => this._nativeButtonState[Button$1.BUTTON_NORTH];
                this._buttonEast = new InputSourceButton();
                this._buttonEast.getValue = () => this._nativeButtonState[Button$1.BUTTON_EAST];
                this._buttonWest = new InputSourceButton();
                this._buttonWest.getValue = () => this._nativeButtonState[Button$1.BUTTON_WEST];
                this._buttonSouth = new InputSourceButton();
                this._buttonSouth.getValue = () => this._nativeButtonState[Button$1.BUTTON_SOUTH];
                this._buttonL1 = new InputSourceButton();
                this._buttonL1.getValue = () => this._nativeButtonState[Button$1.BUTTON_L1];
                this._buttonL2 = new InputSourceButton();
                this._buttonL2.getValue = () => this._nativeButtonState[Button$1.BUTTON_L2];
                this._buttonL3 = new InputSourceButton();
                this._buttonL3.getValue = () => this._nativeButtonState[Button$1.BUTTON_L3];
                this._buttonR1 = new InputSourceButton();
                this._buttonR1.getValue = () => this._nativeButtonState[Button$1.BUTTON_R1];
                this._buttonR2 = new InputSourceButton();
                this._buttonR2.getValue = () => this._nativeButtonState[Button$1.BUTTON_R2];
                this._buttonR3 = new InputSourceButton();
                this._buttonR3.getValue = () => this._nativeButtonState[Button$1.BUTTON_R3];
                this._buttonShare = new InputSourceButton();
                this._buttonShare.getValue = () => this._nativeButtonState[Button$1.NS_MINUS];
                this._buttonOptions = new InputSourceButton();
                this._buttonOptions.getValue = () => this._nativeButtonState[Button$1.NS_PLUS] || this._nativeButtonState[Button$1.ROKID_MENU];
                const dpadUp = new InputSourceButton();
                dpadUp.getValue = () => this._nativeButtonState[Button$1.DPAD_UP];
                const dpadDown = new InputSourceButton();
                dpadDown.getValue = () => this._nativeButtonState[Button$1.DPAD_DOWN];
                const dpadLeft = new InputSourceButton();
                dpadLeft.getValue = () => this._nativeButtonState[Button$1.DPAD_LEFT];
                const dpadRight = new InputSourceButton();
                dpadRight.getValue = () => this._nativeButtonState[Button$1.DPAD_RIGHT];
                this._dpad = new InputSourceDpad({
                  up: dpadUp,
                  down: dpadDown,
                  left: dpadLeft,
                  right: dpadRight
                });
                const leftStickUp = new InputSourceButton();
                leftStickUp.getValue = () => this._nativeButtonState[Button$1.LEFT_STICK_UP];
                const leftStickDown = new InputSourceButton();
                leftStickDown.getValue = () => this._nativeButtonState[Button$1.LEFT_STICK_DOWN];
                const leftStickLeft = new InputSourceButton();
                leftStickLeft.getValue = () => this._nativeButtonState[Button$1.LEFT_STICK_LEFT];
                const leftStickRight = new InputSourceButton();
                leftStickRight.getValue = () => this._nativeButtonState[Button$1.LEFT_STICK_RIGHT];
                this._leftStick = new InputSourceStick({
                  up: leftStickUp,
                  down: leftStickDown,
                  left: leftStickLeft,
                  right: leftStickRight
                });
                const rightStickUp = new InputSourceButton();
                rightStickUp.getValue = () => this._nativeButtonState[Button$1.RIGHT_STICK_UP];
                const rightStickDown = new InputSourceButton();
                rightStickDown.getValue = () => this._nativeButtonState[Button$1.RIGHT_STICK_DOWN];
                const rightStickLeft = new InputSourceButton();
                rightStickLeft.getValue = () => this._nativeButtonState[Button$1.RIGHT_STICK_LEFT];
                const rightStickRight = new InputSourceButton();
                rightStickRight.getValue = () => this._nativeButtonState[Button$1.RIGHT_STICK_RIGHT];
                this._rightStick = new InputSourceStick({
                  up: rightStickUp,
                  down: rightStickDown,
                  left: rightStickLeft,
                  right: rightStickRight
                });
                this._buttonStart = new InputSourceButton();
                this._buttonStart.getValue = () => this._nativeButtonState[Button$1.ROKID_START];
                this._gripLeft = new InputSourceButton();
                this._gripLeft.getValue = () => 0;
                this._gripRight = new InputSourceButton();
                this._gripRight.getValue = () => 0;
                this._handLeftPosition = new InputSourcePosition();
                this._handLeftPosition.getValue = () => Vec3.ZERO;
                this._handLeftOrientation = new InputSourceOrientation();
                this._handLeftOrientation.getValue = () => Quat.IDENTITY;
                this._handRightPosition = new InputSourcePosition();
                this._handRightPosition.getValue = () => Vec3.ZERO;
                this._handRightOrientation = new InputSourceOrientation();
                this._handRightOrientation.getValue = () => Quat.IDENTITY;
                this._aimLeftPosition = new InputSourcePosition();
                this._aimLeftPosition.getValue = () => Vec3.ZERO;
                this._aimLeftOrientation = new InputSourceOrientation();
                this._aimLeftOrientation.getValue = () => Quat.IDENTITY;
                this._aimRightPosition = new InputSourcePosition();
                this._aimRightPosition.getValue = () => Vec3.ZERO;
                this._aimRightOrientation = new InputSourceOrientation();
                this._aimRightOrientation.getValue = () => Quat.IDENTITY;
              }
            }
            GamepadInputDevice.all = [];
            GamepadInputDevice.xr = null;
            GamepadInputDevice._eventTarget = new EventTarget();

            var Button;
            (function (Button) {
              Button[Button["BUTTON_EAST"] = 0] = "BUTTON_EAST";
              Button[Button["BUTTON_SOUTH"] = 1] = "BUTTON_SOUTH";
              Button[Button["BUTTON_WEST"] = 2] = "BUTTON_WEST";
              Button[Button["BUTTON_NORTH"] = 3] = "BUTTON_NORTH";
              Button[Button["BUTTON_TRIGGER_LEFT"] = 4] = "BUTTON_TRIGGER_LEFT";
              Button[Button["BUTTON_TRIGGER_RIGHT"] = 5] = "BUTTON_TRIGGER_RIGHT";
              Button[Button["TRIGGER_LEFT"] = 6] = "TRIGGER_LEFT";
              Button[Button["TRIGGER_RIGHT"] = 7] = "TRIGGER_RIGHT";
              Button[Button["GRIP_LEFT"] = 8] = "GRIP_LEFT";
              Button[Button["GRIP_RIGHT"] = 9] = "GRIP_RIGHT";
              Button[Button["BUTTON_LEFT_STICK"] = 10] = "BUTTON_LEFT_STICK";
              Button[Button["LEFT_STICK_UP"] = 11] = "LEFT_STICK_UP";
              Button[Button["LEFT_STICK_DOWN"] = 12] = "LEFT_STICK_DOWN";
              Button[Button["LEFT_STICK_LEFT"] = 13] = "LEFT_STICK_LEFT";
              Button[Button["LEFT_STICK_RIGHT"] = 14] = "LEFT_STICK_RIGHT";
              Button[Button["BUTTON_RIGHT_STICK"] = 15] = "BUTTON_RIGHT_STICK";
              Button[Button["RIGHT_STICK_UP"] = 16] = "RIGHT_STICK_UP";
              Button[Button["RIGHT_STICK_DOWN"] = 17] = "RIGHT_STICK_DOWN";
              Button[Button["RIGHT_STICK_LEFT"] = 18] = "RIGHT_STICK_LEFT";
              Button[Button["RIGHT_STICK_RIGHT"] = 19] = "RIGHT_STICK_RIGHT";
              Button[Button["ROKID_MENU"] = 20] = "ROKID_MENU";
              Button[Button["ROKID_START"] = 21] = "ROKID_START";
            })(Button || (Button = {}));
            var Pose$2;
            (function (Pose) {
              Pose[Pose["HAND_LEFT"] = 0] = "HAND_LEFT";
              Pose[Pose["HAND_RIGHT"] = 1] = "HAND_RIGHT";
              Pose[Pose["AIM_LEFT"] = 2] = "AIM_LEFT";
              Pose[Pose["AIM_RIGHT"] = 3] = "AIM_RIGHT";
            })(Pose$2 || (Pose$2 = {}));
            var StickKeyCode;
            (function (StickKeyCode) {
              StickKeyCode[StickKeyCode["UNDEFINE"] = 0] = "UNDEFINE";
              StickKeyCode[StickKeyCode["A"] = 1] = "A";
              StickKeyCode[StickKeyCode["B"] = 2] = "B";
              StickKeyCode[StickKeyCode["X"] = 3] = "X";
              StickKeyCode[StickKeyCode["Y"] = 4] = "Y";
              StickKeyCode[StickKeyCode["L1"] = 5] = "L1";
              StickKeyCode[StickKeyCode["R1"] = 6] = "R1";
              StickKeyCode[StickKeyCode["MINUS"] = 7] = "MINUS";
              StickKeyCode[StickKeyCode["PLUS"] = 8] = "PLUS";
              StickKeyCode[StickKeyCode["L3"] = 9] = "L3";
              StickKeyCode[StickKeyCode["R3"] = 10] = "R3";
              StickKeyCode[StickKeyCode["MENU"] = 11] = "MENU";
              StickKeyCode[StickKeyCode["START"] = 12] = "START";
              StickKeyCode[StickKeyCode["TRIGGER_LEFT"] = 13] = "TRIGGER_LEFT";
              StickKeyCode[StickKeyCode["TRIGGER_RIGHT"] = 14] = "TRIGGER_RIGHT";
            })(StickKeyCode || (StickKeyCode = {}));
            var StickAxisCode;
            (function (StickAxisCode) {
              StickAxisCode[StickAxisCode["UNDEFINE"] = 0] = "UNDEFINE";
              StickAxisCode[StickAxisCode["X"] = 1] = "X";
              StickAxisCode[StickAxisCode["Y"] = 2] = "Y";
              StickAxisCode[StickAxisCode["LEFT_STICK_X"] = 3] = "LEFT_STICK_X";
              StickAxisCode[StickAxisCode["LEFT_STICK_Y"] = 4] = "LEFT_STICK_Y";
              StickAxisCode[StickAxisCode["RIGHT_STICK_X"] = 5] = "RIGHT_STICK_X";
              StickAxisCode[StickAxisCode["RIGHT_STICK_Y"] = 6] = "RIGHT_STICK_Y";
              StickAxisCode[StickAxisCode["L2"] = 7] = "L2";
              StickAxisCode[StickAxisCode["R2"] = 8] = "R2";
              StickAxisCode[StickAxisCode["LEFT_GRIP"] = 9] = "LEFT_GRIP";
              StickAxisCode[StickAxisCode["RIGHT_GRIP"] = 10] = "RIGHT_GRIP";
            })(StickAxisCode || (StickAxisCode = {}));
            var StickTouchCode;
            (function (StickTouchCode) {
              StickTouchCode[StickTouchCode["UNDEFINE"] = 0] = "UNDEFINE";
              StickTouchCode[StickTouchCode["A"] = 1] = "A";
              StickTouchCode[StickTouchCode["B"] = 2] = "B";
              StickTouchCode[StickTouchCode["X"] = 3] = "X";
              StickTouchCode[StickTouchCode["Y"] = 4] = "Y";
              StickTouchCode[StickTouchCode["LEFT_TRIGGER"] = 5] = "LEFT_TRIGGER";
              StickTouchCode[StickTouchCode["RIGHT_TRIGGER"] = 6] = "RIGHT_TRIGGER";
              StickTouchCode[StickTouchCode["LEFT_THUMBSTICK"] = 7] = "LEFT_THUMBSTICK";
              StickTouchCode[StickTouchCode["RIGHT_THUMBSTICK"] = 8] = "RIGHT_THUMBSTICK";
            })(StickTouchCode || (StickTouchCode = {}));
            const _nativeButtonMap = {
              1: Button.BUTTON_EAST,
              2: Button.BUTTON_SOUTH,
              3: Button.BUTTON_NORTH,
              4: Button.BUTTON_WEST,
              9: Button.BUTTON_LEFT_STICK,
              10: Button.BUTTON_RIGHT_STICK,
              11: Button.ROKID_MENU,
              12: Button.ROKID_START,
              13: Button.BUTTON_TRIGGER_LEFT,
              14: Button.BUTTON_TRIGGER_RIGHT
            };
            class HandleInputDevice {
              get buttonNorth() {
                return this._buttonNorth;
              }
              get buttonEast() {
                return this._buttonEast;
              }
              get buttonWest() {
                return this._buttonWest;
              }
              get buttonSouth() {
                return this._buttonSouth;
              }
              get buttonTriggerLeft() {
                return this._buttonTriggerLeft;
              }
              get buttonTriggerRight() {
                return this._buttonTriggerRight;
              }
              get triggerLeft() {
                return this._triggerLeft;
              }
              get triggerRight() {
                return this._triggerRight;
              }
              get gripLeft() {
                return this._gripLeft;
              }
              get gripRight() {
                return this._gripRight;
              }
              get leftStick() {
                return this._leftStick;
              }
              get rightStick() {
                return this._rightStick;
              }
              get buttonLeftStick() {
                return this._buttonLeftStick;
              }
              get buttonRightStick() {
                return this._buttonRightStick;
              }
              get buttonOptions() {
                return this._buttonOptions;
              }
              get buttonStart() {
                return this._buttonStart;
              }
              get handLeftPosition() {
                return this._handLeftPosition;
              }
              get handLeftOrientation() {
                return this._handLeftOrientation;
              }
              get handRightPosition() {
                return this._handRightPosition;
              }
              get handRightOrientation() {
                return this._handRightOrientation;
              }
              get aimLeftPosition() {
                return this._aimLeftPosition;
              }
              get aimLeftOrientation() {
                return this._aimLeftOrientation;
              }
              get aimRightPosition() {
                return this._aimRightPosition;
              }
              get aimRightOrientation() {
                return this._aimRightOrientation;
              }
              get touchButtonA() {
                return this._touchButtonA;
              }
              get touchButtonB() {
                return this._touchButtonB;
              }
              get touchButtonX() {
                return this._touchButtonX;
              }
              get touchButtonY() {
                return this._touchButtonY;
              }
              get touchButtonTriggerLeft() {
                return this._touchButtonTriggerLeft;
              }
              get touchButtonTriggerRight() {
                return this._touchButtonTriggerRight;
              }
              get touchButtonThumbStickLeft() {
                return this._touchButtonThumbStickLeft;
              }
              get touchButtonThumbStickRight() {
                return this._touchButtonThumbStickRight;
              }
              constructor() {
                this._eventTarget = new EventTarget();
                this._buttonNorth = void 0;
                this._buttonEast = void 0;
                this._buttonWest = void 0;
                this._buttonSouth = void 0;
                this._buttonTriggerLeft = void 0;
                this._buttonTriggerRight = void 0;
                this._triggerLeft = void 0;
                this._triggerRight = void 0;
                this._gripLeft = void 0;
                this._gripRight = void 0;
                this._leftStick = void 0;
                this._rightStick = void 0;
                this._buttonLeftStick = void 0;
                this._buttonRightStick = void 0;
                this._buttonOptions = void 0;
                this._buttonStart = void 0;
                this._handLeftPosition = void 0;
                this._handLeftOrientation = void 0;
                this._handRightPosition = void 0;
                this._handRightOrientation = void 0;
                this._aimLeftPosition = void 0;
                this._aimLeftOrientation = void 0;
                this._aimRightPosition = void 0;
                this._aimRightOrientation = void 0;
                this._touchButtonA = void 0;
                this._touchButtonB = void 0;
                this._touchButtonX = void 0;
                this._touchButtonY = void 0;
                this._touchButtonTriggerLeft = void 0;
                this._touchButtonTriggerRight = void 0;
                this._touchButtonThumbStickLeft = void 0;
                this._touchButtonThumbStickRight = void 0;
                this._nativeButtonState = {
                  [Button.BUTTON_SOUTH]: 0,
                  [Button.BUTTON_EAST]: 0,
                  [Button.BUTTON_WEST]: 0,
                  [Button.BUTTON_NORTH]: 0,
                  [Button.BUTTON_TRIGGER_LEFT]: 0,
                  [Button.BUTTON_TRIGGER_RIGHT]: 0,
                  [Button.TRIGGER_LEFT]: 0,
                  [Button.TRIGGER_RIGHT]: 0,
                  [Button.GRIP_LEFT]: 0,
                  [Button.GRIP_RIGHT]: 0,
                  [Button.LEFT_STICK_UP]: 0,
                  [Button.LEFT_STICK_DOWN]: 0,
                  [Button.LEFT_STICK_LEFT]: 0,
                  [Button.LEFT_STICK_RIGHT]: 0,
                  [Button.RIGHT_STICK_UP]: 0,
                  [Button.RIGHT_STICK_DOWN]: 0,
                  [Button.RIGHT_STICK_LEFT]: 0,
                  [Button.RIGHT_STICK_RIGHT]: 0,
                  [Button.BUTTON_LEFT_STICK]: 0,
                  [Button.BUTTON_RIGHT_STICK]: 0,
                  [Button.ROKID_MENU]: 0,
                  [Button.ROKID_START]: 0
                };
                this._nativeTouchState = {
                  [StickTouchCode.UNDEFINE]: 0,
                  [StickTouchCode.A]: 0,
                  [StickTouchCode.B]: 0,
                  [StickTouchCode.X]: 0,
                  [StickTouchCode.Y]: 0,
                  [StickTouchCode.LEFT_TRIGGER]: 0,
                  [StickTouchCode.RIGHT_TRIGGER]: 0,
                  [StickTouchCode.LEFT_THUMBSTICK]: 0,
                  [StickTouchCode.RIGHT_THUMBSTICK]: 0
                };
                this._nativePoseState = {
                  [Pose$2.HAND_LEFT]: {
                    position: Vec3.ZERO,
                    orientation: Quat.IDENTITY
                  },
                  [Pose$2.HAND_RIGHT]: {
                    position: Vec3.ZERO,
                    orientation: Quat.IDENTITY
                  },
                  [Pose$2.AIM_LEFT]: {
                    position: Vec3.ZERO,
                    orientation: Quat.IDENTITY
                  },
                  [Pose$2.AIM_RIGHT]: {
                    position: Vec3.ZERO,
                    orientation: Quat.IDENTITY
                  }
                };
                this._initInputSource();
                this._registerEvent();
              }
              _registerEvent() {
                jsb.onHandleInput = infoList => {
                  for (let i = 0; i < infoList.length; ++i) {
                    const info = infoList[i];
                    this._updateNativeButtonState(info);
                    this._eventTarget.emit(InputEventType.HANDLE_INPUT, new EventHandle(InputEventType.HANDLE_INPUT, this));
                  }
                };
                jsb.onHandlePoseInput = infoList => {
                  for (let i = 0; i < infoList.length; ++i) {
                    const info = infoList[i];
                    this._updateNativePoseState(info);
                  }
                  this._eventTarget.emit(InputEventType.HANDLE_POSE_INPUT, new EventHandle(InputEventType.HANDLE_POSE_INPUT, this));
                };
              }
              _on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              }
              _axisToButtons(axisValue) {
                const value = Math.abs(axisValue);
                if (axisValue > 0) {
                  return {
                    negative: 0,
                    positive: value
                  };
                } else if (axisValue < 0) {
                  return {
                    negative: value,
                    positive: 0
                  };
                } else {
                  return {
                    negative: 0,
                    positive: 0
                  };
                }
              }
              _updateNativeButtonState(info) {
                const {
                  buttonInfoList,
                  axisInfoList,
                  touchInfoList
                } = info;
                for (let i = 0; i < buttonInfoList.length; ++i) {
                  const buttonInfo = buttonInfoList[i];
                  const button = _nativeButtonMap[buttonInfo.code];
                  this._nativeButtonState[button] = buttonInfo.isPressed ? 1 : 0;
                }
                for (let i = 0; i < axisInfoList.length; ++i) {
                  const axisInfo = axisInfoList[i];
                  const {
                    code,
                    value
                  } = axisInfo;
                  let negativeButton;
                  let positiveButton;
                  let axisValue;
                  switch (code) {
                    case StickAxisCode.LEFT_STICK_X:
                      negativeButton = Button.LEFT_STICK_LEFT;
                      positiveButton = Button.LEFT_STICK_RIGHT;
                      axisValue = this._axisToButtons(value);
                      break;
                    case StickAxisCode.LEFT_STICK_Y:
                      negativeButton = Button.LEFT_STICK_DOWN;
                      positiveButton = Button.LEFT_STICK_UP;
                      axisValue = this._axisToButtons(value);
                      break;
                    case StickAxisCode.RIGHT_STICK_X:
                      negativeButton = Button.RIGHT_STICK_LEFT;
                      positiveButton = Button.RIGHT_STICK_RIGHT;
                      axisValue = this._axisToButtons(value);
                      break;
                    case StickAxisCode.RIGHT_STICK_Y:
                      negativeButton = Button.RIGHT_STICK_DOWN;
                      positiveButton = Button.RIGHT_STICK_UP;
                      axisValue = this._axisToButtons(value);
                      break;
                    case StickAxisCode.L2:
                      this._nativeButtonState[Button.TRIGGER_LEFT] = value;
                      break;
                    case StickAxisCode.R2:
                      this._nativeButtonState[Button.TRIGGER_RIGHT] = value;
                      break;
                    case StickAxisCode.LEFT_GRIP:
                      this._nativeButtonState[Button.GRIP_LEFT] = value;
                      break;
                    case StickAxisCode.RIGHT_GRIP:
                      this._nativeButtonState[Button.GRIP_RIGHT] = value;
                      break;
                  }
                  if (negativeButton && positiveButton && axisValue) {
                    this._nativeButtonState[negativeButton] = axisValue.negative;
                    this._nativeButtonState[positiveButton] = axisValue.positive;
                  }
                }
                if (touchInfoList) {
                  for (let i = 0; i < touchInfoList.length; ++i) {
                    const touchInfo = touchInfoList[i];
                    const {
                      code,
                      value
                    } = touchInfo;
                    switch (code) {
                      case StickTouchCode.A:
                      case StickTouchCode.B:
                      case StickTouchCode.X:
                      case StickTouchCode.Y:
                      case StickTouchCode.LEFT_TRIGGER:
                      case StickTouchCode.RIGHT_TRIGGER:
                      case StickTouchCode.LEFT_THUMBSTICK:
                      case StickTouchCode.RIGHT_THUMBSTICK:
                        this._nativeTouchState[code] = value;
                        break;
                    }
                  }
                }
              }
              _updateNativePoseState(info) {
                switch (info.code) {
                  case 1:
                    this._nativePoseState[Pose$2.HAND_LEFT] = {
                      position: new Vec3(info.x, info.y, info.z),
                      orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
                    };
                    break;
                  case 2:
                    this._nativePoseState[Pose$2.AIM_LEFT] = {
                      position: new Vec3(info.x, info.y, info.z),
                      orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
                    };
                    break;
                  case 4:
                    this._nativePoseState[Pose$2.HAND_RIGHT] = {
                      position: new Vec3(info.x, info.y, info.z),
                      orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
                    };
                    break;
                  case 5:
                    this._nativePoseState[Pose$2.AIM_RIGHT] = {
                      position: new Vec3(info.x, info.y, info.z),
                      orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
                    };
                    break;
                }
              }
              _initInputSource() {
                this._buttonNorth = new InputSourceButton();
                this._buttonNorth.getValue = () => this._nativeButtonState[Button.BUTTON_NORTH];
                this._buttonEast = new InputSourceButton();
                this._buttonEast.getValue = () => this._nativeButtonState[Button.BUTTON_EAST];
                this._buttonWest = new InputSourceButton();
                this._buttonWest.getValue = () => this._nativeButtonState[Button.BUTTON_WEST];
                this._buttonSouth = new InputSourceButton();
                this._buttonSouth.getValue = () => this._nativeButtonState[Button.BUTTON_SOUTH];
                this._buttonTriggerLeft = new InputSourceButton();
                this._buttonTriggerLeft.getValue = () => this._nativeButtonState[Button.BUTTON_TRIGGER_LEFT];
                this._buttonTriggerRight = new InputSourceButton();
                this._buttonTriggerRight.getValue = () => this._nativeButtonState[Button.BUTTON_TRIGGER_RIGHT];
                this._triggerLeft = new InputSourceButton();
                this._triggerLeft.getValue = () => this._nativeButtonState[Button.TRIGGER_LEFT];
                this._triggerRight = new InputSourceButton();
                this._triggerRight.getValue = () => this._nativeButtonState[Button.TRIGGER_RIGHT];
                this._gripLeft = new InputSourceButton();
                this._gripLeft.getValue = () => this._nativeButtonState[Button.GRIP_LEFT];
                this._gripRight = new InputSourceButton();
                this._gripRight.getValue = () => this._nativeButtonState[Button.GRIP_RIGHT];
                this._buttonLeftStick = new InputSourceButton();
                this._buttonLeftStick.getValue = () => this._nativeButtonState[Button.BUTTON_LEFT_STICK];
                const leftStickUp = new InputSourceButton();
                leftStickUp.getValue = () => this._nativeButtonState[Button.LEFT_STICK_UP];
                const leftStickDown = new InputSourceButton();
                leftStickDown.getValue = () => this._nativeButtonState[Button.LEFT_STICK_DOWN];
                const leftStickLeft = new InputSourceButton();
                leftStickLeft.getValue = () => this._nativeButtonState[Button.LEFT_STICK_LEFT];
                const leftStickRight = new InputSourceButton();
                leftStickRight.getValue = () => this._nativeButtonState[Button.LEFT_STICK_RIGHT];
                this._leftStick = new InputSourceStick({
                  up: leftStickUp,
                  down: leftStickDown,
                  left: leftStickLeft,
                  right: leftStickRight
                });
                this._buttonRightStick = new InputSourceButton();
                this._buttonRightStick.getValue = () => this._nativeButtonState[Button.BUTTON_RIGHT_STICK];
                const rightStickUp = new InputSourceButton();
                rightStickUp.getValue = () => this._nativeButtonState[Button.RIGHT_STICK_UP];
                const rightStickDown = new InputSourceButton();
                rightStickDown.getValue = () => this._nativeButtonState[Button.RIGHT_STICK_DOWN];
                const rightStickLeft = new InputSourceButton();
                rightStickLeft.getValue = () => this._nativeButtonState[Button.RIGHT_STICK_LEFT];
                const rightStickRight = new InputSourceButton();
                rightStickRight.getValue = () => this._nativeButtonState[Button.RIGHT_STICK_RIGHT];
                this._rightStick = new InputSourceStick({
                  up: rightStickUp,
                  down: rightStickDown,
                  left: rightStickLeft,
                  right: rightStickRight
                });
                this._buttonOptions = new InputSourceButton();
                this._buttonOptions.getValue = () => this._nativeButtonState[Button.ROKID_MENU];
                this._buttonStart = new InputSourceButton();
                this._buttonStart.getValue = () => this._nativeButtonState[Button.ROKID_START];
                this._handLeftPosition = new InputSourcePosition();
                this._handLeftPosition.getValue = () => this._nativePoseState[Pose$2.HAND_LEFT].position;
                this._handLeftOrientation = new InputSourceOrientation();
                this._handLeftOrientation.getValue = () => this._nativePoseState[Pose$2.HAND_LEFT].orientation;
                this._handRightPosition = new InputSourcePosition();
                this._handRightPosition.getValue = () => this._nativePoseState[Pose$2.HAND_RIGHT].position;
                this._handRightOrientation = new InputSourceOrientation();
                this._handRightOrientation.getValue = () => this._nativePoseState[Pose$2.HAND_RIGHT].orientation;
                this._aimLeftPosition = new InputSourcePosition();
                this._aimLeftPosition.getValue = () => this._nativePoseState[Pose$2.AIM_LEFT].position;
                this._aimLeftOrientation = new InputSourceOrientation();
                this._aimLeftOrientation.getValue = () => this._nativePoseState[Pose$2.AIM_LEFT].orientation;
                this._aimRightPosition = new InputSourcePosition();
                this._aimRightPosition.getValue = () => this._nativePoseState[Pose$2.AIM_RIGHT].position;
                this._aimRightOrientation = new InputSourceOrientation();
                this._aimRightOrientation.getValue = () => this._nativePoseState[Pose$2.AIM_RIGHT].orientation;
                this._touchButtonA = new InputSourceTouch();
                this._touchButtonA.getValue = () => this._nativeTouchState[StickTouchCode.A];
                this._touchButtonB = new InputSourceTouch();
                this._touchButtonB.getValue = () => this._nativeTouchState[StickTouchCode.B];
                this._touchButtonX = new InputSourceTouch();
                this._touchButtonX.getValue = () => this._nativeTouchState[StickTouchCode.X];
                this._touchButtonY = new InputSourceTouch();
                this._touchButtonY.getValue = () => this._nativeTouchState[StickTouchCode.Y];
                this._touchButtonTriggerLeft = new InputSourceTouch();
                this._touchButtonTriggerLeft.getValue = () => this._nativeTouchState[StickTouchCode.LEFT_TRIGGER];
                this._touchButtonTriggerRight = new InputSourceTouch();
                this._touchButtonTriggerRight.getValue = () => this._nativeTouchState[StickTouchCode.RIGHT_TRIGGER];
                this._touchButtonThumbStickLeft = new InputSourceTouch();
                this._touchButtonThumbStickLeft.getValue = () => this._nativeTouchState[StickTouchCode.LEFT_THUMBSTICK];
                this._touchButtonThumbStickRight = new InputSourceTouch();
                this._touchButtonThumbStickRight.getValue = () => this._nativeTouchState[StickTouchCode.RIGHT_THUMBSTICK];
              }
            }

            var Pose$1;
            (function (Pose) {
              Pose[Pose["VIEW_LEFT"] = 0] = "VIEW_LEFT";
              Pose[Pose["VIEW_RIGHT"] = 1] = "VIEW_RIGHT";
              Pose[Pose["HEAD_MIDDLE"] = 2] = "HEAD_MIDDLE";
            })(Pose$1 || (Pose$1 = {}));
            class HMDInputDevice {
              get viewLeftPosition() {
                return this._viewLeftPosition;
              }
              get viewLeftOrientation() {
                return this._viewLeftOrientation;
              }
              get viewRightPosition() {
                return this._viewRightPosition;
              }
              get viewRightOrientation() {
                return this._viewRightOrientation;
              }
              get headMiddlePosition() {
                return this._headMiddlePosition;
              }
              get headMiddleOrientation() {
                return this._headMiddleOrientation;
              }
              constructor() {
                this._eventTarget = new EventTarget();
                this._viewLeftPosition = void 0;
                this._viewLeftOrientation = void 0;
                this._viewRightPosition = void 0;
                this._viewRightOrientation = void 0;
                this._headMiddlePosition = void 0;
                this._headMiddleOrientation = void 0;
                this._nativePoseState = {
                  [Pose$1.VIEW_LEFT]: {
                    position: Vec3.ZERO,
                    orientation: Quat.IDENTITY
                  },
                  [Pose$1.VIEW_RIGHT]: {
                    position: Vec3.ZERO,
                    orientation: Quat.IDENTITY
                  },
                  [Pose$1.HEAD_MIDDLE]: {
                    position: Vec3.ZERO,
                    orientation: Quat.IDENTITY
                  }
                };
                this._initInputSource();
                this._registerEvent();
              }
              _registerEvent() {
                jsb.onHMDPoseInput = infoList => {
                  for (let i = 0; i < infoList.length; ++i) {
                    const info = infoList[i];
                    this._updateNativePoseState(info);
                  }
                  this._eventTarget.emit(InputEventType.HMD_POSE_INPUT, new EventHMD(InputEventType.HMD_POSE_INPUT, this));
                };
              }
              _on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              }
              _updateNativePoseState(info) {
                switch (info.code) {
                  case 0:
                    this._nativePoseState[Pose$1.VIEW_LEFT] = {
                      position: new Vec3(info.x, info.y, info.z),
                      orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
                    };
                    break;
                  case 3:
                    this._nativePoseState[Pose$1.VIEW_RIGHT] = {
                      position: new Vec3(info.x, info.y, info.z),
                      orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
                    };
                    break;
                  case 6:
                    this._nativePoseState[Pose$1.HEAD_MIDDLE] = {
                      position: new Vec3(info.x, info.y, info.z),
                      orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
                    };
                    break;
                }
              }
              _initInputSource() {
                this._viewLeftPosition = new InputSourcePosition();
                this._viewLeftPosition.getValue = () => this._nativePoseState[Pose$1.VIEW_LEFT].position;
                this._viewLeftOrientation = new InputSourceOrientation();
                this._viewLeftOrientation.getValue = () => this._nativePoseState[Pose$1.VIEW_LEFT].orientation;
                this._viewRightPosition = new InputSourcePosition();
                this._viewRightPosition.getValue = () => this._nativePoseState[Pose$1.VIEW_RIGHT].position;
                this._viewRightOrientation = new InputSourceOrientation();
                this._viewRightOrientation.getValue = () => this._nativePoseState[Pose$1.VIEW_RIGHT].orientation;
                this._headMiddlePosition = new InputSourcePosition();
                this._headMiddlePosition.getValue = () => this._nativePoseState[Pose$1.HEAD_MIDDLE].position;
                this._headMiddleOrientation = new InputSourceOrientation();
                this._headMiddleOrientation.getValue = () => this._nativePoseState[Pose$1.HEAD_MIDDLE].orientation;
              }
            }

            var Pose;
            (function (Pose) {
              Pose[Pose["AR_MOBILE"] = 0] = "AR_MOBILE";
            })(Pose || (Pose = {}));
            class HandheldInputDevice {
              get handheldPosition() {
                return this._handheldPosition;
              }
              get handheldOrientation() {
                return this._handheldOrientation;
              }
              constructor() {
                this._eventTarget = new EventTarget();
                this._handheldPosition = void 0;
                this._handheldOrientation = void 0;
                this._nativePoseState = {
                  [Pose.AR_MOBILE]: {
                    position: Vec3.ZERO,
                    orientation: Quat.IDENTITY
                  }
                };
                this._initInputSource();
                this._registerEvent();
              }
              _registerEvent() {
                jsb.onHandheldPoseInput = infoList => {
                  for (let i = 0; i < infoList.length; ++i) {
                    const info = infoList[i];
                    this._updateNativePoseState(info);
                  }
                  this._eventTarget.emit(InputEventType.HANDHELD_POSE_INPUT, new EventHandheld(InputEventType.HANDHELD_POSE_INPUT, this));
                };
              }
              _on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              }
              _updateNativePoseState(info) {
                switch (info.code) {
                  case 7:
                    this._nativePoseState[Pose.AR_MOBILE] = {
                      position: new Vec3(info.x, info.y, info.z),
                      orientation: new Quat(info.quaternionX, info.quaternionY, info.quaternionZ, info.quaternionW)
                    };
                    break;
                }
              }
              _initInputSource() {
                this._handheldPosition = new InputSourcePosition();
                this._handheldPosition.getValue = () => this._nativePoseState[Pose.AR_MOBILE].position;
                this._handheldOrientation = new InputSourceOrientation();
                this._handheldOrientation.getValue = () => this._nativePoseState[Pose.AR_MOBILE].orientation;
              }
            }

            const code2KeyCode = {
              Backspace: KeyCode.BACKSPACE,
              Tab: KeyCode.TAB,
              Enter: KeyCode.ENTER,
              ShiftLeft: KeyCode.SHIFT_LEFT,
              ControlLeft: KeyCode.CTRL_LEFT,
              AltLeft: KeyCode.ALT_LEFT,
              ShiftRight: KeyCode.SHIFT_RIGHT,
              ControlRight: KeyCode.CTRL_RIGHT,
              AltRight: KeyCode.ALT_RIGHT,
              Pause: KeyCode.PAUSE,
              CapsLock: KeyCode.CAPS_LOCK,
              Escape: KeyCode.ESCAPE,
              Space: KeyCode.SPACE,
              PageUp: KeyCode.PAGE_UP,
              PageDown: KeyCode.PAGE_DOWN,
              End: KeyCode.END,
              Home: KeyCode.HOME,
              ArrowLeft: KeyCode.ARROW_LEFT,
              ArrowUp: KeyCode.ARROW_UP,
              ArrowRight: KeyCode.ARROW_RIGHT,
              ArrowDown: KeyCode.ARROW_DOWN,
              Insert: KeyCode.INSERT,
              Delete: KeyCode.DELETE,
              Digit0: KeyCode.DIGIT_0,
              Digit1: KeyCode.DIGIT_1,
              Digit2: KeyCode.DIGIT_2,
              Digit3: KeyCode.DIGIT_3,
              Digit4: KeyCode.DIGIT_4,
              Digit5: KeyCode.DIGIT_5,
              Digit6: KeyCode.DIGIT_6,
              Digit7: KeyCode.DIGIT_7,
              Digit8: KeyCode.DIGIT_8,
              Digit9: KeyCode.DIGIT_9,
              KeyA: KeyCode.KEY_A,
              KeyB: KeyCode.KEY_B,
              KeyC: KeyCode.KEY_C,
              KeyD: KeyCode.KEY_D,
              KeyE: KeyCode.KEY_E,
              KeyF: KeyCode.KEY_F,
              KeyG: KeyCode.KEY_G,
              KeyH: KeyCode.KEY_H,
              KeyI: KeyCode.KEY_I,
              KeyJ: KeyCode.KEY_J,
              KeyK: KeyCode.KEY_K,
              KeyL: KeyCode.KEY_L,
              KeyM: KeyCode.KEY_M,
              KeyN: KeyCode.KEY_N,
              KeyO: KeyCode.KEY_O,
              KeyP: KeyCode.KEY_P,
              KeyQ: KeyCode.KEY_Q,
              KeyR: KeyCode.KEY_R,
              KeyS: KeyCode.KEY_S,
              KeyT: KeyCode.KEY_T,
              KeyU: KeyCode.KEY_U,
              KeyV: KeyCode.KEY_V,
              KeyW: KeyCode.KEY_W,
              KeyX: KeyCode.KEY_X,
              KeyY: KeyCode.KEY_Y,
              KeyZ: KeyCode.KEY_Z,
              Numpad0: KeyCode.NUM_0,
              Numpad1: KeyCode.NUM_1,
              Numpad2: KeyCode.NUM_2,
              Numpad3: KeyCode.NUM_3,
              Numpad4: KeyCode.NUM_4,
              Numpad5: KeyCode.NUM_5,
              Numpad6: KeyCode.NUM_6,
              Numpad7: KeyCode.NUM_7,
              Numpad8: KeyCode.NUM_8,
              Numpad9: KeyCode.NUM_9,
              NumpadMultiply: KeyCode.NUM_MULTIPLY,
              NumpadAdd: KeyCode.NUM_PLUS,
              NumpadSubtract: KeyCode.NUM_SUBTRACT,
              NumpadDecimal: KeyCode.NUM_DECIMAL,
              NumpadDivide: KeyCode.NUM_DIVIDE,
              NumpadEnter: KeyCode.NUM_ENTER,
              F1: KeyCode.F1,
              F2: KeyCode.F2,
              F3: KeyCode.F3,
              F4: KeyCode.F4,
              F5: KeyCode.F5,
              F6: KeyCode.F6,
              F7: KeyCode.F7,
              F8: KeyCode.F8,
              F9: KeyCode.F9,
              F10: KeyCode.F10,
              F11: KeyCode.F11,
              F12: KeyCode.F12,
              NumLock: KeyCode.NUM_LOCK,
              ScrollLock: KeyCode.SCROLL_LOCK,
              Semicolon: KeyCode.SEMICOLON,
              Equal: KeyCode.EQUAL,
              Comma: KeyCode.COMMA,
              Minus: KeyCode.DASH,
              Period: KeyCode.PERIOD,
              Slash: KeyCode.SLASH,
              Backquote: KeyCode.BACK_QUOTE,
              BracketLeft: KeyCode.BRACKET_LEFT,
              Backslash: KeyCode.BACKSLASH,
              BracketRight: KeyCode.BRACKET_RIGHT,
              Quote: KeyCode.QUOTE
            };

            const nativeKeyCode2KeyCode = {
              12: KeyCode.NUM_LOCK,
              10048: KeyCode.NUM_0,
              10049: KeyCode.NUM_1,
              10050: KeyCode.NUM_2,
              10051: KeyCode.NUM_3,
              10052: KeyCode.NUM_4,
              10053: KeyCode.NUM_5,
              10054: KeyCode.NUM_6,
              10055: KeyCode.NUM_7,
              10056: KeyCode.NUM_8,
              10057: KeyCode.NUM_9,
              20013: KeyCode.NUM_ENTER,
              20016: KeyCode.SHIFT_RIGHT,
              20017: KeyCode.CTRL_RIGHT,
              20018: KeyCode.ALT_RIGHT
            };
            function getKeyCode(event) {
              if (event.code) {
                if (event.code in code2KeyCode) {
                  return code2KeyCode[event.code];
                } else {
                  console.error(`Can not find keyCode for code: ${event.code}`);
                }
              }
              return nativeKeyCode2KeyCode[event.keyCode] || event.keyCode;
            }
            class KeyboardInputSource {
              constructor() {
                this._eventTarget = new EventTarget();
                this._keyStateMap = {};
                this._handleKeyboardDown = void 0;
                this._handleKeyboardUp = void 0;
                this._handleKeyboardDown = event => {
                  const keyCode = getKeyCode(event);
                  if (!this._keyStateMap[keyCode]) {
                    const eventKeyDown = this._getInputEvent(event, InputEventType.KEY_DOWN);
                    this._eventTarget.emit(InputEventType.KEY_DOWN, eventKeyDown);
                  } else {
                    const eventKeyPressing = this._getInputEvent(event, InputEventType.KEY_PRESSING);
                    this._eventTarget.emit(InputEventType.KEY_PRESSING, eventKeyPressing);
                  }
                  this._keyStateMap[keyCode] = true;
                };
                this._handleKeyboardUp = event => {
                  const keyCode = getKeyCode(event);
                  const eventKeyUp = this._getInputEvent(event, InputEventType.KEY_UP);
                  this._keyStateMap[keyCode] = false;
                  this._eventTarget.emit(InputEventType.KEY_UP, eventKeyUp);
                };
                this._registerEvent();
              }
              dispatchKeyboardDownEvent(nativeKeyboardEvent) {
                this._handleKeyboardDown(nativeKeyboardEvent);
              }
              dispatchKeyboardUpEvent(nativeKeyboardEvent) {
                this._handleKeyboardUp(nativeKeyboardEvent);
              }
              _registerEvent() {
                jsb.onKeyDown = this._handleKeyboardDown;
                jsb.onKeyUp = this._handleKeyboardUp;
              }
              _getInputEvent(event, eventType) {
                const keyCode = getKeyCode(event);
                const eventKeyboard = new EventKeyboard(keyCode, eventType);
                eventKeyboard.windowId = event.windowId;
                return eventKeyboard;
              }
              on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              }
            }

            class MouseInputSource {
              constructor() {
                this._eventTarget = new EventTarget();
                this._preMousePos = new Vec2();
                this._isPressed = false;
                this._windowManager = void 0;
                this._pointLocked = false;
                this._handleMouseDown = void 0;
                this._handleMouseMove = void 0;
                this._handleMouseUp = void 0;
                this._boundedHandleMouseWheel = void 0;
                this._handleMouseDown = this._createCallback(InputEventType.MOUSE_DOWN);
                this._handleMouseMove = this._createCallback(InputEventType.MOUSE_MOVE);
                this._handleMouseUp = this._createCallback(InputEventType.MOUSE_UP);
                this._boundedHandleMouseWheel = this._handleMouseWheel.bind(this);
                this._registerEvent();
                this._windowManager = jsb.ISystemWindowManager.getInstance();
              }
              dispatchMouseDownEvent(nativeMouseEvent) {
                this._handleMouseDown(nativeMouseEvent);
              }
              dispatchMouseMoveEvent(nativeMouseEvent) {
                this._handleMouseMove(nativeMouseEvent);
              }
              dispatchMouseUpEvent(nativeMouseEvent) {
                this._handleMouseUp(nativeMouseEvent);
              }
              dispatchScrollEvent(nativeMouseEvent) {
                this._boundedHandleMouseWheel(nativeMouseEvent);
              }
              _getLocation(event) {
                const window = this._windowManager.getWindow(event.windowId);
                const windowSize = window.getViewSize();
                const dpr = screenAdapter.devicePixelRatio;
                const x = event.x * dpr;
                const y = windowSize.height - event.y * dpr;
                return new Vec2(x, y);
              }
              _registerEvent() {
                jsb.onMouseDown = this._handleMouseDown;
                jsb.onMouseMove = this._handleMouseMove;
                jsb.onMouseUp = this._handleMouseUp;
                jsb.onMouseWheel = this._boundedHandleMouseWheel;
                jsb.onPointerlockChange = value => {
                  this._pointLocked = value;
                };
              }
              _createCallback(eventType) {
                return mouseEvent => {
                  const location = this._getLocation(mouseEvent);
                  let button = mouseEvent.button;
                  switch (eventType) {
                    case InputEventType.MOUSE_DOWN:
                      this._isPressed = true;
                      break;
                    case InputEventType.MOUSE_UP:
                      this._isPressed = false;
                      break;
                    case InputEventType.MOUSE_MOVE:
                      if (!this._isPressed) {
                        button = EventMouse.BUTTON_MISSING;
                      }
                      break;
                  }
                  const eventMouse = new EventMouse(eventType, false, this._preMousePos, mouseEvent.windowId);
                  eventMouse.setLocation(location.x, location.y);
                  eventMouse.setButton(button);
                  const dpr = screenAdapter.devicePixelRatio;
                  eventMouse.movementX = typeof mouseEvent.xDelta === 'undefined' ? 0 : mouseEvent.xDelta * dpr;
                  eventMouse.movementY = typeof mouseEvent.yDelta === 'undefined' ? 0 : mouseEvent.yDelta * dpr;
                  this._preMousePos.set(location.x, location.y);
                  this._eventTarget.emit(eventType, eventMouse);
                };
              }
              _handleMouseWheel(mouseEvent) {
                const eventType = InputEventType.MOUSE_WHEEL;
                const location = this._getLocation(mouseEvent);
                const button = mouseEvent.button;
                const eventMouse = new EventMouse(eventType, false, this._preMousePos, mouseEvent.windowId);
                eventMouse.setLocation(location.x, location.y);
                eventMouse.setButton(button);
                eventMouse.movementX = location.x - this._preMousePos.x;
                eventMouse.movementY = this._preMousePos.y - location.y;
                const matchStandardFactor = 120;
                eventMouse.setScrollData(mouseEvent.wheelDeltaX * matchStandardFactor, mouseEvent.wheelDeltaY * matchStandardFactor);
                this._preMousePos.set(location.x, location.y);
                this._eventTarget.emit(eventType, eventMouse);
              }
              on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              }
            }

            const tempVec2 = new Vec2();
            class TouchManager {
              constructor() {
                this._touchMap = void 0;
                this._maxTouches = 8;
                this._touchMap = new Map();
              }
              _createTouch(touchID, x, y) {
                if (this._touchMap.has(touchID)) {
                  log('Cannot create the same touch object.');
                  return undefined;
                }
                const checkResult = this._checkTouchMapSizeMoreThanMax(touchID);
                if (checkResult) {
                  log('The touches is more than MAX_TOUCHES.');
                  return undefined;
                }
                const touch = new Touch(x, y, touchID);
                this._touchMap.set(touchID, touch);
                this._updateTouch(touch, x, y);
                return touch;
              }
              releaseTouch(touchID) {
                if (!this._touchMap.has(touchID)) {
                  return;
                }
                this._touchMap.delete(touchID);
              }
              getTouch(touchID) {
                return this._touchMap.get(touchID);
              }
              getOrCreateTouch(touchID, x, y) {
                let touch = this.getTouch(touchID);
                if (!touch) {
                  touch = this._createTouch(touchID, x, y);
                } else {
                  this._updateTouch(touch, x, y);
                }
                return touch;
              }
              getAllTouches() {
                const touches = [];
                this._touchMap.forEach(touch => {
                  if (touch) {
                    touches.push(touch);
                  }
                });
                return touches;
              }
              getTouchCount() {
                return touchManager._touchMap.size;
              }
              _updateTouch(touch, x, y) {
                touch.getLocation(tempVec2);
                touch.setPrevPoint(tempVec2);
                touch.setPoint(x, y);
              }
              _checkTouchMapSizeMoreThanMax(touchID) {
                if (this._touchMap.has(touchID)) {
                  return false;
                }
                const maxSize = macro.ENABLE_MULTI_TOUCH ? this._maxTouches : 1;
                if (this._touchMap.size < maxSize) {
                  return false;
                }
                const now = performance.now();
                this._touchMap.forEach(touch => {
                  if (now - touch.lastModified > macro.TOUCH_TIMEOUT) {
                    log(`The touches is more than MAX_TOUCHES, release touch id ${touch.getID()}.`);
                    this.releaseTouch(touch.getID());
                  }
                });
                return maxSize >= this._touchMap.size;
              }
            }
            const touchManager = new TouchManager();

            class TouchInputSource {
              constructor() {
                this._eventTarget = new EventTarget();
                this._windowManager = void 0;
                this._registerEvent();
                this._windowManager = jsb.ISystemWindowManager.getInstance();
              }
              _registerEvent() {
                jsb.onTouchStart = this._createCallback(InputEventType.TOUCH_START);
                jsb.onTouchMove = this._createCallback(InputEventType.TOUCH_MOVE);
                jsb.onTouchEnd = this._createCallback(InputEventType.TOUCH_END);
                jsb.onTouchCancel = this._createCallback(InputEventType.TOUCH_CANCEL);
              }
              _createCallback(eventType) {
                return (changedTouches, windowId) => {
                  const handleTouches = [];
                  const length = changedTouches.length;
                  const windowSize = this._windowManager.getWindow(windowId).getViewSize();
                  for (let i = 0; i < length; ++i) {
                    const changedTouch = changedTouches[i];
                    const touchID = changedTouch.identifier;
                    if (touchID === null) {
                      continue;
                    }
                    const location = this._getLocation(changedTouch, windowSize);
                    const touch = touchManager.getOrCreateTouch(touchID, location.x, location.y);
                    if (!touch) {
                      continue;
                    }
                    if (eventType === InputEventType.TOUCH_END || eventType === InputEventType.TOUCH_CANCEL) {
                      touchManager.releaseTouch(touchID);
                    }
                    handleTouches.push(touch);
                  }
                  if (handleTouches.length > 0) {
                    const eventTouch = new EventTouch(handleTouches, false, eventType, macro.ENABLE_MULTI_TOUCH ? touchManager.getAllTouches() : handleTouches);
                    eventTouch.windowId = windowId;
                    this._eventTarget.emit(eventType, eventTouch);
                  }
                };
              }
              _getLocation(touch, windowSize) {
                const dpr = screenAdapter.devicePixelRatio;
                const x = touch.clientX * dpr;
                const y = windowSize.height - touch.clientY * dpr;
                return new Vec2(x, y);
              }
              on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              }
            }

            let EventDispatcherPriority; exports('aW', EventDispatcherPriority);
            (function (EventDispatcherPriority) {
              EventDispatcherPriority[EventDispatcherPriority["GLOBAL"] = 0] = "GLOBAL";
              EventDispatcherPriority[EventDispatcherPriority["UI"] = 1] = "UI";
            })(EventDispatcherPriority || (exports('aW', EventDispatcherPriority = {})));
            class InputEventDispatcher {
              constructor(inputEventTarget) {
                this.priority = EventDispatcherPriority.GLOBAL;
                this._inputEventTarget = void 0;
                this._inputEventTarget = inputEventTarget;
              }
              dispatchEvent(event) {
                this._inputEventTarget.emit(event.type, event);
                return true;
              }
            }
            const pointerEventTypeMap = {
              [InputEventType.MOUSE_DOWN]: InputEventType.TOUCH_START,
              [InputEventType.MOUSE_MOVE]: InputEventType.TOUCH_MOVE,
              [InputEventType.MOUSE_UP]: InputEventType.TOUCH_END
            };
            class Input {
              constructor() {
                this._dispatchImmediately = !NATIVE;
                this._eventTarget = new EventTarget();
                this._touchInput = new TouchInputSource();
                this._mouseInput = new MouseInputSource();
                this._keyboardInput = new KeyboardInputSource();
                this._accelerometerInput = new AccelerometerInputSource();
                this._handleInput = new HandleInputDevice();
                this._hmdInput = new HMDInputDevice();
                this._handheldInput = new HandheldInputDevice();
                this._eventTouchList = [];
                this._eventMouseList = [];
                this._eventKeyboardList = [];
                this._eventAccelerationList = [];
                this._eventGamepadList = [];
                this._eventHandleList = [];
                this._eventHMDList = [];
                this._eventHandheldList = [];
                this._needSimulateTouchMoveEvent = false;
                this._inputEventDispatcher = void 0;
                this._eventDispatcherList = [];
                this._registerEvent();
                this._inputEventDispatcher = new InputEventDispatcher(this._eventTarget);
                this._registerEventDispatcher(this._inputEventDispatcher);
                GamepadInputDevice._init();
              }
              _dispatchMouseDownEvent(nativeMouseEvent) {
                var _this$_mouseInput$dis, _this$_mouseInput;
                (_this$_mouseInput$dis = (_this$_mouseInput = this._mouseInput).dispatchMouseDownEvent) === null || _this$_mouseInput$dis === void 0 ? void 0 : _this$_mouseInput$dis.call(_this$_mouseInput, nativeMouseEvent);
              }
              _dispatchMouseMoveEvent(nativeMouseEvent) {
                var _this$_mouseInput$dis2, _this$_mouseInput2;
                (_this$_mouseInput$dis2 = (_this$_mouseInput2 = this._mouseInput).dispatchMouseMoveEvent) === null || _this$_mouseInput$dis2 === void 0 ? void 0 : _this$_mouseInput$dis2.call(_this$_mouseInput2, nativeMouseEvent);
              }
              _dispatchMouseUpEvent(nativeMouseEvent) {
                var _this$_mouseInput$dis3, _this$_mouseInput3;
                (_this$_mouseInput$dis3 = (_this$_mouseInput3 = this._mouseInput).dispatchMouseUpEvent) === null || _this$_mouseInput$dis3 === void 0 ? void 0 : _this$_mouseInput$dis3.call(_this$_mouseInput3, nativeMouseEvent);
              }
              _dispatchMouseScrollEvent(nativeMouseEvent) {
                var _this$_mouseInput$dis4, _this$_mouseInput4;
                (_this$_mouseInput$dis4 = (_this$_mouseInput4 = this._mouseInput).dispatchScrollEvent) === null || _this$_mouseInput$dis4 === void 0 ? void 0 : _this$_mouseInput$dis4.call(_this$_mouseInput4, nativeMouseEvent);
              }
              _dispatchKeyboardDownEvent(nativeKeyboardEvent) {
                var _this$_keyboardInput$, _this$_keyboardInput;
                (_this$_keyboardInput$ = (_this$_keyboardInput = this._keyboardInput).dispatchKeyboardDownEvent) === null || _this$_keyboardInput$ === void 0 ? void 0 : _this$_keyboardInput$.call(_this$_keyboardInput, nativeKeyboardEvent);
              }
              _dispatchKeyboardUpEvent(nativeKeyboardEvent) {
                var _this$_keyboardInput$2, _this$_keyboardInput2;
                (_this$_keyboardInput$2 = (_this$_keyboardInput2 = this._keyboardInput).dispatchKeyboardUpEvent) === null || _this$_keyboardInput$2 === void 0 ? void 0 : _this$_keyboardInput$2.call(_this$_keyboardInput2, nativeKeyboardEvent);
              }
              on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
                return callback;
              }
              once(eventType, callback, target) {
                this._eventTarget.once(eventType, callback, target);
                return callback;
              }
              off(eventType, callback, target) {
                this._eventTarget.off(eventType, callback, target);
              }
              getTouch(touchID) {
                return touchManager.getTouch(touchID);
              }
              getAllTouches() {
                return touchManager.getAllTouches();
              }
              getTouchCount() {
                return touchManager.getTouchCount();
              }
              setAccelerometerEnabled(isEnable) {
                if (isEnable) {
                  this._accelerometerInput.start();
                } else {
                  this._accelerometerInput.stop();
                }
              }
              setAccelerometerInterval(intervalInMileSeconds) {
                this._accelerometerInput.setInterval(intervalInMileSeconds);
              }
              _simulateEventTouch(eventMouse) {
                const eventType = pointerEventTypeMap[eventMouse.type];
                const touchID = 0;
                const touch = touchManager.getOrCreateTouch(touchID, eventMouse.getLocationX(), eventMouse.getLocationY());
                if (!touch) {
                  return;
                }
                const changedTouches = [touch];
                const eventTouch = new EventTouch(changedTouches, false, eventType, eventType === InputEventType.TOUCH_END ? [] : changedTouches);
                eventTouch.windowId = eventMouse.windowId;
                if (eventType === InputEventType.TOUCH_END) {
                  touchManager.releaseTouch(touchID);
                }
                this._dispatchOrPushEventTouch(eventTouch, this._eventTouchList);
              }
              _registerEventDispatcher(eventDispatcher) {
                this._eventDispatcherList.push(eventDispatcher);
                this._eventDispatcherList.sort((a, b) => b.priority - a.priority);
              }
              _emitEvent(event) {
                const length = this._eventDispatcherList.length;
                for (let i = 0; i < length; ++i) {
                  const dispatcher = this._eventDispatcherList[i];
                  try {
                    if (!dispatcher.dispatchEvent(event)) {
                      break;
                    }
                  } catch (e) {
                    this._clearEvents();
                    throw e;
                  }
                }
              }
              _registerEvent() {
                if (sys.hasFeature(sys.Feature.INPUT_TOUCH)) {
                  const eventTouchList = this._eventTouchList;
                  this._touchInput.on(InputEventType.TOUCH_START, event => {
                    this._dispatchOrPushEventTouch(event, eventTouchList);
                  });
                  this._touchInput.on(InputEventType.TOUCH_MOVE, event => {
                    this._dispatchOrPushEventTouch(event, eventTouchList);
                  });
                  this._touchInput.on(InputEventType.TOUCH_END, event => {
                    this._dispatchOrPushEventTouch(event, eventTouchList);
                  });
                  this._touchInput.on(InputEventType.TOUCH_CANCEL, event => {
                    this._dispatchOrPushEventTouch(event, eventTouchList);
                  });
                }
                if (sys.hasFeature(sys.Feature.EVENT_MOUSE)) {
                  const eventMouseList = this._eventMouseList;
                  this._mouseInput.on(InputEventType.MOUSE_DOWN, event => {
                    this._needSimulateTouchMoveEvent = true;
                    this._simulateEventTouch(event);
                    this._dispatchOrPushEvent(event, eventMouseList);
                  });
                  this._mouseInput.on(InputEventType.MOUSE_MOVE, event => {
                    if (this._needSimulateTouchMoveEvent) {
                      this._simulateEventTouch(event);
                    }
                    this._dispatchOrPushEvent(event, eventMouseList);
                  });
                  this._mouseInput.on(InputEventType.MOUSE_UP, event => {
                    this._needSimulateTouchMoveEvent = false;
                    this._simulateEventTouch(event);
                    this._dispatchOrPushEvent(event, eventMouseList);
                  });
                  this._mouseInput.on(InputEventType.MOUSE_WHEEL, event => {
                    this._dispatchOrPushEvent(event, eventMouseList);
                  });
                }
                if (sys.hasFeature(sys.Feature.EVENT_KEYBOARD)) {
                  const eventKeyboardList = this._eventKeyboardList;
                  this._keyboardInput.on(InputEventType.KEY_DOWN, event => {
                    this._dispatchOrPushEvent(event, eventKeyboardList);
                  });
                  this._keyboardInput.on(InputEventType.KEY_PRESSING, event => {
                    this._dispatchOrPushEvent(event, eventKeyboardList);
                  });
                  this._keyboardInput.on(InputEventType.KEY_UP, event => {
                    this._dispatchOrPushEvent(event, eventKeyboardList);
                  });
                }
                if (sys.hasFeature(sys.Feature.EVENT_ACCELEROMETER)) {
                  const eventAccelerationList = this._eventAccelerationList;
                  this._accelerometerInput.on(InputEventType.DEVICEMOTION, event => {
                    this._dispatchOrPushEvent(event, eventAccelerationList);
                  });
                }
                if (sys.hasFeature(sys.Feature.EVENT_GAMEPAD)) {
                  const eventGamepadList = this._eventGamepadList;
                  GamepadInputDevice._on(InputEventType.GAMEPAD_CHANGE, event => {
                    this._dispatchOrPushEvent(event, eventGamepadList);
                  });
                  GamepadInputDevice._on(InputEventType.GAMEPAD_INPUT, event => {
                    this._dispatchOrPushEvent(event, eventGamepadList);
                  });
                  GamepadInputDevice._on(InputEventType.HANDLE_POSE_INPUT, event => {
                    this._dispatchOrPushEvent(event, eventGamepadList);
                  });
                }
                if (sys.hasFeature(sys.Feature.EVENT_HANDLE)) {
                  const eventHandleList = this._eventHandleList;
                  this._handleInput._on(InputEventType.HANDLE_INPUT, event => {
                    this._dispatchOrPushEvent(event, eventHandleList);
                  });
                  this._handleInput._on(InputEventType.HANDLE_POSE_INPUT, event => {
                    this._dispatchOrPushEvent(event, eventHandleList);
                  });
                }
                if (sys.hasFeature(sys.Feature.EVENT_HMD)) {
                  const eventHMDList = this._eventHMDList;
                  this._hmdInput._on(InputEventType.HMD_POSE_INPUT, event => {
                    this._dispatchOrPushEvent(event, eventHMDList);
                  });
                }
                if (sys.hasFeature(sys.Feature.EVENT_HANDHELD)) {
                  const eventHandheldList = this._eventHandheldList;
                  this._handheldInput._on(InputEventType.HANDHELD_POSE_INPUT, event => {
                    this._dispatchOrPushEvent(event, eventHandheldList);
                  });
                }
              }
              _clearEvents() {
                this._eventMouseList.length = 0;
                this._eventTouchList.length = 0;
                this._eventKeyboardList.length = 0;
                this._eventAccelerationList.length = 0;
                this._eventGamepadList.length = 0;
                this._eventHandleList.length = 0;
                this._eventHMDList.length = 0;
              }
              _dispatchOrPushEvent(event, eventList) {
                if (this._dispatchImmediately) {
                  this._emitEvent(event);
                } else {
                  eventList.push(event);
                }
              }
              _dispatchOrPushEventTouch(eventTouch, touchEventList) {
                if (this._dispatchImmediately) {
                  const touches = eventTouch.getTouches();
                  const touchesLength = touches.length;
                  for (let i = 0; i < touchesLength; ++i) {
                    eventTouch.touch = touches[i];
                    eventTouch.propagationStopped = eventTouch.propagationImmediateStopped = false;
                    this._emitEvent(eventTouch);
                  }
                } else {
                  touchEventList.push(eventTouch);
                }
              }
              _frameDispatchEvents() {
                const eventHMDList = this._eventHMDList;
                for (let i = 0, length = eventHMDList.length; i < length; ++i) {
                  const eventHMD = eventHMDList[i];
                  this._emitEvent(eventHMD);
                }
                const eventHandheldList = this._eventHandheldList;
                for (let i = 0, length = eventHandheldList.length; i < length; ++i) {
                  const eventHandheld = eventHandheldList[i];
                  this._emitEvent(eventHandheld);
                }
                const eventMouseList = this._eventMouseList;
                for (let i = 0, length = eventMouseList.length; i < length; ++i) {
                  const eventMouse = eventMouseList[i];
                  this._emitEvent(eventMouse);
                }
                const eventTouchList = this._eventTouchList;
                for (let i = 0, length = eventTouchList.length; i < length; ++i) {
                  const eventTouch = eventTouchList[i];
                  const touches = eventTouch.getTouches();
                  const touchesLength = touches.length;
                  for (let j = 0; j < touchesLength; ++j) {
                    eventTouch.touch = touches[j];
                    eventTouch.propagationStopped = eventTouch.propagationImmediateStopped = false;
                    this._emitEvent(eventTouch);
                  }
                }
                const eventKeyboardList = this._eventKeyboardList;
                for (let i = 0, length = eventKeyboardList.length; i < length; ++i) {
                  const eventKeyboard = eventKeyboardList[i];
                  this._emitEvent(eventKeyboard);
                }
                const eventAccelerationList = this._eventAccelerationList;
                for (let i = 0, length = eventAccelerationList.length; i < length; ++i) {
                  const eventAcceleration = eventAccelerationList[i];
                  this._emitEvent(eventAcceleration);
                }
                const eventGamepadList = this._eventGamepadList;
                for (let i = 0, length = eventGamepadList.length; i < length; ++i) {
                  const eventGamepad = eventGamepadList[i];
                  this._emitEvent(eventGamepad);
                }
                const eventHandleList = this._eventHandleList;
                for (let i = 0, length = eventHandleList.length; i < length; ++i) {
                  const eventHandle = eventHandleList[i];
                  this._emitEvent(eventHandle);
                }
                this._clearEvents();
              }
            } exports('aA', Input);
            Input.EventType = InputEventType;
            const input = exports('az', new Input());

            class SystemEvent extends EventTarget {
              constructor() {
                super();
                input.on(InputEventType.MOUSE_DOWN, e => {
                  this.emit(SystemEventType.MOUSE_DOWN, e);
                });
                input.on(InputEventType.MOUSE_MOVE, e => {
                  this.emit(SystemEventType.MOUSE_MOVE, e);
                });
                input.on(InputEventType.MOUSE_UP, e => {
                  this.emit(SystemEventType.MOUSE_UP, e);
                });
                input.on(InputEventType.MOUSE_WHEEL, e => {
                  this.emit(SystemEventType.MOUSE_WHEEL, e);
                });
                input.on(InputEventType.TOUCH_START, e => {
                  this.emit(SystemEventType.TOUCH_START, e.touch, e);
                });
                input.on(InputEventType.TOUCH_MOVE, e => {
                  this.emit(SystemEventType.TOUCH_MOVE, e.touch, e);
                });
                input.on(InputEventType.TOUCH_END, e => {
                  this.emit(SystemEventType.TOUCH_END, e.touch, e);
                });
                input.on(InputEventType.TOUCH_CANCEL, e => {
                  this.emit(SystemEventType.TOUCH_CANCEL, e.touch, e);
                });
                input.on(InputEventType.KEY_DOWN, e => {
                  this.emit(SystemEventType.KEY_DOWN, e);
                });
                input.on(InputEventType.KEY_PRESSING, e => {
                  this.emit(SystemEventType.KEY_DOWN, e);
                });
                input.on(InputEventType.KEY_UP, e => {
                  this.emit(SystemEventType.KEY_UP, e);
                });
                input.on(InputEventType.DEVICEMOTION, e => {
                  this.emit(SystemEventType.DEVICEMOTION, e);
                });
              }
              setAccelerometerEnabled(isEnabled) {
                input.setAccelerometerEnabled(isEnabled);
              }
              setAccelerometerInterval(interval) {
                input.setAccelerometerInterval(interval);
              }
              on(type, callback, target, once) {
                super.on(type, callback, target, once);
                return callback;
              }
              off(type, callback, target) {
                super.off(type, callback, target);
              }
            } exports('aC', SystemEvent);
            SystemEvent.EventType = SystemEventType;
            legacyCC.SystemEvent = SystemEvent;
            const systemEvent = exports('aB', new SystemEvent());
            legacyCC.systemEvent = systemEvent;

            replaceProperty(SystemEventType, 'Node.EventType', [{
              name: 'POSITION_PART',
              newName: 'TRANSFORM_CHANGED'
            }, {
              name: 'ROTATION_PART',
              newName: 'TRANSFORM_CHANGED'
            }, {
              name: 'SCALE_PART',
              newName: 'TRANSFORM_CHANGED'
            }]);
            replaceProperty(Event, 'Event', [{
              name: 'ACCELERATION',
              newName: 'DEVICEMOTION',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }]);
            markAsWarning(Event, 'Event', [{
              name: 'TOUCH',
              suggest: 'please use SystemEvent.EventType.TOUCH_START, SystemEvent.EventType.TOUCH_MOVE, SystemEvent.EventType.TOUCH_END and SystemEvent.EventType.TOUCH_CANCEL instead'
            }, {
              name: 'MOUSE',
              suggest: 'please use SystemEvent.EventType.MOUSE_DOWN, SystemEvent.EventType.MOUSE_MOVE, SystemEvent.EventType.MOUSE_UP, SystemEvent.EventType.MOUSE_WHEEL, Node.EventType.MOUSE_ENTER and Node.EventType.MOUSE_LEAVE instead'
            }, {
              name: 'KEYBOARD',
              suggest: 'please use SystemEvent.EventType.KEY_DOWN and SystemEvent.EventType.KEY_UP instead'
            }]);
            replaceProperty(EventMouse, 'EventMouse', ['DOWN', 'UP', 'MOVE'].map(item => ({
              name: item,
              newName: `MOUSE_${item}`,
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            })));
            replaceProperty(EventMouse, 'EventMouse', [{
              name: 'SCROLL',
              newName: 'MOUSE_WHEEL',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }]);
            markAsWarning(EventMouse.prototype, 'EventMouse.prototype', [{
              name: 'eventType',
              suggest: 'please use EventMouse.prototype.type instead'
            }]);
            replaceProperty(EventTouch, 'EventTouch', [{
              name: 'BEGAN',
              newName: 'TOUCH_START',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }]);
            replaceProperty(EventTouch, 'EventTouch', [{
              name: 'MOVED',
              newName: 'TOUCH_MOVE',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }]);
            replaceProperty(EventTouch, 'EventTouch', [{
              name: 'ENDED',
              newName: 'TOUCH_END',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }]);
            replaceProperty(EventTouch, 'EventTouch', [{
              name: 'CANCELLED',
              newName: 'TOUCH_CANCEL',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }]);
            markAsWarning(EventTouch.prototype, 'EventTouch.prototype', [{
              name: 'getEventCode',
              suggest: 'please use EventTouch.prototype.type instead'
            }]);
            replaceProperty(EventTouch.prototype, 'EventTouch.prototype', [{
              name: 'getUILocationInView',
              newName: 'getLocationInView',
              target: EventTouch,
              targetName: 'EventTouch'
            }]);
            markAsWarning(macro.KEY, 'macro.KEY', ['back', 'menu', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '+', '-', '/', ';', '=', ',', '.', '[', ']', 'dpadLeft', 'dpadRight', 'dpadUp', 'dpadDown', 'dpadCenter'].map(item => ({
              name: item
            })));
            markAsWarning(macro.KEY, 'macro.KEY', [{
              name: 'shift',
              suggest: 'please use KeyCode.SHIFT_LEFT instead'
            }]);
            markAsWarning(macro.KEY, 'macro.KEY', [{
              name: 'ctrl',
              suggest: 'please use KeyCode.CTRL_LEFT instead'
            }]);
            markAsWarning(macro.KEY, 'macro.KEY', [{
              name: 'alt',
              suggest: 'please use KeyCode.ALT_LEFT instead'
            }]);
            markAsWarning(macro, 'macro', [{
              name: 'KEY',
              suggest: 'please use KeyCode instead'
            }]);

            var _dec$2, _class$2;
            replaceProperty(Node.prototype, 'Node', [{
              name: 'childrenCount',
              newName: 'children.length',
              customGetter() {
                return this.children.length;
              }
            }]);
            replaceProperty(Node.prototype, 'Node', [{
              name: 'width',
              targetName: 'node.getComponent(UITransform)',
              customGetter() {
                return this._uiProps.uiTransformComp.width;
              },
              customSetter(value) {
                this._uiProps.uiTransformComp.width = value;
              }
            }, {
              name: 'height',
              targetName: 'node.getComponent(UITransform)',
              customGetter() {
                return this._uiProps.uiTransformComp.height;
              },
              customSetter(value) {
                this._uiProps.uiTransformComp.height = value;
              }
            }, {
              name: 'anchorX',
              targetName: 'node.getComponent(UITransform)',
              customGetter() {
                return this._uiProps.uiTransformComp.anchorX;
              },
              customSetter(value) {
                this._uiProps.uiTransformComp.anchorX = value;
              }
            }, {
              name: 'anchorY',
              targetName: 'node.getComponent(UITransform)',
              customGetter() {
                return this._uiProps.uiTransformComp.anchorY;
              },
              customSetter(value) {
                this._uiProps.uiTransformComp.anchorY = value;
              }
            }, {
              name: 'getAnchorPoint',
              targetName: 'node.getComponent(UITransform)',
              customFunction(out) {
                if (!out) {
                  out = new Vec2();
                }
                out.set(this._uiProps.uiTransformComp.anchorPoint);
                return out;
              }
            }, {
              name: 'setAnchorPoint',
              targetName: 'node.getComponent(UITransform)',
              customFunction(point, y) {
                this._uiProps.uiTransformComp.setAnchorPoint(point, y);
              }
            }, {
              name: 'getContentSize',
              targetName: 'node.getComponent(UITransform)',
              customFunction(out) {
                if (!out) {
                  out = new Size();
                }
                out.set(this._uiProps.uiTransformComp.contentSize);
                return out;
              }
            }, {
              name: 'setContentSize',
              targetName: 'node.getComponent(UITransform)',
              customFunction(size, height) {
                if (typeof size === 'number') {
                  this._uiProps.uiTransformComp.setContentSize(size, height);
                } else {
                  this._uiProps.uiTransformComp.setContentSize(size);
                }
              }
            }]);
            removeProperty(SceneGlobals.prototype, 'SceneGlobals.prototype', [{
              name: 'aspect'
            }, {
              name: 'selfShadow'
            }, {
              name: 'linear'
            }, {
              name: 'packing'
            }, {
              name: 'autoAdapt'
            }, {
              name: 'fixedArea'
            }, {
              name: 'pcf'
            }, {
              name: 'bias'
            }, {
              name: 'normalBias'
            }, {
              name: 'near'
            }, {
              name: 'far'
            }, {
              name: 'shadowDistance'
            }, {
              name: 'invisibleOcclusionRange'
            }, {
              name: 'orthoSize'
            }, {
              name: 'saturation'
            }]);
            replaceProperty(SceneGlobals.prototype, 'SceneGlobals.prototype', [{
              name: 'distance',
              newName: 'planeHeight'
            }, {
              name: 'normal',
              newName: 'planeDirection'
            }, {
              name: 'size',
              newName: 'shadowMapSize'
            }]);
            removeProperty(Node.prototype, 'Node.prototype', [{
              name: 'addLayer'
            }, {
              name: 'removeLayer'
            }]);
            replaceProperty(NodeUIProperties.prototype, 'NodeUIProperties', [{
              name: 'opacityDirty',
              newName: 'colorDirty'
            }]);
            removeProperty(Layers, 'Layers', [{
              name: 'All'
            }, {
              name: 'RaycastMask'
            }, {
              name: 'check'
            }]);
            replaceProperty(Layers, 'Layers', [{
              name: 'Default',
              newName: 'DEFAULT',
              target: Layers.Enum,
              targetName: 'Layers.Enum'
            }, {
              name: 'Always',
              newName: 'ALWAYS',
              target: Layers.Enum,
              targetName: 'Layers.Enum'
            }, {
              name: 'IgnoreRaycast',
              newName: 'IGNORE_RAYCAST',
              target: Layers.Enum,
              targetName: 'Layers.Enum'
            }, {
              name: 'Gizmos',
              newName: 'GIZMOS',
              target: Layers.Enum,
              targetName: 'Layers.Enum'
            }, {
              name: 'Editor',
              newName: 'EDITOR',
              target: Layers.Enum,
              targetName: 'Layers.Enum'
            }, {
              name: 'UI',
              newName: 'UI_3D',
              target: Layers.Enum,
              targetName: 'Layers.Enum'
            }, {
              name: 'UI2D',
              newName: 'UI_2D',
              target: Layers.Enum,
              targetName: 'Layers.Enum'
            }, {
              name: 'SceneGizmo',
              newName: 'SCENE_GIZMO',
              target: Layers.Enum,
              targetName: 'Layers.Enum'
            }, {
              name: 'makeInclusiveMask',
              newName: 'makeMaskInclude',
              target: Layers,
              targetName: 'Layers'
            }, {
              name: 'makeExclusiveMask',
              newName: 'makeMaskExclude',
              target: Layers,
              targetName: 'Layers'
            }]);
            removeProperty(Layers.Enum, 'Layers.Enum', [{
              name: 'ALWAYS'
            }]);
            removeProperty(Layers.BitMask, 'Layers.BitMask', [{
              name: 'ALWAYS'
            }]);
            const HideInHierarchy = CCObject.Flags.HideInHierarchy;
            const DontSave = CCObject.Flags.DontSave;
            let PrivateNode = exports('ae', (_dec$2 = ccclass('cc.PrivateNode'), _dec$2(_class$2 = class PrivateNode extends Node {
              constructor(name) {
                super(name);
                warnID(12003, this.name);
                this.hideFlags |= DontSave | HideInHierarchy;
              }
            }) || _class$2));
            replaceProperty(SystemEventType, 'SystemEventType', ['MOUSE_ENTER', 'MOUSE_LEAVE', 'TRANSFORM_CHANGED', 'SCENE_CHANGED_FOR_PERSISTS', 'SIZE_CHANGED', 'ANCHOR_CHANGED', 'COLOR_CHANGED', 'CHILD_ADDED', 'CHILD_REMOVED', 'PARENT_CHANGED', 'NODE_DESTROYED', 'LAYER_CHANGED', 'SIBLING_ORDER_CHANGED'].map(name => ({
              name,
              target: Node.EventType,
              targetName: 'Node.EventType'
            })));
            replaceProperty(Node.EventType, 'Node.EventType', [{
              name: 'DEVICEMOTION',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }, {
              name: 'KEY_DOWN',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }, {
              name: 'KEY_UP',
              target: SystemEvent.EventType,
              targetName: 'SystemEvent.EventType'
            }]);
            legacyCC.PrivateNode = PrivateNode;

            deprecateModuleExportedName({
              BaseNode: {
                newName: 'Node',
                since: '3.7.0',
                removed: false
              }
            });

            var _dec$1, _dec2, _class$1, _class2$1, _initializer$1, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _initializer2$1, _initializer3$1, _initializer4, _initializer5, _initializer6, _dec9, _class7, _class8, _initializer7, _dec10, _dec11, _dec12, _class10, _class11, _initializer8, _initializer9, _initializer10, _dec13, _dec14, _dec15, _class13, _class14, _initializer11, _initializer12, _dec16, _dec17, _dec18, _class16, _class17, _initializer13, _initializer14, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class19, _class20, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _dec25, _dec26, _dec27, _dec28, _class22, _class23, _initializer21, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26;
            let TargetInfo = (_dec$1 = ccclass('cc.TargetInfo'), _dec2 = type([CCString]), _dec$1(_class$1 = (_class2$1 = class TargetInfo {
              constructor() {
                this.localID = _initializer$1 && _initializer$1();
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "localID", [serializable, _dec2], function () {
              return [];
            })), _class2$1)) || _class$1);
            let TargetOverrideInfo = (_dec3 = ccclass('cc.TargetOverrideInfo'), _dec4 = type(CCObject), _dec5 = type(TargetInfo), _dec6 = type([CCString]), _dec7 = type(Node), _dec8 = type(TargetInfo), _dec3(_class4 = (_class5 = class TargetOverrideInfo {
              constructor() {
                this.source = _initializer2$1 && _initializer2$1();
                this.sourceInfo = _initializer3$1 && _initializer3$1();
                this.propertyPath = _initializer4 && _initializer4();
                this.target = _initializer5 && _initializer5();
                this.targetInfo = _initializer6 && _initializer6();
              }
            }, (_initializer2$1 = applyDecoratedInitializer(_class5.prototype, "source", [serializable, _dec4], function () {
              return null;
            }), _initializer3$1 = applyDecoratedInitializer(_class5.prototype, "sourceInfo", [serializable, _dec5], function () {
              return null;
            }), _initializer4 = applyDecoratedInitializer(_class5.prototype, "propertyPath", [serializable, _dec6], function () {
              return [];
            }), _initializer5 = applyDecoratedInitializer(_class5.prototype, "target", [serializable, _dec7], function () {
              return null;
            }), _initializer6 = applyDecoratedInitializer(_class5.prototype, "targetInfo", [serializable, _dec8], function () {
              return null;
            })), _class5)) || _class4);
            let CompPrefabInfo = (_dec9 = ccclass('cc.CompPrefabInfo'), _dec9(_class7 = (_class8 = class CompPrefabInfo {
              constructor() {
                this.fileId = _initializer7 && _initializer7();
              }
            }, (_initializer7 = applyDecoratedInitializer(_class8.prototype, "fileId", [serializable], function () {
              return '';
            })), _class8)) || _class7);
            let PropertyOverrideInfo = (_dec10 = ccclass('CCPropertyOverrideInfo'), _dec11 = type(TargetInfo), _dec12 = type([CCString]), _dec10(_class10 = (_class11 = class PropertyOverrideInfo {
              constructor() {
                this.targetInfo = _initializer8 && _initializer8();
                this.propertyPath = _initializer9 && _initializer9();
                this.value = _initializer10 && _initializer10();
              }
              isTarget(localID, propPath) {
              }
            }, (_initializer8 = applyDecoratedInitializer(_class11.prototype, "targetInfo", [serializable, _dec11], function () {
              return null;
            }), _initializer9 = applyDecoratedInitializer(_class11.prototype, "propertyPath", [serializable, _dec12], function () {
              return [];
            }), _initializer10 = applyDecoratedInitializer(_class11.prototype, "value", [serializable], null)), _class11)) || _class10);
            let MountedChildrenInfo = (_dec13 = ccclass('cc.MountedChildrenInfo'), _dec14 = type(TargetInfo), _dec15 = type([Node]), _dec13(_class13 = (_class14 = class MountedChildrenInfo {
              constructor() {
                this.targetInfo = _initializer11 && _initializer11();
                this.nodes = _initializer12 && _initializer12();
              }
              isTarget(localID) {
              }
            }, (_initializer11 = applyDecoratedInitializer(_class14.prototype, "targetInfo", [serializable, _dec14], function () {
              return null;
            }), _initializer12 = applyDecoratedInitializer(_class14.prototype, "nodes", [serializable, _dec15], function () {
              return [];
            })), _class14)) || _class13);
            let MountedComponentsInfo = (_dec16 = ccclass('cc.MountedComponentsInfo'), _dec17 = type(TargetInfo), _dec18 = type([Component]), _dec16(_class16 = (_class17 = class MountedComponentsInfo {
              constructor() {
                this.targetInfo = _initializer13 && _initializer13();
                this.components = _initializer14 && _initializer14();
              }
              isTarget(localID) {
              }
            }, (_initializer13 = applyDecoratedInitializer(_class17.prototype, "targetInfo", [serializable, _dec17], function () {
              return null;
            }), _initializer14 = applyDecoratedInitializer(_class17.prototype, "components", [serializable, _dec18], function () {
              return [];
            })), _class17)) || _class16);
            let PrefabInstance = (_dec19 = ccclass('cc.PrefabInstance'), _dec20 = type(Node), _dec21 = type([MountedChildrenInfo]), _dec22 = type([MountedComponentsInfo]), _dec23 = type([PropertyOverrideInfo]), _dec24 = type([TargetInfo]), _dec19(_class19 = (_class20 = class PrefabInstance {
              constructor() {
                this.fileId = _initializer15 && _initializer15();
                this.prefabRootNode = _initializer16 && _initializer16();
                this.mountedChildren = _initializer17 && _initializer17();
                this.mountedComponents = _initializer18 && _initializer18();
                this.propertyOverrides = _initializer19 && _initializer19();
                this.removedComponents = _initializer20 && _initializer20();
                this.targetMap = {};
                this.expanded = false;
              }
              findPropertyOverride(localID, propPath) {
              }
              removePropertyOverride(localID, propPath) {
              }
            }, (_initializer15 = applyDecoratedInitializer(_class20.prototype, "fileId", [serializable], function () {
              return '';
            }), _initializer16 = applyDecoratedInitializer(_class20.prototype, "prefabRootNode", [serializable, _dec20], null), _initializer17 = applyDecoratedInitializer(_class20.prototype, "mountedChildren", [serializable, _dec21], function () {
              return [];
            }), _initializer18 = applyDecoratedInitializer(_class20.prototype, "mountedComponents", [serializable, _dec22], function () {
              return [];
            }), _initializer19 = applyDecoratedInitializer(_class20.prototype, "propertyOverrides", [serializable, _dec23], function () {
              return [];
            }), _initializer20 = applyDecoratedInitializer(_class20.prototype, "removedComponents", [serializable, _dec24], function () {
              return [];
            })), _class20)) || _class19);
            let PrefabInfo = (_dec25 = ccclass('cc.PrefabInfo'), _dec26 = type(Node), _dec27 = type(PrefabInstance), _dec28 = type([TargetOverrideInfo]), _dec25(_class22 = (_class23 = class PrefabInfo {
              constructor() {
                this.root = _initializer21 && _initializer21();
                this.asset = _initializer22 && _initializer22();
                this.fileId = _initializer23 && _initializer23();
                this.instance = _initializer24 && _initializer24();
                this.targetOverrides = _initializer25 && _initializer25();
                this.nestedPrefabInstanceRoots = _initializer26 && _initializer26();
              }
            }, (_initializer21 = applyDecoratedInitializer(_class23.prototype, "root", [serializable, _dec26], null), _initializer22 = applyDecoratedInitializer(_class23.prototype, "asset", [serializable], null), _initializer23 = applyDecoratedInitializer(_class23.prototype, "fileId", [serializable], function () {
              return '';
            }), _initializer24 = applyDecoratedInitializer(_class23.prototype, "instance", [serializable, _dec27], null), _initializer25 = applyDecoratedInitializer(_class23.prototype, "targetOverrides", [serializable, _dec28], null), _initializer26 = applyDecoratedInitializer(_class23.prototype, "nestedPrefabInstanceRoots", [serializable], null)), _class23)) || _class22);
            legacyCC._PrefabInfo = PrefabInfo;

            function createNodeWithPrefab(node) {
              const prefabInfo = node === null || node === void 0 ? void 0 : node.prefab;
              if (!prefabInfo) {
                return;
              }
              const prefabInstance = prefabInfo.instance;
              if (!prefabInstance) {
                return;
              }
              if (!prefabInfo.asset) {
                {
                  errorID(3701, node.name);
                }
                prefabInfo.instance = undefined;
                return;
              }
              const _objFlags = node._objFlags;
              const _parent = node.getParent();
              const _id = node.uuid;
              node[editorExtrasTag];
              legacyCC.game._isCloning = true;
              {
                prefabInfo.asset._doInstantiate(node);
              }
              legacyCC.game._isCloning = false;
              node._objFlags = _objFlags;
              node.modifyParent(_parent);
              node.id = _id;
              if (node.prefab) {
                node.prefab.instance = prefabInfo.instance;
              }
            }
            function generateTargetMap(node, targetMap, isRoot) {
              var _node$prefab;
              if (!targetMap) {
                return;
              }
              if (!node) {
                return;
              }
              let curTargetMap = targetMap;
              const prefabInstance = (_node$prefab = node.prefab) === null || _node$prefab === void 0 ? void 0 : _node$prefab.instance;
              if (!isRoot && prefabInstance) {
                targetMap[prefabInstance.fileId] = {};
                curTargetMap = targetMap[prefabInstance.fileId];
              }
              const prefabInfo = node.prefab;
              if (prefabInfo) {
                curTargetMap[prefabInfo.fileId] = node;
              }
              const components = node.components;
              for (let i = 0; i < components.length; i++) {
                const comp = components[i];
                if (comp.__prefab) {
                  curTargetMap[comp.__prefab.fileId] = comp;
                }
              }
              for (let i = 0; i < node.children.length; i++) {
                const childNode = node.children[i];
                generateTargetMap(childNode, curTargetMap, false);
              }
            }
            function getTarget(localID, targetMap) {
              if (!localID) {
                return null;
              }
              let target = null;
              let targetIter = targetMap;
              for (let i = 0; i < localID.length; i++) {
                if (!targetIter) {
                  return null;
                }
                targetIter = targetIter[localID[i]];
              }
              target = targetIter;
              return target;
            }
            function applyMountedChildren(node, mountedChildren, targetMap) {
              if (!mountedChildren) {
                return;
              }
              for (let i = 0; i < mountedChildren.length; i++) {
                const childInfo = mountedChildren[i];
                if (childInfo && childInfo.targetInfo) {
                  const target = getTarget(childInfo.targetInfo.localID, targetMap);
                  if (!target) {
                    continue;
                  }
                  let curTargetMap = targetMap;
                  const localID = childInfo.targetInfo.localID;
                  if (localID.length > 0) {
                    for (let i = 0; i < localID.length - 1; i++) {
                      curTargetMap = curTargetMap[localID[i]];
                    }
                  }
                  if (childInfo.nodes) {
                    for (let i = 0; i < childInfo.nodes.length; i++) {
                      const childNode = childInfo.nodes[i];
                      if (!childNode || target.children.includes(childNode)) {
                        continue;
                      }
                      target.children.push(childNode);
                      childNode.modifyParent(target);
                      generateTargetMap(childNode, curTargetMap, false);
                      childNode.siblingIndex = target.children.length - 1;
                      expandPrefabInstanceNode(childNode, true);
                    }
                  }
                }
              }
            }
            function applyMountedComponents(node, mountedComponents, targetMap) {
              if (!mountedComponents) {
                return;
              }
              for (let i = 0; i < mountedComponents.length; i++) {
                const componentsInfo = mountedComponents[i];
                if (componentsInfo && componentsInfo.targetInfo) {
                  const target = getTarget(componentsInfo.targetInfo.localID, targetMap);
                  if (!target) {
                    continue;
                  }
                  if (componentsInfo.components) {
                    for (let i = 0; i < componentsInfo.components.length; i++) {
                      const comp = componentsInfo.components[i];
                      if (!comp) {
                        continue;
                      }
                      comp.node = target;
                      target.getWritableComponents().push(comp);
                    }
                  }
                }
              }
            }
            function applyRemovedComponents(node, removedComponents, targetMap) {
              if (!removedComponents) {
                return;
              }
              for (let i = 0; i < removedComponents.length; i++) {
                const targetInfo = removedComponents[i];
                if (targetInfo) {
                  const target = getTarget(targetInfo.localID, targetMap);
                  if (!target || !target.node) {
                    continue;
                  }
                  const index = target.node.components.indexOf(target);
                  if (index >= 0) {
                    target.node.getWritableComponents().splice(index, 1);
                  }
                }
              }
            }
            function applyPropertyOverrides(node, propertyOverrides, targetMap) {
              if (propertyOverrides.length <= 0) {
                return;
              }
              let target = null;
              for (let i = 0; i < propertyOverrides.length; i++) {
                const propOverride = propertyOverrides[i];
                if (propOverride && propOverride.targetInfo) {
                  const targetInfo = propOverride.targetInfo;
                  target = getTarget(targetInfo.localID, targetMap);
                  if (!target) {
                    continue;
                  }
                  let targetPropOwner = target;
                  const propertyPath = propOverride.propertyPath.slice();
                  if (propertyPath.length > 0) {
                    const targetPropName = propertyPath.pop();
                    if (!targetPropName) {
                      continue;
                    }
                    for (let i = 0; i < propertyPath.length; i++) {
                      const propName = propertyPath[i];
                      targetPropOwner = targetPropOwner[propName];
                      if (!targetPropOwner) {
                        break;
                      }
                    }
                    if (!targetPropOwner) {
                      continue;
                    }
                    if (Array.isArray(targetPropOwner)) {
                      if (targetPropName === 'length') {
                        targetPropOwner[targetPropName] = propOverride.value;
                      } else {
                        const index = Number.parseInt(targetPropName);
                        if (Number.isInteger(index) && index < targetPropOwner.length) {
                          targetPropOwner[targetPropName] = propOverride.value;
                        }
                      }
                    } else if (targetPropOwner[targetPropName] instanceof ValueType) {
                      targetPropOwner[targetPropName].set(propOverride.value);
                    } else {
                      targetPropOwner[targetPropName] = propOverride.value;
                    }
                  }
                }
              }
            }
            function applyTargetOverrides(node) {
              var _node$prefab2;
              const targetOverrides = (_node$prefab2 = node.prefab) === null || _node$prefab2 === void 0 ? void 0 : _node$prefab2.targetOverrides;
              if (targetOverrides) {
                for (let i = 0; i < targetOverrides.length; i++) {
                  var _targetAsNode$prefab;
                  const targetOverride = targetOverrides[i];
                  let source = targetOverride.source;
                  const sourceInfo = targetOverride.sourceInfo;
                  if (sourceInfo) {
                    var _src$prefab;
                    const src = targetOverride.source;
                    const sourceInstance = src === null || src === void 0 ? void 0 : (_src$prefab = src.prefab) === null || _src$prefab === void 0 ? void 0 : _src$prefab.instance;
                    if (sourceInstance && sourceInstance.targetMap) {
                      source = getTarget(sourceInfo.localID, sourceInstance.targetMap);
                    }
                  }
                  if (!source) {
                    continue;
                  }
                  let target = null;
                  const targetInfo = targetOverride.targetInfo;
                  if (!targetInfo) {
                    continue;
                  }
                  const targetAsNode = targetOverride.target;
                  const targetInstance = targetAsNode === null || targetAsNode === void 0 ? void 0 : (_targetAsNode$prefab = targetAsNode.prefab) === null || _targetAsNode$prefab === void 0 ? void 0 : _targetAsNode$prefab.instance;
                  if (!targetInstance || !targetInstance.targetMap) {
                    continue;
                  }
                  target = getTarget(targetInfo.localID, targetInstance.targetMap);
                  if (!target) {
                    continue;
                  }
                  const propertyPath = targetOverride.propertyPath.slice();
                  let targetPropOwner = source;
                  if (propertyPath.length > 0) {
                    const targetPropName = propertyPath.pop();
                    if (!targetPropName) {
                      return;
                    }
                    for (let i = 0; i < propertyPath.length; i++) {
                      const propName = propertyPath[i];
                      targetPropOwner = targetPropOwner[propName];
                      if (!targetPropOwner) {
                        break;
                      }
                    }
                    if (!targetPropOwner) {
                      continue;
                    }
                    targetPropOwner[targetPropName] = target;
                  }
                }
              }
            }
            function expandPrefabInstanceNode(node, recursively = false) {
              var _node$prefab3;
              const prefabInstance = node === null || node === void 0 ? void 0 : (_node$prefab3 = node.prefab) === null || _node$prefab3 === void 0 ? void 0 : _node$prefab3.instance;
              if (prefabInstance && !prefabInstance.expanded) {
                createNodeWithPrefab(node);
                if (recursively) {
                  if (node && node.children) {
                    node.children.forEach(child => {
                      expandPrefabInstanceNode(child, true);
                    });
                  }
                }
                const targetMap = {};
                prefabInstance.targetMap = targetMap;
                generateTargetMap(node, targetMap, true);
                applyMountedChildren(node, prefabInstance.mountedChildren, targetMap);
                applyRemovedComponents(node, prefabInstance.removedComponents, targetMap);
                applyMountedComponents(node, prefabInstance.mountedComponents, targetMap);
                applyPropertyOverrides(node, prefabInstance.propertyOverrides, targetMap);
                prefabInstance.expanded = true;
              } else if (recursively) {
                if (node && node.children) {
                  node.children.forEach(child => {
                    expandPrefabInstanceNode(child, true);
                  });
                }
              }
            }
            function expandNestedPrefabInstanceNode(node) {
              const prefabInfo = node.prefab;
              if (prefabInfo && prefabInfo.nestedPrefabInstanceRoots) {
                prefabInfo.nestedPrefabInstanceRoots.forEach(instanceNode => {
                  expandPrefabInstanceNode(instanceNode);
                });
              }
            }
            function applyNodeAndComponentId(prefabInstanceNode, rootId) {
              const {
                components,
                children
              } = prefabInstanceNode;
              for (let i = 0; i < components.length; i++) {
                var _comp$__prefab$fileId, _comp$__prefab;
                const comp = components[i];
                const fileID = (_comp$__prefab$fileId = (_comp$__prefab = comp.__prefab) === null || _comp$__prefab === void 0 ? void 0 : _comp$__prefab.fileId) !== null && _comp$__prefab$fileId !== void 0 ? _comp$__prefab$fileId : '';
                comp._id = `${rootId}${fileID}`;
              }
              for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const prefabInfo = child.prefab;
                const fileId = prefabInfo !== null && prefabInfo !== void 0 && prefabInfo.instance ? prefabInfo.instance.fileId : prefabInfo === null || prefabInfo === void 0 ? void 0 : prefabInfo.fileId;
                if (!fileId) continue;
                child.id = `${rootId}${fileId}`;
                if (!(prefabInfo !== null && prefabInfo !== void 0 && prefabInfo.instance)) {
                  applyNodeAndComponentId(child, rootId);
                }
              }
            }

            var utils = /*#__PURE__*/Object.freeze({
                __proto__: null,
                createNodeWithPrefab: createNodeWithPrefab,
                generateTargetMap: generateTargetMap,
                getTarget: getTarget,
                applyMountedChildren: applyMountedChildren,
                applyMountedComponents: applyMountedComponents,
                applyRemovedComponents: applyRemovedComponents,
                applyPropertyOverrides: applyPropertyOverrides,
                applyTargetOverrides: applyTargetOverrides,
                expandPrefabInstanceNode: expandPrefabInstanceNode,
                expandNestedPrefabInstanceNode: expandNestedPrefabInstanceNode,
                applyNodeAndComponentId: applyNodeAndComponentId,
                TargetInfo: TargetInfo,
                TargetOverrideInfo: TargetOverrideInfo,
                CompPrefabInfo: CompPrefabInfo,
                PropertyOverrideInfo: PropertyOverrideInfo,
                MountedChildrenInfo: MountedChildrenInfo,
                MountedComponentsInfo: MountedComponentsInfo,
                PrefabInstance: PrefabInstance,
                PrefabInfo: PrefabInfo
            });

            const Scene = exports('U', jsb.Scene);
            legacyCC.Scene = Scene;
            const sceneProto = Scene.prototype;
            Object.defineProperty(sceneProto, '_globals', {
              enumerable: true,
              configurable: true,
              get() {
                return this.getSceneGlobals();
              },
              set(v) {
                this._globalRef = v;
                this.setSceneGlobals(v);
              }
            });
            Object.defineProperty(sceneProto, 'globals', {
              enumerable: true,
              configurable: true,
              get() {
                return this.getSceneGlobals();
              }
            });
            Object.defineProperty(sceneProto, '_renderScene', {
              enumerable: true,
              configurable: true,
              get() {
                if (!this._renderSceneInternal) {
                  this._renderSceneInternal = this.getRenderScene();
                }
                return this._renderSceneInternal;
              }
            });
            Object.defineProperty(sceneProto, 'renderScene', {
              enumerable: true,
              configurable: true,
              get() {
                if (!this._renderSceneInternal) {
                  this._renderSceneInternal = this.getRenderScene();
                }
                return this._renderSceneInternal;
              }
            });
            sceneProto._ctor = function () {
              Node.prototype._ctor.apply(this, arguments);
              this._inited = false;
              this._renderSceneInternal = null;
              this._globalRef = null;
              this._prefabSyncedInLiveReload = false;
            };
            sceneProto._onBatchCreated = function (dontSyncChildPrefab) {
              if (this._parent) {
                this._siblingIndex = this._parent.children.indexOf(this);
              }
              const children = this._children;
              const len = children.length;
              let child;
              for (let i = 0; i < len; ++i) {
                child = children[i];
                child._siblingIndex = i;
                child._onBatchCreated(dontSyncChildPrefab);
              }
            };
            const oldLoad = sceneProto._load;
            sceneProto._load = function () {
              this._scene = this;
              if (!this._inited) {
                expandNestedPrefabInstanceNode(this);
                applyTargetOverrides(this);
                this._onBatchCreated(EDITOR );
                this._inited = true;
              }
              updateChildrenForDeserialize(this);
              oldLoad.call(this);
            };
            sceneProto._activate = function (active) {
              active = active !== false;
              legacyCC.director._nodeActivator.activateNode(this, active);
              {
                this._globals.activate(this);
                if (this._renderScene) {
                  this._renderScene.activate();
                }
              }
            };
            sceneProto._instantiate = function () {};
            patch_cc_Scene({
              Scene,
              SceneGlobals
            });

            const fastRemoveAt = fastRemoveAt$1;
            const IsStartCalled = CCObject.Flags.IsStartCalled;
            const IsOnEnableCalled$1 = CCObject.Flags.IsOnEnableCalled;
            CCObject.Flags.IsEditorOnEnableCalled;
            function sortedIndex(array, comp) {
              const order = comp.constructor._executionOrder;
              const id = comp._id;
              let l = 0;
              for (let h = array.length - 1, m = h >>> 1; l <= h; m = l + h >>> 1) {
                const test = array[m];
                const testOrder = test.constructor._executionOrder;
                if (testOrder > order) {
                  h = m - 1;
                } else if (testOrder < order) {
                  l = m + 1;
                } else {
                  const testId = test._id;
                  if (testId > id) {
                    h = m - 1;
                  } else if (testId < id) {
                    l = m + 1;
                  } else {
                    return m;
                  }
                }
              }
              return ~l;
            }
            function stableRemoveInactive(iterator, flagToClear) {
              const array = iterator.array;
              let next = iterator.i + 1;
              while (next < array.length) {
                const comp = array[next];
                if (comp.node._activeInHierarchy) {
                  ++next;
                } else {
                  iterator.removeAt(next);
                  if (flagToClear) {
                    comp._objFlags &= ~flagToClear;
                  }
                }
              }
            }
            class LifeCycleInvoker {
              get zero() {
                return this._zero;
              }
              get neg() {
                return this._neg;
              }
              get pos() {
                return this._pos;
              }
              constructor(invokeFunc) {
                this._zero = void 0;
                this._neg = void 0;
                this._pos = void 0;
                this._invoke = void 0;
                const Iterator = MutableForwardIterator;
                this._zero = new Iterator([]);
                this._neg = new Iterator([]);
                this._pos = new Iterator([]);
                this._invoke = invokeFunc;
              }
            }
            LifeCycleInvoker.stableRemoveInactive = stableRemoveInactive;
            function compareOrder(a, b) {
              return a.constructor._executionOrder - b.constructor._executionOrder;
            }
            class OneOffInvoker extends LifeCycleInvoker {
              add(comp) {
                const order = comp.constructor._executionOrder;
                (order === 0 ? this._zero : order < 0 ? this._neg : this._pos).array.push(comp);
              }
              remove(comp) {
                const order = comp.constructor._executionOrder;
                (order === 0 ? this._zero : order < 0 ? this._neg : this._pos).fastRemove(comp);
              }
              cancelInactive(flagToClear) {
                stableRemoveInactive(this._zero, flagToClear);
                stableRemoveInactive(this._neg, flagToClear);
                stableRemoveInactive(this._pos, flagToClear);
              }
              invoke() {
                const compsNeg = this._neg;
                if (compsNeg.array.length > 0) {
                  compsNeg.array.sort(compareOrder);
                  this._invoke(compsNeg);
                  compsNeg.array.length = 0;
                }
                this._invoke(this._zero);
                this._zero.array.length = 0;
                const compsPos = this._pos;
                if (compsPos.array.length > 0) {
                  compsPos.array.sort(compareOrder);
                  this._invoke(compsPos);
                  compsPos.array.length = 0;
                }
              }
            }
            class ReusableInvoker extends LifeCycleInvoker {
              add(comp) {
                const order = comp.constructor._executionOrder;
                if (order === 0) {
                  this._zero.array.push(comp);
                } else {
                  const array = order < 0 ? this._neg.array : this._pos.array;
                  const i = sortedIndex(array, comp);
                  if (i < 0) {
                    array.splice(~i, 0, comp);
                  } else {
                    error('component already added');
                  }
                }
              }
              remove(comp) {
                const order = comp.constructor._executionOrder;
                if (order === 0) {
                  this._zero.fastRemove(comp);
                } else {
                  const iterator = order < 0 ? this._neg : this._pos;
                  const i = sortedIndex(iterator.array, comp);
                  if (i >= 0) {
                    iterator.removeAt(i);
                  }
                }
              }
              invoke(dt) {
                if (this._neg.array.length > 0) {
                  this._invoke(this._neg, dt);
                }
                this._invoke(this._zero, dt);
                if (this._pos.array.length > 0) {
                  this._invoke(this._pos, dt);
                }
              }
            }
            function createInvokeImplJit(code, useDt, ensureFlag) {
              const body = `${'var a=it.array;' + 'for(it.i=0;it.i<a.length;++it.i){' + 'var c=a[it.i];'}${code}}`;
              const fastPath = useDt ? Function('it', 'dt', body) : Function('it', body);
              const singleInvoke = Function('c', 'dt', code);
              return createInvokeImpl(singleInvoke, fastPath, ensureFlag);
            }
            function createInvokeImpl(singleInvoke, fastPath, ensureFlag) {
              return (iterator, dt) => {
                try {
                  fastPath(iterator, dt);
                } catch (e) {
                  legacyCC._throw(e);
                  const array = iterator.array;
                  if (ensureFlag) {
                    array[iterator.i]._objFlags |= ensureFlag;
                  }
                  ++iterator.i;
                  for (; iterator.i < array.length; ++iterator.i) {
                    try {
                      singleInvoke(array[iterator.i], dt);
                    } catch (e) {
                      legacyCC._throw(e);
                      if (ensureFlag) {
                        array[iterator.i]._objFlags |= ensureFlag;
                      }
                    }
                  }
                }
              };
            }
            const invokeStart = createInvokeImplJit(`c.start();c._objFlags|=${IsStartCalled}`, false, IsStartCalled) ;
            const invokeUpdate = createInvokeImplJit('c.update(dt)', true) ;
            const invokeLateUpdate = createInvokeImplJit('c.lateUpdate(dt)', true) ;
            const invokeOnEnable = iterator => {
              const compScheduler = legacyCC.director._compScheduler;
              const array = iterator.array;
              for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
                const comp = array[iterator.i];
                if (comp._enabled) {
                  comp.onEnable();
                  const deactivatedDuringOnEnable = !comp.node._activeInHierarchy;
                  if (!deactivatedDuringOnEnable) {
                    compScheduler._onEnabled(comp);
                  }
                }
              }
            };
            class ComponentScheduler {
              constructor() {
                this.startInvoker = void 0;
                this.updateInvoker = void 0;
                this.lateUpdateInvoker = void 0;
                this._deferredComps = [];
                this._updating = void 0;
                this.unscheduleAll();
              }
              unscheduleAll() {
                this.startInvoker = new OneOffInvoker(invokeStart);
                this.updateInvoker = new ReusableInvoker(invokeUpdate);
                this.lateUpdateInvoker = new ReusableInvoker(invokeLateUpdate);
                this._updating = false;
              }
              _onEnabled(comp) {
                legacyCC.director.getScheduler().resumeTarget(comp);
                comp._objFlags |= IsOnEnableCalled$1;
                if (this._updating) {
                  this._deferredComps.push(comp);
                } else {
                  this._scheduleImmediate(comp);
                }
              }
              _onDisabled(comp) {
                legacyCC.director.getScheduler().pauseTarget(comp);
                comp._objFlags &= ~IsOnEnableCalled$1;
                const index = this._deferredComps.indexOf(comp);
                if (index >= 0) {
                  fastRemoveAt(this._deferredComps, index);
                  return;
                }
                if (comp.internalStart && !(comp._objFlags & IsStartCalled)) {
                  this.startInvoker.remove(comp);
                }
                if (comp.internalUpdate) {
                  this.updateInvoker.remove(comp);
                }
                if (comp.internalLateUpdate) {
                  this.lateUpdateInvoker.remove(comp);
                }
              }
              enableComp(comp, invoker) {
                if (!(comp._objFlags & IsOnEnableCalled$1)) {
                  if (comp.internalOnEnable) {
                    if (invoker) {
                      invoker.add(comp);
                      return;
                    } else {
                      comp.internalOnEnable();
                      const deactivatedDuringOnEnable = !comp.node.activeInHierarchy;
                      if (deactivatedDuringOnEnable) {
                        return;
                      }
                    }
                  }
                  this._onEnabled(comp);
                }
              }
              disableComp(comp) {
                if (comp._objFlags & IsOnEnableCalled$1) {
                  if (comp.internalOnDisable) {
                    comp.internalOnDisable();
                  }
                  this._onDisabled(comp);
                }
              }
              startPhase() {
                this._updating = true;
                this.startInvoker.invoke();
                this._startForNewComps();
              }
              updatePhase(dt) {
                this.updateInvoker.invoke(dt);
              }
              lateUpdatePhase(dt) {
                this.lateUpdateInvoker.invoke(dt);
                this._updating = false;
                this._startForNewComps();
              }
              _startForNewComps() {
                if (this._deferredComps.length > 0) {
                  this._deferredSchedule();
                  this.startInvoker.invoke();
                }
              }
              _scheduleImmediate(comp) {
                if (typeof comp.internalStart === 'function' && !(comp._objFlags & IsStartCalled)) {
                  this.startInvoker.add(comp);
                }
                if (typeof comp.internalUpdate === 'function') {
                  this.updateInvoker.add(comp);
                }
                if (typeof comp.internalLateUpdate === 'function') {
                  this.lateUpdateInvoker.add(comp);
                }
              }
              _deferredSchedule() {
                const comps = this._deferredComps;
                for (let i = 0, len = comps.length; i < len; i++) {
                  this._scheduleImmediate(comps[i]);
                }
                comps.length = 0;
              }
            } exports('aK', ComponentScheduler);

            const MAX_POOL_SIZE = 4;
            const IsPreloadStarted = CCObject.Flags.IsPreloadStarted;
            const IsOnLoadStarted = CCObject.Flags.IsOnLoadStarted;
            const IsOnLoadCalled = CCObject.Flags.IsOnLoadCalled;
            const IsOnEnableCalled = CCObject.Flags.IsOnEnableCalled;
            const Deactivating = CCObject.Flags.Deactivating;
            class UnsortedInvoker extends LifeCycleInvoker {
              add(comp) {
                this._zero.array.push(comp);
              }
              remove(comp) {
                this._zero.fastRemove(comp);
              }
              cancelInactive(flagToClear) {
                LifeCycleInvoker.stableRemoveInactive(this._zero, flagToClear);
              }
              invoke() {
                this._invoke(this._zero);
                this._zero.array.length = 0;
              }
            }
            const invokePreload = createInvokeImplJit('c.__preload();') ;
            const invokeOnLoad = createInvokeImplJit(`c.onLoad();c._objFlags|=${IsOnLoadCalled}`, false, IsOnLoadCalled) ;
            const activateTasksPool = new Pool(MAX_POOL_SIZE);
            activateTasksPool.get = function getActivateTask() {
              const task = this._get() || {
                preload: new UnsortedInvoker(invokePreload),
                onLoad: new OneOffInvoker(invokeOnLoad),
                onEnable: new OneOffInvoker(invokeOnEnable)
              };
              task.preload.zero.i = -1;
              let invoker = task.onLoad;
              invoker.zero.i = -1;
              invoker.neg.i = -1;
              invoker.pos.i = -1;
              invoker = task.onEnable;
              invoker.zero.i = -1;
              invoker.neg.i = -1;
              invoker.pos.i = -1;
              return task;
            };
            function _componentCorrupted(node, comp, index) {
              errorID(3817, node.name, index);
              console.log('Corrupted component value:', comp);
              if (comp) {
                node._removeComponent(comp);
              } else {
                removeAt(node.getWritableComponents(), index);
              }
            }
            class NodeActivator {
              constructor() {
                this._activatingStack = void 0;
                this.reset();
              }
              reset() {
                this._activatingStack = [];
              }
              activateNode(node, active) {
                if (active) {
                  const task = activateTasksPool.get();
                  if (task) {
                    this._activatingStack.push(task);
                    this._activateNodeRecursively(node, task.preload, task.onLoad, task.onEnable);
                    task.preload.invoke();
                    task.onLoad.invoke();
                    task.onEnable.invoke();
                    this._activatingStack.pop();
                    activateTasksPool.put(task);
                  }
                } else {
                  this._deactivateNodeRecursively(node);
                  const stack = this._activatingStack;
                  for (const lastTask of stack) {
                    lastTask.preload.cancelInactive(IsPreloadStarted);
                    lastTask.onLoad.cancelInactive(IsOnLoadStarted);
                    lastTask.onEnable.cancelInactive(IsOnEnableCalled);
                  }
                }
                node.emit(NodeEventType.ACTIVE_IN_HIERARCHY_CHANGED, node);
              }
              activateComp(comp, preloadInvoker, onLoadInvoker, onEnableInvoker) {
                if (!isValid(comp, true)) {
                  return;
                }
                if (!(comp._objFlags & IsPreloadStarted)) {
                  comp._objFlags |= IsPreloadStarted;
                  if (comp.internalPreload) {
                    if (preloadInvoker) {
                      preloadInvoker.add(comp);
                    } else {
                      comp.internalPreload();
                    }
                  }
                }
                if (!(comp._objFlags & IsOnLoadStarted)) {
                  comp._objFlags |= IsOnLoadStarted;
                  if (comp.internalOnLoad) {
                    if (onLoadInvoker) {
                      onLoadInvoker.add(comp);
                    } else {
                      comp.internalOnLoad();
                      comp._objFlags |= IsOnLoadCalled;
                    }
                  } else {
                    comp._objFlags |= IsOnLoadCalled;
                  }
                }
                if (comp._enabled) {
                  {
                    assertIsTrue(comp.node, getError(3823, comp.uuid, comp.name));
                  }
                  const deactivatedOnLoading = !comp.node.activeInHierarchy;
                  if (deactivatedOnLoading) {
                    return;
                  }
                  legacyCC.director._compScheduler.enableComp(comp, onEnableInvoker);
                }
              }
              destroyComp(comp) {
                legacyCC.director._compScheduler.disableComp(comp);
                if (comp.internalOnDestroy && comp._objFlags & IsOnLoadCalled) {
                  comp.internalOnDestroy();
                }
              }
              _activateNodeRecursively(node, preloadInvoker, onLoadInvoker, onEnableInvoker) {
                if (node._objFlags & Deactivating) {
                  errorID(3816, node.name);
                  return;
                }
                node._setActiveInHierarchy(true);
                let originCount = node.components.length;
                for (let i = 0; i < originCount; ++i) {
                  const component = node.components[i];
                  if (component instanceof legacyCC.Component) {
                    this.activateComp(component, preloadInvoker, onLoadInvoker, onEnableInvoker);
                  } else {
                    _componentCorrupted(node, component, i);
                    --i;
                    --originCount;
                  }
                }
                for (let i = 0, len = node.children.length; i < len; ++i) {
                  const child = node.children[i];
                  if (child.active) {
                    this._activateNodeRecursively(child, preloadInvoker, onLoadInvoker, onEnableInvoker);
                  }
                }
                node._onPostActivated(true);
              }
              _deactivateNodeRecursively(node) {
                {
                  assert(!(node._objFlags & Deactivating), 'node should not deactivating');
                  assert(node.activeInHierarchy, 'node should not deactivated');
                }
                node._objFlags |= Deactivating;
                node._setActiveInHierarchy(false);
                const originCount = node.components.length;
                for (let c = 0; c < originCount; ++c) {
                  const component = node.components[c];
                  if (component._enabled) {
                    legacyCC.director._compScheduler.disableComp(component);
                    if (node.activeInHierarchy) {
                      node._objFlags &= ~Deactivating;
                      return;
                    }
                  }
                }
                for (let i = 0, len = node.children.length; i < len; ++i) {
                  const child = node.children[i];
                  if (child.activeInHierarchy) {
                    this._deactivateNodeRecursively(child);
                    if (node.activeInHierarchy) {
                      node._objFlags &= ~Deactivating;
                      return;
                    }
                  }
                }
                node._onPostActivated(false);
                node._objFlags &= ~Deactivating;
              }
            } exports('W', NodeActivator);

            const Destroyed = CCObject.Flags.Destroyed;
            const PersistentMask = CCObject.Flags.PersistentMask;
            const DEFAULT = `${CCClass.Attr.DELIMETER}default`;
            const IDENTIFIER_RE = CCClass.IDENTIFIER_RE;
            const VAR = 'var ';
            const LOCAL_OBJ = 'o';
            const LOCAL_TEMP_OBJ = 't';
            const LOCAL_ARRAY = 'a';
            const LINE_INDEX_OF_NEW_OBJ = 0;
            const DEFAULT_MODULE_CACHE = {
              'cc.ClickEvent': false,
              'cc.PrefabInfo': false
            };
            const escapeForJS = CCClass.escapeForJS;
            class Declaration {
              constructor(varName, expression) {
                this.varName = void 0;
                this.expression = void 0;
                this.varName = varName;
                this.expression = expression;
              }
              toString() {
                return `${VAR + this.varName}=${this.expression};`;
              }
            }
            function mergeDeclaration(statement, expression) {
              if (expression instanceof Declaration) {
                return new Declaration(expression.varName, statement + expression.expression);
              } else {
                return statement + expression;
              }
            }
            function writeAssignment(codeArray, statement, expression) {
              if (Array.isArray(expression)) {
                expression[0] = mergeDeclaration(statement, expression[0]);
                codeArray.push(expression);
              } else {
                codeArray.push(`${mergeDeclaration(statement, expression)};`);
              }
            }
            class Assignments {
              constructor(targetExpression) {
                this._exps = void 0;
                this._targetExp = void 0;
                this._exps = [];
                this._targetExp = targetExpression;
              }
              append(key, expression) {
                this._exps.push([key, expression]);
              }
              writeCode(codeArray) {
                let targetVar;
                if (this._exps.length > 1) {
                  codeArray.push(`${LOCAL_TEMP_OBJ}=${this._targetExp};`);
                  targetVar = LOCAL_TEMP_OBJ;
                } else if (this._exps.length === 1) {
                  targetVar = this._targetExp;
                } else {
                  return;
                }
                for (let i = 0; i < this._exps.length; i++) {
                  const pair = this._exps[i];
                  writeAssignment(codeArray, `${targetVar + getPropAccessor(pair[0])}=`, pair[1]);
                }
              }
            }
            Assignments.pool = void 0;
            Assignments.pool = new Pool(obj => {
              obj._exps.length = 0;
              obj._targetExp = null;
            }, 1);
            Assignments.pool.get = function (targetExpression) {
              const cache = this._get() || new Assignments();
              cache._targetExp = targetExpression;
              return cache;
            };
            function getPropAccessor(key) {
              return IDENTIFIER_RE.test(key) ? `.${key}` : `[${escapeForJS(key)}]`;
            }
            class Parser$1 {
              constructor(obj, parent) {
                this.parent = void 0;
                this.objsToClear_iN$t = void 0;
                this.codeArray = void 0;
                this.objs = void 0;
                this.funcs = void 0;
                this.funcModuleCache = void 0;
                this.globalVariables = void 0;
                this.globalVariableId = void 0;
                this.localVariableId = void 0;
                this.result = void 0;
                this.parent = parent;
                this.objsToClear_iN$t = [];
                this.codeArray = [];
                this.objs = [];
                this.funcs = [];
                this.funcModuleCache = createMap();
                mixin(this.funcModuleCache, DEFAULT_MODULE_CACHE);
                this.globalVariables = [];
                this.globalVariableId = 0;
                this.localVariableId = 0;
                this.codeArray.push(`${VAR + LOCAL_OBJ},${LOCAL_TEMP_OBJ};`, 'if(R){', `${LOCAL_OBJ}=R;`, '}else{', `${LOCAL_OBJ}=R=new ${this.getFuncModule(obj.constructor, true)}();`, '}');
                obj._iN$t = {
                  globalVar: 'R'
                };
                this.objsToClear_iN$t.push(obj);
                this.enumerateObject(this.codeArray, obj);
                let globalVariablesDeclaration;
                if (this.globalVariables.length > 0) {
                  globalVariablesDeclaration = `${VAR + this.globalVariables.join(',')};`;
                }
                const code = flattenCodeArray(['return (function(R){', globalVariablesDeclaration || [], this.codeArray, 'return o;', '})']);
                this.result = Function('O', 'F', code)(this.objs, this.funcs);
                for (let i = 0, len = this.objsToClear_iN$t.length; i < len; ++i) {
                  this.objsToClear_iN$t[i]._iN$t = null;
                }
                this.objsToClear_iN$t.length = 0;
              }
              getFuncModule(func, usedInNew) {
                const clsName = getClassName(func);
                if (clsName) {
                  const cache = this.funcModuleCache[clsName];
                  if (cache) {
                    return cache;
                  } else if (cache === undefined) {
                    let clsNameIsModule = clsName.indexOf('.') !== -1;
                    if (clsNameIsModule) {
                      try {
                        clsNameIsModule = func === Function(`return ${clsName}`)();
                        if (clsNameIsModule) {
                          this.funcModuleCache[clsName] = clsName;
                          return clsName;
                        }
                      } catch (e) {}
                    }
                  }
                }
                let index = this.funcs.indexOf(func);
                if (index < 0) {
                  index = this.funcs.length;
                  this.funcs.push(func);
                }
                let res = `F[${index}]`;
                if (usedInNew) {
                  res = `(${res})`;
                }
                this.funcModuleCache[clsName] = res;
                return res;
              }
              getObjRef(obj) {
                let index = this.objs.indexOf(obj);
                if (index < 0) {
                  index = this.objs.length;
                  this.objs.push(obj);
                }
                return `O[${index}]`;
              }
              setValueType(codeArray, defaultValue, srcValue, targetExpression) {
                const assignments = Assignments.pool.get(targetExpression);
                let fastDefinedProps = defaultValue.constructor.__props__;
                if (!fastDefinedProps) {
                  fastDefinedProps = Object.keys(defaultValue);
                }
                for (let i = 0; i < fastDefinedProps.length; i++) {
                  const propName = fastDefinedProps[i];
                  const prop = srcValue[propName];
                  if (defaultValue[propName] === prop) {
                    continue;
                  }
                  const expression = this.enumerateField(srcValue, propName, prop);
                  assignments.append(propName, expression);
                }
                assignments.writeCode(codeArray);
                Assignments.pool.put(assignments);
              }
              enumerateCCClass(codeArray, obj, klass) {
                const props = klass.__values__;
                const attrs = CCClass.Attr.getClassAttrs(klass);
                for (let p = 0; p < props.length; p++) {
                  const key = props[p];
                  const val = obj[key];
                  let defaultValue = attrs[key + DEFAULT];
                  if (equalsToDefault(defaultValue, val)) {
                    continue;
                  }
                  if (typeof val === 'object' && val instanceof legacyCC.ValueType) {
                    defaultValue = CCClass.getDefault(defaultValue);
                    if (defaultValue && defaultValue.constructor === val.constructor) {
                      const targetExpression = LOCAL_OBJ + getPropAccessor(key);
                      this.setValueType(codeArray, defaultValue, val, targetExpression);
                      continue;
                    }
                  }
                  this.setObjProp(codeArray, obj, key, val);
                }
              }
              instantiateArray(value) {
                if (value.length === 0) {
                  return '[]';
                }
                const arrayVar = LOCAL_ARRAY + ++this.localVariableId;
                const declaration = new Declaration(arrayVar, `new Array(${value.length})`);
                const codeArray = [declaration];
                value._iN$t = {
                  globalVar: '',
                  source: codeArray
                };
                this.objsToClear_iN$t.push(value);
                for (let i = 0; i < value.length; ++i) {
                  const statement = `${arrayVar}[${i}]=`;
                  const expression = this.enumerateField(value, i, value[i]);
                  writeAssignment(codeArray, statement, expression);
                }
                return codeArray;
              }
              instantiateTypedArray(value) {
                const type = value.constructor.name;
                if (value.length === 0) {
                  return `new ${type}`;
                }
                const arrayVar = LOCAL_ARRAY + ++this.localVariableId;
                const declaration = new Declaration(arrayVar, `new ${type}(${value.length})`);
                const codeArray = [declaration];
                value._iN$t = {
                  globalVar: '',
                  source: codeArray
                };
                this.objsToClear_iN$t.push(value);
                for (let i = 0; i < value.length; ++i) {
                  if (value[i] !== 0) {
                    const statement = `${arrayVar}[${i}]=`;
                    writeAssignment(codeArray, statement, value[i]);
                  }
                }
                return codeArray;
              }
              enumerateField(obj, key, value) {
                if (typeof value === 'object' && value) {
                  const _iN$t = value._iN$t;
                  if (_iN$t) {
                    let globalVar = _iN$t.globalVar;
                    if (!globalVar) {
                      globalVar = _iN$t.globalVar = `v${++this.globalVariableId}`;
                      this.globalVariables.push(globalVar);
                      const line = _iN$t.source[LINE_INDEX_OF_NEW_OBJ];
                      _iN$t.source[LINE_INDEX_OF_NEW_OBJ] = mergeDeclaration(`${globalVar}=`, line);
                    }
                    return globalVar;
                  } else if (ArrayBuffer.isView(value)) {
                    return this.instantiateTypedArray(value);
                  } else if (Array.isArray(value)) {
                    return this.instantiateArray(value);
                  } else {
                    return this.instantiateObj(value);
                  }
                } else if (typeof value === 'function') {
                  return this.getFuncModule(value);
                } else if (typeof value === 'string') {
                  return escapeForJS(value);
                } else {
                  if (key === '_objFlags' && isCCObject(obj)) {
                    value &= PersistentMask;
                  }
                  return value;
                }
              }
              setObjProp(codeArray, obj, key, value) {
                const statement = `${LOCAL_OBJ + getPropAccessor(key)}=`;
                const expression = this.enumerateField(obj, key, value);
                writeAssignment(codeArray, statement, expression);
              }
              enumerateObject(codeArray, obj) {
                const klass = obj.constructor;
                if (isCCClassOrFastDefined(klass)) {
                  this.enumerateCCClass(codeArray, obj, klass);
                } else {
                  for (const key in obj) {
                    if (!obj.hasOwnProperty(key) || key.charCodeAt(0) === 95 && key.charCodeAt(1) === 95 && key !== '__type__') {
                      continue;
                    }
                    const value = obj[key];
                    if (typeof value === 'object' && value && value === obj._iN$t) {
                      continue;
                    }
                    this.setObjProp(codeArray, obj, key, value);
                  }
                }
              }
              instantiateObj(obj) {
                if (obj instanceof legacyCC.ValueType) {
                  return CCClass.getNewValueTypeCode(obj);
                }
                if (obj instanceof legacyCC.Asset) {
                  return this.getObjRef(obj);
                }
                if (obj._objFlags & Destroyed) {
                  return null;
                }
                let createCode;
                const ctor = obj.constructor;
                if (isCCClassOrFastDefined(ctor)) {
                  if (this.parent) {
                    if (this.parent instanceof legacyCC.Component) {
                      if (obj instanceof legacyCC.Node || obj instanceof legacyCC.Component) {
                        return this.getObjRef(obj);
                      }
                    } else if (this.parent instanceof legacyCC.Node) {
                      if (obj instanceof legacyCC.Node) {
                        if (!obj.isChildOf(this.parent)) {
                          return this.getObjRef(obj);
                        }
                      } else if (obj instanceof legacyCC.Component) {
                        var _obj$node;
                        if (!((_obj$node = obj.node) !== null && _obj$node !== void 0 && _obj$node.isChildOf(this.parent))) {
                          return this.getObjRef(obj);
                        }
                      }
                    }
                  }
                  createCode = new Declaration(LOCAL_OBJ, `new ${this.getFuncModule(ctor, true)}()`);
                } else if (ctor === Object) {
                  createCode = new Declaration(LOCAL_OBJ, '{}');
                } else if (!ctor) {
                  createCode = new Declaration(LOCAL_OBJ, 'Object.create(null)');
                } else {
                  return this.getObjRef(obj);
                }
                const codeArray = [createCode];
                obj._iN$t = {
                  globalVar: '',
                  source: codeArray
                };
                this.objsToClear_iN$t.push(obj);
                this.enumerateObject(codeArray, obj);
                return ['(function(){', codeArray, 'return o;})();'];
              }
            }
            function equalsToDefault(def, value) {
              if (typeof def === 'function') {
                try {
                  def = def();
                } catch (e) {
                  return false;
                }
              }
              if (def === value) {
                return true;
              }
              if (def && value && typeof def === 'object' && typeof value === 'object' && def.constructor === value.constructor) {
                if (def instanceof legacyCC.ValueType) {
                  if (def.equals(value)) {
                    return true;
                  }
                } else if (Array.isArray(def)) {
                  return def.length === 0 && value.length === 0;
                } else if (def.constructor === Object) {
                  return isEmptyObject(def) && isEmptyObject(value);
                }
              }
              return false;
            }
            function compile(node) {
              const root = node instanceof legacyCC.Node && node;
              const parser = new Parser$1(node, root);
              return parser.result;
            }

            var _dec, _class, _class2, _initializer, _initializer2, _initializer3, _class3;
            const OptimizationPolicy = Enum({
              AUTO: 0,
              SINGLE_INSTANCE: 1,
              MULTI_INSTANCE: 2
            });
            let Prefab = exports('X', (_dec = ccclass('cc.Prefab'), _dec(_class = (_class2 = (_class3 = class Prefab extends Asset {
              constructor() {
                super();
                this.data = _initializer && _initializer();
                this.optimizationPolicy = _initializer2 && _initializer2();
                this.persistent = _initializer3 && _initializer3();
                this._createFunction = void 0;
                this._instantiatedTimes = void 0;
                this._createFunction = null;
                this._instantiatedTimes = 0;
              }
              createNode(cb) {
                const node = legacyCC.instantiate(this);
                node.name = this.name;
                cb(null, node);
              }
              compileCreateFunction() {
                this._createFunction = compile(this.data);
              }
              _doInstantiate(rootToRedirect) {
                if (!this.data._prefab) {
                  warnID(3700);
                }
                if (!this._createFunction) {
                  this.compileCreateFunction();
                }
                return this._createFunction(rootToRedirect);
              }
              _instantiate() {
                let node;
                let useJit = false;
                {
                  if (this.optimizationPolicy === OptimizationPolicy.SINGLE_INSTANCE) {
                    useJit = false;
                  } else if (this.optimizationPolicy === OptimizationPolicy.MULTI_INSTANCE) {
                    useJit = true;
                  } else {
                    useJit = this._instantiatedTimes + 1 >= Prefab.OptimizationPolicyThreshold;
                  }
                }
                if (useJit) {
                  node = this._doInstantiate();
                  this.data._instantiate(node);
                } else {
                  node = this.data._instantiate();
                }
                ++this._instantiatedTimes;
                return node;
              }
              initDefault(uuid) {
                super.initDefault(uuid);
                this.data = new Node();
                this.data.name = '(Missing Node)';
                const prefabInfo = new legacyCC._PrefabInfo();
                prefabInfo.asset = this;
                prefabInfo.root = this.data;
                this.data._prefab = prefabInfo;
              }
              validate() {
                return !!this.data;
              }
              onLoaded() {
                const rootNode = this.data;
                expandNestedPrefabInstanceNode(rootNode);
                applyTargetOverrides(rootNode);
                {
                  updateChildrenForDeserialize(rootNode);
                }
              }
            }, _class3.OptimizationPolicy = OptimizationPolicy, _class3.OptimizationPolicyThreshold = 3, _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "data", [serializable], function () {
              return null;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "optimizationPolicy", [serializable], function () {
              return OptimizationPolicy.AUTO;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "persistent", [serializable], function () {
              return false;
            })), _class2)) || _class));
            value(Prefab, '_utils', utils);
            legacyCC.Prefab = Prefab;
            {
              obsolete(legacyCC, 'cc._Prefab', 'Prefab');
            }

            const isMatchByWord = (path, test) => {
              if (path.length > test.length) {
                const nextAscii = path.charCodeAt(test.length);
                return nextAscii === 47;
              }
              return true;
            };
            const processOptions = options => {
              let uuids = options.uuids;
              const paths = options.paths;
              const types = options.types;
              const bundles = options.deps;
              const realEntries = options.paths = Object.create(null);
              if (options.debug === false) {
                for (let i = 0, l = uuids.length; i < l; i++) {
                  uuids[i] = decodeUuid(uuids[i]);
                }
                for (const id in paths) {
                  const entry = paths[id];
                  const type = entry[1];
                  entry[1] = types[type];
                }
              } else {
                const out = Object.create(null);
                for (let i = 0, l = uuids.length; i < l; i++) {
                  const uuid = uuids[i];
                  uuids[i] = out[uuid] = decodeUuid(uuid);
                }
                uuids = out;
              }
              for (const id in paths) {
                const entry = paths[id];
                realEntries[uuids[id]] = entry;
              }
              const scenes = options.scenes;
              for (const name in scenes) {
                const uuid = scenes[name];
                scenes[name] = uuids[uuid];
              }
              const packs = options.packs;
              for (const packId in packs) {
                const packedIds = packs[packId];
                for (let j = 0; j < packedIds.length; ++j) {
                  packedIds[j] = uuids[packedIds[j]];
                }
              }
              const versions = options.versions;
              if (versions) {
                for (const folder in versions) {
                  const entries = versions[folder];
                  for (let i = 0; i < entries.length; i += 2) {
                    const uuid = entries[i];
                    entries[i] = uuids[uuid] || uuid;
                  }
                }
              }
              const redirect = options.redirect;
              if (redirect) {
                for (let i = 0; i < redirect.length; i += 2) {
                  redirect[i] = uuids[redirect[i]];
                  redirect[i + 1] = bundles[redirect[i + 1]];
                }
              }
              const extensionMap = options.extensionMap;
              if (extensionMap) {
                for (const ext in options.extensionMap) {
                  if (!Object.prototype.hasOwnProperty.call(options.extensionMap, ext)) {
                    continue;
                  }
                  options.extensionMap[ext].forEach((uuid, index) => {
                    options.extensionMap[ext][index] = uuids[uuid] || uuid;
                  });
                }
              }
            };
            class Config {
              constructor() {
                this.name = '';
                this.base = '';
                this.importBase = '';
                this.nativeBase = '';
                this.deps = null;
                this.assetInfos = new Cache();
                this.scenes = new Cache();
                this.paths = new Cache();
              }
              init(options) {
                processOptions(options);
                this.importBase = options.importBase || '';
                this.nativeBase = options.nativeBase || '';
                this.base = options.base || '';
                this.name = options.name || '';
                this.deps = options.deps || [];
                this._initUuid(options.uuids);
                this._initPath(options.paths);
                this._initScene(options.scenes);
                this._initPackage(options.packs);
                this._initVersion(options.versions);
                this._initRedirect(options.redirect);
                for (const ext in options.extensionMap) {
                  if (!Object.prototype.hasOwnProperty.call(options.extensionMap, ext)) {
                    continue;
                  }
                  options.extensionMap[ext].forEach(uuid => {
                    const assetInfo = this.assetInfos.get(uuid);
                    if (assetInfo) {
                      assetInfo.extension = ext;
                    }
                  });
                }
              }
              getInfoWithPath(path, type) {
                if (!path) {
                  return null;
                }
                path = normalize(path);
                const items = this.paths.get(path);
                if (items) {
                  if (type) {
                    for (let i = 0, l = items.length; i < l; i++) {
                      const assetInfo = items[i];
                      if (isChildClassOf(assetInfo.ctor, type)) {
                        return assetInfo;
                      }
                    }
                  } else {
                    return items[0];
                  }
                }
                return null;
              }
              getDirWithPath(path, type, out) {
                path = normalize(path);
                if (path[path.length - 1] === '/') {
                  path = path.slice(0, -1);
                }
                const infos = out || [];
                this.paths.forEach((items, p) => {
                  if (p.startsWith(path) && isMatchByWord(p, path) || !path) {
                    for (let i = 0, l = items.length; i < l; i++) {
                      const entry = items[i];
                      if (!type || isChildClassOf(entry.ctor, type)) {
                        infos.push(entry);
                      }
                    }
                  }
                });
                return infos;
              }
              getAssetInfo(uuid) {
                return this.assetInfos.get(uuid) || null;
              }
              getSceneInfo(name) {
                if (!name.endsWith('.scene')) {
                  name += '.scene';
                }
                if (name[0] !== '/' && !name.startsWith('db://')) {
                  name = `/${name}`;
                }
                const info = this.scenes.find((val, key) => key.endsWith(name));
                return info;
              }
              destroy() {
                this.paths.destroy();
                this.scenes.destroy();
                this.assetInfos.destroy();
              }
              _initUuid(uuidList) {
                if (!uuidList) {
                  return;
                }
                this.assetInfos.clear();
                for (let i = 0, l = uuidList.length; i < l; i++) {
                  const uuid = uuidList[i];
                  this.assetInfos.add(uuid, {
                    uuid
                  });
                }
              }
              _initPath(pathList) {
                if (!pathList) {
                  return;
                }
                const paths = this.paths;
                paths.clear();
                for (const uuid in pathList) {
                  const info = pathList[uuid];
                  const path = info[0];
                  const type = info[1];
                  const isSubAsset = info.length === 3;
                  const assetInfo = this.assetInfos.get(uuid);
                  assetInfo.path = path;
                  assetInfo.ctor = getClassById(type);
                  if (paths.has(path)) {
                    if (isSubAsset) {
                      paths.get(path).push(assetInfo);
                    } else {
                      paths.get(path).unshift(assetInfo);
                    }
                  } else {
                    paths.add(path, [assetInfo]);
                  }
                }
              }
              _initScene(sceneList) {
                if (!sceneList) {
                  return;
                }
                const scenes = this.scenes;
                scenes.clear();
                const assetInfos = this.assetInfos;
                for (const sceneName in sceneList) {
                  const uuid = sceneList[sceneName];
                  const assetInfo = assetInfos.get(uuid);
                  assetInfo.url = sceneName;
                  scenes.add(sceneName, assetInfo);
                }
              }
              _initPackage(packageList) {
                if (!packageList) {
                  return;
                }
                const assetInfos = this.assetInfos;
                for (const packUuid in packageList) {
                  const uuids = packageList[packUuid];
                  const pack = {
                    uuid: packUuid,
                    packedUuids: uuids,
                    ext: '.json'
                  };
                  assetInfos.add(packUuid, pack);
                  for (let i = 0, l = uuids.length; i < l; i++) {
                    const uuid = uuids[i];
                    const assetInfo = assetInfos.get(uuid);
                    const assetPacks = assetInfo.packs;
                    if (assetPacks) {
                      if (l === 1) {
                        assetPacks.unshift(pack);
                      } else {
                        assetPacks.push(pack);
                      }
                    } else {
                      assetInfo.packs = [pack];
                    }
                  }
                }
              }
              _initVersion(versions) {
                if (!versions) {
                  return;
                }
                const assetInfos = this.assetInfos;
                let entries = versions.import;
                if (entries) {
                  for (let i = 0, l = entries.length; i < l; i += 2) {
                    const uuid = entries[i];
                    const assetInfo = assetInfos.get(uuid);
                    assetInfo.ver = entries[i + 1];
                  }
                }
                entries = versions.native;
                if (entries) {
                  for (let i = 0, l = entries.length; i < l; i += 2) {
                    const uuid = entries[i];
                    const assetInfo = assetInfos.get(uuid);
                    assetInfo.nativeVer = entries[i + 1];
                  }
                }
              }
              _initRedirect(redirect) {
                if (!redirect) {
                  return;
                }
                const assetInfos = this.assetInfos;
                for (let i = 0, l = redirect.length; i < l; i += 2) {
                  const uuid = redirect[i];
                  const assetInfo = assetInfos.get(uuid);
                  assetInfo.redirect = redirect[i + 1];
                }
              }
            }

            function visitAsset(asset, deps) {
              if (!asset._uuid) {
                return;
              }
              deps.push(asset._uuid);
            }
            function visitComponent(comp, deps) {
              const props = Object.getOwnPropertyNames(comp);
              for (let i = 0; i < props.length; i++) {
                const propName = props[i];
                if (propName === 'node' || propName === '__eventTargets') {
                  continue;
                }
                const value = comp[propName];
                if (typeof value === 'object' && value) {
                  if (Array.isArray(value)) {
                    for (let j = 0; j < value.length; j++) {
                      const val = value[j];
                      if (val instanceof Asset) {
                        visitAsset(val, deps);
                      }
                    }
                  } else if (!value.constructor || value.constructor === Object) {
                    const keys = Object.getOwnPropertyNames(value);
                    for (let j = 0; j < keys.length; j++) {
                      const val = value[keys[j]];
                      if (val instanceof Asset) {
                        visitAsset(val, deps);
                      }
                    }
                  } else if (value instanceof Asset) {
                    visitAsset(value, deps);
                  }
                }
              }
            }
            function visitNode(node, deps) {
              for (let i = 0; i < node._components.length; i++) {
                visitComponent(node._components[i], deps);
              }
              for (let i = 0; i < node._children.length; i++) {
                visitNode(node._children[i], deps);
              }
            }
            function descendOpRef(asset, refs, exclude, op) {
              exclude.push(asset._uuid);
              const depends = dependUtil.getDeps(asset._uuid);
              for (let i = 0, l = depends.length; i < l; i++) {
                const dependAsset = assets.get(depends[i]);
                if (!dependAsset) {
                  continue;
                }
                const uuid = dependAsset._uuid;
                if (!(uuid in refs)) {
                  refs[uuid] = dependAsset.refCount + op;
                } else {
                  refs[uuid] += op;
                }
                if (exclude.includes(uuid)) {
                  continue;
                }
                descendOpRef(dependAsset, refs, exclude, op);
              }
            }
            const _temp = [];
            function checkCircularReference(asset) {
              const refs = Object.create(null);
              refs[asset._uuid] = asset.refCount;
              descendOpRef(asset, refs, _temp, -1);
              _temp.length = 0;
              if (refs[asset._uuid] !== 0) {
                return refs[asset._uuid];
              }
              for (const uuid in refs) {
                if (refs[uuid] !== 0) {
                  descendOpRef(assets.get(uuid), refs, _temp, 1);
                }
              }
              _temp.length = 0;
              return refs[asset._uuid];
            }
            class ReleaseManager {
              constructor() {
                this._persistNodeDeps = new Cache();
                this._toDelete = new Cache();
                this._eventListener = false;
                this._dontDestroyAssets = [];
              }
              addIgnoredAsset(asset) {
                this._dontDestroyAssets.push(asset._uuid);
              }
              init() {
                this._persistNodeDeps.clear();
                this._toDelete.clear();
              }
              _addPersistNodeRef(node) {
                const deps = [];
                visitNode(node, deps);
                for (let i = 0, l = deps.length; i < l; i++) {
                  const dependAsset = assets.get(deps[i]);
                  if (dependAsset) {
                    dependAsset.addRef();
                  }
                }
                this._persistNodeDeps.add(node.uuid, deps);
              }
              _removePersistNodeRef(node) {
                if (!this._persistNodeDeps.has(node.uuid)) {
                  return;
                }
                const deps = this._persistNodeDeps.get(node.uuid);
                for (let i = 0, l = deps.length; i < l; i++) {
                  const dependAsset = assets.get(deps[i]);
                  if (dependAsset) {
                    dependAsset.decRef();
                  }
                }
                this._persistNodeDeps.remove(node.uuid);
              }
              _autoRelease(oldScene, newScene, persistNodes) {
                if (oldScene) {
                  const childs = dependUtil.getDeps(oldScene.uuid);
                  for (let i = 0, l = childs.length; i < l; i++) {
                    const asset = assets.get(childs[i]);
                    if (asset) {
                      asset.decRef(oldScene.autoReleaseAssets);
                    }
                  }
                  const dependencies = dependUtil._depends.get(oldScene.uuid);
                  if (dependencies && dependencies.persistDeps) {
                    const persistDeps = dependencies.persistDeps;
                    for (let i = 0, l = persistDeps.length; i < l; i++) {
                      const asset = assets.get(persistDeps[i]);
                      if (asset) {
                        asset.decRef(oldScene.autoReleaseAssets);
                      }
                    }
                  }
                  if (oldScene.uuid !== newScene.uuid) {
                    dependUtil.remove(oldScene.uuid);
                  }
                }
                const sceneDeps = dependUtil._depends.get(newScene.uuid);
                if (sceneDeps) {
                  sceneDeps.persistDeps = [];
                }
                for (const key in persistNodes) {
                  const node = persistNodes[key];
                  const deps = this._persistNodeDeps.get(node.uuid);
                  for (const dep of deps) {
                    const dependAsset = assets.get(dep);
                    if (dependAsset) {
                      dependAsset.addRef();
                    }
                  }
                  if (!sceneDeps) {
                    continue;
                  }
                  sceneDeps.persistDeps.push(...deps);
                }
              }
              tryRelease(asset, force = false) {
                if (!(asset instanceof Asset)) {
                  return;
                }
                if (force) {
                  this._free(asset, force);
                  return;
                }
                this._toDelete.add(asset._uuid, asset);
                if (!this._eventListener) {
                  this._eventListener = true;
                  callInNextTick(this._freeAssets.bind(this));
                }
              }
              _freeAssets() {
                this._eventListener = false;
                this._toDelete.forEach(asset => {
                  this._free(asset);
                });
                this._toDelete.clear();
              }
              _free(asset, force = false) {
                const uuid = asset._uuid;
                this._toDelete.remove(uuid);
                if (!isValid(asset, true) || this._dontDestroyAssets.indexOf(uuid) !== -1) {
                  return;
                }
                if (!force) {
                  if (asset.refCount > 0) {
                    if (checkCircularReference(asset) > 0) {
                      return;
                    }
                  }
                }
                assets.remove(uuid);
                const depends = dependUtil.getDeps(uuid);
                for (let i = 0, l = depends.length; i < l; i++) {
                  const dependAsset = assets.get(depends[i]);
                  if (dependAsset) {
                    dependAsset.decRef(false);
                    {
                      this._free(dependAsset, false);
                    }
                  }
                }
                {
                  asset.destroy();
                }
                dependUtil.remove(uuid);
              }
            }
            const releaseManager = exports('aE', new ReleaseManager());

            let defaultProgressCallback = null;
            function setDefaultProgressCallback(onProgress) {
              defaultProgressCallback = onProgress;
            }
            function clear(task, clearRef) {
              for (let i = 0, l = task.input.length; i < l; i++) {
                const item = task.input[i];
                if (clearRef) {
                  if (!item.isNative && item.content instanceof Asset) {
                    item.content.decRef(false);
                  }
                }
                item.recycle();
              }
              task.input = null;
            }
            function urlAppendTimestamp(url, append) {
              if (append) {
                if (/\?/.test(url)) {
                  return `${url}&_t=${Date.now()}`;
                }
                return `${url}?_t=${Date.now()}`;
              }
              return url;
            }
            function retry(process, times, wait, onComplete, index = 0) {
              process(index, (err, result) => {
                index++;
                if (!err || index > times) {
                  if (onComplete) {
                    onComplete(err, result);
                  }
                } else {
                  setTimeout(() => {
                    retry(process, times, wait, onComplete, index);
                  }, wait);
                }
              });
            }
            function getDepends(uuid, data, exclude, depends, config) {
              try {
                const info = dependUtil.parse(uuid, data);
                for (let i = 0, l = info.deps.length; i < l; i++) {
                  const dep = info.deps[i];
                  if (!(dep in exclude)) {
                    exclude[dep] = true;
                    depends.push({
                      uuid: dep,
                      bundle: config && config.name
                    });
                  }
                }
                if (info.nativeDep) {
                  if (config) {
                    info.nativeDep.bundle = config.name;
                  }
                  depends.push({
                    ...info.nativeDep
                  });
                }
              } catch (e) {
                error(e.message, e.stack);
              }
            }
            function cache(id, asset, cacheAsset) {
              if (!asset) {
                return;
              }
              cacheAsset = cacheAsset !== undefined ? cacheAsset : legacyCC.assetManager.cacheAsset;
              if (!isScene(asset) && cacheAsset && !asset.isDefault) {
                assets.add(id, asset);
              }
            }
            function setProperties(uuid, asset, assetsMap) {
              let missingAsset = false;
              const depends = dependMap.get(asset);
              if (depends) {
                for (let i = 0, l = depends.length; i < l; i++) {
                  const depend = depends[i];
                  const dependAsset = assetsMap[`${depend.uuid}@import`];
                  if (!dependAsset) {
                    {
                      error(`The asset ${depend.uuid} is missing!`);
                    }
                    legacyCC.assetManager.dispatchAssetMissing(asset, depend.owner, depend.prop, depend.uuid);
                    if (depend.type && depend.type !== Asset) {
                      const placeHolder = new depend.type();
                      placeHolder.initDefault(depend.uuid);
                      depend.owner[depend.prop] = placeHolder;
                    }
                    missingAsset = true;
                  } else {
                    depend.owner[depend.prop] = dependAsset.addRef();
                  }
                }
                dependMap.delete(asset);
              }
              if (nativeDependMap.has(asset)) {
                if (assetsMap[`${uuid}@native`]) {
                  asset._nativeAsset = assetsMap[`${uuid}@native`];
                } else {
                  missingAsset = true;
                  console.error(`the native asset of ${uuid} is missing!`);
                }
                nativeDependMap.delete(asset);
              }
              return missingAsset;
            }
            function gatherAsset(task) {
              const source = task.source;
              if (!task.options.__outputAsArray__ && source.length === 1) {
                task.output = source[0].content;
              } else {
                const output = task.output = [];
                for (let i = 0, l = source.length; i < l; i++) {
                  output.push(source[i].content);
                }
              }
            }
            function forEach(array, process, onComplete) {
              let count = 0;
              const errs = [];
              const length = array.length;
              if (length === 0 && onComplete) {
                onComplete(errs);
              }
              const cb = err => {
                if (err) {
                  errs.push(err);
                }
                count++;
                if (count === length) {
                  if (onComplete) {
                    onComplete(errs);
                  }
                }
              };
              for (let i = 0; i < length; i++) {
                process(array[i], cb);
              }
            }
            function parseParameters(options, onProgress, onComplete) {
              let optionsOut = options;
              let onProgressOut = onProgress;
              let onCompleteOut = onComplete;
              if (onComplete === undefined) {
                const isCallback = typeof options === 'function';
                if (onProgress) {
                  onCompleteOut = onProgress;
                  if (!isCallback) {
                    onProgressOut = null;
                  }
                } else if (onProgress === undefined && isCallback) {
                  onCompleteOut = options;
                  optionsOut = null;
                  onProgressOut = null;
                }
                if (onProgress !== undefined && isCallback) {
                  onProgressOut = options;
                  optionsOut = null;
                }
              }
              return {
                options: optionsOut || Object.create(null),
                onProgress: onProgressOut,
                onComplete: onCompleteOut
              };
            }
            function parseLoadResArgs(type, onProgress, onComplete) {
              let typeOut = type;
              let onProgressOut = onProgress;
              let onCompleteOut = onComplete;
              if (onComplete === undefined) {
                const isValidType = isChildClassOf(type, Asset);
                if (onProgress) {
                  onCompleteOut = onProgress;
                  if (isValidType) {
                    onProgressOut = null;
                  }
                } else if (onProgress === undefined && !isValidType) {
                  onCompleteOut = type;
                  onProgressOut = null;
                  typeOut = null;
                }
                if (onProgress !== undefined && !isValidType) {
                  onProgressOut = type;
                  typeOut = null;
                }
              }
              return {
                type: typeOut,
                onProgress: onProgressOut || defaultProgressCallback,
                onComplete: onCompleteOut
              };
            }
            function checkCircleReference(owner, uuid, map, checked = {}) {
              const item = map[uuid];
              if (!item || checked[uuid]) {
                return false;
              }
              checked[uuid] = true;
              let result = false;
              const deps = dependUtil.getDeps(uuid);
              if (deps) {
                for (let i = 0, l = deps.length; i < l; i++) {
                  const dep = deps[i];
                  if (dep === owner || checkCircleReference(owner, dep, map, checked)) {
                    result = true;
                    break;
                  }
                }
              }
              return result;
            }
            function asyncify(cb) {
              return (p1, p2) => {
                if (!cb) {
                  return;
                }
                const refs = [];
                if (Array.isArray(p2)) {
                  p2.forEach(x => x instanceof Asset && refs.push(x.addRef()));
                } else if (p2 instanceof Asset) {
                  refs.push(p2.addRef());
                }
                callInNextTick(() => {
                  refs.forEach(x => x.decRef(false));
                  cb(p1, p2);
                });
              };
            }

            class Bundle {
              constructor() {
                this._config = new Config();
              }
              get config() {
                return this._config;
              }
              get name() {
                return this._config.name;
              }
              get deps() {
                return this._config.deps;
              }
              get base() {
                return this._config.base;
              }
              getInfoWithPath(path, type) {
                return this._config.getInfoWithPath(path, type);
              }
              getDirWithPath(path, type, out) {
                return this._config.getDirWithPath(path, type, out);
              }
              getAssetInfo(uuid) {
                return this._config.getAssetInfo(uuid);
              }
              getSceneInfo(name) {
                return this._config.getSceneInfo(name);
              }
              init(options) {
                this._config.init(options);
                bundles.add(options.name, this);
              }
              load(paths, type, onProgress, onComplete) {
                const {
                  type: _type,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseLoadResArgs(type, onProgress, onComplete);
                const options = {
                  __requestType__: RequestType.PATH,
                  type: _type,
                  bundle: this.name,
                  __outputAsArray__: Array.isArray(paths)
                };
                legacyCC.assetManager.loadAny(paths, options, onProg, onComp);
              }
              preload(paths, type, onProgress, onComplete) {
                const {
                  type: _type,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseLoadResArgs(type, onProgress, onComplete);
                legacyCC.assetManager.preloadAny(paths, {
                  __requestType__: RequestType.PATH,
                  type: _type,
                  bundle: this.name
                }, onProg, onComp);
              }
              loadDir(dir, type, onProgress, onComplete) {
                const {
                  type: _type,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseLoadResArgs(type, onProgress, onComplete);
                legacyCC.assetManager.loadAny(dir, {
                  __requestType__: RequestType.DIR,
                  type: _type,
                  bundle: this.name,
                  __outputAsArray__: true
                }, onProg, onComp);
              }
              preloadDir(dir, type, onProgress, onComplete) {
                const {
                  type: _type,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseLoadResArgs(type, onProgress, onComplete);
                legacyCC.assetManager.preloadAny(dir, {
                  __requestType__: RequestType.DIR,
                  type: _type,
                  bundle: this.name
                }, onProg, onComp);
              }
              loadScene(sceneName, options, onProgress, onComplete) {
                const {
                  options: opts,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseParameters(options, onProgress, onComplete);
                opts.preset = opts.preset || 'scene';
                opts.bundle = this.name;
                legacyCC.assetManager.loadAny({
                  scene: sceneName
                }, opts, onProg, (err, sceneAsset) => {
                  if (err) {
                    error(err.message, err.stack);
                  } else if (sceneAsset.scene) {
                    const scene = sceneAsset.scene;
                    scene._id = sceneAsset._uuid;
                    scene.name = sceneAsset.name;
                  } else {
                    err = new Error(`The asset ${sceneAsset._uuid} is not a scene`);
                  }
                  if (onComp) {
                    onComp(err, sceneAsset);
                  }
                });
              }
              preloadScene(sceneName, options, onProgress, onComplete) {
                const {
                  options: opts,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseParameters(options, onProgress, onComplete);
                opts.bundle = this.name;
                legacyCC.assetManager.preloadAny({
                  scene: sceneName
                }, opts, onProg, err => {
                  if (err) {
                    errorID(1210, sceneName, err.message);
                  }
                  if (onComp) {
                    onComp(err);
                  }
                });
              }
              get(path, type) {
                const info = this.getInfoWithPath(path, type);
                if (info) {
                  return assets.get(info.uuid) || null;
                }
                return null;
              }
              release(path, type) {
                const asset = this.get(path, type);
                if (asset) {
                  releaseManager.tryRelease(asset, true);
                }
              }
              releaseUnusedAssets() {
                assets.forEach(asset => {
                  const info = this.getAssetInfo(asset._uuid);
                  if (info && !info.redirect) {
                    releaseManager.tryRelease(asset);
                  }
                });
              }
              releaseAll() {
                assets.forEach(asset => {
                  const info = this.getAssetInfo(asset._uuid);
                  if (info && !info.redirect) {
                    releaseManager.tryRelease(asset, true);
                  }
                });
              }
              _destroy() {
                this._config.destroy();
              }
            }
            const resources = exports('as', new Bundle());
            legacyCC.resources = resources;

            class CacheManager {
              constructor() {
                this.cacheDir = void 0;
                this.cacheEnabled = void 0;
                this.autoClear = void 0;
                this.cacheInterval = void 0;
                this.deleteInterval = void 0;
                this.cachedFiles = void 0;
              }
            }

            function downloadDomImage(url, options, onComplete) {
              const img = new ccwindow.Image();
              if (ccwindow.location.protocol !== 'file:' || XIAOMI) {
                img.crossOrigin = 'anonymous';
              }
              function loadCallback() {
                img.removeEventListener('load', loadCallback);
                img.removeEventListener('error', errorCallback);
                if (onComplete) {
                  onComplete(null, img);
                }
              }
              function errorCallback() {
                img.removeEventListener('load', loadCallback);
                img.removeEventListener('error', errorCallback);
                if (onComplete) {
                  onComplete(new Error(getError(4930, url)));
                }
              }
              img.addEventListener('load', loadCallback);
              img.addEventListener('error', errorCallback);
              img.src = url;
              return img;
            }

            function downloadFile(url, options, onProgress, onComplete) {
              const xhr = new XMLHttpRequest();
              const errInfo = `download failed: ${url}, status: `;
              xhr.open('GET', url, true);
              if (options.xhrResponseType !== undefined) {
                xhr.responseType = options.xhrResponseType;
              }
              if (options.xhrWithCredentials !== undefined) {
                xhr.withCredentials = options.xhrWithCredentials;
              }
              if (options.xhrMimeType !== undefined && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.xhrMimeType);
              }
              if (options.xhrTimeout !== undefined) {
                xhr.timeout = options.xhrTimeout;
              }
              if (options.xhrHeader) {
                for (const header in options.xhrHeader) {
                  xhr.setRequestHeader(header, options.xhrHeader[header]);
                }
              }
              xhr.onload = () => {
                if (xhr.status === 200 || xhr.status === 0) {
                  if (onComplete) {
                    onComplete(null, xhr.response);
                  }
                } else if (onComplete) {
                  onComplete(new Error(`${errInfo}${xhr.status}(no response)`));
                }
              };
              if (onProgress) {
                xhr.onprogress = e => {
                  if (e.lengthComputable) {
                    onProgress(e.loaded, e.total);
                  }
                };
              }
              xhr.onerror = () => {
                if (onComplete) {
                  onComplete(new Error(`${errInfo}${xhr.status}(error)`));
                }
              };
              xhr.ontimeout = () => {
                if (onComplete) {
                  onComplete(new Error(`${errInfo}${xhr.status}(time out)`));
                }
              };
              xhr.onabort = () => {
                if (onComplete) {
                  onComplete(new Error(`${errInfo}${xhr.status}(abort)`));
                }
              };
              xhr.send(null);
              return xhr;
            }

            const ccdocument = ccwindow.document;
            const downloaded = {};
            function downloadScript(url, options, onComplete) {
              if (downloaded[url]) {
                if (onComplete) {
                  onComplete(null);
                }
                return null;
              }
              const script = ccdocument.createElement('script');
              if (ccwindow.location.protocol !== 'file:') {
                script.crossOrigin = 'anonymous';
              }
              script.async = options.scriptAsyncLoading || false;
              script.src = url;
              function loadHandler() {
                script.parentNode.removeChild(script);
                script.removeEventListener('load', loadHandler, false);
                script.removeEventListener('error', errorHandler, false);
                downloaded[url] = true;
                if (onComplete) {
                  onComplete(null);
                }
              }
              function errorHandler() {
                script.parentNode.removeChild(script);
                script.removeEventListener('load', loadHandler, false);
                script.removeEventListener('error', errorHandler, false);
                if (onComplete) {
                  onComplete(new Error(getError(4928, url)));
                }
              }
              script.addEventListener('load', loadHandler, false);
              script.addEventListener('error', errorHandler, false);
              ccdocument.body.appendChild(script);
              return script;
            }

            const REGEX = /^(?:\w+:\/\/|\.+\/).+/;
            const downloadImage = (url, options, onComplete) => {
              const func = sys.hasFeature(sys.Feature.IMAGE_BITMAP) && legacyCC.assetManager.allowImageBitmap ? downloadBlob : downloadDomImage;
              func(url, options, onComplete);
            };
            const downloadBlob = (url, options, onComplete) => {
              options.xhrResponseType = 'blob';
              downloadFile(url, options, options.onFileProgress, onComplete);
            };
            const downloadJson = (url, options, onComplete) => {
              options.xhrResponseType = 'json';
              downloadFile(url, options, options.onFileProgress, onComplete);
            };
            const downloadArrayBuffer = (url, options, onComplete) => {
              options.xhrResponseType = 'arraybuffer';
              downloadFile(url, options, options.onFileProgress, onComplete);
            };
            const downloadCCON = (url, options, onComplete) => {
              downloader._downloadJson(url, options, (err, json) => {
                if (err) {
                  onComplete(err);
                  return;
                }
                const cconPreface = parseCCONJson(json);
                const chunkPromises = Promise.all(cconPreface.chunks.map(chunk => new Promise((resolve, reject) => {
                  downloader._downloadArrayBuffer(`${mainFileName(url)}${chunk}`, {}, (errChunk, chunkBuffer) => {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(new Uint8Array(chunkBuffer));
                    }
                  });
                })));
                chunkPromises.then(chunks => {
                  const ccon = new CCON(cconPreface.document, chunks);
                  onComplete(null, ccon);
                }).catch(err => {
                  onComplete(err);
                });
              });
            };
            const downloadCCONB = (url, options, onComplete) => {
              downloader._downloadArrayBuffer(url, options, (err, arrayBuffer) => {
                if (err) {
                  onComplete(err);
                  return;
                }
                try {
                  const ccon = decodeCCONBinary(new Uint8Array(arrayBuffer));
                  onComplete(null, ccon);
                } catch (err) {
                  onComplete(err);
                }
              });
            };
            const downloadText = (url, options, onComplete) => {
              options.xhrResponseType = 'text';
              downloadFile(url, options, options.onFileProgress, onComplete);
            };
            const downloadBundle = (nameOrUrl, options, onComplete) => {
              const bundleName = basename(nameOrUrl);
              let url = nameOrUrl;
              if (!REGEX.test(url)) {
                if (downloader.remoteBundles.indexOf(bundleName) !== -1) {
                  url = `${downloader.remoteServerAddress}remote/${bundleName}`;
                } else {
                  url = `assets/${bundleName}`;
                }
              }
              const version = options.version || downloader.bundleVers[bundleName];
              let count = 0;
              const config = `${url}/config.${version ? `${version}.` : ''}json`;
              let out = null;
              let error = null;
              downloadJson(config, options, (err, response) => {
                error = err || error;
                out = response;
                if (out) {
                  out.base = `${url}/`;
                }
                if (++count === 2) {
                  onComplete(error, out);
                }
              });
              const jspath = `${url}/index.${version ? `${version}.` : ''}js`;
              downloadScript(jspath, options, err => {
                error = err || error;
                if (++count === 2) {
                  onComplete(error, out);
                }
              });
            };
            class Downloader {
              static get instance() {
                if (!Downloader._instance) {
                  Downloader._instance = new Downloader();
                }
                return Downloader._instance;
              }
              get remoteServerAddress() {
                return this._remoteServerAddress;
              }
              init(remoteServerAddress = '', bundleVers = {}, remoteBundles = []) {
                this._downloading.clear();
                this._queue.length = 0;
                this._remoteServerAddress = remoteServerAddress;
                this.bundleVers = bundleVers;
                this.remoteBundles = remoteBundles;
              }
              register(type, handler) {
                if (typeof type === 'object') {
                  mixin(this._downloaders, type);
                } else {
                  this._downloaders[type] = handler;
                }
              }
              download(id, url, type, options, onComplete) {
                const file = files.get(id);
                if (file) {
                  onComplete(null, file);
                  return;
                }
                const downloadCallbacks = this._downloading.get(id);
                if (downloadCallbacks) {
                  downloadCallbacks.push(onComplete);
                  const request = this._queue.find(x => x.id === id);
                  if (!request) {
                    return;
                  }
                  const priority = options.priority || 0;
                  if (request.priority < priority) {
                    request.priority = priority;
                    this._queueDirty = true;
                  }
                  return;
                }
                const maxRetryCount = typeof options.maxRetryCount !== 'undefined' ? options.maxRetryCount : this.maxRetryCount;
                const maxConcurrency = typeof options.maxConcurrency !== 'undefined' ? options.maxConcurrency : this.maxConcurrency;
                const maxRequestsPerFrame = typeof options.maxRequestsPerFrame !== 'undefined' ? options.maxRequestsPerFrame : this.maxRequestsPerFrame;
                const handler = this._downloaders[type] || this._downloaders.default;
                const process = (index, callback) => {
                  if (index === 0) {
                    this._downloading.add(id, [onComplete]);
                  }
                  if (!this.limited) {
                    handler(urlAppendTimestamp(url, this.appendTimeStamp), options, callback);
                    return;
                  }
                  this._updateTime();
                  const done = (err, data) => {
                    this._totalNum--;
                    this._handleQueueInNextFrame(maxConcurrency, maxRequestsPerFrame);
                    callback(err, data);
                  };
                  if (this._totalNum < maxConcurrency && this._totalNumThisPeriod < maxRequestsPerFrame) {
                    handler(urlAppendTimestamp(url, this.appendTimeStamp), options, done);
                    this._totalNum++;
                    this._totalNumThisPeriod++;
                  } else {
                    this._queue.push({
                      id,
                      priority: options.priority || 0,
                      url,
                      options,
                      done,
                      handler
                    });
                    this._queueDirty = true;
                    if (this._totalNum < maxConcurrency) {
                      this._handleQueueInNextFrame(maxConcurrency, maxRequestsPerFrame);
                    }
                  }
                };
                const finale = (err, result) => {
                  if (!err) {
                    files.add(id, result);
                  }
                  const callbacks = this._downloading.remove(id);
                  for (let i = 0, l = callbacks.length; i < l; i++) {
                    callbacks[i](err, result);
                  }
                };
                retry(process, maxRetryCount, this.retryInterval, finale);
              }
              loadSubpackage(name, completeCallback) {
                legacyCC.assetManager.loadBundle(name, null, completeCallback);
              }
              constructor() {
                this.maxConcurrency = 15;
                this.maxRequestsPerFrame = 15;
                this.maxRetryCount = 0;
                this.appendTimeStamp = !!EDITOR_NOT_IN_PREVIEW;
                this.limited = !EDITOR;
                this.retryInterval = 2000;
                this.bundleVers = {};
                this.remoteBundles = [];
                this.downloadDomImage = downloadDomImage;
                this.downloadDomAudio = null;
                this.downloadFile = downloadFile;
                this.downloadScript = downloadScript;
                this._downloadArrayBuffer = downloadArrayBuffer;
                this._downloadJson = downloadJson;
                this._downloaders = {
                  '.png': downloadImage,
                  '.jpg': downloadImage,
                  '.bmp': downloadImage,
                  '.jpeg': downloadImage,
                  '.gif': downloadImage,
                  '.ico': downloadImage,
                  '.tiff': downloadImage,
                  '.webp': downloadImage,
                  '.image': downloadImage,
                  '.pvr': downloadArrayBuffer,
                  '.pkm': downloadArrayBuffer,
                  '.astc': downloadArrayBuffer,
                  '.txt': downloadText,
                  '.xml': downloadText,
                  '.vsh': downloadText,
                  '.fsh': downloadText,
                  '.atlas': downloadText,
                  '.tmx': downloadText,
                  '.tsx': downloadText,
                  '.json': downloadJson,
                  '.ExportJson': downloadJson,
                  '.plist': downloadText,
                  '.ccon': downloadCCON,
                  '.cconb': downloadCCONB,
                  '.fnt': downloadText,
                  '.binary': downloadArrayBuffer,
                  '.bin': downloadArrayBuffer,
                  '.dbbin': downloadArrayBuffer,
                  '.skel': downloadArrayBuffer,
                  '.js': downloadScript,
                  bundle: downloadBundle,
                  default: downloadText
                };
                this._downloading = new Cache();
                this._queue = [];
                this._queueDirty = false;
                this._totalNum = 0;
                this._totalNumThisPeriod = 0;
                this._lastDate = -1;
                this._checkNextPeriod = false;
                this._remoteServerAddress = '';
                this._maxInterval = 1 / 30;
              }
              _updateTime() {
                const now = performance.now();
                const deltaTime = legacyCC.game.deltaTime;
                const interval = deltaTime > this._maxInterval ? this._maxInterval : deltaTime;
                if (now - this._lastDate > interval * 1000) {
                  this._totalNumThisPeriod = 0;
                  this._lastDate = now;
                }
              }
              _handleQueue(maxConcurrency, maxRequestsPerFrame) {
                this._checkNextPeriod = false;
                this._updateTime();
                while (this._queue.length > 0 && this._totalNum < maxConcurrency && this._totalNumThisPeriod < maxRequestsPerFrame) {
                  if (this._queueDirty) {
                    this._queue.sort((a, b) => a.priority - b.priority);
                    this._queueDirty = false;
                  }
                  const request = this._queue.pop();
                  if (!request) {
                    break;
                  }
                  this._totalNum++;
                  this._totalNumThisPeriod++;
                  request.handler(urlAppendTimestamp(request.url, this.appendTimeStamp), request.options, request.done);
                }
                this._handleQueueInNextFrame(maxConcurrency, maxRequestsPerFrame);
              }
              _handleQueueInNextFrame(maxConcurrency, maxRequestsPerFrame) {
                if (!this._checkNextPeriod && this._queue.length > 0) {
                  callInNextTick(this._handleQueue.bind(this), maxConcurrency, maxRequestsPerFrame);
                  this._checkNextPeriod = true;
                }
              }
            }
            Downloader._instance = void 0;
            const downloader = Downloader.instance;
            var downloader$1 = exports('aD', Downloader.instance);

            function createImageAsset(id, data, options, onComplete) {
              let out = null;
              let err = null;
              try {
                out = new ImageAsset$1();
                out._nativeUrl = id;
                out._nativeAsset = data;
              } catch (e) {
                err = e;
              }
              onComplete(err, out);
            }
            function createJsonAsset(id, data, options, onComplete) {
              const out = new JsonAsset();
              out.json = data;
              onComplete(null, out);
            }
            function createTextAsset(id, data, options, onComplete) {
              const out = new TextAsset();
              out.text = data;
              onComplete(null, out);
            }
            function createBufferAsset(id, data, options, onComplete) {
              const out = new BufferAsset();
              out._nativeUrl = id;
              out._nativeAsset = data;
              onComplete(null, out);
            }
            function createAsset(id, data, options, onComplete) {
              const out = new Asset();
              out._nativeUrl = id;
              out._nativeAsset = data;
              onComplete(null, out);
            }
            function createBundle(id, data, options, onComplete) {
              let bundle = bundles.get(data.name);
              if (!bundle) {
                bundle = data.name === BuiltinBundleName.RESOURCES ? resources : new Bundle();
                data.base = data.base || `${id}/`;
                bundle.init(data);
              }
              {
                module.import(`virtual:///prerequisite-imports/${bundle.name}`).then(() => {
                  onComplete(null, bundle);
                }).catch(onComplete);
              }
            }
            class Factory {
              constructor() {
                this._creating = new Cache();
                this._producers = {
                  '.png': createImageAsset,
                  '.jpg': createImageAsset,
                  '.bmp': createImageAsset,
                  '.jpeg': createImageAsset,
                  '.gif': createImageAsset,
                  '.ico': createImageAsset,
                  '.tiff': createImageAsset,
                  '.webp': createImageAsset,
                  '.image': createImageAsset,
                  '.pvr': createImageAsset,
                  '.pkm': createImageAsset,
                  '.txt': createTextAsset,
                  '.xml': createTextAsset,
                  '.vsh': createTextAsset,
                  '.fsh': createTextAsset,
                  '.atlas': createTextAsset,
                  '.tmx': createTextAsset,
                  '.tsx': createTextAsset,
                  '.fnt': createTextAsset,
                  '.json': createJsonAsset,
                  '.ExportJson': createJsonAsset,
                  '.binary': createBufferAsset,
                  '.bin': createBufferAsset,
                  '.dbbin': createBufferAsset,
                  '.skel': createBufferAsset,
                  bundle: createBundle,
                  default: createAsset
                };
              }
              register(type, handler) {
                if (typeof type === 'object') {
                  mixin(this._producers, type);
                } else {
                  this._producers[type] = handler;
                }
              }
              create(id, data, type, options, onComplete) {
                const handler = this._producers[type] || this._producers.default;
                const asset = assets.get(id);
                if (!options.reloadAsset && asset) {
                  onComplete(null, asset);
                  return;
                }
                const creating = this._creating.get(id);
                if (creating) {
                  creating.push(onComplete);
                  return;
                }
                this._creating.add(id, [onComplete]);
                handler(id, data, options, (err, result) => {
                  if (!err && result instanceof Asset) {
                    result._uuid = id;
                    cache(id, result, options.cacheAsset);
                  }
                  const callbacks = this._creating.remove(id);
                  for (let i = 0, l = callbacks.length; i < l; i++) {
                    callbacks[i](err, result);
                  }
                });
              }
            }
            var factory = exports('aG', new Factory());

            class PackManager {
              constructor() {
                this._loading = new Cache();
                this._unpackers = {
                  '.json': this.unpackJson
                };
              }
              unpackJson(pack, json, options, onComplete) {
                const out = createMap(true);
                let err = null;
                if (Array.isArray(json)) {
                  json = unpackJSONs(json);
                  if (json.length !== pack.length) {
                    errorID(4915);
                  }
                  for (let i = 0; i < pack.length; i++) {
                    out[`${pack[i]}@import`] = json[i];
                  }
                } else {
                  const textureType = getClassId(Texture2D$1);
                  const imageAssetType = getClassId(ImageAsset$1);
                  if (json.type === textureType && json.data) {
                    const datas = json.data;
                    if (datas.length !== pack.length) {
                      errorID(4915);
                    }
                    for (let i = 0; i < pack.length; i++) {
                      out[`${pack[i]}@import`] = packCustomObjData(textureType, {
                        base: datas[i][0],
                        mipmaps: datas[i][1]
                      });
                    }
                  } else if (json.type === imageAssetType && json.data) {
                    const datas = json.data;
                    if (datas.length !== pack.length) {
                      errorID(4915);
                    }
                    for (let i = 0; i < pack.length; i++) {
                      out[`${pack[i]}@import`] = datas[i];
                    }
                  } else {
                    err = new Error('unmatched type pack!');
                    onComplete(err, null);
                    return;
                  }
                }
                onComplete(err, out);
              }
              init() {
                this._loading.clear();
              }
              register(type, handler) {
                if (typeof type === 'object') {
                  mixin(this._unpackers, type);
                } else {
                  this._unpackers[type] = handler;
                }
              }
              unpack(pack, data, type, options, onComplete) {
                if (!data) {
                  onComplete(new Error('package data is wrong!'));
                  return;
                }
                const unpacker = this._unpackers[type];
                unpacker(pack, data, options, onComplete);
              }
              load(item, options, onComplete) {
                if (item.isNative || !item.info || !item.info.packs) {
                  downloader$1.download(item.id, item.url, item.ext, item.options, onComplete);
                  return;
                }
                if (files.has(item.id)) {
                  onComplete(null, files.get(item.id));
                  return;
                }
                const packs = item.info.packs;
                const loadingPack = packs.find(val => this._loading.has(val.uuid));
                if (loadingPack) {
                  const req = this._loading.get(loadingPack.uuid);
                  assertIsTrue(req);
                  req.push({
                    onComplete,
                    id: item.id
                  });
                  return;
                }
                const pack = packs[0];
                this._loading.add(pack.uuid, [{
                  onComplete,
                  id: item.id
                }]);
                assertIsTrue(item.config);
                const url = transform(pack.uuid, {
                  ext: pack.ext,
                  bundle: item.config.name
                });
                downloader$1.download(pack.uuid, url, pack.ext, item.options, (err, data) => {
                  files.remove(pack.uuid);
                  if (err) {
                    error(err.message, err.stack);
                  }
                  this.unpack(pack.packedUuids, data, pack.ext, item.options, (err2, result) => {
                    if (!err2) {
                      for (const id in result) {
                        files.add(id, result[id]);
                      }
                    }
                    const callbacks = this._loading.remove(pack.uuid);
                    assertIsTrue(callbacks);
                    for (let i = 0, l = callbacks.length; i < l; i++) {
                      const cb = callbacks[i];
                      if (err || err2) {
                        cb.onComplete(err || err2);
                        continue;
                      }
                      const unpackedData = result[cb.id];
                      if (!unpackedData) {
                        cb.onComplete(new Error('can not retrieve data from package'));
                      } else {
                        cb.onComplete(null, unpackedData);
                      }
                    }
                  });
                });
              }
            }
            var packManager = new PackManager();

            function fetch(task, done) {
              let firstTask = false;
              if (!task.progress) {
                task.progress = {
                  finish: 0,
                  total: task.input.length,
                  canInvoke: true
                };
                firstTask = true;
              }
              const {
                options,
                progress
              } = task;
              const depends = [];
              const total = progress.total;
              const exclude = options.__exclude__ = options.__exclude__ || Object.create(null);
              task.output = [];
              forEach(task.input, (item, cb) => {
                if (!item.isNative && assets.has(item.uuid)) {
                  const asset = assets.get(item.uuid);
                  item.content = asset.addRef();
                  task.output.push(item);
                  if (progress.canInvoke) {
                    task.dispatch('progress', ++progress.finish, progress.total, item);
                  }
                  cb();
                  return;
                }
                packManager.load(item, task.options, (err, data) => {
                  if (err) {
                    if (!task.isFinished) {
                      if (!legacyCC.assetManager.force || firstTask) {
                        error(err.message, err.stack);
                        progress.canInvoke = false;
                        done(err);
                      } else {
                        task.output.push(item);
                        if (progress.canInvoke) {
                          task.dispatch('progress', ++progress.finish, progress.total, item);
                        }
                      }
                    }
                  } else if (!task.isFinished) {
                    item.file = data;
                    task.output.push(item);
                    if (!item.isNative) {
                      exclude[item.uuid] = true;
                      getDepends(item.uuid, data, exclude, depends, item.config);
                      progress.total = total + depends.length;
                    }
                    if (progress.canInvoke) {
                      task.dispatch('progress', ++progress.finish, progress.total, item);
                    }
                  }
                  cb();
                });
              }, () => {
                if (task.isFinished) {
                  clear(task, true);
                  task.dispatch('error');
                  return;
                }
                if (depends.length > 0) {
                  const subTask = Task.create({
                    input: depends,
                    progress,
                    options,
                    onProgress: task.onProgress,
                    onError: Task.prototype.recycle,
                    onComplete: err => {
                      if (!err) {
                        task.output.push(...subTask.output);
                        subTask.recycle();
                      }
                      if (firstTask) {
                        decreaseRef(task);
                      }
                      done(err);
                    }
                  });
                  fetchPipeline.async(subTask);
                  return;
                }
                if (firstTask) {
                  decreaseRef(task);
                }
                done();
              });
            }
            function decreaseRef(task) {
              const output = task.output;
              for (let i = 0, l = output.length; i < l; i++) {
                if (output[i].content) {
                  output[i].content.decRef(false);
                }
              }
            }

            class SAXParser {
              constructor() {
                this._parser = null;
                if (globalThis.DOMParser) {
                  this._parser = new DOMParser();
                }
              }
              parse(xmlTxt) {
                return this._parseXML(xmlTxt);
              }
              _parseXML(textxml) {
                if (this._parser) {
                  return this._parser.parseFromString(textxml, 'text/xml');
                }
                throw new Error('Dom parser is not supported in this platform!');
              }
            } exports('b0', SAXParser);
            class PlistParser extends SAXParser {
              parse(xmlTxt) {
                const xmlDoc = this._parseXML(xmlTxt);
                const plist = xmlDoc.documentElement;
                if (plist.tagName !== 'plist') {
                  warnID(5100);
                  return {};
                }
                let node = null;
                for (let i = 0, len = plist.childNodes.length; i < len; i++) {
                  node = plist.childNodes[i];
                  if (node.nodeType === 1) {
                    break;
                  }
                }
                return this._parseNode(node);
              }
              _parseNode(node) {
                let data = null;
                const tagName = node.tagName;
                if (tagName === 'dict') {
                  data = this._parseDict(node);
                } else if (tagName === 'array') {
                  data = this._parseArray(node);
                } else if (tagName === 'string') {
                  if (node.childNodes.length === 1) {
                    data = node.firstChild.nodeValue;
                  } else {
                    data = '';
                    for (let i = 0; i < node.childNodes.length; i++) {
                      data += node.childNodes[i].nodeValue;
                    }
                  }
                } else if (tagName === 'false') {
                  data = false;
                } else if (tagName === 'true') {
                  data = true;
                } else if (tagName === 'real') {
                  data = parseFloat(node.firstChild.nodeValue);
                } else if (tagName === 'integer') {
                  data = parseInt(node.firstChild.nodeValue, 10);
                }
                return data;
              }
              _parseArray(node) {
                const data = [];
                for (let i = 0, len = node.childNodes.length; i < len; i++) {
                  const child = node.childNodes[i];
                  if (child.nodeType !== 1) {
                    continue;
                  }
                  data.push(this._parseNode(child));
                }
                return data;
              }
              _parseDict(node) {
                const data = {};
                let key = '';
                for (let i = 0, len = node.childNodes.length; i < len; i++) {
                  const child = node.childNodes[i];
                  if (child.nodeType !== 1) {
                    continue;
                  }
                  if (child.tagName === 'key') {
                    key = child.firstChild.nodeValue;
                  } else {
                    data[key] = this._parseNode(child);
                  }
                }
                return data;
              }
            }
            const plistParser = new PlistParser();

            class Parser {
              static get instance() {
                if (!this._instance) {
                  this._instance = new Parser();
                }
                return this._instance;
              }
              constructor() {
                this._parsing = new Cache();
                this._parsers = {
                  '.png': this.parseImage,
                  '.jpg': this.parseImage,
                  '.bmp': this.parseImage,
                  '.jpeg': this.parseImage,
                  '.gif': this.parseImage,
                  '.ico': this.parseImage,
                  '.tiff': this.parseImage,
                  '.webp': this.parseImage,
                  '.image': this.parseImage,
                  '.pvr': this.parsePVRTex,
                  '.pkm': this.parsePKMTex,
                  '.astc': this.parseASTCTex,
                  '.plist': this.parsePlist,
                  import: this.parseImport,
                  '.ccon': this.parseImport,
                  '.cconb': this.parseImport
                };
              }
              parseImage(file, options, onComplete) {
                if (file instanceof HTMLImageElement) {
                  onComplete(null, file);
                  return;
                }
                createImageBitmap(file, {
                  premultiplyAlpha: 'none'
                }).then(result => {
                  onComplete(null, result);
                }, err => {
                  onComplete(err, null);
                });
              }
              parsePVRTex(file, options, onComplete) {
                let err = null;
                let out = null;
                try {
                  out = ImageAsset$1.parseCompressedTextures(file, 0);
                } catch (e) {
                  err = e;
                  console.warn(err);
                }
                onComplete(err, out);
              }
              parsePKMTex(file, options, onComplete) {
                let err = null;
                let out = null;
                try {
                  out = ImageAsset$1.parseCompressedTextures(file, 1);
                } catch (e) {
                  err = e;
                  console.warn(err);
                }
                onComplete(err, out);
              }
              parseASTCTex(file, options, onComplete) {
                let err = null;
                let out = null;
                try {
                  out = ImageAsset$1.parseCompressedTextures(file, 2);
                } catch (e) {
                  err = e;
                  console.warn(err);
                }
                onComplete(err, out);
              }
              parsePlist(file, options, onComplete) {
                let err = null;
                const result = plistParser.parse(file);
                if (!result) {
                  err = new Error('parse failed');
                }
                onComplete(err, result);
              }
              parseImport(file, options, onComplete) {
                if (!file) {
                  onComplete(new Error(`The json file of asset ${options.__uuid__} is empty or missing`));
                  return;
                }
                let result = null;
                let err = null;
                try {
                  result = deserializeAsset(file, options);
                } catch (e) {
                  err = e;
                }
                onComplete(err, result);
              }
              init() {
                this._parsing.clear();
              }
              register(type, handler) {
                if (typeof type === 'object') {
                  mixin(this._parsers, type);
                } else {
                  this._parsers[type] = handler;
                }
              }
              parse(id, file, type, options, onComplete) {
                const parsedAsset = parsed.get(id);
                if (parsedAsset) {
                  onComplete(null, parsedAsset);
                  return;
                }
                const parsing = this._parsing.get(id);
                if (parsing) {
                  parsing.push(onComplete);
                  return;
                }
                const parseHandler = this._parsers[type];
                if (!parseHandler) {
                  onComplete(null, file);
                  return;
                }
                this._parsing.add(id, [onComplete]);
                parseHandler(file, options, (err, data) => {
                  if (err) {
                    files.remove(id);
                  } else if (!isScene(data)) {
                    parsed.add(id, data);
                  }
                  const callbacks = this._parsing.remove(id);
                  for (let i = 0, l = callbacks.length; i < l; i++) {
                    callbacks[i](err, data);
                  }
                });
              }
            }
            Parser._instance = void 0;
            var parser = exports('aI', Parser.instance);

            function load(task, done) {
              let firstTask = false;
              if (!task.progress) {
                task.progress = {
                  finish: 0,
                  total: task.input.length,
                  canInvoke: true
                };
                firstTask = true;
              }
              const {
                options,
                progress
              } = task;
              options.__exclude__ = options.__exclude__ || Object.create(null);
              task.output = [];
              forEach(task.input, (item, cb) => {
                const subTask = Task.create({
                  input: item,
                  onProgress: task.onProgress,
                  options,
                  progress,
                  onComplete: (err, result) => {
                    if (err && !task.isFinished) {
                      if (!legacyCC.assetManager.force || firstTask) {
                        progress.canInvoke = false;
                        done(err);
                      } else if (progress.canInvoke) {
                        task.dispatch('progress', ++progress.finish, progress.total, item);
                      }
                    }
                    task.output.push(result);
                    subTask.recycle();
                    cb(null);
                  }
                });
                loadOneAssetPipeline.async(subTask);
              }, () => {
                options.__exclude__ = null;
                if (task.isFinished) {
                  clear(task, true);
                  task.dispatch('error');
                  return;
                }
                gatherAsset(task);
                clear(task, true);
                done();
              });
            }
            const loadOneAssetPipeline = new Pipeline('loadOneAsset', [function fetch(task, done) {
              const item = task.output = task.input;
              const {
                options,
                isNative,
                uuid,
                file
              } = item;
              const {
                reloadAsset
              } = options;
              if (file || !reloadAsset && !isNative && assets.has(uuid)) {
                done();
                return;
              }
              packManager.load(item, task.options, (err, data) => {
                item.file = data;
                done(err);
              });
            }, function parse(task, done) {
              const item = task.output = task.input;
              const progress = task.progress;
              const exclude = task.options.__exclude__;
              const {
                id,
                file,
                options
              } = item;
              if (item.isNative) {
                parser.parse(id, file, item.ext, options, (err, asset) => {
                  if (err) {
                    done(err);
                    return;
                  }
                  item.content = asset;
                  if (progress.canInvoke) {
                    task.dispatch('progress', ++progress.finish, progress.total, item);
                  }
                  files.remove(id);
                  parsed.remove(id);
                  done();
                });
              } else {
                const {
                  uuid
                } = item;
                if (uuid in exclude) {
                  const {
                    finish,
                    content,
                    err,
                    callbacks
                  } = exclude[uuid];
                  if (progress.canInvoke) {
                    task.dispatch('progress', ++progress.finish, progress.total, item);
                  }
                  if (finish || checkCircleReference(uuid, uuid, exclude)) {
                    if (content) {
                      content.addRef();
                    }
                    item.content = content;
                    done(err);
                  } else {
                    callbacks.push({
                      done,
                      item
                    });
                  }
                } else if (!options.reloadAsset && assets.has(uuid)) {
                  const asset = assets.get(uuid);
                  item.content = asset.addRef();
                  if (progress.canInvoke) {
                    task.dispatch('progress', ++progress.finish, progress.total, item);
                  }
                  done();
                } else {
                  options.__uuid__ = uuid;
                  parser.parse(id, file, 'import', options, (err, asset) => {
                    if (err) {
                      done(err);
                      return;
                    }
                    loadDepends(task, asset, done);
                  });
                }
              }
            }]);
            function loadDepends(task, asset, done) {
              const {
                input: item,
                progress
              } = task;
              const {
                uuid,
                id,
                options,
                config
              } = item;
              const {
                cacheAsset
              } = options;
              const depends = [];
              if (asset.addRef) {
                asset.addRef();
              }
              getDepends(uuid, asset, Object.create(null), depends, config);
              if (progress.canInvoke) {
                task.dispatch('progress', ++progress.finish, progress.total += depends.length, item);
              }
              const repeatItem = task.options.__exclude__[uuid] = {
                content: asset,
                finish: false,
                callbacks: [{
                  done,
                  item
                }]
              };
              const subTask = Task.create({
                input: depends,
                options: task.options,
                onProgress: task.onProgress,
                onError: Task.prototype.recycle,
                progress,
                onComplete: err => {
                  if (asset.decRef) {
                    asset.decRef(false);
                  }
                  repeatItem.finish = true;
                  repeatItem.err = err;
                  if (!err) {
                    const output = Array.isArray(subTask.output) ? subTask.output : [subTask.output];
                    const map = Object.create(null);
                    for (const dependAsset of output) {
                      if (!dependAsset) {
                        continue;
                      }
                      map[dependAsset instanceof Asset ? `${dependAsset._uuid}@import` : `${uuid}@native`] = dependAsset;
                    }
                    setProperties(uuid, asset, map);
                    try {
                      if (typeof asset.onLoaded === 'function' && !onLoadedInvokedMap.has(asset) && !nativeDependMap.has(asset)) {
                        asset.onLoaded();
                        onLoadedInvokedMap.add(asset);
                      }
                    } catch (e) {
                      error(`The asset ${uuid} is invalid for some reason, detail message: ${e.message}, stack: ${e.stack}`);
                      {
                        if (asset instanceof Asset) {
                          asset.initDefault();
                        } else {
                          legacyCC.SceneAsset.prototype.initDefault.call(asset);
                        }
                      }
                    }
                    files.remove(id);
                    parsed.remove(id);
                    if (asset.validate && !asset.validate()) {
                      error(`The asset ${uuid} is invalid for some reason and will be reverted to default asset, please check it out!`);
                      asset.initDefault();
                    }
                    cache(uuid, asset, cacheAsset);
                    subTask.recycle();
                  }
                  const callbacks = repeatItem.callbacks;
                  for (let i = 0, l = callbacks.length; i < l; i++) {
                    const cb = callbacks[i];
                    if (asset.addRef) {
                      asset.addRef();
                    }
                    cb.item.content = asset;
                    cb.done(err);
                  }
                  callbacks.length = 0;
                }
              });
              pipeline.async(subTask);
            }

            function preprocess(task, done) {
              const options = task.options;
              const subOptions = Object.create(null);
              const leftOptions = Object.create(null);
              for (const op in options) {
                switch (op) {
                  case RequestType.PATH:
                  case RequestType.UUID:
                  case RequestType.DIR:
                  case RequestType.SCENE:
                  case RequestType.URL:
                    break;
                  case '__requestType__':
                  case '__isNative__':
                  case 'ext':
                  case 'type':
                  case '__nativeName__':
                  case 'audioLoadMode':
                  case 'bundle':
                    subOptions[op] = options[op];
                    break;
                  case '__exclude__':
                  case '__outputAsArray__':
                    leftOptions[op] = options[op];
                    break;
                  default:
                    subOptions[op] = options[op];
                    leftOptions[op] = options[op];
                    break;
                }
              }
              task.options = leftOptions;
              const subTask = Task.create({
                input: task.input,
                options: subOptions
              });
              let err = null;
              try {
                task.output = task.source = transformPipeline.sync(subTask);
              } catch (e) {
                err = e;
                for (let i = 0, l = subTask.output.length; i < l; i++) {
                  subTask.output[i].recycle();
                }
              }
              subTask.recycle();
              done(err);
            }

            class RequestItem {
              constructor() {
                this.uuid = '';
                this.overrideUuid = '';
                this.url = '';
                this.ext = '.json';
                this.content = null;
                this.file = null;
                this.info = null;
                this.config = null;
                this.isNative = false;
                this.options = Object.create(null);
                this._id = '';
              }
              get id() {
                if (!this._id) {
                  this._id = `${this.overrideUuid || this.uuid}@${this.isNative ? 'native' : 'import'}`;
                }
                return this._id;
              }
              static create() {
                let out;
                if (RequestItem._deadPool.length !== 0) {
                  out = RequestItem._deadPool.pop();
                } else {
                  out = new RequestItem();
                }
                return out;
              }
              recycle() {
                if (RequestItem._deadPool.length === RequestItem.MAX_DEAD_NUM) {
                  return;
                }
                this._id = '';
                this.uuid = '';
                this.overrideUuid = '';
                this.url = '';
                this.ext = '.json';
                this.content = null;
                this.file = null;
                this.info = null;
                this.config = null;
                this.isNative = false;
                this.options = Object.create(null);
                RequestItem._deadPool.push(this);
              }
            }
            RequestItem.MAX_DEAD_NUM = 500;
            RequestItem._deadPool = [];

            const infos = [];
            function parse(task) {
              var _info2;
              const options = task.options;
              const input = Array.isArray(task.input) ? task.input : [task.input];
              task.output = [];
              for (let i = 0; i < input.length; i++) {
                let item = input[i];
                let out = RequestItem.create();
                let config = null;
                let info = null;
                if (typeof item === 'string') {
                  item = Object.create(null);
                  item[options.__requestType__ || RequestType.UUID] = input[i];
                }
                if (typeof item === 'object') {
                  addon(item, options);
                  if (item.preset) {
                    addon(item, presets[item.preset]);
                  }
                  for (const key in item) {
                    switch (key) {
                      case RequestType.UUID:
                        {
                          var _info;
                          const uuid = out.uuid = decodeUuid(item.uuid);
                          if (!item.bundle) {
                            const bundle = bundles.find(bundle => !!bundle.getAssetInfo(uuid));
                            item.bundle = bundle && bundle.name;
                          }
                          if (bundles.has(item.bundle)) {
                            config = bundles.get(item.bundle).config;
                            info = config.getAssetInfo(uuid);
                            if (info && info.redirect) {
                              if (!bundles.has(info.redirect)) {
                                throw new Error(`Please load bundle ${info.redirect} first`);
                              }
                              config = bundles.get(info.redirect).config;
                              info = config.getAssetInfo(uuid);
                            }
                            out.config = config;
                            out.info = info;
                          }
                          out.ext = item.ext || ((_info = info) === null || _info === void 0 ? void 0 : _info.extension) || '.json';
                          break;
                        }
                      case '__requestType__':
                      case 'ext':
                      case 'bundle':
                      case 'preset':
                      case 'type':
                        break;
                      case RequestType.DIR:
                        if (bundles.has(item.bundle)) {
                          bundles.get(item.bundle).config.getDirWithPath(item.dir, item.type, infos);
                          for (const assetInfo of infos) {
                            input.push({
                              uuid: assetInfo.uuid,
                              __isNative__: false,
                              ext: assetInfo.extension || '.json',
                              bundle: item.bundle
                            });
                          }
                          infos.length = 0;
                        }
                        out.recycle();
                        out = null;
                        break;
                      case RequestType.PATH:
                        if (bundles.has(item.bundle)) {
                          config = bundles.get(item.bundle).config;
                          info = config.getInfoWithPath(item.path, item.type);
                          if (info && info.redirect) {
                            if (!bundles.has(info.redirect)) {
                              throw new Error(`you need to load bundle ${info.redirect} first`);
                            }
                            config = bundles.get(info.redirect).config;
                            info = config.getAssetInfo(info.uuid);
                          }
                          if (!info) {
                            out.recycle();
                            throw new Error(`Bundle ${item.bundle} doesn't contain ${item.path}`);
                          }
                          out.config = config;
                          out.uuid = info.uuid;
                          out.info = info;
                        }
                        out.ext = item.ext || ((_info2 = info) === null || _info2 === void 0 ? void 0 : _info2.extension) || '.json';
                        break;
                      case RequestType.SCENE:
                        if (!item.bundle) {
                          const bundle = bundles.find(bundle => !!bundle.getSceneInfo(item.scene));
                          item.bundle = bundle && bundle.name;
                        }
                        if (bundles.has(item.bundle)) {
                          config = bundles.get(item.bundle).config;
                          info = config.getSceneInfo(item.scene);
                          if (info && info.redirect) {
                            if (!bundles.has(info.redirect)) {
                              throw new Error(`you need to load bundle ${info.redirect} first`);
                            }
                            config = bundles.get(info.redirect).config;
                            info = config.getAssetInfo(info.uuid);
                          }
                          if (!info) {
                            out.recycle();
                            throw new Error(`Bundle ${config.name} doesn't contain scene ${item.scene}`);
                          }
                          out.config = config;
                          out.uuid = info.uuid;
                          out.info = info;
                        }
                        break;
                      case '__isNative__':
                        out.isNative = item.__isNative__;
                        break;
                      case RequestType.URL:
                        out.url = item.url;
                        out.uuid = item.uuid || item.url;
                        out.ext = item.ext || extname(item.url);
                        out.isNative = item.__isNative__ !== undefined ? item.__isNative__ : true;
                        break;
                      default:
                        out.options[key] = item[key];
                    }
                    if (!out) {
                      break;
                    }
                  }
                }
                if (!out) {
                  continue;
                }
                task.output.push(out);
                if (!out.uuid && !out.url) {
                  throw new Error(`Can not parse this input:${JSON.stringify(item)}`);
                }
              }
              return null;
            }
            function replaceOverrideAsset(task) {
              const input = task.output = task.input;
              for (let i = 0; i < input.length; i++) {
                const item = input[i];
                if (assetsOverrideMap.has(item.uuid)) {
                  const uuid = assetsOverrideMap.get(item.uuid);
                  {
                    item.overrideUuid = uuid;
                    item.ext = item.isNative ? item.ext : '.json';
                    continue;
                  }
                }
              }
            }
            function combine(task) {
              const input = task.output = task.input;
              for (let i = 0; i < input.length; i++) {
                const item = input[i];
                if (item.url) {
                  continue;
                }
                let url = '';
                let base = '';
                const config = item.config;
                if (item.isNative) {
                  base = config && config.nativeBase ? config.base + config.nativeBase : legacyCC.assetManager.generalNativeBase;
                } else {
                  base = config && config.importBase ? config.base + config.importBase : legacyCC.assetManager.generalImportBase;
                }
                const uuid = item.overrideUuid || item.uuid;
                let ver = '';
                if (item.info) {
                  if (item.isNative) {
                    ver = item.info.nativeVer ? `.${item.info.nativeVer}` : '';
                  } else {
                    ver = item.info.ver ? `.${item.info.ver}` : '';
                  }
                }
                if (item.ext === '.ttf') {
                  url = `${base}/${uuid.slice(0, 2)}/${uuid}${ver}/${item.options.__nativeName__}`;
                } else {
                  url = `${base}/${uuid.slice(0, 2)}/${uuid}${ver}${item.ext}`;
                }
                item.url = url;
              }
              return null;
            }

            const EVENT_ASSET_MISSING = 'asset-missing';
            class AssetManager {
              static get instance() {
                if (!this._instance) {
                  this._instance = new AssetManager();
                }
                return this._instance;
              }
              constructor() {
                this.pipeline = pipeline.append(preprocess).append(load);
                this.fetchPipeline = fetchPipeline.append(preprocess).append(fetch);
                this.transformPipeline = transformPipeline.append(parse).append(replaceOverrideAsset).append(combine);
                this.bundles = bundles;
                this.assets = assets;
                this.assetsOverrideMap = assetsOverrideMap;
                this.generalImportBase = '';
                this.generalNativeBase = '';
                this.dependUtil = dependUtil;
                this.force = PREVIEW;
                this.allowImageBitmap = false;
                this.utils = helper;
                this.downloader = downloader$1;
                this.parser = parser;
                this.packManager = packManager;
                this.cacheAsset = true;
                this.cacheManager = null;
                this.presets = presets;
                this.factory = factory;
                this.preprocessPipe = preprocess;
                this.fetchPipe = fetch;
                this.loadPipe = load;
                this.references = references;
                this._releaseManager = releaseManager;
                this._files = files;
                this._parsed = parsed;
                this._parsePipeline = new Pipeline('parse existing json', [this.loadPipe]);
                this._projectBundles = [];
                this._eventTarget = new EventTarget();
              }
              get main() {
                return bundles.get(BuiltinBundleName.MAIN) || null;
              }
              get resources() {
                return bundles.get(BuiltinBundleName.RESOURCES) || null;
              }
              onAssetMissing(func, target) {
                this._eventTarget.on(EVENT_ASSET_MISSING, func, target);
              }
              offAssetMissing(func, target) {
                this._eventTarget.off(EVENT_ASSET_MISSING, func, target);
              }
              dispatchAssetMissing(parentAsset, owner, propName, uuid) {
                this._eventTarget.emit(EVENT_ASSET_MISSING, parentAsset, owner, propName, uuid);
              }
              init(options = {}) {
                const server = options.server || settings.querySettings(Settings.Category.ASSETS, 'server') || '';
                const bundleVers = options.bundleVers || settings.querySettings(Settings.Category.ASSETS, 'bundleVers') || {};
                const remoteBundles = options.remoteBundles || settings.querySettings(Settings.Category.ASSETS, 'remoteBundles') || [];
                const downloadMaxConcurrency = options.downloadMaxConcurrency || settings.querySettings(Settings.Category.ASSETS, 'downloadMaxConcurrency');
                if (downloadMaxConcurrency && downloadMaxConcurrency > 0) {
                  this.downloader.maxConcurrency = downloadMaxConcurrency;
                }
                this._files.clear();
                this._parsed.clear();
                this._releaseManager.init();
                this.assets.clear();
                this.bundles.clear();
                this.packManager.init();
                this.downloader.init(server, bundleVers, remoteBundles);
                this.parser.init();
                this.dependUtil.init();
                let importBase = options.importBase || settings.querySettings(Settings.Category.ASSETS, 'importBase') || '';
                if (importBase && importBase.endsWith('/')) {
                  importBase = importBase.substr(0, importBase.length - 1);
                }
                let nativeBase = options.nativeBase || settings.querySettings(Settings.Category.ASSETS, 'nativeBase') || '';
                if (nativeBase && nativeBase.endsWith('/')) {
                  nativeBase = nativeBase.substr(0, nativeBase.length - 1);
                }
                this.generalImportBase = importBase;
                this.generalNativeBase = nativeBase;
                this._projectBundles = settings.querySettings(Settings.Category.ASSETS, 'projectBundles') || [];
                const assetsOverride = settings.querySettings(Settings.Category.ASSETS, 'assetsOverrides') || {};
                for (const key in assetsOverride) {
                  this.assetsOverrideMap.set(key, assetsOverride[key]);
                }
              }
              getBundle(name) {
                return bundles.get(name) || null;
              }
              removeBundle(bundle) {
                bundle._destroy();
                bundles.remove(bundle.name);
              }
              loadAny(requests, options, onProgress, onComplete) {
                const {
                  options: opts,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseParameters(options, onProgress, onComplete);
                opts.preset = opts.preset || 'default';
                requests = Array.isArray(requests) ? requests.slice() : requests;
                const task = Task.create({
                  input: requests,
                  onProgress: onProg,
                  onComplete: asyncify(onComp),
                  options: opts
                });
                pipeline.async(task);
              }
              preloadAny(requests, options, onProgress, onComplete) {
                const {
                  options: opts,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseParameters(options, onProgress, onComplete);
                opts.preset = opts.preset || 'preload';
                requests = Array.isArray(requests) ? requests.slice() : requests;
                const task = Task.create({
                  input: requests,
                  onProgress: onProg,
                  onComplete: asyncify(onComp),
                  options: opts
                });
                fetchPipeline.async(task);
              }
              loadRemote(url, options, onComplete) {
                const {
                  options: opts,
                  onComplete: onComp
                } = parseParameters(options, undefined, onComplete);
                if (!opts.reloadAsset && this.assets.has(url)) {
                  asyncify(onComp)(null, this.assets.get(url));
                  return;
                }
                opts.__isNative__ = true;
                opts.preset = opts.preset || 'remote';
                this.loadAny({
                  url
                }, opts, null, (err, data) => {
                  if (err) {
                    error(err.message, err.stack);
                    if (onComp) {
                      onComp(err, data);
                    }
                  } else {
                    factory.create(url, data, opts.ext || extname(url), opts, (p1, p2) => {
                      if (onComp) {
                        onComp(p1, p2);
                      }
                    });
                  }
                });
              }
              loadBundle(nameOrUrl, options, onComplete) {
                const {
                  options: opts,
                  onComplete: onComp
                } = parseParameters(options, undefined, onComplete);
                const bundleName = basename(nameOrUrl);
                if (this.bundles.has(bundleName)) {
                  asyncify(onComp)(null, this.getBundle(bundleName));
                  return;
                }
                opts.preset = opts.preset || 'bundle';
                opts.ext = 'bundle';
                opts.__isNative__ = true;
                this.loadAny({
                  url: nameOrUrl
                }, opts, null, (err, data) => {
                  if (err) {
                    error(err.message, err.stack);
                    if (onComp) {
                      onComp(err, data);
                    }
                  } else {
                    factory.create(nameOrUrl, data, 'bundle', opts, (p1, p2) => {
                      if (onComp) {
                        onComp(p1, p2);
                      }
                    });
                  }
                });
              }
              releaseAsset(asset) {
                releaseManager.tryRelease(asset, true);
              }
              releaseUnusedAssets() {
                assets.forEach(asset => {
                  releaseManager.tryRelease(asset);
                });
              }
              releaseAll() {
                assets.forEach(asset => {
                  releaseManager.tryRelease(asset, true);
                });
              }
              loadWithJson(json, options, onProgress, onComplete) {
                const {
                  options: opts,
                  onProgress: onProg,
                  onComplete: onComp
                } = parseParameters(options, onProgress, onComplete);
                const item = RequestItem.create();
                item.isNative = false;
                item.uuid = opts.assetId || `${new Date().getTime()}${Math.random()}`;
                item.file = json;
                item.ext = '.json';
                const task = Task.create({
                  input: [item],
                  onProgress: onProg,
                  options: opts,
                  onComplete: asyncify((err, data) => {
                    if (!err) {
                      if (!opts.assetId) {
                        data._uuid = '';
                      }
                    }
                    if (onComp) {
                      onComp(err, data);
                    }
                  })
                });
                this._parsePipeline.async(task);
              }
            } exports('ar', AssetManager);
            AssetManager._instance = void 0;
            AssetManager.Pipeline = Pipeline;
            AssetManager.Task = Task;
            AssetManager.Cache = Cache;
            AssetManager.RequestItem = RequestItem;
            AssetManager.Bundle = Bundle;
            AssetManager.BuiltinBundleName = BuiltinBundleName;
            AssetManager.CacheManager = CacheManager;
            AssetManager.Downloader = Downloader;
            AssetManager.Parser = Parser;
            AssetManager.DependUtil = DependUtil;
            const assetManager = exports('aq', legacyCC.assetManager = AssetManager.instance);
            legacyCC.AssetManager = AssetManager;

            const Texture2D = jsb.Texture2D;
            const ImageAsset = jsb.ImageAsset;
            const BuiltinResMgr = jsb.BuiltinResMgr;
            const builtinResMgrProto = BuiltinResMgr.prototype;
            builtinResMgrProto.init = function () {
              this._resources = {};
              this._materialsToBeCompiled = [];
              const resources = this._resources;
              const len = 2;
              const numChannels = 4;
              const blackValueView = new Uint8Array(len * len * numChannels);
              for (let i = 0; i < len * len; i++) {
                const offset = i * numChannels;
                blackValueView[offset] = 0;
                blackValueView[offset + 1] = 0;
                blackValueView[offset + 2] = 0;
                blackValueView[offset + 3] = 255;
              }
              const blackMemImageSource = {
                width: len,
                height: len,
                _data: blackValueView,
                _compressed: false,
                format: Texture2D.PixelFormat.RGBA8888
              };
              const imgAsset = new ImageAsset(blackMemImageSource);
              const blackTexture = new Texture2D();
              blackTexture._uuid = 'black-texture';
              blackTexture.image = imgAsset;
              resources[blackTexture._uuid] = blackTexture;
              if (legacyCC.SpriteFrame) {
                const spriteFrame = new legacyCC.SpriteFrame();
                const image = imgAsset;
                const texture = new Texture2D();
                texture.image = image;
                spriteFrame.texture = texture;
                spriteFrame._uuid = 'default-spriteframe';
                resources[spriteFrame._uuid] = spriteFrame;
              }
              this.initBuiltinRes();
            };
            builtinResMgrProto.get = function (uuid) {
              const res = this._resources[uuid];
              return res || this.getAsset(uuid);
            };
            builtinResMgrProto.compileBuiltinMaterial = function () {
              for (let i = 0; i < this._materialsToBeCompiled.length; ++i) {
                const mat = this._materialsToBeCompiled[i];
                for (let j = 0; j < mat.passes.length; ++j) {
                  mat.passes[j].tryCompile();
                }
              }
              this._materialsToBeCompiled.length = 0;
            };
            builtinResMgrProto.loadBuiltinAssets = function () {
              const builtinAssets = settings.querySettings(Settings.Category.ENGINE, 'builtinAssets');
              if (!builtinAssets) return Promise.resolve();
              const resources = this._resources;
              return new Promise((resolve, reject) => {
                assetManager.loadBundle(BuiltinBundleName.INTERNAL, (err, bundle) => {
                  if (err) {
                    reject(err);
                    return;
                  }
                  assetManager.loadAny(builtinAssets, (err, assets) => {
                    if (err) {
                      reject(err);
                    } else {
                      assets.forEach(asset => {
                        resources[asset.name] = asset;
                        asset.nativeUrl;
                        releaseManager.addIgnoredAsset(asset);
                        this.addAsset(asset.name, asset);
                        if (asset instanceof legacyCC.Material) {
                          this._materialsToBeCompiled.push(asset);
                        }
                      });
                      resolve();
                    }
                  });
                });
              });
            };
            const builtinResMgr = exports('at', legacyCC.builtinResMgr = BuiltinResMgr.getInstance());

        })
    };
}));
