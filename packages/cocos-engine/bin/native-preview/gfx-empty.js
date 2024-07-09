System.register(['./device-90bc7390.js', './buffer-barrier-92305f2c.js', './index-ce98320e.js', './murmurhash2_gc-2108d723.js'], (function (exports) {
    'use strict';
    var PipelineState, IsPowerOf2, FormatSurfaceSize, Format, Device, API, QueueInfo, QueueType, CommandBufferInfo, DescriptorSet, Buffer, CommandBuffer, Framebuffer, InputAssembler, DescriptorSetLayout, PipelineLayout, Queue, RenderPass, Shader, Texture, Swapchain, Sampler, GeneralBarrier, TextureBarrier, BufferBarrier, debug, legacyCC;
    return {
        setters: [function (module) {
            PipelineState = module.b1;
            IsPowerOf2 = module.aT;
            FormatSurfaceSize = module.aV;
            Format = module.b;
            Device = module.a$;
            API = module.A;
            QueueInfo = module.aG;
            QueueType = module.Q;
            CommandBufferInfo = module.aF;
        }, function (module) {
            DescriptorSet = module.D;
            Buffer = module.B;
            CommandBuffer = module.C;
            Framebuffer = module.F;
            InputAssembler = module.I;
            DescriptorSetLayout = module.a;
            PipelineLayout = module.P;
            Queue = module.Q;
            RenderPass = module.R;
            Shader = module.b;
            Texture = module.T;
            Swapchain = module.c;
            Sampler = module.S;
            GeneralBarrier = module.G;
            TextureBarrier = module.d;
            BufferBarrier = module.e;
        }, function (module) {
            debug = module.aF;
            legacyCC = module.l;
        }, function () {}],
        execute: (function () {

            class EmptyDescriptorSet extends DescriptorSet {
              initialize(info) {
                this._layout = info.layout;
              }
              destroy() {}
              update() {}
            }

            class EmptyBuffer extends Buffer {
              initialize(info) {
                if ('buffer' in info) {
                  this._isBufferView = true;
                  const buffer = info.buffer;
                  this._usage = buffer.usage;
                  this._memUsage = buffer.memUsage;
                  this._size = this._stride = info.range;
                  this._count = 1;
                  this._flags = buffer.flags;
                } else {
                  this._usage = info.usage;
                  this._memUsage = info.memUsage;
                  this._size = info.size;
                  this._stride = Math.max(info.stride || this._size, 1);
                  this._count = this._size / this._stride;
                  this._flags = info.flags;
                }
              }
              destroy() {}
              resize(size) {}
              update(buffer, size) {}
            }

            class EmptyCommandBuffer extends CommandBuffer {
              initialize(info) {
                this._type = info.type;
                this._queue = info.queue;
              }
              destroy() {}
              begin(renderPass, subpass = 0, frameBuffer) {}
              end() {}
              beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {}
              endRenderPass() {}
              bindPipelineState(pipelineState) {}
              bindDescriptorSet(set, descriptorSet, dynamicOffsets) {}
              bindInputAssembler(inputAssembler) {}
              setViewport(viewport) {}
              setScissor(scissor) {}
              setLineWidth(lineWidth) {}
              setDepthBias(depthBiasConstantFactor, depthBiasClamp, depthBiasSlopeFactor) {}
              setBlendConstants(blendConstants) {}
              setDepthBound(minDepthBounds, maxDepthBounds) {}
              setStencilWriteMask(face, writeMask) {}
              setStencilCompareMask(face, reference, compareMask) {}
              draw(infoOrAssembler) {}
              updateBuffer(buffer, data, size) {}
              copyBuffersToTexture(buffers, texture, regions) {}
              execute(cmdBuffs, count) {}
              pipelineBarrier(GeneralBarrier, bufferBarriers, buffers, textureBarriers, textures) {}
              blitTexture(srcTexture, dstTexture, regions, filter) {}
            }

            class EmptyFramebuffer extends Framebuffer {
              initialize(info) {
                this._renderPass = info.renderPass;
                this._colorTextures = info.colorTextures || [];
                this._depthStencilTexture = info.depthStencilTexture || null;
              }
              destroy() {}
            }

            class EmptyInputAssembler extends InputAssembler {
              initialize(info) {
                this._attributes = info.attributes;
                this._attributesHash = this.computeAttributesHash();
                this._vertexBuffers = info.vertexBuffers;
                if (info.indexBuffer) {
                  this._indexBuffer = info.indexBuffer;
                  this._drawInfo.indexCount = this._indexBuffer.size / this._indexBuffer.stride;
                  this._drawInfo.firstIndex = 0;
                } else {
                  const vertBuff = this._vertexBuffers[0];
                  this._drawInfo.vertexCount = vertBuff.size / vertBuff.stride;
                  this._drawInfo.firstVertex = 0;
                  this._drawInfo.vertexOffset = 0;
                }
              }
              destroy() {}
            }

            class EmptyDescriptorSetLayout extends DescriptorSetLayout {
              initialize(info) {
                Array.prototype.push.apply(this._bindings, info.bindings);
              }
              destroy() {}
            }

            class EmptyPipelineLayout extends PipelineLayout {
              initialize(info) {
                Array.prototype.push.apply(this._setLayouts, info.setLayouts);
              }
              destroy() {}
            }

            class EmptyPipelineState extends PipelineState {
              initialize(info) {
                this._primitive = info.primitive;
                this._shader = info.shader;
                this._pipelineLayout = info.pipelineLayout;
                const bs = this._bs;
                if (info.blendState) {
                  const bsInfo = info.blendState;
                  const {
                    targets
                  } = bsInfo;
                  if (targets) {
                    targets.forEach((t, i) => {
                      bs.setTarget(i, t);
                    });
                  }
                  if (bsInfo.isA2C !== undefined) {
                    bs.isA2C = bsInfo.isA2C;
                  }
                  if (bsInfo.isIndepend !== undefined) {
                    bs.isIndepend = bsInfo.isIndepend;
                  }
                  if (bsInfo.blendColor !== undefined) {
                    bs.blendColor = bsInfo.blendColor;
                  }
                }
                Object.assign(this._rs, info.rasterizerState);
                Object.assign(this._dss, info.depthStencilState);
                this._is = info.inputState;
                this._renderPass = info.renderPass;
                this._dynamicStates = info.dynamicStates;
              }
              destroy() {}
            }

            class EmptyQueue extends Queue {
              initialize(info) {
                this._type = info.type;
              }
              destroy() {}
              submit(cmdBuffs) {}
            }

            class EmptyRenderPass extends RenderPass {
              initialize(info) {
                this._colorInfos = info.colorAttachments;
                this._depthStencilInfo = info.depthStencilAttachment;
                this._subpasses = info.subpasses;
                this._hash = this.computeHash();
              }
              destroy() {}
            }

            class EmptyShader extends Shader {
              initialize(info) {
                debug(`Shader '${info.name}' compilation succeeded.`);
              }
              destroy() {}
            }

            class EmptyTexture extends Texture {
              initialize(info, isSwapchainTexture) {
                let texInfo = info;
                if ('texture' in info) {
                  texInfo = info.texture.info;
                  this._isTextureView = true;
                  this._viewInfo.copy(info);
                } else {
                  this._viewInfo.texture = this;
                  this._viewInfo.type = info.type;
                  this._viewInfo.format = info.format;
                  this._viewInfo.baseLevel = 0;
                  this._viewInfo.levelCount = 1;
                  this._viewInfo.baseLayer = 0;
                  this._viewInfo.layerCount = 1;
                }
                this._info.copy(texInfo);
                this._isPowerOf2 = IsPowerOf2(this._info.width) && IsPowerOf2(this._info.height);
                this._size = FormatSurfaceSize(this._info.format, this.width, this.height, this.depth, this._info.levelCount) * this._info.layerCount;
              }
              destroy() {}
              getGLTextureHandle() {
                return 0;
              }
              resize(width, height) {
                this._info.width = width;
                this._info.height = height;
              }
              initAsSwapchainTexture(info) {}
            }

            class EmptySwapchain extends Swapchain {
              initialize(info) {
                this._colorTexture = new EmptyTexture();
                this._colorTexture.initAsSwapchainTexture({
                  swapchain: this,
                  format: Format.RGBA8,
                  width: info.width,
                  height: info.height
                });
                this._depthStencilTexture = new EmptyTexture();
                this._depthStencilTexture.initAsSwapchainTexture({
                  swapchain: this,
                  format: Format.DEPTH_STENCIL,
                  width: info.width,
                  height: info.height
                });
              }
              destroy() {}
              resize(width, height, surfaceTransform) {}
            }

            class EmptyDevice extends Device {
              constructor(...args) {
                super(...args);
                this._swapchain = null;
              }
              initialize(info) {
                this._gfxAPI = API.UNKNOWN;
                this._bindingMappingInfo = info.bindingMappingInfo;
                this._queue = this.createQueue(new QueueInfo(QueueType.GRAPHICS));
                this._cmdBuff = this.createCommandBuffer(new CommandBufferInfo(this._queue));
                debug('Empty device initialized.');
                return true;
              }
              destroy() {
                if (this._queue) {
                  this._queue.destroy();
                  this._queue = null;
                }
                if (this._cmdBuff) {
                  this._cmdBuff.destroy();
                  this._cmdBuff = null;
                }
                this._swapchain = null;
              }
              flushCommands(cmdBuffs) {}
              acquire(swapchains) {}
              present() {}
              createCommandBuffer(info) {
                const cmdBuff = new EmptyCommandBuffer();
                cmdBuff.initialize(info);
                return cmdBuff;
              }
              createSwapchain(info) {
                const swapchain = new EmptySwapchain();
                this._swapchain = swapchain;
                swapchain.initialize(info);
                return swapchain;
              }
              createBuffer(info) {
                const buffer = new EmptyBuffer();
                buffer.initialize(info);
                return buffer;
              }
              createTexture(info) {
                const texture = new EmptyTexture();
                texture.initialize(info);
                return texture;
              }
              createDescriptorSet(info) {
                const descriptorSet = new EmptyDescriptorSet();
                descriptorSet.initialize(info);
                return descriptorSet;
              }
              createShader(info) {
                const shader = new EmptyShader();
                shader.initialize(info);
                return shader;
              }
              createInputAssembler(info) {
                const inputAssembler = new EmptyInputAssembler();
                inputAssembler.initialize(info);
                return inputAssembler;
              }
              createRenderPass(info) {
                const renderPass = new EmptyRenderPass();
                renderPass.initialize(info);
                return renderPass;
              }
              createFramebuffer(info) {
                const framebuffer = new EmptyFramebuffer();
                framebuffer.initialize(info);
                return framebuffer;
              }
              createDescriptorSetLayout(info) {
                const descriptorSetLayout = new EmptyDescriptorSetLayout();
                descriptorSetLayout.initialize(info);
                return descriptorSetLayout;
              }
              createPipelineLayout(info) {
                const pipelineLayout = new EmptyPipelineLayout();
                pipelineLayout.initialize(info);
                return pipelineLayout;
              }
              createPipelineState(info) {
                const pipelineState = new EmptyPipelineState();
                pipelineState.initialize(info);
                return pipelineState;
              }
              createQueue(info) {
                const queue = new EmptyQueue();
                queue.initialize(info);
                return queue;
              }
              getSampler(info) {
                const hash = Sampler.computeHash(info);
                if (!this._samplers.has(hash)) {
                  this._samplers.set(hash, new Sampler(info, hash));
                }
                return this._samplers.get(hash);
              }
              getSwapchains() {
                return [this._swapchain];
              }
              getGeneralBarrier(info) {
                const hash = GeneralBarrier.computeHash(info);
                if (!this._generalBarrierss.has(hash)) {
                  this._generalBarrierss.set(hash, new GeneralBarrier(info, hash));
                }
                return this._generalBarrierss.get(hash);
              }
              getTextureBarrier(info) {
                const hash = TextureBarrier.computeHash(info);
                if (!this._textureBarriers.has(hash)) {
                  this._textureBarriers.set(hash, new TextureBarrier(info, hash));
                }
                return this._textureBarriers.get(hash);
              }
              getBufferBarrier(info) {
                const hash = BufferBarrier.computeHash(info);
                if (!this._bufferBarriers.has(hash)) {
                  this._bufferBarriers.set(hash, new BufferBarrier(info, hash));
                }
                return this._bufferBarriers.get(hash);
              }
              copyBuffersToTexture(buffers, texture, regions) {}
              copyTextureToBuffers(texture, buffers, regions) {}
              copyTexImagesToTexture(texImages, texture, regions) {}
            } exports('EmptyDevice', EmptyDevice);
            legacyCC.EmptyDevice = EmptyDevice;

            legacyCC.EmptyDevice = EmptyDevice;

        })
    };
}));
