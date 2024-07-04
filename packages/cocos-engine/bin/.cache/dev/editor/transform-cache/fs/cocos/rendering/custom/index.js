System.register("q-bundled:///fs/cocos/rendering/custom/index.js", ["./web-pipeline.js", "../../core/platform/macro.js", "./builtin-pipelines.js", "./custom-pipeline.js", "./layout-graph.js", "./binary-archive.js", "./web-program-library.js", "./layout-graph-utils.js", "../post-process/post-process-builder.js", "./types.js", "./pipeline.js", "./archive.js"], function (_export, _context) {
  "use strict";

  var WebPipeline, macro, DeferredPipelineBuilder, CustomPipelineBuilder, TestPipelineBuilder, LayoutGraphData, loadLayoutGraphData, BinaryInputArchive, WebProgramLibrary, initializeLayoutGraphData, terminateLayoutGraphData, getCustomPassID, getCustomPhaseID, getCustomSubpassID, PostProcessBuilder, _pipeline, INVALID_ID, defaultLayoutGraph, enableEffectImport, programLib, customPipelineBuilderMap;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                             in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                                                                                                                                                                                                             use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                                                                                                                                                                                                             of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                                                                                                                                                                                                             subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                             all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                            */
  function createCustomPipeline() {
    const layoutGraph = defaultLayoutGraph;
    const ppl = new WebPipeline(layoutGraph);
    const pplName = macro.CUSTOM_PIPELINE_NAME;
    ppl.setCustomPipelineName(pplName);
    programLib.pipeline = ppl;
    _pipeline = ppl;
    return ppl;
  }
  function setCustomPipeline(name, builder) {
    customPipelineBuilderMap.set(name, builder);
  }
  function getCustomPipeline(name) {
    let builder = customPipelineBuilderMap.get(name);
    if (!builder) {
      if (name === 'Test') {
        builder = new TestPipelineBuilder(_pipeline.pipelineSceneData);
        customPipelineBuilderMap.set('Test', builder);
      } else {
        builder = customPipelineBuilderMap.get('Forward');
      }
    }
    return builder;
  }
  function addCustomBuiltinPipelines(map) {
    map.set('Forward', new PostProcessBuilder());
    map.set('Deferred', new DeferredPipelineBuilder());
    map.set('Deprecated', new CustomPipelineBuilder());
  }
  function init(device, arrayBuffer) {
    if (arrayBuffer) {
      const readBinaryData = new BinaryInputArchive(arrayBuffer);
      loadLayoutGraphData(readBinaryData, defaultLayoutGraph);
    }
    initializeLayoutGraphData(device, defaultLayoutGraph);
  }
  function destroy() {
    terminateLayoutGraphData(defaultLayoutGraph);
  }
  function getPassID(name) {
    return getCustomPassID(defaultLayoutGraph, name);
  }
  function getSubpassID(passID, name) {
    return getCustomSubpassID(defaultLayoutGraph, passID, name);
  }
  function getPhaseID(passID, name) {
    return getCustomPhaseID(defaultLayoutGraph, passID, name);
  }
  function completePhaseName(name) {
    if (typeof name === 'number') {
      return name.toString();
    } else if (typeof name === 'string') {
      return name;
    } else {
      return 'default';
    }
  }
  _export({
    createCustomPipeline: createCustomPipeline,
    setCustomPipeline: setCustomPipeline,
    getCustomPipeline: getCustomPipeline,
    init: init,
    destroy: destroy,
    getPassID: getPassID,
    getSubpassID: getSubpassID,
    getPhaseID: getPhaseID,
    completePhaseName: completePhaseName
  });
  return {
    setters: [function (_webPipelineJs) {
      WebPipeline = _webPipelineJs.WebPipeline;
    }, function (_corePlatformMacroJs) {
      macro = _corePlatformMacroJs.macro;
    }, function (_builtinPipelinesJs) {
      DeferredPipelineBuilder = _builtinPipelinesJs.DeferredPipelineBuilder;
    }, function (_customPipelineJs) {
      CustomPipelineBuilder = _customPipelineJs.CustomPipelineBuilder;
      TestPipelineBuilder = _customPipelineJs.TestPipelineBuilder;
    }, function (_layoutGraphJs) {
      LayoutGraphData = _layoutGraphJs.LayoutGraphData;
      loadLayoutGraphData = _layoutGraphJs.loadLayoutGraphData;
    }, function (_binaryArchiveJs) {
      BinaryInputArchive = _binaryArchiveJs.BinaryInputArchive;
    }, function (_webProgramLibraryJs) {
      WebProgramLibrary = _webProgramLibraryJs.WebProgramLibrary;
    }, function (_layoutGraphUtilsJs) {
      initializeLayoutGraphData = _layoutGraphUtilsJs.initializeLayoutGraphData;
      terminateLayoutGraphData = _layoutGraphUtilsJs.terminateLayoutGraphData;
      getCustomPassID = _layoutGraphUtilsJs.getCustomPassID;
      getCustomPhaseID = _layoutGraphUtilsJs.getCustomPhaseID;
      getCustomSubpassID = _layoutGraphUtilsJs.getCustomSubpassID;
    }, function (_postProcessPostProcessBuilderJs) {
      PostProcessBuilder = _postProcessPostProcessBuilderJs.PostProcessBuilder;
    }, function (_typesJs) {
      var _exportObj = {};
      for (var _key in _typesJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _typesJs[_key];
      }
      _export(_exportObj);
    }, function (_pipelineJs) {
      var _exportObj2 = {};
      for (var _key2 in _pipelineJs) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _pipelineJs[_key2];
      }
      _export(_exportObj2);
    }, function (_archiveJs) {
      var _exportObj3 = {};
      for (var _key3 in _archiveJs) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _archiveJs[_key3];
      }
      _export(_exportObj3);
    }],
    execute: function () {
      _pipeline = null;
      _export("INVALID_ID", INVALID_ID = 0xFFFFFFFF);
      defaultLayoutGraph = new LayoutGraphData();
      _export("enableEffectImport", enableEffectImport = true);
      _export("programLib", programLib = new WebProgramLibrary(defaultLayoutGraph));
      _export("customPipelineBuilderMap", customPipelineBuilderMap = new Map());
      addCustomBuiltinPipelines(customPipelineBuilderMap);
    }
  };
});