System.register("q-bundled:///fs/cocos/tween/actions/action.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var logID, errorID, Action, FiniteTimeAction, Speed;
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
  return {
    setters: [function (_coreIndexJs) {
      logID = _coreIndexJs.logID;
      errorID = _coreIndexJs.errorID;
    }],
    execute: function () {
      /**
       * @en Base classAction for action classes.
       * @zh Action 类是所有动作类型的基类。
       * @class Action
       */
      _export("Action", Action = /*#__PURE__*/function () {
        function Action() {
          this.originalTarget = null;
          this.target = null;
          this.tag = Action.TAG_INVALID;
        }
        var _proto = Action.prototype;
        /**
         * @en
         * to copy object with deep copy.
         * returns a clone of action.
         * @zh 返回一个克隆的动作。
         * @method clone
         * @return {Action}
         */
        _proto.clone = function clone() {
          var action = new Action();
          action.originalTarget = null;
          action.target = null;
          action.tag = this.tag;
          return action;
        }

        /**
         * @en
         * return true if the action has finished.
         * @zh 如果动作已完成就返回 true。
         * @method isDone
         * @return {Boolean}
         */;
        _proto.isDone = function isDone() {
          return true;
        }

        // called before the action start. It will also set the target.
        ;
        _proto.startWithTarget = function startWithTarget(target) {
          this.originalTarget = target;
          this.target = target;
        }

        // called after the action has finished. It will set the 'target' to nil.
        ;
        _proto.stop = function stop() {
          this.target = null;
        }

        // called every frame with it's delta time. <br />
        ;
        _proto.step = function step(dt) {
          logID(1006);
        }

        // Called once per frame. Time is the number of seconds of a frame interval.
        ;
        _proto.update = function update(dt) {
          logID(1007);
        }

        /**
         * @en get the target.
         * @zh 获取当前目标节点。
         * @method getTarget
         * @return {object}
         */;
        _proto.getTarget = function getTarget() {
          return this.target;
        }

        /**
         * @en The action will modify the target properties.
         * @zh 设置目标节点。
         * @method setTarget
         * @param {object} target
         */;
        _proto.setTarget = function setTarget(target) {
          this.target = target;
        }

        /**
         * @en get the original target.
         * @zh 获取原始目标节点。
         * @method getOriginalTarget
         * @return {object}
         */;
        _proto.getOriginalTarget = function getOriginalTarget() {
          return this.originalTarget;
        }

        // Set the original target, since target can be nil.
        // Is the target that were used to run the action.
        // Unless you are doing something complex, like `ActionManager`, you should NOT call this method.
        ;
        _proto.setOriginalTarget = function setOriginalTarget(originalTarget) {
          this.originalTarget = originalTarget;
        }

        /**
         * @en get tag number.
         * @zh 获取用于识别动作的标签。
         * @method getTag
         * @return {Number}
         */;
        _proto.getTag = function getTag() {
          return this.tag;
        }

        /**
         * @en set tag number.
         * @zh 设置标签，用于识别动作。
         * @method setTag
         * @param {Number} tag
         */;
        _proto.setTag = function setTag(tag) {
          this.tag = tag;
        }

        /**
         * @en
         * Returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         * @zh 返回一个新的动作，执行与原动作完全相反的动作。
         * @method reverse
         * @return {Action | null}
         */;
        _proto.reverse = function reverse() {
          logID(1008);
          return null;
        }

        // Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
        // and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
        // This is a hack, and should be removed once JSB fixes the retain/release bug.
        ;
        _proto.retain = function retain() {}

        // Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
        // and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
        // This is a hack, and should be removed once JSB fixes the retain/release bug.
        ;
        _proto.release = function release() {};
        return Action;
      }());
      /**
       * @en
       * Base class actions that do have a finite time duration. <br/>
       * Possible actions: <br/>
       * - An action with a duration of 0 seconds. <br/>
       * - An action with a duration of 35.5 seconds.
       *
       * Infinite time actions are valid
       * @zh 有限时间动作，这种动作拥有时长 duration 属性。
       * @class FiniteTimeAction
       * @extends Action
       */
      /**
       * @en Default Action tag.
       * @zh 默认动作标签。
       * @constant
       * @static
       * @default -1
       */
      Action.TAG_INVALID = -1;
      _export("FiniteTimeAction", FiniteTimeAction = /*#__PURE__*/function (_Action) {
        _inheritsLoose(FiniteTimeAction, _Action);
        function FiniteTimeAction() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Action.call.apply(_Action, [this].concat(args)) || this;
          _this._duration = 0;
          _this._timesForRepeat = 1;
          return _this;
        }
        var _proto2 = FiniteTimeAction.prototype;
        /**
         * @en get duration of the action. (seconds).
         * @zh 获取动作以秒为单位的持续时间。
         * @method getDuration
         * @return {Number}
         */
        _proto2.getDuration = function getDuration() {
          return this._duration * (this._timesForRepeat || 1);
        }

        /**
         * @en set duration of the action. (seconds).
         * @zh 设置动作以秒为单位的持续时间。
         * @method setDuration
         * @param {Number} duration
         */;
        _proto2.setDuration = function setDuration(duration) {
          this._duration = duration;
        }

        /**
         * @en
         * to copy object with deep copy.
         * returns a clone of action.
         * @zh 返回一个克隆的动作。
         * @method clone
         * @return {FiniteTimeAction}
         */;
        _proto2.clone = function clone() {
          return new FiniteTimeAction();
        };
        return FiniteTimeAction;
      }(Action));
      /*
       * Changes the speed of an action, making it take longer (speed > 1)
       * or less (speed < 1) time. <br/>
       * Useful to simulate 'slow motion' or 'fast forward' effect.
       */
      _export("Speed", Speed = /*#__PURE__*/function (_Action2) {
        _inheritsLoose(Speed, _Action2);
        /**
         * @warning This action can't be `Sequence-able` because it is not an `IntervalAction`
         */
        function Speed(action, speed) {
          var _this2;
          if (speed === void 0) {
            speed = 1;
          }
          _this2 = _Action2.call(this) || this;
          _this2._speed = 0;
          _this2._innerAction = null;
          action && _this2.initWithAction(action, speed);
          return _this2;
        }

        /*
         * Gets the current running speed. <br />
         * Will get a percentage number, compared to the original speed.
         *
         * @method getSpeed
         * @return {Number}
         */
        var _proto3 = Speed.prototype;
        _proto3.getSpeed = function getSpeed() {
          return this._speed;
        }

        /*
         * alter the speed of the inner function in runtime.
         * @method setSpeed
         * @param {Number} speed
         */;
        _proto3.setSpeed = function setSpeed(speed) {
          this._speed = speed;
        }

        /*
         * initializes the action.
         * @method initWithAction
         * @param {ActionInterval} action
         * @param {Number} speed
         * @return {Boolean}
         */;
        _proto3.initWithAction = function initWithAction(action, speed) {
          if (!action) {
            errorID(1021);
            return false;
          }
          this._innerAction = action;
          this._speed = speed;
          return true;
        };
        _proto3.clone = function clone() {
          var action = new Speed();
          action.initWithAction(this._innerAction.clone(), this._speed);
          return action;
        };
        _proto3.startWithTarget = function startWithTarget(target) {
          Action.prototype.startWithTarget.call(this, target);
          this._innerAction.startWithTarget(target);
        };
        _proto3.stop = function stop() {
          this._innerAction.stop();
          Action.prototype.stop.call(this);
        };
        _proto3.step = function step(dt) {
          this._innerAction.step(dt * this._speed);
        };
        _proto3.isDone = function isDone() {
          return this._innerAction.isDone();
        };
        _proto3.reverse = function reverse() {
          return new Speed(this._innerAction.reverse(), this._speed);
        }

        /*
         * Set inner Action.
         * @method setInnerAction
         * @param {ActionInterval} action
         */;
        _proto3.setInnerAction = function setInnerAction(action) {
          if (this._innerAction !== action) {
            this._innerAction = action;
          }
        }

        /*
         * Get inner Action.
         * @method getInnerAction
         * @return {ActionInterval}
         */;
        _proto3.getInnerAction = function getInnerAction() {
          return this._innerAction;
        };
        return Speed;
      }(Action));
    }
  };
});