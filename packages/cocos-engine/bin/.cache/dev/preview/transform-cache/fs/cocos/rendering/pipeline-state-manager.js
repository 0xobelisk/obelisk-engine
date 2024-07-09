System.register("q-bundled:///fs/cocos/rendering/pipeline-state-manager.js", ["../gfx/index.js"], function (_export, _context) {
  "use strict";

  var InputState, PipelineStateInfo, PipelineStateManager;
  return {
    setters: [function (_gfxIndexJs) {
      InputState = _gfxIndexJs.InputState;
      PipelineStateInfo = _gfxIndexJs.PipelineStateInfo;
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
      _export("PipelineStateManager", PipelineStateManager = /*#__PURE__*/function () {
        function PipelineStateManager() {}
        // pass is only needed on TS.
        PipelineStateManager.getOrCreatePipelineState = function getOrCreatePipelineState(device, pass, shader, renderPass, ia) {
          var hash1 = pass.hash;
          var hash2 = renderPass.hash;
          var hash3 = ia.attributesHash;
          var hash4 = shader.typedID;
          var newHash = hash1 ^ hash2 ^ hash3 ^ hash4;
          var pso = this._PSOHashMap.get(newHash);
          if (!pso) {
            var pipelineLayout = pass.pipelineLayout;
            var inputState = new InputState(ia.attributes);
            var psoInfo = new PipelineStateInfo(shader, pipelineLayout, renderPass, inputState, pass.rasterizerState, pass.depthStencilState, pass.blendState, pass.primitive, pass.dynamicStates);
            pso = device.createPipelineState(psoInfo);
            this._PSOHashMap.set(newHash, pso);
          }
          return pso;
        };
        return PipelineStateManager;
      }());
      PipelineStateManager._PSOHashMap = new Map();
    }
  };
});