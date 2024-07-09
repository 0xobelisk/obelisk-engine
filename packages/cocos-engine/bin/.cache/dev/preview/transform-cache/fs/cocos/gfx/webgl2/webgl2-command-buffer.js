System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-command-buffer.js", ["../base/command-buffer.js", "../base/define.js", "./webgl2-command-allocator.js", "./webgl2-commands.js", "./webgl2-define.js"], function (_export, _context) {
  "use strict";

  var CommandBuffer, BufferUsageBit, CommandBufferType, StencilFace, DynamicStates, WebGL2CommandAllocator, WebGL2Cmd, WebGL2CmdBeginRenderPass, WebGL2CmdBindStates, WebGL2CmdBlitTexture, WebGL2CmdCopyBufferToTexture, WebGL2CmdDraw, WebGL2CmdPackage, WebGL2CmdUpdateBuffer, WebGL2DeviceManager, WebGL2CommandBuffer;
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
    setters: [function (_baseCommandBufferJs) {
      CommandBuffer = _baseCommandBufferJs.CommandBuffer;
    }, function (_baseDefineJs) {
      BufferUsageBit = _baseDefineJs.BufferUsageBit;
      CommandBufferType = _baseDefineJs.CommandBufferType;
      StencilFace = _baseDefineJs.StencilFace;
      DynamicStates = _baseDefineJs.DynamicStates;
    }, function (_webgl2CommandAllocatorJs) {
      WebGL2CommandAllocator = _webgl2CommandAllocatorJs.WebGL2CommandAllocator;
    }, function (_webgl2CommandsJs) {
      WebGL2Cmd = _webgl2CommandsJs.WebGL2Cmd;
      WebGL2CmdBeginRenderPass = _webgl2CommandsJs.WebGL2CmdBeginRenderPass;
      WebGL2CmdBindStates = _webgl2CommandsJs.WebGL2CmdBindStates;
      WebGL2CmdBlitTexture = _webgl2CommandsJs.WebGL2CmdBlitTexture;
      WebGL2CmdCopyBufferToTexture = _webgl2CommandsJs.WebGL2CmdCopyBufferToTexture;
      WebGL2CmdDraw = _webgl2CommandsJs.WebGL2CmdDraw;
      WebGL2CmdPackage = _webgl2CommandsJs.WebGL2CmdPackage;
      WebGL2CmdUpdateBuffer = _webgl2CommandsJs.WebGL2CmdUpdateBuffer;
    }, function (_webgl2DefineJs) {
      WebGL2DeviceManager = _webgl2DefineJs.WebGL2DeviceManager;
    }],
    execute: function () {
      _export("WebGL2CommandBuffer", WebGL2CommandBuffer = /*#__PURE__*/function (_CommandBuffer) {
        _inheritsLoose(WebGL2CommandBuffer, _CommandBuffer);
        function WebGL2CommandBuffer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CommandBuffer.call.apply(_CommandBuffer, [this].concat(args)) || this;
          _this.cmdPackage = new WebGL2CmdPackage();
          _this._cmdAllocator = new WebGL2CommandAllocator();
          _this._isInRenderPass = false;
          _this._curGPUPipelineState = null;
          _this._curGPUDescriptorSets = [];
          _this._curGPUInputAssembler = null;
          _this._curDynamicOffsets = Array(8).fill(0);
          _this._curDynamicStates = new DynamicStates();
          _this._isStateInvalied = false;
          return _this;
        }
        var _proto = WebGL2CommandBuffer.prototype;
        _proto.initialize = function initialize(info) {
          this._type = info.type;
          this._queue = info.queue;
          var setCount = WebGL2DeviceManager.instance.bindingMappings.blockOffsets.length;
          for (var i = 0; i < setCount; i++) {
            this._curGPUDescriptorSets.push(null);
          }
        };
        _proto.destroy = function destroy() {
          this._cmdAllocator.clearCmds(this.cmdPackage);
        };
        _proto.begin = function begin(renderPass, subpass, frameBuffer) {
          if (subpass === void 0) {
            subpass = 0;
          }
          this._cmdAllocator.clearCmds(this.cmdPackage);
          this._curGPUPipelineState = null;
          this._curGPUInputAssembler = null;
          this._curGPUDescriptorSets.length = 0;
          this._numDrawCalls = 0;
          this._numInstances = 0;
          this._numTris = 0;
        };
        _proto.end = function end() {
          if (this._isStateInvalied) {
            this.bindStates();
          }
          this._isInRenderPass = false;
        };
        _proto.beginRenderPass = function beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
          var cmd = this._cmdAllocator.beginRenderPassCmdPool.alloc(WebGL2CmdBeginRenderPass);
          cmd.gpuRenderPass = renderPass.gpuRenderPass;
          cmd.gpuFramebuffer = framebuffer.gpuFramebuffer;
          cmd.renderArea.copy(renderArea);
          for (var i = 0; i < clearColors.length; ++i) {
            cmd.clearColors[i] = clearColors[i];
          }
          cmd.clearDepth = clearDepth;
          cmd.clearStencil = clearStencil;
          this.cmdPackage.beginRenderPassCmds.push(cmd);
          this.cmdPackage.cmds.push(WebGL2Cmd.BEGIN_RENDER_PASS);
          this._isInRenderPass = true;
        };
        _proto.endRenderPass = function endRenderPass() {
          this._isInRenderPass = false;
        };
        _proto.bindPipelineState = function bindPipelineState(pipelineState) {
          var gpuPipelineState = pipelineState.gpuPipelineState;
          if (gpuPipelineState !== this._curGPUPipelineState) {
            this._curGPUPipelineState = gpuPipelineState;
            this._isStateInvalied = true;
          }
        };
        _proto.bindDescriptorSet = function bindDescriptorSet(set, descriptorSet, dynamicOffsets) {
          var gpuDescriptorSets = descriptorSet.gpuDescriptorSet;
          if (gpuDescriptorSets !== this._curGPUDescriptorSets[set]) {
            this._curGPUDescriptorSets[set] = gpuDescriptorSets;
            this._isStateInvalied = true;
          }
          if (dynamicOffsets) {
            var _this$_curGPUPipeline;
            var gpuPipelineLayout = (_this$_curGPUPipeline = this._curGPUPipelineState) === null || _this$_curGPUPipeline === void 0 ? void 0 : _this$_curGPUPipeline.gpuPipelineLayout;
            if (gpuPipelineLayout) {
              var offsets = this._curDynamicOffsets;
              var idx = gpuPipelineLayout.dynamicOffsetOffsets[set];
              for (var i = 0; i < dynamicOffsets.length; i++) offsets[idx + i] = dynamicOffsets[i];
              this._isStateInvalied = true;
            }
          }
        };
        _proto.bindInputAssembler = function bindInputAssembler(inputAssembler) {
          var gpuInputAssembler = inputAssembler.gpuInputAssembler;
          this._curGPUInputAssembler = gpuInputAssembler;
          this._isStateInvalied = true;
        };
        _proto.setViewport = function setViewport(viewport) {
          var cache = this._curDynamicStates.viewport;
          if (cache.left !== viewport.left || cache.top !== viewport.top || cache.width !== viewport.width || cache.height !== viewport.height || cache.minDepth !== viewport.minDepth || cache.maxDepth !== viewport.maxDepth) {
            cache.left = viewport.left;
            cache.top = viewport.top;
            cache.width = viewport.width;
            cache.height = viewport.height;
            cache.minDepth = viewport.minDepth;
            cache.maxDepth = viewport.maxDepth;
            this._isStateInvalied = true;
          }
        };
        _proto.setScissor = function setScissor(scissor) {
          var cache = this._curDynamicStates.scissor;
          if (cache.x !== scissor.x || cache.y !== scissor.y || cache.width !== scissor.width || cache.height !== scissor.height) {
            cache.x = scissor.x;
            cache.y = scissor.y;
            cache.width = scissor.width;
            cache.height = scissor.height;
            this._isStateInvalied = true;
          }
        };
        _proto.setLineWidth = function setLineWidth(lineWidth) {
          if (this._curDynamicStates.lineWidth !== lineWidth) {
            this._curDynamicStates.lineWidth = lineWidth;
            this._isStateInvalied = true;
          }
        };
        _proto.setDepthBias = function setDepthBias(depthBiasConstantFactor, depthBiasClamp, depthBiasSlopeFactor) {
          var cache = this._curDynamicStates;
          if (cache.depthBiasConstant !== depthBiasConstantFactor || cache.depthBiasClamp !== depthBiasClamp || cache.depthBiasSlope !== depthBiasSlopeFactor) {
            cache.depthBiasConstant = depthBiasConstantFactor;
            cache.depthBiasClamp = depthBiasClamp;
            cache.depthBiasSlope = depthBiasSlopeFactor;
            this._isStateInvalied = true;
          }
        };
        _proto.setBlendConstants = function setBlendConstants(blendConstants) {
          var cache = this._curDynamicStates.blendConstant;
          if (cache.x !== blendConstants.x || cache.y !== blendConstants.y || cache.z !== blendConstants.z || cache.w !== blendConstants.w) {
            cache.copy(blendConstants);
            this._isStateInvalied = true;
          }
        };
        _proto.setDepthBound = function setDepthBound(minDepthBounds, maxDepthBounds) {
          var cache = this._curDynamicStates;
          if (cache.depthMinBounds !== minDepthBounds || cache.depthMaxBounds !== maxDepthBounds) {
            cache.depthMinBounds = minDepthBounds;
            cache.depthMaxBounds = maxDepthBounds;
            this._isStateInvalied = true;
          }
        };
        _proto.setStencilWriteMask = function setStencilWriteMask(face, writeMask) {
          var front = this._curDynamicStates.stencilStatesFront;
          var back = this._curDynamicStates.stencilStatesBack;
          if (face & StencilFace.FRONT) {
            if (front.writeMask !== writeMask) {
              front.writeMask = writeMask;
              this._isStateInvalied = true;
            }
          }
          if (face & StencilFace.BACK) {
            if (back.writeMask !== writeMask) {
              back.writeMask = writeMask;
              this._isStateInvalied = true;
            }
          }
        };
        _proto.setStencilCompareMask = function setStencilCompareMask(face, reference, compareMask) {
          var front = this._curDynamicStates.stencilStatesFront;
          var back = this._curDynamicStates.stencilStatesBack;
          if (face & StencilFace.FRONT) {
            if (front.compareMask !== compareMask || front.reference !== reference) {
              front.reference = reference;
              front.compareMask = compareMask;
              this._isStateInvalied = true;
            }
          }
          if (face & StencilFace.BACK) {
            if (back.compareMask !== compareMask || back.reference !== reference) {
              back.reference = reference;
              back.compareMask = compareMask;
              this._isStateInvalied = true;
            }
          }
        };
        _proto.draw = function draw(infoOrAssembler) {
          if (this._type === CommandBufferType.PRIMARY && this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
            if (this._isStateInvalied) {
              this.bindStates();
            }
            var info = 'drawInfo' in infoOrAssembler ? infoOrAssembler.drawInfo : infoOrAssembler;
            var cmd = this._cmdAllocator.drawCmdPool.alloc(WebGL2CmdDraw);
            cmd.drawInfo.copy(info);
            this.cmdPackage.drawCmds.push(cmd);
            this.cmdPackage.cmds.push(WebGL2Cmd.DRAW);
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
        _proto.updateBuffer = function updateBuffer(buffer, data, size) {
          if (this._type === CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
            var gpuBuffer = buffer.gpuBuffer;
            if (gpuBuffer) {
              var cmd = this._cmdAllocator.updateBufferCmdPool.alloc(WebGL2CmdUpdateBuffer);
              var buffSize = 0;
              var buff = null;

              // TODO: Have to copy to staging buffer first to make this work for the execution is deferred.
              // But since we are using specialized primary command buffers in WebGL backends, we leave it as is for now
              if (buffer.usage & BufferUsageBit.INDIRECT) {
                buff = data;
              } else {
                if (size !== undefined) {
                  buffSize = size;
                } else {
                  buffSize = data.byteLength;
                }
                buff = data;
              }
              cmd.gpuBuffer = gpuBuffer;
              cmd.buffer = buff;
              cmd.offset = 0;
              cmd.size = buffSize;
              this.cmdPackage.updateBufferCmds.push(cmd);
              this.cmdPackage.cmds.push(WebGL2Cmd.UPDATE_BUFFER);
            }
          } else {
            console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
          }
        };
        _proto.copyBuffersToTexture = function copyBuffersToTexture(buffers, texture, regions) {
          if (this._type === CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
            var gpuTexture = texture.gpuTexture;
            if (gpuTexture) {
              var cmd = this._cmdAllocator.copyBufferToTextureCmdPool.alloc(WebGL2CmdCopyBufferToTexture);
              cmd.gpuTexture = gpuTexture;
              cmd.regions = regions;
              // TODO: Have to copy to staging buffer first to make this work for the execution is deferred.
              // But since we are using specialized primary command buffers in WebGL backends, we leave it as is for now
              cmd.buffers = buffers;
              this.cmdPackage.copyBufferToTextureCmds.push(cmd);
              this.cmdPackage.cmds.push(WebGL2Cmd.COPY_BUFFER_TO_TEXTURE);
            }
          } else {
            console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
          }
        };
        _proto.execute = function execute(cmdBuffs, count) {
          for (var i = 0; i < count; ++i) {
            var webGL2CmdBuff = cmdBuffs[i];
            for (var c = 0; c < webGL2CmdBuff.cmdPackage.beginRenderPassCmds.length; ++c) {
              var cmd = webGL2CmdBuff.cmdPackage.beginRenderPassCmds.array[c];
              ++cmd.refCount;
              this.cmdPackage.beginRenderPassCmds.push(cmd);
            }
            for (var _c = 0; _c < webGL2CmdBuff.cmdPackage.bindStatesCmds.length; ++_c) {
              var _cmd = webGL2CmdBuff.cmdPackage.bindStatesCmds.array[_c];
              ++_cmd.refCount;
              this.cmdPackage.bindStatesCmds.push(_cmd);
            }
            for (var _c2 = 0; _c2 < webGL2CmdBuff.cmdPackage.drawCmds.length; ++_c2) {
              var _cmd2 = webGL2CmdBuff.cmdPackage.drawCmds.array[_c2];
              ++_cmd2.refCount;
              this.cmdPackage.drawCmds.push(_cmd2);
            }
            for (var _c3 = 0; _c3 < webGL2CmdBuff.cmdPackage.updateBufferCmds.length; ++_c3) {
              var _cmd3 = webGL2CmdBuff.cmdPackage.updateBufferCmds.array[_c3];
              ++_cmd3.refCount;
              this.cmdPackage.updateBufferCmds.push(_cmd3);
            }
            for (var _c4 = 0; _c4 < webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.length; ++_c4) {
              var _cmd4 = webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.array[_c4];
              ++_cmd4.refCount;
              this.cmdPackage.copyBufferToTextureCmds.push(_cmd4);
            }
            for (var _c5 = 0; _c5 < webGL2CmdBuff.cmdPackage.blitTextureCmds.length; ++_c5) {
              var _cmd5 = webGL2CmdBuff.cmdPackage.blitTextureCmds.array[_c5];
              ++_cmd5.refCount;
              this.cmdPackage.blitTextureCmds.push(_cmd5);
            }
            this.cmdPackage.cmds.concat(webGL2CmdBuff.cmdPackage.cmds.array);
            this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
            this._numInstances += webGL2CmdBuff._numInstances;
            this._numTris += webGL2CmdBuff._numTris;
          }
        };
        _proto.pipelineBarrier = function pipelineBarrier(GeneralBarrier, bufferBarriers, buffers, textureBarriers, textures) {};
        _proto.bindStates = function bindStates() {
          var bindStatesCmd = this._cmdAllocator.bindStatesCmdPool.alloc(WebGL2CmdBindStates);
          bindStatesCmd.gpuPipelineState = this._curGPUPipelineState;
          Array.prototype.push.apply(bindStatesCmd.gpuDescriptorSets, this._curGPUDescriptorSets);
          Array.prototype.push.apply(bindStatesCmd.dynamicOffsets, this._curDynamicOffsets);
          bindStatesCmd.gpuInputAssembler = this._curGPUInputAssembler;
          bindStatesCmd.dynamicStates = this._curDynamicStates;
          this.cmdPackage.bindStatesCmds.push(bindStatesCmd);
          this.cmdPackage.cmds.push(WebGL2Cmd.BIND_STATES);
          this._isStateInvalied = false;
        };
        _proto.blitTexture = function blitTexture(srcTexture, dstTexture, regions, filter) {
          var blitTextureCmd = this._cmdAllocator.blitTextureCmdPool.alloc(WebGL2CmdBlitTexture);
          blitTextureCmd.srcTexture = srcTexture.gpuTexture;
          blitTextureCmd.dstTexture = dstTexture.gpuTexture;
          blitTextureCmd.regions = regions;
          blitTextureCmd.filter = filter;
          ++this._numDrawCalls;
          this.cmdPackage.blitTextureCmds.push(blitTextureCmd);
          this.cmdPackage.cmds.push(WebGL2Cmd.BLIT_TEXTURE);
        };
        return WebGL2CommandBuffer;
      }(CommandBuffer));
    }
  };
});