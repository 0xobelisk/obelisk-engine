System.register("q-bundled:///fs/cocos/core/geometry/spec.js", [], function (_export, _context) {
  "use strict";

  var ERaycastMode;
  _export("ERaycastMode", void 0);
  return {
    setters: [],
    execute: function () {
      (function (ERaycastMode) {
        ERaycastMode[ERaycastMode["ALL"] = 0] = "ALL";
        ERaycastMode[ERaycastMode["CLOSEST"] = 1] = "CLOSEST";
        ERaycastMode[ERaycastMode["ANY"] = 2] = "ANY";
      })(ERaycastMode || _export("ERaycastMode", ERaycastMode = {}));
      /**
       * @en
       * The storage structure of the raycast results.
       * @zh
       * 射线检测结果的存储结构。
       */
      /**
       * @en
       * The optional param structure of the `raySubMesh`.
       * @zh
       * `raySubMesh`的可选参数结构。
       */
      /**
       * @en
       * The optional param structure of the `rayMesh`.
       * @zh
       * `rayMesh`的可选参数结构。
       */
      /**
       * @en
       * The optional parameter structure of the `rayModel`.
       * @zh
       * `rayModel`的可选参数结构。
       */
    }
  };
});