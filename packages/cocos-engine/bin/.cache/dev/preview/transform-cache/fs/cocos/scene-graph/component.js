System.register("q-bundled:///fs/cocos/scene-graph/component.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../asset/assets/scripts.js", "../core/data/object.js", "../core/utils/id-generator.js", "../core/utils/js.js", "../core/data/utils/requiring-frame.js", "../core/global-exports.js", "../core/platform/debug.js", "./component-event-handler.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayName, type, serializable, disallowAnimation, EDITOR, TEST, Script, CCObject, IDGenerator, getClassName, value, RF, legacyCC, errorID, warnID, assertID, EventHandler, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _initializer2, _initializer3, _class3, idGenerator, IsOnLoadCalled, NullNode, Component;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayName = _coreDataDecoratorsIndexJs.displayName;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      disallowAnimation = _coreDataDecoratorsIndexJs.disallowAnimation;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_assetAssetsScriptsJs) {
      Script = _assetAssetsScriptsJs.Script;
    }, function (_coreDataObjectJs) {
      CCObject = _coreDataObjectJs.CCObject;
    }, function (_coreUtilsIdGeneratorJs) {
      IDGenerator = _coreUtilsIdGeneratorJs.IDGenerator;
    }, function (_coreUtilsJsJs) {
      getClassName = _coreUtilsJsJs.getClassName;
      value = _coreUtilsJsJs.value;
    }, function (_coreDataUtilsRequiringFrameJs) {
      RF = _coreDataUtilsRequiringFrameJs;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_corePlatformDebugJs) {
      errorID = _corePlatformDebugJs.errorID;
      warnID = _corePlatformDebugJs.warnID;
      assertID = _corePlatformDebugJs.assertID;
    }, function (_componentEventHandlerJs) {
      EventHandler = _componentEventHandlerJs.EventHandler;
    }],
    execute: function () {
      idGenerator = new IDGenerator('Comp');
      IsOnLoadCalled = CCObject.Flags.IsOnLoadCalled;
      NullNode = null;
      /**
       * @en
       * Base class for everything attached to Node(Entity).<br/>
       * <br/>
       * NOTE: Not allowed to use construction parameters for Component's subclasses,
       *       because Component is created by the engine.
       * @zh
       * 所有附加到节点的基类。<br/>
       * <br/>
       * 注意：不允许使用组件的子类构造参数，因为组件是由引擎创建的。
       */
      _export("Component", Component = (_dec = ccclass('cc.Component'), _dec2 = displayName('Script'), _dec3 = type(Script), _dec4 = tooltip('i18n:INSPECTOR.component.script'), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_CCObject) {
        _inheritsLoose(Component, _CCObject);
        function Component() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CCObject.call.apply(_CCObject, [this].concat(args)) || this;
          /**
           * @en The node this component is attached to. A component is always attached to a node.
           * @zh 该组件被附加到的节点。组件总会附加到一个节点。
           * @example
           * ```ts
           * import { log } from 'cc';
           * log(comp.node);
           * ```
           */
          _this.node = _initializer && _initializer();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._enabled = _initializer2 && _initializer2();
          /**
           * @internal
           */
          _this.__prefab = _initializer3 && _initializer3();
          /**
           * @internal
           */
          _this._sceneGetter = null;
          /**
           * For internal usage.
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._id = idGenerator.getNewId();
          return _this;
        }
        var _proto = Component.prototype;
        // private __scriptUuid = '';
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _proto._getRenderScene = function _getRenderScene() {
          if (this._sceneGetter) {
            return this._sceneGetter();
          }
          return this.node.scene.renderScene;
        }

        // PUBLIC

        /**
         * @en Adds a component class to the node. You can also add component to node by passing in the name of the script.
         * @zh 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
         * @param classConstructor The class of component to be retrieved or to be created
         * @example
         * ```ts
         * import { Sprite } from 'cc';
         * const sprite = node.addComponent(Sprite);
         * ```
         */;
        _proto.addComponent = function addComponent(typeOrClassName) {
          return this.node.addComponent(typeOrClassName);
        }

        /**
         * @en
         * Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
         * You can also get component in the node by passing in the name of the script.
         * @zh
         * 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
         * 传入参数也可以是脚本的名称。
         * @param classConstructor The class of component to be retrieved or to be created
         * @example
         * ```ts
         * import { Sprite } from 'cc';
         * // get sprite component.
         * var sprite = node.getComponent(Sprite);
         * ```
         */;
        _proto.getComponent = function getComponent(typeOrClassName) {
          return this.node.getComponent(typeOrClassName);
        }

        /**
         * @en Returns all components of supplied type in the node.
         * @zh 返回节点上指定类型的所有组件。
         * @param classConstructor The class of components to be retrieved
         * @example
         * ```ts
         * import { Sprite } from 'cc';
         * const sprites = node.getComponents(Sprite);
         * ```
         */;
        _proto.getComponents = function getComponents(typeOrClassName) {
          return this.node.getComponents(typeOrClassName);
        }

        /**
         * @en Returns the component of supplied type in any of its children using depth first search.
         * @zh 递归查找所有子节点中第一个匹配指定类型的组件。
         * @param classConstructor The class of component to be retrieved
         * @example
         * ```ts
         * import { Sprite } from 'cc';
         * const sprite = node.getComponentInChildren(Sprite);
         * ```
         */;
        _proto.getComponentInChildren = function getComponentInChildren(typeOrClassName) {
          return this.node.getComponentInChildren(typeOrClassName);
        }

        /**
         * @en Returns all components of supplied type in self or any of its children.
         * @zh 递归查找自身或所有子节点中指定类型的组件。
         * @param classConstructor The class of components to be retrieved
         * @example
         * ```ts
         * import { Sprite } from 'cc';
         * const sprites = node.getComponentsInChildren(Sprite);
         * ```
         */;
        _proto.getComponentsInChildren = function getComponentsInChildren(typeOrClassName) {
          return this.node.getComponentsInChildren(typeOrClassName);
        }

        // OVERRIDE
        ;
        _proto.destroy = function destroy() {
          if (EDITOR) {
            // TODO: `_getDependComponent` is an injected method.
            // issue: https://github.com/cocos/cocos-engine/issues/14643
            var depend = this.node._getDependComponent(this);
            if (depend.length > 0) {
              errorID(3626, getClassName(this), getClassName(depend[0]));
              return false;
            }
          }
          if (_CCObject.prototype.destroy.call(this)) {
            if (this._enabled && this.node.activeInHierarchy) {
              legacyCC.director._compScheduler.disableComp(this);
            }
            return true;
          }
          return false;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._onPreDestroy = function _onPreDestroy() {
          // Schedules
          this.unscheduleAllCallbacks();

          // onDestroy
          legacyCC.director._nodeActivator.destroyComp(this);

          // do remove component
          this.node._removeComponent(this);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._instantiate = function _instantiate(cloned) {
          if (!cloned) {
            cloned = legacyCC.instantiate._clone(this, this);
          }
          if (cloned) {
            cloned.node = NullNode;
          }
          return cloned;
        }

        // Scheduler

        /**
         * @en
         * Use Scheduler system to schedule a custom task.<br/>
         * If the task is already scheduled, then the interval parameter will be updated without scheduling it again.
         * @zh
         * 使用定时器系统调度一个自定义的回调任务。<br/>
         * 如果回调任务已调度，那么将不会重复调度它，只会更新时间间隔参数。
         * @param callback  The callback function of the task
         * @param interval  The time interval between each invocation
         * @param repeat    The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever
         * @param delay     The delay time for the first invocation, Unit: s
         * @example
         * ```ts
         * import { log } from 'cc';
         * this.schedule((dt) => void log(`time: ${dt}`), 1);
         * ```
         */;
        _proto.schedule = function schedule(callback, interval, repeat, delay) {
          if (interval === void 0) {
            interval = 0;
          }
          if (repeat === void 0) {
            repeat = legacyCC.macro.REPEAT_FOREVER;
          }
          if (delay === void 0) {
            delay = 0;
          }
          assertID(Boolean(callback), 1619);
          interval = interval || 0;
          assertID(interval >= 0, 1620);
          repeat = Number.isNaN(repeat) ? legacyCC.macro.REPEAT_FOREVER : repeat;
          delay = delay || 0;
          var scheduler = legacyCC.director.getScheduler();

          // should not use enabledInHierarchy to judge whether paused,
          // because enabledInHierarchy is assigned after onEnable.
          // Actually, if not yet scheduled, resumeTarget/pauseTarget has no effect on component,
          // therefore there is no way to guarantee the paused state other than isTargetPaused.
          var paused = scheduler.isTargetPaused(this);
          scheduler.schedule(callback, this, interval, repeat, delay, paused);
        }

        /**
         * @en Use Scheduler system to schedule a task that runs only once, with a delay of 0 or larger.
         * @zh 使用定时器系统调度一个只运行一次的回调任务，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。
         * @method scheduleOnce
         * @see [[schedule]]
         * @param callback  The callback function of the task
         * @param delay  The delay time for the first invocation, Unit: s
         * @example
         * ```ts
         * import { log } from 'cc';
         * this.scheduleOnce((dt) => void log(`time: ${dt}`), 2);
         * ```
         */;
        _proto.scheduleOnce = function scheduleOnce(callback, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          this.schedule(callback, 0, 0, delay);
        }

        /**
         * @en Un-schedules a custom task.
         * @zh 取消调度一个自定义的回调任务。
         * @param callback_fn  The callback function of the task
         * @example
         * ```ts
         * this.unschedule(_callback);
         * ```
         */;
        _proto.unschedule = function unschedule(callback_fn) {
          if (!callback_fn) {
            return;
          }
          legacyCC.director.getScheduler().unschedule(callback_fn, this);
        }

        /**
         * @en unschedule all scheduled tasks.
         * @zh 取消调度所有已调度的回调函数。
         * @example
         * ```ts
         * this.unscheduleAllCallbacks();
         * ```
         */;
        _proto.unscheduleAllCallbacks = function unscheduleAllCallbacks() {
          legacyCC.director.getScheduler().unscheduleAllForTarget(this);
        }

        // LIFECYCLE METHODS

        // Cocos Creator provides lifecycle methods that you can specify to hook into this process.
        // We provide Pre methods, which are called right before something happens, and Post methods which are called right after something happens.

        /**
         * @en Update is called every frame, if the Component is enabled.<br/>
         * This is a lifecycle method. It may not be implemented in the super class.<br/>
         * You can only call its super class method inside it. It should not be called manually elsewhere.
         * @zh 如果该组件启用，则每帧调用 update。<br/>
         * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
         * @param dt - the delta time in seconds it took to complete the last frame
         */;
        _createClass(Component, [{
          key: "name",
          get: function get() {
            if (this._name) {
              return this._name;
            }
            var className = getClassName(this);
            var trimLeft = className.lastIndexOf('.');
            if (trimLeft >= 0) {
              className = className.slice(trimLeft + 1);
            }
            if (this.node) {
              return this.node.name + "<" + className + ">";
            } else {
              return className;
            }
          },
          set: function set(value) {
            this._name = value;
          }

          /**
           * @en The uuid for editor.
           * @zh 组件的 uuid，用于编辑器。
           * @readOnly
           * @example
           * ```ts
           * import { log } from 'cc';
           * log(comp.uuid);
           * ```
           */
        }, {
          key: "uuid",
          get: function get() {
            return this._id;
          }

          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "__scriptAsset",
          get: function get() {
            return null;
          }

          /**
           * @en Indicates whether this component is enabled or not.
           * @zh 表示该组件自身是否启用。
           * @default true
           * @example
           * ```ts
           * import { log } from 'cc';
           * comp.enabled = true;
           * log(comp.enabled);
           * ```
           */
        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            if (this._enabled !== value) {
              this._enabled = value;
              if (this.node.activeInHierarchy) {
                var compScheduler = legacyCC.director._compScheduler;
                if (value) {
                  compScheduler.enableComp(this);
                } else {
                  compScheduler.disableComp(this);
                }
              }
            }
          }

          /**
           * @en Indicates whether this component is enabled and its node is also active in the hierarchy.
           * @zh 表示该组件是否被启用并且所在的节点也处于激活状态。
           * @readOnly
           * @example
           * ```ts
           * import { log } from 'cc';
           * log(comp.enabledInHierarchy);
           * ```
           */
        }, {
          key: "enabledInHierarchy",
          get: function get() {
            return this._enabled && this.node && this.node.activeInHierarchy;
          }

          /**
           * @en Returns a value which used to indicate the onLoad get called or not.
           * @zh 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。
           * @readOnly
           * @example
           * ```ts
           * import { log } from 'cc';
           * log(this._isOnLoadCalled > 0);
           * ```
           *
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "_isOnLoadCalled",
          get: function get() {
            return this._objFlags & IsOnLoadCalled;
          }
        }, {
          key: "internalUpdate",
          get:
          /**
           * @engineInternal `update` is a protected property, we provide this public property for engine internal usage.
           */
          function get() {
            return this.update;
          }

          /**
           * @en LateUpdate is called every frame, if the Component is enabled.<br/>
           * This is a lifecycle method. It may not be implemented in the super class.<br/>
           * You can only call its super class method inside it. It should not be called manually elsewhere.
           * @zh 如果该组件启用，则每帧调用 LateUpdate。<br/>
           * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
           * @param dt - the delta time in seconds it took to complete the last frame
           */
        }, {
          key: "internalLateUpdate",
          get:
          /**
           * @engineInternal `lateUpdate` is a protected property, we provide this public property for engine internal usage.
           */
          function get() {
            return this.lateUpdate;
          }

          /**
           * @en `__preload` is called before every onLoad.<br/>
           * It is used to initialize the builtin components internally,<br/>
           * to avoid checking whether onLoad is called before every public method calls.<br/>
           * This method should be removed if script priority is supported.
           * @zh `__preload` 在每次onLoad之前调用。<br/>
           * 它用于在内部初始化内置组件，<br/>
           * 以避免在每次公有方法调用之前检查是否调用了onLoad。<br/>
           * 如果支持脚本优先级，则应删除此方法。
           * @private
           */
        }, {
          key: "internalPreload",
          get:
          /**
           * @engineInternal `__preload` is a protected property, we provide this public property for engine internal usage.
           */
          function get() {
            return this.__preload;
          }

          /**
           * @en
           * When attaching to an active node or its node first activated.<br/>
           * onLoad is always called before any start functions, this allows you to order initialization of scripts.<br/>
           * This is a lifecycle method. It may not be implemented in the super class.<br/>
           * You can only call its super class method inside it. It should not be called manually elsewhere.
           * @zh
           * 当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。<br/>
           * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
           */
        }, {
          key: "internalOnLoad",
          get:
          /**
           * @engineInternal `onLoad` is a protected property, we provide this public property for engine internal usage.
           */
          function get() {
            return this.onLoad;
          }

          /**
           * @en
           * Called before all scripts' update if the Component is enabled the first time.<br/>
           * Usually used to initialize some logic which need to be called after all components' `onload` methods called.<br/>
           * This is a lifecycle method. It may not be implemented in the super class.<br/>
           * You can only call its super class method inside it. It should not be called manually elsewhere.
           * @zh
           * 如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。<br/>
           * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
           */
        }, {
          key: "internalStart",
          get:
          /**
           * @engineInternal `start` is a protected property, we provide this public property for engine internal usage.
           */
          function get() {
            return this.start;
          }

          /**
           * @en Called when this component becomes enabled and its node is active.<br/>
           * This is a lifecycle method. It may not be implemented in the super class.
           * You can only call its super class method inside it. It should not be called manually elsewhere.
           * @zh 当该组件被启用，并且它的节点也激活时。<br/>
           * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
           */
        }, {
          key: "internalOnEnable",
          get:
          /**
           * @engineInternal `onEnable` is a protected property, we provide this public property for engine internal usage.
           */
          function get() {
            return this.onEnable;
          }

          /**
           * @en Called when this component becomes disabled or its node becomes inactive.<br/>
           * This is a lifecycle method. It may not be implemented in the super class.
           * You can only call its super class method inside it. It should not be called manually elsewhere.
           * @zh 当该组件被禁用或节点变为无效时调用。<br/>
           * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
           */
        }, {
          key: "internalOnDisable",
          get:
          /**
           * @engineInternal `onDisable` is a protected property, we provide this public property for engine internal usage.
           */
          function get() {
            return this.onDisable;
          }

          /**
           * @en Called when this component will be destroyed.<br/>
           * This is a lifecycle method. It may not be implemented in the super class.<br/>
           * You can only call its super class method inside it. It should not be called manually elsewhere.
           * @zh 当该组件被销毁时调用<br/>
           * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
           */
        }, {
          key: "internalOnDestroy",
          get:
          /**
           * @engineInternal `onDestroy` is a protected property, we provide this public property for engine internal usage.
           */
          function get() {
            return this.onDestroy;
          }
        }]);
        return Component;
      }(CCObject), _class3.EventHandler = EventHandler, _class3._executionOrder = 0, _class3._requireComponent = null, _class3.system = null, _class3), (_applyDecoratedDescriptor(_class2.prototype, "__scriptAsset", [_dec2, _dec3, _dec4, disallowAnimation], Object.getOwnPropertyDescriptor(_class2.prototype, "__scriptAsset"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "node", [serializable], function () {
        return NullNode;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_enabled", [serializable], function () {
        return true;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "__prefab", [serializable], function () {
        return null;
      })), _class2)) || _class)); // NOTE: these are all injected properties
      if (EDITOR || TEST) {
        // INHERITABLE STATIC MEMBERS
        Component._executeInEditMode = false;
        Component._playOnFocus = false;
        Component._disallowMultiple = null;
        Component._help = '';

        // NON-INHERITED STATIC MEMBERS
        // (TypeScript 2.3 will still inherit them, so always check hasOwnProperty before using)

        value(Component, '_inspector', '', true);
        value(Component, '_icon', '', true);

        // COMPONENT HELPERS

        // TODO Keep temporarily, compatible with old version
        legacyCC._componentMenuItems = [];
      }

      // we make this non-enumerable, to prevent inherited by sub classes.
      value(Component, '_registerEditorProps', function (cls, props) {
        var reqComp = props.requireComponent;
        if (reqComp) {
          if (Array.isArray(reqComp)) {
            reqComp = reqComp.filter(Boolean);
          }
          cls._requireComponent = reqComp;
        }
        var order = props.executionOrder;
        if (order && typeof order === 'number') {
          cls._executionOrder = order;
        }
        if (EDITOR || TEST) {
          var name = getClassName(cls);
          for (var key in props) {
            var val = props[key];
            switch (key) {
              case 'executeInEditMode':
                cls._executeInEditMode = !!val;
                break;
              case 'playOnFocus':
                if (val) {
                  var willExecuteInEditMode = 'executeInEditMode' in props ? props.executeInEditMode : cls._executeInEditMode;
                  if (willExecuteInEditMode) {
                    cls._playOnFocus = true;
                  } else {
                    warnID(3601, name);
                  }
                }
                break;
              case 'inspector':
                value(cls, '_inspector', val, true);
                break;
              case 'icon':
                value(cls, '_icon', val, true);
                break;
              case 'menu':
                {
                  var frame = RF.peek();
                  var menu = val;
                  if (frame && !menu.includes('/')) {
                    menu = "i18n:menu.custom_script/" + menu;
                  }
                  EDITOR && EditorExtends.Component.removeMenu(cls);
                  EDITOR && EditorExtends.Component.addMenu(cls, menu, props.menuPriority);
                  break;
                }
              case 'disallowMultiple':
                cls._disallowMultiple = cls;
                break;
              case 'requireComponent':
              case 'executionOrder':
                // skip here
                break;
              case 'help':
                cls._help = val;
                break;
              default:
                warnID(3602, key, name);
                break;
            }
          }
        }
      });
      legacyCC.Component = Component;
    }
  };
});