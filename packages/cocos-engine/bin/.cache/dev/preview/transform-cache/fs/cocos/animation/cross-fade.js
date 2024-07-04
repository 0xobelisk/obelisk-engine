System.register("q-bundled:///fs/cocos/animation/cross-fade.js", ["../core/index.js", "./playable.js", "./global-animation-manager.js"], function (_export, _context) {
  "use strict";

  var clamp01, js, Playable, getGlobalAnimationManager, CrossFade;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            https://www.cocos.com/
                                                                                                                                                                                                           
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
  return {
    setters: [function (_coreIndexJs) {
      clamp01 = _coreIndexJs.clamp01;
      js = _coreIndexJs.js;
    }, function (_playableJs) {
      Playable = _playableJs.Playable;
    }, function (_globalAnimationManagerJs) {
      getGlobalAnimationManager = _globalAnimationManagerJs.getGlobalAnimationManager;
    }],
    execute: function () {
      _export("CrossFade", CrossFade = /*#__PURE__*/function (_Playable) {
        _inheritsLoose(CrossFade, _Playable);
        function CrossFade(scheduler) {
          var _this;
          _this = _Playable.call(this) || this;
          _this._managedStates = [];
          _this._fadings = [];
          _this._scheduled = false;
          _this._scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : getGlobalAnimationManager();
          return _this;
        }
        var _proto = CrossFade.prototype;
        _proto.update = function update(deltaTime) {
          if (this.isMotionless) {
            return;
          }
          var managedStates = this._managedStates;
          var fadings = this._fadings;
          if (managedStates.length === 1 && fadings.length === 1) {
            var state = managedStates[0].state;
            if (state) {
              state.weight = 1.0;
            }
          } else {
            this._calculateWeights(deltaTime);
          }
          if (managedStates.length === 1 && fadings.length === 1) {
            // Definitely not code repetition
            this._unscheduleThis();
          }
        }

        /**
         * 在指定时间内将从当前动画状态切换到指定的动画状态。
         * @param state 指定的动画状态。
         * @param duration 切换时间。
         */;
        _proto.crossFade = function crossFade(state, duration) {
          var _target$state;
          if (this._managedStates.length === 0) {
            // If we are cross fade from a "initial" pose,
            // we do not use the duration.
            // It's meaning-less and may get a bad visual effect.
            duration = 0;
          }
          if (duration === 0) {
            this.clear();
          }
          var target = this._managedStates.find(function (weightedState) {
            return weightedState.state === state;
          });
          if (!target) {
            target = {
              state: state,
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
            target: target
          });
          if (!this.isMotionless) {
            this._scheduleThis();
          }
        };
        _proto.clear = function clear() {
          for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
            var state = this._managedStates[iManagedState].state;
            if (state) {
              state.stop();
            }
          }
          this._managedStates.length = 0;
          this._fadings.length = 0;
        };
        _proto.onPlay = function onPlay() {
          _Playable.prototype.onPlay.call(this);
          this._scheduleThis();
        }

        /**
         * 停止我们淡入淡出的所有动画状态并停止淡入淡出。
         */;
        _proto.onPause = function onPause() {
          _Playable.prototype.onPause.call(this);
          for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
            var state = this._managedStates[iManagedState].state;
            if (state) {
              state.pause();
            }
          }
          this._unscheduleThis();
        }

        /**
         * 恢复我们淡入淡出的所有动画状态并继续淡入淡出。
         */;
        _proto.onResume = function onResume() {
          _Playable.prototype.onResume.call(this);
          for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
            var state = this._managedStates[iManagedState].state;
            if (state) {
              state.resume();
            }
          }
          this._scheduleThis();
        }

        /**
         * 停止所有淡入淡出的动画状态。
         */;
        _proto.onStop = function onStop() {
          _Playable.prototype.onStop.call(this);
          this.clear();
        };
        _proto._calculateWeights = function _calculateWeights(deltaTime) {
          var managedStates = this._managedStates;
          var fadings = this._fadings;

          // Set all state's weight to 0.
          for (var iManagedState = 0; iManagedState < managedStates.length; ++iManagedState) {
            var state = managedStates[iManagedState].state;
            if (state) {
              state.weight = 0;
            }
          }

          // Allocate weights.
          var absoluteWeight = 1.0;
          var deadFadingBegin = fadings.length;
          for (var iFading = 0; iFading < fadings.length; ++iFading) {
            var fading = fadings[iFading];
            fading.easeTime += deltaTime;
            // We should properly handle the case of
            // `fading.easeTime === 0 && fading.easeDuration === 0`, which yields `NaN`.
            var relativeWeight = fading.easeDuration === 0 ? 1 : clamp01(fading.easeTime / fading.easeDuration);
            var weight = relativeWeight * absoluteWeight;
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

          // Kill fadings having no lifetime.
          if (deadFadingBegin !== fadings.length) {
            for (var iDeadFading = deadFadingBegin; iDeadFading < fadings.length; ++iDeadFading) {
              var deadFading = fadings[iDeadFading];
              --deadFading.target.reference;
              if (deadFading.target.reference <= 0) {
                if (deadFading.target.state) {
                  deadFading.target.state.stop();
                }
                js.array.remove(this._managedStates, deadFading.target);
              }
            }
            fadings.splice(deadFadingBegin);
          }
        };
        _proto._scheduleThis = function _scheduleThis() {
          if (!this._scheduled) {
            this._scheduler.addCrossFade(this);
            this._scheduled = true;
          }
        };
        _proto._unscheduleThis = function _unscheduleThis() {
          if (this._scheduled) {
            this._scheduler.removeCrossFade(this);
            this._scheduled = false;
          }
        };
        return CrossFade;
      }(Playable));
    }
  };
});