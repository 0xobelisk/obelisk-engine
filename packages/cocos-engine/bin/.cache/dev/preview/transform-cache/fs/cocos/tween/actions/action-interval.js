System.register("q-bundled:///fs/cocos/tween/actions/action-interval.js", ["./action.js", "../../core/index.js", "./action-instant.js"], function (_export, _context) {
  "use strict";

  var FiniteTimeAction, Action, macro, logID, errorID, ActionInstant, _class2, _class5, ActionInterval, Sequence, Repeat, RepeatForever, Spawn, DelayTime, ReverseTime;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2008-2010 Ricardo Quesada
                                                                                                                                                                                                            Copyright (c) 2011-2012 cocos2d-x.org
                                                                                                                                                                                                            Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                            Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            http://www.cocos2d-x.org
                                                                                                                                                                                                           
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
  /**
   * @en
   * Helper constructor to create an array of sequenceable actions
   * The created action will run actions sequentially, one after another.
   * @zh 顺序执行动作，创建的动作将按顺序依次运行。
   * @method sequence
   * @param {FiniteTimeAction|FiniteTimeAction[]} actionOrActionArray
   * @param {FiniteTimeAction} ...tempArray
   * @return {ActionInterval}
   * @example
   * import { sequence } from 'cc';
   *
   * // Create sequence with actions
   * const seq = sequence(act1, act2);
   *
   * // Create sequence with array
   * const seq = sequence(actArray);
   */
  // todo: It should be use new
  function sequence( /* Multiple Arguments */tempArray) {
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length === 1) {
      return paramArray[0];
    }
    var last = paramArray.length - 1;
    if (last >= 0 && paramArray[last] == null) logID(1015);
    var result = null;
    if (last >= 0) {
      result = paramArray[0];
      for (var i = 1; i <= last; i++) {
        if (paramArray[i]) {
          result = Sequence._actionOneTwo(result, paramArray[i]);
        }
      }
    }
    return result;
  }

  /*
   * Repeats an action a number of times.
   * To repeat an action forever use the CCRepeatForever action.
   * @class Repeat
   * @extends ActionInterval
   * @param {FiniteTimeAction} action
   * @param {Number} times
   * @example
   * import { Repeat, sequence } from 'cc';
   * const rep = new Repeat(sequence(jump2, jump1), 5);
   */

  /**
   * @en Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
   * @zh 重复动作，可以按一定次数重复一个动，如果想永远重复一个动作请使用 repeatForever 动作来完成。
   * @method repeat
   * @param {FiniteTimeAction} action
   * @param {Number} times
   * @return {Action}
   * @example
   * import { repeat, sequence } from 'cc';
   * const rep = repeat(sequence(jump2, jump1), 5);
   */
  function repeat(action, times) {
    return new Repeat(action, times);
  }

  /*
   * Repeats an action for ever.  <br/>
   * To repeat the an action for a limited number of times use the Repeat action. <br/>
   * @warning This action can't be Sequenceable because it is not an IntervalAction
   * @class RepeatForever
   * @extends ActionInterval
   * @param {ActionInterval} action
   * @example
   * import { sequence, RepeatForever } from 'cc';
   * const rep = new RepeatForever(sequence(jump2, jump1), 5);
   */

  /**
   * @en Create a acton which repeat forever, as it runs forever, it can't be added into `sequence` and `spawn`.
   * @zh 永远地重复一个动作，有限次数内重复一个动作请使用 repeat 动作，由于这个动作不会停止，所以不能被添加到 `sequence` 或 `spawn` 中。
   * @method repeatForever
   * @param {FiniteTimeAction} action
   * @return {ActionInterval}
   * @example
   * import { repeatForever, rotateBy } from 'cc';
   * var repeat = repeatForever(rotateBy(1.0, 360));
   */
  function repeatForever(action) {
    return new RepeatForever(action);
  }

  /*
   * Spawn a new action immediately
   * @class Spawn
   * @extends ActionInterval
   */

  /**
   * @en Create a spawn action which runs several actions in parallel.
   * @zh 同步执行动作，同步执行一组动作。
   * @method spawn
   * @param {FiniteTimeAction|FiniteTimeAction[]} actionOrActionArray
   * @param {FiniteTimeAction} ...tempArray
   * @return {FiniteTimeAction}
   * @example
   * import { spawn, jumpBy, rotateBy, Vec2 } from 'cc';
   * const action = spawn(jumpBy(2, new Vec2(300, 0), 50, 4), rotateBy(2, 720));
   * todo: It should be the direct use new
   */
  function spawn( /* Multiple Arguments */tempArray) {
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length === 1) {
      errorID(1020);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return null;
    }
    if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null) logID(1015);
    var prev = paramArray[0];
    for (var i = 1; i < paramArray.length; i++) {
      if (paramArray[i] != null) prev = Spawn._actionOneTwo(prev, paramArray[i]);
    }
    return prev;
  }

  /* Delays the action a certain amount of seconds
   * @class DelayTime
   * @extends ActionInterval
   */

  /**
   * @en Delays the action a certain amount of seconds.
   * @zh 延迟指定的时间量。
   * @method delayTime
   * @param {Number} d duration in seconds
   * @return {ActionInterval}
   * @example
   * import { delayTime } from 'cc';
   * const delay = delayTime(1);
   */
  function delayTime(d) {
    return new DelayTime(d);
  }

  /**
   * <p>
   * Executes an action in reverse order, from time=duration to time=0                                     <br/>
   * @warning Use this action carefully. This action is not sequenceable.                                 <br/>
   * Use it as the default "reversed" method of your own actions, but using it outside the "reversed"      <br/>
   * scope is not recommended.
   * </p>
   * @class ReverseTime
   * @extends ActionInterval
   * @param {FiniteTimeAction} action
   * @example
   * import ReverseTime from 'cc';
   * var reverse = new ReverseTime(this);
   */

  /**
   * @en Executes an action in reverse order, from time=duration to time=0.
   * @zh 反转目标动作的时间轴。
   * @method reverseTime
   * @param {FiniteTimeAction} action
   * @return {ActionInterval}
   * @example
   * import { reverseTime } from 'cc';
   * const reverse = reverseTime(this);
   */
  function reverseTime(action) {
    return new ReverseTime(action);
  }
  _export({
    sequence: sequence,
    repeat: repeat,
    repeatForever: repeatForever,
    spawn: spawn,
    delayTime: delayTime,
    reverseTime: reverseTime
  });
  return {
    setters: [function (_actionJs) {
      FiniteTimeAction = _actionJs.FiniteTimeAction;
      Action = _actionJs.Action;
    }, function (_coreIndexJs) {
      macro = _coreIndexJs.macro;
      logID = _coreIndexJs.logID;
      errorID = _coreIndexJs.errorID;
    }, function (_actionInstantJs) {
      ActionInstant = _actionInstantJs.ActionInstant;
    }],
    execute: function () {
      /**
       * @en
       * <p> An interval action is an action that takes place within a certain period of time. <br/>
       * It has an start time, and a finish time. The finish time is the parameter<br/>
       * duration plus the start time.</p>
       *
       * <p>These CCActionInterval actions have some interesting properties, like:<br/>
       * - They can run normally (default)  <br/>
       * - They can run reversed with the reverse method   <br/>
       * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
       *
       * <p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
       * then running it again in Reverse mode. </p>
       * @zh 时间间隔动作，这种动作在已定时间内完成，继承 FiniteTimeAction。
       * @class ActionInterval
       * @extends FiniteTimeAction
       * @param {Number} d duration in seconds
       */
      _export("ActionInterval", ActionInterval = /*#__PURE__*/function (_FiniteTimeAction) {
        _inheritsLoose(ActionInterval, _FiniteTimeAction);
        // Compatible with repeat class, Discard after can be deleted

        function ActionInterval(d) {
          var _this;
          _this = _FiniteTimeAction.call(this) || this;
          _this.MAX_VALUE = 2;
          _this._elapsed = 0;
          _this._firstTick = false;
          // eslint-disable-next-line @typescript-eslint/ban-types
          _this._easeList = [];
          _this._speed = 1;
          _this._repeatForever = false;
          _this._repeatMethod = false;
          // Compatible with repeat class, Discard after can be deleted
          _this._speedMethod = false;
          if (d !== undefined && !Number.isNaN(d)) {
            _this.initWithDuration(d);
          }
          return _this;
        }

        /*
         * How many seconds had elapsed since the actions started to run.
         * @return {Number}
         */
        var _proto = ActionInterval.prototype;
        _proto.getElapsed = function getElapsed() {
          return this._elapsed;
        }

        /*
         * Initializes the action.
         * @param {Number} d duration in seconds
         * @return {Boolean}
         */;
        _proto.initWithDuration = function initWithDuration(d) {
          this._duration = d === 0 ? macro.FLT_EPSILON : d;
          // prevent division by 0
          // This comparison could be in step:, but it might decrease the performance
          // by 3% in heavy based action games.
          this._elapsed = 0;
          this._firstTick = true;
          return true;
        };
        _proto.isDone = function isDone() {
          return this._elapsed >= this._duration;
        };
        _proto._cloneDecoration = function _cloneDecoration(action) {
          action._repeatForever = this._repeatForever;
          action._speed = this._speed;
          action._timesForRepeat = this._timesForRepeat;
          action._easeList = this._easeList;
          action._speedMethod = this._speedMethod;
          action._repeatMethod = this._repeatMethod;
        };
        _proto._reverseEaseList = function _reverseEaseList(action) {
          if (this._easeList) {
            action._easeList = [];
            for (var i = 0; i < this._easeList.length; i++) {
              action._easeList.push(this._easeList[i]);
            }
          }
        };
        _proto.clone = function clone() {
          var action = new ActionInterval(this._duration);
          this._cloneDecoration(action);
          return action;
        }

        /**
         * @en Implementation of ease motion.
         * @zh 缓动运动。
         * @method easing
         * @param {Object} easeObj
         * @returns {ActionInterval}
         * @example
         * import { easeIn } from 'cc';
         * action.easing(easeIn(3.0));
         */;
        _proto.easing = function easing(easeObj) {
          if (this._easeList) this._easeList.length = 0;else this._easeList = [];
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          for (var i = 0; i < arguments.length; i++) this._easeList.push(arguments[i]);
          return this;
        };
        _proto._computeEaseTime = function _computeEaseTime(dt) {
          // var locList = this._easeList;
          // if ((!locList) || (locList.length === 0))
          //     return dt;
          // for (var i = 0, n = locList.length; i < n; i++)
          //     dt = locList[i].easing(dt);
          return dt;
        };
        _proto.step = function step(dt) {
          if (this._firstTick) {
            this._firstTick = false;
            this._elapsed = 0;
          } else this._elapsed += dt;

          // this.update((1 > (this._elapsed / this._duration)) ? this._elapsed / this._duration : 1);
          // this.update(Math.max(0, Math.min(1, this._elapsed / Math.max(this._duration, cc.macro.FLT_EPSILON))));
          var t = this._elapsed / (this._duration > 0.0000001192092896 ? this._duration : 0.0000001192092896);
          t = t < 1 ? t : 1;
          this.update(t > 0 ? t : 0);

          // Compatible with repeat class, Discard after can be deleted (this._repeatMethod)
          if (this._repeatMethod && this._timesForRepeat > 1 && this.isDone()) {
            if (!this._repeatForever) {
              this._timesForRepeat--;
            }
            // var diff = locInnerAction.getElapsed() - locInnerAction._duration;
            this.startWithTarget(this.target);
            // to prevent jerk. issue #390 ,1247
            // this._innerAction.step(0);
            // this._innerAction.step(diff);
            this.step(this._elapsed - this._duration);
          }
        };
        _proto.startWithTarget = function startWithTarget(target) {
          Action.prototype.startWithTarget.call(this, target);
          this._elapsed = 0;
          this._firstTick = true;
        };
        _proto.reverse = function reverse() {
          logID(1010);
          return this;
        }

        /*
         * Set amplitude rate.
         * @warning It should be overridden in subclass.
         * @param {Number} amp
         */;
        _proto.setAmplitudeRate = function setAmplitudeRate(amp) {
          // Abstract class needs implementation
          logID(1011);
        }

        /*
         * Get amplitude rate.
         * @warning It should be overridden in subclass.
         * @return {Number} 0
         */;
        _proto.getAmplitudeRate = function getAmplitudeRate() {
          // Abstract class needs implementation
          logID(1012);
          return 0;
        }

        /**
         * @en
         * Changes the speed of an action, making it take longer (speed>1)
         * or less (speed<1) time. <br/>
         * Useful to simulate 'slow motion' or 'fast forward' effect.
         * @zh
         * 改变一个动作的速度，使它的执行使用更长的时间（speed > 1）<br/>
         * 或更少（speed < 1）可以有效得模拟“慢动作”或“快进”的效果。
         * @param {Number} speed
         * @returns {Action}
         */;
        _proto.speed = function speed(_speed) {
          if (_speed <= 0) {
            logID(1013);
            return this;
          }
          this._speedMethod = true; // Compatible with repeat class, Discard after can be deleted
          this._speed *= _speed;
          return this;
        }

        /**
         * @en
         * Get this action speed.
         * @zh
         * 返回此动作速度
         * @return {Number}
         */;
        _proto.getSpeed = function getSpeed() {
          return this._speed;
        }

        /**
         * @en
         * Set this action speed.
         * @zh
         * 设置此动作速度
         * @param {Number} speed
         * @returns {ActionInterval}
         */;
        _proto.setSpeed = function setSpeed(speed) {
          this._speed = speed;
          return this;
        }

        /**
         * @en
         * Repeats an action a number of times.
         * To repeat an action forever use the CCRepeatForever action.
         * @zh 重复动作可以按一定次数重复一个动作，使用 RepeatForever 动作来永远重复一个动作。
         * @method repeat
         * @param {Number} times
         * @returns {ActionInterval}
         */;
        _proto.repeat = function repeat(times) {
          times = Math.round(times);
          if (Number.isNaN(times) || times < 1) {
            logID(1014);
            return this;
          }
          this._repeatMethod = true; // Compatible with repeat class, Discard after can be deleted
          this._timesForRepeat *= times;
          return this;
        }

        /**
         * @en
         * Repeats an action for ever.  <br/>
         * To repeat the an action for a limited number of times use the Repeat action. <br/>
         * @zh 永远地重复一个动作，有限次数内重复一个动作请使用 Repeat 动作。
         * @method repeatForever
         * @returns {ActionInterval}
         */;
        _proto.repeatForever = function repeatForever() {
          this._repeatMethod = true; // Compatible with repeat class, Discard after can be deleted
          this._timesForRepeat = this.MAX_VALUE;
          this._repeatForever = true;
          return this;
        };
        return ActionInterval;
      }(FiniteTimeAction));
      /*
       * Runs actions sequentially, one after another.
       */
      _export("Sequence", Sequence = /*#__PURE__*/function (_ActionInterval) {
        _inheritsLoose(Sequence, _ActionInterval);
        function Sequence(tempArray) {
          var _this2;
          _this2 = _ActionInterval.call(this) || this;
          _this2._actions = [];
          _this2._split = 0;
          _this2._last = 0;
          _this2._reversed = false;
          var paramArray = tempArray instanceof Array ? tempArray : arguments;
          if (paramArray.length === 1) {
            errorID(1019);
            return _assertThisInitialized(_this2);
          }
          var last = paramArray.length - 1;
          if (last >= 0 && paramArray[last] == null) logID(1015);
          if (last >= 0) {
            var prev = paramArray[0];
            var action1;
            for (var i = 1; i < last; i++) {
              if (paramArray[i]) {
                action1 = prev;
                prev = Sequence._actionOneTwo(action1, paramArray[i]);
              }
            }
            _this2.initWithTwoActions(prev, paramArray[last]);
          }
          return _this2;
        }

        /*
         * Initializes the action <br/>
         * @param {FiniteTimeAction} actionOne
         * @param {FiniteTimeAction} actionTwo
         * @return {Boolean}
         */
        var _proto2 = Sequence.prototype;
        _proto2.initWithTwoActions = function initWithTwoActions(actionOne, actionTwo) {
          if (!actionOne || !actionTwo) {
            errorID(1025);
            return false;
          }
          var durationOne = actionOne._duration;
          var durationTwo = actionTwo._duration;
          durationOne *= actionOne._repeatMethod ? actionOne._timesForRepeat : 1;
          durationTwo *= actionTwo._repeatMethod ? actionTwo._timesForRepeat : 1;
          var d = durationOne + durationTwo;
          this.initWithDuration(d);
          this._actions[0] = actionOne;
          this._actions[1] = actionTwo;
          return true;
        };
        _proto2.clone = function clone() {
          var action = new Sequence();
          this._cloneDecoration(action);
          action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
          return action;
        };
        _proto2.startWithTarget = function startWithTarget(target) {
          ActionInterval.prototype.startWithTarget.call(this, target);
          this._split = this._actions[0]._duration / this._duration;
          this._split *= this._actions[0]._repeatMethod ? this._actions[0]._timesForRepeat : 1;
          this._last = -1;
        };
        _proto2.stop = function stop() {
          // Issue #1305
          if (this._last !== -1) this._actions[this._last].stop();
          Action.prototype.stop.call(this);
        };
        _proto2.update = function update(dt) {
          var new_t;
          var found = 0;
          var locSplit = this._split;
          var locActions = this._actions;
          var locLast = this._last;
          var actionFound;
          dt = this._computeEaseTime(dt);
          if (dt < locSplit) {
            // action[0]
            new_t = locSplit !== 0 ? dt / locSplit : 1;
            if (found === 0 && locLast === 1 && this._reversed) {
              // Reverse mode ?
              // XXX: Bug. this case doesn't contemplate when _last==-1, found=0 and in "reverse mode"
              // since it will require a hack to know if an action is on reverse mode or not.
              // "step" should be overriden, and the "reverseMode" value propagated to inner Sequences.
              locActions[1].update(0);
              locActions[1].stop();
            }
          } else {
            // action[1]
            found = 1;
            new_t = locSplit === 1 ? 1 : (dt - locSplit) / (1 - locSplit);
            if (locLast === -1) {
              // action[0] was skipped, execute it.
              locActions[0].startWithTarget(this.target);
              locActions[0].update(1);
              locActions[0].stop();
            }
            if (locLast === 0) {
              // switching to action 1. stop action 0.
              locActions[0].update(1);
              locActions[0].stop();
            }
          }

          // eslint-disable-next-line prefer-const
          actionFound = locActions[found];
          // Last action found and it is done.
          if (locLast === found && actionFound.isDone()) return;

          // Last action not found
          if (locLast !== found) actionFound.startWithTarget(this.target);
          new_t *= actionFound._timesForRepeat;
          actionFound.update(new_t > 1 ? new_t % 1 : new_t);
          this._last = found;
        };
        _proto2.reverse = function reverse() {
          var action = Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
          this._cloneDecoration(action);
          this._reverseEaseList(action);
          action._reversed = true;
          return action;
        };
        return Sequence;
      }(ActionInterval));
      _class2 = Sequence;
      Sequence._actionOneTwo = function (actionOne, actionTwo) {
        var sequence = new _class2();
        sequence.initWithTwoActions(actionOne, actionTwo);
        return sequence;
      };
      _export("Repeat", Repeat = /*#__PURE__*/function (_ActionInterval2) {
        _inheritsLoose(Repeat, _ActionInterval2);
        function Repeat(action, times) {
          var _this3;
          _this3 = _ActionInterval2.call(this) || this;
          _this3._times = 0;
          _this3._total = 0;
          _this3._nextDt = 0;
          _this3._actionInstant = false;
          _this3._innerAction = null;
          times !== undefined && _this3.initWithAction(action, times);
          return _this3;
        }

        /*
         * @param {FiniteTimeAction} action
         * @param {Number} times
         * @return {Boolean}
         */
        var _proto3 = Repeat.prototype;
        _proto3.initWithAction = function initWithAction(action, times) {
          var duration = action._duration * times;
          if (this.initWithDuration(duration)) {
            this._times = times;
            this._innerAction = action;
            if (action instanceof ActionInstant) {
              this._actionInstant = true;
              this._times -= 1;
            }
            this._total = 0;
            return true;
          }
          return false;
        };
        _proto3.clone = function clone() {
          var action = new Repeat();
          this._cloneDecoration(action);
          action.initWithAction(this._innerAction.clone(), this._times);
          return action;
        };
        _proto3.startWithTarget = function startWithTarget(target) {
          this._total = 0;
          this._nextDt = this._innerAction._duration / this._duration;
          ActionInterval.prototype.startWithTarget.call(this, target);
          this._innerAction.startWithTarget(target);
        };
        _proto3.stop = function stop() {
          this._innerAction.stop();
          Action.prototype.stop.call(this);
        };
        _proto3.update = function update(dt) {
          dt = this._computeEaseTime(dt);
          var locInnerAction = this._innerAction;
          var locDuration = this._duration;
          var locTimes = this._times;
          var locNextDt = this._nextDt;
          if (dt >= locNextDt) {
            while (dt > locNextDt && this._total < locTimes) {
              locInnerAction.update(1);
              this._total++;
              locInnerAction.stop();
              locInnerAction.startWithTarget(this.target);
              locNextDt += locInnerAction._duration / locDuration;
              this._nextDt = locNextDt > 1 ? 1 : locNextDt;
            }

            // fix for issue #1288, incorrect end value of repeat
            if (dt >= 1.0 && this._total < locTimes) {
              // fix for cocos-creator/fireball/issues/4310
              locInnerAction.update(1);
              this._total++;
            }

            // don't set a instant action back or update it, it has no use because it has no duration
            if (!this._actionInstant) {
              if (this._total === locTimes) {
                locInnerAction.stop();
              } else {
                // issue #390 prevent jerk, use right update
                locInnerAction.update(dt - (locNextDt - locInnerAction._duration / locDuration));
              }
            }
          } else {
            locInnerAction.update(dt * locTimes % 1.0);
          }
        };
        _proto3.isDone = function isDone() {
          return this._total === this._times;
        };
        _proto3.reverse = function reverse() {
          var action = new Repeat(this._innerAction.reverse(), this._times);
          this._cloneDecoration(action);
          this._reverseEaseList(action);
          return action;
        }

        /*
         * Set inner Action.
         * @param {FiniteTimeAction} action
         */;
        _proto3.setInnerAction = function setInnerAction(action) {
          if (this._innerAction !== action) {
            this._innerAction = action;
          }
        }

        /*
         * Get inner Action.
         * @return {FiniteTimeAction}
         */;
        _proto3.getInnerAction = function getInnerAction() {
          return this._innerAction;
        };
        return Repeat;
      }(ActionInterval));
      _export("RepeatForever", RepeatForever = /*#__PURE__*/function (_ActionInterval3) {
        _inheritsLoose(RepeatForever, _ActionInterval3);
        function RepeatForever(action) {
          var _this4;
          _this4 = _ActionInterval3.call(this) || this;
          _this4._innerAction = null;
          action && _this4.initWithAction(action);
          return _this4;
        }

        /*
         * @param {ActionInterval} action
         * @return {Boolean}
         */
        var _proto4 = RepeatForever.prototype;
        _proto4.initWithAction = function initWithAction(action) {
          if (!action) {
            errorID(1026);
            return false;
          }
          this._innerAction = action;
          return true;
        };
        _proto4.clone = function clone() {
          var action = new RepeatForever();
          this._cloneDecoration(action);
          action.initWithAction(this._innerAction.clone());
          return action;
        };
        _proto4.startWithTarget = function startWithTarget(target) {
          ActionInterval.prototype.startWithTarget.call(this, target);
          this._innerAction.startWithTarget(target);
        };
        _proto4.step = function step(dt) {
          var locInnerAction = this._innerAction;
          locInnerAction.step(dt);
          if (locInnerAction.isDone()) {
            // var diff = locInnerAction.getElapsed() - locInnerAction._duration;
            locInnerAction.startWithTarget(this.target);
            // to prevent jerk. issue #390 ,1247
            // this._innerAction.step(0);
            // this._innerAction.step(diff);
            locInnerAction.step(locInnerAction.getElapsed() - locInnerAction._duration);
          }
        };
        _proto4.isDone = function isDone() {
          return false;
        };
        _proto4.reverse = function reverse() {
          var action = new RepeatForever(this._innerAction.reverse());
          this._cloneDecoration(action);
          this._reverseEaseList(action);
          return action;
        }

        /*
         * Set inner action.
         * @param {ActionInterval} action
         */;
        _proto4.setInnerAction = function setInnerAction(action) {
          if (this._innerAction !== action) {
            this._innerAction = action;
          }
        }

        /*
         * Get inner action.
         * @return {ActionInterval}
         */;
        _proto4.getInnerAction = function getInnerAction() {
          return this._innerAction;
        };
        return RepeatForever;
      }(ActionInterval));
      _export("Spawn", Spawn = /*#__PURE__*/function (_ActionInterval4) {
        _inheritsLoose(Spawn, _ActionInterval4);
        function Spawn(tempArray) {
          var _this5;
          _this5 = _ActionInterval4.call(this) || this;
          _this5._one = null;
          _this5._two = null;
          var paramArray = tempArray instanceof Array ? tempArray : arguments;
          if (paramArray.length === 1) {
            errorID(1020);
            return _assertThisInitialized(_this5);
          }
          var last = paramArray.length - 1;
          if (last >= 0 && paramArray[last] == null) logID(1015);
          if (last >= 0) {
            var prev = paramArray[0];
            var action1;
            for (var i = 1; i < last; i++) {
              if (paramArray[i]) {
                action1 = prev;
                prev = Spawn._actionOneTwo(action1, paramArray[i]);
              }
            }
            _this5.initWithTwoActions(prev, paramArray[last]);
          }
          return _this5;
        }

        /* initializes the Spawn action with the 2 actions to spawn
         * @param {FiniteTimeAction} action1
         * @param {FiniteTimeAction} action2
         * @return {Boolean}
         */
        var _proto5 = Spawn.prototype;
        _proto5.initWithTwoActions = function initWithTwoActions(action1, action2) {
          if (!action1 || !action2) {
            errorID(1027);
            return false;
          }
          var ret = false;
          var d1 = action1._duration;
          var d2 = action2._duration;
          if (this.initWithDuration(Math.max(d1, d2))) {
            this._one = action1;
            this._two = action2;
            if (d1 > d2) {
              this._two = Sequence._actionOneTwo(action2, delayTime(d1 - d2));
            } else if (d1 < d2) {
              this._one = Sequence._actionOneTwo(action1, delayTime(d2 - d1));
            }
            ret = true;
          }
          return ret;
        };
        _proto5.clone = function clone() {
          var action = new Spawn();
          this._cloneDecoration(action);
          action.initWithTwoActions(this._one.clone(), this._two.clone());
          return action;
        };
        _proto5.startWithTarget = function startWithTarget(target) {
          ActionInterval.prototype.startWithTarget.call(this, target);
          this._one.startWithTarget(target);
          this._two.startWithTarget(target);
        };
        _proto5.stop = function stop() {
          this._one.stop();
          this._two.stop();
          Action.prototype.stop.call(this);
        };
        _proto5.update = function update(dt) {
          dt = this._computeEaseTime(dt);
          if (this._one) this._one.update(dt);
          if (this._two) this._two.update(dt);
        };
        _proto5.reverse = function reverse() {
          var action = Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
          this._cloneDecoration(action);
          this._reverseEaseList(action);
          return action;
        };
        return Spawn;
      }(ActionInterval));
      _class5 = Spawn;
      Spawn._actionOneTwo = function (action1, action2) {
        var pSpawn = new _class5();
        pSpawn.initWithTwoActions(action1, action2);
        return pSpawn;
      };
      DelayTime = /*#__PURE__*/function (_ActionInterval5) {
        _inheritsLoose(DelayTime, _ActionInterval5);
        function DelayTime() {
          return _ActionInterval5.apply(this, arguments) || this;
        }
        var _proto6 = DelayTime.prototype;
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        _proto6.update = function update(dt) {};
        _proto6.reverse = function reverse() {
          var action = new DelayTime(this._duration);
          this._cloneDecoration(action);
          this._reverseEaseList(action);
          return action;
        };
        _proto6.clone = function clone() {
          var action = new DelayTime();
          this._cloneDecoration(action);
          action.initWithDuration(this._duration);
          return action;
        };
        return DelayTime;
      }(ActionInterval);
      _export("ReverseTime", ReverseTime = /*#__PURE__*/function (_ActionInterval6) {
        _inheritsLoose(ReverseTime, _ActionInterval6);
        function ReverseTime(action) {
          var _this6;
          _this6 = _ActionInterval6.call(this) || this;
          _this6._other = null;
          action && _this6.initWithAction(action);
          return _this6;
        }

        /*
         * @param {FiniteTimeAction} action
         * @return {Boolean}
         */
        var _proto7 = ReverseTime.prototype;
        _proto7.initWithAction = function initWithAction(action) {
          if (!action) {
            errorID(1028);
            return false;
          }
          if (action === this._other) {
            errorID(1029);
            return false;
          }
          if (ActionInterval.prototype.initWithDuration.call(this, action._duration)) {
            // Don't leak if action is reused
            this._other = action;
            return true;
          }
          return false;
        };
        _proto7.clone = function clone() {
          var action = new ReverseTime();
          this._cloneDecoration(action);
          action.initWithAction(this._other.clone());
          return action;
        };
        _proto7.startWithTarget = function startWithTarget(target) {
          ActionInterval.prototype.startWithTarget.call(this, target);
          this._other.startWithTarget(target);
        };
        _proto7.update = function update(dt) {
          dt = this._computeEaseTime(dt);
          if (this._other) this._other.update(1 - dt);
        };
        _proto7.reverse = function reverse() {
          return this._other.clone();
        };
        _proto7.stop = function stop() {
          this._other.stop();
          Action.prototype.stop.call(this);
        };
        return ReverseTime;
      }(ActionInterval));
    }
  };
});