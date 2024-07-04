System.register("q-bundled:///fs/cocos/primitive/cone.js", ["./cylinder.js"], function (_export, _context) {
  "use strict";

  var cylinder;
  function cone(radius, height, opts) /* TODO: Explicit since ISSUE https://github.com/microsoft/TypeScript/issues/31280 , changes required once the issue is fixed. */{
    if (radius === void 0) {
      radius = 0.5;
    }
    if (height === void 0) {
      height = 1;
    }
    if (opts === void 0) {
      opts = {};
    }
    return cylinder(0, radius, height, opts);
  }
  _export("default", cone);
  return {
    setters: [function (_cylinderJs) {
      cylinder = _cylinderJs.default;
    }],
    execute: function () {}
  };
});