System.register("q-bundled:///fs/cocos/scene-graph/node-activator.js", ["../../../virtual/internal%253Aconstants.js", "../core/data/object.js", "../core/utils/js.js", "../core/utils/misc.js", "./component-scheduler.js", "../core/global-exports.js", "../core/platform/debug.js", "./node-event.js", "../core/data/utils/asserts.js"], function (_export, _context) {
  "use strict";

  var EDITOR, DEV, SUPPORT_JIT, DEBUG, CCObject, isValid, array, Pool, tryCatchFunctor_EDITOR, invokeOnEnable, createInvokeImpl, createInvokeImplJit, OneOffInvoker, LifeCycleInvoker, legacyCC, assert, errorID, getError, NodeEventType, assertIsTrue, MAX_POOL_SIZE, IsPreloadStarted, IsOnLoadStarted, IsOnLoadCalled, IsOnEnableCalled, Deactivating, UnsortedInvoker, invokePreload, invokeOnLoad, activateTasksPool, NodeActivator, callPreloadInTryCatch, callOnLoadInTryCatch, callOnDestroyInTryCatch, callOnFocusInTryCatch, callOnLostFocusInTryCatch, _onLoadInEditor;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  function _componentCorrupted(node, comp, index) {
    errorID(3817, node.name, index);
    console.log('Corrupted component value:', comp);
    if (comp) {
      node._removeComponent(comp);
    } else {
      array.removeAt(node.getWritableComponents(), index);
    }
  }

  /**
   * @en The class used to perform activating and deactivating operations of node and component.
   * @zh 用于执行节点和组件的激活和停用操作的管理器。
   */
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      DEV = _virtualInternal253AconstantsJs.DEV;
      SUPPORT_JIT = _virtualInternal253AconstantsJs.SUPPORT_JIT;
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreDataObjectJs) {
      CCObject = _coreDataObjectJs.CCObject;
      isValid = _coreDataObjectJs.isValid;
    }, function (_coreUtilsJsJs) {
      array = _coreUtilsJsJs.array;
      Pool = _coreUtilsJsJs.Pool;
    }, function (_coreUtilsMiscJs) {
      tryCatchFunctor_EDITOR = _coreUtilsMiscJs.tryCatchFunctor_EDITOR;
    }, function (_componentSchedulerJs) {
      invokeOnEnable = _componentSchedulerJs.invokeOnEnable;
      createInvokeImpl = _componentSchedulerJs.createInvokeImpl;
      createInvokeImplJit = _componentSchedulerJs.createInvokeImplJit;
      OneOffInvoker = _componentSchedulerJs.OneOffInvoker;
      LifeCycleInvoker = _componentSchedulerJs.LifeCycleInvoker;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_corePlatformDebugJs) {
      assert = _corePlatformDebugJs.assert;
      errorID = _corePlatformDebugJs.errorID;
      getError = _corePlatformDebugJs.getError;
    }, function (_nodeEventJs) {
      NodeEventType = _nodeEventJs.NodeEventType;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }],
    execute: function () {
      MAX_POOL_SIZE = 4;
      IsPreloadStarted = CCObject.Flags.IsPreloadStarted;
      IsOnLoadStarted = CCObject.Flags.IsOnLoadStarted;
      IsOnLoadCalled = CCObject.Flags.IsOnLoadCalled;
      IsOnEnableCalled = CCObject.Flags.IsOnEnableCalled;
      Deactivating = CCObject.Flags.Deactivating; // for __preload: used internally, no sort
      UnsortedInvoker = /*#__PURE__*/function (_LifeCycleInvoker) {
        _inheritsLoose(UnsortedInvoker, _LifeCycleInvoker);
        function UnsortedInvoker() {
          return _LifeCycleInvoker.apply(this, arguments) || this;
        }
        var _proto = UnsortedInvoker.prototype;
        _proto.add = function add(comp) {
          this._zero.array.push(comp);
        };
        _proto.remove = function remove(comp) {
          this._zero.fastRemove(comp);
        };
        _proto.cancelInactive = function cancelInactive(flagToClear) {
          LifeCycleInvoker.stableRemoveInactive(this._zero, flagToClear);
        };
        _proto.invoke = function invoke() {
          this._invoke(this._zero);
          this._zero.array.length = 0;
        };
        return UnsortedInvoker;
      }(LifeCycleInvoker);
      invokePreload = SUPPORT_JIT ? createInvokeImplJit('c.__preload();') : createInvokeImpl(function (c) {
        var _c$internalPreload;
        (_c$internalPreload = c.internalPreload) === null || _c$internalPreload === void 0 ? void 0 : _c$internalPreload.call(c);
      }, function (iterator) {
        var array = iterator.array;
        for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
          var _array$iterator$i$int, _array$iterator$i;
          (_array$iterator$i$int = (_array$iterator$i = array[iterator.i]).internalPreload) === null || _array$iterator$i$int === void 0 ? void 0 : _array$iterator$i$int.call(_array$iterator$i);
        }
      });
      invokeOnLoad = SUPPORT_JIT ? createInvokeImplJit("c.onLoad();c._objFlags|=" + IsOnLoadCalled, false, IsOnLoadCalled) : createInvokeImpl(function (c) {
        var _c$internalOnLoad;
        (_c$internalOnLoad = c.internalOnLoad) === null || _c$internalOnLoad === void 0 ? void 0 : _c$internalOnLoad.call(c);
        c._objFlags |= IsOnLoadCalled;
      }, function (iterator) {
        var array = iterator.array;
        for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
          var _comp$internalOnLoad;
          var _comp = array[iterator.i];
          (_comp$internalOnLoad = _comp.internalOnLoad) === null || _comp$internalOnLoad === void 0 ? void 0 : _comp$internalOnLoad.call(_comp);
          _comp._objFlags |= IsOnLoadCalled;
        }
      }, IsOnLoadCalled);
      activateTasksPool = new Pool(MAX_POOL_SIZE);
      activateTasksPool.get = function getActivateTask() {
        var task = this._get() || {
          preload: new UnsortedInvoker(invokePreload),
          onLoad: new OneOffInvoker(invokeOnLoad),
          onEnable: new OneOffInvoker(invokeOnEnable)
        };

        // reset index to -1 so we can skip invoked component in cancelInactive
        task.preload.zero.i = -1;
        var invoker = task.onLoad;
        invoker.zero.i = -1;
        invoker.neg.i = -1;
        invoker.pos.i = -1;
        invoker = task.onEnable;
        invoker.zero.i = -1;
        invoker.neg.i = -1;
        invoker.pos.i = -1;
        return task;
      };
      _export("default", NodeActivator = /*#__PURE__*/function () {
        function NodeActivator() {
          this._activatingStack = void 0;
          this.reset();
        }

        /**
         * @en Reset all activation or des-activation tasks
         * @zh 重置所有激活或非激活任务
         */
        var _proto2 = NodeActivator.prototype;
        _proto2.reset = function reset() {
          // a stack of node's activating tasks
          this._activatingStack = [];
        }

        /**
         * @en Activate or des-activate a node
         * @zh 激活或者停用某个节点
         * @param node Target node
         * @param active Which state to set the node to
         */;
        _proto2.activateNode = function activateNode(node, active) {
          if (active) {
            var task = activateTasksPool.get();
            if (task) {
              this._activatingStack.push(task);
              this._activateNodeRecursively(node, task.preload, task.onLoad, task.onEnable);
              task.preload.invoke();
              task.onLoad.invoke();
              task.onEnable.invoke();
              this._activatingStack.pop();
              activateTasksPool.put(task);
            }
          } else {
            this._deactivateNodeRecursively(node);

            // remove children of this node from previous activating tasks to debounce
            // (this is an inefficient operation but it ensures general case could be implemented in a efficient way)
            var stack = this._activatingStack;
            for (var _iterator = _createForOfIteratorHelperLoose(stack), _step; !(_step = _iterator()).done;) {
              var lastTask = _step.value;
              lastTask.preload.cancelInactive(IsPreloadStarted);
              lastTask.onLoad.cancelInactive(IsOnLoadStarted);
              lastTask.onEnable.cancelInactive(IsOnEnableCalled);
            }
          }
          node.emit(NodeEventType.ACTIVE_IN_HIERARCHY_CHANGED, node);
        }

        /**
         * @en Activate or des-activate a component
         * @zh 激活或者停用某个组件
         * @param comp Target component
         * @param preloadInvoker The invoker for `_preload` method, normally from [[ComponentScheduler]]
         * @param onLoadInvoker The invoker for `onLoad` method, normally from [[ComponentScheduler]]
         * @param onEnableInvoker The invoker for `onEnable` method, normally from [[ComponentScheduler]]
         */;
        _proto2.activateComp = function activateComp(comp, preloadInvoker, onLoadInvoker, onEnableInvoker) {
          if (!isValid(comp, true)) {
            // destroyed before activating
            return;
          }
          if (!(comp._objFlags & IsPreloadStarted)) {
            comp._objFlags |= IsPreloadStarted;
            if (comp.internalPreload) {
              if (preloadInvoker) {
                preloadInvoker.add(comp);
              } else {
                comp.internalPreload();
              }
            }
          }
          if (!(comp._objFlags & IsOnLoadStarted)) {
            comp._objFlags |= IsOnLoadStarted;
            if (comp.internalOnLoad) {
              if (onLoadInvoker) {
                onLoadInvoker.add(comp);
              } else {
                comp.internalOnLoad();
                comp._objFlags |= IsOnLoadCalled;
              }
            } else {
              comp._objFlags |= IsOnLoadCalled;
            }
          }
          if (comp._enabled) {
            if (DEBUG) {
              assertIsTrue(comp.node, getError(3823, comp.uuid, comp.name));
            }
            var deactivatedOnLoading = !comp.node.activeInHierarchy;
            if (deactivatedOnLoading) {
              return;
            }
            legacyCC.director._compScheduler.enableComp(comp, onEnableInvoker);
          }
        }

        /**
         * @en Destroy a component
         * @zh 销毁一个组件
         * @param comp Target component
         */;
        _proto2.destroyComp = function destroyComp(comp) {
          // ensure onDisable called
          legacyCC.director._compScheduler.disableComp(comp);
          if (comp.internalOnDestroy && comp._objFlags & IsOnLoadCalled) {
            comp.internalOnDestroy();
          }
        };
        _proto2._activateNodeRecursively = function _activateNodeRecursively(node, preloadInvoker, onLoadInvoker, onEnableInvoker) {
          if (node._objFlags & Deactivating) {
            // en:
            // Forbid reactive the same node during its deactivating procedure
            // to avoid endless loop and simplify the implementation.
            // zh:
            // 对相同节点而言，无法撤销反激活，防止反激活 - 激活 - 反激活的死循环发生。
            // 这样设计简化了一些引擎的实现，而且对调用者来说能保证反激活操作都能成功。
            errorID(3816, node.name);
            return;
          }
          node._setActiveInHierarchy(true);

          // component maybe added during onEnable, and the onEnable of new component is already called
          // so we should record the origin length
          var originCount = node.components.length;
          // activate components
          for (var i = 0; i < originCount; ++i) {
            var component = node.components[i];
            if (component instanceof legacyCC.Component) {
              this.activateComp(component, preloadInvoker, onLoadInvoker, onEnableInvoker);
            } else {
              _componentCorrupted(node, component, i);
              --i;
              --originCount;
            }
          }

          // activate children recursively
          for (var _i = 0, len = node.children.length; _i < len; ++_i) {
            var child = node.children[_i];
            if (child.active) {
              this._activateNodeRecursively(child, preloadInvoker, onLoadInvoker, onEnableInvoker);
            }
          }
          node._onPostActivated(true);
        };
        _proto2._deactivateNodeRecursively = function _deactivateNodeRecursively(node) {
          if (DEV) {
            assert(!(node._objFlags & Deactivating), 'node should not deactivating');
            // ensures _activeInHierarchy is always changing when Deactivating flagged
            assert(node.activeInHierarchy, 'node should not deactivated');
          }
          node._objFlags |= Deactivating;
          node._setActiveInHierarchy(false);

          // component maybe added during onEnable, and the onEnable of new component is already called
          // so we should record the origin length
          var originCount = node.components.length;
          for (var c = 0; c < originCount; ++c) {
            var component = node.components[c];
            if (component._enabled) {
              legacyCC.director._compScheduler.disableComp(component);
              if (node.activeInHierarchy) {
                // reactivated from root
                node._objFlags &= ~Deactivating;
                return;
              }
            }
          }
          for (var i = 0, len = node.children.length; i < len; ++i) {
            var child = node.children[i];
            if (child.activeInHierarchy) {
              this._deactivateNodeRecursively(child);
              if (node.activeInHierarchy) {
                // reactivated from root
                node._objFlags &= ~Deactivating;
                return;
              }
            }
          }
          node._onPostActivated(false);
          node._objFlags &= ~Deactivating;
        };
        return NodeActivator;
      }());
      if (EDITOR) {
        callPreloadInTryCatch = tryCatchFunctor_EDITOR('__preload');
        callOnLoadInTryCatch = function callOnLoadInTryCatch(c) {
          try {
            var _c$internalOnLoad2;
            (_c$internalOnLoad2 = c.internalOnLoad) === null || _c$internalOnLoad2 === void 0 ? void 0 : _c$internalOnLoad2.call(c);
          } catch (e) {
            legacyCC._throw(e);
          }
          c._objFlags |= IsOnLoadCalled;
          _onLoadInEditor(c);
        };
        callOnDestroyInTryCatch = tryCatchFunctor_EDITOR('onDestroy');
        callOnFocusInTryCatch = tryCatchFunctor_EDITOR('onFocusInEditor');
        callOnLostFocusInTryCatch = tryCatchFunctor_EDITOR('onLostFocusInEditor');
        _onLoadInEditor = function _onLoadInEditor(comp) {
          if (comp.internalOnLoad && !legacyCC.GAME_VIEW) {
            var focused = Editor.Selection.getLastSelected('node') === comp.node.uuid;
            if (focused) {
              if (comp.onFocusInEditor && callOnFocusInTryCatch) {
                callOnFocusInTryCatch(comp);
              }
            } else if (comp.onLostFocusInEditor && callOnLostFocusInTryCatch) {
              callOnLostFocusInTryCatch(comp);
            }
          }
        };
        NodeActivator.prototype.activateComp = function (comp, preloadInvoker, onLoadInvoker, onEnableInvoker) {
          if (!isValid(comp, true)) {
            // destroyed before activating
            return;
          }
          // NOTE: _executeInEditMode is dynamically injected on Editor environment
          if (legacyCC.GAME_VIEW || comp.constructor._executeInEditMode) {
            if (!(comp._objFlags & IsPreloadStarted)) {
              comp._objFlags |= IsPreloadStarted;
              if (comp.internalPreload) {
                if (preloadInvoker) {
                  preloadInvoker.add(comp);
                } else if (callPreloadInTryCatch) {
                  callPreloadInTryCatch(comp);
                }
              }
            }
            if (!(comp._objFlags & IsOnLoadStarted)) {
              comp._objFlags |= IsOnLoadStarted;
              if (comp.internalOnLoad) {
                if (onLoadInvoker) {
                  onLoadInvoker.add(comp);
                } else if (callOnLoadInTryCatch) {
                  callOnLoadInTryCatch(comp);
                }
              } else {
                comp._objFlags |= IsOnLoadCalled;
                _onLoadInEditor(comp);
              }
            }
          }
          if (comp._enabled) {
            if (DEBUG) {
              assertIsTrue(comp.node, getError(3823, comp.uuid, comp.name));
            }
            var deactivatedOnLoading = !comp.node.activeInHierarchy;
            if (deactivatedOnLoading) {
              return;
            }
            legacyCC.director._compScheduler.enableComp(comp, onEnableInvoker);
          }
        };
        NodeActivator.prototype.destroyComp = function (comp) {
          // ensure onDisable called
          legacyCC.director._compScheduler.disableComp(comp);
          if (comp.internalOnDestroy && comp._objFlags & IsOnLoadCalled) {
            // NOTE: _executeInEditMode is dynamically injected on Editor environment
            if (legacyCC.GAME_VIEW || comp.constructor._executeInEditMode) {
              callOnDestroyInTryCatch && callOnDestroyInTryCatch(comp);
            }
          }
        };
        NodeActivator.prototype.resetComp = function (comp, didResetToDefault) {
          if (comp.resetInEditor) {
            try {
              comp.resetInEditor(didResetToDefault);
            } catch (e) {
              legacyCC._throw(e);
            }
          }
        };
      }
    }
  };
});