System.register("q-bundled:///fs/cocos/rendering/index.js", ["./deprecated.js", "./define.js", "./pass-phase.js", "./render-pipeline.js", "./render-flow.js", "./render-stage.js", "./pipeline-scene-data.js", "./forward/forward-pipeline.js", "./forward/forward-flow.js", "./forward/forward-stage.js", "./deferred/deferred-pipeline.js", "./deferred/main-flow.js", "./deferred/gbuffer-stage.js", "./deferred/lighting-stage.js", "./deferred/bloom-stage.js", "./deferred/postprocess-stage.js", "./shadow/shadow-flow.js", "./shadow/shadow-stage.js", "./instanced-buffer.js", "./pipeline-state-manager.js", "./pipeline-event.js", "./debug-view.js", "./reflection-probe/reflection-probe-flow.js", "./reflection-probe/reflection-probe-stage.js"], function (_export, _context) {
  "use strict";

  var pipeline;
  return {
    setters: [function (_deprecatedJs) {}, function (_defineJs) {
      pipeline = _defineJs;
    }, function (_passPhaseJs) {
      var _exportObj = {};
      for (var _key in _passPhaseJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _passPhaseJs[_key];
      }
      _export(_exportObj);
    }, function (_renderPipelineJs) {
      _export("RenderPipeline", _renderPipelineJs.RenderPipeline);
    }, function (_renderFlowJs) {
      _export("RenderFlow", _renderFlowJs.RenderFlow);
    }, function (_renderStageJs) {
      _export("RenderStage", _renderStageJs.RenderStage);
    }, function (_pipelineSceneDataJs) {
      _export("PipelineSceneData", _pipelineSceneDataJs.PipelineSceneData);
    }, function (_forwardForwardPipelineJs) {
      _export({
        ForwardPipeline: _forwardForwardPipelineJs.ForwardPipeline,
        createDefaultPipeline: _forwardForwardPipelineJs.createDefaultPipeline
      });
    }, function (_forwardForwardFlowJs) {
      _export("ForwardFlow", _forwardForwardFlowJs.ForwardFlow);
    }, function (_forwardForwardStageJs) {
      _export("ForwardStage", _forwardForwardStageJs.ForwardStage);
    }, function (_deferredDeferredPipelineJs) {
      _export("DeferredPipeline", _deferredDeferredPipelineJs.DeferredPipeline);
    }, function (_deferredMainFlowJs) {
      _export("MainFlow", _deferredMainFlowJs.MainFlow);
    }, function (_deferredGbufferStageJs) {
      _export("GbufferStage", _deferredGbufferStageJs.GbufferStage);
    }, function (_deferredLightingStageJs) {
      _export("LightingStage", _deferredLightingStageJs.LightingStage);
    }, function (_deferredBloomStageJs) {
      _export("BloomStage", _deferredBloomStageJs.BloomStage);
    }, function (_deferredPostprocessStageJs) {
      _export("PostProcessStage", _deferredPostprocessStageJs.PostProcessStage);
    }, function (_shadowShadowFlowJs) {
      _export("ShadowFlow", _shadowShadowFlowJs.ShadowFlow);
    }, function (_shadowShadowStageJs) {
      _export("ShadowStage", _shadowShadowStageJs.ShadowStage);
    }, function (_instancedBufferJs) {
      _export("InstancedBuffer", _instancedBufferJs.InstancedBuffer);
    }, function (_pipelineStateManagerJs) {
      _export("PipelineStateManager", _pipelineStateManagerJs.PipelineStateManager);
    }, function (_pipelineEventJs) {
      _export({
        PipelineEventProcessor: _pipelineEventJs.PipelineEventProcessor,
        PipelineEventType: _pipelineEventJs.PipelineEventType
      });
    }, function (_debugViewJs) {
      _export("DebugView", _debugViewJs.DebugView);
    }, function (_reflectionProbeReflectionProbeFlowJs) {
      _export("ReflectionProbeFlow", _reflectionProbeReflectionProbeFlowJs.ReflectionProbeFlow);
    }, function (_reflectionProbeReflectionProbeStageJs) {
      _export("ReflectionProbeStage", _reflectionProbeReflectionProbeStageJs.ReflectionProbeStage);
    }],
    execute: function () {
      /*
       Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("pipeline", pipeline);
    }
  };
});