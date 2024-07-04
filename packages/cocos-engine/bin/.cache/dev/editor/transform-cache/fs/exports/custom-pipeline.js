System.register("q-bundled:///fs/exports/custom-pipeline.js", ["../cocos/core/global-exports.js", "../cocos/rendering/custom/index.js", "../cocos/rendering/post-process/index.js"], function (_export, _context) {
  "use strict";

  var legacyCC, rendering, postProcess;
  return {
    setters: [function (_cocosCoreGlobalExportsJs) {
      legacyCC = _cocosCoreGlobalExportsJs.legacyCC;
    }, function (_cocosRenderingCustomIndexJs) {
      rendering = _cocosRenderingCustomIndexJs;
    }, function (_cocosRenderingPostProcessIndexJs) {
      postProcess = _cocosRenderingPostProcessIndexJs;
    }],
    execute: function () {
      _export("rendering", rendering);
      _export("postProcess", postProcess);
      legacyCC.rendering = rendering;
    }
  };
});