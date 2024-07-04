System.register("q-bundled:///fs/cocos/scene-graph/component-event-handler.js", ["../core/data/decorators/index.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, tooltip, legacyCC, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, EventHandler;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      /**
       * @en
       * The EventHandler class sets the event callback in the scene.
       * This class allows the user to set the callback target node, target component name, component method name, and call the target method through the `emit` method.
       * @zh
       * “EventHandler” 类用来设置场景中的事件回调，该类允许用户设置回调目标节点，目标组件名，组件方法名，并可通过 emit 方法调用目标函数。
       *
       * @example
       * ```ts
       * // Let's say we have a MainMenu component on newTarget
       * // file: MainMenu.ts
       * @ccclass('MainMenu')
       * export class MainMenu extends Component {
       *     // sender: the node MainMenu.ts belongs to
       *     // eventType: CustomEventData
       *     onClick (sender, eventType) {
       *         cc.log('click');
       *     }
       * }
       *
       * import { Component } from 'cc';
       * const eventHandler = new Component.EventHandler();
       * eventHandler.target = newTarget;
       * eventHandler.component = "MainMenu";
       * eventHandler.handler = "OnClick";
       * eventHandler.customEventData = "my data";
       * ```
       */
      _export("EventHandler", EventHandler = (_dec = ccclass('cc.ClickEvent'), _dec2 = tooltip('i18n:button.click_event.target'), _dec3 = tooltip('i18n:button.click_event.component'), _dec4 = tooltip('i18n:button.click_event.handler'), _dec5 = tooltip('i18n:button.click_event.customEventData'), _dec(_class = (_class2 = class EventHandler {
        constructor() {
          /**
           * @en
           * The node that contains target component
           * @zh
           * 事件响应组件和函数所在节点
           */
          // @type(Node) should be removed for avoid circle reference error
          // the type definition of it deal with in the file './component-event-handler.schema.ts'
          this.target = _initializer && _initializer();
          /**
           * @en
           * The name of the component(script) that contains target callback, such as the name 'MainMenu' of the script in the example
           * @zh
           * 事件响应函数所在组件名（脚本名）, 比如例子中的脚本名 'MainMenu'
           */
          // only for deserializing old project component field
          this.component = _initializer2 && _initializer2();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._componentId = _initializer3 && _initializer3();
          /**
           * @en
           * Event handler, such as the callback function name 'onClick' in the example
           * @zh
           * 响应事件函数名，比如例子中的 'onClick' 方法名
           */
          this.handler = _initializer4 && _initializer4();
          /**
           * @en
           * Custom Event Data
           * @zh
           * 自定义事件数据
           */
          this.customEventData = _initializer5 && _initializer5();
        }
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        get _componentName() {
          this._genCompIdIfNeeded();
          return this._compId2Name(this._componentId);
        }
        set _componentName(value) {
          this._componentId = this._compName2Id(value);
        }

        /**
         * @en
         * Dispatching component events.
         * @zh
         * 组件事件派发。
         *
         * @param events - The event list to be emitted
         * @param args - The callback arguments
         */
        static emitEvents(events, ...args) {
          for (let i = 0, l = events.length; i < l; i++) {
            const event = events[i];
            if (!(event instanceof EventHandler)) {
              continue;
            }
            event.emit(args);
          }
        }
        /**
         * @en Trigger the target callback with given arguments
         * @zh 触发目标组件上的指定 handler 函数，可以选择传递参数。
         * @param params - The arguments for invoking the callback
         * @example
         * ```ts
         * import { Component } from 'cc';
         * const eventHandler = new Component.EventHandler();
         * eventHandler.target = newTarget;
         * eventHandler.component = "MainMenu";
         * eventHandler.handler = "OnClick"
         * eventHandler.emit(["param1", "param2", ....]);
         * ```
         */
        emit(params) {
          const target = this.target;
          if (!legacyCC.isValid(target)) {
            return;
          }
          this._genCompIdIfNeeded();
          const compType = legacyCC.js.getClassById(this._componentId);
          const comp = target.getComponent(compType);
          if (!legacyCC.isValid(comp)) {
            return;
          }
          const handler = comp[this.handler];
          if (typeof handler !== 'function') {
            return;
          }
          if (this.customEventData != null && this.customEventData !== '') {
            params = params.slice();
            params.push(this.customEventData);
          }
          handler.apply(comp, params);
        }
        _compName2Id(compName) {
          const comp = legacyCC.js.getClassByName(compName);
          return legacyCC.js.getClassId(comp);
        }
        _compId2Name(compId) {
          const comp = legacyCC.js.getClassById(compId);
          return legacyCC.js.getClassName(comp);
        }

        // to be deprecated in the future
        _genCompIdIfNeeded() {
          if (!this._componentId) {
            this._componentName = this.component;
            this.component = '';
          }
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "target", [serializable, _dec2], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "component", [serializable, editable, _dec3], function () {
        return '';
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_componentId", [serializable], function () {
        return '';
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "handler", [serializable, editable, _dec4], function () {
        return '';
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "customEventData", [serializable, editable, _dec5], function () {
        return '';
      })), _class2)) || _class));
    }
  };
});