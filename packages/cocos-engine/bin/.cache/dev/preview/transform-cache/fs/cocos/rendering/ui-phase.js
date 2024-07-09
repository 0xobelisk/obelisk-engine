System.register("q-bundled:///fs/cocos/rendering/ui-phase.js", ["./pipeline-state-manager.js", "./define.js", "./pass-phase.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var PipelineStateManager, isEnableEffect, SetIndex, getPhaseID, cclegacy, UIPhase;
  return {
    setters: [function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_defineJs) {
      isEnableEffect = _defineJs.isEnableEffect;
      SetIndex = _defineJs.SetIndex;
    }, function (_passPhaseJs) {
      getPhaseID = _passPhaseJs.getPhaseID;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /*
       Copyright (c) 2018-2023 Xiamen Yaji Software Co., Ltd.
      
       http://www.cocos.com
      
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
      _export("UIPhase", UIPhase = /*#__PURE__*/function () {
        function UIPhase() {
          this._phaseID = getPhaseID('default');
          var r = cclegacy.rendering;
          if (isEnableEffect()) this._phaseID = r.getPhaseID(r.getPassID('default'), 'default');
        }
        var _proto = UIPhase.prototype;
        _proto.activate = function activate(pipeline) {
          this._pipeline = pipeline;
        };
        _proto.render = function render(camera, renderPass) {
          var pipeline = this._pipeline;
          var device = pipeline.device;
          var cmdBuff = pipeline.commandBuffers[0];
          var scene = camera.scene;
          var batches = scene.batches;
          for (var i = 0; i < batches.length; i++) {
            var batch = batches[i];
            var visible = false;
            if (camera.visibility & batch.visFlags) {
              visible = true;
            }
            if (!visible) continue;
            // shaders.length always equals actual used passes.length
            var count = batch.shaders.length;
            for (var j = 0; j < count; j++) {
              var pass = batch.passes[j];
              if (pass.phase !== this._phaseID) continue;
              var shader = batch.shaders[j];
              var inputAssembler = batch.inputAssembler;
              var pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, inputAssembler);
              cmdBuff.bindPipelineState(pso);
              cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
              var ds = batch.descriptorSet;
              cmdBuff.bindDescriptorSet(SetIndex.LOCAL, ds);
              cmdBuff.bindInputAssembler(inputAssembler);
              cmdBuff.draw(inputAssembler);
            }
          }
        };
        return UIPhase;
      }());
    }
  };
});