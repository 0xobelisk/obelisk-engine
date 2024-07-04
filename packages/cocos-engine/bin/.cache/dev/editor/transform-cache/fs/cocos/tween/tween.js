System.register("q-bundled:///fs/cocos/tween/tween.js", ["./tween-system.js", "../core/index.js", "./actions/action-interval.js", "./actions/action-instant.js", "./actions/action.js", "./tween-action.js", "./set-action.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var TweenSystem, warn, sequence, repeat, repeatForever, reverseTime, delayTime, spawn, removeSelf, show, hide, callFunc, Action, TweenAction, SetAction, legacyCC, Tween;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  /**
   * @en
   * tween is a utility function that helps instantiate Tween instances.
   * @zh
   * tween 是一个工具函数，帮助实例化 Tween 实例。
   * @param target @en The target of the result tween @zh 缓动的目标
   * @returns Tween 实例
   * @example
   * tween(this.node)
   *   .to(1, {scale: new Vec3(2, 2, 2), position: new Vec3(5, 5, 5)})
   *   .call(() => { console.log('This is a callback'); })
   *   .by(1, {scale: new Vec3(-1, -1, -1)}, {easing: 'sineOutIn'})
   *   .start()
   */
  function tween(target) {
    return new Tween(target);
  }
  /**
   * @en
   * tweenUtil is a utility function that helps instantiate Tween instances.
   * @zh
   * tweenUtil 是一个工具函数，帮助实例化 Tween 实例。
   * @deprecated please use `tween` instead.
   */
  function tweenUtil(target) {
    warn('tweenUtil\' is deprecated, please use \'tween\' instead ');
    return new Tween(target);
  }
  _export({
    Tween: void 0,
    tween: tween,
    tweenUtil: tweenUtil
  });
  return {
    setters: [function (_tweenSystemJs) {
      TweenSystem = _tweenSystemJs.TweenSystem;
    }, function (_coreIndexJs) {
      warn = _coreIndexJs.warn;
    }, function (_actionsActionIntervalJs) {
      sequence = _actionsActionIntervalJs.sequence;
      repeat = _actionsActionIntervalJs.repeat;
      repeatForever = _actionsActionIntervalJs.repeatForever;
      reverseTime = _actionsActionIntervalJs.reverseTime;
      delayTime = _actionsActionIntervalJs.delayTime;
      spawn = _actionsActionIntervalJs.spawn;
    }, function (_actionsActionInstantJs) {
      removeSelf = _actionsActionInstantJs.removeSelf;
      show = _actionsActionInstantJs.show;
      hide = _actionsActionInstantJs.hide;
      callFunc = _actionsActionInstantJs.callFunc;
    }, function (_actionsActionJs) {
      Action = _actionsActionJs.Action;
    }, function (_tweenActionJs) {
      TweenAction = _tweenActionJs.TweenAction;
    }, function (_setActionJs) {
      SetAction = _setActionJs.SetAction;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      // https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c
      // eslint-disable-next-line @typescript-eslint/ban-types
      /**
       * @en
       * Tween provide a simple and flexible way to action, It's transplanted from cocos creator。
       * @zh
       * Tween 提供了一个简单灵活的方法来缓动目标，从 creator 移植而来。
       * @class Tween
       * @param [target]
       * @example
       * tween(this.node)
       *   .to(1, {scale: new Vec3(2, 2, 2), position: new Vec3(5, 5, 5)})
       *   .call(() => { console.log('This is a callback'); })
       *   .by(1, {scale: new Vec3(-1, -1, -1), position: new Vec3(-5, -5, -5)}, {easing: 'sineOutIn'})
       *   .start()
       */
      _export("Tween", Tween = class Tween {
        constructor(target) {
          this._actions = [];
          this._finalAction = null;
          this._target = null;
          this._tag = Action.TAG_INVALID;
          this._target = target === undefined ? null : target;
        }

        /**
         * @en Sets tween tag
         * @zh 设置缓动的标签
         * @method tag
         * @param tag @en The tag set for this tween @zh 为当前缓动设置的标签
         */
        tag(tag) {
          this._tag = tag;
          return this;
        }

        /**
         * @en
         * Insert an action or tween to this sequence.
         * @zh
         * 插入一个 tween 到队列中。
         * @method then
         * @param other @en The rear tween of this tween @zh 当前缓动的后置缓动
         */
        then(other) {
          if (other instanceof Action) {
            this._actions.push(other.clone());
          } else {
            this._actions.push(other._union());
          }
          return this;
        }

        /**
         * @en
         * Sets tween target.
         * @zh
         * 设置 tween 的 target。
         * @method target
         * @param target @en The target of this tween @zh 当前缓动的目标对象
         */
        target(target) {
          this._target = target;
          return this;
        }

        /**
         * @en
         * Start this tween.
         * @zh
         * 运行当前 tween。
         */
        start() {
          if (!this._target) {
            warn('Please set target to tween first');
            return this;
          }
          if (this._finalAction) {
            TweenSystem.instance.ActionManager.removeAction(this._finalAction);
          }
          this._finalAction = this._union();
          this._finalAction.setTag(this._tag);
          TweenSystem.instance.ActionManager.addAction(this._finalAction, this._target, false);
          return this;
        }

        /**
         * @en
         * Stop this tween.
         * @zh
         * 停止当前 tween。
         */
        stop() {
          if (this._finalAction) {
            TweenSystem.instance.ActionManager.removeAction(this._finalAction);
          }
          return this;
        }

        /**
         * @en
         * Clone a tween.
         * @zh
         * 克隆当前 tween。
         * @method clone
         * @param target @en The target of clone tween @zh 克隆缓动的目标对象
         */
        clone(target) {
          const action = this._union();
          return tween(target).then(action.clone());
        }

        /**
         * @en
         * Integrate all previous actions to an action.
         * @zh
         * 将之前所有的 action 整合为一个 action。
         */
        union() {
          const action = this._union();
          this._actions.length = 0;
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add an action which calculates with absolute value.
         * @zh
         * 添加一个对属性进行绝对值计算的 action。
         * @method to
         * @param duration @en Tween time, in seconds @zh 缓动时间，单位为秒
         * @param props @en List of properties of tween @zh 缓动的属性列表
         * @param opts @en Optional functions of tween @zh 可选的缓动功能
         * @param opts.progress @en Interpolation function @zh 缓动的速度插值函数
         * @param opts.easing @en Tween function or a lambda @zh 缓动的曲线函数或lambda表达式
         */
        to(duration, props, opts) {
          opts = opts || Object.create(null);
          opts.relative = false;
          const action = new TweenAction(duration, props, opts);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add an action which calculates with relative value.
         * @zh
         * 添加一个对属性进行相对值计算的 action。
         * @method by
         * @param duration @en Tween time, in seconds @zh 缓动时间，单位为秒
         * @param props @en List of properties of tween @zh 缓动的属性列表
         * @param opts @en Optional functions of tween @zh 可选的缓动功能
         * @param [opts.progress]
         * @param [opts.easing]
         * @return {Tween}
         */
        by(duration, props, opts) {
          opts = opts || Object.create(null);
          opts.relative = true;
          const action = new TweenAction(duration, props, opts);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Directly set target properties.
         * @zh
         * 直接设置 target 的属性。
         * @method set
         * @param props @en List of properties of tween @zh 缓动的属性列表
         * @return {Tween}
         */
        set(props) {
          const action = new SetAction(props);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add a delay action.
         * @zh
         * 添加一个延时 action。
         * @method delay
         * @param duration @en Delay time of this tween @zh 当前缓动的延迟时间
         * @return {Tween}
         */
        delay(duration) {
          const action = delayTime(duration);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add a callback action.
         * @zh
         * 添加一个回调 action。
         * @method call
         * @param callback @en Callback function at the end of this tween @zh 当前缓动结束时的回调函数
         * @return {Tween}
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        call(callback) {
          const action = callFunc(callback);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add a sequence action.
         * @zh
         * 添加一个队列 action。
         * @method sequence
         * @param args @en All tween that make up the sequence @zh 组成队列的所有缓动
         */
        sequence(...args) {
          const action = Tween._wrappedSequence(...args);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add a parallel action.
         * @zh
         * 添加一个并行 action。
         * @method parallel
         * @param args @en The tween parallel to this tween @zh 与当前缓动并行的缓动
         */
        parallel(...args) {
          const action = Tween._wrappedParallel(...args);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add a repeat action.
         * This action will integrate before actions to a sequence action as their parameters.
         * @zh
         * 添加一个重复 action，这个 action 会将前一个动作作为他的参数。
         * @param repeatTimes @en The repeat times of this tween @zh 重复次数
         * @param embedTween @en Optional, embedded tween of this tween @zh 可选，嵌入缓动
         */
        repeat(repeatTimes, embedTween) {
          /** adapter */
          if (repeatTimes === Infinity) {
            return this.repeatForever(embedTween);
          }
          const actions = this._actions;
          let action;
          if (embedTween instanceof Tween) {
            action = embedTween._union();
          } else {
            action = actions.pop();
          }
          actions.push(repeat(action, repeatTimes));
          return this;
        }

        /**
         * @en
         * Add a repeat forever action.
         * This action will integrate before actions to a sequence action as their parameters.
         * @zh
         * 添加一个永久重复 action，这个 action 会将前一个动作作为他的参数。
         * @method repeatForever
         * @param embedTween @en Optional, embedded tween of this tween @zh 可选，嵌入缓动
         */
        repeatForever(embedTween) {
          const actions = this._actions;
          let action;
          if (embedTween instanceof Tween) {
            action = embedTween._union();
          } else {
            action = actions.pop();
          }
          actions.push(repeatForever(action));
          return this;
        }

        /**
         * @en
         * Add a reverse time action.
         * This action will integrate before actions to a sequence action as their parameters.
         * @zh
         * 添加一个倒置时间 action，这个 action 会将前一个动作作为他的参数。
         * @method reverseTime
         * @param embedTween @en Optional, embedded tween of this tween @zh 可选，嵌入缓动
         */
        reverseTime(embedTween) {
          const actions = this._actions;
          let action;
          if (embedTween instanceof Tween) {
            action = embedTween._union();
          } else {
            action = actions.pop();
          }
          actions.push(reverseTime(action));
          return this;
        }

        /**
         * @en
         * Add a hide action, only for node target.
         * @zh
         * 添加一个隐藏 action，只适用于 target 是节点类型的。
         */
        hide() {
          const action = hide();
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add a show action, only for node target.
         * @zh
         * 添加一个显示 action，只适用于 target 是节点类型的。
         */
        show() {
          const action = show();
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add a removeSelf action, only for node target.
         * @zh
         * 添加一个移除自己 action，只适用于 target 是节点类型的。
         */
        removeSelf() {
          const action = removeSelf(false);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Add a destroySelf action, only for node target.
         * @zh
         * 添加一个移除并销毁自己 action，只适用于 target 是节点类型的。
         */
        destroySelf() {
          const action = removeSelf(true);
          this._actions.push(action);
          return this;
        }

        /**
         * @en
         * Stop all tweens
         * @zh
         * 停止所有缓动
         */
        static stopAll() {
          TweenSystem.instance.ActionManager.removeAllActions();
        }
        /**
         * @en
         * Stop all tweens by tag
         * @zh
         * 停止所有指定标签的缓动
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        static stopAllByTag(tag, target) {
          TweenSystem.instance.ActionManager.removeAllActionsByTag(tag, target);
        }
        /**
         * @en
         * Stop all tweens by target
         * @zh
         * 停止所有指定对象的缓动
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        static stopAllByTarget(target) {
          TweenSystem.instance.ActionManager.removeAllActionsFromTarget(target);
        }
        _union() {
          const actions = this._actions;
          let action;
          if (actions.length === 1) {
            action = actions[0];
          } else {
            action = sequence(actions);
          }
          return action;
        }
        _destroy() {
          this.stop();
        }
        static _wrappedSequence(...args) {
          const tmp_args = Tween._tmp_args;
          tmp_args.length = 0;
          for (let l = args.length, i = 0; i < l; i++) {
            const arg = tmp_args[i] = args[i];
            if (arg instanceof Tween) {
              tmp_args[i] = arg._union();
            }
          }
          return sequence.apply(sequence, tmp_args);
        }
        static _wrappedParallel(...args) {
          const tmp_args = Tween._tmp_args;
          tmp_args.length = 0;
          for (let l = args.length, i = 0; i < l; i++) {
            const arg = tmp_args[i] = args[i];
            if (arg instanceof Tween) {
              tmp_args[i] = arg._union();
            }
          }
          return spawn.apply(spawn, tmp_args);
        }
      });
      Tween._tmp_args = [];
      legacyCC.Tween = Tween;
      legacyCC.tween = tween;
      legacyCC.tweenUtil = tweenUtil;
    }
  };
});