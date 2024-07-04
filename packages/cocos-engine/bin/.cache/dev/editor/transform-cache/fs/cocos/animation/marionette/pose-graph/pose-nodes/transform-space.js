System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/transform-space.js", ["../../../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccenum, TransformSpace;
  _export("TransformSpace", void 0);
  return {
    setters: [function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
    }],
    execute: function () {
      (function (TransformSpace) {
        TransformSpace[TransformSpace["WORLD"] = 0] = "WORLD";
        TransformSpace[TransformSpace["COMPONENT"] = 1] = "COMPONENT";
        TransformSpace[TransformSpace["PARENT"] = 2] = "PARENT";
        TransformSpace[TransformSpace["LOCAL"] = 3] = "LOCAL";
      })(TransformSpace || _export("TransformSpace", TransformSpace = {}));
      ccenum(TransformSpace);
    }
  };
});