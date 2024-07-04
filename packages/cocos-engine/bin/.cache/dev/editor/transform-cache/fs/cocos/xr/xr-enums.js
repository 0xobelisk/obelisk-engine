System.register("q-bundled:///fs/cocos/xr/xr-enums.js", [], function (_export, _context) {
  "use strict";

  var XREye, XRConfigKey, XRPoseType;
  _export({
    XREye: void 0,
    XRConfigKey: void 0,
    XRPoseType: void 0
  });
  return {
    setters: [],
    execute: function () {
      (function (XREye) {
        XREye[XREye["NONE"] = -1] = "NONE";
        XREye[XREye["LEFT"] = 0] = "LEFT";
        XREye[XREye["RIGHT"] = 1] = "RIGHT";
      })(XREye || _export("XREye", XREye = {}));
      (function (XRConfigKey) {
        XRConfigKey[XRConfigKey["SESSION_RUNNING"] = 2] = "SESSION_RUNNING";
        XRConfigKey[XRConfigKey["VIEW_COUNT"] = 6] = "VIEW_COUNT";
        XRConfigKey[XRConfigKey["SWAPCHAIN_WIDTH"] = 7] = "SWAPCHAIN_WIDTH";
        XRConfigKey[XRConfigKey["SWAPCHAIN_HEIGHT"] = 8] = "SWAPCHAIN_HEIGHT";
        XRConfigKey[XRConfigKey["DEVICE_IPD"] = 37] = "DEVICE_IPD";
        XRConfigKey[XRConfigKey["SPLIT_AR_GLASSES"] = 42] = "SPLIT_AR_GLASSES";
      })(XRConfigKey || _export("XRConfigKey", XRConfigKey = {}));
      (function (XRPoseType) {
        XRPoseType[XRPoseType["VIEW_LEFT"] = 0] = "VIEW_LEFT";
        XRPoseType[XRPoseType["HAND_LEFT"] = 1] = "HAND_LEFT";
        XRPoseType[XRPoseType["AIM_LEFT"] = 2] = "AIM_LEFT";
        XRPoseType[XRPoseType["VIEW_RIGHT"] = 3] = "VIEW_RIGHT";
        XRPoseType[XRPoseType["HAND_RIGHT"] = 4] = "HAND_RIGHT";
        XRPoseType[XRPoseType["AIM_RIGHT"] = 5] = "AIM_RIGHT";
        XRPoseType[XRPoseType["HEAD_MIDDLE"] = 6] = "HEAD_MIDDLE";
      })(XRPoseType || _export("XRPoseType", XRPoseType = {}));
    }
  };
});