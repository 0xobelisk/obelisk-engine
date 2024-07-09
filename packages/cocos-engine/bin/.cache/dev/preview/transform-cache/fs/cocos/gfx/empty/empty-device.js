System.register("q-bundled:///fs/cocos/gfx/empty/empty-device.js", ["../base/device.js", "../base/states/sampler.js", "../base/define.js", "../base/states/general-barrier.js", "../base/states/texture-barrier.js", "../base/states/buffer-barrier.js", "./empty-descriptor-set.js", "./empty-buffer.js", "./empty-command-buffer.js", "./empty-framebuffer.js", "./empty-input-assembler.js", "./empty-descriptor-set-layout.js", "./empty-pipeline-layout.js", "./empty-pipeline-state.js", "./empty-queue.js", "./empty-render-pass.js", "./empty-shader.js", "./empty-swapchain.js", "./empty-texture.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var Device, Sampler, QueueInfo, CommandBufferInfo, QueueType, API, GeneralBarrier, TextureBarrier, BufferBarrier, EmptyDescriptorSet, EmptyBuffer, EmptyCommandBuffer, EmptyFramebuffer, EmptyInputAssembler, EmptyDescriptorSetLayout, EmptyPipelineLayout, EmptyPipelineState, EmptyQueue, EmptyRenderPass, EmptyShader, EmptySwapchain, EmptyTexture, debug, cclegacy, EmptyDevice;
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
    setters: [function (_baseDeviceJs) {
      Device = _baseDeviceJs.Device;
    }, function (_baseStatesSamplerJs) {
      Sampler = _baseStatesSamplerJs.Sampler;
    }, function (_baseDefineJs) {
      QueueInfo = _baseDefineJs.QueueInfo;
      CommandBufferInfo = _baseDefineJs.CommandBufferInfo;
      QueueType = _baseDefineJs.QueueType;
      API = _baseDefineJs.API;
    }, function (_baseStatesGeneralBarrierJs) {
      GeneralBarrier = _baseStatesGeneralBarrierJs.GeneralBarrier;
    }, function (_baseStatesTextureBarrierJs) {
      TextureBarrier = _baseStatesTextureBarrierJs.TextureBarrier;
    }, function (_baseStatesBufferBarrierJs) {
      BufferBarrier = _baseStatesBufferBarrierJs.BufferBarrier;
    }, function (_emptyDescriptorSetJs) {
      EmptyDescriptorSet = _emptyDescriptorSetJs.EmptyDescriptorSet;
    }, function (_emptyBufferJs) {
      EmptyBuffer = _emptyBufferJs.EmptyBuffer;
    }, function (_emptyCommandBufferJs) {
      EmptyCommandBuffer = _emptyCommandBufferJs.EmptyCommandBuffer;
    }, function (_emptyFramebufferJs) {
      EmptyFramebuffer = _emptyFramebufferJs.EmptyFramebuffer;
    }, function (_emptyInputAssemblerJs) {
      EmptyInputAssembler = _emptyInputAssemblerJs.EmptyInputAssembler;
    }, function (_emptyDescriptorSetLayoutJs) {
      EmptyDescriptorSetLayout = _emptyDescriptorSetLayoutJs.EmptyDescriptorSetLayout;
    }, function (_emptyPipelineLayoutJs) {
      EmptyPipelineLayout = _emptyPipelineLayoutJs.EmptyPipelineLayout;
    }, function (_emptyPipelineStateJs) {
      EmptyPipelineState = _emptyPipelineStateJs.EmptyPipelineState;
    }, function (_emptyQueueJs) {
      EmptyQueue = _emptyQueueJs.EmptyQueue;
    }, function (_emptyRenderPassJs) {
      EmptyRenderPass = _emptyRenderPassJs.EmptyRenderPass;
    }, function (_emptyShaderJs) {
      EmptyShader = _emptyShaderJs.EmptyShader;
    }, function (_emptySwapchainJs) {
      EmptySwapchain = _emptySwapchainJs.EmptySwapchain;
    }, function (_emptyTextureJs) {
      EmptyTexture = _emptyTextureJs.EmptyTexture;
    }, function (_coreIndexJs) {
      debug = _coreIndexJs.debug;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      _export("EmptyDevice", EmptyDevice = /*#__PURE__*/function (_Device) {
        _inheritsLoose(EmptyDevice, _Device);
        function EmptyDevice() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Device.call.apply(_Device, [this].concat(args)) || this;
          _this._swapchain = null;
          return _this;
        }
        var _proto = EmptyDevice.prototype;
        _proto.initialize = function initialize(info) {
          this._gfxAPI = API.UNKNOWN;
          this._bindingMappingInfo = info.bindingMappingInfo;
          this._queue = this.createQueue(new QueueInfo(QueueType.GRAPHICS));
          this._cmdBuff = this.createCommandBuffer(new CommandBufferInfo(this._queue));
          debug('Empty device initialized.');
          return true;
        };
        _proto.destroy = function destroy() {
          if (this._queue) {
            this._queue.destroy();
            this._queue = null;
          }
          if (this._cmdBuff) {
            this._cmdBuff.destroy();
            this._cmdBuff = null;
          }
          this._swapchain = null;
        };
        _proto.flushCommands = function flushCommands(cmdBuffs) {};
        _proto.acquire = function acquire(swapchains) {};
        _proto.present = function present() {};
        _proto.createCommandBuffer = function createCommandBuffer(info) {
          var cmdBuff = new EmptyCommandBuffer();
          cmdBuff.initialize(info);
          return cmdBuff;
        };
        _proto.createSwapchain = function createSwapchain(info) {
          var swapchain = new EmptySwapchain();
          this._swapchain = swapchain;
          swapchain.initialize(info);
          return swapchain;
        };
        _proto.createBuffer = function createBuffer(info) {
          var buffer = new EmptyBuffer();
          buffer.initialize(info);
          return buffer;
        };
        _proto.createTexture = function createTexture(info) {
          var texture = new EmptyTexture();
          texture.initialize(info);
          return texture;
        };
        _proto.createDescriptorSet = function createDescriptorSet(info) {
          var descriptorSet = new EmptyDescriptorSet();
          descriptorSet.initialize(info);
          return descriptorSet;
        };
        _proto.createShader = function createShader(info) {
          var shader = new EmptyShader();
          shader.initialize(info);
          return shader;
        };
        _proto.createInputAssembler = function createInputAssembler(info) {
          var inputAssembler = new EmptyInputAssembler();
          inputAssembler.initialize(info);
          return inputAssembler;
        };
        _proto.createRenderPass = function createRenderPass(info) {
          var renderPass = new EmptyRenderPass();
          renderPass.initialize(info);
          return renderPass;
        };
        _proto.createFramebuffer = function createFramebuffer(info) {
          var framebuffer = new EmptyFramebuffer();
          framebuffer.initialize(info);
          return framebuffer;
        };
        _proto.createDescriptorSetLayout = function createDescriptorSetLayout(info) {
          var descriptorSetLayout = new EmptyDescriptorSetLayout();
          descriptorSetLayout.initialize(info);
          return descriptorSetLayout;
        };
        _proto.createPipelineLayout = function createPipelineLayout(info) {
          var pipelineLayout = new EmptyPipelineLayout();
          pipelineLayout.initialize(info);
          return pipelineLayout;
        };
        _proto.createPipelineState = function createPipelineState(info) {
          var pipelineState = new EmptyPipelineState();
          pipelineState.initialize(info);
          return pipelineState;
        };
        _proto.createQueue = function createQueue(info) {
          var queue = new EmptyQueue();
          queue.initialize(info);
          return queue;
        };
        _proto.getSampler = function getSampler(info) {
          var hash = Sampler.computeHash(info);
          if (!this._samplers.has(hash)) {
            this._samplers.set(hash, new Sampler(info, hash));
          }
          return this._samplers.get(hash);
        };
        _proto.getSwapchains = function getSwapchains() {
          return [this._swapchain];
        };
        _proto.getGeneralBarrier = function getGeneralBarrier(info) {
          var hash = GeneralBarrier.computeHash(info);
          if (!this._generalBarrierss.has(hash)) {
            this._generalBarrierss.set(hash, new GeneralBarrier(info, hash));
          }
          return this._generalBarrierss.get(hash);
        };
        _proto.getTextureBarrier = function getTextureBarrier(info) {
          var hash = TextureBarrier.computeHash(info);
          if (!this._textureBarriers.has(hash)) {
            this._textureBarriers.set(hash, new TextureBarrier(info, hash));
          }
          return this._textureBarriers.get(hash);
        };
        _proto.getBufferBarrier = function getBufferBarrier(info) {
          var hash = BufferBarrier.computeHash(info);
          if (!this._bufferBarriers.has(hash)) {
            this._bufferBarriers.set(hash, new BufferBarrier(info, hash));
          }
          return this._bufferBarriers.get(hash);
        };
        _proto.copyBuffersToTexture = function copyBuffersToTexture(buffers, texture, regions) {};
        _proto.copyTextureToBuffers = function copyTextureToBuffers(texture, buffers, regions) {};
        _proto.copyTexImagesToTexture = function copyTexImagesToTexture(texImages, texture, regions) {};
        return EmptyDevice;
      }(Device));
      cclegacy.EmptyDevice = EmptyDevice;
    }
  };
});