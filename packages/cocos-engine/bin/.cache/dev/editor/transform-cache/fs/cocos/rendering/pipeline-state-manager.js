System.register("q-bundled:///fs/cocos/rendering/pipeline-state-manager.js", ["../gfx/index.js"], function (_export, _context) {
  "use strict";

  var InputState, PipelineStateInfo, PipelineStateManager;
  _export("PipelineStateManager", void 0);
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
      _export("PipelineStateManager", PipelineStateManager = class PipelineStateManager {
        // pass is only needed on TS.
        static getOrCreatePipelineState(device, pass, shader, renderPass, ia) {
          const hash1 = pass.hash;
          const hash2 = renderPass.hash;
          const hash3 = ia.attributesHash;
          const hash4 = shader.typedID;
          const newHash = hash1 ^ hash2 ^ hash3 ^ hash4;
          let pso = this._PSOHashMap.get(newHash);
          if (!pso) {
            const pipelineLayout = pass.pipelineLayout;
            const inputState = new InputState(ia.attributes);
            const psoInfo = new PipelineStateInfo(shader, pipelineLayout, renderPass, inputState, pass.rasterizerState, pass.depthStencilState, pass.blendState, pass.primitive, pass.dynamicStates);
            pso = device.createPipelineState(psoInfo);
            this._PSOHashMap.set(newHash, pso);
          }
          return pso;
        }
      });
      PipelineStateManager._PSOHashMap = new Map();
    }
  };
});