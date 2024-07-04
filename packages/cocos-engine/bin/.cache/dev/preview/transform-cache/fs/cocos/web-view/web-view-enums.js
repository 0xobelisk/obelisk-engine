System.register("q-bundled:///fs/cocos/web-view/web-view-enums.js", [], function (_export, _context) {
  "use strict";

  var EventType;
  _export("EventType", void 0);
  return {
    setters: [],
    execute: function () {
      (function (EventType) {
        EventType["NONE"] = "none";
        EventType["LOADING"] = "loading";
        EventType["LOADED"] = "loaded";
        EventType["ERROR"] = "error";
      })(EventType || _export("EventType", EventType = {}));
    }
  };
});