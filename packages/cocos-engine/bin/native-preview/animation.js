System.register(['./index-ce98320e.js', './animation-component-f18b860a.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './director-dc238483.js', './find-7a03d1cc.js', './deprecated-80961f27.js', './device-90bc7390.js', './instantiate-a87ac743.js', './move-2b84a753.js', './cached-array-9b18d763.js', './index-cec07db1.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './mesh-renderer-ea94cc01.js', './deprecated-15f68f3e.js', './murmurhash2_gc-2108d723.js', './decorators-b63b63a2.js', './touch-af62e326.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './mesh.jsb-cea8fe4b.js', './util-9da0b4a2.js', './capsule-3c7095c4.js', './skeleton.jsb-04631524.js', './renderer-3bf7a012.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js'], (function (exports) {
    'use strict';
    var ccclass$g, applyDecoratedInitializer, EditorExtendable, serializable$d, errorID, warn, getClassByName, _decorator, RealCurve, warnID, float, assertIsTrue, Vec3, Quat, editorExtrasTag, remove, isChildClassOf, error, getSuper, EPSILON, Mat4, lerp, ccenum, getOrCreatePropertyStash, PropertyStashInternalFlag, removeAt, assertIsNonNullable, removeIf, clamp, WrapModeMask, Vec2, approx, type$2, editorOnly, binarySearchEpsilon, clamp01, Pool, legacyCC, Color, System, MutableForwardIterator, CLASS_NAME_PREFIX_ANIM, AnimationState, Track, Channel, createEvalSymbol, invokeComponentMethodsEngagedInAnimationEvent, exoticAnimationTag, UntypedTrack, additiveSettingsTag, trackBindingTag, normalizedFollowTag, isTrsPropertyName, AnimationClip, WrappedInfo, TrackPath, RealTrack, VectorTrack, QuatTrack, ColorTrack, SizeTrack, ObjectTrack, isPropertyPath, isCustomPath, HierarchyPath, ComponentPath, CubicSplineVec2Value, CubicSplineVec3Value, CubicSplineVec4Value, CubicSplineQuatValue, CubicSplineNumberValue, _applyDecoratedDescriptor, _initializerDefineProperty, Asset, Component, Material, builtinResMgr, TextureBase, Node, director, Director, deviceManager, Pass, getStringFromType, getDefaultFromType, Type, PrimitiveMode, instantiate, shift, CachedArray, createMesh, MeshRenderer;
    return {
        setters: [function (module) {
            ccclass$g = module.by;
            applyDecoratedInitializer = module.bx;
            EditorExtendable = module.aC;
            serializable$d = module.bf;
            errorID = module.f;
            warn = module.w;
            getClassByName = module.bU;
            _decorator = module.ap;
            RealCurve = module.aP;
            warnID = module.d;
            float = module.ct;
            assertIsTrue = module.bu;
            Vec3 = module.n;
            Quat = module.Q;
            editorExtrasTag = module.ay;
            remove = module.cu;
            isChildClassOf = module.bM;
            error = module.e;
            getSuper = module.bQ;
            EPSILON = module.E;
            Mat4 = module.s;
            lerp = module.I;
            ccenum = module.ab;
            getOrCreatePropertyStash = module.cv;
            PropertyStashInternalFlag = module.cw;
            removeAt = module.c1;
            assertIsNonNullable = module.bt;
            removeIf = module.cx;
            clamp = module.F;
            WrapModeMask = module.cy;
            Vec2 = module.V;
            approx = module.D;
            type$2 = module.bw;
            editorOnly = module.bK;
            binarySearchEpsilon = module.br;
            clamp01 = module.G;
            Pool = module.P;
            legacyCC = module.l;
            Color = module.C;
            System = module.a$;
            MutableForwardIterator = module.c0;
        }, function (module) {
            CLASS_NAME_PREFIX_ANIM = module.C;
            AnimationState = module.A;
            Track = module.T;
            Channel = module.a;
            createEvalSymbol = module.c;
            invokeComponentMethodsEngagedInAnimationEvent = module.i;
            exoticAnimationTag = module.e;
            UntypedTrack = module.U;
            additiveSettingsTag = module.b;
            trackBindingTag = module.t;
            normalizedFollowTag = module.n;
            isTrsPropertyName = module.d;
            AnimationClip = module.f;
            WrappedInfo = module.W;
            TrackPath = module.g;
            RealTrack = module.R;
            VectorTrack = module.V;
            QuatTrack = module.Q;
            ColorTrack = module.h;
            SizeTrack = module.S;
            ObjectTrack = module.O;
            isPropertyPath = module.j;
            isCustomPath = module.k;
            HierarchyPath = module.H;
            ComponentPath = module.l;
            CubicSplineVec2Value = module.m;
            CubicSplineVec3Value = module.o;
            CubicSplineVec4Value = module.p;
            CubicSplineQuatValue = module.q;
            CubicSplineNumberValue = module.r;
            exports({ AnimCurve: module.v, Animation: module.s, AnimationClip: module.f, AnimationComponent: module.s, AnimationState: module.A, EventInfo: module.E, RatioSampler: module.u, computeRatioByType: module.x, sampleAnimationCurve: module.w });
        }, function (module) {
            _applyDecoratedDescriptor = module.H;
            _initializerDefineProperty = module.I;
            Asset = module.A;
            Component = module.C;
        }, function (module) {
            Material = module.ap;
            builtinResMgr = module.at;
            TextureBase = module.aQ;
            Node = module.Q;
        }, function (module) {
            director = module.n;
            Director = module.m;
        }, function (module) {
            deviceManager = module.d;
        }, function (module) {
            Pass = module.P;
            getStringFromType = module.l;
            getDefaultFromType = module.k;
        }, function (module) {
            Type = module.T;
            PrimitiveMode = module.u;
        }, function (module) {
            instantiate = module.i;
        }, function (module) {
            shift = module.s;
        }, function (module) {
            CachedArray = module.C;
        }, function () {}, function (module) {
            createMesh = module.c;
        }, function () {}, function () {}, function () {}, function (module) {
            MeshRenderer = module.M;
        }, function (module) {
            exports({ getPathFromRoot: module.g, getWorldTransformUntilRoot: module.c });
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var _dec$V, _class$V, _class2$N, _initializer$G, _initializer2$s, _initializer3$f, _initializer4$a;
            (_dec$V = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}EmbeddedPlayer`), _dec$V(_class$V = (_class2$N = class EmbeddedPlayer extends EditorExtendable {
              constructor(...args) {
                super(...args);
                this.begin = _initializer$G && _initializer$G();
                this.end = _initializer2$s && _initializer2$s();
                this.reconciledSpeed = _initializer3$f && _initializer3$f();
                this.playable = _initializer4$a && _initializer4$a();
              }
            }, (_initializer$G = applyDecoratedInitializer(_class2$N.prototype, "begin", [serializable$d], function () {
              return 0.0;
            }), _initializer2$s = applyDecoratedInitializer(_class2$N.prototype, "end", [serializable$d], function () {
              return 0.0;
            }), _initializer3$f = applyDecoratedInitializer(_class2$N.prototype, "reconciledSpeed", [serializable$d], function () {
              return false;
            }), _initializer4$a = applyDecoratedInitializer(_class2$N.prototype, "playable", [serializable$d], function () {
              return null;
            })), _class2$N)) || _class$V);
            class EmbeddedPlayable {}
            class EmbeddedPlayableState {
              constructor(randomAccess) {
                this._randomAccess = randomAccess;
              }
              get randomAccess() {
                return this._randomAccess;
              }
              setTime(_time) {}
            }

            var _dec$U, _class$U, _class2$M, _initializer$F, _initializer2$r;
            (_dec$U = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}EmbeddedAnimationClipPlayable`), _dec$U(_class$U = (_class2$M = class EmbeddedAnimationClipPlayable extends EmbeddedPlayable {
              constructor(...args) {
                super(...args);
                this.path = _initializer$F && _initializer$F();
                this.clip = _initializer2$r && _initializer2$r();
              }
              instantiate(root) {
                const {
                  clip,
                  path
                } = this;
                if (!clip) {
                  return null;
                }
                const clipRoot = root.getChildByPath(path);
                if (!clipRoot) {
                  errorID(3938, path, root.getPathInHierarchy(), clip.name);
                  return null;
                }
                const state = new AnimationState(clip);
                state.initialize(clipRoot);
                return new EmbeddedAnimationClipPlayableState(state);
              }
            }, (_initializer$F = applyDecoratedInitializer(_class2$M.prototype, "path", [serializable$d], function () {
              return '';
            }), _initializer2$r = applyDecoratedInitializer(_class2$M.prototype, "clip", [serializable$d], function () {
              return null;
            })), _class2$M)) || _class$U);
            class EmbeddedAnimationClipPlayableState extends EmbeddedPlayableState {
              constructor(animationState) {
                super(true);
                this._animationState = void 0;
                this._animationState = animationState;
              }
              destroy() {
                this._animationState.destroy();
              }
              play() {
                this._animationState.play();
              }
              pause() {
                this._animationState.pause();
              }
              stop() {
                this._animationState.stop();
              }
              setSpeed(speed) {
                this._animationState.speed = speed;
              }
              setTime(time) {
                this._animationState.time = time;
              }
            }

            var _dec$T, _class$T, _class2$L, _initializer$E;
            (_dec$T = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}EmbeddedParticleSystemPlayable`), _dec$T(_class$T = (_class2$L = class EmbeddedParticleSystemPlayable extends EmbeddedPlayable {
              constructor(...args) {
                super(...args);
                this.path = _initializer$E && _initializer$E();
              }
              instantiate(root) {
                const node = root.getChildByPath(this.path);
                if (!node) {
                  warn(`Hierarchy path ${this.path} does not exists.`);
                  return null;
                }
                const ParticleSystemConstructor = getClassByName(`cc.ParticleSystem`);
                if (!ParticleSystemConstructor) {
                  warn(`Particle system is required for embedded particle system player.`);
                  return null;
                }
                const particleSystem = node.getComponent(ParticleSystemConstructor);
                if (!particleSystem) {
                  warn(`${this.path} does not includes a particle system component.`);
                  return null;
                }
                return new EmbeddedParticleSystemPlayableState(particleSystem);
              }
            }, (_initializer$E = applyDecoratedInitializer(_class2$L.prototype, "path", [serializable$d], function () {
              return '';
            })), _class2$L)) || _class$T);
            class EmbeddedParticleSystemPlayableState extends EmbeddedPlayableState {
              constructor(particleSystem) {
                super(false);
                this._particleSystem = void 0;
                this._particleSystem = particleSystem;
              }
              destroy() {}
              play() {
                this._particleSystem.play();
              }
              pause() {
                this._particleSystem.stopEmitting();
              }
              stop() {
                this._particleSystem.stopEmitting();
              }
              setSpeed(speed) {
                this._particleSystem.simulationSpeed = speed;
              }
            }

            var _dec$S, _class$S, _class2$K, _initializer$D;
            const {
              ccclass: ccclass$f,
              serializable: serializable$c
            } = _decorator;
            (_dec$S = ccclass$f(`${CLASS_NAME_PREFIX_ANIM}RealArrayTrack`), _dec$S(_class$S = (_class2$K = class RealArrayTrack extends Track {
              constructor(...args) {
                super(...args);
                this._channels = _initializer$D && _initializer$D();
              }
              get elementCount() {
                return this._channels.length;
              }
              set elementCount(value) {
                const {
                  _channels: channels
                } = this;
                const nChannels = channels.length;
                if (value < nChannels) {
                  this._channels.splice(value);
                } else if (value > nChannels) {
                  this._channels.push(...Array.from({
                    length: value - nChannels
                  }, () => new Channel(new RealCurve())));
                }
              }
              channels() {
                return this._channels;
              }
              [createEvalSymbol]() {
                return new RealArrayTrackEval(this._channels.map(({
                  curve
                }) => curve));
              }
            }, (_initializer$D = applyDecoratedInitializer(_class2$K.prototype, "_channels", [serializable$c], function () {
              return [];
            })), _class2$K)) || _class$S);
            class RealArrayTrackEval {
              constructor(_curves) {
                this._curves = _curves;
                this._result = new Array(_curves.length).fill(0.0);
              }
              get requiresDefault() {
                return false;
              }
              evaluate(time) {
                const {
                  _result: result
                } = this;
                const nElements = result.length;
                for (let iElement = 0; iElement < nElements; ++iElement) {
                  result[iElement] = this._curves[iElement].evaluate(time);
                }
                return this._result;
              }
            }

            var _dec$R, _class$R, _class2$J, _initializer$C, _initializer2$q, _descriptor$b;
            let UniformProxyFactory = (_dec$R = ccclass$g('cc.animation.UniformProxyFactory'), _dec$R(_class$R = (_class2$J = class UniformProxyFactory {
              constructor(uniformName, passIndex) {
                this.passIndex = _initializer$C && _initializer$C();
                this.uniformName = _initializer2$q && _initializer2$q();
                _initializerDefineProperty(this, "channelIndex", _descriptor$b, this);
                this.passIndex = passIndex || 0;
                this.uniformName = uniformName || '';
              }
              forTarget(target) {
                if (!(target instanceof Material)) {
                  warnID(3940, target);
                  return undefined;
                }
                const {
                  passIndex,
                  uniformName,
                  channelIndex
                } = this;
                if (passIndex < 0 || passIndex >= target.passes.length) {
                  warnID(3941, target.name, passIndex);
                  return undefined;
                }
                const pass = target.passes[passIndex];
                const handle = pass.getHandle(uniformName);
                if (!handle) {
                  warnID(3942, target.name, passIndex, uniformName);
                  return undefined;
                }
                const type = Pass.getTypeFromHandle(handle);
                if (type < Type.SAMPLER1D) {
                  const realHandle = channelIndex === undefined ? handle : pass.getHandle(uniformName, channelIndex, Type.FLOAT);
                  if (!realHandle) {
                    warnID(3943, target.name, passIndex, uniformName, channelIndex);
                    return undefined;
                  }
                  if (isUniformArray(pass, uniformName)) {
                    return {
                      set: value => {
                        pass.setUniformArray(realHandle, value);
                      }
                    };
                  }
                  return {
                    set: value => {
                      pass.setUniform(realHandle, value);
                    }
                  };
                } else {
                  const binding = Pass.getBindingFromHandle(handle);
                  const prop = pass.properties[uniformName];
                  const texName = prop && prop.value ? `${prop.value}${getStringFromType(prop.type)}` : getDefaultFromType(prop.type);
                  let dftTex = builtinResMgr.get(texName);
                  if (!dftTex) {
                    warn(`Illegal texture default value: ${texName}.`);
                    dftTex = builtinResMgr.get('default-texture');
                  }
                  return {
                    set: value => {
                      if (!value) {
                        value = dftTex;
                      }
                      const texture = value.getGFXTexture();
                      if (!texture || !texture.width || !texture.height) {
                        return;
                      }
                      pass.bindTexture(binding, texture);
                      if (value instanceof TextureBase) {
                        pass.bindSampler(binding, deviceManager.gfxDevice.getSampler(value.getSamplerInfo()));
                      }
                    }
                  };
                }
              }
            }, (_initializer$C = applyDecoratedInitializer(_class2$J.prototype, "passIndex", [serializable$d], function () {
              return 0;
            }), _initializer2$q = applyDecoratedInitializer(_class2$J.prototype, "uniformName", [serializable$d], function () {
              return '';
            }), _descriptor$b = _applyDecoratedDescriptor(_class2$J.prototype, "channelIndex", [float], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return undefined;
              }
            })), _class2$J)) || _class$R);
            function isUniformArray(pass, name) {
              for (const block of pass.shaderInfo.blocks) {
                for (const uniform of block.members) {
                  if (uniform.name === name) {
                    return uniform.count > 1;
                  }
                }
              }
              return false;
            }

            var _dec$Q, _class$Q, _class2$I, _initializer$B, _initializer2$p, _dec2$B, _class4$d, _class5$d, _initializer3$e, _dec3$p, _class7$3;
            let MorphWeightValueProxy = (_dec$Q = ccclass$g('cc.animation.MorphWeightValueProxy'), _dec$Q(_class$Q = (_class2$I = class MorphWeightValueProxy {
              constructor() {
                this.subMeshIndex = _initializer$B && _initializer$B();
                this.shapeIndex = _initializer2$p && _initializer2$p();
              }
              forTarget(target) {
                return {
                  set: value => {
                    target.setWeight(value, this.subMeshIndex, this.shapeIndex);
                  }
                };
              }
            }, (_initializer$B = applyDecoratedInitializer(_class2$I.prototype, "subMeshIndex", [serializable$d], function () {
              return 0;
            }), _initializer2$p = applyDecoratedInitializer(_class2$I.prototype, "shapeIndex", [serializable$d], function () {
              return 0;
            })), _class2$I)) || _class$Q);
            let MorphWeightsValueProxy = (_dec2$B = ccclass$g('cc.animation.MorphWeightsValueProxy'), _dec2$B(_class4$d = (_class5$d = class MorphWeightsValueProxy {
              constructor() {
                this.subMeshIndex = _initializer3$e && _initializer3$e();
              }
              forTarget(target) {
                return {
                  set: value => {
                    target.setWeights(value, this.subMeshIndex);
                  }
                };
              }
            }, (_initializer3$e = applyDecoratedInitializer(_class5$d.prototype, "subMeshIndex", [serializable$d], function () {
              return 0;
            })), _class5$d)) || _class4$d);
            let MorphWeightsAllValueProxy = (_dec3$p = ccclass$g('cc.animation.MorphWeightsAllValueProxy'), _dec3$p(_class7$3 = class MorphWeightsAllValueProxy {
              forTarget(target) {
                return {
                  set: value => {
                    var _target$mesh$struct$p, _target$mesh;
                    const nSubMeshes = (_target$mesh$struct$p = (_target$mesh = target.mesh) === null || _target$mesh === void 0 ? void 0 : _target$mesh.struct.primitives.length) !== null && _target$mesh$struct$p !== void 0 ? _target$mesh$struct$p : 0;
                    for (let iSubMesh = 0; iSubMesh < nSubMeshes; ++iSubMesh) {
                      target.setWeights(value, iSubMesh);
                    }
                  }
                };
              }
            }) || _class7$3);

            const ownerSymbol = Symbol('[[Owner]]');
            function assertsOwnedBy(mastered, owner) {
              assertIsTrue(mastered[ownerSymbol] === owner);
            }
            function own(mastered, owner) {
              {
                mastered[ownerSymbol] = owner;
              }
            }
            function markAsDangling(mastered) {
              {
                mastered[ownerSymbol] = undefined;
              }
            }

            let VariableType;
            (function (VariableType) {
              VariableType[VariableType["FLOAT"] = 0] = "FLOAT";
              VariableType[VariableType["BOOLEAN"] = 1] = "BOOLEAN";
              VariableType[VariableType["TRIGGER"] = 2] = "TRIGGER";
              VariableType[VariableType["INTEGER"] = 3] = "INTEGER";
              VariableType[VariableType["VEC3_experimental"] = 4] = "VEC3_experimental";
              VariableType[VariableType["QUAT_experimental"] = 5] = "QUAT_experimental";
            })(VariableType || (VariableType = {}));
            const createInstanceTag = Symbol('CreateInstance');
            class VarInstanceBase {
              constructor(type) {
                this._refs = [];
                this.type = type;
              }
              bind(fn, thisArg, ...args) {
                this._refs.push({
                  fn: fn,
                  thisArg,
                  args
                });
                return this.getValue();
              }
              get value() {
                return this.getValue();
              }
              set value(value) {
                this.setValue(value);
                for (const {
                  fn,
                  thisArg,
                  args
                } of this._refs) {
                  fn.call(thisArg, value, ...args);
                }
              }
            }

            var _dec$P, _class$P, _class2$H, _initializer$A, _initializer2$o;
            let PlainVariable = (_dec$P = ccclass$g('cc.animation.PlainVariable'), _dec$P(_class$P = (_class2$H = class PlainVariable {
              constructor(type) {
                this._type = _initializer$A && _initializer$A();
                this._value = _initializer2$o && _initializer2$o();
                if (typeof type === 'undefined') {
                  return;
                }
                this._type = type;
                switch (type) {
                  default:
                    break;
                  case VariableType.FLOAT:
                    this._value = 0.0;
                    break;
                  case VariableType.INTEGER:
                    this._value = 0;
                    break;
                  case VariableType.BOOLEAN:
                    this._value = false;
                    break;
                }
              }
              get type() {
                return this._type;
              }
              get value() {
                return this._value;
              }
              set value(value) {
                {
                  switch (this._type) {
                    default:
                      break;
                    case VariableType.FLOAT:
                      assertIsTrue(typeof value === 'number');
                      break;
                    case VariableType.INTEGER:
                      assertIsTrue(Number.isInteger(value));
                      break;
                    case VariableType.BOOLEAN:
                      assertIsTrue(typeof value === 'boolean');
                      break;
                  }
                }
                this._value = value;
              }
              [createInstanceTag]() {
                return new VarInstancePrimitive(this._type, this._value);
              }
            }, (_initializer$A = applyDecoratedInitializer(_class2$H.prototype, "_type", [serializable$d], function () {
              return VariableType.FLOAT;
            }), _initializer2$o = applyDecoratedInitializer(_class2$H.prototype, "_value", [serializable$d], function () {
              return 0.0;
            })), _class2$H)) || _class$P);
            class VarInstancePrimitive extends VarInstanceBase {
              constructor(type, value) {
                super(type);
                this._value = void 0;
                this._value = value;
              }
              getValue() {
                return this._value;
              }
              setValue(value) {
                this._value = value;
              }
            }

            var _dec$O, _class$O, _class2$G, _initializer$z;
            let TriggerResetMode;
            (function (TriggerResetMode) {
              TriggerResetMode[TriggerResetMode["AFTER_CONSUMED"] = 0] = "AFTER_CONSUMED";
              TriggerResetMode[TriggerResetMode["NEXT_FRAME_OR_AFTER_CONSUMED"] = 1] = "NEXT_FRAME_OR_AFTER_CONSUMED";
            })(TriggerResetMode || (TriggerResetMode = {}));
            const TRIGGER_VARIABLE_FLAG_VALUE_START = 0;
            const TRIGGER_VARIABLE_FLAG_VALUE_MASK = 1;
            const TRIGGER_VARIABLE_FLAG_RESET_MODE_START = 1;
            const TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK = 6;
            const TRIGGER_VARIABLE_DEFAULT_FLAGS = 0;
            assertIsTrue((0 << TRIGGER_VARIABLE_FLAG_VALUE_START | TriggerResetMode.AFTER_CONSUMED << TRIGGER_VARIABLE_FLAG_RESET_MODE_START) === TRIGGER_VARIABLE_DEFAULT_FLAGS);
            let TriggerVariable = (_dec$O = ccclass$g('cc.animation.TriggerVariable'), _dec$O(_class$O = (_class2$G = class TriggerVariable {
              constructor() {
                this._flags = _initializer$z && _initializer$z();
              }
              get type() {
                return VariableType.TRIGGER;
              }
              get value() {
                return !!((this._flags & TRIGGER_VARIABLE_FLAG_VALUE_MASK) >> TRIGGER_VARIABLE_FLAG_VALUE_START);
              }
              set value(value) {
                if (value) {
                  this._flags |= 1 << TRIGGER_VARIABLE_FLAG_VALUE_START;
                } else {
                  this._flags &= ~(1 << TRIGGER_VARIABLE_FLAG_VALUE_START);
                }
              }
              get resetMode() {
                return (this._flags & TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK) >> TRIGGER_VARIABLE_FLAG_RESET_MODE_START;
              }
              set resetMode(value) {
                this._flags &= ~TRIGGER_VARIABLE_FLAG_RESET_MODE_MASK;
                this._flags |= value << TRIGGER_VARIABLE_FLAG_RESET_MODE_START;
              }
              [createInstanceTag]() {
                return new VarInstanceTrigger(this.value, this.resetMode);
              }
            }, (_initializer$z = applyDecoratedInitializer(_class2$G.prototype, "_flags", [serializable$d], function () {
              return TRIGGER_VARIABLE_DEFAULT_FLAGS;
            })), _class2$G)) || _class$O);
            class VarInstanceTrigger extends VarInstanceBase {
              constructor(value, resetMode) {
                super(VariableType.TRIGGER);
                this.resetMode = TriggerResetMode.AFTER_CONSUMED;
                this._value = void 0;
                this.resetMode = resetMode;
                this._value = value;
              }
              getValue() {
                return this._value;
              }
              setValue(value) {
                this._value = value;
              }
            }

            var _dec$N, _class$N, _class2$F, _initializer$y;
            let Vec3Variable = (_dec$N = ccclass$g('cc.animation.Vec3Variable'), _dec$N(_class$N = (_class2$F = class Vec3Variable {
              constructor() {
                this._value = _initializer$y && _initializer$y();
              }
              get type() {
                return VariableType.VEC3_experimental;
              }
              get value() {
                return this._value;
              }
              set value(value) {
                Vec3.copy(this._value, value);
              }
              [createInstanceTag]() {
                return new VarInstanceVec3(this.value);
              }
            }, (_initializer$y = applyDecoratedInitializer(_class2$F.prototype, "_value", [serializable$d], function () {
              return new Vec3();
            })), _class2$F)) || _class$N);
            class VarInstanceVec3 extends VarInstanceBase {
              constructor(value) {
                super(VariableType.VEC3_experimental);
                this._value = new Vec3();
                Vec3.copy(this._value, value);
              }
              getValue() {
                return this._value;
              }
              setValue(value) {
                assertIsTrue(value instanceof Vec3);
                Vec3.copy(this._value, value);
              }
            }

            var _dec$M, _class$M, _class2$E, _initializer$x;
            let QuatVariable = (_dec$M = ccclass$g('cc.animation.QuatVariable'), _dec$M(_class$M = (_class2$E = class QuatVariable {
              constructor() {
                this._value = _initializer$x && _initializer$x();
              }
              get type() {
                return VariableType.QUAT_experimental;
              }
              get value() {
                return this._value;
              }
              set value(value) {
                Quat.copy(this._value, value);
              }
              [createInstanceTag]() {
                return new VarInstanceQuat(this._value);
              }
            }, (_initializer$x = applyDecoratedInitializer(_class2$E.prototype, "_value", [serializable$d], function () {
              return new Quat();
            })), _class2$E)) || _class$M);
            class VarInstanceQuat extends VarInstanceBase {
              constructor(value) {
                super(VariableType.QUAT_experimental);
                this._value = new Quat();
                Quat.copy(this._value, value);
              }
              getValue() {
                return this._value;
              }
              setValue(value) {
                assertIsTrue(value instanceof Quat);
                Quat.copy(this._value, value);
              }
            }

            function createVariable(type, initialValue) {
              let variable;
              switch (type) {
                case VariableType.FLOAT:
                case VariableType.INTEGER:
                case VariableType.BOOLEAN:
                  variable = new PlainVariable(type);
                  break;
                case VariableType.TRIGGER:
                  variable = new TriggerVariable();
                  break;
                case VariableType.VEC3_experimental:
                  variable = new Vec3Variable();
                  break;
                case VariableType.QUAT_experimental:
                  variable = new QuatVariable();
                  break;
                default:
                  throw new Error(`Unknown variable type ${type}`);
              }
              if (typeof initialValue !== 'undefined') {
                variable.value = initialValue;
              }
              return variable;
            }

            class InvalidTransitionError extends Error {
              constructor(type) {
                super(`${type} transition is invalid`);
                this.name = 'TransitionRejectError';
              }
            }
            class VariableNotDefinedError extends Error {
              constructor(name) {
                super(`Graph variable ${name} is not defined`);
              }
            }
            class VariableTypeMismatchedError extends Error {
              constructor(name, expected, received) {
                super(`Expect graph variable ${name} to have type '${expected}' instead of received '${received !== null && received !== void 0 ? received : typeof received}'`);
              }
            }

            function cloneAnimationGraphEditorExtrasFrom(object) {
              const editorExtras = object[editorExtrasTag];
              if (typeof editorExtras === 'object' && editorExtras) {
                var _maybeCloneableEditor;
                const maybeCloneableEditorExtras = editorExtras;
                return (_maybeCloneableEditor = maybeCloneableEditorExtras.clone) === null || _maybeCloneableEditor === void 0 ? void 0 : _maybeCloneableEditor.call(maybeCloneableEditorExtras, object);
              }
              return undefined;
            }

            var _dec$L, _class$L, _class2$D, _initializer$w, _dec2$A, _class4$c, _class5$c, _initializer2$n;
            const outgoingsSymbol = Symbol('[[Outgoing transitions]]');
            const incomingsSymbol = Symbol('[[Incoming transitions]]');
            const {
              ccclass: ccclass$e,
              serializable: serializable$b
            } = _decorator;
            let State = (_dec$L = ccclass$e('cc.animation.State'), _dec$L(_class$L = (_class2$D = class State extends EditorExtendable {
              constructor() {
                super();
                this.name = _initializer$w && _initializer$w();
                this[outgoingsSymbol] = [];
                this[incomingsSymbol] = [];
              }
              copyTo(that) {
                that.name = this.name;
                that[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(this);
              }
            }, (_initializer$w = applyDecoratedInitializer(_class2$D.prototype, "name", [serializable$b], function () {
              return '';
            })), _class2$D)) || _class$L);
            let InteractiveState = (_dec2$A = ccclass$e(`${CLASS_NAME_PREFIX_ANIM}InteractiveState`), _dec2$A(_class4$c = (_class5$c = class InteractiveState extends State {
              constructor(...args) {
                super(...args);
                this._components = _initializer2$n && _initializer2$n();
              }
              get components() {
                return this._components;
              }
              addComponent(constructor) {
                const component = new constructor();
                this._components.push(component);
                return component;
              }
              removeComponent(component) {
                remove(this._components, component);
              }
              instantiateComponents() {
                const instantiatedComponents = this._components.map(component => {
                  const instantiated = instantiate(component);
                  return instantiated;
                });
                return instantiatedComponents;
              }
              copyTo(that) {
                super.copyTo(that);
                that._components = this.instantiateComponents();
              }
            }, (_initializer2$n = applyDecoratedInitializer(_class5$c.prototype, "_components", [serializable$b], function () {
              return [];
            })), _class5$c)) || _class4$c);

            var _dec$K, _class$K, _class2$C, _initializer$v;
            let AnimationGraphEventBinding = (_dec$K = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}AnimationGraphEventBinding`), _dec$K(_class$K = (_class2$C = class AnimationGraphEventBinding {
              constructor() {
                this.methodName = _initializer$v && _initializer$v();
              }
              get isBound() {
                return !!this.methodName;
              }
              emit(origin) {
                if (!this.methodName) {
                  return;
                }
                invokeComponentMethodsEngagedInAnimationEvent(origin, this.methodName, []);
              }
              copyTo(that) {
                that.methodName = this.methodName;
                return this;
              }
            }, (_initializer$v = applyDecoratedInitializer(_class2$C.prototype, "methodName", [serializable$d], function () {
              return '';
            })), _class2$C)) || _class$K);

            var _dec$J, _class$J, _class2$B, _initializer$u, _initializer2$m, _initializer3$d, _initializer4$9, _initializer5$5, _initializer6$2;
            let MotionState = (_dec$J = ccclass$g('cc.animation.Motion'), _dec$J(_class$J = (_class2$B = class MotionState extends InteractiveState {
              constructor(...args) {
                super(...args);
                this.motion = _initializer$u && _initializer$u();
                this.speed = _initializer2$m && _initializer2$m();
                this.speedMultiplier = _initializer3$d && _initializer3$d();
                this.speedMultiplierEnabled = _initializer4$9 && _initializer4$9();
                this.transitionInEventBinding = _initializer5$5 && _initializer5$5();
                this.transitionOutEventBinding = _initializer6$2 && _initializer6$2();
              }
              __callOnAfterDeserializeRecursive() {
                var _this$motion;
                (_this$motion = this.motion) === null || _this$motion === void 0 ? void 0 : _this$motion.__callOnAfterDeserializeRecursive();
              }
              copyTo(that) {
                var _this$motion$clone, _this$motion2;
                super.copyTo(that);
                that.motion = (_this$motion$clone = (_this$motion2 = this.motion) === null || _this$motion2 === void 0 ? void 0 : _this$motion2.clone()) !== null && _this$motion$clone !== void 0 ? _this$motion$clone : null;
                that.speed = this.speed;
                that.speedMultiplier = this.speedMultiplier;
                that.speedMultiplierEnabled = this.speedMultiplierEnabled;
                this.transitionInEventBinding.copyTo(that.transitionInEventBinding);
                this.transitionOutEventBinding.copyTo(that.transitionOutEventBinding);
                return this;
              }
            }, (_initializer$u = applyDecoratedInitializer(_class2$B.prototype, "motion", [serializable$d], function () {
              return null;
            }), _initializer2$m = applyDecoratedInitializer(_class2$B.prototype, "speed", [serializable$d], function () {
              return 1.0;
            }), _initializer3$d = applyDecoratedInitializer(_class2$B.prototype, "speedMultiplier", [serializable$d], function () {
              return '';
            }), _initializer4$9 = applyDecoratedInitializer(_class2$B.prototype, "speedMultiplierEnabled", [serializable$d], function () {
              return false;
            }), _initializer5$5 = applyDecoratedInitializer(_class2$B.prototype, "transitionInEventBinding", [serializable$d], function () {
              return new AnimationGraphEventBinding();
            }), _initializer6$2 = applyDecoratedInitializer(_class2$B.prototype, "transitionOutEventBinding", [serializable$d], function () {
              return new AnimationGraphEventBinding();
            })), _class2$B)) || _class$J);

            const onAfterDeserializedTag = Symbol('[[OnAfterDeserialized]]');

            var _dec$I, _class$I;
            let AnimationGraphLike = (_dec$I = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}AnimationGraphLike`), _dec$I(_class$I = class AnimationGraphLike extends Asset {}) || _class$I);

            function renameObjectProperty(object, originalPropertyKey, newPropertyKey) {
              const {
                propertyIsEnumerable
              } = Object.prototype;
              if (!propertyIsEnumerable.call(object, originalPropertyKey)) {
                return object;
              }
              if (newPropertyKey in object) {
                return object;
              }
              const result = {};
              if (typeof originalPropertyKey === 'symbol') {
                Object.entries(object).forEach(([k, v]) => {
                  result[k] = v;
                });
                Object.getOwnPropertySymbols(object).forEach(k => {
                  if (!propertyIsEnumerable.call(object, k)) {
                    return;
                  }
                  result[k === originalPropertyKey ? newPropertyKey : k] = object[k];
                });
              } else {
                Object.entries(object).forEach(([k, v]) => {
                  result[k === originalPropertyKey ? newPropertyKey : k] = v;
                });
                Object.getOwnPropertySymbols(object).forEach(k => {
                  if (!propertyIsEnumerable.call(object, k)) {
                    return;
                  }
                  result[k] = object[k];
                });
              }
              return result;
            }
            const createInstanceofProxy = (() => {
              let isSymbolHasInstanceAvailable = false;
              try {
                class Array1 {
                  static [Symbol.hasInstance](instance) {
                    return Array.isArray(instance);
                  }
                }
                isSymbolHasInstanceAvailable = [] instanceof Array1;
              } catch {
                isSymbolHasInstanceAvailable = false;
              }
              if (!isSymbolHasInstanceAvailable) {
                return constructor => constructor;
              }
              return constructor => {
                function InstanceOfProxy() {
                  throw new Error(`This function can not be called as a constructor.`);
                }
                Object.defineProperty(InstanceOfProxy, Symbol.hasInstance, {
                  value(instance) {
                    return instance instanceof constructor;
                  }
                });
                return InstanceOfProxy;
              };
            })();

            var _dec$H, _class$H, _class2$A, _initializer$t, _dec2$z, _class4$b, _class5$b, _initializer2$l, _initializer3$c, _initializer4$8;
            let PoseGraphNodeShell = (_dec$H = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseGraphNodeShell`), _dec$H(_class$H = (_class2$A = class PoseGraphNodeShell extends EditorExtendable {
              constructor(...args) {
                super(...args);
                this._bindings = _initializer$t && _initializer$t();
              }
              getBindings() {
                return this._bindings;
              }
              addBinding(inputPath, producer, outputIndex) {
                this._emplaceBinding(new PoseGraphNodeInputBinding(inputPath, producer, outputIndex));
              }
              deleteBinding(inputPath) {
                const index = this._findBindingIndex(inputPath);
                if (index >= 0) {
                  this._bindings.splice(index, 1);
                }
              }
              moveArrayElementBindingForward(propertyKey, firstIndex, forward) {
                const {
                  _bindings: bindings
                } = this;
                const oldBindings = [];
                for (let iBinding = 0; iBinding < bindings.length; ++iBinding) {
                  const binding = bindings[iBinding];
                  const [consumerPropertyKey, consumerElementIndex = -1] = binding.inputPath;
                  if (consumerPropertyKey === propertyKey && consumerElementIndex >= firstIndex) {
                    oldBindings.push(binding);
                    bindings.splice(iBinding, 1);
                  }
                }
                for (const oldBinding of oldBindings) {
                  const [consumerPropertyKey, consumerElementIndex = -1] = oldBinding.inputPath;
                  this.addBinding([consumerPropertyKey, consumerElementIndex + (forward ? -1 : 1)], oldBinding.producer, oldBinding.outputIndex);
                }
              }
              deleteBindingTo(producer) {
                const {
                  _bindings: bindings
                } = this;
                for (let iBinding = 0; iBinding < bindings.length; ++iBinding) {
                  const binding = bindings[iBinding];
                  if (binding.producer === producer) {
                    bindings.splice(iBinding, 1);
                  }
                }
              }
              findBinding(inputPath) {
                const bindingIndex = this._findBindingIndex(inputPath);
                return bindingIndex >= 0 ? this._bindings[bindingIndex] : undefined;
              }
              _findBindingIndex(inputPath) {
                return this._bindings.findIndex(searchElement => isEqualNodeInputPath(searchElement.inputPath, inputPath));
              }
              _emplaceBinding(binding) {
                const index = this._bindings.findIndex(searchElement => isEqualNodeInputPath(searchElement.inputPath, binding.inputPath));
                if (index >= 0) {
                  this._bindings[index] = binding;
                } else {
                  this._bindings.push(binding);
                }
              }
            }, (_initializer$t = applyDecoratedInitializer(_class2$A.prototype, "_bindings", [serializable$d], function () {
              return [];
            })), _class2$A)) || _class$H);
            function isEqualNodeInputPath(lhs, rhs) {
              const [lhsPropertyKey, lhsElementIndex] = lhs;
              const [rhsPropertyKey, rhsElementIndex] = rhs;
              return lhsPropertyKey === rhsPropertyKey && lhsElementIndex === rhsElementIndex;
            }
            let PoseGraphNodeInputBinding = (_dec2$z = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseGraphNodeInputBinding`), _dec2$z(_class4$b = (_class5$b = class PoseGraphNodeInputBinding {
              constructor(inputPath, producer, outputIndex) {
                this._inputPath = _initializer2$l && _initializer2$l();
                this._producer = _initializer3$c && _initializer3$c();
                this._outputIndex = _initializer4$8 && _initializer4$8();
                this._inputPath = inputPath;
                this._producer = producer;
                if (typeof outputIndex !== 'undefined') {
                  this._outputIndex = outputIndex;
                }
              }
              get inputPath() {
                return this._inputPath;
              }
              get producer() {
                return this._producer;
              }
              get outputIndex() {
                return this._outputIndex;
              }
            }, (_initializer2$l = applyDecoratedInitializer(_class5$b.prototype, "_inputPath", [serializable$d], null), _initializer3$c = applyDecoratedInitializer(_class5$b.prototype, "_producer", [serializable$d], null), _initializer4$8 = applyDecoratedInitializer(_class5$b.prototype, "_outputIndex", [serializable$d], function () {
              return 0;
            })), _class5$b)) || _class4$b);

            class AddNonFreestandingNodeError extends Error {
              constructor(node) {
                super(`Can not add the specified ${node.toString()} since it has already been added into another graph.`);
              }
            }
            class OperationOnFreestandingNodeError extends Error {
              constructor(node) {
                super(`Can not perform specified operation on ${node.toString()} since it has not been added in to graph.`);
              }
            }

            let PoseGraphType;
            (function (PoseGraphType) {
              PoseGraphType[PoseGraphType["FLOAT"] = 0] = "FLOAT";
              PoseGraphType[PoseGraphType["INTEGER"] = 1] = "INTEGER";
              PoseGraphType[PoseGraphType["BOOLEAN"] = 2] = "BOOLEAN";
              PoseGraphType[PoseGraphType["VEC3"] = 3] = "VEC3";
              PoseGraphType[PoseGraphType["QUAT"] = 4] = "QUAT";
              PoseGraphType[PoseGraphType["POSE"] = 5] = "POSE";
            })(PoseGraphType || (PoseGraphType = {}));

            class PoseGraphNode extends EditorExtendable {}

            const nodeEditorMetadataMap = new WeakMap();
            function getOrCreateNodeEditorMetadata(constructor) {
              const existing = nodeEditorMetadataMap.get(constructor);
              if (existing) {
                return existing;
              } else {
                const metadata = {};
                nodeEditorMetadataMap.set(constructor, metadata);
                return metadata;
              }
            }

            function makeNodeEditorMetadataModifier(edit) {
              return target => {
                if (!checkDecoratingClass(target)) {
                  return;
                }
                const metadata = getOrCreateNodeEditorMetadata(target);
                edit(metadata);
              };
            }
            const poseGraphNodeCategory = category => makeNodeEditorMetadataModifier(metadata => {
              metadata.category = category;
            });
            const poseGraphCreateNodeFactory = factory => makeNodeEditorMetadataModifier(metadata => {
              metadata.factory = factory;
            });
            const poseGraphNodeHide = (hide = true) => makeNodeEditorMetadataModifier(metadata => {
              metadata.hide = hide;
            });
            const poseGraphNodeAppearance = appearance => makeNodeEditorMetadataModifier(metadata => {
              var _metadata$appearance;
              Object.assign((_metadata$appearance = metadata.appearance) !== null && _metadata$appearance !== void 0 ? _metadata$appearance : metadata.appearance = {}, appearance);
            });
            function checkDecoratingClass(fn) {
              if (!isChildClassOf(fn, PoseGraphNode)) {
                error(`This kind of decorator should only be applied to pose graph node classes.`);
                return false;
              }
              return true;
            }

            class PoseGraphNodeInputManager {
              constructor() {
                this._classInputMap = new WeakMap();
              }
              setPropertyNodeInputRecord(constructor, propertyKey, options) {
                let classInputRecord = this._classInputMap.get(constructor);
                if (!classInputRecord) {
                  classInputRecord = {
                    properties: {}
                  };
                  this._classInputMap.set(constructor, classInputRecord);
                }
                const {
                  arraySyncGroup,
                  ...unchanged
                } = options;
                const record = unchanged;
                const arraySyncGroupName = options.arraySyncGroup;
                if (arraySyncGroupName) {
                  var _classInputRecord$arr, _classInputRecord$arr2;
                  if (!classInputRecord.arraySyncGroups) {
                    classInputRecord.arraySyncGroups = {};
                  }
                  const group = (_classInputRecord$arr2 = (_classInputRecord$arr = classInputRecord.arraySyncGroups)[arraySyncGroupName]) !== null && _classInputRecord$arr2 !== void 0 ? _classInputRecord$arr2 : _classInputRecord$arr[arraySyncGroupName] = {
                    members: []
                  };
                  if (!group.members.includes(propertyKey)) {
                    group.members.push(propertyKey);
                  }
                  record.arraySyncGroup = group;
                }
                classInputRecord.properties[propertyKey] = Object.freeze(record);
              }
              getInputKeys(object) {
                const result = [];
                const getInputKeysRecurse = constructor => {
                  if (!constructor) {
                    return;
                  }
                  getInputKeysRecurse(getSuper(constructor));
                  const record = this._classInputMap.get(constructor);
                  if (!record) {
                    return;
                  }
                  for (const [propertyKey] of Object.entries(record.properties)) {
                    if (result.findIndex(([subClassPropertyKey]) => propertyKey === subClassPropertyKey) >= 0) {
                      continue;
                    }
                    const field = object[propertyKey];
                    if (Array.isArray(field)) {
                      for (let iElement = 0; iElement < field.length; ++iElement) {
                        result.push([propertyKey, iElement]);
                      }
                    } else {
                      result.push([propertyKey]);
                    }
                  }
                };
                getInputKeysRecurse(object.constructor);
                return result;
              }
              isPoseInput(object, key) {
                const [propertyKey] = key;
                const propertyInputRecord = this._getPropertyNodeInputRecord(object.constructor, propertyKey);
                if (!propertyInputRecord) {
                  return false;
                }
                return propertyInputRecord.type === PoseGraphType.POSE;
              }
              getInputMetadata(object, key) {
                const [propertyKey, elementIndex = -1] = key;
                const propertyInputRecord = this._getPropertyNodeInputRecord(object.constructor, propertyKey);
                if (!propertyInputRecord) {
                  return undefined;
                }
                const field = object[propertyKey];
                if (Array.isArray(field)) {
                  if (elementIndex < 0 || elementIndex >= field.length) {
                    return undefined;
                  } else {
                    var _propertyInputRecord$, _propertyInputRecord$2;
                    const displayName = (_propertyInputRecord$ = (_propertyInputRecord$2 = propertyInputRecord.getArrayElementDisplayName) === null || _propertyInputRecord$2 === void 0 ? void 0 : _propertyInputRecord$2.call(object, elementIndex)) !== null && _propertyInputRecord$ !== void 0 ? _propertyInputRecord$ : propertyInputRecord.displayName;
                    return {
                      type: propertyInputRecord.type,
                      displayName,
                      deletable: !(propertyInputRecord.arraySyncGroup && propertyInputRecord.arraySyncGroupFollower),
                      insertPoint: true
                    };
                  }
                }
                return {
                  type: propertyInputRecord.type,
                  displayName: propertyInputRecord.displayName
                };
              }
              hasInput(object, key) {
                const [propertyKey, elementIndex = -1] = key;
                const record = this._getPropertyNodeInputRecord(object.constructor, propertyKey);
                if (!record) {
                  return false;
                }
                const field = object[propertyKey];
                if (Array.isArray(field)) {
                  if (elementIndex < 0 || elementIndex >= field.length) {
                    return false;
                  }
                }
                return true;
              }
              getInputInsertInfos(object) {
                const result = {};
                for (let constructor = object.constructor; constructor; constructor = getSuper(constructor)) {
                  const classInputRecord = this._classInputMap.get(constructor);
                  if (!classInputRecord) {
                    continue;
                  }
                  for (const propertyKey in classInputRecord.properties) {
                    const propertyInputRecord = classInputRecord.properties[propertyKey];
                    const property = object[propertyKey];
                    if (Array.isArray(property)) {
                      if (propertyInputRecord.arraySyncGroup && propertyInputRecord.arraySyncGroupFollower) {
                        continue;
                      }
                      result[propertyKey] = {
                        displayName: propertyKey
                      };
                    }
                  }
                }
                return result;
              }
              deleteInput(graph, node, key) {
                const [propertyKey, elementIndex = -1] = key;
                const propertyInputRecord = this._getPropertyNodeInputRecord(node.constructor, propertyKey);
                if (!propertyInputRecord) {
                  return;
                }
                const property = node[propertyKey];
                if (!Array.isArray(property)) {
                  return;
                }
                if (elementIndex < 0 || elementIndex >= property.length) {
                  return;
                }
                {
                  const {
                    arraySyncGroup
                  } = propertyInputRecord;
                  if (arraySyncGroup) {
                    this._deleteInputInArraySyncGroup(graph, node, arraySyncGroup, property.length, elementIndex);
                    return;
                  }
                }
                deletePoseGraphNodeArrayElement(graph, node, key);
              }
              insertInput(graph, node, insertId) {
                const propertyKey = insertId;
                const propertyInputRecord = this._getPropertyNodeInputRecord(node.constructor, propertyKey);
                if (!propertyInputRecord) {
                  return;
                }
                const property = node[propertyKey];
                if (!Array.isArray(property)) {
                  return;
                }
                const hint = property.length;
                {
                  const {
                    arraySyncGroup
                  } = propertyInputRecord;
                  if (arraySyncGroup) {
                    this._insertInputInArraySyncGroup(graph, node, arraySyncGroup, property.length, hint);
                    return;
                  }
                }
                insertPoseGraphNodeArrayElement(graph, node, [propertyKey, hint], createDefaultInputValueByType(propertyInputRecord.type));
              }
              _getPropertyNodeInputRecord(constructor, propertyKey) {
                if (!constructor) {
                  return undefined;
                }
                const classInputRecord = this._classInputMap.get(constructor);
                if (classInputRecord) {
                  const record = classInputRecord.properties[propertyKey];
                  if (record) {
                    return record;
                  }
                }
                return this._getPropertyNodeInputRecord(getSuper(constructor), propertyKey);
              }
              _insertInputInArraySyncGroup(graph, node, syncGroup, expectedOriginalSyncLength, insertHint) {
                for (let iGroupMember = 0; iGroupMember < syncGroup.members.length; ++iGroupMember) {
                  const syncedPropertyKey = syncGroup.members[iGroupMember];
                  const syncedPropertyInputRecord = this._getPropertyNodeInputRecord(node.constructor, syncedPropertyKey);
                  assertIsTrue(syncedPropertyInputRecord);
                  const syncedProperty = node[syncedPropertyKey];
                  if (!Array.isArray(syncedProperty) || syncedProperty.length !== expectedOriginalSyncLength) {
                    continue;
                  }
                  insertPoseGraphNodeArrayElement(graph, node, [syncedPropertyKey, insertHint], createDefaultInputValueByType(syncedPropertyInputRecord.type));
                }
              }
              _deleteInputInArraySyncGroup(graph, node, syncGroup, expectedOriginalSyncLength, index) {
                for (let iGroupMember = 0; iGroupMember < syncGroup.members.length; ++iGroupMember) {
                  const syncedPropertyKey = syncGroup.members[iGroupMember];
                  const syncedPropertyInputRecord = this._getPropertyNodeInputRecord(node.constructor, syncedPropertyKey);
                  assertIsTrue(syncedPropertyInputRecord);
                  const syncedProperty = node[syncedPropertyKey];
                  if (!Array.isArray(syncedProperty) || syncedProperty.length !== expectedOriginalSyncLength) {
                    continue;
                  }
                  deletePoseGraphNodeArrayElement(graph, node, [syncedPropertyKey, index]);
                }
              }
            }
            function insertPoseGraphNodeArrayElement(graph, node, inputKey, value) {
              const shell = graph.getShell(node);
              if (!shell) {
                throw new OperationOnFreestandingNodeError(node);
              }
              const [propertyKey, elementIndex = -1] = inputKey;
              const property = node[propertyKey];
              if (!Array.isArray(property)) {
                return;
              }
              property.splice(elementIndex, 0, value);
              shell.moveArrayElementBindingForward(propertyKey, elementIndex + 1, false);
            }
            function deletePoseGraphNodeArrayElement(graph, node, inputKey) {
              const shell = graph.getShell(node);
              if (!shell) {
                throw new OperationOnFreestandingNodeError(node);
              }
              const [propertyKey, elementIndex = -1] = inputKey;
              const property = node[propertyKey];
              if (!Array.isArray(property)) {
                return;
              }
              if (elementIndex < 0 || elementIndex >= property.length) {
                return;
              }
              shell.deleteBinding(inputKey);
              property.splice(elementIndex, 1);
              shell.moveArrayElementBindingForward(propertyKey, elementIndex + 1, true);
            }
            function createDefaultInputValueByType(type) {
              switch (type) {
                default:
                  assertIsTrue(false);
                case PoseGraphType.FLOAT:
                case PoseGraphType.INTEGER:
                  return 0;
                case PoseGraphType.BOOLEAN:
                  return false;
                case PoseGraphType.POSE:
                  return null;
                case PoseGraphType.VEC3:
                  return new Vec3();
                case PoseGraphType.QUAT:
                  return new Quat();
              }
            }
            const globalPoseGraphNodeInputManager = new PoseGraphNodeInputManager();

            var _class$G;
            const CACHE_VECTOR_A = new Vec3();
            const CACHE_VECTOR_B = new Vec3();
            const CACHE_QUAT_A = new Quat();
            new Quat();
            class Transform {
              constructor() {
                this._position = new Vec3();
                this._rotation = new Quat();
                this._scale = Vec3.clone(Vec3.ONE);
              }
              get position() {
                return this._position;
              }
              set position(value) {
                Vec3.copy(this._position, value);
              }
              get rotation() {
                return this._rotation;
              }
              set rotation(value) {
                Quat.copy(this._rotation, value);
              }
              get scale() {
                return this._scale;
              }
              set scale(value) {
                Vec3.copy(this._scale, value);
              }
              static clone(src) {
                const transform = new Transform();
                Transform.copy(transform, src);
                return transform;
              }
              static setIdentity(out) {
                Vec3.copy(out._position, Vec3.ZERO);
                Quat.copy(out._rotation, Quat.IDENTITY);
                Vec3.copy(out._scale, Vec3.ONE);
                return out;
              }
              static copy(out, src) {
                Vec3.copy(out._position, src._position);
                Quat.copy(out._rotation, src._rotation);
                Vec3.copy(out._scale, src._scale);
                return out;
              }
              static equals(a, b, epsilon) {
                return Vec3.equals(a._position, b._position, epsilon) && Quat.equals(a._rotation, b._rotation, epsilon) && Vec3.equals(a._scale, b._scale, epsilon);
              }
              static strictEquals(a, b) {
                return Vec3.strictEquals(a._position, b._position) && Quat.strictEquals(a._rotation, b._rotation) && Vec3.strictEquals(a._scale, b._scale);
              }
              static lerp(out, from, to, t) {
                if (t === 0.0) {
                  return Transform.copy(out, from);
                }
                if (t === 1.0) {
                  return Transform.copy(out, to);
                }
                Vec3.lerp(out._position, from._position, to._position, t);
                Quat.slerp(out._rotation, from._rotation, to._rotation, t);
                Vec3.lerp(out._scale, from._scale, to._scale, t);
                return out;
              }
              static multiply(out, second, first) {
                const cacheRotation = Quat.multiply(CACHE_QUAT_A, second._rotation, first._rotation);
                const cacheScale = Vec3.multiply(CACHE_VECTOR_A, first._scale, second._scale);
                const cachePosition = Vec3.multiply(CACHE_VECTOR_B, first._position, second._scale);
                Vec3.transformQuat(cachePosition, cachePosition, second._rotation);
                Vec3.add(cachePosition, cachePosition, second._position);
                Vec3.copy(out._position, cachePosition);
                Quat.copy(out._rotation, cacheRotation);
                Vec3.copy(out._scale, cacheScale);
                return out;
              }
              static invert(out, transform) {
                const {
                  _rotation: invRotation,
                  _scale: invScale,
                  _position: invPosition
                } = out;
                Quat.invert(invRotation, transform._rotation);
                invScaleOrZero(invScale, transform._scale, EPSILON);
                Vec3.negate(invPosition, transform._position);
                Vec3.multiply(invPosition, invPosition, invScale);
                Vec3.transformQuat(invPosition, invPosition, invRotation);
                return out;
              }
              static fromMatrix(out, matrix) {
                Mat4.toSRT(matrix, out._rotation, out._position, out._scale);
                return out;
              }
              static toMatrix(out, transform) {
                return Mat4.fromSRT(out, transform._rotation, transform._position, transform._scale);
              }
            }
            _class$G = Transform;
            Transform.IDENTITY = Object.freeze(new _class$G());
            Transform.ZERO = Object.freeze((() => {
              const transform = new _class$G();
              Vec3.copy(transform._position, Vec3.ZERO);
              Quat.set(transform._rotation, 0.0, 0.0, 0.0, 0.0);
              Vec3.copy(transform._scale, Vec3.ZERO);
              return transform;
            })());
            Transform.calculateRelative = (() => {
              const cacheInvRotation = new Quat();
              const cacheInvScale = new Vec3();
              return (out, first, second) => {
                const invSecondRotation = Quat.invert(cacheInvRotation, second._rotation);
                const invScale = invScaleOrZero(cacheInvScale, second._scale, EPSILON);
                const cachePosition = Vec3.subtract(CACHE_VECTOR_B, first._position, second._position);
                Vec3.transformQuat(cachePosition, cachePosition, invSecondRotation);
                Vec3.multiply(cachePosition, cachePosition, invScale);
                Vec3.copy(out._position, cachePosition);
                Quat.multiply(out._rotation, invSecondRotation, first._rotation);
                Vec3.multiply(out._scale, first._scale, invScale);
                return out;
              };
            })();
            function invScaleOrZero(out, scale, epsilon) {
              const {
                x,
                y,
                z
              } = scale;
              return Vec3.set(out, Math.abs(x) <= epsilon ? 0.0 : 1.0 / x, Math.abs(y) <= epsilon ? 0.0 : 1.0 / y, Math.abs(z) <= epsilon ? 0.0 : 1.0 / z);
            }
            function __calculateDeltaTransform(out, target, base) {
              Vec3.subtract(out.position, target.position, base.position);
              deltaQuat(out.rotation, base.rotation, target.rotation);
              Vec3.subtract(out.scale, target.scale, base.scale);
              return out;
            }
            const __applyDeltaTransform = (() => {
              const cacheQuat = new Quat();
              return (out, base, delta, alpha) => {
                Vec3.scaleAndAdd(out.position, base.position, delta.position, alpha);
                const weightedDeltaRotation = Quat.slerp(cacheQuat, Quat.IDENTITY, delta.rotation, alpha);
                Quat.multiply(out.rotation, weightedDeltaRotation, base.rotation);
                Vec3.scaleAndAdd(out.scale, base.scale, delta.scale, alpha);
                return out;
              };
            })();
            const deltaQuat = (() => {
              const quatMultiInvInverseCache = new Quat();
              return (out, from, to) => {
                const fromInv = Quat.invert(quatMultiInvInverseCache, from);
                return Quat.multiply(out, to, fromInv);
              };
            })();
            const ZERO_DELTA_TRANSFORM = Object.freeze((() => {
              const transform = new Transform();
              transform.position = Vec3.ZERO;
              transform.rotation = Quat.IDENTITY;
              transform.scale = Vec3.ZERO;
              return transform;
            })());

            class Pose {
              constructor(transforms, auxiliaryCurves) {
                this.transforms = void 0;
                this.auxiliaryCurves = void 0;
                this._poseTransformSpace = PoseTransformSpace.LOCAL;
                this.transforms = transforms;
                this.auxiliaryCurves = auxiliaryCurves;
              }
              static _create(transforms, auxiliaryCurves) {
                return new Pose(transforms, auxiliaryCurves);
              }
            }
            let PoseTransformSpace;
            (function (PoseTransformSpace) {
              PoseTransformSpace[PoseTransformSpace["LOCAL"] = 0] = "LOCAL";
              PoseTransformSpace[PoseTransformSpace["COMPONENT"] = 1] = "COMPONENT";
            })(PoseTransformSpace || (PoseTransformSpace = {}));
            class TransformFilter {
              constructor(involvedTransforms) {
                {
                  assertIsTrue(involvedTransforms.every(transformIndex => transformIndex < 2 ** 16), 'The number of transforms exceeds the max allowed(2 ** 16)');
                }
                this._involvedTransforms = new Uint16Array(involvedTransforms);
              }
              get involvedTransforms() {
                return this._involvedTransforms;
              }
            }
            function blendPoseInto(target, source, alpha, transformFilter = undefined) {
              blendTransformsInto(target.transforms, source.transforms, alpha, transformFilter);
              blendAuxiliaryCurvesInto(target.auxiliaryCurves, source.auxiliaryCurves, alpha);
            }
            function blendTransformsInto(target, source, alpha, transformFilter = undefined) {
              const nTransforms = target.length;
              assertIsTrue(nTransforms === target.length);
              if (alpha === 0) {
                return;
              } else if (alpha === 1) {
                if (!transformFilter) {
                  target.set(source);
                } else {
                  copyTransformsWithFilter(target, source, transformFilter);
                }
                return;
              }
              if (!transformFilter) {
                for (let iTransform = 0; iTransform < nTransforms; ++iTransform) {
                  blendIntoTransformArrayAt(target, source, alpha, iTransform);
                }
              } else {
                for (let index = 0; index < transformFilter.involvedTransforms.length; ++index) {
                  const involvedTransformIndex = transformFilter.involvedTransforms[index];
                  blendIntoTransformArrayAt(target, source, alpha, involvedTransformIndex);
                }
              }
            }
            function copyTransformsWithFilter(target, source, filter) {
              const nTransforms = target.length;
              assertIsTrue(nTransforms === target.length);
              for (let index = 0; index < filter.involvedTransforms.length; ++index) {
                const involvedTransformIndex = filter.involvedTransforms[index];
                target.copyRange(involvedTransformIndex, source, involvedTransformIndex, 1);
              }
            }
            const blendIntoTransformArrayAt = (() => {
              const cacheTransformSource = new Transform();
              const cacheTransformTarget = new Transform();
              return (target, source, alpha, transformIndex) => {
                const transformTarget = target.getTransform(transformIndex, cacheTransformTarget);
                const transformSource = source.getTransform(transformIndex, cacheTransformSource);
                Transform.lerp(transformTarget, transformTarget, transformSource, alpha);
                target.setTransform(transformIndex, transformTarget);
              };
            })();
            function blendAuxiliaryCurvesInto(target, source, alpha) {
              const nValues = source.length;
              assertIsTrue(nValues === target.length);
              for (let iValue = 0; iValue < nValues; ++iValue) {
                target[iValue] = lerp(target[iValue], source[iValue], alpha);
              }
            }
            function calculateDeltaPose(target, base) {
              calculateDeltaTransforms(target.transforms, base.transforms);
              calculateDeltaAuxiliaryCurves(target.auxiliaryCurves, base.auxiliaryCurves);
            }
            const calculateDeltaTransformArrayAt = (() => {
              const cacheTransformBase = new Transform();
              const cacheTransformTarget = new Transform();
              return (target, base, transformIndex) => {
                const baseTransform = base.getTransform(transformIndex, cacheTransformBase);
                const targetTransform = target.getTransform(transformIndex, cacheTransformTarget);
                __calculateDeltaTransform(targetTransform, targetTransform, baseTransform);
                target.setTransform(transformIndex, targetTransform);
              };
            })();
            function calculateDeltaTransforms(target, base) {
              const nTransforms = target.length;
              assertIsTrue(nTransforms === base.length);
              for (let iTransform = 0; iTransform < nTransforms; ++iTransform) {
                calculateDeltaTransformArrayAt(target, base, iTransform);
              }
            }
            function calculateDeltaAuxiliaryCurves(target, base) {
              const nAuxiliaryCurves = target.length;
              assertIsTrue(nAuxiliaryCurves === base.length);
              for (let i = 0; i < target.length; ++i) {
                target[i] -= base[i];
              }
            }
            function applyDeltaPose(target, base, alpha, transformFilter = undefined) {
              applyDeltaTransforms(target.transforms, base.transforms, alpha, transformFilter);
              applyDeltaAuxiliaryCurves(target.auxiliaryCurves, base.auxiliaryCurves, alpha);
            }
            const applyDeltaTransformArrayAt = (() => {
              const cacheTransformDelta = new Transform();
              const cacheTransformTarget = new Transform();
              return (target, delta, alpha, transformIndex) => {
                const deltaTransform = delta.getTransform(transformIndex, cacheTransformDelta);
                const targetTransform = target.getTransform(transformIndex, cacheTransformTarget);
                __applyDeltaTransform(targetTransform, targetTransform, deltaTransform, alpha);
                target.setTransform(transformIndex, targetTransform);
              };
            })();
            function applyDeltaTransforms(target, delta, alpha, transformFilter = undefined) {
              const nTransforms = target.length;
              assertIsTrue(nTransforms === delta.length);
              if (!transformFilter) {
                for (let iTransform = 0; iTransform < nTransforms; ++iTransform) {
                  applyDeltaTransformArrayAt(target, delta, alpha, iTransform);
                }
              } else {
                for (let index = 0; index < transformFilter.involvedTransforms.length; ++index) {
                  const transformIndex = transformFilter.involvedTransforms[index];
                  applyDeltaTransformArrayAt(target, delta, alpha, transformIndex);
                }
              }
            }
            function applyDeltaAuxiliaryCurves(target, delta, alpha) {
              const nAuxiliaryCurves = target.length;
              assertIsTrue(nAuxiliaryCurves === delta.length);
              for (let i = 0; i < target.length; ++i) {
                target[i] += delta[i] * alpha;
              }
            }

            var _dec$G, _class$F;
            let PoseTransformSpaceRequirement;
            (function (PoseTransformSpaceRequirement) {
              PoseTransformSpaceRequirement[PoseTransformSpaceRequirement["NO"] = 0] = "NO";
              PoseTransformSpaceRequirement[PoseTransformSpaceRequirement["LOCAL"] = 1] = "LOCAL";
              PoseTransformSpaceRequirement[PoseTransformSpaceRequirement["COMPONENT"] = 2] = "COMPONENT";
            })(PoseTransformSpaceRequirement || (PoseTransformSpaceRequirement = {}));
            ccenum(PoseTransformSpaceRequirement);
            let PoseNode = (_dec$G = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNode`), _dec$G(_class$F = class PoseNode extends PoseGraphNode {
              constructor(...args) {
                super(...args);
                this._dependencyEvaluation = undefined;
              }
              update(context) {
                var _this$_dependencyEval;
                (_this$_dependencyEval = this._dependencyEvaluation) === null || _this$_dependencyEval === void 0 ? void 0 : _this$_dependencyEval.evaluate();
                this.doUpdate(context);
              }
              evaluate(context, poseTransformSpaceRequirement) {
                const pose = this.doEvaluate(context);
                const currentSpace = pose._poseTransformSpace;
                switch (poseTransformSpaceRequirement) {
                  default:
                    assertIsTrue(false);
                  case PoseTransformSpaceRequirement.NO:
                    break;
                  case PoseTransformSpaceRequirement.LOCAL:
                    {
                      if (currentSpace === PoseTransformSpace.COMPONENT) {
                        context._poseTransformsSpaceComponentToLocal(pose);
                      }
                      assertIsTrue(pose._poseTransformSpace === PoseTransformSpace.LOCAL);
                      break;
                    }
                  case PoseTransformSpaceRequirement.COMPONENT:
                    {
                      if (currentSpace === PoseTransformSpace.LOCAL) {
                        context._poseTransformsSpaceLocalToComponent(pose);
                      }
                      assertIsTrue(pose._poseTransformSpace === PoseTransformSpace.COMPONENT);
                      break;
                    }
                }
                return pose;
              }
              static evaluateDefaultPose(context, poseTransformSpaceRequirement) {
                switch (poseTransformSpaceRequirement) {
                  default:
                    assertIsTrue(false);
                  case PoseTransformSpaceRequirement.NO:
                  case PoseTransformSpaceRequirement.LOCAL:
                    return context.pushDefaultedPose();
                  case PoseTransformSpaceRequirement.COMPONENT:
                    return context.pushDefaultedPoseInComponentSpace();
                }
              }
              _setDependencyEvaluation(dependency) {
                this._dependencyEvaluation = dependency;
              }
              _forceEvaluateEvaluation() {
                var _this$_dependencyEval2;
                (_this$_dependencyEval2 = this._dependencyEvaluation) === null || _this$_dependencyEval2 === void 0 ? void 0 : _this$_dependencyEval2.evaluate();
              }
            }) || _class$F);

            class PureValueNode extends PoseGraphNode {
              constructor(outputTypes) {
                super();
                this._outputTypes = [];
                this._outputTypes = outputTypes;
              }
              get outputCount() {
                return this._outputTypes.length;
              }
              getOutputType(outputIndex) {
                return this._outputTypes[outputIndex];
              }
              link(context) {}
            }
            class SingleOutputPVNode extends PureValueNode {
              constructor(outputType) {
                super([outputType]);
              }
              selfEvaluate(outputs) {
                outputs[0] = this.selfEvaluateDefaultOutput();
              }
            }

            function input(options) {
              return (target, propertyKey) => {
                const targetConstructor = target.constructor;
                if (options.type === PoseGraphType.POSE) {
                  if (!isChildClassOf(targetConstructor, PoseNode)) {
                    error(`@input specifying pose input can be only applied to fields of subclasses of PoseNode.`);
                    return;
                  }
                }
                if (!isChildClassOf(targetConstructor, PoseNode) && !isChildClassOf(targetConstructor, PureValueNode)) {
                  error(`@input can be only applied to fields of subclasses of PoseNode or PureValueNode.`);
                  return;
                }
                inputUnchecked(options)(target, propertyKey);
              };
            }
            function inputUnchecked(options) {
              return (target, propertyKey) => {
                if (typeof propertyKey !== 'string') {
                  error(`@input can be only applied to string-named fields.`);
                  return;
                }
                const targetConstructor = target.constructor;
                globalPoseGraphNodeInputManager.setPropertyNodeInputRecord(targetConstructor, propertyKey, options);
                const propertyStash = getOrCreatePropertyStash(target, propertyKey);
                propertyStash.__internalFlags |= PropertyStashInternalFlag.STANDALONE | PropertyStashInternalFlag.IMPLICIT_VISIBLE;
              };
            }

            var _dec$F, _dec2$y, _dec3$o, _class$E, _class2$z, _descriptor$a;
            let PoseGraphOutputNode = (_dec$F = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseGraphOutputNode`), _dec2$y = poseGraphNodeAppearance({
              themeColor: '#CD3A58',
              inline: true
            }), _dec3$o = inputUnchecked({
              type: PoseGraphType.POSE
            }), _dec$F(_class$E = _dec2$y(_class$E = (_class2$z = class PoseGraphOutputNode extends PoseGraphNode {
              constructor(...args) {
                super(...args);
                _initializerDefineProperty(this, "pose", _descriptor$a, this);
              }
            }, (_descriptor$a = _applyDecoratedDescriptor(_class2$z.prototype, "pose", [serializable$d, _dec3$o], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return null;
              }
            })), _class2$z)) || _class$E) || _class$E);

            var _dec$E, _class$D, _class2$y, _initializer$s, _initializer2$k, _initializer3$b, _initializer4$7;
            let PoseGraph = (_dec$E = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseGraph`), _dec$E(_class$D = (_class2$y = class PoseGraph extends EditorExtendable {
              constructor() {
                super();
                this._outputNode = _initializer$s && _initializer$s();
                this._nodes = _initializer2$k && _initializer2$k();
                this._shells = _initializer3$b && _initializer3$b();
                this._shellMap = _initializer4$7 && _initializer4$7();
                this.addNode(this._outputNode);
              }
              get outputNode() {
                return this._outputNode;
              }
              __callOnAfterDeserializeRecursive() {
                assertIsTrue(this._nodes.length === this._shells.length);
                for (let iNode = 0; iNode < this._nodes.length; ++iNode) {
                  var _node$__callOnAfterDe;
                  const node = this._nodes[iNode];
                  const shell = this._shells[iNode];
                  this._shellMap.set(node, shell);
                  (_node$__callOnAfterDe = node.__callOnAfterDeserializeRecursive) === null || _node$__callOnAfterDe === void 0 ? void 0 : _node$__callOnAfterDe.call(node);
                }
              }
              nodes() {
                return this._nodes.values();
              }
              addNode(node) {
                if (this._shellMap.has(node)) {
                  throw new AddNonFreestandingNodeError(node);
                }
                const shell = new PoseGraphNodeShell();
                this._shells.push(shell);
                this._nodes.push(node);
                this._shellMap.set(node, shell);
                return node;
              }
              removeNode(removal) {
                if (removal === this._outputNode) {
                  error(`Can not remove the output node.`);
                  return;
                }
                const nodeIndex = this._nodes.indexOf(removal);
                if (nodeIndex < 0) {
                  return;
                }
                assertIsTrue(this._shellMap.has(removal));
                for (const shell of this._shells) {
                  shell.deleteBindingTo(removal);
                }
                removeAt(this._shells, nodeIndex);
                removeAt(this._nodes, nodeIndex);
                this._shellMap.delete(removal);
              }
              getShell(node) {
                return this._shellMap.get(node);
              }
            }, (_initializer$s = applyDecoratedInitializer(_class2$y.prototype, "_outputNode", [serializable$d], function () {
              return new PoseGraphOutputNode();
            }), _initializer2$k = applyDecoratedInitializer(_class2$y.prototype, "_nodes", [serializable$d], function () {
              return [];
            }), _initializer3$b = applyDecoratedInitializer(_class2$y.prototype, "_shells", [serializable$d], function () {
              return [];
            }), _initializer4$7 = applyDecoratedInitializer(_class2$y.prototype, "_shellMap", [serializable$d], function () {
              return new Map();
            })), _class2$y)) || _class$D);

            var _dec$D, _class$C, _class2$x, _initializer$r, _initializer2$j, _initializer3$a, _dec2$x, _class4$a, _class5$a, _initializer4$6, _initializer5$4, _initializer6$1, _initializer7$1, _dec3$n, _class7$2, _class8$2, _initializer8$1, _initializer9, _initializer10, _initializer11, _dec4$g, _class10, _dec5$b, _class11, _class12, _initializer12, _dec6$8, _class14, _class15, _initializer13, _initializer14, _initializer15, _dec7$5, _class17, _class18, _initializer16, _dec8$3, _class20, _class21, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _dec9$2, _class23, _class24, _initializer22, _dec10$1, _class26, _class27, _initializer23, _dec11$1, _class29, _class30, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _dec12$1, _class32, _class33, _initializer30, _initializer31;
            let Transition = (_dec$D = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}Transition`), _dec$D(_class$C = (_class2$x = class Transition extends EditorExtendable {
              constructor(from, to, conditions) {
                super();
                this.from = _initializer$r && _initializer$r();
                this.to = _initializer2$j && _initializer2$j();
                this.conditions = _initializer3$a && _initializer3$a();
                this[ownerSymbol] = void 0;
                this.from = from;
                this.to = to;
                if (conditions) {
                  this.conditions = conditions;
                }
              }
              copyTo(that) {
                that.conditions = this.conditions.map(condition => condition.clone());
              }
            }, (_initializer$r = applyDecoratedInitializer(_class2$x.prototype, "from", [serializable$d], null), _initializer2$j = applyDecoratedInitializer(_class2$x.prototype, "to", [serializable$d], null), _initializer3$a = applyDecoratedInitializer(_class2$x.prototype, "conditions", [serializable$d], function () {
              return [];
            })), _class2$x)) || _class$C);
            let DurationalTransition = (_dec2$x = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}DurationalTransition`), _dec2$x(_class4$a = (_class5$a = class DurationalTransition extends Transition {
              constructor(...args) {
                super(...args);
                this.destinationStart = _initializer4$6 && _initializer4$6();
                this.relativeDestinationStart = _initializer5$4 && _initializer5$4();
                this.startEventBinding = _initializer6$1 && _initializer6$1();
                this.endEventBinding = _initializer7$1 && _initializer7$1();
                this[ownerSymbol] = void 0;
              }
              copyTo(that) {
                super.copyTo(that);
                that.destinationStart = this.destinationStart;
                that.relativeDestinationStart = this.relativeDestinationStart;
                this.startEventBinding.copyTo(that.startEventBinding);
                this.endEventBinding.copyTo(that.endEventBinding);
              }
            }, (_initializer4$6 = applyDecoratedInitializer(_class5$a.prototype, "destinationStart", [serializable$d], function () {
              return 0.0;
            }), _initializer5$4 = applyDecoratedInitializer(_class5$a.prototype, "relativeDestinationStart", [serializable$d], function () {
              return false;
            }), _initializer6$1 = applyDecoratedInitializer(_class5$a.prototype, "startEventBinding", [serializable$d], function () {
              return new AnimationGraphEventBinding();
            }), _initializer7$1 = applyDecoratedInitializer(_class5$a.prototype, "endEventBinding", [serializable$d], function () {
              return new AnimationGraphEventBinding();
            })), _class5$a)) || _class4$a);
            let AnimationTransition = (_dec3$n = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}AnimationTransition`), _dec3$n(_class7$2 = (_class8$2 = class AnimationTransition extends DurationalTransition {
              constructor(...args) {
                super(...args);
                this.duration = _initializer8$1 && _initializer8$1();
                this.relativeDuration = _initializer9 && _initializer9();
                this.exitConditionEnabled = _initializer10 && _initializer10();
                this._exitCondition = _initializer11 && _initializer11();
              }
              get exitCondition() {
                return this._exitCondition;
              }
              set exitCondition(value) {
                assertIsTrue(value >= 0.0);
                this._exitCondition = value;
              }
              copyTo(that) {
                super.copyTo(that);
                that.duration = this.duration;
                that.relativeDuration = this.relativeDuration;
                that.exitConditionEnabled = this.exitConditionEnabled;
                that.exitCondition = this.exitCondition;
              }
            }, (_initializer8$1 = applyDecoratedInitializer(_class8$2.prototype, "duration", [serializable$d], function () {
              return 0.3;
            }), _initializer9 = applyDecoratedInitializer(_class8$2.prototype, "relativeDuration", [serializable$d], function () {
              return false;
            }), _initializer10 = applyDecoratedInitializer(_class8$2.prototype, "exitConditionEnabled", [serializable$d], function () {
              return true;
            }), _initializer11 = applyDecoratedInitializer(_class8$2.prototype, "_exitCondition", [serializable$d], function () {
              return 1.0;
            })), _class8$2)) || _class7$2);
            function isAnimationTransition(transition) {
              return transition instanceof AnimationTransition;
            }
            let EmptyState = (_dec4$g = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}EmptyState`), _dec4$g(_class10 = class EmptyState extends State {}) || _class10);
            let EmptyStateTransition = (_dec5$b = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}EmptyStateTransition`), _dec5$b(_class11 = (_class12 = class EmptyStateTransition extends DurationalTransition {
              constructor(...args) {
                super(...args);
                this.duration = _initializer12 && _initializer12();
              }
              copyTo(that) {
                super.copyTo(that);
                that.duration = this.duration;
              }
            }, (_initializer12 = applyDecoratedInitializer(_class12.prototype, "duration", [serializable$d], function () {
              return 0.3;
            })), _class12)) || _class11);
            let ProceduralPoseState = (_dec6$8 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}ProceduralPoseState`), _dec6$8(_class14 = (_class15 = class ProceduralPoseState extends State {
              constructor(...args) {
                super(...args);
                this.graph = _initializer13 && _initializer13();
                this.transitionInEventBinding = _initializer14 && _initializer14();
                this.transitionOutEventBinding = _initializer15 && _initializer15();
              }
              __callOnAfterDeserializeRecursive() {
                this.graph.__callOnAfterDeserializeRecursive();
              }
              copyTo(that) {
                super.copyTo(that);
                this.transitionInEventBinding.copyTo(that.transitionInEventBinding);
                this.transitionOutEventBinding.copyTo(that.transitionOutEventBinding);
                return this;
              }
            }, (_initializer13 = applyDecoratedInitializer(_class15.prototype, "graph", [serializable$d], function () {
              return new PoseGraph();
            }), _initializer14 = applyDecoratedInitializer(_class15.prototype, "transitionInEventBinding", [serializable$d], function () {
              return new AnimationGraphEventBinding();
            }), _initializer15 = applyDecoratedInitializer(_class15.prototype, "transitionOutEventBinding", [serializable$d], function () {
              return new AnimationGraphEventBinding();
            })), _class15)) || _class14);
            const ProceduralPoseState_ = createInstanceofProxy(ProceduralPoseState);
            let ProceduralPoseTransition = (_dec7$5 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}ProceduralPoseTransition`), _dec7$5(_class17 = (_class18 = class ProceduralPoseTransition extends DurationalTransition {
              constructor(...args) {
                super(...args);
                this.duration = _initializer16 && _initializer16();
              }
              copyTo(that) {
                super.copyTo(that);
                that.duration = this.duration;
              }
            }, (_initializer16 = applyDecoratedInitializer(_class18.prototype, "duration", [serializable$d], function () {
              return 0.3;
            })), _class18)) || _class17);
            const ProceduralPoseTransition_ = createInstanceofProxy(ProceduralPoseTransition);
            let StateMachine = (_dec8$3 = ccclass$g('cc.animation.StateMachine'), _dec8$3(_class20 = (_class21 = class StateMachine extends EditorExtendable {
              __callOnAfterDeserializeRecursive() {
                this[onAfterDeserializedTag]();
                const nStates = this._states.length;
                for (let iState = 0; iState < nStates; ++iState) {
                  const state = this._states[iState];
                  if (state instanceof SubStateMachine) {
                    state.stateMachine.__callOnAfterDeserializeRecursive();
                  } else if (state instanceof ProceduralPoseState) {
                    state.__callOnAfterDeserializeRecursive();
                  } else if (state instanceof MotionState) {
                    state.__callOnAfterDeserializeRecursive();
                  }
                }
              }
              constructor(allowEmptyStates) {
                super();
                this._states = _initializer17 && _initializer17();
                this._transitions = _initializer18 && _initializer18();
                this._entryState = _initializer19 && _initializer19();
                this._exitState = _initializer20 && _initializer20();
                this._anyState = _initializer21 && _initializer21();
                this._allowEmptyStates = true;
                this._allowEmptyStates = allowEmptyStates !== null && allowEmptyStates !== void 0 ? allowEmptyStates : false;
                this._entryState = this._addState(new State());
                this._entryState.name = 'Entry';
                this._exitState = this._addState(new State());
                this._exitState.name = 'Exit';
                this._anyState = this._addState(new State());
                this._anyState.name = 'Any';
              }
              [onAfterDeserializedTag]() {
                this._states.forEach(state => own(state, this));
                this._transitions.forEach(transition => {
                  transition.from[outgoingsSymbol].push(transition);
                  transition.to[incomingsSymbol].push(transition);
                });
              }
              get allowEmptyStates() {
                return this._allowEmptyStates;
              }
              get entryState() {
                return this._entryState;
              }
              get exitState() {
                return this._exitState;
              }
              get anyState() {
                return this._anyState;
              }
              states() {
                return this._states;
              }
              transitions() {
                return this._transitions;
              }
              getTransitionsBetween(from, to) {
                assertsOwnedBy(from, this);
                assertsOwnedBy(to, this);
                return from[outgoingsSymbol].filter(transition => transition.to === to);
              }
              getOutgoings(from) {
                assertsOwnedBy(from, this);
                return from[outgoingsSymbol];
              }
              getIncomings(to) {
                assertsOwnedBy(to, this);
                return to[incomingsSymbol];
              }
              addMotion() {
                return this._addState(new MotionState());
              }
              addSubStateMachine() {
                return this._addState(new SubStateMachine(this._allowEmptyStates));
              }
              addEmpty() {
                if (!this._allowEmptyStates) {
                  throw new Error(`Empty states are now allowed in this state machine.`);
                }
                return this._addState(new EmptyState());
              }
              addProceduralPoseState() {
                return this._addState(new ProceduralPoseState());
              }
              remove(state) {
                assertsOwnedBy(state, this);
                if (state === this.entryState || state === this.exitState || state === this.anyState) {
                  return;
                }
                this.eraseTransitionsIncludes(state);
                remove(this._states, state);
                markAsDangling(state);
              }
              connect(from, to, conditions) {
                assertsOwnedBy(from, this);
                assertsOwnedBy(to, this);
                if (to === this.entryState) {
                  throw new InvalidTransitionError('to-entry');
                }
                if (to === this.anyState) {
                  throw new InvalidTransitionError('to-any');
                }
                if (from === this.exitState) {
                  throw new InvalidTransitionError('from-exit');
                }
                const transition = from instanceof MotionState || from === this._anyState ? new AnimationTransition(from, to, conditions) : from instanceof EmptyState ? new EmptyStateTransition(from, to, conditions) : from instanceof ProceduralPoseState ? new ProceduralPoseTransition(from, to, conditions) : new Transition(from, to, conditions);
                own(transition, this);
                this._transitions.push(transition);
                from[outgoingsSymbol].push(transition);
                to[incomingsSymbol].push(transition);
                return transition;
              }
              disconnect(from, to) {
                assertsOwnedBy(from, this);
                assertsOwnedBy(to, this);
                const oTransitions = from[outgoingsSymbol];
                const iTransitions = to[incomingsSymbol];
                const transitions = this._transitions;
                const oTransitionsToRemove = oTransitions.filter(oTransition => oTransition.to === to);
                const nOTransitionToRemove = oTransitionsToRemove.length;
                for (let iOTransitionToRemove = 0; iOTransitionToRemove < nOTransitionToRemove; ++iOTransitionToRemove) {
                  const oTransition = oTransitionsToRemove[iOTransitionToRemove];
                  remove(oTransitions, oTransition);
                  assertIsTrue(remove(transitions, oTransition));
                  assertIsNonNullable(removeIf(iTransitions, transition => transition === oTransition));
                  markAsDangling(oTransition);
                }
              }
              removeTransition(removal) {
                assertIsTrue(remove(this._transitions, removal));
                assertIsNonNullable(removeIf(removal.from[outgoingsSymbol], transition => transition === removal));
                assertIsNonNullable(removeIf(removal.to[incomingsSymbol], transition => transition === removal));
                markAsDangling(removal);
              }
              eraseOutgoings(from) {
                assertsOwnedBy(from, this);
                const oTransitions = from[outgoingsSymbol];
                for (let iOTransition = 0; iOTransition < oTransitions.length; ++iOTransition) {
                  const oTransition = oTransitions[iOTransition];
                  const to = oTransition.to;
                  assertIsTrue(remove(this._transitions, oTransition));
                  assertIsNonNullable(removeIf(to[incomingsSymbol], transition => transition === oTransition));
                  markAsDangling(oTransition);
                }
                oTransitions.length = 0;
              }
              eraseIncomings(to) {
                assertsOwnedBy(to, this);
                const iTransitions = to[incomingsSymbol];
                for (let iITransition = 0; iITransition < iTransitions.length; ++iITransition) {
                  const iTransition = iTransitions[iITransition];
                  const from = iTransition.from;
                  assertIsTrue(remove(this._transitions, iTransition));
                  assertIsNonNullable(removeIf(from[outgoingsSymbol], transition => transition === iTransition));
                  markAsDangling(iTransition);
                }
                iTransitions.length = 0;
              }
              eraseTransitionsIncludes(state) {
                this.eraseIncomings(state);
                this.eraseOutgoings(state);
              }
              adjustTransitionPriority(adjusting, diff) {
                const {
                  from
                } = adjusting;
                if (diff === 0) {
                  return;
                }
                const outgoings = from[outgoingsSymbol];
                const iAdjusting = outgoings.indexOf(adjusting);
                assertIsTrue(iAdjusting >= 0);
                const iNew = clamp(iAdjusting + diff, 0, outgoings.length - 1);
                {
                  const {
                    _transitions: globalTransitions
                  } = this;
                  const adjustingIndexInGlobal = globalTransitions.indexOf(adjusting);
                  assertIsTrue(adjustingIndexInGlobal >= 0);
                  let lastPlaceholder = adjustingIndexInGlobal;
                  if (iNew > iAdjusting) {
                    for (let iOutgoing = iAdjusting + 1; iOutgoing <= iNew; ++iOutgoing) {
                      const outgoing = outgoings[iOutgoing];
                      const indexInGlobal = globalTransitions.indexOf(outgoing);
                      assertIsTrue(indexInGlobal >= 0);
                      globalTransitions[lastPlaceholder] = outgoing;
                      lastPlaceholder = indexInGlobal;
                    }
                  } else if (iAdjusting > iNew) {
                    for (let iOutgoing = iAdjusting - 1; iOutgoing >= iNew; --iOutgoing) {
                      const outgoing = outgoings[iOutgoing];
                      const indexInGlobal = globalTransitions.indexOf(outgoing);
                      assertIsTrue(indexInGlobal >= 0);
                      globalTransitions[lastPlaceholder] = outgoing;
                      lastPlaceholder = indexInGlobal;
                    }
                  }
                  globalTransitions[lastPlaceholder] = adjusting;
                }
                {
                  shift(outgoings, iAdjusting, iNew);
                }
              }
              copyTo(that) {
                const thatStatesOld = that._states.filter(state => {
                  switch (state) {
                    case that._entryState:
                    case that._exitState:
                    case that._anyState:
                      return true;
                    default:
                      return false;
                  }
                });
                for (const thatStateOld of thatStatesOld) {
                  that.remove(thatStateOld);
                }
                const stateMap = new Map();
                for (const state of this._states) {
                  switch (state) {
                    case this._entryState:
                      stateMap.set(state, that._entryState);
                      break;
                    case this._exitState:
                      stateMap.set(state, that._exitState);
                      break;
                    case this._anyState:
                      stateMap.set(state, that._anyState);
                      break;
                    default:
                      if (state instanceof MotionState || state instanceof SubStateMachine || state instanceof EmptyState || state instanceof ProceduralPoseState) {
                        if (state instanceof EmptyState && !that._allowEmptyStates) {
                          continue;
                        }
                        const thatState = instantiate(state);
                        that._addState(thatState);
                        stateMap.set(state, thatState);
                      } else {
                        assertIsTrue(false);
                      }
                      break;
                  }
                }
                for (const transition of this._transitions) {
                  if (!that._allowEmptyStates) {
                    if (transition.from instanceof EmptyState || transition.to instanceof EmptyState) {
                      continue;
                    }
                  }
                  const thatFrom = stateMap.get(transition.from);
                  const thatTo = stateMap.get(transition.to);
                  assertIsTrue(thatFrom && thatTo);
                  const thatTransition = that.connect(thatFrom, thatTo);
                  thatTransition.conditions = transition.conditions.map(condition => condition.clone());
                  if (thatTransition instanceof AnimationTransition) {
                    assertIsTrue(transition instanceof AnimationTransition);
                    transition.copyTo(thatTransition);
                  } else if (thatTransition instanceof EmptyStateTransition) {
                    assertIsTrue(transition instanceof EmptyStateTransition);
                    transition.copyTo(thatTransition);
                  } else if (thatTransition instanceof ProceduralPoseState) {
                    assertIsTrue(transition instanceof ProceduralPoseState);
                    transition.copyTo(thatTransition);
                  } else {
                    transition.copyTo(thatTransition);
                  }
                }
              }
              clone() {
                const that = new StateMachine(this._allowEmptyStates);
                this.copyTo(that);
                return that;
              }
              _addState(state) {
                own(state, this);
                this._states.push(state);
                return state;
              }
            }, (_initializer17 = applyDecoratedInitializer(_class21.prototype, "_states", [serializable$d], function () {
              return [];
            }), _initializer18 = applyDecoratedInitializer(_class21.prototype, "_transitions", [serializable$d], function () {
              return [];
            }), _initializer19 = applyDecoratedInitializer(_class21.prototype, "_entryState", [serializable$d], null), _initializer20 = applyDecoratedInitializer(_class21.prototype, "_exitState", [serializable$d], null), _initializer21 = applyDecoratedInitializer(_class21.prototype, "_anyState", [serializable$d], null)), _class21)) || _class20);
            let SubStateMachine = (_dec9$2 = ccclass$g('cc.animation.SubStateMachine'), _dec9$2(_class23 = (_class24 = class SubStateMachine extends InteractiveState {
              constructor(allowEmptyStates) {
                super();
                this._stateMachine = _initializer22 && _initializer22();
                this._stateMachine = new StateMachine(allowEmptyStates);
              }
              get stateMachine() {
                return this._stateMachine;
              }
              copyTo(that) {
                super.copyTo(that);
                this._stateMachine.copyTo(that._stateMachine);
              }
            }, (_initializer22 = applyDecoratedInitializer(_class24.prototype, "_stateMachine", [serializable$d], null)), _class24)) || _class23);
            let PoseGraphStash = (_dec10$1 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseGraphStash`), _dec10$1(_class26 = (_class27 = class PoseGraphStash extends EditorExtendable {
              constructor(...args) {
                super(...args);
                this.graph = _initializer23 && _initializer23();
              }
            }, (_initializer23 = applyDecoratedInitializer(_class27.prototype, "graph", [serializable$d], function () {
              return new PoseGraph();
            })), _class27)) || _class26);
            let Layer = (_dec11$1 = ccclass$g('cc.animation.Layer'), _dec11$1(_class29 = (_class30 = class Layer {
              __callOnAfterDeserializeRecursive() {
                this.stateMachine._allowEmptyStates = true;
                this.stateMachine.__callOnAfterDeserializeRecursive();
                for (const stashId in this._stashes) {
                  const stash = this._stashes[stashId];
                  stash.graph.__callOnAfterDeserializeRecursive();
                }
              }
              stashes() {
                return Object.entries(this._stashes);
              }
              getStash(id) {
                return this._stashes[id];
              }
              addStash(id) {
                return this._stashes[id] = new PoseGraphStash();
              }
              removeStash(id) {
                delete this._stashes[id];
              }
              renameStash(id, newId) {
                this._stashes = renameObjectProperty(this._stashes, id, newId);
              }
              constructor() {
                this[ownerSymbol] = void 0;
                this._stateMachine = _initializer24 && _initializer24();
                this.name = _initializer25 && _initializer25();
                this.weight = _initializer26 && _initializer26();
                this.mask = _initializer27 && _initializer27();
                this.additive = _initializer28 && _initializer28();
                this._stashes = _initializer29 && _initializer29();
                this._stateMachine = new StateMachine(true);
              }
              get stateMachine() {
                return this._stateMachine;
              }
            }, (_initializer24 = applyDecoratedInitializer(_class30.prototype, "_stateMachine", [serializable$d], null), _initializer25 = applyDecoratedInitializer(_class30.prototype, "name", [serializable$d], function () {
              return '';
            }), _initializer26 = applyDecoratedInitializer(_class30.prototype, "weight", [serializable$d], function () {
              return 1.0;
            }), _initializer27 = applyDecoratedInitializer(_class30.prototype, "mask", [serializable$d], function () {
              return null;
            }), _initializer28 = applyDecoratedInitializer(_class30.prototype, "additive", [serializable$d], function () {
              return false;
            }), _initializer29 = applyDecoratedInitializer(_class30.prototype, "_stashes", [serializable$d], function () {
              return {};
            })), _class30)) || _class29);
            let LayerBlending;
            (function (LayerBlending) {
              LayerBlending[LayerBlending["override"] = 0] = "override";
              LayerBlending[LayerBlending["additive"] = 1] = "additive";
            })(LayerBlending || (LayerBlending = {}));
            let AnimationGraph = (_dec12$1 = ccclass$g('cc.animation.AnimationGraph'), _dec12$1(_class32 = (_class33 = class AnimationGraph extends AnimationGraphLike {
              constructor() {
                super();
                this._layers = _initializer30 && _initializer30();
                this._variables = _initializer31 && _initializer31();
              }
              onLoaded() {
                const {
                  _layers: layers
                } = this;
                const nLayers = layers.length;
                for (let iLayer = 0; iLayer < nLayers; ++iLayer) {
                  layers[iLayer].__callOnAfterDeserializeRecursive();
                }
              }
              get layers() {
                return this._layers;
              }
              get variables() {
                return Object.entries(this._variables);
              }
              addLayer() {
                const layer = new Layer();
                this._layers.push(layer);
                return layer;
              }
              removeLayer(index) {
                removeAt(this._layers, index);
              }
              moveLayer(index, newIndex) {
                shift(this._layers, index, newIndex);
              }
              addVariable(name, type, initialValue) {
                const variable = createVariable(type, initialValue);
                this._variables[name] = variable;
                return variable;
              }
              removeVariable(name) {
                delete this._variables[name];
              }
              getVariable(name) {
                return this._variables[name];
              }
              renameVariable(name, newName) {
                this._variables = renameObjectProperty(this._variables, name, newName);
              }
            }, (_initializer30 = applyDecoratedInitializer(_class33.prototype, "_layers", [serializable$d], function () {
              return [];
            }), _initializer31 = applyDecoratedInitializer(_class33.prototype, "_variables", [serializable$d], function () {
              return {};
            })), _class33)) || _class32);

            const createEval = Symbol('[[createEval]]');

            var _dec$C, _class$B;
            let Motion = (_dec$C = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}MotionBase`), _dec$C(_class$B = class Motion extends EditorExtendable {
              __callOnAfterDeserializeRecursive() {}
            }) || _class$B);

            function wrap(elapsedTime, duration, wrapMode, repeatCount, negativeSpeed, info) {
              if (duration === 0.0) {
                info.time = 0.0;
                info.ratio = 0.0;
                info.direction = 1.0;
                info.stopped = !!Number.isFinite(repeatCount);
                info.iterations = 0.0;
                return info;
              }
              let stopped = false;
              let currentIterations = elapsedTime > 0 ? elapsedTime / duration : -(elapsedTime / duration);
              if (currentIterations >= repeatCount) {
                currentIterations = repeatCount;
                stopped = true;
                let tempRatio = repeatCount - (repeatCount | 0);
                if (tempRatio === 0) {
                  tempRatio = 1;
                }
                elapsedTime = tempRatio * duration * (elapsedTime > 0 ? 1 : -1);
              }
              if (elapsedTime > duration) {
                const tempTime = elapsedTime % duration;
                elapsedTime = tempTime === 0 ? duration : tempTime;
              } else if (elapsedTime < 0) {
                elapsedTime %= duration;
                if (elapsedTime !== 0) {
                  elapsedTime += duration;
                }
              }
              let needReverse = false;
              const shouldWrap = wrapMode & WrapModeMask.ShouldWrap;
              if (shouldWrap) {
                needReverse = isReverseIteration(wrapMode, currentIterations);
              }
              let direction = needReverse ? -1 : 1;
              if (negativeSpeed) {
                direction *= -1;
              }
              if (shouldWrap && needReverse) {
                elapsedTime = duration - elapsedTime;
              }
              info.time = elapsedTime;
              info.ratio = info.time / duration;
              info.direction = direction;
              info.stopped = stopped;
              info.iterations = currentIterations;
              return info;
            }
            function isReverseIteration(wrapMode, currentIterations) {
              let needReverse = false;
              if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                const isEnd = currentIterations - (currentIterations | 0) === 0;
                if (isEnd && currentIterations > 0) {
                  currentIterations -= 1;
                }
                const isOddIteration = currentIterations & 1;
                if (isOddIteration) {
                  needReverse = !needReverse;
                }
              }
              if ((wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse) {
                needReverse = !needReverse;
              }
              return needReverse;
            }

            const CACHE_VEC3_GET_VALUE = new Vec3();
            const CACHE_QUAT_GET_VALUE = new Quat();
            class PoseBindingBase {
              constructor(transformHandle) {
                this._transformHandle = transformHandle;
              }
              destroy() {
                this._transformHandle.destroy();
              }
            }
            class PosePositionBinding extends PoseBindingBase {
              setValue(value, pose) {
                pose.transforms.setPosition(this._transformHandle.index, value);
              }
              getValue(pose) {
                return pose.transforms.getPosition(this._transformHandle.index, CACHE_VEC3_GET_VALUE);
              }
            }
            class PoseRotationBinding extends PoseBindingBase {
              setValue(value, pose) {
                pose.transforms.setRotation(this._transformHandle.index, value);
              }
              getValue(pose) {
                return pose.transforms.getRotation(this._transformHandle.index, CACHE_QUAT_GET_VALUE);
              }
            }
            class PoseEulerAnglesBinding extends PoseBindingBase {
              setValue(value, pose) {
                const quat = Quat.fromEuler(PoseEulerAnglesBinding._EULER_TO_QUAT_CACHE, value.x, value.y, value.z);
                pose.transforms.setRotation(this._transformHandle.index, quat);
              }
              getValue(pose) {
                const q = pose.transforms.getRotation(this._transformHandle.index, CACHE_QUAT_GET_VALUE);
                return Quat.toEuler(CACHE_VEC3_GET_VALUE, q);
              }
            }
            PoseEulerAnglesBinding._EULER_TO_QUAT_CACHE = new Quat();
            class PoseScaleBinding extends PoseBindingBase {
              setValue(value, pose) {
                pose.transforms.setScale(this._transformHandle.index, value);
              }
              getValue(pose) {
                return pose.transforms.getScale(this._transformHandle.index, CACHE_VEC3_GET_VALUE);
              }
            }
            class AuxiliaryCurveBinding {
              constructor(_handle) {
                this._handle = _handle;
              }
              destroy() {
                this._handle.destroy();
              }
              setValue(value, pose) {
                pose.auxiliaryCurves[this._handle.index] = value;
              }
              getValue(pose) {
                return pose.auxiliaryCurves[this._handle.index];
              }
            }
            function bindPoseTransform(transformHandle, propertyKey) {
              switch (propertyKey) {
                case 'position':
                  return new PosePositionBinding(transformHandle);
                case 'rotation':
                  return new PoseRotationBinding(transformHandle);
                case 'eulerAngles':
                  return new PoseEulerAnglesBinding(transformHandle);
                case 'scale':
                  return new PoseScaleBinding(transformHandle);
                default:
                  assertIsTrue(false);
              }
            }
            class NonTransformPoseBinding {
              constructor(binding) {
                this.binding = binding;
              }
              destroy() {}
              setValue(value, _pose) {
                this.binding.setValue(value);
              }
              getValue(pose) {
                var _this$binding$getValu, _this$binding$getValu2, _this$binding;
                return (_this$binding$getValu = (_this$binding$getValu2 = (_this$binding = this.binding).getValue) === null || _this$binding$getValu2 === void 0 ? void 0 : _this$binding$getValu2.call(_this$binding)) !== null && _this$binding$getValu !== void 0 ? _this$binding$getValu : undefined;
              }
            }
            class AGTrackEvaluation {
              constructor(binding, trackEvaluation) {
                this._binding = void 0;
                this._trackSampler = void 0;
                this._binding = binding;
                this._trackSampler = trackEvaluation;
              }
              destroy() {
                this._binding.destroy();
              }
              evaluate(time, pose) {
                const {
                  _trackSampler: trackSampler,
                  _binding: binding
                } = this;
                const defaultValue = trackSampler.requiresDefault ? binding.getValue(pose) : undefined;
                const value = trackSampler.evaluate(time, defaultValue);
                binding.setValue(value, pose);
              }
            }
            function bindTrackAG(animationClip, track, bindContext) {
              const trackBinding = track[trackBindingTag];
              const trackTarget = createRuntimeBindingAG(trackBinding, bindContext);
              if (!trackTarget) {
                warnID(3937, animationClip.name, bindContext.origin.name);
              }
              return trackTarget !== null && trackTarget !== void 0 ? trackTarget : undefined;
            }
            function createRuntimeBindingAG(track, bindContext) {
              const {
                origin
              } = bindContext;
              const {
                path,
                proxy
              } = track;
              const nPaths = path.length;
              const iLastPath = nPaths - 1;
              if (nPaths !== 0 && (path.isPropertyAt(iLastPath) || path.isElementAt(iLastPath)) && !proxy) {
                const lastPropertyKey = path.isPropertyAt(iLastPath) ? path.parsePropertyAt(iLastPath) : path.parseElementAt(iLastPath);
                const resultTarget = path[normalizedFollowTag](origin, 0, nPaths - 1);
                if (resultTarget === null) {
                  return null;
                }
                if (resultTarget instanceof Node && isTrsPropertyName(lastPropertyKey)) {
                  const transformPath = (() => {
                    const segments = [];
                    let node = resultTarget;
                    for (; node && node !== origin; node = node.parent) {
                      segments.unshift(node.name);
                    }
                    if (node === origin) {
                      return segments.join('/');
                    } else {
                      return undefined;
                    }
                  })();
                  if (typeof transformPath === 'string') {
                    const transformHandle = bindContext.bindTransform(transformPath);
                    if (!transformHandle) {
                      return undefined;
                    }
                    return bindPoseTransform(transformHandle, lastPropertyKey);
                  }
                }
              }
              {
                const nonTransformBinding = track.createRuntimeBinding(bindContext.origin, undefined, false);
                if (!nonTransformBinding) {
                  return null;
                }
                return new NonTransformPoseBinding(nonTransformBinding);
              }
            }
            class AuxiliaryCurveEvaluation {
              constructor(_binding, _curve) {
                this._binding = _binding;
                this._curve = _curve;
              }
              evaluate(time, context) {
                const {
                  _curve: curve,
                  _binding: binding
                } = this;
                const pose = context;
                const value = curve.evaluate(time);
                binding.setValue(value, pose);
              }
            }
            function createAnimationAGEvaluation(clip, context) {
              if (clip.isAdditive_experimental) {
                return new AnimationClipAGEvaluationAdditive(clip, context);
              } else {
                return new AnimationClipAGEvaluationRegular(clip, context);
              }
            }
            class AnimationClipAGEvaluationRegular {
              constructor(clip, context) {
                this._trackEvaluations = [];
                this._exoticAnimationEvaluation = void 0;
                this._auxiliaryCurveEvaluations = [];
                clip._trySyncLegacyData();
                const trackEvaluations = [];
                let exoticAnimationEvaluation;
                const auxiliaryCurveEvaluations = [];
                const {
                  tracks
                } = clip;
                const exoticAnimation = clip[exoticAnimationTag];
                for (const track of tracks) {
                  if (track instanceof UntypedTrack) {
                    continue;
                  }
                  if (Array.from(track.channels()).every(({
                    curve
                  }) => curve.keyFramesCount === 0)) {
                    continue;
                  }
                  const trackRuntimeBinding = bindTrackAG(clip, track, context);
                  if (!trackRuntimeBinding) {
                    continue;
                  }
                  const trackSampler = track[createEvalSymbol]();
                  const trackEvaluation = new AGTrackEvaluation(trackRuntimeBinding, trackSampler);
                  trackEvaluations.push(trackEvaluation);
                }
                if (exoticAnimation) {
                  exoticAnimationEvaluation = exoticAnimation.createEvaluatorForAnimationGraph(context);
                }
                const auxiliaryCurveNames = clip.getAuxiliaryCurveNames_experimental();
                const nAuxiliaryCurves = auxiliaryCurveNames.length;
                for (let iAuxiliaryCurve = 0; iAuxiliaryCurve < nAuxiliaryCurves; ++iAuxiliaryCurve) {
                  const curveName = auxiliaryCurveNames[iAuxiliaryCurve];
                  const curve = clip.getAuxiliaryCurve_experimental(curveName);
                  const handle = context.bindAuxiliaryCurve(curveName);
                  const binding = new AuxiliaryCurveBinding(handle);
                  auxiliaryCurveEvaluations.push(new AuxiliaryCurveEvaluation(binding, curve));
                }
                this._trackEvaluations = trackEvaluations;
                this._exoticAnimationEvaluation = exoticAnimationEvaluation;
                this._auxiliaryCurveEvaluations = auxiliaryCurveEvaluations;
              }
              destroy() {
                var _this$_exoticAnimatio;
                (_this$_exoticAnimatio = this._exoticAnimationEvaluation) === null || _this$_exoticAnimatio === void 0 ? void 0 : _this$_exoticAnimatio.destroy();
                const {
                  _trackEvaluations: trackEvaluations
                } = this;
                const nTrackEvaluations = trackEvaluations.length;
                for (let iNodeEvaluation = 0; iNodeEvaluation < nTrackEvaluations; ++iNodeEvaluation) {
                  trackEvaluations[iNodeEvaluation].destroy();
                }
              }
              evaluate(time, context) {
                const {
                  _trackEvaluations: trackEvaluations,
                  _exoticAnimationEvaluation: exoticAnimationEvaluation,
                  _auxiliaryCurveEvaluations: auxiliaryCurveEvaluations
                } = this;
                const pose = context.pushDefaultedPose();
                const nTrackEvaluations = trackEvaluations.length;
                for (let iNodeEvaluation = 0; iNodeEvaluation < nTrackEvaluations; ++iNodeEvaluation) {
                  trackEvaluations[iNodeEvaluation].evaluate(time, pose);
                }
                if (exoticAnimationEvaluation) {
                  exoticAnimationEvaluation.evaluate(time, pose);
                }
                const nAuxiliaryCurveEvaluations = auxiliaryCurveEvaluations.length;
                for (let iAuxiliaryCurveEvaluation = 0; iAuxiliaryCurveEvaluation < nAuxiliaryCurveEvaluations; ++iAuxiliaryCurveEvaluation) {
                  auxiliaryCurveEvaluations[iAuxiliaryCurveEvaluation].evaluate(time, pose);
                }
                return pose;
              }
            }
            class AnimationClipAGEvaluationAdditive {
              constructor(clip, context) {
                this._clipEval = void 0;
                this._refClipEval = void 0;
                this._clipEval = new AnimationClipAGEvaluationRegular(clip, context);
                const refClip = clip[additiveSettingsTag].refClip;
                if (refClip && refClip !== clip) {
                  this._refClipEval = new AnimationClipAGEvaluationRegular(refClip, context);
                }
              }
              destroy() {
                var _this$_refClipEval;
                this._clipEval.destroy();
                (_this$_refClipEval = this._refClipEval) === null || _this$_refClipEval === void 0 ? void 0 : _this$_refClipEval.destroy();
              }
              evaluate(time, context) {
                const pose = this._clipEval.evaluate(time, context);
                let refPose;
                if (this._refClipEval) {
                  const refClipTime = 0.0;
                  refPose = this._refClipEval.evaluate(refClipTime, context);
                } else {
                  refPose = this._clipEval.evaluate(0.0, context);
                }
                calculateDeltaPose(pose, refPose);
                context.popPose();
                return pose;
              }
            }

            var _dec$B, _dec2$w, _class$A, _class2$w, _initializer$q;
            const {
              ccclass: ccclass$d,
              type: type$1
            } = _decorator;
            let ClipMotion = (_dec$B = ccclass$d('cc.animation.ClipMotion'), _dec2$w = type$1(AnimationClip), _dec$B(_class$A = (_class2$w = class ClipMotion extends Motion {
              constructor(...args) {
                super(...args);
                this.clip = _initializer$q && _initializer$q();
              }
              [createEval](context, ignoreEmbeddedPlayers) {
                if (!this.clip) {
                  return null;
                }
                const clipMotionEval = new ClipMotionEval(context, this.clip, ignoreEmbeddedPlayers);
                return clipMotionEval;
              }
              clone() {
                const that = new ClipMotion();
                that.clip = this.clip;
                that[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(this);
                return that;
              }
            }, (_initializer$q = applyDecoratedInitializer(_class2$w.prototype, "clip", [_dec2$w, serializable$d], function () {
              return null;
            })), _class2$w)) || _class$A);
            const evaluatePortTag = Symbol('EvaluatePort');
            class ClipMotionEval {
              constructor(context, clip, ignoreEmbeddedPlayers) {
                var _context$clipOverride, _context$clipOverride2;
                this._clipEmbeddedPlayerEval = null;
                this._frameEventEval = null;
                this._wrapInfo = new WrappedInfo();
                this._duration = 0.0;
                this._ignoreEmbeddedPlayers = void 0;
                this._originalClip = clip;
                this._ignoreEmbeddedPlayers = ignoreEmbeddedPlayers;
                const overriding = (_context$clipOverride = (_context$clipOverride2 = context.clipOverrides) === null || _context$clipOverride2 === void 0 ? void 0 : _context$clipOverride2.get(clip)) !== null && _context$clipOverride !== void 0 ? _context$clipOverride : clip;
                this._setClip(overriding, context);
              }
              get duration() {
                return this._duration;
              }
              createPort() {
                return new ClipMotionPort(this);
              }
              getClipStatuses(baseWeight) {
                let got = false;
                return {
                  next: () => {
                    if (got) {
                      return {
                        done: true,
                        value: undefined
                      };
                    } else {
                      got = true;
                      return {
                        done: false,
                        value: {
                          __DEBUG_ID__: this.__DEBUG__ID__,
                          clip: this._clip,
                          weight: baseWeight
                        }
                      };
                    }
                  }
                };
              }
              [evaluatePortTag](progress, context) {
                var _this$_frameEventEval, _this$_clipEmbeddedPl;
                const {
                  _duration: duration,
                  _clip: {
                    duration: clipDuration
                  },
                  _clipEval: clipEval
                } = this;
                const elapsedTime = duration * progress;
                const {
                  wrapMode
                } = this._clip;
                const repeatCount = (wrapMode & WrapModeMask.Loop) === WrapModeMask.Loop ? Infinity : 1;
                const wrapInfo = wrap(elapsedTime, duration, wrapMode, repeatCount, false, this._wrapInfo);
                const clipTime = wrapInfo.ratio * clipDuration;
                const pose = clipEval.evaluate(clipTime, context);
                (_this$_frameEventEval = this._frameEventEval) === null || _this$_frameEventEval === void 0 ? void 0 : _this$_frameEventEval.sample(wrapInfo.ratio, wrapInfo.direction, wrapInfo.iterations);
                (_this$_clipEmbeddedPl = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl === void 0 ? void 0 : _this$_clipEmbeddedPl.evaluate(clipTime, Math.trunc(wrapInfo.iterations));
                return pose;
              }
              overrideClips(context) {
                var _context$clipOverride3;
                const {
                  _originalClip: originalClip
                } = this;
                const overriding = (_context$clipOverride3 = context.clipOverrides) === null || _context$clipOverride3 === void 0 ? void 0 : _context$clipOverride3.get(originalClip);
                if (overriding) {
                  this._setClip(overriding, context);
                }
              }
              reenter() {
                var _this$_frameEventEval2;
                (_this$_frameEventEval2 = this._frameEventEval) === null || _this$_frameEventEval2 === void 0 ? void 0 : _this$_frameEventEval2.reset();
              }
              _setClip(clip, context) {
                var _this$_clipEval;
                (_this$_clipEval = this._clipEval) === null || _this$_clipEval === void 0 ? void 0 : _this$_clipEval.destroy();
                this._frameEventEval = null;
                if (this._clipEmbeddedPlayerEval) {
                  this._clipEmbeddedPlayerEval.destroy();
                  this._clipEmbeddedPlayerEval = null;
                }
                this._clip = clip;
                this._duration = clip.speed === 0.0 ? 0.0 : clip.duration / clip.speed;
                this._clipEval = createAnimationAGEvaluation(clip, context);
                this._frameEventEval = clip.createEventEvaluator(context.origin);
                if (!this._ignoreEmbeddedPlayers && clip.containsAnyEmbeddedPlayer()) {
                  this._clipEmbeddedPlayerEval = clip.createEmbeddedPlayerEvaluator(context.origin);
                }
              }
            }
            class ClipMotionPort {
              constructor(host) {
                this._eval = void 0;
                this._eval = host;
              }
              evaluate(progress, context) {
                return this._eval[evaluatePortTag](progress, context);
              }
              reenter() {
                this._eval.reenter();
              }
            }

            var _dec$A, _class$z, _class2$v, _initializer$p, _dec2$v, _class4$9, _class5$9, _initializer2$i;
            const {
              ccclass: ccclass$c,
              serializable: serializable$a
            } = _decorator;
            let AnimationBlendItem = (_dec$A = ccclass$c(`${CLASS_NAME_PREFIX_ANIM}AnimationBlendItem`), _dec$A(_class$z = (_class2$v = class AnimationBlendItem {
              constructor() {
                this.motion = _initializer$p && _initializer$p();
              }
              clone() {
                const that = new AnimationBlendItem();
                this._copyTo(that);
                return that;
              }
              _copyTo(that) {
                var _this$motion$clone, _this$motion;
                that.motion = (_this$motion$clone = (_this$motion = this.motion) === null || _this$motion === void 0 ? void 0 : _this$motion.clone()) !== null && _this$motion$clone !== void 0 ? _this$motion$clone : null;
                return that;
              }
            }, (_initializer$p = applyDecoratedInitializer(_class2$v.prototype, "motion", [serializable$a], function () {
              return null;
            })), _class2$v)) || _class$z);
            let AnimationBlend = (_dec2$v = ccclass$c(`${CLASS_NAME_PREFIX_ANIM}AnimationBlend`), _dec2$v(_class4$9 = (_class5$9 = class AnimationBlend extends Motion {
              constructor(...args) {
                super(...args);
                this.name = _initializer2$i && _initializer2$i();
              }
              copyTo(that) {
                that.name = this.name;
                that[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(this);
              }
            }, (_initializer2$i = applyDecoratedInitializer(_class5$9.prototype, "name", [serializable$a], function () {
              return '';
            })), _class5$9)) || _class4$9);
            class AnimationBlendEval {
              constructor(context, ignoreEmbeddedPlayers, base, children, inputs) {
                this._childEvaluators = children.map(child => {
                  var _child$motion$createE, _child$motion;
                  return (_child$motion$createE = (_child$motion = child.motion) === null || _child$motion === void 0 ? void 0 : _child$motion[createEval](context, ignoreEmbeddedPlayers)) !== null && _child$motion$createE !== void 0 ? _child$motion$createE : null;
                });
                this._weights = new Array(this._childEvaluators.length).fill(0);
                this._inputs = [...inputs];
              }
              createPort() {
                return new AnimationBlendPort(this, this._childEvaluators.map(childEval => {
                  var _childEval$createPort;
                  return (_childEval$createPort = childEval === null || childEval === void 0 ? void 0 : childEval.createPort()) !== null && _childEval$createPort !== void 0 ? _childEval$createPort : null;
                }));
              }
              get childCount() {
                return this._weights.length;
              }
              getChildWeight(childIndex) {
                return this._weights[childIndex];
              }
              getChildMotionEval(childIndex) {
                return this._childEvaluators[childIndex];
              }
              get duration() {
                let uniformDuration = 0.0;
                for (let iChild = 0; iChild < this._childEvaluators.length; ++iChild) {
                  var _this$_childEvaluator, _this$_childEvaluator2;
                  uniformDuration += ((_this$_childEvaluator = (_this$_childEvaluator2 = this._childEvaluators[iChild]) === null || _this$_childEvaluator2 === void 0 ? void 0 : _this$_childEvaluator2.duration) !== null && _this$_childEvaluator !== void 0 ? _this$_childEvaluator : 0.0) * this._weights[iChild];
                }
                return uniformDuration;
              }
              getClipStatuses(baseWeight) {
                const {
                  _childEvaluators: children,
                  _weights: weights
                } = this;
                const nChildren = children.length;
                let iChild = 0;
                let currentChildIterator;
                return {
                  next() {
                    while (true) {
                      if (currentChildIterator) {
                        const result = currentChildIterator.next();
                        if (!result.done) {
                          return result;
                        }
                      }
                      if (iChild >= nChildren) {
                        return {
                          done: true,
                          value: undefined
                        };
                      } else {
                        const child = children[iChild];
                        currentChildIterator = child === null || child === void 0 ? void 0 : child.getClipStatuses(baseWeight * weights[iChild]);
                        ++iChild;
                      }
                    }
                  }
                };
              }
              __evaluatePort(port, progress, context) {
                const nChild = this._childEvaluators.length;
                let sumWeight = 0.0;
                let finalPose = null;
                for (let iChild = 0; iChild < nChild; ++iChild) {
                  var _port$childPorts$iChi;
                  const childWeight = this._weights[iChild];
                  if (!childWeight) {
                    continue;
                  }
                  const childOutput = (_port$childPorts$iChi = port.childPorts[iChild]) === null || _port$childPorts$iChi === void 0 ? void 0 : _port$childPorts$iChi.evaluate(progress, context);
                  if (!childOutput) {
                    continue;
                  }
                  sumWeight += childWeight;
                  if (!finalPose) {
                    finalPose = childOutput;
                  } else {
                    if (sumWeight) {
                      const t = childWeight / sumWeight;
                      blendPoseInto(finalPose, childOutput, t);
                    }
                    context.popPose();
                  }
                }
                if (finalPose) {
                  return finalPose;
                }
                return context.pushDefaultedPose();
              }
              overrideClips(context) {
                for (let iChild = 0; iChild < this._childEvaluators.length; ++iChild) {
                  var _this$_childEvaluator3;
                  (_this$_childEvaluator3 = this._childEvaluators[iChild]) === null || _this$_childEvaluator3 === void 0 ? void 0 : _this$_childEvaluator3.overrideClips(context);
                }
              }
              setInput(value, index) {
                this._inputs[index] = value;
                this.doEval();
              }
              doEval() {
                this.eval(this._weights, this._inputs);
              }
            }
            class AnimationBlendPort {
              constructor(host, childPorts) {
                this.childPorts = [];
                this._host = void 0;
                this._host = host;
                this.childPorts = childPorts;
              }
              evaluate(progress, context) {
                return this._host.__evaluatePort(this, progress, context);
              }
              reenter() {
                const {
                  childPorts
                } = this;
                const nChildPorts = childPorts.length;
                for (let iChild = 0; iChild < nChildPorts; ++iChild) {
                  var _childPorts$iChild;
                  (_childPorts$iChild = childPorts[iChild]) === null || _childPorts$iChild === void 0 ? void 0 : _childPorts$iChild.reenter();
                }
              }
            }

            var _dec$z, _class$y, _class2$u, _initializer$o, _initializer2$h, _dec2$u, _class4$8, _class5$8, _initializer3$9, _initializer4$5;
            const {
              ccclass: ccclass$b,
              serializable: serializable$9
            } = _decorator;
            let BindableNumber = (_dec$z = ccclass$b(`${CLASS_NAME_PREFIX_ANIM}BindableNumber`), _dec$z(_class$y = (_class2$u = class BindableNumber {
              constructor(value = 0.0) {
                this.variable = _initializer$o && _initializer$o();
                this.value = _initializer2$h && _initializer2$h();
                this.value = value;
              }
              clone() {
                const that = new BindableNumber();
                that.value = this.value;
                that.variable = this.variable;
                return that;
              }
            }, (_initializer$o = applyDecoratedInitializer(_class2$u.prototype, "variable", [serializable$9], function () {
              return '';
            }), _initializer2$h = applyDecoratedInitializer(_class2$u.prototype, "value", [serializable$9], function () {
              return 0.0;
            })), _class2$u)) || _class$y);
            let BindableBoolean = (_dec2$u = ccclass$b(`${CLASS_NAME_PREFIX_ANIM}BindableBoolean`), _dec2$u(_class4$8 = (_class5$8 = class BindableBoolean {
              constructor(value = false) {
                this.variable = _initializer3$9 && _initializer3$9();
                this.value = _initializer4$5 && _initializer4$5();
                this.value = value;
              }
              clone() {
                const that = new BindableBoolean();
                that.value = this.value;
                that.variable = this.variable;
                return that;
              }
            }, (_initializer3$9 = applyDecoratedInitializer(_class5$8.prototype, "variable", [serializable$9], function () {
              return '';
            }), _initializer4$5 = applyDecoratedInitializer(_class5$8.prototype, "value", [serializable$9], function () {
              return false;
            })), _class5$8)) || _class4$8);
            function bindOr(context, bindable, type, callback, thisArg, ...args) {
              const {
                variable,
                value
              } = bindable;
              if (!variable) {
                return value;
              }
              const varInstance = context.getVar(variable);
              if (!validateVariableExistence(varInstance, variable)) {
                return value;
              }
              if (varInstance.type !== type) {
                throw new VariableTypeMismatchedError(variable, 'number');
              }
              const initialValue = varInstance.bind(callback, thisArg, ...args);
              return initialValue;
            }
            function validateVariableExistence(varInstance, name) {
              if (!varInstance) {
                throw new VariableNotDefinedError(name);
              } else {
                return true;
              }
            }
            function validateVariableType(type, expected, name) {
              if (type !== expected) {
                throw new VariableTypeMismatchedError(name, 'number');
              }
            }
            function validateVariableTypeTriggerLike(type, name) {
              if (type !== VariableType.TRIGGER) {
                throw new VariableTypeMismatchedError(name, 'trigger');
              }
            }

            function blend1D(weights, thresholds, value) {
              weights.fill(0.0);
              if (thresholds.length === 0) ; else if (value <= thresholds[0]) {
                weights[0] = 1;
              } else if (value >= thresholds[thresholds.length - 1]) {
                weights[weights.length - 1] = 1;
              } else {
                let iUpper = 0;
                for (let iThresholds = 1; iThresholds < thresholds.length; ++iThresholds) {
                  if (thresholds[iThresholds] > value) {
                    iUpper = iThresholds;
                    break;
                  }
                }
                const lower = thresholds[iUpper - 1];
                const upper = thresholds[iUpper];
                const dVal = upper - lower;
                weights[iUpper - 1] = (upper - value) / dVal;
                weights[iUpper] = (value - lower) / dVal;
              }
            }

            var _dec$y, _class$x, _class2$t, _initializer$n, _dec2$t, _class4$7, _class5$7, _initializer2$g, _initializer3$8, _class6$3;
            const {
              ccclass: ccclass$a,
              serializable: serializable$8
            } = _decorator;
            let AnimationBlend1DItem = (_dec$y = ccclass$a(`${CLASS_NAME_PREFIX_ANIM}AnimationBlend1DItem`), _dec$y(_class$x = (_class2$t = class AnimationBlend1DItem extends AnimationBlendItem {
              constructor(...args) {
                super(...args);
                this.threshold = _initializer$n && _initializer$n();
              }
              clone() {
                const that = new AnimationBlend1DItem();
                this._copyTo(that);
                return that;
              }
              _copyTo(that) {
                super._copyTo(that);
                that.threshold = this.threshold;
                return that;
              }
            }, (_initializer$n = applyDecoratedInitializer(_class2$t.prototype, "threshold", [serializable$8], function () {
              return 0.0;
            })), _class2$t)) || _class$x);
            let AnimationBlend1D = (_dec2$t = ccclass$a('cc.animation.AnimationBlend1D'), _dec2$t(_class4$7 = (_class5$7 = (_class6$3 = class AnimationBlend1D extends AnimationBlend {
              constructor(...args) {
                super(...args);
                this._items = _initializer2$g && _initializer2$g();
                this.param = _initializer3$8 && _initializer3$8();
              }
              get items() {
                return this._items;
              }
              set items(value) {
                this._items = Array.from(value).sort(({
                  threshold: lhs
                }, {
                  threshold: rhs
                }) => lhs - rhs);
              }
              clone() {
                const that = new AnimationBlend1D();
                this.copyTo(that);
                that._items = this._items.map(item => item.clone());
                that.param = this.param.clone();
                return that;
              }
              [createEval](context, ignoreEmbeddedPlayers) {
                const evaluation = new AnimationBlend1DEval(context, ignoreEmbeddedPlayers, this, this._items, this._items.map(({
                  threshold
                }) => threshold), 0.0);
                const initialValue = bindOr(context, this.param, VariableType.FLOAT, evaluation.setInput, evaluation, 0);
                evaluation.setInput(initialValue, 0);
                return evaluation;
              }
            }, _class6$3.Item = AnimationBlend1DItem, _class6$3), (_initializer2$g = applyDecoratedInitializer(_class5$7.prototype, "_items", [serializable$8], function () {
              return [];
            }), _initializer3$8 = applyDecoratedInitializer(_class5$7.prototype, "param", [serializable$8], function () {
              return new BindableNumber();
            })), _class5$7)) || _class4$7);
            class AnimationBlend1DEval extends AnimationBlendEval {
              constructor(context, ignoreEmbeddedPlayers, base, items, thresholds, input) {
                super(context, ignoreEmbeddedPlayers, base, items, [input]);
                this._thresholds = thresholds;
                this.doEval();
              }
              eval(weights, [value]) {
                blend1D(weights, this._thresholds, value);
              }
            }

            const blendSimpleDirectional = (() => {
              const CACHE_NORMALIZED_SAMPLE = new Vec2();
              const CACHE_BARYCENTRIC_SOLUTIONS = {
                wA: 0,
                wB: 0
              };
              return function blendSimpleDirectional(weights, samples, input) {
                assertIsTrue(weights.length === samples.length);
                if (samples.length === 0) {
                  return;
                }
                if (samples.length === 1) {
                  weights[0] = 1.0;
                  return;
                }
                if (Vec2.strictEquals(input, Vec2.ZERO)) {
                  const iCenter = samples.findIndex(sample => Vec2.strictEquals(sample, Vec2.ZERO));
                  if (iCenter >= 0) {
                    weights[iCenter] = 1.0;
                  } else {
                    weights.fill(1.0 / samples.length);
                  }
                  return;
                }
                let iSectorStart = -1;
                let iSectorEnd = -1;
                let iCenter = -1;
                let lhsCosAngle = Number.NEGATIVE_INFINITY;
                let rhsCosAngle = Number.NEGATIVE_INFINITY;
                const {
                  x: inputX,
                  y: inputY
                } = input;
                for (let iSample = 0; iSample < samples.length; ++iSample) {
                  const sample = samples[iSample];
                  if (Vec2.equals(sample, Vec2.ZERO)) {
                    iCenter = iSample;
                    continue;
                  }
                  const sampleNormalized = Vec2.normalize(CACHE_NORMALIZED_SAMPLE, sample);
                  const cosAngle = Vec2.dot(sampleNormalized, input);
                  const sign = sampleNormalized.x * inputY - sampleNormalized.y * inputX;
                  if (sign > 0) {
                    if (cosAngle >= rhsCosAngle) {
                      rhsCosAngle = cosAngle;
                      iSectorStart = iSample;
                    }
                  } else if (cosAngle >= lhsCosAngle) {
                    lhsCosAngle = cosAngle;
                    iSectorEnd = iSample;
                  }
                }
                let centerWeight = 0.0;
                if (iSectorStart < 0 || iSectorEnd < 0) {
                  centerWeight = 1.0;
                } else {
                  const {
                    wA,
                    wB
                  } = solveBarycentric(samples[iSectorStart], samples[iSectorEnd], input, CACHE_BARYCENTRIC_SOLUTIONS);
                  let w1 = 0.0;
                  let w2 = 0.0;
                  const sum = wA + wB;
                  if (sum > 1) {
                    w1 = wA / sum;
                    w2 = wB / sum;
                  } else if (sum < 0) {
                    w1 = 0.0;
                    w2 = 0.0;
                    centerWeight = 1.0;
                  } else {
                    w1 = wA;
                    w2 = wB;
                    centerWeight = 1.0 - sum;
                  }
                  weights[iSectorStart] = w1;
                  weights[iSectorEnd] = w2;
                }
                if (centerWeight > 0.0) {
                  if (iCenter >= 0) {
                    weights[iCenter] = centerWeight;
                  } else {
                    const average = centerWeight / weights.length;
                    for (let i = 0; i < weights.length; ++i) {
                      weights[i] += average;
                    }
                  }
                }
              };
            })();
            function sampleFreeformCartesian(weights, thresholds, value) {
              sampleFreeform(weights, thresholds, value, getGradientBandCartesianCoords);
            }
            function sampleFreeform(weights, samples, value, getGradientBandCoords) {
              weights.fill(0.0);
              const pIpInput = new Vec2(0, 0);
              const pIJ = new Vec2(0, 0);
              let sumInfluence = 0.0;
              const nSamples = samples.length;
              for (let iSample = 0; iSample < nSamples; ++iSample) {
                let influence = Number.MAX_VALUE;
                let outsideHull = false;
                for (let jSample = 0; jSample < nSamples; ++jSample) {
                  if (iSample === jSample) {
                    continue;
                  }
                  getGradientBandCoords(samples[iSample], samples[jSample], value, pIpInput, pIJ);
                  const t = 1 - Vec2.dot(pIpInput, pIJ) / Vec2.lengthSqr(pIJ);
                  if (t < 0) {
                    outsideHull = true;
                    break;
                  }
                  influence = Math.min(influence, t);
                }
                if (!outsideHull) {
                  weights[iSample] = influence;
                  sumInfluence += influence;
                }
              }
              if (sumInfluence > 0) {
                weights.forEach((influence, index) => weights[index] = influence / sumInfluence);
              }
            }
            function solveBarycentric(a, b, p, resolutions) {
              const det = Vec2.cross(a, b);
              if (!det) {
                resolutions.wA = 0.0;
                resolutions.wB = 0.0;
              } else {
                resolutions.wA = Vec2.cross(p, b) / det;
                resolutions.wB = Vec2.cross(p, a) / -det;
              }
              return resolutions;
            }
            const getGradientBandCartesianCoords = (pI, pJ, input, pIpInput, pIpJ) => {
              Vec2.subtract(pIpInput, input, pI);
              Vec2.subtract(pIpJ, pJ, pI);
            };
            const PRECOMPUTED_VIJ_DATA_STRIDE = 3;
            class PolarSpaceGradientBandInterpolator2D {
              constructor(examples) {
                const {
                  _ANGLE_MULTIPLIER: angleMultiplier
                } = PolarSpaceGradientBandInterpolator2D;
                const nExamples = examples.length;
                const exampleMagnitudes = this._exampleMagnitudes = new Array(nExamples).fill(0.0);
                const exampleDirections = this._exampleDirections = examples.map((example, iExample) => {
                  const direction = Vec2.copy(new Vec2(), example);
                  const magnitude = Vec2.len(direction);
                  exampleMagnitudes[iExample] = magnitude;
                  if (!approx(magnitude, 0.0, 1e-5)) {
                    Vec2.multiplyScalar(direction, direction, 1.0 / magnitude);
                  }
                  return direction;
                });
                const precomputedVIJs = this._precomputedVIJs = new Float32Array(PRECOMPUTED_VIJ_DATA_STRIDE * nExamples * nExamples);
                for (let iExample = 0; iExample < nExamples; ++iExample) {
                  const magnitudeI = exampleMagnitudes[iExample];
                  const directionI = exampleDirections[iExample];
                  for (let jExample = 0; jExample < nExamples; ++jExample) {
                    if (iExample === jExample) {
                      continue;
                    }
                    const magnitudeJ = exampleMagnitudes[jExample];
                    const directionJ = exampleDirections[jExample];
                    const averagedMagnitude = (magnitudeI + magnitudeJ) / 2;
                    const pOutput = PRECOMPUTED_VIJ_DATA_STRIDE * (nExamples * iExample + jExample);
                    precomputedVIJs[pOutput + 0] = (magnitudeJ - magnitudeI) / averagedMagnitude;
                    precomputedVIJs[pOutput + 1] = signedAngle(directionI, directionJ) * angleMultiplier;
                    precomputedVIJs[pOutput + 2] = averagedMagnitude;
                  }
                }
                this._cacheVIXAngles = new Float32Array(nExamples);
              }
              interpolate(weights, input) {
                const {
                  _exampleDirections: exampleDirections,
                  _exampleMagnitudes: exampleMagnitudes,
                  _precomputedVIJs: precomputedVIJs,
                  _cacheVIXAngles: cacheVIXAngles
                } = this;
                const {
                  _CACHE_INPUT_DIRECTION: cacheInputDirection,
                  _CACHE_VIJ: cacheVIJ,
                  _CACHE_VIX: cacheVIX,
                  _ANGLE_MULTIPLIER: angleMultiplier
                } = PolarSpaceGradientBandInterpolator2D;
                const nExamples = exampleDirections.length;
                assertIsTrue(weights.length === nExamples);
                if (nExamples === 0) {
                  return;
                } else if (nExamples === 1) {
                  weights[0] = 1.0;
                  return;
                }
                const vX = input;
                const magnitudeX = Vec2.len(vX);
                const vIXAngles = cacheVIXAngles;
                if (Vec2.equals(vX, Vec2.ZERO)) {
                  for (let iExample = 0; iExample < nExamples; ++iExample) {
                    vIXAngles[iExample] = 0.0;
                  }
                } else {
                  const directionX = Vec2.multiplyScalar(cacheInputDirection, vX, 1.0 / magnitudeX);
                  for (let iExample = 0; iExample < nExamples; ++iExample) {
                    const directionI = exampleDirections[iExample];
                    if (Vec2.equals(directionI, Vec2.ZERO)) {
                      vIXAngles[iExample] = 0.0;
                    } else {
                      vIXAngles[iExample] = signedAngle(directionI, directionX) * angleMultiplier;
                    }
                  }
                }
                let totalWeight = 0.0;
                for (let iExample = 0; iExample < nExamples; ++iExample) {
                  const magnitudeI = exampleMagnitudes[iExample];
                  const directionI = exampleDirections[iExample];
                  let minInfluence = Number.POSITIVE_INFINITY;
                  for (let jExample = 0; jExample < nExamples; ++jExample) {
                    if (iExample === jExample) {
                      continue;
                    }
                    const directionJ = exampleDirections[jExample];
                    const precomputedDataIndex = PRECOMPUTED_VIJ_DATA_STRIDE * (nExamples * iExample + jExample);
                    const {
                      [precomputedDataIndex + 0]: vIJMag,
                      [precomputedDataIndex + 1]: vIJAnglePrecomputed,
                      [precomputedDataIndex + 2]: averagedMagnitude
                    } = precomputedVIJs;
                    let vIJAngle = vIJAnglePrecomputed;
                    let vIXAngle = vIXAngles[iExample];
                    if (Vec2.equals(directionI, Vec2.ZERO)) {
                      vIJAngle = vIXAngles[jExample];
                    } else if (Vec2.equals(directionJ, Vec2.ZERO)) {
                      vIJAngle = vIXAngles[iExample];
                    } else if (Vec2.equals(vX, Vec2.ZERO)) {
                      vIXAngle = vIJAngle;
                    }
                    const vIJ = Vec2.set(cacheVIJ, vIJMag, vIJAngle);
                    const vIX = Vec2.set(cacheVIX, (magnitudeX - magnitudeI) / averagedMagnitude, vIXAngle);
                    const influence = 1.0 - Vec2.dot(vIX, vIJ) / Vec2.lengthSqr(vIJ);
                    if (influence <= 0) {
                      minInfluence = 0.0;
                      break;
                    }
                    minInfluence = Math.min(minInfluence, influence);
                  }
                  weights[iExample] = minInfluence;
                  totalWeight += minInfluence;
                }
                if (totalWeight > 0) {
                  for (let iExample = 0; iExample < nExamples; ++iExample) {
                    weights[iExample] /= totalWeight;
                  }
                } else {
                  const averaged = 1.0 / nExamples;
                  for (let iExample = 0; iExample < nExamples; ++iExample) {
                    weights[iExample] = averaged;
                  }
                }
              }
            }
            PolarSpaceGradientBandInterpolator2D._CACHE_INPUT_DIRECTION = new Vec2();
            PolarSpaceGradientBandInterpolator2D._CACHE_VIJ = new Vec2();
            PolarSpaceGradientBandInterpolator2D._CACHE_VIX = new Vec2();
            PolarSpaceGradientBandInterpolator2D._ANGLE_MULTIPLIER = 1.0;
            function signedAngle(v1, v2) {
              const angle = Vec2.angle(v1, v2);
              const determinate = v1.x * v2.y - v1.y * v2.x;
              return determinate < 0 ? -angle : angle;
            }

            var _dec$x, _class$w, _class2$s, _initializer$m, _dec2$s, _class4$6, _class5$6, _initializer2$f, _initializer3$7, _initializer4$4, _initializer5$3, _class6$2;
            const {
              ccclass: ccclass$9,
              serializable: serializable$7
            } = _decorator;
            var Algorithm;
            (function (Algorithm) {
              Algorithm[Algorithm["SIMPLE_DIRECTIONAL"] = 0] = "SIMPLE_DIRECTIONAL";
              Algorithm[Algorithm["FREEFORM_CARTESIAN"] = 1] = "FREEFORM_CARTESIAN";
              Algorithm[Algorithm["FREEFORM_DIRECTIONAL"] = 2] = "FREEFORM_DIRECTIONAL";
            })(Algorithm || (Algorithm = {}));
            ccenum(Algorithm);
            let AnimationBlend2DItem = (_dec$x = ccclass$9(`${CLASS_NAME_PREFIX_ANIM}AnimationBlend2DItem`), _dec$x(_class$w = (_class2$s = class AnimationBlend2DItem extends AnimationBlendItem {
              constructor(...args) {
                super(...args);
                this.threshold = _initializer$m && _initializer$m();
              }
              clone() {
                const that = new AnimationBlend2DItem();
                this._copyTo(that);
                return that;
              }
              _copyTo(that) {
                super._copyTo(that);
                Vec2.copy(that.threshold, this.threshold);
                return that;
              }
            }, (_initializer$m = applyDecoratedInitializer(_class2$s.prototype, "threshold", [serializable$7], function () {
              return new Vec2();
            })), _class2$s)) || _class$w);
            let AnimationBlend2D = (_dec2$s = ccclass$9('cc.animation.AnimationBlend2D'), _dec2$s(_class4$6 = (_class5$6 = (_class6$2 = class AnimationBlend2D extends AnimationBlend {
              constructor(...args) {
                super(...args);
                this._items = _initializer2$f && _initializer2$f();
                this.paramX = _initializer3$7 && _initializer3$7();
                this.paramY = _initializer4$4 && _initializer4$4();
                this._algorithm = _initializer5$3 && _initializer5$3();
                this._polarSpaceGBI = undefined;
              }
              get algorithm() {
                return this._algorithm;
              }
              set algorithm(value) {
                if (value === this._algorithm) {
                  return;
                }
                this._algorithm = value;
                this._tryReconstructPolarSpaceInterpolator();
              }
              get items() {
                return this._items;
              }
              set items(items) {
                this._items = Array.from(items);
                this._tryReconstructPolarSpaceInterpolator();
              }
              __callOnAfterDeserializeRecursive() {
                this._tryReconstructPolarSpaceInterpolator();
              }
              clone() {
                const that = new AnimationBlend2D();
                this.copyTo(that);
                that._items = this._items.map(item => {
                  var _item$clone;
                  return (_item$clone = item === null || item === void 0 ? void 0 : item.clone()) !== null && _item$clone !== void 0 ? _item$clone : null;
                });
                that.paramX = this.paramX.clone();
                that.paramY = this.paramY.clone();
                that.algorithm = this._algorithm;
                return that;
              }
              [createEval](context, ignoreEmbeddedPlayers) {
                const {
                  algorithm
                } = this;
                let evaluation;
                switch (algorithm) {
                  case Algorithm.FREEFORM_DIRECTIONAL:
                    assertIsTrue(this._polarSpaceGBI, `The polar space interpolator is not setup correctly!`);
                    evaluation = new PolarSpaceGradientBandBlend2DEval(context, ignoreEmbeddedPlayers, this, this._items, this._polarSpaceGBI, [0.0, 0.0]);
                    break;
                  default:
                    assertIsTrue(false);
                  case Algorithm.SIMPLE_DIRECTIONAL:
                  case Algorithm.FREEFORM_CARTESIAN:
                    evaluation = new AnimationBlend2DEval(context, ignoreEmbeddedPlayers, this, this._items, this._items.map(({
                      threshold
                    }) => threshold), algorithm, [0.0, 0.0]);
                    break;
                }
                const initialValueX = bindOr(context, this.paramX, VariableType.FLOAT, evaluation.setInput, evaluation, 0);
                const initialValueY = bindOr(context, this.paramY, VariableType.FLOAT, evaluation.setInput, evaluation, 1);
                evaluation.setInput(initialValueX, 0);
                evaluation.setInput(initialValueY, 1);
                return evaluation;
              }
              _tryReconstructPolarSpaceInterpolator() {
                if (this._algorithm === Algorithm.FREEFORM_DIRECTIONAL) {
                  this._polarSpaceGBI = new PolarSpaceGradientBandInterpolator2D(this._items.map(item => item.threshold));
                } else {
                  this._polarSpaceGBI = undefined;
                }
              }
            }, _class6$2.Algorithm = Algorithm, _class6$2.Item = AnimationBlend2DItem, _class6$2), (_initializer2$f = applyDecoratedInitializer(_class5$6.prototype, "_items", [serializable$7], function () {
              return [];
            }), _initializer3$7 = applyDecoratedInitializer(_class5$6.prototype, "paramX", [serializable$7], function () {
              return new BindableNumber();
            }), _initializer4$4 = applyDecoratedInitializer(_class5$6.prototype, "paramY", [serializable$7], function () {
              return new BindableNumber();
            }), _initializer5$3 = applyDecoratedInitializer(_class5$6.prototype, "_algorithm", [serializable$7], function () {
              return Algorithm.SIMPLE_DIRECTIONAL;
            })), _class5$6)) || _class4$6);
            class AnimationBlend2DEval extends AnimationBlendEval {
              constructor(context, ignoreEmbeddedPlayers, base, items, thresholds, algorithm, inputs) {
                super(context, ignoreEmbeddedPlayers, base, items, inputs);
                this._thresholds = void 0;
                this._algorithm = void 0;
                this._value = new Vec2();
                this._thresholds = thresholds;
                this._algorithm = algorithm;
                this.doEval();
              }
              eval(weights, [x, y]) {
                Vec2.set(this._value, x, y);
                weights.fill(0);
                switch (this._algorithm) {
                  case Algorithm.SIMPLE_DIRECTIONAL:
                    blendSimpleDirectional(weights, this._thresholds, this._value);
                    break;
                  case Algorithm.FREEFORM_CARTESIAN:
                    sampleFreeformCartesian(weights, this._thresholds, this._value);
                    break;
                }
              }
            }
            class PolarSpaceGradientBandBlend2DEval extends AnimationBlendEval {
              constructor(context, ignoreEmbeddedPlayers, base, items, interpolator, inputs) {
                super(context, ignoreEmbeddedPlayers, base, items, inputs);
                this._interpolator = void 0;
                this._value = new Vec2();
                this._interpolator = interpolator;
                this.doEval();
              }
              eval(weights, [x, y]) {
                Vec2.set(this._value, x, y);
                weights.fill(0);
                this._interpolator.interpolate(weights, this._value);
              }
            }

            var _dec$w, _class$v, _class2$r, _initializer$l, _dec2$r, _class4$5, _class5$5, _initializer2$e, _class6$1;
            const {
              ccclass: ccclass$8,
              serializable: serializable$6
            } = _decorator;
            let AnimationBlendDirectItem = (_dec$w = ccclass$8(`${CLASS_NAME_PREFIX_ANIM}AnimationBlendDirectItem`), _dec$w(_class$v = (_class2$r = class AnimationBlendDirectItem extends AnimationBlendItem {
              constructor(...args) {
                super(...args);
                this.weight = _initializer$l && _initializer$l();
              }
              clone() {
                const that = new AnimationBlendDirectItem();
                this._copyTo(that);
                return that;
              }
              _copyTo(that) {
                super._copyTo(that);
                that.weight = this.weight;
                return that;
              }
            }, (_initializer$l = applyDecoratedInitializer(_class2$r.prototype, "weight", [serializable$6], function () {
              return new BindableNumber(0.0);
            })), _class2$r)) || _class$v);
            (_dec2$r = ccclass$8('cc.animation.AnimationBlendDirect'), _dec2$r(_class4$5 = (_class5$5 = (_class6$1 = class AnimationBlendDirect extends AnimationBlend {
              constructor(...args) {
                super(...args);
                this._items = _initializer2$e && _initializer2$e();
              }
              get items() {
                return this._items;
              }
              set items(value) {
                this._items = Array.from(value);
              }
              clone() {
                const that = new AnimationBlendDirect();
                this.copyTo(that);
                that._items = this._items.map(item => {
                  var _item$clone;
                  return (_item$clone = item === null || item === void 0 ? void 0 : item.clone()) !== null && _item$clone !== void 0 ? _item$clone : null;
                });
                return that;
              }
              [createEval](context, ignoreEmbeddedPlayers) {
                const myEval = new AnimationBlendDirectEval(context, ignoreEmbeddedPlayers, this, this._items, new Array(this._items.length).fill(0.0));
                for (let iItem = 0; iItem < this._items.length; ++iItem) {
                  const item = this._items[iItem];
                  const initialValue = bindOr(context, item.weight, VariableType.FLOAT, myEval.setInput, myEval, iItem);
                  myEval.setInput(initialValue, iItem);
                }
                return myEval;
              }
            }, _class6$1.Item = AnimationBlendDirectItem, _class6$1), (_initializer2$e = applyDecoratedInitializer(_class5$5.prototype, "_items", [serializable$6], function () {
              return [];
            })), _class5$5)) || _class4$5);
            class AnimationBlendDirectEval extends AnimationBlendEval {
              constructor(...args) {
                super(...args);
                this.doEval();
              }
              eval(weights, inputs) {
                const nChildren = weights.length;
                for (let iChild = 0; iChild < nChildren; ++iChild) {
                  weights[iChild] = inputs[iChild];
                }
              }
            }

            var _dec$v, _class$u, _class2$q, _initializer$k, _initializer2$d, _dec2$q, _dec3$m, _class4$4, _class5$4, _initializer3$6;
            let JointMask = (_dec$v = ccclass$g('cc.JointMask'), _dec$v(_class$u = (_class2$q = class JointMask {
              constructor() {
                this.path = _initializer$k && _initializer$k();
                this.enabled = _initializer2$d && _initializer2$d();
              }
            }, (_initializer$k = applyDecoratedInitializer(_class2$q.prototype, "path", [serializable$d], function () {
              return '';
            }), _initializer2$d = applyDecoratedInitializer(_class2$q.prototype, "enabled", [serializable$d], function () {
              return true;
            })), _class2$q)) || _class$u);
            let AnimationMask = (_dec2$q = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}AnimationMask`), _dec3$m = type$2(JointMask), _dec2$q(_class4$4 = (_class5$4 = class AnimationMask extends Asset {
              constructor(...args) {
                super(...args);
                this._jointMasks = _initializer3$6 && _initializer3$6();
              }
              get joints() {
                return this._jointMasks;
              }
              set joints(value) {
                this.clear();
                for (const joint of value) {
                  this.addJoint(joint.path, joint.enabled);
                }
              }
              addJoint(path, enabled) {
                this.removeJoint(path);
                const info = new JointMask();
                info.path = path;
                info.enabled = enabled;
                this._jointMasks.push(info);
              }
              removeJoint(removal) {
                removeIf(this._jointMasks, ({
                  path
                }) => path === removal);
              }
              clear() {
                this._jointMasks.length = 0;
              }
              filterDisabledNodes(root) {
                const {
                  _jointMasks: jointMasks
                } = this;
                const nJointMasks = jointMasks.length;
                const disabledNodes = new Set();
                for (let iJointMask = 0; iJointMask < nJointMasks; ++iJointMask) {
                  const {
                    path,
                    enabled
                  } = jointMasks[iJointMask];
                  if (enabled) {
                    continue;
                  }
                  const node = root.getChildByPath(path);
                  if (node) {
                    disabledNodes.add(node);
                  }
                }
                return disabledNodes;
              }
              isExcluded(path) {
                var _this$_jointMasks$fin, _this$_jointMasks$fin2;
                return !((_this$_jointMasks$fin = (_this$_jointMasks$fin2 = this._jointMasks.find(({
                  path: p
                }) => p === path)) === null || _this$_jointMasks$fin2 === void 0 ? void 0 : _this$_jointMasks$fin2.enabled) !== null && _this$_jointMasks$fin !== void 0 ? _this$_jointMasks$fin : true);
              }
            }, (_initializer3$6 = applyDecoratedInitializer(_class5$4.prototype, "_jointMasks", [serializable$d], function () {
              return [];
            }), _applyDecoratedDescriptor(_class5$4.prototype, "joints", [_dec3$m], Object.getOwnPropertyDescriptor(_class5$4.prototype, "joints"), _class5$4.prototype)), _class5$4)) || _class4$4);

            let _Symbol$iterator;
            var _dec$u, _class$t, _class2$p, _initializer$j, _initializer2$c, _dec2$p, _dec3$l, _class4$3, _class5$3, _initializer3$5, _initializer4$3, _dec4$f, _class7$1, _class8$1, _initializer5$2;
            let ClipOverrideEntry = (_dec$u = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}ClipOverrideEntry`), _dec$u(_class$t = (_class2$p = class ClipOverrideEntry {
              constructor() {
                this.original = _initializer$j && _initializer$j();
                this.substitution = _initializer2$c && _initializer2$c();
              }
            }, (_initializer$j = applyDecoratedInitializer(_class2$p.prototype, "original", [serializable$d], function () {
              return null;
            }), _initializer2$c = applyDecoratedInitializer(_class2$p.prototype, "substitution", [serializable$d], function () {
              return null;
            })), _class2$p)) || _class$t);
            let AnimationGraphVariant = (_dec2$p = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}AnimationGraphVariant`), _dec3$l = type$2(AnimationGraph), _dec2$p(_class4$3 = (_class5$3 = class AnimationGraphVariant extends AnimationGraphLike {
              constructor(...args) {
                super(...args);
                this._graph = _initializer3$5 && _initializer3$5();
                this._clipOverrides = _initializer4$3 && _initializer4$3();
              }
              get original() {
                return this._graph;
              }
              set original(value) {
                this._graph = value;
              }
              get clipOverrides() {
                return this._clipOverrides;
              }
            }, (_applyDecoratedDescriptor(_class5$3.prototype, "original", [_dec3$l], Object.getOwnPropertyDescriptor(_class5$3.prototype, "original"), _class5$3.prototype), _initializer3$5 = applyDecoratedInitializer(_class5$3.prototype, "_graph", [serializable$d], function () {
              return null;
            }), _initializer4$3 = applyDecoratedInitializer(_class5$3.prototype, "_clipOverrides", [serializable$d], function () {
              return new ClipOverrideMap();
            })), _class5$3)) || _class4$3);
            let ClipOverrideMap = (_dec4$f = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}ClipOverrideMap`), _dec4$f(_class7$1 = (_class8$1 = (_Symbol$iterator = Symbol.iterator, class ClipOverrideMap {
              constructor() {
                this._entries = _initializer5$2 && _initializer5$2();
              }
              get size() {
                return this._entries.length;
              }
              [_Symbol$iterator]() {
                return this._entries[Symbol.iterator]();
              }
              has(original) {
                return !!this._entries.find(({
                  original: o
                }) => o === original);
              }
              get(original) {
                const entry = this._entries.find(({
                  original: o
                }) => o === original);
                return entry === null || entry === void 0 ? void 0 : entry.substitution;
              }
              set(original, substitution) {
                const entry = this._entries.find(({
                  original: o
                }) => o === original);
                if (entry) {
                  entry.substitution = substitution;
                } else {
                  const newEntry = new ClipOverrideEntry();
                  newEntry.original = original;
                  newEntry.substitution = substitution;
                  this._entries.push(newEntry);
                }
              }
              delete(original) {
                removeIf(this._entries, ({
                  original: o
                }) => o === original);
              }
              clear() {
                this._entries.length = 0;
              }
            }), (_initializer5$2 = applyDecoratedInitializer(_class8$1.prototype, "_entries", [serializable$d], function () {
              return [];
            })), _class8$1)) || _class7$1);

            const POSE_GRAPH_NODE_MENU_PREFIX_POSE = `i18n:ENGINE.animation_graph.pose_graph_node_sub_categories.pose_nodes/`;
            const POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND = `${POSE_GRAPH_NODE_MENU_PREFIX_POSE}/` + `i18n:ENGINE.animation_graph.pose_graph_node_sub_categories.pose_nodes_blend/`;

            var _dec$t, _dec2$o, _dec3$k, _dec4$e, _class$s, _class2$o, _initializer$i;
            const createNodeFactory$1 = {
              listEntries: context => {
                return [...context.animationGraph.layers[context.layerIndex].stashes()].map(([stashId]) => {
                  return {
                    arg: stashId,
                    menu: stashId
                  };
                });
              },
              create: arg => {
                const node = new PoseNodeUseStashedPose();
                node.stashName = arg;
                return node;
              }
            };
            let PoseNodeUseStashedPose = (_dec$t = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeUseStashedPose`), _dec2$o = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3$k = poseGraphCreateNodeFactory(createNodeFactory$1), _dec4$e = poseGraphNodeAppearance({
              inline: true
            }), _dec$t(_class$s = _dec2$o(_class$s = _dec3$k(_class$s = _dec4$e(_class$s = (_class2$o = class PoseNodeUseStashedPose extends PoseNode {
              constructor(...args) {
                super(...args);
                this.stashName = _initializer$i && _initializer$i();
                this._runtimeStash = undefined;
              }
              bind(context) {
                const {
                  stashName
                } = this;
                if (!stashName) {
                  return;
                }
                const runtimeStash = context.stashView.bindStash(stashName);
                this._runtimeStash = runtimeStash;
              }
              settle(context) {}
              reenter() {
                var _this$_runtimeStash;
                (_this$_runtimeStash = this._runtimeStash) === null || _this$_runtimeStash === void 0 ? void 0 : _this$_runtimeStash.reenter();
              }
              doUpdate(context) {
                var _this$_runtimeStash2;
                (_this$_runtimeStash2 = this._runtimeStash) === null || _this$_runtimeStash2 === void 0 ? void 0 : _this$_runtimeStash2.requestUpdate(context);
              }
              doEvaluate(context) {
                var _this$_runtimeStash$e, _this$_runtimeStash3;
                return (_this$_runtimeStash$e = (_this$_runtimeStash3 = this._runtimeStash) === null || _this$_runtimeStash3 === void 0 ? void 0 : _this$_runtimeStash3.evaluate(context)) !== null && _this$_runtimeStash$e !== void 0 ? _this$_runtimeStash$e : context.pushDefaultedPose();
              }
            }, (_initializer$i = applyDecoratedInitializer(_class2$o.prototype, "stashName", [serializable$d], function () {
              return '';
            })), _class2$o)) || _class$s) || _class$s) || _class$s) || _class$s);

            var _dec$s, _class$r, _class2$n, _initializer$h, _initializer2$b, _class3$2;
            const {
              ccclass: ccclass$7,
              serializable: serializable$5
            } = _decorator;
            var UnaryOperator;
            (function (UnaryOperator) {
              UnaryOperator[UnaryOperator["TRUTHY"] = 0] = "TRUTHY";
              UnaryOperator[UnaryOperator["FALSY"] = 1] = "FALSY";
            })(UnaryOperator || (UnaryOperator = {}));
            (_dec$s = ccclass$7(`${CLASS_NAME_PREFIX_ANIM}UnaryCondition`), _dec$s(_class$r = (_class2$n = (_class3$2 = class UnaryCondition {
              constructor() {
                this.operator = _initializer$h && _initializer$h();
                this.operand = _initializer2$b && _initializer2$b();
              }
              clone() {
                const that = new UnaryCondition();
                that.operator = this.operator;
                that.operand = this.operand.clone();
                return that;
              }
              [createEval](context) {
                const {
                  operator,
                  operand
                } = this;
                const evaluation = new UnaryConditionEval(operator, false);
                const value = bindOr(context, operand, VariableType.BOOLEAN, evaluation.setOperand, evaluation);
                evaluation.reset(value);
                return evaluation;
              }
            }, _class3$2.Operator = UnaryOperator, _class3$2), (_initializer$h = applyDecoratedInitializer(_class2$n.prototype, "operator", [serializable$5], function () {
              return UnaryOperator.TRUTHY;
            }), _initializer2$b = applyDecoratedInitializer(_class2$n.prototype, "operand", [serializable$5], function () {
              return new BindableBoolean();
            })), _class2$n)) || _class$r);
            class UnaryConditionEval {
              constructor(operator, operand) {
                this._operator = operator;
                this._operand = operand;
                this._eval();
              }
              reset(value) {
                this.setOperand(value);
              }
              setOperand(value) {
                this._operand = value;
                this._eval();
              }
              eval() {
                return this._result;
              }
              _eval() {
                const {
                  _operand: operand
                } = this;
                switch (this._operator) {
                  default:
                  case UnaryOperator.TRUTHY:
                    this._result = !!operand;
                    break;
                  case UnaryOperator.FALSY:
                    this._result = !operand;
                    break;
                }
              }
            }

            let TCBindingValueType;
            (function (TCBindingValueType) {
              TCBindingValueType[TCBindingValueType["FLOAT"] = 0] = "FLOAT";
              TCBindingValueType[TCBindingValueType["INTEGER"] = 3] = "INTEGER";
            })(TCBindingValueType || (TCBindingValueType = {}));
            class TCBinding {}

            const provide = (...valueTypes) => () => {} ;
            let TCBindingTransitionSourceFilter;
            (function (TCBindingTransitionSourceFilter) {
              TCBindingTransitionSourceFilter[TCBindingTransitionSourceFilter["MOTION"] = 1] = "MOTION";
              TCBindingTransitionSourceFilter[TCBindingTransitionSourceFilter["POSE"] = 2] = "POSE";
              TCBindingTransitionSourceFilter[TCBindingTransitionSourceFilter["EMPTY"] = 4] = "EMPTY";
              TCBindingTransitionSourceFilter[TCBindingTransitionSourceFilter["WEIGHTED"] = 7] = "WEIGHTED";
            })(TCBindingTransitionSourceFilter || (TCBindingTransitionSourceFilter = {}));
            const support = transitionSourceFilter => () => {} ;

            var _dec$r, _dec2$n, _class$q, _class2$m, _initializer$g, _initializer2$a;
            const {
              ccclass: ccclass$6,
              serializable: serializable$4
            } = _decorator;
            let TCVariableBinding = (_dec$r = ccclass$6(`${CLASS_NAME_PREFIX_ANIM}TCVariableBinding`), _dec2$n = provide(TCBindingValueType.FLOAT, TCBindingValueType.INTEGER), _dec$r(_class$q = _dec2$n(_class$q = (_class2$m = class TCVariableBinding extends TCBinding {
              constructor(...args) {
                super(...args);
                this.type = _initializer$g && _initializer$g();
                this.variableName = _initializer2$a && _initializer2$a();
              }
              getValueType() {
                return this.type;
              }
              bind(context) {
                const varInstance = context.getVar(this.variableName);
                if (!varInstance) {
                  return undefined;
                }
                return new TCVariableBindingEvaluation(varInstance);
              }
            }, (_initializer$g = applyDecoratedInitializer(_class2$m.prototype, "type", [serializable$4, editorOnly], function () {
              return TCBindingValueType.FLOAT;
            }), _initializer2$a = applyDecoratedInitializer(_class2$m.prototype, "variableName", [serializable$4], function () {
              return '';
            })), _class2$m)) || _class$q) || _class$q);
            class TCVariableBindingEvaluation {
              constructor(_varInstance) {
                this._varInstance = _varInstance;
              }
              evaluate() {
                return this._varInstance.value;
              }
            }

            var _dec$q, _dec2$m, _class$p, _class2$l, _initializer$f;
            const {
              ccclass: ccclass$5,
              serializable: serializable$3
            } = _decorator;
            (_dec$q = ccclass$5(`${CLASS_NAME_PREFIX_ANIM}TCAuxiliaryCurveBinding`), _dec2$m = provide(TCBindingValueType.FLOAT), _dec$q(_class$p = _dec2$m(_class$p = (_class2$l = class TCAuxiliaryCurveBinding extends TCBinding {
              constructor(...args) {
                super(...args);
                this.curveName = _initializer$f && _initializer$f();
              }
              getValueType() {
                return TCBindingValueType.FLOAT;
              }
              bind(context) {
                const view = context.getEvaluationTimeAuxiliaryCurveView();
                return new TCAuxiliaryCurveBindingEvaluation(view, this.curveName);
              }
            }, (_initializer$f = applyDecoratedInitializer(_class2$l.prototype, "curveName", [serializable$3], function () {
              return '';
            })), _class2$l)) || _class$p) || _class$p);
            class TCAuxiliaryCurveBindingEvaluation {
              constructor(_view, _curveName) {
                this._view = _view;
                this._curveName = _curveName;
              }
              evaluate() {
                return this._view.get(this._curveName);
              }
            }

            var _dec$p, _dec2$l, _dec3$j, _class$o;
            const {
              ccclass: ccclass$4
            } = _decorator;
            (_dec$p = ccclass$4(`${CLASS_NAME_PREFIX_ANIM}TCStateWeightBinding`), _dec2$l = provide(TCBindingValueType.FLOAT), _dec3$j = support(TCBindingTransitionSourceFilter.WEIGHTED), _dec$p(_class$o = _dec2$l(_class$o = _dec3$j(_class$o = class TCStateWeightBinding extends TCBinding {
              getValueType() {
                return TCBindingValueType.FLOAT;
              }
              bind(_context) {
                return new TCStateWeightBindingEvaluation();
              }
            }) || _class$o) || _class$o) || _class$o);
            class TCStateWeightBindingEvaluation {
              evaluate(context) {
                return context.sourceStateWeight;
              }
            }

            var _dec$o, _dec2$k, _dec3$i, _class$n;
            const {
              ccclass: ccclass$3
            } = _decorator;
            (_dec$o = ccclass$3(`${CLASS_NAME_PREFIX_ANIM}TCStateMotionTimeBinding`), _dec2$k = provide(TCBindingValueType.FLOAT), _dec3$i = support(TCBindingTransitionSourceFilter.POSE), _dec$o(_class$n = _dec2$k(_class$n = _dec3$i(_class$n = class TCStateMotionTimeBinding extends TCBinding {
              getValueType() {
                return TCBindingValueType.FLOAT;
              }
              bind(_context) {
                return new TCStateMotionTimeBindingEvaluation();
              }
            }) || _class$n) || _class$n) || _class$n);
            class TCStateMotionTimeBindingEvaluation {
              evaluate(context) {
                return context.sourceStateMotionTimeNormalized;
              }
            }

            var _dec$n, _class$m, _class2$k, _initializer$e, _initializer2$9, _initializer3$4, _initializer4$2, _class3$1;
            const {
              ccclass: ccclass$2,
              serializable: serializable$2
            } = _decorator;
            var BinaryOperator;
            (function (BinaryOperator) {
              BinaryOperator[BinaryOperator["EQUAL_TO"] = 0] = "EQUAL_TO";
              BinaryOperator[BinaryOperator["NOT_EQUAL_TO"] = 1] = "NOT_EQUAL_TO";
              BinaryOperator[BinaryOperator["LESS_THAN"] = 2] = "LESS_THAN";
              BinaryOperator[BinaryOperator["LESS_THAN_OR_EQUAL_TO"] = 3] = "LESS_THAN_OR_EQUAL_TO";
              BinaryOperator[BinaryOperator["GREATER_THAN"] = 4] = "GREATER_THAN";
              BinaryOperator[BinaryOperator["GREATER_THAN_OR_EQUAL_TO"] = 5] = "GREATER_THAN_OR_EQUAL_TO";
            })(BinaryOperator || (BinaryOperator = {}));
            (_dec$n = ccclass$2(`${CLASS_NAME_PREFIX_ANIM}BinaryCondition`), _dec$n(_class$m = (_class2$k = (_class3$1 = class BinaryCondition {
              constructor() {
                this.operator = _initializer$e && _initializer$e();
                this.lhs = _initializer2$9 && _initializer2$9();
                this.lhsBinding = _initializer3$4 && _initializer3$4();
                this.rhs = _initializer4$2 && _initializer4$2();
              }
              clone() {
                const that = new BinaryCondition();
                that.operator = this.operator;
                that.lhs = this.lhs;
                that.lhsBinding = instantiate(this.lhsBinding);
                that.rhs = this.rhs;
                return that;
              }
              [createEval](context) {
                var _this$lhsBinding;
                const lhsBindingEvaluation = (_this$lhsBinding = this.lhsBinding) === null || _this$lhsBinding === void 0 ? void 0 : _this$lhsBinding.bind(context);
                const binaryConditionEval = new BinaryConditionEval(this.operator, this.lhs, this.rhs, lhsBindingEvaluation);
                return binaryConditionEval;
              }
            }, _class3$1.Operator = BinaryOperator, _class3$1), (_initializer$e = applyDecoratedInitializer(_class2$k.prototype, "operator", [serializable$2], function () {
              return BinaryOperator.EQUAL_TO;
            }), _initializer2$9 = applyDecoratedInitializer(_class2$k.prototype, "lhs", [serializable$2], function () {
              return 0.0;
            }), _initializer3$4 = applyDecoratedInitializer(_class2$k.prototype, "lhsBinding", [serializable$2], function () {
              return new TCVariableBinding();
            }), _initializer4$2 = applyDecoratedInitializer(_class2$k.prototype, "rhs", [serializable$2], function () {
              return 0.0;
            })), _class2$k)) || _class$m);
            class BinaryConditionEval {
              constructor(_operator, lhsValue, rhsValue, _lhsBindingEvaluation) {
                this._operator = _operator;
                this._lhsBindingEvaluation = _lhsBindingEvaluation;
                this._lhsValue = lhsValue;
                this._rhsValue = rhsValue;
              }
              eval(context) {
                var _this$_lhsBindingEval, _this$_lhsBindingEval2;
                const lhsValue = (_this$_lhsBindingEval = (_this$_lhsBindingEval2 = this._lhsBindingEvaluation) === null || _this$_lhsBindingEval2 === void 0 ? void 0 : _this$_lhsBindingEval2.evaluate(context)) !== null && _this$_lhsBindingEval !== void 0 ? _this$_lhsBindingEval : this._lhsValue;
                const rhsValue = this._rhsValue;
                switch (this._operator) {
                  default:
                  case BinaryOperator.EQUAL_TO:
                    return lhsValue === rhsValue;
                  case BinaryOperator.NOT_EQUAL_TO:
                    return lhsValue !== rhsValue;
                  case BinaryOperator.LESS_THAN:
                    return lhsValue < rhsValue;
                  case BinaryOperator.LESS_THAN_OR_EQUAL_TO:
                    return lhsValue <= rhsValue;
                  case BinaryOperator.GREATER_THAN:
                    return lhsValue > rhsValue;
                  case BinaryOperator.GREATER_THAN_OR_EQUAL_TO:
                    return lhsValue >= rhsValue;
                }
              }
            }

            var _dec$m, _class$l, _class2$j, _initializer$d;
            const {
              ccclass: ccclass$1,
              serializable: serializable$1
            } = _decorator;
            let TriggerCondition = (_dec$m = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}TriggerCondition`), _dec$m(_class$l = (_class2$j = class TriggerCondition {
              constructor() {
                this.trigger = _initializer$d && _initializer$d();
              }
              clone() {
                const that = new TriggerCondition();
                that.trigger = this.trigger;
                return that;
              }
              [createEval](context) {
                const evaluation = new TriggerConditionEval(false);
                const triggerInstance = context.getVar(this.trigger);
                if (validateVariableExistence(triggerInstance, this.trigger)) {
                  validateVariableTypeTriggerLike(triggerInstance.type, this.trigger);
                  evaluation.setTrigger(triggerInstance.bind(evaluation.setTrigger, evaluation));
                }
                return evaluation;
              }
            }, (_initializer$d = applyDecoratedInitializer(_class2$j.prototype, "trigger", [serializable$1], function () {
              return '';
            })), _class2$j)) || _class$l);
            class TriggerConditionEval {
              constructor(triggered) {
                this._triggered = false;
                this._triggered = triggered;
              }
              setTrigger(trigger) {
                this._triggered = trigger;
              }
              eval() {
                return this._triggered;
              }
            }

            var _dec$l, _class$k;
            let StateMachineComponent = (_dec$l = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}StateMachineComponent`), _dec$l(_class$k = class StateMachineComponent {
              onMotionStateEnter(controller, motionStateStatus) {}
              onMotionStateExit(controller, motionStateStatus) {}
              onMotionStateUpdate(controller, motionStateStatus) {}
              onStateMachineEnter(controller) {}
              onStateMachineExit(controller) {}
            }) || _class$k);

            const TRANSFORM_STRIDE_IN_FLOATS = 10;
            const TRANSFORM_STRIDE_IN_BYTES = Float64Array.BYTES_PER_ELEMENT * TRANSFORM_STRIDE_IN_FLOATS;
            const ROTATION_OFFSET = 3;
            const SCALE_OFFSET = ROTATION_OFFSET + 4;
            class TransformArray {
              static get BYTES_PER_ELEMENT() {
                return TRANSFORM_STRIDE_IN_BYTES;
              }
              constructor(bufferOrLength, byteOffset, length_) {
                this._data = void 0;
                if (typeof bufferOrLength === 'undefined') {
                  this._data = new Float64Array();
                } else if (typeof bufferOrLength === 'number') {
                  this._data = new Float64Array(TRANSFORM_STRIDE_IN_FLOATS * bufferOrLength);
                } else {
                  this._data = new Float64Array(bufferOrLength, byteOffset, typeof length_ === 'number' ? TRANSFORM_STRIDE_IN_FLOATS * length_ : undefined);
                }
              }
              get buffer() {
                return this._data.buffer;
              }
              get byteLength() {
                return this._data.byteLength;
              }
              get byteOffset() {
                return this._data.byteOffset;
              }
              get length() {
                return this._data.length / TRANSFORM_STRIDE_IN_FLOATS;
              }
              getTransform(index, out) {
                const {
                  _data: data
                } = this;
                const {
                  position,
                  rotation,
                  scale
                } = out;
                const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
                Vec3.fromArray(position, data, baseOffset);
                Quat.fromArray(rotation, data, baseOffset + ROTATION_OFFSET);
                Vec3.fromArray(scale, data, baseOffset + SCALE_OFFSET);
                return out;
              }
              getPosition(index, out) {
                const {
                  _data: data
                } = this;
                const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
                Vec3.fromArray(out, data, baseOffset);
                return out;
              }
              getRotation(index, out) {
                const {
                  _data: data
                } = this;
                const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
                Quat.fromArray(out, data, baseOffset + ROTATION_OFFSET);
                return out;
              }
              getScale(index, out) {
                const {
                  _data: data
                } = this;
                const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
                Vec3.fromArray(out, data, baseOffset + SCALE_OFFSET);
                return out;
              }
              setTransform(index, value) {
                const {
                  _data: data
                } = this;
                const {
                  position,
                  rotation,
                  scale
                } = value;
                const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
                Vec3.toArray(data, position, baseOffset);
                Quat.toArray(data, rotation, baseOffset + ROTATION_OFFSET);
                Vec3.toArray(data, scale, baseOffset + SCALE_OFFSET);
              }
              setPosition(index, value) {
                const {
                  _data: data
                } = this;
                const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
                Vec3.toArray(data, value, baseOffset);
              }
              setRotation(index, value) {
                const {
                  _data: data
                } = this;
                const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
                Quat.toArray(data, value, baseOffset + ROTATION_OFFSET);
              }
              setScale(index, value) {
                const {
                  _data: data
                } = this;
                const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
                Vec3.toArray(data, value, baseOffset + SCALE_OFFSET);
              }
              copyWithin(target, start, end) {
                this._data.copyWithin(target * TRANSFORM_STRIDE_IN_FLOATS, start * TRANSFORM_STRIDE_IN_FLOATS, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
              }
              fill(value, start, end) {
                var _start, _end;
                const {
                  length
                } = this;
                (_start = start) !== null && _start !== void 0 ? _start : start = 0;
                (_end = end) !== null && _end !== void 0 ? _end : end = length;
                if (start >= length) {
                  return;
                }
                this.setTransform(start, value);
                for (let i = start + 1; i < end; ++i) {
                  this.copyWithin(i, start, start + 1);
                }
              }
              fillZero(start, end) {
                this._data.fill(0.0, typeof start === 'number' ? start * TRANSFORM_STRIDE_IN_FLOATS : undefined, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
              }
              set(transformArray, targetOffset) {
                this._data.set(transformArray._data, typeof targetOffset === 'number' ? targetOffset * TRANSFORM_STRIDE_IN_FLOATS : undefined);
              }
              slice(start, end) {
                const dataSliced = this._data.slice(typeof start === 'number' ? start * TRANSFORM_STRIDE_IN_FLOATS : undefined, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
                return new TransformArray(dataSliced.buffer, dataSliced.byteOffset, dataSliced.length / TRANSFORM_STRIDE_IN_FLOATS);
              }
              copyRange(targetOffset, source, sourceOffset, size) {
                const sizeInFloats = TRANSFORM_STRIDE_IN_FLOATS * size;
                const targetFloats = this._data;
                const targetStartInFloats = TRANSFORM_STRIDE_IN_FLOATS * targetOffset;
                const sourceFloats = source._data;
                const sourceStartInFloats = TRANSFORM_STRIDE_IN_FLOATS * sourceOffset;
                for (let i = 0; i < sizeInFloats; ++i) {
                  targetFloats[targetStartInFloats + i] = sourceFloats[sourceStartInFloats + i];
                }
              }
            }

            const allocatorPageCountTag = Symbol('[[The count of pages used by this allocator.]]' );
            const onStackPurgedTag = Symbol(`[[Notify that theres is no allocator on the stack anymore.]]` );
            class SharedMemoryPage {
              constructor(byteLength) {
                this.buffer = void 0;
                this.useCount = 0;
                this.buffer = new ArrayBuffer(byteLength);
              }
            }
            class PagedStack {
              constructor(_manager, _pageSize) {
                this._locking = false;
                this._pages = [];
                this._allocatorCount = 0;
                this._manager = _manager;
                this._pageSize = _pageSize;
              }
              get pageSize() {
                return this._pageSize;
              }
              get debugLocking() {
                return this._locking;
              }
              get allocatorCount() {
                return this._allocatorCount;
              }
              debugLock() {
                assertIsTrue(!this._locking, `The memory is locking.`);
                this._locking = true;
              }
              debugUnlock() {
                assertIsTrue(this._locking, `Wrong execution logic: the memory is not locking.`);
                this._locking = false;
              }
              getPageMemory(index) {
                assertIsTrue(index >= 0 && index < this._pages.length, `Page index out of range`);
                return this._pages[index].buffer;
              }
              pushPage(allocator) {
                const oldAllocatorPageCount = allocator[allocatorPageCountTag];
                assertIsTrue(oldAllocatorPageCount <= this._pages.length);
                if (oldAllocatorPageCount === this._pages.length) {
                  this._pushNewPage();
                }
                assertIsTrue(oldAllocatorPageCount < this._pages.length);
                const page = this._pages[oldAllocatorPageCount];
                ++page.useCount;
                ++allocator[allocatorPageCountTag];
                return page;
              }
              popPage(allocator) {
                const allocatorPageCount = allocator[allocatorPageCountTag];
                assertIsTrue(allocatorPageCount > 0);
                const allocatorLastPageIndex = allocatorPageCount - 1;
                const lastPage = this._pages[allocatorLastPageIndex];
                assertIsTrue(lastPage.useCount > 0);
                --lastPage.useCount;
                --allocator[allocatorPageCountTag];
                if (lastPage.useCount === 0) {
                  assertIsTrue(allocatorLastPageIndex === this._pages.length - 1);
                  this._pages.pop();
                }
              }
              createAllocator(sliceSize) {
                const allocator = new SharedStackBasedAllocator(this, sliceSize);
                ++this._allocatorCount;
                return allocator;
              }
              destroyAllocator(allocator) {
                const allocatorPageCount = allocator[allocatorPageCountTag];
                for (let iPage = 0; iPage < allocatorPageCount; ++iPage) {
                  const page = this._pages[iPage];
                  assertIsTrue(page.useCount > 0);
                  --page.useCount;
                }
                assertIsTrue(this._allocatorCount > 0);
                --this._allocatorCount;
                if (this._allocatorCount === 0) {
                  this._manager[onStackPurgedTag](this);
                }
              }
              _pushNewPage() {
                const newPage = new SharedMemoryPage(this._pageSize);
                this._pages.push(newPage);
              }
            }
            class SharedMemorySlice {
              constructor(buffer, byteOffset) {
                this.buffer = buffer;
                this.byteOffset = byteOffset;
              }
            }
            class SharedStackBasedAllocator {
              constructor(_resource, _sliceSize) {
                this[allocatorPageCountTag] = 0;
                this._slicesPerPage = 0;
                this._slices = [];
                this._resource = _resource;
                this._sliceSize = _sliceSize;
                const slicesPerPage = Math.floor(this._resource.pageSize / _sliceSize);
                assertIsTrue(slicesPerPage > 0);
                this._slicesPerPage = slicesPerPage;
              }
              get isEmpty() {
                return this._slices.length === 0;
              }
              destroy() {
                assertIsTrue(this._slices.length === 0, `Can not destroy the allocator since it's not empty.`);
                assertIsTrue(!this._resource.debugLocking, `Can not destroy the allocator since it's locking.`);
                this._resource.destroyAllocator(this);
              }
              debugLock() {
                this._resource.debugLock();
              }
              debugUnlock() {
                this._resource.debugUnlock();
              }
              push() {
                const {
                  _sliceSize: sliceLength,
                  _slices: slices,
                  _slicesPerPage: slicesPerPage
                } = this;
                const desiredSliceIndex = slices.length;
                let newSliceIndexInPage = 0;
                let newSlicePageIndex = 0;
                if (sliceLength === 0) {
                  if (this[allocatorPageCountTag] === 0) {
                    this._resource.pushPage(this);
                  }
                  assertIsTrue(this[allocatorPageCountTag] === 1);
                } else {
                  const capacity = slicesPerPage * this[allocatorPageCountTag];
                  assertIsTrue(desiredSliceIndex <= capacity);
                  if (desiredSliceIndex === capacity) {
                    this._resource.pushPage(this);
                    assertIsTrue(desiredSliceIndex < slicesPerPage * this[allocatorPageCountTag]);
                  }
                  newSliceIndexInPage = desiredSliceIndex % slicesPerPage;
                  newSlicePageIndex = (desiredSliceIndex - newSliceIndexInPage) / slicesPerPage;
                  assertIsTrue(this[allocatorPageCountTag] * slicesPerPage >= desiredSliceIndex);
                }
                const pageMemory = this._resource.getPageMemory(newSlicePageIndex);
                const newSlice = new SharedMemorySlice(pageMemory, sliceLength * newSliceIndexInPage);
                this._slices.push(newSlice);
                return newSlice;
              }
              pop() {
                const {
                  _slices: slices,
                  _slicesPerPage: slicesPerPage
                } = this;
                const allocatedCount = slices.length;
                assertIsTrue(allocatedCount > 0);
                const removingSliceIndex = allocatedCount - 1;
                if (this._sliceSize === 0) {
                  assertIsTrue(this[allocatorPageCountTag] === 1);
                  if (removingSliceIndex === 0) {
                    this._resource.popPage(this);
                  }
                } else {
                  const removingSliceIndexInPage = removingSliceIndex % slicesPerPage;
                  if (removingSliceIndexInPage === 0) {
                    this._resource.popPage(this);
                  }
                }
                this._slices.pop();
              }
            }
            class SharedStackBasedAllocatorManager {
              constructor(_thresholds) {
                this._stacks = new Map();
                this._thresholds = _thresholds;
                assertIsTrue(_thresholds.every((v, i, arr) => i === 0 || v > arr[i - 1]));
              }
              get isEmpty() {
                return this._stacks.size === 0;
              }
              createAllocator(pageSize) {
                const allocationPageSize = pageSize;
                const stackPageSize = this._selectStackPageSize(allocationPageSize);
                let stack = this._stacks.get(stackPageSize);
                if (!stack) {
                  stack = new PagedStack(this, stackPageSize);
                  this._stacks.set(stackPageSize, stack);
                }
                return stack.createAllocator(allocationPageSize);
              }
              [onStackPurgedTag](stack) {
                let stackFound = false;
                for (const [k, v] of this._stacks) {
                  if (v === stack) {
                    this._stacks.delete(k);
                    stackFound = true;
                    break;
                  }
                }
                if (!stackFound) {
                  assertIsTrue(false, `Given allocator is not of mime.`);
                }
              }
              _selectStackPageSize(allocationPageSize) {
                let thresholdIndex = binarySearchEpsilon(this._thresholds, allocationPageSize);
                let stackPageSize = allocationPageSize;
                if (thresholdIndex >= 0) {
                  stackPageSize = this._thresholds[thresholdIndex];
                } else {
                  thresholdIndex = ~thresholdIndex;
                  if (thresholdIndex === this._thresholds.length) ; else {
                    assertIsTrue(thresholdIndex >= 0 && thresholdIndex < this._thresholds.length);
                    stackPageSize = this._thresholds[thresholdIndex];
                  }
                }
                return stackPageSize;
              }
            }

            class PoseStackAllocator {
              constructor(transformCount, auxiliaryCurveCount) {
                this._poses = [];
                this._allocatedCount = 0;
                this._memoryAllocator = void 0;
                this._transformCount = transformCount;
                this._auxiliaryCurveCount = auxiliaryCurveCount;
                const poseBytes = calculateRequiredBytes(transformCount, auxiliaryCurveCount, 1);
                this._memoryAllocator = globalPosePageMemoryAllocatorManager.createAllocator(poseBytes);
              }
              destroy() {
                assertIsTrue(this._allocatedCount === 0, `Can not destroy the allocator since it's not empty.`);
                for (let iPose = 0; iPose < this._poses.length; ++iPose) {
                  this._memoryAllocator.pop();
                }
                this._poses.length = 0;
                return this._memoryAllocator.destroy();
              }
              get allocatedCount() {
                return this._allocatedCount;
              }
              push() {
                if (this._allocatedCount === 0) {
                  this._memoryAllocator.debugLock();
                }
                if (this._allocatedCount === this._poses.length) {
                  this._allocateNewPose();
                  assertIsTrue(this._allocatedCount < this._poses.length);
                }
                const pose = this._poses[this._allocatedCount];
                ++this._allocatedCount;
                return pose;
              }
              pop() {
                assertIsTrue(this._allocatedCount > 0, `PoseStackAllocator: push/pop does not match.`);
                --this._allocatedCount;
                if (this._allocatedCount === 0) {
                  this._memoryAllocator.debugUnlock();
                }
              }
              get top() {
                assertIsTrue(this._allocatedCount > 0);
                return this._poses[this._allocatedCount - 1];
              }
              _allocateNewPose() {
                const slice = this._memoryAllocator.push();
                const transformsByteLength = TransformArray.BYTES_PER_ELEMENT * this._transformCount;
                const baseOffset = slice.byteOffset;
                const transforms = new TransformArray(slice.buffer, baseOffset, this._transformCount);
                const auxiliaryCurves = new Float64Array(slice.buffer, baseOffset + transformsByteLength, this._auxiliaryCurveCount);
                const pose = Pose._create(transforms, auxiliaryCurves);
                this._poses.push(pose);
              }
            }
            function calculateRequiredBytes(transformCount, auxiliaryCurveCount, capacity) {
              return (TransformArray.BYTES_PER_ELEMENT * transformCount + Float64Array.BYTES_PER_ELEMENT * auxiliaryCurveCount) * capacity;
            }
            const PAGE_SIZE = calculateRequiredBytes(128, 10, 4);
            const globalPosePageMemoryAllocatorManager = new SharedStackBasedAllocatorManager([PAGE_SIZE]);

            function partition(array, predicate) {
              const nElements = array.length;
              let iFirstGroup2Element = 0;
              for (; iFirstGroup2Element < nElements; ++iFirstGroup2Element) {
                const element = array[iFirstGroup2Element];
                if (!predicate(element, iFirstGroup2Element, array)) {
                  break;
                }
              }
              if (iFirstGroup2Element === nElements) {
                return nElements;
              }
              let nGroup1 = iFirstGroup2Element;
              for (let iElement = iFirstGroup2Element + 1; iElement < nElements; ++iElement) {
                const element = array[iElement];
                const isFirstGroupElement = predicate(element, iElement, array);
                if (isFirstGroupElement) {
                  const t = element;
                  array[iElement] = array[nGroup1];
                  array[nGroup1] = t;
                  ++nGroup1;
                }
              }
              return nGroup1;
            }

            let TransformSpace;
            (function (TransformSpace) {
              TransformSpace[TransformSpace["WORLD"] = 0] = "WORLD";
              TransformSpace[TransformSpace["COMPONENT"] = 1] = "COMPONENT";
              TransformSpace[TransformSpace["PARENT"] = 2] = "PARENT";
              TransformSpace[TransformSpace["LOCAL"] = 3] = "LOCAL";
            })(TransformSpace || (TransformSpace = {}));
            ccenum(TransformSpace);

            const MAX_POSE_PER_PAGE = 8;
            const allocationInfoTag = Symbol('PoseHeapAllocator');
            function isPagedPose(pose) {
              return allocationInfoTag in pose;
            }
            class PoseHeapAllocator {
              constructor(transformCount, metaValueCount) {
                this._transformCount = 0;
                this._metaValueCount = 0;
                this._pages = [];
                this._allocatedCount = 0;
                this._foremostPossibleFreePage = 0;
                this._transformCount = transformCount;
                this._metaValueCount = metaValueCount;
              }
              get allocatedCount() {
                return this._allocatedCount;
              }
              allocatePose() {
                ++this._allocatedCount;
                const {
                  _pages: pages
                } = this;
                const nPages = pages.length;
                for (let iPage = this._foremostPossibleFreePage; iPage < nPages; ++iPage) {
                  const page = pages[iPage];
                  const pose = page.tryAllocate();
                  if (pose) {
                    pose[allocationInfoTag].pageIndex = iPage;
                    if (page.freeCount === 0) {
                      ++this._foremostPossibleFreePage;
                    }
                    return pose;
                  }
                }
                const pose = this._allocatePoseInNewPage();
                this._foremostPossibleFreePage = pose[allocationInfoTag].pageIndex;
                return pose;
              }
              destroyPose(pose) {
                assertIsTrue(isPagedPose(pose));
                const {
                  _pages: pages
                } = this;
                const nPages = pages.length;
                const pageIndex = pose[allocationInfoTag].pageIndex;
                assertIsTrue(pageIndex >= 0 && pageIndex < nPages);
                const page = pages[pageIndex];
                page.deallocate(pose);
                --this._allocatedCount;
                if (pageIndex < this._foremostPossibleFreePage) {
                  assertIsTrue(page.freeCount > 0);
                  this._foremostPossibleFreePage = pageIndex;
                }
              }
              _allocatePoseInNewPage() {
                const page = new PosePage(this._transformCount, this._metaValueCount, 4);
                const pageIndex = this._pages.length;
                this._pages.push(page);
                const pose = page.tryAllocate();
                assertIsTrue(pose);
                pose[allocationInfoTag].pageIndex = pageIndex;
                return pose;
              }
            }
            class AllocationInfo {
              constructor() {
                this._id = -1;
              }
              get pageIndex() {
                return this._id >> POSE_INDEX_BITS;
              }
              set pageIndex(value) {
                this._id &= POSE_INDEX_MASK;
                this._id |= value << POSE_INDEX_BITS;
              }
              get poseIndex() {
                return this._id & POSE_INDEX_MASK;
              }
              set poseIndex(value) {
                this._id &= ~POSE_INDEX_MASK;
                this._id |= value;
              }
            }
            const POSE_INDEX_MASK = 0b111;
            const POSE_INDEX_BITS = 3;
            assertIsTrue(POSE_INDEX_MASK + 1 >= MAX_POSE_PER_PAGE);
            class PosePage {
              constructor(_transformCount, _metaValueCount, _capacity) {
                this._buffer = void 0;
                this._idleFlags = 0xF;
                this._poses = void 0;
                this._freeCount = 0;
                this._transformCount = _transformCount;
                this._metaValueCount = _metaValueCount;
                this._capacity = _capacity;
                const byteLength = (TransformArray.BYTES_PER_ELEMENT * _transformCount + Float64Array.BYTES_PER_ELEMENT * _metaValueCount) * _capacity;
                this._buffer = new ArrayBuffer(byteLength);
                this._poses = new Array(_capacity).fill(null);
                this._freeCount = _capacity;
              }
              get capacity() {
                return this._capacity;
              }
              get freeCount() {
                return this._freeCount;
              }
              tryAllocate() {
                var _poses$idlePoseIndex;
                const {
                  _poses: poses,
                  _idleFlags: idleFlags,
                  _capacity: capacity
                } = this;
                const idlePoseIndex = findRightmostSetBit(idleFlags);
                if (idlePoseIndex >= capacity) {
                  return null;
                }
                assertIsTrue(idlePoseIndex >= 0 && idlePoseIndex < poses.length);
                const pose = (_poses$idlePoseIndex = poses[idlePoseIndex]) !== null && _poses$idlePoseIndex !== void 0 ? _poses$idlePoseIndex : poses[idlePoseIndex] = this._createPose(idlePoseIndex);
                pose[allocationInfoTag].poseIndex = idlePoseIndex;
                this._idleFlags &= ~(1 << idlePoseIndex);
                assertIsTrue(this._freeCount > 0);
                --this._freeCount;
                return pose;
              }
              deallocate(pose) {
                const {
                  _poses: poses
                } = this;
                const poseIndex = pose[allocationInfoTag].poseIndex;
                assertIsTrue(poseIndex >= 0 && poseIndex < poses.length);
                assertIsTrue(poses[poseIndex] === pose);
                this._idleFlags |= 1 << poseIndex;
                assertIsTrue(this._freeCount < this._capacity);
                ++this._freeCount;
              }
              _createPose(index) {
                const transformsByteLength = TransformArray.BYTES_PER_ELEMENT * this._transformCount;
                const baseOffset = (transformsByteLength + Float64Array.BYTES_PER_ELEMENT * this._metaValueCount) * index;
                const transforms = new TransformArray(this._buffer, baseOffset, this._transformCount);
                const metaValues = new Float64Array(this._buffer, baseOffset + transformsByteLength, this._metaValueCount);
                const pose = Pose._create(transforms, metaValues);
                pose[allocationInfoTag] = new AllocationInfo();
                return pose;
              }
            }
            function findRightmostSetBit(bits) {
              return bits === 0 ? Infinity : Math.log2(bits & -bits);
            }

            var _dec$k, _dec2$j, _dec3$h, _dec4$d, _dec5$a, _dec6$7, _dec7$4, _class3;
            function findBoneByNameRecursively(from, name) {
              if (from.name === name) {
                return from;
              }
              const nChildren = from.children.length;
              for (let iChild = 0; iChild < nChildren; ++iChild) {
                const found = findBoneByNameRecursively(from.children[iChild], name);
                if (found) {
                  return found;
                }
              }
              return null;
            }
            class AnimationGraphBindingContext {
              constructor(origin, poseLayoutMaintainer, varRegistry, _controller) {
                this._origin = void 0;
                this._layoutMaintainer = void 0;
                this._varRegistry = void 0;
                this._additiveFlagStack = [];
                this._triggerResetter = name => this._resetTrigger(name);
                this._isLayerWideContextPropertiesSet = false;
                this._stashView = void 0;
                this._motionSyncManager = void 0;
                this._clipOverrides = undefined;
                this._controller = _controller;
                this._origin = origin;
                this._layoutMaintainer = poseLayoutMaintainer;
                this._varRegistry = varRegistry;
                this._additiveFlagStack = [false];
              }
              get origin() {
                return this._origin;
              }
              get controller() {
                return this._controller;
              }
              get triggerResetter() {
                return this._triggerResetter;
              }
              get clipOverrides() {
                return this._clipOverrides;
              }
              get additive() {
                const {
                  _additiveFlagStack: additiveFlagStack
                } = this;
                return additiveFlagStack[additiveFlagStack.length - 1];
              }
              bindTransform(bone) {
                const boneNode = this._origin.getChildByPath(bone);
                if (!boneNode) {
                  return null;
                }
                return this._layoutMaintainer.getOrCreateTransformBinding(boneNode);
              }
              bindTransformByName(bone) {
                const boneNode = findBoneByNameRecursively(this._origin, bone);
                if (!boneNode) {
                  return null;
                }
                return this._layoutMaintainer.getOrCreateTransformBinding(boneNode);
              }
              getBoneChildren(bone) {
                const boneNode = findBoneByNameRecursively(this._origin, bone);
                if (!boneNode) {
                  return [];
                }
                return boneNode.children.map(childNode => childNode.name);
              }
              getParentBoneNameByName(bone) {
                var _boneNode$parent;
                const boneNode = findBoneByNameRecursively(this._origin, bone);
                if (!boneNode) {
                  return null;
                }
                return boneNode === this._origin ? '' : (_boneNode$parent = boneNode.parent) === null || _boneNode$parent === void 0 ? void 0 : _boneNode$parent.name;
              }
              bindAuxiliaryCurve(name) {
                return this._layoutMaintainer.getOrCreateAuxiliaryCurveBinding(name);
              }
              getEvaluationTimeAuxiliaryCurveView() {
                return this._layoutMaintainer.auxiliaryCurveRegistry;
              }
              getVar(id) {
                return this._varRegistry[id];
              }
              _pushAdditiveFlag(additive) {
                this._additiveFlagStack.push(additive);
              }
              _popAdditiveFlag() {
                assertIsTrue(this._additiveFlagStack.length > 1);
                this._additiveFlagStack.pop();
              }
              _integrityCheck() {
                return this._additiveFlagStack.length === 1;
              }
              get stashView() {
                assertIsTrue(this._stashView);
                return this._stashView;
              }
              get motionSyncManager() {
                assertIsTrue(this._motionSyncManager);
                return this._motionSyncManager;
              }
              _setLayerWideContextProperties(stashView, motionSyncManager) {
                assertIsTrue(!this._isLayerWideContextPropertiesSet);
                this._isLayerWideContextPropertiesSet = true;
                this._stashView = stashView;
                this._motionSyncManager = motionSyncManager;
              }
              _unsetLayerWideContextProperties() {
                assertIsTrue(this._isLayerWideContextPropertiesSet);
                this._isLayerWideContextPropertiesSet = false;
                this._stashView = undefined;
                this._motionSyncManager = undefined;
              }
              _setClipOverrides(clipOverrides) {
                this._clipOverrides = clipOverrides;
              }
              _resetTrigger(triggerName) {
                const varInstance = this._varRegistry[triggerName];
                if (!varInstance) {
                  return;
                }
                varInstance.value = false;
              }
            }
            const cacheTransform$2 = new Transform();
            class AuxiliaryCurveRegistry {
              constructor() {
                this._namedCurves = new Map();
              }
              names() {
                return this._namedCurves.keys();
              }
              has(name) {
                return this._namedCurves.has(name);
              }
              get(name) {
                var _this$_namedCurves$ge;
                return (_this$_namedCurves$ge = this._namedCurves.get(name)) !== null && _this$_namedCurves$ge !== void 0 ? _this$_namedCurves$ge : 0.0;
              }
              set(name, value) {
                this._namedCurves.set(name, value);
              }
            }
            let LayoutChangeFlag;
            (function (LayoutChangeFlag) {
              LayoutChangeFlag[LayoutChangeFlag["TRANSFORM_COUNT"] = 1] = "TRANSFORM_COUNT";
              LayoutChangeFlag[LayoutChangeFlag["TRANSFORM_ORDER"] = 2] = "TRANSFORM_ORDER";
              LayoutChangeFlag[LayoutChangeFlag["AUXILIARY_CURVE_COUNT"] = 4] = "AUXILIARY_CURVE_COUNT";
            })(LayoutChangeFlag || (LayoutChangeFlag = {}));
            const checkBindStatus = (bindStarted = false) => (_, _propertyKey, descriptor) => {
              const vendor = descriptor.value;
              if (vendor) {
                descriptor.value = function (...args) {
                  assertIsTrue(this._bindStarted === bindStarted, bindStarted ? `The operation is invalid since bind has not been started.` : `The operation is invalid since bind has already been started.`);
                  return vendor.call(this, ...args);
                };
              }
            };
            let AnimationGraphPoseLayoutMaintainer = (_dec$k = checkBindStatus(true), _dec2$j = checkBindStatus(true), _dec3$h = checkBindStatus(true), _dec4$d = checkBindStatus(true), _dec5$a = checkBindStatus(true), _dec6$7 = checkBindStatus(false), _dec7$4 = checkBindStatus(true), (_class3 = class AnimationGraphPoseLayoutMaintainer {
              constructor(origin, auxiliaryCurveRegistry) {
                this._origin = void 0;
                this._auxiliaryCurveRegistry = void 0;
                this._auxiliaryCurveRecords = [];
                this._transformRecords = [];
                this._parentTable = [];
                this._bindStarted = false;
                this._transformCountBeforeBind = -1;
                this._auxiliaryCurveCountBeforeBind = -1;
                this._origin = origin;
                this._auxiliaryCurveRegistry = auxiliaryCurveRegistry;
              }
              get transformCount() {
                return this._transformRecords.length;
              }
              get auxiliaryCurveCount() {
                return this._auxiliaryCurveRecords.length;
              }
              get auxiliaryCurveRegistry() {
                return this._auxiliaryCurveRegistry;
              }
              getOrCreateTransformBinding(node) {
                const {
                  _origin: origin
                } = this;
                let debugIntegrityCheckLengthOfPathToOrigin = 0;
                let isValidNode = false;
                for (let current = node; current; current = current.parent) {
                  if (current === origin) {
                    isValidNode = true;
                    break;
                  }
                  {
                    ++debugIntegrityCheckLengthOfPathToOrigin;
                  }
                }
                if (!isValidNode) {
                  return null;
                }
                const handle = this._getOrCreateTransformBinding(node);
                if (node !== origin) {
                  {
                    --debugIntegrityCheckLengthOfPathToOrigin;
                    assertIsTrue(debugIntegrityCheckLengthOfPathToOrigin >= 0);
                  }
                  for (let parent = node.parent; parent !== origin; parent = parent.parent) {
                    assertIsTrue(parent);
                    void this._getOrCreateTransformBinding(parent);
                    {
                      --debugIntegrityCheckLengthOfPathToOrigin;
                      assertIsTrue(debugIntegrityCheckLengthOfPathToOrigin >= 0);
                    }
                  }
                }
                {
                  assertIsTrue(debugIntegrityCheckLengthOfPathToOrigin === 0);
                }
                return handle;
              }
              _getOrCreateTransformBinding(node) {
                const {
                  _transformRecords: transformRecords
                } = this;
                const transformIndex = transformRecords.findIndex(transformRecord => transformRecord.node === node);
                if (transformIndex >= 0) {
                  const transformRecord = transformRecords[transformIndex];
                  ++transformRecord.refCount;
                  return transformRecord.handle;
                }
                let newNodeIndex = 0;
                for (let parent = node.parent; parent; parent = parent.parent) {
                  const parentIndex = transformRecords.findIndex(transformRecord => transformRecord.node === parent);
                  if (parentIndex >= 0) {
                    newNodeIndex = parentIndex + 1;
                    break;
                  }
                }
                for (let transformIndex = newNodeIndex; transformIndex < transformRecords.length; ++transformIndex) {
                  ++transformRecords[transformIndex].handle.index;
                }
                const transformRecord = new TransformRecord(new TransformHandleInternal(this, newNodeIndex), node);
                transformRecords.splice(newNodeIndex, 0, transformRecord);
                return transformRecord.handle;
              }
              getOrCreateAuxiliaryCurveBinding(name) {
                const {
                  _auxiliaryCurveRecords: auxiliaryCurveRecords
                } = this;
                const auxiliaryCurveIndex = auxiliaryCurveRecords.findIndex(record => record.name === name);
                if (auxiliaryCurveIndex >= 0) {
                  const auxiliaryCurveRecord = auxiliaryCurveRecords[auxiliaryCurveIndex];
                  ++auxiliaryCurveRecord.refCount;
                  return auxiliaryCurveRecord.handle;
                } else {
                  const newAuxiliaryCurveIndex = auxiliaryCurveRecords.length;
                  const auxiliaryCurveRecord = new AuxiliaryCurveRecord(new AuxiliaryCurveHandleInternal(this, newAuxiliaryCurveIndex), name);
                  auxiliaryCurveRecords.push(auxiliaryCurveRecord);
                  return auxiliaryCurveRecord.handle;
                }
              }
              createEvaluationContext() {
                assertIsTrue(!this._bindStarted);
                return new AnimationGraphEvaluationContext(this.transformCount, this.auxiliaryCurveCount, this._parentTable.slice(), this._origin);
              }
              resetPoseStashAllocator(allocator) {
                assertIsTrue(!this._bindStarted);
                allocator._reset(this.transformCount, this.auxiliaryCurveCount);
              }
              createTransformFilter(mask) {
                const {
                  _origin: origin
                } = this;
                const involvedTransformIndices = [];
                for (const {
                  node,
                  handle
                } of this._transformRecords) {
                  const path = countPath(origin, node);
                  if (typeof path === 'undefined') {
                    error(`${node.getPathInHierarchy()} is not a child of ${origin.getPathInHierarchy()}`);
                  } else if (mask.isExcluded(path)) {
                    continue;
                  }
                  involvedTransformIndices.push(handle.index);
                }
                involvedTransformIndices.sort();
                const poseFilter = new TransformFilter(involvedTransformIndices);
                return poseFilter;
                function countPath(from, to) {
                  const path = [];
                  for (let node = to; node; node = node.parent) {
                    if (node === from) {
                      return path.join('/');
                    } else {
                      path.unshift(node.name);
                    }
                  }
                  return undefined;
                }
              }
              fetchDefaultTransforms(transforms) {
                const nTransforms = this._transformRecords.length;
                assertIsTrue(transforms.length === nTransforms);
                for (let iTransform = 0; iTransform < nTransforms; ++iTransform) {
                  const {
                    defaultTransform
                  } = this._transformRecords[iTransform];
                  transforms.setTransform(iTransform, defaultTransform);
                }
              }
              apply(pose) {
                const {
                  transforms,
                  auxiliaryCurves
                } = pose;
                const nTransforms = this._transformRecords.length;
                assertIsTrue(transforms.length === nTransforms);
                for (let iTransform = 0; iTransform < nTransforms; ++iTransform) {
                  const transform = transforms.getTransform(iTransform, cacheTransform$2);
                  const {
                    node
                  } = this._transformRecords[iTransform];
                  node.setRTS(transform.rotation, transform.position, transform.scale);
                }
                const nAuxiliaryCurves = this._auxiliaryCurveRecords.length;
                for (let iAuxiliaryCurve = 0; iAuxiliaryCurve < nAuxiliaryCurves; ++iAuxiliaryCurve) {
                  const {
                    name: curveName
                  } = this._auxiliaryCurveRecords[iAuxiliaryCurve];
                  const curveValue = auxiliaryCurves[iAuxiliaryCurve];
                  this._auxiliaryCurveRegistry.set(curveName, curveValue);
                }
              }
              _destroyTransformHandle(index) {
                assertIsTrue(index >= 0 && index < this._transformRecords.length, `Invalid transform handle.`);
                const record = this._transformRecords[index];
                assertIsTrue(record.refCount > 0, `Something work wrong: refCount mismatch.`);
                --record.refCount;
              }
              _destroyAuxiliaryCurveHandle(index) {
                assertIsTrue(index >= 0 && index < this._auxiliaryCurveRecords.length, `Invalid auxiliary value handle.`);
                const record = this._auxiliaryCurveRecords[index];
                assertIsTrue(record.refCount > 0, `Something work wrong: refCount mismatch.`);
                --record.refCount;
              }
              startBind() {
                this._bindStarted = true;
                this._transformCountBeforeBind = this._transformRecords.length;
                this._auxiliaryCurveCountBeforeBind = this._auxiliaryCurveRecords.length;
              }
              endBind() {
                const {
                  _transformRecords: transformRecords,
                  _auxiliaryCurveRecords: auxiliaryCurveRecords
                } = this;
                let changeFlags = 0;
                trimRecords(transformRecords);
                if (transformRecords.length !== this._transformCountBeforeBind) {
                  changeFlags |= LayoutChangeFlag.TRANSFORM_COUNT;
                  const nRecords = transformRecords.length;
                  for (let iRecord = 0; iRecord < nRecords; ++iRecord) {
                    const record = transformRecords[iRecord];
                    record.order = iRecord;
                  }
                } else {
                  const nRecords = transformRecords.length;
                  let orderChanged = false;
                  for (let iRecord = 0; iRecord < nRecords; ++iRecord) {
                    const record = transformRecords[iRecord];
                    if (record.order !== iRecord) {
                      orderChanged = true;
                      record.order = iRecord;
                    }
                  }
                  if (orderChanged) {
                    changeFlags |= LayoutChangeFlag.TRANSFORM_ORDER;
                  }
                }
                trimRecords(auxiliaryCurveRecords);
                if (auxiliaryCurveRecords.length !== this._auxiliaryCurveCountBeforeBind) {
                  changeFlags |= LayoutChangeFlag.AUXILIARY_CURVE_COUNT;
                }
                const {
                  _parentTable: parentTable,
                  _origin: origin
                } = this;
                parentTable.length = transformRecords.length;
                for (let iTransform = 0; iTransform < transformRecords.length; ++iTransform) {
                  const {
                    node
                  } = transformRecords[iTransform];
                  if (node === origin) {
                    parentTable[iTransform] = -1;
                    continue;
                  }
                  const parent = node.parent;
                  if (parent === origin) {
                    const parentIndex = transformRecords.findIndex(record => record.node === parent);
                    parentTable[iTransform] = parentIndex >= 0 ? parentIndex : -1;
                  } else {
                    const parentIndex = transformRecords.findIndex(record => record.node === parent);
                    assertIsTrue(parentIndex >= 0, `Parent node is not bound!`);
                    assertIsTrue(parentIndex < iTransform);
                    parentTable[iTransform] = parentIndex;
                  }
                }
                this._bindStarted = false;
                {
                  transformRecords.forEach((transformRecord, index, transformRecords) => {
                    assertIsTrue(transformRecord.handle.index === index, `Bad transform handle.`);
                    assertIsTrue(transformRecord.order === index, `Bad transform order field.`);
                    for (let parent = transformRecord.node.parent; parent; parent = parent.parent) {
                      const parentIndex = transformRecords.findIndex(r => r.node === parent);
                      if (parentIndex >= 0) {
                        assertIsTrue(parentIndex < index, `Bad transform order.`);
                      }
                    }
                  });
                  this._transformCountBeforeBind = -1;
                  this._auxiliaryCurveCountBeforeBind = -1;
                }
                return changeFlags;
              }
            }, (_applyDecoratedDescriptor(_class3.prototype, "getOrCreateTransformBinding", [_dec$k], Object.getOwnPropertyDescriptor(_class3.prototype, "getOrCreateTransformBinding"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "_getOrCreateTransformBinding", [_dec2$j], Object.getOwnPropertyDescriptor(_class3.prototype, "_getOrCreateTransformBinding"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "getOrCreateAuxiliaryCurveBinding", [_dec3$h], Object.getOwnPropertyDescriptor(_class3.prototype, "getOrCreateAuxiliaryCurveBinding"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "_destroyTransformHandle", [_dec4$d], Object.getOwnPropertyDescriptor(_class3.prototype, "_destroyTransformHandle"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "_destroyAuxiliaryCurveHandle", [_dec5$a], Object.getOwnPropertyDescriptor(_class3.prototype, "_destroyAuxiliaryCurveHandle"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "startBind", [_dec6$7], Object.getOwnPropertyDescriptor(_class3.prototype, "startBind"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "endBind", [_dec7$4], Object.getOwnPropertyDescriptor(_class3.prototype, "endBind"), _class3.prototype)), _class3));
            class TransformRecord {
              constructor(handle, node) {
                this.order = -1;
                this.refCount = 1;
                this.handle = void 0;
                this.node = void 0;
                this.defaultTransform = void 0;
                this.handle = handle;
                this.node = node;
                const defaultTransform = new Transform();
                defaultTransform.position = node.position;
                defaultTransform.rotation = node.rotation;
                defaultTransform.scale = node.scale;
                this.defaultTransform = defaultTransform;
              }
            }
            class AuxiliaryCurveRecord {
              constructor(handle, name) {
                this.refCount = 1;
                this.handle = void 0;
                this.name = void 0;
                this.handle = handle;
                this.name = name;
              }
            }
            function trimRecords(records) {
              const nUsedRecords = partition(records, record => {
                assertIsTrue(record.refCount >= 0);
                return record.refCount > 0;
              });
              assertIsTrue(nUsedRecords <= records.length);
              if (nUsedRecords === records.length) {
                return;
              }
              for (let iRecord = 0; iRecord < nUsedRecords; ++iRecord) {
                records[iRecord].handle.index = iRecord;
              }
              {
                records.slice(nUsedRecords).forEach(record => record.refCount = -1);
              }
              records.splice(nUsedRecords, records.length - nUsedRecords);
            }
            const defaultTransformsTag = Symbol('[[DefaultTransforms]]');
            class AnimationGraphSettleContext {
              constructor(_layoutMaintainer) {
                this._layoutMaintainer = _layoutMaintainer;
              }
              get transformCount() {
                return this._layoutMaintainer.transformCount;
              }
              createTransformFilter(mask) {
                return this._layoutMaintainer.createTransformFilter(mask);
              }
            }
            const cacheTransform_spaceConversion$1 = new Transform();
            const cacheParentTransform_spaceConversion$1 = new Transform();
            class AnimationGraphEvaluationContext {
              constructor(transformCount, metaValueCount, parentTable, componentNode) {
                this[defaultTransformsTag] = void 0;
                this._poseAllocator = void 0;
                this._parentTable = void 0;
                this._componentNode = void 0;
                this._cacheComponentToWorldTransform = new Transform();
                {
                  assertIsTrue(transformCount === parentTable.length);
                  assertIsTrue(parentTable.every((parentIndex, currentIndex) => {
                    if (parentIndex < 0) {
                      return true;
                    }
                    return parentIndex < currentIndex;
                  }));
                }
                this._poseAllocator = new PoseStackAllocator(transformCount, metaValueCount);
                this._parentTable = parentTable;
                this._componentNode = componentNode;
                this[defaultTransformsTag] = new TransformArray(transformCount);
              }
              destroy() {
                this._poseAllocator.destroy();
              }
              get allocatedPoseCount() {
                return this._poseAllocator.allocatedCount;
              }
              get parentTable() {
                return this._parentTable;
              }
              pushDefaultedPose() {
                const pose = this._poseAllocator.push();
                pose.transforms.set(this[defaultTransformsTag]);
                pose._poseTransformSpace = PoseTransformSpace.LOCAL;
                pose.auxiliaryCurves.fill(0.0);
                return pose;
              }
              pushDefaultedPoseInComponentSpace() {
                const pose = this.pushDefaultedPose();
                this._poseTransformsSpaceLocalToComponent(pose);
                return pose;
              }
              pushZeroDeltaPose() {
                const pose = this._poseAllocator.push();
                pose.transforms.fill(ZERO_DELTA_TRANSFORM);
                pose._poseTransformSpace = PoseTransformSpace.LOCAL;
                pose.auxiliaryCurves.fill(0.0);
                return pose;
              }
              pushDuplicatedPose(src) {
                const pose = this._poseAllocator.push();
                pose.transforms.set(src.transforms);
                pose._poseTransformSpace = src._poseTransformSpace;
                pose.auxiliaryCurves.set(src.auxiliaryCurves);
                return pose;
              }
              popPose() {
                this._poseAllocator.pop();
              }
              get _stackSize_debugging() {
                return this._poseAllocator.allocatedCount;
              }
              _isStackTopPose_debugging(pose) {
                return pose === this._poseAllocator.top;
              }
              _poseTransformsSpaceLocalToComponent(pose) {
                const {
                  transforms
                } = pose;
                const {
                  length: nTransforms
                } = transforms;
                for (let iTransform = 0; iTransform < nTransforms; ++iTransform) {
                  const parentTransformIndex = this._parentTable[iTransform];
                  if (parentTransformIndex < 0) {
                    continue;
                  }
                  const transform = transforms.getTransform(iTransform, cacheTransform_spaceConversion$1);
                  const parentTransform = transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion$1);
                  Transform.multiply(transform, parentTransform, transform);
                  transforms.setTransform(iTransform, transform);
                }
                pose._poseTransformSpace = PoseTransformSpace.COMPONENT;
              }
              _poseTransformsSpaceComponentToLocal(pose) {
                const {
                  transforms
                } = pose;
                const {
                  length: nTransforms
                } = transforms;
                for (let iTransform = nTransforms - 1; iTransform >= 0; --iTransform) {
                  const parentTransformIndex = this._parentTable[iTransform];
                  if (parentTransformIndex < 0) {
                    continue;
                  }
                  const transform = transforms.getTransform(iTransform, cacheTransform_spaceConversion$1);
                  const parentTransform = transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion$1);
                  Transform.calculateRelative(transform, transform, parentTransform);
                  transforms.setTransform(iTransform, transform);
                }
                pose._poseTransformSpace = PoseTransformSpace.LOCAL;
              }
              _convertPoseSpaceTransformToTargetSpace(transform, outTransformSpace, pose, poseTransformIndex) {
                const poseSpace = pose._poseTransformSpace;
                switch (outTransformSpace) {
                  default:
                    {
                      assertIsTrue(false);
                    }
                    break;
                  case TransformSpace.WORLD:
                    if (poseSpace === PoseTransformSpace.COMPONENT) {
                      Transform.multiply(transform, this._getComponentToWorldTransform(), transform);
                    } else {
                      assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                      Transform.multiply(transform, this._getLocalToWorldTransform(cacheParentTransform_spaceConversion$1, pose, poseTransformIndex), transform);
                    }
                    break;
                  case TransformSpace.COMPONENT:
                    if (poseSpace === PoseTransformSpace.COMPONENT) ; else {
                      assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                      Transform.multiply(transform, this._getLocalToComponentTransform(cacheParentTransform_spaceConversion$1, pose, poseTransformIndex), transform);
                    }
                    break;
                  case TransformSpace.PARENT:
                    {
                      if (poseSpace === PoseTransformSpace.COMPONENT) {
                        const parentTransformIndex = this._parentTable[poseTransformIndex];
                        if (parentTransformIndex >= 0) {
                          const parentComponentTransform = pose.transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion$1);
                          const invParentComponentTransform = Transform.invert(parentComponentTransform, parentComponentTransform);
                          Transform.multiply(transform, invParentComponentTransform, transform);
                        }
                      } else {
                        assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                      }
                      break;
                    }
                  case TransformSpace.LOCAL:
                    {
                      assertIsTrue(poseSpace === PoseTransformSpace.COMPONENT || poseSpace === PoseTransformSpace.LOCAL);
                      const boneTransform = pose.transforms.getTransform(poseTransformIndex, cacheParentTransform_spaceConversion$1);
                      const invBoneTransform = Transform.invert(boneTransform, boneTransform);
                      Transform.multiply(transform, invBoneTransform, transform);
                      break;
                    }
                }
                return transform;
              }
              _convertTransformToPoseTransformSpace(transform, transformSpace, pose, poseTransformIndex) {
                const poseSpace = pose._poseTransformSpace;
                switch (transformSpace) {
                  default:
                    {
                      assertIsTrue(false);
                    }
                    break;
                  case TransformSpace.WORLD:
                    if (poseSpace === PoseTransformSpace.COMPONENT) {
                      const worldToComponent = Transform.invert(cacheParentTransform_spaceConversion$1, this._getComponentToWorldTransform());
                      Transform.multiply(transform, worldToComponent, transform);
                    } else {
                      assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                      const localToWorld = this._getLocalToWorldTransform(cacheParentTransform_spaceConversion$1, pose, poseTransformIndex);
                      const worldToLocal = Transform.invert(localToWorld, localToWorld);
                      Transform.multiply(transform, worldToLocal, transform);
                    }
                    break;
                  case TransformSpace.COMPONENT:
                    if (poseSpace === PoseTransformSpace.COMPONENT) ; else {
                      assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                      const localToComponent = this._getLocalToComponentTransform(cacheParentTransform_spaceConversion$1, pose, poseTransformIndex);
                      const componentToLocal = Transform.invert(localToComponent, localToComponent);
                      Transform.multiply(transform, componentToLocal, transform);
                    }
                    break;
                  case TransformSpace.PARENT:
                    {
                      if (poseSpace === PoseTransformSpace.COMPONENT) {
                        const parentTransformIndex = this._parentTable[poseTransformIndex];
                        if (parentTransformIndex >= 0) {
                          const parentTransform = pose.transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion$1);
                          Transform.multiply(transform, parentTransform, transform);
                        }
                      }
                      break;
                    }
                  case TransformSpace.LOCAL:
                    {
                      assertIsTrue(poseSpace === PoseTransformSpace.COMPONENT || poseSpace === PoseTransformSpace.LOCAL);
                      const currentTransform = pose.transforms.getTransform(poseTransformIndex, cacheParentTransform_spaceConversion$1);
                      Transform.multiply(transform, currentTransform, transform);
                      break;
                    }
                }
                return transform;
              }
              _getComponentToWorldTransform() {
                const result = this._cacheComponentToWorldTransform;
                const componentNode = this._componentNode;
                result.position = componentNode.worldPosition;
                result.rotation = componentNode.worldRotation;
                result.scale = componentNode.worldScale;
                return result;
              }
              _getLocalToComponentTransform(out, pose, transformIndex) {
                const {
                  _parentTable: parentTable
                } = this;
                Transform.setIdentity(out);
                for (let iTransform = parentTable[transformIndex]; iTransform >= 0; iTransform = parentTable[iTransform]) {
                  const localTransform = pose.transforms.getTransform(iTransform, cacheTransform_spaceConversion$1);
                  Transform.multiply(out, localTransform, out);
                }
                return out;
              }
              _getLocalToWorldTransform(out, pose, transformIndex) {
                this._getLocalToComponentTransform(out, pose, transformIndex);
                Transform.multiply(out, this._getComponentToWorldTransform(), out);
                return out;
              }
            }
            class TransformHandleInternal {
              constructor(host, index) {
                this.index = -1;
                this._host = void 0;
                this._host = host;
                this.index = index;
              }
              destroy() {
                this._host._destroyTransformHandle(this.index);
              }
            }
            class AuxiliaryCurveHandleInternal {
              constructor(host, index) {
                this.index = -1;
                this._host = void 0;
                this._host = host;
                this.index = index;
              }
              destroy() {
                this._host._destroyAuxiliaryCurveHandle(this.index);
              }
            }
            class AnimationGraphUpdateContextGenerator {
              constructor() {
                this._context = {
                  deltaTime: 0.0,
                  indicativeWeight: 0.0
                };
              }
              generate(deltaTime, indicativeWeight) {
                this._context.deltaTime = deltaTime;
                this._context.indicativeWeight = indicativeWeight;
                return this._context;
              }
              forkSubWeight(base, subWeight) {
                this._context.deltaTime = base.deltaTime;
                this._context.indicativeWeight = base.indicativeWeight * subWeight;
              }
            }
            class DeferredPoseStashAllocator {
              constructor() {
                this._allocator = null;
              }
              get allocatedPoseCount() {
                assertIsTrue(this._allocator);
                return this._allocator.allocatedCount;
              }
              _reset(transformCount, auxiliaryCurveCount) {
                this._allocator = new PoseHeapAllocator(transformCount, auxiliaryCurveCount);
              }
              allocatePose() {
                assertIsTrue(this._allocator);
                const pose = this._allocator.allocatePose();
                return pose;
              }
              destroyPose(pose) {
                assertIsTrue(this._allocator);
                return this._allocator.destroyPose(pose);
              }
            }

            var _dec$j, _class$j, _class2$i, _initializer$c;
            let MotionSyncInfo = (_dec$j = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}MotionSyncInfo`), _dec$j(_class$j = (_class2$i = class MotionSyncInfo {
              constructor() {
                this.group = _initializer$c && _initializer$c();
              }
            }, (_initializer$c = applyDecoratedInitializer(_class2$i.prototype, "group", [serializable$d], function () {
              return '';
            })), _class2$i)) || _class$j);

            function makeCreateNodeFactory(create_) {
              return {
                listEntries: context => [{
                  arg: {
                    type: 'clip-motion'
                  },
                  menu: 'i18n:ENGINE.animation_graph.pose_graph_node_sub_menus.play_or_sample_clip_motion'
                }, {
                  arg: {
                    type: 'animation-blend-1d'
                  },
                  menu: 'i18n:ENGINE.animation_graph.pose_graph_node_sub_menus.play_or_sample_animation_blend_1d'
                }, {
                  arg: {
                    type: 'animation-blend-2d'
                  },
                  menu: 'i18n:ENGINE.animation_graph.pose_graph_node_sub_menus.play_or_sample_animation_blend_2d'
                }],
                create: arg => {
                  let motion = null;
                  switch (arg.type) {
                    case 'clip-motion':
                      motion = new ClipMotion();
                      break;
                    case 'animation-blend-1d':
                      motion = new AnimationBlend1D();
                      break;
                    case 'animation-blend-2d':
                      motion = new AnimationBlend2D();
                      break;
                  }
                  return create_(motion);
                }
              };
            }

            var _dec$i, _dec2$i, _dec3$g, _dec4$c, _dec5$9, _dec6$6, _class$i, _class2$h, _initializer$b, _initializer2$8, _descriptor$9, _descriptor2$4;
            const ZERO_DURATION_THRESHOLD = 1e-5;
            let PoseNodePlayMotion = (_dec$i = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodePlayMotion`), _dec2$i = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3$g = poseGraphCreateNodeFactory(makeCreateNodeFactory(motion => {
              const node = new PoseNodePlayMotion();
              node.motion = motion;
              return node;
            })), _dec4$c = poseGraphNodeAppearance({
              themeColor: '#227F9B'
            }), _dec5$9 = input({
              type: PoseGraphType.FLOAT
            }), _dec6$6 = input({
              type: PoseGraphType.FLOAT
            }), _dec$i(_class$i = _dec2$i(_class$i = _dec3$g(_class$i = _dec4$c(_class$i = (_class2$h = class PoseNodePlayMotion extends PoseNode {
              constructor(...args) {
                super(...args);
                this.motion = _initializer$b && _initializer$b();
                this.syncInfo = _initializer2$8 && _initializer2$8();
                _initializerDefineProperty(this, "startTime", _descriptor$9, this);
                _initializerDefineProperty(this, "speedMultiplier", _descriptor2$4, this);
                this._workspace = null;
                this._runtimeSyncRecord = undefined;
              }
              get lastIndicativeWeight() {
                var _this$_workspace$last, _this$_workspace;
                return (_this$_workspace$last = (_this$_workspace = this._workspace) === null || _this$_workspace === void 0 ? void 0 : _this$_workspace.lastIndicativeWeight) !== null && _this$_workspace$last !== void 0 ? _this$_workspace$last : 0.0;
              }
              get elapsedMotionTime() {
                var _this$_workspace$norm, _this$_workspace2;
                return (_this$_workspace$norm = (_this$_workspace2 = this._workspace) === null || _this$_workspace2 === void 0 ? void 0 : _this$_workspace2.normalizedTime) !== null && _this$_workspace$norm !== void 0 ? _this$_workspace$norm : 0.0;
              }
              bind(context) {
                const {
                  motion
                } = this;
                if (!motion) {
                  return;
                }
                const motionEval = motion[createEval](context, false);
                if (!motionEval) {
                  return;
                }
                this._workspace = new Workspace$2(motionEval, motionEval.createPort());
                if (this.syncInfo.group) {
                  this._runtimeSyncRecord = context.motionSyncManager.register(this.syncInfo);
                }
              }
              settle(context) {}
              reenter() {
                if (this._workspace) {
                  const {
                    _runtimeSyncRecord: runtimeSyncRecord,
                    _workspace: {
                      motionEval: {
                        duration
                      }
                    }
                  } = this;
                  this._forceEvaluateEvaluation();
                  const startTimeNormalized = duration < ZERO_DURATION_THRESHOLD ? 0.0 : clamp01(this.startTime / duration);
                  if (runtimeSyncRecord) {
                    runtimeSyncRecord.notifyRenter(startTimeNormalized);
                  } else {
                    this._workspace.normalizedTime = startTimeNormalized;
                  }
                  this._workspace.lastIndicativeWeight = 0.0;
                }
              }
              doUpdate(context) {
                if (this._workspace) {
                  const {
                    deltaTime
                  } = context;
                  const {
                    _runtimeSyncRecord: runtimeSyncRecord
                  } = this;
                  const duration = this._workspace.motionEval.duration;
                  let normalizedDeltaTime = 0.0;
                  if (duration > ZERO_DURATION_THRESHOLD) {
                    normalizedDeltaTime = deltaTime * this.speedMultiplier / duration;
                  }
                  if (runtimeSyncRecord) {
                    runtimeSyncRecord.notifyUpdate(normalizedDeltaTime, context.indicativeWeight);
                  } else {
                    this._workspace.normalizedTime += normalizedDeltaTime;
                  }
                  this._workspace.lastIndicativeWeight = context.indicativeWeight;
                }
              }
              doEvaluate(context) {
                if (!this._workspace) {
                  return context.pushDefaultedPose();
                } else {
                  const normalizedTime = this._runtimeSyncRecord ? this._runtimeSyncRecord.getSyncedEnterTime() : this._workspace.normalizedTime;
                  return this._workspace.motionEvalPort.evaluate(normalizedTime, context);
                }
              }
            }, (_initializer$b = applyDecoratedInitializer(_class2$h.prototype, "motion", [serializable$d], function () {
              return new ClipMotion();
            }), _initializer2$8 = applyDecoratedInitializer(_class2$h.prototype, "syncInfo", [serializable$d], function () {
              return new MotionSyncInfo();
            }), _descriptor$9 = _applyDecoratedDescriptor(_class2$h.prototype, "startTime", [serializable$d, _dec5$9], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return 0.0;
              }
            }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$h.prototype, "speedMultiplier", [serializable$d, _dec6$6], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return 1.0;
              }
            })), _class2$h)) || _class$i) || _class$i) || _class$i) || _class$i);
            class Workspace$2 {
              constructor(motionEval, motionEvalPort) {
                this.normalizedTime = 0.0;
                this.lastIndicativeWeight = 0.0;
                this.motionEval = motionEval;
                this.motionEvalPort = motionEvalPort;
              }
            }

            function isEvaluatableNode(node) {
              return node instanceof PoseNode || node instanceof PureValueNode;
            }
            class InstantiatedPoseGraph {
              constructor(_rootPoseNode, _countingPlayMotionNodes) {
                this._rootPoseNode = _rootPoseNode;
                this._countingPlayMotionNodes = _countingPlayMotionNodes;
              }
              bind(context) {
                var _this$_rootPoseNode;
                (_this$_rootPoseNode = this._rootPoseNode) === null || _this$_rootPoseNode === void 0 ? void 0 : _this$_rootPoseNode.bind(context);
              }
              settle(context) {
                var _this$_rootPoseNode2;
                (_this$_rootPoseNode2 = this._rootPoseNode) === null || _this$_rootPoseNode2 === void 0 ? void 0 : _this$_rootPoseNode2.settle(context);
              }
              reenter() {
                var _this$_rootPoseNode3;
                (_this$_rootPoseNode3 = this._rootPoseNode) === null || _this$_rootPoseNode3 === void 0 ? void 0 : _this$_rootPoseNode3.reenter();
              }
              update(context) {
                var _this$_rootPoseNode4;
                (_this$_rootPoseNode4 = this._rootPoseNode) === null || _this$_rootPoseNode4 === void 0 ? void 0 : _this$_rootPoseNode4.update(context);
              }
              evaluate(context) {
                var _this$_rootPoseNode$e, _this$_rootPoseNode5;
                return (_this$_rootPoseNode$e = (_this$_rootPoseNode5 = this._rootPoseNode) === null || _this$_rootPoseNode5 === void 0 ? void 0 : _this$_rootPoseNode5.evaluate(context, PoseTransformSpaceRequirement.LOCAL)) !== null && _this$_rootPoseNode$e !== void 0 ? _this$_rootPoseNode$e : null;
              }
              countMotionTime() {
                const {
                  _countingPlayMotionNodes: playMotionNodes
                } = this;
                if (!playMotionNodes) {
                  {
                    assertIsTrue(false, `Should not call countMotionTime() on this pose graph ` + `since "mayCountMotionTime" was not passed to instantiatePoseGraph()`);
                  }
                  return 0.0;
                }
                let maxWeightedTime = 0.0;
                let maxWeight = Number.NEGATIVE_INFINITY;
                for (let iPlayMotionNode = 0; iPlayMotionNode < playMotionNodes.length; ++iPlayMotionNode) {
                  const {
                    elapsedMotionTime,
                    lastIndicativeWeight
                  } = playMotionNodes[iPlayMotionNode];
                  if (lastIndicativeWeight > maxWeight) {
                    maxWeight = lastIndicativeWeight;
                    maxWeightedTime = elapsedMotionTime;
                  }
                }
                return maxWeightedTime;
              }
            }
            function instantiatePoseGraph(graph, linkContext, mayCountMotionTime = false) {
              const {
                outputNode
              } = graph;
              const outputNodeShell = graph.getShell(outputNode);
              assertIsTrue(outputNodeShell);
              const bindings = outputNodeShell.getBindings();
              assertIsTrue(bindings.length < 2);
              if (bindings.length === 0) {
                return new InstantiatedPoseGraph(undefined, mayCountMotionTime ? [] : undefined);
              }
              const binding = bindings[0];
              assertIsTrue(binding.outputIndex === 0);
              assertIsTrue(binding.producer instanceof PoseNode);
              const instantiationMap = new Map();
              const mainRecord = instantiateNode(graph, binding.producer, instantiationMap, linkContext);
              assertIsTrue(mainRecord instanceof PoseNode);
              return new InstantiatedPoseGraph(mainRecord, mayCountMotionTime ? Array.from(instantiationMap.values()).filter(node => node instanceof PoseNodePlayMotion) : undefined);
            }
            function instantiateNode(graph, node, instantiationMap, linkContext) {
              const shell = graph.getShell(node);
              assertIsTrue(shell, `Want to instantiate an unbound graph?`);
              const existing = instantiationMap.get(node);
              if (existing) {
                return existing;
              }
              const instantiated = instantiate(node);
              if ('__callOnAfterDeserializeRecursive' in instantiated) {
                instantiated.__callOnAfterDeserializeRecursive();
              }
              if (instantiated instanceof PureValueNode) {
                instantiated.link(linkContext);
              }
              const consumerNode = instantiated;
              const runtimePVNodePropertyBindings = [];
              for (const {
                producer: producerNode,
                outputIndex: producerOutputIndex,
                inputPath: consumerInputPath
              } of shell.getBindings()) {
                if (!isEvaluatableNode(producerNode)) {
                  warn(`There's a input bound to a node with unrecognized type.`);
                  continue;
                }
                const producer = instantiateNode(graph, producerNode, instantiationMap, linkContext);
                if (producer instanceof PoseNode) {
                  assertIsTrue(consumerNode instanceof PoseNode);
                  linkPoseNode(consumerNode, consumerInputPath, producer, producerOutputIndex);
                } else {
                  const runtimePVNodePropertyBinding = linkPVNode(consumerNode, consumerInputPath, producer, producerOutputIndex);
                  if (runtimePVNodePropertyBinding) {
                    runtimePVNodePropertyBindings.push(runtimePVNodePropertyBinding);
                  }
                }
              }
              const dependencyEvaluation = new DependencyEvaluation(runtimePVNodePropertyBindings);
              let evaluation;
              if (consumerNode instanceof PoseNode) {
                consumerNode._setDependencyEvaluation(dependencyEvaluation);
                evaluation = consumerNode;
              } else {
                const pureValueNodeEvaluation = new RuntimePVNodeEvaluation(consumerNode, dependencyEvaluation);
                evaluation = pureValueNodeEvaluation;
              }
              instantiationMap.set(node, evaluation);
              return evaluation;
            }
            class DependencyEvaluation {
              constructor(bindingEvaluations) {
                this._bindingEvaluations = void 0;
                this._bindingEvaluations = bindingEvaluations;
              }
              evaluate() {
                const {
                  _bindingEvaluations: bindingEvaluations
                } = this;
                for (const binding of bindingEvaluations) {
                  binding.evaluate();
                }
              }
            }
            class RuntimePVNodeEvaluation {
              constructor(_node, _dependency) {
                this._outputs = void 0;
                this._node = _node;
                this._dependency = _dependency;
                this._outputs = new Array(_node.outputCount);
              }
              get node() {
                return this._node;
              }
              get outputCount() {
                return this._outputs.length;
              }
              getDefaultOutput() {
                return this.getOutput(0);
              }
              getOutput(outputIndex) {
                return this._outputs[outputIndex];
              }
              evaluate() {
                const {
                  _node: node,
                  _dependency: dependency
                } = this;
                dependency.evaluate();
                node.selfEvaluate(this._outputs);
              }
            }
            function linkPoseNode(consumerNode, consumerInputPath, producerNode, producerOutputIndex) {
              const [consumerPropertyKey, consumerElementIndex = -1] = consumerInputPath;
              if (!(consumerPropertyKey in consumerNode)) {
                warn(`Invalid binding: consumer node has no property ${consumerPropertyKey}`);
                return;
              }
              if (producerOutputIndex !== 0) {
                warn(`Node ${producerNode.toString()} does not have specified output ${producerOutputIndex}.`);
                return;
              }
              const consumerProperty = consumerNode[consumerPropertyKey];
              if (consumerElementIndex < 0) {
                if (consumerProperty !== null) {
                  warn(`Invalid binding: consumer node's input ${consumerPropertyKey} should be leaved as evaluation before evaluation.`);
                  return;
                }
                consumerNode[consumerPropertyKey] = producerNode;
                return;
              }
              if (!Array.isArray(consumerProperty)) {
                warn(`Invalid binding: consumer node's input ${consumerPropertyKey} should be an array.`);
                return;
              }
              if (consumerElementIndex >= consumerProperty.length) {
                warn(`Invalid binding: consumer node's input ${consumerPropertyKey} ` + `have length ${consumerProperty.length} but the binding specified ${consumerElementIndex}`);
                return;
              }
              if (consumerProperty[consumerElementIndex] !== null) {
                warn(`Invalid binding: consumer node's input ${consumerPropertyKey}[${consumerElementIndex}] should be leaved as null before evaluation`);
                return;
              }
              consumerProperty[consumerElementIndex] = producerNode;
            }
            class RuntimePVNodePlainPropertyBinding {
              constructor(_consumerNode, _consumerPropertyKey, _producerRecord, _producerOutputIndex) {
                this._consumerNode = _consumerNode;
                this._consumerPropertyKey = _consumerPropertyKey;
                this._producerRecord = _producerRecord;
                this._producerOutputIndex = _producerOutputIndex;
              }
              evaluate() {
                this._producerRecord.evaluate();
                this._consumerNode[this._consumerPropertyKey] = this._producerRecord.getOutput(this._producerOutputIndex);
              }
            }
            class RuntimePVNodeArrayElementPropertyBinding {
              constructor(_consumerNode, _consumerPropertyKey, _consumerElementIndex, _producerRecord, _producerOutputIndex) {
                this._consumerNode = _consumerNode;
                this._consumerPropertyKey = _consumerPropertyKey;
                this._consumerElementIndex = _consumerElementIndex;
                this._producerRecord = _producerRecord;
                this._producerOutputIndex = _producerOutputIndex;
              }
              evaluate() {
                this._producerRecord.evaluate();
                this._consumerNode[this._consumerPropertyKey][this._consumerElementIndex] = this._producerRecord.getOutput(this._producerOutputIndex);
              }
            }
            function linkPVNode(consumerNode, consumerInputPath, producerRecord, producerOutputIndex) {
              const [consumerPropertyKey, consumerElementIndex = -1] = consumerInputPath;
              if (!(consumerPropertyKey in consumerNode)) {
                warn(`Invalid binding: consumer node has no property ${consumerPropertyKey}`);
                return undefined;
              }
              const consumerProperty = consumerNode[consumerPropertyKey];
              if (consumerElementIndex < 0) {
                return new RuntimePVNodePlainPropertyBinding(consumerNode, consumerPropertyKey, producerRecord, producerOutputIndex);
              }
              if (!Array.isArray(consumerProperty)) {
                warn(`Invalid binding: consumer node's input ${consumerPropertyKey} should be an array.`);
                return undefined;
              }
              if (consumerElementIndex >= consumerProperty.length) {
                warn(`Invalid binding: consumer node's input ${consumerPropertyKey} ` + `have length ${consumerProperty.length} but the binding specified ${consumerElementIndex}`);
                return undefined;
              }
              return new RuntimePVNodeArrayElementPropertyBinding(consumerNode, consumerPropertyKey, consumerElementIndex, producerRecord, producerOutputIndex);
            }

            const MAX_TRANSITIONS_PER_FRAME = 16;
            class TopLevelStateMachineEvaluation {
              constructor(stateMachine, name, context) {
                this.passthroughWeight = 1.0;
                this._motionStates = [];
                this._proceduralPoseStates = [];
                this._topLevelEntry = void 0;
                this._topLevelExit = void 0;
                this._currentNode = void 0;
                this._pendingTransitionPath = [];
                this._activatedTransitions = [];
                this._activatedTransitionPool = ActivatedTransition.createPool(4);
                this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
                this._conditionEvaluationContext = new ConditionEvaluationContextImpl();
                this._additive = false;
                this._additive = context.additive;
                this.name = name;
                this._controller = context.controller;
                const {
                  entry,
                  exit
                } = this._addStateMachine(stateMachine, null, context, name);
                this._topLevelEntry = entry;
                this._topLevelExit = exit;
                this._currentNode = entry;
                entry.increaseActiveReference();
                this._resetTrigger = context.triggerResetter;
              }
              get exited() {
                return this._currentNode === this._topLevelExit;
              }
              settle(context) {
                const {
                  _proceduralPoseStates: proceduralPoseStates
                } = this;
                const nProceduralPoseStates = proceduralPoseStates.length;
                for (let iState = 0; iState < nProceduralPoseStates; ++iState) {
                  const state = proceduralPoseStates[iState];
                  state.settle(context);
                }
              }
              reenter() {
                for (const transition of this._activatedTransitions) {
                  transition.destination.decreaseActiveReference();
                  this._activatedTransitionPool.free(transition);
                }
                this._activatedTransitions.length = 0;
                this._topLevelEntry.increaseActiveReference();
                this._currentNode.decreaseActiveReference();
                this._currentNode = this._topLevelEntry;
              }
              update(context) {
                assertIsTrue(!this.exited);
                this._loopMatchTransitions();
                this._resetStateTickFlagsAndWeights();
                this._updateActivatedTransitions(context.deltaTime);
                this._commitStateUpdates(context);
              }
              evaluate(context) {
                const sampled = this._sample(context);
                if (sampled) {
                  return sampled;
                }
                return this._pushNullishPose(context);
              }
              getCurrentStateStatus() {
                const {
                  _currentNode: currentNode
                } = this;
                if (currentNode.kind === NodeKind.animation) {
                  return currentNode.getStatus();
                } else if (currentNode.kind === NodeKind.procedural) {
                  return currentNode.getStatus();
                } else {
                  return null;
                }
              }
              getCurrentClipStatuses() {
                const {
                  _currentNode: currentNode
                } = this;
                if (currentNode.kind === NodeKind.animation) {
                  return currentNode.getClipStatuses(currentNode.absoluteWeight);
                } else {
                  return emptyClipStatusesIterable;
                }
              }
              getCurrentTransition(transitionStatus) {
                const {
                  _activatedTransitions: activatedTransitions
                } = this;
                if (activatedTransitions.length === 0) {
                  return false;
                }
                const lastActivatedTransition = activatedTransitions[activatedTransitions.length - 1];
                const baseDurationState = activatedTransitions.length === 1 ? this._currentNode : activatedTransitions[activatedTransitions.length - 2].destination;
                const absoluteDuration = lastActivatedTransition.getAbsoluteDuration(baseDurationState);
                transitionStatus.duration = absoluteDuration;
                transitionStatus.time = lastActivatedTransition.normalizedElapsedTime * absoluteDuration;
                return true;
              }
              getNextStateStatus() {
                const {
                  _activatedTransitions: activatedTransitions
                } = this;
                if (activatedTransitions.length === 0) {
                  return null;
                }
                const lastState = activatedTransitions[activatedTransitions.length - 1].destination;
                switch (lastState.kind) {
                  default:
                    break;
                  case NodeKind.procedural:
                    return lastState.getStatus();
                  case NodeKind.animation:
                    return lastState.getStatus();
                }
                return null;
              }
              getNextClipStatuses() {
                var _lastState$getClipSta;
                const {
                  _activatedTransitions: activatedTransitions
                } = this;
                if (activatedTransitions.length === 0) {
                  return emptyClipStatusesIterable;
                }
                const lastActivatedTransition = activatedTransitions[activatedTransitions.length - 1];
                const lastState = lastActivatedTransition.destination;
                switch (lastState.kind) {
                  default:
                    return emptyClipStatusesIterable;
                  case NodeKind.animation:
                    return (_lastState$getClipSta = lastState.getClipStatuses(lastActivatedTransition.destination.absoluteWeight)) !== null && _lastState$getClipSta !== void 0 ? _lastState$getClipSta : emptyClipStatusesIterable;
                }
              }
              overrideClips(context) {
                const {
                  _motionStates: motionStates
                } = this;
                const nMotionStates = motionStates.length;
                for (let iMotionState = 0; iMotionState < nMotionStates; ++iMotionState) {
                  const node = motionStates[iMotionState];
                  node.overrideClips(context);
                }
              }
              _addStateMachine(graph, parentStateMachineInfo, context, __DEBUG_ID__) {
                const nodes = Array.from(graph.states());
                let entryEval;
                let anyNode;
                let exitEval;
                const nodeEvaluations = nodes.map(node => {
                  if (node instanceof MotionState) {
                    const motionStateEval = new VMSMEval(node, context);
                    this._motionStates.push(motionStateEval);
                    return motionStateEval;
                  } else if (node === graph.entryState) {
                    return entryEval = new SpecialStateEval(node, NodeKind.entry, node.name);
                  } else if (node === graph.exitState) {
                    return exitEval = new SpecialStateEval(node, NodeKind.exit, node.name);
                  } else if (node === graph.anyState) {
                    return anyNode = new SpecialStateEval(node, NodeKind.any, node.name);
                  } else if (node instanceof EmptyState) {
                    return new EmptyStateEval(node);
                  } else if (node instanceof ProceduralPoseState_) {
                    const stateEval = new ProceduralPoseStateEval(node, context);
                    this._proceduralPoseStates.push(stateEval);
                    return stateEval;
                  } else {
                    assertIsTrue(node instanceof SubStateMachine);
                    return null;
                  }
                });
                assertIsNonNullable(entryEval, 'Entry node is missing');
                assertIsNonNullable(exitEval, 'Exit node is missing');
                assertIsNonNullable(anyNode, 'Any node is missing');
                const stateMachineInfo = {
                  components: null,
                  parent: parentStateMachineInfo,
                  entry: entryEval,
                  exit: exitEval,
                  any: anyNode
                };
                for (let iNode = 0; iNode < nodes.length; ++iNode) {
                  const nodeEval = nodeEvaluations[iNode];
                  if (nodeEval) {
                    nodeEval.stateMachine = stateMachineInfo;
                  }
                }
                const subStateMachineInfos = nodes.map(node => {
                  if (node instanceof SubStateMachine) {
                    const subStateMachineInfo = this._addStateMachine(node.stateMachine, stateMachineInfo, context, `${__DEBUG_ID__}/${node.name}`);
                    subStateMachineInfo.components = new InstantiatedComponents(node);
                    return subStateMachineInfo;
                  } else {
                    return null;
                  }
                });
                {
                  for (const nodeEval of nodeEvaluations) {
                    if (nodeEval) {
                      nodeEval.setPrefix_debug(`${__DEBUG_ID__}/`);
                    }
                  }
                }
                for (let iNode = 0; iNode < nodes.length; ++iNode) {
                  const node = nodes[iNode];
                  const outgoingTemplates = graph.getOutgoings(node);
                  let fromNode;
                  if (node instanceof SubStateMachine) {
                    const subStateMachineInfo = subStateMachineInfos[iNode];
                    assertIsNonNullable(subStateMachineInfo);
                    fromNode = subStateMachineInfo.exit;
                  } else {
                    const nodeEval = nodeEvaluations[iNode];
                    assertIsNonNullable(nodeEval);
                    fromNode = nodeEval;
                  }
                  for (const outgoing of outgoingTemplates) {
                    const outgoingNode = outgoing.to;
                    const iOutgoingNode = nodes.findIndex(nodeTemplate => nodeTemplate === outgoing.to);
                    if (iOutgoingNode < 0) {
                      assertIsTrue(false, 'Bad animation data');
                    }
                    let toNode;
                    if (outgoingNode instanceof SubStateMachine) {
                      const subStateMachineInfo = subStateMachineInfos[iOutgoingNode];
                      assertIsNonNullable(subStateMachineInfo);
                      toNode = subStateMachineInfo.entry;
                    } else {
                      const nodeEval = nodeEvaluations[iOutgoingNode];
                      assertIsNonNullable(nodeEval);
                      if (nodeEval instanceof VMSMEval) {
                        toNode = nodeEval.entry;
                      } else {
                        toNode = nodeEval;
                      }
                    }
                    const conditions = outgoing.conditions.map(condition => condition[createEval](context));
                    const transitionEval = {
                      conditions,
                      to: toNode,
                      triggers: undefined,
                      duration: 0.0,
                      normalizedDuration: false,
                      destinationStart: 0.0,
                      relativeDestinationStart: false,
                      exitCondition: 0.0,
                      exitConditionEnabled: false,
                      activated: false,
                      startEventBinding: undefined,
                      endEventBinding: undefined
                    };
                    if (isAnimationTransition(outgoing) || outgoing instanceof EmptyStateTransition || outgoing instanceof ProceduralPoseTransition_) {
                      transitionEval.duration = outgoing.duration;
                      transitionEval.destinationStart = outgoing.destinationStart;
                      transitionEval.relativeDestinationStart = outgoing.relativeDestinationStart;
                      if (outgoing.startEventBinding.isBound) {
                        transitionEval.startEventBinding = outgoing.startEventBinding;
                      }
                      if (outgoing.endEventBinding.isBound) {
                        transitionEval.endEventBinding = outgoing.endEventBinding;
                      }
                      if (isAnimationTransition(outgoing)) {
                        transitionEval.normalizedDuration = outgoing.relativeDuration;
                        transitionEval.exitConditionEnabled = outgoing.exitConditionEnabled;
                        transitionEval.exitCondition = outgoing.exitCondition;
                      }
                    }
                    transitionEval.conditions.forEach((conditionEval, iCondition) => {
                      const condition = outgoing.conditions[iCondition];
                      if (condition instanceof TriggerCondition && condition.trigger) {
                        var _transitionEval$trigg;
                        ((_transitionEval$trigg = transitionEval.triggers) !== null && _transitionEval$trigg !== void 0 ? _transitionEval$trigg : transitionEval.triggers = []).push(condition.trigger);
                      }
                    });
                    fromNode.addTransition(transitionEval);
                  }
                }
                return stateMachineInfo;
              }
              _loopMatchTransitions() {
                const {
                  _pendingTransitionPath: pendingTransitionPath,
                  _activatedTransitions: activatedTransitions
                } = this;
                assertIsTrue(pendingTransitionPath.length === 0);
                let matchingSource = activatedTransitions.length === 0 ? this._currentNode : activatedTransitions[activatedTransitions.length - 1].destination;
                for (let iterations = 0;; ++iterations) {
                  if (iterations >= MAX_TRANSITIONS_PER_FRAME) {
                    let prettyPath = '';
                    {
                      const lastDestination = activatedTransitions[activatedTransitions.length - 1].destination;
                      let loopFormPosition = -1;
                      for (let i = activatedTransitions.length - 2; i >= 0; --i) {
                        if (activatedTransitions[i].destination === lastDestination) {
                          loopFormPosition = i;
                          break;
                        }
                      }
                      prettyPath = `${this._currentNode.name} --> ... --> `;
                      const pathToPrint = loopFormPosition < 0 ? activatedTransitions.slice(-MAX_TRANSITIONS_PER_FRAME) : activatedTransitions.slice(loopFormPosition);
                      prettyPath += `${pathToPrint.map(t => t.destination.name).join(' --> ')}`;
                    }
                    warnID(14000, MAX_TRANSITIONS_PER_FRAME, prettyPath);
                    break;
                  }
                  const transition = this._matchNextTransition(matchingSource);
                  if (!transition) {
                    break;
                  }
                  const destinationState = transition.to;
                  const currentMatchingSource = matchingSource;
                  matchingSource = destinationState;
                  if (!isRealState(destinationState)) {
                    pendingTransitionPath.push(transition);
                    continue;
                  }
                  if (destinationState === currentMatchingSource) {
                    break;
                  }
                  this._activateTransition(pendingTransitionPath, transition);
                  pendingTransitionPath.length = 0;
                }
                pendingTransitionPath.length = 0;
              }
              _resetStateTickFlagsAndWeights() {
                const {
                  _currentNode: currentNode,
                  _activatedTransitions: activatedTransitions
                } = this;
                currentNode.resetTickFlagsAndWeight();
                for (let iTransition = 0; iTransition < activatedTransitions.length; ++iTransition) {
                  const {
                    destination
                  } = activatedTransitions[iTransition];
                  destination.resetTickFlagsAndWeight();
                }
              }
              _commitStateUpdates(parentContext) {
                const {
                  _currentNode: currentNode,
                  _activatedTransitions: activatedTransitions,
                  _updateContextGenerator: updateContextGenerator
                } = this;
                this._commitStateUpdate(currentNode, parentContext);
                for (let iTransition = 0; iTransition < activatedTransitions.length; ++iTransition) {
                  const transition = activatedTransitions[iTransition];
                  const {
                    destination
                  } = transition;
                  this._commitStateUpdate(destination, parentContext);
                }
              }
              _commitStateUpdate(state, parentContext) {
                const {
                  _updateContextGenerator: updateContextGenerator
                } = this;
                if (state.testTickFlag(StateTickFlag.UPDATED)) {
                  return;
                }
                state.setTickFlag(StateTickFlag.UPDATED);
                if (state.kind === NodeKind.animation) {
                  state.update(parentContext.deltaTime, this._controller);
                } else if (state.kind === NodeKind.procedural) {
                  const updateContext = updateContextGenerator.generate(parentContext.deltaTime, parentContext.indicativeWeight * state.absoluteWeight);
                  state.update(updateContext);
                }
              }
              _sample(context) {
                const {
                  _currentNode: currentNode,
                  _activatedTransitions: activatedTransitions
                } = this;
                let passthroughWeight = 1.0;
                let finalPose = null;
                let sumActualBlendedWeight = 0.0;
                if (currentNode.kind === NodeKind.animation) {
                  var _currentNode$evaluate;
                  finalPose = (_currentNode$evaluate = currentNode.evaluate(context)) !== null && _currentNode$evaluate !== void 0 ? _currentNode$evaluate : this._pushNullishPose(context);
                } else if (currentNode.kind === NodeKind.procedural) {
                  var _currentNode$evaluate2;
                  finalPose = (_currentNode$evaluate2 = currentNode.evaluate(context)) !== null && _currentNode$evaluate2 !== void 0 ? _currentNode$evaluate2 : this._pushNullishPose(context);
                } else {
                  passthroughWeight -= currentNode.absoluteWeight;
                  finalPose = null;
                }
                if (finalPose) {
                  sumActualBlendedWeight = currentNode.absoluteWeight;
                }
                currentNode.setTickFlag(StateTickFlag.EVALUATED);
                for (let iTransition = 0; iTransition < activatedTransitions.length; ++iTransition) {
                  const transition = activatedTransitions[iTransition];
                  const {
                    destination
                  } = transition;
                  if (destination.testTickFlag(StateTickFlag.EVALUATED)) {
                    continue;
                  }
                  destination.setTickFlag(StateTickFlag.EVALUATED);
                  const destAbsoluteWeight = destination.absoluteWeight;
                  let destPose;
                  if (destination.kind === NodeKind.empty) {
                    passthroughWeight -= destAbsoluteWeight;
                    destPose = null;
                  } else {
                    var _destination$evaluate;
                    destPose = (_destination$evaluate = destination.evaluate(context)) !== null && _destination$evaluate !== void 0 ? _destination$evaluate : this._pushNullishPose(context);
                  }
                  if (!destPose) {
                    continue;
                  }
                  if (!finalPose) {
                    finalPose = destPose;
                  } else {
                    sumActualBlendedWeight += destAbsoluteWeight;
                    if (sumActualBlendedWeight) {
                      const t = destAbsoluteWeight / sumActualBlendedWeight;
                      blendPoseInto(finalPose, destPose, t);
                      context.popPose();
                    } else {
                      finalPose = destPose;
                    }
                  }
                }
                this.passthroughWeight = passthroughWeight;
                return finalPose;
              }
              _pushNullishPose(context) {
                return this._additive ? context.pushZeroDeltaPose() : context.pushDefaultedPose();
              }
              _matchNextTransition(sourceState) {
                const transition = this._matchTransition(sourceState, sourceState);
                if (transition) {
                  return transition;
                }
                if (sourceState.kind === NodeKind.animation || sourceState.kind === NodeKind.procedural) {
                  const transition = this._matchAnyScoped(sourceState);
                  if (transition) {
                    return transition;
                  }
                }
                return null;
              }
              _matchAnyScoped(realNode) {
                for (let ancestor = realNode.stateMachine; ancestor !== null; ancestor = ancestor.parent) {
                  const transition = this._matchTransition(ancestor.any, realNode);
                  if (transition) {
                    return transition;
                  }
                }
                return null;
              }
              _matchTransition(node, realNode) {
                assertIsTrue(node === realNode || node.kind === NodeKind.any);
                const {
                  _conditionEvaluationContext: conditionEvaluationContext
                } = this;
                conditionEvaluationContext.set(realNode);
                const {
                  outgoingTransitions
                } = node;
                const nTransitions = outgoingTransitions.length;
                for (let iTransition = 0; iTransition < nTransitions; ++iTransition) {
                  const transition = outgoingTransitions[iTransition];
                  if (transition.activated) {
                    continue;
                  }
                  const {
                    conditions
                  } = transition;
                  const nConditions = conditions.length;
                  if (nConditions === 0) {
                    if (node.kind === NodeKind.entry || node.kind === NodeKind.exit) {
                      {
                        conditionEvaluationContext.unset();
                      }
                      return transition;
                    }
                    if (!transition.exitConditionEnabled) {
                      continue;
                    }
                  }
                  if (realNode.kind === NodeKind.animation && transition.exitConditionEnabled) {
                    const exitTime = realNode.duration * transition.exitCondition;
                    const currentStateTime = realNode.time;
                    if (currentStateTime < exitTime) {
                      break;
                    }
                  }
                  let satisfied = true;
                  for (let iCondition = 0; iCondition < nConditions; ++iCondition) {
                    const condition = conditions[iCondition];
                    if (!condition.eval(this._conditionEvaluationContext)) {
                      satisfied = false;
                      break;
                    }
                  }
                  if (!satisfied) {
                    continue;
                  }
                  {
                    conditionEvaluationContext.unset();
                  }
                  return transition;
                }
                {
                  conditionEvaluationContext.unset();
                }
                return null;
              }
              _activateTransition(prefix, lastTransition) {
                const destinationState = lastTransition.to;
                assertIsTrue(isRealState(destinationState));
                const activatedTransition = this._activatedTransitionPool.alloc();
                activatedTransition.reset(prefix, lastTransition);
                this._activatedTransitions.push(activatedTransition);
                const nTransitions = activatedTransition.path.length;
                for (let iTransition = 0; iTransition < nTransitions; ++iTransition) {
                  const transition = activatedTransition.path[iTransition];
                  this._resetTriggersOnTransition(transition);
                }
                for (let iDetailedTransition = 0; iDetailedTransition < activatedTransition.path.length; ++iDetailedTransition) {
                  const detailedTransition = activatedTransition.path[iDetailedTransition];
                  this._callEnterMethods(detailedTransition.to);
                }
                assertIsTrue(this._activatedTransitions.length > 0);
                const previousState = this._activatedTransitions.length === 1 ? this._currentNode : this._activatedTransitions[this._activatedTransitions.length - 2].destination;
                if (previousState instanceof EventifiedStateEval) {
                  if (previousState.transitionOutEventBinding) {
                    this._emit(previousState.transitionOutEventBinding);
                  }
                }
                if (lastTransition.startEventBinding) {
                  this._emit(lastTransition.startEventBinding);
                }
                if (destinationState instanceof EventifiedStateEval) {
                  if (destinationState.transitionInEventBinding) {
                    this._emit(destinationState.transitionInEventBinding);
                  }
                }
              }
              _updateActivatedTransitions(deltaTime) {
                const {
                  _activatedTransitions: activatedTransitions
                } = this;
                let iTransition = activatedTransitions.length - 1;
                let remainingWeight = 1.0;
                let lastTransitionIndex = iTransition;
                for (; iTransition >= 0; --iTransition) {
                  const transition = activatedTransitions[iTransition];
                  const sourceState = iTransition === 0 ? this._currentNode : activatedTransitions[iTransition - 1].destination;
                  transition.update(deltaTime, sourceState);
                  if (transition.done) {
                    this._dropActivatedTransitions(lastTransitionIndex);
                    break;
                  }
                  const destinationWeight = transition.normalizedElapsedTime * remainingWeight;
                  transition.destination.increaseAbsoluteWeight(destinationWeight);
                  remainingWeight *= 1.0 - transition.normalizedElapsedTime;
                  lastTransitionIndex = iTransition - 1;
                }
                this._currentNode.increaseAbsoluteWeight(remainingWeight);
              }
              _dropActivatedTransitions(lastTransitionIndex) {
                const {
                  _activatedTransitions: activatedTransition,
                  _activatedTransitionPool: activatedTransitionPool
                } = this;
                assertIsTrue(lastTransitionIndex >= 0 && lastTransitionIndex < activatedTransition.length);
                const lenSubpath = lastTransitionIndex + 1;
                const lastTransition = activatedTransition[lastTransitionIndex];
                const newCurrentState = lastTransition.destination;
                {
                  assertIsTrue(lastTransition.path.length !== 0);
                  const lastRealTransition = lastTransition.path[lastTransition.path.length - 1];
                  if (lastRealTransition.endEventBinding) {
                    this._emit(lastRealTransition.endEventBinding);
                  }
                }
                this._callExitMethods(this._currentNode);
                for (let iTransition = 0; iTransition <= lastTransitionIndex; ++iTransition) {
                  const transition = activatedTransition[iTransition];
                  if (iTransition !== lastTransitionIndex) {
                    transition.destination.decreaseActiveReference();
                  }
                  const iLastExitingDetailedTransition = iTransition === lastTransitionIndex ? transition.path.length - 1 : transition.path.length;
                  for (let iDetailedTransition = 0; iDetailedTransition < iLastExitingDetailedTransition; ++iDetailedTransition) {
                    const detailedTransition = transition.path[iDetailedTransition];
                    this._callExitMethods(detailedTransition.to);
                  }
                  activatedTransitionPool.free(transition);
                }
                if (lastTransitionIndex === activatedTransition.length - 1) {
                  activatedTransition.length = 0;
                } else {
                  for (let iTransition = lastTransitionIndex + 1; iTransition < activatedTransition.length; ++iTransition) {
                    activatedTransition[iTransition - lenSubpath] = activatedTransition[iTransition];
                  }
                  activatedTransition.length -= lenSubpath;
                }
                this._currentNode.decreaseActiveReference();
                this._currentNode = newCurrentState;
              }
              _resetTriggersOnTransition(transition) {
                const {
                  triggers
                } = transition;
                if (triggers) {
                  const nTriggers = triggers.length;
                  for (let iTrigger = 0; iTrigger < nTriggers; ++iTrigger) {
                    const trigger = triggers[iTrigger];
                    this._resetTrigger(trigger);
                  }
                }
              }
              _resetTrigger(name) {
                const {
                  _triggerReset: triggerResetFn
                } = this;
                triggerResetFn(name);
              }
              _callEnterMethods(node) {
                var _node$stateMachine$co;
                const {
                  _controller: controller
                } = this;
                switch (node.kind) {
                  default:
                    break;
                  case NodeKind.animation:
                    {
                      node.components.callMotionStateEnterMethods(controller, node.getStatus());
                      break;
                    }
                  case NodeKind.entry:
                    (_node$stateMachine$co = node.stateMachine.components) === null || _node$stateMachine$co === void 0 ? void 0 : _node$stateMachine$co.callStateMachineEnterMethods(controller);
                    break;
                }
              }
              _callExitMethods(node) {
                var _node$stateMachine$co2;
                const {
                  _controller: controller
                } = this;
                switch (node.kind) {
                  default:
                    break;
                  case NodeKind.animation:
                    {
                      node.components.callMotionStateExitMethods(controller, node.getStatus());
                      break;
                    }
                  case NodeKind.exit:
                    (_node$stateMachine$co2 = node.stateMachine.components) === null || _node$stateMachine$co2 === void 0 ? void 0 : _node$stateMachine$co2.callStateMachineExitMethods(controller);
                    break;
                }
              }
              _emit(eventBinding) {
                eventBinding.emit(this._controller.node);
              }
            }
            function isRealState(stateEval) {
              return stateEval.kind === NodeKind.animation || stateEval.kind === NodeKind.empty || stateEval.kind === NodeKind.procedural;
            }
            function createStateStatusCache() {
              return {
                progress: 0.0
              };
            }
            const emptyClipStatusesIterator = {
              next(..._args) {
                return {
                  done: true,
                  value: undefined
                };
              }
            };
            const emptyClipStatusesIterable = {
              [Symbol.iterator]() {
                return emptyClipStatusesIterator;
              }
            };
            var NodeKind;
            (function (NodeKind) {
              NodeKind[NodeKind["entry"] = 0] = "entry";
              NodeKind[NodeKind["exit"] = 1] = "exit";
              NodeKind[NodeKind["any"] = 2] = "any";
              NodeKind[NodeKind["animation"] = 3] = "animation";
              NodeKind[NodeKind["empty"] = 4] = "empty";
              NodeKind[NodeKind["procedural"] = 5] = "procedural";
            })(NodeKind || (NodeKind = {}));
            class StateEval {
              constructor(node) {
                this.name = void 0;
                this.outgoingTransitions = [];
                this._activeReferenceCount = 0;
                this._tickFlags = 0;
                this._absoluteWeight = 0.0;
                this.name = node.name;
              }
              get absoluteWeight() {
                return this._absoluteWeight;
              }
              get activeReferenceCount() {
                return this._activeReferenceCount;
              }
              setPrefix_debug(prefix) {
                this.__DEBUG_ID__ = `${prefix}${this.name}`;
              }
              addTransition(transition) {
                this.outgoingTransitions.push(transition);
              }
              increaseActiveReference() {
                if (this._activeReferenceCount === 0) {
                  this._absoluteWeight = 0.0;
                  this._tickFlags = 0;
                }
                ++this._activeReferenceCount;
              }
              decreaseActiveReference() {
                {
                  this._checkActivated();
                }
                --this._activeReferenceCount;
              }
              resetTickFlagsAndWeight() {
                this._checkActivated();
                this._absoluteWeight = 0.0;
                this._tickFlags = 0;
              }
              increaseAbsoluteWeight(weight) {
                this._absoluteWeight += weight;
              }
              testTickFlag(flag) {
                {
                  this._checkActivated();
                }
                return !!(this._tickFlags & flag);
              }
              setTickFlag(flag) {
                {
                  this._checkActivated();
                }
                assertIsTrue(!this.testTickFlag(flag), `Can not set ${StateTickFlag[flag]} since it has been set!`);
                this._tickFlags |= flag;
              }
              _checkActivated() {
                assertIsTrue(this._activeReferenceCount > 0, `The state has not been activated`);
              }
            }
            class EventifiedStateEval extends StateEval {
              constructor(state) {
                super(state);
                this.transitionInEventBinding = undefined;
                this.transitionOutEventBinding = undefined;
                if (state.transitionInEventBinding.isBound) {
                  this.transitionInEventBinding = state.transitionInEventBinding;
                }
                if (state.transitionOutEventBinding.isBound) {
                  this.transitionOutEventBinding = state.transitionOutEventBinding;
                }
              }
            }
            var StateTickFlag;
            (function (StateTickFlag) {
              StateTickFlag[StateTickFlag["UPDATED"] = 1] = "UPDATED";
              StateTickFlag[StateTickFlag["EVALUATED"] = 2] = "EVALUATED";
            })(StateTickFlag || (StateTickFlag = {}));
            class InstantiatedComponents {
              constructor(node) {
                this._components = node.instantiateComponents();
              }
              callMotionStateEnterMethods(controller, status) {
                this._callMotionStateCallbackIfNonDefault('onMotionStateEnter', controller, status);
              }
              callMotionStateUpdateMethods(controller, status) {
                this._callMotionStateCallbackIfNonDefault('onMotionStateUpdate', controller, status);
              }
              callMotionStateExitMethods(controller, status) {
                this._callMotionStateCallbackIfNonDefault('onMotionStateExit', controller, status);
              }
              callStateMachineEnterMethods(controller) {
                this._callStateMachineCallbackIfNonDefault('onStateMachineEnter', controller);
              }
              callStateMachineExitMethods(controller) {
                this._callStateMachineCallbackIfNonDefault('onStateMachineExit', controller);
              }
              _callMotionStateCallbackIfNonDefault(methodName, controller, status) {
                const {
                  _components: components
                } = this;
                const nComponents = components.length;
                for (let iComponent = 0; iComponent < nComponents; ++iComponent) {
                  const component = components[iComponent];
                  if (component[methodName] !== StateMachineComponent.prototype[methodName]) {
                    component[methodName](controller, status);
                  }
                }
              }
              _callStateMachineCallbackIfNonDefault(methodName, controller) {
                const {
                  _components: components
                } = this;
                const nComponents = components.length;
                for (let iComponent = 0; iComponent < nComponents; ++iComponent) {
                  const component = components[iComponent];
                  if (component[methodName] !== StateMachineComponent.prototype[methodName]) {
                    component[methodName](controller);
                  }
                }
              }
            }
            class VMSMEval {
              constructor(state, context) {
                var _state$motion$createE, _state$motion;
                this._source = null;
                this._baseSpeed = 1.0;
                this._speed = 1.0;
                this._publicState = void 0;
                this._privateState = void 0;
                const name = state.name;
                this._baseSpeed = state.speed;
                this._setSpeedMultiplier(1.0);
                if (state.speedMultiplierEnabled && state.speedMultiplier) {
                  const speedMultiplierVarName = state.speedMultiplier;
                  const varInstance = context.getVar(speedMultiplierVarName);
                  if (validateVariableExistence(varInstance, speedMultiplierVarName)) {
                    validateVariableType(varInstance.type, VariableType.FLOAT, speedMultiplierVarName);
                    varInstance.bind(this._setSpeedMultiplier, this);
                    const initialSpeedMultiplier = varInstance.value;
                    this._setSpeedMultiplier(initialSpeedMultiplier);
                  }
                }
                const sourceEval = (_state$motion$createE = (_state$motion = state.motion) === null || _state$motion === void 0 ? void 0 : _state$motion[createEval](context, false)) !== null && _state$motion$createE !== void 0 ? _state$motion$createE : null;
                if (sourceEval) {
                  Object.defineProperty(sourceEval, '__DEBUG_ID__', {
                    value: name
                  });
                }
                this._source = sourceEval;
                this._publicState = new VMSMInternalState(this, state, sourceEval === null || sourceEval === void 0 ? void 0 : sourceEval.createPort());
                this._privateState = new VMSMInternalState(this, state, sourceEval === null || sourceEval === void 0 ? void 0 : sourceEval.createPort());
                this.components = new InstantiatedComponents(state);
              }
              get duration() {
                var _this$_source$duratio, _this$_source;
                return (_this$_source$duratio = (_this$_source = this._source) === null || _this$_source === void 0 ? void 0 : _this$_source.duration) !== null && _this$_source$duratio !== void 0 ? _this$_source$duratio : 0.0;
              }
              get speed() {
                return this._speed;
              }
              get entry() {
                return this._publicState;
              }
              get stateMachine() {
                return this._stateMachine;
              }
              set stateMachine(value) {
                this._stateMachine = value;
                this._publicState.stateMachine = value;
                this._privateState.stateMachine = value;
              }
              setPrefix_debug(prefix) {
                this._publicState.setPrefix_debug(prefix);
                this._privateState.setPrefix_debug(prefix);
              }
              addTransition(transition) {
                if (transition.to === this._publicState) {
                  this._publicState.addTransition({
                    ...transition,
                    to: this._privateState
                  });
                } else {
                  this._publicState.addTransition(transition);
                }
                this._privateState.addTransition(transition);
              }
              getClipStatuses(baseWeight) {
                const {
                  _source: source
                } = this;
                if (!source) {
                  return emptyClipStatusesIterable;
                } else {
                  return {
                    [Symbol.iterator]: () => source.getClipStatuses(baseWeight)
                  };
                }
              }
              overrideClips(context) {
                var _this$_source2;
                (_this$_source2 = this._source) === null || _this$_source2 === void 0 ? void 0 : _this$_source2.overrideClips(context);
              }
              _setSpeedMultiplier(value) {
                this._speed = this._baseSpeed * value;
              }
            }
            class VMSMInternalState extends EventifiedStateEval {
              constructor(container, containerState, port) {
                super(containerState);
                this.kind = NodeKind.animation;
                this._container = void 0;
                this._progress = 0.0;
                this._port = void 0;
                this._statusCache = createStateStatusCache();
                this._container = container;
                this._port = port;
              }
              get duration() {
                return this._container.duration;
              }
              get components() {
                return this._container.components;
              }
              get normalizedTime() {
                return this._progress;
              }
              get time() {
                return this._progress * this._container.duration;
              }
              reenter(initialTimeNormalized) {
                var _this$_port;
                this._progress = initialTimeNormalized;
                (_this$_port = this._port) === null || _this$_port === void 0 ? void 0 : _this$_port.reenter();
              }
              getStatus() {
                const {
                  _statusCache: stateStatus
                } = this;
                {
                  stateStatus.__DEBUG_ID__ = this.name;
                }
                stateStatus.progress = normalizeProgress(this._progress);
                return stateStatus;
              }
              getClipStatuses(baseWeight) {
                return this._container.getClipStatuses(baseWeight);
              }
              update(deltaTime, controller) {
                this._progress = calcProgressUpdate(this._progress, this.duration, deltaTime * this._container.speed);
                this._container.components.callMotionStateUpdateMethods(controller, this.getStatus());
              }
              evaluate(context) {
                var _this$_port$evaluate, _this$_port2;
                return (_this$_port$evaluate = (_this$_port2 = this._port) === null || _this$_port2 === void 0 ? void 0 : _this$_port2.evaluate(this._progress, context)) !== null && _this$_port$evaluate !== void 0 ? _this$_port$evaluate : null;
              }
            }
            function calcProgressUpdate(currentProgress, duration, deltaTime) {
              if (duration === 0.0) {
                return 0.0;
              }
              const progress = currentProgress + deltaTime / duration;
              return progress;
            }
            function normalizeProgress(progress) {
              const signedFrac = progress - Math.trunc(progress);
              return signedFrac >= 0.0 ? signedFrac : 1.0 + signedFrac;
            }
            class SpecialStateEval extends StateEval {
              constructor(node, kind, name) {
                super(node);
                this.kind = void 0;
                this.kind = kind;
              }
            }
            class EmptyStateEval extends StateEval {
              constructor(node) {
                super(node);
                this.kind = NodeKind.empty;
              }
            }
            class ProceduralPoseStateEval extends EventifiedStateEval {
              constructor(state, context) {
                super(state);
                this.kind = NodeKind.procedural;
                this.elapsedTime = 0.0;
                this.statusCache = createStateStatusCache();
                this._instantiatedPoseGraph = void 0;
                this._statusCache = createStateStatusCache();
                this._elapsedTime = 0.0;
                const instantiatedPoseGraph = instantiatePoseGraph(state.graph, context, true);
                instantiatedPoseGraph.bind(context);
                this._instantiatedPoseGraph = instantiatedPoseGraph;
                {
                  this._statusCache.__DEBUG_ID__ = state.name;
                }
                this._statusCache.progress = 0.0;
              }
              settle(context) {
                this._instantiatedPoseGraph.settle(context);
              }
              reenter() {
                this._statusCache.progress = 0.0;
                this._instantiatedPoseGraph.reenter();
              }
              update(context) {
                this._elapsedTime += context.deltaTime;
                this._instantiatedPoseGraph.update(context);
              }
              evaluate(context) {
                var _this$_instantiatedPo;
                return (_this$_instantiatedPo = this._instantiatedPoseGraph.evaluate(context)) !== null && _this$_instantiatedPo !== void 0 ? _this$_instantiatedPo : null;
              }
              getStatus() {
                this._statusCache.progress = normalizeProgress(this._elapsedTime);
                return this._statusCache;
              }
              countMotionTime() {
                return this._instantiatedPoseGraph.countMotionTime();
              }
            }
            class ConditionEvaluationContextImpl {
              constructor() {
                this.sourceStateWeight = 0.0;
                this._sourceState = undefined;
              }
              set(sourceState) {
                this._sourceState = sourceState;
                if (isRealState(sourceState)) {
                  assertIsTrue(sourceState.activeReferenceCount);
                  this.sourceStateWeight = sourceState.absoluteWeight;
                } else {
                  this.sourceStateWeight = 0.0;
                }
              }
              unset() {
                this._sourceState = undefined;
                this.sourceStateWeight = 0.0;
              }
              get sourceStateMotionTimeNormalized() {
                const {
                  _sourceState: sourceState
                } = this;
                assertIsTrue(sourceState && (sourceState.kind === NodeKind.animation || sourceState.kind === NodeKind.procedural) && sourceState.activeReferenceCount, `State motion time is only defined on activated motion states and procedural pose states.`);
                switch (sourceState.kind) {
                  case NodeKind.animation:
                    return sourceState.normalizedTime;
                  case NodeKind.procedural:
                    return sourceState.countMotionTime();
                  default:
                    return 0.0;
                }
              }
            }
            class ActivatedTransition {
              constructor() {
                this.normalizedElapsedTime = 0.0;
                this.path = [];
                this._durationMultiplier = 1.0;
              }
              get done() {
                return approx(this.normalizedElapsedTime, 1.0, 1e-6);
              }
              getAbsoluteDuration(baseDurationState) {
                return this._getAbsoluteDurationUnscaled(baseDurationState) * this._durationMultiplier;
              }
              update(deltaTime, fromState) {
                if (!isRealState(fromState)) {
                  this.normalizedElapsedTime = 1.0;
                  return;
                }
                const transitionDurationAbsolute = this.getAbsoluteDuration(fromState);
                let contrib = 0.0;
                if (transitionDurationAbsolute <= 0.0) {
                  contrib = 0.0;
                  this.normalizedElapsedTime = 1.0;
                } else {
                  const elapsedTransitionTime = this.normalizedElapsedTime * transitionDurationAbsolute;
                  const remainTransitionTime = transitionDurationAbsolute - elapsedTransitionTime;
                  assertIsTrue(remainTransitionTime >= 0.0);
                  contrib = Math.min(remainTransitionTime, deltaTime);
                  const newTransitionProgress = clamp01((elapsedTransitionTime + contrib) / transitionDurationAbsolute);
                  this.normalizedElapsedTime = newTransitionProgress;
                  assertIsTrue(newTransitionProgress >= 0.0 && newTransitionProgress <= 1.0);
                }
              }
              static createPool(initialCapacity) {
                const destructor = transitionInstance => {
                  transitionInstance.normalizedElapsedTime = Number.NaN;
                };
                const pool = new Pool(() => new ActivatedTransition(), initialCapacity, destructor);
                return pool;
              }
              reset(prefix, lastTransition) {
                const destinationState = lastTransition.to;
                assertIsTrue(isRealState(destinationState));
                this.normalizedElapsedTime = 0.0;
                this.destination = destinationState;
                this.path = [...prefix, lastTransition];
                const previousActiveReferenceCount = destinationState.activeReferenceCount;
                destinationState.increaseActiveReference();
                if (previousActiveReferenceCount === 0) {
                  if (destinationState.kind === NodeKind.animation) {
                    const {
                      destinationStart,
                      relativeDestinationStart: isRelativeDestinationStart
                    } = this.path[0];
                    const destinationStartRatio = isRelativeDestinationStart ? destinationStart : destinationState.duration === 0 ? 0.0 : destinationStart / destinationState.duration;
                    destinationState.reenter(destinationStartRatio);
                  } else if (destinationState.kind === NodeKind.procedural) {
                    destinationState.reenter();
                  }
                }
                assertIsTrue(destinationState.activeReferenceCount > 0);
                this._durationMultiplier = 1.0 - destinationState.absoluteWeight;
              }
              _getAbsoluteDurationUnscaled(baseDurationState) {
                assertIsTrue(this.path.length !== 0);
                const {
                  duration,
                  normalizedDuration
                } = this.path[0];
                if (!normalizedDuration) {
                  return duration;
                }
                const baseDuration = baseDurationState.kind === NodeKind.animation ? baseDurationState.duration : 1.0;
                return baseDuration * duration;
              }
            }

            var _dec$h, _dec2$h, _dec3$f, _class$h, _class2$g, _initializer$a, _initializer2$7;
            (_dec$h = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeStateMachine`), _dec2$h = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3$f = poseGraphNodeAppearance({
              themeColor: '#CCCCCC',
              inline: true
            }), _dec$h(_class$h = _dec2$h(_class$h = _dec3$f(_class$h = (_class2$g = class PoseNodeStateMachine extends PoseNode {
              constructor(...args) {
                super(...args);
                this.name = _initializer$a && _initializer$a();
                this.stateMachine = _initializer2$7 && _initializer2$7();
                this._stateMachineEval = void 0;
              }
              __callOnAfterDeserializeRecursive() {
                this.stateMachine._allowEmptyStates = false;
                this.stateMachine.__callOnAfterDeserializeRecursive();
              }
              bind(context) {
                assertIsTrue(!this._stateMachineEval);
                this._stateMachineEval = new TopLevelStateMachineEvaluation(this.stateMachine, '', context);
              }
              settle(context) {
                var _this$_stateMachineEv;
                (_this$_stateMachineEv = this._stateMachineEval) === null || _this$_stateMachineEv === void 0 ? void 0 : _this$_stateMachineEv.settle(context);
              }
              reenter() {
                var _this$_stateMachineEv2;
                (_this$_stateMachineEv2 = this._stateMachineEval) === null || _this$_stateMachineEv2 === void 0 ? void 0 : _this$_stateMachineEv2.reenter();
              }
              doUpdate(context) {
                const {
                  _stateMachineEval: stateMachineEval
                } = this;
                assertIsTrue(stateMachineEval);
                stateMachineEval.update(context);
                assertIsTrue(stateMachineEval.passthroughWeight > 1.0 - 1e-5);
              }
              doEvaluate(context) {
                const {
                  _stateMachineEval: stateMachineEval
                } = this;
                assertIsTrue(stateMachineEval);
                const stateMachinePose = stateMachineEval.evaluate(context);
                assertIsTrue(stateMachineEval.passthroughWeight > 1.0 - 1e-5);
                return stateMachinePose;
              }
            }, (_initializer$a = applyDecoratedInitializer(_class2$g.prototype, "name", [serializable$d], function () {
              return '';
            }), _initializer2$7 = applyDecoratedInitializer(_class2$g.prototype, "stateMachine", [serializable$d], function () {
              return new StateMachine(false);
            })), _class2$g)) || _class$h) || _class$h) || _class$h);

            var _dec$g, _dec2$g, _dec3$e, _dec4$b, _dec5$8, _class$g, _class2$f, _initializer$9, _descriptor$8, _initializer2$6;
            let PoseNodeSampleMotion = (_dec$g = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeSampleMotion`), _dec2$g = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3$e = poseGraphCreateNodeFactory(makeCreateNodeFactory(motion => {
              const node = new PoseNodeSampleMotion();
              node.motion = motion;
              return node;
            })), _dec4$b = poseGraphNodeAppearance({
              themeColor: '#D97721'
            }), _dec5$8 = input({
              type: PoseGraphType.FLOAT
            }), _dec$g(_class$g = _dec2$g(_class$g = _dec3$e(_class$g = _dec4$b(_class$g = (_class2$f = class PoseNodeSampleMotion extends PoseNode {
              constructor(...args) {
                super(...args);
                this.motion = _initializer$9 && _initializer$9();
                _initializerDefineProperty(this, "time", _descriptor$8, this);
                this.useNormalizedTime = _initializer2$6 && _initializer2$6();
                this._workspace = null;
              }
              bind(context) {
                const {
                  motion
                } = this;
                if (!motion) {
                  return;
                }
                const motionEval = motion[createEval](context, true);
                if (!motionEval) {
                  return;
                }
                const workspace = new SampleMotionWorkspace(motionEval, motionEval.createPort());
                this._workspace = workspace;
              }
              settle(context) {}
              reenter() {}
              doUpdate(context) {}
              doEvaluate(context) {
                const {
                  _workspace: workspace
                } = this;
                if (!workspace) {
                  return context.pushDefaultedPose();
                }
                const time = this.time;
                const normalizedTime = this.useNormalizedTime ? time : time / workspace.motionEval.duration;
                return workspace.motionEvalPort.evaluate(clamp01(normalizedTime), context);
              }
            }, (_initializer$9 = applyDecoratedInitializer(_class2$f.prototype, "motion", [serializable$d], function () {
              return new ClipMotion();
            }), _descriptor$8 = _applyDecoratedDescriptor(_class2$f.prototype, "time", [serializable$d, _dec5$8], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return 0.0;
              }
            }), _initializer2$6 = applyDecoratedInitializer(_class2$f.prototype, "useNormalizedTime", [serializable$d], function () {
              return false;
            })), _class2$f)) || _class$g) || _class$g) || _class$g) || _class$g);
            class SampleMotionWorkspace {
              constructor(motionEval, motionEvalPort) {
                this.motionEval = motionEval;
                this.motionEvalPort = motionEvalPort;
              }
            }

            var _dec$f, _dec2$f, _dec3$d, _dec4$a, _dec5$7, _dec6$5, _class$f, _class2$e, _descriptor$7, _descriptor2$3, _descriptor3$1;
            (_dec$f = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeAdditivelyBlend`), _dec2$f = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND), _dec3$d = poseGraphNodeAppearance({
              themeColor: '#72A869'
            }), _dec4$a = input({
              type: PoseGraphType.POSE
            }), _dec5$7 = input({
              type: PoseGraphType.POSE
            }), _dec6$5 = input({
              type: PoseGraphType.FLOAT
            }), _dec$f(_class$f = _dec2$f(_class$f = _dec3$d(_class$f = (_class2$e = class PoseNodeAdditivelyBlend extends PoseNode {
              constructor(...args) {
                super(...args);
                _initializerDefineProperty(this, "basePose", _descriptor$7, this);
                _initializerDefineProperty(this, "additivePose", _descriptor2$3, this);
                _initializerDefineProperty(this, "ratio", _descriptor3$1, this);
              }
              bind(context) {
                var _this$basePose, _this$additivePose;
                (_this$basePose = this.basePose) === null || _this$basePose === void 0 ? void 0 : _this$basePose.bind(context);
                context._pushAdditiveFlag(true);
                (_this$additivePose = this.additivePose) === null || _this$additivePose === void 0 ? void 0 : _this$additivePose.bind(context);
                context._popAdditiveFlag();
              }
              settle(context) {
                var _this$basePose2, _this$additivePose2;
                (_this$basePose2 = this.basePose) === null || _this$basePose2 === void 0 ? void 0 : _this$basePose2.settle(context);
                (_this$additivePose2 = this.additivePose) === null || _this$additivePose2 === void 0 ? void 0 : _this$additivePose2.settle(context);
              }
              reenter() {
                var _this$basePose3, _this$additivePose3;
                (_this$basePose3 = this.basePose) === null || _this$basePose3 === void 0 ? void 0 : _this$basePose3.reenter();
                (_this$additivePose3 = this.additivePose) === null || _this$additivePose3 === void 0 ? void 0 : _this$additivePose3.reenter();
              }
              doUpdate(context) {
                var _this$basePose4, _this$additivePose4;
                (_this$basePose4 = this.basePose) === null || _this$basePose4 === void 0 ? void 0 : _this$basePose4.update(context);
                (_this$additivePose4 = this.additivePose) === null || _this$additivePose4 === void 0 ? void 0 : _this$additivePose4.update(context);
              }
              doEvaluate(context) {
                var _this$basePose$evalua, _this$basePose5;
                const basePose = (_this$basePose$evalua = (_this$basePose5 = this.basePose) === null || _this$basePose5 === void 0 ? void 0 : _this$basePose5.evaluate(context, PoseTransformSpaceRequirement.LOCAL)) !== null && _this$basePose$evalua !== void 0 ? _this$basePose$evalua : context.pushDefaultedPose();
                if (!this.additivePose) {
                  return basePose;
                }
                const additionalPose = this.additivePose.evaluate(context, PoseTransformSpaceRequirement.LOCAL);
                applyDeltaPose(basePose, additionalPose, this.ratio);
                context.popPose();
                return basePose;
              }
            }, (_descriptor$7 = _applyDecoratedDescriptor(_class2$e.prototype, "basePose", [serializable$d, _dec4$a], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return null;
              }
            }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$e.prototype, "additivePose", [serializable$d, _dec5$7], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return null;
              }
            }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$e.prototype, "ratio", [serializable$d, _dec6$5], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return 1.0;
              }
            })), _class2$e)) || _class$f) || _class$f) || _class$f);

            function isIgnorableWeight(weight) {
              return weight < 1e-5;
            }

            var _dec$e, _dec2$e, _dec3$c, _dec4$9, _dec5$6, _class$e, _class2$d, _descriptor$6, _descriptor2$2;
            (_dec$e = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeBlendInProportion`), _dec2$e = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND), _dec3$c = poseGraphNodeAppearance({
              themeColor: '#72A869'
            }), _dec4$9 = input({
              type: PoseGraphType.POSE,
              arraySyncGroup: 'blend-item'
            }), _dec5$6 = input({
              type: PoseGraphType.FLOAT,
              arraySyncGroup: 'blend-item',
              arraySyncGroupFollower: true
            }), _dec$e(_class$e = _dec2$e(_class$e = _dec3$c(_class$e = (_class2$d = class PoseNodeBlendInProportion extends PoseNode {
              constructor(...args) {
                super(...args);
                _initializerDefineProperty(this, "poses", _descriptor$6, this);
                _initializerDefineProperty(this, "proportions", _descriptor2$2, this);
                this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
              }
              bind(context) {
                for (const pose of this.poses) {
                  pose === null || pose === void 0 ? void 0 : pose.bind(context);
                }
              }
              settle(context) {
                for (const pose of this.poses) {
                  pose === null || pose === void 0 ? void 0 : pose.settle(context);
                }
              }
              reenter() {
                for (const pose of this.poses) {
                  pose === null || pose === void 0 ? void 0 : pose.reenter();
                }
              }
              doUpdate(context) {
                const {
                  _updateContextGenerator: updateContextGenerator
                } = this;
                const nInputPoses = this.poses.length;
                for (let iInputPose = 0; iInputPose < nInputPoses; ++iInputPose) {
                  var _this$poses$iInputPos;
                  const inputPoseWeight = this.proportions[iInputPose];
                  if (isIgnorableWeight(inputPoseWeight)) {
                    continue;
                  }
                  const inputPoseUpdateContext = updateContextGenerator.generate(context.deltaTime, context.indicativeWeight * inputPoseWeight);
                  (_this$poses$iInputPos = this.poses[iInputPose]) === null || _this$poses$iInputPos === void 0 ? void 0 : _this$poses$iInputPos.update(inputPoseUpdateContext);
                }
              }
              doEvaluate(context) {
                const nInputPoses = this.poses.length;
                let sumWeight = 0.0;
                let finalPose = null;
                for (let iInputPose = 0; iInputPose < nInputPoses; ++iInputPose) {
                  var _this$poses$iInputPos2;
                  const inputPoseWeight = this.proportions[iInputPose];
                  if (isIgnorableWeight(inputPoseWeight)) {
                    continue;
                  }
                  const inputPose = (_this$poses$iInputPos2 = this.poses[iInputPose]) === null || _this$poses$iInputPos2 === void 0 ? void 0 : _this$poses$iInputPos2.evaluate(context, PoseTransformSpaceRequirement.LOCAL);
                  if (!inputPose) {
                    continue;
                  }
                  sumWeight += inputPoseWeight;
                  if (!finalPose) {
                    finalPose = inputPose;
                  } else {
                    if (sumWeight) {
                      const t = inputPoseWeight / sumWeight;
                      blendPoseInto(finalPose, inputPose, t);
                    }
                    context.popPose();
                  }
                }
                if (finalPose) {
                  return finalPose;
                }
                return context.pushDefaultedPose();
              }
            }, (_descriptor$6 = _applyDecoratedDescriptor(_class2$d.prototype, "poses", [serializable$d, _dec4$9], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return [];
              }
            }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$d.prototype, "proportions", [serializable$d, _dec5$6], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return [];
              }
            })), _class2$d)) || _class$e) || _class$e) || _class$e);

            var _dec$d, _dec2$d, _dec3$b, _dec4$8, _dec5$5, _class$d, _class2$c, _descriptor$5, _descriptor2$1, _descriptor3;
            let PoseNodeBlendTwoPoseBase = (_dec$d = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeBlendTwoPoseBase`), _dec2$d = poseGraphNodeHide(true), _dec3$b = input({
              type: PoseGraphType.POSE
            }), _dec4$8 = input({
              type: PoseGraphType.POSE
            }), _dec5$5 = input({
              type: PoseGraphType.FLOAT
            }), _dec$d(_class$d = _dec2$d(_class$d = (_class2$c = class PoseNodeBlendTwoPoseBase extends PoseNode {
              constructor(...args) {
                super(...args);
                _initializerDefineProperty(this, "pose0", _descriptor$5, this);
                _initializerDefineProperty(this, "pose1", _descriptor2$1, this);
                _initializerDefineProperty(this, "ratio", _descriptor3, this);
                this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
              }
              bind(context) {
                var _this$pose, _this$pose2;
                (_this$pose = this.pose0) === null || _this$pose === void 0 ? void 0 : _this$pose.bind(context);
                (_this$pose2 = this.pose1) === null || _this$pose2 === void 0 ? void 0 : _this$pose2.bind(context);
              }
              settle(context) {
                var _this$pose3, _this$pose4;
                (_this$pose3 = this.pose0) === null || _this$pose3 === void 0 ? void 0 : _this$pose3.settle(context);
                (_this$pose4 = this.pose1) === null || _this$pose4 === void 0 ? void 0 : _this$pose4.settle(context);
              }
              reenter() {
                var _this$pose5, _this$pose6;
                (_this$pose5 = this.pose0) === null || _this$pose5 === void 0 ? void 0 : _this$pose5.reenter();
                (_this$pose6 = this.pose1) === null || _this$pose6 === void 0 ? void 0 : _this$pose6.reenter();
              }
              doUpdate(context) {
                const {
                  pose0,
                  pose1,
                  _updateContextGenerator: updateContextGenerator,
                  ratio
                } = this;
                {
                  const updateContext = updateContextGenerator.generate(context.deltaTime, context.indicativeWeight * (1.0 - ratio));
                  pose0 === null || pose0 === void 0 ? void 0 : pose0.update(updateContext);
                }
                {
                  const updateContext = updateContextGenerator.generate(context.deltaTime, context.indicativeWeight * ratio);
                  pose1 === null || pose1 === void 0 ? void 0 : pose1.update(updateContext);
                }
              }
              doEvaluate(context) {
                var _this$pose0$evaluate, _this$pose7, _this$pose1$evaluate, _this$pose8;
                const spaceRequirement = PoseTransformSpaceRequirement.LOCAL;
                if (!this.pose0 || !this.pose1) {
                  return PoseNodeBlendTwoPoseBase.evaluateDefaultPose(context, spaceRequirement);
                }
                const pose0 = (_this$pose0$evaluate = (_this$pose7 = this.pose0) === null || _this$pose7 === void 0 ? void 0 : _this$pose7.evaluate(context, spaceRequirement)) !== null && _this$pose0$evaluate !== void 0 ? _this$pose0$evaluate : PoseNodeBlendTwoPoseBase.evaluateDefaultPose(context, spaceRequirement);
                const pose1 = (_this$pose1$evaluate = (_this$pose8 = this.pose1) === null || _this$pose8 === void 0 ? void 0 : _this$pose8.evaluate(context, spaceRequirement)) !== null && _this$pose1$evaluate !== void 0 ? _this$pose1$evaluate : PoseNodeBlendTwoPoseBase.evaluateDefaultPose(context, spaceRequirement);
                this.doBlend(pose0, pose1, this.ratio);
                context.popPose();
                return pose0;
              }
            }, (_descriptor$5 = _applyDecoratedDescriptor(_class2$c.prototype, "pose0", [serializable$d, _dec3$b], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return null;
              }
            }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$c.prototype, "pose1", [serializable$d, _dec4$8], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return null;
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2$c.prototype, "ratio", [serializable$d, _dec5$5], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return 1.0;
              }
            })), _class2$c)) || _class$d) || _class$d);

            var _dec$c, _dec2$c, _dec3$a, _class$c;
            (_dec$c = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeBlendTwoPose`), _dec2$c = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND), _dec3$a = poseGraphNodeAppearance({
              themeColor: '#72A869'
            }), _dec$c(_class$c = _dec2$c(_class$c = _dec3$a(_class$c = class PoseNodeBlendTwoPose extends PoseNodeBlendTwoPoseBase {
              doBlend(pose0, pose1, ratio) {
                return blendPoseInto(pose0, pose1, ratio);
              }
            }) || _class$c) || _class$c) || _class$c);

            var _dec$b, _dec2$b, _dec3$9, _dec4$7, _class$b, _class2$b, _initializer$8;
            (_dec$b = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeFilteringBlend`), _dec2$b = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND), _dec3$9 = poseGraphNodeAppearance({
              themeColor: '#72A869'
            }), _dec4$7 = type$2(AnimationMask), _dec$b(_class$b = _dec2$b(_class$b = _dec3$9(_class$b = (_class2$b = class PoseNodeFilteringBlend extends PoseNodeBlendTwoPoseBase {
              constructor(...args) {
                super(...args);
                this.mask = _initializer$8 && _initializer$8();
                this._transformFilter = undefined;
              }
              settle(context) {
                super.settle(context);
                if (this.mask) {
                  const transformFilter = context.createTransformFilter(this.mask);
                  this._transformFilter = transformFilter;
                }
              }
              doBlend(pose0, pose1, ratio) {
                blendPoseInto(pose0, pose1, ratio, this._transformFilter);
              }
            }, (_initializer$8 = applyDecoratedInitializer(_class2$b.prototype, "mask", [serializable$d, _dec4$7], function () {
              return null;
            })), _class2$b)) || _class$b) || _class$b) || _class$b);

            const POSE_GRAPH_NODE_MENU_PREFIX_CHOOSE = `${POSE_GRAPH_NODE_MENU_PREFIX_POSE}/` + `i18n:ENGINE.animation_graph.pose_graph_node_sub_categories.pose_nodes_choose/`;

            var _dec$a, _dec2$a, _class$a, _class2$a, _initializer$7, _initializer2$5;
            const ZERO_ALTERING_DURATION_THRESHOLD = 1e-5;
            let PoseNodeChoosePoseBase = (_dec$a = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeChoosePoseBase`), _dec2$a = poseGraphNodeHide(), _dec$a(_class$a = _dec2$a(_class$a = (_class2$a = class PoseNodeChoosePoseBase extends PoseNode {
              constructor(initialChoiceCount = 0) {
                super();
                this._poses = _initializer$7 && _initializer$7();
                this._fadeInDurations = _initializer2$5 && _initializer2$5();
                this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
                this._evaluationRecord = undefined;
                this._poses.length = initialChoiceCount;
                this._poses.fill(null);
                this._fadeInDurations.length = initialChoiceCount;
                this._fadeInDurations.fill(0.0);
              }
              bind(context) {
                for (const pose of this._poses) {
                  pose === null || pose === void 0 ? void 0 : pose.bind(context);
                }
                const evaluationRecord = new EvaluationRecord(this._poses.length, this.getChosenIndex());
                this._evaluationRecord = evaluationRecord;
              }
              settle(context) {
                for (const pose of this._poses) {
                  pose === null || pose === void 0 ? void 0 : pose.settle(context);
                }
              }
              reenter() {
                for (const pose of this._poses) {
                  pose === null || pose === void 0 ? void 0 : pose.reenter();
                }
              }
              doUpdate(context) {
                const {
                  _poses: poses,
                  _evaluationRecord: evaluationRecord
                } = this;
                assertIsTrue(evaluationRecord);
                evaluationRecord.update(context.deltaTime, this.getChosenIndex(), this._fadeInDurations);
                if (evaluationRecord.allWeightsAreZero()) {
                  return;
                }
                const nPoses = poses.length;
                const {
                  items
                } = evaluationRecord;
                assertIsTrue(items.length === nPoses);
                for (let iPose = 0; iPose < nPoses; ++iPose) {
                  const weight = items[iPose].weight;
                  if (isIgnorableWeight(weight)) {
                    continue;
                  }
                  const pose = poses[iPose];
                  const itemUpdateContext = this._updateContextGenerator.generate(context.deltaTime, context.indicativeWeight * weight);
                  pose === null || pose === void 0 ? void 0 : pose.update(itemUpdateContext);
                }
              }
              doEvaluate(context) {
                const {
                  _poses: poses,
                  _evaluationRecord: evaluationRecord
                } = this;
                assertIsTrue(evaluationRecord);
                const spaceRequirement = PoseTransformSpaceRequirement.LOCAL;
                const nPoses = poses.length;
                const {
                  items
                } = evaluationRecord;
                assertIsTrue(items.length === poses.length);
                let finalPose = null;
                if (!evaluationRecord.allWeightsAreZero()) {
                  let sumWeight = 0.0;
                  for (let iInputPose = 0; iInputPose < nPoses; ++iInputPose) {
                    var _poses$iInputPose;
                    const inputPoseWeight = evaluationRecord.items[iInputPose].weight;
                    if (isIgnorableWeight(inputPoseWeight)) {
                      continue;
                    }
                    const inputPose = (_poses$iInputPose = poses[iInputPose]) === null || _poses$iInputPose === void 0 ? void 0 : _poses$iInputPose.evaluate(context, PoseTransformSpaceRequirement.LOCAL);
                    if (!inputPose) {
                      continue;
                    }
                    sumWeight += inputPoseWeight;
                    if (!finalPose) {
                      finalPose = inputPose;
                    } else {
                      if (sumWeight) {
                        const t = inputPoseWeight / sumWeight;
                        blendPoseInto(finalPose, inputPose, t);
                      }
                      context.popPose();
                    }
                  }
                }
                if (finalPose) {
                  return finalPose;
                }
                return PoseNodeChoosePoseBase.evaluateDefaultPose(context, spaceRequirement);
              }
              getChosenIndex() {
                return 0;
              }
            }, (_initializer$7 = applyDecoratedInitializer(_class2$a.prototype, "_poses", [serializable$d], function () {
              return [];
            }), _initializer2$5 = applyDecoratedInitializer(_class2$a.prototype, "_fadeInDurations", [serializable$d], function () {
              return [];
            })), _class2$a)) || _class$a) || _class$a);
            class EvaluationRecord {
              constructor(itemCount, initialChosenIndex) {
                this._items = void 0;
                this._chosenPoseIndex = -1;
                this._elapsedTransitionTime = 0.0;
                this._blendingDuration = 0.0;
                const items = Array.from({
                  length: itemCount
                }, () => new ItemEvaluationRecord());
                if (initialChosenIndex >= 0 && initialChosenIndex < itemCount) {
                  items[initialChosenIndex].selfSourceWeight = 1.0;
                  items[initialChosenIndex].selfTargetWeight = 1.0;
                  items[initialChosenIndex].weight = 1.0;
                }
                this._items = items;
              }
              get items() {
                return this._items;
              }
              allWeightsAreZero() {
                return this._chosenPoseIndex < 0;
              }
              update(deltaTime, newChoseIndex, fadeInDurations) {
                assertIsTrue(deltaTime >= 0.0);
                this._checkAlternation(newChoseIndex, fadeInDurations);
                if (this._chosenPoseIndex < 0) {
                  return;
                }
                const {
                  _elapsedTransitionTime: elapsedTransitionTime,
                  _blendingDuration: blendingDuration,
                  _items: items
                } = this;
                if (elapsedTransitionTime >= blendingDuration) {
                  return;
                }
                const nPoses = items.length;
                let sumWeight = 0.0;
                let newUniformTransformRatio = 0.0;
                const remain = blendingDuration - elapsedTransitionTime;
                if (deltaTime > remain) {
                  this._elapsedTransitionTime = blendingDuration;
                  newUniformTransformRatio = 1.0;
                } else {
                  this._elapsedTransitionTime += deltaTime;
                  newUniformTransformRatio = this._elapsedTransitionTime / blendingDuration;
                }
                assertIsTrue(newUniformTransformRatio >= 0.0 && newUniformTransformRatio <= 1.0);
                for (let iPose = 0; iPose < nPoses; ++iPose) {
                  const item = items[iPose];
                  const selfWeight = lerp(item.selfSourceWeight, item.selfTargetWeight, newUniformTransformRatio);
                  sumWeight += selfWeight;
                  item.weight = selfWeight;
                }
                if (!isIgnorableWeight(sumWeight)) {
                  for (let iPose = 0; iPose < nPoses; ++iPose) {
                    const item = items[iPose];
                    item.weight /= sumWeight;
                  }
                } else {
                  assertIsTrue(items.every(item => item.weight === 0.0));
                }
              }
              _checkAlternation(newChoseIndex, fadeInDurations) {
                const {
                  _items: items,
                  _chosenPoseIndex: oldChoseIndex
                } = this;
                const nPoses = items.length;
                if (!nPoses) {
                  return;
                }
                if (newChoseIndex === oldChoseIndex) {
                  return;
                }
                if (newChoseIndex < 0 || newChoseIndex >= nPoses) {
                  return;
                }
                const newFadeInDuration = Math.max(fadeInDurations[newChoseIndex], 0.0);
                if (newFadeInDuration < ZERO_ALTERING_DURATION_THRESHOLD) {
                  for (let iPose = 0; iPose < nPoses; ++iPose) {
                    const item = items[iPose];
                    if (iPose === newChoseIndex) {
                      item.selfSourceWeight = 1.0;
                      item.selfTargetWeight = 1.0;
                      item.weight = 1.0;
                    } else {
                      item.selfSourceWeight = 0.0;
                      item.selfTargetWeight = 0.0;
                      item.weight = 0.0;
                    }
                  }
                } else {
                  const oldUniformTransitionRatio = this._blendingDuration < ZERO_ALTERING_DURATION_THRESHOLD ? 1.0 : this._elapsedTransitionTime / this._blendingDuration;
                  for (let iPose = 0; iPose < nPoses; ++iPose) {
                    const item = items[iPose];
                    item.selfSourceWeight = lerp(item.selfSourceWeight, item.selfTargetWeight, oldUniformTransitionRatio);
                    if (iPose === newChoseIndex) {
                      item.selfTargetWeight = 1.0;
                    } else {
                      item.selfTargetWeight = 0.0;
                    }
                  }
                }
                this._chosenPoseIndex = newChoseIndex;
                this._elapsedTransitionTime = 0.0;
                this._blendingDuration = newFadeInDuration;
              }
            }
            class ItemEvaluationRecord {
              constructor() {
                this.selfSourceWeight = 0.0;
                this.selfTargetWeight = 0.0;
                this.weight = 0.0;
              }
            }

            var _dec$9, _dec2$9, _dec3$8, _dec4$6, _dec5$4, _dec6$4, _dec7$3, _dec8$2, _class$9, _class2$9, _descriptor$4;
            (_dec$9 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeChoosePoseByBoolean`), _dec2$9 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_CHOOSE), _dec3$8 = poseGraphNodeAppearance({
              themeColor: '#D07979'
            }), _dec4$6 = input({
              type: PoseGraphType.POSE
            }), _dec5$4 = input({
              type: PoseGraphType.POSE
            }), _dec6$4 = input({
              type: PoseGraphType.FLOAT
            }), _dec7$3 = input({
              type: PoseGraphType.FLOAT
            }), _dec8$2 = input({
              type: PoseGraphType.BOOLEAN
            }), _dec$9(_class$9 = _dec2$9(_class$9 = _dec3$8(_class$9 = (_class2$9 = class PoseNodeChoosePoseByBoolean extends PoseNodeChoosePoseBase {
              constructor() {
                super(2);
                _initializerDefineProperty(this, "choice", _descriptor$4, this);
              }
              get truePose() {
                return this._poses[0];
              }
              set truePose(value) {
                this._poses[0] = value;
              }
              get falsePose() {
                return this._poses[1];
              }
              set falsePose(value) {
                this._poses[1] = value;
              }
              get trueFadeInDuration() {
                return this._fadeInDurations[0];
              }
              set trueFadeInDuration(value) {
                this._fadeInDurations[0] = value;
              }
              get falseFadeInDuration() {
                return this._fadeInDurations[1];
              }
              set falseFadeInDuration(value) {
                this._fadeInDurations[1] = value;
              }
              getChosenIndex() {
                return this.choice ? 0 : 1;
              }
            }, (_applyDecoratedDescriptor(_class2$9.prototype, "truePose", [_dec4$6], Object.getOwnPropertyDescriptor(_class2$9.prototype, "truePose"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "falsePose", [_dec5$4], Object.getOwnPropertyDescriptor(_class2$9.prototype, "falsePose"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "trueFadeInDuration", [_dec6$4], Object.getOwnPropertyDescriptor(_class2$9.prototype, "trueFadeInDuration"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "falseFadeInDuration", [_dec7$3], Object.getOwnPropertyDescriptor(_class2$9.prototype, "falseFadeInDuration"), _class2$9.prototype), _descriptor$4 = _applyDecoratedDescriptor(_class2$9.prototype, "choice", [serializable$d, _dec8$2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return true;
              }
            })), _class2$9)) || _class$9) || _class$9) || _class$9);

            var _dec$8, _dec2$8, _dec3$7, _dec4$5, _dec5$3, _dec6$3, _class$8, _class2$8, _descriptor$3;
            (_dec$8 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeChoosePoseByIndex`), _dec2$8 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_CHOOSE), _dec3$7 = poseGraphNodeAppearance({
              themeColor: '#D07979'
            }), _dec4$5 = input({
              type: PoseGraphType.POSE,
              arraySyncGroup: 'choose-item'
            }), _dec5$3 = input({
              type: PoseGraphType.FLOAT,
              arraySyncGroup: 'choose-item',
              arraySyncGroupFollower: true
            }), _dec6$3 = input({
              type: PoseGraphType.INTEGER
            }), _dec$8(_class$8 = _dec2$8(_class$8 = _dec3$7(_class$8 = (_class2$8 = class PoseNodeChoosePoseByIndex extends PoseNodeChoosePoseBase {
              constructor(...args) {
                super(...args);
                _initializerDefineProperty(this, "choice", _descriptor$3, this);
              }
              get poses() {
                return this._poses;
              }
              set poses(value) {
                this._poses = value;
              }
              get fadeInDurations() {
                return this._fadeInDurations;
              }
              set fadeInDurations(value) {
                this._fadeInDurations = value;
              }
              getChosenIndex() {
                return this.choice;
              }
            }, (_applyDecoratedDescriptor(_class2$8.prototype, "poses", [_dec4$5], Object.getOwnPropertyDescriptor(_class2$8.prototype, "poses"), _class2$8.prototype), _applyDecoratedDescriptor(_class2$8.prototype, "fadeInDurations", [_dec5$3], Object.getOwnPropertyDescriptor(_class2$8.prototype, "fadeInDurations"), _class2$8.prototype), _descriptor$3 = _applyDecoratedDescriptor(_class2$8.prototype, "choice", [serializable$d, _dec6$3], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return 0;
              }
            })), _class2$8)) || _class$8) || _class$8) || _class$8);

            var _dec$7, _dec2$7, _class$7, _class2$7, _initializer$6, _initializer2$4, _initializer3$3;
            var IntensityType;
            (function (IntensityType) {
              IntensityType[IntensityType["VALUE"] = 0] = "VALUE";
              IntensityType[IntensityType["AUXILIARY_CURVE"] = 1] = "AUXILIARY_CURVE";
            })(IntensityType || (IntensityType = {}));
            ccenum(IntensityType);
            let IntensitySpecification = (_dec$7 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}IntensitySpecification`), _dec2$7 = type$2(IntensityType), _dec$7(_class$7 = (_class2$7 = class IntensitySpecification {
              constructor() {
                this.type = _initializer$6 && _initializer$6();
                this.value = _initializer2$4 && _initializer2$4();
                this.auxiliaryCurveName = _initializer3$3 && _initializer3$3();
                this._handle = undefined;
              }
              bind(context) {
                if (this.type === IntensityType.AUXILIARY_CURVE && this.auxiliaryCurveName) {
                  const handle = context.bindAuxiliaryCurve(this.auxiliaryCurveName);
                  this._handle = handle;
                }
              }
              evaluate(pose) {
                if (this.type === IntensityType.AUXILIARY_CURVE && this._handle) {
                  const value = pose.auxiliaryCurves[this._handle.index];
                  return value;
                }
                return this.value;
              }
            }, (_initializer$6 = applyDecoratedInitializer(_class2$7.prototype, "type", [_dec2$7, serializable$d], function () {
              return IntensityType.VALUE;
            }), _initializer2$4 = applyDecoratedInitializer(_class2$7.prototype, "value", [serializable$d], function () {
              return 1.0;
            }), _initializer3$3 = applyDecoratedInitializer(_class2$7.prototype, "auxiliaryCurveName", [serializable$d], function () {
              return '';
            })), _class2$7)) || _class$7);

            var _dec$6, _dec2$6, _dec3$6, _class4$2, _class5$2, _descriptor$2;
            class TransformModification {
              constructor() {
                this.transformIndex = -1;
                this.transform = new Transform();
              }
            }
            class TransformModificationQueue {
              constructor() {
                this._pool = new Pool(() => new TransformModification(), 3);
                this._array = new CachedArray(3);
                this._debugLastTransformIndex = -1;
              }
              get length() {
                return this._array.length;
              }
              get array() {
                return this._array.array;
              }
              push(transformIndex, transform) {
                {
                  assertIsTrue(transformIndex > this._debugLastTransformIndex, `Unexpected transform modification order`);
                  this._debugLastTransformIndex = transformIndex;
                }
                const mod = this._pool.alloc();
                mod.transformIndex = transformIndex;
                Transform.copy(mod.transform, transform);
                this._array.push(mod);
              }
              clear() {
                const length = this._array.length;
                for (let iMod = 0; iMod < length; ++iMod) {
                  const mod = this._array.get(iMod);
                  assertIsTrue(mod);
                  this._pool.free(mod);
                }
                this._array.clear();
                {
                  this._debugLastTransformIndex = -1;
                }
              }
            }
            class PoseTransformSpaceFlagTable {
              constructor(nTransforms) {
                this._transformFlags = [];
                this._transformFlags = new Array(nTransforms);
              }
              clear() {
                this._transformFlags.fill(false);
              }
              test(transformIndex) {
                return this._transformFlags[transformIndex];
              }
              set(transformIndex) {
                this._transformFlags[transformIndex] = true;
              }
              unset(transformIndex) {
                this._transformFlags[transformIndex] = false;
              }
            }
            const cacheTransform_spaceConversion = new Transform();
            const cacheParentTransform_spaceConversion = new Transform();
            function applyTransformModificationQueue(context, pose, queue, spaceFlagTable) {
              const nMods = queue.length;
              if (nMods === 0) {
                return;
              }
              {
                let debugLastModTransformIndex = -1;
                for (let iMod = 0; iMod < nMods; ++iMod) {
                  const {
                    transformIndex
                  } = queue.array[iMod];
                  assertIsTrue(transformIndex > debugLastModTransformIndex);
                  debugLastModTransformIndex = transformIndex;
                }
              }
              if (pose._poseTransformSpace === PoseTransformSpace.LOCAL) {
                for (let iMod = 0; iMod < nMods; ++iMod) {
                  const {
                    transformIndex,
                    transform
                  } = queue.array[iMod];
                  pose.transforms.setTransform(transformIndex, transform);
                }
                return;
              }
              assertIsTrue(pose._poseTransformSpace === PoseTransformSpace.COMPONENT);
              spaceFlagTable.clear();
              const firstTransformToConvert = queue.array[0].transformIndex;
              let lastTransformToConvert = firstTransformToConvert;
              for (let iMod = 0; iMod < nMods; ++iMod) {
                const {
                  transformIndex
                } = queue.array[iMod];
                spaceFlagTable.set(transformIndex);
                lastTransformToConvert = transformIndex;
              }
              for (let transformIndex = firstTransformToConvert; transformIndex < pose.transforms.length; ++transformIndex) {
                const parentTransformIndex = context.parentTable[transformIndex];
                if (parentTransformIndex < 0) {
                  continue;
                }
                if (spaceFlagTable.test(parentTransformIndex)) {
                  spaceFlagTable.set(transformIndex);
                  lastTransformToConvert = transformIndex;
                }
              }
              for (let transformIndex = lastTransformToConvert; transformIndex >= firstTransformToConvert; --transformIndex) {
                if (spaceFlagTable.test(transformIndex)) {
                  const parentTransformIndex = context.parentTable[transformIndex];
                  if (parentTransformIndex >= 0) {
                    const transform = pose.transforms.getTransform(transformIndex, cacheTransform_spaceConversion);
                    const parentTransform = pose.transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion);
                    Transform.calculateRelative(transform, transform, parentTransform);
                    pose.transforms.setTransform(transformIndex, transform);
                  }
                }
              }
              for (let iMod = 0; iMod < nMods; ++iMod) {
                const {
                  transformIndex,
                  transform
                } = queue.array[iMod];
                pose.transforms.setTransform(transformIndex, transform);
                spaceFlagTable.unset(transformIndex);
              }
              for (let transformIndex = firstTransformToConvert; transformIndex <= lastTransformToConvert; ++transformIndex) {
                if (spaceFlagTable.test(transformIndex)) {
                  const parentTransformIndex = context.parentTable[transformIndex];
                  assertIsTrue(parentTransformIndex >= 0);
                  const transform = pose.transforms.getTransform(transformIndex, cacheTransform_spaceConversion);
                  const parentTransform = pose.transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion);
                  Transform.multiply(transform, parentTransform, transform);
                  pose.transforms.setTransform(transformIndex, transform);
                }
              }
            }
            let PoseNodeModifyPoseBase = (_dec$6 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeModifyPoseBase`), _dec2$6 = poseGraphNodeHide(), _dec3$6 = input({
              type: PoseGraphType.POSE
            }), _dec$6(_class4$2 = _dec2$6(_class4$2 = (_class5$2 = class PoseNodeModifyPoseBase extends PoseNode {
              constructor(...args) {
                super(...args);
                _initializerDefineProperty(this, "pose", _descriptor$2, this);
                this._modificationQueue = new TransformModificationQueue();
                this._spaceFlagTable = new PoseTransformSpaceFlagTable(0);
              }
              settle(context) {
                var _this$pose;
                (_this$pose = this.pose) === null || _this$pose === void 0 ? void 0 : _this$pose.settle(context);
                this._spaceFlagTable = new PoseTransformSpaceFlagTable(context.transformCount);
              }
              reenter() {
                var _this$pose2;
                (_this$pose2 = this.pose) === null || _this$pose2 === void 0 ? void 0 : _this$pose2.reenter();
              }
              bind(context) {
                var _this$pose3;
                (_this$pose3 = this.pose) === null || _this$pose3 === void 0 ? void 0 : _this$pose3.bind(context);
              }
              doUpdate(context) {
                var _this$pose4;
                (_this$pose4 = this.pose) === null || _this$pose4 === void 0 ? void 0 : _this$pose4.update(context);
              }
              doEvaluate(context) {
                var _this$pose$evaluate, _this$pose5;
                const poseTransformSpaceRequirement = this.getPoseTransformSpaceRequirement();
                const inputPose = (_this$pose$evaluate = (_this$pose5 = this.pose) === null || _this$pose5 === void 0 ? void 0 : _this$pose5.evaluate(context, poseTransformSpaceRequirement)) !== null && _this$pose$evaluate !== void 0 ? _this$pose$evaluate : PoseNode.evaluateDefaultPose(context, poseTransformSpaceRequirement);
                const {
                  _modificationQueue: modificationQueue
                } = this;
                assertIsTrue(modificationQueue.length === 0);
                this.modifyPose(context, inputPose, modificationQueue);
                applyTransformModificationQueue(context, inputPose, modificationQueue, this._spaceFlagTable);
                modificationQueue.clear();
                return inputPose;
              }
            }, (_descriptor$2 = _applyDecoratedDescriptor(_class5$2.prototype, "pose", [serializable$d, _dec3$6], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return null;
              }
            })), _class5$2)) || _class4$2) || _class4$2);

            var _dec$5, _dec2$5, _dec3$5, _dec4$4, _dec5$2, _dec6$2, _dec7$2, _dec8$1, _dec9$1, _class$6, _class2$6, _initializer$5, _initializer2$3, _descriptor$1, _initializer3$2, _descriptor2, _initializer4$1, _initializer5$1;
            let TransformOperation;
            (function (TransformOperation) {
              TransformOperation[TransformOperation["LEAVE_UNCHANGED"] = 0] = "LEAVE_UNCHANGED";
              TransformOperation[TransformOperation["REPLACE"] = 1] = "REPLACE";
              TransformOperation[TransformOperation["ADD"] = 2] = "ADD";
            })(TransformOperation || (TransformOperation = {}));
            ccenum(TransformOperation);
            const APPLY_INTENSITY_EPSILON = 1e-5;
            const cacheTransform$1 = new Transform();
            (_dec$5 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeApplyTransform`), _dec2$5 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3$5 = poseGraphNodeAppearance({
              themeColor: '#72A869'
            }), _dec4$4 = type$2(TransformOperation), _dec5$2 = input({
              type: PoseGraphType.VEC3
            }), _dec6$2 = type$2(TransformOperation), _dec7$2 = input({
              type: PoseGraphType.QUAT
            }), _dec8$1 = type$2(TransformSpace), _dec9$1 = input({
              type: PoseGraphType.FLOAT
            }), _dec$5(_class$6 = _dec2$5(_class$6 = _dec3$5(_class$6 = (_class2$6 = class PoseNodeApplyTransform extends PoseNodeModifyPoseBase {
              constructor(...args) {
                super(...args);
                this.node = _initializer$5 && _initializer$5();
                this.positionOperation = _initializer2$3 && _initializer2$3();
                _initializerDefineProperty(this, "position", _descriptor$1, this);
                this.rotationOperation = _initializer3$2 && _initializer3$2();
                _initializerDefineProperty(this, "rotation", _descriptor2, this);
                this.intensity = _initializer4$1 && _initializer4$1();
                this.transformSpace = _initializer5$1 && _initializer5$1();
                this._transformHandle = null;
              }
              get intensityValue() {
                return this.intensity.value;
              }
              set intensityValue(value) {
                this.intensity.value = value;
              }
              bind(context) {
                const {
                  node: nodeName
                } = this;
                super.bind(context);
                if (!nodeName) {
                  return;
                }
                const transformHandle = context.bindTransformByName(nodeName);
                if (!transformHandle) {
                  error(`Failed to bind transform ${nodeName}`);
                  return;
                }
                this._transformHandle = transformHandle;
                this.intensity.bind(context);
              }
              getPoseTransformSpaceRequirement() {
                return PoseTransformSpaceRequirement.NO;
              }
              modifyPose(context, inputPose, modificationQueue) {
                const {
                  _transformHandle: transformHandle
                } = this;
                if (!transformHandle) {
                  return inputPose;
                }
                const intensity = this.intensity.evaluate(inputPose);
                if (intensity < APPLY_INTENSITY_EPSILON) {
                  return inputPose;
                }
                const fullIntensity = approx(intensity, 1.0, APPLY_INTENSITY_EPSILON);
                const {
                  index: transformIndex
                } = transformHandle;
                const nodeTransform = inputPose.transforms.getTransform(transformIndex, cacheTransform$1);
                const {
                  rotationOperation
                } = this;
                if (rotationOperation !== TransformOperation.LEAVE_UNCHANGED) {
                  const {
                    rotation,
                    transformSpace: rotationSpace
                  } = this;
                  context._convertPoseSpaceTransformToTargetSpace(nodeTransform, rotationSpace, inputPose, transformIndex);
                  switch (rotationOperation) {
                    default:
                    case TransformOperation.REPLACE:
                      replaceRotation(nodeTransform, rotation, intensity, fullIntensity);
                      break;
                    case TransformOperation.ADD:
                      addRotation(nodeTransform, rotation, intensity, fullIntensity);
                      break;
                  }
                  context._convertTransformToPoseTransformSpace(nodeTransform, rotationSpace, inputPose, transformIndex);
                }
                const {
                  positionOperation
                } = this;
                if (positionOperation !== TransformOperation.LEAVE_UNCHANGED) {
                  const {
                    position,
                    transformSpace: positionSpace
                  } = this;
                  context._convertPoseSpaceTransformToTargetSpace(nodeTransform, positionSpace, inputPose, transformIndex);
                  switch (positionOperation) {
                    default:
                    case TransformOperation.REPLACE:
                      replacePosition(nodeTransform, position, intensity, fullIntensity);
                      break;
                    case TransformOperation.ADD:
                      addPosition(nodeTransform, position, intensity, fullIntensity);
                      break;
                  }
                  context._convertTransformToPoseTransformSpace(nodeTransform, positionSpace, inputPose, transformIndex);
                }
                modificationQueue.push(transformIndex, nodeTransform);
                return inputPose;
              }
            }, (_initializer$5 = applyDecoratedInitializer(_class2$6.prototype, "node", [serializable$d], function () {
              return '';
            }), _initializer2$3 = applyDecoratedInitializer(_class2$6.prototype, "positionOperation", [serializable$d, _dec4$4], function () {
              return TransformOperation.LEAVE_UNCHANGED;
            }), _descriptor$1 = _applyDecoratedDescriptor(_class2$6.prototype, "position", [serializable$d, _dec5$2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return new Vec3();
              }
            }), _initializer3$2 = applyDecoratedInitializer(_class2$6.prototype, "rotationOperation", [serializable$d, _dec6$2], function () {
              return TransformOperation.LEAVE_UNCHANGED;
            }), _descriptor2 = _applyDecoratedDescriptor(_class2$6.prototype, "rotation", [serializable$d, _dec7$2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return new Quat();
              }
            }), _initializer4$1 = applyDecoratedInitializer(_class2$6.prototype, "intensity", [serializable$d], function () {
              return new IntensitySpecification();
            }), _initializer5$1 = applyDecoratedInitializer(_class2$6.prototype, "transformSpace", [serializable$d, _dec8$1], function () {
              return TransformSpace.WORLD;
            }), _applyDecoratedDescriptor(_class2$6.prototype, "intensityValue", [_dec9$1], Object.getOwnPropertyDescriptor(_class2$6.prototype, "intensityValue"), _class2$6.prototype)), _class2$6)) || _class$6) || _class$6) || _class$6);
            const {
              replace: replacePosition,
              add: addPosition
            } = (() => {
              const cacheInput = new Vec3();
              const cacheResult = new Vec3();
              return {
                replace,
                add
              };
              function replace(transform, value, intensity, fullIntensity) {
                if (fullIntensity) {
                  transform.position = value;
                } else {
                  const inputPosition = Vec3.copy(cacheInput, transform.position);
                  Vec3.lerp(inputPosition, inputPosition, value, intensity);
                  transform.position = inputPosition;
                }
              }
              function add(transform, value, intensity, fullIntensity) {
                const result = cacheResult;
                if (fullIntensity) {
                  Vec3.copy(result, value);
                } else {
                  Vec3.slerp(result, Vec3.ZERO, value, intensity);
                }
                Vec3.add(result, transform.position, result);
                transform.position = result;
              }
            })();
            const {
              replace: replaceRotation,
              add: addRotation
            } = (() => {
              const cacheInput = new Quat();
              const cacheResult = new Quat();
              return {
                replace,
                add
              };
              function replace(transform, value, intensity, fullIntensity) {
                if (fullIntensity) {
                  transform.rotation = value;
                } else {
                  const inputRotation = Quat.copy(cacheInput, transform.rotation);
                  Quat.slerp(inputRotation, inputRotation, value, intensity);
                  transform.rotation = inputRotation;
                }
              }
              function add(transform, value, intensity, fullIntensity) {
                const inputRotation = Quat.copy(cacheInput, transform.rotation);
                const resultRotation = cacheResult;
                if (fullIntensity) {
                  Quat.copy(resultRotation, value);
                } else {
                  Quat.slerp(resultRotation, Quat.IDENTITY, value, intensity);
                }
                Quat.multiply(resultRotation, resultRotation, inputRotation);
                transform.rotation = resultRotation;
              }
            })();

            var _dec$4, _dec2$4, _dec3$4, _dec4$3, _class$5, _class2$5, _initializer$4, _initializer2$2, _initializer3$1;
            const cacheTransform = new Transform();
            let CopySpace;
            (function (CopySpace) {
              CopySpace[CopySpace["LOCAL"] = 0] = "LOCAL";
              CopySpace[CopySpace["COMPONENT"] = 1] = "COMPONENT";
            })(CopySpace || (CopySpace = {}));
            ccenum(CopySpace);
            (_dec$4 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeCopyTransform`), _dec2$4 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3$4 = poseGraphNodeAppearance({
              themeColor: '#72A869'
            }), _dec4$3 = type$2(CopySpace), _dec$4(_class$5 = _dec2$4(_class$5 = _dec3$4(_class$5 = (_class2$5 = class PoseNodeCopyTransform extends PoseNodeModifyPoseBase {
              constructor(...args) {
                super(...args);
                this.sourceNodeName = _initializer$4 && _initializer$4();
                this.targetNodeName = _initializer2$2 && _initializer2$2();
                this.space = _initializer3$1 && _initializer3$1();
                this._workspace = undefined;
              }
              bind(context) {
                super.bind(context);
                const sourceTransformHandle = context.bindTransformByName(this.sourceNodeName);
                const targetTransformHandle = context.bindTransformByName(this.targetNodeName);
                if (!sourceTransformHandle || !targetTransformHandle) {
                  sourceTransformHandle === null || sourceTransformHandle === void 0 ? void 0 : sourceTransformHandle.destroy();
                  targetTransformHandle === null || targetTransformHandle === void 0 ? void 0 : targetTransformHandle.destroy();
                  return;
                }
                this._workspace = new Workspace$1(sourceTransformHandle, targetTransformHandle);
              }
              modifyPose(context, inputPose) {
                const {
                  _workspace: workspace
                } = this;
                if (!workspace) {
                  return;
                }
                const {
                  hSource: {
                    index: sourceTransformIndex
                  },
                  hTarget: {
                    index: targetTransformIndex
                  }
                } = workspace;
                const transform = inputPose.transforms.getTransform(sourceTransformIndex, cacheTransform);
                inputPose.transforms.setTransform(targetTransformIndex, transform);
              }
              getPoseTransformSpaceRequirement() {
                return this.space === CopySpace.COMPONENT ? PoseTransformSpaceRequirement.COMPONENT : PoseTransformSpaceRequirement.LOCAL;
              }
            }, (_initializer$4 = applyDecoratedInitializer(_class2$5.prototype, "sourceNodeName", [serializable$d], function () {
              return '';
            }), _initializer2$2 = applyDecoratedInitializer(_class2$5.prototype, "targetNodeName", [serializable$d], function () {
              return '';
            }), _initializer3$1 = applyDecoratedInitializer(_class2$5.prototype, "space", [serializable$d, _dec4$3], function () {
              return CopySpace.COMPONENT;
            })), _class2$5)) || _class$5) || _class$5) || _class$5);
            class Workspace$1 {
              constructor(hSource, hTarget) {
                this.hSource = hSource;
                this.hTarget = hTarget;
              }
            }

            var _dec$3, _dec2$3, _dec3$3, _dec4$2, _class$4, _class2$4, _initializer$3, _descriptor, _initializer2$1;
            var SetAuxiliaryCurveFlag;
            (function (SetAuxiliaryCurveFlag) {
              SetAuxiliaryCurveFlag[SetAuxiliaryCurveFlag["LEAVE_UNCHANGED"] = 0] = "LEAVE_UNCHANGED";
              SetAuxiliaryCurveFlag[SetAuxiliaryCurveFlag["REPLACE"] = 1] = "REPLACE";
              SetAuxiliaryCurveFlag[SetAuxiliaryCurveFlag["ADD"] = 2] = "ADD";
            })(SetAuxiliaryCurveFlag || (SetAuxiliaryCurveFlag = {}));
            ccenum(SetAuxiliaryCurveFlag);
            (_dec$3 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeSetAuxiliaryCurve`), _dec2$3 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3$3 = input({
              type: PoseGraphType.FLOAT
            }), _dec4$2 = type$2(SetAuxiliaryCurveFlag), _dec$3(_class$4 = _dec2$3(_class$4 = (_class2$4 = class PoseNodeSetAuxiliaryCurve extends PoseNodeModifyPoseBase {
              constructor(...args) {
                super(...args);
                this.curveName = _initializer$3 && _initializer$3();
                _initializerDefineProperty(this, "curveValue", _descriptor, this);
                this.flag = _initializer2$1 && _initializer2$1();
                this._handle = undefined;
              }
              bind(context) {
                super.bind(context);
                if (this.curveName) {
                  this._handle = context.bindAuxiliaryCurve(this.curveName);
                }
              }
              getPoseTransformSpaceRequirement() {
                return PoseTransformSpaceRequirement.NO;
              }
              modifyPose(context, inputPose) {
                const {
                  _handle: handle
                } = this;
                if (!handle) {
                  return;
                }
                switch (this.flag) {
                  case SetAuxiliaryCurveFlag.REPLACE:
                    inputPose.auxiliaryCurves[handle.index] = this.curveValue;
                    break;
                  case SetAuxiliaryCurveFlag.ADD:
                    inputPose.auxiliaryCurves[handle.index] += this.curveValue;
                    break;
                  case SetAuxiliaryCurveFlag.LEAVE_UNCHANGED:
                }
              }
            }, (_initializer$3 = applyDecoratedInitializer(_class2$4.prototype, "curveName", [serializable$d], function () {
              return '';
            }), _descriptor = _applyDecoratedDescriptor(_class2$4.prototype, "curveValue", [serializable$d, _dec3$3], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function () {
                return 0.0;
              }
            }), _initializer2$1 = applyDecoratedInitializer(_class2$4.prototype, "flag", [serializable$d, _dec4$2], function () {
              return SetAuxiliaryCurveFlag.REPLACE;
            })), _class2$4)) || _class$4) || _class$4);

            class TwoBoneIKDebugger {
              constructor() {
                this._node = void 0;
                this._meshRenderer = void 0;
                const node = new Node();
                legacyCC.director.getScene().addChild(node);
                const meshRenderer = node.addComponent(MeshRenderer);
                meshRenderer.material = (() => {
                  const material = new Material();
                  material.reset({
                    effectName: 'builtin-unlit',
                    states: {
                      primitive: PrimitiveMode.LINE_LIST
                    },
                    defines: {
                      USE_VERTEX_COLOR: true
                    }
                  });
                  return material;
                })();
                this._node = node;
                this._meshRenderer = meshRenderer;
              }
              draw(a, b, c) {
                const color1 = Color.RED;
                const color2 = Color.BLUE;
                const positions = [a.x, a.y, a.z, b.x, b.y, b.z, b.x, b.y, b.z, c.x, c.y, c.z];
                const colors = [color1.x, color1.y, color1.z, color1.w, color1.x, color1.y, color1.z, color1.w, color2.x, color2.y, color2.z, color2.w, color2.x, color2.y, color2.z, color2.w];
                const mesh = createMesh({
                  positions,
                  colors,
                  primitiveMode: PrimitiveMode.LINE_LIST
                });
                this._meshRenderer.mesh = mesh;
              }
            }
            const debuggerMap = new WeakMap();
            function debugTwoBoneIKDraw(key, a, b, c) {
              if (typeof key !== 'object' || !key) {
                return;
              }
              let ikDebugger = debuggerMap.get(key);
              if (!ikDebugger) {
                ikDebugger = new TwoBoneIKDebugger();
                debuggerMap.set(key, ikDebugger);
              }
              ikDebugger.draw(a, b, c);
            }

            class TwoBoneIKPositionSanityChecker {
              constructor() {
                this._a = new Vec3();
              }
              reset(a, b, c) {
                Vec3.copy(this._a, a);
                this._dAB = Vec3.distance(a, b);
                this._dBC = Vec3.distance(b, c);
              }
              check(_a, _b, _c) {
                const CHECK_EPSILON = 1e-3;
                const dAB = Vec3.distance(_a, _b);
                const dBC = Vec3.distance(_b, _c);
                if (!approx(Vec3.distance(_a, this._a), 0.0, CHECK_EPSILON)) {
                  debugger;
                  return false;
                }
                if (!approx(dAB, this._dAB, CHECK_EPSILON)) {
                  debugger;
                  return false;
                }
                if (!approx(dBC, this._dBC, CHECK_EPSILON)) {
                  debugger;
                  return false;
                }
                return true;
              }
            }
            const solveTwoBoneIK = (() => {
              const cacheQuat = new Quat();
              const cacheHint = new Vec3();
              const cacheBSolved = new Vec3();
              const cacheCSolved = new Vec3();
              const calculateRotationBetweenRays = (() => {
                const cacheVec3_1 = new Vec3();
                const cacheVec3_2 = new Vec3();
                return (out, sourceOrigin, sourceDestination, targetOrigin, targetDestination) => {
                  return Quat.rotationTo(out, Vec3.subtract(cacheVec3_1, sourceDestination, sourceOrigin).normalize(), Vec3.subtract(cacheVec3_2, targetDestination, targetOrigin).normalize());
                };
              })();
              return (root, middle, end, target, middlePositionHint, debugKey) => {
                const hint = Vec3.copy(cacheHint, middlePositionHint !== null && middlePositionHint !== void 0 ? middlePositionHint : middle.position);
                const pA = root.position;
                const pB = middle.position;
                const pC = end.position;
                end.rotation;
                {
                  if (typeof debugKey !== undefined) {
                    debugTwoBoneIKDraw(debugKey, pA, pB, pC);
                  }
                }
                const bSolved = cacheBSolved;
                const cSolved = cacheCSolved;
                solveTwoBoneIKPositions(pA, pB, pC, target, hint, bSolved, cSolved);
                const qA = calculateRotationBetweenRays(cacheQuat, pA, pB, pA, bSolved);
                Quat.multiply(qA, qA, root.rotation);
                root.rotation = qA;
                const qB = calculateRotationBetweenRays(cacheQuat, pB, pC, bSolved, cSolved);
                Quat.multiply(qB, qB, middle.rotation);
                middle.rotation = qB;
                middle.position = bSolved;
                end.position = cSolved;
              };
            })();
            const solveTwoBoneIKPositions = (() => {
              const cacheDirAT = new Vec3();
              const cacheDirAB = new Vec3();
              const cacheDirHeightLine = new Vec3();
              const cacheSanityChecker = new TwoBoneIKPositionSanityChecker() ;
              return (a, b, c, target, middleTarget, bSolved, cSolved) => {
                const sanityCheck = cacheSanityChecker ? (() => {
                  cacheSanityChecker === null || cacheSanityChecker === void 0 ? void 0 : cacheSanityChecker.reset(a, b, c);
                  return () => cacheSanityChecker.check(a, bSolved, cSolved);
                })() : undefined;
                const dAB = Vec3.distance(a, b);
                const dBC = Vec3.distance(b, c);
                const dAT = Vec3.distance(a, target);
                const dirAT = Vec3.subtract(cacheDirAT, target, a);
                dirAT.normalize();
                const chainLength = dAB + dBC;
                if (dAT >= chainLength) {
                  Vec3.scaleAndAdd(bSolved, a, dirAT, dAB);
                  Vec3.scaleAndAdd(cSolved, a, dirAT, chainLength);
                  sanityCheck === null || sanityCheck === void 0 ? void 0 : sanityCheck();
                  return;
                }
                Vec3.copy(cSolved, target);
                const cosḂAT = clamp((dAB * dAB + dAT * dAT - dBC * dBC) / (2 * dAB * dAT), -1.0, 1.0);
                const dirAB = Vec3.subtract(cacheDirAB, middleTarget, a);
                const dirHeightLine = Vec3.projectOnPlane(cacheDirHeightLine, dirAB, dirAT);
                dirHeightLine.normalize();
                const dAD = dAB * cosḂAT;
                const hSqr = dAB * dAB - dAD * dAD;
                if (hSqr < 0) {
                  debugger;
                }
                const h = Math.sqrt(hSqr);
                Vec3.scaleAndAdd(bSolved, a, dirAT, dAD);
                Vec3.scaleAndAdd(bSolved, bSolved, dirHeightLine, h);
                sanityCheck === null || sanityCheck === void 0 ? void 0 : sanityCheck();
              };
            })();

            const POSE_GRAPH_NODE_MENU_PREFIX_IK = `${POSE_GRAPH_NODE_MENU_PREFIX_POSE}/` + `i18n:ENGINE.animation_graph.pose_graph_node_sub_categories.pose_nodes_ik/`;

            var _dec$2, _dec2$2, _dec3$2, _class$3, _class2$3, _initializer$2, _initializer2, _initializer3, _initializer4, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _class4$1, _class5$1, _initializer5, _initializer6, _initializer7, _initializer8;
            const cacheRootTransform = new Transform();
            const cacheMiddleTransform = new Transform();
            const cacheEndEffectorTransform = new Transform();
            const cacheEndEffectorTargetPosition = new Vec3();
            const cachePoleTargetPosition = new Vec3();
            const cacheTransform_evaluateTarget = new Transform();
            var TargetSpecificationType;
            (function (TargetSpecificationType) {
              TargetSpecificationType[TargetSpecificationType["NONE"] = 0] = "NONE";
              TargetSpecificationType[TargetSpecificationType["VALUE"] = 1] = "VALUE";
              TargetSpecificationType[TargetSpecificationType["BONE"] = 2] = "BONE";
            })(TargetSpecificationType || (TargetSpecificationType = {}));
            ccenum(TargetSpecificationType);
            let TargetSpecification = (_dec$2 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeTwoBoneIKSolver.TargetSpecification`), _dec2$2 = type$2(TargetSpecificationType), _dec3$2 = type$2(TransformSpace), _dec$2(_class$3 = (_class2$3 = class TargetSpecification {
              constructor(type) {
                this.type = _initializer$2 && _initializer$2();
                this.targetPosition = _initializer2 && _initializer2();
                this.targetPositionSpace = _initializer3 && _initializer3();
                this.targetBone = _initializer4 && _initializer4();
                this._sourceBoneHandle = undefined;
                this._targetBoneHandle = undefined;
                if (typeof type !== 'undefined') {
                  this.type = type;
                }
              }
              bind(context, sourceBoneHandle) {
                this._sourceBoneHandle = sourceBoneHandle;
                if (this.type === TargetSpecificationType.BONE && this.targetBone) {
                  var _context$bindTransfor;
                  this._targetBoneHandle = (_context$bindTransfor = context.bindTransformByName(this.targetBone)) !== null && _context$bindTransfor !== void 0 ? _context$bindTransfor : undefined;
                }
              }
              evaluate(outTargetPosition, pose, context) {
                assertIsTrue(this._sourceBoneHandle);
                if (this._targetBoneHandle) {
                  pose.transforms.getPosition(this._targetBoneHandle.index, outTargetPosition);
                } else if (this.type === TargetSpecificationType.NONE) {
                  pose.transforms.getPosition(this._sourceBoneHandle.index, outTargetPosition);
                } else {
                  const targetTransform = Transform.setIdentity(cacheTransform_evaluateTarget);
                  targetTransform.position = this.targetPosition;
                  context._convertTransformToPoseTransformSpace(targetTransform, this.targetPositionSpace, pose, this._sourceBoneHandle.index);
                  Vec3.copy(outTargetPosition, targetTransform.position);
                }
                return outTargetPosition;
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class2$3.prototype, "type", [serializable$d, _dec2$2], function () {
              return TargetSpecificationType.VALUE;
            }), _initializer2 = applyDecoratedInitializer(_class2$3.prototype, "targetPosition", [serializable$d], function () {
              return new Vec3();
            }), _initializer3 = applyDecoratedInitializer(_class2$3.prototype, "targetPositionSpace", [serializable$d, _dec3$2], function () {
              return TransformSpace.WORLD;
            }), _initializer4 = applyDecoratedInitializer(_class2$3.prototype, "targetBone", [serializable$d], function () {
              return '';
            })), _class2$3)) || _class$3);
            (_dec4$1 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PoseNodeTwoBoneIKSolver`), _dec5$1 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_IK), _dec6$1 = input({
              type: PoseGraphType.VEC3
            }), _dec7$1 = input({
              type: PoseGraphType.VEC3
            }), _dec4$1(_class4$1 = _dec5$1(_class4$1 = (_class5$1 = class PoseNodeTwoBoneIKSolver extends PoseNodeModifyPoseBase {
              constructor(...args) {
                super(...args);
                this.debug = _initializer5 && _initializer5();
                this.endEffectorBoneName = _initializer6 && _initializer6();
                this.endEffectorTarget = _initializer7 && _initializer7();
                this.poleTarget = _initializer8 && _initializer8();
                this._workspace = undefined;
              }
              get endEffectorTargetPosition() {
                return this.endEffectorTarget.targetPosition;
              }
              set endEffectorTargetPosition(value) {
                Vec3.copy(this.endEffectorTarget.targetPosition, value);
              }
              get poleTargetPosition() {
                return this.poleTarget.targetPosition;
              }
              set poleTargetPosition(value) {
                Vec3.copy(this.poleTarget.targetPosition, value);
              }
              bind(context) {
                super.bind(context);
                if (this.endEffectorBoneName) {
                  const parentBoneName = context.getParentBoneNameByName(this.endEffectorBoneName);
                  const ikRootBoneName = parentBoneName ? context.getParentBoneNameByName(parentBoneName) : '';
                  if (parentBoneName && ikRootBoneName) {
                    const hEndEffector = context.bindTransformByName(this.endEffectorBoneName);
                    const hMiddle = context.bindTransformByName(parentBoneName);
                    const hIKRoot = context.bindTransformByName(ikRootBoneName);
                    if (!hEndEffector || !hMiddle || !hIKRoot) {
                      hEndEffector === null || hEndEffector === void 0 ? void 0 : hEndEffector.destroy();
                      hMiddle === null || hMiddle === void 0 ? void 0 : hMiddle.destroy();
                      hIKRoot === null || hIKRoot === void 0 ? void 0 : hIKRoot.destroy();
                    } else {
                      this.endEffectorTarget.bind(context, hEndEffector);
                      this.poleTarget.bind(context, hMiddle);
                      this._workspace = new Workspace(hEndEffector, hMiddle, hIKRoot);
                    }
                  }
                }
              }
              getPoseTransformSpaceRequirement() {
                return PoseTransformSpaceRequirement.COMPONENT;
              }
              modifyPose(context, inputPose, modificationQueue) {
                const {
                  _workspace: workspace
                } = this;
                if (!workspace) {
                  return;
                }
                const {
                  hRoot: {
                    index: iRootTransform
                  },
                  hMiddle: {
                    index: iMiddleTransform
                  },
                  hEndEffector: {
                    index: iEndEffectorTransform
                  }
                } = workspace;
                const rootTransform = inputPose.transforms.getTransform(iRootTransform, cacheRootTransform);
                const middleTransform = inputPose.transforms.getTransform(iMiddleTransform, cacheMiddleTransform);
                const endEffectorTransform = inputPose.transforms.getTransform(iEndEffectorTransform, cacheEndEffectorTransform);
                const endEffectorTargetPosition = this.endEffectorTarget.evaluate(cacheEndEffectorTargetPosition, inputPose, context);
                const poleTargetPosition = this.poleTarget.evaluate(cachePoleTargetPosition, inputPose, context);
                solveTwoBoneIK(rootTransform, middleTransform, endEffectorTransform, endEffectorTargetPosition, poleTargetPosition, this.debug ? this : undefined);
                modificationQueue.push(iRootTransform, rootTransform);
                modificationQueue.push(iMiddleTransform, middleTransform);
                modificationQueue.push(iEndEffectorTransform, endEffectorTransform);
              }
            }, (_initializer5 = applyDecoratedInitializer(_class5$1.prototype, "debug", [serializable$d], function () {
              return false;
            }), _initializer6 = applyDecoratedInitializer(_class5$1.prototype, "endEffectorBoneName", [serializable$d], function () {
              return '';
            }), _initializer7 = applyDecoratedInitializer(_class5$1.prototype, "endEffectorTarget", [serializable$d], function () {
              return new TargetSpecification(TargetSpecificationType.VALUE);
            }), _applyDecoratedDescriptor(_class5$1.prototype, "endEffectorTargetPosition", [_dec6$1], Object.getOwnPropertyDescriptor(_class5$1.prototype, "endEffectorTargetPosition"), _class5$1.prototype), _initializer8 = applyDecoratedInitializer(_class5$1.prototype, "poleTarget", [serializable$d], function () {
              return new TargetSpecification(TargetSpecificationType.NONE);
            }), _applyDecoratedDescriptor(_class5$1.prototype, "poleTargetPosition", [_dec7$1], Object.getOwnPropertyDescriptor(_class5$1.prototype, "poleTargetPosition"), _class5$1.prototype)), _class5$1)) || _class4$1) || _class4$1);
            class Workspace {
              constructor(hEndEffector, hMiddle, hRoot) {
                this.hEndEffector = hEndEffector;
                this.hMiddle = hMiddle;
                this.hRoot = hRoot;
              }
            }

            var _dec$1, _dec2$1, _class$2, _class2$2, _initializer$1, _dec3$1, _dec4, _dec5, _class4, _dec6, _dec7, _dec8, _class5, _dec9, _dec10, _dec11, _class6, _dec12, _dec13, _dec14, _class7, _dec15, _dec16, _dec17, _class8;
            const createNodeFactory = {
              listEntries: context => {
                const entries = [];
                for (const [variableName, {
                  type
                }] of context.animationGraph.variables) {
                  if (type === VariableType.TRIGGER) {
                    continue;
                  }
                  let poseGraphType;
                  switch (type) {
                    default:
                      break;
                    case VariableType.FLOAT:
                      poseGraphType = PoseGraphType.FLOAT;
                      break;
                    case VariableType.INTEGER:
                      poseGraphType = PoseGraphType.INTEGER;
                      break;
                    case VariableType.BOOLEAN:
                      poseGraphType = PoseGraphType.BOOLEAN;
                      break;
                    case VariableType.VEC3_experimental:
                      poseGraphType = PoseGraphType.VEC3;
                      break;
                    case VariableType.QUAT_experimental:
                      poseGraphType = PoseGraphType.QUAT;
                      break;
                  }
                  if (typeof poseGraphType === 'undefined') {
                    continue;
                  }
                  entries.push({
                    arg: {
                      name: variableName,
                      type: poseGraphType
                    },
                    menu: variableName
                  });
                }
                return entries;
              },
              create: arg => {
                let node;
                switch (arg.type) {
                  default:
                    throw new Error(`Bad create node arg: ${PoseGraphType[arg.type]}`);
                  case PoseGraphType.FLOAT:
                    node = new PVNodeGetVariableFloat();
                    break;
                  case PoseGraphType.INTEGER:
                    node = new PVNodeGetVariableInteger();
                    break;
                  case PoseGraphType.BOOLEAN:
                    node = new PVNodeGetVariableBoolean();
                    break;
                  case PoseGraphType.VEC3:
                    node = new PVNodeGetVariableVec3();
                    break;
                  case PoseGraphType.QUAT:
                    node = new PVNodeGetVariableQuat();
                    break;
                }
                node.variableName = arg.name;
                return node;
              }
            };
            let PVNodeGetVariableBase = (_dec$1 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PVNodeGetVariableBase`), _dec2$1 = poseGraphCreateNodeFactory(createNodeFactory), _dec$1(_class$2 = _dec2$1(_class$2 = (_class2$2 = class PVNodeGetVariableBase extends SingleOutputPVNode {
              constructor(...args) {
                super(...args);
                this.variableName = _initializer$1 && _initializer$1();
                this._varInstance = undefined;
              }
              link(context) {
                this._varInstance = context.getVar(this.variableName);
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$2.prototype, "variableName", [serializable$d], function () {
              return '';
            })), _class2$2)) || _class$2) || _class$2);
            let PVNodeGetVariableFloat = (_dec3$1 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PVNodeGetVariableFloat`), _dec4 = poseGraphNodeHide(), _dec5 = poseGraphNodeAppearance({
              inline: true,
              themeColor: '#8471CF'
            }), _dec3$1(_class4 = _dec4(_class4 = _dec5(_class4 = class PVNodeGetVariableFloat extends PVNodeGetVariableBase {
              constructor() {
                super(PoseGraphType.FLOAT);
              }
              selfEvaluateDefaultOutput() {
                var _this$_varInstance;
                return (_this$_varInstance = this._varInstance) === null || _this$_varInstance === void 0 ? void 0 : _this$_varInstance.value;
              }
            }) || _class4) || _class4) || _class4);
            let PVNodeGetVariableInteger = (_dec6 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PVNodeGetVariableInteger`), _dec7 = poseGraphNodeHide(), _dec8 = poseGraphNodeAppearance({
              inline: true,
              themeColor: '#2A90DC'
            }), _dec6(_class5 = _dec7(_class5 = _dec8(_class5 = class PVNodeGetVariableInteger extends PVNodeGetVariableBase {
              constructor() {
                super(PoseGraphType.INTEGER);
              }
              selfEvaluateDefaultOutput() {
                var _this$_varInstance2;
                return (_this$_varInstance2 = this._varInstance) === null || _this$_varInstance2 === void 0 ? void 0 : _this$_varInstance2.value;
              }
            }) || _class5) || _class5) || _class5);
            let PVNodeGetVariableBoolean = (_dec9 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PVNodeGetVariableBoolean`), _dec10 = poseGraphNodeHide(), _dec11 = poseGraphNodeAppearance({
              inline: true,
              themeColor: '#D07979'
            }), _dec9(_class6 = _dec10(_class6 = _dec11(_class6 = class PVNodeGetVariableBoolean extends PVNodeGetVariableBase {
              constructor() {
                super(PoseGraphType.BOOLEAN);
              }
              selfEvaluateDefaultOutput() {
                var _this$_varInstance3;
                return (_this$_varInstance3 = this._varInstance) === null || _this$_varInstance3 === void 0 ? void 0 : _this$_varInstance3.value;
              }
            }) || _class6) || _class6) || _class6);
            let PVNodeGetVariableVec3 = (_dec12 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PVNodeGetVariableVec3`), _dec13 = poseGraphNodeHide(), _dec14 = poseGraphNodeAppearance({
              inline: true,
              themeColor: '#D97721'
            }), _dec12(_class7 = _dec13(_class7 = _dec14(_class7 = class PVNodeGetVariableVec3 extends PVNodeGetVariableBase {
              constructor() {
                super(PoseGraphType.VEC3);
              }
              selfEvaluateDefaultOutput() {
                var _this$_varInstance4;
                return (_this$_varInstance4 = this._varInstance) === null || _this$_varInstance4 === void 0 ? void 0 : _this$_varInstance4.value;
              }
            }) || _class7) || _class7) || _class7);
            let PVNodeGetVariableQuat = (_dec15 = ccclass$g(`${CLASS_NAME_PREFIX_ANIM}PVNodeGetVariableQuat`), _dec16 = poseGraphNodeHide(), _dec17 = poseGraphNodeAppearance({
              inline: true,
              themeColor: '#B169C4'
            }), _dec15(_class8 = _dec16(_class8 = _dec17(_class8 = class PVNodeGetVariableQuat extends PVNodeGetVariableBase {
              constructor() {
                super(PoseGraphType.QUAT);
              }
              selfEvaluateDefaultOutput() {
                var _this$_varInstance5;
                return (_this$_varInstance5 = this._varInstance) === null || _this$_varInstance5 === void 0 ? void 0 : _this$_varInstance5.value;
              }
            }) || _class8) || _class8) || _class8);

            const MAX_ANIMATION_LAYER = 32;

            class RuntimeMotionSyncManager {
              constructor() {
                this._groups = [];
              }
              register(syncInfo) {
                const {
                  group: groupName
                } = syncInfo;
                let group = this._groups.find(group => group.name === groupName);
                if (!group) {
                  group = new Group(groupName);
                  this._groups.push(group);
                }
                return group.addMember();
              }
              sync() {
                for (const group of this._groups) {
                  group.sync();
                }
              }
            }
            class Group {
              constructor(name) {
                this._lastLeader = undefined;
                this._records = [];
                this.name = name;
              }
              addMember() {
                const record = new RuntimeMotionSyncRecordImpl();
                this._records.push(record);
                return record;
              }
              sync() {
                const {
                  _records: records
                } = this;
                const nRecords = records.length;
                assertIsTrue(nRecords > 0);
                const {
                  _lastLeader: lastLeader
                } = this;
                this._lastLeader = undefined;
                if (records.every(r => !r.active)) {
                  return;
                }
                records.sort((a, b) => {
                  const kA = a.active ? a.weight : -1.0;
                  const kB = b.active ? b.weight : -1.0;
                  return kB - kA;
                });
                {
                  const firstInactiveRecord = records.findIndex(r => !r.active);
                  assertIsTrue((firstInactiveRecord < 0 ? [] : records.slice(firstInactiveRecord)).every(r => !r.active));
                }
                let leaderIndex = 0;
                const leaderWeight = records[0].weight;
                if (records[leaderIndex] !== lastLeader) {
                  for (let iRecord = 0; iRecord < nRecords; ++iRecord) {
                    const record = records[iRecord];
                    if (!record.active || !approx(record.weight, leaderWeight, 1e-6)) {
                      break;
                    }
                    if (record === lastLeader) {
                      leaderIndex = iRecord;
                      break;
                    }
                  }
                }
                assertIsTrue(records[leaderIndex].active);
                this._lastLeader = records[leaderIndex];
                const leaderNormalizedTime = records[leaderIndex].normalizedTime;
                for (let iRecord = 0; iRecord < nRecords; ++iRecord) {
                  const record = records[iRecord];
                  if (!record.active) {
                    break;
                  }
                  record.normalizedTime = leaderNormalizedTime;
                  record.reset();
                }
              }
            }
            class RuntimeMotionSyncRecordImpl {
              constructor() {
                this.normalizedTime = 0.0;
                this.weight = 0.0;
                this.active = false;
              }
              notifyRenter(normalizedTime) {
                this.reset();
                this.normalizedTime = normalizedTime;
              }
              notifyUpdate(normalizedDeltaTime, weight) {
                this.normalizedTime += normalizedDeltaTime;
                if (this.active) {
                  this.weight += weight;
                } else {
                  this.active = true;
                  this.weight = weight;
                }
              }
              reset() {
                this.active = false;
                this.weight = 0.0;
              }
              getSyncedEnterTime() {
                return this.normalizedTime;
              }
            }

            var StashRecordState;
            (function (StashRecordState) {
              StashRecordState[StashRecordState["UNINITIALIZED"] = 0] = "UNINITIALIZED";
              StashRecordState[StashRecordState["UNSETTLED"] = 1] = "UNSETTLED";
              StashRecordState[StashRecordState["SETTLED"] = 2] = "SETTLED";
              StashRecordState[StashRecordState["UP_TO_DATE"] = 3] = "UP_TO_DATE";
              StashRecordState[StashRecordState["OUTDATED"] = 4] = "OUTDATED";
              StashRecordState[StashRecordState["UPDATING"] = 5] = "UPDATING";
              StashRecordState[StashRecordState["UPDATED"] = 6] = "UPDATED";
              StashRecordState[StashRecordState["EVALUATING"] = 7] = "EVALUATING";
              StashRecordState[StashRecordState["EVALUATED"] = 8] = "EVALUATED";
            })(StashRecordState || (StashRecordState = {}));
            class RuntimeStashRecord {
              constructor(_allocator) {
                this._state = StashRecordState.UNINITIALIZED;
                this._instantiatedPoseGraph = undefined;
                this._maxRequestedUpdateTime = 0.0;
                this._evaluationCache = null;
                this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
                this._allocator = _allocator;
              }
              set(stash, context) {
                assertIsTrue(this._state === StashRecordState.UNINITIALIZED, `The stash has already been set.`);
                const instantiatedPoseGraph = instantiatePoseGraph(stash.graph, context);
                instantiatedPoseGraph.bind(context);
                this._instantiatedPoseGraph = instantiatedPoseGraph;
                this._state = StashRecordState.UNSETTLED;
              }
              settle(context) {
                assertIsTrue(this._state === StashRecordState.UNSETTLED || this._state === StashRecordState.SETTLED);
                assertIsTrue(this._instantiatedPoseGraph);
                this._instantiatedPoseGraph.settle(context);
                this._state = StashRecordState.SETTLED;
              }
              reset() {
                switch (this._state) {
                  case StashRecordState.SETTLED:
                  case StashRecordState.OUTDATED:
                    break;
                  case StashRecordState.UP_TO_DATE:
                    this._state = StashRecordState.OUTDATED;
                    break;
                  case StashRecordState.UPDATED:
                  case StashRecordState.EVALUATED:
                    if (this._evaluationCache) {
                      this._allocator.destroyPose(this._evaluationCache);
                      this._evaluationCache = null;
                    }
                    this._maxRequestedUpdateTime = 0.0;
                    this._state = StashRecordState.UP_TO_DATE;
                    break;
                  case StashRecordState.UNINITIALIZED:
                  default:
                    assertIsTrue(false, `Unexpected stash state`);
                }
              }
              reenter() {
                switch (this._state) {
                  default:
                    assertIsTrue(false, `Unexpected stash state ${this._state} when reenter().`);
                    break;
                  case StashRecordState.UP_TO_DATE:
                  case StashRecordState.UPDATED:
                    break;
                  case StashRecordState.SETTLED:
                  case StashRecordState.OUTDATED:
                    {
                      this._state = StashRecordState.UP_TO_DATE;
                      assertIsTrue(this._instantiatedPoseGraph);
                      this._instantiatedPoseGraph.reenter();
                      break;
                    }
                }
              }
              requestUpdate(context) {
                const {
                  deltaTime
                } = context;
                assertIsTrue(this._state === StashRecordState.OUTDATED || this._state === StashRecordState.UP_TO_DATE || this._state === StashRecordState.UPDATING || this._state === StashRecordState.UPDATED);
                assertIsTrue(this._instantiatedPoseGraph);
                if (this._state === StashRecordState.UPDATING) {
                  return;
                }
                const diffDeltaTime = Math.max(0.0, deltaTime - this._maxRequestedUpdateTime);
                if (this._state === StashRecordState.UPDATED) {
                  if (approx(diffDeltaTime, 0.0, 1e-8)) {
                    return;
                  } else {
                    {
                      error(`Arrived here indicates a violent of PR #14990. Please report the BUG.`);
                      return;
                    }
                  }
                }
                this._state = StashRecordState.UPDATING;
                this._maxRequestedUpdateTime = Math.max(deltaTime, this._maxRequestedUpdateTime);
                const updateContext = this._updateContextGenerator.generate(diffDeltaTime, context.indicativeWeight);
                this._instantiatedPoseGraph.update(updateContext);
                this._state = StashRecordState.UPDATED;
              }
              evaluate(context) {
                switch (this._state) {
                  default:
                    assertIsTrue(false, `Unexpected stash state ${this._state} when evaluate().`);
                    break;
                  case StashRecordState.EVALUATING:
                    this._state = StashRecordState.EVALUATED;
                    break;
                  case StashRecordState.EVALUATED:
                    break;
                  case StashRecordState.UPDATED:
                    {
                      var _this$_instantiatedPo;
                      assertIsTrue(!this._evaluationCache);
                      this._state = StashRecordState.EVALUATING;
                      const pose = (_this$_instantiatedPo = this._instantiatedPoseGraph) === null || _this$_instantiatedPo === void 0 ? void 0 : _this$_instantiatedPo.evaluate(context);
                      this._state = StashRecordState.EVALUATED;
                      if (pose) {
                        const heapPose = this._allocator.allocatePose();
                        heapPose.transforms.set(pose.transforms);
                        heapPose.auxiliaryCurves.set(pose.auxiliaryCurves);
                        this._evaluationCache = heapPose;
                        context.popPose();
                      }
                      this._state = StashRecordState.EVALUATED;
                      break;
                    }
                }
                assertIsTrue(this._state === StashRecordState.EVALUATED);
                assertIsTrue(this._instantiatedPoseGraph);
                return this._evaluationCache ? context.pushDuplicatedPose(this._evaluationCache) : null;
              }
            }
            class RuntimeStashManager {
              constructor(allocator) {
                this._allocator = void 0;
                this._stashEvaluations = {};
                this._allocator = allocator;
              }
              bindStash(id) {
                return this._stashEvaluations[id];
              }
              getStash(id) {
                return this._stashEvaluations[id];
              }
              addStash(id) {
                this._stashEvaluations[id] = new RuntimeStashRecord(this._allocator);
              }
              setStash(id, stash, context) {
                assertIsTrue(id in this._stashEvaluations);
                this._stashEvaluations[id].set(stash, context);
              }
              reset() {
                for (const stashId in this._stashEvaluations) {
                  const record = this._stashEvaluations[stashId];
                  record.reset();
                }
              }
              settle(context) {
                for (const stashId in this._stashEvaluations) {
                  const record = this._stashEvaluations[stashId];
                  record.settle(context);
                }
              }
            }

            class DefaultTopLevelPoseNode extends PoseNode {
              constructor(graph, bindingContext, poseStashAllocator) {
                super();
                this._layerRecords = void 0;
                const layerEvaluationRecords = graph.layers.map(layer => {
                  const record = new LayerEvaluationRecord(layer, bindingContext, poseStashAllocator);
                  return record;
                });
                this._layerRecords = layerEvaluationRecords;
              }
              get layerCount() {
                return this._layerRecords.length;
              }
              reenter() {}
              bind(_context) {}
              settle(context) {
                const {
                  _layerRecords: layerRecords
                } = this;
                const nLayers = layerRecords.length;
                for (let iLayer = 0; iLayer < nLayers; ++iLayer) {
                  layerRecords[iLayer].settle(context);
                }
              }
              getLayerWeight(layerIndex) {
                assertIsTrue(layerIndex >= 0 && layerIndex < this._layerRecords.length, `Invalid layer index`);
                return this._layerRecords[layerIndex].weight;
              }
              setLayerWeight(layerIndex, weight) {
                assertIsTrue(layerIndex >= 0 && layerIndex < this._layerRecords.length, `Invalid layer index`);
                this._layerRecords[layerIndex].weight = weight;
              }
              getLayerTopLevelStateMachineEvaluation(layerIndex) {
                return this._layerRecords[layerIndex].stateMachineEvaluation;
              }
              overrideClips(context) {
                const {
                  _layerRecords: layerRecords
                } = this;
                const nLayers = layerRecords.length;
                for (let iLayer = 0; iLayer < nLayers; ++iLayer) {
                  const layerRecord = layerRecords[iLayer];
                  context._pushAdditiveFlag(layerRecord.additive);
                  layerRecord.stateMachineEvaluation.overrideClips(context);
                  context._popAdditiveFlag();
                }
              }
              doUpdate(context) {
                const {
                  _layerRecords: layerRecords
                } = this;
                const nLayers = layerRecords.length;
                for (let iLayer = 0; iLayer < nLayers; ++iLayer) {
                  layerRecords[iLayer].update(context);
                }
              }
              doEvaluate(context) {
                const finalPose = context.pushDefaultedPose();
                const {
                  _layerRecords: layerRecords
                } = this;
                const nLayers = layerRecords.length;
                for (let iLayer = 0; iLayer < nLayers; ++iLayer) {
                  const layer = layerRecords[iLayer];
                  const layerPose = layer.stateMachineEvaluation.evaluate(context);
                  const layerActualWeight = layer.weight * layer.stateMachineEvaluation.passthroughWeight;
                  const {
                    transformFilter
                  } = layer;
                  if (layer.additive) {
                    applyDeltaPose(finalPose, layerPose, layerActualWeight, transformFilter);
                  } else {
                    blendPoseInto(finalPose, layerPose, layerActualWeight, transformFilter);
                  }
                  context.popPose();
                  layer.postEvaluate();
                }
                return finalPose;
              }
            }
            class LayerEvaluationRecord {
              constructor(layer, bindingContext, poseStashAllocator) {
                var _layer$mask;
                this.additive = false;
                this.weight = 0.0;
                this._topLevelStateMachineEval = void 0;
                this._stashManager = void 0;
                this._motionSyncManager = void 0;
                this._mask = undefined;
                this.transformFilter = undefined;
                const stashManager = new RuntimeStashManager(poseStashAllocator);
                for (const [stashId, _] of layer.stashes()) {
                  stashManager.addStash(stashId);
                }
                this._stashManager = stashManager;
                const motionSyncManager = new RuntimeMotionSyncManager();
                this._motionSyncManager = motionSyncManager;
                bindingContext._setLayerWideContextProperties(stashManager, motionSyncManager);
                for (const [stashId, stash] of layer.stashes()) {
                  stashManager.setStash(stashId, stash, bindingContext);
                }
                this.weight = layer.weight;
                const additive = this.additive = layer.additive;
                this._mask = (_layer$mask = layer.mask) !== null && _layer$mask !== void 0 ? _layer$mask : undefined;
                bindingContext._pushAdditiveFlag(additive);
                this._topLevelStateMachineEval = new TopLevelStateMachineEvaluation(layer.stateMachine, layer.name, bindingContext);
                bindingContext._popAdditiveFlag();
                bindingContext._unsetLayerWideContextProperties();
              }
              get stateMachineEvaluation() {
                return this._topLevelStateMachineEval;
              }
              settle(context) {
                if (this._mask) {
                  this.transformFilter = context.createTransformFilter(this._mask);
                }
                this._stashManager.settle(context);
                this._topLevelStateMachineEval.settle(context);
              }
              update(context) {
                this.stateMachineEvaluation.update(context);
                this._motionSyncManager.sync();
              }
              postEvaluate() {
                this._stashManager.reset();
              }
            }

            class AnimationGraphEval {
              constructor(graph, root, controller, clipOverrides) {
                this._currentTransitionCache = {
                  duration: 0.0,
                  time: 0.0
                };
                this._rootPoseNode = void 0;
                this._varInstances = {};
                this._hasAutoTrigger = false;
                this._auxiliaryCurveRegistry = new AuxiliaryCurveRegistry();
                this._poseLayoutMaintainer = void 0;
                this._bindingContext = void 0;
                this._settleContext = void 0;
                this._rootUpdateContextGenerator = new AnimationGraphUpdateContextGenerator();
                {
                  if (graph.layers.length >= MAX_ANIMATION_LAYER) {
                    throw new Error(`Max layer count exceeds. ` + `Allowed: ${MAX_ANIMATION_LAYER}, actual: ${graph.layers.length}`);
                  }
                }
                for (const [name, variable] of graph.variables) {
                  const varInstance = variable[createInstanceTag]();
                  this._varInstances[name] = varInstance;
                  if (varInstance instanceof VarInstanceTrigger) {
                    if (varInstance.resetMode === TriggerResetMode.NEXT_FRAME_OR_AFTER_CONSUMED) {
                      this._hasAutoTrigger = true;
                    }
                  }
                }
                const poseLayoutMaintainer = new AnimationGraphPoseLayoutMaintainer(root, this._auxiliaryCurveRegistry);
                this._poseLayoutMaintainer = poseLayoutMaintainer;
                const bindingContext = new AnimationGraphBindingContext(root, poseLayoutMaintainer, this._varInstances, controller);
                bindingContext._setClipOverrides(clipOverrides !== null && clipOverrides !== void 0 ? clipOverrides : undefined);
                this._bindingContext = bindingContext;
                const settleContext = new AnimationGraphSettleContext(poseLayoutMaintainer);
                this._settleContext = settleContext;
                poseLayoutMaintainer.startBind();
                const poseStashAllocator = new DeferredPoseStashAllocator();
                this._poseStashAllocator = poseStashAllocator;
                this._rootPoseNode = new DefaultTopLevelPoseNode(graph, bindingContext, poseStashAllocator);
                this._root = root;
                this._initializeContexts();
              }
              destroy() {
                this._evaluationContext.destroy();
              }
              _destroyAfterException_debugging() {
                const stackSize = this._evaluationContext._stackSize_debugging;
                if (stackSize !== 0) {
                  for (let i = 0; i < stackSize; ++i) {
                    this._evaluationContext.popPose();
                  }
                }
                this._evaluationContext.destroy();
              }
              get layerCount() {
                return this._rootPoseNode.layerCount;
              }
              update(deltaTime) {
                const {
                  _evaluationContext: evaluationContext,
                  _poseLayoutMaintainer: poseLayoutMaintainer,
                  _rootUpdateContextGenerator: rootUpdateContextGenerator,
                  _rootPoseNode: rootPoseNode
                } = this;
                const updateContext = rootUpdateContextGenerator.generate(deltaTime, 1.0);
                rootPoseNode.update(updateContext);
                const finalPose = rootPoseNode.evaluate(evaluationContext, PoseTransformSpaceRequirement.LOCAL);
                if (this._hasAutoTrigger) {
                  const {
                    _varInstances: varInstances
                  } = this;
                  for (const varName in varInstances) {
                    const varInstance = varInstances[varName];
                    if (varInstance instanceof VarInstanceTrigger && varInstance.resetMode === TriggerResetMode.NEXT_FRAME_OR_AFTER_CONSUMED) {
                      varInstance.value = false;
                    }
                  }
                }
                poseLayoutMaintainer.apply(finalPose);
                evaluationContext.popPose();
                {
                  assertIsTrue(evaluationContext.allocatedPoseCount === 0, `Pose leaked.`);
                  assertIsTrue(this._poseStashAllocator.allocatedPoseCount === 0, `Pose leaked.`);
                }
              }
              getVariables() {
                return Object.entries(this._varInstances);
              }
              getCurrentStateStatus(layer) {
                return this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getCurrentStateStatus();
              }
              getCurrentClipStatuses(layer) {
                return this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getCurrentClipStatuses();
              }
              getCurrentTransition(layer) {
                const {
                  _currentTransitionCache: currentTransition
                } = this;
                const isInTransition = this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getCurrentTransition(currentTransition);
                return isInTransition ? currentTransition : null;
              }
              getNextStateStatus(layer) {
                return this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getNextStateStatus();
              }
              getNextClipStatuses(layer) {
                return this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getNextClipStatuses();
              }
              getValue(name) {
                const varInstance = this._varInstances[name];
                if (!varInstance) {
                  return undefined;
                } else {
                  return varInstance.value;
                }
              }
              setValue(name, value) {
                const varInstance = this._varInstances[name];
                if (!varInstance) {
                  return;
                }
                varInstance.value = value;
              }
              getLayerWeight(layerIndex) {
                return this._rootPoseNode.getLayerWeight(layerIndex);
              }
              setLayerWeight(layerIndex, weight) {
                this._rootPoseNode.setLayerWeight(layerIndex, weight);
              }
              overrideClips(overrides) {
                const {
                  _poseLayoutMaintainer: poseLayoutMaintainer
                } = this;
                poseLayoutMaintainer.startBind();
                this._bindingContext._setClipOverrides(overrides);
                this._rootPoseNode.overrideClips(this._bindingContext);
                this._updateAfterPossiblePoseLayoutChange();
              }
              getAuxiliaryCurveValue(curveName) {
                return this._auxiliaryCurveRegistry.get(curveName);
              }
              _initializeContexts() {
                const {
                  _poseLayoutMaintainer: poseLayoutMaintainer
                } = this;
                void poseLayoutMaintainer.endBind();
                this._createOrUpdateTransformFilters();
                const evaluationContext = poseLayoutMaintainer.createEvaluationContext();
                this._evaluationContext = evaluationContext;
                poseLayoutMaintainer.fetchDefaultTransforms(evaluationContext[defaultTransformsTag]);
                poseLayoutMaintainer.resetPoseStashAllocator(this._poseStashAllocator);
              }
              _updateAfterPossiblePoseLayoutChange() {
                const {
                  _poseLayoutMaintainer: poseLayoutMaintainer
                } = this;
                const layoutChangeFlags = poseLayoutMaintainer.endBind();
                if (layoutChangeFlags === 0) {
                  return;
                }
                if (layoutChangeFlags & LayoutChangeFlag.TRANSFORM_COUNT || layoutChangeFlags & LayoutChangeFlag.TRANSFORM_ORDER) {
                  this._createOrUpdateTransformFilters();
                }
                let evaluationContextRecreated = false;
                if (layoutChangeFlags & LayoutChangeFlag.TRANSFORM_COUNT || layoutChangeFlags & LayoutChangeFlag.AUXILIARY_CURVE_COUNT) {
                  const evaluationContext = poseLayoutMaintainer.createEvaluationContext();
                  this._evaluationContext.destroy();
                  this._evaluationContext = evaluationContext;
                  evaluationContextRecreated = true;
                  poseLayoutMaintainer.resetPoseStashAllocator(this._poseStashAllocator);
                }
                if (evaluationContextRecreated || layoutChangeFlags & LayoutChangeFlag.TRANSFORM_COUNT || layoutChangeFlags & LayoutChangeFlag.TRANSFORM_ORDER) {
                  poseLayoutMaintainer.fetchDefaultTransforms(this._evaluationContext[defaultTransformsTag]);
                }
              }
              _createOrUpdateTransformFilters() {
                this._rootPoseNode.settle(this._settleContext);
              }
            }

            var _dec, _dec2, _dec3, _class$1, _class2$1, _initializer;
            const {
              ccclass,
              menu,
              help,
              type,
              serializable,
              editable,
              formerlySerializedAs
            } = _decorator;
            let AnimationController = (_dec = ccclass('cc.animation.AnimationController'), _dec2 = type(AnimationGraphLike), _dec3 = formerlySerializedAs('graph'), _dec(_class$1 = (_class2$1 = class AnimationController extends Component {
              constructor(...args) {
                super(...args);
                this._graph = _initializer && _initializer();
                this._graphEval = null;
              }
              get graph() {
                return this._graph;
              }
              set graph(value) {
                this._graph = value;
              }
              get layerCount() {
                var _this$_graphEval$laye, _this$_graphEval;
                return (_this$_graphEval$laye = (_this$_graphEval = this._graphEval) === null || _this$_graphEval === void 0 ? void 0 : _this$_graphEval.layerCount) !== null && _this$_graphEval$laye !== void 0 ? _this$_graphEval$laye : 0;
              }
              __preload() {
                const {
                  graph
                } = this;
                if (graph) {
                  let originalGraph;
                  let clipOverrides = null;
                  if (graph instanceof AnimationGraphVariant) {
                    if (!graph.original) {
                      return;
                    }
                    originalGraph = graph.original;
                    clipOverrides = graph.clipOverrides;
                  } else {
                    assertIsTrue(graph instanceof AnimationGraph);
                    originalGraph = graph;
                  }
                  const graphEval = new AnimationGraphEval(originalGraph, this.node, this, clipOverrides);
                  this._graphEval = graphEval;
                }
              }
              onDestroy() {
                var _this$_graphEval2;
                (_this$_graphEval2 = this._graphEval) === null || _this$_graphEval2 === void 0 ? void 0 : _this$_graphEval2.destroy();
              }
              update(deltaTime) {
                var _this$_graphEval3;
                (_this$_graphEval3 = this._graphEval) === null || _this$_graphEval3 === void 0 ? void 0 : _this$_graphEval3.update(deltaTime);
              }
              getVariables() {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.getVariables();
              }
              setValue(name, value) {
                return this.setValue_experimental(name, value);
              }
              setValue_experimental(name, value) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                graphEval.setValue(name, value);
              }
              getValue(name) {
                const value = this.getValue_experimental(name);
                if (typeof value === 'object') {
                  {
                    warn(`Obtaining variable "${name}" is not of primitive type, ` + `which is currently supported experimentally and should be explicitly obtained through this.getValue_experimental()`);
                  }
                  return undefined;
                } else {
                  return value;
                }
              }
              getValue_experimental(name) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.getValue(name);
              }
              getCurrentStateStatus(layer) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.getCurrentStateStatus(layer);
              }
              getCurrentClipStatuses(layer) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.getCurrentClipStatuses(layer);
              }
              getCurrentTransition(layer) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.getCurrentTransition(layer);
              }
              getNextStateStatus(layer) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.getNextStateStatus(layer);
              }
              getNextClipStatuses(layer) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.getNextClipStatuses(layer);
              }
              getLayerWeight(layer) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.getLayerWeight(layer);
              }
              setLayerWeight(layer, weight) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                return graphEval.setLayerWeight(layer, weight);
              }
              overrideClips_experimental(overrides) {
                const {
                  _graphEval: graphEval
                } = this;
                assertIsNonNullable(graphEval);
                graphEval.overrideClips(overrides);
              }
              getAuxiliaryCurveValue_experimental(curveName) {
                const {
                  _graphEval: graphEval
                } = this;
                if (!graphEval) {
                  return 0.0;
                }
                return graphEval.getAuxiliaryCurveValue(curveName);
              }
            }, (_applyDecoratedDescriptor(_class2$1.prototype, "graph", [_dec2], Object.getOwnPropertyDescriptor(_class2$1.prototype, "graph"), _class2$1.prototype), _initializer = applyDecoratedInitializer(_class2$1.prototype, "_graph", [serializable, _dec3], function () {
              return null;
            })), _class2$1)) || _class$1);

            var animation = /*#__PURE__*/Object.freeze({
                __proto__: null,
                UniformProxyFactory: UniformProxyFactory,
                MorphWeightValueProxy: MorphWeightValueProxy,
                MorphWeightsValueProxy: MorphWeightsValueProxy,
                MorphWeightsAllValueProxy: MorphWeightsAllValueProxy,
                Track: Track,
                TrackPath: TrackPath,
                RealTrack: RealTrack,
                VectorTrack: VectorTrack,
                QuatTrack: QuatTrack,
                ColorTrack: ColorTrack,
                SizeTrack: SizeTrack,
                ObjectTrack: ObjectTrack,
                isPropertyPath: isPropertyPath,
                isCustomPath: isCustomPath,
                HierarchyPath: HierarchyPath,
                ComponentPath: ComponentPath,
                CubicSplineVec2Value: CubicSplineVec2Value,
                CubicSplineVec3Value: CubicSplineVec3Value,
                CubicSplineVec4Value: CubicSplineVec4Value,
                CubicSplineQuatValue: CubicSplineQuatValue,
                CubicSplineNumberValue: CubicSplineNumberValue,
                AnimationController: AnimationController,
                get VariableType () { return VariableType; },
                StateMachineComponent: StateMachineComponent
            });
            exports('animation', animation);

            class BlendStateBuffer {
              constructor() {
                this._nodeBlendStates = new Map();
              }
              createWriter(node, property, host, constants) {
                const propertyBlendState = this.ref(node, property);
                return new BlendStateWriterInternal(node, property, propertyBlendState, host, constants);
              }
              destroyWriter(writer) {
                const internal = writer;
                this.deRef(internal.node, internal.property);
              }
              ref(node, property) {
                let nodeBlendState = this._nodeBlendStates.get(node);
                if (!nodeBlendState) {
                  nodeBlendState = this.createNodeBlendState();
                  this._nodeBlendStates.set(node, nodeBlendState);
                }
                const propertyBlendState = nodeBlendState.refProperty(node, property);
                return propertyBlendState;
              }
              deRef(node, property) {
                const nodeBlendState = this._nodeBlendStates.get(node);
                if (!nodeBlendState) {
                  return;
                }
                nodeBlendState.deRefProperty(property);
                if (nodeBlendState.empty) {
                  this._nodeBlendStates.delete(node);
                }
              }
              apply() {
                this._nodeBlendStates.forEach((nodeBlendState, node) => {
                  nodeBlendState.apply(node);
                });
              }
            }
            class BlendStateWriterInternal {
              constructor(_node, _property, _propertyBlendState, _host, _constants) {
                this._node = _node;
                this._property = _property;
                this._propertyBlendState = _propertyBlendState;
                this._host = _host;
                this._constants = _constants;
              }
              get node() {
                return this._node;
              }
              get property() {
                return this._property;
              }
              getValue() {
                return this._node[this._property];
              }
              setValue(value) {
                const {
                  _propertyBlendState: propertyBlendState,
                  _host: host
                } = this;
                const weight = host.weight;
                propertyBlendState.blend(value, weight);
              }
            }
            var TransformApplyFlag;
            (function (TransformApplyFlag) {
              TransformApplyFlag[TransformApplyFlag["POSITION"] = 1] = "POSITION";
              TransformApplyFlag[TransformApplyFlag["ROTATION"] = 2] = "ROTATION";
              TransformApplyFlag[TransformApplyFlag["SCALE"] = 4] = "SCALE";
              TransformApplyFlag[TransformApplyFlag["EULER_ANGLES"] = 8] = "EULER_ANGLES";
            })(TransformApplyFlag || (TransformApplyFlag = {}));
            TransformApplyFlag.POSITION | TransformApplyFlag.ROTATION | TransformApplyFlag.SCALE | TransformApplyFlag.EULER_ANGLES;
            class LegacyVec3PropertyBlendState {
              constructor() {
                this.refCount = 0;
                this.accumulatedWeight = 0.0;
                this.result = new Vec3();
              }
              blend(value, weight) {
                this.accumulatedWeight = mixAveragedVec3(this.result, this.result, this.accumulatedWeight, value, weight);
              }
              reset() {
                this.accumulatedWeight = 0.0;
                Vec3.zero(this.result);
              }
            }
            class LegacyQuatPropertyBlendState {
              constructor() {
                this.refCount = 0;
                this.accumulatedWeight = 0.0;
                this.result = new Quat();
              }
              blend(value, weight) {
                this.accumulatedWeight = mixAveragedQuat(this.result, this.result, this.accumulatedWeight, value, weight);
              }
              reset() {
                this.accumulatedWeight = 0.0;
                Quat.identity(this.result);
              }
            }
            class NodeBlendState {
              constructor() {
                this._transformApplyFlags = 0;
                this._properties = {};
              }
              get empty() {
                const {
                  _properties: properties
                } = this;
                return !properties.position && !properties.rotation && !properties.eulerAngles && !properties.scale;
              }
              refProperty(node, property) {
                var _properties$property, _properties$property2;
                const {
                  _properties: properties
                } = this;
                let propertyBlendState;
                switch (property) {
                  default:
                  case 'position':
                  case 'scale':
                  case 'eulerAngles':
                    propertyBlendState = (_properties$property = properties[property]) !== null && _properties$property !== void 0 ? _properties$property : properties[property] = this._createVec3BlendState(node[property]);
                    break;
                  case 'rotation':
                    propertyBlendState = (_properties$property2 = properties[property]) !== null && _properties$property2 !== void 0 ? _properties$property2 : properties[property] = this._createQuatBlendState(node.rotation);
                    break;
                }
                ++propertyBlendState.refCount;
                return propertyBlendState;
              }
              deRefProperty(property) {
                const {
                  _properties: properties
                } = this;
                const propertyBlendState = properties[property];
                if (!propertyBlendState) {
                  return;
                }
                --propertyBlendState.refCount;
                if (propertyBlendState.refCount > 0) {
                  return;
                }
                delete properties[property];
              }
              apply(node) {
                const {
                  _transformApplyFlags: transformApplyFlags,
                  _properties: {
                    position,
                    scale,
                    rotation,
                    eulerAngles
                  }
                } = this;
                if (!transformApplyFlags) {
                  return;
                }
                let t;
                let s;
                let r;
                if (position && transformApplyFlags & TransformApplyFlag.POSITION) {
                  t = position.result;
                }
                if (scale && transformApplyFlags & TransformApplyFlag.SCALE) {
                  s = scale.result;
                }
                if (eulerAngles && transformApplyFlags & TransformApplyFlag.EULER_ANGLES) {
                  r = eulerAngles.result;
                }
                if (rotation && transformApplyFlags & TransformApplyFlag.ROTATION) {
                  r = rotation.result;
                }
                if (r || t || s) {
                  node.setRTS(r, t, s);
                }
                this._transformApplyFlags = 0;
              }
            }
            class LegacyNodeBlendState extends NodeBlendState {
              apply(node) {
                const {
                  _properties: {
                    position,
                    scale,
                    rotation,
                    eulerAngles
                  }
                } = this;
                if (position && position.accumulatedWeight) {
                  this._transformApplyFlags |= TransformApplyFlag.POSITION;
                  if (position.accumulatedWeight < 1.0) {
                    position.blend(node.position, 1.0 - position.accumulatedWeight);
                  }
                }
                if (scale && scale.accumulatedWeight) {
                  this._transformApplyFlags |= TransformApplyFlag.SCALE;
                  if (scale.accumulatedWeight < 1.0) {
                    scale.blend(node.scale, 1.0 - scale.accumulatedWeight);
                  }
                }
                if (eulerAngles && eulerAngles.accumulatedWeight) {
                  this._transformApplyFlags |= TransformApplyFlag.EULER_ANGLES;
                  if (eulerAngles.accumulatedWeight < 1.0) {
                    eulerAngles.blend(node.eulerAngles, 1.0 - eulerAngles.accumulatedWeight);
                  }
                }
                if (rotation && rotation.accumulatedWeight) {
                  this._transformApplyFlags |= TransformApplyFlag.ROTATION;
                  if (rotation.accumulatedWeight < 1.0) {
                    rotation.blend(node.rotation, 1.0 - rotation.accumulatedWeight);
                  }
                }
                super.apply(node);
                position === null || position === void 0 ? void 0 : position.reset();
                scale === null || scale === void 0 ? void 0 : scale.reset();
                rotation === null || rotation === void 0 ? void 0 : rotation.reset();
                eulerAngles === null || eulerAngles === void 0 ? void 0 : eulerAngles.reset();
              }
              _createVec3BlendState(_currentValue) {
                return new LegacyVec3PropertyBlendState();
              }
              _createQuatBlendState(_currentValue) {
                return new LegacyQuatPropertyBlendState();
              }
            }
            class LegacyBlendStateBuffer extends BlendStateBuffer {
              createNodeBlendState() {
                return new LegacyNodeBlendState();
              }
            }
            function mixAveragedVec3(result, previous, accumulatedWeight, input, weight) {
              const newSum = accumulatedWeight + weight;
              if (weight === 1.0 && !accumulatedWeight) {
                Vec3.copy(result, input);
              } else if (newSum) {
                const t = weight / newSum;
                Vec3.lerp(result, result, input, t);
              }
              return newSum;
            }
            function mixAveragedQuat(result, previous, accumulatedWeight, input, weight) {
              const newSum = accumulatedWeight + weight;
              if (weight === 1.0 && !accumulatedWeight) {
                Quat.copy(result, input);
              } else if (newSum) {
                const t = weight / newSum;
                Quat.slerp(result, previous, input, t);
              }
              return newSum;
            }

            const stack = [];
            const pool = new Map();
            function getWorldMatrix(transform, stamp) {
              let i = 0;
              let res = Mat4.IDENTITY;
              while (transform) {
                if (transform.stamp === stamp || transform.stamp + 1 === stamp && !transform.node.hasChangedFlags) {
                  res = transform.world;
                  transform.stamp = stamp;
                  break;
                }
                transform.stamp = stamp;
                stack[i++] = transform;
                transform = transform.parent;
              }
              while (i > 0) {
                transform = stack[--i];
                stack[i] = null;
                const node = transform.node;
                Mat4.fromRTS(transform.local, node.rotation, node.position, node.scale);
                res = Mat4.multiply(transform.world, res, transform.local);
              }
              return res;
            }
            function getTransform(node, root) {
              let joint = null;
              let i = 0;
              while (node !== root) {
                const id = node.uuid;
                if (pool.has(id)) {
                  joint = pool.get(id);
                  break;
                } else {
                  joint = {
                    node,
                    local: new Mat4(),
                    world: new Mat4(),
                    stamp: -1,
                    parent: null
                  };
                  pool.set(id, joint);
                }
                stack[i++] = joint;
                node = node.parent;
                joint = null;
              }
              let child;
              while (i > 0) {
                child = stack[--i];
                stack[i] = null;
                child.parent = joint;
                joint = child;
              }
              return joint;
            }
            function deleteTransform(node) {
              let transform = pool.get(node.uuid) || null;
              while (transform) {
                pool.delete(transform.node.uuid);
                transform = transform.parent;
              }
            }

            var _class, _class2;
            let AnimationManager = exports('AnimationManager', ccclass$g(_class = (_class2 = class AnimationManager extends System {
              constructor(...args) {
                super(...args);
                this._anims = new MutableForwardIterator([]);
                this._crossFades = new MutableForwardIterator([]);
                this._delayEvents = [];
                this._blendStateBuffer = new LegacyBlendStateBuffer();
                this._sockets = [];
              }
              get blendState() {
                return this._blendStateBuffer;
              }
              addCrossFade(crossFade) {
                const index = this._crossFades.array.indexOf(crossFade);
                if (index === -1) {
                  this._crossFades.push(crossFade);
                }
              }
              removeCrossFade(crossFade) {
                const index = this._crossFades.array.indexOf(crossFade);
                if (index >= 0) {
                  this._crossFades.fastRemoveAt(index);
                } else {
                  errorID(3907);
                }
              }
              update(dt) {
                const {
                  _delayEvents,
                  _crossFades: crossFadesIter,
                  _sockets
                } = this;
                {
                  const crossFades = crossFadesIter.array;
                  for (crossFadesIter.i = 0; crossFadesIter.i < crossFades.length; ++crossFadesIter.i) {
                    const crossFade = crossFades[crossFadesIter.i];
                    crossFade.update(dt);
                  }
                }
                const iterator = this._anims;
                const array = iterator.array;
                for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
                  const anim = array[iterator.i];
                  if (!anim.isMotionless) {
                    anim.update(dt);
                  }
                }
                this._blendStateBuffer.apply();
                const stamp = director.getTotalFrames();
                for (let i = 0, l = _sockets.length; i < l; i++) {
                  const {
                    target,
                    transform
                  } = _sockets[i];
                  target.matrix = getWorldMatrix(transform, stamp);
                }
                for (let i = 0, l = _delayEvents.length; i < l; i++) {
                  const event = _delayEvents[i];
                  event.fn.apply(event.thisArg, event.args);
                }
                _delayEvents.length = 0;
              }
              destruct() {}
              addAnimation(anim) {
                const index = this._anims.array.indexOf(anim);
                if (index === -1) {
                  this._anims.push(anim);
                }
              }
              removeAnimation(anim) {
                const index = this._anims.array.indexOf(anim);
                if (index >= 0) {
                  this._anims.fastRemoveAt(index);
                } else {
                  errorID(3907);
                }
              }
              pushDelayEvent(fn, thisArg, args) {
                this._delayEvents.push({
                  fn,
                  thisArg,
                  args
                });
              }
              addSockets(root, sockets) {
                for (let i = 0; i < sockets.length; ++i) {
                  const socket = sockets[i];
                  if (this._sockets.find(s => s.target === socket.target)) {
                    continue;
                  }
                  const targetNode = root.getChildByPath(socket.path);
                  const transform = socket.target && targetNode && getTransform(targetNode, root);
                  if (transform) {
                    this._sockets.push({
                      target: socket.target,
                      transform
                    });
                  }
                }
              }
              removeSockets(root, sockets) {
                for (let i = 0; i < sockets.length; ++i) {
                  const socketToRemove = sockets[i];
                  for (let j = 0; j < this._sockets.length; ++j) {
                    const socket = this._sockets[j];
                    if (socket.target === socketToRemove.target) {
                      deleteTransform(socket.transform.node);
                      this._sockets[j] = this._sockets[this._sockets.length - 1];
                      this._sockets.length--;
                      break;
                    }
                  }
                }
              }
            }, _class2.ID = 'animation', _class2)) || _class);
            director.on(Director.EVENT_INIT, () => {
              const animationManager = new AnimationManager();
              director.registerSystem(AnimationManager.ID, animationManager, System.Priority.HIGH);
            });
            legacyCC.AnimationManager = AnimationManager;

        })
    };
}));
