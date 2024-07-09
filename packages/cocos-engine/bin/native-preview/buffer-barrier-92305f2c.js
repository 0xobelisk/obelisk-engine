System.register(['./device-90bc7390.js', './index-ce98320e.js', './murmurhash2_gc-2108d723.js'], (function (exports) {
    'use strict';
    var GFXObject, ObjectType, SamplerInfo, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, BufferUsageBit, MemoryUsageBit, BufferFlagBit, CommandBufferType, DrawInfo, QueueType, TextureInfo, TextureViewInfo, SurfaceTransform, GeneralBarrierInfo, TextureBarrierInfo, BufferBarrierInfo, murmurhash2_32_gc;
    return {
        setters: [function (module) {
            GFXObject = module.aM;
            ObjectType = module.O;
            SamplerInfo = module.ae;
            DESCRIPTOR_BUFFER_TYPE = module.aP;
            DESCRIPTOR_SAMPLER_TYPE = module.aQ;
            BufferUsageBit = module.B;
            MemoryUsageBit = module.e;
            BufferFlagBit = module.d;
            CommandBufferType = module.G;
            DrawInfo = module.a9;
            QueueType = module.Q;
            TextureInfo = module.ac;
            TextureViewInfo = module.ad;
            SurfaceTransform = module.a;
            GeneralBarrierInfo = module.aw;
            TextureBarrierInfo = module.ax;
            BufferBarrierInfo = module.ay;
        }, function () {}, function (module) {
            murmurhash2_32_gc = module.m;
        }],
        execute: (function () {

            class Sampler extends GFXObject {
              get info() {
                return this._info;
              }
              get hash() {
                return this._hash;
              }
              constructor(info, hash) {
                super(ObjectType.SAMPLER);
                this._info = new SamplerInfo();
                this._hash = 0;
                this._info.copy(info);
                this._hash = hash;
              }
              static computeHash(info) {
                let hash = info.minFilter;
                hash |= info.magFilter << 2;
                hash |= info.mipFilter << 4;
                hash |= info.addressU << 6;
                hash |= info.addressV << 8;
                hash |= info.addressW << 10;
                hash |= info.maxAnisotropy << 12;
                hash |= info.cmpFunc << 16;
                return hash;
              }
              static unpackFromHash(hash) {
                const info = new SamplerInfo();
                info.minFilter = (hash & (1 << 2) - 1) >> 0;
                info.magFilter = (hash & (1 << 2) - 1) >> 2;
                info.mipFilter = (hash & (1 << 2) - 1) >> 4;
                info.addressU = (hash & (1 << 2) - 1) >> 6;
                info.addressV = (hash & (1 << 2) - 1) >> 8;
                info.addressW = (hash & (1 << 2) - 1) >> 10;
                info.maxAnisotropy = (hash & (1 << 4) - 1) >> 12;
                info.cmpFunc = (hash & (1 << 3) - 1) >> 16;
                return info;
              }
            } exports('S', Sampler);

            class DescriptorSet extends GFXObject {
              get layout() {
                return this._layout;
              }
              constructor() {
                super(ObjectType.DESCRIPTOR_SET);
                this._layout = null;
                this._buffers = [];
                this._textures = [];
                this._samplers = [];
                this._isDirty = false;
              }
              bindBuffer(binding, buffer, index = 0) {
                const bindingIndex = this._layout.bindingIndices[binding];
                const info = this._layout.bindings[bindingIndex];
                if (!info) {
                  return;
                }
                if (info.descriptorType & DESCRIPTOR_BUFFER_TYPE) {
                  const descriptorIndex = this._layout.descriptorIndices[binding];
                  if (this._buffers[descriptorIndex + index] !== buffer) {
                    this._buffers[descriptorIndex + index] = buffer;
                    this._isDirty = true;
                  }
                }
              }
              bindSampler(binding, sampler, index = 0) {
                const bindingIndex = this._layout.bindingIndices[binding];
                const info = this._layout.bindings[bindingIndex];
                if (!info) {
                  return;
                }
                if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
                  const descriptorIndex = this._layout.descriptorIndices[binding];
                  if (this._samplers[descriptorIndex + index] !== sampler) {
                    this._samplers[descriptorIndex + index] = sampler;
                    this._isDirty = true;
                  }
                }
              }
              bindTexture(binding, texture, index = 0, flags) {
                const bindingIndex = this._layout.bindingIndices[binding];
                const info = this._layout.bindings[bindingIndex];
                if (!info) {
                  return;
                }
                if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
                  const descriptorIndex = this._layout.descriptorIndices[binding];
                  if (this._textures[descriptorIndex + index] !== texture) {
                    this._textures[descriptorIndex + index] = texture;
                    this._isDirty = true;
                  }
                }
              }
              getBuffer(binding, index = 0) {
                const descriptorIndex = this._layout.descriptorIndices[binding];
                return this._buffers[descriptorIndex + index];
              }
              getSampler(binding, index = 0) {
                const descriptorIndex = this._layout.descriptorIndices[binding];
                return this._samplers[descriptorIndex + index];
              }
              getTexture(binding, index = 0) {
                const descriptorIndex = this._layout.descriptorIndices[binding];
                return this._textures[descriptorIndex + index];
              }
            } exports('D', DescriptorSet);

            class Buffer extends GFXObject {
              get usage() {
                return this._usage;
              }
              get memUsage() {
                return this._memUsage;
              }
              get size() {
                return this._size;
              }
              get stride() {
                return this._stride;
              }
              get count() {
                return this._count;
              }
              get flags() {
                return this._flags;
              }
              constructor() {
                super(ObjectType.BUFFER);
                this._usage = BufferUsageBit.NONE;
                this._memUsage = MemoryUsageBit.NONE;
                this._size = 0;
                this._stride = 1;
                this._count = 0;
                this._flags = BufferFlagBit.NONE;
                this._isBufferView = false;
              }
            } exports('B', Buffer);

            class CommandBuffer extends GFXObject {
              get type() {
                return this._type;
              }
              get queue() {
                return this._queue;
              }
              get numDrawCalls() {
                return this._numDrawCalls;
              }
              get numInstances() {
                return this._numInstances;
              }
              get numTris() {
                return this._numTris;
              }
              constructor() {
                super(ObjectType.COMMAND_BUFFER);
                this._queue = null;
                this._type = CommandBufferType.PRIMARY;
                this._numDrawCalls = 0;
                this._numInstances = 0;
                this._numTris = 0;
              }
            } exports('C', CommandBuffer);

            class Framebuffer extends GFXObject {
              get renderPass() {
                return this._renderPass;
              }
              get colorTextures() {
                return this._colorTextures;
              }
              get depthStencilTexture() {
                return this._depthStencilTexture;
              }
              get width() {
                if (this.colorTextures.length > 0) {
                  return this.colorTextures[0].width;
                } else if (this.depthStencilTexture) {
                  return this.depthStencilTexture.width;
                }
                return this._width;
              }
              get height() {
                if (this.colorTextures.length > 0) {
                  return this.colorTextures[0].height;
                } else if (this.depthStencilTexture) {
                  return this.depthStencilTexture.height;
                }
                return this._height;
              }
              constructor() {
                super(ObjectType.FRAMEBUFFER);
                this._renderPass = null;
                this._colorTextures = [];
                this._depthStencilTexture = null;
                this._width = 0;
                this._height = 0;
              }
            } exports('F', Framebuffer);

            class InputAssembler extends GFXObject {
              get attributes() {
                return this._attributes;
              }
              get vertexBuffers() {
                return this._vertexBuffers;
              }
              get indexBuffer() {
                return this._indexBuffer;
              }
              get indirectBuffer() {
                return this._indirectBuffer;
              }
              get attributesHash() {
                return this._attributesHash;
              }
              set vertexCount(count) {
                this._drawInfo.vertexCount = count;
              }
              get vertexCount() {
                return this._drawInfo.vertexCount;
              }
              set firstVertex(first) {
                this._drawInfo.firstVertex = first;
              }
              get firstVertex() {
                return this._drawInfo.firstVertex;
              }
              set indexCount(count) {
                this._drawInfo.indexCount = count;
              }
              get indexCount() {
                return this._drawInfo.indexCount;
              }
              set firstIndex(first) {
                this._drawInfo.firstIndex = first;
              }
              get firstIndex() {
                return this._drawInfo.firstIndex;
              }
              set vertexOffset(offset) {
                this._drawInfo.vertexOffset = offset;
              }
              get vertexOffset() {
                return this._drawInfo.vertexOffset;
              }
              set instanceCount(count) {
                this._drawInfo.instanceCount = count;
              }
              get instanceCount() {
                return this._drawInfo.instanceCount;
              }
              set firstInstance(first) {
                this._drawInfo.firstInstance = first;
              }
              get firstInstance() {
                return this._drawInfo.firstInstance;
              }
              set drawInfo(info) {
                this._drawInfo = info;
              }
              get drawInfo() {
                return this._drawInfo;
              }
              constructor() {
                super(ObjectType.INPUT_ASSEMBLER);
                this._attributes = [];
                this._attributesHash = 0;
                this._vertexBuffers = [];
                this._indexBuffer = null;
                this._indirectBuffer = null;
                this._drawInfo = new DrawInfo();
              }
              getVertexBuffer(stream = 0) {
                if (stream < this._vertexBuffers.length) {
                  return this._vertexBuffers[stream];
                } else {
                  return null;
                }
              }
              computeAttributesHash() {
                let res = 'attrs';
                for (let i = 0; i < this.attributes.length; ++i) {
                  const at = this.attributes[i];
                  res += `,${at.name},${at.format},${at.isNormalized},${at.stream},${at.isInstanced},${at.location}`;
                }
                return murmurhash2_32_gc(res, 666);
              }
            } exports('I', InputAssembler);

            class DescriptorSetLayout extends GFXObject {
              get bindings() {
                return this._bindings;
              }
              get bindingIndices() {
                return this._bindingIndices;
              }
              get descriptorIndices() {
                return this._descriptorIndices;
              }
              constructor() {
                super(ObjectType.DESCRIPTOR_SET_LAYOUT);
                this._bindings = [];
                this._bindingIndices = [];
                this._descriptorIndices = [];
              }
            } exports('a', DescriptorSetLayout);

            class PipelineLayout extends GFXObject {
              get setLayouts() {
                return this._setLayouts;
              }
              constructor() {
                super(ObjectType.PIPELINE_LAYOUT);
                this._setLayouts = [];
              }
            } exports('P', PipelineLayout);

            class Queue extends GFXObject {
              get type() {
                return this._type;
              }
              constructor() {
                super(ObjectType.QUEUE);
                this._type = QueueType.GRAPHICS;
              }
            } exports('Q', Queue);

            class RenderPass extends GFXObject {
              get colorAttachments() {
                return this._colorInfos;
              }
              get depthStencilAttachment() {
                return this._depthStencilInfo;
              }
              get subPasses() {
                return this._subpasses;
              }
              get hash() {
                return this._hash;
              }
              constructor() {
                super(ObjectType.RENDER_PASS);
                this._colorInfos = [];
                this._depthStencilInfo = null;
                this._subpasses = [];
                this._hash = 0;
              }
              computeHash() {
                let res = '';
                if (this._subpasses.length) {
                  for (let i = 0; i < this._subpasses.length; ++i) {
                    const subpass = this._subpasses[i];
                    if (subpass.inputs.length) {
                      res += 'ia';
                      for (let j = 0; j < subpass.inputs.length; ++j) {
                        const ia = this._colorInfos[subpass.inputs[j]];
                        res += `,${ia.format},${ia.sampleCount}`;
                      }
                    }
                    if (subpass.colors.length) {
                      res += 'ca';
                      for (let j = 0; j < subpass.inputs.length; ++j) {
                        const ca = this._colorInfos[subpass.inputs[j]];
                        res += `,${ca.format},${ca.sampleCount}`;
                      }
                    }
                    if (subpass.depthStencil >= 0) {
                      const ds = this._colorInfos[subpass.depthStencil];
                      res += `ds,${ds.format},${ds.sampleCount}`;
                    }
                  }
                } else {
                  res += 'ca';
                  for (let i = 0; i < this._colorInfos.length; ++i) {
                    const ca = this._colorInfos[i];
                    res += `,${ca.format},${ca.sampleCount}`;
                  }
                  const ds = this._depthStencilInfo;
                  if (ds) {
                    res += `ds,${ds.format},${ds.sampleCount}`;
                  }
                }
                return murmurhash2_32_gc(res, 666);
              }
            } exports('R', RenderPass);

            class Shader extends GFXObject {
              get name() {
                return this._name;
              }
              get attributes() {
                return this._attributes;
              }
              get blocks() {
                return this._blocks;
              }
              get samplers() {
                return this._samplers;
              }
              get stages() {
                return this._stages;
              }
              constructor() {
                super(ObjectType.SHADER);
                this._name = '';
                this._stages = [];
                this._attributes = [];
                this._blocks = [];
                this._samplers = [];
              }
            } exports('b', Shader);

            class Texture extends GFXObject {
              get type() {
                return this._info.type;
              }
              get usage() {
                return this._info.usage;
              }
              get format() {
                return this._info.format;
              }
              get width() {
                return this._info.width;
              }
              get height() {
                return this._info.height;
              }
              get depth() {
                return this._info.depth;
              }
              get layerCount() {
                return this._info.layerCount;
              }
              get levelCount() {
                return this._info.levelCount;
              }
              get samples() {
                return this._info.samples;
              }
              get flags() {
                return this._info.flags;
              }
              get size() {
                return this._size;
              }
              get info() {
                return this._info;
              }
              get viewInfo() {
                return this._viewInfo;
              }
              get isTextureView() {
                return this._isTextureView;
              }
              constructor() {
                super(ObjectType.TEXTURE);
                this._info = new TextureInfo();
                this._viewInfo = new TextureViewInfo();
                this._isPowerOf2 = false;
                this._isTextureView = false;
                this._size = 0;
              }
              static getLevelCount(width, height) {
                return Math.floor(Math.log2(Math.max(width, height)));
              }
            } exports('T', Texture);

            class Swapchain extends GFXObject {
              get colorTexture() {
                return this._colorTexture;
              }
              get depthStencilTexture() {
                return this._depthStencilTexture;
              }
              get surfaceTransform() {
                return this._transform;
              }
              get width() {
                return this._colorTexture.width;
              }
              get height() {
                return this._colorTexture.height;
              }
              constructor() {
                super(ObjectType.SWAPCHAIN);
                this._transform = SurfaceTransform.IDENTITY;
                this._colorTexture = null;
                this._depthStencilTexture = null;
              }
            } exports('c', Swapchain);

            class GeneralBarrier extends GFXObject {
              get info() {
                return this._info;
              }
              get hash() {
                return this._hash;
              }
              constructor(info, hash) {
                super(ObjectType.GLOBAL_BARRIER);
                this._info = new GeneralBarrierInfo();
                this._hash = 0;
                this._info.copy(info);
                this._hash = hash;
              }
              static computeHash(info) {
                return murmurhash2_32_gc(`${info.prevAccesses} ${info.nextAccesses} ${info.type}`, 666);
              }
            } exports('G', GeneralBarrier);

            class TextureBarrier extends GFXObject {
              get info() {
                return this._info;
              }
              get hash() {
                return this._hash;
              }
              constructor(info, hash) {
                super(ObjectType.TEXTURE_BARRIER);
                this._info = new TextureBarrierInfo();
                this._hash = 0;
                this._info.copy(info);
                this._hash = hash;
              }
              static computeHash(info) {
                let res = `${info.prevAccesses} ${info.nextAccesses}`;
                res += info.type;
                res += info.baseMipLevel;
                res += info.levelCount;
                res += info.baseSlice;
                res += info.sliceCount;
                res += info.discardContents;
                res += info.srcQueue ? info.srcQueue.type : 0;
                res += info.dstQueue ? info.dstQueue.type : 0;
                return murmurhash2_32_gc(res, 666);
              }
            } exports('d', TextureBarrier);

            class BufferBarrier extends GFXObject {
              get info() {
                return this._info;
              }
              get hash() {
                return this._hash;
              }
              constructor(info, hash) {
                super(ObjectType.BUFFER_BARRIER);
                this._info = new BufferBarrierInfo();
                this._hash = 0;
                this._info.copy(info);
                this._hash = hash;
              }
              static computeHash(info) {
                let res = `${info.prevAccesses} ${info.nextAccesses}`;
                res += info.type;
                res += info.offset;
                res += info.size;
                res += info.discardContents;
                res += info.srcQueue ? info.srcQueue.type : 0;
                res += info.dstQueue ? info.dstQueue.type : 0;
                return murmurhash2_32_gc(res, 666);
              }
            } exports('e', BufferBarrier);

        })
    };
}));
