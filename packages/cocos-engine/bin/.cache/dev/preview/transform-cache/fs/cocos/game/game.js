System.register("q-bundled:///fs/cocos/game/game.js", ["../../../virtual/internal%253Aconstants.js", "pal/system-info", "pal/env", "pal/pacer", "../asset/asset-manager/asset-manager.js", "../core/index.js", "../input/index.js", "../gfx/index.js", "./splash-screen.js", "../rendering/index.js", "../scene-graph/index.js", "../asset/asset-manager/builtin-res-mgr.js", "./director.js", "../rendering/define.js", "../core/effect-settings.js"], function (_export, _context) {
  "use strict";

  var DEBUG, EDITOR, NATIVE, PREVIEW, TEST, EDITOR_NOT_IN_PREVIEW, systemInfo, findCanvas, loadJsFile, Pacer, assetManager, EventTarget, AsyncDelegate, sys, macro, VERSION, cclegacy, screen, Settings, settings, assert, garbageCollectionManager, DebugMode, warn, log, _resetDebugSetting, errorID, logID, input, deviceManager, LegacyRenderMode, SplashScreen, RenderPipeline, Layers, builtinResMgr, Director, director, bindingMappingInfo, effectSettings, Game, game;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2013-2016 Chukong Technologies Inc.
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      NATIVE = _virtualInternal253AconstantsJs.NATIVE;
      PREVIEW = _virtualInternal253AconstantsJs.PREVIEW;
      TEST = _virtualInternal253AconstantsJs.TEST;
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_palEnv) {
      findCanvas = _palEnv.findCanvas;
      loadJsFile = _palEnv.loadJsFile;
    }, function (_palPacer) {
      Pacer = _palPacer.Pacer;
    }, function (_assetAssetManagerAssetManagerJs) {
      assetManager = _assetAssetManagerAssetManagerJs.default;
    }, function (_coreIndexJs) {
      EventTarget = _coreIndexJs.EventTarget;
      AsyncDelegate = _coreIndexJs.AsyncDelegate;
      sys = _coreIndexJs.sys;
      macro = _coreIndexJs.macro;
      VERSION = _coreIndexJs.VERSION;
      cclegacy = _coreIndexJs.cclegacy;
      screen = _coreIndexJs.screen;
      Settings = _coreIndexJs.Settings;
      settings = _coreIndexJs.settings;
      assert = _coreIndexJs.assert;
      garbageCollectionManager = _coreIndexJs.garbageCollectionManager;
      DebugMode = _coreIndexJs.DebugMode;
      warn = _coreIndexJs.warn;
      log = _coreIndexJs.log;
      _resetDebugSetting = _coreIndexJs._resetDebugSetting;
      errorID = _coreIndexJs.errorID;
      logID = _coreIndexJs.logID;
    }, function (_inputIndexJs) {
      input = _inputIndexJs.input;
    }, function (_gfxIndexJs) {
      deviceManager = _gfxIndexJs.deviceManager;
      LegacyRenderMode = _gfxIndexJs.LegacyRenderMode;
    }, function (_splashScreenJs) {
      SplashScreen = _splashScreenJs.SplashScreen;
    }, function (_renderingIndexJs) {
      RenderPipeline = _renderingIndexJs.RenderPipeline;
    }, function (_sceneGraphIndexJs) {
      Layers = _sceneGraphIndexJs.Layers;
    }, function (_assetAssetManagerBuiltinResMgrJs) {
      builtinResMgr = _assetAssetManagerBuiltinResMgrJs.builtinResMgr;
    }, function (_directorJs) {
      Director = _directorJs.Director;
      director = _directorJs.director;
    }, function (_renderingDefineJs) {
      bindingMappingInfo = _renderingDefineJs.bindingMappingInfo;
    }, function (_coreEffectSettingsJs) {
      effectSettings = _coreEffectSettingsJs.effectSettings;
    }],
    execute: function () {
      /**
       * @zh
       * 游戏配置。
       * @en
       * Game configuration.
       */
      /**
       * @en An object to boot the game.
       * @zh 包含游戏主体信息并负责驱动游戏的游戏对象。
       */
      _export("Game", Game = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(Game, _EventTarget);
        function Game() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EventTarget.call.apply(_EventTarget, [this].concat(args)) || this;
          /**
           * @en The outer frame of the game canvas; parent of game container.
           * @zh 游戏画布的外框，container 的父容器。
           *
           * @deprecated since 3.4.0, frame is a concept on web standard, please manager screens via the `screen` module.
           */
          _this.frame = null;
          /**
           * @en The container of game canvas.
           * @zh 游戏画布的容器。
           *
           * @deprecated since 3.4.0, container is a concept on web standard, please manager screens via the `screen` module.
           */
          _this.container = null;
          /**
           * @en The canvas of the game.
           * @zh 游戏的画布。
           */
          _this.canvas = null;
          /**
           * @en The renderer backend of the game.
           * @zh 游戏的渲染器类型。
           */
          _this.renderType = -1;
          _this.eventTargetOn = _EventTarget.prototype.on;
          _this.eventTargetOnce = _EventTarget.prototype.once;
          /**
           * @en
           * The current game configuration,
           * please be noticed any modification directly on this object after the game initialization won't take effect.
           * @zh
           * 当前的游戏配置
           * 注意：请不要直接修改这个对象，它不会有任何效果。
           */
          _this.config = {};
          /**
           * @en Callback when the scripts of engine have been load.
           * @zh 当引擎完成启动后的回调函数。
           * @method onStart
           */
          _this.onStart = null;
          /**
           * @en The expected delta time of each frame in milliseconds
           * @zh 期望帧率对应的每帧时间（以 ms 为单位）
           */
          _this.frameTime = 1000 / 60;
          // states
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._isCloning = false;
          // deserializing or instantiating
          _this._inited = false;
          _this._engineInited = false;
          // whether the engine has inited
          _this._rendererInitialized = false;
          _this._paused = true;
          _this._pausedByEngine = false;
          // frame control
          _this._frameRate = 60;
          _this._pacer = null;
          _this._initTime = 0;
          _this._startTime = 0;
          _this._deltaTime = 0.0;
          _this._useFixedDeltaTime = false;
          _this._shouldLoadLaunchScene = true;
          /**
           * @en The event delegate pre base module initialization. At this point you can not use pal/logging/sys/settings API.
           * @zh 基础模块初始化之前的事件代理。在这个事件点你无法使用 pal/logging/sys/settings 的相关接口。
           */
          _this.onPreBaseInitDelegate = new AsyncDelegate();
          /**
           * @en The event delegate post base module initialization. At this point you can use pal/logging/sys/settings API safely.
           * @zh 基础模块初始化之后的事件代理。在这个事件点你可以安全使用 pal/logging/sys/settings 的相关接口。
           */
          _this.onPostBaseInitDelegate = new AsyncDelegate();
          /**
           * @en The event delegate pre infrastructure module initialization.
           * At this point you can not use assetManager/gfx/screen/builtinResMgr/macro/Layer API.
           * @zh 基础设施模块初始化之前的事件代理。在这个事件点你无法使用 assetManager/gfx/screen/builtinResMgr/macro/Layer 的相关接口。
           */
          _this.onPreInfrastructureInitDelegate = new AsyncDelegate();
          /**
           * @en The event delegate post infrastructure module initialization.
           * At this point you can use assetManager/gfx/screen/builtinResMgr/macro/Layer API safely.
           *
           * @zh 基础设施模块初始化之后的事件代理。在这个事件点你可以安全使用 assetManager/gfx/screen/builtinResMgr/macro/Layer 的相关接口。
           */
          _this.onPostInfrastructureInitDelegate = new AsyncDelegate();
          /**
           * @en The event delegate pre sub system module initialization. At this point you can not use physics/animation/rendering/tween/etc API.
           * @zh 子系统模块初始化之前的事件代理。在这个事件点你无法使用 physics/animation/rendering/tween/etc 的相关接口。
           */
          _this.onPreSubsystemInitDelegate = new AsyncDelegate();
          /**
           * @en The event delegate post sub system module initialization. At this point you can use physics/animation/rendering/tween/etc API safely.
           * @zh 子系统模块初始化之后的事件代理。在这个事件点你可以安全使用 physics/animation/rendering/tween/etc 的相关接口。
           */
          _this.onPostSubsystemInitDelegate = new AsyncDelegate();
          /**
           * @en The event delegate pre project data initialization.
           * At this point you can not access project data using [resources.load]/[director.loadScene] API.
           * @zh 项目数据初始化之前的事件代理。在这个事件点你无法使用访问项目数据的相关接口，例如 [resources.load]/[director.loadScene] 等 API。
           */
          _this.onPreProjectInitDelegate = new AsyncDelegate();
          /**
           * @en The event delegate post project data initialization.
           * at this point you can access project data using [resources.load]/[director.loadScene] API safely.
           * @zh 项目数据初始化之后的事件代理。
           * 在这个事件点你可以安全使用访问项目数据的相关接口，例如 [resources.load]/[director.loadScene] 等 API。
           */
          _this.onPostProjectInitDelegate = new AsyncDelegate();
          return _this;
        }
        var _proto = Game.prototype;
        // @Methods
        //  @Game play control
        /**
         * @en Set frame rate of game.
         * @zh 设置游戏帧率。
         * @deprecated since v3.3.0 please use [[game.frameRate]]
         */
        _proto.setFrameRate = function setFrameRate(frameRate) {
          this.frameRate = frameRate;
        }

        /**
         * @en Get frame rate set for the game, it doesn't represent the real frame rate.
         * @zh 获取设置的游戏帧率（不等同于实际帧率）。
         * @return frame rate
         * @deprecated since v3.3.0 please use [[game.frameRate]]
         */;
        _proto.getFrameRate = function getFrameRate() {
          return this.frameRate;
        }

        /**
         * @en Run the game frame by frame with a fixed delta time correspond to frame rate.
         * @zh 以固定帧间隔执行一帧游戏循环，帧间隔与设定的帧率匹配。
         */;
        _proto.step = function step() {
          director.tick(this._calculateDT(true));
        }

        /**
         * @en Called by the engine to pause the game.
         * @zh 提供给引擎调用暂停游戏接口。
         */;
        _proto.pauseByEngine = function pauseByEngine() {
          if (this._paused) {
            return;
          }
          this._pausedByEngine = true;
          this.pause();
        }

        /**
         * @en Resume paused game by engine call.
         * @zh 提供给引擎调用恢复暂停游戏接口。
         */;
        _proto.resumeByEngine = function resumeByEngine() {
          if (this._pausedByEngine) {
            this.resume();
            this._pausedByEngine = false;
          }
        }

        /**
         * @en Pause the game main loop. This will pause:
         * - game logic execution
         * - rendering process
         * - input event dispatching (excluding Web and Minigame platforms)
         *
         * This is different with `director.pause()` which only pause the game logic execution.
         *
         * @zh 暂停游戏主循环。包含：
         * - 游戏逻辑
         * - 渲染
         * - 输入事件派发（Web 和小游戏平台除外）
         *
         * 这点和只暂停游戏逻辑的 `director.pause()` 不同。
         */;
        _proto.pause = function pause() {
          var _this$_pacer;
          if (this._paused) {
            return;
          }
          this._paused = true;
          (_this$_pacer = this._pacer) === null || _this$_pacer === void 0 ? void 0 : _this$_pacer.stop();
          this.emit(Game.EVENT_PAUSE);
        }

        /**
         * @en Resume the game from pause. This will resume:<br>
         * game logic execution, rendering process, event manager, background music and all audio effects.<br>
         * @zh 恢复游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。
         */;
        _proto.resume = function resume() {
          var _this$_pacer2;
          if (!this._paused) {
            return;
          }
          input._clearEvents();
          this._paused = false;
          (_this$_pacer2 = this._pacer) === null || _this$_pacer2 === void 0 ? void 0 : _this$_pacer2.start();
          this.emit(Game.EVENT_RESUME);
        }

        /**
         * @en Check whether the game is paused.
         * @zh 判断游戏是否暂停。
         */;
        _proto.isPaused = function isPaused() {
          return this._paused;
        }

        /**
         * @en Restart game.
         * @zh 重新开始游戏
         */;
        _proto.restart = function restart() {
          var _this2 = this;
          var endFramePromise = new Promise(function (resolve) {
            director.once(Director.EVENT_END_FRAME, function () {
              return resolve();
            });
          });
          return endFramePromise.then(function () {
            director.reset();
            cclegacy.Object._deferredDestroy();
            _this2.pause();
            _this2.resume();
            _this2._shouldLoadLaunchScene = true;
            SplashScreen.instance.curTime = 0;
            _this2._safeEmit(Game.EVENT_RESTART);
          });
        }

        /**
         * @en End game, it will close the game window
         * @zh 退出游戏
         */;
        _proto.end = function end() {
          systemInfo.close();
        }

        /**
         * @en
         * Register an callback of a specific event type on the game object.<br>
         * This type of event should be triggered via `emit`.<br>
         * @zh
         * 注册 game 的特定事件类型回调。这种类型的事件应该被 `emit` 触发。<br>
         *
         * @param type - A string representing the event type to listen for.
         * @param callback - The callback that will be invoked when the event is dispatched.<br>
         *                              The callback is ignored if it is a duplicate (the callbacks are unique).
         * @param target - The target (this object) to invoke the callback, can be null
         * @param once - After the first invocation, whether the callback should be unregistered.
         * @return - Just returns the incoming callback so you can save the anonymous function easier.
         */;
        _proto.on = function on(type, callback, target, once) {
          // Make sure EVENT_ENGINE_INITED callbacks to be invoked
          if (this.canRegisterEvent(type)) {
            callback.call(target);
          }
          return this.eventTargetOn(type, callback, target, once);
        }

        /**
         * @en
         * Register an callback of a specific event type on the game object,<br>
         * the callback will remove itself after the first time it is triggered.<br>
         * @zh
         * 注册 game 的特定事件类型回调，回调会在第一时间被触发后删除自身。
         *
         * @param type - A string representing the event type to listen for.
         * @param callback - The callback that will be invoked when the event is dispatched.<br>
         *                              The callback is ignored if it is a duplicate (the callbacks are unique).
         * @param target - The target (this object) to invoke the callback, can be null
         */;
        _proto.once = function once(type, callback, target) {
          // Make sure EVENT_ENGINE_INITED callbacks to be invoked
          if (this.canRegisterEvent(type)) {
            return callback.call(target);
          }
          return this.eventTargetOnce(type, callback, target);
        };
        _proto.canRegisterEvent = function canRegisterEvent(type) {
          return this._engineInited && type === Game.EVENT_ENGINE_INITED || this._inited && type === Game.EVENT_GAME_INITED || this._rendererInitialized && type === Game.EVENT_RENDERER_INITED;
        }

        /**
         * @en Init game with configuration object. Initialization process like below:
         * -PreBaseInitEvent
         * -BaseModuleInitialization(logging, sys, settings)
         * -PostBaseInitEvent
         * -PreInfrastructureInitEvent
         * -InfrastructureModuleInitialization(assetManager, builtinResMgr, gfxDevice, screen, Layer, macro)
         * -PostInfrastructureInitEvent
         * -PreSubsystemInitEvent
         * -SubsystemModuleInitialization(animation, physics, tween, ui, middleware, etc)
         * -PostSubsystemInitEvent
         * -EngineInitedEvent
         * -PreProjectDataInitEvent
         * -ProjectDataInitialization(GamePlayScripts, resources, etc)
         * -PostProjectDataInitEvent
         * -GameInitedEvent
         *
         * @zh 使用指定的配置初始化引擎。初始化流程如下：
         * -PreBaseInitEvent
         * -BaseModuleInitialization(logging, sys, settings)
         * -PostBaseInitEvent
         * -PreInfrastructureInitEvent
         * -InfrastructureModuleInitialization(assetManager, builtinResMgr, gfxDevice, screen, Layer, macro)
         * -PostInfrastructureInitEvent
         * -PreSubsystemInitEvent
         * -SubsystemModuleInitialization(animation, physics, tween, ui, middleware, etc)
         * -PostSubsystemInitEvent
         * -EngineInitedEvent
         * -PreProjectDataInitEvent
         * -ProjectDataInitialization(GamePlayScripts, resources, etc)
         * -PostProjectDataInitEvent
         * -GameInitedEvent
         * @param config - Pass configuration object
         */;
        _proto.init = function init(config) {
          var _this3 = this;
          this._compatibleWithOldParams(config);
          // DONT change the order unless you know what's you doing
          return Promise.resolve()
          // #region Base
          .then(function () {
            _this3.emit(Game.EVENT_PRE_BASE_INIT);
            return _this3.onPreBaseInitDelegate.dispatch();
          }).then(function () {
            if (DEBUG) {
              // eslint-disable-next-line no-console
              console.time('Init Base');
            }
            var debugMode = config.debugMode || DebugMode.NONE;
            _resetDebugSetting(debugMode);
          }).then(function () {
            return sys.init();
          }).then(function () {
            _this3._initEvents();
          }).then(function () {
            return settings.init(config.settingsPath, config.overrideSettings);
          }).then(function () {
            if (DEBUG) {
              // eslint-disable-next-line no-console
              console.timeEnd('Init Base');
            }
            _this3.emit(Game.EVENT_POST_BASE_INIT);
            return _this3.onPostBaseInitDelegate.dispatch();
          })
          // #endregion Base
          // #region Infrastructure
          .then(function () {
            _this3.emit(Game.EVENT_PRE_INFRASTRUCTURE_INIT);
            return _this3.onPreInfrastructureInitDelegate.dispatch();
          }).then(function () {
            if (DEBUG) {
              // eslint-disable-next-line no-console
              console.time('Init Infrastructure');
            }
            macro.init();
            _this3._initXR();
            var adapter = findCanvas();
            if (adapter) {
              _this3.canvas = adapter.canvas;
              _this3.frame = adapter.frame;
              _this3.container = adapter.container;
            }
            screen.init();
            garbageCollectionManager.init();
            deviceManager.init(_this3.canvas, bindingMappingInfo);
            var renderPipelineUuid = settings.querySettings(Settings.Category.RENDERING, 'renderPipeline');
            if (renderPipelineUuid === 'ca127c79-69d6-4afd-8183-d712d7b80e14') {
              if (!macro.CUSTOM_PIPELINE_NAME) {
                macro.CUSTOM_PIPELINE_NAME = 'Forward';
              }
            }
            if (macro.CUSTOM_PIPELINE_NAME === '') {
              cclegacy.rendering = undefined;
            }
            assetManager.init();
            builtinResMgr.init();
            Layers.init();
            _this3.initPacer();
            if (DEBUG) {
              // eslint-disable-next-line no-console
              console.timeEnd('Init Infrastructure');
            }
          }).then(function () {
            _this3.emit(Game.EVENT_POST_INFRASTRUCTURE_INIT);
            return _this3.onPostInfrastructureInitDelegate.dispatch();
          })
          // #endregion Infrastructure
          // #region Subsystem
          .then(function () {
            _this3.emit(Game.EVENT_PRE_SUBSYSTEM_INIT);
            return _this3.onPreSubsystemInitDelegate.dispatch();
          }).then(function () {
            return effectSettings.init(settings.querySettings(Settings.Category.RENDERING, 'effectSettingsPath'));
          }).then(function () {
            // initialize custom render pipeline
            if (!cclegacy.rendering || !cclegacy.rendering.enableEffectImport) {
              return;
            }
            var renderMode = settings.querySettings(Settings.Category.RENDERING, 'renderMode');
            if (renderMode === LegacyRenderMode.HEADLESS) {
              cclegacy.rendering.init(deviceManager.gfxDevice, null);
              return;
            }
            var data = effectSettings.data;
            if (data === null) {
              errorID(1102);
              return;
            }
            cclegacy.rendering.init(deviceManager.gfxDevice, data);
          }).then(function () {
            var scriptPackages = settings.querySettings(Settings.Category.SCRIPTING, 'scriptPackages');
            if (scriptPackages) {
              return Promise.all(scriptPackages.map(function (pack) {
                return _context["import"]("" + pack);
              }));
            }
            return Promise.resolve([]);
          }).then(function () {
            if (DEBUG) {
              // eslint-disable-next-line no-console
              console.time('Init SubSystem');
            }
            director.init();
            return builtinResMgr.loadBuiltinAssets();
          }).then(function () {
            if (DEBUG) {
              // eslint-disable-next-line no-console
              console.timeEnd('Init SubSystem');
            }
            _this3.emit(Game.EVENT_POST_SUBSYSTEM_INIT);
            return _this3.onPostSubsystemInitDelegate.dispatch();
          }).then(function () {
            log("Cocos Creator v" + VERSION);
            _this3.emit(Game.EVENT_ENGINE_INITED);
            _this3._engineInited = true;
          })
          // #endregion Subsystem
          // #region Project
          .then(function () {
            _this3.emit(Game.EVENT_PRE_PROJECT_INIT);
            return _this3.onPreProjectInitDelegate.dispatch();
          }).then(function () {
            if (DEBUG) {
              // eslint-disable-next-line no-console
              console.time('Init Project');
            }
            var jsList = settings.querySettings(Settings.Category.PLUGINS, 'jsList');
            var promise = Promise.resolve();
            if (jsList) {
              jsList.forEach(function (jsListFile) {
                promise = promise.then(function () {
                  return loadJsFile((PREVIEW ? 'plugins' : 'src') + "/" + jsListFile);
                });
              });
            }
            return promise;
          }).then(function () {
            return _this3._loadProjectBundles();
          }).then(function () {
            return _this3._loadCCEScripts();
          }).then(function () {
            return _this3._setupRenderPipeline();
          }).then(function () {
            return _this3._loadPreloadAssets();
          }).then(function () {
            builtinResMgr.compileBuiltinMaterial();
            return SplashScreen.instance.init();
          }).then(function () {
            if (DEBUG) {
              // eslint-disable-next-line no-console
              console.timeEnd('Init Project');
            }
            _this3.emit(Game.EVENT_POST_PROJECT_INIT);
            return _this3.onPostProjectInitDelegate.dispatch();
          })
          // #endregion Project
          .then(function () {
            _this3._inited = true;
            _this3._safeEmit(Game.EVENT_GAME_INITED);
          });
        };
        _proto._initXR = function _initXR() {
          var _settings$querySettin;
          if (typeof globalThis.__globalXR === 'undefined') {
            globalThis.__globalXR = {};
          }
          var globalXR = globalThis.__globalXR;
          globalXR.webxrCompatible = (_settings$querySettin = settings.querySettings(Settings.Category.XR, 'webxrCompatible')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : false;
          if (sys.isXR) {
            var _settings$querySettin2, _settings$querySettin3;
            // XrEntry must not be destroyed
            xr.entry = xr.XrEntry.getInstance();
            var xrMSAA = (_settings$querySettin2 = settings.querySettings(Settings.Category.RENDERING, 'msaa')) !== null && _settings$querySettin2 !== void 0 ? _settings$querySettin2 : 1;
            var xrRenderingScale = (_settings$querySettin3 = settings.querySettings(Settings.Category.RENDERING, 'renderingScale')) !== null && _settings$querySettin3 !== void 0 ? _settings$querySettin3 : 1.0;
            xr.entry.setMultisamplesRTT(xrMSAA);
            xr.entry.setRenderingScale(xrRenderingScale);
          }
        };
        _proto._compatibleWithOldParams = function _compatibleWithOldParams(config) {
          var overrideSettings = config.overrideSettings = config.overrideSettings || {};
          if ('showFPS' in config) {
            overrideSettings.profiling = overrideSettings.profiling || {};
            overrideSettings.profiling.showFPS = config.showFPS;
          }
          if ('frameRate' in config) {
            overrideSettings.screen = overrideSettings.screen || {};
            overrideSettings.screen.frameRate = config.frameRate;
          }
          if ('renderMode' in config) {
            overrideSettings.rendering = overrideSettings.rendering || {};
            overrideSettings.rendering.renderMode = config.renderMode;
          }
          if ('renderPipeline' in config) {
            overrideSettings.rendering = overrideSettings.rendering || {};
            overrideSettings.rendering.renderPipeline = config.renderPipeline;
          }
          if ('assetOptions' in config) {
            overrideSettings.assets = overrideSettings.assets || {};
            Object.assign(overrideSettings.assets, config.assetOptions);
          }
          if ('customJointTextureLayouts' in config) {
            overrideSettings.animation = overrideSettings.animation || {};
            overrideSettings.animation.customJointTextureLayouts = config.customJointTextureLayouts;
          }
          if ('physics' in config) {
            overrideSettings.physics = overrideSettings.physics || {};
            Object.assign(overrideSettings.physics, config.physics);
          }
          if ('orientation' in config) {
            overrideSettings.screen = overrideSettings.screen || {};
            overrideSettings.screen.orientation = config.orientation;
          }
          if ('exactFitScreen' in config) {
            overrideSettings.screen = overrideSettings.screen || {};
            overrideSettings.screen.exactFitScreen = config.exactFitScreen;
          }
        };
        _proto._loadPreloadAssets = function _loadPreloadAssets() {
          var preloadAssets = settings.querySettings(Settings.Category.ASSETS, 'preloadAssets');
          if (!preloadAssets) return Promise.resolve([]);
          return Promise.all(preloadAssets.map(function (uuid) {
            return new Promise(function (resolve, reject) {
              assetManager.loadAny(uuid, function (err) {
                if (err) {
                  reject(err);
                  return;
                }
                resolve();
              });
            });
          }));
        }

        /**
         * @internal only for browser preview
         */;
        _proto._loadCCEScripts = function _loadCCEScripts() {
          return new Promise(function (resolve, reject) {
            // Since there is no script in the bundle during preview, we need to load the user's script in the following way
            if (PREVIEW && !TEST && !EDITOR && !NATIVE) {
              var bundneName = 'cce:/internal/x/prerequisite-imports';
              _context["import"]("" + bundneName).then(function () {
                return resolve();
              }, function (reason) {
                return reject(reason);
              });
            } else {
              resolve();
            }
          });
        }

        /**
         * @internal only for game-view
         */;
        _proto._loadProjectBundles = function _loadProjectBundles() {
          var preloadBundles = settings.querySettings(Settings.Category.ASSETS, 'preloadBundles');
          if (!preloadBundles) return Promise.resolve([]);
          return Promise.all(preloadBundles.map(function (_ref) {
            var bundle = _ref.bundle,
              version = _ref.version;
            return new Promise(function (resolve, reject) {
              var opts = {};
              if (version) opts.version = version;
              assetManager.loadBundle(bundle, opts, function (err) {
                if (err) {
                  reject(err);
                  return;
                }
                resolve();
              });
            });
          }));
        }

        /**
         * @en Run game with configuration object and onStart function.
         * @zh 运行游戏，并且指定引擎配置和 onStart 的回调。
         * @param onStart - function to be executed after game initialized
         */;
        _proto.run = function run(onStart) {
          if (onStart) {
            this.onStart = onStart;
          }
          if (!this._inited || EDITOR_NOT_IN_PREVIEW) {
            return;
          }
          this.resume();
        }

        // @Methods
        ;
        _proto._calculateDT = function _calculateDT(useFixedDeltaTime) {
          this._useFixedDeltaTime = useFixedDeltaTime;
          if (useFixedDeltaTime) {
            this._startTime = performance.now();
            return this.frameTime / 1000;
          }
          var now = performance.now();
          this._deltaTime = now > this._startTime ? (now - this._startTime) / 1000 : 0;
          if (this._deltaTime > Game.DEBUG_DT_THRESHOLD) {
            this._deltaTime = this.frameTime / 1000;
          }
          this._startTime = now;
          return this._deltaTime;
        };
        _proto._updateCallback = function _updateCallback() {
          var _this4 = this;
          if (!this._inited) return;
          if (!SplashScreen.instance.isFinished) {
            SplashScreen.instance.update(this._calculateDT(false));
          } else if (this._shouldLoadLaunchScene) {
            this._shouldLoadLaunchScene = false;
            var launchScene = settings.querySettings(Settings.Category.LAUNCH, 'launchScene');
            if (launchScene) {
              // load scene
              director.loadScene(launchScene, function () {
                var _this4$onStart;
                logID(1103, launchScene);
                _this4._initTime = performance.now();
                director.startAnimation();
                (_this4$onStart = _this4.onStart) === null || _this4$onStart === void 0 ? void 0 : _this4$onStart.call(_this4);
              });
            } else {
              var _this$onStart;
              this._initTime = performance.now();
              director.startAnimation();
              (_this$onStart = this.onStart) === null || _this$onStart === void 0 ? void 0 : _this$onStart.call(this);
            }
          } else {
            director.tick(this._calculateDT(false));
          }
        };
        _proto.initPacer = function initPacer() {
          var _settings$querySettin4;
          var frameRate = (_settings$querySettin4 = settings.querySettings(Settings.Category.SCREEN, 'frameRate')) !== null && _settings$querySettin4 !== void 0 ? _settings$querySettin4 : 60;
          assert(typeof frameRate === 'number');
          this._pacer = new Pacer();
          this._pacer.onTick = this._updateCallback.bind(this);
          this.frameRate = frameRate;
        };
        _proto._initEvents = function _initEvents() {
          systemInfo.on('show', this._onShow, this);
          systemInfo.on('hide', this._onHide, this);
          systemInfo.on('close', this._onClose, this);
        };
        _proto._onHide = function _onHide() {
          this.emit(Game.EVENT_HIDE);
          this.pauseByEngine();
        };
        _proto._onShow = function _onShow() {
          this.emit(Game.EVENT_SHOW);
          this.resumeByEngine();
        };
        _proto._onClose = function _onClose() {
          this.emit(Game.EVENT_CLOSE);
          // TODO : Release Resources.
          systemInfo.exit();
        }

        //  @ Persist root node section
        /**
         * @en
         * Add a persistent root node to the game, the persistent node won't be destroyed during scene transition.<br>
         * The target node must be placed in the root level of hierarchy, otherwise this API won't have any effect.
         * @zh
         * 声明常驻根节点，该节点不会在场景切换中被销毁。<br>
         * 目标节点必须位于为层级的根节点，否则无效。
         * @param node - The node to be made persistent
         * @deprecated Since v3.6.0, please use director.addPersistRootNode instead.
         */;
        _proto.addPersistRootNode = function addPersistRootNode(node) {
          director.addPersistRootNode(node);
        }

        /**
         * @en Remove a persistent root node.
         * @zh 取消常驻根节点。
         * @param node - The node to be removed from persistent node list
         * @deprecated Since v3.6.0, please use director.removePersistRootNode instead.
         */;
        _proto.removePersistRootNode = function removePersistRootNode(node) {
          director.removePersistRootNode(node);
        }

        /**
         * @en Check whether the node is a persistent root node.
         * @zh 检查节点是否是常驻根节点。
         * @param node - The node to be checked.
         * @deprecated Since v3.6.0, please use director.isPersistRootNode instead.
         */;
        _proto.isPersistRootNode = function isPersistRootNode(node) {
          return director.isPersistRootNode(node);
        };
        _proto._setupRenderPipeline = function _setupRenderPipeline() {
          var _this5 = this;
          var renderPipeline = settings.querySettings(Settings.Category.RENDERING, 'renderPipeline');
          if (!renderPipeline || renderPipeline === 'ca127c79-69d6-4afd-8183-d712d7b80e14') {
            return this._setRenderPipeline();
          }
          return new Promise(function (resolve, reject) {
            assetManager.loadAny(renderPipeline, function (err, asset) {
              return err || !(asset instanceof RenderPipeline) ? reject(err) : resolve(asset);
            });
          }).then(function (asset) {
            _this5._setRenderPipeline(asset);
          })["catch"](function (reason) {
            warn(reason);
            warn("Failed load render pipeline: " + renderPipeline + ", engine failed to initialize, will fallback to default pipeline");
            _this5._setRenderPipeline();
          });
        };
        _proto._setRenderPipeline = function _setRenderPipeline(rppl) {
          if (!director.root.setRenderPipeline(rppl)) {
            this._setRenderPipeline();
          }
          this._rendererInitialized = true;
          this._safeEmit(Game.EVENT_RENDERER_INITED);
        };
        _proto._safeEmit = function _safeEmit(event) {
          if (EDITOR) {
            try {
              this.emit(event);
            } catch (e) {
              warn(e);
            }
          } else {
            this.emit(event);
          }
        };
        _createClass(Game, [{
          key: "inited",
          get:
          /**
           * @en Indicates whether the engine and the renderer has been initialized
           * @zh 引擎和渲染器是否以完成初始化
           */
          function get() {
            return this._inited;
          }

          /**
           * @en Expected frame rate of the game.
           * @zh 游戏的设定帧率。
           */
        }, {
          key: "frameRate",
          get: function get() {
            return this._frameRate;
          },
          set: function set(frameRate) {
            if (typeof frameRate !== 'number') {
              frameRate = parseInt(frameRate, 10);
              if (Number.isNaN(frameRate)) {
                frameRate = 60;
              }
            }
            this._frameRate = frameRate;
            this.frameTime = 1000 / frameRate;
            if (this._pacer) this._pacer.targetFrameRate = this._frameRate;
          }

          /**
           * @en The delta time since last frame, unit: s.
           * @zh 获取上一帧的增量时间，以秒为单位。
           */
        }, {
          key: "deltaTime",
          get: function get() {
            return this._useFixedDeltaTime ? this.frameTime / 1000 : this._deltaTime;
          }

          /**
           * @en The total passed time since game start, unit: ms
           * @zh 获取从游戏开始到现在总共经过的时间，以毫秒为单位
           */
        }, {
          key: "totalTime",
          get: function get() {
            return performance.now() - this._initTime;
          }

          /**
           * @en The start time of the current frame in milliseconds.
           * @zh 获取当前帧开始的时间（以 ms 为单位）。
           */
        }, {
          key: "frameStartTime",
          get: function get() {
            return this._startTime;
          }
        }]);
        return Game;
      }(EventTarget));
      /**
       * @en Event triggered when game hide to background.<br>
       * Please note that this event is not 100% guaranteed to be fired on Web platform,<br>
       * on native platforms, it corresponds to enter background event, os status bar or notification center may not trigger this event.
       * @zh 游戏进入后台时触发的事件。<br>
       * 请注意，在 WEB 平台，这个事件不一定会 100% 触发，这完全取决于浏览器的回调行为。<br>
       * 在原生平台，它对应的是应用被切换到后台事件，下拉菜单和上拉状态栏等不一定会触发这个事件，这取决于系统行为。
       * @example
       * ```ts
       * import { game } from 'cc';
       * game.on(Game.EVENT_HIDE, function () {
       *
       * });
       * ```
       */
      Game.EVENT_HIDE = 'game_on_hide';
      /**
       * @en Event triggered when game back to foreground<br>
       * Please note that this event is not 100% guaranteed to be fired on Web platform,<br>
       * on native platforms, it corresponds to enter foreground event.
       * @zh 游戏进入前台运行时触发的事件。<br>
       * 请注意，在 WEB 平台，这个事件不一定会 100% 触发，这完全取决于浏览器的回调行为。<br>
       * 在原生平台，它对应的是应用被切换到前台事件。
       */
      Game.EVENT_SHOW = 'game_on_show';
      /**
       * @en Event triggered when system in low memory status.<br>
       * This event is only triggered on native iOS/Android platform.
       * @zh 程序在内存不足时触发的事件。<br>
       * 该事件只会在 iOS/Android 平台触发。
       */
      Game.EVENT_LOW_MEMORY = 'game_on_low_memory';
      /**
       * @en Event triggered after game inited, at this point all engine objects and game scripts are loaded
       * @zh 游戏启动后的触发事件，此时加载所有的引擎对象和游戏脚本。
       */
      Game.EVENT_GAME_INITED = 'game_inited';
      /**
       * @en Event triggered after engine inited, at this point you will be able to use all engine classes.<br>
       * It was defined as EVENT_RENDERER_INITED in cocos creator v1.x and renamed in v2.0.
       * Since Cocos Creator v3.0, EVENT_RENDERER_INITED is a new event, look up define for details.
       * @zh 在引擎初始化之后触发的事件，此时您能够使用引擎所有的类。<br>
       * 它在 Cocos Creator v1.x 版本中名字为 EVENT_RENDERER_INITED，在 v2.0 更名为 EVENT_ENGINE_INITED
       * 并在 Cocos Creator v3.0 中将 EVENT_RENDERER_INITED 用作为渲染器初始化的事件。
       */
      Game.EVENT_ENGINE_INITED = 'engine_inited';
      /**
       * @en Event triggered after renderer inited, at this point you will be able to use all gfx renderer feature.<br>
       * @zh 在渲染器初始化之后触发的事件，此事件在 EVENT_ENGINE_INITED 之前触发，此时开始可使用 gfx 渲染框架。
       */
      Game.EVENT_RENDERER_INITED = 'renderer_inited';
      /**
       * @en Event triggered pre base module initialization, at this point you can not use pal/logging/sys/settings API.
       * @zh 基础模块初始化之前的事件，在这个事件点你无法使用 pal/logging/sys/settings 的相关接口。
       */
      Game.EVENT_PRE_BASE_INIT = 'pre_base_init';
      /**
       * @en Event triggered post base module initialization, at this point you can use pal/logging/sys/settings API safely.
       * @zh 基础模块初始化之后的事件，在这个事件点你可以安全使用 pal/logging/sys/settings 的相关接口。
       */
      Game.EVENT_POST_BASE_INIT = 'post_base_init';
      /**
       * @en Event triggered pre infrastructure initialization, at this point you can not use assetManager/gfx/screen/builtinResMgr/macro/Layer API.
       * @zh 基础设施初始化之前的事件，在这个事件点你无法使用 assetManager/gfx/screen/builtinResMgr/macro/Layer 的相关接口。
       */
      Game.EVENT_PRE_INFRASTRUCTURE_INIT = 'pre_infrastructure_init';
      /**
       * @en Event triggered post infrastructure initialization, at this point you can use assetManager/gfx/screen/builtinResMgr/macro/Layer API safely.
       * @zh 基础设施初始化之后的事件，在这个事件点你可以安全使用 assetManager/gfx/screen/builtinResMgr/macro/Layer 的相关接口。
       */
      Game.EVENT_POST_INFRASTRUCTURE_INIT = 'post_infrastructure_init';
      /**
       * @en Event triggered pre subsystem initialization, at this point you can not use physics/animation/rendering/tween/etc API.
       * @zh 子系统初始化之前的事件，在这个事件点你无法使用 physics/animation/rendering/tween/etc 的相关接口。
       */
      Game.EVENT_PRE_SUBSYSTEM_INIT = 'pre_subsystem_init';
      /**
       * @en Event triggered post subsystem initialization, at this point you can use physics/animation/rendering/tween/etc API safely.
       * @zh 子系统初始化之后的事件，在这个事件点你可以安全使用 physics/animation/rendering/tween/etc 的相关接口。
       */
      Game.EVENT_POST_SUBSYSTEM_INIT = 'post_subsystem_init';
      /**
       * @en Event triggered pre project data initialization,
       * at this point you can not access project data using [resources.load]/[director.loadScene] API.
       * @zh 项目数据初始化之前的事件，在这个事件点你无法使用访问项目数据的相关接口，例如 [resources.load]/[director.loadScene] 等 API。
       */
      Game.EVENT_PRE_PROJECT_INIT = 'pre_project_init';
      /**
       * @en Event triggered post project data initialization,
       * at this point you can access project data using [resources.load]/[director.loadScene] API safely.
       * @zh 项目数据初始化之后的事件，在这个事件点你可以安全使用访问项目数据的相关接口，例如 [resources.load]/[director.loadScene] 等 API。
       */
      Game.EVENT_POST_PROJECT_INIT = 'post_project_init';
      /**
       * @en Event triggered when game restart
       * @zh 调用restart后，触发事件
       */
      Game.EVENT_RESTART = 'game_on_restart';
      /**
       * @en Triggered when the game is paused.<br>
       * @zh 游戏暂停时触发该事件。<br>
       * @example
       * ```ts
       * import { game } from 'cc';
       * game.on(Game.EVENT_PAUSE, function () {
       *     //pause audio or video
       * });
       * ```
       */
      Game.EVENT_PAUSE = 'game_on_pause';
      /**
       * @en Triggered when the game is resumed.<br>
       * @zh 游戏恢复时触发该事件。<br>
       */
      Game.EVENT_RESUME = 'game_on_resume';
      /**
       * @en Triggered when the game will be closed. <br>
       * @zh 游戏将要关闭时触发的事件。<br>
       */
      Game.EVENT_CLOSE = 'game_on_close';
      /**
       * @en Web Canvas 2d API as renderer backend.
       * @zh 使用 Web Canvas 2d API 作为渲染器后端。
       */
      Game.RENDER_TYPE_CANVAS = 0;
      /**
       * @en WebGL API as renderer backend.
       * @zh 使用 WebGL API 作为渲染器后端。
       */
      Game.RENDER_TYPE_WEBGL = 1;
      /**
       * @en OpenGL API as renderer backend.
       * @zh 使用 OpenGL API 作为渲染器后端。
       */
      Game.RENDER_TYPE_OPENGL = 2;
      /**
       * @en Headless Renderer, usually used in test or server env
       * @zh 空渲染器，通常用于测试环境或服务器端模式
       */
      Game.RENDER_TYPE_HEADLESS = 3;
      /**
       * @en If delta time since last frame is more than this threshold in seconds,
       * the game timer will consider user is debugging and adjust the delta time to [[frameTime]].
       * @zh 如果距离上一帧的帧间隔超过了这个阈值（单位是 s），那么就会被认为正在调试，帧间隔会被自动调节为 [[frameTime]].
       */
      Game.DEBUG_DT_THRESHOLD = 1;
      cclegacy.Game = Game;

      /**
       * @en
       * This is a Game instance.
       * @zh
       * 这是一个 Game 类的实例，包含游戏主体信息并负责驱动游戏的游戏对象。
       */
      _export("game", game = cclegacy.game = new Game());
    }
  };
});