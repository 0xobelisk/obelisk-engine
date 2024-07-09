System.register("q-bundled:///fs/cocos/core/data/class-stash.js", [], function (_export, _context) {
  "use strict";

  var PropertyStashInternalFlag;
  _export("PropertyStashInternalFlag", void 0);
  return {
    setters: [],
    execute: function () {
      (function (PropertyStashInternalFlag) {
        PropertyStashInternalFlag[PropertyStashInternalFlag["STANDALONE"] = 1] = "STANDALONE";
        PropertyStashInternalFlag[PropertyStashInternalFlag["IMPLICIT_VISIBLE"] = 2] = "IMPLICIT_VISIBLE";
        PropertyStashInternalFlag[PropertyStashInternalFlag["IMPLICIT_SERIALIZABLE"] = 4] = "IMPLICIT_SERIALIZABLE";
      })(PropertyStashInternalFlag || _export("PropertyStashInternalFlag", PropertyStashInternalFlag = {}));
    }
  };
});