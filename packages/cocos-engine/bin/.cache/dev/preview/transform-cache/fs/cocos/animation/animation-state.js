System.register("q-bundled:///fs/cocos/animation/animation-state.js", ["../../../virtual/internal%253Aconstants.js", "./playable.js", "./types.js", "../core/index.js", "./pose-output.js", "./global-animation-manager.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, Playable, WrapMode, WrappedInfo, cclegacy, debug, geometry, ccenum, assertIsTrue, PoseOutput, getGlobalAnimationManager, EventType, AnimationState;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            http://www.cocos.com
                                                                                                                                                                                                           
                                                                                                                                                                                                            Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                            of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                            in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                            use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                            of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                            subject to the following conditions:
                                                                                                                                                                                                           
                                                                                                                                                                                                            The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                            all copies or substantial portions of the Software.
                                                                                                                                                                                                           
                                                                                                                                                                                                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                            THE SOFTWARE.
                                                                                                                                                                                                           */
  _export("EventType", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_playableJs) {
      Playable = _playableJs.Playable;
    }, function (_typesJs) {
      WrapMode = _typesJs.WrapMode;
      WrappedInfo = _typesJs.WrappedInfo;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      debug = _coreIndexJs.debug;
      geometry = _coreIndexJs.geometry;
      ccenum = _coreIndexJs.ccenum;
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_poseOutputJs) {
      PoseOutput = _poseOutputJs.PoseOutput;
    }, function (_globalAnimationManagerJs) {
      getGlobalAnimationManager = _globalAnimationManagerJs.getGlobalAnimationManager;
    }],
    execute: function () {
      (function (EventType) {
        EventType["PLAY"] = "play";
        EventType["STOP"] = "stop";
        EventType["PAUSE"] = "pause";
        EventType["RESUME"] = "resume";
        EventType["LASTFRAME"] = "lastframe";
        EventType["FINISHED"] = "finished";
      })(EventType || _export("EventType", EventType = {}));
      ccenum(EventType);

      /**
       * @en
       * The AnimationState gives full control over animation playback process.
       * In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.
       * @zh
       * AnimationState 完全控制动画播放过程。<br/>
       * 大多数情况下 动画组件 是足够和易于使用的。如果您需要更多的动画控制接口，请使用 AnimationState。
       *
       */
      _export("AnimationState", AnimationState = /*#__PURE__*/function (_Playable) {
        _inheritsLoose(AnimationState, _Playable);
        function AnimationState(clip, name) {
          var _this;
          if (name === void 0) {
            name = '';
          }
          _this = _Playable.call(this) || this;
          // http://www.w3.org/TR/web-animations/#idl-def-AnimationTiming
          /**
           * @en The iteration duration of this animation in seconds. (length)
           * @zh 单次动画的持续时间，秒。（动画长度）
           * @readOnly
           */
          _this.duration = 1.0;
          /**
           * @en The current accumulated time of this animation in seconds.
           * @zh 动画当前**累计播放**的时间，单位为秒。
           * @default 0
           */
          _this.time = 0.0;
          _this.frameRate = 0;
          /**
           * @internal This field is only visible from within internal.
           */
          _this._targetNode = null;
          /**
           * @internal This field is only visible from within internal.
           */
          _this._curveLoaded = false;
          _this._clip = void 0;
          _this._speed = 1.0;
          _this._useSimpleProcess = false;
          _this._target = null;
          _this._wrapMode = WrapMode.Normal;
          _this._repeatCount = 1;
          _this._delay = 0.0;
          _this._delayTime = 0.0;
          /**
           * Mark whether the current frame is played.
           * When set new time to animation state, we should ensure the frame at the specified time being played at next update.
           */
          _this._currentFramePlayed = false;
          _this._name = void 0;
          _this._lastIterations = NaN;
          _this._lastWrapInfo = null;
          _this._wrappedInfo = new WrappedInfo();
          _this._allowLastFrame = false;
          _this._blendStateWriterHost = {
            weight: 0.0
          };
          _this._playbackDuration = 0.0;
          _this._invDuration = 1.0;
          _this._poseOutput = null;
          _this._weight = 1.0;
          _this._clipEval = void 0;
          _this._clipEventEval = void 0;
          _this._clipEmbeddedPlayerEval = void 0;
          /**
           * @internal For internal usage. Really hack...
           */
          _this._doNotCreateEval = false;
          _this._clip = clip;
          _this._name = name || clip && clip.name;
          _this._playbackRange = {
            min: 0.0,
            max: clip.duration
          };
          _this._playbackDuration = clip.duration;
          if (!clip.duration) {
            debug("Clip " + clip.name + " has zero duration.");
          }
          return _this;
        }

        /**
         * This method is used for internal purpose only.
         */
        var _proto = AnimationState.prototype;
        _proto.initialize = function initialize(root, blendStateBuffer, mask) {
          if (this._curveLoaded) {
            return;
          }
          this._curveLoaded = true;
          if (this._poseOutput) {
            this._poseOutput.destroy();
            this._poseOutput = null;
          }
          if (this._clipEval) {
            // TODO: destroy?
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
          var clip = this._clip;
          this.duration = clip.duration;
          this._invDuration = 1.0 / this.duration;
          this._speed = clip.speed;
          this.wrapMode = clip.wrapMode;
          this.frameRate = clip.sample;
          this._playbackRange.min = 0.0;
          this._playbackRange.max = clip.duration;
          this._playbackDuration = clip.duration;
          if ((this.wrapMode & geometry.WrapModeMask.Loop) === geometry.WrapModeMask.Loop) {
            this.repeatCount = Infinity;
          } else {
            this.repeatCount = 1;
          }
          if (!this._doNotCreateEval) {
            var _ref, _getGlobalAnimationMa, _this$_poseOutput;
            var pose = (_ref = blendStateBuffer !== null && blendStateBuffer !== void 0 ? blendStateBuffer : (_getGlobalAnimationMa = getGlobalAnimationManager()) === null || _getGlobalAnimationMa === void 0 ? void 0 : _getGlobalAnimationMa.blendState) !== null && _ref !== void 0 ? _ref : null;
            if (pose) {
              this._poseOutput = new PoseOutput(pose);
            }
            this._clipEval = clip.createEvaluator({
              target: root,
              pose: (_this$_poseOutput = this._poseOutput) !== null && _this$_poseOutput !== void 0 ? _this$_poseOutput : undefined,
              mask: mask
            });
          }
          if (!EDITOR_NOT_IN_PREVIEW) {
            if (clip.containsAnyEvent()) {
              this._clipEventEval = clip.createEventEvaluator(this._targetNode);
            }
          }
          if (clip.containsAnyEmbeddedPlayer()) {
            this._clipEmbeddedPlayerEval = clip.createEmbeddedPlayerEvaluator(this._targetNode);
            this._clipEmbeddedPlayerEval.notifyHostSpeedChanged(this._speed);
          }
        };
        _proto.destroy = function destroy() {
          if (!this.isMotionless) {
            getGlobalAnimationManager().removeAnimation(this);
          }
          if (this._poseOutput) {
            this._poseOutput.destroy();
            this._poseOutput = null;
          }
          // TODO: destroy?
          this._clipEval = undefined;
        }

        /**
         * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
         * To process animation events, use `Animation` instead.
         */;
        _proto.emit = function emit() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          getGlobalAnimationManager().pushDelayEvent(this._emit, this, args);
        }

        /**
         * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
         * To process animation events, use `Animation` instead.
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        ;
        _proto.on = function on(type, callback, target) {
          if (this._target && this._target.isValid) {
            return this._target.on(type, callback, target);
          } else {
            return null;
          }
        }

        /**
         * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
         * To process animation events, use `Animation` instead.
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        ;
        _proto.once = function once(type, callback, target) {
          if (this._target && this._target.isValid) {
            return this._target.once(type, callback, target);
          } else {
            return null;
          }
        }

        /**
         * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
         * To process animation events, use `Animation` instead.
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        ;
        _proto.off = function off(type, callback, target) {
          if (this._target && this._target.isValid) {
            this._target.off(type, callback, target);
          }
        }

        /**
         * @zh
         * 是否允许触发 `LastFrame` 事件。
         * 该方法仅用作内部用途。
         * @en
         * Whether `LastFrame` should be triggered.
         * @param allowed True if the last frame events may be triggered.
         * This method is only used for internal purpose only.
         */;
        _proto.allowLastFrameEvent = function allowLastFrameEvent(allowed) {
          this._allowLastFrame = allowed;
        }

        /**
         * This method is used for internal purpose only.
         * @internal
         */;
        _proto._setEventTarget = function _setEventTarget(target) {
          this._target = target;
        };
        _proto.setTime = function setTime(time) {
          this._currentFramePlayed = false;
          this.time = time || 0.0;
          if (!EDITOR_NOT_IN_PREVIEW) {
            var _this$_clipEventEval;
            var info = this.getWrappedInfo(time, this._wrappedInfo);
            (_this$_clipEventEval = this._clipEventEval) === null || _this$_clipEventEval === void 0 ? void 0 : _this$_clipEventEval.ignore(info.ratio, info.direction);
          }
        };
        _proto.update = function update(delta) {
          // calculate delay time

          if (this._delayTime > 0.0) {
            this._delayTime -= delta;
            if (this._delayTime > 0.0) {
              // still waiting
              return;
            }
          }

          // make first frame perfect

          // var playPerfectFirstFrame = (this.time === 0);
          if (this._currentFramePlayed) {
            this.time += delta * this._speed;
          } else {
            this._currentFramePlayed = true;
          }
          this._process();
        };
        _proto.sample = function sample() {
          var info = this.getWrappedInfo(this.time, this._wrappedInfo);
          this._sampleCurves(info.time);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this._sampleEvents(info);
          }
          this._sampleEmbeddedPlayers(info);
          return info;
        };
        _proto.onPlay = function onPlay() {
          var _this$_clipEmbeddedPl;
          this.setTime(this._getPlaybackStart());
          this._delayTime = this._delay;
          this._onReplayOrResume();
          this.emit(EventType.PLAY, this);
          (_this$_clipEmbeddedPl = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl === void 0 ? void 0 : _this$_clipEmbeddedPl.notifyHostPlay(this.current);
        };
        _proto.onStop = function onStop() {
          var _this$_clipEmbeddedPl2;
          if (!this.isPaused) {
            this._onPauseOrStop();
          }
          this.emit(EventType.STOP, this);
          (_this$_clipEmbeddedPl2 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl2 === void 0 ? void 0 : _this$_clipEmbeddedPl2.notifyHostStop();
        };
        _proto.onResume = function onResume() {
          var _this$_clipEmbeddedPl3;
          this._onReplayOrResume();
          this.emit(EventType.RESUME, this);
          (_this$_clipEmbeddedPl3 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl3 === void 0 ? void 0 : _this$_clipEmbeddedPl3.notifyHostPlay(this.current);
        };
        _proto.onPause = function onPause() {
          var _this$_clipEmbeddedPl4;
          this._onPauseOrStop();
          this.emit(EventType.PAUSE, this);
          (_this$_clipEmbeddedPl4 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl4 === void 0 ? void 0 : _this$_clipEmbeddedPl4.notifyHostPause(this.current);
        }

        /**
         * @internal
         */;
        _proto._sampleCurves = function _sampleCurves(time) {
          var poseOutput = this._poseOutput,
            clipEval = this._clipEval;
          if (poseOutput) {
            poseOutput.weight = this.weight;
          }
          if (clipEval) {
            clipEval.evaluate(time);
          }
        };
        _proto._process = function _process() {
          if (this._useSimpleProcess) {
            this.simpleProcess();
          } else {
            this.process();
          }
        };
        _proto.process = function process() {
          // sample
          var info = this.sample();
          if (this._allowLastFrame) {
            var lastInfo;
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
        };
        _proto.simpleProcess = function simpleProcess() {
          var playbackStart = this._playbackRange.min;
          var playbackDuration = this._playbackDuration;
          var time = 0.0;
          var ratio = 0.0;
          if (playbackDuration !== 0.0) {
            time = this.time % playbackDuration;
            if (time < 0.0) {
              time += playbackDuration;
            }
            var realTime = playbackStart + time;
            ratio = realTime * this._invDuration;
          }
          this._sampleCurves(playbackStart + time);
          if (this._clipEventEval || this._clipEmbeddedPlayerEval) {
            var wrapInfo = this.getWrappedInfo(this.time, this._wrappedInfo);
            if (!EDITOR_NOT_IN_PREVIEW) {
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
        };
        _proto._needReverse = function _needReverse(currentIterations) {
          var wrapMode = this.wrapMode;
          var needReverse = false;
          if ((wrapMode & geometry.WrapModeMask.PingPong) === geometry.WrapModeMask.PingPong) {
            var isEnd = currentIterations - (currentIterations | 0) === 0;
            if (isEnd && currentIterations > 0) {
              currentIterations -= 1;
            }
            var isOddIteration = currentIterations & 1;
            if (isOddIteration) {
              needReverse = !needReverse;
            }
          }
          if ((wrapMode & geometry.WrapModeMask.Reverse) === geometry.WrapModeMask.Reverse) {
            needReverse = !needReverse;
          }
          return needReverse;
        };
        _proto.getWrappedInfo = function getWrappedInfo(time, info) {
          info = info || new WrappedInfo();
          var playbackStart = this._playbackRange.min,
            playbackDuration = this._playbackDuration;
          var repeatCount = this.repeatCount;
          if (playbackDuration === 0.0) {
            info.time = 0.0;
            info.ratio = 0.0;
            info.direction = 1.0;
            info.stopped = !!Number.isFinite(repeatCount);
            info.iterations = 0.0;
            return info;
          }
          var stopped = false;
          time -= playbackStart;
          var currentIterations = time > 0 ? time / playbackDuration : -(time / playbackDuration);
          if (currentIterations >= repeatCount) {
            currentIterations = repeatCount;
            stopped = true;
            var tempRatio = repeatCount - (repeatCount | 0);
            if (tempRatio === 0) {
              tempRatio = 1; // 如果播放过，动画不复位
            }

            time = tempRatio * playbackDuration * (time > 0 ? 1 : -1);
          }
          if (time > playbackDuration) {
            var tempTime = time % playbackDuration;
            time = tempTime === 0 ? playbackDuration : tempTime;
          } else if (time < 0) {
            time %= playbackDuration;
            if (time !== 0) {
              time += playbackDuration;
            }
          }
          var needReverse = false;
          var shouldWrap = this._wrapMode & geometry.WrapModeMask.ShouldWrap;
          if (shouldWrap) {
            needReverse = this._needReverse(currentIterations);
          }
          var direction = needReverse ? -1 : 1;
          if (this.speed < 0) {
            direction *= -1;
          }

          // calculate wrapped time
          if (shouldWrap && needReverse) {
            time = playbackDuration - time;
          }
          info.time = playbackStart + time;
          info.ratio = info.time / this.duration;
          info.direction = direction;
          info.stopped = stopped;
          info.iterations = currentIterations;
          return info;
        };
        _proto._getPlaybackStart = function _getPlaybackStart() {
          return this._playbackRange.min;
        };
        _proto._sampleEvents = function _sampleEvents(wrapInfo) {
          var _this$_clipEventEval2;
          (_this$_clipEventEval2 = this._clipEventEval) === null || _this$_clipEventEval2 === void 0 ? void 0 : _this$_clipEventEval2.sample(wrapInfo.ratio, wrapInfo.direction, wrapInfo.iterations);
        };
        _proto._sampleEmbeddedPlayers = function _sampleEmbeddedPlayers(wrapInfo) {
          var _this$_clipEmbeddedPl5;
          (_this$_clipEmbeddedPl5 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl5 === void 0 ? void 0 : _this$_clipEmbeddedPl5.evaluate(wrapInfo.time, Math.trunc(wrapInfo.iterations));
        };
        _proto._emit = function _emit(type, state) {
          if (this._target && this._target.isValid) {
            this._target.emit(type, type, state);
          }
        };
        _proto._onReplayOrResume = function _onReplayOrResume() {
          getGlobalAnimationManager().addAnimation(this);
        };
        _proto._onPauseOrStop = function _onPauseOrStop() {
          getGlobalAnimationManager().removeAnimation(this);
        };
        _createClass(AnimationState, [{
          key: "clip",
          get:
          /**
           * @en The clip that is being played by this animation state.
           * @zh 此动画状态正在播放的剪辑。
           */
          function get() {
            return this._clip;
          }

          /**
           * @en The name of the playing animation.
           * @zh 动画的名字。
           */
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }, {
          key: "length",
          get: function get() {
            return this.duration;
          }

          /**
           * @en
           * Wrapping mode of the playing animation.
           * Notice : dynamic change wrapMode will reset time and repeatCount property
           * @zh
           * 动画循环方式。
           * 需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount。
           * @default: WrapMode.Normal
           */
        }, {
          key: "wrapMode",
          get: function get() {
            return this._wrapMode;
          },
          set: function set(value) {
            var _this$_clipEventEval3;
            this._wrapMode = value;

            // dynamic change wrapMode will need reset time to 0
            this.time = 0;
            if (value & geometry.WrapModeMask.Loop) {
              this.repeatCount = Infinity;
            } else {
              this.repeatCount = 1;
            }
            (_this$_clipEventEval3 = this._clipEventEval) === null || _this$_clipEventEval3 === void 0 ? void 0 : _this$_clipEventEval3.setWrapMode(value);
          }

          /**
           * @en The animation's iteration count property.
           *
           * A real number greater than or equal to zero (including positive infinity) representing the number of times
           * to repeat the animation node.
           *
           * Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
           * calculations.
           *
           * @zh 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）。
           *
           * @default 1
           */
        }, {
          key: "repeatCount",
          get: function get() {
            return this._repeatCount;
          },
          set: function set(value) {
            this._repeatCount = value;
            var shouldWrap = this._wrapMode & geometry.WrapModeMask.ShouldWrap;
            var reverse = (this.wrapMode & geometry.WrapModeMask.Reverse) === geometry.WrapModeMask.Reverse;
            if (value === Infinity && !shouldWrap && !reverse) {
              this._useSimpleProcess = true;
            } else {
              this._useSimpleProcess = false;
            }
          }

          /**
           * @en The start delay which represents the number of seconds from an animation's start time to the start of
           * the active interval.
           * @zh 延迟多少秒播放。
           * @default 0
           */
        }, {
          key: "delay",
          get: function get() {
            return this._delay;
          },
          set: function set(value) {
            this._delayTime = this._delay = value;
          }
        }, {
          key: "playbackRange",
          get:
          /**
           * @en
           * Gets or sets the playback range.
           * The `min` and `max` field of the range are measured in seconds.
           * While setting, the range object should be a valid range.
           * The actual playback range would be the inclusion of this field and [0, duration].
           * Set this field would reset the accumulated play time.
           * If `min === max`, the animation always play at `min`.
           * @zh
           * 获取或设置播放范围。
           * 范围的 `min`、`max` 字段都是以秒为单位的。
           * 设置时，应当指定一个有效的范围；实际的播放范围是该字段和 [0, 周期] 之间的交集。
           * 设置播放范围时将重置累计播放时间。
           * 如果 `min === max`，该动画将一直在 `min` 处播放。
           */
          function get() {
            return this._playbackRange;
          },
          set: function set(value) {
            assertIsTrue(value.max >= value.min);
            this._playbackRange.min = Math.max(value.min, 0);
            this._playbackRange.max = Math.min(value.max, this.duration);
            this._playbackDuration = this._playbackRange.max - this._playbackRange.min;
            this.setTime(0.0);
          }

          /**
           * @en The animation's playback speed. 1 is normal playback speed.
           * @zh 播放速率。
           * @default: 1.0
           */
        }, {
          key: "speed",
          get: function get() {
            return this._speed;
          },
          set: function set(value) {
            var _this$_clipEmbeddedPl6;
            this._speed = value;
            (_this$_clipEmbeddedPl6 = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl6 === void 0 ? void 0 : _this$_clipEmbeddedPl6.notifyHostSpeedChanged(value);
          }
        }, {
          key: "current",
          get:
          /**
           * @en Gets the time progress, in seconds.
           * @zh 获取动画的时间进度，单位为秒。
           */
          function get() {
            return this.getWrappedInfo(this.time).time;
          }

          /**
           * @en Gets the playback ratio.
           * @zh 获取动画播放的比例时间。
           */
        }, {
          key: "ratio",
          get: function get() {
            return this.duration === 0.0 ? 0.0 : this.current / this.duration;
          }

          /**
           * @en
           * The weight of this animation state.
           * @zh
           * 此动画状态的权重。
           */
        }, {
          key: "weight",
          get: function get() {
            return this._weight;
          },
          set: function set(value) {
            this._weight = value;
            if (this._poseOutput) {
              this._poseOutput.weight = value;
            }
          }
        }, {
          key: "curveLoaded",
          get: function get() {
            return this._curveLoaded;
          }
        }]);
        return AnimationState;
      }(Playable));
      cclegacy.AnimationState = AnimationState;
    }
  };
});