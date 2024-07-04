System.register("q-bundled:///fs/cocos/scene-graph/node-event.js", [], function (_export, _context) {
  "use strict";

  var NodeEventType;
  _export("NodeEventType", void 0);
  return {
    setters: [],
    execute: function () {
      (function (NodeEventType) {
        NodeEventType["TOUCH_START"] = "touch-start";
        NodeEventType["TOUCH_MOVE"] = "touch-move";
        NodeEventType["TOUCH_END"] = "touch-end";
        NodeEventType["TOUCH_CANCEL"] = "touch-cancel";
        NodeEventType["MOUSE_DOWN"] = "mouse-down";
        NodeEventType["MOUSE_MOVE"] = "mouse-move";
        NodeEventType["MOUSE_UP"] = "mouse-up";
        NodeEventType["MOUSE_WHEEL"] = "mouse-wheel";
        NodeEventType["MOUSE_ENTER"] = "mouse-enter";
        NodeEventType["MOUSE_LEAVE"] = "mouse-leave";
        NodeEventType["KEY_DOWN"] = "keydown";
        NodeEventType["KEY_UP"] = "keyup";
        NodeEventType["DEVICEMOTION"] = "devicemotion";
        NodeEventType["TRANSFORM_CHANGED"] = "transform-changed";
        NodeEventType["MOBILITY_CHANGED"] = "mobility-changed";
        NodeEventType["SCENE_CHANGED_FOR_PERSISTS"] = "scene-changed-for-persists";
        NodeEventType["SIZE_CHANGED"] = "size-changed";
        NodeEventType["ANCHOR_CHANGED"] = "anchor-changed";
        NodeEventType["COLOR_CHANGED"] = "color-changed";
        NodeEventType["CHILD_ADDED"] = "child-added";
        NodeEventType["CHILD_REMOVED"] = "child-removed";
        NodeEventType["PARENT_CHANGED"] = "parent-changed";
        NodeEventType["NODE_DESTROYED"] = "node-destroyed";
        NodeEventType["LAYER_CHANGED"] = "layer-changed";
        NodeEventType["SIBLING_ORDER_CHANGED"] = "sibling-order-changed";
        NodeEventType["CHILDREN_ORDER_CHANGED"] = "sibling-order-changed";
        NodeEventType["ACTIVE_IN_HIERARCHY_CHANGED"] = "active-in-hierarchy-changed";
        NodeEventType["COMPONENT_ADDED"] = "component-added";
        NodeEventType["COMPONENT_REMOVED"] = "component-removed";
        NodeEventType["LIGHT_PROBE_CHANGED"] = "light-probe-changed";
        NodeEventType["LIGHT_PROBE_BAKING_CHANGED"] = "light-probe-baking-changed";
      })(NodeEventType || _export("NodeEventType", NodeEventType = {}));
    }
  };
});