System.register("q-bundled:///fs/cocos/tween/actions/action-instant.js", ["./action.js", "../../misc/renderer.js"], function (_export, _context) {
  "use strict";

  var FiniteTimeAction, Renderer, ActionInstant, Show, Hide, ToggleVisibility, RemoveSelf, CallFunc;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable @typescript-eslint/ban-types */
  /**
   * @en Show the Node.
   * @zh 立即显示。
   * @method show
   * @return {ActionInstant}
   * @example
   * // example
   * var showAction = show();
   */
  function show() {
    return new Show();
  }

  /*
   * Hide the node.
   * @class Hide
   * @extends ActionInstant
   */

  /**
   * @en Hide the node.
   * @zh 立即隐藏。
   * @method hide
   * @return {ActionInstant}
   * @example
   * // example
   * var hideAction = hide();
   */
  function hide() {
    return new Hide();
  }

  /*
   * Toggles the visibility of a node.
   * @class ToggleVisibility
   * @extends ActionInstant
   */

  /**
   * @en Toggles the visibility of a node.
   * @zh 显隐状态切换。
   * @method toggleVisibility
   * @return {ActionInstant}
   * @example
   * // example
   * var toggleVisibilityAction = toggleVisibility();
   */
  function toggleVisibility() {
    return new ToggleVisibility();
  }

  /*
   * Delete self in the next frame.
   * @class RemoveSelf
   * @extends ActionInstant
   * @param {Boolean} [isNeedCleanUp=true]
   *
   * @example
   * // example
   * var removeSelfAction = new RemoveSelf(false);
   */

  /**
   * @en Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
   * @zh 从父节点移除自身。
   * @method removeSelf
   * @param {Boolean} [isNeedCleanUp = true]
   * @return {ActionInstant}
   *
   * @example
   * // example
   * var removeSelfAction = removeSelf();
   */
  function removeSelf(isNeedCleanUp) {
    return new RemoveSelf(isNeedCleanUp);
  }

  /*
   * Calls a 'callback'.
   * @class CallFunc
   * @extends ActionInstant
   * @param {function} selector
   * @param {object} [selectorTarget=null]
   * @param {*} [data=null] data for function, it accepts all data types.
   * @example
   * // example
   * // CallFunc without data
   * var finish = new CallFunc(this.removeSprite, this);
   *
   * // CallFunc with data
   * var finish = new CallFunc(this.removeFromParentAndCleanup, this,  true);
   */

  /**
   * @en Creates the action with the callback.
   * @zh 执行回调函数。
   * @method callFunc
   * @param {function} selector
   * @param {object} [selectorTarget=null]
   * @param {*} [data=null] - data for function, it accepts all data types.
   * @return {ActionInstant}
   * @example
   * // example
   * // CallFunc without data
   * var finish = callFunc(this.removeSprite, this);
   *
   * // CallFunc with data
   * var finish = callFunc(this.removeFromParentAndCleanup, this._grossini,  true);
   */
  function callFunc(selector, selectorTarget, data) {
    return new CallFunc(selector, selectorTarget, data);
  }
  _export({
    ActionInstant: void 0,
    Show: void 0,
    show: show,
    Hide: void 0,
    hide: hide,
    ToggleVisibility: void 0,
    toggleVisibility: toggleVisibility,
    RemoveSelf: void 0,
    removeSelf: removeSelf,
    CallFunc: void 0,
    callFunc: callFunc
  });
  return {
    setters: [function (_actionJs) {
      FiniteTimeAction = _actionJs.FiniteTimeAction;
    }, function (_miscRendererJs) {
      Renderer = _miscRendererJs.Renderer;
    }],
    execute: function () {
      /**
       * @en Instant actions are immediate actions. They don't have a duration like the ActionInterval actions.
       * @zh 即时动作，这种动作立即就会执行，继承自 FiniteTimeAction。
       * @class ActionInstant
       * @extends FiniteTimeAction
       */
      _export("ActionInstant", ActionInstant = class ActionInstant extends FiniteTimeAction {
        isDone() {
          return true;
        }
        step(dt) {
          this.update(1);
        }
        update(dt) {
          // nothing
        }

        /**
         * returns a reversed action. <br />
         * For example: <br />
         * - The action is x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * @returns {Action}
         */
        reverse() {
          return this.clone();
        }
        clone() {
          return new ActionInstant();
        }
      });
      /*
       * Show the node.
       * @class Show
       * @extends ActionInstant
       */
      _export("Show", Show = class Show extends ActionInstant {
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
      });
      _export("Hide", Hide = class Hide extends ActionInstant {
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
      });
      _export("ToggleVisibility", ToggleVisibility = class ToggleVisibility extends ActionInstant {
        update(dt) {
          const _renderComps = this.target.getComponentsInChildren(Renderer);
          for (let i = 0; i < _renderComps.length; ++i) {
            const render = _renderComps[i];
            render.enabled = !render.enabled;
          }
        }
        reverse() {
          return new ToggleVisibility();
        }
        clone() {
          return new ToggleVisibility();
        }
      });
      _export("RemoveSelf", RemoveSelf = class RemoveSelf extends ActionInstant {
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
      });
      _export("CallFunc", CallFunc = class CallFunc extends ActionInstant {
        /*
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates a CallFunc action with the callback.
         * @param {function} selector
         * @param {object} [selectorTarget=null]
         * @param {*} [data=null] data for function, it accepts all data types.
         */
        constructor(selector, selectorTarget, data) {
          super();
          this._selectorTarget = null;
          this._function = null;
          this._data = null;
          this.initWithFunction(selector, selectorTarget, data);
        }

        /*
         * Initializes the action with a function or function and its target
         * @param {function} selector
         * @param {object|Null} selectorTarget
         * @param {*|Null} [data] data for function, it accepts all data types.
         * @return {Boolean}
         */
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

        /*
         * execute the function.
         */
        execute() {
          if (this._function) {
            this._function.call(this._selectorTarget, this.target, this._data);
          }
        }
        update(dt) {
          this.execute();
        }

        /*
         * Get selectorTarget.
         * @return {object}
         */
        getTargetCallback() {
          return this._selectorTarget;
        }

        /*
         * Set selectorTarget.
         * @param {object} sel
         */
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
      });
    }
  };
});