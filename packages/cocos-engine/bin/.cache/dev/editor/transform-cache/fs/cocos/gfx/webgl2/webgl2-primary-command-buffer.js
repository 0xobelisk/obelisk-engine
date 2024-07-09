System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-primary-command-buffer.js", ["../base/define.js", "./webgl2-command-buffer.js", "./webgl2-commands.js", "./webgl2-define.js"], function (_export, _context) {
  "use strict";

  var BufferUsageBit, WebGL2CommandBuffer, WebGL2CmdFuncBeginRenderPass, WebGL2CmdFuncBindStates, WebGL2CmdFuncBlitTexture, WebGL2CmdFuncCopyBuffersToTexture, WebGL2CmdFuncDraw, WebGL2CmdFuncExecuteCmds, WebGL2CmdFuncUpdateBuffer, WebGL2DeviceManager, WebGL2PrimaryCommandBuffer;
  _export("WebGL2PrimaryCommandBuffer", void 0);
  return {
    setters: [function (_baseDefineJs) {
      BufferUsageBit = _baseDefineJs.BufferUsageBit;
    }, function (_webgl2CommandBufferJs) {
      WebGL2CommandBuffer = _webgl2CommandBufferJs.WebGL2CommandBuffer;
    }, function (_webgl2CommandsJs) {
      WebGL2CmdFuncBeginRenderPass = _webgl2CommandsJs.WebGL2CmdFuncBeginRenderPass;
      WebGL2CmdFuncBindStates = _webgl2CommandsJs.WebGL2CmdFuncBindStates;
      WebGL2CmdFuncBlitTexture = _webgl2CommandsJs.WebGL2CmdFuncBlitTexture;
      WebGL2CmdFuncCopyBuffersToTexture = _webgl2CommandsJs.WebGL2CmdFuncCopyBuffersToTexture;
      WebGL2CmdFuncDraw = _webgl2CommandsJs.WebGL2CmdFuncDraw;
      WebGL2CmdFuncExecuteCmds = _webgl2CommandsJs.WebGL2CmdFuncExecuteCmds;
      WebGL2CmdFuncUpdateBuffer = _webgl2CommandsJs.WebGL2CmdFuncUpdateBuffer;
    }, function (_webgl2DefineJs) {
      WebGL2DeviceManager = _webgl2DefineJs.WebGL2DeviceManager;
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
      _export("WebGL2PrimaryCommandBuffer", WebGL2PrimaryCommandBuffer = class WebGL2PrimaryCommandBuffer extends WebGL2CommandBuffer {
        beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
          WebGL2CmdFuncBeginRenderPass(WebGL2DeviceManager.instance, renderPass.gpuRenderPass, framebuffer.gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil);
          this._isInRenderPass = true;
        }
        draw(infoOrAssembler) {
          if (this._isInRenderPass) {
            if (this._isStateInvalied) {
              this.bindStates();
            }
            const info = 'drawInfo' in infoOrAssembler ? infoOrAssembler.drawInfo : infoOrAssembler;
            WebGL2CmdFuncDraw(WebGL2DeviceManager.instance, info);
            ++this._numDrawCalls;
            this._numInstances += info.instanceCount;
            const indexCount = info.indexCount || info.vertexCount;
            if (this._curGPUPipelineState) {
              const glPrimitive = this._curGPUPipelineState.glPrimitive;
              switch (glPrimitive) {
                case 0x0004:
                  {
                    // WebGLRenderingContext.TRIANGLES
                    this._numTris += indexCount / 3 * Math.max(info.instanceCount, 1);
                    break;
                  }
                case 0x0005: // WebGLRenderingContext.TRIANGLE_STRIP
                case 0x0006:
                  {
                    // WebGLRenderingContext.TRIANGLE_FAN
                    this._numTris += (indexCount - 2) * Math.max(info.instanceCount, 1);
                    break;
                  }
                default:
              }
            }
          } else {
            console.error('Command \'draw\' must be recorded inside a render pass.');
          }
        }
        setViewport(viewport) {
          const {
            stateCache: cache,
            gl
          } = WebGL2DeviceManager.instance;
          if (cache.viewport.left !== viewport.left || cache.viewport.top !== viewport.top || cache.viewport.width !== viewport.width || cache.viewport.height !== viewport.height) {
            gl.viewport(viewport.left, viewport.top, viewport.width, viewport.height);
            cache.viewport.left = viewport.left;
            cache.viewport.top = viewport.top;
            cache.viewport.width = viewport.width;
            cache.viewport.height = viewport.height;
          }
        }
        setScissor(scissor) {
          const {
            stateCache: cache,
            gl
          } = WebGL2DeviceManager.instance;
          if (cache.scissorRect.x !== scissor.x || cache.scissorRect.y !== scissor.y || cache.scissorRect.width !== scissor.width || cache.scissorRect.height !== scissor.height) {
            gl.scissor(scissor.x, scissor.y, scissor.width, scissor.height);
            cache.scissorRect.x = scissor.x;
            cache.scissorRect.y = scissor.y;
            cache.scissorRect.width = scissor.width;
            cache.scissorRect.height = scissor.height;
          }
        }
        updateBuffer(buffer, data, size) {
          if (!this._isInRenderPass) {
            const gpuBuffer = buffer.gpuBuffer;
            if (gpuBuffer) {
              let buffSize;
              if (size !== undefined) {
                buffSize = size;
              } else if (buffer.usage & BufferUsageBit.INDIRECT) {
                buffSize = 0;
              } else {
                buffSize = data.byteLength;
              }
              WebGL2CmdFuncUpdateBuffer(WebGL2DeviceManager.instance, gpuBuffer, data, 0, buffSize);
            }
          } else {
            console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
          }
        }
        copyBuffersToTexture(buffers, texture, regions) {
          if (!this._isInRenderPass) {
            const gpuTexture = texture.gpuTexture;
            if (gpuTexture) {
              WebGL2CmdFuncCopyBuffersToTexture(WebGL2DeviceManager.instance, buffers, gpuTexture, regions);
            }
          } else {
            console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
          }
        }
        execute(cmdBuffs, count) {
          for (let i = 0; i < count; ++i) {
            // actually they are secondary buffers, the cast here is only for type checking
            const webGL2CmdBuff = cmdBuffs[i];
            WebGL2CmdFuncExecuteCmds(WebGL2DeviceManager.instance, webGL2CmdBuff.cmdPackage);
            this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
            this._numInstances += webGL2CmdBuff._numInstances;
            this._numTris += webGL2CmdBuff._numTris;
          }
        }
        bindStates() {
          WebGL2CmdFuncBindStates(WebGL2DeviceManager.instance, this._curGPUPipelineState, this._curGPUInputAssembler, this._curGPUDescriptorSets, this._curDynamicOffsets, this._curDynamicStates);
          this._isStateInvalied = false;
        }
        blitTexture(srcTexture, dstTexture, regions, filter) {
          const gpuTextureSrc = srcTexture.gpuTexture;
          const gpuTextureDst = dstTexture.gpuTexture;
          WebGL2CmdFuncBlitTexture(WebGL2DeviceManager.instance, gpuTextureSrc, gpuTextureDst, regions, filter);
        }
      });
    }
  };
});