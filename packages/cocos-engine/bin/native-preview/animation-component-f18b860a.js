System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './murmurhash2_gc-2108d723.js'], (function (exports) {
    'use strict';
    var Asset, _applyDecoratedDescriptor, Component, getError, WrapModeMask, ccenum, legacyCC, assertIsTrue, debug, ccclass$1, applyDecoratedInitializer, warnID, serializable$1, uniquelyReferenced, getClassName, errorID, Vec2, Vec3, Vec4, Quat, RealCurve, QuatCurve, Color, Size, ObjectCurve, binarySearchEpsilon, easing, bezierByTime, lerp, ValueType, EasingMethod, RealInterpolationMode, TangentWeightMode, QuatInterpolationMode, _decorator, Mat4, remove, removeIf, approx, clamp, clamp01, type, Eventify, createMap, contains, setClassAlias, executionOrder, Node, murmurhash2_32_gc;
    return {
        setters: [function (module) {
            Asset = module.A;
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
        }, function (module) {
            getError = module.aI;
            WrapModeMask = module.cy;
            ccenum = module.ab;
            legacyCC = module.l;
            assertIsTrue = module.bu;
            debug = module.aF;
            ccclass$1 = module.by;
            applyDecoratedInitializer = module.bx;
            warnID = module.d;
            serializable$1 = module.bf;
            uniquelyReferenced = module.cz;
            getClassName = module.bL;
            errorID = module.f;
            Vec2 = module.V;
            Vec3 = module.n;
            Vec4 = module.p;
            Quat = module.Q;
            RealCurve = module.aP;
            QuatCurve = module.aT;
            Color = module.C;
            Size = module.S;
            ObjectCurve = module.aV;
            binarySearchEpsilon = module.br;
            easing = module.b0;
            bezierByTime = module.b2;
            lerp = module.I;
            ValueType = module.ac;
            EasingMethod = module.bn;
            RealInterpolationMode = module.aQ;
            TangentWeightMode = module.aS;
            QuatInterpolationMode = module.aU;
            _decorator = module.ap;
            Mat4 = module.s;
            remove = module.cu;
            removeIf = module.cx;
            approx = module.D;
            clamp = module.F;
            clamp01 = module.G;
            type = module.bw;
            Eventify = module.aE;
            createMap = module.c2;
            contains = module.cA;
            setClassAlias = module.cj;
            executionOrder = module.cs;
        }, function (module) {
            Node = module.Q;
        }, function () {}, function (module) {
            murmurhash2_32_gc = module.m;
        }],
        execute: (function () {

            exports({
                d: isTrsPropertyName,
                i: invokeComponentMethodsEngagedInAnimationEvent,
                j: isPropertyPath,
                k: isCustomPath,
                w: sampleAnimationCurve,
                x: computeRatioByType,
                z: getGlobalAnimationManager
            });

            const CLASS_NAME_PREFIX_ANIM = exports('C', 'cc.animation.');
            const createEvalSymbol = exports('c', Symbol('CreateEval'));

            class Playable {
              constructor() {
                this._isPlaying = false;
                this._isPaused = false;
                this._stepOnce = false;
              }
              get isPlaying() {
                return this._isPlaying;
              }
              get isPaused() {
                return this._isPaused;
              }
              get isMotionless() {
                return !this.isPlaying || this.isPaused;
              }
              play() {
                if (this._isPlaying) {
                  if (this._isPaused) {
                    this._isPaused = false;
                    this.onResume();
                  } else {
                    this.onError(getError(3912));
                  }
                } else {
                  this._isPlaying = true;
                  this.onPlay();
                }
              }
              stop() {
                if (this._isPlaying) {
                  this._isPlaying = false;
                  this.onStop();
                  this._isPaused = false;
                }
              }
              pause() {
                if (this._isPlaying && !this._isPaused) {
                  this._isPaused = true;
                  this.onPause();
                }
              }
              resume() {
                if (this._isPlaying && this._isPaused) {
                  this._isPaused = false;
                  this.onResume();
                }
              }
              step() {
                this.pause();
                this._stepOnce = true;
                if (!this._isPlaying) {
                  this.play();
                }
              }
              update(deltaTime) {}
              onPlay() {}
              onPause() {}
              onResume() {}
              onStop() {}
              onError(message) {}
            }

            let WrapMode;
            (function (WrapMode) {
              WrapMode[WrapMode["Default"] = WrapModeMask.Default] = "Default";
              WrapMode[WrapMode["Normal"] = WrapModeMask.Normal] = "Normal";
              WrapMode[WrapMode["Reverse"] = WrapModeMask.Reverse] = "Reverse";
              WrapMode[WrapMode["Loop"] = WrapModeMask.Loop] = "Loop";
              WrapMode[WrapMode["LoopReverse"] = WrapModeMask.Loop | WrapModeMask.Reverse] = "LoopReverse";
              WrapMode[WrapMode["PingPong"] = WrapModeMask.PingPong] = "PingPong";
              WrapMode[WrapMode["PingPongReverse"] = WrapModeMask.PingPong | WrapModeMask.Reverse] = "PingPongReverse";
            })(WrapMode || (WrapMode = {}));
            ccenum(WrapMode);
            class WrappedInfo {
              constructor(info) {
                this.ratio = 0;
                this.time = 0;
                this.direction = 1;
                this.stopped = true;
                this.iterations = 0;
                this.frameIndex = undefined;
                if (info) {
                  this.set(info);
                }
              }
              set(info) {
                this.ratio = info.ratio;
                this.time = info.time;
                this.direction = info.direction;
                this.stopped = info.stopped;
                this.iterations = info.iterations;
                this.frameIndex = info.frameIndex;
              }
            } exports('W', WrappedInfo);
            function isLerpable(object) {
              return typeof object.lerp === 'function';
            }

            class PoseOutput {
              constructor(pose) {
                this.weight = 0.0;
                this._pose = void 0;
                this._blendStateWriters = [];
                this._pose = pose;
              }
              destroy() {
                for (let iBlendStateWriter = 0; iBlendStateWriter < this._blendStateWriters.length; ++iBlendStateWriter) {
                  this._pose.destroyWriter(this._blendStateWriters[iBlendStateWriter]);
                }
                this._blendStateWriters.length = 0;
              }
              createPoseWriter(node, property, constants) {
                const writer = this._pose.createWriter(node, property, this, constants);
                this._blendStateWriters.push(writer);
                return writer;
              }
            }

            function getGlobalAnimationManager() {
              const animationManager = legacyCC.director.getAnimationManager();
              return animationManager;
            }

            let EventType;
            (function (EventType) {
              EventType["PLAY"] = "play";
              EventType["STOP"] = "stop";
              EventType["PAUSE"] = "pause";
              EventType["RESUME"] = "resume";
              EventType["LASTFRAME"] = "lastframe";
              EventType["FINISHED"] = "finished";
            })(EventType || (EventType = {}));
            ccenum(EventType);
            class AnimationState extends Playable {
              get clip() {
                return this._clip;
              }
              get name() {
                return this._name;
              }
              get length() {
                return this.duration;
              }
              get wrapMode() {
                return this._wrapMode;
              }
              set wrapMode(value) {
                var _this$_clipEventEval;
                this._wrapMode = value;
                this.time = 0;
                if (value & WrapModeMask.Loop) {
                  this.repeatCount = Infinity;
                } else {
                  this.repeatCount = 1;
                }
                (_this$_clipEventEval = this._clipEventEval) === null || _this$_clipEventEval === void 0 ? void 0 : _this$_clipEventEval.setWrapMode(value);
              }
              get repeatCount() {
                return this._repeatCount;
              }
              set repeatCount(value) {
                this._repeatCount = value;
                const shouldWrap = this._wrapMode & WrapModeMask.ShouldWrap;
                const reverse = (this.wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse;
                if (value === Infinity && !shouldWrap && !reverse) {
                  this._useSimpleProcess = true;
                } else {
                  this._useSimpleProcess = false;
                }
              }
              get delay() {
                return this._delay;
              }
              set delay(value) {
                this._delayTime = this._delay = value;
              }
              get playbackRange() {
                return this._playbackRange;
              }
              set playbackRange(value) {
                assertIsTrue(value.max >= value.min);
                this._playbackRange.min = Math.max(value.min, 0);
                this._playbackRange.max = Math.min(value.max, this.duration);
                this._playbackDuration = this._playbackRange.max - this._playbackRange.min;
                this.setTime(0.0);
              }
              get speed() {
                return this._speed;
              }
              set speed(value) {
                var _this$_clipEmbeddedPl;
                this._speed = value;
                (_this$_clipEmbeddedPl = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl === void 0 ? void 0 : _this$_clipEmbeddedPl.notifyHostSpeedChanged(value);
              }
              get current() {
                return this.getWrappedInfo(this.time).time;
              }
              get ratio() {
                return this.duration === 0.0 ? 0.0 : this.current / this.duration;
              }
              get weight() {
                return this._weight;
              }
              set weight(value) {
                this._weight = value;
                if (this._poseOutput) {
                  this._poseOutput.weight = value;
                }
              }
              constructor(clip, name = '') {
                super();
                this.duration = 1.0;
                this.time = 0.0;
                this.frameRate = 0;
                this._targetNode = null;
                this._curveLoaded = false;
                this._clip = void 0;
                this._speed = 1.0;
                this._useSimpleProcess = false;
                this._target = null;
                this._wrapMode = WrapMode.Normal;
                this._repeatCount = 1;
                this._delay = 0.0;
                this._delayTime = 0.0;
                this._currentFramePlayed = false;
                this._name = void 0;
                this._lastIterations = NaN;
                this._lastWrapInfo = null;
                this._wrappedInfo = new WrappedInfo();
                this._allowLastFrame = false;
                this._blendStateWriterHost = {
                  weight: 0.0
                };
                this._playbackDuration = 0.0;
                this._invDuration = 1.0;
                this._poseOutput = null;
                this._weight = 1.0;
                this._clipEval = void 0;
                this._clipEventEval = void 0;
                this._clipEmbeddedPlayerEval = void 0;
                this._doNotCreateEval = false;
                this._clip = clip;
                this._name = name || clip && clip.name;
                this._playbackRange = {
                  min: 0.0,
                  max: clip.duration
                };
                this._playbackDuration = clip.duration;
                if (!clip.duration) {
                  debug(`Clip ${clip.name} has zero duration.`);
                }
              }
              get curveLoaded() {
                return this._curveLoaded;
              }
              initialize(root, blendStateBuffer, mask) {
                if (this._curveLoaded) {
                  return;
                }
                this._curveLoaded = true;
                if (this._poseOutput) {
                  this._poseOutput.destroy();
                  this._poseOutput = null;
                }
                if (this._clipEval) {
                  this._clipEval = undefined;
                }
                if (this._clipEventEval) {
                  this._clipEventEval = undefined;
                }
                if (this._clipEmbeddedPlayerEval) {
                  this._clipEmbeddedPlayerEval.destroy();
                  this._clipEmbeddedPlayerEval = undefined;
                }
                this._targetNode = root;
                const clip = this._clip;
                this.duration = clip.duration;
                this._invDuration = 1.0 / this.duration;
                this._speed = clip.speed;
                this.wrapMode = clip.wrapMode;
                this.frameRate = clip.sample;
                this._playbackRange.min = 0.0;
                this._playbackRange.max = clip.duration;
                this._playbackDuration = clip.duration;
                if ((this.wrapMode & WrapModeMask.Loop) === WrapModeMask.Loop) {
                  this.repeatCount = Infinity;
                } else {
                  this.repeatCount = 1;
                }
                if (!this._doNotCreateEval) {
                  var _ref, _getGlobalAnimationMa, _this$_poseOutput;
                  const pose = (_ref = blendStateBuffer !== null && blendStateBuffer !== void 0 ? blendStateBuffer : (_getGlobalAnimationMa = getGlobalAnimationManager()) === null || _getGlobalAnimationMa === void 0 ? void 0 : _getGlobalAnimationMa.blendState) !== null && _ref !== void 0 ? _ref : null;
                  if (pose) {
                    this._poseOutput = new PoseOutput(pose);
                  }
                  this._clipEval = clip.createEvaluator({
                    target: root,
                    pose: (_this$_poseOutput = this._poseOutput) !== null && _this$_poseOutput !== void 0 ? _this$_poseOutput : undefined,
                    mask
                  });
                }
                {
                  if (clip.containsAnyEvent()) {
                    this._clipEventEval = clip.createEventEvaluator(this._targetNode);
                  }
                }
                if (clip.containsAnyEmbeddedPlayer()) {
                  this._clipEmbeddedPlayerEval = clip.createEmbeddedPlayerEvaluator(this._targetNode);
                  this._clipEmbeddedPlayerEval.notifyHostSpeedChanged(this._speed);
                }
              }
              destroy() {
                if (!this.isMotionless) {
                  getGlobalAnimationManager().removeAnimation(this);
                }
                if (this._poseOutput) {
                  this._poseOutput.destroy();
                  this._poseOutput = null;
                }
                this._clipEval = undefined;
              }
              emit(...args) {
                getGlobalAnimationManager().pushDelayEvent(this._emit, this, args);
              }
              on(type, callback, target) {
                if (this._target && this._target.isValid) {
                  return this._target.on(type, callback, target);
                } else {
                  return null;
                }
              }
              once(type, callback, target) {
                if (this._target && this._target.isValid) {
                  return this._target.once(type, callback, target);
                } else {
                  return null;
                }
              }
              off(type, callback, target) {
                if (this._target && this._target.isValid) {
                  this._target.off(type, callback, target);
                }
              }
              allowLastFrameEvent(allowed) {
                this._allowLastFrame = allowed;
              }
              _setEventTarget(target) {
                this._target = target;
              }
              setTime(time) {
                this._currentFramePlayed = false;
                this.time = time || 0.0;
                {
                  var _this$_clipEventEval2;
                  const info = this.getWrappedInfo(time, this._wrappedInfo);
                  (_this$_clipEventEval2 = this._clipEventEval) === null || _this$_clipEventEval2 === void 0 ? void 0 : _this$_clipEventEval2.ignore(info.ratio, info.direction);
                }
              }
              update(delta) {
                if (this._delayTime > 0.0) {
                  this._delayTime -= delta;
                  if (this._delayTime > 0.0) {
                    return;
                  }
                }
                if (this._currentFramePlayed) {
                  this.time += delta * this._speed;
                } else {
                  this._currentFramePlayed = true;
                }
                this._process();
              }
              sample() {
                const info = this.getWrappedInfo(this.time, this._wrappedInfo);
                this._sampleCurves(info.time);
                {
                  this._sampleEvents(info);
                }
                this._sampleEmbeddedPlayers(info);
                return info;
              }
              onPlay() {
                var _this$_clipEmbeddedPl2;
                this.setTime(this._getPlaybackStart());
                this._delayTime = this._delay;
                this._onReplayOrResume();
                this.emit(EventType.PLAY, this);
                (_this$_clipEmbeddedPl2 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl2 === void 0 ? void 0 : _this$_clipEmbeddedPl2.notifyHostPlay(this.current);
              }
              onStop() {
                var _this$_clipEmbeddedPl3;
                if (!this.isPaused) {
                  this._onPauseOrStop();
                }
                this.emit(EventType.STOP, this);
                (_this$_clipEmbeddedPl3 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl3 === void 0 ? void 0 : _this$_clipEmbeddedPl3.notifyHostStop();
              }
              onResume() {
                var _this$_clipEmbeddedPl4;
                this._onReplayOrResume();
                this.emit(EventType.RESUME, this);
                (_this$_clipEmbeddedPl4 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl4 === void 0 ? void 0 : _this$_clipEmbeddedPl4.notifyHostPlay(this.current);
              }
              onPause() {
                var _this$_clipEmbeddedPl5;
                this._onPauseOrStop();
                this.emit(EventType.PAUSE, this);
                (_this$_clipEmbeddedPl5 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl5 === void 0 ? void 0 : _this$_clipEmbeddedPl5.notifyHostPause(this.current);
              }
              _sampleCurves(time) {
                const {
                  _poseOutput: poseOutput,
                  _clipEval: clipEval
                } = this;
                if (poseOutput) {
                  poseOutput.weight = this.weight;
                }
                if (clipEval) {
                  clipEval.evaluate(time);
                }
              }
              _process() {
                if (this._useSimpleProcess) {
                  this.simpleProcess();
                } else {
                  this.process();
                }
              }
              process() {
                const info = this.sample();
                if (this._allowLastFrame) {
                  let lastInfo;
                  if (!this._lastWrapInfo) {
                    lastInfo = this._lastWrapInfo = new WrappedInfo(info);
                  } else {
                    lastInfo = this._lastWrapInfo;
                  }
                  if (this.repeatCount > 1 && (info.iterations | 0) > (lastInfo.iterations | 0)) {
                    this.emit(EventType.LASTFRAME, this);
                  }
                  lastInfo.set(info);
                }
                if (info.stopped) {
                  this.stop();
                  this.emit(EventType.FINISHED, this);
                }
              }
              simpleProcess() {
                const playbackStart = this._playbackRange.min;
                const playbackDuration = this._playbackDuration;
                let time = 0.0;
                let ratio = 0.0;
                if (playbackDuration !== 0.0) {
                  time = this.time % playbackDuration;
                  if (time < 0.0) {
                    time += playbackDuration;
                  }
                  const realTime = playbackStart + time;
                  ratio = realTime * this._invDuration;
                }
                this._sampleCurves(playbackStart + time);
                if (this._clipEventEval || this._clipEmbeddedPlayerEval) {
                  const wrapInfo = this.getWrappedInfo(this.time, this._wrappedInfo);
                  {
                    this._sampleEvents(wrapInfo);
                  }
                  this._sampleEmbeddedPlayers(wrapInfo);
                }
                if (this._allowLastFrame) {
                  if (Number.isNaN(this._lastIterations)) {
                    this._lastIterations = ratio;
                  }
                  if (this.time > 0 && this._lastIterations > ratio || this.time < 0 && this._lastIterations < ratio) {
                    this.emit(EventType.LASTFRAME, this);
                  }
                  this._lastIterations = ratio;
                }
              }
              _needReverse(currentIterations) {
                const wrapMode = this.wrapMode;
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
              getWrappedInfo(time, info) {
                info = info || new WrappedInfo();
                const {
                  _playbackRange: {
                    min: playbackStart
                  },
                  _playbackDuration: playbackDuration
                } = this;
                const repeatCount = this.repeatCount;
                if (playbackDuration === 0.0) {
                  info.time = 0.0;
                  info.ratio = 0.0;
                  info.direction = 1.0;
                  info.stopped = !!Number.isFinite(repeatCount);
                  info.iterations = 0.0;
                  return info;
                }
                let stopped = false;
                time -= playbackStart;
                let currentIterations = time > 0 ? time / playbackDuration : -(time / playbackDuration);
                if (currentIterations >= repeatCount) {
                  currentIterations = repeatCount;
                  stopped = true;
                  let tempRatio = repeatCount - (repeatCount | 0);
                  if (tempRatio === 0) {
                    tempRatio = 1;
                  }
                  time = tempRatio * playbackDuration * (time > 0 ? 1 : -1);
                }
                if (time > playbackDuration) {
                  const tempTime = time % playbackDuration;
                  time = tempTime === 0 ? playbackDuration : tempTime;
                } else if (time < 0) {
                  time %= playbackDuration;
                  if (time !== 0) {
                    time += playbackDuration;
                  }
                }
                let needReverse = false;
                const shouldWrap = this._wrapMode & WrapModeMask.ShouldWrap;
                if (shouldWrap) {
                  needReverse = this._needReverse(currentIterations);
                }
                let direction = needReverse ? -1 : 1;
                if (this.speed < 0) {
                  direction *= -1;
                }
                if (shouldWrap && needReverse) {
                  time = playbackDuration - time;
                }
                info.time = playbackStart + time;
                info.ratio = info.time / this.duration;
                info.direction = direction;
                info.stopped = stopped;
                info.iterations = currentIterations;
                return info;
              }
              _getPlaybackStart() {
                return this._playbackRange.min;
              }
              _sampleEvents(wrapInfo) {
                var _this$_clipEventEval3;
                (_this$_clipEventEval3 = this._clipEventEval) === null || _this$_clipEventEval3 === void 0 ? void 0 : _this$_clipEventEval3.sample(wrapInfo.ratio, wrapInfo.direction, wrapInfo.iterations);
              }
              _sampleEmbeddedPlayers(wrapInfo) {
                var _this$_clipEmbeddedPl6;
                (_this$_clipEmbeddedPl6 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl6 === void 0 ? void 0 : _this$_clipEmbeddedPl6.evaluate(wrapInfo.time, Math.trunc(wrapInfo.iterations));
              }
              _emit(type, state) {
                if (this._target && this._target.isValid) {
                  this._target.emit(type, type, state);
                }
              }
              _onReplayOrResume() {
                getGlobalAnimationManager().addAnimation(this);
              }
              _onPauseOrStop() {
                getGlobalAnimationManager().removeAnimation(this);
              }
            } exports('A', AnimationState);
            legacyCC.AnimationState = AnimationState;

            var _dec$c, _class$c, _class2$9, _initializer$9, _dec2$6, _class4$5, _class5$5, _initializer2$7;
            function isPropertyPath(path) {
              return typeof path === 'string' || typeof path === 'number';
            }
            function isCustomPath(path, constructor) {
              return path instanceof constructor;
            }
            let HierarchyPath = exports('H', (_dec$c = ccclass$1('cc.animation.HierarchyPath'), _dec$c(_class$c = (_class2$9 = class HierarchyPath {
              constructor(path) {
                this.path = _initializer$9 && _initializer$9();
                this.path = path || '';
              }
              get(target) {
                if (!(target instanceof Node)) {
                  warnID(3925);
                  return null;
                }
                const result = target.getChildByPath(this.path);
                if (!result) {
                  warnID(3926, target.name, this.path);
                  return null;
                }
                return result;
              }
            }, (_initializer$9 = applyDecoratedInitializer(_class2$9.prototype, "path", [serializable$1], function () {
              return '';
            })), _class2$9)) || _class$c));
            let ComponentPath = exports('l', (_dec2$6 = ccclass$1('cc.animation.ComponentPath'), _dec2$6(_class4$5 = (_class5$5 = class ComponentPath {
              constructor(component) {
                this.component = _initializer2$7 && _initializer2$7();
                this.component = component || '';
              }
              get(target) {
                if (!(target instanceof Node)) {
                  warnID(3927);
                  return null;
                }
                const result = target.getComponent(this.component);
                if (!result) {
                  warnID(3928, target.name, this.component);
                  return null;
                }
                return result;
              }
            }, (_initializer2$7 = applyDecoratedInitializer(_class5$5.prototype, "component", [serializable$1], function () {
              return '';
            })), _class5$5)) || _class4$5));

            var _dec$b, _class$b, _class2$8, _initializer$8, _dec2$5, _class4$4, _class5$4, _initializer2$6, _initializer3$3, _class6, _dec3$2, _class7$1, _class8$1, _initializer4$3, _dec4$2, _class10$1, _class11$1, _initializer5$3, _dec5$2, _class13$1, _class14, _initializer6$3;
            const normalizedFollowTag = exports('n', Symbol('NormalizedFollow'));
            const parseTrsPathTag = Symbol('ConvertAsTrsPath');
            const trackBindingTag = exports('t', Symbol('TrackBinding'));
            let TrackPath = exports('g', (_dec$b = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}TrackPath`), _dec$b(_class$b = (_class2$8 = class TrackPath {
              constructor() {
                this._paths = _initializer$8 && _initializer$8();
              }
              get length() {
                return this._paths.length;
              }
              toProperty(name) {
                this._paths.push(name);
                return this;
              }
              toElement(index) {
                this._paths.push(index);
                return this;
              }
              toHierarchy(nodePath) {
                this._paths.push(new HierarchyPath(nodePath));
                return this;
              }
              toComponent(constructor) {
                const path = new ComponentPath(typeof constructor === 'string' ? constructor : getClassName(constructor));
                this._paths.push(path);
                return this;
              }
              toCustomized(resolver) {
                this._paths.push(resolver);
                return this;
              }
              append(...trackPaths) {
                const paths = this._paths.concat(...trackPaths.map(trackPath => trackPath._paths));
                this._paths = paths;
                return this;
              }
              isPropertyAt(index) {
                return typeof this._paths[index] === 'string';
              }
              parsePropertyAt(index) {
                return this._paths[index];
              }
              isElementAt(index) {
                return typeof this._paths[index] === 'number';
              }
              parseElementAt(index) {
                return this._paths[index];
              }
              isHierarchyAt(index) {
                return this._paths[index] instanceof HierarchyPath;
              }
              parseHierarchyAt(index) {
                assertIsTrue(this.isHierarchyAt(index));
                return this._paths[index].path;
              }
              isComponentAt(index) {
                return this._paths[index] instanceof ComponentPath;
              }
              parseComponentAt(index) {
                assertIsTrue(this.isComponentAt(index));
                return this._paths[index].component;
              }
              slice(beginIndex, endIndex) {
                const trackPath = new TrackPath();
                trackPath._paths = this._paths.slice(beginIndex, endIndex);
                return trackPath;
              }
              trace(object, beginIndex, endIndex) {
                var _beginIndex, _endIndex;
                (_beginIndex = beginIndex) !== null && _beginIndex !== void 0 ? _beginIndex : beginIndex = 0;
                (_endIndex = endIndex) !== null && _endIndex !== void 0 ? _endIndex : endIndex = this._paths.length;
                return this[normalizedFollowTag](object, beginIndex, endIndex);
              }
              [parseTrsPathTag]() {
                const {
                  _paths: paths
                } = this;
                const nPaths = paths.length;
                let iPath = 0;
                let nodePath = '';
                for (; iPath < nPaths; ++iPath) {
                  const path = paths[iPath];
                  if (!(path instanceof HierarchyPath)) {
                    break;
                  } else if (!path.path) {
                    continue;
                  } else if (nodePath) {
                    nodePath += `/${path.path}`;
                  } else {
                    nodePath = path.path;
                  }
                }
                if (iPath === nPaths) {
                  return null;
                }
                let prs;
                if (iPath !== nPaths - 1) {
                  return null;
                }
                switch (paths[iPath]) {
                  case 'position':
                  case 'scale':
                  case 'rotation':
                  case 'eulerAngles':
                    prs = paths[iPath];
                    break;
                  default:
                    return null;
                }
                return {
                  node: nodePath,
                  property: prs
                };
              }
              [normalizedFollowTag](root, beginIndex, endIndex) {
                const {
                  _paths: paths
                } = this;
                let result = root;
                for (let iPath = beginIndex; iPath < endIndex; ++iPath) {
                  const path = paths[iPath];
                  if (isPropertyPath(path)) {
                    if (!(path in result)) {
                      warnID(3929, path);
                      return null;
                    } else {
                      result = result[path];
                    }
                  } else {
                    result = path.get(result);
                  }
                  if (result === null) {
                    break;
                  }
                }
                return result;
              }
            }, (_initializer$8 = applyDecoratedInitializer(_class2$8.prototype, "_paths", [serializable$1], function () {
              return [];
            })), _class2$8)) || _class$b));
            let TrackBinding = (_dec2$5 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}TrackBinding`), _dec2$5(_class4$4 = uniquelyReferenced(_class4$4 = (_class5$4 = (_class6 = class TrackBinding {
              constructor() {
                this.path = _initializer2$6 && _initializer2$6();
                this.proxy = _initializer3$3 && _initializer3$3();
              }
              parseTrsPath() {
                if (this.proxy) {
                  return null;
                } else {
                  return this.path[parseTrsPathTag]();
                }
              }
              createRuntimeBinding(target, poseOutput, isConstant) {
                const {
                  path,
                  proxy
                } = this;
                const nPaths = path.length;
                const iLastPath = nPaths - 1;
                if (nPaths !== 0 && (path.isPropertyAt(iLastPath) || path.isElementAt(iLastPath)) && !proxy) {
                  const lastPropertyKey = path.isPropertyAt(iLastPath) ? path.parsePropertyAt(iLastPath) : path.parseElementAt(iLastPath);
                  const resultTarget = path[normalizedFollowTag](target, 0, nPaths - 1);
                  if (resultTarget === null) {
                    return null;
                  }
                  if (poseOutput && resultTarget instanceof Node && isTrsPropertyName(lastPropertyKey)) {
                    const blendStateWriter = poseOutput.createPoseWriter(resultTarget, lastPropertyKey, isConstant);
                    return blendStateWriter;
                  }
                  let setValue;
                  let getValue;
                  {
                    let animationFunction = TrackBinding._animationFunctions.get(resultTarget.constructor);
                    if (!animationFunction) {
                      animationFunction = new Map();
                      TrackBinding._animationFunctions.set(resultTarget.constructor, animationFunction);
                    }
                    let accessor = animationFunction.get(lastPropertyKey);
                    if (!accessor) {
                      accessor = {
                        setValue: Function('value', `this.target.${lastPropertyKey} = value;`),
                        getValue: Function(`return this.target.${lastPropertyKey};`)
                      };
                      animationFunction.set(lastPropertyKey, accessor);
                    }
                    setValue = accessor.setValue;
                    getValue = accessor.getValue;
                  }
                  return {
                    target: resultTarget,
                    setValue,
                    getValue
                  };
                } else if (!proxy) {
                  errorID(3921);
                  return null;
                } else {
                  const resultTarget = path[normalizedFollowTag](target, 0, nPaths);
                  if (resultTarget === null) {
                    return null;
                  }
                  const runtimeProxy = proxy.forTarget(resultTarget);
                  if (!runtimeProxy) {
                    return null;
                  }
                  const binding = {
                    setValue: value => {
                      runtimeProxy.set(value);
                    }
                  };
                  const proxyGet = runtimeProxy.get;
                  if (proxyGet) {
                    binding.getValue = () => proxyGet.call(runtimeProxy);
                  }
                  return binding;
                }
              }
              isMaskedOff(mask) {
                const trsPath = this.parseTrsPath();
                if (!trsPath) {
                  return false;
                }
                const joints = mask.joints[Symbol.iterator]();
                for (let jointMaskInfoIter = joints.next(); !jointMaskInfoIter.done; jointMaskInfoIter = joints.next()) {
                  const {
                    value: jointMaskInfo
                  } = jointMaskInfoIter;
                  if (jointMaskInfo.path !== trsPath.node) {
                    continue;
                  }
                  return !jointMaskInfo.enabled;
                }
                return false;
              }
            }, _class6._animationFunctions = new WeakMap(), _class6), (_initializer2$6 = applyDecoratedInitializer(_class5$4.prototype, "path", [serializable$1], function () {
              return new TrackPath();
            }), _initializer3$3 = applyDecoratedInitializer(_class5$4.prototype, "proxy", [serializable$1], null)), _class5$4)) || _class4$4) || _class4$4);
            function isTrsPropertyName(name) {
              return name === 'position' || name === 'rotation' || name === 'scale' || name === 'eulerAngles';
            }
            let Track = exports('T', (_dec3$2 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}Track`), _dec3$2(_class7$1 = (_class8$1 = class Track {
              constructor() {
                this._binding = _initializer4$3 && _initializer4$3();
              }
              get path() {
                return this._binding.path;
              }
              set path(value) {
                this._binding.path = value;
              }
              get proxy() {
                return this._binding.proxy;
              }
              set proxy(value) {
                this._binding.proxy = value;
              }
              get [trackBindingTag]() {
                return this._binding;
              }
              channels() {
                return [];
              }
              range() {
                const range = {
                  min: Infinity,
                  max: -Infinity
                };
                for (const channel of this.channels()) {
                  range.min = Math.min(range.min, channel.curve.rangeMin);
                  range.max = Math.max(range.max, channel.curve.rangeMax);
                }
                return range;
              }
            }, (_initializer4$3 = applyDecoratedInitializer(_class8$1.prototype, "_binding", [serializable$1], function () {
              return new TrackBinding();
            })), _class8$1)) || _class7$1));
            let Channel = exports('a', (_dec4$2 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}Channel`), _dec4$2(_class10$1 = (_class11$1 = class Channel {
              constructor(curve) {
                this.name = '';
                this._curve = _initializer5$3 && _initializer5$3();
                this._curve = curve;
              }
              get curve() {
                return this._curve;
              }
            }, (_initializer5$3 = applyDecoratedInitializer(_class11$1.prototype, "_curve", [serializable$1], null)), _class11$1)) || _class10$1));
            let SingleChannelTrack = (_dec5$2 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}SingleChannelTrack`), _dec5$2(_class13$1 = (_class14 = class SingleChannelTrack extends Track {
              constructor() {
                super();
                this._channel = _initializer6$3 && _initializer6$3();
                this._channel = new Channel(this.createCurve());
              }
              get channel() {
                return this._channel;
              }
              channels() {
                return [this._channel];
              }
              createCurve() {
                throw new Error(`Not impl`);
              }
              [createEvalSymbol]() {
                const {
                  curve
                } = this._channel;
                return new SingleChannelTrackEval(curve);
              }
            }, (_initializer6$3 = applyDecoratedInitializer(_class14.prototype, "_channel", [serializable$1], null)), _class14)) || _class13$1);
            class SingleChannelTrackEval {
              constructor(_curve) {
                this._curve = _curve;
              }
              get requiresDefault() {
                return false;
              }
              evaluate(time) {
                return this._curve.evaluate(time);
              }
            }

            var _dec2$4, _class4$3, _class5$3, _initializer4$2, _initializer5$2, _initializer6$2;
            function makeCubicSplineValueConstructor(name, ConstructorX, scaleFx, scaleAndAdd) {
              var _dec, _class, _class2, _initializer, _initializer2, _initializer3;
              let tempValue = new ConstructorX();
              let m0 = new ConstructorX();
              let m1 = new ConstructorX();
              let CubicSplineValueClass = (_dec = ccclass$1(name), _dec(_class = (_class2 = class CubicSplineValueClass {
                constructor(dataPoint, inTangent, outTangent) {
                  this.dataPoint = _initializer && _initializer();
                  this.inTangent = _initializer2 && _initializer2();
                  this.outTangent = _initializer3 && _initializer3();
                  this.dataPoint = dataPoint || new ConstructorX();
                  this.inTangent = inTangent || new ConstructorX();
                  this.outTangent = outTangent || new ConstructorX();
                }
                lerp(to, t, dt) {
                  const p0 = this.dataPoint;
                  const p1 = to.dataPoint;
                  m0 = scaleFx(m0, this.inTangent, dt);
                  m1 = scaleFx(m1, to.outTangent, dt);
                  const t_3 = t * t * t;
                  const t_2 = t * t;
                  const f_0 = 2 * t_3 - 3 * t_2 + 1;
                  const f_1 = t_3 - 2 * t_2 + t;
                  const f_2 = -2 * t_3 + 3 * t_2;
                  const f_3 = t_3 - t_2;
                  tempValue = scaleFx(tempValue, p0, f_0);
                  tempValue = scaleAndAdd(tempValue, tempValue, m0, f_1);
                  tempValue = scaleAndAdd(tempValue, tempValue, p1, f_2);
                  tempValue = scaleAndAdd(tempValue, tempValue, m1, f_3);
                  return tempValue;
                }
                getNoLerp() {
                  return this.dataPoint;
                }
              }, (_initializer = applyDecoratedInitializer(_class2.prototype, "dataPoint", [serializable$1], function () {
                return new ConstructorX();
              }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "inTangent", [serializable$1], function () {
                return new ConstructorX();
              }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "outTangent", [serializable$1], function () {
                return new ConstructorX();
              })), _class2)) || _class);
              if (ConstructorX === Quat) {
                const lerp = CubicSplineValueClass.prototype.lerp;
                CubicSplineValueClass.prototype.lerp = function (to, t, dt) {
                  const result = lerp.call(this, to, t, dt);
                  Quat.normalize(result, result);
                  return result;
                };
              }
              return CubicSplineValueClass;
            }
            const CubicSplineVec2Value = exports('m', makeCubicSplineValueConstructor('cc.CubicSplineVec2Value', Vec2, Vec2.multiplyScalar, Vec2.scaleAndAdd));
            const CubicSplineVec3Value = exports('o', makeCubicSplineValueConstructor('cc.CubicSplineVec3Value', Vec3, Vec3.multiplyScalar, Vec3.scaleAndAdd));
            const CubicSplineVec4Value = exports('p', makeCubicSplineValueConstructor('cc.CubicSplineVec4Value', Vec4, Vec4.multiplyScalar, Vec4.scaleAndAdd));
            const CubicSplineQuatValue = exports('q', makeCubicSplineValueConstructor('cc.CubicSplineQuatValue', Quat, Quat.multiplyScalar, Quat.scaleAndAdd));
            let CubicSplineNumberValue = exports('r', (_dec2$4 = ccclass$1('cc.CubicSplineNumberValue'), _dec2$4(_class4$3 = (_class5$3 = class CubicSplineNumberValue {
              constructor(dataPoint, inTangent, outTangent) {
                this.dataPoint = _initializer4$2 && _initializer4$2();
                this.inTangent = _initializer5$2 && _initializer5$2();
                this.outTangent = _initializer6$2 && _initializer6$2();
                this.dataPoint = dataPoint;
                this.inTangent = inTangent;
                this.outTangent = outTangent;
              }
              lerp(to, t, dt) {
                const p0 = this.dataPoint;
                const p1 = to.dataPoint;
                const m0 = this.outTangent * dt;
                const m1 = to.inTangent * dt;
                const t_3 = t * t * t;
                const t_2 = t * t;
                const f_0 = 2 * t_3 - 3 * t_2 + 1;
                const f_1 = t_3 - 2 * t_2 + t;
                const f_2 = -2 * t_3 + 3 * t_2;
                const f_3 = t_3 - t_2;
                return p0 * f_0 + m0 * f_1 + p1 * f_2 + m1 * f_3;
              }
              getNoLerp() {
                return this.dataPoint;
              }
            }, (_initializer4$2 = applyDecoratedInitializer(_class5$3.prototype, "dataPoint", [serializable$1], function () {
              return 0;
            }), _initializer5$2 = applyDecoratedInitializer(_class5$3.prototype, "inTangent", [serializable$1], function () {
              return 0;
            }), _initializer6$2 = applyDecoratedInitializer(_class5$3.prototype, "outTangent", [serializable$1], function () {
              return 0;
            })), _class5$3)) || _class4$3));

            var _dec$a, _class$a;
            let RealTrack = exports('R', (_dec$a = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}RealTrack`), _dec$a(_class$a = class RealTrack extends SingleChannelTrack {
              createCurve() {
                return new RealCurve();
              }
            }) || _class$a));

            function maskIfEmpty(curve) {
              return curve.keyFramesCount === 0 ? undefined : curve;
            }

            var _dec$9, _class$9, _class2$7, _initializer$7, _initializer2$5;
            const CHANNEL_NAMES$2 = ['X', 'Y', 'Z', 'W'];
            let VectorTrack = exports('V', (_dec$9 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}VectorTrack`), _dec$9(_class$9 = (_class2$7 = class VectorTrack extends Track {
              constructor() {
                super();
                this._channels = _initializer$7 && _initializer$7();
                this._nComponents = _initializer2$5 && _initializer2$5();
                this._channels = new Array(4);
                for (let i = 0; i < this._channels.length; ++i) {
                  const channel = new Channel(new RealCurve());
                  channel.name = CHANNEL_NAMES$2[i];
                  this._channels[i] = channel;
                }
              }
              get componentsCount() {
                return this._nComponents;
              }
              set componentsCount(value) {
                this._nComponents = value;
              }
              channels() {
                return this._channels;
              }
              [createEvalSymbol]() {
                switch (this._nComponents) {
                  default:
                  case 2:
                    return new Vec2TrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve));
                  case 3:
                    return new Vec3TrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve), maskIfEmpty(this._channels[2].curve));
                  case 4:
                    return new Vec4TrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve), maskIfEmpty(this._channels[2].curve), maskIfEmpty(this._channels[3].curve));
                }
              }
            }, (_initializer$7 = applyDecoratedInitializer(_class2$7.prototype, "_channels", [serializable$1], null), _initializer2$5 = applyDecoratedInitializer(_class2$7.prototype, "_nComponents", [serializable$1], function () {
              return 4;
            })), _class2$7)) || _class$9));
            class Vec2TrackEval {
              constructor(_x, _y) {
                this._result = new Vec2();
                this._x = _x;
                this._y = _y;
              }
              get requiresDefault() {
                return !this._x || !this._y;
              }
              evaluate(time, defaultValue) {
                if (defaultValue) {
                  Vec2.copy(this._result, defaultValue);
                }
                if (this._x) {
                  this._result.x = this._x.evaluate(time);
                }
                if (this._y) {
                  this._result.y = this._y.evaluate(time);
                }
                return this._result;
              }
            }
            class Vec3TrackEval {
              constructor(_x, _y, _z) {
                this._result = new Vec3();
                this._x = _x;
                this._y = _y;
                this._z = _z;
              }
              get requiresDefault() {
                return !this._x || !this._y || !this._z;
              }
              evaluate(time, defaultValue) {
                const {
                  _x,
                  _y,
                  _z,
                  _result
                } = this;
                if (defaultValue) {
                  Vec3.copy(_result, defaultValue);
                }
                if (_x) {
                  _result.x = _x.evaluate(time);
                }
                if (_y) {
                  _result.y = _y.evaluate(time);
                }
                if (_z) {
                  _result.z = _z.evaluate(time);
                }
                return _result;
              }
            }
            class Vec4TrackEval {
              constructor(_x, _y, _z, _w) {
                this._result = new Vec4();
                this._x = _x;
                this._y = _y;
                this._z = _z;
                this._w = _w;
              }
              get requiresDefault() {
                return !this._x || !this._y || !this._z || !this._w;
              }
              evaluate(time, defaultValue) {
                if (defaultValue) {
                  Vec4.copy(this._result, defaultValue);
                }
                if (this._x) {
                  this._result.x = this._x.evaluate(time);
                }
                if (this._y) {
                  this._result.y = this._y.evaluate(time);
                }
                if (this._z) {
                  this._result.z = this._z.evaluate(time);
                }
                if (this._w) {
                  this._result.w = this._w.evaluate(time);
                }
                return this._result;
              }
            }

            var _dec$8, _class$8;
            let QuatTrack = exports('Q', (_dec$8 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}QuatTrack`), _dec$8(_class$8 = class QuatTrack extends SingleChannelTrack {
              createCurve() {
                return new QuatCurve();
              }
              [createEvalSymbol]() {
                return new QuatTrackEval(this.channels()[0].curve);
              }
            }) || _class$8));
            class QuatTrackEval {
              constructor(_curve) {
                this._result = new Quat();
                this._curve = _curve;
              }
              get requiresDefault() {
                return false;
              }
              evaluate(time) {
                this._curve.evaluate(time, this._result);
                return this._result;
              }
            }

            var _dec$7, _class$7, _class2$6, _initializer$6;
            const CHANNEL_NAMES$1 = ['Red', 'Green', 'Blue', 'Alpha'];
            let ColorTrack = exports('h', (_dec$7 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}ColorTrack`), _dec$7(_class$7 = (_class2$6 = class ColorTrack extends Track {
              constructor() {
                super();
                this._channels = _initializer$6 && _initializer$6();
                this._channels = new Array(4);
                for (let i = 0; i < this._channels.length; ++i) {
                  const channel = new Channel(new RealCurve());
                  channel.name = CHANNEL_NAMES$1[i];
                  this._channels[i] = channel;
                }
              }
              channels() {
                return this._channels;
              }
              [createEvalSymbol]() {
                return new ColorTrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve), maskIfEmpty(this._channels[2].curve), maskIfEmpty(this._channels[3].curve));
              }
            }, (_initializer$6 = applyDecoratedInitializer(_class2$6.prototype, "_channels", [serializable$1], null)), _class2$6)) || _class$7));
            class ColorTrackEval {
              constructor(_x, _y, _z, _w) {
                this._result = new Color();
                this._x = _x;
                this._y = _y;
                this._z = _z;
                this._w = _w;
              }
              get requiresDefault() {
                return !this._x || !this._y || !this._z || !this._w;
              }
              evaluate(time, defaultValue) {
                if (defaultValue) {
                  Color.copy(this._result, defaultValue);
                }
                if (this._x) {
                  this._result.r = this._x.evaluate(time);
                }
                if (this._y) {
                  this._result.g = this._y.evaluate(time);
                }
                if (this._z) {
                  this._result.b = this._z.evaluate(time);
                }
                if (this._w) {
                  this._result.a = this._w.evaluate(time);
                }
                return this._result;
              }
            }

            var _dec$6, _class$6, _class2$5, _initializer$5;
            const CHANNEL_NAMES = ['Width', 'Height'];
            let SizeTrack = exports('S', (_dec$6 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}SizeTrack`), _dec$6(_class$6 = (_class2$5 = class SizeTrack extends Track {
              constructor() {
                super();
                this._channels = _initializer$5 && _initializer$5();
                this._channels = new Array(2);
                for (let i = 0; i < this._channels.length; ++i) {
                  const channel = new Channel(new RealCurve());
                  channel.name = CHANNEL_NAMES[i];
                  this._channels[i] = channel;
                }
              }
              channels() {
                return this._channels;
              }
              [createEvalSymbol]() {
                return new SizeTrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve));
              }
            }, (_initializer$5 = applyDecoratedInitializer(_class2$5.prototype, "_channels", [serializable$1], null)), _class2$5)) || _class$6));
            class SizeTrackEval {
              constructor(_width, _height) {
                this._result = new Size();
                this._width = _width;
                this._height = _height;
              }
              get requiresDefault() {
                return !this._width || !this._height;
              }
              evaluate(time, defaultValue) {
                if (defaultValue) {
                  this._result.x = defaultValue.x;
                  this._result.y = defaultValue.y;
                }
                if (this._width) {
                  this._result.width = this._width.evaluate(time);
                }
                if (this._height) {
                  this._result.height = this._height.evaluate(time);
                }
                return this._result;
              }
            }

            var _dec$5, _class$5;
            let ObjectTrack = exports('O', (_dec$5 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}ObjectTrack`), _dec$5(_class$5 = class ObjectTrack extends SingleChannelTrack {
              createCurve() {
                return new ObjectCurve();
              }
            }) || _class$5));

            function invokeComponentMethodsEngagedInAnimationEvent(node, methodName, args) {
              const components = node.components;
              const nComponents = components.length;
              for (let iComponent = 0; iComponent < nComponents; ++iComponent) {
                const component = components[iComponent];
                const fx = component[methodName];
                if (typeof fx === 'function') {
                  fx.apply(component, args);
                }
              }
            }

            const BAKE_SKELETON_CURVE_SYMBOL = Symbol('BakeNodeCurves');

            class SkelAnimDataHub {
              static getOrExtract(clip) {
                let data = SkelAnimDataHub.pool.get(clip);
                if (!data || data.samples !== clip.sample) {
                  if (data) {
                    legacyCC.director.root.dataPoolManager.releaseAnimationClip(clip);
                  }
                  const frames = Math.ceil(clip.sample * clip.duration) + 1;
                  const step = clip.sample;
                  data = clip[BAKE_SKELETON_CURVE_SYMBOL](0, step, frames);
                  SkelAnimDataHub.pool.set(clip, data);
                }
                return data;
              }
              static destroy(clip) {
                SkelAnimDataHub.pool.delete(clip);
              }
            } exports('y', SkelAnimDataHub);
            SkelAnimDataHub.pool = new Map();

            class RatioSampler {
              constructor(ratios) {
                this.ratios = void 0;
                this._findRatio = void 0;
                this.ratios = ratios;
                let currRatioDif;
                let lastRatioDif;
                let canOptimize = true;
                const EPSILON = 1e-6;
                for (let i = 1, l = ratios.length; i < l; i++) {
                  currRatioDif = ratios[i] - ratios[i - 1];
                  if (i === 1) {
                    lastRatioDif = currRatioDif;
                  } else if (Math.abs(currRatioDif - lastRatioDif) > EPSILON) {
                    canOptimize = false;
                    break;
                  }
                }
                this._findRatio = canOptimize ? quickFindIndex : binarySearchEpsilon;
              }
              sample(ratio) {
                return this._findRatio(this.ratios, ratio);
              }
            } exports('u', RatioSampler);
            legacyCC.RatioSampler = RatioSampler;
            class AnimCurve {
              static Bezier(controlPoints) {
                return controlPoints;
              }
              constructor(propertyCurveData, duration) {
                this.types = undefined;
                this.type = null;
                this._values = [];
                this._lerp = undefined;
                this._duration = void 0;
                this._array = void 0;
                this._duration = duration;
                this._values = propertyCurveData.values;
                const getCurveType = easingMethod => {
                  if (typeof easingMethod === 'string') {
                    return easingMethod;
                  } else if (Array.isArray(easingMethod)) {
                    if (easingMethod[0] === easingMethod[1] && easingMethod[2] === easingMethod[3]) {
                      return AnimCurve.Linear;
                    } else {
                      return AnimCurve.Bezier(easingMethod);
                    }
                  } else {
                    return AnimCurve.Linear;
                  }
                };
                if (propertyCurveData.easingMethod !== undefined) {
                  this.type = getCurveType(propertyCurveData.easingMethod);
                } else if (Array.isArray(propertyCurveData.easingMethods)) {
                  this.types = propertyCurveData.easingMethods.map(getCurveType);
                } else if (propertyCurveData.easingMethods !== undefined) {
                  this.types = new Array(this._values.length).fill(null);
                  for (const index of Object.keys(propertyCurveData.easingMethods)) {
                    this.types[index] = getCurveType(propertyCurveData.easingMethods[index]);
                  }
                } else {
                  this.type = null;
                }
                const firstValue = propertyCurveData.values[0];
                const interpolate = propertyCurveData.interpolate === undefined ? true : propertyCurveData.interpolate;
                if (interpolate) {
                  this._lerp = selectLerpFx(firstValue);
                }
                if (propertyCurveData._arrayLength !== undefined) {
                  this._array = new Array(propertyCurveData._arrayLength);
                }
              }
              hasLerp() {
                return !!this._lerp;
              }
              valueAt(index) {
                if (this._array === undefined) {
                  const value = this._values[index];
                  if (value && value.getNoLerp) {
                    return value.getNoLerp();
                  } else {
                    return value;
                  }
                } else {
                  for (let i = 0; i < this._array.length; ++i) {
                    this._array[i] = this._values[this._array.length * index + i];
                  }
                  return this._array;
                }
              }
              valueBetween(ratio, from, fromRatio, to, toRatio) {
                if (this._lerp) {
                  const type = this.types ? this.types[from] : this.type;
                  const dRatio = toRatio - fromRatio;
                  let ratioBetweenFrames = (ratio - fromRatio) / dRatio;
                  if (type) {
                    ratioBetweenFrames = computeRatioByType(ratioBetweenFrames, type);
                  }
                  if (this._array === undefined) {
                    const fromVal = this._values[from];
                    const toVal = this._values[to];
                    const value = this._lerp(fromVal, toVal, ratioBetweenFrames, dRatio * this._duration);
                    return value;
                  } else {
                    for (let i = 0; i < this._array.length; ++i) {
                      const fromVal = this._values[this._array.length * from + i];
                      const toVal = this._values[this._array.length * to + i];
                      this._array[i] = this._lerp(fromVal, toVal, ratioBetweenFrames, dRatio * this._duration);
                    }
                    return this._array;
                  }
                } else if (this._array === undefined) {
                  return this.valueAt(from);
                } else {
                  for (let i = 0; i < this._array.length; ++i) {
                    this._array[i] = this._values[this._array.length * from + i];
                  }
                  return this._array;
                }
              }
              empty() {
                return this._values.length === 0;
              }
              constant() {
                return this._values.length === 1;
              }
            } exports('v', AnimCurve);
            AnimCurve.Linear = null;
            legacyCC.AnimCurve = AnimCurve;
            class EventInfo {
              constructor() {
                this.events = [];
              }
              add(func, params) {
                this.events.push({
                  func: func || '',
                  params: params || []
                });
              }
            } exports('E', EventInfo);
            function sampleAnimationCurve(curve, sampler, ratio) {
              let index = sampler.sample(ratio);
              if (index < 0) {
                index = ~index;
                if (index <= 0) {
                  index = 0;
                } else if (index >= sampler.ratios.length) {
                  index = sampler.ratios.length - 1;
                } else {
                  return curve.valueBetween(ratio, index - 1, sampler.ratios[index - 1], index, sampler.ratios[index]);
                }
              }
              return curve.valueAt(index);
            }
            legacyCC.sampleAnimationCurve = sampleAnimationCurve;
            function computeRatioByType(ratio, type) {
              if (typeof type === 'string') {
                const func = easing[type];
                if (func) {
                  ratio = func(ratio);
                } else {
                  errorID(3906, type);
                }
              } else if (Array.isArray(type)) {
                ratio = bezierByTime(type, ratio);
              }
              return ratio;
            }
            function quickFindIndex(ratios, ratio) {
              const length = ratios.length - 1;
              if (length === 0) {
                return 0;
              }
              const start = ratios[0];
              if (ratio < start) {
                return 0;
              }
              const end = ratios[length];
              if (ratio > end) {
                return length;
              }
              ratio = (ratio - start) / (end - start);
              const eachLength = 1 / length;
              const index = ratio / eachLength;
              const floorIndex = index | 0;
              const EPSILON = 1e-6;
              if (index - floorIndex < EPSILON) {
                return floorIndex;
              } else if (floorIndex + 1 - index < EPSILON) {
                return floorIndex + 1;
              }
              return ~(floorIndex + 1);
            }
            const selectLerpFx = (() => {
              function makeValueTypeLerpFx(constructor) {
                const tempValue = new constructor();
                return (from, to, ratio) => {
                  constructor.lerp(tempValue, from, to, ratio);
                  return tempValue;
                };
              }
              function callLerpable(from, to, t, dt) {
                return from.lerp(to, t, dt);
              }
              function makeQuatSlerpFx() {
                const tempValue = new Quat();
                return (from, to, t, dt) => Quat.slerp(tempValue, from, to, t);
              }
              return value => {
                if (value === null) {
                  return undefined;
                }
                if (typeof value === 'number') {
                  return lerp;
                } else if (typeof value === 'object' && value.constructor) {
                  if (value instanceof Quat) {
                    return makeQuatSlerpFx();
                  } else if (value instanceof ValueType) {
                    return makeValueTypeLerpFx(value.constructor);
                  } else if (value.constructor === Number) {
                    return lerp;
                  } else if (isLerpable(value)) {
                    return callLerpable;
                  }
                }
                return undefined;
              };
            })();

            var _dec$4, _class$4, _class2$4, _initializer$4, _dec2$3, _class4$2, _class5$2, _initializer2$4;
            let UntypedTrackChannel = (_dec$4 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}UntypedTrackChannel`), _dec$4(_class$4 = (_class2$4 = class UntypedTrackChannel extends Channel {
              constructor() {
                super(new RealCurve());
                this.property = _initializer$4 && _initializer$4();
              }
            }, (_initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "property", [serializable$1], function () {
              return '';
            })), _class2$4)) || _class$4);
            let UntypedTrack = exports('U', (_dec2$3 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}UntypedTrack`), _dec2$3(_class4$2 = (_class5$2 = class UntypedTrack extends Track {
              constructor(...args) {
                super(...args);
                this._channels = _initializer2$4 && _initializer2$4();
              }
              channels() {
                return this._channels;
              }
              [createEvalSymbol]() {
                throw new Error(`UntypedTrack should be handled specially. Please file an issue.`);
              }
              createLegacyEval(hintValue) {
                const trySearchCurve = property => {
                  var _this$_channels$find;
                  return (_this$_channels$find = this._channels.find(channel => channel.property === property)) === null || _this$_channels$find === void 0 ? void 0 : _this$_channels$find.curve;
                };
                switch (true) {
                  default:
                    throw new Error(getError(3931));
                  case hintValue instanceof Vec2:
                    return new Vec2TrackEval(trySearchCurve('x'), trySearchCurve('y'));
                  case hintValue instanceof Vec3:
                    return new Vec3TrackEval(trySearchCurve('x'), trySearchCurve('y'), trySearchCurve('z'));
                  case hintValue instanceof Vec4:
                    return new Vec4TrackEval(trySearchCurve('x'), trySearchCurve('y'), trySearchCurve('z'), trySearchCurve('w'));
                  case hintValue instanceof Color:
                    return new ColorTrackEval(trySearchCurve('r'), trySearchCurve('g'), trySearchCurve('b'), trySearchCurve('a'));
                  case hintValue instanceof Size:
                    return new SizeTrackEval(trySearchCurve('width'), trySearchCurve('height'));
                }
              }
              addChannel(property) {
                const channel = new UntypedTrackChannel();
                channel.property = property;
                this._channels.push(channel);
                return channel;
              }
              upgrade(refine) {
                const trySearchChannel = (property, outChannel) => {
                  const untypedChannel = this.channels().find(channel => channel.property === property);
                  if (untypedChannel) {
                    outChannel.name = untypedChannel.name;
                    outChannel.curve.assignSorted(Array.from(untypedChannel.curve.times()), Array.from(untypedChannel.curve.values()));
                  }
                };
                const kind = refine(this.path, this.proxy);
                switch (kind) {
                  default:
                    break;
                  case 'vec2':
                  case 'vec3':
                  case 'vec4':
                    {
                      const track = new VectorTrack();
                      track.path = this.path;
                      track.proxy = this.proxy;
                      track.componentsCount = kind === 'vec2' ? 2 : kind === 'vec3' ? 3 : 4;
                      const [x, y, z, w] = track.channels();
                      switch (kind) {
                        case 'vec4':
                          trySearchChannel('w', w);
                        case 'vec3':
                          trySearchChannel('z', z);
                        default:
                        case 'vec2':
                          trySearchChannel('x', x);
                          trySearchChannel('y', y);
                      }
                      return track;
                    }
                  case 'color':
                    {
                      const track = new ColorTrack();
                      const [r, g, b, a] = track.channels();
                      trySearchChannel('r', r);
                      trySearchChannel('g', g);
                      trySearchChannel('b', b);
                      trySearchChannel('a', a);
                      trySearchChannel('x', r);
                      trySearchChannel('y', g);
                      trySearchChannel('z', b);
                      trySearchChannel('w', a);
                      return track;
                    }
                  case 'size':
                    break;
                }
                return null;
              }
            }, (_initializer2$4 = applyDecoratedInitializer(_class5$2.prototype, "_channels", [serializable$1], function () {
              return [];
            })), _class5$2)) || _class4$2));

            class AnimationClipLegacyData {
              constructor(duration) {
                this._keys = [];
                this._curves = [];
                this._commonTargets = [];
                this._ratioSamplers = [];
                this._runtimeCurves = void 0;
                this._data = null;
                this._duration = void 0;
                this._duration = duration;
              }
              get keys() {
                return this._keys;
              }
              set keys(value) {
                this._keys = value;
              }
              get curves() {
                return this._curves;
              }
              set curves(value) {
                this._curves = value;
                delete this._runtimeCurves;
              }
              get commonTargets() {
                return this._commonTargets;
              }
              set commonTargets(value) {
                this._commonTargets = value;
              }
              get data() {
                return this._data;
              }
              getPropertyCurves() {
                if (!this._runtimeCurves) {
                  this._createPropertyCurves();
                }
                return this._runtimeCurves;
              }
              toTracks() {
                const newTracks = [];
                const {
                  keys: legacyKeys,
                  curves: legacyCurves,
                  commonTargets: legacyCommonTargets
                } = this;
                const convertTrackPath = (track, modifiers, valueAdapter) => {
                  const trackPath = new TrackPath();
                  for (const modifier of modifiers) {
                    if (typeof modifier === 'string') {
                      trackPath.toProperty(modifier);
                    } else if (typeof modifier === 'number') {
                      trackPath.toElement(modifier);
                    } else if (modifier instanceof HierarchyPath) {
                      trackPath.toHierarchy(modifier.path);
                    } else if (modifier instanceof ComponentPath) {
                      trackPath.toComponent(modifier.component);
                    } else {
                      trackPath.toCustomized(modifier);
                    }
                  }
                  track.path = trackPath;
                  track.proxy = valueAdapter;
                };
                const untypedTracks = legacyCommonTargets.map(legacyCommonTarget => {
                  const track = new UntypedTrack();
                  convertTrackPath(track, legacyCommonTarget.modifiers, legacyCommonTarget.valueAdapter);
                  newTracks.push(track);
                  return track;
                });
                for (const legacyCurve of legacyCurves) {
                  var _legacyCurveData$inte;
                  const legacyCurveData = legacyCurve.data;
                  const legacyValues = legacyCurveData.values;
                  if (legacyValues.length === 0) {
                    continue;
                  }
                  const legacyKeysIndex = legacyCurveData.keys;
                  const times = legacyKeysIndex < 0 ? [0.0] : legacyKeys[legacyCurveData.keys];
                  const firstValue = legacyValues[0];
                  const interpolate = (_legacyCurveData$inte = legacyCurveData.interpolate) !== null && _legacyCurveData$inte !== void 0 ? _legacyCurveData$inte : true;
                  assertIsTrue(typeof legacyCurveData._arrayLength !== 'number' || typeof firstValue === 'number');
                  const legacyEasingMethodConverter = new LegacyEasingMethodConverter(legacyCurveData, times.length);
                  const installPathAndSetter = track => {
                    convertTrackPath(track, legacyCurve.modifiers, legacyCurve.valueAdapter);
                  };
                  let legacyCommonTargetCurve;
                  if (typeof legacyCurve.commonTarget === 'number') {
                    if (!legacyValues.every(value => typeof value === 'number')) {
                      warnID(3932);
                      continue;
                    }
                    if (legacyCurve.valueAdapter || legacyCurve.modifiers.length !== 1 || typeof legacyCurve.modifiers[0] !== 'string') {
                      warnID(3933);
                      continue;
                    }
                    const propertyName = legacyCurve.modifiers[0];
                    const untypedTrack = untypedTracks[legacyCurve.commonTarget];
                    const {
                      curve
                    } = untypedTrack.addChannel(propertyName);
                    legacyCommonTargetCurve = curve;
                  }
                  const convertCurve = () => {
                    if (typeof firstValue === 'number') {
                      if (!legacyValues.every(value => typeof value === 'number')) {
                        warnID(3934);
                        return;
                      }
                      let realCurve;
                      if (legacyCommonTargetCurve) {
                        realCurve = legacyCommonTargetCurve;
                      } else {
                        const track = new RealTrack();
                        installPathAndSetter(track);
                        newTracks.push(track);
                        realCurve = track.channel.curve;
                      }
                      const interpolationMethod = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                      realCurve.assignSorted(times, legacyValues.map(value => ({
                        value,
                        interpolationMode: interpolationMethod
                      })));
                      legacyEasingMethodConverter.convert(realCurve);
                      return;
                    } else if (typeof firstValue === 'object') {
                      switch (true) {
                        default:
                          break;
                        case everyInstanceOf(legacyValues, Vec2):
                        case everyInstanceOf(legacyValues, Vec3):
                        case everyInstanceOf(legacyValues, Vec4):
                          {
                            const components = firstValue instanceof Vec2 ? 2 : firstValue instanceof Vec3 ? 3 : 4;
                            const track = new VectorTrack();
                            installPathAndSetter(track);
                            track.componentsCount = components;
                            const [{
                              curve: x
                            }, {
                              curve: y
                            }, {
                              curve: z
                            }, {
                              curve: w
                            }] = track.channels();
                            const interpolationMode = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                            const valueToFrame = value => ({
                              value,
                              interpolationMode
                            });
                            switch (components) {
                              case 4:
                                w.assignSorted(times, legacyValues.map(value => valueToFrame(value.w)));
                                legacyEasingMethodConverter.convert(w);
                              case 3:
                                z.assignSorted(times, legacyValues.map(value => valueToFrame(value.z)));
                                legacyEasingMethodConverter.convert(z);
                              default:
                                x.assignSorted(times, legacyValues.map(value => valueToFrame(value.x)));
                                legacyEasingMethodConverter.convert(x);
                                y.assignSorted(times, legacyValues.map(value => valueToFrame(value.y)));
                                legacyEasingMethodConverter.convert(y);
                                break;
                            }
                            newTracks.push(track);
                            return;
                          }
                        case everyInstanceOf(legacyValues, Quat):
                          {
                            const track = new QuatTrack();
                            installPathAndSetter(track);
                            const interpolationMode = interpolate ? QuatInterpolationMode.SLERP : QuatInterpolationMode.CONSTANT;
                            track.channel.curve.assignSorted(times, legacyValues.map(value => ({
                              value: Quat.clone(value),
                              interpolationMode
                            })));
                            legacyEasingMethodConverter.convertQuatCurve(track.channel.curve);
                            newTracks.push(track);
                            return;
                          }
                        case everyInstanceOf(legacyValues, Color):
                          {
                            const track = new ColorTrack();
                            installPathAndSetter(track);
                            const [{
                              curve: r
                            }, {
                              curve: g
                            }, {
                              curve: b
                            }, {
                              curve: a
                            }] = track.channels();
                            const interpolationMode = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                            const valueToFrame = value => ({
                              value,
                              interpolationMode
                            });
                            r.assignSorted(times, legacyValues.map(value => valueToFrame(value.r)));
                            legacyEasingMethodConverter.convert(r);
                            g.assignSorted(times, legacyValues.map(value => valueToFrame(value.g)));
                            legacyEasingMethodConverter.convert(g);
                            b.assignSorted(times, legacyValues.map(value => valueToFrame(value.b)));
                            legacyEasingMethodConverter.convert(b);
                            a.assignSorted(times, legacyValues.map(value => valueToFrame(value.a)));
                            legacyEasingMethodConverter.convert(a);
                            newTracks.push(track);
                            return;
                          }
                        case everyInstanceOf(legacyValues, Size):
                          {
                            const track = new SizeTrack();
                            installPathAndSetter(track);
                            const [{
                              curve: width
                            }, {
                              curve: height
                            }] = track.channels();
                            const interpolationMode = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                            const valueToFrame = value => ({
                              value,
                              interpolationMode
                            });
                            width.assignSorted(times, legacyValues.map(value => valueToFrame(value.width)));
                            legacyEasingMethodConverter.convert(width);
                            height.assignSorted(times, legacyValues.map(value => valueToFrame(value.height)));
                            legacyEasingMethodConverter.convert(height);
                            newTracks.push(track);
                            return;
                          }
                        case everyInstanceOf(legacyValues, CubicSplineNumberValue):
                          {
                            assertIsTrue(legacyEasingMethodConverter.nil);
                            const track = new RealTrack();
                            installPathAndSetter(track);
                            const interpolationMode = interpolate ? RealInterpolationMode.CUBIC : RealInterpolationMode.CONSTANT;
                            track.channel.curve.assignSorted(times, legacyValues.map(value => ({
                              value: value.dataPoint,
                              leftTangent: value.inTangent,
                              rightTangent: value.outTangent,
                              interpolationMode
                            })));
                            newTracks.push(track);
                            return;
                          }
                        case everyInstanceOf(legacyValues, CubicSplineVec2Value):
                        case everyInstanceOf(legacyValues, CubicSplineVec3Value):
                        case everyInstanceOf(legacyValues, CubicSplineVec4Value):
                          {
                            assertIsTrue(legacyEasingMethodConverter.nil);
                            const components = firstValue instanceof CubicSplineVec2Value ? 2 : firstValue instanceof CubicSplineVec3Value ? 3 : 4;
                            const track = new VectorTrack();
                            installPathAndSetter(track);
                            track.componentsCount = components;
                            const [x, y, z, w] = track.channels();
                            const interpolationMode = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                            const valueToFrame = (value, inTangent, outTangent) => ({
                              value,
                              leftTangent: inTangent,
                              rightTangent: outTangent,
                              interpolationMode
                            });
                            switch (components) {
                              case 4:
                                w.curve.assignSorted(times, legacyValues.map(value => valueToFrame(value.dataPoint.w, value.inTangent.w, value.outTangent.w)));
                              case 3:
                                z.curve.assignSorted(times, legacyValues.map(value => valueToFrame(value.dataPoint.z, value.inTangent.z, value.outTangent.z)));
                              default:
                                x.curve.assignSorted(times, legacyValues.map(value => valueToFrame(value.dataPoint.y, value.inTangent.y, value.outTangent.y)));
                                y.curve.assignSorted(times, legacyValues.map(value => valueToFrame(value.dataPoint.x, value.inTangent.x, value.outTangent.x)));
                                break;
                            }
                            newTracks.push(track);
                            return;
                          }
                        case legacyValues.every(value => value instanceof CubicSplineQuatValue):
                          {
                            warnID(3935);
                            break;
                          }
                      }
                    }
                    const objectTrack = new ObjectTrack();
                    installPathAndSetter(objectTrack);
                    objectTrack.channel.curve.assignSorted(times, legacyValues);
                    newTracks.push(objectTrack);
                  };
                  convertCurve();
                }
                return newTracks;
              }
              _createPropertyCurves() {
                this._ratioSamplers = this._keys.map(keys => new RatioSampler(keys.map(key => key / this._duration)));
                this._runtimeCurves = this._curves.map(targetCurve => ({
                  curve: new AnimCurve(targetCurve.data, this._duration),
                  modifiers: targetCurve.modifiers,
                  valueAdapter: targetCurve.valueAdapter,
                  sampler: this._ratioSamplers[targetCurve.data.keys],
                  commonTarget: targetCurve.commonTarget
                }));
              }
            }
            function everyInstanceOf(array, constructor) {
              return array.every(element => element instanceof constructor);
            }
            class LegacyEasingMethodConverter {
              constructor(legacyCurveData, keyframesCount) {
                this._easingMethods = void 0;
                const {
                  easingMethods
                } = legacyCurveData;
                if (Array.isArray(easingMethods)) {
                  if (easingMethods.length === 0 && keyframesCount !== 0) {
                    this._easingMethods = new Array(keyframesCount).fill(null);
                  } else {
                    this._easingMethods = easingMethods;
                  }
                } else if (easingMethods === undefined) {
                  this._easingMethods = new Array(keyframesCount).fill(legacyCurveData.easingMethod);
                } else {
                  this._easingMethods = Array.from({
                    length: keyframesCount
                  }, (_, index) => {
                    var _easingMethods$index;
                    return (_easingMethods$index = easingMethods[index]) !== null && _easingMethods$index !== void 0 ? _easingMethods$index : null;
                  });
                }
              }
              get nil() {
                return !this._easingMethods || this._easingMethods.every(easingMethod => easingMethod === null || easingMethod === undefined);
              }
              convert(curve) {
                const {
                  _easingMethods: easingMethods
                } = this;
                if (!easingMethods) {
                  return;
                }
                const nKeyframes = curve.keyFramesCount;
                if (curve.keyFramesCount < 2) {
                  return;
                }
                if (Array.isArray(easingMethods)) {
                  assertIsTrue(nKeyframes === easingMethods.length);
                }
                const iLastKeyframe = nKeyframes - 1;
                for (let iKeyframe = 0; iKeyframe < iLastKeyframe; ++iKeyframe) {
                  const easingMethod = easingMethods[iKeyframe];
                  if (!easingMethod) {
                    continue;
                  }
                  if (Array.isArray(easingMethod)) {
                    timeBezierToTangents(easingMethod, curve.getKeyframeTime(iKeyframe), curve.getKeyframeValue(iKeyframe), curve.getKeyframeTime(iKeyframe + 1), curve.getKeyframeValue(iKeyframe + 1));
                  } else {
                    applyLegacyEasingMethodName(easingMethod, curve, iKeyframe);
                  }
                }
              }
              convertQuatCurve(curve) {
                const {
                  _easingMethods: easingMethods
                } = this;
                if (!easingMethods) {
                  return;
                }
                const nKeyframes = curve.keyFramesCount;
                if (curve.keyFramesCount < 2) {
                  return;
                }
                if (Array.isArray(easingMethods)) {
                  assertIsTrue(nKeyframes === easingMethods.length);
                }
                const iLastKeyframe = nKeyframes - 1;
                for (let iKeyframe = 0; iKeyframe < iLastKeyframe; ++iKeyframe) {
                  const easingMethod = easingMethods[iKeyframe];
                  if (!easingMethod) {
                    continue;
                  }
                  if (Array.isArray(easingMethod)) {
                    curve.getKeyframeValue(iKeyframe).easingMethod = easingMethod.slice();
                  } else {
                    applyLegacyEasingMethodNameIntoQuatCurve(easingMethod, curve, iKeyframe);
                  }
                }
              }
            }
            function applyLegacyEasingMethodName(easingMethodName, curve, keyframeIndex) {
              assertIsTrue(keyframeIndex !== curve.keyFramesCount - 1);
              assertIsTrue(easingMethodName in easingMethodNameMap);
              const keyframeValue = curve.getKeyframeValue(keyframeIndex);
              const easingMethod = easingMethodNameMap[easingMethodName];
              if (easingMethod === EasingMethod.CONSTANT) {
                keyframeValue.interpolationMode = RealInterpolationMode.CONSTANT;
              } else {
                keyframeValue.interpolationMode = RealInterpolationMode.LINEAR;
                keyframeValue.easingMethod = easingMethod;
              }
            }
            function applyLegacyEasingMethodNameIntoQuatCurve(easingMethodName, curve, keyframeIndex) {
              assertIsTrue(keyframeIndex !== curve.keyFramesCount - 1);
              assertIsTrue(easingMethodName in easingMethodNameMap);
              const keyframeValue = curve.getKeyframeValue(keyframeIndex);
              const easingMethod = easingMethodNameMap[easingMethodName];
              keyframeValue.easingMethod = easingMethod;
            }
            const easingMethodNameMap = {
              constant: EasingMethod.CONSTANT,
              linear: EasingMethod.LINEAR,
              quadIn: EasingMethod.QUAD_IN,
              quadOut: EasingMethod.QUAD_OUT,
              quadInOut: EasingMethod.QUAD_IN_OUT,
              quadOutIn: EasingMethod.QUAD_OUT_IN,
              cubicIn: EasingMethod.CUBIC_IN,
              cubicOut: EasingMethod.CUBIC_OUT,
              cubicInOut: EasingMethod.CUBIC_IN_OUT,
              cubicOutIn: EasingMethod.CUBIC_OUT_IN,
              quartIn: EasingMethod.QUART_IN,
              quartOut: EasingMethod.QUART_OUT,
              quartInOut: EasingMethod.QUART_IN_OUT,
              quartOutIn: EasingMethod.QUART_OUT_IN,
              quintIn: EasingMethod.QUINT_IN,
              quintOut: EasingMethod.QUINT_OUT,
              quintInOut: EasingMethod.QUINT_IN_OUT,
              quintOutIn: EasingMethod.QUINT_OUT_IN,
              sineIn: EasingMethod.SINE_IN,
              sineOut: EasingMethod.SINE_OUT,
              sineInOut: EasingMethod.SINE_IN_OUT,
              sineOutIn: EasingMethod.SINE_OUT_IN,
              expoIn: EasingMethod.EXPO_IN,
              expoOut: EasingMethod.EXPO_OUT,
              expoInOut: EasingMethod.EXPO_IN_OUT,
              expoOutIn: EasingMethod.EXPO_OUT_IN,
              circIn: EasingMethod.CIRC_IN,
              circOut: EasingMethod.CIRC_OUT,
              circInOut: EasingMethod.CIRC_IN_OUT,
              circOutIn: EasingMethod.CIRC_OUT_IN,
              elasticIn: EasingMethod.ELASTIC_IN,
              elasticOut: EasingMethod.ELASTIC_OUT,
              elasticInOut: EasingMethod.ELASTIC_IN_OUT,
              elasticOutIn: EasingMethod.ELASTIC_OUT_IN,
              backIn: EasingMethod.BACK_IN,
              backOut: EasingMethod.BACK_OUT,
              backInOut: EasingMethod.BACK_IN_OUT,
              backOutIn: EasingMethod.BACK_OUT_IN,
              bounceIn: EasingMethod.BOUNCE_IN,
              bounceOut: EasingMethod.BOUNCE_OUT,
              bounceInOut: EasingMethod.BOUNCE_IN_OUT,
              bounceOutIn: EasingMethod.BOUNCE_OUT_IN,
              smooth: EasingMethod.SMOOTH,
              fade: EasingMethod.FADE
            };
            function timeBezierToTangents(timeBezierPoints, previousTime, previousKeyframe, nextTime, nextKeyframe) {
              const [p1X, p1Y, p2X, p2Y] = timeBezierPoints;
              const {
                value: previousValue
              } = previousKeyframe;
              const {
                value: nextValue
              } = nextKeyframe;
              const dValue = nextValue - previousValue;
              const dTime = nextTime - previousTime;
              const fx = 3 * dTime;
              const fy = 3 * dValue;
              const t1x = p1X * fx;
              const t1y = p1Y * fy;
              const t2x = (1.0 - p2X) * fx;
              const t2y = (1.0 - p2Y) * fy;
              const ONE_THIRD = 1.0 / 3.0;
              const previousTangent = t1y / t1x;
              const previousTangentWeight = Math.sqrt(t1x * t1x + t1y * t1y) * ONE_THIRD;
              const nextTangent = t2y / t2x;
              const nextTangentWeight = Math.sqrt(t2x * t2x + t2y * t2y) * ONE_THIRD;
              previousKeyframe.interpolationMode = RealInterpolationMode.CUBIC;
              previousKeyframe.tangentWeightMode = ensureRightTangentWeightMode(previousKeyframe.tangentWeightMode);
              previousKeyframe.rightTangent = previousTangent;
              previousKeyframe.rightTangentWeight = previousTangentWeight;
              nextKeyframe.tangentWeightMode = ensureLeftTangentWeightMode(nextKeyframe.tangentWeightMode);
              nextKeyframe.leftTangent = nextTangent;
              nextKeyframe.leftTangentWeight = nextTangentWeight;
            }
            function ensureLeftTangentWeightMode(tangentWeightMode) {
              if (tangentWeightMode === TangentWeightMode.NONE) {
                return TangentWeightMode.LEFT;
              } else if (tangentWeightMode === TangentWeightMode.RIGHT) {
                return TangentWeightMode.BOTH;
              } else {
                return tangentWeightMode;
              }
            }
            function ensureRightTangentWeightMode(tangentWeightMode) {
              if (tangentWeightMode === TangentWeightMode.NONE) {
                return TangentWeightMode.RIGHT;
              } else if (tangentWeightMode === TangentWeightMode.LEFT) {
                return TangentWeightMode.BOTH;
              } else {
                return tangentWeightMode;
              }
            }

            var _dec$3, _class$3, _class2$3, _initializer$3, _dec2$2, _class4$1, _class5$1, _initializer2$3, _initializer3$2, _initializer4$1, _initializer5$1, _dec3$1, _class7, _class8, _initializer6$1, _initializer7$1, _dec4$1, _class10, _dec5$1, _class11, _dec6, _class12, _class13, _initializer8$1, _initializer9$1, _dec7, _class20, _class21, _initializer10$1, _initializer11$1, _initializer12$1, _initializer13$1;
            const {
              ccclass,
              serializable
            } = _decorator;
            function throwIfSplitMethodIsNotValid() {
              throw new Error(`split() only valid in Editor.`);
            }
            (_dec$3 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ExoticAnimation`), _dec$3(_class$3 = (_class2$3 = class ExoticAnimation {
              constructor() {
                this._nodeAnimations = _initializer$3 && _initializer$3();
              }
              createEvaluator(binder) {
                return new ExoticTrsAnimationEvaluator(this._nodeAnimations, binder);
              }
              createEvaluatorForAnimationGraph(context) {
                return new ExoticTrsAGEvaluation(this._nodeAnimations, context);
              }
              addNodeAnimation(path) {
                const nodeAnimation = new ExoticNodeAnimation(path);
                this._nodeAnimations.push(nodeAnimation);
                return nodeAnimation;
              }
              collectAnimatedJoints() {
                return Array.from(new Set(this._nodeAnimations.map(({
                  path
                }) => path)));
              }
              split(from, to) {
                {
                  return throwIfSplitMethodIsNotValid();
                }
              }
              toHashString() {
                return this._nodeAnimations.map(nodeAnimation => nodeAnimation.toHashString()).join('\n');
              }
            }, (_initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "_nodeAnimations", [serializable], function () {
              return [];
            })), _class2$3)) || _class$3);
            let ExoticNodeAnimation = (_dec2$2 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ExoticNodeAnimation`), _dec2$2(_class4$1 = (_class5$1 = class ExoticNodeAnimation {
              constructor(path) {
                this._path = _initializer2$3 && _initializer2$3();
                this._position = _initializer3$2 && _initializer3$2();
                this._rotation = _initializer4$1 && _initializer4$1();
                this._scale = _initializer5$1 && _initializer5$1();
                this._path = path;
              }
              createPosition(times, values) {
                this._position = new ExoticTrack(times, new ExoticVec3TrackValues(values));
              }
              createRotation(times, values) {
                this._rotation = new ExoticTrack(times, new ExoticQuatTrackValues(values));
              }
              createScale(times, values) {
                this._scale = new ExoticTrack(times, new ExoticVec3TrackValues(values));
              }
              createEvaluator(binder) {
                return new ExoticNodeAnimationEvaluator(this._path, this._position, this._rotation, this._scale, binder);
              }
              createEvaluatorForAnimationGraph(context) {
                const transformHandle = context.bindTransform(this._path);
                if (!transformHandle) {
                  return null;
                }
                return new ExoticNodeAnimationAGEvaluation(transformHandle, this._position, this._rotation, this._scale);
              }
              split(from, to, splitInfoCache) {
                {
                  return throwIfSplitMethodIsNotValid();
                }
              }
              get path() {
                return this._path;
              }
              toHashString() {
                var _this$_position$toHas, _this$_position, _this$_scale$toHashSt, _this$_scale, _this$_rotation$toHas, _this$_rotation;
                return `${this._path}\n${(_this$_position$toHas = (_this$_position = this._position) === null || _this$_position === void 0 ? void 0 : _this$_position.toHashString()) !== null && _this$_position$toHas !== void 0 ? _this$_position$toHas : ''}${(_this$_scale$toHashSt = (_this$_scale = this._scale) === null || _this$_scale === void 0 ? void 0 : _this$_scale.toHashString()) !== null && _this$_scale$toHashSt !== void 0 ? _this$_scale$toHashSt : ''}${(_this$_rotation$toHas = (_this$_rotation = this._rotation) === null || _this$_rotation === void 0 ? void 0 : _this$_rotation.toHashString()) !== null && _this$_rotation$toHas !== void 0 ? _this$_rotation$toHas : ''}`;
              }
            }, (_initializer2$3 = applyDecoratedInitializer(_class5$1.prototype, "_path", [serializable], function () {
              return '';
            }), _initializer3$2 = applyDecoratedInitializer(_class5$1.prototype, "_position", [serializable], function () {
              return null;
            }), _initializer4$1 = applyDecoratedInitializer(_class5$1.prototype, "_rotation", [serializable], function () {
              return null;
            }), _initializer5$1 = applyDecoratedInitializer(_class5$1.prototype, "_scale", [serializable], function () {
              return null;
            })), _class5$1)) || _class4$1);
            function floatToHashString(value) {
              return value.toPrecision(2);
            }
            function floatArrayToHashString(values) {
              return values.map(v => Number.parseFloat(floatToHashString(v))).join(' ');
            }
            let ExoticVectorLikeTrackValues = (_dec3$1 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ExoticVectorLikeTrackValues`), _dec3$1(_class7 = (_class8 = class ExoticVectorLikeTrackValues {
              constructor(values) {
                this._values = _initializer6$1 && _initializer6$1();
                this._isQuantized = _initializer7$1 && _initializer7$1();
                this._values = values;
              }
              get precision() {
                return this._isQuantized ? this._values.originalPrecision : getFloatArrayPrecision(this._values);
              }
              quantize(type) {
                assertIsTrue(!this._isQuantized);
                this._values = quantize(this._values, type);
                this._isQuantized = true;
              }
              toHashString() {
                const {
                  _isQuantized: isQuantized,
                  _values: values
                } = this;
                return `${isQuantized} ${isQuantized ? values.toHashString() : floatArrayToHashString(values)}`;
              }
            }, (_initializer6$1 = applyDecoratedInitializer(_class8.prototype, "_values", [serializable], null), _initializer7$1 = applyDecoratedInitializer(_class8.prototype, "_isQuantized", [serializable], function () {
              return false;
            })), _class8)) || _class7);
            let ExoticVec3TrackValues = (_dec4$1 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ExoticVec3TrackValues`), _dec4$1(_class10 = class ExoticVec3TrackValues extends ExoticVectorLikeTrackValues {
              static imitate(values, model) {
                const trackValues = new ExoticVec3TrackValues(values);
                if (model._isQuantized) {
                  trackValues.quantize(model._values.quantizationType);
                }
                return trackValues;
              }
              get(index, resultValue) {
                const {
                  _values: values,
                  _isQuantized: isQuantized
                } = this;
                if (isQuantized) {
                  loadVec3FromQuantized(values, index, resultValue);
                } else {
                  Vec3.fromArray(resultValue, values, index * 3);
                }
              }
              lerp(prevIndex, nextIndex, ratio, prevValue, nextValue, resultValue) {
                const {
                  _values: values,
                  _isQuantized: isQuantized
                } = this;
                if (isQuantized) {
                  loadVec3FromQuantized(values, prevIndex, prevValue);
                  loadVec3FromQuantized(values, nextIndex, nextValue);
                } else {
                  Vec3.fromArray(prevValue, values, prevIndex * 3);
                  Vec3.fromArray(nextValue, values, nextIndex * 3);
                }
                Vec3.lerp(resultValue, prevValue, nextValue, ratio);
              }
            }) || _class10);
            let ExoticQuatTrackValues = (_dec5$1 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ExoticQuatTrackValues`), _dec5$1(_class11 = class ExoticQuatTrackValues extends ExoticVectorLikeTrackValues {
              static imitate(values, model) {
                const trackValues = new ExoticQuatTrackValues(values);
                if (model._isQuantized) {
                  trackValues.quantize(model._values.quantizationType);
                }
                return trackValues;
              }
              get(index, resultValue) {
                const {
                  _values: values,
                  _isQuantized: isQuantized
                } = this;
                if (isQuantized) {
                  loadQuatFromQuantized(values, index, resultValue);
                } else {
                  Quat.fromArray(resultValue, values, index * 4);
                }
              }
              lerp(prevIndex, nextIndex, ratio, prevValue, nextValue, resultValue) {
                const {
                  _values: values,
                  _isQuantized: isQuantized
                } = this;
                if (isQuantized) {
                  loadQuatFromQuantized(values, prevIndex, prevValue);
                  loadQuatFromQuantized(values, nextIndex, nextValue);
                } else {
                  Quat.fromArray(prevValue, values, prevIndex * 4);
                  Quat.fromArray(nextValue, values, nextIndex * 4);
                }
                Quat.slerp(resultValue, prevValue, nextValue, ratio);
              }
            }) || _class11);
            let ExoticTrack = (_dec6 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ExoticTrack`), _dec6(_class12 = (_class13 = class ExoticTrack {
              constructor(times, values) {
                this.times = _initializer8$1 && _initializer8$1();
                this.values = _initializer9$1 && _initializer9$1();
                this.times = times;
                this.values = values;
              }
              toHashString() {
                const {
                  times,
                  values
                } = this;
                return `times: ${floatArrayToHashString(times)}; values: ${values.toHashString()}`;
              }
            }, (_initializer8$1 = applyDecoratedInitializer(_class13.prototype, "times", [serializable], null), _initializer9$1 = applyDecoratedInitializer(_class13.prototype, "values", [serializable], null)), _class13)) || _class12);
            class ExoticTrsAnimationEvaluator {
              constructor(nodeAnimations, binder) {
                this._nodeEvaluations = void 0;
                this._nodeEvaluations = nodeAnimations.map(nodeAnimation => nodeAnimation.createEvaluator(binder));
              }
              evaluate(time) {
                this._nodeEvaluations.forEach(nodeEvaluator => {
                  nodeEvaluator.evaluate(time);
                });
              }
            }
            class ExoticNodeAnimationEvaluator {
              constructor(path, position, rotation, scale, binder) {
                this._position = null;
                this._rotation = null;
                this._scale = null;
                if (position) {
                  this._position = createExoticTrackEvaluationRecord(position.times, position.values, Vec3, path, 'position', binder);
                }
                if (rotation) {
                  this._rotation = createExoticTrackEvaluationRecord(rotation.times, rotation.values, Quat, path, 'rotation', binder);
                }
                if (scale) {
                  this._scale = createExoticTrackEvaluationRecord(scale.times, scale.values, Vec3, path, 'scale', binder);
                }
              }
              evaluate(time) {
                if (this._position) {
                  const value = this._position.evaluator.evaluate(time);
                  this._position.runtimeBinding.setValue(value);
                }
                if (this._rotation) {
                  const value = this._rotation.evaluator.evaluate(time);
                  this._rotation.runtimeBinding.setValue(value);
                }
                if (this._scale) {
                  const value = this._scale.evaluator.evaluate(time);
                  this._scale.runtimeBinding.setValue(value);
                }
              }
            }
            class ExoticTrackEvaluator {
              constructor(times, values, ValueConstructor) {
                this._times = void 0;
                this._inputSampleResultCache = {
                  just: false,
                  index: -1,
                  nextIndex: -1,
                  ratio: 0.0
                };
                this._values = void 0;
                this._prevValue = void 0;
                this._nextValue = void 0;
                this._resultValue = void 0;
                this._times = times;
                this._values = values;
                this._prevValue = new ValueConstructor();
                this._nextValue = new ValueConstructor();
                this._resultValue = new ValueConstructor();
              }
              evaluate(time) {
                const {
                  _times: times,
                  _values: values,
                  _resultValue: resultValue
                } = this;
                const nFrames = times.length;
                if (nFrames === 0) {
                  return resultValue;
                }
                const inputSampleResult = sampleInput(times, time, this._inputSampleResultCache);
                if (inputSampleResult.just) {
                  values.get(inputSampleResult.index, resultValue);
                } else {
                  values.lerp(inputSampleResult.index, inputSampleResult.nextIndex, inputSampleResult.ratio, this._prevValue, this._nextValue, resultValue);
                }
                return resultValue;
              }
            }
            class ExoticTrsAGEvaluation {
              constructor(nodeAnimations, context) {
                this._nodeEvaluations = void 0;
                this._nodeEvaluations = nodeAnimations.map(nodeAnimation => nodeAnimation.createEvaluatorForAnimationGraph(context)).filter(x => !!x);
              }
              destroy() {
                const {
                  _nodeEvaluations: nodeEvaluations
                } = this;
                const nNodeEvaluations = nodeEvaluations.length;
                for (let iNodeEvaluation = 0; iNodeEvaluation < nNodeEvaluations; ++iNodeEvaluation) {
                  nodeEvaluations[iNodeEvaluation].destroy();
                }
              }
              evaluate(time, pose) {
                const {
                  _nodeEvaluations: nodeEvaluations
                } = this;
                const nNodeEvaluations = nodeEvaluations.length;
                for (let iNodeEvaluation = 0; iNodeEvaluation < nNodeEvaluations; ++iNodeEvaluation) {
                  nodeEvaluations[iNodeEvaluation].evaluate(time, pose);
                }
              }
            }
            class ExoticNodeAnimationAGEvaluation {
              constructor(transformHandle, position, rotation, scale) {
                this._position = null;
                this._rotation = null;
                this._scale = null;
                this._transformHandle = void 0;
                this._transformHandle = transformHandle;
                if (position) {
                  this._position = new ExoticTrackEvaluator(position.times, position.values, Vec3);
                }
                if (rotation) {
                  this._rotation = new ExoticTrackEvaluator(rotation.times, rotation.values, Quat);
                }
                if (scale) {
                  this._scale = new ExoticTrackEvaluator(scale.times, scale.values, Vec3);
                }
              }
              destroy() {
                this._transformHandle.destroy();
              }
              evaluate(time, pose) {
                const {
                  _transformHandle: {
                    index: transformIndex
                  },
                  _position: position,
                  _rotation: rotation,
                  _scale: scale
                } = this;
                const {
                  transforms: poseTransforms
                } = pose;
                if (position) {
                  const value = position.evaluate(time);
                  poseTransforms.setPosition(transformIndex, value);
                }
                if (rotation) {
                  const rotationAbs = rotation.evaluate(time);
                  poseTransforms.setRotation(transformIndex, rotationAbs);
                }
                if (scale) {
                  const value = scale.evaluate(time);
                  poseTransforms.setScale(transformIndex, value);
                }
              }
            }
            function sampleInput(values, time, result) {
              const nFrames = values.length;
              assertIsTrue(nFrames !== 0);
              const firstTime = values[0];
              const lastTime = values[nFrames - 1];
              if (time < firstTime) {
                result.just = true;
                result.index = 0;
              } else if (time > lastTime) {
                result.just = true;
                result.index = nFrames - 1;
              } else {
                const index = binarySearchEpsilon(values, time);
                if (index >= 0) {
                  result.just = true;
                  result.index = index;
                } else {
                  const nextIndex = ~index;
                  assertIsTrue(nextIndex !== 0 && nextIndex !== nFrames && nFrames > 1);
                  const prevIndex = nextIndex - 1;
                  const prevTime = values[prevIndex];
                  const nextTime = values[nextIndex];
                  const ratio = (time - values[prevIndex]) / (nextTime - prevTime);
                  result.just = false;
                  result.index = prevIndex;
                  result.nextIndex = nextIndex;
                  result.ratio = ratio;
                }
              }
              return result;
            }
            const QUANTIZATION_TYPE_TO_ARRAY_VIEW_CONSTRUCTOR_MAP = {
              uint8: Uint8Array,
              uint16: Uint16Array
            };
            var FloatPrecision;
            (function (FloatPrecision) {
              FloatPrecision[FloatPrecision["FLOAT_32"] = 0] = "FLOAT_32";
              FloatPrecision[FloatPrecision["FLOAT_64"] = 1] = "FLOAT_64";
            })(FloatPrecision || (FloatPrecision = {}));
            function getFloatArrayPrecision(array) {
              switch (array.BYTES_PER_ELEMENT) {
                default:
                  assertIsTrue(false);
                case 4:
                  return FloatPrecision.FLOAT_32;
                case 8:
                  return FloatPrecision.FLOAT_64;
              }
            }
            let QuantizedFloatArray = (_dec7 = ccclass(`${CLASS_NAME_PREFIX_ANIM}QuantizedFloatArray`), _dec7(_class20 = (_class21 = class QuantizedFloatArray {
              get quantizationType() {
                switch (this.values.BYTES_PER_ELEMENT) {
                  default:
                  case 1:
                    return 'uint8';
                  case 2:
                    return 'uint16';
                }
              }
              constructor(originalPrecision, values, extent, min = 0.0) {
                this.originalPrecision = _initializer10$1 && _initializer10$1();
                this.min = _initializer11$1 && _initializer11$1();
                this.extent = _initializer12$1 && _initializer12$1();
                this.values = _initializer13$1 && _initializer13$1();
                this.originalPrecision = originalPrecision;
                this.values = values;
                this.extent = extent;
                this.min = min;
              }
              toHashString() {
                const {
                  originalPrecision,
                  min,
                  extent,
                  values
                } = this;
                return `${originalPrecision} ${floatToHashString(min)} ${floatToHashString(extent)} ${values.join(' ')}`;
              }
            }, (_initializer10$1 = applyDecoratedInitializer(_class21.prototype, "originalPrecision", [serializable], null), _initializer11$1 = applyDecoratedInitializer(_class21.prototype, "min", [serializable], null), _initializer12$1 = applyDecoratedInitializer(_class21.prototype, "extent", [serializable], null), _initializer13$1 = applyDecoratedInitializer(_class21.prototype, "values", [serializable], null)), _class21)) || _class20);
            function quantize(values, type) {
              const TypedArrayViewConstructor = QUANTIZATION_TYPE_TO_ARRAY_VIEW_CONSTRUCTOR_MAP[type];
              const MAX = 1 << TypedArrayViewConstructor.BYTES_PER_ELEMENT;
              let min = Number.POSITIVE_INFINITY;
              let max = Number.NEGATIVE_INFINITY;
              values.forEach(value => {
                min = Math.min(value, min);
                max = Math.max(value, max);
              });
              const extent = max - min;
              const normalized = TypedArrayViewConstructor.from(values, value => (value - min) / extent * MAX);
              return new QuantizedFloatArray(getFloatArrayPrecision(values), normalized, extent, min);
            }
            function indexQuantized(quantized, index) {
              const quantizedValue = quantized.values[index];
              const MAX_VALUE = 1 << quantized.values.BYTES_PER_ELEMENT;
              return quantizedValue / MAX_VALUE * quantized.extent + quantized.min;
            }
            function createExoticTrackEvaluationRecord(times, values, ValueConstructor, path, property, binder) {
              const trackBinding = new TrackBinding();
              trackBinding.path = new TrackPath().toHierarchy(path).toProperty(property);
              const runtimeBinding = binder(trackBinding);
              if (!runtimeBinding) {
                return null;
              }
              const evaluator = new ExoticTrackEvaluator(times, values, ValueConstructor);
              return {
                runtimeBinding,
                evaluator
              };
            }
            function loadVec3FromQuantized(values, index, out) {
              Vec3.set(out, indexQuantized(values, 3 * index + 0), indexQuantized(values, 3 * index + 1), indexQuantized(values, 3 * index + 2));
            }
            function loadQuatFromQuantized(values, index, out) {
              Quat.set(out, indexQuantized(values, 4 * index + 0), indexQuantized(values, 4 * index + 1), indexQuantized(values, 4 * index + 2), indexQuantized(values, 4 * index + 3));
            }

            var _dec$2, _class$2, _class2$2, _initializer$2, _initializer2$2;
            let AuxiliaryCurveEntry = (_dec$2 = ccclass$1(`${CLASS_NAME_PREFIX_ANIM}AuxiliaryCurveEntry`), _dec$2(_class$2 = (_class2$2 = class AuxiliaryCurveEntry {
              constructor() {
                this.name = _initializer$2 && _initializer$2();
                this.curve = _initializer2$2 && _initializer2$2();
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "name", [serializable$1], function () {
              return '';
            }), _initializer2$2 = applyDecoratedInitializer(_class2$2.prototype, "curve", [serializable$1], function () {
              return new RealCurve();
            })), _class2$2)) || _class$2);

            var _dec$1, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _class3$1, _dec2$1, _class4, _class5, _initializer13, _initializer14;
            const searchForRootBonePathSymbol = Symbol('SearchForRootBonePath');
            const exoticAnimationTag = exports('e', Symbol('ExoticAnimation'));
            const embeddedPlayerCountTag = Symbol('[[EmbeddedPlayerCount]]');
            const getEmbeddedPlayersTag = Symbol('[[GetEmbeddedPlayers]]');
            const addEmbeddedPlayerTag = Symbol('[[AddEmbeddedPlayer]]');
            const removeEmbeddedPlayerTag = Symbol('[[RemoveEmbeddedPlayer]]');
            const clearEmbeddedPlayersTag = Symbol('[[ClearEmbeddedPlayers]]');
            const additiveSettingsTag = exports('b', Symbol('[[Additive Settings]]'));
            let AnimationClip = exports('f', (_dec$1 = ccclass$1('cc.AnimationClip'), _dec$1(_class$1 = (_class2$1 = (_class3$1 = class AnimationClip extends Asset {
              constructor(...args) {
                super(...args);
                this.sample = _initializer$1 && _initializer$1();
                this.speed = _initializer2$1 && _initializer2$1();
                this.wrapMode = _initializer3$1 && _initializer3$1();
                this.enableTrsBlending = _initializer4 && _initializer4();
                this._duration = _initializer5 && _initializer5();
                this._hash = _initializer6 && _initializer6();
                this.frameRate = 0;
                this._tracks = _initializer7 && _initializer7();
                this._exoticAnimation = _initializer8 && _initializer8();
                this._legacyData = undefined;
                this._legacyDataDirty = false;
                this._events = _initializer9 && _initializer9();
                this._embeddedPlayers = _initializer10 && _initializer10();
                this._additiveSettings = _initializer11 && _initializer11();
                this._auxiliaryCurveEntries = _initializer12 && _initializer12();
                this._runtimeEvents = {
                  ratios: [],
                  eventGroups: []
                };
              }
              static createWithSpriteFrames(spriteFrames, sample) {
                const clip = new AnimationClip();
                clip.sample = sample || clip.sample;
                clip.duration = spriteFrames.length / clip.sample;
                const step = 1 / clip.sample;
                const track = new ObjectTrack();
                track.path = new TrackPath().toComponent('cc.Sprite').toProperty('spriteFrame');
                const curve = track.channels()[0].curve;
                curve.assignSorted(spriteFrames.map((spriteFrame, index) => [step * index, spriteFrame]));
                clip.addTrack(track);
                return clip;
              }
              get duration() {
                return this._duration;
              }
              set duration(value) {
                this._duration = value;
              }
              get tracksCount() {
                return this._tracks.length;
              }
              get tracks() {
                return this._tracks;
              }
              get hash() {
                var _this$_exoticAnimatio, _this$_exoticAnimatio2;
                if (this._hash) {
                  return this._hash;
                }
                const hashString = `Exotic:${(_this$_exoticAnimatio = (_this$_exoticAnimatio2 = this._exoticAnimation) === null || _this$_exoticAnimatio2 === void 0 ? void 0 : _this$_exoticAnimatio2.toHashString()) !== null && _this$_exoticAnimatio !== void 0 ? _this$_exoticAnimatio : ''}`;
                return this._hash = murmurhash2_32_gc(hashString, 666);
              }
              get events() {
                return this._events;
              }
              set events(value) {
                this._events = value;
                const ratios = [];
                const eventGroups = [];
                const events = this.events.sort((a, b) => a.frame - b.frame);
                const nEvents = events.length;
                for (let iEvent = 0; iEvent < nEvents; ++iEvent) {
                  const eventData = events[iEvent];
                  const ratio = eventData.frame / this._duration;
                  let i = ratios.findIndex(r => r === ratio);
                  if (i < 0) {
                    i = ratios.length;
                    ratios.push(ratio);
                    eventGroups.push({
                      events: []
                    });
                  }
                  eventGroups[i].events.push({
                    functionName: eventData.func,
                    parameters: eventData.params
                  });
                }
                this._runtimeEvents = {
                  ratios,
                  eventGroups
                };
              }
              get [exoticAnimationTag]() {
                return this._exoticAnimation;
              }
              set [exoticAnimationTag](value) {
                this._exoticAnimation = value;
              }
              get isAdditive_experimental() {
                return this._additiveSettings.enabled;
              }
              get [additiveSettingsTag]() {
                return this._additiveSettings;
              }
              onLoaded() {
                this.frameRate = this.sample;
                this.events = this._events;
              }
              range() {
                const range = {
                  min: Infinity,
                  max: -Infinity
                };
                const {
                  _tracks: tracks
                } = this;
                const nTracks = tracks.length;
                for (let iTrack = 0; iTrack < nTracks; ++iTrack) {
                  const track = tracks[iTrack];
                  const trackRange = track.range();
                  range.min = Math.min(range.min, trackRange.min);
                  range.max = Math.max(range.max, trackRange.max);
                }
                return range;
              }
              getTrack(index) {
                return this._tracks[index];
              }
              addTrack(track) {
                const index = this._tracks.length;
                this._tracks.push(track);
                return index;
              }
              removeTrack(index) {
                this._tracks.splice(index, 1);
              }
              clearTracks() {
                this._tracks.length = 0;
              }
              containsAnyEvent() {
                return this._events.length !== 0;
              }
              createEventEvaluator(targetNode) {
                return new EventEvaluator(targetNode, this._runtimeEvents.ratios, this._runtimeEvents.eventGroups, this.wrapMode);
              }
              containsAnyEmbeddedPlayer() {
                return this._embeddedPlayers.length !== 0;
              }
              createEmbeddedPlayerEvaluator(targetNode) {
                return new EmbeddedPlayerEvaluation(this._embeddedPlayers, targetNode);
              }
              createEvaluator(context) {
                const {
                  target
                } = context;
                const binder = binding => {
                  if (context.mask && binding.isMaskedOff(context.mask)) {
                    return undefined;
                  }
                  const trackTarget = binding.createRuntimeBinding(target, this.enableTrsBlending ? context.pose : undefined, false);
                  if (!trackTarget) {
                    warnID(3937, this.name, context.target instanceof Node ? context.target.name : context.target);
                  }
                  return trackTarget !== null && trackTarget !== void 0 ? trackTarget : undefined;
                };
                return this._createEvalWithBinder(target, binder, context.rootMotion);
              }
              destroy() {
                var _cclegacy$director$ro;
                if ((_cclegacy$director$ro = legacyCC.director.root) !== null && _cclegacy$director$ro !== void 0 && _cclegacy$director$ro.dataPoolManager) {
                  legacyCC.director.root.dataPoolManager.releaseAnimationClip(this);
                }
                SkelAnimDataHub.destroy(this);
                return super.destroy();
              }
              [BAKE_SKELETON_CURVE_SYMBOL](start, samples, frames) {
                const step = 1.0 / samples;
                const animatedJoints = this._collectAnimatedJoints();
                const nAnimatedJoints = animatedJoints.length;
                const jointsBakeInfo = {};
                for (let iAnimatedJoint = 0; iAnimatedJoint < nAnimatedJoints; ++iAnimatedJoint) {
                  const joint = animatedJoints[iAnimatedJoint];
                  jointsBakeInfo[joint] = {
                    transforms: Array.from({
                      length: frames
                    }, () => new Mat4())
                  };
                }
                const skeletonFrames = animatedJoints.reduce((result, joint) => {
                  result[joint] = new BoneGlobalTransform();
                  return result;
                }, {});
                for (const joint in skeletonFrames) {
                  const skeletonFrame = skeletonFrames[joint];
                  const parentJoint = joint.lastIndexOf('/');
                  if (parentJoint >= 0) {
                    const parentJointName = joint.substring(0, parentJoint);
                    const parentJointFrame = skeletonFrames[parentJointName];
                    if (parentJointFrame) {
                      skeletonFrame.parent = parentJointFrame;
                    }
                  }
                }
                const binder = binding => {
                  const trsPath = binding.parseTrsPath();
                  if (!trsPath) {
                    return undefined;
                  }
                  const jointFrame = skeletonFrames[trsPath.node];
                  if (!jointFrame) {
                    return undefined;
                  }
                  return createBoneTransformBinding(jointFrame, trsPath.property);
                };
                const evaluator = this._createEvalWithBinder(undefined, binder, undefined);
                for (let iFrame = 0; iFrame < frames; ++iFrame) {
                  const time = start + step * iFrame;
                  evaluator.evaluate(time);
                  for (let iAnimatedJoint = 0; iAnimatedJoint < nAnimatedJoints; ++iAnimatedJoint) {
                    const joint = animatedJoints[iAnimatedJoint];
                    Mat4.copy(jointsBakeInfo[joint].transforms[iFrame], skeletonFrames[joint].globalTransform);
                  }
                  for (let iAnimatedJoint = 0; iAnimatedJoint < nAnimatedJoints; ++iAnimatedJoint) {
                    const joint = animatedJoints[iAnimatedJoint];
                    skeletonFrames[joint].invalidate();
                  }
                }
                return {
                  samples,
                  frames,
                  joints: jointsBakeInfo
                };
              }
              upgradeUntypedTracks(refine) {
                const newTracks = [];
                const removals = [];
                const {
                  _tracks: tracks
                } = this;
                const nTracks = tracks.length;
                for (let iTrack = 0; iTrack < nTracks; ++iTrack) {
                  const track = tracks[iTrack];
                  if (!(track instanceof UntypedTrack)) {
                    continue;
                  }
                  const newTrack = track.upgrade(refine);
                  if (newTrack) {
                    newTracks.push(newTrack);
                    removals.push(track);
                  }
                }
                const nRemovalTracks = removals.length;
                for (let iRemovalTrack = 0; iRemovalTrack < nRemovalTracks; ++iRemovalTrack) {
                  remove(tracks, removals[iRemovalTrack]);
                }
                tracks.push(...newTracks);
              }
              [searchForRootBonePathSymbol]() {
                return this._searchForRootBonePath();
              }
              get keys() {
                return this._getLegacyData().keys;
              }
              set keys(value) {
                this._legacyDataDirty = true;
                this._getLegacyData().keys = value;
              }
              get curves() {
                this._legacyDataDirty = true;
                return this._getLegacyData().curves;
              }
              set curves(value) {
                this._getLegacyData().curves = value;
              }
              get commonTargets() {
                return this._getLegacyData().commonTargets;
              }
              set commonTargets(value) {
                this._legacyDataDirty = true;
                this._getLegacyData().commonTargets = value;
              }
              get data() {
                return this._getLegacyData().data;
              }
              getPropertyCurves() {
                return this._getLegacyData().getPropertyCurves();
              }
              get eventGroups() {
                return this._runtimeEvents.eventGroups;
              }
              updateEventDatas() {
                this.events = this._events;
              }
              hasEvents() {
                return this.events.length !== 0;
              }
              syncLegacyData() {
                if (this._legacyData) {
                  this._fromLegacy(this._legacyData);
                  this._legacyData = undefined;
                }
              }
              get [embeddedPlayerCountTag]() {
                return this._embeddedPlayers.length;
              }
              [getEmbeddedPlayersTag]() {
                return this._embeddedPlayers;
              }
              [addEmbeddedPlayerTag](embeddedPlayer) {
                this._embeddedPlayers.push(embeddedPlayer);
              }
              [removeEmbeddedPlayerTag](embeddedPlayer) {
                const iEmbeddedPlayer = this._embeddedPlayers.indexOf(embeddedPlayer);
                if (iEmbeddedPlayer >= 0) {
                  this._embeddedPlayers.splice(iEmbeddedPlayer, 1);
                }
              }
              [clearEmbeddedPlayersTag]() {
                this._embeddedPlayers.length = 0;
              }
              get auxiliaryCurveCount_experimental() {
                return this._auxiliaryCurveEntries.length;
              }
              getAuxiliaryCurveNames_experimental() {
                return this._auxiliaryCurveEntries.map(entry => entry.name);
              }
              hasAuxiliaryCurve_experimental(name) {
                return !!this._findAuxiliaryCurveEntry(name);
              }
              addAuxiliaryCurve_experimental(name) {
                let entry = this._findAuxiliaryCurveEntry(name);
                if (!entry) {
                  entry = new AuxiliaryCurveEntry();
                  entry.name = name;
                  this._auxiliaryCurveEntries.push(entry);
                }
                return entry.curve;
              }
              getAuxiliaryCurve_experimental(name) {
                const entry = this._findAuxiliaryCurveEntry(name);
                assertIsTrue(entry);
                return entry.curve;
              }
              renameAuxiliaryCurve_experimental(name, newName) {
                const entry = this._findAuxiliaryCurveEntry(name);
                if (entry) {
                  entry.name = newName;
                }
              }
              removeAuxiliaryCurve_experimental(name) {
                removeIf(this._auxiliaryCurveEntries, entry => entry.name === name);
              }
              _trySyncLegacyData() {
                if (this._legacyDataDirty) {
                  this._legacyDataDirty = false;
                  this.syncLegacyData();
                }
              }
              _createEvalWithBinder(target, binder, rootMotionOptions) {
                if (this._legacyDataDirty) {
                  this._legacyDataDirty = false;
                  this.syncLegacyData();
                }
                const rootMotionTrackExcludes = [];
                let rootMotionEvaluation;
                if (rootMotionOptions) {
                  rootMotionEvaluation = this._createRootMotionEvaluation(target, rootMotionOptions, rootMotionTrackExcludes);
                }
                const trackEvalStatues = [];
                let exoticAnimationEvaluator;
                const {
                  _tracks: tracks
                } = this;
                const nTracks = tracks.length;
                for (let iTrack = 0; iTrack < nTracks; ++iTrack) {
                  const track = tracks[iTrack];
                  if (rootMotionTrackExcludes.includes(track)) {
                    continue;
                  }
                  if (Array.from(track.channels()).every(({
                    curve
                  }) => curve.keyFramesCount === 0)) {
                    continue;
                  }
                  const runtimeBinding = binder(track[trackBindingTag]);
                  if (!runtimeBinding) {
                    continue;
                  }
                  let trackEval;
                  if (!(track instanceof UntypedTrack)) {
                    trackEval = track[createEvalSymbol]();
                  } else {
                    if (!runtimeBinding.getValue) {
                      errorID(3930);
                      continue;
                    }
                    const hintValue = runtimeBinding.getValue();
                    trackEval = track.createLegacyEval(hintValue);
                  }
                  trackEvalStatues.push(new TrackEvalStatus(runtimeBinding, trackEval));
                }
                if (this._exoticAnimation) {
                  exoticAnimationEvaluator = this._exoticAnimation.createEvaluator(binder);
                }
                const evaluation = new AnimationClipEvaluation(trackEvalStatues, exoticAnimationEvaluator, rootMotionEvaluation);
                return evaluation;
              }
              _createRootMotionEvaluation(target, rootMotionOptions, rootMotionTrackExcludes) {
                if (!(target instanceof Node)) {
                  errorID(3920);
                  return undefined;
                }
                const rootBonePath = this._searchForRootBonePath();
                if (!rootBonePath) {
                  warnID(3923);
                  return undefined;
                }
                const rootBone = target.getChildByPath(rootBonePath);
                if (!rootBone) {
                  warnID(3924);
                  return undefined;
                }
                const boneTransform = new BoneTransform();
                const rootMotionsTrackEvaluations = [];
                const {
                  _tracks: tracks
                } = this;
                const nTracks = tracks.length;
                for (let iTrack = 0; iTrack < nTracks; ++iTrack) {
                  const track = tracks[iTrack];
                  const {
                    [trackBindingTag]: trackBinding
                  } = track;
                  const trsPath = trackBinding.parseTrsPath();
                  if (!trsPath) {
                    continue;
                  }
                  const bonePath = trsPath.node;
                  if (bonePath !== rootBonePath) {
                    continue;
                  }
                  rootMotionTrackExcludes.push(track);
                  const property = trsPath.property;
                  const runtimeBinding = createBoneTransformBinding(boneTransform, property);
                  if (!runtimeBinding) {
                    continue;
                  }
                  const trackEval = track[createEvalSymbol]();
                  rootMotionsTrackEvaluations.push(new TrackEvalStatus(runtimeBinding, trackEval));
                }
                const rootMotionEvaluation = new RootMotionEvaluation(rootBone, this._duration, boneTransform, rootMotionsTrackEvaluations);
                return rootMotionEvaluation;
              }
              _searchForRootBonePath() {
                const paths = this._tracks.map(track => {
                  const trsPath = track[trackBindingTag].parseTrsPath();
                  if (trsPath) {
                    const nodePath = trsPath.node;
                    return {
                      path: nodePath,
                      rank: nodePath.split('/').length
                    };
                  } else {
                    return {
                      path: '',
                      rank: 0
                    };
                  }
                });
                paths.sort((a, b) => a.rank - b.rank);
                const iNonEmptyPath = paths.findIndex(p => p.rank !== 0);
                if (iNonEmptyPath < 0) {
                  return '';
                }
                const nPaths = paths.length;
                const firstPath = paths[iNonEmptyPath];
                let highestPathsAreSame = true;
                for (let iPath = iNonEmptyPath + 1; iPath < nPaths; ++iPath) {
                  const path = paths[iPath];
                  if (path.rank !== firstPath.rank) {
                    break;
                  }
                  if (path.path !== firstPath.path) {
                    highestPathsAreSame = false;
                    break;
                  }
                }
                return highestPathsAreSame ? firstPath.path : '';
              }
              _getLegacyData() {
                if (!this._legacyData) {
                  this._legacyData = this._toLegacy();
                }
                return this._legacyData;
              }
              _toLegacy() {
                const keys = [];
                const legacyCurves = [];
                const commonTargets = [];
                const legacyClipData = new AnimationClipLegacyData(this._duration);
                legacyClipData.keys = keys;
                legacyClipData.curves = legacyCurves;
                legacyClipData.commonTargets = commonTargets;
                return legacyClipData;
              }
              _fromLegacy(legacyData) {
                const newTracks = legacyData.toTracks();
                const nNewTracks = newTracks.length;
                for (let iNewTrack = 0; iNewTrack < nNewTracks; ++iNewTrack) {
                  this.addTrack(newTracks[iNewTrack]);
                }
              }
              _collectAnimatedJoints() {
                const joints = new Set();
                const {
                  _tracks: tracks
                } = this;
                const nTracks = tracks.length;
                for (let iTrack = 0; iTrack < nTracks; ++iTrack) {
                  const track = tracks[iTrack];
                  const trsPath = track[trackBindingTag].parseTrsPath();
                  if (trsPath) {
                    joints.add(trsPath.node);
                  }
                }
                if (this._exoticAnimation) {
                  const animatedJoints = this._exoticAnimation.collectAnimatedJoints();
                  const nAnimatedJoints = animatedJoints.length;
                  for (let iAnimatedJoint = 0; iAnimatedJoint < nAnimatedJoints; ++iAnimatedJoint) {
                    joints.add(animatedJoints[iAnimatedJoint]);
                  }
                }
                return Array.from(joints);
              }
              _findAuxiliaryCurveEntry(name) {
                return this._auxiliaryCurveEntries.find(entry => entry.name === name);
              }
            }, _class3$1.WrapMode = WrapMode, _class3$1), (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "sample", [serializable$1], function () {
              return 60;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "speed", [serializable$1], function () {
              return 1;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "wrapMode", [serializable$1], function () {
              return WrapMode.Normal;
            }), _initializer4 = applyDecoratedInitializer(_class2$1.prototype, "enableTrsBlending", [serializable$1], function () {
              return false;
            }), _initializer5 = applyDecoratedInitializer(_class2$1.prototype, "_duration", [serializable$1], function () {
              return 0;
            }), _initializer6 = applyDecoratedInitializer(_class2$1.prototype, "_hash", [serializable$1], function () {
              return 0;
            }), _initializer7 = applyDecoratedInitializer(_class2$1.prototype, "_tracks", [serializable$1], function () {
              return [];
            }), _initializer8 = applyDecoratedInitializer(_class2$1.prototype, "_exoticAnimation", [serializable$1], function () {
              return null;
            }), _initializer9 = applyDecoratedInitializer(_class2$1.prototype, "_events", [serializable$1], function () {
              return [];
            }), _initializer10 = applyDecoratedInitializer(_class2$1.prototype, "_embeddedPlayers", [serializable$1], function () {
              return [];
            }), _initializer11 = applyDecoratedInitializer(_class2$1.prototype, "_additiveSettings", [serializable$1], function () {
              return new AdditiveSettings();
            }), _initializer12 = applyDecoratedInitializer(_class2$1.prototype, "_auxiliaryCurveEntries", [serializable$1], function () {
              return [];
            })), _class2$1)) || _class$1));
            let AdditiveSettings = (_dec2$1 = ccclass$1('cc.AnimationClipAdditiveSettings'), _dec2$1(_class4 = (_class5 = class AdditiveSettings {
              constructor() {
                this.enabled = _initializer13 && _initializer13();
                this.refClip = _initializer14 && _initializer14();
              }
            }, (_initializer13 = applyDecoratedInitializer(_class5.prototype, "enabled", [serializable$1], function () {
              return false;
            }), _initializer14 = applyDecoratedInitializer(_class5.prototype, "refClip", [serializable$1], function () {
              return null;
            })), _class5)) || _class4);
            legacyCC.AnimationClip = AnimationClip;
            class TrackEvalStatus {
              constructor(binding, trackEval) {
                this._binding = void 0;
                this._trackEval = void 0;
                this._shouldEvaluateDefault = true;
                this._binding = binding;
                this._trackEval = trackEval;
                this._shouldEvaluateDefault = !!binding.getValue && trackEval.requiresDefault;
              }
              evaluate(time) {
                const {
                  _binding: binding,
                  _trackEval: trackEval
                } = this;
                const defaultValue = this._shouldEvaluateDefault ? binding.getValue() : undefined;
                const value = trackEval.evaluate(time, defaultValue);
                binding.setValue(value);
              }
            }
            class EmbeddedPlayerEvaluation {
              constructor(embeddedPlayers, rootNode) {
                this._embeddedPlayers = embeddedPlayers;
                this._embeddedPlayerEvaluationInfos = embeddedPlayers.map(embeddedPlayer => {
                  const {
                    playable: player
                  } = embeddedPlayer;
                  if (!player) {
                    return null;
                  }
                  const instantiatedPlayer = player.instantiate(rootNode);
                  if (!instantiatedPlayer) {
                    return null;
                  }
                  return {
                    instantiatedPlayer,
                    entered: false,
                    hostPauseTime: 0.0,
                    lastIterations: 0
                  };
                });
              }
              destroy() {
                const {
                  _embeddedPlayerEvaluationInfos: embeddedPlayerEvaluationInfos
                } = this;
                const nEmbeddedPlayers = embeddedPlayerEvaluationInfos.length;
                for (let iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
                  var _embeddedPlayerEvalua;
                  (_embeddedPlayerEvalua = embeddedPlayerEvaluationInfos[iEmbeddedPlayer]) === null || _embeddedPlayerEvalua === void 0 ? void 0 : _embeddedPlayerEvalua.instantiatedPlayer.destroy();
                }
                this._embeddedPlayerEvaluationInfos.length = 0;
              }
              evaluate(time, iterations) {
                assertIsTrue(Number.isInteger(iterations));
                const {
                  _embeddedPlayers: embeddedPlayers,
                  _embeddedPlayerEvaluationInfos: embeddedPlayerEvaluationInfos
                } = this;
                const nEmbeddedPlayers = embeddedPlayers.length;
                for (let iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
                  const embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
                  if (!embeddedPlayerEvaluationInfo) {
                    continue;
                  }
                  const {
                    entered,
                    instantiatedPlayer,
                    lastIterations
                  } = embeddedPlayerEvaluationInfo;
                  const {
                    begin,
                    end
                  } = embeddedPlayers[iEmbeddedPlayer];
                  const withinEmbeddedPlayer = time >= begin && time <= end;
                  if (withinEmbeddedPlayer) {
                    if (!entered) {
                      instantiatedPlayer.play();
                      embeddedPlayerEvaluationInfo.entered = true;
                    } else if (iterations !== lastIterations) {
                      instantiatedPlayer.stop();
                      instantiatedPlayer.play();
                      embeddedPlayerEvaluationInfo.entered = true;
                    }
                  } else if (entered) {
                    instantiatedPlayer.stop();
                    embeddedPlayerEvaluationInfo.entered = false;
                  }
                  embeddedPlayerEvaluationInfo.lastIterations = iterations;
                  if (embeddedPlayerEvaluationInfo.entered) {
                    const playerTime = time - begin;
                    embeddedPlayerEvaluationInfo.instantiatedPlayer.setTime(playerTime);
                  }
                }
              }
              notifyHostSpeedChanged(speed) {
                const {
                  _embeddedPlayers: embeddedPlayers,
                  _embeddedPlayerEvaluationInfos: embeddedPlayerEvaluationInfos
                } = this;
                const nEmbeddedPlayers = embeddedPlayers.length;
                for (let iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
                  const embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
                  if (!embeddedPlayerEvaluationInfo) {
                    continue;
                  }
                  const {
                    instantiatedPlayer
                  } = embeddedPlayerEvaluationInfo;
                  const {
                    reconciledSpeed
                  } = embeddedPlayers[iEmbeddedPlayer];
                  if (reconciledSpeed) {
                    instantiatedPlayer.setSpeed(speed);
                  }
                }
              }
              notifyHostPlay(time) {
                const {
                  _embeddedPlayers: embeddedPlayers,
                  _embeddedPlayerEvaluationInfos: embeddedPlayerEvaluationInfos
                } = this;
                const nEmbeddedPlayers = embeddedPlayers.length;
                for (let iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
                  const embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
                  if (!embeddedPlayerEvaluationInfo) {
                    continue;
                  }
                  const {
                    begin,
                    end
                  } = embeddedPlayers[iEmbeddedPlayer];
                  const {
                    instantiatedPlayer,
                    entered
                  } = embeddedPlayerEvaluationInfo;
                  if (entered) {
                    const {
                      hostPauseTime
                    } = embeddedPlayerEvaluationInfo;
                    if (instantiatedPlayer.randomAccess || approx(hostPauseTime, time, 1e-5)) {
                      const startTime = clamp(time, begin, end);
                      instantiatedPlayer.play();
                      instantiatedPlayer.setTime(startTime - begin);
                    } else {
                      instantiatedPlayer.stop();
                    }
                  }
                }
              }
              notifyHostPause(time) {
                const {
                  _embeddedPlayers: embeddedPlayers,
                  _embeddedPlayerEvaluationInfos: embeddedPlayerEvaluationInfos
                } = this;
                const nEmbeddedPlayers = embeddedPlayers.length;
                for (let iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
                  const embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
                  if (!embeddedPlayerEvaluationInfo) {
                    continue;
                  }
                  const {
                    instantiatedPlayer,
                    entered
                  } = embeddedPlayerEvaluationInfo;
                  if (entered) {
                    instantiatedPlayer.pause();
                    embeddedPlayerEvaluationInfo.hostPauseTime = time;
                  }
                }
              }
              notifyHostStop() {
                const {
                  _embeddedPlayers: embeddedPlayers,
                  _embeddedPlayerEvaluationInfos: embeddedPlayerEvaluationInfos
                } = this;
                const nEmbeddedPlayers = embeddedPlayers.length;
                for (let iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
                  const embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
                  if (!embeddedPlayerEvaluationInfo) {
                    continue;
                  }
                  const {
                    instantiatedPlayer,
                    entered
                  } = embeddedPlayerEvaluationInfo;
                  if (entered) {
                    embeddedPlayerEvaluationInfo.entered = false;
                    instantiatedPlayer.stop();
                  }
                }
              }
            }
            class AnimationClipEvaluation {
              constructor(trackEvalStatuses, exoticAnimationEvaluator, rootMotionEvaluation) {
                this._exoticAnimationEvaluator = void 0;
                this._trackEvalStatues = [];
                this._rootMotionEvaluation = undefined;
                this._trackEvalStatues = trackEvalStatuses;
                this._exoticAnimationEvaluator = exoticAnimationEvaluator;
                this._rootMotionEvaluation = rootMotionEvaluation;
              }
              evaluate(time) {
                const {
                  _trackEvalStatues: trackEvalStatuses,
                  _exoticAnimationEvaluator: exoticAnimationEvaluator
                } = this;
                const nTrackEvalStatuses = trackEvalStatuses.length;
                for (let iTrackEvalStatus = 0; iTrackEvalStatus < nTrackEvalStatuses; ++iTrackEvalStatus) {
                  trackEvalStatuses[iTrackEvalStatus].evaluate(time);
                }
                if (exoticAnimationEvaluator) {
                  exoticAnimationEvaluator.evaluate(time);
                }
              }
              evaluateRootMotion(time, motionLength) {
                const {
                  _rootMotionEvaluation: rootMotionEvaluation
                } = this;
                if (rootMotionEvaluation) {
                  rootMotionEvaluation.evaluate(time, motionLength);
                }
              }
            }
            class BoneTransform {
              constructor() {
                this.position = new Vec3();
                this.scale = new Vec3(1.0, 1.0, 1.0);
                this.rotation = new Quat();
                this.eulerAngles = new Vec3();
              }
              getTransform(out) {
                Mat4.fromRTS(out, this.rotation, this.position, this.scale);
              }
            }
            class BoneGlobalTransform extends BoneTransform {
              constructor(...args) {
                super(...args);
                this.parent = null;
                this._dirty = true;
                this._transform = new Mat4();
              }
              get globalTransform() {
                const transform = this._transform;
                if (this._dirty) {
                  this._dirty = false;
                  Mat4.fromRTS(transform, this.rotation, this.position, this.scale);
                  if (this.parent) {
                    Mat4.multiply(transform, this.parent.globalTransform, transform);
                  }
                }
                return this._transform;
              }
              invalidate() {
                this._dirty = true;
              }
            }
            const motionTransformCache = new Mat4();
            class RootMotionEvaluation {
              constructor(_rootBone, _duration, _boneTransform, _trackEvalStatuses) {
                this._initialTransformCache = new Mat4();
                this._clipEndTransformCache = new Mat4();
                this._startTransformCache = new Mat4();
                this._endTransformCache = new Mat4();
                this._motionTransformCache = new Mat4();
                this._translationMotionCache = new Vec3();
                this._rotationMotionCache = new Quat();
                this._scaleMotionCache = new Vec3();
                this._rootBone = _rootBone;
                this._duration = _duration;
                this._boneTransform = _boneTransform;
                this._trackEvalStatuses = _trackEvalStatuses;
              }
              evaluate(time, motionLength) {
                const motionTransform = this._calcMotionTransform(time, motionLength, this._motionTransformCache);
                const {
                  _translationMotionCache: translationMotion,
                  _rotationMotionCache: rotationMotion,
                  _scaleMotionCache: scaleMotion,
                  _rootBone: rootBone
                } = this;
                Mat4.toRTS(motionTransform, rotationMotion, translationMotion, scaleMotion);
                Vec3.add(translationMotion, translationMotion, rootBone.position);
                rootBone.setPosition(translationMotion);
                Quat.multiply(rotationMotion, rotationMotion, rootBone.rotation);
                rootBone.setRotation(rotationMotion);
                Vec3.multiply(scaleMotion, scaleMotion, rootBone.scale);
                rootBone.setScale(scaleMotion);
              }
              _calcMotionTransform(time, motionLength, outTransform) {
                const {
                  _duration: duration
                } = this;
                const remainLength = duration - time;
                assertIsTrue(remainLength >= 0);
                const startTransform = this._evaluateAt(time, this._startTransformCache);
                if (motionLength < remainLength) {
                  const endTransform = this._evaluateAt(time + motionLength, this._endTransformCache);
                  relativeTransform(outTransform, startTransform, endTransform);
                } else {
                  Mat4.identity(outTransform);
                  const accumulateMotionTransform = (from, to) => {
                    relativeTransform(motionTransformCache, from, to);
                    Mat4.multiply(outTransform, outTransform, motionTransformCache);
                  };
                  const diff = motionLength - remainLength;
                  const repeatCount = Math.floor(diff / duration);
                  const lastRemainTime = diff - repeatCount * duration;
                  const clipStartTransform = this._evaluateAt(0, this._initialTransformCache);
                  const clipEndTransform = this._evaluateAt(duration, this._clipEndTransformCache);
                  const endTransform = this._evaluateAt(lastRemainTime, this._endTransformCache);
                  accumulateMotionTransform(startTransform, clipEndTransform);
                  relativeTransform(motionTransformCache, clipStartTransform, clipEndTransform);
                  for (let i = 0; i < repeatCount; ++i) {
                    Mat4.multiply(outTransform, outTransform, motionTransformCache);
                  }
                  accumulateMotionTransform(clipStartTransform, endTransform);
                }
                return outTransform;
              }
              _evaluateAt(time, outTransform) {
                const {
                  _trackEvalStatuses: trackEvalStatuses
                } = this;
                const nTrackEvalStatuses = trackEvalStatuses.length;
                for (let iTrackEvalStatus = 0; iTrackEvalStatus < nTrackEvalStatuses; ++iTrackEvalStatus) {
                  trackEvalStatuses[iTrackEvalStatus].evaluate(time);
                }
                this._boneTransform.getTransform(outTransform);
                return outTransform;
              }
            }
            function relativeTransform(out, from, to) {
              Mat4.invert(out, from);
              Mat4.multiply(out, to, out);
            }
            function createBoneTransformBinding(boneTransform, property) {
              switch (property) {
                default:
                  return undefined;
                case 'position':
                  return {
                    setValue(value) {
                      Vec3.copy(boneTransform.position, value);
                    }
                  };
                case 'rotation':
                  return {
                    setValue(value) {
                      Quat.copy(boneTransform.rotation, value);
                    }
                  };
                case 'scale':
                  return {
                    setValue(value) {
                      Vec3.copy(boneTransform.scale, value);
                    }
                  };
                case 'eulerAngles':
                  return {
                    setValue(value) {
                      Vec3.copy(boneTransform.eulerAngles, value);
                    }
                  };
              }
            }
            const InvalidIndex = -1;
            class EventEvaluator {
              constructor(_targetNode, _ratios, _eventGroups, _wrapMode) {
                this._lastFrameIndex = -1;
                this._lastIterations = 0.0;
                this._lastDirection = 0;
                this._ignoreIndex = InvalidIndex;
                this._sampled = false;
                this._targetNode = _targetNode;
                this._ratios = _ratios;
                this._eventGroups = _eventGroups;
                this._wrapMode = _wrapMode;
              }
              setWrapMode(wrapMode) {
                this._wrapMode = wrapMode;
              }
              ignore(ratio, direction) {
                this._ignoreIndex = InvalidIndex;
                this._sampled = false;
                let frameIndex = getEventGroupIndexAtRatio(ratio, this._ratios);
                if (frameIndex < 0) {
                  frameIndex = ~frameIndex - 1;
                  if (direction < 0) {
                    frameIndex += 1;
                  }
                  this._ignoreIndex = frameIndex;
                }
              }
              reset() {
                this._lastFrameIndex = -1;
                this._lastIterations = 0.0;
                this._lastDirection = 0;
                this._ignoreIndex = InvalidIndex;
                this._sampled = false;
              }
              sample(ratio, direction, iterations) {
                if (this._eventGroups.length === 0) {
                  return;
                }
                const length = this._eventGroups.length;
                let eventIndex = getEventGroupIndexAtRatio(ratio, this._ratios);
                if (eventIndex < 0) {
                  eventIndex = ~eventIndex - 1;
                  if (direction < 0) {
                    eventIndex += 1;
                  }
                }
                if (this._ignoreIndex !== eventIndex) {
                  this._ignoreIndex = InvalidIndex;
                }
                if (!this._sampled) {
                  this._sampled = true;
                  this._doFire(eventIndex, false);
                  this._lastFrameIndex = eventIndex;
                  this._lastIterations = iterations;
                  this._lastDirection = direction;
                  return;
                }
                const wrapMode = this._wrapMode;
                const currentIterations = wrapIterations(iterations);
                let lastIterations = wrapIterations(this._lastIterations);
                let lastIndex = this._lastFrameIndex;
                const lastDirection = this._lastDirection;
                const iterationsChanged = lastIterations !== -1 && currentIterations !== lastIterations;
                if (lastIndex === eventIndex && iterationsChanged && length === 1) {
                  this._doFire(0, false);
                } else if (lastIndex !== eventIndex || iterationsChanged) {
                  direction = lastDirection;
                  do {
                    if (lastIndex !== eventIndex) {
                      if (direction === -1 && lastIndex === 0 && eventIndex > 0) {
                        if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                          direction *= -1;
                        } else {
                          lastIndex = length;
                        }
                        lastIterations++;
                      } else if (direction === 1 && lastIndex === length - 1 && eventIndex < length - 1) {
                        if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                          direction *= -1;
                        } else {
                          lastIndex = -1;
                        }
                        lastIterations++;
                      }
                      if (lastIndex === eventIndex) {
                        break;
                      }
                      if (lastIterations > currentIterations) {
                        break;
                      }
                    }
                    lastIndex += direction;
                    this._doFire(lastIndex, true);
                  } while (lastIndex !== eventIndex && lastIndex > -1 && lastIndex < length);
                }
                this._lastFrameIndex = eventIndex;
                this._lastIterations = iterations;
                this._lastDirection = direction;
              }
              _doFire(eventIndex, delay) {
                if (delay) {
                  getGlobalAnimationManager().pushDelayEvent(this._checkAndFire, this, [eventIndex]);
                } else {
                  this._checkAndFire(eventIndex);
                }
              }
              _checkAndFire(eventIndex) {
                if (!this._targetNode || !this._targetNode.isValid) {
                  return;
                }
                const {
                  _eventGroups: eventGroups
                } = this;
                if (eventIndex < 0 || eventIndex >= eventGroups.length || this._ignoreIndex === eventIndex) {
                  return;
                }
                const eventGroup = eventGroups[eventIndex];
                const nEvents = eventGroup.events.length;
                for (let iEvent = 0; iEvent < nEvents; ++iEvent) {
                  const event = eventGroup.events[iEvent];
                  invokeComponentMethodsEngagedInAnimationEvent(this._targetNode, event.functionName, event.parameters);
                }
              }
            }
            function wrapIterations(iterations) {
              if (iterations - (iterations | 0) === 0) {
                iterations -= 1;
              }
              return iterations | 0;
            }
            function getEventGroupIndexAtRatio(ratio, ratios) {
              const result = binarySearchEpsilon(ratios, ratio);
              return result;
            }

            class CrossFade extends Playable {
              constructor(scheduler) {
                super();
                this._managedStates = [];
                this._fadings = [];
                this._scheduled = false;
                this._scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : getGlobalAnimationManager();
              }
              update(deltaTime) {
                if (this.isMotionless) {
                  return;
                }
                const managedStates = this._managedStates;
                const fadings = this._fadings;
                if (managedStates.length === 1 && fadings.length === 1) {
                  const state = managedStates[0].state;
                  if (state) {
                    state.weight = 1.0;
                  }
                } else {
                  this._calculateWeights(deltaTime);
                }
                if (managedStates.length === 1 && fadings.length === 1) {
                  this._unscheduleThis();
                }
              }
              crossFade(state, duration) {
                var _target$state;
                if (this._managedStates.length === 0) {
                  duration = 0;
                }
                if (duration === 0) {
                  this.clear();
                }
                let target = this._managedStates.find(weightedState => weightedState.state === state);
                if (!target) {
                  target = {
                    state,
                    reference: 0
                  };
                  if (state) {
                    state.play();
                  }
                  this._managedStates.push(target);
                } else if ((_target$state = target.state) !== null && _target$state !== void 0 && _target$state.isMotionless) {
                  target.state.play();
                }
                ++target.reference;
                this._fadings.unshift({
                  easeDuration: duration,
                  easeTime: 0,
                  target
                });
                if (!this.isMotionless) {
                  this._scheduleThis();
                }
              }
              clear() {
                for (let iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
                  const state = this._managedStates[iManagedState].state;
                  if (state) {
                    state.stop();
                  }
                }
                this._managedStates.length = 0;
                this._fadings.length = 0;
              }
              onPlay() {
                super.onPlay();
                this._scheduleThis();
              }
              onPause() {
                super.onPause();
                for (let iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
                  const state = this._managedStates[iManagedState].state;
                  if (state) {
                    state.pause();
                  }
                }
                this._unscheduleThis();
              }
              onResume() {
                super.onResume();
                for (let iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
                  const state = this._managedStates[iManagedState].state;
                  if (state) {
                    state.resume();
                  }
                }
                this._scheduleThis();
              }
              onStop() {
                super.onStop();
                this.clear();
              }
              _calculateWeights(deltaTime) {
                const managedStates = this._managedStates;
                const fadings = this._fadings;
                for (let iManagedState = 0; iManagedState < managedStates.length; ++iManagedState) {
                  const state = managedStates[iManagedState].state;
                  if (state) {
                    state.weight = 0;
                  }
                }
                let absoluteWeight = 1.0;
                let deadFadingBegin = fadings.length;
                for (let iFading = 0; iFading < fadings.length; ++iFading) {
                  const fading = fadings[iFading];
                  fading.easeTime += deltaTime;
                  const relativeWeight = fading.easeDuration === 0 ? 1 : clamp01(fading.easeTime / fading.easeDuration);
                  const weight = relativeWeight * absoluteWeight;
                  absoluteWeight *= 1.0 - relativeWeight;
                  if (fading.target.state) {
                    fading.target.state.weight += weight;
                  }
                  if (fading.easeTime >= fading.easeDuration) {
                    deadFadingBegin = iFading + 1;
                    fading.easeTime = fading.easeDuration;
                    break;
                  }
                }
                if (deadFadingBegin !== fadings.length) {
                  for (let iDeadFading = deadFadingBegin; iDeadFading < fadings.length; ++iDeadFading) {
                    const deadFading = fadings[iDeadFading];
                    --deadFading.target.reference;
                    if (deadFading.target.reference <= 0) {
                      if (deadFading.target.state) {
                        deadFading.target.state.stop();
                      }
                      remove(this._managedStates, deadFading.target);
                    }
                  }
                  fadings.splice(deadFadingBegin);
                }
              }
              _scheduleThis() {
                if (!this._scheduled) {
                  this._scheduler.addCrossFade(this);
                  this._scheduled = true;
                }
              }
              _unscheduleThis() {
                if (this._scheduled) {
                  this._scheduler.removeCrossFade(this);
                  this._scheduled = false;
                }
              }
            }

            var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, _initializer3, _class3;
            let Animation = exports('s', (_dec = ccclass$1('cc.Animation'), _dec2 = executionOrder(99), _dec3 = type([AnimationClip]), _dec4 = type(AnimationClip), _dec5 = type([AnimationClip]), _dec(_class = _dec2(_class = (_class2 = (_class3 = class Animation extends Eventify(Component) {
              constructor(...args) {
                super(...args);
                this.playOnLoad = _initializer && _initializer();
                this._crossFade = new CrossFade();
                this._nameToState = createMap(true);
                this._clips = _initializer2 && _initializer2();
                this._defaultClip = _initializer3 && _initializer3();
                this._hasBeenPlayed = false;
              }
              get clips() {
                return this._clips;
              }
              set clips(value) {
                if (this._crossFade) {
                  this._crossFade.clear();
                }
                for (const clip of this._clips) {
                  if (clip) {
                    this._removeStateOfAutomaticClip(clip);
                  }
                }
                for (const clip of value) {
                  if (clip) {
                    this.createState(clip);
                  }
                }
                const newDefaultClip = value.find(clip => equalClips(clip, this._defaultClip));
                if (newDefaultClip) {
                  this._defaultClip = newDefaultClip;
                } else {
                  this._defaultClip = null;
                }
                this._clips = value;
              }
              get defaultClip() {
                return this._defaultClip;
              }
              set defaultClip(value) {
                this._defaultClip = value;
                if (!value) {
                  return;
                }
                const isBoundedDefaultClip = this._clips.findIndex(clip => equalClips(clip, value)) >= 0;
                if (!isBoundedDefaultClip) {
                  this._clips.push(value);
                  this.createState(value);
                }
              }
              onLoad() {
                this.clips = this._clips;
                for (const stateName in this._nameToState) {
                  const state = this._nameToState[stateName];
                  state.initialize(this.node);
                }
              }
              start() {
                if (this.playOnLoad && !this._hasBeenPlayed && this._defaultClip) {
                  this.crossFade(this._defaultClip.name, 0);
                }
              }
              onEnable() {
                this._crossFade.resume();
              }
              onDisable() {
                this._crossFade.pause();
              }
              onDestroy() {
                this._crossFade.stop();
                for (const name in this._nameToState) {
                  const state = this._nameToState[name];
                  state.destroy();
                }
                this._nameToState = createMap(true);
              }
              play(name) {
                this._hasBeenPlayed = true;
                if (!name) {
                  if (!this._defaultClip) {
                    return;
                  }
                  name = this._defaultClip.name;
                }
                this.crossFade(name, 0);
              }
              crossFade(name, duration = 0.3) {
                this._hasBeenPlayed = true;
                const state = this._nameToState[name];
                if (state) {
                  this.doPlayOrCrossFade(state, duration);
                }
              }
              pause() {
                this._crossFade.pause();
              }
              resume() {
                this._crossFade.resume();
              }
              stop() {
                this._crossFade.stop();
              }
              getState(name) {
                const state = this._nameToState[name];
                if (state && !state.curveLoaded) {
                  state.initialize(this.node);
                }
                return state || null;
              }
              createState(clip, name) {
                name = name || clip.name;
                this.removeState(name);
                return this._doCreateState(clip, name);
              }
              removeState(name) {
                const state = this._nameToState[name];
                if (state) {
                  state.allowLastFrameEvent(false);
                  state.stop();
                  delete this._nameToState[name];
                }
              }
              addClip(clip, name) {
                if (!contains(this._clips, clip)) {
                  this._clips.push(clip);
                }
                return this.createState(clip, name);
              }
              removeClip(clip, force) {
                let removalState;
                for (const name in this._nameToState) {
                  const state = this._nameToState[name];
                  const stateClip = state.clip;
                  if (stateClip === clip) {
                    removalState = state;
                    break;
                  }
                }
                if (clip === this._defaultClip) {
                  if (force) {
                    this._defaultClip = null;
                  } else {
                    {
                      warnID(3902);
                    }
                    return;
                  }
                }
                if (removalState && removalState.isPlaying) {
                  if (force) {
                    removalState.stop();
                  } else {
                    {
                      warnID(3903);
                    }
                    return;
                  }
                }
                this._clips = this._clips.filter(item => item !== clip);
                if (removalState) {
                  delete this._nameToState[removalState.name];
                }
              }
              on(type, callback, thisArg, once) {
                const ret = super.on(type, callback, thisArg, once);
                if (type === EventType.LASTFRAME) {
                  this._syncAllowLastFrameEvent();
                }
                return ret;
              }
              once(type, callback, thisArg) {
                const ret = super.once(type, callback, thisArg);
                if (type === EventType.LASTFRAME) {
                  this._syncAllowLastFrameEvent();
                }
                return ret;
              }
              off(type, callback, thisArg) {
                super.off(type, callback, thisArg);
                if (type === EventType.LASTFRAME) {
                  this._syncDisallowLastFrameEvent();
                }
              }
              _createState(clip, name) {
                return new AnimationState(clip, name);
              }
              _doCreateState(clip, name) {
                const state = this._createState(clip, name);
                state._setEventTarget(this);
                state.allowLastFrameEvent(this.hasEventListener(EventType.LASTFRAME));
                if (this.node) {
                  state.initialize(this.node);
                }
                this._nameToState[state.name] = state;
                return state;
              }
              doPlayOrCrossFade(state, duration) {
                this._crossFade.play();
                this._crossFade.crossFade(state, duration);
              }
              _removeStateOfAutomaticClip(clip) {
                for (const name in this._nameToState) {
                  const state = this._nameToState[name];
                  if (equalClips(clip, state.clip)) {
                    state.stop();
                    delete this._nameToState[name];
                  }
                }
              }
              _syncAllowLastFrameEvent() {
                if (this.hasEventListener(EventType.LASTFRAME)) {
                  for (const stateName in this._nameToState) {
                    this._nameToState[stateName].allowLastFrameEvent(true);
                  }
                }
              }
              _syncDisallowLastFrameEvent() {
                if (!this.hasEventListener(EventType.LASTFRAME)) {
                  for (const stateName in this._nameToState) {
                    this._nameToState[stateName].allowLastFrameEvent(false);
                  }
                }
              }
            }, _class3.EventType = EventType, _class3), (_applyDecoratedDescriptor(_class2.prototype, "clips", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "clips"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "defaultClip", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "defaultClip"), _class2.prototype), _initializer = applyDecoratedInitializer(_class2.prototype, "playOnLoad", [serializable$1], function () {
              return false;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_clips", [_dec5], function () {
              return [];
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_defaultClip", [serializable$1], function () {
              return null;
            })), _class2)) || _class) || _class));
            function equalClips(clip1, clip2) {
              if (clip1 === clip2) {
                return true;
              }
              return !!clip1 && !!clip2 && clip1._uuid === clip2._uuid && clip1._uuid;
            }
            legacyCC.Animation = Animation;
            legacyCC.AnimationComponent = Animation;
            setClassAlias(Animation, 'cc.AnimationComponent');

        })
    };
}));
