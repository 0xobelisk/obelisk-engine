System.register("q-bundled:///fs/cocos/rendering/global-descriptor-set-manager.js", ["../gfx/index.js", "./custom/define.js", "./define.js"], function (_export, _context) {
  "use strict";

  var BufferUsageBit, MemoryUsageBit, BufferInfo, Filter, Address, DescriptorSetInfo, DescriptorSetLayoutInfo, SamplerInfo, getDescBindingFromName, getDescriptorSetDataFromLayout, UBOShadow, globalDescriptorSetLayout, PipelineGlobalBindings, isEnableEffect, _samplerLinearInfo, _samplerPointInfo, GlobalDSManager;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    setters: [function (_gfxIndexJs) {
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      BufferInfo = _gfxIndexJs.BufferInfo;
      Filter = _gfxIndexJs.Filter;
      Address = _gfxIndexJs.Address;
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
      DescriptorSetLayoutInfo = _gfxIndexJs.DescriptorSetLayoutInfo;
      SamplerInfo = _gfxIndexJs.SamplerInfo;
    }, function (_customDefineJs) {
      getDescBindingFromName = _customDefineJs.getDescBindingFromName;
      getDescriptorSetDataFromLayout = _customDefineJs.getDescriptorSetDataFromLayout;
    }, function (_defineJs) {
      UBOShadow = _defineJs.UBOShadow;
      globalDescriptorSetLayout = _defineJs.globalDescriptorSetLayout;
      PipelineGlobalBindings = _defineJs.PipelineGlobalBindings;
      isEnableEffect = _defineJs.isEnableEffect;
    }],
    execute: function () {
      _samplerLinearInfo = new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP);
      _samplerPointInfo = new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP);
      _export("GlobalDSManager", GlobalDSManager = /*#__PURE__*/function () {
        function GlobalDSManager(device) {
          this._device = void 0;
          this._descriptorSetMap = new Map();
          this._globalDescriptorSet = void 0;
          this._descriptorSetLayout = void 0;
          this._linearSampler = void 0;
          this._pointSampler = void 0;
          this._device = device;
          this._linearSampler = this._device.getSampler(_samplerLinearInfo);
          this._pointSampler = this._device.getSampler(_samplerPointInfo);
          var layoutInfo = new DescriptorSetLayoutInfo(globalDescriptorSetLayout.bindings);
          this._descriptorSetLayout = this._device.createDescriptorSetLayout(layoutInfo);
          this._globalDescriptorSet = this._device.createDescriptorSet(new DescriptorSetInfo(this._descriptorSetLayout));
        }
        var _proto = GlobalDSManager.prototype;
        _proto.regenLayout = function regenLayout() {
          var layoutInfo = new DescriptorSetLayoutInfo(globalDescriptorSetLayout.bindings);
          this._descriptorSetLayout = this._device.createDescriptorSetLayout(layoutInfo);
          this._globalDescriptorSet = this._device.createDescriptorSet(new DescriptorSetInfo(this._descriptorSetLayout));
        }

        /**
         * @en Bind buffer for all descriptorSets, so that all created descriptorSet buffer are consistent
         * @zh 为所有的 descriptorSet 绑定 buffer，使得所有已创建的 descriptorSet buffer 保持一致
         * @param binding The target binding.
         * @param buffer The buffer to be bound.
         */;
        _proto.bindBuffer = function bindBuffer(binding, buffer) {
          this._globalDescriptorSet.bindBuffer(binding, buffer);
          var it = this._descriptorSetMap.values();
          var res = it.next();
          while (!res.done) {
            var descriptorSet = res.value;
            descriptorSet.bindBuffer(binding, buffer);
            res = it.next();
          }
        }

        /**
         * @en Bind sampler for all descriptorSets, so that all created descriptorSet sampler are consistent
         * @zh 为所有的 descriptorSet 绑定 sampler，使得所有已创建的 descriptorSet sampler 保持一致
         * @param binding The target binding.
         * @param sampler The sampler to be bound.
         */;
        _proto.bindSampler = function bindSampler(binding, sampler) {
          this._globalDescriptorSet.bindSampler(binding, sampler);
          var it = this._descriptorSetMap.values();
          var res = it.next();
          while (!res.done) {
            var descriptorSet = res.value;
            descriptorSet.bindSampler(binding, sampler);
            res = it.next();
          }
        }

        /**
         * @en Bind texture for all descriptorSets, so that all created descriptorSet texture are consistent
         * @zh 为所有的 descriptorSet 绑定 texture，使得所有已创建的 descriptorSet texture 保持一致
         * @param binding The target binding.
         * @param texture The texture to be bound.
         */;
        _proto.bindTexture = function bindTexture(binding, texture) {
          this._globalDescriptorSet.bindTexture(binding, texture);
          var it = this._descriptorSetMap.values();
          var res = it.next();
          while (!res.done) {
            var descriptorSet = res.value;
            descriptorSet.bindTexture(binding, texture);
            res = it.next();
          }
        }

        /**
         * @en Update all descriptorSet
         * @zh 更新所有的 descriptorSet
         */;
        _proto.update = function update() {
          this._globalDescriptorSet.update();
          var it = this._descriptorSetMap.values();
          var res = it.next();
          while (!res.done) {
            var descriptorSet = res.value;
            descriptorSet.update();
            res = it.next();
          }
        }

        /**
         * @en The layout of all created descriptorSets in buffer, sampler, and texture (except shadow) is consistent with the globalDescriptorSet
         * @zh 所有创建出来的 descriptorSet 在 buffer、 sampler、 texture（shadow 除外）的布局与 globalDescriptorSet 保持一致
         * @param idx Specify index creation
         * @return descriptorSet
         */;
        _proto.getOrCreateDescriptorSet = function getOrCreateDescriptorSet(light) {
          var device = this._device;

          // The global descriptorSet is managed by the pipeline and binds the buffer
          if (!this._descriptorSetMap.has(light)) {
            var globalDescriptorSet = isEnableEffect() ? getDescriptorSetDataFromLayout('default').descriptorSet : this._globalDescriptorSet;
            var descriptorSet = device.createDescriptorSet(new DescriptorSetInfo(isEnableEffect() ? getDescriptorSetDataFromLayout('default').descriptorSetLayout : this._descriptorSetLayout));
            this._descriptorSetMap.set(light, descriptorSet);

            // Create & Sync ALL UBO Buffer, Texture, Sampler
            for (var i = PipelineGlobalBindings.UBO_GLOBAL; i < PipelineGlobalBindings.COUNT; i++) {
              descriptorSet.bindBuffer(i, globalDescriptorSet.getBuffer(i));
              descriptorSet.bindSampler(i, globalDescriptorSet.getSampler(i));
              descriptorSet.bindTexture(i, globalDescriptorSet.getTexture(i));
            }
            var shadowUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOShadow.SIZE, UBOShadow.SIZE));
            var binding = isEnableEffect() ? getDescBindingFromName('CCShadow') : UBOShadow.BINDING;
            descriptorSet.bindBuffer(binding, shadowUBO);
            descriptorSet.update();
          }
          return this._descriptorSetMap.get(light);
        };
        _proto.destroy = function destroy() {
          this._descriptorSetLayout.destroy();
        };
        _createClass(GlobalDSManager, [{
          key: "descriptorSetMap",
          get: function get() {
            return this._descriptorSetMap;
          }

          // TODO: Future extensions of PCSS require search depth to compute the penumbra, which requires linear sampling
        }, {
          key: "linearSampler",
          get: function get() {
            return this._linearSampler;
          }

          // TODO: For the use of hard and soft, point sampling is required
        }, {
          key: "pointSampler",
          get: function get() {
            return this._pointSampler;
          }
        }, {
          key: "descriptorSetLayout",
          get: function get() {
            return this._descriptorSetLayout;
          }

          // apply layoutGraph descriptorSet
        }, {
          key: "globalDescriptorSet",
          get: function get() {
            return this._globalDescriptorSet;
          },
          set: function set(val) {
            this._globalDescriptorSet = val;
          }
        }]);
        return GlobalDSManager;
      }());
    }
  };
});