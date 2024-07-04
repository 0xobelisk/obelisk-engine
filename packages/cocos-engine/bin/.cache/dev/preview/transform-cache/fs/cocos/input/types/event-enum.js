System.register("q-bundled:///fs/cocos/input/types/event-enum.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var cclegacy, SystemEventType, InputEventType;
  _export({
    SystemEventType: void 0,
    InputEventType: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      (function (SystemEventType) {
        SystemEventType["TOUCH_START"] = "touch-start";
        SystemEventType["TOUCH_MOVE"] = "touch-move";
        SystemEventType["TOUCH_END"] = "touch-end";
        SystemEventType["TOUCH_CANCEL"] = "touch-cancel";
        SystemEventType["MOUSE_DOWN"] = "mouse-down";
        SystemEventType["MOUSE_MOVE"] = "mouse-move";
        SystemEventType["MOUSE_UP"] = "mouse-up";
        SystemEventType["MOUSE_WHEEL"] = "mouse-wheel";
        SystemEventType["MOUSE_ENTER"] = "mouse-enter";
        SystemEventType["MOUSE_LEAVE"] = "mouse-leave";
        SystemEventType["KEY_DOWN"] = "keydown";
        SystemEventType["KEY_UP"] = "keyup";
        SystemEventType["DEVICEMOTION"] = "devicemotion";
        SystemEventType["TRANSFORM_CHANGED"] = "transform-changed";
        SystemEventType["SCENE_CHANGED_FOR_PERSISTS"] = "scene-changed-for-persists";
        SystemEventType["SIZE_CHANGED"] = "size-changed";
        SystemEventType["ANCHOR_CHANGED"] = "anchor-changed";
        SystemEventType["COLOR_CHANGED"] = "color-changed";
        SystemEventType["CHILD_ADDED"] = "child-added";
        SystemEventType["CHILD_REMOVED"] = "child-removed";
        SystemEventType["PARENT_CHANGED"] = "parent-changed";
        SystemEventType["NODE_DESTROYED"] = "node-destroyed";
        SystemEventType["LAYER_CHANGED"] = "layer-changed";
        SystemEventType["SIBLING_ORDER_CHANGED"] = "sibling-order-changed";
      })(SystemEventType || _export("SystemEventType", SystemEventType = {}));
      (function (InputEventType) {
        InputEventType["TOUCH_START"] = "touch-start";
        InputEventType["TOUCH_MOVE"] = "touch-move";
        InputEventType["TOUCH_END"] = "touch-end";
        InputEventType["TOUCH_CANCEL"] = "touch-cancel";
        InputEventType["MOUSE_DOWN"] = "mouse-down";
        InputEventType["MOUSE_MOVE"] = "mouse-move";
        InputEventType["MOUSE_UP"] = "mouse-up";
        InputEventType["MOUSE_WHEEL"] = "mouse-wheel";
        InputEventType["KEY_DOWN"] = "keydown";
        InputEventType["KEY_PRESSING"] = "key-pressing";
        InputEventType["KEY_UP"] = "keyup";
        InputEventType["DEVICEMOTION"] = "devicemotion";
        InputEventType["GAMEPAD_INPUT"] = "gamepad-input";
        InputEventType["GAMEPAD_CHANGE"] = "gamepad-change";
        InputEventType["HANDLE_INPUT"] = "handle-input";
        InputEventType["HANDLE_POSE_INPUT"] = "handle-pose-input";
        InputEventType["HMD_POSE_INPUT"] = "hmd-pose-input";
        InputEventType["HANDHELD_POSE_INPUT"] = "handheld-pose-input";
      })(InputEventType || _export("InputEventType", InputEventType = {}));
      cclegacy.SystemEventType = SystemEventType;
    }
  };
});