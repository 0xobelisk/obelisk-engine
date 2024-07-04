System.register("q-bundled:///fs/cocos/ui/block-input-events.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../scene-graph/node-event.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, menu, Component, NodeEventType, _dec, _dec2, _dec3, _class, BlockEvents, BlockInputEvents;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function stopPropagation(event) {
    event.propagationStopped = true;
  }

  /**
   * @en
   * This component will block all input events (mouse and touch) within the size of the node,
   * preventing the input from penetrating into the underlying node, typically for the background of the top UI.<br>
   * This component does not have any API interface and can be added directly to the scene to take effect.
   * @zh
   * 该组件将拦截所属节点尺寸内的所有输入事件（鼠标和触摸），防止输入穿透到下层节点，一般用于上层 UI 的背景。<br>
   * 该组件没有任何 API 接口，直接添加到场景即可生效。
   */
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }],
    execute: function () {
      BlockEvents = [NodeEventType.TOUCH_START, NodeEventType.TOUCH_END, NodeEventType.TOUCH_MOVE, NodeEventType.MOUSE_DOWN, NodeEventType.MOUSE_MOVE, NodeEventType.MOUSE_UP, NodeEventType.MOUSE_ENTER, NodeEventType.MOUSE_LEAVE, NodeEventType.MOUSE_WHEEL];
      _export("BlockInputEvents", BlockInputEvents = (_dec = ccclass('cc.BlockInputEvents'), _dec2 = help('i18n:cc.BlockInputEvents'), _dec3 = menu('Event/BlockInputEvents'), _dec(_class = _dec2(_class = _dec3(_class = class BlockInputEvents extends Component {
        onEnable() {
          for (let i = 0; i < BlockEvents.length; i++) {
            // supply the 'this' parameter so that the callback could be added and removed correctly,
            // even if the same component is added more than once to a Node.
            this.node.on(BlockEvents[i], stopPropagation, this);
          }
        }
        onDisable() {
          for (let i = 0; i < BlockEvents.length; i++) {
            this.node.off(BlockEvents[i], stopPropagation, this);
          }
        }
      }) || _class) || _class) || _class));
    }
  };
});