System.register("q-bundled:///fs/cocos/rendering/instanced-buffer.js", ["./define.js", "../gfx/index.js"], function (_export, _context) {
  "use strict";

  var UNIFORM_LIGHTMAP_TEXTURE_BINDING, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING, BufferUsageBit, MemoryUsageBit, InputAssemblerInfo, Attribute, BufferInfo, InstancedBuffer, INITIAL_CAPACITY, MAX_CAPACITY;
  _export("InstancedBuffer", void 0);
  return {
    setters: [function (_defineJs) {
      UNIFORM_LIGHTMAP_TEXTURE_BINDING = _defineJs.UNIFORM_LIGHTMAP_TEXTURE_BINDING;
      UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING = _defineJs.UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING;
      UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING = _defineJs.UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING;
      UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING = _defineJs.UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING;
    }, function (_gfxIndexJs) {
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      InputAssemblerInfo = _gfxIndexJs.InputAssemblerInfo;
      Attribute = _gfxIndexJs.Attribute;
      BufferInfo = _gfxIndexJs.BufferInfo;
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
      INITIAL_CAPACITY = 32;
      MAX_CAPACITY = 1024;
      _export("InstancedBuffer", InstancedBuffer = class InstancedBuffer {
        constructor(pass) {
          this.instances = [];
          this.pass = void 0;
          this.hasPendingModels = false;
          this.dynamicOffsets = [];
          this._device = void 0;
          this._device = pass.device;
          this.pass = pass;
        }
        destroy() {
          for (let i = 0; i < this.instances.length; ++i) {
            const instance = this.instances[i];
            instance.vb.destroy();
            instance.ia.destroy();
          }
          this.instances.length = 0;
        }
        merge(subModel, passIdx, shaderImplant = null) {
          const attrs = subModel.instancedAttributeBlock;
          const stride = attrs.buffer.length;
          if (!stride) {
            return;
          } // we assume per-instance attributes are always present
          const sourceIA = subModel.inputAssembler;
          const lightingMap = subModel.descriptorSet.getTexture(UNIFORM_LIGHTMAP_TEXTURE_BINDING);
          const reflectionProbeCubemap = subModel.descriptorSet.getTexture(UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING);
          const reflectionProbePlanarMap = subModel.descriptorSet.getTexture(UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING);
          const reflectionProbeBlendCubemap = subModel.descriptorSet.getTexture(UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING);
          const useReflectionProbeType = subModel.useReflectionProbeType;
          let shader = shaderImplant;
          if (!shader) {
            shader = subModel.shaders[passIdx];
          }
          const descriptorSet = subModel.descriptorSet;
          for (let i = 0; i < this.instances.length; ++i) {
            var _instance$ia$indexBuf, _sourceIA$indexBuffer;
            const instance = this.instances[i];
            if (((_instance$ia$indexBuf = instance.ia.indexBuffer) === null || _instance$ia$indexBuf === void 0 ? void 0 : _instance$ia$indexBuf.objectID) !== ((_sourceIA$indexBuffer = sourceIA.indexBuffer) === null || _sourceIA$indexBuffer === void 0 ? void 0 : _sourceIA$indexBuffer.objectID) || instance.count >= MAX_CAPACITY) {
              continue;
            }

            // check same binding
            if (instance.lightingMap.objectID !== lightingMap.objectID) {
              continue;
            }
            if (instance.useReflectionProbeType !== useReflectionProbeType) {
              continue;
            }
            if (instance.reflectionProbeCubemap.objectID !== reflectionProbeCubemap.objectID) {
              continue;
            }
            if (instance.reflectionProbePlanarMap.objectID !== reflectionProbePlanarMap.objectID) {
              continue;
            }
            if (instance.reflectionProbeBlendCubemap.objectID !== reflectionProbeBlendCubemap.objectID) {
              continue;
            }
            if (instance.stride !== stride) {
              // we allow this considering both baked and non-baked
              // skinning models may be present in the same buffer
              continue;
            }
            if (instance.count >= instance.capacity) {
              // resize buffers
              instance.capacity <<= 1;
              const newSize = instance.stride * instance.capacity;
              const oldData = instance.data;
              instance.data = new Uint8Array(newSize);
              instance.data.set(oldData);
              instance.vb.resize(newSize);
            }
            instance.shader = shader;
            instance.descriptorSet = descriptorSet;
            instance.data.set(attrs.buffer, instance.stride * instance.count++);
            this.hasPendingModels = true;
            return;
          }

          // Create a new instance
          const vb = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, stride * INITIAL_CAPACITY, stride));
          const data = new Uint8Array(stride * INITIAL_CAPACITY);
          const vertexBuffers = sourceIA.vertexBuffers.slice();
          const attributes = sourceIA.attributes.slice();
          const indexBuffer = sourceIA.indexBuffer;
          for (let i = 0; i < attrs.attributes.length; i++) {
            const attr = attrs.attributes[i];
            const newAttr = new Attribute(attr.name, attr.format, attr.isNormalized, vertexBuffers.length, true);
            attributes.push(newAttr);
          }
          data.set(attrs.buffer);
          vertexBuffers.push(vb);
          const iaInfo = new InputAssemblerInfo(attributes, vertexBuffers, indexBuffer);
          const ia = this._device.createInputAssembler(iaInfo);
          // eslint-disable-next-line max-len
          this.instances.push({
            count: 1,
            capacity: INITIAL_CAPACITY,
            vb,
            data,
            ia,
            stride,
            shader,
            descriptorSet,
            lightingMap,
            reflectionProbeCubemap,
            reflectionProbePlanarMap,
            useReflectionProbeType,
            reflectionProbeBlendCubemap
          });
          this.hasPendingModels = true;
        }
        uploadBuffers(cmdBuff) {
          for (let i = 0; i < this.instances.length; ++i) {
            const instance = this.instances[i];
            if (!instance.count) {
              continue;
            }
            instance.ia.instanceCount = instance.count;
            cmdBuff.updateBuffer(instance.vb, instance.data);
          }
        }
        clear() {
          for (let i = 0; i < this.instances.length; ++i) {
            const instance = this.instances[i];
            instance.count = 0;
          }
          this.hasPendingModels = false;
        }
      });
    }
  };
});