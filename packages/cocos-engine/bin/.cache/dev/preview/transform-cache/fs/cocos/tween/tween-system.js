System.register("q-bundled:///fs/cocos/tween/tween-system.js", ["../../../virtual/internal%253Aconstants.js", "../core/index.js", "./actions/action-manager.js", "../game/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, System, ActionManager, Director, director, TweenSystem;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_coreIndexJs) {
      System = _coreIndexJs.System;
    }, function (_actionsActionManagerJs) {
      ActionManager = _actionsActionManagerJs.ActionManager;
    }, function (_gameIndexJs) {
      Director = _gameIndexJs.Director;
      director = _gameIndexJs.director;
    }],
    execute: function () {
      /**
       * @en
       * Tween system.
       * @zh
       * 缓动系统。
       */
      _export("TweenSystem", TweenSystem = /*#__PURE__*/function (_System) {
        _inheritsLoose(TweenSystem, _System);
        function TweenSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _System.call.apply(_System, [this].concat(args)) || this;
          _this.actionMgr = new ActionManager();
          return _this;
        }
        var _proto = TweenSystem.prototype;
        /**
         * @en
         * The update will auto execute after all components update.
         * @zh
         * 此方法会在组件 update 之后自动执行。
         * @param dt @en The delta time @zh 间隔时间
         */
        _proto.update = function update(dt) {
          if (!EDITOR_NOT_IN_PREVIEW || this._executeInEditMode) {
            this.actionMgr.update(dt);
          }
        };
        _createClass(TweenSystem, [{
          key: "ActionManager",
          get:
          /**
           * @en
           * Gets the action manager.
           * @zh
           * 获取动作管理器。
           */
          function get() {
            return this.actionMgr;
          }
        }]);
        return TweenSystem;
      }(System));
      /**
       * @en
       * The ID flag of the system.
       * @zh
       * 此系统的 ID 标记。
       */
      TweenSystem.ID = 'TWEEN';
      /**
       * @en
       * Gets the instance of the tween system.
       * @zh
       * 获取缓动系统的实例。
       */
      TweenSystem.instance = void 0;
      director.on(Director.EVENT_INIT, function () {
        var sys = new TweenSystem();
        TweenSystem.instance = sys;
        director.registerSystem(TweenSystem.ID, sys, System.Priority.MEDIUM);
      });
    }
  };
});