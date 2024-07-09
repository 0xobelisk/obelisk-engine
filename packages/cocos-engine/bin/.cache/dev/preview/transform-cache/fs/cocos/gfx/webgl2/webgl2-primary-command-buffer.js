System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-primary-command-buffer.js", ["../base/define.js", "./webgl2-command-buffer.js", "./webgl2-commands.js", "./webgl2-define.js"], function (_export, _context) {
  "use strict";

  var BufferUsageBit, WebGL2CommandBuffer, WebGL2CmdFuncBeginRenderPass, WebGL2CmdFuncBindStates, WebGL2CmdFuncBlitTexture, WebGL2CmdFuncCopyBuffersToTexture, WebGL2CmdFuncDraw, WebGL2CmdFuncExecuteCmds, WebGL2CmdFuncUpdateBuffer, WebGL2DeviceManager, WebGL2PrimaryCommandBuffer;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
      _export("WebGL2PrimaryCommandBuffer", WebGL2PrimaryCommandBuffer = /*#__PURE__*/function (_WebGL2CommandBuffer) {
        _inheritsLoose(WebGL2PrimaryCommandBuffer, _WebGL2CommandBuffer);
        function WebGL2PrimaryCommandBuffer() {
          return _WebGL2CommandBuffer.apply(this, arguments) || this;
        }
        var _proto = WebGL2PrimaryCommandBuffer.prototype;
        _proto.beginRenderPass = function beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
          WebGL2CmdFuncBeginRenderPass(WebGL2DeviceManager.instance, renderPass.gpuRenderPass, framebuffer.gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil);
          this._isInRenderPass = true;
        };
        _proto.draw = function draw(infoOrAssembler) {
          if (this._isInRenderPass) {
            if (this._isStateInvalied) {
              this.bindStates();
            }
            var info = 'drawInfo' in infoOrAssembler ? infoOrAssembler.drawInfo : infoOrAssembler;
            WebGL2CmdFuncDraw(WebGL2DeviceManager.instance, info);
            ++this._numDrawCalls;
            this._numInstances += info.instanceCount;
            var indexCount = info.indexCount || info.vertexCount;
            if (this._curGPUPipelineState) {
              var glPrimitive = this._curGPUPipelineState.glPrimitive;
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
        };
        _proto.setViewport = function setViewport(viewport) {
          var _WebGL2DeviceManager$ = WebGL2DeviceManager.instance,
            cache = _WebGL2DeviceManager$.stateCache,
            gl = _WebGL2DeviceManager$.gl;
          if (cache.viewport.left !== viewport.left || cache.viewport.top !== viewport.top || cache.viewport.width !== viewport.width || cache.viewport.height !== viewport.height) {
            gl.viewport(viewport.left, viewport.top, viewport.width, viewport.height);
            cache.viewport.left = viewport.left;
            cache.viewport.top = viewport.top;
            cache.viewport.width = viewport.width;
            cache.viewport.height = viewport.height;
          }
        };
        _proto.setScissor = function setScissor(scissor) {
          var _WebGL2DeviceManager$2 = WebGL2DeviceManager.instance,
            cache = _WebGL2DeviceManager$2.stateCache,
            gl = _WebGL2DeviceManager$2.gl;
          if (cache.scissorRect.x !== scissor.x || cache.scissorRect.y !== scissor.y || cache.scissorRect.width !== scissor.width || cache.scissorRect.height !== scissor.height) {
            gl.scissor(scissor.x, scissor.y, scissor.width, scissor.height);
            cache.scissorRect.x = scissor.x;
            cache.scissorRect.y = scissor.y;
            cache.scissorRect.width = scissor.width;
            cache.scissorRect.height = scissor.height;
          }
        };
        _proto.updateBuffer = function updateBuffer(buffer, data, size) {
          if (!this._isInRenderPass) {
            var gpuBuffer = buffer.gpuBuffer;
            if (gpuBuffer) {
              var buffSize;
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
        };
        _proto.copyBuffersToTexture = function copyBuffersToTexture(buffers, texture, regions) {
          if (!this._isInRenderPass) {
            var gpuTexture = texture.gpuTexture;
            if (gpuTexture) {
              WebGL2CmdFuncCopyBuffersToTexture(WebGL2DeviceManager.instance, buffers, gpuTexture, regions);
            }
          } else {
            console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
          }
        };
        _proto.execute = function execute(cmdBuffs, count) {
          for (var i = 0; i < count; ++i) {
            // actually they are secondary buffers, the cast here is only for type checking
            var webGL2CmdBuff = cmdBuffs[i];
            WebGL2CmdFuncExecuteCmds(WebGL2DeviceManager.instance, webGL2CmdBuff.cmdPackage);
            this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
            this._numInstances += webGL2CmdBuff._numInstances;
            this._numTris += webGL2CmdBuff._numTris;
          }
        };
        _proto.bindStates = function bindStates() {
          WebGL2CmdFuncBindStates(WebGL2DeviceManager.instance, this._curGPUPipelineState, this._curGPUInputAssembler, this._curGPUDescriptorSets, this._curDynamicOffsets, this._curDynamicStates);
          this._isStateInvalied = false;
        };
        _proto.blitTexture = function blitTexture(srcTexture, dstTexture, regions, filter) {
          var gpuTextureSrc = srcTexture.gpuTexture;
          var gpuTextureDst = dstTexture.gpuTexture;
          WebGL2CmdFuncBlitTexture(WebGL2DeviceManager.instance, gpuTextureSrc, gpuTextureDst, regions, filter);
        };
        return WebGL2PrimaryCommandBuffer;
      }(WebGL2CommandBuffer));
    }
  };
});