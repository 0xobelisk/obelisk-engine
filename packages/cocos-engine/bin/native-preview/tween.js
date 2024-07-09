System.register(['./index-ce98320e.js', './deprecated-f8df8d32.js', './director-dc238483.js', './renderer-3bf7a012.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './node-event-18d96a1b.js', './decorators-b63b63a2.js', './touch-af62e326.js', './scene-asset.jsb-0d4c6201.js'], (function (exports) {
    'use strict';
    var logID, errorID, legacyCC, isCCObject, System, macro, easing, warnID, warn, engineVersion, director, Director, Renderer;
    return {
        setters: [function (module) {
            logID = module.c;
            errorID = module.f;
            legacyCC = module.l;
            isCCObject = module.bl;
            System = module.a$;
            macro = module.aM;
            easing = module.b0;
            warnID = module.d;
            warn = module.w;
            engineVersion = module.j;
        }, function () {}, function (module) {
            director = module.n;
            Director = module.m;
        }, function (module) {
            Renderer = module.R;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports({
                tween: tween,
                tweenUtil: tweenUtil
            });

            class Action {
              constructor() {
                this.originalTarget = null;
                this.target = null;
                this.tag = Action.TAG_INVALID;
              }
              clone() {
                const action = new Action();
                action.originalTarget = null;
                action.target = null;
                action.tag = this.tag;
                return action;
              }
              isDone() {
                return true;
              }
              startWithTarget(target) {
                this.originalTarget = target;
                this.target = target;
              }
              stop() {
                this.target = null;
              }
              step(dt) {
                logID(1006);
              }
              update(dt) {
                logID(1007);
              }
              getTarget() {
                return this.target;
              }
              setTarget(target) {
                this.target = target;
              }
              getOriginalTarget() {
                return this.originalTarget;
              }
              setOriginalTarget(originalTarget) {
                this.originalTarget = originalTarget;
              }
              getTag() {
                return this.tag;
              }
              setTag(tag) {
                this.tag = tag;
              }
              reverse() {
                logID(1008);
                return null;
              }
              retain() {}
              release() {}
            }
            Action.TAG_INVALID = -1;
            class FiniteTimeAction extends Action {
              constructor(...args) {
                super(...args);
                this._duration = 0;
                this._timesForRepeat = 1;
              }
              getDuration() {
                return this._duration * (this._timesForRepeat || 1);
              }
              setDuration(duration) {
                this._duration = duration;
              }
              clone() {
                return new FiniteTimeAction();
              }
            }

            let ID_COUNTER = 0;
            class HashElement {
              constructor() {
                this.actions = [];
                this.target = null;
                this.actionIndex = 0;
                this.currentAction = null;
                this.paused = false;
                this.lock = false;
              }
            }
            class ActionManager {
              constructor() {
                this._hashTargets = new Map();
                this._arrayTargets = [];
                this._currentTarget = void 0;
                this._elementPool = [];
              }
              _searchElementByTarget(arr, target) {
                for (let k = 0; k < arr.length; k++) {
                  if (target === arr[k].target) return arr[k];
                }
                return null;
              }
              _getElement(target, paused) {
                let element = this._elementPool.pop();
                if (!element) {
                  element = new HashElement();
                }
                element.target = target;
                element.paused = !!paused;
                return element;
              }
              _putElement(element) {
                element.actions.length = 0;
                element.actionIndex = 0;
                element.currentAction = null;
                element.paused = false;
                element.target = null;
                element.lock = false;
                this._elementPool.push(element);
              }
              addAction(action, target, paused) {
                if (!action || !target) {
                  errorID(1000);
                  return;
                }
                if (target.uuid == null) {
                  target.uuid = `_TWEEN_UUID_${ID_COUNTER++}`;
                }
                let element = this._hashTargets.get(target);
                if (!element) {
                  element = this._getElement(target, paused);
                  this._hashTargets.set(target, element);
                  this._arrayTargets.push(element);
                } else if (!element.actions) {
                  element.actions = [];
                }
                element.target = target;
                element.actions.push(action);
                action.startWithTarget(target);
              }
              removeAllActions() {
                const locTargets = this._arrayTargets;
                for (let i = 0; i < locTargets.length; i++) {
                  const element = locTargets[i];
                  if (element) this._putElement(element);
                }
                this._arrayTargets.length = 0;
                this._hashTargets = new Map();
              }
              removeAllActionsFromTarget(target) {
                if (target == null) return;
                const element = this._hashTargets.get(target);
                if (element) {
                  element.actions.length = 0;
                  this._deleteHashElement(element);
                }
              }
              removeAction(action) {
                if (action == null) return;
                const target = action.getOriginalTarget();
                const element = this._hashTargets.get(target);
                if (element) {
                  for (let i = 0; i < element.actions.length; i++) {
                    if (element.actions[i] === action) {
                      element.actions.splice(i, 1);
                      if (element.actionIndex >= i) element.actionIndex--;
                      break;
                    }
                  }
                }
              }
              _removeActionByTag(tag, element, target) {
                for (let i = 0, l = element.actions.length; i < l; ++i) {
                  const action = element.actions[i];
                  if (action && action.getTag() === tag) {
                    if (target && action.getOriginalTarget() !== target) {
                      continue;
                    }
                    this._removeActionAtIndex(i, element);
                    break;
                  }
                }
              }
              _removeAllActionsByTag(tag, element, target) {
                for (let i = element.actions.length - 1; i >= 0; --i) {
                  const action = element.actions[i];
                  if (action && action.getTag() === tag) {
                    if (target && action.getOriginalTarget() !== target) {
                      continue;
                    }
                    this._removeActionAtIndex(i, element);
                  }
                }
              }
              removeActionByTag(tag, target) {
                if (tag === Action.TAG_INVALID) logID(1002);
                const hashTargets = this._hashTargets;
                if (target) {
                  const element = hashTargets.get(target);
                  if (element) {
                    this._removeActionByTag(tag, element, target);
                  }
                } else {
                  hashTargets.forEach(element => {
                    this._removeActionByTag(tag, element);
                  });
                }
              }
              removeAllActionsByTag(tag, target) {
                if (tag === Action.TAG_INVALID) logID(1002);
                const hashTargets = this._hashTargets;
                if (target) {
                  const element = hashTargets.get(target);
                  if (element) {
                    this._removeAllActionsByTag(tag, element, target);
                  }
                } else {
                  hashTargets.forEach(element => {
                    this._removeAllActionsByTag(tag, element);
                  });
                }
              }
              getActionByTag(tag, target) {
                if (tag === Action.TAG_INVALID) logID(1004);
                const element = this._hashTargets.get(target);
                if (element) {
                  if (element.actions != null) {
                    for (let i = 0; i < element.actions.length; ++i) {
                      const action = element.actions[i];
                      if (action && action.getTag() === tag) {
                        return action;
                      }
                    }
                  }
                  logID(1005, tag);
                }
                return null;
              }
              getNumberOfRunningActionsInTarget(target) {
                const element = this._hashTargets.get(target);
                if (element) {
                  return element.actions ? element.actions.length : 0;
                }
                return 0;
              }
              pauseTarget(target) {
                const element = this._hashTargets.get(target);
                if (element) element.paused = true;
              }
              resumeTarget(target) {
                const element = this._hashTargets.get(target);
                if (element) element.paused = false;
              }
              pauseAllRunningActions() {
                const idsWithActions = [];
                const locTargets = this._arrayTargets;
                for (let i = 0; i < locTargets.length; i++) {
                  const element = locTargets[i];
                  if (element && !element.paused) {
                    element.paused = true;
                    idsWithActions.push(element.target);
                  }
                }
                return idsWithActions;
              }
              resumeTargets(targetsToResume) {
                if (!targetsToResume) return;
                for (let i = 0; i < targetsToResume.length; i++) {
                  if (targetsToResume[i]) this.resumeTarget(targetsToResume[i]);
                }
              }
              pauseTargets(targetsToPause) {
                if (!targetsToPause) return;
                for (let i = 0; i < targetsToPause.length; i++) {
                  if (targetsToPause[i]) this.pauseTarget(targetsToPause[i]);
                }
              }
              purgeSharedManager() {
                legacyCC.director.getScheduler().unscheduleUpdate(this);
              }
              _removeActionAtIndex(index, element) {
                element.actions[index];
                element.actions.splice(index, 1);
                if (element.actionIndex >= index) element.actionIndex--;
                if (element.actions.length === 0) {
                  this._deleteHashElement(element);
                }
              }
              _deleteHashElement(element) {
                let ret = false;
                if (element && !element.lock) {
                  if (this._hashTargets.get(element.target)) {
                    this._hashTargets.delete(element.target);
                    const targets = this._arrayTargets;
                    for (let i = 0, l = targets.length; i < l; i++) {
                      if (targets[i] === element) {
                        targets.splice(i, 1);
                        break;
                      }
                    }
                    this._putElement(element);
                    ret = true;
                  }
                }
                return ret;
              }
              update(dt) {
                const locTargets = this._arrayTargets;
                let locCurrTarget;
                for (let elt = 0; elt < locTargets.length; elt++) {
                  this._currentTarget = locTargets[elt];
                  locCurrTarget = this._currentTarget;
                  const target = locCurrTarget.target;
                  if (isCCObject(target) && !target.isValid) {
                    this.removeAllActionsFromTarget(target);
                    elt--;
                    continue;
                  }
                  if (!locCurrTarget.paused && locCurrTarget.actions) {
                    locCurrTarget.lock = true;
                    for (locCurrTarget.actionIndex = 0; locCurrTarget.actionIndex < locCurrTarget.actions.length; locCurrTarget.actionIndex++) {
                      locCurrTarget.currentAction = locCurrTarget.actions[locCurrTarget.actionIndex];
                      if (!locCurrTarget.currentAction) continue;
                      locCurrTarget.currentAction.step(dt * (this._isActionInternal(locCurrTarget.currentAction) ? locCurrTarget.currentAction.getSpeed() : 1));
                      if (locCurrTarget.currentAction && locCurrTarget.currentAction.isDone()) {
                        locCurrTarget.currentAction.stop();
                        const action = locCurrTarget.currentAction;
                        locCurrTarget.currentAction = null;
                        this.removeAction(action);
                      }
                      locCurrTarget.currentAction = null;
                    }
                    locCurrTarget.lock = false;
                  }
                  if (locCurrTarget.actions.length === 0) {
                    if (this._deleteHashElement(locCurrTarget)) {
                      elt--;
                    }
                  }
                }
              }
              _isActionInternal(action) {
                return typeof action._speedMethod !== 'undefined';
              }
            }

            class TweenSystem extends System {
              constructor(...args) {
                super(...args);
                this.actionMgr = new ActionManager();
              }
              get ActionManager() {
                return this.actionMgr;
              }
              update(dt) {
                {
                  this.actionMgr.update(dt);
                }
              }
            } exports('TweenSystem', TweenSystem);
            TweenSystem.ID = 'TWEEN';
            TweenSystem.instance = void 0;
            director.on(Director.EVENT_INIT, () => {
              const sys = new TweenSystem();
              TweenSystem.instance = sys;
              director.registerSystem(TweenSystem.ID, sys, System.Priority.MEDIUM);
            });

            class ActionInstant extends FiniteTimeAction {
              isDone() {
                return true;
              }
              step(dt) {
                this.update(1);
              }
              update(dt) {}
              reverse() {
                return this.clone();
              }
              clone() {
                return new ActionInstant();
              }
            }
            class Show extends ActionInstant {
              update(dt) {
                const _renderComps = this.target.getComponentsInChildren(Renderer);
                for (let i = 0; i < _renderComps.length; ++i) {
                  const render = _renderComps[i];
                  render.enabled = true;
                }
              }
              reverse() {
                return new Hide();
              }
              clone() {
                return new Show();
              }
            }
            function show() {
              return new Show();
            }
            class Hide extends ActionInstant {
              update(dt) {
                const _renderComps = this.target.getComponentsInChildren(Renderer);
                for (let i = 0; i < _renderComps.length; ++i) {
                  const render = _renderComps[i];
                  render.enabled = false;
                }
              }
              reverse() {
                return new Show();
              }
              clone() {
                return new Hide();
              }
            }
            function hide() {
              return new Hide();
            }
            class RemoveSelf extends ActionInstant {
              constructor(isNeedCleanUp) {
                super();
                this._isNeedCleanUp = true;
                isNeedCleanUp !== undefined && this.init(isNeedCleanUp);
              }
              update(dt) {
                this.target.removeFromParent();
                if (this._isNeedCleanUp) {
                  this.target.destroy();
                }
              }
              init(isNeedCleanUp) {
                this._isNeedCleanUp = isNeedCleanUp;
                return true;
              }
              reverse() {
                return new RemoveSelf(this._isNeedCleanUp);
              }
              clone() {
                return new RemoveSelf(this._isNeedCleanUp);
              }
            }
            function removeSelf(isNeedCleanUp) {
              return new RemoveSelf(isNeedCleanUp);
            }
            class CallFunc extends ActionInstant {
              constructor(selector, selectorTarget, data) {
                super();
                this._selectorTarget = null;
                this._function = null;
                this._data = null;
                this.initWithFunction(selector, selectorTarget, data);
              }
              initWithFunction(selector, selectorTarget, data) {
                if (selector) {
                  this._function = selector;
                }
                if (selectorTarget) {
                  this._selectorTarget = selectorTarget;
                }
                if (data !== undefined) {
                  this._data = data;
                }
                return true;
              }
              execute() {
                if (this._function) {
                  this._function.call(this._selectorTarget, this.target, this._data);
                }
              }
              update(dt) {
                this.execute();
              }
              getTargetCallback() {
                return this._selectorTarget;
              }
              setTargetCallback(sel) {
                if (sel !== this._selectorTarget) {
                  if (this._selectorTarget) {
                    this._selectorTarget = null;
                  }
                  this._selectorTarget = sel;
                }
              }
              clone() {
                const action = new CallFunc();
                action.initWithFunction(this._function, this._selectorTarget, this._data);
                return action;
              }
            }
            function callFunc(selector, selectorTarget, data) {
              return new CallFunc(selector, selectorTarget, data);
            }

            var _class2, _class5;
            class ActionInterval extends FiniteTimeAction {
              constructor(d) {
                super();
                this.MAX_VALUE = 2;
                this._elapsed = 0;
                this._firstTick = false;
                this._easeList = [];
                this._speed = 1;
                this._repeatForever = false;
                this._repeatMethod = false;
                this._speedMethod = false;
                if (d !== undefined && !Number.isNaN(d)) {
                  this.initWithDuration(d);
                }
              }
              getElapsed() {
                return this._elapsed;
              }
              initWithDuration(d) {
                this._duration = d === 0 ? macro.FLT_EPSILON : d;
                this._elapsed = 0;
                this._firstTick = true;
                return true;
              }
              isDone() {
                return this._elapsed >= this._duration;
              }
              _cloneDecoration(action) {
                action._repeatForever = this._repeatForever;
                action._speed = this._speed;
                action._timesForRepeat = this._timesForRepeat;
                action._easeList = this._easeList;
                action._speedMethod = this._speedMethod;
                action._repeatMethod = this._repeatMethod;
              }
              _reverseEaseList(action) {
                if (this._easeList) {
                  action._easeList = [];
                  for (let i = 0; i < this._easeList.length; i++) {
                    action._easeList.push(this._easeList[i]);
                  }
                }
              }
              clone() {
                const action = new ActionInterval(this._duration);
                this._cloneDecoration(action);
                return action;
              }
              easing(easeObj) {
                if (this._easeList) this._easeList.length = 0;else this._easeList = [];
                for (let i = 0; i < arguments.length; i++) this._easeList.push(arguments[i]);
                return this;
              }
              _computeEaseTime(dt) {
                return dt;
              }
              step(dt) {
                if (this._firstTick) {
                  this._firstTick = false;
                  this._elapsed = 0;
                } else this._elapsed += dt;
                let t = this._elapsed / (this._duration > 0.0000001192092896 ? this._duration : 0.0000001192092896);
                t = t < 1 ? t : 1;
                this.update(t > 0 ? t : 0);
                if (this._repeatMethod && this._timesForRepeat > 1 && this.isDone()) {
                  if (!this._repeatForever) {
                    this._timesForRepeat--;
                  }
                  this.startWithTarget(this.target);
                  this.step(this._elapsed - this._duration);
                }
              }
              startWithTarget(target) {
                Action.prototype.startWithTarget.call(this, target);
                this._elapsed = 0;
                this._firstTick = true;
              }
              reverse() {
                logID(1010);
                return this;
              }
              setAmplitudeRate(amp) {
                logID(1011);
              }
              getAmplitudeRate() {
                logID(1012);
                return 0;
              }
              speed(speed) {
                if (speed <= 0) {
                  logID(1013);
                  return this;
                }
                this._speedMethod = true;
                this._speed *= speed;
                return this;
              }
              getSpeed() {
                return this._speed;
              }
              setSpeed(speed) {
                this._speed = speed;
                return this;
              }
              repeat(times) {
                times = Math.round(times);
                if (Number.isNaN(times) || times < 1) {
                  logID(1014);
                  return this;
                }
                this._repeatMethod = true;
                this._timesForRepeat *= times;
                return this;
              }
              repeatForever() {
                this._repeatMethod = true;
                this._timesForRepeat = this.MAX_VALUE;
                this._repeatForever = true;
                return this;
              }
            }
            class Sequence extends ActionInterval {
              constructor(tempArray) {
                super();
                this._actions = [];
                this._split = 0;
                this._last = 0;
                this._reversed = false;
                const paramArray = tempArray instanceof Array ? tempArray : arguments;
                if (paramArray.length === 1) {
                  errorID(1019);
                  return;
                }
                const last = paramArray.length - 1;
                if (last >= 0 && paramArray[last] == null) logID(1015);
                if (last >= 0) {
                  let prev = paramArray[0];
                  let action1;
                  for (let i = 1; i < last; i++) {
                    if (paramArray[i]) {
                      action1 = prev;
                      prev = Sequence._actionOneTwo(action1, paramArray[i]);
                    }
                  }
                  this.initWithTwoActions(prev, paramArray[last]);
                }
              }
              initWithTwoActions(actionOne, actionTwo) {
                if (!actionOne || !actionTwo) {
                  errorID(1025);
                  return false;
                }
                let durationOne = actionOne._duration;
                let durationTwo = actionTwo._duration;
                durationOne *= actionOne._repeatMethod ? actionOne._timesForRepeat : 1;
                durationTwo *= actionTwo._repeatMethod ? actionTwo._timesForRepeat : 1;
                const d = durationOne + durationTwo;
                this.initWithDuration(d);
                this._actions[0] = actionOne;
                this._actions[1] = actionTwo;
                return true;
              }
              clone() {
                const action = new Sequence();
                this._cloneDecoration(action);
                action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
                return action;
              }
              startWithTarget(target) {
                ActionInterval.prototype.startWithTarget.call(this, target);
                this._split = this._actions[0]._duration / this._duration;
                this._split *= this._actions[0]._repeatMethod ? this._actions[0]._timesForRepeat : 1;
                this._last = -1;
              }
              stop() {
                if (this._last !== -1) this._actions[this._last].stop();
                Action.prototype.stop.call(this);
              }
              update(dt) {
                let new_t;
                let found = 0;
                const locSplit = this._split;
                const locActions = this._actions;
                const locLast = this._last;
                let actionFound;
                dt = this._computeEaseTime(dt);
                if (dt < locSplit) {
                  new_t = locSplit !== 0 ? dt / locSplit : 1;
                  if (found === 0 && locLast === 1 && this._reversed) {
                    locActions[1].update(0);
                    locActions[1].stop();
                  }
                } else {
                  found = 1;
                  new_t = locSplit === 1 ? 1 : (dt - locSplit) / (1 - locSplit);
                  if (locLast === -1) {
                    locActions[0].startWithTarget(this.target);
                    locActions[0].update(1);
                    locActions[0].stop();
                  }
                  if (locLast === 0) {
                    locActions[0].update(1);
                    locActions[0].stop();
                  }
                }
                actionFound = locActions[found];
                if (locLast === found && actionFound.isDone()) return;
                if (locLast !== found) actionFound.startWithTarget(this.target);
                new_t *= actionFound._timesForRepeat;
                actionFound.update(new_t > 1 ? new_t % 1 : new_t);
                this._last = found;
              }
              reverse() {
                const action = Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
                this._cloneDecoration(action);
                this._reverseEaseList(action);
                action._reversed = true;
                return action;
              }
            }
            _class2 = Sequence;
            Sequence._actionOneTwo = function (actionOne, actionTwo) {
              const sequence = new _class2();
              sequence.initWithTwoActions(actionOne, actionTwo);
              return sequence;
            };
            function sequence(tempArray) {
              const paramArray = tempArray instanceof Array ? tempArray : arguments;
              if (paramArray.length === 1) {
                return paramArray[0];
              }
              const last = paramArray.length - 1;
              if (last >= 0 && paramArray[last] == null) logID(1015);
              let result = null;
              if (last >= 0) {
                result = paramArray[0];
                for (let i = 1; i <= last; i++) {
                  if (paramArray[i]) {
                    result = Sequence._actionOneTwo(result, paramArray[i]);
                  }
                }
              }
              return result;
            }
            class Repeat extends ActionInterval {
              constructor(action, times) {
                super();
                this._times = 0;
                this._total = 0;
                this._nextDt = 0;
                this._actionInstant = false;
                this._innerAction = null;
                times !== undefined && this.initWithAction(action, times);
              }
              initWithAction(action, times) {
                const duration = action._duration * times;
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
              }
              clone() {
                const action = new Repeat();
                this._cloneDecoration(action);
                action.initWithAction(this._innerAction.clone(), this._times);
                return action;
              }
              startWithTarget(target) {
                this._total = 0;
                this._nextDt = this._innerAction._duration / this._duration;
                ActionInterval.prototype.startWithTarget.call(this, target);
                this._innerAction.startWithTarget(target);
              }
              stop() {
                this._innerAction.stop();
                Action.prototype.stop.call(this);
              }
              update(dt) {
                dt = this._computeEaseTime(dt);
                const locInnerAction = this._innerAction;
                const locDuration = this._duration;
                const locTimes = this._times;
                let locNextDt = this._nextDt;
                if (dt >= locNextDt) {
                  while (dt > locNextDt && this._total < locTimes) {
                    locInnerAction.update(1);
                    this._total++;
                    locInnerAction.stop();
                    locInnerAction.startWithTarget(this.target);
                    locNextDt += locInnerAction._duration / locDuration;
                    this._nextDt = locNextDt > 1 ? 1 : locNextDt;
                  }
                  if (dt >= 1.0 && this._total < locTimes) {
                    locInnerAction.update(1);
                    this._total++;
                  }
                  if (!this._actionInstant) {
                    if (this._total === locTimes) {
                      locInnerAction.stop();
                    } else {
                      locInnerAction.update(dt - (locNextDt - locInnerAction._duration / locDuration));
                    }
                  }
                } else {
                  locInnerAction.update(dt * locTimes % 1.0);
                }
              }
              isDone() {
                return this._total === this._times;
              }
              reverse() {
                const action = new Repeat(this._innerAction.reverse(), this._times);
                this._cloneDecoration(action);
                this._reverseEaseList(action);
                return action;
              }
              setInnerAction(action) {
                if (this._innerAction !== action) {
                  this._innerAction = action;
                }
              }
              getInnerAction() {
                return this._innerAction;
              }
            }
            function repeat(action, times) {
              return new Repeat(action, times);
            }
            class RepeatForever extends ActionInterval {
              constructor(action) {
                super();
                this._innerAction = null;
                action && this.initWithAction(action);
              }
              initWithAction(action) {
                if (!action) {
                  errorID(1026);
                  return false;
                }
                this._innerAction = action;
                return true;
              }
              clone() {
                const action = new RepeatForever();
                this._cloneDecoration(action);
                action.initWithAction(this._innerAction.clone());
                return action;
              }
              startWithTarget(target) {
                ActionInterval.prototype.startWithTarget.call(this, target);
                this._innerAction.startWithTarget(target);
              }
              step(dt) {
                const locInnerAction = this._innerAction;
                locInnerAction.step(dt);
                if (locInnerAction.isDone()) {
                  locInnerAction.startWithTarget(this.target);
                  locInnerAction.step(locInnerAction.getElapsed() - locInnerAction._duration);
                }
              }
              isDone() {
                return false;
              }
              reverse() {
                const action = new RepeatForever(this._innerAction.reverse());
                this._cloneDecoration(action);
                this._reverseEaseList(action);
                return action;
              }
              setInnerAction(action) {
                if (this._innerAction !== action) {
                  this._innerAction = action;
                }
              }
              getInnerAction() {
                return this._innerAction;
              }
            }
            function repeatForever(action) {
              return new RepeatForever(action);
            }
            class Spawn extends ActionInterval {
              constructor(tempArray) {
                super();
                this._one = null;
                this._two = null;
                const paramArray = tempArray instanceof Array ? tempArray : arguments;
                if (paramArray.length === 1) {
                  errorID(1020);
                  return;
                }
                const last = paramArray.length - 1;
                if (last >= 0 && paramArray[last] == null) logID(1015);
                if (last >= 0) {
                  let prev = paramArray[0];
                  let action1;
                  for (let i = 1; i < last; i++) {
                    if (paramArray[i]) {
                      action1 = prev;
                      prev = Spawn._actionOneTwo(action1, paramArray[i]);
                    }
                  }
                  this.initWithTwoActions(prev, paramArray[last]);
                }
              }
              initWithTwoActions(action1, action2) {
                if (!action1 || !action2) {
                  errorID(1027);
                  return false;
                }
                let ret = false;
                const d1 = action1._duration;
                const d2 = action2._duration;
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
              }
              clone() {
                const action = new Spawn();
                this._cloneDecoration(action);
                action.initWithTwoActions(this._one.clone(), this._two.clone());
                return action;
              }
              startWithTarget(target) {
                ActionInterval.prototype.startWithTarget.call(this, target);
                this._one.startWithTarget(target);
                this._two.startWithTarget(target);
              }
              stop() {
                this._one.stop();
                this._two.stop();
                Action.prototype.stop.call(this);
              }
              update(dt) {
                dt = this._computeEaseTime(dt);
                if (this._one) this._one.update(dt);
                if (this._two) this._two.update(dt);
              }
              reverse() {
                const action = Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
                this._cloneDecoration(action);
                this._reverseEaseList(action);
                return action;
              }
            }
            _class5 = Spawn;
            Spawn._actionOneTwo = function (action1, action2) {
              const pSpawn = new _class5();
              pSpawn.initWithTwoActions(action1, action2);
              return pSpawn;
            };
            function spawn(tempArray) {
              const paramArray = tempArray instanceof Array ? tempArray : arguments;
              if (paramArray.length === 1) {
                errorID(1020);
                return null;
              }
              if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null) logID(1015);
              let prev = paramArray[0];
              for (let i = 1; i < paramArray.length; i++) {
                if (paramArray[i] != null) prev = Spawn._actionOneTwo(prev, paramArray[i]);
              }
              return prev;
            }
            class DelayTime extends ActionInterval {
              update(dt) {}
              reverse() {
                const action = new DelayTime(this._duration);
                this._cloneDecoration(action);
                this._reverseEaseList(action);
                return action;
              }
              clone() {
                const action = new DelayTime();
                this._cloneDecoration(action);
                action.initWithDuration(this._duration);
                return action;
              }
            }
            function delayTime(d) {
              return new DelayTime(d);
            }
            class ReverseTime extends ActionInterval {
              constructor(action) {
                super();
                this._other = null;
                action && this.initWithAction(action);
              }
              initWithAction(action) {
                if (!action) {
                  errorID(1028);
                  return false;
                }
                if (action === this._other) {
                  errorID(1029);
                  return false;
                }
                if (ActionInterval.prototype.initWithDuration.call(this, action._duration)) {
                  this._other = action;
                  return true;
                }
                return false;
              }
              clone() {
                const action = new ReverseTime();
                this._cloneDecoration(action);
                action.initWithAction(this._other.clone());
                return action;
              }
              startWithTarget(target) {
                ActionInterval.prototype.startWithTarget.call(this, target);
                this._other.startWithTarget(target);
              }
              update(dt) {
                dt = this._computeEaseTime(dt);
                if (this._other) this._other.update(1 - dt);
              }
              reverse() {
                return this._other.clone();
              }
              stop() {
                this._other.stop();
                Action.prototype.stop.call(this);
              }
            }
            function reverseTime(action) {
              return new ReverseTime(action);
            }

            function TweenEasingAdapter(easingName) {
              const initialChar = easingName.charAt(0);
              if (/[A-Z]/.test(initialChar)) {
                easingName = easingName.replace(initialChar, initialChar.toLowerCase());
                const arr = easingName.split('-');
                if (arr.length === 2) {
                  const str0 = arr[0];
                  if (str0 === 'linear') {
                    easingName = 'linear';
                  } else {
                    const str1 = arr[1];
                    switch (str0) {
                      case 'quadratic':
                        easingName = `quad${str1}`;
                        break;
                      case 'quartic':
                        easingName = `quart${str1}`;
                        break;
                      case 'quintic':
                        easingName = `quint${str1}`;
                        break;
                      case 'sinusoidal':
                        easingName = `sine${str1}`;
                        break;
                      case 'exponential':
                        easingName = `expo${str1}`;
                        break;
                      case 'circular':
                        easingName = `circ${str1}`;
                        break;
                      default:
                        easingName = str0 + str1;
                        break;
                    }
                  }
                }
              }
              return easingName;
            }
            function TweenOptionChecker(opts) {
              const header = ' [Tween:] ';
              const message = ` option is not support in v + ${engineVersion}`;
              const _opts = opts;
              if (_opts.delay) {
                warn(`${header}delay${message}`);
              }
              if (_opts.repeat) {
                warn(`${header}repeat${message}`);
              }
              if (_opts.repeatDelay) {
                warn(`${header}repeatDelay${message}`);
              }
              if (_opts.interpolation) {
                warn(`${header}interpolation${message}`);
              }
              if (_opts.onStop) {
                warn(`${header}onStop${message}`);
              }
            }
            class TweenAction extends ActionInterval {
              constructor(duration, props, opts) {
                super();
                this._opts = void 0;
                this._props = void 0;
                this._originProps = void 0;
                if (opts == null) {
                  opts = Object.create(null);
                } else {
                  TweenOptionChecker(opts);
                  if (opts.easing && typeof opts.easing === 'string') {
                    opts.easing = TweenEasingAdapter(opts.easing);
                  }
                  if (!opts.progress) {
                    opts.progress = this.progress;
                  }
                  if (opts.easing && typeof opts.easing === 'string') {
                    const easingName = opts.easing;
                    opts.easing = easing[easingName];
                    if (!opts.easing) {
                      warnID(1031, easingName);
                    }
                  }
                }
                this._opts = opts;
                this._props = Object.create(null);
                for (const name in props) {
                  if (!props.hasOwnProperty(name)) continue;
                  let value = props[name];
                  if (typeof value === 'function') {
                    value = value();
                  }
                  if (value == null || typeof value === 'string') continue;
                  let customEasing;
                  let progress;
                  if (value.value !== undefined && (value.easing || value.progress)) {
                    if (typeof value.easing === 'string') {
                      customEasing = easing[value.easing];
                      if (!customEasing) warnID(1031, value.easing);
                    } else {
                      customEasing = value.easing;
                    }
                    progress = value.progress;
                    value = value.value;
                  }
                  const prop = Object.create(null);
                  prop.value = value;
                  prop.easing = customEasing;
                  prop.progress = progress;
                  this._props[name] = prop;
                }
                this._originProps = props;
                this.initWithDuration(duration);
              }
              clone() {
                const action = new TweenAction(this._duration, this._originProps, this._opts);
                this._cloneDecoration(action);
                return action;
              }
              startWithTarget(target) {
                ActionInterval.prototype.startWithTarget.call(this, target);
                const relative = !!this._opts.relative;
                const props = this._props;
                for (const property in props) {
                  const _t = target[property];
                  if (_t === undefined) {
                    continue;
                  }
                  const prop = props[property];
                  const value = prop.value;
                  if (typeof _t === 'number') {
                    prop.start = _t;
                    prop.current = _t;
                    prop.end = relative ? _t + value : value;
                  } else if (typeof _t === 'object') {
                    if (prop.start == null) {
                      prop.start = {};
                      prop.current = {};
                      prop.end = {};
                    }
                    for (const k in value) {
                      if (isNaN(_t[k])) continue;
                      prop.start[k] = _t[k];
                      prop.current[k] = _t[k];
                      prop.end[k] = relative ? _t[k] + value[k] : value[k];
                    }
                  }
                }
                if (this._opts.onStart) {
                  this._opts.onStart(this.target);
                }
              }
              update(t) {
                const target = this.target;
                if (!target) return;
                const props = this._props;
                const opts = this._opts;
                let easingTime = t;
                if (opts.easing) easingTime = opts.easing(t);
                const progress = opts.progress;
                for (const name in props) {
                  const prop = props[name];
                  const time = prop.easing ? prop.easing(t) : easingTime;
                  const interpolation = prop.progress ? prop.progress : progress;
                  const start = prop.start;
                  const end = prop.end;
                  if (typeof start === 'number') {
                    prop.current = interpolation(start, end, prop.current, time);
                  } else if (typeof start === 'object') {
                    for (const k in start) {
                      prop.current[k] = interpolation(start[k], end[k], prop.current[k], time);
                    }
                  }
                  target[name] = prop.current;
                }
                if (opts.onUpdate) {
                  opts.onUpdate(this.target, t);
                }
                if (t === 1 && opts.onComplete) {
                  opts.onComplete(this.target);
                }
              }
              progress(start, end, current, t) {
                return start + (end - start) * t;
              }
            } exports('TweenAction', TweenAction);

            class SetAction extends ActionInstant {
              constructor(props) {
                super();
                this._props = void 0;
                this._props = {};
                props !== undefined && this.init(props);
              }
              init(props) {
                for (const name in props) {
                  this._props[name] = props[name];
                }
                return true;
              }
              update() {
                const props = this._props;
                const target = this.target;
                for (const name in props) {
                  target[name] = props[name];
                }
              }
              clone() {
                const action = new SetAction();
                action.init(this._props);
                return action;
              }
            }

            class Tween {
              constructor(target) {
                this._actions = [];
                this._finalAction = null;
                this._target = null;
                this._tag = Action.TAG_INVALID;
                this._target = target === undefined ? null : target;
              }
              tag(tag) {
                this._tag = tag;
                return this;
              }
              then(other) {
                if (other instanceof Action) {
                  this._actions.push(other.clone());
                } else {
                  this._actions.push(other._union());
                }
                return this;
              }
              target(target) {
                this._target = target;
                return this;
              }
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
              stop() {
                if (this._finalAction) {
                  TweenSystem.instance.ActionManager.removeAction(this._finalAction);
                }
                return this;
              }
              clone(target) {
                const action = this._union();
                return tween(target).then(action.clone());
              }
              union() {
                const action = this._union();
                this._actions.length = 0;
                this._actions.push(action);
                return this;
              }
              to(duration, props, opts) {
                opts = opts || Object.create(null);
                opts.relative = false;
                const action = new TweenAction(duration, props, opts);
                this._actions.push(action);
                return this;
              }
              by(duration, props, opts) {
                opts = opts || Object.create(null);
                opts.relative = true;
                const action = new TweenAction(duration, props, opts);
                this._actions.push(action);
                return this;
              }
              set(props) {
                const action = new SetAction(props);
                this._actions.push(action);
                return this;
              }
              delay(duration) {
                const action = delayTime(duration);
                this._actions.push(action);
                return this;
              }
              call(callback) {
                const action = callFunc(callback);
                this._actions.push(action);
                return this;
              }
              sequence(...args) {
                const action = Tween._wrappedSequence(...args);
                this._actions.push(action);
                return this;
              }
              parallel(...args) {
                const action = Tween._wrappedParallel(...args);
                this._actions.push(action);
                return this;
              }
              repeat(repeatTimes, embedTween) {
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
              hide() {
                const action = hide();
                this._actions.push(action);
                return this;
              }
              show() {
                const action = show();
                this._actions.push(action);
                return this;
              }
              removeSelf() {
                const action = removeSelf(false);
                this._actions.push(action);
                return this;
              }
              destroySelf() {
                const action = removeSelf(true);
                this._actions.push(action);
                return this;
              }
              static stopAll() {
                TweenSystem.instance.ActionManager.removeAllActions();
              }
              static stopAllByTag(tag, target) {
                TweenSystem.instance.ActionManager.removeAllActionsByTag(tag, target);
              }
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
            } exports('Tween', Tween);
            Tween._tmp_args = [];
            legacyCC.Tween = Tween;
            function tween(target) {
              return new Tween(target);
            }
            legacyCC.tween = tween;
            function tweenUtil(target) {
              warn('tweenUtil\' is deprecated, please use \'tween\' instead ');
              return new Tween(target);
            }
            legacyCC.tweenUtil = tweenUtil;

        })
    };
}));
