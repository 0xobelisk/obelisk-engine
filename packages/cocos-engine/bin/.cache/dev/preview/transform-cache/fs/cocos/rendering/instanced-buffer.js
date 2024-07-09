System.register("q-bundled:///fs/cocos/rendering/instanced-buffer.js", ["./define.js", "../gfx/index.js"], function (_export, _context) {
  "use strict";

  var UNIFORM_LIGHTMAP_TEXTURE_BINDING, UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING, UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING, BufferUsageBit, MemoryUsageBit, InputAssemblerInfo, Attribute, BufferInfo, INITIAL_CAPACITY, MAX_CAPACITY, InstancedBuffer;
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
      _export("InstancedBuffer", InstancedBuffer = /*#__PURE__*/function () {
        function InstancedBuffer(pass) {
          this.instances = [];
          this.pass = void 0;
          this.hasPendingModels = false;
          this.dynamicOffsets = [];
          this._device = void 0;
          this._device = pass.device;
          this.pass = pass;
        }
        var _proto = InstancedBuffer.prototype;
        _proto.destroy = function destroy() {
          for (var i = 0; i < this.instances.length; ++i) {
            var instance = this.instances[i];
            instance.vb.destroy();
            instance.ia.destroy();
          }
          this.instances.length = 0;
        };
        _proto.merge = function merge(subModel, passIdx, shaderImplant) {
          if (shaderImplant === void 0) {
            shaderImplant = null;
          }
          var attrs = subModel.instancedAttributeBlock;
          var stride = attrs.buffer.length;
          if (!stride) {
            return;
          } // we assume per-instance attributes are always present
          var sourceIA = subModel.inputAssembler;
          var lightingMap = subModel.descriptorSet.getTexture(UNIFORM_LIGHTMAP_TEXTURE_BINDING);
          var reflectionProbeCubemap = subModel.descriptorSet.getTexture(UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING);
          var reflectionProbePlanarMap = subModel.descriptorSet.getTexture(UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING);
          var reflectionProbeBlendCubemap = subModel.descriptorSet.getTexture(UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING);
          var useReflectionProbeType = subModel.useReflectionProbeType;
          var shader = shaderImplant;
          if (!shader) {
            shader = subModel.shaders[passIdx];
          }
          var descriptorSet = subModel.descriptorSet;
          for (var i = 0; i < this.instances.length; ++i) {
            var _instance$ia$indexBuf, _sourceIA$indexBuffer;
            var instance = this.instances[i];
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
              var newSize = instance.stride * instance.capacity;
              var oldData = instance.data;
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
          var vb = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, stride * INITIAL_CAPACITY, stride));
          var data = new Uint8Array(stride * INITIAL_CAPACITY);
          var vertexBuffers = sourceIA.vertexBuffers.slice();
          var attributes = sourceIA.attributes.slice();
          var indexBuffer = sourceIA.indexBuffer;
          for (var _i = 0; _i < attrs.attributes.length; _i++) {
            var attr = attrs.attributes[_i];
            var newAttr = new Attribute(attr.name, attr.format, attr.isNormalized, vertexBuffers.length, true);
            attributes.push(newAttr);
          }
          data.set(attrs.buffer);
          vertexBuffers.push(vb);
          var iaInfo = new InputAssemblerInfo(attributes, vertexBuffers, indexBuffer);
          var ia = this._device.createInputAssembler(iaInfo);
          // eslint-disable-next-line max-len
          this.instances.push({
            count: 1,
            capacity: INITIAL_CAPACITY,
            vb: vb,
            data: data,
            ia: ia,
            stride: stride,
            shader: shader,
            descriptorSet: descriptorSet,
            lightingMap: lightingMap,
            reflectionProbeCubemap: reflectionProbeCubemap,
            reflectionProbePlanarMap: reflectionProbePlanarMap,
            useReflectionProbeType: useReflectionProbeType,
            reflectionProbeBlendCubemap: reflectionProbeBlendCubemap
          });
          this.hasPendingModels = true;
        };
        _proto.uploadBuffers = function uploadBuffers(cmdBuff) {
          for (var i = 0; i < this.instances.length; ++i) {
            var instance = this.instances[i];
            if (!instance.count) {
              continue;
            }
            instance.ia.instanceCount = instance.count;
            cmdBuff.updateBuffer(instance.vb, instance.data);
          }
        };
        _proto.clear = function clear() {
          for (var i = 0; i < this.instances.length; ++i) {
            var instance = this.instances[i];
            instance.count = 0;
          }
          this.hasPendingModels = false;
        };
        return InstancedBuffer;
      }());
    }
  };
});